import { useState, useCallback } from 'react'
import { strings } from '../data/strings'
import { categories, featuredGeneratorsWithSlugs, allGeneratorsWithSlugs } from '../data/generators'

const t = strings.en

// SVG Icons
const SearchIcon = () => (
  <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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

const ChevronDownIcon = ({ className }) => (
  <svg aria-hidden="true" className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6 9 12 15 18 9" />
  </svg>
)

const ZapIcon = () => (
  <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
)

const SmartphoneIcon = () => (
  <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
    <line x1="12" y1="18" x2="12.01" y2="18" />
  </svg>
)

const GiftIcon = () => (
  <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 12 20 22 4 22 4 12" />
    <rect x="2" y="7" width="20" height="5" />
    <line x1="12" y1="22" x2="12" y2="7" />
    <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
    <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
  </svg>
)

// Category illustration SVGs (simple line art)
const CategoryIllustration = ({ categoryId }) => {
  const illustrations = {
    websites: (
      <svg aria-hidden="true" width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="#8159BB" strokeWidth="1.5">
        <rect x="4" y="6" width="32" height="24" rx="2" />
        <line x1="4" y1="12" x2="36" y2="12" />
        <circle cx="8" cy="9" r="1.5" fill="#8159BB" stroke="none" />
        <circle cx="13" cy="9" r="1.5" fill="#8159BB" stroke="none" />
        <rect x="8" y="16" width="10" height="3" rx="1" />
        <rect x="8" y="22" width="24" height="2" rx="1" opacity="0.5" />
        <line x1="12" y1="34" x2="28" y2="34" />
      </svg>
    ),
    'landing-pages': (
      <svg aria-hidden="true" width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="#8159BB" strokeWidth="1.5">
        <rect x="8" y="4" width="24" height="32" rx="2" />
        <rect x="12" y="8" width="16" height="6" rx="1" opacity="0.3" fill="#8159BB" stroke="none" />
        <rect x="14" y="17" width="12" height="3" rx="1.5" fill="#8159BB" stroke="none" />
        <line x1="12" y1="24" x2="28" y2="24" opacity="0.5" />
        <line x1="12" y1="28" x2="24" y2="28" opacity="0.5" />
        <line x1="12" y1="32" x2="20" y2="32" opacity="0.5" />
      </svg>
    ),
    portfolios: (
      <svg aria-hidden="true" width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="#8159BB" strokeWidth="1.5">
        <rect x="4" y="8" width="14" height="10" rx="1" />
        <rect x="22" y="8" width="14" height="10" rx="1" />
        <rect x="4" y="22" width="14" height="10" rx="1" />
        <rect x="22" y="22" width="14" height="10" rx="1" />
      </svg>
    ),
    blogs: (
      <svg aria-hidden="true" width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="#8159BB" strokeWidth="1.5">
        <rect x="6" y="4" width="28" height="32" rx="2" />
        <line x1="10" y1="10" x2="30" y2="10" />
        <line x1="10" y1="15" x2="26" y2="15" opacity="0.5" />
        <line x1="10" y1="19" x2="28" y2="19" opacity="0.5" />
        <line x1="10" y1="23" x2="22" y2="23" opacity="0.5" />
        <rect x="10" y="27" width="12" height="5" rx="1" opacity="0.3" fill="#8159BB" stroke="none" />
      </svg>
    ),
    stores: (
      <svg aria-hidden="true" width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="#8159BB" strokeWidth="1.5">
        <path d="M6 14 L6 34 L34 34 L34 14" />
        <path d="M2 8 L6 14 L14 14 L16 8" />
        <path d="M16 8 L18 14 L26 14 L24 8" />
        <path d="M24 8 L26 14 L34 14 L38 8" />
        <line x1="2" y1="8" x2="38" y2="8" />
        <rect x="16" y="24" width="8" height="10" rx="1" />
      </svg>
    ),
    'link-in-bio': (
      <svg aria-hidden="true" width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="#8159BB" strokeWidth="1.5">
        <rect x="12" y="2" width="16" height="36" rx="3" />
        <circle cx="20" cy="10" r="3" />
        <rect x="15" y="16" width="10" height="3" rx="1.5" />
        <rect x="15" y="22" width="10" height="3" rx="1.5" />
        <rect x="15" y="28" width="10" height="3" rx="1.5" />
      </svg>
    ),
  }
  return illustrations[categoryId] || illustrations.websites
}

// Hero illustration SVG
const HeroIllustration = () => (
  <svg aria-hidden="true" width="480" height="360" viewBox="0 0 480 360" fill="none" className="w-full h-auto max-w-[480px]">
    {/* Browser window frame */}
    <rect x="40" y="30" width="400" height="300" rx="8" stroke="#8159BB" strokeWidth="1.5" opacity="0.6" />
    <rect x="40" y="30" width="400" height="30" rx="8" fill="#F4F6F8" stroke="#8159BB" strokeWidth="1.5" opacity="0.4" />
    <circle cx="62" cy="45" r="5" fill="#E2E4E7" />
    <circle cx="80" cy="45" r="5" fill="#E2E4E7" />
    <circle cx="98" cy="45" r="5" fill="#E2E4E7" />
    {/* Content blocks */}
    <rect x="70" y="80" width="160" height="16" rx="3" fill="#8159BB" opacity="0.2" />
    <rect x="70" y="106" width="120" height="10" rx="2" fill="#C6C9CD" opacity="0.5" />
    <rect x="70" y="126" width="140" height="10" rx="2" fill="#C6C9CD" opacity="0.3" />
    {/* CTA button */}
    <rect x="70" y="155" width="100" height="30" rx="4" fill="url(#heroGrad)" opacity="0.7" />
    {/* Image placeholder */}
    <rect x="280" y="80" width="130" height="90" rx="4" stroke="#8159BB" strokeWidth="1" opacity="0.3" />
    <path d="M310 130 L330 110 L350 125 L370 105 L390 130" stroke="#8159BB" strokeWidth="1" opacity="0.4" />
    {/* Cards row */}
    <rect x="70" y="210" width="110" height="80" rx="4" stroke="#C6C9CD" strokeWidth="1" />
    <rect x="195" y="210" width="110" height="80" rx="4" stroke="#C6C9CD" strokeWidth="1" />
    <rect x="320" y="210" width="110" height="80" rx="4" stroke="#C6C9CD" strokeWidth="1" />
    {/* Sparkle accents */}
    <circle cx="420" cy="90" r="3" fill="#7671FF" opacity="0.5" />
    <circle cx="60" cy="180" r="2" fill="#CB0C9F" opacity="0.4" />
    <circle cx="400" cy="200" r="2.5" fill="#8159BB" opacity="0.3" />
    <defs>
      <linearGradient id="heroGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#7671FF" />
        <stop offset="100%" stopColor="#CB0C9F" />
      </linearGradient>
    </defs>
  </svg>
)

// Initial visible count for "Show all" toggle
const INITIAL_VISIBLE = 6

export default function GeneratorsPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [expandedSections, setExpandedSections] = useState({})
  const [expandedFaq, setExpandedFaq] = useState(0)

  const toggleSection = useCallback((categoryId) => {
    setExpandedSections((prev) => ({
      ...prev,
      [categoryId]: !prev[categoryId],
    }))
  }, [])

  const toggleFaq = useCallback((index) => {
    setExpandedFaq((prev) => (prev === index ? -1 : index))
  }, [])

  // Search filtering
  const normalizedQuery = searchQuery.toLowerCase().trim()
  const filteredCategories = categories.map((cat) => {
    const generators = allGeneratorsWithSlugs[cat.id] || []
    if (!normalizedQuery) return { ...cat, generators, matchCount: generators.length }
    const filtered = generators.filter(
      (g) =>
        g.name.toLowerCase().includes(normalizedQuery) ||
        g.description.toLowerCase().includes(normalizedQuery) ||
        cat.name.toLowerCase().includes(normalizedQuery)
    )
    return { ...cat, generators: filtered, matchCount: filtered.length }
  })

  const totalMatches = filteredCategories.reduce((sum, cat) => sum + cat.matchCount, 0)
  const isSearching = normalizedQuery.length > 0

  return (
    <>
      {/* Section 0: Top Bar */}
      <header className="bg-white border-b border-divider sticky top-0 z-50">
        <div className="max-w-content mx-auto px-[20px] h-[50px] flex items-center">
          <a href="/" className="font-heading text-[16px] text-heading-dark tracking-wide">
            strikingly <span className="ai-gradient-text">AI</span>
          </a>
        </div>
      </header>

      {/* Section 1: Breadcrumb */}
      <nav aria-label="Breadcrumb" className="bg-white">
        <div className="max-w-content mx-auto px-[20px] py-[10px]">
          <ol className="flex items-center gap-[8px] text-[13px] text-body-text list-none m-0 p-0">
            <li><a href="/" className="hover:text-brand-purple">{t.breadcrumb.home}</a></li>
            <li aria-hidden="true" className="text-card-border">&gt;</li>
            <li aria-current="page" className="text-heading-section">{t.breadcrumb.current}</li>
          </ol>
        </div>
      </nav>

      <main>
        {/* Section 2: Hero */}
        <section className="bg-white relative overflow-hidden">
          {/* Faint purple-to-pink wash */}
          <div aria-hidden="true" className="absolute inset-0 opacity-[0.04]" style={{ background: 'radial-gradient(ellipse at 30% 50%, #7671FF, transparent 60%), radial-gradient(ellipse at 70% 80%, #CB0C9F, transparent 60%)' }} />
          <div className="max-w-content mx-auto px-[20px] py-[60px] md:py-[80px] relative z-10">
            <div className="flex flex-col md:flex-row items-center gap-[40px]">
              {/* Left column */}
              <div className="flex-1 text-center md:text-start">
                <h1 className="font-heading text-[28px] md:text-[44px] leading-[1.2] mb-[20px]">
                  <span className="text-heading-dark block">{t.hero.h1Line1}</span>
                  <span className="ai-gradient-text block">{t.hero.h1Line2}</span>
                </h1>
                <p className="text-body-text text-[16px] mb-[30px] max-w-[480px] mx-auto md:mx-0">
                  {t.hero.subheadline}
                </p>
                <div className="flex flex-col sm:flex-row gap-[10px] justify-center md:justify-start">
                  <a
                    href="/s/ai_site_builder"
                    className="ai-gradient-bg text-white font-heading text-[14px] h-[44px] px-[20px] rounded-btn inline-flex items-center justify-center hover:opacity-90 transition-opacity"
                  >
                    {t.hero.ctaPrimary}
                  </a>
                  <a
                    href="#all-generators"
                    className="border border-brand-purple text-brand-purple font-heading text-[14px] h-[44px] px-[20px] rounded-btn inline-flex items-center justify-center hover:bg-brand-purple hover:text-white transition-colors"
                  >
                    {t.hero.ctaSecondary}
                  </a>
                </div>
              </div>
              {/* Right column */}
              <div className="flex-1 flex justify-center">
                <HeroIllustration />
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Featured Generators */}
        <section className="py-[40px] bg-bg-light">
          <div className="max-w-content mx-auto px-[20px]">
            <h2 className="font-heading text-[26px] md:text-[30px] text-heading-section text-center mb-[5px]">
              {t.featured.heading}
            </h2>
            <p className="text-body-text text-center mb-[30px]">{t.featured.subheading}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px]">
              {featuredGeneratorsWithSlugs.map((gen) => (
                <a
                  key={gen.slug}
                  href={`/generators/${gen.slug}`}
                  className="block bg-white border border-card-border rounded-card p-[20px] card-hover"
                >
                  <span className="font-heading text-[14px] text-heading-section block mb-[5px]">
                    {gen.name}
                  </span>
                  <span className="text-body-text text-[13px] block mb-[10px]">
                    {gen.description}
                  </span>
                  <span className="inline-block font-heading text-[11px] text-brand-purple border border-brand-purple rounded-card px-[6px] py-[2px]">
                    {gen.category}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Section 4: Browse by Category */}
        <section className="py-[40px] bg-white">
          <div className="max-w-content mx-auto px-[20px]">
            <h2 className="font-heading text-[26px] md:text-[30px] text-heading-section text-center mb-[30px]">
              {t.browseByCategory.heading}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px]">
              {categories.map((cat) => (
                <a
                  key={cat.id}
                  href={`/generators#${cat.id}`}
                  className="block bg-white border border-card-border rounded-card p-[20px] card-hover group"
                >
                  <div className="mb-[10px]">
                    <CategoryIllustration categoryId={cat.id} />
                  </div>
                  <span className="font-heading text-[14px] text-heading-section block mb-[5px]">
                    {cat.name}
                  </span>
                  <span className="text-body-text text-[13px] block mb-[10px]">
                    {cat.description}
                  </span>
                  <span className="text-brand-purple group-hover:translate-x-1 transition-transform inline-block">
                    <ArrowRightIcon />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Section 5: All Generators */}
        <section id="all-generators" className="py-[40px] bg-bg-light">
          <div className="max-w-content mx-auto px-[20px]">
            <h2 className="font-heading text-[26px] md:text-[30px] text-heading-section text-center mb-[5px]">
              {t.allGenerators.heading}
            </h2>
            <p className="text-body-text text-center mb-[30px]">{t.allGenerators.subheading}</p>

            {/* Search */}
            <div className="max-w-[480px] mx-auto mb-[30px]">
              <div className="relative">
                <span className="absolute inset-y-0 left-[12px] flex items-center text-body-text pointer-events-none">
                  <SearchIcon />
                </span>
                <input
                  type="search"
                  aria-label="Search generators"
                  placeholder={t.allGenerators.searchPlaceholder}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full h-[40px] pl-[40px] pr-[12px] border border-card-border rounded-card text-[14px] text-heading-section bg-white focus:outline-none focus:border-brand-purple"
                />
              </div>
              {isSearching && (
                <p className="text-[13px] text-body-text mt-[8px] text-center">
                  {t.allGenerators.matchCount(totalMatches)}
                </p>
              )}
            </div>

            {/* No results state */}
            {isSearching && totalMatches === 0 && (
              <div className="text-center py-[40px]">
                <p className="text-body-text mb-[10px]">{t.allGenerators.noResults}</p>
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="font-heading text-[13px] text-brand-purple border border-brand-purple rounded-btn px-[15px] py-[9px] bg-transparent cursor-pointer hover:bg-brand-purple hover:text-white transition-colors"
                >
                  {t.allGenerators.clearSearch}
                </button>
                <p className="text-[13px] text-body-text mt-[10px]">
                  <a href="/s/ai_site_builder" className="text-brand-purple hover:underline">
                    {t.allGenerators.cantFind}
                  </a>
                </p>
              </div>
            )}

            {/* Category subsections */}
            {filteredCategories.map((cat) => {
              const generators = cat.generators
              const isExpanded = expandedSections[cat.id]
              const hasMore = generators.length > INITIAL_VISIBLE

              if (isSearching && cat.matchCount === 0) {
                // Still render in DOM but visually hidden for search
                return (
                  <div key={cat.id} id={cat.id} className="hidden" aria-hidden="true">
                    {(allGeneratorsWithSlugs[cat.id] || []).map((g) => (
                      <a key={g.slug} href={`/generators/${g.slug}`} tabIndex={-1}>{g.name}</a>
                    ))}
                  </div>
                )
              }

              return (
                <section key={cat.id} id={cat.id} className="mb-[40px]">
                  <h3 className="font-heading text-[20px] md:text-[22px] text-heading-section mb-[5px]">
                    {cat.name}
                  </h3>
                  <p className="text-body-text text-[13px] mb-[20px]">{cat.description}</p>
                  <div id={`${cat.id}-grid`} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px]">
                    {generators.map((gen, idx) => {
                      const isHidden = !isSearching && !isExpanded && hasMore && idx >= INITIAL_VISIBLE
                      return (
                        <a
                          key={gen.slug}
                          href={`/generators/${gen.slug}`}
                          className={`block bg-white border border-card-border rounded-card p-[20px] card-hover ${isHidden ? 'hidden' : ''}`}
                          {...(isHidden ? { 'aria-hidden': 'true', tabIndex: -1 } : {})}
                        >
                          <div className="mb-[10px]">
                            <CategoryIllustration categoryId={cat.id} />
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
                  {/* Show all toggle */}
                  {!isSearching && hasMore && (
                    <div className="mt-[20px] text-center">
                      <button
                        type="button"
                        aria-expanded={isExpanded}
                        aria-controls={`${cat.id}-grid`}
                        onClick={() => toggleSection(cat.id)}
                        className="font-heading text-[13px] text-brand-purple border border-brand-purple rounded-btn px-[15px] py-[9px] bg-transparent cursor-pointer hover:bg-brand-purple hover:text-white transition-colors inline-flex items-center gap-[5px]"
                      >
                        {isExpanded ? t.allGenerators.showLess : t.allGenerators.showAll(generators.length)}
                        <ChevronDownIcon className={`transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                      </button>
                    </div>
                  )}
                </section>
              )
            })}
          </div>
        </section>

        {/* Section 6: How It Works */}
        <section className="py-[40px] bg-white">
          <div className="max-w-content mx-auto px-[20px]">
            <h2 className="font-heading text-[26px] md:text-[30px] text-heading-section text-center mb-[30px]">
              {t.howItWorks.heading}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px]">
              {t.howItWorks.steps.map((step, i) => (
                <div key={i} className="text-center">
                  <div className="w-[50px] h-[50px] rounded-full bg-brand-purple text-white font-heading text-[18px] flex items-center justify-center mx-auto mb-[15px]">
                    {i + 1}
                  </div>
                  <h3 className="font-heading text-[14px] text-heading-section mb-[10px]">{step.title}</h3>
                  <p className="text-body-text text-[14px]">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 7: Why Strikingly */}
        <section className="py-[40px] bg-bg-light">
          <div className="max-w-content mx-auto px-[20px]">
            <h2 className="font-heading text-[26px] md:text-[30px] text-heading-section text-center mb-[30px]">
              {t.whyStrikingly.heading}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px]">
              {t.whyStrikingly.features.map((feature, i) => {
                const icons = [<ZapIcon key="zap" />, <SmartphoneIcon key="phone" />, <GiftIcon key="gift" />]
                return (
                  <div key={i} className="text-center">
                    <div className="text-brand-purple flex justify-center mb-[15px]">
                      {icons[i]}
                    </div>
                    <h3 className="font-heading text-[14px] text-heading-section mb-[10px]">{feature.title}</h3>
                    <p className="text-body-text text-[14px]">{feature.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Section 8: FAQ */}
        <section className="py-[40px] bg-white">
          <div className="max-w-content mx-auto px-[20px]">
            <h2 className="font-heading text-[26px] md:text-[30px] text-heading-section text-center mb-[30px]">
              {t.faq.heading}
            </h2>
            <div className="max-w-[720px] mx-auto">
              {t.faq.items.map((item, i) => {
                const isOpen = expandedFaq === i
                const panelId = `faq-panel-${i}`
                const buttonId = `faq-button-${i}`
                return (
                  <div key={i} className="border-b border-divider">
                    <h3>
                      <button
                        type="button"
                        id={buttonId}
                        aria-expanded={isOpen}
                        aria-controls={panelId}
                        onClick={() => toggleFaq(i)}
                        className="w-full flex items-center justify-between py-[15px] px-0 bg-transparent border-none cursor-pointer text-start"
                      >
                        <span className="font-heading text-[14px] text-heading-section">{item.question}</span>
                        <ChevronDownIcon className={`text-body-text transition-transform flex-shrink-0 ms-[10px] ${isOpen ? 'rotate-180' : ''}`} />
                      </button>
                    </h3>
                    <div
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      className="collapse-transition"
                      style={{ maxHeight: isOpen ? '500px' : '0px', opacity: isOpen ? 1 : 0 }}
                    >
                      <p className="text-body-text text-[14px] pb-[20px] leading-[1.6]">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Section 9: Closing CTA */}
        <section className="py-[60px] bg-white">
          <div className="max-w-content mx-auto px-[20px] text-center">
            <h2 className="font-heading text-[30px] md:text-[36px] text-heading-section mb-[10px]">
              {t.closingCta.heading}
            </h2>
            <p className="text-body-text text-[16px] mb-[30px]">{t.closingCta.subheading}</p>
            <a
              href="/s/ai_site_builder"
              className="ai-gradient-bg text-white font-heading text-[14px] h-[44px] px-[20px] rounded-btn inline-flex items-center justify-center hover:opacity-90 transition-opacity"
            >
              {t.closingCta.cta}
            </a>
          </div>
        </section>
      </main>

      {/* Section 10: Footer */}
      <footer className="py-[40px] bg-bg-light border-t border-divider">
        <div className="max-w-content mx-auto px-[20px]">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-[30px] mb-[30px]">
            {/* Logo column */}
            <div>
              <span className="font-heading text-[14px] text-heading-dark block mb-[10px]">
                strikingly <span className="ai-gradient-text">AI</span>
              </span>
            </div>
            {/* Link columns */}
            {t.footer.columns.map((col) => (
              <div key={col.title}>
                <span className="font-heading text-[12px] text-heading-section block mb-[10px]">
                  {col.title}
                </span>
                <ul className="list-none m-0 p-0 space-y-[8px]">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a href={link.href} className="text-body-text text-[13px] hover:text-brand-purple transition-colors">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="border-t border-divider pt-[20px]">
            <p className="text-body-text text-[12px] text-center">{t.footer.copyright}</p>
          </div>
        </div>
      </footer>
    </>
  )
}
