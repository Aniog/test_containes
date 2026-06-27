import os

OUT = "/workspace/my-app/public/generators/index.html"
os.makedirs(os.path.dirname(OUT), exist_ok=True)

SVG_WEBSITE = """<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="10" width="36" height="28" rx="3"/><line x1="6" y1="18" x2="42" y2="18"/><line x1="16" y1="14" x2="16" y2="14"/><line x1="22" y1="14" x2="22" y2="14"/><line x1="28" y1="14" x2="28" y2="14"/></svg>"""

SVG_LANDING = """<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="8" y="8" width="32" height="32" rx="3"/><rect x="12" y="12" width="24" height="8" rx="1"/><line x1="12" y1="26" x2="24" y2="26"/><line x1="12" y1="31" x2="20" y2="31"/><line x1="12" y1="36" x2="22" y2="36"/></svg>"""

SVG_PORTFOLIO = """<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="10" width="36" height="28" rx="3"/><rect x="10" y="14" width="14" height="20" rx="1"/><line x1="28" y1="18" x2="38" y2="18"/><line x1="28" y1="24" x2="38" y2="24"/><line x1="28" y1="30" x2="34" y2="30"/></svg>"""

SVG_BLOG = """<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 8h24c2 0 3 1 3 3v26c0 2-1 3-3 3H12c-2 0-3-1-3-3V11c0-2 1-3 3-3z"/><line x1="15" y1="16" x2="33" y2="16"/><line x1="15" y1="23" x2="33" y2="23"/><line x1="15" y1="30" x2="27" y2="30"/></svg>"""

SVG_STORE = """<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 14l3 20h26l3-20H8z"/><path d="M16 14v-4a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v4"/><line x1="18" y1="26" x2="18" y2="26"/><line x1="30" y1="26" x2="30" y2="26"/></svg>"""

SVG_LINK = """<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="24" cy="16" r="7"/><path d="M10 42c0-10 6-16 14-16s14 6 14 16"/><line x1="34" y1="10" x2="42" y2="10"/><line x1="38" y1="6" x2="38" y2="14"/></svg>"""

CAT_THUMB = {
    "websites": SVG_WEBSITE,
    "landing-pages": SVG_LANDING,
    "portfolios": SVG_PORTFOLIO,
    "blogs": SVG_BLOG,
    "stores": SVG_STORE,
    "link-in-bio": SVG_LINK,
}

CATEGORIES = [
    ("Websites", "websites", "AI-built business and personal sites for any goal."),
    ("Landing Pages", "landing-pages", "Single-page sites built to convert visitors fast."),
    ("Portfolios", "portfolios", "Showcase your work with a clean, focused site."),
    ("Blogs", "blogs", "Publish-ready blogs with built-in SEO basics."),
    ("Online Stores", "stores", "Sell products online with payments built in."),
    ("Link-in-Bio", "link-in-bio", "One link, all your places. Made for creators."),
]

FEATURED = [
    ("AI Website Generator", "ai-website-generator", "Describe your business, get a full site", "Website"),
    ("Free Portfolio Generator", "free-portfolio-generator", "For creatives, in minutes, no fee", "Portfolio"),
    ("AI Landing Page Maker", "ai-landing-page-maker", "One-page sites built to convert", "Landing Page"),
    ("Online Store Builder", "online-store-builder", "Start selling without writing code", "Store"),
    ("Link-in-Bio Generator", "link-in-bio-generator", "One link for all your channels", "Link-in-Bio"),
    ("One-Page Website Builder", "one-page-website-builder", "Simple sites, single scroll", "Website"),
    ("Wedding Website Generator", "wedding-website-generator", "Share your day with guests", "Website"),
    ("Restaurant Website Builder", "restaurant-website-builder", "Menu, hours, reservations, done", "Website"),
    ("Blog Generator for Beginners", "blog-generator-for-beginners", "Publish-ready in minutes", "Blog"),
]

