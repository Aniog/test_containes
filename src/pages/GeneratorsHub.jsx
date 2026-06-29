import React, { useState } from 'react';
import { strings } from '../strings';
import { categoryData, featuredGenerators, allGenerators, slugify } from '../data';

import { Search, ChevronRight, ChevronDown, CheckCircle2, LayoutTemplate, Smartphone, Zap } from 'lucide-react';

export default function GeneratorsHub() {
  const t = strings.en;
  const [searchQuery, setSearchQuery] = useState('');

  // Expand/Collapse state per category
  const [expandedCats, setExpandedCats] = useState({});
  const [faqExpanded, setFaqExpanded] = useState(0);

  const toggleCat = (catId) => {
    setExpandedCats(prev => ({ ...prev, [catId]: !prev[catId] }));
  };

  const toggleFaq = (idx) => {
    setFaqExpanded(prev => prev === idx ? null : idx);
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  // Helper to determine if a generator matches the search
  const isMatch = (gen, catName) => {
    if (!searchQuery) return true;
    const query = searchQuery.toLowerCase();
    return gen.name.toLowerCase().includes(query) || 
           gen.desc.toLowerCase().includes(query) || 
           catName.toLowerCase().includes(query);
  };

  // Calculate total matches if searching
  let totalMatches = 0;
  if (searchQuery) {
    categoryData.forEach(cat => {
      totalMatches += allGenerators[cat.id]?.filter(gen => isMatch(gen, cat.name)).length || 0;
    });
  }

  return (
    <div className="bg-white min-h-screen font-sans text-body">
      {/* SECTION 0: Top bar */}
      <header className="bg-white border-b border-[#E2E4E7] h-16 flex items-center px-6 sticky top-0 z-50">
        <a href={t.brandLink} className="text-xl font-bold font-heading text-hero flex items-center gap-1 hover:opacity-80 transition-opacity">
          strikingly <span className="text-[10px] bg-brand-purple text-white px-1.5 py-0.5 rounded ml-1 font-heading">AI</span>
        </a>
      </header>

      {/* SECTION 1: Breadcrumb */}
      <div className="max-w-[1200px] mx-auto px-6 py-4">
        <nav aria-label="Breadcrumb">
          <ol className="flex items-center text-xs text-body">
            <li>
              <a href={t.brandLink} className="hover:text-brand-purple transition-colors">{t.brandName}</a>
            </li>
            <li className="mx-2 text-[10px] opacity-70">/</li>
            <li aria-current="page">{t.breadcrumbCurrent}</li>
          </ol>
        </nav>
      </div>

      <main>
        {/* SECTION 2: Hero */}
        <section className="max-w-[1200px] mx-auto px-6 py-[60px] md:py-[80px] grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="flex flex-col items-start text-left">
            <h1 className="text-3xl md:text-5xl font-heading mb-4 flex flex-col items-start gap-1">
              <span className="text-hero">{t.heroH1Line1}</span>
              <span className="text-gradient-ai selection:bg-brand-purple">{t.heroH1Line2}</span>
            </h1>
            <p className="text-body text-base mb-8 max-w-[500px]">
              {t.heroSubhead}
            </p>
            <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
              <a href="/s/ai_site_builder" className="inline-flex items-center justify-center bg-gradient-ai text-white px-8 h-[44px] font-heading text-sm rounded transition-opacity hover:opacity-90">
                {t.heroCtaPrimary}
              </a>
              <a href="#all-generators" className="inline-flex items-center justify-center bg-transparent text-brand-purple border border-brand-purple px-8 h-[44px] font-heading text-sm rounded transition-colors hover:bg-brand-purple/5">
                {t.heroCtaSecondary}
              </a>
            </div>
          </div>
          <div className="flex justify-center md:justify-end">
            <svg width="400" height="300" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="w-full max-w-[400px] h-auto">
              <rect x="20" y="20" width="360" height="260" rx="4" stroke="#8159BB" strokeWidth="2" fill="#FAF8FC" />
              <rect x="20" y="20" width="360" height="40" rx="4" fill="#EAE2F3" />
              <circle cx="45" cy="40" r="5" fill="#8159BB" />
              <circle cx="65" cy="40" r="5" fill="#8159BB" />
              <circle cx="85" cy="40" r="5" fill="#8159BB" />
              <rect x="50" y="90" width="120" height="20" rx="2" fill="#EAE2F3" />
              <rect x="50" y="130" width="180" height="10" rx="2" fill="#EAE2F3" />
              <rect x="50" y="150" width="160" height="10" rx="2" fill="#EAE2F3" />
              <rect x="50" y="180" width="80" height="24" rx="2" fill="#8159BB" />
              <rect x="250" y="100" width="100" height="100" rx="4" fill="#EAE2F3" />
            </svg>
          </div>
        </section>

        {/* SECTION 3: Featured Generators */}
        <section className="bg-bg-light py-[60px] md:py-[80px]">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="mb-10 text-center md:text-left">
              <h2 className="text-2xl md:text-[32px] text-heading font-heading mb-2">{t.featuredHeading}</h2>
              <p className="text-body text-base">{t.featuredSubheading}</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {featuredGenerators.map((gen, idx) => (
                <a 
                  key={idx} 
                  href={`/generators/${slugify(gen.name)}`}
                  className="block bg-white border border-border-card rounded-[3px] p-5 transition-all hover:border-brand-purple hover:shadow-[0_4px_12px_rgba(0,0,0,0.05)] focus:outline-none focus:ring-4 focus:ring-brand-purple/20"
                >
                  <div className="flex flex-col h-full">
                    <h3 className="font-bold text-[#2E2E2F] mb-1">{gen.name}</h3>
                    <p className="text-sm text-body mb-4 flex-grow">{gen.desc}</p>
                    <div className="mt-auto">
                      <span className="inline-block border border-brand-purple text-brand-purple font-heading text-[11px] px-[6px] py-[2px] rounded-[3px] uppercase">
                        {gen.category}
                      </span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 4: Browse by Category */}
        <section className="py-[60px] md:py-[80px]">
          <div className="max-w-[1200px] mx-auto px-6">
            <h2 className="text-2xl md:text-[32px] text-heading font-heading mb-10 text-center md:text-left">
              {t.browseHeading}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {categoryData.map((cat) => (
                <a 
                  key={cat.id} 
                  href={`#${cat.id}`}
                  className="block group bg-white border border-border-card rounded-[3px] p-5 transition-all hover:border-brand-purple hover:shadow-[0_4px_12px_rgba(0,0,0,0.05)] focus:outline-none focus:ring-4 focus:ring-brand-purple/20"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex flex-col">
                      <div className="w-10 h-10 bg-[#FAF8FC] rounded flex items-center justify-center mb-4 text-brand-purple">
                        {cat.icon === 'websites' && <LayoutTemplate size={20} aria-hidden="true" />}
                        {cat.icon === 'landing-pages' && <Zap size={20} aria-hidden="true" />}
                        {cat.icon === 'portfolios' && <div className="w-5 h-5 flex flex-wrap gap-0.5"><div className="w-2 h-2 bg-brand-purple rounded-[1px]"></div><div className="w-2 h-2 bg-brand-purple rounded-[1px]"></div><div className="w-2 h-2 bg-brand-purple rounded-[1px]"></div><div className="w-2 h-2 bg-brand-purple rounded-[1px]"></div></div>}
                        {cat.icon === 'blogs' && <div className="w-5 h-5 border-2 border-brand-purple rounded-[2px] flex flex-col gap-1 items-center justify-center p-0.5"><div className="w-3 h-0.5 bg-brand-purple"></div><div className="w-3 h-0.5 bg-brand-purple"></div></div>}
                        {cat.icon === 'stores' && <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>}
                        {cat.icon === 'link-in-bio' && <Smartphone size={20} aria-hidden="true" />}
                      </div>
                      <h3 className="font-heading font-bold text-[#2E2E2F] mb-1">{cat.name}</h3>
                      <p className="text-sm text-body">{cat.desc}</p>
                    </div>
                    <ChevronRight size={20} className="text-[#C6C9CD] group-hover:text-brand-purple transition-colors mt-2" aria-hidden="true" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 5: All Generators */}
        <section id="all-generators" className="py-[60px] md:py-[80px] bg-bg-light border-t border-[#E2E4E7]">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="mb-10 text-center md:text-left">
              <h2 className="text-2xl md:text-[32px] text-heading font-heading mb-2">{t.allGeneratorsHeading}</h2>
              <p className="text-body text-base mb-8">{t.allGeneratorsSubheading}</p>
              
              <div className="relative max-w-[480px] mx-auto md:mx-0">
                <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#C6C9CD]" aria-hidden="true" />
                <input 
                  type="text" 
                  aria-label={t.searchLabel}
                  placeholder={t.searchPlaceholder}
                  value={searchQuery}
                  onChange={handleSearch}
                  className="w-full h-12 pl-12 pr-4 border border-[#C6C9CD] rounded bg-white text-base focus:outline-none focus:ring-2 focus:ring-brand-purple focus:border-brand-purple"
                />
              </div>
              {searchQuery && (
                <p className="mt-4 text-sm font-medium text-brand-purple" aria-live="polite">
                  {t.searchCountMatch(totalMatches)}
                </p>
              )}
            </div>

            {searchQuery && totalMatches === 0 ? (
              <div className="text-center py-20 bg-white border border-[#E2E4E7] rounded">
                <p className="text-lg text-heading font-bold mb-1">{t.searchEmptyLine1}</p>
                <p className="text-body mb-6">{t.searchEmptyLine2}</p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a href="/s/ai_site_builder" className="inline-flex items-center justify-center bg-gradient-ai text-white px-6 h-9 font-heading text-sm rounded hover:opacity-90">
                    {t.closingCta}
                  </a>
                  <button 
                    onClick={() => setSearchQuery('')}
                    className="text-brand-purple font-medium text-sm hover:underline"
                  >
                    {t.searchClear}
                  </button>
                </div>
              </div>
            ) : (
              <div className="space-y-[60px]">
                {categoryData.map((cat) => {
                  const catGens = allGenerators[cat.id] || [];
                  const visibleGensCount = catGens.filter(gen => isMatch(gen, cat.name)).length;
                  
                  // If searching and this category has no matches, render it hidden
                  // If not searching, we show up to 6 initially, and hide the rest behind a toggle
                  const isSearching = searchQuery.length > 0;
                  const isExpanded = expandedCats[cat.id] || isSearching;
                  
                  // How many to show when collapsed
                  const initialCount = 6;
                  const hasMore = catGens.length > initialCount;
                  
                  return (
                    <div 
                      key={cat.id} 
                      id={cat.id}
                      className={visibleGensCount === 0 && isSearching ? "hidden" : "block scroll-mt-[80px]"}
                    >
                      <h3 className="text-xl md:text-2xl font-bold font-heading text-heading mb-2">{cat.name}</h3>
                      <p className="text-body mb-6">{cat.desc}</p>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {catGens.slice(0, initialCount).map((gen, idx) => {
                          const matches = isMatch(gen, cat.name);
                          const isHiddenBySearch = isSearching && !matches;
                          return (
                            <a 
                              key={`${cat.id}-initial-${idx}`}
                              href={`/generators/${slugify(gen.name)}`}
                              className={`block bg-white border border-border-card rounded-[3px] p-5 transition-all hover:border-brand-purple hover:shadow-[0_4px_12px_rgba(0,0,0,0.05)] focus:outline-none focus:ring-4 focus:ring-brand-purple/20 ${isHiddenBySearch ? 'hidden' : ''}`}
                            >
                              <div className="flex flex-col h-full">
                                <div className="w-8 h-8 bg-[#FAF8FC] rounded flex items-center justify-center mb-4 text-brand-purple">
                                  {cat.icon === 'websites' && <LayoutTemplate size={16} aria-hidden="true" />}
                                  {cat.icon === 'landing-pages' && <Zap size={16} aria-hidden="true" />}
                                  {cat.icon === 'portfolios' && <div className="w-4 h-4 flex flex-wrap gap-[1px]"><div className="w-[7px] h-[7px] bg-brand-purple rounded-[1px]"></div><div className="w-[7px] h-[7px] bg-brand-purple rounded-[1px]"></div><div className="w-[7px] h-[7px] bg-brand-purple rounded-[1px]"></div><div className="w-[7px] h-[7px] bg-brand-purple rounded-[1px]"></div></div>}
                                  {cat.icon === 'blogs' && <div className="w-4 h-4 border-2 border-brand-purple rounded-[2px] flex flex-col gap-[2px] items-center justify-center p-[2px]"><div className="w-2 h-[2px] bg-brand-purple"></div><div className="w-2 h-[2px] bg-brand-purple"></div></div>}
                                  {cat.icon === 'stores' && <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>}
                                  {cat.icon === 'link-in-bio' && <Smartphone size={16} aria-hidden="true" />}
                                </div>
                                <h4 className="font-bold text-[#2E2E2F] mb-1">{gen.name}</h4>
                                <p className="text-sm text-body">{gen.desc}</p>
                              </div>
                            </a>
                          );
                        })}
                      </div>

                      {hasMore && (
                        <div 
                          className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${isExpanded || isSearching ? 'max-h-[5000px]' : 'max-h-0'}`}
                          aria-hidden={!isExpanded && !isSearching}
                        >
                          <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 ${catGens.slice(0, initialCount).filter(g => !isSearching || isMatch(g, cat.name)).length > 0 ? 'mt-5' : ''}`}>
                            {catGens.slice(initialCount).map((gen, idx) => {
                              const matches = isMatch(gen, cat.name);
                              const isHiddenBySearch = isSearching && !matches;
                              return (
                                <a 
                                  key={`${cat.id}-more-${idx}`}
                                  href={`/generators/${slugify(gen.name)}`}
                                  className={`block bg-white border border-border-card rounded-[3px] p-5 transition-all hover:border-brand-purple hover:shadow-[0_4px_12px_rgba(0,0,0,0.05)] focus:outline-none focus:ring-4 focus:ring-brand-purple/20 ${isHiddenBySearch ? 'hidden' : ''}`}
                                >
                                  <div className="flex flex-col h-full">
                                    <div className="w-8 h-8 bg-[#FAF8FC] rounded flex items-center justify-center mb-4 text-brand-purple">
                                      {cat.icon === 'websites' && <LayoutTemplate size={16} aria-hidden="true" />}
                                      {cat.icon === 'landing-pages' && <Zap size={16} aria-hidden="true" />}
                                      {cat.icon === 'portfolios' && <div className="w-4 h-4 flex flex-wrap gap-[1px]"><div className="w-[7px] h-[7px] bg-brand-purple rounded-[1px]"></div><div className="w-[7px] h-[7px] bg-brand-purple rounded-[1px]"></div><div className="w-[7px] h-[7px] bg-brand-purple rounded-[1px]"></div><div className="w-[7px] h-[7px] bg-brand-purple rounded-[1px]"></div></div>}
                                      {cat.icon === 'blogs' && <div className="w-4 h-4 border-2 border-brand-purple rounded-[2px] flex flex-col gap-[2px] items-center justify-center p-[2px]"><div className="w-2 h-[2px] bg-brand-purple"></div><div className="w-2 h-[2px] bg-brand-purple"></div></div>}
                                      {cat.icon === 'stores' && <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>}
                                      {cat.icon === 'link-in-bio' && <Smartphone size={16} aria-hidden="true" />}
                                    </div>
                                    <h4 className="font-bold text-[#2E2E2F] mb-1">{gen.name}</h4>
                                    <p className="text-sm text-body">{gen.desc}</p>
                                  </div>
                                </a>
                              );
                            })}
                          </div>
                        </div>
                      )}

                      {!isSearching && hasMore && (
                        <div className="mt-6">
                          <button 
                            type="button" 
                            onClick={() => toggleCat(cat.id)}
                            aria-expanded={isExpanded}
                            aria-controls={`#${cat.id}`}
                            className="flex items-center gap-1.5 text-sm font-bold font-heading text-brand-purple hover:opacity-80 transition-opacity"
                          >
                            {isExpanded ? "SHOW LESS" : t.showAllGenerators(catGens.length).toUpperCase()}
                            <ChevronDown size={16} className={`transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} aria-hidden="true" />
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

        {/* SECTION 6: How It Works */}
        <section className="py-[60px] md:py-[80px]">
          <div className="max-w-[1200px] mx-auto px-6">
            <h2 className="text-2xl md:text-[32px] font-bold font-heading text-heading mb-10 text-center">{t.howItWorksHeading}</h2>
            <div className="flex flex-col md:flex-row gap-10 md:gap-6">
              {t.howItWorksSteps.map((step, idx) => (
                <div key={idx} className="flex-1 flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-brand-purple text-white flex items-center justify-center font-heading text-xl font-bold mb-6">
                    {step.num}
                  </div>
                  <h3 className="font-heading font-bold text-heading text-lg mb-2">{step.title}</h3>
                  <p className="text-body max-w-[280px]">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 7: Why Strikingly */}
        <section className="bg-bg-light py-[60px] md:py-[80px]">
          <div className="max-w-[1200px] mx-auto px-6">
            <h2 className="text-2xl md:text-[32px] font-bold font-heading text-heading mb-10 text-center">{t.whyStrikinglyHeading}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {t.whyStrikinglyCards.map((card, idx) => (
                <div key={idx} className="bg-white border border-border-card rounded-[3px] p-8 text-center flex flex-col items-center">
                  <div className="w-12 h-12 bg-[#FAF8FC] rounded-full flex items-center justify-center text-brand-purple mb-6">
                    {idx === 0 && <Zap size={24} aria-hidden="true" />}
                    {idx === 1 && <Smartphone size={24} aria-hidden="true" />}
                    {idx === 2 && <CheckCircle2 size={24} aria-hidden="true" />}
                  </div>
                  <h3 className="font-heading font-bold text-heading text-lg mb-2">{card.title}</h3>
                  <p className="text-body">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 8: FAQ */}
        <section className="py-[60px] md:py-[80px]">
          <div className="max-w-[800px] mx-auto px-6">
            <h2 className="text-2xl md:text-[32px] font-bold font-heading text-heading mb-10 text-center">{t.faqHeading}</h2>
            <div className="border border-border-card rounded-[3px] bg-white divide-y divide-border-card">
              {t.faqs.map((faq, idx) => {
                const isOpen = faqExpanded === idx;
                return (
                  <div key={idx} className="overflow-hidden">
                    <button 
                      type="button"
                      onClick={() => toggleFaq(idx)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-answer-${idx}`}
                      className="w-full text-left font-bold font-heading px-6 py-5 flex items-center justify-between text-[#2E2E2F] hover:bg-bg-light transition-colors focus:outline-none focus:bg-bg-light"
                    >
                      <span>{faq.question}</span>
                      <ChevronDown size={20} className={`text-brand-purple transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
                    </button>
                    <div 
                      id={`faq-answer-${idx}`}
                      className={`px-6 text-body overflow-hidden transition-[max-height] duration-300 ease-in-out ${isOpen ? 'max-h-[500px] pb-5' : 'max-h-0'}`}
                      aria-hidden={!isOpen}
                    >
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* SECTION 9: Closing CTA */}
        <section className="py-20 bg-white border-t border-[#E2E4E7] text-center px-6">
          <div className="max-w-[800px] mx-auto">
            <h2 className="text-heading text-3xl md:text-[32px] mb-4">{t.closingHeading}</h2>
            <p className="text-body mb-8 text-lg">{t.closingSub}</p>
            <a href="/s/ai_site_builder" className="inline-flex items-center justify-center bg-gradient-ai text-white px-8 h-[44px] font-heading text-sm rounded transition-opacity hover:opacity-90">
              {t.closingCta}
            </a>
          </div>
        </section>
      </main>

      {/* SECTION 10: Footer */}
      <Footer t={t} />
    </div>
  );
}

function Footer({ t }) {
  return (
    <footer className="border-t border-[#E2E4E7] bg-white py-12">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div>
            <div className="text-xl font-bold font-heading text-hero mb-4 text-[#2E2E2F]">strikingly</div>
            <p className="text-sm">{t.copyright}</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
            <div>
              <h4 className="font-bold text-heading mb-4 uppercase">Product</h4>
              <ul className="space-y-4 text-[#636972]">
                <li><a href="/templates" className="hover:text-brand-purple">Templates</a></li>
                <li><a href="/pricing" className="hover:text-brand-purple">Pricing</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-heading mb-4 uppercase">Company</h4>
              <ul className="space-y-4 text-[#636972]">
                <li><a href="/about" className="hover:text-brand-purple">About</a></li>
                <li><a href="/blog" className="hover:text-brand-purple">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-heading mb-4 uppercase">Support</h4>
              <ul className="space-y-4 text-[#636972]">
                <li><a href="/support" className="hover:text-brand-purple">Help Center</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-heading mb-4 uppercase">Legal</h4>
              <ul className="space-y-4 text-[#636972]">
                <li><a href="/terms" className="hover:text-brand-purple">Terms</a></li>
                <li><a href="/privacy" className="hover:text-brand-purple">Privacy</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
