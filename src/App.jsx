import React, { useState, useEffect } from 'react';
import './App.css';

// Strings for i18n readiness
const strings = {
  en: {
    // Top bar
    logo: 'Strikingly AI',
    
    // Breadcrumb
    breadcrumbHome: 'Strikingly',
    breadcrumbCurrent: 'AI Generators',
    
    // Hero
    heroLine1: 'BUILD ANY KIND OF SITE',
    heroLine2: 'WITH AI, IN AN INSTANT',
    heroSubheadline: 'Browse the right generator for what you\'re building, or jump straight into our AI site builder.',
    heroPrimaryCTA: 'START BUILDING - IT\'S FREE',
    heroSecondaryCTA: 'BROWSE GENERATORS',
    
    // Featured Generators
    featuredTitle: 'FEATURED GENERATORS',
    featuredSubtitle: 'A few common starting points.',
    
    // Browse by Category
    browseTitle: 'BROWSE BY CATEGORY',
    
    // All Generators
    allGeneratorsTitle: 'ALL GENERATORS',
    allGeneratorsSubtitle: 'Sixty-plus generators, organized by what you\'re building.',
    searchPlaceholder: 'Search generators...',
    searchLabel: 'Search generators',
    showAllButton: 'Show all',
    hideButton: 'Show less',
    noResultsText: 'No generators match your search.',
    clearSearchText: 'Clear search',
    noResultsCTA: 'Can\'t find it? Start with our AI builder.',
    
    // How It Works
    howItWorksTitle: 'HOW IT WORKS',
    step1Title: 'PICK A GENERATOR',
    step1Text: 'Browse by category or search to find one that fits your goal.',
    step2Title: 'DESCRIBE YOUR SITE',
    step2Text: 'Tell our AI builder about your business in a sentence or two.',
    step3Title: 'GENERATE AND PUBLISH',
    step3Text: 'Get a fully built site in seconds. Customize anything, then go live.',
    
    // Why Strikingly
    whyTitle: 'WHY STRIKINGLY',
    benefit1Title: 'LIVE IN SECONDS',
    benefit1Text: 'Describe your site, we build it. No setup, no learning curve.',
    benefit2Title: 'MOBILE BY DEFAULT',
    benefit2Text: 'Every generator produces responsive sites that work on any device.',
    benefit3Title: 'FREE TO START',
    benefit3Text: 'Generate, customize, and publish without a credit card.',
    
    // FAQ
    faqTitle: 'FREQUENTLY ASKED QUESTIONS',
    
    // Closing CTA
    closingTitle: 'READY TO BUILD?',
    closingSubtitle: 'Pick a generator above, or jump straight into our AI builder.',
    closingCTA: 'START WITH AI BUILDER',
    
    // Footer
    footerCopyright: '© 2024 Strikingly. All rights reserved.'
  }
};

// Sample data for generators
const featuredGenerators = [
  { name: 'AI Website Generator', description: 'Describe your business, get a full site', category: 'Website', slug: 'ai-website-generator' },
  { name: 'Free Portfolio Generator', description: 'For creatives, in minutes, no fee', category: 'Portfolio', slug: 'free-portfolio-generator' },
  { name: 'AI Landing Page Maker', description: 'One-page sites built to convert', category: 'Landing Page', slug: 'ai-landing-page-maker' },
  { name: 'Online Store Builder', description: 'Start selling without writing code', category: 'Store', slug: 'online-store-builder' },
  { name: 'Link-in-Bio Generator', description: 'One link for all your channels', category: 'Link-in-Bio', slug: 'link-in-bio-generator' },
  { name: 'One-Page Website Builder', description: 'Simple sites, single scroll', category: 'Website', slug: 'one-page-website-builder' },
  { name: 'Wedding Website Generator', description: 'Share your day with guests', category: 'Website', slug: 'wedding-website-generator' },
  { name: 'Restaurant Website Builder', description: 'Menu, hours, reservations, done', category: 'Website', slug: 'restaurant-website-builder' },
  { name: 'Blog Generator for Beginners', description: 'Publish-ready in minutes', category: 'Blog', slug: 'blog-generator-beginners' }
];

