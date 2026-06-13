import React, { useState } from 'react';

// i18n strings - English only for now
const strings = {
  en: {
    // Top bar
    logo: "strikingly AI",
    
    // Breadcrumb
    breadcrumbHome: "Strikingly",
    breadcrumbCurrent: "AI Generators",
    
    // Hero
    heroH1Line1: "BUILD ANY KIND OF SITE",
    heroH1Line2: "WITH AI, IN AN INSTANT",
    heroSubheadline: "Browse the right generator for what you're building, or jump straight into our AI site builder.",
    heroPrimaryCta: "START BUILDING - IT'S FREE",
    heroSecondaryCta: "BROWSE GENERATORS",
    
    // Featured
    featuredHeading: "FEATURED GENERATORS",
    featuredSubheading: "A few common starting points.",
    
    // Browse by Category
    browseHeading: "BROWSE BY CATEGORY",
    
    // All Generators
    allGeneratorsId: "all-generators",
    allGeneratorsHeading: "ALL GENERATORS",
    allGeneratorsSubheading: "Sixty-plus generators, organized by what you're building.",
    searchPlaceholder: "Search generators...",
    searchAriaLabel: "Search generators",
    searchResults: (count) => `${count} generators match`,
    searchEmpty: "Can't find it? Start with our AI builder.",
    searchClear: "Clear search",
    
    // How It Works
    howItWorksHeading: "HOW IT WORKS",
    
    // Why Strikingly
    whyHeading: "WHY STRIKINGLY",
    
    // FAQ
    faqHeading: "FREQUENTLY ASKED QUESTIONS",
    
    // Closing CTA
    closingHeading: "READY TO BUILD?",
    closingSub: "Pick a generator above, or jump straight into our AI builder.",
    closingCta: "START WITH AI BUILDER",
    
    // Footer
    footerCopyright: "© 2026 Strikingly, Inc. All rights reserved.",
  }
};

const s = strings.en;

// Generator data - Featured (9 items)
const featuredGenerators = [
  { name: "AI Website Generator", desc: "Describe your business, get a full site", category: "Website", slug: "ai-website-generator" },
  { name: "Free Portfolio Generator", desc: "For creatives, in minutes, no fee", category: "Portfolio", slug: "free-portfolio-generator" },
  { name: "AI Landing Page Maker", desc: "One-page sites built to convert", category: "Landing Page", slug: "ai-landing-page-maker" },
  { name: "Online Store Builder", desc: "Start selling without writing code", category: "Store", slug: "online-store-builder" },
  { name: "Link-in-Bio Generator", desc: "One link for all your channels", category: "Link-in-Bio", slug: "link-in-bio-generator" },
  { name: "One-Page Website Builder", desc: "Simple sites, single scroll", category: "Website", slug: "one-page-website-builder" },
  { name: "Wedding Website Generator", desc: "Share your day with guests", category: "Website", slug: "wedding-website-generator" },
  { name: "Restaurant Website Builder", desc: "Menu, hours, reservations, done", category: "Website", slug: "restaurant-website-builder" },
  { name: "Blog Generator for Beginners", desc: "Publish-ready in minutes", category: "Blog", slug: "blog-generator-for-beginners" },
];

// Category data for Browse by Category
const categories = [
  { name: "Websites", desc: "AI-built business and personal sites for any goal.", slug: "websites", icon: "🌐" },
  { name: "Landing Pages", desc: "Single-page sites built to convert visitors fast.", slug: "landing-pages", icon: "📄" },
  { name: "Portfolios", desc: "Showcase your work with a clean, focused site.", slug: "portfolios", icon: "🎨" },
  { name: "Blogs", desc: "Publish-ready blogs with built-in SEO basics.", slug: "blogs", icon: "✍️" },
  { name: "Online Stores", desc: "Sell products online with payments built in.", slug: "stores", icon: "🛒" },
  { name: "Link-in-Bio", desc: "One link, all your places. Made for creators.", slug: "link-in-bio", icon: "🔗" },
];

