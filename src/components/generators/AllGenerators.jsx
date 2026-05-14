import { useState, useRef, useId } from 'react'
import { allGenerators } from './data'
import { categoryThumbnails } from './Illustrations'
import { t } from './strings'

const HEADING_FONT = "'Brandon Grotesque', 'Josefin Sans', Poppins, sans-serif"
const INITIAL_VISIBLE = 6 // cards shown before "Show all" toggle

function normalize(str) {
  return str.toLowerCase().replace(/\s+/g, ' ').trim()
}

function matchesQuery(item, catLabel, query) {
  if (!query) return true
  const q = normalize(query)
  return (
    normalize(item.name).includes(q) ||
    normalize(item.description).includes(q) ||
    normalize(catLabel).includes(q)
  )
}

// Single category subsection
function CategorySubsection({ cat, query }) {
  const [expanded, setExpanded] = useState(false)
  const panelId = useId()
  const btnId = useId()

  const matchingItems = cat.items.filter((item) =>
    matchesQuery(item, cat.categoryLabel, query)
  )

  // When searching, show all matches; otherwise respect the toggle
  const isSearching = query.length > 0
  const visibleItems = isSearching
    ? matchingItems
    : expanded
    ? cat.items
    : cat.items.slice(0, INITIAL_VISIBLE)

  const hiddenCount = cat.items.length - INITIAL_VISIBLE
  const showToggle = !isSearching && cat.items.length > INITIAL_VISIBLE

  // Hide entire subsection when searching and no matches
  if (isSearching && matchingItems.length === 0) return null

  return (
    <section
      id={cat.categoryId}
      className="py-8"
      style={{ borderTop: '1px solid #E2E4E7' }}
    >
      <div className="mb-5">
        <h3
          className="m-0 mb-1 uppercase"
          style={{
            fontFamily: HEADING_FONT,
            fontWeight: 700,
            fontSize: 'clamp(16px, 2vw, 20px)',
            color: '#4B5056',
            lineHeight: 1.2,
          }}
        >
          {cat.categoryLabel}
        </h3>
        <p className="m-0" style={{ color: '#636972', fontSize: '13px' }}>
          {cat.description}
        </p>
      </div>

      {/* Card grid — all cards always in DOM; JS only controls visibility */}
      <div
        className="grid gap-4"
        style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))' }}
      >
        {cat.items.map((item) => {
          const isVisible = visibleItems.includes(item)
          return (
            <article
              key={item.slug}
              aria-hidden={!isVisible ? 'true' : undefined}
              style={!isVisible ? { display: 'none' } : undefined}
            >
              <a
                href={item.href}
                className="generator-card block no-underline bg-white h-full"
                style={{
                  border: '1px solid #C6C9CD',
                  borderRadius: '3px',
                  padding: '20px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px',
                  textDecoration: 'none',
                }}
                aria-label={item.name}
                tabIndex={!isVisible ? -1 : undefined}
              >
                {/* Shared category thumbnail */}
                <div style={{ lineHeight: 0, marginBottom: '4px' }}>
                  {categoryThumbnails[cat.categoryId]}
                </div>

                <p
                  className="m-0"
                  style={{
                    fontFamily: HEADING_FONT,
                    fontWeight: 700,
                    fontSize: '14px',
                    color: '#2E2E2F',
                    lineHeight: 1.3,
                  }}
                >
                  {item.name}
                </p>

                <p
                  className="m-0"
                  style={{ color: '#636972', fontSize: '13px', lineHeight: 1.5 }}
                >
                  {item.description}
                </p>
              </a>
            </article>
          )
        })}
      </div>

      {/* Show all / Show less toggle */}
      {showToggle && (
        <div className="mt-5">
          <button
            id={btnId}
            aria-expanded={expanded}
            aria-controls={panelId}
            onClick={() => setExpanded((v) => !v)}
            className="inline-flex items-center gap-1 bg-transparent cursor-pointer uppercase"
            style={{
              fontFamily: HEADING_FONT,
              fontWeight: 700,
              fontSize: '12px',
              letterSpacing: '0.06em',
              border: '1px solid #8159BB',
              color: '#8159BB',
              borderRadius: '4px',
              padding: '6px 14px',
              height: '36px',
            }}
          >
            {expanded ? t.showLessBtn : t.showAllBtn(cat.items.length)}
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              style={{
                transform: expanded ? 'rotate(180deg)' : 'none',
                transition: 'transform 0.2s',
              }}
            >
              <path
                d="M2 4l4 4 4-4"
                stroke="#8159BB"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      )}
    </section>
  )
}

