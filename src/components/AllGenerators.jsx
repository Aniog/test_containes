import React, { useState, useEffect, useRef, useCallback } from 'react';
import strings from '../strings';
import { categoryKeys, directoryEntries } from '../data';

const catIllus = {
  websites: (
    <svg aria-hidden="true" width="48" height="32" viewBox="0 0 48 32" fill="none">
      <rect x="2" y="2" width="44" height="28" rx="3" stroke="#8159BB" strokeWidth="1" />
      <line x1="2" y1="10" x2="46" y2="10" stroke="#8159BB" strokeWidth="0.8" />
      <circle cx="8" cy="6" r="1.5" fill="#8159BB" />
      <circle cx="12" cy="6" r="1.5" fill="#8159BB" />
      <circle cx="16" cy="6" r="1.5" fill="#8159BB" />
    </svg>
  ),
  'landing-pages': (
    <svg aria-hidden="true" width="48" height="32" viewBox="0 0 48 32" fill="none">
      <rect x="8" y="1" width="32" height="30" rx="3" stroke="#8159BB" strokeWidth="1" />
      <rect x="12" y="5" width="24" height="10" rx="2" fill="#F4F6F8" stroke="#E2E4E7" strokeWidth="0.8" />
      <rect x="12" y="18" width="24" height="2.5" rx="1.25" fill="#E2E4E7" />
      <rect x="12" y="22.5" width="16" height="2.5" rx="1.25" fill="#E2E4E7" />
    </svg>
  ),
  portfolios: (
    <svg aria-hidden="true" width="48" height="32" viewBox="0 0 48 32" fill="none">
      <rect x="2" y="4" width="14" height="10" rx="2" stroke="#8159BB" strokeWidth="1" />
      <rect x="18" y="4" width="14" height="10" rx="2" stroke="#8159BB" strokeWidth="1" />
      <rect x="34" y="4" width="12" height="10" rx="2" stroke="#8159BB" strokeWidth="1" />
      <rect x="2" y="18" width="14" height="10" rx="2" stroke="#8159BB" strokeWidth="1" />
      <rect x="18" y="18" width="14" height="10" rx="2" stroke="#8159BB" strokeWidth="1" />
      <rect x="34" y="18" width="12" height="10" rx="2" stroke="#8159BB" strokeWidth="1" />
    </svg>
  ),
  blogs: (
    <svg aria-hidden="true" width="48" height="32" viewBox="0 0 48 32" fill="none">
      <rect x="3" y="2" width="42" height="28" rx="2" stroke="#8159BB" strokeWidth="1" />
      <line x1="8" y1="8" x2="40" y2="8" stroke="#E2E4E7" strokeWidth="1.5" />
      <line x1="8" y1="13" x2="35" y2="13" stroke="#E2E4E7" strokeWidth="1.5" />
      <line x1="8" y1="18" x2="38" y2="18" stroke="#E2E4E7" strokeWidth="1.5" />
      <line x1="8" y1="23" x2="28" y2="23" stroke="#E2E4E7" strokeWidth="1.5" />
    </svg>
  ),
  stores: (
    <svg aria-hidden="true" width="48" height="32" viewBox="0 0 48 32" fill="none">
      <path d="M5 8h38l-3 20H8L5 8z" stroke="#8159BB" strokeWidth="1" />
      <circle cx="14" cy="14" r="3" stroke="#8159BB" strokeWidth="1" />
      <path d="M24 18h14" stroke="#E2E4E7" strokeWidth="1.5" />
      <path d="M24 22h10" stroke="#E2E4E7" strokeWidth="1.5" />
    </svg>
  ),
  'link-in-bio': (
    <svg aria-hidden="true" width="48" height="32" viewBox="0 0 48 32" fill="none">
      <circle cx="24" cy="10" r="4" stroke="#8159BB" strokeWidth="1" />
      <path d="M14 28c0-5.523 4.477-10 10-10s10 4.477 10 10" stroke="#8159BB" strokeWidth="1" />
      <circle cx="24" cy="17" r="9" stroke="#E2E4E7" strokeWidth="0.8" strokeDasharray="3 2" />
    </svg>
  ),
};

const VISIBLE_INITIAL = 6;

