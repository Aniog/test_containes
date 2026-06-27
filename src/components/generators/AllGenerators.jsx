import { useState, useRef, useEffect, useCallback } from 'react';
import { strings, categories, allGenerators } from '../../data/generators';

const s = strings.en;

// Shared category thumbnail SVGs (one per subsection)
const categoryThumbs = {
  websites: (
    <svg width="40" height="30" viewBox="0 0 40 30" fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
      <rect x="1" y="1" width="38" height="28" rx="3" fill="#F4F6F8" stroke="#E2E4E7" strokeWidth="1" />
      <rect x="1" y="1" width="38" height="8" rx="3" fill="#8159BB" opacity="0.15" />
      <rect x="4" y="12" width="20" height="3" rx="1.5" fill="#8159BB" opacity="0.35" />
      <rect x="4" y="17" width="14" height="2.5" rx="1.25" fill="#636972" opacity="0.2" />
      <rect x="4" y="22" width="16" height="2.5" rx="1.25" fill="#636972" opacity="0.15" />
    </svg>
  ),
  'landing-pages': (
    <svg width="40" height="30" viewBox="0 0 40 30" fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
      <rect x="1" y="1" width="38" height="28" rx="3" fill="#F4F6F8" stroke="#E2E4E7" strokeWidth="1" />
      <rect x="8" y="5" width="24" height="5" rx="2.5" fill="#7671FF" opacity="0.3" />
      <rect x="10" y="13" width="20" height="2.5" rx="1.25" fill="#636972" opacity="0.2" />
      <rect x="12" y="18" width="16" height="5" rx="2.5" fill="url(#lp-thumb-grad)" />
      <defs>
        <linearGradient id="lp-thumb-grad" x1="12" y1="0" x2="28" y2="0" gradientUnits="userSpaceOnUse">
          <stop stopColor="#7671FF" /><stop offset="1" stopColor="#CB0C9F" />
        </linearGradient>
      </defs>
    </svg>
  ),
  portfolios: (
    <svg width="40" height="30" viewBox="0 0 40 30" fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
      <rect x="1" y="1" width="17" height="13" rx="2" fill="#F4F6F8" stroke="#8159BB" strokeWidth="1" opacity="0.7" />
      <rect x="22" y="1" width="17" height="13" rx="2" fill="#F4F6F8" stroke="#7671FF" strokeWidth="1" opacity="0.7" />
      <rect x="1" y="17" width="17" height="12" rx="2" fill="#F4F6F8" stroke="#CB0C9F" strokeWidth="1" opacity="0.5" />
      <rect x="22" y="17" width="17" height="12" rx="2" fill="#F4F6F8" stroke="#8159BB" strokeWidth="1" opacity="0.5" />
    </svg>
  ),
  blogs: (
    <svg width="40" height="30" viewBox="0 0 40 30" fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
      <rect x="1" y="1" width="38" height="28" rx="3" fill="#F4F6F8" stroke="#E2E4E7" strokeWidth="1" />
      <rect x="4" y="5" width="32" height="4" rx="2" fill="#8159BB" opacity="0.3" />
      <rect x="4" y="12" width="32" height="2" rx="1" fill="#636972" opacity="0.2" />
      <rect x="4" y="16" width="24" height="2" rx="1" fill="#636972" opacity="0.15" />
      <rect x="4" y="20" width="28" height="2" rx="1" fill="#636972" opacity="0.15" />
      <rect x="4" y="24" width="20" height="2" rx="1" fill="#636972" opacity="0.1" />
    </svg>
  ),
  stores: (
    <svg width="40" height="30" viewBox="0 0 40 30" fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
      <rect x="1" y="1" width="38" height="28" rx="3" fill="#F4F6F8" stroke="#E2E4E7" strokeWidth="1" />
      <rect x="4" y="4" width="15" height="12" rx="2" fill="#8159BB" opacity="0.12" stroke="#8159BB" strokeWidth="1" />
      <rect x="22" y="4" width="15" height="12" rx="2" fill="#7671FF" opacity="0.1" stroke="#7671FF" strokeWidth="1" />
      <rect x="4" y="19" width="32" height="3" rx="1.5" fill="#8159BB" opacity="0.25" />
      <rect x="4" y="24" width="20" height="2.5" rx="1.25" fill="#636972" opacity="0.15" />
    </svg>
  ),
  'link-in-bio': (
    <svg width="40" height="30" viewBox="0 0 40 30" fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
      <rect x="12" y="1" width="16" height="28" rx="3" fill="#F4F6F8" stroke="#E2E4E7" strokeWidth="1" />
      <circle cx="20" cy="8" r="3.5" stroke="#8159BB" strokeWidth="1" fill="none" />
      <rect x="15" y="14" width="10" height="3" rx="1.5" fill="#8159BB" opacity="0.3" />
      <rect x="15" y="19" width="10" height="3" rx="1.5" fill="#7671FF" opacity="0.25" />
      <rect x="15" y="24" width="10" height="3" rx="1.5" fill="#CB0C9F" opacity="0.2" />
    </svg>
  ),
};

