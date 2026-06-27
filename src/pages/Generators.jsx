import { useEffect, useRef, useState, useCallback } from 'react'
import { strings, categories, featuredGenerators, directoryGenerators, faqs } from '@/data/generators'

const slugify = (value) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')

const headingFont = "'Josefin Sans', 'Poppins', sans-serif"
const bodyFont = "'Open Sans', sans-serif"

const brandPurple = '#8159BB'
const aiGradient = 'linear-gradient(135deg, #7671FF 0%, #CB0C9F 100%)'
const bodyGray = '#636972'
const headingGray = '#4B5056'
const heroHeadingDark = '#2E2E2F'
const cardBorder = '#C6C9CD'
const subtleDivider = '#E2E4E7'
const lightBg = '#F4F6F8'
const white = '#FFFFFF'

const Section = ({ id, className = '', children }) => (
  <section id={id} className={`strk-section ${className}`.trim()}>
    {children}
  </section>
)

const Container = ({ children, className = '' }) => (
  <div className={`strk-container ${className}`.trim()}>{children}</div>
)

const Card = ({ href, children, className = '' }) => (
  <a href={href} className={`strk-card ${className}`.trim()}>
    {children}
  </a>
)

const Button = ({ href, variant = 'primary', children, className = '', ...props }) => {
  const base =
    'strk-button inline-flex items-center justify-center font-semibold uppercase tracking-wide no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2'
  const variants = {
    primary: `${base} strk-button-primary`,
    secondary: `${base} strk-button-secondary`,
    ghost: `${base} strk-button-ghost`,
  }
  return (
    <a href={href} className={`${variants[variant]} ${className}`.trim()} {...props}>
      {children}
    </a>
  )
}

const CategoryThumbnail = ({ categoryId }) => {
  const icons = {
    websites: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect x="8" y="12" width="48" height="36" rx="4" stroke={brandPurple} strokeWidth="2.5" />
        <path d="M8 22H56" stroke={brandPurple} strokeWidth="2.5" />
        <circle cx="14" cy="17" r="2" fill={brandPurple} />
        <circle cx="22" cy="17" r="2" fill={brandPurple} />
        <circle cx="30" cy="17" r="2" fill={brandPurple} />
        <rect x="16" y="28" width="14" height="12" rx="2" stroke={brandPurple} strokeWidth="2" />
        <rect x="34" y="28" width="14" height="4" rx="2" stroke={brandPurple} strokeWidth="2" />
        <rect x="34" y="36" width="14" height="4" rx="2" stroke={brandPurple} strokeWidth="2" />
      </svg>
    ),
    'landing-pages': (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect x="8" y="8" width="48" height="48" rx="4" stroke={brandPurple} strokeWidth="2.5" />
        <path d="M8 20H56" stroke={brandPurple} strokeWidth="2.5" />
        <circle cx="14" cy="14" r="2" fill={brandPurple} />
        <circle cx="22" cy="14" r="2" fill={brandPurple} />
        <circle cx="30" cy="14" r="2" fill={brandPurple} />
        <rect x="16" y="28" width="32" height="6" rx="2" stroke={brandPurple} strokeWidth="2" />
        <rect x="16" y="40" width="24" height="6" rx="2" stroke={brandPurple} strokeWidth="2" />
      </svg>
    ),
    portfolios: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect x="8" y="12" width="48" height="40" rx="4" stroke={brandPurple} strokeWidth="2.5" />
        <rect x="14" y="18" width="18" height="18" rx="2" stroke={brandPurple} strokeWidth="2" />
        <path d="M38 26L46 18L54 26V38C54 40.2 52.2 42 50 42H38C35.8 42 34 40.2 34 38V26C34 23.8 35.8 22 38 22" stroke={brandPurple} strokeWidth="2" />
        <circle cx="23" cy="27" r="4" stroke={brandPurple} strokeWidth="2" />
        <path d="M14 42L26 30L34 38L50 22" stroke={brandPurple} strokeWidth="2" />
      </svg>
    ),
    blogs: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect x="10" y="6" width="44" height="52" rx="4" stroke={brandPurple} strokeWidth="2.5" />
        <path d="M10 18H54" stroke={brandPurple} strokeWidth="2.5" />
        <circle cx="16" cy="12" r="2" fill={brandPurple} />
        <circle cx="24" cy="12" r="2" fill={brandPurple} />
        <circle cx="32" cy="12" r="2" fill={brandPurple} />
        <rect x="16" y="26" width="32" height="4" rx="2" stroke={brandPurple} strokeWidth="2" />
        <rect x="16" y="36" width="28" height="4" rx="2" stroke={brandPurple} strokeWidth="2" />
        <rect x="16" y="46" width="20" height="4" rx="2" stroke={brandPurple} strokeWidth="2" />
      </svg>
    ),
    stores: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M12 22L16 12H48L52 22H12Z" stroke={brandPurple} strokeWidth="2.5" strokeLinejoin="round" />
        <path d="M18 22V44C18 46.2 19.8 48 22 48H42C44.2 48 46 46.2 46 44V22" stroke={brandPurple} strokeWidth="2.5" />
        <path d="M24 22V16C24 13.8 25.8 12 28 12H36C38.2 12 40 13.8 40 16V22" stroke={brandPurple} strokeWidth="2.5" />
        <rect x="26" y="30" width="12" height="14" rx="2" stroke={brandPurple} strokeWidth="2" />
        <path d="M32 30V44" stroke={brandPurple} strokeWidth="2" />
      </svg>
    ),
    'link-in-bio': (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect x="12" y="8" width="40" height="48" rx="6" stroke={brandPurple} strokeWidth="2.5" />
        <circle cx="32" cy="24" r="8" stroke={brandPurple} strokeWidth="2.5" />
        <path d="M20 46C20 40.5 25.4 36 32 36C38.6 36 44 40.5 44 46" stroke={brandPurple} strokeWidth="2.5" strokeLinecap="round" />
        <rect x="18" y="52" width="28" height="4" rx="2" stroke={brandPurple} strokeWidth="2" />
      </svg>
    ),
  }

  return (
    <div className="strk-category-thumb" aria-hidden="true">
      {icons[categoryId] || icons.websites}
    </div>
  )
}

