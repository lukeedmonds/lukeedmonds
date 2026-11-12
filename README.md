# Luke Edmonds — Portfolio

Personal site for Luke Edmonds, built with [Astro](https://astro.build/) and [Tailwind CSS](https://tailwindcss.com/).

The visual direction is inspired by the cozy, flat-colour “great green room” feeling of mid-century children’s-book illustration—saturated greens and reds, lemon accents, a night-sky window—without copying any book artwork or typography.

## Getting Started

```bash
npm install
npm run dev
```

Open <http://localhost:4321>.

## Scripts

- `npm run dev` — local development server
- `npm run build` — production build to `dist/`
- `npm run preview` — preview the production build
- `npm run lint` — Astro check

## Structure

```
src/
  components/   # Room hero and shared UI
  data/         # Profile, experience, projects, capabilities
  layouts/      # Base HTML shell
  pages/        # Routes
  styles/       # Global CSS + design tokens
```

Edit biography and work history in `src/data/profile.ts`.

## Deployment

Astro builds static output to `dist/`. Deploy with any static host.
