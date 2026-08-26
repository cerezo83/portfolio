# Carlos Cerezo — Portfolio

Personal portfolio for Carlos Cerezo, Network Security Engineer, built with
Next.js, TypeScript, Tailwind CSS and Framer Motion around a dark,
cybersecurity-inspired design system.

Live site: https://cerezo83.github.io/portfolio/

## Stack

- [Next.js](https://nextjs.org/) (App Router, static export)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000 to view it locally.

## Content

All copy and structured data (profile, skills, experience, projects) lives in
`lib/data.ts`. Update that file to change what's on the site — sections read
from it rather than hardcoding text.

## Build & deploy

```bash
npm run build
```

This produces a fully static export in `out/`, built with a `/portfolio`
base path to match GitHub Pages project-site hosting.

Deployment is automated via `.github/workflows/deploy.yml`: every push to
`main` builds the site and publishes it through GitHub Pages (Pages source
set to **GitHub Actions** in the repository settings).
