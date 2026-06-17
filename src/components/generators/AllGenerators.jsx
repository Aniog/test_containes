import React, { useState, useRef, useEffect, useCallback } from 'react';
import { strings } from '../../strings';
import { allGenerators, categories, categorySlugMap } from '../../data';

const s = strings.en.allGenerators;

const VISIBLE_COUNT = 6;

const CategoryThumbnail = ({ id }) => {
  const thumbnails = {
    websites: (
      <svg aria-hidden="true" width="48" height="36" viewBox="0 0 48 36" fill="none">
        <rect x="2" y="2" width="44" height="32" rx="3" stroke="#8159BB" strokeWidth="1.5" fill="none" opacity="0.25"/>
        <line x1="2" y1="8" x2="46" y2="8" stroke="#8159BB" strokeWidth="1" opacity="0.15"/>
        <rect x="6" y="12" width="16" height="8" rx="1" stroke="#8159BB" strokeWidth="1" fill="none" opacity="0.2"/>
        <rect x="26" y="12" width="16" height="4" rx="1" stroke="#8159BB" strokeWidth="1" fill="none" opacity="0.15"/>
        <rect x="26" y="20" width="16" height="4" rx="1" stroke="#8159BB" strokeWidth="1" fill="none" opacity="0.15"/>
      </svg>
    ),
    'landing-pages': (
      <svg aria-hidden="true" width="48" height="36" viewBox="0 0 48 36" fill="none">
        <rect x="4" y="2" width="40" height="32" rx="3" stroke="#8159BB" strokeWidth="1.5" fill="none" opacity="0.25"/>
        <rect x="12" y="8" width="24" height="3" rx="1" fill="#8159BB" opacity="0.2"/>
        <rect x="14" y="14" width="20" height="2" rx="0.5" fill="#8159BB" opacity="0.12"/>
        <rect x="14" y="19" width="18" height="2" rx="0.5" fill="#8159BB" opacity="0.12"/>
        <rect x="16" y="25" width="16" height="5" rx="2" fill="#8159BB" opacity="0.15"/>
      </svg>
    ),
    portfolios: (
      <svg aria-hidden="true" width="48" height="36" viewBox="0 0 48 36" fill="none">
        <rect x="2" y="4" width="44" height="28" rx="3" stroke="#8159BB" strokeWidth="1.5" fill="none" opacity="0.25"/>
        <rect x="6" y="8" width="14" height="10" rx="1" stroke="#8159BB" strokeWidth="1" fill="none" opacity="0.2"/>
        <circle cx="36" cy="12" r="4" stroke="#8159BB" strokeWidth="1" fill="none" opacity="0.2"/>
        <rect x="6" y="22" width="36" height="2" rx="0.5" fill="#8159BB" opacity="0.12"/>
        <rect x="6" y="26" width="24" height="2" rx="0.5" fill="#8159BB" opacity="0.1"/>
      </svg>
    ),
    blogs: (
      <svg aria-hidden="true" width="48" height="36" viewBox="0 0 48 36" fill="none">
        <rect x="8" y="2" width="32" height="32" rx="3" stroke="#8159BB" strokeWidth="1.5" fill="none" opacity="0.25"/>
        <line x1="14" y1="10" x2="34" y2="10" stroke="#8159BB" strokeWidth="1" opacity="0.2"/>
        <line x1="14" y1="15" x2="30" y2="15" stroke="#8159BB" strokeWidth="1" opacity="0.15"/>
        <line x1="14" y1="20" x2="32" y2="20" stroke="#8159BB" strokeWidth="1" opacity="0.15"/>
        <line x1="14" y1="25" x2="26" y2="25" stroke="#8159BB" strokeWidth="1" opacity="0.12"/>
      </svg>
    ),
    stores: (
      <svg aria-hidden="true" width="48" height="36" viewBox="0 0 48 36" fill="none">
        <path d="M8 14L6 6H42L40 14" stroke="#8159BB" strokeWidth="1.5" fill="none" opacity="0.25"/>
        <rect x="8" y="14" width="32" height="18" rx="2" stroke="#8159BB" strokeWidth="1.5" fill="none" opacity="0.25"/>
        <circle cx="18" cy="24" r="2" stroke="#8159BB" strokeWidth="1" fill="none" opacity="0.2"/>
        <circle cx="30" cy="24" r="2" stroke="#8159BB" strokeWidth="1" fill="none" opacity="0.2"/>
      </svg>
    ),
    'link-in-bio': (
      <svg aria-hidden="true" width="48" height="36" viewBox="0 0 48 36" fill="none">
        <circle cx="24" cy="12" r="6" stroke="#8159BB" strokeWidth="1.5" fill="none" opacity="0.25"/>
        <line x1="14" y1="22" x2="34" y2="22" stroke="#8159BB" strokeWidth="1" opacity="0.2"/>
        <line x1="16" y1="26" x2="32" y2="26" stroke="#8159BB" strokeWidth="1" opacity="0.15"/>
        <line x1="18" y1="30" x2="30" y2="30" stroke="#8159BB" strokeWidth="1" opacity="0.12"/>
      </svg>
    ),
  };
  return thumbnails[id] || thumbnails.websites;
};

