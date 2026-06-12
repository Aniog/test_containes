import { useEffect, useRef, useState, useCallback } from 'react'
import {
  strings,
  featuredGenerators,
  categories,
  allGenerators,
} from '../components/generators/data'
import {
  HeroIllustration,
  CategoryIcons,
  WhyIcons,
  SubsectionThumbs,
  StrikinglyLogo,
  ChevronDown,
  ArrowRight,
  SearchIcon,
} from '../components/generators/Illustrations'

const s = strings.en

// ─── Utility: slugify a name to a URL slug ────────────────────────────────────
function toSlug(name) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
}

// ─── TopBar ───────────────────────────────────────────────────────────────────
function TopBar() {
  return (
    <div className="top-bar" role="banner">
      <div className="content-container" style={{ padding: '0 20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', height: '56px' }}>
          <a href="/" aria-label="Strikingly home" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
            <StrikinglyLogo />
          </a>
        </div>
      </div>
    </div>
  )
}

// ─── Breadcrumb ───────────────────────────────────────────────────────────────
function Breadcrumb() {
  return (
    <div style={{ borderBottom: '1px solid #E2E4E7', background: '#ffffff' }}>
      <div className="content-container" style={{ padding: '10px 20px' }}>
        <nav className="breadcrumb-nav" aria-label="Breadcrumb">
          <ol style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '2px' }}>
            <li>
              <a href="/">{s.breadcrumb.home}</a>
            </li>
            <li aria-hidden="true">
              <span className="breadcrumb-sep">›</span>
            </li>
            <li>
              <span aria-current="page" style={{ color: '#4B5056', fontWeight: 600 }}>
                {s.breadcrumb.current}
              </span>
            </li>
          </ol>
        </nav>
      </div>
    </div>
  )
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="hero-section" aria-labelledby="hero-heading" style={{ padding: '70px 0 60px' }}>
      <div className="content-container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '40px',
          alignItems: 'center',
        }}
          className="hero-grid"
        >
          {/* Left column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <h1
              id="hero-heading"
              className="font-heading"
              style={{
                margin: 0,
                fontSize: 'clamp(28px, 5vw, 48px)',
                lineHeight: 1.15,
                color: '#2E2E2F',
              }}
            >
              <span style={{ display: 'block', color: '#2E2E2F' }}>
                {s.hero.h1Line1}
              </span>
              <span className="ai-gradient-text" style={{ display: 'block' }}>
                {s.hero.h1Line2}
              </span>
            </h1>
            <p style={{
              margin: 0,
              fontSize: '16px',
              lineHeight: 1.6,
              color: '#636972',
              maxWidth: '480px',
            }}>
              {s.hero.subheadline}
            </p>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              <a
                href="/s/ai_site_builder"
                className="btn-primary btn-lg"
              >
                {s.hero.ctaPrimary}
              </a>
              <a
                href="#all-generators"
                className="btn-ghost btn-lg"
              >
                {s.hero.ctaSecondary}
              </a>
            </div>
          </div>
          {/* Right column: illustration */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} className="hero-illustration">
            <HeroIllustration />
          </div>
        </div>
      </div>
      <style>{`
        @media (min-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr 1fr !important;
          }
          .hero-illustration {
            order: 1;
          }
        }
      `}</style>
    </section>
  )
}

