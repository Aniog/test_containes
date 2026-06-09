import React, { useState, useMemo } from 'react';

// i18n strings
const strings = {
  en: {
    logo: "strikingly AI",
    breadcrumb: { home: "Strikingly", current: "AI Generators" },
    hero: {
      line1: "BUILD ANY KIND OF SITE",
      line2: "WITH AI, IN AN INSTANT",
      subheadline: "Browse the right generator for what you're building, or jump straight into our AI site builder.",
      ctaPrimary: "START BUILDING - IT'S FREE",
      ctaSecondary: "BROWSE GENERATORS"
    },
    featured: {
      heading: "FEATURED GENERATORS",
      subheading: "A few common starting points."
    },
    browseCategory: {
      heading: "BROWSE BY CATEGORY",
      categories: [
        { id: "websites", name: "WEBSITES", desc: "AI-built business and personal sites for any goal." },
        { id: "landing-pages", name: "LANDING PAGES", desc: "Single-page sites built to convert visitors fast." },
        { id: "portfolios", name: "PORTFOLIOS", desc: "Showcase your work with a clean, focused site." },
        { id: "blogs", name: "BLOGS", desc: "Publish-ready blogs with built-in SEO basics." },
        { id: "stores", name: "ONLINE STORES", desc: "Sell products online with payments built in." },
        { id: "link-in-bio", name: "LINK-IN-BIO", desc: "One link, all your places. Made for creators." }
      ]
    },
    allGenerators: {
      heading: "ALL GENERATORS",
      subheading: "Sixty-plus generators, organized by what you're building.",
      searchPlaceholder: "Search generators...",
      searchLabel: "Search generators",
      resultCount: (count) => `${count} generators match`,
      emptyState: "No generators match your search.",
      emptyCta: "Can't find it? Start with our AI builder.",
      showAll: (count) => `Show all ${count} generators`,
      showLess: "Show less"
    },
    howItWorks: {
      heading: "HOW IT WORKS",
      steps: [
        { num: "1", title: "PICK A GENERATOR", desc: "Browse by category or search to find one that fits your goal." },
        { num: "2", title: "DESCRIBE YOUR SITE", desc: "Tell our AI builder about your business in a sentence or two." },
        { num: "3", title: "GENERATE AND PUBLISH", desc: "Get a fully built site in seconds. Customize anything, then go live." }
      ]
    },
    whyStrikingly: {
      heading: "WHY STRIKINGLY",
      items: [
        { icon: "⚡", title: "LIVE IN SECONDS", desc: "Describe your site, we build it. No setup, no learning curve." },
        { icon: "📱", title: "MOBILE BY DEFAULT", desc: "Every generator produces responsive sites that work on any device." },
        { icon: "✨", title: "FREE TO START", desc: "Generate, customize, and publish without a credit card." }
      ]
    },
    faq: {
      heading: "FREQUENTLY ASKED QUESTIONS",
      questions: [
        { q: "What is an AI site generator?", a: "An AI site generator is a tool that creates a complete website based on a short description you provide. Instead of starting from a blank canvas or a rigid template, you describe your business or goal in plain language, and the AI builds a site tailored to your needs." },
        { q: "How is a generator different from a template?", a: "Templates are pre-designed layouts you customize manually. Generators use AI to create a unique site from your description, including structure, copy, and imagery. You still get full control to edit everything afterward." },
        { q: "Are these generators free to use?", a: "Yes. You can generate, customize, and publish a site without a credit card. Paid plans unlock additional features like custom domains and advanced analytics." },
        { q: "What kinds of sites can I build?", a: "You can build business sites, landing pages, portfolios, blogs, online stores, link-in-bio pages, and more. Each generator is tuned for a specific use case or audience." },
        { q: "Can I customize what the generator produces?", a: "Absolutely. Every generated site is fully editable. Change text, swap images, reorder sections, or adjust the design to match your brand." },
        { q: "Do generated sites work on mobile?", a: "Yes. All generators produce responsive sites that adapt automatically to phones, tablets, and desktops." }
      ]
    },
    closing: {
      heading: "READY TO BUILD?",
      sub: "Pick a generator above, or jump straight into our AI builder.",
      cta: "START WITH AI BUILDER"
    },
    footer: {
      columns: [
        { title: "Product", links: [{ label: "Templates", href: "/templates" }, { label: "Pricing", href: "/pricing" }, { label: "Blog", href: "/blog" }] },
        { title: "Company", links: [{ label: "About", href: "/about" }, { label: "Support", href: "/support" }] },
        { title: "Legal", links: [{ label: "Terms", href: "/terms" }, { label: "Privacy", href: "/privacy" }] },
        { title: "Resources", links: [{ label: "Help Center", href: "/support" }] }
      ],
      copyright: "© 2026 Strikingly, Inc."
    }
  }
};

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
  { name: "Blog Generator for Beginners", desc: "Publish-ready in minutes", category: "Blog", slug: "blog-generator-for-beginners" }
];

