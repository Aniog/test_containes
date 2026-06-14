import React, { useState, useCallback } from 'react';
import { allGenerators } from '../../data/generators';

// Shared category thumbnail SVGs (one per category)
const CategoryThumbs = {
  websites: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <rect x="2" y="4" width="28" height="24" rx="2" stroke="#8159BB" strokeWidth="1.2" fill="none"/>
      <rect x="2" y="4" width="28" height="8" rx="2" fill="#8159BB" fillOpacity="0.1"/>
      <rect x="6" y="16" width="20" height="2" rx="1" fill="#C6C9CD"/>
      <rect x="6" y="21" width="14" height="2" rx="1" fill="#E2E4E7"/>
    </svg>
  ),
  'landing-pages': (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <rect x="4" y="2" width="24" height="28" rx="2" stroke="#8159BB" strokeWidth="1.2" fill="none"/>
      <rect x="4" y="2" width="24" height="10" rx="2" fill="#8159BB" fillOpacity="0.1"/>
      <rect x="8" y="16" width="16" height="2" rx="1" fill="#C6C9CD"/>
      <rect x="10" y="21" width="12" height="6" rx="2" fill="#8159BB" fillOpacity="0.3"/>
    </svg>
  ),
  portfolios: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <rect x="2" y="6" width="12" height="10" rx="1.5" stroke="#8159BB" strokeWidth="1.2" fill="#8159BB" fillOpacity="0.08"/>
      <rect x="18" y="6" width="12" height="10" rx="1.5" stroke="#7671FF" strokeWidth="1.2" fill="#7671FF" fillOpacity="0.08"/>
      <rect x="2" y="20" width="12" height="8" rx="1.5" stroke="#CB0C9F" strokeWidth="1.2" fill="#CB0C9F" fillOpacity="0.08"/>
      <rect x="18" y="20" width="12" height="8" rx="1.5" stroke="#8159BB" strokeWidth="1.2" fill="#8159BB" fillOpacity="0.08"/>
    </svg>
  ),
  blogs: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <rect x="4" y="4" width="24" height="24" rx="2" stroke="#8159BB" strokeWidth="1.2" fill="none"/>
      <rect x="8" y="10" width="16" height="3" rx="1.5" fill="#8159BB" fillOpacity="0.4"/>
      <rect x="8" y="16" width="16" height="2" rx="1" fill="#C6C9CD"/>
      <rect x="8" y="21" width="12" height="2" rx="1" fill="#E2E4E7"/>
    </svg>
  ),
  stores: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path d="M5 10h22l-2 12H7L5 10z" stroke="#8159BB" strokeWidth="1.2" fill="#8159BB" fillOpacity="0.08"/>
      <path d="M5 10L3 4H1" stroke="#8159BB" strokeWidth="1.2" strokeLinecap="round"/>
      <circle cx="10" cy="26" r="2" stroke="#8159BB" strokeWidth="1.2" fill="none"/>
      <circle cx="22" cy="26" r="2" stroke="#8159BB" strokeWidth="1.2" fill="none"/>
    </svg>
  ),
  'link-in-bio': (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <rect x="10" y="2" width="12" height="28" rx="3" stroke="#8159BB" strokeWidth="1.2" fill="none"/>
      <rect x="12" y="10" width="8" height="4" rx="2" fill="#8159BB" fillOpacity="0.3"/>
      <rect x="12" y="17" width="8" height="4" rx="2" stroke="#8159BB" strokeWidth="1" fill="none"/>
      <rect x="12" y="24" width="8" height="4" rx="2" stroke="#8159BB" strokeWidth="1" fill="none"/>
    </svg>
  ),
};

// Search icon
const SearchIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <circle cx="7" cy="7" r="4.5" stroke="#636972" strokeWidth="1.5"/>
    <path d="M10.5 10.5L14 14" stroke="#636972" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

