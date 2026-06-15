import React, { useState, useMemo } from 'react';
import { strings, generatorData } from '@/lib/generators-data';
import { Search, Globe, Layout, User, FileText, ShoppingCart, Share2, ChevronDown, ChevronUp } from 'lucide-react';

const icons = {
  "websites": Globe,
  "landing-pages": Layout,
  "portfolios": User,
  "blogs": FileText,
  "stores": ShoppingCart,
  "link-in-bio": Share2,
};

const Subsection = ({ category, generators, isFirst }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const Icon = icons[category.id];
  
  const COLLAPSE_THRESHOLD = 6;
  const hasMore = generators.length > COLLAPSE_THRESHOLD;
  const visibleGenerators = generators;

  return (
    <div id={category.id} className={`py-12 ${!isFirst ? 'border-t border-divider' : ''}`}>
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <div className="flex items-center gap-3 mb-2 text-brand-purple">
            {Icon && <Icon size={20} aria-hidden="true" />}
            <h3 className="text-heading-gray font-heading font-bold text-[20px] uppercase">
              {category.name}
            </h3>
          </div>
          <p className="text-body-gray text-[14px]">
            {category.description}
          </p>
        </div>
      </div>
      
      <div 
        id={`grid-${category.id}`}
        className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 transition-all duration-500 overflow-hidden ${!isExpanded && hasMore ? 'max-h-[800px]' : 'max-h-[5000px]'}`}
      >
        {visibleGenerators.map((gen, idx) => (
          <a 
            key={gen.slug}
            href={`/generators/${gen.slug}`}
            className="block bg-white border border-card-border rounded-[3px] p-5 hover:border-brand-purple hover:shadow-sm transition-all"
            style={{ display: gen.hidden ? 'none' : 'block' }}
          >
            <div className="flex items-center gap-3 mb-4 text-brand-purple/40">
               {Icon && <Icon size={16} aria-hidden="true" />}
               <div className="h-[1px] flex-grow bg-divider"></div>
            </div>
            <h4 className="text-heading-dark font-heading font-bold text-[16px] mb-2 uppercase">
              {gen.name}
            </h4>
            <p className="text-body-gray text-[14px] leading-snug">
              {gen.description}
            </p>
          </a>
        ))}
      </div>

      {hasMore && (
        <div className="mt-8 flex justify-center">
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            aria-expanded={isExpanded}
            aria-controls={`grid-${category.id}`}
            className="flex items-center gap-2 font-heading font-bold uppercase text-[12px] text-brand-purple border border-brand-purple px-6 py-2 rounded-[4px] hover:bg-brand-purple/5 transition-colors"
          >
             {isExpanded ? 'Show less' : strings.en.common.showAll.replace('{count}', generators.length).replace('{category}', category.name)}
             {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
          </button>
        </div>
      )}
    </div>
  );
};

const AllGenerators = () => {
  const t = strings.en.allGenerators;
  const categories = strings.en.categories.items;
  const [searchQuery, setSearchQuery] = useState('');

  const enrichedData = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();
    return generatorData.map(gen => ({
      ...gen,
      hidden: query !== '' && 
             !gen.name.toLowerCase().includes(query) && 
             !gen.description.toLowerCase().includes(query) &&
             !gen.category.toLowerCase().includes(query)
    }));
  }, [searchQuery]);

  const matchCount = useMemo(() => enrichedData.filter(g => !g.hidden).length, [enrichedData]);

  const generatorsByCategory = useMemo(() => {
    return categories.map(cat => {
      const catItems = enrichedData.filter(gen => gen.catSlug === cat.id);
      const visibleItemsCount = catItems.filter(g => !g.hidden).length;
      return {
        ...cat,
        items: catItems,
        isVisible: visibleItemsCount > 0
      };
    });
  }, [enrichedData, categories]);

  return (
    <section id="all-generators" className="py-16">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-heading-gray font-heading font-bold text-[26px] md:text-[32px] mb-2 uppercase">
            {t.title}
          </h2>
          <p className="text-body-gray">
            {t.subtitle}
          </p>
        </div>
        
        <div className="max-w-[480px] mx-auto mb-12 relative">
          <label htmlFor="generator-search" className="sr-only">{t.searchPlaceholder}</label>
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-body-gray">
            <Search size={20} />
          </div>
          <input 
            id="generator-search"
            type="text"
            placeholder={t.searchPlaceholder}
            className="w-full h-12 pl-12 pr-4 border border-card-border rounded-[4px] focus:border-brand-purple focus:ring-1 focus:ring-brand-purple outline-none text-[14px] transition-all"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <div className="mt-2 text-center text-[12px] text-body-gray">
              {t.matchCount.replace('{count}', matchCount)}
            </div>
          )}
        </div>

        {generatorsByCategory.some(cat => cat.isVisible) ? (
          <div>
            {generatorsByCategory.map((cat, idx) => (
              <div key={cat.id} style={{ display: cat.isVisible ? 'block' : 'none' }}>
                <Subsection 
                  category={cat} 
                  generators={cat.items} 
                  isFirst={idx === 0}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="py-20 text-center">
            <p className="text-heading-gray font-bold mb-4 uppercase">No generators found for "{searchQuery}"</p>
            <div className="flex flex-col items-center gap-4">
              <button 
                onClick={() => setSearchQuery('')}
                className="font-heading font-bold uppercase text-[12px] text-brand-purple border border-brand-purple px-6 py-2 rounded-[4px] hover:bg-brand-purple/5 transition-colors"
              >
                {strings.en.common.clearSearch}
              </button>
              <a href="/s/ai_site_builder" className="text-brand-purple font-heading font-bold uppercase text-[12px] hover:underline">
                {strings.en.common.noResults}
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default AllGenerators;
