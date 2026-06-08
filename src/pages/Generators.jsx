import React, { useState, useMemo } from 'react';

// Brand strings for i18n readiness
const strings = {
  en: {
    logo: "strikingly AI",
    breadcrumbHome: "Strikingly",
    breadcrumbCurrent: "AI Generators",
    heroH1Line1: "BUILD ANY KIND OF SITE",
    heroH1Line2: "WITH AI, IN AN INSTANT",
    heroSub: "Browse the right generator for what you're building, or jump straight into our AI site builder.",
    ctaPrimary: "START BUILDING - IT'S FREE",
    ctaSecondary: "BROWSE GENERATORS",
    featuredTitle: "FEATURED GENERATORS",
    featuredSub: "A few common starting points.",
    browseTitle: "BROWSE BY CATEGORY",
    allTitle: "ALL GENERATORS",
    allSub: "Sixty-plus generators, organized by what you're building.",
    searchPlaceholder: "Search generators...",
    searchLabel: "Search generators",
    searchResults: (count) => `${count} generators match`,
    searchEmpty: "No generators match your search.",
    searchClear: "Clear search",
    searchFallback: "Can't find it? Start with our AI builder.",
    howTitle: "HOW IT WORKS",
    whyTitle: "WHY STRIKINGLY",
    faqTitle: "FREQUENTLY ASKED QUESTIONS",
    closingTitle: "READY TO BUILD?",
    closingSub: "Pick a generator above, or jump straight into our AI builder.",
    closingCta: "START WITH AI BUILDER",
  }
};

// Featured generators (9 items, mixed categories)
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

// Category cards for browse section
const categoryCards = [
  { name: "Websites", desc: "AI-built business and personal sites for any goal.", slug: "websites", icon: "🌐" },
  { name: "Landing Pages", desc: "Single-page sites built to convert visitors fast.", slug: "landing-pages", icon: "📄" },
  { name: "Portfolios", desc: "Showcase your work with a clean, focused site.", slug: "portfolios", icon: "🎨" },
  { name: "Blogs", desc: "Publish-ready blogs with built-in SEO basics.", slug: "blogs", icon: "✍️" },
  { name: "Online Stores", desc: "Sell products online with payments built in.", slug: "stores", icon: "🛒" },
  { name: "Link-in-Bio", desc: "One link, all your places. Made for creators.", slug: "link-in-bio", icon: "🔗" },
];

