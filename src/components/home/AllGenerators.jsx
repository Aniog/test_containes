import React, { useState, useMemo } from 'react';
import { Search, X, LayoutTemplate, SquareMousePointer, BriefcaseBusiness, PenLine, ShoppingBag, Link2 } from 'lucide-react';
import { translations } from '../../strings';

const iconMap = {
  'websites': <LayoutTemplate className="w-12 h-12 text-[var(--brand-purple)] mx-auto opacity-80" aria-hidden="true" />,
  'landing-pages': <SquareMousePointer className="w-12 h-12 text-[var(--brand-purple)] mx-auto opacity-80" aria-hidden="true" />,
  'portfolios': <BriefcaseBusiness className="w-12 h-12 text-[var(--brand-purple)] mx-auto opacity-80" aria-hidden="true" />,
  'blogs': <PenLine className="w-12 h-12 text-[var(--brand-purple)] mx-auto opacity-80" aria-hidden="true" />,
  'stores': <ShoppingBag className="w-12 h-12 text-[var(--brand-purple)] mx-auto opacity-80" aria-hidden="true" />,
  'link-in-bio': <Link2 className="w-12 h-12 text-[var(--brand-purple)] mx-auto opacity-80" aria-hidden="true" />
};

const DirectorySection = ({ slug, sectionData, searchQuery }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const INITIAL_COUNT = 6;
  
  // Filter items based on search query
  const filteredItems = useMemo(() => {
    if (!searchQuery) return sectionData.items;
    const lowerQuery = searchQuery.toLowerCase();
    
    // Check if category itself matches
    const categoryMatches = sectionData.title.toLowerCase().includes(lowerQuery);
    if (categoryMatches) return sectionData.items;
    
    // Otherwise filter individual items
    return sectionData.items.filter(item => 
      item.name.toLowerCase().includes(lowerQuery) || 
      item.desc.toLowerCase().includes(lowerQuery)
    );
  }, [sectionData, searchQuery]);

  // If no items match and we have a search query, hide this entire section
  if (searchQuery && filteredItems.length === 0) {
    return null;
  }

  // When searching, show all matched items. Otherwise, respect expansion state.
  const visibleItems = searchQuery 
    ? filteredItems 
    : (isExpanded ? sectionData.items : sectionData.items.slice(0, INITIAL_COUNT));
    
  const hasMore = !searchQuery && sectionData.items.length > INITIAL_COUNT;

  return (
    <div id={slug} className="pt-[100px] -mt-[40px]"> {/* Offset for smooth anchor scrolling */}
      <div className="mb-[30px] border-b border-[var(--divider-subtle)] pb-[15px]">
        <h3 className="font-heading text-[22px] md:text-[26px] mb-[10px]">{sectionData.title}</h3>
        <p className="text-[14px] md:text-[16px] text-[var(--text-body)]">{sectionData.desc}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px]">
        {visibleItems.map((item, index) => {
          const itemSlug = item.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
          return (
            <a 
              key={`${slug}-${index}`} 
              href={`/generators/${itemSlug}`}
              className="bg-white p-[20px] rounded-[3px] border border-[var(--border-card)] hover:border-[var(--brand-purple)] hover:shadow-sm transition-all duration-200 group outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-purple)] focus-visible:ring-offset-2 flex"
            >
              <div className="w-[60px] h-[60px] bg-[var(--bg-light)] rounded-[3px] flex items-center justify-center flex-shrink-0 mr-[15px]">
                 {React.cloneElement(iconMap[slug], { className: "w-6 h-6 text-[var(--brand-purple)]" })}
              </div>
              <div className="flex flex-col justify-center">
                <h4 className="font-sans font-bold text-[16px] text-gray-900 leading-tight mb-[4px] group-hover:text-[var(--brand-purple)] transition-colors">{item.name}</h4>
                <p className="text-[13px] text-[var(--text-body)] line-clamp-2 leading-relaxed">{item.desc}</p>
              </div>
            </a>
          );
        })}
      </div>

      {hasMore && (
        <div className="mt-[20px] text-center">
          <button 
            type="button"
            onClick={() => setIsExpanded(!isExpanded)}
            aria-expanded={isExpanded}
            className="inline-flex items-center text-[14px] font-semibold text-[var(--brand-purple)] hover:text-[#6a469c] outline-none focus-visible:underline"
          >
            {isExpanded 
              ? "Show fewer" 
              : translations.en.directory.showAll.replace('{count}', sectionData.items.length)
            }
          </button>
        </div>
      )}
    </div>
  );
};

