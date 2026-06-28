import fs from 'node:fs'
import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import strkImgPlugin from './plugin/vite-plugin-strk-img.js'
import visualEditPlugin from './plugin/vite-plugin-visual-edit.js'

function staticGeneratorsPagePlugin() {
  return {
    name: 'static-generators-page',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const requestUrl = req.url?.split('?')[0] || ''
        if (!['/generators', '/generators/', '/generators/index.html'].includes(requestUrl)) {
          next()
          return
        }

        const htmlPath = path.resolve(__dirname, 'generators', 'index.html')
        if (!fs.existsSync(htmlPath)) {
          next()
          return
        }

        res.setHeader('Content-Type', 'text/html; charset=utf-8')
        res.end(fs.readFileSync(htmlPath, 'utf8'))
      })
    },
  }
}

export default defineConfig({
  plugins: [
    staticGeneratorsPagePlugin(),
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