// All generators by category (8-12 per category)
const allGenerators = {
  websites: {
    heading: "Websites",
    desc: "Full sites for businesses, events, and personal projects.",
    icon: "🌐",
    items: [
      { name: "AI Website Generator", desc: "Describe your business, get a full site", slug: "ai-website-generator" },
      { name: "One-Page Website Builder", desc: "Simple sites, single scroll", slug: "one-page-website-builder" },
      { name: "Wedding Website Generator", desc: "Share your day with guests", slug: "wedding-website-generator" },
      { name: "Restaurant Website Builder", desc: "Menu, hours, reservations, done", slug: "restaurant-website-builder" },
      { name: "Free Website Builder for Photographers", desc: "Showcase your work beautifully", slug: "free-website-builder-for-photographers" },
      { name: "AI Website for Yoga Instructors", desc: "Class schedules and bookings", slug: "ai-website-for-yoga-instructors" },
      { name: "No-Code Website Builder", desc: "Build without touching code", slug: "no-code-website-builder" },
      { name: "Beautiful Website Generator", desc: "Stunning designs in seconds", slug: "beautiful-website-generator" },
      { name: "Business Website Builder", desc: "Professional sites for any company", slug: "business-website-builder" },
      { name: "Personal Website Generator", desc: "Your story, your way", slug: "personal-website-generator" },
    ]
  },
  "landing-pages": {
    heading: "Landing Pages",
    desc: "Focused pages built to convert visitors into leads or customers.",
    icon: "📄",
    items: [
      { name: "AI Landing Page Maker", desc: "One-page sites built to convert", slug: "ai-landing-page-maker" },
      { name: "Free Landing Page Builder", desc: "Launch fast, no cost", slug: "free-landing-page-builder" },
      { name: "Product Launch Landing Page", desc: "Announce and sell your product", slug: "product-launch-landing-page" },
      { name: "Event Registration Page", desc: "Collect RSVPs with ease", slug: "event-registration-page" },
      { name: "Lead Capture Generator", desc: "Turn visitors into leads", slug: "lead-capture-generator" },
      { name: "Sales Page Builder", desc: "Close deals with one page", slug: "sales-page-builder" },
      { name: "One-Page Offer Builder", desc: "Present offers clearly", slug: "one-page-offer-builder" },
      { name: "AI Webinar Landing Page", desc: "Register attendees fast", slug: "ai-webinar-landing-page" },
      { name: "Conversion Landing Page", desc: "Optimized for results", slug: "conversion-landing-page" },
    ]
  },
  portfolios: {
    heading: "Portfolios",
    desc: "Clean, focused showcases for creatives and professionals.",
    icon: "🎨",
    items: [
      { name: "Free Portfolio Generator", desc: "For creatives, in minutes, no fee", slug: "free-portfolio-generator" },
      { name: "Portfolio Generator for Designers", desc: "Showcase projects beautifully", slug: "portfolio-generator-for-designers" },
      { name: "AI Portfolio for Photographers", desc: "Display your best work", slug: "ai-portfolio-for-photographers" },
      { name: "Artist Portfolio Builder", desc: "Share your creative journey", slug: "artist-portfolio-builder" },
      { name: "Developer Portfolio Generator", desc: "Code projects, front and center", slug: "developer-portfolio-generator" },
      { name: "Writer Portfolio Builder", desc: "Collect your best writing", slug: "writer-portfolio-builder" },
      { name: "No-Code Portfolio Maker", desc: "Build without code", slug: "no-code-portfolio-maker" },
      { name: "Beautiful Portfolio Generator", desc: "Stunning visual layouts", slug: "beautiful-portfolio-generator" },
      { name: "Freelancer Portfolio Builder", desc: "Win clients with your work", slug: "freelancer-portfolio-builder" },
      { name: "Student Portfolio Generator", desc: "Showcase academic work", slug: "student-portfolio-builder" },
    ]
  },
  blogs: {
    heading: "Blogs",
    desc: "Publish-ready blogs with SEO basics built in.",
    icon: "✍️",
    items: [
      { name: "Blog Generator for Beginners", desc: "Publish-ready in minutes", slug: "blog-generator-for-beginners" },
      { name: "AI Blog Builder", desc: "Start writing, we handle the rest", slug: "ai-blog-builder" },
      { name: "Free Blog Generator", desc: "No cost, full features", slug: "free-blog-generator" },
      { name: "Personal Blog Builder", desc: "Share your thoughts online", slug: "personal-blog-builder" },
      { name: "Business Blog Generator", desc: "Content that drives growth", slug: "business-blog-generator" },
      { name: "One-Page Blog Starter", desc: "Simple, focused writing space", slug: "one-page-blog-starter" },
      { name: "No-Code Blog Maker", desc: "Write without setup", slug: "no-code-blog-maker" },
      { name: "Beautiful Blog Generator", desc: "Clean reading experience", slug: "beautiful-blog-generator" },
      { name: "Travel Blog Builder", desc: "Share your journeys", slug: "travel-blog-builder" },
      { name: "Food Blog Generator", desc: "Recipes and stories", slug: "food-blog-generator" },
      { name: "Tech Blog Builder", desc: "Write about technology", slug: "tech-blog-builder" },
    ]
  },
  stores: {
    heading: "Online Stores",
    desc: "Sell products online with payments built in.",
    icon: "🛒",
    items: [
      { name: "Online Store Builder", desc: "Start selling without writing code", slug: "online-store-builder" },
      { name: "Online Store Builder for Restaurants", desc: "Take orders online", slug: "online-store-builder-for-restaurants" },
      { name: "Free Store Generator", desc: "Sell without fees to start", slug: "free-store-generator" },
      { name: "AI Store Builder", desc: "Products to checkout in minutes", slug: "ai-store-builder" },
      { name: "One-Page Store Maker", desc: "Sell a few items simply", slug: "one-page-store-maker" },
      { name: "No-Code Store Builder", desc: "Launch without developers", slug: "no-code-store-builder" },
      { name: "Beautiful Store Generator", desc: "Products that look great", slug: "beautiful-store-generator" },
      { name: "Handmade Store Builder", desc: "Sell your crafts online", slug: "handmade-store-builder" },
      { name: "Digital Products Store", desc: "Sell downloads and courses", slug: "digital-products-store" },
      { name: "Fashion Store Generator", desc: "Clothing and accessories", slug: "fashion-store-generator" },
    ]
  },
  "link-in-bio": {
    heading: "Link-in-Bio",
    desc: "One link, all your places. Made for creators.",
    icon: "🔗",
    items: [
      { name: "Link-in-Bio Generator", desc: "One link for all your channels", slug: "link-in-bio-generator" },
      { name: "Free Link-in-Bio Builder", desc: "No cost, instant setup", slug: "free-link-in-bio-builder" },
      { name: "Creator Link Page", desc: "All your links in one place", slug: "creator-link-page" },
      { name: "AI Link-in-Bio Maker", desc: "Build in seconds", slug: "ai-link-in-bio-maker" },
      { name: "Social Media Link Page", desc: "Connect every platform", slug: "social-media-link-page" },
      { name: "No-Code Link Builder", desc: "Simple, fast, free to start", slug: "no-code-link-builder" },
      { name: "Beautiful Link Page", desc: "Clean, branded design", slug: "beautiful-link-page" },
      { name: "Influencer Link Generator", desc: "Monetize your audience", slug: "influencer-link-generator" },
      { name: "Musician Link Page", desc: "Music, merch, and more", slug: "musician-link-page" },
    ]
  }
};

