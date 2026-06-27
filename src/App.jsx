import React, { useState, useEffect, useMemo } from 'react';
import Layout from './Layout';
import { strings } from './strings';
import { Zap, Smartphone, CreditCard, ChevronDown, Search, ArrowRight, Check } from 'lucide-react';

const t = strings.en;

const Breadcrumb = () => (
  <nav aria-label="Breadcrumb" className="mx-auto max-w-[1200px] px-5 sm:px-10 py-5">
    <ol className="flex items-center gap-2 text-xs text-body-text">
      <li>
        <a href="/" className="hover:text-brand-purple">Strikingly</a>
      </li>
      <li className="text-body-text/50">{'>'}</li>
      <li className="font-medium text-heading-text">AI Generators</li>
    </ol>
    <script type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Strikingly",
            "item": "https://www.strikingly.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "AI Generators",
            "item": "https://www.strikingly.com/generators"
          }
        ]
      })}
    </script>
  </nav>
);

const Hero = () => (
  <section className="mx-auto max-w-[1200px] px-5 sm:px-10 py-[40px] md:py-[80px]">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
      <div className="order-2 lg:order-1">
        <h1 className="text-[28px] md:text-[40px] lg:text-[48px] leading-tight mb-5">
          <span className="text-h1-line1 block">{t.hero.title1}</span>
          <span className="ai-gradient-text block">{t.hero.title2}</span>
        </h1>
        <p className="text-lg md:text-xl text-body-text mb-10 max-w-[500px]">
          {t.hero.subheadline}
        </p>
        <div className="flex flex-col sm:flex-row gap-2.5">
          <a
            href="/s/ai_site_builder"
            className="btn-ai-gradient h-[44px] px-[20px] rounded-sm flex items-center justify-center font-heading text-[14px] font-bold uppercase tracking-wider shadow-lg shadow-ai-pink/20"
          >
            {t.hero.primaryCTA}
          </a>
          <a
            href="#all-generators"
            className="border border-brand-purple text-brand-purple hover:bg-brand-purple/5 transition-colors h-[44px] px-[20px] rounded-sm flex items-center justify-center font-heading text-[14px] font-bold uppercase tracking-wider"
          >
            {t.hero.secondaryCTA}
          </a>
        </div>
      </div>
      <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
        <svg
          width="500"
          height="350"
          viewBox="0 0 500 350"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="max-w-full h-auto text-brand-purple/20"
          aria-hidden="true"
        >
          <rect x="20" y="20" width="460" height="310" rx="4" stroke="currentColor" strokeWidth="2" strokeDasharray="10 10" />
          <rect x="40" y="40" width="120" height="20" rx="2" fill="currentColor" opacity="0.4" />
          <rect x="40" y="80" width="200" height="40" rx="2" fill="currentColor" opacity="0.6" />
          <rect x="40" y="140" width="420" height="20" rx="2" fill="currentColor" opacity="0.3" />
          <rect x="40" y="170" width="420" height="20" rx="2" fill="currentColor" opacity="0.3" />
          <rect x="40" y="220" width="100" height="100" rx="2" fill="currentColor" opacity="0.5" />
          <rect x="160" y="220" width="100" height="100" rx="2" fill="currentColor" opacity="0.5" />
          <rect x="280" y="220" width="100" height="100" rx="2" fill="currentColor" opacity="0.5" />
        </svg>
      </div>
    </div>
  </section>
);

const IconButton = ({ name }) => {
  switch (name) {
    case 'zap': return <Zap className="w-5 h-5 text-brand-purple" />;
    case 'smartphone': return <Smartphone className="w-5 h-5 text-brand-purple" />;
    case 'credit-card': return <CreditCard className="w-5 h-5 text-brand-purple" />;
    default: return null;
  }
};

