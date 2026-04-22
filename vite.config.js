import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: './', // Wichtig für Netlify Drop
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        impresszum: resolve(__dirname, 'impresszum.html'),
        adatkezeles: resolve(__dirname, 'adatkezeles.html'),
        aszf: resolve(__dirname, 'aszf.html'),
      },
    },
  },
});