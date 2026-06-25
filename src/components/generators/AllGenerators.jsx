import { useState, useMemo } from 'react';

const INITIAL_VISIBLE = 6;

const CategoryThumbnail = ({ category }) => {
  const colors = {
    websites: '#8159BB',
    'landing-pages': '#7671FF',
    portfolios: '#9B59B6',
    blogs: '#CB0C9F',
    stores: '#8159BB',
    'link-in-bio': '#7671FF',
  };
  const color = colors[category] || '#8159BB';

  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true" className="shrink-0">
      <rect x="2" y="2" width="28" height="28" rx="4" fill={color} opacity="0.08" />
      <rect x="6" y="8" width="20" height="16" rx="2" stroke={color} strokeWidth="1.2" opacity="0.5" />
      <rect x="9" y="12" width="8" height="3" rx="1" fill={color} opacity="0.3" />
      <rect x="9" y="17" width="14" height="2" rx="1" fill={color} opacity="0.15" />
    </svg>
  );
};

function GeneratorCard({ gen, categorySlug, hidden }) {
  return (
    <article className={hidden ? 'hidden' : ''}>
      <a
        href={`/generators/${gen.slug}`}
        className="flex items-start gap-[10px] bg-white border border-card-border rounded-[3px] p-[20px] card-hover h-full"
      >
        <CategoryThumbnail category={categorySlug} />
        <div className="min-w-0">
          <h4 className="font-heading text-[13px] text-heading-dark m-0 mb-[5px]">
            {gen.name}
          </h4>
          <p className="text-body-text text-[13px] m-0 leading-snug">
            {gen.description}
          </p>
        </div>
      </a>
    </article>
  );
}

function CategorySubsection({ category, generators, searchQuery }) {
  const [expanded, setExpanded] = useState(false);
  const sectionId = category.slug;
  const contentId = `${sectionId}-content`;

  const filteredGenerators = useMemo(() => {
    if (!searchQuery) return generators;
    const q = searchQuery.toLowerCase();
    return generators.filter(
      (gen) =>
        gen.name.toLowerCase().includes(q) ||
        gen.description.toLowerCase().includes(q) ||
        category.name.toLowerCase().includes(q)
    );
  }, [generators, searchQuery, category.name]);

  if (searchQuery && filteredGenerators.length === 0) return null;

  const hasMore = !searchQuery && filteredGenerators.length > INITIAL_VISIBLE;

  return (
    <div id={sectionId} className="mb-[40px]">
      <h3 className="font-heading text-[20px] md:text-[22px] text-heading m-0 mb-[5px]">
        {category.name}
      </h3>
      <p className="text-body-text text-[13px] m-0 mb-[20px]">
        {category.description}
      </p>
      <div
        id={contentId}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px]"
      >
        {filteredGenerators.map((gen, index) => (
          <GeneratorCard
            key={gen.slug}
            gen={gen}
            categorySlug={category.slug}
            hidden={!expanded && !searchQuery && index >= INITIAL_VISIBLE}
          />
        ))}
      </div>
      {hasMore && (
        <button
          type="button"
          onClick={() => setExpanded(!expanded)}
          aria-expanded={expanded}
          aria-controls={contentId}
          className="mt-[20px] font-heading text-[12px] text-brand-purple bg-transparent border border-brand-purple rounded-[4px] h-[36px] px-[15px] cursor-pointer hover:bg-brand-purple hover:text-white transition-colors"
        >
          {expanded ? 'Show less' : `Show all ${filteredGenerators.length} generators`}
        </button>
      )}
    </div>
  );
}

export default function AllGenerators({ t, categories, generators }) {
  const [searchQuery, setSearchQuery] = useState('');

  const totalMatches = useMemo(() => {
    if (!searchQuery) return null;
    const q = searchQuery.toLowerCase();
    let count = 0;
    for (const cat of categories) {
      const gens = generators[cat.slug] || [];
      count += gens.filter(
        (gen) =>
          gen.name.toLowerCase().includes(q) ||
          gen.description.toLowerCase().includes(q) ||
          cat.name.toLowerCase().includes(q)
      ).length;
    }
    return count;
  }, [searchQuery, categories, generators]);

  return (
    <section id="all-generators" className="py-[40px] bg-light-bg">
      <div className="max-w-[1200px] mx-auto px-5">
        <h2 className="font-heading text-[26px] md:text-[30px] text-heading m-0 mb-[5px]">
          {t.allGenerators.heading}
        </h2>
        <p className="text-body-text m-0 mb-[30px]">
          {t.allGenerators.subheading}
        </p>

        {/* Search */}
        <div className="mb-[30px] max-w-[480px]">
          <div className="relative">
            <svg
              width="18" height="18" viewBox="0 0 18 18" fill="none"
              className="absolute left-[12px] top-1/2 -translate-y-1/2 pointer-events-none"
              aria-hidden="true"
            >
              <circle cx="7.5" cy="7.5" r="5.5" stroke="#636972" strokeWidth="1.5" />
              <line x1="11.5" y1="11.5" x2="16" y2="16" stroke="#636972" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <input
              type="search"
              aria-label="Search generators"
              placeholder={t.allGenerators.searchPlaceholder}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-[40px] pl-[40px] pr-[15px] border border-card-border rounded-[4px] text-[14px] text-heading-dark bg-white outline-none focus:border-brand-purple transition-colors"
            />
          </div>
          {searchQuery && totalMatches !== null && totalMatches > 0 && (
            <p className="text-body-text text-[12px] mt-[8px] m-0">
              {t.allGenerators.matchCount(totalMatches)}
            </p>
          )}
        </div>

        {/* No results */}
        {searchQuery && totalMatches === 0 && (
          <div className="text-center py-[40px]">
            <p className="text-body-text mb-[10px]">{t.allGenerators.noResults}</p>
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              className="font-heading text-[12px] text-brand-purple bg-transparent border border-brand-purple rounded-[4px] h-[36px] px-[15px] cursor-pointer hover:bg-brand-purple hover:text-white transition-colors"
            >
              {t.allGenerators.clearSearch}
            </button>
            <p className="text-body-text text-[13px] mt-[15px]">
              <a href="/s/ai_site_builder" className="text-brand-purple hover:underline">
                {t.allGenerators.cantFind}
              </a>
            </p>
          </div>
        )}

        {/* Category subsections */}
        {categories.map((cat) => (
          <CategorySubsection
            key={cat.id}
            category={cat}
            generators={generators[cat.slug] || []}
            searchQuery={searchQuery}
          />
        ))}
      </div>
    </section>
  );
}
