import React, { useState, useMemo } from 'react';

// Brand strings for i18n readiness
const strings = {
  en: {
    // Top bar
    logo: 'strikingly AI',
    
    // Breadcrumb
    breadcrumbHome: 'Strikingly',
    breadcrumbCurrent: 'AI Generators',
    
    // Hero
    heroH1Line1: 'BUILD ANY KIND OF SITE',
    heroH1Line2: 'WITH AI, IN AN INSTANT',
    heroSubheadline: "Browse the right generator for what you're building, or jump straight into our AI site builder.",
    heroPrimaryCta: "START BUILDING - IT'S FREE",
    heroSecondaryCta: 'BROWSE GENERATORS',
    
    // Featured
    featuredHeading: 'FEATURED GENERATORS',
    featuredSubheading: 'A few common starting points.',
    
    // Browse by Category
    browseHeading: 'BROWSE BY CATEGORY',
    
    // All Generators
    allHeading: 'ALL GENERATORS',
    allSubheading: 'Sixty-plus generators, organized by what you\'re building.',
    searchPlaceholder: 'Search generators...',
    searchLabel: 'Search generators',
    searchResults: (count) => `${count} generators match`,
    searchEmpty: "Can't find it? Start with our AI builder.",
    searchClear: 'Clear search',
    
    // How It Works
    howHeading: 'HOW IT WORKS',
    howStep1Title: 'PICK A GENERATOR',
    howStep1Desc: 'Browse by category or search to find one that fits your goal.',
    howStep2Title: 'DESCRIBE YOUR SITE',
    howStep2Desc: 'Tell our AI builder about your business in a sentence or two.',
    howStep3Title: 'GENERATE AND PUBLISH',
    howStep3Desc: 'Get a fully built site in seconds. Customize anything, then go live.',
    
    // Why Strikingly
    whyHeading: 'WHY STRIKINGLY',
    why1Title: 'LIVE IN SECONDS',
    why1Desc: 'Describe your site, we build it. No setup, no learning curve.',
    why2Title: 'MOBILE BY DEFAULT',
    why2Desc: 'Every generator produces responsive sites that work on any device.',
    why3Title: 'FREE TO START',
    why3Desc: 'Generate, customize, and publish without a credit card.',
    
    // FAQ
    faqHeading: 'FREQUENTLY ASKED QUESTIONS',
    faq1Q: 'What is an AI site generator?',
    faq1A: 'An AI site generator is a tool that creates a complete website based on a short description of your business or project. Instead of starting from a blank page or picking from rigid templates, you describe what you need and the AI builds a customized site for you in seconds.',
    faq2Q: 'How is a generator different from a template?',
    faq2A: 'Templates are pre-designed layouts you customize manually. Generators use AI to create a unique site based on your specific description, including relevant sections, copy, and imagery tailored to your needs.',
    faq3Q: 'Are these generators free to use?',
    faq3A: 'Yes. You can generate, customize, and publish a site without a credit card. Paid plans are available for advanced features like custom domains and removing Strikingly branding.',
    faq4Q: 'What kinds of sites can I build?',
    faq4A: 'You can build websites, landing pages, portfolios, blogs, online stores, and link-in-bio pages. Each category has multiple specialized generators for different industries and use cases.',
    faq5Q: 'Can I customize what the generator produces?',
    faq5A: 'Absolutely. After the AI generates your site, you can edit any section, swap images, change colors, update copy, add or remove pages, and fully customize the design to match your brand.',
    faq6Q: 'Do generated sites work on mobile?',
    faq6A: 'Yes. Every site produced by our generators is fully responsive and optimized for mobile, tablet, and desktop devices from the start.',
    
    // Closing CTA
    closingHeading: 'READY TO BUILD?',
    closingSub: 'Pick a generator above, or jump straight into our AI builder.',
    closingCta: 'START WITH AI BUILDER',
    
    // Footer
    footerCopyright: '© 2026 Strikingly, Inc.',
  }
};

