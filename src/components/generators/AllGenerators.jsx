import React, { useState, useRef, useEffect, useCallback } from 'react';
import { SearchIcon, CategoryThumbnail } from './Icons';
import strings from '../../strings';

const s = strings.en;
const INITIAL_VISIBLE = 6;

const CategorySection = ({ catId, category, searchQuery }) => {
  const [expanded, setExpanded] = useState(false);
  const [jsReady, setJsReady] = useState(false);

  const generators = category.generators;
  const needsToggle = generators.length > INITIAL_VISIBLE;

  // Mark JS as ready after mount so progressive collapse kicks in
  useEffect(() => {
    // Use rAF so React has committed the DOM before we add the collapse class
    const frame = requestAnimationFrame(() => setJsReady(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  // Filter generators based on search
  const matchesSearch = (gen) => {
    if (!searchQuery) return true;
    const q = searchQuery.toLowerCase();
    return (
      gen.name.toLowerCase().includes(q) ||
      gen.description.toLowerCase().includes(q) ||
      category.title.toLowerCase().includes(q)
    );
  };

  const matchingGenerators = generators.filter(matchesSearch);
  const hasSearchMatch = matchingGenerators.length > 0;

  // If searching and no matches, hide the whole subsection
  if (searchQuery && !hasSearchMatch) {
    return null;
  }

  // Determine if cards should be collapsed (only after JS initializes, and only when not searching)
  const isCollapsed = jsReady && !searchQuery && !expanded && needsToggle;
  const isSearching = !!searchQuery;

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="mb-[30px]" id={catId}>
      <h3 className="text-[20px] md:text-[22px] text-[var(--color-heading-text)] mb-[6px]" style={{ fontFamily: 'var(--font-heading)' }}>
        {category.title}
      </h3>
      <p className="text-[14px] text-[var(--color-body-text)] mb-[20px]">
        {category.description}
      </p>

      {/* All cards are always in the DOM for static rendering */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px]">
        {generators.map((gen, index) => {
          const isBeyondInitial = index >= INITIAL_VISIBLE;
          const isMatch = matchesSearch(gen);

          // When searching: hide non-matching cards entirely (they stay in DOM)
          if (isSearching && !isMatch) {
            return (
              <a
                key={gen.slug}
                href={`/generators/${gen.slug}`}
                className="card-link card-hover block bg-white border border-[var(--color-card-border)] rounded-[3px] p-[20px] no-underline"
                aria-hidden="true"
                style={{ display: 'none' }}
              >
                <div className="mb-[10px]">
                  <CategoryThumbnail category={catId} size={36} />
                </div>
                <h4 className="text-[14px] font-bold text-[var(--color-heading-text)] uppercase mb-[6px]" style={{ fontFamily: 'var(--font-heading)', margin: 0, marginBottom: '6px' }}>
                  {gen.name}
                </h4>
                <p className="text-[13px] text-[var(--color-body-text)] leading-[1.5]" style={{ margin: 0 }}>
                  {gen.description}
                </p>
              </a>
            );
          }

          // Not searching: after JS loads, collapse items beyond initial count
          if (!isSearching && isBeyondInitial && isCollapsed) {
            return (
              <a
                key={gen.slug}
                href={`/generators/${gen.slug}`}
                className="card-link block bg-white border border-[var(--color-card-border)] rounded-[3px] p-[20px] no-underline overflow-hidden transition-[max-height,opacity,margin,padding] duration-300 ease-in-out"
                style={{ maxHeight: 0, opacity: 0, padding: 0, margin: 0, borderWidth: 0 }}
              >
                <div className="mb-[10px]">
                  <CategoryThumbnail category={catId} size={36} />
                </div>
                <h4 className="text-[14px] font-bold text-[var(--color-heading-text)] uppercase mb-[6px]" style={{ fontFamily: 'var(--font-heading)', margin: 0, marginBottom: '6px' }}>
                  {gen.name}
                </h4>
                <p className="text-[13px] text-[var(--color-body-text)] leading-[1.5]" style={{ margin: 0 }}>
                  {gen.description}
                </p>
              </a>
            );
          }

          // Visible card
          return (
            <a
              key={gen.slug}
              href={`/generators/${gen.slug}`}
              className="card-link card-hover block bg-white border border-[var(--color-card-border)] rounded-[3px] p-[20px] no-underline transition-[max-height,opacity] duration-300 ease-in-out"
            >
              <div className="mb-[10px]">
                <CategoryThumbnail category={catId} size={36} />
              </div>
              <h4 className="text-[14px] font-bold text-[var(--color-heading-text)] uppercase mb-[6px]" style={{ fontFamily: 'var(--font-heading)', margin: 0, marginBottom: '6px' }}>
                {gen.name}
              </h4>
              <p className="text-[13px] text-[var(--color-body-text)] leading-[1.5]" style={{ margin: 0 }}>
                {gen.description}
              </p>
            </a>
          );
        })}
      </div>

      {/* Show all toggle - only when not searching and there are more items */}
      {!searchQuery && needsToggle && (
        <div className="mt-[15px] text-center">
          <button
            type="button"
            onClick={handleToggle}
            className="ghost-btn inline-flex items-center justify-center h-[36px] px-[20px] rounded-[4px] text-[13px] uppercase tracking-wide font-bold"
            style={{ fontFamily: 'var(--font-heading)' }}
            aria-expanded={expanded}
            aria-controls={`${catId}-grid`}
          >
            {expanded ? s.showLess : s.showAll(generators.length - INITIAL_VISIBLE)}
          </button>
        </div>
      )}
    </div>
  );
};

const AllGenerators = ({ generators, categories }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [resultCount, setResultCount] = useState(0);
  const containerRef = useRef(null);

  // Count all matching generators across all categories
  const totalGenerators = Object.values(generators).reduce((sum, cat) => sum + cat.generators.length, 0);

  useEffect(() => {
    if (!searchQuery) {
      setResultCount(0);
      return;
    }
    const q = searchQuery.toLowerCase();
    let count = 0;
    Object.values(generators).forEach((cat) => {
      cat.generators.forEach((gen) => {
        const match =
          gen.name.toLowerCase().includes(q) ||
          gen.description.toLowerCase().includes(q) ||
          cat.title.toLowerCase().includes(q);
        if (match) count++;
      });
    });
    setResultCount(count);
  }, [searchQuery, generators]);

  const handleClear = useCallback(() => {
    setSearchQuery('');
  }, []);

  return (
    <section id="all-generators" className="py-[40px] bg-[var(--color-light-bg)]">
      <div className="content-container">
        <div className="text-center mb-[10px]">
          <h2 className="text-[24px] md:text-[28px] text-[var(--color-heading-text)]">
            {s.allTitle}
          </h2>
          <p className="mt-[10px] text-[15px] text-[var(--color-body-text)]">
            {s.allSubtitle}
          </p>
        </div>

        {/* Search input */}
        <div className="max-w-[480px] mx-auto mt-[20px] mb-[30px] relative">
          <SearchIcon className="absolute left-[14px] top-1/2 -translate-y-1/2 text-[var(--color-card-border)]" />
          <input
            type="text"
            placeholder={s.searchPlaceholder}
            aria-label={s.searchLabel}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full h-[44px] pl-[42px] pr-[14px] border border-[var(--color-card-border)] rounded-[4px] text-[14px] text-[var(--color-heading-text)] bg-white placeholder:text-[var(--color-card-border)] focus:outline-none focus:border-[var(--color-brand-purple)] transition-colors"
          />
          {searchQuery && (
            <span className="absolute right-[14px] top-1/2 -translate-y-1/2 text-[12px] text-[var(--color-body-text)]">
              {s.searchMatch(resultCount)}
            </span>
          )}
        </div>

        {/* Category subsections */}
        <div ref={containerRef}>
          {Object.entries(generators).map(([catId, category]) => (
            <CategorySection
              key={catId}
              catId={catId}
              category={category}
              searchQuery={searchQuery}
            />
          ))}
        </div>

        {/* No results */}
        {searchQuery && resultCount === 0 && (
          <div className="text-center py-[40px]">
            <p className="text-[15px] text-[var(--color-body-text)] mb-[15px]">
              {s.noResults}
            </p>
            <button
              type="button"
              onClick={handleClear}
              className="ghost-btn inline-flex items-center justify-center h-[36px] px-[20px] rounded-[4px] text-[13px] uppercase tracking-wide font-bold mb-[10px]"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              {s.clearSearch}
            </button>
            <p className="text-[13px] text-[var(--color-body-text)]">
              <a href={s.builderPath} className="text-[var(--color-brand-purple)] hover:underline">
                {s.cantFind}
              </a>
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default AllGenerators;
