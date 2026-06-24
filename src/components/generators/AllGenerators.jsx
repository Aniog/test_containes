import { useState, useCallback, useMemo, useEffect, useRef } from 'react';
import strings from '@/data/strings';
import { categories, allGenerators } from '@/data/generators';
import { categoryIllustrations, SearchIcon } from './Icons';

const s = strings.en.allGenerators;
const INITIAL_VISIBLE = 6;

function CategorySection({ category, generators, searchQuery, containerRef }) {
  const [expanded, setExpanded] = useState(false);
  const contentRef = useRef(null);
  const [contentHeight, setContentHeight] = useState(0);

  const visibleGenerators = useMemo(() => {
    if (!searchQuery) return generators;
    const q = searchQuery.toLowerCase();
    return generators.filter(
      (g) =>
        g.name.toLowerCase().includes(q) ||
        g.description.toLowerCase().includes(q) ||
        category.name.toLowerCase().includes(q)
    );
  }, [generators, searchQuery, category.name]);

  const shouldShow = visibleGenerators.length > 0;

  // Measure content height for animation
  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, [visibleGenerators.length]);

  const Illustration = categoryIllustrations[category.id];
  const isCollapsible = generators.length > INITIAL_VISIBLE && !searchQuery;
  const visible = expanded || !isCollapsible ? visibleGenerators : visibleGenerators.slice(0, INITIAL_VISIBLE);
  const hiddenCount = visibleGenerators.length - visible.length;

  if (!shouldShow) return null;

  return (
    <div id={category.id} className="mb-8 scroll-mt-[80px]">
      <div className="flex items-center gap-3 mb-1">
        {Illustration && <Illustration className="w-[32px] h-[32px]" />}
        <h3 className="font-heading font-bold text-[18px] md:text-[20px] uppercase text-text-heading m-0 leading-[1.2]">
          {category.name}
        </h3>
      </div>
      <p className="text-text-body text-[14px] m-0 mb-5">{category.description}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {visible.map((gen) => (
          <a
            key={gen.slug}
            href={`/generators/${gen.slug}`}
            className="group flex flex-col bg-white border border-card-border rounded-card p-4 hover:border-brand-purple hover:shadow-[0_2px_12px_rgba(129,89,187,0.1)] transition-all"
          >
            {Illustration && (
              <div className="mb-3">
                <Illustration className="w-[40px] h-[40px]" />
              </div>
            )}
            <h4 className="font-heading font-bold text-[14px] uppercase text-text-heading m-0 mb-1 leading-snug group-hover:text-brand-purple transition-colors">
              {gen.name}
            </h4>
            <p className="text-text-body text-[13px] m-0 leading-relaxed">{gen.description}</p>
          </a>
        ))}
      </div>
      {isCollapsible && hiddenCount > 0 && (
        <div
          ref={contentRef}
          className="show-all-content"
          data-collapsed={(!expanded).toString()}
          style={{ maxHeight: expanded ? `${contentHeight}px` : '0px' }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            {visibleGenerators.slice(INITIAL_VISIBLE).map((gen) => (
              <a
                key={gen.slug}
                href={`/generators/${gen.slug}`}
                className="group flex flex-col bg-white border border-card-border rounded-card p-4 hover:border-brand-purple hover:shadow-[0_2px_12px_rgba(129,89,187,0.1)] transition-all"
              >
                {Illustration && (
                  <div className="mb-3">
                    <Illustration className="w-[40px] h-[40px]" />
                  </div>
                )}
                <h4 className="font-heading font-bold text-[14px] uppercase text-text-heading m-0 mb-1 leading-snug group-hover:text-brand-purple transition-colors">
                  {gen.name}
                </h4>
                <p className="text-text-body text-[13px] m-0 leading-relaxed">{gen.description}</p>
              </a>
            ))}
          </div>
        </div>
      )}
      {isCollapsible && (
        <button
          type="button"
          onClick={() => setExpanded((prev) => !prev)}
          aria-expanded={expanded}
          aria-controls={category.id}
          className="mt-4 font-heading font-bold text-[13px] uppercase text-brand-purple bg-transparent border-none p-0 cursor-pointer hover:underline"
        >
          {expanded ? s.showLess : s.showAll(generators.length)}
        </button>
      )}
    </div>
  );
}

export default function AllGenerators() {
  const [searchQuery, setSearchQuery] = useState('');
  const containerRef = useRef(null);

  const totalCount = useMemo(() => {
    if (!searchQuery) return 0;
    const q = searchQuery.toLowerCase();
    let count = 0;
    categories.forEach((cat) => {
      const generators = allGenerators[cat.id] || [];
      count += generators.filter(
        (g) =>
          g.name.toLowerCase().includes(q) ||
          g.description.toLowerCase().includes(q) ||
          cat.name.toLowerCase().includes(q)
      ).length;
    });
    return count;
  }, [searchQuery]);

  const totalGenerators = useMemo(() => {
    return categories.reduce((sum, cat) => sum + (allGenerators[cat.id]?.length || 0), 0);
  }, []);

  const handleClearSearch = useCallback(() => {
    setSearchQuery('');
  }, []);

  return (
    <section id="all-generators" className="bg-white py-10 md:py-[40px]">
      <div className="max-w-content mx-auto px-5">
        <div className="text-center mb-6">
          <h2 className="font-heading font-bold uppercase text-[24px] md:text-[30px] text-text-heading leading-[1.2] m-0 mb-2">
            {s.heading}
          </h2>
          <p className="text-text-body text-[15px] m-0">{s.subheading}</p>
        </div>

        {/* Search input */}
        <div className="max-w-[480px] mx-auto mb-8">
          <div className="relative">
            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-card-border pointer-events-none" />
            <input
              type="search"
              placeholder={s.searchPlaceholder}
              aria-label={s.searchAriaLabel}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-[44px] pl-10 pr-4 border border-card-border rounded-[4px] text-[14px] text-text-heading bg-white placeholder:text-card-border focus:outline-none focus:border-brand-purple transition-colors"
            />
          </div>
          {searchQuery && (
            <p className="text-[13px] text-text-body mt-2 text-center" role="status" aria-live="polite">
              {s.resultCount(totalCount)}
            </p>
          )}
        </div>

        {/* No results */}
        {searchQuery && totalCount === 0 && (
          <div className="text-center py-10">
            <p className="text-text-heading text-[16px] mb-3">{s.noResults}</p>
            <button
              type="button"
              onClick={handleClearSearch}
              className="inline-block font-heading font-bold text-[13px] uppercase text-brand-purple bg-transparent border-none p-0 cursor-pointer hover:underline mb-3"
            >
              {s.clearSearch}
            </button>
            <p className="text-text-body text-[14px]">
              {s.cantFind}{' '}
              <a href={s.cantFindLink} className="text-brand-purple hover:underline">
                {s.cantFindLink}
              </a>
            </p>
          </div>
        )}

        {/* Category sections */}
        <div ref={containerRef}>
          {categories.map((cat) => (
            <CategorySection
              key={cat.id}
              category={cat}
              generators={allGenerators[cat.id] || []}
              searchQuery={searchQuery}
              containerRef={containerRef}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
