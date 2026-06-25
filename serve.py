#!/usr/bin/env python3
"""Start a static file server for the production build on port 12000"""
import http.server
import socketserver
import os
import signal
import sys

PORT = 12000
DIRECTORY = "/workspace/my-app/dist"

# Kill anything on port 12000
os.system("fuser -k 12000/tcp 2>/dev/null")

class SPAHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)
    
    def do_GET(self):
        path = self.translate_path(self.path)
        if not os.path.exists(path) and '.' not in os.path.basename(self.path):
            self.path = '/index.html'
        return super().do_GET()
    
    def log_message(self, format, *args):
        pass

os.chdir(DIRECTORY)
socketserver.TCPServer.allow_reuse_address = True
with socketserver.TCPServer(("0.0.0.0", PORT), SPAHandler) as httpd:
    print(f"Serving production build at http://0.0.0.0:{PORT}", flush=True)
    httpd.serve_forever()
