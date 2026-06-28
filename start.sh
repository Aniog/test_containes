#!/bin/bash
cd /workspace/my-app
rm -rf node_modules/.vite
pkill -f vite 2>/dev/null || true
sleep 1
npx vite --port 12000 --host 0.0.0.0
