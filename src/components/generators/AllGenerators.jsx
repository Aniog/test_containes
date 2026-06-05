import { useState, useRef, useEffect, useCallback } from 'react';
import strings from '../../data/strings.en.js';
import { generatorsByCategory, categories, slugify } from '../../data/generators.js';

const INITIAL_VISIBLE = 6;

function CategoryThumbnail() {
  return (
    <svg width="60" height="40" viewBox="0 0 60 40" fill="none" aria-hidden="true" className="w-full h-auto">
      <rect x="2" y="2" width="56" height="36" rx="3" fill="#F4F6F8" stroke="#C6C9CD" strokeWidth="0.5" />
      <rect x="10" y="10" width="18" height="4" rx="2" fill="#8159BB" fillOpacity="0.12" />
      <rect x="10" y="18" width="30" height="2" rx="1" fill="#636972" fillOpacity="0.08" />
      <rect x="10" y="23" width="24" height="2" rx="1" fill="#636972" fillOpacity="0.08" />
      <rect x="32" y="10" width="18" height="12" rx="2" fill="#8159BB" fillOpacity="0.05" stroke="#C6C9CD" strokeWidth="0.5" />
    </svg>
  );
}

function matchesQuery(gen, categoryName, query) {
  const q = query.toLowerCase();
  return (
    gen.name.toLowerCase().includes(q) ||
    gen.description.toLowerCase().includes(q) ||
    categoryName.toLowerCase().includes(q)
  );
}

export default function AllGenerators() {
  const [query, setQuery] = useState('');
  const [expanded, setExpanded] = useState({});
  const [jsReady, setJsReady] = useState(false);
  const sectionRef = useRef(null);

  // Mark JS as ready after mount (so collapse only happens with JS)
  useEffect(() => {
    setJsReady(true);
    // Default collapse: show only INITIAL_VISIBLE per category
    const initial = {};
    Object.keys(generatorsByCategory).forEach((key) => {
      initial[key] = false;
    });
    setExpanded(initial);
  }, []);

  const toggleExpand = useCallback((catSlug) => {
    setExpanded((prev) => ({ ...prev, [catSlug]: !prev[catSlug] }));
  }, []);

  // Compute filtered counts
  const getFilteredGenerators = useCallback(
    (catSlug) => {
      const cat = categories.find((c) => c.slug === catSlug);
      const catName = cat ? cat.name : '';
      const gens = generatorsByCategory[catSlug] || [];
      if (!query) return gens;
      return gens.filter((g) => matchesQuery(g, catName, query));
    },
    [query],
  );

  const totalMatches = Object.keys(generatorsByCategory).reduce((sum, key) => {
    return sum + getFilteredGenerators(key).length;
  }, 0);

  const hasAnyMatch = totalMatches > 0;

  return (
    <section id="all-generators" className="section-padding bg-white" ref={sectionRef}>
      <div className="content-container">
        <h2 className="text-heading-gray text-[22px] md:text-[28px] mb-[5px] mt-0">
          {strings.allHeading}
        </h2>
        <p className="text-body-gray text-[14px] mb-[30px] mt-0">
          {strings.allSub}
        </p>

        {/* Search */}
        <div className="mb-[30px] max-w-[480px]">
          <div className="relative">
            <svg
              className="absolute left-[12px] top-1/2 -translate-y-1/2 text-body-gray"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden="true"
            >
              <circle cx="7" cy="7" r="5" stroke="currentColor" strokeWidth="1.5" />
              <path d="M11 11l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <input
              type="text"
              aria-label={strings.searchAriaLabel}
              placeholder={strings.searchPlaceholder}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full h-[42px] pl-[38px] pr-[12px] border border-card-border rounded-btn text-[14px] font-body text-body-gray bg-white outline-none focus:border-brand-purple transition-colors"
              style={{ fontFamily: "'Open Sans', sans-serif", textTransform: 'none', fontWeight: 400 }}
            />
          </div>
          {query && (
            <div className="flex items-center gap-[10px] mt-[10px]">
              <span className="text-[13px] text-body-gray font-body">
                {totalMatches} {totalMatches === 1 ? 'generator matches' : 'generators match'}
              </span>
              <button
                type="button"
                onClick={() => setQuery('')}
                className="text-[13px] text-brand-purple normal-case font-body font-normal hover:underline bg-transparent border-none p-0 cursor-pointer"
              >
                {strings.clearSearch}
              </button>
            </div>
          )}
        </div>

        {/* No results */}
        {!hasAnyMatch && query && (
          <div className="text-center py-[40px]">
            <p className="text-body-gray text-[15px] mb-[15px]">{strings.noResults}</p>
            <a href="/s/ai_site_builder" className="text-brand-purple hover:underline text-[14px] font-body font-normal normal-case">
              {strings.cantFind}
            </a>
          </div>
        )}

        {/* Category subsections */}
        {categories.map((cat) => {
          const filtered = getFilteredGenerators(cat.slug);
          if (query && filtered.length === 0) return null;

          const isExpanded = expanded[cat.slug] || false;
          const needsCollapse = jsReady && !query && filtered.length > INITIAL_VISIBLE;
          const visibleGens = needsCollapse && !isExpanded
            ? filtered.slice(0, INITIAL_VISIBLE)
            : filtered;

          return (
            <div
              key={cat.slug}
              id={cat.slug}
              className="mb-[40px]"
              style={{ scrollMarginTop: '80px' }}
            >
              <h3 className="text-heading-gray text-[18px] md:text-[20px] mb-[5px] mt-0">
                {cat.name}
              </h3>
              <p className="text-body-gray text-[13px] mb-[20px] mt-0">
                {cat.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px]">
                {filtered.map((gen, idx) => {
                  const hidden = needsCollapse && !isExpanded && idx >= INITIAL_VISIBLE;
                  return (
                    <a
                      key={gen.slug}
                      href={`/generators/${gen.slug}`}
                      className={`card flex flex-col gap-[8px] group ${hidden ? 'hidden' : ''}`}
                      data-generator-card="true"
                    >
                      <div className="w-full">
                        <CategoryThumbnail />
                      </div>
                      <span className="block text-hero-dark text-[16px] leading-[1.2] font-heading font-bold uppercase">
                        {gen.name}
                      </span>
                      <p className="text-body-gray text-[14px] m-0 leading-[1.5]">
                        {gen.description}
                      </p>
                    </a>
                  );
                })}
              </div>

              {/* Show all toggle */}
              {needsCollapse && (
                <div className="mt-[20px]">
                  <button
                    type="button"
                    onClick={() => toggleExpand(cat.slug)}
                    aria-expanded={isExpanded}
                    aria-controls={`${cat.slug}-grid`}
                    className="text-brand-purple text-[13px] font-heading font-bold uppercase bg-transparent border border-brand-purple rounded-btn px-[12px] py-[6px] cursor-pointer hover:bg-brand-purple hover:text-white transition-colors"
                  >
                    {isExpanded
                      ? strings.showLessLabel
                      : `${strings.showAllLabel} ${filtered.length} ${cat.name}`}
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}