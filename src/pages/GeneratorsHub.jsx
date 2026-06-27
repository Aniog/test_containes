import React, { useState, useEffect, useMemo, useRef } from 'react';
import { Search, ChevronRight, ChevronDown, ChevronUp, ArrowRight, ShieldCheck, Zap, Smartphone, Plus } from 'lucide-react';
import { strings, featuredGenerators, allGeneratorsData } from '../constants/strings';
import { cn } from '../lib/utils';

const STRINGS = strings.en;

const TopBar = () => (
  <header className="sticky top-0 z-50 w-full bg-white border-b border-subtle-divider">
    <div className="max-w-[1200px] mx-auto px-5 h-[60px] flex items-center">
      <div className="flex items-center gap-1">
        <span className="text-[20px] font-heading font-bold uppercase tracking-tight text-hero-gray">
          {STRINGS.common.brandName}
        </span>
        <span className="text-[20px] font-heading font-bold uppercase tracking-tight ai-gradient-text">
          {STRINGS.common.brandAi}
        </span>
      </div>
    </div>
  </header>
);

const Breadcrumb = () => (
  <nav aria-label="Breadcrumb" className="max-w-[1200px] mx-auto px-5 py-5">
    <ol className="flex items-center gap-2 text-[14px] text-body-gray">
      <li>
        <a href="/" className="hover:text-brand-purple transition-colors font-body">{STRINGS.common.breadcrumbBase}</a>
      </li>
      <li className="text-brand-purple font-body" aria-hidden="true">&gt;</li>
      <li className="font-medium text-[body-gray] font-body">{STRINGS.common.breadcrumbCurrent}</li>
    </ol>
  </nav>
);

const Hero = () => (
  <section className="max-w-[1200px] mx-auto px-5 py-[60px] md:py-[80px] grid md:grid-cols-2 gap-10 items-center overflow-hidden">
    <div className="flex flex-col gap-[20px]">
      <h1 className="text-[32px] md:text-[48px] leading-[1.2] font-heading font-bold uppercase">
        <span className="block text-hero-gray">{STRINGS.hero.h1Line1}</span>
        <span className="block ai-gradient-text">{STRINGS.hero.h1Line2}</span>
      </h1>
      <p className="text-[14px] leading-[1.5] text-body-gray max-w-[500px] font-body">
        {STRINGS.hero.subheadline}
      </p>
      <div className="flex flex-col sm:flex-row gap-[10px]">
        <a 
          href="/s/ai_site_builder" 
          className="h-[44px] px-[25px] flex items-center justify-center rounded-[4px] ai-gradient-bg text-white font-heading font-bold text-[14px] uppercase tracking-wide hover:opacity-90 transition-opacity"
        >
          {STRINGS.common.ctaStartBuilding}
        </a>
        <a 
          href="#all-generators" 
          className="h-[44px] px-[25px] flex items-center justify-center rounded-[4px] border border-brand-purple text-brand-purple font-heading font-bold text-[14px] uppercase tracking-wide hover:bg-bg-light transition-colors"
        >
          {STRINGS.common.ctaBrowse}
        </a>
      </div>
    </div>
    <div className="relative w-full h-full flex justify-center items-center">
      <svg 
        width="500" 
        height="350" 
        viewBox="0 0 500 350" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="max-w-full h-auto"
        aria-hidden="true"
      >
        <rect x="20" y="20" width="460" height="310" rx="10" stroke="#8159BB" strokeWidth="2" strokeDasharray="5 5" />
        <rect x="50" y="50" width="400" height="20" rx="4" fill="#8159BB" fillOpacity="0.1" />
        <rect x="50" y="80" width="280" height="150" rx="4" fill="#8159BB" fillOpacity="0.1" />
        <rect x="350" y="80" width="100" height="60" rx="4" fill="#8159BB" fillOpacity="0.1" />
        <rect x="350" y="150" width="100" height="60" rx="4" fill="#8159BB" fillOpacity="0.1" />
        <rect x="50" y="250" width="400" height="60" rx="4" fill="#8159BB" fillOpacity="0.1" />
      </svg>
    </div>
  </section>
);

