import { useEffect, useRef, useState, useCallback } from 'react'
import { en } from './strings/en.js'
import { generators, featuredGenerators } from './data/generators.js'

const strings = en

// SVG Icons as components
const SearchIcon = () => (
  <svg className="search-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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

const ChevronDownIcon = ({ open }) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s ease' }}>
    <polyline points="6 9 12 15 18 9" />
  </svg>
)

const ClockIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
)

const SmartphoneIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
    <line x1="12" y1="18" x2="12.01" y2="18" />
  </svg>
)

const GiftIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="20 12 20 22 4 22 4 12" />
    <rect x="2" y="7" width="20" height="5" />
    <line x1="12" y1="22" x2="12" y2="7" />
    <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
    <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
  </svg>
)

// Category icons for Browse by Category
const WebsiteIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
    <line x1="8" y1="21" x2="16" y2="21" />
    <line x1="12" y1="17" x2="12" y2="21" />
  </svg>
)

const LandingPageIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 2L2 7l10 5 10-5-10-5z" />
    <path d="M2 17l10 5 10-5" />
    <path d="M2 12l10 5 10-5" />
  </svg>
)

const PortfolioIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
  </svg>
)

const BlogIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    <line x1="8" y1="7" x2="16" y2="7" />
    <line x1="8" y1="11" x2="14" y2="11" />
  </svg>
)

const StoreIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
    <line x1="3" y1="6" x2="21" y2="6" />
    <path d="M16 10a4 4 0 0 1-8 0" />
  </svg>
)

const LinkIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
  </svg>
)

// Generic thumbnail icon for subsection cards
const ThumbIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
    <circle cx="8.5" cy="8.5" r="1.5" />
    <polyline points="21 15 16 10 5 21" />
  </svg>
)

const categoryIcons = {
  websites: WebsiteIcon,
  'landing-pages': LandingPageIcon,
  portfolios: PortfolioIcon,
  blogs: BlogIcon,
  stores: StoreIcon,
  'link-in-bio': LinkIcon,
}

// Top Bar
function TopBar() {
  return (
    <header className="top-bar">
      <div className="content-container">
        <span className="top-bar-logo">{strings.topBarLogo}</span>
      </div>
    </header>
  )
}

// Breadcrumb
function Breadcrumb() {
  return (
    <nav className="content-container" style={{ paddingTop: 15, paddingBottom: 15 }} aria-label="Breadcrumb">
      <ol className="breadcrumb" style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', alignItems: 'center' }}>
        <li>
          <a href="/">{strings.breadcrumbHome}</a>
        </li>
        <li className="breadcrumb-separator" aria-hidden="true">&gt;</li>
        <li aria-current="page">{strings.breadcrumbCurrent}</li>
      </ol>
    </nav>
  )
}

