import json
import html

# Data
strings_en = {
    "brand": "strikingly AI",
    "breadcrumb": {"home": "Strikingly", "current": "AI Generators"},
    "hero": {
        "h1Line1": "BUILD ANY KIND OF SITE",
        "h1Line2": "WITH AI, IN AN INSTANT",
        "subheadline": "Browse the right generator for what you're building, or jump straight into our AI site builder.",
        "ctaPrimary": "START BUILDING - IT'S FREE",
        "ctaSecondary": "BROWSE GENERATORS",
    },
    "featured": {"heading": "FEATURED GENERATORS", "subheading": "A few common starting points."},
    "categories": {
        "heading": "BROWSE BY CATEGORY",
        "websites": {"name": "WEBSITES", "description": "AI-built business and personal sites for any goal."},
        "landingPages": {"name": "LANDING PAGES", "description": "Single-page sites built to convert visitors fast."},
        "portfolios": {"name": "PORTFOLIOS", "description": "Showcase your work with a clean, focused site."},
        "blogs": {"name": "BLOGS", "description": "Publish-ready blogs with built-in SEO basics."},
        "stores": {"name": "ONLINE STORES", "description": "Sell products online with payments built in."},
        "linkInBio": {"name": "LINK-IN-BIO", "description": "One link, all your places. Made for creators."},
    },
    "allGenerators": {
        "heading": "ALL GENERATORS",
        "subheading": "Sixty-plus generators, organized by what you're building.",
        "searchPlaceholder": "Search generators...",
        "searchAriaLabel": "Search generators",
        "resultCount": "generators match",
        "noResults": "No generators match your search.",
        "clearSearch": "Clear search",
        "cantFind": "Can't find it? Start with our AI builder.",
        "showAll": "Show all",
        "showLess": "Show less",
        "generators": "generators",
    },
    "howItWorks": {
        "heading": "HOW IT WORKS",
        "step1": {"title": "PICK A GENERATOR", "body": "Browse by category or search to find one that fits your goal."},
        "step2": {"title": "DESCRIBE YOUR SITE", "body": "Tell our AI builder about your business in a sentence or two."},
        "step3": {"title": "GENERATE AND PUBLISH", "body": "Get a fully built site in seconds. Customize anything, then go live."},
    },
    "whyStrikingly": {
        "heading": "WHY STRIKINGLY",
        "liveInSeconds": {"title": "LIVE IN SECONDS", "body": "Describe your site, we build it. No setup, no learning curve."},
        "mobileByDefault": {"title": "MOBILE BY DEFAULT", "body": "Every generator produces responsive sites that work on any device."},
        "freeToStart": {"title": "FREE TO START", "body": "Generate, customize, and publish without a credit card."},
    },
    "faq": {
        "heading": "FREQUENTLY ASKED QUESTIONS",
        "questions": [
            {"q": "What is an AI site generator?", "a": "An AI site generator is a tool that creates a complete website for you based on a short description of your business, goal, or style. Instead of starting from a blank page, you tell the AI what you need and it builds a tailored site with sections, copy, and images ready to customize.\n\nYou can pick a generator tuned for your industry or goal, then refine the result with simple edits."},
            {"q": "How is a generator different from a template?", "a": "A template is a pre-designed layout you fill in manually. A generator uses AI to create a unique site structure and content based on your input, so the result is more personalized and faster to launch.\n\nTemplates are great when you know exactly what you want. Generators are better when you want a head start tailored to your business."},
            {"q": "Are these generators free to use?", "a": "Yes. You can generate and publish a site for free. Paid plans unlock custom domains, advanced e-commerce features, and additional bandwidth when you are ready to scale.\n\nThere is no credit card required to start building."},
            {"q": "What kinds of sites can I build?", "a": "You can build business sites, portfolios, blogs, online stores, landing pages, link-in-bio pages, event sites, and more. Each generator is tuned for a specific use case.\n\nIf you do not see a perfect match, our general AI builder can create any kind of site from a simple description."},
            {"q": "Can I customize what the generator produces?", "a": "Absolutely. The generator gives you a strong starting point. After that, you can edit text, swap images, change colors, add or remove sections, and adjust the layout however you like.\n\nYou have full control over the final result."},
            {"q": "Do generated sites work on mobile?", "a": "Yes. Every site created by Strikingly is responsive by default and looks great on phones, tablets, and desktops.\n\nYou do not need to design a separate mobile version."},
        ],
    },
    "closingCta": {"headline": "READY TO BUILD?", "sub": "Pick a generator above, or jump straight into our AI builder.", "cta": "START WITH AI BUILDER"},
    "footer": {
        "copyright": "\u00A9 Strikingly, Inc. All rights reserved.",
        "columns": [
            {"title": "Product", "links": [{"label": "Templates", "href": "/templates"}, {"label": "Pricing", "href": "/pricing"}, {"label": "AI Builder", "href": "/s/ai_site_builder"}]},
            {"title": "Company", "links": [{"label": "About", "href": "/about"}, {"label": "Blog", "href": "/blog"}]},
            {"title": "Support", "links": [{"label": "Help Center", "href": "/support"}, {"label": "Contact Us", "href": "/support"}]},
            {"title": "Legal", "links": [{"label": "Terms of Service", "href": "/terms"}, {"label": "Privacy Policy", "href": "/privacy"}]},
        ],
    },
}

