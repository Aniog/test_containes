import React, { useState, useMemo } from 'react';

// Brand strings for i18n readiness
const strings = {
  en: {
    logo: 'strikingly AI',
    breadcrumbHome: 'Strikingly',
    breadcrumbCurrent: 'AI Generators',
    h1Line1: 'BUILD ANY KIND OF SITE',
    h1Line2: 'WITH AI, IN AN INSTANT',
    subheadline: "Browse the right generator for what you're building, or jump straight into our AI site builder.",
    ctaPrimary: "START BUILDING - IT'S FREE",
    ctaSecondary: 'BROWSE GENERATORS',
    featuredTitle: 'FEATURED GENERATORS',
    featuredSubtitle: 'A few common starting points.',
    browseTitle: 'BROWSE BY CATEGORY',
    allTitle: 'ALL GENERATORS',
    allSubtitle: 'Sixty-plus generators, organized by what you\'re building.',
    searchPlaceholder: 'Search generators...',
    searchLabel: 'Search generators',
    resultCount: (count) => `${count} generators match`,
    noResults: "No generators match your search.",
    clearSearch: 'Clear search',
    noResultsCta: "Can't find it? Start with our AI builder.",
    howTitle: 'HOW IT WORKS',
    whyTitle: 'WHY STRIKINGLY',
    faqTitle: 'FREQUENTLY ASKED QUESTIONS',
    closingTitle: 'READY TO BUILD?',
    closingSubtitle: 'Pick a generator above, or jump straight into our AI builder.',
    closingCta: 'START WITH AI BUILDER',
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

// Category cards for Browse by Category
const categoryCards = [
  { name: 'Websites', desc: 'AI-built business and personal sites for any goal.', slug: 'websites', icon: '🌐' },
  { name: 'Landing Pages', desc: 'Single-page sites built to convert visitors fast.', slug: 'landing-pages', icon: '📄' },
  { name: 'Portfolios', desc: 'Showcase your work with a clean, focused site.', slug: 'portfolios', icon: '🎨' },
  { name: 'Blogs', desc: 'Publish-ready blogs with built-in SEO basics.', slug: 'blogs', icon: '✍️' },
  { name: 'Online Stores', desc: 'Sell products online with payments built in.', slug: 'stores', icon: '🛒' },
  { name: 'Link-in-Bio', desc: 'One link, all your places. Made for creators.', slug: 'link-in-bio', icon: '🔗' },
];

// All generators by category (8-12 per category)
const allGenerators = {
  websites: {
    title: 'Websites',
    desc: 'Full sites for businesses, events, and personal projects.',
    items: [
      { name: 'AI Website Generator', desc: 'Describe your business, get a full site', slug: 'ai-website-generator' },
      { name: 'One-Page Website Builder', desc: 'Simple sites, single scroll', slug: 'one-page-website-builder' },
      { name: 'Wedding Website Generator', desc: 'Share your day with guests', slug: 'wedding-website-generator' },
      { name: 'Restaurant Website Builder', desc: 'Menu, hours, reservations, done', slug: 'restaurant-website-builder' },
      { name: 'Free Website Builder for Photographers', desc: 'Showcase your work beautifully', slug: 'free-website-builder-for-photographers' },
      { name: 'AI Website for Yoga Instructors', desc: 'Class schedules and bookings', slug: 'ai-website-for-yoga-instructors' },
      { name: 'No-Code Website Builder', desc: 'Build without writing a line', slug: 'no-code-website-builder' },
      { name: 'Beautiful Website Generator', desc: 'Stunning designs in seconds', slug: 'beautiful-website-generator' },
      { name: 'Business Website Builder', desc: 'Professional sites for any company', slug: 'business-website-builder' },
      { name: 'Personal Website Generator', desc: 'Your story, your way', slug: 'personal-website-generator' },
    ]
  },
  'landing-pages': {
    title: 'Landing Pages',
    desc: 'Focused pages built to convert visitors into leads or customers.',
    items: [
      { name: 'AI Landing Page Maker', desc: 'One-page sites built to convert', slug: 'ai-landing-page-maker' },
      { name: 'Free Landing Page Builder', desc: 'Launch fast, no cost', slug: 'free-landing-page-builder' },
      { name: 'Product Launch Landing Page', desc: 'Announce and sell your product', slug: 'product-launch-landing-page' },
      { name: 'Event Registration Page', desc: 'Sign-ups made simple', slug: 'event-registration-page' },
      { name: 'Lead Capture Generator', desc: 'Collect emails, grow your list', slug: 'lead-capture-generator' },
      { name: 'One-Page Sales Site', desc: 'Sell with a single scroll', slug: 'one-page-sales-site' },
      { name: 'AI Landing Page for Startups', desc: 'Pitch your idea clearly', slug: 'ai-landing-page-for-startups' },
      { name: 'No-Code Landing Page Builder', desc: 'Create without developers', slug: 'no-code-landing-page-builder' },
      { name: 'Conversion-Focused Page', desc: 'Designed to get results', slug: 'conversion-focused-page' },
    ]
  },
  portfolios: {
    title: 'Portfolios',
    desc: 'Clean showcases for creatives, designers, and professionals.',
    items: [
      { name: 'Free Portfolio Generator', desc: 'For creatives, in minutes, no fee', slug: 'free-portfolio-generator' },
      { name: 'Portfolio Generator for Designers', desc: 'Show your best work', slug: 'portfolio-generator-for-designers' },
      { name: 'AI Portfolio for Photographers', desc: 'Beautiful galleries, zero setup', slug: 'ai-portfolio-for-photographers' },
      { name: 'Artist Portfolio Builder', desc: 'Present your art professionally', slug: 'artist-portfolio-builder' },
      { name: 'Developer Portfolio Generator', desc: 'Code projects, front and center', slug: 'developer-portfolio-generator' },
      { name: 'One-Page Portfolio Site', desc: 'Everything on a single page', slug: 'one-page-portfolio-site' },
      { name: 'No-Code Portfolio Builder', desc: 'Build without code', slug: 'no-code-portfolio-builder' },
      { name: 'Beautiful Portfolio Generator', desc: 'Stunning layouts in seconds', slug: 'beautiful-portfolio-generator' },
      { name: 'Freelancer Portfolio Site', desc: 'Win clients with your work', slug: 'freelancer-portfolio-site' },
      { name: 'AI Portfolio for Writers', desc: 'Feature your best pieces', slug: 'ai-portfolio-for-writers' },
    ]
  },
  blogs: {
    title: 'Blogs',
    desc: 'Ready-to-publish blogs with SEO basics built in.',
    items: [
      { name: 'Blog Generator for Beginners', desc: 'Publish-ready in minutes', slug: 'blog-generator-for-beginners' },
      { name: 'AI Blog Builder', desc: 'Start writing, we handle the rest', slug: 'ai-blog-builder' },
      { name: 'Free Blog Generator', desc: 'No cost, full features', slug: 'free-blog-generator' },
      { name: 'Personal Blog Builder', desc: 'Your voice, your platform', slug: 'personal-blog-builder' },
      { name: 'Business Blog Generator', desc: 'Share updates and insights', slug: 'business-blog-generator' },
      { name: 'One-Page Blog Site', desc: 'Simple posts, clean design', slug: 'one-page-blog-site' },
      { name: 'No-Code Blog Builder', desc: 'Write without tech hassle', slug: 'no-code-blog-builder' },
      { name: 'Beautiful Blog Generator', desc: 'Elegant reading experience', slug: 'beautiful-blog-generator' },
      { name: 'AI Blog for Food Writers', desc: 'Recipes and stories, styled right', slug: 'ai-blog-for-food-writers' },
      { name: 'Travel Blog Builder', desc: 'Document your journeys', slug: 'travel-blog-builder' },
    ]
  },
  stores: {
    title: 'Online Stores',
    desc: 'Sell products with payments, carts, and checkout included.',
    items: [
      { name: 'Online Store Builder', desc: 'Start selling without writing code', slug: 'online-store-builder' },
      { name: 'AI Store Generator', desc: 'Products in, site out', slug: 'ai-store-generator' },
      { name: 'Free Online Store Builder', desc: 'Sell without fees to start', slug: 'free-online-store-builder' },
      { name: 'Online Store Builder for Restaurants', desc: 'Take orders online', slug: 'online-store-builder-for-restaurants' },
      { name: 'One-Page Store Site', desc: 'Sell with a single scroll', slug: 'one-page-store-site' },
      { name: 'No-Code Store Builder', desc: 'Launch without developers', slug: 'no-code-store-builder' },
      { name: 'Beautiful Store Generator', desc: 'Products deserve great design', slug: 'beautiful-store-generator' },
      { name: 'AI Store for Fashion Brands', desc: 'Showcase collections', slug: 'ai-store-for-fashion-brands' },
      { name: 'Handmade Store Builder', desc: 'Sell your crafts online', slug: 'handmade-store-builder' },
      { name: 'Digital Products Store', desc: 'Sell downloads and courses', slug: 'digital-products-store' },
    ]
  },
  'link-in-bio': {
    title: 'Link-in-Bio',
    desc: 'One link that points to everything you create.',
    items: [
      { name: 'Link-in-Bio Generator', desc: 'One link for all your channels', slug: 'link-in-bio-generator' },
      { name: 'Free Link-in-Bio Builder', desc: 'No cost, instant setup', slug: 'free-link-in-bio-builder' },
      { name: 'AI Link-in-Bio Maker', desc: 'Describe your links, we build it', slug: 'ai-link-in-bio-maker' },
      { name: 'Creator Link-in-Bio', desc: 'Made for influencers and creators', slug: 'creator-link-in-bio' },
      { name: 'One-Page Link Hub', desc: 'Everything in one place', slug: 'one-page-link-hub' },
      { name: 'No-Code Link-in-Bio Builder', desc: 'Build without code', slug: 'no-code-link-in-bio-builder' },
      { name: 'Beautiful Link-in-Bio Generator', desc: 'Clean, clickable design', slug: 'beautiful-link-in-bio-generator' },
      { name: 'Link-in-Bio for Musicians', desc: 'All your music, one link', slug: 'link-in-bio-for-musicians' },
      { name: 'Link-in-Bio for Small Businesses', desc: 'Connect customers to everything', slug: 'link-in-bio-for-small-businesses' },
    ]
  }
};

// FAQ data
const faqItems = [
  {
    q: 'What is an AI site generator?',
    a: 'An AI site generator is a tool that creates a complete website from a short description you provide. Instead of designing pages or writing code, you describe your business or project in a sentence or two, and the generator builds a ready-to-use site with pages, text, and images.'
  },
  {
    q: 'How is a generator different from a template?',
    a: 'A template is a pre-designed layout you fill in manually. A generator uses AI to create content and structure based on your description, so the site is already personalized before you start editing. You spend less time on setup and more time on customization.'
  },
  {
    q: 'Are these generators free to use?',
    a: 'Yes. You can generate, customize, and publish a site without a credit card. Paid plans unlock extra features like custom domains, advanced analytics, and priority support, but the core generator experience is free to start.'
  },
  {
    q: 'What kinds of sites can I build?',
    a: 'You can build business sites, landing pages, portfolios, blogs, online stores, and link-in-bio pages. Each category has multiple generators tailored to specific industries or goals, from restaurants and photographers to startups and creators.'
  },
  {
    q: 'Can I customize what the generator produces?',
    a: 'Absolutely. After generation, you can edit text, swap images, reorder sections, and adjust colors. The AI gives you a strong starting point, but you stay in full control of the final result.'
  },
  {
    q: 'Do generated sites work on mobile?',
    a: 'Yes. Every generator produces responsive sites that adapt automatically to phones, tablets, and desktops. No extra work is needed to make your site mobile-friendly.'
  }
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
  >
    <rect x="40" y="40" width="400" height="280" rx="12" fill="#F4F6F8" stroke="#C6C9CD" strokeWidth="2"/>
    <rect x="60" y="60" width="360" height="40" rx="6" fill="#E2E4E7"/>
    <rect x="60" y="120" width="200" height="20" rx="4" fill="#C6C9CD"/>
    <rect x="60" y="150" width="320" height="16" rx="4" fill="#E2E4E7"/>
    <rect x="60" y="180" width="280" height="16" rx="4" fill="#E2E4E7"/>
    <rect x="60" y="220" width="160" height="36" rx="6" fill="#8159BB"/>
    <rect x="240" y="220" width="160" height="36" rx="6" fill="#E2E4E7"/>
    <circle cx="400" cy="80" r="20" fill="#7671FF" opacity="0.3"/>
    <circle cx="430" cy="100" r="12" fill="#CB0C9F" opacity="0.3"/>
  </svg>
);

// Category icon component
const CategoryIcon = ({ icon }) => (
  <div className="w-12 h-12 flex items-center justify-center text-2xl mb-4" aria-hidden="true">
    {icon}
  </div>
);

// Generator card component
const GeneratorCard = ({ name, desc, category, slug, showCategory = false }) => (
  <a
    href={`/generators/${slug}`}
    className="block p-5 bg-white border border-[#C6C9CD] rounded-[3px] hover:border-[#8159BB] hover:shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#8159BB] focus:ring-offset-2"
    aria-label={name}
  >
    {showCategory && category && (
      <span className="inline-block px-1.5 py-0.5 text-[11px] font-bold uppercase tracking-wide text-[#8159BB] border border-[#8159BB] rounded-[3px] mb-3">
        {category}
      </span>
    )}
    <h4 className="font-bold text-[#2E2E2F] text-[15px] mb-2 leading-tight">{name}</h4>
    <p className="text-[#636972] text-sm leading-[1.5]">{desc}</p>
  </a>
);

// Category subsection card (for All Generators)
const SubsectionCard = ({ name, desc, slug }) => (
  <a
    href={`/generators/${slug}`}
    className="block p-5 bg-white border border-[#C6C9CD] rounded-[3px] hover:border-[#8159BB] hover:shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#8159BB] focus:ring-offset-2"
    aria-label={name}
  >
    <div className="w-10 h-10 bg-[#F4F6F8] rounded mb-4 flex items-center justify-center" aria-hidden="true">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="3" width="16" height="14" rx="2" stroke="#8159BB" strokeWidth="1.5"/>
        <path d="M6 8H14M6 11H11" stroke="#8159BB" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    </div>
    <h4 className="font-bold text-[#2E2E2F] text-[15px] mb-2 leading-tight">{name}</h4>
    <p className="text-[#636972] text-sm leading-[1.5]">{desc}</p>
  </a>
);

const Generators = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedSections, setExpandedSections] = useState({});
  const [expandedFaqs, setExpandedFaqs] = useState({ 0: true });

  // Filter generators based on search
  const filteredGenerators = useMemo(() => {
    if (!searchQuery.trim()) {
      return allGenerators;
    }

    const query = searchQuery.toLowerCase().trim();
    const result = {};

    Object.keys(allGenerators).forEach(key => {
      const section = allGenerators[key];
      const matchingItems = section.items.filter(item =>
        item.name.toLowerCase().includes(query) ||
        item.desc.toLowerCase().includes(query) ||
        section.title.toLowerCase().includes(query)
      );
      if (matchingItems.length > 0) {
        result[key] = { ...section, items: matchingItems };
      }
    });

    return result;
  }, [searchQuery]);

  const totalMatchingCount = useMemo(() => {
    return Object.values(filteredGenerators).reduce((sum, section) => sum + section.items.length, 0);
  }, [filteredGenerators]);

  // Toggle section expansion
  const toggleSection = (key) => {
    setExpandedSections(prev => ({
      ...prev,
      [key]: !prev[key]
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

  // Scroll to section
  const scrollToSection = (slug) => {
    const element = document.getElementById(slug);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition - bodyRect - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#636972] font-['Open_Sans',sans-serif]">
      {/* Section 0: Top Bar */}
      <header className="bg-white border-b border-[#E2E4E7]">
        <div className="max-w-[1200px] mx-auto px-5 h-14 flex items-center">
          <a href="/" className="font-bold text-[#2E2E2F] text-lg tracking-wide" style={{ fontFamily: 'Josefin Sans, sans-serif' }}>
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

      {/* Section 2: Hero */}
      <section className="max-w-[1200px] mx-auto px-5 pt-16 pb-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-[40px] md:text-[48px] leading-[1.2] font-bold tracking-[0.5px] mb-6" style={{ fontFamily: 'Josefin Sans, sans-serif' }}>
              <span className="text-[#2E2E2F] block uppercase">{s.h1Line1}</span>
              <span 
                className="block uppercase bg-clip-text text-transparent"
                style={{ 
                  backgroundImage: 'linear-gradient(90deg, #7671FF 0%, #CB0C9F 100%)',
                  fontFamily: 'Josefin Sans, sans-serif'
                }}
              >
                {s.h1Line2}
              </span>
            </h1>
            <p className="text-[#636972] text-[15px] leading-[1.6] mb-8 max-w-[440px]">
              {s.subheadline}
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="/s/ai_site_builder"
                className="inline-flex items-center justify-center h-11 px-6 text-sm font-bold uppercase tracking-wide text-white rounded-[4px] transition-all"
                style={{ 
                  background: 'linear-gradient(90deg, #7671FF 0%, #CB0C9F 100%)',
                  fontFamily: 'Josefin Sans, sans-serif'
                }}
              >
                {s.ctaPrimary}
              </a>
              <a
                href="#all-generators"
                className="inline-flex items-center justify-center h-11 px-6 text-sm font-bold uppercase tracking-wide text-[#8159BB] border border-[#8159BB] rounded-[4px] hover:bg-[#8159BB] hover:text-white transition-all"
                style={{ fontFamily: 'Josefin Sans, sans-serif' }}
              >
                {s.ctaSecondary}
              </a>
            </div>
          </div>
          <div className="flex justify-center md:justify-end">
            <HeroIllustration />
          </div>
        </div>
      </section>

      {/* Section 3: Featured Generators */}
      <section className="bg-[#F4F6F8] py-16">
        <div className="max-w-[1200px] mx-auto px-5">
          <h2 className="text-[28px] font-bold uppercase tracking-[0.5px] text-[#4B5056] mb-2 text-center" style={{ fontFamily: 'Josefin Sans, sans-serif' }}>
            {s.featuredTitle}
          </h2>
          <p className="text-center text-[#636972] mb-10">{s.featuredSubtitle}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
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
          <h2 className="text-[28px] font-bold uppercase tracking-[0.5px] text-[#4B5056] mb-10 text-center" style={{ fontFamily: 'Josefin Sans, sans-serif' }}>
            {s.browseTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {categoryCards.map((cat, idx) => (
              <a
                key={idx}
                href={`#${cat.slug}`}
                onClick={(e) => { e.preventDefault(); scrollToSection(cat.slug); }}
                className="group p-6 bg-white border border-[#C6C9CD] rounded-[3px] hover:border-[#8159BB] hover:shadow-md transition-all flex flex-col focus:outline-none focus:ring-2 focus:ring-[#8159BB] focus:ring-offset-2"
              >
                <CategoryIcon icon={cat.icon} />
                <h3 className="font-bold uppercase text-[#2E2E2F] text-sm tracking-wide mb-2" style={{ fontFamily: 'Josefin Sans, sans-serif' }}>
                  {cat.name}
                </h3>
                <p className="text-[#636972] text-sm leading-[1.5] mb-auto">{cat.desc}</p>
                <div className="mt-4 text-[#8159BB] group-hover:translate-x-0.5 transition-transform inline-flex items-center">
                  <span className="text-sm">Explore</span>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="ml-1" aria-hidden="true">
                    <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: All Generators Directory */}
      <section id="all-generators" className="bg-[#F4F6F8] py-16">
        <div className="max-w-[1200px] mx-auto px-5">
          <h2 className="text-[28px] font-bold uppercase tracking-[0.5px] text-[#4B5056] mb-2" style={{ fontFamily: 'Josefin Sans, sans-serif' }}>
            {s.allTitle}
          </h2>
          <p className="text-[#636972] mb-8">{s.allSubtitle}</p>

          {/* Search Input */}
          <div className="mb-8">
            <div className="relative max-w-[480px]">
              <label htmlFor="search-input" className="sr-only">{s.searchLabel}</label>
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#636972]" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M13 13L16 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
              <input
                id="search-input"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={s.searchPlaceholder}
                aria-label={s.searchLabel}
                className="w-full h-11 pl-11 pr-4 border border-[#C6C9CD] rounded-[4px] text-sm focus:outline-none focus:border-[#8159BB] bg-white"
              />
            </div>
            {searchQuery && (
              <p className="mt-2 text-sm text-[#636972]">
                {s.resultCount(totalMatchingCount)}
              </p>
            )}
          </div>

          {/* No Results State */}
          {searchQuery && totalMatchingCount === 0 && (
            <div className="bg-white border border-[#C6C9CD] rounded-[3px] p-8 text-center mb-8">
              <p className="text-[#636972] mb-4">{s.noResults}</p>
              <button
                onClick={clearSearch}
                className="text-[#8159BB] hover:underline mr-4"
              >
                {s.clearSearch}
              </button>
              <a href="/s/ai_site_builder" className="text-[#8159BB] hover:underline">
                {s.noResultsCta}
              </a>
            </div>
          )}

          {/* Category Subsections */}
          {Object.keys(filteredGenerators).length > 0 && Object.keys(filteredGenerators).map((key) => {
            const section = filteredGenerators[key];
            const isExpanded = expandedSections[key] !== false;
            const displayItems = isExpanded ? section.items : section.items.slice(0, 6);
            const hasMore = section.items.length > 6;

            return (
              <div key={key} id={key} className="mb-12 scroll-mt-20">
                <h3 className="text-[20px] font-bold uppercase tracking-[0.5px] text-[#4B5056] mb-1" style={{ fontFamily: 'Josefin Sans, sans-serif' }}>
                  {section.title}
                </h3>
                <p className="text-[#636972] text-sm mb-6">{section.desc}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-4">
                  {displayItems.map((item, idx) => (
                    <SubsectionCard
                      key={idx}
                      name={item.name}
                      desc={item.desc}
                      slug={item.slug}
                    />
                  ))}
                </div>

                {hasMore && (
                  <button
                    onClick={() => toggleSection(key)}
                    aria-expanded={isExpanded}
                    aria-controls={`${key}-cards`}
                    className="text-sm text-[#8159BB] hover:underline focus:outline-none focus:ring-2 focus:ring-[#8159BB] focus:ring-offset-2 rounded px-2 py-1"
                  >
                    {isExpanded 
                      ? `Show fewer` 
                      : `Show all ${section.items.length} generators`}
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
          <h2 className="text-[28px] font-bold uppercase tracking-[0.5px] text-[#4B5056] mb-10 text-center" style={{ fontFamily: 'Josefin Sans, sans-serif' }}>
            {s.howTitle}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { num: '1', title: 'PICK A GENERATOR', text: 'Browse by category or search to find one that fits your goal.' },
              { num: '2', title: 'DESCRIBE YOUR SITE', text: 'Tell our AI builder about your business in a sentence or two.' },
              { num: '3', title: 'GENERATE AND PUBLISH', text: 'Get a fully built site in seconds. Customize anything, then go live.' },
            ].map((step, idx) => (
              <div key={idx} className="text-center">
                <div className="w-10 h-10 rounded-full bg-[#8159BB] text-white flex items-center justify-center mx-auto mb-4 text-lg font-bold" style={{ fontFamily: 'Josefin Sans, sans-serif' }}>
                  {step.num}
                </div>
                <h4 className="font-bold uppercase text-[#2E2E2F] text-sm tracking-wide mb-2" style={{ fontFamily: 'Josefin Sans, sans-serif' }}>
                  {step.title}
                </h4>
                <p className="text-[#636972] text-sm leading-[1.5]">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7: Why Strikingly */}
      <section className="bg-[#F4F6F8] py-16">
        <div className="max-w-[1200px] mx-auto px-5">
          <h2 className="text-[28px] font-bold uppercase tracking-[0.5px] text-[#4B5056] mb-10 text-center" style={{ fontFamily: 'Josefin Sans, sans-serif' }}>
            {s.whyTitle}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: '⚡', title: 'LIVE IN SECONDS', text: 'Describe your site, we build it. No setup, no learning curve.' },
              { icon: '📱', title: 'MOBILE BY DEFAULT', text: 'Every generator produces responsive sites that work on any device.' },
              { icon: '✨', title: 'FREE TO START', text: 'Generate, customize, and publish without a credit card.' },
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="text-3xl mb-4" aria-hidden="true">{item.icon}</div>
                <h4 className="font-bold uppercase text-[#2E2E2F] text-sm tracking-wide mb-2" style={{ fontFamily: 'Josefin Sans, sans-serif' }}>
                  {item.title}
                </h4>
                <p className="text-[#636972] text-sm leading-[1.5]">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 8: FAQ */}
      <section className="py-16">
        <div className="max-w-[1200px] mx-auto px-5">
          <h2 className="text-[28px] font-bold uppercase tracking-[0.5px] text-[#4B5056] mb-8 text-center" style={{ fontFamily: 'Josefin Sans, sans-serif' }}>
            {s.faqTitle}
          </h2>
          <div className="max-w-[720px] mx-auto space-y-2">
            {faqItems.map((item, idx) => (
              <div key={idx} className="border border-[#C6C9CD] rounded-[3px] bg-white overflow-hidden">
                <button
                  onClick={() => toggleFaq(idx)}
                  aria-expanded={!!expandedFaqs[idx]}
                  aria-controls={`faq-answer-${idx}`}
                  className="w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none focus:ring-2 focus:ring-[#8159BB] focus:ring-inset"
                >
                  <span className="font-bold text-[#2E2E2F] text-sm pr-4" style={{ fontFamily: 'Josefin Sans, sans-serif' }}>
                    {item.q}
                  </span>
                  <svg 
                    width="20" 
                    height="20" 
                    viewBox="0 0 20 20" 
                    fill="none" 
                    className={`text-[#8159BB] flex-shrink-0 transition-transform ${expandedFaqs[idx] ? 'rotate-180' : ''}`}
                    aria-hidden="true"
                  >
                    <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                {expandedFaqs[idx] && (
                  <div id={`faq-answer-${idx}`} className="px-6 pb-5 text-sm text-[#636972] leading-[1.6]">
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
        <div className="max-w-[1200px] mx-auto px-5 text-center">
          <h2 className="text-[28px] font-bold uppercase tracking-[0.5px] text-[#4B5056] mb-3" style={{ fontFamily: 'Josefin Sans, sans-serif' }}>
            {s.closingTitle}
          </h2>
          <p className="text-[#636972] mb-8">{s.closingSubtitle}</p>
          <a
            href="/s/ai_site_builder"
            className="inline-flex items-center justify-center h-11 px-8 text-sm font-bold uppercase tracking-wide text-white rounded-[4px] transition-all"
            style={{ 
              background: 'linear-gradient(90deg, #7671FF 0%, #CB0C9F 100%)',
              fontFamily: 'Josefin Sans, sans-serif'
            }}
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
              <div className="font-bold text-white mb-4" style={{ fontFamily: 'Josefin Sans, sans-serif' }}>strikingly</div>
            </div>
            <div>
              <div className="font-bold text-white mb-3 text-xs tracking-wide">PRODUCT</div>
              <a href="/templates" className="block py-1 hover:text-white">Templates</a>
              <a href="/pricing" className="block py-1 hover:text-white">Pricing</a>
              <a href="/blog" className="block py-1 hover:text-white">Blog</a>
            </div>
            <div>
              <div className="font-bold text-white mb-3 text-xs tracking-wide">COMPANY</div>
              <a href="/about" className="block py-1 hover:text-white">About</a>
              <a href="/support" className="block py-1 hover:text-white">Support</a>
            </div>
            <div>
              <div className="font-bold text-white mb-3 text-xs tracking-wide">RESOURCES</div>
              <a href="/blog" className="block py-1 hover:text-white">Blog</a>
              <a href="/support" className="block py-1 hover:text-white">Help Center</a>
            </div>
            <div>
              <div className="font-bold text-white mb-3 text-xs tracking-wide">LEGAL</div>
              <a href="/terms" className="block py-1 hover:text-white">Terms</a>
              <a href="/privacy" className="block py-1 hover:text-white">Privacy</a>
            </div>
          </div>
          <div className="pt-8 border-t border-[#4A4D51] text-xs">
            © {new Date().getFullYear()} Strikingly, Inc. All rights reserved.
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