import React, { useState, useMemo } from 'react';

// Brand tokens matching Strikingly's component kit
const BRAND = {
  purple: '#8159BB',
  aiGradient: 'linear-gradient(135deg, #7671FF 0%, #CB0C9F 100%)',
  bodyText: '#636972',
  headingText: '#4B5056',
  heroH1: '#2E2E2F',
  cardBorder: '#C6C9CD',
  subtleDivider: '#E2E4E7',
  lightBg: '#F4F6F8',
  white: '#FFFFFF',
};

// i18n strings - single object for easy translation
const strings = {
  en: {
    topBar: {
      logo: 'strikingly AI',
    },
    breadcrumb: {
      home: 'Strikingly',
      current: 'AI Generators',
    },
    hero: {
      line1: 'BUILD ANY KIND OF SITE',
      line2: 'WITH AI, IN AN INSTANT',
      subheadline: "Browse the right generator for what you're building, or jump straight into our AI site builder.",
      primaryCta: "START BUILDING - IT'S FREE",
      secondaryCta: 'BROWSE GENERATORS',
    },
    featured: {
      heading: 'FEATURED GENERATORS',
      subheading: 'A few common starting points.',
    },
    browseByCategory: {
      heading: 'BROWSE BY CATEGORY',
    },
    allGenerators: {
      heading: 'ALL GENERATORS',
      subheading: 'Sixty-plus generators, organized by what you\'re building.',
      searchPlaceholder: 'Search generators...',
      searchLabel: 'Search generators',
      resultCount: (count) => `${count} generators match`,
      noResults: "We couldn't find any generators matching your search.",
      clearSearch: 'Clear search',
      tryBuilder: "Can't find it? Start with our AI builder.",
      showAll: (count) => `Show all ${count} generators`,
      showLess: 'Show less',
    },
    categories: {
      websites: { name: 'Websites', slug: 'websites', desc: 'AI-built business and personal sites for any goal.' },
      landingPages: { name: 'Landing Pages', slug: 'landing-pages', desc: 'Single-page sites built to convert visitors fast.' },
      portfolios: { name: 'Portfolios', slug: 'portfolios', desc: 'Showcase your work with a clean, focused site.' },
      blogs: { name: 'Blogs', slug: 'blogs', desc: 'Publish-ready blogs with built-in SEO basics.' },
      stores: { name: 'Online Stores', slug: 'stores', desc: 'Sell products online with payments built in.' },
      linkInBio: { name: 'Link-in-Bio', slug: 'link-in-bio', desc: 'One link, all your places. Made for creators.' },
    },
    howItWorks: {
      heading: 'HOW IT WORKS',
      steps: [
        { num: '1', title: 'PICK A GENERATOR', desc: 'Browse by category or search to find one that fits your goal.' },
        { num: '2', title: 'DESCRIBE YOUR SITE', desc: 'Tell our AI builder about your business in a sentence or two.' },
        { num: '3', title: 'GENERATE AND PUBLISH', desc: 'Get a fully built site in seconds. Customize anything, then go live.' },
      ],
    },
    whyStrikingly: {
      heading: 'WHY STRIKINGLY',
      items: [
        { icon: '⚡', title: 'LIVE IN SECONDS', desc: 'Describe your site, we build it. No setup, no learning curve.' },
        { icon: '📱', title: 'MOBILE BY DEFAULT', desc: 'Every generator produces responsive sites that work on any device.' },
        { icon: '✨', title: 'FREE TO START', desc: 'Generate, customize, and publish without a credit card.' },
      ],
    },
    faq: {
      heading: 'FREQUENTLY ASKED QUESTIONS',
      questions: [
        { q: 'What is an AI site generator?', a: 'An AI site generator is a tool that creates a complete website for you based on a short description. Instead of starting from a blank page or a rigid template, you describe your business or project in plain language, and the AI builds a site tailored to your needs.' },
        { q: 'How is a generator different from a template?', a: 'Templates are pre-designed layouts you customize manually. Generators use AI to create a unique site from your description, choosing layout, content, and imagery automatically. You still get full control to edit anything afterward.' },
        { q: 'Are these generators free to use?', a: 'Yes. You can generate, customize, and publish a site without a credit card. Paid plans unlock additional features like custom domains and advanced analytics.' },
        { q: 'What kinds of sites can I build?', a: 'You can build business sites, landing pages, portfolios, blogs, online stores, link-in-bio pages, and more. Each generator is tuned for a specific use case or industry.' },
        { q: 'Can I customize what the generator produces?', a: 'Absolutely. After generation you can edit text, swap images, reorder sections, change colors, and add or remove pages. Everything is fully editable.' },
        { q: 'Do generated sites work on mobile?', a: 'Yes. Every site produced by our generators is responsive by default and looks great on phones, tablets, and desktops.' },
      ],
    },
    closing: {
      heading: 'READY TO BUILD?',
      sub: 'Pick a generator above, or jump straight into our AI builder.',
      cta: 'START WITH AI BUILDER',
    },
    footer: {
      columns: {
        product: ['About', 'Pricing', 'Templates', 'Blog'],
        support: ['Help Center', 'Contact', 'Community'],
        legal: ['Terms', 'Privacy', 'Trust & Safety'],
        company: ['Careers', 'Press', 'Partners'],
      },
      copyright: '© 2026 Strikingly, Inc. All rights reserved.',
    },
  },
};

