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

## Deployment (Cloudflare Pages)

This repo is connected to Cloudflare Pages for automatic deployment:

- **Production branch:** `main`
- **Build command:** `npm run build`
- **Build output directory:** `out`
- **Framework preset:** none / static (this is a static export, not a Next.js server)

Normal workflow:

```
Edit content in src/content/ → commit → git push → Cloudflare Pages builds & deploys automatically
```

No environment variables or secrets are required — this site has no backend, no database, and
no API keys.

### Recovering from a failed deploy

1. Check the failed build's log in the Cloudflare Pages dashboard (Workers & Pages → this
   project → the failed deployment).
2. Reproduce locally with `npm run build` — if it fails the same way locally, fix it there, then
   commit and push again.
3. If a deploy succeeded but the live site looks wrong, Cloudflare Pages keeps every previous
   deployment — you can roll back to an earlier one from the dashboard while you fix forward.

## Tech notes

- Static export (`output: "export"` in `next.config.ts`) — every route is pre-rendered HTML, no
  Node.js server needed at runtime.
- Styling: Tailwind CSS v4 with a small set of semantic CSS custom properties (see
  `src/app/globals.css`) for colors, so the whole palette can be restyled from one place.
- Dark mode: respects the visitor's OS setting by default, with a manual toggle in the header
  (stored in `localStorage`).
- No backend, no database, no analytics, no tracking scripts.
