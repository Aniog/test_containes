import { useState, useEffect, useRef, useCallback } from 'react'
import './App.css'
import { strings } from './data/strings'
import { generators, featuredGenerators, categories } from './data/generators'

// SVG Icons as components
const SearchIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.3-4.3" />
  </svg>
)

const ArrowRightIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
)

const ChevronDownIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="m6 9 6 6 6-6" />
  </svg>
)

const CheckIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M20 6 9 17l-5-5" />
  </svg>
)

const GlobeIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="10" />
    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
    <path d="M2 12h20" />
  </svg>
)

const LayoutIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect width="18" height="18" x="3" y="3" rx="2" />
    <path d="M3 9h18" />
    <path d="M9 21V9" />
  </svg>
)

const ImageIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
    <circle cx="9" cy="9" r="2" />
    <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
  </svg>
)

const FileTextIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
    <path d="M14 2v4a2 2 0 0 0 2 2h4" />
    <path d="M10 9H8" />
    <path d="M16 13H8" />
    <path d="M16 17H8" />
  </svg>
)

const ShoppingCartIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="8" cy="21" r="1" />
    <circle cx="19" cy="21" r="1" />
    <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
  </svg>
)

const LinkIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
  </svg>
)

const categoryIcons = {
  'websites': <GlobeIcon />,
  'landing-pages': <LayoutIcon />,
  'portfolios': <ImageIcon />,
  'blogs': <FileTextIcon />,
  'stores': <ShoppingCartIcon />,
  'link-in-bio': <LinkIcon />,
}

// Hero Illustration SVG
const HeroIllustration = () => (
  <svg width="400" height="300" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect x="40" y="40" width="320" height="220" rx="8" stroke="#8159BB" strokeWidth="2" fill="none" />
    <rect x="40" y="40" width="320" height="40" rx="8" fill="#F4F6F8" stroke="#8159BB" strokeWidth="2" />
    <circle cx="65" cy="60" r="6" fill="#8159BB" opacity="0.6" />
    <circle cx="85" cy="60" r="6" fill="#8159BB" opacity="0.4" />
    <circle cx="105" cy="60" r="6" fill="#8159BB" opacity="0.2" />
    <rect x="60" y="100" width="120" height="8" rx="4" fill="#8159BB" opacity="0.3" />
    <rect x="60" y="120" width="200" height="6" rx="3" fill="#8159BB" opacity="0.15" />
    <rect x="60" y="135" width="180" height="6" rx="3" fill="#8159BB" opacity="0.15" />
    <rect x="60" y="160" width="80" height="30" rx="4" fill="#8159BB" opacity="0.2" />
    <rect x="200" y="100" width="140" height="90" rx="4" fill="#8159BB" opacity="0.1" />
    <rect x="60" y="210" width="280" height="6" rx="3" fill="#8159BB" opacity="0.1" />
    <rect x="60" y="225" width="240" height="6" rx="3" fill="#8159BB" opacity="0.1" />
  </svg>
)

// Category icon for cards
const CategoryIcon = ({ category }) => {
  const icon = categoryIcons[category]
  return (
    <div className="category-icon-wrapper" aria-hidden="true">
      {icon}
    </div>
  )
}