export default function AllGenerators() {
  const t = strings.en;
  const [query, setQuery] = useState('');
  const [expandedCats, setExpandedCats] = useState({});
  const showAllRefs = useRef({});

  const matches = useCallback(
    (entry) => {
      if (!query.trim()) return true;
      const q = query.toLowerCase();
      return entry.name.toLowerCase().includes(q);
    },
    [query],
  );

  const getCatMatches = useCallback(
    (catKey) => {
      const entries = directoryEntries[catKey] || [];
      if (!query.trim()) return entries;
      return entries.filter((e) => matches(e));
    },
    [query, matches],
  );

  const totalMatches = categoryKeys.reduce(
    (sum, key) => sum + getCatMatches(key).length,
    0,
  );

  const allTotal = categoryKeys.reduce(
    (sum, key) => sum + (directoryEntries[key] || []).length,
    0,
  );

  // Clear expanded state when search changes
  useEffect(() => {
    setExpandedCats({});
  }, [query]);

  const toggleCat = (catKey) => {
    setExpandedCats((prev) => ({ ...prev, [catKey]: !prev[catKey] }));
  };

  const clearSearch = () => setQuery('');

  return (
    <section id="all-generators" className="max-w-[1200px] mx-auto px-5 py-10">
      <h2 className="text-[26px] md:text-[32px] font-heading font-bold text-[#4B5056] mb-[5px]">
        {t.allHeading}
      </h2>
      <p className="text-[14px] text-[#636972] mb-[30px]">
        {t.allSub}
      </p>

      {/* Search */}
      <noscript>
        <style>{`.js-only { display: none !important; }`}</style>
      </noscript>
      <div className="flex flex-wrap items-center gap-[10px] mb-[30px]">
        <div className="search-input-wrap">
          <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            type="search"
            className="search-input js-only"
            placeholder={t.searchPlaceholder}
            aria-label={t.searchLabel}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          {/* Fallback for no-JS: just show input without JS filtering */}
          <input
            type="search"
            className="search-input"
            placeholder={t.searchPlaceholder}
            aria-label={t.searchLabel}
            defaultValue=""
            style={{ display: 'none' }}
            data-nojs="true"
          />
        </div>
        {query && (
          <span className="text-[13px] text-[#636972] js-only">
            {t.resultCount(totalMatches)}
          </span>
        )}
      </div>

      {/* No results */}
      {query && totalMatches === 0 && (
        <div className="text-center py-[30px] js-only">
          <p className="text-[14px] text-[#636972] mb-[10px]">{t.noResults}</p>
          <button type="button" className="btn-ghost" onClick={clearSearch}>
            {t.clearSearch}
          </button>
          <p className="text-[14px] text-[#636972] mt-[15px]">
            <a href="/s/ai_site_builder" className="text-brand-purple hover:underline">
              {t.noResultsFallback}
            </a>
          </p>
        </div>
      )}

      {/* Category subsections */}
      {categoryKeys.map((catKey) => {
        const cat = t.categories[catKey];
        const allEntries = directoryEntries[catKey] || [];
        const filteredEntries = getCatMatches(catKey);
        const hasSearch = !!query.trim();
        const isExpanded = expandedCats[catKey];
        const showAll = hasSearch || isExpanded;
        const visibleEntries = showAll ? filteredEntries : filteredEntries.slice(0, VISIBLE_INITIAL);
        const hiddenCount = filteredEntries.length - VISIBLE_INITIAL;
        const needsToggle = !hasSearch && hiddenCount > 0;

        // No match in this category with active search
        if (query && filteredEntries.length === 0) return null;

        return (
          <section key={catKey} id={catKey} className="mb-10">
            <h3 className="text-[20px] md:text-[24px] font-heading font-bold text-[#4B5056] mb-[2px]">
              {cat.name}
            </h3>
            <p className="text-[14px] text-[#636972] mb-[20px]">
              {cat.subdesc}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {visibleEntries.map((entry) => (
                <a
                  key={entry.slug}
                  href={`/generators/${entry.slug}`}
                  className="card flex flex-col gap-[8px]"
                >
                  <div className="mb-[4px]">{catIllus[catKey]}</div>
                  <span className="font-heading font-bold text-[15px] text-[#2E2E2F] leading-[1.2]">
                    {entry.name}
                  </span>
                  <span className="text-[13px] text-[#636972] leading-[1.5]">
                    {entry.name} — {cat.desc}
                  </span>
                </a>
              ))}

              {/* Hidden cards (render in DOM, collapsed via CSS) */}
              {needsToggle && (
                <>
                  <div
                    className="collapsible-cards grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 col-span-full js-only"
                    style={{
                      maxHeight: isExpanded ? '9999px' : '0px',
                    }}
                    ref={(el) => { showAllRefs.current[catKey] = el; }}
                  >
                    {needsToggle && isExpanded
                      ? null
                      : filteredEntries.slice(VISIBLE_INITIAL).map((entry) => (
                        <a
                          key={entry.slug}
                          href={`/generators/${entry.slug}`}
                          className="card flex flex-col gap-[8px]"
                        >
                          <div className="mb-[4px]">{catIllus[catKey]}</div>
                          <span className="font-heading font-bold text-[15px] text-[#2E2E2F] leading-[1.2]">
                            {entry.name}
                          </span>
                          <span className="text-[13px] text-[#636972] leading-[1.5]">
                            {entry.name} — {cat.desc}
                          </span>
                        </a>
                      ))}
                  </div>
                  {/* Also render hidden cards outside the collapsible wrapper for no-JS */}
                  <noscript>
                    {needsToggle &&
                      filteredEntries.slice(VISIBLE_INITIAL).map((entry) => (
                        <a
                          key={entry.slug}
                          href={`/generators/${entry.slug}`}
                          className="card flex flex-col gap-[8px]"
                        >
                          <div className="mb-[4px]">{catIllus[catKey]}</div>
                          <span className="font-heading font-bold text-[15px] text-[#2E2E2F] leading-[1.2]">
                            {entry.name}
                          </span>
                          <span className="text-[13px] text-[#636972] leading-[1.5]">
                            {entry.name} — {cat.desc}
                          </span>
                        </a>
                      ))}
                  </noscript>
                </>
              )}
            </div>

            {needsToggle && (
              <button
                type="button"
                className="show-all-toggle js-only mt-[20px]"
                aria-expanded={isExpanded}
                aria-controls={`${catKey}-more`}
                onClick={() => toggleCat(catKey)}
              >
                <span>{isExpanded ? t.showLess : `${t.showAll} ${hiddenCount} ${cat.name.toLowerCase()} generators`}</span>
                <svg
                  aria-hidden="true"
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  className="show-all-arrow"
                >
                  <path d="M3 4.5l3 3 3-3" stroke="#8159BB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            )}

            {/* No-JS: all cards visible, no toggle shown */}
            <noscript>
              <style>{`
                .js-only { display: none !important; }
                .collapsible-cards { max-height: none !important; }
              `}</style>
            </noscript>
          </section>
        );
      })}
    </section>
  );
}
