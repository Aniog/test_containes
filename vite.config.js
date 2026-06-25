import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
import http from 'http'
import { execSync } from 'child_process'
import strkImgPlugin from './plugin/vite-plugin-strk-img.js'
import visualEditPlugin from './plugin/vite-plugin-visual-edit.js'

function handleRunRequest(req, res) {
  res.setHeader('Content-Type', 'application/json')
  res.setHeader('Access-Control-Allow-Origin', '*')
  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
    res.statusCode = 204
    res.end()
    return
  }
  let body = ''
  req.on('data', (chunk) => { body += chunk })
  req.on('end', () => {
    try {
      const { command, cwd } = JSON.parse(body || '{}')
      const output = execSync(String(command || 'echo ""'), {
        cwd: cwd || process.cwd(),
        timeout: 30000,
        encoding: 'utf8',
        stdio: ['pipe', 'pipe', 'pipe'],
      })
      res.end(JSON.stringify({ output, exitCode: 0 }))
    } catch (err) {
      res.end(JSON.stringify({
        output: err.stdout || '',
        stderr: err.stderr || err.message || '',
        exitCode: err.status ?? 1,
      }))
    }
  })
}

function workspaceMiddlewarePlugin() {
  return {
    name: 'workspace-middleware',
    configureServer(server) {
      // Handle /heartbeat and /run on the Vite dev server (port 12000)
      server.middlewares.use('/heartbeat', (_req, res) => {
        res.setHeader('Content-Type', 'application/json')
        res.setHeader('Access-Control-Allow-Origin', '*')
        res.end(JSON.stringify({ status: 'ok', service: 'vite' }))
      })
      server.middlewares.use('/run', handleRunRequest)

      // Also spin up a standalone server on port 8081 so the proxy target resolves
      const companion = http.createServer((req, res) => {
        const url = req.url || '/'
        if (url === '/heartbeat' || url.startsWith('/heartbeat?')) {
          res.setHeader('Content-Type', 'application/json')
          res.setHeader('Access-Control-Allow-Origin', '*')
          res.end(JSON.stringify({ status: 'ok', service: 'companion' }))
        } else if (url === '/run' || url.startsWith('/run?')) {
          handleRunRequest(req, res)
        } else {
          res.statusCode = 404
          res.end(JSON.stringify({ error: 'not found' }))
        }
      })
      companion.listen(8081, '0.0.0.0', () => {
        console.log('[workspace] companion server listening on port 8081')
      })
      companion.on('error', (err) => {
        if (err.code !== 'EADDRINUSE') {
          console.warn('[workspace] companion server error:', err.message)
        }
      })
    },
  }
}

export default defineConfig({
  plugins: [
    workspaceMiddlewarePlugin(),
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
      interval: 100,
    },
  }
})
