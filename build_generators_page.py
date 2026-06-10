#!/usr/bin/env python3
# Complete Strikingly Generators Hub Page Generator
# This generates a fully static HTML page with all 60+ generator cards
# visible in view-source for SEO.

def build_html():
    parts = []
    
    # ===== PART 1: HTML DOCUMENT START =====
    p1 = """<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>AI Website Generators - Build Any Site in Seconds | Strikingly</title>
  <meta name="description" content="Browse Strikingly's AI-powered website generators. Choose one for your industry, goal, or site type and create a website in seconds, no code required.">
  <meta name="robots" content="index, follow">
  <link rel="canonical" href="https://www.strikingly.com/generators">
  
  <!-- Open Graph -->
  <meta property="og:title" content="AI Website Generators - Build Any Site in Seconds | Strikingly">
  <meta property="og:description" content="Browse Strikingly's AI-powered website generators. Choose one for your industry, goal, or site type and create a website in seconds.">
  <meta property="og:url" content="https://www.strikingly.com/generators">
  <meta property="og:type" content="website">
  
  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@700&family=Open+Sans:wght@400;600&display=swap" rel="stylesheet">
  
  <!-- JSON-LD BreadcrumbList (ONLY schema) -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Strikingly",
        "item": "https://www.strikingly.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "AI Generators",
        "item": "https://www.strikingly.com/generators"
      }
    ]
  }
  </script>
"""
    parts.append(p1)
    
    print("Part 1: Head section created")
    return parts

if __name__ == '__main__':
    result = build_html()
    print(f"Built {len(result)} parts")
    print("Ready to continue building...")
