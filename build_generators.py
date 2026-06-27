#!/usr/bin/env python3
"""Assembles /workspace/my-app/index.html for the Strikingly /generators hub.
Reuses the platform preview-bridge scripts from index.html.bak and injects the
full statically-rendered page (content lives outside #root so React mounting
never wipes it). All directory cards are present in the source HTML.
"""
import re, json, html

BAK = 'index.html.bak'
CSS_FILE = 'src/generators-page.css'
JS_FILE = 'src/generators-page.js'

with open(BAK) as f:
    bak = f.read()
scripts = re.findall(r'(<script>[\s\S]*?</script>|<script type="module" src="/src/main\.jsx"></script>)', bak)
route_bridge, error_bridge, main_script = scripts[0], scripts[1], scripts[2]

with open(CSS_FILE) as f:
    css = f.read()
with open(JS_FILE) as f:
    js = f.read()

def slug(name):
    s = name.lower()
    s = re.sub(r'[^a-z0-9]+', '-', s).strip('-')
    return s

# ---------- Featured generators (3x3) ----------
featured = [
    ("AI Website Generator", "Describe your business, get a full site.", "Website"),
    ("Free Portfolio Generator", "For creatives, in minutes, no fee.", "Portfolio"),
    ("AI Landing Page Maker", "One-page sites built to convert.", "Landing Page"),
    ("Online Store Builder", "Start selling without writing code.", "Store"),
    ("Link-in-Bio Generator", "One link for all your channels.", "Link-in-Bio"),
    ("One-Page Website Builder", "Simple sites, single scroll.", "Website"),
    ("Wedding Website Generator", "Share your day with guests.", "Website"),
    ("Restaurant Website Builder", "Menu, hours, reservations, done.", "Website"),
    ("Blog Generator for Beginners", "Publish-ready in minutes.", "Blog"),
]

# ---------- Browse by category (6 cards -> anchors) ----------
categories = [
    ("Websites", "websites", "AI-built business and personal sites for any goal."),
    ("Landing Pages", "landing-pages", "Single-page sites built to convert visitors fast."),
    ("Portfolios", "portfolios", "Showcase your work with a clean, focused site."),
    ("Blogs", "blogs", "Publish-ready blogs with built-in SEO basics."),
    ("Online Stores", "stores", "Sell products online with payments built in."),
    ("Link-in-Bio", "link-in-bio", "One link, all your places. Made for creators."),
]

# ---------- All generators directory (6 subsections, 8-12 each) ----------
directory = [
    ("Websites", "websites", "Full multi-section sites for businesses and personal brands.",
     ["AI Website Generator", "Free Website Builder for Photographers", "One-Page Wedding Website Builder",
      "Small Business Website Generator", "AI Website Builder for Restaurants", "Personal Website Generator",
      "Free Website Builder for Yoga Instructors", "Nonprofit Website Generator", "Real Estate Website Builder",
      "Beautiful Website Builder for Coaches", "No-Code Website Generator", "AI Website Builder for Startups"]),
    ("Landing Pages", "landing-pages", "Single-page sites built to convert visitors fast.",
     ["AI Landing Page Maker", "Free Landing Page Generator", "One-Page Landing Page Builder",
      "App Landing Page Generator", "Event Landing Page Builder", "Product Launch Landing Page Generator",
      "Webinar Landing Page Builder", "Lead Capture Landing Page Generator", "SaaS Landing Page Builder",
      "Free Landing Page Maker for Coaches"]),
    ("Portfolios", "portfolios", "Showcase your work with a clean, focused site.",
     ["Free Portfolio Generator", "Portfolio Generator for Designers", "Photography Portfolio Builder",
      "Artist Portfolio Website Generator", "Model Portfolio Builder", "Freelancer Portfolio Generator",
      "Architecture Portfolio Builder", "Writer Portfolio Generator", "Video Portfolio Website Builder",
      "Student Portfolio Generator"]),
    ("Blogs", "blogs", "Publish-ready blogs with built-in SEO basics.",
     ["Blog Generator for Beginners", "AI Blog Generator", "Free Blog Builder",
      "Food Blog Website Generator", "Travel Blog Builder", "Personal Blog Generator",
      "Fashion Blog Website Builder", "Tech Blog Generator", "Lifestyle Blog Builder",
      "No-Code Blog Generator for Writers"]),
    ("Online Stores", "stores", "Sell products online with payments built in.",
     ["Online Store Builder", "Online Store Builder for Restaurants", "Free Ecommerce Website Generator",
      "Boutique Store Builder", "Digital Product Store Generator", "Handmade Store Website Builder",
      "Coffee Shop Online Store Builder", "Print-on-Demand Store Generator", "Subscription Store Builder",
      "No-Code Online Store Generator"]),
    ("Link-in-Bio", "link-in-bio", "One link, all your places. Made for creators.",
     ["Link-in-Bio Generator", "Free Link-in-Bio Builder", "Link-in-Bio for Influencers",
      "Musician Link-in-Bio Generator", "Creator Link-in-Bio Builder", "Podcast Link-in-Bio Generator",
      "Link-in-Bio for Small Businesses", "Artist Link-in-Bio Builder", "Linktree Alternative Generator",
      "Free Link-in-Bio Maker for Streamers"]),
]

