#!/usr/bin/env python3
import urllib.request, os, subprocess, json, sys, time

os.chdir('/workspace/my-app')

# 1. Check preview URL
url = 'https://ta-01kw1pw380583zx3h7b6jwvpfs-12000-0p1eodcowl79rheupgba95ae8.w.modal.host'
print(f'=== Checking {url} ===')
try:
    req = urllib.request.Request(url)
    resp = urllib.request.urlopen(req, timeout=15)
    body = resp.read().decode('utf-8', errors='replace')
    print(f'Status: {resp.status}, Body: {len(body)} chars')
    # Look for key content
    for kw in ['SSourcing', 'China Sourcing', 'root', 'div']:
        if kw in body:
            idx = body.index(kw)
            print(f'  Found "{kw}" at position {idx}: ...{body[max(0,idx-20):idx+80]}...')
except Exception as e:
    print(f'Error: {type(e).__name__}: {e}')

# 2. Check local port 12000
print('\n=== Checking localhost:12000 ===')
try:
    req = urllib.request.Request('http://localhost:12000')
    resp = urllib.request.urlopen(req, timeout=5)
    body = resp.read().decode('utf-8', errors='replace')
    print(f'Status: {resp.status}, Body: {len(body)} chars')
    print(body[:500])
except Exception as e:
    print(f'Error: {type(e).__name__}: {e}')

# 3. Check port 8080
print('\n=== Checking localhost:8080 ===')
try:
    req = urllib.request.Request('http://localhost:8080')
    resp = urllib.request.urlopen(req, timeout=5)
    body = resp.read().decode('utf-8', errors='replace')
    print(f'Status: {resp.status}, Body: {len(body)} chars')
except Exception as e:
    print(f'Error: {type(e).__name__}: {e}')

# 4. Check if any node/vite process running
print('\n=== Process Check ===')
r = subprocess.run(['bash', '-c', 'ps aux | grep -E "node|vite" | grep -v grep'], 
                   capture_output=True, text=True, timeout=5)
if r.stdout.strip():
    print(r.stdout)
else:
    print('No node/vite processes running')

# 5. Start vite if not running
print('\n=== Starting Vite ===')
subprocess.run(['bash', '-c', 'pkill -9 -f "vite" 2>/dev/null; pkill -9 -f "node.*12000" 2>/dev/null; sleep 1'],
               timeout=10)

env = os.environ.copy()
env['BROWSER'] = 'none'
proc = subprocess.Popen(
    ['npx', 'vite', '--host', '0.0.0.0', '--port', '12000'],
    stdout=open('/tmp/vite_check.log', 'w'),
    stderr=subprocess.STDOUT,
    env=env,
    cwd='/workspace/my-app'
)
print(f'Started Vite PID: {proc.pid}')

for i in range(30):
    time.sleep(1)
    if proc.poll() is not None:
        print(f'Exited with code {proc.returncode}')
        break
    with open('/tmp/vite_check.log') as f:
        c = f.read()
    if 'Local:' in c:
        print(f'VITE READY after {i+1}s!')
        for line in c.split('\n'):
            if 'Local:' in line or 'Network:' in line:
                print(line.strip())
        break
else:
    print('Timeout')
    with open('/tmp/vite_check.log') as f:
        print(''.join(f.readlines()[-15:]))

# 6. Verify local again
print('\n=== Final Local Check ===')
try:
    req = urllib.request.Request('http://localhost:12000')
    resp = urllib.request.urlopen(req, timeout=5)
    body = resp.read().decode('utf-8', errors='replace')
    print(f'Status: {resp.status}, Body: {len(body)} chars')
except Exception as e:
    print(f'Error: {type(e).__name__}: {e}')