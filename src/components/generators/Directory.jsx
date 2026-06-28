import { useEffect, useId, useMemo, useState } from 'react';
import { strings, directoryCategories } from '@/data/generators';
import { SearchIcon, WebsiteIcon } from './Icons';
import './Directory.css';

const t = strings.en;

const ICONS_BY_CATEGORY = {
  websites: WebsiteIcon,
  'landing-pages': WebsiteIcon,
  portfolios: WebsiteIcon,
  blogs: WebsiteIcon,
  stores: WebsiteIcon,
  'link-in-bio': WebsiteIcon,
};

const INITIAL_VISIBLE = 6;

export default function Directory() {
  const searchId = useId();
  const [query, setQuery] = useState('');
  const [expandedCategories, setExpandedCategories] = useState(() =>
    directoryCategories.reduce((acc, cat) => {
      acc[cat.id] = false;
      return acc;
    }, {})
  );

  const normalize = (s) => s.toLowerCase().replace(/[^a-z0-9]/g, '');

  const filtered = useMemo(() => {
    const q = normalize(query);
    return directoryCategories.map((cat) => ({
      ...cat,
      entries: q
        ? cat.entries.filter(
            (entry) =>
              normalize(entry.name).includes(q) ||
              normalize(entry.description).includes(q) ||
              normalize(entry.category).includes(q)
          )
        : cat.entries,
    }));
  }, [query]);

  const matchCount = useMemo(
    () => filtered.reduce((sum, cat) => sum + cat.entries.length, 0),
    [filtered]
  );

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.location.hash) {
      const id = window.location.hash.slice(1);
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 0);
      }
    }
  }, []);

  const toggleCategory = (id) => {
    setExpandedCategories((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section id={t.directory.id} className="w-full bg-[#F4F6F8]">
      <div className="mx-auto max-w-[1200px] px-5 py-10 md:py-[60px]">
        <div className="mb-8 md:mb-10">
          <h2 className="font-heading text-[26px] md:text-[32px] font-bold leading-[1.2] uppercase text-[#4B5056]">
            {t.directory.heading}
          </h2>
          <p className="mt-2 text-[14px] text-[#636972]">
            {t.directory.subheading}
          </p>
        </div>

        <div className="mb-8 md:mb-10">
          <div className="relative max-w-[480px]">
            <label htmlFor={searchId} className="sr-only">
              {t.directory.searchAriaLabel}
            </label>
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <SearchIcon className="w-5 h-5" />
            </div>
            <input
              id={searchId}
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t.directory.searchPlaceholder}
              aria-label={t.directory.searchAriaLabel}
              className="w-full h-[44px] pl-10 pr-4 text-[14px] text-[#2E2E2F] placeholder:text-[#9CA3AF] bg-white border border-[#C6C9CD] rounded-[3px] focus:outline-none focus:border-[#8159BB] focus:ring-2 focus:ring-[#8159BB] focus:ring-opacity-20"
            />
          </div>
          <p
            className="mt-3 text-[13px] text-[#636972]"
            aria-live="polite"
            aria-atomic="true"
          >
            {query
              ? matchCount === 1
                ? t.directory.resultCountSingular
                : t.directory.resultCountPlural.replace('{count}', String(matchCount))
              : '\u00A0'}
          </p>
        </div>

        {query && matchCount === 0 && (
          <div className="mb-10 p-6 bg-white border border-[#C6C9CD] rounded-[3px]">
            <p className="font-heading text-[16px] font-bold uppercase text-[#4B5056]">
              {t.directory.noResultsHeading}
            </p>
            <div className="mt-4 flex flex-col sm:flex-row gap-3 sm:items-center">
              <button
                type="button"
                onClick={() => setQuery('')}
                className="inline-flex items-center justify-center h-[36px] px-[15px] rounded-[4px] font-heading text-[14px] font-bold uppercase text-white bg-[#8159BB] hover:bg-[#6e49a3] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8159BB] focus-visible:ring-offset-2 transition-colors"
              >
                {t.directory.clearSearch}
              </button>
              <a
                href="/s/ai_site_builder"
                className="text-[14px] text-[#8159BB] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8159BB] focus-visible:ring-offset-2 rounded"
              >
                {t.directory.builderLinkText}
              </a>
            </div>
          </div>
        )}

        <div className="flex flex-col gap-10 md:gap-[60px]">
          {filtered.map((cat) => {
            const visibleCount =
              query || expandedCategories[cat.id]
                ? cat.entries.length
                : Math.min(INITIAL_VISIBLE, cat.entries.length);
            const hiddenCount = cat.entries.length - visibleCount;
            const Icon = ICONS_BY_CATEGORY[cat.id] || WebsiteIcon;

            return (
              <div
                key={cat.id}
                id={cat.id}
                className={cat.entries.length === 0 && query ? 'hidden' : ''}
                data-directory-category
              >
                <div className="mb-5">
                  <h3 className="font-heading text-[20px] md:text-[24px] font-bold leading-[1.2] uppercase text-[#4B5056]">
                    {cat.name}
                  </h3>
                  <p className="mt-1 text-[14px] text-[#636972]">
                    {cat.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {cat.entries.map((entry, index) => (
                    <a
                      key={entry.slug}
                      href={`/generators/${entry.slug}`}
                      data-match-index={index}
                      className={`directory-card group flex flex-col gap-3 p-5 bg-white border border-[#C6C9CD] rounded-[3px] hover:border-[#8159BB] hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8159BB] focus-visible:ring-offset-2 ${
                        index >= visibleCount ? 'is-collapsed' : ''
                      }`}
                    >
                      <Icon className="w-10 h-10" />
                      <h4 className="font-heading text-[15px] font-bold uppercase text-[#4B5056] group-hover:text-[#8159BB] transition-colors">
                        {entry.name}
                      </h4>
                      <p className="text-[14px] text-[#636972] leading-[1.5]">
                        {entry.description}
                      </p>
                    </a>
                  ))}
                </div>

                {!query && hiddenCount > 0 && (
                  <div className="mt-5">
                    <button
                      type="button"
                      onClick={() => toggleCategory(cat.id)}
                      aria-expanded={expandedCategories[cat.id]}
                      aria-controls={`${cat.id}-grid`}
                      className="inline-flex items-center justify-center h-[36px] px-[15px] rounded-[4px] font-heading text-[14px] font-bold uppercase text-[#8159BB] border border-[#8159BB] bg-transparent hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8159BB] focus-visible:ring-offset-2 transition-colors"
                    >
                      {expandedCategories[cat.id]
                        ? t.directory.showLess
                        : t.directory.showAll.replace('{count}', String(cat.entries.length))}
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
