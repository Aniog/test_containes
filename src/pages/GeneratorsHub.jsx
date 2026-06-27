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
    ctaPrimary: "START BUILDING - IT'S FREE",
    ctaSecondary: 'BROWSE GENERATORS',
    
    // Featured
    featuredTitle: 'FEATURED GENERATORS',
    featuredSubtitle: 'A few common starting points.',
    
    // Browse by Category
    browseTitle: 'BROWSE BY CATEGORY',
    browseWebsites: 'Websites',
    browseWebsitesDesc: 'AI-built business and personal sites for any goal.',
    browseLanding: 'Landing Pages',
    browseLandingDesc: 'Single-page sites built to convert visitors fast.',
    browsePortfolios: 'Portfolios',
    browsePortfoliosDesc: 'Showcase your work with a clean, focused site.',
    browseBlogs: 'Blogs',
    browseBlogsDesc: 'Publish-ready blogs with built-in SEO basics.',
    browseStores: 'Online Stores',
    browseStoresDesc: 'Sell products online with payments built in.',
    browseLinkBio: 'Link-in-Bio',
    browseLinkBioDesc: 'One link, all your places. Made for creators.',
    
    // All Generators
    allTitle: 'ALL GENERATORS',
    allSubtitle: 'Sixty-plus generators, organized by what you\'re building.',
    searchPlaceholder: 'Search generators...',
    searchLabel: 'Search generators',
    searchResults: (count) => `${count} generators match`,
    searchEmpty: "Can't find it? Start with our AI builder.",
    searchClear: 'Clear search',
    
    // Category sections
    catWebsites: 'Websites',
    catWebsitesDesc: 'Full sites for businesses, creators, and personal projects.',
    catLanding: 'Landing Pages',
    catLandingDesc: 'Single-page sites built to convert visitors fast.',
    catPortfolios: 'Portfolios',
    catPortfoliosDesc: 'Showcase your work with a clean, focused site.',
    catBlogs: 'Blogs',
    catBlogsDesc: 'Publish-ready blogs with built-in SEO basics.',
    catStores: 'Online Stores',
    catStoresDesc: 'Sell products online with payments built in.',
    catLinkBio: 'Link-in-Bio',
    catLinkBioDesc: 'One link, all your places. Made for creators.',
    
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
    faq1A: 'An AI site generator uses artificial intelligence to create a complete website based on a short description you provide. Instead of starting from a blank canvas or rigid template, you describe your business or project in plain language, and the AI builds a site tailored to your needs.',
    faq2Q: 'How is a generator different from a template?',
    faq2A: 'Templates are pre-designed layouts you customize manually. Generators use AI to create a unique site from your description, including content, layout, and structure. You get a personalized starting point rather than a generic framework.',
    faq3Q: 'Are these generators free to use?',
    faq3A: 'Yes. You can generate, customize, and publish a site without a credit card. Paid plans unlock additional features like custom domains, advanced analytics, and priority support.',
    faq4Q: 'What kinds of sites can I build?',
    faq4A: 'Our generators cover websites, landing pages, portfolios, blogs, online stores, and link-in-bio pages. Each category includes variations for different industries and audiences.',
    faq5Q: 'Can I customize what the generator produces?',
    faq5A: 'Absolutely. After generation, you can edit text, swap images, rearrange sections, and adjust colors using our visual editor. Nothing is locked.',
    faq6Q: 'Do generated sites work on mobile?',
    faq6A: 'Yes. Every site produced by our generators is responsive by default and looks great on phones, tablets, and desktops.',
    
    // Closing CTA
    closingTitle: 'READY TO BUILD?',
    closingSubtitle: 'Pick a generator above, or jump straight into our AI builder.',
    closingCta: 'START WITH AI BUILDER',
    
    // Footer
    footerAbout: 'About',
    footerPricing: 'Pricing',
    footerTemplates: 'Templates',
    footerSupport: 'Support',
    footerBlog: 'Blog',
    footerTerms: 'Terms',
    footerPrivacy: 'Privacy',
    footerCopyright: '© 2026 Strikingly, Inc. All rights reserved.',
  }
};

const s = strings.en;

