import { useState, useEffect, useRef, useCallback } from 'react'
import './App.css'
import { strings } from './strings'
import { generators, featuredGenerators } from './generators-data'

const s = strings.en

// SVG Icons
const SearchIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
)

const ArrowRightIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
)

const ChevronDownIcon = ({ expanded }) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"
    style={{ transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s ease' }}>
    <polyline points="6 9 12 15 18 9" />
  </svg>
)

// Category icons (simple inline SVGs)
const CategoryIcon = ({ type }) => {
  const icons = {
    websites: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <rect x="4" y="6" width="24" height="18" rx="2" stroke="#8159BB" strokeWidth="2" />
        <line x1="4" y1="12" x2="28" y2="12" stroke="#8159BB" strokeWidth="2" />
        <line x1="12" y1="6" x2="12" y2="12" stroke="#8159BB" strokeWidth="2" />
      </svg>
    ),
    'landing-pages': (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <rect x="6" y="4" width="20" height="24" rx="2" stroke="#8159BB" strokeWidth="2" />
        <line x1="10" y1="10" x2="22" y2="10" stroke="#8159BB" strokeWidth="2" />
        <line x1="10" y1="16" x2="18" y2="16" stroke="#8159BB" strokeWidth="2" />
        <rect x="10" y="20" width="8" height="4" rx="1" stroke="#8159BB" strokeWidth="2" />
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
        <line x1="10" y1="18" x2="16" y2="18" stroke="#8159BB" strokeWidth="2" />
      </svg>
    ),
    stores: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path d="M6 10 L6 24 L26 24 L26 10" stroke="#8159BB" strokeWidth="2" />
        <path d="M4 10 L28 10" stroke="#8159BB" strokeWidth="2" />
        <path d="M10 10 L10 6 L22 6 L22 10" stroke="#8159BB" strokeWidth="2" />
        <line x1="16" y1="16" x2="16" y2="20" stroke="#8159BB" strokeWidth="2" />
      </svg>
    ),
    'link-in-bio': (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path d="M12 16 L20 16" stroke="#8159BB" strokeWidth="2" />
        <path d="M14 14 L18 14 L18 18 L14 18 Z" stroke="#8159BB" strokeWidth="2" />
        <path d="M8 12 L8 20" stroke="#8159BB" strokeWidth="2" />
        <path d="M24 12 L24 20" stroke="#8159BB" strokeWidth="2" />
        <circle cx="8" cy="10" r="2" stroke="#8159BB" strokeWidth="2" />
        <circle cx="24" cy="22" r="2" stroke="#8159BB" strokeWidth="2" />
      </svg>
    ),
  }
  return icons[type] || null
}

// Hero illustration SVG
const HeroIllustration = () => (
  <svg width="400" height="320" viewBox="0 0 400 320" fill="none" aria-hidden="true" className="hero-illustration">
    <rect x="40" y="40" width="320" height="240" rx="8" stroke="#8159BB" strokeWidth="1.5" opacity="0.3" />
    <rect x="60" y="60" width="280" height="20" rx="4" fill="#8159BB" opacity="0.1" />
    <rect x="60" y="100" width="120" height="80" rx="4" stroke="#8159BB" strokeWidth="1.5" opacity="0.4" />
    <rect x="200" y="100" width="140" height="30" rx="4" fill="#8159BB" opacity="0.08" />
    <rect x="200" y="140" width="100" height="10" rx="2" fill="#8159BB" opacity="0.15" />
    <rect x="200" y="160" width="120" height="10" rx="2" fill="#8159BB" opacity="0.1" />
    <rect x="60" y="200" width="280" height="60" rx="4" stroke="#8159BB" strokeWidth="1.5" opacity="0.3" />
    <circle cx="90" cy="230" r="15" stroke="#8159BB" strokeWidth="1.5" opacity="0.4" />
    <rect x="120" y="220" width="80" height="8" rx="2" fill="#8159BB" opacity="0.15" />
    <rect x="120" y="235" width="60" height="6" rx="2" fill="#8159BB" opacity="0.1" />
    <rect x="220" y="220" width="100" height="20" rx="4" stroke="#8159BB" strokeWidth="1.5" opacity="0.3" />
    <line x1="40" y1="280" x2="360" y2="280" stroke="#8159BB" strokeWidth="1" opacity="0.2" />
  </svg>
)

// Top Bar
const TopBar = () => (
  <header className="top-bar" role="banner">
    <div className="container">
      <a href="/" className="top-bar-logo" aria-label="Strikingly Home">
        {s.logo}
      </a>
    </div>
  </header>
)

