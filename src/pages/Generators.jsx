import { useState, useCallback } from 'react'
import {
  strings,
  featuredGenerators,
  categories,
  allGenerators,
  footerLinks,
} from '@/data/content.js'

const t = strings.en
const INITIAL_VISIBLE = 6

/* ─── SVG Icons ─── */
const LogoSvg = () => (
  <svg aria-hidden="true" width="140" height="28" viewBox="0 0 140 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <text x="0" y="21" fontFamily="Josefin Sans, sans-serif" fontWeight="700" fontSize="18" fill="#4B5056">strikingly</text>
    <text x="100" y="21" fontFamily="Josefin Sans, sans-serif" fontWeight="700" fontSize="18" fill="#8159BB"> AI</text>
  </svg>
)

const SearchIcon = () => (
  <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#636972" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
)

const ArrowRightIcon = () => (
  <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
)

const ChevronDown = ({ expanded }) => (
  <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }}>
    <polyline points="6 9 12 15 18 9" />
  </svg>
)

const ZapIcon = () => (
  <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#8159BB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
)

const SmartphoneIcon = () => (
  <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#8159BB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
    <line x1="12" y1="18" x2="12.01" y2="18" />
  </svg>
)

const GiftIcon = () => (
  <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#8159BB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 12 20 22 4 22 4 12" />
    <rect x="2" y="7" width="20" height="5" />
    <line x1="12" y1="22" x2="12" y2="7" />
    <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
    <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
  </svg>
)

const HeroIllustration = () => (
  <svg aria-hidden="true" width="480" height="360" viewBox="0 0 480 360" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto max-w-[480px]">
    <rect x="60" y="40" width="360" height="280" rx="12" stroke="#8159BB" strokeWidth="2" fill="none" opacity="0.3" />
    <rect x="80" y="70" width="320" height="30" rx="4" stroke="#8159BB" strokeWidth="1.5" fill="none" opacity="0.2" />
    <rect x="80" y="120" width="150" height="120" rx="6" stroke="#8159BB" strokeWidth="1.5" fill="none" opacity="0.2" />
    <rect x="250" y="120" width="150" height="55" rx="6" stroke="#8159BB" strokeWidth="1.5" fill="none" opacity="0.2" />
    <rect x="250" y="185" width="150" height="55" rx="6" stroke="#8159BB" strokeWidth="1.5" fill="none" opacity="0.2" />
    <rect x="80" y="260" width="320" height="40" rx="4" stroke="#8159BB" strokeWidth="1.5" fill="none" opacity="0.2" />
    <circle cx="120" cy="85" r="6" fill="#8159BB" opacity="0.3" />
    <circle cx="140" cy="85" r="6" fill="#8159BB" opacity="0.2" />
    <circle cx="160" cy="85" r="6" fill="#8159BB" opacity="0.1" />
  </svg>
)

const CategoryIllustration = ({ category }) => {
  const icons = {
    websites: (
      <svg aria-hidden="true" width="40" height="40" viewBox="0 0 40 40" fill="none">
        <rect x="4" y="8" width="32" height="24" rx="3" stroke="#8159BB" strokeWidth="2" />
        <line x1="4" y1="16" x2="36" y2="16" stroke="#8159BB" strokeWidth="1.5" />
        <circle cx="9" cy="12" r="2" fill="#8159BB" opacity="0.4" />
      </svg>
    ),
    'landing-pages': (
      <svg aria-hidden="true" width="40" height="40" viewBox="0 0 40 40" fill="none">
        <rect x="8" y="4" width="24" height="32" rx="3" stroke="#8159BB" strokeWidth="2" />
        <rect x="12" y="10" width="16" height="4" rx="1" fill="#8159BB" opacity="0.3" />
        <rect x="14" y="28" width="12" height="4" rx="2" fill="#8159BB" opacity="0.5" />
      </svg>
    ),
    portfolios: (
      <svg aria-hidden="true" width="40" height="40" viewBox="0 0 40 40" fill="none">
        <rect x="4" y="4" width="14" height="14" rx="2" stroke="#8159BB" strokeWidth="2" />
        <rect x="22" y="4" width="14" height="14" rx="2" stroke="#8159BB" strokeWidth="2" />
        <rect x="4" y="22" width="14" height="14" rx="2" stroke="#8159BB" strokeWidth="2" />
        <rect x="22" y="22" width="14" height="14" rx="2" stroke="#8159BB" strokeWidth="2" />
      </svg>
    ),
    blogs: (
      <svg aria-hidden="true" width="40" height="40" viewBox="0 0 40 40" fill="none">
        <rect x="6" y="6" width="28" height="28" rx="3" stroke="#8159BB" strokeWidth="2" />
        <line x1="12" y1="14" x2="28" y2="14" stroke="#8159BB" strokeWidth="1.5" />
        <line x1="12" y1="20" x2="28" y2="20" stroke="#8159BB" strokeWidth="1.5" />
        <line x1="12" y1="26" x2="22" y2="26" stroke="#8159BB" strokeWidth="1.5" />
      </svg>
    ),
    stores: (
      <svg aria-hidden="true" width="40" height="40" viewBox="0 0 40 40" fill="none">
        <path d="M6 16 L6 34 L34 34 L34 16" stroke="#8159BB" strokeWidth="2" />
        <path d="M4 8 L36 8 L34 16 L6 16 Z" stroke="#8159BB" strokeWidth="2" />
        <rect x="16" y="24" width="8" height="10" stroke="#8159BB" strokeWidth="1.5" />
      </svg>
    ),
    'link-in-bio': (
      <svg aria-hidden="true" width="40" height="40" viewBox="0 0 40 40" fill="none">
        <rect x="12" y="4" width="16" height="32" rx="8" stroke="#8159BB" strokeWidth="2" />
        <rect x="16" y="12" width="8" height="3" rx="1.5" fill="#8159BB" opacity="0.4" />
        <rect x="16" y="18" width="8" height="3" rx="1.5" fill="#8159BB" opacity="0.4" />
        <rect x="16" y="24" width="8" height="3" rx="1.5" fill="#8159BB" opacity="0.4" />
      </svg>
    ),
  }
  return icons[category] || icons.websites
}

