#!/usr/bin/env python3
import subprocess
import os
import sys
import time
import signal

# Kill any existing node processes
try:
    subprocess.run(['pkill', '-9', 'node'], capture_output=True, timeout=5)
except:
    pass

time.sleep(1)

os.chdir('/workspace/my-app')

# Start the dev server
proc = subprocess.Popen(
    ['npx', 'vite', '--host', '0.0.0.0', '--port', '12000'],
    stdout=subprocess.PIPE,
    stderr=subprocess.STDOUT,
    text=True,
    cwd='/workspace/my-app'
)

# Wait for server to start
time.sleep(8)

# Check if it's running
try:
    result = subprocess.run(['curl', '-s', '-o', '/dev/null', '-w', '%{http_code}', 'http://localhost:12000'], 
                          capture_output=True, text=True, timeout=5)
    print(f"Server status: {result.stdout}")
except Exception as e:
    print(f"Error checking server: {e}")

print("Dev server process started")
sys.exit(0)
