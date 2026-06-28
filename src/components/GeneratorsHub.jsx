import React, { useEffect, useRef, useState, useCallback } from 'react';

// ============================================================
// i18n strings - single source of truth for all user-visible text
// ============================================================
const strings = {
  en: {
    // Top bar
    logoAlt: 'Strikingly AI',

    // Breadcrumb
    breadcrumbHome: 'Strikingly',
    breadcrumbCurrent: 'AI Generators',

    // Hero
    heroLine1: 'BUILD ANY KIND OF SITE',
    heroLine2: 'WITH AI, IN AN INSTANT',
    heroSubheadline: 'Browse the right generator for what you\'re building, or jump straight into our AI site builder.',
    ctaPrimary: 'START BUILDING - IT\'S FREE',
    ctaSecondary: 'BROWSE GENERATORS',

    // Featured
    featuredHeading: 'FEATURED GENERATORS',
    featuredSubheading: 'A few common starting points.',

    // Browse by Category
    browseHeading: 'BROWSE BY CATEGORY',
    websitesDesc: 'AI-built business and personal sites for any goal.',
    landingPagesDesc: 'Single-page sites built to convert visitors fast.',
    portfoliosDesc: 'Showcase your work with a clean, focused site.',
    blogsDesc: 'Publish-ready blogs with built-in SEO basics.',
    storesDesc: 'Sell products online with payments built in.',
    linkInBioDesc: 'One link, all your places. Made for creators.',

    // All Generators
    allGeneratorsHeading: 'ALL GENERATORS',
    allGeneratorsSubheading: 'Sixty-plus generators, organized by what you\'re building.',
    searchPlaceholder: 'Search generators...',
    searchLabel: 'Search generators',
    matchCount: (n) => `${n} generator${n !== 1 ? 's' : ''} match`,
    noResults: 'No generators match your search.',
    clearSearch: 'Clear search',
    cantFindIt: 'Can\'t find it? Start with our AI builder.',

    // Category subsection descriptions
    websitesSubDesc: 'Business and personal websites for every purpose.',
    landingPagesSubDesc: 'High-converting single-page sites.',
    portfoliosSubDesc: 'Professional portfolio and showcase sites.',
    blogsSubDesc: 'Blogs and content sites with SEO built in.',
    storesSubDesc: 'E-commerce and online store builders.',
    linkInBioSubDesc: 'Creator link-in-bio and landing pages.',

    // Show all buttons
    showAll: (n) => `Show all ${n} generators`,
    showLess: 'Show less',

    // How It Works
    howItWorksHeading: 'HOW IT WORKS',
    step1Title: 'PICK A GENERATOR',
    step1Body: 'Browse by category or search to find one that fits your goal.',
    step2Title: 'DESCRIBE YOUR SITE',
    step2Body: 'Tell our AI builder about your business in a sentence or two.',
    step3Title: 'GENERATE AND PUBLISH',
    step3Body: 'Get a fully built site in seconds. Customize anything, then go live.',

    // Why Strikingly
    whyHeading: 'WHY STRIKINGLY',
    why1Title: 'LIVE IN SECONDS',
    why1Body: 'Describe your site, we build it. No setup, no learning curve.',
    why2Title: 'MOBILE BY DEFAULT',
    why2Body: 'Every generator produces responsive sites that work on any device.',
    why3Title: 'FREE TO START',
    why3Body: 'Generate, customize, and publish without a credit card.',

    // FAQ
    faqHeading: 'FREQUENTLY ASKED QUESTIONS',
    faq1Q: 'What is an AI site generator?',
    faq1A: 'An AI site generator is a tool that uses artificial intelligence to build a complete website based on your description. Instead of choosing templates and dragging elements into place, you simply tell the AI what kind of site you need, and it generates the layout, content, and design for you.',
    faq2Q: 'How is a generator different from a template?',
    faq2A: 'A template is a static starting point that you customize manually. A generator is dynamic: it builds a unique site from scratch based on your input. Templates require you to make every design decision; generators handle the initial build so you can focus on refining the result.',
    faq3Q: 'Are these generators free to use?',
    faq3A: 'Yes. You can browse generators, generate a site, and publish it without paying. Strikingly offers a free tier that is fully functional for personal and small-business use. Paid plans unlock custom domains, advanced features, and higher storage.',
    faq4Q: 'What kinds of sites can I build?',
    faq4A: 'You can build business websites, landing pages, portfolios, blogs, online stores, and link-in-bio pages. Each generator is tuned for its category, so a portfolio generator produces a different layout and content structure than a store generator.',
    faq5Q: 'Can I customize what the generator produces?',
    faq5A: 'Absolutely. The generator gives you a solid starting point, and then you can edit text, swap images, adjust colors, rearrange sections, and add your own pages. The AI handles the heavy lifting; you keep full creative control.',
    faq6Q: 'Do generated sites work on mobile?',
    faq6A: 'Yes. Every site produced by Strikingly\'s generators is responsive by default. Pages automatically adapt to phones, tablets, and desktops without any extra work from you.',

    // Closing CTA
    closingHeading: 'READY TO BUILD?',
    closingSub: 'Pick a generator above, or jump straight into our AI builder.',
    closingCta: 'START WITH AI BUILDER',

    // Footer
    footerProduct: 'Product',
    footerCompany: 'Company',
    footerResources: 'Resources',
    footerSupport: 'Support',
    footerPricing: 'Pricing',
    footerTemplates: 'Templates',
    footerAbout: 'About',
    footerBlog: 'Blog',
    footerCareers: 'Careers',
    footerContact: 'Contact',
    footerHelpCenter: 'Help Center',
    footerCommunity: 'Community',
    footerTerms: 'Terms',
    footerPrivacy: 'Privacy',
    footerCopyright: (year) => `© ${year} Strikingly. All rights reserved.`,
  },
};

