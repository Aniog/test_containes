import React, { useState, useCallback, useEffect } from 'react';

const categoryIcons = {
  websites: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <rect x="3" y="5" width="26" height="19" rx="2" stroke="#8159BB" strokeWidth="1.5" fill="none" />
      <line x1="3" y1="11" x2="29" y2="11" stroke="#8159BB" strokeWidth="1" />
      <circle cx="8" cy="8" r="1" fill="#8159BB" />
      <circle cx="12" cy="8" r="1" fill="#7671FF" />
      <circle cx="16" cy="8" r="1" fill="#CB0C9F" />
      <rect x="6" y="14" width="10" height="2" rx="1" fill="#8159BB" opacity="0.3" />
      <rect x="6" y="18" width="16" height="2" rx="1" fill="#8159BB" opacity="0.2" />
    </svg>
  ),
  'landing-pages': (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <rect x="5" y="3" width="22" height="26" rx="2" stroke="#8159BB" strokeWidth="1.5" fill="none" />
      <rect x="8" y="6" width="16" height="6" rx="1" stroke="#7671FF" strokeWidth="1" fill="none" />
      <rect x="8" y="15" width="16" height="2" rx="1" fill="#8159BB" opacity="0.3" />
      <rect x="8" y="20" width="10" height="2" rx="1" fill="#8159BB" opacity="0.2" />
    </svg>
  ),
  portfolios: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <rect x="3" y="6" width="26" height="20" rx="2" stroke="#8159BB" strokeWidth="1.5" fill="none" />
      <circle cx="16" cy="14" r="4" stroke="#7671FF" strokeWidth="1" fill="none" />
      <path d="M6 24 L11 19 L14 22 L19 17 L26 24" stroke="#CB0C9F" strokeWidth="1" fill="none" />
    </svg>
  ),
  blogs: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <rect x="6" y="3" width="20" height="26" rx="2" stroke="#8159BB" strokeWidth="1.5" fill="none" />
      <rect x="10" y="6" width="12" height="2" rx="1" fill="#8159BB" opacity="0.3" />
      <rect x="10" y="11" width="12" height="2" rx="1" fill="#8159BB" opacity="0.2" />
      <rect x="10" y="16" width="12" height="2" rx="1" fill="#8159BB" opacity="0.2" />
      <rect x="10" y="21" width="8" height="2" rx="1" fill="#7671FF" opacity="0.2" />
    </svg>
  ),
  stores: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path d="M6 13 L5 6 H27 L26 13" stroke="#8159BB" strokeWidth="1.5" fill="none" />
      <rect x="5" y="13" width="22" height="14" rx="2" stroke="#8159BB" strokeWidth="1.5" fill="none" />
      <circle cx="13" cy="20" r="2" stroke="#7671FF" strokeWidth="1" fill="none" />
      <circle cx="21" cy="20" r="2" stroke="#CB0C9F" strokeWidth="1" fill="none" />
    </svg>
  ),
  'link-in-bio': (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <circle cx="16" cy="10" r="5" stroke="#8159BB" strokeWidth="1.5" fill="none" />
      <rect x="10" y="18" width="12" height="2" rx="1" fill="#8159BB" opacity="0.3" />
      <rect x="11" y="22" width="10" height="2" rx="1" fill="#8159BB" opacity="0.2" />
      <circle cx="12" cy="27" r="1" fill="#7671FF" opacity="0.4" />
      <circle cx="16" cy="27" r="1" fill="#CB0C9F" opacity="0.4" />
      <circle cx="20" cy="27" r="1" fill="#8159BB" opacity="0.4" />
    </svg>
  ),
};

const GeneratorCard = ({ gen }) => (
  <a
    href={`/generators/${gen.slug}`}
    className="block bg-white border border-[#C6C9CD] rounded-[3px] p-5 card-hover no-underline"
    data-generator-name={gen.name}
    data-generator-desc={gen.description}
    data-generator-category={gen.categoryKey}
  >
    <div className="mb-3">{categoryIcons[gen.categoryKey]}</div>
    <h3 className="font-heading font-bold text-[14px] text-[#4B5056] uppercase mb-1">{gen.name}</h3>
    <p className="text-[13px] text-[#636972]">{gen.description}</p>
  </a>
);

