import React, { useState, useMemo } from 'react';

// ============================================================================
// STRINGS (i18n-ready)
// ============================================================================
const strings = {
  en: {
    // Top bar
    logo: 'strikingly AI',
    
    // Breadcrumb
    breadcrumbHome: 'Strikingly',
    breadcrumbCurrent: 'AI Generators',
    
    // Hero
    heroLine1: 'BUILD ANY KIND OF SITE',
    heroLine2: 'WITH AI, IN AN INSTANT',
    heroSub: 'Browse the right generator for what you\'re building, or jump straight into our AI site builder.',
    ctaStart: 'START BUILDING - IT\'S FREE',
    ctaBrowse: 'BROWSE GENERATORS',
    
    // Featured
    featuredTitle: 'FEATURED GENERATORS',
    featuredSub: 'A few common starting points.',
    
    // Browse by Category
    browseTitle: 'BROWSE BY CATEGORY',
    
    // All Generators
    allTitle: 'ALL GENERATORS',
    allSub: 'Sixty-plus generators, organized by what you\'re building.',
    searchLabel: 'Search generators',
    searchPlaceholder: 'Search generators...',
    resultsCount: (count) => `${count} generators match`,
    noResults: 'No generators match your search.',
    clearSearch: 'Clear search',
    noResultsCta: 'Can\'t find it? Start with our AI builder.',
    showAll: (count) => `Show all ${count} generators`,
    showLess: 'Show less',
    
    // How it works
    howTitle: 'HOW IT WORKS',
    howStep1Title: 'PICK A GENERATOR',
    howStep1Desc: 'Browse by category or search to find one that fits your goal.',
    howStep2Title: 'DESCRIBE YOUR SITE',
    howStep2Desc: 'Tell our AI builder about your business in a sentence or two.',
    howStep3Title: 'GENERATE AND PUBLISH',
    howStep3Desc: 'Get a fully built site in seconds. Customize anything, then go live.',
    
    // Why Strikingly
    whyTitle: 'WHY STRIKINGLY',
    why1Title: 'LIVE IN SECONDS',
    why1Desc: 'Describe your site, we build it. No setup, no learning curve.',
    why2Title: 'MOBILE BY DEFAULT',
    why2Desc: 'Every generator produces responsive sites that work on any device.',
    why3Title: 'FREE TO START',
    why3Desc: 'Generate, customize, and publish without a credit card.',
    
    // FAQ
    faqTitle: 'FREQUENTLY ASKED QUESTIONS',
    faq1Q: 'What is an AI site generator?',
    faq1A: 'An AI site generator is a tool that creates a complete website for you based on a short description. Instead of starting from a blank page or a rigid template, you describe your business or goal in plain language and the AI builds a site tailored to your needs.',
    faq2Q: 'How is a generator different from a template?',
    faq2A: 'Templates are pre-designed layouts you customize manually. Generators use AI to create a unique site from your description, including structure, copy, and layout. You still get full control to edit everything afterward.',
    faq3Q: 'Are these generators free to use?',
    faq3A: 'Yes. You can generate, customize, and publish a site without a credit card. Paid plans are available if you want to remove Strikingly branding, connect a custom domain, or unlock advanced features.',
    faq4Q: 'What kinds of sites can I build?',
    faq4A: 'You can build business sites, landing pages, portfolios, blogs, online stores, link-in-bio pages, and more. Each generator is tuned for a specific use case or industry.',
    faq5Q: 'Can I customize what the generator produces?',
    faq5A: 'Absolutely. After the AI generates your site, you can edit text, swap images, rearrange sections, add pages, and change the design using our visual editor.',
    faq6Q: 'Do generated sites work on mobile?',
    faq6A: 'Yes. Every site produced by a generator is fully responsive and looks great on phones, tablets, and desktops by default.',
    
    // Closing CTA
    closingTitle: 'READY TO BUILD?',
    closingSub: 'Pick a generator above, or jump straight into our AI builder.',
    closingCta: 'START WITH AI BUILDER',
    
    // Footer
    footerCopyright: '© 2026 Strikingly, Inc. All rights reserved.',
  }
};

// ============================================================================
// SAMPLE DATA
// ============================================================================

// Featured generators (9 items, mixed categories)
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

// Browse by Category cards
const categoryCards = [
  { name: 'Websites', slug: 'websites', desc: 'AI-built business and personal sites for any goal.' },
  { name: 'Landing Pages', slug: 'landing-pages', desc: 'Single-page sites built to convert visitors fast.' },
  { name: 'Portfolios', slug: 'portfolios', desc: 'Showcase your work with a clean, focused site.' },
  { name: 'Blogs', slug: 'blogs', desc: 'Publish-ready blogs with built-in SEO basics.' },
  { name: 'Online Stores', slug: 'stores', desc: 'Sell products online with payments built in.' },
  { name: 'Link-in-Bio', slug: 'link-in-bio', desc: 'One link, all your places. Made for creators.' },
];