// Collapse/expand toggle per subsection
const SubsectionToggle = ({ categoryId, generators }) => {
  const INITIAL_SHOW = 6;
  const [expanded, setExpanded] = useState(false);
  const total = generators.length;
  const showToggle = total > INITIAL_SHOW;
  const visible = expanded ? generators : generators.slice(0, INITIAL_SHOW);

  return (
    <>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '20px',
        }}
        className="dir-grid"
      >
        {visible.map((gen) => (
          <article key={gen.slug}>
            <a
              href={`/generators/${gen.slug}`}
              className="card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
                textDecoration: 'none',
                color: 'inherit',
                height: '100%',
              }}
              aria-label={gen.name}
            >
              <div>{CategoryThumbs[categoryId]}</div>
              <h4
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 700,
                  fontSize: '13px',
                  textTransform: 'uppercase',
                  color: 'var(--color-heading)',
                  margin: 0,
                  lineHeight: 1.3,
                  letterSpacing: '0.03em',
                }}
              >
                {gen.name}
              </h4>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '13px',
                  color: 'var(--color-body)',
                  margin: 0,
                  lineHeight: 1.5,
                }}
              >
                {gen.desc}
              </p>
            </a>
          </article>
        ))}
      </div>

      {showToggle && (
        <div style={{ marginTop: '20px', textAlign: 'center' }}>
          <button
            type="button"
            className="btn btn-ghost"
            aria-expanded={expanded}
            aria-controls={`subsection-${categoryId}-extra`}
            onClick={() => setExpanded((v) => !v)}
          >
            {expanded
              ? 'Show less'
              : `Show all ${total} generators`}
          </button>
        </div>
      )}
    </>
  );
};

// A single category subsection
const CategorySubsection = ({ section, visible, matchingIds }) => {
  if (!visible) return null;

  const filteredGenerators = matchingIds
    ? section.generators.filter((g) => matchingIds.has(g.slug))
    : section.generators;

  return (
    <section
      id={section.categoryId}
      style={{
        paddingTop: '40px',
        borderTop: '1px solid var(--color-divider)',
        marginTop: '40px',
      }}
    >
      <h3
        style={{
          fontFamily: 'var(--font-heading)',
          fontWeight: 700,
          fontSize: '20px',
          textTransform: 'uppercase',
          color: 'var(--color-heading)',
          margin: '0 0 6px',
          letterSpacing: '0.04em',
        }}
      >
        {section.categoryLabel}
      </h3>
      <p
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: '14px',
          color: 'var(--color-body)',
          margin: '0 0 24px',
        }}
      >
        {section.desc}
      </p>

      {matchingIds ? (
        // During search: show all matching cards, no toggle
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '20px',
          }}
          className="dir-grid"
        >
          {filteredGenerators.map((gen) => (
            <article key={gen.slug}>
              <a
                href={`/generators/${gen.slug}`}
                className="card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px',
                  textDecoration: 'none',
                  color: 'inherit',
                  height: '100%',
                }}
                aria-label={gen.name}
              >
                <div>{CategoryThumbs[section.categoryId]}</div>
                <h4
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 700,
                    fontSize: '13px',
                    textTransform: 'uppercase',
                    color: 'var(--color-heading)',
                    margin: 0,
                    lineHeight: 1.3,
                    letterSpacing: '0.03em',
                  }}
                >
                  {gen.name}
                </h4>
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '13px',
                    color: 'var(--color-body)',
                    margin: 0,
                    lineHeight: 1.5,
                  }}
                >
                  {gen.desc}
                </p>
              </a>
            </article>
          ))}
        </div>
      ) : (
        <SubsectionToggle
          categoryId={section.categoryId}
          generators={section.generators}
        />
      )}
    </section>
  );
};

