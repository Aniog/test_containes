import subprocess
import re
import os
from playwright.sync_api import sync_playwright

DIST_DIR = os.path.join(os.path.dirname(__file__), '..', 'dist')
DIST_FILE = os.path.join(DIST_DIR, 'index.html')

def main():
    print("Building...")
    subprocess.run(["npm", "run", "build"], cwd=os.path.join(os.path.dirname(__file__), '..'), check=True)

    print("Prerendering...")
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()
        page.goto("http://127.0.0.1:12000", wait_until="networkidle")
        page.wait_for_timeout(500)
        html = page.content()
        browser.close()

    # Extract content between <div id="root"> and the </div> right before </body>
    root_start = html.find('<div id="root">')
    if root_start == -1:
        raise RuntimeError("Could not find #root in prerendered HTML")
    body_end = html.rfind('</body>')
    if body_end == -1:
        raise RuntimeError("Could not find </body>")
    # Walk backwards from </body> to find the closing </div>
    closing_div = html.rfind('</div>', 0, body_end)
    if closing_div == -1:
        raise RuntimeError("Could not find closing </div> before </body>")
    content_start = root_start + len('<div id="root">')
    prerendered_body = html[content_start:closing_div]

    # Clean up source-tracking data-* attributes injected by dev tools
    prerendered_body = re.sub(r' data-source-location="[^"]*"', '', prerendered_body)
    prerendered_body = re.sub(r' data-visual-id="[^"]*"', '', prerendered_body)
    prerendered_body = re.sub(r' data-source-file="[^"]*"', '', prerendered_body)
    prerendered_body = re.sub(r' data-source-line="[^"]*"', '', prerendered_body)
    prerendered_body = re.sub(r' data-source-column="[^"]*"', '', prerendered_body)

    with open(DIST_FILE, "r", encoding="utf-8") as f:
        original_html = f.read()

    final_html = re.sub(
        r'<div id="root"></div>',
        f'<div id="root">{prerendered_body}</div>',
        original_html
    )

    # Remove the preview route bridge script that the dev server injects
    final_html = re.sub(
        r'<script>\s*\(\(\) => \{[\s\S]*?window\.parent\.postMessage\([\s\S]*?\}\)\(\);\s*</script>',
        '',
        final_html
    )

    with open(DIST_FILE, "w", encoding="utf-8") as f:
        f.write(final_html)

    print(f"Prerendered {DIST_FILE}")

if __name__ == "__main__":
    main()
