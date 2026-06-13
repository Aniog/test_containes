import { useState, useRef, useEffect, useCallback } from 'react';
import strings from '../strings.en.js';
import { categories, allGenerators } from '../data.js';

const INITIAL_VISIBLE = 6;

const categoryIcons = {
  websites: (
    <svg width="32" height="24" viewBox="0 0 40 30" fill="none" aria-hidden="true">
      <rect x="2" y="2" width="36" height="26" rx="3" stroke="#8159BB" strokeWidth="1.5" />
      <circle cx="20" cy="15" r="5" stroke="#8159BB" strokeWidth="1.5" />
      <line x1="2" y1="15" x2="15" y2="15" stroke="#8159BB" strokeWidth="1.5" />
      <line x1="25" y1="15" x2="38" y2="15" stroke="#8159BB" strokeWidth="1.5" />
      <line x1="20" y1="2" x2="20" y2="10" stroke="#8159BB" strokeWidth="1.5" />
      <line x1="20" y1="20" x2="20" y2="28" stroke="#8159BB" strokeWidth="1.5" />
    </svg>
  ),
  'landing-pages': (
    <svg width="32" height="24" viewBox="0 0 40 30" fill="none" aria-hidden="true">
      <rect x="3" y="3" width="34" height="24" rx="3" stroke="#8159BB" strokeWidth="1.5" />
      <rect x="8" y="8" width="14" height="3" rx="1.5" fill="#8159BB" />
      <rect x="8" y="14" width="24" height="2" rx="1" fill="#E2E4E7" />
      <rect x="8" y="18" width="18" height="2" rx="1" fill="#E2E4E7" />
      <rect x="8" y="22" width="20" height="2" rx="1" fill="#E2E4E7" />
    </svg>
  ),
  portfolios: (
    <svg width="32" height="24" viewBox="0 0 40 30" fill="none" aria-hidden="true">
      <rect x="3" y="2" width="34" height="26" rx="3" stroke="#8159BB" strokeWidth="1.5" />
      <rect x="7" y="6" width="13" height="11" rx="2" fill="#E2E4E7" />
      <rect x="22" y="6" width="9" height="7" rx="2" fill="#E2E4E7" />
      <rect x="22" y="15" width="9" height="9" rx="2" fill="#E2E4E7" />
      <rect x="7" y="19" width="13" height="5" rx="2" fill="#E2E4E7" />
    </svg>
  ),
  blogs: (
    <svg width="32" height="24" viewBox="0 0 40 30" fill="none" aria-hidden="true">
      <rect x="4" y="2" width="32" height="26" rx="3" stroke="#8159BB" strokeWidth="1.5" />
      <line x1="9" y1="9" x2="31" y2="9" stroke="#E2E4E7" strokeWidth="1.5" />
      <line x1="9" y1="14" x2="26" y2="14" stroke="#E2E4E7" strokeWidth="1.5" />
      <line x1="9" y1="19" x2="28" y2="19" stroke="#E2E4E7" strokeWidth="1.5" />
      <rect x="9" y="23" width="22" height="3" rx="1.5" fill="#8159BB" opacity="0.3" />
    </svg>
  ),
  stores: (
    <svg width="32" height="24" viewBox="0 0 40 30" fill="none" aria-hidden="true">
      <rect x="6" y="12" width="28" height="16" rx="3" stroke="#8159BB" strokeWidth="1.5" />
      <rect x="12" y="4" width="16" height="10" rx="2" stroke="#8159BB" strokeWidth="1.5" />
      <circle cx="20" cy="20" r="3" stroke="#8159BB" strokeWidth="1.5" />
      <line x1="20" y1="23" x2="20" y2="25" stroke="#8159BB" strokeWidth="1.5" />
      <line x1="20" y1="15" x2="20" y2="17" stroke="#8159BB" strokeWidth="1.5" />
      <line x1="17" y1="20" x2="12" y2="20" stroke="#8159BB" strokeWidth="1.5" />
      <line x1="23" y1="20" x2="28" y2="20" stroke="#8159BB" strokeWidth="1.5" />
    </svg>
  ),
  'link-in-bio': (
    <svg width="32" height="24" viewBox="0 0 40 30" fill="none" aria-hidden="true">
      <circle cx="13" cy="15" r="8" stroke="#8159BB" strokeWidth="1.5" />
      <path d="M19 9l12 0a2 2 0 012 2l0 7a2 2 0 01-2 2l-12 0" stroke="#8159BB" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="19" y1="15" x2="22" y2="15" stroke="#8159BB" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
};

function CategorySection({ cat, generators, isFiltered, visibleCount }) {
  const [expanded, setExpanded] = useState(false);
  const listRef = useRef(null);
  const panelId = `cat-panel-${cat.slug}`;

  const displayGenerators = expanded ? generators : generators.slice(0, visibleCount);
  const extraCount = generators.length - visibleCount;
  const showToggle = extraCount > 0;

  return (
    <section id={cat.slug} className="mb-[30px]">
      <div className="flex items-center gap-[10px] mb-[5px]">
        <div className="flex-shrink-0">{categoryIcons[cat.slug]}</div>
        <h3 className="text-[18px] md:text-[20px] text-heading-gray m-0">
          {cat.name}
        </h3>
      </div>
      <p className="text-[14px] text-body-gray m-0 mb-[20px]">
        {cat.description}
      </p>
      <div ref={listRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px]">
        {displayGenerators.map((gen) => (
          <a
            key={gen.slug}
            href={`/generators/${gen.slug}`}
            className="card flex flex-col no-underline text-inherit group"
          >
            <span className="font-heading font-bold text-[16px] uppercase text-heading-dark leading-tight mb-[5px]">
              {gen.name}
            </span>
            <p className="text-[14px] text-body-gray m-0 leading-relaxed">
              {gen.description}
            </p>
          </a>
        ))}
      </div>
      {showToggle && (
        <button
          className="btn-ghost mt-[15px]"
          onClick={() => setExpanded(!expanded)}
          aria-expanded={expanded}
          aria-controls={panelId}
        >
          {expanded ? strings.showLessLabel : `${strings.showAllLabel} ${extraCount} ${strings.showAllCount}`}
        </button>
      )}
    </section>
  );
}

export default function AllGenerators() {
  const [searchQuery, setSearchQuery] = useState('');
  const searchInputRef = useRef(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSearchChange = useCallback((e) => {
    setSearchQuery(e.target.value);
  }, []);

  const handleClear = useCallback(() => {
    setSearchQuery('');
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, []);

  const filteredCategories = categories.map((cat) => {
    const gens = allGenerators[cat.slug] || [];
    if (!searchQuery.trim()) {
      return { cat, generators: gens, hasMatch: true, allGens: gens };
    }
    const q = searchQuery.toLowerCase();
    const matched = gens.filter((g) =>
      g.name.toLowerCase().includes(q) ||
      g.description.toLowerCase().includes(q) ||
      g.category.toLowerCase().includes(q)
    );
    return { cat, generators: matched, hasMatch: matched.length > 0, allGens: gens };
  });

  const totalMatches = filteredCategories.reduce((sum, f) => sum + f.generators.length, 0);
  const noResults = searchQuery.trim() && totalMatches === 0;

  if (!mounted) {
    // Server-render with all cards visible, no search behavior
    return (
      <section id="all-generators" className="py-10 md:py-[40px]">
        <div className="max-w-content mx-auto px-5">
          <h2 className="text-[26px] md:text-[30px] text-heading-gray m-0 mb-[5px]">
            {strings.allGeneratorsHeading}
          </h2>
          <p className="text-[14px] text-body-gray m-0 mb-[20px]">
            {strings.allGeneratorsSub}
          </p>
          <div className="mb-[30px] max-w-[480px]">
            <div className="relative">
              <svg
                className="absolute start-[12px] top-1/2 -translate-y-1/2 text-body-gray"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden="true"
              >
                <circle cx="7" cy="7" r="5.5" stroke="currentColor" strokeWidth="1.5" />
                <line x1="11" y1="11" x2="14.5" y2="14.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              <input
                ref={searchInputRef}
                type="text"
                aria-label={strings.searchAriaLabel}
                placeholder={strings.searchPlaceholder}
                className="w-full h-[44px] ps-[38px] pe-[15px] border border-card-border rounded-[4px] text-[14px] font-body text-body-gray bg-white outline-none focus:border-brand-purple"
                value={searchQuery}
                onChange={handleSearchChange}
              />
            </div>
          </div>
          {categories.map((cat) => (
            <CategorySection
              key={cat.slug}
              cat={cat}
              generators={allGenerators[cat.slug] || []}
              isFiltered={false}
              visibleCount={INITIAL_VISIBLE}
            />
          ))}
        </div>
      </section>
    );
  }

  return (
    <section id="all-generators" className="py-10 md:py-[40px]">
      <div className="max-w-content mx-auto px-5">
        <h2 className="text-[26px] md:text-[30px] text-heading-gray m-0 mb-[5px]">
          {strings.allGeneratorsHeading}
        </h2>
        <p className="text-[14px] text-body-gray m-0 mb-[20px]">
          {strings.allGeneratorsSub}
        </p>

        {/* Search */}
        <div className="mb-[10px] max-w-[480px]">
          <div className="relative">
            <svg
              className="absolute start-[12px] top-1/2 -translate-y-1/2 text-body-gray"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden="true"
            >
              <circle cx="7" cy="7" r="5.5" stroke="currentColor" strokeWidth="1.5" />
              <line x1="11" y1="11" x2="14.5" y2="14.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <input
              ref={searchInputRef}
              type="text"
              aria-label={strings.searchAriaLabel}
              placeholder={strings.searchPlaceholder}
              className="w-full h-[44px] ps-[38px] pe-[15px] border border-card-border rounded-[4px] text-[14px] font-body text-body-gray bg-white outline-none focus:border-brand-purple"
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </div>
          {searchQuery.trim() && (
            <p className="text-[13px] text-body-gray mt-[5px] m-0">
              {totalMatches} {strings.searchResultsCount}
            </p>
          )}
        </div>

        {/* No results */}
        {noResults && (
          <div className="text-center py-[40px]">
            <p className="text-[16px] text-heading-gray mb-[10px] font-heading font-bold uppercase">
              {strings.searchNoResults}
            </p>
            <button onClick={handleClear} className="btn-ghost mb-[10px]">
              {strings.searchClear}
            </button>
            <p className="text-[14px] text-body-gray m-0">
              <a href="/s/ai_site_builder" className="text-brand-purple hover:underline">
                {strings.searchFallbackLink}
              </a>
            </p>
          </div>
        )}

        {/* Category subsections */}
        {filteredCategories.map(({ cat, generators }) => {
          if (searchQuery.trim() && generators.length === 0) return null;
          return (
            <CategorySection
              key={cat.slug}
              cat={cat}
              generators={generators}
              isFiltered={!!searchQuery.trim()}
              visibleCount={searchQuery.trim() ? generators.length : INITIAL_VISIBLE}
            />
          );
        })}
      </div>
    </section>
  );
}