DIRECTORY = {
    "websites": {
        "title": "Websites",
        "desc": "AI-built business and personal sites for any goal.",
        "cards": [
            ("AI Website Generator", "ai-website-generator", "Describe your business and get a complete site in seconds."),
            ("Free Website Builder for Photographers", "free-website-builder-for-photographers", "Galleries, pricing, and booking in one visual site."),
            ("One-Page Wedding Website Builder", "one-page-wedding-website-builder", "A single, elegant page for your big day."),
            ("Restaurant Website Builder", "restaurant-website-builder", "Menu, hours, reservations, and maps ready to go."),
            ("No-Code Website Generator", "no-code-website-generator", "Build a professional site without touching code."),
            ("Small Business Website Builder", "small-business-website-builder", "Homepage, services, and contact forms made simple."),
            ("Beautiful Personal Website Generator", "beautiful-personal-website-generator", "Introduce yourself with style and clarity."),
            ("AI Website Builder for Coaches", "ai-website-builder-for-coaches", "Programs, bookings, and testimonials built in."),
            ("Free Wedding Website Generator", "free-wedding-website-generator", "Share details, RSVPs, and photos with guests."),
            ("Real Estate Website Generator", "real-estate-website-generator", "Listings, agent profiles, and lead capture forms."),
        ]
    },
    "landing-pages": {
        "title": "Landing Pages",
        "desc": "Single-page sites built to convert visitors fast.",
        "cards": [
            ("AI Landing Page Maker", "ai-landing-page-maker", "One-page sites built to convert visitors fast."),
            ("Free Landing Page Generator", "free-landing-page-generator", "Launch a campaign page without a designer."),
            ("Product Launch Landing Page Builder", "product-launch-landing-page-builder", "Announce features and collect early signups."),
            ("Mobile Landing Page Generator", "mobile-landing-page-generator", "Fast-loading pages that look great on phones."),
            ("Event Landing Page Builder", "event-landing-page-builder", "One page for tickets, schedule, and location."),
            ("Lead Capture Landing Page Generator", "lead-capture-landing-page-generator", "Forms and CTAs designed to collect leads."),
            ("SaaS Landing Page Builder", "saas-landing-page-builder", "Hero, features, pricing, and signup in one flow."),
            ("One-Page Sales Page Generator", "one-page-sales-page-generator", "Sell a single product or service on one scroll."),
            ("Waitlist Landing Page Builder", "waitlist-landing-page-builder", "Collect emails before your product launches."),
            ("Consulting Landing Page Generator", "consulting-landing-page-generator", "Trust-building page for your consulting offer."),
        ]
    },
    "portfolios": {
        "title": "Portfolios",
        "desc": "Showcase your work with a clean, focused site.",
        "cards": [
            ("Free Portfolio Generator", "free-portfolio-generator", "For creatives, in minutes, no fee."),
            ("Portfolio Generator for Designers", "portfolio-generator-for-designers", "Case studies, galleries, and contact in one place."),
            ("Photography Portfolio Builder", "photography-portfolio-builder", "Showcase shoots with full-width images."),
            ("Writing Portfolio Generator", "writing-portfolio-generator", "Articles, clips, and bylines organized cleanly."),
            ("Architecture Portfolio Builder", "architecture-portfolio-builder", "Projects, drawings, and firm info made visual."),
            ("Artist Portfolio Generator", "artist-portfolio-generator", "A clean canvas for your artwork and exhibitions."),
            ("UX Portfolio Generator", "ux-portfolio-generator", "Process, prototypes, and outcomes for UX roles."),
            ("Minimalist Portfolio Builder", "minimalist-portfolio-builder", "Let your work speak with a simple layout."),
            ("Video Portfolio Generator", "video-portfolio-generator", "Embed reels and credits for production work."),
            ("Freelancer Portfolio Builder", "freelancer-portfolio-builder", "Services, testimonials, and a quick contact form."),
        ]
    },
    "blogs": {
        "title": "Blogs",
        "desc": "Publish-ready blogs with built-in SEO basics.",
        "cards": [
            ("Blog Generator for Beginners", "blog-generator-for-beginners", "Publish-ready in minutes with SEO basics."),
            ("AI Blog Maker", "ai-blog-maker", "Generate post layouts and site structure instantly."),
            ("Personal Blog Generator", "personal-blog-generator", "Share stories with a clean reading experience."),
            ("Food Blog Builder", "food-blog-builder", "Recipes, photos, and categories ready to publish."),
            ("Travel Blog Generator", "travel-blog-generator", "Map trips, photos, and stories in one place."),
            ("Fashion Blog Builder", "fashion-blog-builder", "Editorial-style layouts for style content."),
            ("Tech Blog Generator", "tech-blog-generator", "Code-friendly typography and project writeups."),
            ("Lifestyle Blog Builder", "lifestyle-blog-builder", "Topics, tags, and an about page for creators."),
            ("Podcast Blog Generator", "podcast-blog-generator", "Episodes, show notes, and subscribe links."),
            ("Parenting Blog Builder", "parenting-blog-builder", "Share tips, milestones, and family stories."),
        ]
    },
    "stores": {
        "title": "Online Stores",
        "desc": "Sell products online with payments built in.",
        "cards": [
            ("Online Store Builder", "online-store-builder", "Start selling without writing code."),
            ("Online Store Builder for Restaurants", "online-store-builder-for-restaurants", "Menus, ordering, and payments in one place."),
            ("AI Store Generator", "ai-store-generator", "Products, checkout, and design from a prompt."),
            ("Clothing Store Builder", "clothing-store-builder", "Collections, sizes, and carts for fashion brands."),
            ("Handmade Shop Generator", "handmade-shop-generator", "Showcase and sell handmade goods online."),
            ("Digital Product Store Builder", "digital-product-store-builder", "Sell downloads, courses, and templates."),
            ("Jewelry Store Generator", "jewelry-store-generator", "Elegant product pages for accessories."),
            ("Book Store Builder", "book-store-builder", "Author pages, listings, and direct sales."),
            ("Coffee Shop Online Store Builder", "coffee-shop-online-store-builder", "Beans, merch, and local pickup options."),
            ("Beauty Store Generator", "beauty-store-generator", "Skincare and cosmetics with clean product cards."),
        ]
    },
    "link-in-bio": {
        "title": "Link-in-Bio",
        "desc": "One link, all your places. Made for creators.",
        "cards": [
            ("Link-in-Bio Generator", "link-in-bio-generator", "One link for all your channels."),
            ("Creator Link-in-Bio Builder", "creator-link-in-bio-builder", "Made for TikTok, Instagram, and YouTube creators."),
            ("Musician Link-in-Bio Generator", "musician-link-in-bio-generator", "Streaming links, tour dates, and merch."),
            ("Free Link-in-Bio Tool", "free-link-in-bio-tool", "A simple page with all your important links."),
            ("Coach Link-in-Bio Builder", "coach-link-in-bio-builder", "Bookings, offers, and testimonials in one link."),
            ("Podcast Link-in-Bio Generator", "podcast-link-in-bio-generator", "Latest episodes and subscribe platforms."),
            ("Photographer Link-in-Bio Builder", "photographer-link-in-bio-builder", "Portfolio, booking, and social links together."),
            ("Restaurant Link-in-Bio Generator", "restaurant-link-in-bio-generator", "Menu, hours, reservations, and delivery apps."),
            ("Event Link-in-Bio Builder", "event-link-in-bio-builder", "Tickets, schedule, and location in one link."),
            ("Nonprofit Link-in-Bio Generator", "nonprofit-link-in-bio-generator", "Donate, volunteer, and learn-more links."),
        ]
    },
}

