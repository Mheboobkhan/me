#!/usr/bin/env node
/**
 * Migrate Medium posts into src/content/blog/<slug>/index.md
 *
 *   Full archive (recommended — gets every post):
 *     1. medium.com → Settings → Security and apps → Download your information
 *     2. Unzip it, then:
 *        npm run import:medium -- --export ./medium-export
 *
 *   Quick (RSS — Medium only exposes your ~10 most recent posts):
 *        npm run import:medium -- --user yourusername
 *     or, with a feed saved from https://medium.com/feed/@yourusername:
 *        npm run import:medium -- --feed ./feed.xml
 *
 * Options:
 *   --force            overwrite posts that were already imported
 *   --no-images        keep images hotlinked to Medium's CDN instead of downloading
 *   --min-words <n>    skip very short posts (Medium exports include comment
 *                      "responses" as posts). Default 150. Use 0 to keep all.
 *   --category <name>  category to assign when Medium provides none. Default "essay".
 *   --folder <slug>    writing folder to import into (see `writing` in src/site.config.ts).
 *                      Default "technical-writing".
 */
import fs from 'node:fs/promises';
import path from 'node:path';
import { parse } from 'node-html-parser';
import TurndownService from 'turndown';

const BLOG_DIR = path.resolve('src/content/blog');

// ── args ────────────────────────────────────────────────────
const args = process.argv.slice(2);
const flag = (name) => args.includes(`--${name}`);
const opt = (name, fallback) => {
  const i = args.indexOf(`--${name}`);
  return i >= 0 && args[i + 1] && !args[i + 1].startsWith('--') ? args[i + 1] : fallback;
};
const exportDir = opt('export');
const user = opt('user')?.replace(/^@/, '');
const feedFile = opt('feed');
const force = flag('force');
const downloadImages = !flag('no-images');
const minWords = Number(opt('min-words', 150));
const defaultCategory = opt('category', 'essay');
const OUT_DIR = path.join(BLOG_DIR, opt('folder', 'technical-writing'));

if (!exportDir && !user && !feedFile) {
  console.error('Usage:\n  npm run import:medium -- --export ./medium-export\n  npm run import:medium -- --user yourusername');
  process.exit(1);
}

// ── markdown conversion ─────────────────────────────────────
const td = new TurndownService({
  headingStyle: 'atx',
  codeBlockStyle: 'fenced',
  bulletListMarker: '-',
  emDelimiter: '*',
  hr: '---',
});
td.keep(['iframe']);
td.addRule('medium-pre', {
  filter: 'pre',
  replacement: (_content, node) => {
    const lang = node.getAttribute('data-code-block-lang') || '';
    const code = node.textContent.replace(/\n$/, '');
    return `\n\n\`\`\`${lang}\n${code}\n\`\`\`\n\n`;
  },
});
td.addRule('figure', {
  filter: 'figure',
  replacement: (_content, node) => {
    const img = node.querySelector('img');
    const iframe = node.querySelector('iframe');
    const caption = node.querySelector('figcaption')?.textContent.trim();
    if (iframe) return `\n\n${iframe.outerHTML}\n\n`;
    if (!img) return _content;
    const alt = (img.getAttribute('alt') || caption || '').replace(/[\[\]\n]/g, ' ').trim();
    return `\n\n![${alt}](${img.getAttribute('src')})${caption ? `\n*${caption}*` : ''}\n\n`;
  },
});

