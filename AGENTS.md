# AGENTS.md - AI Coding Assistant Guide

## Project Overview
Personal portfolio built with **Astro 5** as a GitHub Pages site. It features:
- Static content generation with Astro
- Markdown blog posts with frontmatter schema validation
- MDX support for interactive blog content
- Svelte components for dynamic UI
- Tailwind CSS for styling
- Playwright for E2E tests

**Key Site Configuration:**
- Hosted at: `https://srioboo.github.io/`
- Package manager: Bun
- TypeScript with strict null checks
- Deployed via GitHub Actions on `main` branch push

---

## Critical Architecture Patterns

### Content-First Model with Type Safety
Blog posts live in `src/content/blog/` as `.md` or `.mdx` files. The content collection uses **Zod schema validation** (`src/content/config.ts`):
```typescript
schema: z.object({
  title: z.string(),
  description: z.string(),
  pubDate: z.coerce.date(),
  updatedDate: z.coerce.date().optional(),
  heroImage: z.string().optional().default('/blog-placeholder-1.jpg')
})
```

All blog posts **must have** these frontmatter fields. New posts require this structure:
```yaml
---
title: "Post Title"
description: "Brief description"
pubDate: 2026-04-05
---
```

### Dynamic Routes via getStaticPaths
Blog posts use file-based routing with `[...slug].astro` (`src/pages/blog/[...slug].astro`). The route handler:
1. Queries all posts from the `blog` collection
2. Maps each post to a static route at `/blog/{slug}`
3. Renders via `BlogPost` layout + the post's content component

This pattern is Astro-specific: routes are generated at **build time**, not runtime.

### Component Hierarchy
- **Layouts** (`src/layouts/BlogPost.astro`): Wrap pages with consistent structure (header, footer, metadata)
- **Components** (`src/components/`): Reusable elements (BaseHead, Header, Footer, FormattedDate)
  - `BaseHead.astro` globally imports `src/styles/global.css`
  - Used in every layout via composition
- **Svelte components** optionally integrated via `astro:svelte` integration for client-side interactivity

---

## Development Workflows

### Build & Preview
```bash
npm run dev       # Local dev server (hot reload) on :3000
npm run build     # Check types + build static HTML/assets (outputs to dist/)
npm run preview   # Preview production build on :4173
```

**Build command detail:** `astro check && astro build`
- `astro check` validates TypeScript/content schemas before building
- Failure here prevents deployment

### Testing & Code Quality
```bash
npm run test      # Playwright E2E tests (builds + previews, runs on :4173)
npm run lint      # Prettier + ESLint checks (no formatting changes)
npm run format    # Auto-fix formatting (Prettier + Astro plugin)
```

**Test configuration** (`playwright.config.ts`):
- Runs against production build (`npm run build && npm run preview`)
- Example test in `src/test/index.spec.ts` validates page title

### Release Workflow
The project uses **conventional commits** + **release-it**:
1. Commits must follow Angular convention (`feat:`, `fix:`, `docs:`, etc.)
   - Enforced by Husky pre-commit hook + commitlint
2. `npm run release` bumps version, generates CHANGELOG, and creates git tags
3. GitHub Actions auto-deploys on `main` push (`.github/workflows/deploy.yml`)

**Commit validation:** `npm run commitlint --edit` (hooks run this automatically)

---

## Project-Specific Conventions

### Naming Conventions
- **Blog files:** kebab-case (e.g., `git-workflow.md`, `commitizen.md`)
- **Components:** PascalCase (e.g., `FormattedDate.astro`, `HeaderLink.astro`)
- **Layouts:** PascalCase ending in `.astro` (e.g., `BlogPost.astro`)
- **Content collections:** lowercase, no hyphens (e.g., `blog`, `blog-test`)

### File Organization
```
src/
  components/     # Reusable .astro components
  content/        # Content collections (blog, blog-test)
    blog/         # Markdown posts (type-safe via schema)
    config.ts     # Collection schemas & types
  layouts/        # Page templates wrapping content
  pages/          # File-based routes
    blog/
      [...slug].astro    # Dynamic blog post route
      index.astro        # Blog listing page
  styles/         # Imported in BaseHead.astro
  test/           # Playwright tests
```

### Styling
- **Global styles:** `src/styles/global.css` (imported once via `BaseHead.astro`)
- **Component styles:** Scoped `<style>` blocks inside `.astro` components
- **Tailwind:** Via `@tailwindcss/vite` (not standard config — VitePlugin approach)
- **Font preload:** Configured in `BaseHead.astro` for performance

### TypeScript Strictness
- Config extends `astro/tsconfigs/strict` with `strictNullChecks: true`
- Use `z.optional()` or default values in schemas (don't rely on `undefined`)
- Props passed to components use TypeScript `interface Props`

---

## Integration Points & External Dependencies

### Astro Integrations (astro.config.mjs)
- `@astrojs/mdx` — Enables `.mdx` files with JSX-like syntax in blog posts
- `@astrojs/sitemap` — Auto-generates `/sitemap.xml`
- `@astrojs/svelte` — Supports `.svelte` components with `client:*` directives
- `@tailwindcss/vite` — TailwindCSS v4 via Vite plugin (not PostCSS)

### External APIs/Services
- **GitHub Pages:** Deployment target (no API integration required, only git push)
- **Astro Content Validation:** Uses `astro:content` module (built-in, no external service)

### RSS Feed
`src/pages/rss.xml.js` generates `/rss.xml`. Uses `@astrojs/rss` integration.

---

## Debugging & Common Issues

### Content Not Appearing in Build
- Check `src/content/config.ts` schema — missing/invalid frontmatter fails validation
- Run `npm run build` (includes `astro check`) to see schema errors
- Verify post is in `src/content/blog/` (not subdirectories, only `.md`/`.mdx` supported)

### Type Errors After Adding Fields
- Update the Zod schema in `src/content/config.ts` for new frontmatter fields
- TypeScript won't re-check until schema changes

### Tests Fail After Build Changes
- `playwright.config.ts` rebuilds & previews before tests
- Ensure `npm run build` succeeds locally before running tests

### GitHub Pages Deploy Fails
- Check `.github/workflows/deploy.yml` — uses `withastro/action@v2`
- Common issue: `astro check` fails during build step (fix schema/TypeScript errors)
- Verify `site: 'https://srioboo.github.io/'` in `astro.config.mjs` matches your repo

---

## Key Files Reference
- `src/consts.ts` — Global site constants (SITE_TITLE, SITE_DESCRIPTION)
- `src/content/config.ts` — Content collection schemas (blog type & fields)
- `astro.config.mjs` — Integrations, site URL, build config
- `package.json` — Scripts (dev, build, test, lint, format, release)
- `commitlint.config.cjs` — Commit message validation rules