FAQ = [
    ("What is an AI site generator?", "An AI site generator is a tool that builds a complete website from a short description of your business, project, or goal. You answer a few questions or write a sentence, and the AI produces pages, layouts, text, and images you can customize before publishing."),
    ("How is a generator different from a template?", "A template gives you a fixed starting design that you fill in manually. A generator uses AI to create a tailored site based on what you tell it, so the structure, copy, and visuals are customized to your input from the beginning."),
    ("Are these generators free to use?", "You can generate, customize, and publish a site without a credit card. Strikingly offers free plans with core features, and you can upgrade when you need custom domains, advanced e-commerce, or premium integrations."),
    ("What kinds of sites can I build?", "You can build business sites, portfolios, landing pages, blogs, online stores, link-in-bio pages, wedding sites, restaurant sites, and more. The generators are organized by category so you can start from the right foundation."),
    ("Can I customize what the generator produces?", "Yes. After the AI generates your site, you can edit every section, swap images, change colors and fonts, add new pages, and connect your own domain. The generator gives you a head start, not a locked design."),
    ("Do generated sites work on mobile?", "Every generator produces responsive sites that automatically adapt to phones, tablets, and desktops. You can preview the mobile layout before publishing and adjust anything you want."),
]


def render_head():
    return """<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>AI Website Generators - Build Any Site in Seconds | Strikingly</title>
  <meta name="description" content="Browse Strikingly's AI-powered website generators. Choose one for your industry, goal, or site type and create a website in seconds, no code required." />
  <link rel="canonical" href="https://www.strikingly.com/generators" />
  <meta property="og:title" content="AI Website Generators - Build Any Site in Seconds | Strikingly" />
  <meta property="og:description" content="Browse Strikingly's AI-powered website generators. Choose one for your industry, goal, or site type and create a website in seconds." />
  <meta property="og:url" content="https://www.strikingly.com/generators" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;700&family=Open+Sans:wght@400;600;700&display=swap" rel="stylesheet" />
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Strikingly", "item": "https://www.strikingly.com/" },
      { "@type": "ListItem", "position": 2, "name": "AI Generators" }
    ]
  }
  </script>
  <style>
    :root {
      --brand-purple: #8159BB;
      --ai-blue: #7671FF;
      --ai-pink: #CB0C9F;
      --body-text: #636972;
      --heading: #4B5056;
      --hero-line1: #2E2E2F;
      --card-border: #C6C9CD;
      --divider: #E2E4E7;
      --light-bg: #F4F6F8;
      --white: #FFFFFF;
      --focus-ring: #4A90E2;
      --font-heading: "Josefin Sans", "Poppins", sans-serif;
      --font-body: "Open Sans", sans-serif;
    }
    *, *::before, *::after { box-sizing: border-box; }
    html { scroll-behavior: smooth; }
    body { margin: 0; font-family: var(--font-body); font-size: 14px; line-height: 1.5; color: var(--body-text); background: var(--white); -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; overflow-x: hidden; }
    h1, h2, h3, h4, h5, h6 { font-family: var(--font-heading); font-weight: 700; text-transform: uppercase; line-height: 1.2; color: var(--heading); margin: 0 0 10px; }
    p { margin: 0 0 10px; }
    a { color: inherit; text-decoration: none; }
    a:focus-visible, button:focus-visible, input:focus-visible { outline: 3px solid var(--focus-ring); outline-offset: 2px; }
    .container { width: 100%; max-width: 1200px; margin-inline-start: auto; margin-inline-end: auto; padding-inline-start: 20px; padding-inline-end: 20px; }
    .section { padding-block-start: 40px; padding-block-end: 40px; }
    .section-heading { font-size: clamp(22px, 3vw, 30px); color: var(--heading); margin-block-end: 8px; }
    .section-subheading { font-size: 14px; color: var(--body-text); margin-block-end: 30px; max-width: 640px; }
    .top-bar { background: var(--white); border-block-end: 1px solid var(--divider); padding-block-start: 14px; padding-block-end: 14px; }
    .top-bar .container { display: flex; align-items: center; }
    .brand-logo { font-family: var(--font-heading); font-weight: 700; font-size: 18px; letter-spacing: 0.5px; color: var(--hero-line1); text-transform: uppercase; }
    .brand-logo span { font-weight: 400; color: var(--body-text); }
    .breadcrumb { padding-block-start: 12px; padding-block-end: 12px; font-size: 12px; color: var(--body-text); }
    .breadcrumb ol { list-style: none; margin: 0; padding: 0; display: flex; align-items: center; gap: 8px; }
    .breadcrumb a { color: var(--body-text); text-decoration: underline; text-underline-offset: 2px; }
    .breadcrumb a:hover { color: var(--brand-purple); }
    .breadcrumb [aria-current="page"] { color: var(--body-text); text-decoration: none; }
    .hero { position: relative; padding-block-start: 70px; padding-block-end: 70px; overflow: hidden; }
    .hero::before { content: ""; position: absolute; inset-block-start: -20%; inset-inline-end: -10%; width: 70%; height: 140%; background: radial-gradient(circle at 70% 30%, rgba(118, 113, 255, 0.08), rgba(203, 12, 159, 0.04) 55%, transparent 70%); pointer-events: none; z-index: 0; }
    .hero .container { position: relative; z-index: 1; display: grid; grid-template-columns: 1fr 1fr; gap: 40px; align-items: center; }
    .hero h1 { font-size: clamp(28px, 4.2vw, 46px); margin-block-end: 18px; color: var(--hero-line1); letter-spacing: 0.5px; }
    .hero .gradient-text { display: block; background: linear-gradient(90deg, var(--ai-blue), var(--ai-pink)); -webkit-background-clip: text; background-clip: text; color: transparent; }
    .hero p { font-size: 16px; line-height: 1.55; margin-block-end: 28px; max-width: 460px; }
    .hero-actions { display: flex; gap: 10px; flex-wrap: wrap; }
    .hero-illustration { display: flex; justify-content: center; align-items: center; }
    .hero-illustration svg { width: 100%; max-width: 420px; height: auto; }
    .btn { display: inline-flex; align-items: center; justify-content: center; height: 36px; padding-inline-start: 15px; padding-inline-end: 15px; border-radius: 4px; font-family: var(--font-heading); font-size: 14px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.3px; border: 1px solid transparent; cursor: pointer; transition: transform 0.15s ease, box-shadow 0.15s ease, border-color 0.15s ease, background 0.15s ease; text-decoration: none; }
    .btn:hover { transform: translateY(-1px); }
    .btn-primary { background: linear-gradient(90deg, var(--ai-blue), var(--ai-pink)); color: var(--white); border-color: transparent; }
    .btn-primary:hover { box-shadow: 0 6px 16px rgba(118, 113, 255, 0.28); }
    .btn-ghost { background: transparent; color: var(--brand-purple); border-color: var(--brand-purple); }
    .btn-ghost:hover { background: rgba(129, 89, 187, 0.06); }
    .btn-large { height: 44px; padding-inline-start: 24px; padding-inline-end: 24px; font-size: 15px; }
    .card { display: block; background: var(--white); border: 1px solid var(--card-border); border-radius: 3px; padding: 20px; transition: border-color 0.15s ease, box-shadow 0.15s ease; }
    .card:hover { border-color: var(--brand-purple); box-shadow: 0 6px 18px rgba(75, 80, 86, 0.10); }
    .card-title { font-family: var(--font-heading); font-size: 15px; font-weight: 700; text-transform: uppercase; color: var(--heading); margin-block-end: 6px; line-height: 1.25; }
    .card-desc { font-size: 13px; line-height: 1.45; color: var(--body-text); margin: 0; }
    .tag { display: inline-flex; align-items: center; font-family: var(--font-heading); font-size: 11px; font-weight: 700; text-transform: uppercase; color: var(--brand-purple); border: 1px solid var(--brand-purple); border-radius: 3px; padding: 2px 6px; margin-block-start: 12px; }
    .featured-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
    .featured-grid .card { display: flex; flex-direction: column; justify-content: space-between; }
    .category-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
    .category-card { display: flex; flex-direction: column; align-items: flex-start; }
    .category-card .cat-thumb { width: 44px; height: 44px; margin-block-end: 14px; color: var(--brand-purple); }
    .category-card .card-title { margin-block-end: 6px; }
    .category-card .card-desc { margin-block-end: 12px; }
    .category-card .arrow { margin-inline-start: auto; color: var(--brand-purple); width: 18px; height: 18px; }
    .directory-search { margin-block-end: 30px; }
    .search-wrap { position: relative; max-width: 480px; }
    .search-wrap svg { position: absolute; inset-block-start: 50%; inset-inline-start: 14px; transform: translateY(-50%); width: 18px; height: 18px; color: var(--body-text); pointer-events: none; }
    .search-input { width: 100%; height: 44px; padding-inline-start: 42px; padding-inline-end: 16px; border: 1px solid var(--card-border); border-radius: 4px; font-family: var(--font-body); font-size: 14px; color: var(--heading); background: var(--white); }
    .search-input::placeholder { color: #9A9FA6; }
    .search-meta { display: flex; align-items: center; justify-content: space-between; gap: 16px; flex-wrap: wrap; margin-block-start: 10px; }
    .result-count { font-size: 13px; color: var(--body-text); }
    .empty-state { display: none; padding: 30px 20px; text-align: center; border: 1px dashed var(--card-border); border-radius: 3px; background: var(--light-bg); }
    .empty-state.is-visible { display: block; }
    .empty-state p { margin-block-end: 14px; }
    .directory-subsection { margin-block-end: 40px; scroll-margin-block-start: 90px; }
    .directory-subsection:last-child { margin-block-end: 0; }
    .directory-subsection h3 { font-size: 20px; margin-block-end: 4px; }
    .directory-subsection .cat-desc { font-size: 14px; color: var(--body-text); margin-block-end: 18px; }
    .directory-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
    .directory-grid .card { overflow: hidden; }
    .directory-grid .cat-thumb { width: 100%; height: 110px; margin-block-end: 14px; background: var(--light-bg); border-radius: 2px; display: flex; align-items: center; justify-content: center; color: var(--brand-purple); }
    .directory-grid .cat-thumb svg { width: 64px; height: 64px; }
    .directory-grid .card.is-hidden { display: none; }
    .directory-grid .card-title { margin-block-end: 5px; }
    .show-all-btn { margin-block-start: 18px; background: transparent; border: 1px solid var(--card-border); color: var(--brand-purple); font-family: var(--font-heading); font-size: 12px; font-weight: 700; text-transform: uppercase; padding: 8px 14px; border-radius: 4px; cursor: pointer; transition: border-color 0.15s ease, background 0.15s ease; }
    .show-all-btn:hover { border-color: var(--brand-purple); background: rgba(129, 89, 187, 0.04); }
    .show-all-btn.is-hidden { display: none; }
    .steps { display: grid; grid-template-columns: repeat(3, 1fr); gap: 30px; }
    .step { display: flex; gap: 14px; align-items: flex-start; }
    .step-number { flex-shrink: 0; width: 40px; height: 40px; border-radius: 50%; background: var(--brand-purple); color: var(--white); font-family: var(--font-heading); font-weight: 700; font-size: 16px; display: flex; align-items: center; justify-content: center; }
    .step-title { font-size: 14px; margin-block-end: 6px; }
    .step p { font-size: 14px; line-height: 1.5; margin: 0; }
    .why-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 30px; }
    .why-cell { display: flex; gap: 14px; align-items: flex-start; }
    .why-icon { flex-shrink: 0; width: 28px; height: 28px; color: var(--brand-purple); }
    .why-cell h3 { font-size: 14px; margin-block-end: 6px; }
    .why-cell p { font-size: 14px; line-height: 1.5; margin: 0; }
    .faq-list { max-width: 760px; }
    .faq-item { border-block-end: 1px solid var(--divider); padding-block: 16px; }
    .faq-item:first-child { border-block-start: 1px solid var(--divider); }
    .faq-question { width: 100%; display: flex; align-items: center; justify-content: space-between; gap: 16px; background: none; border: none; padding: 0; font-family: var(--font-heading); font-size: 15px; font-weight: 700; text-transform: uppercase; color: var(--heading); text-align: start; cursor: pointer; }
    .faq-icon { flex-shrink: 0; width: 18px; height: 18px; color: var(--brand-purple); transition: transform 0.2s ease; }
    .faq-answer { font-size: 14px; line-height: 1.6; color: var(--body-text); padding-block-start: 10px; overflow: hidden; transition: max-height 0.25s ease, opacity 0.2s ease; }
    .faq-item.is-collapsed .faq-answer { max-height: 0; opacity: 0; padding-block-start: 0; }
    .faq-item.is-collapsed .faq-icon { transform: rotate(-90deg); }
    .closing-cta { text-align: center; background: var(--white); }
    .closing-cta h2 { font-size: clamp(22px, 3vw, 30px); margin-block-end: 10px; }
    .closing-cta p { font-size: 15px; margin-block-end: 22px; color: var(--body-text); }
    .site-footer { background: var(--light-bg); padding-block-start: 40px; padding-block-end: 30px; border-block-start: 1px solid var(--divider); }
    .footer-grid { display: grid; grid-template-columns: 1.2fr repeat(4, 1fr); gap: 30px; margin-block-end: 30px; }
    .footer-col h4 { font-size: 12px; margin-block-end: 12px; color: var(--heading); }
    .footer-col ul { list-style: none; margin: 0; padding: 0; }
    .footer-col li { margin-block-end: 8px; }
    .footer-col a { font-size: 13px; color: var(--body-text); text-decoration: none; }
    .footer-col a:hover { color: var(--brand-purple); text-decoration: underline; }
    .footer-bottom { display: flex; align-items: center; justify-content: space-between; gap: 16px; flex-wrap: wrap; padding-block-start: 20px; border-block-start: 1px solid var(--divider); font-size: 12px; color: var(--body-text); }
    @media (max-width: 1024px) {
      .featured-grid, .category-grid, .directory-grid { grid-template-columns: repeat(2, 1fr); }
      .steps, .why-grid { grid-template-columns: 1fr; }
      .footer-grid { grid-template-columns: repeat(2, 1fr); }
    }
    @media (max-width: 768px) {
      .hero .container { grid-template-columns: 1fr; }
      .hero-illustration { order: -1; }
      .hero-illustration svg { max-width: 280px; }
      .hero-actions { flex-direction: column; }
      .hero-actions .btn { width: 100%; }
      .featured-grid, .category-grid, .directory-grid { grid-template-columns: 1fr; }
      .category-card .arrow { margin-inline-start: 0; }
      .footer-grid { grid-template-columns: 1fr; gap: 24px; }
      .footer-bottom { flex-direction: column; align-items: flex-start; }
    }
  </style>
</head>
"""