const INITIAL_VISIBLE = 6;

function GeneratorCard({ gen, categoryId }) {
  return (
    <article>
      <a
        href={`/generators/${gen.slug}`}
        aria-label={gen.name}
        style={{ display: 'block', textDecoration: 'none', height: '100%' }}
      >
        <div
          className="strk-card"
          style={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            gap: 10,
          }}
        >
          <div style={{ flexShrink: 0 }}>
            {categoryThumbs[categoryId]}
          </div>
          <p
            className="font-heading"
            style={{
              fontSize: 14,
              fontWeight: 700,
              color: '#2E2E2F',
              margin: 0,
              lineHeight: 1.3,
            }}
          >
            {gen.name}
          </p>
          <p
            style={{
              fontSize: 13,
              color: '#636972',
              margin: 0,
              lineHeight: 1.5,
              fontFamily: 'var(--font-body)',
              flexGrow: 1,
            }}
          >
            {gen.description}
          </p>
        </div>
      </a>
    </article>
  );
}

function CategorySubsection({ category, generators, searchQuery }) {
  const [expanded, setExpanded] = useState(false);
  const overflowRef = useRef(null);

  const filtered = searchQuery
    ? generators.filter((g) => {
        const q = searchQuery.toLowerCase();
        return (
          g.name.toLowerCase().includes(q) ||
          g.description.toLowerCase().includes(q) ||
          category.name.toLowerCase().includes(q)
        );
      })
    : generators;

  const hasMatches = filtered.length > 0;
  const showToggle = !searchQuery && generators.length > INITIAL_VISIBLE;
  const visibleCards = searchQuery ? filtered : (expanded ? generators : generators.slice(0, INITIAL_VISIBLE));
  const hiddenCount = generators.length - INITIAL_VISIBLE;

  // Animate overflow panel
  useEffect(() => {
    if (!overflowRef.current) return;
    if (expanded) {
      overflowRef.current.style.maxHeight = overflowRef.current.scrollHeight + 'px';
    } else {
      overflowRef.current.style.maxHeight = '0px';
    }
  }, [expanded]);

  if (searchQuery && !hasMatches) return null;

  const initialCards = searchQuery ? filtered : generators.slice(0, INITIAL_VISIBLE);
  const extraCards = searchQuery ? [] : generators.slice(INITIAL_VISIBLE);

  return (
    <section
      id={category.slug}
      style={{ scrollMarginTop: 80 }}
      aria-labelledby={`cat-heading-${category.slug}`}
    >
      <div style={{ marginBottom: 20 }}>
        <h3
          id={`cat-heading-${category.slug}`}
          className="font-heading"
          style={{
            fontSize: 'clamp(18px, 2vw, 22px)',
            fontWeight: 700,
            color: '#4B5056',
            margin: '0 0 4px',
            letterSpacing: '0.02em',
          }}
        >
          {category.name}
        </h3>
        <p
          style={{
            fontSize: 13,
            color: '#636972',
            margin: 0,
            fontFamily: 'var(--font-body)',
          }}
        >
          {category.description}
        </p>
      </div>

      {/* Always-visible cards (first INITIAL_VISIBLE or all when searching) */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 14,
          marginBottom: showToggle ? 0 : 0,
        }}
        className="gen-grid"
        id={`gen-grid-${category.slug}`}
      >
        {initialCards.map((gen) => (
          <GeneratorCard key={gen.slug} gen={gen} categoryId={category.id} />
        ))}
      </div>

      {/* Overflow panel — hidden by default, animated open */}
      {showToggle && extraCards.length > 0 && (
        <div
          ref={overflowRef}
          className="generators-overflow"
          id={`overflow-${category.slug}`}
          style={{ maxHeight: 0 }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 14,
              paddingTop: 14,
            }}
            className="gen-grid"
          >
            {extraCards.map((gen) => (
              <GeneratorCard key={gen.slug} gen={gen} categoryId={category.id} />
            ))}
          </div>
        </div>
      )}

      {/* Show all / Show less toggle */}
      {showToggle && (
        <div style={{ marginTop: 16, textAlign: 'center' }}>
          <button
            type="button"
            aria-expanded={expanded}
            aria-controls={`overflow-${category.slug}`}
            onClick={() => setExpanded((v) => !v)}
            className="font-heading"
            style={{
              background: 'transparent',
              border: '1px solid #8159BB',
              color: '#8159BB',
              borderRadius: 4,
              padding: '7px 16px',
              fontSize: 12,
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.04em',
              cursor: 'pointer',
            }}
          >
            {expanded ? s.showLessBtn : s.showAllBtn(generators.length)}
          </button>
        </div>
      )}
    </section>
  );
}

