import { useState, useEffect } from 'react'
import './App.css'
import strings from './data/strings'
import { categories, featuredGenerators, allGenerators } from './data/generators'

const t = strings.en

/* ─── Section 0: Top Bar ─── */
function TopBar() {
  return (
    <header className="bg-white border-b border-divider sticky top-0 z-50">
      <div className="max-w-[1200px] mx-auto px-5 py-3 flex items-center">
        <a href="/" className="font-heading font-bold text-heading-dark text-lg uppercase tracking-wide no-underline">
          STRIKINGLY AI
        </a>
      </div>
    </header>
  )
}

/* ─── Section 1: Breadcrumb ─── */
function Breadcrumb() {
  return (
    <nav aria-label="Breadcrumb" className="bg-white">
      <div className="max-w-[1200px] mx-auto px-5 py-2">
        <ol className="flex items-center gap-2 list-none m-0 p-0 text-sm text-body-text">
          <li><a href="/" className="text-body-text hover:text-brand-purple no-underline">{t.breadcrumb.home}</a></li>
          <li aria-hidden="true" className="text-body-text">&gt;</li>
          <li className="text-body-text">{t.breadcrumb.current}</li>
        </ol>
      </div>
    </nav>
  )
}

/* ─── Hero SVG Illustration ─── */
function HeroIllustration() {
  return (
    <svg width="480" height="360" viewBox="0 0 480 360" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="w-full max-w-[480px] h-auto">
      <rect x="60" y="40" width="360" height="280" rx="8" stroke="#C6C9CD" strokeWidth="2" fill="white"/>
      <rect x="60" y="40" width="360" height="40" rx="8" fill="#F4F6F8" stroke="#C6C9CD" strokeWidth="1"/>
      <circle cx="85" cy="60" r="6" fill="#E2E4E7"/>
      <circle cx="105" cy="60" r="6" fill="#E2E4E7"/>
      <circle cx="125" cy="60" r="6" fill="#E2E4E7"/>
      <rect x="200" y="52" width="120" height="16" rx="8" fill="#E2E4E7"/>
      <rect x="80" y="100" width="160" height="120" rx="6" stroke="#8159BB" strokeWidth="1.5" fill="none" opacity="0.4"/>
      <circle cx="160" cy="160" r="35" stroke="#8159BB" strokeWidth="1.5" fill="none" opacity="0.3"/>
      <rect x="260" y="100" width="140" height="55" rx="6" stroke="#8159BB" strokeWidth="1.5" fill="none" opacity="0.4"/>
      <rect x="260" y="165" width="140" height="55" rx="6" stroke="#8159BB" strokeWidth="1.5" fill="none" opacity="0.4"/>
      <rect x="80" y="240" width="320" height="16" rx="8" fill="#E2E4E7"/>
      <rect x="80" y="270" width="240" height="16" rx="8" fill="#E2E4E7"/>
      <rect x="160" y="300" width="160" height="12" rx="6" fill="#E2E4E7"/>
    </svg>
  )
}

