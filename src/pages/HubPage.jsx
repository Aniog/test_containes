import React, { useState, useEffect, useRef } from 'react';
import { strings, categories, featuredGenerators, allGenerators } from './data';
import { Search, ArrowRight, Menu, ChevronDown, ChevronUp, CheckCircle } from 'lucide-react';

const s = strings.en;

const HubPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedSections, setExpandedSections] = useState({});
  const [openFaq, setOpenFaq] = useState(0);
  const [isFiltered, setIsFiltered] = useState(false);

  const containerRef = useRef(null);

  const toggleSection = (categoryId) => {
    setExpandedSections(prev => ({
      ...prev,
      [categoryId]: !prev[categoryId]
    }));
  };

  const clearSearch = () => {
    setSearchQuery('');
  };

  const getFilteredGenerators = (categoryItems) => {
    if (!searchQuery) return categoryItems;
    const lowerQuery = searchQuery.toLowerCase();
    return categoryItems.filter(item => 
      item.name.toLowerCase().includes(lowerQuery) || 
      item.desc.toLowerCase().includes(lowerQuery)
    );
  };

  useEffect(() => {
    setIsFiltered(searchQuery.length > 0);
  }, [searchQuery]);

  const totalMatchCount = Object.values(allGenerators).reduce((acc, current) => {
    return acc + getFilteredGenerators(current).length;
  }, 0);

  return (
    <div className="min-h-screen bg-white" ref={containerRef}>
      {/* Section 0. Top bar */}
      <header className="sticky top-0 z-50 bg-white border-b border-[#E2E4E7]">
        <div className="max-w-[1200px] mx-auto px-5 h-[60px] flex items-center">
          <a href="/" className="font-heading text-[20px] text-black">
            strikingly <span className="text-black">AI</span>
          </a>
        </div>
      </header>

      <main>
        {/* Section 1. Breadcrumb */}
        <nav aria-label="Breadcrumb" className="max-w-[1200px] mx-auto px-5 py-5 text-[12px]">
          <ol className="flex items-center space-x-2 text-[#636972]">
            <li><a href="https://www.strikingly.com/" className="hover:text-[#8159BB]">Strikingly</a></li>
            <li className="text-[#8159BB]" aria-hidden="true">&gt;</li>
            <li className="text-[#636972] font-semibold" aria-current="page">AI Generators</li>
          </ol>
        </nav>

        {/* Section 2. Hero */}
        <section className="max-w-[1200px] mx-auto px-5 py-[60px] md:py-[80px] grid md:grid-cols-2 gap-10 items-center overflow-hidden">
          <div className="order-2 md:order-1">
            <h1 className="text-[32px] md:text-[48px] leading-tight mb-5">
              <span className="block text-[#2E2E2F]">{s.hero.h1_1}</span>
              <span className="ai-gradient-text block">{s.hero.h1_2}</span>
            </h1>
            <p className="text-[16px] md:text-[18px] text-[#636972] max-w-[500px] mb-8">
              {s.hero.subheadline}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="/s/ai_site_builder" 
                className="ai-gradient-bg h-[44px] px-[25px] flex items-center justify-center rounded-[4px] text-white font-heading text-[14px] hover:opacity-90 transition-opacity"
              >
                {s.hero.ctaPrimary}
              </a>
              <a 
                href="#all-generators" 
                className="btn-ghost h-[44px] px-[25px] flex items-center justify-center rounded-[4px] font-heading text-[14px] hover:bg-[#F4F6F8] transition-colors"
              >
                {s.hero.ctaSecondary}
              </a>
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            {/* SVG Illustration Placeholder */}
            <svg width="400" height="300" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="w-full max-w-[400px]">
              <rect x="10" y="10" width="380" height="280" rx="10" stroke="#8159BB" strokeWidth="2" strokeDasharray="5 5" />
              <rect x="40" y="40" width="320" height="20" rx="4" fill="#E2E4E7" />
              <rect x="40" y="80" width="100" height="100" rx="4" fill="#E4E6F0" />
              <rect x="160" y="80" width="200" height="15" rx="4" fill="#F4F6F8" />
              <rect x="160" y="105" width="200" height="15" rx="4" fill="#F4F6F8" />
              <rect x="160" y="130" width="150" height="15" rx="4" fill="#F4F6F8" />
              <circle cx="200" cy="240" r="30" stroke="#CB0C9F" strokeWidth="2" />
            </svg>
          </div>
        </section>

        {/* Section 3. Featured Generators */}
        <section className="bg-white py-[40px]">
          <div className="max-w-[1200px] mx-auto px-5 text-center mb-10">
            <h2 className="text-[26px] md:text-[32px] mb-2">{s.featured.title}</h2>
            <p className="text-[#636972]">{s.featured.subtitle}</p>
          </div>
          <div className="max-w-[1200px] mx-auto px-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {featuredGenerators.map((gen, idx) => (
              <a 
                key={idx} 
                href={`/generators/${gen.slug}`} 
                className="bg-white border border-[#C6C9CD] rounded-[3px] p-5 card-hover transition-all flex flex-col items-start gap-4 group"
              >
                <div className="flex flex-col items-start gap-2">
                  <span className="text-[11px] font-heading border border-[#8159BB] text-[#8159BB] px-[6px] py-[2px] rounded-[3px]">
                    {gen.category}
                  </span>
                  <p className="font-heading text-[16px] text-[#4B5056]">{gen.name}</p>
                  <p className="text-[14px] text-[#636972]">{gen.desc}</p>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Section 4. Browse by Category */}
        <section className="bg-white py-[40px]">
          <div className="max-w-[1200px] mx-auto px-5 text-center mb-10">
            <h2 className="text-[26px] md:text-[32px]">{s.browse.title}</h2>
          </div>
          <div className="max-w-[1200px] mx-auto px-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {categories.map((cat, idx) => (
              <a 
                key={idx} 
                href={`#${cat.slug}`} 
                className="bg-white border border-[#C6C9CD] rounded-[3px] p-5 card-hover transition-all group flex flex-col"
              >
                <div className="w-[40px] h-[40px] bg-[#F4F6F8] rounded-full mb-4 flex items-center justify-center text-[#8159BB]" aria-hidden="true">
                  <ArrowRight size={20} />
                </div>
                <div className="font-heading text-[16px] text-[#4B5056] mb-2">{cat.name}</div>
                <p className="text-[14px] text-[#636972] mb-4 flex-grow">{cat.desc}</p>
                <div className="flex items-center text-[#8159BB] font-heading text-[12px] group-hover:gap-2 transition-all">
                  BROWSE <ArrowRight size={14} className="ml-1" />
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Section 5. All Generators directory */}
        <section id="all-generators" className="bg-[#F4F6F8] py-[60px] md:py-[80px]">
          <div className="max-w-[1200px] mx-auto px-5">
            <div className="text-center mb-10">
              <h2 className="text-[26px] md:text-[32px] mb-2">{s.all.title}</h2>
              <p className="text-[#636972]">{s.all.subtitle}</p>
            </div>

            {/* Search Input */}
            <div className="max-w-[480px] mx-auto mb-10 relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#C6C9CD]" aria-hidden="true">
                <Search size={20} />
              </div>
              <input 
                type="text" 
                aria-label="Search generators" 
                placeholder={s.all.searchPlaceholder}
                className="w-full h-[48px] pl-12 pr-4 border border-[#C6C9CD] rounded-[4px] focus:outline-none focus:ring-1 focus:ring-[#8159BB] transition-all bg-white"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {isFiltered && (
                <div className="absolute -bottom-7 left-0 text-[12px] text-[#636972]">
                  {s.all.matchCount.replace('{count}', totalMatchCount)}
                </div>
              )}
            </div>

            {totalMatchCount === 0 && isFiltered ? (
              <div className="text-center py-10">
                <p className="text-[#636972] mb-4">{s.all.noResults}</p>
                <button 
                  onClick={clearSearch} 
                  className="btn-ghost px-5 py-2 rounded-[4px] font-heading text-[14px] mb-4"
                >
                  {s.all.clearSearch}
                </button>
                <div className="mt-2">
                  <a href="/s/ai_site_builder" className="text-[#8159BB] hover:underline font-semibold">
                    Start with our AI builder
                  </a>
                </div>
              </div>
            ) : (
              <div className="space-y-[60px]">
                {categories.map((cat) => {
                  const filteredGens = getFilteredGenerators(allGenerators[cat.id]);
                  if (isFiltered && filteredGens.length === 0) return null;
                  
                  const initialCount = 6;
                  const isExpanded = expandedSections[cat.id] || isFiltered;
                  const visibleGens = isExpanded ? filteredGens : filteredGens.slice(0, initialCount);
                  const canExpand = filteredGens.length > initialCount && !isFiltered;

                  return (
                    <div key={cat.id} id={cat.slug} className="scroll-mt-20">
                      <div className="mb-6">
                        <h3 className="text-[20px] md:text-[24px] mb-1">{cat.name}</h3>
                        <p className="text-[#636972] text-[14px]">{cat.desc}</p>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5" id={`grid-${cat.id}`}>
                        {visibleGens.map((gen, gIdx) => (
                          <article key={gIdx}>
                            <a 
                              href={`/generators/${gen.slug}`} 
                              className="bg-white border border-[#C6C9CD] rounded-[3px] p-5 card-hover transition-all flex flex-col gap-4 group h-full"
                            >
                              <div className="w-full aspect-[3/2] bg-[#F4F6F8] rounded-[2px] mb-1 flex items-center justify-center overflow-hidden" aria-hidden="true">
                                {/* Placeholder for category thumbnail */}
                                <div className="text-[#E2E4E7]">
                                  <ArrowRight size={32} strokeWidth={1} />
                                </div>
                              </div>
                              <div>
                                  <p className="font-heading text-[16px] text-[#4B5056] mb-1">{gen.name}</p>
                                  <p className="text-[14px] text-[#636972]">{gen.desc}</p>
                              </div>
                            </a>
                          </article>
                        ))}
                      </div>
                      {canExpand && (
                        <div className="mt-8 flex justify-center">
                          <button 
                            onClick={() => toggleSection(cat.id)}
                            aria-expanded={isExpanded}
                            aria-controls={`grid-${cat.id}`}
                            className="btn-ghost px-6 py-2 rounded-[4px] font-heading text-[14px] flex items-center gap-2 hover:bg-white/50 transition-all"
                          >
                            {isExpanded ? s.all.showLess : s.all.showAll.replace('{count}', filteredGens.length)}
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

        {/* Section 6. How It Works */}
        <section className="bg-white py-[60px] md:py-[80px]">
          <div className="max-w-[1200px] mx-auto px-5">
            <h2 className="text-[26px] md:text-[32px] text-center mb-12">{s.howItWorks.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {s.howItWorks.steps.map((step, idx) => (
                <div key={idx} className="flex flex-col items-center text-center">
                  <div className="w-[40px] h-[40px] bg-[#8159BB] text-white rounded-full flex items-center justify-center font-heading mb-4">
                    {idx + 1}
                  </div>
                  <h4 className="font-heading text-[16px] text-[#4B5056] mb-2">{step.title}</h4>
                  <p className="text-[14px] text-[#636972]">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 7. Why Strikingly */}
        <section className="bg-white border-y border-[#E2E4E7] py-[60px] md:py-[80px]">
          <div className="max-w-[1200px] mx-auto px-5">
            <h2 className="text-[26px] md:text-[32px] text-center mb-12">{s.whyStrikingly.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {s.whyStrikingly.items.map((item, idx) => (
                <div key={idx} className="flex flex-col items-center text-center px-4">
                  <div className="text-[#8159BB] mb-4" aria-hidden="true">
                    <CheckCircle size={32} />
                  </div>
                  <h4 className="font-heading text-[16px] text-[#4B5056] mb-2">{item.title}</h4>
                  <p className="text-[14px] text-[#636972]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 8. FAQ */}
        <section className="bg-white py-[60px] md:py-[80px]">
          <div className="max-w-[800px] mx-auto px-5">
            <h2 className="text-[26px] md:text-[32px] text-center mb-12">{s.faq.title}</h2>
            <div className="space-y-4">
              {s.faq.items.map((item, idx) => (
                <div key={idx} className="border border-[#E2E4E7] rounded-[4px] overflow-hidden">
                  <button 
                    onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                    aria-expanded={openFaq === idx}
                    aria-controls={`faq-answer-${idx}`}
                    className="w-full flex items-center justify-between p-5 text-left bg-white hover:bg-[#F4F6F8] transition-colors"
                  >
                    <span className="font-semibold text-[#4B5056]">{item.q}</span>
                    <div className="text-[#8159BB]">
                      {openFaq === idx ? <ChevronUp size={20} />: <ChevronDown size={20} />}
                    </div>
                  </button>
                  <div 
                    id={`faq-answer-${idx}`}
                    className={cn(
                      "overflow-hidden transition-all duration-300",
                      openFaq === idx ? "max-h-[500px] border-t border-[#E2E4E7]" : "max-h-0"
                    )}
                  >
                    <div className="p-5 text-[#636972] text-[14px]">
                      <p>{item.a}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 9. Closing CTA */}
        <section className="bg-white py-[80px] text-center">
            <div className="max-w-[1200px] mx-auto px-5">
                <h2 className="text-[32px] md:text-[40px] text-[#2E2E2F] mb-4">{s.closingCta.title}</h2>
                <p className="text-[#636972] text-[18px] mb-8">{s.closingCta.sub}</p>
                <div className="flex justify-center">
                    <a 
                        href="/s/ai_site_builder" 
                        className="ai-gradient-bg h-[44px] px-[30px] flex items-center justify-center rounded-[4px] text-white font-heading text-[14px] hover:opacity-90 transition-opacity"
                    >
                        {s.closingCta.cta}
                    </a>
                </div>
            </div>
        </section>
      </main>

      {/* Section 10. Footer */}
      <footer className="bg-[#F4F6F8] border-t border-[#E2E4E7] py-[60px]">
        <div className="max-w-[1200px] mx-auto px-5 grid grid-cols-2 md:grid-cols-5 gap-10 md:gap-5">
          <div className="col-span-2 md:col-span-1">
            <a href="/" className="font-heading text-[20px] text-black">
              strikingly
            </a>
          </div>
          <div className="flex flex-col gap-3 text-[14px]">
            <a href="/about" className="text-[#636972] hover:text-[#8159BB]">{s.footer.about}</a>
            <a href="/pricing" className="text-[#636972] hover:text-[#8159BB]">{s.footer.pricing}</a>
          </div>
          <div className="flex flex-col gap-3 text-[14px]">
            <a href="/templates" className="text-[#636972] hover:text-[#8159BB]">{s.footer.templates}</a>
            <a href="/support" className="text-[#636972] hover:text-[#8159BB]">{s.footer.support}</a>
          </div>
          <div className="flex flex-col gap-3 text-[14px]">
            <a href="/blog" className="text-[#636972] hover:text-[#8159BB]">{s.footer.blog}</a>
            <a href="/terms" className="text-[#636972] hover:text-[#8159BB]">{s.footer.terms}</a>
          </div>
          <div className="flex flex-col gap-3 text-[14px]">
            <a href="/privacy" className="text-[#636972] hover:text-[#8159BB]">{s.footer.privacy}</a>
          </div>
        </div>
        <div className="max-w-[1200px] mx-auto px-5 mt-10 pt-10 border-t border-[#E2E4E7] text-center text-[#636972] text-[12px]">
          {s.footer.copyright}
        </div>
      </footer>
    </div>
  );
};

export default HubPage;
