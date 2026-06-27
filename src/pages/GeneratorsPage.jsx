import { useState, useEffect, useRef, useCallback } from 'react'
import { featuredGenerators, allGenerators, categories } from '../data/generators.js'
import strings from '../data/strings.js'

const t = strings.en

function toSlug(text) {
  return text.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')
}

export default function GeneratorsPage() {
  const [search, setSearch] = useState('')
  const [expandedCategories, setExpandedCategories] = useState({})
  const [openFaq, setOpenFaq] = useState(0)

  const searchInputRef = useRef(null)

  const categorySubsections = categories.map((cat) => ({
    ...cat,
    generators: allGenerators.filter((g) => g.category === cat.name),
  }))

  const allCategorySlugs = categories.map((c) => c.slug)

  useEffect(() => {
    const initial = {}
    allCategorySlugs.forEach((slug) => {
      initial[slug] = false
    })
    setExpandedCategories(initial)
  }, [])

  const filteredSubsections = categorySubsections
    .map((sub) => {
      if (!search.trim()) return { ...sub, filtered: sub.generators }
      const q = search.toLowerCase()
      const filtered = sub.generators.filter(
        (g) =>
          g.name.toLowerCase().includes(q) ||
          g.description.toLowerCase().includes(q) ||
          g.category.toLowerCase().includes(q)
      )
      return { ...sub, filtered }
    })
    .filter((sub) => sub.filtered.length > 0)

  const totalVisible = filteredSubsections.reduce((sum, s) => sum + s.filtered.length, 0)

  const toggleCategory = useCallback((slug) => {
    setExpandedCategories((prev) => ({ ...prev, [slug]: !prev[slug] }))
  }, [])

  return (
    <>
      <TopBar />
      <Breadcrumb />
      <main>
        <HeroSection />
        <FeaturedSection />
        <BrowseCategories />
        <AllGeneratorsSection
          search={search}
          setSearch={setSearch}
          searchInputRef={searchInputRef}
          filteredSubsections={filteredSubsections}
          totalVisible={totalVisible}
          expandedCategories={expandedCategories}
          toggleCategory={toggleCategory}
        />
        <HowItWorks />
        <WhyStrikingly />
        <FaqSection openFaq={openFaq} setOpenFaq={setOpenFaq} />
        <ClosingCta />
      </main>
      <Footer />
    </>
  )
}

function TopBar() {
  return (
    <header className="bg-white border-b border-[#E2E4E7]">
      <div className="content-container flex items-center h-[50px]">
        <a
          href="/"
          className="font-heading font-bold text-lg uppercase text-[#2E2E2F] tracking-wider"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          {t.brandLogo}
        </a>
      </div>
    </header>
  )
}

function Breadcrumb() {
  return (
    <nav aria-label="Breadcrumb" className="content-container py-[10px]">
      <ol className="flex items-center gap-[5px] text-[13px] text-[#636972]" style={{ listStyle: 'none', margin: 0, padding: 0 }}>
        <li>
          <a href="/" className="text-[#636972] hover:text-[#8159BB]">{t.breadcrumbHome}</a>
        </li>
        <li aria-hidden="true" className="text-[#C6C9CD]">&gt;</li>
        <li className="text-[#636972]">{t.breadcrumbCurrent}</li>
      </ol>
    </nav>
  )
}

