#!/bin/sh
cd /workspace/my-app
rm -rf node_modules/.vite
pkill -9 -f vite 2>/dev/null
pkill -9 -f node 2>/dev/null
sleep 2
echo "Processes killed, cache cleared"
nohup npx vite --port 12000 --host 0.0.0.0 --allowedHosts > /tmp/vite.log 2>&1 &
sleep 5
echo "Vite started"
cat /tmp/vite.log
