import { useState, useRef, useMemo } from 'react'
import strings from './strings.js'
import './App.css'

const S = strings.en

/* -------------------------------------------------- */
/* Category SVG illustrations (inline)                */
/* -------------------------------------------------- */
const CategoryIcon = ({ type, className = '' }) => {
  const icons = {
    websites: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true" className={className}>
        <rect x="3" y="8" width="34" height="24" rx="3" stroke="#8159BB" strokeWidth="1.5" fill="none"/>
        <line x1="3" y1="14" x2="37" y2="14" stroke="#8159BB" strokeWidth="1.5"/>
        <circle cx="8" cy="11" r="1" fill="#8159BB"/>
        <circle cx="11.5" cy="11" r="1" fill="#8159BB"/>
        <circle cx="15" cy="11" r="1" fill="#8159BB"/>
      </svg>
    ),
    'landing-pages': (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true" className={className}>
        <rect x="4" y="6" width="32" height="28" rx="2" stroke="#8159BB" strokeWidth="1.5" fill="none"/>
        <line x1="4" y1="18" x2="36" y2="18" stroke="#8159BB" strokeWidth="1.5"/>
        <circle cx="9" cy="12" r="1.5" fill="#8159BB"/>
        <rect x="24" y="22" width="8" height="8" rx="1" stroke="#8159BB" strokeWidth="1.2" fill="none"/>
      </svg>
    ),
    portfolios: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true" className={className}>
        <rect x="5" y="5" width="30" height="30" rx="3" stroke="#8159BB" strokeWidth="1.5" fill="none"/>
        <circle cx="20" cy="17" r="5" stroke="#8159BB" strokeWidth="1.5" fill="none"/>
        <path d="M10 31 L15 24 L20 28 L25 20 L30 31" stroke="#8159BB" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    blogs: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true" className={className}>
        <rect x="6" y="5" width="20" height="30" rx="2" stroke="#8159BB" strokeWidth="1.5" fill="none"/>
        <line x1="10" y1="11" x2="22" y2="11" stroke="#8159BB" strokeWidth="1.5"/>
        <line x1="10" y1="16" x2="22" y2="16" stroke="#8159BB" strokeWidth="1.5"/>
        <line x1="10" y1="21" x2="18" y2="21" stroke="#8159BB" strokeWidth="1.5"/>
        <circle cx="30" cy="20" r="6" stroke="#8159BB" strokeWidth="1.5" fill="none"/>
        <path d="M30 17 L30 20 L32 22" stroke="#8159BB" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    stores: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true" className={className}>
        <rect x="3" y="10" width="34" height="24" rx="3" stroke="#8159BB" strokeWidth="1.5" fill="none"/>
        <line x1="3" y1="16" x2="37" y2="16" stroke="#8159BB" strokeWidth="1.5"/>
        <circle cx="14" cy="24" r="4" stroke="#8159BB" strokeWidth="1.5" fill="none"/>
        <circle cx="27" cy="24" r="4" stroke="#8159BB" strokeWidth="1.5" fill="none"/>
        <line x1="10" y1="24" x2="18" y2="24" stroke="#8159BB" strokeWidth="1.5"/>
        <line x1="23" y1="24" x2="31" y2="24" stroke="#8159BB" strokeWidth="1.5"/>
      </svg>
    ),
    'link-in-bio': (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true" className={className}>
        <rect x="10" y="3" width="20" height="34" rx="4" stroke="#8159BB" strokeWidth="1.5" fill="none"/>
        <circle cx="20" cy="12" r="3" stroke="#8159BB" strokeWidth="1.5" fill="none"/>
        <circle cx="20" cy="24" r="2" fill="#8159BB"/>
        <line x1="20" y1="15" x2="20" y2="21" stroke="#8159BB" strokeWidth="1.5"/>
      </svg>
    ),
  }
  return icons[type] || icons.websites
}

/* -------------------------------------------------- */
/* SVG placeholder for Featured cards                 */
/* -------------------------------------------------- */
const CardThumb = ({ category }) => {
  const colors = {
    Website: '#8159BB',
    Portfolio: '#8159BB',
    'Landing Page': '#8159BB',
    Store: '#8159BB',
    'Link-in-Bio': '#8159BB',
    Blog: '#8159BB',
  }
  const color = colors[category] || '#8159BB'
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
      <rect x="2" y="2" width="32" height="32" rx="4" stroke={color} strokeWidth="1.5" fill="none"/>
      <line x1="10" y1="12" x2="26" y2="12" stroke={color} strokeWidth="1.5"/>
      <line x1="10" y1="18" x2="22" y2="18" stroke={color} strokeWidth="1.5"/>
      <line x1="10" y1="24" x2="18" y2="24" stroke={color} strokeWidth="1.5"/>
    </svg>
  )
}