# one-line descriptions for directory cards (deterministic, plausible)
def desc_for(name, cat):
    n = name.lower()
    if 'photograph' in n: return "A clean gallery site to show off your shots."
    if 'restaurant' in n: return "Menu, hours, and reservations in one place."
    if 'wedding' in n: return "Share your day, schedule, and RSVPs with guests."
    if 'yoga' in n: return "Class schedules and bookings for your studio."
    if 'portfolio' in n and 'design' in n: return "A focused showcase for your design work."
    if 'portfolio' in n and 'photograph' in n: return "A clean gallery to show off your shots."
    if 'portfolio' in n and 'artist' in n: return "A gallery layout for your artwork."
    if 'portfolio' in n and 'model' in n: return "A portfolio that books more shoots."
    if 'portfolio' in n and 'freelancer' in n: return "Win clients with a focused portfolio."
    if 'portfolio' in n and 'architecture' in n: return "Present plans and projects cleanly."
    if 'portfolio' in n and 'writer' in n: return "A portfolio for your articles and clips."
    if 'portfolio' in n and 'video' in n: return "Embed reels and showreels in style."
    if 'portfolio' in n and 'student' in n: return "Show your work to schools and employers."
    if 'portfolio' in n: return "Present your projects in a polished layout."
    if 'landing' in n and 'app' in n: return "Drive app installs from one page."
    if 'landing' in n and 'event' in n: return "Capture signups for your next event."
    if 'landing' in n and 'product' in n: return "Build buzz for a product launch."
    if 'landing' in n and 'webinar' in n: return "Get registrations for your webinar."
    if 'landing' in n and 'lead' in n: return "Turn visitors into qualified leads."
    if 'landing' in n and 'saas' in n: return "A conversion-ready page for your SaaS."
    if 'landing' in n and 'free' in n and 'coach' in n: return "A free page that fills your calendar."
    if 'landing' in n and 'one-page' in n: return "A single scroll tuned to convert."
    if 'landing' in n and 'free' in n: return "A free page that converts visitors."
    if 'landing' in n: return "A single page tuned to convert visitors."
    if 'blog' in n and 'beginner' in n: return "Start publishing in minutes, no code needed."
    if 'blog' in n and 'ai' in n: return "AI-written posts, ready to publish."
    if 'blog' in n and 'free' in n: return "A free blog you can launch today."
    if 'blog' in n and 'personal' in n: return "A blog that's unmistakably yours."
    if 'blog' in n and 'no-code' in n: return "Write and publish without touching code."
    if 'blog' in n and 'food' in n: return "Share recipes with a hungry audience."
    if 'blog' in n and 'travel' in n: return "Document trips with built-in SEO."
    if 'blog' in n and 'fashion' in n: return "Publish looks and style guides fast."
    if 'blog' in n and 'tech' in n: return "Write reviews and tutorials that rank."
    if 'blog' in n and 'lifestyle' in n: return "A readable home for your stories."
    if 'blog' in n: return "Publish-ready in minutes."
    if 'store' in n and 'restaurant' in n: return "Take online orders for your menu."
    if 'store' in n and 'boutique' in n: return "A stylish shop for curated goods."
    if 'store' in n and 'digital' in n: return "Sell downloads and digital files."
    if 'store' in n and 'handmade' in n: return "A shop for handmade and craft goods."
    if 'store' in n and 'coffee' in n: return "Sell beans and merch online."
    if 'store' in n and 'print' in n: return "Launch a print-on-demand shop."
    if 'store' in n and 'subscription' in n: return "Recurring revenue, built in."
    if 'store' in n and 'no-code' in n: return "Open a store without writing code."
    if 'store' in n: return "Start selling with payments built in."
    if 'link' in n and 'music' in n: return "One link to your music and shows."
    if 'link' in n and 'podcast' in n: return "Send fans to every episode."
    if 'link' in n and 'stream' in n: return "All your streams, one link."
    if 'link' in n and 'artist' in n: return "Collect your art and shop in one place."
    if 'link' in n and 'influencer' in n: return "Every channel, one tap away."
    if 'link' in n and 'small business' in n: return "Point customers to your offers."
    if 'link' in n and 'creator' in n: return "All your content, one tap away."
    if 'link' in n and 'free' in n and 'stream' in n: return "All your streams, one link."
    if 'link' in n and 'free' in n: return "A free link page for all your channels."
    if 'link' in n and 'linktree' in n: return "A free alternative to Linktree."
    if 'link' in n: return "One link for all your channels."
    if 'nonprofit' in n: return "Tell your mission and accept donations."
    if 'real estate' in n: return "Showcase listings and capture leads."
    if 'coach' in n and 'website' in n: return "Book clients with a polished site."
    if 'coach' in n: return "A landing page that fills your calendar."
    if 'startup' in n: return "A credible site to launch your startup."
    if 'personal' in n: return "A simple site that's all about you."
    if 'small business' in n: return "Get found and look professional fast."
    if 'student' in n: return "Show your work to schools and employers."
    if 'freelancer' in n: return "Win clients with a focused portfolio."
    if 'model' in n: return "A portfolio that books more shoots."
    if 'architecture' in n: return "Present plans and projects cleanly."
    if 'writer' in n and 'blog' in n: return "A no-code blog for your words."
    if 'writer' in n: return "A portfolio for your articles and clips."
    if 'video' in n: return "Embed reels and showreels in style."
    if 'artist' in n and 'portfolio' in n: return "A gallery for your artwork."
    if 'one-page' in n and 'wedding' in n: return "A single scroll for your big day."
    if 'one-page' in n: return "Everything on one simple scroll."
    if 'no-code' in n and 'website' in n: return "Build a site without touching code."
    if 'no-code' in n: return "Launch without writing a line of code."
    if 'free' in n and 'website' in n: return "A full site, free to start."
    if 'free' in n and 'portfolio' in n: return "A free portfolio in minutes."
    if 'free' in n and 'landing' in n: return "A free page that converts."
    if 'free' in n and 'blog' in n: return "Start a blog free, no code."
    if 'free' in n and 'ecommerce' in n: return "Open a store free, no code."
    if 'free' in n and 'link' in n: return "A free link page for creators."
    if 'free' in n: return "Free to start, no credit card needed."
    if 'ai website generator' in n: return "Describe your business, get a full site."
    if 'ai blog' in n: return "Generate a blog structure and first posts."
    if 'ai ' in n: return "AI-built and ready to customize."
    return "Built with AI, ready to publish in seconds."

