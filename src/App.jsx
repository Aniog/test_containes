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
    ctaStart: "START BUILDING - IT'S FREE",
    ctaBrowse: "BROWSE GENERATORS",
    featuredHeading: "FEATURED GENERATORS",
    featuredSub: "A few common starting points.",
    browseHeading: "BROWSE BY CATEGORY",
    allHeading: "ALL GENERATORS",
    allSub: "Sixty-plus generators, organized by what you're building.",
    searchPlaceholder: "Search generators...",
    searchLabel: "Search generators",
    resultCount: (count) => `${count} generators match`,
    noResults: "No generators match your search.",
    clearSearch: "Clear search",
    tryBuilder: "Can't find it? Start with our AI builder.",
    howHeading: "HOW IT WORKS",
    whyHeading: "WHY STRIKINGLY",
    faqHeading: "FREQUENTLY ASKED QUESTIONS",
    closingHeading: "READY TO BUILD?",
    closingSub: "Pick a generator above, or jump straight into our AI builder.",
    closingCta: "START WITH AI BUILDER",
  }
};

const s = strings.en;

// Generator data - Section 3 Featured (9 items with category tags)
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

// Category cards - Section 4
const categories = [
  { name: "Websites", desc: "AI-built business and personal sites for any goal.", slug: "websites", icon: "globe" },
  { name: "Landing Pages", desc: "Single-page sites built to convert visitors fast.", slug: "landing-pages", icon: "target" },
  { name: "Portfolios", desc: "Showcase your work with a clean, focused site.", slug: "portfolios", icon: "image" },
  { name: "Blogs", desc: "Publish-ready blogs with built-in SEO basics.", slug: "blogs", icon: "edit" },
  { name: "Online Stores", desc: "Sell products online with payments built in.", slug: "stores", icon: "shopping-cart" },
  { name: "Link-in-Bio", desc: "One link, all your places. Made for creators.", slug: "link-in-bio", icon: "link" },
];

