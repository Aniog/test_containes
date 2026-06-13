import { useState, useEffect, useRef, useCallback } from 'react'
import { strings } from './strings'
import { featuredGenerators, allGenerators } from './data'
import './App.css'

const s = strings.en

// SVG Icons
const SearchIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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

const ChevronDownIcon = ({ expanded }) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"
    style={{ transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }}>
    <path d="m6 9 6 6 6-6" />
  </svg>
)

// Category illustrations (simple SVG placeholders)
const CategoryIllustration = ({ category }) => {
  const illustrations = {
    websites: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <rect x="4" y="6" width="32" height="24" rx="2" stroke="#8159BB" strokeWidth="2" />
        <path d="M4 12h32" stroke="#8159BB" strokeWidth="2" />
        <circle cx="8" cy="9" r="1" fill="#8159BB" />
        <circle cx="12" cy="9" r="1" fill="#8159BB" />
        <circle cx="16" cy="9" r="1" fill="#8159BB" />
        <rect x="8" y="16" width="10" height="2" rx="1" fill="#8159BB" opacity="0.5" />
        <rect x="8" y="20" width="24" height="1" rx="0.5" fill="#8159BB" opacity="0.3" />
        <rect x="8" y="23" width="18" height="1" rx="0.5" fill="#8159BB" opacity="0.3" />
      </svg>
    ),
    'landing-pages': (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <rect x="6" y="4" width="28" height="32" rx="2" stroke="#8159BB" strokeWidth="2" />
        <rect x="10" y="10" width="20" height="4" rx="1" fill="#8159BB" opacity="0.6" />
        <rect x="10" y="18" width="14" height="2" rx="1" fill="#8159BB" opacity="0.4" />
        <rect x="10" y="22" width="10" height="2" rx="1" fill="#8159BB" opacity="0.4" />
        <rect x="10" y="28" width="8" height="4" rx="2" fill="#8159BB" />
      </svg>
    ),
    portfolios: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <rect x="4" y="8" width="14" height="14" rx="2" stroke="#8159BB" strokeWidth="2" />
        <rect x="22" y="8" width="14" height="14" rx="2" stroke="#8159BB" strokeWidth="2" />
        <rect x="4" y="26" width="14" height="10" rx="2" stroke="#8159BB" strokeWidth="2" />
        <rect x="22" y="26" width="14" height="10" rx="2" stroke="#8159BB" strokeWidth="2" />
        <circle cx="11" cy="15" r="3" fill="#8159BB" opacity="0.3" />
        <circle cx="29" cy="15" r="3" fill="#8159BB" opacity="0.3" />
      </svg>
    ),
    blogs: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <rect x="8" y="4" width="24" height="32" rx="2" stroke="#8159BB" strokeWidth="2" />
        <rect x="12" y="10" width="16" height="2" rx="1" fill="#8159BB" opacity="0.6" />
        <rect x="12" y="15" width="12" height="1" rx="0.5" fill="#8159BB" opacity="0.4" />
        <rect x="12" y="18" width="14" height="1" rx="0.5" fill="#8159BB" opacity="0.4" />
        <rect x="12" y="21" width="10" height="1" rx="0.5" fill="#8159BB" opacity="0.4" />
        <rect x="12" y="26" width="16" height="1" rx="0.5" fill="#8159BB" opacity="0.4" />
        <rect x="12" y="29" width="12" height="1" rx="0.5" fill="#8159BB" opacity="0.4" />
      </svg>
    ),
    stores: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <path d="M6 14h28l-3 18H9L6 14z" stroke="#8159BB" strokeWidth="2" />
        <path d="M14 14V10a6 6 0 0 1 12 0v4" stroke="#8159BB" strokeWidth="2" />
        <circle cx="16" cy="24" r="2" fill="#8159BB" opacity="0.5" />
        <circle cx="24" cy="24" r="2" fill="#8159BB" opacity="0.5" />
      </svg>
    ),
    'link-in-bio': (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <rect x="12" y="4" width="16" height="32" rx="4" stroke="#8159BB" strokeWidth="2" />
        <rect x="16" y="10" width="8" height="2" rx="1" fill="#8159BB" opacity="0.6" />
        <rect x="16" y="15" width="8" height="2" rx="1" fill="#8159BB" opacity="0.6" />
        <rect x="16" y="20" width="8" height="2" rx="1" fill="#8159BB" opacity="0.6" />
        <rect x="16" y="25" width="8" height="2" rx="1" fill="#8159BB" opacity="0.6" />
        <circle cx="20" cy="32" r="1.5" fill="#8159BB" />
      </svg>
    ),
  }
  return illustrations[category] || illustrations.websites
}

