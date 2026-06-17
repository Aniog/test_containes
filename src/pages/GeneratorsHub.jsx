import React, { useState, useEffect, useMemo, useRef } from 'react';
import { strings } from '../data/strings';
import { categories, featuredGenerators, allGenerators } from '../data/generators';
import { 
  Logo, 
  WebsiteIcon, 
  LandingPageIcon, 
  PortfolioIcon, 
  BlogIcon, 
  StoreIcon, 
  LinkIcon, 
  ArrowRightIcon, 
  SearchIcon, 
  ChevronDownIcon, 
  HeroIllustration 
} from '../components/Icons';

const s = strings.en;

const GeneratorCard = ({ name, description, category, slug, showCategoryTag }) => (
  <a 
    href={`/generators/${slug}`} 
    className="group bg-white border border-card-border rounded-card p-[20px] shadow-sm hover:shadow-card-hover hover:border-brand-purple transition-all duration-200 flex flex-col h-full"
  >
    <div className="mb-4">
      {/* Small category illustration tag or placeholder */}
      {showCategoryTag && (
        <span className="text-[11px] px-[6px] py-[2px] rounded-[3px] border border-brand-purple text-brand-purple uppercase font-heading font-bold mb-3 inline-block">
          {category}
        </span>
      )}
    </div>
    <h4 className="font-heading font-bold text-[16px] text-heading-gray mb-2 uppercase leading-tight group-hover:text-brand-purple transition-colors">
      {name}
    </h4>
    <p className="font-body text-[14px] text-body-gray line-clamp-2">
      {description}
    </p>
  </a>
);

const CategoryCard = ({ id, name, description, slug, icon: Icon }) => (
  <a 
    href={`/generators#${id}`}
    className="bg-white border border-card-border rounded-card p-[20px] shadow-sm hover:shadow-card-hover hover:border-brand-purple transition-all duration-200 flex flex-col h-full group"
  >
    <div className="text-brand-purple mb-4">
      <Icon className="w-10 h-10" />
    </div>
    <h3 className="font-heading font-bold text-[18px] text-heading-gray mb-2 uppercase group-hover:text-brand-purple transition-colors">
      {name}
    </h3>
    <p className="font-body text-[14px] text-body-gray mb-4">
      {description}
    </p>
    <div className="mt-auto flex items-center text-brand-purple text-[14px] font-heading font-bold uppercase">
      Browse <ArrowRightIcon className="ml-1 w-4 h-4" />
    </div>
  </a>
);

const FAQItem = ({ question, answer, isOpen, onToggle, id }) => (
  <div className="border-b border-divider">
    <button
      onClick={onToggle}
      aria-expanded={isOpen}
      aria-controls={`faq-answer-${id}`}
      className="w-full py-5 flex justify-between items-center text-left focus:outline-none focus:text-brand-purple group"
    >
      <span className="font-heading font-bold text-[16px] text-heading-gray uppercase group-hover:text-brand-purple transition-colors">
        {question}
      </span>
      <ChevronDownIcon className="text-body-gray group-hover:text-brand-purple" isOpen={isOpen} />
    </button>
    <div 
      id={`faq-answer-${id}`}
      className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[500px] pb-5' : 'max-h-0'}`}
    >
      <div className="font-body text-[14px] text-body-gray space-y-4 pr-10">
        {answer.split('\n\n').map((para, i) => <p key={i}>{para}</p>)}
      </div>
    </div>
  </div>
);

const Section = ({ id, className, children, darkBg }) => (
  <section id={id} className={`py-10 md:py-20 ${darkBg ? 'bg-light-bg' : 'bg-white'} ${className || ''}`}>
    <div className="max-w-[1200px] mx-auto px-5 md:px-10">
      {children}
    </div>
  </section>
);

