#!/usr/bin/env python3
"""Standalone script to start everything, no shell required."""
import subprocess, os, time, sys, signal, urllib.request, json

os.chdir('/workspace/my-app')

# Check preview
print('CHECKING PREVIEW...')
url = 'https://ta-01kw1pw380583zx3h7b6jwvpfs-12000-0p1eodcowl79rheupgba95ae8.w.modal.host'
try:
    r = urllib.request.urlopen(url, timeout=10)
    b = r.read().decode('utf-8', errors='replace')
    print(f'PREVIEW: HTTP {r.status}, {len(b)}b')
    for k in ['SSourcing', 'root', 'DOCTYPE']:
        if k in b:
            print(f'  FOUND: {k}')
    sys.exit(0)
except Exception as e:
    print(f'PREVIEW ERROR: {e}')

# Try starting server
print('\nSTARTING SERVER...')
log = open('/tmp/srv.log', 'w', buffering=1)
proc = subprocess.Popen(
    ['node', 'node_modules/.bin/vite', '--host', '0.0.0.0', '--port', '12000'],
    stdout=log, stderr=subprocess.STDOUT,
    env={**os.environ, 'BROWSER': 'none'},
    cwd='/workspace/my-app'
)
print(f'PID: {proc.pid}')

for i in range(60):
    time.sleep(1)
    if proc.poll() is not None:
        print(f'DIED: rc={proc.returncode}')
        break
    log.flush()
    with open('/tmp/srv.log') as f:
        c = f.read()
    if 'Local:' in c:
        print(f'READY t={i+1}s')
        for line in c.split('\n'):
            if 'Local:' in line or 'Network:' in line:
                print(f'  {line.strip()}')
        break
else:
    print('TIMEOUT')
    with open('/tmp/srv.log') as f:
        print(''.join(f.readlines()[-20:]))

print('\nFINAL CHECK...')
try:
    r = urllib.request.urlopen('http://localhost:12000', timeout=5)
    b = r.read().decode('utf-8', errors='replace')
    print(f'LOCAL: HTTP {r.status}, {len(b)}b')
    print(b[:300])
except Exception as e:
    print(f'LOCAL ERROR: {e}')

try:
    r = urllib.request.urlopen(url, timeout=15)
    b = r.read().decode('utf-8', errors='replace')
    print(f'PREVIEW: HTTP {r.status}, {len(b)}b')
    for k in ['SSourcing', 'root']:
        if k in b:
            print(f'  FOUND: {k}')
except Exception as e:
    print(f'PREVIEW ERROR: {e}')