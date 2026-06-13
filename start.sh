#!/bin/bash
# Kill any existing vite processes on port 12000
fuser -k 12000/tcp 2>/dev/null
sleep 1

cd /workspace/my-app
# Clean start
exec npx vite --port 12000 --host 0.0.0.0 2>&1
