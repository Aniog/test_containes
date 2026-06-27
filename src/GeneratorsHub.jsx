import React, { useState, useMemo, useEffect } from 'react';
import { Search, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';

// i18n strings - ready for strings.es, strings.ja etc.
const strings = {
  en: {
    topbar: {
      logo: 'strikingly AI',
    },
    breadcrumb: {
      home: 'Strikingly',
      current: 'AI Generators',
    },
    hero: {
      h1Line1: 'BUILD ANY KIND OF SITE',
      h1Line2: 'WITH AI, IN AN INSTANT',
      subheadline: "Browse the right generator for what you're building, or jump straight into our AI site builder.",
      ctaPrimary: 'START BUILDING - IT\'S FREE',
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
      resultCount: (count) => `${count} generator${count === 1 ? '' : 's'} match`,
      emptyTitle: 'No generators match your search.',
      emptyCta: "Can't find it? Start with our AI builder.",
      showAll: (count) => `Show all ${count} generators`,
      showLess: 'Show less',
    },
    howItWorks: {
      heading: 'HOW IT WORKS',
      steps: [
        {
          number: '1',
          title: 'PICK A GENERATOR',
          desc: 'Browse by category or search to find one that fits your goal.',
        },
        {
          number: '2',
          title: 'DESCRIBE YOUR SITE',
          desc: 'Tell our AI builder about your business in a sentence or two.',
        },
        {
          number: '3',
          title: 'GENERATE AND PUBLISH',
          desc: 'Get a fully built site in seconds. Customize anything, then go live.',
        },
      ],
    },
    whyStrikingly: {
      heading: 'WHY STRIKINGLY',
      items: [
        {
          icon: 'zap',
          title: 'LIVE IN SECONDS',
          desc: 'Describe your site, we build it. No setup, no learning curve.',
        },
        {
          icon: 'smartphone',
          title: 'MOBILE BY DEFAULT',
          desc: 'Every generator produces responsive sites that work on any device.',
        },
        {
          icon: 'gift',
          title: 'FREE TO START',
          desc: 'Generate, customize, and publish without a credit card.',
        },
      ],
    },
    faq: {
      heading: 'FREQUENTLY ASKED QUESTIONS',
      questions: [
        {
          q: 'What is an AI site generator?',
          a: 'An AI site generator uses artificial intelligence to create a complete website based on a short description you provide. Instead of starting from a blank canvas or rigid template, you describe your business or goal and the AI assembles pages, layout, copy, and images for you.',
        },
        {
          q: 'How is a generator different from a template?',
          a: 'A template is a pre-designed layout you fill in manually. A generator builds the site for you from your description, including suggested sections and content. You still get full control to edit everything afterward.',
        },
        {
          q: 'Are these generators free to use?',
          a: 'Yes. You can generate, customize, and publish a site with any generator at no cost. Paid plans are available if you want to remove Strikingly branding or unlock advanced features.',
        },
        {
          q: 'What kinds of sites can I build?',
          a: 'You can build business sites, landing pages, portfolios, blogs, online stores, link-in-bio pages, wedding sites, restaurant sites, and more. Each generator is tuned for a specific type of site.',
        },
        {
          q: 'Can I customize what the generator produces?',
          a: 'Absolutely. After the AI generates your site, you can edit text, swap images, rearrange sections, change colors, add pages, and connect your own domain.',
        },
        {
          q: 'Do generated sites work on mobile?',
          a: 'Yes. Every site produced by a generator is responsive by default and looks great on phones, tablets, and desktops.',
        },
      ],
    },
    closing: {
      headline: 'READY TO BUILD?',
      sub: 'Pick a generator above, or jump straight into our AI builder.',
      cta: 'START WITH AI BUILDER',
    },
    footer: {
      columns: [
        {
          title: 'Product',
          links: [
            { label: 'AI Site Builder', href: '/s/ai_site_builder' },
            { label: 'Templates', href: '/templates' },
            { label: 'Pricing', href: '/pricing' },
          ],
        },
        {
          title: 'Company',
          links: [
            { label: 'About', href: '/about' },
            { label: 'Blog', href: '/blog' },
            { label: 'Support', href: '/support' },
          ],
        },
        {
          title: 'Resources',
          links: [
            { label: 'Generators', href: '/generators' },
            { label: 'Help Center', href: '/support' },
          ],
        },
        {
          title: 'Legal',
          links: [
            { label: 'Terms', href: '/terms' },
            { label: 'Privacy', href: '/privacy' },
          ],
        },
      ],
      copyright: '© 2026 Strikingly, Inc. All rights reserved.',
    },
    ctaBuilder: '/s/ai_site_builder',
  },
};

// Sample data for Featured (exactly as specified, with category for tags)
const featuredGenerators = [
  { name: 'AI Website Generator', description: 'Describe your business, get a full site', category: 'Website', slug: 'ai-website-generator' },
  { name: 'Free Portfolio Generator', description: 'For creatives, in minutes, no fee', category: 'Portfolio', slug: 'free-portfolio-generator' },
  { name: 'AI Landing Page Maker', description: 'One-page sites built to convert', category: 'Landing Page', slug: 'ai-landing-page-maker' },
  { name: 'Online Store Builder', description: 'Start selling without writing code', category: 'Store', slug: 'online-store-builder' },
  { name: 'Link-in-Bio Generator', description: 'One link for all your channels', category: 'Link-in-Bio', slug: 'link-in-bio-generator' },
  { name: 'One-Page Website Builder', description: 'Simple sites, single scroll', category: 'Website', slug: 'one-page-website-builder' },
  { name: 'Wedding Website Generator', description: 'Share your day with guests', category: 'Website', slug: 'wedding-website-generator' },
  { name: 'Restaurant Website Builder', description: 'Menu, hours, reservations, done', category: 'Website', slug: 'restaurant-website-builder' },
  { name: 'Blog Generator for Beginners', description: 'Publish-ready in minutes', category: 'Blog', slug: 'blog-generator-for-beginners' },
];

// Category definitions for Browse + All Generators
const categoryDefs = [
  { id: 'websites', label: 'Websites', anchor: '#websites', desc: 'AI-built business and personal sites for any goal.' },
  { id: 'landing-pages', label: 'Landing Pages', anchor: '#landing-pages', desc: 'Single-page sites built to convert visitors fast.' },
  { id: 'portfolios', label: 'Portfolios', anchor: '#portfolios', desc: 'Showcase your work with a clean, focused site.' },
  { id: 'blogs', label: 'Blogs', anchor: '#blogs', desc: 'Publish-ready blogs with built-in SEO basics.' },
  { id: 'stores', label: 'Online Stores', anchor: '#stores', desc: 'Sell products online with payments built in.' },
  { id: 'link-in-bio', label: 'Link-in-Bio', anchor: '#link-in-bio', desc: 'One link, all your places. Made for creators.' },
];

// Full directory data - 8 to 12 per category. All statically defined so visible in source.
const allGeneratorsByCategory = {
  websites: [
    { name: 'AI Website Generator', description: 'Describe your business, get a full site in seconds.' },
    { name: 'One-Page Website Builder', description: 'Simple sites, single scroll, instant results.' },
    { name: 'Wedding Website Generator', description: 'Share your day with guests beautifully.' },
    { name: 'Restaurant Website Builder', description: 'Menu, hours, reservations, done.' },
    { name: 'Free Website Builder for Photographers', description: 'Showcase your work with elegant galleries.' },
    { name: 'AI Website Builder for Yoga Instructors', description: 'Class schedules and booking made simple.' },
    { name: 'Beautiful Website Generator for Small Businesses', description: 'Professional presence without the hassle.' },
    { name: 'No-Code Website Maker for Coaches', description: 'Attract clients with a polished site.' },
    { name: 'Professional Website Builder for Consultants', description: 'Establish authority and win projects.' },
    { name: 'Personal Website Generator', description: 'Your story, your way, online.' },
    { name: 'AI Site Builder for Nonprofits', description: 'Tell your mission and accept donations.' },
    { name: 'Modern Website Generator for Startups', description: 'Launch fast with a credible online home.' },
  ],
  'landing-pages': [
    { name: 'AI Landing Page Maker', description: 'One-page sites built to convert visitors fast.' },
    { name: 'Product Launch Landing Page', description: 'Announce and sell your new product.' },
    { name: 'Lead Capture Landing Page', description: 'Collect emails and grow your list.' },
    { name: 'Event Registration Page', description: 'Drive signups for your next event.' },
    { name: 'Free Trial Landing Page', description: 'Convert visitors into trial users.' },
    { name: 'Service Landing Page Builder', description: 'Highlight your offer and book calls.' },
    { name: 'Webinar Landing Page', description: 'Fill seats for your live session.' },
    { name: 'Sales Page Generator', description: 'Persuade and close with focused copy.' },
    { name: 'App Download Landing Page', description: 'Get more installs for your mobile app.' },
    { name: 'Crowdfunding Landing Page', description: 'Raise funds with a compelling story.' },
  ],
  portfolios: [
    { name: 'Free Portfolio Generator', description: 'For creatives, in minutes, no fee.' },
    { name: 'Portfolio Generator for Designers', description: 'Present your best work with clarity.' },
    { name: 'Photography Portfolio Builder', description: 'Full-screen galleries that feel premium.' },
    { name: 'Artist Portfolio Website', description: 'Showcase paintings, prints, and process.' },
    { name: 'Developer Portfolio Generator', description: 'Highlight projects and code samples.' },
    { name: 'Writer Portfolio Builder', description: 'Feature articles, books, and clips.' },
    { name: 'Architect Portfolio Site', description: 'Projects and process for design firms.' },
    { name: 'Fashion Portfolio Generator', description: 'Lookbooks and client work presented well.' },
    { name: 'Illustrator Portfolio Builder', description: 'Clean presentation for your illustrations.' },
    { name: 'UX Designer Portfolio Maker', description: 'Case studies that tell the full story.' },
  ],
  blogs: [
    { name: 'Blog Generator for Beginners', description: 'Publish-ready in minutes.' },
    { name: 'Personal Blog Builder', description: 'Share your thoughts with a clean layout.' },
    { name: 'AI Blog Generator for Food Writers', description: 'Recipes and stories, beautifully formatted.' },
    { name: 'Travel Blog Website Builder', description: 'Journals, photos, and itineraries.' },
    { name: 'Tech Blog Generator', description: 'Reviews, tutorials, and industry news.' },
    { name: 'Lifestyle Blog Builder', description: 'Essays, photos, and recommendations.' },
    { name: 'Newsletter Blog Site', description: 'Long-form posts with email signup.' },
    { name: 'AI Blog Maker for Educators', description: 'Lesson plans and teaching resources.' },
    { name: 'Book Review Blog Generator', description: 'Organize and share your reading.' },
  ],
  stores: [
    { name: 'Online Store Builder', description: 'Start selling without writing code.' },
    { name: 'Online Store Builder for Restaurants', description: 'Take orders and offer delivery.' },
    { name: 'Handmade Goods Store Generator', description: 'Sell crafts with beautiful product pages.' },
    { name: 'Digital Products Store Builder', description: 'Sell ebooks, templates, and downloads.' },
    { name: 'Fashion Boutique Store Maker', description: 'Clothing and accessories storefront.' },
    { name: 'Subscription Box Store Generator', description: 'Recurring orders made easy.' },
    { name: 'Art Print Store Builder', description: 'Sell prints with simple checkout.' },
    { name: 'Local Maker Store Generator', description: 'Support local with an online shop.' },
    { name: 'Beauty Products Store Builder', description: 'Skincare and cosmetics storefront.' },
    { name: 'AI Store Builder for Coaches', description: 'Sell courses and digital products.' },
  ],
  'link-in-bio': [
    { name: 'Link-in-Bio Generator', description: 'One link for all your channels.' },
    { name: 'Creator Link-in-Bio Builder', description: 'Link your socials, shop, and content.' },
    { name: 'Musician Link Page Generator', description: 'Streaming, merch, and tour dates.' },
    { name: 'Influencer Link-in-Bio Maker', description: 'Promote partnerships and content.' },
    { name: 'Small Business Link Page', description: 'Connect customers to everything you offer.' },
    { name: 'Podcast Link-in-Bio Builder', description: 'Episodes, transcripts, and support.' },
    { name: 'Artist Link Page Generator', description: 'Portfolio, shop, and social in one.' },
    { name: 'Freelancer Link-in-Bio Maker', description: 'Services, contact, and testimonials.' },
  ],
};

// Helper to create slug from name for links
const makeSlug = (name) => name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

// Build full list with slugs for All Generators (static)
const buildDirectoryData = () => {
  const result = {};
  Object.keys(allGeneratorsByCategory).forEach((cat) => {
    result[cat] = allGeneratorsByCategory[cat].map((g) => ({
      ...g,
      slug: makeSlug(g.name),
      categoryLabel: categoryDefs.find((c) => c.id === cat)?.label || '',
    }));
  });
  return result;
};

const directoryData = buildDirectoryData();

// Category icons as inline SVGs (no external assets)
const CategoryIcon = ({ categoryId, className = '' }) => {
  const common = 'w-6 h-6 text-[#8159BB]';
  switch (categoryId) {
    case 'websites':
      return (
        <svg className={`${common} ${className}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M3 9h18M9 21V9" />
        </svg>
      );
    case 'landing-pages':
      return (
        <svg className={`${common} ${className}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M4 6h16M4 12h10M4 18h16" />
          <circle cx="18" cy="12" r="2" />
        </svg>
      );
    case 'portfolios':
      return (
        <svg className={`${common} ${className}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="3" y="3" width="7" height="7" />
          <rect x="14" y="3" width="7" height="7" />
          <rect x="14" y="14" width="7" height="7" />
          <rect x="3" y="14" width="7" height="7" />
        </svg>
      );
    case 'blogs':
      return (
        <svg className={`${common} ${className}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
          <path d="M4 4.5A2.5 2.5 0 0 1 6.5 7H20v13" />
          <path d="M8 7v13" />
        </svg>
      );
    case 'stores':
      return (
        <svg className={`${common} ${className}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <path d="M9 22V12h6v10" />
        </svg>
      );
    case 'link-in-bio':
      return (
        <svg className={`${common} ${className}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      );
    default:
      return <div className={`${common} ${className}`} />;
  }
};

// Small decorative thumbnail used inside All Generators cards (same per subsection)
const SectionThumbnail = ({ categoryId }) => {
  return (
    <div className="w-full h-20 rounded flex items-center justify-center bg-[#F4F6F8] mb-3" aria-hidden="true">
      <CategoryIcon categoryId={categoryId} className="w-8 h-8" />
    </div>
  );
};

// Card component for directory (no category tag inside All Generators)
const GeneratorCard = ({ gen, categoryId }) => {
  const href = `/generators/${gen.slug}`;
  return (
    <a
      href={href}
      className="group block bg-white border border-[#C6C9CD] rounded-[3px] p-5 hover:border-[#8159BB] hover:shadow-sm transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8159BB] focus-visible:ring-offset-2"
      aria-label={gen.name}
    >
      <SectionThumbnail categoryId={categoryId} />
      <h4 className="font-bold text-[#2E2E2F] text-[15px] leading-tight mb-1.5 group-hover:text-[#8159BB] transition-colors">
        {gen.name}
      </h4>
      <p className="text-[#636972] text-sm leading-snug line-clamp-2">
        {gen.description}
      </p>
    </a>
  );
};

// Featured card (includes category tag because mixed grid)
const FeaturedCard = ({ gen }) => {
  const href = `/generators/${gen.slug}`;
  return (
    <a
      href={href}
      className="group block bg-white border border-[#C6C9CD] rounded-[3px] p-5 hover:border-[#8159BB] hover:shadow-sm transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8159BB] focus-visible:ring-offset-2"
      aria-label={`${gen.name} - ${gen.category}`}
    >
      <div className="mb-3">
        <span className="inline-block text-[11px] font-bold uppercase tracking-[0.5px] px-1.5 py-0.5 rounded-[3px] border border-[#8159BB] text-[#8159BB]">
          {gen.category}
        </span>
      </div>
      <h4 className="font-bold text-[#2E2E2F] text-[15px] leading-tight mb-1.5 group-hover:text-[#8159BB] transition-colors">
        {gen.name}
      </h4>
      <p className="text-[#636972] text-sm leading-snug">
        {gen.description}
      </p>
    </a>
  );
};

// Browse by Category card
const BrowseCategoryCard = ({ cat }) => {
  return (
    <a
      href={cat.anchor}
      className="group block bg-white border border-[#C6C9CD] rounded-[3px] p-5 hover:border-[#8159BB] hover:shadow-sm transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8159BB] focus-visible:ring-offset-2"
    >
      <div className="mb-4">
        <CategoryIcon categoryId={cat.id} />
      </div>
      <div className="flex items-center justify-between">
        <div>
          <div className="font-bold text-[#2E2E2F] text-sm uppercase tracking-[0.5px] mb-1">{cat.label}</div>
          <p className="text-[#636972] text-sm leading-snug pr-6">{cat.desc}</p>
        </div>
        <ArrowRight className="w-4 h-4 text-[#8159BB] flex-shrink-0 group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
      </div>
    </a>
  );
};

// FAQ Accordion Item
const FAQItem = ({ q, a, isOpen, onToggle, id }) => {
  return (
    <div className="border-b border-[#E2E4E7] last:border-b-0">
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex items-center justify-between py-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8159BB] focus-visible:ring-offset-2"
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${id}`}
      >
        <span className="font-bold text-[#2E2E2F] text-[15px] pr-4">{q}</span>
        {isOpen ? (
          <ChevronUp className="w-4 h-4 text-[#8159BB] flex-shrink-0" aria-hidden="true" />
        ) : (
          <ChevronDown className="w-4 h-4 text-[#8159BB] flex-shrink-0" aria-hidden="true" />
        )}
      </button>
      <div
        id={`faq-answer-${id}`}
        className={`overflow-hidden transition-all duration-200 ${isOpen ? 'max-h-40 pb-4' : 'max-h-0'}`}
        aria-hidden={!isOpen}
      >
        <p className="text-[#636972] text-sm leading-relaxed pr-8">{a}</p>
      </div>
    </div>
  );
};

// Main component
const GeneratorsHub = () => {
  const s = strings.en;

  // Search state
  const [searchTerm, setSearchTerm] = useState('');

  // Per-category show all state.
  // IMPORTANT: Default to expanded (true) for every category.
  // This ensures that without JavaScript, or before the effect runs, all cards are visible.
  // The useEffect below will progressively collapse large sections as an enhancement.
  const [showAllMap, setShowAllMap] = useState(() => {
    const initial = {};
    Object.keys(allGeneratorsByCategory).forEach((catId) => {
      initial[catId] = true; // start expanded
    });
    return initial;
  });

  // Progressive collapse after mount (enhancement only).
  // Without JS this never runs and all cards stay visible.
  useEffect(() => {
    // Small delay to let the page paint fully expanded first
    const timer = setTimeout(() => {
      setShowAllMap((prev) => {
        const next = { ...prev };
        Object.keys(allGeneratorsByCategory).forEach((catId) => {
          if (allGeneratorsByCategory[catId].length > COLLAPSED_COUNT) {
            next[catId] = false; // collapse large sections
          }
        });
        return next;
      });
    }, 50);
    return () => clearTimeout(timer);
  }, []);

  // FAQ: first question expanded by default
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const toggleShowAll = (catId) => {
    setShowAllMap((prev) => ({ ...prev, [catId]: !prev[catId] }));
  };

  // Build flat list for search across all
  const allFlatGenerators = useMemo(() => {
    const flat = [];
    Object.keys(directoryData).forEach((catId) => {
      directoryData[catId].forEach((g) => {
        flat.push({ ...g, categoryId: catId });
      });
    });
    return flat;
  }, []);

  // Filtered results
  const filteredByCategory = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();
    if (!term) {
      // No search: return all categories with all items
      return directoryData;
    }

    const result = {};
    Object.keys(directoryData).forEach((catId) => {
      const matches = directoryData[catId].filter((g) => {
        const haystack = `${g.name} ${g.description} ${catId}`.toLowerCase();
        return haystack.includes(term);
      });
      if (matches.length > 0) {
        result[catId] = matches;
      }
    });
    return result;
  }, [searchTerm]);

  const totalMatching = useMemo(() => {
    return Object.values(filteredByCategory).reduce((sum, arr) => sum + arr.length, 0);
  }, [filteredByCategory]);

  const isSearching = searchTerm.trim().length > 0;

  const clearSearch = () => setSearchTerm('');

  // Visible categories in current view (for search collapsing)
  const visibleCategoryIds = Object.keys(filteredByCategory);

  // Number to show when collapsed
  const COLLAPSED_COUNT = 6;

  // Get visible generators for a category (respecting search + showAll)
  const getVisibleGens = (catId) => {
    const gens = filteredByCategory[catId] || [];
    const showAll = !!showAllMap[catId];
    if (showAll || gens.length <= COLLAPSED_COUNT) return gens;
    return gens.slice(0, COLLAPSED_COUNT);
  };

  // For "Show all" label we need the full count in current filter
  const getFullCount = (catId) => {
    return (filteredByCategory[catId] || []).length;
  };

  // Handle keyboard for search (Escape clears)
  const handleSearchKeyDown = (e) => {
    if (e.key === 'Escape') {
      clearSearch();
    }
  };

  // Ensure focus styles are visible (already handled via Tailwind ring)

  // Small progressive collapse: after mount, if not searching, we can leave default collapsed for categories with many items.
  // But to satisfy "progressively collapse", we start with showAll false for all.
  // All cards are still in the JSX source below.

  return (
    <div className="min-h-screen bg-white text-[#2E2E2F] font-sans">
      {/* Section 0: Top bar */}
      <header className="border-b border-[#E2E4E7] bg-white">
        <div className="max-w-[1200px] mx-auto px-5 h-14 flex items-center">
          <a href="/" className="font-bold text-lg tracking-[-0.2px] text-[#2E2E2F] hover:text-[#8159BB] transition-colors" style={{ fontFamily: "'Josefin Sans', 'Poppins', sans-serif" }}>
            {s.topbar.logo}
          </a>
        </div>
      </header>

      {/* Section 1: Breadcrumb */}
      <nav aria-label="Breadcrumb" className="max-w-[1200px] mx-auto px-5 pt-3 pb-2">
        <ol className="flex items-center text-sm text-[#636972]">
          <li>
            <a href="/" className="hover:text-[#8159BB] transition-colors">{s.breadcrumb.home}</a>
          </li>
          <li className="mx-2 text-[#8159BB]" aria-hidden="true">›</li>
          <li className="text-[#636972]" aria-current="page">{s.breadcrumb.current}</li>
        </ol>
      </nav>

      {/* Section 2: Hero */}
      <section className="max-w-[1200px] mx-auto px-5 pt-8 pb-12 md:pt-12 md:pb-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left column */}
          <div>
            <h1 className="text-[32px] md:text-[44px] leading-[1.15] font-bold tracking-[-0.4px] mb-4" style={{ fontFamily: "'Josefin Sans', 'Poppins', sans-serif" }}>
              <span className="block text-[#2E2E2F] uppercase">{s.hero.h1Line1}</span>
              <span
                className="block uppercase bg-clip-text text-transparent"
                style={{
                  backgroundImage: 'linear-gradient(90deg, #7671FF 0%, #CB0C9F 100%)',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                }}
              >
                {s.hero.h1Line2}
              </span>
            </h1>

            <p className="text-[#636972] text-[15px] leading-relaxed max-w-[42ch] mb-6">
              {s.hero.subheadline}
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={s.ctaBuilder}
                className="inline-flex items-center justify-center h-11 px-6 rounded-[4px] text-sm font-bold uppercase tracking-[0.3px] text-white transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#8159BB]"
                style={{ background: 'linear-gradient(90deg, #7671FF 0%, #CB0C9F 100%)' }}
              >
                {s.hero.ctaPrimary}
              </a>
              <a
                href="#all-generators"
                className="inline-flex items-center justify-center h-11 px-6 rounded-[4px] text-sm font-bold uppercase tracking-[0.3px] border border-[#8159BB] text-[#8159BB] hover:bg-[#F4F6F8] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#8159BB]"
              >
                {s.hero.ctaSecondary}
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
              aria-hidden="true"
              className="w-full max-w-[420px] h-auto"
            >
              {/* Soft purple wash background */}
              <defs>
                <radialGradient id="heroWash" cx="50%" cy="40%" r="70%" fx="50%" fy="35%">
                  <stop offset="0%" stopColor="#8159BB" stopOpacity="0.08" />
                  <stop offset="100%" stopColor="#8159BB" stopOpacity="0" />
                </radialGradient>
              </defs>
              <rect x="0" y="0" width="420" height="280" rx="12" fill="url(#heroWash)" />

              {/* Browser frame */}
              <rect x="40" y="30" width="340" height="220" rx="8" fill="#FFFFFF" stroke="#C6C9CD" strokeWidth="1.5" />
              {/* Browser top bar */}
              <rect x="40" y="30" width="340" height="28" rx="8" fill="#F4F6F8" />
              <rect x="40" y="50" width="340" height="1" fill="#E2E4E7" />

              {/* Traffic lights */}
              <circle cx="58" cy="44" r="4" fill="#E2E4E7" />
              <circle cx="72" cy="44" r="4" fill="#E2E4E7" />
              <circle cx="86" cy="44" r="4" fill="#E2E4E7" />

              {/* URL bar */}
              <rect x="100" y="38" width="200" height="14" rx="3" fill="#E2E4E7" />

              {/* Content area - line art website mockup */}
              {/* Hero block */}
              <rect x="60" y="70" width="300" height="70" rx="4" fill="#F4F6F8" />
              <rect x="78" y="85" width="140" height="10" rx="2" fill="#C6C9CD" />
              <rect x="78" y="102" width="90" height="8" rx="2" fill="#C6C9CD" />
              <rect x="78" y="118" width="60" height="14" rx="3" fill="#8159BB" opacity="0.25" />

              {/* Two column content */}
              <rect x="60" y="155" width="140" height="80" rx="4" fill="#F4F6F8" />
              <rect x="78" y="168" width="100" height="8" rx="2" fill="#C6C9CD" />
              <rect x="78" y="182" width="80" height="8" rx="2" fill="#C6C9CD" />
              <rect x="78" y="196" width="60" height="8" rx="2" fill="#C6C9CD" />

              <rect x="220" y="155" width="140" height="80" rx="4" fill="#F4F6F8" />
              <rect x="238" y="168" width="100" height="8" rx="2" fill="#C6C9CD" />
              <rect x="238" y="182" width="80" height="8" rx="2" fill="#C6C9CD" />
              <rect x="238" y="196" width="60" height="8" rx="2" fill="#C6C9CD" />

              {/* Subtle AI gradient accent line */}
              <rect x="60" y="248" width="120" height="3" rx="2" fill="#7671FF" />
              <rect x="60" y="248" width="60" height="3" rx="2" fill="#CB0C9F" />
            </svg>
          </div>
        </div>
      </section>

      {/* Section 3: Featured Generators */}
      <section className="bg-[#F4F6F8] py-10">
        <div className="max-w-[1200px] mx-auto px-5">
          <h2 className="text-center text-[26px] md:text-[28px] font-bold uppercase tracking-[-0.2px] mb-1" style={{ fontFamily: "'Josefin Sans', 'Poppins', sans-serif", color: '#4B5056' }}>
            {s.featured.heading}
          </h2>
          <p className="text-center text-[#636972] text-sm mb-8">{s.featured.subheading}</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {featuredGenerators.map((gen, idx) => (
              <FeaturedCard key={idx} gen={gen} />
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Browse by Category */}
      <section className="max-w-[1200px] mx-auto px-5 py-12">
        <h2 className="text-[26px] md:text-[28px] font-bold uppercase tracking-[-0.2px] mb-6" style={{ fontFamily: "'Josefin Sans', 'Poppins', sans-serif", color: '#4B5056' }}>
          {s.browseByCategory.heading}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {categoryDefs.map((cat) => (
            <BrowseCategoryCard key={cat.id} cat={cat} />
          ))}
        </div>
      </section>

      {/* Section 5: All Generators (SEO heart) */}
      <section id="all-generators" className="bg-white border-t border-[#E2E4E7]">
        <div className="max-w-[1200px] mx-auto px-5 py-12">
          <h2 className="text-[26px] md:text-[28px] font-bold uppercase tracking-[-0.2px] mb-1" style={{ fontFamily: "'Josefin Sans', 'Poppins', sans-serif", color: '#4B5056' }}>
            {s.allGenerators.heading}
          </h2>
          <p className="text-[#636972] text-sm mb-6">{s.allGenerators.subheading}</p>

          {/* Search input */}
          <div className="mb-6">
            <label htmlFor="generator-search" className="sr-only">{s.allGenerators.searchLabel}</label>
            <div className="relative max-w-[480px]">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#636972]" aria-hidden="true" />
              <input
                id="generator-search"
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={handleSearchKeyDown}
                placeholder={s.allGenerators.searchPlaceholder}
                aria-label={s.allGenerators.searchLabel}
                className="w-full pl-9 pr-4 py-2.5 text-sm border border-[#C6C9CD] rounded-[4px] focus:outline-none focus:border-[#8159BB] placeholder:text-[#9AA0A6] bg-white"
              />
            </div>
            {isSearching && (
              <div className="mt-2 text-sm text-[#636972]">
                {s.allGenerators.resultCount(totalMatching)}
              </div>
            )}
          </div>

          {/* Empty state */}
          {isSearching && totalMatching === 0 && (
            <div className="py-8 text-center">
              <p className="text-[#636972] mb-3">{s.allGenerators.emptyTitle}</p>
              <a href={s.ctaBuilder} className="text-[#8159BB] hover:underline text-sm font-medium">
                {s.allGenerators.emptyCta}
              </a>
              <div className="mt-4">
                <button
                  type="button"
                  onClick={clearSearch}
                  className="text-sm px-4 py-1.5 rounded border border-[#C6C9CD] hover:bg-[#F4F6F8]"
                >
                  Clear search
                </button>
              </div>
            </div>
          )}

          {/* Categorized subsections */}
          {visibleCategoryIds.length > 0 && (
            <div className="space-y-10">
              {categoryDefs
                .filter((c) => visibleCategoryIds.includes(c.id))
                .map((catDef) => {
                  const catId = catDef.id;
                  const gens = filteredByCategory[catId] || [];
                  const visibleGens = getVisibleGens(catId);
                  const fullCount = getFullCount(catId);
                  const isCollapsed = !showAllMap[catId] && fullCount > COLLAPSED_COUNT;
                  const showToggle = fullCount > COLLAPSED_COUNT;

                  return (
                    <div key={catId} id={catId.replace('landing-pages', 'landing-pages').replace('link-in-bio', 'link-in-bio')}>
                      <h3 className="text-lg font-bold uppercase tracking-[0.3px] mb-1" style={{ fontFamily: "'Josefin Sans', 'Poppins', sans-serif", color: '#4B5056' }}>
                        {catDef.label}
                      </h3>
                      <p className="text-sm text-[#636972] mb-4">{catDef.desc}</p>

                      {/* Grid - ALL cards always rendered in JSX for source visibility.
                          When collapsed, extra cards are hidden via CSS (not removed from DOM). */}
                      <div
                        id={`${catId}-grid`}
                        className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 generators-grid ${isCollapsed ? 'is-collapsed' : ''}`}
                      >
                        {gens.map((gen, idx) => (
                          <div
                            key={`${catId}-${idx}`}
                            className={isCollapsed && idx >= COLLAPSED_COUNT ? 'generator-card-hidden' : ''}
                          >
                            <GeneratorCard gen={gen} categoryId={catId} />
                          </div>
                        ))}
                      </div>

                      {/* Show all toggle - only when needed */}
                      {showToggle && (
                        <button
                          type="button"
                          onClick={() => toggleShowAll(catId)}
                          className="mt-3 text-sm font-medium text-[#8159BB] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8159BB] focus-visible:ring-offset-2"
                          aria-expanded={!isCollapsed}
                          aria-controls={`${catId}-grid`}
                        >
                          {isCollapsed
                            ? s.allGenerators.showAll(fullCount)
                            : s.allGenerators.showLess}
                        </button>
                      )}
                    </div>
                  );
                })}
            </div>
          )}
        </div>
      </section>

      {/* Section 6: How It Works */}
      <section className="max-w-[1200px] mx-auto px-5 py-12 border-t border-[#E2E4E7]">
        <h2 className="text-[26px] md:text-[28px] font-bold uppercase tracking-[-0.2px] mb-8 text-center" style={{ fontFamily: "'Josefin Sans', 'Poppins', sans-serif", color: '#4B5056' }}>
          {s.howItWorks.heading}
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {s.howItWorks.steps.map((step, index) => (
            <div key={index} className="flex flex-col items-start">
              <div className="w-8 h-8 rounded-full bg-[#8159BB] text-white flex items-center justify-center text-sm font-bold mb-4">
                {step.number}
              </div>
              <div className="font-bold uppercase tracking-[0.5px] text-sm mb-1.5">{step.title}</div>
              <p className="text-[#636972] text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 7: Why Strikingly */}
      <section className="bg-[#F4F6F8] py-12">
        <div className="max-w-[1200px] mx-auto px-5">
          <h2 className="text-[26px] md:text-[28px] font-bold uppercase tracking-[-0.2px] mb-8 text-center" style={{ fontFamily: "'Josefin Sans', 'Poppins', sans-serif", color: '#4B5056' }}>
            {s.whyStrikingly.heading}
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {s.whyStrikingly.items.map((item, idx) => (
              <div key={idx} className="bg-white border border-[#C6C9CD] rounded-[3px] p-6">
                <div className="mb-4 text-[#8159BB]">
                  {item.icon === 'zap' && (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>
                  )}
                  {item.icon === 'smartphone' && (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="5" y="2" width="14" height="20" rx="2" ry="2" /><line x1="12" y1="18" x2="12" y2="18" /></svg>
                  )}
                  {item.icon === 'gift' && (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="20 12 20 22 4 22 4 12" /><rect x="2" y="7" width="20" height="5" /><line x1="12" y1="22" x2="12" y2="7" /><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" /><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" /></svg>
                  )}
                </div>
                <div className="font-bold uppercase tracking-[0.5px] text-sm mb-1.5">{item.title}</div>
                <p className="text-[#636972] text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 8: FAQ */}
      <section className="max-w-[1200px] mx-auto px-5 py-12">
        <h2 className="text-[26px] md:text-[28px] font-bold uppercase tracking-[-0.2px] mb-6" style={{ fontFamily: "'Josefin Sans', 'Poppins', sans-serif", color: '#4B5056' }}>
          {s.faq.heading}
        </h2>

        <div className="max-w-[780px] border border-[#E2E4E7] rounded-[3px] bg-white">
          {s.faq.questions.map((item, index) => (
            <FAQItem
              key={index}
              id={index}
              q={item.q}
              a={item.a}
              isOpen={openFaqIndex === index}
              onToggle={() => setOpenFaqIndex(openFaqIndex === index ? -1 : index)}
            />
          ))}
        </div>
      </section>

      {/* Section 9: Closing CTA */}
      <section className="border-t border-[#E2E4E7] py-12 bg-white">
        <div className="max-w-[1200px] mx-auto px-5 text-center">
          <h2 className="text-[26px] md:text-[28px] font-bold uppercase tracking-[-0.2px] mb-2" style={{ fontFamily: "'Josefin Sans', 'Poppins', sans-serif", color: '#4B5056' }}>
            {s.closing.headline}
          </h2>
          <p className="text-[#636972] mb-6 text-sm">{s.closing.sub}</p>
          <a
            href={s.ctaBuilder}
            className="inline-flex items-center justify-center h-11 px-8 rounded-[4px] text-sm font-bold uppercase tracking-[0.3px] text-white transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#8159BB]"
            style={{ background: 'linear-gradient(90deg, #7671FF 0%, #CB0C9F 100%)' }}
          >
            {s.closing.cta}
          </a>
        </div>
      </section>

      {/* Section 10: Footer */}
      <footer className="bg-[#F4F6F8] border-t border-[#E2E4E7] pt-10 pb-8 text-sm">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-y-8">
            {/* Logo */}
            <div>
              <a href="/" className="font-bold text-base tracking-[-0.2px] text-[#2E2E2F]" style={{ fontFamily: "'Josefin Sans', 'Poppins', sans-serif" }}>
                strikingly AI
              </a>
            </div>

            {/* Columns */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-10 gap-y-8 text-sm">
              {s.footer.columns.map((col, idx) => (
                <div key={idx}>
                  <div className="font-bold text-[#2E2E2F] mb-2 text-xs tracking-[0.5px] uppercase">{col.title}</div>
                  <ul className="space-y-1.5">
                    {col.links.map((link, lidx) => (
                      <li key={lidx}>
                        <a href={link.href} className="text-[#636972] hover:text-[#8159BB] transition-colors">
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 pt-6 border-t border-[#E2E4E7] text-[#636972] text-xs">
            {s.footer.copyright}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default GeneratorsHub;