/* ─── Section Components ─── */

function TopBar() {
  return (
    <header className="bg-white border-b border-divider sticky top-0 z-50">
      <div className="max-w-content mx-auto px-[20px] py-[10px] flex items-center">
        <a href="/" aria-label="Strikingly home">
          <LogoSvg />
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
        <li aria-hidden="true" className="text-brand-purple">&gt;</li>
        <li aria-current="page">{t.breadcrumb.current}</li>
      </ol>
    </nav>
  )
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-ai-blue/[0.03] to-ai-pink/[0.03] pointer-events-none" aria-hidden="true" />
      <div className="max-w-content mx-auto px-[20px] py-[60px] md:py-[80px] flex flex-col md:flex-row items-center gap-[40px]">
        <div className="flex-1 text-center md:text-start">
          <h1 className="text-[28px] md:text-[44px] leading-[1.2] mb-[20px]">
            <span className="block text-heading-dark">{t.hero.h1Line1}</span>
            <span className="block ai-gradient-text">{t.hero.h1Line2}</span>
          </h1>
          <p className="text-body-text text-[16px] mb-[30px] max-w-[500px] mx-auto md:mx-0">
            {t.hero.sub}
          </p>
          <div className="flex flex-col sm:flex-row gap-[10px] justify-center md:justify-start">
            <a
              href="/s/ai_site_builder"
              className="inline-flex items-center justify-center h-[44px] px-[20px] rounded-[4px] ai-gradient-bg text-white text-[14px] font-heading font-bold uppercase tracking-wide"
            >
              {t.hero.ctaPrimary}
            </a>
            <a
              href="#all-generators"
              className="inline-flex items-center justify-center h-[44px] px-[20px] rounded-[4px] border border-brand-purple text-brand-purple text-[14px] font-heading font-bold uppercase tracking-wide bg-transparent"
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
        <h2 className="text-[26px] md:text-[30px] text-heading-section text-center mb-[5px]">
          {t.featured.heading}
        </h2>
        <p className="text-body-text text-center mb-[30px]">{t.featured.sub}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px]">
          {featuredGenerators.map((gen) => (
            <a
              key={gen.slug}
              href={`/generators/${gen.slug}`}
              className="block bg-white border border-card-border rounded-[3px] p-[20px] card-hover"
            >
              <span className="block font-heading font-bold text-[15px] text-heading-section uppercase mb-[5px]">
                {gen.name}
              </span>
              <span className="block text-body-text text-[14px] mb-[10px]">
                {gen.desc}
              </span>
              <span className="inline-block text-[11px] font-heading font-bold uppercase text-brand-purple border border-brand-purple rounded-[3px] px-[6px] py-[2px]">
                {gen.category}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

function BrowseByCategory() {
  return (
    <section className="py-[40px]">
      <div className="max-w-content mx-auto px-[20px]">
        <h2 className="text-[26px] md:text-[30px] text-heading-section text-center mb-[30px]">
          {t.browseByCategory.heading}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px]">
          {categories.map((cat) => (
            <a
              key={cat.slug}
              href={`/generators${cat.anchor}`}
              className="flex items-start gap-[15px] bg-white border border-card-border rounded-[3px] p-[20px] card-hover"
            >
              <div className="flex-shrink-0 mt-[2px]">
                <CategoryIllustration category={cat.slug} />
              </div>
              <div className="flex-1 min-w-0">
                <span className="block font-heading font-bold text-[15px] text-heading-section uppercase mb-[5px]">
                  {cat.name}
                </span>
                <span className="block text-body-text text-[14px]">
                  {cat.desc}
                </span>
              </div>
              <div className="flex-shrink-0 text-brand-purple mt-[2px]">
                <ArrowRightIcon />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

function AllGeneratorsSection() {
  const [searchQuery, setSearchQuery] = useState('')
  const [expandedSections, setExpandedSections] = useState({})

  const toggleSection = useCallback((slug) => {
    setExpandedSections((prev) => ({ ...prev, [slug]: !prev[slug] }))
  }, [])

  const normalizedQuery = searchQuery.toLowerCase().trim()
  const isSearching = normalizedQuery.length > 0

  let totalMatches = 0
  const filteredCategories = Object.entries(allGenerators).map(([slug, cat]) => {
    const filtered = cat.items.filter((item) => {
      if (!isSearching) return true
      return (
        item.name.toLowerCase().includes(normalizedQuery) ||
        item.desc.toLowerCase().includes(normalizedQuery) ||
        cat.heading.toLowerCase().includes(normalizedQuery)
      )
    })
    totalMatches += filtered.length
    return { slug, ...cat, filteredItems: filtered }
  })

  return (
    <section id="all-generators" className="py-[40px] bg-bg-light">
      <div className="max-w-content mx-auto px-[20px]">
        <h2 className="text-[26px] md:text-[30px] text-heading-section text-center mb-[5px]">
          {t.allGenerators.heading}
        </h2>
        <p className="text-body-text text-center mb-[30px]">{t.allGenerators.sub}</p>

        {/* Search */}
        <div className="max-w-[480px] mx-auto mb-[30px]">
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-[15px] pointer-events-none">
              <SearchIcon />
            </div>
            <input
              type="search"
              aria-label="Search generators"
              placeholder={t.allGenerators.searchPlaceholder}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-[44px] ps-[44px] pe-[15px] border border-card-border rounded-[4px] bg-white text-[14px] text-heading-section placeholder:text-body-text/60 focus:outline-none focus:border-brand-purple"
            />
          </div>
          {isSearching && (
            <p className="text-[13px] text-body-text mt-[10px] text-center">
              {t.allGenerators.matchCount(totalMatches)}
            </p>
          )}
        </div>

        {/* No results */}
        {isSearching && totalMatches === 0 && (
          <div className="text-center py-[40px]">
            <p className="text-body-text mb-[10px]">{t.allGenerators.noResults}</p>
            <button
              onClick={() => setSearchQuery('')}
              className="text-[14px] text-brand-purple border border-brand-purple rounded-[4px] h-[36px] px-[15px] bg-transparent mb-[10px]"
            >
              {t.allGenerators.clearSearch}
            </button>
            <p className="text-[14px]">
              <a href="/s/ai_site_builder" className="text-brand-purple hover:underline">
                {t.allGenerators.noResultsCta}
              </a>
            </p>
          </div>
        )}

        {/* Category subsections */}
        <div className="space-y-[40px]">
          {filteredCategories.map((cat) => {
            if (isSearching && cat.filteredItems.length === 0) return null
            const items = isSearching ? cat.filteredItems : cat.items
            const isExpanded = expandedSections[cat.slug] || isSearching
            const visibleItems = isExpanded ? items : items.slice(0, INITIAL_VISIBLE)
            const hasMore = items.length > INITIAL_VISIBLE

            return (
              <div key={cat.slug} id={cat.slug}>
                <h3 className="text-[20px] md:text-[24px] text-heading-section mb-[5px]">
                  {cat.heading}
                </h3>
                <p className="text-body-text mb-[20px]">{cat.desc}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px]">
                  {/* All items rendered in DOM for SEO, hidden visually via CSS */}
                  {items.map((item, idx) => (
                    <a
                      key={item.slug}
                      href={`/generators/${item.slug}`}
                      className={`block bg-white border border-card-border rounded-[3px] p-[20px] card-hover ${
                        !isExpanded && idx >= INITIAL_VISIBLE ? 'hidden' : ''
                      }`}
                      style={!isExpanded && idx >= INITIAL_VISIBLE ? { display: 'none' } : undefined}
                    >
                      <div className="mb-[10px]">
                        <CategoryIllustration category={cat.slug} />
                      </div>
                      <span className="block font-heading font-bold text-[15px] text-heading-section uppercase mb-[5px]">
                        {item.name}
                      </span>
                      <span className="block text-body-text text-[14px]">
                        {item.desc}
                      </span>
                    </a>
                  ))}
                </div>
                {hasMore && !isSearching && (
                  <div className="mt-[20px] text-center">
                    <button
                      onClick={() => toggleSection(cat.slug)}
                      aria-expanded={isExpanded}
                      aria-controls={cat.slug}
                      className="text-[14px] text-brand-purple border border-brand-purple rounded-[4px] h-[36px] px-[15px] bg-transparent inline-flex items-center gap-[5px]"
                    >
                      {isExpanded ? t.allGenerators.showLess : t.allGenerators.showAll(items.length)}
                      <ChevronDown expanded={isExpanded} />
                    </button>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function HowItWorks() {
  return (
    <section className="py-[40px]">
      <div className="max-w-content mx-auto px-[20px]">
        <h2 className="text-[26px] md:text-[30px] text-heading-section text-center mb-[30px]">
          {t.howItWorks.heading}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px]">
          {t.howItWorks.steps.map((step, i) => (
            <div key={i} className="text-center">
              <div className="w-[50px] h-[50px] rounded-full bg-brand-purple/10 flex items-center justify-center mx-auto mb-[15px]">
                <span className="font-heading font-bold text-[20px] text-brand-purple">{i + 1}</span>
              </div>
              <h3 className="text-[16px] text-heading-section mb-[10px]">{step.title}</h3>
              <p className="text-body-text text-[14px]">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function WhyStrikingly() {
  const icons = [<ZapIcon key="z" />, <SmartphoneIcon key="s" />, <GiftIcon key="g" />]
  return (
    <section className="py-[40px] bg-bg-light">
      <div className="max-w-content mx-auto px-[20px]">
        <h2 className="text-[26px] md:text-[30px] text-heading-section text-center mb-[30px]">
          {t.whyStrikingly.heading}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px]">
          {t.whyStrikingly.items.map((item, i) => (
            <div key={i} className="text-center">
              <div className="flex justify-center mb-[15px]">{icons[i]}</div>
              <h3 className="text-[16px] text-heading-section mb-[10px]">{item.title}</h3>
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
        <h2 className="text-[26px] md:text-[30px] text-heading-section text-center mb-[30px]">
          {t.faq.heading}
        </h2>
        <div className="max-w-[800px] mx-auto">
          {t.faq.items.map((item, i) => {
            const isOpen = openIndex === i
            const panelId = `faq-panel-${i}`
            const buttonId = `faq-button-${i}`
            return (
              <div key={i} className="border-b border-divider">
                <h3 className="text-[16px]">
                  <button
                    id={buttonId}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(isOpen ? -1 : i)}
                    className="w-full flex items-center justify-between py-[20px] text-start text-heading-section text-[15px] font-heading font-bold uppercase bg-transparent border-none px-0"
                  >
                    <span>{item.q}</span>
                    <ChevronDown expanded={isOpen} />
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className="section-collapse"
                  style={{ maxHeight: isOpen ? '500px' : '0px' }}
                >
                  <p className="text-body-text text-[14px] pb-[20px] leading-relaxed">
                    {item.a}
                  </p>
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
        <h2 className="text-[28px] md:text-[34px] text-heading-section mb-[10px]">
          {t.closingCta.heading}
        </h2>
        <p className="text-body-text text-[16px] mb-[30px]">{t.closingCta.sub}</p>
        <a
          href="/s/ai_site_builder"
          className="inline-flex items-center justify-center h-[44px] px-[24px] rounded-[4px] ai-gradient-bg text-white text-[14px] font-heading font-bold uppercase tracking-wide"
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
          {Object.values(footerLinks).map((col) => (
            <div key={col.title}>
              <span className="block font-heading font-bold text-[13px] text-heading-section uppercase mb-[10px]">
                {col.title}
              </span>
              <ul className="list-none m-0 p-0 space-y-[8px]">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-[13px] text-body-text hover:text-brand-purple">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-[10px] pt-[20px] border-t border-divider">
          <LogoSvg />
          <span className="text-[12px] text-body-text">{t.footer.copyright}</span>
        </div>
      </div>
    </footer>
  )
}

/* ─── Main Page ─── */
export default function GeneratorsPage() {
  return (
    <>
      <TopBar />
      <Breadcrumb />
      <main>
        <Hero />
        <FeaturedGenerators />
        <BrowseByCategory />
        <AllGeneratorsSection />
        <HowItWorks />
        <WhyStrikingly />
        <FAQ />
        <ClosingCTA />
      </main>
      <Footer />
    </>
  )
}