// All generators by category (8-12 per category)
const allGeneratorsByCategory = {
  websites: {
    id: "websites",
    heading: "Websites",
    desc: "Business and personal sites for any goal.",
    icon: "🌐",
    generators: [
      { name: "AI Website Generator", desc: "Describe your business, get a full site", slug: "ai-website-generator" },
      { name: "One-Page Website Builder", desc: "Simple sites, single scroll", slug: "one-page-website-builder" },
      { name: "Wedding Website Generator", desc: "Share your day with guests", slug: "wedding-website-generator" },
      { name: "Restaurant Website Builder", desc: "Menu, hours, reservations, done", slug: "restaurant-website-builder" },
      { name: "Free Website Builder for Photographers", desc: "Showcase your work beautifully", slug: "free-website-builder-for-photographers" },
      { name: "AI Website for Yoga Instructors", desc: "Classes, bookings, and more", slug: "ai-website-for-yoga-instructors" },
      { name: "No-Code Website Builder", desc: "Build without touching code", slug: "no-code-website-builder" },
      { name: "Beautiful Website Generator", desc: "Stunning designs in seconds", slug: "beautiful-website-generator" },
      { name: "AI Website for Small Business", desc: "Professional presence, fast", slug: "ai-website-for-small-business" },
      { name: "One-Page Site for Consultants", desc: "Clean, focused, effective", slug: "one-page-site-for-consultants" }
    ]
  },
  "landing-pages": {
    id: "landing-pages",
    heading: "Landing Pages",
    desc: "Single-page sites built to convert visitors fast.",
    icon: "📄",
    generators: [
      { name: "AI Landing Page Maker", desc: "One-page sites built to convert", slug: "ai-landing-page-maker" },
      { name: "Free Landing Page Generator", desc: "Launch fast, convert faster", slug: "free-landing-page-generator" },
      { name: "Product Launch Landing Page", desc: "Announce and sell your product", slug: "product-launch-landing-page" },
      { name: "Event Registration Page Builder", desc: "Collect signups with ease", slug: "event-registration-page-builder" },
      { name: "Lead Capture Landing Page", desc: "Grow your email list", slug: "lead-capture-landing-page" },
      { name: "AI Sales Page Generator", desc: "Persuasive pages that sell", slug: "ai-sales-page-generator" },
      { name: "One-Page Offer Builder", desc: "Present your offer clearly", slug: "one-page-offer-builder" },
      { name: "Landing Page for Startups", desc: "Tell your story, get users", slug: "landing-page-for-startups" }
    ]
  },
  portfolios: {
    id: "portfolios",
    heading: "Portfolios",
    desc: "Showcase your work with a clean, focused site.",
    icon: "🎨",
    generators: [
      { name: "Free Portfolio Generator", desc: "For creatives, in minutes, no fee", slug: "free-portfolio-generator" },
      { name: "Portfolio Generator for Designers", desc: "Present your best work", slug: "portfolio-generator-for-designers" },
      { name: "AI Portfolio for Photographers", desc: "Beautiful galleries, fast", slug: "ai-portfolio-for-photographers" },
      { name: "Artist Portfolio Builder", desc: "Showcase paintings and prints", slug: "artist-portfolio-builder" },
      { name: "Developer Portfolio Generator", desc: "Code projects, clean layout", slug: "developer-portfolio-generator" },
      { name: "Writer Portfolio Site Builder", desc: "Essays, articles, clips", slug: "writer-portfolio-site-builder" },
      { name: "Freelancer Portfolio Maker", desc: "One site, all your services", slug: "freelancer-portfolio-maker" },
      { name: "Architecture Portfolio Generator", desc: "Projects and process", slug: "architecture-portfolio-generator" }
    ]
  },
  blogs: {
    id: "blogs",
    heading: "Blogs",
    desc: "Publish-ready blogs with built-in SEO basics.",
    icon: "✍️",
    generators: [
      { name: "Blog Generator for Beginners", desc: "Publish-ready in minutes", slug: "blog-generator-for-beginners" },
      { name: "AI Blog Builder", desc: "Start writing, stay consistent", slug: "ai-blog-builder" },
      { name: "Personal Blog Generator", desc: "Your voice, your site", slug: "personal-blog-generator" },
      { name: "Food Blog Website Builder", desc: "Recipes, stories, photos", slug: "food-blog-website-builder" },
      { name: "Travel Blog Generator", desc: "Share your journeys", slug: "travel-blog-generator" },
      { name: "Tech Blog Builder", desc: "Reviews, tutorials, news", slug: "tech-blog-builder" },
      { name: "Fashion Blog Site Maker", desc: "Style, trends, inspiration", slug: "fashion-blog-site-maker" },
      { name: "Free Blog Generator", desc: "No cost, full features", slug: "free-blog-generator" }
    ]
  },
  stores: {
    id: "stores",
    heading: "Online Stores",
    desc: "Sell products online with payments built in.",
    icon: "🛒",
    generators: [
      { name: "Online Store Builder", desc: "Start selling without writing code", slug: "online-store-builder" },
      { name: "Online Store Builder for Restaurants", desc: "Take orders, accept payments", slug: "online-store-builder-for-restaurants" },
      { name: "AI Store Generator", desc: "Products, cart, checkout ready", slug: "ai-store-generator" },
      { name: "Free Online Store Maker", desc: "Sell without fees to start", slug: "free-online-store-maker" },
      { name: "Handmade Store Builder", desc: "Showcase and sell crafts", slug: "handmade-store-builder" },
      { name: "Digital Products Store", desc: "Sell downloads and courses", slug: "digital-products-store" },
      { name: "Fashion Store Generator", desc: "Clothing, accessories, more", slug: "fashion-store-generator" },
      { name: "One-Page Store Builder", desc: "Simple checkout, fast sales", slug: "one-page-store-builder" }
    ]
  },
  "link-in-bio": {
    id: "link-in-bio",
    heading: "Link-in-Bio",
    desc: "One link, all your places. Made for creators.",
    icon: "🔗",
    generators: [
      { name: "Link-in-Bio Generator", desc: "One link for all your channels", slug: "link-in-bio-generator" },
      { name: "Creator Link Page Builder", desc: "All your links in one place", slug: "creator-link-page-builder" },
      { name: "Free Link-in-Bio Maker", desc: "Simple, beautiful, free", slug: "free-link-in-bio-maker" },
      { name: "Influencer Link Page", desc: "Promote everything you do", slug: "influencer-link-page" },
      { name: "Artist Link-in-Bio Builder", desc: "Music, merch, socials", slug: "artist-link-in-bio-builder" },
      { name: "Podcast Link Page Generator", desc: "Episodes, guests, listen", slug: "podcast-link-page-generator" },
      { name: "One-Page Link Hub", desc: "Clean, fast, mobile-first", slug: "one-page-link-hub" },
      { name: "AI Link-in-Bio Maker", desc: "Describe yourself, get a page", slug: "ai-link-in-bio-maker" }
    ]
  }
};