def render_body_start():
    return """<body>
  <header class="top-bar">
    <div class="container">
      <a href="/" class="brand-logo">strikingly <span>AI</span></a>
    </div>
  </header>

  <nav class="breadcrumb" aria-label="Breadcrumb">
    <div class="container">
      <ol>
        <li><a href="/">Strikingly</a></li>
        <li aria-hidden="true">/</li>
        <li><span aria-current="page">AI Generators</span></li>
      </ol>
    </div>
  </nav>

  <main>
    <section class="hero" aria-labelledby="hero-heading">
      <div class="container">
        <div class="hero-content">
          <h1 id="hero-heading">
            <span id="hero-line1">BUILD ANY KIND OF SITE</span>
            <span class="gradient-text" id="hero-line2">WITH AI, IN AN INSTANT</span>
          </h1>
          <p id="hero-subtitle">Browse the right generator for what you're building, or jump straight into our AI site builder.</p>
          <div class="hero-actions">
            <a href="/s/ai_site_builder" class="btn btn-primary btn-large">START BUILDING - IT'S FREE</a>
            <a href="#all-generators" class="btn btn-ghost btn-large">BROWSE GENERATORS</a>
          </div>
        </div>
        <div class="hero-illustration" aria-hidden="true">
          <svg viewBox="0 0 400 320" width="420" height="336" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Website mockup illustration">
            <defs>
              <linearGradient id="heroGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style="stop-color:#7671FF;stop-opacity:1" />
                <stop offset="100%" style="stop-color:#CB0C9F;stop-opacity:1" />
              </linearGradient>
            </defs>
            <rect x="30" y="40" width="340" height="240" rx="8" fill="none" stroke="#8159BB" stroke-width="2" opacity="0.35" />
            <rect x="55" y="70" width="120" height="14" rx="3" fill="none" stroke="#8159BB" stroke-width="2" opacity="0.5" />
            <circle cx="330" cy="77" r="10" fill="none" stroke="#8159BB" stroke-width="2" opacity="0.45" />
            <rect x="55" y="110" width="290" height="110" rx="4" fill="none" stroke="#8159BB" stroke-width="2" opacity="0.35" />
            <rect x="75" y="130" width="100" height="8" rx="2" fill="#8159BB" opacity="0.25" />
            <rect x="75" y="150" width="180" height="6" rx="2" fill="#8159BB" opacity="0.18" />
            <rect x="75" y="165" width="160" height="6" rx="2" fill="#8159BB" opacity="0.18" />
            <rect x="75" y="185" width="80" height="24" rx="4" fill="none" stroke="#8159BB" stroke-width="2" opacity="0.45" />
            <rect x="55" y="240" width="90" height="10" rx="2" fill="#8159BB" opacity="0.2" />
            <rect x="155" y="240" width="90" height="10" rx="2" fill="#8159BB" opacity="0.2" />
            <rect x="255" y="240" width="90" height="10" rx="2" fill="#8159BB" opacity="0.2" />
            <path d="M55 240 L145 240" stroke="url(#heroGrad)" stroke-width="2" stroke-linecap="round" opacity="0.7" />
          </svg>
        </div>
      </div>
    </section>
"""


