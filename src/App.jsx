import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Search, ChevronRight, ChevronDown, ChevronUp, ArrowRight, Menu, Globe, Smartphone, CreditCard, Layout } from 'lucide-react';
import { cn } from './lib/utils';
import { strings, generatorsData, allGeneratorsData } from './lib/data';

const Header = () => (
  <header className="sticky top-0 z-50 bg-white border-b border-divider h-16 flex items-center">
    <div className="container mx-auto px-4 max-w-[1200px] flex justify-between items-center w-full">
      <div className="flex items-center gap-2">
        <span className="text-xl font-[var(--font-heading)] font-bold text-hero-gray uppercase tracking-tight">strikingly <span className="ai-gradient-text font-bold">AI</span></span>
      </div>
    </div>
  </header>
);

const Breadcrumb = () => (
  <nav aria-label="Breadcrumb" className="container mx-auto px-4 max-w-[1200px] py-4">
    <ol className="flex items-center gap-2 text-sm text-body-gray">
      <li>
        <a href="/" className="hover:text-brand-purple">Strikingly</a>
      </li>
      <li className="text-brand-purple select-none font-bold text-xs" aria-hidden="true">&gt;</li>
      <li className="text-body-gray select-none">AI Generators</li>
    </ol>
  </nav>
);

const Hero = () => (
  <section className="container mx-auto px-4 max-w-[1200px] py-12 md:py-20 flex flex-col md:flex-row items-center gap-12 bg-[radial-gradient(circle_at_top_right,rgba(129,89,187,0.05),transparent_70%)]">
    <div className="flex-1 text-center md:text-left">
      <h1 className="text-4xl md:text-5xl lg:text-[48px] font-[var(--font-heading)] font-bold text-hero-gray mb-4 flex flex-col">
        <span>{strings.en.hero.line1}</span>
        <span className="ai-gradient-text">{strings.en.hero.line2}</span>
      </h1>
      <p className="text-body-gray text-lg mb-8 max-w-xl mx-auto md:mx-0">
        {strings.en.hero.subheadline}
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
        <a href="/s/ai_site_builder" className="btn-base btn-large btn-primary px-8 flex items-center justify-center min-w-[240px]">
          {strings.en.hero.primaryCTA}
        </a>
        <a href="#all-generators" className="btn-base btn-large btn-ghost px-8 flex items-center justify-center min-w-[200px]">
          {strings.en.hero.secondaryCTA}
        </a>
      </div>
    </div>
    <div className="flex-1 w-full max-w-[500px]">
      <div className="relative aspect-[4/3] w-full border border-divider rounded-lg shadow-sm bg-white overflow-hidden p-4">
        <svg viewBox="0 0 400 300" className="w-full h-full text-brand-purple/20" aria-hidden="true" width="400" height="300">
          <rect x="20" y="20" width="360" height="260" rx="4" stroke="currentColor" fill="none" strokeWidth="2"/>
          <rect x="40" y="40" width="100" height="20" rx="2" fill="currentColor"/>
          <rect x="160" y="40" width="200" height="10" rx="1" fill="currentColor" opacity="0.5"/>
          <rect x="160" y="55" width="150" height="10" rx="1" fill="currentColor" opacity="0.3"/>
          <rect x="40" y="100" width="320" height="150" rx="2" stroke="currentColor" fill="none" strokeWidth="1" strokeDasharray="4 4"/>
          <circle cx="200" cy="175" r="30" fill="currentColor" opacity="0.1"/>
        </svg>
      </div>
    </div>
  </section>
);

const FeaturedGenerators = () => (
  <section className="container mx-auto px-4 max-w-[1200px] py-16">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-[var(--font-heading)] font-bold mb-2">{strings.en.featured.title}</h2>
      <p className="text-body-gray">{strings.en.featured.subtitle}</p>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {generatorsData.map((item) => (
        <a href={`/generators/${item.slug}`} key={item.id} className="card group">
          <div className="flex flex-col h-full">
            <span className="tag w-fit mb-4 group-hover:bg-brand-purple group-hover:text-white transition-colors">{item.category}</span>
            <h3 className="text-lg font-bold mb-2 text-heading-gray uppercase">{item.name}</h3>
            <p className="text-sm text-body-gray">{item.description}</p>
          </div>
        </a>
      ))}
    </div>
  </section>
);

const CategoryDirectory = () => (
  <section className="container mx-auto px-4 max-w-[1200px] py-16">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-[var(--font-heading)] font-bold mb-4">{strings.en.categories.title}</h2>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {strings.en.categories.items.map((cat) => (
        <a href={`#${cat.slug}`} key={cat.id} className="card flex flex-col items-center text-center group">
          <div className="w-12 h-12 bg-light-bg rounded-lg flex items-center justify-center mb-4 group-hover:text-brand-purple transition-colors">
            <Layout className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold mb-2 text-heading-gray uppercase">{cat.name}</h3>
          <p className="text-sm text-body-gray mb-4">{cat.description}</p>
          <div className="mt-auto text-brand-purple">
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </div>
        </a>
      ))}
    </div>
  </section>
);

