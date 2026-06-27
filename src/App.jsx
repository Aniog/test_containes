import { useState, useEffect, useRef } from 'react'
import './App.css'
import strings from './strings.js'

// Icons as inline SVG components
const SearchIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="11" cy="11" r="8"/>
    <path d="m21 21-4.3-4.3"/>
  </svg>
)

const ArrowDownIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="m6 9 6 6 6-6"/>
  </svg>
)

const ArrowRightIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12h14"/>
    <path d="m12 5 7 7-7 7"/>
  </svg>
)

const WebsiteIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="3" width="20" height="14" rx="2"/>
    <path d="M8 21h8"/>
    <path d="M12 17v4"/>
  </svg>
)

const LandingPageIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="3" width="18" height="18" rx="2"/>
    <path d="M3 9h18"/>
    <path d="M9 21V9"/>
  </svg>
)

const PortfolioIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/>
    <polyline points="17 21 17 13 7 13 7 21"/>
    <polyline points="7 3 7 8 15 8"/>
  </svg>
)

const BlogIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/>
    <path d="M8 7h6"/>
    <path d="M8 11h8"/>
  </svg>
)

const StoreIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7"/>
    <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/>
    <path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4"/>
    <path d="M2 7h20"/>
    <path d="M22 7v3a2 2 0 0 1-2 2v0a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12v0a2 2 0 0 1-2-2V7"/>
  </svg>
)

const LinkIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
  </svg>
)

const ZapIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
  </svg>
)

const MobileIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
    <path d="M12 18h.01"/>
  </svg>
)

const FreeIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="10"/>
    <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"/>
    <path d="M12 18V6"/>
  </svg>
)

// Hero illustration SVG
const HeroIllustration = () => (
  <svg width="400" height="300" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <defs>
      <linearGradient id="heroGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#7671FF" stopOpacity="0.2"/>
        <stop offset="100%" stopColor="#CB0C9F" stopOpacity="0.2"/>
      </linearGradient>
    </defs>
    {/* Browser window */}
    <rect x="40" y="40" width="320" height="220" rx="8" fill="white" stroke="#C6C9CD" strokeWidth="2"/>
    <rect x="40" y="40" width="320" height="30" rx="8" fill="#F4F6F8"/>
    <rect x="40" y="62" width="320" height="8" fill="#F4F6F8"/>
    {/* Browser dots */}
    <circle cx="60" cy="55" r="5" fill="#8159BB"/>
    <circle cx="78" cy="55" r="5" fill="#E2E4E7"/>
    <circle cx="96" cy="55" r="5" fill="#E2E4E7"/>
    {/* Content blocks */}
    <rect x="60" y="90" width="120" height="15" rx="3" fill="url(#heroGradient)"/>
    <rect x="60" y="115" width="280" height="8" rx="2" fill="#E2E4E7"/>
    <rect x="60" y="130" width="200" height="8" rx="2" fill="#E2E4E7"/>
    <rect x="60" y="155" width="80" height="25" rx="4" fill="url(#heroGradient)"/>
    <rect x="150" y="155" width="80" height="25" rx="4" fill="#8159BB" fillOpacity="0.3"/>
    {/* Image placeholder */}
    <rect x="260" y="90" width="80" height="90" rx="4" fill="#F4F6F8" stroke="#C6C9CD" strokeWidth="1" strokeDasharray="4 4"/>
    <path d="M280 120 L300 140 L320 125" stroke="#8159BB" strokeWidth="2" strokeLinecap="round"/>
    {/* Decorative elements */}
    <circle cx="350" cy="80" r="20" fill="#7671FF" fillOpacity="0.1"/>
    <circle cx="50" cy="250" r="15" fill="#CB0C9F" fillOpacity="0.1"/>
  </svg>
)

