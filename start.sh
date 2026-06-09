#!/bin/bash
cd /workspace/my-app
# Kill any existing vite processes
pkill -f "vite" 2>/dev/null || true
sleep 1
# Start vite dev server on port 12000
npx vite --port 12000 --host 0.0.0.0
