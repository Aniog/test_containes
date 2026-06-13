import { useState, useEffect, useRef } from 'react'
import './App.css'
import { strings } from './strings'

// Generator data
const generators = [
  // Websites
  { name: 'AI Website Generator', slug: 'ai-website-generator', description: 'Describe your business, get a full site', category: 'websites' },
  { name: 'Free Website Builder for Photographers', slug: 'free-website-builder-photographers', description: 'Portfolio sites for photographers, no fee', category: 'websites' },
  { name: 'One-Page Wedding Website Builder', slug: 'one-page-wedding-website-builder', description: 'Simple wedding sites, single scroll', category: 'websites' },
  { name: 'Restaurant Website Builder', slug: 'restaurant-website-builder', description: 'Menu, hours, reservations, done', category: 'websites' },
  { name: 'AI Business Website Generator', slug: 'ai-business-website-generator', description: 'Professional sites for any business', category: 'websites' },
  { name: 'Free Website Builder for Yoga Instructors', slug: 'free-website-builder-yoga-instructors', description: 'Class schedules and bookings built in', category: 'websites' },
  { name: 'No-Code Website Builder', slug: 'no-code-website-builder', description: 'Build without writing a single line', category: 'websites' },
  { name: 'Beautiful Website Generator', slug: 'beautiful-website-generator', description: 'Stunning designs, zero design skills', category: 'websites' },
  { name: 'AI Website Builder for Consultants', slug: 'ai-website-builder-consultants', description: 'Professional consulting sites in minutes', category: 'websites' },
  { name: 'Free Website Builder for Musicians', slug: 'free-website-builder-musicians', description: 'Share your music and tour dates', category: 'websites' },
  // Landing Pages
  { name: 'AI Landing Page Maker', slug: 'ai-landing-page-maker', description: 'One-page sites built to convert', category: 'landing-pages' },
  { name: 'Free Landing Page Generator', slug: 'free-landing-page-generator', description: 'Launch campaigns without a budget', category: 'landing-pages' },
  { name: 'Product Launch Landing Page', slug: 'product-launch-landing-page', description: 'Build hype before your launch day', category: 'landing-pages' },
  { name: 'SaaS Landing Page Builder', slug: 'saas-landing-page-builder', description: 'Convert visitors into signups', category: 'landing-pages' },
  { name: 'Event Landing Page Generator', slug: 'event-landing-page-generator', description: 'Promote events and collect RSVPs', category: 'landing-pages' },
  { name: 'AI Landing Page for Coaches', slug: 'ai-landing-page-coaches', description: 'Book more clients with one page', category: 'landing-pages' },
  { name: 'No-Code Landing Page Builder', slug: 'no-code-landing-page-builder', description: 'Drag, drop, and publish fast', category: 'landing-pages' },
  { name: 'Beautiful Landing Page Generator', slug: 'beautiful-landing-page-generator', description: 'Eye-catching pages that convert', category: 'landing-pages' },
  { name: 'Landing Page Builder for Agencies', slug: 'landing-page-builder-agencies', description: 'Client-ready pages in minutes', category: 'landing-pages' },
  { name: 'Free Landing Page for Startups', slug: 'free-landing-page-startups', description: 'Validate ideas before building', category: 'landing-pages' },
  // Portfolios
  { name: 'Free Portfolio Generator', slug: 'free-portfolio-generator', description: 'For creatives, in minutes, no fee', category: 'portfolios' },
  { name: 'Portfolio Generator for Designers', slug: 'portfolio-generator-designers', description: 'Showcase your best work beautifully', category: 'portfolios' },
  { name: 'AI Portfolio Builder for Artists', slug: 'ai-portfolio-builder-artists', description: 'Let AI arrange your gallery', category: 'portfolios' },
  { name: 'Photographer Portfolio Generator', slug: 'photographer-portfolio-generator', description: 'Full-screen galleries, fast loading', category: 'portfolios' },
  { name: 'Free Portfolio for Writers', slug: 'free-portfolio-writers', description: 'Publish your clips and get hired', category: 'portfolios' },
  { name: 'AI Portfolio for Developers', slug: 'ai-portfolio-developers', description: 'Code projects displayed beautifully', category: 'portfolios' },
  { name: 'Minimal Portfolio Generator', slug: 'minimal-portfolio-generator', description: 'Clean, focused, no distractions', category: 'portfolios' },
  { name: 'Portfolio Builder for Architects', slug: 'portfolio-builder-architects', description: 'Project showcases with detail views', category: 'portfolios' },
  { name: 'Free Portfolio for Models', slug: 'free-portfolio-models', description: 'Bookings and comp cards built in', category: 'portfolios' },
  { name: 'AI Portfolio for Filmmakers', slug: 'ai-portfolio-filmmakers', description: 'Video reels and project pages', category: 'portfolios' },
  // Blogs
  { name: 'Blog Generator for Beginners', slug: 'blog-generator-beginners', description: 'Publish-ready in minutes', category: 'blogs' },
  { name: 'AI Blog Generator', slug: 'ai-blog-generator', description: 'Write and publish with AI help', category: 'blogs' },
  { name: 'Free Blog Builder', slug: 'free-blog-builder', description: 'Start blogging without a budget', category: 'blogs' },
  { name: 'SEO Blog Generator', slug: 'seo-blog-generator', description: 'Built-in SEO basics from day one', category: 'blogs' },
  { name: 'Travel Blog Generator', slug: 'travel-blog-generator', description: 'Share your adventures with the world', category: 'blogs' },
  { name: 'Food Blog Generator', slug: 'food-blog-generator', description: 'Recipe cards and photo galleries', category: 'blogs' },
  { name: 'AI Blog for Small Business', slug: 'ai-blog-small-business', description: 'Content marketing made simple', category: 'blogs' },
  { name: 'Personal Blog Generator', slug: 'personal-blog-generator', description: 'Your thoughts, beautifully presented', category: 'blogs' },
  { name: 'Tech Blog Generator', slug: 'tech-blog-generator', description: 'Code snippets and tutorials', category: 'blogs' },
  { name: 'Free Blog for Creators', slug: 'free-blog-creators', description: 'Build your audience from scratch', category: 'blogs' },
  // Stores
  { name: 'Online Store Builder', slug: 'online-store-builder', description: 'Start selling without writing code', category: 'stores' },
  { name: 'Online Store Builder for Restaurants', slug: 'online-store-builder-restaurants', description: 'Take orders and sell merch', category: 'stores' },
  { name: 'Free Ecommerce Generator', slug: 'free-ecommerce-generator', description: 'Launch a store with zero upfront cost', category: 'stores' },
  { name: 'AI Store Builder for Fashion', slug: 'ai-store-builder-fashion', description: 'Lookbooks and checkout in one', category: 'stores' },
  { name: 'Digital Product Store Generator', slug: 'digital-product-store-generator', description: 'Sell downloads and courses', category: 'stores' },
  { name: 'AI Store Builder for Artists', slug: 'ai-store-builder-artists', description: 'Sell prints and originals online', category: 'stores' },
  { name: 'Subscription Store Builder', slug: 'subscription-store-builder', description: 'Recurring revenue, automated billing', category: 'stores' },
  { name: 'Free Store for Makers', slug: 'free-store-makers', description: 'Handmade goods, easy checkout', category: 'stores' },
  { name: 'AI Store Builder for Musicians', slug: 'ai-store-builder-musicians', description: 'Merch, tickets, and music sales', category: 'stores' },
  { name: 'No-Code Ecommerce Builder', slug: 'no-code-ecommerce-builder', description: 'Full store, zero technical skills', category: 'stores' },
  // Link-in-Bio
  { name: 'Link-in-Bio Generator', slug: 'link-in-bio-generator', description: 'One link for all your channels', category: 'link-in-bio' },
  { name: 'Free Link-in-Bio for Creators', slug: 'free-link-in-bio-creators', description: 'All your links, one beautiful page', category: 'link-in-bio' },
  { name: 'AI Link-in-Bio Builder', slug: 'ai-link-in-bio-builder', description: 'Smart links that adapt to visitors', category: 'link-in-bio' },
  { name: 'Link-in-Bio for Musicians', slug: 'link-in-bio-musicians', description: 'Tour dates, merch, and streaming', category: 'link-in-bio' },
  { name: 'Link-in-Bio for Photographers', slug: 'link-in-bio-photographers', description: 'Portfolio and booking links combined', category: 'link-in-bio' },
  { name: 'Link-in-Bio for Coaches', slug: 'link-in-bio-coaches', description: 'Bookings, courses, and social links', category: 'link-in-bio' },
  { name: 'Beautiful Link-in-Bio Generator', slug: 'beautiful-link-in-bio-generator', description: 'Stand out with custom designs', category: 'link-in-bio' },
  { name: 'Link-in-Bio for Podcasters', slug: 'link-in-bio-podcasters', description: 'Episodes, sponsors, and merch', category: 'link-in-bio' },
  { name: 'No-Code Link-in-Bio Builder', slug: 'no-code-link-in-bio-builder', description: 'Drag, drop, and share your link', category: 'link-in-bio' },
  { name: 'Link-in-Bio for Fitness Trainers', slug: 'link-in-bio-fitness-trainers', description: 'Classes, programs, and social proof', category: 'link-in-bio' },
]