// Generator card image placeholder
const GeneratorImagePlaceholder = ({ category }) => {
  const icons = {
    websites: <WebsiteIcon />,
    'landing-pages': <LandingPageIcon />,
    portfolios: <PortfolioIcon />,
    blogs: <BlogIcon />,
    stores: <StoreIcon />,
    'link-in-bio': <LinkIcon />
  }
  return icons[category] || <WebsiteIcon />
}

// Featured generators data
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
]

// Category cards data
const categoryCards = [
  { name: strings.categoryWebsites, description: strings.categoryWebsitesDesc, id: 'websites', icon: <WebsiteIcon /> },
  { name: strings.categoryLandingPages, description: strings.categoryLandingPagesDesc, id: 'landing-pages', icon: <LandingPageIcon /> },
  { name: strings.categoryPortfolios, description: strings.categoryPortfoliosDesc, id: 'portfolios', icon: <PortfolioIcon /> },
  { name: strings.categoryBlogs, description: strings.categoryBlogsDesc, id: 'blogs', icon: <BlogIcon /> },
  { name: strings.categoryStores, description: strings.categoryStoresDesc, id: 'stores', icon: <StoreIcon /> },
  { name: strings.categoryLinkInBio, description: strings.categoryLinkInBioDesc, id: 'link-in-bio', icon: <LinkIcon /> },
]