# ---------- SVG illustrations ----------
def cat_icon_svg(label):
    # simple line-art icon per category, aria-hidden
    paths = {
        "websites": '<rect x="3" y="4" width="18" height="14" rx="1.5"/><path d="M3 8h18"/><circle cx="6" cy="6" r="0.6" fill="currentColor"/><circle cx="8" cy="6" r="0.6" fill="currentColor"/>',
        "landing-pages": '<rect x="4" y="3" width="16" height="18" rx="1.5"/><path d="M7 7h10M7 11h10M7 15h6"/>',
        "portfolios": '<rect x="3" y="5" width="18" height="14" rx="1.5"/><circle cx="9" cy="10" r="2"/><path d="M6 17l4-4 3 3 3-4 4 5"/>',
        "blogs": '<path d="M4 5h13a3 3 0 0 1 3 3v11l-3-2-3 2-3-2-3 2-3-2z"/><path d="M8 9h8M8 12h8M8 15h5"/>',
        "stores": '<path d="M5 8h14l-1 11H6z"/><path d="M9 8a3 3 0 0 1 6 0"/><path d="M5 8l-1-3H3"/>',
        "link-in-bio": '<circle cx="6" cy="12" r="2.5"/><circle cx="18" cy="6" r="2.5"/><circle cx="18" cy="18" r="2.5"/><path d="M8.2 10.8l7.6-3.6M8.2 13.2l7.6 3.6"/>',
    }
    key = slug(label)
    inner = paths.get(key, paths["websites"])
    return (f'<svg class="gen-cat__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" '
            f'stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" width="44" height="44" aria-hidden="true">{inner}</svg>')