def render_featured():
    out = ["""    <section class="section" aria-labelledby="featured-heading">\n      <div class="container">\n        <h2 id="featured-heading" class="section-heading">FEATURED GENERATORS</h2>\n        <p class="section-subheading">A few common starting points.</p>\n        <div class="featured-grid">\n"""]
    for name, slug, desc, tag in FEATURED:
        out.append(f"""          <article class="card"><a href="/generators/{slug}"><h3 class="card-title">{name}</h3><p class="card-desc">{desc}</p><span class="tag">{tag}</span></a></article>\n""")
    out.append("""        </div>\n      </div>\n    </section>\n""")
    return "".join(out)


def render_categories():
    out = ["""    <section class="section" aria-labelledby="categories-heading" style="background: var(--light-bg);">\n      <div class="container">\n        <h2 id="categories-heading" class="section-heading">BROWSE BY CATEGORY</h2>\n        <p class="section-subheading">Jump to the section that matches what you're building.</p>\n        <div class="category-grid">\n"""]
    arrow = """<svg class="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>"""
    for title, key, desc in CATEGORIES:
        out.append(f"""          <a href="/generators#{key}" class="card category-card">\n            <div class="cat-thumb" aria-hidden="true">{CAT_THUMB[key]}</div>\n            <h3 class="card-title">{title}</h3>\n            <p class="card-desc">{desc}</p>\n            {arrow}\n          </a>\n""")
    out.append("""        </div>\n      </div>\n    </section>\n""")
    return "".join(out)


