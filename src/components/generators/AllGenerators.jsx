import { useState, useMemo } from 'react';
import { allGenerators } from '../../data/generators.js';
import s from '../../data/strings.js';

const INITIAL_VISIBLE = 6;

const categoryOrder = ['websites', 'landing-pages', 'portfolios', 'blogs', 'stores', 'link-in-bio'];

const subsectionIcons = {
  websites: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <rect width="32" height="32" rx="6" fill="#EDE8F7" />
      <rect x="6" y="8" width="20" height="16" rx="2" stroke="#8159BB" strokeWidth="1.5" fill="none" />
      <path d="M6 12h20" stroke="#8159BB" strokeWidth="1.5" />
      <circle cx="9" cy="10" r="1" fill="#8159BB" />
      <circle cx="12" cy="10" r="1" fill="#8159BB" />
    </svg>
  ),
  'landing-pages': (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <rect width="32" height="32" rx="6" fill="#EDE8F7" />
      <rect x="6" y="6" width="20" height="20" rx="2" stroke="#8159BB" strokeWidth="1.5" fill="none" />
      <path d="M10 12h12M10 16h8M12 20h8" stroke="#8159BB" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  portfolios: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <rect width="32" height="32" rx="6" fill="#EDE8F7" />
      <rect x="6" y="10" width="9" height="12" rx="2" stroke="#8159BB" strokeWidth="1.5" fill="none" />
      <rect x="17" y="6" width="9" height="8" rx="2" stroke="#8159BB" strokeWidth="1.5" fill="none" />
      <rect x="17" y="16" width="9" height="6" rx="2" stroke="#8159BB" strokeWidth="1.5" fill="none" />
    </svg>
  ),
  blogs: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <rect width="32" height="32" rx="6" fill="#EDE8F7" />
      <path d="M8 10h16M8 14h16M8 18h10" stroke="#8159BB" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="22" cy="22" r="4" fill="#EDE8F7" stroke="#8159BB" strokeWidth="1.5" />
      <path d="M21 22h2M22 21v2" stroke="#8159BB" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  ),
  stores: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <rect width="32" height="32" rx="6" fill="#EDE8F7" />
      <path d="M8 12h16l-2 10H10L8 12z" stroke="#8159BB" strokeWidth="1.5" fill="none" strokeLinejoin="round" />
      <path d="M6 12l2-4h16l2 4" stroke="#8159BB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="13" cy="25" r="1.5" fill="#8159BB" />
      <circle cx="19" cy="25" r="1.5" fill="#8159BB" />
    </svg>
  ),
  'link-in-bio': (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <rect width="32" height="32" rx="6" fill="#EDE8F7" />
      <rect x="10" y="6" width="12" height="20" rx="3" stroke="#8159BB" strokeWidth="1.5" fill="none" />
      <path d="M13 11h6M13 15h6M13 19h4" stroke="#8159BB" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  ),
};

