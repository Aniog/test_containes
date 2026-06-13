import { useState, useId } from 'react';
import { strings, ALL_GENERATORS } from '@/data/generators';

const s = strings.en.allGenerators;
const INITIAL_VISIBLE = 6;

// Shared thumbnail per subsection
function SubsectionThumb({ categoryId }) {
  const colors = {
    websites:       ['#8159BB', '#7671FF'],
    'landing-pages':['#7671FF', '#CB0C9F'],
    portfolios:     ['#CB0C9F', '#8159BB'],
    blogs:          ['#8159BB', '#7671FF'],
    stores:         ['#7671FF', '#CB0C9F'],
    'link-in-bio':  ['#CB0C9F', '#8159BB'],
  };
  const [c1, c2] = colors[categoryId] || ['#8159BB', '#7671FF'];
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <rect width="40" height="40" rx="6" fill={c1} fillOpacity="0.1" />
      <circle cx="20" cy="20" r="10" stroke={c1} strokeWidth="1.5" fill="none" />
      <circle cx="20" cy="20" r="5" fill={c2} fillOpacity="0.4" />
    </svg>
  );
}


function CategorySection({ section, searchQuery }) {
  const [expanded, setExpanded] = useState(false);
  const toggleId = useId();

  const query = searchQuery.trim().toLowerCase();
  const filtered = query
    ? section.generators.filter(
        (g) =>
          g.name.toLowerCase().includes(query) ||
          g.description.toLowerCase().includes(query) ||
          section.heading.toLowerCase().includes(query)
      )
    : section.generators;

  if (query && filtered.length === 0) return null;

  const showToggle = !query && section.generators.length > INITIAL_VISIBLE;

  return (
    <section
      id={section.id}
      style={{ scrollMarginTop: 80, marginBottom: 50 }}
    >
      <h3
        className="font-heading"
        style={{
          fontSize: 'clamp(16px, 2vw, 20px)',
          color: 'var(--heading)',
          margin: '0 0 6px',
        }}
      >
        {section.heading}
      </h3>
      <p style={{ color: 'var(--body-text)', fontSize: 13, margin: '0 0 20px' }}>
        {section.description}
      </p>

      {/* All cards always in DOM; extras hidden via CSS when collapsed */}
      <div className="grid-3" id={toggleId}>
        {section.generators.map((gen, idx) => {
          const isExtra = !query && idx >= INITIAL_VISIBLE;
          const isFiltered = query && !filtered.includes(gen);
          const hidden = isFiltered || (isExtra && !expanded);
          return (
            <article
              key={gen.slug}
              aria-hidden={hidden ? 'true' : undefined}
              style={hidden ? { display: 'none' } : undefined}
            >
              <a
                href={`/generators/${gen.slug}`}
                className="gen-card"
                style={{ display: 'flex', flexDirection: 'column', gap: 10, height: '100%', boxSizing: 'border-box' }}
                aria-label={gen.name}
                tabIndex={hidden ? -1 : undefined}
              >
                <SubsectionThumb categoryId={section.id} />
                <strong
                  className="font-heading"
                  style={{ fontSize: 13, color: 'var(--hero-heading)', lineHeight: 1.3 }}
                >
                  {gen.name}
                </strong>
                <span style={{ fontSize: 13, color: 'var(--body-text)', lineHeight: 1.5 }}>
                  {gen.description}
                </span>
              </a>
            </article>
          );
        })}
      </div>

      {showToggle && (
        <div style={{ marginTop: 20, textAlign: 'center' }}>
          <button
            className="btn btn-ghost btn-sm"
            aria-expanded={expanded}
            aria-controls={toggleId}
            onClick={() => setExpanded((v) => !v)}
          >
            {expanded
              ? s.showLess
              : s.showAll(section.generators.length)}
          </button>
        </div>
      )}
    </section>
  );
}

export default function AllGenerators() {
  const [query, setQuery] = useState('');

  const trimmed = query.trim().toLowerCase();
  const totalMatches = trimmed
    ? ALL_GENERATORS.reduce((acc, sec) => {
        return acc + sec.generators.filter(
          (g) =>
            g.name.toLowerCase().includes(trimmed) ||
            g.description.toLowerCase().includes(trimmed) ||
            sec.heading.toLowerCase().includes(trimmed)
        ).length;
      }, 0)
    : null;

  const hasResults = totalMatches === null || totalMatches > 0;

  return (
    <section
      id="all-generators"
      style={{ padding: '60px 20px', background: 'var(--light-bg)' }}
    >
      <div style={{ maxWidth: 1200, marginInline: 'auto' }}>
        <h2
          className="font-heading"
          style={{ fontSize: 'clamp(22px, 2.5vw, 30px)', color: 'var(--heading)', margin: '0 0 8px' }}
        >
          {s.heading}
        </h2>
        <p style={{ color: 'var(--body-text)', margin: '0 0 30px', fontSize: 15 }}>
          {s.sub}
        </p>

        {/* Search */}
        <div style={{ marginBottom: 10 }}>
          <div className="search-wrap">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
              <circle cx="7.5" cy="7.5" r="5.5" stroke="currentColor" strokeWidth="1.5" />
              <path d="M12 12l3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <input
              type="search"
              className="search-input"
              placeholder={s.searchPlaceholder}
              aria-label={s.searchLabel}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              autoComplete="off"
            />
          </div>
        </div>

        {/* Result count */}
        {trimmed && totalMatches !== null && (
          <p
            style={{ fontSize: 13, color: 'var(--body-text)', margin: '0 0 24px' }}
            aria-live="polite"
            aria-atomic="true"
          >
            {s.resultCount(totalMatches)}
          </p>
        )}

        {/* Empty state */}
        {!hasResults && (
          <div
            style={{
              padding: '40px 20px',
              textAlign: 'center',
              color: 'var(--body-text)',
            }}
          >
            <p style={{ marginBottom: 16 }}>{s.noResults}</p>
            <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
              <button
                className="btn btn-ghost btn-sm"
                onClick={() => setQuery('')}
              >
                {s.clearSearch}
              </button>
              <a
                href="/s/ai_site_builder"
                className="btn btn-primary btn-sm"
              >
                {s.noResultsCTA}
              </a>
            </div>
          </div>
        )}

        {/* Category subsections */}
        {hasResults && (
          <div style={{ marginTop: 20 }}>
            {ALL_GENERATORS.map((section) => (
              <CategorySection
                key={section.id}
                section={section}
                searchQuery={query}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
