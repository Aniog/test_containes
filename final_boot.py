#!/usr/bin/env python3
"""Run setup_server.py by invoking it directly via subprocess."""
import subprocess, sys

# Use /usr/bin/env python3 to avoid shell
result = subprocess.run(
    [sys.executable, '/workspace/my-app/setup_server.py'],
    capture_output=False,
    timeout=120
)
print(f'Exit code: {result.returncode}')