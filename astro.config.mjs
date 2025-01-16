import { defineConfig } from 'astro/config';

export default defineConfig({
  vite: {
    publicDir: 'public', // Ensures the correct folder is used for static files like styles.css
  },
});
