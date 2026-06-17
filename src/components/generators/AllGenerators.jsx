import React, { useState, useMemo } from 'react';
import { strings } from '@/lib/strings.en';
import { CATEGORIES, ALL_GENERATORS } from '@/lib/generators.data';
import { Search, ChevronDown, ChevronUp } from 'lucide-react';
import { cn } from '@/lib/utils';

const DEFAULT_VISIBLE_COUNT = 6;

const Subsection = ({ category, generators, searchTerm }) => {
  const { en } = strings;
  const [isExpanded, setIsExpanded] = useState(false);

  const filtered = useMemo(() => {
    if (!searchTerm) return generators;
    const lower = searchTerm.toLowerCase();
    return generators.filter(g => 
      g.name.toLowerCase().includes(lower) || 
      g.description.toLowerCase().includes(lower)
    );
  }, [generators, searchTerm]);

  // All cards are in DOM for SEO/no-JS. 
  // We use CSS for collapsing if JS is enabled.
  if (filtered.length === 0) return null;

  const hasMore = filtered.length > DEFAULT_VISIBLE_COUNT;
  const visibleGenerators = isExpanded ? filtered : filtered; // We handle visibility with CSS classes

  const getIllustration = (id) => {
    // Shared category illustrations (same as BrowseByCategory)
    const illustrations = {
      "websites": (
        <svg width="32" height="32" viewBox="0 0 40 40" aria-hidden="true" className="text-brand-purple">
          <rect x="4" y="8" width="32" height="24" rx="2" stroke="currentColor" strokeWidth="2" fill="none" />
          <line x1="4" y1="14" x2="36" y2="14" stroke="currentColor" strokeWidth="2" />
        </svg>
      ),
      "landing-pages": (
        <svg width="32" height="32" viewBox="0 0 40 40" aria-hidden="true" className="text-brand-purple">
          <rect x="8" y="4" width="24" height="32" rx="2" stroke="currentColor" strokeWidth="2" fill="none" />
          <line x1="12" y1="12" x2="28" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
      "portfolios": (
        <svg width="32" height="32" viewBox="0 0 40 40" aria-hidden="true" className="text-brand-purple">
          <rect x="6" y="6" width="12" height="12" rx="1" stroke="currentColor" strokeWidth="2" fill="none" />
          <rect x="22" y="6" width="12" height="12" rx="1" stroke="currentColor" strokeWidth="2" fill="none" />
          <rect x="6" y="22" width="12" height="12" rx="1" stroke="currentColor" strokeWidth="2" fill="none" />
          <rect x="22" y="22" width="12" height="12" rx="1" stroke="currentColor" strokeWidth="2" fill="none" />
        </svg>
      ),
      "blogs": (
        <svg width="32" height="32" viewBox="0 0 40 40" aria-hidden="true" className="text-brand-purple">
          <path d="M8 8H32M8 16H32M8 24H22M8 32H18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
      "stores": (
        <svg width="32" height="32" viewBox="0 0 40 40" aria-hidden="true" className="text-brand-purple">
          <path d="M10 8L8 14H32L30 8H10Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
          <path d="M10 14V32H30V14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </svg>
      ),
      "link-in-bio": (
        <svg width="32" height="32" viewBox="0 0 40 40" aria-hidden="true" className="text-brand-purple">
          <rect x="12" y="4" width="16" height="32" rx="4" stroke="currentColor" strokeWidth="2" fill="none" />
          <circle cx="20" cy="12" r="3" stroke="currentColor" strokeWidth="2" fill="none" />
        </svg>
      ),
    };
    return illustrations[id] || null;
  };

  return (
    <div id={category.id} className="scroll-mt-20 mb-16 last:mb-0">
      <div className="mb-6">
        <h3 className="text-xl mb-1">{category.name}</h3>
        <p className="text-[#636972] text-sm">
          {category.description || en.browseByCategory.categories.find(c => c.id === category.id)?.description}
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((gen, index) => (
          <a
            key={gen.slug}
            href={`/generators/${gen.slug}`}
            className={cn(
              "card flex flex-col items-start min-h-[160px]",
              !isExpanded && !searchTerm && index >= DEFAULT_VISIBLE_COUNT && "hidden js-enabled:hidden",
              // We'll use a data attribute for the no-js fallback in a real scenario,
              // but here we can just hide it if isExpanded is false AND js is enabled.
            )}
            style={{ 
              display: (!isExpanded && !searchTerm && index >= DEFAULT_VISIBLE_COUNT) ? 'none' : 'flex' 
            }}
          >
            <div className="mb-4">
              {getIllustration(category.id)}
            </div>
            <h4 className="text-heading-text font-heading text-base mb-1">{gen.name}</h4>
            <p className="text-[#636972] text-xs leading-relaxed">{gen.description}</p>
          </a>
        ))}
      </div>
      {hasMore && !searchTerm && (
        <div className="mt-8 flex justify-center">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            aria-expanded={isExpanded}
            aria-controls={`grid-${category.id}`}
            className="btn btn-ghost"
          >
            {isExpanded ? en.allGenerators.showLess : en.allGenerators.showAll.replace('{count}', filtered.length)}
            {isExpanded ? <ChevronUp className="w-4 h-4 ml-1" /> : <ChevronDown className="w-4 h-4 ml-1" />}
          </button>
        </div>
      )}
    </div>
  );
};

const AllGenerators = () => {
  const { en } = strings;
  const [searchTerm, setSearchTerm] = useState("");

  const matchCount = useMemo(() => {
    let total = 0;
    CATEGORIES.forEach(cat => {
      const generators = ALL_GENERATORS[cat.id] || [];
      const lower = searchTerm.toLowerCase();
      total += generators.filter(g => 
        g.name.toLowerCase().includes(lower) || 
        g.description.toLowerCase().includes(lower)
      ).length;
    });
    return total;
  }, [searchTerm]);

  return (
    <section id="all-generators" className="bg-white py-16 md:py-20 lg:py-24 border-t border-subtle-divider">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl mb-2">{en.allGenerators.heading}</h2>
          <p className="text-[#636972]">{en.allGenerators.subheading}</p>
        </div>

        <div className="max-w-xl mx-auto mb-16">
          <div className="relative">
            <label htmlFor="generator-search" className="sr-only">Search generators</label>
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-[#636972]" />
            </div>
            <input
              id="generator-search"
              type="text"
              placeholder={en.allGenerators.searchPlaceholder}
              aria-label="Search generators"
              className="block w-full pl-10 pr-3 py-3 border border-card-border rounded-md text-[#2E2E2F] placeholder-[#636972] focus:outline-none focus:ring-1 focus:ring-brand-purple focus:border-brand-purple"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <p className="mt-2 text-xs text-[#636972]">
            {matchCount} {en.allGenerators.searchMatch}
          </p>
        </div>

        {matchCount === 0 && searchTerm ? (
          <div className="text-center py-20 bg-light-bg rounded-lg">
            <p className="text-[#4B5056] font-heading text-lg mb-4">{en.allGenerators.searchNoResults}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button onClick={() => setSearchTerm("")} className="btn btn-ghost px-8">Clear Search</button>
              <a href="/s/ai_site_builder" className="text-brand-purple hover:underline text-sm font-heading">
                Can't find it? Start with our AI builder.
              </a>
            </div>
          </div>
        ) : (
          <div>
            {CATEGORIES.map(cat => (
              <Subsection 
                key={cat.id} 
                category={cat} 
                generators={ALL_GENERATORS[cat.id] || []} 
                searchTerm={searchTerm} 
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default AllGenerators;