// Category definitions
const categories = [
  { id: 'websites', name: 'Websites', slug: 'websites', desc: 'AI-built business and personal sites for any goal.' },
  { id: 'landing-pages', name: 'Landing Pages', slug: 'landing-pages', desc: 'Single-page sites built to convert visitors fast.' },
  { id: 'portfolios', name: 'Portfolios', slug: 'portfolios', desc: 'Showcase your work with a clean, focused site.' },
  { id: 'blogs', name: 'Blogs', slug: 'blogs', desc: 'Publish-ready blogs with built-in SEO basics.' },
  { id: 'stores', name: 'Online Stores', slug: 'stores', desc: 'Sell products online with payments built in.' },
  { id: 'link-in-bio', name: 'Link-in-Bio', slug: 'link-in-bio', desc: 'One link, all your places. Made for creators.' },
];

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

// All generators by category (8-12 per category)
const allGenerators = {
  websites: [
    { name: 'AI Website Generator', desc: 'Describe your business, get a full site', slug: 'ai-website-generator' },
    { name: 'One-Page Website Builder', desc: 'Simple sites, single scroll', slug: 'one-page-website-builder' },
    { name: 'Wedding Website Generator', desc: 'Share your day with guests', slug: 'wedding-website-generator' },
    { name: 'Restaurant Website Builder', desc: 'Menu, hours, reservations, done', slug: 'restaurant-website-builder' },
    { name: 'Free Website Builder for Photographers', desc: 'Showcase your work beautifully', slug: 'free-website-builder-for-photographers' },
    { name: 'AI Website Generator for Yoga Instructors', desc: 'Class schedules and bookings', slug: 'ai-website-generator-for-yoga-instructors' },
    { name: 'No-Code Website Builder', desc: 'Build without any technical skills', slug: 'no-code-website-builder' },
    { name: 'Beautiful Website Generator', desc: 'Stunning designs in seconds', slug: 'beautiful-website-generator' },
    { name: 'Business Website Builder', desc: 'Professional sites for any company', slug: 'business-website-builder' },
    { name: 'Personal Website Generator', desc: 'Your story, your way', slug: 'personal-website-generator' },
  ],
  'landing-pages': [
    { name: 'AI Landing Page Maker', desc: 'One-page sites built to convert', slug: 'ai-landing-page-maker' },
    { name: 'Product Launch Landing Page', desc: 'Announce and sell your new product', slug: 'product-launch-landing-page' },
    { name: 'Event Registration Page Builder', desc: 'Get signups for your next event', slug: 'event-registration-page-builder' },
    { name: 'Lead Capture Landing Page', desc: 'Collect emails and grow your list', slug: 'lead-capture-landing-page' },
    { name: 'Free Landing Page Generator', desc: 'High-converting pages, zero cost', slug: 'free-landing-page-generator' },
    { name: 'AI Landing Page for SaaS', desc: 'Showcase your software beautifully', slug: 'ai-landing-page-for-saas' },
    { name: 'One-Page Sales Funnel Builder', desc: 'Turn visitors into customers', slug: 'one-page-sales-funnel-builder' },
    { name: 'Campaign Landing Page Maker', desc: 'Promote your next big idea', slug: 'campaign-landing-page-maker' },
    { name: 'No-Code Landing Page Builder', desc: 'Launch fast without developers', slug: 'no-code-landing-page-builder' },
    { name: 'Beautiful Landing Page Generator', desc: 'Designs that drive results', slug: 'beautiful-landing-page-generator' },
  ],
  portfolios: [
    { name: 'Free Portfolio Generator', desc: 'For creatives, in minutes, no fee', slug: 'free-portfolio-generator' },
    { name: 'Portfolio Generator for Designers', desc: 'Showcase projects with style', slug: 'portfolio-generator-for-designers' },
    { name: 'AI Portfolio Builder for Photographers', desc: 'Display your best work', slug: 'ai-portfolio-builder-for-photographers' },
    { name: 'Artist Portfolio Website Maker', desc: 'Your art, your story', slug: 'artist-portfolio-website-maker' },
    { name: 'No-Code Portfolio Builder', desc: 'Build without code', slug: 'no-code-portfolio-builder' },
    { name: 'Beautiful Portfolio Generator', desc: 'Elegant layouts for creatives', slug: 'beautiful-portfolio-generator' },
    { name: 'One-Page Portfolio Builder', desc: 'Everything on a single scroll', slug: 'one-page-portfolio-builder' },
    { name: 'Free Portfolio for Freelancers', desc: 'Win clients with your work', slug: 'free-portfolio-for-freelancers' },
    { name: 'AI Portfolio for Architects', desc: 'Present your projects professionally', slug: 'ai-portfolio-for-architects' },
    { name: 'Portfolio Generator for Writers', desc: 'Share your published work', slug: 'portfolio-generator-for-writers' },
  ],
  blogs: [
    { name: 'Blog Generator for Beginners', desc: 'Publish-ready in minutes', slug: 'blog-generator-for-beginners' },
    { name: 'AI Blog Builder for Food Bloggers', desc: 'Recipes, stories, and more', slug: 'ai-blog-builder-for-food-bloggers' },
    { name: 'Travel Blog Website Maker', desc: 'Share your adventures', slug: 'travel-blog-website-maker' },
    { name: 'Free Blog Generator', desc: 'Start writing, no cost', slug: 'free-blog-generator' },
    { name: 'No-Code Blog Builder', desc: 'Launch your blog without tech', slug: 'no-code-blog-builder' },
    { name: 'Beautiful Blog Generator', desc: 'Clean, readable designs', slug: 'beautiful-blog-generator' },
    { name: 'AI Blog for Fitness Coaches', desc: 'Share workouts and tips', slug: 'ai-blog-for-fitness-coaches' },
    { name: 'One-Page Blog Builder', desc: 'Simple, focused writing space', slug: 'one-page-blog-builder' },
    { name: 'Blog Generator for Small Business', desc: 'Share news and updates', slug: 'blog-generator-for-small-business' },
    { name: 'AI Blog Builder for Educators', desc: 'Teach and inspire online', slug: 'ai-blog-builder-for-educators' },
  ],
  stores: [
    { name: 'Online Store Builder', desc: 'Start selling without writing code', slug: 'online-store-builder' },
    { name: 'Online Store Builder for Restaurants', desc: 'Take orders and reservations', slug: 'online-store-builder-for-restaurants' },
    { name: 'AI Store Generator for Boutiques', desc: 'Sell fashion with ease', slug: 'ai-store-generator-for-boutiques' },
    { name: 'Free Online Store Maker', desc: 'Launch your shop at no cost', slug: 'free-online-store-maker' },
    { name: 'No-Code Store Builder', desc: 'Sell products without developers', slug: 'no-code-store-builder' },
    { name: 'Beautiful Store Generator', desc: 'Stunning product displays', slug: 'beautiful-store-generator' },
    { name: 'AI Store for Jewelry Makers', desc: 'Showcase and sell your pieces', slug: 'ai-store-for-jewelry-makers' },
    { name: 'One-Page Store Builder', desc: 'Simple checkout experience', slug: 'one-page-store-builder' },
    { name: 'Online Store for Handmade Goods', desc: 'Sell your crafts online', slug: 'online-store-for-handmade-goods' },
    { name: 'AI Store Builder for Artists', desc: 'Prints, originals, and merch', slug: 'ai-store-builder-for-artists' },
  ],
  'link-in-bio': [
    { name: 'Link-in-Bio Generator', desc: 'One link for all your channels', slug: 'link-in-bio-generator' },
    { name: 'Link-in-Bio for Creators', desc: 'Share everything you make', slug: 'link-in-bio-for-creators' },
    { name: 'Free Link-in-Bio Builder', desc: 'All your links, zero cost', slug: 'free-link-in-bio-builder' },
    { name: 'AI Link-in-Bio for Influencers', desc: 'Connect fans to your world', slug: 'ai-link-in-bio-for-influencers' },
    { name: 'No-Code Link-in-Bio Maker', desc: 'Build in seconds', slug: 'no-code-link-in-bio-maker' },
    { name: 'Beautiful Link-in-Bio Generator', desc: 'Clean, branded designs', slug: 'beautiful-link-in-bio-generator' },
    { name: 'Link-in-Bio for Musicians', desc: 'Stream, watch, buy, follow', slug: 'link-in-bio-for-musicians' },
    { name: 'One-Page Link-in-Bio Builder', desc: 'Everything on a single screen', slug: 'one-page-link-in-bio-builder' },
    { name: 'AI Link-in-Bio for Coaches', desc: 'Book, buy, and connect', slug: 'ai-link-in-bio-for-coaches' },
    { name: 'Link-in-Bio Generator for Brands', desc: 'Drive traffic everywhere', slug: 'link-in-bio-generator-for-brands' },
  ],
};

