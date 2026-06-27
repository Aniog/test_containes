import { useState, useEffect } from 'react'
import './App.css'
import { strings } from './strings'

const s = strings.en

// Generator data
const featuredGenerators = [
  { name: "AI Website Generator", description: "Describe your business, get a full site", category: "Website", slug: "ai-website-generator" },
  { name: "Free Portfolio Generator", description: "For creatives, in minutes, no fee", category: "Portfolio", slug: "free-portfolio-generator" },
  { name: "AI Landing Page Maker", description: "One-page sites built to convert", category: "Landing Page", slug: "ai-landing-page-maker" },
  { name: "Online Store Builder", description: "Start selling without writing code", category: "Store", slug: "online-store-builder" },
  { name: "Link-in-Bio Generator", description: "One link for all your channels", category: "Link-in-Bio", slug: "link-in-bio-generator" },
  { name: "One-Page Website Builder", description: "Simple sites, single scroll", category: "Website", slug: "one-page-website-builder" },
  { name: "Wedding Website Generator", description: "Share your day with guests", category: "Website", slug: "wedding-website-generator" },
  { name: "Restaurant Website Builder", description: "Menu, hours, reservations, done", category: "Website", slug: "restaurant-website-builder" },
  { name: "Blog Generator for Beginners", description: "Publish-ready in minutes", category: "Blog", slug: "blog-generator-beginners" },
]

const categories = [
  { id: "websites", name: s.categoryWebsites, description: s.descWebsites, slug: "websites" },
  { id: "landing-pages", name: s.categoryLandingPages, description: s.descLandingPages, slug: "landing-pages" },
  { id: "portfolios", name: s.categoryPortfolios, description: s.descPortfolios, slug: "portfolios" },
  { id: "blogs", name: s.categoryBlogs, description: s.descBlogs, slug: "blogs" },
  { id: "stores", name: s.categoryStores, description: s.descStores, slug: "stores" },
  { id: "link-in-bio", name: s.categoryLinkInBio, description: s.descLinkInBio, slug: "link-in-bio" },
]

