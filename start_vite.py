#!/usr/bin/env python3
import subprocess
import os
import sys
import time

os.chdir('/workspace/my-app')
print("Starting Vite dev server on port 8080...")
sys.stdout.flush()

proc = subprocess.Popen(
    ['node', 'node_modules/.bin/vite', '--host', '0.0.0.0', '--port', '8080'],
    stdout=subprocess.PIPE,
    stderr=subprocess.STDOUT,
    text=True
)

print(f"Vite server started with PID: {proc.pid}")
sys.stdout.flush()

# Wait a bit for the server to start
time.sleep(5)

# Print any output
for line in proc.stdout:
    print(line, end='')
    sys.stdout.flush()
