import React, { useState } from 'react';

// All user-visible strings for i18n readiness
const strings = {
  en: {
    logo: "strikingly AI",
    breadcrumbHome: "Strikingly",
    breadcrumbCurrent: "AI Generators",
    heroH1Line1: "BUILD ANY KIND OF SITE",
    heroH1Line2: "WITH AI, IN AN INSTANT",
    heroSubheadline: "Browse the right generator for what you're building, or jump straight into our AI site builder.",
    ctaStartBuilding: "START BUILDING - IT'S FREE",
    ctaBrowseGenerators: "BROWSE GENERATORS",
    featuredHeading: "FEATURED GENERATORS",
    featuredSubheading: "A few common starting points.",
    browseCategoryHeading: "BROWSE BY CATEGORY",
    allGeneratorsId: "all-generators",
    allGeneratorsHeading: "ALL GENERATORS",
    allGeneratorsSubheading: "Sixty-plus generators, organized by what you're building.",
    searchPlaceholder: "Search generators...",
    searchAriaLabel: "Search generators",
    searchResults: (count) => `${count} generators match`,
    searchEmpty: "No generators match your search.",
    searchClear: "Clear search",
    searchEmptyCta: "Can't find it? Start with our AI builder.",
    howItWorksHeading: "HOW IT WORKS",
    whyStrikinglyHeading: "WHY STRIKINGLY",
    faqHeading: "FREQUENTLY ASKED QUESTIONS",
    closingHeading: "READY TO BUILD?",
    closingSub: "Pick a generator above, or jump straight into our AI builder.",
    closingCta: "START WITH AI BUILDER",
    footerCopyright: "© 2026 Strikingly, Inc. All rights reserved.",
  }
};

const s = strings.en;

// Generator data - all visible in initial HTML
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

const categoryCards = [
  { name: "Websites", desc: "AI-built business and personal sites for any goal.", slug: "websites", icon: "🌐" },
  { name: "Landing Pages", desc: "Single-page sites built to convert visitors fast.", slug: "landing-pages", icon: "📄" },
  { name: "Portfolios", desc: "Showcase your work with a clean, focused site.", slug: "portfolios", icon: "🎨" },
  { name: "Blogs", desc: "Publish-ready blogs with built-in SEO basics.", slug: "blogs", icon: "✍️" },
  { name: "Online Stores", desc: "Sell products online with payments built in.", slug: "stores", icon: "🛒" },
  { name: "Link-in-Bio", desc: "One link, all your places. Made for creators.", slug: "link-in-bio", icon: "🔗" },
];