// All generators data by category
const generatorsByCategory = {
  websites: {
    title: strings.categoryWebsites,
    description: strings.websitesDesc,
    generators: [
      { name: 'AI Website Generator', description: 'Describe your business, get a full site in seconds' },
      { name: 'Free Website Builder for Photographers', description: 'Beautiful portfolio sites, no coding required' },
      { name: 'One-Page Website Builder', description: 'Simple sites with a single scroll' },
      { name: 'Wedding Website Generator', description: 'Share your special day with guests' },
      { name: 'Restaurant Website Builder', description: 'Menu, hours, and reservations built in' },
      { name: 'Business Website Generator', description: 'Professional presence for any industry' },
      { name: 'Personal Website Builder', description: 'Your own corner of the web' },
      { name: 'Nonprofit Website Generator', description: 'Share your mission with the world' },
      { name: 'Event Website Builder', description: 'Promote events and sell tickets' },
      { name: 'Community Website Generator', description: 'Build connection around shared interests' },
    ]
  },
  'landing-pages': {
    title: strings.categoryLandingPages,
    description: strings.landingPagesDesc,
    generators: [
      { name: 'AI Landing Page Maker', description: 'High-converting single-page sites' },
      { name: 'Product Launch Page Generator', description: 'Build buzz for your next release' },
      { name: 'Lead Capture Page Builder', description: 'Collect leads with beautiful forms' },
      { name: 'Coming Soon Page Generator', description: 'Tease your launch with style' },
      { name: 'Webinar Registration Page', description: 'Drive signups for your event' },
      { name: 'Contest Entry Page Builder', description: 'Grow your audience with giveaways' },
      { name: 'App Download Landing Page', description: 'Promote your mobile or web app' },
      { name: ' ebook Landing Page Generator', description: 'Capture emails for your content' },
    ]
  },
  portfolios: {
    title: strings.categoryPortfolios,
    description: strings.portfoliosDesc,
    generators: [
      { name: 'Free Portfolio Generator', description: 'For creatives, in minutes, no fee' },
      { name: 'Portfolio Generator for Designers', description: 'Showcase your design work beautifully' },
      { name: 'Photography Portfolio Builder', description: 'Let your images do the talking' },
      { name: 'Artist Portfolio Generator', description: 'Present your art to the world' },
      { name: 'Writer Portfolio Builder', description: 'Display your published work' },
      { name: 'Freelancer Portfolio Generator', description: 'Win clients with your skills showcase' },
      { name: 'Architecture Portfolio Builder', description: 'Present projects with visual impact' },
      { name: 'Fashion Portfolio Generator', description: 'Style-forward portfolios for designers' },
      { name: 'Music Portfolio Builder', description: 'Share your sound and performances' },
      { name: 'Video Portfolio Generator', description: 'Reels and showreels, beautifully presented' },
    ]
  },
  blogs: {
    title: strings.categoryBlogs,
    description: strings.blogsDesc,
    generators: [
      { name: 'Blog Generator for Beginners', description: 'Publish-ready in minutes' },
      { name: 'Personal Blog Builder', description: 'Share your thoughts with the world' },
      { name: 'Travel Blog Generator', description: 'Document your adventures beautifully' },
      { name: 'Food Blog Builder', description: 'Recipes and restaurant reviews, styled' },
      { name: 'Fashion Blog Generator', description: 'Style content with visual flair' },
      { name: 'Tech Blog Builder', description: 'Share insights on technology and innovation' },
      { name: 'Finance Blog Generator', description: 'Money tips and market commentary' },
      { name: 'Health and Wellness Blog', description: 'Wellness content that resonates' },
      { name: 'Parenting Blog Generator', description: 'Stories and advice for parents' },
      { name: 'DIY Blog Builder', description: 'Projects and tutorials for makers' },
    ]
  },
  stores: {
    title: strings.categoryStores,
    description: strings.storesDesc,
    generators: [
      { name: 'Online Store Builder', description: 'Start selling without writing code' },
      { name: 'Online Store Builder for Restaurants', description: 'Merch and goods for food brands' },
      { name: 'Handmade Goods Store Builder', description: 'Sell crafts and artisan products' },
      { name: 'Digital Products Store', description: 'Sell ebooks, courses, and downloads' },
      { name: 'Fashion Store Builder', description: 'Clothing and accessories, beautifully presented' },
      { name: 'Beauty Products Store', description: 'Skincare and cosmetics e-commerce' },
      { name: 'Pet Products Store Builder', description: 'Supplies for pet lovers' },
      { name: 'Sports Equipment Store', description: 'Athletic gear and apparel' },
      { name: 'Home Decor Store Builder', description: 'Furniture and accessories online' },
      { name: 'Subscription Box Builder', description: 'Recurring revenue, delivered' },
    ]
  },
  'link-in-bio': {
    title: strings.categoryLinkInBio,
    description: strings.linkInBioDesc,
    generators: [
      { name: 'Link-in-Bio Generator', description: 'One link for all your channels' },
      { name: 'Instagram Link-in-Bio Builder', description: 'Optimized for social traffic' },
      { name: 'TikTok Bio Link Generator', description: 'All your content in one place' },
      { name: 'YouTuber Link-in-Bio Builder', description: 'Connect fans to all your content' },
      { name: 'Podcast Link-in-Bio Generator', description: 'Drive listeners to all episodes' },
      { name: 'Creator Link-in-Bio Builder', description: 'Monetize your audience access' },
      { name: 'Musician Link-in-Bio Generator', description: 'Music, merch, and shows in one link' },
      { name: 'Influencer Bio Link Builder', description: 'Curate your digital presence' },
      { name: 'Author Link-in-Bio Generator', description: 'Books, socials, and newsletter' },
      { name: 'Photographer Bio Link Builder', description: 'Portfolio and booking in one place' },
    ]
  }
}

// FAQ data
const faqData = [
  { question: strings.faqQ1, answer: strings.faqA1 },
  { question: strings.faqQ2, answer: strings.faqA2 },
  { question: strings.faqQ3, answer: strings.faqA3 },
  { question: strings.faqQ4, answer: strings.faqA4 },
  { question: strings.faqQ5, answer: strings.faqA5 },
  { question: strings.faqQ6, answer: strings.faqA6 },
]

// How it works steps
const howItWorksSteps = [
  { title: strings.howItWorksStep1Title, description: strings.howItWorksStep1Desc },
  { title: strings.howItWorksStep2Title, description: strings.howItWorksStep2Desc },
  { title: strings.howItWorksStep3Title, description: strings.howItWorksStep3Desc },
]

