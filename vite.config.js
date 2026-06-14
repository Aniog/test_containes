import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import fs from 'fs'
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
    },
    port: 12000,
    // Serve the static /generators page at /generators and /generators/
    // Rewrite the URL to the static file in /public so Vite serves it raw (no SPA transform).
    // This ensures view-source and JS-disabled loads see the full static directory.
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const url = (req.url || '').split('?')[0].split('#')[0]
        if (url === '/generators' || url === '/generators/') {
          // Rewrite to the static HTML file under public/; Vite will serve it as a static asset.
          req.url = '/generators/index.html'
        }
        next()
      })
    }
  }
})
