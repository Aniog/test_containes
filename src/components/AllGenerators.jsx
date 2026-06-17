import React, { useState, useRef, useEffect, useCallback } from 'react';
import strings from '@/data/strings.en';
import { categoryData, categoryOrder } from '@/data/generators';

const VISIBLE_COUNT = 6;

const categoryThumbnails = {
  websites: (
    <svg aria-hidden="true" width="36" height="36" viewBox="0 0 36 36" fill="none">
      <rect x="3" y="5" width="30" height="22" rx="3" stroke="#8159BB" strokeWidth="1.5" fill="none" />
      <line x1="3" y1="12" x2="33" y2="12" stroke="#8159BB" strokeWidth="1" />
      <circle cx="8" cy="8.5" r="1.2" fill="#8159BB" />
      <circle cx="12" cy="8.5" r="1.2" fill="#8159BB" />
      <rect x="6" y="15" width="10" height="8" rx="1" fill="#8159BB" opacity="0.12" />
      <rect x="18" y="15" width="12" height="3" rx="1" fill="#8159BB" opacity="0.12" />
      <rect x="18" y="20" width="12" height="3" rx="1" fill="#8159BB" opacity="0.12" />
    </svg>
  ),
  'landing-pages': (
    <svg aria-hidden="true" width="36" height="36" viewBox="0 0 36 36" fill="none">
      <rect x="5" y="3" width="26" height="30" rx="3" stroke="#8159BB" strokeWidth="1.5" fill="none" />
      <rect x="9" y="7" width="18" height="6" rx="2" fill="#8159BB" opacity="0.12" />
      <rect x="11" y="16" width="14" height="2" rx="1" fill="#8159BB" opacity="0.12" />
      <rect x="11" y="20" width="14" height="2" rx="1" fill="#8159BB" opacity="0.12" />
      <rect x="12" y="25" width="12" height="3" rx="1.5" fill="#8159BB" opacity="0.2" />
    </svg>
  ),
  portfolios: (
    <svg aria-hidden="true" width="36" height="36" viewBox="0 0 36 36" fill="none">
      <rect x="3" y="7" width="30" height="22" rx="3" stroke="#8159BB" strokeWidth="1.5" fill="none" />
      <circle cx="14" cy="16" r="3.5" stroke="#8159BB" strokeWidth="1" fill="#8159BB" opacity="0.1" />
      <path d="M3 26 L12 19 L19 23 L25 20 L33 26" stroke="#8159BB" strokeWidth="1" fill="none" />
    </svg>
  ),
  blogs: (
    <svg aria-hidden="true" width="36" height="36" viewBox="0 0 36 36" fill="none">
      <rect x="7" y="3" width="22" height="30" rx="3" stroke="#8159BB" strokeWidth="1.5" fill="none" />
      <line x1="11" y1="10" x2="25" y2="10" stroke="#8159BB" strokeWidth="1.2" />
      <line x1="11" y1="14" x2="25" y2="14" stroke="#8159BB" strokeWidth="0.8" opacity="0.4" />
      <line x1="11" y1="17" x2="22" y2="17" stroke="#8159BB" strokeWidth="0.8" opacity="0.4" />
      <line x1="11" y1="20" x2="24" y2="20" stroke="#8159BB" strokeWidth="0.8" opacity="0.4" />
      <line x1="11" y1="23" x2="20" y2="23" stroke="#8159BB" strokeWidth="0.8" opacity="0.4" />
      <rect x="11" y="5" width="7" height="3" rx="1" fill="#8159BB" opacity="0.2" />
    </svg>
  ),
  stores: (
    <svg aria-hidden="true" width="36" height="36" viewBox="0 0 36 36" fill="none">
      <path d="M7 14 L5 30 H31 L29 14" stroke="#8159BB" strokeWidth="1.5" fill="none" />
      <path d="M7 14 L10 6 H26 L29 14" stroke="#8159BB" strokeWidth="1.5" fill="none" />
      <line x1="5" y1="14" x2="31" y2="14" stroke="#8159BB" strokeWidth="1.5" />
      <rect x="13" y="18" width="10" height="12" rx="1" stroke="#8159BB" strokeWidth="1" fill="#8159BB" opacity="0.08" />
      <circle cx="18" cy="24" r="1.5" fill="#8159BB" opacity="0.25" />
    </svg>
  ),
  'link-in-bio': (
    <svg aria-hidden="true" width="36" height="36" viewBox="0 0 36 36" fill="none">
      <circle cx="18" cy="18" r="12" stroke="#8159BB" strokeWidth="1.5" fill="none" />
      <circle cx="18" cy="13" r="2.5" fill="#8159BB" opacity="0.2" />
      <line x1="12" y1="18" x2="24" y2="18" stroke="#8159BB" strokeWidth="1" />
      <line x1="12" y1="22" x2="24" y2="22" stroke="#8159BB" strokeWidth="1" />
      <line x1="12" y1="26" x2="20" y2="26" stroke="#8159BB" strokeWidth="1" />
    </svg>
  ),
};

