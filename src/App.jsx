import { useState, useEffect, useCallback } from 'react'
import './App.css'
import { strings } from './data/strings'
import { categories, featuredGenerators, directoryGenerators, faqItems } from './data/generators'

const s = strings.en

const COLLAPSE_COUNT = 6

/* ─── Inline SVGs ─── */

const LogoIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
    <rect width="28" height="28" rx="6" fill="#8159BB"/>
    <path d="M8 10h12M8 14h8M8 18h10" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
  </svg>
)

const SearchIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#636972" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>
  </svg>
)

const ArrowRightIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#8159BB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>
)

const ChevronDownIcon = ({ expanded }) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#636972" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s ease' }}>
    <path d="m6 9 6 6 6-6"/>
  </svg>
)

const WebsiteIllustration = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
    <rect x="4" y="8" width="40" height="32" rx="3" stroke="#8159BB" strokeWidth="2" fill="none"/>
    <line x1="4" y1="14" x2="44" y2="14" stroke="#8159BB" strokeWidth="2"/>
    <circle cx="9" cy="11" r="1.5" fill="#8159BB"/><circle cx="13" cy="11" r="1.5" fill="#8159BB"/><circle cx="17" cy="11" r="1.5" fill="#8159BB"/>
    <rect x="8" y="18" width="14" height="8" rx="1" stroke="#8159BB" strokeWidth="1.5" fill="none"/>
    <rect x="26" y="18" width="14" height="18" rx="1" stroke="#8159BB" strokeWidth="1.5" fill="none"/>
    <rect x="8" y="30" width="14" height="6" rx="1" stroke="#8159BB" strokeWidth="1.5" fill="none"/>
  </svg>
)

const LandingPageIllustration = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
    <rect x="8" y="4" width="32" height="40" rx="3" stroke="#8159BB" strokeWidth="2" fill="none"/>
    <rect x="14" y="10" width="20" height="4" rx="1" stroke="#8159BB" strokeWidth="1.5" fill="none"/>
    <rect x="14" y="18" width="20" height="8" rx="1" stroke="#8159BB" strokeWidth="1.5" fill="none"/>
    <rect x="16" y="30" width="16" height="6" rx="2" stroke="#8159BB" strokeWidth="1.5" fill="none"/>
  </svg>
)

const PortfolioIllustration = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
    <rect x="4" y="8" width="40" height="32" rx="3" stroke="#8159BB" strokeWidth="2" fill="none"/>
    <rect x="8" y="12" width="16" height="12" rx="2" stroke="#8159BB" strokeWidth="1.5" fill="none"/>
    <rect x="28" y="12" width="12" height="5" rx="1" stroke="#8159BB" strokeWidth="1.5" fill="none"/>
    <rect x="28" y="20" width="12" height="4" rx="1" stroke="#8159BB" strokeWidth="1.5" fill="none"/>
    <rect x="8" y="28" width="32" height="8" rx="2" stroke="#8159BB" strokeWidth="1.5" fill="none"/>
  </svg>
)

const BlogIllustration = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
    <rect x="8" y="4" width="32" height="40" rx="3" stroke="#8159BB" strokeWidth="2" fill="none"/>
    <line x1="14" y1="12" x2="34" y2="12" stroke="#8159BB" strokeWidth="2" strokeLinecap="round"/>
    <line x1="14" y1="18" x2="30" y2="18" stroke="#8159BB" strokeWidth="1.5" strokeLinecap="round"/>
    <line x1="14" y1="22" x2="28" y2="22" stroke="#8159BB" strokeWidth="1.5" strokeLinecap="round"/>
    <line x1="14" y1="26" x2="32" y2="26" stroke="#8159BB" strokeWidth="1.5" strokeLinecap="round"/>
    <line x1="14" y1="30" x2="26" y2="30" stroke="#8159BB" strokeWidth="1.5" strokeLinecap="round"/>
    <line x1="14" y1="34" x2="30" y2="34" stroke="#8159BB" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
)

