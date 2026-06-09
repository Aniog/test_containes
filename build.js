import fs from 'fs';
import path from 'path';

const currentDir = process.cwd();

const strings = {
  en: {
    logoAlt: "Strikingly AI",
    heroH1L1: "BUILD ANY KIND OF SITE",
    heroH1L2: "WITH AI, IN AN INSTANT",
    heroSub: "Browse the right generator for what you're building, or jump straight into our AI site builder.",
    heroCtaPrimary: "START BUILDING - IT'S FREE",
    heroCtaSecondary: "BROWSE GENERATORS",
    featuredHeading: "FEATURED GENERATORS",
    featuredSub: "A few common starting points.",
    catHeading: "BROWSE BY CATEGORY",
    allHeading: "ALL GENERATORS",
    allSub: "Sixty-plus generators, organized by what you're building.",
    searchPlaceholder: "Search generators...",
    searchAriaLabel: "Search generators",
    clearSearch: "Clear search",
    searchEmptyCTA: "Can't find it? Start with our AI builder.",
    howHeading: "HOW IT WORKS",
    step1Title: "PICK A GENERATOR",
    step1Desc: "Browse by category or search to find one that fits your goal.",
    step2Title: "DESCRIBE YOUR SITE",
    step2Desc: "Tell our AI builder about your business in a sentence or two.",
    step3Title: "GENERATE AND PUBLISH",
    step3Desc: "Get a fully built site in seconds. Customize anything, then go live.",
    whyHeading: "WHY STRIKINGLY",
    why1Title: "LIVE IN SECONDS",
    why1Desc: "Describe your site, we build it. No setup, no learning curve.",
    why2Title: "MOBILE BY DEFAULT",
    why2Desc: "Every generator produces responsive sites that work on any device.",
    why3Title: "FREE TO START",
    why3Desc: "Generate, customize, and publish without a credit card.",
    faqHeading: "FREQUENTLY ASKED QUESTIONS",
    closingHeading: "READY TO BUILD?",
    closingSub: "Pick a generator above, or jump straight into our AI builder.",
    closingCta: "START WITH AI BUILDER"
  }
};

const t = strings.en;

const categories = [
  { id: 'websites', title: 'Websites', desc: 'AI-built business and personal sites for any goal.' },
  { id: 'landing-pages', title: 'Landing Pages', desc: 'Single-page sites built to convert visitors fast.' },
  { id: 'portfolios', title: 'Portfolios', desc: 'Showcase your work with a clean, focused site.' },
  { id: 'blogs', title: 'Blogs', desc: 'Publish-ready blogs with built-in SEO basics.' },
  { id: 'stores', title: 'Online Stores', desc: 'Sell products online with payments built in.' },
  { id: 'link-in-bio', title: 'Link-in-Bio', desc: 'One link, all your places. Made for creators.' }
];

const featured = [
  { name: 'AI Website Generator', desc: 'Describe your business, get a full site', category: 'Website', slug: 'ai-website-generator' },
  { name: 'Free Portfolio Generator', desc: 'For creatives, in minutes, no fee', category: 'Portfolio', slug: 'free-portfolio-generator' },
  { name: 'AI Landing Page Maker', desc: 'One-page sites built to convert', category: 'Landing Page', slug: 'ai-landing-page-maker' },
  { name: 'Online Store Builder', desc: 'Start selling without writing code', category: 'Store', slug: 'online-store-builder' },
  { name: 'Link-in-Bio Generator', desc: 'One link for all your channels', category: 'Link-in-Bio', slug: 'link-in-bio-generator' },
  { name: 'One-Page Website Builder', desc: 'Simple sites, single scroll', category: 'Website', slug: 'one-page-website-builder' },
  { name: 'Wedding Website Generator', desc: 'Share your day with guests', category: 'Website', slug: 'wedding-website-generator' },
  { name: 'Restaurant Website Builder', desc: 'Menu, hours, reservations, done', category: 'Website', slug: 'restaurant-website-builder' },
  { name: 'Blog Generator for Beginners', desc: 'Publish-ready in minutes', category: 'Blog', slug: 'blog-generator-for-beginners' },
];

