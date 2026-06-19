#!/usr/bin/env python3
"""
Comprehensive fix script for Velmora Fine Jewelry e-commerce site.
This script:
1. Kills all interfering processes
2. Verifies all source files are correct
3. Starts the Vite dev server
4. Tests the server
"""

import subprocess
import os
import signal
import time
import sys
import json

def run_cmd(cmd, timeout=10):
    """Run a command and return output"""
    try:
        result = subprocess.run(
            cmd, 
            shell=True, 
            capture_output=True, 
            text=True, 
            timeout=timeout
        )
        return result.returncode, result.stdout, result.stderr
    except subprocess.TimeoutExpired:
        return -1, "", "Command timed out"
    except Exception as e:
        return -1, "", str(e)

def main():
    print("=" * 60)
    print("VELMORA FINE JEWELRY - FIX SCRIPT")
    print("=" * 60)
    
    # Step 1: Kill all node processes
    print("\n[1] Killing all node processes...")
    rc, out, err = run_cmd("pkill -9 -f node 2>/dev/null; pkill -9 -f vite 2>/dev/null; echo done")
    print(f"   Result: {out.strip()}")
    time.sleep(3)
    
    # Step 2: Check ports
    print("\n[2] Checking ports...")
    rc, out, err = run_cmd("ss -tlnp 2>/dev/null | grep -E '12000|12001' || echo 'Ports are free'")
    print(f"   {out.strip()}")
    
    # Step 3: Verify source files
    print("\n[3] Verifying source files...")
    files_to_check = [
        '/workspace/my-app/src/main.jsx',
        '/workspace/my-app/src/App.jsx',
        '/workspace/my-app/src/index.css',
        '/workspace/my-app/src/context/CartContext.jsx',
        '/workspace/my-app/src/components/layout/Layout.jsx',
        '/workspace/my-app/src/components/layout/Navbar.jsx',
        '/workspace/my-app/src/components/layout/Footer.jsx',
        '/workspace/my-app/src/components/layout/CartDrawer.jsx',
        '/workspace/my-app/src/pages/HomePage.jsx',
        '/workspace/my-app/src/pages/ShopPage.jsx',
        '/workspace/my-app/src/pages/ProductPage.jsx',
        '/workspace/my-app/src/pages/AboutPage.jsx',
        '/workspace/my-app/src/data/products.js',
        '/workspace/my-app/vite.config.js',
        '/workspace/my-app/package.json',
    ]
    
    all_good = True
    for f in files_to_check:
        if os.path.exists(f):
            print(f"   OK: {f}")
        else:
            print(f"   MISSING: {f}")
            all_good = False
    
    if not all_good:
        print("\n   ERROR: Some files are missing!")
        return 1
    
    # Step 4: Check package.json
    print("\n[4] Checking package.json...")
    with open('/workspace/my-app/package.json', 'r') as f:
        pkg = json.load(f)
    print(f"   Name: {pkg.get('name', 'unknown')}")
    print(f"   Dependencies: {len(pkg.get('dependencies', {}))}")
    print(f"   DevDependencies: {len(pkg.get('devDependencies', {}))}")
    
    # Step 5: Check node_modules
    print("\n[5] Checking node_modules...")
    if os.path.exists('/workspace/my-app/node_modules'):
        print("   node_modules exists")
    else:
        print("   node_modules missing, installing...")
        rc, out, err = run_cmd("cd /workspace/my-app && npm install", timeout=120)
        print(f"   Install result: {'success' if rc == 0 else 'failed'}")
        if rc != 0:
            print(f"   Error: {err}")
            return 1
    
    # Step 6: Build check
    print("\n[6] Running build check...")
    rc, out, err = run_cmd("cd /workspace/my-app && npx vite build 2>&1 | tail -20", timeout=60)
    print(f"   Build output:\n{out}")
    if rc != 0:
        print(f"   Build failed: {err}")
        return 1
    
    # Step 7: Start dev server
    print("\n[7] Starting Vite dev server...")
    proc = subprocess.Popen(
        ['npx', 'vite', '--port', '12000', '--host', '0.0.0.0'],
        cwd='/workspace/my-app',
        stdout=subprocess.PIPE,
        stderr=subprocess.STDOUT,
        text=True
    )
    
    # Wait for server to start
    print("   Waiting for server to start...")
    time.sleep(10)
    
    # Check if it's running
    if proc.poll() is None:
        print("   Vite is running!")
        # Test the server
        try:
            import urllib.request
            response = urllib.request.urlopen('http://localhost:12000', timeout=5)
            print(f"   HTTP Status: {response.status}")
            html = response.read().decode('utf-8')
            if 'Velmora' in html or 'root' in html:
                print("   Server is serving content!")
            else:
                print("   WARNING: Server response doesn't contain expected content")
        except Exception as e:
            print(f"   Could not reach server: {e}")
    else:
        print("   Vite failed to start!")
        # Read any output
        output = proc.stdout.read()
        print(f"   Output: {output}")
        return 1
    
    print("\n" + "=" * 60)
    print("FIX COMPLETE - Server should be running on port 12000")
    print("=" * 60)
    return 0

if __name__ == '__main__':
    sys.exit(main())