const featuredGenerators = [
  { name: 'AI Website Generator', slug: 'ai-website-generator', description: 'Describe your business, get a full site', category: 'Website' },
  { name: 'Free Portfolio Generator', slug: 'free-portfolio-generator', description: 'For creatives, in minutes, no fee', category: 'Portfolio' },
  { name: 'AI Landing Page Maker', slug: 'ai-landing-page-maker', description: 'One-page sites built to convert', category: 'Landing Page' },
  { name: 'Online Store Builder', slug: 'online-store-builder', description: 'Start selling without writing code', category: 'Store' },
  { name: 'Link-in-Bio Generator', slug: 'link-in-bio-generator', description: 'One link for all your channels', category: 'Link-in-Bio' },
  { name: 'One-Page Website Builder', slug: 'one-page-website-builder', description: 'Simple sites, single scroll', category: 'Website' },
  { name: 'Wedding Website Generator', slug: 'wedding-website-generator', description: 'Share your day with guests', category: 'Website' },
  { name: 'Restaurant Website Builder', slug: 'restaurant-website-builder', description: 'Menu, hours, reservations, done', category: 'Website' },
  { name: 'Blog Generator for Beginners', slug: 'blog-generator-beginners', description: 'Publish-ready in minutes', category: 'Blog' },
]

