import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import fs from 'fs'
import strkImgPlugin from './plugin/vite-plugin-strk-img.js'
import visualEditPlugin from './plugin/vite-plugin-visual-edit.js'

export default defineConfig({
  plugins: [
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
  // Serve the static generators hub at /generators
  // so every card is in the initial HTML (no JS required to render)
  configureServer(server) {
    server.middlewares.use(function serveGeneratorsHub(req, res, next) {
      const url = req.url ? req.url.split('?')[0].split('#')[0] : '';
      if (url === '/generators' || url === '/generators/') {
        const filePath = path.resolve(__dirname, 'public/generators.html');
        try {
          const html = fs.readFileSync(filePath, 'utf-8');
          res.setHeader('Content-Type', 'text/html; charset=utf-8');
          res.setHeader('Cache-Control', 'no-cache');
          res.statusCode = 200;
          res.end(html);
        } catch (e) {
          next(e);
        }
        return;
      }
      next();
    });
  },
})
