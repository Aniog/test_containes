#!/usr/bin/env python3
"""Comprehensive script to check status, start server, and verify."""
import subprocess, os, time, sys, signal, urllib.request

os.chdir('/workspace/my-app')
print('=' * 60)
print('STEP 1: Checking system status')
print('=' * 60)

# Check processes
for check in [
    'ps aux | grep -c "[v]ite"',
    'ps aux | grep -c "[n]ode"',
    'cat /proc/loadavg',
]:
    r = subprocess.run(['bash', '-c', check], capture_output=True, text=True, timeout=5)
    print(f'{check}: {r.stdout.strip()}')

# Check port 12000
r = subprocess.run(['bash', '-c', 'ss -tlnp | grep 12000 || echo "NOT_LISTENING"'], 
                    capture_output=True, text=True, timeout=5)
print(f'Port 12000: {r.stdout.strip()}')

# Kill any stale processes on port 12000
subprocess.run(['bash', '-c', 'fuser -k 12000/tcp 2>/dev/null || true'], capture_output=True, timeout=5)
subprocess.run(['bash', '-c', 'pkill -9 -f "node.*12000" 2>/dev/null || true'], capture_output=True, timeout=5)
time.sleep(2)

print('\n' + '=' * 60)
print('STEP 2: Starting Vite dev server on port 12000')
print('=' * 60)

env = os.environ.copy()
env['BROWSER'] = 'none'
env['PORT'] = '12000'

log_f = open('/tmp/vite_final.log', 'w', buffering=1)

proc = subprocess.Popen(
    ['npx', 'vite', '--host', '0.0.0.0', '--port', '12000'],
    stdout=log_f,
    stderr=subprocess.STDOUT,
    env=env,
    cwd='/workspace/my-app'
)

print(f'PID: {proc.pid}')

# Monitor startup
for i in range(60):
    time.sleep(1)
    ret = proc.poll()
    if ret is not None:
        log_f.flush()
        with open('/tmp/vite_final.log') as f:
            print(f'Process exited (code {ret})')
            lines = f.readlines()
            print(''.join(lines[-20:]))
        sys.exit(1)
    
    log_f.flush()
    with open('/tmp/vite_final.log') as f:
        content = f.read()
    
    if 'Local:' in content:
        print(f'VITE READY after {i+1}s!')
        with open('/tmp/vite_final.log') as f:
            lines = f.readlines()
            for l in lines[-3:]:
                print(l.rstrip())
        break
    if i % 5 == 0:
        print(f'Waiting... ({i+1}s)')

print('\n' + '=' * 60)
print('STEP 3: Checking local port 12000')
print('=' * 60)
try:
    req = urllib.request.Request('http://localhost:12000', method='GET')
    resp = urllib.request.urlopen(req, timeout=5)
    print(f'HTTP {resp.status}, body: {len(resp.read())} bytes')
except Exception as e:
    print(f'Local error: {e}')

print('\n' + '=' * 60)
print('STEP 4: Checking preview host')
print('=' * 60)
url = 'https://ta-01kw1pw380583zx3h7b6jwvpfs-12000-0p1eodcowl79rheupgba95ae8.w.modal.host'
try:
    req = urllib.request.Request(url, method='GET')
    resp = urllib.request.urlopen(req, timeout=15)
    body = resp.read().decode('utf-8', errors='replace')
    print(f'HTTP {resp.status}, body: {len(body)} chars')
    print(body[:1000])
except Exception as e:
    print(f'Preview error: {e}')

print('\nDone. Vite PID:', proc.pid)