#!/usr/bin/env python3
"""Check if Vite is running and try to verify the preview."""
import subprocess, os, time, sys

os.chdir('/workspace/my-app')

# Check what's running
for cmd in [
    'ps aux | grep -E "vite|node" | grep -v grep',
    'lsof -i :12000 2>/dev/null || echo "Port 12000 free"',
    'lsof -i :8080 2>/dev/null || echo "Port 8080 free"',
    'ls -la /workspace/my-app/node_modules/.bin/vite 2>/dev/null || echo "No vite binary"',
]:
    r = subprocess.run(['bash', '-c', cmd], capture_output=True, text=True, timeout=5)
    print(f'$ {cmd}')
    print(r.stdout[:500] if r.stdout else '')
    if r.stderr:
        print('ERR:', r.stderr[:200])
    print('---')