def render_directory():
    out = ["""    <section class="section" id="all-generators" aria-labelledby="directory-heading">\n      <div class="container">\n        <h2 id="directory-heading" class="section-heading">ALL GENERATORS</h2>\n        <p class="section-subheading">Sixty-plus generators, organized by what you're building.</p>\n\n        <div class="directory-search">\n          <div class="search-wrap">\n            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>\n            <input type="search" id="generator-search" class="search-input" aria-label="Search generators" placeholder="Search generators..." autocomplete="off" />\n          </div>\n          <div class="search-meta">\n            <span class="result-count" id="result-count" aria-live="polite"></span>\n            <button type="button" class="show-all-btn is-hidden" id="clear-search">CLEAR SEARCH</button>\n          </div>\n          <div class="empty-state" id="empty-state">\n            <p>No generators match your search.</p>\n            <button type="button" class="show-all-btn" id="empty-clear">CLEAR SEARCH</button>\n            <p style="margin-block-start: 10px;"><a href="/s/ai_site_builder">Can't find it? Start with our AI builder.</a></p>\n          </div>\n        </div>\n\n        <div id="directory-subsections">\n"""]
    for key, info in DIRECTORY.items():
        cat = info["title"].lower()
        out.append(f"""          <div class="directory-subsection" id="{key}">\n            <h3>{info['title']}</h3>\n            <p class="cat-desc">{info['desc']}</p>\n            <div class="directory-grid" data-grid="{key}">\n""")
        for name, slug, desc in info["cards"]:
            out.append(f"""              <article class="card directory-card" data-category="{cat}"><a href="/generators/{slug}"><div class="cat-thumb" aria-hidden="true">{CAT_THUMB[key]}</div><h3 class="card-title">{name}</h3><p class="card-desc">{desc}</p></a></article>\n""")
        out.append(f"""            </div>\n            <button type="button" class="show-all-btn is-hidden" data-toggle="{key}" aria-expanded="false">SHOW ALL {len(info['cards'])} GENERATORS</button>\n          </div>\n""")
    out.append("""        </div>\n      </div>\n    </section>\n""")
    return "".join(out)


