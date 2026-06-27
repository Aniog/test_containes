import React, { useState, useRef, useEffect, useCallback } from 'react'
import { categories, generators, generatorsByCategory } from '@/strings/generators'

const VISIBLE_COUNT = 6

export default function AllGenerators() {
  const [search, setSearch] = useState('')
  const searchInputRef = useRef(null)

  const query = search.trim().toLowerCase()

  const matchCount = query
    ? generators.filter(
        (g) =>
          g.name.toLowerCase().includes(query) ||
          g.description.toLowerCase().includes(query) ||
          g.category.toLowerCase().includes(query),
      ).length
    : generators.length

  const isSearching = query.length > 0

  return (
    <section
      id="all-generators"
      style={{ paddingBlock: '40px', background: '#FFFFFF' }}
    >
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 30 }}>
          <h2
            style={{
              fontSize: 'clamp(22px, 3vw, 28px)',
              color: 'var(--color-heading)',
              marginBottom: 10,
            }}
          >
            ALL GENERATORS
          </h2>
          <p style={{ color: 'var(--color-body-text)', fontSize: 15 }}>
            Sixty-plus generators, organized by what you&rsquo;re building.
          </p>
        </div>

        {/* Search input */}
        <div style={{ maxWidth: 480, marginInline: 'auto', marginBottom: 30 }}>
          <div style={{ position: 'relative' }}>
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              style={{
                position: 'absolute',
                left: 14,
                top: '50%',
                transform: 'translateY(-50%)',
                pointerEvents: 'none',
              }}
              aria-hidden="true"
            >
              <circle cx="8" cy="8" r="5.5" stroke="var(--color-body-text)" strokeWidth="1.5" />
              <path d="M12 12l4 4" stroke="var(--color-body-text)" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <input
              ref={searchInputRef}
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search generators\u2026"
              aria-label="Search generators"
              style={{
                width: '100%',
                height: 44,
                padding: '0 16px 0 42px',
                border: '1px solid var(--color-card-border)',
                borderRadius: 4,
                fontSize: 14,
                fontFamily: 'var(--font-body)',
                color: 'var(--color-heading-dark)',
                background: '#FFFFFF',
                outline: 'none',
              }}
            />
            {search && (
              <button
                type="button"
                onClick={() => setSearch('')}
                aria-label="Clear search"
                style={{
                  position: 'absolute',
                  right: 10,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: 4,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M3 3l8 8M11 3l-8 8" stroke="var(--color-body-text)" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </button>
            )}
          </div>
          <p
            aria-live="polite"
            style={{
              fontSize: 13,
              color: 'var(--color-body-text)',
              marginTop: 8,
              textAlign: 'center',
            }}
          >
            {matchCount} generators match
          </p>
        </div>

        {/* Empty state */}
        {isSearching && matchCount === 0 && (
          <div style={{ textAlign: 'center', padding: '40px 20px' }}>
            <p style={{ fontSize: 15, color: 'var(--color-body-text)', marginBottom: 16 }}>
              No generators found.
            </p>
            <button
              type="button"
              onClick={() => setSearch('')}
              className="btn-standard"
              style={{ marginBottom: 16 }}
            >
              Clear search
            </button>
            <p style={{ fontSize: 13, color: 'var(--color-body-text)' }}>
              Can&rsquo;t find it?{' '}
              <a
                href="/s/ai_site_builder"
                style={{ color: 'var(--color-brand-purple)', fontWeight: 600 }}
              >
                Start with our AI builder.
              </a>
            </p>
          </div>
        )}

        {/* Category subsections */}
        {categories.map((cat) => {
          const allItems = generatorsByCategory[cat.id] || []
          const filteredItems = isSearching
            ? allItems.filter(
                (g) =>
                  g.name.toLowerCase().includes(query) ||
                  g.description.toLowerCase().includes(query) ||
                  g.category.toLowerCase().includes(query),
              )
            : allItems

          if (isSearching && filteredItems.length === 0) return null

          return (
            <CategorySection
              key={cat.id}
              category={cat}
              items={filteredItems}
              allItems={allItems}
              isSearching={isSearching}
            />
          )
        })}
      </div>
    </section>
  )
}