/* -------------------------------------------------- */
/* Why Strikingly icons                              */
/* -------------------------------------------------- */
const WhyIcon = ({ type }) => {
  if (type === 0) {
    return (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
        <circle cx="18" cy="18" r="14" stroke="#8159BB" strokeWidth="1.5" fill="none"/>
        <path d="M12 18 L16 22 L24 14" stroke="#8159BB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  }
  if (type === 1) {
    return (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
        <rect x="4" y="6" width="28" height="24" rx="3" stroke="#8159BB" strokeWidth="1.5" fill="none"/>
        <line x1="4" y1="14" x2="32" y2="14" stroke="#8159BB" strokeWidth="1.5"/>
        <rect x="22" y="19" width="8" height="8" rx="1" stroke="#8159BB" strokeWidth="1.2" fill="none"/>
      </svg>
    )
  }
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
      <rect x="5" y="5" width="26" height="26" rx="3" stroke="#8159BB" strokeWidth="1.5" fill="none"/>
      <text x="18" y="22" textAnchor="middle" fill="#8159BB" fontSize="14" fontWeight="bold">$</text>
    </svg>
  )
}

/* -------------------------------------------------- */
/* The Hero illustration SVG                         */
/* -------------------------------------------------- */
const HeroIllustration = () => (
  <svg
    width="480"
    height="360"
    viewBox="0 0 480 360"
    fill="none"
    aria-hidden="true"
    className="w-full h-auto max-w-[480px]"
    style={{ aspectRatio: '480/360' }}
  >
    <rect x="60" y="30" width="360" height="240" rx="12" stroke="#8159BB" strokeWidth="1.5" fill="none" opacity="0.4"/>
    <rect x="80" y="80" width="160" height="12" rx="2" stroke="#8159BB" strokeWidth="1" fill="none" opacity="0.3"/>
    <rect x="80" y="100" width="200" height="12" rx="2" stroke="#8159BB" strokeWidth="1" fill="none" opacity="0.3"/>
    <rect x="80" y="120" width="140" height="12" rx="2" stroke="#8159BB" strokeWidth="1" fill="none" opacity="0.3"/>
    <rect x="80" y="150" width="100" height="36" rx="4" stroke="url(#heroGrad)" strokeWidth="1.5" fill="none"/>
    <rect x="260" y="80" width="120" height="90" rx="6" stroke="#8159BB" strokeWidth="1" fill="none" opacity="0.25"/>
    <rect x="275" y="92" width="90" height="6" rx="1" stroke="#8159BB" strokeWidth="0.8" fill="none" opacity="0.2"/>
    <line x1="275" y1="106" x2="340" y2="106" stroke="#8159BB" strokeWidth="0.8" opacity="0.2"/>
    <line x1="275" y1="114" x2="320" y2="114" stroke="#8159BB" strokeWidth="0.8" opacity="0.2"/>
    <rect x="275" y="126" width="60" height="20" rx="3" stroke="#8159BB" strokeWidth="0.8" fill="none" opacity="0.2"/>
    <rect x="60" y="290" width="360" height="6" rx="3" stroke="#8159BB" strokeWidth="1" fill="none" opacity="0.2"/>
    <circle cx="80" cy="293" r="2" fill="#8159BB" opacity="0.3"/>
    <circle cx="92" cy="293" r="2" fill="#8159BB" opacity="0.3"/>
    <circle cx="104" cy="293" r="2" fill="#8159BB" opacity="0.3"/>
    <rect x="310" y="285" width="40" height="16" rx="3" fill="url(#heroGrad)" opacity="0.15"/>
    <defs>
      <linearGradient id="heroGrad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#7671FF"/>
        <stop offset="100%" stopColor="#CB0C9F"/>
      </linearGradient>
    </defs>
  </svg>
)

/* -------------------------------------------------- */
/* Breadcrumb component                              */
/* -------------------------------------------------- */
const Breadcrumb = () => (
  <nav aria-label="Breadcrumb" className="max-w-content mx-auto px-5 py-3">
    <ol className="flex items-center gap-2 text-sm text-strk-body list-none p-0 m-0">
      {S.breadcrumb.map((item, i) => (
        <li key={i} className="flex items-center gap-2">
          {i > 0 && <span className="text-strk-body/40" aria-hidden="true">/</span>}
          {item.url ? (
            <a href={item.url} className="hover:text-strk-purple transition-colors no-underline text-strk-body">
              {item.label}
            </a>
          ) : (
            <span className="text-strk-body/60" aria-current="page">{item.label}</span>
          )}
        </li>
      ))}
    </ol>
  </nav>
)

/* -------------------------------------------------- */
/* Hero section                                      */
/* -------------------------------------------------- */
const Hero = () => (
  <section className="relative overflow-hidden bg-strk-white">
    {/* Subtle purple wash */}
    <div className="absolute inset-0 pointer-events-none opacity-[0.03]" aria-hidden="true">
      <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full" style={{ background: 'radial-gradient(circle, #7671FF 0%, transparent 70%)' }}/>
      <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full" style={{ background: 'radial-gradient(circle, #CB0C9F 0%, transparent 70%)' }}/>
    </div>

    <div className="relative max-w-content mx-auto px-5 py-[60px] md:py-[80px]">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Left column */}
        <div className="flex flex-col gap-6">
          <h1 className="m-0 text-[32px] md:text-[44px] leading-[1.15]">
            <span className="block text-strk-hero">{S.hero.h1Line1}</span>
            <span className="block ai-gradient-text">{S.hero.h1Line2}</span>
          </h1>
          <p className="text-strk-body text-[14px] md:text-[16px] leading-relaxed max-w-[520px]">
            {S.hero.subheadline}
          </p>
          <div className="flex flex-col sm:flex-row gap-[10px] pt-2">
            <a
              href={S.hero.primaryCtaUrl}
              className="ai-gradient-btn inline-flex items-center justify-center h-[44px] px-[15px] py-[9px] rounded-strk-btn text-[14px] font-heading uppercase no-underline cursor-pointer whitespace-nowrap"
            >
              {S.hero.primaryCta}
            </a>
            <a
              href={S.hero.secondaryCtaUrl}
              className="ghost-btn inline-flex items-center justify-center h-[36px] px-[15px] py-[9px] rounded-strk-btn text-[14px] font-heading uppercase no-underline cursor-pointer whitespace-nowrap"
            >
              {S.hero.secondaryCta}
            </a>
          </div>
        </div>
        {/* Right column */}
        <div className="flex justify-center md:justify-end">
          <HeroIllustration />
        </div>
      </div>
    </div>
  </section>
)

