# Luke Edmonds — Portfolio

A refreshed personal site for Luke Edmonds, built with [Astro](https://astro.build/) and [Tailwind CSS](https://tailwindcss.com/).
The design leans into a split-screen, editorial aesthetic to deliver a confident and professional presentation of Luke's experience.

## Getting Started

```bash
npm install
npm run dev
```

Then open <http://localhost:4321> to view the site locally.

## Available Scripts

- `npm run dev` – Start the local development server
- `npm run build` – Generate a production build
- `npm run preview` – Preview the production build locally
- `npm run lint` – Run Astro type and content checks

## Project Structure

```
.
├── public/          # Static assets
├── src/
│   ├── data/        # Centralised profile content for Luke
│   ├── layouts/     # Shared page layouts
│   ├── pages/       # Astro pages
│   └── styles/      # Global styles and Tailwind layer
├── astro.config.mjs # Astro configuration
├── tailwind.config.mjs
└── tsconfig.json
```

Key biography, project, and capability details live in `src/data/profile.ts` for easy editing without touching layout code.

## Deployment

Astro builds to the `dist/` directory. Deploy the static output with your preferred static hosting provider.
