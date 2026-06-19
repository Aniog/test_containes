#!/usr/bin/env python3
import subprocess
import os
import signal
import time

# Kill all node processes
try:
    result = subprocess.run(['pgrep', '-f', 'node'], capture_output=True, text=True)
    if result.stdout.strip():
        pids = result.stdout.strip().split('\n')
        for pid in pids:
            try:
                os.kill(int(pid), signal.SIGKILL)
                print(f'Killed PID {pid}')
            except:
                pass
    else:
        print('No node processes found')
except Exception as e:
    print(f'Error: {e}')

time.sleep(2)
print('Done killing processes')

# Start vite dev server
print('Starting Vite dev server...')
proc = subprocess.Popen(
    ['npx', 'vite', '--port', '12000', '--host', '0.0.0.0'],
    cwd='/workspace/my-app',
    stdout=subprocess.PIPE,
    stderr=subprocess.STDOUT,
    text=True
)

# Wait for server to start
time.sleep(8)

# Check if it's running
if proc.poll() is None:
    print('Vite is running')
    try:
        import urllib.request
        response = urllib.request.urlopen('http://localhost:12000', timeout=5)
        print(f'HTTP Status: {response.status}')
    except Exception as e:
        print(f'Could not reach server: {e}')
else:
    print('Vite failed to start')
    print(proc.stdout.read())
