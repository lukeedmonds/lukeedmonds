import { type Config } from 'tailwindcss';

export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'
  ],
  theme: {
    extend: {
      colors: {
        background: '#f5f6f8',
        primary: '#171717',
        accent: '#ff5a1f',
        muted: '#6b7280'
      },
      fontFamily: {
        display: ['"PP Neue Montreal"', 'Inter', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace']
      },
      boxShadow: {
        card: '0 18px 45px rgba(23, 23, 23, 0.18)'
      }
    }
  },
  plugins: []
} satisfies Config;
