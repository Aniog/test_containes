import { useState, useMemo } from 'react';
import strings from '../../data/strings';
import { allGeneratorSections } from '../../data/generators';
import GeneratorSubsection from './GeneratorSubsection';

const s = strings.en.allGenerators;

function SearchIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <circle cx="6.5" cy="6.5" r="4.5" stroke="#8159BB" strokeWidth="1.5" />
      <line x1="10" y1="10" x2="14" y2="14" stroke="#8159BB" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export default function AllGenerators() {
  const [searchQuery, setSearchQuery] = useState('');

  const q = searchQuery.trim().toLowerCase();
  const isSearching = q.length > 0;

  const matchCount = useMemo(() => {
    if (!isSearching) return null;
    let count = 0;
    allGeneratorSections.forEach((section) => {
      section.generators.forEach((gen) => {
        if (
          gen.name.toLowerCase().includes(q) ||
          gen.description.toLowerCase().includes(q) ||
          section.heading.toLowerCase().includes(q)
        ) {
          count++;
        }
      });
    });
    return count;
  }, [q, isSearching]);

  const hasNoResults = isSearching && matchCount === 0;

  return (
    <section
      id="all-generators"
      aria-labelledby="all-generators-heading"
      style={{ background: '#F4F6F8', paddingBlock: 60, scrollMarginTop: 56 }}
    >
      <hr className="section-divider" style={{ marginBottom: 0 }} />
      <div className="content-wrap" style={{ paddingTop: 60 }}>
        <h2
          id="all-generators-heading"
          className="font-heading"
          style={{ color: '#4B5056', fontSize: 'clamp(22px, 2.5vw, 30px)', marginBottom: 8 }}
        >
          {s.heading}
        </h2>
        <p style={{ color: '#636972', fontSize: 15, marginBottom: 30, marginTop: 0 }}>
          {s.subheading}
        </p>

        {/* Search input */}
        <div style={{ marginBottom: 10, maxWidth: 480 }}>
          <label htmlFor="generator-search" className="sr-only">
            {s.searchLabel}
          </label>
          <div
            className="flex items-center"
            style={{
              background: '#ffffff',
              border: '1px solid #C6C9CD',
              borderRadius: 4,
              padding: '0 12px',
              height: 44,
              gap: 10,
              transition: 'border-color 0.2s',
            }}
          >
            <SearchIcon />
            <input
              id="generator-search"
              type="search"
              aria-label={s.searchLabel}
              placeholder={s.searchPlaceholder}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                flex: 1,
                border: 'none',
                outline: 'none',
                background: 'transparent',
                fontSize: 14,
                color: '#2E2E2F',
                fontFamily: "'Open Sans', sans-serif",
              }}
            />
            {isSearching && (
              <button
                onClick={() => setSearchQuery('')}
                aria-label="Clear search"
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  color: '#8159BB',
                  fontSize: 18,
                  lineHeight: 1,
                  padding: '0 2px',
                }}
              >
                ×
              </button>
            )}
          </div>
        </div>

        {/* Result count */}
        {isSearching && !hasNoResults && (
          <p
            role="status"
            aria-live="polite"
            style={{ color: '#8159BB', fontSize: 13, marginBottom: 20, marginTop: 0 }}
          >
            {s.resultCount(matchCount)}
          </p>
        )}

        {/* No results state */}
        {hasNoResults && (
          <div
            role="status"
            aria-live="polite"
            style={{
              background: '#ffffff',
              border: '1px solid #E2E4E7',
              borderRadius: 4,
              padding: 24,
              marginBottom: 30,
              textAlign: 'center',
            }}
          >
            <p style={{ color: '#636972', marginBottom: 12 }}>{s.noResults}</p>
            <button
              onClick={() => setSearchQuery('')}
              className="btn-ghost"
              style={{ height: 36, padding: '0 15px', fontSize: 13, marginBottom: 12 }}
            >
              {s.noResultsClear}
            </button>
            <p style={{ margin: 0, fontSize: 13, color: '#636972' }}>
              <a
                href="/s/ai_site_builder"
                style={{ color: '#8159BB', textDecoration: 'underline' }}
              >
                {s.noResultsBuilder}
              </a>
            </p>
          </div>
        )}

        {/* Category subsections */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 50 }}>
          {allGeneratorSections.map((section) => (
            <GeneratorSubsection
              key={section.id}
              {...section}
              searchQuery={searchQuery}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
