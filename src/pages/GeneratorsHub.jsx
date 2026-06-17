import React, { useState, useEffect, useRef, useMemo } from 'react';
import { strings } from '../lib/strings';
import { generatorsData, slugify } from '../lib/data';

const SECTION_ID = {
  WEBSITES: 'websites',
  LANDING_PAGES: 'landing-pages',
  PORTFOLIOS: 'portfolios',
  BLOGS: 'blogs',
  STORES: 'stores',
  LINK_IN_BIO: 'link-in-bio',
};

const GeneratorsHub = () => {
  return <div className="p-20 text-black">Hello Generators Hub</div>;
};

export default GeneratorsHub;

      {/* Section 1. Breadcrumb */}
      <nav aria-label="Breadcrumb" className="w-full max-w-[1200px] px-5 py-4">
        <ol className="flex items-center gap-2 text-[12px]">
          <li>
            <a href="https://www.strikingly.com/" className="hover:text-brand-purple underline decoration-dotted">Strikingly</a>
          </li>
          <li className="text-brand-purple" aria-hidden="true">&gt;</li>
          <li className="text-body font-normal" aria-current="page">AI Generators</li>
        </ol>
      </nav>

      {/* Section 2. Hero */}
      <section className="w-full bg-[#fcfaff] py-[60px] md:py-[80px] flex justify-center">
        <div className="w-full max-w-[1200px] px-5 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="flex flex-col gap-6">
            <h1 className="text-[28px] md:text-[40px] lg:text-[48px] font-heading font-bold flex flex-col leading-tight">
              <span className="text-heading-hero">{t.hero.h1L1}</span>
              <span className="ai-text-gradient">{t.hero.h1L2}</span>
            </h1>
            <p className="text-[14px] md:text-[16px] max-w-[480px]">
              {t.hero.subheadline}
            </p>
            <div className="flex flex-col sm:flex-row gap-[10px]">
              <a href="/s/ai_site_builder" className="btn-primary w-full sm:w-auto px-10">
                {t.hero.ctaPrimary}
              </a>
              <a href="#all-generators" className="btn-ghost w-full sm:w-auto h-[44px]">
                {t.hero.ctaSecondary}
              </a>
            </div>
          </div>
          <div className="flex justify-center md:justify-end">
            <svg width="400" height="300" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <rect width="400" height="300" rx="4" fill="white" stroke="#E2E4E7" strokeWidth="2"/>
              <path d="M40 60H140M40 80H360M40 100H360M40 120H360M40 140H200" stroke="#8159BB" strokeWidth="4" strokeLinecap="round" opacity="0.2"/>
              <circle cx="340" cy="40" r="10" fill="#CB0C9F" opacity="0.1"/>
              <circle cx="310" cy="40" r="10" fill="#7671FF" opacity="0.1"/>
              <rect x="220" y="160" width="140" height="100" rx="4" fill="#8159BB" opacity="0.05"/>
              <rect x="40" y="160" width="160" height="100" rx="4" fill="#CB0C9F" opacity="0.05"/>
            </svg>
          </div>
        </div>
      </section>

      {/* Section 3. Featured Generators */}
      <section className="w-full py-[40px] bg-white flex justify-center">
        <div className="w-full max-w-[1200px] px-5 flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <h2 className="text-[26px] md:text-[32px] font-heading font-bold text-heading-primary">{t.featured.title}</h2>
            <p className="text-[14px]">{t.featured.subtitle}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {featuredGenerators.map((gen, idx) => (
              <a key={idx} href={`/generators/${slugify(gen.name)}`} className="card flex flex-col gap-3 group">
                <span className="font-heading font-bold text-[16px] text-brand-purple uppercase">{gen.name}</span>
                <p className="text-[14px] line-clamp-1">{gen.description}</p>
                <div className="mt-auto">
                  <span className="tag">{gen.category}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4. Browse by Category */}
      <section className="w-full py-[40px] bg-light-bg flex justify-center">
        <div className="w-full max-w-[1200px] px-5 flex flex-col gap-8">
          <h2 className="text-[26px] md:text-[32px] font-heading font-bold text-heading-primary">{t.browseByCategory.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {t.browseByCategory.categories.map((cat) => (
              <a key={cat.id} href={`#${cat.id}`} className="card flex flex-col gap-4 bg-white text-left group">
                <div className="w-10 h-10 bg-brand-purple/10 rounded-full flex items-center justify-center text-brand-purple">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect width="18" height="18" x="3" y="3" rx="2" ry="2"/>
                    <line x1="3" x2="21" y1="9" y2="9"/>
                    <line x1="9" x2="9" y1="21" y2="9"/>
                  </svg>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-heading font-bold text-[16px] text-heading-primary uppercase">{cat.name}</span>
                  <p className="text-[14px]">{cat.description}</p>
                </div>
                <div className="mt-auto flex justify-end text-brand-purple">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1" aria-hidden="true">
                    <line x1="5" x2="19" y1="12" y2="12"/>
                    <polyline points="12 5 19 12 12 19"/>
                  </svg>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5. All Generators directory */}
      <section id="all-generators" className="w-full py-[40px] bg-white flex justify-center scroll-mt-[60px]">
        <div className="w-full max-w-[1200px] px-5 flex flex-col gap-10">
          <div className="flex flex-col gap-2">
            <h2 className="text-[26px] md:text-[32px] font-heading font-bold text-heading-primary">{t.allGenerators.title}</h2>
            <p className="text-[14px]">{t.allGenerators.subtitle}</p>
          </div>

          <div className="flex flex-col gap-4">
            <div className="relative w-full max-w-[480px]">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-card-border">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="11" cy="11" r="8"/>
                  <line x1="21" x2="16.65" y1="21" y2="16.65"/>
                </svg>
              </span>
              <input
                type="text"
                placeholder={t.allGenerators.searchPlaceholder}
                aria-label="Search generators"
                className="w-full h-[40px] pl-11 pr-4 border border-card-border rounded-[4px] focus:border-brand-purple outline-none"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            {searchQuery && (
              <p className="text-[12px] italic">{t.allGenerators.matchCount(totalMatches)}</p>
            )}
          </div>

          {totalMatches === 0 ? (
            <div className="py-10 flex flex-col items-center gap-4 text-center">
              <p className="text-[16px]">{t.allGenerators.emptyState}</p>
              <button onClick={() => setSearchQuery('')} className="btn-ghost">{t.allGenerators.clearSearch}</button>
              <a href="/s/ai_site_builder" className="text-brand-purple underline decoration-dotted">Can't find it? Start with our AI builder.</a>
            </div>
          ) : (
            <div className="flex flex-col gap-12">
              {t.browseByCategory.categories.map((cat) => {
                const items = filteredData[cat.id] || [];
                if (items.length === 0) return null;

                const isExpanded = !!searchQuery || !!expandedSections[cat.id];
                const showToggle = jsEnabled && !searchQuery && items.length > 6;

                return (
                  <div key={cat.id} id={cat.id} className="flex flex-col gap-6 scroll-mt-[100px]">
                    <div className="flex flex-col gap-1">
                      <h3 className="text-[20px] font-heading font-bold text-heading-primary uppercase">{cat.name}</h3>
                      <p className="text-[14px]">{cat.description}</p>
                    </div>
                    <div className={`directory-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ${!isExpanded ? 'is-collapsed' : ''}`}>
                      {items.map((gen, idx) => (
                        <a key={idx} href={`/generators/${slugify(gen.name)}`} className="directory-item card flex flex-col gap-3 group">
                          <div className="w-8 h-8 opacity-20 mb-1" aria-hidden="true">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                              <line x1="3" y1="9" x2="21" y2="9"/>
                            </svg>
                          </div>
                          <span className="font-heading font-bold text-[15px] text-heading-primary uppercase group-hover:text-brand-purple transition-colors">{gen.name}</span>
                          <p className="text-[13px]">{gen.description}</p>
                        </a>
                      ))}
                    </div>
                    {showToggle && (
                      <button
                        onClick={() => toggleSection(cat.id)}
                        aria-expanded={isExpanded}
                        aria-controls={`${cat.id}-grid`}
                        className="btn-ghost self-center border-divider text-body px-8 h-[36px]"
                      >
                        {isExpanded ? "Show less" : t.allGenerators.showAll(items.length)}
                      </button>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Section 6. How It Works */}
      <section className="w-full py-[60px] bg-light-bg flex justify-center">
        <div className="w-full max-w-[1200px] px-5 flex flex-col gap-10 items-center">
          <h2 className="text-[26px] md:text-[32px] font-heading font-bold text-heading-primary">{t.howItWorks.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full">
            {t.howItWorks.steps.map((step, idx) => (
              <div key={idx} className="flex flex-col items-center md:items-start text-center md:text-left gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-purple flex items-center justify-center text-white font-heading font-bold text-[20px]">
                  {idx + 1}
                </div>
                <div className="flex flex-col gap-2">
                  <span className="font-heading font-bold text-[16px] text-heading-primary uppercase">{step.title}</span>
                  <p className="text-[14px]">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7. Why Strikingly */}
      <section className="w-full py-[60px] bg-white flex justify-center">
        <div className="w-full max-w-[1200px] px-5 flex flex-col gap-10 items-center">
          <h2 className="text-[26px] md:text-[32px] font-heading font-bold text-heading-primary">{t.whyStrikingly.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full">
            {t.whyStrikingly.features.map((feature, idx) => (
              <div key={idx} className="flex flex-col items-center md:items-start text-center md:text-left gap-4">
                <div className="text-brand-purple" aria-hidden="true">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    {idx === 0 && <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>}
                    {idx === 1 && <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>}
                    {idx === 2 && <circle cx="12" cy="12" r="10"/>}
                  </svg>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="font-heading font-bold text-[16px] text-heading-primary uppercase">{feature.title}</span>
                  <p className="text-[14px]">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 8. FAQ */}
      <section className="w-full py-[60px] bg-light-bg flex justify-center">
        <div className="w-full max-w-[800px] px-5 flex flex-col gap-10 items-center w-full">
          <h2 className="text-[26px] md:text-[32px] font-heading font-bold text-heading-primary">{t.faq.title}</h2>
          <div className="flex flex-col w-full border-t border-divider">
            {t.faq.questions.map((faq, idx) => (
              <div key={idx} className="border-b border-divider">
                <button
                  onClick={() => toggleFaq(idx)}
                  aria-expanded={openFaqs[idx]}
                  aria-controls={`faq-answer-${idx}`}
                  className="w-full py-5 flex items-center justify-between text-left hover:text-brand-purple transition-colors group"
                >
                  <span className="font-heading font-bold text-[16px] text-heading-primary uppercase group-hover:text-brand-purple">{faq.q}</span>
                  <span className={`text-brand-purple transition-transform duration-300 ${openFaqs[idx] ? 'rotate-180' : ''}`}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 9 12 15 18 9"/>
                    </svg>
                  </span>
                </button>
                <div
                  id={`faq-answer-${idx}`}
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${openFaqs[idx] ? 'max-h-96 opacity-100 pb-5' : 'max-h-0 opacity-0'}`}
                >
                  <p className="text-[14px] leading-relaxed text-body">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 9. Closing CTA */}
      <section className="w-full py-[80px] bg-white flex justify-center">
        <div className="w-full max-w-[1200px] px-5 flex flex-col items-center text-center gap-6">
          <h2 className="text-[32px] md:text-[40px] font-heading font-bold text-heading-primary">{t.closingCta.title}</h2>
          <p className="text-[16px] max-w-[600px]">{t.closingCta.subtitle}</p>
          <a href="/s/ai_site_builder" className="btn-primary h-[50px] px-12">
            {t.closingCta.cta}
          </a>
        </div>
      </section>

      {/* Section 10. Footer */}
      <footer className="w-full py-[60px] bg-white border-t border-divider flex justify-center">
        <div className="w-full max-w-[1200px] px-5 flex flex-col gap-10">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10">
            <div className="col-span-2 lg:col-span-1 flex flex-col gap-4">
              <a href="/" className="flex items-center gap-2">
                <span className="font-heading text-[20px] text-brand-purple lowercase">strikingly</span>
              </a>
              <p className="text-[12px] opacity-60">Build your site in minutes.</p>
            </div>
            {t.footer.links.map((col, idx) => (
              <div key={idx} className="flex flex-col gap-4">
                <span className="font-heading font-bold text-[14px] text-heading-primary uppercase">{col.title}</span>
                <ul className="flex flex-col gap-2">
                  {col.items.map((link, lIdx) => (
                    <li key={lIdx}>
                      <a href={link.href} className="text-[13px] hover:text-brand-purple transition-colors">{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="pt-10 border-t border-divider flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[12px] opacity-60">{t.footer.copyright}</p>
            <div className="flex gap-6">
              <span className="text-[12px] opacity-60 hover:text-brand-purple cursor-pointer">Locale: English</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default GeneratorsHub;
