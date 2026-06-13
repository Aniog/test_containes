import React, { useState, useMemo } from 'react';

const strings = {
  en: {
    logo: 'strikingly AI',
    breadcrumbHome: 'Strikingly',
    breadcrumbCurrent: 'AI Generators',
    heroH1Line1: 'BUILD ANY KIND OF SITE',
    heroH1Line2: 'WITH AI, IN AN INSTANT',
    heroSubheadline: "Browse the right generator for what you're building, or jump straight into our AI site builder.",
    ctaPrimary: "START BUILDING - IT'S FREE",
    ctaSecondary: 'BROWSE GENERATORS',
    featuredTitle: 'FEATURED GENERATORS',
    featuredSubtitle: 'A few common starting points.',
    browseTitle: 'BROWSE BY CATEGORY',
    allGeneratorsTitle: 'ALL GENERATORS',
    allGeneratorsSubtitle: 'Sixty-plus generators, organized by what you\'re building.',
    searchPlaceholder: 'Search generators...',
    searchLabel: 'Search generators',
    searchResults: (count) => `${count} generators match`,
    searchEmpty: "Can't find it? Start with our AI builder.",
    searchClear: 'Clear search',
    howItWorksTitle: 'HOW IT WORKS',
    whyStrikinglyTitle: 'WHY STRIKINGLY',
    faqTitle: 'FREQUENTLY ASKED QUESTIONS',
    closingTitle: 'READY TO BUILD?',
    closingSubtitle: 'Pick a generator above, or jump straight into our AI builder.',
    closingCta: 'START WITH AI BUILDER',
    footerCopyright: '© 2026 Strikingly, Inc. All rights reserved.',
  }
};

const s = strings.en;

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

const categoryCards = [
  { name: 'Websites', desc: 'AI-built business and personal sites for any goal.', slug: 'websites', icon: '🌐' },
  { name: 'Landing Pages', desc: 'Single-page sites built to convert visitors fast.', slug: 'landing-pages', icon: '📄' },
  { name: 'Portfolios', desc: 'Showcase your work with a clean, focused site.', slug: 'portfolios', icon: '🎨' },
  { name: 'Blogs', desc: 'Publish-ready blogs with built-in SEO basics.', slug: 'blogs', icon: '✍️' },
  { name: 'Online Stores', desc: 'Sell products online with payments built in.', slug: 'stores', icon: '🛒' },
  { name: 'Link-in-Bio', desc: 'One link, all your places. Made for creators.', slug: 'link-in-bio', icon: '🔗' },
];

