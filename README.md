# Portfolio

Personal site + blog built with [Astro](https://astro.build), styled after typesafe.ai, deployed to GitHub Pages.

## Develop

```sh
npm install
npm run dev        # http://localhost:4321
npm run build      # outputs to dist/
```

## Make it yours

Almost everything lives in **`src/site.config.ts`** — name, headline, about, projects, experience, socials, email.
Colors and fonts are tokens at the top of `src/styles/global.css`.

## Migrate from Medium

**All posts (recommended)**

1. On Medium: **Settings → Security and apps → Download your information**. Medium emails you a zip.
2. Unzip it into this folder as `medium-export/` (it's git-ignored).
3. Run:

```sh
npm run import:medium -- --export ./medium-export
```

**Recent posts only (quick)** — Medium's RSS feed exposes about the last 10 posts:

```sh
npm run import:medium -- --user yourmediumusername
# or save https://medium.com/feed/@yourmediumusername from your browser and:
npm run import:medium -- --feed ./feed.xml
```

Each post becomes `src/content/blog/<slug>/index.md`, with images downloaded next to it.
Drafts are skipped, and so are posts under 150 words (Medium exports include your comment replies as posts) — change with `--min-words 0`.
Re-running skips posts that already exist; add `--force` to overwrite.
Pass `--category <name>` to set the category shown on the posts (default `essay`).

After importing, skim each post — embeds (gists, tweets) come across as iframes and sometimes want a manual touch-up.
Each post keeps an `originalURL` and shows an "Originally published on Medium" note. Your site is the canonical URL;
optionally, set each Medium story's canonical link to the new URL (story settings → Advanced) so search engines credit this site.

## Writing folders

Posts live in folders, each with its own page:

```
src/content/blog/
├── technical-writing/              → /blog/technical-writing/
└── probabilistic-threat-hunting/   → /blog/probabilistic-threat-hunting/  (PTH series)
```

Folders are defined in `writing` in `src/site.config.ts` (title, description, optional short name).
Set `series: true` to list a folder oldest-first with numbered parts and previous/next-part links — PTH uses this.
To add a folder, add an entry there and create the matching directory. To move a post, move its directory.

The importer writes into `technical-writing/` by default; use `--folder probabilistic-threat-hunting` to import elsewhere.

## Writing new posts

Create `src/content/blog/<folder>/my-new-post/index.md`, e.g. `src/content/blog/probabilistic-threat-hunting/pth-chapter-4/index.md`:

```md
---
title: "My new post"
description: "One-line summary shown on cards."
pubDate: 2026-09-16
category: "essay"
tags: ["ai"]
heroImage: ./cover.png   # optional, file next to index.md
draft: false
---

Post body in Markdown.
```

## Deploy to GitHub Pages

1. Create a GitHub repo. Name it `<your-username>.github.io` for a root URL, or anything else for `<your-username>.github.io/<repo>` — both work automatically.
2. Push this folder to the `main` branch.
3. In the repo: **Settings → Pages → Source: GitHub Actions**.

Every push to `main` rebuilds and deploys (`.github/workflows/deploy.yml`).
For a custom domain, add a `public/CNAME` file containing the domain and configure it under Settings → Pages.