// Generator data - Featured (9 items, mixed categories)
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
  websites: {
    id: 'websites',
    title: s.catWebsites,
    desc: s.catWebsitesDesc,
    icon: '🌐',
    generators: [
      { name: 'AI Website Generator', desc: 'Describe your business, get a full site', slug: 'ai-website-generator' },
      { name: 'Free Website Builder for Photographers', desc: 'Showcase your portfolio in minutes', slug: 'free-website-builder-for-photographers' },
      { name: 'One-Page Wedding Website Builder', desc: 'Share your day with guests', slug: 'one-page-wedding-website-builder' },
      { name: 'Restaurant Website Builder', desc: 'Menu, hours, reservations, done', slug: 'restaurant-website-builder' },
      { name: 'Yoga Studio Website Generator', desc: 'Class schedules and booking online', slug: 'yoga-studio-website-generator' },
      { name: 'No-Code Website Builder', desc: 'Build without touching code', slug: 'no-code-website-builder' },
      { name: 'Beautiful Website Generator', desc: 'Stunning designs, zero effort', slug: 'beautiful-website-generator' },
      { name: 'AI Website for Coaches', desc: 'Attract clients with a professional site', slug: 'ai-website-for-coaches' },
      { name: 'Personal Website Builder', desc: 'Your story, your way', slug: 'personal-website-builder' },
      { name: 'Small Business Website Maker', desc: 'Professional presence, fast', slug: 'small-business-website-maker' },
    ]
  },
  landingPages: {
    id: 'landing-pages',
    title: s.catLanding,
    desc: s.catLandingDesc,
    icon: '📄',
    generators: [
      { name: 'AI Landing Page Maker', desc: 'One-page sites built to convert', slug: 'ai-landing-page-maker' },
      { name: 'Product Launch Landing Page', desc: 'Announce and sell your product', slug: 'product-launch-landing-page' },
      { name: 'Free Landing Page Builder', desc: 'No cost, high impact', slug: 'free-landing-page-builder' },
      { name: 'Event Registration Page', desc: 'Collect RSVPs in seconds', slug: 'event-registration-page' },
      { name: 'Lead Capture Landing Page', desc: 'Grow your email list fast', slug: 'lead-capture-landing-page' },
      { name: 'One-Page Website Builder', desc: 'Simple sites, single scroll', slug: 'one-page-website-builder' },
      { name: 'AI Landing Page for SaaS', desc: 'Convert visitors into users', slug: 'ai-landing-page-for-saas' },
      { name: 'Campaign Landing Page Generator', desc: 'Promote your next big thing', slug: 'campaign-landing-page-generator' },
      { name: 'No-Code Landing Page Maker', desc: 'Build without developers', slug: 'no-code-landing-page-maker' },
      { name: 'Beautiful Landing Page Builder', desc: 'Designs that convert', slug: 'beautiful-landing-page-builder' },
    ]
  },
  portfolios: {
    id: 'portfolios',
    title: s.catPortfolios,
    desc: s.catPortfoliosDesc,
    icon: '🎨',
    generators: [
      { name: 'Free Portfolio Generator', desc: 'For creatives, in minutes, no fee', slug: 'free-portfolio-generator' },
      { name: 'Portfolio Generator for Designers', desc: 'Show your best work', slug: 'portfolio-generator-for-designers' },
      { name: 'AI Portfolio Builder for Photographers', desc: 'Display your photos beautifully', slug: 'ai-portfolio-builder-for-photographers' },
      { name: 'Artist Portfolio Website Maker', desc: 'Your art, your story', slug: 'artist-portfolio-website-maker' },
      { name: 'Developer Portfolio Generator', desc: 'Code samples that stand out', slug: 'developer-portfolio-generator' },
      { name: 'No-Code Portfolio Builder', desc: 'Build without code', slug: 'no-code-portfolio-builder' },
      { name: 'Beautiful Portfolio Generator', desc: 'Stunning layouts for creatives', slug: 'beautiful-portfolio-generator' },
      { name: 'Freelancer Portfolio Maker', desc: 'Win clients with your work', slug: 'freelancer-portfolio-maker' },
      { name: 'AI Portfolio for Writers', desc: 'Showcase your writing samples', slug: 'ai-portfolio-for-writers' },
      { name: 'One-Page Portfolio Builder', desc: 'Simple, focused, effective', slug: 'one-page-portfolio-builder' },
    ]
  },
  blogs: {
    id: 'blogs',
    title: s.catBlogs,
    desc: s.catBlogsDesc,
    icon: '✍️',
    generators: [
      { name: 'Blog Generator for Beginners', desc: 'Publish-ready in minutes', slug: 'blog-generator-for-beginners' },
      { name: 'AI Blog Builder for Foodies', desc: 'Recipes, reviews, and more', slug: 'ai-blog-builder-for-foodies' },
      { name: 'Free Blog Website Maker', desc: 'Start writing, no cost', slug: 'free-blog-website-maker' },
      { name: 'Travel Blog Generator', desc: 'Share your journeys', slug: 'travel-blog-generator' },
      { name: 'No-Code Blog Builder', desc: 'Write without tech hassle', slug: 'no-code-blog-builder' },
      { name: 'Beautiful Blog Website Maker', desc: 'Clean reading experience', slug: 'beautiful-blog-website-maker' },
      { name: 'AI Blog for Coaches', desc: 'Share your expertise', slug: 'ai-blog-for-coaches' },
      { name: 'Personal Blog Generator', desc: 'Your voice, your platform', slug: 'personal-blog-generator' },
      { name: 'One-Page Blog Builder', desc: 'Simple posts, fast publishing', slug: 'one-page-blog-builder' },
      { name: 'AI Blog for Photographers', desc: 'Stories behind your photos', slug: 'ai-blog-for-photographers' },
    ]
  },
  stores: {
    id: 'stores',
    title: s.catStores,
    desc: s.catStoresDesc,
    icon: '🛍️',
    generators: [
      { name: 'Online Store Builder', desc: 'Start selling without writing code', slug: 'online-store-builder' },
      { name: 'Online Store Builder for Restaurants', desc: 'Take orders online', slug: 'online-store-builder-for-restaurants' },
      { name: 'Free Online Store Maker', desc: 'Sell without fees to start', slug: 'free-online-store-maker' },
      { name: 'AI Store Builder for Fashion', desc: 'Clothing and accessories online', slug: 'ai-store-builder-for-fashion' },
      { name: 'No-Code Store Builder', desc: 'Launch your shop fast', slug: 'no-code-store-builder' },
      { name: 'Beautiful Store Generator', desc: 'Designs that sell', slug: 'beautiful-store-generator' },
      { name: 'AI Store for Handmade Goods', desc: 'Sell your crafts online', slug: 'ai-store-for-handmade-goods' },
      { name: 'One-Page Store Builder', desc: 'Simple checkout, fast sales', slug: 'one-page-store-builder' },
      { name: 'Online Store for Coaches', desc: 'Sell courses and products', slug: 'online-store-for-coaches' },
      { name: 'AI Store Builder for Jewelry', desc: 'Showcase and sell your pieces', slug: 'ai-store-builder-for-jewelry' },
    ]
  },
  linkInBio: {
    id: 'link-in-bio',
    title: s.catLinkBio,
    desc: s.catLinkBioDesc,
    icon: '🔗',
    generators: [
      { name: 'Link-in-Bio Generator', desc: 'One link for all your channels', slug: 'link-in-bio-generator' },
      { name: 'Free Link-in-Bio Maker', desc: 'No cost, instant setup', slug: 'free-link-in-bio-maker' },
      { name: 'AI Link-in-Bio for Creators', desc: 'All your links in one place', slug: 'ai-link-in-bio-for-creators' },
      { name: 'No-Code Link Page Builder', desc: 'Build without code', slug: 'no-code-link-page-builder' },
      { name: 'Beautiful Link-in-Bio Page', desc: 'Stylish and simple', slug: 'beautiful-link-in-bio-page' },
      { name: 'Link-in-Bio for Influencers', desc: 'Connect fans to everything', slug: 'link-in-bio-for-influencers' },
      { name: 'One-Page Link Builder', desc: 'Simple, fast, effective', slug: 'one-page-link-builder' },
      { name: 'AI Link-in-Bio for Musicians', desc: 'Share your music everywhere', slug: 'ai-link-in-bio-for-musicians' },
      { name: 'Link-in-Bio for Small Business', desc: 'All your links, one page', slug: 'link-in-bio-for-small-business' },
      { name: 'Free Link Page Generator', desc: 'Start linking in seconds', slug: 'free-link-page-generator' },
    ]
  }
};

