#!/bin/bash
cd /workspace/my-app
if [ -d "node_modules" ]; then
  echo "NODE_MODULES_EXISTS"
else
  echo "NODE_MODULES_MISSING"
  npm install
fi
echo "STARTING_VITE"
npx vite --port 12000 --host 0.0.0.0 &
sleep 5
echo "VITE_STARTED"
