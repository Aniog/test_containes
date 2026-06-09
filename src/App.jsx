import { useState, useEffect } from 'react'
import './App.css'

// Internationalization strings
const strings = {
  en: {
    // Navigation
    breadcrumbHome: 'Strikingly',
    breadcrumbCurrent: 'AI Generators',
    
    // Hero Section
    heroLine1: 'BUILD ANY KIND OF SITE',
    heroLine2: 'WITH AI, IN AN INSTANT',
    heroSubheadline: 'Browse the right generator for what you\'re building, or jump straight into our AI site builder.',
    heroPrimaryCTA: 'START BUILDING - IT\'S FREE',
    heroSecondaryCTA: 'BROWSE GENERATORS',
    
    // Featured Generators
    featuredTitle: 'FEATURED GENERATORS',
    featuredSubtitle: 'A few common starting points.',
    
    // Browse by Category
    browseCategoryTitle: 'BROWSE BY CATEGORY',
    
    // All Generators
    allGeneratorsTitle: 'ALL GENERATORS',
    allGeneratorsSubtitle: 'Sixty-plus generators, organized by what you\'re building.',
    searchPlaceholder: 'Search generators...',
    searchLabel: 'Search generators',
    showAllButton: 'Show all',
    hideButton: 'Show less',
    noResultsText: 'No generators match your search.',
    clearSearchText: 'Clear search',
    cantFindText: 'Can\'t find it? Start with our AI builder.',
    
    // How It Works
    howItWorksTitle: 'HOW IT WORKS',
    step1Title: 'PICK A GENERATOR',
    step1Text: 'Browse by category or search to find one that fits your goal.',
    step2Title: 'DESCRIBE YOUR SITE',
    step2Text: 'Tell our AI builder about your business in a sentence or two.',
    step3Title: 'GENERATE AND PUBLISH',
    step3Text: 'Get a fully built site in seconds. Customize anything, then go live.',
    
    // Why Strikingly
    whyStrikinglyTitle: 'WHY STRIKINGLY',
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
    closingCTA: 'START WITH AI BUILDER'
  }
}