const allGenerators = {
  'websites': [
    { name: 'AI Website Generator', desc: 'Describe your business, get a full site', slug: 'ai-website-generator' },
    { name: 'One-Page Website Builder', desc: 'Simple sites, single scroll', slug: 'one-page-website-builder' },
    { name: 'Wedding Website Generator', desc: 'Share your day with guests', slug: 'wedding-website-generator' },
    { name: 'Restaurant Website Builder', desc: 'Menu, hours, reservations, done', slug: 'restaurant-website-builder' },
    { name: 'Free Website Builder for Photographers', desc: 'Beautiful photo galleries', slug: 'wedding-website-photographer' },
    { name: 'No-Code Website Builder for Agencies', desc: 'Showcase your clients', slug: 'agency-website' },
    { name: 'AI Builder for Yoga Instructors', desc: 'Class schedules and booking', slug: 'yoga-website' },
    { name: 'Consulting Firm Website Generator', desc: 'Professional service sites', slug: 'consulting-website' },
  ],
  'landing-pages': [
    { name: 'AI Landing Page Maker', desc: 'One-page sites built to convert', slug: 'ai-landing-page-maker' },
    { name: 'App Waitlist Generator', desc: 'Collect early signups', slug: 'app-waitlist' },
    { name: 'Event Registration Page Builder', desc: 'Get RSVPs fast', slug: 'event-registration' },
    { name: 'Ebook Download Page Creator', desc: 'Lead magnets made easy', slug: 'ebook-download' },
    { name: 'Webinar Signup Page Generator', desc: 'Boost your attendance', slug: 'webinar-landing' },
    { name: 'SaaS Waitlist Landing Page', desc: 'Capture early interest', slug: 'saas-waitlist' },
    { name: 'Real Estate Landing Page', desc: 'Showcase listings', slug: 'real-estate-landing' },
    { name: 'Lead Generation Page Builder', desc: 'Convert more traffic', slug: 'lead-gen-builder' },
  ],
  'portfolios': [
    { name: 'Free Portfolio Generator', desc: 'For creatives, in minutes, no fee', slug: 'free-portfolio-generator' },
    { name: 'Portfolio Generator for Designers', desc: 'Showcase your UI/UX work', slug: 'designer-portfolio' },
    { name: 'Copywriter Portfolio Builder', desc: 'Highlight your best writing', slug: 'copywriter-portfolio' },
    { name: 'Developer Portfolio Generator', desc: 'Showcase your code projects', slug: 'dev-portfolio' },
    { name: 'Actor Portfolio Maker', desc: 'Reels and headshots', slug: 'actor-portfolio' },
    { name: 'Student Portfolio Builder', desc: 'Stand out to employers', slug: 'student-portfolio' },
    { name: 'Model Comp Card Generator', desc: 'Digital composite cards', slug: 'model-comp-card' },
    { name: 'Artist Portfolio Website', desc: 'Virtual gallery for fine art', slug: 'artist-portfolio' },
  ],
  'blogs': [
    { name: 'Blog Generator for Beginners', desc: 'Publish-ready in minutes', slug: 'blog-generator-for-beginners' },
    { name: 'Travel Blog Maker', desc: 'Share your adventures', slug: 'travel-blog' },
    { name: 'Food Blog Generator', desc: 'Recipes and reviews', slug: 'food-blog' },
    { name: 'Tech Blog Builder', desc: 'Share your tech insights', slug: 'tech-blog' },
    { name: 'Fashion Blog Creator', desc: 'Style tips and outfits', slug: 'fashion-blog' },
    { name: 'Finance Blog Generator', desc: 'Money management tips', slug: 'finance-blog' },
    { name: 'Lifestyle Blog Maker', desc: 'Everyday inspiration', slug: 'lifestyle-blog' },
    { name: 'Review Blog Builder', desc: 'Product comparisons', slug: 'review-blog' },
  ],
  'stores': [
    { name: 'Online Store Builder', desc: 'Start selling without writing code', slug: 'online-store-builder' },
    { name: 'Online Store Builder for Restaurants', desc: 'Takeout and delivery', slug: 'restaurant-store' },
    { name: 'Digital Product Store Maker', desc: 'Sell downloads and courses', slug: 'digital-store' },
    { name: 'Merch Store Generator', desc: 'Sell your branded gear', slug: 'merch-store' },
    { name: 'Boutique Store Builder', desc: 'Sell clothing and accessories', slug: 'boutique-store' },
    { name: 'Subscription Box Store', desc: 'Recurring revenue made easy', slug: 'subscription-store' },
    { name: 'Handmade Goods Store Maker', desc: 'Sell your crafts online', slug: 'handmade-store' },
    { name: 'Dropshipping Store Builder', desc: 'Start without inventory', slug: 'dropshipping-store' },
  ],
  'link-in-bio': [
    { name: 'Link-in-Bio Generator', desc: 'One link for all your channels', slug: 'link-in-bio-generator' },
    { name: 'Creator Link Page Builder', desc: 'For YouTubers and TikTokers', slug: 'creator-links' },
    { name: 'Musician Link-in-Bio Maker', desc: 'Promote new tracks', slug: 'musician-links' },
    { name: 'Author Link-in-Bio Generator', desc: 'Links to your books', slug: 'author-links' },
    { name: 'Podcaster Link Page', desc: 'All your listening platforms', slug: 'podcast-links' },
    { name: 'Streamer Link-in-Bio Builder', desc: 'For Twitch and beyond', slug: 'streamer-links' },
    { name: 'Athlete Link Page Maker', desc: 'Stats and sponsors', slug: 'athlete-links' },
    { name: 'Business Link-in-Bio', desc: 'Links to your services', slug: 'business-links' },
  ]
};

