import { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Search, ChevronRight, ChevronDown } from 'lucide-react';

const strings = {
  en: {
    breadcrumbHome: 'Strikingly',
    breadcrumbCurrent: 'AI Generators',
    heroLine1: 'BUILD ANY KIND OF SITE',
    heroLine2: 'WITH AI, IN AN INSTANT',
    heroSub: 'Browse the right generator for what you\'re building, or jump straight into our AI site builder.',
    ctaPrimary: 'START BUILDING - IT\'S FREE',
    ctaSecondary: 'BROWSE GENERATORS',
    featuredHeading: 'FEATURED GENERATORS',
    featuredSub: 'A few common starting points.',
    browseHeading: 'BROWSE BY CATEGORY',
    allHeading: 'ALL GENERATORS',
    allSub: 'Sixty-plus generators, organized by what you\'re building.',
    searchPlaceholder: 'Search generators...',
    searchAria: 'Search generators',
    matchCount: 'generators match',
    clearSearch: 'Clear search',
    noResultsLink: 'Can\'t find it? Start with our AI builder.',
    howHeading: 'HOW IT WORKS',
    whyHeading: 'WHY STRIKINGLY',
    faqHeading: 'FREQUENTLY ASKED QUESTIONS',
    closingHeadline: 'READY TO BUILD?',
    closingSub: 'Pick a generator above, or jump straight into our AI builder.',
    closingCta: 'START WITH AI BUILDER',
    showAll: 'Show all {count} generators',
    showLess: 'Show less',
    footerTagline: 'Build a beautiful website in minutes. No coding required.',
    footerProduct: 'Product',
    footerResources: 'Resources',
    footerCompany: 'Company',
    footerLegal: 'Legal',
    footerTemplates: 'Templates',
    footerPricing: 'Pricing',
    footerFeatures: 'Features',
    footerIntegrations: 'Integrations',
    footerBlog: 'Blog',
    footerHelpCenter: 'Help Center',
    footerAbout: 'About',
    footerCareers: 'Careers',
    footerPress: 'Press',
    footerContact: 'Contact',
    footerTerms: 'Terms',
    footerPrivacy: 'Privacy',
    footerCookies: 'Cookies',
    footerLicenses: 'Licenses',
    footerCopyright: '© {year} Strikingly. All rights reserved.',
    step1Title: 'PICK A GENERATOR',
    step1Body: 'Browse by category or search to find one that fits your goal.',
    step2Title: 'DESCRIBE YOUR SITE',
    step2Body: 'Tell our AI builder about your business in a sentence or two.',
    step3Title: 'GENERATE AND PUBLISH',
    step3Body: 'Get a fully built site in seconds. Customize anything, then go live.',
    why1Title: 'LIVE IN SECONDS',
    why1Body: 'Describe your site, we build it. No setup, no learning curve.',
    why2Title: 'MOBILE BY DEFAULT',
    why2Body: 'Every generator produces responsive sites that work on any device.',
    why3Title: 'FREE TO START',
    why3Body: 'Generate, customize, and publish without a credit card.',
    faq1Q: 'What is an AI site generator?',
    faq1A: 'An AI site generator is a tool that uses artificial intelligence to build a complete website based on your description. Instead of choosing a template and filling in blanks, you tell the AI what you need—your business name, industry, and goals—and it generates a tailored site structure, copy, and layout in seconds.',
    faq2Q: 'How is a generator different from a template?',
    faq2A: 'A template is a static starting point that you customize manually. A generator is dynamic: it builds a unique site around your specific content and goals. Generators can produce different results for different users, while templates look the same until you edit them.',
    faq3Q: 'Are these generators free to use?',
    faq3A: 'Yes. You can generate, customize, and publish a site without paying. Strikingly offers a free plan that includes hosting and core features. Paid plans unlock custom domains, advanced SEO, and higher storage.',
    faq4Q: 'What kinds of sites can I build?',
    faq4A: 'You can build business websites, landing pages, portfolios, blogs, online stores, and link-in-bio pages. Each generator is tuned for a specific goal, so the output matches the use case.',
    faq5Q: 'Can I customize what the generator produces?',
    faq5A: 'Absolutely. After generation, you can edit text, swap images, rearrange sections, and adjust colors. The AI gives you a strong starting point, but you always have full control over the final design.',
    faq6Q: 'Do generated sites work on mobile?',
    faq6A: 'Yes. Every generator produces responsive sites that adapt to phones, tablets, and desktops. You don\'t need to do anything extra—mobile optimization is built in from the start.',
  },
};

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

