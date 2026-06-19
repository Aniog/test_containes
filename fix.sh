#!/bin/bash
# Kill all node processes
killall -9 node 2>/dev/null
killall -9 vite 2>/dev/null
sleep 2

# Check if ports are free
echo "Checking ports..."
ss -tlnp 2>/dev/null | grep -E '12000|12001' || echo "Ports are free"

# Start vite dev server
cd /workspace/my-app
echo "Starting Vite dev server..."
npx vite --port 12000 --host 0.0.0.0 2>&1 &
VITE_PID=$!
echo "Vite started with PID: $VITE_PID"

# Wait for server to start
sleep 5

# Check if it's running
if kill -0 $VITE_PID 2>/dev/null; then
    echo "Vite is running"
    curl -s -o /dev/null -w "HTTP Status: %{http_code}\n" http://localhost:12000 || echo "Could not reach server"
else
    echo "Vite failed to start"
    cat /tmp/vite-output.log 2>/dev/null
fi
