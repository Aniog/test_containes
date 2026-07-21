from playwright.sync_api import sync_playwright
import time

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    page = browser.new_page(viewport={'width': 1280, 'height': 800})
    
    console_logs = []
    def handle_console(msg):
        console_logs.append(f"{msg.type}: {msg.text}")
    page.on('console', handle_console)
    
    def handle_error(err):
        console_logs.append(f"ERROR: {err}")
    page.on('pageerror', handle_error)
    
    for path in ['/', '/shop', '/product/vivid-aura-jewels']:
        print(f'Navigating to {path}...')
        page.goto(f'https://ta-01ky14nr3yk4bqje6wy2agpd9s-12000-2nx2nm2zz9v09qbsd809s5r29.w.modal.host{path}', wait_until='networkidle')
        time.sleep(4)
        root_info = page.evaluate("""() => {
            const root = document.getElementById('root');
            return {
                rootExists: !!root,
                rootChildren: root ? root.children.length : null,
                bodyChildren: document.body.children.length,
                bodyText: document.body.innerText.substring(0, 220)
            };
        }""")
        print('ROOT INFO:', root_info)
    
    print('CONSOLE LOGS:')
    for log in console_logs[-20:]:
        print('  ', log)
    
    browser.close()
