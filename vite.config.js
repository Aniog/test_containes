import fs from 'fs'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
import strkImgPlugin from './plugin/vite-plugin-strk-img.js'
import visualEditPlugin from './plugin/vite-plugin-visual-edit.js'

function generatorsHubPlugin() {
  const generatorsEntryPath = path.resolve(__dirname, './generators/index.html')

  return {
    name: 'generators-hub-plugin',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        const requestPath = (req.url || '').split('?')[0]

        if (requestPath !== '/generators' && requestPath !== '/generators/') {
          next()
          return
        }

        if (!fs.existsSync(generatorsEntryPath)) {
          next()
          return
        }

        const html = fs.readFileSync(generatorsEntryPath, 'utf-8')
        const transformed = await server.transformIndexHtml(requestPath, html)
        res.setHeader('Content-Type', 'text/html; charset=utf-8')
        res.end(transformed)
      })
    },
  }
}

export default defineConfig({
  plugins: [
    generatorsHubPlugin(),
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
    port: 8080,
    host: true,
    allowedHosts: true,
    cors: true,
    proxy: {
      '/heartbeat': {
        target: 'http://localhost:8081',
        changeOrigin: true,
      },
      '/run': {
        target: 'http://localhost:8081',
        changeOrigin: true,
      },
    },
    hmr: {
      overlay: false,
    },
    watch: {
      usePolling: true,
      interval: 100,
    },
  }
})
