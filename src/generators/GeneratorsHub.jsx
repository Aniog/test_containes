import React, { useState, useMemo } from 'react';

// Brand tokens matching Strikingly's component kit
const tokens = {
  colors: {
    brandPurple: '#8159BB',
    aiGradient: 'linear-gradient(135deg, #7671FF 0%, #CB0C9F 100%)',
    bodyText: '#636972',
    headingDark: '#4B5056',
    heroH1: '#2E2E2F',
    cardBorder: '#C6C9CD',
    subtleDivider: '#E2E4E7',
    lightBg: '#F4F6F8',
    white: '#FFFFFF',
  },
  fonts: {
    heading: "'Josefin Sans', 'Poppins', system-ui, sans-serif",
    body: "'Open Sans', system-ui, sans-serif",
  },
  spacing: {
    xs: '5px',
    sm: '10px',
    md: '20px',
    lg: '40px',
    xl: '60px',
    xxl: '80px',
  },
};

// i18n strings - English only for now
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
      ctaPrimary: "START BUILDING - IT'S FREE",
      ctaSecondary: 'BROWSE GENERATORS',
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
      emptyState: "Can't find it? Start with our AI builder.",
      emptyCta: 'Clear search',
      showAll: (count) => `Show all ${count} generators`,
      showLess: 'Show less',
    },
    howItWorks: {
      heading: 'HOW IT WORKS',
      steps: [
        { title: 'PICK A GENERATOR', desc: 'Browse by category or search to find one that fits your goal.' },
        { title: 'DESCRIBE YOUR SITE', desc: 'Tell our AI builder about your business in a sentence or two.' },
        { title: 'GENERATE AND PUBLISH', desc: 'Get a fully built site in seconds. Customize anything, then go live.' },
      ],
    },
    whyStrikingly: {
      heading: 'WHY STRIKINGLY',
      items: [
        { title: 'LIVE IN SECONDS', desc: 'Describe your site, we build it. No setup, no learning curve.' },
        { title: 'MOBILE BY DEFAULT', desc: 'Every generator produces responsive sites that work on any device.' },
        { title: 'FREE TO START', desc: 'Generate, customize, and publish without a credit card.' },
      ],
    },
    faq: {
      heading: 'FREQUENTLY ASKED QUESTIONS',
      questions: [
        {
          q: 'What is an AI site generator?',
          a: 'An AI site generator is a tool that creates a complete website based on a short description you provide. Instead of starting from a blank canvas or rigid template, you describe your business or goal in plain language, and the AI builds a site tailored to your needs.',
        },
        {
          q: 'How is a generator different from a template?',
          a: 'Templates are pre-designed layouts you customize manually. Generators use AI to create a unique site from your description, choosing layout, content, and imagery automatically. You still get full control to edit anything afterward.',
        },
        {
          q: 'Are these generators free to use?',
          a: 'Yes. You can generate, customize, and publish a site without a credit card. Paid plans unlock additional features like custom domains and advanced analytics.',
        },
        {
          q: 'What kinds of sites can I build?',
          a: 'You can build business sites, landing pages, portfolios, blogs, online stores, link-in-bio pages, and more. Each category has multiple specialized generators for different industries and goals.',
        },
        {
          q: 'Can I customize what the generator produces?',
          a: 'Absolutely. Every generated site is fully editable. Change text, swap images, reorder sections, adjust colors, and add new pages whenever you like.',
        },
        {
          q: 'Do generated sites work on mobile?',
          a: 'Yes. All generators produce responsive sites that adapt automatically to phones, tablets, and desktops. Mobile optimization is built in from the start.',
        },
      ],
    },
    closing: {
      heading: 'READY TO BUILD?',
      sub: 'Pick a generator above, or jump straight into our AI builder.',
      cta: 'START WITH AI BUILDER',
    },
    footer: {
      columns: [
        { title: 'Product', links: ['/templates', '/pricing', '/blog'] },
        { title: 'Company', links: ['/about', '/support'] },
        { title: 'Legal', links: ['/terms', '/privacy'] },
        { title: 'Resources', links: ['/blog', '/support'] },
      ],
      copyright: '© 2026 Strikingly, Inc.',
    },
  },
};

// Sample data for Featured Generators (9 items, mixed categories)
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

