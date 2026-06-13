import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import fs from 'fs'
import strkImgPlugin from './plugin/vite-plugin-strk-img.js'
import visualEditPlugin from './plugin/vite-plugin-visual-edit.js'

function serveStaticGenerators() {
  return {
    name: 'serve-static-generators',
    configureServer(server) {
      const genPath = path.resolve(__dirname, 'public/generators/index.html')
      server.middlewares.use((req, res, next) => {
        if (req.url === '/generators' || req.url === '/generators/') {
          try {
            const content = fs.readFileSync(genPath, 'utf-8')
            res.writeHead(200, { 'Content-Type': 'text/html' })
            res.end(content)
            return
          } catch (_) {}
        }
        next()
      })
    }
  }
}

export default defineConfig({
  plugins: [
    serveStaticGenerators(),
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
  }
})