/* -------------------------------------------------- */
/* Featured Generators Section                       */
/* -------------------------------------------------- */
const FeaturedGenerators = () => (
  <section className="bg-strk-light py-[40px]">
    <div className="max-w-content mx-auto px-5">
      <h2 className="text-[28px] md:text-[32px] text-strk-heading m-0 mb-2">{S.featured.heading}</h2>
      <p className="text-strk-body text-[14px] m-0 mb-8">{S.featured.subheading}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {S.featured.items.map((item) => (
          <a
            key={item.slug}
            href={`/generators/${item.slug}`}
            className="block bg-strk-white border border-strk-card-border rounded-strk p-5 no-underline card-hover"
          >
            <div className="flex items-start gap-3 mb-2">
              <CardThumb category={item.category} />
              <div className="flex-1 min-w-0">
                <h3 className="m-0 text-[14px] text-strk-heading font-heading leading-tight">{item.name}</h3>
              </div>
            </div>
            <p className="text-strk-body text-[13px] m-0 mb-3 leading-snug">{item.description}</p>
            <span className="category-tag inline-block">{item.category}</span>
          </a>
        ))}
      </div>
    </div>
  </section>
)

/* -------------------------------------------------- */
/* Browse by Category Section                        */
/* -------------------------------------------------- */
const BrowseByCategory = () => (
  <section className="bg-strk-white py-[40px]">
    <div className="max-w-content mx-auto px-5">
      <h2 className="text-[28px] md:text-[32px] text-strk-heading m-0 mb-2">{S.browseByCategory.heading}</h2>
      <p className="text-strk-body text-[14px] m-0 mb-8">{S.browseByCategory.description}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {S.browseByCategory.categories.map((cat) => (
          <a
            key={cat.slug}
            href={`#${cat.slug}`}
            className="block bg-strk-white border border-strk-card-border rounded-strk p-5 no-underline card-hover"
          >
            <div className="mb-3">
              <CategoryIcon type={cat.slug} />
            </div>
            <h3 className="m-0 text-[14px] text-strk-heading font-heading mb-1">{cat.name}</h3>
            <p className="text-strk-body text-[13px] m-0 leading-snug">{cat.description}</p>
            <div className="mt-3 flex justify-end">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M6 3 L11 8 L6 13" stroke="#8159BB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </a>
        ))}
      </div>
    </div>
  </section>
)