// All generators data - Section 5 (8-12 per category)
const allGenerators = {
  websites: {
    id: "websites",
    title: "Websites",
    desc: "Full sites for businesses, events, and personal projects.",
    items: [
      { name: "AI Website Generator", desc: "Describe your business, get a full site", slug: "ai-website-generator" },
      { name: "One-Page Website Builder", desc: "Simple sites, single scroll", slug: "one-page-website-builder" },
      { name: "Wedding Website Generator", desc: "Share your day with guests", slug: "wedding-website-generator" },
      { name: "Restaurant Website Builder", desc: "Menu, hours, reservations, done", slug: "restaurant-website-builder" },
      { name: "Free Website Builder for Photographers", desc: "Showcase your work beautifully", slug: "free-website-builder-for-photographers" },
      { name: "AI Website for Yoga Instructors", desc: "Class schedules and bookings", slug: "ai-website-for-yoga-instructors" },
      { name: "No-Code Website Builder", desc: "Build without any technical skills", slug: "no-code-website-builder" },
      { name: "Beautiful Website Generator", desc: "Stunning designs in seconds", slug: "beautiful-website-generator" },
      { name: "Business Website Maker", desc: "Professional presence online", slug: "business-website-maker" },
      { name: "Personal Website Builder", desc: "Your story, your way", slug: "personal-website-builder" },
    ]
  },
  landingPages: {
    id: "landing-pages",
    title: "Landing Pages",
    desc: "Focused pages designed to drive action.",
    items: [
      { name: "AI Landing Page Maker", desc: "One-page sites built to convert", slug: "ai-landing-page-maker" },
      { name: "Product Launch Landing Page", desc: "Announce and sell new products", slug: "product-launch-landing-page" },
      { name: "Event Registration Page", desc: "Collect signups with ease", slug: "event-registration-page" },
      { name: "Lead Capture Generator", desc: "Grow your email list fast", slug: "lead-capture-generator" },
      { name: "Free Landing Page Builder", desc: "No cost, high impact", slug: "free-landing-page-builder" },
      { name: "AI Sales Page Creator", desc: "Turn visitors into customers", slug: "ai-sales-page-creator" },
      { name: "One-Page Offer Builder", desc: "Present offers clearly", slug: "one-page-offer-builder" },
      { name: "Campaign Landing Page", desc: "Run focused marketing campaigns", slug: "campaign-landing-page" },
      { name: "Waitlist Landing Page", desc: "Build anticipation before launch", slug: "waitlist-landing-page" },
    ]
  },
  portfolios: {
    id: "portfolios",
    title: "Portfolios",
    desc: "Showcase work for creatives and professionals.",
    items: [
      { name: "Free Portfolio Generator", desc: "For creatives, in minutes, no fee", slug: "free-portfolio-generator" },
      { name: "Portfolio Generator for Designers", desc: "Present your best work", slug: "portfolio-generator-for-designers" },
      { name: "AI Portfolio for Photographers", desc: "Display your photography", slug: "ai-portfolio-for-photographers" },
      { name: "Artist Portfolio Builder", desc: "Share your creative journey", slug: "artist-portfolio-builder" },
      { name: "Developer Portfolio Maker", desc: "Highlight your projects and skills", slug: "developer-portfolio-maker" },
      { name: "Writer Portfolio Generator", desc: "Showcase your published work", slug: "writer-portfolio-generator" },
      { name: "No-Code Portfolio Builder", desc: "Build without code", slug: "no-code-portfolio-builder" },
      { name: "Beautiful Portfolio Generator", desc: "Elegant layouts for your work", slug: "beautiful-portfolio-generator" },
      { name: "Freelancer Portfolio Maker", desc: "Win clients with your portfolio", slug: "freelancer-portfolio-maker" },
      { name: "Student Portfolio Builder", desc: "Present academic projects", slug: "student-portfolio-builder" },
    ]
  },
  blogs: {
    id: "blogs",
    title: "Blogs",
    desc: "Ready-to-publish blogs with SEO built in.",
    items: [
      { name: "Blog Generator for Beginners", desc: "Publish-ready in minutes", slug: "blog-generator-for-beginners" },
      { name: "AI Blog Builder", desc: "Start writing without the setup", slug: "ai-blog-builder" },
      { name: "Personal Blog Generator", desc: "Share your thoughts online", slug: "personal-blog-generator" },
      { name: "Business Blog Maker", desc: "Establish thought leadership", slug: "business-blog-maker" },
      { name: "Free Blog Builder", desc: "No cost to start publishing", slug: "free-blog-builder" },
      { name: "Travel Blog Generator", desc: "Document your journeys", slug: "travel-blog-generator" },
      { name: "Food Blog Builder", desc: "Share recipes and reviews", slug: "food-blog-builder" },
      { name: "Tech Blog Maker", desc: "Write about technology", slug: "tech-blog-maker" },
      { name: "One-Click Blog Generator", desc: "Launch in seconds", slug: "one-click-blog-generator" },
      { name: "SEO Blog Builder", desc: "Optimized for search from day one", slug: "seo-blog-builder" },
    ]
  },
  stores: {
    id: "stores",
    title: "Online Stores",
    desc: "Sell products with payments integrated.",
    items: [
      { name: "Online Store Builder", desc: "Start selling without writing code", slug: "online-store-builder" },
      { name: "Online Store Builder for Restaurants", desc: "Take orders online", slug: "online-store-builder-for-restaurants" },
      { name: "Ecommerce Store Generator", desc: "Sell products with ease", slug: "ecommerce-store-generator" },
      { name: "Free Store Builder", desc: "Launch without upfront costs", slug: "free-store-builder" },
      { name: "AI Store Maker", desc: "Describe products, get a store", slug: "ai-store-maker" },
      { name: "Boutique Store Builder", desc: "Sell fashion and accessories", slug: "boutique-store-builder" },
      { name: "Digital Product Store", desc: "Sell downloads and courses", slug: "digital-product-store" },
      { name: "Marketplace Store Generator", desc: "Connect buyers and sellers", slug: "marketplace-store-generator" },
      { name: "Subscription Store Builder", desc: "Recurring revenue made simple", slug: "subscription-store-builder" },
      { name: "Handmade Store Maker", desc: "Sell crafts and creations", slug: "handmade-store-maker" },
    ]
  },
  linkInBio: {
    id: "link-in-bio",
    title: "Link-in-Bio",
    desc: "One link for all your important places.",
    items: [
      { name: "Link-in-Bio Generator", desc: "One link for all your channels", slug: "link-in-bio-generator" },
      { name: "Creator Link Page Builder", desc: "Share all your content links", slug: "creator-link-page-builder" },
      { name: "Free Link-in-Bio Maker", desc: "No cost, instant setup", slug: "free-link-in-bio-maker" },
      { name: "Social Media Link Page", desc: "Connect followers everywhere", slug: "social-media-link-page" },
      { name: "Influencer Link Builder", desc: "Monetize your audience", slug: "influencer-link-builder" },
      { name: "AI Link-in-Bio Generator", desc: "Quick setup for any profile", slug: "ai-link-in-bio-generator" },
      { name: "Musician Link Page", desc: "Link to streams and merch", slug: "musician-link-page" },
      { name: "Artist Link-in-Bio Maker", desc: "Share your portfolio and shop", slug: "artist-link-in-bio-maker" },
    ]
  }
};