// Why Strikingly items
const whyItems = [
  { title: strings.whyStep1Title, description: strings.whyStep1Desc, icon: <ZapIcon /> },
  { title: strings.whyStep2Title, description: strings.whyStep2Desc, icon: <MobileIcon /> },
  { title: strings.whyStep3Title, description: strings.whyStep3Desc, icon: <FreeIcon /> },
]

// Footer links
const footerLinks = {
  products: [
    { label: 'Templates', href: '/templates' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Features', href: '/features' },
    { label: 'Integrations', href: '/integrations' },
  ],
  resources: [
    { label: 'Blog', href: '/blog' },
    { label: 'Help Center', href: '/support' },
    { label: 'Community', href: '/community' },
    { label: 'Webinars', href: '/webinars' },
  ],
  company: [
    { label: 'About', href: '/about' },
    { label: 'Careers', href: '/careers' },
    { label: 'Press', href: '/press' },
    { label: 'Contact', href: '/contact' },
  ],
  legal: [
    { label: 'Terms', href: '/terms' },
    { label: 'Privacy', href: '/privacy' },
    { label: 'Cookies', href: '/cookies' },
  ],
}

// Helper to convert name to slug
const toSlug = (name) => name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')

// Section 0: Top Bar
const TopBar = () => (
  <header className="top-bar">
    <div className="container">
      <a href="/" className="top-bar-logo">{strings.logoText}</a>
    </div>
  </header>
)

// Section 1: Breadcrumb
const Breadcrumb = () => (
  <nav className="breadcrumb container" aria-label="Breadcrumb">
    <ol>
      <li><a href="/">{strings.breadcrumbHome}</a></li>
      <li aria-current="page">{strings.breadcrumbCurrent}</li>
    </ol>
  </nav>
)

// Section 2: Hero
const Hero = () => (
  <section className="hero section--xl">
    <div className="container">
      <div className="hero-content">
        <div className="hero-text">
          <h1>
            {strings.heroH1Line1}
            <span className="h1-line-2 gradient-text">{strings.heroH1Line2}</span>
          </h1>
          <p className="hero-sub">{strings.heroSubheadline}</p>
          <div className="hero-ctas">
            <a href="/s/ai_site_builder" className="btn btn-primary">{strings.heroPrimaryCTA}</a>
            <a href="#all-generators" className="btn btn-secondary">{strings.heroSecondaryCTA}</a>
          </div>
        </div>
        <div className="hero-illustration">
          <HeroIllustration />
        </div>
      </div>
    </div>
  </section>
)

// Section 3: Featured Generators
const FeaturedGenerators = () => (
  <section className="section section--lg" style={{ background: 'var(--light-bg)' }}>
    <div className="container">
      <header className="section-header">
        <h2>{strings.featuredHeading}</h2>
        <p>{strings.featuredSubheading}</p>
      </header>
      <div className="featured-grid">
        {featuredGenerators.map((generator) => (
          <a
            key={generator.slug}
            href={`/generators/${generator.slug}`}
            className="featured-card card"
          >
            <div className="card-body">
              <h3>{generator.name}</h3>
              <p>{generator.description}</p>
              <span className="tag">{generator.category}</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  </section>
)

// Section 4: Browse by Category
const BrowseByCategory = () => (
  <section className="section section--lg">
    <div className="container">
      <header className="section-header">
        <h2>{strings.browseHeading}</h2>
      </header>
      <div className="category-grid">
        {categoryCards.map((category) => (
          <a
            key={category.id}
            href={`#${category.id}`}
            className="category-card card"
          >
            <div className="category-icon">{category.icon}</div>
            <h3>{category.name}</h3>
            <p>{category.description}</p>
            <ArrowRightIcon />
          </a>
        ))}
      </div>
    </div>
  </section>
)

// Section 5: All Generators
const AllGenerators = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [expandedSections, setExpandedSections] = useState({})
  const searchInputRef = useRef(null)

  // Get all generators flattened for search
  const allGenerators = Object.entries(generatorsByCategory).flatMap(([categoryId, category]) =>
    category.generators.map(gen => ({ ...gen, categoryId, categoryName: category.title }))
  )

  // Filter generators based on search
  const filteredGenerators = searchQuery.trim()
    ? allGenerators.filter(gen =>
        gen.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        gen.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        gen.categoryName.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : allGenerators

  // Group filtered generators by category
  const filteredByCategory = Object.keys(generatorsByCategory).reduce((acc, catId) => {
    const matches = filteredGenerators.filter(gen => gen.categoryId === catId)
    if (matches.length > 0) {
      acc[catId] = matches
    }
    return acc
  }, {})

  const resultCount = filteredGenerators.length

  const toggleSection = (categoryId) => {
    setExpandedSections(prev => ({
      ...prev,
      [categoryId]: !prev[categoryId]
    }))
  }

  const clearSearch = () => {
    setSearchQuery('')
    searchInputRef.current?.focus()
  }

  return (
    <section id="all-generators" className="section section--lg" style={{ background: 'var(--light-bg)' }}>
      <div className="container">
        <header className="section-header">
          <h2>{strings.allGeneratorsHeading}</h2>
          <p>{strings.allGeneratorsSubheading}</p>
        </header>

        {/* Search */}
        <div className="search-container">
          <div className="search-input-wrapper">
            <span className="search-icon"><SearchIcon /></span>
            <input
              ref={searchInputRef}
              type="search"
              className="search-input"
              placeholder={strings.searchPlaceholder}
              aria-label={strings.searchAriaLabel}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          {searchQuery.trim() && (
            <p className="results-count">{strings.resultsCount(resultCount)}</p>
          )}
        </div>

        {/* No results state */}
        {searchQuery.trim() && resultCount === 0 && (
          <div className="no-results">
            <p>{strings.noResultsText}</p>
            <button type="button" className="btn btn-secondary" onClick={clearSearch}>
              {strings.clearSearch}
            </button>
            <p style={{ marginTop: 'var(--space-sm)' }}>
              {strings.cantFindIt} <a href="/s/ai_site_builder">{strings.startWithAI}</a>
            </p>
          </div>
        )}

        {/* Generator subsections */}
        {Object.entries(generatorsByCategory).map(([categoryId, category]) => {
          const isVisible = !searchQuery.trim() || filteredByCategory[categoryId]
          if (!isVisible) return null

          const generators = searchQuery.trim() ? (filteredByCategory[categoryId] || []) : category.generators
          const totalCount = category.generators.length
          const isExpanded = expandedSections[categoryId]
          const visibleCount = 6
          const hasMore = generators.length > visibleCount

          return (
            <div
              key={categoryId}
              id={categoryId}
              className={`generators-section ${isExpanded ? 'show-all-expanded' : ''}`}
              style={{ display: searchQuery.trim() && !filteredByCategory[categoryId] ? 'none' : 'block' }}
            >
              <header className="subsection-header">
                <h3>{category.title}</h3>
                <p>{category.description}</p>
              </header>

              <div className="generators-grid">
                {generators.slice(0, visibleCount).map((generator, index) => (
                  <a
                    key={`${categoryId}-${index}`}
                    href={`/generators/${toSlug(generator.name)}`}
                    className="generator-card card"
                  >
                    <div className="card-image">
                      <GeneratorImagePlaceholder category={categoryId} />
                    </div>
                    <h4>{generator.name}</h4>
                    <p>{generator.description}</p>
                  </a>
                ))}
                {(isExpanded || !hasMore) && generators.slice(visibleCount).map((generator, index) => (
                  <a
                    key={`${categoryId}-extra-${index}`}
                    href={`/generators/${toSlug(generator.name)}`}
                    className="generator-card card hidden-cards"
                  >
                    <div className="card-image">
                      <GeneratorImagePlaceholder category={categoryId} />
                    </div>
                    <h4>{generator.name}</h4>
                    <p>{generator.description}</p>
                  </a>
                ))}
              </div>

              {hasMore && (
                <div className="show-all-container">
                  <button
                    type="button"
                    className="show-all-btn"
                    aria-expanded={isExpanded}
                    aria-controls={`${categoryId}-cards`}
                    onClick={() => toggleSection(categoryId)}
                  >
                    {isExpanded ? strings.showLess : strings.showAll(totalCount)}
                  </button>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}

// Section 6: How It Works
const HowItWorks = () => (
  <section className="section section--lg">
    <div className="container">
      <header className="section-header">
        <h2>{strings.howItWorksHeading}</h2>
      </header>
      <div className="how-it-works-grid">
        {howItWorksSteps.map((step, index) => (
          <div key={index} className="step">
            <div className="step-number">{index + 1}</div>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
)

// Section 7: Why Strikingly
const WhyStrikingly = () => (
  <section className="section section--lg" style={{ background: 'var(--light-bg)' }}>
    <div className="container">
      <header className="section-header">
        <h2>{strings.whyStrikinglyHeading}</h2>
      </header>
      <div className="why-grid">
        {whyItems.map((item, index) => (
          <div key={index} className="why-item">
            <div className="why-icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
)

// Section 8: FAQ
const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="section section--lg">
      <div className="container">
        <header className="section-header">
          <h2>{strings.faqHeading}</h2>
        </header>
        <div className="faq-list">
          {faqData.map((item, index) => (
            <div
              key={index}
              className={`faq-item ${openIndex === index ? 'expanded' : ''}`}
            >
              <button
                type="button"
                className="faq-question"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              >
                {item.question}
                <span className="faq-icon"><ArrowDownIcon /></span>
              </button>
              <div
                id={`faq-answer-${index}`}
                className="faq-answer"
                role="region"
                aria-labelledby={`faq-question-${index}`}
              >
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Section 9: Closing CTA
const ClosingCTA = () => (
  <section className="closing-cta section section--lg">
    <div className="container">
      <h2>{strings.closingHeading}</h2>
      <p>{strings.closingSub}</p>
      <a href="/s/ai_site_builder" className="btn btn-primary">{strings.closingCTA}</a>
    </div>
  </section>
)

// Section 10: Footer
const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="footer-grid">
        <div>
          <div className="footer-logo">{strings.logoText}</div>
        </div>
        <div className="footer-col">
          <h4>{strings.footerProducts}</h4>
          <ul>
            {footerLinks.products.map((link) => (
              <li key={link.href}><a href={link.href}>{link.label}</a></li>
            ))}
          </ul>
        </div>
        <div className="footer-col">
          <h4>{strings.footerResources}</h4>
          <ul>
            {footerLinks.resources.map((link) => (
              <li key={link.href}><a href={link.href}>{link.label}</a></li>
            ))}
          </ul>
        </div>
        <div className="footer-col">
          <h4>{strings.footerCompany}</h4>
          <ul>
            {footerLinks.company.map((link) => (
              <li key={link.href}><a href={link.href}>{link.label}</a></li>
            ))}
          </ul>
        </div>
        <div className="footer-col">
          <h4>{strings.footerLegal}</h4>
          <ul>
            {footerLinks.legal.map((link) => (
              <li key={link.href}><a href={link.href}>{link.label}</a></li>
            ))}
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        {strings.footerCopyright}
      </div>
    </div>
  </footer>
)

// Main App component
function App() {
  return (
    <>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <TopBar />
      <Breadcrumb />
      <main id="main-content">
        <Hero />
        <FeaturedGenerators />
        <BrowseByCategory />
        <AllGenerators />
        <HowItWorks />
        <WhyStrikingly />
        <FAQ />
        <ClosingCTA />
      </main>
      <Footer />
    </>
  )
}

export default App
