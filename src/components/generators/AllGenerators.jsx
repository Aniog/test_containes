import React, { useState, useEffect, useRef, useCallback } from 'react';
import { strings, allGenerators } from '@/data/generators';
import { Search } from 'lucide-react';

const s = strings.en;
const INITIAL_VISIBLE = 6;

function CategoryThumbnail() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden="true"
      style={{ marginBottom: '12px' }}
    >
      <rect x="6" y="8" width="36" height="32" rx="4" stroke="#8159BB" strokeWidth="1.5" opacity="0.4" />
      <rect x="12" y="14" width="16" height="4" rx="1" fill="#C6C9CD" />
      <rect x="12" y="22" width="24" height="3" rx="1" fill="#E2E4E7" />
      <rect x="12" y="28" width="18" height="3" rx="1" fill="#E2E4E7" />
      <circle cx="36" cy="18" r="4" stroke="#8159BB" strokeWidth="1.5" opacity="0.4" />
    </svg>
  );
}

export default function AllGenerators() {
  const [query, setQuery] = useState('');
  const [expanded, setExpanded] = useState({});
  const [isClient, setIsClient] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleSearch = useCallback((e) => {
    setQuery(e.target.value);
  }, []);

  const clearSearch = useCallback(() => {
    setQuery('');
    if (inputRef.current) inputRef.current.focus();
  }, []);

  const toggleCategory = useCallback((catId) => {
    setExpanded((prev) => ({ ...prev, [catId]: !prev[catId] }));
  }, []);

  const getFilteredGenerators = useCallback((category) => {
    if (!query.trim()) return category.generators;
    const q = query.toLowerCase();
    return category.generators.filter(
      (g) =>
        g.name.toLowerCase().includes(q) ||
        g.description.toLowerCase().includes(q) ||
        category.name.toLowerCase().includes(q)
    );
  }, [query]);

  const totalMatches = allGenerators.reduce(
    (sum, cat) => sum + getFilteredGenerators(cat).length,
    0
  );

  return (
    <section id="all-generators" style={{ padding: '40px 0' }}>
      <div className="section-container">
        <h2
          style={{
            fontSize: 'clamp(22px, 3vw, 32px)',
            marginBottom: '8px',
            textAlign: 'center',
          }}
        >
          {s.allGenerators.heading}
        </h2>
        <p
          style={{
            fontSize: '14px',
            color: '#636972',
            textAlign: 'center',
            marginBottom: '24px',
          }}
        >
          {s.allGenerators.subheading}
        </p>

        {/* Search */}
        <div
          style={{
            maxWidth: '480px',
            margin: '0 auto 24px',
            position: 'relative',
          }}
        >
          <Search
            size={18}
            color="#C6C9CD"
            style={{
              position: 'absolute',
              left: '12px',
              top: '50%',
              transform: 'translateY(-50%)',
              pointerEvents: 'none',
            }}
          />
          <input
            ref={inputRef}
            type="search"
            value={query}
            onChange={handleSearch}
            placeholder={s.allGenerators.searchPlaceholder}
            aria-label={s.allGenerators.searchLabel}
            style={{
              width: '100%',
              height: '44px',
              padding: '0 16px 0 40px',
              border: '1px solid #C6C9CD',
              borderRadius: '4px',
              fontSize: '14px',
              fontFamily: "'Open Sans', sans-serif",
              color: '#2E2E2F',
              background: '#FFFFFF',
              outline: 'none',
            }}
            onFocus={(e) => (e.target.style.borderColor = '#8159BB')}
            onBlur={(e) => (e.target.style.borderColor = '#C6C9CD')}
          />
        </div>

        {/* Result count */}
        {query.trim() && (
          <p
            style={{
              textAlign: 'center',
              fontSize: '14px',
              color: '#636972',
              marginBottom: '24px',
            }}
          >
            {totalMatches} {s.allGenerators.resultCount}
          </p>
        )}

        {/* No results */}
        {query.trim() && totalMatches === 0 && (
          <div
            style={{
              textAlign: 'center',
              padding: '40px 20px',
              background: '#F4F6F8',
              borderRadius: '3px',
            }}
          >
            <p style={{ fontSize: '14px', color: '#636972', marginBottom: '16px' }}>
              {s.allGenerators.noResults}
            </p>
            <button
              onClick={clearSearch}
              className="btn btn-ghost"
              style={{ marginBottom: '12px' }}
            >
              {s.allGenerators.clearSearch}
            </button>
            <p style={{ fontSize: '14px' }}>
              <a
                href="/s/ai_site_builder"
                style={{ color: '#8159BB', textDecoration: 'underline' }}
              >
                {s.allGenerators.cantFind}
              </a>
            </p>
          </div>
        )}

        {/* Category subsections */}
        {allGenerators.map((category) => {
          const filtered = getFilteredGenerators(category);
          const hasMatches = filtered.length > 0;
          const isExpanded = expanded[category.id] || !isClient;
          const visibleCount = isExpanded ? filtered.length : Math.min(INITIAL_VISIBLE, filtered.length);
          const hasMore = filtered.length > INITIAL_VISIBLE;

          if (!hasMatches && query.trim()) return null;

          return (
            <div
              key={category.id}
              id={category.id}
              style={{
                marginBottom: '40px',
                display: hasMatches ? 'block' : 'none',
              }}
            >
              <h3
                style={{
                  fontSize: '20px',
                  marginBottom: '4px',
                  color: '#2E2E2F',
                }}
              >
                {category.name}
              </h3>
              <p
                style={{
                  fontSize: '14px',
                  color: '#636972',
                  marginBottom: '20px',
                }}
              >
                {category.description}
              </p>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                  gap: '20px',
                }}
              >
                {filtered.slice(0, visibleCount).map((gen) => (
                  <a
                    key={gen.slug}
                    href={`/generators/${gen.slug}`}
                    className="card"
                    style={{
                      display: 'block',
                      textDecoration: 'none',
                      color: 'inherit',
                    }}
                  >
                    <CategoryThumbnail />
                    <h4
                      style={{
                        fontSize: '15px',
                        marginBottom: '6px',
                        color: '#2E2E2F',
                        textTransform: 'none',
                        fontFamily: "'Josefin Sans', 'Poppins', sans-serif",
                        fontWeight: 700,
                      }}
                    >
                      {gen.name}
                    </h4>
                    <p
                      style={{
                        fontSize: '14px',
                        color: '#636972',
                        lineHeight: 1.5,
                      }}
                    >
                      {gen.description}
                    </p>
                  </a>
                ))}
              </div>
              {isClient && hasMore && (
                <button
                  onClick={() => toggleCategory(category.id)}
                  className="btn btn-ghost"
                  style={{ marginTop: '16px' }}
                  aria-expanded={isExpanded}
                  aria-controls={`${category.id}-grid`}
                >
                  {isExpanded
                    ? s.allGenerators.showLess
                    : `${s.allGenerators.showAll} ${filtered.length} ${category.name.toLowerCase()}`}
                </button>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
