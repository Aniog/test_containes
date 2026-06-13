import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { readFileSync } from 'fs'
import strkImgPlugin from './plugin/vite-plugin-strk-img.js'
import visualEditPlugin from './plugin/vite-plugin-visual-edit.js'

export default defineConfig({
  plugins: [
    {
      name: 'serve-generators-page',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.url === '/generators' || req.url === '/generators/' || req.url === '/generators/index.html') {
            const generatorsPath = path.resolve(__dirname, 'public/generators/index.html');
            try {
              const html = readFileSync(generatorsPath, 'utf-8');
              res.statusCode = 200;
              res.setHeader('Content-Type', 'text/html');
              res.end(html);
              return;
            } catch {
              next();
              return;
            }
          }
          next();
        });
      },
    },
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
  }
})