def thumb_svg(label):
    # smaller shared thumbnail per subsection
    paths = {
        "websites": '<rect x="3" y="5" width="18" height="14" rx="1.5"/><path d="M3 9h18"/>',
        "landing-pages": '<rect x="4" y="4" width="16" height="16" rx="1.5"/><path d="M7 8h10M7 12h10M7 16h6"/>',
        "portfolios": '<rect x="3" y="6" width="18" height="12" rx="1.5"/><circle cx="9" cy="11" r="2"/><path d="M6 16l4-4 3 3 3-4 4 5"/>',
        "blogs": '<path d="M4 6h13a3 3 0 0 1 3 3v9l-3-2-3 2-3-2-3 2-3-2z"/><path d="M8 10h8M8 13h6"/>',
        "stores": '<path d="M5 9h14l-1 10H6z"/><path d="M9 9a3 3 0 0 1 6 0"/>',
        "link-in-bio": '<circle cx="6" cy="12" r="2"/><circle cx="18" cy="6" r="2"/><circle cx="18" cy="18" r="2"/><path d="M8 11l8-4M8 13l8 4"/>',
    }
    key = slug(label)
    inner = paths.get(key, paths["websites"])
    return (f'<svg class="gen-dir__thumb" viewBox="0 0 24 24" fill="none" stroke="currentColor" '
            f'stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" width="40" height="40" aria-hidden="true">{inner}</svg>')