// ============================================================
// Generator data
// ============================================================
const featuredGenerators = [
  { name: 'AI Website Generator', slug: 'ai-website-generator', description: 'Describe your business, get a full site', category: 'Website' },
  { name: 'Free Portfolio Generator', slug: 'free-portfolio-generator', description: 'For creatives, in minutes, no fee', category: 'Portfolio' },
  { name: 'AI Landing Page Maker', slug: 'ai-landing-page-maker', description: 'One-page sites built to convert', category: 'Landing Page' },
  { name: 'Online Store Builder', slug: 'online-store-builder', description: 'Start selling without writing code', category: 'Store' },
  { name: 'Link-in-Bio Generator', slug: 'link-in-bio-generator', description: 'One link for all your channels', category: 'Link-in-Bio' },
  { name: 'One-Page Website Builder', slug: 'one-page-website-builder', description: 'Simple sites, single scroll', category: 'Website' },
  { name: 'Wedding Website Generator', slug: 'wedding-website-generator', description: 'Share your day with guests', category: 'Website' },
  { name: 'Restaurant Website Builder', slug: 'restaurant-website-generator', description: 'Menu, hours, reservations, done', category: 'Website' },
  { name: 'Blog Generator for Beginners', slug: 'blog-generator-for-beginners', description: 'Publish-ready in minutes', category: 'Blog' },
];

