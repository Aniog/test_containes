import './App.css'
import { useState, useCallback } from 'react'
import { strings } from './data/strings'
import { categories, featuredGenerators, allGeneratorsWithSlugs } from './data/generators'

const t = strings.en

function TopBar() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-divider">
      <div className="max-w-content mx-auto px-[20px] h-[60px] flex items-center">
        <a href="/" className="font-heading text-[18px] text-heading-dark tracking-wide">
          strikingly <span className="text-brand-purple">AI</span>
        </a>
      </div>
    </header>
  )
}

function Breadcrumb() {
  return (
    <nav aria-label="Breadcrumb" className="max-w-content mx-auto px-[20px] py-[10px]">
      <ol className="flex items-center gap-[5px] list-none m-0 p-0 text-[13px] text-body-text">
        <li><a href="/" className="hover:underline">{t.breadcrumb.home}</a></li>
        <li aria-hidden="true" className="text-body-text">&gt;</li>
        <li aria-current="page">{t.breadcrumb.current}</li>
      </ol>
    </nav>
  )
}

function HeroIllustration() {
  return (
    <svg width="480" height="360" viewBox="0 0 480 360" fill="none" aria-hidden="true" className="w-full h-auto max-w-[480px]">
      <rect x="60" y="40" width="360" height="240" rx="8" stroke="#8159BB" strokeWidth="2" fill="none" opacity="0.3" />
      <rect x="80" y="70" width="320" height="30" rx="4" stroke="#8159BB" strokeWidth="1.5" fill="none" opacity="0.2" />
      <rect x="80" y="120" width="140" height="140" rx="4" stroke="#8159BB" strokeWidth="1.5" fill="none" opacity="0.15" />
      <rect x="240" y="120" width="160" height="60" rx="4" stroke="#8159BB" strokeWidth="1.5" fill="none" opacity="0.15" />
      <rect x="240" y="200" width="160" height="60" rx="4" stroke="#8159BB" strokeWidth="1.5" fill="none" opacity="0.15" />
      <circle cx="150" cy="190" r="30" stroke="#8159BB" strokeWidth="1.5" fill="none" opacity="0.2" />
      <line x1="80" y1="300" x2="400" y2="300" stroke="#E2E4E7" strokeWidth="1" />
      <rect x="80" y="310" width="60" height="8" rx="2" fill="#E2E4E7" />
      <rect x="160" y="310" width="60" height="8" rx="2" fill="#E2E4E7" />
      <rect x="240" y="310" width="60" height="8" rx="2" fill="#E2E4E7" />
    </svg>
  )
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04]" style={{ background: 'radial-gradient(ellipse at 30% 50%, #7671FF, transparent 60%), radial-gradient(ellipse at 70% 50%, #CB0C9F, transparent 60%)' }} aria-hidden="true" />
      <div className="relative max-w-content mx-auto px-[20px] py-[60px] md:py-[80px] flex flex-col md:flex-row items-center gap-[40px]">
        <div className="flex-1 text-center md:text-start">
          <h1 className="font-heading text-[28px] md:text-[44px] leading-[1.2] mb-[20px]">
            <span className="text-heading-dark block">{t.hero.h1Line1}</span>
            <span className="ai-gradient-text block">{t.hero.h1Line2}</span>
          </h1>
          <p className="text-body-text text-[16px] mb-[30px] max-w-[500px] mx-auto md:mx-0">
            {t.hero.subheadline}
          </p>
          <div className="flex flex-col sm:flex-row gap-[10px] justify-center md:justify-start">
            <a
              href="/s/ai_site_builder"
              className="font-heading inline-flex items-center justify-center h-[44px] px-[20px] rounded-[4px] ai-gradient-bg text-white text-[14px] tracking-wide hover:opacity-90 focus:outline-2 focus:outline-offset-2 focus:outline-brand-purple"
            >
              {t.hero.ctaPrimary}
            </a>
            <a
              href="#all-generators"
              className="font-heading inline-flex items-center justify-center h-[44px] px-[20px] rounded-[4px] border border-brand-purple text-brand-purple text-[14px] tracking-wide hover:bg-brand-purple/5 focus:outline-2 focus:outline-offset-2 focus:outline-brand-purple"
            >
              {t.hero.ctaSecondary}
            </a>
          </div>
        </div>
        <div className="flex-1 flex justify-center">
          <HeroIllustration />
        </div>
      </div>
    </section>
  )
}

