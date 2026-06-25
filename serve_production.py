#!/usr/bin/env python3
"""Start a simple HTTP server for the production build."""
import http.server
import socketserver
import os
import subprocess
import signal

PORT = 12000
DIRECTORY = "/workspace/my-app/dist"

# Kill anything on port 12000
try:
    subprocess.run(["fuser", "-k", f"{PORT}/tcp"], capture_output=True, timeout=5)
except Exception:
    pass

os.chdir(DIRECTORY)

class SPAHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)
    
    def do_GET(self):
        file_path = self.translate_path(self.path)
        if not os.path.exists(file_path) and '.' not in os.path.basename(self.path):
            self.path = '/index.html'
        return super().do_GET()
    
    def log_message(self, format, *args):
        pass

socketserver.TCPServer.allow_reuse_address = True
httpd = socketserver.TCPServer(("0.0.0.0", PORT), SPAHandler)

# Write PID file
with open("/tmp/static_server.pid", "w") as f:
    f.write(str(os.getpid()))

print(f"Serving at http://0.0.0.0:{PORT}", flush=True)
httpd.serve_forever()
