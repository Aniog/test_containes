import { useState, useEffect, useRef, useCallback } from 'react'
import { Search, ChevronDown, ArrowRight, Globe, Layout, Briefcase, BookOpen, ShoppingBag, Link, CheckCircle, Smartphone, Zap, ChevronUp } from 'lucide-react'
import { strings } from './data/strings'
import { featuredGenerators, allGenerators } from './data/generators'
import './index.css'

const s = strings.en

// SVG Illustration for hero
function HeroIllustration() {
  return (
    <svg
      className="hero-illustration"
      width="500"
      height="400"
      viewBox="0 0 500 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect x="50" y="80" width="400" height="260" rx="8" stroke="#8159BB" strokeWidth="2" fill="none" />
      <rect x="50" y="80" width="400" height="40" rx="8" fill="#F4F6F8" stroke="#8159BB" strokeWidth="2" />
      <circle cx="80" cy="100" r="6" fill="#8159BB" opacity="0.6" />
      <circle cx="100" cy="100" r="6" fill="#8159BB" opacity="0.4" />
      <circle cx="120" cy="100" r="6" fill="#8159BB" opacity="0.2" />
      <rect x="80" y="150" width="150" height="12" rx="2" fill="#8159BB" opacity="0.3" />
      <rect x="80" y="175" width="200" height="8" rx="2" fill="#8159BB" opacity="0.15" />
      <rect x="80" y="195" width="180" height="8" rx="2" fill="#8159BB" opacity="0.15" />
      <rect x="80" y="230" width="100" height="60" rx="4" fill="#8159BB" opacity="0.1" stroke="#8159BB" strokeWidth="1" />
      <rect x="200" y="230" width="100" height="60" rx="4" fill="#8159BB" opacity="0.1" stroke="#8159BB" strokeWidth="1" />
      <rect x="320" y="230" width="100" height="60" rx="4" fill="#8159BB" opacity="0.1" stroke="#8159BB" strokeWidth="1" />
      <rect x="80" y="310" width="340" height="8" rx="2" fill="#8159BB" opacity="0.1" />
      <path d="M250 40 L260 60 L240 60 Z" fill="#8159BB" opacity="0.5" />
      <path d="M250 360 L260 340 L240 340 Z" fill="#8159BB" opacity="0.5" />
    </svg>
  )
}

// Category icon component
function CategoryIcon({ category }) {
  const icons = {
    websites: <Globe className="category-icon" aria-hidden="true" />,
    'landing-pages': <Layout className="category-icon" aria-hidden="true" />,
    portfolios: <Briefcase className="category-icon" aria-hidden="true" />,
    blogs: <BookOpen className="category-icon" aria-hidden="true" />,
    stores: <ShoppingBag className="category-icon" aria-hidden="true" />,
    'link-in-bio': <Link className="category-icon" aria-hidden="true" />,
  }
  return icons[category] || <Globe className="category-icon" aria-hidden="true" />
}

// Generator card icon (shared per subsection)
function GeneratorCardIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <rect x="4" y="4" width="24" height="24" rx="4" stroke="#8159BB" strokeWidth="1.5" fill="none" />
      <rect x="8" y="8" width="16" height="4" rx="1" fill="#8159BB" opacity="0.3" />
      <rect x="8" y="14" width="12" height="2" rx="1" fill="#8159BB" opacity="0.2" />
      <rect x="8" y="18" width="10" height="2" rx="1" fill="#8159BB" opacity="0.2" />
    </svg>
  )
}