// All generators data organized by category
const allGenerators = {
  websites: {
    title: "Websites",
    desc: "Full sites for businesses, events, and personal projects.",
    id: "websites",
    items: [
      { name: "AI Website Generator", desc: "Describe your business, get a full site", slug: "ai-website-generator" },
      { name: "One-Page Website Builder", desc: "Simple sites, single scroll", slug: "one-page-website-builder" },
      { name: "Wedding Website Generator", desc: "Share your day with guests", slug: "wedding-website-generator" },
      { name: "Restaurant Website Builder", desc: "Menu, hours, reservations, done", slug: "restaurant-website-builder" },
      { name: "Free Website Builder for Photographers", desc: "Showcase your work, book clients", slug: "free-website-builder-for-photographers" },
      { name: "AI Website for Yoga Instructors", desc: "Classes, pricing, and sign-ups", slug: "ai-website-for-yoga-instructors" },
      { name: "No-Code Website Builder", desc: "Build without touching code", slug: "no-code-website-builder" },
      { name: "Beautiful Website Generator", desc: "Stunning designs in seconds", slug: "beautiful-website-generator" },
      { name: "Business Website Builder", desc: "Professional sites for any company", slug: "business-website-builder" },
      { name: "Personal Website Generator", desc: "Your story, your way", slug: "personal-website-generator" },
    ]
  },
  landingPages: {
    title: "Landing Pages",
    desc: "Focused pages built to capture leads and drive action.",
    id: "landing-pages",
    items: [
      { name: "AI Landing Page Maker", desc: "One-page sites built to convert", slug: "ai-landing-page-maker" },
      { name: "Product Launch Landing Page", desc: "Announce and sell your product", slug: "product-launch-landing-page" },
      { name: "Event Registration Page", desc: "Sign-ups made simple", slug: "event-registration-page" },
      { name: "Free Landing Page Builder", desc: "No cost, fast results", slug: "free-landing-page-builder" },
      { name: "Lead Capture Page Generator", desc: "Collect emails, grow your list", slug: "lead-capture-page-generator" },
      { name: "One-Page Sales Page", desc: "Sell with a single scroll", slug: "one-page-sales-page" },
      { name: "AI Landing Page for Startups", desc: "Pitch your idea, win investors", slug: "ai-landing-page-for-startups" },
      { name: "No-Code Landing Page", desc: "Build without developers", slug: "no-code-landing-page" },
      { name: "Beautiful Landing Page Maker", desc: "Designs that convert", slug: "beautiful-landing-page-maker" },
      { name: "Marketing Landing Page Builder", desc: "Campaigns that perform", slug: "marketing-landing-page-builder" },
    ]
  },
  portfolios: {
    title: "Portfolios",
    desc: "Clean showcases for creatives and professionals.",
    id: "portfolios",
    items: [
      { name: "Free Portfolio Generator", desc: "For creatives, in minutes, no fee", slug: "free-portfolio-generator" },
      { name: "Portfolio Generator for Designers", desc: "Show your best work", slug: "portfolio-generator-for-designers" },
      { name: "AI Portfolio for Photographers", desc: "Galleries that impress", slug: "ai-portfolio-for-photographers" },
      { name: "One-Page Portfolio Builder", desc: "Simple, focused, beautiful", slug: "one-page-portfolio-builder" },
      { name: "No-Code Portfolio Maker", desc: "Build without code", slug: "no-code-portfolio-maker" },
      { name: "Beautiful Portfolio Generator", desc: "Designs that stand out", slug: "beautiful-portfolio-generator" },
      { name: "Portfolio for Writers", desc: "Clips, samples, and stories", slug: "portfolio-for-writers" },
      { name: "Portfolio for Developers", desc: "Projects, code, and case studies", slug: "portfolio-for-developers" },
      { name: "Free Portfolio for Artists", desc: "Your work, your way", slug: "free-portfolio-for-artists" },
      { name: "AI Portfolio Builder", desc: "Professional in seconds", slug: "ai-portfolio-builder" },
    ]
  },
  blogs: {
    title: "Blogs",
    desc: "Ready-to-publish blogs with SEO built in.",
    id: "blogs",
    items: [
      { name: "Blog Generator for Beginners", desc: "Publish-ready in minutes", slug: "blog-generator-for-beginners" },
      { name: "AI Blog Builder", desc: "Content that ranks", slug: "ai-blog-builder" },
      { name: "Free Blog Generator", desc: "Start writing, no cost", slug: "free-blog-generator" },
      { name: "One-Page Blog Builder", desc: "Simple posts, clean design", slug: "one-page-blog-builder" },
      { name: "No-Code Blog Maker", desc: "Write without tech hassle", slug: "no-code-blog-maker" },
      { name: "Beautiful Blog Generator", desc: "Designs readers love", slug: "beautiful-blog-generator" },
      { name: "Blog for Food Writers", desc: "Recipes, stories, and more", slug: "blog-for-food-writers" },
      { name: "Blog for Travel Creators", desc: "Share your journeys", slug: "blog-for-travel-creators" },
      { name: "Blog for Coaches", desc: "Insights that build trust", slug: "blog-for-coaches" },
      { name: "AI Blog for Small Business", desc: "Content that drives growth", slug: "ai-blog-for-small-business" },
    ]
  },
  stores: {
    title: "Online Stores",
    desc: "Sell products with payments built in.",
    id: "stores",
    items: [
      { name: "Online Store Builder", desc: "Start selling without writing code", slug: "online-store-builder" },
      { name: "Online Store Builder for Restaurants", desc: "Take orders, accept payments", slug: "online-store-builder-for-restaurants" },
      { name: "AI Store Generator", desc: "Products to checkout in minutes", slug: "ai-store-generator" },
      { name: "Free Online Store Maker", desc: "Sell without fees to start", slug: "free-online-store-maker" },
      { name: "One-Page Store Builder", desc: "Sell with a single scroll", slug: "one-page-store-builder" },
      { name: "No-Code Store Generator", desc: "Build without developers", slug: "no-code-store-generator" },
      { name: "Beautiful Store Builder", desc: "Designs that sell", slug: "beautiful-store-builder" },
      { name: "Store for Handmade Sellers", desc: "Showcase and sell your craft", slug: "store-for-handmade-sellers" },
      { name: "Store for Fashion Brands", desc: "Collections that convert", slug: "store-for-fashion-brands" },
      { name: "AI Store for Creators", desc: "Sell merch, digital goods, more", slug: "ai-store-for-creators" },
    ]
  },
  linkInBio: {
    title: "Link-in-Bio",
    desc: "One link, all your places.",
    id: "link-in-bio",
    items: [
      { name: "Link-in-Bio Generator", desc: "One link for all your channels", slug: "link-in-bio-generator" },
      { name: "Free Link-in-Bio Maker", desc: "No cost, instant setup", slug: "free-link-in-bio-maker" },
      { name: "AI Link-in-Bio Builder", desc: "Smart links that convert", slug: "ai-link-in-bio-builder" },
      { name: "One-Page Link-in-Bio", desc: "Simple, clean, effective", slug: "one-page-link-in-bio" },
      { name: "No-Code Link-in-Bio", desc: "Build without code", slug: "no-code-link-in-bio" },
      { name: "Beautiful Link-in-Bio Maker", desc: "Designs that match your brand", slug: "beautiful-link-in-bio-maker" },
      { name: "Link-in-Bio for Influencers", desc: "All your content, one place", slug: "link-in-bio-for-influencers" },
      { name: "Link-in-Bio for Musicians", desc: "Streams, merch, and more", slug: "link-in-bio-for-musicians" },
      { name: "Link-in-Bio for Creators", desc: "Your hub for everything", slug: "link-in-bio-for-creators" },
      { name: "AI Link-in-Bio for Brands", desc: "Professional links that work", slug: "ai-link-in-bio-for-brands" },
    ]
  }
};

