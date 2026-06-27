const fs = require('fs');

const strings = {
  en: {
    heroH1Line1: "BUILD ANY KIND OF SITE",
    heroH1Line2: "WITH AI, IN AN INSTANT",
    heroSub: "Browse the right generator for what you're building, or jump straight into our AI site builder.",
    heroCtaPrimary: "START BUILDING - IT'S FREE",
    heroCtaSecondary: "BROWSE GENERATORS",
    featuredHeading: "FEATURED GENERATORS",
    featuredSub: "A few common starting points.",
    browseHeading: "BROWSE BY CATEGORY",
    allHeading: "ALL GENERATORS",
    allSub: "Sixty-plus generators, organized by what you're building.",
    searchPlaceholder: "Search generators...",
    searchAriaLabel: "Search generators",
    searchEmpty: "Can't find it?",
    searchEmptyCta: "Start with our AI builder.",
    howItWorksHeading: "HOW IT WORKS",
    whyStrikinglyHeading: "WHY STRIKINGLY",
    faqHeading: "FREQUENTLY ASKED QUESTIONS",
    closingHeading: "READY TO BUILD?",
    closingSub: "Pick a generator above, or jump straight into our AI builder.",
    closingCta: "START WITH AI BUILDER"
  }
};

const categories = [
  { id: "websites", name: "Websites", desc: "AI-built business and personal sites for any goal.", slug: "websites" },
  { id: "landing-pages", name: "Landing Pages", desc: "Single-page sites built to convert visitors fast.", slug: "landing-pages" },
  { id: "portfolios", name: "Portfolios", desc: "Showcase your work with a clean, focused site.", slug: "portfolios" },
  { id: "blogs", name: "Blogs", desc: "Publish-ready blogs with built-in SEO basics.", slug: "blogs" },
  { id: "stores", name: "Online Stores", desc: "Sell products online with payments built in.", slug: "stores" },
  { id: "link-in-bio", name: "Link-in-Bio", desc: "One link, all your places. Made for creators.", slug: "link-in-bio" }
];

const featured = [
  { name: "AI Website Generator", desc: "Describe your business, get a full site", cat: "Websites" },
  { name: "Free Portfolio Generator", desc: "For creatives, in minutes, no fee", cat: "Portfolios" },
  { name: "AI Landing Page Maker", desc: "One-page sites built to convert", cat: "Landing Page" },
  { name: "Online Store Builder", desc: "Start selling without writing code", cat: "Store" },
  { name: "Link-in-Bio Generator", desc: "One link for all your channels", cat: "Link-in-Bio" },
  { name: "One-Page Website Builder", desc: "Simple sites, single scroll", cat: "Websites" },
  { name: "Wedding Website Generator", desc: "Share your day with guests", cat: "Websites" },
  { name: "Restaurant Website Builder", desc: "Menu, hours, reservations, done", cat: "Websites" },
  { name: "Blog Generator for Beginners", desc: "Publish-ready in minutes", cat: "Blogs" }
];

const slugify = (text) => text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');

