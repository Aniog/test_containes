#!/usr/bin/env python3
"""Custom HTTP server for SPA with proper MIME types and fallback to index.html"""

import http.server
import socketserver
import os
import mimetypes

PORT = 12000
DIRECTORY = "/workspace/my-app/dist"

# Ensure proper MIME types
mimetypes.add_type("text/javascript", ".js")
mimetypes.add_type("text/css", ".css")
mimetypes.add_type("application/javascript", ".js")
mimetypes.add_type("text/html", ".html")

class SPAHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def end_headers(self):
        # Add cache control for assets
        if self.path.startswith("/assets/"):
            self.send_header("Cache-Control", "public, max-age=31536000, immutable")
        super().end_headers()

    def send_head(self):
        # Try to serve the file
        file_path = os.path.join(DIRECTORY, self.path.lstrip("/"))
        
        # If path doesn't exist or is a directory without index.html, serve index.html
        if not os.path.exists(file_path) or (os.path.isdir(file_path) and not os.path.exists(os.path.join(file_path, "index.html"))):
            # Serve index.html for SPA routing
            self.path = "/index.html"
        
        return super().send_head()

class ReusableTCPServer(socketserver.TCPServer):
    allow_reuse_address = True

if __name__ == "__main__":
    with ReusableTCPServer(("", PORT), SPAHandler) as httpd:
        print(f"Serving SPA at http://0.0.0.0:{PORT}")
        print(f"Directory: {DIRECTORY}")
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nServer stopped.")