const AllGenerators = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedCats, setExpandedCats] = useState({});
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const filteredData = useMemo(() => {
    const term = searchTerm.toLowerCase();
    const result = {};
    let total = 0;

    Object.keys(allGeneratorsData).forEach(cat => {
      const matches = allGeneratorsData[cat].filter(gen => 
        gen.name.toLowerCase().includes(term) || 
        gen.description.toLowerCase().includes(term) ||
        cat.replace('-', ' ').toLowerCase().includes(term)
      );
      if (matches.length > 0) {
        result[cat] = matches;
        total += matches.length;
      }
    });

    return { categories: result, total };
  }, [searchTerm]);

  const toggleExpand = (cat) => {
    setExpandedCats(prev => ({ ...prev, [cat]: !prev[cat] }));
  };

  const isExpanded = (cat) => expandedCats[cat] || searchTerm.length > 0 || !isMounted;

  return (
    <section id="all-generators" className="container mx-auto px-4 max-w-[1200px] py-16 scroll-mt-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-[var(--font-heading)] font-bold mb-2 text-heading-gray uppercase">{strings.en.allGenerators.title}</h2>
        <p className="text-body-gray">{strings.en.allGenerators.subtitle}</p>
      </div>

      <div className="max-w-[480px] mx-auto mb-12 relative">
        <label htmlFor="search-input" className="sr-only">Search generators</label>
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-body-gray pointer-events-none">
          <Search className="w-5 h-5" />
        </div>
        <input
          id="search-input"
          type="text"
          placeholder={strings.en.allGenerators.searchPlaceholder}
          aria-label="Search generators"
          className="w-full h-12 pl-12 pr-4 border border-card-border rounded-full focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple transition-all bg-white"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        {searchTerm && (
          <div className="absolute top-full left-0 right-0 mt-2 text-sm text-body-gray text-center font-medium">
             {strings.en.allGenerators.matchCount.replace('{count}', filteredData.total)}
          </div>
        )}
      </div>

      {filteredData.total === 0 && (
        <div className="text-center py-16">
          <p className="text-lg font-medium text-heading-gray mb-4">{strings.en.allGenerators.emptyState.text}</p>
          <div className="flex flex-col items-center gap-4">
             <button 
              onClick={() => setSearchTerm('')} 
              className="btn-base btn-ghost px-6 h-10 hover:bg-brand-purple/5"
            >
                {strings.en.allGenerators.emptyState.clearSearch}
             </button>
             <a href="/s/ai_site_builder" className="text-brand-purple font-medium hover:underline text-sm uppercase tracking-wide">
               Can&apos;t find it? Start with our AI builder.
            </a>
          </div>
        </div>
      )}

      {strings.en.categories.items.map((cat) => {
        const matches = filteredData.categories[cat.slug];
        if (!matches) return null;

        const limit = 6;
        const showAll = isExpanded(cat.slug);
        const visibleGenerators = showAll ? matches : matches.slice(0, limit);

        return (
          <div key={cat.id} id={cat.slug} className="mb-16 scroll-mt-20">
            <h3 className="text-2xl font-[var(--font-heading)] font-bold mb-2 text-heading-gray uppercase">{cat.name}</h3>
            <p className="text-body-gray mb-8">{cat.description}</p>
            
            <div 
              id={`grid-${cat.slug}`}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8"
            >
              {visibleGenerators.map((gen, idx) => (
                <a href={`/generators/${gen.slug}`} key={idx} className="card group flex flex-col items-start text-left hover:border-brand-purple transition-all duration-200">
                  <div className="w-10 h-10 bg-light-bg rounded flex items-center justify-center mb-4 text-brand-purple/40 group-hover:text-brand-purple transition-colors">
                     <Layout className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-lg mb-2 text-heading-gray">{gen.name}</h4>
                  <p className="text-sm text-body-gray leading-relaxed">{gen.description}</p>
                </a>
              ))}
            </div>

            {matches.length > limit && !searchTerm && isMounted && (
              <button
                onClick={() => toggleExpand(cat.slug)}
                aria-expanded={showAll}
                aria-controls={`grid-${cat.slug}`}
                className="flex items-center gap-2 text-brand-purple font-[var(--font-heading)] font-bold uppercase text-sm hover:underline tracking-wider group cursor-pointer"
              >
                {showAll ? (
                  <>Show Less <ChevronUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" /></>
                ) : (
                  <>{strings.en.allGenerators.showAll.replace('{count}', matches.length)} <ChevronDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" /></>
                )}
              </button>
            )}
          </div>
        );
      })}
    </section>
  );
};