const allGenerators = {
  websites: {
    id: "websites",
    heading: "Websites",
    desc: "Full sites for businesses, events, and personal projects.",
    icon: "🌐",
    generators: [
      { name: "AI Website Generator", desc: "Describe your business, get a full site", slug: "ai-website-generator" },
      { name: "One-Page Website Builder", desc: "Simple sites, single scroll", slug: "one-page-website-builder" },
      { name: "Wedding Website Generator", desc: "Share your day with guests", slug: "wedding-website-generator" },
      { name: "Restaurant Website Builder", desc: "Menu, hours, reservations, done", slug: "restaurant-website-builder" },
      { name: "Free Website Builder for Photographers", desc: "Showcase your work beautifully", slug: "free-website-builder-for-photographers" },
      { name: "AI Website Generator for Yoga Instructors", desc: "Class schedules and booking", slug: "ai-website-generator-for-yoga-instructors" },
      { name: "No-Code Website Builder", desc: "Build without touching code", slug: "no-code-website-builder" },
      { name: "Beautiful Website Generator", desc: "Stunning designs in seconds", slug: "beautiful-website-generator" },
      { name: "Business Website Builder", desc: "Professional sites for any company", slug: "business-website-builder" },
      { name: "Personal Website Generator", desc: "Your story, your way", slug: "personal-website-generator" },
    ]
  },
  landingPages: {
    id: "landing-pages",
    heading: "Landing Pages",
    desc: "Focused pages built to convert visitors into leads or customers.",
    icon: "📄",
    generators: [
      { name: "AI Landing Page Maker", desc: "One-page sites built to convert", slug: "ai-landing-page-maker" },
      { name: "Product Launch Landing Page", desc: "Announce and sell your product", slug: "product-launch-landing-page" },
      { name: "Event Registration Page Builder", desc: "Sign-ups made simple", slug: "event-registration-page-builder" },
      { name: "Free Landing Page Generator", desc: "No cost, high impact", slug: "free-landing-page-generator" },
      { name: "AI Landing Page for Coaches", desc: "Attract and convert clients", slug: "ai-landing-page-for-coaches" },
      { name: "One-Page Sales Generator", desc: "Sell with a single scroll", slug: "one-page-sales-generator" },
      { name: "Lead Capture Page Builder", desc: "Grow your email list fast", slug: "lead-capture-page-builder" },
      { name: "Beautiful Landing Page Maker", desc: "Designs that convert", slug: "beautiful-landing-page-maker" },
      { name: "No-Code Landing Page Builder", desc: "Launch without developers", slug: "no-code-landing-page-builder" },
      { name: "AI Landing Page for Consultants", desc: "Win clients with clarity", slug: "ai-landing-page-for-consultants" },
    ]
  },
  portfolios: {
    id: "portfolios",
    heading: "Portfolios",
    desc: "Clean, focused showcases for creatives and professionals.",
    icon: "🎨",
    generators: [
      { name: "Free Portfolio Generator", desc: "For creatives, in minutes, no fee", slug: "free-portfolio-generator" },
      { name: "Portfolio Generator for Designers", desc: "Showcase projects with style", slug: "portfolio-generator-for-designers" },
      { name: "AI Portfolio Builder for Photographers", desc: "Beautiful galleries, zero hassle", slug: "ai-portfolio-builder-for-photographers" },
      { name: "Portfolio Generator for Developers", desc: "Code projects, presented well", slug: "portfolio-generator-for-developers" },
      { name: "One-Page Portfolio Builder", desc: "Simple and elegant", slug: "one-page-portfolio-builder" },
      { name: "No-Code Portfolio Generator", desc: "Build without code", slug: "no-code-portfolio-generator" },
      { name: "Beautiful Portfolio Maker", desc: "Designs that stand out", slug: "beautiful-portfolio-maker" },
      { name: "AI Portfolio for Writers", desc: "Share your words with impact", slug: "ai-portfolio-for-writers" },
      { name: "Portfolio Generator for Architects", desc: "Projects presented professionally", slug: "portfolio-generator-for-architects" },
      { name: "Free Portfolio Builder for Artists", desc: "Your work, your way", slug: "free-portfolio-builder-for-artists" },
    ]
  },
  blogs: {
    id: "blogs",
    heading: "Blogs",
    desc: "Publish-ready blogs with built-in SEO basics.",
    icon: "✍️",
    generators: [
      { name: "Blog Generator for Beginners", desc: "Publish-ready in minutes", slug: "blog-generator-for-beginners" },
      { name: "AI Blog Builder", desc: "Start writing, skip the setup", slug: "ai-blog-builder" },
      { name: "Free Blog Generator", desc: "No cost, full features", slug: "free-blog-generator" },
      { name: "One-Page Blog Builder", desc: "Simple posts, clean layout", slug: "one-page-blog-builder" },
      { name: "Blog Generator for Food Writers", desc: "Recipes and stories, shared", slug: "blog-generator-for-food-writers" },
      { name: "No-Code Blog Builder", desc: "Launch without developers", slug: "no-code-blog-builder" },
      { name: "Beautiful Blog Generator", desc: "Designs readers love", slug: "beautiful-blog-generator" },
      { name: "AI Blog for Travel Writers", desc: "Share journeys with ease", slug: "ai-blog-for-travel-writers" },
      { name: "Blog Generator for Fitness Coaches", desc: "Content that motivates", slug: "blog-generator-for-fitness-coaches" },
      { name: "Free Blog Builder for Educators", desc: "Teach and share online", slug: "free-blog-builder-for-educators" },
    ]
  },
  stores: {
    id: "stores",
    heading: "Online Stores",
    desc: "Sell products online with payments built in.",
    icon: "🛒",
    generators: [
      { name: "Online Store Builder", desc: "Start selling without writing code", slug: "online-store-builder" },
      { name: "Online Store Builder for Restaurants", desc: "Take orders, accept payments", slug: "online-store-builder-for-restaurants" },
      { name: "AI Store Generator", desc: "Describe products, start selling", slug: "ai-store-generator" },
      { name: "Free Store Builder", desc: "No fees to launch", slug: "free-store-builder" },
      { name: "One-Page Store Generator", desc: "Sell with a single page", slug: "one-page-store-generator" },
      { name: "No-Code Store Builder", desc: "Launch without developers", slug: "no-code-store-builder" },
      { name: "Beautiful Store Generator", desc: "Designs that sell", slug: "beautiful-store-generator" },
      { name: "Online Store for Jewelry Makers", desc: "Showcase and sell with ease", slug: "online-store-for-jewelry-makers" },
      { name: "AI Store Builder for Boutiques", desc: "Fashion sites that convert", slug: "ai-store-builder-for-boutiques" },
      { name: "Free Store Generator for Makers", desc: "Handmade to sold", slug: "free-store-generator-for-makers" },
    ]
  },
  linkInBio: {
    id: "link-in-bio",
    heading: "Link-in-Bio",
    desc: "One link, all your places. Made for creators.",
    icon: "🔗",
    generators: [
      { name: "Link-in-Bio Generator", desc: "One link for all your channels", slug: "link-in-bio-generator" },
      { name: "Free Link-in-Bio Builder", desc: "No cost, instant setup", slug: "free-link-in-bio-builder" },
      { name: "AI Link-in-Bio Maker", desc: "Describe your links, done", slug: "ai-link-in-bio-maker" },
      { name: "Link-in-Bio for Creators", desc: "All your content, one place", slug: "link-in-bio-for-creators" },
      { name: "One-Page Link-in-Bio Builder", desc: "Simple and clean", slug: "one-page-link-in-bio-builder" },
      { name: "No-Code Link-in-Bio Generator", desc: "Launch without developers", slug: "no-code-link-in-bio-generator" },
      { name: "Beautiful Link-in-Bio Maker", desc: "Designs that match your brand", slug: "beautiful-link-in-bio-maker" },
      { name: "Link-in-Bio for Influencers", desc: "Drive traffic everywhere", slug: "link-in-bio-for-influencers" },
      { name: "Free Link-in-Bio for Musicians", desc: "Share music, merch, and more", slug: "free-link-in-bio-for-musicians" },
      { name: "AI Link-in-Bio for Podcasters", desc: "Episodes, socials, support", slug: "ai-link-in-bio-for-podcasters" },
    ]
  }
};

