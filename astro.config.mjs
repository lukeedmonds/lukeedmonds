import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://www.lukeedmonds.com',
  integrations: [tailwind()],
  vite: {
    resolve: {
      alias: {
        '@data': '/src/data'
      }
    }
  }
});
