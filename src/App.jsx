import React, { useState } from 'react';

// Strings for i18n readiness
const strings = {
  en: {
    logo: "strikingly AI",
    breadcrumbHome: "Strikingly",
    breadcrumbCurrent: "AI Generators",
    heroH1Line1: "BUILD ANY KIND OF SITE",
    heroH1Line2: "WITH AI, IN AN INSTANT",
    heroSub: "Browse the right generator for what you're building, or jump straight into our AI site builder.",
    ctaPrimary: "START BUILDING - IT'S FREE",
    ctaSecondary: "BROWSE GENERATORS",
    featuredTitle: "FEATURED GENERATORS",
    featuredSub: "A few common starting points.",
    browseTitle: "BROWSE BY CATEGORY",
    allGenTitle: "ALL GENERATORS",
    allGenSub: "Sixty-plus generators, organized by what you're building.",
    searchPlaceholder: "Search generators...",
    searchLabel: "Search generators",
    searchResults: (count) => `${count} generators match`,
    searchEmpty: "No generators match your search.",
    searchClear: "Clear search",
    searchFallback: "Can't find it? Start with our AI builder.",
    howTitle: "HOW IT WORKS",
    whyTitle: "WHY STRIKINGLY",
    faqTitle: "FREQUENTLY ASKED QUESTIONS",
    closingTitle: "READY TO BUILD?",
    closingSub: "Pick a generator above, or jump straight into our AI builder.",
    closingCta: "START WITH AI BUILDER",
  }
};

const s = strings.en;

// Generator data for Featured section (9 items, mixed categories)
const featuredGenerators = [
  { name: "AI Website Generator", desc: "Describe your business, get a full site", category: "Website", slug: "ai-website-generator" },
  { name: "Free Portfolio Generator", desc: "For creatives, in minutes, no fee", category: "Portfolio", slug: "free-portfolio-generator" },
  { name: "AI Landing Page Maker", desc: "One-page sites built to convert", category: "Landing Page", slug: "ai-landing-page-maker" },
  { name: "Online Store Builder", desc: "Start selling without writing code", category: "Store", slug: "online-store-builder" },
  { name: "Link-in-Bio Generator", desc: "One link for all your channels", category: "Link-in-Bio", slug: "link-in-bio-generator" },
  { name: "One-Page Website Builder", desc: "Simple sites, single scroll", category: "Website", slug: "one-page-website-builder" },
  { name: "Wedding Website Generator", desc: "Share your day with guests", category: "Website", slug: "wedding-website-generator" },
  { name: "Restaurant Website Builder", desc: "Menu, hours, reservations, done", category: "Website", slug: "restaurant-website-builder" },
  { name: "Blog Generator for Beginners", desc: "Publish-ready in minutes", category: "Blog", slug: "blog-generator-for-beginners" },
];

// Category cards for Browse by Category
const categories = [
  { name: "Websites", desc: "AI-built business and personal sites for any goal.", slug: "websites", icon: "🌐" },
  { name: "Landing Pages", desc: "Single-page sites built to convert visitors fast.", slug: "landing-pages", icon: "📄" },
  { name: "Portfolios", desc: "Showcase your work with a clean, focused site.", slug: "portfolios", icon: "🎨" },
  { name: "Blogs", desc: "Publish-ready blogs with built-in SEO basics.", slug: "blogs", icon: "✍️" },
  { name: "Online Stores", desc: "Sell products online with payments built in.", slug: "stores", icon: "🛒" },
  { name: "Link-in-Bio", desc: "One link, all your places. Made for creators.", slug: "link-in-bio", icon: "🔗" },
];