// FAQ data
const faqs = [
  { q: "What is an AI site generator?", a: "An AI site generator uses artificial intelligence to create a complete website based on a short description you provide. Instead of starting from a blank page or rigid template, you describe your business or goal in plain language, and the AI builds a site tailored to your needs in seconds." },
  { q: "How is a generator different from a template?", a: "Templates are pre-designed layouts you customize manually. Generators use AI to create a unique site based on your description, including structure, content suggestions, and styling. You still get full control to edit everything afterward." },
  { q: "Are these generators free to use?", a: "Yes, you can generate, customize, and publish a site without a credit card. Some advanced features and custom domains may require a paid plan, but getting started and launching your first site is completely free." },
  { q: "What kinds of sites can I build?", a: "You can build websites, landing pages, portfolios, blogs, online stores, and link-in-bio pages. Each category has multiple specialized generators for different industries and goals, from restaurants to photographers to yoga instructors." },
  { q: "Can I customize what the generator produces?", a: "Absolutely. After the AI generates your site, you can edit text, swap images, rearrange sections, change colors, and add or remove pages. The generator gives you a strong starting point, not a finished product you cannot change." },
  { q: "Do generated sites work on mobile?", a: "Yes. Every generator produces responsive sites that automatically adapt to phones, tablets, and desktops. You do not need to create separate mobile versions." },
];

// SVG Icons
const SearchIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="11" cy="11" r="8"></circle>
    <path d="m21 21-4.35-4.35"></path>
  </svg>
);

const ArrowRight = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12h14"></path>
    <path d="m12 5 7 7-7 7"></path>
  </svg>
);

const GlobeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="10"></circle>
    <path d="M2 12h20"></path>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
  </svg>
);

const TargetIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="10"></circle>
    <circle cx="12" cy="12" r="6"></circle>
    <circle cx="12" cy="12" r="2"></circle>
  </svg>
);

const ImageIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
    <circle cx="8.5" cy="8.5" r="1.5"></circle>
    <polyline points="21 15 16 10 5 21"></polyline>
  </svg>
);

const EditIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
  </svg>
);

const CartIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="9" cy="21" r="1"></circle>
    <circle cx="20" cy="21" r="1"></circle>
    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
  </svg>
);

const LinkIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
  </svg>
);

