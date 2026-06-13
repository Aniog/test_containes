import React, { useState } from 'react'
import './App.css'

// Strings for i18n readiness
const strings = {
  en: {
    logo: 'strikingly AI',
    breadcrumbHome: 'Strikingly',
    breadcrumbCurrent: 'AI Generators',
    heroH1Line1: 'BUILD ANY KIND OF SITE',
    heroH1Line2: 'WITH AI, IN AN INSTANT',
    heroSub: "Browse the right generator for what you're building, or jump straight into our AI site builder.",
    ctaStart: "START BUILDING - IT'S FREE",
    ctaBrowse: 'BROWSE GENERATORS',
    featuredTitle: 'FEATURED GENERATORS',
    featuredSub: 'A few common starting points.',
    browseTitle: 'BROWSE BY CATEGORY',
    allGenTitle: 'ALL GENERATORS',
    allGenSub: 'Sixty-plus generators, organized by what you\'re building.',
    searchPlaceholder: 'Search generators...',
    searchLabel: 'Search generators',
    resultCount: (count) => `${count} generators match`,
    noResults: "No generators match your search.",
    clearSearch: 'Clear search',
    noResultsCta: "Can't find it? Start with our AI builder.",
    howTitle: 'HOW IT WORKS',
    whyTitle: 'WHY STRIKINGLY',
    faqTitle: 'FREQUENTLY ASKED QUESTIONS',
    closingTitle: 'READY TO BUILD?',
    closingSub: 'Pick a generator above, or jump straight into our AI builder.',
    closingCta: 'START WITH AI BUILDER',
  }
}

// Sample data for Featured Generators (9 items, mixed categories)
const featuredGenerators = [
  { name: 'AI Website Generator', desc: 'Describe your business, get a full site', category: 'Website', slug: 'ai-website-generator' },
  { name: 'Free Portfolio Generator', desc: 'For creatives, in minutes, no fee', category: 'Portfolio', slug: 'free-portfolio-generator' },
  { name: 'AI Landing Page Maker', desc: 'One-page sites built to convert', category: 'Landing Page', slug: 'ai-landing-page-maker' },
  { name: 'Online Store Builder', desc: 'Start selling without writing code', category: 'Store', slug: 'online-store-builder' },
  { name: 'Link-in-Bio Generator', desc: 'One link for all your channels', category: 'Link-in-Bio', slug: 'link-in-bio-generator' },
  { name: 'One-Page Website Builder', desc: 'Simple sites, single scroll', category: 'Website', slug: 'one-page-website-builder' },
  { name: 'Wedding Website Generator', desc: 'Share your day with guests', category: 'Website', slug: 'wedding-website-generator' },
  { name: 'Restaurant Website Builder', desc: 'Menu, hours, reservations, done', category: 'Website', slug: 'restaurant-website-builder' },
  { name: 'Blog Generator for Beginners', desc: 'Publish-ready in minutes', category: 'Blog', slug: 'blog-generator-for-beginners' },
]

// Category data for Browse by Category
const categories = [
  { name: 'Websites', desc: 'AI-built business and personal sites for any goal.', slug: 'websites', icon: '🌐' },
  { name: 'Landing Pages', desc: 'Single-page sites built to convert visitors fast.', slug: 'landing-pages', icon: '📄' },
  { name: 'Portfolios', desc: 'Showcase your work with a clean, focused site.', slug: 'portfolios', icon: '🎨' },
  { name: 'Blogs', desc: 'Publish-ready blogs with built-in SEO basics.', slug: 'blogs', icon: '✍️' },
  { name: 'Online Stores', desc: 'Sell products online with payments built in.', slug: 'stores', icon: '🛒' },
  { name: 'Link-in-Bio', desc: 'One link, all your places. Made for creators.', slug: 'link-in-bio', icon: '🔗' },
]