// Helper to create slug from name
const createSlug = (name) => name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');

// SVG Illustration for Hero
const HeroIllustration = () => (
  <svg width="400" height="320" viewBox="0 0 400 320" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect x="40" y="40" width="320" height="240" rx="12" fill="#F4F6F8" stroke="#C6C9CD" strokeWidth="2"/>
    <rect x="60" y="60" width="280" height="40" rx="6" fill="#E2E4E7"/>
    <rect x="60" y="115" width="180" height="12" rx="3" fill="#C6C9CD"/>
    <rect x="60" y="140" width="240" height="12" rx="3" fill="#C6C9CD"/>
    <rect x="60" y="165" width="160" height="12" rx="3" fill="#C6C9CD"/>
    <rect x="60" y="200" width="120" height="32" rx="6" fill="#8159BB"/>
    <circle cx="320" cy="80" r="24" fill="#E2E4E7"/>
    <circle cx="320" cy="80" r="16" fill="#C6C9CD"/>
    <rect x="80" y="260" width="240" height="8" rx="4" fill="#E2E4E7"/>
  </svg>
);

// Category icon SVGs
const CategoryIcon = ({ icon }) => (
  <div className="w-12 h-12 flex items-center justify-center text-2xl mb-3" aria-hidden="true">{icon}</div>
);