const categoryData = {
  websites: {
    title: 'Websites',
    slug: 'websites',
    description: 'Business and personal websites for every purpose.',
    icon: 'globe',
    generators: [
      { name: 'AI Website Generator', slug: 'ai-website-generator', description: 'Describe your business, get a full site' },
      { name: 'Free Website Builder for Photographers', slug: 'free-website-builder-for-photographers', description: 'Showcase your portfolio with stunning galleries' },
      { name: 'One-Page Wedding Website Builder', slug: 'one-page-wedding-website-builder', description: 'Share your day with guests in style' },
      { name: 'Restaurant Website Builder', slug: 'restaurant-website-builder', description: 'Menu, hours, reservations, done' },
      { name: 'AI Website Builder for Restaurants', slug: 'ai-website-builder-for-restaurants', description: 'Smart sites that bring diners in' },
      { name: 'Beautiful Website Builder', slug: 'beautiful-website-builder', description: 'Polished designs that impress visitors' },
      { name: 'No-Code Website Builder', slug: 'no-code-website-builder', description: 'Build a site without touching code' },
      { name: 'AI Website Builder for Small Business', slug: 'ai-website-builder-for-small-business', description: 'Launch fast, look professional' },
      { name: 'Free Website Builder for Beginners', slug: 'free-website-builder-for-beginners', description: 'Get online in minutes, no experience needed' },
      { name: 'One-Page Website Builder', slug: 'one-page-website-builder', description: 'Simple sites, single scroll' },
      { name: 'AI Website Builder for Photographers', slug: 'ai-website-builder-for-photographers', description: 'Image-forward layouts that sell' },
      { name: 'Website Builder for Yoga Instructors', slug: 'website-builder-for-yoga-instructors', description: 'Calm, clean sites for wellness brands' },
    ],
  },
  landingPages: {
    title: 'Landing Pages',
    slug: 'landing-pages',
    description: 'High-converting single-page sites.',
    icon: 'target',
    generators: [
      { name: 'AI Landing Page Maker', slug: 'ai-landing-page-maker', description: 'One-page sites built to convert' },
      { name: 'Free Landing Page Builder', slug: 'free-landing-page-builder', description: 'Launch a conversion page in minutes' },
      { name: 'AI Landing Page Generator', slug: 'ai-landing-page-generator', description: 'Describe your offer, get a page' },
      { name: 'Landing Page Builder for Startups', slug: 'landing-page-builder-for-startups', description: 'Pages that capture early signups' },
      { name: 'One-Page Landing Page Builder', slug: 'one-page-landing-page-builder', description: 'Focused, scroll-driven conversion pages' },
      { name: 'Landing Page Builder for Products', slug: 'landing-page-builder-for-products', description: 'Showcase features and drive sales' },
      { name: 'AI Landing Page Builder for SaaS', slug: 'ai-landing-page-builder-for-saas', description: 'Built for software signups and demos' },
      { name: 'Beautiful Landing Page Builder', slug: 'beautiful-landing-page-builder', description: 'Design-forward pages that convert' },
      { name: 'Landing Page Builder for Events', slug: 'landing-page-builder-for-events', description: 'Promote and sell tickets fast' },
      { name: 'No-Code Landing Page Builder', slug: 'no-code-landing-page-builder', description: 'Build without writing a single line' },
      { name: 'Landing Page Builder for Apps', slug: 'landing-page-builder-for-apps', description: 'App-store-ready download pages' },
      { name: 'AI Landing Page Builder for Coaches', slug: 'ai-landing-page-builder-for-coaches', description: 'Pages that book consultations' },
    ],
  },
  portfolios: {
    title: 'Portfolios',
    slug: 'portfolios',
    description: 'Professional portfolio and showcase sites.',
    icon: 'briefcase',
    generators: [
      { name: 'Free Portfolio Generator', slug: 'free-portfolio-generator', description: 'For creatives, in minutes, no fee' },
      { name: 'AI Portfolio Generator', slug: 'ai-portfolio-generator', description: 'Describe your work, get a portfolio' },
      { name: 'Portfolio Generator for Designers', slug: 'portfolio-generator-for-designers', description: 'Showcase projects with visual impact' },
      { name: 'Portfolio Builder for Photographers', slug: 'portfolio-builder-for-photographers', description: 'Image-first layouts for photo stories' },
      { name: 'Portfolio Generator for Artists', slug: 'portfolio-generator-for-artists', description: 'Galleries that let art take center stage' },
      { name: 'One-Page Portfolio Builder', slug: 'one-page-portfolio-builder', description: 'Concise, scroll-driven showcases' },
      { name: 'Portfolio Builder for Writers', slug: 'portfolio-builder-for-writers', description: 'Clean typography for published work' },
      { name: 'AI Portfolio Builder for Architects', slug: 'ai-portfolio-builder-for-architects', description: 'Structured layouts for project stories' },
      { name: 'Portfolio Generator for Students', slug: 'portfolio-generator-for-students', description: 'Academic and creative work in one place' },
      { name: 'Beautiful Portfolio Builder', slug: 'beautiful-portfolio-builder', description: 'Polished, gallery-ready designs' },
      { name: 'Portfolio Builder for Freelancers', slug: 'portfolio-builder-for-freelancers', description: 'Convert browsers into clients' },
      { name: 'No-Code Portfolio Builder', slug: 'no-code-portfolio-builder', description: 'Build your showcase without code' },
    ],
  },
  blogs: {
    title: 'Blogs',
    slug: 'blogs',
    description: 'Blogs and content sites with SEO built in.',
    icon: 'pen-tool',
    generators: [
      { name: 'Blog Generator for Beginners', slug: 'blog-generator-for-beginners', description: 'Publish-ready in minutes' },
      { name: 'AI Blog Generator', slug: 'ai-blog-generator', description: 'Generate posts from a topic or outline' },
      { name: 'Blog Builder for Writers', slug: 'blog-builder-for-writers', description: 'Clean reading experiences for long-form' },
      { name: 'Blog Generator for Small Business', slug: 'blog-generator-for-small-business', description: 'Content that drives traffic and trust' },
      { name: 'Free Blog Builder', slug: 'free-blog-builder', description: 'Start writing without paying a cent' },
      { name: 'Blog Builder for Photographers', slug: 'blog-builder-for-photographers', description: 'Visual-first storytelling layouts' },
      { name: 'AI Blog Builder for Marketers', slug: 'ai-blog-builder-for-marketers', description: 'SEO-optimized posts at scale' },
      { name: 'Blog Generator for Food Bloggers', slug: 'blog-generator-for-food-bloggers', description: 'Recipe-ready layouts with rich media' },
      { name: 'Blog Builder for Travel Bloggers', slug: 'blog-builder-for-travel-bloggers', description: 'Map-friendly, photo-heavy designs' },
      { name: 'One-Page Blog Builder', slug: 'one-page-blog-builder', description: 'Minimalist single-post layouts' },
      { name: 'Blog Builder for Tech Writers', slug: 'blog-builder-for-tech-writers', description: 'Code-friendly, clean typography' },
      { name: 'Beautiful Blog Builder', slug: 'beautiful-blog-builder', description: 'Elegant reading experiences' },
    ],
  },
  stores: {
    title: 'Online Stores',
    slug: 'stores',
    description: 'E-commerce and online store builders.',
    icon: 'shopping-bag',
    generators: [
      { name: 'Online Store Builder', slug: 'online-store-builder', description: 'Start selling without writing code' },
      { name: 'AI Store Builder', slug: 'ai-store-builder', description: 'Describe your products, get a store' },
      { name: 'Online Store Builder for Photographers', slug: 'online-store-builder-for-photographers', description: 'Sell prints and digital downloads' },
      { name: 'Store Builder for Restaurants', slug: 'store-builder-for-restaurants', description: 'Take orders and payments online' },
      { name: 'Free Online Store Builder', slug: 'free-online-store-builder', description: 'Launch a shop without upfront cost' },
      { name: 'Store Builder for Artists', slug: 'store-builder-for-artists', description: 'Sell originals and prints directly' },
      { name: 'AI Store Builder for Clothing Brands', slug: 'ai-store-builder-for-clothing-brands', description: 'Fashion-forward storefronts' },
      { name: 'Store Builder for Jewelry', slug: 'store-builder-for-jewelry', description: 'Elegant product pages for fine goods' },
      { name: 'One-Page Store Builder', slug: 'one-page-store-builder', description: 'Simple checkout-focused layouts' },
      { name: 'Store Builder for Handmade Goods', slug: 'store-builder-for-handmade-goods', description: 'Warm, craft-focused shop designs' },
      { name: 'No-Code Store Builder', slug: 'no-code-store-builder', description: 'Build a shop without touching code' },
      { name: 'Store Builder for Digital Products', slug: 'store-builder-for-digital-products', description: 'Instant delivery, zero inventory' },
    ],
  },
  'link-in-bio': {
    title: 'Link-in-Bio',
    slug: 'link-in-bio',
    description: 'Creator link-in-bio and landing pages.',
    icon: 'link',
    generators: [
      { name: 'Link-in-Bio Generator', slug: 'link-in-bio-generator', description: 'One link for all your channels' },
      { name: 'AI Link-in-Bio Builder', slug: 'ai-link-in-bio-builder', description: 'Generate a bio page from your handle' },
      { name: 'Link-in-Bio for Instagram', slug: 'link-in-bio-for-instagram', description: 'Optimized for Instagram profiles' },
      { name: 'Link-in-Bio for TikTok', slug: 'link-in-bio-for-tiktok', description: 'Fast-loading pages for TikTok traffic' },
      { name: 'Link-in-Bio for Creators', slug: 'link-in-bio-for-creators', description: 'Monetize your audience in one tap' },
      { name: 'Free Link-in-Bio Builder', slug: 'free-link-in-bio-builder', description: 'No cost, full customization' },
      { name: 'Link-in-Bio for Musicians', slug: 'link-in-bio-for-musicians', description: 'Streaming, tickets, and merch in one place' },
      { name: 'Link-in-Bio for Coaches', slug: 'link-in-bio-for-coaches', description: 'Bookings, payments, and content' },
      { name: 'Beautiful Link-in-Bio Builder', slug: 'beautiful-link-in-bio-builder', description: 'Design-forward pages that match your brand' },
      { name: 'Link-in-Bio for Podcasters', slug: 'link-in-bio-for-podcasters', description: 'Episodes, sponsors, and subscribe links' },
      { name: 'One-Page Link-in-Bio Builder', slug: 'one-page-link-in-bio-builder', description: 'Minimal, fast, and focused' },
      { name: 'AI Link-in-Bio for Influencers', slug: 'ai-link-in-bio-for-influencers', description: 'Personalized pages that grow your reach' },
    ],
  },
};