const categories = [
  { name: 'Websites', slug: 'websites', description: "AI-built business and personal sites for any goal." },
  { name: 'Landing Pages', slug: 'landing-pages', description: "Single-page sites built to convert visitors fast." },
  { name: 'Portfolios', slug: 'portfolios', description: "Showcase your work with a clean, focused site." },
  { name: 'Blogs', slug: 'blogs', description: "Publish-ready blogs with built-in SEO basics." },
  { name: 'Online Stores', slug: 'stores', description: "Sell products online with payments built in." },
  { name: 'Link-in-Bio', slug: 'link-in-bio', description: "One link, all your places. Made for creators." },
]

const faqData = [
  {
    question: 'What is an AI site generator?',
    answer: 'An AI site generator is a tool that uses artificial intelligence to create a complete website from a short description. Instead of picking a template and manually filling in every section, you tell the AI what your business does, what you want to achieve, and any style preferences. The generator then produces a fully structured site with pages, copy, images, and layout — all in seconds.',
  },
  {
    question: 'How is a generator different from a template?',
    answer: 'Templates give you a pre-designed layout that you fill in yourself. Generators go a step further: they create the layout, write the copy, and place relevant images based on your description. You still get full control to customize everything afterward, but the starting point is a complete, personalized site rather than a blank canvas.',
  },
  {
    question: 'Are these generators free to use?',
    answer: 'Yes. You can generate, customize, and publish a site without entering a credit card. Strikingly offers a free tier that covers most personal and small-business needs. If you need advanced features like a custom domain, ecommerce tools, or higher traffic limits, paid plans are available — but the core generator experience is always free to start.',
  },
  {
    question: 'What kinds of sites can I build?',
    answer: 'Strikingly\'s generators cover a wide range: business websites, landing pages, portfolios, blogs, online stores, link-in-bio pages, wedding sites, restaurant sites, and many more. Each generator is tuned for a specific use case, so the output matches the conventions and best practices of that site type.',
  },
  {
    question: 'Can I customize what the generator produces?',
    answer: 'Absolutely. The generator gives you a strong starting point, but every element is editable. You can change text, swap images, adjust colors and fonts, rearrange sections, add or remove pages, and integrate third-party tools. The AI builds the foundation — you make it yours.',
  },
  {
    question: 'Do generated sites work on mobile?',
    answer: 'Every site produced by Strikingly\'s generators is fully responsive by default. The AI considers mobile layouts during generation, so your site looks great on phones, tablets, and desktops without any extra work on your part. You can fine-tune mobile-specific details in the editor if needed.',
  },
]

function SearchIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  )
}

function ArrowRightIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  )
}

function CategoryIcon({ category }) {
  const icons = {
    websites: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <rect x="4" y="6" width="24" height="18" rx="2" stroke="#8159BB" strokeWidth="2" />
        <line x1="4" y1="12" x2="28" y2="12" stroke="#8159BB" strokeWidth="2" />
        <circle cx="8" cy="9" r="1" fill="#8159BB" />
        <circle cx="12" cy="9" r="1" fill="#8159BB" />
        <circle cx="16" cy="9" r="1" fill="#8159BB" />
      </svg>
    ),
    'landing-pages': (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <rect x="6" y="4" width="20" height="24" rx="2" stroke="#8159BB" strokeWidth="2" />
        <line x1="10" y1="10" x2="22" y2="10" stroke="#8159BB" strokeWidth="2" />
        <line x1="10" y1="14" x2="18" y2="14" stroke="#8159BB" strokeWidth="2" />
        <rect x="10" y="18" width="12" height="4" rx="1" stroke="#8159BB" strokeWidth="2" />
      </svg>
    ),
    portfolios: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <rect x="4" y="8" width="10" height="10" rx="1" stroke="#8159BB" strokeWidth="2" />
        <rect x="18" y="8" width="10" height="10" rx="1" stroke="#8159BB" strokeWidth="2" />
        <rect x="4" y="22" width="10" height="6" rx="1" stroke="#8159BB" strokeWidth="2" />
        <rect x="18" y="22" width="10" height="6" rx="1" stroke="#8159BB" strokeWidth="2" />
      </svg>
    ),
    blogs: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <rect x="6" y="4" width="20" height="24" rx="2" stroke="#8159BB" strokeWidth="2" />
        <line x1="10" y1="10" x2="22" y2="10" stroke="#8159BB" strokeWidth="2" />
        <line x1="10" y1="14" x2="22" y2="14" stroke="#8159BB" strokeWidth="2" />
        <line x1="10" y1="18" x2="18" y2="18" stroke="#8159BB" strokeWidth="2" />
        <line x1="10" y1="22" x2="16" y2="22" stroke="#8159BB" strokeWidth="2" />
      </svg>
    ),
    stores: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path d="M6 10 L6 26 L26 26 L26 10" stroke="#8159BB" strokeWidth="2" />
        <path d="M4 10 L28 10" stroke="#8159BB" strokeWidth="2" />
        <path d="M10 10 L10 6 L22 6 L22 10" stroke="#8159BB" strokeWidth="2" />
        <line x1="16" y1="14" x2="16" y2="20" stroke="#8159BB" strokeWidth="2" />
        <line x1="13" y1="17" x2="19" y2="17" stroke="#8159BB" strokeWidth="2" />
      </svg>
    ),
    'link-in-bio': (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <circle cx="16" cy="16" r="10" stroke="#8159BB" strokeWidth="2" />
        <path d="M12 16 L20 16" stroke="#8159BB" strokeWidth="2" />
        <path d="M16 12 L16 20" stroke="#8159BB" strokeWidth="2" />
      </svg>
    ),
  }
  return icons[category] || icons.websites
}

function CheckIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#8159BB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}

function MobileIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#8159BB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
      <line x1="12" y1="18" x2="12" y2="18" />
    </svg>
  )
}

function ZapIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#8159BB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  )
}

function ChevronDownIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="6 9 12 15 18 9" />
    </svg>
  )
}