function App() {
  const s = strings.en
  const [searchQuery, setSearchQuery] = useState('')
  const [expandedSections, setExpandedSections] = useState({})
  const [openFaq, setOpenFaq] = useState(0)
  const searchInputRef = useRef(null)
  const containerRef = useRef(null)

  // Group generators by category
  const generatorsByCategory = useCallback(() => {
    const grouped = {}
    categories.forEach(cat => {
      grouped[cat.id] = generators.filter(g => g.category === cat.id)
    })
    return grouped
  }, [])

  // Search filter
  const filteredGenerators = useCallback(() => {
    if (!searchQuery.trim()) return null
    
    const query = searchQuery.toLowerCase().trim()
    const grouped = {}
    
    categories.forEach(cat => {
      const matches = generators.filter(g => 
        g.category === cat.id && (
          g.name.toLowerCase().includes(query) ||
          g.description.toLowerCase().includes(query) ||
          cat.name.toLowerCase().includes(query)
        )
      )
      if (matches.length > 0) {
        grouped[cat.id] = matches
      }
    })
    
    return grouped
  }, [searchQuery])

  const filtered = filteredGenerators()
  const grouped = generatorsByCategory()

  // Count total visible generators
  const totalVisible = filtered 
    ? Object.values(filtered).reduce((sum, arr) => sum + arr.length, 0)
    : generators.length

  // Toggle section expansion
  const toggleSection = (categoryId) => {
    setExpandedSections(prev => ({
      ...prev,
      [categoryId]: !prev[categoryId]
    }))
  }

  // Toggle FAQ
  const toggleFaq = (index) => {
    setOpenFaq(prev => prev === index ? -1 : index)
  }

  // Clear search
  const clearSearch = () => {
    setSearchQuery('')
    if (searchInputRef.current) {
      searchInputRef.current.focus()
    }
  }

  // Show all generators count per category
  const SHOW_INITIAL = 6

  return (
    <div className="generators-page" ref={containerRef}>
      {/* Section 0: Top Bar */}
      <header className="top-bar">
        <div className="container">
          <a href="/" className="logo" aria-label="Strikingly AI Home">
            <span className="logo-text">{s.logo}</span>
          </a>
        </div>
      </header>

      {/* Section 1: Breadcrumb */}
      <nav className="breadcrumb-nav" aria-label="Breadcrumb">
        <div className="container">
          <ol className="breadcrumb-list" itemScope itemType="https://schema.org/BreadcrumbList">
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <a href="/" itemProp="item">
                <span itemProp="name">{s.breadcrumbHome}</span>
              </a>
              <meta itemProp="position" content="1" />
            </li>
            <li className="breadcrumb-separator" aria-hidden="true">&gt;</li>
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <span itemProp="name">{s.breadcrumbCurrent}</span>
              <meta itemProp="position" content="2" />
            </li>
          </ol>
        </div>
      </nav>

      <main>
        {/* Section 2: Hero */}
        <section className="hero-section">
          <div className="container">
            <div className="hero-grid">
              <div className="hero-content">
                <h1 className="hero-h1">
                  <span className="hero-h1-line1">{s.heroH1Line1}</span>
                  <span className="hero-h1-line2">{s.heroH1Line2}</span>
                </h1>
                <p className="hero-subheadline">{s.heroSubheadline}</p>
                <div className="hero-ctas">
                  <a href="/s/ai_site_builder" className="btn btn-primary btn-large">
                    {s.heroCtaPrimary}
                  </a>
                  <a href="#all-generators" className="btn btn-ghost">
                    {s.heroCtaSecondary}
                  </a>
                </div>
              </div>
              <div className="hero-illustration">
                <HeroIllustration />
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Featured Generators */}
        <section className="featured-section">
          <div className="container">
            <h2 className="section-heading">{s.featuredHeading}</h2>
            <p className="section-subheading">{s.featuredSubheading}</p>
            <div className="featured-grid">
              {featuredGenerators.map(gen => (
                <a 
                  key={gen.id}
                  href={`/generators/${gen.slug}`}
                  className="featured-card"
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
        <section className="browse-section">
          <div className="container">
            <h2 className="section-heading">{s.browseHeading}</h2>
            <div className="browse-grid">
              {categories.map(cat => (
                <a 
                  key={cat.id}
                  href={`#${cat.slug}`}
                  className="browse-card"
                >
                  <CategoryIcon category={cat.id} />
                  <h3 className="browse-card-name">{cat.name}</h3>
                  <p className="browse-card-desc">{cat.description}</p>
                  <ArrowRightIcon />
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Section 5: All Generators */}
        <section className="all-generators-section" id="all-generators">
          <div className="container">
            <h2 className="section-heading">{s.allGeneratorsHeading}</h2>
            <p className="section-subheading">{s.allGeneratorsSubheading}</p>
            
            {/* Search */}
            <div className="search-wrapper">
              <div className="search-input-wrapper">
                <SearchIcon />
                <input
                  ref={searchInputRef}
                  type="search"
                  className="search-input"
                  placeholder={s.searchPlaceholder}
                  aria-label={s.searchLabel}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                {searchQuery && (
                  <button 
                    className="search-clear-btn" 
                    onClick={clearSearch}
                    aria-label={s.clearSearch}
                  >
                    ×
                  </button>
                )}
              </div>
              <div className="search-results-count">
                {s.searchResultsCount(totalVisible)}
              </div>
            </div>

            {/* No results state */}
            {totalVisible === 0 && searchQuery && (
              <div className="no-results-state">
                <h3>{s.noResultsTitle}</h3>
                <p>{s.noResultsText}</p>
                <div className="no-results-actions">
                  <button className="btn btn-ghost" onClick={clearSearch}>
                    {s.clearSearch}
                  </button>
                  <a href="/s/ai_site_builder" className="btn btn-primary">
                    {s.noResultsCta}
                  </a>
                </div>
              </div>
            )}

            {/* Category subsections */}
            {categories.map(cat => {
              const catGenerators = filtered ? (filtered[cat.id] || []) : (grouped[cat.id] || [])
              if (catGenerators.length === 0) return null
              
              const isExpanded = expandedSections[cat.id] || false
              const visibleGenerators = isExpanded ? catGenerators : catGenerators.slice(0, SHOW_INITIAL)
              const hasMore = catGenerators.length > SHOW_INITIAL

              return (
                <div key={cat.id} className="category-subsection" id={cat.slug}>
                  <h3 className="category-heading">{cat.name}</h3>
                  <p className="category-description">{cat.description}</p>
                  <div className="generators-grid">
                    {visibleGenerators.map(gen => (
                      <a 
                        key={gen.id}
                        href={`/generators/${gen.slug}`}
                        className="generator-card"
                      >
                        <CategoryIcon category={cat.id} />
                        <h4 className="generator-card-name">{gen.name}</h4>
                        <p className="generator-card-desc">{gen.description}</p>
                      </a>
                    ))}
                  </div>
                  {hasMore && (
                    <button
                      className="show-all-btn"
                      onClick={() => toggleSection(cat.id)}
                      aria-expanded={isExpanded}
                      aria-controls={`${cat.id}-grid`}
                    >
                      {isExpanded ? s.showLess : s.showAll(catGenerators.length)}
                    </button>
                  )}
                </div>
              )
            })}
          </div>
        </section>

        {/* Section 6: How It Works */}
        <section className="how-it-works-section">
          <div className="container">
            <h2 className="section-heading">{s.howItWorksHeading}</h2>
            <div className="steps-grid">
              <div className="step-card">
                <div className="step-number">1</div>
                <h3 className="step-title">{s.step1Title}</h3>
                <p className="step-desc">{s.step1Desc}</p>
              </div>
              <div className="step-card">
                <div className="step-number">2</div>
                <h3 className="step-title">{s.step2Title}</h3>
                <p className="step-desc">{s.step2Desc}</p>
              </div>
              <div className="step-card">
                <div className="step-number">3</div>
                <h3 className="step-title">{s.step3Title}</h3>
                <p className="step-desc">{s.step3Desc}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 7: Why Strikingly */}
        <section className="why-section">
          <div className="container">
            <h2 className="section-heading">{s.whyHeading}</h2>
            <div className="why-grid">
              <div className="why-card">
                <div className="why-icon"><CheckIcon /></div>
                <h3 className="why-title">{s.why1Title}</h3>
                <p className="why-desc">{s.why1Desc}</p>
              </div>
              <div className="why-card">
                <div className="why-icon"><CheckIcon /></div>
                <h3 className="why-title">{s.why2Title}</h3>
                <p className="why-desc">{s.why2Desc}</p>
              </div>
              <div className="why-card">
                <div className="why-icon"><CheckIcon /></div>
                <h3 className="why-title">{s.why3Title}</h3>
                <p className="why-desc">{s.why3Desc}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 8: FAQ */}
        <section className="faq-section">
          <div className="container">
            <h2 className="section-heading">{s.faqHeading}</h2>
            <div className="faq-list">
              {[
                { q: s.faq1Q, a: s.faq1A },
                { q: s.faq2Q, a: s.faq2A },
                { q: s.faq3Q, a: s.faq3A },
                { q: s.faq4Q, a: s.faq4A },
                { q: s.faq5Q, a: s.faq5A },
                { q: s.faq6Q, a: s.faq6A },
              ].map((faq, index) => (
                <div key={index} className="faq-item">
                  <button
                    className="faq-question"
                    onClick={() => toggleFaq(index)}
                    aria-expanded={openFaq === index}
                    aria-controls={`faq-answer-${index}`}
                  >
                    <span>{faq.q}</span>
                    <ChevronDownIcon />
                  </button>
                  <div 
                    id={`faq-answer-${index}`}
                    className={`faq-answer ${openFaq === index ? 'faq-answer-open' : ''}`}
                    role="region"
                  >
                    <p>{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 9: Closing CTA */}
        <section className="closing-section">
          <div className="container">
            <h2 className="closing-heading">{s.closingHeading}</h2>
            <p className="closing-sub">{s.closingSub}</p>
            <a href="/s/ai_site_builder" className="btn btn-primary btn-large">
              {s.closingCta}
            </a>
          </div>
        </section>
      </main>

      {/* Section 10: Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-col">
              <h4>{s.footerProduct}</h4>
              <ul>
                <li><a href="/features">{s.footerFeatures}</a></li>
                <li><a href="/templates">{s.footerTemplates}</a></li>
                <li><a href="/pricing">{s.footerPricing}</a></li>
                <li><a href="/s/ai_site_builder">{s.footerAiBuilder}</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>{s.footerCompany}</h4>
              <ul>
                <li><a href="/about">{s.footerAbout}</a></li>
                <li><a href="/blog">{s.footerBlog}</a></li>
                <li><a href="/careers">{s.footerCareers}</a></li>
                <li><a href="/press">{s.footerPress}</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>{s.footerSupport}</h4>
              <ul>
                <li><a href="/support">{s.footerHelpCenter}</a></li>
                <li><a href="/contact">{s.footerContact}</a></li>
                <li><a href="/community">{s.footerCommunity}</a></li>
                <li><a href="/status">{s.footerStatus}</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>{s.footerLegal}</h4>
              <ul>
                <li><a href="/terms">{s.footerTerms}</a></li>
                <li><a href="/privacy">{s.footerPrivacy}</a></li>
                <li><a href="/cookies">{s.footerCookie}</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>{s.footerCopyright(new Date().getFullYear())}</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