const HowItWorks = () => (
  <section className="bg-light-bg py-16">
    <div className="container mx-auto px-4 max-w-[1200px]">
      <h2 className="text-3xl font-[var(--font-heading)] font-bold text-center mb-12">{strings.en.howItWorks.title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {strings.en.howItWorks.steps.map((step, idx) => (
          <div key={idx} className="flex flex-col items-center text-center md:items-start md:text-left">
            <div className="w-10 h-10 rounded-full bg-brand-purple text-white flex items-center justify-center font-bold mb-6">
              {idx + 1}
            </div>
            <h3 className="text-lg font-bold mb-2 uppercase text-heading-gray">{step.title}</h3>
            <p className="text-body-gray">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const WhyStrikingly = () => (
  <section className="container mx-auto px-4 max-w-[1200px] py-16">
    <h2 className="text-3xl font-[var(--font-heading)] font-bold text-center mb-12">{strings.en.whyStrikingly.title}</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
      {strings.en.whyStrikingly.features.map((feature, idx) => {
        const icons = [<Globe key="0" className="w-8 h-8"/>, <Smartphone key="1" className="w-8 h-8"/>, <CreditCard key="2" className="w-8 h-8"/>];
        return (
          <div key={idx} className="flex flex-col items-center md:items-start">
            <div className="text-brand-purple mb-6">{icons[idx]}</div>
            <h3 className="text-lg font-bold mb-2 uppercase text-heading-gray">{feature.title}</h3>
            <p className="text-body-gray">{feature.description}</p>
          </div>
        );
      })}
    </div>
  </section>
);

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="container mx-auto px-4 max-w-[800px] py-16 border-t border-divider">
      <h2 className="text-3xl font-[var(--font-heading)] font-bold text-center mb-12">{strings.en.faq.title}</h2>
      <div className="space-y-4">
        {strings.en.faq.items.map((item, idx) => (
          <div key={idx} className="border-b border-divider pb-4">
            <button
              className="flex justify-between items-center w-full text-left font-bold text-heading-gray uppercase tracking-tight py-4 cursor-pointer"
              onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
              aria-expanded={openIndex === idx}
              aria-controls={`faq-answer-${idx}`}
            >
              {item.question}
              {openIndex === idx ? <ChevronUp className="w-5 h-5 text-brand-purple" /> : <ChevronDown className="w-5 h-5 text-brand-purple" />}
            </button>
            <div
              id={`faq-answer-${idx}`}
              className={cn(
                "overflow-hidden transition-all duration-300",
                openIndex === idx ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
              )}
            >
              <p className="text-body-gray mt-2 pr-8">{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const ClosingCTA = () => (
  <section className="py-20 bg-white border-t border-divider">
    <div className="container mx-auto px-4 max-w-[1200px] text-center">
      <h2 className="text-4xl font-[var(--font-heading)] font-bold mb-4">{strings.en.cta.title}</h2>
      <p className="text-body-gray text-lg mb-8">{strings.en.cta.subtitle}</p>
      <a href="/s/ai_site_builder" className="btn-base btn-large btn-primary px-10 flex items-center justify-center w-fit mx-auto min-w-[280px]">
        {strings.en.cta.button}
      </a>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-white py-16 border-t border-divider">
    <div className="container mx-auto px-4 max-w-[1200px]">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-12 mb-12">
        <div className="col-span-2">
           <span className="text-xl font-[var(--font-heading)] font-bold text-hero-gray uppercase tracking-tight mb-6 block">strikingly <span className="ai-gradient-text font-bold">AI</span></span>
           <p className="text-sm text-body-gray max-w-xs">AI-powered website builder. Create your professional site in seconds.</p>
        </div>
        <div>
          <h4 className="font-bold text-xs uppercase mb-6 text-heading-gray">Product</h4>
          <div className="flex flex-col gap-4 text-sm">
            <a href="/templates" className="hover:text-brand-purple">Templates</a>
            <a href="/pricing" className="hover:text-brand-purple">Pricing</a>
            <a href="/about" className="hover:text-brand-purple">About</a>
          </div>
        </div>
        <div>
           <h4 className="font-bold text-xs uppercase mb-6 text-heading-gray">Resources</h4>
          <div className="flex flex-col gap-4 text-sm">
            <a href="/support" className="hover:text-brand-purple">Support</a>
            <a href="/blog" className="hover:text-brand-purple">Blog</a>
          </div>
        </div>
        <div>
           <h4 className="font-bold text-xs uppercase mb-6 text-heading-gray">Legal</h4>
          <div className="flex flex-col gap-4 text-sm">
            <a href="/terms" className="hover:text-brand-purple">Terms</a>
            <a href="/privacy" className="hover:text-brand-purple">Privacy</a>
          </div>
        </div>
      </div>
      <div className="pt-8 border-t border-divider text-xs text-body-gray">
        &copy; {new Date().getFullYear()} Strikingly. All rights reserved.
      </div>
    </div>
  </footer>
);

function App() {
  return (
    <div className="min-h-screen bg-white selection:bg-brand-purple/20">
      <Header />
      <main>
        <Breadcrumb />
        <Hero />
        <FeaturedGenerators />
        <CategoryDirectory />
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

export default App;