// ─── Featured Generators ──────────────────────────────────────────────────────
function FeaturedGenerators() {
  return (
    <section
      aria-labelledby="featured-heading"
      style={{ padding: '60px 0', background: '#F4F6F8' }}
    >
      <div className="content-container">
        <div style={{ marginBottom: '30px' }}>
          <h2 id="featured-heading" className="section-heading" style={{ margin: '0 0 8px' }}>
            {s.featured.heading}
          </h2>
          <p style={{ margin: 0, color: '#636972', fontSize: '14px' }}>
            {s.featured.subheading}
          </p>
        </div>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(1, 1fr)',
          gap: '20px',
        }}
          className="featured-grid"
        >
          {featuredGenerators.map((gen) => (
            <article key={gen.slug}>
              <a
                href={`/generators/${gen.slug}`}
                className="gen-card"
                aria-label={gen.name}
              >
                <span className="cat-tag">{gen.category}</span>
                <strong style={{ color: '#2E2E2F', fontSize: '15px', fontFamily: "'Josefin Sans', Poppins, sans-serif", fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.02em' }}>
                  {gen.name}
                </strong>
                <span style={{ color: '#636972', fontSize: '13px', lineHeight: 1.5 }}>
                  {gen.description}
                </span>
              </a>
            </article>
          ))}
        </div>
      </div>
      <style>{`
        @media (min-width: 600px) {
          .featured-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (min-width: 960px) {
          .featured-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
      `}</style>
    </section>
  )
}

// ─── Browse by Category ───────────────────────────────────────────────────────
function BrowseByCategory() {
  return (
    <section
      aria-labelledby="browse-heading"
      style={{ padding: '60px 0', background: '#ffffff' }}
    >
      <div className="content-container">
        <h2 id="browse-heading" className="section-heading" style={{ margin: '0 0 30px' }}>
          {s.browseByCategory.heading}
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(1, 1fr)',
          gap: '20px',
        }}
          className="browse-grid"
        >
          {categories.map((cat) => {
            const Icon = CategoryIcons[cat.id] || CategoryIcons.websites
            return (
              <a
                key={cat.id}
                href={`/generators#${cat.slug}`}
                className="cat-card"
                aria-label={`Browse ${cat.name} generators`}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '10px' }}>
                  <Icon />
                  <ArrowRight />
                </div>
                <strong style={{
                  color: '#2E2E2F',
                  fontSize: '14px',
                  fontFamily: "'Josefin Sans', Poppins, sans-serif",
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.04em',
                  display: 'block',
                }}>
                  {cat.name}
                </strong>
                <span style={{ color: '#636972', fontSize: '13px', lineHeight: 1.5 }}>
                  {cat.description}
                </span>
              </a>
            )
          })}
        </div>
      </div>
      <style>{`
        @media (min-width: 600px) {
          .browse-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (min-width: 960px) {
          .browse-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
      `}</style>
    </section>
  )
}

// ─── Generator Card (used in All Generators) ──────────────────────────────────
function GeneratorCard({ gen, isHidden }) {
  return (
    <article
      className={isHidden ? 'hidden-card' : ''}
      data-gen-name={gen.name.toLowerCase()}
      data-gen-desc={gen.description.toLowerCase()}
    >
      <a
        href={`/generators/${gen.slug}`}
        className="gen-card"
        aria-label={gen.name}
        style={{ height: '100%' }}
      >
        <strong style={{
          color: '#2E2E2F',
          fontSize: '14px',
          fontFamily: "'Josefin Sans', Poppins, sans-serif",
          fontWeight: 700,
          textTransform: 'uppercase',
          letterSpacing: '0.02em',
          lineHeight: 1.3,
        }}>
          {gen.name}
        </strong>
        <span style={{ color: '#636972', fontSize: '13px', lineHeight: 1.5 }}>
          {gen.description}
        </span>
      </a>
    </article>
  )
}

// ─── Category Subsection ──────────────────────────────────────────────────────
const INITIAL_VISIBLE = 6