// Category cards for Browse by Category
const categoryCards = [
  { id: 'websites', name: s.browseWebsites, desc: s.browseWebsitesDesc, icon: '🌐' },
  { id: 'landing-pages', name: s.browseLanding, desc: s.browseLandingDesc, icon: '📄' },
  { id: 'portfolios', name: s.browsePortfolios, desc: s.browsePortfoliosDesc, icon: '🎨' },
  { id: 'blogs', name: s.browseBlogs, desc: s.browseBlogsDesc, icon: '✍️' },
  { id: 'stores', name: s.browseStores, desc: s.browseStoresDesc, icon: '🛍️' },
  { id: 'link-in-bio', name: s.browseLinkBio, desc: s.browseLinkBioDesc, icon: '🔗' },
];

// FAQ data
const faqItems = [
  { q: s.faq1Q, a: s.faq1A },
  { q: s.faq2Q, a: s.faq2A },
  { q: s.faq3Q, a: s.faq3A },
  { q: s.faq4Q, a: s.faq4A },
  { q: s.faq5Q, a: s.faq5A },
  { q: s.faq6Q, a: s.faq6A },
];

// Inline SVG illustration for hero
const HeroIllustration = () => (
  <svg
    width="480"
    height="360"
    viewBox="0 0 480 360"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    className="w-full h-auto max-w-[480px]"
  >
    <defs>
      <linearGradient id="aiGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#7671FF" />
        <stop offset="100%" stopColor="#CB0C9F" />
      </linearGradient>
    </defs>
    {/* Browser frame */}
    <rect x="40" y="40" width="400" height="280" rx="12" fill="#F4F6F8" stroke="#C6C9CD" strokeWidth="2" />
    {/* Browser header */}
    <rect x="40" y="40" width="400" height="36" rx="12" fill="#E2E4E7" />
    <circle cx="68" cy="58" r="6" fill="#C6C9CD" />
    <circle cx="88" cy="58" r="6" fill="#C6C9CD" />
    <circle cx="108" cy="58" r="6" fill="#C6C9CD" />
    {/* Content area */}
    <rect x="60" y="92" width="360" height="40" rx="6" fill="#FFFFFF" stroke="#C6C9CD" strokeWidth="1" />
    <rect x="60" y="144" width="240" height="16" rx="3" fill="#8159BB" opacity="0.3" />
    <rect x="60" y="168" width="320" height="12" rx="3" fill="#636972" opacity="0.2" />
    <rect x="60" y="188" width="280" height="12" rx="3" fill="#636972" opacity="0.2" />
    {/* AI sparkle */}
    <circle cx="380" cy="160" r="24" fill="url(#aiGrad)" opacity="0.15" />
    <path d="M372 152 L380 160 L388 152 M380 160 L380 176" stroke="#8159BB" strokeWidth="2" strokeLinecap="round" />
    <circle cx="372" cy="168" r="3" fill="#8159BB" />
    <circle cx="388" cy="168" r="3" fill="#8159BB" />
  </svg>
);