const allGeneratorsByCategory = {
  websites: {
    id: 'websites',
    title: 'Websites',
    desc: 'Full sites for businesses, events, and personal projects.',
    icon: '🌐',
    generators: [
      { name: 'AI Website Generator', desc: 'Describe your business, get a full site', slug: 'ai-website-generator' },
      { name: 'One-Page Website Builder', desc: 'Simple sites, single scroll', slug: 'one-page-website-builder' },
      { name: 'Wedding Website Generator', desc: 'Share your day with guests', slug: 'wedding-website-generator' },
      { name: 'Restaurant Website Builder', desc: 'Menu, hours, reservations, done', slug: 'restaurant-website-builder' },
      { name: 'Free Website Builder for Photographers', desc: 'Showcase your work beautifully', slug: 'free-website-builder-for-photographers' },
      { name: 'AI Website for Yoga Instructors', desc: 'Class schedules and booking', slug: 'ai-website-for-yoga-instructors' },
      { name: 'No-Code Website Builder', desc: 'Build without touching code', slug: 'no-code-website-builder' },
      { name: 'Beautiful Website Generator', desc: 'Stunning designs in seconds', slug: 'beautiful-website-generator' },
      { name: 'Business Website Builder', desc: 'Professional sites for any company', slug: 'business-website-builder' },
      { name: 'Personal Website Generator', desc: 'Your story, your way', slug: 'personal-website-generator' },
    ]
  },
  'landing-pages': {
    id: 'landing-pages',
    title: 'Landing Pages',
    desc: 'Focused pages designed to convert visitors into leads or customers.',
    icon: '📄',
    generators: [
      { name: 'AI Landing Page Maker', desc: 'One-page sites built to convert', slug: 'ai-landing-page-maker' },
      { name: 'Product Launch Landing Page', desc: 'Announce and sell your product', slug: 'product-launch-landing-page' },
      { name: 'Free Landing Page Builder', desc: 'No cost, instant results', slug: 'free-landing-page-builder' },
      { name: 'Event Landing Page Generator', desc: 'Promote your next event', slug: 'event-landing-page-generator' },
      { name: 'One-Page Sales Generator', desc: 'Sell with a single scroll', slug: 'one-page-sales-generator' },
      { name: 'AI Landing Page for Coaches', desc: 'Attract and convert clients', slug: 'ai-landing-page-for-coaches' },
      { name: 'No-Code Landing Page Maker', desc: 'Build without developers', slug: 'no-code-landing-page-maker' },
      { name: 'Beautiful Landing Page Builder', desc: 'Designs that convert', slug: 'beautiful-landing-page-builder' },
      { name: 'Lead Generation Landing Page', desc: 'Capture emails and signups', slug: 'lead-generation-landing-page' },
      { name: 'AI Webinar Landing Page', desc: 'Register attendees fast', slug: 'ai-webinar-landing-page' },
    ]
  },
  portfolios: {
    id: 'portfolios',
    title: 'Portfolios',
    desc: 'Clean, focused showcases for creatives and professionals.',
    icon: '🎨',
    generators: [
      { name: 'Free Portfolio Generator', desc: 'For creatives, in minutes, no fee', slug: 'free-portfolio-generator' },
      { name: 'Portfolio Generator for Designers', desc: 'Showcase your best work', slug: 'portfolio-generator-for-designers' },
      { name: 'AI Portfolio for Photographers', desc: 'Display your photography', slug: 'ai-portfolio-for-photographers' },
      { name: 'One-Page Portfolio Builder', desc: 'Simple and elegant', slug: 'one-page-portfolio-builder' },
      { name: 'No-Code Portfolio Maker', desc: 'Build without code', slug: 'no-code-portfolio-maker' },
      { name: 'Beautiful Portfolio Generator', desc: 'Stunning visual layouts', slug: 'beautiful-portfolio-generator' },
      { name: 'AI Portfolio for Writers', desc: 'Share your writing samples', slug: 'ai-portfolio-for-writers' },
      { name: 'Free Portfolio for Artists', desc: 'Gallery-style presentation', slug: 'free-portfolio-for-artists' },
      { name: 'Portfolio Builder for Architects', desc: 'Project showcase made simple', slug: 'portfolio-builder-for-architects' },
      { name: 'AI Portfolio for Musicians', desc: 'Share your music and gigs', slug: 'ai-portfolio-for-musicians' },
    ]
  },
  blogs: {
    id: 'blogs',
    title: 'Blogs',
    desc: 'Ready-to-publish blogs with SEO built in.',
    icon: '✍️',
    generators: [
      { name: 'Blog Generator for Beginners', desc: 'Publish-ready in minutes', slug: 'blog-generator-for-beginners' },
      { name: 'AI Blog Builder', desc: 'Content that ranks', slug: 'ai-blog-builder' },
      { name: 'Free Blog Generator', desc: 'Start writing, no cost', slug: 'free-blog-generator' },
      { name: 'One-Page Blog Maker', desc: 'Simple publishing', slug: 'one-page-blog-maker' },
      { name: 'No-Code Blog Builder', desc: 'Write without tech', slug: 'no-code-blog-builder' },
      { name: 'Beautiful Blog Generator', desc: 'Clean reading experience', slug: 'beautiful-blog-generator' },
      { name: 'AI Blog for Food Writers', desc: 'Recipes and stories', slug: 'ai-blog-for-food-writers' },
      { name: 'Blog Builder for Travel', desc: 'Share your journeys', slug: 'blog-builder-for-travel' },
      { name: 'Free Blog for Fitness', desc: 'Health and wellness content', slug: 'free-blog-for-fitness' },
      { name: 'AI Blog for Tech Reviews', desc: 'Product analysis made easy', slug: 'ai-blog-for-tech-reviews' },
    ]
  },
  stores: {
    id: 'stores',
    title: 'Online Stores',
    desc: 'Sell products with payments integrated.',
    icon: '🛒',
    generators: [
      { name: 'Online Store Builder', desc: 'Start selling without writing code', slug: 'online-store-builder' },
      { name: 'AI Store Generator', desc: 'Launch your shop fast', slug: 'ai-store-generator' },
      { name: 'Free Store Builder', desc: 'Sell without fees to start', slug: 'free-store-builder' },
      { name: 'One-Page Store Maker', desc: 'Sell with a single page', slug: 'one-page-store-maker' },
      { name: 'No-Code Store Builder', desc: 'E-commerce without developers', slug: 'no-code-store-builder' },
      { name: 'Beautiful Store Generator', desc: 'Products that look great', slug: 'beautiful-store-generator' },
      { name: 'Online Store for Restaurants', desc: 'Take orders online', slug: 'online-store-for-restaurants' },
      { name: 'AI Store for Fashion', desc: 'Clothing and accessories', slug: 'ai-store-for-fashion' },
      { name: 'Free Store for Handmade', desc: 'Sell your crafts', slug: 'free-store-for-handmade' },
      { name: 'Store Builder for Jewelry', desc: 'Showcase and sell', slug: 'store-builder-for-jewelry' },
    ]
  },
  'link-in-bio': {
    id: 'link-in-bio',
    title: 'Link-in-Bio',
    desc: 'One link for all your content and channels.',
    icon: '🔗',
    generators: [
      { name: 'Link-in-Bio Generator', desc: 'One link for all your channels', slug: 'link-in-bio-generator' },
      { name: 'AI Link-in-Bio Maker', desc: 'All your links in one place', slug: 'ai-link-in-bio-maker' },
      { name: 'Free Link-in-Bio Builder', desc: 'Creators start here', slug: 'free-link-in-bio-builder' },
      { name: 'One-Page Link Page', desc: 'Simple and fast', slug: 'one-page-link-page' },
      { name: 'No-Code Link Builder', desc: 'Build without code', slug: 'no-code-link-builder' },
      { name: 'Beautiful Link-in-Bio', desc: 'Stylish link pages', slug: 'beautiful-link-in-bio' },
      { name: 'Link-in-Bio for Influencers', desc: 'All your socials', slug: 'link-in-bio-for-influencers' },
      { name: 'AI Link Page for Creators', desc: 'Share everything you make', slug: 'ai-link-page-for-creators' },
      { name: 'Free Link-in-Bio for Artists', desc: 'Music, art, and more', slug: 'free-link-in-bio-for-artists' },
      { name: 'Link Builder for Podcasters', desc: 'Episodes and show notes', slug: 'link-builder-for-podcasters' },
    ]
  }
};

