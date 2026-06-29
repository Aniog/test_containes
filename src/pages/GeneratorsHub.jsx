import React, { useState, useEffect, useMemo } from 'react';
import './GeneratorsHub.css';

// Strings object for i18n readiness
const strings = {
  en: {
    pageTitle: 'AI Website Generators - Build Any Site in Seconds | Strikingly',
    pageDescription: 'Browse Strikingly\'s AI-powered website generators. Choose one for your industry, goal, or site type and create a website in seconds, no code required.',
    breadcrumbHome: 'Strikingly',
    breadcrumbCurrent: 'AI Generators',
    heroH1Line1: 'BUILD ANY KIND OF SITE',
    heroH1Line2: 'WITH AI, IN AN INSTANT',
    heroSubheadline: 'Browse the right generator for what you\'re building, or jump straight into our AI site builder.',
    heroCtaPrimary: 'START BUILDING - IT\'S FREE',
    heroCtaSecondary: 'BROWSE GENERATORS',
    featuredHeading: 'FEATURED GENERATORS',
    featuredSubheading: 'A few common starting points.',
    browseHeading: 'BROWSE BY CATEGORY',
    allGeneratorsHeading: 'ALL GENERATORS',
    allGeneratorsSubheading: 'Sixty-plus generators, organized by what you\'re building.',
    searchPlaceholder: 'Search generators...',
    searchAriaLabel: 'Search generators',
    searchResultsCount: (count) => `${count} generators match`,
    noResults: 'No generators match your search.',
    clearSearch: 'Clear search',
    cantFindIt: "Can't find it? Start with our AI builder.",
    howItWorksHeading: 'HOW IT WORKS',
    whyHeading: 'WHY STRIKINGLY',
    faqHeading: 'FREQUENTLY ASKED QUESTIONS',
    closingHeading: 'READY TO BUILD?',
    closingSub: 'Pick a generator above, or jump straight into our AI builder.',
    closingCta: 'START WITH AI BUILDER',
    footerCopyright: `© ${new Date().getFullYear()} Strikingly. All rights reserved.`,
  }
};

// Sample data
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

const categories = [
  { name: 'Websites', description: 'AI-built business and personal sites for any goal.', slug: 'websites', icon: 'globe' },
  { name: 'Landing Pages', description: 'Single-page sites built to convert visitors fast.', slug: 'landing-pages', icon: 'layout' },
  { name: 'Portfolios', description: 'Showcase your work with a clean, focused site.', slug: 'portfolios', icon: 'briefcase' },
  { name: 'Blogs', description: 'Publish-ready blogs with built-in SEO basics.', slug: 'blogs', icon: 'pen-tool' },
  { name: 'Online Stores', description: 'Sell products online with payments built in.', slug: 'stores', icon: 'shopping-bag' },
  { name: 'Link-in-Bio', description: 'One link, all your places. Made for creators.', slug: 'link-in-bio', icon: 'link' },
];