const styles = {
  section: {
    background: '#F4F6F8',
    padding: '60px 20px',
    borderTop: '1px solid #E2E4E7',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
  },
  sectionHeading: {
    fontFamily: "'Josefin Sans', Poppins, sans-serif",
    fontWeight: 700,
    fontSize: 'clamp(22px, 2.5vw, 30px)',
    color: '#4B5056',
    textTransform: 'uppercase',
    marginBottom: '8px',
  },
  subheading: {
    fontSize: '15px',
    color: '#636972',
    marginBottom: '30px',
    marginTop: 0,
  },
  searchWrap: {
    position: 'relative',
    maxWidth: '480px',
    marginBottom: '10px',
  },
  searchIcon: {
    position: 'absolute',
    insetInlineStart: '12px',
    top: '50%',
    transform: 'translateY(-50%)',
    pointerEvents: 'none',
    color: '#636972',
  },
  searchInput: {
    width: '100%',
    height: '44px',
    paddingInlineStart: '40px',
    paddingInlineEnd: '16px',
    border: '1px solid #C6C9CD',
    borderRadius: '4px',
    fontSize: '14px',
    fontFamily: "'Open Sans', sans-serif",
    color: '#2E2E2F',
    background: '#fff',
    outline: 'none',
    boxSizing: 'border-box',
  },
  resultCount: {
    fontSize: '13px',
    color: '#636972',
    marginBottom: '30px',
    minHeight: '20px',
  },
  noResults: {
    textAlign: 'center',
    padding: '40px 20px',
    color: '#636972',
  },
  clearBtn: {
    display: 'inline-block',
    marginTop: '10px',
    padding: '8px 16px',
    border: '1px solid #8159BB',
    borderRadius: '4px',
    color: '#8159BB',
    background: 'transparent',
    fontFamily: "'Josefin Sans', Poppins, sans-serif",
    fontWeight: 700,
    fontSize: '12px',
    textTransform: 'uppercase',
    cursor: 'pointer',
  },
  noResultsCta: {
    display: 'block',
    marginTop: '12px',
    fontSize: '13px',
    color: '#8159BB',
    textDecoration: 'underline',
  },
  subsection: {
    marginBottom: '50px',
  },
  subsectionHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    marginBottom: '6px',
  },
  subsectionHeading: {
    fontFamily: "'Josefin Sans', Poppins, sans-serif",
    fontWeight: 700,
    fontSize: '20px',
    color: '#4B5056',
    textTransform: 'uppercase',
  },
  subsectionDesc: {
    fontSize: '13px',
    color: '#636972',
    marginBottom: '20px',
    marginTop: 0,
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '16px',
  },
  card: {
    background: '#fff',
    border: '1px solid #C6C9CD',
    borderRadius: '3px',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    textDecoration: 'none',
    color: 'inherit',
    transition: 'box-shadow 0.2s ease, border-color 0.2s ease',
  },
  cardName: {
    fontFamily: "'Josefin Sans', Poppins, sans-serif",
    fontWeight: 700,
    fontSize: '14px',
    color: '#2E2E2F',
    textTransform: 'uppercase',
    lineHeight: 1.3,
  },
  cardDesc: {
    fontSize: '13px',
    color: '#636972',
    lineHeight: 1.5,
  },
  showAllBtn: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    marginTop: '16px',
    padding: '8px 16px',
    border: '1px solid #8159BB',
    borderRadius: '4px',
    color: '#8159BB',
    background: 'transparent',
    fontFamily: "'Josefin Sans', Poppins, sans-serif",
    fontWeight: 700,
    fontSize: '12px',
    textTransform: 'uppercase',
    cursor: 'pointer',
    letterSpacing: '0.04em',
  },
};