export default function AllGenerators() {
  const [query, setQuery] = useState('')
  const inputRef = useRef(null)

  const totalMatches = allGenerators.reduce((acc, cat) => {
    return (
      acc +
      cat.items.filter((item) => matchesQuery(item, cat.categoryLabel, query))
        .length
    )
  }, 0)

  const isSearching = query.length > 0

  return (
    <section
      id="all-generators"
      className="py-10"
      style={{ backgroundColor: '#F4F6F8' }}
    >
      <div className="max-w-content mx-auto px-5">
        {/* Section heading */}
        <div className="mb-8">
          <h2
            className="m-0 mb-2 uppercase"
            style={{
              fontFamily: HEADING_FONT,
              fontWeight: 700,
              fontSize: 'clamp(22px, 2.5vw, 30px)',
              color: '#4B5056',
              lineHeight: 1.2,
            }}
          >
            {t.allGeneratorsHeading}
          </h2>
          <p className="m-0" style={{ color: '#636972', fontSize: '14px' }}>
            {t.allGeneratorsSubheading}
          </p>
        </div>

        {/* Search input */}
        <div className="mb-6">
          <label
            htmlFor="generator-search"
            className="sr-only"
          >
            Search generators
          </label>
          <div
            className="relative"
            style={{ maxWidth: '480px' }}
          >
            {/* Magnifying glass icon */}
            <span
              className="absolute inset-y-0 flex items-center pointer-events-none"
              style={{ left: '12px' }}
              aria-hidden="true"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="7" cy="7" r="4.5" stroke="#8159BB" strokeWidth="1.5" />
                <path
                  d="M10.5 10.5l3 3"
                  stroke="#8159BB"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            <input
              id="generator-search"
              ref={inputRef}
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t.searchPlaceholder}
              aria-label="Search generators"
              className="w-full bg-white"
              style={{
                border: '1px solid #C6C9CD',
                borderRadius: '4px',
                height: '40px',
                paddingLeft: '38px',
                paddingRight: '12px',
                fontSize: '14px',
                color: '#2E2E2F',
                fontFamily: "'Open Sans', sans-serif",
                outline: 'none',
              }}
              onFocus={(e) => (e.target.style.borderColor = '#8159BB')}
              onBlur={(e) => (e.target.style.borderColor = '#C6C9CD')}
            />
          </div>

          {/* Result count */}
          {isSearching && (
            <p
              className="mt-2 m-0"
              role="status"
              aria-live="polite"
              style={{ color: '#636972', fontSize: '13px' }}
            >
              {t.searchResultCount(totalMatches)}
            </p>
          )}
        </div>

        {/* No results state */}
        {isSearching && totalMatches === 0 && (
          <div
            className="py-10 text-center"
            style={{ color: '#636972' }}
          >
            <p className="m-0 mb-3" style={{ fontSize: '15px' }}>
              {t.searchNoResults}
            </p>
            <button
              onClick={() => {
                setQuery('')
                inputRef.current?.focus()
              }}
              className="inline-flex items-center justify-center bg-transparent cursor-pointer uppercase mr-4"
              style={{
                fontFamily: HEADING_FONT,
                fontWeight: 700,
                fontSize: '12px',
                letterSpacing: '0.06em',
                border: '1px solid #8159BB',
                color: '#8159BB',
                borderRadius: '4px',
                padding: '6px 14px',
                height: '36px',
              }}
            >
              {t.searchClearBtn}
            </button>
            <a
              href="/s/ai_site_builder"
              style={{
                color: '#8159BB',
                fontSize: '13px',
                textDecoration: 'underline',
              }}
            >
              {t.searchNoResultsCta}
            </a>
          </div>
        )}

        {/* Category subsections */}
        {allGenerators.map((cat) => (
          <CategorySubsection key={cat.categoryId} cat={cat} query={query} />
        ))}
      </div>
    </section>
  )
}
