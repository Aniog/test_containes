import { useState, useRef, useEffect } from 'react';
import { allGenerators, categories } from '@/data/generators';
import strings from '@/data/strings';

const INITIAL_VISIBLE = 6;
const s = strings.en;

function CategoryIllustration() {
  return (
    <div
      aria-hidden="true"
      style={{
        width: 36,
        height: 36,
        borderRadius: 6,
        background: 'linear-gradient(135deg, #E8DFF5, #D4C5EB)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
      }}
    >
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <rect x="1" y="2" width="16" height="14" rx="2" stroke="#8159BB" strokeWidth="1.2" fill="none" />
        <line x1="1" y1="6" x2="17" y2="6" stroke="#8159BB" strokeWidth="0.8" />
        <circle cx="5" cy="4" r="0.8" fill="#8159BB" />
        <circle cx="8" cy="4" r="0.8" fill="#8159BB" />
      </svg>
    </div>
  );
}

function GeneratorCard({ gen }) {
  return (
    <a
      href={`/generators/${gen.slug}`}
      className="generator-card"
      style={{
        display: 'block',
        textDecoration: 'none',
        color: 'inherit',
        padding: 20,
      }}
    >
      <CategoryIllustration />
      <h4
        style={{
          fontFamily: "'Josefin Sans', 'Poppins', sans-serif",
          fontWeight: 700,
          fontSize: 15,
          color: '#2E2E2F',
          margin: '0 0 6px',
          textTransform: 'uppercase',
          lineHeight: 1.3,
        }}
      >
        {gen.name}
      </h4>
      <p
        style={{
          color: '#636972',
          fontSize: 13,
          margin: 0,
          lineHeight: 1.5,
        }}
      >
        {gen.description}
      </p>
    </a>
  );
}