// Category icon component
const CategoryIcon = ({ icon }) => (
  <div className="w-12 h-12 flex items-center justify-center text-3xl mb-4" aria-hidden="true">
    {icon}
  </div>
);

// Generator card component
const GeneratorCard = ({ name, desc, category, slug, showCategory = false }) => {
  const href = `/generators/${slug}`;
  return (
    <a
      href={href}
      className="block p-5 bg-white border border-[#C6C9CD] rounded-[3px] hover:border-[#8159BB] hover:shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#8159BB] focus:ring-offset-2"
      aria-label={name}
    >
      {showCategory && category && (
        <span className="inline-block px-2 py-0.5 text-[11px] font-bold uppercase tracking-wide text-[#8159BB] border border-[#8159BB] rounded-[3px] mb-3">
          {category}
        </span>
      )}
      <h4 className="font-bold text-[#2E2E2F] text-[15px] mb-2 leading-tight">{name}</h4>
      <p className="text-[#636972] text-sm leading-[1.5]">{desc}</p>
    </a>
  );
};

// Category subsection card (for All Generators)
const CategorySubsection = ({ category, searchTerm, expandedSections, toggleExpanded }) => {
  const { id, title, desc, icon, generators } = category;
  
  // Filter generators based on search
  const filteredGens = useMemo(() => {
    if (!searchTerm) return generators;
    const term = searchTerm.toLowerCase();
    return generators.filter(g => 
      g.name.toLowerCase().includes(term) || 
      g.desc.toLowerCase().includes(term)
    );
  }, [generators, searchTerm]);

  if (filteredGens.length === 0) return null;

  const isExpanded = expandedSections[id] !== false;
  const displayGens = isExpanded ? filteredGens : filteredGens.slice(0, 6);
  const hasMore = filteredGens.length > 6;

  return (
    <section id={id} className="mb-10">
      <h3 className="font-bold text-[#4B5056] text-[20px] uppercase tracking-wide mb-1">{title}</h3>
      <p className="text-[#636972] text-sm mb-5">{desc}</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {displayGens.map((gen, idx) => (
          <GeneratorCard
            key={idx}
            name={gen.name}
            desc={gen.desc}
            slug={gen.slug}
          />
        ))}
      </div>

      {hasMore && (
        <button
          onClick={() => toggleExpanded(id)}
          className="mt-4 text-sm font-bold text-[#8159BB] hover:underline focus:outline-none focus:ring-2 focus:ring-[#8159BB] rounded px-2 py-1"
          aria-expanded={isExpanded}
          aria-controls={`${id}-generators`}
        >
          {isExpanded ? s.showLess : s.showAll(filteredGens.length)}
        </button>
      )}
    </section>
  );
};

