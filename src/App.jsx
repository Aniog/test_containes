import React from 'react';
import { featuredGenerators, categories, allGenerators } from './data';
import { Search } from 'lucide-react';
import { strings } from './strings';

const t = strings.en;

const Logo = () => (
  <svg width="120" height="24" viewBox="0 0 120 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="h-6">
    <text x="0" y="18" fill="#2E2E2F" fontWeight="bold" fontSize="18" fontFamily="sans-serif">strikingly AI</text>
  </svg>
);

const App = () => {

  return (
    <>
      <nav aria-label="Breadcrumb" className="mx-auto max-w-[1200px] w-full px-5 py-3">
        <ol className="flex items-center space-x-2 text-sm text-[#636972]">
          <li><a href="/" className="hover:text-[#8159BB]">{t.breadcrumb.home}</a></li>
          <li><span className="text-[#8159BB] px-2">&gt;</span></li>
          <li aria-current="page">{t.breadcrumb.current}</li>
        </ol>
      </nav>

      <main>
        <section className="mx-auto max-w-[1200px] px-5 py-[60px] md:py-[80px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-[32px] md:text-[48px] font-bold leading-[1.2] tracking-tight mb-5 font-heading">
                <span className="block text-[#2E2E2F] uppercase">{t.hero.h1_line1}</span>
                <span className="block bg-gradient-to-r from-[#7671FF] to-[#CB0C9F] text-transparent bg-clip-text uppercase">{t.hero.h1_line2}</span>
              </h1>
              <p className="text-[#636972] text-[16px] md:text-[18px] mb-8 max-w-lg">
                {t.hero.subheadline}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="/s/ai_site_builder" className="inline-flex items-center justify-center h-[44px] px-[20px] rounded-[4px] bg-gradient-to-r from-[#7671FF] to-[#CB0C9F] text-white font-bold text-[14px] font-heading uppercase text-center focus-visible:outline-[#8159BB]">
                  {t.hero.cta_primary}
                </a>
                <a href="#all-generators" className="inline-flex items-center justify-center h-[44px] px-[20px] rounded-[4px] border border-[#8159BB] text-[#8159BB] bg-transparent font-bold text-[14px] font-heading uppercase hover:bg-[#F4F6F8] text-center focus-visible:outline-[#8159BB]">
                  {t.hero.cta_secondary}
                </a>
              </div>
            </div>
            <div className="flex justify-center md:justify-end">
              <svg width="400" height="300" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="w-full max-w-[400px] h-auto">
                <rect x="20" y="20" width="360" height="260" rx="8" stroke="#8159BB" strokeWidth="2" strokeOpacity="0.2" fill="#F4F6F8" />
                <rect x="20" y="20" width="360" height="40" rx="8" fill="#8159BB" fillOpacity="0.1" />
                <circle cx="40" cy="40" r="4" fill="#8159BB" fillOpacity="0.4" />
                <circle cx="56" cy="40" r="4" fill="#8159BB" fillOpacity="0.4" />
                <circle cx="72" cy="40" r="4" fill="#8159BB" fillOpacity="0.4" />
                <rect x="40" y="80" width="120" height="20" rx="4" fill="#8159BB" fillOpacity="0.2" />
                <rect x="40" y="110" width="200" height="12" rx="4" fill="#636972" fillOpacity="0.2" />
                <rect x="40" y="130" width="160" height="12" rx="4" fill="#636972" fillOpacity="0.2" />
                <rect x="40" y="170" width="100" height="36" rx="4" fill="#7671FF" fillOpacity="0.6" />
                <rect x="240" y="100" width="100" height="100" rx="4" fill="#CB0C9F" fillOpacity="0.1" />
              </svg>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1200px] px-5 py-[40px]">
          <h2 className="text-[26px] md:text-[32px] font-bold text-[#4B5056] font-heading uppercase mb-2">FEATURED GENERATORS</h2>
          <p className="text-[#636972] mb-8">A few common starting points.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {featuredGenerators.map((gen, idx) => (
              <a key={idx} href={`/generators/${gen.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`} className="block p-[20px] rounded-[3px] border border-[#C6C9CD] bg-white hover:shadow-md hover:border-[#8159BB] transition-shadow duration-200 group focus-visible:outline-[#8159BB]">
                <h3 className="font-bold text-[#2E2E2F] mb-1 group-hover:text-[#8159BB]">{gen.name}</h3>
                <p className="text-[#636972] text-[14px] mb-3">{gen.desc}</p>
                <div className="inline-flex items-center px-[6px] py-[2px] rounded-[3px] border border-[#8159BB] text-[#8159BB] text-[11px] font-bold font-heading uppercase">
                  {gen.category}
                </div>
              </a>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-[1200px] px-5 py-[40px]">
          <h2 className="text-[26px] md:text-[32px] font-bold text-[#4B5056] font-heading uppercase mb-8">BROWSE BY CATEGORY</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {categories.map((cat, idx) => (
              <a key={idx} href={`#${cat.slug}`} className="flex flex-col p-[20px] rounded-[3px] border border-[#C6C9CD] bg-white hover:shadow-md hover:border-[#8159BB] transition-shadow duration-200 group focus-visible:outline-[#8159BB]">
                <div className="w-[40px] h-[40px] rounded bg-[#F4F6F8] flex items-center justify-center mb-4 text-[#8159BB]">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>
                </div>
                <h3 className="font-bold text-[#2E2E2F] font-heading uppercase mb-1 flex items-center justify-between">
                  {cat.name}
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#8159BB] opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </h3>
                <p className="text-[#636972] text-[14px]">{cat.desc}</p>
              </a>
            ))}
          </div>
        </section>

        <section id="all-generators" className="mx-auto max-w-[1200px] px-5 py-[40px]">
          <h2 className="text-[26px] md:text-[32px] font-bold text-[#4B5056] font-heading uppercase mb-2">ALL GENERATORS</h2>
          <p className="text-[#636972] mb-8">Sixty-plus generators, organized by what you're building.</p>

          <div className="mb-10 max-w-[480px]">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-[#636972]" aria-hidden="true" />
              </div>
              <input
                type="text"
                id="generator-search"
                className="block w-full pl-10 pr-3 py-2 border border-[#C6C9CD] rounded-[4px] leading-5 bg-white placeholder-[#636972] focus:outline-none focus:ring-1 focus:ring-[#8159BB] focus:border-[#8159BB] sm:text-sm"
                placeholder="Search generators..."
                aria-label="Search generators"
              />
            </div>
            <div id="search-count" className="mt-2 text-sm text-[#636972] hidden" aria-live="polite"></div>
          </div>
          
          <div id="no-results" className="hidden py-10 text-center bg-[#F4F6F8] rounded-[4px] border border-[#C6C9CD]">
            <p className="text-[#2E2E2F] font-bold mb-2">No generators match your search.</p>
            <p className="text-[#636972] mb-4">Can't find it? Start with our AI builder.</p>
            <div className="flex gap-4 justify-center">
              <button id="clear-search" className="inline-flex items-center justify-center h-[36px] px-[15px] rounded-[4px] border border-[#C6C9CD] text-[#4B5056] bg-white font-bold text-[14px] font-heading uppercase hover:bg-[#F4F6F8] focus-visible:outline-[#8159BB]">
                CLEAR SEARCH
              </button>
              <a href="/s/ai_site_builder" className="inline-flex items-center justify-center h-[36px] px-[15px] rounded-[4px] bg-gradient-to-r from-[#7671FF] to-[#CB0C9F] text-white font-bold text-[14px] font-heading uppercase focus-visible:outline-[#8159BB]">
                START WITH AI BUILDER
              </a>
            </div>
          </div>

          <div className="directory-sections space-y-12">
            {categories.map((cat, catIdx) => {
              const catGenerators = allGenerators.filter(g => g.category === cat.id);
              return (
                <section key={catIdx} id={cat.slug} className="directory-category">
                  <h3 className="text-[20px] md:text-[24px] font-bold text-[#4B5056] font-heading uppercase mb-1">{cat.name}</h3>
                  <p className="text-[#636972] mb-6">{cat.desc}</p>
                  
                  <div className="generators-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                    {catGenerators.map((gen, idx) => (
                      <article key={idx} className={`generator-card flex flex-col p-[20px] rounded-[3px] border border-[#C6C9CD] bg-white hover:shadow-md hover:border-[#8159BB] transition-shadow duration-200 group focus-visible:outline-[#8159BB] ${idx >= 6 ? 'card-collapsible overflow-hidden js-hide' : ''}`} data-name={gen.name} data-desc={gen.desc} data-cat={cat.name}>
                        <a href={`/generators/${gen.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`} className="flex flex-col h-full outline-none">
                          <div className="w-[32px] h-[32px] rounded bg-[#F4F6F8] flex items-center justify-center mb-3 text-[#8159BB]">
                             <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect></svg>
                          </div>
                          <h4 className="font-bold text-[#2E2E2F] mb-1 group-hover:text-[#8159BB]">{gen.name}</h4>
                          <p className="text-[#636972] text-[14px] mt-auto">{gen.desc}</p>
                        </a>
                      </article>
                    ))}
                  </div>
                  
                  {catGenerators.length > 6 && (
                    <div className="mt-6 text-center js-show-toggle">
                      <button aria-expanded="false" aria-controls={`${cat.slug}-grid`} className="toggle-btn inline-flex items-center justify-center h-[36px] px-[15px] rounded-[4px] border border-[#C6C9CD] text-[#4B5056] bg-white font-bold text-[14px] font-heading uppercase hover:bg-[#F4F6F8] focus-visible:outline-[#8159BB]">
                        <span>SHOW ALL {catGenerators.length} GENERATORS</span>
                        <svg className="ms-2 w-4 h-4 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                      </button>
                    </div>
                  )}
                </section>
              );
            })}
          </div>
        </section>

        <section className="mx-auto max-w-[1200px] px-5 py-[60px] bg-[#F4F6F8] rounded-[8px] my-10">
          <h2 className="text-[26px] md:text-[32px] font-bold text-[#4B5056] font-heading uppercase mb-10 text-center">HOW IT WORKS</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="flex flex-col items-center text-center">
              <div className="w-[48px] h-[48px] rounded-full bg-[#8159BB] text-white flex items-center justify-center text-[20px] font-bold font-heading mb-4">1</div>
              <h3 className="font-bold text-[#2E2E2F] font-heading uppercase mb-2">PICK A GENERATOR</h3>
              <p className="text-[#636972]">Browse by category or search to find one that fits your goal.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-[48px] h-[48px] rounded-full bg-[#8159BB] text-white flex items-center justify-center text-[20px] font-bold font-heading mb-4">2</div>
              <h3 className="font-bold text-[#2E2E2F] font-heading uppercase mb-2">DESCRIBE YOUR SITE</h3>
              <p className="text-[#636972]">Tell our AI builder about your business in a sentence or two.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-[48px] h-[48px] rounded-full bg-[#8159BB] text-white flex items-center justify-center text-[20px] font-bold font-heading mb-4">3</div>
              <h3 className="font-bold text-[#2E2E2F] font-heading uppercase mb-2">GENERATE AND PUBLISH</h3>
              <p className="text-[#636972]">Get a fully built site in seconds. Customize anything, then go live.</p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1200px] px-5 py-[40px]">
          <h2 className="text-[26px] md:text-[32px] font-bold text-[#4B5056] font-heading uppercase mb-10 text-center">WHY STRIKINGLY</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="flex flex-col">
              <div className="w-[40px] h-[40px] mb-4 text-[#8159BB]">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path></svg>
              </div>
              <h3 className="font-bold text-[#2E2E2F] font-heading uppercase mb-2">LIVE IN SECONDS</h3>
              <p className="text-[#636972]">Describe your site, we build it. No setup, no learning curve.</p>
            </div>
            <div className="flex flex-col">
              <div className="w-[40px] h-[40px] mb-4 text-[#8159BB]">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>
              </div>
              <h3 className="font-bold text-[#2E2E2F] font-heading uppercase mb-2">MOBILE BY DEFAULT</h3>
              <p className="text-[#636972]">Every generator produces responsive sites that work on any device.</p>
            </div>
            <div className="flex flex-col">
              <div className="w-[40px] h-[40px] mb-4 text-[#8159BB]">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>
              </div>
              <h3 className="font-bold text-[#2E2E2F] font-heading uppercase mb-2">FREE TO START</h3>
              <p className="text-[#636972]">Generate, customize, and publish without a credit card.</p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[800px] px-5 py-[60px]">
          <h2 className="text-[26px] md:text-[32px] font-bold text-[#4B5056] font-heading uppercase mb-8 text-center">FREQUENTLY ASKED QUESTIONS</h2>
          <div className="faq-accordion space-y-4">
            
            <div className="border border-[#C6C9CD] rounded-[4px] bg-white overflow-hidden">
              <button type="button" aria-expanded="true" aria-controls="faq-ans-1" className="faq-toggle flex justify-between items-center w-full px-5 py-4 text-left focus-visible:outline-[#8159BB]">
                <span className="font-bold text-[#2E2E2F]">What is an AI site generator?</span>
                <svg className="w-5 h-5 text-[#8159BB] transform rotate-180 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </button>
              <div id="faq-ans-1" className="px-5 pb-5 faq-content" style={{ display: 'block' }}>
                <p className="text-[#636972]">An AI site generator is a tool that takes a short description of your business or goal and automatically builds a complete website for you. It writes the copy, selects appropriately styled sections, and picks stock images that match your industry.</p>
                <p className="text-[#636972] mt-2">Instead of starting from a blank screen and dragging elements around, you get a fully functional draft in seconds. You can then edit any part of it before publishing.</p>
              </div>
            </div>

            <div className="border border-[#C6C9CD] rounded-[4px] bg-white overflow-hidden">
              <button type="button" aria-expanded="false" aria-controls="faq-ans-2" className="faq-toggle flex justify-between items-center w-full px-5 py-4 text-left focus-visible:outline-[#8159BB]">
                <span className="font-bold text-[#2E2E2F]">How is a generator different from a template?</span>
                <svg className="w-5 h-5 text-[#8159BB] transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </button>
              <div id="faq-ans-2" className="px-5 pb-5 faq-content" style={{ display: 'none' }}>
                <p className="text-[#636972]">A template provides a layout structure and placeholder text (like "Lorem Ipsum") that you have to manually replace. An AI generator goes much further—it generates unique, context-aware written content and selects relevant imagery from the moment it's created based on your prompt.</p>
              </div>
            </div>

            <div className="border border-[#C6C9CD] rounded-[4px] bg-white overflow-hidden">
              <button type="button" aria-expanded="false" aria-controls="faq-ans-3" className="faq-toggle flex justify-between items-center w-full px-5 py-4 text-left focus-visible:outline-[#8159BB]">
                <span className="font-bold text-[#2E2E2F]">Are these generators free to use?</span>
                <svg className="w-5 h-5 text-[#8159BB] transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </button>
              <div id="faq-ans-3" className="px-5 pb-5 faq-content" style={{ display: 'none' }}>
                <p className="text-[#636972]">Yes, using the AI generator to create your site draft is completely free. You can generate multiple versions, edit the content, and publish your site on a free Strikingly subdomain (like mysite.mystrikingly.com) at no cost. Premium features like custom domains are available if you decide to upgrade later.</p>
              </div>
            </div>

            <div className="border border-[#C6C9CD] rounded-[4px] bg-white overflow-hidden">
              <button type="button" aria-expanded="false" aria-controls="faq-ans-4" className="faq-toggle flex justify-between items-center w-full px-5 py-4 text-left focus-visible:outline-[#8159BB]">
                <span className="font-bold text-[#2E2E2F]">What kinds of sites can I build?</span>
                <svg className="w-5 h-5 text-[#8159BB] transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </button>
              <div id="faq-ans-4" className="px-5 pb-5 faq-content" style={{ display: 'none' }}>
                <p className="text-[#636972]">You can build almost anything! Our generators are grouped by category to help you start, but the AI is flexible enough to create portfolios, online stores, personal blogs, landing pages, business directory sites, wedding sites, and more. Even if you don't see your specific niche listed, describe what you need in the prompt and the AI will adapt.</p>
              </div>
            </div>

            <div className="border border-[#C6C9CD] rounded-[4px] bg-white overflow-hidden">
              <button type="button" aria-expanded="false" aria-controls="faq-ans-5" className="faq-toggle flex justify-between items-center w-full px-5 py-4 text-left focus-visible:outline-[#8159BB]">
                <span className="font-bold text-[#2E2E2F]">Can I customize what the generator produces?</span>
                <svg className="w-5 h-5 text-[#8159BB] transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </button>
              <div id="faq-ans-5" className="px-5 pb-5 faq-content" style={{ display: 'none' }}>
                <p className="text-[#636972]">Absolutely. The generator's output is meant to give you a massive head start, not lock you into a rigid design. Once the AI completes its draft, you will land in our visual editor where you can change text, swap images, rearrange sections, change colors, and add new pages.</p>
              </div>
            </div>

            <div className="border border-[#C6C9CD] rounded-[4px] bg-white overflow-hidden">
              <button type="button" aria-expanded="false" aria-controls="faq-ans-6" className="faq-toggle flex justify-between items-center w-full px-5 py-4 text-left focus-visible:outline-[#8159BB]">
                <span className="font-bold text-[#2E2E2F]">Do generated sites work on mobile?</span>
                <svg className="w-5 h-5 text-[#8159BB] transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </button>
              <div id="faq-ans-6" className="px-5 pb-5 faq-content" style={{ display: 'none' }}>
                <p className="text-[#636972]">Yes! Every website produced by the Strinkingly AI generator is 100% responsive. This means your layout, text, and images will automatically adjust to look perfect on smartphones, tablets, and desktop computers without you needing to do any extra work.</p>
              </div>
            </div>
            
          </div>
        </section>

        <section className="mx-auto max-w-[800px] px-5 py-[80px] text-center">
          <h2 className="text-[32px] md:text-[40px] font-bold text-[#4B5056] font-heading uppercase mb-4">READY TO BUILD?</h2>
          <p className="text-[#636972] text-[18px] mb-8">Pick a generator above, or jump straight into our AI builder.</p>
          <a href="/s/ai_site_builder" className="inline-flex items-center justify-center h-[44px] px-[30px] rounded-[4px] bg-gradient-to-r from-[#7671FF] to-[#CB0C9F] text-white font-bold text-[16px] font-heading uppercase focus-visible:outline-[#8159BB]">
            START WITH AI BUILDER
          </a>
        </section>
      </main>

    </>
  );
};

export default App;
