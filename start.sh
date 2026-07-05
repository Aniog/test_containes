#!/bin/bash
cd /workspace/my-app
npx vite --port 12000 --host 0.0.0.0 > /tmp/vite.log 2>&1 &
echo "VITE_STARTED_PID=$!"