// Category cards for Browse by Category
const categoryCards = [
  { name: 'Websites', desc: 'AI-built business and personal sites for any goal.', slug: 'websites', icon: 'globe' },
  { name: 'Landing Pages', desc: 'Single-page sites built to convert visitors fast.', slug: 'landing-pages', icon: 'target' },
  { name: 'Portfolios', desc: 'Showcase your work with a clean, focused site.', slug: 'portfolios', icon: 'image' },
  { name: 'Blogs', desc: 'Publish-ready blogs with built-in SEO basics.', slug: 'blogs', icon: 'edit' },
  { name: 'Online Stores', desc: 'Sell products online with payments built in.', slug: 'stores', icon: 'shopping-cart' },
  { name: 'Link-in-Bio', desc: 'One link, all your places. Made for creators.', slug: 'link-in-bio', icon: 'link' },
];

// All generators data organized by category (8-12 per category)
const allGeneratorsData = {
  websites: {
    id: 'websites',
    title: 'Websites',
    desc: 'Full sites for businesses, events, and personal projects.',
    icon: 'globe',
    generators: [
      { name: 'AI Website Generator', desc: 'Describe your business, get a full site', slug: 'ai-website-generator' },
      { name: 'One-Page Website Builder', desc: 'Simple sites, single scroll', slug: 'one-page-website-builder' },
      { name: 'Wedding Website Generator', desc: 'Share your day with guests', slug: 'wedding-website-generator' },
      { name: 'Restaurant Website Builder', desc: 'Menu, hours, reservations, done', slug: 'restaurant-website-builder' },
      { name: 'Free Website Builder for Photographers', desc: 'Showcase your work beautifully', slug: 'free-website-builder-for-photographers' },
      { name: 'AI Website for Yoga Instructors', desc: 'Classes, bookings, and more', slug: 'ai-website-for-yoga-instructors' },
      { name: 'No-Code Website Builder', desc: 'Build without touching code', slug: 'no-code-website-builder' },
      { name: 'Beautiful Website Generator', desc: 'Stunning designs in seconds', slug: 'beautiful-website-generator' },
      { name: 'Business Website Maker', desc: 'Professional sites that convert', slug: 'business-website-maker' },
      { name: 'Personal Website Builder', desc: 'Your story, your way', slug: 'personal-website-builder' },
    ],
  },
  landingPages: {
    id: 'landing-pages',
    title: 'Landing Pages',
    desc: 'Focused pages designed to drive action.',
    icon: 'target',
    generators: [
      { name: 'AI Landing Page Maker', desc: 'One-page sites built to convert', slug: 'ai-landing-page-maker' },
      { name: 'Product Launch Landing Page', desc: 'Announce and sell fast', slug: 'product-launch-landing-page' },
      { name: 'Event Registration Page', desc: 'Collect signups with ease', slug: 'event-registration-page' },
      { name: 'Lead Capture Generator', desc: 'Turn visitors into leads', slug: 'lead-capture-generator' },
      { name: 'Free Landing Page Builder', desc: 'No cost, high impact', slug: 'free-landing-page-builder' },
      { name: 'AI Sales Page Creator', desc: 'Persuasive pages that sell', slug: 'ai-sales-page-creator' },
      { name: 'One-Page Offer Builder', desc: 'Simple offers, clear CTAs', slug: 'one-page-offer-builder' },
      { name: 'Webinar Landing Page', desc: 'Register attendees instantly', slug: 'webinar-landing-page' },
      { name: 'App Download Page', desc: 'Drive installs and signups', slug: 'app-download-page' },
    ],
  },
  portfolios: {
    id: 'portfolios',
    title: 'Portfolios',
    desc: 'Clean showcases for creative work.',
    icon: 'image',
    generators: [
      { name: 'Free Portfolio Generator', desc: 'For creatives, in minutes, no fee', slug: 'free-portfolio-generator' },
      { name: 'Portfolio Generator for Designers', desc: 'Showcase projects with style', slug: 'portfolio-generator-for-designers' },
      { name: 'AI Portfolio for Photographers', desc: 'Beautiful galleries, zero hassle', slug: 'ai-portfolio-for-photographers' },
      { name: 'Artist Portfolio Builder', desc: 'Your work, front and center', slug: 'artist-portfolio-builder' },
      { name: 'Developer Portfolio Maker', desc: 'Code, projects, and contact', slug: 'developer-portfolio-maker' },
      { name: 'No-Code Portfolio Site', desc: 'Build in minutes, look pro', slug: 'no-code-portfolio-site' },
      { name: 'Freelancer Portfolio Generator', desc: 'Win clients with clarity', slug: 'freelancer-portfolio-generator' },
      { name: 'Beautiful Portfolio Builder', desc: 'Stunning layouts, fast', slug: 'beautiful-portfolio-builder' },
      { name: 'Creative Portfolio Maker', desc: 'Express yourself online', slug: 'creative-portfolio-maker' },
    ],
  },
  blogs: {
    id: 'blogs',
    title: 'Blogs',
    desc: 'Ready-to-publish writing platforms.',
    icon: 'edit',
    generators: [
      { name: 'Blog Generator for Beginners', desc: 'Publish-ready in minutes', slug: 'blog-generator-for-beginners' },
      { name: 'AI Blog Builder', desc: 'Start writing, skip setup', slug: 'ai-blog-builder' },
      { name: 'Personal Blog Generator', desc: 'Your voice, your site', slug: 'personal-blog-generator' },
      { name: 'Food Blog Builder', desc: 'Recipes, stories, and more', slug: 'food-blog-builder' },
      { name: 'Travel Blog Maker', desc: 'Share journeys beautifully', slug: 'travel-blog-maker' },
      { name: 'Free Blog Platform', desc: 'No cost, full features', slug: 'free-blog-platform' },
      { name: 'Newsletter Blog Generator', desc: 'Write once, reach many', slug: 'newsletter-blog-generator' },
      { name: 'One-Page Blog Builder', desc: 'Simple, focused writing', slug: 'one-page-blog-builder' },
      { name: 'AI Content Site Maker', desc: 'Publish fast, rank higher', slug: 'ai-content-site-maker' },
      { name: 'Beautiful Blog Generator', desc: 'Clean reading experience', slug: 'beautiful-blog-generator' },
    ],
  },
  stores: {
    id: 'stores',
    title: 'Online Stores',
    desc: 'Sell products with payments built in.',
    icon: 'shopping-cart',
    generators: [
      { name: 'Online Store Builder', desc: 'Start selling without writing code', slug: 'online-store-builder' },
      { name: 'Online Store Builder for Restaurants', desc: 'Take orders, accept payments', slug: 'online-store-builder-for-restaurants' },
      { name: 'AI Store Generator', desc: 'Launch your shop in minutes', slug: 'ai-store-generator' },
      { name: 'Free Store Builder', desc: 'Sell without fees upfront', slug: 'free-store-builder' },
      { name: 'Handmade Store Maker', desc: 'Showcase and sell crafts', slug: 'handmade-store-maker' },
      { name: 'Digital Product Store', desc: 'Sell downloads and courses', slug: 'digital-product-store' },
      { name: 'No-Code Store Builder', desc: 'Build a shop without code', slug: 'no-code-store-builder' },
      { name: 'Beautiful Store Generator', desc: 'Stunning product pages', slug: 'beautiful-store-generator' },
      { name: 'One-Page Store Builder', desc: 'Simple checkout, fast sales', slug: 'one-page-store-builder' },
      { name: 'AI Shop Maker for Creators', desc: 'Sell merch and more', slug: 'ai-shop-maker-for-creators' },
    ],
  },
  linkInBio: {
    id: 'link-in-bio',
    title: 'Link-in-Bio',
    desc: 'One link for all your places.',
    icon: 'link',
    generators: [
      { name: 'Link-in-Bio Generator', desc: 'One link for all your channels', slug: 'link-in-bio-generator' },
      { name: 'Creator Link Page Builder', desc: 'All your links in one place', slug: 'creator-link-page-builder' },
      { name: 'Free Link-in-Bio Maker', desc: 'No cost, instant setup', slug: 'free-link-in-bio-maker' },
      { name: 'AI Link Page Generator', desc: 'Smart layout, zero effort', slug: 'ai-link-page-generator' },
      { name: 'Social Link Hub', desc: 'Connect every platform', slug: 'social-link-hub' },
      { name: 'One-Page Link Builder', desc: 'Simple, clean, effective', slug: 'one-page-link-builder' },
      { name: 'Beautiful Link Page Maker', desc: 'Look pro in seconds', slug: 'beautiful-link-page-maker' },
      { name: 'No-Code Link Page', desc: 'Build without code', slug: 'no-code-link-page' },
    ],
  },
};

