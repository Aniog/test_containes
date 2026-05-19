import React, { useState, useMemo } from 'react';
import { strings } from '@/data/strings';
import { allGenerators, categories } from '@/data/generators';

const t = strings.en;

const INITIAL_VISIBLE = 6;

const categoryThumbnails = {
  websites: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <rect x="3" y="6" width="26" height="20" rx="2" stroke="#8159BB" strokeWidth="1.2" />
      <line x1="3" y1="11" x2="29" y2="11" stroke="#8159BB" strokeWidth="1.2" />
    </svg>
  ),
  'landing-pages': (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <rect x="7" y="3" width="18" height="26" rx="2" stroke="#8159BB" strokeWidth="1.2" />
      <rect x="10" y="8" width="12" height="3" rx="1" fill="#8159BB" opacity="0.3" />
      <rect x="11" y="22" width="10" height="3" rx="1.5" fill="#8159BB" opacity="0.4" />
    </svg>
  ),
  portfolios: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <rect x="3" y="6" width="11" height="8" rx="1.5" stroke="#8159BB" strokeWidth="1.2" />
      <rect x="18" y="6" width="11" height="8" rx="1.5" stroke="#8159BB" strokeWidth="1.2" />
      <rect x="3" y="18" width="11" height="8" rx="1.5" stroke="#8159BB" strokeWidth="1.2" />
      <rect x="18" y="18" width="11" height="8" rx="1.5" stroke="#8159BB" strokeWidth="1.2" />
    </svg>
  ),
  blogs: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <rect x="5" y="4" width="22" height="24" rx="2" stroke="#8159BB" strokeWidth="1.2" />
      <line x1="9" y1="11" x2="23" y2="11" stroke="#8159BB" strokeWidth="1.2" opacity="0.4" />
      <line x1="9" y1="15" x2="21" y2="15" stroke="#8159BB" strokeWidth="1.2" opacity="0.3" />
      <line x1="9" y1="19" x2="19" y2="19" stroke="#8159BB" strokeWidth="1.2" opacity="0.3" />
    </svg>
  ),
  stores: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path d="M6 13 L6 28 L26 28 L26 13" stroke="#8159BB" strokeWidth="1.2" />
      <path d="M3 13 L6 5 L26 5 L29 13 Z" stroke="#8159BB" strokeWidth="1.2" />
    </svg>
  ),
  'link-in-bio': (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <circle cx="16" cy="9" r="5" stroke="#8159BB" strokeWidth="1.2" />
      <rect x="8" y="17" width="16" height="3.5" rx="1.75" stroke="#8159BB" strokeWidth="1.2" />
      <rect x="8" y="22" width="16" height="3.5" rx="1.75" stroke="#8159BB" strokeWidth="1.2" />
      <rect x="8" y="27" width="16" height="3.5" rx="1.75" stroke="#8159BB" strokeWidth="1.2" />
    </svg>
  ),
};

const SearchIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true" className="text-body-text">
    <circle cx="8" cy="8" r="5.5" stroke="currentColor" strokeWidth="1.5" />
    <line x1="12" y1="12" x2="16" y2="16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const CategorySubsection = ({ categoryId, categoryData, searchQuery }) => {
  const [expanded, setExpanded] = useState(false);
  const isSearching = searchQuery.length > 0;

  const filteredGenerators = useMemo(() => {
    if (!isSearching) return categoryData.generators;
    const q = searchQuery.toLowerCase();
    return categoryData.generators.filter(
      (gen) =>
        gen.name.toLowerCase().includes(q) ||
        gen.description.toLowerCase().includes(q) ||
        categoryData.name.toLowerCase().includes(q)
    );
  }, [categoryData, searchQuery, isSearching]);

  if (isSearching && filteredGenerators.length === 0) {
    return null;
  }

  const showToggle = !isSearching && categoryData.generators.length > INITIAL_VISIBLE;
  const visibleGenerators = isSearching
    ? filteredGenerators
    : categoryData.generators.slice(0, INITIAL_VISIBLE);
  const hiddenGenerators = !isSearching
    ? categoryData.generators.slice(INITIAL_VISIBLE)
    : [];

  const subsectionId = `generators-${categoryId}`;

  return (
    <div id={categoryId} className="scroll-mt-[70px]">
      <h3 className="font-heading font-bold uppercase text-heading-section text-lg md:text-xl leading-tight mb-1.5">
        {categoryData.name}
      </h3>
      <p className="text-body-text text-sm mb-5">
        {categoryData.description}
      </p>
      <div id={subsectionId}>
        {/* Always-visible cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {visibleGenerators.map((gen) => (
            <a
              key={gen.slug}
              href={`/generators/${gen.slug}`}
              className="block bg-white border border-card-border rounded p-5 transition-shadow transition-colors hover:shadow-md hover:border-brand-purple group"
            >
              <div className="mb-2.5">
                {categoryThumbnails[categoryId]}
              </div>
              <h4 className="font-heading font-bold uppercase text-heading-section text-sm mb-1 group-hover:text-brand-purple transition-colors">
                {gen.name}
              </h4>
              <p className="text-body-text text-sm leading-normal">
                {gen.description}
              </p>
            </a>
          ))}
        </div>
        {/* Collapsible cards - in DOM for SEO, hidden via CSS transition */}
        {hiddenGenerators.length > 0 && (
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 overflow-hidden transition-all duration-300"
            style={{
              maxHeight: expanded ? `${hiddenGenerators.length * 200}px` : '0px',
              opacity: expanded ? 1 : 0,
              marginTop: expanded ? '20px' : '0px',
            }}
          >
            {hiddenGenerators.map((gen) => (
              <a
                key={gen.slug}
                href={`/generators/${gen.slug}`}
                className="block bg-white border border-card-border rounded p-5 transition-shadow transition-colors hover:shadow-md hover:border-brand-purple group"
                tabIndex={expanded ? 0 : -1}
              >
                <div className="mb-2.5">
                  {categoryThumbnails[categoryId]}
                </div>
                <h4 className="font-heading font-bold uppercase text-heading-section text-sm mb-1 group-hover:text-brand-purple transition-colors">
                  {gen.name}
                </h4>
                <p className="text-body-text text-sm leading-normal">
                  {gen.description}
                </p>
              </a>
            ))}
          </div>
        )}
      </div>
      {showToggle && (
        <button
          type="button"
          onClick={() => setExpanded(!expanded)}
          aria-expanded={expanded}
          aria-controls={subsectionId}
          className="mt-5 text-sm font-heading font-bold uppercase text-brand-purple border border-brand-purple rounded px-4 py-2 bg-transparent transition-colors hover:bg-brand-purple hover:text-white"
        >
          {expanded
            ? t.allGenerators.showLess
            : t.allGenerators.showAll(categoryData.generators.length)}
        </button>
      )}
    </div>
  );
};

const AllGenerators = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const totalMatches = useMemo(() => {
    if (!searchQuery) return null;
    const q = searchQuery.toLowerCase();
    let count = 0;
    Object.entries(allGenerators).forEach(([, catData]) => {
      catData.generators.forEach((gen) => {
        if (
          gen.name.toLowerCase().includes(q) ||
          gen.description.toLowerCase().includes(q) ||
          catData.name.toLowerCase().includes(q)
        ) {
          count++;
        }
      });
    });
    return count;
  }, [searchQuery]);

  return (
    <section id="all-generators" className="py-10 bg-white scroll-mt-[60px]">
      <div className="max-w-[1200px] mx-auto px-5">
        <h2 className="font-heading font-bold uppercase text-heading-section text-2xl md:text-3xl leading-tight mb-2.5">
          {t.allGenerators.heading}
        </h2>
        <p className="text-body-text text-sm mb-8">
          {t.allGenerators.subheading}
        </p>

        {/* Search input */}
        <div className="mb-8 max-w-[480px]">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
              <SearchIcon />
            </div>
            <input
              type="search"
              aria-label="Search generators"
              placeholder={t.allGenerators.searchPlaceholder}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-10 pl-10 pr-4 border border-card-border rounded text-sm text-heading-dark bg-white placeholder:text-body-text focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple transition-colors"
            />
          </div>
          {searchQuery && totalMatches !== null && totalMatches > 0 && (
            <p className="mt-2 text-sm text-body-text">
              {t.allGenerators.matchCount(totalMatches)}
            </p>
          )}
          {searchQuery && totalMatches === 0 && (
            <div className="mt-4 p-5 border border-card-border rounded bg-bg-light">
              <p className="text-body-text text-sm mb-2.5">
                {t.allGenerators.noResults}
              </p>
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="text-sm font-heading font-bold uppercase text-brand-purple border border-brand-purple rounded px-3 py-1.5 bg-transparent transition-colors hover:bg-brand-purple hover:text-white mr-4"
              >
                {t.allGenerators.clearSearch}
              </button>
              <a
                href="/s/ai_site_builder"
                className="text-sm text-brand-purple hover:underline"
              >
                {t.allGenerators.cantFind}
              </a>
            </div>
          )}
        </div>

        {/* Category subsections */}
        <div className="space-y-10">
          {categories.map((cat) => (
            <CategorySubsection
              key={cat.id}
              categoryId={cat.id}
              categoryData={allGenerators[cat.id]}
              searchQuery={searchQuery}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllGenerators;
