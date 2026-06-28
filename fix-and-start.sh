#!/bin/bash
cd /workspace/my-app

# Kill existing processes
pkill -9 -f "vite" 2>/dev/null || true
pkill -9 -f "node.*vite" 2>/dev/null || true

# Wait for processes to die
sleep 2

# Clear cache
rm -rf node_modules/.vite

# Start vite
nohup npx vite --port 12000 --host 0.0.0.0 --allowedHosts > /tmp/vite.log 2>&1 &

echo "Vite PID: $!"
sleep 4
cat /tmp/vite.log
