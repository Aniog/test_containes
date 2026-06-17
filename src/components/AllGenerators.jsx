import React, { useState, useRef, useEffect, useCallback } from 'react';
import { strings } from '../data/strings';
import { generators, getGeneratorsByCategory, categories } from '../data/generators';

const s = strings.en;
const INITIAL_VISIBLE = 6;

// Category icon thumbnails (small, shared per subsection)
const categoryThumbnails = {
  websites: (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <rect x="6" y="8" width="28" height="22" rx="3" stroke="#8159BB" strokeWidth="2" />
      <line x1="6" y1="14" x2="34" y2="14" stroke="#8159BB" strokeWidth="2" />
      <line x1="16" y1="30" x2="24" y2="30" stroke="#8159BB" strokeWidth="2" />
      <line x1="20" y1="30" x2="20" y2="34" stroke="#8159BB" strokeWidth="2" />
    </svg>
  ),
  'landing-pages': (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <rect x="8" y="4" width="24" height="30" rx="3" stroke="#8159BB" strokeWidth="2" />
      <line x1="12" y1="12" x2="28" y2="12" stroke="#8159BB" strokeWidth="2" />
      <line x1="12" y1="18" x2="22" y2="18" stroke="#8159BB" strokeWidth="2" />
      <rect x="12" y="24" width="16" height="5" rx="2" fill="#8159BB" opacity="0.3" />
    </svg>
  ),
  portfolios: (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <rect x="4" y="4" width="14" height="14" rx="2" stroke="#8159BB" strokeWidth="2" />
      <rect x="22" y="4" width="14" height="14" rx="2" stroke="#8159BB" strokeWidth="2" />
      <rect x="4" y="22" width="14" height="14" rx="2" stroke="#8159BB" strokeWidth="2" />
      <rect x="22" y="22" width="14" height="14" rx="2" stroke="#8159BB" strokeWidth="2" />
    </svg>
  ),
  blogs: (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <rect x="8" y="4" width="24" height="30" rx="3" stroke="#8159BB" strokeWidth="2" />
      <line x1="12" y1="12" x2="28" y2="12" stroke="#8159BB" strokeWidth="2" />
      <line x1="12" y1="17" x2="28" y2="17" stroke="#8159BB" strokeWidth="2" />
      <line x1="12" y1="22" x2="22" y2="22" stroke="#8159BB" strokeWidth="2" />
      <line x1="12" y1="27" x2="26" y2="27" stroke="#8159BB" strokeWidth="2" />
    </svg>
  ),
  stores: (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <path d="M8 12 L12 6 L28 6 L32 12" stroke="#8159BB" strokeWidth="2" />
      <rect x="6" y="12" width="28" height="20" rx="3" stroke="#8159BB" strokeWidth="2" />
      <line x1="6" y1="20" x2="34" y2="20" stroke="#8159BB" strokeWidth="2" />
      <circle cx="20" cy="26" r="3" fill="#8159BB" />
    </svg>
  ),
  'link-in-bio': (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <rect x="12" y="4" width="16" height="30" rx="4" stroke="#8159BB" strokeWidth="2" />
      <line x1="17" y1="12" x2="23" y2="12" stroke="#8159BB" strokeWidth="2" />
      <line x1="17" y1="17" x2="23" y2="17" stroke="#8159BB" strokeWidth="2" />
      <line x1="17" y1="22" x2="23" y2="22" stroke="#8159BB" strokeWidth="2" />
      <circle cx="20" cy="29" r="2" fill="#8159BB" />
    </svg>
  ),
};

function GeneratorCard({ gen }) {
  return (
    <a
      href={`/generators/${gen.slug}`}
      className="gen-card"
    >
      <div className="gen-card-thumb">
        {categoryThumbnails[gen.category]}
      </div>
      <h4 className="gen-card-name">{gen.name}</h4>
      <p className="gen-card-desc">{gen.description}</p>
    </a>
  );
}

