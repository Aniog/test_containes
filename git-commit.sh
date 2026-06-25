#!/bin/bash
cd /workspace/my-app
git config user.name "strk"
git config user.email "strk@strikingly.com"
git add -A
git status > /tmp/git-status.txt 2>&1
git commit -m "feat: build Strikingly AI Generators hub page

- Complete single-page marketing/directory page
- Hero section with AI gradient text and dual CTAs
- Featured Generators 3x3 grid with category tags
- Browse by Category section with 6 category cards
- All Generators directory with 60+ entries across 6 categories
- Search filter with live results count
- Progressive collapse with Show All toggles
- How It Works 3-step section
- Why Strikingly 3-up benefits grid
- FAQ accordion with 6 questions
- Closing CTA linking to /s/ai_site_builder
- Footer with real Strikingly URLs
- Semantic HTML (nav, main, section, article, footer)
- BreadcrumbList JSON-LD structured data
- Responsive design (375px to 1440px)
- i18n-ready string architecture
- Brand tokens: Josefin Sans headings, Open Sans body
- WCAG AA accessible (focus states, aria attributes)
- All cards visible in initial render (progressive enhancement)" > /tmp/git-commit.txt 2>&1
echo "DONE" >> /tmp/git-commit.txt