function HeroSection() {
  return (
    <section className="hero-gradient-wash section" style={{ paddingBlockStart: '60px', paddingBlockEnd: '80px' }}>
      <div className="content-container flex flex-col md:flex-row items-center gap-[40px]">
        <div className="flex-1 flex flex-col gap-[20px] items-start">
          <h1 className="text-[32px] md:text-[40px] lg:text-[48px] leading-[1.2]">
            <span className="block text-[#2E2E2F]">{t.heroLine1}</span>
            <span className="ai-gradient-text block">{t.heroLine2}</span>
          </h1>
          <p className="text-[#636972] text-[14px] max-w-[520px] leading-[1.6]">{t.heroSub}</p>
          <div className="flex flex-col sm:flex-row gap-[10px] mt-[10px]">
            <a href="/s/ai_site_builder" className="btn btn-gradient btn-lg">
              {t.heroPrimaryCta}
            </a>
            <a href="#all-generators" className="btn btn-ghost btn-lg">
              {t.heroSecondaryCta}
            </a>
          </div>
        </div>
        <div className="flex-1 flex justify-center md:justify-end">
          <svg
            aria-hidden="true"
            width="400"
            height="300"
            viewBox="0 0 400 300"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full max-w-[400px] h-auto"
          >
            <rect x="60" y="20" width="280" height="260" rx="8" stroke="#8159BB" strokeWidth="2" fill="white" opacity="0.9" />
            <rect x="60" y="20" width="280" height="36" rx="8" fill="#F4F6F8" stroke="#8159BB" strokeWidth="2" />
            <circle cx="76" cy="38" r="5" fill="#CB0C9F" opacity="0.5" />
            <circle cx="90" cy="38" r="5" fill="#7671FF" opacity="0.5" />
            <circle cx="104" cy="38" r="5" fill="#8159BB" opacity="0.5" />
            <rect x="140" y="70" width="140" height="12" rx="3" fill="#E2E4E7" />
            <rect x="90" y="90" width="220" height="8" rx="2" fill="#F4F6F8" />
            <rect x="90" y="105" width="180" height="8" rx="2" fill="#F4F6F8" />
            <rect x="90" y="135" width="220" height="80" rx="6" fill="#F4F6F8" stroke="#E2E4E7" strokeWidth="1" />
            <rect x="90" y="225" width="100" height="30" rx="4" fill="url(#hero-svg-grad)" />
            <defs>
              <linearGradient id="hero-svg-grad" x1="0" y1="0" x2="1" y2="1">
                <stop stopColor="#7671FF" />
                <stop offset="1" stopColor="#CB0C9F" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </section>
  )
}