categories = [
    {"slug": "websites", "nameKey": "websites", "sectionDescription": "Full websites for business, personal, and everything in between."},
    {"slug": "landing-pages", "nameKey": "landingPages", "sectionDescription": "High-converting single-page sites for campaigns and launches."},
    {"slug": "portfolios", "nameKey": "portfolios", "sectionDescription": "Clean, focused sites to showcase creative and professional work."},
    {"slug": "blogs", "nameKey": "blogs", "sectionDescription": "Publish-ready blogs with built-in SEO and clean reading layouts."},
    {"slug": "stores", "nameKey": "stores", "sectionDescription": "Online stores with product pages, carts, and payments ready."},
    {"slug": "link-in-bio", "nameKey": "linkInBio", "sectionDescription": "One link that connects all your channels and content."},
]

featuredGenerators = [
    {"name": "AI Website Generator", "description": "Describe your business, get a full site", "category": "Website", "slug": "ai-website-generator"},
    {"name": "Free Portfolio Generator", "description": "For creatives, in minutes, no fee", "category": "Portfolio", "slug": "free-portfolio-generator"},
    {"name": "AI Landing Page Maker", "description": "One-page sites built to convert", "category": "Landing Page", "slug": "ai-landing-page-maker"},
    {"name": "Online Store Builder", "description": "Start selling without writing code", "category": "Store", "slug": "online-store-builder"},
    {"name": "Link-in-Bio Generator", "description": "One link for all your channels", "category": "Link-in-Bio", "slug": "link-in-bio-generator"},
    {"name": "One-Page Website Builder", "description": "Simple sites, single scroll", "category": "Website", "slug": "one-page-website-builder"},
    {"name": "Wedding Website Generator", "description": "Share your day with guests", "category": "Website", "slug": "wedding-website-generator"},
    {"name": "Restaurant Website Builder", "description": "Menu, hours, reservations, done", "category": "Website", "slug": "restaurant-website-builder"},
    {"name": "Blog Generator for Beginners", "description": "Publish-ready in minutes", "category": "Blog", "slug": "blog-generator-for-beginners"},
]

