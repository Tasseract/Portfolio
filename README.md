# Jhalen Troy L. Jose — Portfolio

Personal portfolio site, built with Next.js 16, Tailwind CSS v4, and Motion (Framer Motion).
Material 3 expressive design tokens, glassmorphic surfaces, animated transitions.

## Tech

- **Next.js 16** (App Router, TypeScript) — Turbopack default
- **Tailwind CSS v4** — Material 3 tokens via `@theme`
- **motion** — entrance / hover / tap micro-interactions
- **next-themes** — light / dark with persistence
- **lucide-react** — iconography

## Local development

```bash
npm install
npm run dev
```

Opens at http://localhost:3000.

```bash
npm run build       # production build
npm start           # serve the production build
npm run lint        # ESLint
```

## Editing content

All copy lives in [`src/lib/data.ts`](src/lib/data.ts) — profile info, the seven craft pillars,
skill groups, and projects. Edit there and every section updates.

## Deploying to Vercel

### Option A — drop-in deploy

```bash
npx vercel
# follow the prompts
```

### Option B — Git-based

1. Push this folder to a GitHub repo:
   ```bash
   git remote add origin git@github.com:Tasseract/portfolio.git
   git push -u origin main
   ```
2. Open https://vercel.com/new, import the repo. Defaults are correct (framework auto-detects as Next.js).
3. No environment variables required.

The OG image at `src/app/opengraph-image.tsx` is generated at build time using `next/og`.

## Project structure

```
src/
├── app/
│   ├── layout.tsx            # fonts, theme provider, metadata
│   ├── page.tsx              # composes all sections
│   ├── globals.css           # Material 3 tokens + glass utilities
│   └── opengraph-image.tsx   # auto-generated OG card
├── components/
│   ├── nav.tsx hero.tsx about.tsx craft.tsx tech.tsx projects.tsx contact.tsx footer.tsx
│   ├── theme-provider.tsx theme-toggle.tsx section-heading.tsx
│   └── ui/
│       ├── glass-card.tsx    # blurred + bordered surface
│       ├── md-button.tsx     # filled / tonal / outlined / text
│       ├── skill-dot.tsx     # ●●●○ proficiency renderer
│       └── github-icon.tsx
└── lib/
    └── data.ts               # single source of truth for content
```
