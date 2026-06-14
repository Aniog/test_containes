import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import strkImgPlugin from './plugin/vite-plugin-strk-img.js'
import visualEditPlugin from './plugin/vite-plugin-visual-edit.js'

export default defineConfig({
  plugins: [
    // Our plugin runs BEFORE React transform so it sees raw JSX
    strkImgPlugin(),
    visualEditPlugin(),
    react(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    host: '0.0.0.0',
    allowedHosts: true,
    cors: true,
    hmr: {
      overlay: false
    }
  },
  // Serve the static generators hub at the clean /generators path (no .html)
  // We serve the file directly to bypass any SPA fallback and ensure static render.
  configureServer(server) {
    const fs = require('fs');
    const path = require('path');
    const generatorsHtmlPath = path.resolve(__dirname, 'public/generators.html');

    server.middlewares.use((req, res, next) => {
      if (req.url === '/generators' || req.url === '/generators/' || req.url === '/generators.html') {
        try {
          const content = fs.readFileSync(generatorsHtmlPath, 'utf-8');
          res.setHeader('Content-Type', 'text/html; charset=utf-8');
          res.setHeader('Cache-Control', 'no-cache');
          res.end(content);
          return;
        } catch (e) {
          // fall through to next if file missing
        }
      }
      next();
    });
  },
  configurePreviewServer(server) {
    const fs = require('fs');
    const path = require('path');
    const generatorsHtmlPath = path.resolve(__dirname, 'public/generators.html');

    server.middlewares.use((req, res, next) => {
      if (req.url === '/generators' || req.url === '/generators/' || req.url === '/generators.html') {
        try {
          const content = fs.readFileSync(generatorsHtmlPath, 'utf-8');
          res.setHeader('Content-Type', 'text/html; charset=utf-8');
          res.setHeader('Cache-Control', 'no-cache');
          res.end(content);
          return;
        } catch (e) {
          // fall through
        }
      }
      next();
    });
  }
})