allGeneratorsByCategory = {
    "websites": [
        {"name": "AI Website Generator", "description": "Describe your business, get a full site", "slug": "ai-website-generator"},
        {"name": "Free Website Builder for Photographers", "description": "Gallery-first layouts for visual portfolios", "slug": "free-website-builder-for-photographers"},
        {"name": "One-Page Wedding Website Builder", "description": "Share your story and RSVPs in one scroll", "slug": "one-page-wedding-website-builder"},
        {"name": "Restaurant Website Builder", "description": "Menu, hours, reservations, done", "slug": "restaurant-website-builder"},
        {"name": "No-Code Website Builder for Coaches", "description": "Booking and services without code", "slug": "no-code-website-builder-for-coaches"},
        {"name": "AI Website Builder for Yoga Instructors", "description": "Schedules, classes, and branding", "slug": "ai-website-builder-for-yoga-instructors"},
        {"name": "Small Business Website Generator", "description": "Home, services, and contact in minutes", "slug": "small-business-website-generator"},
        {"name": "Beautiful Website Builder for Artists", "description": "Visual-first layouts that feel like galleries", "slug": "beautiful-website-builder-for-artists"},
        {"name": "Personal Website Generator", "description": "Introduce yourself with style", "slug": "personal-website-generator"},
        {"name": "Event Website Builder", "description": "Dates, locations, and RSVP built in", "slug": "event-website-builder"},
        {"name": "Nonprofit Website Generator", "description": "Mission, donate, and volunteer pages", "slug": "nonprofit-website-generator"},
        {"name": "Real Estate Website Builder", "description": "Listings, contact forms, and maps", "slug": "real-estate-website-builder"},
    ],
    "landing-pages": [
        {"name": "AI Landing Page Maker", "description": "One-page sites built to convert", "slug": "ai-landing-page-maker"},
        {"name": "Free Landing Page Generator", "description": "No credit card to launch a campaign page", "slug": "free-landing-page-generator"},
        {"name": "Product Launch Landing Page Builder", "description": "Announce features and collect signups", "slug": "product-launch-landing-page-builder"},
        {"name": "Webinar Landing Page Generator", "description": "Registration and reminders in one page", "slug": "webinar-landing-page-generator"},
        {"name": "SaaS Landing Page Builder", "description": "Features, pricing, and demo CTAs", "slug": "saas-landing-page-builder"},
        {"name": "Ebook Landing Page Generator", "description": "Download form and social proof ready", "slug": "ebook-landing-page-generator"},
        {"name": "App Launch Landing Page Builder", "description": "Screenshots, stores, and install links", "slug": "app-launch-landing-page-builder"},
        {"name": "Consulting Landing Page Generator", "description": "Trust signals and booking forms", "slug": "consulting-landing-page-generator"},
        {"name": "Course Landing Page Builder", "description": "Syllabus, instructor, and enroll button", "slug": "course-landing-page-builder"},
        {"name": "Waitlist Landing Page Generator", "description": "Collect emails before you launch", "slug": "waitlist-landing-page-generator"},
    ],
    "portfolios": [
        {"name": "Free Portfolio Generator", "description": "For creatives, in minutes, no fee", "slug": "free-portfolio-generator"},
        {"name": "Portfolio Generator for Designers", "description": "Case studies and visual storytelling", "slug": "portfolio-generator-for-designers"},
        {"name": "Photography Portfolio Builder", "description": "Full-bleed galleries and contact forms", "slug": "photography-portfolio-builder"},
        {"name": "Writer Portfolio Generator", "description": "Articles, clips, and bylines in one place", "slug": "writer-portfolio-generator"},
        {"name": "Developer Portfolio Builder", "description": "Projects, repos, and skills displayed cleanly", "slug": "developer-portfolio-builder"},
        {"name": "Music Portfolio Generator", "description": "Tracks, videos, and tour dates", "slug": "music-portfolio-generator"},
        {"name": "Model Portfolio Builder", "description": "Comp cards and booking contact forms", "slug": "model-portfolio-builder"},
        {"name": "Architect Portfolio Generator", "description": "Projects, renders, and firm details", "slug": "architect-portfolio-generator"},
        {"name": "Videographer Portfolio Builder", "description": "Reels, credits, and client list", "slug": "videographer-portfolio-builder"},
        {"name": "UX Portfolio Generator", "description": "Case studies and process walkthroughs", "slug": "ux-portfolio-generator"},
    ],
    "blogs": [
        {"name": "Blog Generator for Beginners", "description": "Publish-ready in minutes", "slug": "blog-generator-for-beginners"},
        {"name": "AI Blog Builder", "description": "Structure, categories, and first posts ready", "slug": "ai-blog-builder"},
        {"name": "Food Blog Generator", "description": "Recipes, photos, and reading layouts", "slug": "food-blog-generator"},
        {"name": "Travel Blog Builder", "description": "Maps, itineraries, and photo stories", "slug": "travel-blog-builder"},
        {"name": "Fashion Blog Generator", "description": "Editorial layouts and lookbook support", "slug": "fashion-blog-generator"},
        {"name": "Tech Blog Builder", "description": "Code blocks, categories, and reading modes", "slug": "tech-blog-builder"},
        {"name": "Lifestyle Blog Generator", "description": "Clean typography and photo-first layouts", "slug": "lifestyle-blog-generator"},
        {"name": "Parenting Blog Builder", "description": "Tips, resources, and community feel", "slug": "parenting-blog-builder"},
        {"name": "Fitness Blog Generator", "description": "Workouts, nutrition, and progress posts", "slug": "fitness-blog-generator"},
        {"name": "Finance Blog Builder", "description": "Guides, calculators, and clean reading", "slug": "finance-blog-builder"},
    ],
    "stores": [
        {"name": "Online Store Builder", "description": "Start selling without writing code", "slug": "online-store-builder"},
        {"name": "Online Store Builder for Restaurants", "description": "Menu items, orders, and delivery ready", "slug": "online-store-builder-for-restaurants"},
        {"name": "Handmade Shop Generator", "description": "Product stories and craft-focused layouts", "slug": "handmade-shop-generator"},
        {"name": "Digital Product Store Builder", "description": "Downloads, licenses, and delivery", "slug": "digital-product-store-builder"},
        {"name": "Clothing Store Generator", "description": "Collections, sizing, and checkout flow", "slug": "clothing-store-generator"},
        {"name": "Beauty Store Builder", "description": "Products, reviews, and tutorials", "slug": "beauty-store-builder"},
        {"name": "Furniture Store Generator", "description": "Catalog, variants, and delivery info", "slug": "furniture-store-generator"},
        {"name": "Art Print Store Builder", "description": "Galleries, editions, and shipping", "slug": "art-print-store-builder"},
        {"name": "Subscription Box Generator", "description": "Plans, previews, and recurring billing", "slug": "subscription-box-generator"},
        {"name": "Coffee Shop Store Builder", "description": "Beans, subscriptions, and local pickup", "slug": "coffee-shop-store-builder"},
    ],
    "link-in-bio": [
        {"name": "Link-in-Bio Generator", "description": "One link for all your channels", "slug": "link-in-bio-generator"},
        {"name": "Creator Link Page Builder", "description": "Social links, content, and tips", "slug": "creator-link-page-builder"},
        {"name": "Musician Link-in-Bio Generator", "description": "Streaming, merch, and tour dates", "slug": "musician-link-in-bio-generator"},
        {"name": "Influencer Link Page Builder", "description": "Brands, content, and contact", "slug": "influencer-link-page-builder"},
        {"name": "Podcaster Link-in-Bio Generator", "description": "Episodes, platforms, and sponsors", "slug": "podcaster-link-in-bio-generator"},
        {"name": "TikTok Creator Link Builder", "description": "Videos, shops, and collab links", "slug": "tiktok-creator-link-builder"},
        {"name": "YouTuber Link-in-Bio Generator", "description": "Latest uploads, merch, and community", "slug": "youtuber-link-in-bio-generator"},
        {"name": "Coach Link Page Builder", "description": "Bookings, programs, and testimonials", "slug": "coach-link-page-builder"},
        {"name": "Artist Link-in-Bio Generator", "description": "Portfolio, shop, and commission info", "slug": "artist-link-in-bio-generator"},
        {"name": "Freelancer Link Page Builder", "description": "Services, rates, and contact form", "slug": "freelancer-link-page-builder"},
    ],
}