const FeatureCard = ({ name, desc, category, slug, showThumbnail, catId }) => {
  const getThumbnail = (id) => {
    switch (id) {
      case 'websites': return <Zap className="w-6 h-6" />;
      case 'landing-pages': return <ArrowRight className="w-6 h-6" />;
      case 'portfolios': return <Plus className="w-6 h-6" />;
      case 'blogs': return <ChevronRight className="w-6 h-6" />;
      case 'stores': return <Smartphone className="w-6 h-6" />;
      case 'link-in-bio': return <ChevronDown className="w-6 h-6" />;
      default: return <Zap className="w-6 h-6" />;
    }
  };

  return (
    <a 
      href={`/generators/${slug}`}
      className="bg-white border border-card-border rounded-[3px] p-[20px] group hover:shadow-lg hover:border-brand-purple transition-all flex flex-col gap-[15px] h-full"
    >
      {showThumbnail && (
        <div className="w-[40px] h-[40px] rounded-full bg-bg-light flex items-center justify-center text-brand-purple mb-2 group-hover:bg-brand-purple/10 transition-colors">
          {getThumbnail(catId)}
        </div>
      )}
      <div className="flex justify-between items-start gap-2">
        <h3 className="font-heading font-bold text-[16px] text-heading-gray group-hover:text-brand-purple transition-colors leading-tight">{name}</h3>
        {category && (
          <span className="text-[10px] font-heading font-bold border border-brand-purple text-brand-purple px-[6px] py-[2px] rounded-[3px] whitespace-nowrap uppercase">
            {category}
          </span>
        )}
      </div>
      <p className="text-[13px] text-body-gray line-clamp-2 font-body">{desc}</p>
    </a>
  );
};

const FeaturedGenerators = () => (
  <section className="bg-bg-light py-[80px]">
    <div className="max-w-[1200px] mx-auto px-5">
      <div className="mb-[40px]">
        <h2 className="text-[26px] md:text-[32px] mb-[10px]">{STRINGS.featured.title}</h2>
        <p className="text-body-gray font-body">{STRINGS.featured.subtitle}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px]">
        {featuredGenerators.map((gen, idx) => (
          <FeatureCard key={idx} {...gen} />
        ))}
      </div>
    </div>
  </section>
);

const CategoryCard = ({ id, name, desc, slug }) => (
  <a 
    href={`/generators#${slug}`}
    className="bg-white border border-card-border rounded-[4px] p-[30px] flex flex-col items-center text-center group hover:shadow-lg hover:border-brand-purple transition-all gap-[20px] h-full"
  >
    <div className="w-[60px] h-[60px] rounded-full bg-bg-light flex items-center justify-center group-hover:bg-brand-purple/10 transition-colors">
      {id === 'websites' && <Zap className="text-brand-purple w-[24px] h-[24px]" />}
      {id === 'landing-pages' && <ArrowRight className="text-brand-purple w-[24px] h-[24px]" />}
      {id === 'portfolios' && <Plus className="text-brand-purple w-[24px] h-[24px]" />}
      {id === 'blogs' && <ChevronRight className="text-brand-purple w-[24px] h-[24px]" />}
      {id === 'stores' && <Smartphone className="text-brand-purple w-[24px] h-[24px]" />}
      {id === 'link-in-bio' && <ChevronDown className="text-brand-purple w-[24px] h-[24px]" />}
    </div>
    <div>
      <h3 className="font-heading font-bold text-[18px] text-heading-gray mb-[10px] uppercase">{name}</h3>
      <p className="text-[14px] text-body-gray font-body">{desc}</p>
    </div>
    <div className="mt-auto text-brand-purple">
      <ArrowRight className="w-[20px] h-[20px] group-hover:translate-x-1 transition-transform" />
    </div>
  </a>
);

const BrowseByCategory = () => (
  <section className="py-[80px]">
    <div className="max-w-[1200px] mx-auto px-5">
      <div className="mb-[40px] text-center">
        <h2 className="text-[26px] md:text-[32px] mb-[10px]">{STRINGS.categories.title}</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px]">
        {STRINGS.categories.items.map((cat, idx) => (
          <CategoryCard key={idx} {...cat} />
        ))}
      </div>
    </div>
  </section>
);