// FAQ data
const faqData = [
  {
    q: "What is an AI site generator?",
    a: "An AI site generator is a tool that creates a complete website based on a short description you provide. Instead of starting from a blank page or a rigid template, you describe your business or goal in a sentence or two, and the generator builds a full site with pages, text, and images tailored to your needs."
  },
  {
    q: "How is a generator different from a template?",
    a: "A template is a pre-designed layout you customize by hand. A generator uses AI to create a unique site from your description, including content and structure. You still get full control to edit everything afterward, but the starting point is already personalized."
  },
  {
    q: "Are these generators free to use?",
    a: "Yes, you can generate, customize, and publish a site without a credit card. Some advanced features and custom domains may require a paid plan, but the core generator experience is free to start."
  },
  {
    q: "What kinds of sites can I build?",
    a: "You can build websites, landing pages, portfolios, blogs, online stores, and link-in-bio pages. Each category has multiple generators tuned for specific industries and goals, from restaurants to photographers to coaches."
  },
  {
    q: "Can I customize what the generator produces?",
    a: "Absolutely. Every generated site is fully editable. You can change text, swap images, reorder sections, add pages, and adjust the design until it matches your vision."
  },
  {
    q: "Do generated sites work on mobile?",
    a: "Yes. Every generator produces responsive sites that adapt automatically to phones, tablets, and desktops. No extra work is needed to make your site mobile-friendly."
  }
];

// How it works steps
const howSteps = [
  { num: "1", title: "PICK A GENERATOR", text: "Browse by category or search to find one that fits your goal." },
  { num: "2", title: "DESCRIBE YOUR SITE", text: "Tell our AI builder about your business in a sentence or two." },
  { num: "3", title: "GENERATE AND PUBLISH", text: "Get a fully built site in seconds. Customize anything, then go live." },
];

// Why Strikingly features
const whyFeatures = [
  { icon: "⚡", title: "LIVE IN SECONDS", text: "Describe your site, we build it. No setup, no learning curve." },
  { icon: "📱", title: "MOBILE BY DEFAULT", text: "Every generator produces responsive sites that work on any device." },
  { icon: "✨", title: "FREE TO START", text: "Generate, customize, and publish without a credit card." },
];

// Generator card component
const GeneratorCard = ({ name, desc, category, slug, showCategory = false }) => {
  const href = `/generators/${slug}`;
  return (
    <a
      href={href}
      className="block bg-white border border-[#C6C9CD] rounded-[3px] p-5 hover:border-[#8159BB] hover:shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#8159BB] focus:ring-offset-2"
      aria-label={name}
    >
      {showCategory && category && (
        <span className="inline-block text-[11px] font-bold uppercase tracking-wide text-[#8159BB] border border-[#8159BB] rounded-[3px] px-[6px] py-[2px] mb-3">
          {category}
        </span>
      )}
      <h4 className="font-bold text-[#2E2E2F] text-[15px] mb-1.5 leading-tight">{name}</h4>
      <p className="text-[#636972] text-sm leading-[1.5]">{desc}</p>
    </a>
  );
};

