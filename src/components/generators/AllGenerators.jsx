import { useState, useId } from 'react';
import { allGeneratorSections, strings, toSlug } from '../../data/generators';

const s = strings.en.allGenerators;

// Shared thumbnail per subsection (inline SVG, one per category)
const SubsectionThumbs = {
  websites: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <rect x="2" y="5" width="28" height="22" rx="3" stroke="#8159BB" strokeWidth="1.2" fill="none" />
      <rect x="2" y="5" width="28" height="7" rx="3" fill="#8159BB" opacity="0.1" />
      <circle cx="7" cy="8.5" r="1.5" fill="#8159BB" opacity="0.5" />
      <circle cx="12" cy="8.5" r="1.5" fill="#7671FF" opacity="0.5" />
      <rect x="7" y="17" width="18" height="2" rx="1" fill="#C6C9CD" />
      <rect x="7" y="21" width="12" height="2" rx="1" fill="#C6C9CD" opacity="0.6" />
    </svg>
  ),
  'landing-pages': (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <rect x="4" y="4" width="24" height="24" rx="3" stroke="#8159BB" strokeWidth="1.2" fill="none" />
      <rect x="8" y="9" width="16" height="3" rx="1.5" fill="#8159BB" opacity="0.3" />
      <rect x="10" y="15" width="12" height="2" rx="1" fill="#C6C9CD" />
      <rect x="10" y="19" width="12" height="4" rx="2" fill="url(#lp-t-grad)" opacity="0.7" />
      <defs>
        <linearGradient id="lp-t-grad" x1="10" y1="19" x2="22" y2="23" gradientUnits="userSpaceOnUse">
          <stop stopColor="#7671FF" /><stop offset="1" stopColor="#CB0C9F" />
        </linearGradient>
      </defs>
    </svg>
  ),
  portfolios: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <rect x="2" y="8" width="12" height="16" rx="2" stroke="#8159BB" strokeWidth="1.2" fill="none" />
      <rect x="18" y="8" width="12" height="7" rx="2" stroke="#7671FF" strokeWidth="1.2" fill="none" />
      <rect x="18" y="18" width="12" height="6" rx="2" stroke="#CB0C9F" strokeWidth="1.2" fill="none" />
      <rect x="4" y="10" width="8" height="8" rx="1" fill="#8159BB" opacity="0.12" />
    </svg>
  ),
  blogs: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <rect x="4" y="4" width="24" height="24" rx="3" stroke="#8159BB" strokeWidth="1.2" fill="none" />
      <rect x="8" y="9" width="16" height="2.5" rx="1.25" fill="#8159BB" opacity="0.4" />
      <rect x="8" y="14" width="16" height="1.5" rx="0.75" fill="#C6C9CD" />
      <rect x="8" y="17.5" width="12" height="1.5" rx="0.75" fill="#C6C9CD" />
      <rect x="8" y="21" width="14" height="1.5" rx="0.75" fill="#C6C9CD" opacity="0.5" />
    </svg>
  ),
  stores: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path d="M6 11h20l-2 12H8L6 11z" stroke="#8159BB" strokeWidth="1.2" fill="none" strokeLinejoin="round" />
      <path d="M11 11l2-5h6l2 5" stroke="#8159BB" strokeWidth="1.2" fill="none" strokeLinejoin="round" />
      <circle cx="12" cy="26" r="1.5" fill="#8159BB" opacity="0.5" />
      <circle cx="20" cy="26" r="1.5" fill="#8159BB" opacity="0.5" />
    </svg>
  ),
  'link-in-bio': (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <rect x="10" y="2" width="12" height="22" rx="3" stroke="#8159BB" strokeWidth="1.2" fill="none" />
      <rect x="12" y="6" width="8" height="2.5" rx="1.25" fill="#8159BB" opacity="0.3" />
      <rect x="12" y="11" width="8" height="2.5" rx="1.25" fill="#7671FF" opacity="0.3" />
      <rect x="12" y="16" width="8" height="2.5" rx="1.25" fill="#CB0C9F" opacity="0.3" />
      <circle cx="16" cy="28" r="1.5" fill="#8159BB" opacity="0.4" />
    </svg>
  ),
};

const INITIAL_VISIBLE = 6;

