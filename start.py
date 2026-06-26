#!/usr/bin/env python3
"""Start the Vite dev server using the fixed config."""
import subprocess, os, time, sys

os.chdir('/workspace/my-app')

env = {**os.environ, 'BROWSER': 'none', 'NODE_NO_WARNINGS': '1'}

proc = subprocess.Popen(
    ['npx', 'vite', '--config', 'vite.fix.config.js'],
    stdout=open('/tmp/vite-out.log', 'w'),
    stderr=open('/tmp/vite-err.log', 'w'),
    env=env
)

# Wait for startup
for i in range(30):
    time.sleep(1)
    with open('/tmp/vite-out.log') as f:
        log = f.read()
    with open('/tmp/vite-err.log') as f:
        err = f.read()
    combined = log + err
    if 'Local:' in combined:
        print('VITE STARTED SUCCESSFULLY')
        print(combined[-600:])
        sys.exit(0)

print('TIMEOUT')
print('STDOUT:', open('/tmp/vite-out.log').read()[-300:])
print('STDERR:', open('/tmp/vite-err.log').read()[-300:])
sys.exit(1)