function FeaturedGenerators() {
  return (
    <section className="py-[40px] bg-bg-light">
      <div className="max-w-content mx-auto px-[20px]">
        <h2 className="font-heading text-[26px] md:text-[30px] text-heading-section text-center mb-[5px]">
          {t.featured.heading}
        </h2>
        <p className="text-body-text text-center mb-[30px]">{t.featured.subheading}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px]">
          {featuredGenerators.map((gen) => (
            <a
              key={gen.slug}
              href={`/generators/${gen.slug}`}
              className="block bg-white border border-card-border rounded-[3px] p-[20px] card-hover focus:outline-2 focus:outline-offset-2 focus:outline-brand-purple"
            >
              <span className="font-heading text-[15px] text-heading-section block mb-[5px]">
                {gen.name}
              </span>
              <span className="text-body-text text-[14px] block mb-[10px]">
                {gen.description}
              </span>
              <span className="font-heading inline-block text-[11px] text-brand-purple border border-brand-purple rounded-[3px] px-[6px] py-[2px]">
                {gen.category}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

function CategoryIcon({ categoryId }) {
  const icons = {
    websites: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <rect x="4" y="8" width="32" height="24" rx="3" stroke="#8159BB" strokeWidth="1.5" />
        <line x1="4" y1="14" x2="36" y2="14" stroke="#8159BB" strokeWidth="1.5" />
        <circle cx="8" cy="11" r="1.5" fill="#8159BB" />
        <circle cx="12" cy="11" r="1.5" fill="#8159BB" />
      </svg>
    ),
    'landing-pages': (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <rect x="8" y="4" width="24" height="32" rx="3" stroke="#8159BB" strokeWidth="1.5" />
        <rect x="12" y="10" width="16" height="4" rx="1" stroke="#8159BB" strokeWidth="1" />
        <rect x="14" y="18" width="12" height="3" rx="1" fill="#8159BB" opacity="0.3" />
        <rect x="14" y="24" width="12" height="6" rx="2" stroke="#8159BB" strokeWidth="1.5" />
      </svg>
    ),
    portfolios: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <rect x="4" y="8" width="14" height="12" rx="2" stroke="#8159BB" strokeWidth="1.5" />
        <rect x="22" y="8" width="14" height="12" rx="2" stroke="#8159BB" strokeWidth="1.5" />
        <rect x="4" y="24" width="14" height="12" rx="2" stroke="#8159BB" strokeWidth="1.5" />
        <rect x="22" y="24" width="14" height="12" rx="2" stroke="#8159BB" strokeWidth="1.5" />
      </svg>
    ),
    blogs: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <rect x="6" y="6" width="28" height="28" rx="3" stroke="#8159BB" strokeWidth="1.5" />
        <line x1="10" y1="14" x2="30" y2="14" stroke="#8159BB" strokeWidth="1.5" />
        <line x1="10" y1="20" x2="26" y2="20" stroke="#8159BB" strokeWidth="1" opacity="0.5" />
        <line x1="10" y1="26" x2="22" y2="26" stroke="#8159BB" strokeWidth="1" opacity="0.5" />
      </svg>
    ),
    stores: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <path d="M8 16V34H32V16" stroke="#8159BB" strokeWidth="1.5" />
        <path d="M4 16L8 6H32L36 16" stroke="#8159BB" strokeWidth="1.5" />
        <rect x="16" y="24" width="8" height="10" stroke="#8159BB" strokeWidth="1.5" />
      </svg>
    ),
    'link-in-bio': (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <circle cx="20" cy="12" r="6" stroke="#8159BB" strokeWidth="1.5" />
        <rect x="10" y="22" width="20" height="5" rx="2.5" stroke="#8159BB" strokeWidth="1.5" />
        <rect x="10" y="30" width="20" height="5" rx="2.5" stroke="#8159BB" strokeWidth="1.5" />
      </svg>
    ),
  }
  return icons[categoryId] || null
}