function App() {
  const s = strings.en
  const [searchQuery, setSearchQuery] = useState('')
  const [expandedSections, setExpandedSections] = useState({})
  const [openFaq, setOpenFaq] = useState(0)
  const [isJsEnabled, setIsJsEnabled] = useState(false)
  const allGeneratorsRef = useRef(null)

  useEffect(() => {
    setIsJsEnabled(true)
  }, [])

  const filteredGenerators = generators.filter(g => {
    if (!searchQuery.trim()) return true
    const q = searchQuery.toLowerCase()
    return g.name.toLowerCase().includes(q) || g.description.toLowerCase().includes(q) || g.category.toLowerCase().includes(q)
  })

  const getGeneratorsByCategory = (category) => {
    return filteredGenerators.filter(g => g.category === category)
  }

  const getVisibleGenerators = (category) => {
    const all = getGeneratorsByCategory(category)
    const isExpanded = expandedSections[category]
    if (isJsEnabled && !isExpanded && all.length > 6) {
      return all.slice(0, 6)
    }
    return all
  }

  const toggleSection = (category) => {
    setExpandedSections(prev => ({
      ...prev,
      [category]: !prev[category]
    }))
  }

  const clearSearch = () => {
    setSearchQuery('')
  }

  const totalVisible = filteredGenerators.length

  return (
    <div className="generators-page">
      {/* Section 0: Top bar */}
      <header className="top-bar">
        <div className="content-container">
          <a href="/" className="logo-link" aria-label="Strikingly home">
            <span className="logo-text">strikingly <span className="logo-ai">AI</span></span>
          </a>
        </div>
      </header>

      {/* Section 1: Breadcrumb */}
      <nav className="breadcrumb-nav" aria-label="Breadcrumb">
        <div className="content-container">
          <ol className="breadcrumb-list">
            <li className="breadcrumb-item">
              <a href="/">{s.breadcrumb.home}</a>
            </li>
            <li className="breadcrumb-separator" aria-hidden="true">&gt;</li>
            <li className="breadcrumb-item breadcrumb-current" aria-current="page">
              {s.breadcrumb.current}
            </li>
          </ol>
        </div>
      </nav>

      <main>
        {/* Section 2: Hero */}
        <section className="hero-section">
          <div className="content-container">
            <div className="hero-grid">
              <div className="hero-content">
                <h1 className="hero-title">
                  <span className="hero-title-line-1">{s.hero.titleLine1}</span>
                  <span className="hero-title-line-2">{s.hero.titleLine2}</span>
                </h1>
                <p className="hero-subtitle">{s.hero.subtitle}</p>
                <div className="hero-ctas">
                  <a href="/s/ai_site_builder" className="btn btn-primary btn-large">
                    {s.hero.primaryCta}
                  </a>
                  <a href="#all-generators" className="btn btn-ghost">
                    {s.hero.secondaryCta}
                  </a>
                </div>
              </div>
              <div className="hero-illustration">
                <svg width="480" height="360" viewBox="0 0 480 360" fill="none" aria-hidden="true" className="hero-svg">
                  <rect x="40" y="40" width="400" height="280" rx="8" stroke="#8159BB" strokeWidth="2" opacity="0.3" />
                  <rect x="60" y="60" width="360" height="40" rx="4" fill="#8159BB" opacity="0.1" />
                  <rect x="60" y="120" width="160" height="80" rx="4" fill="#8159BB" opacity="0.08" />
                  <rect x="240" y="120" width="180" height="80" rx="4" fill="#8159BB" opacity="0.08" />
                  <rect x="60" y="220" width="360" height="60" rx="4" fill="#8159BB" opacity="0.06" />
                  <circle cx="80" cy="80" r="8" fill="#8159BB" opacity="0.2" />
                  <circle cx="100" cy="80" r="8" fill="#8159BB" opacity="0.2" />
                  <circle cx="120" cy="80" r="8" fill="#8159BB" opacity="0.2" />
                  <line x1="80" y1="140" x2="200" y2="140" stroke="#8159BB" strokeWidth="2" opacity="0.3" />
                  <line x1="80" y1="160" x2="180" y2="160" stroke="#8159BB" strokeWidth="2" opacity="0.2" />
                  <line x1="260" y1="140" x2="400" y2="140" stroke="#8159BB" strokeWidth="2" opacity="0.3" />
                  <line x1="260" y1="160" x2="380" y2="160" stroke="#8159BB" strokeWidth="2" opacity="0.2" />
                  <line x1="80" y1="240" x2="400" y2="240" stroke="#8159BB" strokeWidth="2" opacity="0.2" />
                  <line x1="80" y1="260" x2="350" y2="260" stroke="#8159BB" strokeWidth="2" opacity="0.15" />
                </svg>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Featured Generators */}
        <section className="featured-section">
          <div className="content-container">
            <h2 className="section-heading">{s.featured.heading}</h2>
            <p className="section-subheading">{s.featured.subheading}</p>
            <div className="featured-grid">
              {featuredGenerators.map((gen, i) => (
                <a
                  key={i}
                  href={`/generators/${gen.slug}`}
                  className="featured-card"
                  aria-label={gen.name}
                >
                  <h3 className="featured-card-name">{gen.name}</h3>
                  <p className="featured-card-desc">{gen.description}</p>
                  <span className="category-tag">{gen.category}</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Section 4: Browse by Category */}
        <section className="categories-section">
          <div className="content-container">
            <h2 className="section-heading">{s.categories.heading}</h2>
            <div className="categories-grid">
              {categories.map((cat) => (
                <a
                  key={cat.slug}
                  href={`#${cat.slug}`}
                  className="category-card"
                  aria-label={`${cat.name} - ${cat.description}`}
                >
                  <div className="category-card-icon">
                    <CategoryIcon category={cat.slug} />
                  </div>
                  <h3 className="category-card-name">{cat.name}</h3>
                  <p className="category-card-desc">{cat.description}</p>
                  <div className="category-card-arrow">
                    <ArrowRightIcon />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Section 5: All Generators */}
        <section className="all-generators-section" id="all-generators" ref={allGeneratorsRef}>
          <div className="content-container">
            <h2 className="section-heading">{s.allGenerators.heading}</h2>
            <p className="section-subheading">{s.allGenerators.subheading}</p>

            <div className="search-container">
              <div className="search-input-wrapper">
                <span className="search-icon" aria-hidden="true">
                  <SearchIcon />
                </span>
                <input
                  type="search"
                  className="search-input"
                  placeholder={s.allGenerators.searchPlaceholder}
                  aria-label={s.allGenerators.searchPlaceholder}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              {searchQuery && (
                <p className="search-results-count" role="status">
                  {totalVisible} {totalVisible === 1 ? 'generator' : 'generators'} match
                </p>
              )}
            </div>

            {totalVisible === 0 && searchQuery ? (
              <div className="search-empty-state">
                <p className="empty-state-text">No generators match "{searchQuery}"</p>
                <button className="btn btn-ghost btn-small" onClick={clearSearch}>
                  Clear search
                </button>
                <p className="empty-state-cta">
                  Can't find it? <a href="/s/ai_site_builder">Start with our AI builder</a>.
                </p>
              </div>
            ) : (
              categories.map((cat) => {
                const visibleGens = getVisibleGenerators(cat.slug)
                const allGens = getGeneratorsByCategory(cat.slug)
                const isExpanded = expandedSections[cat.slug]
                const hasMore = allGens.length > 6

                if (visibleGens.length === 0 && !searchQuery) return null

                return (
                  <div key={cat.slug} id={cat.slug} className="category-subsection">
                    <h3 className="category-subsection-heading">{cat.name}</h3>
                    <p className="category-subsection-desc">{cat.description}</p>
                    <div className="generators-grid">
                      {visibleGens.map((gen, i) => (
                        <a
                          key={`${cat.slug}-${i}`}
                          href={`/generators/${gen.slug}`}
                          className="generator-card"
                          aria-label={gen.name}
                        >
                          <div className="generator-card-icon">
                            <CategoryIcon category={cat.slug} />
                          </div>
                          <h4 className="generator-card-name">{gen.name}</h4>
                          <p className="generator-card-desc">{gen.description}</p>
                        </a>
                      ))}
                    </div>
                    {isJsEnabled && hasMore && (
                      <button
                        className="btn btn-ghost btn-show-all"
                        onClick={() => toggleSection(cat.slug)}
                        aria-expanded={isExpanded}
                        aria-controls={`${cat.slug}-grid`}
                      >
                        {isExpanded ? 'Show less' : `Show all ${allGens.length} generators`}
                      </button>
                    )}
                  </div>
                )
              })
            )}
          </div>
        </section>

        {/* Section 6: How It Works */}
        <section className="how-it-works-section">
          <div className="content-container">
            <h2 className="section-heading">{s.howItWorks.heading}</h2>
            <div className="steps-grid">
              <div className="step-card">
                <div className="step-number">1</div>
                <h3 className="step-title">{s.howItWorks.step1Title}</h3>
                <p className="step-desc">{s.howItWorks.step1Desc}</p>
              </div>
              <div className="step-card">
                <div className="step-number">2</div>
                <h3 className="step-title">{s.howItWorks.step2Title}</h3>
                <p className="step-desc">{s.howItWorks.step2Desc}</p>
              </div>
              <div className="step-card">
                <div className="step-number">3</div>
                <h3 className="step-title">{s.howItWorks.step3Title}</h3>
                <p className="step-desc">{s.howItWorks.step3Desc}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 7: Why Strikingly */}
        <section className="why-section">
          <div className="content-container">
            <h2 className="section-heading">{s.why.heading}</h2>
            <div className="why-grid">
              <div className="why-card">
                <div className="why-icon"><ZapIcon /></div>
                <h3 className="why-title">{s.why.card1Title}</h3>
                <p className="why-desc">{s.why.card1Desc}</p>
              </div>
              <div className="why-card">
                <div className="why-icon"><MobileIcon /></div>
                <h3 className="why-title">{s.why.card2Title}</h3>
                <p className="why-desc">{s.why.card2Desc}</p>
              </div>
              <div className="why-card">
                <div className="why-icon"><CheckIcon /></div>
                <h3 className="why-title">{s.why.card3Title}</h3>
                <p className="why-desc">{s.why.card3Desc}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 8: FAQ */}
        <section className="faq-section">
          <div className="content-container">
            <h2 className="section-heading">{s.faq.heading}</h2>
            <div className="faq-list">
              {faqData.map((faq, i) => (
                <div key={i} className="faq-item">
                  <button
                    className="faq-button"
                    aria-expanded={openFaq === i}
                    aria-controls={`faq-answer-${i}`}
                    onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                  >
                    <span className="faq-question">{faq.question}</span>
                    <span className="faq-chevron" aria-hidden="true">
                      <ChevronDownIcon />
                    </span>
                  </button>
                  <div
                    id={`faq-answer-${i}`}
                    className="faq-answer"
                    role="region"
                    aria-labelledby={`faq-button-${i}`}
                    style={{ display: openFaq === i ? 'block' : 'none' }}
                  >
                    <p>{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 9: Closing CTA */}
        <section className="closing-cta-section">
          <div className="content-container">
            <h2 className="closing-cta-heading">{s.closing.heading}</h2>
            <p className="closing-cta-sub">{s.closing.sub}</p>
            <a href="/s/ai_site_builder" className="btn btn-primary btn-large">
              {s.closing.cta}
            </a>
          </div>
        </section>
      </main>

      {/* Section 10: Footer */}
      <footer className="footer">
        <div className="content-container">
          <div className="footer-grid">
            <div className="footer-col">
              <a href="/" className="footer-logo">strikingly</a>
            </div>
            <div className="footer-col">
              <h4 className="footer-heading">Product</h4>
              <ul className="footer-links">
                <li><a href="/pricing">Pricing</a></li>
                <li><a href="/templates">Templates</a></li>
                <li><a href="/generators">AI Generators</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4 className="footer-heading">Company</h4>
              <ul className="footer-links">
                <li><a href="/about">About</a></li>
                <li><a href="/blog">Blog</a></li>
                <li><a href="/support">Support</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4 className="footer-heading">Legal</h4>
              <ul className="footer-links">
                <li><a href="/terms">Terms</a></li>
                <li><a href="/privacy">Privacy</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Strikingly, Inc. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
