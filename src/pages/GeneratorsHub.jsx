import { useState, useCallback, useRef, useEffect } from 'react'
import { strings } from '../strings.js'
import './GeneratorsHub.css'

const s = strings.en
const BUILDER_URL = '/s/ai_site_builder'

// ─── Icons (inline SVG, no external deps) ───────────────────────────────────

const SearchIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" />
  </svg>
)

const ArrowRightIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
  </svg>
)

const ChevronDownIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="m6 9 6 6 6-6" />
  </svg>
)

const GlobeIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/>
  </svg>
)

const RocketIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>
  </svg>
)

const PaletteIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/>
  </svg>
)

const MonitorIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect width="20" height="14" x="2" y="3" rx="2"/><line x1="8" x2="16" y1="21" y2="21"/><line x1="12" x2="12" y1="17" y2="21"/>
  </svg>
)

const BookOpenIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
  </svg>
)

const ShoppingCartIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/>
  </svg>
)

const LinkIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
  </svg>
)

const LayoutIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/>
  </svg>
)

const CheckCircleIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
  </svg>
)

const ZapIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
  </svg>
)

const SmartphoneIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/>
  </svg>
)

const DollarIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="12" x2="12" y1="2" y2="22"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
  </svg>
)

const categoryIcons = {
  'websites': GlobeIcon,
  'landing-pages': RocketIcon,
  'portfolios': PaletteIcon,
  'blogs': BookOpenIcon,
  'stores': ShoppingCartIcon,
  'link-in-bio': LinkIcon,
}

const whyIcons = [ZapIcon, SmartphoneIcon, DollarIcon]

// ─── Illustrations (inline SVG) ─────────────────────────────────────────────

const HeroIllustration = () => (
  <svg width="440" height="340" viewBox="0 0 440 340" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="hero-illustration">
    {/* Browser window frame */}
    <rect x="40" y="20" width="360" height="260" rx="12" fill="#F4F6F8" stroke="#C6C9CD" strokeWidth="2"/>
    <rect x="40" y="20" width="360" height="40" rx="12" fill="#F4F6F8" stroke="#C6C9CD" strokeWidth="2"/>
    <rect x="40" y="48" width="360" height="2" fill="#E2E4E7"/>
    {/* Browser dots */}
    <circle cx="64" cy="40" r="5" fill="#FF6B6B"/>
    <circle cx="82" cy="40" r="5" fill="#FFD93D"/>
    <circle cx="100" cy="40" r="5" fill="#6BCB77"/>
    {/* Address bar */}
    <rect x="120" cy="30" y="30" width="260" height="20" rx="10" fill="#FFFFFF" stroke="#E2E4E7" strokeWidth="1"/>
    {/* Content blocks */}
    <rect x="60" y="80" width="320" height="16" rx="3" fill="#E2E4E7"/>
    <rect x="60" y="106" width="200" height="10" rx="3" fill="#C6C9CD"/>
    <rect x="60" y="126" width="280" height="10" rx="3" fill="#E2E4E7"/>
    {/* Cards */}
    <rect x="60" y="160" width="145" height="100" rx="8" fill="#FFFFFF" stroke="#8159BB" strokeWidth="1.5"/>
    <rect x="235" y="160" width="145" height="100" rx="8" fill="#FFFFFF" stroke="#CB0C9F" strokeWidth="1.5"/>
    <rect x="72" y="172" width="80" height="8" rx="2" fill="#8159BB"/>
    <rect x="72" y="188" width="120" height="6" rx="2" fill="#E2E4E7"/>
    <rect x="72" y="200" width="100" height="6" rx="2" fill="#E2E4E7"/>
    <rect x="72" y="220" width="60" height="16" rx="4" fill="#8159BB" fillOpacity="0.15"/>
    <rect x="247" y="172" width="80" height="8" rx="2" fill="#CB0C9F"/>
    <rect x="247" y="188" width="120" height="6" rx="2" fill="#E2E4E7"/>
    <rect x="247" y="200" width="100" height="6" rx="2" fill="#E2E4E7"/>
    <rect x="247" y="220" width="60" height="16" rx="4" fill="#CB0C9F" fillOpacity="0.15"/>
    {/* AI sparkle */}
    <circle cx="380" cy="20" r="18" fill="url(#aiGrad)" fillOpacity="0.9"/>
    <text x="380" y="26" textAnchor="middle" fill="#FFFFFF" fontSize="14" fontWeight="700" fontFamily="Josefin Sans, sans-serif">AI</text>
    {/* Wand accent */}
    <line x1="350" y1="50" x2="395" y2="5" stroke="url(#aiGrad)" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="397" cy="3" r="3" fill="#7671FF"/>
    <defs>
      <linearGradient id="aiGrad" x1="362" y1="2" x2="398" y2="38" gradientUnits="userSpaceOnUse">
        <stop stopColor="#7671FF"/><stop offset="1" stopColor="#CB0C9F"/>
      </linearGradient>
    </defs>
  </svg>
)