/* ─── Section 2: Hero ─── */
function Hero() {
  return (
    <section className="bg-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04]" style={{ background: 'radial-gradient(ellipse at 30% 50%, #7671FF, transparent 60%), radial-gradient(ellipse at 70% 80%, #CB0C9F, transparent 60%)' }} aria-hidden="true" />
      <div className="max-w-[1200px] mx-auto px-5 py-16 md:py-20 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1">
            <h1 className="font-heading font-bold uppercase leading-[1.2] text-[28px] md:text-[44px] mb-5">
              <span className="block text-heading-dark">{t.hero.h1Line1}</span>
              <span className="block ai-gradient-text">{t.hero.h1Line2}</span>
            </h1>
            <p className="text-body-text text-sm md:text-base mb-8 max-w-[480px]">{t.hero.sub}</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="/s/ai_site_builder" className="inline-flex items-center justify-center ai-gradient-bg text-white font-heading font-bold uppercase text-sm px-6 py-3 rounded no-underline h-[44px]">
                {t.hero.ctaPrimary}
              </a>
              <a href="#all-generators" className="inline-flex items-center justify-center bg-transparent border border-brand-purple text-brand-purple font-heading font-bold uppercase text-sm px-6 py-3 rounded no-underline h-[36px]">
                {t.hero.ctaSecondary}
              </a>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <HeroIllustration />
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── Section 3: Featured Generators ─── */
function FeaturedGenerators() {
  return (
    <section className="bg-light-bg py-10">
      <div className="max-w-[1200px] mx-auto px-5">
        <h2 className="font-heading font-bold uppercase text-heading-section text-2xl md:text-[28px] mb-1">{t.featured.heading}</h2>
        <p className="text-body-text text-sm mb-8">{t.featured.sub}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {featuredGenerators.map((gen) => (
            <a key={gen.slug} href={`/generators/${gen.slug}`} className="block bg-white border border-card-border rounded p-5 card-hover-lift no-underline">
              <article>
                <h3 className="font-heading font-bold uppercase text-heading-section text-sm mb-2">{gen.name.toUpperCase()}</h3>
                <p className="text-body-text text-sm mb-3">{gen.description}</p>
                <span className="inline-block font-heading font-bold uppercase text-[11px] text-brand-purple border border-brand-purple rounded px-2 py-0.5">
                  {gen.category.toUpperCase()}
                </span>
              </article>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Category Icon ─── */
function CategoryIcon({ category }) {
  const icons = {
    websites: <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true"><rect x="4" y="8" width="32" height="24" rx="3" stroke="#8159BB" strokeWidth="1.5"/><line x1="4" y1="14" x2="36" y2="14" stroke="#8159BB" strokeWidth="1.5"/><circle cx="8" cy="11" r="1.5" fill="#8159BB"/><circle cx="13" cy="11" r="1.5" fill="#8159BB"/></svg>,
    'landing-pages': <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true"><rect x="8" y="4" width="24" height="32" rx="3" stroke="#8159BB" strokeWidth="1.5"/><rect x="12" y="10" width="16" height="6" rx="2" stroke="#8159BB" strokeWidth="1"/><rect x="14" y="20" width="12" height="3" rx="1.5" fill="#8159BB" opacity="0.3"/><rect x="16" y="26" width="8" height="3" rx="1.5" fill="#8159BB" opacity="0.5"/></svg>,
    portfolios: <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true"><rect x="4" y="8" width="14" height="12" rx="2" stroke="#8159BB" strokeWidth="1.5"/><rect x="22" y="8" width="14" height="12" rx="2" stroke="#8159BB" strokeWidth="1.5"/><rect x="4" y="24" width="14" height="12" rx="2" stroke="#8159BB" strokeWidth="1.5"/><rect x="22" y="24" width="14" height="12" rx="2" stroke="#8159BB" strokeWidth="1.5"/></svg>,
    blogs: <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true"><rect x="6" y="6" width="28" height="28" rx="3" stroke="#8159BB" strokeWidth="1.5"/><line x1="12" y1="14" x2="28" y2="14" stroke="#8159BB" strokeWidth="1.5"/><line x1="12" y1="20" x2="28" y2="20" stroke="#8159BB" strokeWidth="1"/><line x1="12" y1="26" x2="22" y2="26" stroke="#8159BB" strokeWidth="1"/></svg>,
    stores: <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true"><path d="M8 16V32H32V16" stroke="#8159BB" strokeWidth="1.5"/><path d="M4 8H36L32 16H8L4 8Z" stroke="#8159BB" strokeWidth="1.5"/><rect x="16" y="24" width="8" height="8" stroke="#8159BB" strokeWidth="1.5"/></svg>,
    'link-in-bio': <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true"><circle cx="20" cy="12" r="6" stroke="#8159BB" strokeWidth="1.5"/><rect x="12" y="22" width="16" height="4" rx="2" stroke="#8159BB" strokeWidth="1.5"/><rect x="12" y="28" width="16" height="4" rx="2" stroke="#8159BB" strokeWidth="1.5"/><rect x="12" y="34" width="16" height="4" rx="2" stroke="#8159BB" strokeWidth="1.5"/></svg>,
  }
  return icons[category] || null
}

/* ─── Section 4: Browse by Category ─── */
function BrowseByCategory() {
  return (
    <section className="bg-white py-10">
      <div className="max-w-[1200px] mx-auto px-5">
        <h2 className="font-heading font-bold uppercase text-heading-section text-2xl md:text-[28px] mb-8">{t.browseByCategory.heading}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((cat) => (
            <a key={cat.id} href={`#${cat.slug}`} className="block bg-white border border-card-border rounded p-5 card-hover-lift no-underline group">
              <article className="flex flex-col gap-3">
                <CategoryIcon category={cat.id} />
                <h3 className="font-heading font-bold uppercase text-heading-section text-base">{cat.name.toUpperCase()}</h3>
                <p className="text-body-text text-sm">{cat.description}</p>
                <span className="text-brand-purple text-lg group-hover:translate-x-1 transition-transform" aria-hidden="true">&rarr;</span>
              </article>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Section 5: All Generators Directory ─── */
const VISIBLE_COUNT = 6

function AllGeneratorsDirectory() {
  const [searchQuery, setSearchQuery] = useState('')
  const [expandedSections, setExpandedSections] = useState({})
  const [jsReady, setJsReady] = useState(false)

  useEffect(() => { setJsReady(true) }, [])

  const toggleSection = (catId) => {
    setExpandedSections((prev) => ({ ...prev, [catId]: !prev[catId] }))
  }

  const matchesSearch = (gen, query) => {
    if (!query) return true
    const q = query.toLowerCase()
    return gen.name.toLowerCase().includes(q) || gen.description.toLowerCase().includes(q)
  }

  const matchesCategorySearch = (catId, query) => {
    if (!query) return true
    const cat = categories.find((c) => c.id === catId)
    if (cat && cat.name.toLowerCase().includes(query.toLowerCase())) return true
    return allGenerators[catId]?.some((gen) => matchesSearch(gen, query))
  }

  const totalMatches = searchQuery
    ? categories.reduce((sum, cat) => sum + (allGenerators[cat.id]?.filter((g) => matchesSearch(g, searchQuery)).length || 0), 0)
    : 0

  return (
    <section id="all-generators" className="bg-light-bg py-10 scroll-mt-16">
      <div className="max-w-[1200px] mx-auto px-5">
        <h2 className="font-heading font-bold uppercase text-heading-section text-2xl md:text-[28px] mb-1">{t.allGenerators.heading}</h2>
        <p className="text-body-text text-sm mb-6">{t.allGenerators.sub}</p>

        {/* Search */}
        <div className="relative max-w-[480px] mb-6">
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none" aria-hidden="true">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#636972" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
          </div>
          <input
            type="search"
            aria-label="Search generators"
            placeholder={t.allGenerators.searchPlaceholder}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 border border-card-border rounded text-sm text-heading-dark bg-white font-body placeholder:text-body-text focus:outline-none focus:border-brand-purple"
          />
        </div>

        {searchQuery && totalMatches > 0 && (
          <p className="text-body-text text-sm mb-4">{t.allGenerators.matchCount(totalMatches)}</p>
        )}

        {searchQuery && totalMatches === 0 && (
          <div className="text-center py-10">
            <p className="text-body-text text-sm mb-3">{t.allGenerators.noResults}</p>
            <button onClick={() => setSearchQuery('')} className="text-brand-purple font-heading font-bold uppercase text-sm bg-transparent border-none cursor-pointer mb-2 p-0">
              {t.allGenerators.clearSearch}
            </button>
            <p className="text-body-text text-sm">
              <a href="/s/ai_site_builder" className="text-brand-purple no-underline hover:underline">{t.allGenerators.noResultsCta}</a>
            </p>
          </div>
        )}

        {/* Category subsections */}
        {categories.map((cat) => {
          const gens = allGenerators[cat.id] || []
          const filtered = searchQuery ? gens.filter((g) => matchesSearch(g, searchQuery)) : gens
          const isVisible = matchesCategorySearch(cat.id, searchQuery)
          if (!isVisible || (searchQuery && filtered.length === 0)) return null

          const isExpanded = expandedSections[cat.id] || !!searchQuery
          const hasMore = filtered.length > VISIBLE_COUNT && !searchQuery

          return (
            <div key={cat.id} id={cat.slug} className="mb-10 scroll-mt-20">
              <h3 className="font-heading font-bold uppercase text-heading-section text-xl md:text-2xl mb-1">{cat.name.toUpperCase()}</h3>
              <p className="text-body-text text-sm mb-5">{cat.description}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5" id={`grid-${cat.slug}`} aria-label={`${cat.name} generators`}>
                {filtered.map((gen, idx) => (
                  <a
                    key={gen.slug}
                    href={`/generators/${gen.slug}`}
                    className={`block bg-white border border-card-border rounded p-5 card-hover-lift no-underline ${jsReady && !isExpanded && idx >= VISIBLE_COUNT ? 'hidden' : ''}`}
                  >
                    <article>
                      <div className="mb-3"><CategoryIcon category={cat.id} /></div>
                      <h4 className="font-heading font-bold uppercase text-heading-section text-sm mb-2">{gen.name.toUpperCase()}</h4>
                      <p className="text-body-text text-sm">{gen.description}</p>
                    </article>
                  </a>
                ))}
              </div>
              {hasMore && jsReady && (
                <button
                  onClick={() => toggleSection(cat.id)}
                  aria-expanded={isExpanded}
                  aria-controls={`grid-${cat.slug}`}
                  className="mt-4 font-heading font-bold uppercase text-sm text-brand-purple bg-transparent border border-brand-purple rounded px-4 py-2 cursor-pointer hover:bg-brand-purple hover:text-white transition-colors"
                >
                  {isExpanded ? t.allGenerators.showLess : `${t.allGenerators.showAll} ${filtered.length} ${t.allGenerators.generators}`}
                </button>
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}

/* ─── Section 6: How It Works ─── */
function HowItWorks() {
  return (
    <section className="bg-white py-10">
      <div className="max-w-[1200px] mx-auto px-5">
        <h2 className="font-heading font-bold uppercase text-heading-section text-2xl md:text-[28px] mb-8 text-center">{t.howItWorks.heading}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {t.howItWorks.steps.map((step, i) => (
            <div key={i} className="text-center">
              <div className="w-10 h-10 rounded-full bg-brand-purple text-white font-heading font-bold text-lg flex items-center justify-center mx-auto mb-4">
                {i + 1}
              </div>
              <h3 className="font-heading font-bold uppercase text-heading-section text-base mb-2">{step.title}</h3>
              <p className="text-body-text text-sm">{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Why Strikingly Icons ─── */
function WhyIcon({ index }) {
  const icons = [
    <svg key="0" width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true"><circle cx="16" cy="16" r="12" stroke="#8159BB" strokeWidth="1.5"/><path d="M16 8v8l5 3" stroke="#8159BB" strokeWidth="1.5" strokeLinecap="round"/></svg>,
    <svg key="1" width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true"><rect x="9" y="4" width="14" height="24" rx="3" stroke="#8159BB" strokeWidth="1.5"/><line x1="13" y1="24" x2="19" y2="24" stroke="#8159BB" strokeWidth="1.5" strokeLinecap="round"/></svg>,
    <svg key="2" width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true"><circle cx="16" cy="16" r="12" stroke="#8159BB" strokeWidth="1.5"/><path d="M12 16l3 3 5-6" stroke="#8159BB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  ]
  return icons[index] || null
}

/* ─── Section 7: Why Strikingly ─── */
function WhyStrikingly() {
  return (
    <section className="bg-light-bg py-10">
      <div className="max-w-[1200px] mx-auto px-5">
        <h2 className="font-heading font-bold uppercase text-heading-section text-2xl md:text-[28px] mb-8 text-center">{t.whyStrikingly.heading}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.whyStrikingly.items.map((item, i) => (
            <div key={i} className="text-center">
              <div className="flex justify-center mb-4"><WhyIcon index={i} /></div>
              <h3 className="font-heading font-bold uppercase text-heading-section text-base mb-2">{item.title}</h3>
              <p className="text-body-text text-sm">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Section 8: FAQ ─── */
function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="bg-white py-10">
      <div className="max-w-[1200px] mx-auto px-5">
        <h2 className="font-heading font-bold uppercase text-heading-section text-2xl md:text-[28px] mb-8 text-center">{t.faq.heading}</h2>
        <div className="max-w-[800px] mx-auto">
          {t.faq.items.map((item, i) => (
            <div key={i} className="border-b border-divider">
              <button
                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                aria-expanded={openIndex === i}
                aria-controls={`faq-panel-${i}`}
                className="w-full flex items-center justify-between py-4 text-left bg-transparent border-none cursor-pointer px-0"
              >
                <span className="font-heading font-bold uppercase text-heading-section text-sm">{item.q}</span>
                <span className="text-brand-purple text-xl ml-4 shrink-0" aria-hidden="true">
                  {openIndex === i ? '\u2212' : '+'}
                </span>
              </button>
              <div
                id={`faq-panel-${i}`}
                role="region"
                className={`overflow-hidden transition-all duration-300 ${openIndex === i ? 'max-h-[500px] pb-4' : 'max-h-0'}`}
              >
                <p className="text-body-text text-sm leading-relaxed">{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Section 9: Closing CTA ─── */
function ClosingCTA() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-[1200px] mx-auto px-5 text-center">
        <h2 className="font-heading font-bold uppercase text-heading-section text-2xl md:text-[32px] mb-3">{t.closingCta.heading}</h2>
        <p className="text-body-text text-sm mb-8">{t.closingCta.sub}</p>
        <a href="/s/ai_site_builder" className="inline-flex items-center justify-center ai-gradient-bg text-white font-heading font-bold uppercase text-sm px-8 py-3 rounded no-underline h-[44px]">
          {t.closingCta.cta}
        </a>
      </div>
    </section>
  )
}

/* ─── Section 10: Footer ─── */
function Footer() {
  const cols = [t.footer.product, t.footer.company, t.footer.resources, t.footer.legal]
  return (
    <footer className="bg-light-bg border-t border-divider py-10">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <div className="col-span-2 md:col-span-1">
            <span className="font-heading font-bold text-heading-dark uppercase text-sm">STRIKINGLY</span>
          </div>
          {cols.map((col) => (
            <div key={col.title}>
              <h4 className="font-heading font-bold uppercase text-heading-section text-xs mb-3">{col.title}</h4>
              <ul className="list-none m-0 p-0 space-y-2">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-body-text text-sm no-underline hover:text-brand-purple">{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-10 pt-5 border-t border-divider">
          <p className="text-body-text text-xs text-center">{t.footer.copyright}</p>
        </div>
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
        <AllGeneratorsDirectory />
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
