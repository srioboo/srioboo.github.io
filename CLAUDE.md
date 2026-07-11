# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Personal portfolio/blog built with Astro 6, deployed as a static site to GitHub Pages at `https://srioboo.github.io/`. Blog content is authored in Spanish/English Markdown and MDX. Svelte is available for interactive components; Tailwind CSS v4 (via the Vite plugin) handles styling.

## Commands

```bash
npm run dev       # Local dev server (hot reload) at localhost:4321
npm run build     # astro check && astro build — type/schema check, then build to dist/
npm run preview   # Preview the production build at localhost:4173
npm run test      # Playwright E2E tests (builds + previews the site first, runs on :4173)
npm run lint      # Prettier check + ESLint (no changes made)
npm run format    # Auto-fix formatting with Prettier (incl. prettier-plugin-astro)
npm run release   # release-it: bump version, update CHANGELOG.md, create git tag
```

Run a single Playwright test: `npx playwright test src/test/index.spec.ts -g "test name"`.

Node version is pinned via `.nvmrc` (v18.18.0), `engine-strict=true` in `.npmrc`. `bun.lockb` is present in the repo, but all scripts and CI use `npm run ...`.

Commits must follow Conventional Commits (Angular preset) — enforced by commitlint via a Husky hook. `npm run release` derives the version bump and CHANGELOG sections from these commit types.

## Architecture

### Content collections

Blog posts are Markdown/MDX files under `src/content/blog/` (subdirectories are included via `src/content.config.ts`'s glob pattern `**/*.{md,mdx}`, e.g. `src/content/blog/en/`). The collection schema (Zod, in `src/content.config.ts`) requires `title`, `description`, `pubDate` on every post; `updatedDate` and `heroImage` are optional. `astro check` (run as part of `npm run build`) fails the build on schema violations — this is the first thing to check if a new post breaks the build.

Filenames starting with `_` (e.g. `_test-en.md`) are treated as drafts/excluded by Astro's content collections.

`src/content/blog-test/` is a second, separate directory (not a registered collection) holding example MDX/Markdown from the original Astro blog starter — not rendered on the site.

### Routing

File-based routing under `src/pages/`. The dynamic route `src/pages/blog/[...slug].astro` calls `getStaticPaths()` against `getCollection('blog')` to pre-render one static page per post at build time, wrapping each in the `BlogPost` layout. `src/pages/_about.astro` (leading underscore) is excluded from routing.

### Layout/component composition

- `src/layouts/BlogPost.astro` — post-level HTML shell (head, hero image, title/date block, prose wrapper), composed from `BaseHead`, `Header`, `Footer`, `FormattedDate`.
- `src/components/BaseHead.astro` — shared `<head>` (meta, OpenGraph/Twitter cards, canonical URL, font preloads) and the single import point for `src/styles/global.css`. Any page/layout needing global styles must render `<BaseHead />`.
- Svelte components integrate via `@astrojs/svelte`; use Astro's `client:*` directives for hydration when adding interactivity.

### Styling

Tailwind v4 is wired through `@tailwindcss/vite` (not a `tailwind.config.js`/PostCSS setup) — configuration lives in `astro.config.mjs` and `@import "tailwindcss"` at the top of `src/styles/global.css`. Site-wide CSS custom properties (colors, box-shadow) are defined in `:root` in `global.css`; component-scoped styles use `<style>` blocks inside `.astro` files.

### RSS/sitemap

`src/pages/rss.xml.js` generates the RSS feed via `@astrojs/rss`. `@astrojs/sitemap` auto-generates `/sitemap.xml` at build time; both are configured as integrations in `astro.config.mjs`.

### Deployment

GitHub Actions (`.github/workflows/deploy.yml`) builds and deploys to GitHub Pages via `withastro/action@v2` on every push to `main`. There is no separate staging environment — `main` is production.

## Notes

- `src/test/index.spec.ts` and `src/test/test.ts` are leftovers from the original Astro/SvelteKit starter templates and assert against content that doesn't match this site (e.g. title `'Astro is awesome!'`, an `h1` of `'Welcome to SvelteKit'`). They currently do not reflect real site content — treat `npm run test` failures accordingly rather than assuming a regression, and update/replace these tests before relying on them.
