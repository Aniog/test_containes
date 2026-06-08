import React, { useState, useMemo, useEffect } from 'react';
import { Search, ChevronDown, ChevronRight, Menu, X, ArrowRight, ShieldCheck, Smartphone, Zap } from 'lucide-react';
import { strings } from './i18n';

const s = strings.en;

const TopBar = () => (
  <header className="bg-white border-b border-[#E2E4E7] sticky top-0 z-50">
    <div className="content-container h-[60px] flex items-center">
      <div className="flex items-center gap-1">
        <span className="font-heading text-[24px] text-[#4B5056] lowercase">{s.nav.brand}</span>
        <span className="font-heading text-[24px] bg-[#8159BB] text-white px-1 ml-1 rounded-[2px]">{s.nav.brandSub}</span>
      </div>
    </div>
  </header>
);

const Breadcrumb = () => (
  <nav aria-label="Breadcrumb" className="content-container py-4">
    <ol className="flex items-center space-x-2 text-[14px]">
      <li>
        <a href="/" className="text-[#636972] hover:text-[#8159BB]">{s.nav.breadcrumb.root}</a>
      </li>
      <li className="text-[#636972]">{'>'}</li>
      <li className="text-[#636972] font-semibold" aria-current="page">{s.nav.breadcrumb.current}</li>
    </ol>
  </nav>
);

const Hero = () => (
  <section className="bg-white py-[60px] md:py-[80px]">
    <div className="content-container grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      <div className="order-2 md:order-1">
        <h1 className="text-[32px] md:text-[48px] leading-[1.1] mb-6">
          <span className="text-[#2E2E2F] block">{s.hero.line1}</span>
          <span className="ai-gradient-text block">{s.hero.line2}</span>
        </h1>
        <p className="text-[#636972] text-[18px] mb-8 max-w-[480px]">
          {s.hero.subheadline}
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="/s/ai_site_builder" className="btn-primary h-[44px] px-8 text-[16px]">
            {s.hero.primaryCTA}
          </a>
          <a href="#all-generators" className="btn-ghost h-[44px] px-8 text-[16px]">
            {s.hero.secondaryCTA}
          </a>
        </div>
      </div>
      <div className="order-1 md:order-2 flex justify-center">
        <svg width="400" height="300" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="w-full max-w-[500px] h-auto text-[#8159BB]">
          <rect x="20" y="20" width="360" height="260" rx="8" stroke="currentColor" strokeWidth="2" strokeDasharray="5 5" />
          <path d="M60 60H160M60 100H340M60 140H340M60 180H280" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <circle cx="320" cy="220" r="30" stroke="currentColor" strokeWidth="2" />
        </svg>
      </div>
    </div>
  </section>
);

const FeaturedGenerators = () => (
  <section className="py-[60px] md:py-[80px] bg-[#F4F6F8]">
    <div className="content-container">
      <div className="mb-10 text-center">
        <h2 className="text-[26px] md:text-[32px] text-[#4B5056] mb-2">{s.featured.title}</h2>
        <p className="text-[#636972]">{s.featured.subtitle}</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {s.featured.data.map((item) => (
          <a key={item.id} href={`/generators/${item.slug}`} className="card block">
            <span className="tag mb-3">{item.category}</span>
            <h3 className="text-[#2E2E2F] text-[18px] mb-2 normal-case">{item.name}</h3>
            <p className="text-[#636972] text-[14px]">{item.description}</p>
          </a>
        ))}
      </div>
    </div>
  </section>
);

