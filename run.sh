#!/bin/bash
cd /workspace/my-app
exec node node_modules/.bin/vite --host 0.0.0.0 --port 8080
