import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
import fs from 'fs'
import strkImgPlugin from './plugin/vite-plugin-strk-img.js'
import visualEditPlugin from './plugin/vite-plugin-visual-edit.js'

// Custom plugin to serve /generators as a static HTML file
function staticGeneratorsPlugin() {
  const staticFile = path.resolve(__dirname, 'public/generators/index.html')
  return {
    name: 'static-generators',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (req.url === '/generators' || req.url === '/generators/') {
          if (fs.existsSync(staticFile)) {
            res.setHeader('Content-Type', 'text/html')
            res.end(fs.readFileSync(staticFile, 'utf8'))
            return
          }
        }
        next()
      })
    }
  }
}

export default defineConfig({
  plugins: [
    staticGeneratorsPlugin(),
    // Our plugin runs BEFORE React transform so it sees raw JSX
    strkImgPlugin(),
    visualEditPlugin(),
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
