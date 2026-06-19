import http.server
import socketserver
import os

os.chdir('/workspace/my-app/dist')
PORT = 12000
Handler = http.server.SimpleHTTPRequestHandler

with socketserver.TCPServer(("", PORT), Handler) as httpd:
    print(f"Serving dist/ on port {PORT}")
    httpd.serve_forever()