// Hero Section
function HeroSection() {
  return (
    <section style={{ padding: '60px 0 80px', background: 'linear-gradient(180deg, rgba(118,113,255,0.04) 0%, rgba(203,12,159,0.02) 100%)' }}>
      <div className="content-container">
        <div style={{ display: 'flex', gap: 40, alignItems: 'center', flexWrap: 'wrap' }}>
          <div style={{ flex: '1 1 400px', minWidth: 280 }}>
            <h1 style={{ fontSize: 'clamp(28px, 4vw, 44px)', marginBottom: 16 }}>
              <span style={{ color: 'var(--hero-heading)', display: 'block' }}>{strings.heroH1Line1}</span>
              <span className="ai-gradient-text" style={{ display: 'block' }}>{strings.heroH1Line2}</span>
            </h1>
            <p style={{ fontSize: 16, color: 'var(--body-text)', lineHeight: 1.6, marginBottom: 24, maxWidth: 480 }}>
              {strings.heroSubheadline}
            </p>
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              <a
                href="/s/ai_site_builder"
                className="ai-gradient-btn"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: 44,
                  padding: '0 24px',
                  borderRadius: 4,
                  fontSize: 14,
                  fontWeight: 700,
                  fontFamily: "'Josefin Sans', 'Poppins', system-ui, sans-serif",
                  textTransform: 'uppercase',
                  color: '#FFFFFF',
                  textDecoration: 'none',
                }}
              >
                {strings.heroCtaPrimary}
              </a>
              <a
                href="#all-generators"
                className="ghost-btn"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: 36,
                  padding: '0 15px',
                  borderRadius: 4,
                  fontSize: 14,
                  fontWeight: 700,
                  fontFamily: "'Josefin Sans', 'Poppins', system-ui, sans-serif",
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                }}
              >
                {strings.heroCtaSecondary}
              </a>
            </div>
          </div>
          <div style={{ flex: '1 1 300px', minWidth: 280, display: 'flex', justifyContent: 'center' }}>
            <svg className="hero-illustration" width="480" height="320" viewBox="0 0 480 320" fill="none" aria-hidden="true">
              <rect x="40" y="40" width="400" height="240" rx="8" stroke="#8159BB" strokeWidth="1.5" fill="none" opacity="0.3" />
              <rect x="60" y="60" width="360" height="30" rx="4" fill="#8159BB" opacity="0.1" />
              <rect x="60" y="100" width="160" height="12" rx="2" fill="#8159BB" opacity="0.15" />
              <rect x="60" y="120" width="200" height="8" rx="2" fill="#8159BB" opacity="0.08" />
              <rect x="60" y="136" width="180" height="8" rx="2" fill="#8159BB" opacity="0.08" />
              <rect x="60" y="160" width="100" height="40" rx="4" fill="#7671FF" opacity="0.2" />
              <rect x="170" y="160" width="100" height="40" rx="4" fill="#CB0C9F" opacity="0.15" />
              <rect x="60" y="220" width="360" height="40" rx="4" fill="#8159BB" opacity="0.06" />
              <circle cx="400" cy="75" r="8" fill="#8159BB" opacity="0.2" />
              <circle cx="375" cy="75" r="8" fill="#8159BB" opacity="0.15" />
              <circle cx="350" cy="75" r="8" fill="#8159BB" opacity="0.1" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}

