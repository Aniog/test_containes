#!/bin/bash
# Kill any existing vite/node processes
kill -9 $(pgrep -f vite) 2>/dev/null
kill -9 $(pgrep -f esbuild) 2>/dev/null
kill -9 $(lsof -t -i:12000) 2>/dev/null

sleep 2

# Start Vite dev server
cd /workspace/my-app
exec npx vite --port 12000 --host 0.0.0.0
