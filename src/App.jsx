import './App.css'
import { useEffect, useRef, useState } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from './strk-img-config.json'
import { strings } from './strings.jsx'
import { generatorsData, categories, featuredGenerators } from './data.jsx'

function App() {
  const containerRef = useRef(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [expandedSections, setExpandedSections] = useState({})
  const [expandedFaqs, setExpandedFaqs] = useState({ 0: true })

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  const s = strings.en

  const handleSearch = (e) => {
    setSearchQuery(e.target.value.toLowerCase())
  }

  const clearSearch = () => {
    setSearchQuery('')
  }

  const toggleFaq = (index) => {
    setExpandedFaqs((prev) => ({ ...prev, [index]: !prev[index] }))
  }

  const toggleSection = (slug) => {
    setExpandedSections((prev) => ({ ...prev, [slug]: !prev[slug] }))
  }

  const matchesSearch = (gen) => {
    if (!searchQuery) return true
    return (
      gen.name.toLowerCase().includes(searchQuery) ||
      gen.description.toLowerCase().includes(searchQuery) ||
      gen.category.toLowerCase().includes(searchQuery)
    )
  }

  const getVisibleGenerators = (slug) => {
    const gens = generatorsData[slug] || []
    const matched = gens.filter(matchesSearch)
    const isExpanded = expandedSections[slug]
    const limit = 8
    if (isExpanded || matched.length <= limit) return matched
    return matched.slice(0, limit)
  }

  const getMatchCount = (slug) => {
    const gens = generatorsData[slug] || []
    return gens.filter(matchesSearch).length
  }

  const totalMatchCount = Object.keys(generatorsData).reduce(
    (sum, slug) => sum + getMatchCount(slug),
    0
  )

  const hasAnyMatches = totalMatchCount > 0

  return (
    <div className="page" ref={containerRef}>
      {/* Section 0: Top bar */}
      <header className="topbar">
        <div className="container">
          <a href="/" className="topbar-logo" aria-label="Strikingly home">
            <span className="topbar-logo-text">strikingly</span>
            <span className="topbar-logo-ai">AI</span>
          </a>
        </div>
      </header>

      {/* Section 1: Breadcrumb */}
      <nav className="breadcrumb-nav container" aria-label="Breadcrumb">
        <ol className="breadcrumb-list">
          <li className="breadcrumb-item">
            <a href="/">{s.breadcrumb.home}</a>
          </li>
          <li className="breadcrumb-separator" aria-hidden="true">
            &gt;
          </li>
          <li className="breadcrumb-item breadcrumb-current" aria-current="page">
            {s.breadcrumb.current}
          </li>
        </ol>
      </nav>

      <main className="main-content">
        {/* Section 2: Hero */}
        <section className="hero" aria-labelledby="hero-heading">
          <div className="container hero-grid">
            <div className="hero-text">
              <h1 id="hero-heading" className="hero-heading">
                <span className="hero-heading-line-1">{s.hero.line1}</span>
                <span className="hero-heading-line-2">{s.hero.line2}</span>
              </h1>
              <p className="hero-subheadline">{s.hero.subheadline}</p>
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
              <svg
                width="480"
                height="360"
                viewBox="0 0 480 360"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <rect x="40" y="40" width="400" height="280" rx="8" stroke="#8159BB" strokeWidth="2" fill="none" />
                <rect x="60" y="60" width="360" height="30" rx="4" fill="#F4F6F8" />
                <circle cx="80" cy="75" r="6" fill="#8159BB" opacity="0.3" />
                <circle cx="100" cy="75" r="6" fill="#8159BB" opacity="0.2" />
                <circle cx="120" cy="75" r="6" fill="#8159BB" opacity="0.1" />
                <rect x="60" y="110" width="160" height="180" rx="4" fill="#F4F6F8" />
                <rect x="240" y="110" width="180" height="80" rx="4" fill="#F4F6F8" />
                <rect x="240" y="210" width="180" height="80" rx="4" fill="#F4F6F8" />
                <line x1="80" y1="140" x2="200" y2="140" stroke="#8159BB" strokeWidth="2" opacity="0.4" />
                <line x1="80" y1="160" x2="180" y2="160" stroke="#8159BB" strokeWidth="2" opacity="0.3" />
                <line x1="80" y1="180" x2="190" y2="180" stroke="#8159BB" strokeWidth="2" opacity="0.2" />
                <rect x="260" y="130" width="140" height="12" rx="2" fill="#8159BB" opacity="0.3" />
                <rect x="260" y="150" width="100" height="8" rx="2" fill="#8159BB" opacity="0.2" />
                <rect x="260" y="230" width="140" height="12" rx="2" fill="#8159BB" opacity="0.3" />
                <rect x="260" y="250" width="100" height="8" rx="2" fill="#8159BB" opacity="0.2" />
              </svg>
            </div>
          </div>
        </section>

        {/* Section 3: Featured Generators */}
        <section className="section featured" aria-labelledby="featured-heading">
          <div className="container">
            <h2 id="featured-heading" className="section-heading">{s.featured.heading}</h2>
            <p className="section-subheading">{s.featured.subheading}</p>
            <div className="featured-grid">
              {featuredGenerators.map((gen) => (
                <a
                  key={gen.slug}
                  href={`/generators/${gen.slug}`}
                  className="card featured-card"
                >
                  <span className="card-name">{gen.name}</span>
                  <span className="card-description">{gen.description}</span>
                  <span className="tag tag-ghost">{gen.category}</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Section 4: Browse by Category */}
        <section className="section categories" aria-labelledby="categories-heading">
          <div className="container">
            <h2 id="categories-heading" className="section-heading">{s.categories.heading}</h2>
            <div className="categories-grid">
              {categories.map((cat) => (
                <a
                  key={cat.slug}
                  href={`#${cat.slug}`}
                  className="card category-card"
                >
                  <div className="category-icon" aria-hidden="true">
                    {cat.icon}
                  </div>
                  <span className="category-name">{cat.name}</span>
                  <span className="category-description">{cat.description}</span>
                  <svg className="category-arrow" width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <path d="M7 4L13 10L7 16" stroke="#8159BB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Section 5: All Generators */}
        <section className="section directory" id="all-generators" aria-labelledby="directory-heading">
          <div className="container">
            <h2 id="directory-heading" className="section-heading">{s.directory.heading}</h2>
            <p className="section-subheading">{s.directory.subheading}</p>

            <div className="search-wrapper">
              <label htmlFor="generator-search" className="sr-only">{s.directory.searchLabel}</label>
              <div className="search-input-wrapper">
                <svg className="search-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <circle cx="9" cy="9" r="6" stroke="#636972" strokeWidth="2" />
                  <line x1="13.5" y1="13.5" x2="18" y2="18" stroke="#636972" strokeWidth="2" strokeLinecap="round" />
                </svg>
                <input
                  id="generator-search"
                  type="search"
                  className="search-input"
                  placeholder={s.directory.searchPlaceholder}
                  aria-label={s.directory.searchLabel}
                  value={searchQuery}
                  onChange={handleSearch}
                />
              </div>
              {searchQuery && (
                <p className="search-count" role="status">
                  {totalMatchCount} {totalMatchCount === 1 ? s.directory.matchSingular : s.directory.matchPlural}
                </p>
              )}
            </div>

            {!hasAnyMatches && searchQuery && (
              <div className="search-empty" role="status">
                <p>{s.directory.emptyState}</p>
                <button type="button" className="btn btn-ghost btn-small" onClick={clearSearch}>
                  {s.directory.clearSearch}
                </button>
                <p className="search-empty-cta">
                  {s.directory.emptyCtaPrefix}{' '}
                  <a href="/s/ai_site_builder">{s.directory.emptyCtaLink}</a>
                </p>
              </div>
            )}

            {categories.map((cat) => {
              const visibleGens = getVisibleGenerators(cat.slug)
              const totalCount = getMatchCount(cat.slug)
              const isExpanded = expandedSections[cat.slug]
              const hasMore = totalCount > 8

              if (searchQuery && totalCount === 0) return null

              return (
                <div key={cat.slug} id={cat.slug} className="directory-subsection">
                  <h3 className="subsection-heading">{cat.name}</h3>
                  <p className="subsection-description">{cat.description}</p>
                  <div className="directory-grid" id={`directory-grid-${cat.slug}`}>
                    {visibleGens.map((gen) => (
                      <a
                        key={gen.slug}
                        href={`/generators/${gen.slug}`}
                        className="card directory-card"
                      >
                        <div className="directory-card-thumb" aria-hidden="true">
                          {cat.icon}
                        </div>
                        <span className="card-name">{gen.name}</span>
                        <span className="card-description">{gen.description}</span>
                      </a>
                    ))}
                  </div>
                  {hasMore && (
                    <button
                      type="button"
                      className="btn btn-ghost btn-show-all"
                      aria-expanded={isExpanded}
                      aria-controls={`directory-grid-${cat.slug}`}
                      onClick={() => toggleSection(cat.slug)}
                    >
                      {isExpanded ? s.directory.showLess : `${s.directory.showAll} ${totalCount} ${s.directory.generatorsLabel}`}
                    </button>
                  )}
                </div>
              )
            })}
          </div>
        </section>

        {/* Section 6: How It Works */}
        <section className="section how-it-works" aria-labelledby="how-heading">
          <div className="container">
            <h2 id="how-heading" className="section-heading">{s.how.heading}</h2>
            <div className="steps-grid">
              {s.how.steps.map((step, i) => (
                <div key={i} className="step">
                  <div className="step-number" aria-hidden="true">{i + 1}</div>
                  <h3 className="step-title">{step.title}</h3>
                  <p className="step-description">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 7: Why Strikingly */}
        <section className="section why" aria-labelledby="why-heading">
          <div className="container">
            <h2 id="why-heading" className="section-heading">{s.why.heading}</h2>
            <div className="why-grid">
              {s.why.items.map((item, i) => (
                <div key={i} className="why-item">
                  <div className="why-icon" aria-hidden="true">
                    {item.icon}
                  </div>
                  <h3 className="why-title">{item.title}</h3>
                  <p className="why-description">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 8: FAQ */}
        <section className="section faq" aria-labelledby="faq-heading">
          <div className="container">
            <h2 id="faq-heading" className="section-heading">{s.faq.heading}</h2>
            <div className="faq-list">
              {s.faq.questions.map((q, i) => (
                <div key={i} className="faq-item">
                  <button
                    type="button"
                    className="faq-button"
                    aria-expanded={expandedFaqs[i] || false}
                    aria-controls={`faq-answer-${i}`}
                    onClick={() => toggleFaq(i)}
                  >
                    <span className="faq-question-text">{q.question}</span>
                    <svg
                      className={`faq-chevron ${expandedFaqs[i] ? 'faq-chevron-open' : ''}`}
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path d="M5 8L10 13L15 8" stroke="#8159BB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                  <div
                    id={`faq-answer-${i}`}
                    className={`faq-answer ${expandedFaqs[i] ? 'faq-answer-open' : ''}`}
                    role="region"
                  >
                    {q.answer}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 9: Closing CTA */}
        <section className="section closing-cta" aria-labelledby="closing-heading">
          <div className="container">
            <h2 id="closing-heading" className="closing-heading">{s.closing.heading}</h2>
            <p className="closing-sub">{s.closing.sub}</p>
            <a href="/s/ai_site_builder" className="btn btn-primary btn-large">
              {s.closing.cta}
            </a>
          </div>
        </section>
      </main>

      {/* Section 10: Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <a href="/" className="footer-logo" aria-label="Strikingly home">
                <span className="footer-logo-text">strikingly</span>
              </a>
            </div>
            <div className="footer-column">
              <h4 className="footer-heading">{s.footer.product}</h4>
              <ul className="footer-links">
                <li><a href="/pricing">{s.footer.pricing}</a></li>
                <li><a href="/templates">{s.footer.templates}</a></li>
                <li><a href="/generators">{s.footer.generators}</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4 className="footer-heading">{s.footer.company}</h4>
              <ul className="footer-links">
                <li><a href="/about">{s.footer.about}</a></li>
                <li><a href="/blog">{s.footer.blog}</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4 className="footer-heading">{s.footer.support}</h4>
              <ul className="footer-links">
                <li><a href="/support">{s.footer.help}</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4 className="footer-heading">{s.footer.legal}</h4>
              <ul className="footer-links">
                <li><a href="/terms">{s.footer.terms}</a></li>
                <li><a href="/privacy">{s.footer.privacy}</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p className="footer-copyright">{s.footer.copyright}</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