const AllGenerators = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isJsEnabled, setIsJsEnabled] = useState(false);
  const [expanded, setExpanded] = useState({});
  const containerRef = useRef(null);

  useEffect(() => {
    setIsJsEnabled(true);
  }, []);

  const toggleCategory = (catId) => {
    setExpanded(prev => ({
      ...prev,
      [catId]: !prev[catId]
    }));
  };

  const categories = STRINGS.categories.items;
  const term = searchTerm.toLowerCase();

  const getFilteredItems = (catId, items) => {
    if (!searchTerm) return items;
    const catInfo = categories.find(c => c.id === catId);
    const categoryMatches = catInfo?.name.toLowerCase().includes(term);
    
    return items.filter(item => 
      item.name.toLowerCase().includes(term) || 
      item.desc.toLowerCase().includes(term) ||
      categoryMatches
    );
  };

  const totalMatches = useMemo(() => {
    if (!searchTerm) return 0;
    let count = 0;
    Object.entries(allGeneratorsData).forEach(([catId, items]) => {
      count += getFilteredItems(catId, items).length;
    });
    return count;
  }, [searchTerm]);

  const hasMatches = useMemo(() => {
    if (!searchTerm) return true;
    return totalMatches > 0;
  }, [searchTerm, totalMatches]);

  return (
    <section id="all-generators" className="py-[80px]" ref={containerRef}>
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="mb-[40px]">
          <h2 className="text-[26px] md:text-[32px] mb-[10px]">{STRINGS.allGenerators.title}</h2>
          <p className="text-body-gray">{STRINGS.allGenerators.subtitle}</p>
        </div>

        <div className="mb-[40px] flex flex-col gap-4">
          <div className="relative max-w-[480px] w-full">
            <label htmlFor="search-generators" className="sr-only">Search generators</label>
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-card-border" aria-hidden="true" />
            </div>
            <input
              type="text"
              id="search-generators"
              className="block w-full pl-10 pr-3 py-3 border border-card-border rounded-[4px] leading-5 bg-white placeholder-body-gray focus:outline-none focus:ring-1 focus:ring-brand-purple focus:border-brand-purple sm:text-sm transition-all"
              placeholder={STRINGS.common.searchPlaceholder}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              aria-label="Search generators"
            />
          </div>
          {searchTerm && (
            <p className="text-[14px] text-body-gray">
              {STRINGS.common.matchCount(totalMatches)}
            </p>
          )}
        </div>

        {searchTerm && !hasMatches ? (
          <div className="text-center py-[60px] border border-dashed border-card-border rounded-[4px]">
            <p className="text-[18px] text-heading-gray mb-4">{STRINGS.common.noResults}</p>
            <button 
              onClick={() => setSearchTerm('')}
              className="text-brand-purple font-medium hover:underline"
            >
              {STRINGS.common.clearSearch}
            </button>
            <div className="mt-4">
              <a href="/s/ai_site_builder" className="text-brand-purple flex items-center justify-center gap-1 hover:underline">
                Start with our AI builder <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-[60px]">
            {Object.entries(allGeneratorsData).map(([catId, items]) => {
              const catInfo = categories.find(c => c.id === catId);
              const filteredItems = getFilteredItems(catId, items);
              const isCategoryVisible = filteredItems.length > 0;
              
              const isExpanded = searchTerm || !isJsEnabled || expanded[catId];
              const visibleCount = isExpanded ? items.length : 6;
              const hasMore = items.length > 6;

              return (
                <div 
                  key={catId} 
                  id={catId} 
                  className={cn("scroll-mt-[100px]", !isCategoryVisible && "hidden")}
                >
                  <div className="mb-[30px]">
                    <h3 className="text-[20px] mb-[5px]">{catInfo?.name}</h3>
                    <p className="text-[14px] text-body-gray">{catInfo?.desc}</p>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px]">
                    {items.map((item, idx) => {
                      const isItemVisible = !searchTerm || filteredItems.some(fi => fi.slug === item.slug);
                      const isCollapsed = !isExpanded && idx >= 6;
                      
                      return (
                        <div key={idx} className={cn((!isItemVisible || isCollapsed) && "hidden")}>
                          <FeatureCard {...item} showThumbnail catId={catId} />
                        </div>
                      );
                    })}
                  </div>
                  {isJsEnabled && !searchTerm && hasMore && (
                    <div className="mt-[30px] flex justify-center">
                      <button
                        onClick={() => toggleCategory(catId)}
                        className="flex items-center gap-2 text-brand-purple font-heading font-bold text-[14px] uppercase tracking-wide border border-brand-purple px-6 py-2 rounded-[4px] hover:bg-bg-light transition-colors"
                        aria-expanded={isExpanded}
                        aria-controls={`category-grid-${catId}`}
                      >
                        {isExpanded ? STRINGS.common.hideAll : STRINGS.common.showAll(items.length, catInfo?.name)}
                        {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
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

const HowItWorks = () => (
  <section className="bg-white py-[80px] border-t border-subtle-divider">
    <div className="max-w-[1200px] mx-auto px-5">
      <div className="mb-[50px] text-center">
        <h2 className="text-[26px] md:text-[32px]">{STRINGS.howItWorks.title}</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[40px]">
        {STRINGS.howItWorks.steps.map((step, idx) => (
          <div key={idx} className="flex flex-col items-center text-center group">
            <div className="w-[50px] h-[50px] rounded-full bg-brand-purple text-white font-heading font-bold text-[20px] flex items-center justify-center mb-[20px] shadow-sm group-hover:scale-110 transition-transform">
              {idx + 1}
            </div>
            <h3 className="text-[18px] mb-[10px]">{step.title}</h3>
            <p className="text-[14px] text-body-gray max-w-[280px]">{step.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const WhyStrikingly = () => (
  <section className="bg-bg-light py-[80px]">
    <div className="max-w-[1200px] mx-auto px-5">
      <div className="mb-[50px] text-center">
        <h2 className="text-[26px] md:text-[32px]">{STRINGS.whyStrikingly.title}</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[40px]">
        {STRINGS.whyStrikingly.features.map((feature, idx) => (
          <div key={idx} className="flex flex-col items-center text-center p-5">
            <div className="w-[60px] h-[60px] flex items-center justify-center mb-[20px] text-brand-purple">
              {idx === 0 && <Zap className="w-[40px] h-[40px]" />}
              {idx === 1 && <Smartphone className="w-[40px] h-[40px]" />}
              {idx === 2 && <ShieldCheck className="w-[40px] h-[40px]" />}
            </div>
            <h3 className="text-[18px] mb-[10px]">{feature.title}</h3>
            <p className="text-[14px] text-body-gray">{feature.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const FAQItem = ({ q, a, isOpen, onToggle, index }) => {
  const contentRef = useRef(null);
  
  return (
    <div className="border-b border-subtle-divider">
      <button
        onClick={onToggle}
        className="w-full py-[20px] flex items-center justify-between text-left group"
        aria-expanded={isOpen}
        aria-controls={`faq-content-${index}`}
        id={`faq-btn-${index}`}
      >
        <span className={cn("text-[16px] md:text-[18px] font-heading font-bold transition-colors uppercase", isOpen ? "text-brand-purple" : "text-heading-gray group-hover:text-brand-purple")}>
          {q}
        </span>
        {isOpen ? <ChevronUp className="text-brand-purple" /> : <ChevronDown className="text-card-border group-hover:text-brand-purple" />}
      </button>
      <div
        id={`faq-content-${index}`}
        aria-labelledby={`faq-btn-${index}`}
        className={cn(
          "overflow-hidden transition-all duration-300 ease-in-out",
          isOpen ? "max-h-[500px] opacity-100 mb-[20px]" : "max-h-0 opacity-0"
        )}
      >
        <div className="text-[14px] text-body-gray leading-relaxed space-y-4">
          <p>{a}</p>
        </div>
      </div>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-[80px]">
      <div className="max-w-[800px] mx-auto px-5">
        <h2 className="text-[26px] md:text-[32px] mb-[40px] text-center">{STRINGS.faq.title}</h2>
        <div className="flex flex-col">
          {STRINGS.faq.items.map((item, idx) => (
            <FAQItem 
              key={idx} 
              {...item} 
              index={idx}
              isOpen={openIndex === idx} 
              onToggle={() => setOpenIndex(openIndex === idx ? null : idx)} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const ClosingCTA = () => (
  <section className="bg-white py-[80px] border-t border-subtle-divider text-center">
    <div className="max-w-[1200px] mx-auto px-5">
      <h2 className="text-[32px] md:text-[40px] mb-[15px] text-hero-gray">{STRINGS.footer.title}</h2>
      <p className="text-body-gray mb-[40px]">{STRINGS.footer.subtitle}</p>
      <a 
        href="/s/ai_site_builder" 
        className="inline-flex h-[44px] px-[35px] items-center justify-center rounded-[4px] ai-gradient-bg text-white font-heading font-bold text-[14px] uppercase tracking-wide hover:opacity-90 transition-opacity"
      >
        {STRINGS.common.ctaStartAiBuilder}
      </a>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-bg-light pt-[80px] pb-[40px] border-t border-subtle-divider">
    <div className="max-w-[1200px] mx-auto px-5">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-[60px]">
        <div className="col-span-2 md:col-span-1">
          <div className="flex items-center gap-1 mb-[20px]">
            <span className="text-[20px] font-heading font-bold uppercase tracking-tight text-hero-gray">
              {STRINGS.common.brandName}
            </span>
            <span className="text-[20px] font-heading font-bold uppercase tracking-tight ai-gradient-text">
              {STRINGS.common.brandAi}
            </span>
          </div>
          <p className="text-[12px] text-body-gray max-w-[200px]">AI-powered website builder. Create your professional site in seconds.</p>
        </div>
        <div>
          <h4 className="font-heading font-bold text-[14px] mb-[20px] text-heading-gray">PRODUCT</h4>
          <ul className="flex flex-col gap-3 text-[14px] text-body-gray">
            <li><a href="/templates" className="hover:text-brand-purple transition-colors">Templates</a></li>
            <li><a href="/pricing" className="hover:text-brand-purple transition-colors">Pricing</a></li>
            <li>Applications</li>
            <li>Features</li>
          </ul>
        </div>
        <div>
          <h4 className="font-heading font-bold text-[14px] mb-[20px] text-heading-gray">COMPANY</h4>
          <ul className="flex flex-col gap-3 text-[14px] text-body-gray">
            <li><a href="/about" className="hover:text-brand-purple transition-colors">About</a></li>
            <li>Careers</li>
            <li><a href="/blog" className="hover:text-brand-purple transition-colors">Blog</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-heading font-bold text-[14px] mb-[20px] text-heading-gray">SUPPORT</h4>
          <ul className="flex flex-col gap-3 text-[14px] text-body-gray">
            <li><a href="/support" className="hover:text-brand-purple transition-colors">Help Center</a></li>
            <li>Forum</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <h4 className="font-heading font-bold text-[14px] mb-[20px] text-heading-gray">LEGAL</h4>
          <ul className="flex flex-col gap-3 text-[14px] text-body-gray">
            <li><a href="/terms" className="hover:text-brand-purple transition-colors">Terms of Service</a></li>
            <li><a href="/privacy" className="hover:text-brand-purple transition-colors">Privacy Policy</a></li>
            <li>Cookie Settings</li>
          </ul>
        </div>
      </div>
      <div className="pt-[40px] border-t border-subtle-divider flex flex-col md:flex-row justify-between items-center gap-4 text-[12px] text-body-gray">
        <p>{STRINGS.footer.copyright}</p>
        <div className="flex gap-10">
          <span>English (US)</span>
        </div>
      </div>
    </div>
  </footer>
);

export default function GeneratorsHub() {
  return (
    <div className="min-h-screen bg-white selection:bg-brand-purple selection:text-white">
      <TopBar />
      <main>
        <Breadcrumb />
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