// Sample data for Featured Generators (9 cards, mixed categories)
const featuredGenerators = [
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

// Category data for Browse by Category
const categoryCards = [
  { ...strings.en.categories.websites, icon: '🌐' },
  { ...strings.en.categories.landingPages, icon: '📄' },
  { ...strings.en.categories.portfolios, icon: '🎨' },
  { ...strings.en.categories.blogs, icon: '✍️' },
  { ...strings.en.categories.stores, icon: '🛒' },
  { ...strings.en.categories.linkInBio, icon: '🔗' },
];

// All generators data - 8-12 per category for meaningful "Show all" toggle
const allGeneratorsData = {
  websites: {
    ...strings.en.categories.websites,
    generators: [
      { name: 'AI Website Generator', desc: 'Describe your business, get a full site', slug: 'ai-website-generator' },
      { name: 'Free Website Builder for Photographers', desc: 'Showcase your work beautifully', slug: 'free-website-builder-for-photographers' },
      { name: 'One-Page Wedding Website Builder', desc: 'Elegant sites for your big day', slug: 'one-page-wedding-website-builder' },
      { name: 'Restaurant Website Builder', desc: 'Menu, hours, reservations, done', slug: 'restaurant-website-builder' },
      { name: 'Yoga Studio Website Generator', desc: 'Class schedules and online booking', slug: 'yoga-studio-website-generator' },
      { name: 'No-Code Business Website Builder', desc: 'Launch fast without developers', slug: 'no-code-business-website-builder' },
      { name: 'Beautiful Portfolio Website Maker', desc: 'Clean layouts for creatives', slug: 'beautiful-portfolio-website-maker' },
      { name: 'AI Website Generator for Coaches', desc: 'Attract clients with ease', slug: 'ai-website-generator-for-coaches' },
      { name: 'Free Website Builder for Nonprofits', desc: 'Share your mission online', slug: 'free-website-builder-for-nonprofits' },
      { name: 'One-Page Personal Website Builder', desc: 'Simple sites that tell your story', slug: 'one-page-personal-website-builder' },
    ],
  },
  landingPages: {
    ...strings.en.categories.landingPages,
    generators: [
      { name: 'AI Landing Page Maker', desc: 'One-page sites built to convert', slug: 'ai-landing-page-maker' },
      { name: 'Free Landing Page Builder', desc: 'Launch campaigns in minutes', slug: 'free-landing-page-builder' },
      { name: 'Product Launch Landing Page Generator', desc: 'Build hype before you ship', slug: 'product-launch-landing-page-generator' },
      { name: 'Event Registration Landing Page', desc: 'Collect RSVPs with ease', slug: 'event-registration-landing-page' },
      { name: 'Lead Capture Landing Page Builder', desc: 'Grow your email list fast', slug: 'lead-capture-landing-page-builder' },
      { name: 'No-Code Landing Page Maker', desc: 'Design without developers', slug: 'no-code-landing-page-maker' },
      { name: 'AI Landing Page for SaaS', desc: 'Convert visitors into users', slug: 'ai-landing-page-for-saas' },
      { name: 'Beautiful Landing Page Generator', desc: 'Stunning designs that convert', slug: 'beautiful-landing-page-generator' },
      { name: 'One-Page Webinar Landing Page', desc: 'Fill your next session', slug: 'one-page-webinar-landing-page' },
    ],
  },
  portfolios: {
    ...strings.en.categories.portfolios,
    generators: [
      { name: 'Free Portfolio Generator', desc: 'For creatives, in minutes, no fee', slug: 'free-portfolio-generator' },
      { name: 'Portfolio Generator for Designers', desc: 'Showcase projects with style', slug: 'portfolio-generator-for-designers' },
      { name: 'AI Portfolio Builder for Photographers', desc: 'Beautiful galleries in seconds', slug: 'ai-portfolio-builder-for-photographers' },
      { name: 'Portfolio Website Maker for Artists', desc: 'Display your work professionally', slug: 'portfolio-website-maker-for-artists' },
      { name: 'No-Code Portfolio Builder', desc: 'Launch without code', slug: 'no-code-portfolio-builder' },
      { name: 'Beautiful Portfolio Generator', desc: 'Clean, modern layouts', slug: 'beautiful-portfolio-generator' },
      { name: 'Portfolio Builder for Writers', desc: 'Share your published work', slug: 'portfolio-builder-for-writers' },
      { name: 'AI Portfolio Maker for Developers', desc: 'Highlight your projects', slug: 'ai-portfolio-maker-for-developers' },
      { name: 'Free Portfolio Website Builder', desc: 'Get noticed by clients', slug: 'free-portfolio-website-builder' },
      { name: 'One-Page Portfolio Generator', desc: 'Simple sites that impress', slug: 'one-page-portfolio-generator' },
    ],
  },
  blogs: {
    ...strings.en.categories.blogs,
    generators: [
      { name: 'Blog Generator for Beginners', desc: 'Publish-ready in minutes', slug: 'blog-generator-for-beginners' },
      { name: 'AI Blog Builder', desc: 'Start writing without setup', slug: 'ai-blog-builder' },
      { name: 'Free Blog Website Generator', desc: 'Share your voice online', slug: 'free-blog-website-generator' },
      { name: 'No-Code Blog Maker', desc: 'Launch your blog today', slug: 'no-code-blog-maker' },
      { name: 'Beautiful Blog Generator', desc: 'Clean reading experience', slug: 'beautiful-blog-generator' },
      { name: 'Blog Builder for Food Writers', desc: 'Recipes and stories that shine', slug: 'blog-builder-for-food-writers' },
      { name: 'AI Blog Maker for Travel', desc: 'Document your journeys', slug: 'ai-blog-maker-for-travel' },
      { name: 'One-Page Blog Starter', desc: 'Simple publishing platform', slug: 'one-page-blog-starter' },
      { name: 'Free Blog Generator for Coaches', desc: 'Share insights with clients', slug: 'free-blog-generator-for-coaches' },
    ],
  },
  stores: {
    ...strings.en.categories.stores,
    generators: [
      { name: 'Online Store Builder', desc: 'Start selling without writing code', slug: 'online-store-builder' },
      { name: 'Online Store Builder for Restaurants', desc: 'Take orders online', slug: 'online-store-builder-for-restaurants' },
      { name: 'AI Store Generator', desc: 'Launch your shop in minutes', slug: 'ai-store-generator' },
      { name: 'Free Online Store Builder', desc: 'Sell without fees to start', slug: 'free-online-store-builder' },
      { name: 'No-Code Store Maker', desc: 'Build without developers', slug: 'no-code-store-maker' },
      { name: 'Beautiful Store Generator', desc: 'Stunning product pages', slug: 'beautiful-store-generator' },
      { name: 'Online Store Builder for Artists', desc: 'Sell your creations', slug: 'online-store-builder-for-artists' },
      { name: 'AI Store Maker for Fashion', desc: 'Showcase your collections', slug: 'ai-store-maker-for-fashion' },
      { name: 'One-Page Store Builder', desc: 'Simple checkout experience', slug: 'one-page-store-builder' },
      { name: 'Free Store Generator for Makers', desc: 'Sell handmade goods', slug: 'free-store-generator-for-makers' },
    ],
  },
  linkInBio: {
    ...strings.en.categories.linkInBio,
    generators: [
      { name: 'Link-in-Bio Generator', desc: 'One link for all your channels', slug: 'link-in-bio-generator' },
      { name: 'Free Link-in-Bio Builder', desc: 'Share everything you create', slug: 'free-link-in-bio-builder' },
      { name: 'AI Link-in-Bio Maker', desc: 'Build in seconds', slug: 'ai-link-in-bio-maker' },
      { name: 'Link-in-Bio for Creators', desc: 'One page, all your links', slug: 'link-in-bio-for-creators' },
      { name: 'No-Code Link Page Builder', desc: 'Launch without code', slug: 'no-code-link-page-builder' },
      { name: 'Beautiful Link-in-Bio Generator', desc: 'Clean, modern designs', slug: 'beautiful-link-in-bio-generator' },
      { name: 'Link-in-Bio Builder for Influencers', desc: 'Drive traffic everywhere', slug: 'link-in-bio-builder-for-influencers' },
      { name: 'One-Page Link Hub', desc: 'Simple link management', slug: 'one-page-link-hub' },
    ],
  },
};

// Generate slug from name
const generateSlug = (name) => name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');

// SVG Icons
const SearchIcon = () => (
  <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.35-4.35" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

const ChevronDownIcon = ({ className = '' }) => (
  <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="m6 9 6 6 6-6" />
  </svg>
);

// Category illustration SVG (shared per subsection)
const CategoryIllustration = ({ category }) => {
  const colors = {
    websites: '#8159BB',
    landingPages: '#7671FF',
    portfolios: '#CB0C9F',
    blogs: '#8159BB',
    stores: '#7671FF',
    linkInBio: '#CB0C9F',
  };
  const color = colors[category] || '#8159BB';
  
  return (
    <svg aria-hidden="true" width="48" height="48" viewBox="0 0 64 64" fill="none">
      <rect x="8" y="12" width="48" height="40" rx="4" stroke={color} strokeWidth="2" />
      <rect x="14" y="20" width="36" height="4" rx="1" fill={color} opacity="0.3" />
      <rect x="14" y="28" width="28" height="3" rx="1" fill={color} opacity="0.2" />
      <rect x="14" y="34" width="32" height="3" rx="1" fill={color} opacity="0.2" />
      <rect x="14" y="40" width="20" height="3" rx="1" fill={color} opacity="0.2" />
    </svg>
  );
};

// Hero illustration SVG
const HeroIllustration = () => (
  <svg aria-hidden="true" width="400" height="320" viewBox="0 0 400 320" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="heroGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#F4F6F8" />
        <stop offset="100%" stopColor="#E2E4E7" />
      </linearGradient>
    </defs>
    {/* Browser frame */}
    <rect x="40" y="40" width="320" height="240" rx="12" fill="white" stroke="#C6C9CD" strokeWidth="2" />
    {/* Browser header */}
    <rect x="40" y="40" width="320" height="32" rx="12" fill="#F4F6F8" />
    <rect x="40" y="60" width="320" height="2" fill="#E2E4E7" />
    {/* Window controls */}
    <circle cx="60" cy="56" r="4" fill="#C6C9CD" />
    <circle cx="76" cy="56" r="4" fill="#C6C9CD" />
    <circle cx="92" cy="56" r="4" fill="#C6C9CD" />
    {/* Content area - soft purple wash */}
    <rect x="56" y="76" width="288" height="188" rx="4" fill="url(#heroGrad)" />
    {/* AI gradient accent bar */}
    <rect x="56" y="76" width="288" height="6" rx="3" fill="#7671FF" />
    {/* Placeholder content blocks */}
    <rect x="72" y="100" width="120" height="16" rx="2" fill="#C6C9CD" opacity="0.4" />
    <rect x="72" y="128" width="200" height="12" rx="2" fill="#C6C9CD" opacity="0.3" />
    <rect x="72" y="148" width="180" height="12" rx="2" fill="#C6C9CD" opacity="0.3" />
    <rect x="72" y="180" width="80" height="32" rx="4" fill="#8159BB" opacity="0.2" />
    <rect x="160" y="180" width="80" height="32" rx="4" fill="#7671FF" opacity="0.2" />
  </svg>
);

// Card component for Featured Generators (includes category tag)
const FeaturedCard = ({ gen }) => (
  <a
    href={`/generators/${gen.slug}`}
    className="featured-card"
    aria-label={gen.name}
  >
    <div className="featured-card-content">
      <div className="featured-card-name">{gen.name}</div>
      <div className="featured-card-desc">{gen.desc}</div>
      <div className="featured-card-tag">{gen.category}</div>
    </div>
  </a>
);

// Category card for Browse by Category
const CategoryCard = ({ cat }) => (
  <a
    href={`#${cat.slug}`}
    className="category-card"
    aria-label={cat.name}
  >
    <div className="category-card-icon">{cat.icon}</div>
    <div className="category-card-name">{cat.name.toUpperCase()}</div>
    <div className="category-card-desc">{cat.desc}</div>
    <div className="category-card-arrow"><ArrowRightIcon /></div>
  </a>
);

// Generator card for All Generators (no category tag - subsection provides context)
const GeneratorCard = ({ gen, categorySlug }) => (
  <a
    href={`/generators/${gen.slug}`}
    className="generator-card"
    aria-label={gen.name}
  >
    <div className="generator-card-thumb">
      <CategoryIllustration category={categorySlug} />
    </div>
    <div className="generator-card-name">{gen.name}</div>
    <div className="generator-card-desc">{gen.desc}</div>
  </a>
);

// FAQ Accordion Item
const FAQItem = ({ q, a, isOpen, onToggle, id }) => (
  <div className="faq-item">
    <button
      className="faq-question"
      onClick={onToggle}
      aria-expanded={isOpen}
      aria-controls={`faq-answer-${id}`}
      id={`faq-question-${id}`}
    >
      <span>{q}</span>
      <ChevronDownIcon className={isOpen ? 'rotated' : ''} />
    </button>
    <div
      id={`faq-answer-${id}`}
      role="region"
      aria-labelledby={`faq-question-${id}`}
      className={`faq-answer ${isOpen ? 'open' : ''}`}
    >
      <p>{a}</p>
    </div>
  </div>
);

function App() {
  const s = strings.en;
  
  // Search state
  const [searchQuery, setSearchQuery] = useState('');
  
  // Show all toggles per category
  const [showAll, setShowAll] = useState({});
  
  // FAQ open state (first question expanded by default)
  const [openFAQs, setOpenFAQs] = useState({ 0: true });

  // Filter generators based on search
  const filteredGenerators = useMemo(() => {
    if (!searchQuery.trim()) {
      return allGeneratorsData;
    }
    
    const q = searchQuery.toLowerCase().trim();
    const result = {};
    
    Object.keys(allGeneratorsData).forEach(catKey => {
      const cat = allGeneratorsData[catKey];
      const matches = cat.generators.filter(g => 
        g.name.toLowerCase().includes(q) ||
        g.desc.toLowerCase().includes(q) ||
        cat.name.toLowerCase().includes(q)
      );
      if (matches.length > 0) {
        result[catKey] = { ...cat, generators: matches };
      }
    });
    
    return result;
  }, [searchQuery]);

  // Total matching count
  const totalMatches = useMemo(() => {
    return Object.values(filteredGenerators).reduce((sum, cat) => sum + cat.generators.length, 0);
  }, [filteredGenerators]);

  // Toggle show all for a category
  const toggleShowAll = (catKey) => {
    setShowAll(prev => ({ ...prev, [catKey]: !prev[catKey] }));
  };

  // Toggle FAQ
  const toggleFAQ = (index) => {
    setOpenFAQs(prev => ({ ...prev, [index]: !prev[index] }));
  };

  // Clear search
  const clearSearch = () => {
    setSearchQuery('');
  };

  // Get visible generators for a category (respecting show all toggle)
  const getVisibleGenerators = (catKey, generators) => {
    const isShowingAll = showAll[catKey];
    if (isShowingAll || generators.length <= 6) {
      return generators;
    }
    return generators.slice(0, 6);
  };

  // Check if category has hidden items
  const hasHiddenItems = (catKey, generators) => {
    return !showAll[catKey] && generators.length > 6;
  };

  return (
    <>
      {/* SEO Head content is in index.html */}
      
      {/* Section 0: Top Bar */}
      <header className="top-bar">
        <div className="content-container">
          <a href="/" className="logo" aria-label="Strikingly AI Home">
            {s.topBar.logo}
          </a>
        </div>
      </header>

      {/* Section 1: Breadcrumb */}
      <nav aria-label="Breadcrumb" className="breadcrumb">
        <div className="content-container">
          <ol className="breadcrumb-list">
            <li><a href="/">{s.breadcrumb.home}</a></li>
            <li className="separator">></li>
            <li aria-current="page">{s.breadcrumb.current}</li>
          </ol>
        </div>
      </nav>

      {/* Section 2: Hero */}
      <section className="hero">
        <div className="content-container hero-container">
          <div className="hero-left">
            <h1 className="hero-heading">
              <span className="hero-line1">{s.hero.line1}</span>
              <span className="hero-line2">{s.hero.line2}</span>
            </h1>
            <p className="hero-subheadline">{s.hero.subheadline}</p>
            <div className="hero-ctas">
              <a href="/s/ai_site_builder" className="btn btn-primary btn-large">
                {s.hero.primaryCta}
              </a>
              <a href="#all-generators" className="btn btn-ghost">
                {s.hero.secondaryCta}
              </a>
            </div>
          </div>
          <div className="hero-right">
            <HeroIllustration />
          </div>
        </div>
      </section>

      {/* Section 3: Featured Generators */}
      <section className="featured">
        <div className="content-container">
          <h2 className="section-heading">{s.featured.heading}</h2>
          <p className="section-subheading">{s.featured.subheading}</p>
          <div className="featured-grid">
            {featuredGenerators.map((gen, idx) => (
              <FeaturedCard key={idx} gen={gen} />
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Browse by Category */}
      <section className="browse-category">
        <div className="content-container">
          <h2 className="section-heading">{s.browseByCategory.heading}</h2>
          <div className="category-grid">
            {categoryCards.map((cat, idx) => (
              <CategoryCard key={idx} cat={cat} />
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: All Generators Directory */}
      <section id="all-generators" className="all-generators">
        <div className="content-container">
          <h2 className="section-heading">{s.allGenerators.heading}</h2>
          <p className="section-subheading">{s.allGenerators.subheading}</p>

          {/* Search Input */}
          <div className="search-container">
            <label htmlFor="generator-search" className="sr-only">{s.allGenerators.searchLabel}</label>
            <div className="search-input-wrapper">
              <span className="search-icon"><SearchIcon /></span>
              <input
                id="generator-search"
                type="text"
                className="search-input"
                placeholder={s.allGenerators.searchPlaceholder}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label={s.allGenerators.searchLabel}
              />
            </div>
            {searchQuery && (
              <div className="search-results-count">
                {s.allGenerators.resultCount(totalMatches)}
              </div>
            )}
          </div>

          {/* Generator Subsections */}
          {Object.keys(filteredGenerators).length > 0 ? (
            Object.keys(filteredGenerators).map((catKey) => {
              const cat = filteredGenerators[catKey];
              const visibleGens = getVisibleGenerators(catKey, cat.generators);
              const hiddenCount = cat.generators.length - visibleGens.length;
              const isExpanded = showAll[catKey];

              return (
                <div key={catKey} id={cat.slug} className="generator-subsection">
                  <h3 className="subsection-heading">{cat.name}</h3>
                  <p className="subsection-desc">{cat.desc}</p>
                  <div className="generator-grid">
                    {visibleGens.map((gen, idx) => (
                      <GeneratorCard key={idx} gen={gen} categorySlug={catKey} />
                    ))}
                  </div>
                  {hasHiddenItems(catKey, cat.generators) && (
                    <button
                      className="show-all-btn"
                      onClick={() => toggleShowAll(catKey)}
                      aria-expanded={isExpanded}
                      aria-controls={`subsection-${catKey}`}
                    >
                      {s.allGenerators.showAll(hiddenCount + visibleGens.length)}
                    </button>
                  )}
                  {isExpanded && cat.generators.length > 6 && (
                    <button
                      className="show-all-btn"
                      onClick={() => toggleShowAll(catKey)}
                      aria-expanded={isExpanded}
                      aria-controls={`subsection-${catKey}`}
                    >
                      {s.allGenerators.showLess}
                    </button>
                  )}
                </div>
              );
            })
          ) : (
            /* Empty State */
            <div className="empty-state">
              <p className="empty-state-text">{s.allGenerators.noResults}</p>
              <button className="btn btn-ghost" onClick={clearSearch}>
                {s.allGenerators.clearSearch}
              </button>
              <a href="/s/ai_site_builder" className="empty-state-link">
                {s.allGenerators.tryBuilder}
              </a>
            </div>
          )}
        </div>
      </section>

      {/* Section 6: How It Works */}
      <section className="how-it-works">
        <div className="content-container">
          <h2 className="section-heading">{s.howItWorks.heading}</h2>
          <div className="steps-grid">
            {s.howItWorks.steps.map((step, idx) => (
              <div key={idx} className="step">
                <div className="step-number">{step.num}</div>
                <div className="step-title">{step.title}</div>
                <p className="step-desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7: Why Strikingly */}
      <section className="why-strikingly">
        <div className="content-container">
          <h2 className="section-heading">{s.whyStrikingly.heading}</h2>
          <div className="why-grid">
            {s.whyStrikingly.items.map((item, idx) => (
              <div key={idx} className="why-item">
                <div className="why-icon" aria-hidden="true">{item.icon}</div>
                <div className="why-title">{item.title}</div>
                <p className="why-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 8: FAQ */}
      <section className="faq">
        <div className="content-container">
          <h2 className="section-heading">{s.faq.heading}</h2>
          <div className="faq-list">
            {s.faq.questions.map((item, idx) => (
              <FAQItem
                key={idx}
                q={item.q}
                a={item.a}
                isOpen={!!openFAQs[idx]}
                onToggle={() => toggleFAQ(idx)}
                id={idx}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Section 9: Closing CTA */}
      <section className="closing-cta">
        <div className="content-container closing-content">
          <h2 className="closing-heading">{s.closing.heading}</h2>
          <p className="closing-sub">{s.closing.sub}</p>
          <a href="/s/ai_site_builder" className="btn btn-primary btn-large">
            {s.closing.cta}
          </a>
        </div>
      </section>

      {/* Section 10: Footer */}
      <footer className="footer">
        <div className="content-container">
          <div className="footer-content">
            <div className="footer-logo">
              <a href="/">Strikingly</a>
            </div>
            <div className="footer-columns">
              <div className="footer-col">
                <div className="footer-col-title">Product</div>
                {s.footer.columns.product.map((link, i) => (
                  <a key={i} href={`/${link.toLowerCase().replace(/\s+/g, '')}`}>{link}</a>
                ))}
              </div>
              <div className="footer-col">
                <div className="footer-col-title">Support</div>
                {s.footer.columns.support.map((link, i) => (
                  <a key={i} href={`/${link.toLowerCase().replace(/\s+/g, '')}`}>{link}</a>
                ))}
              </div>
              <div className="footer-col">
                <div className="footer-col-title">Legal</div>
                {s.footer.columns.legal.map((link, i) => (
                  <a key={i} href={`/${link.toLowerCase().replace(/\s+/g, '')}`}>{link}</a>
                ))}
              </div>
              <div className="footer-col">
                <div className="footer-col-title">Company</div>
                {s.footer.columns.company.map((link, i) => (
                  <a key={i} href={`/${link.toLowerCase().replace(/\s+/g, '')}`}>{link}</a>
                ))}
              </div>
            </div>
          </div>
          <div className="footer-copyright">{s.footer.copyright}</div>
        </div>
      </footer>
    </>
  );
}

export default App;
