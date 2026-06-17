import { useState, useEffect, useRef } from 'react'
import { Search, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react'
import { strings, generators, featuredGenerators } from './data/generators'
import './App.css'

const s = strings.en

// Group generators by category
const generatorsByCategory = {}
generators.forEach((g) => {
  if (!generatorsByCategory[g.category]) {
    generatorsByCategory[g.category] = []
  }
  generatorsByCategory[g.category].push(g)
})

const categoryOrder = ['websites', 'landing-pages', 'portfolios', 'blogs', 'stores', 'link-in-bio']

// Category icons as inline SVGs
const CategoryIcon = ({ category, className = '' }) => {
  const icons = {
    websites: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
    'landing-pages': (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M9 21V9" />
      </svg>
    ),
    portfolios: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
        <rect x="3" y="3" width="7" height="7" />
        <rect x="14" y="3" width="7" height="7" />
        <rect x="3" y="14" width="7" height="7" />
        <rect x="14" y="14" width="7" height="7" />
      </svg>
    ),
    blogs: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
        <path d="M4 4h16v16H4z" />
        <path d="M4 8h16M8 4v16" />
      </svg>
    ),
    stores: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
        <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
        <path d="M3 6h18M16 10a4 4 0 01-8 0" />
      </svg>
    ),
    'link-in-bio': (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
        <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" />
        <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" />
      </svg>
    ),
  }
  return icons[category] || icons.websites
}

// Why Strikingly icons
const WhyIcon = ({ type, className = '' }) => {
  const icons = {
    speed: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    mobile: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
        <rect x="5" y="2" width="14" height="20" rx="2" />
        <path d="M12 18h.01" />
      </svg>
    ),
    free: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
  }
  return icons[type] || icons.speed
}

