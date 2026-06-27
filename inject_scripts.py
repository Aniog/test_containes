import re

with open('/workspace/my-app/original_index.html', 'r') as f:
    orig = f.read()

# Extract from first <script> down to <script type="module" src="/src/main.jsx"></script>
match = re.search(r'(<script>([\s\S]*?)</script>\s*<script>([\s\S]*?)</script>\s*<script type="module" src="/src/main.jsx"></script>)', orig)
scripts = match.group(1) if match else ""

with open('/workspace/index.html', 'r') as f:
    new_html = f.read()

# Insert before </body>
new_html = new_html.replace('</body>', scripts + '\n</body>')

with open('/workspace/my-app/index.html', 'w') as f:
    f.write(new_html)

print("Injected scripts.")