// All generators data organized by category (8-12 per subsection)
const allGenerators = {
  websites: {
    title: "Websites",
    desc: "Full sites for businesses, events, and personal projects.",
    id: "websites",
    items: [
      { name: "AI Website Generator", desc: "Describe your business, get a full site", slug: "ai-website-generator" },
      { name: "One-Page Website Builder", desc: "Simple sites, single scroll", slug: "one-page-website-builder" },
      { name: "Wedding Website Generator", desc: "Share your day with guests", slug: "wedding-website-generator" },
      { name: "Restaurant Website Builder", desc: "Menu, hours, reservations, done", slug: "restaurant-website-builder" },
      { name: "Free Website Builder for Photographers", desc: "Showcase your work, book clients", slug: "free-website-builder-for-photographers" },
      { name: "AI Website for Yoga Instructors", desc: "Classes, pricing, and sign-ups", slug: "ai-website-for-yoga-instructors" },
      { name: "No-Code Website Builder", desc: "Build without touching code", slug: "no-code-website-builder" },
      { name: "Beautiful Website Generator", desc: "Stunning designs in seconds", slug: "beautiful-website-generator" },
      { name: "Business Website Builder", desc: "Professional sites for any company", slug: "business-website-builder" },
      { name: "Personal Website Generator", desc: "Your story, your way", slug: "personal-website-generator" },
    ]
  },
  landingPages: {
    title: "Landing Pages",
    desc: "Focused pages built to convert visitors into leads or customers.",
    id: "landing-pages",
    items: [
      { name: "AI Landing Page Maker", desc: "One-page sites built to convert", slug: "ai-landing-page-maker" },
      { name: "Product Launch Landing Page", desc: "Announce and sell your product", slug: "product-launch-landing-page" },
      { name: "Event Registration Page", desc: "Collect RSVPs and payments", slug: "event-registration-page" },
      { name: "Lead Capture Landing Page", desc: "Grow your email list fast", slug: "lead-capture-landing-page" },
      { name: "Free Landing Page Builder", desc: "No cost, high impact", slug: "free-landing-page-builder" },
      { name: "AI Sales Page Generator", desc: "Persuasive pages that sell", slug: "ai-sales-page-generator" },
      { name: "One-Page Offer Builder", desc: "Simple offers, clear CTAs", slug: "one-page-offer-builder" },
      { name: "Webinar Landing Page", desc: "Register attendees in minutes", slug: "webinar-landing-page" },
      { name: "Course Sales Page Builder", desc: "Sell your online course", slug: "course-sales-page-builder" },
    ]
  },
  portfolios: {
    title: "Portfolios",
    desc: "Clean, focused sites to showcase creative and professional work.",
    id: "portfolios",
    items: [
      { name: "Free Portfolio Generator", desc: "For creatives, in minutes, no fee", slug: "free-portfolio-generator" },
      { name: "Portfolio Generator for Designers", desc: "Showcase projects beautifully", slug: "portfolio-generator-for-designers" },
      { name: "AI Portfolio for Photographers", desc: "Galleries that load fast", slug: "ai-portfolio-for-photographers" },
      { name: "Artist Portfolio Builder", desc: "Your work, front and center", slug: "artist-portfolio-builder" },
      { name: "Developer Portfolio Generator", desc: "Code, projects, and contact", slug: "developer-portfolio-generator" },
      { name: "Writer Portfolio Builder", desc: "Clips, bylines, and bio", slug: "writer-portfolio-builder" },
      { name: "No-Code Portfolio Maker", desc: "Build without code", slug: "no-code-portfolio-maker" },
      { name: "Beautiful Portfolio Generator", desc: "Stunning layouts in seconds", slug: "beautiful-portfolio-generator" },
      { name: "Freelancer Portfolio Builder", desc: "Win clients with your work", slug: "freelancer-portfolio-builder" },
      { name: "Architecture Portfolio Generator", desc: "Projects and process", slug: "architecture-portfolio-generator" },
    ]
  },
  blogs: {
    title: "Blogs",
    desc: "Publish-ready blogs with SEO basics built in.",
    id: "blogs",
    items: [
      { name: "Blog Generator for Beginners", desc: "Publish-ready in minutes", slug: "blog-generator-for-beginners" },
      { name: "AI Blog Builder", desc: "Start writing, we handle the rest", slug: "ai-blog-builder" },
      { name: "Personal Blog Generator", desc: "Your voice, your audience", slug: "personal-blog-generator" },
      { name: "Food Blog Builder", desc: "Recipes, stories, and photos", slug: "food-blog-builder" },
      { name: "Travel Blog Generator", desc: "Share your journeys", slug: "travel-blog-generator" },
      { name: "Tech Blog Builder", desc: "Reviews, tutorials, and news", slug: "tech-blog-builder" },
      { name: "Free Blog Maker", desc: "No cost to start publishing", slug: "free-blog-maker" },
      { name: "One-Page Blog Builder", desc: "Simple posts, clean design", slug: "one-page-blog-builder" },
      { name: "Newsletter Blog Generator", desc: "Posts that subscribers love", slug: "newsletter-blog-generator" },
    ]
  },
  stores: {
    title: "Online Stores",
    desc: "Sell products online with payments built in.",
    id: "stores",
    items: [
      { name: "Online Store Builder", desc: "Start selling without writing code", slug: "online-store-builder" },
      { name: "Online Store Builder for Restaurants", desc: "Take orders and payments", slug: "online-store-builder-for-restaurants" },
      { name: "AI Store Generator", desc: "Products, cart, checkout done", slug: "ai-store-generator" },
      { name: "Free Store Builder", desc: "Sell without monthly fees", slug: "free-store-builder" },
      { name: "Fashion Store Generator", desc: "Clothing, accessories, and more", slug: "fashion-store-generator" },
      { name: "Handmade Store Builder", desc: "Sell your crafts online", slug: "handmade-store-builder" },
      { name: "Digital Products Store", desc: "Sell downloads and courses", slug: "digital-products-store" },
      { name: "No-Code Store Maker", desc: "Launch without developers", slug: "no-code-store-maker" },
      { name: "Beautiful Store Generator", desc: "Designs that convert", slug: "beautiful-store-generator" },
      { name: "Subscription Store Builder", desc: "Recurring revenue made easy", slug: "subscription-store-builder" },
    ]
  },
  linkInBio: {
    title: "Link-in-Bio",
    desc: "One link, all your places. Made for creators.",
    id: "link-in-bio",
    items: [
      { name: "Link-in-Bio Generator", desc: "One link for all your channels", slug: "link-in-bio-generator" },
      { name: "Creator Link Page Builder", desc: "All your links in one place", slug: "creator-link-page-builder" },
      { name: "Free Link-in-Bio Maker", desc: "No cost, instant setup", slug: "free-link-in-bio-maker" },
      { name: "AI Link Page Generator", desc: "Smart layouts for creators", slug: "ai-link-page-generator" },
      { name: "Influencer Link Builder", desc: "Showcase deals and content", slug: "influencer-link-builder" },
      { name: "Musician Link Page", desc: "Music, merch, and shows", slug: "musician-link-page" },
      { name: "Artist Link-in-Bio Builder", desc: "Portfolio and shop links", slug: "artist-link-in-bio-builder" },
      { name: "One-Page Link Builder", desc: "Simple, fast, beautiful", slug: "one-page-link-builder" },
    ]
  }
};

