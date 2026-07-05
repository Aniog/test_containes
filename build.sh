#!/bin/bash
cd /workspace/my-app && npm run build 2>&1 | tail -30
