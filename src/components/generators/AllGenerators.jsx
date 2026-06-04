import React, { useState, useMemo, useEffect, useRef, useCallback } from 'react';
import strings from '@/data/strings.en.js';
import { categoryGenerators, categoryMeta } from '@/data/generators.js';

const CATEGORY_KEYS = ['websites', 'landing-pages', 'portfolios', 'blogs', 'stores', 'link-in-bio'];
const DEFAULT_VISIBLE = 6;

function CategoryIllustration({ catKey }) {
  const colors = {
    websites: '#8159BB',
    'landing-pages': '#7671FF',
    portfolios: '#CB0C9F',
    blogs: '#8159BB',
    stores: '#7671FF',
    'link-in-bio': '#CB0C9F',
  };
  const c = colors[catKey] || '#8159BB';
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
      <rect width="36" height="36" rx="6" fill={c} opacity="0.1" />
      <rect x="8" y="10" width="20" height="16" rx="3" stroke={c} strokeWidth="1.2" />
      <rect x="8" y="10" width="20" height="4" rx="3" fill={c} opacity="0.12" />
      <circle cx="12" cy="12" r="1" fill={c} />
      <circle cx="15" cy="12" r="1" fill={c} />
      <circle cx="18" cy="12" r="1" fill={c} />
    </svg>
  );
}

function GeneratorCard({ gen }) {
  return (
    <a
      href={`/generators/${gen.slug}`}
      className="card no-underline flex flex-col gap-[10px] focus-ring"
      style={{ minHeight: '100px' }}
    >
      <div className="shrink-0">
        <CategoryIllustration catKey={gen._catKey} />
      </div>
      <div>
        <h4 className="font-heading font-bold text-[15px] uppercase text-hero-dark m-0 mb-[4px] leading-[1.2]">
          {gen.name}
        </h4>
        <p className="text-[13px] text-body-gray m-0 leading-relaxed">
          {gen.desc}
        </p>
      </div>
    </a>
  );
}

function CategorySection({ catKey, generators, hidden }) {
  const meta = categoryMeta[catKey];
  const [showAll, setShowAll] = useState(true); // start expanded (no-JS baseline)
  const [jsReady, setJsReady] = useState(false);
  const containerRef = useRef(null);
  const hiddenRef = useRef(null);

  const hasMore = generators.length > DEFAULT_VISIBLE;

  // Progressive enhancement: collapse extras after mount
  useEffect(() => {
    setJsReady(true);
  }, []);

  // After JS confirms ready, collapse extras if hasMore
  useEffect(() => {
    if (!jsReady || !hasMore) return;
    const id = setTimeout(() => setShowAll(false), 0);
    return () => clearTimeout(id);
  }, [jsReady, hasMore]);

  // Toggle visibility of collapsed cards using CSS height transition
  useEffect(() => {
    if (!hiddenRef.current) return;
    const wrapper = hiddenRef.current;
    if (showAll) {
      wrapper.style.maxHeight = wrapper.scrollHeight + 'px';
      wrapper.style.opacity = '1';
      wrapper.style.overflow = 'hidden';
      wrapper.style.transition = 'max-height 0.35s ease, opacity 0.35s ease';
    } else {
      wrapper.style.maxHeight = '0px';
      wrapper.style.opacity = '0';
      wrapper.style.overflow = 'hidden';
      wrapper.style.transition = 'max-height 0.35s ease, opacity 0.35s ease';
    }
  }, [showAll]);

  if (hidden) return null;

  return (
    <section id={catKey} className="mb-[40px]" ref={containerRef}>
      <h3 className="font-heading font-bold text-[18px] uppercase text-heading-gray m-0 mb-[5px] leading-[1.2]">
        {meta.name}
      </h3>
      <p className="text-[13px] text-body-gray m-0 mb-[20px]">
        {meta.desc}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[15px]">
        {generators.slice(0, DEFAULT_VISIBLE).map((gen) => (
          <GeneratorCard key={gen.slug} gen={gen} />
        ))}
      </div>
      {hasMore && (
        <>
          <div ref={hiddenRef} style={{ maxHeight: '9999px', opacity: 1, overflow: 'hidden' }}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[15px] mt-[15px]">
              {generators.slice(DEFAULT_VISIBLE).map((gen) => (
                <GeneratorCard key={gen.slug} gen={gen} />
              ))}
            </div>
          </div>
          <button
            type="button"
            className="btn-ghost mt-[15px]"
            style={{ height: '36px' }}
            onClick={() => setShowAll(!showAll)}
            aria-expanded={showAll}
            aria-controls={`${catKey}-hidden`}
          >
            {showAll ? strings.showLess : `${strings.showAll} ${generators.length} generators`}
          </button>
        </>
      )}
    </section>
  );
}