def render_how():
    return """    <section class="section" aria-labelledby="how-heading" style="background: var(--light-bg);">
      <div class="container">
        <h2 id="how-heading" class="section-heading">HOW IT WORKS</h2>
        <p class="section-subheading">From idea to live site in three steps.</p>
        <div class="steps">
          <div class="step"><div class="step-number" aria-hidden="true">1</div><div><h3 class="step-title">PICK A GENERATOR</h3><p>Browse by category or search to find one that fits your goal.</p></div></div>
          <div class="step"><div class="step-number" aria-hidden="true">2</div><div><h3 class="step-title">DESCRIBE YOUR SITE</h3><p>Tell our AI builder about your business in a sentence or two.</p></div></div>
          <div class="step"><div class="step-number" aria-hidden="true">3</div><div><h3 class="step-title">GENERATE AND PUBLISH</h3><p>Get a fully built site in seconds. Customize anything, then go live.</p></div></div>
        </div>
      </div>
    </section>
"""


def render_why():
    return """    <section class="section" aria-labelledby="why-heading">
      <div class="container">
        <h2 id="why-heading" class="section-heading">WHY STRIKINGLY</h2>
        <p class="section-subheading">Built for speed, simplicity, and results.</p>
        <div class="why-grid">
          <div class="why-cell">
            <svg class="why-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
            <div><h3>LIVE IN SECONDS</h3><p>Describe your site, we build it. No setup, no learning curve.</p></div>
          </div>
          <div class="why-cell">
            <svg class="why-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>
            <div><h3>MOBILE BY DEFAULT</h3><p>Every generator produces responsive sites that work on any device.</p></div>
          </div>
          <div class="why-cell">
            <svg class="why-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
            <div><h3>FREE TO START</h3><p>Generate, customize, and publish without a credit card.</p></div>
          </div>
        </div>
      </div>
    </section>
"""


def render_faq():
    out = ["""    <section class="section" aria-labelledby="faq-heading" style="background: var(--light-bg);">\n      <div class="container">\n        <h2 id="faq-heading" class="section-heading">FREQUENTLY ASKED QUESTIONS</h2>\n        <p class="section-subheading">Quick answers about AI site generators.</p>\n        <div class="faq-list" id="faq-list">\n"""]
    for i, (q, a) in enumerate(FAQ):
        out.append(f"""          <div class="faq-item" data-faq="{i}">\n            <button type="button" class="faq-question" aria-expanded="true" aria-controls="faq-answer-{i}">{q}<svg class="faq-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="6 9 12 15 18 9"/></svg></button>\n            <div class="faq-answer" id="faq-answer-{i}"><p>{a}</p></div>\n          </div>\n""")
    out.append("""        </div>\n      </div>\n    </section>\n""")
    return "".join(out)


def render_closing():
    return """    <section class="section closing-cta" aria-labelledby="closing-heading">
      <div class="container">
        <h2 id="closing-heading">READY TO BUILD?</h2>
        <p>Pick a generator above, or jump straight into our AI builder.</p>
        <a href="/s/ai_site_builder" class="btn btn-primary btn-large">START WITH AI BUILDER</a>
      </div>
    </section>
  </main>
"""


def render_footer():
    return """  <footer class="site-footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-col"><a href="/" class="brand-logo">strikingly <span>AI</span></a></div>
        <div class="footer-col">
          <h4>Product</h4>
          <ul>
            <li><a href="/s/ai_site_builder">AI Site Builder</a></li>
            <li><a href="/templates">Templates</a></li>
            <li><a href="/pricing">Pricing</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Company</h4>
          <ul>
            <li><a href="/about">About</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/support">Support</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Legal</h4>
          <ul>
            <li><a href="/terms">Terms of Service</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Generators</h4>
          <ul>
            <li><a href="#websites">Websites</a></li>
            <li><a href="#stores">Online Stores</a></li>
            <li><a href="#portfolios">Portfolios</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <span>&copy; 2026 Strikingly. All rights reserved.</span>
      </div>
    </div>
  </footer>
"""