function BrowseByCategory() {
  return (
    <section className="py-[40px]">
      <div className="max-w-content mx-auto px-[20px]">
        <h2 className="font-heading text-[26px] md:text-[30px] text-heading-section text-center mb-[30px]">
          {t.browseByCategory.heading}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px]">
          {categories.map((cat) => (
            <a
              key={cat.id}
              href={`#${cat.id}`}
              className="flex items-start gap-[15px] bg-white border border-card-border rounded-[3px] p-[20px] card-hover focus:outline-2 focus:outline-offset-2 focus:outline-brand-purple"
            >
              <div className="flex-shrink-0">
                <CategoryIcon categoryId={cat.id} />
              </div>
              <div className="flex-1 min-w-0">
                <span className="font-heading text-[14px] text-heading-section block mb-[5px]">
                  {cat.name}
                </span>
                <span className="text-body-text text-[13px] block">
                  {cat.description}
                </span>
              </div>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" className="flex-shrink-0 mt-[2px]">
                <path d="M7 4L13 10L7 16" stroke="#8159BB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

function AllGenerators() {
  const [searchQuery, setSearchQuery] = useState('')
  const [expandedSections, setExpandedSections] = useState({})
  const [jsReady] = useState(true)
  const VISIBLE_COUNT = 6

  const toggleSection = useCallback((categoryId) => {
    setExpandedSections((prev) => ({ ...prev, [categoryId]: !prev[categoryId] }))
  }, [])

  const allEntries = Object.entries(allGeneratorsWithSlugs)

  const getFilteredGenerators = (generators) => {
    if (!searchQuery.trim()) return generators
    const q = searchQuery.toLowerCase()
    return generators.filter(
      (g) =>
        g.name.toLowerCase().includes(q) ||
        g.description.toLowerCase().includes(q) ||
        g.category.toLowerCase().includes(q)
    )
  }

  const totalMatches = searchQuery.trim()
    ? allEntries.reduce((sum, [, gens]) => sum + getFilteredGenerators(gens).length, 0)
    : null

  return (
    <section id="all-generators" className="py-[40px] bg-bg-light">
      <div className="max-w-content mx-auto px-[20px]">
        <h2 className="font-heading text-[26px] md:text-[30px] text-heading-section text-center mb-[5px]">
          {t.allGenerators.heading}
        </h2>
        <p className="text-body-text text-center mb-[30px]">{t.allGenerators.subheading}</p>

        <div className="max-w-[480px] mx-auto mb-[30px]">
          <div className="relative">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true" className="absolute top-1/2 -translate-y-1/2 left-[12px] text-body-text">
              <circle cx="7.5" cy="7.5" r="5.5" stroke="currentColor" strokeWidth="1.5" />
              <line x1="11.5" y1="11.5" x2="16" y2="16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <input
              type="search"
              aria-label="Search generators"
              placeholder={t.allGenerators.searchPlaceholder}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-[40px] pl-[40px] pr-[12px] border border-card-border rounded-[4px] text-[14px] text-heading-dark bg-white focus:outline-2 focus:outline-brand-purple focus:border-brand-purple"
            />
          </div>
          {totalMatches !== null && totalMatches > 0 && (
            <p className="text-[13px] text-body-text mt-[8px]">{t.allGenerators.matchCount(totalMatches)}</p>
          )}
          {totalMatches === 0 && (
            <div className="text-center mt-[20px]">
              <p className="text-body-text mb-[10px]">{t.allGenerators.noResults}</p>
              <button
                onClick={() => setSearchQuery('')}
                className="font-heading text-[13px] text-brand-purple border border-brand-purple rounded-[4px] px-[12px] h-[32px] bg-transparent hover:bg-brand-purple/5 focus:outline-2 focus:outline-offset-2 focus:outline-brand-purple"
              >
                {t.allGenerators.clearSearch}
              </button>
              <p className="text-[13px] text-body-text mt-[10px]">
                <a href="/s/ai_site_builder" className="text-brand-purple hover:underline">{t.allGenerators.cantFind}</a>
              </p>
            </div>
          )}
        </div>

        {allEntries.map(([categoryId, generators]) => {
          const filtered = getFilteredGenerators(generators)
          const isSearching = searchQuery.trim().length > 0
          if (isSearching && filtered.length === 0) return null

          const displayGenerators = isSearching ? filtered : generators
          const isExpanded = expandedSections[categoryId]
          const shouldCollapse = jsReady && !isSearching && !isExpanded && displayGenerators.length > VISIBLE_COUNT
          const category = categories.find((c) => c.id === categoryId)
          const sectionControlId = `section-grid-${categoryId}`

          return (
            <div key={categoryId} id={categoryId} className="mb-[40px] scroll-mt-[80px]">
              <h3 className="font-heading text-[20px] md:text-[22px] text-heading-section mb-[5px]">
                {category?.name}
              </h3>
              <p className="text-body-text text-[14px] mb-[20px]">{category?.description}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px]">
                {displayGenerators.map((gen, idx) => {
                  const isHidden = shouldCollapse && idx >= VISIBLE_COUNT
                  return (
                    <a
                      key={gen.slug}
                      href={`/generators/${gen.slug}`}
                      className={`block bg-white border border-card-border rounded-[3px] p-[20px] card-hover focus:outline-2 focus:outline-offset-2 focus:outline-brand-purple ${isHidden ? 'hidden' : ''}`}
                      {...(isHidden ? { 'data-collapsed': categoryId } : {})}
                    >
                      <div className="mb-[10px]">
                        <CategoryIcon categoryId={categoryId} />
                      </div>
                      <span className="font-heading text-[14px] text-heading-section block mb-[5px]">
                        {gen.name}
                      </span>
                      <span className="text-body-text text-[13px] block">
                        {gen.description}
                      </span>
                    </a>
                  )
                })}
              </div>

              {jsReady && !isSearching && displayGenerators.length > VISIBLE_COUNT && (
                <div className="mt-[20px] text-center">
                  <button
                    onClick={() => toggleSection(categoryId)}
                    aria-expanded={isExpanded ? 'true' : 'false'}
                    aria-controls={sectionControlId}
                    className="font-heading text-[13px] text-brand-purple border border-brand-purple rounded-[4px] px-[15px] h-[36px] bg-transparent hover:bg-brand-purple/5 focus:outline-2 focus:outline-offset-2 focus:outline-brand-purple"
                  >
                    {isExpanded ? t.allGenerators.showLess : t.allGenerators.showAll(displayGenerators.length)}
                  </button>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}

function HowItWorks() {
  return (
    <section className="py-[40px]">
      <div className="max-w-content mx-auto px-[20px]">
        <h2 className="font-heading text-[26px] md:text-[30px] text-heading-section text-center mb-[30px]">
          {t.howItWorks.heading}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px]">
          {t.howItWorks.steps.map((step, i) => (
            <div key={i} className="text-center">
              <div className="w-[50px] h-[50px] rounded-full bg-brand-purple text-white font-heading text-[20px] flex items-center justify-center mx-auto mb-[15px]">
                {i + 1}
              </div>
              <p className="font-heading text-[16px] text-heading-section mb-[10px]">{step.title}</p>
              <p className="text-body-text text-[14px]">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function WhyStrikingly() {
  const icons = [
    <svg key="0" width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
      <circle cx="18" cy="18" r="14" stroke="#8159BB" strokeWidth="1.5" />
      <path d="M12 18L16 22L24 14" stroke="#8159BB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>,
    <svg key="1" width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
      <rect x="10" y="4" width="16" height="28" rx="3" stroke="#8159BB" strokeWidth="1.5" />
      <line x1="14" y1="28" x2="22" y2="28" stroke="#8159BB" strokeWidth="1.5" strokeLinecap="round" />
    </svg>,
    <svg key="2" width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
      <path d="M18 6L22 14H30L24 20L26 28L18 24L10 28L12 20L6 14H14L18 6Z" stroke="#8159BB" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>,
  ]

  return (
    <section className="py-[40px] bg-bg-light">
      <div className="max-w-content mx-auto px-[20px]">
        <h2 className="font-heading text-[26px] md:text-[30px] text-heading-section text-center mb-[30px]">
          {t.whyStrikingly.heading}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px]">
          {t.whyStrikingly.items.map((item, i) => (
            <div key={i} className="text-center">
              <div className="flex justify-center mb-[15px]">{icons[i]}</div>
              <p className="font-heading text-[15px] text-heading-section mb-[10px]">{item.title}</p>
              <p className="text-body-text text-[14px]">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="py-[40px]">
      <div className="max-w-content mx-auto px-[20px]">
        <h2 className="font-heading text-[26px] md:text-[30px] text-heading-section text-center mb-[30px]">
          {t.faq.heading}
        </h2>
        <div className="max-w-[800px] mx-auto">
          {t.faq.items.map((item, i) => {
            const isOpen = openIndex === i
            const panelId = `faq-panel-${i}`
            const buttonId = `faq-button-${i}`
            return (
              <div key={i} className="border-b border-divider">
                <button
                  id={buttonId}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  className="w-full flex items-center justify-between py-[20px] px-0 bg-transparent border-0 text-start text-heading-section font-semibold text-[15px] hover:text-brand-purple focus:outline-2 focus:outline-offset-2 focus:outline-brand-purple"
                >
                  <span>{item.question}</span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    aria-hidden="true"
                    className={`flex-shrink-0 ml-[10px] transition-transform ${isOpen ? 'rotate-180' : ''}`}
                  >
                    <path d="M5 8L10 13L15 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[500px] opacity-100 pb-[20px]' : 'max-h-0 opacity-0'}`}
                >
                  <p className="text-body-text text-[14px] leading-relaxed">{item.answer}</p>
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
    <section className="py-[60px]">
      <div className="max-w-content mx-auto px-[20px] text-center">
        <h2 className="font-heading text-[28px] md:text-[32px] text-heading-section mb-[10px]">
          {t.closingCta.heading}
        </h2>
        <p className="text-body-text text-[16px] mb-[30px]">{t.closingCta.sub}</p>
        <a
          href="/s/ai_site_builder"
          className="font-heading inline-flex items-center justify-center h-[44px] px-[24px] rounded-[4px] ai-gradient-bg text-white text-[14px] tracking-wide hover:opacity-90 focus:outline-2 focus:outline-offset-2 focus:outline-brand-purple"
        >
          {t.closingCta.cta}
        </a>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-divider py-[40px]">
      <div className="max-w-content mx-auto px-[20px]">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-[30px] mb-[30px]">
          {t.footer.columns.map((col, i) => (
            <div key={i}>
              <span className="font-heading text-[13px] text-heading-section block mb-[10px]">{col.title}</span>
              <ul className="list-none m-0 p-0 space-y-[8px]">
                {col.links.map((link, j) => (
                  <li key={j}>
                    <a href={link.href} className="text-body-text text-[13px] hover:text-brand-purple hover:underline">
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-divider pt-[20px] flex flex-col md:flex-row items-center justify-between gap-[10px]">
          <span className="font-heading text-[14px] text-heading-dark">
            strikingly <span className="text-brand-purple">AI</span>
          </span>
          <span className="text-[12px] text-body-text">{t.footer.copyright}</span>
        </div>
      </div>
    </footer>
  )
}

function App() {
  return (
    <>
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
    </>
  )
}

export default App
