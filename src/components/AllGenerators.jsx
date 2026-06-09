import React, { useState, useMemo, useEffect } from 'react';
import { strings } from '../strings';
import { generatorsData } from '../data';
import { cn } from '../lib/utils';

export const AllGenerators = () => {
  const s = strings.en.allGenerators;
  const categories = strings.en.browseByCategory.categories;
  const [search, setSearch] = useState('');

  const filteredGenerators = useMemo(() => {
    if (!search.trim()) return generatorsData;
    const lowerSearch = search.toLowerCase();
    return generatorsData.filter(gen => 
      gen.name.toLowerCase().includes(lowerSearch) || 
      gen.desc.toLowerCase().includes(lowerSearch) || 
      gen.category.toLowerCase().includes(lowerSearch)
    );
  }, [search]);

  const matchCount = filteredGenerators.length;

  return (
    <section id="all-generators" className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="mb-2">{s.title}</h2>
          <p className="text-[var(--body-text)]">{s.subtitle}</p>
        </div>

        {/* Search Input */}
        <div className="max-w-[480px] mx-auto mb-16 relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[var(--body-text)] opacity-40">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
          </div>
          <input
            type="text"
            placeholder={s.searchPlaceholder}
            aria-label={s.searchAria}
            className="w-full h-[44px] pl-10 pr-4 bg-[var(--bg-light)] border border-[var(--divider)] rounded-full focus:outline-none focus:border-[var(--brand-purple)] transition-all"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          {search && (
            <div className="text-center mt-2 text-[12px] text-[var(--body-text)] font-medium">
              {s.matchCount.replace('{count}', matchCount)}
            </div>
          )}
        </div>

        {matchCount === 0 ? (
          <div className="text-center py-20 bg-[var(--bg-light)] rounded-lg">
            <p className="mb-4 text-[var(--body-text)]">{s.noResults}</p>
            <button 
              onClick={() => setSearch('')}
              className="btn btn-ghost"
            >
              {s.clearSearch}
            </button>
            <div className="mt-4">
              <a href="/s/ai_site_builder" className="text-[var(--brand-purple)] hover:underline font-bold">
                {s.noResults.split('? ')[1] || "Start with our AI builder."}
              </a>
            </div>
          </div>
        ) : (
          <div className="space-y-20">
            {categories.map((cat) => {
              const catGens = filteredGenerators.filter(g => g.categoryId === cat.id);
              if (catGens.length === 0) return null;
              return (
                <GeneratorSubsection 
                  key={cat.id} 
                  category={cat} 
                  generators={catGens} 
                  isSearching={search.length > 0}
                />
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

const GeneratorSubsection = ({ category, generators, isSearching }) => {
  const [mounted, setMounted] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const s = strings.en.allGenerators;

  useEffect(() => {
    setMounted(true);
  }, []);
  
  const INITIAL_VISIBLE = 6;
  const canCollapse = generators.length > INITIAL_VISIBLE;
  // If not searching and JS is active (mounted) and not explicitly showing all
  const isCollapsed = mounted && !isSearching && canCollapse && !showAll;

  return (
    <div id={category.id} className="scroll-mt-20">
      <div className="mb-8">
        <h3 className="mb-1 text-[var(--heading-muted)]">{category.name}</h3>
        <p className="text-[14px] text-[var(--body-text)] italic opacity-70">
          {category.desc}
        </p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {generators.map((gen, idx) => {
          const isHidden = isCollapsed && idx >= INITIAL_VISIBLE;
          return (
            <a 
              key={idx} 
              href={`/generators/${gen.slug}`} 
              className={cn(
                "card-generator group flex flex-col gap-3",
                isHidden && "hidden"
              )}
            >
               <div className="w-8 h-8 flex items-center justify-center rounded bg-[var(--bg-light)] text-[var(--brand-purple)] opacity-50 mb-2">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
               </div>
               <span className="font-bold text-[var(--heading-muted)] group-hover:text-[var(--brand-purple)] transition-colors">
                 {gen.name}
               </span>
               <p className="text-[13px] text-[var(--body-text)]">
                 {gen.desc}
               </p>
            </a>
          );
        })}
      </div>
      {canCollapse && !isSearching && (
        <div className="mt-8 text-center">
          <button 
            onClick={() => setShowAll(!showAll)}
            aria-expanded={showAll}
            aria-controls={`grid-${category.id}`}
            className="btn btn-ghost"
          >
            {showAll ? s.showLess : s.showAll.replace('{count}', generators.length)}
          </button>
        </div>
      )}
    </div>
  );
};