function CategorySubsection({ section, searchQuery }) {
  const [expanded, setExpanded] = useState(false)
  const gridId = `grid-${section.categoryId}`
  const Thumb = SubsectionThumbs[section.categoryId] || SubsectionThumbs.websites

  const query = searchQuery.trim().toLowerCase()
  const matchingGenerators = query
    ? section.generators.filter(
        (g) =>
          g.name.toLowerCase().includes(query) ||
          g.description.toLowerCase().includes(query) ||
          section.categoryLabel.toLowerCase().includes(query)
      )
    : section.generators

  const hasMatches = matchingGenerators.length > 0
  const showToggle = !query && section.generators.length > INITIAL_VISIBLE

  return (
    <div
      id={section.categoryId}
      className={`category-subsection${!hasMatches && query ? ' search-hidden' : ''}`}
      style={{ scrollMarginTop: '70px' }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
        <Thumb />
        <div>
          <h3
            className="font-heading"
            style={{
              margin: 0,
              fontSize: '20px',
              color: '#4B5056',
              letterSpacing: '0.02em',
            }}
          >
            {section.categoryLabel}
          </h3>
          <p style={{ margin: 0, color: '#636972', fontSize: '13px' }}>
            {section.description}
          </p>
        </div>
      </div>

      <div
        id={gridId}
        className={`cards-grid-collapsible${expanded ? ' expanded' : ''}`}
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(1, 1fr)',
          gap: '16px',
          marginTop: '16px',
        }}
      >
        {matchingGenerators.map((gen, idx) => (
          <GeneratorCard
            key={gen.slug}
            gen={gen}
            isHidden={!query && !expanded && idx >= INITIAL_VISIBLE}
          />
        ))}
      </div>

      {showToggle && (
        <div style={{ marginTop: '16px', display: 'flex', justifyContent: 'center' }}>
          <button
            type="button"
            className="show-all-btn"
            aria-expanded={expanded}
            aria-controls={gridId}
            onClick={() => setExpanded((v) => !v)}
          >
            {expanded
              ? `Show fewer ${section.categoryLabel}`
              : `Show all ${section.generators.length} ${section.categoryLabel} generators`}
            <span style={{
              display: 'inline-block',
              transition: 'transform 0.25s ease',
              transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)',
            }}>
              ▾
            </span>
          </button>
        </div>
      )}

      <style>{`
        @media (min-width: 600px) {
          #${gridId} {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (min-width: 960px) {
          #${gridId} {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
      `}</style>
    </div>
  )
}

