import { useState, useMemo } from 'react'
import { strings } from '@/data/strings'
import { categories, allGenerators } from '@/data/generators'

const t = strings.en.allGenerators
const VISIBLE_COUNT = 6

const categoryThumbnails = {
  websites: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <rect x="4" y="6" width="24" height="20" rx="3" stroke="#8159BB" strokeWidth="1.2" fill="none"/>
      <line x1="4" y1="12" x2="28" y2="12" stroke="#8159BB" strokeWidth="1" opacity="0.4"/>
    </svg>
  ),
  'landing-pages': (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <rect x="8" y="4" width="16" height="24" rx="3" stroke="#8159BB" strokeWidth="1.2" fill="none"/>
      <rect x="11" y="9" width="10" height="3" rx="1" fill="#7671FF" opacity="0.3"/>
    </svg>
  ),
  portfolios: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <rect x="4" y="8" width="10" height="8" rx="2" stroke="#8159BB" strokeWidth="1.2" fill="none"/>
      <rect x="18" y="8" width="10" height="8" rx="2" stroke="#8159BB" strokeWidth="1.2" fill="none"/>
      <rect x="4" y="20" width="10" height="8" rx="2" stroke="#8159BB" strokeWidth="1.2" fill="none"/>
      <rect x="18" y="20" width="10" height="8" rx="2" stroke="#8159BB" strokeWidth="1.2" fill="none"/>
    </svg>
  ),
  blogs: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <rect x="6" y="6" width="20" height="20" rx="3" stroke="#8159BB" strokeWidth="1.2" fill="none"/>
      <rect x="10" y="11" width="12" height="2" rx="1" fill="#8159BB" opacity="0.4"/>
      <rect x="10" y="16" width="10" height="2" rx="1" fill="#C6C9CD"/>
    </svg>
  ),
  stores: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path d="M6 14L9 6H23L26 14" stroke="#8159BB" strokeWidth="1.2" fill="none"/>
      <rect x="6" y="14" width="20" height="14" rx="2" stroke="#8159BB" strokeWidth="1.2" fill="none"/>
    </svg>
  ),
  'link-in-bio': (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <circle cx="16" cy="10" r="4" stroke="#8159BB" strokeWidth="1.2" fill="none"/>
      <rect x="10" y="17" width="12" height="3.5" rx="1.5" stroke="#8159BB" strokeWidth="1.2" fill="none"/>
      <rect x="10" y="23" width="12" height="3.5" rx="1.5" stroke="#8159BB" strokeWidth="1.2" fill="none"/>
    </svg>
  ),
}

const AllGenerators = () => {
  const [query, setQuery] = useState('')
  const [expanded, setExpanded] = useState({})

  const filteredData = useMemo(() => {
    const q = query.toLowerCase().trim()
    if (!q) return null
    const result = {}
    let total = 0
    for (const cat of categories) {
      const items = allGenerators[cat.id] || []
      const matches = items.filter(
        (g) =>
          g.name.toLowerCase().includes(q) ||
          g.description.toLowerCase().includes(q) ||
          cat.name.toLowerCase().includes(q)
      )
      if (matches.length > 0) {
        result[cat.id] = matches
        total += matches.length
      }
    }
    return { result, total }
  }, [query])

  const isSearching = query.trim().length > 0
  const hasResults = filteredData && filteredData.total > 0

  return (
    <section id="all-generators" className="py-10 bg-bg-light">
      <div className="max-w-[1200px] mx-auto px-5">
        <h2 className="font-heading text-heading-section text-2xl md:text-3xl text-center mb-1.5">
          {t.heading}
        </h2>
        <p className="text-body-text text-center mb-8">{t.sub}</p>

        {/* Search */}
        <div className="max-w-[480px] mx-auto mb-8">
          <div className="relative">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              aria-hidden="true"
              className="absolute left-3 top-1/2 -translate-y-1/2 text-body-text"
            >
              <circle cx="7.5" cy="7.5" r="5.5" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M12 12l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            <input
              type="search"
              aria-label="Search generators"
              placeholder={t.searchPlaceholder}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full h-[40px] pl-10 pr-4 border border-card-border rounded text-sm text-heading-dark bg-white focus:outline-none focus:border-brand-purple transition-colors"
            />
          </div>
          {isSearching && hasResults && (
            <p className="text-sm text-body-text mt-2">{t.matchCount(filteredData.total)}</p>
          )}
        </div>

        {/* No results */}
        {isSearching && !hasResults && (
          <div className="text-center py-10">
            <p className="text-body-text mb-4">{t.noResults}</p>
            <button
              type="button"
              onClick={() => setQuery('')}
              className="font-heading text-sm text-brand-purple border border-brand-purple rounded px-4 h-[36px] hover:bg-brand-purple hover:text-white transition-colors bg-transparent cursor-pointer"
            >
              {t.clearSearch}
            </button>
            <p className="text-body-text mt-4">
              {t.cantFind}{' '}
              <a href="/s/ai_site_builder" className="text-brand-purple hover:underline">
                {t.startWithAI}
              </a>
            </p>
          </div>
        )}

        {/* Category subsections */}
        {categories.map((cat) => {
          const items = allGenerators[cat.id] || []
          const matchedItems = isSearching
            ? (filteredData?.result?.[cat.id] || [])
            : items

          if (isSearching && matchedItems.length === 0) return null

          const isExpanded = expanded[cat.id] || isSearching
          const visibleItems = isExpanded ? matchedItems : matchedItems.slice(0, VISIBLE_COUNT)
          const hasMore = !isSearching && matchedItems.length > VISIBLE_COUNT
          const controlId = `generators-grid-${cat.id}`

          return (
            <div key={cat.id} id={cat.id} className="mb-10 scroll-mt-[60px]">
              <div className="flex items-center gap-3 mb-1.5">
                {categoryThumbnails[cat.id]}
                <h3 className="font-heading text-heading-section text-lg md:text-xl">
                  {cat.name}
                </h3>
              </div>
              <p className="text-body-text text-sm mb-5 ml-[44px]">{cat.description}</p>

              <div
                id={controlId}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
              >
                {/* All cards rendered in DOM; hidden ones use CSS */}
                {matchedItems.map((gen, idx) => {
                  const isVisible = isExpanded || idx < VISIBLE_COUNT
                  return (
                    <a
                      key={gen.slug}
                      href={`/generators/${gen.slug}`}
                      className={`block bg-white border border-card-border rounded p-5 card-hover ${
                        isVisible ? '' : 'hidden'
                      }`}
                      aria-hidden={!isVisible}
                      tabIndex={isVisible ? 0 : -1}
                    >
                      <span className="font-heading text-heading-dark text-sm block mb-1.5">
                        {gen.name}
                      </span>
                      <span className="text-body-text text-sm block">
                        {gen.description}
                      </span>
                    </a>
                  )
                })}
              </div>

              {hasMore && (
                <div className="mt-4 text-center">
                  <button
                    type="button"
                    aria-expanded={isExpanded}
                    aria-controls={controlId}
                    onClick={() => setExpanded((prev) => ({ ...prev, [cat.id]: !prev[cat.id] }))}
                    className="font-heading text-xs text-brand-purple border border-brand-purple rounded px-4 h-[32px] hover:bg-brand-purple hover:text-white transition-colors bg-transparent cursor-pointer"
                  >
                    {isExpanded ? t.showLess : t.showAll(matchedItems.length)}
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

export default AllGenerators