const allGenerators = {
  websites: {
    heading: 'Websites',
    description: 'Business and personal sites for any goal.',
    generators: [
      { name: 'AI Website Generator', description: 'Describe your business, get a full site', slug: 'ai-website-generator' },
      { name: 'Free Website Builder for Photographers', description: 'Showcase your photography portfolio', slug: 'free-website-builder-photographers' },
      { name: 'One-Page Wedding Website Builder', description: 'Share your day with guests', slug: 'one-page-wedding-website-builder' },
      { name: 'Restaurant Website Builder', description: 'Menu, hours, reservations, done', slug: 'restaurant-website-builder' },
      { name: 'Yoga Studio Website Generator', description: 'Class schedules, booking, and more', slug: 'yoga-studio-website-generator' },
      { name: 'Real Estate Agent Website Builder', description: 'Listings, bio, and lead capture', slug: 'real-estate-agent-website-builder' },
      { name: 'Consultant Website Generator', description: 'Professional services, simplified', slug: 'consultant-website-generator' },
      { name: 'Nonprofit Website Builder', description: 'Tell your story, accept donations', slug: 'nonprofit-website-builder' },
      { name: 'One-Page Website Builder', description: 'Simple sites, single scroll', slug: 'one-page-website-builder' },
      { name: 'AI Business Website Generator', description: 'Professional sites in seconds', slug: 'ai-business-website-generator' },
    ]
  },
  'landing-pages': {
    heading: 'Landing Pages',
    description: 'Single-page sites built to convert visitors fast.',
    generators: [
      { name: 'AI Landing Page Maker', description: 'One-page sites built to convert', slug: 'ai-landing-page-maker' },
      { name: 'Product Launch Landing Page', description: 'Built for conversions', slug: 'product-launch-landing-page' },
      { name: 'Event Landing Page Generator', description: 'RSVP, schedule, and details', slug: 'event-landing-page-generator' },
      { name: 'Lead Generation Landing Page', description: 'Capture leads and grow your list', slug: 'lead-generation-landing-page' },
      { name: 'Webinar Registration Page', description: 'Signups and reminders', slug: 'webinar-registration-page' },
      { name: 'App Download Landing Page', description: 'Drive installs and signups', slug: 'app-download-landing-page' },
      { name: 'Course Sales Landing Page', description: 'Sell your online course', slug: 'course-sales-landing-page' },
      { name: 'Book Launch Landing Page', description: 'Pre-orders and reviews', slug: 'book-launch-landing-page' },
    ]
  },
  portfolios: {
    heading: 'Portfolios',
    description: 'Showcase your work with a clean, focused site.',
    generators: [
      { name: 'Free Portfolio Generator', description: 'For creatives, in minutes, no fee', slug: 'free-portfolio-generator' },
      { name: 'Portfolio Generator for Designers', description: 'Your work, beautifully presented', slug: 'portfolio-generator-designers' },
      { name: 'Photography Portfolio Website', description: 'Galleries, prints, and contact', slug: 'photography-portfolio-website' },
      { name: 'Artist Portfolio Generator', description: 'Show your art, sell your work', slug: 'artist-portfolio-generator' },
      { name: 'Writer Portfolio Website', description: 'Clips, bio, and contact info', slug: 'writer-portfolio-website' },
      { name: 'Developer Portfolio Generator', description: 'Projects, skills, and resume', slug: 'developer-portfolio-generator' },
      { name: 'Model Portfolio Website', description: 'Headshots, stats, and contact', slug: 'model-portfolio-website' },
      { name: 'Architecture Portfolio Generator', description: 'Projects and case studies', slug: 'architecture-portfolio-generator' },
      { name: 'Fashion Portfolio Website', description: 'Editorials and lookbook', slug: 'fashion-portfolio-website' },
    ]
  },
  blogs: {
    heading: 'Blogs',
    description: 'Publish-ready blogs with built-in SEO basics.',
    generators: [
      { name: 'Blog Generator for Beginners', description: 'Publish-ready in minutes', slug: 'blog-generator-for-beginners' },
      { name: 'AI Blog Writer and Generator', description: 'Posts, layout, and SEO', slug: 'ai-blog-writer-generator' },
      { name: 'Travel Blog Website Builder', description: 'Stories, maps, and photos', slug: 'travel-blog-website-builder' },
      { name: 'Food Blog Generator', description: 'Recipes, photos, and newsletter', slug: 'food-blog-generator' },
      { name: 'Personal Blog Website', description: 'Your thoughts, your design', slug: 'personal-blog-website' },
      { name: 'Business Blog Generator', description: 'Content marketing made easy', slug: 'business-blog-generator' },
      { name: 'Lifestyle Blog Builder', description: 'Share your passion', slug: 'lifestyle-blog-builder' },
      { name: 'Tech Blog Website Generator', description: 'Tutorials, reviews, and more', slug: 'tech-blog-website-generator' },
    ]
  },
  stores: {
    heading: 'Online Stores',
    description: 'Sell products online with payments built in.',
    generators: [
      { name: 'Online Store Builder', description: 'Start selling without writing code', slug: 'online-store-builder' },
      { name: 'Online Store Builder for Restaurants', description: 'Menus, orders, and pickup', slug: 'online-store-builder-restaurants' },
      { name: 'Fashion Boutique Store Generator', description: 'Collections, sizes, and checkout', slug: 'fashion-boutique-store-generator' },
      { name: 'Digital Products Store Builder', description: 'Sell downloads and memberships', slug: 'digital-products-store-builder' },
      { name: 'Handmade Crafts Store Generator', description: 'Etsy-style shop, your branding', slug: 'handmade-crafts-store-generator' },
      { name: 'Beauty Products Store Builder', description: 'Skincare, makeup, and more', slug: 'beauty-products-store-builder' },
      { name: 'Sports Gear Online Store', description: 'Equipment, apparel, and gear', slug: 'sports-gear-online-store' },
      { name: 'Bookstore Website Generator', description: 'Sell books online, signed copies', slug: 'bookstore-website-generator' },
      { name: 'Coffee Shop Online Store', description: 'Beans, merch, and subscriptions', slug: 'coffee-shop-online-store' },
    ]
  },
  'link-in-bio': {
    heading: 'Link-in-Bio',
    description: 'One link, all your places. Made for creators.',
    generators: [
      { name: 'Link-in-Bio Generator', description: 'One link for all your channels', slug: 'link-in-bio-generator' },
      { name: 'Creator Link-in-Bio Builder', description: 'All your links, one page', slug: 'creator-link-in-bio-builder' },
      { name: 'Musician Link-in-Bio Generator', description: 'Streaming, tour, and merch', slug: 'musician-link-in-bio-generator' },
      { name: 'Influencer Link-in-Bio Page', description: 'Social, sponsors, and shop', slug: 'influencer-link-in-bio-page' },
      { name: 'Podcaster Link-in-Bio Builder', description: 'Episodes, subscribe, and support', slug: 'podcaster-link-in-bio-builder' },
      { name: 'Artist Link-in-Bio Generator', description: 'Portfolio, shop, and contact', slug: 'artist-link-in-bio-generator' },
      { name: 'Entrepreneur Link-in-Bio Page', description: 'Business, blog, and social', slug: 'entrepreneur-link-in-bio-page' },
    ]
  }
};