s = strings_en

categoryIcons = {
    "websites": '<svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true"><rect x="4" y="8" width="32" height="24" rx="3" stroke="#8159BB" stroke-width="2"/><line x1="4" y1="15" x2="36" y2="15" stroke="#8159BB" stroke-width="2"/><circle cx="9" cy="11.5" r="1.5" fill="#8159BB"/><circle cx="14" cy="11.5" r="1.5" fill="#8159BB"/><circle cx="19" cy="11.5" r="1.5" fill="#8159BB"/></svg>',
    "landing-pages": '<svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true"><rect x="6" y="4" width="28" height="32" rx="3" stroke="#8159BB" stroke-width="2"/><rect x="10" y="20" width="20" height="12" rx="1" fill="#E9E0F5"/><rect x="10" y="8" width="20" height="8" rx="1" fill="#8159BB" opacity="0.2"/></svg>',
    "portfolios": '<svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true"><rect x="4" y="6" width="14" height="14" rx="2" stroke="#8159BB" stroke-width="2"/><rect x="22" y="6" width="14" height="14" rx="2" stroke="#8159BB" stroke-width="2"/><rect x="4" y="24" width="14" height="10" rx="2" stroke="#8159BB" stroke-width="2"/><rect x="22" y="24" width="14" height="10" rx="2" stroke="#8159BB" stroke-width="2"/></svg>',
    "blogs": '<svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true"><rect x="6" y="4" width="28" height="32" rx="3" stroke="#8159BB" stroke-width="2"/><line x1="12" y1="12" x2="28" y2="12" stroke="#8159BB" stroke-width="2"/><line x1="12" y1="18" x2="24" y2="18" stroke="#8159BB" stroke-width="2"/><line x1="12" y1="24" x2="26" y2="24" stroke="#8159BB" stroke-width="2"/></svg>',
    "stores": '<svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true"><path d="M6 12L10 4H30L34 12V34C34 35.1 33.1 36 32 36H8C6.9 36 6 35.1 6 34V12Z" stroke="#8159BB" stroke-width="2"/><path d="M6 12H34" stroke="#8159BB" stroke-width="2"/><circle cx="16" cy="22" r="2" stroke="#8159BB" stroke-width="2"/><circle cx="24" cy="22" r="2" stroke="#8159BB" stroke-width="2"/></svg>',
    "link-in-bio": '<svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true"><circle cx="20" cy="20" r="16" stroke="#8159BB" stroke-width="2"/><circle cx="20" cy="14" r="4" stroke="#8159BB" stroke-width="2"/><path d="M12 30C12 25.6 15.6 22 20 22C24.4 22 28 25.6 28 30" stroke="#8159BB" stroke-width="2"/></svg>',
}

