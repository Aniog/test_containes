import http from 'http';

const PORT = 8081;

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*');

  if (req.url === '/heartbeat') {
    res.writeHead(200);
    res.end(JSON.stringify({ status: 'ok', timestamp: Date.now() }));
  } else if (req.url === '/run') {
    res.writeHead(200);
    res.end(JSON.stringify({ status: 'running', timestamp: Date.now() }));
  } else {
    res.writeHead(404);
    res.end(JSON.stringify({ error: 'not found' }));
  }
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`Heartbeat server running on port ${PORT}`);
});
