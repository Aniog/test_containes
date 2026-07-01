#!/bin/bash
pkill -9 -f vite 2>/dev/null
pkill -9 -f node 2>/dev/null
sleep 2
cd /workspace/my-app
npx vite --port 12000 --host 0.0.0.0 > /tmp/vite.log 2>&1 &
sleep 5
cat /tmp/vite.log