function App() {
  const s = strings.en;
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedSections, setExpandedSections] = useState({});
  const [expandedFaqs, setExpandedFaqs] = useState({ 0: true });

  // Flatten all generators for search
  const allGeneratorsFlat = useMemo(() => {
    const flat = [];
    Object.values(allGeneratorsByCategory).forEach(cat => {
      cat.generators.forEach(gen => {
        flat.push({ ...gen, category: cat.heading, categoryId: cat.id });
      });
    });
    return flat;
  }, []);

  // Search filtering
  const filteredResults = useMemo(() => {
    if (!searchQuery.trim()) {
      return { query: '', results: null, count: 0 };
    }
    const q = searchQuery.toLowerCase().trim();
    const matches = allGeneratorsFlat.filter(gen =>
      gen.name.toLowerCase().includes(q) ||
      gen.desc.toLowerCase().includes(q) ||
      gen.category.toLowerCase().includes(q)
    );
    return { query: q, results: matches, count: matches.length };
  }, [searchQuery, allGeneratorsFlat]);

  // Get visible generators per category based on search
  const getVisibleGenerators = (categoryId) => {
    const category = allGeneratorsByCategory[categoryId];
    if (!searchQuery.trim()) {
      return category.generators;
    }
    const q = searchQuery.toLowerCase().trim();
    return category.generators.filter(gen =>
      gen.name.toLowerCase().includes(q) ||
      gen.desc.toLowerCase().includes(q)
    );
  };

  // Categories that have matches when searching
  const visibleCategories = useMemo(() => {
    if (!searchQuery.trim()) {
      return Object.keys(allGeneratorsByCategory);
    }
    return Object.keys(allGeneratorsByCategory).filter(catId => {
      const visible = getVisibleGenerators(catId);
      return visible.length > 0;
    });
  }, [searchQuery]);

  // Toggle section expansion
  const toggleSection = (categoryId) => {
    setExpandedSections(prev => ({
      ...prev,
      [categoryId]: !prev[categoryId]
    }));
  };

  // Toggle FAQ
  const toggleFaq = (index) => {
    setExpandedFaqs(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  // Clear search
  const clearSearch = () => {
    setSearchQuery('');
  };

  // Get display count for a category
  const getDisplayCount = (categoryId) => {
    const visible = getVisibleGenerators(categoryId);
    const isExpanded = expandedSections[categoryId];
    if (isExpanded) return visible.length;
    return Math.min(6, visible.length);
  };

  return (
    <div className="min-h-screen bg-white text-[#2E2E2F] font-['Open_Sans']">
      {/* Section 0: Top Bar */}
      <header className="bg-white border-b border-[#E2E4E7]">
        <div className="max-w-[1200px] mx-auto px-5 h-14 flex items-center">
          <a href="/" className="font-['Josefin_Sans'] font-bold text-lg tracking-wide text-[#4B5056]">
            {s.logo}
          </a>
        </div>
      </header>

      {/* Section 1: Breadcrumb */}
      <nav aria-label="Breadcrumb" className="max-w-[1200px] mx-auto px-5 py-3">
        <ol className="flex items-center text-sm text-[#636972]">
          <li>
            <a href="/" className="hover:text-[#8159BB]">{s.breadcrumb.home}</a>
          </li>
          <li className="mx-2 text-[#8159BB]">›</li>
          <li aria-current="page" className="text-[#636972]">{s.breadcrumb.current}</li>
        </ol>
      </nav>

      {/* Section 2: Hero */}
      <section className="max-w-[1200px] mx-auto px-5 pt-8 pb-16 md:pt-12 md:pb-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="font-['Josefin_Sans'] font-bold text-[40px] md:text-[48px] leading-[1.2] tracking-[0.5px] mb-4">
              <span className="text-[#2E2E2F] block uppercase">{s.hero.line1}</span>
              <span 
                className="block uppercase bg-clip-text text-transparent"
                style={{ backgroundImage: 'linear-gradient(90deg, #7671FF 0%, #CB0C9F 100%)' }}
              >
                {s.hero.line2}
              </span>
            </h1>
            <p className="text-[#636972] text-[15px] leading-[1.6] mb-8 max-w-[460px]">
              {s.hero.subheadline}
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a 
                href="/s/ai_site_builder"
                className="inline-flex items-center justify-center h-11 px-6 rounded font-['Josefin_Sans'] font-bold text-sm uppercase tracking-[0.5px] text-white"
                style={{ background: 'linear-gradient(90deg, #7671FF 0%, #CB0C9F 100%)' }}
              >
                {s.hero.ctaPrimary}
              </a>
              <a 
                href="#all-generators"
                className="inline-flex items-center justify-center h-11 px-6 rounded font-['Josefin_Sans'] font-bold text-sm uppercase tracking-[0.5px] border border-[#8159BB] text-[#8159BB] hover:bg-[#8159BB] hover:text-white transition-colors"
              >
                {s.hero.ctaSecondary}
              </a>
            </div>
          </div>
          <div className="flex justify-center md:justify-end">
            <HeroIllustration />
          </div>
        </div>
      </section>

      {/* Section 3: Featured Generators */}
      <section className="max-w-[1200px] mx-auto px-5 pb-16">
        <div className="mb-8">
          <h2 className="font-['Josefin_Sans'] font-bold text-[28px] md:text-[32px] text-[#4B5056] tracking-[0.5px] mb-2">
            {s.featured.heading}
          </h2>
          <p className="text-[#636972]">{s.featured.subheading}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {featuredGenerators.map((gen, idx) => (
            <a 
              key={idx}
              href={`/generators/${gen.slug}`}
              className="block p-5 bg-white border border-[#C6C9CD] rounded-[3px] hover:border-[#8159BB] hover:shadow-md transition-all"
            >
              <div className="font-['Josefin_Sans'] font-bold text-[15px] mb-2 text-[#2E2E2F]">{gen.name}</div>
              <div className="text-[#636972] text-sm mb-3 leading-[1.5]">{gen.desc}</div>
              <span className="inline-block text-[11px] px-1.5 py-0.5 border border-[#8159BB] text-[#8159BB] rounded font-['Josefin_Sans'] uppercase tracking-[0.5px]">
                {gen.category}
              </span>
            </a>
          ))}
        </div>
      </section>

      {/* Section 4: Browse by Category */}
      <section className="bg-[#F4F6F8] py-16">
        <div className="max-w-[1200px] mx-auto px-5">
          <h2 className="font-['Josefin_Sans'] font-bold text-[28px] md:text-[32px] text-[#4B5056] tracking-[0.5px] mb-8">
            {s.browseCategory.heading}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {s.browseCategory.categories.map((cat, idx) => (
              <a 
                key={idx}
                href={`/generators#${cat.id}`}
                className="block p-6 bg-white border border-[#C6C9CD] rounded-[3px] hover:border-[#8159BB] hover:shadow-md transition-all group"
              >
                <CategoryIcon icon={allGeneratorsByCategory[cat.id]?.icon || "📁"} />
                <div className="font-['Josefin_Sans'] font-bold text-sm uppercase tracking-[0.5px] mb-2 text-[#4B5056]">
                  {cat.name}
                </div>
                <p className="text-[#636972] text-sm mb-4 leading-[1.5]">{cat.desc}</p>
                <span className="inline-flex items-center text-[#8159BB] group-hover:translate-x-0.5 transition-transform">
                  →
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: All Generators Directory */}
      <section id="all-generators" className="max-w-[1200px] mx-auto px-5 py-16">
        <div className="mb-8">
          <h2 className="font-['Josefin_Sans'] font-bold text-[28px] md:text-[32px] text-[#4B5056] tracking-[0.5px] mb-2">
            {s.allGenerators.heading}
          </h2>
          <p className="text-[#636972] mb-6">{s.allGenerators.subheading}</p>
          
          {/* Search Input */}
          <div className="relative max-w-[480px]">
            <label htmlFor="generator-search" className="sr-only">{s.allGenerators.searchLabel}</label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#636972]" aria-hidden="true">🔍</span>
              <input
                id="generator-search"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={s.allGenerators.searchPlaceholder}
                aria-label={s.allGenerators.searchLabel}
                className="w-full h-11 pl-11 pr-4 border border-[#C6C9CD] rounded-[3px] text-sm focus:outline-none focus:border-[#8159BB]"
              />
            </div>
            {searchQuery && (
              <div className="mt-2 text-sm text-[#636972]">
                {filteredResults.count > 0 
                  ? s.allGenerators.resultCount(filteredResults.count)
                  : s.allGenerators.emptyState
                }
                {filteredResults.count === 0 && (
                  <button 
                    onClick={clearSearch}
                    className="ml-2 text-[#8159BB] hover:underline"
                  >
                    Clear search
                  </button>
                )}
              </div>
            )}
          </div>
          {searchQuery && filteredResults.count === 0 && (
            <div className="mt-4 text-sm">
              <a href="/s/ai_site_builder" className="text-[#8159BB] hover:underline">
                {s.allGenerators.emptyCta}
              </a>
            </div>
          )}
        </div>

        {/* Category Subsections */}
        {Object.keys(allGeneratorsByCategory).map(categoryId => {
          const category = allGeneratorsByCategory[categoryId];
          const visibleGens = getVisibleGenerators(categoryId);
          const isVisible = visibleCategories.includes(categoryId);
          const isExpanded = expandedSections[categoryId];
          const displayCount = getDisplayCount(categoryId);
          const hasMore = visibleGens.length > 6;

          if (!isVisible) return null;

          return (
            <div key={categoryId} id={categoryId} className="mb-12 scroll-mt-4">
              <h3 className="font-['Josefin_Sans'] font-bold text-xl text-[#4B5056] tracking-[0.5px] mb-1">
                {category.heading}
              </h3>
              <p className="text-[#636972] text-sm mb-5">{category.desc}</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {visibleGens.slice(0, displayCount).map((gen, idx) => (
                  <a 
                    key={idx}
                    href={`/generators/${gen.slug}`}
                    className="block p-5 bg-white border border-[#C6C9CD] rounded-[3px] hover:border-[#8159BB] hover:shadow-md transition-all"
                  >
                    <div className="text-xl mb-3" aria-hidden="true">{category.icon}</div>
                    <div className="font-['Josefin_Sans'] font-bold text-[15px] mb-2 text-[#2E2E2F]">{gen.name}</div>
                    <div className="text-[#636972] text-sm leading-[1.5]">{gen.desc}</div>
                  </a>
                ))}
              </div>

              {hasMore && !searchQuery && (
                <button
                  onClick={() => toggleSection(categoryId)}
                  aria-expanded={isExpanded}
                  aria-controls={`section-${categoryId}`}
                  className="mt-4 text-sm text-[#8159BB] hover:underline font-['Josefin_Sans']"
                >
                  {isExpanded 
                    ? s.allGenerators.showLess 
                    : s.allGenerators.showAll(visibleGens.length)
                  }
                </button>
              )}
            </div>
          );
        })}
      </section>

      {/* Section 6: How It Works */}
      <section className="bg-[#F4F6F8] py-16">
        <div className="max-w-[1200px] mx-auto px-5">
          <h2 className="font-['Josefin_Sans'] font-bold text-[28px] md:text-[32px] text-[#4B5056] tracking-[0.5px] mb-10 text-center">
            {s.howItWorks.heading}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {s.howItWorks.steps.map((step, idx) => (
              <div key={idx} className="text-center">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#8159BB] text-white font-['Josefin_Sans'] font-bold mb-4">
                  {step.num}
                </div>
                <div className="font-['Josefin_Sans'] font-bold text-sm uppercase tracking-[0.5px] mb-2 text-[#4B5056]">
                  {step.title}
                </div>
                <p className="text-[#636972] text-sm leading-[1.6]">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7: Why Strikingly */}
      <section className="max-w-[1200px] mx-auto px-5 py-16">
        <h2 className="font-['Josefin_Sans'] font-bold text-[28px] md:text-[32px] text-[#4B5056] tracking-[0.5px] mb-10 text-center">
          {s.whyStrikingly.heading}
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {s.whyStrikingly.items.map((item, idx) => (
            <div key={idx} className="text-center">
              <div className="text-3xl mb-4" aria-hidden="true">{item.icon}</div>
              <div className="font-['Josefin_Sans'] font-bold text-sm uppercase tracking-[0.5px] mb-2 text-[#4B5056]">
                {item.title}
              </div>
              <p className="text-[#636972] text-sm leading-[1.6]">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 8: FAQ */}
      <section className="bg-[#F4F6F8] py-16">
        <div className="max-w-[1200px] mx-auto px-5">
          <h2 className="font-['Josefin_Sans'] font-bold text-[28px] md:text-[32px] text-[#4B5056] tracking-[0.5px] mb-8">
            {s.faq.heading}
          </h2>
          <div className="space-y-2">
            {s.faq.questions.map((item, idx) => {
              const isExpanded = expandedFaqs[idx];
              return (
                <div key={idx} className="bg-white border border-[#C6C9CD] rounded-[3px] overflow-hidden">
                  <button
                    onClick={() => toggleFaq(idx)}
                    aria-expanded={isExpanded}
                    aria-controls={`faq-answer-${idx}`}
                    className="w-full flex items-center justify-between px-6 py-4 text-left font-['Josefin_Sans'] font-bold text-sm text-[#4B5056] hover:bg-[#F4F6F8]"
                  >
                    <span>{item.q}</span>
                    <span className="text-[#8159BB] ml-4">{isExpanded ? '−' : '+'}</span>
                  </button>
                  {isExpanded && (
                    <div id={`faq-answer-${idx}`} className="px-6 pb-5 text-[#636972] text-sm leading-[1.7]">
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 9: Closing CTA */}
      <section className="max-w-[1200px] mx-auto px-5 py-16 text-center">
        <h2 className="font-['Josefin_Sans'] font-bold text-[28px] md:text-[32px] text-[#4B5056] tracking-[0.5px] mb-3">
          {s.closing.heading}
        </h2>
        <p className="text-[#636972] mb-6">{s.closing.sub}</p>
        <a 
          href="/s/ai_site_builder"
          className="inline-flex items-center justify-center h-11 px-8 rounded font-['Josefin_Sans'] font-bold text-sm uppercase tracking-[0.5px] text-white"
          style={{ background: 'linear-gradient(90deg, #7671FF 0%, #CB0C9F 100%)' }}
        >
          {s.closing.cta}
        </a>
      </section>

      {/* Section 10: Footer */}
      <footer className="bg-[#2E2E2F] text-white pt-12 pb-8">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-y-8 mb-10">
            <div>
              <div className="font-['Josefin_Sans'] font-bold text-lg mb-4">{s.logo}</div>
            </div>
            {s.footer.columns.map((col, idx) => (
              <div key={idx}>
                <div className="font-['Josefin_Sans'] font-bold text-sm mb-3 text-white/80">{col.title}</div>
                <ul className="space-y-1.5 text-sm text-white/70">
                  {col.links.map((link, lidx) => (
                    <li key={lidx}>
                      <a href={link.href} className="hover:text-white">{link.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="pt-6 border-t border-white/20 text-xs text-white/50 text-center">
            {s.footer.copyright}
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
