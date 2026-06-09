import React from 'react'
import { strings } from '../../data/strings'
import { categories, directoryGenerators } from '../../data/generators'
import { WebsiteIcon, LandingPageIcon, PortfolioIcon, BlogIcon, StoreIcon, LinkInBioIcon, SearchIcon } from '../Icons'

const s = strings.en

const iconMap = {
  websites: WebsiteIcon,
  'landing-pages': LandingPageIcon,
  portfolios: PortfolioIcon,
  blogs: BlogIcon,
  stores: StoreIcon,
  'link-in-bio': LinkInBioIcon,
}

const INITIAL_VISIBLE = 6

function GeneratorCard({ gen }) {
  return (
    <a href={`/generators/${gen.slug}`} className="card">
      <h4 style={{ fontFamily: '"Josefin Sans", Poppins, sans-serif', fontWeight: 700, fontSize: 15, textTransform: 'uppercase', color: '#2E2E2F', margin: '0 0 6px 0' }}>
        {gen.name}
      </h4>
      <p style={{ fontSize: 13, color: '#636972', margin: 0, lineHeight: 1.5 }}>
        {gen.description}
      </p>
    </a>
  )
}

function CategorySubsection({ cat }) {
  const gens = directoryGenerators[cat.id]
  const Icon = iconMap[cat.id]
  const hasMore = gens.length > INITIAL_VISIBLE
  const hiddenCount = gens.length - INITIAL_VISIBLE
  const [expanded, setExpanded] = React.useState(false)
  const contentRef = React.useRef(null)
  const [maxHeight, setMaxHeight] = React.useState(0)

  React.useEffect(() => {
    if (!hasMore) return
    if (expanded) {
      if (contentRef.current) {
        setMaxHeight(contentRef.current.scrollHeight)
      }
    } else {
      // Collapse: set maxHeight to 0 for the hidden portion
      setMaxHeight(0)
    }
  }, [expanded, hasMore])

  // Only use JS-enhanced collapse behavior after mount
  const [jsReady, setJsReady] = React.useState(false)
  React.useEffect(() => {
    setJsReady(true)
  }, [])

  const visibleGens = gens.slice(0, INITIAL_VISIBLE)
  const hiddenGens = gens.slice(INITIAL_VISIBLE)

  return (
    <div id={cat.id} style={{ marginTop: 40, scrollMarginTop: 72 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
        <Icon />
        <h3 style={{ fontFamily: '"Josefin Sans", Poppins, sans-serif', fontWeight: 700, textTransform: 'uppercase', fontSize: 20, color: '#4B5056', margin: 0 }}>
          {cat.name}
        </h3>
      </div>
      <p style={{ fontSize: 14, color: '#636972', marginBottom: 20, marginLeft: 52 }}>{cat.description}</p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 20 }}>
        {visibleGens.map((gen) => (
          <GeneratorCard key={gen.slug} gen={gen} />
        ))}
      </div>

      {hasMore && (
        <div
          ref={contentRef}
          className="show-all-content"
          style={{
            overflow: 'hidden',
            maxHeight: jsReady ? (expanded ? maxHeight : 0) : undefined,
            transition: jsReady ? 'max-height 0.4s ease' : 'none',
          }}
        >
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 20, marginTop: 20 }}>
            {hiddenGens.map((gen) => (
              <GeneratorCard key={gen.slug} gen={gen} />
            ))}
          </div>
        </div>
      )}

      {hasMore && (
        <div style={{ marginTop: 16 }}>
          <button
            onClick={() => setExpanded(!expanded)}
            aria-expanded={expanded}
            aria-controls={`show-all-${cat.id}`}
            className="btn-ghost"
            style={{ fontSize: 13, height: 32, paddingInline: 12 }}
          >
            {expanded ? s.showLessPrefix : `${s.showAllPrefix} ${hiddenCount} more`}
          </button>
        </div>
      )}
    </div>
  )
}