// Category icons (inline SVGs)
const CategoryIcon = ({ category, className = '' }) => {
  const icons = {
    websites: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M9 21V9" />
      </svg>
    ),
    'landing-pages': (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M4 4v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8.3L15.7 4H6c-1.1 0-2 .9-2 2z" />
        <path d="M14 4v4h4" />
      </svg>
    ),
    portfolios: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <path d="M21 15l-5-5L5 21" />
      </svg>
    ),
    blogs: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
      </svg>
    ),
    stores: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    'link-in-bio': (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
      </svg>
    ),
  };
  return icons[category] || null;
};

// Website mockup illustration for hero
const WebsiteMockupSVG = () => (
  <svg width="400" height="300" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <defs>
      <linearGradient id="heroGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#F4F6F8" />
        <stop offset="100%" stopColor="#E2E4E7" />
      </linearGradient>
    </defs>
    {/* Browser frame */}
    <rect x="20" y="20" width="360" height="260" rx="8" fill="white" stroke="#C6C9CD" strokeWidth="2" />
    {/* Browser bar */}
    <rect x="20" y="20" width="360" height="32" rx="8" fill="#F4F6F8" />
    <circle cx="44" cy="36" r="5" fill="#C6C9CD" />
    <circle cx="62" cy="36" r="5" fill="#C6C9CD" />
    <circle cx="80" cy="36" r="5" fill="#C6C9CD" />
    {/* URL bar */}
    <rect x="100" y="28" width="200" height="16" rx="4" fill="white" stroke="#C6C9CD" />
    {/* Content area */}
    <rect x="40" y="70" width="320" height="40" rx="4" fill="url(#heroGrad)" />
    <rect x="40" y="120" width="200" height="20" rx="2" fill="#E2E4E7" />
    <rect x="40" y="150" width="280" height="16" rx="2" fill="#E2E4E7" />
    <rect x="40" y="175" width="240" height="16" rx="2" fill="#E2E4E7" />
    {/* Purple accent lines */}
    <rect x="40" y="210" width="100" height="30" rx="4" fill="#8159BB" opacity="0.2" />
    <rect x="150" y="210" width="100" height="30" rx="4" fill="#8159BB" opacity="0.15" />
    <rect x="260" y="210" width="100" height="30" rx="4" fill="#8159BB" opacity="0.1" />
  </svg>
);