// FAQ data
const faqs = [
  {
    q: "What is an AI site generator?",
    a: "An AI site generator is a tool that creates a complete website for you based on a short description. Instead of designing pages or writing code, you describe your business or project in a sentence or two, and the generator builds a ready-to-use site with pages, text, and images."
  },
  {
    q: "How is a generator different from a template?",
    a: "A template is a pre-designed layout you fill in manually. A generator uses AI to create the entire site from your description, including writing the copy, choosing images, and arranging sections. You get a personalized starting point instead of a blank structure."
  },
  {
    q: "Are these generators free to use?",
    a: "Yes. You can generate, customize, and publish a site without a credit card. Paid plans are available for custom domains, removing the Strikingly branding, and accessing advanced features."
  },
  {
    q: "What kinds of sites can I build?",
    a: "You can build websites, landing pages, portfolios, blogs, online stores, and link-in-bio pages. Each category has multiple generators tailored to specific industries and goals."
  },
  {
    q: "Can I customize what the generator produces?",
    a: "Absolutely. After the generator creates your site, you can edit text, swap images, reorder sections, add pages, and change the design using our visual editor. Nothing is locked."
  },
  {
    q: "Do generated sites work on mobile?",
    a: "Yes. Every generator produces responsive sites that automatically adapt to phones, tablets, and desktops. You can preview the mobile view while editing."
  }
];

// How it works steps
const howSteps = [
  { num: "1", title: "PICK A GENERATOR", text: "Browse by category or search to find one that fits your goal." },
  { num: "2", title: "DESCRIBE YOUR SITE", text: "Tell our AI builder about your business in a sentence or two." },
  { num: "3", title: "GENERATE AND PUBLISH", text: "Get a fully built site in seconds. Customize anything, then go live." },
];