// Breadcrumb
const Breadcrumb = () => (
  <nav className="breadcrumb container" aria-label="Breadcrumb">
    <ol>
      <li><a href="/">{s.breadcrumbHome}</a></li>
      <li aria-current="page">{s.breadcrumbCurrent}</li>
    </ol>
  </nav>
)

// Hero Section
const HeroSection = () => (
  <section className="hero">
    <div className="container hero-grid">
      <div className="hero-content">
        <h1>
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
      <div className="hero-visual">
        <HeroIllustration />
      </div>
    </div>
  </section>
)

// Featured Generators
const FeaturedGenerators = () => (
  <section className="section featured">
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
            <span className="featured-card-name">{gen.name}</span>
            <span className="featured-card-desc">{gen.description}</span>
            <span className="tag tag-ghost">{gen.category}</span>
          </a>
        ))}
      </div>
    </div>
  </section>
)

// Browse by Category
const BrowseByCategory = () => (
  <section className="section browse-categories">
    <div className="container">
      <h2 className="section-heading">{s.browseHeading}</h2>
      <div className="category-grid">
        {s.categories.map((cat) => (
          <a
            key={cat.id}
            href={`#${cat.id}`}
            className="category-card"
          >
            <div className="category-card-icon">
              <CategoryIcon type={cat.id} />
            </div>
            <span className="category-card-name">{cat.name}</span>
            <span className="category-card-desc">{cat.description}</span>
            <span className="category-card-arrow">
              <ArrowRightIcon />
            </span>
          </a>
        ))}
      </div>
    </div>
  </section>
)

// Generator Card (for All Generators subsections)
const GeneratorCard = ({ gen }) => (
  <a
    href={`/generators/${gen.slug}`}
    className="generator-card"
  >
    <span className="generator-card-name">{gen.name}</span>
    <span className="generator-card-desc">{gen.description}</span>
  </a>
)