const howItWorksSteps = [
  { num: "1", title: "PICK A GENERATOR", text: "Browse by category or search to find one that fits your goal." },
  { num: "2", title: "DESCRIBE YOUR SITE", text: "Tell our AI builder about your business in a sentence or two." },
  { num: "3", title: "GENERATE AND PUBLISH", text: "Get a fully built site in seconds. Customize anything, then go live." },
];

const whyStrikinglyItems = [
  { icon: "⚡", title: "LIVE IN SECONDS", text: "Describe your site, we build it. No setup, no learning curve." },
  { icon: "📱", title: "MOBILE BY DEFAULT", text: "Every generator produces responsive sites that work on any device." },
  { icon: "🎁", title: "FREE TO START", text: "Generate, customize, and publish without a credit card." },
];

const faqItems = [
  { q: "What is an AI site generator?", a: "An AI site generator is a tool that creates a complete website based on a short description you provide. Instead of starting from a blank page or a rigid template, you describe your business or goal in plain language, and the generator builds a site tailored to your needs." },
  { q: "How is a generator different from a template?", a: "Templates are pre-designed layouts you customize manually. Generators use AI to create a unique site from your description, including structure, content suggestions, and styling. You still customize, but you start much closer to finished." },
  { q: "Are these generators free to use?", a: "Yes. You can generate, customize, and publish a site without a credit card. Paid plans unlock additional features like custom domains and advanced analytics." },
  { q: "What kinds of sites can I build?", a: "You can build websites, landing pages, portfolios, blogs, online stores, and link-in-bio pages. Each category has multiple generators tuned for specific industries and goals." },
  { q: "Can I customize what the generator produces?", a: "Absolutely. After generation, you can edit text, images, colors, layout, and add or remove sections. Everything is fully editable in the Strikingly editor." },
  { q: "Do generated sites work on mobile?", a: "Yes. Every generator produces responsive sites that adapt automatically to phones, tablets, and desktops. No extra work required." },
];

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
      const matches = section.generators.filter(g =>
        g.name.toLowerCase().includes(q) ||
        g.desc.toLowerCase().includes(q) ||
        section.heading.toLowerCase().includes(q)
      );
      if (matches.length > 0) {
        filtered[key] = { ...section, generators: matches };
      }
    });
    return filtered;
  };

  const filteredGenerators = getFilteredGenerators();
  const totalMatchCount = Object.values(filteredGenerators).reduce((sum, s) => sum + s.generators.length, 0);

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

  return (
    <div className="min-h-screen bg-white text-[#2E2E2F] font-['Open_Sans']">
      {/* Section 0: Top bar */}
      <header className="bg-white border-b border-[#E2E4E7]">
        <div className="max-w-[1200px] mx-auto px-5 py-4">
          <a href="/" className="font-['Josefin_Sans'] font-bold text-xl tracking-[0.5px] text-[#4B5056] uppercase">
            {s.logo}
          </a>
        </div>
      </header>

      {/* Section 1: Breadcrumb */}
      <nav aria-label="Breadcrumb" className="max-w-[1200px] mx-auto px-5 py-3">
        <ol className="flex items-center text-sm text-[#636972]">
          <li>
            <a href="/" className="hover:text-[#8159BB]">{s.breadcrumbHome}</a>
          </li>
          <li className="mx-2 text-[#8159BB]">›</li>
          <li aria-current="page" className="text-[#636972]">{s.breadcrumbCurrent}</li>
        </ol>
      </nav>

      {/* Section 2: Hero */}
      <section className="max-w-[1200px] mx-auto px-5 pt-8 pb-16 md:pt-12 md:pb-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="font-['Josefin_Sans'] font-bold text-[40px] md:text-[48px] leading-[1.2] tracking-[0.5px] uppercase mb-4">
              <span className="text-[#2E2E2F]">{s.heroH1Line1}</span><br />
              <span className="bg-gradient-to-r from-[#7671FF] to-[#CB0C9F] bg-clip-text text-transparent">{s.heroH1Line2}</span>
            </h1>
            <p className="text-[#636972] text-[15px] leading-[1.6] mb-8 max-w-[480px]">
              {s.heroSubheadline}
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="/s/ai_site_builder"
                className="inline-flex items-center justify-center h-11 px-6 rounded font-['Josefin_Sans'] font-bold text-sm uppercase tracking-[0.5px] bg-gradient-to-r from-[#7671FF] to-[#CB0C9F] text-white hover:opacity-90 transition-opacity"
              >
                {s.ctaStartBuilding}
              </a>
              <a
                href="#all-generators"
                className="inline-flex items-center justify-center h-11 px-6 rounded font-['Josefin_Sans'] font-bold text-sm uppercase tracking-[0.5px] border border-[#8159BB] text-[#8159BB] hover:bg-[#8159BB] hover:text-white transition-colors"
              >
                {s.ctaBrowseGenerators}
              </a>
            </div>
          </div>
          <div className="flex justify-center md:justify-end">
            <svg width="420" height="280" viewBox="0 0 420 280" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <rect x="30" y="30" width="360" height="220" rx="12" fill="#F4F6F8" stroke="#C6C9CD" strokeWidth="2"/>
              <rect x="50" y="55" width="320" height="30" rx="4" fill="#E2E4E7"/>
              <circle cx="70" cy="70" r="6" fill="#C6C9CD"/>
              <circle cx="90" cy="70" r="6" fill="#C6C9CD"/>
              <circle cx="110" cy="70" r="6" fill="#C6C9CD"/>
              <rect x="50" y="100" width="200" height="12" rx="2" fill="#C6C9CD"/>
              <rect x="50" y="120" width="280" height="12" rx="2" fill="#E2E4E7"/>
              <rect x="50" y="140" width="240" height="12" rx="2" fill="#E2E4E7"/>
              <rect x="50" y="170" width="100" height="36" rx="6" fill="#8159BB"/>
              <rect x="160" y="170" width="100" height="36" rx="6" fill="#E2E4E7"/>
              <rect x="50" y="220" width="320" height="8" rx="2" fill="#E2E4E7"/>
            </svg>
          </div>
        </div>
      </section>

      {/* Section 3: Featured Generators */}
      <section className="bg-[#F4F6F8] py-12">
        <div className="max-w-[1200px] mx-auto px-5">
          <h2 className="font-['Josefin_Sans'] font-bold text-[28px] md:text-[32px] tracking-[0.5px] uppercase text-[#4B5056] mb-2 text-center">
            {s.featuredHeading}
          </h2>
          <p className="text-[#636972] text-center mb-8">{s.featuredSubheading}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {featuredGenerators.map((gen, idx) => (
              <a
                key={idx}
                href={`/generators/${gen.slug}`}
                className="block bg-white border border-[#C6C9CD] rounded-[3px] p-5 hover:border-[#8159BB] hover:shadow-md transition-all"
              >
                <div className="font-['Josefin_Sans'] font-bold text-[15px] tracking-[0.3px] uppercase mb-2 text-[#2E2E2F]">
                  {gen.name}
                </div>
                <p className="text-[#636972] text-sm mb-3 leading-[1.5]">{gen.desc}</p>
                <span className="inline-block text-[11px] font-['Josefin_Sans'] uppercase tracking-[0.5px] px-2 py-0.5 border border-[#8159BB] text-[#8159BB] rounded-[3px]">
                  {gen.category}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Browse by Category */}
      <section className="py-12">
        <div className="max-w-[1200px] mx-auto px-5">
          <h2 className="font-['Josefin_Sans'] font-bold text-[28px] md:text-[32px] tracking-[0.5px] uppercase text-[#4B5056] mb-8 text-center">
            {s.browseCategoryHeading}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {categoryCards.map((cat, idx) => (
              <a
                key={idx}
                href={`#${cat.slug}`}
                className="block bg-white border border-[#C6C9CD] rounded-[3px] p-6 hover:border-[#8159BB] hover:shadow-md transition-all"
              >
                <div className="text-3xl mb-4" aria-hidden="true">{cat.icon}</div>
                <div className="font-['Josefin_Sans'] font-bold text-sm tracking-[1px] uppercase mb-2 text-[#4B5056]">
                  {cat.name}
                </div>
                <p className="text-[#636972] text-sm mb-4 leading-[1.5]">{cat.desc}</p>
                <span className="inline-block text-[#8159BB]" aria-hidden="true">→</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: All Generators Directory */}
      <section id={s.allGeneratorsId} className="bg-[#F4F6F8] py-12">
        <div className="max-w-[1200px] mx-auto px-5">
          <h2 className="font-['Josefin_Sans'] font-bold text-[28px] md:text-[32px] tracking-[0.5px] uppercase text-[#4B5056] mb-2">
            {s.allGeneratorsHeading}
          </h2>
          <p className="text-[#636972] mb-6">{s.allGeneratorsSubheading}</p>

          {/* Search Input */}
          <div className="mb-8">
            <div className="relative max-w-[480px]">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#636972]" aria-hidden="true">🔍</span>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={s.searchPlaceholder}
                aria-label={s.searchAriaLabel}
                className="w-full h-11 pl-11 pr-4 border border-[#C6C9CD] rounded-[3px] text-sm focus:outline-none focus:border-[#8159BB]"
              />
            </div>
            {searchQuery && (
              <p className="mt-2 text-sm text-[#636972]">
                {s.searchResults(totalMatchCount)}
              </p>
            )}
          </div>

          {/* Empty State */}
          {Object.keys(filteredGenerators).length === 0 && (
            <div className="bg-white border border-[#C6C9CD] rounded-[3px] p-8 text-center">
              <p className="text-[#636972] mb-4">{s.searchEmpty}</p>
              <button
                onClick={clearSearch}
                className="text-[#8159BB] underline mr-4"
              >
                {s.searchClear}
              </button>
              <a href="/s/ai_site_builder" className="text-[#8159BB] underline">
                {s.searchEmptyCta}
              </a>
            </div>
          )}

          {/* Category Subsections */}
          {Object.keys(filteredGenerators).map((key) => {
            const section = filteredGenerators[key];
            const isExpanded = expandedSections[section.id] !== false;
            const displayCount = isExpanded ? section.generators.length : Math.min(6, section.generators.length);
            const hasMore = section.generators.length > 6;

            return (
              <div key={section.id} id={section.id} className="mb-10">
                <h3 className="font-['Josefin_Sans'] font-bold text-xl tracking-[0.5px] uppercase text-[#4B5056] mb-1">
                  {section.heading}
                </h3>
                <p className="text-[#636972] text-sm mb-4">{section.desc}</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {section.generators.slice(0, displayCount).map((gen, idx) => (
                    <a
                      key={idx}
                      href={`/generators/${gen.slug}`}
                      className="block bg-white border border-[#C6C9CD] rounded-[3px] p-5 hover:border-[#8159BB] hover:shadow-md transition-all"
                    >
                      <div className="text-2xl mb-3" aria-hidden="true">{section.icon}</div>
                      <div className="font-['Josefin_Sans'] font-bold text-[15px] tracking-[0.3px] uppercase mb-2 text-[#2E2E2F]">
                        {gen.name}
                      </div>
                      <p className="text-[#636972] text-sm leading-[1.5]">{gen.desc}</p>
                    </a>
                  ))}
                </div>

                {hasMore && (
                  <button
                    onClick={() => toggleSection(section.id)}
                    aria-expanded={isExpanded}
                    aria-controls={`${section.id}-cards`}
                    className="mt-4 text-sm text-[#8159BB] font-['Josefin_Sans'] uppercase tracking-[0.5px] hover:underline"
                  >
                    {isExpanded ? `Show fewer` : `Show all ${section.generators.length} generators`}
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
          <h2 className="font-['Josefin_Sans'] font-bold text-[28px] md:text-[32px] tracking-[0.5px] uppercase text-[#4B5056] mb-10 text-center">
            {s.howItWorksHeading}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {howItWorksSteps.map((step, idx) => (
              <div key={idx} className="text-center">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#8159BB] text-white font-['Josefin_Sans'] font-bold mb-4">
                  {step.num}
                </div>
                <div className="font-['Josefin_Sans'] font-bold text-sm tracking-[1px] uppercase mb-2 text-[#4B5056]">
                  {step.title}
                </div>
                <p className="text-[#636972] text-sm leading-[1.6]">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7: Why Strikingly */}
      <section className="bg-[#F4F6F8] py-12">
        <div className="max-w-[1200px] mx-auto px-5">
          <h2 className="font-['Josefin_Sans'] font-bold text-[28px] md:text-[32px] tracking-[0.5px] uppercase text-[#4B5056] mb-10 text-center">
            {s.whyStrikinglyHeading}
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {whyStrikinglyItems.map((item, idx) => (
              <div key={idx} className="bg-white border border-[#C6C9CD] rounded-[3px] p-6 text-center">
                <div className="text-3xl mb-4" aria-hidden="true">{item.icon}</div>
                <div className="font-['Josefin_Sans'] font-bold text-sm tracking-[1px] uppercase mb-2 text-[#4B5056]">
                  {item.title}
                </div>
                <p className="text-[#636972] text-sm leading-[1.6]">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 8: FAQ */}
      <section className="py-12">
        <div className="max-w-[1200px] mx-auto px-5">
          <h2 className="font-['Josefin_Sans'] font-bold text-[28px] md:text-[32px] tracking-[0.5px] uppercase text-[#4B5056] mb-8 text-center">
            {s.faqHeading}
          </h2>
          <div className="max-w-[800px] mx-auto space-y-2">
            {faqItems.map((item, idx) => (
              <div key={idx} className="border border-[#C6C9CD] rounded-[3px] overflow-hidden">
                <button
                  onClick={() => toggleFaq(idx)}
                  aria-expanded={!!expandedFaqs[idx]}
                  aria-controls={`faq-answer-${idx}`}
                  className="w-full flex items-center justify-between px-6 py-4 text-left font-['Josefin_Sans'] font-bold text-sm tracking-[0.5px] uppercase text-[#4B5056] hover:bg-[#F4F6F8]"
                >
                  <span>{item.q}</span>
                  <span className="text-[#8159BB] text-xl" aria-hidden="true">{expandedFaqs[idx] ? '−' : '+'}</span>
                </button>
                {expandedFaqs[idx] && (
                  <div id={`faq-answer-${idx}`} className="px-6 pb-6 text-[#636972] text-sm leading-[1.7]">
                    <p>{item.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 9: Closing CTA */}
      <section className="py-16 bg-white border-t border-[#E2E4E7]">
        <div className="max-w-[1200px] mx-auto px-5 text-center">
          <h2 className="font-['Josefin_Sans'] font-bold text-[32px] tracking-[0.5px] uppercase text-[#4B5056] mb-3">
            {s.closingHeading}
          </h2>
          <p className="text-[#636972] mb-6">{s.closingSub}</p>
          <a
            href="/s/ai_site_builder"
            className="inline-flex items-center justify-center h-11 px-8 rounded font-['Josefin_Sans'] font-bold text-sm uppercase tracking-[0.5px] bg-gradient-to-r from-[#7671FF] to-[#CB0C9F] text-white hover:opacity-90 transition-opacity"
          >
            {s.closingCta}
          </a>
        </div>
      </section>

      {/* Section 10: Footer */}
      <footer className="bg-[#2E2E2F] text-[#C6C9CD] py-10 text-sm">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-y-8 mb-8">
            <div>
              <div className="font-['Josefin_Sans'] font-bold text-white uppercase tracking-[0.5px] mb-4">Strikingly</div>
            </div>
            <div>
              <div className="font-bold text-white mb-3">Product</div>
              <a href="/templates" className="block mb-1.5 hover:text-white">Templates</a>
              <a href="/pricing" className="block mb-1.5 hover:text-white">Pricing</a>
              <a href="/blog" className="block mb-1.5 hover:text-white">Blog</a>
            </div>
            <div>
              <div className="font-bold text-white mb-3">Company</div>
              <a href="/about" className="block mb-1.5 hover:text-white">About</a>
              <a href="/support" className="block mb-1.5 hover:text-white">Support</a>
            </div>
            <div>
              <div className="font-bold text-white mb-3">Legal</div>
              <a href="/terms" className="block mb-1.5 hover:text-white">Terms</a>
              <a href="/privacy" className="block mb-1.5 hover:text-white">Privacy</a>
            </div>
            <div></div>
          </div>
          <div className="pt-6 border-t border-[#4B5056] text-xs">
            {s.footerCopyright}
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
