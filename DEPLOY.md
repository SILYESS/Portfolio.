# Deploy to Vercel — Quick Guide

This is a static Next.js 16 site (all pages prerendered, no database needed).

## Path A — GitHub + Vercel (recommended)

1. Create a new **empty** repository on GitHub (no README).
2. From this folder, run:

```bash
git init
git add .
git commit -m "Portfolio — initial deploy"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

3. Go to **vercel.com/new** → sign in with GitHub → **Import** the repo.
4. Vercel auto-detects Next.js. Leave all settings as default → **Deploy**.
5. Done. Every future `git push` to `main` auto-redeploys.

## Path B — Vercel CLI (no GitHub)

```bash
npm install -g vercel
vercel login
vercel --prod
```

Answer the prompts (framework: Next.js is auto-detected; accept defaults).

## Requirements

- Node.js 20.9+ (only for local builds; Vercel handles its own runtime)
- Install deps first if needed: `npm install` (or `bun install`)

## After deploying

Send your live URL (`something.vercel.app` or custom domain) back to the
assistant so it can set `SITE_URL` in `src/data/portfolio.ts` — this wires up
canonical URLs, the sitemap, and social share (OG) tags to the real address.
