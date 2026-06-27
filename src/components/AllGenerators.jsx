import React, { useState, useRef, useEffect, useCallback } from 'react';
import { strings } from '@/strings.en';
import { allGenerators, VISIBLE_COUNT } from '@/data/generators';
import { CategoryIcon, SearchIcon } from './Icons';

const categoryKeys = Object.keys(allGenerators);

function slugify(text) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

function Subsection({ category, searchQuery, expandedSections, toggleSection }) {
  const { id, name, description, items } = category;
  const isExpanded = expandedSections[id];
  const visibleItems = isExpanded ? items : items.slice(0, VISIBLE_COUNT);
  const hasMore = items.length > VISIBLE_COUNT;

  const filteredItems = searchQuery
    ? items.filter((item) => {
        const q = searchQuery.toLowerCase();
        return (
          item.name.toLowerCase().includes(q) ||
          item.description.toLowerCase().includes(q) ||
          name.toLowerCase().includes(q)
        );
      })
    : visibleItems;

  const isHidden = searchQuery && filteredItems.length === 0;

  return (
    <div id={id} className={isHidden ? 'hidden' : ''} style={{ scrollMarginTop: '80px' }}>
      <h3 className="text-lg md:text-xl text-[#4B5056] mb-1" style={{ fontFamily: 'var(--font-heading)' }}>
        {name}
      </h3>
      <p className="text-[#636972] text-sm mb-5" style={{ fontFamily: 'var(--font-body)' }}>
        {description}
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredItems.map((item) => (
          <a
            key={item.slug}
            href={`/generators/${item.slug}`}
            className="card-base flex flex-col gap-2 group"
          >
            <CategoryIcon type={id} className="mb-1" />
            <h4 className="text-sm font-bold text-[#4B5056] group-hover:text-[#8159BB] transition-colors" style={{ fontFamily: 'var(--font-heading)' }}>
              {item.name}
            </h4>
            <p className="text-[#636972] text-sm leading-snug" style={{ fontFamily: 'var(--font-body)' }}>
              {item.description}
            </p>
          </a>
        ))}
      </div>
      {!searchQuery && hasMore && (
        <button
          type="button"
          onClick={() => toggleSection(id)}
          aria-expanded={isExpanded ? 'true' : 'false'}
          aria-controls={`subsection-${id}`}
          className="mt-5 text-sm font-bold text-[#8159BB] hover:underline transition-colors"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          {isExpanded
            ? strings.allGenerators.showLess
            : strings.allGenerators.showAll.replace('{count}', items.length)}
        </button>
      )}
    </div>
  );
}

export default function AllGenerators() {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedSections, setExpandedSections] = useState(() => {
    const initial = {};
    categoryKeys.forEach((key) => {
      initial[key] = false;
    });
    return initial;
  });

  const toggleSection = useCallback((id) => {
    setExpandedSections((prev) => ({ ...prev, [id]: !prev[id] }));
  }, []);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const clearSearch = () => {
    setSearchQuery('');
  };

  const totalMatches = searchQuery
    ? categoryKeys.reduce((sum, key) => {
        const cat = allGenerators[key];
        const q = searchQuery.toLowerCase();
        return (
          sum +
          cat.items.filter(
            (item) =>
              item.name.toLowerCase().includes(q) ||
              item.description.toLowerCase().includes(q) ||
              cat.name.toLowerCase().includes(q)
          ).length
        );
      }, 0)
    : 0;

  const resultText = searchQuery
    ? strings.allGenerators.resultCount
        .replace('{count}', totalMatches)
        .replace('{plural}', totalMatches === 1 ? '' : 's')
    : '';

  return (
    <section id="all-generators" className="py-10 md:py-12" style={{ scrollMarginTop: '60px' }}>
      <div className="section-wrapper">
        <h2 className="text-[26px] md:text-[32px] text-[#4B5056] mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
          {strings.allGenerators.heading}
        </h2>
        <p className="text-[#636972] text-sm mb-6" style={{ fontFamily: 'var(--font-body)' }}>
          {strings.allGenerators.subheading}
        </p>

        <div className="mb-8 max-w-lg">
          <div className="relative">
            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-[#636972]" />
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearch}
              placeholder={strings.allGenerators.searchPlaceholder}
              aria-label="Search generators"
              className="w-full h-10 pl-10 pr-4 border border-[#C6C9CD] rounded text-sm text-[#2E2E2F] bg-white placeholder:text-[#636972]"
              style={{ fontFamily: 'var(--font-body)' }}
            />
          </div>
          {searchQuery && (
            <div className="mt-2 flex items-center gap-3 text-sm text-[#636972]" style={{ fontFamily: 'var(--font-body)' }}>
              <span>{resultText}</span>
              {totalMatches === 0 && (
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={clearSearch}
                    className="text-[#8159BB] font-bold hover:underline"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    {strings.allGenerators.clearSearch}
                  </button>
                  <a href="/s/ai_site_builder" className="text-[#8159BB] hover:underline">
                    {strings.allGenerators.cantFindLink}
                  </a>
                </div>
              )}
            </div>
          )}
        </div>

        <div className="flex flex-col gap-12">
          {categoryKeys.map((key) => (
            <Subsection
              key={key}
              category={allGenerators[key]}
              searchQuery={searchQuery}
              expandedSections={expandedSections}
              toggleSection={toggleSection}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
