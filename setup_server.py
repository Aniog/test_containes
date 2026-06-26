#!/usr/bin/env python3
"""Start the Vite dev server on port 12000 using a fresh shell."""
import subprocess, os, time, sys, signal, json

os.chdir('/workspace/my-app')

# Kill any existing processes on port 12000
for cmd in [
    'lsof -ti:12000 2>/dev/null | xargs kill -9 2>/dev/null || true',
    'pkill -9 -f "vite.*12000" 2>/dev/null || true',
    'sleep 1'
]:
    subprocess.run(['bash', '-c', cmd], timeout=10)

env = os.environ.copy()
env['BROWSER'] = 'none'

log_file = open('/tmp/vite.log', 'w', buffering=1)
print('Starting Vite dev server...', flush=True)

proc = subprocess.Popen(
    ['npx', 'vite', '--host', '0.0.0.0', '--port', '12000'],
    stdout=log_file,
    stderr=subprocess.STDOUT,
    env=env,
    cwd='/workspace/my-app'
)

# Wait for startup (up to 60 seconds)
for i in range(60):
    time.sleep(1)
    if proc.poll() is not None:
        print(f'Process exited prematurely with code {proc.returncode}', flush=True)
        log_file.flush()
        with open('/tmp/vite.log') as f:
            lines = f.readlines()
        print(''.join(lines[-20:]), flush=True)
        sys.exit(1)
    
    log_file.flush()
    with open('/tmp/vite.log') as f:
        content = f.read()
    
    if 'Local:' in content:
        print(f'VITE SERVER READY on port 12000 (after {i+1}s)', flush=True)
        # Extract network URL
        for line in content.split('\n'):
            if 'Local:' in line:
                print(line.strip(), flush=True)
            if 'Network:' in line:
                print(line.strip(), flush=True)
        break
else:
    print('Server did not become ready within 60s', flush=True)
    log_file.flush()
    with open('/tmp/vite.log') as f:
        lines = f.readlines()
    print(''.join(lines[-15:]), flush=True)
    proc.terminate()
    sys.exit(1)