function CategorySection({ categoryKey, items, isSearching }) {
  const [expanded, setExpanded] = useState(false);
  const sectionRef = useRef(null);
  const cat = categories.find((c) => c.slug === categoryKey);
  if (!cat) return null;

  const visibleItems = expanded ? items : items.slice(0, INITIAL_VISIBLE);
  const hasMore = items.length > INITIAL_VISIBLE;

  // When searching, always show all matching items (no collapse)
  const effectiveVisible = isSearching ? items : visibleItems;
  const effectiveHasMore = isSearching ? false : hasMore;

  return (
    <div
      id={categoryKey}
      className="gen-section"
      ref={sectionRef}
      data-category={categoryKey}
    >
      <h3 className="gen-section-heading">{cat.name}</h3>
      <p className="gen-section-desc">{cat.description}</p>
      <div className="gen-grid">
        {effectiveVisible.map((gen) => (
          <GeneratorCard key={gen.slug} gen={gen} />
        ))}
      </div>
      {effectiveHasMore && (
        <button
          className="btn-show-all"
          aria-expanded={expanded}
          aria-controls={`gen-grid-${categoryKey}`}
          onClick={() => setExpanded((prev) => !prev)}
        >
          {expanded ? s.showLess : s.showAll(items.length)}
        </button>
      )}
    </div>
  );
}

export default function AllGenerators() {
  const [query, setQuery] = useState('');
  const [filteredGroups, setFilteredGroups] = useState(null);
  const [matchCount, setMatchCount] = useState(generators.length);
  const inputRef = useRef(null);
  const containerRef = useRef(null);

  const grouped = getGeneratorsByCategory();
  const categoryOrder = categories.map((c) => c.slug);

  const handleSearch = useCallback((e) => {
    const val = e.target.value;
    setQuery(val);

    if (!val.trim()) {
      setFilteredGroups(null);
      setMatchCount(generators.length);
      return;
    }

    const lower = val.toLowerCase();
    const newGroups = {};
    let count = 0;

    for (const catSlug of categoryOrder) {
      const items = grouped[catSlug] || [];
      const matched = items.filter(
        (g) =>
          g.name.toLowerCase().includes(lower) ||
          g.description.toLowerCase().includes(lower) ||
          g.category.toLowerCase().includes(lower)
      );
      if (matched.length > 0) {
        newGroups[catSlug] = matched;
        count += matched.length;
      }
    }

    setFilteredGroups(newGroups);
    setMatchCount(count);
  }, [grouped, categoryOrder]);

  const handleClear = useCallback(() => {
    setQuery('');
    setFilteredGroups(null);
    setMatchCount(generators.length);
    if (inputRef.current) inputRef.current.focus();
  }, []);

  const activeGroups = filteredGroups || grouped;
  const isSearching = query.trim().length > 0;

  return (
    <section
      id="all-generators"
      className="all-generators"
      aria-labelledby="all-generators-heading"
      ref={containerRef}
    >
      <div className="container">
        <h2 id="all-generators-heading" className="section-heading">{s.allGeneratorsHeading}</h2>
        <p className="section-subheading">{s.allGeneratorsSubheading}</p>

        <div className="search-wrapper">
          <label htmlFor="generator-search" className="sr-only">{s.searchLabel}</label>
          <div className="search-input-wrap">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" className="search-icon">
              <circle cx="9" cy="9" r="6" stroke="#636972" strokeWidth="2" />
              <line x1="13.5" y1="13.5" x2="18" y2="18" stroke="#636972" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <input
              id="generator-search"
              ref={inputRef}
              type="search"
              className="search-input"
              placeholder={s.searchPlaceholder}
              aria-label={s.searchLabel}
              value={query}
              onChange={handleSearch}
            />
          </div>
          <div className="search-meta">
            <span className="search-count">{s.searchResults(matchCount)}</span>
          </div>
        </div>

        {matchCount === 0 ? (
          <div className="search-empty">
            <h3 className="search-empty-title">{s.noResultsTitle}</h3>
            <p className="search-empty-text">{s.noResultsText}</p>
            <div className="search-empty-actions">
              <button className="btn btn-ghost" onClick={handleClear}>{s.clearSearch}</button>
              <a href="/s/ai_site_builder" className="btn btn-primary btn-small">{s.noResultsCta}</a>
            </div>
          </div>
        ) : (
          <div className="gen-sections">
            {categoryOrder.map((catSlug) => {
              const items = activeGroups[catSlug];
              if (!items || items.length === 0) return null;
              return (
                <CategorySection
                  key={catSlug}
                  categoryKey={catSlug}
                  items={items}
                  isSearching={isSearching}
                />
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
