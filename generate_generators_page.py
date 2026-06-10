#!/usr/bin/env python3
# Generate the complete Strikingly Generators Hub Page

def build_html():
    parts = []
    
    # Start HTML document with head
    parts.append("""<!DOCTYPE html>
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
  
  <!-- JSON-LD BreadcrumbList -->
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
""")
    
    # Add CSS
    parts.append("""  <style>
    /* ===== CSS Reset & Base ===== */
    *, *::before, *::after {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    
    :root {
      --brand-purple: #8159BB;
      --ai-gradient: linear-gradient(135deg, #7671FF 0%, #CB0C9F 100%);
      --body-text: #636972;
      --heading-dark: #4B5056;
      --heading-darker: #2E2E2F;
      --card-border: #C6C9CD;
      --divider: #E2E4E7;
      --light-bg: #F4F6F8;
      --white: #FFFFFF;
      --font-heading: 'Josefin Sans', 'Poppins', sans-serif;
      --font-body: 'Open Sans', sans-serif;
      --section-padding: 40px;
      --block-gap: 20px;
      --content-max-width: 1200px;
      --radius-sm: 3px;
      --radius-md: 4px;
      --radius-lg: 3px;
    }
    
    html {
      scroll-behavior: smooth;
    }
    
    body {
      font-family: var(--font-body);
      font-weight: 400;
      font-size: 14px;
      line-height: 1.5;
      color: var(--body-text);
      background-color: var(--white);
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
    
    h1, h2, h3, h4 {
      font-family: var(--font-heading);
      font-weight: 700;
      text-transform: uppercase;
      line-height: 1.2;
      color: var(--heading-dark);
    }
    
    h1 {
      font-size: 40px;
      color: var(--heading-darker);
    }
    
    h2 {
      font-size: 28px;
    }
    
    h3 {
      font-size: 22px;
    }
    
    a {
      color: inherit;
      text-decoration: none;
    }
    
    a:focus-visible,
    button:focus-visible {
      outline: 2px solid var(--brand-purple);
      outline-offset: 2px;
    }
    
    .container {
      max-width: var(--content-max-width);
      margin-inline: auto;
      padding-inline: 20px;
    }
    
    section {
      padding-block: var(--section-padding);
    }
    
    /* ===== Section 0: Top Bar ===== */
    .top-bar {
      background: var(--white);
      border-bottom: 1px solid var(--divider);
      padding-block: 12px;
      position: sticky;
      top: 0;
      z-index: 100;
    }
    
    .top-bar .container {
      display: flex;
      align-items: center;
    }
    
    .logo {
      display: flex;
      align-items: center;
      gap: 8px;
      font-family: var(--font-heading);
      font-weight: 700;
      font-size: 18px;
      color: var(--heading-darker);
      text-transform: uppercase;
    }
    
    .logo svg {
      width: 28px;
      height: 28px;
    }
    
    /* ===== Section 1: Breadcrumb ===== */
    .breadcrumb {
      padding-block: 12px;
      font-size: 13px;
      color: var(--body-text);
    }
    
    .breadcrumb nav {
      display: flex;
      align-items: center;
    }
    
    .breadcrumb ol {
      display: flex;
      align-items: center;
      list-style: none;
      gap: 8px;
    }
    
    .breadcrumb a {
      color: var(--body-text);
      transition: color 0.2s;
    }
    
    .breadcrumb a:hover {
      color: var(--brand-purple);
    }
    
    .breadcrumb .separator {
      color: var(--card-border);
    }
    
    .breadcrumb .current {
      color: var(--heading-dark);
    }
    
    /* ===== Section 2: Hero ===== */
    .hero {
      padding-top: 60px;
      padding-bottom: 60px;
      background: linear-gradient(135deg, rgba(118, 113, 255, 0.03) 0%, rgba(203, 12, 159, 0.03) 100%);
    }
    
    .hero .container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 40px;
      align-items: center;
    }
    
    .hero-content {
      order: 1;
    }
    
    .hero-illustration {
      order: 2;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    
    .hero-illustration svg {
      width: 100%;
      max-width: 500px;
      height: auto;
    }
    
    .hero h1 {
      margin-bottom: 16px;
    }
    
    .hero h1 .line1 {
      display: block;
      color: var(--heading-darker);
    }
    
    .hero h1 .line2 {
      display: block;
      background: var(--ai-gradient);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    
    .hero-subheadline {
      font-size: 16px;
      line-height: 1.6;
      color: var(--body-text);
      margin-bottom: 28px;
      max-width: 480px;
    }
    
    .hero-cta-group {
      display: flex;
      gap: 10px;
      flex-wrap: wrap;
    }
    
    /* ===== Buttons ===== */
    .btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      font-family: var(--font-heading);
      font-weight: 700;
      text-transform: uppercase;
      border-radius: var(--radius-md);
      cursor: pointer;
      transition: all 0.2s;
      border: none;
      text-decoration: none;
      font-size: 14px;
      height: 36px;
      padding: 0 15px;
    }
    
    .btn-large {
      height: 44px;
      font-size: 14px;
      padding: 0 24px;
    }
    
    .btn-primary {
      background: var(--ai-gradient);
      color: var(--white);
    }
    
    .btn-primary:hover {
      opacity: 0.9;
      transform: translateY(-1px);
      box-shadow: 0 4px 12px rgba(118, 113, 255, 0.3);
    }
    
    .btn-ghost {
      background: transparent;
      color: var(--brand-purple);
      border: 1px solid var(--brand-purple);
    }
    
    .btn-ghost:hover {
      background: rgba(129, 89, 187, 0.05);
    }
  </style>
""")
    
    return "".join(parts)

print("Starting page generation...")
