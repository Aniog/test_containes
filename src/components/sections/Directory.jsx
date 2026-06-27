import React from 'react';
import { t } from '../../data/strings.js';
import { CATEGORIES, groupByCategory } from '../../data/generators.js';
import { CategoryIllustration, MagnifyingGlassIcon } from '../Icons.jsx';

const SHOW_ALL_THRESHOLD = 6; // cards visible by default per subsection before "Show all"

const wrap = {
  background: 'var(--color-white)',
  paddingBlock: 60,
  scrollMarginTop: 80,
};

const searchWrap = {
  display: 'flex',
  flexDirection: 'column',
  gap: 8,
  marginBottom: 40,
};

const searchRow = {
  display: 'flex',
  alignItems: 'center',
  gap: 10,
  maxWidth: 480,
  width: '100%',
  position: 'relative',
};

const searchInput = {
  width: '100%',
  height: 44,
  padding: '0 16px 0 44px',
  fontSize: 14,
  fontFamily: 'var(--font-body)',
  color: 'var(--color-heading-strong)',
  background: 'var(--color-white)',
  border: '1px solid var(--color-card-border)',
  borderRadius: 4,
  outline: 'none',
};

const searchIconStyle = {
  position: 'absolute',
  left: 14,
  top: '50%',
  transform: 'translateY(-50%)',
  color: 'var(--color-body)',
  pointerEvents: 'none',
};

const resultCountStyle = {
  color: 'var(--color-body)',
  fontSize: 13,
};

const emptyWrap = {
  textAlign: 'center',
  padding: '40px 20px',
  background: 'var(--color-light-bg)',
  border: '1px solid var(--color-divider)',
  borderRadius: 3,
  display: 'flex',
  flexDirection: 'column',
  gap: 14,
  alignItems: 'center',
};

const subsectionStyle = {
  marginBottom: 50,
};

const subsectionHead = {
  display: 'flex',
  flexDirection: 'column',
  gap: 6,
  marginBottom: 20,
};

const subsectionTitle = {
  fontSize: 22,
  color: 'var(--color-heading-strong)',
};

const subsectionDesc = {
  color: 'var(--color-body)',
  fontSize: 14,
};

const grid = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: 16,
};

const responsiveStyle = `
  @media (max-width: 900px) {
    .dir-grid {
      grid-template-columns: repeat(2, 1fr) !important;
    }
  }
  @media (max-width: 600px) {
    .dir-grid {
      grid-template-columns: 1fr !important;
    }
  }
`;

const thumbBox = {
  width: '100%',
  height: 110,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'var(--color-light-bg)',
  border: '1px solid var(--color-divider)',
  borderRadius: 3,
  marginBottom: 14,
};

const cardLink = {
  display: 'flex',
  flexDirection: 'column',
  background: 'var(--color-white)',
  border: '1px solid var(--color-card-border)',
  borderRadius: 3,
  padding: 16,
  color: 'inherit',
  textDecoration: 'none',
  minHeight: 200,
  transition: 'box-shadow 150ms ease, border-color 150ms ease',
};

const cardTitle = {
  fontFamily: 'var(--font-heading)',
  fontWeight: 700,
  fontSize: 16,
  textTransform: 'uppercase',
  color: 'var(--color-heading-strong)',
  lineHeight: 1.2,
  marginBottom: 6,
};

const cardDesc = {
  color: 'var(--color-body)',
  fontSize: 14,
  lineHeight: 1.5,
};

const toggleBtn = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: 6,
  marginTop: 14,
  padding: '0 14px',
  height: 36,
  background: 'transparent',
  color: 'var(--color-brand-purple)',
  border: '1px solid var(--color-brand-purple)',
  borderRadius: 4,
  fontFamily: 'var(--font-heading)',
  fontWeight: 700,
  fontSize: 13,
  textTransform: 'uppercase',
  letterSpacing: '0.04em',
  cursor: 'pointer',
};