const categoryCards = [
  { name: 'Websites', description: 'AI-built business and personal sites for any goal.', slug: 'websites', href: '/generators#websites' },
  { name: 'Landing Pages', description: 'Single-page sites built to convert visitors fast.', slug: 'landing-pages', href: '/generators#landing-pages' },
  { name: 'Portfolios', description: 'Showcase your work with a clean, focused site.', slug: 'portfolios', href: '/generators#portfolios' },
  { name: 'Blogs', description: 'Publish-ready blogs with built-in SEO basics.', slug: 'blogs', href: '/generators#blogs' },
  { name: 'Online Stores', description: 'Sell products online with payments built in.', slug: 'stores', href: '/generators#stores' },
  { name: 'Link-in-Bio', description: 'One link, all your places. Made for creators.', slug: 'link-in-bio', href: '/generators#link-in-bio' },
];

const directoryData = {
  websites: {
    title: 'Websites',
    description: 'AI-built business and personal sites for any goal.',
    generators: [
      { name: 'AI Website Generator', description: 'Describe your business, get a full site', slug: 'ai-website-generator' },
      { name: 'Free Website Builder for Photographers', description: 'Showcase your portfolio with elegant galleries', slug: 'free-website-builder-for-photographers' },
      { name: 'One-Page Website Builder', description: 'Simple sites, single scroll', slug: 'one-page-website-builder' },
      { name: 'Beautiful Website Builder for Restaurants', description: 'Menu, hours, reservations, done', slug: 'beautiful-website-builder-for-restaurants' },
      { name: 'Wedding Website Generator', description: 'Share your day with guests', slug: 'wedding-website-generator' },
      { name: 'AI Website Builder for Small Business', description: 'Launch a professional site in minutes', slug: 'ai-website-builder-for-small-business' },
      { name: 'No-Code Website Builder for Startups', description: 'From idea to live site without writing code', slug: 'no-code-website-builder-for-startups' },
      { name: 'Website Builder for Yoga Instructors', description: 'Class schedules, bios, and booking ready', slug: 'website-builder-for-yoga-instructors' },
      { name: 'Personal Website Builder', description: 'A clean homepage for your personal brand', slug: 'personal-website-builder' },
      { name: 'Website Builder for Real Estate', description: 'Listings, tours, and contact forms built in', slug: 'website-builder-for-real-estate' },
      { name: 'AI Website Builder for Coaches', description: 'Packages, testimonials, and booking pages', slug: 'ai-website-builder-for-coaches' },
      { name: 'Website Builder for Artists', description: 'Portfolio-focused layouts for visual artists', slug: 'website-builder-for-artists' },
    ],
  },
  'landing-pages': {
    title: 'Landing Pages',
    description: 'Single-page sites built to convert visitors fast.',
    generators: [
      { name: 'AI Landing Page Maker', description: 'One-page sites built to convert', slug: 'ai-landing-page-maker' },
      { name: 'Landing Page Builder for SaaS', description: 'Feature highlights, pricing, and signup forms', slug: 'landing-page-builder-for-saas' },
      { name: 'Free Landing Page Generator', description: 'Launch a conversion-focused page in minutes', slug: 'free-landing-page-generator' },
      { name: 'Landing Page Builder for Apps', description: 'App store links, screenshots, and downloads', slug: 'landing-page-builder-for-apps' },
      { name: 'One-Page Landing Page Builder', description: 'Simple, scrollable, and persuasive', slug: 'one-page-landing-page-builder' },
      { name: 'Landing Page Builder for Ebooks', description: 'Capture leads with a clean download page', slug: 'landing-page-builder-for-ebooks' },
      { name: 'AI Landing Page Builder for Courses', description: 'Curriculum, pricing, and enrollment ready', slug: 'ai-landing-page-builder-for-courses' },
      { name: 'Landing Page Builder for Events', description: 'Agenda, speakers, and registration forms', slug: 'landing-page-builder-for-events' },
      { name: 'Landing Page Builder for Webinars', description: 'Countdown, signup, and replay pages', slug: 'landing-page-builder-for-webinars' },
      { name: 'Landing Page Builder for Products', description: 'Launch pages with pricing and reviews', slug: 'landing-page-builder-for-products' },
    ],
  },
  portfolios: {
    title: 'Portfolios',
    description: 'Showcase your work with a clean, focused site.',
    generators: [
      { name: 'Free Portfolio Generator', description: 'For creatives, in minutes, no fee', slug: 'free-portfolio-generator' },
      { name: 'Portfolio Generator for Designers', description: 'Case studies, process, and contact ready', slug: 'portfolio-generator-for-designers' },
      { name: 'AI Portfolio Builder for Photographers', description: 'Gallery layouts that make images shine', slug: 'ai-portfolio-builder-for-photographers' },
      { name: 'Portfolio Builder for Writers', description: 'Byline-ready layouts for authors and journalists', slug: 'portfolio-builder-for-writers' },
      { name: 'Portfolio Generator for Artists', description: 'Visual-first layouts for painters and sculptors', slug: 'portfolio-generator-for-artists' },
      { name: 'Portfolio Builder for Architects', description: 'Project grids, specs, and firm info', slug: 'portfolio-builder-for-architects' },
      { name: 'Portfolio Generator for Students', description: 'Academic projects and resumes in one place', slug: 'portfolio-generator-for-students' },
      { name: 'AI Portfolio Builder for UX Designers', description: 'User research, flows, and prototypes showcased', slug: 'ai-portfolio-builder-for-ux-designers' },
      { name: 'Portfolio Builder for Illustrators', description: 'Colorful, scrollable galleries for illustrators', slug: 'portfolio-builder-for-illustrators' },
      { name: 'Portfolio Generator for Freelancers', description: 'Services, past work, and client testimonials', slug: 'portfolio-generator-for-freelancers' },
    ],
  },
  blogs: {
    title: 'Blogs',
    description: 'Publish-ready blogs with built-in SEO basics.',
    generators: [
      { name: 'Blog Generator for Beginners', description: 'Publish-ready in minutes', slug: 'blog-generator-for-beginners' },
      { name: 'AI Blog Builder for Writers', description: 'Focus on writing while AI handles layout', slug: 'ai-blog-builder-for-writers' },
      { name: 'Blog Builder for Small Business', description: 'Share updates, tips, and product stories', slug: 'blog-builder-for-small-business' },
      { name: 'Free Blog Generator', description: 'Start writing without paying for hosting', slug: 'free-blog-generator' },
      { name: 'Blog Builder for Food Bloggers', description: 'Recipe cards, photos, and step-by-step layouts', slug: 'blog-builder-for-food-bloggers' },
      { name: 'Blog Builder for Travel Bloggers', description: 'Photo journals, maps, and itineraries', slug: 'blog-builder-for-travel-bloggers' },
      { name: 'AI Blog Builder for Tech Bloggers', description: 'Code snippets, syntax highlighting, and tags', slug: 'ai-blog-builder-for-tech-bloggers' },
      { name: 'Blog Builder for Lifestyle Bloggers', description: 'Lifestyle imagery, categories, and newsletters', slug: 'blog-builder-for-lifestyle-bloggers' },
      { name: 'Blog Builder for Parenting Bloggers', description: 'Heartfelt layouts for family stories', slug: 'blog-builder-for-parenting-bloggers' },
      { name: 'Blog Builder for Fitness Bloggers', description: 'Workout plans, progress photos, and tips', slug: 'blog-builder-for-fitness-bloggers' },
    ],
  },
  stores: {
    title: 'Online Stores',
    description: 'Sell products online with payments built in.',
    generators: [
      { name: 'Online Store Builder', description: 'Start selling without writing code', slug: 'online-store-builder' },
      { name: 'Online Store Builder for Restaurants', description: 'Menu items, modifiers, and pickup ready', slug: 'online-store-builder-for-restaurants' },
      { name: 'AI Store Builder for Boutiques', description: 'Curated collections, lookbooks, and checkout', slug: 'ai-store-builder-for-boutiques' },
      { name: 'Store Builder for Artists', description: 'Prints, originals, and commissions', slug: 'store-builder-for-artists' },
      { name: 'Store Builder for Jewelry Brands', description: 'Product zoom, materials, and gift wrapping', slug: 'store-builder-for-jewelry-brands' },
      { name: 'Store Builder for Handmade Sellers', description: 'Story-driven layouts for makers', slug: 'store-builder-for-handmade-sellers' },
      { name: 'AI Store Builder for Dropshippers', description: 'Product imports, variants, and automation', slug: 'ai-store-builder-for-dropshippers' },
      { name: 'Store Builder for Subscription Boxes', description: 'Recurring plans, tiers, and member perks', slug: 'store-builder-for-subscription-boxes' },
      { name: 'Store Builder for Digital Products', description: 'Downloads, licenses, and instant delivery', slug: 'store-builder-for-digital-products' },
      { name: 'Store Builder for Clothing Brands', description: 'Size guides, lookbooks, and seasonal drops', slug: 'store-builder-for-clothing-brands' },
    ],
  },
  'link-in-bio': {
    title: 'Link-in-Bio',
    description: 'One link, all your places. Made for creators.',
    generators: [
      { name: 'Link-in-Bio Generator', description: 'One link for all your channels', slug: 'link-in-bio-generator' },
      { name: 'Link-in-Bio for Instagram', description: 'Optimized for Instagram bios and stories', slug: 'link-in-bio-for-instagram' },
      { name: 'Link-in-Bio for TikTok', description: 'Fast-loading pages for TikTok traffic', slug: 'link-in-bio-for-tiktok' },
      { name: 'Link-in-Bio for YouTube', description: 'Video promos, merch, and membership links', slug: 'link-in-bio-for-youtube' },
      { name: 'Link-in-Bio for Musicians', description: 'Streaming links, tour dates, and merch', slug: 'link-in-bio-for-musicians' },
      { name: 'Link-in-Bio for Podcasters', description: 'Episode links, sponsors, and subscribe buttons', slug: 'link-in-bio-for-podcasters' },
      { name: 'Link-in-Bio for Coaches', description: 'Booking, courses, and social links', slug: 'link-in-bio-for-coaches' },
      { name: 'Link-in-Bio for Influencers', description: 'Brand deals, affiliate links, and content', slug: 'link-in-bio-for-influencers' },
      { name: 'Link-in-Bio for Small Business', description: 'Services, contact, and social profiles', slug: 'link-in-bio-for-small-business' },
      { name: 'Link-in-Bio for Creators', description: 'All your content in one customizable page', slug: 'link-in-bio-for-creators' },
    ],
  },
};

