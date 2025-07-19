#!/usr/bin/env python3
import http.server
import socketserver
import os

# Set the port
PORT = 54714

# Set up the handler to allow CORS
class CORSHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        self.send_header('X-Frame-Options', 'ALLOWALL')
        super().end_headers()

# Change to the directory containing the HTML file
os.chdir(os.path.dirname(os.path.abspath(__file__)))

# Create the server
with socketserver.TCPServer(("0.0.0.0", PORT), CORSHTTPRequestHandler) as httpd:
    print(f"Server running at http://localhost:{PORT}")
    print("Press Ctrl+C to stop the server")
    httpd.serve_forever()