// SVG Icons
const Icons = {
  globe: (props) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  ),
  target: (props) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  ),
  image: (props) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
      <circle cx="8.5" cy="8.5" r="1.5" />
      <path d="M21 15l-5-5L5 21" />
    </svg>
  ),
  edit: (props) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
    </svg>
  ),
  'shopping-cart': (props) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="9" cy="21" r="1" />
      <circle cx="20" cy="21" r="1" />
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
    </svg>
  ),
  link: (props) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  ),
  search: (props) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="11" cy="11" r="8" />
      <path d="M21 21l-4.35-4.35" />
    </svg>
  ),
  arrowRight: (props) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  ),
  chevronDown: (props) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M6 9l6 6 6-6" />
    </svg>
  ),
};

// Create slug from name
const createSlug = (name) => name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

// Category icon component
const CategoryIcon = ({ icon, className = '' }) => {
  const IconComponent = Icons[icon] || Icons.globe;
  return <IconComponent className={className} />;
};

// Generator Card Component (for Featured - includes category tag)
const FeaturedCard = ({ gen }) => (
  <a
    href={`/generators/${gen.slug}`}
    className="group block rounded-[3px] border border-[#C6C9CD] bg-white p-5 transition-all hover:border-[#8159BB] hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[#8159BB] focus:ring-offset-2"
    aria-label={gen.name}
  >
    <div className="mb-3 inline-block rounded-[3px] border border-[#8159BB] px-[6px] py-[2px] text-[11px] font-bold uppercase tracking-wide text-[#8159BB]" style={{ fontFamily: tokens.fonts.heading }}>
      {gen.category}
    </div>
    <h4 className="mb-2 text-[16px] font-bold text-[#2E2E2F]" style={{ fontFamily: tokens.fonts.heading }}>{gen.name}</h4>
    <p className="text-[14px] text-[#636972]" style={{ fontFamily: tokens.fonts.body }}>{gen.desc}</p>
  </a>
);