const iconMap = {
  globe: GlobeIcon,
  target: TargetIcon,
  image: ImageIcon,
  edit: EditIcon,
  'shopping-cart': CartIcon,
  link: LinkIcon,
};

// Section 6 - How it works steps
const howSteps = [
  { num: "1", title: "PICK A GENERATOR", text: "Browse by category or search to find one that fits your goal." },
  { num: "2", title: "DESCRIBE YOUR SITE", text: "Tell our AI builder about your business in a sentence or two." },
  { num: "3", title: "GENERATE AND PUBLISH", text: "Get a fully built site in seconds. Customize anything, then go live." },
];

// Section 7 - Why Strikingly
const whyItems = [
  { icon: "zap", claim: "LIVE IN SECONDS", text: "Describe your site, we build it. No setup, no learning curve." },
  { icon: "smartphone", claim: "MOBILE BY DEFAULT", text: "Every generator produces responsive sites that work on any device." },
  { icon: "gift", claim: "FREE TO START", text: "Generate, customize, and publish without a credit card." },
];

const ZapIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
  </svg>
);

const SmartphoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
    <line x1="12" y1="18" x2="12.01" y2="18"></line>
  </svg>
);

const GiftIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="20 12 20 22 4 22 4 12"></polyline>
    <rect x="2" y="7" width="20" height="5"></rect>
    <line x1="12" y1="22" x2="12" y2="7"></line>
    <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path>
    <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path>
  </svg>
);

const whyIconMap = { zap: ZapIcon, smartphone: SmartphoneIcon, gift: GiftIcon };

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