const allGenerators = {
  websites: [
    { name: "AI Website Generator", description: "Describe your business, get a full site", slug: "ai-website-generator" },
    { name: "Free Website Builder for Photographers", description: "Beautiful sites for visual professionals", slug: "website-builder-photographers" },
    { name: "One-Page Wedding Website Builder", description: "Share your day with guests", slug: "wedding-website-builder" },
    { name: "Restaurant Website Builder", description: "Menu, hours, reservations, done", slug: "restaurant-website-builder" },
    { name: "Yoga Instructor Website Generator", description: "Class schedules and booking built in", slug: "yoga-instructor-website" },
    { name: "No-Code Business Website Builder", description: "Professional sites without coding", slug: "nocode-business-website" },
    { name: "Beautiful Portfolio Website Generator", description: "Stunning showcases for any creative", slug: "beautiful-portfolio-website" },
    { name: "AI Website Builder for Small Business", description: "Grow your business online fast", slug: "ai-website-small-business" },
    { name: "Personal Brand Website Generator", description: "Build your online presence", slug: "personal-brand-website" },
    { name: "Nonprofit Website Builder", description: "Share your cause with the world", slug: "nonprofit-website-builder" },
  ],
  "landing-pages": [
    { name: "AI Landing Page Maker", description: "One-page sites built to convert", slug: "ai-landing-page-maker" },
    { name: "High Converting Landing Page Generator", description: "Optimized for sign-ups and sales", slug: "high-converting-landing-page" },
    { name: "Product Launch Landing Page Builder", description: "Launch your product in style", slug: "product-launch-landing-page" },
    { name: "Free Landing Page Generator", description: "No budget? No problem.", slug: "free-landing-page-generator" },
    { name: "SaaS Landing Page Generator", description: "Software and app landing pages", slug: "saas-landing-page-generator" },
    { name: "Event Registration Landing Page", description: "Collect RSVPs effortlessly", slug: "event-registration-landing-page" },
    { name: "Lead Generation Landing Page Builder", description: "Capture more leads, close more deals", slug: "lead-generation-landing-page" },
    { name: "Webinar Landing Page Generator", description: "Fill your virtual event", slug: "webinar-landing-page-generator" },
  ],
  portfolios: [
    { name: "Free Portfolio Generator", description: "For creatives, in minutes, no fee", slug: "free-portfolio-generator" },
    { name: "Portfolio Generator for Designers", description: "Showcase your design work beautifully", slug: "portfolio-generator-designers" },
    { name: "Artist Portfolio Builder", description: "Art that speaks for itself", slug: "artist-portfolio-builder" },
    { name: "Photographer Portfolio Generator", description: "Images that tell your story", slug: "photographer-portfolio-generator" },
    { name: "Writer Portfolio Website Builder", description: "Your words, your work, your way", slug: "writer-portfolio-website" },
    { name: "Freelancer Portfolio Generator", description: "Win more clients with a pro portfolio", slug: "freelancer-portfolio-generator" },
    { name: "Creative Portfolio Website Builder", description: "Stand out from the crowd", slug: "creative-portfolio-website" },
    { name: "Architecture Portfolio Generator", description: "Showcase projects beautifully", slug: "architecture-portfolio-generator" },
    { name: "Fashion Portfolio Builder", description: "Style meets functionality", slug: "fashion-portfolio-builder" },
    { name: "Music Producer Portfolio Generator", description: "Let your beats do the talking", slug: "music-producer-portfolio" },
  ],
  blogs: [
    { name: "Blog Generator for Beginners", description: "Publish-ready in minutes", slug: "blog-generator-beginners" },
    { name: "Personal Blog Builder", description: "Share your thoughts with the world", slug: "personal-blog-builder" },
    { name: "Travel Blog Generator", description: "Document your adventures beautifully", slug: "travel-blog-generator" },
    { name: "Food Blog Website Builder", description: "Recipes, photos, and stories", slug: "food-blog-website-builder" },
    { name: "Tech Blog Generator", description: "Share your tech insights", slug: "tech-blog-generator" },
    { name: "Fashion Blog Builder", description: "Style content made simple", slug: "fashion-blog-builder" },
    { name: "Lifestyle Blog Generator", description: "Living your best life online", slug: "lifestyle-blog-generator" },
    { name: "Business Blog Website Builder", description: "Thought leadership made easy", slug: "business-blog-website" },
  ],
  stores: [
    { name: "Online Store Builder", description: "Start selling without writing code", slug: "online-store-builder" },
    { name: "E-commerce Store Generator", description: "Sell products online with ease", slug: "ecommerce-store-generator" },
    { name: "Online Store Builder for Restaurants", description: "Take orders online", slug: "store-builder-restaurants" },
    { name: "Handmade Products Store Builder", description: "Sell your crafts online", slug: "handmade-products-store" },
    { name: "Digital Products Store Generator", description: "Sell downloads, courses, and more", slug: "digital-products-store" },
    { name: "Fashion Store Builder", description: "Style your online shop", slug: "fashion-store-builder" },
    { name: "Small Business Store Generator", description: "Local business, global reach", slug: "small-business-store" },
    { name: "Art Store Builder", description: "Sell your art online", slug: "art-store-builder" },
  ],
  "link-in-bio": [
    { name: "Link-in-Bio Generator", description: "One link for all your channels", slug: "link-in-bio-generator" },
    { name: "Creator Link-in-Bio Builder", description: "All your links, one place", slug: "creator-link-in-bio" },
    { name: "Influencer Link-in-Bio Generator", description: "Grow your following", slug: "influencer-link-in-bio" },
    { name: "Musician Link-in-Bio Builder", description: "Share your music everywhere", slug: "musician-link-in-bio" },
    { name: "Artist Link-in-Bio Generator", description: "Connect with your fans", slug: "artist-link-in-bio" },
    { name: "Business Link-in-Bio Page Builder", description: "Professional link page", slug: "business-link-in-bio" },
    { name: "Travel Blogger Link-in-Bio Generator", description: "Share your adventures", slug: "travel-blogger-link-in-bio" },
    { name: "Foodie Link-in-Bio Builder", description: "All your recipes in one place", slug: "foodie-link-in-bio" },
  ],
}

const sectionDescriptions = {
  websites: s.websitesSectionDesc,
  "landing-pages": s.landingPagesSectionDesc,
  portfolios: s.portfoliosSectionDesc,
  blogs: s.blogsSectionDesc,
  stores: s.storesSectionDesc,
  "link-in-bio": s.linkInBioSectionDesc,
}