const SearchIcon = () => (
  <svg aria-hidden="true" width="18" height="18" viewBox="0 0 18 18" fill="none">
    <circle cx="8" cy="8" r="5.5" stroke="#636972" strokeWidth="1.5"/>
    <line x1="12" y1="12" x2="16" y2="16" stroke="#636972" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

function Subsection({ categoryId, categoryName, description, generators, searchQuery, expandedSections, toggleSection }) {
  const isExpanded = expandedSections[categoryId];
  const hasSearch = searchQuery.length > 0;
  const collapsibleRef = useRef(null);
  const [collapsibleHeight, setCollapsibleHeight] = useState(null);
  const [jsReady, setJsReady] = useState(false);

  const filteredGens = hasSearch
    ? generators.filter(g => {
        const q = searchQuery.toLowerCase();
        const catLabel = categorySlugMap[categoryId] || '';
        return (
          g.name.toLowerCase().includes(q) ||
          g.description.toLowerCase().includes(q) ||
          catLabel.toLowerCase().includes(q)
        );
      })
    : generators;

  useEffect(() => {
    setJsReady(true);
  }, []);

  useEffect(() => {
    if (collapsibleRef.current) {
      setCollapsibleHeight(collapsibleRef.current.scrollHeight);
    }
  }, [generators.length, searchQuery]);

  if (hasSearch && filteredGens.length === 0) return null;

  const showToggle = !hasSearch && generators.length > VISIBLE_COUNT;
  const contentId = `subsection-content-${categoryId}`;
  const buttonId = `subsection-toggle-${categoryId}`;
  const extraId = `subsection-extra-${categoryId}`;

  const visibleGens = hasSearch ? filteredGens : generators.slice(0, VISIBLE_COUNT);
  const extraGens = hasSearch ? [] : generators.slice(VISIBLE_COUNT);

  const collapsibleStyle = jsReady && !isExpanded && !hasSearch && extraGens.length > 0
    ? { maxHeight: '0px', overflow: 'hidden', transition: 'max-height 0.3s ease' }
    : jsReady && (isExpanded || hasSearch) && extraGens.length > 0
    ? { maxHeight: `${collapsibleHeight || 2000}px`, overflow: 'hidden', transition: 'max-height 0.3s ease' }
    : undefined;

  return (
    <div id={categoryId} className="scroll-mt-20 mb-12">
      <div className="flex items-center gap-3 mb-2">
        <CategoryThumbnail id={categoryId} />
        <div>
          <h3 className="font-heading font-bold text-heading text-lg m-0" style={{ textTransform: 'uppercase' }}>
            {categoryName}
          </h3>
          <p className="text-body-text text-sm m-0 mt-1">{description}</p>
        </div>
      </div>
      <div
        id={contentId}
        className="mt-5"
        role="region"
        aria-labelledby={buttonId}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {visibleGens.map((gen) => (
            <a
              key={gen.slug}
              href={`/generators/${gen.slug}`}
              className="card block no-underline text-body-text hover:text-body-text"
            >
              <div className="mb-3">
                <CategoryThumbnail id={categoryId} />
              </div>
              <strong className="font-heading font-bold text-heading text-sm mb-1 block" style={{ textTransform: 'uppercase' }}>
                {gen.name}
              </strong>
              <p className="text-body-text text-sm leading-relaxed m-0">{gen.description}</p>
            </a>
          ))}
        </div>
        {extraGens.length > 0 && (
          <div
            id={extraId}
            ref={collapsibleRef}
            style={collapsibleStyle}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
              {extraGens.map((gen) => (
                <a
                  key={gen.slug}
                  href={`/generators/${gen.slug}`}
                  className="card block no-underline text-body-text hover:text-body-text"
                >
                  <div className="mb-3">
                    <CategoryThumbnail id={categoryId} />
                  </div>
                  <strong className="font-heading font-bold text-heading text-sm mb-1 block" style={{ textTransform: 'uppercase' }}>
                    {gen.name}
                  </strong>
                  <p className="text-body-text text-sm leading-relaxed m-0">{gen.description}</p>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
      {showToggle && (
        <button
          id={buttonId}
          type="button"
          className="btn-ghost mt-5"
          aria-expanded={isExpanded}
          aria-controls={extraId}
          onClick={() => toggleSection(categoryId)}
        >
          {isExpanded
            ? s.showLess
            : s.showAll.replace('{count}', generators.length)
          }
        </button>
      )}
    </div>
  );
}

export default function AllGenerators() {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedSections, setExpandedSections] = useState({});
  const [matchCount, setMatchCount] = useState(0);
  const inputRef = useRef(null);

  const countMatches = useCallback((query) => {
    if (!query) {
      let total = 0;
      Object.values(allGenerators).forEach(gens => { total += gens.length; });
      return total;
    }
    const q = query.toLowerCase();
    let count = 0;
    Object.entries(allGenerators).forEach(([catId, gens]) => {
      const catLabel = categorySlugMap[catId] || '';
      gens.forEach(g => {
        if (
          g.name.toLowerCase().includes(q) ||
          g.description.toLowerCase().includes(q) ||
          catLabel.toLowerCase().includes(q)
        ) {
          count++;
        }
      });
    });
    return count;
  }, []);

  useEffect(() => {
    setMatchCount(countMatches(searchQuery));
  }, [searchQuery, countMatches]);

  const toggleSection = (categoryId) => {
    setExpandedSections(prev => ({ ...prev, [categoryId]: !prev[categoryId] }));
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const clearSearch = () => {
    setSearchQuery('');
    if (inputRef.current) inputRef.current.focus();
  };

  const hasSearch = searchQuery.length > 0;
  const noResults = hasSearch && matchCount === 0;

  const matchText = hasSearch
    ? s.matchCount
        .replace('{count}', matchCount)
        .replace('{plural}', matchCount === 1 ? '' : 's')
    : '';

  return (
    <section id="all-generators" className="py-10 md:py-16">
      <div className="max-w-content mx-auto px-5">
        <h2 className="section-heading text-2xl md:text-3xl mb-2">{s.heading}</h2>
        <p className="text-body-text text-sm mb-6">{s.subheading}</p>

        <div className="mb-8">
          <div className="flex items-center gap-3 max-w-lg">
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <SearchIcon />
              </div>
              <input
                ref={inputRef}
                type="search"
                aria-label={s.searchAriaLabel}
                placeholder={s.searchPlaceholder}
                value={searchQuery}
                onChange={handleSearchChange}
                className="w-full h-10 pl-10 pr-4 border border-card-border rounded text-sm text-body-text bg-white focus:border-brand-purple focus:outline-none focus:ring-2 focus:ring-brand-purple/20"
                style={{ fontFamily: "'Open Sans', sans-serif" }}
              />
            </div>
          </div>
          {hasSearch && !noResults && (
            <p className="text-body-text text-sm mt-2">{matchText}</p>
          )}
          {noResults && (
            <div className="mt-4 p-5 bg-light-bg rounded border border-subtle-divider">
              <p className="text-body-text text-sm mb-3">{s.noResults}</p>
              <button type="button" className="btn-ghost mr-3" onClick={clearSearch}>
                {s.clearSearch}
              </button>
              <a href="/s/ai_site_builder" className="text-brand-purple text-sm hover:underline">
                {s.cantFindLink}
              </a>
            </div>
          )}
        </div>

        {categories.map((cat) => (
          <Subsection
            key={cat.id}
            categoryId={cat.id}
            categoryName={cat.name}
            description={cat.description}
            generators={allGenerators[cat.id] || []}
            searchQuery={searchQuery}
            expandedSections={expandedSections}
            toggleSection={toggleSection}
          />
        ))}
      </div>
    </section>
  );
}
