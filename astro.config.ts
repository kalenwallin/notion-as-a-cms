import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';
import react from '@astrojs/react';
import { readFileSync } from 'fs';

import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss(), rawBuffer()],
  },

  image: {
    domains: ['img.youtube.com', 'vimeo.com'],
  },

  integrations: [icon(), react()],

  markdown: {
    shikiConfig: {
      theme: 'dracula',
      wrap: true,
    },
  },

  adapter: vercel()
});

/**
 * Vite plugin to load raw buffer data from a file.
 * This is useful for loading binary data like images or fonts.
 * @returns a Vite plugin object
 * @see https://vitejs.dev/config/#plugins
 */
function rawBuffer() {
  return {
    name: 'vite-plugin-raw-buffer',
    transform(_: unknown, id: string) {
      if (id.endsWith('?buffer')) {
        const buffer = readFileSync(id.replace(/\?buffer$/, ''));
        return {
          code: `export default ${JSON.stringify(buffer)}`,
          map: null,
        };
      }
      return undefined;
    },
  };
}