export default function AllGenerators() {
  const [query, setQuery] = useState('');
  const inputRef = useRef(null);

  const totalCount = Object.values(allGenerators).reduce((sum, arr) => sum + arr.length, 0);

  const matchCount = query
    ? categories.reduce((sum, cat) => {
        const gens = allGenerators[cat.id] || [];
        return sum + gens.filter((g) => {
          const q = query.toLowerCase();
          return (
            g.name.toLowerCase().includes(q) ||
            g.description.toLowerCase().includes(q) ||
            cat.name.toLowerCase().includes(q)
          );
        }).length;
      }, 0)
    : totalCount;

  const hasAnyMatch = matchCount > 0;

  const clearSearch = useCallback(() => {
    setQuery('');
    if (inputRef.current) inputRef.current.focus();
  }, []);

  return (
    <section
      id="all-generators"
      style={{
        background: '#F4F6F8',
        padding: '60px 20px',
        borderTop: '1px solid #E2E4E7',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <h2
          className="font-heading"
          style={{
            fontSize: 'clamp(22px, 2.5vw, 30px)',
            fontWeight: 700,
            color: '#4B5056',
            margin: '0 0 8px',
            letterSpacing: '0.02em',
          }}
        >
          {s.allGeneratorsHeading}
        </h2>
        <p
          style={{
            fontSize: 14,
            color: '#636972',
            margin: '0 0 30px',
            fontFamily: 'var(--font-body)',
          }}
        >
          {s.allGeneratorsSubheading}
        </p>

        {/* Search */}
        <div style={{ marginBottom: 10 }}>
          <label
            htmlFor="generator-search"
            style={{
              position: 'absolute',
              width: 1,
              height: 1,
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
              maxWidth: 480,
            }}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden="true"
              style={{
                position: 'absolute',
                left: 12,
                top: '50%',
                transform: 'translateY(-50%)',
                pointerEvents: 'none',
              }}
            >
              <circle cx="6.5" cy="6.5" r="5" stroke="#8159BB" strokeWidth="1.5" />
              <path d="M10.5 10.5L14 14" stroke="#8159BB" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <input
              ref={inputRef}
              id="generator-search"
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={s.searchPlaceholder}
              aria-label="Search generators"
              style={{
                width: '100%',
                height: 40,
                paddingLeft: 36,
                paddingRight: 12,
                border: '1px solid #C6C9CD',
                borderRadius: 4,
                fontSize: 14,
                color: '#2E2E2F',
                background: '#ffffff',
                fontFamily: 'var(--font-body)',
                outline: 'none',
              }}
              onFocus={(e) => { e.target.style.borderColor = '#8159BB'; }}
              onBlur={(e) => { e.target.style.borderColor = '#C6C9CD'; }}
            />
          </div>
        </div>

        {/* Result count */}
        {query && (
          <p
            style={{
              fontSize: 13,
              color: '#636972',
              margin: '0 0 20px',
              fontFamily: 'var(--font-body)',
            }}
            aria-live="polite"
            aria-atomic="true"
          >
            {s.searchResultCount(matchCount)}
          </p>
        )}

        {/* No results state */}
        {query && !hasAnyMatch && (
          <div
            style={{
              background: '#ffffff',
              border: '1px solid #E2E4E7',
              borderRadius: 4,
              padding: '30px 20px',
              textAlign: 'center',
              marginBottom: 30,
            }}
          >
            <p
              style={{
                fontSize: 14,
                color: '#4B5056',
                margin: '0 0 12px',
                fontFamily: 'var(--font-body)',
              }}
            >
              {s.searchNoResults}
            </p>
            <button
              type="button"
              onClick={clearSearch}
              className="font-heading"
              style={{
                background: 'transparent',
                border: '1px solid #8159BB',
                color: '#8159BB',
                borderRadius: 4,
                padding: '7px 16px',
                fontSize: 12,
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.04em',
                cursor: 'pointer',
                marginBottom: 12,
              }}
            >
              {s.searchClearBtn}
            </button>
            <p style={{ margin: 0 }}>
              <a
                href="/s/ai_site_builder"
                style={{
                  fontSize: 13,
                  color: '#8159BB',
                  fontFamily: 'var(--font-body)',
                  textDecoration: 'underline',
                }}
              >
                {s.searchNoResultsCTA}
              </a>
            </p>
          </div>
        )}

        {/* Category subsections */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 50 }}>
          {categories.map((cat) => (
            <CategorySubsection
              key={cat.id}
              category={cat}
              generators={allGenerators[cat.id] || []}
              searchQuery={query}
            />
          ))}
        </div>
      </div>

      <style>{`
        .gen-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 14px;
        }
        @media (max-width: 900px) {
          .gen-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 560px) {
          .gen-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