// All generators directory data (8-12 per category)
const allGeneratorsData = {
  websites: {
    title: 'Websites',
    desc: 'Full websites for businesses, creators, and personal projects.',
    items: [
      { name: 'AI Website Generator', desc: 'Describe your business, get a full site', slug: 'ai-website-generator' },
      { name: 'One-Page Website Builder', desc: 'Simple sites, single scroll', slug: 'one-page-website-builder' },
      { name: 'Wedding Website Generator', desc: 'Share your day with guests', slug: 'wedding-website-generator' },
      { name: 'Restaurant Website Builder', desc: 'Menu, hours, reservations, done', slug: 'restaurant-website-builder' },
      { name: 'Free Website Builder for Photographers', desc: 'Beautiful galleries, zero cost', slug: 'free-website-builder-for-photographers' },
      { name: 'AI Website for Yoga Instructors', desc: 'Classes, bookings, and bio', slug: 'ai-website-for-yoga-instructors' },
      { name: 'No-Code Website Builder', desc: 'Launch without writing code', slug: 'no-code-website-builder' },
      { name: 'Beautiful Website Generator', desc: 'Stunning designs in seconds', slug: 'beautiful-website-generator' },
      { name: 'AI Website for Coaches', desc: 'Programs, testimonials, signups', slug: 'ai-website-for-coaches' },
      { name: 'Personal Website Builder', desc: 'Your story, your way', slug: 'personal-website-builder' },
    ]
  },
  'landing-pages': {
    title: 'Landing Pages',
    desc: 'Focused single-page sites designed to drive action.',
    items: [
      { name: 'AI Landing Page Maker', desc: 'One-page sites built to convert', slug: 'ai-landing-page-maker' },
      { name: 'Product Launch Landing Page', desc: 'Announce and sell your product', slug: 'product-launch-landing-page' },
      { name: 'Event Landing Page Builder', desc: 'Get signups for your event', slug: 'event-landing-page-builder' },
      { name: 'Lead Capture Landing Page', desc: 'Collect emails and grow your list', slug: 'lead-capture-landing-page' },
      { name: 'Free Landing Page Generator', desc: 'High-converting pages, no cost', slug: 'free-landing-page-generator' },
      { name: 'AI Landing Page for SaaS', desc: 'Features, pricing, and demos', slug: 'ai-landing-page-for-saas' },
      { name: 'One-Page Sales Generator', desc: 'Sell anything on a single page', slug: 'one-page-sales-generator' },
      { name: 'Webinar Landing Page Builder', desc: 'Register attendees fast', slug: 'webinar-landing-page-builder' },
      { name: 'AI Landing Page for Consultants', desc: 'Book discovery calls easily', slug: 'ai-landing-page-for-consultants' },
      { name: 'Campaign Landing Page Maker', desc: 'Run focused marketing campaigns', slug: 'campaign-landing-page-maker' },
    ]
  },
  portfolios: {
    title: 'Portfolios',
    desc: 'Showcase your work with clean, professional presentation.',
    items: [
      { name: 'Free Portfolio Generator', desc: 'For creatives, in minutes, no fee', slug: 'free-portfolio-generator' },
      { name: 'Portfolio Generator for Designers', desc: 'Projects front and center', slug: 'portfolio-generator-for-designers' },
      { name: 'AI Portfolio for Photographers', desc: 'Galleries that look pro', slug: 'ai-portfolio-for-photographers' },
      { name: 'Developer Portfolio Builder', desc: 'Code, projects, and contact', slug: 'developer-portfolio-builder' },
      { name: 'Artist Portfolio Generator', desc: 'Your work, beautifully presented', slug: 'artist-portfolio-generator' },
      { name: 'AI Portfolio for Writers', desc: 'Clips, bio, and contact', slug: 'ai-portfolio-for-writers' },
      { name: 'No-Code Portfolio Builder', desc: 'Launch your portfolio fast', slug: 'no-code-portfolio-builder' },
      { name: 'Creative Portfolio Generator', desc: 'Stand out with style', slug: 'creative-portfolio-generator' },
      { name: 'AI Portfolio for Architects', desc: 'Projects and process', slug: 'ai-portfolio-for-architects' },
      { name: 'Student Portfolio Builder', desc: 'Show your best work', slug: 'student-portfolio-builder' },
    ]
  },
  blogs: {
    title: 'Blogs',
    desc: 'Ready-to-publish blogs with clean reading experiences.',
    items: [
      { name: 'Blog Generator for Beginners', desc: 'Publish-ready in minutes', slug: 'blog-generator-for-beginners' },
      { name: 'AI Blog Builder', desc: 'Start writing without setup', slug: 'ai-blog-builder' },
      { name: 'Personal Blog Generator', desc: 'Your voice, your space', slug: 'personal-blog-generator' },
      { name: 'Food Blog Builder', desc: 'Recipes, stories, and photos', slug: 'food-blog-builder' },
      { name: 'Travel Blog Generator', desc: 'Share your journeys', slug: 'travel-blog-generator' },
      { name: 'AI Blog for Coaches', desc: 'Insights and lead capture', slug: 'ai-blog-for-coaches' },
      { name: 'Free Blog Builder', desc: 'No cost to start publishing', slug: 'free-blog-builder' },
      { name: 'Tech Blog Generator', desc: 'Tutorials and thoughts', slug: 'tech-blog-generator' },
      { name: 'AI Blog for Small Business', desc: 'Content that builds trust', slug: 'ai-blog-for-small-business' },
      { name: 'Lifestyle Blog Builder', desc: 'Stories and inspiration', slug: 'lifestyle-blog-builder' },
    ]
  },
  stores: {
    title: 'Online Stores',
    desc: 'Sell products with built-in payments and checkout.',
    items: [
      { name: 'Online Store Builder', desc: 'Start selling without writing code', slug: 'online-store-builder' },
      { name: 'AI Store Generator', desc: 'Products, cart, and checkout', slug: 'ai-store-generator' },
      { name: 'Online Store for Restaurants', desc: 'Take orders and payments', slug: 'online-store-for-restaurants' },
      { name: 'Free Store Builder', desc: 'Sell online at no cost', slug: 'free-store-builder' },
      { name: 'AI Store for Fashion', desc: 'Clothing and accessories', slug: 'ai-store-for-fashion' },
      { name: 'Digital Products Store', desc: 'Sell downloads and courses', slug: 'digital-products-store' },
      { name: 'One-Page Store Builder', desc: 'Sell on a single page', slug: 'one-page-store-builder' },
      { name: 'AI Store for Makers', desc: 'Handmade goods and crafts', slug: 'ai-store-for-makers' },
      { name: 'Subscription Store Generator', desc: 'Recurring billing made easy', slug: 'subscription-store-generator' },
      { name: 'AI Store for Artists', desc: 'Prints, merch, and more', slug: 'ai-store-for-artists' },
    ]
  },
  'link-in-bio': {
    title: 'Link-in-Bio',
    desc: 'One link that connects to everything you share.',
    items: [
      { name: 'Link-in-Bio Generator', desc: 'One link for all your channels', slug: 'link-in-bio-generator' },
      { name: 'AI Link-in-Bio Builder', desc: 'Quick setup for creators', slug: 'ai-link-in-bio-builder' },
      { name: 'Free Link-in-Bio Page', desc: 'No cost, instant setup', slug: 'free-link-in-bio-page' },
      { name: 'Link-in-Bio for Influencers', desc: 'All your deals in one place', slug: 'link-in-bio-for-influencers' },
      { name: 'AI Link-in-Bio for Musicians', desc: 'Music, merch, and shows', slug: 'ai-link-in-bio-for-musicians' },
      { name: 'Link-in-Bio for Small Business', desc: 'Connect customers fast', slug: 'link-in-bio-for-small-business' },
      { name: 'One-Page Link-in-Bio', desc: 'Simple and clean', slug: 'one-page-link-in-bio' },
      { name: 'AI Link-in-Bio for Coaches', desc: 'Links, bookings, and bio', slug: 'ai-link-in-bio-for-coaches' },
      { name: 'Link-in-Bio for Photographers', desc: 'Portfolio and contact', slug: 'link-in-bio-for-photographers' },
      { name: 'AI Link-in-Bio for Writers', desc: 'Books, newsletter, and more', slug: 'ai-link-in-bio-for-writers' },
    ]
  }
};