// Category subsection card (for All Generators)
const CategorySubsectionCard = ({ name, desc, slug, icon }) => {
  const href = `/generators/${slug}`;
  return (
    <a
      href={href}
      className="block bg-white border border-[#C6C9CD] rounded-[3px] p-5 hover:border-[#8159BB] hover:shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#8159BB] focus:ring-offset-2"
      aria-label={name}
    >
      <div className="text-3xl mb-3" aria-hidden="true">{icon}</div>
      <h4 className="font-bold text-[#2E2E2F] text-sm uppercase tracking-wide mb-1.5">{name}</h4>
      <p className="text-[#636972] text-sm leading-[1.5]">{desc}</p>
      <div className="mt-3 text-[#8159BB] text-sm flex items-center gap-1">
        Browse <span aria-hidden="true">→</span>
      </div>
    </a>
  );
};

// FAQ Accordion Item
const FAQItem = ({ item, index, isOpen, onToggle }) => {
  const id = `faq-${index}`;
  const panelId = `faq-panel-${index}`;
  
  return (
    <div className="border-b border-[#E2E4E7] last:border-b-0">
      <button
        id={id}
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={() => onToggle(index)}
        className="w-full flex items-center justify-between py-4 text-left focus:outline-none focus:ring-2 focus:ring-[#8159BB] focus:ring-inset"
      >
        <span className="font-bold text-[#2E2E2F] text-[15px] pr-4">{item.q}</span>
        <span className="text-[#8159BB] text-xl flex-shrink-0" aria-hidden="true">
          {isOpen ? '−' : '+'}
        </span>
      </button>
      <div
        id={panelId}
        role="region"
        aria-labelledby={id}
        className={`overflow-hidden transition-all duration-200 ${isOpen ? 'max-h-96 pb-4' : 'max-h-0'}`}
      >
        <p className="text-[#636972] text-sm leading-[1.5] pr-8">{item.a}</p>
      </div>
    </div>
  );
};