const GeneratorCard = ({ name, description, slug, category, showCategory = false }) => (
  <Card href={`/generators/${slug}`} className="strk-generator-card">
    {showCategory && category && <span className="strk-tag">{category}</span>}
    <h3 className="strk-card-title">{name}</h3>
    <p className="strk-card-desc">{description}</p>
  </Card>
)

const DirectorySubsection = ({ category, generators, visibleCount, onToggle, isExpanded }) => {
  const visible = isExpanded ? generators : generators.slice(0, visibleCount)
  const hasMore = generators.length > visibleCount

  return (
    <div id={category.id} className="strk-subsection">
      <div className="strk-subsection-header">
        <h3 className="strk-subsection-title">{category.name.toUpperCase()}</h3>
        <p className="strk-subsection-desc">{category.description}</p>
      </div>
      <div className="strk-grid strk-grid-3">
        {visible.map((gen) => (
          <GeneratorCard key={gen.slug} {...gen} />
        ))}
      </div>
      {hasMore && (
        <div className="strk-show-all-wrap">
          <button
            type="button"
            className="strk-show-all"
            aria-expanded={isExpanded}
            aria-controls={`${category.id}-list`}
            onClick={() => onToggle(category.id)}
          >
            {isExpanded
              ? strings.en.showLess
              : strings.en.showAll.replace('{count}', String(generators.length))}
          </button>
        </div>
      )}
    </div>
  )
}

const FAQItem = ({ question, answer, answer2, isOpen, onToggle, id }) => (
  <div className={`strk-faq-item ${isOpen ? 'strk-faq-open' : ''}`}>
    <button
      type="button"
      className="strk-faq-question"
      aria-expanded={isOpen}
      aria-controls={`faq-answer-${id}`}
      onClick={() => onToggle(id)}
    >
      <span>{question}</span>
      <svg
        className="strk-faq-icon"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        aria-hidden="true"
      >
        <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
    <div
      id={`faq-answer-${id}`}
      className="strk-faq-answer"
      role="region"
      aria-labelledby={`faq-question-${id}`}
      hidden={!isOpen}
    >
      <div className="strk-faq-answer-inner">
        <p>{answer}</p>
        {answer2 && <p>{answer2}</p>}
      </div>
    </div>
  </div>
)