function App() {
  const [searchQuery, setSearchQuery] = useState('')
  const [expandedSections, setExpandedSections] = useState({})
  const [expandedFaqs, setExpandedFaqs] = useState({ 0: true })
  const containerRef = useRef(null)

  // Search filtering
  const filteredGenerators = {}
  const query = searchQuery.toLowerCase().trim()

  categoryOrder.forEach((cat) => {
    const items = generatorsByCategory[cat] || []
    if (!query) {
      filteredGenerators[cat] = items
    } else {
      filteredGenerators[cat] = items.filter(
        (g) =>
          g.name.toLowerCase().includes(query) ||
          g.description.toLowerCase().includes(query) ||
          g.category.toLowerCase().includes(query)
      )
    }
  })

  const totalMatches = Object.values(filteredGenerators).reduce((sum, arr) => sum + arr.length, 0)
  const hasResults = totalMatches > 0

  // Show all toggle
  const INITIAL_VISIBLE = 6

  const toggleSection = (cat) => {
    setExpandedSections((prev) => ({ ...prev, [cat]: !prev[cat] }))
  }

  const toggleFaq = (idx) => {
    setExpandedFaqs((prev) => ({ ...prev, [idx]: !prev[idx] }))
  }

  const clearSearch = () => setSearchQuery('')

  return (
    <div className="generators-page" ref={containerRef}>
      {/* Section 0: Top bar */}
      <header className="top-bar">
        <div className="container">
          <span className="top-bar-logo">{s.topBarLogo}</span>
        </div>
      </header>

      {/* Section 1: Breadcrumb */}
      <nav className="breadcrumb-nav container" aria-label="Breadcrumb">
        <ol className="breadcrumb-list">
          <li className="breadcrumb-item">
            <a href="/" className="breadcrumb-link">{s.breadcrumbHome}</a>
          </li>
          <li className="breadcrumb-separator" aria-hidden="true">&gt;</li>
          <li className="breadcrumb-item breadcrumb-current" aria-current="page">
            {s.breadcrumbCurrent}
          </li>
        </ol>
      </nav>

      <main>
        {/* Section 2: Hero */}
        <section className="hero-section">
          <div className="container hero-grid">
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
              <svg
                viewBox="0 0 400 300"
                width="400"
                height="300"
                aria-hidden="true"
                className="hero-svg"
              >
                <rect x="40" y="30" width="320" height="220" rx="8" fill="none" stroke="#8159BB" strokeWidth="2" opacity="0.3" />
                <rect x="60" y="50" width="280" height="30" rx="4" fill="#8159BB" opacity="0.1" />
                <rect x="60" y="100" width="120" height="80" rx="4" fill="#8159BB" opacity="0.08" />
                <rect x="200" y="100" width="140" height="15" rx="3" fill="#8159BB" opacity="0.15" />
                <rect x="200" y="125" width="100" height="10" rx="3" fill="#8159BB" opacity="0.1" />
                <rect x="200" y="145" width="120" height="10" rx="3" fill="#8159BB" opacity="0.1" />
                <rect x="60" y="200" width="280" height="30" rx="4" fill="#8159BB" opacity="0.06" />
                <circle cx="340" cy="50" r="8" fill="#7671FF" opacity="0.3" />
                <circle cx="320" cy="50" r="8" fill="#CB0C9F" opacity="0.3" />
                <circle cx="300" cy="50" r="8" fill="#8159BB" opacity="0.3" />
              </svg>
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
                  className="featured-card card"
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
              {s.categories.map((cat) => (
                <a
                  key={cat.id}
                  href={`#all-generators#${cat.id}`}
                  className="browse-card card"
                >
                  <div className="browse-card-icon">
                    <CategoryIcon category={cat.id} className="category-icon-svg" />
                  </div>
                  <h3 className="browse-card-name">{cat.name}</h3>
                  <p className="browse-card-desc">{cat.description}</p>
                  <ArrowRight className="browse-card-arrow" size={18} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Section 5: All Generators */}
        <section id="all-generators" className="all-generators-section">
          <div className="container">
            <h2 className="section-heading">{s.allGeneratorsHeading}</h2>
            <p className="section-subheading">{s.allGeneratorsSubheading}</p>

            {/* Search */}
            <div className="search-wrapper">
              <div className="search-input-wrapper">
                <Search className="search-icon" size={18} aria-hidden="true" />
                <input
                  type="search"
                  className="search-input"
                  placeholder={s.searchPlaceholder}
                  aria-label={s.searchLabel}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              {query && (
                <p className="search-results-count" aria-live="polite">
                  {s.searchResultsCount(totalMatches)}
                </p>
              )}
            </div>

            {/* No results */}
            {!hasResults && query && (
              <div className="no-results">
                <h3 className="no-results-title">{s.noResultsTitle}</h3>
                <p className="no-results-text">{s.noResultsText}</p>
                <div className="no-results-actions">
                  <button type="button" className="btn btn-ghost btn-small" onClick={clearSearch}>
                    {s.noResultsCta}
                  </button>
                  <a href="/s/ai_site_builder" className="btn btn-primary btn-small">
                    {s.noResultsBuilderLink}
                  </a>
                </div>
              </div>
            )}

            {/* Category subsections */}
            {categoryOrder.map((catId) => {
              const items = filteredGenerators[catId] || []
              if (items.length === 0) return null

              const catInfo = s.categories.find((c) => c.id === catId)
              const isExpanded = expandedSections[catId] !== false
              const visibleItems = isExpanded ? items : items.slice(0, INITIAL_VISIBLE)
              const hasMore = items.length > INITIAL_VISIBLE

              return (
                <div key={catId} id={catId} className="category-subsection">
                  <h3 className="category-heading">{catInfo?.name || catId}</h3>
                  <p className="category-description">{catInfo?.description}</p>
                  <div className="directory-grid">
                    {visibleItems.map((gen) => (
                      <a
                        key={gen.id}
                        href={`/generators/${gen.slug}`}
                        className="directory-card card"
                      >
                        <div className="directory-card-icon">
                          <CategoryIcon category={catId} className="category-icon-svg" />
                        </div>
                        <h4 className="directory-card-name">{gen.name}</h4>
                        <p className="directory-card-desc">{gen.description}</p>
                      </a>
                    ))}
                  </div>
                  {hasMore && (
                    <button
                      type="button"
                      className="btn btn-ghost btn-show-all"
                      onClick={() => toggleSection(catId)}
                      aria-expanded={!isExpanded}
                      aria-controls={`grid-${catId}`}
                    >
                      {isExpanded ? s.showLess : s.showAll(items.length)}
                      {isExpanded ? <ChevronUp size={16} aria-hidden="true" /> : <ChevronDown size={16} aria-hidden="true" />}
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
              {s.whyItems.map((item, idx) => {
                const iconTypes = ['speed', 'mobile', 'free']
                return (
                  <div key={idx} className="why-card">
                    <WhyIcon type={iconTypes[idx]} className="why-icon-svg" />
                    <h3 className="why-card-title">{item.title}</h3>
                    <p className="why-card-desc">{item.description}</p>
                  </div>
                )
              })}
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
                      <span className="faq-question-text">{item.question}</span>
                      {isExpanded ? (
                        <ChevronUp size={20} className="faq-chevron" aria-hidden="true" />
                      ) : (
                        <ChevronDown size={20} className="faq-chevron" aria-hidden="true" />
                      )}
                    </button>
                    {isExpanded && (
                      <div
                        id={`faq-answer-${idx}`}
                        className="faq-answer"
                        role="region"
                      >
                        {item.answer.split('\n\n').map((p, i) => (
                          <p key={i}>{p}</p>
                        ))}
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Section 9: Closing CTA */}
        <section className="closing-section">
          <div className="container closing-content">
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
              <span className="footer-logo">{s.topBarLogo}</span>
            </div>
            <div className="footer-col">
              <h4 className="footer-col-title">Product</h4>
              <a href="/pricing">Pricing</a>
              <a href="/templates">Templates</a>
              <a href="/s/ai_site_builder">AI Site Builder</a>
            </div>
            <div className="footer-col">
              <h4 className="footer-col-title">Company</h4>
              <a href="/about">About</a>
              <a href="/blog">Blog</a>
              <a href="/support">Support</a>
            </div>
            <div className="footer-col">
              <h4 className="footer-col-title">Legal</h4>
              <a href="/terms">Terms</a>
              <a href="/privacy">Privacy</a>
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
