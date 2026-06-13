import { useState, useMemo, useCallback, useRef, useEffect } from 'react';
import strings from '@/strings.en.js';
import { categories, allGenerators } from '@/data/generators.js';
import { Search, X } from 'lucide-react';

const INITIAL_VISIBLE = 6;

function CategoryThumbnail({ slug }) {
  const icons = {
    websites: <svg width="48" height="32" viewBox="0 0 48 32" fill="none" aria-hidden="true"><rect x="2" y="2" width="44" height="28" rx="3" stroke="#C6C9CD" strokeWidth="1" fill="none"/><rect x="2" y="2" width="44" height="7" rx="3" fill="#F4F6F8"/><circle cx="8" cy="5.5" r="1.5" fill="#C6C9CD"/><circle cx="13" cy="5.5" r="1.5" fill="#C6C9CD"/><circle cx="18" cy="5.5" r="1.5" fill="#C6C9CD"/></svg>,
    'landing-pages': <svg width="48" height="32" viewBox="0 0 48 32" fill="none" aria-hidden="true"><rect x="4" y="2" width="40" height="28" rx="3" stroke="#C6C9CD" strokeWidth="1" fill="none"/><line x1="4" y1="11" x2="44" y2="11" stroke="#E2E4E7" strokeWidth="1"/><rect x="10" y="17" width="28" height="3" rx="1.5" fill="#E2E4E7"/><rect x="10" y="23" width="18" height="3" rx="1.5" fill="#E2E4E7"/></svg>,
    portfolios: <svg width="48" height="32" viewBox="0 0 48 32" fill="none" aria-hidden="true"><rect x="5" y="4" width="12" height="11" rx="2" stroke="#C6C9CD" strokeWidth="1" fill="none"/><rect x="20" y="4" width="12" height="11" rx="2" stroke="#C6C9CD" strokeWidth="1" fill="none"/><rect x="35" y="4" width="8" height="11" rx="2" stroke="#C6C9CD" strokeWidth="1" fill="none"/><rect x="5" y="18" width="18" height="11" rx="2" stroke="#C6C9CD" strokeWidth="1" fill="none"/><rect x="26" y="18" width="17" height="11" rx="2" stroke="#C6C9CD" strokeWidth="1" fill="none"/></svg>,
    blogs: <svg width="48" height="32" viewBox="0 0 48 32" fill="none" aria-hidden="true"><rect x="6" y="2" width="36" height="28" rx="3" stroke="#C6C9CD" strokeWidth="1" fill="none"/><line x1="12" y1="10" x2="36" y2="10" stroke="#E2E4E7" strokeWidth="1"/><line x1="12" y1="15" x2="36" y2="15" stroke="#E2E4E7" strokeWidth="1"/><line x1="12" y1="20" x2="28" y2="20" stroke="#E2E4E7" strokeWidth="1"/><line x1="12" y1="25" x2="32" y2="25" stroke="#E2E4E7" strokeWidth="1"/></svg>,
    stores: <svg width="48" height="32" viewBox="0 0 48 32" fill="none" aria-hidden="true"><circle cx="24" cy="16" r="12" stroke="#C6C9CD" strokeWidth="1" fill="none"/><circle cx="24" cy="11" r="3.5" stroke="#C6C9CD" strokeWidth="1" fill="none"/><path d="M16 25 C16 21 19.5 18 24 18 C28.5 18 32 21 32 25" stroke="#C6C9CD" strokeWidth="1" fill="none"/></svg>,
    'link-in-bio': <svg width="48" height="32" viewBox="0 0 48 32" fill="none" aria-hidden="true"><circle cx="24" cy="16" r="12" stroke="#C6C9CD" strokeWidth="1" fill="none"/><path d="M18 16 L22 20 L30 12" stroke="#C6C9CD" strokeWidth="1.5" fill="none"/></svg>,
  };
  return (
    <div className="flex justify-center mb-[8px]">
      {icons[slug] || icons.websites}
    </div>
  );
}

function slugify(name) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