// FAQ data
const faqItems = [
  {
    q: "What is an AI site generator?",
    a: "An AI site generator is a tool that creates a complete website based on a short description you provide. Instead of starting from a blank page or a rigid template, you describe your business or goal in a sentence or two, and the AI builds a working site for you in seconds."
  },
  {
    q: "How is a generator different from a template?",
    a: "Templates are pre-designed layouts you customize by hand. Generators use AI to create a unique site from your description, choosing layout, content, and structure automatically. You still get full control to edit anything afterward."
  },
  {
    q: "Are these generators free to use?",
    a: "Yes. You can generate, customize, and publish a site without a credit card. Paid plans unlock extra features like custom domains and advanced analytics, but the core generator experience is free to start."
  },
  {
    q: "What kinds of sites can I build?",
    a: "You can build business sites, landing pages, portfolios, blogs, online stores, link-in-bio pages, event sites, and more. Each category in the directory above contains generators tuned for that specific use case."
  },
  {
    q: "Can I customize what the generator produces?",
    a: "Absolutely. After the AI builds your site, you can edit text, swap images, rearrange sections, change colors, and add or remove pages. Everything is fully editable in the Strikingly editor."
  },
  {
    q: "Do generated sites work on mobile?",
    a: "Yes. Every generator produces responsive sites that adapt automatically to phones, tablets, and desktops. Mobile optimization is built in from the first render."
  }
];