// Why Strikingly items
const whyItems = [
  { icon: "⚡", title: "LIVE IN SECONDS", text: "Describe your site, we build it. No setup, no learning curve." },
  { icon: "📱", title: "MOBILE BY DEFAULT", text: "Every generator produces responsive sites that work on any device." },
  { icon: "🎁", title: "FREE TO START", text: "Generate, customize, and publish without a credit card." },
];

// Footer links
const footerLinks = {
  product: [
    { label: "Templates", href: "/templates" },
    { label: "Pricing", href: "/pricing" },
    { label: "Blog", href: "/blog" },
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "Support", href: "/support" },
  ],
  legal: [
    { label: "Terms", href: "/terms" },
    { label: "Privacy", href: "/privacy" },
  ],
};

// Helper to create slug from name (for links)
const toSlug = (name) => name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

// Card component for Featured (with category tag)
const FeaturedCard = ({ gen }) => (
  <a
    href={`/generators/${gen.slug}`}
    className="block p-5 bg-white border border-[#C6C9CD] rounded-[3px] hover:border-[#8159BB] hover:shadow-md transition-all focus:outline-none focus:ring-2 focus:ring-[#8159BB] focus:ring-offset-2"
    aria-label={gen.name}
  >
    <div className="font-bold text-[#2E2E2F] text-[15px] mb-2 tracking-[0.5px]" style={{ fontFamily: "'Josefin Sans', 'Poppins', sans-serif" }}>
      {gen.name}
    </div>
    <div className="text-[#636972] text-[14px] leading-[1.5] mb-3">
      {gen.desc}
    </div>
    <span className="inline-block text-[11px] px-[6px] py-[2px] border border-[#8159BB] text-[#8159BB] rounded-[3px] uppercase tracking-[0.5px]" style={{ fontFamily: "'Josefin Sans', 'Poppins', sans-serif" }}>
      {gen.category}
    </span>
  </a>
);

// Category card for Browse by Category
const CategoryCard = ({ cat }) => (
  <a
    href={`#${cat.slug}`}
    className="block p-6 bg-white border border-[#C6C9CD] rounded-[3px] hover:border-[#8159BB] hover:shadow-md transition-all focus:outline-none focus:ring-2 focus:ring-[#8159BB] focus:ring-offset-2"
  >
    <div className="text-3xl mb-4" aria-hidden="true">{cat.icon}</div>
    <div className="font-bold text-[#4B5056] text-[14px] uppercase tracking-[1px] mb-2" style={{ fontFamily: "'Josefin Sans', 'Poppins', sans-serif" }}>
      {cat.name}
    </div>
    <div className="text-[#636972] text-[14px] leading-[1.5] mb-4">
      {cat.desc}
    </div>
    <div className="text-[#8159BB] text-xl" aria-hidden="true">→</div>
  </a>
);

// Generator card for All Generators (no category tag, shared thumbnail per subsection)
const GeneratorCard = ({ gen, icon }) => (
  <a
    href={`/generators/${gen.slug}`}
    className="block p-5 bg-white border border-[#C6C9CD] rounded-[3px] hover:border-[#8159BB] hover:shadow-md transition-all focus:outline-none focus:ring-2 focus:ring-[#8159BB] focus:ring-offset-2"
    aria-label={gen.name}
  >
    <div className="text-2xl mb-3" aria-hidden="true">{icon}</div>
    <div className="font-bold text-[#2E2E2F] text-[15px] mb-2 tracking-[0.5px]" style={{ fontFamily: "'Josefin Sans', 'Poppins', sans-serif" }}>
      {gen.name}
    </div>
    <div className="text-[#636972] text-[14px] leading-[1.5]">
      {gen.desc}
    </div>
  </a>
);

