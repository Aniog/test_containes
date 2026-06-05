import { useState, useMemo, useRef, useEffect } from 'react';
import { allGenerators, strings, toSlug } from '../../data/generatorsData';

const s = strings.en.allGenerators;

// Shared thumbnail per category subsection
const SubsectionThumb = ({ categoryId }) => {
  const thumbs = {
    websites: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="4" width="32" height="28" rx="4" fill="#EDE8F5" stroke="#8159BB" strokeWidth="1.2" />
        <rect x="2" y="4" width="32" height="9" rx="4" fill="#8159BB" opacity="0.15" />
        <rect x="7" y="18" width="22" height="3" rx="1.5" fill="#C6C9CD" />
        <rect x="7" y="24" width="14" height="2.5" rx="1.25" fill="#E2E4E7" />
      </svg>
    ),
    'landing-pages': (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
        <rect x="5" y="3" width="26" height="30" rx="4" fill="#EDE8F5" stroke="#8159BB" strokeWidth="1.2" />
        <rect x="10" y="10" width="16" height="5" rx="2" fill="#8159BB" opacity="0.3" />
        <rect x="10" y="19" width="16" height="6" rx="3" fill="url(#lp2-grad)" opacity="0.7" />
        <defs>
          <linearGradient id="lp2-grad" x1="10" y1="19" x2="26" y2="25" gradientUnits="userSpaceOnUse">
            <stop stopColor="#7671FF" />
            <stop offset="1" stopColor="#CB0C9F" />
          </linearGradient>
        </defs>
      </svg>
    ),
    portfolios: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="6" width="14" height="11" rx="2.5" fill="#EDE8F5" stroke="#8159BB" strokeWidth="1.2" />
        <rect x="20" y="6" width="14" height="11" rx="2.5" fill="#EDE8F5" stroke="#8159BB" strokeWidth="1.2" />
        <rect x="2" y="21" width="14" height="9" rx="2.5" fill="#EDE8F5" stroke="#8159BB" strokeWidth="1.2" />
        <rect x="20" y="21" width="14" height="9" rx="2.5" fill="#EDE8F5" stroke="#8159BB" strokeWidth="1.2" />
      </svg>
    ),
    blogs: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="4" width="28" height="28" rx="4" fill="#EDE8F5" stroke="#8159BB" strokeWidth="1.2" />
        <rect x="9" y="11" width="18" height="3.5" rx="1.75" fill="#8159BB" opacity="0.4" />
        <rect x="9" y="18" width="18" height="2" rx="1" fill="#C6C9CD" />
        <rect x="9" y="23" width="12" height="2" rx="1" fill="#E2E4E7" />
      </svg>
    ),
    stores: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 10h26l-2.5 12H7.5L5 10z" fill="#EDE8F5" stroke="#8159BB" strokeWidth="1.2" strokeLinejoin="round" />
        <path d="M5 10L3.5 5H2" stroke="#8159BB" strokeWidth="1.2" strokeLinecap="round" />
        <circle cx="12" cy="28" r="2.5" fill="#8159BB" opacity="0.5" />
        <circle cx="24" cy="28" r="2.5" fill="#8159BB" opacity="0.5" />
      </svg>
    ),
    'link-in-bio': (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="2" width="16" height="32" rx="5" fill="#EDE8F5" stroke="#8159BB" strokeWidth="1.2" />
        <rect x="13" y="9" width="10" height="4" rx="2" fill="#8159BB" opacity="0.3" />
        <rect x="13" y="16" width="10" height="4" rx="2" fill="#8159BB" opacity="0.2" />
        <rect x="13" y="23" width="10" height="4" rx="2" fill="#8159BB" opacity="0.15" />
      </svg>
    ),
  };
  return thumbs[categoryId] || null;
};

// Search icon
const SearchIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
    <circle cx="7.5" cy="7.5" r="5" stroke="#8159BB" strokeWidth="1.5" />
    <path d="M11.5 11.5l3.5 3.5" stroke="#8159BB" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

// Individual generator card (no category tag — subsection heading provides context)
function GeneratorCard({ gen }) {
  return (
    <article>
      <a
        href={`/generators/${toSlug(gen.name)}`}
        className="gen-card"
        style={{ display: 'flex', flexDirection: 'column', gap: 8, height: '100%' }}
      >
        <span
          className="font-heading"
          style={{ fontSize: 13, color: '#2E2E2F', lineHeight: 1.3 }}
        >
          {gen.name}
        </span>
        <span style={{ fontSize: 13, color: '#636972' }}>{gen.desc}</span>
      </a>
    </article>
  );
}

// Subsection with show-all toggle
function GeneratorSubsection({ section, visibleGenerators, isFiltering }) {
  const INITIAL_SHOW = 6;
  const [expanded, setExpanded] = useState(false);
  const gridId = `grid-${section.id}`;
  const total = visibleGenerators.length;
  const showToggle = !isFiltering && total > INITIAL_SHOW;
  const displayedGenerators = isFiltering
    ? visibleGenerators
    : expanded
    ? visibleGenerators
    : visibleGenerators.slice(0, INITIAL_SHOW);

  return (
    <section
      id={section.id}
      style={{
        paddingTop: 40,
        borderTop: '1px solid #E2E4E7',
        scrollMarginTop: 80,
      }}
    >
      {/* Subsection header */}
      <div
        className="flex items-center gap-3"
        style={{ marginBottom: 8 }}
      >
        <SubsectionThumb categoryId={section.id} />
        <div>
          <h3
            className="font-heading"
            style={{ fontSize: 18, color: '#4B5056', margin: 0 }}
          >
            {section.heading}
          </h3>
          <p style={{ fontSize: 13, color: '#636972', margin: 0, marginTop: 4 }}>
            {section.desc}
          </p>
        </div>
      </div>

      {/* Cards grid */}
      <div
        id={gridId}
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 16,
          marginTop: 20,
        }}
        className="dir-grid"
      >
        {displayedGenerators.map((gen) => (
          <GeneratorCard key={gen.name} gen={gen} />
        ))}
      </div>

      {/* Show all / show less toggle */}
      {showToggle && (
        <div style={{ marginTop: 16, textAlign: 'center' }}>
          <button
            type="button"
            className="btn btn-ghost"
            aria-expanded={expanded}
            aria-controls={gridId}
            onClick={() => setExpanded((v) => !v)}
          >
            {expanded ? s.showLess : s.showAll(total)}
          </button>
        </div>
      )}
    </section>
  );
}

