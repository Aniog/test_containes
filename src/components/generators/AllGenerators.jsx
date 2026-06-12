import { useState, useMemo } from 'react'
import { strings } from '../../data/strings'
import { categories, allGeneratorsWithSlugs } from '../../data/generators'

const t = strings.en.allGenerators
const INITIAL_VISIBLE = 6

function CategoryThumbnail({ categoryId }) {
  const thumbs = {
    websites: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <rect x="3" y="6" width="26" height="20" rx="2" stroke="#8159BB" strokeWidth="1.2"/>
        <line x1="3" y1="11" x2="29" y2="11" stroke="#8159BB" strokeWidth="1"/>
        <rect x="6" y="14" width="8" height="5" rx="1" fill="#8159BB" opacity="0.15"/>
      </svg>
    ),
    'landing-pages': (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <rect x="7" y="3" width="18" height="26" rx="2" stroke="#8159BB" strokeWidth="1.2"/>
        <rect x="10" y="8" width="12" height="3" rx="1" fill="#8159BB" opacity="0.2"/>
        <rect x="11" y="14" width="10" height="2.5" rx="1.2" stroke="#8159BB" strokeWidth="1"/>
      </svg>
    ),
    portfolios: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <rect x="3" y="6" width="11" height="9" rx="1.5" stroke="#8159BB" strokeWidth="1"/>
        <rect x="18" y="6" width="11" height="9" rx="1.5" stroke="#8159BB" strokeWidth="1"/>
        <rect x="3" y="18" width="11" height="9" rx="1.5" stroke="#8159BB" strokeWidth="1"/>
        <rect x="18" y="18" width="11" height="9" rx="1.5" stroke="#8159BB" strokeWidth="1"/>
      </svg>
    ),
    blogs: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <rect x="5" y="5" width="22" height="22" rx="2" stroke="#8159BB" strokeWidth="1.2"/>
        <rect x="8" y="10" width="16" height="2" rx="1" fill="#8159BB" opacity="0.25"/>
        <rect x="8" y="14" width="12" height="2" rx="1" fill="#8159BB" opacity="0.15"/>
        <rect x="8" y="18" width="14" height="2" rx="1" fill="#8159BB" opacity="0.1"/>
      </svg>
    ),
    stores: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path d="M6 13V27h20V13" stroke="#8159BB" strokeWidth="1.2"/>
        <path d="M4 13l3-8h18l3 8z" stroke="#8159BB" strokeWidth="1.2" fill="none"/>
        <rect x="13" y="20" width="6" height="7" rx="1" stroke="#8159BB" strokeWidth="1"/>
      </svg>
    ),
    'link-in-bio': (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <circle cx="16" cy="9" r="5" stroke="#8159BB" strokeWidth="1.2"/>
        <rect x="8" y="17" width="16" height="3.5" rx="1.5" stroke="#8159BB" strokeWidth="1"/>
        <rect x="8" y="22" width="16" height="3.5" rx="1.5" stroke="#8159BB" strokeWidth="1"/>
        <rect x="8" y="27" width="16" height="3.5" rx="1.5" stroke="#8159BB" strokeWidth="1"/>
      </svg>
    ),
  }
  return thumbs[categoryId] || null
}

function GeneratorCard({ gen, categoryId }) {
  return (
    <a
      href={`/generators/${gen.slug}`}
      className="flex items-start gap-3 bg-white border border-card-border rounded-card p-5 transition-all hover:shadow-md hover:border-brand-purple focus-ring"
    >
      <div className="shrink-0 mt-0.5">
        <CategoryThumbnail categoryId={categoryId} />
      </div>
      <div className="min-w-0">
        <span className="block font-heading font-bold uppercase text-heading-dark text-sm">
          {gen.name}
        </span>
        <span className="block mt-1 text-body-text font-body text-sm">
          {gen.desc}
        </span>
      </div>
    </a>
  )
}

