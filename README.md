# Krishanu Biswas — Portfolio

Personal portfolio site: Next.js (App Router) + TypeScript + Tailwind CSS v4, built as a fully
static site (`next build` → `out/`) so it can be hosted anywhere for free, with no server.

## Updating content (no code knowledge needed)

Everything you'd want to change day-to-day lives in plain data files under `src/content/`:

| File | What it controls |
|---|---|
| `src/content/profile.ts` | Name, tagline, summary, contact links (LinkedIn, email) |
| `src/content/experience.ts` | Job history on the Experience page and homepage |
| `src/content/education.ts` | Education + early/freelance work |
| `src/content/skills.ts` | Skill groups and personal interests |
| `src/content/projects.ts` | Case studies on the Work page |
| `src/content/nav.ts` | Top navigation links |

To add a new project: copy one of the existing objects in `src/content/projects.ts`, give it a
new unique `slug`, and fill in the fields — a page is created for it automatically at
`/work/<slug>/`.

Two more files matter but are **not shown on the site** — they're internal notes for whoever
maintains the content:

- `PORTFOLIO_PERSONAL_DATA_REFERENCE.md` — the fuller background reference, verification flags,
  and the client-disclosure register (who can be named publicly and who can't).
- `PORTFOLIO_CONTENT_VERIFICATION.md` — a running list of which public claims are verified vs.
  still need confirmation.

Check both before adding any new client name, project detail, or metric to the public site.

## Local development

Requires Node.js (18+) and npm.

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Building and previewing the production site

```bash
npm run build     # outputs the static site into out/
npx serve out     # preview the exact static output locally (optional)
```

## Regenerating the downloadable resume PDF

The PDF behind the "Download PDF" button on `/resume/` is generated from the same content files
as the on-page resume, so it can't drift out of sync by hand-editing:

```bash
npm run resume:pdf
```

This writes `public/resume.pdf`. Run it (and commit the updated PDF) any time you change
`src/content/experience.ts`, `education.ts`, `skills.ts`, or `profile.ts`.

## Deployment (GitHub Pages)

This repo deploys to **GitHub Pages** automatically via GitHub Actions
(`.github/workflows/deploy.yml`):

- **Live URL:** https://krbiswas.github.io/krishanu-portfolio/
- **Production branch:** `main`
- **Build command:** `npm run build` (static export to `out/`)
- **Pages source:** GitHub Actions (set under Settings → Pages in the repo)

Because the site is served from `/krishanu-portfolio/` rather than a domain root,
`next.config.ts` sets `basePath: "/krishanu-portfolio"` — every internal link and asset path is
generated with that prefix at build time. If this repo is ever renamed, or moved to a custom
domain, update (or remove) `basePath` in `next.config.ts` to match.

Normal workflow:

```
Edit content in src/content/ → commit → git push → GitHub Actions builds & deploys automatically
```

No environment variables or secrets are required — this site has no backend, no database, and
no API keys. You can watch a deployment's progress under the repo's **Actions** tab.

### Recovering from a failed deploy

1. Open the repo's **Actions** tab on GitHub and check the failed run's log.
2. Reproduce locally with `npm run build` — if it fails the same way locally, fix it there, then
   commit and push again.
3. If a deploy succeeded but the live site looks wrong, GitHub Pages keeps the previous deployment
   live until a new one finishes — push a fix and the next successful run replaces it.
4. You can also re-run the latest workflow manually from the Actions tab without a new commit
   (the workflow supports manual "Run workflow" triggers).

## Tech notes

- Static export (`output: "export"` in `next.config.ts`) — every route is pre-rendered HTML, no
  Node.js server needed at runtime.
- Styling: Tailwind CSS v4 with a small set of semantic CSS custom properties (see
  `src/app/globals.css`) for colors, so the whole palette can be restyled from one place.
- Dark mode: respects the visitor's OS setting by default, with a manual toggle in the header
  (stored in `localStorage`).
- No backend, no database, no analytics, no tracking scripts.