const howItWorksSteps = [
  { number: 1, title: 'PICK A GENERATOR', description: 'Browse by category or search to find one that fits your goal.' },
  { number: 2, title: 'DESCRIBE YOUR SITE', description: 'Tell our AI builder about your business in a sentence or two.' },
  { number: 3, title: 'GENERATE AND PUBLISH', description: 'Get a fully built site in seconds. Customize anything, then go live.' },
];

const whyStrikinglyProps = [
  { title: 'LIVE IN SECONDS', description: 'Describe your site, we build it. No setup, no learning curve.' },
  { title: 'MOBILE BY DEFAULT', description: 'Every generator produces responsive sites that work on any device.' },
  { title: 'FREE TO START', description: 'Generate, customize, and publish without a credit card.' },
];

const faqData = [
  {
    question: 'What is an AI site generator?',
    answer: 'An AI site generator is a tool that uses artificial intelligence to automatically create a complete website based on your inputs. You describe what you need, and the AI builds a full site with text, images, layout, and functionality—no coding or design skills required.'
  },
  {
    question: 'How is a generator different from a template?',
    answer: 'A template is a static layout you fill in manually. A generator creates custom content and structure based on your specific inputs. With a template, you start with placeholder text and images. With a generator, the AI writes your text, selects appropriate images, and builds pages tailored to your business.'
  },
  {
    question: 'Are these generators free to use?',
    answer: 'Yes—you can generate, customize, and publish your site for free. Strikingly offers a free plan that lets you build and launch your site without a credit card. Some advanced features require a paid plan, but you can get started at no cost.'
  },
  {
    question: 'What kinds of sites can I build?',
    answer: 'You can build virtually any kind of site: business websites, portfolios, blogs, online stores, landing pages, link-in-bio pages, and more. Each generator is optimized for a specific goal or industry.'
  },
  {
    question: 'Can I customize what the generator produces?',
    answer: 'Absolutely. The AI gives you a complete starting point, but you have full control. You can edit text, swap images, change colors and fonts, add or remove sections, and customize layouts.'
  },
  {
    question: 'Do generated sites work on mobile?',
    answer: 'Yes. Every site generated by Strikingly is fully responsive and mobile-optimized by default. Your site will look great and work smoothly on smartphones, tablets, and desktops.'
  },
];