// Main App Component
function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedSections, setExpandedSections] = useState({});
  const [expandedFaqs, setExpandedFaqs] = useState({ 0: true });

  // Filter generators based on search
  const getFilteredGenerators = () => {
    if (!searchQuery.trim()) {
      return allGenerators;
    }
    
    const q = searchQuery.toLowerCase();
    const filtered = {};
    
    Object.keys(allGenerators).forEach(key => {
      const section = allGenerators[key];
      const matchingItems = section.items.filter(item =>
        item.name.toLowerCase().includes(q) ||
        item.desc.toLowerCase().includes(q) ||
        section.title.toLowerCase().includes(q)
      );
      
      if (matchingItems.length > 0) {
        filtered[key] = { ...section, items: matchingItems };
      }
    });
    
    return filtered;
  };

  const filteredGenerators = getFilteredGenerators();
  const totalMatching = Object.values(filteredGenerators).reduce((sum, s) => sum + s.items.length, 0);

  // Toggle section expansion
  const toggleSection = (sectionId) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
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
    setSearchQuery("");
  };

  // Create slug from name
  const createSlug = (name) => name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');

  // Render category icon
  const renderCategoryIcon = (iconName) => {
    const IconComponent = iconMap[iconName];
    return IconComponent ? <IconComponent /> : null;
  };

  const renderWhyIcon = (iconName) => {
    const IconComponent = whyIconMap[iconName];
    return IconComponent ? <IconComponent /> : null;
  };

  // Render generator card (no category tag for directory cards)
  const renderGeneratorCard = (item, showCategory = false) => {
    const href = `/generators/${item.slug || createSlug(item.name)}`;
    return (
      <a 
        key={item.name} 
        href={href} 
        className="generator-card"
        aria-label={item.name}
      >
        <div className="name">{item.name}</div>
        <div className="description">{item.desc}</div>
        {showCategory && item.category && (
          <span className="category-tag">{item.category}</span>
        )}
      </a>
    );
  };

  // Render directory section
  const renderDirectorySection = (key, section) => {
    const isExpanded = expandedSections[section.id] !== false; // Default to collapsed
    const defaultVisible = 6;
    const visibleItems = isExpanded ? section.items : section.items.slice(0, defaultVisible);
    const hasMore = section.items.length > defaultVisible;

    return (
      <section key={key} id={section.id} className="mb-10">
        <h3 className="section-heading text-lg mb-2">{section.title}</h3>
        <p className="text-sm text-[var(--color-body)] mb-4">{section.desc}</p>
        
        <div className="grid-3">
          {visibleItems.map(item => renderGeneratorCard(item, false))}
        </div>
        
        {hasMore && (
          <button
            className="show-all-btn"
            onClick={() => toggleSection(section.id)}
            aria-expanded={isExpanded}
            aria-controls={`${section.id}-cards`}
          >
            {isExpanded ? `Show fewer` : `Show all ${section.items.length} generators`}
          </button>
        )}
      </section>
    );
  };

  return (
    <div className="strikingly-generators min-h-screen">
      {/* Section 0: Top bar */}
      <header className="top-bar">
        <div className="max-w-[1200px] mx-auto px-5">
          <a href="/" className="logo">{s.logo}</a>
        </div>
      </header>

      {/* Section 1: Breadcrumb */}
      <nav aria-label="Breadcrumb" className="breadcrumb max-w-[1200px] mx-auto px-5">
        <ol className="flex items-center list-none p-0 m-0">
          <li><a href="/">{s.breadcrumbHome}</a></li>
          <li className="separator" aria-hidden="true">></li>
          <li aria-current="page">{s.breadcrumbCurrent}</li>
        </ol>
      </nav>

      {/* Section 2: Hero */}
      <section className="hero">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h1>
                {s.heroH1Line1}<br />
                <span className="gradient-text">{s.heroH1Line2}</span>
              </h1>
              <p className="subheadline">{s.heroSub}</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href="/s/ai_site_builder" className="cta-primary">{s.ctaStart}</a>
                <a href="#all-generators" className="cta-secondary">{s.ctaBrowse}</a>
              </div>
            </div>
            <div className="flex justify-center md:justify-end">
              <svg 
                width="320" 
                height="240" 
                viewBox="0 0 320 240" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <rect x="20" y="20" width="280" height="200" rx="8" fill="#F4F6F8" stroke="#C6C9CD" strokeWidth="2"/>
                <rect x="40" y="40" width="240" height="30" rx="4" fill="#E2E4E7"/>
                <rect x="40" y="85" width="100" height="60" rx="4" fill="#8159BB" opacity="0.2"/>
                <rect x="155" y="85" width="125" height="25" rx="4" fill="#E2E4E7"/>
                <rect x="155" y="120" width="125" height="25" rx="4" fill="#E2E4E7"/>
                <rect x="40" y="160" width="240" height="40" rx="4" fill="#7671FF" opacity="0.15"/>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Featured Generators */}
      <section className="section max-w-[1200px] mx-auto px-5">
        <h2 className="section-heading">{s.featuredHeading}</h2>
        <p className="section-subheading">{s.featuredSub}</p>
        <div className="grid-3">
          {featuredGenerators.map(item => renderGeneratorCard(item, true))}
        </div>
      </section>

      {/* Section 4: Browse by Category */}
      <section className="section max-w-[1200px] mx-auto px-5">
        <h2 className="section-heading">{s.browseHeading}</h2>
        <div className="grid-3 mt-6">
          {categories.map(cat => {
            const Icon = iconMap[cat.icon];
            return (
              <a key={cat.slug} href={`#${cat.slug}`} className="category-card">
                {Icon && <div className="icon"><Icon /></div>}
                <div className="name">{cat.name}</div>
                <div className="description">{cat.desc}</div>
              </a>
            );
          })}
        </div>
      </section>

      {/* Section 5: All Generators */}
      <section id="all-generators" className="section max-w-[1200px] mx-auto px-5 bg-[var(--color-light-bg)] -mx-5 px-5 py-10">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="section-heading">{s.allHeading}</h2>
          <p className="section-subheading">{s.allSub}</p>
          
          {/* Search */}
          <div className="mb-6">
            <div className="search-input-wrapper">
              <div className="search-icon"><SearchIcon /></div>
              <input
                type="text"
                className="search-input"
                placeholder={s.searchPlaceholder}
                aria-label={s.searchLabel}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            {searchQuery && (
              <div className="result-count">{s.resultCount(totalMatching)}</div>
            )}
          </div>

          {/* Results or empty state */}
          {Object.keys(filteredGenerators).length === 0 ? (
            <div className="empty-state">
              <p>{s.noResults}</p>
              <button onClick={clearSearch} className="cta-secondary mr-3">{s.clearSearch}</button>
              <a href="/s/ai_site_builder">{s.tryBuilder}</a>
            </div>
          ) : (
            Object.keys(filteredGenerators).map(key => 
              renderDirectorySection(key, filteredGenerators[key])
            )
          )}
        </div>
      </section>

      {/* Section 6: How It Works */}
      <section className="section max-w-[1200px] mx-auto px-5">
        <h2 className="section-heading text-center mb-10">{s.howHeading}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {howSteps.map((step, idx) => (
            <div key={idx} className="step">
              <div className="step-number">{step.num}</div>
              <div className="step-title">{step.title}</div>
              <p className="text-sm text-[var(--color-body)]">{step.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 7: Why Strikingly */}
      <section className="section max-w-[1200px] mx-auto px-5 bg-[var(--color-light-bg)] -mx-5 px-5 py-10">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="section-heading text-center mb-10">{s.whyHeading}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyItems.map((item, idx) => (
              <div key={idx} className="why-item">
                <div className="icon mx-auto">{renderWhyIcon(item.icon)}</div>
                <div className="claim">{item.claim}</div>
                <p className="text-sm text-[var(--color-body)]">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 8: FAQ */}
      <section className="section max-w-[1200px] mx-auto px-5">
        <h2 className="section-heading mb-6">{s.faqHeading}</h2>
        <div className="faq-accordion max-w-[700px]">
          {faqs.map((faq, idx) => (
            <React.Fragment key={idx}>
              <button
                onClick={() => toggleFaq(idx)}
                aria-expanded={!!expandedFaqs[idx]}
                aria-controls={`faq-answer-${idx}`}
              >
                {faq.q}
                <span>{expandedFaqs[idx] ? '−' : '+'}</span>
              </button>
              <div 
                id={`faq-answer-${idx}`} 
                className="faq-answer"
                aria-hidden={!expandedFaqs[idx]}
              >
                <p>{faq.a}</p>
              </div>
            </React.Fragment>
          ))}
        </div>
      </section>

      {/* Section 9: Closing CTA */}
      <section className="closing-cta">
        <div className="max-w-[600px] mx-auto px-5">
          <h2>{s.closingHeading}</h2>
          <p>{s.closingSub}</p>
          <a href="/s/ai_site_builder" className="cta-primary">{s.closingCta}</a>
        </div>
      </section>

      {/* Section 10: Footer */}
      <footer className="footer">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <a href="/" className="logo text-[var(--color-purple)]">{s.logo}</a>
            </div>
            <div>
              <div className="font-bold mb-3 text-sm">Product</div>
              {footerLinks.product.map((link, i) => (
                <div key={i} className="mb-1"><a href={link.href}>{link.label}</a></div>
              ))}
            </div>
            <div>
              <div className="font-bold mb-3 text-sm">Company</div>
              {footerLinks.company.map((link, i) => (
                <div key={i} className="mb-1"><a href={link.href}>{link.label}</a></div>
              ))}
            </div>
            <div>
              <div className="font-bold mb-3 text-sm">Legal</div>
              {footerLinks.legal.map((link, i) => (
                <div key={i} className="mb-1"><a href={link.href}>{link.label}</a></div>
              ))}
            </div>
          </div>
          <div className="copyright text-center text-xs">
            © {new Date().getFullYear()} Strikingly. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