const AllGenerators = () => {
  const content = translations.en.directory;
  const [searchQuery, setSearchQuery] = useState('');
  
  const sectionKeys = Object.keys(content.sections);
  
  // Calculate total matching generators for the result count
  const matchingCount = useMemo(() => {
    if (!searchQuery) return 0;
    const lowerQuery = searchQuery.toLowerCase();
    
    return sectionKeys.reduce((count, key) => {
      const section = content.sections[key];
      const categoryMatches = section.title.toLowerCase().includes(lowerQuery);
      
      if (categoryMatches) {
        return count + section.items.length;
      }
      
      const matchingItems = section.items.filter(item => 
        item.name.toLowerCase().includes(lowerQuery) || 
        item.desc.toLowerCase().includes(lowerQuery)
      );
      return count + matchingItems.length;
    }, 0);
  }, [searchQuery, content.sections, sectionKeys]);

  return (
    <section id="all-generators" className="py-[60px] md:py-[80px] bg-[var(--bg-light)]">
      <div className="container-custom">
        <div className="text-center mb-[40px] md:mb-[60px]">
          <h2 className="text-[26px] md:text-[32px] mb-[10px]">{content.heading}</h2>
          <p className="text-[14px] md:text-[16px] text-[var(--text-body)]">{content.subheading}</p>
        </div>

        {/* Search Bar */}
        <div className="max-w-[480px] mx-auto mb-[60px] relative">
          <div className="relative flex items-center">
            <Search className="w-5 h-5 text-[var(--text-body)] absolute left-[15px]" aria-hidden="true" />
            <input 
              type="text" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={content.searchPlaceholder}
              aria-label={content.searchAriaLabel}
              className="w-full bg-white border border-[var(--border-card)] rounded-[4px] h-[48px] pl-[45px] pr-[40px] text-[16px] focus:outline-none focus:border-[var(--brand-purple)] focus:ring-1 focus:ring-[var(--brand-purple)]"
            />
            {searchQuery && (
              <button 
                type="button"
                onClick={() => setSearchQuery('')}
                aria-label="Clear search"
                className="absolute right-[10px] p-[5px] text-[var(--text-body)] hover:text-gray-900"
              >
                <X className="w-4 h-4" aria-hidden="true" />
              </button>
            )}
          </div>
          {searchQuery && (
             <div className="absolute top-[100%] left-0 mt-[8px] text-[13px] text-[var(--text-body)]">
               {matchingCount > 0 
                  ? content.resultsCount.replace('{count}', matchingCount)
                  : "No generators match your search"
               }
             </div>
          )}
        </div>

        {/* Directory Content */}
        {searchQuery && matchingCount === 0 ? (
          <div className="text-center py-[60px] bg-white rounded-[4px] border border-[var(--border-card)]">
            <p className="text-[16px] text-gray-900 font-semibold mb-[10px]">{content.emptyState}</p>
            <a 
              href="/s/ai_site_builder" 
              className="inline-flex items-center justify-center bg-gradient-ai text-white font-heading text-[14px] h-[44px] px-[20px] rounded-[4px]"
            >
              {content.emptyStateCta}
            </a>
            <div className="mt-[20px]">
              <button 
                onClick={() => setSearchQuery('')}
                className="text-[14px] text-[var(--brand-purple)] hover:underline"
              >
                {content.clearSearch}
              </button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col space-y-[40px] md:space-y-[60px]">
             {sectionKeys.map(key => (
               <DirectorySection 
                  key={key} 
                  slug={key} 
                  sectionData={content.sections[key]} 
                  searchQuery={searchQuery}
               />
             ))}
          </div>
        )}

      </div>
    </section>
  );
};

export default AllGenerators;
