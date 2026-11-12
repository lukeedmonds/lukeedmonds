import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import { fileURLToPath } from 'node:url';

export default defineConfig({
  site: 'https://www.lukeedmonds.com',
  integrations: [tailwind()],
  vite: {
    resolve: {
      alias: {
        '@data': fileURLToPath(new URL('./src/data', import.meta.url)),
        '@components': fileURLToPath(new URL('./src/components', import.meta.url)),
        '@layouts': fileURLToPath(new URL('./src/layouts', import.meta.url)),
        '@styles': fileURLToPath(new URL('./src/styles', import.meta.url))
      }
    }
  }
});