hero_svg = '''<svg viewBox="0 0 460 320" width="460" height="320" role="img" aria-label="Illustration of an AI-generated website mockup" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="aiGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#7671FF"/>
      <stop offset="100%" stop-color="#CB0C9F"/>
    </linearGradient>
  </defs>
  <rect x="20" y="30" width="420" height="260" rx="14" fill="#FFFFFF" stroke="#C6C9CD" stroke-width="1.5"/>
  <rect x="20" y="30" width="420" height="40" rx="14" fill="#F4F6F8"/>
  <circle cx="44" cy="50" r="4" fill="#C6C9CD"/>
  <circle cx="60" cy="50" r="4" fill="#C6C9CD"/>
  <circle cx="76" cy="50" r="4" fill="#C6C9CD"/>
  <rect x="40" y="92" width="180" height="20" rx="4" fill="url(#aiGrad)" opacity="0.85"/>
  <rect x="40" y="122" width="240" height="10" rx="3" fill="#E2E4E7"/>
  <rect x="40" y="140" width="210" height="10" rx="3" fill="#E2E4E7"/>
  <rect x="40" y="170" width="90" height="34" rx="6" fill="url(#aiGrad)"/>
  <rect x="300" y="92" width="110" height="80" rx="8" fill="#F4F6F8" stroke="#E2E4E7"/>
  <rect x="40" y="220" width="110" height="50" rx="8" fill="#F4F6F8" stroke="#E2E4E7"/>
  <rect x="160" y="220" width="110" height="50" rx="8" fill="#F4F6F8" stroke="#E2E4E7"/>
  <rect x="280" y="220" width="110" height="50" rx="8" fill="#F4F6F8" stroke="#E2E4E7"/>
  <g stroke="url(#aiGrad)" stroke-width="2" fill="none" stroke-linecap="round" opacity="0.9">
    <path d="M392 70 l16 16 -16 16"/>
    <path d="M408 70 l16 16 -16 16"/>
  </g>
</svg>'''

arrow_svg = '<svg class="gen-cat__arrow" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>'
chevron_svg = '<svg class="gen-faq__icon" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg>'
search_svg = '<svg class="gen-search__icon" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>'

# ---------- Build sections ----------
parts = []

# --- Top bar ---
parts.append('''<header class="gen-topbar">
  <div class="gen-container">
    <div class="gen-topbar__inner">
      <a class="gen-logo" href="/" aria-label="Strikingly home">
        <span class="gen-logo__mark">strikingly</span> AI
      </a>
    </div>
  </div>
</header>''')

# --- Breadcrumb ---
parts.append('''<nav class="gen-breadcrumb" aria-label="Breadcrumb">
  <div class="gen-container">
    <ol>
      <li><a href="/">Strikingly</a><span class="sep" aria-hidden="true">&gt;</span></li>
      <li><span aria-current="page">AI Generators</span></li>
    </ol>
  </div>
</nav>''')

# --- Hero ---
parts.append(f'''<section class="gen-section gen-section--hero gen-hero" aria-labelledby="hero-heading">
  <div class="gen-container">
    <div class="gen-hero__grid">
      <div class="gen-hero__copy">
        <h1 id="hero-heading">
          <span class="line1">BUILD ANY KIND OF SITE</span><br/>
          <span class="grad">WITH AI, IN AN INSTANT</span>
        </h1>
        <p class="gen-hero__sub">Browse the right generator for what you're building, or jump straight into our AI site builder.</p>
        <div class="gen-hero__ctas">
          <a class="gen-btn gen-btn--primary gen-btn--big" href="/s/ai_site_builder">START BUILDING - IT'S FREE</a>
          <a class="gen-btn gen-btn--ghost gen-btn--big" href="#all-generators">BROWSE GENERATORS</a>
        </div>
      </div>
      <div class="gen-hero__art">
        {hero_svg}
      </div>
    </div>
  </div>
</section>''')

# --- Featured generators ---
feat_tiles = []
for name, fdesc, tag in featured:
    s = slug(name)
    feat_tiles.append(f'''<article class="gen-card gen-feat__tile" data-gen-card data-gen-name="{html.escape(name)}" data-gen-desc="{html.escape(fdesc)}" data-gen-cat="{html.escape(tag)}">
  <span class="gen-tag">{html.escape(tag)}</span>
  <h3 class="gen-card__name">{html.escape(name)}</h3>
  <p class="gen-card__desc">{html.escape(fdesc)}</p>
  <a class="gen-card__link" href="/generators/{s}" aria-label="{html.escape(name)} — open generator" style="position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);">Open {html.escape(name)}</a>
</article>''')
# Make whole tile a link: wrap article content in <a>. Rebuild as link-wrapped card.
feat_tiles = []
for name, fdesc, tag in featured:
    s = slug(name)
    feat_tiles.append(f'''<a class="gen-card gen-feat__tile" href="/generators/{s}" aria-label="{html.escape(name)} — {html.escape(fdesc)}">
  <span class="gen-tag">{html.escape(tag)}</span>
  <h3 class="gen-card__name">{html.escape(name)}</h3>
  <p class="gen-card__desc">{html.escape(fdesc)}</p>
</a>''')
parts.append(f'''<section class="gen-section" aria-labelledby="featured-heading">
  <div class="gen-container">
    <div class="gen-section-head">
      <h2 id="featured-heading">FEATURED GENERATORS</h2>
      <p>A few common starting points.</p>
    </div>
    <div class="gen-grid gen-grid--feat">
      {''.join(feat_tiles)}
    </div>
  </div>
</section>''')