const StoreIllustration = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
    <path d="M8 20h32v20a3 3 0 0 1-3 3H11a3 3 0 0 1-3-3V20z" stroke="#8159BB" strokeWidth="2" fill="none"/>
    <path d="M4 20l4-12h32l4 12" stroke="#8159BB" strokeWidth="2" fill="none"/>
    <rect x="18" y="26" width="12" height="8" rx="2" stroke="#8159BB" strokeWidth="1.5" fill="none"/>
  </svg>
)

const LinkInBioIllustration = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
    <circle cx="24" cy="14" r="6" stroke="#8159BB" strokeWidth="2" fill="none"/>
    <rect x="14" y="24" width="20" height="4" rx="2" stroke="#8159BB" strokeWidth="1.5" fill="none"/>
    <rect x="16" y="32" width="16" height="4" rx="2" stroke="#8159BB" strokeWidth="1.5" fill="none"/>
    <rect x="18" y="40" width="12" height="4" rx="2" stroke="#8159BB" strokeWidth="1.5" fill="none"/>
  </svg>
)

const HeroIllustration = () => (
  <svg width="440" height="340" viewBox="0 0 440 340" fill="none" aria-hidden="true">
    <rect x="40" y="20" width="360" height="280" rx="12" stroke="#8159BB" strokeWidth="2" fill="none" opacity="0.3"/>
    <rect x="60" y="50" width="320" height="230" rx="8" stroke="#8159BB" strokeWidth="1.5" fill="none" opacity="0.5"/>
    <rect x="80" y="80" width="120" height="60" rx="4" stroke="#7671FF" strokeWidth="1.5" fill="none" opacity="0.6"/>
    <rect x="220" y="80" width="140" height="20" rx="3" stroke="#8159BB" strokeWidth="1.5" fill="none" opacity="0.4"/>
    <rect x="220" y="110" width="100" height="12" rx="2" stroke="#8159BB" strokeWidth="1" fill="none" opacity="0.3"/>
    <rect x="220" y="130" width="120" height="12" rx="2" stroke="#8159BB" strokeWidth="1" fill="none" opacity="0.3"/>
    <rect x="80" y="160" width="280" height="40" rx="4" stroke="#CB0C9F" strokeWidth="1.5" fill="none" opacity="0.4"/>
    <rect x="80" y="220" width="130" height="40" rx="4" stroke="#8159BB" strokeWidth="1.5" fill="none" opacity="0.4"/>
    <rect x="230" y="220" width="130" height="40" rx="4" stroke="#8159BB" strokeWidth="1.5" fill="none" opacity="0.4"/>
    <circle cx="380" cy="40" r="20" fill="url(#heroGrad)" opacity="0.15"/>
    <circle cx="60" cy="280" r="15" fill="url(#heroGrad)" opacity="0.1"/>
    <defs>
      <linearGradient id="heroGrad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#7671FF"/>
        <stop offset="100%" stopColor="#CB0C9F"/>
      </linearGradient>
    </defs>
  </svg>
)

const categoryIllustrations = {
  websites: WebsiteIllustration,
  'landing-pages': LandingPageIllustration,
  portfolios: PortfolioIllustration,
  blogs: BlogIllustration,
  stores: StoreIllustration,
  'link-in-bio': LinkInBioIllustration,
}

/* ─── Section: Top Bar ─── */
function TopBar() {
  return (
    <header className="w-full bg-white border-b border-divider">
      <div className="max-w-content mx-auto px-5 h-[60px] flex items-center">
        <a href="/" className="flex items-center gap-2 no-underline" aria-label="Strikingly home">
          <LogoIcon />
          <span className="font-heading font-bold text-heading-dark text-base uppercase tracking-wide">Strikingly AI</span>
        </a>
      </div>
    </header>
  )
}

/* ─── Section: Breadcrumb ─── */
function Breadcrumb() {
  return (
    <nav aria-label="Breadcrumb" className="w-full bg-white">
      <div className="max-w-content mx-auto px-5 py-3">
        <ol className="flex items-center gap-2 text-sm text-body-text font-body m-0 p-0 list-none">
          <li><a href="/" className="text-brand-purple hover:underline no-underline">{s.breadcrumbHome}</a></li>
          <li aria-hidden="true" className="text-body-text opacity-50">&gt;</li>
          <li><span aria-current="page" className="text-body-text">{s.breadcrumbCurrent}</span></li>
        </ol>
      </div>
    </nav>
  )
}