const categoryIllustrations = {
  websites: (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="w-12 h-12 text-brand-purple">
      <rect x="8" y="12" width="48" height="36" rx="3" stroke="currentColor" strokeWidth="2" />
      <path d="M8 20h48" stroke="currentColor" strokeWidth="2" />
      <circle cx="14" cy="16" r="2" fill="currentColor" />
      <circle cx="22" cy="16" r="2" fill="currentColor" />
      <circle cx="30" cy="16" r="2" fill="currentColor" />
      <rect x="16" y="28" width="32" height="4" rx="1" fill="currentColor" opacity="0.3" />
      <rect x="16" y="36" width="24" height="4" rx="1" fill="currentColor" opacity="0.3" />
    </svg>
  ),
  'landing-pages': (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="w-12 h-12 text-brand-purple">
      <rect x="12" y="8" width="40" height="48" rx="3" stroke="currentColor" strokeWidth="2" />
      <path d="M12 18h40" stroke="currentColor" strokeWidth="2" />
      <rect x="20" y="28" width="24" height="6" rx="1" fill="currentColor" opacity="0.3" />
      <rect x="20" y="40" width="16" height="4" rx="1" fill="currentColor" opacity="0.3" />
    </svg>
  ),
  portfolios: (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="w-12 h-12 text-brand-purple">
      <rect x="8" y="12" width="48" height="40" rx="3" stroke="currentColor" strokeWidth="2" />
      <rect x="16" y="20" width="14" height="14" rx="2" fill="currentColor" opacity="0.3" />
      <rect x="34" y="20" width="14" height="14" rx="2" fill="currentColor" opacity="0.3" />
      <rect x="16" y="38" width="14" height="6" rx="1" fill="currentColor" opacity="0.3" />
      <rect x="34" y="38" width="14" height="6" rx="1" fill="currentColor" opacity="0.3" />
    </svg>
  ),
  blogs: (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="w-12 h-12 text-brand-purple">
      <rect x="10" y="8" width="44" height="48" rx="3" stroke="currentColor" strokeWidth="2" />
      <path d="M10 18h44" stroke="currentColor" strokeWidth="2" />
      <rect x="18" y="26" width="28" height="4" rx="1" fill="currentColor" opacity="0.3" />
      <rect x="18" y="34" width="28" height="4" rx="1" fill="currentColor" opacity="0.3" />
      <rect x="18" y="42" width="20" height="4" rx="1" fill="currentColor" opacity="0.3" />
    </svg>
  ),
  stores: (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="w-12 h-12 text-brand-purple">
      <path d="M12 20h40l-4 24H16l-4-20z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M20 20V14a12 12 0 0124 0v6" stroke="currentColor" strokeWidth="2" />
      <rect x="26" y="30" width="12" height="10" rx="1" fill="currentColor" opacity="0.3" />
    </svg>
  ),
  'link-in-bio': (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="w-12 h-12 text-brand-purple">
      <rect x="16" y="8" width="32" height="48" rx="4" stroke="currentColor" strokeWidth="2" />
      <circle cx="32" cy="22" r="6" stroke="currentColor" strokeWidth="2" />
      <path d="M24 38h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M28 44h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
};

const faqData = [
  { id: 'faq-1', question: 'What is an AI site generator?', answer: strings.en.faq1A },
  { id: 'faq-2', question: 'How is a generator different from a template?', answer: strings.en.faq2A },
  { id: 'faq-3', question: 'Are these generators free to use?', answer: strings.en.faq3A },
  { id: 'faq-4', question: 'What kinds of sites can I build?', answer: strings.en.faq4A },
  { id: 'faq-5', question: 'Can I customize what the generator produces?', answer: strings.en.faq5A },
  { id: 'faq-6', question: 'Do generated sites work on mobile?', answer: strings.en.faq6A },
];

function Generators() {
  const [searchQuery, setSearchQuery] = useState('');
  const [matchCount, setMatchCount] = useState(0);
  const [expandedFaq, setExpandedFaq] = useState('faq-1');
  const [visibleCounts, setVisibleCounts] = useState({});
  const searchInputRef = useRef(null);

  const t = strings.en;

  const updateMatchCount = useCallback((query) => {
    let count = 0;
    Object.values(directoryData).forEach((section) => {
      section.generators.forEach((gen) => {
        const text = `${gen.name} ${gen.description} ${section.title}`.toLowerCase();
        if (!query || text.includes(query.toLowerCase())) {
          count += 1;
        }
      });
    });
    setMatchCount(count);
  }, []);

  useEffect(() => {
    updateMatchCount(searchQuery);
  }, [searchQuery, updateMatchCount]);

  useEffect(() => {
    const initialCounts = {};
    Object.keys(directoryData).forEach((key) => {
      initialCounts[key] = 6;
    });
    setVisibleCounts(initialCounts);
  }, []);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const clearSearch = () => {
    setSearchQuery('');
    if (searchInputRef.current) {
      searchInputRef.current.value = '';
      searchInputRef.current.focus();
    }
  };

  const toggleFaq = (id) => {
    setExpandedFaq((prev) => (prev === id ? '' : id));
  };

  const showAll = (key) => {
    setVisibleCounts((prev) => ({ ...prev, [key]: directoryData[key].generators.length }));
  };

  const showLess = (key) => {
    setVisibleCounts((prev) => ({ ...prev, [key]: 6 }));
  };

  const sectionMatchesSearch = (section) => {
    if (!searchQuery) return true;
    const q = searchQuery.toLowerCase();
    return section.generators.some(
      (gen) =>
        gen.name.toLowerCase().includes(q) ||
        gen.description.toLowerCase().includes(q) ||
        section.title.toLowerCase().includes(q)
    );
  };

  const getFilteredGenerators = (section) => {
    if (!searchQuery) return section.generators;
    const q = searchQuery.toLowerCase();
    return section.generators.filter(
      (gen) =>
        gen.name.toLowerCase().includes(q) ||
        gen.description.toLowerCase().includes(q) ||
        section.title.toLowerCase().includes(q)
    );
  };

  return (
    <div className="min-h-screen bg-white font-body text-body">
      {/* Section 0: Top bar */}
      <header className="border-b border-divider bg-white">
        <div className="mx-auto max-w-[1200px] px-5 py-4 flex items-center">
          <Link to="/" className="flex items-center gap-2 text-heading-hero font-heading font-bold text-lg tracking-wide no-underline">
            <span className="inline-flex items-center justify-center w-8 h-8 rounded bg-gradient-to-r from-brand-blue-ai to-brand-pink-ai text-white text-sm font-bold">AI</span>
            Strikingly
          </Link>
        </div>
      </header>

      {/* Section 1: Breadcrumb */}
      <nav aria-label="Breadcrumb" className="bg-white border-b border-divider">
        <div className="mx-auto max-w-[1200px] px-5 py-3">
          <ol className="flex items-center gap-2 text-sm text-body">
            <li>
              <Link to="/" className="hover:text-brand-purple no-underline">{t.breadcrumbHome}</Link>
            </li>
            <li aria-hidden="true" className="text-brand-purple">›</li>
            <li aria-current="page" className="text-heading font-semibold">{t.breadcrumbCurrent}</li>
          </ol>
        </div>
      </nav>

      {/* Section 2: Hero */}
      <section className="relative overflow-hidden bg-white" aria-labelledby="hero-heading">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/5 via-transparent to-brand-pink-ai/5 pointer-events-none" aria-hidden="true" />
        <div className="mx-auto max-w-[1200px] px-5 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center relative">
          <div className="order-2 md:order-1">
            <h1 id="hero-heading" className="font-heading font-bold text-heading-hero uppercase leading-tight mb-4" style={{ fontSize: 'clamp(28px, 5vw, 44px)' }}>
              <span className="block">{t.heroLine1}</span>
              <span className="block bg-gradient-to-r from-brand-blue-ai to-brand-pink-ai bg-clip-text text-transparent">{t.heroLine2}</span>
            </h1>
            <p className="text-body text-base md:text-lg leading-relaxed mb-8 max-w-lg">{t.heroSub}</p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/s/ai_site_builder"
                className="inline-flex items-center justify-center h-11 px-6 rounded-button bg-gradient-to-r from-brand-blue-ai to-brand-pink-ai text-white font-heading font-bold uppercase text-sm tracking-wide no-underline shadow-sm hover:shadow-md transition-shadow"
              >
                {t.ctaPrimary}
              </Link>
              <a
                href="#all-generators"
                className="inline-flex items-center justify-center h-11 px-6 rounded-button border border-brand-purple text-brand-purple font-heading font-bold uppercase text-sm tracking-wide bg-transparent hover:bg-brand-purple/5 transition-colors"
              >
                {t.ctaSecondary}
              </a>
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <svg width="320" height="240" viewBox="0 0 320 240" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="w-full max-w-md">
              <rect x="40" y="30" width="240" height="160" rx="8" stroke="#8159BB" strokeWidth="3" fill="white" />
              <path d="M40 60h240" stroke="#8159BB" strokeWidth="3" />
              <circle cx="56" cy="45" r="4" fill="#CB0C9F" />
              <circle cx="72" cy="45" r="4" fill="#7671FF" />
              <circle cx="88" cy="45" r="4" fill="#8159BB" />
              <rect x="60" y="80" width="200" height="12" rx="2" fill="#E2E4E7" />
              <rect x="60" y="104" width="160" height="12" rx="2" fill="#E2E4E7" />
              <rect x="60" y="128" width="180" height="12" rx="2" fill="#E2E4E7" />
              <rect x="60" y="152" width="120" height="12" rx="2" fill="#E2E4E7" />
              <rect x="120" y="190" width="80" height="28" rx="4" fill="url(#hero-gradient)" />
              <defs>
                <linearGradient id="hero-gradient" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#7671FF" />
                  <stop offset="100%" stopColor="#CB0C9F" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </section>

      {/* Section 3: Featured Generators */}
      <section className="bg-light-bg py-16" aria-labelledby="featured-heading">
        <div className="mx-auto max-w-[1200px] px-5">
          <div className="mb-10">
            <h2 id="featured-heading" className="font-heading font-bold text-heading uppercase text-2xl md:text-3xl mb-2">{t.featuredHeading}</h2>
            <p className="text-body">{t.featuredSub}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {featuredGenerators.map((gen) => (
              <Link
                key={gen.slug}
                to={`/generators/${gen.slug}`}
                className="block bg-white border border-card-border rounded-card p-5 no-underline text-heading-hero hover:border-brand-purple hover:shadow-card-hover transition-all group"
              >
                <h3 className="font-heading font-bold text-base uppercase mb-1 group-hover:text-brand-purple transition-colors">{gen.name}</h3>
                <p className="text-body text-sm mb-3">{gen.description}</p>
                <span className="inline-block text-xs font-heading font-bold uppercase tracking-wide text-brand-purple border border-brand-purple rounded-tag px-2 py-1">{gen.category}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Browse by Category */}
      <section className="bg-white py-16" aria-labelledby="browse-heading">
        <div className="mx-auto max-w-[1200px] px-5">
          <h2 id="browse-heading" className="font-heading font-bold text-heading uppercase text-2xl md:text-3xl mb-8">{t.browseHeading}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {categoryCards.map((cat) => (
              <Link
                key={cat.slug}
                to={cat.href}
                className="flex items-start gap-4 bg-white border border-card-border rounded-card p-5 no-underline text-heading-hero hover:border-brand-purple hover:shadow-card-hover transition-all group"
              >
                <div className="flex-shrink-0 mt-1">{categoryIllustrations[cat.slug]}</div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-heading font-bold text-base uppercase mb-1 group-hover:text-brand-purple transition-colors">{cat.name}</h3>
                  <p className="text-body text-sm">{cat.description}</p>
                </div>
                <ChevronRight className="w-5 h-5 text-brand-purple flex-shrink-0 mt-1" aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: All Generators */}
      <section id="all-generators" className="bg-light-bg py-16" aria-labelledby="all-generators-heading">
        <div className="mx-auto max-w-[1200px] px-5">
          <div className="mb-8">
            <h2 id="all-generators-heading" className="font-heading font-bold text-heading uppercase text-2xl md:text-3xl mb-2">{t.allHeading}</h2>
            <p className="text-body">{t.allSub}</p>
          </div>

          <div className="mb-8">
            <div className="relative max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-body" aria-hidden="true" />
              <input
                ref={searchInputRef}
                type="search"
                aria-label={t.searchAria}
                placeholder={t.searchPlaceholder}
                value={searchQuery}
                onChange={handleSearch}
                className="w-full h-11 pl-10 pr-4 rounded-button border border-card-border bg-white text-heading-hero placeholder:text-body/60 focus:outline-none focus:border-brand-purple focus:ring-2 focus:ring-brand-purple/20"
              />
            </div>
            {searchQuery && (
              <p className="mt-2 text-sm text-body">
                <span className="font-semibold text-heading">{matchCount}</span> {t.matchCount}
                <button
                  type="button"
                  onClick={clearSearch}
                  className="ml-3 text-brand-purple font-semibold hover:underline"
                >
                  {t.clearSearch}
                </button>
              </p>
            )}
            {searchQuery && matchCount === 0 && (
              <div className="mt-4 p-6 bg-white border border-card-border rounded-card text-center">
                <p className="text-body mb-3">No generators match your search.</p>
                <Link to="/s/ai_site_builder" className="text-brand-purple font-semibold hover:underline">{t.noResultsLink}</Link>
              </div>
            )}
          </div>

          <div className="space-y-12">
            {Object.entries(directoryData).map(([key, section]) => {
              if (!sectionMatchesSearch(section)) return null;
              const filtered = getFilteredGenerators(section);
              const visibleCount = visibleCounts[key] || 6;
              const isCollapsed = filtered.length > visibleCount;
              const visibleGenerators = filtered.slice(0, visibleCount);

              return (
                <div key={key} id={key} className="scroll-mt-24">
                  <h3 className="font-heading font-bold text-heading uppercase text-xl md:text-2xl mb-1">{section.title}</h3>
                  <p className="text-body text-sm mb-5">{section.description}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {visibleGenerators.map((gen) => (
                      <Link
                        key={gen.slug}
                        to={`/generators/${gen.slug}`}
                        className="block bg-white border border-card-border rounded-card p-5 no-underline text-heading-hero hover:border-brand-purple hover:shadow-card-hover transition-all group"
                      >
                        <div className="mb-3">{categoryIllustrations[key]}</div>
                        <h4 className="font-heading font-bold text-sm uppercase mb-1 group-hover:text-brand-purple transition-colors">{gen.name}</h4>
                        <p className="text-body text-sm">{gen.description}</p>
                      </Link>
                    ))}
                  </div>
                  {isCollapsed && (
                    <div className="mt-5">
                      {visibleCount < filtered.length ? (
                        <button
                          type="button"
                          onClick={() => showAll(key)}
                          className="inline-flex items-center gap-1 text-brand-purple font-heading font-bold uppercase text-sm hover:underline"
                        >
                          Show all {filtered.length} generators
                        </button>
                      ) : (
                        <button
                          type="button"
                          onClick={() => showLess(key)}
                          className="inline-flex items-center gap-1 text-brand-purple font-heading font-bold uppercase text-sm hover:underline"
                        >
                          Show less
                        </button>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 6: How It Works */}
      <section className="bg-white py-16" aria-labelledby="how-heading">
        <div className="mx-auto max-w-[1200px] px-5">
          <h2 id="how-heading" className="font-heading font-bold text-heading uppercase text-2xl md:text-3xl mb-10 text-center">{t.howHeading}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { num: '1', title: t.step1Title, body: t.step1Body },
              { num: '2', title: t.step2Title, body: t.step2Body },
              { num: '3', title: t.step3Title, body: t.step3Body },
            ].map((step) => (
              <div key={step.num} className="flex flex-col items-center text-center">
                <span className="flex items-center justify-center w-12 h-12 rounded-full bg-brand-purple text-white font-heading font-bold text-lg mb-4">{step.num}</span>
                <h3 className="font-heading font-bold text-heading uppercase text-base mb-2">{step.title}</h3>
                <p className="text-body text-sm max-w-xs">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7: Why Strikingly */}
      <section className="bg-light-bg py-16" aria-labelledby="why-heading">
        <div className="mx-auto max-w-[1200px] px-5">
          <h2 id="why-heading" className="font-heading font-bold text-heading uppercase text-2xl md:text-3xl mb-10 text-center">{t.whyHeading}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: t.why1Title, body: t.why1Body, icon: <svg aria-hidden="true" className="w-8 h-8 text-brand-purple mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg> },
              { title: t.why2Title, body: t.why2Body, icon: <svg aria-hidden="true" className="w-8 h-8 text-brand-purple mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2" /><path d="M12 18h.01" /></svg> },
              { title: t.why3Title, body: t.why3Body, icon: <svg aria-hidden="true" className="w-8 h-8 text-brand-purple mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" /></svg> },
            ].map((item) => (
              <div key={item.title} className="bg-white border border-card-border rounded-card p-6 text-center">
                <div className="flex justify-center">{item.icon}</div>
                <h3 className="font-heading font-bold text-heading uppercase text-base mb-2">{item.title}</h3>
                <p className="text-body text-sm">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 8: FAQ */}
      <section className="bg-white py-16" aria-labelledby="faq-heading">
        <div className="mx-auto max-w-[1200px] px-5">
          <h2 id="faq-heading" className="font-heading font-bold text-heading uppercase text-2xl md:text-3xl mb-10 text-center">{t.faqHeading}</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqData.map((item) => {
              const isExpanded = expandedFaq === item.id;
              return (
                <div key={item.id} className="bg-white border border-card-border rounded-card overflow-hidden">
                  <button
                    type="button"
                    aria-expanded={isExpanded}
                    aria-controls={item.id}
                    onClick={() => toggleFaq(item.id)}
                    className="w-full flex items-center justify-between p-5 text-left font-heading font-bold text-heading uppercase text-sm hover:bg-light-bg transition-colors"
                  >
                    <span>{item.question}</span>
                    <ChevronDown className={`w-5 h-5 text-brand-purple transition-transform ${isExpanded ? 'rotate-180' : ''}`} aria-hidden="true" />
                  </button>
                  <div
                    id={item.id}
                    hidden={!isExpanded}
                    className="px-5 pb-5 text-body text-sm leading-relaxed"
                  >
                    {item.answer}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 9: Closing CTA */}
      <section className="bg-white py-16" aria-labelledby="closing-heading">
        <div className="mx-auto max-w-[1200px] px-5 text-center">
          <h2 id="closing-heading" className="font-heading font-bold text-heading-hero uppercase text-3xl md:text-4xl mb-3">{t.closingHeadline}</h2>
          <p className="text-body text-lg mb-8">{t.closingSub}</p>
          <Link
            to="/s/ai_site_builder"
            className="inline-flex items-center justify-center h-11 px-8 rounded-button bg-gradient-to-r from-brand-blue-ai to-brand-pink-ai text-white font-heading font-bold uppercase text-sm tracking-wide no-underline shadow-sm hover:shadow-md transition-shadow"
          >
            {t.closingCta}
          </Link>
        </div>
      </section>

      {/* Section 10: Footer */}
      <footer className="bg-light-bg border-t border-divider py-12">
        <div className="mx-auto max-w-[1200px] px-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
            <div>
              <p className="font-heading font-bold text-heading-hero uppercase text-sm mb-4">{t.footerProduct}</p>
              <ul className="space-y-2 text-sm">
                <li><Link to="/templates" className="text-body hover:text-brand-purple no-underline">{t.footerTemplates}</Link></li>
                <li><Link to="/pricing" className="text-body hover:text-brand-purple no-underline">{t.footerPricing}</Link></li>
                <li><span className="text-body">{t.footerFeatures}</span></li>
                <li><span className="text-body">{t.footerIntegrations}</span></li>
              </ul>
            </div>
            <div>
              <p className="font-heading font-bold text-heading-hero uppercase text-sm mb-4">{t.footerResources}</p>
              <ul className="space-y-2 text-sm">
                <li><Link to="/blog" className="text-body hover:text-brand-purple no-underline">{t.footerBlog}</Link></li>
                <li><span className="text-body">{t.footerHelpCenter}</span></li>
              </ul>
            </div>
            <div>
              <p className="font-heading font-bold text-heading-hero uppercase text-sm mb-4">{t.footerCompany}</p>
              <ul className="space-y-2 text-sm">
                <li><Link to="/about" className="text-body hover:text-brand-purple no-underline">{t.footerAbout}</Link></li>
                <li><span className="text-body">{t.footerCareers}</span></li>
                <li><span className="text-body">{t.footerPress}</span></li>
                <li><Link to="/support" className="text-body hover:text-brand-purple no-underline">{t.footerContact}</span></li>
              </ul>
            </div>
            <div>
              <p className="font-heading font-bold text-heading-hero uppercase text-sm mb-4">{t.footerLegal}</p>
              <ul className="space-y-2 text-sm">
                <li><Link to="/terms" className="text-body hover:text-brand-purple no-underline">{t.footerTerms}</Link></li>
                <li><Link to="/privacy" className="text-body hover:text-brand-purple no-underline">{t.footerPrivacy}</Link></li>
                <li><span className="text-body">{t.footerCookies}</span></li>
                <li><span className="text-body">{t.footerLicenses}</span></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-divider pt-6 text-center text-sm text-body">
            <p>{t.footerCopyright.replace('{year}', String(new Date().getFullYear()))}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Generators;
