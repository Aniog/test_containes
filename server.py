#!/usr/bin/env python3
import http.server
import socketserver
import socket
import os

# Set the port
PORT = 50344

# Set up the handler to serve files
handler = http.server.SimpleHTTPRequestHandler

# Allow connections from any host
class MyTCPServer(socketserver.TCPServer):
    def server_bind(self):
        self.socket.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
        self.socket.bind(('0.0.0.0', PORT))

# Start the server
with MyTCPServer(("0.0.0.0", PORT), handler) as httpd:
    print(f"Server started at http://localhost:{PORT}")
    print("Press Ctrl+C to stop the server")
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\nServer stopped.")