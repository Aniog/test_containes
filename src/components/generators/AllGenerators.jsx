import { useState, useMemo, useEffect, useRef } from 'react'
import strings from '@/strings/strings.en.js'
import { categories, getGeneratorsByCategory } from '@/data/generators.js'
import { SearchIcon, CategoryIcon } from './Icons.jsx'

const INITIAL_VISIBLE = 6

function useHasMounted() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
  }, [])
  return mounted
}

export default function AllGenerators() {
  const [query, setQuery] = useState('')
  const [expanded, setExpanded] = useState({})
  const hasMounted = useHasMounted()
  const searchId = useRef('gen-search-input')

  const normalizedQuery = query.trim().toLowerCase()

  const filteredCategories = useMemo(() => {
    if (!normalizedQuery) return categories.map((cat) => ({ ...cat, generators: getGeneratorsByCategory(cat.id) }))
    return categories
      .map((cat) => ({
        ...cat,
        generators: getGeneratorsByCategory(cat.id).filter((g) => {
          const hay = `${g.name} ${g.description} ${g.categoryName}`.toLowerCase()
          return hay.includes(normalizedQuery)
        }),
      }))
      .filter((cat) => cat.generators.length > 0)
  }, [normalizedQuery])

  const totalMatches = useMemo(
    () => filteredCategories.reduce((sum, cat) => sum + cat.generators.length, 0),
    [filteredCategories]
  )

  const visibleCount = hasMounted ? INITIAL_VISIBLE : Number.POSITIVE_INFINITY

  return (
    <section id="all-generators" className="gen-section" aria-labelledby="all-generators-heading">
      <div className="gen-container">
        <div className="gen-section-header">
          <h2 id="all-generators-heading" className="gen-h2">{strings.directory.heading}</h2>
          <p className="gen-section-sub">{strings.directory.subheading}</p>
        </div>

        <div className="gen-search-wrap">
          <label htmlFor={searchId.current} className="gen-visually-hidden">
            {strings.directory.searchAriaLabel}
          </label>
          <div className="gen-search-input-wrap">
            <SearchIcon className="gen-search-icon" />
            <input
              id={searchId.current}
              type="search"
              className="gen-search-input"
              placeholder={strings.directory.searchPlaceholder}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              aria-label={strings.directory.searchAriaLabel}
            />
          </div>
          {normalizedQuery && (
            <p className="gen-search-results" aria-live="polite">
              {totalMatches} {totalMatches === 1 ? strings.directory.resultsSingular : strings.directory.resultsPlural}
            </p>
          )}
        </div>

        {normalizedQuery && totalMatches === 0 && (
          <div className="gen-empty-state">
            <p>{strings.directory.noResults}</p>
            <button type="button" className="gen-btn gen-btn-ghost" onClick={() => setQuery('')}>
              {strings.directory.clearSearch}
            </button>
            <a href="/s/ai_site_builder" className="gen-empty-link">
              {strings.directory.cantFindIt}
            </a>
          </div>
        )}

        <div className="gen-directory">
          {filteredCategories.map((cat) => {
            const isExpanded = expanded[cat.id] || false
            const displayGenerators = isExpanded
              ? cat.generators
              : cat.generators.slice(0, visibleCount)
            const hasMore = cat.generators.length > visibleCount

            return (
              <div key={cat.id} id={cat.slug} className="gen-directory-section">
                <h3 className="gen-h3">{cat.name}</h3>
                <p className="gen-directory-desc">{cat.description}</p>
                <div className="gen-directory-grid" data-category={cat.id}>
                  {displayGenerators.map((g) => (
                    <a
                      key={g.slug}
                      href={`/generators/${g.slug}`}
                      className="gen-card gen-card-link gen-directory-card"
                    >
                      <CategoryIcon className="gen-directory-card-icon" width={40} height={40} />
                      <span className="gen-card-title">{g.name}</span>
                      <span className="gen-card-desc">{g.description}</span>
                    </a>
                  ))}
                </div>
                {hasMore && (
                  <button
                    type="button"
                    className="gen-btn gen-btn-ghost gen-show-all"
                    onClick={() =>
                      setExpanded((prev) => ({ ...prev, [cat.id]: !isExpanded }))
                    }
                    aria-expanded={isExpanded}
                    aria-controls={`gen-grid-${cat.id}`}
                  >
                    {isExpanded
                      ? strings.directory.showLess
                      : strings.directory.showAll.replace(
                          '{count}',
                          String(cat.generators.length)
                        )}
                  </button>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