const faqItems = [
  {
    q: 'What is an AI site generator?',
    a: 'An AI site generator is a tool that creates a complete website based on a short description you provide. Instead of designing page by page, you describe your business or project in a sentence or two, and the AI builds a full site with pages, text, and images.'
  },
  {
    q: 'How is a generator different from a template?',
    a: 'Templates are pre-designed layouts you customize manually. Generators use AI to create a unique site from your description, including content and structure tailored to your needs. You still get full editing control afterward.'
  },
  {
    q: 'Are these generators free to use?',
    a: 'Yes, you can generate, customize, and publish a site without a credit card. Paid plans unlock additional features like custom domains, advanced analytics, and priority support.'
  },
  {
    q: 'What kinds of sites can I build?',
    a: 'You can build websites, landing pages, portfolios, blogs, online stores, and link-in-bio pages. Each category has multiple generators tuned for specific industries and goals.'
  },
  {
    q: 'Can I customize what the generator produces?',
    a: 'Absolutely. After generation, you can edit text, swap images, reorder sections, add pages, and change colors and fonts. Everything is fully editable in the Strikingly editor.'
  },
  {
    q: 'Do generated sites work on mobile?',
    a: 'Yes. Every generator produces responsive sites that automatically adapt to phones, tablets, and desktops. No extra work is needed to make your site mobile-friendly.'
  }
];