// All generators data organized by category (8-12 per category)
const allGenerators = {
  websites: {
    title: 'Websites',
    desc: 'Full sites for businesses, events, and personal projects.',
    slug: 'websites',
    icon: '🌐',
    items: [
      { name: 'AI Website Generator', desc: 'Describe your business, get a full site', slug: 'ai-website-generator' },
      { name: 'One-Page Website Builder', desc: 'Simple sites, single scroll', slug: 'one-page-website-builder' },
      { name: 'Wedding Website Generator', desc: 'Share your day with guests', slug: 'wedding-website-generator' },
      { name: 'Restaurant Website Builder', desc: 'Menu, hours, reservations, done', slug: 'restaurant-website-builder' },
      { name: 'Free Website Builder for Photographers', desc: 'Showcase your work beautifully', slug: 'free-website-builder-for-photographers' },
      { name: 'AI Website for Yoga Instructors', desc: 'Class schedules and bookings', slug: 'ai-website-for-yoga-instructors' },
      { name: 'No-Code Website Builder', desc: 'Build without touching code', slug: 'no-code-website-builder' },
      { name: 'Beautiful Website Generator', desc: 'Stunning designs in seconds', slug: 'beautiful-website-generator' },
      { name: 'Business Website Builder', desc: 'Professional sites for any company', slug: 'business-website-builder' },
      { name: 'Personal Website Generator', desc: 'Your story, your way', slug: 'personal-website-generator' },
    ]
  },
  landingPages: {
    title: 'Landing Pages',
    desc: 'Focused pages designed to convert visitors into leads or customers.',
    slug: 'landing-pages',
    icon: '📄',
    items: [
      { name: 'AI Landing Page Maker', desc: 'One-page sites built to convert', slug: 'ai-landing-page-maker' },
      { name: 'Product Launch Landing Page', desc: 'Announce and sell your product', slug: 'product-launch-landing-page' },
      { name: 'Event Registration Page', desc: 'Collect RSVPs with ease', slug: 'event-registration-page' },
      { name: 'Lead Capture Generator', desc: 'Grow your email list fast', slug: 'lead-capture-generator' },
      { name: 'Free Landing Page Builder', desc: 'No cost, high impact', slug: 'free-landing-page-builder' },
      { name: 'AI Sales Page Builder', desc: 'Turn visitors into buyers', slug: 'ai-sales-page-builder' },
      { name: 'One-Page Promo Site', desc: 'Quick campaigns, instant results', slug: 'one-page-promo-site' },
      { name: 'Webinar Landing Page', desc: 'Register attendees in minutes', slug: 'webinar-landing-page' },
      { name: 'Course Sales Page Generator', desc: 'Sell your online course', slug: 'course-sales-page-generator' },
    ]
  },
  portfolios: {
    title: 'Portfolios',
    desc: 'Clean, focused showcases for creatives and professionals.',
    slug: 'portfolios',
    icon: '🎨',
    items: [
      { name: 'Free Portfolio Generator', desc: 'For creatives, in minutes, no fee', slug: 'free-portfolio-generator' },
      { name: 'Portfolio Generator for Designers', desc: 'Show your best work', slug: 'portfolio-generator-for-designers' },
      { name: 'AI Portfolio for Photographers', desc: 'Beautiful galleries, zero hassle', slug: 'ai-portfolio-for-photographers' },
      { name: 'Artist Portfolio Builder', desc: 'Your art, your story', slug: 'artist-portfolio-builder' },
      { name: 'Developer Portfolio Generator', desc: 'Code projects, front and center', slug: 'developer-portfolio-generator' },
      { name: 'Writer Portfolio Site', desc: 'Clips, bylines, and more', slug: 'writer-portfolio-site' },
      { name: 'No-Code Portfolio Builder', desc: 'Create without code', slug: 'no-code-portfolio-builder' },
      { name: 'Beautiful Portfolio Generator', desc: 'Stunning layouts in seconds', slug: 'beautiful-portfolio-generator' },
      { name: 'Freelancer Portfolio Maker', desc: 'Win clients with your work', slug: 'freelancer-portfolio-maker' },
      { name: 'Student Portfolio Builder', desc: 'Projects that stand out', slug: 'student-portfolio-builder' },
    ]
  },
  blogs: {
    title: 'Blogs',
    desc: 'Publish-ready blogs with SEO basics built in.',
    slug: 'blogs',
    icon: '✍️',
    items: [
      { name: 'Blog Generator for Beginners', desc: 'Publish-ready in minutes', slug: 'blog-generator-for-beginners' },
      { name: 'AI Blog Builder', desc: 'Start writing, skip the setup', slug: 'ai-blog-builder' },
      { name: 'Personal Blog Generator', desc: 'Your voice, your platform', slug: 'personal-blog-generator' },
      { name: 'Food Blog Builder', desc: 'Recipes, stories, and more', slug: 'food-blog-builder' },
      { name: 'Travel Blog Generator', desc: 'Share your journeys', slug: 'travel-blog-generator' },
      { name: 'Free Blog Builder', desc: 'No cost to start publishing', slug: 'free-blog-builder' },
      { name: 'One-Page Blog Site', desc: 'Simple, focused writing', slug: 'one-page-blog-site' },
      { name: 'AI Blog for Writers', desc: 'Your words, beautifully presented', slug: 'ai-blog-for-writers' },
      { name: 'No-Code Blog Builder', desc: 'Launch without code', slug: 'no-code-blog-builder' },
      { name: 'Beautiful Blog Generator', desc: 'Clean reading experience', slug: 'beautiful-blog-generator' },
    ]
  },
  stores: {
    title: 'Online Stores',
    desc: 'Sell products with payments built in.',
    slug: 'stores',
    icon: '🛒',
    items: [
      { name: 'Online Store Builder', desc: 'Start selling without writing code', slug: 'online-store-builder' },
      { name: 'Online Store Builder for Restaurants', desc: 'Take orders, deliver fast', slug: 'online-store-builder-for-restaurants' },
      { name: 'AI Store Generator', desc: 'Products to checkout in minutes', slug: 'ai-store-generator' },
      { name: 'Free Store Builder', desc: 'Sell without upfront cost', slug: 'free-store-builder' },
      { name: 'One-Page Store Builder', desc: 'Simple checkout, instant sales', slug: 'one-page-store-builder' },
      { name: 'No-Code Store Builder', desc: 'Launch your shop today', slug: 'no-code-store-builder' },
      { name: 'Beautiful Store Generator', desc: 'Products that look their best', slug: 'beautiful-store-generator' },
      { name: 'Handmade Store Builder', desc: 'Sell your crafts online', slug: 'handmade-store-builder' },
      { name: 'Digital Products Store', desc: 'Sell downloads and courses', slug: 'digital-products-store' },
    ]
  },
  linkInBio: {
    title: 'Link-in-Bio',
    desc: 'One link for all your places.',
    slug: 'link-in-bio',
    icon: '🔗',
    items: [
      { name: 'Link-in-Bio Generator', desc: 'One link for all your channels', slug: 'link-in-bio-generator' },
      { name: 'Creator Link Page Builder', desc: 'All your links, one page', slug: 'creator-link-page-builder' },
      { name: 'Free Link-in-Bio Maker', desc: 'No cost, instant setup', slug: 'free-link-in-bio-maker' },
      { name: 'AI Link Page Generator', desc: 'Smart links for creators', slug: 'ai-link-page-generator' },
      { name: 'One-Page Link Hub', desc: 'Simple, fast, effective', slug: 'one-page-link-hub' },
      { name: 'No-Code Link Builder', desc: 'Build without code', slug: 'no-code-link-builder' },
      { name: 'Beautiful Link Page', desc: 'Links that look great', slug: 'beautiful-link-page' },
      { name: 'Influencer Link Generator', desc: 'Your links, your brand', slug: 'influencer-link-generator' },
    ]
  }
}