export default function Generators() {
  const [expandedSubsections, setExpandedSubsections] = useState({})
  const [openFaqs, setOpenFaqs] = useState({ 0: true })
  const [searchQuery, setSearchQuery] = useState('')
  const [matchCount, setMatchCount] = useState(0)
  const searchInputRef = useRef(null)
  const directoryRef = useRef(null)

  const toggleSubsection = useCallback((id) => {
    setExpandedSubsections((prev) => ({ ...prev, [id]: !prev[id] }))
  }, [])

  const toggleFaq = useCallback((id) => {
    setOpenFaqs((prev) => ({ ...prev, [id]: !prev[id] }))
  }, [])

  const clearSearch = useCallback(() => {
    setSearchQuery('')
    setMatchCount(0)
    if (searchInputRef.current) {
      searchInputRef.current.value = ''
      searchInputRef.current.focus()
    }
  }, [searchInputRef])

  useEffect(() => {
    const handleSearch = () => {
      const query = (searchInputRef.current?.value || '').trim().toLowerCase()
      setSearchQuery(query)

      if (!query) {
        setMatchCount(0)
        return
      }

      let count = 0
      Object.values(directoryGenerators).forEach((gens) => {
        gens.forEach((gen) => {
          const haystack = `${gen.name} ${gen.description} ${gen.category || ''}`.toLowerCase()
          if (haystack.includes(query)) count += 1
        })
      })
      setMatchCount(count)
    }

    const input = searchInputRef.current
    if (!input) return

    input.addEventListener('input', handleSearch)
    return () => input.removeEventListener('input', handleSearch)
  }, [])

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '')
      if (!hash) return
      const el = document.getElementById(hash)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }

    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  const t = strings.en

  return (
    <div className="strk-page">
      {/* Section 0: Top bar */}
      <header className="strk-topbar">
        <Container>
          <a href="/" className="strk-logo" aria-label="Strikingly home">
            <svg width="140" height="28" viewBox="0 0 140 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M0 2.5H8.5L18 18.5V2.5H22.5V26H14L4.5 9.5V26H0V2.5Z" fill={brandPurple} />
              <path d="M28 2.5H47V6.5H32.5V11H45V15H32.5V22H47V26H28V2.5Z" fill={brandPurple} />
              <path d="M54 2.5H73V6.5H58.5V11H71V15H58.5V22H73V26H54V2.5Z" fill={brandPurple} />
              <path d="M80 2.5H99V6.5H84.5V11H97V15H84.5V22H99V26H80V2.5Z" fill={brandPurple} />
              <path d="M106 2.5H125V6.5H110.5V11H123V15H110.5V22H125V26H106V2.5Z" fill={brandPurple} />
              <path d="M132 2.5H140L140 26H135.5L135.5 2.5H132Z" fill={brandPurple} />
            </svg>
          </a>
        </Container>
      </header>

      {/* Section 1: Breadcrumb */}
      <nav aria-label="Breadcrumb" className="strk-breadcrumb">
        <Container>
          <ol className="strk-breadcrumb-list">
            <li>
              <a href="/" className="strk-breadcrumb-link">{t.breadcrumbHome}</a>
            </li>
            <li aria-hidden="true" className="strk-breadcrumb-sep">/</li>
            <li aria-current="page" className="strk-breadcrumb-current">{t.breadcrumbCurrent}</li>
          </ol>
        </Container>
      </nav>

      {/* Section 2: Hero */}
      <Section className="strk-hero">
        <Container>
          <div className="strk-hero-grid">
            <div className="strk-hero-content">
              <h1 className="strk-hero-title">
                <span className="strk-hero-line1">{t.heroLine1}</span>
                <span className="strk-hero-line2">{t.heroLine2}</span>
              </h1>
              <p className="strk-hero-sub">{t.heroSubheadline}</p>
              <div className="strk-hero-actions">
                <Button href="/s/ai_site_builder" variant="primary" className="strk-cta-large">
                  {t.ctaPrimary}
                </Button>
                <Button href="#all-generators" variant="secondary" className="strk-cta-large">
                  {t.ctaSecondary}
                </Button>
              </div>
            </div>
            <div className="strk-hero-visual" aria-hidden="true">
              <svg viewBox="0 0 520 360" fill="none" xmlns="http://www.w3.org/2000/svg" className="strk-hero-illustration">
                <rect x="40" y="40" width="440" height="280" rx="12" fill={white} stroke={cardBorder} strokeWidth="2" />
                <rect x="40" y="40" width="440" height="36" rx="12" fill={lightBg} />
                <circle cx="64" cy="58" r="5" fill="#FF6058" />
                <circle cx="80" cy="58" r="5" fill="#FFBD2E" />
                <circle cx="96" cy="58" r="5" fill="#28CA41" />
                <rect x="140" y="50" width="240" height="16" rx="4" fill={subtleDivider} />
                <rect x="64" y="100" width="120" height="8" rx="4" fill={subtleDivider} />
                <rect x="64" y="120" width="200" height="8" rx="4" fill={subtleDivider} />
                <rect x="64" y="140" width="160" height="8" rx="4" fill={subtleDivider} />
                <rect x="64" y="170" width="392" height="120" rx="8" fill={lightBg} />
                <rect x="80" y="186" width="160" height="88" rx="6" fill={white} stroke={cardBorder} strokeWidth="1.5" />
                <rect x="80" y="186" width="160" height="12" rx="6" fill={subtleDivider} />
                <rect x="92" y="210" width="80" height="6" rx="3" fill={subtleDivider} />
                <rect x="92" y="224" width="120" height="6" rx="3" fill={subtleDivider} />
                <rect x="92" y="238" width="100" height="6" rx="3" fill={subtleDivider} />
                <rect x="260" y="186" width="176" height="88" rx="6" fill={white} stroke={cardBorder} strokeWidth="1.5" />
                <rect x="276" y="202" width="120" height="8" rx="4" fill={subtleDivider} />
                <rect x="276" y="218" width="144" height="6" rx="3" fill={subtleDivider} />
                <rect x="276" y="232" width="130" height="6" rx="3" fill={subtleDivider} />
                <rect x="276" y="246" width="110" height="6" rx="3" fill={subtleDivider} />
                <rect x="64" y="310" width="392" height="6" rx="3" fill={subtleDivider} />
              </svg>
            </div>
          </div>
        </Container>
      </Section>

      {/* Section 3: Featured Generators */}
      <Section className="strk-section-featured">
        <Container>
          <div className="strk-section-header">
            <h2 className="strk-section-title">{t.featuredHeading}</h2>
            <p className="strk-section-sub">{t.featuredSubheading}</p>
          </div>
          <div className="strk-grid strk-grid-3">
            {featuredGenerators.map((gen) => (
              <GeneratorCard key={gen.slug} {...gen} showCategory />
            ))}
          </div>
        </Container>
      </Section>

      {/* Section 4: Browse by Category */}
      <Section className="strk-section-categories">
        <Container>
          <div className="strk-section-header">
            <h2 className="strk-section-title">{t.browseHeading}</h2>
          </div>
          <div className="strk-grid strk-grid-3">
            {categories.map((cat) => (
              <a key={cat.id} href={cat.href} className="strk-category-card">
                <CategoryThumbnail categoryId={cat.id} />
                <div className="strk-category-card-body">
                  <h3 className="strk-category-card-title">{cat.name.toUpperCase()}</h3>
                  <p className="strk-category-card-desc">{cat.description}</p>
                </div>
                <svg className="strk-category-card-arrow" width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <path d="M7 4L13 10L7 16" stroke={brandPurple} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            ))}
          </div>
        </Container>
      </Section>

      {/* Section 5: All Generators */}
      <Section id="all-generators" className="strk-section-directory">
        <Container>
          <div className="strk-section-header">
            <h2 className="strk-section-title">{t.allHeading}</h2>
            <p className="strk-section-sub">{t.allSubheading}</p>
          </div>

          <div className="strk-search-wrap">
            <div className="strk-search-input-wrap">
              <svg className="strk-search-icon" width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                <circle cx="7.5" cy="7.5" r="5.5" stroke={bodyGray} strokeWidth="2" />
                <path d="M12.5 12.5L17 17" stroke={bodyGray} strokeWidth="2" strokeLinecap="round" />
              </svg>
              <input
                ref={searchInputRef}
                type="search"
                className="strk-search-input"
                placeholder={t.searchPlaceholder}
                aria-label={t.searchAriaLabel}
                autoComplete="off"
              />
            </div>
            {matchCount > 0 && (
              <p className="strk-search-count" aria-live="polite">
                {t.searchResultCount.replace('{count}', String(matchCount))}
              </p>
            )}
            {searchQuery && matchCount === 0 && (
              <div className="strk-search-empty">
                <p>{t.searchNoResults}</p>
                <button type="button" className="strk-button-ghost strk-button-sm" onClick={clearSearch}>
                  {t.searchClear}
                </button>
                <a href="/s/ai_site_builder" className="strk-search-cta">{t.searchCta}</a>
              </div>
            )}
          </div>

          <div ref={directoryRef} className="strk-directory">
            {categories.map((cat) => {
              const generators = directoryGenerators[cat.id] || []
              if (!generators.length) return null

              const filtered = searchQuery
                ? generators.filter((gen) => {
                    const haystack = `${gen.name} ${gen.description} ${gen.category || ''}`.toLowerCase()
                    return haystack.includes(searchQuery)
                  })
                : generators

              if (searchQuery && filtered.length === 0) return null

              const visibleCount = 6
              const isExpanded = expandedSubsections[cat.id]

              return (
                <div key={cat.id} id={`${cat.id}-list`} className="strk-subsection">
                  <div className="strk-subsection-header">
                    <h3 className="strk-subsection-title">{cat.name.toUpperCase()}</h3>
                    <p className="strk-subsection-desc">{cat.description}</p>
                  </div>
                  <div className="strk-grid strk-grid-3">
                    {(isExpanded ? filtered : filtered.slice(0, visibleCount)).map((gen) => (
                      <GeneratorCard key={gen.slug} {...gen} />
                    ))}
                  </div>
                  {filtered.length > visibleCount && (
                    <div className="strk-show-all-wrap">
                      <button
                        type="button"
                        className="strk-show-all"
                        aria-expanded={isExpanded}
                        aria-controls={`${cat.id}-list`}
                        onClick={() => toggleSubsection(cat.id)}
                      >
                        {isExpanded
                          ? t.showLess
                          : t.showAll.replace('{count}', String(filtered.length))}
                      </button>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </Container>
      </Section>

      {/* Section 6: How It Works */}
      <Section className="strk-section-how">
        <Container>
          <div className="strk-section-header">
            <h2 className="strk-section-title">{t.howHeading}</h2>
          </div>
          <div className="strk-steps">
            <div className="strk-step">
              <div className="strk-step-number" aria-hidden="true">1</div>
              <h3 className="strk-step-title">{t.step1Title}</h3>
              <p className="strk-step-body">{t.step1Body}</p>
            </div>
            <div className="strk-step">
              <div className="strk-step-number" aria-hidden="true">2</div>
              <h3 className="strk-step-title">{t.step2Title}</h3>
              <p className="strk-step-body">{t.step2Body}</p>
            </div>
            <div className="strk-step">
              <div className="strk-step-number" aria-hidden="true">3</div>
              <h3 className="strk-step-title">{t.step3Title}</h3>
              <p className="strk-step-body">{t.step3Body}</p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Section 7: Why Strikingly */}
      <Section className="strk-section-why">
        <Container>
          <div className="strk-section-header">
            <h2 className="strk-section-title">{t.whyHeading}</h2>
          </div>
          <div className="strk-grid strk-grid-3">
            <div className="strk-why-card">
              <svg className="strk-why-icon" width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
                <circle cx="16" cy="16" r="14" stroke={brandPurple} strokeWidth="2" />
                <path d="M10 16H22M16 10V22" stroke={brandPurple} strokeWidth="2" strokeLinecap="round" />
              </svg>
              <h3 className="strk-why-title">{t.why1Title}</h3>
              <p className="strk-why-body">{t.why1Body}</p>
            </div>
            <div className="strk-why-card">
              <svg className="strk-why-icon" width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
                <rect x="4" y="6" width="24" height="20" rx="3" stroke={brandPurple} strokeWidth="2" />
                <path d="M4 12H28" stroke={brandPurple} strokeWidth="2" />
                <path d="M10 18H14M18 18H22" stroke={brandPurple} strokeWidth="2" strokeLinecap="round" />
              </svg>
              <h3 className="strk-why-title">{t.why2Title}</h3>
              <p className="strk-why-body">{t.why2Body}</p>
            </div>
            <div className="strk-why-card">
              <svg className="strk-why-icon" width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
                <path d="M16 4L20.5 11H27L21.5 16L24 24L16 20L8 24L10.5 16L5 11H11.5L16 4Z" stroke={brandPurple} strokeWidth="2" strokeLinejoin="round" />
              </svg>
              <h3 className="strk-why-title">{t.why3Title}</h3>
              <p className="strk-why-body">{t.why3Body}</p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Section 8: FAQ */}
      <Section className="strk-section-faq">
        <Container>
          <div className="strk-section-header">
            <h2 className="strk-section-title">{t.faqHeading}</h2>
          </div>
          <div className="strk-faq-list">
            {faqs.map((faq, idx) => (
              <FAQItem
                key={idx}
                id={idx}
                question={faq.question}
                answer={faq.answer}
                answer2={faq.answer2}
                isOpen={!!openFaqs[idx]}
                onToggle={toggleFaq}
              />
            ))}
          </div>
        </Container>
      </Section>

      {/* Section 9: Closing CTA */}
      <Section className="strk-section-closing">
        <Container>
          <div className="strk-closing">
            <h2 className="strk-closing-title">{t.closingHeadline}</h2>
            <p className="strk-closing-sub">{t.closingSub}</p>
            <Button href="/s/ai_site_builder" variant="primary" className="strk-cta-large">
              {t.closingCta}
            </Button>
          </div>
        </Container>
      </Section>

      {/* Section 10: Footer */}
      <footer className="strk-footer">
        <Container>
          <div className="strk-footer-grid">
            <div className="strk-footer-brand">
              <a href="/" className="strk-logo" aria-label="Strikingly home">
                <svg width="120" height="24" viewBox="0 0 140 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M0 2.5H8.5L18 18.5V2.5H22.5V26H14L4.5 9.5V26H0V2.5Z" fill={brandPurple} />
                  <path d="M28 2.5H47V6.5H32.5V11H45V15H32.5V22H47V26H28V2.5Z" fill={brandPurple} />
                  <path d="M54 2.5H73V6.5H58.5V11H71V15H58.5V22H73V26H54V2.5Z" fill={brandPurple} />
                  <path d="M80 2.5H99V6.5H84.5V11H97V15H84.5V22H99V26H80V2.5Z" fill={brandPurple} />
                  <path d="M106 2.5H125V6.5H110.5V11H123V15H110.5V22H125V26H106V2.5Z" fill={brandPurple} />
                  <path d="M132 2.5H140L140 26H135.5L135.5 2.5H132Z" fill={brandPurple} />
                </svg>
              </a>
            </div>
            <div className="strk-footer-col">
              <h4 className="strk-footer-heading">Product</h4>
              <a href="/pricing" className="strk-footer-link">Pricing</a>
              <a href="/templates" className="strk-footer-link">Templates</a>
              <a href="/features" className="strk-footer-link">Features</a>
            </div>
            <div className="strk-footer-col">
              <h4 className="strk-footer-heading">Company</h4>
              <a href="/about" className="strk-footer-link">About</a>
              <a href="/blog" className="strk-footer-link">Blog</a>
              <a href="/careers" className="strk-footer-link">Careers</a>
            </div>
            <div className="strk-footer-col">
              <h4 className="strk-footer-heading">Support</h4>
              <a href="/support" className="strk-footer-link">Help Center</a>
              <a href="/contact" className="strk-footer-link">Contact</a>
              <a href="/status" className="strk-footer-link">Status</a>
            </div>
            <div className="strk-footer-col">
              <h4 className="strk-footer-heading">Legal</h4>
              <a href="/terms" className="strk-footer-link">Terms</a>
              <a href="/privacy" className="strk-footer-link">Privacy</a>
            </div>
          </div>
          <div className="strk-footer-bottom">
            <p>&copy; {new Date().getFullYear()} Strikingly. All rights reserved.</p>
          </div>
        </Container>
      </footer>
    </div>
  )
}
