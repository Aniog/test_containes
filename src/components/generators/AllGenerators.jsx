import { useState, useMemo } from 'react'

const INITIAL_VISIBLE = 6

const categoryThumbnails = {
  websites: (
    <svg width="32" height="24" viewBox="0 0 32 24" fill="none" aria-hidden="true">
      <rect x="2" y="2" width="28" height="18" rx="2" stroke="#8159BB" strokeWidth="1.2"/>
      <line x1="2" y1="7" x2="30" y2="7" stroke="#8159BB" strokeWidth="0.8" opacity="0.5"/>
      <rect x="5" y="10" width="8" height="5" rx="1" fill="#8159BB" opacity="0.15"/>
    </svg>
  ),
  'landing-pages': (
    <svg width="32" height="24" viewBox="0 0 32 24" fill="none" aria-hidden="true">
      <rect x="8" y="1" width="16" height="22" rx="2" stroke="#8159BB" strokeWidth="1.2"/>
      <rect x="11" y="5" width="10" height="3" rx="1" fill="#8159BB" opacity="0.2"/>
      <rect x="12" y="15" width="8" height="3" rx="1.5" fill="#8159BB" opacity="0.4"/>
    </svg>
  ),
  portfolios: (
    <svg width="32" height="24" viewBox="0 0 32 24" fill="none" aria-hidden="true">
      <rect x="2" y="3" width="12" height="8" rx="1.5" stroke="#8159BB" strokeWidth="1"/>
      <rect x="18" y="3" width="12" height="8" rx="1.5" stroke="#8159BB" strokeWidth="1"/>
      <rect x="2" y="13" width="12" height="8" rx="1.5" stroke="#8159BB" strokeWidth="1"/>
      <rect x="18" y="13" width="12" height="8" rx="1.5" stroke="#8159BB" strokeWidth="1"/>
    </svg>
  ),
  blogs: (
    <svg width="32" height="24" viewBox="0 0 32 24" fill="none" aria-hidden="true">
      <rect x="4" y="2" width="24" height="20" rx="2" stroke="#8159BB" strokeWidth="1.2"/>
      <line x1="8" y1="7" x2="24" y2="7" stroke="#8159BB" strokeWidth="1" opacity="0.4"/>
      <line x1="8" y1="11" x2="22" y2="11" stroke="#C6C9CD" strokeWidth="0.8"/>
      <line x1="8" y1="14" x2="20" y2="14" stroke="#C6C9CD" strokeWidth="0.8"/>
      <line x1="8" y1="17" x2="18" y2="17" stroke="#C6C9CD" strokeWidth="0.8"/>
    </svg>
  ),
  stores: (
    <svg width="32" height="24" viewBox="0 0 32 24" fill="none" aria-hidden="true">
      <rect x="4" y="8" width="24" height="14" rx="2" stroke="#8159BB" strokeWidth="1.2"/>
      <path d="M4 8 L8 2 L24 2 L28 8" stroke="#8159BB" strokeWidth="1.2"/>
      <circle cx="16" cy="15" r="3" stroke="#8159BB" strokeWidth="1" opacity="0.5"/>
    </svg>
  ),
  'link-in-bio': (
    <svg width="32" height="24" viewBox="0 0 32 24" fill="none" aria-hidden="true">
      <circle cx="16" cy="6" r="3.5" stroke="#8159BB" strokeWidth="1.2"/>
      <rect x="8" y="12" width="16" height="3" rx="1.5" stroke="#8159BB" strokeWidth="1"/>
      <rect x="8" y="17" width="16" height="3" rx="1.5" stroke="#8159BB" strokeWidth="1"/>
    </svg>
  ),
}