// Category icons (inline SVG, simple line art)
const CategoryIcon = ({ category, className = '' }) => {
  const icons = {
    websites: (
      <svg className={className} width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <rect x="4" y="6" width="24" height="20" rx="2" stroke="#8159BB" strokeWidth="1.5"/>
        <rect x="7" y="9" width="18" height="3" rx="1" fill="#8159BB" fillOpacity="0.15"/>
        <circle cx="9" cy="10.5" r="1" fill="#8159BB"/>
        <circle cx="12" cy="10.5" r="1" fill="#8159BB"/>
        <circle cx="15" cy="10.5" r="1" fill="#8159BB"/>
      </svg>
    ),
    'landing-pages': (
      <svg className={className} width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <rect x="5" y="7" width="22" height="18" rx="2" stroke="#8159BB" strokeWidth="1.5"/>
        <path d="M10 13h12M10 17h8" stroke="#8159BB" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    portfolios: (
      <svg className={className} width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <rect x="6" y="8" width="20" height="16" rx="2" stroke="#8159BB" strokeWidth="1.5"/>
        <rect x="9" y="11" width="6" height="5" fill="#8159BB" fillOpacity="0.2"/>
        <rect x="17" y="11" width="6" height="5" fill="#8159BB" fillOpacity="0.2"/>
        <rect x="9" y="18" width="14" height="3" fill="#8159BB" fillOpacity="0.15"/>
      </svg>
    ),
    blogs: (
      <svg className={className} width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path d="M8 7h16v18H8V7z" stroke="#8159BB" strokeWidth="1.5"/>
        <path d="M11 12h10M11 16h10M11 20h7" stroke="#8159BB" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    stores: (
      <svg className={className} width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path d="M6 12l2-5h16l2 5v13H6V12z" stroke="#8159BB" strokeWidth="1.5"/>
        <path d="M12 17v4M20 17v4" stroke="#8159BB" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    'link-in-bio': (
      <svg className={className} width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <circle cx="16" cy="10" r="4" stroke="#8159BB" strokeWidth="1.5"/>
        <path d="M10 18v6a2 2 0 002 2h8a2 2 0 002-2v-6" stroke="#8159BB" strokeWidth="1.5"/>
      </svg>
    ),
  };
  return icons[category] || icons.websites;
};

// Small thumbnail for directory cards (shared per subsection)
const SectionThumbnail = ({ category, className = '' }) => {
  return (
    <div className={`w-10 h-10 rounded flex items-center justify-center bg-[#F4F6F8] ${className}`} aria-hidden="true">
      <CategoryIcon category={category} className="w-5 h-5" />
    </div>
  );
};

// ============================================================================
// MAIN COMPONENT
// ============================================================================
const GeneratorsHub = () => {
  const s = strings.en;
  
  // Search state
  const [searchQuery, setSearchQuery] = useState('');
  
  // Show all state per category (for progressive collapse)
  const [showAll, setShowAll] = useState({});
  
  // FAQ open state (first question expanded by default)
  const [openFaq, setOpenFaq] = useState({ 0: true });
  
  // Toggle show all for a category
  const toggleShowAll = (category) => {
    setShowAll(prev => ({ ...prev, [category]: !prev[category] }));
  };
  
  // Toggle FAQ
  const toggleFaq = (index) => {
    setOpenFaq(prev => ({ ...prev, [index]: !prev[index] }));
  };
  
  // Filter generators based on search
  const filteredData = useMemo(() => {
    if (!searchQuery.trim()) {
      return allGeneratorsData;
    }
    
    const q = searchQuery.toLowerCase().trim();
    const result = {};
    
    Object.keys(allGeneratorsData).forEach(catKey => {
      const cat = allGeneratorsData[catKey];
      const matching = cat.items.filter(item => 
        item.name.toLowerCase().includes(q) ||
        item.desc.toLowerCase().includes(q) ||
        cat.title.toLowerCase().includes(q)
      );
      if (matching.length > 0) {
        result[catKey] = { ...cat, items: matching };
      }
    });
    
    return result;
  }, [searchQuery]);
  
  // Count total matching generators
  const totalMatches = useMemo(() => {
    return Object.values(filteredData).reduce((sum, cat) => sum + cat.items.length, 0);
  }, [filteredData]);
  
  // Clear search
  const clearSearch = () => {
    setSearchQuery('');
  };
  
  // Generate slug from name (for links)
  const getSlug = (name) => {
    return name.toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-');
  };
  
  // Render a generator card (for featured - includes category tag)
  const renderFeaturedCard = (gen, index) => {
    const href = `/generators/${gen.slug || getSlug(gen.name)}`;
    return (
      <a
        key={index}
        href={href}
        className="group block bg-white border border-[#C6C9CD] rounded-[3px] p-5 hover:border-[#8159BB] hover:shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#8159BB] focus:ring-offset-2"
        aria-label={gen.name}
      >
        <div className="mb-3">
          <span className="inline-block text-[11px] font-bold uppercase tracking-wide px-1.5 py-0.5 border border-[#8159BB] text-[#8159BB] rounded-[3px]">
            {gen.category}
          </span>
        </div>
        <h4 className="font-bold text-[#2E2E2F] text-[15px] leading-tight mb-1.5 group-hover:text-[#8159BB] transition-colors">
          {gen.name}
        </h4>
        <p className="text-[#636972] text-sm leading-[1.5]">
          {gen.desc}
        </p>
      </a>
    );
  };
  
  // Render a directory card (no category tag - context from subsection)
  const renderDirectoryCard = (item, catKey, index) => {
    const href = `/generators/${item.slug || getSlug(item.name)}`;
    return (
      <a
        key={`${catKey}-${index}`}
        href={href}
        className="group block bg-white border border-[#C6C9CD] rounded-[3px] p-5 hover:border-[#8159BB] hover:shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#8159BB] focus:ring-offset-2"
        aria-label={item.name}
      >
        <div className="mb-3">
          <SectionThumbnail category={catKey} />
        </div>
        <h4 className="font-bold text-[#2E2E2F] text-[15px] leading-tight mb-1.5 group-hover:text-[#8159BB] transition-colors">
          {item.name}
        </h4>
        <p className="text-[#636972] text-sm leading-[1.5]">
          {item.desc}
        </p>
      </a>
    );
  };
  
  // Render category browse card
  const renderCategoryCard = (cat, index) => {
    const href = `/generators#${cat.slug}`;
    return (
      <a
        key={index}
        href={href}
        className="group block bg-white border border-[#C6C9CD] rounded-[3px] p-6 hover:border-[#8159BB] hover:shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#8159BB] focus:ring-offset-2"
        aria-label={cat.name}
      >
        <div className="mb-4">
          <CategoryIcon category={cat.slug} className="w-8 h-8" />
        </div>
        <div className="flex items-center justify-between mb-1.5">
          <h4 className="font-bold text-[#4B5056] text-sm uppercase tracking-wide">
            {cat.name}
          </h4>
          <svg className="w-4 h-4 text-[#8159BB] group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
        <p className="text-[#636972] text-sm leading-[1.5]">
          {cat.desc}
        </p>
      </a>
    );
  };
  
  // FAQ items
  const faqItems = [
    { q: s.faq1Q, a: s.faq1A },
    { q: s.faq2Q, a: s.faq2A },
    { q: s.faq3Q, a: s.faq3A },
    { q: s.faq4Q, a: s.faq4A },
    { q: s.faq5Q, a: s.faq5A },
    { q: s.faq6Q, a: s.faq6A },
  ];
  
  return (
    <div className="min-h-screen bg-white text-[#2E2E2F] font-sans" style={{ fontFamily: "'Open Sans', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
      {/* SECTION 0: Top Bar */}
      <header className="bg-white border-b border-[#E2E4E7]">
        <div className="max-w-[1200px] mx-auto px-5 h-14 flex items-center">
          <a href="/" className="font-bold text-lg tracking-tight text-[#2E2E2F]" style={{ fontFamily: "'Josefin Sans', 'Poppins', system-ui, sans-serif", fontWeight: 700 }}>
            {s.logo}
          </a>
        </div>
      </header>
      
      {/* SECTION 1: Breadcrumb */}
      <nav aria-label="Breadcrumb" className="max-w-[1200px] mx-auto px-5 pt-4 pb-2">
        <ol className="flex items-center text-sm text-[#636972]">
          <li>
            <a href="/" className="hover:text-[#8159BB] transition-colors">{s.breadcrumbHome}</a>
          </li>
          <li className="mx-2 text-[#8159BB]">›</li>
          <li aria-current="page" className="text-[#636972]">{s.breadcrumbCurrent}</li>
        </ol>
      </nav>
      
      {/* SECTION 2: Hero */}
      <section className="max-w-[1200px] mx-auto px-5 pt-8 pb-12 md:pt-12 md:pb-16">
        <div className="grid md:grid-cols-2 gap-10 md:gap-12 items-center">
          {/* Left column */}
          <div>
            <h1 className="text-[32px] md:text-[44px] leading-[1.15] font-bold tracking-[-0.5px] mb-4" style={{ fontFamily: "'Josefin Sans', 'Poppins', system-ui, sans-serif", fontWeight: 700 }}>
              <span className="block text-[#2E2E2F] uppercase">{s.heroLine1}</span>
              <span 
                className="block uppercase bg-clip-text text-transparent"
                style={{ 
                  backgroundImage: 'linear-gradient(90deg, #7671FF 0%, #CB0C9F 100%)',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text'
                }}
              >
                {s.heroLine2}
              </span>
            </h1>
            <p className="text-[#636972] text-[15px] leading-[1.6] max-w-[42ch] mb-6">
              {s.heroSub}
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="/s/ai_site_builder"
                className="inline-flex items-center justify-center h-11 px-[15px] rounded-[4px] text-white text-sm font-bold uppercase tracking-wide transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#8159BB]"
                style={{ 
                  background: 'linear-gradient(90deg, #7671FF 0%, #CB0C9F 100%)',
                  fontFamily: "'Josefin Sans', 'Poppins', system-ui, sans-serif"
                }}
              >
                {s.ctaStart}
              </a>
              <a
                href="#all-generators"
                className="inline-flex items-center justify-center h-11 px-[15px] rounded-[4px] text-sm font-bold uppercase tracking-wide border border-[#8159BB] text-[#8159BB] hover:bg-[#8159BB] hover:text-white transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#8159BB]"
                style={{ fontFamily: "'Josefin Sans', 'Poppins', system-ui, sans-serif" }}
              >
                {s.ctaBrowse}
              </a>
            </div>
          </div>
          
          {/* Right column - inline SVG illustration */}
          <div className="flex justify-center md:justify-end">
            <svg 
              width="420" 
              height="280" 
              viewBox="0 0 420 280" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="w-full max-w-[420px] h-auto"
              aria-hidden="true"
            >
              {/* Soft purple wash background */}
              <defs>
                <radialGradient id="heroWash" cx="50%" cy="40%" r="70%" fx="50%" fy="40%">
                  <stop offset="0%" stopColor="#8159BB" stopOpacity="0.08"/>
                  <stop offset="100%" stopColor="#8159BB" stopOpacity="0"/>
                </radialGradient>
              </defs>
              <rect width="420" height="280" fill="url(#heroWash)"/>
              
              {/* Browser frame */}
              <rect x="40" y="30" width="340" height="220" rx="8" fill="#FFFFFF" stroke="#C6C9CD" strokeWidth="1"/>
              
              {/* Browser header */}
              <rect x="40" y="30" width="340" height="28" rx="8" fill="#F4F6F8"/>
              <rect x="40" y="50" width="340" height="1" fill="#E2E4E7"/>
              
              {/* Traffic lights */}
              <circle cx="58" cy="44" r="4" fill="#E2E4E7"/>
              <circle cx="72" cy="44" r="4" fill="#E2E4E7"/>
              <circle cx="86" cy="44" r="4" fill="#E2E4E7"/>
              
              {/* URL bar */}
              <rect x="100" y="38" width="200" height="12" rx="3" fill="#FFFFFF" stroke="#C6C9CD" strokeWidth="0.5"/>
              
              {/* Content area - hero mockup */}
              <rect x="55" y="70" width="310" height="40" rx="4" fill="#F4F6F8"/>
              <rect x="70" y="82" width="120" height="8" rx="2" fill="#C6C9CD"/>
              <rect x="70" y="95" width="80" height="6" rx="2" fill="#E2E4E7"/>
              
              {/* Gradient button mock */}
              <rect x="70" y="108" width="100" height="22" rx="4" fill="#7671FF"/>
              <rect x="70" y="108" width="100" height="22" rx="4" fill="url(#btnGrad)"/>
              <defs>
                <linearGradient id="btnGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#7671FF"/>
                  <stop offset="100%" stopColor="#CB0C9F"/>
                </linearGradient>
              </defs>
              
              {/* Section blocks */}
              <rect x="55" y="145" width="95" height="85" rx="4" fill="#FFFFFF" stroke="#E2E4E7"/>
              <rect x="162" y="145" width="95" height="85" rx="4" fill="#FFFFFF" stroke="#E2E4E7"/>
              <rect x="269" y="145" width="95" height="85" rx="4" fill="#FFFFFF" stroke="#E2E4E7"/>
              
              {/* Mini content in blocks */}
              <rect x="65" y="155" width="75" height="6" rx="2" fill="#C6C9CD"/>
              <rect x="65" y="165" width="50" height="4" rx="2" fill="#E2E4E7"/>
              <rect x="65" y="175" width="60" height="4" rx="2" fill="#E2E4E7"/>
              
              <rect x="172" y="155" width="75" height="6" rx="2" fill="#C6C9CD"/>
              <rect x="172" y="165" width="50" height="4" rx="2" fill="#E2E4E7"/>
              <rect x="172" y="175" width="60" height="4" rx="2" fill="#E2E4E7"/>
              
              <rect x="279" y="155" width="75" height="6" rx="2" fill="#C6C9CD"/>
              <rect x="279" y="165" width="50" height="4" rx="2" fill="#E2E4E7"/>
              <rect x="279" y="175" width="60" height="4" rx="2" fill="#E2E4E7"/>
            </svg>
          </div>
        </div>
      </section>
      
      {/* SECTION 3: Featured Generators */}
      <section className="bg-[#F4F6F8] py-10">
        <div className="max-w-[1200px] mx-auto px-5">
          <h2 className="text-[26px] md:text-[28px] font-bold uppercase tracking-[-0.3px] text-[#4B5056] mb-1" style={{ fontFamily: "'Josefin Sans', 'Poppins', system-ui, sans-serif", fontWeight: 700 }}>
            {s.featuredTitle}
          </h2>
          <p className="text-[#636972] text-sm mb-6">{s.featuredSub}</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {featuredGenerators.map((gen, i) => renderFeaturedCard(gen, i))}
          </div>
        </div>
      </section>
      
      {/* SECTION 4: Browse by Category */}
      <section className="py-10">
        <div className="max-w-[1200px] mx-auto px-5">
          <h2 className="text-[26px] md:text-[28px] font-bold uppercase tracking-[-0.3px] text-[#4B5056] mb-6" style={{ fontFamily: "'Josefin Sans', 'Poppins', system-ui, sans-serif", fontWeight: 700 }}>
            {s.browseTitle}
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {categoryCards.map((cat, i) => renderCategoryCard(cat, i))}
          </div>
        </div>
      </section>
      
      {/* SECTION 5: All Generators Directory */}
      <section id="all-generators" className="bg-white py-10 border-t border-[#E2E4E7]">
        <div className="max-w-[1200px] mx-auto px-5">
          <h2 className="text-[26px] md:text-[28px] font-bold uppercase tracking-[-0.3px] text-[#4B5056] mb-1" style={{ fontFamily: "'Josefin Sans', 'Poppins', system-ui, sans-serif", fontWeight: 700 }}>
            {s.allTitle}
          </h2>
          <p className="text-[#636972] text-sm mb-5">{s.allSub}</p>
          
          {/* Search input */}
          <div className="mb-6">
            <label htmlFor="generator-search" className="sr-only">{s.searchLabel}</label>
            <div className="relative max-w-[480px]">
              <svg 
                className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#636972]" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                id="generator-search"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={s.searchPlaceholder}
                aria-label={s.searchLabel}
                className="w-full pl-9 pr-4 py-2.5 text-sm border border-[#C6C9CD] rounded-[4px] focus:outline-none focus:border-[#8159BB] focus:ring-1 focus:ring-[#8159BB] bg-white placeholder:text-[#636972]"
              />
              {searchQuery && (
                <button
                  onClick={clearSearch}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#8159BB] hover:underline"
                  aria-label="Clear search"
                >
                  ✕
                </button>
              )}
            </div>
            <p className="mt-2 text-xs text-[#636972]">
              {s.resultsCount(totalMatches)}
            </p>
          </div>
          
          {/* Directory subsections */}
          {Object.keys(filteredData).length === 0 ? (
            <div className="py-8 text-center">
              <p className="text-[#636972] mb-3">{s.noResults}</p>
              <button 
                onClick={clearSearch}
                className="text-sm text-[#8159BB] hover:underline mr-4"
              >
                {s.clearSearch}
              </button>
              <a href="/s/ai_site_builder" className="text-sm text-[#8159BB] hover:underline">
                {s.noResultsCta}
              </a>
            </div>
          ) : (
            Object.keys(filteredData).map((catKey) => {
              const cat = filteredData[catKey];
              const isExpanded = showAll[catKey] || false;
              const visibleItems = isExpanded ? cat.items : cat.items.slice(0, 6);
              const hasMore = cat.items.length > 6;
              
              return (
                <div key={catKey} id={catKey} className="mb-10 scroll-mt-4">
                  <h3 className="text-lg font-bold uppercase tracking-wide text-[#4B5056] mb-1" style={{ fontFamily: "'Josefin Sans', 'Poppins', system-ui, sans-serif", fontWeight: 700 }}>
                    {cat.title}
                  </h3>
                  <p className="text-sm text-[#636972] mb-4">{cat.desc}</p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {visibleItems.map((item, idx) => renderDirectoryCard(item, catKey, idx))}
                  </div>
                  
                  {/* Show all toggle - only if JS available and has more */}
                  {hasMore && (
                    <button
                      onClick={() => toggleShowAll(catKey)}
                      className="mt-4 text-sm font-medium text-[#8159BB] hover:underline focus:outline-none focus:ring-2 focus:ring-[#8159BB] focus:ring-offset-2 rounded"
                      aria-expanded={isExpanded}
                      aria-controls={`section-${catKey}`}
                    >
                      {isExpanded ? s.showLess : s.showAll(cat.items.length)}
                    </button>
                  )}
                </div>
              );
            })
          )}
        </div>
      </section>
      
      {/* SECTION 6: How It Works */}
      <section className="bg-[#F4F6F8] py-10">
        <div className="max-w-[1200px] mx-auto px-5">
          <h2 className="text-[26px] md:text-[28px] font-bold uppercase tracking-[-0.3px] text-[#4B5056] mb-8" style={{ fontFamily: "'Josefin Sans', 'Poppins', system-ui, sans-serif", fontWeight: 700 }}>
            {s.howTitle}
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { num: '1', title: s.howStep1Title, desc: s.howStep1Desc },
              { num: '2', title: s.howStep2Title, desc: s.howStep2Desc },
              { num: '3', title: s.howStep3Title, desc: s.howStep3Desc },
            ].map((step, i) => (
              <div key={i} className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#8159BB] text-white flex items-center justify-center text-sm font-bold">
                  {step.num}
                </div>
                <div>
                  <h4 className="font-bold uppercase text-sm tracking-wide mb-1 text-[#2E2E2F]" style={{ fontFamily: "'Josefin Sans', 'Poppins', system-ui, sans-serif" }}>
                    {step.title}
                  </h4>
                  <p className="text-sm text-[#636972] leading-[1.5]">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* SECTION 7: Why Strikingly */}
      <section className="py-10">
        <div className="max-w-[1200px] mx-auto px-5">
          <h2 className="text-[26px] md:text-[28px] font-bold uppercase tracking-[-0.3px] text-[#4B5056] mb-6" style={{ fontFamily: "'Josefin Sans', 'Poppins', system-ui, sans-serif", fontWeight: 700 }}>
            {s.whyTitle}
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: '⚡', title: s.why1Title, desc: s.why1Desc },
              { icon: '📱', title: s.why2Title, desc: s.why2Desc },
              { icon: '✨', title: s.why3Title, desc: s.why3Desc },
            ].map((item, i) => (
              <div key={i} className="flex gap-4">
                <div className="text-2xl" aria-hidden="true">{item.icon}</div>
                <div>
                  <h4 className="font-bold uppercase text-sm tracking-wide mb-1 text-[#2E2E2F]" style={{ fontFamily: "'Josefin Sans', 'Poppins', system-ui, sans-serif" }}>
                    {item.title}
                  </h4>
                  <p className="text-sm text-[#636972] leading-[1.5]">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* SECTION 8: FAQ */}
      <section className="bg-white py-10 border-t border-[#E2E4E7]">
        <div className="max-w-[1200px] mx-auto px-5">
          <h2 className="text-[26px] md:text-[28px] font-bold uppercase tracking-[-0.3px] text-[#4B5056] mb-6" style={{ fontFamily: "'Josefin Sans', 'Poppins', system-ui, sans-serif", fontWeight: 700 }}>
            {s.faqTitle}
          </h2>
          
          <div className="max-w-[720px]">
            {faqItems.map((item, index) => {
              const isOpen = !!openFaq[index];
              const panelId = `faq-panel-${index}`;
              const buttonId = `faq-button-${index}`;
              
              return (
                <div key={index} className="border-b border-[#E2E4E7]">
                  <button
                    id={buttonId}
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between py-4 text-left focus:outline-none focus:ring-2 focus:ring-[#8159BB] focus:ring-offset-2 rounded"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                  >
                    <span className="font-medium text-[#2E2E2F] pr-4">{item.q}</span>
                    <svg 
                      className={`w-4 h-4 text-[#8159BB] flex-shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`} 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    className={`overflow-hidden transition-all duration-200 ${isOpen ? 'max-h-40 pb-4' : 'max-h-0'}`}
                  >
                    <p className="text-sm text-[#636972] leading-[1.6] pr-8">{item.a}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      
      {/* SECTION 9: Closing CTA */}
      <section className="py-12 bg-white border-t border-[#E2E4E7]">
        <div className="max-w-[1200px] mx-auto px-5 text-center">
          <h2 className="text-[26px] md:text-[28px] font-bold uppercase tracking-[-0.3px] text-[#4B5056] mb-2" style={{ fontFamily: "'Josefin Sans', 'Poppins', system-ui, sans-serif", fontWeight: 700 }}>
            {s.closingTitle}
          </h2>
          <p className="text-[#636972] text-sm mb-5">{s.closingSub}</p>
          <a
            href="/s/ai_site_builder"
            className="inline-flex items-center justify-center h-11 px-[15px] rounded-[4px] text-white text-sm font-bold uppercase tracking-wide transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#8159BB]"
            style={{ 
              background: 'linear-gradient(90deg, #7671FF 0%, #CB0C9F 100%)',
              fontFamily: "'Josefin Sans', 'Poppins', system-ui, sans-serif"
            }}
          >
            {s.closingCta}
          </a>
        </div>
      </section>
      
      {/* SECTION 10: Footer */}
      <footer className="bg-[#F4F6F8] border-t border-[#E2E4E7] py-10 text-sm">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-y-8">
            {/* Logo column */}
            <div>
              <a href="/" className="font-bold text-base tracking-tight text-[#2E2E2F]" style={{ fontFamily: "'Josefin Sans', 'Poppins', system-ui, sans-serif", fontWeight: 700 }}>
                Strikingly
              </a>
            </div>
            
            {/* Links */}
            <div>
              <div className="font-medium text-[#2E2E2F] mb-2">Product</div>
              <ul className="space-y-1 text-[#636972]">
                <li><a href="/templates" className="hover:text-[#8159BB]">Templates</a></li>
                <li><a href="/pricing" className="hover:text-[#8159BB]">Pricing</a></li>
                <li><a href="/blog" className="hover:text-[#8159BB]">Blog</a></li>
              </ul>
            </div>
            
            <div>
              <div className="font-medium text-[#2E2E2F] mb-2">Company</div>
              <ul className="space-y-1 text-[#636972]">
                <li><a href="/about" className="hover:text-[#8159BB]">About</a></li>
                <li><a href="/support" className="hover:text-[#8159BB]">Support</a></li>
              </ul>
            </div>
            
            <div>
              <div className="font-medium text-[#2E2E2F] mb-2">Legal</div>
              <ul className="space-y-1 text-[#636972]">
                <li><a href="/terms" className="hover:text-[#8159BB]">Terms</a></li>
                <li><a href="/privacy" className="hover:text-[#8159BB]">Privacy</a></li>
              </ul>
            </div>
            
            <div className="col-span-2 md:col-span-1 text-[#636972] text-xs md:text-sm">
              {s.footerCopyright}
            </div>
          </div>
        </div>
      </footer>
      
      {/* BreadcrumbList JSON-LD (only schema) */}
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

export default GeneratorsHub;
