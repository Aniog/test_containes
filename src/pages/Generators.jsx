import { useState, useCallback } from 'react'
import { strings } from '../data/strings'
import { categories, featuredGeneratorsWithSlugs, allGeneratorsWithSlugs } from '../data/generators'

const t = strings.en

const INITIAL_VISIBLE = 6

// --- SVG Icons & Illustrations ---

function LogoSvg() {
  return (
    <svg aria-hidden="true" width="140" height="28" viewBox="0 0 140 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <text x="0" y="21" fontFamily="Josefin Sans, sans-serif" fontWeight="700" fontSize="18" fill="#4B5056">
        strikingly
      </text>
      <text x="100" y="21" fontFamily="Josefin Sans, sans-serif" fontWeight="700" fontSize="18" fill="#8159BB">
        AI
      </text>
    </svg>
  )
}

function HeroIllustration() {
  return (
    <svg aria-hidden="true" width="480" height="360" viewBox="0 0 480 360" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto max-w-[480px]">
      <rect x="60" y="40" width="360" height="240" rx="12" stroke="#8159BB" strokeWidth="2" fill="none" opacity="0.3" />
      <rect x="80" y="70" width="320" height="30" rx="4" stroke="#8159BB" strokeWidth="1.5" fill="none" opacity="0.2" />
      <rect x="80" y="120" width="150" height="140" rx="4" stroke="#7671FF" strokeWidth="1.5" fill="none" opacity="0.2" />
      <rect x="250" y="120" width="150" height="65" rx="4" stroke="#CB0C9F" strokeWidth="1.5" fill="none" opacity="0.2" />
      <rect x="250" y="195" width="150" height="65" rx="4" stroke="#8159BB" strokeWidth="1.5" fill="none" opacity="0.2" />
      <circle cx="155" cy="190" r="30" stroke="#7671FF" strokeWidth="1.5" fill="none" opacity="0.3" />
      <line x1="100" y1="300" x2="380" y2="300" stroke="#E2E4E7" strokeWidth="1" />
      <rect x="100" y="310" width="60" height="8" rx="2" fill="#E2E4E7" />
      <rect x="180" y="310" width="60" height="8" rx="2" fill="#E2E4E7" />
      <rect x="260" y="310" width="60" height="8" rx="2" fill="#E2E4E7" />
    </svg>
  )
}

function CategoryIllustration({ categoryId }) {
  const icons = {
    websites: (
      <svg aria-hidden="true" width="40" height="40" viewBox="0 0 40 40" fill="none">
        <rect x="4" y="8" width="32" height="24" rx="3" stroke="#8159BB" strokeWidth="1.5" fill="none" />
        <line x1="4" y1="14" x2="36" y2="14" stroke="#8159BB" strokeWidth="1.5" />
        <circle cx="8" cy="11" r="1.5" fill="#8159BB" />
        <circle cx="12" cy="11" r="1.5" fill="#8159BB" />
      </svg>
    ),
    'landing-pages': (
      <svg aria-hidden="true" width="40" height="40" viewBox="0 0 40 40" fill="none">
        <rect x="8" y="4" width="24" height="32" rx="3" stroke="#8159BB" strokeWidth="1.5" fill="none" />
        <rect x="12" y="10" width="16" height="4" rx="1" fill="#8159BB" opacity="0.3" />
        <rect x="14" y="18" width="12" height="3" rx="1" fill="#8159BB" opacity="0.2" />
        <rect x="14" y="24" width="12" height="6" rx="2" stroke="#8159BB" strokeWidth="1.5" fill="none" />
      </svg>
    ),
    portfolios: (
      <svg aria-hidden="true" width="40" height="40" viewBox="0 0 40 40" fill="none">
        <rect x="4" y="4" width="14" height="14" rx="2" stroke="#8159BB" strokeWidth="1.5" fill="none" />
        <rect x="22" y="4" width="14" height="14" rx="2" stroke="#8159BB" strokeWidth="1.5" fill="none" />
        <rect x="4" y="22" width="14" height="14" rx="2" stroke="#8159BB" strokeWidth="1.5" fill="none" />
        <rect x="22" y="22" width="14" height="14" rx="2" stroke="#8159BB" strokeWidth="1.5" fill="none" />
      </svg>
    ),
    blogs: (
      <svg aria-hidden="true" width="40" height="40" viewBox="0 0 40 40" fill="none">
        <rect x="6" y="6" width="28" height="28" rx="3" stroke="#8159BB" strokeWidth="1.5" fill="none" />
        <line x1="10" y1="14" x2="30" y2="14" stroke="#8159BB" strokeWidth="1.5" />
        <line x1="10" y1="20" x2="26" y2="20" stroke="#8159BB" strokeWidth="1.5" opacity="0.5" />
        <line x1="10" y1="26" x2="22" y2="26" stroke="#8159BB" strokeWidth="1.5" opacity="0.3" />
      </svg>
    ),
    stores: (
      <svg aria-hidden="true" width="40" height="40" viewBox="0 0 40 40" fill="none">
        <path d="M8 16 L8 34 L32 34 L32 16" stroke="#8159BB" strokeWidth="1.5" fill="none" />
        <path d="M4 16 L8 6 L32 6 L36 16 Z" stroke="#8159BB" strokeWidth="1.5" fill="none" />
        <rect x="16" y="24" width="8" height="10" rx="1" stroke="#8159BB" strokeWidth="1.5" fill="none" />
      </svg>
    ),
    'link-in-bio': (
      <svg aria-hidden="true" width="40" height="40" viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="12" r="6" stroke="#8159BB" strokeWidth="1.5" fill="none" />
        <rect x="10" y="22" width="20" height="5" rx="2.5" stroke="#8159BB" strokeWidth="1.5" fill="none" />
        <rect x="10" y="30" width="20" height="5" rx="2.5" stroke="#8159BB" strokeWidth="1.5" fill="none" />
      </svg>
    ),
  }
  return icons[categoryId] || icons.websites
}