// Hero illustration
const HeroIllustration = () => (
  <svg width="400" height="300" viewBox="0 0 400 300" fill="none" aria-hidden="true" style={{ width: '100%', maxWidth: '400px', height: 'auto' }}>
    <rect x="40" y="40" width="320" height="220" rx="8" stroke="#8159BB" strokeWidth="2" opacity="0.3" />
    <rect x="40" y="40" width="320" height="30" rx="8" fill="#8159BB" opacity="0.05" />
    <circle cx="60" cy="55" r="4" fill="#8159BB" opacity="0.4" />
    <circle cx="75" cy="55" r="4" fill="#8159BB" opacity="0.4" />
    <circle cx="90" cy="55" r="4" fill="#8159BB" opacity="0.4" />
    <rect x="60" y="90" width="120" height="8" rx="4" fill="#8159BB" opacity="0.2" />
    <rect x="60" y="110" width="200" height="4" rx="2" fill="#8159BB" opacity="0.1" />
    <rect x="60" y="120" width="160" height="4" rx="2" fill="#8159BB" opacity="0.1" />
    <rect x="60" y="140" width="80" height="24" rx="4" fill="#8159BB" opacity="0.15" />
    <rect x="220" y="90" width="120" height="80" rx="4" fill="#8159BB" opacity="0.08" />
    <rect x="60" y="180" width="280" height="4" rx="2" fill="#8159BB" opacity="0.1" />
    <rect x="60" y="190" width="240" height="4" rx="2" fill="#8159BB" opacity="0.1" />
    <rect x="60" y="200" width="200" height="4" rx="2" fill="#8159BB" opacity="0.1" />
    <path d="M100 240 L140 220 L180 235 L220 210 L260 225 L300 215" stroke="#8159BB" strokeWidth="2" opacity="0.3" />
  </svg>
)

// Category thumbnail for directory cards
const CategoryThumbnail = ({ category }) => (
  <div style={{ width: '40px', height: '40px', marginBottom: '10px' }}>
    <CategoryIllustration category={category} />
  </div>
)

