#!/usr/bin/env python3
import subprocess
import os
import sys

os.chdir('/workspace/my-app')
print("Starting Vite dev server...")
proc = subprocess.Popen(
    ['node', 'node_modules/.bin/vite', '--host', '0.0.0.0', '--port', '8080'],
    stdout=subprocess.PIPE,
    stderr=subprocess.PIPE
)
print(f"Vite server started with PID: {proc.pid}")
sys.stdout.flush()
proc.wait()
