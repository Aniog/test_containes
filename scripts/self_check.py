import re
import sys

HTML_FILE = "index.html"
with open(HTML_FILE, "r", encoding="utf-8") as f:
    html = f.read()

checks_passed = 0
checks_failed = 0

def check(name, condition):
    global checks_passed, checks_failed
    if condition:
        checks_passed += 1
        print(f"✅ {name}")
    else:
        checks_failed += 1
        print(f"❌ {name}")

# 1. Unique generator name from a collapsed card appears in source
check("Collapsed generator in source", "AI Store Builder for Restaurants" in html)

# 2. No site name / description input (search input is OK)
inputs = re.findall(r'<input[^>]*>', html)
problem_inputs = [inp for inp in inputs if re.search(r'placeholder.*(?:site|describe|name)', inp, re.I) or re.search(r'name="(?:site|description|name)"', inp, re.I)]
check("No site name/description inputs", len(problem_inputs) == 0)

# 3. Exactly one h1
h1_count = len(re.findall(r'<h1[\s>]', html))
check("Exactly one h1", h1_count == 1)

# 4. Category subsections use h3
h3_in_sections = re.findall(r'<h3[^>]*>([^<]+)</h3>', html)
check("Category subsections use h3", len(h3_in_sections) >= 6)

# 5. Primary hero CTA and closing CTA link to /s/ai_site_builder
cta_links = re.findall(r'href="(/s/ai_site_builder)"', html)
check("CTAs link to /s/ai_site_builder", cta_links.count('/s/ai_site_builder') >= 2)

# 6. Category cards jump to matching subsection with JS off (hash anchors)
category_hashes = ["#websites", "#landing-pages", "#portfolios", "#blogs", "#stores", "#link-in-bio"]
for h in category_hashes:
    check(f"Hash anchor {h} present", h in html)

# 7. Page is readable at 375px (check viewport meta)
check("Viewport meta present", 'width=device-width' in html)

# 8. Filled buttons use white text
check("Gradient button uses white text", 'bg-gradient-ai text-white' in html)

# 9. BreadcrumbList is the only JSON-LD
check("BreadcrumbList present", "BreadcrumbList" in html)
check("No FAQPage schema", "FAQPage" not in html)
check("No ItemList schema", "ItemList" not in html)
check("No WebApplication schema", "WebApplication" not in html)

# Bonus checks
check("Canonical link present", "canonical" in html)
check("OG tags present", "og:title" in html)
check("No fake testimonials", "customer said" not in html.lower() and "5 stars" not in html.lower())
check("No fake star ratings", "star rating" not in html.lower() and "&#9733;" not in html)
check("Search input has accessible label", 'aria-label="Search generators"' in html)
check("FAQ buttons have aria-expanded", 'aria-expanded="true"' in html)
check("Show all buttons present", "Show all" in html)

print(f"\n{checks_passed} passed, {checks_failed} failed")
sys.exit(0 if checks_failed == 0 else 1)