const faqs = [
  { question: s.faq1Question, answer: s.faq1Answer },
  { question: s.faq2Question, answer: s.faq2Answer },
  { question: s.faq3Question, answer: s.faq3Answer },
  { question: s.faq4Question, answer: s.faq4Answer },
  { question: s.faq5Question, answer: s.faq5Answer },
  { question: s.faq6Question, answer: s.faq6Answer },
]

// Icons as inline SVG
const SearchIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.35-4.35" />
  </svg>
)

const ArrowRightIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
)

const WebsiteIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#8159BB" strokeWidth="1.5" aria-hidden="true">
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M3 9h18M9 21V9" />
  </svg>
)

const LandingIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#8159BB" strokeWidth="1.5" aria-hidden="true">
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M3 15h18M7 21V11" />
  </svg>
)

const PortfolioIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#8159BB" strokeWidth="1.5" aria-hidden="true">
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <circle cx="8.5" cy="8.5" r="1.5" />
    <path d="M21 15l-5-5L5 21" />
  </svg>
)

const BlogIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#8159BB" strokeWidth="1.5" aria-hidden="true">
    <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" />
    <path d="M18 14h-8M15 18h-5M10 6h8v4h-8z" />
  </svg>
)

const StoreIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#8159BB" strokeWidth="1.5" aria-hidden="true">
    <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
    <path d="M3 6h18M16 10a4 4 0 0 1-8 0" />
  </svg>
)

const LinkIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#8159BB" strokeWidth="1.5" aria-hidden="true">
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
  </svg>
)

const categoryIcons = {
  websites: <WebsiteIcon />,
  "landing-pages": <LandingIcon />,
  portfolios: <PortfolioIcon />,
  blogs: <BlogIcon />,
  stores: <StoreIcon />,
  "link-in-bio": <LinkIcon />,
}

