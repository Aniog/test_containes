import React, { useState, useMemo, useRef, useEffect } from 'react';
import strings from '@/data/strings.en.js';
import { categories, directoryGenerators } from '@/data/generators.js';

const DEFAULT_VISIBLE = 6;

function CategoryThumbnail() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true" style={{ marginBlockEnd: '8px' }}>
      <rect x="4" y="4" width="32" height="24" rx="3" stroke="#8159BB" strokeWidth="1.2" opacity="0.5" />
      <rect x="4" y="28" width="12" height="4" rx="1" fill="#8159BB" opacity="0.3" />
      <rect x="18" y="28" width="18" height="4" rx="1" fill="#8159BB" opacity="0.15" />
      <rect x="4" y="34" width="8" height="3" rx="1" fill="#8159BB" opacity="0.1" />
      <rect x="14" y="34" width="22" height="3" rx="1" fill="#8159BB" opacity="0.1" />
    </svg>
  );
}

function GeneratorCard({ generator }) {
  return (
    <a href={`/generators/${generator.slug}`} className="card-link">
      <div className="card">
        <CategoryThumbnail />
        <h3
          style={{
            fontSize: '15px',
            marginBlockEnd: '6px',
            color: 'var(--color-hero-dark)',
            lineHeight: 1.2,
          }}
        >
          {generator.name}
        </h3>
        <p style={{ color: 'var(--color-body)', fontSize: '13px', margin: 0 }}>
          {generator.description}
        </p>
      </div>
    </a>
  );
}

function CategorySection({ category, generators, isFiltered }) {
  const [expanded, setExpanded] = useState(false);
  const containerRef = useRef(null);
  const collapsibleRef = useRef(null);

  const visibleCount = isFiltered ? generators.length : DEFAULT_VISIBLE;
  const hasMore = generators.length > visibleCount;
  const visibleGenerators = expanded ? generators : generators.slice(0, visibleCount);
  const hiddenCount = generators.length - visibleCount;

  useEffect(() => {
    if (!collapsibleRef.current || !containerRef.current) return;

    const collapsible = collapsibleRef.current;
    const firstBatch = collapsible.querySelector('.card-link');
    if (!firstBatch) return;

    const cardHeight = firstBatch.offsetHeight + 20; // 20px gap
    const rows = Math.ceil(hiddenCount / 3);
    const collapsedHeight = rows * cardHeight;

    if (!expanded) {
      collapsible.style.maxHeight = '0px';
    } else {
      collapsible.style.maxHeight = collapsedHeight + 'px';
    }
  }, [expanded, hiddenCount]);

  if (generators.length === 0) return null;

  return (
    <section
      id={category.slug}
      style={{ marginBlockEnd: '40px' }}
      ref={containerRef}
    >
      <h3
        style={{
          fontSize: '18px',
          marginBlockEnd: '8px',
          color: 'var(--color-heading)',
        }}
      >
        {category.name}
      </h3>
      <p style={{ color: 'var(--color-body)', fontSize: '14px', marginBlockEnd: '20px' }}>
        {category.description}
      </p>
      <div className="grid-3">
        {visibleGenerators.map((gen) => (
          <GeneratorCard key={gen.slug} generator={gen} />
        ))}
      </div>
      {hasMore && !isFiltered && (
        <>
          <div className="collapsible-cards collapsed-cards" ref={collapsibleRef}>
            <div className="grid-3" style={{ paddingBlockStart: '20px' }}>
              {generators.slice(visibleCount).map((gen) => (
                <GeneratorCard key={gen.slug} generator={gen} />
              ))}
            </div>
          </div>
          <button
            type="button"
            className="show-all-btn"
            aria-expanded={expanded}
            aria-controls={undefined}
            onClick={() => setExpanded((prev) => !prev)}
          >
            <span>{expanded ? strings.showLess : strings.showAll(generators.length)}</span>
            <svg
              className="show-all-icon"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              aria-hidden="true"
            >
              <path d="M3 5l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </>
      )}
    </section>
  );
}

export default function AllGenerators() {
  const [query, setQuery] = useState('');
  const searchInputRef = useRef(null);

  const filteredData = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) {
      return Object.entries(directoryGenerators).map(([slug, gens]) => ({
        slug,
        category: categories.find((c) => c.slug === slug),
        generators: gens,
      }));
    }

    const results = [];
    for (const [slug, gens] of Object.entries(directoryGenerators)) {
      const matched = gens.filter(
        (g) =>
          g.name.toLowerCase().includes(q) ||
          g.description.toLowerCase().includes(q) ||
          slug.replace('-', ' ').includes(q)
      );
      if (matched.length > 0) {
        results.push({
          slug,
          category: categories.find((c) => c.slug === slug),
          generators: matched,
        });
      }
    }
    return results;
  }, [query]);

  const totalMatches = filteredData.reduce((sum, g) => sum + g.generators.length, 0);
  const isFiltering = query.trim().length > 0;

  return (
    <section id="all-generators" className="section" style={{ backgroundColor: 'var(--color-light-bg)' }}>
      <div className="container">
        <h2 className="section-title">{strings.allHeading}</h2>
        <p className="section-subtitle">{strings.allSubheading}</p>

        <div className="search-wrapper">
          <svg
            className="search-icon"
            viewBox="0 0 18 18"
            fill="none"
            aria-hidden="true"
          >
            <circle cx="7.5" cy="7.5" r="5.5" stroke="currentColor" strokeWidth="1.5" />
            <path d="M11.5 11.5l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <input
            ref={searchInputRef}
            type="search"
            className="search-input"
            placeholder={strings.searchPlaceholder}
            aria-label={strings.searchAriaLabel}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        {isFiltering && (
          <p className="search-count">{strings.searchCount(totalMatches)}</p>
        )}

        {filteredData.length === 0 && isFiltering ? (
          <div className="empty-state">
            <p>{strings.emptySearch}</p>
            <button
              type="button"
              className="btn btn-ghost"
              onClick={() => setQuery('')}
            >
              {strings.emptySearchCta}
            </button>
            <p style={{ marginBlockStart: '12px' }}>
              <a href="/s/ai_site_builder" style={{ color: 'var(--color-brand-purple)', textDecoration: 'underline' }}>
                {strings.emptySearchFallback}
              </a>
            </p>
          </div>
        ) : (
          filteredData.map(({ slug, category, generators }) => {
            if (!category) return null;
            return (
              <CategorySection
                key={slug}
                category={category}
                generators={generators}
                isFiltered={isFiltering}
              />
            );
          })
        )}
      </div>
    </section>
  );
}