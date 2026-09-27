import { getCollection, type CollectionEntry } from 'astro:content';
import { site } from './site.config';

export type Post = CollectionEntry<'blog'>;
export type Folder = { slug: string; title: string; description?: string; short?: string; series?: boolean; home?: boolean };

/** Prefix an internal path with the configured base (needed for project-repo GitHub Pages). */
export function url(path = '/') {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}/${path.replace(/^\//, '')}`;
}

export async function getPosts() {
  const posts = await getCollection('blog', ({ data }) => !data.draft);
  return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

/** Folder a post lives in — the first path segment of its id. Unknown folders fall back to the first one. */
export function folderOf(post: Post): Folder {
  const slug = post.id.split('/')[0];
  return (site.writing.find((f) => f.slug === slug) ?? site.writing[0]) as Folder;
}

/** Every configured folder with its posts (newest first), including empty folders. */
export async function getFolders() {
  const posts = await getPosts();
  return site.writing.map((f) => {
    const folder = f as Folder;
    const inFolder = posts.filter((p) => folderOf(p).slug === folder.slug);
    return { folder, posts: folder.series ? inFolder.reverse() : inFolder };
  });
}

export function formatDate(d: Date) {
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: '2-digit', timeZone: 'UTC' });
}

export function readingTime(body = '') {
  return Math.max(1, Math.round(body.split(/\s+/).length / 230));
}

/** Decorative base64 string, in the spirit of the reference design. */
export function b64(text: string) {
  return Buffer.from(text).toString('base64');
}
