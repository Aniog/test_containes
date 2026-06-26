#!/usr/bin/env python3
"""Check preview URL and localhost."""
import urllib.request, json, sys

# Check preview host
url = 'https://ta-01kw1pw380583zx3h7b6jwvpfs-12000-0p1eodcowl79rheupgba95ae8.w.modal.host'
print(f'Checking {url}...')
try:
    r = urllib.request.urlopen(url, timeout=20)
    body = r.read().decode('utf-8', errors='replace')
    print(f'HTTP {r.status}, {len(body)} bytes')
    for kw in ['SSourcing', 'China Sourcing', '<div', '<!DOCTYPE']:
        if kw in body:
            print(f'  ✓ Found "{kw}"')
    # Print first 2000 chars
    print('\n--- First 1000 chars ---')
    print(body[:1000])
except Exception as e:
    print(f'Error: {type(e).__name__}: {e}')

# Check local port 12000
print('\n--- Checking localhost:12000 ---')
try:
    r = urllib.request.urlopen('http://localhost:12000', timeout=5)
    body = r.read().decode('utf-8', errors='replace')
    print(f'HTTP {r.status}, {len(body)} bytes')
    print(body[:500])
except Exception as e:
    print(f'Error: {type(e).__name__}: {e}')