// FAQ data
const faqs = [
  {
    q: 'What is an AI site generator?',
    a: 'An AI site generator is a tool that creates a complete website based on a short description you provide. Instead of starting from a blank page or template, you describe your business or goal in a sentence or two, and the AI builds a site for you in seconds.'
  },
  {
    q: 'How is a generator different from a template?',
    a: 'Templates are pre-designed layouts you customize manually. Generators use AI to create a unique site based on your description, including content, layout, and structure tailored to your needs.'
  },
  {
    q: 'Are these generators free to use?',
    a: 'Yes, you can generate, customize, and publish a site without a credit card. Some advanced features may require a paid plan later, but getting started is always free.'
  },
  {
    q: 'What kinds of sites can I build?',
    a: 'You can build websites, landing pages, portfolios, blogs, online stores, and link-in-bio pages. Each category has multiple generators tailored to different industries and goals.'
  },
  {
    q: 'Can I customize what the generator produces?',
    a: 'Absolutely. After the AI generates your site, you can edit text, images, colors, and layout using our visual editor. Nothing is locked in.'
  },
  {
    q: 'Do generated sites work on mobile?',
    a: 'Yes. Every generator produces responsive sites that automatically adapt to phones, tablets, and desktops. Mobile optimization is built in.'
  }
]

