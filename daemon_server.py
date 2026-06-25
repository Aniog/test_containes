#!/usr/bin/env python3
import os, sys, http.server, socketserver

PORT = 12000
DIR = "/workspace/my-app/dist"
os.chdir(DIR)

# Double fork to detach completely
pid = os.fork()
if pid > 0:
    print(f"Server PID: {pid}", flush=True)
    sys.exit(0)

os.setsid()

pid2 = os.fork()
if pid2 > 0:
    sys.exit(0)

# Close all file descriptors
for fd in range(3, 1024):
    try: os.close(fd)
    except: pass

# Redirect stdin/stdout/stderr to /dev/null
devnull = os.open(os.devnull, os.O_RDWR)
os.dup2(devnull, 0)
os.dup2(devnull, 1)
os.dup2(devnull, 2)

class H(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *a, **kw):
        super().__init__(*a, directory=DIR, **kw)
    def do_GET(self):
        p = self.translate_path(self.path)
        if not os.path.exists(p) and '.' not in os.path.basename(self.path):
            self.path = '/index.html'
        return super().do_GET()
    def log_message(self, f, *a): pass

socketserver.TCPServer.allow_reuse_address = True
s = socketserver.TCPServer(("0.0.0.0", PORT), H)
with open("/tmp/server.pid","w") as f: f.write(str(os.getpid()))
s.serve_forever()
