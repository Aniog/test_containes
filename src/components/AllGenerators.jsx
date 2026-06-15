import React, { useState, useMemo } from 'react';
import { strings } from '@/lib/strings';
import { generatorsData } from '@/lib/data';
import { Search, ChevronDown, ChevronUp } from 'lucide-react';

const SubsectionIcon = () => (
  <div className="w-[30px] h-[30px] bg-[var(--brand-purple)] bg-opacity-10 rounded-sm flex items-center justify-center mb-4">
    <div className="w-[12px] h-[12px] bg-[var(--brand-purple)] rounded-full" />
  </div>
);

export const AllGenerators = () => {
  const t = strings.en.allGenerators;
  const categories = generatorsData.categories;
  const [search, setSearch] = useState('');
  const [expandedCats, setExpandedCats] = useState({});

  const filteredCategories = useMemo(() => {
    const query = search.toLowerCase();
    const result = {};
    let totalCount = 0;

    Object.keys(categories).forEach((key) => {
      const cat = categories[key];
      const items = cat.items.filter(
        (item) =>
          item.name.toLowerCase().includes(query) ||
          item.description.toLowerCase().includes(query) ||
          cat.name.toLowerCase().includes(query)
      );

      if (items.length > 0) {
        result[key] = { ...cat, items };
        totalCount += items.length;
      }
    });

    return { result, totalCount };
  }, [search, categories]);

  const toggleExpand = (key) => {
    setExpandedCats((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const clearSearch = () => setSearch('');

  return (
    <section id="all-generators" className="bg-white">
      <div className="container-custom">
        <h2 className="section-title text-center">{t.title}</h2>
        <p className="section-subtitle text-center mb-[40px]">{t.subtitle}</p>

        {/* Search Input */}
        <div className="max-w-[480px] mx-auto mb-[40px]">
          <div className="relative">
            <Search className="absolute left-[15px] top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--body-text)]" />
            <input
              type="text"
              className="w-full h-[48px] pl-[45px] pr-[15px] border border-[var(--card-border)] rounded-[4px] focus:outline-none focus:border-[var(--brand-purple)] transition-all"
              placeholder={t.searchPlaceholder}
              aria-label="Search generators"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="mt-[10px] text-[12px] text-[var(--body-text)]">
            {t.matchCount.replace('{count}', filteredCategories.totalCount)}
          </div>
        </div>

        {filteredCategories.totalCount === 0 ? (
          <div className="text-center py-[60px]">
            <p className="text-[var(--body-text)] mb-[20px]">{t.noResults}</p>
            <button
              onClick={clearSearch}
              className="btn btn-ghost"
            >
              {t.clearSearch}
            </button>
            <div className="mt-4">
              <a href="/s/ai_site_builder" className="text-[var(--brand-purple)] font-bold hover:underline">
                Can't find it? Start with our AI builder.
              </a>
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-[60px]">
            {Object.keys(filteredCategories.result).map((key) => {
              const cat = filteredCategories.result[key];
              const isExpanded = expandedCats[key] || search !== '';
              const limit = 4; // Show 4 items by default
              const visibleItems = isExpanded ? cat.items : cat.items.slice(0, limit);
              const canExpand = cat.items.length > limit && search === '';

              return (
                <div key={key} id={key} className="scroll-mt-[100px]">
                  <h3 className="text-[20px] font-bold text-[var(--hero-h1-dark)] mb-[5px]">
                    {cat.name}
                  </h3>
                  <p className="text-[14px] text-[var(--body-text)] mb-[20px]">
                    {cat.description}
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px]">
                    {visibleItems.map((item, idx) => (
                      <a
                        key={idx}
                        href={`/generators/${item.slug}`}
                        className="card flex flex-col gap-[10px]"
                      >
                        <SubsectionIcon />
                        <h4 className="text-[16px] font-bold text-[var(--hero-h1-dark)] normal-case">
                          {item.name}
                        </h4>
                        <p className="text-[14px] text-[var(--body-text)]">
                          {item.description}
                        </p>
                      </a>
                    ))}
                  </div>

                  {canExpand && (
                    <div className="mt-[20px] flex justify-center">
                      <button
                        onClick={() => toggleExpand(key)}
                        className="btn btn-ghost gap-2"
                        aria-expanded={isExpanded}
                        aria-controls={`${key}-grid`}
                      >
                        {isExpanded
                          ? t.showLess
                          : t.showAll.replace('{count}', cat.items.length)}
                        {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </button>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};