function CategorySection({ category, items, allItems, isSearching }) {
  const [expanded, setExpanded] = useState(false)
  const [mounted, setMounted] = useState(false)
  const wrapperRef = useRef(null)
  const collapseRef = useRef(null)

  // Only collapse after JS mounts (progressive enhancement)
  useEffect(() => {
    setMounted(true)
  }, [])

  const needsToggle = allItems.length > VISIBLE_COUNT && !isSearching
  const showAll = !needsToggle || expanded || isSearching || !mounted

  // Calculate the height for the collapsed state
  const [collapsedHeight, setCollapsedHeight] = useState(0)
  const measureRef = useRef(null)

  useEffect(() => {
    if (measureRef.current && needsToggle && mounted) {
      // Measure the first VISIBLE_COUNT items
      const cards = measureRef.current.querySelectorAll('.dir-card')
      if (cards.length >= VISIBLE_COUNT) {
        const lastVisible = cards[VISIBLE_COUNT - 1]
        const rect = lastVisible.getBoundingClientRect()
        const wrapperRect = measureRef.current.getBoundingClientRect()
        setCollapsedHeight(rect.bottom - wrapperRect.top + 10)
      }
    }
  }, [needsToggle, mounted, items])

  const handleToggle = useCallback(() => {
    setExpanded((prev) => !prev)
  }, [])

  return (
    <section
      id={category.id}
      style={{ marginBottom: 40, scrollMarginTop: 70 }}
    >
      <div style={{ marginBottom: 16 }}>
        <h3
          style={{
            fontSize: 'clamp(18px, 2.5vw, 22px)',
            color: 'var(--color-heading)',
            marginBottom: 6,
          }}
        >
          {category.name}
        </h3>
        <p style={{ color: 'var(--color-body-text)', fontSize: 14 }}>
          {category.description}
        </p>
      </div>

      {/* The grid wrapper that gets collapsed */}
      <div
        ref={wrapperRef}
        id={`dir-grid-${category.id}`}
        style={{
          overflow: mounted && needsToggle && !expanded && !isSearching ? 'hidden' : 'visible',
          maxHeight:
            mounted && needsToggle && !expanded && !isSearching && collapsedHeight > 0
              ? `${collapsedHeight}px`
              : 'none',
          transition: 'max-height 0.4s ease',
        }}
      >
        <div
          ref={measureRef}
          className="dir-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(1, 1fr)',
            gap: 16,
          }}
        >
          <style>{`
            @media (min-width: 640px) {
              .dir-grid { grid-template-columns: repeat(2, 1fr) !important; }
            }
            @media (min-width: 1024px) {
              .dir-grid { grid-template-columns: repeat(3, 1fr) !important; }
            }
          `}</style>
          {/* Render ALL items (for SEO / no-JS). JS collapses the extra ones visually */}
          {(showAll ? items : items).map((gen) => (
            <a
              key={gen.slug}
              href={`/generators/${gen.slug}`}
              className="card dir-card"
              aria-label={gen.name}
            >
              <CategoryThumb category={gen.category} />
              <h4
                style={{
                  fontSize: 14,
                  fontWeight: 700,
                  color: 'var(--color-heading-dark)',
                  fontFamily: 'var(--font-heading)',
                  textTransform: 'none',
                  lineHeight: 1.3,
                  marginBottom: 6,
                  marginTop: 10,
                }}
              >
                {gen.name}
              </h4>
              <p style={{ fontSize: 13, color: 'var(--color-body-text)', lineHeight: 1.5 }}>
                {gen.description}
              </p>
            </a>
          ))}
        </div>
      </div>

      {/* Show all toggle */}
      {needsToggle && mounted && !isSearching && (
        <div style={{ textAlign: 'center', marginTop: 16 }}>
          <button
            type="button"
            onClick={handleToggle}
            aria-expanded={expanded}
            aria-controls={`dir-grid-${category.id}`}
            className="btn-standard"
            style={{ height: 36, fontSize: 13 }}
          >
            {expanded
              ? 'Show less'
              : `Show all ${items.length} generators`}
          </button>
        </div>
      )}
    </section>
  )
}

const thumbColors = {
  websites: { bg: '#EDE9FE', icon: '#8159BB' },
  'landing-pages': { bg: '#E0E7FF', icon: '#7671FF' },
  portfolios: { bg: '#FCE7F3', icon: '#CB0C9F' },
  blogs: { bg: '#D1FAE5', icon: '#059669' },
  stores: { bg: '#FEF3C7', icon: '#D97706' },
  'link-in-bio': { bg: '#DBEAFE', icon: '#2563EB' },
}

function CategoryThumb({ category }) {
  const c = thumbColors[category] || thumbColors.websites
  return (
    <div
      aria-hidden="true"
      style={{
        width: 36,
        height: 36,
        borderRadius: 6,
        background: c.bg,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <rect x="2" y="2" width="14" height="14" rx="2" stroke={c.icon} strokeWidth="1.2" fill="none" />
        <path d="M2 5.5h14" stroke={c.icon} strokeWidth="1.2" />
      </svg>
    </div>
  )
}
