# kennethstaelens.com

Portfolio website for Kenneth Staelens, a Belgian graphic director and filmmaker working across sport and culture.

## Stack

- [Astro](https://astro.build/) 7
- Static output hosted on Cloudflare Pages
- GitHub `main` branch as the production source

## Local development

Requires Node.js 22.12.0 or newer.

```sh
npm install
npm run dev
```

The production build is generated in `dist/`:

```sh
npm run build
npm run preview
```

## Environment variables

Copy `.env.example` to `.env` and fill in the values you need:

```sh
PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
APIFY_TOKEN=apify_api_...
```

`PUBLIC_GA_MEASUREMENT_ID` must also be configured in the Cloudflare Pages production environment because Astro injects it during the build.

`APIFY_TOKEN` is for local content workflows only. Never add it to Cloudflare or commit `.env`.

## Content

- Featured projects: `src/data/projects.ts`
- Page markup and metadata: `src/pages/index.astro`
- Global styling: `src/styles/global.css`
- Optimized project media: `public/media/`

## Deployment

Cloudflare Pages deploys automatically whenever a commit reaches `main`.

- Build command: `npm run build`
- Output directory: `dist`
- Node version: `22.12.0`
- Production URL: [kennethstaelens.com](https://kennethstaelens.com)

The `www` hostname should redirect to the apex domain through a Cloudflare Bulk Redirect. Domain-level redirects are not supported in a Pages `_redirects` file.