def stepIcon(n):
    return f'<svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true"><circle cx="24" cy="24" r="22" stroke="#8159BB" stroke-width="2"/><text x="24" y="29" text-anchor="middle" fill="#8159BB" font-size="18" font-weight="700" font-family="Josefin Sans, Poppins, sans-serif">{n}</text></svg>'

whyIcons = [
    '<svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true"><path d="M20 4L24 16H36L26 24L30 36L20 28L10 36L14 24L4 16H16L20 4Z" stroke="#8159BB" stroke-width="2"/></svg>',
    '<svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true"><rect x="12" y="2" width="16" height="36" rx="3" stroke="#8159BB" stroke-width="2"/><line x1="16" y1="30" x2="24" y2="30" stroke="#8159BB" stroke-width="2"/></svg>',
    '<svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true"><circle cx="20" cy="20" r="16" stroke="#8159BB" stroke-width="2"/><path d="M14 20H26M20 14V26" stroke="#8159BB" stroke-width="2"/></svg>',
]

heroIllustration = '<svg width="420" height="320" viewBox="0 0 420 320" fill="none" aria-hidden="true" role="img"><title>Website mockup illustration</title><rect x="20" y="20" width="380" height="280" rx="12" stroke="#CBB8E8" stroke-width="2" fill="#FAF7FD"/><rect x="40" y="40" width="120" height="12" rx="6" fill="#E2D4F3"/><rect x="40" y="64" width="80" height="8" rx="4" fill="#E2D4F3"/><rect x="40" y="88" width="340" height="160" rx="8" fill="#F0EAF8"/><rect x="60" y="108" width="140" height="10" rx="5" fill="#D8C6ED"/><rect x="60" y="130" width="100" height="8" rx="4" fill="#D8C6ED"/><rect x="60" y="150" width="180" height="8" rx="4" fill="#D8C6ED"/><rect x="60" y="170" width="120" height="8" rx="4" fill="#D8C6ED"/><rect x="260" y="108" width="100" height="100" rx="8" fill="#E2D4F3"/><circle cx="310" cy="158" r="24" stroke="#CBB8E8" stroke-width="2" fill="none"/><path d="M296 158L306 168L326 148" stroke="#CBB8E8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><rect x="40" y="260" width="80" height="24" rx="4" fill="#E2D4F3"/><rect x="130" y="260" width="80" height="24" rx="4" fill="#E2D4F3"/></svg>'