export default function AllGenerators() {
  const [query, setQuery] = useState('');
  const [expandedSections, setExpandedSections] = useState({});

  const normalizedQuery = query.trim().toLowerCase();

  const filteredData = useMemo(() => {
    if (!normalizedQuery) return null;
    const result = {};
    for (const key of categoryOrder) {
      const section = allGenerators[key];
      const matches = section.generators.filter(
        (g) =>
          g.name.toLowerCase().includes(normalizedQuery) ||
          g.description.toLowerCase().includes(normalizedQuery) ||
          section.heading.toLowerCase().includes(normalizedQuery)
      );
      if (matches.length > 0) {
        result[key] = { ...section, generators: matches };
      }
    }
    return result;
  }, [normalizedQuery]);

  const totalMatches = filteredData
    ? Object.values(filteredData).reduce((sum, s) => sum + s.generators.length, 0)
    : null;

  const activeData = filteredData ?? allGenerators;
  const activeSections = filteredData ? Object.keys(filteredData) : categoryOrder;

  function toggleSection(key) {
    setExpandedSections((prev) => ({ ...prev, [key]: !prev[key] }));
  }

  return (
    <section id="all-generators" style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.sectionHeading}>{s.allGenerators.heading}</h2>
        <p style={styles.subheading}>{s.allGenerators.subheading}</p>

        {/* Search */}
        <div style={styles.searchWrap}>
          <span style={styles.searchIcon} aria-hidden="true">
            <SearchIcon />
          </span>
          <input
            type="search"
            aria-label={s.allGenerators.searchLabel}
            placeholder={s.allGenerators.searchPlaceholder}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            style={styles.searchInput}
            onFocus={(e) => (e.currentTarget.style.borderColor = '#8159BB')}
            onBlur={(e) => (e.currentTarget.style.borderColor = '#C6C9CD')}
          />
        </div>

        {/* Result count */}
        <p style={styles.resultCount} aria-live="polite" aria-atomic="true">
          {normalizedQuery && totalMatches !== null
            ? `${s.allGenerators.resultCount(totalMatches)}`
            : ''}
        </p>

        {/* No results */}
        {normalizedQuery && activeSections.length === 0 && (
          <div style={styles.noResults}>
            <p style={{ margin: 0 }}>{s.allGenerators.noResults}</p>
            <button
              style={styles.clearBtn}
              onClick={() => setQuery('')}
            >
              {s.allGenerators.clearSearch}
            </button>
            <a href="/s/ai_site_builder" style={styles.noResultsCta}>
              {s.allGenerators.noResultsCta}
            </a>
          </div>
        )}

        {/* Subsections */}
        {activeSections.map((key) => {
          const section = activeData[key];
          const isExpanded = expandedSections[key] ?? false;
          const hasMore = section.generators.length > INITIAL_VISIBLE;
          const visibleGens = isExpanded
            ? section.generators
            : section.generators.slice(0, INITIAL_VISIBLE);

          return (
            <div
              key={key}
              id={key}
              style={styles.subsection}
            >
              <div style={styles.subsectionHeader}>
                {subsectionIcons[key]}
                <h3 style={styles.subsectionHeading}>{section.heading}</h3>
              </div>
              <p style={styles.subsectionDesc}>{section.description}</p>

              <div style={styles.grid} className="dir-grid">
                {/* All cards always in DOM; hidden ones are visually hidden via CSS when JS is on */}
                {section.generators.map((gen, idx) => (
                  <article
                    key={gen.slug}
                    style={
                      !isExpanded && idx >= INITIAL_VISIBLE
                        ? { display: 'none' }
                        : {}
                    }
                    aria-hidden={!isExpanded && idx >= INITIAL_VISIBLE ? 'true' : undefined}
                  >
                    <a
                      href={`/generators/${gen.slug}`}
                      style={styles.card}
                      tabIndex={!isExpanded && idx >= INITIAL_VISIBLE ? -1 : undefined}
                      onMouseOver={(e) => {
                        e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.10)';
                        e.currentTarget.style.borderColor = '#8159BB';
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.boxShadow = 'none';
                        e.currentTarget.style.borderColor = '#C6C9CD';
                      }}
                    >
                      <span style={styles.cardName}>{gen.name}</span>
                      <span style={styles.cardDesc}>{gen.description}</span>
                    </a>
                  </article>
                ))}
              </div>

              {hasMore && !normalizedQuery && (
                <button
                  style={styles.showAllBtn}
                  onClick={() => toggleSection(key)}
                  aria-expanded={isExpanded}
                  aria-controls={`section-grid-${key}`}
                >
                  {isExpanded
                    ? s.allGenerators.showLess
                    : s.allGenerators.showAll(section.generators.length)}
                  <ChevronIcon expanded={isExpanded} />
                </button>
              )}
            </div>
          );
        })}
      </div>
      <style>{`
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
}

function SearchIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <circle cx="7" cy="7" r="4.5" stroke="#636972" strokeWidth="1.5" />
      <path d="M10.5 10.5l3 3" stroke="#636972" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function ChevronIcon({ expanded }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden="true"
      style={{ transform: expanded ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }}
    >
      <path d="M3 5l4 4 4-4" stroke="#8159BB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