const categories = [
  {
    name: 'Websites',
    slug: 'websites',
    description: 'AI-built business and personal sites for any goal.',
    anchor: '#websites'
  },
  {
    name: 'Landing Pages',
    slug: 'landing-pages',
    description: 'Single-page sites built to convert visitors fast.',
    anchor: '#landing-pages'
  },
  {
    name: 'Portfolios',
    slug: 'portfolios',
    description: 'Showcase your work with a clean, focused site.',
    anchor: '#portfolios'
  },
  {
    name: 'Blogs',
    slug: 'blogs',
    description: 'Publish-ready blogs with built-in SEO basics.',
    anchor: '#blogs'
  },
  {
    name: 'Online Stores',
    slug: 'stores',
    description: 'Sell products online with payments built in.',
    anchor: '#stores'
  },
  {
    name: 'Link-in-Bio',
    slug: 'link-in-bio',
    description: 'One link, all your places. Made for creators.',
    anchor: '#link-in-bio'
  }
];

const allGenerators = {
  websites: [
    { name: 'AI Website Generator', description: 'Describe your business, get a full site', slug: 'ai-website-generator' },
    { name: 'Free Website Builder for Photographers', description: 'Showcase your portfolio with stunning galleries', slug: 'photographer-website-builder' },
    { name: 'Restaurant Website Builder', description: 'Menu, hours, reservations, done', slug: 'restaurant-website-builder' },
    { name: 'Wedding Website Generator', description: 'Share your day with guests', slug: 'wedding-website-generator' },
    { name: 'One-Page Website Builder', description: 'Simple sites, single scroll', slug: 'one-page-website-builder' },
    { name: 'Business Website Generator', description: 'Professional sites for any industry', slug: 'business-website-generator' },
    { name: 'Personal Website Builder', description: 'Your digital presence, made simple', slug: 'personal-website-builder' },
    { name: 'Nonprofit Website Generator', description: 'Spread your mission online', slug: 'nonprofit-website-generator' },
    { name: 'Event Website Builder', description: 'Promote and manage your events', slug: 'event-website-builder' },
    { name: 'Fitness Website Generator', description: 'Build your fitness brand online', slug: 'fitness-website-generator' }
  ],
  'landing-pages': [
    { name: 'AI Landing Page Maker', description: 'One-page sites built to convert', slug: 'ai-landing-page-maker' },
    { name: 'Product Launch Landing Page', description: 'Generate buzz for your new product', slug: 'product-launch-landing' },
    { name: 'Lead Generation Page Builder', description: 'Capture leads with optimized forms', slug: 'lead-generation-builder' },
    { name: 'Event Registration Landing Page', description: 'Get attendees signed up fast', slug: 'event-registration-landing' },
    { name: 'App Download Landing Page', description: 'Drive mobile app installations', slug: 'app-download-landing' },
    { name: 'Course Sales Landing Page', description: 'Sell your online courses effectively', slug: 'course-sales-landing' },
    { name: 'Newsletter Signup Page', description: 'Build your email subscriber list', slug: 'newsletter-signup-page' },
    { name: 'Webinar Registration Page', description: 'Fill your webinar seats', slug: 'webinar-registration-page' },
    { name: 'Free Trial Landing Page', description: 'Convert visitors to trial users', slug: 'free-trial-landing' },
    { name: 'Contest Entry Landing Page', description: 'Run engaging contests and giveaways', slug: 'contest-entry-landing' }
  ],
  portfolios: [
    { name: 'Free Portfolio Generator', description: 'For creatives, in minutes, no fee', slug: 'free-portfolio-generator' },
    { name: 'Portfolio Generator for Designers', description: 'Showcase your design work beautifully', slug: 'designer-portfolio-generator' },
    { name: 'Photography Portfolio Builder', description: 'Display your photos in stunning galleries', slug: 'photography-portfolio-builder' },
    { name: 'Artist Portfolio Generator', description: 'Exhibit your artwork online', slug: 'artist-portfolio-generator' },
    { name: 'Writer Portfolio Builder', description: 'Showcase your writing and publications', slug: 'writer-portfolio-builder' },
    { name: 'Developer Portfolio Generator', description: 'Display your coding projects', slug: 'developer-portfolio-generator' },
    { name: 'Architect Portfolio Builder', description: 'Present your architectural projects', slug: 'architect-portfolio-builder' },
    { name: 'Fashion Portfolio Generator', description: 'Show off your fashion designs', slug: 'fashion-portfolio-generator' },
    { name: 'Video Portfolio Builder', description: 'Create a reel of your video work', slug: 'video-portfolio-builder' },
    { name: 'Music Portfolio Generator', description: 'Share your musical creations', slug: 'music-portfolio-generator' }
  ],
  blogs: [
    { name: 'Blog Generator for Beginners', description: 'Publish-ready in minutes', slug: 'blog-generator-beginners' },
    { name: 'Personal Blog Builder', description: 'Share your thoughts with the world', slug: 'personal-blog-builder' },
    { name: 'Business Blog Generator', description: 'Content marketing made easy', slug: 'business-blog-generator' },
    { name: 'Travel Blog Builder', description: 'Document your adventures', slug: 'travel-blog-builder' },
    { name: 'Food Blog Generator', description: 'Share recipes and culinary stories', slug: 'food-blog-generator' },
    { name: 'Tech Blog Builder', description: 'Write about technology and innovation', slug: 'tech-blog-builder' },
    { name: 'Fashion Blog Generator', description: 'Style tips and fashion insights', slug: 'fashion-blog-generator' },
    { name: 'Lifestyle Blog Builder', description: 'Share your lifestyle and tips', slug: 'lifestyle-blog-builder' },
    { name: 'News Blog Generator', description: 'Create a news and updates site', slug: 'news-blog-generator' },
    { name: 'Health Blog Builder', description: 'Share wellness and health content', slug: 'health-blog-builder' }
  ],
  stores: [
    { name: 'Online Store Builder', description: 'Start selling without writing code', slug: 'online-store-builder' },
    { name: 'Online Store Builder for Restaurants', description: 'Sell food and beverages online', slug: 'restaurant-store-builder' },
    { name: 'Fashion Store Generator', description: 'Sell clothing and accessories', slug: 'fashion-store-generator' },
    { name: 'Digital Products Store', description: 'Sell downloads and digital goods', slug: 'digital-products-store' },
    { name: 'Handmade Crafts Store', description: 'Sell your handmade creations', slug: 'handmade-crafts-store' },
    { name: 'Art Store Generator', description: 'Sell artwork and prints online', slug: 'art-store-generator' },
    { name: 'Book Store Builder', description: 'Sell books and publications', slug: 'book-store-builder' },
    { name: 'Electronics Store Generator', description: 'Sell tech and electronics', slug: 'electronics-store-generator' },
    { name: 'Beauty Store Builder', description: 'Sell cosmetics and beauty products', slug: 'beauty-store-builder' },
    { name: 'Pet Store Generator', description: 'Sell pet supplies and accessories', slug: 'pet-store-generator' }
  ],
  'link-in-bio': [
    { name: 'Link-in-Bio Generator', description: 'One link for all your channels', slug: 'link-in-bio-generator' },
    { name: 'Creator Link-in-Bio Page', description: 'Perfect for content creators', slug: 'creator-link-bio' },
    { name: 'Business Link-in-Bio Builder', description: 'Professional link hub for businesses', slug: 'business-link-bio' },
    { name: 'Influencer Link Page', description: 'Monetize your social media presence', slug: 'influencer-link-page' },
    { name: 'Musician Link-in-Bio', description: 'Share your music across platforms', slug: 'musician-link-bio' },
    { name: 'Artist Link Hub', description: 'Connect fans to all your work', slug: 'artist-link-hub' },
    { name: 'Podcast Link-in-Bio', description: 'Direct listeners to your episodes', slug: 'podcast-link-bio' },
    { name: 'Coach Link Page Builder', description: 'Connect with clients and prospects', slug: 'coach-link-page' },
    { name: 'Restaurant Link-in-Bio', description: 'Menu, delivery, and reservations', slug: 'restaurant-link-bio' },
    { name: 'Event Link Hub', description: 'All event info in one place', slug: 'event-link-hub' }
  ]
};