const headTpl = `
    <title>AI Website Generators - Build Any Site in Seconds | Strikingly</title>
    <meta name="description" content="Browse Strikingly's AI-powered website generators. Choose one for your industry, goal, or site type and create a website in seconds, no code required.">
    <meta name="viewport" content="width=device-width, initial-scale=1">
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
`;

const bodyContent = `
  <div class="min-h-screen">
    <!-- Top Bar -->
    <header class="bg-white border-b border-divider h-14 flex items-center px-4 max-w-[1200px] mx-auto">
      <div class="font-heading text-lg tracking-wide font-bold">
        <span>strikingly</span> <span class="bg-ai-gradient bg-clip-text text-transparent">AI</span>
      </div>
    </header>

    <!-- Breadcrumb -->
    <div class="max-w-[1200px] mx-auto px-4 py-4">
      <nav aria-label="Breadcrumb">
        <ol class="flex items-center space-x-2 text-sm text-body-gray">
          <li><a href="/" class="hover:text-heading-gray focus:outline-none focus:ring-2 focus:ring-brand-purple rounded">Strikingly</a></li>
          <li aria-hidden="true" class="text-brand-purple select-none">&gt;</li>
          <li aria-current="page">AI Generators</li>
        </ol>
      </nav>
    </div>

    <main>
      <!-- Hero -->
      <section class="max-w-[1200px] mx-auto px-4 py-[60px] md:py-[80px]">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-[40px] items-center">
          <div class="flex flex-col items-start gap-[20px]">
            <h1 class="text-[32px] md:text-[48px] leading-[1.2] font-heading m-0 text-hero-dark">
              ${t.heroH1L1}<br />
              <span class="text-ai-gradient">${t.heroH1L2}</span>
            </h1>
            <p class="text-[16px] text-body-gray max-w-[500px] m-0">
              ${t.heroSub}
            </p>
            <div class="flex flex-col sm:flex-row gap-[10px] w-full sm:w-auto">
              <a href="/s/ai_site_builder" class="h-[44px] inline-flex items-center justify-center px-[20px] rounded-[4px] font-heading font-bold text-[14px] text-white bg-ai-gradient focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-purple">
                ${t.heroCtaPrimary}
              </a>
              <a href="#all-generators" class="h-[44px] inline-flex items-center justify-center px-[20px] rounded-[4px] font-heading font-bold text-[14px] text-brand-purple border border-brand-purple hover:bg-light-bg focus:outline-none focus:ring-2 focus:ring-brand-purple">
                ${t.heroCtaSecondary}
              </a>
            </div>
          </div>
          <div class="flex justify-center md:justify-end shrink-0">
            <svg width="400" height="300" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <rect x="50" y="50" width="300" height="200" rx="8" stroke="#8159BB" stroke-width="2" fill="#F4F6F8" />
              <rect x="70" y="70" width="260" height="40" rx="4" fill="#E2E4E7" />
              <rect x="70" y="130" width="120" height="20" rx="4" fill="#C6C9CD" />
              <rect x="70" y="160" width="200" height="10" rx="2" fill="#E2E4E7" />
              <rect x="70" y="180" width="180" height="10" rx="2" fill="#E2E4E7" />
            </svg>
          </div>
        </div>
      </section>

      <!-- Featured -->
      <section class="max-w-[1200px] mx-auto px-4 py-[40px]">
        <div class="mb-[20px]">
          <h2 class="text-[26px] md:text-[32px] font-heading m-0">${t.featuredHeading}</h2>
          <p class="text-body-gray m-0 mt-[10px]">${t.featuredSub}</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px]">
          ${featured.map(f => `
            <a href="/generators/${f.slug}" class="block group focus:outline-none focus:ring-2 focus:ring-brand-purple" aria-label="${f.name}">
              <article class="p-[20px] bg-white border border-card-border rounded-[3px] group-hover:border-brand-purple group-hover:shadow-md transition-shadow h-full">
                <div class="flex items-center gap-[10px] mb-[10px]">
                  <h3 class="font-body font-bold text-heading-gray m-0 text-base normal-case">${f.name}</h3>
                </div>
                <p class="text-sm text-body-gray m-0 mb-[15px]">${f.desc}</p>
                <span class="inline-flex items-center px-[6px] py-[2px] rounded-[3px] border border-brand-purple text-[11px] font-heading text-brand-purple">${f.category}</span>
              </article>
            </a>
          `).join('')}
        </div>
      </section>

      <!-- Browse by Category -->
      <section class="max-w-[1200px] mx-auto px-4 py-[40px]">
        <div class="mb-[20px]">
          <h2 class="text-[26px] md:text-[32px] font-heading m-0">${t.catHeading}</h2>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px]">
          ${categories.map(c => `
            <a href="#${c.id}" class="block group p-[20px] bg-white border border-card-border rounded-[3px] hover:border-brand-purple hover:shadow-md transition-shadow focus:outline-none focus:ring-2 focus:ring-brand-purple" aria-label="Browse ${c.title}">
              <div class="w-[40px] h-[40px] mb-[10px] bg-light-bg rounded flex items-center justify-center text-brand-purple">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/></svg>
              </div>
              <h3 class="font-heading text-heading-gray m-0 text-lg flex items-center justify-between">
                ${c.title}
                <svg class="w-5 h-5 text-card-border group-hover:text-brand-purple transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
              </h3>
              <p class="text-sm text-body-gray m-0 mt-[10px]">${c.desc}</p>
            </a>
          `).join('')}
        </div>
      </section>

      <!-- All Generators -->
      <section id="all-generators" class="max-w-[1200px] mx-auto px-4 py-[40px]">
        <div class="mb-[20px]">
          <h2 class="text-[26px] md:text-[32px] font-heading m-0">${t.allHeading}</h2>
          <p class="text-body-gray m-0 mt-[10px]">${t.allSub}</p>
        </div>

        <!-- Search -->
        <div class="mb-[40px] max-w-[480px]">
          <div class="relative">
            <div class="absolute inset-y-0 left-0 pl-[10px] flex items-center pointer-events-none text-body-gray">
              <svg width="20" height="20" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </div>
            <input type="text" id="generator-search" aria-label="${t.searchAriaLabel}" placeholder="${t.searchPlaceholder}" class="w-full pl-[40px] pr-[10px] py-[10px] border border-card-border rounded-[3px] focus:outline-none focus:ring-2 focus:ring-brand-purple focus:border-brand-purple text-body-gray font-body text-[14px]">
          </div>
          <div id="search-results-info" aria-live="polite" class="text-[14px] text-body-gray mt-[10px] hidden"></div>
          
          <div id="empty-state" class="hidden mt-[20px] p-[20px] bg-light-bg rounded border border-divider text-center">
            <p class="mb-[15px] text-heading-gray font-bold">No generators found.</p>
            <p class="mb-[15px]"><a href="/s/ai_site_builder" class="text-brand-purple hover:underline">${t.searchEmptyCTA}</a></p>
            <button id="clear-search-btn" class="h-[36px] inline-flex items-center justify-center px-[15px] rounded-[4px] font-heading font-bold text-[14px] text-brand-purple border border-brand-purple hover:bg-white focus:outline-none focus:ring-2 focus:ring-brand-purple uppercase">
              ${t.clearSearch}
            </button>
          </div>
        </div>

        <div id="generator-lists">
          ${categories.map(c => `
            <div id="${c.id}" class="generator-category mb-[40px] scroll-mt-[20px]" data-category="${c.title}">
              <div class="mb-[20px]">
                <h3 class="text-[20px] md:text-[24px] font-heading text-heading-gray m-0">${c.title}</h3>
                <p class="text-body-gray text-[14px] m-0 mt-[5px]">${c.desc}</p>
              </div>
              <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px] generator-grid items-start">
                ${allGenerators[c.id].map((g, i) => `
                  <a href="/generators/${g.slug}" class="generator-card block group focus:outline-none focus:ring-2 focus:ring-brand-purple ${i >= 6 ? 'hidden-card hidden' : ''}" data-name="${g.name.replace(/"/g, '')}" data-desc="${g.desc.replace(/"/g, '')}">
                    <article class="p-[20px] bg-white border border-card-border rounded-[3px] group-hover:border-brand-purple group-hover:shadow-md transition-shadow h-full">
                      <div class="w-[32px] h-[32px] mb-[10px] bg-light-bg rounded flex items-center justify-center text-brand-purple">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/></svg>
                      </div>
                      <div class="font-body font-bold text-heading-gray m-0 text-base mb-[5px]">${g.name}</div>
                      <p class="text-sm text-body-gray m-0">${g.desc}</p>
                    </article>
                  </a>
                `).join('')}
              </div>
              ${allGenerators[c.id].length > 6 ? `
                <button aria-expanded="false" aria-controls="${c.id}-grid" class="show-all-btn mt-[20px] h-[36px] inline-flex items-center justify-center px-[15px] rounded-[4px] font-heading font-bold text-[14px] text-brand-purple border border-brand-purple hover:bg-light-bg focus:outline-none focus:ring-2 focus:ring-brand-purple uppercase" data-total="${allGenerators[c.id].length}">
                  Show all ${allGenerators[c.id].length} generators
                </button>
              ` : ''}
            </div>
          `).join('')}
        </div>
      </section>

      <!-- How It Works -->
      <section class="bg-light-bg max-w-[1200px] mx-auto px-4 py-[60px] my-[40px]">
        <div class="mb-[40px] text-center">
          <h2 class="text-[26px] md:text-[32px] font-heading m-0">${t.howHeading}</h2>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-[40px]">
          <div class="flex flex-col items-center text-center">
            <div class="w-[40px] h-[40px] rounded-full bg-brand-purple text-white flex items-center justify-center font-heading text-[20px] mb-[15px]">1</div>
            <h3 class="font-heading text-[18px] text-heading-gray mb-[10px]">${t.step1Title}</h3>
            <p class="text-[14px] text-body-gray m-0">${t.step1Desc}</p>
          </div>
          <div class="flex flex-col items-center text-center">
            <div class="w-[40px] h-[40px] rounded-full bg-brand-purple text-white flex items-center justify-center font-heading text-[20px] mb-[15px]">2</div>
            <h3 class="font-heading text-[18px] text-heading-gray mb-[10px]">${t.step2Title}</h3>
            <p class="text-[14px] text-body-gray m-0">${t.step2Desc}</p>
          </div>
          <div class="flex flex-col items-center text-center">
            <div class="w-[40px] h-[40px] rounded-full bg-brand-purple text-white flex items-center justify-center font-heading text-[20px] mb-[15px]">3</div>
            <h3 class="font-heading text-[18px] text-heading-gray mb-[10px]">${t.step3Title}</h3>
            <p class="text-[14px] text-body-gray m-0">${t.step3Desc}</p>
          </div>
        </div>
      </section>

      <!-- Why Strikingly -->
      <section class="max-w-[1200px] mx-auto px-4 py-[40px]">
        <div class="mb-[40px] text-center">
          <h2 class="text-[26px] md:text-[32px] font-heading m-0">${t.whyHeading}</h2>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-[40px]">
          <div class="flex flex-col items-center text-center">
            <svg class="w-[40px] h-[40px] text-brand-purple mb-[15px]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
            <h3 class="font-heading text-[18px] text-heading-gray mb-[10px]">${t.why1Title}</h3>
            <p class="text-[14px] text-body-gray m-0">${t.why1Desc}</p>
          </div>
          <div class="flex flex-col items-center text-center">
            <svg class="w-[40px] h-[40px] text-brand-purple mb-[15px]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
            <h3 class="font-heading text-[18px] text-heading-gray mb-[10px]">${t.why2Title}</h3>
            <p class="text-[14px] text-body-gray m-0">${t.why2Desc}</p>
          </div>
          <div class="flex flex-col items-center text-center">
            <svg class="w-[40px] h-[40px] text-brand-purple mb-[15px]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
            <h3 class="font-heading text-[18px] text-heading-gray mb-[10px]">${t.why3Title}</h3>
            <p class="text-[14px] text-body-gray m-0">${t.why3Desc}</p>
          </div>
        </div>
      </section>

      <!-- FAQ -->
      <section class="bg-light-bg max-w-[1200px] mx-auto px-4 py-[60px] my-[40px]">
        <div class="max-w-[800px] mx-auto">
          <h2 class="text-[26px] md:text-[32px] font-heading m-0 text-center mb-[40px]">${t.faqHeading}</h2>
          
          <div class="faq-accordion space-y-[10px]">
            <div class="border border-card-border bg-white rounded-[3px]">
              <button aria-expanded="true" aria-controls="faq-ans-1" id="faq-btn-1" class="faq-btn flex w-full text-left px-[20px] py-[15px] font-body font-bold text-heading-gray text-[16px] focus:outline-none focus:ring-2 focus:ring-brand-purple justify-between items-center">
                <span>What is an AI site generator?</span>
                <svg class="w-5 h-5 shrink-0 ml-4 transform rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>
              <div id="faq-ans-1" aria-labelledby="faq-btn-1" class="faq-content px-[20px] pb-[20px] text-[14px] text-body-gray">
                <p>An AI site generator uses artificial intelligence to build a complete website based on a simple description of your business or project. Instead of starting from scratch and dragging elements into place, the AI handles the layout, initial copywriting, and design setup.</p>
                <p class="mt-2">You can then use our standard editor tools to tweak the design, add your own images, and finalize the text before publishing.</p>
              </div>
            </div>

            <div class="border border-card-border bg-white rounded-[3px]">
              <button aria-expanded="false" aria-controls="faq-ans-2" id="faq-btn-2" class="faq-btn flex w-full text-left px-[20px] py-[15px] font-body font-bold text-heading-gray text-[16px] focus:outline-none focus:ring-2 focus:ring-brand-purple justify-between items-center">
                <span>How is a generator different from a template?</span>
                <svg class="w-5 h-5 shrink-0 ml-4 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>
              <div id="faq-ans-2" aria-labelledby="faq-btn-2" class="faq-content hidden px-[20px] pb-[20px] text-[14px] text-body-gray">
                <p>While templates give you a static starting point that you must fill with your own text and structure, a generator builds a custom layout populated with content specifically drafted for your exact prompt.</p>
              </div>
            </div>

            <div class="border border-card-border bg-white rounded-[3px]">
              <button aria-expanded="false" aria-controls="faq-ans-3" id="faq-btn-3" class="faq-btn flex w-full text-left px-[20px] py-[15px] font-body font-bold text-heading-gray text-[16px] focus:outline-none focus:ring-2 focus:ring-brand-purple justify-between items-center">
                <span>Are these generators free to use?</span>
                <svg class="w-5 h-5 shrink-0 ml-4 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>
              <div id="faq-ans-3" aria-labelledby="faq-btn-3" class="faq-content hidden px-[20px] pb-[20px] text-[14px] text-body-gray">
                <p>Yes. Generating and publishing a basic site is completely free. We also offer premium plans if you need custom domains, advanced e-commerce features, or to remove Strikingly branding.</p>
              </div>
            </div>

            <div class="border border-card-border bg-white rounded-[3px]">
              <button aria-expanded="false" aria-controls="faq-ans-4" id="faq-btn-4" class="faq-btn flex w-full text-left px-[20px] py-[15px] font-body font-bold text-heading-gray text-[16px] focus:outline-none focus:ring-2 focus:ring-brand-purple justify-between items-center">
                <span>What kinds of sites can I build?</span>
                <svg class="w-5 h-5 shrink-0 ml-4 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>
              <div id="faq-ans-4" aria-labelledby="faq-btn-4" class="faq-content hidden px-[20px] pb-[20px] text-[14px] text-body-gray">
                <p>You can build practically anything: portfolios, business landing pages, e-commerce stores, blogs, and link-in-bio pages. The AI builder adapts to your specific needs.</p>
              </div>
            </div>

            <div class="border border-card-border bg-white rounded-[3px]">
              <button aria-expanded="false" aria-controls="faq-ans-5" id="faq-btn-5" class="faq-btn flex w-full text-left px-[20px] py-[15px] font-body font-bold text-heading-gray text-[16px] focus:outline-none focus:ring-2 focus:ring-brand-purple justify-between items-center">
                <span>Can I customize what the generator produces?</span>
                <svg class="w-5 h-5 shrink-0 ml-4 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>
              <div id="faq-ans-5" aria-labelledby="faq-btn-5" class="faq-content hidden px-[20px] pb-[20px] text-[14px] text-body-gray">
                <p>Absolutely. The generated layout is just a head start. Once generated, you have access to a full suite of editing tools to change colors, fonts, layouts, text, and images.</p>
              </div>
            </div>

            <div class="border border-card-border bg-white rounded-[3px]">
              <button aria-expanded="false" aria-controls="faq-ans-6" id="faq-btn-6" class="faq-btn flex w-full text-left px-[20px] py-[15px] font-body font-bold text-heading-gray text-[16px] focus:outline-none focus:ring-2 focus:ring-brand-purple justify-between items-center">
                <span>Do generated sites work on mobile?</span>
                <svg class="w-5 h-5 shrink-0 ml-4 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>
              <div id="faq-ans-6" aria-labelledby="faq-btn-6" class="faq-content hidden px-[20px] pb-[20px] text-[14px] text-body-gray">
                <p>Your site will be fully responsive right out of the box. Every section and component automatically adjusts to look great on desktop, tablet, and mobile screens.</p>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      <!-- Closing CTA -->
      <section class="max-w-[1200px] mx-auto px-4 py-[60px] text-center mb-[40px]">
        <h2 class="text-[26px] md:text-[32px] font-heading m-0 mb-[10px] text-heading-gray">${t.closingHeading}</h2>
        <p class="text-[16px] text-body-gray m-0 mb-[30px]">${t.closingSub}</p>
        <a href="/s/ai_site_builder" class="h-[44px] inline-flex items-center justify-center px-[30px] rounded-[4px] font-heading font-bold text-[14px] text-white bg-ai-gradient focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-purple">
          ${t.closingCta}
        </a>
      </section>
    </main>

    <!-- Footer -->
    <footer class="bg-light-bg py-[60px] mt-auto">
      <div class="max-w-[1200px] mx-auto px-4">
        <div class="grid grid-cols-2 md:grid-cols-5 gap-[40px] mb-[40px]">
          <div class="col-span-2 md:col-span-1">
            <div class="font-heading text-lg tracking-wide font-bold text-heading-gray mb-[20px]">strikingly</div>
          </div>
          <div>
            <h4 class="font-heading flex items-center text-[14px] text-heading-gray mb-[15px]">Product</h4>
            <ul class="space-y-[10px] text-[14px]">
              <li><a href="/templates" class="text-body-gray hover:text-brand-purple focus:outline-none focus:ring-2 focus:ring-brand-purple rounded">Templates</a></li>
              <li><a href="/pricing" class="text-body-gray hover:text-brand-purple focus:outline-none focus:ring-2 focus:ring-brand-purple rounded">Pricing</a></li>
            </ul>
          </div>
          <div>
            <h4 class="font-heading flex items-center text-[14px] text-heading-gray mb-[15px]">Company</h4>
            <ul class="space-y-[10px] text-[14px]">
              <li><a href="/about" class="text-body-gray hover:text-brand-purple focus:outline-none focus:ring-2 focus:ring-brand-purple rounded">About Us</a></li>
              <li><a href="/blog" class="text-body-gray hover:text-brand-purple focus:outline-none focus:ring-2 focus:ring-brand-purple rounded">Blog</a></li>
            </ul>
          </div>
          <div>
            <h4 class="font-heading flex items-center text-[14px] text-heading-gray mb-[15px]">Support</h4>
            <ul class="space-y-[10px] text-[14px]">
              <li><a href="/support" class="text-body-gray hover:text-brand-purple focus:outline-none focus:ring-2 focus:ring-brand-purple rounded">Help Center</a></li>
            </ul>
          </div>
          <div>
            <h4 class="font-heading flex items-center text-[14px] text-heading-gray mb-[15px]">Legal</h4>
            <ul class="space-y-[10px] text-[14px]">
              <li><a href="/terms" class="text-body-gray hover:text-brand-purple focus:outline-none focus:ring-2 focus:ring-brand-purple rounded">Terms of Service</a></li>
              <li><a href="/privacy" class="text-body-gray hover:text-brand-purple focus:outline-none focus:ring-2 focus:ring-brand-purple rounded">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        <div class="border-t border-divider pt-[20px] text-[12px] text-body-gray flex flex-col md:flex-row justify-between items-center">
          <div>&copy; 2026 Strikingly. All rights reserved.</div>
        </div>
      </div>
    </footer>
  </div>
`;