const allGenerators = {
  "websites": [
    { name: "AI Website Generator", desc: "Describe your business, get a full site" },
    { name: "Free Website Builder for Photographers", desc: "Showcase your photo galleries beautifully" },
    { name: "One-Page Wedding Website Builder", desc: "Share your day with guests easily" },
    { name: "Small Business Website Generator", desc: "Professional sites for local businesses" },
    { name: "Restaurant Website Builder", desc: "Menu, hours, reservations, done" },
    { name: "Yoga Studio Website Builder", desc: "Class schedules and online booking" },
    { name: "No-Code Website Builder", desc: "Create anything without learning to code" },
    { name: "Real Estate Website Generator", desc: "Property listings mapped elegantly" },
    { name: "Event Website Maker", desc: "Registrations, speakers, and schedules" }
  ],
  "landing-pages": [
    { name: "AI Landing Page Maker", desc: "One-page sites built to convert" },
    { name: "App Download Landing Page builder", desc: "Get more downloads for your app" },
    { name: "Lead Generation Page Generator", desc: "Collect emails and contacts fast" },
    { name: "Product Launch Landing Page", desc: "Build hype before you publish" },
    { name: "Webinar Registration Page Builder", desc: "Sign up attendees in seconds" },
    { name: "Ebook Landing Page Generator", desc: "Offer digital downloads securely" },
    { name: "Course Sales Page Builder", desc: "Sell your educational content online" },
    { name: "Waitlist Page Generator", desc: "Gather a crowd for your next big thing" },
    { name: "Free Landing Page Maker", desc: "High conversion without the high cost" }
  ],
  "portfolios": [
    { name: "Free Portfolio Generator", desc: "For creatives, in minutes, no fee" },
    { name: "Portfolio Generator for Designers", desc: "Display UX/UI case studies beautifully" },
    { name: "Writer Portfolio Maker", desc: "Showcase your articles and publications" },
    { name: "Photography Portfolio Builder", desc: "High-resolution photo galleries" },
    { name: "Video Portfolio Generator", desc: "Embed reels and short films easily" },
    { name: "Developer Portfolio Builder", desc: "Highlight your GitHub repos and projects" },
    { name: "Student Portfolio Maker", desc: "Stand out to employers before graduation" },
    { name: "Architecture Portfolio Generator", desc: "Display blueprints and project visuals" },
    { name: "Creative Agency Portfolio Builder", desc: "Present your team's best work" }
  ],
  "blogs": [
    { name: "Blog Generator for Beginners", desc: "Publish-ready in minutes" },
    { name: "Travel Blog Builder", desc: "Share your journeys and photo diaries" },
    { name: "Food Blog Generator", desc: "Publish recipes and cooking tips" },
    { name: "Tech Blog Maker", desc: "Write tutorials and share code snippets" },
    { name: "Review Blog Builder", desc: "Affiliate links and product reviews" },
    { name: "Lifestyle Blog Generator", desc: "Personal stories and daily musings" },
    { name: "Free Blog Maker", desc: "Start writing without upfront costs" },
    { name: "SEO Blog Builder", desc: "Optimized for search engines instantly" },
    { name: "Company Blog Generator", desc: "Share news and updates with customers" }
  ],
  "stores": [
    { name: "Online Store Builder", desc: "Start selling without writing code" },
    { name: "Online Store Builder for Restaurants", desc: "Take food orders for delivery" },
    { name: "Digital Product Store Generator", desc: "Sell ebooks, music, and courses" },
    { name: "Clothing Brand Store Builder", desc: "Apparel, sizes, and variations" },
    { name: "Subscription Store Maker", desc: "Recurring payments for your services" },
    { name: "Dropshipping Store Builder", desc: "Connect inventory to global suppliers" },
    { name: "Art Print Store Generator", desc: "Sell physical copies of your artwork" },
    { name: "Free Store Maker", desc: "Sell a few items at zero monthly cost" },
    { name: "Craft Store Builder", desc: "Handmade goods and unique items" }
  ],
  "link-in-bio": [
    { name: "Link-in-Bio Generator", desc: "One link for all your channels" },
    { name: "Creator Link-in-Bio Maker", desc: "Highlight your latest videos and posts" },
    { name: "Musician Link-in-Bio Builder", desc: "Links to Spotify, Apple Music, and merch" },
    { name: "TikTok Link-in-Bio Generator", desc: "Convert viewers into subscribers" },
    { name: "Instagram Link-in-Bio Maker", desc: "Bypass the single-link limit easily" },
    { name: "Podcaster Link-in-Bio Builder", desc: "Direct fans to their favorite app" },
    { name: "Author Link-in-Bio Generator", desc: "Links to Amazon, Goodreads, and site" },
    { name: "Free Link-in-Bio Maker", desc: "Simple, fast, and completely free" },
    { name: "Business Link-in-Bio Builder", desc: "Direct traffic to sales and support" }
  ]
};

const faq = [
  { q: "What is an AI site generator?", a: "An AI site generator uses artificial intelligence to instantly create a custom website based on just a few details about your business. Instead of spending hours designing and formatting, the AI writes the copy, chooses a layout, and selects styling tailored to your specific goal." },
  { q: "How is a generator different from a template?", a: "Templates require you to manually replace generic placeholder text and images with your own content before publishing. A generator essentially builds a unique template pre-filled with customized, relevant text and structure right from the start, significantly reducing the amount of editing you need to do." },
  { q: "Are these generators free to use?", a: "Yes, you can generate and publish your initial website for free without a credit card. Paid plans are available if you want to connect a custom domain or access advanced features." },
  { q: "What kinds of sites can I build?", a: "You can build almost anything. We offer generators for complete small business websites, landing pages built for high conversion, online stores, personal portfolios, blogs, and link-in-bio pages." },
  { q: "Can I customize what the generator produces?", a: "Absolutely. The generator gives you a huge head start, but you retain full control. After the AI creates the initial site, you use our drag-and-drop editor to change text, images, colors, and layout exactly how you want." },
  { q: "Do generated sites work on mobile?", a: "Yes, every site generated by Strikingly is fully responsive. It will automatically look great and function perfectly on desktop computers, tablets, and smartphones without any extra work on your part." }
];


