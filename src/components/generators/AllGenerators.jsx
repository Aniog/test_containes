import React, { useState, useMemo, useEffect } from 'react';
import { Search, Monitor, Layout, Briefcase, PenTool, ShoppingBag, Link as LinkIcon, X } from 'lucide-react';
import { strings, generatorData } from '../../data/generators';
import GeneratorCard from '../GeneratorCard';

const categoryIcons = {
  "websites": <Monitor size={20} />,
  "landing-pages": <Layout size={20} />,
  "portfolios": <Briefcase size={20} />,
  "blogs": <PenTool size={20} />,
  "stores": <ShoppingBag size={20} />,
  "link-in-bio": <LinkIcon size={20} />
};

const Subsection = ({ title, description, slug, items, searchQuery, isClient }) => {
  const [showAll, setShowAll] = useState(false);
  const limit = 8;
  
  // Filtering logic
  const filteredItems = useMemo(() => {
    if (!searchQuery) return items;
    const q = searchQuery.toLowerCase();
    return items.filter(item => 
      item.name.toLowerCase().includes(q) || 
      item.description.toLowerCase().includes(q)
    );
  }, [items, searchQuery]);

  if (filteredItems.length === 0 && searchQuery) return null;

  const visibleItems = (isClient && !showAll && !searchQuery) ? filteredItems.slice(0, limit) : filteredItems;
  const hasMore = isClient && !searchQuery && filteredItems.length > limit;

  return (
    <div id={slug} className="mb-16 scroll-mt-20">
      <div className="mb-6">
        <h3 className="text-xl font-heading mb-1">{title}</h3>
        <p className="text-sm text-body-text">{description}</p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {visibleItems.map(item => (
          <GeneratorCard 
            key={item.id}
            {...item}
            showCategoryTag={false}
            icon={categoryIcons[slug]}
          />
        ))}
      </div>
      
      {hasMore && (
        <div className="mt-8 text-center">
          <button 
            onClick={() => setShowAll(!showAll)}
            className="btn btn-ghost"
            aria-expanded={showAll}
            aria-controls={`grid-${slug}`}
          >
            {showAll ? strings.en.allGenerators.showLess : strings.en.allGenerators.showAll.replace('{count}', filteredItems.length)}
          </button>
        </div>
      )}
    </div>
  );
};

const AllGenerators = () => {
  const { allGenerators, browseByCategory } = strings.en;
  const [searchQuery, setSearchQuery] = useState('');
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const categories = useMemo(() => {
    return Object.values(browseByCategory.categories).map(cat => ({
      ...cat,
      items: generatorData.filter(item => item.category === cat.slug)
    }));
  }, [browseByCategory]);

  const totalFilteredCount = useMemo(() => {
    const q = searchQuery.toLowerCase();
    return generatorData.filter(item => 
      item.name.toLowerCase().includes(q) || 
      item.description.toLowerCase().includes(q) ||
      browseByCategory.categories[item.category.replace(/-./g, x => x[1].toUpperCase())]?.title.toLowerCase().includes(q)
    ).length;
  }, [searchQuery, browseByCategory]);

  return (
    <section id="all-generators" className="py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-heading mb-2">{allGenerators.title}</h2>
          <p className="text-body-text">{allGenerators.subtitle}</p>
        </div>
        
        <div className="max-w-[480px] mx-auto mb-16 px-1">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-card-border" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-10 py-3 border border-card-border rounded-md focus:ring-brand-purple focus:border-brand-purple text-hero-line1 placeholder:text-card-border"
              placeholder={allGenerators.searchPlaceholder}
              aria-label={allGenerators.searchAriaLabel}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-card-border hover:text-hero-line1"
              >
                <X className="h-5 w-5" />
              </button>
            )}
          </div>
          {searchQuery && (
            <p className="mt-3 text-sm text-body-text italic">
              {allGenerators.matchCount.replace('{count}', totalFilteredCount)}
            </p>
          )}
        </div>
        
        {totalFilteredCount === 0 && searchQuery ? (
          <div className="text-center py-20 bg-bg-light rounded-lg border border-divider">
            <p className="text-lg text-body-text mb-4">No results found for "{searchQuery}"</p>
            <div className="flex flex-col items-center gap-4">
              <button 
                onClick={() => setSearchQuery('')}
                className="text-brand-purple font-heading uppercase text-sm font-bold"
              >
                {allGenerators.clearSearch}
              </button>
              <a href="/s/ai_site_builder" className="text-brand-purple underline text-sm">
                {allGenerators.noResults}
              </a>
            </div>
          </div>
        ) : (
          <div className="space-y-16">
            {categories.map(cat => (
              <Subsection 
                key={cat.slug}
                {...cat}
                searchQuery={searchQuery}
                isClient={isClient}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default AllGenerators;