arrowSvg = '<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="#8159BB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>'
searchSvg = '<svg width="18" height="18" viewBox="0 0 18 18" fill="none"><circle cx="7.5" cy="7.5" r="5.5" stroke="#636972" stroke-width="2"/><path d="M11.5 11.5L16 16" stroke="#636972" stroke-width="2" stroke-linecap="round"/></svg>'
chevronSvg = '<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M4 6L8 10L12 6" stroke="#636972" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>'

lines = []
append = lines.append

def esc(t):
    return html.escape(str(t), quote=True)

append('<!doctype html>')
append('<html lang="en">')
append('<head>')
append('<meta charset="UTF-8" />')
append('<link rel="icon" type="image/svg+xml" href="/vite.svg" />')
append('<meta name="viewport" content="width=device-width, initial-scale=1" />')
append('<title>AI Website Generators - Build Any Site in Seconds | Strikingly</title>')
append('<meta name="description" content="Browse Strikingly\'s AI-powered website generators. Choose one for your industry, goal, or site type and create a website in seconds, no code required.">')
append('<link rel="canonical" href="https://www.strikingly.com/generators">')
append('<meta property="og:title" content="AI Website Generators - Build Any Site in Seconds | Strikingly">')
append('<meta property="og:description" content="Browse Strikingly\'s AI-powered website generators. Choose one for your industry, goal, or site type and create a website in seconds.">')
append('<meta property="og:url" content="https://www.strikingly.com/generators">')
append('<link rel="preconnect" href="https://fonts.googleapis.com">')
append('<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>')
append('<link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@700&family=Open+Sans:wght@400;600&family=Poppins:wght@700&display=swap" rel="stylesheet">')
append('<script type="application/ld+json">')
append(json.dumps({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
        {"@type": "ListItem", "position": 1, "name": "Strikingly", "item": "https://www.strikingly.com/"},
        {"@type": "ListItem", "position": 2, "name": "AI Generators", "item": "https://www.strikingly.com/generators"}
    ]
}))
append('</script>')
append('<style>')
with open('/workspace/my-app/src/index.css','r') as f:
    append(f.read())
append('</style>')
append('</head>')
append('<body>')
append('<div class="generators-page">')

# Top bar
append('<header class="topbar"><div class="topbar-inner"><a href="/" class="topbar-logo" aria-label="Strikingly home"><span class="topbar-brand">strikingly</span><span class="topbar-ai">AI</span></a></div></header>')

# Breadcrumb
append('<nav aria-label="Breadcrumb" class="breadcrumb"><ol class="breadcrumb-list"><li class="breadcrumb-item"><a href="/" class="breadcrumb-link">' + esc(s["breadcrumb"]["home"]) + '</a></li><li class="breadcrumb-separator" aria-hidden="true">&gt;</li><li class="breadcrumb-item"><span class="breadcrumb-current" aria-current="page">' + esc(s["breadcrumb"]["current"]) + '</span></li></ol></nav>')

append('<main>')

# Hero
append('<section class="hero"><div class="hero-inner"><div class="hero-text"><h1 class="hero-h1"><span class="hero-h1-line1">' + esc(s["hero"]["h1Line1"]) + '</span><span class="hero-h1-line2">' + esc(s["hero"]["h1Line2"]) + '</span></h1><p class="hero-sub">' + esc(s["hero"]["subheadline"]) + '</p><div class="hero-ctas"><a href="/s/ai_site_builder" class="btn btn-primary btn-large">' + esc(s["hero"]["ctaPrimary"]) + '</a><a href="#all-generators" class="btn btn-ghost btn-large">' + esc(s["hero"]["ctaSecondary"]) + '</a></div></div><div class="hero-visual" aria-hidden="true">' + heroIllustration + '</div></div></section>')

