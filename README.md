# Portfolio

A minimal Astro site with strict TypeScript configuration and static output.

## Local development

Use Node.js 24 (if you use nvm, run `nvm install` and `nvm use`):

```sh
npm install
npm run dev
```

Open the local URL printed by Astro (usually `http://localhost:4321`).

## Commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run check` | Check Astro and TypeScript files |
| `npm run build` | Build the static site into `dist/` |
| `npm run preview` | Preview the production build locally |

## Project structure

- `src/pages/index.astro`: homepage; add pages in `src/pages/` for more routes.
- `src/layouts/Layout.astro`: shared HTML, metadata, and base styles.
- `public/`: static assets served directly, including the favicon.
- `astro.config.mjs`: Astro configuration.

## Vercel

This repository uses Astro's default static output, so no Vercel adapter is needed.
For the already connected Vercel project, use the Astro framework preset,
`npm run build` as the build command, and `dist` as the output directory.
The `engines` field in `package.json` selects Node.js 24.
