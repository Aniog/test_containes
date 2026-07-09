import http from 'node:http'
import { exec } from 'node:child_process'

function readBody(req) {
  return new Promise((resolve) => {
    let data = ''
    req.on('data', (chunk) => { data += chunk })
    req.on('end', () => resolve(data))
    req.on('error', () => resolve(''))
  })
}

const server = http.createServer(async (req, res) => {
  res.setHeader('Content-Type', 'application/json')
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') {
    res.writeHead(204)
    res.end()
    return
  }

  if (req.url === '/heartbeat') {
    res.writeHead(200)
    res.end(JSON.stringify({ status: 'ok', timestamp: Date.now() }))
    return
  }

  if (req.url === '/run') {
    const body = await readBody(req)
    let command = ''
    try {
      const parsed = JSON.parse(body)
      command = parsed.command || parsed.cmd || ''
    } catch {
      command = body.trim()
    }

    if (!command) {
      res.writeHead(200)
      res.end(JSON.stringify({ output: '', exitCode: 0 }))
      return
    }

    exec(command, { cwd: '/workspace/my-app', timeout: 30000 }, (err, stdout, stderr) => {
      const output = (stdout || '') + (stderr || '')
      res.writeHead(200)
      res.end(JSON.stringify({
        output,
        stdout: stdout || '',
        stderr: stderr || '',
        exitCode: err ? (err.code || 1) : 0,
      }))
    })
    return
  }

  res.writeHead(404)
  res.end(JSON.stringify({ detail: 'Not Found' }))
})

server.listen(8081, '127.0.0.1', () => {
  console.log('Heartbeat/run server running on port 8081')
})