# --- Browse by category ---
cat_cards = []
for label, cslug, cdesc in categories:
    cat_cards.append(f'''<a class="gen-card gen-cat__card" href="/generators#{cslug}" aria-label="Browse {html.escape(label)} generators">
  {cat_icon_svg(label)}
  <div class="gen-cat__row">
    <h3 class="gen-cat__name">{html.escape(label)}</h3>
    {arrow_svg}
  </div>
  <p class="gen-card__desc">{html.escape(cdesc)}</p>
</a>''')
parts.append(f'''<section class="gen-section" aria-labelledby="browse-heading" style="background:var(--light-bg);">
  <div class="gen-container">
    <div class="gen-section-head">
      <h2 id="browse-heading">BROWSE BY CATEGORY</h2>
      <p>Six ways into the directory. Pick one to jump straight there.</p>
    </div>
    <div class="gen-grid gen-grid--3">
      {''.join(cat_cards)}
    </div>
  </div>
</section>''')

# --- All generators directory ---
subsections_html = []
for label, cslug, sdesc, names in directory:
    cards = []
    for name in names:
        s = slug(name)
        d = desc_for(name, label)
        cards.append(f'''<a class="gen-card gen-dir__card" href="/generators/{s}" data-gen-card data-gen-name="{html.escape(name)}" data-gen-desc="{html.escape(d)}" data-gen-cat="{html.escape(label)}" aria-label="{html.escape(name)} — {html.escape(d)}">
  {thumb_svg(label)}
  <h4 class="gen-card__name" style="font-size:14px;">{html.escape(name)}</h4>
  <p class="gen-card__desc">{html.escape(d)}</p>
</a>''')
    limit = 6
    subsections_html.append(f'''<div class="gen-subsection" id="{cslug}" data-gen-group data-gen-limit="{limit}">
  <div class="gen-subsection__head">
    <h3>{html.escape(label)}</h3>
    <p>{html.escape(sdesc)}</p>
  </div>
  <div class="gen-grid gen-grid--3">
    {''.join(cards)}
  </div>
</div>''')

parts.append(f'''<section class="gen-section" aria-labelledby="all-heading" id="all-generators">
  <div class="gen-container">
    <div class="gen-section-head">
      <h2 id="all-heading">ALL GENERATORS</h2>
      <p>Sixty-plus generators, organized by what you're building.</p>
    </div>
    <div class="gen-dir__bar">
      <div class="gen-search">
        {search_svg}
        <input id="gen-search-input" type="search" placeholder="Search generators..." aria-label="Search generators" autocomplete="off"/>
      </div>
      <span id="gen-search-count" class="gen-dir__count" aria-live="polite"></span>
    </div>
    {''.join(subsections_html)}
    <div id="gen-empty" class="gen-empty" role="status">
      <p>No generators match your search.</p>
      <div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap;">
        <button type="button" id="gen-clear-search" class="gen-btn gen-btn--ghost">CLEAR SEARCH</button>
        <a class="gen-btn gen-btn--primary" href="/s/ai_site_builder">Can't find it? Start with our AI builder.</a>
      </div>
    </div>
  </div>
</section>''')