// ============================================================
// SVG illustrations
// ============================================================
const HeroIllustration = () => (
  <svg
    width="520"
    height="400"
    viewBox="0 0 520 400"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    className="hero-illustration"
  >
    {/* Browser window */}
    <rect x="40" y="40" width="440" height="300" rx="12" fill="#F4F6F8" stroke="#C6C9CD" strokeWidth="2" />
    <rect x="40" y="40" width="440" height="32" rx="12" fill="#E2E4E7" />
    <circle cx="68" cy="56" r="6" fill="#CB0C9F" opacity="0.6" />
    <circle cx="92" cy="56" r="6" fill="#7671FF" opacity="0.6" />
    <circle cx="116" cy="56" r="6" fill="#8159BB" opacity="0.6" />
    {/* Content lines */}
    <rect x="64" y="96" width="180" height="12" rx="6" fill="#C6C9CD" />
    <rect x="64" y="120" width="120" height="8" rx="4" fill="#E2E4E7" />
    <rect x="64" y="140" width="200" height="8" rx="4" fill="#E2E4E7" />
    <rect x="64" y="160" width="160" height="8" rx="4" fill="#E2E4E7" />
    {/* Image placeholder */}
    <rect x="64" y="192" width="392" height="120" rx="8" fill="#E2E4E7" />
    <rect x="64" y="192" width="392" height="120" rx="8" fill="url(#heroGrad)" opacity="0.15" />
    <rect x="180" y="228" width="160" height="48" rx="8" fill="#8159BB" opacity="0.2" />
    <defs>
      <linearGradient id="heroGrad" x1="0" y1="0" x2="520" y2="400" gradientUnits="userSpaceOnUse">
        <stop stopColor="#7671FF" />
        <stop offset="1" stopColor="#CB0C9F" />
      </linearGradient>
    </defs>
  </svg>
);