// SVG Icon Component
const SVGIcon = ({ name, className }) => {
  const icons = {
    search: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
    arrowRight: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <line x1="5" y1="12" x2="19" y2="12" />
        <polyline points="12 5 19 12 12 19" />
      </svg>
    ),
    chevronDown: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <polyline points="6 9 12 15 18 9" />
      </svg>
    ),
    globe: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    layout: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <line x1="3" y1="9" x2="21" y2="9" />
        <line x1="9" y1="21" x2="9" y2="9" />
      </svg>
    ),
    briefcase: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
    penTool: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M12 19l7-7 3 3-7 7-3-3z" />
        <path d="M18 13l-1.5-7.5L2 2l3.5 3.5L13 18z" />
        <path d="M2 2l7.586 7.586" />
        <circle cx="11" cy="11" r="2" />
      </svg>
    ),
    shoppingBag: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
        <line x1="3" y1="6" x2="21" y2="6" />
        <path d="M16 10a4 4 0 0 1-8 0" />
      </svg>
    ),
    link: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
      </svg>
    ),
  };

  return icons[name] || null;
};

// Website Mockup SVG
const WebsiteMockupSVG = () => (
  <svg viewBox="0 0 500 400" width="500" height="400" aria-hidden="true" className="hero-illustration">
    <rect x="50" y="20" width="400" height="360" rx="8" fill="none" stroke="#C6C9CD" strokeWidth="2" />
    <rect x="50" y="20" width="400" height="40" rx="8" fill="#F4F6F8" />
    <circle cx="70" cy="40" r="5" fill="#FF6B6B" />
    <circle cx="85" cy="40" r="5" fill="#FFD93D" />
    <circle cx="100" cy="40" r="5" fill="#6BCB77" />
    <rect x="120" y="35" width="60" height="10" rx="2" fill="#C6C9CD" />
    <rect x="200" y="35" width="40" height="10" rx="2" fill="#C6C9CD" />
    <rect x="250" y="35" width="40" height="10" rx="2" fill="#C6C9CD" />
    <rect x="300" y="35" width="40" height="10" rx="2" fill="#C6C9CD" />
    <rect x="360" y="30" width="70" height="20" rx="4" fill="#8159BB" opacity="0.3" />
    <rect x="70" y="80" width="360" height="20" rx="2" fill="#E2E4E7" />
    <rect x="70" y="110" width="200" height="15" rx="2" fill="#E2E4E7" />
    <rect x="70" y="135" width="280" height="15" rx="2" fill="#E2E4E7" />
    <rect x="70" y="170" width="150" height="120" rx="4" fill="#F4F6F8" stroke="#C6C9CD" strokeWidth="1" />
    <rect x="70" y="300" width="80" height="10" rx="2" fill="#E2E4E7" />
    <rect x="70" y="320" width="120" height="10" rx="2" fill="#E2E4E7" />
    <rect x="240" y="170" width="190" height="60" rx="4" fill="#F4F6F8" stroke="#C6C9CD" strokeWidth="1" />
    <rect x="260" y="190" width="80" height="20" rx="4" fill="#8159BB" opacity="0.3" />
    <rect x="240" y="240" width="190" height="80" rx="4" fill="#F4F6F8" stroke="#C6C9CD" strokeWidth="1" />
    <rect x="260" y="260" width="60" height="8" rx="2" fill="#E2E4E7" />
    <rect x="260" y="275" width="100" height="8" rx="2" fill="#E2E4E7" />
    <rect x="260" y="290" width="80" height="8" rx="2" fill="#E2E4E7" />
  </svg>
);