function App() {
  const [searchQuery, setSearchQuery] = useState('')
  const [expandedSections, setExpandedSections] = useState({})
  const [expandedFaqs, setExpandedFaqs] = useState({ 0: true })
  const [isClient, setIsClient] = useState(false)
  const searchInputRef = useRef(null)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const normalize = (str) => str.toLowerCase().trim()

  const filteredGenerators = useCallback(() => {
    if (!searchQuery.trim()) return allGenerators

    const query = normalize(searchQuery)
    const result = {}

    for (const [key, section] of Object.entries(allGenerators)) {
      const matchingItems = section.items.filter(item =>
        normalize(item.name).includes(query) ||
        normalize(item.description).includes(query) ||
        normalize(section.heading).includes(query)
      )
      if (matchingItems.length > 0) {
        result[key] = { ...section, items: matchingItems }
      }
    }

    return result
  }, [searchQuery])

  const filteredData = filteredGenerators()
  const totalMatchCount = Object.values(filteredData).reduce((sum, section) => sum + section.items.length, 0)

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value)
  }

  const clearSearch = () => {
    setSearchQuery('')
    if (searchInputRef.current) searchInputRef.current.focus()
  }

  const toggleSection = (sectionKey) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionKey]: !prev[sectionKey]
    }))
  }

  const toggleFaq = (index) => {
    setExpandedFaqs(prev => ({
      ...prev,
      [index]: !prev[index]
    }))
  }

  const INITIAL_VISIBLE = 6

  return (
    <div className="generators-page">
      {/* Section 0: Top bar */}
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
          <ol className="breadcrumb-list">
            <li className="breadcrumb-item">
              <a href="/">Strikingly</a>
            </li>
            <li className="breadcrumb-separator" aria-hidden="true">&gt;</li>
            <li className="breadcrumb-item breadcrumb-current" aria-current="page">
              AI Generators
            </li>
          </ol>
        </div>
      </nav>

      <main>
        {/* Section 2: Hero */}
        <section className="hero-section">
          <div className="container hero-container">
            <div className="hero-content">
              <h1 className="hero-h1">
                <span className="hero-h1-line1">{s.heroH1Line1}</span>
                <span className="hero-h1-line2">{s.heroH1Line2}</span>
              </h1>
              <p className="hero-subheadline">{s.heroSubheadline}</p>
              <div className="hero-ctas">
                <a href="/s/ai_site_builder" className="btn btn-primary btn-lg">
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
        </section>

        {/* Section 3: Featured Generators */}
        <section className="featured-section">
          <div className="container">
            <h2 className="section-heading">{s.featuredHeading}</h2>
            <p className="section-subheading">{s.featuredSubheading}</p>
            <div className="featured-grid">
              {featuredGenerators.map((gen) => (
                <a
                  key={gen.slug}
                  href={`/generators/${gen.slug}`}
                  className="featured-card"
                >
                  <span className="featured-name">{gen.name}</span>
                  <span className="featured-desc">{gen.description}</span>
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
              {s.categories.map((cat) => (
                <a
                  key={cat.slug}
                  href={`#all-generators-${cat.slug}`}
                  className="browse-card"
                >
                  <div className="browse-card-icon">
                    <CategoryIllustration category={cat.slug} />
                  </div>
                  <span className="browse-card-name">{cat.name}</span>
                  <span className="browse-card-desc">{cat.description}</span>
                  <span className="browse-card-arrow">
                    <ArrowRightIcon />
                  </span>
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
            <div className="search-container">
              <div className="search-input-wrapper">
                <span className="search-icon" aria-hidden="true">
                  <SearchIcon />
                </span>
                <input
                  ref={searchInputRef}
                  type="search"
                  className="search-input"
                  placeholder={s.searchPlaceholder}
                  aria-label={s.searchLabel}
                  value={searchQuery}
                  onChange={handleSearchChange}
                />
              </div>
              {searchQuery && (
                <div className="search-results-info">
                  <span>{s.resultsCount(totalMatchCount)}</span>
                </div>
              )}
            </div>

            {/* No results */}
            {totalMatchCount === 0 && searchQuery && (
              <div className="no-results">
                <h3 className="no-results-title">{s.noResultsTitle}</h3>
                <p>{s.noResultsText}</p>
                <div className="no-results-actions">
                  <button type="button" className="btn btn-ghost btn-sm" onClick={clearSearch}>
                    {s.clearSearch}
                  </button>
                  <a href="/s/ai_site_builder" className="btn btn-primary btn-sm">
                    {s.noResultsCta}
                  </a>
                </div>
              </div>
            )}

            {/* Category subsections */}
            {Object.entries(filteredData).map(([key, section]) => {
              const isExpanded = isClient ? (expandedSections[key] === true) : true
              const visibleItems = isExpanded ? section.items : section.items.slice(0, INITIAL_VISIBLE)
              const hasMore = section.items.length > INITIAL_VISIBLE

              return (
                <div key={key} className="generator-subsection" id={`all-generators-${key}`}>
                  <h3 className="subsection-heading">{section.heading}</h3>
                  <p className="subsection-description">{section.description}</p>
                  <div className="generator-grid" id={`grid-${key}`}>
                    {visibleItems.map((item) => (
                      <a
                        key={item.slug}
                        href={`/generators/${item.slug}`}
                        className="generator-card"
                      >
                        <CategoryThumbnail category={key} />
                        <span className="generator-name">{item.name}</span>
                        <span className="generator-desc">{item.description}</span>
                      </a>
                    ))}
                  </div>
                  {hasMore && isClient && (
                    <button
                      type="button"
                      className="btn btn-ghost show-all-btn"
                      onClick={() => toggleSection(key)}
                      aria-expanded={isExpanded}
                      aria-controls={`grid-${key}`}
                    >
                      {isExpanded ? s.showLess : s.showAll(section.items.length)}
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
              {s.steps.map((step) => (
                <div key={step.number} className="step-card">
                  <div className="step-number">{step.number}</div>
                  <h3 className="step-title">{step.title}</h3>
                  <p className="step-description">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 7: Why Strikingly */}
        <section className="why-section">
          <div className="container">
            <h2 className="section-heading">{s.whyHeading}</h2>
            <div className="why-grid">
              {s.whyItems.map((item, idx) => (
                <div key={idx} className="why-card">
                  <div className="why-icon">
                    {idx === 0 && (
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#8159BB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                      </svg>
                    )}
                    {idx === 1 && (
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#8159BB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                        <path d="M12 18h.01" />
                      </svg>
                    )}
                    {idx === 2 && (
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#8159BB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                      </svg>
                    )}
                  </div>
                  <h3 className="why-title">{item.title}</h3>
                  <p className="why-description">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 8: FAQ */}
        <section className="faq-section">
          <div className="container">
            <h2 className="section-heading">{s.faqHeading}</h2>
            <div className="faq-list">
              {s.faqItems.map((item, idx) => {
                const isExpanded = expandedFaqs[idx]
                return (
                  <div key={idx} className="faq-item">
                    <button
                      type="button"
                      className="faq-question"
                      onClick={() => toggleFaq(idx)}
                      aria-expanded={isExpanded}
                      aria-controls={`faq-answer-${idx}`}
                    >
                      <span>{item.question}</span>
                      <ChevronDownIcon expanded={isExpanded} />
                    </button>
                    <div
                      id={`faq-answer-${idx}`}
                      className="faq-answer"
                      role="region"
                      style={{
                        maxHeight: isExpanded ? '500px' : '0',
                        opacity: isExpanded ? 1 : 0,
                        overflow: 'hidden',
                        transition: 'max-height 0.3s ease, opacity 0.2s ease',
                      }}
                    >
                      {item.answer.split('\n\n').map((para, pIdx) => (
                        <p key={pIdx}>{para}</p>
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Section 9: Closing CTA */}
        <section className="closing-section">
          <div className="container closing-container">
            <h2 className="closing-heading">{s.closingHeading}</h2>
            <p className="closing-sub">{s.closingSub}</p>
            <a href="/s/ai_site_builder" className="btn btn-primary btn-lg">
              {s.closingCta}
            </a>
          </div>
        </section>
      </main>

      {/* Section 10: Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-top">
            <a href="/" className="footer-logo" aria-label="Strikingly Home">
              <span className="logo-text">{s.logo}</span>
            </a>
            <div className="footer-columns">
              <div className="footer-column">
                <h4>{s.footerProduct}</h4>
                <ul>
                  <li><a href="/pricing">Pricing</a></li>
                  <li><a href="/templates">Templates</a></li>
                  <li><a href="/generators">AI Generators</a></li>
                </ul>
              </div>
              <div className="footer-column">
                <h4>{s.footerCompany}</h4>
                <ul>
                  <li><a href="/about">About</a></li>
                  <li><a href="/blog">Blog</a></li>
                </ul>
              </div>
              <div className="footer-column">
                <h4>{s.footerResources}</h4>
                <ul>
                  <li><a href="/support">Support</a></li>
                  <li><a href="/blog">Blog</a></li>
                </ul>
              </div>
              <div className="footer-column">
                <h4>{s.footerLegal}</h4>
                <ul>
                  <li><a href="/terms">Terms</a></li>
                  <li><a href="/privacy">Privacy</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Strikingly. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