# --- How it works ---
steps = [
    ("PICK A GENERATOR", "Browse by category or search to find one that fits your goal."),
    ("DESCRIBE YOUR SITE", "Tell our AI builder about your business in a sentence or two."),
    ("GENERATE AND PUBLISH", "Get a fully built site in seconds. Customize anything, then go live."),
]
steps_html = ''.join(f'''<article class="gen-step">
  <div class="gen-step__num">{i+1}</div>
  <h3 class="gen-step__title">{title}</h3>
  <p class="gen-step__text">{text}</p>
</article>''' for i,(title,text) in enumerate(steps))
parts.append(f'''<section class="gen-section" aria-labelledby="how-heading" style="background:var(--light-bg);">
  <div class="gen-container">
    <div class="gen-section-head"><h2 id="how-heading">HOW IT WORKS</h2></div>
    <div class="gen-steps">{steps_html}</div>
  </div>
</section>''')

# --- Why Strikingly ---
why = [
    ("LIVE IN SECONDS", "Describe your site, we build it. No setup, no learning curve."),
    ("MOBILE BY DEFAULT", "Every generator produces responsive sites that work on any device."),
    ("FREE TO START", "Generate, customize, and publish without a credit card."),
]
why_icons = {
    "LIVE IN SECONDS": '<path d="M13 2L4 14h7l-1 8 9-12h-7z"/>',
    "MOBILE BY DEFAULT": '<rect x="7" y="2" width="10" height="20" rx="2"/><path d="M11 18h2"/>',
    "FREE TO START": '<circle cx="12" cy="12" r="9"/><path d="M9 12l2 2 4-4"/>',
}
why_html = ''.join(f'''<article class="gen-why__cell gen-card">
  <svg class="gen-why__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" width="40" height="40" aria-hidden="true">{why_icons[title]}</svg>
  <h3 class="gen-why__title">{title}</h3>
  <p class="gen-why__text">{text}</p>
</article>''' for title,text in why)
parts.append(f'''<section class="gen-section" aria-labelledby="why-heading">
  <div class="gen-container">
    <div class="gen-section-head"><h2 id="why-heading">WHY STRIKINGLY</h2></div>
    <div class="gen-grid gen-grid--3">{why_html}</div>
  </div>
</section>''')

# --- FAQ ---
faqs = [
    ("What is an AI site generator?",
     "An AI site generator takes a short description of what you want to build and produces a complete, ready-to-edit website in seconds. Instead of starting from a blank canvas or a fixed template, you describe your business, goal, or industry, and the AI assembles the layout, copy, images, and structure for you.\n\nYou can then customize anything before publishing. It's the fastest path from an idea to a live site."),
    ("How is a generator different from a template?",
     "A template is a fixed, pre-designed layout that you fill in by hand. Every site built from the same template looks the same until you change it.\n\nA generator creates a unique starting point based on your description. The AI picks sections, writes copy, and arranges content to match your goal, so you start with something tailored rather than something generic."),
    ("Are these generators free to use?",
     "Yes. You can generate, customize, and publish a site without entering a credit card. Free plans include hosting on a Strikingly domain and the core editing tools.\n\nPaid plans add custom domains, more storage, and advanced features when you're ready to grow."),
    ("What kinds of sites can I build?",
     "The directory covers the most common starting points: full websites, landing pages, portfolios, blogs, online stores, and link-in-bio pages. Within each category you'll find generators tailored to specific industries and goals, from restaurants and photographers to yoga studios and wedding couples.\n\nIf you're not sure which fits, start with the AI Website Generator and describe what you do."),
    ("Can I customize what the generator produces?",
     "Absolutely. Everything the AI creates is fully editable. You can rewrite copy, swap images, reorder sections, change colors and fonts, and add or remove pages.\n\nThe generator gives you a strong head start; the editor gives you total control over the final result."),
    ("Do generated sites work on mobile?",
     "Yes. Every generator produces responsive sites that adapt to phones, tablets, and desktops automatically. You can preview and fine-tune the mobile layout in the editor before you publish."),
]
faq_items = []
for i,(q,a) in enumerate(faqs):
    paras = ''.join(f'<p>{html.escape(p)}</p>' for p in a.split('\n\n') if p.strip())
    # Progressive enhancement: render all panels OPEN in static HTML so
    # answers are reachable with JavaScript disabled. JS collapses panels 2+
    # on init to create the accordion behavior.
    faq_items.append(f'''<div class="gen-faq__item">
  <button type="button" class="gen-faq__btn" aria-expanded="true">
    <span>{html.escape(q)}</span>{chevron_svg}
  </button>
  <div class="gen-faq__panel"><div class="gen-faq__panel-inner">{paras}</div></div>
</div>''')
parts.append(f'''<section class="gen-section" aria-labelledby="faq-heading">
  <div class="gen-container">
    <div class="gen-section-head"><h2 id="faq-heading">FREQUENTLY ASKED QUESTIONS</h2></div>
    <div class="gen-faq">{''.join(faq_items)}</div>
  </div>
</section>''')