// ─── All Generators ───────────────────────────────────────────────────────────
function AllGenerators() {
  const [searchQuery, setSearchQuery] = useState('')
  const inputRef = useRef(null)

  const query = searchQuery.trim().toLowerCase()

  const totalMatching = query
    ? allGenerators.reduce((acc, section) => {
        return (
          acc +
          section.generators.filter(
            (g) =>
              g.name.toLowerCase().includes(query) ||
              g.description.toLowerCase().includes(query) ||
              section.categoryLabel.toLowerCase().includes(query)
          ).length
        )
      }, 0)
    : allGenerators.reduce((acc, s) => acc + s.generators.length, 0)

  const noResults = query && totalMatching === 0

  const handleClear = useCallback(() => {
    setSearchQuery('')
    if (inputRef.current) inputRef.current.focus()
  }, [])

  return (
    <section
      id="all-generators"
      aria-labelledby="all-generators-heading"
      style={{ padding: '60px 0', background: '#F4F6F8', scrollMarginTop: '56px' }}
    >
      <div className="content-container">
        <div style={{ marginBottom: '30px' }}>
          <h2 id="all-generators-heading" className="section-heading" style={{ margin: '0 0 8px' }}>
            {s.allGenerators.heading}
          </h2>
          <p style={{ margin: 0, color: '#636972', fontSize: '14px' }}>
            {s.allGenerators.subheading}
          </p>
        </div>

        {/* Search */}
        <div style={{ marginBottom: '40px' }}>
          <label htmlFor="gen-search" style={{ position: 'absolute', width: '1px', height: '1px', overflow: 'hidden', clip: 'rect(0,0,0,0)', whiteSpace: 'nowrap' }}>
            {s.allGenerators.searchLabel}
          </label>
          <div className="search-wrapper">
            <span className="search-icon">
              <SearchIcon />
            </span>
            <input
              ref={inputRef}
              id="gen-search"
              type="search"
              className="search-input"
              placeholder={s.allGenerators.searchPlaceholder}
              aria-label={s.allGenerators.searchLabel}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              autoComplete="off"
            />
          </div>
          {query && (
            <p className="search-count" aria-live="polite" aria-atomic="true">
              {s.allGenerators.resultCount(totalMatching)}
            </p>
          )}
        </div>

        {/* No results empty state */}
        {noResults && (
          <div className="empty-state">
            <p style={{ margin: '0 0 10px', fontWeight: 600, color: '#4B5056' }}>
              {s.allGenerators.noResults}
            </p>
            <button
              type="button"
              className="btn-ghost"
              onClick={handleClear}
              style={{ marginBottom: '10px' }}
            >
              {s.allGenerators.clearSearch}
            </button>
            <p style={{ margin: '10px 0 0', fontSize: '13px' }}>
              <a href="/s/ai_site_builder" style={{ color: '#8159BB', textDecoration: 'underline' }}>
                {s.allGenerators.noResultsCta}
              </a>
            </p>
          </div>
        )}

        {/* Category subsections */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '50px' }}>
          {allGenerators.map((section) => (
            <CategorySubsection
              key={section.categoryId}
              section={section}
              searchQuery={searchQuery}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── How It Works ─────────────────────────────────────────────────────────────
function HowItWorks() {
  return (
    <section
      aria-labelledby="how-heading"
      style={{ padding: '60px 0', background: '#ffffff' }}
    >
      <div className="content-container">
        <h2 id="how-heading" className="section-heading" style={{ margin: '0 0 40px', textAlign: 'center' }}>
          {s.howItWorks.heading}
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(1, 1fr)',
          gap: '30px',
        }}
          className="how-grid"
        >
          {s.howItWorks.steps.map((step) => (
            <div key={step.number} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '16px' }}>
              <div className="step-number" aria-hidden="true">{step.number}</div>
              <strong className="font-heading" style={{ fontSize: '15px', color: '#4B5056', letterSpacing: '0.04em' }}>
                {step.title}
              </strong>
              <p style={{ margin: 0, color: '#636972', fontSize: '14px', lineHeight: 1.6, maxWidth: '280px' }}>
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media (min-width: 768px) {
          .how-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
      `}</style>
    </section>
  )
}

// ─── Why Strikingly ───────────────────────────────────────────────────────────
function WhyStrikingly() {
  const iconMap = [WhyIcons.live, WhyIcons.mobile, WhyIcons.free]
  return (
    <section
      aria-labelledby="why-heading"
      style={{ padding: '60px 0', background: '#F4F6F8' }}
    >
      <div className="content-container">
        <h2 id="why-heading" className="section-heading" style={{ margin: '0 0 30px' }}>
          {s.whyStrikingly.heading}
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(1, 1fr)',
          gap: '20px',
        }}
          className="why-grid"
        >
          {s.whyStrikingly.cells.map((cell, i) => {
            const Icon = iconMap[i]
            return (
              <div key={cell.title} className="why-cell">
                <Icon />
                <strong className="font-heading" style={{ fontSize: '14px', color: '#4B5056', letterSpacing: '0.04em' }}>
                  {cell.title}
                </strong>
                <p style={{ margin: 0, color: '#636972', fontSize: '14px', lineHeight: 1.6 }}>
                  {cell.body}
                </p>
              </div>
            )
          })}
        </div>
      </div>
      <style>{`
        @media (min-width: 768px) {
          .why-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
      `}</style>
    </section>
  )
}

// ─── FAQ ──────────────────────────────────────────────────────────────────────
function FAQ() {
  const [openId, setOpenId] = useState(s.faq.items[0].id)

  const toggle = useCallback((id) => {
    setOpenId((current) => (current === id ? null : id))
  }, [])

  return (
    <section
      aria-labelledby="faq-heading"
      style={{ padding: '60px 0', background: '#ffffff' }}
    >
      <div className="content-container">
        <h2 id="faq-heading" className="section-heading" style={{ margin: '0 0 30px' }}>
          {s.faq.heading}
        </h2>
        <div style={{ maxWidth: '760px' }}>
          {s.faq.items.map((item) => {
            const isOpen = openId === item.id
            const panelId = `${item.id}-panel`
            return (
              <div key={item.id} className="faq-item">
                <button
                  type="button"
                  className="faq-btn"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => toggle(item.id)}
                >
                  <span>{item.question}</span>
                  <ChevronDown className={`faq-icon${isOpen ? ' open' : ''}`} />
                </button>
                <div
                  id={panelId}
                  className={`faq-panel${isOpen ? ' open' : ''}`}
                  role="region"
                  aria-labelledby={item.id}
                >
                  <div className="faq-panel-inner">
                    {item.answer.map((para, i) => (
                      <p key={i} style={{ margin: i > 0 ? '10px 0 0' : 0 }}>{para}</p>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// ─── Closing CTA ──────────────────────────────────────────────────────────────
function ClosingCTA() {
  return (
    <section
      aria-labelledby="closing-heading"
      style={{ padding: '80px 20px', background: '#ffffff', textAlign: 'center', borderTop: '1px solid #E2E4E7' }}
    >
      <h2
        id="closing-heading"
        className="font-heading"
        style={{ margin: '0 0 16px', fontSize: 'clamp(24px, 4vw, 36px)', color: '#2E2E2F' }}
      >
        {s.closingCta.heading}
      </h2>
      <p style={{ margin: '0 0 30px', color: '#636972', fontSize: '16px', lineHeight: 1.6 }}>
        {s.closingCta.sub}
      </p>
      <a
        href="/s/ai_site_builder"
        className="btn-primary btn-lg"
      >
        {s.closingCta.cta}
      </a>
    </section>
  )
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="site-footer" style={{ padding: '50px 0 30px' }}>
      <div className="content-container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '30px',
          marginBottom: '40px',
        }}
          className="footer-grid"
        >
          {s.footer.columns.map((col) => (
            <div key={col.heading}>
              <p style={{
                margin: '0 0 12px',
                fontFamily: "'Josefin Sans', Poppins, sans-serif",
                fontWeight: 700,
                fontSize: '12px',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: '#ffffff',
              }}>
                {col.heading}
              </p>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <hr style={{ border: 'none', borderTop: '1px solid rgba(255,255,255,0.1)', margin: '0 0 20px' }} />
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px' }}>
          <a href="/" aria-label="Strikingly home" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
            <svg width="120" height="24" viewBox="0 0 140 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <text x="0" y="20" fontFamily="'Josefin Sans', Poppins, sans-serif" fontWeight="700" fontSize="16" fill="#ffffff" letterSpacing="0.5">strikingly</text>
              <text x="88" y="20" fontFamily="'Josefin Sans', Poppins, sans-serif" fontWeight="700" fontSize="16" fill="url(#footerLogoGrad)" letterSpacing="0.5"> AI</text>
              <defs>
                <linearGradient id="footerLogoGrad" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#7671FF" />
                  <stop offset="100%" stopColor="#CB0C9F" />
                </linearGradient>
              </defs>
            </svg>
          </a>
          <p style={{ margin: 0, fontSize: '12px', color: '#C6C9CD' }}>
            {s.footer.copyright}
          </p>
        </div>
      </div>
      <style>{`
        @media (min-width: 768px) {
          .footer-grid {
            grid-template-columns: repeat(4, 1fr) !important;
          }
        }
      `}</style>
    </footer>
  )
}

// ─── GeneratorsHub (main page) ────────────────────────────────────────────────
export default function GeneratorsHub() {
  return (
    <>
      <TopBar />
      <Breadcrumb />
      <main id="main-content">
        <Hero />
        <hr className="section-divider" />
        <FeaturedGenerators />
        <hr className="section-divider" />
        <BrowseByCategory />
        <hr className="section-divider" />
        <AllGenerators />
        <hr className="section-divider" />
        <HowItWorks />
        <hr className="section-divider" />
        <WhyStrikingly />
        <hr className="section-divider" />
        <FAQ />
        <ClosingCTA />
      </main>
      <Footer />
    </>
  )
}
