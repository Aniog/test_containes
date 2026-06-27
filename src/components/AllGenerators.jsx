import { useState, useRef } from 'react'
import { directoryGenerators, categories } from '../data/generators'
import { strings } from '../data/strings'

const INITIAL_VISIBLE = 6

export default function AllGenerators() {
  const t = strings.en
  const [searchQuery, setSearchQuery] = useState('')
  const [expandedSections, setExpandedSections] = useState({})
  const containerRef = useRef(null)

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value)
  }

  const handleClearSearch = () => {
    setSearchQuery('')
  }

  const toggleSection = (categoryId) => {
    setExpandedSections((prev) => ({
      ...prev,
      [categoryId]: !prev[categoryId],
    }))
  }

  // Filter generators based on search query
  const getFilteredGenerators = (categoryId) => {
    const generators = directoryGenerators[categoryId] || []
    if (!searchQuery.trim()) return generators

    const query = searchQuery.toLowerCase().trim()
    const category = categories.find((c) => c.id === categoryId)
    const categoryName = category ? category.name.toLowerCase() : ''

    return generators.filter((gen) => {
      return (
        gen.name.toLowerCase().includes(query) ||
        gen.description.toLowerCase().includes(query) ||
        categoryName.includes(query)
      )
    })
  }

  // Count total visible generators across all sections
  const getTotalVisibleCount = () => {
    let total = 0
    categories.forEach((cat) => {
      total += getFilteredGenerators(cat.id).length
    })
    return total
  }

  const totalVisible = getTotalVisibleCount()
  const hasActiveSearch = searchQuery.trim().length > 0

  return (
    <section
      id="all-generators"
      className="all-generators"
      aria-labelledby="all-generators-heading"
      ref={containerRef}
    >
      <div className="container">
        <h2 id="all-generators-heading" className="section-heading">{t.allGeneratorsHeading}</h2>
        <p className="section-subheading">{t.allGeneratorsSubheading}</p>

        {/* Search */}
        <div className="search-container">
          <div className="search-input-wrapper">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              aria-hidden="true"
              className="search-icon"
            >
              <circle cx="9" cy="9" r="6" stroke="#636972" strokeWidth="2" />
              <line x1="13.5" y1="13.5" x2="18" y2="18" stroke="#636972" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <input
              type="search"
              className="search-input"
              placeholder={t.searchPlaceholder}
              aria-label={t.searchLabel}
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </div>
          {hasActiveSearch && (
            <p className="search-results-count" aria-live="polite">
              {t.searchResults(totalVisible)}
            </p>
          )}
        </div>

        {/* No results state */}
        {hasActiveSearch && totalVisible === 0 && (
          <div className="search-empty-state">
            <p>{t.noResults}</p>
            <div className="search-empty-actions">
              <button type="button" className="btn btn-ghost" onClick={handleClearSearch}>
                {t.clearSearch}
              </button>
              <a href="/s/ai_site_builder" className="search-empty-link">
                {t.noResultsCta}
              </a>
            </div>
          </div>
        )}

        {/* Category subsections */}
        {categories.map((cat) => {
          const filtered = getFilteredGenerators(cat.id)
          if (hasActiveSearch && filtered.length === 0) return null

          const isExpanded = expandedSections[cat.id] || false
          const visibleItems = isExpanded ? filtered : filtered.slice(0, INITIAL_VISIBLE)
          const hasMore = filtered.length > INITIAL_VISIBLE

          return (
            <div key={cat.id} id={cat.id} className="directory-section">
              <h3 className="directory-section-heading">{cat.name}</h3>
              <p className="directory-section-desc">{cat.description}</p>
              <div className="directory-grid" id={`directory-grid-${cat.id}`}>
                {visibleItems.map((gen) => (
                  <a
                    key={gen.slug}
                    href={`/generators/${gen.slug}`}
                    className="directory-card"
                  >
                    <div className="directory-card-icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <rect x="3" y="3" width="18" height="18" rx="2" stroke="#8159BB" strokeWidth="1.5" />
                        <line x1="3" y1="9" x2="21" y2="9" stroke="#8159BB" strokeWidth="1.5" />
                      </svg>
                    </div>
                    <h4 className="directory-card-name">{gen.name}</h4>
                    <p className="directory-card-desc">{gen.description}</p>
                  </a>
                ))}
              </div>
              {hasMore && (
                <button
                  type="button"
                  className="btn btn-ghost show-all-btn"
                  aria-expanded={isExpanded}
                  aria-controls={`directory-grid-${cat.id}`}
                  onClick={() => toggleSection(cat.id)}
                >
                  {isExpanded ? t.showLess : t.showAll(filtered.length)}
                </button>
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}