/* -------------------------------------------------- */
/* Subsection card (for All Generators)              */
/* -------------------------------------------------- */
const SubsectionCard = ({ item, subsectionId }) => (
  <a
    href={`/generators/${item.slug}`}
    className="block bg-strk-white border border-strk-card-border rounded-strk p-5 no-underline card-hover"
  >
    <div className="flex items-start gap-3 mb-2">
      <div className="shrink-0">
        <CategoryIcon type={subsectionId} className="w-8 h-8" />
      </div>
      <div className="flex-1 min-w-0">
        <h4 className="m-0 text-[14px] text-strk-heading font-heading leading-tight">{item.name}</h4>
      </div>
    </div>
    <p className="text-strk-body text-[13px] m-0 leading-snug">{item.description}</p>
  </a>
)

/* -------------------------------------------------- */
/* Collapsible subsection with Show all              */
/* -------------------------------------------------- */
const CollapsibleSubsection = ({ subsection, initialVisible }) => {
  const [expanded, setExpanded] = useState(false)
  const items = subsection.items
  const showToggle = items.length > initialVisible

  return (
    <div className="mb-10" id={subsection.id}>
      <h3 className="text-[18px] md:text-[20px] text-strk-heading m-0 mb-1">{subsection.name}</h3>
      <p className="text-strk-body text-[13px] m-0 mb-5">{subsection.description}</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((item, idx) => (
          <div
            key={item.slug}
            className={!expanded && idx >= initialVisible ? 'hidden' : ''}
          >
            <SubsectionCard item={item} subsectionId={subsection.id} />
          </div>
        ))}
      </div>

      {showToggle && (
        <div className="mt-4 text-center">
          <button
            type="button"
            className="ghost-btn inline-flex items-center justify-center h-[36px] px-[15px] py-[9px] rounded-strk-btn text-[14px] font-heading uppercase cursor-pointer"
            onClick={() => setExpanded((v) => !v)}
            aria-expanded={expanded}
            aria-controls={`${subsection.id}-grid`}
          >
            {expanded
              ? S.allGenerators.showLess
              : S.allGenerators.showAll(items.length)}
          </button>
        </div>
      )}
    </div>
  )
}