const GeneratorsHub = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedSections, setExpandedSections] = useState({});
  const [openFaq, setOpenFaq] = useState(0); // First FAQ open by default

  // Count total generators
  const totalGenerators = useMemo(() => {
    return Object.values(allGenerators).reduce((sum, cat) => sum + cat.generators.length, 0);
  }, []);

  // Search results count
  const searchResultsCount = useMemo(() => {
    if (!searchTerm) return totalGenerators;
    const term = searchTerm.toLowerCase();
    let count = 0;
    Object.values(allGenerators).forEach(cat => {
      cat.generators.forEach(g => {
        if (g.name.toLowerCase().includes(term) || g.desc.toLowerCase().includes(term)) {
          count++;
        }
      });
    });
    return count;
  }, [searchTerm, totalGenerators]);

  // Get filtered categories for search
  const filteredCategories = useMemo(() => {
    if (!searchTerm) return Object.values(allGenerators);
    const term = searchTerm.toLowerCase();
    return Object.values(allGenerators).filter(cat => 
      cat.generators.some(g => 
        g.name.toLowerCase().includes(term) || 
        g.desc.toLowerCase().includes(term)
      )
    );
  }, [searchTerm]);

  const toggleExpanded = (id) => {
    setExpandedSections(prev => ({
      ...prev,
      [id]: prev[id] === undefined ? false : !prev[id]
    }));
  };

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? -1 : index);
  };

  const clearSearch = () => {
    setSearchTerm('');
  };

  // Handle smooth scroll for anchor links
  const handleAnchorClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition - bodyRect - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
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
      <nav aria-label="Breadcrumb" className="max-w-[1200px] mx-auto px-5 pt-4">
        <ol className="flex items-center text-sm text-[#636972]">
          <li>
            <a href="/" className="hover:text-[#8159BB] transition-colors">{s.breadcrumbHome}</a>
          </li>
          <li className="mx-2 text-[#8159BB]">›</li>
          <li aria-current="page" className="text-[#636972]">{s.breadcrumbCurrent}</li>
        </ol>
      </nav>

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

      {/* Section 2: Hero */}
      <section className="max-w-[1200px] mx-auto px-5 pt-16 pb-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-[40px] md:text-[44px] leading-[1.15] font-bold tracking-[-0.5px] mb-4">
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
                {s.ctaPrimary}
              </a>
              <a
                href="#all-generators"
                onClick={(e) => handleAnchorClick(e, 'all-generators')}
                className="inline-flex items-center justify-center h-11 px-6 rounded-[4px] text-sm font-bold uppercase tracking-wide border border-[#8159BB] text-[#8159BB] hover:bg-[#8159BB] hover:text-white transition-all"
              >
                {s.ctaSecondary}
              </a>
            </div>
          </div>
          <div className="flex justify-center md:justify-end mt-8 md:mt-0">
            <HeroIllustration />
          </div>
        </div>
      </section>

      {/* Section 3: Featured Generators */}
      <section className="bg-[#F4F6F8] py-16">
        <div className="max-w-[1200px] mx-auto px-5">
          <h2 className="font-bold text-[#4B5056] text-[26px] uppercase tracking-wide mb-2 text-center">
            {s.featuredTitle}
          </h2>
          <p className="text-[#636972] text-center mb-10">{s.featuredSubtitle}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
          <h2 className="font-bold text-[#4B5056] text-[26px] uppercase tracking-wide mb-10 text-center">
            {s.browseTitle}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {categoryCards.map((cat, idx) => (
              <a
                key={idx}
                href={`#${cat.id}`}
                onClick={(e) => handleAnchorClick(e, cat.id)}
                className="group p-6 bg-white border border-[#C6C9CD] rounded-[3px] hover:border-[#8159BB] hover:shadow-md transition-all flex flex-col focus:outline-none focus:ring-2 focus:ring-[#8159BB] focus:ring-offset-2"
              >
                <CategoryIcon icon={cat.icon} />
                <h3 className="font-bold text-[#2E2E2F] text-[15px] uppercase tracking-wide mb-2">{cat.name}</h3>
                <p className="text-[#636972] text-sm leading-[1.5] flex-1">{cat.desc}</p>
                <div className="mt-4 text-[#8159BB] group-hover:translate-x-0.5 transition-transform">→</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: All Generators Directory */}
      <section id="all-generators" className="bg-[#F4F6F8] py-16">
        <div className="max-w-[1200px] mx-auto px-5">
          <h2 className="font-bold text-[#4B5056] text-[26px] uppercase tracking-wide mb-2">
            {s.allTitle}
          </h2>
          <p className="text-[#636972] mb-8">{s.allSubtitle}</p>

          {/* Search Input */}
          <div className="mb-8">
            <div className="relative max-w-[480px]">
              <label htmlFor="generator-search" className="sr-only">{s.searchLabel}</label>
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#636972]">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.35-4.35" />
                </svg>
              </div>
              <input
                id="generator-search"
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder={s.searchPlaceholder}
                aria-label={s.searchLabel}
                className="w-full h-11 pl-11 pr-4 border border-[#C6C9CD] rounded-[3px] text-sm focus:outline-none focus:border-[#8159BB] focus:ring-1 focus:ring-[#8159BB]"
              />
            </div>
            {searchTerm && (
              <p className="mt-2 text-sm text-[#636972]">
                {s.searchResults(searchResultsCount)}
              </p>
            )}
          </div>

          {/* Generator Categories */}
          {filteredCategories.length > 0 ? (
            filteredCategories.map((cat, idx) => (
              <CategorySubsection
                key={idx}
                category={cat}
                searchTerm={searchTerm}
                expandedSections={expandedSections}
                toggleExpanded={toggleExpanded}
              />
            ))
          ) : (
            <div className="text-center py-12">
              <p className="text-[#636972] mb-4">No generators match your search.</p>
              <a href="/s/ai_site_builder" className="text-[#8159BB] hover:underline">
                {s.searchEmpty}
              </a>
              <button
                onClick={clearSearch}
                className="block mx-auto mt-4 text-sm text-[#8159BB] hover:underline"
              >
                {s.searchClear}
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Section 6: How It Works */}
      <section className="py-16">
        <div className="max-w-[1200px] mx-auto px-5">
          <h2 className="font-bold text-[#4B5056] text-[26px] uppercase tracking-wide mb-10 text-center">
            {s.howTitle}
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { num: '1', title: s.howStep1Title, desc: s.howStep1Desc },
              { num: '2', title: s.howStep2Title, desc: s.howStep2Desc },
              { num: '3', title: s.howStep3Title, desc: s.howStep3Desc },
            ].map((step, idx) => (
              <div key={idx} className="text-center">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#8159BB] text-white font-bold text-lg mb-4">
                  {step.num}
                </div>
                <h3 className="font-bold text-[#2E2E2F] text-sm uppercase tracking-wide mb-2">{step.title}</h3>
                <p className="text-[#636972] text-sm leading-[1.6]">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7: Why Strikingly */}
      <section className="bg-[#F4F6F8] py-16">
        <div className="max-w-[1200px] mx-auto px-5">
          <h2 className="font-bold text-[#4B5056] text-[26px] uppercase tracking-wide mb-10 text-center">
            {s.whyTitle}
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: '⚡', title: s.why1Title, desc: s.why1Desc },
              { icon: '📱', title: s.why2Title, desc: s.why2Desc },
              { icon: '✨', title: s.why3Title, desc: s.why3Desc },
            ].map((item, idx) => (
              <div key={idx} className="text-center p-6">
                <div className="text-3xl mb-4" aria-hidden="true">{item.icon}</div>
                <h3 className="font-bold text-[#2E2E2F] text-sm uppercase tracking-wide mb-2">{item.title}</h3>
                <p className="text-[#636972] text-sm leading-[1.6]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 8: FAQ */}
      <section className="py-16">
        <div className="max-w-[800px] mx-auto px-5">
          <h2 className="font-bold text-[#4B5056] text-[26px] uppercase tracking-wide mb-8 text-center">
            {s.faqTitle}
          </h2>
          
          <div className="space-y-2">
            {faqItems.map((item, idx) => (
              <div key={idx} className="border border-[#C6C9CD] rounded-[3px] overflow-hidden">
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-[#F4F6F8] transition-colors focus:outline-none focus:bg-[#F4F6F8]"
                  aria-expanded={openFaq === idx}
                  aria-controls={`faq-answer-${idx}`}
                >
                  <span className="font-bold text-[#2E2E2F] text-sm pr-4">{item.q}</span>
                  <span className="text-[#8159BB] text-xl flex-shrink-0">{openFaq === idx ? '−' : '+'}</span>
                </button>
                {openFaq === idx && (
                  <div id={`faq-answer-${idx}`} className="px-6 pb-5 text-[#636972] text-sm leading-[1.7]">
                    {item.a}
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
          <h2 className="font-bold text-[#2E2E2F] text-[28px] uppercase tracking-wide mb-3">
            {s.closingTitle}
          </h2>
          <p className="text-[#636972] mb-8">{s.closingSubtitle}</p>
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
      <footer className="bg-[#F4F6F8] border-t border-[#E2E4E7] py-12">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-y-8 mb-10">
            <div>
              <div className="font-bold text-lg tracking-tight mb-4">{s.logo}</div>
            </div>
            <div>
              <a href="/about" className="block text-sm text-[#636972] hover:text-[#8159BB] mb-2">{s.footerAbout}</a>
              <a href="/pricing" className="block text-sm text-[#636972] hover:text-[#8159BB] mb-2">{s.footerPricing}</a>
              <a href="/templates" className="block text-sm text-[#636972] hover:text-[#8159BB] mb-2">{s.footerTemplates}</a>
            </div>
            <div>
              <a href="/support" className="block text-sm text-[#636972] hover:text-[#8159BB] mb-2">{s.footerSupport}</a>
              <a href="/blog" className="block text-sm text-[#636972] hover:text-[#8159BB] mb-2">{s.footerBlog}</a>
            </div>
            <div>
              <a href="/terms" className="block text-sm text-[#636972] hover:text-[#8159BB] mb-2">{s.footerTerms}</a>
              <a href="/privacy" className="block text-sm text-[#636972] hover:text-[#8159BB] mb-2">{s.footerPrivacy}</a>
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

export default GeneratorsHub;
