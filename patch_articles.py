with open('/workspace/my-app/index.html', 'r', encoding='utf-8') as f:
    text = f.read()

text = text.replace('<a href="/generators/', '<article class="h-full"><a href="/generators/')
# But wait, that wraps it outside! But what about the closing tag?
# Better use regex:
import re
# For Featured Generators and All Generators cards:
# They start with <a href="/generators/...
# ends with </a>
# Let's replace the whole tag structure if we can.
def replacer(m):
    # m.group(0) is the whole match of <a ... > ... </a>
    return f'<article>{m.group(0)}</article>'

# Not trivial without regex because of attributes and lines.
# Actually I can just replace `class="block bg-white... group"` with `class="block... group"` as the `<a>`, maybe wrap it.