export default function AllGenerators() {
  const [query, setQuery] = useState('');
  const inputRef = useRef(null);

  const normalizedQuery = query.trim().toLowerCase();

  // Filter generators per section
  const filteredSections = useMemo(() => {
    if (!normalizedQuery) return allGenerators.map((sec) => ({ ...sec, visible: sec.generators }));
    return allGenerators
      .map((sec) => {
        const visible = sec.generators.filter(
          (gen) =>
            gen.name.toLowerCase().includes(normalizedQuery) ||
            gen.desc.toLowerCase().includes(normalizedQuery) ||
            sec.heading.toLowerCase().includes(normalizedQuery)
        );
        return { ...sec, visible };
      })
      .filter((sec) => sec.visible.length > 0);
  }, [normalizedQuery]);

  const totalMatches = useMemo(
    () => filteredSections.reduce((sum, sec) => sum + sec.visible.length, 0),
    [filteredSections]
  );

  const isFiltering = normalizedQuery.length > 0;

  const clearSearch = () => {
    setQuery('');
    if (inputRef.current) inputRef.current.focus();
  };

  return (
    <section
      id="all-generators"
      style={{
        paddingTop: 60,
        paddingBottom: 60,
        borderTop: '1px solid #E2E4E7',
        scrollMarginTop: 56,
      }}
    >
      <div className="mx-auto" style={{ maxWidth: 1200, padding: '0 20px' }}>
        {/* Section heading */}
        <h2
          className="font-heading"
          style={{
            fontSize: 'clamp(22px, 2.5vw, 30px)',
            color: '#4B5056',
            margin: 0,
          }}
        >
          {s.heading}
        </h2>
        <p style={{ fontSize: 14, color: '#636972', marginTop: 8, marginBottom: 30 }}>
          {s.sub}
        </p>

        {/* Search input */}
        <div style={{ position: 'relative', maxWidth: 480, marginBottom: 10 }}>
          <label htmlFor="gen-search" className="sr-only">
            {s.searchLabel}
          </label>
          <span
            style={{
              position: 'absolute',
              insetInlineStart: 12,
              top: '50%',
              transform: 'translateY(-50%)',
              pointerEvents: 'none',
            }}
          >
            <SearchIcon />
          </span>
          <input
            id="gen-search"
            ref={inputRef}
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={s.searchPlaceholder}
            aria-label={s.searchLabel}
            style={{
              width: '100%',
              height: 44,
              paddingInlineStart: 42,
              paddingInlineEnd: 16,
              border: '1px solid #C6C9CD',
              borderRadius: 4,
              fontSize: 14,
              color: '#2E2E2F',
              backgroundColor: '#fff',
              outline: 'none',
              boxSizing: 'border-box',
              fontFamily: "'Open Sans', sans-serif",
            }}
            onFocus={(e) => (e.target.style.borderColor = '#8159BB')}
            onBlur={(e) => (e.target.style.borderColor = '#C6C9CD')}
          />
        </div>

        {/* Result count */}
        {isFiltering && (
          <p
            style={{ fontSize: 13, color: '#636972', marginBottom: 20 }}
            aria-live="polite"
            aria-atomic="true"
          >
            {s.resultCount(totalMatches)}
          </p>
        )}

        {/* No results state */}
        {isFiltering && filteredSections.length === 0 && (
          <div
            style={{
              padding: '40px 20px',
              textAlign: 'center',
              border: '1px solid #E2E4E7',
              borderRadius: 6,
              marginTop: 20,
            }}
          >
            <p style={{ fontSize: 14, color: '#636972', marginBottom: 16 }}>
              {s.noResults}
            </p>
            <button
              type="button"
              className="btn btn-ghost"
              onClick={clearSearch}
              style={{ marginBottom: 16 }}
            >
              {s.noResultsClear}
            </button>
            <p style={{ fontSize: 13, color: '#636972', margin: 0 }}>
              <a
                href="/s/ai_site_builder"
                style={{ color: '#8159BB', textDecoration: 'underline' }}
              >
                {s.noResultsCta}
              </a>
            </p>
          </div>
        )}

        {/* Subsections */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
          {filteredSections.map((sec) => (
            <GeneratorSubsection
              key={sec.id}
              section={sec}
              visibleGenerators={sec.visible ?? sec.generators}
              isFiltering={isFiltering}
            />
          ))}
        </div>
      </div>

      <style>{`
        .sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0,0,0,0);
          white-space: nowrap;
          border: 0;
        }
        @media (max-width: 767px) {
          .dir-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (min-width: 768px) and (max-width: 1023px) {
          .dir-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}