/* ─── Section: Hero ─── */
function Hero() {
  return (
    <section className="w-full hero-wash">
      <div className="max-w-content mx-auto px-5 py-[60px] md:py-[80px] flex flex-col md:flex-row items-center gap-10 md:gap-16">
        <div className="flex-1 text-center md:text-left">
          <h1 className="font-heading font-bold uppercase leading-tight m-0 mb-5">
            <span className="block text-heading-dark text-[28px] md:text-[40px] lg:text-[48px]">{s.heroLine1}</span>
            <span className="block ai-gradient-text text-[28px] md:text-[40px] lg:text-[48px]">{s.heroLine2}</span>
          </h1>
          <p className="text-body-text text-base md:text-lg leading-relaxed mb-8 max-w-lg mx-auto md:mx-0">{s.heroSub}</p>
          <div className="flex flex-col sm:flex-row items-center gap-[10px] justify-center md:justify-start">
            <a
              href="/s/ai_site_builder"
              className="ai-gradient text-white font-heading font-bold uppercase text-sm tracking-wide h-[44px] px-[15px] rounded-[4px] flex items-center justify-center no-underline hover:opacity-90 transition-opacity"
            >
              {s.heroPrimaryCta}
            </a>
            <a
              href="#all-generators"
              className="border border-brand-purple text-brand-purple font-heading font-bold uppercase text-sm tracking-wide h-[44px] px-[15px] rounded-[4px] flex items-center justify-center no-underline bg-transparent hover:bg-brand-purple hover:text-white transition-colors"
            >
              {s.heroSecondaryCta}
            </a>
          </div>
        </div>
        <div className="flex-shrink-0 hidden md:block">
          <HeroIllustration />
        </div>
      </div>
    </section>
  )
}