function ArrowRightIcon() {
  return (
    <svg aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function SearchIcon() {
  return (
    <svg aria-hidden="true" width="18" height="18" viewBox="0 0 18 18" fill="none" className="absolute top-1/2 -translate-y-1/2" style={{ insetInlineStart: '12px' }}>
      <circle cx="7.5" cy="7.5" r="5.5" stroke="#636972" strokeWidth="1.5" fill="none" />
      <line x1="11.5" y1="11.5" x2="16" y2="16" stroke="#636972" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

function ZapIcon() {
  return (
    <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#8159BB" strokeWidth="1.5">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  )
}

function SmartphoneIcon() {
  return (
    <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#8159BB" strokeWidth="1.5">
      <rect x="5" y="2" width="14" height="20" rx="2" />
      <line x1="12" y1="18" x2="12" y2="18" strokeLinecap="round" />
    </svg>
  )
}

function GiftIcon() {
  return (
    <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#8159BB" strokeWidth="1.5">
      <rect x="3" y="8" width="18" height="4" rx="1" />
      <rect x="5" y="12" width="14" height="9" rx="1" />
      <line x1="12" y1="8" x2="12" y2="21" />
      <path d="M12 8C12 8 12 4 9 4C7 4 7 6 7 6C7 8 12 8 12 8Z" />
      <path d="M12 8C12 8 12 4 15 4C17 4 17 6 17 6C17 8 12 8 12 8Z" />
    </svg>
  )
}

// --- Section Components ---

function TopBar() {
  return (
    <header className="bg-page-white border-b border-divider" style={{ position: 'sticky', top: 0, zIndex: 50 }}>
      <div className="max-w-[1200px] mx-auto flex items-center" style={{ padding: '10px 20px', height: '50px' }}>
        <a href="/" aria-label="Strikingly home">
          <LogoSvg />
        </a>
      </div>
    </header>
  )
}

function Breadcrumb() {
  return (
    <nav aria-label="Breadcrumb" className="max-w-[1200px] mx-auto" style={{ padding: '10px 20px' }}>
      <ol className="flex items-center gap-[5px] list-none m-0 p-0 text-[12px] text-body-text">
        <li><a href="/" className="hover:underline">{t.breadcrumb.home}</a></li>
        <li aria-hidden="true" className="text-brand-purple">&gt;</li>
        <li aria-current="page">{t.breadcrumb.current}</li>
      </ol>
    </nav>
  )
}

function Hero() {
  return (
    <section className="relative overflow-hidden" style={{ padding: '60px 20px 80px' }}>
      <div className="absolute inset-0 opacity-[0.04]" style={{ background: 'radial-gradient(ellipse at 30% 50%, #7671FF, transparent 60%), radial-gradient(ellipse at 70% 50%, #CB0C9F, transparent 60%)' }} aria-hidden="true" />
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[40px] items-center relative">
        <div>
          <h1 className="m-0" style={{ marginBlockEnd: '20px' }}>
            <span className="block text-heading-dark" style={{ fontSize: 'clamp(28px, 5vw, 48px)' }}>
              {t.hero.h1Line1}
            </span>
            <span className="block ai-gradient-text" style={{ fontSize: 'clamp(28px, 5vw, 48px)' }}>
              {t.hero.h1Line2}
            </span>
          </h1>
          <p className="text-body-text m-0" style={{ marginBlockEnd: '30px', fontSize: '16px', maxWidth: '480px' }}>
            {t.hero.subheadline}
          </p>
          <div className="flex flex-wrap gap-[10px]">
            <a
              href="/s/ai_site_builder"
              className="ai-gradient-bg text-page-white font-heading font-bold uppercase inline-flex items-center justify-center no-underline"
              style={{ height: '44px', padding: '0 20px', borderRadius: '4px', fontSize: '14px' }}
            >
              {t.hero.ctaPrimary}
            </a>
            <a
              href="#all-generators"
              className="inline-flex items-center justify-center border border-brand-purple text-brand-purple font-heading font-bold uppercase no-underline"
              style={{ height: '44px', padding: '0 20px', borderRadius: '4px', fontSize: '14px', background: 'transparent' }}
            >
              {t.hero.ctaSecondary}
            </a>
          </div>
        </div>
        <div className="flex justify-center lg:justify-end">
          <HeroIllustration />
        </div>
      </div>
    </section>
  )
}

function FeaturedGenerators() {
  return (
    <section style={{ padding: '40px 20px' }}>
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-heading-section m-0" style={{ fontSize: 'clamp(22px, 3vw, 30px)', marginBlockEnd: '5px' }}>
          {t.featured.heading}
        </h2>
        <p className="text-body-text m-0" style={{ marginBlockEnd: '30px' }}>
          {t.featured.subheading}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px]">
          {featuredGeneratorsWithSlugs.map((gen) => (
            <a
              key={gen.slug}
              href={gen.href}
              className="block bg-page-white border border-card-border rounded-[3px] card-hover no-underline"
              style={{ padding: '20px' }}
            >
              <span className="block font-heading font-bold text-heading-section uppercase" style={{ fontSize: '14px', marginBlockEnd: '5px' }}>
                {gen.name}
              </span>
              <span className="block text-body-text" style={{ marginBlockEnd: '10px' }}>
                {gen.description}
              </span>
              <span
                className="inline-block text-brand-purple border border-brand-purple uppercase font-heading font-bold"
                style={{ fontSize: '11px', padding: '2px 6px', borderRadius: '3px' }}
              >
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
    <section style={{ padding: '40px 20px' }}>
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-heading-section m-0" style={{ fontSize: 'clamp(22px, 3vw, 30px)', marginBlockEnd: '30px' }}>
          {t.browseByCategory.heading}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px]">
          {categories.map((cat) => (
            <a
              key={cat.id}
              href={cat.hash}
              className="flex items-start gap-[15px] bg-page-white border border-card-border rounded-[3px] card-hover no-underline"
              style={{ padding: '20px' }}
            >
              <div className="shrink-0">
                <CategoryIllustration categoryId={cat.id} />
              </div>
              <div className="flex-1 min-w-0">
                <span className="block font-heading font-bold text-heading-section uppercase" style={{ fontSize: '14px', marginBlockEnd: '5px' }}>
                  {cat.name}
                </span>
                <span className="block text-body-text">{cat.description}</span>
              </div>
              <div className="shrink-0 text-brand-purple self-center">
                <ArrowRightIcon />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

function CategorySubsection({ category, generators, searchQuery }) {
  const [collapsed, setCollapsed] = useState(true)
  const controlId = `${category.id}-extra`

  const matchesSearch = (gen) => {
    if (!searchQuery) return true
    return (
      gen.name.toLowerCase().includes(searchQuery) ||
      gen.description.toLowerCase().includes(searchQuery) ||
      category.name.toLowerCase().includes(searchQuery)
    )
  }

  const matchCount = generators.filter(matchesSearch).length

  if (searchQuery && matchCount === 0) {
    return null
  }

  const hasMore = !searchQuery && generators.length > INITIAL_VISIBLE

  return (
    <div id={category.id} style={{ marginBlockEnd: '40px', scrollMarginTop: '70px' }}>
      <div className="flex items-center gap-[10px]" style={{ marginBlockEnd: '5px' }}>
        <CategoryIllustration categoryId={category.id} />
        <h3 className="text-heading-section m-0" style={{ fontSize: 'clamp(18px, 2.5vw, 24px)' }}>
          {category.name}
        </h3>
      </div>
      <p className="text-body-text m-0" style={{ marginBlockEnd: '20px', marginInlineStart: '50px' }}>
        {category.description}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px]">
        {generators.map((gen, i) => {
          const isMatch = matchesSearch(gen)
          const isCollapsed = hasMore && collapsed && i >= INITIAL_VISIBLE
          const shouldHide = (!isMatch && searchQuery) || (isCollapsed && !searchQuery)

          return (
            <article
              key={gen.slug}
              className={shouldHide ? 'hidden' : ''}
            >
              <a
                href={gen.href}
                className="block bg-page-white border border-card-border rounded-[3px] card-hover no-underline h-full"
                style={{ padding: '20px' }}
              >
                <span className="block font-heading font-bold text-heading-section uppercase" style={{ fontSize: '14px', marginBlockEnd: '5px' }}>
                  {gen.name}
                </span>
                <span className="block text-body-text">{gen.description}</span>
              </a>
            </article>
          )
        })}
      </div>
      {hasMore && !searchQuery && (
        <div style={{ marginBlockStart: '20px' }}>
          <button
            type="button"
            onClick={() => setCollapsed(!collapsed)}
            aria-expanded={!collapsed}
            aria-controls={controlId}
            className="text-brand-purple border border-brand-purple bg-transparent inline-flex items-center justify-center"
            style={{ height: '36px', padding: '0 15px', borderRadius: '4px', fontSize: '14px' }}
          >
            {collapsed ? t.allGenerators.showAll(generators.length) : t.allGenerators.showLess}
          </button>
        </div>
      )}
    </div>
  )
}

function AllGenerators() {
  const [searchQuery, setSearchQuery] = useState('')
  const normalizedQuery = searchQuery.toLowerCase().trim()

  const getTotalMatches = useCallback(() => {
    if (!normalizedQuery) return null
    let count = 0
    categories.forEach((cat) => {
      const generators = allGeneratorsWithSlugs[cat.id] || []
      generators.forEach((g) => {
        if (
          g.name.toLowerCase().includes(normalizedQuery) ||
          g.description.toLowerCase().includes(normalizedQuery) ||
          cat.name.toLowerCase().includes(normalizedQuery)
        ) {
          count++
        }
      })
    })
    return count
  }, [normalizedQuery])

  const matchCount = getTotalMatches()

  return (
    <section id="all-generators" style={{ padding: '40px 20px', scrollMarginTop: '60px' }}>
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-heading-section m-0" style={{ fontSize: 'clamp(22px, 3vw, 30px)', marginBlockEnd: '5px' }}>
          {t.allGenerators.heading}
        </h2>
        <p className="text-body-text m-0" style={{ marginBlockEnd: '20px' }}>
          {t.allGenerators.subheading}
        </p>

        <div style={{ marginBlockEnd: '30px', maxWidth: '480px' }}>
          <div className="relative">
            <SearchIcon />
            <input
              type="search"
              aria-label={t.allGenerators.searchLabel}
              placeholder={t.allGenerators.searchPlaceholder}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full border border-card-border rounded-[4px] bg-page-white text-heading-section"
              style={{ height: '40px', paddingInlineStart: '40px', paddingInlineEnd: '12px', fontSize: '14px', fontFamily: "'Open Sans', sans-serif" }}
            />
          </div>
          {normalizedQuery && matchCount !== null && (
            <p className="text-body-text m-0" style={{ marginBlockStart: '10px', fontSize: '13px' }}>
              {matchCount > 0 ? t.allGenerators.resultCount(matchCount) : null}
            </p>
          )}
        </div>

        {normalizedQuery && matchCount === 0 && (
          <div style={{ padding: '40px 0', textAlign: 'center' }}>
            <p className="text-body-text" style={{ marginBlockEnd: '10px' }}>{t.allGenerators.noResults}</p>
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              className="text-brand-purple border border-brand-purple bg-transparent inline-flex items-center justify-center"
              style={{ height: '36px', padding: '0 15px', borderRadius: '4px', fontSize: '14px', marginBlockEnd: '10px' }}
            >
              {t.allGenerators.clearSearch}
            </button>
            <p className="text-body-text" style={{ fontSize: '13px' }}>
              <a href="/s/ai_site_builder" className="text-brand-purple hover:underline">{t.allGenerators.cantFind}</a>
            </p>
          </div>
        )}

        {categories.map((cat) => (
          <CategorySubsection
            key={cat.id}
            category={cat}
            generators={allGeneratorsWithSlugs[cat.id] || []}
            searchQuery={normalizedQuery}
          />
        ))}
      </div>
    </section>
  )
}

function HowItWorks() {
  return (
    <section className="bg-bg-light" style={{ padding: '40px 20px' }}>
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-heading-section m-0 text-center" style={{ fontSize: 'clamp(22px, 3vw, 30px)', marginBlockEnd: '30px' }}>
          {t.howItWorks.heading}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px]">
          {t.howItWorks.steps.map((step, i) => (
            <div key={i} className="text-center">
              <div
                className="inline-flex items-center justify-center rounded-full bg-brand-purple text-page-white font-heading font-bold"
                style={{ width: '40px', height: '40px', fontSize: '16px', marginBlockEnd: '15px' }}
              >
                {i + 1}
              </div>
              <h3 className="text-heading-section m-0" style={{ fontSize: '16px', marginBlockEnd: '10px' }}>
                {step.title}
              </h3>
              <p className="text-body-text m-0">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function WhyStrikingly() {
  const icons = [<ZapIcon key="zap" />, <SmartphoneIcon key="phone" />, <GiftIcon key="gift" />]

  return (
    <section style={{ padding: '40px 20px' }}>
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-heading-section m-0 text-center" style={{ fontSize: 'clamp(22px, 3vw, 30px)', marginBlockEnd: '30px' }}>
          {t.whyStrikingly.heading}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px]">
          {t.whyStrikingly.items.map((item, i) => (
            <div key={i} className="text-center">
              <div className="inline-flex items-center justify-center" style={{ marginBlockEnd: '15px' }}>
                {icons[i]}
              </div>
              <h3 className="text-heading-section m-0" style={{ fontSize: '16px', marginBlockEnd: '10px' }}>
                {item.title}
              </h3>
              <p className="text-body-text m-0">{item.description}</p>
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
    <section className="bg-bg-light" style={{ padding: '40px 20px' }}>
      <div className="max-w-[800px] mx-auto">
        <h2 className="text-heading-section m-0 text-center" style={{ fontSize: 'clamp(22px, 3vw, 30px)', marginBlockEnd: '30px' }}>
          {t.faq.heading}
        </h2>
        <div>
          {t.faq.items.map((item, i) => {
            const isOpen = openIndex === i
            const panelId = `faq-panel-${i}`
            const buttonId = `faq-button-${i}`
            return (
              <div key={i} className="border-b border-divider" style={{ paddingBlock: '15px' }}>
                <button
                  type="button"
                  id={buttonId}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  className="w-full flex items-center justify-between text-left text-heading-section"
                  style={{ fontSize: '15px', fontFamily: "'Josefin Sans', sans-serif", fontWeight: 700, textTransform: 'uppercase' }}
                >
                  <span>{item.question}</span>
                  <svg aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0" style={{ marginInlineStart: '10px', transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }}>
                    <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={isOpen ? '' : 'hidden'}
                  style={{ paddingBlockStart: '10px' }}
                >
                  <p className="text-body-text m-0" style={{ lineHeight: '1.6' }}>{item.answer}</p>
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
    <section className="text-center" style={{ padding: '60px 20px' }}>
      <div className="max-w-[600px] mx-auto">
        <h2 className="text-heading-section m-0" style={{ fontSize: 'clamp(24px, 3.5vw, 32px)', marginBlockEnd: '10px' }}>
          {t.closingCta.heading}
        </h2>
        <p className="text-body-text m-0" style={{ marginBlockEnd: '20px', fontSize: '16px' }}>
          {t.closingCta.subheading}
        </p>
        <a
          href="/s/ai_site_builder"
          className="ai-gradient-bg text-page-white font-heading font-bold uppercase inline-flex items-center justify-center no-underline"
          style={{ height: '44px', padding: '0 24px', borderRadius: '4px', fontSize: '14px' }}
        >
          {t.closingCta.cta}
        </a>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-divider" style={{ padding: '40px 20px' }}>
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-[30px]" style={{ marginBlockEnd: '30px' }}>
          {t.footer.columns.map((col, i) => (
            <div key={i}>
              <span className="block font-heading font-bold text-heading-section uppercase" style={{ fontSize: '13px', marginBlockEnd: '10px' }}>
                {col.title}
              </span>
              <ul className="list-none m-0 p-0">
                {col.links.map((link, j) => (
                  <li key={j} style={{ marginBlockEnd: '8px' }}>
                    <a href={link.href} className="text-body-text hover:text-brand-purple hover:underline" style={{ fontSize: '13px' }}>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-divider" style={{ paddingBlockStart: '20px' }}>
          <div className="flex items-center gap-[10px]">
            <LogoSvg />
          </div>
          <p className="text-body-text m-0" style={{ fontSize: '12px', marginBlockStart: '10px' }}>
            {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  )
}

// --- Main Page ---

export default function GeneratorsPage() {
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