const scripts = `
  <script>
    document.addEventListener('DOMContentLoaded', () => {
      const searchInput = document.getElementById('generator-search');
      const emptyState = document.getElementById('empty-state');
      const searchInfo = document.getElementById('search-results-info');
      const clearBtn = document.getElementById('clear-search-btn');
      
      if (searchInput) {
        searchInput.addEventListener('input', (e) => {
          const query = e.target.value.toLowerCase().trim();
          filterGenerators(query);
        });
      }
      
      if (clearBtn) {
        clearBtn.addEventListener('click', () => {
          searchInput.value = '';
          filterGenerators('');
          searchInput.focus();
        });
      }
      
      function filterGenerators(query) {
        let totalMatches = 0;
        const categories = document.querySelectorAll('.generator-category');
        
        categories.forEach(category => {
          const catName = category.getAttribute('data-category').toLowerCase();
          const cards = category.querySelectorAll('.generator-card');
          const showAllBtn = category.querySelector('.show-all-btn');
          let catMatches = 0;
          
          cards.forEach(card => {
            if (query === '') {
              card.classList.remove('search-match', 'search-hidden');
              catMatches++;
            } else {
              const name = card.getAttribute('data-name') || '';
              const desc = card.getAttribute('data-desc') || '';
              
              if (name.includes(query) || desc.includes(query) || catName.includes(query)) {
                card.classList.add('search-match');
                card.classList.remove('search-hidden');
                catMatches++;
                totalMatches++;
              } else {
                card.classList.add('search-hidden');
                card.classList.remove('search-match');
              }
            }
          });
          
          if (query === '') {
            category.classList.remove('hidden');
            if(showAllBtn) {
              showAllBtn.classList.remove('hidden');
              const isExpanded = showAllBtn.getAttribute('aria-expanded') === 'true';
              if (!isExpanded) {
                cards.forEach((c, idx) => {
                  if(idx >= 6) c.classList.add('hidden-card');
                });
              }
            }
          } else {
             if (catMatches === 0) {
               category.classList.add('hidden');
             } else {
               category.classList.remove('hidden');
             }
             if(showAllBtn) {
               showAllBtn.classList.add('hidden');
             }
             cards.forEach(c => c.classList.remove('hidden-card')); 
          }
        });
        
        if (query !== '') {
          searchInfo.classList.remove('hidden');
          searchInfo.textContent = \`\${totalMatches} generators match\`;
          
          if (totalMatches === 0) {
            emptyState.classList.remove('hidden');
          } else {
            emptyState.classList.add('hidden');
          }
        } else {
          searchInfo.classList.add('hidden');
          emptyState.classList.add('hidden');
        }
      }

      const showAllBtns = document.querySelectorAll('.show-all-btn');
      showAllBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
          const isExpanded = btn.getAttribute('aria-expanded') === 'true';
          const container = btn.closest('.generator-category');
          const hiddenCards = container.querySelectorAll('.generator-card.hidden-card, .generator-card.force-show');
          const total = btn.getAttribute('data-total');
          
          if (isExpanded) {
            btn.setAttribute('aria-expanded', 'false');
            btn.textContent = \`Show all \${total} generators\`;
            hiddenCards.forEach(c => {
              c.classList.remove('force-show');
              c.classList.add('hidden-card');
            });
          } else {
            btn.setAttribute('aria-expanded', 'true');
            btn.textContent = 'Show less';
            hiddenCards.forEach(c => {
              c.classList.add('force-show');
              c.classList.remove('hidden-card');
            });
          }
        });
      });

      const faqBtns = document.querySelectorAll('.faq-btn');
      faqBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          const isExpanded = btn.getAttribute('aria-expanded') === 'true';
          const content = btn.nextElementSibling;
          const icon = btn.querySelector('svg');
          
          if (isExpanded) {
            btn.setAttribute('aria-expanded', 'false');
            content.classList.add('hidden');
            icon.classList.remove('rotate-180');
          } else {
            btn.setAttribute('aria-expanded', 'true');
            content.classList.remove('hidden');
            icon.classList.add('rotate-180');
          }
        });
      });
      
      document.body.classList.add('js-enabled');
    });
  </script>
`;