function FeaturedSection() {
  return (
    <section className="section bg-[#F4F6F8]">
      <div className="content-container">
        <h2 className="text-[26px] md:text-[32px] text-[#4B5056] text-center mb-[10px]">{t.featuredHeading}</h2>
        <p className="text-[#636972] text-center mb-[30px]">{t.featuredSub}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px]">
          {featuredGenerators.map((gen) => (
            <a key={gen.slug} href={`/generators/${gen.slug}`} className="generator-card flex flex-col gap-[10px] group">
              <div className="flex items-start justify-between gap-[10px]">
                <span className="font-heading font-bold text-[15px] text-[#4B5056] uppercase leading-[1.2]" style={{ fontFamily: 'var(--font-heading)' }}>
                  {gen.name}
                </span>
                <span className="category-tag shrink-0">{gen.category}</span>
              </div>
              <p className="text-[#636972] text-[13px] leading-[1.5] m-0">{gen.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

function BrowseCategories() {
  return (
    <section className="section">
      <div className="content-container">
        <h2 className="text-[26px] md:text-[32px] text-[#4B5056] text-center mb-[30px]">{t.browseHeading}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px]">
          {categories.map((cat) => (
            <a
              key={cat.slug}
              href={`/generators#${cat.slug}`}
              className="generator-card flex flex-col gap-[10px] group"
            >
              <div className="flex items-center gap-[12px]">
                <span aria-hidden="true" className="w-[36px] h-[36px] rounded-full bg-[#F4F6F8] flex items-center justify-center text-[#8159BB] shrink-0">
                  <CategoryIcon slug={cat.slug} />
                </span>
                <span className="font-heading font-bold text-[15px] text-[#4B5056] uppercase leading-[1.2]" style={{ fontFamily: 'var(--font-heading)' }}>
                  {cat.name}
                </span>
                <span aria-hidden="true" className="ml-auto text-[#8159BB] text-[16px]">&rarr;</span>
              </div>
              <p className="text-[#636972] text-[13px] leading-[1.5] m-0">{cat.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

function CategoryIcon({ slug }) {
  switch (slug) {
    case 'websites':
      return (
        <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <line x1="3" y1="9" x2="21" y2="9" />
          <line x1="9" y1="21" x2="9" y2="9" />
        </svg>
      )
    case 'landing-pages':
      return (
        <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
        </svg>
      )
    case 'portfolios':
      return (
        <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
          <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
        </svg>
      )
    case 'blogs':
      return (
        <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
        </svg>
      )
    case 'stores':
      return (
        <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="9" cy="21" r="1" />
          <circle cx="20" cy="21" r="1" />
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
        </svg>
      )
    case 'link-in-bio':
      return (
        <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
        </svg>
      )
    default:
      return (
        <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="8" x2="12" y2="16" />
          <line x1="8" y1="12" x2="16" y2="12" />
        </svg>
      )
  }
}

function AllGeneratorsSection({
  search,
  setSearch,
  searchInputRef,
  filteredSubsections,
  totalVisible,
  expandedCategories,
  toggleCategory,
}) {
  return (
    <section id="all-generators" className="section bg-[#F4F6F8]">
      <div className="content-container">
        <h2 className="text-[26px] md:text-[32px] text-[#4B5056] text-center mb-[10px]">{t.allGeneratorsHeading}</h2>
        <p className="text-[#636972] text-center mb-[30px]">{t.allGeneratorsSub}</p>

        <div className="flex justify-center mb-[30px]">
          <div className="search-input-wrapper">
            <span className="search-icon" aria-hidden="true">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </span>
            <input
              ref={searchInputRef}
              type="search"
              aria-label={t.searchLabel}
              placeholder={t.searchPlaceholder}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        {search.trim() && (
          <p className="text-center text-[#636972] text-[13px] mb-[20px]">
            {t.resultsCount.replace('{count}', totalVisible)}
          </p>
        )}

        {filteredSubsections.length === 0 && search.trim() && (
          <div className="text-center py-[40px]">
            <p className="text-[#4B5056] font-heading font-bold mb-[10px]" style={{ fontFamily: 'var(--font-heading)' }}>
              {t.noResultsTitle}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-[10px]">
              <button className="btn btn-ghost" onClick={() => setSearch('')}>
                {t.clearSearch}
              </button>
              <a href="/s/ai_site_builder" className="text-[#8159BB] text-[14px] hover:underline">
                {t.noResultsAction}
              </a>
            </div>
          </div>
        )}

        {filteredSubsections.map((sub) => {
          const showExpandToggle = sub.generators.length > 9 && !search.trim()
          const isExpanded = expandedCategories[sub.slug]

          return (
            <div key={sub.slug} id={sub.slug} className="mb-[40px] scroll-mt-[70px]">
              <h3 className="text-[18px] md:text-[20px] text-[#4B5056] mb-[6px]">{sub.name}</h3>
              <p className="text-[#636972] text-[13px] mb-[20px]">{sub.description}</p>

              <div
                id={`cat-grid-${sub.slug}`}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px]"
                style={showExpandToggle && !isExpanded ? { maxHeight: `${Math.ceil(9 / 3) * 220}px`, overflow: 'hidden', transition: 'max-height 0.3s ease' } : {}}
              >
                {sub.filtered.map((gen, idx) => (
                  <a
                    key={gen.slug}
                    href={`/generators/${gen.slug}`}
                    className="generator-card flex flex-col gap-[8px] group"
                    style={showExpandToggle && !isExpanded && idx >= 9 ? { display: 'none' } : {}}
                  >
                    <span
                      aria-hidden="true"
                      className="w-full h-[80px] bg-[#F4F6F8] rounded-[2px] flex items-center justify-center"
                    >
                      <CategoryThumb slug={sub.slug} />
                    </span>
                    <span className="font-heading font-bold text-[14px] text-[#4B5056] uppercase leading-[1.2]" style={{ fontFamily: 'var(--font-heading)' }}>
                      {gen.name}
                    </span>
                    <p className="text-[#636972] text-[13px] leading-[1.5] m-0">{gen.description}</p>
                  </a>
                ))}
              </div>

              {showExpandToggle && (
                <div className="text-center mt-[20px]">
                  <button
                    className="btn btn-ghost"
                    aria-expanded={isExpanded}
                    aria-controls={`cat-grid-${sub.slug}`}
                    onClick={() => toggleCategory(sub.slug)}
                  >
                    {isExpanded ? t.showLess : `${t.showAll} ${sub.generators.length} generators`}
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

function CategoryThumb({ slug }) {
  switch (slug) {
    case 'websites':
      return (
        <svg aria-hidden="true" width="40" height="40" viewBox="0 0 48 48" fill="none">
          <rect x="4" y="4" width="40" height="40" rx="4" stroke="#C6C9CD" strokeWidth="1.5" />
          <rect x="4" y="4" width="40" height="10" rx="4" fill="#F4F6F8" stroke="#C6C9CD" strokeWidth="1.5" />
          <circle cx="10" cy="9" r="2.5" fill="#CB0C9F" opacity="0.5" />
          <circle cx="18" cy="9" r="2.5" fill="#7671FF" opacity="0.5" />
          <circle cx="26" cy="9" r="2.5" fill="#8159BB" opacity="0.5" />
          <rect x="10" y="20" width="28" height="4" rx="2" fill="#E2E4E7" />
          <rect x="10" y="28" width="20" height="3" rx="1.5" fill="#F4F6F8" />
        </svg>
      )
    case 'landing-pages':
      return (
        <svg aria-hidden="true" width="40" height="40" viewBox="0 0 48 48" fill="none">
          <rect x="4" y="4" width="40" height="40" rx="4" stroke="#C6C9CD" strokeWidth="1.5" />
          <rect x="10" y="10" width="28" height="6" rx="3" fill="#7671FF" opacity="0.3" />
          <rect x="10" y="20" width="28" height="3" rx="1.5" fill="#E2E4E7" />
          <rect x="10" y="26" width="20" height="3" rx="1.5" fill="#F4F6F8" />
          <rect x="10" y="32" width="24" height="3" rx="1.5" fill="#F4F6F8" />
        </svg>
      )
    case 'portfolios':
      return (
        <svg aria-hidden="true" width="40" height="40" viewBox="0 0 48 48" fill="none">
          <rect x="4" y="4" width="40" height="40" rx="4" stroke="#C6C9CD" strokeWidth="1.5" />
          <rect x="8" y="12" width="14" height="14" rx="3" fill="#8159BB" opacity="0.2" stroke="#8159BB" strokeWidth="1" />
          <rect x="26" y="12" width="14" height="14" rx="3" fill="#7671FF" opacity="0.2" stroke="#7671FF" strokeWidth="1" />
          <rect x="8" y="30" width="14" height="10" rx="3" fill="#CB0C9F" opacity="0.2" stroke="#CB0C9F" strokeWidth="1" />
          <rect x="26" y="30" width="14" height="10" rx="3" fill="#F4F6F8" stroke="#E2E4E7" strokeWidth="1" />
        </svg>
      )
    case 'blogs':
      return (
        <svg aria-hidden="true" width="40" height="40" viewBox="0 0 48 48" fill="none">
          <rect x="4" y="4" width="40" height="40" rx="4" stroke="#C6C9CD" strokeWidth="1.5" />
          <rect x="10" y="10" width="16" height="20" rx="3" fill="#F4F6F8" stroke="#C6C9CD" strokeWidth="1" />
          <rect x="30" y="10" width="10" height="3" rx="1.5" fill="#E2E4E7" />
          <rect x="30" y="16" width="10" height="3" rx="1.5" fill="#E2E4E7" />
          <rect x="30" y="22" width="8" height="3" rx="1.5" fill="#F4F6F8" />
        </svg>
      )
    case 'stores':
      return (
        <svg aria-hidden="true" width="40" height="40" viewBox="0 0 48 48" fill="none">
          <rect x="4" y="4" width="40" height="40" rx="4" stroke="#C6C9CD" strokeWidth="1.5" />
          <rect x="10" y="14" width="12" height="12" rx="3" fill="#F4F6F8" stroke="#C6C9CD" strokeWidth="1" />
          <rect x="26" y="14" width="12" height="12" rx="3" fill="#F4F6F8" stroke="#C6C9CD" strokeWidth="1" />
          <rect x="10" y="30" width="28" height="4" rx="2" fill="#7671FF" opacity="0.4" />
        </svg>
      )
    case 'link-in-bio':
      return (
        <svg aria-hidden="true" width="40" height="40" viewBox="0 0 48 48" fill="none">
          <rect x="4" y="4" width="40" height="40" rx="4" stroke="#C6C9CD" strokeWidth="1.5" />
          <circle cx="24" cy="16" r="6" fill="#8159BB" opacity="0.2" stroke="#8159BB" strokeWidth="1" />
          <rect x="16" y="26" width="16" height="3" rx="1.5" fill="#C6C9CD" />
          <rect x="16" y="32" width="16" height="3" rx="1.5" fill="#C6C9CD" />
          <rect x="16" y="38" width="16" height="3" rx="1.5" fill="#C6C9CD" />
        </svg>
      )
    default:
      return (
        <svg aria-hidden="true" width="40" height="40" viewBox="0 0 48 48" fill="none">
          <rect x="4" y="4" width="40" height="40" rx="4" stroke="#C6C9CD" strokeWidth="1.5" />
        </svg>
      )
  }
}

function HowItWorks() {
  const steps = [
    { num: 1, title: t.step1Title, desc: t.step1Desc },
    { num: 2, title: t.step2Title, desc: t.step2Desc },
    { num: 3, title: t.step3Title, desc: t.step3Desc },
  ]

  return (
    <section className="section">
      <div className="content-container">
        <h2 className="text-[26px] md:text-[32px] text-[#4B5056] text-center mb-[30px]">{t.howItWorksHeading}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px]">
          {steps.map((step) => (
            <div key={step.num} className="text-center flex flex-col items-center gap-[15px]">
              <span
                className="w-[44px] h-[44px] rounded-full flex items-center justify-center text-[#FFFFFF] font-heading font-bold text-[18px]"
                style={{ fontFamily: 'var(--font-heading)', background: 'linear-gradient(135deg, #7671FF, #CB0C9F)' }}
                aria-hidden="true"
              >
                {step.num}
              </span>
              <h3 className="text-[14px] text-[#4B5056]">{step.title}</h3>
              <p className="text-[#636972] text-[13px] leading-[1.6] m-0">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function WhyStrikingly() {
  const items = [
    { icon: 'zap', title: t.why1Title, desc: t.why1Desc },
    { icon: 'smartphone', title: t.why2Title, desc: t.why2Desc },
    { icon: 'heart', title: t.why3Title, desc: t.why3Desc },
  ]

  return (
    <section className="section bg-[#F4F6F8]">
      <div className="content-container">
        <h2 className="text-[26px] md:text-[32px] text-[#4B5056] text-center mb-[30px]">{t.whyHeading}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px]">
          {items.map((item) => (
            <div key={item.title} className="text-center flex flex-col items-center gap-[12px]">
              <WhyIcon icon={item.icon} />
              <h3 className="text-[14px] text-[#4B5056]">{item.title}</h3>
              <p className="text-[#636972] text-[13px] leading-[1.6] m-0">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function WhyIcon({ icon }) {
  switch (icon) {
    case 'zap':
      return (
        <svg aria-hidden="true" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#8159BB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      )
    case 'smartphone':
      return (
        <svg aria-hidden="true" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#8159BB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
          <line x1="12" y1="18" x2="12.01" y2="18" />
        </svg>
      )
    case 'heart':
      return (
        <svg aria-hidden="true" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#8159BB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
      )
    default:
      return null
  }
}

function FaqSection({ openFaq, setOpenFaq }) {
  const faqs = [
    { q: t.faq1Q, a: t.faq1A },
    { q: t.faq2Q, a: t.faq2A },
    { q: t.faq3Q, a: t.faq3A },
    { q: t.faq4Q, a: t.faq4A },
    { q: t.faq5Q, a: t.faq5A },
    { q: t.faq6Q, a: t.faq6A },
  ]

  return (
    <section className="section">
      <div className="content-container" style={{ maxWidth: '800px' }}>
        <h2 className="text-[26px] md:text-[32px] text-[#4B5056] text-center mb-[30px]">{t.faqHeading}</h2>
        <div>
          {faqs.map((faq, idx) => (
            <div key={idx}>
              <button
                className="faq-accordion-btn"
                aria-expanded={openFaq === idx}
                aria-controls={`faq-panel-${idx}`}
                onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
              >
                <span>{faq.q}</span>
                <span className={`faq-chevron ${openFaq === idx ? 'open' : ''}`} aria-hidden="true">
                  &#9660;
                </span>
              </button>
              {openFaq === idx && (
                <div id={`faq-panel-${idx}`} className="faq-accordion-body" role="region">
                  <p className="m-0">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ClosingCta() {
  return (
    <section className="section bg-[#F4F6F8]">
      <div className="content-container text-center flex flex-col items-center gap-[20px]">
        <h2 className="text-[26px] md:text-[32px] text-[#4B5056]">{t.closingHeading}</h2>
        <p className="text-[#636972] text-[14px] max-w-[500px]">{t.closingSub}</p>
        <a href="/s/ai_site_builder" className="btn btn-gradient btn-lg">
          {t.closingCta}
        </a>
      </div>
    </section>
  )
}

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[#2E2E2F] text-[#C6C9CD] text-[13px]">
      <div className="content-container py-[40px]">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-[30px] mb-[30px]">
          <div>
            <h4 className="font-heading font-bold text-[14px] text-[#FFFFFF] uppercase mb-[15px]" style={{ fontFamily: 'var(--font-heading)' }}>
              Strikingly
            </h4>
            <ul className="flex flex-col gap-[8px] list-none p-0 m-0">
              <li><a href="/about" className="hover:text-[#FFFFFF] transition-colors">{t.footerAbout}</a></li>
              <li><a href="/pricing" className="hover:text-[#FFFFFF] transition-colors">{t.footerPricing}</a></li>
              <li><a href="/templates" className="hover:text-[#FFFFFF] transition-colors">{t.footerTemplates}</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-heading font-bold text-[14px] text-[#FFFFFF] uppercase mb-[15px]" style={{ fontFamily: 'var(--font-heading)' }}>
              Support
            </h4>
            <ul className="flex flex-col gap-[8px] list-none p-0 m-0">
              <li><a href="/support" className="hover:text-[#FFFFFF] transition-colors">{t.footerSupport}</a></li>
              <li><a href="/blog" className="hover:text-[#FFFFFF] transition-colors">{t.footerBlog}</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-heading font-bold text-[14px] text-[#FFFFFF] uppercase mb-[15px]" style={{ fontFamily: 'var(--font-heading)' }}>
              Legal
            </h4>
            <ul className="flex flex-col gap-[8px] list-none p-0 m-0">
              <li><a href="/terms" className="hover:text-[#FFFFFF] transition-colors">{t.footerTerms}</a></li>
              <li><a href="/privacy" className="hover:text-[#FFFFFF] transition-colors">{t.footerPrivacy}</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-heading font-bold text-[14px] text-[#FFFFFF] uppercase mb-[15px]" style={{ fontFamily: 'var(--font-heading)' }}>
              Generators
            </h4>
            <ul className="flex flex-col gap-[8px] list-none p-0 m-0">
              <li><a href="/generators#websites" className="hover:text-[#FFFFFF] transition-colors">{t.categoryWebsites}</a></li>
              <li><a href="/generators#stores" className="hover:text-[#FFFFFF] transition-colors">{t.categoryStores}</a></li>
              <li><a href="/generators#blogs" className="hover:text-[#FFFFFF] transition-colors">{t.categoryBlogs}</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-[#636972] pt-[20px] text-center text-[12px]">
          <p className="m-0">{t.footerCopyright.replace('{year}', year)}</p>
        </div>
      </div>
    </footer>
  )
}