function GeneratorSubsection({ section, searchQuery }) {
  const [expanded, setExpanded] = useState(false);
  const panelId = useId();

  const query = searchQuery.trim().toLowerCase();
  const filteredGens = query
    ? section.generators.filter(
        (g) =>
          g.name.toLowerCase().includes(query) ||
          g.description.toLowerCase().includes(query) ||
          section.heading.toLowerCase().includes(query)
      )
    : section.generators;

  if (query && filteredGens.length === 0) return null;

  const visibleGens = !query && !expanded
    ? filteredGens.slice(0, INITIAL_VISIBLE)
    : filteredGens;
  const hasMore = !query && filteredGens.length > INITIAL_VISIBLE;
  const thumb = SubsectionThumbs[section.id];

  return (
    <section
      id={section.id}
      style={{
        scrollMarginTop: 80,
        paddingTop: 40,
        borderTop: '1px solid var(--color-divider)',
      }}
    >
      <h3
        style={{
          fontFamily: 'var(--font-heading)',
          fontWeight: 700,
          fontSize: 20,
          textTransform: 'uppercase',
          letterSpacing: '0.04em',
          color: 'var(--color-heading)',
          margin: '0 0 6px 0',
        }}
      >
        {section.heading}
      </h3>
      <p
        style={{
          margin: '0 0 20px 0',
          fontSize: 13,
          color: 'var(--color-body-text)',
        }}
      >
        {section.description}
      </p>

      {/* All cards in DOM — JS only hides extras visually */}
      <div className="cards-grid">
        {section.generators.map((gen, idx) => {
          const slug = toSlug(gen.name);
          const isFiltered = query
            ? !filteredGens.includes(gen)
            : false;
          const isCollapsed = !query && !expanded && idx >= INITIAL_VISIBLE;

          return (
            <article
              key={slug}
              style={isFiltered || isCollapsed ? { display: 'none' } : {}}
              aria-hidden={isFiltered || isCollapsed ? 'true' : undefined}
            >
              <a
                href={`/generators/${slug}`}
                className="gen-card"
                aria-label={gen.name}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 10,
                  height: '100%',
                }}
                tabIndex={isFiltered || isCollapsed ? -1 : undefined}
              >
                <div style={{ flexShrink: 0 }}>{thumb}</div>
                <div
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 700,
                    fontSize: 13,
                    textTransform: 'uppercase',
                    letterSpacing: '0.03em',
                    color: 'var(--color-hero-heading)',
                    lineHeight: 1.3,
                  }}
                >
                  {gen.name}
                </div>
                <p
                  style={{
                    margin: 0,
                    fontSize: 13,
                    color: 'var(--color-body-text)',
                    lineHeight: 1.5,
                    flex: 1,
                  }}
                >
                  {gen.description}
                </p>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 4,
                    color: 'var(--color-brand-purple)',
                    fontFamily: 'var(--font-heading)',
                    fontSize: 11,
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.04em',
                    marginTop: 'auto',
                    paddingTop: 8,
                  }}
                >
                  Try it
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                    <path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </a>
            </article>
          );
        })}
      </div>

      {hasMore && (
        <button
          className="show-all-btn"
          onClick={() => setExpanded((e) => !e)}
          aria-expanded={expanded}
          aria-controls={panelId}
        >
          {expanded
            ? strings.en.allGenerators.showLess
            : strings.en.allGenerators.showAll(section.generators.length)}
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            aria-hidden="true"
            style={{
              transform: expanded ? 'rotate(180deg)' : 'none',
              transition: 'transform 0.25s ease',
            }}
          >
            <path d="M3 5l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      )}
    </section>
  );
}

export default function AllGenerators() {
  const [searchQuery, setSearchQuery] = useState('');

  const query = searchQuery.trim().toLowerCase();
  const totalMatches = query
    ? allGeneratorSections.reduce(
        (acc, sec) =>
          acc +
          sec.generators.filter(
            (g) =>
              g.name.toLowerCase().includes(query) ||
              g.description.toLowerCase().includes(query) ||
              sec.heading.toLowerCase().includes(query)
          ).length,
        0
      )
    : null;

  const hasNoResults = query && totalMatches === 0;

  return (
    <section
      id="all-generators"
      style={{
        background: '#ffffff',
        padding: '60px 0 80px',
        borderTop: '1px solid var(--color-divider)',
        scrollMarginTop: 60,
      }}
    >
      <div className="content-container">
        <h2 className="section-heading">{s.heading}</h2>
        <p className="section-subheading">{s.subheading}</p>

        {/* Search */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 16,
            flexWrap: 'wrap',
            marginBottom: 10,
          }}
        >
          <div className="search-wrapper">
            <span className="search-icon" aria-hidden="true">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <circle cx="7" cy="7" r="5" stroke="currentColor" strokeWidth="1.5" />
                <path d="M11 11l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </span>
            <input
              type="search"
              className="search-input"
              placeholder={s.searchPlaceholder}
              aria-label={s.searchLabel}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              autoComplete="off"
            />
          </div>
          {query && !hasNoResults && (
            <span
              style={{
                fontSize: 13,
                color: 'var(--color-body-text)',
                fontStyle: 'italic',
              }}
              aria-live="polite"
              aria-atomic="true"
            >
              {s.resultCount(totalMatches)}
            </span>
          )}
        </div>

        {/* No results state */}
        {hasNoResults && (
          <div
            style={{
              padding: '40px 20px',
              textAlign: 'center',
              color: 'var(--color-body-text)',
            }}
            aria-live="polite"
          >
            <p style={{ margin: '0 0 12px 0', fontSize: 15 }}>{s.noResults}</p>
            <button
              className="btn-ghost"
              onClick={() => setSearchQuery('')}
              style={{ marginBottom: 16 }}
            >
              {s.clearSearch}
            </button>
            <p style={{ margin: 0, fontSize: 13 }}>
              <a
                href="/s/ai_site_builder"
                style={{
                  color: 'var(--color-brand-purple)',
                  textDecoration: 'underline',
                }}
              >
                {s.noResultsCta}
              </a>
            </p>
          </div>
        )}

        {/* Subsections */}
        {allGeneratorSections.map((section) => (
          <GeneratorSubsection
            key={section.id}
            section={section}
            searchQuery={searchQuery}
          />
        ))}
      </div>
    </section>
  );
}