// Inline SVG illustration for hero
const HeroIllustration = () => (
  <svg
    className="hero-illustration"
    width="400"
    height="320"
    viewBox="0 0 400 320"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <rect x="40" y="40" width="320" height="240" rx="8" fill="#F4F6F8" stroke="#C6C9CD" strokeWidth="2"/>
    <rect x="60" y="60" width="280" height="40" rx="4" fill="#E2E4E7"/>
    <rect x="60" y="115" width="120" height="80" rx="4" fill="#8159BB" opacity="0.15"/>
    <rect x="195" y="115" width="145" height="35" rx="4" fill="#E2E4E7"/>
    <rect x="195" y="160" width="145" height="35" rx="4" fill="#E2E4E7"/>
    <rect x="60" y="210" width="280" height="8" rx="2" fill="#C6C9CD"/>
    <rect x="60" y="230" width="180" height="8" rx="2" fill="#C6C9CD"/>
    <circle cx="200" cy="160" r="30" fill="url(#aiGradient)" opacity="0.2"/>
    <defs>
      <linearGradient id="aiGradient" x1="170" y1="130" x2="230" y2="190" gradientUnits="userSpaceOnUse">
        <stop stopColor="#7671FF"/>
        <stop offset="1" stopColor="#CB0C9F"/>
      </linearGradient>
    </defs>
  </svg>
)

// Category icon component
const CategoryIcon = ({ icon }) => (
  <div className="text-4xl mb-3" aria-hidden="true">{icon}</div>
)