export default function Directory() {
  const grouped = groupByCategory();
  const [query, setQuery] = React.useState('');
  const [expanded, setExpanded] = React.useState(() =>
    Object.fromEntries(CATEGORIES.map((c) => [c.slug, false])),
  );

  const q = query.trim().toLowerCase();
  const totalAll = React.useMemo(
    () => CATEGORIES.reduce((sum, cat) => sum + (grouped[cat.slug] || []).length, 0),
    [grouped],
  );

  const matches = React.useCallback(
    (g) => {
      if (!q) return true;
      const haystack = `${g.name} ${g.description}`.toLowerCase();
      return haystack.includes(q);
    },
    [q],
  );

  const handleSearch = (e) => {
    setQuery(e.target.value);
  };

  const handleClear = () => {
    setQuery('');
  };

  const handleToggle = (slug) => {
    setExpanded((prev) => ({ ...prev, [slug]: !prev[slug] }));
  };

  const matchCount = q
    ? CATEGORIES.reduce(
        (sum, cat) => sum + (grouped[cat.slug] || []).filter(matches).length,
        0,
      )
    : totalAll;

  return (
    <section
      id="all-generators"
      aria-labelledby="all-generators-heading"
      style={wrap}
    >
      <div className="container">
        <header className="section-heading">
          <h2 id="all-generators-heading">{t.directory.heading}</h2>
          <p className="section-sub">{t.directory.sub}</p>
        </header>

        <div style={searchWrap}>
          <div style={searchRow}>
            <span style={searchIconStyle} aria-hidden="true">
              <MagnifyingGlassIcon size={18} />
            </span>
            <input
              id="generator-search"
              type="search"
              role="searchbox"
              placeholder={t.directory.searchPlaceholder}
              aria-label={t.directory.searchLabel}
              style={searchInput}
              data-directory-search
              value={query}
              onChange={handleSearch}
            />
          </div>
          <div
            id="directory-result-count"
            style={resultCountStyle}
            aria-live="polite"
          >
            {q
              ? t.directory.matchCount(matchCount)
              : t.directory.totalCount(totalAll)}
          </div>
          {q && matchCount === 0 && (
            <div id="directory-empty-state" style={emptyWrap}>
              <h3 style={{ fontSize: 18, color: 'var(--color-heading-strong)' }}>
                {t.directory.emptyHeading}
              </h3>
              <p style={{ color: 'var(--color-body)' }}>{t.directory.emptyBody}</p>
              <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', justifyContent: 'center' }}>
                <button
                  type="button"
                  data-clear-search
                  style={toggleBtn}
                  onClick={handleClear}
                >
                  {t.directory.clearSearch}
                </button>
                <a className="btn btn--primary" href="/s/ai_site_builder">
                  {t.directory.cantFindIt}
                </a>
              </div>
            </div>
          )}
        </div>

        {CATEGORIES.map((cat) => {
          const items = (grouped[cat.slug] || []).filter(matches);
          const total = items.length;
          const isExpanded = expanded[cat.slug];
          // When searching, show all matches; otherwise collapse beyond threshold.
          const effectiveLimit = q || isExpanded ? total : Math.min(SHOW_ALL_THRESHOLD, total);
          const hasOverflow = total > SHOW_ALL_THRESHOLD;
          // Hide entire subsection when searching and zero matches.
          if (q && total === 0) return null;
          return (
            <section
              key={cat.slug}
              id={cat.slug}
              aria-labelledby={`${cat.slug}-heading`}
              data-directory-subsection={cat.slug}
              style={subsectionStyle}
            >
              <header style={subsectionHead}>
                <h3 id={`${cat.slug}-heading`} style={subsectionTitle}>
                  {cat.name}
                </h3>
                <p style={subsectionDesc}>{cat.description}</p>
              </header>
              <div className="dir-grid" style={grid}>
                {items.map((g, idx) => {
                  const isOverflow = !q && !isExpanded && idx >= SHOW_ALL_THRESHOLD;
                  return (
                    <a
                      key={g.slug}
                      className="dir-card card-link"
                      href={`/generators/${g.slug}`}
                      data-directory-card={g.slug}
                      data-name={g.name.toLowerCase()}
                      data-description={g.description.toLowerCase()}
                      data-category={cat.name.toLowerCase()}
                      style={{
                        ...cardLink,
                        display: isOverflow ? 'none' : 'flex',
                      }}
                      data-overflow={isOverflow ? '1' : '0'}
                    >
                      <span style={thumbBox} aria-hidden="true">
                        <CategoryIllustration kind={cat.illustration} size={56} />
                      </span>
                      <span style={cardTitle}>{g.name}</span>
                      <span style={cardDesc}>{g.description}</span>
                    </a>
                  );
                })}
              </div>
              {!q && hasOverflow && (
                <button
                  type="button"
                  data-show-all={cat.slug}
                  aria-controls={cat.slug}
                  aria-expanded={isExpanded ? 'true' : 'false'}
                  style={toggleBtn}
                  onClick={() => handleToggle(cat.slug)}
                >
                  {isExpanded ? t.directory.showLess(total) : t.directory.showAll(total)}
                </button>
              )}
            </section>
          );
        })}
      </div>
      <style>{responsiveStyle}</style>
    </section>
  );
}