const FeaturedGenerators = () => (
  <section className="bg-light-bg py-[60px]">
    <div className="mx-auto max-w-[1200px] px-5 sm:px-10">
      <h2 className="text-[26px] md:text-[32px] text-center mb-2.5">{t.featured.title}</h2>
      <p className="text-center text-body-text mb-10">{t.featured.subtitle}</p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {t.featured.items.map((item, idx) => (
          <a key={idx} href={`/generators/${item.slug}`} className="card group flex flex-col justify-between h-full">
            <div>
              <span className="inline-block text-[11px] font-heading font-bold uppercase tracking-wider text-brand-purple border border-brand-purple rounded-[3px] px-1.5 py-0.5 mb-2.5">
                {item.category}
              </span>
              <h4 className="text-h1-line1 font-heading text-[16px] mb-2">{item.name}</h4>
              <p className="text-sm text-body-text line-clamp-1">{item.description}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  </section>
);

const BrowseByCategory = () => (
  <section className="py-[100px] mx-auto max-w-[1200px] px-5 sm:px-10">
    <h2 className="text-[26px] md:text-[32px] text-center mb-10">{t.browseByCategory.title}</h2>
    
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {t.browseByCategory.categories.map((cat, idx) => (
        <a key={idx} href={`#${cat.slug}`} className="card text-center flex flex-col items-center justify-center group h-full">
          <div className="w-12 h-12 rounded-full bg-brand-purple/5 flex items-center justify-center mb-5 group-hover:bg-brand-purple/10 transition-colors">
            <ArrowRight className="w-5 h-5 text-brand-purple translate-x-[-2px] group-hover:translate-x-[2px] transition-transform" />
          </div>
          <h4 className="text-h1-line1 font-heading text-[16px] mb-2.5">{cat.name}</h4>
          <p className="text-sm text-body-text mb-5 max-w-[240px]">{cat.description}</p>
          <div className="text-brand-purple flex items-center gap-1.5 text-xs font-heading font-bold tracking-wider uppercase">
            Browse All <ArrowRight className="w-3 h-3" />
          </div>
        </a>
      ))}
    </div>
  </section>
);

const FAQItem = ({ question, answer, isOpen, onClick }) => (
  <div className="border border-subtle-divider rounded-sm mb-2.5 overflow-hidden">
    <button
      className="w-full flex items-center justify-between p-5 text-left bg-white hover:bg-light-bg transition-colors"
      onClick={onClick}
      aria-expanded={isOpen}
    >
      <span className="font-heading text-sm font-bold text-heading-text uppercase tracking-wider">{question}</span>
      <ChevronDown className={`w-5 h-5 text-brand-purple transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
    </button>
    <div 
      className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}
    >
      <div className="p-5 pt-0 text-sm text-body-text leading-relaxed">
        {answer}
      </div>
    </div>
  </div>
);

const DirectoryItem = ({ item }) => (
  <a href={`/generators/${item.slug}`} className="card group flex flex-col h-full">
    <h4 className="text-h1-line1 font-heading text-[15px] mb-1.5">{item.name}</h4>
    <p className="text-sm text-body-text mb-3 line-clamp-1">{item.description}</p>
    <div className="mt-auto pt-3 border-t border-subtle-divider flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity">
       <span className="text-[10px] font-heading font-bold text-brand-purple uppercase tracking-widest">Select generator</span>
       <ArrowRight className="w-3 h-3 text-brand-purple" />
    </div>
  </a>
);

const CategorySection = ({ category, items, isExpanded, onToggle, searchQuery }) => {
  const filteredItems = useMemo(() => {
    if (!searchQuery) return items;
    const q = searchQuery.toLowerCase();
    return items.filter(i => 
      i.name.toLowerCase().includes(q) || 
      i.description.toLowerCase().includes(q)
    );
  }, [items, searchQuery]);

  if (filteredItems.length === 0) return null;

  const displayItems = isExpanded ? filteredItems : filteredItems.slice(0, 6);
  const showToggleButton = filteredItems.length > 6;

  return (
    <div id={category.id} className="pt-20 first:pt-0 scroll-mt-20">
      <div className="mb-8 border-b border-subtle-divider pb-5">
        <h3 className="text-xl text-heading-text mb-2 tracking-wide font-heading">{category.title}</h3>
        <p className="text-sm text-body-text">{category.description}</p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {displayItems.map((item, idx) => (
          <DirectoryItem key={idx} item={item} />
        ))}
      </div>

      {showToggleButton && !searchQuery && (
        <div className="mt-10 text-center">
          <button 
            onClick={onToggle}
            className="text-brand-purple font-heading text-[12px] font-bold uppercase tracking-widest hover:underline flex items-center gap-1.5 mx-auto"
            aria-expanded={isExpanded}
          >
            {isExpanded ? 'Show less' : `Show all ${items.length} ${category.title} generators`}
            <ChevronDown className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
          </button>
        </div>
      )}
    </div>
  );
};

const AllGenerators = () => {
  const [search, setSearch] = useState('');
  const [expandedSections, setExpandedSections] = useState({});
  const [isJsEnabled, setIsJsEnabled] = useState(false);

  useEffect(() => {
    setIsJsEnabled(true);
  }, []);

  const toggleSection = (id) => {
    setExpandedSections(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const sectionsData = Object.entries(t.allGenerators.sections).map(([id, section]) => ({
    id,
    ...section
  }));

  const totalMatches = useMemo(() => {
    if (!search) return 0;
    const q = search.toLowerCase();
    let count = 0;
    sectionsData.forEach(section => {
      section.items.forEach(item => {
        if (item.name.toLowerCase().includes(q) || item.description.toLowerCase().includes(q)) {
          count++;
        }
      });
    });
    return count;
  }, [search, sectionsData]);

  const hasMatches = totalMatches > 0 || !search;

  return (
    <section id="all-generators" className="py-[80px] border-t border-subtle-divider scroll-mt-10">
      <div className="mx-auto max-w-[1000px] px-5 sm:px-10">
        <h2 className="text-[26px] md:text-[32px] text-center mb-2.5 tracking-tight font-heading">{t.allGenerators.title}</h2>
        <p className="text-center text-body-text mb-12 max-w-[600px] mx-auto">{t.allGenerators.subtitle}</p>

        <div className="max-w-[480px] mx-auto mb-20">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-body-text" />
            <input
              type="text"
              placeholder={t.allGenerators.searchPlaceholder}
              aria-label={t.allGenerators.searchLabel}
              className="w-full h-[48px] pl-11 pr-5 border border-card-border rounded-sm focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple transition-all"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          {search && (
            <div className="mt-3 text-sm text-body-text flex justify-between items-center">
              <span>{totalMatches} {t.allGenerators.matchText}</span>
              <button 
                onClick={() => setSearch('')}
                className="text-brand-purple hover:underline text-xs uppercase font-bold tracking-widest"
              >
                {t.allGenerators.emptyState.clearButton}
              </button>
            </div>
          )}
        </div>

        {!hasMatches ? (
          <div className="text-center py-20 bg-light-bg rounded-sm border border-subtle-divider border-dashed">
            <p className="text-body-text mb-2">{t.allGenerators.emptyState.text}</p>
            <a href="/s/ai_site_builder" className="text-brand-purple font-bold hover:underline">
              {t.allGenerators.emptyState.linkText}
            </a>
          </div>
        ) : (
          <div className="space-y-20">
            {sectionsData.map((section) => (
              <CategorySection 
                key={section.id}
                category={section}
                items={section.items}
                searchQuery={search}
                isExpanded={!isJsEnabled || !!search || !!expandedSections[section.id]}
                onToggle={() => toggleSection(section.id)}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

function App() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <Layout>
      <Breadcrumb />
      <Hero />
      
      <FeaturedGenerators />
      
      <BrowseByCategory />

      <AllGenerators />

      <section className="bg-light-bg py-[80px]">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-10">
          <h2 className="text-[26px] md:text-[32px] text-center mb-16">{t.howItWorks.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-20">
            {t.howItWorks.steps.map((step, idx) => (
              <div key={idx} className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full ai-gradient-bg flex items-center justify-center text-white font-heading font-bold text-lg mb-6 shadow-md">
                  {step.number}
                </div>
                <h4 className="text-h1-line1 font-heading text-[16px] mb-4 tracking-wider">{step.title}</h4>
                <p className="text-sm text-body-text leading-relaxed">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-[80px]">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-10">
          <h2 className="text-[26px] md:text-[32px] text-center mb-16">{t.whyStrikingly.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-20">
            {t.whyStrikingly.items.map((item, idx) => (
              <div key={idx} className="flex flex-col items-center text-center">
                <div className="mb-6">
                   <IconButton name={item.icon} />
                </div>
                <h4 className="text-h1-line1 font-heading text-[16px] mb-4 tracking-wider">{item.title}</h4>
                <p className="text-sm text-body-text leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-[80px] bg-white border-t border-subtle-divider">
        <div className="mx-auto max-w-[800px] px-5 sm:px-10">
          <h2 className="text-[26px] md:text-[32px] text-center mb-16">{t.faq.title}</h2>
          <div className="space-y-4">
            {t.faq.questions.map((faq, idx) => (
              <FAQItem 
                key={idx}
                question={faq.q}
                answer={faq.a}
                isOpen={openFaq === idx}
                onClick={() => setOpenFaq(idx === openFaq ? -1 : idx)}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-[100px] bg-white text-center border-t border-subtle-divider">
        <div className="mx-auto max-w-[600px] px-5 sm:px-10">
          <h2 className="text-[32px] md:text-[40px] mb-4 font-heading text-h1-line1">{t.closingCTA.title}</h2>
          <p className="text-body-text mb-10 text-lg">{t.closingCTA.subtitle}</p>
          <a
            href="/s/ai_site_builder"
            className="btn-ai-gradient h-[44px] px-10 rounded-sm inline-flex items-center justify-center font-heading text-[14px] font-bold uppercase tracking-widest shadow-xl shadow-ai-pink/20"
          >
            {t.closingCTA.button}
          </a>
        </div>
      </section>
    </Layout>
  )
}

export default App