function generateHTML() {
  const catIcons = {
    "websites": '<svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-purple-600"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>',
    "landing-pages": '<svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-purple-600"><polygon points="3 3 21 3 12 21 3 3"/><path d="M12 10v4"/></svg>',
    "portfolios": '<svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-purple-600"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>',
    "blogs": '<svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-purple-600"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" x2="12" y1="3" y2="15"/></svg>',
    "stores": '<svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-purple-600"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>',
    "link-in-bio": '<svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-purple-600"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>'
  };

  const html = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>AI Website Generators - Build Any Site in Seconds | Strikingly</title>
    <meta name="description" content="Browse Strikingly's AI-powered website generators. Choose one for your industry, goal, or site type and create a website in seconds, no code required.">
    <link rel="canonical" href="https://www.strikingly.com/generators">
    <meta property="og:title" content="AI Website Generators - Build Any Site in Seconds | Strikingly">
    <meta property="og:description" content="Browse Strikingly's AI-powered website generators. Choose one for your industry, goal, or site type and create a website in seconds.">
    <meta property="og:url" content="https://www.strikingly.com/generators">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@700&family=Open+Sans:wght@400;600&display=swap" rel="stylesheet">
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [{
        "@type": "ListItem",
        "position": 1,
        "name": "Strikingly",
        "item": "https://www.strikingly.com/"
      },{
        "@type": "ListItem",
        "position": 2,
        "name": "AI Generators"
      }]
    }
    </script>
    <link rel="stylesheet" href="/src/index.css" />
    <style>
      :root {
        --brand-purple: #8159BB;
        --text-body: #636972;
        --text-heading: #4B5056;
        --text-hero: #2E2E2F;
        --card-border: #C6C9CD;
        --divider: #E2E4E7;
        --bg-light: #F4F6F8;
      }
      body {
        font-family: 'Open Sans', system-ui, sans-serif;
        color: var(--text-body);
        background-color: #FFFFFF;
        -webkit-font-smoothing: antialiased;
      }
      h1, h2, h3, .font-heading {
        font-family: 'Brandon Grotesque', 'Josefin Sans', sans-serif;
        font-weight: 700;
        text-transform: uppercase;
        line-height: 1.2;
      }
      .ai-gradient-text {
        background: linear-gradient(to right, #7671FF, #CB0C9F);
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
      }
      .ai-gradient-bg {
        background: linear-gradient(to right, #7671FF, #CB0C9F);
      }
      .card {
        background: #FFFFFF;
        border: 1px solid var(--card-border);
        border-radius: 3px;
        padding: 20px;
        transition: all 0.2s ease;
      }
      .card-link:hover .card {
        box-shadow: 0 4px 12px rgba(0,0,0,0.08);
        border-color: var(--brand-purple);
      }
      
      .btn {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        height: 36px;
        padding: 9px 15px;
        border-radius: 4px;
        font-family: 'Brandon Grotesque', 'Josefin Sans', sans-serif;
        font-weight: 700;
        text-transform: uppercase;
        font-size: 14px;
        text-decoration: none;
        transition: opacity 0.2s ease;
      }
      .btn:hover {
        opacity: 0.9;
      }
      .btn-lg {
        height: 44px;
        padding: 0 24px;
      }
      .btn-ghost {
        background: transparent;
        border: 1px solid var(--brand-purple);
        color: var(--brand-purple);
      }
      
      .tag {
        font-family: 'Brandon Grotesque', 'Josefin Sans', sans-serif;
        text-transform: uppercase;
        font-size: 11px;
        padding: 2px 6px;
        border-radius: 3px;
        color: var(--brand-purple);
        border: 1px solid var(--brand-purple);
      }

      .collapse-grid {
        display: grid;
        grid-template-columns: repeat(1, minmax(0, 1fr));
        gap: 20px;
      }
      @media (min-width: 640px) { .collapse-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
      @media (min-width: 1024px) { .collapse-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); } }
      
      /* Progressively collapse items starting from 4th (JS will apply class if needed) */
      .js-enabled .js-collapse.hide-initial {
        max-height: 0 !important;
        opacity: 0;
        margin-top: -20px;
        pointer-events: none;
      }
      
      .hero-wash {
        background: radial-gradient(circle at 100% 0%, rgba(129, 89, 187, 0.08) 0%, rgba(255,255,255,0) 50%);
      }
      .focus-ring:focus-visible {
        outline: 2px solid var(--brand-purple);
        outline-offset: 2px;
      }
    </style>
    <noscript>
      <style>
        .faq-content { display: block !important; }
        .show-all-wrapper { display: none !important; }
        .expandable-wrapper.js-collapse { max-height: none !important; opacity: 1 !important; }
        .hide-initial { max-height: none !important; opacity: 1 !important; }
      </style>
    </noscript>
  </head>
  <body>
    <!-- Top Bar -->
    <header class="bg-white border-b border-[#E2E4E7] h-[60px] flex items-center px-4 max-w-[1200px] mx-auto w-full">
      <div class="font-heading text-xl tracking-wider text-[#2E2E2F]" aria-label="Strikingly AI Logo">
        strikingly <span class="ai-gradient-text">AI</span>
      </div>
    </header>

    <!-- Breadcrumb -->
    <div class="px-4 max-w-[1200px] mx-auto pt-4">
      <nav aria-label="Breadcrumb">
        <ol class="flex items-center text-[12px] text-[var(--text-body)]">
          <li><a href="/" class="hover:text-[var(--brand-purple)] focus-ring">Strikingly</a></li>
          <li class="mx-2 text-[var(--brand-purple)]" aria-hidden="true">></li>
          <li aria-current="page">AI Generators</li>
        </ol>
      </nav>
    </div>

    <main class="w-full">
      <!-- Hero -->
      <section class="hero-wash py-[60px] md:py-[80px] px-4">
        <div class="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 class="text-[32px] md:text-[48px] mb-4">
              <span class="block text-[var(--text-hero)]">${strings.en.heroH1Line1}</span>
              <span class="block ai-gradient-text">${strings.en.heroH1Line2}</span>
            </h1>
            <p class="text-[16px] md:text-[18px] mb-8 max-w-lg text-[var(--text-body)]">
              ${strings.en.heroSub}
            </p>
            <div class="flex flex-col sm:flex-row gap-[10px]">
              <a href="/s/ai_site_builder" class="btn btn-lg ai-gradient-bg text-white focus-ring">
                ${strings.en.heroCtaPrimary}
              </a>
              <a href="#all-generators" class="btn btn-lg btn-ghost focus-ring">
                ${strings.en.heroCtaSecondary}
              </a>
            </div>
          </div>
          <div class="flex justify-center md:justify-end">
            <!-- Hero Illustration Placeholder -->
            <svg aria-hidden="true" width="400" height="300" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="20" y="20" width="360" height="260" rx="8" fill="#F4F6F8" stroke="#E2E4E7" stroke-width="2"/>
              <rect x="40" y="40" width="120" height="20" rx="4" fill="#E2E4E7"/>
              <rect x="40" y="80" width="320" height="120" rx="4" fill="#8159BB" fill-opacity="0.1"/>
              <circle cx="200" cy="140" r="24" fill="#8159BB" fill-opacity="0.2"/>
              <rect x="40" y="220" width="100" height="16" rx="4" fill="#E2E4E7"/>
              <rect x="150" y="220" width="100" height="16" rx="4" fill="#E2E4E7"/>
            </svg>
          </div>
        </div>
      </section>

      <!-- Featured -->
      <section class="py-[40px] px-4 max-w-[1200px] mx-auto">
        <h2 class="text-[26px] md:text-[32px] text-[var(--text-heading)] mb-1">${strings.en.featuredHeading}</h2>
        <p class="mb-[40px] text-[var(--text-body)]">${strings.en.featuredSub}</p>
        
        <div class="collapse-grid">
          ${featured.map(f => `
            <a href="/generators/${slugify(f.name)}" class="card-link block focus-ring">
              <article class="card h-full flex flex-col justify-between">
                <div>
                  <h3 class="font-heading text-[#2E2E2F] text-[18px] mb-2">${f.name}</h3>
                  <p class="text-[14px] leading-snug mb-4">${f.desc}</p>
                </div>
                <div class="mt-auto">
                  <span class="tag">${f.cat}</span>
                </div>
              </article>
            </a>
          `).join('')}
        </div>
      </section>

      <!-- Browse by Category -->
      <section class="py-[40px] bg-[var(--bg-light)] px-4">
        <div class="max-w-[1200px] mx-auto">
          <h2 class="text-[26px] md:text-[32px] text-[var(--text-heading)] mb-[40px]">${strings.en.browseHeading}</h2>
          
          <div class="collapse-grid">
            ${categories.map(c => `
              <a href="#${c.slug}" class="card-link block focus-ring">
                <article class="card h-full">
                  <div class="mb-4">
                    ${catIcons[c.slug]}
                  </div>
                  <h3 class="font-heading text-[#2E2E2F] text-[18px] mb-2 flex items-center justify-between">
                    ${c.name}
                    <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-[var(--brand-purple)]"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                  </h3>
                  <p class="text-[14px]">${c.desc}</p>
                </article>
              </a>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- All Generators Directory -->
      <section id="all-generators" class="py-[40px] px-4 max-w-[1200px] mx-auto">
        <div class="mb-[40px]">
          <h2 class="text-[26px] md:text-[32px] text-[var(--text-heading)] mb-1">${strings.en.allHeading}</h2>
          <p class="mb-[20px] text-[var(--text-body)]">${strings.en.allSub}</p>
          
          <!-- Search -->
          <div class="relative max-w-[480px]">
            <svg aria-hidden="true" class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
            <input 
              type="search" 
              id="generator-search"
              aria-label="${strings.en.searchAriaLabel}" 
              placeholder="${strings.en.searchPlaceholder}"
              class="w-full h-11 pl-10 pr-4 border border-[var(--card-border)] rounded-[4px] focus:outline-none focus:border-[var(--brand-purple)]"
            >
            <div id="search-count" class="absolute right-0 top-full mt-1 text-[12px] text-[var(--brand-purple)] font-semibold hidden"></div>
          </div>
        </div>

        <div id="search-empty" class="hidden py-10 text-center bg-[var(--bg-light)] rounded-[4px]">
          <p class="text-[16px] mb-4">${strings.en.searchEmpty}</p>
          <a href="/s/ai_site_builder" class="btn btn-ghost focus-ring">${strings.en.searchEmptyCta}</a>
          <button type="button" id="clear-search-btn" class="block mx-auto mt-4 px-3 py-1 text-sm underline text-[var(--text-body)] hover:text-gray-900 focus-ring">Clear search</button>
        </div>

        <div id="directory-content">
          ${categories.map(c => `
            <div class="category-section mb-[40px]" id="${c.slug}">
              <div class="mb-[20px]">
                <h3 class="text-[20px] md:text-[24px] text-[var(--text-heading)]">${c.name}</h3>
                <p class="text-[14px] mt-1">${c.desc}</p>
              </div>
              
              <div class="collapse-grid directory-grid mb-5" data-category="${c.slug}">
                ${allGenerators[c.slug].slice(0, 3).map((g) => `
                  <a href="/generators/${slugify(g.name)}" class="card-link block generator-card focus-ring" data-name="${g.name.toLowerCase()}" data-desc="${g.desc.toLowerCase()}">
                    <article class="card h-full flex items-start gap-4">
                      <div class="shrink-0 mt-1">
                        ${catIcons[c.slug]}
                      </div>
                      <div>
                        <h4 class="font-heading text-[#2E2E2F] text-[16px] leading-snug mb-1">${g.name}</h4>
                        <p class="text-[14px] leading-snug">${g.desc}</p>
                      </div>
                    </article>
                  </a>
                `).join('')}
              </div>
              
              ${allGenerators[c.slug].length > 3 ? `
                <div id="${c.slug}-wrapper" class="expandable-wrapper js-collapse transition-all duration-300 overflow-hidden" data-wrapper="${c.slug}">
                  <div class="collapse-grid directory-grid" data-category="${c.slug}">
                    ${allGenerators[c.slug].slice(3).map((g) => `
                      <a href="/generators/${slugify(g.name)}" class="card-link block generator-card focus-ring" data-name="${g.name.toLowerCase()}" data-desc="${g.desc.toLowerCase()}">
                        <article class="card h-full flex items-start gap-4">
                          <div class="shrink-0 mt-1">
                            ${catIcons[c.slug]}
                          </div>
                          <div>
                            <h4 class="font-heading text-[#2E2E2F] text-[16px] leading-snug mb-1">${g.name}</h4>
                            <p class="text-[14px] leading-snug">${g.desc}</p>
                          </div>
                        </article>
                      </a>
                    `).join('')}
                  </div>
                </div>
                <div class="mt-6 text-center show-all-wrapper js-only">
                  <button type="button" class="btn btn-ghost focus-ring show-all-btn" aria-expanded="false" aria-controls="${c.slug}-wrapper">
                    Show all ${allGenerators[c.slug].length} generators
                  </button>
                </div>
              ` : ''}
              
              <hr class="mt-[40px] border-t border-[var(--divider)]">
            </div>
          `).join('')}
        </div>
      </section>

      <!-- How it Works -->
      <section class="py-[40px] bg-[var(--bg-light)] px-4">
        <div class="max-w-[1200px] mx-auto">
          <h2 class="text-[26px] md:text-[32px] text-[var(--text-heading)] mb-[40px] text-center">${strings.en.howItWorksHeading}</h2>
          
          <div class="grid md:grid-cols-3 gap-[40px]">
            <!-- Step 1 -->
            <div class="text-center">
              <div class="w-12 h-12 rounded-full bg-[var(--brand-purple)] text-white font-heading text-xl flex items-center justify-center mx-auto mb-4">1</div>
              <h3 class="font-heading text-[18px] text-[#2E2E2F] mb-2">PICK A GENERATOR</h3>
              <p class="text-[14px]">Browse by category or search to find one that fits your goal.</p>
            </div>
            <!-- Step 2 -->
            <div class="text-center">
              <div class="w-12 h-12 rounded-full bg-[var(--brand-purple)] text-white font-heading text-xl flex items-center justify-center mx-auto mb-4">2</div>
              <h3 class="font-heading text-[18px] text-[#2E2E2F] mb-2">DESCRIBE YOUR SITE</h3>
              <p class="text-[14px]">Tell our AI builder about your business in a sentence or two.</p>
            </div>
            <!-- Step 3 -->
            <div class="text-center">
              <div class="w-12 h-12 rounded-full bg-[var(--brand-purple)] text-white font-heading text-xl flex items-center justify-center mx-auto mb-4">3</div>
              <h3 class="font-heading text-[18px] text-[#2E2E2F] mb-2">GENERATE AND PUBLISH</h3>
              <p class="text-[14px]">Get a fully built site in seconds. Customize anything, then go live.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Why Strikingly -->
      <section class="py-[60px] px-4 max-w-[1200px] mx-auto">
        <h2 class="text-[26px] md:text-[32px] text-[var(--text-heading)] mb-[40px]">${strings.en.whyStrikinglyHeading}</h2>
        
        <div class="grid md:grid-cols-3 gap-[40px]">
           <div>
              <div class="mb-4">
                <svg aria-hidden="true" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-[var(--brand-purple)]"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
              </div>
              <h3 class="font-heading text-[18px] text-[#2E2E2F] mb-2">LIVE IN SECONDS</h3>
              <p class="text-[14px]">Describe your site, we build it. No setup, no learning curve.</p>
            </div>
            <div>
              <div class="mb-4">
                <svg aria-hidden="true" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-[var(--brand-purple)]"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/></svg>
              </div>
              <h3 class="font-heading text-[18px] text-[#2E2E2F] mb-2">MOBILE BY DEFAULT</h3>
              <p class="text-[14px]">Every generator produces responsive sites that work on any device.</p>
            </div>
            <div>
              <div class="mb-4">
                <svg aria-hidden="true" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-[var(--brand-purple)]"><path d="m12 14 4-4"/><path d="M3.34 19a10 10 0 1 1 17.32 0"/></svg>
              </div>
              <h3 class="font-heading text-[18px] text-[#2E2E2F] mb-2">FREE TO START</h3>
              <p class="text-[14px]">Generate, customize, and publish without a credit card.</p>
            </div>
        </div>
      </section>

      <!-- FAQ -->
      <section class="py-[40px] bg-[var(--bg-light)] px-4">
        <div class="max-w-[800px] mx-auto">
          <h2 class="text-[26px] md:text-[32px] text-[var(--text-heading)] mb-[40px] text-center">${strings.en.faqHeading}</h2>
          
          <div class="space-y-4">
            ${faq.map((item, index) => `
              <div class="bg-white border border-[var(--card-border)] rounded-[4px] faq-item">
                <button type="button" class="w-full text-left px-5 py-4 focus-ring flex justify-between items-center faq-toggle" aria-expanded="${index === 0 ? 'true' : 'false'}" aria-controls="faq-content-${index}">
                  <span class="font-heading text-[#2E2E2F] text-[16px]">${item.q}</span>
                  <svg aria-hidden="true" class="faq-icon transform transition-transform duration-200 ${index === 0 ? 'rotate-180' : ''}" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
                </button>
                <div id="faq-content-${index}" class="px-5 pb-4 faq-content ${index === 0 ? 'block' : 'hidden'}">
                  <p class="text-[14px] leading-relaxed">${item.a}</p>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- CTA -->
      <section class="py-[80px] px-4 text-center max-w-[1200px] mx-auto">
        <h2 class="text-[32px] md:text-[40px] text-[#2E2E2F] mb-4">${strings.en.closingHeading}</h2>
        <p class="text-[16px] md:text-[18px] mb-8">${strings.en.closingSub}</p>
        <a href="/s/ai_site_builder" class="btn btn-lg ai-gradient-bg text-white px-8 focus-ring">
          ${strings.en.closingCta}
        </a>
      </section>
    </main>

    <!-- Footer -->
    <footer class="bg-white border-t border-[var(--divider)] py-[60px] px-4">
      <div class="max-w-[1200px] mx-auto grid grid-cols-2 md:grid-cols-5 gap-8">
        <div class="col-span-2 md:col-span-1">
          <div class="font-heading text-lg tracking-wider text-[#2E2E2F] mb-4">strikingly <span class="ai-gradient-text">AI</span></div>
        </div>
        <div>
          <h4 class="font-heading text-[14px] text-[#2E2E2F] mb-4">PRODUCT</h4>
          <ul class="space-y-2 text-[14px]">
            <li><a href="/templates" class="hover:underline focus-ring">Templates</a></li>
            <li><a href="/pricing" class="hover:underline focus-ring">Pricing</a></li>
          </ul>
        </div>
        <div>
          <h4 class="font-heading text-[14px] text-[#2E2E2F] mb-4">COMPANY</h4>
          <ul class="space-y-2 text-[14px]">
            <li><a href="/about" class="hover:underline focus-ring">About Us</a></li>
            <li><a href="/blog" class="hover:underline focus-ring">Blog</a></li>
          </ul>
        </div>
        <div>
           <h4 class="font-heading text-[14px] text-[#2E2E2F] mb-4">SUPPORT</h4>
           <ul class="space-y-2 text-[14px]">
            <li><a href="/support" class="hover:underline focus-ring">Help Center</a></li>
          </ul>
        </div>
        <div>
          <h4 class="font-heading text-[14px] text-[#2E2E2F] mb-4">LEGAL</h4>
          <ul class="space-y-2 text-[14px]">
            <li><a href="/terms" class="hover:underline focus-ring">Terms of Service</a></li>
            <li><a href="/privacy" class="hover:underline focus-ring">Privacy Policy</a></li>
          </ul>
        </div>
      </div>
      <div class="max-w-[1200px] mx-auto mt-[60px] text-sm text-[var(--text-body)]">
        &copy; 2026 Strikingly. All rights reserved.
      </div>
    </footer>

    <style>
      /* Ensure js-only elements are hidden until JS is processed */
      html:not(.js-initial) .js-only {
        display: none !important;
      }
    </style>
    
    <script>
      // Mark that JS is running
      document.documentElement.classList.add('js-initial');
      
      document.addEventListener('DOMContentLoaded', () => {
        // Toggle JS enhanced classes
        document.documentElement.classList.add('js-enabled');
        
        // Progressively collapse directory cards natively via class
        const wrappersToHide = document.querySelectorAll('.js-collapse');
        wrappersToHide.forEach(el => {
          el.classList.add('hide-initial');
        });

        // 1. Show all toggles
        const sections = document.querySelectorAll('.category-section');
        sections.forEach(section => {
          const btn = section.querySelector('.show-all-btn');
          if(!btn) return;
          
          btn.addEventListener('click', () => {
            const isExpanded = btn.getAttribute('aria-expanded') === 'true';
            const wrapper = section.querySelector('.js-collapse');
            
            if(isExpanded) {
              wrapper.style.maxHeight = wrapper.scrollHeight + 'px';
              // Force reflow
              void wrapper.offsetWidth;
              wrapper.style.maxHeight = '0px';
              wrapper.style.opacity = '0';
              wrapper.style.marginTop = '-20px';
              wrapper.style.pointerEvents = 'none';
              
              btn.setAttribute('aria-expanded', 'false');
              btn.textContent = btn.textContent.replace('Hide', 'Show all');
              
              setTimeout(() => {
                 wrapper.classList.add('hide-initial');
                 wrapper.style.maxHeight = '';
                 wrapper.style.opacity = '';
                 wrapper.style.marginTop = '';
                 wrapper.style.pointerEvents = '';
              }, 300);
            } else {
              wrapper.classList.remove('hide-initial');
              wrapper.style.maxHeight = '0px';
              wrapper.style.opacity = '0';
              wrapper.style.marginTop = '-20px';
              
              // Force reflow
              void wrapper.offsetWidth;
              
              wrapper.style.maxHeight = wrapper.scrollHeight + 'px';
              wrapper.style.opacity = '1';
              wrapper.style.marginTop = '0';
              wrapper.style.pointerEvents = 'auto';
              
              btn.setAttribute('aria-expanded', 'true');
              btn.textContent = btn.textContent.replace('Show all', 'Hide');
              
              setTimeout(() => {
                 if (btn.getAttribute('aria-expanded') === 'true') {
                   wrapper.style.maxHeight = 'none';
                 }
              }, 300);
            }
          });
        });

        // 2. FAQ accordions
        const faqToggles = document.querySelectorAll('.faq-toggle');
        faqToggles.forEach(toggle => {
          toggle.addEventListener('click', () => {
            const isExpanded = toggle.getAttribute('aria-expanded') === 'true';
            const targetId = toggle.getAttribute('aria-controls');
            const targetContent = document.getElementById(targetId);
            const icon = toggle.querySelector('.faq-icon');
            
            if(isExpanded) {
              toggle.setAttribute('aria-expanded', 'false');
              targetContent.classList.replace('block', 'hidden');
              icon.classList.remove('rotate-180');
            } else {
              toggle.setAttribute('aria-expanded', 'true');
              targetContent.classList.replace('hidden', 'block');
              icon.classList.add('rotate-180');
            }
          });
        });

        // 3. Search
        const searchInput = document.getElementById('generator-search');
        const emptyState = document.getElementById('search-empty');
        const clearBtn = document.getElementById('clear-search-btn');
        const countDisplay = document.getElementById('search-count');
        const categorySections = document.querySelectorAll('.category-section');
        const allCards = document.querySelectorAll('.generator-card');

        function performSearch(query) {
          query = query.toLowerCase().trim();
          
          if(query === '') {
            // Restore baseline
            categorySections.forEach(sec => {
              sec.classList.remove('hidden');
              const wrapper = sec.querySelector('.js-collapse');
              const btn = sec.querySelector('.show-all-btn');
              if(btn && wrapper) {
                const isExpanded = btn.getAttribute('aria-expanded') === 'true';
                if(!isExpanded) {
                  wrapper.classList.add('hide-initial');
                } else {
                  wrapper.classList.remove('hide-initial');
                }
                btn.parentElement.classList.remove('hidden');
              }
            });
            allCards.forEach(c => c.classList.remove('hidden'));
            emptyState.classList.add('hidden');
            countDisplay.classList.add('hidden');
            return;
          }

          let totalMatches = 0;
          
          categorySections.forEach(section => {
            const catSlug = section.getAttribute('id');
            const sectionName = section.querySelector('h3').textContent.toLowerCase();
            const cards = section.querySelectorAll('.generator-card');
            let sectionHasMatch = false;
            
            cards.forEach(card => {
              const name = card.getAttribute('data-name');
              const desc = card.getAttribute('data-desc');
              
              if(name.includes(query) || desc.includes(query) || sectionName.includes(query)) {
                card.classList.remove('hidden');
                sectionHasMatch = true;
                totalMatches++;
              } else {
                card.classList.add('hidden');
              }
            });
            
            if(sectionHasMatch) {
              section.classList.remove('hidden');
              const wrapper = section.querySelector('.js-collapse');
              if(wrapper) {
                // Ensure wrapper is visible to show matched cards inside it
                wrapper.classList.remove('hide-initial');
                wrapper.style.maxHeight = 'none';
                wrapper.style.opacity = '1';
                wrapper.style.pointerEvents = 'auto';
              }
              const showAllWrap = section.querySelector('.show-all-wrapper');
              if(showAllWrap) showAllWrap.classList.add('hidden');
            } else {
              section.classList.add('hidden');
            }
          });
          
          if(totalMatches === 0) {
            emptyState.classList.remove('hidden');
            countDisplay.classList.add('hidden');
          } else {
            emptyState.classList.add('hidden');
            countDisplay.textContent = totalMatches + " generator" + (totalMatches === 1 ? "" : "s") + " match";
            countDisplay.classList.remove('hidden');
          }
        }

        searchInput.addEventListener('input', (e) => {
          performSearch(e.target.value);
        });

        clearBtn.addEventListener('click', () => {
          searchInput.value = '';
          performSearch('');
          searchInput.focus();
        });
      });
    </script>
  </body>
</html>`;

  fs.writeFileSync('index.html', html);
}
generateHTML();