function App() {
  const s = strings.en
  
  // Search state
  const [searchQuery, setSearchQuery] = useState('')
  const [showAll, setShowAll] = useState({})
  
  // FAQ accordion state (first one expanded)
  const [openFaqs, setOpenFaqs] = useState({ 0: true })
  
  // Toggle FAQ
  const toggleFaq = (index) => {
    setOpenFaqs(prev => ({ ...prev, [index]: !prev[index] }))
  }
  
  // Toggle show all for a category
  const toggleShowAll = (categorySlug) => {
    setShowAll(prev => ({ ...prev, [categorySlug]: !prev[categorySlug] }))
  }
  
  // Filter generators based on search
  const getFilteredGenerators = () => {
    if (!searchQuery.trim()) {
      return allGenerators
    }
    
    const query = searchQuery.toLowerCase()
    const filtered = {}
    
    Object.keys(allGenerators).forEach(key => {
      const category = allGenerators[key]
      const matchingItems = category.items.filter(item =>
        item.name.toLowerCase().includes(query) ||
        item.desc.toLowerCase().includes(query) ||
        category.title.toLowerCase().includes(query)
      )
      
      if (matchingItems.length > 0) {
        filtered[key] = { ...category, items: matchingItems }
      }
    })
    
    return filtered
  }
  
  const filteredGenerators = getFilteredGenerators()
  const totalMatching = Object.values(filteredGenerators).reduce((sum, cat) => sum + cat.items.length, 0)
  
  // Clear search
  const clearSearch = () => {
    setSearchQuery('')
  }
  
  // Generate slug from name
  const getSlug = (name) => name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')
  
  return (
    <>
      {/* Section 0: Top bar */}
      <header className="top-bar">
        <div className="container">
          <a href="/" className="logo" aria-label="Strikingly AI home">{s.logo}</a>
        </div>
      </header>
      
      {/* Section 1: Breadcrumb */}
      <nav className="container breadcrumb" aria-label="Breadcrumb">
        <ol style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex' }}>
          <li><a href="/">{s.breadcrumbHome}</a></li>
          <li><span className="breadcrumb-separator" aria-hidden="true">›</span></li>
          <li aria-current="page">{s.breadcrumbCurrent}</li>
        </ol>
      </nav>
      
      {/* Section 2: Hero */}
      <section className="hero-section">
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center', gap: 'var(--spacing-4)' }}>
            <div>
              <h1>
                {s.heroH1Line1}<br />
                <span style={{ 
                  background: 'var(--color-ai-gradient)', 
                  WebkitBackgroundClip: 'text', 
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>
                  {s.heroH1Line2}
                </span>
              </h1>
              <p style={{ marginTop: 'var(--spacing-2)', maxWidth: '480px' }}>{s.heroSub}</p>
              <div style={{ marginTop: 'var(--spacing-3)', display: 'flex', gap: 'var(--spacing-2)', flexWrap: 'wrap' }}>
                <a href="/s/ai_site_builder" className="btn btn-large btn-gradient">{s.ctaStart}</a>
                <a href="#all-generators" className="btn btn-ghost">{s.ctaBrowse}</a>
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <HeroIllustration />
            </div>
          </div>
        </div>
      </section>
      
      {/* Section 3: Featured Generators */}
      <section>
        <div className="container">
          <h2>{s.featuredTitle}</h2>
          <p style={{ marginTop: 'var(--spacing-1)', marginBottom: 'var(--spacing-3)' }}>{s.featuredSub}</p>
          <div className="grid-3">
            {featuredGenerators.map((gen, idx) => (
              <a 
                key={idx} 
                href={`/generators/${gen.slug}`} 
                className="card generator-card"
                aria-label={gen.name}
              >
                <div style={{ marginBottom: 'var(--spacing-2)' }}>
                  <span className="tag">{gen.category}</span>
                </div>
                <h3 style={{ fontSize: '16px', marginBottom: 'var(--spacing-1)' }}>{gen.name}</h3>
                <p style={{ fontSize: '13px', margin: 0 }}>{gen.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>
      
      {/* Section 4: Browse by Category */}
      <section>
        <div className="container">
          <h2>{s.browseTitle}</h2>
          <div className="grid-3" style={{ marginTop: 'var(--spacing-3)' }}>
            {categories.map((cat, idx) => (
              <a 
                key={idx} 
                href={`#${cat.slug}`} 
                className="card category-card"
                aria-label={cat.name}
              >
                <CategoryIcon icon={cat.icon} />
                <h3 style={{ fontSize: '14px', marginBottom: 'var(--spacing-1)' }}>{cat.name}</h3>
                <p style={{ fontSize: '13px', margin: 0 }}>{cat.desc}</p>
                <div style={{ marginTop: 'var(--spacing-2)', color: 'var(--color-brand-purple)' }}>
                  →
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
      
      {/* Section 5: All Generators Directory */}
      <section id="all-generators">
        <div className="container">
          <h2>{s.allGenTitle}</h2>
          <p style={{ marginTop: 'var(--spacing-1)', marginBottom: 'var(--spacing-3)' }}>{s.allGenSub}</p>
          
          {/* Search input */}
          <div className="search-wrapper">
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
          
          {/* Empty state */}
          {searchQuery && totalMatching === 0 && (
            <div className="empty-state">
              <p>{s.noResults}</p>
              <button className="btn btn-ghost" onClick={clearSearch} style={{ marginTop: 'var(--spacing-2)' }}>
                {s.clearSearch}
              </button>
              <p style={{ marginTop: 'var(--spacing-2)' }}>
                <a href="/s/ai_site_builder">{s.noResultsCta}</a>
              </p>
            </div>
          )}
          
          {/* Category subsections */}
          {Object.keys(filteredGenerators).map((key) => {
            const category = filteredGenerators[key]
            const isExpanded = showAll[category.slug] || false
            const displayItems = isExpanded ? category.items : category.items.slice(0, 6)
            const hasMore = category.items.length > 6
            
            return (
              <div key={key} id={category.slug} style={{ marginTop: 'var(--spacing-4)' }}>
                <h3>{category.title}</h3>
                <p style={{ marginTop: 'var(--spacing-1)', marginBottom: 'var(--spacing-2)', fontSize: '13px' }}>{category.desc}</p>
                
                <div className="grid-3">
                  {displayItems.map((item, idx) => (
                    <a 
                      key={idx} 
                      href={`/generators/${item.slug}`} 
                      className="card generator-card"
                      aria-label={item.name}
                    >
                      <div style={{ fontSize: '24px', marginBottom: 'var(--spacing-2)' }} aria-hidden="true">{category.icon}</div>
                      <h4 style={{ fontSize: '14px', marginBottom: 'var(--spacing-1)' }}>{item.name}</h4>
                      <p style={{ fontSize: '13px', margin: 0 }}>{item.desc}</p>
                    </a>
                  ))}
                </div>
                
                {hasMore && (
                  <button
                    className="show-all-btn"
                    onClick={() => toggleShowAll(category.slug)}
                    aria-expanded={isExpanded}
                    aria-controls={`${category.slug}-cards`}
                  >
                    {isExpanded ? `Show fewer` : `Show all ${category.items.length} generators`}
                  </button>
                )}
              </div>
            )
          })}
        </div>
      </section>
      
      {/* Section 6: How It Works */}
      <section style={{ background: 'var(--color-light-bg)' }}>
        <div className="container">
          <h2>{s.howTitle}</h2>
          <div className="grid-3" style={{ marginTop: 'var(--spacing-3)' }}>
            <div>
              <div className="step-circle">1</div>
              <h3 style={{ marginTop: 'var(--spacing-2)', fontSize: '14px' }}>PICK A GENERATOR</h3>
              <p style={{ marginTop: 'var(--spacing-1)' }}>Browse by category or search to find one that fits your goal.</p>
            </div>
            <div>
              <div className="step-circle">2</div>
              <h3 style={{ marginTop: 'var(--spacing-2)', fontSize: '14px' }}>DESCRIBE YOUR SITE</h3>
              <p style={{ marginTop: 'var(--spacing-1)' }}>Tell our AI builder about your business in a sentence or two.</p>
            </div>
            <div>
              <div className="step-circle">3</div>
              <h3 style={{ marginTop: 'var(--spacing-2)', fontSize: '14px' }}>GENERATE AND PUBLISH</h3>
              <p style={{ marginTop: 'var(--spacing-1)' }}>Get a fully built site in seconds. Customize anything, then go live.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Section 7: Why Strikingly */}
      <section>
        <div className="container">
          <h2>{s.whyTitle}</h2>
          <div className="grid-3" style={{ marginTop: 'var(--spacing-3)' }}>
            <div className="card">
              <svg className="why-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <circle cx="12" cy="12" r="10"/>
                <polyline points="12 6 12 12 16 14"/>
              </svg>
              <h3 style={{ marginTop: 'var(--spacing-2)', fontSize: '14px' }}>LIVE IN SECONDS</h3>
              <p style={{ marginTop: 'var(--spacing-1)' }}>Describe your site, we build it. No setup, no learning curve.</p>
            </div>
            <div className="card">
              <svg className="why-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <rect x="2" y="4" width="20" height="16" rx="2"/>
                <path d="M6 8h12M6 12h12M6 16h8"/>
              </svg>
              <h3 style={{ marginTop: 'var(--spacing-2)', fontSize: '14px' }}>MOBILE BY DEFAULT</h3>
              <p style={{ marginTop: 'var(--spacing-1)' }}>Every generator produces responsive sites that work on any device.</p>
            </div>
            <div className="card">
              <svg className="why-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M20 6L9 17l-5-5"/>
              </svg>
              <h3 style={{ marginTop: 'var(--spacing-2)', fontSize: '14px' }}>FREE TO START</h3>
              <p style={{ marginTop: 'var(--spacing-1)' }}>Generate, customize, and publish without a credit card.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Section 8: FAQ */}
      <section>
        <div className="container">
          <h2>{s.faqTitle}</h2>
          <div style={{ maxWidth: '720px', marginTop: 'var(--spacing-3)' }}>
            {faqs.map((faq, idx) => (
              <div key={idx} style={{ borderBottom: '1px solid var(--color-divider)' }}>
                <button
                  className="accordion-button"
                  onClick={() => toggleFaq(idx)}
                  aria-expanded={!!openFaqs[idx]}
                  aria-controls={`faq-content-${idx}`}
                >
                  {faq.q}
                  <span className="accordion-icon" aria-hidden="true">↓</span>
                </button>
                <div 
                  id={`faq-content-${idx}`}
                  className="accordion-content"
                  aria-hidden={!openFaqs[idx]}
                >
                  <p>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Section 9: Closing CTA */}
      <section style={{ background: 'var(--color-white)', paddingTop: 'var(--spacing-4)', paddingBottom: 'var(--spacing-4)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2>{s.closingTitle}</h2>
          <p style={{ marginTop: 'var(--spacing-1)', marginBottom: 'var(--spacing-3)' }}>{s.closingSub}</p>
          <a href="/s/ai_site_builder" className="btn btn-large btn-gradient">{s.closingCta}</a>
        </div>
      </section>
      
      {/* Section 10: Footer */}
      <footer className="footer">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 'var(--spacing-3)' }}>
            <div>
              <div className="logo" style={{ fontSize: '16px' }}>{s.logo}</div>
            </div>
            <div className="footer-column">
              <h4>Product</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-1)' }}>
                <a href="/templates">Templates</a>
                <a href="/pricing">Pricing</a>
                <a href="/blog">Blog</a>
              </div>
            </div>
            <div className="footer-column">
              <h4>Company</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-1)' }}>
                <a href="/about">About</a>
                <a href="/support">Support</a>
              </div>
            </div>
            <div className="footer-column">
              <h4>Legal</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-1)' }}>
                <a href="/terms">Terms</a>
                <a href="/privacy">Privacy</a>
              </div>
            </div>
          </div>
          <div style={{ marginTop: 'var(--spacing-3)', fontSize: '12px', color: 'var(--color-body-text)' }}>
            © {new Date().getFullYear()} Strikingly. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  )
}

export default App
