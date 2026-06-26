#!/usr/bin/env python3
"""Check if Vite is running, start if not."""
import subprocess, os, time, sys, signal

os.chdir('/workspace/my-app')

# Check if vite process exists
result = subprocess.run(
    ['bash', '-c', 'ps aux | grep "[v]ite" | wc -l'],
    capture_output=True, text=True, timeout=5
)
print(f'Existing vite processes count: {result.stdout.strip()}')

# Check if port 12000 is in use
result = subprocess.run(
    ['bash', '-c', 'lsof -ti :12000 2>/dev/null || echo "NOT_IN_USE"'],
    capture_output=True, text=True, timeout=5
)
print(f'Port 12000 status: {result.stdout.strip()}')

# If not running, start it
result2 = subprocess.run(
    ['bash', '-c', 'lsof -ti :12000 2>/dev/null'],
    capture_output=True, text=True, timeout=5
)
if result2.stdout.strip() == '':
    print('Starting Vite...')
    env = os.environ.copy()
    env['BROWSER'] = 'none'
    
    proc = subprocess.Popen(
        ['npx', 'vite', '--host', '0.0.0.0', '--port', '12000'],
        stdout=open('/tmp/vite_startup.log', 'w'),
        stderr=subprocess.STDOUT,
        env=env,
        cwd='/workspace/my-app'
    )
    print(f'Started Vite with PID {proc.pid}')
    
    for i in range(30):
        time.sleep(1)
        if proc.poll() is not None:
            print(f'Process exited with code {proc.returncode}')
            break
        with open('/tmp/vite_startup.log') as f:
            content = f.read()
        if 'Local:' in content:
            print('VITE READY!')
            break
    else:
        print('Timeout waiting for Vite')
    
    with open('/tmp/vite_startup.log') as f:
        print('Last log lines:')
        print(''.join(f.readlines()[-15:]))
else:
    print('Vite is already running')