const categoryIllustrationColors = {
  'websites': { primary: '#8159BB', secondary: '#B794D6' },
  'landing-pages': { primary: '#7671FF', secondary: '#A8A4FF' },
  'portfolios': { primary: '#CB0C9F', secondary: '#E06CC0' },
  'blogs': { primary: '#8159BB', secondary: '#B794D6' },
  'stores': { primary: '#7671FF', secondary: '#A8A4FF' },
  'link-in-bio': { primary: '#CB0C9F', secondary: '#E06CC0' },
}

const CategoryIllustration = ({ categoryId }) => {
  const colors = categoryIllustrationColors[categoryId] || categoryIllustrationColors['websites']
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="category-illustration">
      <rect x="4" y="8" width="40" height="28" rx="4" fill={colors.primary} fillOpacity="0.1" stroke={colors.primary} strokeWidth="1.5"/>
      <rect x="4" y="8" width="40" height="8" rx="4" fill={colors.primary} fillOpacity="0.15"/>
      <circle cx="12" cy="12" r="2" fill={colors.primary} fillOpacity="0.4"/>
      <circle cx="18" cy="12" r="2" fill={colors.primary} fillOpacity="0.4"/>
      <circle cx="24" cy="12" r="2" fill={colors.primary} fillOpacity="0.4"/>
      <rect x="10" y="20" width="28" height="3" rx="1.5" fill={colors.primary} fillOpacity="0.3"/>
      <rect x="10" y="26" width="18" height="3" rx="1.5" fill={colors.primary} fillOpacity="0.2"/>
      <rect x="10" y="32" width="22" height="3" rx="1.5" fill={colors.primary} fillOpacity="0.15"/>
      <rect x="16" y="40" width="16" height="4" rx="2" fill={colors.secondary} fillOpacity="0.3"/>
      <circle cx="38" cy="6" r="4" fill={colors.primary} fillOpacity="0.2"/>
      <text x="38" y="9" textAnchor="middle" fill={colors.primary} fontSize="5" fontWeight="700">AI</text>
    </svg>
  )
}

// ─── Section Components ─────────────────────────────────────────────────────

function TopBar() {
  return (
    <header className="topbar">
      <div className="topbar-inner">
        <a href="/" className="topbar-logo" aria-label="Strikingly home">
          <span className="topbar-logo-text">{s.logoText}</span>
          <span className="topbar-logo-ai">{s.logoSuffix}</span>
        </a>
      </div>
    </header>
  )
}

function Breadcrumb() {
  return (
    <nav aria-label="Breadcrumb" className="breadcrumb">
      <ol className="breadcrumb-list">
        <li className="breadcrumb-item">
          <a href="/" className="breadcrumb-link">{s.breadcrumbHome}</a>
        </li>
        <li className="breadcrumb-item breadcrumb-current" aria-current="page">
          {s.breadcrumbCurrent}
        </li>
      </ol>
    </nav>
  )
}

