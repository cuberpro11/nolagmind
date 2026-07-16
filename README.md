# No Lag Mind — Note App Marketing Site

Dedicated product site for the **No Lag Mind Note App** (the app lives in `../note-app`; the brand homepage lives in `../nolagmind`).

Built with [Astro](https://astro.build), no UI framework — static output, hand-written CSS with design tokens, and small vanilla-TS islands for the animated product mockups.

## Commands

```sh
npm run dev        # dev server (use `astro dev --background` per CLAUDE.md)
npm run build      # production build to ./dist
npm run preview    # serve the production build
```

## Where things live

- `src/styles/global.css` — design tokens (dark default + `[data-theme='light']`), keycap/caret/window motifs, shared demo styles
- `src/data/site.ts` — download URL, version, Discord link (single source of truth)
- `src/data/pricing.ts` — the four placeholder offerings (Sync, Publish, Insider, Business); edit here when one goes live
- `src/data/changelog.ts` — mirror of `../note-app/changelogs/`; prepend new releases
- `src/data/themes.ts` — showcase palettes lifted from the app's `src/utils/themes.ts`
- `src/scripts/demo.ts` — typing-surface helpers shared by all animated mockups
- `src/components/` — one component per landing-page section
- `src/pages/` — `/`, `/download`, `/docs` (coming soon), `/changelog`

All demo animations respect `prefers-reduced-motion` (they render a static final state instead).

## Adding Stripe / Link payments later

The site is fully static today (`output: 'static'`). When a paid offering launches:

1. `npx astro add netlify` — adds the `@astrojs/netlify` adapter.
2. Keep static pages prerendered; add server endpoints (e.g. `src/pages/api/checkout.ts` with `export const prerender = false`) that create Stripe Checkout sessions (Stripe Checkout supports Link out of the box).
3. Put `STRIPE_SECRET_KEY` in the Netlify environment, never in client code.
4. Point the pricing card buttons at the endpoint.