const BrowseByCategory = () => (
  <section className="py-[60px] md:py-[80px] bg-white">
    <div className="content-container">
      <div className="mb-10">
        <h2 className="text-[26px] md:text-[32px] text-[#4B5056] mb-2">{s.categories.title}</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {s.categories.data.map((category) => (
          <a key={category.id} href={`#${category.slug}`} className="card flex flex-col items-start gap-4 h-full group">
            <div className="w-12 h-12 rounded-lg bg-[#8159BB]/10 flex items-center justify-center text-[#8159BB]">
              <ChevronRight className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-[#2E2E2F] text-[16px] mb-1">{category.name}</h3>
              <p className="text-[#636972] text-[14px]">{category.description}</p>
            </div>
            <div className="mt-auto pt-4 flex items-center text-[#8159BB] font-heading text-[12px]">
              VIEW ALL <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </div>
          </a>
        ))}
      </div>
    </div>
  </section>
);

const AllGenerators = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedSections, setExpandedSections] = useState({});

  const filteredSections = useMemo(() => {
    const result = {};
    const lowerSearch = searchTerm.toLowerCase();

    Object.entries(s.allGenerators.sections).forEach(([id, section]) => {
      const matchingItems = section.items.filter(item =>
        item.name.toLowerCase().includes(lowerSearch) ||
        item.description.toLowerCase().includes(lowerSearch) ||
        section.title.toLowerCase().includes(lowerSearch)
      );

      if (matchingItems.length > 0) {
        result[id] = { ...section, items: matchingItems };
      }
    });

    return result;
  }, [searchTerm]);

  const totalMatchCount = Object.values(filteredSections).reduce((acc, section) => acc + section.items.length, 0);

  const toggleSection = (id) => {
    setExpandedSections(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section id="all-generators" className="py-[60px] md:py-[80px] bg-[#F4F6F8]">
      <div className="content-container">
        <div className="mb-10">
          <h2 className="text-[26px] md:text-[32px] text-[#4B5056] mb-2">{s.allGenerators.title}</h2>
          <p className="text-[#636972]">{s.allGenerators.subtitle}</p>
        </div>

        <div className="mb-12">
          <div className="relative max-w-[480px]">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#C6C9CD]" />
            <input
              type="text"
              placeholder={s.allGenerators.searchPlaceholder}
              aria-label={s.allGenerators.searchAriaLabel}
              className="w-full pl-10 pr-4 py-3 bg-white border border-[#C6C9CD] rounded-[4px] text-[14px] focus:outline-none focus:border-[#8159BB] focus:ring-1 focus:ring-[#8159BB]"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <p className="mt-4 text-[14px] text-[#636972]">
            {totalMatchCount} {s.allGenerators.matchCount}
          </p>
        </div>

        {totalMatchCount === 0 ? (
          <div className="bg-white border border-[#C6C9CD] rounded-[3px] p-10 text-center">
            <h3 className="text-[20px] mb-4">{s.allGenerators.emptyState.title}</h3>
            <a href="/s/ai_site_builder" className="text-[#8159BB] font-semibold hover:underline">
              {s.allGenerators.emptyState.linkText}
            </a>
            <button
              onClick={() => setSearchTerm('')}
              className="block mx-auto mt-6 text-[14px] font-heading text-[#636972] hover:text-[#8159BB]"
            >
              {s.allGenerators.emptyState.clearSearch}
            </button>
          </div>
        ) : (
          <div className="space-y-[60px]">
            {Object.entries(filteredSections).map(([id, section]) => {
              const itemsToShow = expandedSections[id] ? section.items : section.items.slice(0, 10);
              const hasMore = section.items.length > 10;

              return (
                <div key={id} id={id} className="scroll-mt-20">
                  <div className="mb-6">
                    <h3 className="text-[20px] text-[#4B5056] mb-1">{section.title}</h3>
                    <p className="text-[#636972] text-[14px]">{section.description}</p>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 items-start">
                    {itemsToShow.map((item, idx) => (
                      <a key={`${id}-${idx}`} href={`/generators/${item.slug}`} className="card block">
                        <div className="w-full aspect-[4/3] bg-[#8159BB]/5 mb-4 rounded flex items-center justify-center text-[#8159BB]/20">
                          <Zap className="w-12 h-12" />
                        </div>
                        <h4 className="text-[#2E2E2F] text-[16px] mb-1 normal-case">{item.name}</h4>
                        <p className="text-[#636972] text-[14px]">{item.description}</p>
                      </a>
                    ))}
                  </div>
                  {hasMore && !searchTerm && (
                    <button
                      onClick={() => toggleSection(id)}
                      aria-expanded={expandedSections[id]}
                      aria-controls={`grid-${id}`}
                      className="mt-8 btn-ghost w-full md:w-auto"
                    >
                      {s.allGenerators.showAll.replace('[count]', section.items.length)}
                    </button>
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

const HowItWorks = () => (
  <section className="py-[60px] md:py-[80px] bg-white">
    <div className="content-container">
      <h2 className="text-center text-[26px] md:text-[32px] mb-12">{s.howItWorks.title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {s.howItWorks.steps.map((step) => (
          <div key={step.number} className="text-center">
            <div className="w-10 h-10 bg-[#8159BB] text-white rounded-full flex items-center justify-center mx-auto mb-4 font-heading text-[18px]">
              {step.number}
            </div>
            <h3 className="text-[#2E2E2F] text-[16px] mb-2">{step.title}</h3>
            <p className="text-[#636972] text-[14px]">{step.body}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const WhyStrikingly = () => (
  <section className="py-[60px] md:py-[80px] bg-[#F4F6F8]">
    <div className="content-container">
      <h2 className="text-center text-[26px] md:text-[32px] mb-12">{s.whyStrikingly.title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="text-center">
          <Zap className="w-10 h-10 text-[#8159BB] mx-auto mb-4" />
          <h3 className="text-[#2E2E2F] text-[16px] mb-2">{s.whyStrikingly.cards[0].title}</h3>
          <p className="text-[#636972] text-[14px]">{s.whyStrikingly.cards[0].body}</p>
        </div>
        <div className="text-center">
          <Smartphone className="w-10 h-10 text-[#8159BB] mx-auto mb-4" />
          <h3 className="text-[#2E2E2F] text-[16px] mb-2">{s.whyStrikingly.cards[1].title}</h3>
          <p className="text-[#636972] text-[14px]">{s.whyStrikingly.cards[1].body}</p>
        </div>
        <div className="text-center">
          <ShieldCheck className="w-10 h-10 text-[#8159BB] mx-auto mb-4" />
          <h3 className="text-[#2E2E2F] text-[16px] mb-2">{s.whyStrikingly.cards[2].title}</h3>
          <p className="text-[#636972] text-[14px]">{s.whyStrikingly.cards[2].body}</p>
        </div>
      </div>
    </div>
  </section>
);

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-[60px] md:py-[80px] bg-white">
      <div className="content-container max-w-[800px]">
        <h2 className="text-center text-[26px] md:text-[32px] mb-12">{s.faq.title}</h2>
        <div className="space-y-4">
          {s.faq.questions.map((item, idx) => (
            <div key={idx} className="border border-[#E2E4E7] rounded-[4px] overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
                aria-expanded={openIndex === idx}
                aria-controls={`faq-answer-${idx}`}
                className="w-full flex items-center justify-between p-5 text-left bg-white hover:bg-gray-50 transition-colors"
              >
                <span className="font-heading text-[14px] text-[#4B5056]">{item.q}</span>
                <ChevronDown className={`w-5 h-5 transition-transform ${openIndex === idx ? 'rotate-180' : ''}`} />
              </button>
              <div
                id={`faq-answer-${idx}`}
                className={`transition-all duration-300 ${openIndex === idx ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}
              >
                <div className="p-5 pt-0 text-[#636972] text-[14px] whitespace-pre-line leading-relaxed">
                  {item.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ClosingCTA = () => (
  <section className="py-[80px] md:py-[100px] bg-white text-center">
    <div className="content-container">
      <h2 className="text-[32px] md:text-[40px] mb-4 text-[#2E2E2F]">{s.closingCTA.title}</h2>
      <p className="text-[#636972] text-[18px] mb-10">{s.closingCTA.subtitle}</p>
      <a href="/s/ai_site_builder" className="btn-primary h-[44px] px-10 text-[16px]">
        {s.closingCTA.button}
      </a>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-[#F4F6F8] border-t border-[#E2E4E7] pt-[60px] pb-[40px]">
    <div className="content-container">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
        <div className="md:col-span-1">
          <div className="flex items-center gap-1 mb-6">
            <span className="font-heading text-[20px] text-[#4B5056] lowercase">{s.footer.logo}</span>
          </div>
          <p className="text-[14px]">Build your presence with Strikingly.</p>
        </div>
        {s.footer.columns.map((col) => (
          <div key={col.title}>
            <h4 className="text-[#4B5056] text-[14px] mb-6">{col.title}</h4>
            <ul className="space-y-4">
              {col.links.map((link) => (
                <li key={link.text}>
                  <a href={link.href} className="text-[#636972] hover:text-[#8159BB] text-[14px]">
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-[#E2E4E7] pt-8 flex flex-col md:row items-center justify-between gap-4">
        <p className="text-[12px] text-[#636972]">
          © {new Date().getFullYear()} {s.footer.copyright}. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default function HubPage() {
  return (
    <div className="min-h-screen font-body text-[#636972]">
      <TopBar />
      <Breadcrumb />
      <main>
        <Hero />
        <FeaturedGenerators />
        <BrowseByCategory />
        <AllGenerators />
        <HowItWorks />
        <WhyStrikingly />
        <FAQ />
        <ClosingCTA />
      </main>
      <Footer />
    </div>
  );
}