function App() {
  const [searchQuery, setSearchQuery] = useState('')
  const [expandedSections, setExpandedSections] = useState({})
  const [openFaq, setOpenFaq] = useState(0)

  // Initialize all sections as expanded
  useEffect(() => {
    const initial = {}
    Object.keys(allGenerators).forEach(cat => {
      initial[cat] = true
    })
    setExpandedSections(initial)
  }, [])

  const handleSearch = (e) => {
    setSearchQuery(e.target.value)
  }

  const clearSearch = () => {
    setSearchQuery('')
  }

  const toggleSection = (category) => {
    setExpandedSections(prev => ({
      ...prev,
      [category]: !prev[category]
    }))
  }

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? -1 : index)
  }

  // Filter generators based on search
  const filterGenerators = () => {
    if (!searchQuery.trim()) return null
    
    const query = searchQuery.toLowerCase()
    const results = {}
    let totalCount = 0
    
    Object.keys(allGenerators).forEach(category => {
      const matches = allGenerators[category].filter(g => 
        g.name.toLowerCase().includes(query) ||
        g.description.toLowerCase().includes(query) ||
        category.toLowerCase().includes(query)
      )
      if (matches.length > 0) {
        results[category] = matches
        totalCount += matches.length
      }
    })
    
    return { results, totalCount }
  }

  const filterResult = filterGenerators()
  const hasSearch = searchQuery.trim() !== ''
  const resultCount = filterResult?.totalCount || 0

  return (
    <div className="generators-page">
      {/* Section 0: Top Bar */}
      <header className="top-bar">
        <a href="/" className="logo">{s.logo}</a>
      </header>

      {/* Section 1: Breadcrumb */}
      <nav className="breadcrumb" aria-label="Breadcrumb">
        <ol>
          <li><a href="/">{s.breadcrumbHome}</a></li>
          <li aria-current="page">{s.breadcrumbCurrent}</li>
        </ol>
      </nav>

      {/* Section 2: Hero */}
      <section className="hero">
        <div className="hero-content">
          <h1>
            <span className="hero-line-1">{s.heroLine1}</span>
            <span className="hero-line-2">{s.heroLine2}</span>
          </h1>
          <p className="hero-subheadline">{s.heroSubheadline}</p>
          <div className="hero-ctas">
            <a href="/s/ai_site_builder" className="btn btn-primary btn-lg">{s.ctaPrimary}</a>
            <a href="#all-generators" className="btn btn-ghost btn-lg">{s.ctaSecondary}</a>
          </div>
        </div>
        <div className="hero-illustration">
          <svg width="400" height="300" viewBox="0 0 400 300" fill="none" aria-hidden="true">
            <rect x="40" y="40" width="320" height="220" rx="8" fill="#F4F6F8" stroke="#C6C9CD" strokeWidth="2"/>
            <rect x="60" y="60" width="120" height="80" rx="4" fill="#fff" stroke="#C6C9CD" strokeWidth="1"/>
            <rect x="60" y="150" width="60" height="8" rx="2" fill="#E2E4E7"/>
            <rect x="60" y="166" width="100" height="6" rx="2" fill="#E2E4E7"/>
            <rect x="60" y="180" width="80" height="6" rx="2" fill="#E2E4E7"/>
            <rect x="200" y="60" width="140" height="8" rx="2" fill="#E2E4E7"/>
            <rect x="200" y="76" width="120" height="6" rx="2" fill="#E2E4E7"/>
            <rect x="200" y="90" width="140" height="60" rx="4" fill="#fff" stroke="#C6C9CD" strokeWidth="1"/>
            <circle cx="270" cy="120" r="15" fill="#8159BB" opacity="0.3"/>
            <rect x="200" y="160" width="140" height="8" rx="2" fill="#E2E4E7"/>
            <rect x="200" y="176" width="100" height="6" rx="2" fill="#E2E4E7"/>
            <rect x="200" y="190" width="120" height="6" rx="2" fill="#E2E4E7"/>
            <path d="M40 260 L360 260" stroke="#C6C9CD" strokeWidth="2"/>
            <circle cx="70" cy="250" r="6" fill="#8159BB"/>
            <circle cx="90" cy="250" r="6" fill="#7671FF"/>
            <circle cx="110" cy="250" r="6" fill="#CB0C9F"/>
          </svg>
        </div>
      </section>

      {/* Section 3: Featured Generators */}
      <section className="featured">
        <h2>{s.featuredTitle}</h2>
        <p className="section-subtitle">{s.featuredSubtitle}</p>
        <div className="featured-grid">
          {featuredGenerators.map((gen, idx) => (
            <a key={idx} href={`/generators/${gen.slug}`} className="card featured-card">
              <span className="category-tag">{gen.category}</span>
              <h3>{gen.name}</h3>
              <p>{gen.description}</p>
            </a>
          ))}
        </div>
      </section>

      {/* Section 4: Browse by Category */}
      <section className="browse-categories">
        <h2>{s.browseTitle}</h2>
        <div className="category-grid">
          {categories.map((cat) => (
            <a key={cat.id} href={`#${cat.id}`} className="card category-card">
              <div className="category-icon">{categoryIcons[cat.id]}</div>
              <h3>{cat.name}</h3>
              <p>{cat.description}</p>
              <ArrowRightIcon />
            </a>
          ))}
        </div>
      </section>

      {/* Section 5: All Generators */}
      <section id="all-generators" className="all-generators">
        <h2>{s.allGeneratorsTitle}</h2>
        <p className="section-subtitle">{s.allGeneratorsSubtitle}</p>
        
        {/* Search */}
        <div className="search-container">
          <div className="search-input-wrapper">
            <SearchIcon />
            <input
              type="search"
              className="search-input"
              placeholder={s.searchPlaceholder}
              aria-label={s.searchAriaLabel}
              value={searchQuery}
              onChange={handleSearch}
            />
          </div>
          {hasSearch && (
            <span className="result-count">
              {s.resultCount.replace('{count}', resultCount)}
            </span>
          )}
        </div>

        {hasSearch && resultCount === 0 && (
          <div className="no-results">
            <p>{s.noResults}</p>
            <button className="btn btn-ghost" onClick={clearSearch}>{s.clearSearch}</button>
            <p className="cant-find">
              {s.cantFindIt} <a href="/s/ai_site_builder">{s.startWithBuilder}</a>
            </p>
          </div>
        )}

        {/* Category subsections */}
        {!hasSearch || resultCount > 0 ? (
          <div className="generator-sections">
            {categories.map((cat) => {
              const generators = hasSearch 
                ? (filterResult?.results[cat.id] || [])
                : allGenerators[cat.id]
              
              if (generators.length === 0) return null

              const isExpanded = expandedSections[cat.id]
              const totalCount = allGenerators[cat.id].length
              const hasMore = totalCount > 6
              const visibleGenerators = isExpanded ? generators : generators.slice(0, 6)

              return (
                <div key={cat.id} id={cat.id} className="generator-subsection">
                  <h3>{cat.name}</h3>
                  <p className="subsection-desc">{sectionDescriptions[cat.id]}</p>
                  <div className="generator-grid">
                    {visibleGenerators.map((gen, idx) => (
                      <a key={idx} href={`/generators/${gen.slug}`} className="card generator-card">
                        <div className="card-icon">{categoryIcons[cat.id]}</div>
                        <h4>{gen.name}</h4>
                        <p>{gen.description}</p>
                      </a>
                    ))}
                  </div>
                  {hasMore && !hasSearch && (
                    <button 
                      className="show-all-btn"
                      aria-expanded={isExpanded}
                      aria-controls={`${cat.id}-generators`}
                      onClick={() => toggleSection(cat.id)}
                    >
                      {isExpanded 
                        ? s.showLess.replace('{count}', totalCount)
                        : s.showAll.replace('{count}', totalCount)
                      }
                    </button>
                  )}
                </div>
              )
            })}
          </div>
        ) : null}
      </section>

      {/* Section 6: How It Works */}
      <section className="how-it-works">
        <h2>{s.howItWorksTitle}</h2>
        <div className="steps">
          <div className="step">
            <div className="step-number">1</div>
            <h3>{s.step1Title}</h3>
            <p>{s.step1Desc}</p>
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <h3>{s.step2Title}</h3>
            <p>{s.step2Desc}</p>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <h3>{s.step3Title}</h3>
            <p>{s.step3Desc}</p>
          </div>
        </div>
      </section>

      {/* Section 7: Why Strikingly */}
      <section className="why-strikingly">
        <h2>{s.whyTitle}</h2>
        <div className="why-grid">
          <div className="why-item">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#8159BB" strokeWidth="1.5" aria-hidden="true">
              <circle cx="12" cy="12" r="10"/>
              <polyline points="12 6 12 12 16 14"/>
            </svg>
            <h3>{s.why1Title}</h3>
            <p>{s.why1Desc}</p>
          </div>
          <div className="why-item">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#8159BB" strokeWidth="1.5" aria-hidden="true">
              <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
              <line x1="12" y1="18" x2="12.01" y2="18"/>
            </svg>
            <h3>{s.why2Title}</h3>
            <p>{s.why2Desc}</p>
          </div>
          <div className="why-item">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#8159BB" strokeWidth="1.5" aria-hidden="true">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            </svg>
            <h3>{s.why3Title}</h3>
            <p>{s.why3Desc}</p>
          </div>
        </div>
      </section>

      {/* Section 8: FAQ */}
      <section className="faq">
        <h2>{s.faqTitle}</h2>
        <div className="faq-list">
          {faqs.map((faq, idx) => (
            <div key={idx} className={`faq-item ${openFaq === idx ? 'open' : ''}`}>
              <button
                className="faq-question"
                aria-expanded={openFaq === idx}
                aria-controls={`faq-answer-${idx}`}
                onClick={() => toggleFaq(idx)}
              >
                {faq.question}
                <span className="faq-icon">{openFaq === idx ? '−' : '+'}</span>
              </button>
              <div id={`faq-answer-${idx}`} className="faq-answer" hidden={openFaq !== idx}>
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 9: Closing CTA */}
      <section className="closing-cta">
        <h2>{s.closingTitle}</h2>
        <p>{s.closingSubtitle}</p>
        <a href="/s/ai_site_builder" className="btn btn-primary btn-lg">{s.closingCta}</a>
      </section>

      {/* Section 10: Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-col">
            <span className="footer-logo">Strikingly</span>
          </div>
          <div className="footer-col">
            <a href="/about">{s.footerAbout}</a>
            <a href="/pricing">{s.footerPricing}</a>
            <a href="/templates">{s.footerTemplates}</a>
          </div>
          <div className="footer-col">
            <a href="/support">{s.footerSupport}</a>
            <a href="/blog">{s.footerBlog}</a>
          </div>
          <div className="footer-col">
            <a href="/terms">{s.footerTerms}</a>
            <a href="/privacy">{s.footerPrivacy}</a>
          </div>
        </div>
        <p className="footer-copyright">{s.footerCopyright}</p>
      </footer>
    </div>
  )
}

export default App