const CategoryIcon = ({ type }) => {
  const icons = {
    globe: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <circle cx="24" cy="24" r="20" stroke="#8159BB" strokeWidth="2" />
        <ellipse cx="24" cy="24" rx="8" ry="20" stroke="#8159BB" strokeWidth="2" />
        <line x1="4" y1="24" x2="44" y2="24" stroke="#8159BB" strokeWidth="2" />
      </svg>
    ),
    target: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <circle cx="24" cy="24" r="20" stroke="#8159BB" strokeWidth="2" />
        <circle cx="24" cy="24" r="12" stroke="#8159BB" strokeWidth="2" />
        <circle cx="24" cy="24" r="4" fill="#8159BB" />
      </svg>
    ),
    briefcase: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <rect x="8" y="16" width="32" height="24" rx="4" stroke="#8159BB" strokeWidth="2" />
        <path d="M16 16V12a8 8 0 0 1 16 0v4" stroke="#8159BB" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    'pen-tool': (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <path d="M12 36l-4 4 12-12-8-8 12 12-4 4" stroke="#8159BB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="28" y1="12" x2="36" y2="20" stroke="#8159BB" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    'shopping-bag': (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <path d="M12 16h24l-2 20H14L12 16z" stroke="#8159BB" strokeWidth="2" strokeLinejoin="round" />
        <path d="M18 16c0-4 3-8 6-8s6 4 6 8" stroke="#8159BB" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    link: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <path d="M24 32c6 0 10-4 10-10s-4-10-10-10" stroke="#8159BB" strokeWidth="2" strokeLinecap="round" />
        <path d="M24 16c-6 0-10 4-10 10s4 10 10 10" stroke="#8159BB" strokeWidth="2" strokeLinecap="round" />
        <line x1="18" y1="24" x2="30" y2="24" stroke="#8159BB" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  };
  return icons[type] || icons.globe;
};

const ChevronRight = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" className="chevron-right">
    <path d="M7 4l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const SearchIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="search-icon">
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

