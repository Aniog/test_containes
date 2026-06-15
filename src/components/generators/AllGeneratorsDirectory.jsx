import React, { useState, useMemo, useEffect } from 'react';
import { strings, allGeneratorsData } from '../../constants/strings';
import { Search as SearchIcon, ChevronDown, ChevronUp } from 'lucide-react';
import { cn } from '../../lib/utils';

const AllGeneratorsDirectory = () => {
  const { allGenerators, browseByCategory } = strings.en;
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedCategories, setExpandedCategories] = useState({});
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    // Initialize collapsed states for categories with many items
    const initialExpanded = {};
    Object.keys(allGeneratorsData).forEach(cat => {
      initialExpanded[cat] = false;
    });
    setExpandedCategories(initialExpanded);
  }, []);

  const filteredData = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();
    if (!query) return allGeneratorsData;

    const result = {};
    Object.entries(allGeneratorsData).forEach(([catKey, items]) => {
      const categoryName = browseByCategory.categories.find(c => c.id === catKey)?.name || '';
      const filteredItems = items.filter(item => 
        item.name.toLowerCase().includes(query) || 
        item.description.toLowerCase().includes(query) ||
        categoryName.toLowerCase().includes(query)
      );
      if (filteredItems.length > 0) {
        result[catKey] = filteredItems;
      }
    });
    return result;
  }, [searchQuery, browseByCategory.categories]);

  const totalMatchCount = Object.values(filteredData).flat().length;

  const toggleCategory = (catId) => {
    setExpandedCategories(prev => ({
      ...prev,
      [catId]: !prev[catId]
    }));
  };

  const getIcon = (id) => {
    switch (id) {
      case 'websites': return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>;
      case 'landing-pages': return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2z"/><path d="M12 18V6"/><path d="m8 10 4-4 4 4"/></svg>;
      case 'portfolios': return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>;
      case 'blogs': return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>;
      case 'stores': return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>;
      case 'link-in-bio': return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>;
      default: return null;
    }
  };

  return (
    <section id="all-generators" className="bg-[#F4F6F8] py-[60px] md:py-[80px]">
      <div className="container-custom">
        <div className="text-center mb-10">
          <h2 className="text-[26px] md:text-[32px] text-[#4B5056] mb-[5px]">{allGenerators.title}</h2>
          <p className="text-[#636972] m-0">{allGenerators.subtitle}</p>
        </div>

        <div className="max-w-[480px] mx-auto mb-10">
          <div className="relative">
            <label htmlFor="search-generators" className="sr-only">Search generators</label>
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#C6C9CD]">
              <SearchIcon size={18} />
            </div>
            <input
              id="search-generators"
              type="text"
              placeholder={allGenerators.searchPlaceholder}
              className="w-full pl-10 pr-4 py-3 bg-white border border-[#C6C9CD] rounded-[4px] focus:outline-none focus:border-[#8159BB] focus:ring-1 focus:ring-[#8159BB] transition-all"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search generators"
            />
          </div>
          {searchQuery && (
            <p className="mt-2 text-[12px] text-[#636972]">
              {allGenerators.matchCount(totalMatchCount)}
            </p>
          )}
        </div>

        {totalMatchCount === 0 ? (
          <div className="text-center py-10 bg-white border border-[#C6C9CD] rounded-[3px]">
            <p className="text-[#636972] mb-4">{allGenerators.noResults}</p>
            <div className="flex flex-col gap-3 items-center">
              <button
                onClick={() => setSearchQuery('')}
                className="text-[#8159BB] font-bold underline"
              >
                {allGenerators.clearSearch}
              </button>
              <a href="/s/ai_site_builder" className="text-[#8159BB] font-bold">
                Start with our AI builder
              </a>
            </div>
          </div>
        ) : (
          <div className="space-y-[60px]">
            {browseByCategory.categories.map((category) => {
              const items = filteredData[category.id];
              if (!items) return null;

              const isExpanded = expandedCategories[category.id] || searchQuery;
              const visibleItems = (isExpanded || !isClient) ? items : items.slice(0, 6);
              const hasMore = items.length > 6 && !searchQuery;

              return (
                <div key={category.id} id={category.slug} className="scroll-mt-[100px]">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="text-[#8159BB]">
                      {getIcon(category.id)}
                    </div>
                    <div>
                      <h3 className="text-[20px] font-bold text-[#4B5056] m-0">{category.name}</h3>
                      <p className="text-[13px] text-[#636972] m-0">{category.description}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {visibleItems.map((item) => (
                      <article key={item.slug}>
                        <a
                          href={`/generators/${item.slug}`}
                          className="p-5 bg-white border border-[#C6C9CD] rounded-[3px] card-hover group block h-full"
                        >
                          <div className="mb-4 text-[#8159BB] opacity-20 group-hover:opacity-100 transition-opacity">
                            {getIcon(category.id)}
                          </div>
                          <h4 className="text-[15px] font-bold text-[#4B5056] mb-1 group-hover:text-[#8159BB] transition-colors uppercase">
                            {item.name}
                          </h4>
                          <p className="text-[#636972] text-[13px] line-clamp-2 italic">
                            {item.description}
                          </p>
                        </a>
                      </article>
                    ))}
                  </div>

                  {hasMore && isClient && (
                    <div className="mt-8 flex justify-center">
                      <button
                        onClick={() => toggleCategory(category.id)}
                        className="ghost-button h-[36px] px-[20px] rounded-[4px] flex items-center gap-2 text-[13px]"
                        aria-expanded={isExpanded}
                        aria-controls={`grid-${category.id}`}
                      >
                        {isExpanded ? 'Show less' : allGenerators.showAll(items.length)}
                        {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
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

export default AllGeneratorsDirectory;