// How it works steps
const howItWorksSteps = [
  { num: "1", title: "PICK A GENERATOR", text: "Browse by category or search to find one that fits your goal." },
  { num: "2", title: "DESCRIBE YOUR SITE", text: "Tell our AI builder about your business in a sentence or two." },
  { num: "3", title: "GENERATE AND PUBLISH", text: "Get a fully built site in seconds. Customize anything, then go live." },
];

// Why Strikingly items
const whyItems = [
  { icon: "⚡", title: "LIVE IN SECONDS", text: "Describe your site, we build it. No setup, no learning curve." },
  { icon: "📱", title: "MOBILE BY DEFAULT", text: "Every generator produces responsive sites that work on any device." },
  { icon: "🎁", title: "FREE TO START", text: "Generate, customize, and publish without a credit card." },
];

// Category SVG icons (inline, decorative)
const CategoryIcon = ({ icon, ariaHidden = true }) => (
  <div className="text-3xl" aria-hidden={ariaHidden}>{icon}</div>
);

const Generators = () => {
  // Search state
  const [searchQuery, setSearchQuery] = useState('');
  const [showAll, setShowAll] = useState({});
  
  // FAQ accordion state (first expanded)
  const [openFaq, setOpenFaq] = useState(0);
  
  // Filter generators based on search
  const getFilteredGenerators = () => {
    if (!searchQuery.trim()) {
      return allGenerators;
    }
    
    const q = searchQuery.toLowerCase().trim();
    const filtered = {};
    
    Object.keys(allGenerators).forEach(catKey => {
      const cat = allGenerators[catKey];
      const matchingItems = cat.items.filter(item => 
        item.name.toLowerCase().includes(q) ||
        item.desc.toLowerCase().includes(q) ||
        cat.heading.toLowerCase().includes(q)
      );
      
      if (matchingItems.length > 0) {
        filtered[catKey] = { ...cat, items: matchingItems };
      }
    });
    
    return filtered;
  };
  
  const filteredGenerators = getFilteredGenerators();
  const totalMatchCount = Object.values(filteredGenerators).reduce((sum, cat) => sum + cat.items.length, 0);
  
  // Toggle show all for a category
  const toggleShowAll = (catKey) => {
    setShowAll(prev => ({ ...prev, [catKey]: !prev[catKey] }));
  };
  
  // Toggle FAQ
  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? -1 : index);
  };
  
  // Clear search
  const clearSearch = () => {
    setSearchQuery('');
  };
  
  // Get visible items for a category (with show all logic)
  const getVisibleItems = (catKey, items) => {
    const isExpanded = showAll[catKey];
    if (isExpanded || searchQuery.trim()) {
      return items;
    }
    return items.slice(0, 6); // Show first 6 by default
  };
  
  return (
    <div className="min-h-screen bg-white text-[#636972] font-sans">
      {/* Section 0: Top bar */}
      <header className="bg-white border-b border-[#E2E4E7]">
        <div className="max-w-[1200px] mx-auto px-5 py-4">
          <a href="/" className="text-[#8159BB] font-bold text-xl tracking-wide" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
            {s.logo}
          </a>
        </div>
      </header>
      
      {/* Section 1: Breadcrumb */}
      <nav aria-label="Breadcrumb" className="max-w-[1200px] mx-auto px-5 py-3">
        <ol className="flex items-center text-sm text-[#636972]">
          <li>
            <a href="/" className="hover:text-[#8159BB] transition-colors">{s.breadcrumbHome}</a>
          </li>
          <li className="mx-2 text-[#8159BB]">›</li>
          <li aria-current="page" className="text-[#636972]">{s.breadcrumbCurrent}</li>
        </ol>
      </nav>
      
      {/* BreadcrumbList JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
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
        })
      }} />
      
      {/* Section 2: Hero */}
      <section className="max-w-[1200px] mx-auto px-5 pt-16 pb-20 md:pt-20 md:pb-24">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Left column */}
          <div>
            <h1 className="text-[32px] md:text-[44px] leading-[1.15] tracking-[-0.5px] mb-4" style={{ fontFamily: "'Josefin Sans', sans-serif", fontWeight: 700 }}>
              <span className="block uppercase text-[#2E2E2F]">{s.heroH1Line1}</span>
              <span 
                className="block uppercase bg-clip-text text-transparent"
                style={{ 
                  backgroundImage: 'linear-gradient(90deg, #7671FF 0%, #CB0C9F 100%)',
                  fontFamily: "'Josefin Sans', sans-serif",
                  fontWeight: 700
                }}
              >
                {s.heroH1Line2}
              </span>
            </h1>
            <p className="text-base md:text-lg mb-8 max-w-[520px] text-[#636972]">
              {s.heroSubheadline}
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a 
                href="/s/ai_site_builder"
                className="inline-flex items-center justify-center h-11 px-6 rounded text-sm font-bold uppercase tracking-wide text-white transition-all hover:opacity-90"
                style={{ 
                  background: 'linear-gradient(90deg, #7671FF 0%, #CB0C9F 100%)',
                  fontFamily: "'Josefin Sans', sans-serif"
                }}
              >
                {s.heroPrimaryCta}
              </a>
              <a 
                href="#all-generators"
                className="inline-flex items-center justify-center h-11 px-6 rounded text-sm font-bold uppercase tracking-wide border border-[#8159BB] text-[#8159BB] hover:bg-[#8159BB] hover:text-white transition-all"
                style={{ fontFamily: "'Josefin Sans', sans-serif" }}
              >
                {s.heroSecondaryCta}
              </a>
            </div>
          </div>
          
          {/* Right column - SVG illustration */}
          <div className="flex justify-center md:justify-end">
            <svg 
              width="420" 
              height="280" 
              viewBox="0 0 420 280" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              className="w-full max-w-[420px]"
            >
              {/* Soft purple wash background */}
              <defs>
                <radialGradient id="heroGrad" cx="50%" cy="40%" r="70%" fx="50%" fy="40%">
                  <stop offset="0%" stopColor="#F4F0FA" />
                  <stop offset="100%" stopColor="#FFFFFF" />
                </radialGradient>
              </defs>
              <rect width="420" height="280" rx="12" fill="url(#heroGrad)" />
              
              {/* Browser frame */}
              <rect x="40" y="40" width="340" height="200" rx="8" fill="#FFFFFF" stroke="#C6C9CD" strokeWidth="1.5" />
              
              {/* Browser header */}
              <rect x="40" y="40" width="340" height="28" rx="8" fill="#F4F6F8" />
              <circle cx="60" cy="54" r="4" fill="#C6C9CD" />
              <circle cx="76" cy="54" r="4" fill="#C6C9CD" />
              <circle cx="92" cy="54" r="4" fill="#C6C9CD" />
              
              {/* Content lines */}
              <rect x="60" y="85" width="180" height="10" rx="2" fill="#E2E4E7" />
              <rect x="60" y="105" width="240" height="8" rx="2" fill="#E2E4E7" />
              <rect x="60" y="125" width="160" height="8" rx="2" fill="#E2E4E7" />
              
              {/* Purple accent block */}
              <rect x="260" y="85" width="100" height="70" rx="4" fill="#8159BB" opacity="0.15" />
              <rect x="275" y="100" width="70" height="8" rx="2" fill="#8159BB" />
              <rect x="275" y="118" width="50" height="6" rx="2" fill="#8159BB" opacity="0.6" />
            </svg>
          </div>
        </div>
      </section>
      
      {/* Section 3: Featured Generators */}
      <section className="bg-[#F4F6F8] py-16">
        <div className="max-w-[1200px] mx-auto px-5">
          <h2 className="text-center text-2xl md:text-3xl uppercase tracking-wide mb-2 text-[#4B5056]" style={{ fontFamily: "'Josefin Sans', sans-serif", fontWeight: 700 }}>
            {s.featuredHeading}
          </h2>
          <p className="text-center text-[#636972] mb-10">{s.featuredSubheading}</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {featuredGenerators.map((gen, idx) => (
              <a 
                key={idx}
                href={`/generators/${gen.slug}`}
                className="block bg-white border border-[#C6C9CD] rounded-lg p-5 hover:border-[#8159BB] hover:shadow-md transition-all"
              >
                <div className="font-bold text-[#2E2E2F] mb-2 text-lg" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
                  {gen.name}
                </div>
                <p className="text-sm text-[#636972] mb-4">{gen.desc}</p>
                <span className="inline-block text-xs uppercase tracking-wide px-2 py-0.5 border border-[#8159BB] text-[#8159BB] rounded">
                  {gen.category}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>
      
      {/* Section 4: Browse by Category */}
      <section className="py-16">
        <div className="max-w-[1200px] mx-auto px-5">
          <h2 className="text-center text-2xl md:text-3xl uppercase tracking-wide mb-10 text-[#4B5056]" style={{ fontFamily: "'Josefin Sans', sans-serif", fontWeight: 700 }}>
            {s.browseHeading}
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {categories.map((cat, idx) => (
              <a 
                key={idx}
                href={`#${cat.slug}`}
                className="block bg-white border border-[#C6C9CD] rounded-lg p-6 hover:border-[#8159BB] hover:shadow-md transition-all group"
              >
                <div className="mb-4">
                  <CategoryIcon icon={cat.icon} />
                </div>
                <div className="font-bold uppercase tracking-wide text-[#2E2E2F] mb-2" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
                  {cat.name}
                </div>
                <p className="text-sm text-[#636972] mb-4">{cat.desc}</p>
                <span className="inline-flex items-center text-[#8159BB] group-hover:translate-x-0.5 transition-transform">
                  →
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>
      
      {/* Section 5: All Generators Directory */}
      <section id={s.allGeneratorsId} className="bg-[#F4F6F8] py-16">
        <div className="max-w-[1200px] mx-auto px-5">
          <h2 className="text-center text-2xl md:text-3xl uppercase tracking-wide mb-2 text-[#4B5056]" style={{ fontFamily: "'Josefin Sans', sans-serif", fontWeight: 700 }}>
            {s.allGeneratorsHeading}
          </h2>
          <p className="text-center text-[#636972] mb-8">{s.allGeneratorsSubheading}</p>
          
          {/* Search input */}
          <div className="max-w-[480px] mx-auto mb-8">
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#636972]" aria-hidden="true">🔍</span>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={s.searchPlaceholder}
                aria-label={s.searchAriaLabel}
                className="w-full h-11 pl-11 pr-4 rounded-lg border border-[#C6C9CD] bg-white text-sm focus:outline-none focus:border-[#8159BB]"
              />
            </div>
            {searchQuery.trim() && (
              <p className="text-center text-sm mt-2 text-[#636972]">
                {s.searchResults(totalMatchCount)}
              </p>
            )}
          </div>
          
          {/* Empty state */}
          {Object.keys(filteredGenerators).length === 0 && (
            <div className="text-center py-10">
              <p className="mb-4">No generators match your search.</p>
              <button 
                onClick={clearSearch}
                className="text-[#8159BB] underline mr-4"
              >
                {s.searchClear}
              </button>
              <a href="/s/ai_site_builder" className="text-[#8159BB] underline">
                {s.searchEmpty}
              </a>
            </div>
          )}
          
          {/* Category subsections */}
          {Object.keys(filteredGenerators).map((catKey) => {
            const cat = filteredGenerators[catKey];
            const visibleItems = getVisibleItems(catKey, cat.items);
            const hasMore = cat.items.length > 6 && !searchQuery.trim();
            const isExpanded = showAll[catKey];
            
            return (
              <div key={catKey} id={catKey} className="mb-12 last:mb-0">
                <h3 className="text-xl uppercase tracking-wide mb-1 text-[#4B5056]" style={{ fontFamily: "'Josefin Sans', sans-serif", fontWeight: 700 }}>
                  {cat.heading}
                </h3>
                <p className="text-sm text-[#636972] mb-5">{cat.desc}</p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {visibleItems.map((item, idx) => (
                    <a 
                      key={idx}
                      href={`/generators/${item.slug}`}
                      className="block bg-white border border-[#C6C9CD] rounded-lg p-5 hover:border-[#8159BB] hover:shadow-md transition-all"
                    >
                      <div className="mb-3 text-2xl" aria-hidden="true">{cat.icon}</div>
                      <div className="font-bold text-[#2E2E2F] mb-1.5" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
                        {item.name}
                      </div>
                      <p className="text-sm text-[#636972]">{item.desc}</p>
                    </a>
                  ))}
                </div>
                
                {/* Show all toggle */}
                {hasMore && (
                  <button
                    onClick={() => toggleShowAll(catKey)}
                    aria-expanded={isExpanded}
                    aria-controls={`${catKey}-list`}
                    className="mt-4 text-sm text-[#8159BB] hover:underline focus:outline-none focus:ring-2 focus:ring-[#8159BB] rounded px-2 py-1"
                  >
                    {isExpanded ? `Show fewer` : `Show all ${cat.items.length} generators`}
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </section>
      
      {/* Section 6: How It Works */}
      <section className="py-16">
        <div className="max-w-[1200px] mx-auto px-5">
          <h2 className="text-center text-2xl md:text-3xl uppercase tracking-wide mb-10 text-[#4B5056]" style={{ fontFamily: "'Josefin Sans', sans-serif", fontWeight: 700 }}>
            {s.howItWorksHeading}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {howItWorksSteps.map((step, idx) => (
              <div key={idx} className="text-center">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#8159BB] text-white font-bold mb-4">
                  {step.num}
                </div>
                <div className="font-bold uppercase tracking-wide mb-2 text-[#2E2E2F]" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
                  {step.title}
                </div>
                <p className="text-sm text-[#636972] max-w-[280px] mx-auto">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Section 7: Why Strikingly */}
      <section className="bg-[#F4F6F8] py-16">
        <div className="max-w-[1200px] mx-auto px-5">
          <h2 className="text-center text-2xl md:text-3xl uppercase tracking-wide mb-10 text-[#4B5056]" style={{ fontFamily: "'Josefin Sans', sans-serif", fontWeight: 700 }}>
            {s.whyHeading}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {whyItems.map((item, idx) => (
              <div key={idx} className="bg-white border border-[#C6C9CD] rounded-lg p-6 text-center">
                <div className="text-3xl mb-4" aria-hidden="true">{item.icon}</div>
                <div className="font-bold uppercase tracking-wide mb-2 text-[#2E2E2F]" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
                  {item.title}
                </div>
                <p className="text-sm text-[#636972]">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Section 8: FAQ */}
      <section className="py-16">
        <div className="max-w-[800px] mx-auto px-5">
          <h2 className="text-center text-2xl md:text-3xl uppercase tracking-wide mb-8 text-[#4B5056]" style={{ fontFamily: "'Josefin Sans', sans-serif", fontWeight: 700 }}>
            {s.faqHeading}
          </h2>
          
          <div className="space-y-2">
            {faqItems.map((item, idx) => (
              <div key={idx} className="border border-[#C6C9CD] rounded-lg bg-white overflow-hidden">
                <button
                  onClick={() => toggleFaq(idx)}
                  aria-expanded={openFaq === idx}
                  aria-controls={`faq-answer-${idx}`}
                  className="w-full flex items-center justify-between px-5 py-4 text-left focus:outline-none focus:ring-2 focus:ring-[#8159BB] focus:ring-inset"
                >
                  <span className="font-medium text-[#2E2E2F] pr-4">{item.q}</span>
                  <span className="text-[#8159BB] text-xl flex-shrink-0" aria-hidden="true">
                    {openFaq === idx ? '−' : '+'}
                  </span>
                </button>
                {openFaq === idx && (
                  <div id={`faq-answer-${idx}`} className="px-5 pb-5 text-sm text-[#636972]">
                    <p>{item.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Section 9: Closing CTA */}
      <section className="py-16 border-t border-[#E2E4E7]">
        <div className="max-w-[600px] mx-auto px-5 text-center">
          <h2 className="text-2xl md:text-3xl uppercase tracking-wide mb-3 text-[#2E2E2F]" style={{ fontFamily: "'Josefin Sans', sans-serif", fontWeight: 700 }}>
            {s.closingHeading}
          </h2>
          <p className="mb-6 text-[#636972]">{s.closingSub}</p>
          <a 
            href="/s/ai_site_builder"
            className="inline-flex items-center justify-center h-11 px-8 rounded text-sm font-bold uppercase tracking-wide text-white transition-all hover:opacity-90"
            style={{ 
              background: 'linear-gradient(90deg, #7671FF 0%, #CB0C9F 100%)',
              fontFamily: "'Josefin Sans', sans-serif"
            }}
          >
            {s.closingCta}
          </a>
        </div>
      </section>
      
      {/* Section 10: Footer */}
      <footer className="bg-[#F4F6F8] border-t border-[#E2E4E7] py-12">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-y-8 mb-10">
            <div>
              <a href="/" className="text-[#8159BB] font-bold text-lg" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
                Strikingly
              </a>
            </div>
            <div>
              <div className="font-bold text-sm mb-3 text-[#2E2E2F]">Product</div>
              <ul className="space-y-1.5 text-sm">
                <li><a href="/templates" className="hover:text-[#8159BB]">Templates</a></li>
                <li><a href="/pricing" className="hover:text-[#8159BB]">Pricing</a></li>
                <li><a href="/blog" className="hover:text-[#8159BB]">Blog</a></li>
              </ul>
            </div>
            <div>
              <div className="font-bold text-sm mb-3 text-[#2E2E2F]">Company</div>
              <ul className="space-y-1.5 text-sm">
                <li><a href="/about" className="hover:text-[#8159BB]">About</a></li>
                <li><a href="/support" className="hover:text-[#8159BB]">Support</a></li>
              </ul>
            </div>
            <div>
              <div className="font-bold text-sm mb-3 text-[#2E2E2F]">Legal</div>
              <ul className="space-y-1.5 text-sm">
                <li><a href="/terms" className="hover:text-[#8159BB]">Terms</a></li>
                <li><a href="/privacy" className="hover:text-[#8159BB]">Privacy</a></li>
              </ul>
            </div>
            <div className="col-span-2 md:col-span-1 text-sm text-[#636972]">
              {s.footerCopyright}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Generators;