def render_js():
    return r"""
  <script>
    (function () {
      "use strict";
      const strings = {
        en: {
          resultCountZero: "No generators match",
          resultCountOne: "1 generator matches",
          resultCountMany: "{count} generators match",
          clearSearch: "CLEAR SEARCH",
          showAll: "SHOW ALL {count} GENERATORS",
          showLess: "SHOW LESS",
        }
      };
      const t = strings.en;
      function filterDirectory(query) {
        const q = query.trim().toLowerCase();
        const subsections = document.querySelectorAll(".directory-subsection");
        let totalMatches = 0;
        const clearBtn = document.getElementById("clear-search");
        const emptyState = document.getElementById("empty-state");
        const resultCount = document.getElementById("result-count");
        subsections.forEach(function (sub) {
          const cards = sub.querySelectorAll(".directory-card");
          let sectionMatches = 0;
          cards.forEach(function (card) {
            const cat = (card.dataset.category || "").toLowerCase();
            const text = card.textContent.toLowerCase();
            const match = !q || cat.includes(q) || text.includes(q);
            if (!q && card.classList.contains("is-collapsed-by-js")) {
              card.classList.add("is-hidden");
            } else {
              card.classList.toggle("is-hidden", !match);
            }
            if (match) sectionMatches++;
          });
          sub.style.display = sectionMatches > 0 ? "" : "none";
          totalMatches += sectionMatches;
          const toggle = sub.querySelector("[data-toggle]");
          if (toggle) {
            const collapsedCount = sub.querySelectorAll(".directory-card.is-collapsed-by-js").length;
            toggle.classList.toggle("is-hidden", collapsedCount === 0 || q);
          }
        });
        if (q) {
          clearBtn.classList.remove("is-hidden");
          resultCount.textContent = totalMatches === 0 ? t.resultCountZero : totalMatches === 1 ? t.resultCountOne : t.resultCountMany.replace("{count}", totalMatches);
          emptyState.classList.toggle("is-visible", totalMatches === 0);
        } else {
          clearBtn.classList.add("is-hidden");
          resultCount.textContent = "";
          emptyState.classList.remove("is-visible");
        }
      }
      function initShowAll() {
        const visibleCount = 6;
        const subsections = document.querySelectorAll(".directory-subsection");
        subsections.forEach(function (sub) {
          const grid = sub.querySelector(".directory-grid");
          const cards = Array.from(grid.querySelectorAll(".directory-card"));
          if (cards.length <= visibleCount) return;
          cards.slice(visibleCount).forEach(function (card) {
            card.classList.add("is-collapsed-by-js");
            card.classList.add("is-hidden");
          });
          const toggle = sub.querySelector("[data-toggle]");
          if (toggle) {
            toggle.textContent = t.showAll.replace("{count}", cards.length);
            toggle.classList.remove("is-hidden");
            toggle.addEventListener("click", function () {
              const isExpanded = toggle.getAttribute("aria-expanded") === "true";
              cards.slice(visibleCount).forEach(function (card) {
                card.classList.toggle("is-hidden", isExpanded);
                card.classList.toggle("is-collapsed-by-js", isExpanded);
              });
              toggle.setAttribute("aria-expanded", String(!isExpanded));
              toggle.textContent = isExpanded ? t.showAll.replace("{count}", cards.length) : t.showLess;
            });
          }
        });
      }
      function initSearch() {
        const input = document.getElementById("generator-search");
        const clearBtn = document.getElementById("clear-search");
        const emptyClear = document.getElementById("empty-clear");
        input.addEventListener("input", function () { filterDirectory(input.value); });
        clearBtn.addEventListener("click", function () { input.value = ""; filterDirectory(""); input.focus(); });
        emptyClear.addEventListener("click", function () { input.value = ""; filterDirectory(""); input.focus(); });
      }
      function initFAQ() {
        const list = document.getElementById("faq-list");
        const items = list.querySelectorAll(".faq-item");
        items.forEach(function (item, index) {
          if (index !== 0) {
            item.classList.add("is-collapsed");
            item.querySelector(".faq-question").setAttribute("aria-expanded", "false");
          }
        });
        list.addEventListener("click", function (e) {
          const btn = e.target.closest(".faq-question");
          if (!btn) return;
          const item = btn.closest(".faq-item");
          const isCollapsed = item.classList.contains("is-collapsed");
          item.classList.toggle("is-collapsed", !isCollapsed);
          btn.setAttribute("aria-expanded", String(isCollapsed));
        });
      }
      function init() {
        initShowAll();
        initSearch();
        initFAQ();
      }
      if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init);
      } else {
        init();
      }
    })();
  </script>
</body>
</html>
"""


def main():
    html = (
        render_head()
        + render_body_start()
        + render_featured()
        + render_categories()
        + render_directory()
        + render_how()
        + render_why()
        + render_faq()
        + render_closing()
        + render_footer()
        + render_js()
    )
    with open(OUT, "w", encoding="utf-8") as f:
        f.write(html)
    print(f"Generated {OUT} ({len(html)} bytes)")


if __name__ == "__main__":
    main()