const GeneratorsHub = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [openFaqIndex, setOpenFaqIndex] = useState(0);
  const [expandedCategories, setExpandedCategories] = useState({});
  const [isJsEnabled, setIsJsEnabled] = useState(false);

  useEffect(() => {
    setIsJsEnabled(true);
  }, []);

  const categoryIcons = {
    'websites': WebsiteIcon,
    'landing-pages': LandingPageIcon,
    'portfolios': PortfolioIcon,
    'blogs': BlogIcon,
    'stores': StoreIcon,
    'link-in-bio': LinkIcon
  };

  const filteredGenerators = useMemo(() => {
    if (!searchQuery.trim()) return allGenerators;
    
    const query = searchQuery.toLowerCase().trim();
    const result = {};
    
    Object.entries(allGenerators).forEach(([catKey, items]) => {
      const category = categories.find(c => c.id === catKey);
      const filtered = items.filter(item => 
        item.name.toLowerCase().includes(query) || 
        item.description.toLowerCase().includes(query) ||
        category?.name.toLowerCase().includes(query)
      );
      if (filtered.length > 0) {
        result[catKey] = filtered;
      }
    });
    
    return result;
  }, [searchQuery]);

  const totalMatchCount = Object.values(filteredGenerators).reduce((acc, curr) => acc + curr.length, 0);

  const toggleCategory = (catId) => {
    setExpandedCategories(prev => ({
      ...prev,
      [catId]: !prev[catId]
    }));
  };

  const clearSearch = () => setSearchQuery('');

  return (
    <div className="min-h-screen bg-white">
      {/* Section 0. Top bar */}
      <header className="sticky top-0 z-50 bg-white border-b border-divider h-[60px] flex items-center">
        <div className="max-w-[1200px] mx-auto px-5 md:px-10 w-full">
          <a href="/" className="inline-block">
            <Logo className="h-[30px]" />
          </a>
        </div>
      </header>

      {/* Section 1. Breadcrumb */}
      <nav aria-label="Breadcrumb" className="max-w-[1200px] mx-auto px-5 md:px-10 py-4">
        <ol className="flex items-center space-x-2 text-[12px] font-body text-body-gray">
          <li>
            <a href="/" className="hover:text-brand-purple underline decoration-divider underline-offset-4">{s.breadcrumb.root}</a>
          </li>
          <li className="text-brand-purple" aria-hidden="true">&gt;</li>
          <li className="font-semibold text-heading-gray" aria-current="page">{s.breadcrumb.current}</li>
        </ol>
      </nav>

      <main>
        {/* Section 2. Hero */}
        <section className="pt-5 pb-10 md:py-20 bg-white">
          <div className="max-w-[1200px] mx-auto px-5 md:px-10 flex flex-col md:flex-row items-center gap-10">
            <div className="flex-1 text-center md:text-left">
              <h1 className="flex flex-col mb-6">
                <span className="text-[32px] md:text-[48px] text-h1-dark leading-tight">{s.hero.h1Line1}</span>
                <span className="text-[32px] md:text-[48px] ai-gradient-text leading-tight">{s.hero.h1Line2}</span>
              </h1>
              <p className="text-[16px] md:text-[18px] text-body-gray max-w-[500px] mb-8 mx-auto md:mx-0">
                {s.hero.subheadline}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <a 
                  href="/s/ai_site_builder" 
                  className="h-[44px] bg-ai-gradient text-white rounded-[4px] px-8 py-2 font-heading font-bold text-[14px] uppercase flex items-center justify-center hover:opacity-90 transition-opacity"
                >
                  {s.hero.primaryCTA}
                </a>
                <a 
                  href="#all-generators" 
                  className="h-[44px] border border-brand-purple text-brand-purple rounded-[4px] px-8 py-2 font-heading font-bold text-[14px] uppercase flex items-center justify-center hover:bg-light-bg transition-colors"
                >
                  {s.hero.secondaryCTA}
                </a>
              </div>
            </div>
            <div className="flex-1 w-full max-w-[500px]">
              <HeroIllustration className="w-full h-auto" />
            </div>
          </div>
        </section>

        {/* Section 3. Featured Generators */}
        <Section id="featured" darkBg>
          <div className="text-center mb-10">
            <h2 className="text-[26px] md:text-[32px] mb-2">{s.featured.heading}</h2>
            <p className="text-body-gray text-[16px]">{s.featured.subheading}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredGenerators.map((gen, i) => (
              <GeneratorCard key={i} {...gen} showCategoryTag />
            ))}
          </div>
        </Section>

        {/* Section 4. Browse by Category */}
        <Section id="categories">
          <div className="text-center mb-10">
            <h2 className="text-[26px] md:text-[32px] mb-2">{s.browseByCategory.heading}</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat, i) => (
              <CategoryCard key={cat.id} {...cat} icon={categoryIcons[cat.id]} />
            ))}
          </div>
        </Section>

        {/* Section 5. All Generators directory */}
        <Section id="all-generators" className="border-t border-divider">
          <div className="text-center mb-12">
            <h2 className="text-[26px] md:text-[32px] mb-2">{s.allGenerators.heading}</h2>
            <p className="text-body-gray text-[16px]">{s.allGenerators.subheading}</p>
          </div>

          <div className="max-w-[480px] mx-auto mb-12 px-5">
            <div className="relative">
              <label htmlFor="generator-search" className="sr-only">{s.allGenerators.searchLabel}</label>
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-body-gray">
                <SearchIcon />
              </div>
              <input
                id="generator-search"
                type="text"
                className="w-full pl-10 pr-4 py-3 border border-card-border rounded-[4px] focus:outline-none focus:border-brand-purple font-body"
                placeholder={s.allGenerators.searchPlaceholder}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="mt-3 text-center text-[12px] text-body-gray">
              {s.allGenerators.matchCount(totalMatchCount)}
            </div>
          </div>

          {totalMatchCount === 0 ? (
            <div className="text-center py-20 border border-dashed border-card-border rounded-[4px] bg-light-bg">
              <p className="text-heading-gray font-bold mb-4">{s.allGenerators.noResults}</p>
              <button 
                onClick={clearSearch}
                className="text-brand-purple font-heading font-bold uppercase hover:underline mb-2"
              >
                {s.allGenerators.clearSearch}
              </button>
              <div>
                <a href="/s/ai_site_builder" className="text-brand-purple underline underline-offset-4 hover:text-ai-pink transition-colors">Start with our AI builder</a>
              </div>
            </div>
          ) : (
            <div className="space-y-16">
              {categories.map((cat) => {
                const items = filteredGenerators[cat.id];
                if (!items) return null;

                const isExpanded = expandedCategories[cat.id] || !isJsEnabled || searchQuery.trim() !== '';
                const displayItems = isExpanded ? items : items.slice(0, 6);
                const canExpand = items.length > 6 && searchQuery.trim() === '' && isJsEnabled;

                return (
                  <div key={cat.id} id={cat.id} className="scroll-mt-20">
                    <div className="mb-6">
                      <h3 className="text-[20px] md:text-[24px] mb-1">{cat.name}</h3>
                      <p className="text-body-gray">{cat.description}</p>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      {displayItems.map((item, i) => (
                        <div key={i} className="animate-in fade-in duration-500">
                          <GeneratorCard {...item} category={cat.name} showCategoryTag={false} />
                        </div>
                      ))}
                    </div>

                    {canExpand && (
                      <div className="mt-8 flex justify-center">
                        <button
                          onClick={() => toggleCategory(cat.id)}
                          aria-expanded={isExpanded}
                          aria-controls={`grid-${cat.id}`}
                          className="font-heading font-bold text-brand-purple uppercase hover:opacity-80 transition-opacity flex items-center gap-2"
                        >
                          {isExpanded ? s.allGenerators.showLess : s.allGenerators.showAll(items.length)}
                          <ChevronDownIcon isOpen={isExpanded} />
                        </button>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </Section>

        {/* Section 6. How It Works */}
        <Section id="how-it-works" darkBg>
          <div className="text-center mb-12">
            <h2 className="text-[26px] md:text-[32px]">{s.howItWorks.heading}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {s.howItWorks.steps.map((step, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div className="w-[40px] h-[40px] rounded-full bg-brand-purple text-white flex items-center justify-center font-heading font-bold text-[18px] mb-4">
                  {i + 1}
                </div>
                <h4 className="font-heading font-bold text-[16px] text-heading-gray mb-2 uppercase">{step.title}</h4>
                <p className="text-body-gray max-w-[280px]">{step.description}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Section 7. Why Strikingly */}
        <Section id="why-strikingly">
          <div className="text-center mb-12">
            <h2 className="text-[26px] md:text-[32px]">{s.whyStrikingly.heading}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {s.whyStrikingly.features.map((feature, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div className="text-brand-purple mb-4">
                  {/* Small line icon - using a placeholderCircle for simplicity */}
                  <div className="w-10 h-10 rounded border-2 border-brand-purple border-dashed opacity-50 flex items-center justify-center">
                    <div className="w-4 h-4 bg-brand-purple rounded-full"></div>
                  </div>
                </div>
                <h4 className="font-heading font-bold text-[16px] text-heading-gray mb-2 uppercase">{feature.title}</h4>
                <p className="text-body-gray max-w-[280px]">{feature.description}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Section 8. FAQ */}
        <Section id="faq" darkBg>
          <div className="text-center mb-12">
            <h2 className="text-[26px] md:text-[32px]">{s.faq.heading}</h2>
          </div>
          <div className="max-w-[800px] mx-auto bg-white rounded-card border border-card-border p-5 md:p-10 shadow-sm">
            {s.faq.questions.map((faq, i) => (
              <FAQItem 
                key={i} 
                id={i}
                question={faq.q} 
                answer={faq.a} 
                isOpen={openFaqIndex === i}
                onToggle={() => setOpenFaqIndex(openFaqIndex === i ? -1 : i)}
              />
            ))}
          </div>
        </Section>

        {/* Section 9. Closing CTA */}
        <Section id="closing-cta" className="text-center">
          <div className="py-10">
            <h2 className="text-[32px] md:text-[40px] mb-4 text-h1-dark">{s.closingCTA.headline}</h2>
            <p className="text-body-gray text-[18px] mb-8">{s.closingCTA.sub}</p>
            <a 
              href="/s/ai_site_builder" 
              className="h-[44px] bg-ai-gradient text-white rounded-[4px] px-10 py-3 font-heading font-bold text-[14px] uppercase inline-flex items-center justify-center hover:opacity-90 transition-opacity"
            >
              {s.closingCTA.button}
            </a>
          </div>
        </Section>
      </main>

      {/* Section 10. Footer */}
      <footer className="bg-white border-t border-divider py-12">
        <div className="max-w-[1200px] mx-auto px-5 md:px-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            <div className="col-span-1 lg:col-span-1">
              <Logo className="h-[24px] mb-6 opacity-80 grayscale" />
            </div>
            {s.footer.links.map((group, i) => (
              <div key={i}>
                <h5 className="font-heading font-bold text-[14px] text-heading-gray mb-4 uppercase">{group.title}</h5>
                <ul className="space-y-2">
                  {group.items.map((item, j) => (
                    <li key={j}>
                      <a href={item.href} className="text-body-gray hover:text-brand-purple transition-colors">{item.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="border-t border-divider pt-8 text-[12px] text-body-gray flex flex-col md:flex-row justify-between items-center gap-4">
            <p>{s.footer.copyright}</p>
            <div className="flex gap-6">
              <a href="/terms" className="hover:text-brand-purple">Terms</a>
              <a href="/privacy" className="hover:text-brand-purple">Privacy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default GeneratorsHub;