function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-heading">
      <div className="hero-inner">
        <div className="hero-content">
          <h1 id="hero-heading" className="hero-heading">
            <span className="hero-line1">{s.heroLine1}</span>
            <span className="hero-line2">{s.heroLine2}</span>
          </h1>
          <p className="hero-subheadline">{s.heroSubheadline}</p>
          <div className="hero-ctas">
            <a href={s.heroPrimaryCtaHref} className="btn btn-primary btn-large">{s.heroPrimaryCta}</a>
            <a href="#all-generators" className="btn btn-ghost btn-large">{s.heroSecondaryCta}</a>
          </div>
        </div>
        <div className="hero-illustration-wrapper">
          <HeroIllustration />
        </div>
      </div>
    </section>
  )
}

function FeaturedGenerators() {
  return (
    <section className="section featured-section" aria-labelledby="featured-heading">
      <div className="section-inner">
        <div className="section-header">
          <h2 id="featured-heading" className="section-title">{s.featuredTitle}</h2>
          <p className="section-subtitle">{s.featuredSubtitle}</p>
        </div>
        <div className="featured-grid">
          {s.featuredGenerators.map((gen) => (
            <a key={gen.slug} href={`/generators/${gen.slug}`} className="featured-card" aria-label={`${gen.name} — ${gen.category}`}>
              <div className="featured-card-content">
                <span className="featured-card-tag">{gen.category}</span>
                <h3 className="featured-card-name">{gen.name}</h3>
                <p className="featured-card-desc">{gen.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

function BrowseByCategory() {
  return (
    <section className="section browse-section" aria-labelledby="browse-heading">
      <div className="section-inner">
        <div className="section-header">
          <h2 id="browse-heading" className="section-title">{s.browseByCategoryTitle}</h2>
        </div>
        <div className="category-grid">
          {s.categories.map((cat) => {
            const Icon = categoryIcons[cat.slug] || GlobeIcon
            return (
              <a key={cat.slug} href={cat.anchor} className="category-card">
                <div className="category-card-icon"><Icon /></div>
                <h3 className="category-card-name">{cat.name}</h3>
                <p className="category-card-desc">{cat.description}</p>
                <span className="category-card-arrow"><ArrowRightIcon /></span>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function GeneratorCard({ generator, categoryId }) {
  return (
    <a href={`/generators/${generator.slug}`} className="generator-card">
      <div className="generator-card-thumb">
        <CategoryIllustration categoryId={categoryId} />
      </div>
      <h4 className="generator-card-name">{generator.name}</h4>
      <p className="generator-card-desc">{generator.description}</p>
    </a>
  )
}

function CategorySubsection({ section, searchQuery }) {
  const [showAll, setShowAll] = useState(false)
  const [hydrated, setHydrated] = useState(false)
  const INITIAL_VISIBLE = 6
  const hasExtra = section.generators.length > INITIAL_VISIBLE

  useEffect(() => {
    // Progressive enhancement: collapse extras after hydration
    setHydrated(true)
  }, [])

  const filteredGenerators = searchQuery
    ? section.generators.filter((gen) => {
        const q = searchQuery.toLowerCase()
        return (
          gen.name.toLowerCase().includes(q) ||
          gen.description.toLowerCase().includes(q) ||
          section.title.toLowerCase().includes(q)
        )
      })
    : section.generators

  if (searchQuery && filteredGenerators.length === 0) {
    return null
  }

  // Only collapse after JS hydrates; SSR renders all visible
  const collapseActive = hydrated && !searchQuery && hasExtra && !showAll

  return (
    <div className="directory-subsection" id={section.id}>
      <div className="directory-subsection-header">
        <h3 className="directory-subsection-title">{section.title}</h3>
        <p className="directory-subsection-desc">{section.description}</p>
      </div>
      <div
        className={`generator-grid ${collapseActive ? 'generator-grid--collapsed' : ''}`}
        id={`${section.id}-grid`}
      >
        {filteredGenerators.map((gen, i) => (
          <div
            key={gen.slug}
            className={`generator-card-wrapper ${collapseActive && i >= INITIAL_VISIBLE ? 'generator-card-wrapper--hidden' : ''}`}
          >
            <GeneratorCard generator={gen} categoryId={section.id} />
          </div>
        ))}
      </div>
      {hydrated && (!searchQuery && hasExtra) && (
        <button
          className="show-all-btn"
          onClick={() => setShowAll(!showAll)}
          aria-expanded={showAll}
          aria-controls={`${section.id}-grid`}
          type="button"
        >
          {showAll ? s.hideExtraGenerators : s.showAllGenerators(section.generators.length)}
        </button>
      )}
    </div>
  )
}

function AllGenerators() {
  const [searchQuery, setSearchQuery] = useState('')
  const [debouncedQuery, setDebouncedQuery] = useState('')
  const debounceRef = useRef(null)

  const handleSearchChange = useCallback((e) => {
    const value = e.target.value
    setSearchQuery(value)
    if (debounceRef.current) clearTimeout(debounceRef.current)
    debounceRef.current = setTimeout(() => setDebouncedQuery(value), 150)
  }, [])

  const clearSearch = useCallback(() => {
    setSearchQuery('')
    setDebouncedQuery('')
  }, [])

  const allGenerators = s.categorySubsections.flatMap((section) =>
    section.generators.map((gen) => ({ ...gen, categoryTitle: section.title }))
  )

  const filteredCount = debouncedQuery
    ? allGenerators.filter((gen) => {
        const q = debouncedQuery.toLowerCase()
        return (
          gen.name.toLowerCase().includes(q) ||
          gen.description.toLowerCase().includes(q) ||
          gen.categoryTitle.toLowerCase().includes(q)
        )
      }).length
    : allGenerators.length

  const hasResults = !debouncedQuery || filteredCount > 0

  return (
    <section className="section all-generators-section" id="all-generators" aria-labelledby="all-generators-heading">
      <div className="section-inner">
        <div className="section-header">
          <h2 id="all-generators-heading" className="section-title">{s.allGeneratorsTitle}</h2>
          <p className="section-subtitle">{s.allGeneratorsSubtitle}</p>
        </div>

        <div className="search-container">
          <div className="search-input-wrapper">
            <span className="search-icon"><SearchIcon /></span>
            <input
              type="search"
              className="search-input"
              placeholder={s.searchPlaceholder}
              aria-label={s.searchAriaLabel}
              value={searchQuery}
              onChange={handleSearchChange}
            />
            {searchQuery && (
              <button className="search-clear-btn" onClick={clearSearch} aria-label={s.clearSearch} type="button">
                &times;
              </button>
            )}
          </div>
          {debouncedQuery && (
            <p className="search-result-count" aria-live="polite">
              {s.searchResultCount(filteredCount)}
            </p>
          )}
        </div>

        {hasResults ? (
          <div className="directory-sections">
            {s.categorySubsections.map((section) => (
              <CategorySubsection
                key={section.id}
                section={section}
                searchQuery={debouncedQuery}
              />
            ))}
          </div>
        ) : (
          <div className="search-empty-state">
            <p className="empty-state-heading">{s.emptyStateHeading}</p>
            <button className="btn btn-ghost" onClick={clearSearch} type="button">{s.clearSearch}</button>
            <p className="empty-state-cta">
              {s.emptyStateCta}{' '}
              <a href={s.emptyStateCtaHref} className="empty-state-link">Start building now</a>.
            </p>
          </div>
        )}
      </div>
    </section>
  )
}

function HowItWorks() {
  return (
    <section className="section how-section" aria-labelledby="how-heading">
      <div className="section-inner">
        <div className="section-header">
          <h2 id="how-heading" className="section-title">{s.howItWorksTitle}</h2>
        </div>
        <div className="how-steps">
          {s.howItWorksSteps.map((step) => (
            <div key={step.number} className="how-step">
              <span className="how-step-number">{step.number}</span>
              <h3 className="how-step-title">{step.title}</h3>
              <p className="how-step-desc">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function WhyStrikingly() {
  return (
    <section className="section why-section" aria-labelledby="why-heading">
      <div className="section-inner">
        <div className="section-header">
          <h2 id="why-heading" className="section-title">{s.whyStrikinglyTitle}</h2>
        </div>
        <div className="why-grid">
          {s.whyStrikinglyReasons.map((reason, i) => {
            const Icon = whyIcons[i]
            return (
              <div key={reason.title} className="why-card">
                <div className="why-card-icon"><Icon /></div>
                <h3 className="why-card-title">{reason.title}</h3>
                <p className="why-card-desc">{reason.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  const toggleFAQ = useCallback((index) => {
    setOpenIndex((prev) => (prev === index ? -1 : index))
  }, [])

  return (
    <section className="section faq-section" aria-labelledby="faq-heading">
      <div className="section-inner">
        <div className="section-header">
          <h2 id="faq-heading" className="section-title">{s.faqTitle}</h2>
        </div>
        <div className="faq-list" role="list">
          {s.faqs.map((faq, i) => {
            const isOpen = openIndex === i
            const contentId = `faq-content-${i}`
            const buttonId = `faq-button-${i}`
            return (
              <div key={i} className={`faq-item ${isOpen ? 'open' : ''}`} role="listitem">
                <button
                  id={buttonId}
                  className="faq-button"
                  onClick={() => toggleFAQ(i)}
                  aria-expanded={isOpen}
                  aria-controls={contentId}
                  type="button"
                >
                  <span className="faq-question">{faq.question}</span>
                  <span className={`faq-icon ${isOpen ? 'rotated' : ''}`}><ChevronDownIcon /></span>
                </button>
                <div
                  id={contentId}
                  className={`faq-content ${isOpen ? 'open' : ''}`}
                  role="region"
                  aria-labelledby={buttonId}
                >
                  <p className="faq-answer">{faq.answer}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function ClosingCTA() {
  return (
    <section className="section closing-cta-section" aria-labelledby="closing-heading">
      <div className="section-inner closing-cta-inner">
        <h2 id="closing-heading" className="closing-cta-title">{s.closingCtaTitle}</h2>
        <p className="closing-cta-subtitle">{s.closingCtaSubtitle}</p>
        <a href={s.closingCtaHref} className="btn btn-primary btn-large">{s.closingCtaButton}</a>
      </div>
    </section>
  )
}

function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <span className="footer-logo-text">{s.logoText}</span>
            <p className="footer-tagline">{s.footerTagline}</p>
          </div>
          <div className="footer-columns">
            <div className="footer-column">
              <h4 className="footer-column-title">Product</h4>
              <ul className="footer-link-list">
                {s.footerLinks.product.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="footer-link">{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="footer-column">
              <h4 className="footer-column-title">Resources</h4>
              <ul className="footer-link-list">
                {s.footerLinks.resources.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="footer-link">{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="footer-column">
              <h4 className="footer-column-title">Company</h4>
              <ul className="footer-link-list">
                {s.footerLinks.company.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="footer-link">{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="footer-column">
              <h4 className="footer-column-title">Legal</h4>
              <ul className="footer-link-list">
                {s.footerLinks.legal.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="footer-link">{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="footer-copyright">{s.footerCopyright(year)}</p>
        </div>
      </div>
    </footer>
  )
}

// ─── Main Page ──────────────────────────────────────────────────────────────

export default function GeneratorsHub() {
  return (
    <div className="generators-hub">
      <TopBar />
      <Breadcrumb />
      <main>
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
    </div>
  )
}