// ============================================================
// Main component
// ============================================================
export default function GeneratorsHub() {
  const [searchQuery, setSearchQuery] = useState('');
  const [matchCount, setMatchCount] = useState(0);
  const [expandedFaq, setExpandedFaq] = useState(0);
  const [expandedSections, setExpandedSections] = useState({});
  const searchInputRef = useRef(null);
  const containerRef = useRef(null);

  const t = strings.en;
  const year = new Date().getFullYear();

  // Toggle FAQ accordion
  const toggleFaq = useCallback((index) => {
    setExpandedFaq((prev) => (prev === index ? -1 : index));
  }, []);

  // Toggle show all / show less for a category
  const toggleSection = useCallback((slug) => {
    setExpandedSections((prev) => ({ ...prev, [slug]: !prev[slug] }));
  }, []);

  // Search filter logic
  const handleSearch = useCallback((e) => {
    const query = e.target.value.trim().toLowerCase();
    setSearchQuery(query);

    const allCards = containerRef.current?.querySelectorAll('.generator-card');
    if (!allCards) return;

    let visibleCount = 0;
    const sectionVisibility = {};

    allCards.forEach((card) => {
      const name = (card.dataset.name || '').toLowerCase();
      const desc = (card.dataset.description || '').toLowerCase();
      const cat = (card.dataset.category || '').toLowerCase();
      const matches = !query || name.includes(query) || desc.includes(query) || cat.includes(query);

      if (matches) {
        visibleCount++;
        card.style.display = '';
        const section = card.dataset.section;
        if (section) sectionVisibility[section] = true;
      } else {
        card.style.display = 'none';
      }
    });

    setMatchCount(visibleCount);

    // Hide/show subsections based on whether they have matches
    Object.entries(categoryData).forEach(([slug]) => {
      const subsection = document.getElementById(`subsection-${slug}`);
      if (subsection) {
        subsection.style.display = sectionVisibility[slug] ? '' : 'none';
      }
    });
  }, []);

  // Clear search
  const clearSearch = useCallback(() => {
    setSearchQuery('');
    setMatchCount(0);
    if (searchInputRef.current) searchInputRef.current.value = '';

    const allCards = containerRef.current?.querySelectorAll('.generator-card');
    allCards?.forEach((card) => { card.style.display = ''; });

    Object.values(categoryData).forEach((cat) => {
      const subsection = document.getElementById(`subsection-${cat.slug}`);
      if (subsection) subsection.style.display = '';
    });
  }, []);

  // Initialize show-all state: all sections collapsed by default (show 6)
  useEffect(() => {
    const initial = {};
    Object.keys(categoryData).forEach((slug) => { initial[slug] = false; });
    setExpandedSections(initial);
  }, []);

  // Smooth scroll for hash links
  useEffect(() => {
    const handleHashClick = (e) => {
      const link = e.target.closest('a[href^="#"]');
      if (!link) return;
      const href = link.getAttribute('href');
      if (!href || href === '#') return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // Update URL without jumping
        if (history.pushState) history.pushState(null, null, href);
      }
    };
    document.addEventListener('click', handleHashClick);
    return () => document.removeEventListener('click', handleHashClick);
  }, []);

  // Handle initial hash on load
  useEffect(() => {
    if (window.location.hash) {
      setTimeout(() => {
        const target = document.querySelector(window.location.hash);
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  }, []);

  const renderCategoryIcon = (iconType) => <CategoryIcon type={iconType} />;

  return (
    <div className="generators-page">
      {/* ============================================================
          Section 0: Top bar
          ============================================================ */}
      <header className="top-bar">
        <div className="container">
          <a href="/" className="logo-link" aria-label={t.logoAlt}>
            <span className="logo-text">strikingly AI</span>
          </a>
        </div>
      </header>

      {/* ============================================================
          Section 1: Breadcrumb
          ============================================================ */}
      <nav aria-label="Breadcrumb" className="breadcrumb">
        <ol className="breadcrumb-list">
          <li><a href="/">{t.breadcrumbHome}</a></li>
          <li aria-hidden="true">/</li>
          <li aria-current="page">{t.breadcrumbCurrent}</li>
        </ol>
      </nav>

      {/* ============================================================
          Section 2: Hero
          ============================================================ */}
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-content">
            <h1 className="hero-title">
              <span className="hero-title-line1">{t.heroLine1}</span>
              <span className="hero-title-line2">{t.heroLine2}</span>
            </h1>
            <p className="hero-subheadline">{t.heroSubheadline}</p>
            <div className="hero-actions">
              <a href="/s/ai_site_builder" className="btn btn-primary btn-large">{t.ctaPrimary}</a>
              <a href="#all-generators" className="btn btn-ghost btn-large">{t.ctaSecondary}</a>
            </div>
          </div>
          <div className="hero-visual">
            <HeroIllustration />
          </div>
        </div>
      </section>

      {/* ============================================================
          Section 3: Featured Generators
          ============================================================ */}
      <section className="section featured">
        <div className="container">
          <h2 className="section-heading">{t.featuredHeading}</h2>
          <p className="section-subheading">{t.featuredSubheading}</p>
          <div className="grid grid-3">
            {featuredGenerators.map((gen) => (
              <a key={gen.slug} href={`/generators/${gen.slug}`} className="card generator-card featured-card">
                <h3 className="card-title">{gen.name}</h3>
                <p className="card-description">{gen.description}</p>
                <span className="tag">{gen.category}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          Section 4: Browse by Category
          ============================================================ */}
      <section className="section browse-category">
        <div className="container">
          <h2 className="section-heading">{t.browseHeading}</h2>
          <div className="grid grid-3">
            {Object.values(categoryData).map((cat) => (
              <a key={cat.slug} href={`/generators#${cat.slug}`} className="card category-card">
                <div className="category-card-icon">{renderCategoryIcon(cat.icon)}</div>
                <h3 className="category-card-title">{cat.title}</h3>
                <p className="category-card-desc">{cat.description}</p>
                <span className="category-card-arrow"><ChevronRight /></span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          Section 5: All Generators directory
          ============================================================ */}
      <section className="section all-generators" id="all-generators" ref={containerRef}>
        <div className="container">
          <h2 className="section-heading">{t.allGeneratorsHeading}</h2>
          <p className="section-subheading">{t.allGeneratorsSubheading}</p>

          {/* Search */}
          <div className="search-wrapper">
            <span className="search-icon-wrapper"><SearchIcon /></span>
            <input
              ref={searchInputRef}
              type="search"
              className="search-input"
              placeholder={t.searchPlaceholder}
              aria-label={t.searchLabel}
              onChange={handleSearch}
              id="generator-search"
            />
            {searchQuery && (
              <span className="search-meta">
                <span className="match-count">{t.matchCount(matchCount)}</span>
                <button type="button" className="clear-search-btn" onClick={clearSearch}>{t.clearSearch}</button>
              </span>
            )}
          </div>

          {searchQuery && matchCount === 0 && (
            <div className="no-results">
              <p>{t.noResults}</p>
              <a href="/s/ai_site_builder" className="link-underline">{t.cantFindIt}</a>
            </div>
          )}

          {/* Category subsections */}
          {Object.entries(categoryData).map(([slug, cat]) => {
            const isExpanded = expandedSections[slug] !== false; // default expanded
            const visibleGenerators = isExpanded ? cat.generators : cat.generators.slice(0, 6);
            const hasMore = cat.generators.length > 6;

            return (
              <div key={slug} id={`subsection-${slug}`} className="subsection">
                <h3 id={`${slug}-heading`} className="subsection-heading">{cat.title}</h3>
                <p className="subsection-desc">{cat.description}</p>
                <div className="grid grid-3">
                  {visibleGenerators.map((gen) => (
                    <a
                      key={gen.slug}
                      href={`/generators/${gen.slug}`}
                      className="card generator-card directory-card"
                      data-name={gen.name}
                      data-description={gen.description}
                      data-category={cat.title}
                      data-section={slug}
                    >
                      <div className="directory-card-thumb">
                        <CategoryIcon type={cat.icon} />
                      </div>
                      <h4 className="card-title">{gen.name}</h4>
                      <p className="card-description">{gen.description}</p>
                    </a>
                  ))}
                </div>
                {hasMore && (
                  <button
                    type="button"
                    className="show-all-btn"
                    aria-expanded={isExpanded}
                    aria-controls={`${slug}-grid`}
                    onClick={() => toggleSection(slug)}
                  >
                    {isExpanded ? t.showLess : t.showAll(cat.generators.length)}
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* ============================================================
          Section 6: How It Works
          ============================================================ */}
      <section className="section how-it-works">
        <div className="container">
          <h2 className="section-heading">{t.howItWorksHeading}</h2>
          <div className="steps-grid">
            <div className="step">
              <div className="step-number">1</div>
              <h3 className="step-title">{t.step1Title}</h3>
              <p className="step-body">{t.step1Body}</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h3 className="step-title">{t.step2Title}</h3>
              <p className="step-body">{t.step2Body}</p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h3 className="step-title">{t.step3Title}</h3>
              <p className="step-body">{t.step3Body}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          Section 7: Why Strikingly
          ============================================================ */}
      <section className="section why-strikingly">
        <div className="container">
          <h2 className="section-heading">{t.whyHeading}</h2>
          <div className="grid grid-3">
            <div className="why-card">
              <div className="why-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#8159BB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <h3 className="why-title">{t.why1Title}</h3>
              <p className="why-body">{t.why1Body}</p>
            </div>
            <div className="why-card">
              <div className="why-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#8159BB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                  <line x1="12" y1="18" x2="12.01" y2="18" />
                </svg>
              </div>
              <h3 className="why-title">{t.why2Title}</h3>
              <p className="why-body">{t.why2Body}</p>
            </div>
            <div className="why-card">
              <div className="why-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#8159BB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="12" y1="1" x2="12" y2="23" />
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </div>
              <h3 className="why-title">{t.why3Title}</h3>
              <p className="why-body">{t.why3Body}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          Section 8: FAQ
          ============================================================ */}
      <section className="section faq">
        <div className="container">
          <h2 className="section-heading">{t.faqHeading}</h2>
          <div className="faq-list">
            {[
              { q: t.faq1Q, a: t.faq1A },
              { q: t.faq2Q, a: t.faq2A },
              { q: t.faq3Q, a: t.faq3A },
              { q: t.faq4Q, a: t.faq4A },
              { q: t.faq5Q, a: t.faq5A },
              { q: t.faq6Q, a: t.faq6A },
            ].map((item, index) => {
              const isOpen = expandedFaq === index;
              const contentId = `faq-content-${index}`;
              return (
                <div key={index} className={`faq-item ${isOpen ? 'faq-open' : ''}`}>
                  <button
                    type="button"
                    className="faq-question"
                    aria-expanded={isOpen}
                    aria-controls={contentId}
                    onClick={() => toggleFaq(index)}
                  >
                    <span>{item.q}</span>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                      className={`faq-chevron ${isOpen ? 'faq-chevron-open' : ''}`}
                    >
                      <polyline points="6 4 10 8 14 4" />
                    </svg>
                  </button>
                  <div
                    id={contentId}
                    className="faq-answer-wrapper"
                    style={isOpen ? { maxHeight: '500px' } : { maxHeight: '0' }}
                    aria-hidden={!isOpen}
                  >
                    <p className="faq-answer">{item.a}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================================
          Section 9: Closing CTA
          ============================================================ */}
      <section className="section closing-cta">
        <div className="container">
          <h2 className="closing-heading">{t.closingHeading}</h2>
          <p className="closing-sub">{t.closingSub}</p>
          <a href="/s/ai_site_builder" className="btn btn-primary btn-large">{t.closingCta}</a>
        </div>
      </section>

      {/* ============================================================
          Section 10: Footer
          ============================================================ */}
      <footer className="site-footer">
        <div className="container footer-grid">
          <div className="footer-brand">
            <span className="logo-text">strikingly AI</span>
          </div>
          <div className="footer-col">
            <h4 className="footer-heading">{t.footerProduct}</h4>
            <ul>
              <li><a href="/pricing">{t.footerPricing}</a></li>
              <li><a href="/templates">{t.footerTemplates}</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4 className="footer-heading">{t.footerCompany}</h4>
            <ul>
              <li><a href="/about">{t.footerAbout}</a></li>
              <li><a href="/blog">{t.footerBlog}</a></li>
              <li><a href="/careers">{t.footerCareers}</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4 className="footer-heading">{t.footerResources}</h4>
            <ul>
              <li><a href="/support">{t.footerSupport}</a></li>
              <li><a href="/contact">{t.footerContact}</a></li>
              <li><a href="/help-center">{t.footerHelpCenter}</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4 className="footer-heading">{t.footerSupport}</h4>
            <ul>
              <li><a href="/community">{t.footerCommunity}</a></li>
              <li><a href="/terms">{t.footerTerms}</a></li>
              <li><a href="/privacy">{t.footerPrivacy}</a></li>
            </ul>
          </div>
        </div>
        <div className="container footer-bottom">
          <p>{t.footerCopyright(year)}</p>
        </div>
      </footer>
    </div>
  );
}