// Generator card component
const GeneratorCard = ({ generator, showCategory = false, categoryName = '' }) => {
  const href = `/generators/${generator.slug}`;
  return (
    <a
      href={href}
      className="block bg-white border border-[#C6C9CD] rounded-[3px] p-5 hover:border-[#8159BB] hover:shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#8159BB] focus:ring-offset-2"
      aria-label={generator.name}
    >
      {showCategory && (
        <span className="inline-block text-[11px] font-bold uppercase tracking-wide text-[#8159BB] border border-[#8159BB] rounded-[3px] px-[6px] py-[2px] mb-3">
          {categoryName}
        </span>
      )}
      <h4 className="font-bold text-[#2E2E2F] text-[15px] mb-2 leading-tight">{generator.name}</h4>
      <p className="text-[#636972] text-sm leading-[1.5]">{generator.desc}</p>
    </a>
  );
};

// Category card for browse section
const CategoryCard = ({ category }) => {
  return (
    <a
      href={`#${category.slug}`}
      className="block bg-white border border-[#C6C9CD] rounded-[3px] p-6 hover:border-[#8159BB] hover:shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#8159BB] focus:ring-offset-2 group"
    >
      <div className="w-10 h-10 text-[#8159BB] mb-4">
        <CategoryIcon category={category.id} className="w-full h-full" />
      </div>
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-bold text-[#4B5056] text-sm uppercase tracking-wide">{category.name}</h3>
        <svg className="w-5 h-5 text-[#8159BB] group-hover:translate-x-0.5 transition-transform" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
        </svg>
      </div>
      <p className="text-[#636972] text-sm leading-[1.5]">{category.desc}</p>
    </a>
  );
};

// FAQ Accordion Item
const FAQItem = ({ question, answer, isOpen, onToggle, id }) => {
  return (
    <div className="border-b border-[#E2E4E7] last:border-b-0">
      <button
        id={`faq-button-${id}`}
        aria-expanded={isOpen}
        aria-controls={`faq-panel-${id}`}
        onClick={onToggle}
        className="w-full flex items-center justify-between py-4 text-left focus:outline-none focus:ring-2 focus:ring-[#8159BB] focus:ring-offset-2 rounded"
      >
        <span className="font-bold text-[#4B5056] text-[15px] pr-4">{question}</span>
        <svg
          className={`w-5 h-5 text-[#8159BB] flex-shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </button>
      <div
        id={`faq-panel-${id}`}
        role="region"
        aria-labelledby={`faq-button-${id}`}
        className={`overflow-hidden transition-all duration-200 ${isOpen ? 'max-h-96 pb-4' : 'max-h-0'}`}
      >
        <p className="text-[#636972] text-sm leading-[1.5] pr-8">{answer}</p>
      </div>
    </div>
  );
};

// Main Generators Page Component
const Generators = () => {
  const s = strings.en;
  
  // Search state
  const [searchQuery, setSearchQuery] = useState('');
  
  // Show all toggles per category
  const [showAll, setShowAll] = useState({});
  
  // FAQ open state (first one open by default)
  const [openFAQs, setOpenFAQs] = useState({ 0: true });
  
  // Filter generators based on search
  const filteredGenerators = useMemo(() => {
    if (!searchQuery.trim()) {
      return allGenerators;
    }
    
    const query = searchQuery.toLowerCase().trim();
    const filtered = {};
    
    Object.keys(allGenerators).forEach(catKey => {
      const matches = allGenerators[catKey].filter(gen =>
        gen.name.toLowerCase().includes(query) ||
        gen.desc.toLowerCase().includes(query) ||
        categories.find(c => c.id === catKey)?.name.toLowerCase().includes(query)
      );
      if (matches.length > 0) {
        filtered[catKey] = matches;
      }
    });
    
    return filtered;
  }, [searchQuery]);
  
  // Count total matching generators
  const matchCount = useMemo(() => {
    return Object.values(filteredGenerators).reduce((sum, arr) => sum + arr.length, 0);
  }, [filteredGenerators]);
  
  // Toggle show all for a category
  const toggleShowAll = (catId) => {
    setShowAll(prev => ({ ...prev, [catId]: !prev[catId] }));
  };
  
  // Toggle FAQ
  const toggleFAQ = (index) => {
    setOpenFAQs(prev => ({ ...prev, [index]: !prev[index] }));
  };
  
  // Clear search
  const clearSearch = () => {
    setSearchQuery('');
  };
  
  // Get visible generators for a category (with show all logic)
  const getVisibleGenerators = (catId, generators) => {
    const isShowingAll = showAll[catId];
    if (isShowingAll || generators.length <= 6) {
      return generators;
    }
    return generators.slice(0, 6);
  };
  
  // Check if category has more items to show
  const hasMoreItems = (catId, generators) => {
    return generators.length > 6 && !showAll[catId];
  };
  
  return (
    <div className="min-h-screen bg-white text-[#2E2E2F] font-sans">
      {/* Section 0: Top Bar */}
      <header className="border-b border-[#E2E4E7] bg-white">
        <div className="max-w-[1200px] mx-auto px-5 h-14 flex items-center">
          <a href="/" className="font-bold text-lg tracking-tight text-[#2E2E2F]">
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
      
      {/* Section 2: Hero */}
      <section className="max-w-[1200px] mx-auto px-5 pt-8 pb-16 md:pt-12 md:pb-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-[32px] md:text-[44px] leading-[1.15] font-bold tracking-[-0.5px] mb-4">
              <span className="block text-[#2E2E2F] uppercase">{s.heroH1Line1}</span>
              <span 
                className="block uppercase bg-clip-text text-transparent"
                style={{ backgroundImage: 'linear-gradient(90deg, #7671FF 0%, #CB0C9F 100%)' }}
              >
                {s.heroH1Line2}
              </span>
            </h1>
            <p className="text-[#636972] text-[15px] leading-[1.6] mb-8 max-w-[460px]">
              {s.heroSubheadline}
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="/s/ai_site_builder"
                className="inline-flex items-center justify-center h-11 px-6 rounded-[4px] text-sm font-bold uppercase tracking-wide text-white transition-all"
                style={{ background: 'linear-gradient(90deg, #7671FF 0%, #CB0C9F 100%)' }}
              >
                {s.heroPrimaryCta}
              </a>
              <a
                href="#all-generators"
                className="inline-flex items-center justify-center h-11 px-6 rounded-[4px] text-sm font-bold uppercase tracking-wide border border-[#8159BB] text-[#8159BB] hover:bg-[#8159BB] hover:text-white transition-all"
              >
                {s.heroSecondaryCta}
              </a>
            </div>
          </div>
          <div className="flex justify-center md:justify-end">
            <WebsiteMockupSVG />
          </div>
        </div>
      </section>
      
      {/* Section 3: Featured Generators */}
      <section className="bg-[#F4F6F8] py-12">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="mb-8">
            <h2 className="text-[26px] md:text-[30px] font-bold text-[#4B5056] uppercase tracking-[-0.3px] mb-2">
              {s.featuredHeading}
            </h2>
            <p className="text-[#636972] text-[15px]">{s.featuredSubheading}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {featuredGenerators.map((gen, idx) => (
              <GeneratorCard 
                key={idx} 
                generator={gen} 
                showCategory={true} 
                categoryName={gen.category} 
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Section 4: Browse by Category */}
      <section className="py-12">
        <div className="max-w-[1200px] mx-auto px-5">
          <h2 className="text-[26px] md:text-[30px] font-bold text-[#4B5056] uppercase tracking-[-0.3px] mb-8">
            {s.browseHeading}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {categories.map((cat) => (
              <CategoryCard key={cat.id} category={cat} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Section 5: All Generators Directory */}
      <section id="all-generators" className="bg-[#F4F6F8] py-12 scroll-mt-4">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="mb-8">
            <h2 className="text-[26px] md:text-[30px] font-bold text-[#4B5056] uppercase tracking-[-0.3px] mb-2">
              {s.allHeading}
            </h2>
            <p className="text-[#636972] text-[15px] mb-6">{s.allSubheading}</p>
            
            {/* Search Input */}
            <div className="relative max-w-[480px]">
              <label htmlFor="generator-search" className="sr-only">{s.searchLabel}</label>
              <div className="relative">
                <svg 
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#636972]" 
                  viewBox="0 0 20 20" 
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                </svg>
                <input
                  id="generator-search"
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={s.searchPlaceholder}
                  aria-label={s.searchLabel}
                  className="w-full h-11 pl-11 pr-4 rounded-[4px] border border-[#C6C9CD] text-sm placeholder:text-[#636972] focus:outline-none focus:border-[#8159BB] focus:ring-1 focus:ring-[#8159BB]"
                />
              </div>
              {searchQuery && (
                <div className="mt-2 text-sm text-[#636972]">
                  {s.searchResults(matchCount)}
                </div>
              )}
            </div>
          </div>
          
          {/* Generator Categories */}
          {Object.keys(filteredGenerators).length > 0 ? (
            categories.map((cat) => {
              const gens = filteredGenerators[cat.id];
              if (!gens || gens.length === 0) return null;
              
              const visibleGens = getVisibleGenerators(cat.id, gens);
              const showToggle = hasMoreItems(cat.id, gens);
              const remainingCount = gens.length - 6;
              
              return (
                <div key={cat.id} id={cat.slug} className="mb-10 scroll-mt-4">
                  <h3 className="text-lg font-bold text-[#4B5056] mb-1">{cat.name}</h3>
                  <p className="text-[#636972] text-sm mb-4">{cat.desc}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {visibleGens.map((gen, idx) => (
                      <GeneratorCard key={idx} generator={gen} />
                    ))}
                  </div>
                  
                  {showToggle && (
                    <button
                      onClick={() => toggleShowAll(cat.id)}
                      aria-expanded={false}
                      aria-controls={`${cat.id}-generators`}
                      className="mt-4 text-sm font-bold text-[#8159BB] hover:underline focus:outline-none focus:ring-2 focus:ring-[#8159BB] focus:ring-offset-2 rounded"
                    >
                      Show all {remainingCount} generators
                    </button>
                  )}
                  
                  {showAll[cat.id] && gens.length > 6 && (
                    <button
                      onClick={() => toggleShowAll(cat.id)}
                      aria-expanded={true}
                      aria-controls={`${cat.id}-generators`}
                      className="mt-4 text-sm font-bold text-[#8159BB] hover:underline focus:outline-none focus:ring-2 focus:ring-[#8159BB] focus:ring-offset-2 rounded"
                    >
                      Show fewer
                    </button>
                  )}
                </div>
              );
            })
          ) : (
            /* Empty State */
            <div className="text-center py-12">
              <p className="text-[#636972] mb-4">No generators match your search.</p>
              <button
                onClick={clearSearch}
                className="text-[#8159BB] font-bold hover:underline mr-4"
              >
                {s.searchClear}
              </button>
              <a href="/s/ai_site_builder" className="text-[#8159BB] font-bold hover:underline">
                {s.searchEmpty}
              </a>
            </div>
          )}
        </div>
      </section>
      
      {/* Section 6: How It Works */}
      <section className="py-12">
        <div className="max-w-[1200px] mx-auto px-5">
          <h2 className="text-[26px] md:text-[30px] font-bold text-[#4B5056] uppercase tracking-[-0.3px] mb-10 text-center">
            {s.howHeading}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { num: '1', title: s.howStep1Title, desc: s.howStep1Desc },
              { num: '2', title: s.howStep2Title, desc: s.howStep2Desc },
              { num: '3', title: s.howStep3Title, desc: s.howStep3Desc },
            ].map((step, idx) => (
              <div key={idx} className="text-center">
                <div className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-[#8159BB] text-white font-bold text-lg mb-4">
                  {step.num}
                </div>
                <h4 className="font-bold text-sm uppercase tracking-wide mb-2">{step.title}</h4>
                <p className="text-[#636972] text-sm leading-[1.5] max-w-[280px] mx-auto">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Section 7: Why Strikingly */}
      <section className="bg-[#F4F6F8] py-12">
        <div className="max-w-[1200px] mx-auto px-5">
          <h2 className="text-[26px] md:text-[30px] font-bold text-[#4B5056] uppercase tracking-[-0.3px] mb-10 text-center">
            {s.whyHeading}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: '⚡', title: s.why1Title, desc: s.why1Desc },
              { icon: '📱', title: s.why2Title, desc: s.why2Desc },
              { icon: '✨', title: s.why3Title, desc: s.why3Desc },
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="text-3xl mb-4" aria-hidden="true">{item.icon}</div>
                <h4 className="font-bold text-sm uppercase tracking-wide mb-2">{item.title}</h4>
                <p className="text-[#636972] text-sm leading-[1.5] max-w-[280px] mx-auto">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Section 8: FAQ */}
      <section className="py-12">
        <div className="max-w-[1200px] mx-auto px-5">
          <h2 className="text-[26px] md:text-[30px] font-bold text-[#4B5056] uppercase tracking-[-0.3px] mb-8">
            {s.faqHeading}
          </h2>
          <div className="max-w-[720px]">
            {[
              { q: s.faq1Q, a: s.faq1A },
              { q: s.faq2Q, a: s.faq2A },
              { q: s.faq3Q, a: s.faq3A },
              { q: s.faq4Q, a: s.faq4A },
              { q: s.faq5Q, a: s.faq5A },
              { q: s.faq6Q, a: s.faq6A },
            ].map((faq, idx) => (
              <FAQItem
                key={idx}
                id={idx}
                question={faq.q}
                answer={faq.a}
                isOpen={!!openFAQs[idx]}
                onToggle={() => toggleFAQ(idx)}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Section 9: Closing CTA */}
      <section className="py-16 border-t border-[#E2E4E7]">
        <div className="max-w-[1200px] mx-auto px-5 text-center">
          <h2 className="text-[28px] md:text-[32px] font-bold text-[#4B5056] uppercase tracking-[-0.3px] mb-3">
            {s.closingHeading}
          </h2>
          <p className="text-[#636972] text-[15px] mb-6">{s.closingSub}</p>
          <a
            href="/s/ai_site_builder"
            className="inline-flex items-center justify-center h-11 px-8 rounded-[4px] text-sm font-bold uppercase tracking-wide text-white transition-all"
            style={{ background: 'linear-gradient(90deg, #7671FF 0%, #CB0C9F 100%)' }}
          >
            {s.closingCta}
          </a>
        </div>
      </section>
      
      {/* Section 10: Footer */}
      <footer className="bg-[#F4F6F8] border-t border-[#E2E4E7] py-10">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-y-8 mb-8">
            <div>
              <div className="font-bold text-lg tracking-tight mb-4">{s.logo}</div>
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-wide text-[#4B5056] mb-3">Product</div>
              <ul className="space-y-2 text-sm text-[#636972]">
                <li><a href="/templates" className="hover:text-[#8159BB]">Templates</a></li>
                <li><a href="/pricing" className="hover:text-[#8159BB]">Pricing</a></li>
                <li><a href="/blog" className="hover:text-[#8159BB]">Blog</a></li>
              </ul>
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-wide text-[#4B5056] mb-3">Company</div>
              <ul className="space-y-2 text-sm text-[#636972]">
                <li><a href="/about" className="hover:text-[#8159BB]">About</a></li>
                <li><a href="/support" className="hover:text-[#8159BB]">Support</a></li>
              </ul>
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-wide text-[#4B5056] mb-3">Legal</div>
              <ul className="space-y-2 text-sm text-[#636972]">
                <li><a href="/terms" className="hover:text-[#8159BB]">Terms</a></li>
                <li><a href="/privacy" className="hover:text-[#8159BB]">Privacy</a></li>
              </ul>
            </div>
            <div className="col-span-2 md:col-span-1">
              <div className="text-xs text-[#636972]">{s.footerCopyright}</div>
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
