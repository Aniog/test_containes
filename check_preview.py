#!/usr/bin/env python3
"""Check if the preview server is responding."""
import urllib.request, sys, os

url = 'https://ta-01kw1pw380583zx3h7b6jwvpfs-12000-0p1eodcowl79rheupgba95ae8.w.modal.host'
print(f'Checking {url}...')
try:
    req = urllib.request.Request(url, method='GET')
    resp = urllib.request.urlopen(req, timeout=15)
    print(f'Status: {resp.status}')
    body = resp.read().decode('utf-8', errors='replace')
    print(f'Body length: {len(body)}')
    print(body[:2000])
except Exception as e:
    print(f'Error: {e}')
    
# Also check local port 12000
print('\n--- Checking local port 12000 ---')
try:
    req = urllib.request.Request('http://localhost:12000', method='GET')
    resp = urllib.request.urlopen(req, timeout=5)
    print(f'Status: {resp.status}')
    body = resp.read().decode('utf-8', errors='replace')
    print(f'Body length: {len(body)}')
    print(body[:500])
except Exception as e:
    print(f'Error: {e}')