// Main Generators Hub Component
const Generators = () => {
  const s = strings.en;
  
  // Search state
  const [searchQuery, setSearchQuery] = useState('');
  
  // FAQ accordion state (first item expanded by default)
  const [openFaq, setOpenFaq] = useState(0);
  
  // Show all toggles state per category
  const [showAll, setShowAll] = useState({});
  
  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? -1 : index);
  };
  
  const toggleShowAll = (categoryId) => {
    setShowAll(prev => ({ ...prev, [categoryId]: !prev[categoryId] }));
  };
  
  // Flatten all generators for search
  const allGeneratorsFlat = useMemo(() => {
    const flat = [];
    Object.keys(allGenerators).forEach(catKey => {
      const cat = allGenerators[catKey];
      cat.items.forEach(item => {
        flat.push({
          ...item,
          category: cat.title,
          categoryId: cat.id
        });
      });
    });
    return flat;
  }, []);
  
  // Filter generators based on search
  const filteredGenerators = useMemo(() => {
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
        cat.title.toLowerCase().includes(q)
      );
      
      if (matchingItems.length > 0) {
        filtered[catKey] = {
          ...cat,
          items: matchingItems
        };
      }
    });
    
    return filtered;
  }, [searchQuery]);
  
  // Count matching results
  const resultCount = useMemo(() => {
    if (!searchQuery.trim()) return allGeneratorsFlat.length;
    return Object.keys(filteredGenerators).reduce((sum, key) => sum + filteredGenerators[key].items.length, 0);
  }, [searchQuery, filteredGenerators, allGeneratorsFlat.length]);
  
  // Clear search
  const clearSearch = () => {
    setSearchQuery('');
  };
  
  // Get visible items for a category (with show all logic)
  const getVisibleItems = (catKey, items) => {
    const isShowingAll = showAll[catKey];
    if (isShowingAll || searchQuery.trim()) {
      return items;
    }
    // Default: show first 6 items
    return items.slice(0, 6);
  };
  
  // Check if category has more items to show
  const hasMoreItems = (catKey, items) => {
    return items.length > 6 && !searchQuery.trim();
  };
  
  return (
    <div className="min-h-screen bg-white text-[#636972] font-sans">
      {/* Section 0: Top Bar */}
      <header className="bg-white border-b border-[#E2E4E7]">
        <div className="max-w-[1200px] mx-auto px-5 h-14 flex items-center">
          <a href="/" className="font-bold text-[#2E2E2F] text-lg tracking-tight" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
            {s.logo}
          </a>
        </div>
      </header>
      
      {/* Section 1: Breadcrumb */}
      <nav aria-label="Breadcrumb" className="max-w-[1200px] mx-auto px-5 pt-4">
        <ol className="flex items-center text-sm text-[#636972]">
          <li>
            <a href="/" className="hover:text-[#8159BB] transition-colors">{s.breadcrumbHome}</a>
          </li>
          <li className="mx-2 text-[#8159BB]" aria-hidden="true">›</li>
          <li className="text-[#636972]">{s.breadcrumbCurrent}</li>
        </ol>
      </nav>
      
      {/* Section 2: Hero */}
      <section className="max-w-[1200px] mx-auto px-5 pt-16 pb-20 md:pt-20 md:pb-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left column */}
          <div>
            <h1 className="text-[40px] md:text-[48px] leading-[1.15] font-bold tracking-[-0.5px] mb-4" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
              <span className="block text-[#2E2E2F] uppercase">{s.heroH1Line1}</span>
              <span 
                className="block uppercase bg-clip-text text-transparent"
                style={{ 
                  backgroundImage: 'linear-gradient(90deg, #7671FF 0%, #CB0C9F 100%)',
                  fontFamily: "'Josefin Sans', sans-serif"
                }}
              >
                {s.heroH1Line2}
              </span>
            </h1>
            <p className="text-[#636972] text-[15px] leading-[1.6] max-w-[460px] mb-8">
              {s.heroSub}
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="/s/ai_site_builder"
                className="inline-flex items-center justify-center h-11 px-6 rounded-[4px] text-white text-sm font-bold uppercase tracking-wide transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#8159BB]"
                style={{ background: 'linear-gradient(90deg, #7671FF 0%, #CB0C9F 100%)' }}
              >
                {s.ctaPrimary}
              </a>
              <a
                href="#all-generators"
                className="inline-flex items-center justify-center h-11 px-6 rounded-[4px] text-sm font-bold uppercase tracking-wide border border-[#8159BB] text-[#8159BB] hover:bg-[#8159BB] hover:text-white transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#8159BB]"
              >
                {s.ctaSecondary}
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
              <defs>
                <linearGradient id="heroGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#F4F0FA" />
                  <stop offset="100%" stopColor="#F8F4FC" />
                </linearGradient>
              </defs>
              {/* Browser frame */}
              <rect x="30" y="30" width="360" height="220" rx="8" fill="#FFFFFF" stroke="#C6C9CD" strokeWidth="1.5"/>
              {/* Browser header */}
              <rect x="30" y="30" width="360" height="28" rx="8" fill="#F4F6F8"/>
              <circle cx="52" cy="44" r="4" fill="#C6C9CD"/>
              <circle cx="66" cy="44" r="4" fill="#C6C9CD"/>
              <circle cx="80" cy="44" r="4" fill="#C6C9CD"/>
              {/* URL bar */}
              <rect x="100" y="38" width="200" height="12" rx="6" fill="#E2E4E7"/>
              {/* Content area - hero illustration */}
              <rect x="50" y="75" width="320" height="30" rx="4" fill="#F4F6F8"/>
              <rect x="50" y="115" width="200" height="12" rx="2" fill="#E2E4E7"/>
              <rect x="50" y="135" width="260" height="12" rx="2" fill="#E2E4E7"/>
              {/* Purple accent blocks */}
              <rect x="50" y="165" width="80" height="60" rx="4" fill="#8159BB" fillOpacity="0.15"/>
              <rect x="145" y="165" width="80" height="60" rx="4" fill="#7671FF" fillOpacity="0.15"/>
              <rect x="240" y="165" width="80" height="60" rx="4" fill="#CB0C9F" fillOpacity="0.15"/>
              {/* Subtle gradient wash hint */}
              <circle cx="350" cy="60" r="60" fill="#8159BB" fillOpacity="0.04"/>
            </svg>
          </div>
        </div>
      </section>
      
      {/* Section 3: Featured Generators */}
      <section className="bg-[#F4F6F8] py-16">
        <div className="max-w-[1200px] mx-auto px-5">
          <h2 className="text-[28px] md:text-[32px] font-bold text-[#4B5056] uppercase tracking-[-0.3px] mb-2 text-center" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
            {s.featuredTitle}
          </h2>
          <p className="text-center text-[#636972] mb-10">{s.featuredSub}</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {featuredGenerators.map((gen, idx) => (
              <GeneratorCard
                key={idx}
                name={gen.name}
                desc={gen.desc}
                category={gen.category}
                slug={gen.slug}
                showCategory={true}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Section 4: Browse by Category */}
      <section className="py-16">
        <div className="max-w-[1200px] mx-auto px-5">
          <h2 className="text-[28px] md:text-[32px] font-bold text-[#4B5056] uppercase tracking-[-0.3px] mb-10 text-center" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
            {s.browseTitle}
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {categoryCards.map((cat, idx) => (
              <CategorySubsectionCard
                key={idx}
                name={cat.name}
                desc={cat.desc}
                slug={cat.slug}
                icon={cat.icon}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Section 5: All Generators Directory */}
      <section id="all-generators" className="bg-[#F4F6F8] py-16 scroll-mt-4">
        <div className="max-w-[1200px] mx-auto px-5">
          <h2 className="text-[28px] md:text-[32px] font-bold text-[#4B5056] uppercase tracking-[-0.3px] mb-2" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
            {s.allTitle}
          </h2>
          <p className="text-[#636972] mb-8">{s.allSub}</p>
          
          {/* Search input */}
          <div className="mb-8">
            <div className="relative max-w-[480px]">
              <label htmlFor="generator-search" className="sr-only">{s.searchLabel}</label>
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#636972]" aria-hidden="true">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8"/>
                  <path d="M21 21l-4.35-4.35"/>
                </svg>
              </div>
              <input
                id="generator-search"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={s.searchPlaceholder}
                aria-label={s.searchLabel}
                className="w-full h-11 pl-11 pr-4 rounded-[4px] border border-[#C6C9CD] bg-white text-sm placeholder:text-[#636972] focus:outline-none focus:border-[#8159BB] focus:ring-1 focus:ring-[#8159BB]"
              />
            </div>
            {searchQuery.trim() && (
              <p className="mt-2 text-sm text-[#636972]">
                {s.searchResults(resultCount)}
              </p>
            )}
          </div>
          
          {/* Empty state */}
          {Object.keys(filteredGenerators).length === 0 && (
            <div className="bg-white border border-[#C6C9CD] rounded-[3px] p-8 text-center">
              <p className="text-[#636972] mb-4">{s.searchEmpty}</p>
              <button
                onClick={clearSearch}
                className="text-[#8159BB] hover:underline mr-4"
              >
                {s.searchClear}
              </button>
              <a href="/s/ai_site_builder" className="text-[#8159BB] hover:underline">
                {s.searchFallback}
              </a>
            </div>
          )}
          
          {/* Category subsections */}
          {Object.keys(filteredGenerators).map((catKey) => {
            const cat = filteredGenerators[catKey];
            const visibleItems = getVisibleItems(cat.id, cat.items);
            const showToggle = hasMoreItems(cat.id, cat.items);
            const isExpanded = showAll[cat.id] || searchQuery.trim();
            
            return (
              <div key={catKey} id={cat.id} className="mb-12 last:mb-0 scroll-mt-4">
                <h3 className="text-xl font-bold text-[#4B5056] uppercase tracking-wide mb-1" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
                  {cat.title}
                </h3>
                <p className="text-[#636972] text-sm mb-5">{cat.desc}</p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {visibleItems.map((item, idx) => (
                    <GeneratorCard
                      key={idx}
                      name={item.name}
                      desc={item.desc}
                      slug={item.slug}
                      showCategory={false}
                    />
                  ))}
                </div>
                
                {/* Show all toggle */}
                {showToggle && (
                  <button
                    onClick={() => toggleShowAll(cat.id)}
                    aria-expanded={isExpanded}
                    aria-controls={`section-${cat.id}`}
                    className="mt-4 text-sm text-[#8159BB] hover:underline focus:outline-none focus:ring-2 focus:ring-[#8159BB] focus:ring-offset-2 rounded"
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
          <h2 className="text-[28px] md:text-[32px] font-bold text-[#4B5056] uppercase tracking-[-0.3px] mb-10 text-center" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
            {s.howTitle}
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {howSteps.map((step, idx) => (
              <div key={idx} className="text-center">
                <div className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-[#8159BB] text-white font-bold text-sm mb-4">
                  {step.num}
                </div>
                <h4 className="font-bold text-[#2E2E2F] uppercase tracking-wide text-sm mb-2">{step.title}</h4>
                <p className="text-[#636972] text-sm leading-[1.6]">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Section 7: Why Strikingly */}
      <section className="bg-[#F4F6F8] py-16">
        <div className="max-w-[1200px] mx-auto px-5">
          <h2 className="text-[28px] md:text-[32px] font-bold text-[#4B5056] uppercase tracking-[-0.3px] mb-10 text-center" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
            {s.whyTitle}
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {whyFeatures.map((feature, idx) => (
              <div key={idx} className="text-center">
                <div className="text-3xl mb-4" aria-hidden="true">{feature.icon}</div>
                <h4 className="font-bold text-[#2E2E2F] uppercase tracking-wide text-sm mb-2">{feature.title}</h4>
                <p className="text-[#636972] text-sm leading-[1.6]">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Section 8: FAQ */}
      <section className="py-16">
        <div className="max-w-[1200px] mx-auto px-5">
          <h2 className="text-[28px] md:text-[32px] font-bold text-[#4B5056] uppercase tracking-[-0.3px] mb-8 text-center" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
            {s.faqTitle}
          </h2>
          
          <div className="max-w-[720px] mx-auto bg-white border border-[#C6C9CD] rounded-[3px] divide-y divide-[#E2E4E7]">
            {faqData.map((item, idx) => (
              <FAQItem
                key={idx}
                item={item}
                index={idx}
                isOpen={openFaq === idx}
                onToggle={toggleFaq}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Section 9: Closing CTA */}
      <section className="py-16 bg-white border-t border-[#E2E4E7]">
        <div className="max-w-[1200px] mx-auto px-5 text-center">
          <h2 className="text-[28px] md:text-[32px] font-bold text-[#4B5056] uppercase tracking-[-0.3px] mb-3" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
            {s.closingTitle}
          </h2>
          <p className="text-[#636972] mb-8">{s.closingSub}</p>
          <a
            href="/s/ai_site_builder"
            className="inline-flex items-center justify-center h-11 px-8 rounded-[4px] text-white text-sm font-bold uppercase tracking-wide transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#8159BB]"
            style={{ background: 'linear-gradient(90deg, #7671FF 0%, #CB0C9F 100%)' }}
          >
            {s.closingCta}
          </a>
        </div>
      </section>
      
      {/* Section 10: Footer */}
      <footer className="bg-[#2E2E2F] text-[#A0A4A8] py-12 text-sm">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-y-8 mb-10">
            <div>
              <div className="font-bold text-white mb-4" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>strikingly</div>
            </div>
            <div>
              <div className="font-bold text-white mb-3 text-xs uppercase tracking-wide">Product</div>
              <ul className="space-y-1.5">
                <li><a href="/templates" className="hover:text-white transition-colors">Templates</a></li>
                <li><a href="/pricing" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="/blog" className="hover:text-white transition-colors">Blog</a></li>
              </ul>
            </div>
            <div>
              <div className="font-bold text-white mb-3 text-xs uppercase tracking-wide">Company</div>
              <ul className="space-y-1.5">
                <li><a href="/about" className="hover:text-white transition-colors">About</a></li>
                <li><a href="/support" className="hover:text-white transition-colors">Support</a></li>
              </ul>
            </div>
            <div>
              <div className="font-bold text-white mb-3 text-xs uppercase tracking-wide">Legal</div>
              <ul className="space-y-1.5">
                <li><a href="/terms" className="hover:text-white transition-colors">Terms</a></li>
                <li><a href="/privacy" className="hover:text-white transition-colors">Privacy</a></li>
              </ul>
            </div>
            <div className="col-span-2 md:col-span-1 text-xs">
              © {new Date().getFullYear()} Strikingly, Inc.
            </div>
          </div>
        </div>
      </footer>
      
      {/* BreadcrumbList JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
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
        }}
      />
    </div>
  );
};

export default Generators;
