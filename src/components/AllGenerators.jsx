import React, { useState, useMemo } from 'react';
import { strings } from '../lib/strings';
import { generatorsData } from '../lib/data';
import { Search, X } from 'lucide-react';

const AllGenerators = () => {
  const s = strings.en.all_generators;
  const categoriesStrings = strings.en.categories;
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedCategories, setExpandedCategories] = useState({});

  const categoryMap = {
    'websites': 'Websites',
    'landing-pages': 'Landing Pages',
    'portfolios': 'Portfolios',
    'blogs': 'Blogs',
    'stores': 'Online Stores',
    'link-in-bio': 'Link-in-Bio'
  };

  const filteredGenerators = useMemo(() => {
    if (!searchQuery.trim()) return generatorsData;
    const lowerQuery = searchQuery.toLowerCase();
    return generatorsData.filter(gen => 
      gen.name.toLowerCase().includes(lowerQuery) || 
      gen.desc.toLowerCase().includes(lowerQuery) || 
      gen.category.toLowerCase().includes(lowerQuery)
    );
  }, [searchQuery]);

  const groupedGenerators = useMemo(() => {
    const groups = {};
    Object.entries(categoryMap).forEach(([id, name]) => {
      groups[id] = filteredGenerators.filter(gen => gen.category === name);
    });
    return groups;
  }, [filteredGenerators]);

  const totalMatches = filteredGenerators.length;

  const toggleExpand = (catId) => {
    setExpandedCategories(prev => ({
      ...prev,
      [catId]: !prev[catId]
    }));
  };

  const clearSearch = () => setSearchQuery('');

  return (
    <section id="all-generators" className="bg-white py-16 scroll-mt-20">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="mb-12 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl text-heading-dark mb-2 tracking-tight">
            {s.title}
          </h2>
          <p className="text-body-text">{s.subtitle}</p>
        </div>

        {/* Search Bar */}
        <div className="mb-12 flex flex-col gap-4">
          <div className="relative max-w-[480px]">
            <label htmlFor="generator-search" className="sr-only">{s.search_placeholder}</label>
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-body-text/40">
              <Search className="w-5 h-5" />
            </div>
            <input
              id="generator-search"
              type="text"
              className="block w-full pl-10 pr-10 py-3 border border-card-border rounded-[4px] bg-white text-sm focus:outline-none focus:ring-1 focus:ring-brand-purple focus:border-brand-purple transition-all"
              placeholder={s.search_placeholder}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search generators"
            />
            {searchQuery && (
              <button 
                onClick={clearSearch}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-body-text/40 hover:text-body-text transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>
          <p className="text-xs font-semibold uppercase tracking-widest text-body-text/60">
            {searchQuery ? s.match_count.replace('{count}', totalMatches) : `${generatorsData.length} TOTAL GENERATORS`}
          </p>
        </div>

        {/* Sections */}
        {totalMatches > 0 ? (
          <div className="space-y-20">
            {Object.entries(categoryMap).map(([id, name]) => {
              const items = groupedGenerators[id];
              if (items.length === 0) return null;

              const isExpanded = expandedCategories[id] || searchQuery.length > 0;
              const displayItems = isExpanded ? items : items.slice(0, 9);
              const hasMore = items.length > 9 && !searchQuery;

              return (
                <article key={id} id={id} className="scroll-mt-24">
                  <div className="mb-8">
                    <h3 className="text-xl md:text-2xl text-heading-dark mb-2 tracking-tight">
                      {name}
                    </h3>
                    <p className="text-sm text-body-text">
                      {/* Generic category desc placeholder */}
                      {name} generators tailored for your needs.
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {displayItems.map((gen) => (
                      <a 
                        key={gen.id} 
                        href={`/generators/${gen.slug}`}
                        className="group bg-white border border-card-border p-5 rounded-[3px] flex flex-col gap-4 hover:border-brand-purple hover:shadow-sm transition-all"
                      >
                        <div className="aspect-[4/3] bg-bg-light rounded-[2px] mb-2 flex items-center justify-center text-brand-purple/20">
                           <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              {id === 'websites' && <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />}
                              {id === 'landing-pages' && <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />}
                              {id === 'portfolios' && <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />}
                              {id === 'blogs' && <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />}
                              {id === 'stores' && <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />}
                              {id === 'link-in-bio' && <circle cx="12" cy="12" r="10" />}
                           </svg>
                        </div>
                        <h4 className="text-base font-bold text-heading-dark group-hover:text-brand-purple transition-colors capitalize">
                          {gen.name}
                        </h4>
                        <p className="text-sm line-clamp-2">
                          {gen.desc}
                        </p>
                      </a>
                    ))}
                  </div>

                  {hasMore && (
                    <div className="mt-10 flex justify-center md:justify-start">
                      <button 
                        onClick={() => toggleExpand(id)}
                        aria-expanded={isExpanded}
                        aria-controls={`${id}-grid`}
                        className="font-heading font-bold text-xs uppercase tracking-widest text-brand-purple border-b border-brand-purple pb-1 hover:text-heading-dark hover:border-heading-dark transition-all"
                      >
                         {s.show_all.replace('{count}', items.length)}
                      </button>
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        ) : (
          <div className="py-20 text-center flex flex-col items-center gap-6">
            <div className="w-16 h-16 rounded-full bg-bg-light flex items-center justify-center text-body-text/20">
              <Search className="w-8 h-8" />
            </div>
            <div className="flex flex-col gap-2">
               <p className="text-lg font-bold text-heading-dark">{s.no_results}</p>
               <p className="text-body-text">{s.jump_to_ai}</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={clearSearch}
                className="font-heading font-bold text-xs uppercase tracking-widest text-brand-purple"
              >
                {s.clear_search}
              </button>
              <a 
                href="/s/ai_site_builder"
                className="font-heading font-bold text-xs uppercase tracking-widest text-brand-purple border-b border-brand-purple pb-1"
              >
                Go to AI Site Builder
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default AllGenerators;