export default function AllGenerators() {
  const [query, setQuery] = useState('');
  const [expanded, setExpanded] = useState({});
  const sectionRef = useRef(null);

  // Progressive enhancement: on mount, collapse extras after JS hydrates
  useEffect(() => {
    const initial = {};
    Object.keys(allGenerators).forEach((key) => {
      initial[key] = false;
    });
    setExpanded(initial);
  }, []);

  const normalizedQuery = query.toLowerCase().trim();

  const filteredCategories = useMemo(() => {
    if (!normalizedQuery) {
      return categories.map((cat) => ({
        ...cat,
        filteredGens: allGenerators[cat.slug] || [],
      }));
    }
    return categories.filter((cat) => {
      const gens = allGenerators[cat.slug] || [];
      return gens.some((g) =>
        g.name.toLowerCase().includes(normalizedQuery) ||
        g.desc.toLowerCase().includes(normalizedQuery) ||
        cat.name.toLowerCase().includes(normalizedQuery)
      );
    }).map((cat) => {
      const gens = (allGenerators[cat.slug] || []).filter((g) =>
        g.name.toLowerCase().includes(normalizedQuery) ||
        g.desc.toLowerCase().includes(normalizedQuery) ||
        cat.name.toLowerCase().includes(normalizedQuery)
      );
      return { ...cat, filteredGens: gens };
    });
  }, [normalizedQuery]);

  const totalMatches = filteredCategories.reduce((sum, c) => sum + c.filteredGens.length, 0);

  const toggleExpand = useCallback((catSlug) => {
    setExpanded((prev) => ({ ...prev, [catSlug]: !prev[catSlug] }));
  }, []);

  return (
    <section id="all-generators" className="py-[40px]" ref={sectionRef}>
      <div className="section-container">
        <h2 className="font-heading font-bold uppercase text-[26px] md:text-[30px] text-heading leading-[1.2] mb-[5px]">
          {strings.allHeading}
        </h2>
        <p className="text-body text-[14px] mb-[20px]">
          {strings.allSub}
        </p>

        {/* Search */}
        <div className="relative max-w-[480px] mb-[20px]">
          <label htmlFor="generator-search" className="sr-only">{strings.searchLabel}</label>
          <Search className="absolute start-[12px] top-[50%] -translate-y-[50%] w-[16px] h-[16px] text-body" aria-hidden="true" />
          <input
            id="generator-search"
            type="text"
            aria-label={strings.searchLabel}
            className="w-full h-[40px] ps-[38px] pe-[38px] rounded-[4px] border border-card-border text-[14px] text-heading-dark bg-white placeholder:text-[#9CA3AF] focus:outline-none focus:border-brand-purple transition-colors"
            placeholder={strings.searchPlaceholder}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="absolute end-[8px] top-[50%] -translate-y-[50%] p-[4px] rounded-full text-body hover:text-heading-dark transition-colors"
              aria-label={strings.clearSearch}
            >
              <X className="w-[14px] h-[14px]" />
            </button>
          )}
        </div>

        {query && (
          <p className="text-[13px] text-body mb-[15px]">
            {strings.resultsCount(totalMatches)}
          </p>
        )}

        {query && totalMatches === 0 ? (
          <div className="text-center py-[40px]">
            <p className="text-[16px] text-heading-dark mb-[10px]">{strings.noResults}</p>
            <button
              onClick={() => setQuery('')}
              className="btn-ghost mb-[10px]"
            >
              {strings.clearSearch}
            </button>
            <p>
              <a href="/s/ai_site_builder" className="text-brand-purple underline hover:no-underline">
                {strings.noResultsFallback}
              </a>
            </p>
          </div>
        ) : (
          <div className="space-y-[40px]">
            {filteredCategories.map((cat) => {
              const gens = cat.filteredGens;
              const isExpanded = expanded[cat.slug] || false;
              const hasMore = gens.length > INITIAL_VISIBLE;
              const toggleId = `toggle-${cat.slug}`;
              const sectionId = `section-${cat.slug}`;

              return (
                <section key={cat.slug} id={cat.slug}>
                  <h3 className="font-heading font-bold uppercase text-[18px] md:text-[20px] text-heading leading-[1.2] mb-[5px]">
                    {cat.name}
                  </h3>
                  <p className="text-body text-[14px] mb-[15px]">
                    {cat.desc}
                  </p>
                  <div
                    id={sectionId}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px]"
                  >
                    {gens.map((gen, idx) => {
                      const isHidden = hasMore && !isExpanded && idx >= INITIAL_VISIBLE;
                      return (
                        <a
                          key={gen.name}
                          href={`/generators/${slugify(gen.name)}`}
                          className={`card flex flex-col overflow-hidden transition-all duration-300 ${
                            isHidden ? 'max-h-0 opacity-0 mt-0 mb-0 p-0 border-0 pointer-events-none' : ''
                          }`}
                          aria-hidden={isHidden}
                          tabIndex={isHidden ? -1 : 0}
                        >
                          <CategoryThumbnail slug={cat.slug} />
                          <h4 className="font-heading font-bold uppercase text-[14px] text-heading-dark leading-[1.2] mb-[5px]">
                            {gen.name}
                          </h4>
                          <p className="text-body text-[13px] leading-[1.5]">
                            {gen.desc}
                          </p>
                        </a>
                      );
                    })}
                  </div>
                  {hasMore && (
                    <div className="mt-[15px]">
                      <button
                        id={toggleId}
                        onClick={() => toggleExpand(cat.slug)}
                        aria-expanded={isExpanded}
                        aria-controls={sectionId}
                        className="btn-ghost"
                      >
                        {isExpanded
                          ? strings.showLess
                          : strings.showAll(gens.length, cat.name)}
                      </button>
                    </div>
                  )}
                </section>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}