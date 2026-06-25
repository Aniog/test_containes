import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'
import fs from 'node:fs'
import strkImgPlugin from './plugin/vite-plugin-strk-img.js'
import visualEditPlugin from './plugin/vite-plugin-visual-edit.js'

// Dedicated plugin to serve the static generators hub at /generators (no .html)
// Must run early to bypass Vite's SPA fallback and index HTML middleware.
function generatorsHubPlugin() {
  let generatorsHtml = null
  const getHtml = () => {
    if (!generatorsHtml) {
      const p = path.resolve(__dirname, 'public/generators.html')
      generatorsHtml = fs.readFileSync(p, 'utf-8')
    }
    return generatorsHtml
  }
  return {
    name: 'strikingly-generators-hub',
    configureServer(server) {
      // Add at the very front of the middleware stack so we win over indexHtmlMiddleware
      const handler = (req, res, next) => {
        const url = (req.url || '').split('?')[0]
        if (url === '/generators' || url === '/generators/' || url === '/generators.html') {
          try {
            const html = getHtml()
            res.statusCode = 200
            res.setHeader('Content-Type', 'text/html; charset=utf-8')
            res.setHeader('Cache-Control', 'no-cache')
            res.end(html)
            return
          } catch (e) {
            // fall through if file missing
          }
        }
        next()
      }
      // Prepend so it runs before Vite's html and SPA middlewares
      server.middlewares.stack.unshift({ route: '', handle: handler })
    },
    configurePreviewServer(server) {
      const handler = (req, res, next) => {
        const url = (req.url || '').split('?')[0]
        if (url === '/generators' || url === '/generators/' || url === '/generators.html') {
          try {
            const html = getHtml()
            res.statusCode = 200
            res.setHeader('Content-Type', 'text/html; charset=utf-8')
            res.setHeader('Cache-Control', 'no-cache')
            res.end(html)
            return
          } catch (e) {}
        }
        next()
      }
      server.middlewares.stack.unshift({ route: '', handle: handler })
    }
  }
}

export default defineConfig({
  plugins: [
    // Generators hub must be first so its middleware is prepended before others
    generatorsHubPlugin(),
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
    port: 12000,
    host: '0.0.0.0',
    allowedHosts: true,
    cors: true,
    hmr: {
      overlay: false
    }
  },
  preview: {
    port: 12000,
    host: '0.0.0.0',
    allowedHosts: true
  },
  // Serve the static generators hub at the clean /generators path (no .html)
  // Direct fs serve to bypass SPA fallback. Works on the runtime host.
  configureServer(server) {
    const generatorsHtmlPath = path.resolve(__dirname, 'public/generators.html');
    server.middlewares.use((req, res, next) => {
      const url = (req.url || '').split('?')[0];
      if (url === '/generators' || url === '/generators/' || url === '/generators.html') {
        try {
          const content = fs.readFileSync(generatorsHtmlPath, 'utf-8');
          res.setHeader('Content-Type', 'text/html; charset=utf-8');
          res.setHeader('Cache-Control', 'no-cache');
          res.end(content);
          return;
        } catch (e) {}
      }
      next();
    });
  },
  configurePreviewServer(server) {
    const generatorsHtmlPath = path.resolve(__dirname, 'public/generators.html');
    server.middlewares.use((req, res, next) => {
      const url = (req.url || '').split('?')[0];
      if (url === '/generators' || url === '/generators/' || url === '/generators.html') {
        try {
          const content = fs.readFileSync(generatorsHtmlPath, 'utf-8');
          res.setHeader('Content-Type', 'text/html; charset=utf-8');
          res.setHeader('Cache-Control', 'no-cache');
          res.end(content);
          return;
        } catch (e) {}
      }
      next();
    });
  }
})