const faqData = [
  {
    question: 'What is an AI site generator?',
    answer: 'An AI site generator is a tool that uses artificial intelligence to automatically create websites based on your description and preferences. Simply tell it about your business or project, and it will generate a complete, professional website with content, design, and structure tailored to your needs. No coding or design skills required.'
  },
  {
    question: 'How is a generator different from a template?',
    answer: 'Templates are pre-designed layouts that you customize manually, while generators create unique sites from scratch based on your specific input. Generators use AI to write content, choose colors, select images, and structure your site automatically. Templates require you to replace placeholder content yourself, but generators do all the work for you.'
  },
  {
    question: 'Are these generators free to use?',
    answer: 'Yes, you can generate and customize your site for free. Strikingly offers free hosting with basic features, and you can upgrade to premium plans for additional functionality like custom domains, more storage, and advanced features. There\'s no credit card required to get started.'
  },
  {
    question: 'What kinds of sites can I build?',
    answer: 'You can build virtually any type of website: business sites, portfolios, blogs, online stores, landing pages, personal sites, event pages, and more. Our generators are specialized for different industries and purposes, from restaurants and photographers to consultants and nonprofits.'
  },
  {
    question: 'Can I customize what the generator produces?',
    answer: 'Absolutely! The generator creates a starting point that you can fully customize. You can edit text, change colors, swap images, rearrange sections, add new pages, and modify the design to match your brand. The AI gives you a professional foundation to build upon.'
  },
  {
    question: 'Do generated sites work on mobile?',
    answer: 'Yes, every site generated by our AI is automatically mobile-responsive. Your site will look great and function perfectly on smartphones, tablets, and desktop computers. Mobile optimization is built into every generator, so you don\'t need to worry about it.'
  }
];

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedCategories, setExpandedCategories] = useState({});
  const [expandedFAQ, setExpandedFAQ] = useState({ 0: true }); // First FAQ expanded by default
  const [searchResults, setSearchResults] = useState(null);

  // Search functionality
  useEffect(() => {
    if (!searchQuery.trim()) {
      setSearchResults(null);
      return;
    }

    const query = searchQuery.toLowerCase();
    const results = {};
    let totalMatches = 0;

    Object.entries(allGenerators).forEach(([category, generators]) => {
      const matches = generators.filter(gen => 
        gen.name.toLowerCase().includes(query) ||
        gen.description.toLowerCase().includes(query) ||
        category.toLowerCase().includes(query)
      );
      
      if (matches.length > 0) {
        results[category] = matches;
        totalMatches += matches.length;
      }
    });

    setSearchResults({ results, totalMatches });
  }, [searchQuery]);

  const toggleCategory = (category) => {
    setExpandedCategories(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  const toggleFAQ = (index) => {
    setExpandedFAQ(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const clearSearch = () => {
    setSearchQuery('');
    setSearchResults(null);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Top Bar */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-5 py-4">
          <div className="flex items-center">
            <a href="/" className="text-xl font-bold text-gray-800 hover:text-purple-600 transition-colors">
              {strings.en.logo}
            </a>
          </div>
        </div>
      </header>

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="bg-white">
        <div className="max-w-6xl mx-auto px-5 py-3">
          <ol className="flex items-center space-x-2 text-sm text-gray-600">
            <li>
              <a href="/" className="hover:text-purple-600 transition-colors">
                {strings.en.breadcrumbHome}
              </a>
            </li>
            <li className="flex items-center">
              <span className="mx-2">/</span>
              <span>{strings.en.breadcrumbCurrent}</span>
            </li>
          </ol>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-purple-50 to-pink-50 py-20">
          <div className="max-w-6xl mx-auto px-5">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
                  <div className="text-gray-800 mb-2">{strings.en.heroLine1}</div>
                  <div className="bg-gradient-to-r from-blue-600 to-pink-600 bg-clip-text text-transparent">
                    {strings.en.heroLine2}
                  </div>
                </h1>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  {strings.en.heroSubheadline}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="/s/ai_site_builder"
                    className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-pink-600 text-white font-bold text-sm uppercase rounded hover:shadow-lg transition-all duration-200"
                  >
                    {strings.en.heroPrimaryCTA}
                  </a>
                  <a
                    href="#all-generators"
                    className="inline-flex items-center justify-center px-8 py-3 border border-purple-600 text-purple-600 font-bold text-sm uppercase rounded hover:bg-purple-50 transition-all duration-200"
                  >
                    {strings.en.heroSecondaryCTA}
                  </a>
                </div>
              </div>
              <div className="flex justify-center">
                <svg
                  width="400"
                  height="300"
                  viewBox="0 0 400 300"
                  className="w-full max-w-md"
                  aria-hidden="true"
                >
                  <rect x="50" y="50" width="300" height="200" rx="8" fill="none" stroke="#8159BB" strokeWidth="2"/>
                  <rect x="70" y="70" width="260" height="30" rx="4" fill="#F4F6F8"/>
                  <rect x="70" y="120" width="120" height="60" rx="4" fill="#E2E4E7"/>
                  <rect x="210" y="120" width="120" height="60" rx="4" fill="#E2E4E7"/>
                  <rect x="70" y="200" width="260" height="30" rx="4" fill="#F4F6F8"/>
                </svg>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Generators */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-5">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">{strings.en.featuredTitle}</h2>
              <p className="text-lg text-gray-600">{strings.en.featuredSubtitle}</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredGenerators.map((generator, index) => (
                <article key={index} className="group">
                  <a
                    href={`/generators/${generator.slug}`}
                    className="block p-6 bg-white border border-gray-200 rounded-lg hover:border-purple-600 hover:shadow-lg transition-all duration-200"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="font-bold text-gray-800 group-hover:text-purple-600 transition-colors">
                        {generator.name}
                      </h3>
                      <span className="px-2 py-1 text-xs font-bold text-purple-600 border border-purple-600 rounded uppercase">
                        {generator.category}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm">{generator.description}</p>
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Browse by Category */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-5">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">{strings.en.browseTitle}</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map((category, index) => (
                <article key={index} className="group">
                  <a
                    href={category.anchor}
                    className="block p-6 bg-white border border-gray-200 rounded-lg hover:border-purple-600 hover:shadow-lg transition-all duration-200"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-purple-600">
                          <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
                          <path d="M9 9h6v6H9z" fill="currentColor"/>
                        </svg>
                      </div>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-gray-400 group-hover:text-purple-600 transition-colors">
                        <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <h3 className="font-bold text-gray-800 uppercase mb-2 group-hover:text-purple-600 transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-gray-600 text-sm">{category.description}</p>
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* All Generators Directory */}
        <section id="all-generators" className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-5">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">{strings.en.allGeneratorsTitle}</h2>
              <p className="text-lg text-gray-600 mb-8">{strings.en.allGeneratorsSubtitle}</p>
              
              {/* Search Input */}
              <div className="max-w-md mx-auto relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder={strings.en.searchPlaceholder}
                  aria-label={strings.en.searchLabel}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                />
              </div>
              
              {/* Search Results Count */}
              {searchResults && (
                <p className="mt-4 text-sm text-gray-600">
                  {searchResults.totalMatches} generators match your search
                </p>
              )}
            </div>

            {/* Search Results or No Results */}
            {searchQuery && searchResults?.totalMatches === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-600 mb-4">{strings.en.noResultsText}</p>
                <button
                  onClick={clearSearch}
                  className="text-purple-600 hover:text-purple-700 font-medium mr-4"
                >
                  {strings.en.clearSearchText}
                </button>
                <a
                  href="/s/ai_site_builder"
                  className="text-purple-600 hover:text-purple-700 font-medium"
                >
                  {strings.en.noResultsCTA}
                </a>
              </div>
            )}

            {/* Category Sections */}
            {categories.map((category) => {
              const categoryGenerators = searchResults 
                ? searchResults.results[category.slug] || []
                : allGenerators[category.slug] || [];
              
              if (searchQuery && categoryGenerators.length === 0) {
                return null;
              }

              const isExpanded = expandedCategories[category.slug];
              const displayGenerators = isExpanded ? categoryGenerators : categoryGenerators.slice(0, 6);
              const hasMore = categoryGenerators.length > 6;

              return (
                <section key={category.slug} id={category.slug} className="mb-16">
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-gray-800 uppercase mb-2">
                      {category.name}
                    </h3>
                    <p className="text-gray-600">{category.description}</p>
                  </div>
                  
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                    {displayGenerators.map((generator, index) => (
                      <article key={index} className="group">
                        <a
                          href={`/generators/${generator.slug}`}
                          className="block p-6 bg-white border border-gray-200 rounded-lg hover:border-purple-600 hover:shadow-lg transition-all duration-200"
                        >
                          <div className="flex items-center mb-4">
                            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
                              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-purple-600">
                                <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
                                <path d="M9 9h6v6H9z" fill="currentColor"/>
                              </svg>
                            </div>
                          </div>
                          <h4 className="font-bold text-gray-800 mb-2 group-hover:text-purple-600 transition-colors">
                            {generator.name}
                          </h4>
                          <p className="text-gray-600 text-sm">{generator.description}</p>
                        </a>
                      </article>
                    ))}
                  </div>
                  
                  {hasMore && !searchQuery && (
                    <div className="text-center">
                      <button
                        onClick={() => toggleCategory(category.slug)}
                        className="px-6 py-2 border border-purple-600 text-purple-600 font-bold text-sm uppercase rounded hover:bg-purple-50 transition-all duration-200"
                        aria-expanded={isExpanded}
                        aria-controls={`${category.slug}-generators`}
                      >
                        {isExpanded ? strings.en.hideButton : `${strings.en.showAllButton} ${categoryGenerators.length} generators`}
                      </button>
                    </div>
                  )}
                </section>
              );
            })}
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-5">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">{strings.en.howItWorksTitle}</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="font-bold text-gray-800 uppercase mb-2">{strings.en.step1Title}</h3>
                <p className="text-gray-600">{strings.en.step1Text}</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="font-bold text-gray-800 uppercase mb-2">{strings.en.step2Title}</h3>
                <p className="text-gray-600">{strings.en.step2Text}</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="font-bold text-gray-800 uppercase mb-2">{strings.en.step3Title}</h3>
                <p className="text-gray-600">{strings.en.step3Text}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Strikingly */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-5">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">{strings.en.whyTitle}</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-purple-600">
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="font-bold text-gray-800 uppercase mb-2">{strings.en.benefit1Title}</h3>
                <p className="text-gray-600">{strings.en.benefit1Text}</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-purple-600">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" stroke="currentColor" strokeWidth="2"/>
                    <line x1="8" y1="21" x2="16" y2="21" stroke="currentColor" strokeWidth="2"/>
                    <line x1="12" y1="17" x2="12" y2="21" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
                <h3 className="font-bold text-gray-800 uppercase mb-2">{strings.en.benefit2Title}</h3>
                <p className="text-gray-600">{strings.en.benefit2Text}</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-purple-600">
                    <path d="M20 12V8H6a2 2 0 01-2-2c0-1.1.9-2 2-2h12v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M4 6v12c0 1.1.9 2 2 2h14v-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M18 12a2 2 0 00-2 2c0 1.1.9 2 2 2h4v-4h-4z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="font-bold text-gray-800 uppercase mb-2">{strings.en.benefit3Title}</h3>
                <p className="text-gray-600">{strings.en.benefit3Text}</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-5">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">{strings.en.faqTitle}</h2>
            </div>
            <div className="space-y-4">
              {faqData.map((faq, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-inset"
                    aria-expanded={expandedFAQ[index]}
                    aria-controls={`faq-answer-${index}`}
                  >
                    <span className="font-bold text-gray-800">{faq.question}</span>
                    <svg
                      className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
                        expandedFAQ[index] ? 'transform rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
                    </svg>
                  </button>
                  {expandedFAQ[index] && (
                    <div id={`faq-answer-${index}`} className="px-6 pb-4">
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Closing CTA */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-5 text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">{strings.en.closingTitle}</h2>
            <p className="text-lg text-gray-600 mb-8">{strings.en.closingSubtitle}</p>
            <a
              href="/s/ai_site_builder"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-pink-600 text-white font-bold text-sm uppercase rounded hover:shadow-lg transition-all duration-200"
            >
              {strings.en.closingCTA}
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-6xl mx-auto px-5">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold mb-4">Product</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="/templates" className="hover:text-purple-400 transition-colors">Templates</a></li>
                <li><a href="/pricing" className="hover:text-purple-400 transition-colors">Pricing</a></li>
                <li><a href="/about" className="hover:text-purple-400 transition-colors">About</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Support</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="/support" className="hover:text-purple-400 transition-colors">Help Center</a></li>
                <li><a href="/blog" className="hover:text-purple-400 transition-colors">Blog</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Company</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="/terms" className="hover:text-purple-400 transition-colors">Terms</a></li>
                <li><a href="/privacy" className="hover:text-purple-400 transition-colors">Privacy</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Strikingly</h3>
              <p className="text-sm text-gray-400">
                Build beautiful websites with AI
              </p>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
            {strings.en.footerCopyright}
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
