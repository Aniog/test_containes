import subprocess, os
os.chdir('/workspace/my-app')
subprocess.run(['git', 'config', 'user.name', 'strk'])
subprocess.run(['git', 'config', 'user.email', 'strk@strikingly.com'])
subprocess.run(['git', 'rm', '--cached', 'git-commit.sh'], capture_output=True)
subprocess.run(['rm', '-f', 'git-commit.sh', 'GIT_OUTPUT.txt', 'do_git.py'])
subprocess.run(['git', 'add', '-A'])
result = subprocess.run(['git', 'commit', '-m', 'feat: build Strikingly AI Generators hub page'], capture_output=True, text=True)
with open('/workspace/my-app/git-result.txt', 'w') as f:
    f.write(f"STDOUT:\n{result.stdout}\n\nSTDERR:\n{result.stderr}\n\nRETURN CODE: {result.returncode}\n")