// FAQ Item component
function FaqItem({ faq, isExpanded, onToggle }) {
  const contentRef = useRef(null)

  return (
    <div className="faq-item">
      <button
        className="faq-button"
        aria-expanded={isExpanded}
        aria-controls={`faq-content-${faq.question.replace(/\s+/g, '-').toLowerCase()}`}
        onClick={onToggle}
      >
        <span>{faq.question}</span>
        <ChevronDown className="faq-icon" size={20} aria-hidden="true" />
      </button>
      <div
        id={`faq-content-${faq.question.replace(/\s+/g, '-').toLowerCase()}`}
        className={`faq-content ${isExpanded ? 'expanded' : ''}`}
        role="region"
        ref={contentRef}
      >
        <div className="faq-answer">
          {faq.answer.split('\n\n').map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </div>
    </div>
  )
}

// Generator subsection with show all toggle
function GeneratorSubsection({ category, items }) {
  const [isExpanded, setIsExpanded] = useState(false)
  const initialCount = 6
  const showToggle = items.length > initialCount
  const visibleItems = isExpanded ? items : items.slice(0, initialCount)

  return (
    <section id={category.id} className="generator-subsection" data-category={category.name.toLowerCase()}>
      <h3 className="subsection-heading">{category.name}</h3>
      <p className="subsection-description">{category.description}</p>
      <div className="grid-3">
        {visibleItems.map((item) => (
          <a
            key={item.slug}
            href={`/generators/${item.slug}`}
            className="card-link"
            aria-label={item.name}
          >
            <article className="card generator-card" data-name={item.name.toLowerCase()} data-description={item.description.toLowerCase()} data-category={category.name.toLowerCase()}>
              <GeneratorCardIcon />
              <span className="generator-name">{item.name}</span>
              <span className="generator-description">{item.description}</span>
            </article>
          </a>
        ))}
      </div>
      {showToggle && (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <button
            className="btn btn-ghost"
            aria-expanded={isExpanded}
            aria-controls={`show-all-${category.id}`}
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? (
              <>
                <ChevronUp size={16} style={{ marginInlineEnd: '6px' }} aria-hidden="true" />
                Show less
              </>
            ) : (
              <>
                <ChevronDown size={16} style={{ marginInlineEnd: '6px' }} aria-hidden="true" />
                {s.showAll(items.length)}
              </>
            )}
          </button>
        </div>
      )}
    </section>
  )
}

