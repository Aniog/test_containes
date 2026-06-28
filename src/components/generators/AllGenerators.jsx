import { useState, useEffect, useRef, useCallback } from 'react';
import { t } from '@/data/strings';
import { allGenerators, categories } from '@/data/generators';
import { SearchIcon } from './Illustrations';

const INITIAL_VISIBLE = 6;

const CategorySubsection = ({ catKey, label, description, items, searchQuery, jsEnabled }) => {
  const [expanded, setExpanded] = useState(false);
  const visibleCount = expanded ? items.length : INITIAL_VISIBLE;
  const hasMore = items.length > INITIAL_VISIBLE;

  const matchesSearch = (item) => {
    if (!searchQuery) return true;
    const q = searchQuery.toLowerCase();
    return (
      item.name.toLowerCase().includes(q) ||
      item.description.toLowerCase().includes(q) ||
      label.toLowerCase().includes(q)
    );
  };

  const visibleItems = items.filter(matchesSearch);
  if (searchQuery && visibleItems.length === 0) return null;

  return (
    <div id={catKey} className="scroll-mt-20">
      <h3 className="font-[family-name:var(--font-headings)] font-bold uppercase text-[18px] md:text-[20px] text-[#4B5056] leading-[1.2]">
        {label}
      </h3>
      <p className="mt-1 text-[13px] text-[#636972]">{description}</p>
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {visibleItems.map((item) => (
          <a
            key={item.slug}
            href={`/generators/${item.slug}`}
            className="group block bg-white border border-[#C6C9CD] rounded-[3px] p-5 hover:border-[#8159BB] hover:shadow-[0_4px_12px_rgba(0,0,0,0.06)] transition-all"
          >
            <div className="w-10 h-10 rounded bg-[#F4F6F8] flex items-center justify-center mb-3">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <rect x="2" y="3" width="16" height="14" rx="2" stroke="#8159BB" strokeWidth="1.5" fill="none" />
                <line x1="2" y1="7" x2="18" y2="7" stroke="#8159BB" strokeWidth="1.5" />
              </svg>
            </div>
            <h4 className="font-[family-name:var(--font-headings)] font-bold text-[14px] text-[#2E2E2F] uppercase leading-[1.3]">
              {item.name}
            </h4>
            <p className="mt-1 text-[13px] text-[#636972] leading-[1.5]">{item.description}</p>
          </a>
        ))}
      </div>
      {jsEnabled && hasMore && !searchQuery && (
        <div className="mt-4">
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            aria-expanded={expanded}
            aria-controls={`${catKey}-grid`}
            className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#8159BB] hover:underline focus:underline"
          >
            {expanded ? t('showLess') : t('showAll', { count: items.length, plural: items.length > 1 ? 's' : '' })}
          </button>
        </div>
      )}
    </div>
  );
};

const AllGenerators = () => {
  const [query, setQuery] = useState('');
  const [jsEnabled, setJsEnabled] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    setJsEnabled(true);
  }, []);

  const handleClear = useCallback(() => {
    setQuery('');
    inputRef.current?.focus();
  }, []);

  const totalMatches = Object.entries(allGenerators).reduce((sum, [catKey, items]) => {
    const q = query.toLowerCase();
    const label = categories.find((c) => c.key === catKey)?.label || '';
    const count = items.filter(
      (item) =>
        item.name.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        label.toLowerCase().includes(q)
    ).length;
    return sum + count;
  }, 0);

  return (
    <section id="all-generators" className="py-10 md:py-12">
      <div className="max-w-[1200px] mx-auto px-5">
        <h2 className="font-[family-name:var(--font-headings)] font-bold uppercase text-[22px] md:text-[26px] text-[#4B5056] leading-[1.2]">
          {t('allGeneratorsHeading')}
        </h2>
        <p className="mt-2 text-[#636972] text-[14px]">{t('allGeneratorsSub')}</p>

        <div className="mt-6 max-w-[480px]">
          <label htmlFor="generator-search" className="sr-only">
            {t('searchAria')}
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#636972]">
              <SearchIcon />
            </span>
            <input
              ref={inputRef}
              id="generator-search"
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t('searchPlaceholder')}
              aria-label={t('searchAria')}
              className="w-full h-10 pl-9 pr-3 rounded border border-[#C6C9CD] text-[14px] text-[#2E2E2F] placeholder:text-[#A0A4AA] focus:border-[#8159BB] focus:outline-none"
            />
          </div>
          {jsEnabled && query && (
            <div className="mt-2 flex items-center justify-between">
              <span className="text-[13px] text-[#636972]">
                {t('resultCount', { count: totalMatches, plural: totalMatches === 1 ? '' : 's' })}
              </span>
              <button
                type="button"
                onClick={handleClear}
                className="text-[13px] font-semibold text-[#8159BB] hover:underline"
              >
                {t('clearSearch')}
              </button>
            </div>
          )}
          {jsEnabled && query && totalMatches === 0 && (
            <div className="mt-4 p-5 bg-[#F4F6F8] rounded-[3px]">
              <p className="text-[14px] text-[#636972]">{t('noResults')}</p>
              <div className="mt-3 flex items-center gap-3">
                <button
                  type="button"
                  onClick={handleClear}
                  className="text-[13px] font-semibold text-[#8159BB] hover:underline"
                >
                  {t('clearSearch')}
                </button>
                <a
                  href="/s/ai_site_builder"
                  className="text-[13px] font-semibold text-[#8159BB] hover:underline"
                >
                  {t('noResultsBuilderLink')}
                </a>
              </div>
            </div>
          )}
        </div>

        <div className="mt-10 space-y-10">
          {categories.map((cat) => (
            <CategorySubsection
              key={cat.key}
              catKey={cat.key}
              label={cat.label}
              description={cat.desc}
              items={allGenerators[cat.key] || []}
              searchQuery={jsEnabled ? query : ''}
              jsEnabled={jsEnabled}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllGenerators;