// Directory Card Component (no category tag - context from subsection)
const DirectoryCard = ({ gen, icon }) => (
  <a
    href={`/generators/${gen.slug}`}
    className="group block rounded-[3px] border border-[#C6C9CD] bg-white p-5 transition-all hover:border-[#8159BB] hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[#8159BB] focus:ring-offset-2"
    aria-label={gen.name}
  >
    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded bg-[#F4F6F8] text-[#8159BB]">
      <CategoryIcon icon={icon} className="h-5 w-5" />
    </div>
    <h4 className="mb-2 text-[16px] font-bold text-[#2E2E2F]" style={{ fontFamily: tokens.fonts.heading }}>{gen.name}</h4>
    <p className="text-[14px] text-[#636972]" style={{ fontFamily: tokens.fonts.body }}>{gen.desc}</p>
  </a>
);

// Category Card Component (for Browse by Category)
const CategoryCard = ({ cat }) => (
  <a
    href={`#${cat.slug}`}
    className="group block rounded-[3px] border border-[#C6C9CD] bg-white p-6 transition-all hover:border-[#8159BB] hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[#8159BB] focus:ring-offset-2"
  >
    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded bg-[#F4F6F8] text-[#8159BB]">
      <CategoryIcon icon={cat.icon} className="h-6 w-6" />
    </div>
    <div className="mb-2 flex items-center justify-between">
      <h3 className="text-[14px] font-bold uppercase tracking-wide text-[#4B5056]" style={{ fontFamily: tokens.fonts.heading }}>{cat.name}</h3>
      <CategoryIcon icon="arrowRight" className="h-4 w-4 text-[#8159BB] transition-transform group-hover:translate-x-0.5" />
    </div>
    <p className="text-[14px] text-[#636972]" style={{ fontFamily: tokens.fonts.body }}>{cat.desc}</p>
  </a>
);

// FAQ Accordion Item
const FAQItem = ({ q, a, isOpen, onToggle, index }) => (
  <div className="border-b border-[#E2E4E7]">
    <button
      type="button"
      onClick={onToggle}
      className="flex w-full items-center justify-between py-4 text-left focus:outline-none focus:ring-2 focus:ring-[#8159BB] focus:ring-offset-2"
      aria-expanded={isOpen}
      aria-controls={`faq-answer-${index}`}
    >
      <span className="pr-4 text-[14px] font-bold text-[#4B5056]" style={{ fontFamily: tokens.fonts.heading }}>{q}</span>
      <span className={`flex h-6 w-6 flex-shrink-0 items-center justify-center text-[#8159BB] transition-transform ${isOpen ? 'rotate-180' : ''}`}>
        <Icons.chevronDown className="h-4 w-4" />
      </span>
    </button>
    <div
      id={`faq-answer-${index}`}
      className={`overflow-hidden transition-all duration-200 ${isOpen ? 'max-h-96 pb-4' : 'max-h-0'}`}
      aria-hidden={!isOpen}
    >
      <p className="pr-10 text-[14px] text-[#636972]" style={{ fontFamily: tokens.fonts.body }}>{a}</p>
    </div>
  </div>
);

// Main Generators Hub Component
const GeneratorsHub = () => {
  const s = strings.en;
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedSections, setExpandedSections] = useState({});
  const [openFAQs, setOpenFAQs] = useState({ 0: true }); // First FAQ open by default

  // Flatten all generators for search
  const allGeneratorsFlat = useMemo(() => {
    const flat = [];
    Object.values(allGeneratorsData).forEach((cat) => {
      cat.generators.forEach((gen) => {
        flat.push({ ...gen, category: cat.title, categoryId: cat.id });
      });
    });
    return flat;
  }, []);

  // Filter generators based on search
  const filteredResults = useMemo(() => {
    if (!searchQuery.trim()) {
      return null;
    }
    const q = searchQuery.toLowerCase().trim();
    return allGeneratorsFlat.filter((gen) =>
      gen.name.toLowerCase().includes(q) ||
      gen.desc.toLowerCase().includes(q) ||
      gen.category.toLowerCase().includes(q)
    );
  }, [searchQuery, allGeneratorsFlat]);

  // Get visible categories and their matching generators
  const visibleCategories = useMemo(() => {
    if (!filteredResults) {
      return allGeneratorsData;
    }
    const matching = {};
    Object.keys(allGeneratorsData).forEach((key) => {
      const cat = allGeneratorsData[key];
      const matches = cat.generators.filter((gen) =>
        gen.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        gen.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
        cat.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      if (matches.length > 0) {
        matching[key] = { ...cat, generators: matches };
      }
    });
    return matching;
  }, [filteredResults, searchQuery]);

  const resultCount = filteredResults ? filteredResults.length : allGeneratorsFlat.length;

  // Toggle section expansion
  const toggleSection = (catId) => {
    setExpandedSections((prev) => ({
      ...prev,
      [catId]: !prev[catId],
    }));
  };

  // Toggle FAQ
  const toggleFAQ = (index) => {
    setOpenFAQs((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  // Clear search
  const clearSearch = () => {
    setSearchQuery('');
  };

  // Get display count for a category (collapsed shows 6)
  const getDisplayGenerators = (cat) => {
    const isExpanded = expandedSections[cat.id];
    if (isExpanded || !cat.generators) return cat.generators;
    return cat.generators.slice(0, 6);
  };

  const hasMore = (cat) => cat.generators && cat.generators.length > 6;

  return (
    <div className="min-h-screen bg-white text-[#636972]" style={{ fontFamily: tokens.fonts.body }}>
      {/* Section 0: Top Bar */}
      <header className="border-b border-[#E2E4E7] bg-white">
        <div className="mx-auto max-w-[1200px] px-5">
          <div className="flex h-14 items-center">
            <a href="/" className="text-[16px] font-bold text-[#8159BB]" style={{ fontFamily: tokens.fonts.heading }}>
              {s.topBar.logo}
            </a>
          </div>
        </div>
      </header>

      {/* Section 1: Breadcrumb */}
      <nav aria-label="Breadcrumb" className="mx-auto max-w-[1200px] px-5 py-3">
        <ol className="flex items-center text-[13px] text-[#636972]" style={{ fontFamily: tokens.fonts.body }}>
          <li>
            <a href="/" className="hover:text-[#8159BB] hover:underline">{s.breadcrumb.home}</a>
          </li>
          <li className="mx-2 text-[#8159BB]">›</li>
          <li aria-current="page" className="text-[#636972]">{s.breadcrumb.current}</li>
        </ol>
      </nav>

      {/* BreadcrumbList JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Strikingly',
                item: 'https://www.strikingly.com/',
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'AI Generators',
                item: 'https://www.strikingly.com/generators',
              },
            ],
          }),
        }}
      />

      {/* Section 2: Hero */}
      <section className="mx-auto max-w-[1200px] px-5 pb-10 pt-8 md:pb-16 md:pt-12">
        <div className="grid gap-10 md:grid-cols-2 md:gap-12">
          {/* Left Column */}
          <div>
            <h1 className="mb-4 text-[32px] font-bold leading-[1.2] tracking-[0.5px] md:text-[44px]" style={{ fontFamily: tokens.fonts.heading }}>
              <span className="block text-[#2E2E2F]">{s.hero.line1}</span>
              <span
                className="block bg-clip-text text-transparent"
                style={{
                  backgroundImage: tokens.colors.aiGradient,
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                }}
              >
                {s.hero.line2}
              </span>
            </h1>
            <p className="mb-8 max-w-[520px] text-[15px] leading-[1.6] text-[#636972]" style={{ fontFamily: tokens.fonts.body }}>
              {s.hero.subheadline}
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:gap-[10px]">
              <a
                href="/s/ai_site_builder"
                className="inline-flex h-11 items-center justify-center rounded-[4px] bg-[linear-gradient(135deg,#7671FF_0%,#CB0C9F_100%)] px-[15px] text-[14px] font-bold uppercase tracking-[0.5px] text-white transition-opacity hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[#8159BB] focus:ring-offset-2"
                style={{ fontFamily: tokens.fonts.heading }}
              >
                {s.hero.ctaPrimary}
              </a>
              <a
                href="#all-generators"
                className="inline-flex h-11 items-center justify-center rounded-[4px] border border-[#8159BB] bg-transparent px-[15px] text-[14px] font-bold uppercase tracking-[0.5px] text-[#8159BB] transition-colors hover:bg-[#8159BB] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#8159BB] focus:ring-offset-2"
                style={{ fontFamily: tokens.fonts.heading }}
              >
                {s.hero.ctaSecondary}
              </a>
            </div>
          </div>

          {/* Right Column - SVG Illustration */}
          <div className="flex items-center justify-center md:justify-end">
            <svg
              width="420"
              height="280"
              viewBox="0 0 420 280"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              className="max-w-full"
            >
              <defs>
                <linearGradient id="heroGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#F4F6F8" />
                  <stop offset="100%" stopColor="#E8EBF0" />
                </linearGradient>
              </defs>
              {/* Browser frame */}
              <rect x="30" y="30" width="360" height="220" rx="8" fill="url(#heroGrad)" stroke="#C6C9CD" strokeWidth="1" />
              {/* Browser header */}
              <rect x="30" y="30" width="360" height="28" rx="8" fill="#E8EBF0" />
              <circle cx="50" cy="44" r="4" fill="#C6C9CD" />
              <circle cx="66" cy="44" r="4" fill="#C6C9CD" />
              <circle cx="82" cy="44" r="4" fill="#C6C9CD" />
              {/* URL bar */}
              <rect x="100" y="38" width="200" height="12" rx="6" fill="#F4F6F8" />
              {/* Content area - lines */}
              <rect x="50" y="75" width="180" height="10" rx="2" fill="#C6C9CD" />
              <rect x="50" y="95" width="140" height="8" rx="2" fill="#D8DBDF" />
              <rect x="50" y="115" width="160" height="8" rx="2" fill="#D8DBDF" />
              {/* Purple accent block */}
              <rect x="260" y="75" width="110" height="70" rx="4" fill="#8159BB" opacity="0.15" />
              <rect x="275" y="90" width="80" height="8" rx="2" fill="#8159BB" />
              <rect x="275" y="108" width="60" height="6" rx="2" fill="#8159BB" opacity="0.6" />
              {/* Gradient accent line */}
              <rect x="50" y="145" width="320" height="3" rx="1.5" fill="#7671FF" opacity="0.3" />
            </svg>
          </div>
        </div>
      </section>

      {/* Section 3: Featured Generators */}
      <section className="bg-[#F4F6F8] py-10 md:py-12">
        <div className="mx-auto max-w-[1200px] px-5">
          <div className="mb-8 text-center">
            <h2 className="mb-2 text-[26px] font-bold uppercase tracking-[0.5px] text-[#4B5056]" style={{ fontFamily: tokens.fonts.heading }}>
              {s.featured.heading}
            </h2>
            <p className="text-[14px] text-[#636972]" style={{ fontFamily: tokens.fonts.body }}>{s.featured.subheading}</p>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {featuredGenerators.map((gen, idx) => (
              <FeaturedCard key={idx} gen={gen} />
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Browse by Category */}
      <section className="py-10 md:py-12">
        <div className="mx-auto max-w-[1200px] px-5">
          <h2 className="mb-8 text-center text-[26px] font-bold uppercase tracking-[0.5px] text-[#4B5056]" style={{ fontFamily: tokens.fonts.heading }}>
            {s.browseByCategory.heading}
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {categoryCards.map((cat, idx) => (
              <CategoryCard key={idx} cat={cat} />
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: All Generators Directory */}
      <section id="all-generators" className="bg-[#F4F6F8] py-10 md:py-12 scroll-mt-4">
        <div className="mx-auto max-w-[1200px] px-5">
          <div className="mb-8">
            <h2 className="mb-2 text-[26px] font-bold uppercase tracking-[0.5px] text-[#4B5056]" style={{ fontFamily: tokens.fonts.heading }}>
              {s.allGenerators.heading}
            </h2>
            <p className="text-[14px] text-[#636972]" style={{ fontFamily: tokens.fonts.body }}>{s.allGenerators.subheading}</p>
          </div>

          {/* Search Input */}
          <div className="mb-6">
            <div className="relative max-w-[480px]">
              <label htmlFor="generator-search" className="sr-only">{s.allGenerators.searchLabel}</label>
              <div className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#8159BB]">
                <Icons.search className="h-4 w-4" />
              </div>
              <input
                id="generator-search"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={s.allGenerators.searchPlaceholder}
                aria-label={s.allGenerators.searchLabel}
                className="w-full rounded-[4px] border border-[#C6C9CD] bg-white py-3 pl-11 pr-4 text-[14px] placeholder:text-[#636972] focus:border-[#8159BB] focus:outline-none focus:ring-1 focus:ring-[#8159BB]"
              />
            </div>
            <div className="mt-2 text-[13px] text-[#636972]">
              {s.allGenerators.resultCount(resultCount)}
            </div>
          </div>

          {/* Empty State */}
          {Object.keys(visibleCategories).length === 0 && (
            <div className="rounded-[3px] border border-[#C6C9CD] bg-white p-8 text-center">
              <p className="mb-4 text-[14px] text-[#636972]">{s.allGenerators.emptyState}</p>
              <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                <button
                  type="button"
                  onClick={clearSearch}
                  className="rounded-[4px] border border-[#8159BB] px-4 py-2 text-[14px] font-bold uppercase text-[#8159BB] hover:bg-[#8159BB] hover:text-white"
                  style={{ fontFamily: tokens.fonts.heading }}
                >
                  {s.allGenerators.emptyCta}
                </button>
                <a
                  href="/s/ai_site_builder"
                  className="text-[14px] text-[#8159BB] underline hover:no-underline"
                >
                  {s.allGenerators.emptyState}
                </a>
              </div>
            </div>
          )}

          {/* Category Subsections */}
          {Object.keys(visibleCategories).length > 0 && Object.values(visibleCategories).map((cat) => {
            const displayGens = getDisplayGenerators(cat);
            const totalCount = cat.generators.length;
            const isExpanded = expandedSections[cat.id];
            const showToggle = hasMore(cat);

            return (
              <div key={cat.id} id={cat.id} className="mb-10 scroll-mt-4">
                <h3 className="mb-1 text-[18px] font-bold uppercase tracking-[0.5px] text-[#4B5056]" style={{ fontFamily: tokens.fonts.heading }}>
                  {cat.title}
                </h3>
                <p className="mb-4 text-[14px] text-[#636972]" style={{ fontFamily: tokens.fonts.body }}>{cat.desc}</p>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {displayGens.map((gen, idx) => (
                    <DirectoryCard key={idx} gen={gen} icon={cat.icon} />
                  ))}
                </div>

                {/* Show All Toggle */}
                {showToggle && (
                  <button
                    type="button"
                    onClick={() => toggleSection(cat.id)}
                    className="mt-4 text-[14px] font-bold text-[#8159BB] underline hover:no-underline focus:outline-none focus:ring-2 focus:ring-[#8159BB] focus:ring-offset-2"
                    aria-expanded={isExpanded}
                    aria-controls={`${cat.id}-cards`}
                  >
                    {isExpanded ? s.allGenerators.showLess : s.allGenerators.showAll(totalCount)}
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Section 6: How It Works */}
      <section className="py-10 md:py-12">
        <div className="mx-auto max-w-[1200px] px-5">
          <h2 className="mb-10 text-center text-[26px] font-bold uppercase tracking-[0.5px] text-[#4B5056]" style={{ fontFamily: tokens.fonts.heading }}>
            {s.howItWorks.heading}
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {s.howItWorks.steps.map((step, idx) => (
              <div key={idx} className="text-center">
                <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#8159BB] text-[16px] font-bold text-white" style={{ fontFamily: tokens.fonts.heading }}>
                  {idx + 1}
                </div>
                <h4 className="mb-2 text-[14px] font-bold uppercase tracking-[0.5px] text-[#4B5056]" style={{ fontFamily: tokens.fonts.heading }}>{step.title}</h4>
                <p className="text-[14px] text-[#636972]" style={{ fontFamily: tokens.fonts.body }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7: Why Strikingly */}
      <section className="bg-[#F4F6F8] py-10 md:py-12">
        <div className="mx-auto max-w-[1200px] px-5">
          <h2 className="mb-10 text-center text-[26px] font-bold uppercase tracking-[0.5px] text-[#4B5056]" style={{ fontFamily: tokens.fonts.heading }}>
            {s.whyStrikingly.heading}
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {s.whyStrikingly.items.map((item, idx) => (
              <div key={idx} className="rounded-[3px] border border-[#C6C9CD] bg-white p-6 text-center">
                <div className="mx-auto mb-4 h-8 w-8 text-[#8159BB]">
                  {idx === 0 && <Icons.target className="h-8 w-8" />}
                  {idx === 1 && <Icons.globe className="h-8 w-8" />}
                  {idx === 2 && <Icons.edit className="h-8 w-8" />}
                </div>
                <h4 className="mb-2 text-[14px] font-bold uppercase tracking-[0.5px] text-[#4B5056]" style={{ fontFamily: tokens.fonts.heading }}>{item.title}</h4>
                <p className="text-[14px] text-[#636972]" style={{ fontFamily: tokens.fonts.body }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 8: FAQ */}
      <section className="py-10 md:py-12">
        <div className="mx-auto max-w-[1200px] px-5">
          <h2 className="mb-8 text-center text-[26px] font-bold uppercase tracking-[0.5px] text-[#4B5056]" style={{ fontFamily: tokens.fonts.heading }}>
            {s.faq.heading}
          </h2>
          <div className="mx-auto max-w-[720px] rounded-[3px] border border-[#C6C9CD] bg-white px-6">
            {s.faq.questions.map((item, idx) => (
              <FAQItem
                key={idx}
                q={item.q}
                a={item.a}
                isOpen={!!openFAQs[idx]}
                onToggle={() => toggleFAQ(idx)}
                index={idx}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Section 9: Closing CTA */}
      <section className="py-12 text-center">
        <div className="mx-auto max-w-[1200px] px-5">
          <h2 className="mb-3 text-[26px] font-bold uppercase tracking-[0.5px] text-[#4B5056]" style={{ fontFamily: tokens.fonts.heading }}>
            {s.closing.heading}
          </h2>
          <p className="mb-6 text-[14px] text-[#636972]" style={{ fontFamily: tokens.fonts.body }}>{s.closing.sub}</p>
          <a
            href="/s/ai_site_builder"
            className="inline-flex h-11 items-center justify-center rounded-[4px] bg-[linear-gradient(135deg,#7671FF_0%,#CB0C9F_100%)] px-[15px] text-[14px] font-bold uppercase tracking-[0.5px] text-white transition-opacity hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[#8159BB] focus:ring-offset-2"
            style={{ fontFamily: tokens.fonts.heading }}
          >
            {s.closing.cta}
          </a>
        </div>
      </section>

      {/* Section 10: Footer */}
      <footer className="border-t border-[#E2E4E7] bg-white py-10">
        <div className="mx-auto max-w-[1200px] px-5">
          <div className="mb-8 flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <a href="/" className="text-[16px] font-bold text-[#8159BB]" style={{ fontFamily: tokens.fonts.heading }}>
              {s.topBar.logo}
            </a>
            <div className="grid grid-cols-2 gap-x-12 gap-y-4 text-[13px] md:grid-cols-4">
              {s.footer.columns.map((col, idx) => (
                <div key={idx}>
                  <div className="mb-2 font-bold text-[#4B5056]" style={{ fontFamily: tokens.fonts.heading }}>{col.title}</div>
                  {col.links.map((link, lidx) => (
                    <a key={lidx} href={link} className="block py-0.5 text-[#636972] hover:text-[#8159BB] hover:underline">
                      {link.replace('/', '')}
                    </a>
                  ))}
                </div>
              ))}
            </div>
          </div>
          <div className="border-t border-[#E2E4E7] pt-6 text-center text-[12px] text-[#636972]">
            {s.footer.copyright}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default GeneratorsHub;