# Featured
append('<section class="section featured" aria-labelledby="featured-heading"><div class="section-inner"><h2 id="featured-heading" class="section-heading">' + esc(s["featured"]["heading"]) + '</h2><p class="section-subheading">' + esc(s["featured"]["subheading"]) + '</p><div class="featured-grid">')
for g in featuredGenerators:
    append('<a href="/generators/' + g["slug"] + '" class="card featured-card"><span class="tag">' + esc(g["category"]) + '</span><h3 class="featured-name">' + esc(g["name"]) + '</h3><p class="featured-desc">' + esc(g["description"]) + '</p></a>')
append('</div></div></section>')

# Categories
append('<section class="section categories" aria-labelledby="categories-heading"><div class="section-inner"><h2 id="categories-heading" class="section-heading">' + esc(s["categories"]["heading"]) + '</h2><div class="categories-grid">')
for cat in categories:
    append('<a href="/generators#' + cat["slug"] + '" class="card category-card"><div class="category-icon">' + categoryIcons[cat["slug"]] + '</div><h3 class="category-name">' + esc(s["categories"][cat["nameKey"]]["name"]) + '</h3><p class="category-desc">' + esc(s["categories"][cat["nameKey"]]["description"]) + '</p><span class="category-arrow" aria-hidden="true">' + arrowSvg + '</span></a>')
append('</div></div></section>')

# All Generators
append('<section id="all-generators" class="section all-generators" aria-labelledby="all-generators-heading"><div class="section-inner"><h2 id="all-generators-heading" class="section-heading">' + esc(s["allGenerators"]["heading"]) + '</h2><p class="section-subheading">' + esc(s["allGenerators"]["subheading"]) + '</p>')
append('<div class="search-wrap"><div class="search-field"><span class="search-icon" aria-hidden="true">' + searchSvg + '</span><input type="text" class="search-input" id="gen-search" placeholder="' + esc(s["allGenerators"]["searchPlaceholder"]) + '" aria-label="' + esc(s["allGenerators"]["searchAriaLabel"]) + '" /></div><p class="search-count" id="search-count" aria-live="polite" style="display:none"></p></div>')
append('<div class="empty-state" id="empty-state" style="display:none"><p class="empty-text">' + esc(s["allGenerators"]["noResults"]) + '</p><button type="button" class="btn btn-ghost" id="clear-search">' + esc(s["allGenerators"]["clearSearch"]) + '</button><p class="empty-hint"><a href="/s/ai_site_builder">' + esc(s["allGenerators"]["cantFind"]) + '</a></p></div>')

for cat in categories:
    lst = allGeneratorsByCategory.get(cat["slug"], [])
    show_toggle = len(lst) > 6
    append('<div id="' + cat["slug"] + '" class="generator-subsection" data-category="' + cat["slug"] + '"><h3 class="subsection-heading">' + esc(s["categories"][cat["nameKey"]]["name"]) + '</h3><p class="subsection-desc">' + esc(cat["sectionDescription"]) + '</p><div class="generator-grid" id="grid-' + cat["slug"] + '">')
    for g in lst:
        append('<a href="/generators/' + g["slug"] + '" class="card generator-card"><div class="generator-thumb" aria-hidden="true">' + categoryIcons[cat["slug"]] + '</div><h4 class="generator-name">' + esc(g["name"]) + '</h4><p class="generator-desc">' + esc(g["description"]) + '</p></a>')
    append('</div>')
    if show_toggle:
        append('<button type="button" class="show-all-btn" data-toggle="' + cat["slug"] + '" aria-expanded="false" aria-controls="grid-' + cat["slug"] + '">' + esc(s["allGenerators"]["showAll"]) + ' ' + str(len(lst) - 6) + ' ' + esc(s["allGenerators"]["generators"]) + '</button>')
    append('</div>')

append('</div></section>')

# How it works
append('<section class="section how-it-works" aria-labelledby="how-heading"><div class="section-inner"><h2 id="how-heading" class="section-heading">' + esc(s["howItWorks"]["heading"]) + '</h2><div class="steps">')
for i, step in enumerate([s["howItWorks"]["step1"], s["howItWorks"]["step2"], s["howItWorks"]["step3"]]):
    append('<div class="step"><div class="step-circle">' + stepIcon(i+1) + '</div><h3 class="step-title">' + esc(step["title"]) + '</h3><p class="step-body">' + esc(step["body"]) + '</p></div>')
