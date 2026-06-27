import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
import fs from 'fs'
import strkImgPlugin from './plugin/vite-plugin-strk-img.js'
import visualEditPlugin from './plugin/vite-plugin-visual-edit.js'

// Custom plugin to serve static HTML at /generators route
function generatorsPagePlugin() {
  return {
    name: 'generators-page',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        // Check if request is for /generators or /generators/
        if (req.url === '/generators' || req.url === '/generators/' || req.url?.startsWith('/generators?')) {
          const htmlPath = path.resolve(__dirname, 'index.html')
          try {
            let html = fs.readFileSync(htmlPath, 'utf-8')
            // Set proper content-type
            res.setHeader('Content-Type', 'text/html')
            res.end(html)
            return
          } catch (e) {
            console.error('Error reading HTML file:', e)
          }
        }
        next()
      })
    }
  }
}

export default defineConfig({
  plugins: [
    // Our plugin runs BEFORE React transform so it sees raw JSX
    strkImgPlugin(),
    visualEditPlugin(),
    generatorsPagePlugin(),
    tailwindcss(),
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
    },
    watch: {
      usePolling: true,
      interval: 100, // Check for changes every 100ms
    },
  }
})