const extraCss = `
  <style>
    body:not(.js-enabled) .hidden-card {
      display: block !important;
    }
    body:not(.js-enabled) .show-all-btn {
      display: none !important;
    }
    .js-enabled .hidden-card {
      display: none !important;
    }
    .js-enabled .force-show {
      display: block !important;
    }
    .js-enabled .search-hidden {
      display: none !important;
    }
    .generator-card {
      transition: opacity 0.2s;
    }
  </style>
`;

let rootHtml = fs.readFileSync(path.join(currentDir, 'index.html.bak'), 'utf-8');

rootHtml = rootHtml.replace(/<title>.*?<\/title>/, '');
rootHtml = rootHtml.replace('</head>', headTpl + '</head>');

const bodyStartRegex = /<body[^>]*>/;
const bodyEndRegex = /<\/body>/;

const startMatch = rootHtml.match(bodyStartRegex);
const endMatch = rootHtml.match(bodyEndRegex);

if (startMatch && endMatch) {
  const bodyStartIndex = startMatch.index + startMatch[0].length;
  const bodyEndIndex = endMatch.index;
  
  const existingBodyScripts = rootHtml.substring(bodyStartIndex, bodyEndIndex)
    .replace('<div id="root"></div>', '');
  
  const newBody = extraCss + bodyContent + scripts + existingBodyScripts;
  const finalHtml = rootHtml.substring(0, bodyStartIndex) + newBody + rootHtml.substring(bodyEndIndex);
  
  fs.writeFileSync(path.join(currentDir, 'index.html'), finalHtml);
  console.log('Successfully generated index.html!');
} else {
  console.error('Could not find <body> tags in index.html.bak!');
}