function cleanHtml(html) {
  const root = parse(html, { blockTextElements: { script: false, style: false, pre: true } });
  // Medium tracking pixel (RSS) and the duplicated title/subtitle (export).
  root.querySelectorAll('img[src*="medium.com/_/stat"]').forEach((n) => n.remove());
  root.querySelectorAll('.graf--title, .graf--subtitle').forEach((n) => n.remove());
  // The first section divider is decorative.
  root.querySelector('.section--first .section-divider')?.remove();
  // <br> inside code blocks are newlines.
  root.querySelectorAll('pre').forEach((pre) => {
    pre.innerHTML = pre.innerHTML.replace(/<br\s*\/?>/gi, '\n');
  });
  // Upgrade image resolution.
  root.querySelectorAll('img').forEach((img) => {
    const src = img.getAttribute('src') || img.getAttribute('data-src');
    if (src) img.setAttribute('src', src.replace(/\/max\/\d+\//, '/max/1600/'));
  });
  return root.toString();
}

function toMarkdown(html) {
  return td
    .turndown(cleanHtml(html))
    // Medium splits multi-line code into consecutive <pre> blocks — merge them.
    .replace(/\n```\n\n```[a-z]*\n/g, '\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

// ── helpers ─────────────────────────────────────────────────
function slugify(s) {
  return s
    .normalize('NFKD')
    .replace(/\p{M}/gu, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 80)
    .replace(/-+$/, '');
}

/** "my-post-title-3f9a2b1c4d5e" → "my-post-title" */
const stripMediumId = (s) => s.replace(/-[0-9a-f]{8,12}$/i, '');

const EXT = { 'image/jpeg': '.jpg', 'image/png': '.png', 'image/gif': '.gif', 'image/webp': '.webp', 'image/svg+xml': '.svg' };

async function localizeImages(markdown, dir) {
  if (!downloadImages) return markdown;
  const urls = [...new Set([...markdown.matchAll(/!\[[^\]]*\]\((https?:[^)\s]+)\)/g)].map((m) => m[1]))];
  let i = 0;
  for (const src of urls) {
    i++;
    try {
      const res = await fetch(src);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const type = res.headers.get('content-type')?.split(';')[0] ?? '';
      const ext = EXT[type] || path.extname(new URL(src).pathname) || '.png';
      const file = `image-${String(i).padStart(2, '0')}${ext}`;
      await fs.writeFile(path.join(dir, file), Buffer.from(await res.arrayBuffer()));
      markdown = markdown.split(`(${src})`).join(`(./${file})`);
    } catch (e) {
      console.warn(`    ! kept remote image (${e.message}): ${src}`);
    }
  }
  return markdown;
}

function describe(subtitle, markdown) {
  if (subtitle) return subtitle.trim();
  const para = markdown
    .split('\n\n')
    .find((b) => b && !/^(#|!\[|```|<|>|-|\d+\.)/.test(b.trim()));
  if (!para) return '';
  const text = para.replace(/[*_`]|\[([^\]]*)\]\([^)]*\)/g, '$1').replace(/\s+/g, ' ').trim();
  return text.length > 180 ? text.slice(0, 177).replace(/\s+\S*$/, '') + '…' : text;
}

const words = (s) => s.split(/\s+/).filter(Boolean).length;

async function writePost({ title, subtitle, date, html, canonical, slug, tags = [] }) {
  const dir = path.join(OUT_DIR, slug);
  // A post already sorted into any folder counts as imported.
  const folders = (await fs.readdir(BLOG_DIR, { withFileTypes: true })).filter((e) => e.isDirectory());
  const existsAnywhere = await Promise.all(folders.map((f) => fs.stat(path.join(BLOG_DIR, f.name, slug)).then(() => true, () => false)));
  const exists = existsAnywhere.some(Boolean) || (await fs.stat(dir).then(() => true, () => false));
  if (exists && !force) return console.log(`  = skip (exists) ${slug}`);

  let body = toMarkdown(html);
  if (words(body) < minWords) return console.log(`  - skip (${words(body)} words, likely a response) ${title.slice(0, 60)}`);

  await fs.mkdir(dir, { recursive: true });
  body = await localizeImages(body, dir);

  const fm = [
    '---',
    `title: ${JSON.stringify(title)}`,
    `description: ${JSON.stringify(describe(subtitle, body))}`,
    `pubDate: ${new Date(date).toISOString().slice(0, 10)}`,
    `category: ${JSON.stringify(tags[0] ? slugify(tags[0]).replace(/-/g, ' ') : defaultCategory)}`,
    `tags: ${JSON.stringify(tags.map((t) => t.toLowerCase()))}`,
    canonical ? `originalURL: ${JSON.stringify(canonical)}` : null,
    '---',
    '',
  ]
    .filter((l) => l !== null)
    .join('\n');

  await fs.writeFile(path.join(dir, 'index.md'), `${fm}\n${body}\n`);
  console.log(`  + ${slug}`);
}

// ── sources ─────────────────────────────────────────────────
async function fromExport(root) {
  const postsDir = (await fs.stat(path.join(root, 'posts')).then(() => true, () => false)) ? path.join(root, 'posts') : root;
  const files = (await fs.readdir(postsDir)).filter((f) => f.endsWith('.html'));
  const published = files.filter((f) => !f.startsWith('draft_'));
  console.log(`Found ${published.length} published posts (${files.length - published.length} drafts skipped) in ${postsDir}`);

  for (const file of published) {
    const doc = parse(await fs.readFile(path.join(postsDir, file), 'utf8'));
    const title = doc.querySelector('h1.p-name, title')?.textContent.trim() || file;
    const date = doc.querySelector('time.dt-published')?.getAttribute('datetime') || file.slice(0, 10);
    const canonical = doc.querySelector('a.p-canonical')?.getAttribute('href');
    const subtitle = doc.querySelector('section[data-field="subtitle"]')?.textContent;
    const html = doc.querySelector('section[data-field="body"]')?.innerHTML ?? '';
    const fromName = stripMediumId(file.replace(/\.html$/, '').replace(/^\d{4}-\d{2}-\d{2}_/, ''));
    await writePost({ title, subtitle, date, html, canonical, slug: slugify(fromName) || slugify(title) });
  }
}

async function readFeed() {
  if (feedFile) return fs.readFile(path.resolve(feedFile), 'utf8');
  const feedUrl = `https://medium.com/feed/@${user}`;
  console.log(`Fetching ${feedUrl}`);
  const res = await fetch(feedUrl, { headers: { 'User-Agent': 'Mozilla/5.0 (portfolio importer)' } });
  if (!res.ok) throw new Error(`Feed request failed: HTTP ${res.status}`);
  return res.text();
}

async function fromRss() {
  const xml = await readFeed();
  // Regex, not an HTML parser: <link> is a void element in HTML and would lose its text.
  const items = [...xml.matchAll(/<item>([\s\S]*?)<\/item>/g)].map((m) => m[1]);
  console.log(`Found ${items.length} posts (RSS only includes recent ones — use --export for everything)`);

  const cdata = (s = '') => s.replace(/^\s*<!\[CDATA\[/, '').replace(/\]\]>\s*$/, '').trim();
  const tag = (item, name) => cdata(item.match(new RegExp(`<${name}[^>]*>([\\s\\S]*?)</${name}>`))?.[1]);
  for (const item of items) {
    const title = tag(item, 'title');
    const canonical = tag(item, 'link').split('?')[0];
    const html = tag(item, 'content:encoded');
    const tags = [...item.matchAll(/<category>([\s\S]*?)<\/category>/g)].map((m) => cdata(m[1]));
    const urlSlug = canonical ? stripMediumId(canonical.split('/').pop()) : '';
    await writePost({ title, date: tag(item, 'pubDate'), html, canonical, slug: slugify(urlSlug) || slugify(title), tags });
  }
}

await fs.mkdir(OUT_DIR, { recursive: true });
if (exportDir) await fromExport(path.resolve(exportDir));
else await fromRss();
console.log('Done. Run `npm run dev` to preview.');