// FAQ Accordion Item
const FAQItem = ({ faq, index, isOpen, onToggle }) => (
  <div className="border-b border-[#E2E4E7]">
    <button
      className="w-full flex justify-between items-center py-4 text-left focus:outline-none focus:ring-2 focus:ring-[#8159BB] focus:ring-offset-2"
      onClick={() => onToggle(index)}
      aria-expanded={isOpen}
      aria-controls={`faq-answer-${index}`}
    >
      <span className="font-semibold text-[#4B5056] text-[15px] pr-4">{faq.q}</span>
      <span className="text-[#8159BB] text-xl flex-shrink-0" aria-hidden="true">{isOpen ? '−' : '+'}</span>
    </button>
    <div
      id={`faq-answer-${index}`}
      className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-4' : 'max-h-0'}`}
      aria-hidden={!isOpen}
    >
      <p className="text-[#636972] text-[14px] leading-[1.6] pr-8">{faq.a}</p>
    </div>
  </div>
);

function App() {
  // Search state
  const [searchQuery, setSearchQuery] = useState('');
  const [showAllStates, setShowAllStates] = useState({});
  const [openFaqs, setOpenFaqs] = useState([0]); // First FAQ expanded by default

  // Filter generators based on search
  const getFilteredGenerators = () => {
    if (!searchQuery.trim()) {
      return allGenerators;
    }
    const q = searchQuery.toLowerCase();
    const filtered = {};
    Object.keys(allGenerators).forEach(key => {
      const section = allGenerators[key];
      const matching = section.items.filter(item =>
        item.name.toLowerCase().includes(q) ||
        item.desc.toLowerCase().includes(q) ||
        section.title.toLowerCase().includes(q)
      );
      if (matching.length > 0) {
        filtered[key] = { ...section, items: matching };
      }
    });
    return filtered;
  };

  const filteredGenerators = getFilteredGenerators();
  const totalMatching = Object.values(filteredGenerators).reduce((sum, sec) => sum + sec.items.length, 0);

  // Toggle show all for a section
  const toggleShowAll = (sectionId) => {
    setShowAllStates(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  // Toggle FAQ
  const toggleFaq = (index) => {
    setOpenFaqs(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  // Clear search
  const clearSearch = () => {
    setSearchQuery('');
  };

  // Get icon for a category section
  const getCategoryIcon = (sectionKey) => {
    const cat = categories.find(c => c.slug === allGenerators[sectionKey].id);
    return cat ? cat.icon : '📄';
  };

  // Determine visible items per section (with show all toggle)
  const getVisibleItems = (section) => {
    const isExpanded = showAllStates[section.id];
    if (isExpanded || section.items.length <= 6) {
      return section.items;
    }
    return section.items.slice(0, 6);
  };

  const hasMoreItems = (section) => section.items.length > 6;

  return (
    <div className="min-h-screen bg-white text-[#2E2E2F]" style={{ fontFamily: "'Open Sans', system-ui, sans-serif" }}>
      {/* Section 0: Top bar */}
      <header className="bg-white border-b border-[#E2E4E7]">
        <div className="max-w-[1200px] mx-auto px-5 h-[60px] flex items-center">
          <a href="/" className="font-bold text-[#8159BB] text-[18px] tracking-[1px]" style={{ fontFamily: "'Josefin Sans', 'Poppins', sans-serif" }}>
            {s.logo}
          </a>
        </div>
      </header>

      {/* Section 1: Breadcrumb */}
      <nav aria-label="Breadcrumb" className="max-w-[1200px] mx-auto px-5 pt-4 pb-2">
        <ol className="flex items-center text-[13px] text-[#636972]">
          <li>
            <a href="/" className="hover:text-[#8159BB] transition-colors">{s.breadcrumbHome}</a>
          </li>
          <li className="mx-2 text-[#8159BB]" aria-hidden="true">›</li>
          <li className="text-[#636972]">{s.breadcrumbCurrent}</li>
        </ol>
      </nav>

      {/* Section 2: Hero */}
      <section className="max-w-[1200px] mx-auto px-5 pt-8 pb-16 md:pt-12 md:pb-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left column */}
          <div>
            <h1 className="text-[32px] md:text-[44px] leading-[1.15] tracking-[1px] mb-4" style={{ fontFamily: "'Josefin Sans', 'Poppins', sans-serif" }}>
              <span className="text-[#2E2E2F] uppercase block">{s.heroH1Line1}</span>
              <span
                className="uppercase block bg-clip-text text-transparent"
                style={{
                  backgroundImage: 'linear-gradient(90deg, #7671FF 0%, #CB0C9F 100%)',
                  fontFamily: "'Josefin Sans', 'Poppins', sans-serif"
                }}
              >
                {s.heroH1Line2}
              </span>
            </h1>
            <p className="text-[#636972] text-[15px] leading-[1.6] mb-8 max-w-[460px]">
              {s.heroSub}
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="/s/ai_site_builder"
                className="inline-flex items-center justify-center h-11 px-6 rounded-[4px] text-white text-[14px] font-bold uppercase tracking-[0.5px] transition-all hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#8159BB]"
                style={{
                  background: 'linear-gradient(90deg, #7671FF 0%, #CB0C9F 100%)',
                  fontFamily: "'Josefin Sans', 'Poppins', sans-serif"
                }}
              >
                {s.ctaPrimary}
              </a>
              <a
                href="#all-generators"
                className="inline-flex items-center justify-center h-11 px-6 rounded-[4px] text-[#8159BB] text-[14px] font-bold uppercase tracking-[0.5px] border border-[#8159BB] hover:bg-[#8159BB] hover:text-white transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#8159BB]"
                style={{ fontFamily: "'Josefin Sans', 'Poppins', sans-serif" }}
              >
                {s.ctaSecondary}
              </a>
            </div>
          </div>

          {/* Right column - SVG illustration */}
          <div className="flex justify-center md:justify-end">
            <svg
              width="420"
              height="280"
              viewBox="0 0 420 280"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              className="max-w-full h-auto"
            >
              <defs>
                <linearGradient id="heroGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#F4F0FA" />
                  <stop offset="100%" stopColor="#F8F4FC" />
                </linearGradient>
              </defs>
              {/* Browser frame */}
              <rect x="30" y="30" width="360" height="220" rx="8" fill="#FFFFFF" stroke="#C6C9CD" strokeWidth="1.5" />
              {/* Browser header */}
              <rect x="30" y="30" width="360" height="28" rx="8" fill="#F4F6F8" />
              <circle cx="50" cy="44" r="4" fill="#C6C9CD" />
              <circle cx="65" cy="44" r="4" fill="#C6C9CD" />
              <circle cx="80" cy="44" r="4" fill="#C6C9CD" />
              {/* URL bar */}
              <rect x="100" y="38" width="200" height="14" rx="3" fill="#E2E4E7" />
              {/* Content area - soft purple wash */}
              <rect x="45" y="70" width="330" height="165" rx="4" fill="url(#heroGrad)" />
              {/* Hero lines */}
              <rect x="60" y="90" width="180" height="12" rx="2" fill="#8159BB" opacity="0.3" />
              <rect x="60" y="112" width="240" height="8" rx="2" fill="#8159BB" opacity="0.2" />
              <rect x="60" y="130" width="200" height="8" rx="2" fill="#8159BB" opacity="0.2" />
              {/* Card mockups */}
              <rect x="60" y="155" width="95" height="60" rx="4" fill="#FFFFFF" stroke="#C6C9CD" strokeWidth="1" />
              <rect x="165" y="155" width="95" height="60" rx="4" fill="#FFFFFF" stroke="#C6C9CD" strokeWidth="1" />
              <rect x="270" y="155" width="95" height="60" rx="4" fill="#FFFFFF" stroke="#C6C9CD" strokeWidth="1" />
              {/* Gradient accent line */}
              <rect x="60" y="175" width="60" height="3" rx="1.5" fill="#7671FF" />
              <rect x="165" y="175" width="45" height="3" rx="1.5" fill="#CB0C9F" />
            </svg>
          </div>
        </div>
      </section>

      {/* Section 3: Featured Generators */}
      <section className="bg-[#F4F6F8] py-12">
        <div className="max-w-[1200px] mx-auto px-5">
          <h2 className="text-[26px] md:text-[30px] text-[#4B5056] uppercase tracking-[1px] mb-2 text-center" style={{ fontFamily: "'Josefin Sans', 'Poppins', sans-serif" }}>
            {s.featuredTitle}
          </h2>
          <p className="text-[#636972] text-center mb-8 text-[14px]">{s.featuredSub}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {featuredGenerators.map((gen, idx) => (
              <FeaturedCard key={idx} gen={gen} />
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Browse by Category */}
      <section className="py-12">
        <div className="max-w-[1200px] mx-auto px-5">
          <h2 className="text-[26px] md:text-[30px] text-[#4B5056] uppercase tracking-[1px] mb-8 text-center" style={{ fontFamily: "'Josefin Sans', 'Poppins', sans-serif" }}>
            {s.browseTitle}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {categories.map((cat, idx) => (
              <CategoryCard key={idx} cat={cat} />
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: All Generators Directory */}
      <section id="all-generators" className="bg-[#F4F6F8] py-12 scroll-mt-4">
        <div className="max-w-[1200px] mx-auto px-5">
          <h2 className="text-[26px] md:text-[30px] text-[#4B5056] uppercase tracking-[1px] mb-2 text-center" style={{ fontFamily: "'Josefin Sans', 'Poppins', sans-serif" }}>
            {s.allGenTitle}
          </h2>
          <p className="text-[#636972] text-center mb-8 text-[14px]">{s.allGenSub}</p>

          {/* Search input */}
          <div className="mb-8 flex justify-center">
            <div className="relative w-full max-w-[480px]">
              <label htmlFor="gen-search" className="sr-only">{s.searchLabel}</label>
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#636972]" aria-hidden="true">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8" />
                  <path d="M21 21l-4.35-4.35" />
                </svg>
              </div>
              <input
                id="gen-search"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={s.searchPlaceholder}
                aria-label={s.searchLabel}
                className="w-full h-11 pl-11 pr-4 rounded-[4px] border border-[#C6C9CD] text-[14px] focus:outline-none focus:border-[#8159BB] focus:ring-1 focus:ring-[#8159BB]"
              />
              {searchQuery && (
                <button
                  onClick={clearSearch}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[#8159BB] text-sm hover:underline"
                  aria-label="Clear search"
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          {/* Result count */}
          {searchQuery && (
            <div className="text-center mb-6 text-[13px] text-[#636972]">
              {s.searchResults(totalMatching)}
            </div>
          )}

          {/* Empty state */}
          {searchQuery && totalMatching === 0 && (
            <div className="text-center py-10">
              <p className="text-[#636972] mb-4">{s.searchEmpty}</p>
              <button
                onClick={clearSearch}
                className="text-[#8159BB] underline mr-4"
              >
                {s.searchClear}
              </button>
              <a href="/s/ai_site_builder" className="text-[#8159BB] underline">
                {s.searchFallback}
              </a>
            </div>
          )}

          {/* Category subsections */}
          {Object.keys(filteredGenerators).length > 0 && Object.keys(filteredGenerators).map((key) => {
            const section = filteredGenerators[key];
            const visibleItems = getVisibleItems(section);
            const showMore = hasMoreItems(section) && !showAllStates[section.id];
            const icon = getCategoryIcon(key);

            return (
              <div key={key} id={section.id} className="mb-10 scroll-mt-8">
                <h3 className="text-[18px] text-[#4B5056] uppercase tracking-[1px] mb-1" style={{ fontFamily: "'Josefin Sans', 'Poppins', sans-serif" }}>
                  {section.title}
                </h3>
                <p className="text-[#636972] text-[14px] mb-5">{section.desc}</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {visibleItems.map((gen, idx) => (
                    <GeneratorCard key={idx} gen={gen} icon={icon} />
                  ))}
                </div>

                {/* Show all toggle */}
                {hasMoreItems(section) && (
                  <button
                    onClick={() => toggleShowAll(section.id)}
                    className="mt-4 text-[#8159BB] text-[14px] font-semibold hover:underline focus:outline-none focus:ring-2 focus:ring-[#8159BB] focus:ring-offset-2 rounded"
                    aria-expanded={!!showAllStates[section.id]}
                    aria-controls={`section-${section.id}`}
                  >
                    {showAllStates[section.id]
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
      <section className="py-12">
        <div className="max-w-[1200px] mx-auto px-5">
          <h2 className="text-[26px] md:text-[30px] text-[#4B5056] uppercase tracking-[1px] mb-10 text-center" style={{ fontFamily: "'Josefin Sans', 'Poppins', sans-serif" }}>
            {s.howTitle}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {howSteps.map((step, idx) => (
              <div key={idx} className="text-center">
                <div className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-[#8159BB] text-white font-bold mb-4">
                  {step.num}
                </div>
                <div className="font-bold text-[#4B5056] text-[14px] uppercase tracking-[1px] mb-2" style={{ fontFamily: "'Josefin Sans', 'Poppins', sans-serif" }}>
                  {step.title}
                </div>
                <p className="text-[#636972] text-[14px] leading-[1.6]">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7: Why Strikingly */}
      <section className="bg-[#F4F6F8] py-12">
        <div className="max-w-[1200px] mx-auto px-5">
          <h2 className="text-[26px] md:text-[30px] text-[#4B5056] uppercase tracking-[1px] mb-10 text-center" style={{ fontFamily: "'Josefin Sans', 'Poppins', sans-serif" }}>
            {s.whyTitle}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {whyItems.map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="text-3xl mb-4" aria-hidden="true">{item.icon}</div>
                <div className="font-bold text-[#4B5056] text-[14px] uppercase tracking-[1px] mb-2" style={{ fontFamily: "'Josefin Sans', 'Poppins', sans-serif" }}>
                  {item.title}
                </div>
                <p className="text-[#636972] text-[14px] leading-[1.6]">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 8: FAQ */}
      <section className="py-12">
        <div className="max-w-[800px] mx-auto px-5">
          <h2 className="text-[26px] md:text-[30px] text-[#4B5056] uppercase tracking-[1px] mb-8 text-center" style={{ fontFamily: "'Josefin Sans', 'Poppins', sans-serif" }}>
            {s.faqTitle}
          </h2>
          <div className="bg-white border border-[#C6C9CD] rounded-[3px] divide-y divide-[#E2E4E7]">
            {faqs.map((faq, idx) => (
              <FAQItem
                key={idx}
                faq={faq}
                index={idx}
                isOpen={openFaqs.includes(idx)}
                onToggle={toggleFaq}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Section 9: Closing CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-[600px] mx-auto px-5 text-center">
          <h2 className="text-[28px] md:text-[32px] text-[#4B5056] uppercase tracking-[1px] mb-3" style={{ fontFamily: "'Josefin Sans', 'Poppins', sans-serif" }}>
            {s.closingTitle}
          </h2>
          <p className="text-[#636972] mb-8 text-[15px]">{s.closingSub}</p>
          <a
            href="/s/ai_site_builder"
            className="inline-flex items-center justify-center h-11 px-8 rounded-[4px] text-white text-[14px] font-bold uppercase tracking-[0.5px] transition-all hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#8159BB]"
            style={{
              background: 'linear-gradient(90deg, #7671FF 0%, #CB0C9F 100%)',
              fontFamily: "'Josefin Sans', 'Poppins', sans-serif"
            }}
          >
            {s.closingCta}
          </a>
        </div>
      </section>

      {/* Section 10: Footer */}
      <footer className="bg-[#F4F6F8] border-t border-[#E2E4E7] pt-10 pb-8">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 mb-10">
            <div>
              <div className="font-bold text-[#8159BB] mb-4" style={{ fontFamily: "'Josefin Sans', 'Poppins', sans-serif" }}>
                {s.logo}
              </div>
            </div>
            <div>
              <div className="font-semibold text-[13px] mb-3 text-[#4B5056]">Product</div>
              <ul className="space-y-1.5 text-[13px] text-[#636972]">
                {footerLinks.product.map((link, i) => (
                  <li key={i}><a href={link.href} className="hover:text-[#8159BB]">{link.label}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <div className="font-semibold text-[13px] mb-3 text-[#4B5056]">Company</div>
              <ul className="space-y-1.5 text-[13px] text-[#636972]">
                {footerLinks.company.map((link, i) => (
                  <li key={i}><a href={link.href} className="hover:text-[#8159BB]">{link.label}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <div className="font-semibold text-[13px] mb-3 text-[#4B5056]">Legal</div>
              <ul className="space-y-1.5 text-[13px] text-[#636972]">
                {footerLinks.legal.map((link, i) => (
                  <li key={i}><a href={link.href} className="hover:text-[#8159BB]">{link.label}</a></li>
                ))}
              </ul>
            </div>
          </div>
          <div className="text-center text-[12px] text-[#636972] pt-6 border-t border-[#E2E4E7]">
            © {new Date().getFullYear()} Strikingly, Inc. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
