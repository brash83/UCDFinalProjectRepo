import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://brash83.github.io/UCDFinalProjectRepo',  // Your GitHub Pages URL
  build: {
    out: 'dist',  // Set build output to 'dist' for GitHub Pages
  },
  base: '/UCDFinalProjectRepo/',  // Ensure this matches your repository name
});
