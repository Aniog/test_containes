#!/usr/bin/env python3
# Complete Strikingly Generators Hub Page Generator
# This generates a fully static HTML page with all 60+ generator cards
# visible in view-source for SEO

def build_page():
    html = []
    
    # ===== HTML HEAD =====
    html.append("""<!DOCTYPE html>
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
""")
    
    # ===== CSS STYLES =====
    css = """
  <style>
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
    
    /* ===== Section 3: Featured Generators ===== */
    .featured-generators {
      background: var(--white);
    }
    
    .section-header {
      text-align: center;
      margin-bottom: 32px;
    }
    
    .section-header h2 {
      margin-bottom: 8px;
    }
    
    .section-header p {
      color: var(--body-text);
      font-size: 15px;
    }
    
    .generators-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 20px;
    }
    
    /* ===== Cards ===== */
    .card {
      background: var(--white);
      border: 1px solid var(--card-border);
      border-radius: var(--radius-lg);
      padding: 20px;
      transition: all 0.2s;
      display: block;
      text-decoration: none;
      color: inherit;
    }
    
    .card:hover {
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
      border-color: var(--brand-purple);
      transform: translateY(-2px);
    }
    
    .card-title {
      font-family: var(--font-heading);
      font-weight: 700;
      font-size: 16px;
      color: var(--heading-dark);
      margin-bottom: 8px;
      text-transform: none;
    }
    
    .card-desc {
      font-size: 13px;
      color: var(--body-text);
      line-height: 1.4;
      margin-bottom: 12px;
    }
    
    .tag {
      display: inline-block;
      font-family: var(--font-heading);
      font-weight: 700;
      font-size: 11px;
      text-transform: uppercase;
      padding: 2px 6px;
      border-radius: var(--radius-sm);
      border: 1px solid var(--brand-purple);
      color: var(--brand-purple);
      background: transparent;
    }
    
    /* ===== Section 4: Browse by Category ===== */
    .browse-categories {
      background: var(--light-bg);
    }
    
    .category-card {
      background: var(--white);
      border: 1px solid var(--card-border);
      border-radius: var(--radius-lg);
      padding: 24px 20px;
      display: flex;
      flex-direction: column;
      text-decoration: none;
      color: inherit;
      transition: all 0.2s;
    }
    
    .category-card:hover {
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
      border-color: var(--brand-purple);
      transform: translateY(-2px);
    }
    
    .category-icon {
      width: 48px;
      height: 48px;
      margin-bottom: 16px;
      color: var(--brand-purple);
    }
    
    .category-card h3 {
      font-size: 16px;
      margin-bottom: 8px;
      text-transform: uppercase;
    }
    
    .category-card p {
      font-size: 13px;
      color: var(--body-text);
      line-height: 1.4;
      flex-grow: 1;
    }
    
    .category-arrow {
      margin-top: 12px;
      color: var(--brand-purple);
    }
    
    /* ===== Section 5: All Generators ===== */
    .all-generators {
      background: var(--white);
    }
    
    .search-container {
      margin-bottom: 32px;
    }
    
    .search-input-wrapper {
      position: relative;
      max-width: 480px;
    }
    
    .search-input-wrapper svg {
      position: absolute;
      left: 12px;
      top: 50%;
      transform: translateY(-50%);
      width: 18px;
      height: 18px;
      color: var(--body-text);
    }
    
    .search-input {
      width: 100%;
      height: 44px;
      padding: 0 12px 0 40px;
      border: 1px solid var(--card-border);
      border-radius: var(--radius-md);
      font-family: var(--font-body);
      font-size: 14px;
      color: var(--heading-dark);
      background: var(--white);
      transition: border-color 0.2s;
    }
    
    .search-input:focus {
      outline: none;
      border-color: var(--brand-purple);
    }
    
    .search-input::placeholder {
      color: var(--card-border);
    }
    
    .search-results-count {
      margin-top: 8px;
      font-size: 13px;
      color: var(--body-text);
    }
    
    .search-no-results {
      display: none;
      text-align: center;
      padding: 40px 20px;
      color: var(--body-text);
    }
    
    .search-no-results.active {
      display: block;
    }
    
    .search-no-results a {
      color: var(--brand-purple);
      text-decoration: underline;
    }
    
    .category-section {
      margin-bottom: 40px;
    }
    
    .category-section h3 {
      font-size: 20px;
      margin-bottom: 8px;
      text-transform: uppercase;
    }
    
    .category-section-desc {
      font-size: 14px;
      color: var(--body-text);
      margin-bottom: 20px;
    }
    
    .directory-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 16px;
    }
    
    .directory-card {
      background: var(--white);
      border: 1px solid var(--card-border);
      border-radius: var(--radius-lg);
      padding: 16px;
      display: block;
      text-decoration: none;
      color: inherit;
      transition: all 0.2s;
    }
    
    .directory-card:hover {
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
      border-color: var(--brand-purple);
      transform: translateY(-2px);
    }
    
    .directory-card-icon {
      width: 36px;
      height: 36px;
      margin-bottom: 12px;
      color: var(--brand-purple);
    }
    
    .directory-card .card-title {
      font-size: 14px;
      margin-bottom: 6px;
    }
    
    .directory-card .card-desc {
      font-size: 12px;
      margin-bottom: 0;
    }
    
    .show-more-container {
      margin-top: 16px;
      text-align: center;
    }
    
    .show-more-btn {
      font-family: var(--font-body);
      font-size: 14px;
      color: var(--brand-purple);
      background: none;
      border: none;
      cursor: pointer;
      padding: 8px 16px;
      text-decoration: underline;
    }
    
    .show-more-btn:hover {
      color: var(--heading-dark);
    }
    
    .directory-grid.collapsed .card-hidden {
      display: none;
    }
    
    /* ===== Section 6: How It Works ===== */
    .how-it-works {
      background: var(--light-bg);
    }
    
    .steps-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 32px;
    }
    
    .step {
      text-align: center;
    }
    
    .step-number {
      width: 48px;
      height: 48px;
      border-radius: 50%;
      background: var(--brand-purple);
      color: var(--white);
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: var(--font-heading);
      font-weight: 700;
      font-size: 20px;
      margin: 0 auto 16px;
    }
    
    .step h3 {
      font-size: 16px;
      margin-bottom: 8px;
      text-transform: uppercase;
    }
    
    .step p {
      font-size: 14px;
      color: var(--body-text);
      line-height: 1.5;
    }
    
    /* ===== Section 7: Why Strikingly ===== */
    .why-strikingly {
      background: var(--white);
    }
    
    .features-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 32px;
    }
    
    .feature {
      text-align: center;
    }
    
    .feature-icon {
      width: 48px;
      height: 48px;
      margin: 0 auto 16px;
      color: var(--brand-purple);
    }
    
    .feature h3 {
      font-size: 16px;
      margin-bottom: 8px;
      text-transform: uppercase;
    }
    
    .feature p {
      font-size: 14px;
      color: var(--body-text);
      line-height: 1.5;
    }
    
    /* ===== Section 8: FAQ ===== */
    .faq {
      background: var(--light-bg);
    }
    
    .faq-list {
      max-width: 800px;
      margin: 0 auto;
    }
    
    .faq-item {
      border-bottom: 1px solid var(--divider);
    }
    
    .faq-question {
      width: 100%;
      background: none;
      border: none;
      padding: 20px 0;
      text-align: left;
      font-family: var(--font-heading);
      font-weight: 700;
      font-size: 16px;
      color: var(--heading-dark);
      cursor: pointer;
      display: flex;
      justify-content: space-between;
      align-items: center;
      text-transform: uppercase;
    }
    
    .faq-question:hover {
      color: var(--brand-purple);
    }
    
    .faq-icon {
      width: 20px;
      height: 20px;
      transition: transform 0.2s;
      flex-shrink: 0;
    }
    
    .faq-item.open .faq-icon {
      transform: rotate(180deg);
    }
    
    .faq-answer {
      max-height: 0;
      overflow: hidden;
      transition: max-height 0.3s ease;
    }
    
    .faq-item.open .faq-answer {
      max-height: 400px;
    }
    
    .faq-answer-content {
      padding-bottom: 20px;
      font-size: 14px;
      color: var(--body-text);
      line-height: 1.6;
    }
    
    /* ===== Section 9: Closing CTA ===== */
    .closing-cta {
      background: var(--white);
      text-align: center;
      padding-top: 60px;
      padding-bottom: 60px;
    }
    
    .closing-cta h2 {
      font-size: 32px;
      margin-bottom: 12px;
    }
    
    .closing-cta p {
      font-size: 16px;
      color: var(--body-text);
      margin-bottom: 28px;
    }
    
    /* ===== Section 10: Footer ===== */
    .footer {
      background: var(--heading-darker);
      color: rgba(255, 255, 255, 0.7);
      padding-top: 40px;
      padding-bottom: 20px;
    }
    
    .footer-grid {
      display: grid;
      grid-template-columns: 2fr repeat(3, 1fr);
      gap: 32px;
      margin-bottom: 32px;
    }
    
    .footer-logo {
      font-family: var(--font-heading);
      font-weight: 700;
      font-size: 20px;
      color: var(--white);
      text-transform: uppercase;
      margin-bottom: 12px;
      display: flex;
      align-items: center;
      gap: 8px;
    }
    
    .footer-logo svg {
      width: 24px;
      height: 24px;
    }
    
    .footer-tagline {
      font-size: 13px;
      line-height: 1.5;
    }
    
    .footer-column h4 {
      font-family: var(--font-heading);
      font-weight: 700;
      font-size: 14px;
      color: var(--white);
      text-transform: uppercase;
      margin-bottom: 16px;
    }
    
    .footer-column ul {
      list-style: none;
    }
    
    .footer-column li {
      margin-bottom: 8px;
    }
    
    .footer-column a {
      font-size: 13px;
      color: rgba(255, 255, 255, 0.7);
      transition: color 0.2s;
    }
    
    .footer-column a:hover {
      color: var(--white);
    }
    
    .footer-bottom {
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      padding-top: 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 12px;
    }
    
    .footer-bottom a {
      color: rgba(255, 255, 255, 0.7);
      margin-inline-start: 16px;
    }
    
    .footer-bottom a:hover {
      color: var(--white);
    }
    
    /* ===== Responsive ===== */
    @media (max-width: 1024px) {
      .generators-grid,
      .directory-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }
    
    @media (max-width: 768px) {
      :root {
        --section-padding: 32px;
      }
      
      h1 {
        font-size: 28px;
      }
      
      h2 {
        font-size: 24px;
      }
      
      .hero .container {
        grid-template-columns: 1fr;
      }
      
      .hero-content {
        order: 1;
      }
      
      .hero-illustration {
        order: 2;
      }
      
      .hero-cta-group {
        flex-direction: column;
      }
      
      .hero-cta-group .btn {
        width: 100%;
      }
      
      .generators-grid,
      .steps-grid,
      .features-grid {
        grid-template-columns: 1fr;
      }
      
      .directory-grid {
        grid-template-columns: 1fr;
      }
      
      .footer-grid {
        grid-template-columns: 1fr 1fr;
      }
    }
    
    @media (max-width: 480px) {
      .footer-grid {
        grid-template-columns: 1fr;
      }
      
      .footer-bottom {
        flex-direction: column;
        gap: 12px;
        text-align: center;
      }
    }
  </style>
"""
    
    html.append(css)
    html.append("</head>\n<body>\n")
    
    print("Built head with CSS")
    return html

if __name__ == '__main__':
    parts = build_page()
    print(f"Total HTML parts: {len(parts)}")
    print("Ready to add body sections...")