function Subsection({ catKey, searchQuery }) {
  const cat = categoryData[catKey];
  const s = strings.allGenerators;
  const [expanded, setExpanded] = useState(false);
  const gridRef = useRef(null);
  const extrasRef = useRef(null);

  const filtered = searchQuery
    ? cat.generators.filter((g) => {
        const q = searchQuery.toLowerCase();
        return (
          g.name.toLowerCase().includes(q) ||
          g.description.toLowerCase().includes(q) ||
          cat.name.toLowerCase().includes(q)
        );
      })
    : cat.generators;

  const hasMore = cat.generators.length > VISIBLE_COUNT;
  const hiddenCount = cat.generators.length - VISIBLE_COUNT;

  const visibleFiltered = searchQuery
    ? filtered
    : (expanded ? cat.generators : cat.generators.slice(0, VISIBLE_COUNT));

  const hiddenFiltered = searchQuery
    ? []
    : (expanded ? [] : cat.generators.slice(VISIBLE_COUNT));

  if (searchQuery && filtered.length === 0) return null;

  const controlId = `subsection-grid-${catKey}`;
  const extrasId = `${controlId}-extras`;

  return (
    <div id={catKey} className="mb-[40px]" style={{ scrollMarginTop: '80px' }}>
      <h3
        id={`${catKey}-heading`}
        className="font-heading font-bold text-[20px] md:text-[24px] mb-[5px]"
        style={{ color: 'var(--heading-text)' }}
      >
        {cat.name}
      </h3>
      <p className="text-[13px] mb-[20px]" style={{ color: 'var(--body-text)' }}>
        {cat.description}
      </p>
      <div
        id={controlId}
        ref={gridRef}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px]"
      >
        {visibleFiltered.map((gen) => (
          <a
            key={gen.slug}
            href={`/generators/${gen.slug}`}
            className="card block group"
          >
            <div className="mb-[10px]">
              {categoryThumbnails[catKey]}
            </div>
            <h4 className="font-heading font-bold text-[14px] mb-[6px]" style={{ color: 'var(--heading-text)' }}>
              {gen.name}
            </h4>
            <p className="text-[13px]" style={{ color: 'var(--body-text)' }}>
              {gen.description}
            </p>
          </a>
        ))}
      </div>
      {hiddenFiltered.length > 0 && (
        <div
          id={extrasId}
          ref={extrasRef}
          className="subsection-extras"
          aria-hidden={!expanded}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px] pt-[20px]">
            {hiddenFiltered.map((gen) => (
              <a
                key={gen.slug}
                href={`/generators/${gen.slug}`}
                className="card block group"
                tabIndex={expanded ? 0 : -1}
              >
                <div className="mb-[10px]">
                  {categoryThumbnails[catKey]}
                </div>
                <h4 className="font-heading font-bold text-[14px] mb-[6px]" style={{ color: 'var(--heading-text)' }}>
                  {gen.name}
                </h4>
                <p className="text-[13px]" style={{ color: 'var(--body-text)' }}>
                  {gen.description}
                </p>
              </a>
            ))}
          </div>
        </div>
      )}
      {hasMore && !searchQuery && (
        <div className="mt-[15px] text-center">
          <button
            className="btn-ghost text-[13px]"
            aria-expanded={expanded}
            aria-controls={extrasId}
            onClick={() => setExpanded(!expanded)}
          >
            {expanded
              ? s.showLess
              : s.showAll.replace('{count}', hiddenCount)}
          </button>
        </div>
      )}
    </div>
  );
}

export default function AllGenerators() {
  const s = strings.allGenerators;
  const [searchQuery, setSearchQuery] = useState('');

  const allGenerators = categoryOrder.flatMap((key) =>
    categoryData[key].generators.map((g) => ({
      ...g,
      category: categoryData[key].name,
      catKey: key,
    }))
  );

  const matchCount = searchQuery
    ? allGenerators.filter((g) => {
        const q = searchQuery.toLowerCase();
        return (
          g.name.toLowerCase().includes(q) ||
          g.description.toLowerCase().includes(q) ||
          g.category.toLowerCase().includes(q)
        );
      }).length
    : allGenerators.length;

  const hasNoResults = searchQuery && matchCount === 0;

  return (
    <section id="all-generators" className="w-full py-[40px]" style={{ backgroundColor: 'var(--white)' }}>
      <div className="section-container">
        <h2 className="font-heading font-bold text-[26px] md:text-[32px] text-center mb-[10px]" style={{ color: 'var(--heading-text)' }}>
          {s.heading}
        </h2>
        <p className="text-center mb-[30px] text-[15px]" style={{ color: 'var(--body-text)' }}>
          {s.subheading}
        </p>

        {/* Search */}
        <div className="mb-[30px]">
          <div className="relative inline-block w-full max-w-[480px]">
            <svg aria-hidden="true" width="18" height="18" viewBox="0 0 18 18" fill="none" className="absolute left-[12px] top-[11px]" style={{ color: '#A0A4A8' }}>
              <circle cx="8" cy="8" r="5.5" stroke="currentColor" strokeWidth="1.5" />
              <line x1="12" y1="12" x2="16" y2="16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <input
              type="text"
              className="search-input"
              placeholder={s.searchPlaceholder}
              aria-label={s.searchAriaLabel}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          {searchQuery && (
            <p className="mt-[8px] text-[13px]" style={{ color: 'var(--body-text)' }}>
              {s.matchCount.replace('{count}', matchCount)}
            </p>
          )}
        </div>

        {/* No results */}
        {hasNoResults && (
          <div className="text-center py-[40px]">
            <p className="text-[15px] mb-[15px]" style={{ color: 'var(--body-text)' }}>
              {s.noResults}
            </p>
            <button
              className="btn-ghost text-[13px] mr-[10px]"
              onClick={() => setSearchQuery('')}
            >
              {s.clearSearch}
            </button>
            <a href="/s/ai_site_builder" className="text-[13px] underline" style={{ color: 'var(--brand-purple)' }}>
              {s.cantFindLink}
            </a>
          </div>
        )}

        {/* Category subsections */}
        {!hasNoResults && categoryOrder.map((key) => (
          <Subsection key={key} catKey={key} searchQuery={searchQuery} />
        ))}
      </div>
    </section>
  );
}