// All Generators Directory
const AllGeneratorsDirectory = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [expandedSections, setExpandedSections] = useState({})
  const containerRef = useRef(null)

  const INITIAL_VISIBLE = 6

  const handleSearchChange = useCallback((e) => {
    setSearchQuery(e.target.value)
  }, [])

  const handleClearSearch = useCallback(() => {
    setSearchQuery('')
  }, [])

  const toggleSection = useCallback((categoryId) => {
    setExpandedSections((prev) => ({
      ...prev,
      [categoryId]: !prev[categoryId],
    }))
  }, [])

  // Flatten all generators for search
  const allGens = Object.entries(generators).flatMap(([catId, gens]) =>
    gens.map((g) => ({ ...g, categoryId: catId }))
  )

  const filteredGens = searchQuery
    ? allGens.filter(
        (g) =>
          g.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          g.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          g.category.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : allGens

  // Group filtered generators by category
  const filteredByCategory = {}
  filteredGens.forEach((g) => {
    if (!filteredByCategory[g.categoryId]) {
      filteredByCategory[g.categoryId] = []
    }
    filteredByCategory[g.categoryId].push(g)
  })

  const visibleCategories = searchQuery
    ? Object.keys(filteredByCategory)
    : s.categories.map((c) => c.id)

  return (
    <section className="section all-generators" id="all-generators" ref={containerRef}>
      <div className="container">
        <h2 className="section-heading">{s.allGeneratorsHeading}</h2>
        <p className="section-subheading">{s.allGeneratorsSubheading}</p>

        <div className="search-wrapper">
          <div className="search-input-wrapper">
            <span className="search-icon" aria-hidden="true">
              <SearchIcon />
            </span>
            <input
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
              <span>{s.resultsCount(filteredGens.length)}</span>
              {filteredGens.length === 0 && (
                <div className="search-empty-state">
                  <p className="search-empty-title">{s.noResultsTitle}</p>
                  <p className="search-empty-desc">{s.noResultsDescription}</p>
                  <a href="/s/ai_site_builder" className="btn btn-primary btn-small">
                    {s.noResultsCta}
                  </a>
                  <button
                    type="button"
                    className="btn btn-ghost btn-small"
                    onClick={handleClearSearch}
                  >
                    {s.clearSearch}
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        {visibleCategories.map((catId) => {
          const cat = s.categories.find((c) => c.id === catId)
          const catGens = searchQuery
            ? (filteredByCategory[catId] || [])
            : (generators[catId] || [])

          if (catGens.length === 0) return null

          const isExpanded = expandedSections[catId] || false
          const visibleGens = isExpanded ? catGens : catGens.slice(0, INITIAL_VISIBLE)

          return (
            <div key={catId} id={catId} className="generators-subsection">
              <h3 className="subsection-heading">{cat.name}</h3>
              <p className="subsection-desc">{cat.description}</p>
              <div className="generators-grid">
                {visibleGens.map((gen) => (
                  <GeneratorCard key={gen.slug} gen={gen} />
                ))}
              </div>
              {catGens.length > INITIAL_VISIBLE && (
                <button
                  type="button"
                  className="btn btn-ghost btn-show-all"
                  aria-expanded={isExpanded}
                  aria-controls={`generators-grid-${catId}`}
                  onClick={() => toggleSection(catId)}
                >
                  {isExpanded ? s.showLess : s.showAll(catGens.length)}
                </button>
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}

// How It Works
const HowItWorks = () => (
  <section className="section how-it-works">
    <div className="container">
      <h2 className="section-heading">{s.howItWorksHeading}</h2>
      <div className="steps-grid">
        {s.steps.map((step, i) => (
          <div key={i} className="step-card">
            <div className="step-number">{i + 1}</div>
            <h3 className="step-title">{step.title}</h3>
            <p className="step-desc">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
)

// Why Strikingly
const WhyStrikingly = () => (
  <section className="section why-strikingly">
    <div className="container">
      <h2 className="section-heading">{s.whyStrikinglyHeading}</h2>
      <div className="benefits-grid">
        {s.benefits.map((benefit, i) => (
          <div key={i} className="benefit-card">
            <div className="benefit-icon">
              {i === 0 && (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#8159BB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                </svg>
              )}
              {i === 1 && (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#8159BB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                  <line x1="12" y1="18" x2="12.01" y2="18" />
                </svg>
              )}
              {i === 2 && (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#8159BB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="12" y1="1" x2="12" y2="23" />
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              )}
            </div>
            <h3 className="benefit-title">{benefit.title}</h3>
            <p className="benefit-desc">{benefit.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
)

// FAQ Accordion
const FAQAccordion = () => {
  const [expandedIndex, setExpandedIndex] = useState(0)

  const toggleFaq = useCallback((index) => {
    setExpandedIndex((prev) => (prev === index ? -1 : index))
  }, [])

  return (
    <section className="section faq">
      <div className="container">
        <h2 className="section-heading">{s.faqHeading}</h2>
        <div className="faq-list">
          {s.faqs.map((faq, i) => {
            const isExpanded = expandedIndex === i
            return (
              <div key={i} className="faq-item">
                <button
                  type="button"
                  className="faq-question"
                  aria-expanded={isExpanded}
                  aria-controls={`faq-answer-${i}`}
                  onClick={() => toggleFaq(i)}
                >
                  <span>{faq.question}</span>
                  <ChevronDownIcon expanded={isExpanded} />
                </button>
                <div
                  id={`faq-answer-${i}`}
                  className="faq-answer"
                  role="region"
                  style={{
                    maxHeight: isExpanded ? '500px' : '0',
                    opacity: isExpanded ? 1 : 0,
                    padding: isExpanded ? '15px 0 20px' : '0',
                  }}
                >
                  <p>{faq.answer}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// Closing CTA
const ClosingCTA = () => (
  <section className="section closing-cta">
    <div className="container closing-cta-container">
      <h2 className="closing-heading">{s.closingHeading}</h2>
      <p className="closing-sub">{s.closingSub}</p>
      <a href="/s/ai_site_builder" className="btn btn-primary btn-large">
        {s.closingCta}
      </a>
    </div>
  </section>
)

// Footer
const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <h4>{s.footerProduct}</h4>
            <ul>
              <li><a href="/pricing">{s.footerPricing}</a></li>
              <li><a href="/templates">{s.footerTemplates}</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>{s.footerCompany}</h4>
            <ul>
              <li><a href="/about">{s.footerAbout}</a></li>
              <li><a href="/blog">{s.footerBlog}</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>{s.footerSupport}</h4>
            <ul>
              <li><a href="/support">{s.footerHelpCenter}</a></li>
              <li><a href="/support">{s.footerContact}</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>{s.footerLegal}</h4>
            <ul>
              <li><a href="/terms">{s.footerTerms}</a></li>
              <li><a href="/privacy">{s.footerPrivacy}</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>{s.footerCopyright(year)}</p>
        </div>
      </div>
    </footer>
  )
}

function App() {
  return (
    <div className="page">
      <TopBar />
      <Breadcrumb />
      <main>
        <HeroSection />
        <FeaturedGenerators />
        <BrowseByCategory />
        <AllGeneratorsDirectory />
        <HowItWorks />
        <WhyStrikingly />
        <FAQAccordion />
        <ClosingCTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