function CategorySection({ category, generators, searchQuery, visibleSlugs }) {
  const sectionRef = useRef(null);
  const [isExpanded, setIsExpanded] = useState(true);
  const total = generators.length;
  const hasMore = total > INITIAL_VISIBLE;
  const isSearching = searchQuery.length > 0;

  const toggleId = `toggle-${category.slug}`;
  const panelId = `panel-${category.slug}`;

  // After mount, collapse to show only INITIAL_VISIBLE cards (progressive enhancement)
  useEffect(() => {
    if (!isSearching) {
      const timer = setTimeout(() => {
        setIsExpanded(false);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, []);

  // Collapse when search changes
  useEffect(() => {
    if (isSearching) {
      setIsExpanded(true);
    }
  }, [isSearching]);

  if (generators.length === 0) return null;

  return (
    <div
      ref={sectionRef}
      id={category.slug}
      style={{ marginBottom: 40 }}
    >
      <h3
        className="heading-font"
        style={{
          fontSize: 'clamp(16px, 2vw, 22px)',
          color: '#4B5056',
          margin: '0 0 6px',
        }}
      >
        {category.name}
      </h3>
      <p
        style={{
          color: '#636972',
          fontSize: 14,
          margin: '0 0 20px',
        }}
      >
        {category.description}
      </p>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 320px), 1fr))',
          gap: 20,
        }}
        className="directory-grid"
      >
        {generators.map((gen, i) => {
          const isHiddenByCollapse = !isExpanded && i >= INITIAL_VISIBLE && !isSearching;
          const isFilteredOut = isSearching && visibleSlugs && !visibleSlugs.has(gen.slug);
          const shouldHide = isHiddenByCollapse || isFilteredOut;

          return (
            <div
              key={gen.slug}
              className="card-wrapper"
              style={{ display: shouldHide ? 'none' : 'block' }}
            >
              <GeneratorCard gen={gen} />
            </div>
          );
        })}
      </div>

      {/* Show all / Show less toggle - only shown when JS is available */}
      {hasMore && !isSearching && (
        <button
          id={toggleId}
          type="button"
          onClick={() => setIsExpanded((e) => !e)}
          aria-expanded={isExpanded}
          aria-controls={panelId}
          className="heading-font"
          style={{
            marginTop: 16,
            background: 'none',
            border: 'none',
            color: '#8159BB',
            fontSize: 13,
            cursor: 'pointer',
            padding: 0,
            textDecoration: 'underline',
            textUnderlineOffset: 3,
          }}
        >
          {isExpanded ? s.showLess : s.showAll(total)}
        </button>
      )}

      <style>{`
        @media (min-width: 769px) {
          .directory-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
        @media (max-width: 768px) and (min-width: 481px) {
          .directory-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 480px) {
          .directory-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}

function computeFiltered(search) {
  const q = search.toLowerCase().trim();
  if (!q) {
    return {
      filtered: Object.fromEntries(
        categories.map((cat) => [cat.id, allGenerators[cat.id] || []])
      ),
      count: 0,
    };
  }
  const result = {};
  let count = 0;
  categories.forEach((cat) => {
    const gens = allGenerators[cat.id] || [];
    const matches = gens.filter(
      (g) =>
        g.name.toLowerCase().includes(q) ||
        g.description.toLowerCase().includes(q) ||
        cat.name.toLowerCase().includes(q)
    );
    if (matches.length > 0) {
      result[cat.id] = matches;
      count += matches.length;
    }
  });
  return { filtered: result, count };
}

export default function AllGenerators() {
  const [query, setQuery] = useState('');
  const inputRef = useRef(null);

  const { filtered, count: resultCount } = computeFiltered(query);

  const clearSearch = () => {
    setQuery('');
    inputRef.current?.focus();
  };

  const hasResults = Object.keys(filtered).length > 0;

  return (
    <section
      id="all-generators"
      style={{
        maxWidth: 1200,
        margin: '0 auto',
        padding: '40px 20px',
      }}
    >
      <h2
        className="heading-font"
        style={{
          fontSize: 'clamp(22px, 2.5vw, 32px)',
          color: '#4B5056',
          margin: '0 0 8px',
        }}
      >
        {s.allGeneratorsHeading}
      </h2>
      <p
        style={{
          color: '#636972',
          fontSize: 14,
          margin: '0 0 24px',
        }}
      >
        {s.allGeneratorsSub}
      </p>

      {/* Search */}
      <div style={{ marginBottom: 30, maxWidth: 480 }}>
        <label
          htmlFor="generator-search"
          className="visually-hidden"
          style={{
            position: 'absolute',
            width: 1,
            height: 1,
            padding: 0,
            margin: -1,
            overflow: 'hidden',
            clip: 'rect(0,0,0,0)',
            whiteSpace: 'nowrap',
            border: 0,
          }}
        >
          {s.searchAria}
        </label>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            border: '1px solid #C6C9CD',
            borderRadius: 4,
            padding: '0 14px',
            height: 44,
            gap: 10,
          }}
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            aria-hidden="true"
          >
            <circle cx="7.5" cy="7.5" r="5.5" stroke="#C6C9CD" strokeWidth="1.5" />
            <line x1="11.5" y1="11.5" x2="16" y2="16" stroke="#C6C9CD" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <input
            ref={inputRef}
            id="generator-search"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={s.searchPlaceholder}
            aria-label={s.searchAria}
            style={{
              flex: 1,
              border: 'none',
              background: 'none',
              outline: 'none',
              fontSize: 14,
              color: '#2E2E2F',
              fontFamily: "'Open Sans', sans-serif",
            }}
          />
        </div>
        {query && (
          <p
            style={{
              fontSize: 13,
              color: '#636972',
              margin: '8px 0 0',
            }}
          >
            {hasResults
              ? s.searchResultCount(resultCount)
              : s.noResultsTitle}
          </p>
        )}
      </div>

      {/* No results state */}
      {query && !hasResults && (
        <div
          style={{
            textAlign: 'center',
            padding: '40px 20px',
            background: '#F4F6F8',
            borderRadius: 4,
          }}
        >
          <p style={{ color: '#636972', fontSize: 14, margin: '0 0 16px' }}>
            {s.noResultsText}
          </p>
          <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
            <button
              type="button"
              onClick={clearSearch}
              className="heading-font ghost-btn"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: 36,
                padding: '0 16px',
                borderRadius: 4,
                fontSize: 13,
                cursor: 'pointer',
              }}
            >
              {s.clearSearch}
            </button>
            <a
              href="/s/ai_site_builder"
              className="heading-font ai-gradient-bg"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: 36,
                padding: '0 16px',
                borderRadius: 4,
                color: '#FFFFFF',
                textDecoration: 'none',
                fontSize: 13,
              }}
            >
              {s.noResultsCta}
            </a>
          </div>
        </div>
      )}

      {/* Category subsections */}
      {categories.map((cat) => {
        const gens = allGenerators[cat.id] || [];
        const visibleGens = filtered[cat.id] || [];
        const visibleSlugs = new Set(visibleGens.map((g) => g.slug));
        if (!visibleGens.length && query) return null;
        return (
          <CategorySection
            key={cat.id}
            category={cat}
            generators={gens}
            searchQuery={query}
            visibleSlugs={visibleSlugs}
          />
        );
      })}
    </section>
  );
}
