import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
import fs from 'fs'
import strkImgPlugin from './plugin/vite-plugin-strk-img.js'
import visualEditPlugin from './plugin/vite-plugin-visual-edit.js'

const generatorsHtml = fs.readFileSync(path.resolve(__dirname, 'generators.html'), 'utf-8');

export default defineConfig({
  plugins: [
    strkImgPlugin(),
    visualEditPlugin(),
    tailwindcss(),
    react(),
    {
      name: 'serve-generators-page',
      configureServer(server) {
        server.middlewares.use('/generators', (req, res, next) => {
          // Only intercept the exact /generators path (not /generators/something)
          if (req.url === '/' || req.url === '') {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(generatorsHtml);
            return;
          }
          next();
        });
      },
    },
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        generators: path.resolve(__dirname, 'generators.html'),
      },
    },
  },
  server: {
    host: '0.0.0.0',
    allowedHosts: true,
    cors: true,
    hmr: {
      overlay: false
    },
    watch: {
      usePolling: true,
      interval: 100,
    },
  }
})
