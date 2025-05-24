import { defineConfig } from 'vite';

export default defineConfig({
  root: '.', // Your project root
  base: './', // Ensures relative paths for deployment on Vercel/GitHub Pages
  build: {
    outDir: 'dist',
    emptyOutDir: true
  }
});