const AllGenerators = () => {
  const [query, setQuery] = useState('');

  const normalize = (s) => s.toLowerCase();

  // Compute search results
  const searchResults = useCallback(() => {
    if (!query.trim()) return null;
    const q = normalize(query.trim());
    const matchMap = {}; // categoryId -> Set of matching slugs

    allGenerators.forEach((section) => {
      const matchingSlugs = new Set();
      section.generators.forEach((gen) => {
        const haystack = normalize(
          `${gen.name} ${gen.desc} ${section.categoryLabel}`
        );
        if (haystack.includes(q)) {
          matchingSlugs.add(gen.slug);
        }
      });
      if (matchingSlugs.size > 0) {
        matchMap[section.categoryId] = matchingSlugs;
      }
    });
    return matchMap;
  }, [query]);

  const results = searchResults();
  const totalMatches = results
    ? Object.values(results).reduce((sum, set) => sum + set.size, 0)
    : null;
  const hasQuery = query.trim().length > 0;
  const noResults = hasQuery && totalMatches === 0;

  return (
    <section
      id="all-generators"
      style={{
        background: '#ffffff',
        padding: '60px 20px',
        borderTop: '1px solid var(--color-divider)',
      }}
    >
      <div style={{ maxWidth: '1200px', marginInline: 'auto' }}>
        <h2 className="section-heading">All Generators</h2>
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '15px',
            color: 'var(--color-body)',
            margin: '0 0 30px',
          }}
        >
          Sixty-plus generators, organized by what you're building.
        </p>

        {/* Search */}
        <div style={{ marginBottom: '10px' }}>
          <label
            htmlFor="generator-search"
            style={{
              position: 'absolute',
              width: '1px',
              height: '1px',
              overflow: 'hidden',
              clip: 'rect(0,0,0,0)',
              whiteSpace: 'nowrap',
            }}
          >
            Search generators
          </label>
          <div
            style={{
              position: 'relative',
              maxWidth: '480px',
            }}
          >
            <span
              style={{
                position: 'absolute',
                insetInlineStart: '12px',
                top: '50%',
                transform: 'translateY(-50%)',
                pointerEvents: 'none',
              }}
            >
              <SearchIcon />
            </span>
            <input
              id="generator-search"
              type="search"
              aria-label="Search generators"
              placeholder="Search generators…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              style={{
                width: '100%',
                height: '44px',
                paddingInlineStart: '40px',
                paddingInlineEnd: '16px',
                fontFamily: 'var(--font-body)',
                fontSize: '14px',
                color: 'var(--color-hero)',
                border: '1px solid var(--color-card-border)',
                borderRadius: '4px',
                outline: 'none',
                background: '#ffffff',
              }}
              onFocus={(e) => (e.target.style.borderColor = 'var(--color-purple)')}
              onBlur={(e) => (e.target.style.borderColor = 'var(--color-card-border)')}
            />
          </div>
        </div>

        {/* Result count */}
        {hasQuery && !noResults && (
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '13px',
              color: 'var(--color-body)',
              margin: '0 0 20px',
            }}
            aria-live="polite"
          >
            {totalMatches} generator{totalMatches !== 1 ? 's' : ''} match
          </p>
        )}

        {/* No results state */}
        {noResults && (
          <div
            style={{
              padding: '40px 20px',
              textAlign: 'center',
              border: '1px solid var(--color-divider)',
              borderRadius: '3px',
              marginTop: '20px',
            }}
            aria-live="polite"
          >
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '15px',
                color: 'var(--color-body)',
                margin: '0 0 16px',
              }}
            >
              No generators match your search.
            </p>
            <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button
                type="button"
                className="btn btn-ghost"
                onClick={() => setQuery('')}
              >
                Clear search
              </button>
              <a
                href="/s/ai_site_builder"
                className="btn btn-gradient"
              >
                Can't find it? Start with our AI builder.
              </a>
            </div>
          </div>
        )}

        {/* Subsections */}
        {allGenerators.map((section) => {
          const sectionVisible = !hasQuery || (results && results[section.categoryId]);
          return (
            <CategorySubsection
              key={section.categoryId}
              section={section}
              visible={sectionVisible}
              matchingIds={results ? results[section.categoryId] : null}
            />
          );
        })}
      </div>

      <style>{`
        .dir-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        @media (max-width: 900px) {
          .dir-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 560px) {
          .dir-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default AllGenerators;