# --- Closing CTA ---
parts.append('''<section class="gen-section gen-cta" aria-labelledby="cta-heading">
  <div class="gen-container">
    <h2 id="cta-heading">READY TO BUILD?</h2>
    <p>Pick a generator above, or jump straight into our AI builder.</p>
    <a class="gen-btn gen-btn--primary gen-btn--big" href="/s/ai_site_builder">START WITH AI BUILDER</a>
  </div>
</section>''')

# --- Footer ---
footer_cols = [
    ("Product", [("Templates","/templates"),("Pricing","/pricing"),("AI Site Builder","/s/ai_site_builder")]),
    ("Resources", [("Blog","/blog"),("Support","/support")]),
    ("Company", [("About","/about")]),
    ("Legal", [("Terms","/terms"),("Privacy","/privacy")]),
]
fcols = '<div class="gen-footer__col"><a class="gen-logo" href="/" aria-label="Strikingly home"><span class="gen-logo__mark">strikingly</span> AI</a><p style="margin-top:12px;font-size:13px;">AI-powered website generators.</p></div>'
for title, links in footer_cols:
    lis = ''.join(f'<li><a href="{href}">{html.escape(name)}</a></li>' for name,href in links)
    fcols += f'<div class="gen-footer__col"><h4>{html.escape(title)}</h4><ul>{lis}</ul></div>'
parts.append(f'''<footer class="gen-footer">
  <div class="gen-container">
    <div class="gen-footer__grid">{fcols}</div>
    <div class="gen-footer__bottom">&copy; {2026} Strikingly Inc. All rights reserved.</div>
  </div>
</footer>''')

page_body = '\n'.join(parts)

# JSON-LD breadcrumb
breadcrumb_ld = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
        {"@type":"ListItem","position":1,"name":"Strikingly","item":"https://www.strikingly.com/"},
        {"@type":"ListItem","position":2,"name":"AI Generators","item":"https://www.strikingly.com/generators"},
    ],
}

html_out = f'''<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>AI Website Generators - Build Any Site in Seconds | Strikingly</title>
    <meta name="description" content="Browse Strikingly's AI-powered website generators. Choose one for your industry, goal, or site type and create a website in seconds, no code required." />
    <link rel="canonical" href="https://www.strikingly.com/generators" />
    <meta property="og:title" content="AI Website Generators - Build Any Site in Seconds | Strikingly" />
    <meta property="og:description" content="Browse Strikingly's AI-powered website generators. Choose one for your industry, goal, or site type and create a website in seconds." />
    <meta property="og:url" content="https://www.strikingly.com/generators" />
    <meta property="og:type" content="website" />
    <script type="application/ld+json">{json.dumps(breadcrumb_ld)}</script>
    <style>{css}</style>
  </head>
  <body>
    {route_bridge}
    {error_bridge}
    <div id="root"></div>
    <main>
{page_body}
    </main>
    <script>{js}</script>
    {main_script}
  </body>
</html>
'''

with open('index.html','w') as f:
    f.write(html_out)
print("Wrote index.html", len(html_out), "bytes")
