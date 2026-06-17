import React, { useState, useRef, useCallback, useEffect } from 'react';
import { strings } from '@/data/strings';
import { allGenerators, categoryOrder, getGeneratorSlug } from '@/data/generators';

const s = strings.en;

const VISIBLE_COUNT = 6;

const categoryThumbnails = {
  websites: (
    <svg width="48" height="36" viewBox="0 0 48 36" fill="none" aria-hidden="true" className="w-full h-auto">
      <rect x="1" y="1" width="46" height="34" rx="3" stroke="#8159BB" strokeWidth="1.5" fill="none" />
      <rect x="1" y="1" width="46" height="6" rx="3" fill="#8159BB" opacity="0.1" />
      <rect x="6" y="11" width="14" height="2" rx="1" fill="#8159BB" opacity="0.3" />
      <rect x="6" y="16" width="22" height="2" rx="1" fill="#C6C9CD" />
      <rect x="6" y="21" width="18" height="2" rx="1" fill="#C6C9CD" />
      <rect x="6" y="26" width="10" height="4" rx="2" fill="url(#cgw)" />
      <defs><linearGradient id="cgw" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stopColor="#7671FF" /><stop offset="100%" stopColor="#CB0C9F" /></linearGradient></defs>
    </svg>
  ),
  'landing-pages': (
    <svg width="48" height="36" viewBox="0 0 48 36" fill="none" aria-hidden="true" className="w-full h-auto">
      <rect x="10" y="1" width="28" height="34" rx="3" stroke="#8159BB" strokeWidth="1.5" fill="none" />
      <rect x="14" y="6" width="20" height="3" rx="1" fill="#8159BB" opacity="0.3" />
      <rect x="14" y="12" width="20" height="6" rx="1" fill="#8159BB" opacity="0.08" />
      <rect x="16" y="22" width="16" height="4" rx="2" fill="url(#cglp)" />
      <defs><linearGradient id="cglp" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stopColor="#7671FF" /><stop offset="100%" stopColor="#CB0C9F" /></linearGradient></defs>
    </svg>
  ),
  portfolios: (
    <svg width="48" height="36" viewBox="0 0 48 36" fill="none" aria-hidden="true" className="w-full h-auto">
      <rect x="1" y="1" width="46" height="34" rx="3" stroke="#8159BB" strokeWidth="1.5" fill="none" />
      <rect x="5" y="6" width="16" height="10" rx="1" fill="#8159BB" opacity="0.12" />
      <rect x="27" y="6" width="16" height="2" rx="1" fill="#8159BB" opacity="0.3" />
      <rect x="27" y="11" width="16" height="2" rx="1" fill="#C6C9CD" />
      <rect x="5" y="22" width="38" height="2" rx="1" fill="#C6C9CD" />
      <rect x="5" y="27" width="28" height="2" rx="1" fill="#C6C9CD" />
    </svg>
  ),
  blogs: (
    <svg width="48" height="36" viewBox="0 0 48 36" fill="none" aria-hidden="true" className="w-full h-auto">
      <rect x="8" y="1" width="32" height="34" rx="3" stroke="#8159BB" strokeWidth="1.5" fill="none" />
      <rect x="12" y="6" width="24" height="3" rx="1" fill="#8159BB" opacity="0.3" />
      <rect x="12" y="12" width="24" height="2" rx="1" fill="#C6C9CD" />
      <rect x="12" y="17" width="24" height="2" rx="1" fill="#C6C9CD" />
      <rect x="12" y="22" width="18" height="2" rx="1" fill="#C6C9CD" />
      <rect x="12" y="27" width="24" height="2" rx="1" fill="#C6C9CD" />
    </svg>
  ),
  stores: (
    <svg width="48" height="36" viewBox="0 0 48 36" fill="none" aria-hidden="true" className="w-full h-auto">
      <path d="M6 12h36v20a3 3 0 01-3 3H9a3 3 0 01-3-3V12z" stroke="#8159BB" strokeWidth="1.5" fill="none" />
      <path d="M4 8l5-7h30l5 7H4z" stroke="#8159BB" strokeWidth="1.5" fill="#8159BB" opacity="0.08" />
      <rect x="16" y="18" width="16" height="6" rx="1" fill="#8159BB" opacity="0.12" />
    </svg>
  ),
  'link-in-bio': (
    <svg width="48" height="36" viewBox="0 0 48 36" fill="none" aria-hidden="true" className="w-full h-auto">
      <circle cx="24" cy="10" r="6" stroke="#8159BB" strokeWidth="1.5" fill="#8159BB" opacity="0.08" />
      <rect x="14" y="20" width="20" height="3" rx="1.5" fill="#8159BB" opacity="0.25" />
      <rect x="16" y="26" width="16" height="3" rx="1.5" fill="#C6C9CD" />
    </svg>
  ),
};