// Category Thumbnail SVG
const CategoryThumbnailSVG = ({ category }) => {
  const colors = {
    websites: '#8159BB',
    'landing-pages': '#7671FF',
    portfolios: '#CB0C9F',
    blogs: '#FF6B6B',
    stores: '#6BCB77',
    'link-in-bio': '#FFD93D',
  };

  return (
    <svg viewBox="0 0 60 60" width="60" height="60" aria-hidden="true" className="category-thumbnail">
      <rect x="5" y="5" width="50" height="50" rx="4" fill={colors[category] || '#8159BB'} opacity="0.1" />
      <rect x="10" y="10" width="40" height="6" rx="2" fill={colors[category] || '#8159BB'} opacity="0.3" />
      <rect x="10" y="20" width="30" height="4" rx="2" fill={colors[category] || '#8159BB'} opacity="0.2" />
      <rect x="10" y="28" width="35" height="4" rx="2" fill={colors[category] || '#8159BB'} opacity="0.2" />
      <rect x="10" y="36" width="25" height="4" rx="2" fill={colors[category] || '#8159BB'} opacity="0.2" />
      <rect x="10" y="44" width="15" height="6" rx="2" fill={colors[category] || '#8159BB'} opacity="0.3" />
    </svg>
  );
};

// Main Component
const GeneratorsHub = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedFaq, setExpandedFaq] = useState(0);
  const [showAllState, setShowAllState] = useState({});
  const INITIAL_DISPLAY_COUNT = 6;

  useEffect(() => {
    const initialState = {};
    Object.keys(allGenerators).forEach(category => {
      initialState[category] = false;
    });
    setShowAllState(initialState);
  }, []);

  const filteredGenerators = useMemo(() => {
    if (!searchQuery.trim()) return allGenerators;

    const query = searchQuery.toLowerCase();
    const filtered = {};

    Object.entries(allGenerators).forEach(([category, data]) => {
      const matchingGenerators = data.generators.filter(gen =>
        gen.name.toLowerCase().includes(query) ||
        gen.description.toLowerCase().includes(query) ||
        data.heading.toLowerCase().includes(query)
      );

      if (matchingGenerators.length > 0) {
        filtered[category] = {
          ...data,
          generators: matchingGenerators
        };
      }
    });

    return filtered;
  }, [searchQuery]);

  const toggleShowAll = (category) => {
    setShowAllState(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  const clearSearch = () => {
    setSearchQuery('');
  };

  const totalMatches = useMemo(() => {
    return Object.values(filteredGenerators).reduce((sum, cat) => sum + cat.generators.length, 0);
  }, [filteredGenerators]);

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? -1 : index);
  };

  return (
    <div className="generators-hub">
      {/* Section 0: Top Bar */}
      <header className="top-bar" role="banner">
        <div className="container">
          <div className="logo">
            <span className="logo-text">strikingly</span>
            <span className="logo-ai">AI</span>
          </div>
        </div>
      </header>

      {/* Section 1: Breadcrumb */}
      <nav className="breadcrumb" aria-label="Breadcrumb">
        <div className="container">
          <ol className="breadcrumb-list" itemScope itemType="https://schema.org/BreadcrumbList">
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <a href="/" itemProp="item">
                <span itemProp="name">{strings.en.breadcrumbHome}</span>
              </a>
              <meta itemProp="position" content="1" />
            </li>
            <li className="breadcrumb-separator" aria-hidden="true">{'>'}</li>
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <span itemProp="name">{strings.en.breadcrumbCurrent}</span>
              <meta itemProp="position" content="2" />
            </li>
          </ol>
        </div>
      </nav>

      {/* Section 2: Hero */}
      <section className="hero" aria-labelledby="hero-heading">
        <div className="container hero-container">
          <div className="hero-content">
            <h1 id="hero-heading" className="hero-heading">
              <span className="hero-h1-line1">{strings.en.heroH1Line1}</span>
              <span className="hero-h1-line2">{strings.en.heroH1Line2}</span>
            </h1>
            <p className="hero-subheadline">{strings.en.heroSubheadline}</p>
            <div className="hero-cta-group">
              <a href="/s/ai_site_builder" className="btn btn-primary btn-large">{strings.en.heroCtaPrimary}</a>
              <a href="#all-generators" className="btn btn-ghost">{strings.en.heroCtaSecondary}</a>
            </div>
          </div>
          <div className="hero-illustration" aria-hidden="true">
            <WebsiteMockupSVG />
          </div>
        </div>
      </section>

      {/* Section 3: Featured Generators */}
      <section className="featured-generators" aria-labelledby="featured-heading">
        <div className="container">
          <h2 id="featured-heading" className="section-heading">{strings.en.featuredHeading}</h2>
          <p className="section-subheading">{strings.en.featuredSubheading}</p>
          <div className="featured-grid">
            {featuredGenerators.map((gen, index) => (
              <a href={`/generators/${gen.slug}`} className="featured-card" key={index}>
                <h3 className="featured-card-name">{gen.name}</h3>
                <p className="featured-card-description">{gen.description}</p>
                <span className="category-tag">{gen.category}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Browse by Category */}
      <section className="browse-by-category" aria-labelledby="browse-heading">
        <div className="container">
          <h2 id="browse-heading" className="section-heading">{strings.en.browseHeading}</h2>
          <div className="category-grid">
            {categories.map((cat, index) => (
              <a href={`/generators#${cat.slug}`} className="category-card" key={index}>
                <div className="category-icon">
                  <SVGIcon name={cat.icon} className="category-icon-svg" />
                </div>
                <h3 className="category-name">{cat.name.toUpperCase()}</h3>
                <p className="category-description">{cat.description}</p>
                <SVGIcon name="arrowRight" className="category-arrow" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: All Generators Directory */}
      <section className="all-generators" id="all-generators" aria-labelledby="all-generators-heading">
        <div className="container">
          <h2 id="all-generators-heading" className="section-heading">{strings.en.allGeneratorsHeading}</h2>
          <p className="section-subheading">{strings.en.allGeneratorsSubheading}</p>

          <div className="search-container">
            <div className="search-input-wrapper">
              <SVGIcon name="search" className="search-icon" />
              <input
                type="text"
                className="search-input"
                placeholder={strings.en.searchPlaceholder}
                aria-label={strings.en.searchAriaLabel}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            {searchQuery && (
              <div className="search-results-count">
                {strings.en.searchResultsCount(totalMatches)}
              </div>
            )}
            {searchQuery && totalMatches === 0 && (
              <div className="search-no-results">
                <p>{strings.en.noResults}</p>
                <button className="btn btn-ghost btn-small" onClick={clearSearch}>{strings.en.clearSearch}</button>
                <a href="/s/ai_site_builder" className="search-no-results-link">{strings.en.cantFindIt}</a>
              </div>
            )}
          </div>

          {Object.entries(filteredGenerators).map(([categorySlug, categoryData]) => {
            const isExpanded = showAllState[categorySlug];
            const displayGenerators = isExpanded ? categoryData.generators : categoryData.generators.slice(0, INITIAL_DISPLAY_COUNT);
            const hasMore = categoryData.generators.length > INITIAL_DISPLAY_COUNT;

            return (
              <div className="generator-category-section" key={categorySlug} id={categorySlug}>
                <h3 className="category-heading">{categoryData.heading}</h3>
                <p className="category-description">{categoryData.description}</p>
                <div className="generator-grid" id={`generator-grid-${categorySlug}`}>
                  {displayGenerators.map((gen, index) => (
                    <a href={`/generators/${gen.slug}`} className="generator-card" key={index}>
                      <div className="generator-card-thumbnail">
                        <CategoryThumbnailSVG category={categorySlug} />
                      </div>
                      <h4 className="generator-card-name">{gen.name}</h4>
                      <p className="generator-card-description">{gen.description}</p>
                    </a>
                  ))}
                </div>
                {hasMore && (
                  <button
                    className="btn btn-ghost btn-show-all"
                    onClick={() => toggleShowAll(categorySlug)}
                    aria-expanded={isExpanded}
                    aria-controls={`generator-grid-${categorySlug}`}
                  >
                    {isExpanded ? `Show fewer` : `Show all ${categoryData.generators.length} generators`}
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Section 6: How It Works */}
      <section className="how-it-works" aria-labelledby="how-it-works-heading">
        <div className="container">
          <h2 id="how-it-works-heading" className="section-heading">{strings.en.howItWorksHeading}</h2>
          <div className="steps-grid">
            {howItWorksSteps.map((step, index) => (
              <div className="step-card" key={index}>
                <div className="step-number">{step.number}</div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7: Why Strikingly */}
      <section className="why-strikingly" aria-labelledby="why-heading">
        <div className="container">
          <h2 id="why-heading" className="section-heading">{strings.en.whyHeading}</h2>
          <div className="value-props-grid">
            {whyStrikinglyProps.map((prop, index) => (
              <div className="value-prop-card" key={index}>
                <div className="value-prop-icon">
                  <SVGIcon name="globe" className="value-prop-icon-svg" />
                </div>
                <h3 className="value-prop-title">{prop.title}</h3>
                <p className="value-prop-description">{prop.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 8: FAQ */}
      <section className="faq" aria-labelledby="faq-heading">
        <div className="container">
          <h2 id="faq-heading" className="section-heading">{strings.en.faqHeading}</h2>
          <div className="faq-list">
            {faqData.map((faq, index) => (
              <div className="faq-item" key={index}>
                <button
                  className="faq-question"
                  onClick={() => toggleFaq(index)}
                  aria-expanded={expandedFaq === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span>{faq.question}</span>
                  <SVGIcon name="chevronDown" className={`faq-chevron ${expandedFaq === index ? 'faq-chevron-open' : ''}`} />
                </button>
                <div
                  id={`faq-answer-${index}`}
                  className="faq-answer"
                  role="region"
                  aria-hidden={expandedFaq !== index}
                  style={{ display: expandedFaq === index ? 'block' : 'none' }}
                >
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 9: Closing CTA */}
      <section className="closing-cta" aria-labelledby="closing-heading">
        <div className="container">
          <h2 id="closing-heading" className="closing-heading">{strings.en.closingHeading}</h2>
          <p className="closing-sub">{strings.en.closingSub}</p>
          <a href="/s/ai_site_builder" className="btn btn-primary btn-large">{strings.en.closingCta}</a>
        </div>
      </section>

      {/* Section 10: Footer */}
      <footer className="footer" role="contentinfo">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-column">
              <div className="footer-logo">
                <span className="logo-text">strikingly</span>
              </div>
              <p className="footer-description">AI-powered website builder for everyone.</p>
            </div>
            <div className="footer-column">
              <h4 className="footer-column-heading">Product</h4>
              <ul className="footer-links">
                <li><a href="/about">About</a></li>
                <li><a href="/pricing">Pricing</a></li>
                <li><a href="/templates">Templates</a></li>
                <li><a href="/s/ai_site_builder">AI Site Builder</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4 className="footer-column-heading">Resources</h4>
              <ul className="footer-links">
                <li><a href="/support">Support</a></li>
                <li><a href="/blog">Blog</a></li>
                <li><a href="/generators">AI Generators</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4 className="footer-column-heading">Legal</h4>
              <ul className="footer-links">
                <li><a href="/terms">Terms</a></li>
                <li><a href="/privacy">Privacy</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p className="footer-copyright">{strings.en.footerCopyright}</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default GeneratorsHub;