export default function AllGenerators({ t, categories, generators, slugify, searchQuery, onSearch }) {
  const [expandedSections, setExpandedSections] = useState({})

  const query = searchQuery.toLowerCase().trim()

  const filteredCategories = useMemo(() => {
    if (!query) return categories.map((cat) => ({ ...cat, items: generators[cat.id] || [] }))

    return categories
      .map((cat) => {
        const items = (generators[cat.id] || []).filter(
          (gen) =>
            gen.name.toLowerCase().includes(query) ||
            gen.desc.toLowerCase().includes(query) ||
            cat.name.toLowerCase().includes(query)
        )
        return { ...cat, items }
      })
      .filter((cat) => cat.items.length > 0)
  }, [query, categories, generators])

  const totalMatches = useMemo(
    () => filteredCategories.reduce((sum, cat) => sum + cat.items.length, 0),
    [filteredCategories]
  )

  const toggleSection = (catId) => {
    setExpandedSections((prev) => ({ ...prev, [catId]: !prev[catId] }))
  }

  return (
    <section id="all-generators" className="py-[40px] bg-bg-light">
      <div className="max-w-[1200px] mx-auto px-[20px]">
        <h2 className="text-[26px] md:text-[30px] text-heading-section mb-[5px]">
          {t.allGenerators.heading}
        </h2>
        <p className="text-body-text mb-[30px]">{t.allGenerators.sub}</p>

        {/* Search */}
        <div className="mb-[30px] max-w-[480px]">
          <div className="relative">
            <svg
              width="18" height="18" viewBox="0 0 18 18" fill="none"
              className="absolute start-[12px] top-1/2 -translate-y-1/2 text-body-text pointer-events-none"
              aria-hidden="true"
            >
              <circle cx="7.5" cy="7.5" r="5.5" stroke="currentColor" strokeWidth="1.5"/>
              <line x1="11.5" y1="11.5" x2="16" y2="16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            <input
              type="search"
              aria-label="Search generators"
              placeholder={t.allGenerators.searchPlaceholder}
              value={searchQuery}
              onChange={(e) => onSearch(e.target.value)}
              className="w-full h-[40px] ps-[40px] pe-[12px] border border-card-border rounded-[4px] text-[14px] text-heading-dark bg-white placeholder:text-body-text focus:outline-none focus:border-brand-purple transition-colors"
            />
          </div>
          {query && (
            <p className="text-[13px] text-body-text mt-[10px]">
              {t.allGenerators.matchCount(totalMatches)}
            </p>
          )}
        </div>

        {/* No results */}
        {query && filteredCategories.length === 0 && (
          <div className="text-center py-[40px]">
            <p className="text-body-text mb-[10px]">{t.allGenerators.noResults}</p>
            <button
              onClick={() => onSearch('')}
              className="text-brand-purple text-[14px] uppercase border border-brand-purple rounded-[4px] px-[15px] h-[36px] hover:bg-brand-purple hover:text-white transition-colors"
            >
              {t.allGenerators.clearSearch}
            </button>
            <p className="text-body-text text-[13px] mt-[10px]">
              <a href="/s/ai_site_builder" className="text-brand-purple hover:underline">
                {t.allGenerators.cantFind}
              </a>
            </p>
          </div>
        )}

        {/* Category subsections */}
        {filteredCategories.map((cat) => {
          const allItems = cat.items
          const isExpanded = expandedSections[cat.id] || !!query
          const hasMore = allItems.length > INITIAL_VISIBLE && !query
          const gridId = `grid-${cat.id}`

          return (
            <div key={cat.id} id={cat.slug} className="mb-[40px] scroll-mt-[80px]">
              <h3 className="text-[20px] md:text-[22px] text-heading-section mb-[5px] uppercase">
                {cat.name}
              </h3>
              <p className="text-body-text text-[13px] mb-[20px]">{cat.desc}</p>

              <div
                id={gridId}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px]"
              >
                {allItems.map((gen, idx) => {
                  const isHidden = hasMore && !isExpanded && idx >= INITIAL_VISIBLE
                  return (
                    <a
                      key={gen.name}
                      href={`/generators/${slugify(gen.name)}`}
                      className={`flex items-start gap-[10px] bg-white border border-card-border rounded-[3px] p-[20px] card-hover-lift ${isHidden ? 'hidden' : ''}`}
                    >
                      <div className="shrink-0 mt-[2px]">
                        {categoryThumbnails[cat.id]}
                      </div>
                      <div className="min-w-0">
                        <span className="block font-heading text-[14px] text-heading-dark mb-[5px]">
                          {gen.name}
                        </span>
                        <span className="block text-body-text text-[13px]">
                          {gen.desc}
                        </span>
                      </div>
                    </a>
                  )
                })}
              </div>

              {hasMore && (
                <button
                  onClick={() => toggleSection(cat.id)}
                  aria-expanded={isExpanded}
                  aria-controls={gridId}
                  className="mt-[20px] text-brand-purple text-[13px] uppercase border border-brand-purple rounded-[4px] px-[15px] h-[36px] hover:bg-brand-purple hover:text-white transition-colors"
                >
                  {isExpanded
                    ? t.allGenerators.showLess
                    : t.allGenerators.showAll(allItems.length)}
                </button>
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}