function App() {
  const [searchQuery, setSearchQuery] = useState('')
  const [expandedSections, setExpandedSections] = useState({})
  const [expandedFAQ, setExpandedFAQ] = useState({ 0: true })
  
  const t = strings.en

  // Sample data for featured generators
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
  ]

  // Categories for Browse by Category section
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
  ]

  // All generators organized by category
  const allGenerators = {
    websites: [
      { name: 'AI Website Generator', description: 'Describe your business, get a full site', slug: 'ai-website-generator' },
      { name: 'Free Website Builder for Photographers', description: 'Showcase your portfolio with style', slug: 'photographer-website-builder' },
      { name: 'One-Page Wedding Website Builder', description: 'Share your special day with guests', slug: 'wedding-website-builder' },
      { name: 'Restaurant Website Builder', description: 'Menu, hours, reservations made easy', slug: 'restaurant-website-builder' },
      { name: 'Small Business Website Generator', description: 'Professional sites for local businesses', slug: 'small-business-website' },
      { name: 'Nonprofit Website Builder', description: 'Spread your mission online', slug: 'nonprofit-website-builder' },
      { name: 'Personal Website Generator', description: 'Your digital presence, simplified', slug: 'personal-website-generator' },
      { name: 'Fitness Trainer Website Builder', description: 'Grow your fitness business online', slug: 'fitness-website-builder' },
      { name: 'Real Estate Agent Website', description: 'Showcase properties and services', slug: 'real-estate-website' },
      { name: 'Consultant Website Generator', description: 'Professional sites for consultants', slug: 'consultant-website' }
    ],
    'landing-pages': [
      { name: 'AI Landing Page Maker', description: 'One-page sites built to convert', slug: 'ai-landing-page-maker' },
      { name: 'Product Launch Landing Page', description: 'Generate buzz for new products', slug: 'product-launch-landing' },
      { name: 'Event Registration Landing Page', description: 'Drive event signups fast', slug: 'event-landing-page' },
      { name: 'Lead Generation Landing Page', description: 'Capture leads with optimized forms', slug: 'lead-generation-landing' },
      { name: 'App Download Landing Page', description: 'Drive mobile app installations', slug: 'app-download-landing' },
      { name: 'Course Sales Landing Page', description: 'Sell online courses effectively', slug: 'course-sales-landing' },
      { name: 'Webinar Registration Page', description: 'Fill your webinar seats', slug: 'webinar-registration-page' },
      { name: 'Newsletter Signup Landing', description: 'Grow your email list quickly', slug: 'newsletter-signup-landing' },
      { name: 'Free Trial Landing Page', description: 'Convert visitors to trial users', slug: 'free-trial-landing' }
    ],
    portfolios: [
      { name: 'Free Portfolio Generator', description: 'For creatives, in minutes, no fee', slug: 'free-portfolio-generator' },
      { name: 'Designer Portfolio Builder', description: 'Showcase your design work beautifully', slug: 'designer-portfolio-builder' },
      { name: 'Artist Portfolio Generator', description: 'Display your art with elegance', slug: 'artist-portfolio-generator' },
      { name: 'Writer Portfolio Builder', description: 'Showcase your writing samples', slug: 'writer-portfolio-builder' },
      { name: 'Developer Portfolio Generator', description: 'Show off your coding projects', slug: 'developer-portfolio' },
      { name: 'Photographer Portfolio Site', description: 'Beautiful galleries for your photos', slug: 'photographer-portfolio' },
      { name: 'Architect Portfolio Builder', description: 'Display your architectural projects', slug: 'architect-portfolio' },
      { name: 'Musician Portfolio Generator', description: 'Share your music and performances', slug: 'musician-portfolio' },
      { name: 'Video Creator Portfolio', description: 'Showcase your video content', slug: 'video-creator-portfolio' }
    ],
    blogs: [
      { name: 'Blog Generator for Beginners', description: 'Publish-ready in minutes', slug: 'blog-generator-beginners' },
      { name: 'Personal Blog Builder', description: 'Share your thoughts with the world', slug: 'personal-blog-builder' },
      { name: 'Business Blog Generator', description: 'Content marketing made simple', slug: 'business-blog-generator' },
      { name: 'Travel Blog Builder', description: 'Document your adventures', slug: 'travel-blog-builder' },
      { name: 'Food Blog Generator', description: 'Share recipes and food stories', slug: 'food-blog-generator' },
      { name: 'Tech Blog Builder', description: 'Write about technology trends', slug: 'tech-blog-builder' },
      { name: 'Lifestyle Blog Generator', description: 'Share your lifestyle content', slug: 'lifestyle-blog-generator' },
      { name: 'News Blog Builder', description: 'Create a news publication site', slug: 'news-blog-builder' },
      { name: 'Fashion Blog Generator', description: 'Showcase style and trends', slug: 'fashion-blog-generator' }
    ],
    stores: [
      { name: 'Online Store Builder', description: 'Start selling without writing code', slug: 'online-store-builder' },
      { name: 'Fashion Store Generator', description: 'Sell clothing and accessories online', slug: 'fashion-store-generator' },
      { name: 'Digital Products Store', description: 'Sell downloads and digital goods', slug: 'digital-products-store' },
      { name: 'Handmade Crafts Store', description: 'Perfect for artisan businesses', slug: 'handmade-crafts-store' },
      { name: 'Dropshipping Store Builder', description: 'Start dropshipping quickly', slug: 'dropshipping-store-builder' },
      { name: 'Book Store Generator', description: 'Sell books and publications', slug: 'book-store-generator' },
      { name: 'Electronics Store Builder', description: 'Sell tech products online', slug: 'electronics-store-builder' },
      { name: 'Subscription Box Store', description: 'Sell recurring subscription products', slug: 'subscription-box-store' },
      { name: 'Local Store Builder', description: 'Online presence for local shops', slug: 'local-store-builder' }
    ],
    'link-in-bio': [
      { name: 'Link-in-Bio Generator', description: 'One link for all your channels', slug: 'link-in-bio-generator' },
      { name: 'Creator Link-in-Bio', description: 'Perfect for content creators', slug: 'creator-link-in-bio' },
      { name: 'Business Link-in-Bio', description: 'Professional link pages for businesses', slug: 'business-link-in-bio' },
      { name: 'Influencer Link Page', description: 'Monetize your social following', slug: 'influencer-link-page' },
      { name: 'Musician Link-in-Bio', description: 'Share music across all platforms', slug: 'musician-link-in-bio' },
      { name: 'Artist Link Page Generator', description: 'Connect fans to all your work', slug: 'artist-link-page' },
      { name: 'Podcast Link-in-Bio', description: 'Direct listeners to episodes', slug: 'podcast-link-in-bio' },
      { name: 'Coach Link Page Builder', description: 'Connect clients to your services', slug: 'coach-link-page' },
      { name: 'Event Organizer Links', description: 'Promote events across channels', slug: 'event-organizer-links' }
    ]
  }

  // FAQ data
  const faqData = [
    {
      question: 'What is an AI site generator?',
      answer: 'An AI site generator is a tool that uses artificial intelligence to automatically create websites based on your description and preferences. Simply tell it about your business or project, and it will generate a complete, professional website with content, design, and structure tailored to your needs. No coding or design skills required.'
    },
    {
      question: 'How is a generator different from a template?',
      answer: 'Templates are pre-designed layouts that you customize manually, while generators use AI to create unique sites based on your specific input. Generators produce original content, choose appropriate designs, and structure everything automatically. Templates require you to replace placeholder content yourself, but generators do all the work for you.'
    },
    {
      question: 'Are these generators free to use?',
      answer: 'Yes, you can generate and customize your site completely free. Strikingly offers free hosting with basic features, and you can upgrade to premium plans for additional functionality like custom domains, more storage, and advanced features. There\'s no credit card required to get started.'
    },
    {
      question: 'What kinds of sites can I build?',
      answer: 'Our generators can create virtually any type of website: business sites, portfolios, online stores, blogs, landing pages, personal sites, and more. Each generator is optimized for specific use cases and industries, ensuring you get the right features and design for your particular needs.'
    },
    {
      question: 'Can I customize what the generator produces?',
      answer: 'Absolutely! The generator creates a starting point that you can fully customize. Change colors, fonts, layouts, add or remove sections, edit all content, upload your own images, and modify anything to match your vision. You have complete control over the final result.'
    },
    {
      question: 'Do generated sites work on mobile?',
      answer: 'Yes, all sites created by our generators are fully responsive and mobile-optimized by default. They automatically adapt to look great on phones, tablets, and desktop computers. You don\'t need to do anything extra - mobile compatibility is built in from the start.'
    }
  ]

  // Filter generators based on search query
  const filterGenerators = (generators, query) => {
    if (!query.trim()) return generators
    const lowerQuery = query.toLowerCase()
    return generators.filter(gen => 
      gen.name.toLowerCase().includes(lowerQuery) ||
      gen.description.toLowerCase().includes(lowerQuery)
    )
  }

  // Get filtered results for all categories
  const getFilteredResults = () => {
    const results = {}
    let totalMatches = 0
    
    Object.keys(allGenerators).forEach(category => {
      const filtered = filterGenerators(allGenerators[category], searchQuery)
      if (filtered.length > 0) {
        results[category] = filtered
        totalMatches += filtered.length
      }
    })
    
    return { results, totalMatches }
  }

  const { results: filteredResults, totalMatches } = getFilteredResults()

  const toggleSection = (sectionId) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }))
  }

  const toggleFAQ = (index) => {
    setExpandedFAQ(prev => ({
      ...prev,
      [index]: !prev[index]
    }))
  }

  const clearSearch = () => {
    setSearchQuery('')
  }

  const scrollToSection = (anchor) => {
    const element = document.querySelector(anchor)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Top Bar */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-3">
          <a href="/" className="inline-flex items-center">
            <span className="text-xl font-bold text-gray-900">strikingly</span>
            <span className="ml-2 text-sm font-semibold text-purple-600 uppercase tracking-wide">AI</span>
          </a>
        </div>
      </header>

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="bg-white">
        <div className="max-w-6xl mx-auto px-4 py-2">
          <ol className="flex items-center text-sm text-gray-500">
            <li>
              <a href="/" className="hover:text-gray-700">{t.breadcrumbHome}</a>
            </li>
            <li className="mx-2">&gt;</li>
            <li className="text-gray-900">{t.breadcrumbCurrent}</li>
          </ol>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="bg-white py-16 lg:py-20">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
                  <div className="text-gray-800 uppercase">{t.heroLine1}</div>
                  <div className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent uppercase">
                    {t.heroLine2}
                  </div>
                </h1>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  {t.heroSubheadline}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="/s/ai_site_builder" 
                    className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-gradient-to-r from-blue-500 to-pink-500 rounded hover:shadow-lg transition-shadow uppercase"
                  >
                    {t.heroPrimaryCTA}
                  </a>
                  <button 
                    onClick={() => scrollToSection('#all-generators')}
                    className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-purple-600 border border-purple-600 rounded hover:bg-purple-50 transition-colors uppercase"
                  >
                    {t.heroSecondaryCTA}
                  </button>
                </div>
              </div>
              <div className="flex justify-center">
                <svg width="400" height="300" viewBox="0 0 400 300" className="text-purple-200">
                  <rect x="50" y="50" width="300" height="200" rx="8" fill="none" stroke="currentColor" strokeWidth="2"/>
                  <rect x="70" y="70" width="260" height="40" rx="4" fill="currentColor" opacity="0.3"/>
                  <rect x="70" y="130" width="120" height="60" rx="4" fill="currentColor" opacity="0.2"/>
                  <rect x="210" y="130" width="120" height="60" rx="4" fill="currentColor" opacity="0.2"/>
                  <rect x="70" y="210" width="260" height="20" rx="4" fill="currentColor" opacity="0.1"/>
                </svg>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Generators */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 uppercase mb-4">{t.featuredTitle}</h2>
              <p className="text-lg text-gray-600">{t.featuredSubtitle}</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredGenerators.map((generator, index) => (
                <article key={index} className="bg-white border border-gray-200 rounded p-6 hover:border-purple-600 hover:shadow-lg transition-all">
                  <a href={`/generators/${generator.slug}`} className="block">
                    <h3 className="font-bold text-gray-900 mb-2">{generator.name}</h3>
                    <p className="text-gray-600 text-sm mb-3">{generator.description}</p>
                    <span className="inline-block px-3 py-1 text-xs font-bold text-purple-600 border border-purple-600 rounded uppercase">
                      {generator.category}
                    </span>
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Browse by Category */}
        <section className="bg-white py-16">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 uppercase mb-4">{t.browseCategoryTitle}</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map((category, index) => (
                <article key={index} className="bg-white border border-gray-200 rounded p-6 hover:border-purple-600 hover:shadow-lg transition-all cursor-pointer">
                  <button 
                    onClick={() => scrollToSection(category.anchor)}
                    className="w-full text-left"
                  >
                    <div className="w-12 h-12 bg-purple-100 rounded mb-4 flex items-center justify-center">
                      <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4a1 1 0 011-1h12a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1V8z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <h3 className="font-bold text-gray-900 uppercase mb-2">{category.name}</h3>
                    <p className="text-gray-600 text-sm mb-3">{category.description}</p>
                    <div className="flex items-center text-purple-600">
                      <span className="text-sm font-semibold">Browse</span>
                      <svg className="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </button>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* All Generators Directory */}
        <section id="all-generators" className="bg-gray-50 py-16">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 uppercase mb-4">{t.allGeneratorsTitle}</h2>
              <p className="text-lg text-gray-600 mb-8">{t.allGeneratorsSubtitle}</p>
              
              {/* Search Input */}
              <div className="max-w-md mx-auto relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder={t.searchPlaceholder}
                  aria-label={t.searchLabel}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
                />
              </div>
              
              {/* Search Results Count */}
              {searchQuery && (
                <div className="mt-4 text-sm text-gray-600">
                  {totalMatches > 0 ? (
                    `${totalMatches} generator${totalMatches !== 1 ? 's' : ''} match${totalMatches === 1 ? 'es' : ''}`
                  ) : (
                    <div className="text-center">
                      <p className="mb-2">{t.noResultsText}</p>
                      <button 
                        onClick={clearSearch}
                        className="text-purple-600 hover:text-purple-700 font-semibold mr-4"
                      >
                        {t.clearSearchText}
                      </button>
                      <a href="/s/ai_site_builder" className="text-purple-600 hover:text-purple-700">
                        {t.cantFindText}
                      </a>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Category Subsections */}
            {Object.keys(searchQuery ? filteredResults : allGenerators).map((categoryKey) => {
              const category = categories.find(cat => cat.slug === categoryKey)
              const generators = searchQuery ? filteredResults[categoryKey] : allGenerators[categoryKey]
              const isExpanded = expandedSections[categoryKey] !== false
              const visibleGenerators = isExpanded ? generators : generators.slice(0, 6)
              
              return (
                <div key={categoryKey} id={categoryKey} className="mb-16">
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-gray-800 uppercase mb-2">
                      {category?.name || categoryKey}
                    </h3>
                    <p className="text-gray-600">{category?.description}</p>
                  </div>
                  
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                    {visibleGenerators.map((generator, index) => (
                      <article key={index} className="bg-white border border-gray-200 rounded p-6 hover:border-purple-600 hover:shadow-lg transition-all">
                        <a href={`/generators/${generator.slug}`} className="block">
                          <div className="w-12 h-12 bg-purple-100 rounded mb-4 flex items-center justify-center">
                            <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4a1 1 0 011-1h12a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1V8z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <h4 className="font-bold text-gray-900 mb-2">{generator.name}</h4>
                          <p className="text-gray-600 text-sm">{generator.description}</p>
                        </a>
                      </article>
                    ))}
                  </div>
                  
                  {!searchQuery && generators.length > 6 && (
                    <div className="text-center">
                      <button
                        onClick={() => toggleSection(categoryKey)}
                        aria-expanded={isExpanded}
                        aria-controls={`${categoryKey}-generators`}
                        className="inline-flex items-center px-6 py-3 text-sm font-bold text-purple-600 border border-purple-600 rounded hover:bg-purple-50 transition-colors uppercase"
                      >
                        {isExpanded ? t.hideButton : `${t.showAllButton} ${generators.length} generators`}
                      </button>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </section>

        {/* How It Works */}
        <section className="bg-white py-16">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 uppercase mb-4">{t.howItWorksTitle}</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="text-xl font-bold text-gray-800 uppercase mb-3">{t.step1Title}</h3>
                <p className="text-gray-600">{t.step1Text}</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="text-xl font-bold text-gray-800 uppercase mb-3">{t.step2Title}</h3>
                <p className="text-gray-600">{t.step2Text}</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="text-xl font-bold text-gray-800 uppercase mb-3">{t.step3Title}</h3>
                <p className="text-gray-600">{t.step3Text}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Strikingly */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 uppercase mb-4">{t.whyStrikinglyTitle}</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 uppercase mb-3">{t.benefit1Title}</h3>
                <p className="text-gray-600">{t.benefit1Text}</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 uppercase mb-3">{t.benefit2Title}</h3>
                <p className="text-gray-600">{t.benefit2Text}</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                    <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 uppercase mb-3">{t.benefit3Title}</h3>
                <p className="text-gray-600">{t.benefit3Text}</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-white py-16">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 uppercase mb-4">{t.faqTitle}</h2>
            </div>
            <div className="space-y-4">
              {faqData.map((faq, index) => (
                <div key={index} className="border border-gray-200 rounded">
                  <button
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={expandedFAQ[index]}
                    aria-controls={`faq-${index}`}
                    className="w-full px-6 py-4 text-left font-semibold text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-inset"
                  >
                    <div className="flex justify-between items-center">
                      <span>{faq.question}</span>
                      <svg 
                        className={`w-5 h-5 text-gray-500 transition-transform ${expandedFAQ[index] ? 'rotate-180' : ''}`}
                        fill="currentColor" 
                        viewBox="0 0 20 20"
                      >
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </button>
                  {expandedFAQ[index] && (
                    <div id={`faq-${index}`} className="px-6 pb-4">
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Closing CTA */}
        <section className="bg-white py-16 text-center">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-800 uppercase mb-4">{t.closingTitle}</h2>
            <p className="text-lg text-gray-600 mb-8">{t.closingSubtitle}</p>
            <a 
              href="/s/ai_site_builder" 
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-gradient-to-r from-blue-500 to-pink-500 rounded hover:shadow-lg transition-shadow uppercase"
            >
              {t.closingCTA}
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="mb-4">
                <span className="text-xl font-bold">strikingly</span>
              </div>
              <p className="text-gray-400 text-sm">
                Build beautiful websites with AI in seconds.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="/templates" className="hover:text-white">Templates</a></li>
                <li><a href="/pricing" className="hover:text-white">Pricing</a></li>
                <li><a href="/about" className="hover:text-white">About</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="/support" className="hover:text-white">Help Center</a></li>
                <li><a href="/blog" className="hover:text-white">Blog</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="/terms" className="hover:text-white">Terms</a></li>
                <li><a href="/privacy" className="hover:text-white">Privacy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2026 Strikingly. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