/* ─── Section: Featured Generators ─── */
function FeaturedGenerators() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-content mx-auto px-5 py-10 md:py-[40px]">
        <h2 className="font-heading font-bold uppercase text-heading text-[26px] md:text-[32px] text-center m-0 mb-2">{s.featuredHeading}</h2>
        <p className="text-body-text text-center text-base mb-8">{s.featuredSub}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {featuredGenerators.map((gen) => (
            <a
              key={gen.slug}
              href={`/generators/${gen.slug}`}
              className="generator-card block bg-white border border-card-border rounded-[3px] p-5 no-underline text-body-text hover:text-body-text"
            >
              <h3 className="font-heading font-bold uppercase text-heading-dark text-sm m-0 mb-2">{gen.name}</h3>
              <p className="text-body-text text-sm m-0 mb-3">{gen.description}</p>
              <span className="inline-block font-heading text-[11px] uppercase tracking-wide text-brand-purple border border-brand-purple rounded-[3px] px-[6px] py-[2px]">{gen.category}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Section: Browse by Category ─── */
function BrowseByCategory() {
  return (
    <section className="w-full bg-light-bg">
      <div className="max-w-content mx-auto px-5 py-10 md:py-[40px]">
        <h2 className="font-heading font-bold uppercase text-heading text-[26px] md:text-[32px] text-center m-0 mb-8">{s.browseHeading}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((cat) => {
            const Illust = categoryIllustrations[cat.slug]
            return (
              <a
                key={cat.slug}
                href={`/generators#${cat.slug}`}
                className="generator-card flex items-start gap-4 bg-white border border-card-border rounded-[3px] p-5 no-underline text-body-text hover:text-body-text"
              >
                <div className="flex-shrink-0">
                  {Illust && <Illust />}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-heading font-bold uppercase text-heading-dark text-sm m-0 mb-1">{cat.name}</h3>
                  <p className="text-body-text text-sm m-0">{cat.description}</p>
                </div>
                <div className="flex-shrink-0 self-center">
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

/* ─── Directory Card ─── */
function DirectoryCard({ gen, categorySlug }) {
  const Illust = categoryIllustrations[categorySlug]
  return (
    <a
      href={`/generators/${gen.slug}`}
      className="generator-card block bg-white border border-card-border rounded-[3px] p-5 no-underline text-body-text hover:text-body-text"
    >
      {Illust && (
        <div className="mb-3">
          <Illust />
        </div>
      )}
      <h4 className="font-heading font-bold uppercase text-heading-dark text-sm m-0 mb-2">{gen.name}</h4>
      <p className="text-body-text text-sm m-0">{gen.description}</p>
    </a>
  )
}

/* ─── Category Subsection ─── */
function CategorySubsection({ catSlug, catName, catDescription, generators, searchQuery, expandedSections, toggleSection }) {
  const allGens = generators
  const filteredGens = searchQuery
    ? allGens.filter((g) => {
        const q = searchQuery.toLowerCase()
        return (
          g.name.toLowerCase().includes(q) ||
          g.description.toLowerCase().includes(q) ||
          catName.toLowerCase().includes(q)
        )
      })
    : allGens

  if (searchQuery && filteredGens.length === 0) return null

  const isExpanded = expandedSections[catSlug] || false
  const needsToggle = !searchQuery && allGens.length > COLLAPSE_COUNT
  const gridId = `grid-${catSlug}`
  const toggleId = `toggle-${catSlug}`

  /* All cards are always in the DOM. When JS is available and the section
     is not expanded, cards beyond COLLAPSE_COUNT get a CSS class that
     visually hides them. With JS off, every card stays visible. */
  const shouldHide = (i) => needsToggle && !isExpanded && i >= COLLAPSE_COUNT
  const shouldSearchHide = (gen) => searchQuery && !filteredGens.includes(gen)

  return (
    <div id={catSlug} className="scroll-mt-20">
      <h3 className="font-heading font-bold uppercase text-heading text-lg md:text-xl m-0 mb-1">{catName}</h3>
      <p className="text-body-text text-sm mb-5">{catDescription}</p>
      <div
        id={gridId}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        role="region"
        aria-label={`${catName} generators`}
      >
        {allGens.map((gen, i) => (
          <div
            key={gen.slug}
            className={shouldHide(i) || shouldSearchHide(gen) ? 'js-hidden' : ''}
            data-gen-index={i}
          >
            <DirectoryCard gen={gen} categorySlug={catSlug} />
          </div>
        ))}
      </div>
      {needsToggle && (
        <button
          id={toggleId}
          type="button"
          className="mt-5 font-heading font-bold uppercase text-sm text-brand-purple bg-transparent border-none cursor-pointer hover:underline p-0"
          aria-expanded={isExpanded}
          aria-controls={gridId}
          onClick={() => toggleSection(catSlug)}
        >
          {isExpanded ? 'Show less' : `Show all ${allGens.length} generators`}
        </button>
      )}
    </div>
  )
}

/* ─── Section: All Generators ─── */
function AllGenerators() {
  const [searchQuery, setSearchQuery] = useState('')
  const [expandedSections, setExpandedSections] = useState({})
  const [matchCount, setMatchCount] = useState(0)

  const toggleSection = useCallback((catSlug) => {
    setExpandedSections((prev) => ({ ...prev, [catSlug]: !prev[catSlug] }))
  }, [])

  useEffect(() => {
    if (!searchQuery) {
      setMatchCount(0)
      return
    }
    const q = searchQuery.toLowerCase()
    let count = 0
    Object.entries(directoryGenerators).forEach(([catSlug, gens]) => {
      const catObj = categories.find((c) => c.slug === catSlug)
      const catName = catObj ? catObj.name : ''
      gens.forEach((g) => {
        if (
          g.name.toLowerCase().includes(q) ||
          g.description.toLowerCase().includes(q) ||
          catName.toLowerCase().includes(q)
        ) {
          count++
        }
      })
    })
    setMatchCount(count)
  }, [searchQuery])

  const hasNoResults = searchQuery && matchCount === 0

  return (
    <section id="all-generators" className="w-full bg-white">
      <div className="max-w-content mx-auto px-5 py-10 md:py-[40px]">
        <h2 className="font-heading font-bold uppercase text-heading text-[26px] md:text-[32px] text-center m-0 mb-2">{s.allGeneratorsHeading}</h2>
        <p className="text-body-text text-center text-base mb-8">{s.allGeneratorsSub}</p>

        {/* Search */}
        <div className="max-w-[480px] mx-auto mb-8">
          <div className="relative">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
              <SearchIcon />
            </div>
            <input
              type="search"
              aria-label="Search generators"
              placeholder={s.searchPlaceholder}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-[36px] pl-10 pr-4 border border-card-border rounded-[4px] text-sm font-body text-body-text bg-white focus:border-brand-purple focus:outline-none"
            />
          </div>
          {searchQuery && matchCount > 0 && (
            <p className="text-body-text text-sm mt-2 text-center">
              {s.searchMatchCount.replace('{count}', matchCount)}
            </p>
          )}
        </div>

        {/* No results */}
        {hasNoResults && (
          <div className="text-center py-10">
            <p className="text-body-text text-base mb-3">{s.searchNoResults}</p>
            <button
              type="button"
              className="font-heading font-bold uppercase text-sm text-brand-purple bg-transparent border-none cursor-pointer hover:underline p-0 mr-5"
              onClick={() => setSearchQuery('')}
            >
              {s.searchClear}
            </button>
            <a href="/s/ai_site_builder" className="font-heading font-bold uppercase text-sm text-brand-purple hover:underline no-underline">
              {s.searchCantFind}
            </a>
          </div>
        )}

        {/* Category subsections */}
        <div className="flex flex-col gap-10">
          {categories.map((cat) => (
            <CategorySubsection
              key={cat.slug}
              catSlug={cat.slug}
              catName={cat.name}
              catDescription={cat.description}
              generators={directoryGenerators[cat.slug] || []}
              searchQuery={searchQuery}
              expandedSections={expandedSections}
              toggleSection={toggleSection}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Section: How It Works ─── */
function HowItWorks() {
  const steps = [
    { num: 1, title: s.step1Title, desc: s.step1Desc },
    { num: 2, title: s.step2Title, desc: s.step2Desc },
    { num: 3, title: s.step3Title, desc: s.step3Desc },
  ]
  return (
    <section className="w-full bg-light-bg">
      <div className="max-w-content mx-auto px-5 py-10 md:py-[40px]">
        <h2 className="font-heading font-bold uppercase text-heading text-[26px] md:text-[32px] text-center m-0 mb-8">{s.howItWorksHeading}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.num} className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-brand-purple flex items-center justify-center mb-4">
                <span className="text-white font-heading font-bold text-lg">{step.num}</span>
              </div>
              <h3 className="font-heading font-bold uppercase text-heading-dark text-sm m-0 mb-2">{step.title}</h3>
              <p className="text-body-text text-sm m-0">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Section: Why Strikingly ─── */
function WhyStrikingly() {
  const items = [
    { title: s.why1Title, desc: s.why1Desc },
    { title: s.why2Title, desc: s.why2Desc },
    { title: s.why3Title, desc: s.why3Desc },
  ]
  return (
    <section className="w-full bg-white">
      <div className="max-w-content mx-auto px-5 py-10 md:py-[40px]">
        <h2 className="font-heading font-bold uppercase text-heading text-[26px] md:text-[32px] text-center m-0 mb-8">{s.whyHeading}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full border-2 border-brand-purple flex items-center justify-center mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#8159BB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  {i === 0 && <><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></>}
                  {i === 1 && <><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12" y2="18.01"/></>}
                  {i === 2 && <><circle cx="12" cy="12" r="10"/><path d="M8 12l3 3 5-5"/></>}
                </svg>
              </div>
              <h3 className="font-heading font-bold uppercase text-heading-dark text-sm m-0 mb-2">{item.title}</h3>
              <p className="text-body-text text-sm m-0">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Section: FAQ ─── */
function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? -1 : i)
  }

  return (
    <section className="w-full bg-light-bg">
      <div className="max-w-content mx-auto px-5 py-10 md:py-[40px]">
        <h2 className="font-heading font-bold uppercase text-heading text-[26px] md:text-[32px] text-center m-0 mb-8">{s.faqHeading}</h2>
        <div className="max-w-[720px] mx-auto flex flex-col gap-0">
          {faqItems.map((item, i) => {
            const isOpen = openIndex === i
            const panelId = `faq-panel-${i}`
            const buttonId = `faq-button-${i}`
            return (
              <div key={i} className="border-b border-divider">
                <button
                  id={buttonId}
                  type="button"
                  className="w-full flex items-center justify-between py-4 text-left bg-transparent border-none cursor-pointer font-heading font-bold uppercase text-heading-dark text-sm hover:text-brand-purple transition-colors"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => toggle(i)}
                >
                  <span className="pr-4">{item.question}</span>
                  <ChevronDownIcon expanded={isOpen} />
                </button>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className="faq-content"
                  style={{ maxHeight: isOpen ? '500px' : '0px' }}
                >
                  <p className="text-body-text text-sm leading-relaxed pb-4 m-0">{item.answer}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* ─── Section: Closing CTA ─── */
function ClosingCTA() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-content mx-auto px-5 py-10 md:py-[40px] text-center">
        <h2 className="font-heading font-bold uppercase text-heading text-[26px] md:text-[32px] m-0 mb-2">{s.closingHeading}</h2>
        <p className="text-body-text text-base mb-8">{s.closingSub}</p>
        <a
          href="/s/ai_site_builder"
          className="ai-gradient text-white font-heading font-bold uppercase text-sm tracking-wide h-[44px] px-[15px] rounded-[4px] inline-flex items-center justify-center no-underline hover:opacity-90 transition-opacity"
        >
          {s.closingCta}
        </a>
      </div>
    </section>
  )
}

/* ─── Section: Footer ─── */
function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="w-full bg-white border-t border-divider">
      <div className="max-w-content mx-auto px-5 py-10">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-8">
          <div className="col-span-2 md:col-span-1">
            <a href="/" className="flex items-center gap-2 no-underline mb-4" aria-label="Strikingly home">
              <LogoIcon />
              <span className="font-heading font-bold text-heading-dark text-sm uppercase tracking-wide">Strikingly</span>
            </a>
          </div>
          <div>
            <h4 className="font-heading font-bold uppercase text-heading-dark text-xs m-0 mb-3">Product</h4>
            <ul className="list-none p-0 m-0 flex flex-col gap-2">
              <li><a href="/templates" className="text-body-text text-sm no-underline hover:text-brand-purple">Templates</a></li>
              <li><a href="/pricing" className="text-body-text text-sm no-underline hover:text-brand-purple">Pricing</a></li>
              <li><a href="/s/ai_site_builder" className="text-body-text text-sm no-underline hover:text-brand-purple">AI Site Builder</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-heading font-bold uppercase text-heading-dark text-xs m-0 mb-3">Resources</h4>
            <ul className="list-none p-0 m-0 flex flex-col gap-2">
              <li><a href="/blog" className="text-body-text text-sm no-underline hover:text-brand-purple">Blog</a></li>
              <li><a href="/support" className="text-body-text text-sm no-underline hover:text-brand-purple">Support</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-heading font-bold uppercase text-heading-dark text-xs m-0 mb-3">Company</h4>
            <ul className="list-none p-0 m-0 flex flex-col gap-2">
              <li><a href="/about" className="text-body-text text-sm no-underline hover:text-brand-purple">About</a></li>
              <li><a href="/terms" className="text-body-text text-sm no-underline hover:text-brand-purple">Terms</a></li>
              <li><a href="/privacy" className="text-body-text text-sm no-underline hover:text-brand-purple">Privacy</a></li>
            </ul>
          </div>
        </div>
        <p className="text-body-text text-xs m-0 text-center">{s.footerCopyright.replace('{year}', year)}</p>
      </div>
    </footer>
  )
}

/* ─── Main App ─── */
function App() {
  return (
    <div className="min-h-screen bg-white">
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

export default App