function CategorySubsection({ slug, searchQuery }) {
  const cat = allGenerators[slug];
  const catStrings = s.categories[slug];
  // Start expanded=true so all items are visible without JS (progressive enhancement)
  const [expanded, setExpanded] = useState(true);
  const [mounted, setMounted] = useState(false);
  const contentRef = useRef(null);

  // After mount, collapse to show only VISIBLE_COUNT (progressive enhancement)
  useEffect(() => {
    setMounted(true);
    setExpanded(false);
  }, []);

  const filteredItems = searchQuery
    ? cat.items.filter(
        (item) =>
          item.name.toLowerCase().includes(searchQuery) ||
          item.description.toLowerCase().includes(searchQuery) ||
          catStrings.name.toLowerCase().includes(searchQuery)
      )
    : cat.items;

  const isSearching = searchQuery.length > 0;
  const hasMatches = filteredItems.length > 0;

  if (isSearching && !hasMatches) return null;

  const visibleItems = isSearching
    ? filteredItems
    : expanded
      ? filteredItems
      : filteredItems.slice(0, VISIBLE_COUNT);

  const hiddenCount = filteredItems.length - VISIBLE_COUNT;
  const canExpand = mounted && !isSearching && hiddenCount > 0;

  return (
    <div id={slug} className="scroll-mt-[80px] mb-[40px]">
      <h3 className="font-heading font-bold text-[20px] md:text-[22px] text-heading m-0 mb-[5px] uppercase">
        {catStrings.name}
      </h3>
      <p className="text-body-text text-[13px] m-0 mb-[20px]">
        {cat.description}
      </p>
      <div
        ref={contentRef}
        id={`${slug}-content`}
        className="collapse-wrapper"
        style={{
          maxHeight: expanded || isSearching || !mounted ? 'none' : undefined,
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px]">
          {visibleItems.map((item) => (
            <a
              key={item.name}
              href={`/generators/${getGeneratorSlug(item.name)}`}
              className="card-base block no-underline group"
            >
              <div className="mb-[12px]">
                {categoryThumbnails[slug]}
              </div>
              <h4 className="font-heading font-bold text-[14px] text-heading-dark m-0 mb-[6px] uppercase leading-[1.3]">
                {item.name}
              </h4>
              <p className="text-body-text text-[13px] m-0 leading-[1.5]">
                {item.description}
              </p>
            </a>
          ))}
        </div>
      </div>
      {canExpand && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="btn-ghost mt-[20px]"
          aria-expanded={expanded}
          aria-controls={`${slug}-content`}
        >
          {expanded
            ? s.allGenerators.showLess
            : s.allGenerators.showAll.replace('{count}', filteredItems.length)}
        </button>
      )}
    </div>
  );
}

export default function AllGenerators() {
  const [searchQuery, setSearchQuery] = useState('');
  const [matchCount, setMatchCount] = useState(0);

  const normalizedQuery = searchQuery.trim().toLowerCase();

  const countMatches = useCallback((query) => {
    if (!query) {
      let total = 0;
      categoryOrder.forEach((slug) => {
        total += allGenerators[slug].items.length;
      });
      return total;
    }
    let count = 0;
    categoryOrder.forEach((slug) => {
      const cat = allGenerators[slug];
      const catName = s.categories[slug].name.toLowerCase();
      cat.items.forEach((item) => {
        if (
          item.name.toLowerCase().includes(query) ||
          item.description.toLowerCase().includes(query) ||
          catName.includes(query)
        ) {
          count++;
        }
      });
    });
    return count;
  }, []);

  useEffect(() => {
    setMatchCount(countMatches(normalizedQuery));
  }, [normalizedQuery, countMatches]);

  const hasNoResults = normalizedQuery.length > 0 && matchCount === 0;

  return (
    <section id="all-generators" className="py-[40px] scroll-mt-[80px]">
      <div className="section-wrapper">
        <h2 className="text-[26px] md:text-[32px] text-heading mb-[5px]">
          {s.allGenerators.heading}
        </h2>
        <p className="text-body-text text-[14px] mb-[20px]">
          {s.allGenerators.subheading}
        </p>

        {/* Search */}
        <div className="mb-[30px]">
          <div className="relative max-w-[480px]">
            <svg
              className="absolute left-[12px] top-1/2 -translate-y-1/2 text-body-text"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              aria-hidden="true"
            >
              <circle cx="8" cy="8" r="5.5" stroke="currentColor" strokeWidth="1.5" />
              <path d="M12 12l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={s.allGenerators.searchPlaceholder}
              aria-label={s.allGenerators.searchAriaLabel}
              className="w-full h-[40px] pl-[38px] pr-[12px] border border-card-border rounded-[4px] text-[14px] font-body text-heading-dark bg-white focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple"
            />
          </div>
          {normalizedQuery.length > 0 && !hasNoResults && (
            <p className="text-body-text text-[13px] mt-[8px]">
              {s.allGenerators.matchCount
                .replace('{count}', matchCount)
                .replace('{plural}', matchCount === 1 ? '' : 's')}
            </p>
          )}
        </div>

        {/* No results */}
        {hasNoResults && (
          <div className="text-center py-[40px]">
            <p className="text-body-text text-[15px] mb-[15px]">
              {s.allGenerators.noResults}
            </p>
            <div className="flex items-center justify-center gap-[15px]">
              <button
                onClick={() => setSearchQuery('')}
                className="btn-ghost"
              >
                {s.allGenerators.clearSearch}
              </button>
              <a href="/s/ai_site_builder" className="btn-primary no-underline">
                {s.allGenerators.cantFindIt}
              </a>
            </div>
          </div>
        )}

        {/* Category subsections */}
        {!hasNoResults &&
          categoryOrder.map((slug) => (
            <CategorySubsection
              key={slug}
              slug={slug}
              searchQuery={normalizedQuery}
            />
          ))}
      </div>
    </section>
  );
}
