import http from 'node:http'

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json')
  res.setHeader('Access-Control-Allow-Origin', '*')
  if (req.url === '/heartbeat') {
    res.writeHead(200)
    res.end(JSON.stringify({ status: 'ok', timestamp: Date.now() }))
  } else if (req.url === '/run') {
    res.writeHead(200)
    res.end(JSON.stringify({ status: 'ok' }))
  } else {
    res.writeHead(404)
    res.end(JSON.stringify({ detail: 'Not Found' }))
  }
})

server.listen(8081, '127.0.0.1', () => {
  console.log('Heartbeat server running on port 8081')
})