function CategorySection({ category, generators, searchQuery }) {
  const [expanded, setExpanded] = useState(false)
  const controlId = `section-${category.id}-cards`

  const visibleGenerators = expanded ? generators : generators.slice(0, INITIAL_VISIBLE)
  const hasMore = generators.length > INITIAL_VISIBLE

  return (
    <div id={category.id} className="scroll-mt-[70px]">
      <h3 className="font-heading font-bold uppercase text-heading-section text-xl md:text-2xl">
        {category.name}
      </h3>
      <p className="mt-1 text-body-text font-body text-sm">{category.desc}</p>
      <div
        id={controlId}
        className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
      >
        {generators.map((gen, idx) => (
          <div
            key={gen.slug}
            className={
              !searchQuery && !expanded && idx >= INITIAL_VISIBLE
                ? 'hidden'
                : ''
            }
          >
            <GeneratorCard gen={gen} categoryId={category.id} />
          </div>
        ))}
      </div>
      {hasMore && !searchQuery && (
        <div className="mt-5">
          <button
            type="button"
            onClick={() => setExpanded(!expanded)}
            aria-expanded={expanded}
            aria-controls={controlId}
            className="text-brand-purple font-heading font-bold uppercase text-xs border border-brand-purple rounded-card px-4 py-2 bg-transparent transition-colors hover:bg-brand-purple hover:text-white focus-ring"
          >
            {expanded ? t.showLess : t.showAll(generators.length)}
          </button>
        </div>
      )}
    </div>
  )
}

export default function AllGenerators() {
  const [query, setQuery] = useState('')

  const filteredByCategory = useMemo(() => {
    if (!query.trim()) return null
    const q = query.toLowerCase().trim()
    const result = {}
    for (const cat of categories) {
      const items = allGeneratorsWithSlugs[cat.id] || []
      const matches = items.filter(
        (g) =>
          g.name.toLowerCase().includes(q) ||
          g.desc.toLowerCase().includes(q) ||
          cat.name.toLowerCase().includes(q)
      )
      if (matches.length > 0) {
        result[cat.id] = matches
      }
    }
    return result
  }, [query])

  const totalMatches = filteredByCategory
    ? Object.values(filteredByCategory).reduce((sum, arr) => sum + arr.length, 0)
    : null

  return (
    <section id="all-generators" className="py-10 bg-bg-light scroll-mt-[60px]">
      <div className="max-w-content mx-auto px-5">
        <h2 className="font-heading font-bold uppercase text-heading-section text-2xl md:text-3xl text-center">
          {t.heading}
        </h2>
        <p className="mt-2.5 text-body-text font-body text-center">
          {t.sub}
        </p>

        {/* Search */}
        <div className="mt-8 max-w-[480px] mx-auto">
          <div className="relative">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              aria-hidden="true"
              className="absolute left-3 top-1/2 -translate-y-1/2 text-body-text"
            >
              <circle cx="8" cy="8" r="5.5" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M12 12l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            <input
              type="search"
              aria-label="Search generators"
              placeholder={t.searchPlaceholder}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full h-10 pl-10 pr-4 border border-card-border rounded-card text-sm font-body text-heading-dark bg-white placeholder:text-body-text focus:outline-none focus:border-brand-purple focus:ring-2 focus:ring-brand-purple/20"
            />
          </div>
          {filteredByCategory !== null && totalMatches > 0 && (
            <p className="mt-2 text-xs text-body-text font-body">
              {t.matchCount(totalMatches)}
            </p>
          )}
        </div>

        {/* Empty state */}
        {filteredByCategory !== null && totalMatches === 0 && (
          <div className="mt-8 text-center">
            <p className="text-body-text font-body">{t.noResults}</p>
            <button
              type="button"
              onClick={() => setQuery('')}
              className="mt-2.5 text-brand-purple font-heading font-bold uppercase text-xs border border-brand-purple rounded-card px-4 py-2 bg-transparent hover:bg-brand-purple hover:text-white transition-colors focus-ring"
            >
              {t.clearSearch}
            </button>
            <p className="mt-2.5 text-sm text-body-text">
              <a href="/s/ai_site_builder" className="text-brand-purple hover:underline focus-ring rounded">
                {t.cantFind}
              </a>
            </p>
          </div>
        )}

        {/* Category subsections */}
        <div className="mt-10 space-y-10">
          {categories.map((cat) => {
            const generators = filteredByCategory
              ? filteredByCategory[cat.id]
              : allGeneratorsWithSlugs[cat.id]

            if (!generators || generators.length === 0) return null

            return (
              <CategorySection
                key={cat.id}
                category={cat}
                generators={generators}
                searchQuery={query.trim()}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}