function App() {
  const [searchQuery, setSearchQuery] = useState('')
  const [expandedFaqs, setExpandedFaqs] = useState([true]) // First FAQ expanded by default
  const searchInputRef = useRef(null)
  const allGeneratorsRef = useRef(null)

  // Search filtering
  const handleSearch = useCallback((e) => {
    const query = e.target.value.toLowerCase().trim()
    setSearchQuery(query)

    if (!allGeneratorsRef.current) return

    const subsections = allGeneratorsRef.current.querySelectorAll('.generator-subsection')
    let totalVisible = 0

    subsections.forEach((subsection) => {
      const cards = subsection.querySelectorAll('.generator-card')
      let visibleInSubsection = 0

      cards.forEach((card) => {
        const name = card.dataset.name || ''
        const description = card.dataset.description || ''
        const category = card.dataset.category || ''
        const matches = !query || name.includes(query) || description.includes(query) || category.includes(query)

        if (matches) {
          card.closest('.card-link')?.classList.remove('hidden-by-search')
          visibleInSubsection++
        } else {
          card.closest('.card-link')?.classList.add('hidden-by-search')
        }
      })

      if (visibleInSubsection > 0) {
        subsection.classList.remove('subsection-hidden')
        totalVisible += visibleInSubsection
      } else {
        subsection.classList.add('subsection-hidden')
      }
    })

    // Update results count
    const resultsCount = allGeneratorsRef.current.querySelector('.search-results-count')
    if (resultsCount) {
      if (query) {
        resultsCount.textContent = s.searchResultsCount(totalVisible)
        resultsCount.style.display = 'block'
      } else {
        resultsCount.style.display = 'none'
      }
    }

    // Show/hide empty state
    const emptyState = allGeneratorsRef.current.querySelector('.empty-state')
    if (emptyState) {
      if (query && totalVisible === 0) {
        emptyState.style.display = 'block'
      } else {
        emptyState.style.display = 'none'
      }
    }
  }, [])

  const clearSearch = useCallback(() => {
    if (searchInputRef.current) {
      searchInputRef.current.value = ''
      handleSearch({ target: { value: '' } })
      searchInputRef.current.focus()
    }
  }, [handleSearch])

  // FAQ toggle
  const toggleFaq = useCallback((index) => {
    setExpandedFaqs((prev) => {
      const newExpanded = [...prev]
      newExpanded[index] = !newExpanded[index]
      return newExpanded
    })
  }, [])

  // Count total generators
  const totalGenerators = Object.values(allGenerators).reduce((sum, cat) => sum + cat.items.length, 0)

  return (
    <>
      {/* Section 0: Top bar */}
      <header className="topbar">
        <div className="container">
          <a href="/" className="topbar-logo" aria-label="Strikingly Home">
            {s.logo}
          </a>
        </div>
      </header>

      {/* Section 1: Breadcrumb */}
      <nav aria-label="Breadcrumb" className="breadcrumb">
        <div className="container">
          <ol style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', alignItems: 'center' }}>
            <li>
              <a href="/" className="breadcrumb-link">{s.breadcrumbHome}</a>
            </li>
            <li className="breadcrumb-separator" aria-hidden="true">&gt;</li>
            <li aria-current="page">{s.breadcrumbCurrent}</li>
          </ol>
        </div>
      </nav>

      <main>
        {/* Section 2: Hero */}
        <section className="section section-hero hero-section">
          <div className="container">
            <div className="hero-grid">
              <div>
                <h1>
                  <span style={{ color: 'var(--hero-heading)' }}>{s.heroH1Line1}</span>
                  <br />
                  <span className="ai-gradient-text">{s.heroH1Line2}</span>
                </h1>
                <p style={{ marginTop: '10px', fontSize: '16px', maxWidth: '480px' }}>
                  {s.heroSubheadline}
                </p>
                <div className="hero-ctas">
                  <a href="/s/ai_site_builder" className="btn btn-primary btn-large">
                    {s.heroCtaPrimary}
                  </a>
                  <a href="#all-generators" className="btn btn-ghost btn-large">
                    {s.heroCtaSecondary}
                  </a>
                </div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <HeroIllustration />
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Featured Generators */}
        <section className="section" style={{ background: 'var(--light-bg)' }}>
          <div className="container">
            <h2 className="section-heading">{s.featuredHeading}</h2>
            <p className="section-subheading">{s.featuredSubheading}</p>
            <div className="grid-3">
              {featuredGenerators.map((gen) => (
                <a
                  key={gen.slug}
                  href={`/generators/${gen.slug}`}
                  className="card-link"
                  aria-label={gen.name}
                >
                  <article className="card featured-card">
                    <span className="featured-name">{gen.name}</span>
                    <span className="featured-description">{gen.description}</span>
                    <span className="tag">{gen.category}</span>
                  </article>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Section 4: Browse by Category */}
        <section className="section">
          <div className="container">
            <h2 className="section-heading">{s.browseHeading}</h2>
            <div className="grid-3">
              {s.categories.map((cat) => (
                <a
                  key={cat.id}
                  href={`/generators${cat.slug}`}
                  className="card-link"
                  aria-label={cat.name}
                >
                  <article className="card category-card">
                    <CategoryIcon category={cat.id} />
                    <span className="category-name">{cat.name}</span>
                    <span className="category-description">{cat.description}</span>
                    <ArrowRight className="category-arrow" size={20} aria-hidden="true" />
                  </article>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Section 5: All Generators */}
        <section id="all-generators" className="section" style={{ background: 'var(--light-bg)' }} ref={allGeneratorsRef}>
          <div className="container">
            <h2 className="section-heading">{s.allGeneratorsHeading}</h2>
            <p className="section-subheading">{s.allGeneratorsSubheading}</p>

            {/* Search input */}
            <div className="search-input-wrapper" style={{ marginBottom: '20px' }}>
              <label htmlFor="generator-search" className="sr-only">{s.searchLabel}</label>
              <Search className="search-icon" size={18} aria-hidden="true" />
              <input
                id="generator-search"
                ref={searchInputRef}
                type="search"
                className="search-input"
                placeholder={s.searchPlaceholder}
                onChange={handleSearch}
                aria-label={s.searchLabel}
              />
            </div>
            <p className="search-results-count" style={{ display: 'none' }} aria-live="polite"></p>

            {/* Generator subsections */}
            {Object.values(allGenerators).map((category) => (
              <div key={category.id} style={{ marginBottom: '40px' }}>
                <GeneratorSubsection category={category} items={category.items} />
              </div>
            ))}

            {/* Empty state */}
            <div className="empty-state" style={{ display: 'none' }}>
              <h3 className="empty-state-title">{s.noResultsTitle}</h3>
              <p className="empty-state-description">{s.noResultsDescription}</p>
              <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap' }}>
                <button className="btn btn-ghost" onClick={clearSearch}>
                  {s.clearSearch}
                </button>
                <a href="/s/ai_site_builder" className="btn btn-primary">
                  {s.noResultsCta}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: How It Works */}
        <section className="section">
          <div className="container">
            <h2 className="section-heading" style={{ textAlign: 'center', marginBottom: '40px' }}>{s.howItWorksHeading}</h2>
            <div className="steps-grid">
              {s.steps.map((step) => (
                <div key={step.number} className="step-card">
                  <div className="step-number" style={{ margin: '0 auto 10px' }}>{step.number}</div>
                  <h3 className="step-title">{step.title}</h3>
                  <p className="step-description">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 7: Why Strikingly */}
        <section className="section" style={{ background: 'var(--light-bg)' }}>
          <div className="container">
            <h2 className="section-heading" style={{ textAlign: 'center', marginBottom: '40px' }}>{s.whyHeading}</h2>
            <div className="benefits-grid">
              <div className="benefit-card">
                <Zap className="benefit-icon" style={{ margin: '0 auto 10px' }} aria-hidden="true" />
                <h3 className="benefit-title">{s.benefits[0].title}</h3>
                <p className="benefit-description">{s.benefits[0].description}</p>
              </div>
              <div className="benefit-card">
                <Smartphone className="benefit-icon" style={{ margin: '0 auto 10px' }} aria-hidden="true" />
                <h3 className="benefit-title">{s.benefits[1].title}</h3>
                <p className="benefit-description">{s.benefits[1].description}</p>
              </div>
              <div className="benefit-card">
                <CheckCircle className="benefit-icon" style={{ margin: '0 auto 10px' }} aria-hidden="true" />
                <h3 className="benefit-title">{s.benefits[2].title}</h3>
                <p className="benefit-description">{s.benefits[2].description}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 8: FAQ */}
        <section className="section">
          <div className="container" style={{ maxWidth: '800px' }}>
            <h2 className="section-heading" style={{ marginBottom: '20px' }}>{s.faqHeading}</h2>
            {s.faqs.map((faq, index) => (
              <FaqItem
                key={index}
                faq={faq}
                isExpanded={expandedFaqs[index] || false}
                onToggle={() => toggleFaq(index)}
              />
            ))}
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
          <div style={{ marginBottom: '30px' }}>
            <a href="/" className="topbar-logo" aria-label="Strikingly Home">
              {s.logo}
            </a>
          </div>
          <div className="footer-grid">
            <div>
              <h4 className="footer-heading">{s.footerProduct}</h4>
              <a href="/features" className="footer-link">{s.footerFeatures}</a>
              <a href="/pricing" className="footer-link">{s.footerPricing}</a>
              <a href="/templates" className="footer-link">{s.footerTemplates}</a>
            </div>
            <div>
              <h4 className="footer-heading">{s.footerCompany}</h4>
              <a href="/about" className="footer-link">{s.footerAbout}</a>
              <a href="/blog" className="footer-link">{s.footerBlog}</a>
              <a href="/careers" className="footer-link">{s.footerCareers}</a>
            </div>
            <div>
              <h4 className="footer-heading">{s.footerSupport}</h4>
              <a href="/support" className="footer-link">{s.footerHelp}</a>
              <a href="/contact" className="footer-link">{s.footerContact}</a>
              <a href="/community" className="footer-link">{s.footerCommunity}</a>
            </div>
            <div>
              <h4 className="footer-heading">{s.footerLegal}</h4>
              <a href="/terms" className="footer-link">{s.footerTerms}</a>
              <a href="/privacy" className="footer-link">{s.footerPrivacy}</a>
            </div>
          </div>
          <div style={{ marginTop: '30px', paddingTop: '20px', borderTop: '1px solid var(--divider)', textAlign: 'center', fontSize: '13px', color: 'var(--body-text)' }}>
            {s.footerCopyright(new Date().getFullYear())}
          </div>
        </div>
      </footer>
    </>
  )
}

export default App