const Subsection = ({ categoryId, categoryName, categoryDescription, generators, visibleCount, expanded, onToggle, searchMatches }) => {
  const hasMore = generators.length > visibleCount;
  const matchingInSubsection = searchMatches !== null
    ? generators.filter(g => searchMatches.includes(g.slug))
    : null;

  const shouldShow = searchMatches === null || matchingInSubsection.length > 0;
  const displayGens = matchingInSubsection || generators;

  if (!shouldShow) return null;

  const isCollapsed = !expanded && searchMatches === null && hasMore;

  return (
    <div id={categoryId} className="scroll-mt-20 mb-10" data-subsection={categoryId}>
      <h3 className="font-heading font-bold text-[20px] md:text-[24px] text-[#4B5056] uppercase mb-1">{categoryName}</h3>
      <p className="text-[13px] text-[#636972] mb-5">{categoryDescription}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {displayGens.map((gen, i) => (
          <div
            key={gen.slug}
            className={i >= visibleCount && isCollapsed ? 'gen-extra-collapsed' : ''}
          >
            <GeneratorCard gen={gen} />
          </div>
        ))}
      </div>
      {hasMore && searchMatches === null && (
        <div className="mt-5">
          <button
            onClick={onToggle}
            aria-expanded={expanded}
            aria-controls={`subsection-grid-${categoryId}`}
            className="font-heading font-bold text-[13px] uppercase text-[#8159BB] bg-transparent border-none cursor-pointer hover:underline p-0"
          >
            {expanded
              ? 'Show less'
              : `Show all ${generators.length} generators`
            }
          </button>
        </div>
      )}
    </div>
  );
};

const AllGenerators = ({ strings, categories, allGenerators, categoryOrder, visibleCount }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedSections, setExpandedSections] = useState({});
  const [matchCount, setMatchCount] = useState(null);

  const toggleSection = useCallback((categoryId) => {
    setExpandedSections(prev => ({ ...prev, [categoryId]: !prev[categoryId] }));
  }, []);

  const handleSearch = useCallback((e) => {
    const query = e.target.value.toLowerCase().trim();
    setSearchQuery(query);

    if (!query) {
      setMatchCount(null);
      return;
    }

    let count = 0;
    categoryOrder.forEach(catId => {
      allGenerators[catId].forEach(gen => {
        const catName = categories[catId]?.name || '';
        if (
          gen.name.toLowerCase().includes(query) ||
          gen.description.toLowerCase().includes(query) ||
          catName.toLowerCase().includes(query)
        ) {
          count++;
        }
      });
    });
    setMatchCount(count);
  }, [allGenerators, categories, categoryOrder]);

  const getMatchingSlugs = useCallback((catId) => {
    if (!searchQuery) return null;
    const catName = categories[catId]?.name || '';
    return allGenerators[catId]
      .filter(gen =>
        gen.name.toLowerCase().includes(searchQuery) ||
        gen.description.toLowerCase().includes(searchQuery) ||
        catName.toLowerCase().includes(searchQuery)
      )
      .map(g => g.slug);
  }, [searchQuery, allGenerators, categories]);

  const clearSearch = useCallback(() => {
    setSearchQuery('');
    setMatchCount(null);
  }, []);

  return (
    <section id="all-generators" className="w-full bg-white py-10 md:py-[40px]">
      <div className="max-w-[1200px] mx-auto px-5">
        <h2 className="text-[26px] md:text-[32px] font-bold text-center mb-2 text-[#4B5056] uppercase">{strings.heading}</h2>
        <p className="text-[14px] text-[#636972] text-center mb-8">{strings.subheading}</p>

        <div className="max-w-[480px] mx-auto mb-8">
          <div className="relative">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true" className="absolute left-3 top-1/2 -translate-y-1/2 text-[#636972]">
              <circle cx="7.5" cy="7.5" r="5.5" stroke="currentColor" strokeWidth="1.5" />
              <line x1="11.5" y1="11.5" x2="16" y2="16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <input
              type="text"
              placeholder={strings.searchPlaceholder}
              aria-label={strings.searchAriaLabel}
              value={searchQuery}
              onChange={handleSearch}
              className="w-full h-[40px] pl-10 pr-4 border border-[#C6C9CD] rounded-[4px] text-[14px] text-[#4B5056] bg-white focus:border-[#8159BB] focus:outline-none"
            />
          </div>
          {matchCount !== null && (
            <p className="text-[13px] text-[#636972] mt-2 text-center">
              {matchCount === 0
                ? strings.noResults
                : strings.matchCount.replace('{count}', matchCount)
              }
            </p>
          )}
          {matchCount === 0 && (
            <div className="text-center mt-4">
              <button
                onClick={clearSearch}
                className="font-heading font-bold text-[13px] uppercase text-[#8159BB] bg-transparent border border-[#8159BB] rounded-[3px] px-4 py-2 cursor-pointer hover:bg-[#8159BB] hover:text-white transition-colors"
              >
                {strings.clearSearch}
              </button>
              <p className="mt-3 text-[13px] text-[#636972]">
                <a href="/s/ai_site_builder" className="text-[#8159BB] hover:underline">{strings.cantFind}</a>
              </p>
            </div>
          )}
        </div>

        {categoryOrder.map(catId => (
          <Subsection
            key={catId}
            categoryId={catId}
            categoryName={categories[catId]?.name || catId}
            categoryDescription={categories[catId]?.description || ''}
            generators={allGenerators[catId].map(g => ({ ...g, categoryKey: catId }))}
            visibleCount={visibleCount}
            expanded={!!expandedSections[catId]}
            onToggle={() => toggleSection(catId)}
            searchMatches={getMatchingSlugs(catId)}
          />
        ))}
      </div>
    </section>
  );
};

export default AllGenerators;