const howItWorksSteps = [
  { num: '1', title: 'PICK A GENERATOR', text: 'Browse by category or search to find one that fits your goal.' },
  { num: '2', title: 'DESCRIBE YOUR SITE', text: 'Tell our AI builder about your business in a sentence or two.' },
  { num: '3', title: 'GENERATE AND PUBLISH', text: 'Get a fully built site in seconds. Customize anything, then go live.' },
];

const whyStrikinglyItems = [
  { icon: '⚡', title: 'LIVE IN SECONDS', text: 'Describe your site, we build it. No setup, no learning curve.' },
  { icon: '📱', title: 'MOBILE BY DEFAULT', text: 'Every generator produces responsive sites that work on any device.' },
  { icon: '🎁', title: 'FREE TO START', text: 'Generate, customize, and publish without a credit card.' },
];

const GeneratorCard = ({ name, desc, category, slug, showCategory = false }) => (
  <a
    href={`/generators/${slug}`}
    className="block p-5 bg-white border border-[#C6C9CD] rounded-[3px] hover:border-[#8159BB] hover:shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#8159BB] focus:ring-offset-2"
    aria-label={name}
  >
    <div className="w-10 h-10 mb-4 rounded bg-[#F4F6F8] flex items-center justify-center text-xl" aria-hidden="true">
      📄
    </div>
    <h4 className="font-bold text-[#2E2E2F] text-[15px] mb-1.5 leading-tight">{name}</h4>
    <p className="text-[#636972] text-sm mb-3 leading-snug">{desc}</p>
    {showCategory && category && (
      <span className="inline-block text-[11px] px-1.5 py-0.5 border border-[#8159BB] text-[#8159BB] rounded-[3px] uppercase tracking-wide">
        {category}
      </span>
    )}
  </a>
);

const CategoryCard = ({ name, desc, slug, icon }) => (
  <a
    href={`/generators#${slug}`}
    className="block p-6 bg-white border border-[#C6C9CD] rounded-[3px] hover:border-[#8159BB] hover:shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#8159BB] focus:ring-offset-2"
  >
    <div className="text-3xl mb-4" aria-hidden="true">{icon}</div>
    <div className="flex items-center justify-between mb-2">
      <h4 className="font-bold text-[#4B5056] text-sm uppercase tracking-[0.5px]">{name}</h4>
      <span className="text-[#8159BB]" aria-hidden="true">→</span>
    </div>
    <p className="text-[#636972] text-sm leading-snug">{desc}</p>
  </a>
);

const FAQAccordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="space-y-2">
      {items.map((item, index) => (
        <div key={index} className="border border-[#C6C9CD] rounded-[3px] overflow-hidden">
          <button
            onClick={() => toggle(index)}
            className="w-full px-6 py-4 flex items-center justify-between text-left bg-white hover:bg-[#F4F6F8] focus:outline-none focus:ring-2 focus:ring-[#8159BB] focus:ring-inset"
            aria-expanded={openIndex === index}
            aria-controls={`faq-answer-${index}`}
          >
            <span className="font-bold text-[#2E2E2F] text-sm pr-4">{item.q}</span>
            <span className="text-[#8159BB] text-xl flex-shrink-0" aria-hidden="true">
              {openIndex === index ? '−' : '+'}
            </span>
          </button>
          <div
            id={`faq-answer-${index}`}
            className={`px-6 overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96 py-4' : 'max-h-0'}`}
            aria-hidden={openIndex !== index}
          >
            <p className="text-[#636972] text-sm leading-relaxed">{item.a}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

const CategorySection = ({ category, searchTerm, expandedSections, toggleSection }) => {
  const filtered = category.generators.filter(g =>
    g.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    g.desc.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (filtered.length === 0) return null;

  const isExpanded = expandedSections[category.id] !== false;
  const visibleCount = isExpanded ? filtered.length : Math.min(6, filtered.length);
  const hasMore = filtered.length > 6;

  return (
    <section id={category.id} className="mb-12">
      <h3 className="text-[#4B5056] text-[26px] font-bold uppercase tracking-[0.5px] mb-2">{category.title}</h3>
      <p className="text-[#636972] text-sm mb-6">{category.desc}</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.slice(0, visibleCount).map((gen, idx) => (
          <GeneratorCard key={idx} name={gen.name} desc={gen.desc} slug={gen.slug} />
        ))}
      </div>

      {hasMore && (
        <button
          onClick={() => toggleSection(category.id)}
          className="mt-4 text-sm text-[#8159BB] hover:underline focus:outline-none focus:ring-2 focus:ring-[#8159BB] rounded px-2 py-1"
          aria-expanded={isExpanded}
          aria-controls={`section-${category.id}`}
        >
          {isExpanded ? `Show fewer` : `Show all ${filtered.length} generators`}
        </button>
      )}
    </section>
  );
};

const GeneratorsHub = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (id) => {
    setExpandedSections(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const allGeneratorsFlat = useMemo(() => {
    return Object.values(allGeneratorsByCategory).flatMap(cat =>
      cat.generators.map(g => ({ ...g, category: cat.title }))
    );
  }, []);

  const filteredCount = useMemo(() => {
    if (!searchTerm) return allGeneratorsFlat.length;
    return allGeneratorsFlat.filter(g =>
      g.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      g.desc.toLowerCase().includes(searchTerm.toLowerCase()) ||
      g.category.toLowerCase().includes(searchTerm.toLowerCase())
    ).length;
  }, [searchTerm, allGeneratorsFlat]);

  const filteredCategories = useMemo(() => {
    if (!searchTerm) return Object.values(allGeneratorsByCategory);
    
    return Object.values(allGeneratorsByCategory).map(cat => {
      const matching = cat.generators.filter(g =>
        g.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        g.desc.toLowerCase().includes(searchTerm.toLowerCase()) ||
        cat.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      return { ...cat, generators: matching };
    }).filter(cat => cat.generators.length > 0);
  }, [searchTerm]);

  const clearSearch = () => setSearchTerm('');

  return (
    <div className="min-h-screen bg-white text-[#2E2E2F]">
      {/* Section 0: Top bar */}
      <div className="border-b border-[#E2E4E7] bg-white">
        <div className="max-w-[1200px] mx-auto px-5 h-14 flex items-center">
          <a href="/" className="font-bold text-lg tracking-tight text-[#2E2E2F]">{s.logo}</a>
        </div>
      </div>

      {/* Section 1: Breadcrumb */}
      <nav aria-label="Breadcrumb" className="max-w-[1200px] mx-auto px-5 py-3">
        <ol className="flex items-center text-sm text-[#636972]">
          <li><a href="/" className="hover:text-[#8159BB]">{s.breadcrumbHome}</a></li>
          <li className="mx-2">›</li>
          <li aria-current="page">{s.breadcrumbCurrent}</li>
        </ol>
      </nav>

      {/* Section 2: Hero */}
      <section className="max-w-[1200px] mx-auto px-5 pt-8 pb-16 md:pt-12 md:pb-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-[40px] md:text-[48px] leading-[1.15] font-bold tracking-[-0.5px] mb-4">
              <span className="text-[#2E2E2F] block uppercase">{s.heroH1Line1}</span>
              <span className="block uppercase bg-gradient-to-r from-[#7671FF] to-[#CB0C9F] bg-clip-text text-transparent">{s.heroH1Line2}</span>
            </h1>
            <p className="text-[#636972] text-[15px] max-w-md mb-8 leading-relaxed">{s.heroSubheadline}</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="/s/ai_site_builder"
                className="inline-flex items-center justify-center h-11 px-6 rounded-[4px] bg-gradient-to-r from-[#7671FF] to-[#CB0C9F] text-white text-sm font-bold uppercase tracking-[0.5px] hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#7671FF]"
              >
                {s.ctaPrimary}
              </a>
              <a
                href="#all-generators"
                className="inline-flex items-center justify-center h-11 px-6 rounded-[4px] border border-[#8159BB] text-[#8159BB] text-sm font-bold uppercase tracking-[0.5px] hover:bg-[#F4F6F8] transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#8159BB]"
              >
                {s.ctaSecondary}
              </a>
            </div>
          </div>
          <div className="hidden md:block">
            <svg width="480" height="320" viewBox="0 0 480 320" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <rect x="40" y="30" width="400" height="260" rx="8" fill="#F4F6F8" stroke="#C6C9CD" strokeWidth="2"/>
              <rect x="60" y="55" width="360" height="30" rx="4" fill="#E2E4E7"/>
              <rect x="60" y="100" width="160" height="120" rx="4" fill="#E2E4E7"/>
              <rect x="240" y="100" width="180" height="55" rx="4" fill="#E2E4E7"/>
              <rect x="240" y="165" width="180" height="55" rx="4" fill="#E2E4E7"/>
              <circle cx="240" cy="160" r="60" fill="url(#aiGrad)" opacity="0.15"/>
              <defs>
                <linearGradient id="aiGrad" x1="180" y1="100" x2="300" y2="220" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#7671FF"/>
                  <stop offset="1" stopColor="#CB0C9F"/>
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </section>

      {/* Section 3: Featured Generators */}
      <section className="bg-[#F4F6F8] py-12">
        <div className="max-w-[1200px] mx-auto px-5">
          <h2 className="text-[#4B5056] text-[26px] font-bold uppercase tracking-[0.5px] mb-2">{s.featuredTitle}</h2>
          <p className="text-[#636972] text-sm mb-8">{s.featuredSubtitle}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {featuredGenerators.map((gen, idx) => (
              <GeneratorCard key={idx} name={gen.name} desc={gen.desc} category={gen.category} slug={gen.slug} showCategory={true} />
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Browse by Category */}
      <section className="py-12">
        <div className="max-w-[1200px] mx-auto px-5">
          <h2 className="text-[#4B5056] text-[26px] font-bold uppercase tracking-[0.5px] mb-8">{s.browseTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {categoryCards.map((cat, idx) => (
              <CategoryCard key={idx} name={cat.name} desc={cat.desc} slug={cat.slug} icon={cat.icon} />
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: All Generators */}
      <section id="all-generators" className="bg-[#F4F6F8] py-12">
        <div className="max-w-[1200px] mx-auto px-5">
          <h2 className="text-[#4B5056] text-[26px] font-bold uppercase tracking-[0.5px] mb-2">{s.allGeneratorsTitle}</h2>
          <p className="text-[#636972] text-sm mb-6">{s.allGeneratorsSubtitle}</p>

          {/* Search */}
          <div className="mb-8">
            <div className="relative max-w-[480px]">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#636972]" aria-hidden="true">🔍</span>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder={s.searchPlaceholder}
                aria-label={s.searchLabel}
                className="w-full h-11 pl-11 pr-4 border border-[#C6C9CD] rounded-[3px] text-sm focus:outline-none focus:ring-2 focus:ring-[#8159BB] focus:border-transparent"
              />
            </div>
            {searchTerm && (
              <p className="mt-2 text-sm text-[#636972]">
                {s.searchResults(filteredCount)}
                {filteredCount === 0 && (
                  <>
                    {' · '}
                    <a href="/s/ai_site_builder" className="text-[#8159BB] hover:underline">{s.searchEmpty}</a>
                    {' · '}
                    <button onClick={clearSearch} className="text-[#8159BB] hover:underline">{s.searchClear}</button>
                  </>
                )}
              </p>
            )}
          </div>

          {/* Category Sections */}
          {filteredCategories.length > 0 ? (
            filteredCategories.map((cat) => (
              <CategorySection
                key={cat.id}
                category={cat}
                searchTerm={searchTerm}
                expandedSections={expandedSections}
                toggleSection={toggleSection}
              />
            ))
          ) : (
            <div className="text-center py-12">
              <p className="text-[#636972] mb-4">No generators match your search.</p>
              <a href="/s/ai_site_builder" className="text-[#8159BB] hover:underline">{s.searchEmpty}</a>
            </div>
          )}
        </div>
      </section>

      {/* Section 6: How It Works */}
      <section className="py-12">
        <div className="max-w-[1200px] mx-auto px-5">
          <h2 className="text-[#4B5056] text-[26px] font-bold uppercase tracking-[0.5px] mb-10 text-center">{s.howItWorksTitle}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {howItWorksSteps.map((step, idx) => (
              <div key={idx} className="text-center">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#8159BB] text-white font-bold mb-4">{step.num}</div>
                <h4 className="font-bold text-sm uppercase tracking-[0.5px] mb-2">{step.title}</h4>
                <p className="text-[#636972] text-sm leading-relaxed">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7: Why Strikingly */}
      <section className="bg-[#F4F6F8] py-12">
        <div className="max-w-[1200px] mx-auto px-5">
          <h2 className="text-[#4B5056] text-[26px] font-bold uppercase tracking-[0.5px] mb-10 text-center">{s.whyStrikinglyTitle}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {whyStrikinglyItems.map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="text-3xl mb-4" aria-hidden="true">{item.icon}</div>
                <h4 className="font-bold text-sm uppercase tracking-[0.5px] mb-2">{item.title}</h4>
                <p className="text-[#636972] text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 8: FAQ */}
      <section className="py-12">
        <div className="max-w-[1200px] mx-auto px-5">
          <h2 className="text-[#4B5056] text-[26px] font-bold uppercase tracking-[0.5px] mb-8">{s.faqTitle}</h2>
          <FAQAccordion items={faqItems} />
        </div>
      </section>

      {/* Section 9: Closing CTA */}
      <section className="py-16 border-t border-[#E2E4E7]">
        <div className="max-w-[1200px] mx-auto px-5 text-center">
          <h2 className="text-[32px] font-bold uppercase tracking-[0.5px] mb-3">{s.closingTitle}</h2>
          <p className="text-[#636972] mb-8">{s.closingSubtitle}</p>
          <a
            href="/s/ai_site_builder"
            className="inline-flex items-center justify-center h-11 px-8 rounded-[4px] bg-gradient-to-r from-[#7671FF] to-[#CB0C9F] text-white text-sm font-bold uppercase tracking-[0.5px] hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#7671FF]"
          >
            {s.closingCta}
          </a>
        </div>
      </section>

      {/* Section 10: Footer */}
      <footer className="bg-[#2E2E2F] text-[#C6C9CD] py-12 text-sm">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="grid md:grid-cols-5 gap-8 mb-8">
            <div>
              <div className="font-bold text-white mb-4">Strikingly</div>
            </div>
            <div>
              <div className="font-bold text-white mb-3 text-xs uppercase tracking-wider">Product</div>
              <a href="/templates" className="block py-1 hover:text-white">Templates</a>
              <a href="/pricing" className="block py-1 hover:text-white">Pricing</a>
              <a href="/blog" className="block py-1 hover:text-white">Blog</a>
            </div>
            <div>
              <div className="font-bold text-white mb-3 text-xs uppercase tracking-wider">Company</div>
              <a href="/about" className="block py-1 hover:text-white">About</a>
              <a href="/support" className="block py-1 hover:text-white">Support</a>
            </div>
            <div>
              <div className="font-bold text-white mb-3 text-xs uppercase tracking-wider">Legal</div>
              <a href="/terms" className="block py-1 hover:text-white">Terms</a>
              <a href="/privacy" className="block py-1 hover:text-white">Privacy</a>
            </div>
            <div></div>
          </div>
          <div className="pt-8 border-t border-[#4B5056] text-xs">{s.footerCopyright}</div>
        </div>
      </footer>

      {/* BreadcrumbList JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Strikingly", "item": "https://www.strikingly.com/" },
            { "@type": "ListItem", "position": 2, "name": "AI Generators", "item": "https://www.strikingly.com/generators" }
          ]
        })
      }} />
    </div>
  );
};

export default GeneratorsHub;