/* -------------------------------------------------- */
/* All Generators Section                            */
/* -------------------------------------------------- */
const AllGenerators = () => {
  const [query, setQuery] = useState('')
  const [showAll, setShowAll] = useState({})
  const searchRef = useRef(null)

  const filtered = useMemo(() => {
    if (!query.trim()) return null
    const q = query.toLowerCase().trim()
    const result = {}
    for (const sub of S.allGenerators.subsections) {
      const matched = sub.items.filter(
        (it) =>
          it.name.toLowerCase().includes(q) ||
          it.description.toLowerCase().includes(q) ||
          sub.name.toLowerCase().includes(q)
      )
      if (matched.length > 0) result[sub.id] = matched
    }
    return result
  }, [query])

  const totalMatchCount = useMemo(() => {
    if (!filtered) return 0
    return Object.values(filtered).reduce((sum, arr) => sum + arr.length, 0)
  }, [filtered])

  const isSearching = query.trim().length > 0

  return (
    <section id="all-generators" className="bg-strk-light py-[40px]">
      <div className="max-w-content mx-auto px-5">
        <h2 className="text-[28px] md:text-[32px] text-strk-heading m-0 mb-2">{S.allGenerators.heading}</h2>
        <p className="text-strk-body text-[14px] m-0 mb-6">{S.allGenerators.subheading}</p>

        {/* Search */}
        <div className="mb-8">
          <div className="relative max-w-[480px]">
            <svg
              className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-strk-body/50 pointer-events-none"
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden="true"
            >
              <circle cx="7" cy="7" r="5" stroke="currentColor" strokeWidth="1.5"/>
              <line x1="11" y1="11" x2="14.5" y2="14.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            <input
              ref={searchRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={S.allGenerators.searchPlaceholder}
              aria-label={S.allGenerators.searchLabel}
              className="w-full h-[40px] pl-9 pr-4 rounded-strk border border-strk-card-border bg-strk-white text-[14px] text-strk-body outline-none focus:border-strk-purple transition-colors"
            />
          </div>
          {isSearching && (
            <p className="text-[13px] text-strk-body mt-2 m-0">
              {totalMatchCount > 0
                ? S.allGenerators.resultCount(totalMatchCount)
                : S.allGenerators.emptyState}
            </p>
          )}
        </div>

        {/* Empty state */}
        {isSearching && totalMatchCount === 0 && (
          <div className="text-center py-10">
            <p className="text-strk-body text-[14px] mb-4">{S.allGenerators.emptyState}</p>
            <button
              type="button"
              className="ghost-btn inline-flex items-center justify-center h-[36px] px-[15px] py-[9px] rounded-strk-btn text-[14px] font-heading uppercase cursor-pointer mb-4"
              onClick={() => { setQuery(''); searchRef.current?.focus() }}
            >
              {S.allGenerators.clearSearch}
            </button>
            <p className="text-[13px] text-strk-body">
              {S.allGenerators.emptyStateAlt}{' '}
              <a href="/s/ai_site_builder" className="text-strk-purple no-underline hover:underline">Start with our AI builder.</a>
            </p>
          </div>
        )}

        {/* Subsections */}
        {(!isSearching || totalMatchCount > 0) && (
          <div>
            {S.allGenerators.subsections.map((sub) => {
              const match = filtered ? filtered[sub.id] : null

              // If searching and this sub has no match, hide entirely
              if (isSearching && !match) return null

              const displayItems = match || sub.items
              const initialVisible = 6

              return (
                <div key={sub.id} className="mb-10" id={`section-${sub.id}`}>
                  <h3 className="text-[18px] md:text-[20px] text-strk-heading m-0 mb-1">{sub.name}</h3>
                  <p className="text-strk-body text-[13px] m-0 mb-5">{sub.description}</p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {displayItems.map((item, idx) => {
                      // In search mode, show all matches. Otherwise apply the collapse.
                      const shouldHide = !isSearching && !showAll[sub.id] && idx >= initialVisible
                      return (
                        <div key={item.slug} className={shouldHide ? 'hidden' : ''}>
                          <SubsectionCard item={item} subsectionId={sub.id} />
                        </div>
                      )
                    })}
                  </div>

                  {!isSearching && sub.items.length > initialVisible && (
                    <div className="mt-4 text-center">
                      <button
                        type="button"
                        className="ghost-btn inline-flex items-center justify-center h-[36px] px-[15px] py-[9px] rounded-strk-btn text-[14px] font-heading uppercase cursor-pointer"
                        onClick={() =>
                          setShowAll((prev) => ({
                            ...prev,
                            [sub.id]: !prev[sub.id],
                          }))
                        }
                        aria-expanded={!!showAll[sub.id]}
                      >
                        {showAll[sub.id]
                          ? S.allGenerators.showLess
                          : S.allGenerators.showAll(sub.items.length)}
                      </button>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        )}
      </div>
    </section>
  )
}

/* -------------------------------------------------- */
/* How It Works                                      */
/* -------------------------------------------------- */
const HowItWorks = () => (
  <section className="bg-strk-white py-[40px]">
    <div className="max-w-content mx-auto px-5">
      <h2 className="text-[28px] md:text-[32px] text-strk-heading m-0 mb-2 text-center">{S.howItWorks.heading}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
        {S.howItWorks.steps.map((step) => (
          <div key={step.number} className="flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-strk-purple/10 flex items-center justify-center mb-4">
              <span className="text-strk-purple font-heading text-[20px]">{step.number}</span>
            </div>
            <h3 className="text-[14px] text-strk-heading font-heading m-0 mb-2">{step.title}</h3>
            <p className="text-strk-body text-[14px] m-0 leading-relaxed max-w-[320px]">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
)

/* -------------------------------------------------- */
/* Why Strikingly                                    */
/* -------------------------------------------------- */
const WhyStrikingly = () => (
  <section className="bg-strk-light py-[40px]">
    <div className="max-w-content mx-auto px-5">
      <h2 className="text-[28px] md:text-[32px] text-strk-heading m-0 mb-2 text-center">{S.whyStrikingly.heading}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
        {S.whyStrikingly.items.map((item, idx) => (
          <div key={idx} className="flex flex-col items-center text-center">
            <div className="mb-4">
              <WhyIcon type={idx} />
            </div>
            <h3 className="text-[14px] text-strk-heading font-heading m-0 mb-2">{item.title}</h3>
            <p className="text-strk-body text-[14px] m-0 leading-relaxed max-w-[320px]">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
)

/* -------------------------------------------------- */
/* FAQ Accordion                                     */
/* -------------------------------------------------- */
const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="bg-strk-white py-[40px]">
      <div className="max-w-content mx-auto px-5">
        <h2 className="text-[28px] md:text-[32px] text-strk-heading m-0 mb-8 text-center">{S.faq.heading}</h2>
        <div className="max-w-[720px] mx-auto divide-y divide-strk-divider">
          {S.faq.questions.map((item, idx) => {
            const isOpen = openIndex === idx
            return (
              <div key={idx} className="py-3">
                <button
                  type="button"
                  className="w-full flex items-center justify-between text-left py-2 bg-transparent border-none cursor-pointer font-heading text-[14px] text-strk-heading uppercase hover:text-strk-purple transition-colors focus-visible:outline-2 focus-visible:outline-strk-purple rounded-strk"
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${idx}`}
                >
                  <span>{item.question}</span>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    aria-hidden="true"
                    className={`transition-transform duration-200 shrink-0 ml-3 ${isOpen ? 'rotate-180' : ''}`}
                  >
                    <path d="M3 5 L7 9 L11 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                <div
                  id={`faq-panel-${idx}`}
                  role="region"
                  className={`accordion-panel ${isOpen ? 'max-h-[500px]' : 'max-h-0'}`}
                >
                  <p className="text-strk-body text-[14px] m-0 py-3 leading-relaxed">{item.answer}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* -------------------------------------------------- */
/* Closing CTA                                       */
/* -------------------------------------------------- */
const ClosingCTA = () => (
  <section className="bg-strk-white py-[60px]">
    <div className="max-w-content mx-auto px-5 text-center">
      <h2 className="text-[28px] md:text-[32px] text-strk-heading m-0 mb-2">{S.closingCta.heading}</h2>
      <p className="text-strk-body text-[14px] m-0 mb-6">{S.closingCta.subheading}</p>
      <a
        href={S.closingCta.ctaUrl}
        className="ai-gradient-btn inline-flex items-center justify-center h-[44px] px-[15px] py-[9px] rounded-strk-btn text-[14px] font-heading uppercase no-underline cursor-pointer"
      >
        {S.closingCta.cta}
      </a>
    </div>
  </section>
)

/* -------------------------------------------------- */
/* Footer                                            */
/* -------------------------------------------------- */
const Footer = () => (
  <footer className="bg-strk-light py-[40px] border-t border-strk-divider">
    <div className="max-w-content mx-auto px-5">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
        {S.footer.columns.map((col, idx) => (
          <div key={idx}>
            <h4 className="text-[12px] text-strk-heading font-heading m-0 mb-3">{col.title}</h4>
            <ul className="list-none p-0 m-0 space-y-2">
              {col.links.map((link, li) => (
                <li key={li}>
                  {link.url ? (
                    <a href={link.url} className="text-strk-body text-[13px] no-underline hover:text-strk-purple transition-colors">
                      {link.label}
                    </a>
                  ) : (
                    <span className="text-strk-body text-[13px]">{link.label}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="text-center text-strk-body/60 text-[12px]">
        {S.footer.copyright}
      </div>
    </div>
  </footer>
)

/* -------------------------------------------------- */
/* Top Bar                                           */
/* -------------------------------------------------- */
const TopBar = () => (
  <header className="bg-strk-white border-b border-strk-divider">
    <div className="max-w-content mx-auto px-5 h-[56px] flex items-center">
      <a href="/" className="no-underline">
        <span className="font-heading text-[18px] text-strk-purple tracking-tight">{S.siteName}</span>
      </a>
    </div>
  </header>
)

/* -------------------------------------------------- */
/* App                                                */
/* -------------------------------------------------- */
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
