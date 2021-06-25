import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import {resolve} from 'path';

const twigRefreshPlugin = {
  name: 'twig-refresh',
  configureServer ({ watcher, ws }) {
    watcher.add(resolve('templates/**/*.twig'));
    watcher.on('change', function (path) {
      if (path.endsWith('.twig')) {
        ws.send({
          type: 'full-reload'
        });
      }
    });
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh(), twigRefreshPlugin],
  root: './assets',
  base: '/assets/',
  build: {
    manifest: true,
    assetsDir: '',
    outDir: '../public/assets/',
    rollupOptions: {
      output: {
        manualChunks: undefined // On ne veut pas créer un fichier vendors, car on n'a ici qu'un point d'entré
      },
      input: {
        'app.js': './assets/app.js'
      }
    }
  }
})