// Featured Generators
function FeaturedSection() {
  return (
    <section className="section-spacing">
      <div className="content-container">
        <h2 style={{ fontSize: 'clamp(22px, 3vw, 28px)', marginBottom: 8 }}>{strings.featuredHeading}</h2>
        <p style={{ marginBottom: 24, color: 'var(--body-text)' }}>{strings.featuredSubheading}</p>
        <div className="grid-3">
          {featuredGenerators.map((gen) => (
            <a
              key={gen.slug}
              href={`/generators/${gen.slug}`}
              className="generator-card"
              style={{ display: 'flex', flexDirection: 'column', gap: 8, textDecoration: 'none', color: 'inherit' }}
            >
              <span style={{ fontWeight: 700, fontSize: 15, color: 'var(--heading-text)' }}>{gen.name}</span>
              <span style={{ fontSize: 13, color: 'var(--body-text)' }}>{gen.description}</span>
              <span className="category-tag" style={{ marginTop: 4, alignSelf: 'flex-start' }}>{gen.category}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

// Browse by Category
function BrowseByCategory() {
  return (
    <section className="section-spacing" style={{ background: 'var(--light-bg)' }}>
      <div className="content-container">
        <h2 style={{ fontSize: 'clamp(22px, 3vw, 28px)', marginBottom: 24 }}>{strings.browseHeading}</h2>
        <div className="grid-3">
          {strings.categories.map((cat) => {
            const IconComponent = categoryIcons[cat.id] || WebsiteIcon
            return (
              <a
                key={cat.id}
                href={`#${cat.id}`}
                className="category-card"
              >
                <div className="category-card-icon">
                  <IconComponent />
                </div>
                <span style={{ fontWeight: 700, fontSize: 15, color: 'var(--heading-text)', marginBottom: 6 }}>{cat.name}</span>
                <span style={{ fontSize: 13, color: 'var(--body-text)', marginBottom: 12 }}>{cat.description}</span>
                <div className="category-card-arrow">
                  <ArrowRightIcon />
                </div>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// Subsection card component
function SubsectionCard({ gen }) {
  return (
    <a
      href={`/generators/${gen.slug}`}
      className="generator-card"
      style={{ display: 'flex', flexDirection: 'column', gap: 8, textDecoration: 'none', color: 'inherit' }}
    >
      <div className="subsection-card-thumb">
        <ThumbIcon />
      </div>
      <span style={{ fontWeight: 700, fontSize: 15, color: 'var(--heading-text)' }}>{gen.name}</span>
      <span style={{ fontSize: 13, color: 'var(--body-text)' }}>{gen.description}</span>
    </a>
  )
}

// Subsection with Show All toggle
function GeneratorSubsection({ categoryId, title, description, items }) {
  const [expanded, setExpanded] = useState(false)
  const INITIAL_COUNT = 6
  const visibleItems = expanded ? items : items.slice(0, INITIAL_COUNT)
  const remaining = items.length - INITIAL_COUNT

  return (
    <div id={categoryId} style={{ marginBottom: 40 }}>
      <h3 style={{ fontSize: 'clamp(18px, 2.5vw, 22px)', marginBottom: 6 }}>{title}</h3>
      <p style={{ marginBottom: 20, color: 'var(--body-text)', fontSize: 14 }}>{description}</p>
      <div className="grid-3">
        {visibleItems.map((gen) => (
          <SubsectionCard key={gen.slug} gen={gen} />
        ))}
      </div>
      {remaining > 0 && (
        <div style={{ marginTop: 16 }}>
          <button
            className="ghost-btn"
            style={{
              height: 36,
              padding: '0 15px',
              borderRadius: 4,
              fontSize: 13,
              fontWeight: 700,
              fontFamily: "'Josefin Sans', 'Poppins', system-ui, sans-serif",
              textTransform: 'uppercase',
            }}
            onClick={() => setExpanded(!expanded)}
            aria-expanded={expanded}
            aria-controls={`${categoryId}-grid`}
          >
            {expanded ? strings.showLess : strings.showAll(items.length)}
          </button>
        </div>
      )}
    </div>
  )
}

// All Generators with Search
function AllGenerators() {
  const [searchQuery, setSearchQuery] = useState('')
  const [filteredCategories, setFilteredCategories] = useState(null)

  const handleSearch = useCallback((e) => {
    const query = e.target.value.toLowerCase().trim()
    setSearchQuery(query)

    if (!query) {
      setFilteredCategories(null)
      return
    }

    const filtered = {}
    let totalMatches = 0

    for (const [catId, items] of Object.entries(generators)) {
      const matching = items.filter(
        (gen) =>
          gen.name.toLowerCase().includes(query) ||
          gen.description.toLowerCase().includes(query) ||
          catId.toLowerCase().includes(query)
      )
      if (matching.length > 0) {
        filtered[catId] = matching
        totalMatches += matching.length
      }
    }

    setFilteredCategories({ data: filtered, total: totalMatches })
  }, [])

  const clearSearch = useCallback(() => {
    setSearchQuery('')
    setFilteredCategories(null)
  }, [])

  const categoriesToRender = filteredCategories ? filteredCategories.data : generators
  const totalMatchCount = filteredCategories ? filteredCategories.total : null

  const noResults = filteredCategories && filteredCategories.total === 0

  return (
    <section id="all-generators" className="section-spacing">
      <div className="content-container">
        <h2 style={{ fontSize: 'clamp(22px, 3vw, 28px)', marginBottom: 8 }}>{strings.allGeneratorsHeading}</h2>
        <p style={{ marginBottom: 24, color: 'var(--body-text)' }}>{strings.allGeneratorsSubheading}</p>

        <div style={{ marginBottom: 30 }}>
          <div className="search-input-wrapper">
            <SearchIcon />
            <input
              type="search"
              placeholder={strings.searchPlaceholder}
              aria-label={strings.searchLabel}
              value={searchQuery}
              onChange={handleSearch}
            />
          </div>
          {searchQuery && (
            <div style={{ marginTop: 10, fontSize: 13, color: 'var(--body-text)' }}>
              {noResults ? (
                <div>
                  <p style={{ fontWeight: 600, marginBottom: 8 }}>{strings.noResultsTitle}</p>
                  <p style={{ marginBottom: 10 }}>{strings.noResultsText}</p>
                  <div style={{ display: 'flex', gap: 10, alignItems: 'center', flexWrap: 'wrap' }}>
                    <button
                      className="ghost-btn"
                      style={{
                        height: 36,
                        padding: '0 15px',
                        borderRadius: 4,
                        fontSize: 13,
                        fontWeight: 700,
                        fontFamily: "'Josefin Sans', 'Poppins', system-ui, sans-serif",
                        textTransform: 'uppercase',
                      }}
                      onClick={clearSearch}
                    >
                      {strings.clearSearch}
                    </button>
                    <a
                      href="/s/ai_site_builder"
                      className="ai-gradient-btn"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: 36,
                        padding: '0 15px',
                        borderRadius: 4,
                        fontSize: 13,
                        fontWeight: 700,
                        fontFamily: "'Josefin Sans', 'Poppins', system-ui, sans-serif",
                        textTransform: 'uppercase',
                        color: '#FFFFFF',
                        textDecoration: 'none',
                      }}
                    >
                      {strings.noResultsCta}
                    </a>
                  </div>
                </div>
              ) : (
                <span>{strings.searchResultsCount(totalMatchCount)}</span>
              )}
            </div>
          )}
        </div>

        {noResults ? null : (
          <div>
            {strings.categories.map((cat) => {
              const catItems = categoriesToRender[cat.id]
              if (!catItems || catItems.length === 0) return null
              return (
                <GeneratorSubsection
                  key={cat.id}
                  categoryId={cat.id}
                  title={cat.name}
                  description={cat.description}
                  items={catItems}
                />
              )
            })}
          </div>
        )}
      </div>
    </section>
  )
}

// How It Works
function HowItWorks() {
  return (
    <section className="section-spacing" style={{ background: 'var(--light-bg)' }}>
      <div className="content-container">
        <h2 style={{ fontSize: 'clamp(22px, 3vw, 28px)', marginBottom: 30, textAlign: 'center' }}>{strings.howItWorksHeading}</h2>
        <div style={{ display: 'flex', gap: 30, flexWrap: 'wrap', justifyContent: 'center' }}>
          {strings.howItWorksSteps.map((step, i) => (
            <div key={i} style={{ flex: '1 1 280px', maxWidth: 360, textAlign: 'center' }}>
              <div className="step-circle" style={{ margin: '0 auto 16px' }}>{i + 1}</div>
              <h3 style={{ fontSize: 15, marginBottom: 8, color: 'var(--heading-text)' }}>{step.title}</h3>
              <p style={{ fontSize: 14, color: 'var(--body-text)', lineHeight: 1.6 }}>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Why Strikingly
function WhyStrikingly() {
  const icons = [ClockIcon, SmartphoneIcon, GiftIcon]
  return (
    <section className="section-spacing">
      <div className="content-container">
        <h2 style={{ fontSize: 'clamp(22px, 3vw, 28px)', marginBottom: 30, textAlign: 'center' }}>{strings.whyStrikinglyHeading}</h2>
        <div className="grid-3">
          {strings.whyStrikinglyItems.map((item, i) => {
            const IconComponent = icons[i]
            return (
              <div key={i} style={{ textAlign: 'center', padding: '0 10px' }}>
                <div className="benefit-icon" style={{ margin: '0 auto 12px' }}>
                  <IconComponent />
                </div>
                <h3 style={{ fontSize: 15, marginBottom: 8, color: 'var(--heading-text)' }}>{item.title}</h3>
                <p style={{ fontSize: 14, color: 'var(--body-text)', lineHeight: 1.6 }}>{item.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// FAQ
function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="section-spacing" style={{ background: 'var(--light-bg)' }}>
      <div className="content-container" style={{ maxWidth: 720 }}>
        <h2 style={{ fontSize: 'clamp(22px, 3vw, 28px)', marginBottom: 24, textAlign: 'center' }}>{strings.faqHeading}</h2>
        <div>
          {strings.faqItems.map((item, i) => (
            <div key={i} className="faq-item">
              <button
                className="faq-button"
                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                aria-expanded={openIndex === i}
                aria-controls={`faq-answer-${i}`}
              >
                <span>{item.question}</span>
                <ChevronDownIcon open={openIndex === i} />
              </button>
              <div
                id={`faq-answer-${i}`}
                className={`faq-answer ${openIndex === i ? 'open' : ''}`}
                role="region"
                aria-labelledby={`faq-question-${i}`}
              >
                <div className="faq-answer-inner">
                  {item.answer.split('\n\n').map((p, j) => (
                    <p key={j}>{p}</p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Closing CTA
function ClosingCTA() {
  return (
    <section className="section-spacing" style={{ textAlign: 'center' }}>
      <div className="content-container">
        <h2 style={{ fontSize: 'clamp(22px, 3vw, 28px)', marginBottom: 12 }}>{strings.closingHeading}</h2>
        <p style={{ marginBottom: 24, color: 'var(--body-text)', fontSize: 16, maxWidth: 480, marginInline: 'auto' }}>{strings.closingSub}</p>
        <a
          href="/s/ai_site_builder"
          className="ai-gradient-btn"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: 44,
            padding: '0 24px',
            borderRadius: 4,
            fontSize: 14,
            fontWeight: 700,
            fontFamily: "'Josefin Sans', 'Poppins', system-ui, sans-serif",
            textTransform: 'uppercase',
            color: '#FFFFFF',
            textDecoration: 'none',
          }}
        >
          {strings.closingCta}
        </a>
      </div>
    </section>
  )
}

// Footer
function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="content-container">
        <div style={{ marginBottom: 30 }}>
          <span className="top-bar-logo">{strings.topBarLogo}</span>
        </div>
        <div className="footer-grid">
          <div>
            <h4 className="footer-heading">{strings.footerProduct}</h4>
            <ul className="footer-links">
              <li><a href="/pricing">{strings.footerPricing}</a></li>
              <li><a href="/templates">{strings.footerTemplates}</a></li>
            </ul>
          </div>
          <div>
            <h4 className="footer-heading">{strings.footerCompany}</h4>
            <ul className="footer-links">
              <li><a href="/about">{strings.footerAbout}</a></li>
              <li><a href="/blog">{strings.footerBlog}</a></li>
            </ul>
          </div>
          <div>
            <h4 className="footer-heading">{strings.footerSupport}</h4>
            <ul className="footer-links">
              <li><a href="/support">{strings.footerHelpCenter}</a></li>
              <li><a href="/support">{strings.footerContact}</a></li>
            </ul>
          </div>
          <div>
            <h4 className="footer-heading">{strings.footerLegal}</h4>
            <ul className="footer-links">
              <li><a href="/terms">{strings.footerTerms}</a></li>
              <li><a href="/privacy">{strings.footerPrivacy}</a></li>
            </ul>
          </div>
        </div>
        <div style={{ marginTop: 30, paddingTop: 20, borderTop: '1px solid var(--divider)', fontSize: 12, color: 'var(--body-text)' }}>
          {strings.footerCopyright(year)}
        </div>
      </div>
    </footer>
  )
}

// Main App
function App() {
  return (
    <>
      <TopBar />
      <Breadcrumb />
      <main>
        <HeroSection />
        <FeaturedSection />
        <BrowseByCategory />
        <AllGenerators />
        <HowItWorks />
        <WhyStrikingly />
        <FAQ />
        <ClosingCTA />
      </main>
      <Footer />
    </>
  )
}

export default App