append('</div></div></section>')

# Why Strikingly
append('<section class="section why" aria-labelledby="why-heading"><div class="section-inner"><h2 id="why-heading" class="section-heading">' + esc(s["whyStrikingly"]["heading"]) + '</h2><div class="why-grid">')
items = [
    {"title": s["whyStrikingly"]["liveInSeconds"]["title"], "body": s["whyStrikingly"]["liveInSeconds"]["body"], "icon": whyIcons[0]},
    {"title": s["whyStrikingly"]["mobileByDefault"]["title"], "body": s["whyStrikingly"]["mobileByDefault"]["body"], "icon": whyIcons[1]},
    {"title": s["whyStrikingly"]["freeToStart"]["title"], "body": s["whyStrikingly"]["freeToStart"]["body"], "icon": whyIcons[2]},
]
for item in items:
    append('<div class="why-cell"><div class="why-icon">' + item["icon"] + '</div><h3 class="why-title">' + esc(item["title"]) + '</h3><p class="why-body">' + esc(item["body"]) + '</p></div>')
append('</div></div></section>')

# FAQ
append('<section class="section faq" aria-labelledby="faq-heading"><div class="section-inner"><h2 id="faq-heading" class="section-heading">' + esc(s["faq"]["heading"]) + '</h2><div class="faq-list">')
for i, q in enumerate(s["faq"]["questions"]):
    is_open = i == 0
    panel_classes = 'faq-panel faq-panel-open' if is_open else 'faq-panel'
    chevron_cls = 'chevron-open' if is_open else ''
    append('<div class="faq-item"><button type="button" class="faq-button" aria-expanded="' + ('true' if is_open else 'false') + '" aria-controls="faq-panel-' + str(i) + '"><span class="faq-q">' + esc(q["q"]) + '</span><span class="faq-chevron" aria-hidden="true">' + chevronSvg.replace('/>', ' class="' + chevron_cls + '"/>') + '</span></button><div id="faq-panel-' + str(i) + '" class="' + panel_classes + '"><div class="faq-a">')
    for para in q["a"].split('\n'):
        p = para.strip()
        if p:
            append('<p>' + esc(p) + '</p>')
    append('</div></div></div>')
append('</div></div></section>')

# Closing CTA
append('<section class="section closing-cta" aria-labelledby="closing-heading"><div class="section-inner center"><h2 id="closing-heading" class="section-heading">' + esc(s["closingCta"]["headline"]) + '</h2><p class="closing-sub">' + esc(s["closingCta"]["sub"]) + '</p><a href="/s/ai_site_builder" class="btn btn-primary btn-large">' + esc(s["closingCta"]["cta"]) + '</a></div></section>')

append('</main>')

# Footer
append('<footer class="footer"><div class="footer-inner"><div class="footer-top"><a href="/" class="footer-logo"><span class="topbar-brand">strikingly</span><span class="topbar-ai">AI</span></a></div><div class="footer-columns">')
for col in s["footer"]["columns"]:
    append('<div class="footer-col"><h3 class="footer-col-title">' + esc(col["title"]) + '</h3><ul class="footer-col-list">')
    for link in col["links"]:
        append('<li><a href="' + link["href"] + '">' + esc(link["label"]) + '</a></li>')
    append('</ul></div>')
append('</div><p class="footer-copy">' + esc(s["footer"]["copyright"]) + '</p></div></footer>')

append('</div>')
append('<div id="root"></div>')

# Vanilla JS for interactivity
append('<script>')
with open('/workspace/my-app/src/static-interactions.js','r') as f:
    append(f.read())
append('</script>')

# React module (for hydration / dev HMR)
append('<script type="module" src="/src/main.jsx"></script>')
append('</body>')
append('</html>')

with open('/workspace/my-app/index.html','w') as f:
    f.write('\n'.join(lines))
print('Done generating index.html, lines:', len(lines))
