#!/bin/bash
set -e

echo "=== VELMORA REBUILD SCRIPT ==="

# Kill all node processes
echo "[1] Killing processes..."
killall -9 node 2>/dev/null || true
killall -9 vite 2>/dev/null || true
sleep 3

# Clean rebuild
echo "[2] Cleaning and reinstalling..."
cd /workspace/my-app
rm -rf node_modules/.vite 2>/dev/null || true
rm -rf dist 2>/dev/null || true

# Install dependencies
echo "[3] Installing dependencies..."
npm install --silent 2>&1 | tail -5

# Build check
echo "[4] Running build check..."
npx vite build 2>&1 | tail -10

# Start dev server
echo "[5] Starting dev server on port 12000..."
npx vite --port 12000 --host 0.0.0.0 &
VITE_PID=$!
echo "Vite PID: $VITE_PID"

# Wait for startup
sleep 8

# Test
echo "[6] Testing server..."
curl -s -o /dev/null -w "HTTP: %{http_code}\n" http://localhost:12000 || echo "Server not responding"

echo "=== DONE ==="