export default function AllGenerators() {
  const [query, setQuery] = useState('');

  // Annotate each generator with its category key
  const allFlat = useMemo(() => {
    const flat = [];
    CATEGORY_KEYS.forEach((catKey) => {
      (categoryGenerators[catKey] || []).forEach((gen) => {
        flat.push({ ...gen, _catKey: catKey });
      });
    });
    return flat;
  }, []);

  const filtered = useMemo(() => {
    if (!query.trim()) return allFlat;
    const q = query.toLowerCase();
    return allFlat.filter((g) => {
      const meta = categoryMeta[g._catKey];
      return (
        g.name.toLowerCase().includes(q) ||
        g.desc.toLowerCase().includes(q) ||
        (meta && meta.name.toLowerCase().includes(q))
      );
    });
  }, [query, allFlat]);

  const hasQuery = query.trim().length > 0;

  // Group filtered by category
  const grouped = useMemo(() => {
    const map = {};
    CATEGORY_KEYS.forEach((k) => {
      const items = filtered.filter((g) => g._catKey === k);
      if (items.length > 0) map[k] = items;
    });
    return map;
  }, [filtered]);

  const getGensForCategory = useCallback((catKey) => {
    if (hasQuery) {
      return grouped[catKey] || [];
    }
    return (categoryGenerators[catKey] || []).map((g) => ({ ...g, _catKey: catKey }));
  }, [hasQuery, grouped]);

  return (
    <section
      id="all-generators"
      className="py-[40px]"
      style={{ background: '#FFFFFF' }}
    >
      <div className="max-content section-padding">
        <h2 className="text-[26px] md:text-[32px] text-heading-gray m-0 mb-[5px]">
          {strings.allHeading}
        </h2>
        <p className="text-[14px] text-body-gray m-0 mb-[30px]">
          {strings.allSub}
        </p>

        {/* Search */}
        <div className="mb-[10px]" style={{ maxWidth: '480px' }}>
          <div className="relative">
            <svg
              className="absolute start-[12px] top-1/2 -translate-y-1/2 pointer-events-none"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden="true"
            >
              <circle cx="7" cy="7" r="5" stroke="#C6C9CD" strokeWidth="1.5" />
              <path d="M11 11L14 14" stroke="#C6C9CD" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <input
              type="search"
              aria-label={strings.searchLabel}
              placeholder={strings.searchPlaceholder}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full h-[40px] rounded-card border border-card-border bg-white ps-[38px] pe-[12px] text-[14px] font-body outline-none transition-colors"
              style={{ color: '#2E2E2F' }}
              onFocus={(e) => { e.target.style.borderColor = '#8159BB'; }}
              onBlur={(e) => { e.target.style.borderColor = '#C6C9CD'; }}
            />
          </div>
          {hasQuery && (
            <p className="text-[12px] text-body-gray mt-[8px] m-0">
              {filtered.length} {strings.generatorsMatch}
            </p>
          )}
        </div>

        {/* No results */}
        {hasQuery && filtered.length === 0 && (
          <div className="text-center py-[40px]">
            <p className="text-[16px] text-heading-gray m-0 mb-[10px] font-semibold" style={{ textTransform: 'none', fontFamily: '"Open Sans", sans-serif' }}>
              {strings.noResults}
            </p>
            <a href={strings.aiBuilderUrl} className="btn-primary no-underline">
              {strings.noResultsCTA}
            </a>
          </div>
        )}

        {/* Category subsections */}
        {CATEGORY_KEYS.map((catKey) => (
          <CategorySection
            key={catKey}
            catKey={catKey}
            generators={getGensForCategory(catKey)}
            hidden={hasQuery && !grouped[catKey]}
          />
        ))}
      </div>
    </section>
  );
}