function SearchResults({ query }) {
  const normalizedQuery = query.trim().toLowerCase()
  const allCards = React.useMemo(() => {
    const cards = []
    for (const cat of categories) {
      for (const gen of directoryGenerators[cat.id]) {
        cards.push({ ...gen, category: cat.name, categoryId: cat.id })
      }
    }
    return cards
  }, [])

  const filteredCards = allCards.filter((card) => {
    const haystack = `${card.name} ${card.description} ${card.category}`.toLowerCase()
    return haystack.includes(normalizedQuery)
  })

  const resultCount = filteredCards.length

  return (
    <div>
      <p style={{ textAlign: 'center', fontSize: 13, color: '#636972', marginBottom: 20 }}>
        {s.searchResultCount(resultCount)}
      </p>

      {resultCount === 0 && (
        <div style={{ textAlign: 'center', paddingBlock: '30px 20px' }}>
          <p style={{ fontSize: 15, color: '#4B5056', marginBottom: 12 }}>{s.searchNoResults}</p>
          <p style={{ fontSize: 13, color: '#636972' }}>
            {s.searchNoResultsCta}{' '}
            <a href="/s/ai_site_builder" style={{ color: '#8159BB', fontWeight: 600 }}>Start with our AI builder</a>.
          </p>
        </div>
      )}

      {resultCount > 0 && categories.map((cat) => {
        const matchingGens = filteredCards.filter((c) => c.categoryId === cat.id)
        if (matchingGens.length === 0) return null
        const Icon = iconMap[cat.id]
        return (
          <div key={cat.id} id={cat.id} style={{ marginTop: 30 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
              <Icon />
              <h3 style={{ fontFamily: '"Josefin Sans", Poppins, sans-serif', fontWeight: 700, textTransform: 'uppercase', fontSize: 18, color: '#4B5056', margin: 0 }}>
                {cat.name}
              </h3>
              <span style={{ fontSize: 12, color: '#8159BB', fontWeight: 600 }}>({matchingGens.length})</span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 20 }}>
              {matchingGens.map((gen) => (
                <GeneratorCard key={gen.slug} gen={gen} />
              ))}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default function AllGenerators() {
  const [query, setQuery] = React.useState('')
  const normalizedQuery = query.trim().toLowerCase()
  const isSearching = normalizedQuery.length > 0

  const handleSearchChange = (e) => {
    setQuery(e.target.value)
  }

  const clearSearch = () => {
    setQuery('')
  }

  return (
    <section id="all-generators" style={{ paddingBlock: '40px 40px' }}>
      <div className="section-container">
        <h2 style={{ fontFamily: '"Josefin Sans", Poppins, sans-serif', fontWeight: 700, textTransform: 'uppercase', fontSize: 'clamp(22px, 3vw, 28px)', color: '#4B5056', textAlign: 'center', marginBottom: 8 }}>
          {s.allGeneratorsHeading}
        </h2>
        <p style={{ textAlign: 'center', color: '#636972', marginBottom: 30, fontSize: 14 }}>
          {s.allGeneratorsSubheading}
        </p>

        {/* Search input */}
        <div style={{ position: 'relative', maxWidth: 480, marginInline: 'auto', marginBottom: 10 }}>
          <SearchIcon />
          <input
            type="search"
            aria-label={s.ariaSearch}
            placeholder={s.searchPlaceholder}
            value={query}
            onChange={handleSearchChange}
            style={{
              width: '100%',
              height: 44,
              padding: '0 16px 0 42px',
              border: '1px solid #C6C9CD',
              borderRadius: 3,
              fontSize: 14,
              fontFamily: '"Open Sans", system-ui, sans-serif',
              color: '#2E2E2F',
              background: '#FFFFFF',
              outline: 'none',
            }}
          />
          {query && (
            <button
              onClick={clearSearch}
              aria-label={s.searchClear}
              style={{
                position: 'absolute',
                right: 8,
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: 4,
                color: '#636972',
                fontSize: 16,
                lineHeight: 1,
                fontFamily: 'system-ui, sans-serif',
                fontWeight: 400,
                textTransform: 'none',
              }}
            >
              &times;
            </button>
          )}
        </div>

        {/* Search results / directory */}
        {isSearching ? (
          <SearchResults query={query} />
        ) : (
          categories.map((cat) => (
            <CategorySubsection key={cat.id} cat={cat} />
          ))
        )}
      </div>
    </section>
  )
}
