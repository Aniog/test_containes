import { useState, useMemo, useEffect } from 'react';
import { strings, categories, featuredGenerators, allGenerators } from './data';
import { Search, ChevronDown, ChevronRight, Menu, Globe, Rocket, Palette, FileText, ShoppingBag, Link as LinkIcon, Monitor, ArrowRight, Zap, Smartphone, DollarSign, ChevronUp } from 'lucide-react';

const AI_GRADIENT_CLASS = 'bg-ai-gradient bg-clip-text text-transparent';

const Button = ({ children, variant = 'primary', className = '', as = 'button', href, ...props }) => {
  const baseClasses = 'inline-flex items-center justify-center rounded-[4px] font-heading font-bold uppercase transition-all duration-200 text-[14px] px-[15px]';
  const variants = {
    primary: 'h-[44px] bg-ai-gradient text-white hover:opacity-90',
    secondary: 'h-[44px] border border-brand-purple text-brand-purple bg-transparent hover:bg-brand-purple/5 border-solid',
    ghost: 'h-[36px] border border-brand-purple text-brand-purple bg-transparent hover:bg-brand-purple/5 border-solid',
    small: 'h-[36px] bg-ai-gradient text-white hover:opacity-90',
  };

  const Component = as;
  const commonProps = {
    className: `${baseClasses} ${variants[variant]} ${className}`,
    ...props,
  };

  if (as === 'a') {
    return <a href={href} {...commonProps}>{children}</a>;
  }

  return <button {...commonProps}>{children}</button>;
};

const Card = ({ children, className = '', href = '#', id }) => (
  <article id={id} className="h-full">
    <a
      href={href}
      className={`block h-full bg-white border border-brand-border rounded-[3px] p-[20px] transition-all duration-200 hover:shadow-md hover:border-brand-purple group ${className}`}
    >
      {children}
    </a>
  </article>
);

const Tag = ({ children }) => (
  <span className="inline-block border border-brand-purple text-brand-purple rounded-[3px] px-[6px] py-[2px] font-heading font-bold text-[11px] uppercase">
    {children}
  </span>
);

const Section = ({ id, children, className = '', title, sub, titleLevel = 'h2' }) => {
  const TitleTag = titleLevel;
  return (
    <section id={id} className={`py-[40px] px-[20px] ${className}`}>
      <div className="max-w-[1200px] mx-auto">
        {title && <TitleTag className={`font-heading font-bold text-brand-heading text-center mb-[10px] ${TitleTag === 'h2' ? 'text-[26px] md:text-[32px]' : 'text-[20px] md:text-[24px]'}`}>{title}</TitleTag>}
        {sub && <p className="text-brand-body text-center mb-[40px]">{sub}</p>}
        {children}
      </div>
    </section>
  );
};

function App() {
  const s = strings.en;
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedSubsections, setExpandedSubsections] = useState({});
  const [expandedFaqs, setExpandedFaqs] = useState({ 0: true });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const toggleFaq = (index) => {
    setExpandedFaqs(prev => ({ ...prev, [index]: !prev[index] }));
  };

  const toggleSubsection = (catId) => {
    setExpandedSubsections(prev => ({ ...prev, [catId]: !prev[catId] }));
  };

  const filteredData = useMemo(() => {
    const query = searchQuery.toLowerCase();
    const result = {
      sections: {},
      total: 0
    };
    
    Object.keys(allGenerators).forEach(catId => {
      const cat = categories.find(c => c.id === catId);
      const matches = allGenerators[catId].filter(gen => 
        gen.name.toLowerCase().includes(query) ||
        gen.desc.toLowerCase().includes(query) ||
        cat?.name.toLowerCase().includes(query)
      );
      
      if (matches.length > 0) {
        result.sections[catId] = matches;
        result.total += matches.length;
      }
    });

    return result;
  }, [searchQuery]);

  return (
    <div className="min-h-screen bg-white font-body text-brand-body">
      {/* Section 0. Top bar */}
      <header className="sticky top-0 z-50 bg-white border-b border-brand-divider h-[60px] flex items-center px-[20px]">
        <div className="max-w-[1200px] mx-auto w-full flex items-center">
          <a href="/" className="flex items-center gap-1">
            <span className="font-heading font-bold text-[20px] text-brand-hero uppercase group relative">
              strikingly
              <span className="absolute -right-[28px] top-0 font-heading font-bold text-[20px] text-brand-purple uppercase">AI</span>
            </span>
          </a>
        </div>
      </header>

      {/* Section 1. Breadcrumb */}
      <nav aria-label="Breadcrumb" className="max-w-[1200px] mx-auto px-[20px] py-[10px]">
        <ol className="flex items-center gap-2 text-[12px] text-brand-body">
          <li><a href="/" className="hover:text-brand-purple transition-colors">Strikingly</a></li>
          <li className="text-brand-purple" aria-hidden="true">&gt;</li>
          <li className="font-bold">AI Generators</li>
        </ol>
      </nav>

      {/* Section 2. Hero */}
      <section className="relative overflow-hidden pt-[60px] pb-[80px] px-[20px] bg-gradient-to-b from-brand-light to-white">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-[40px] items-center">
          <div className="text-center md:text-left">
            <h1 className="flex flex-col mb-[20px] leading-tight">
              <span className="text-[32px] md:text-[48px] font-heading font-bold text-brand-hero">{s.hero.line1}</span>
              <span className={`text-[32px] md:text-[48px] font-heading font-bold ${AI_GRADIENT_CLASS}`}>{s.hero.line2}</span>
            </h1>
            <p className="text-[16px] md:text-[18px] max-w-[500px] md:mx-0 mx-auto mb-[30px]">
              {s.hero.sub}
            </p>
            <div className="flex flex-col sm:flex-row gap-[10px] justify-center md:justify-start">
              <Button as="a" href="/s/ai_site_builder">{s.hero.ctaPrimary}</Button>
              <Button variant="secondary" as="a" href="#all-generators">{s.hero.ctaSecondary}</Button>
            </div>
          </div>
          <div className="relative flex justify-center order-first md:order-last">
            <svg width="500" height="350" viewBox="0 0 500 350" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="w-full max-w-[500px] h-auto text-brand-purple/20">
              <rect x="25" y="25" width="450" height="300" rx="12" stroke="currentColor" strokeWidth="2" strokeDasharray="6 6" />
              <rect x="60" y="60" width="380" height="40" rx="4" fill="currentColor" fillOpacity="0.1" />
              <rect x="60" y="120" width="180" height="150" rx="4" fill="currentColor" fillOpacity="0.1" />
              <rect x="260" y="120" width="180" height="60" rx="4" fill="currentColor" fillOpacity="0.1" />
              <rect x="260" y="200" width="180" height="70" rx="4" fill="currentColor" fillOpacity="0.1" />
              <circle cx="250" cy="175" r="45" stroke="currentColor" strokeWidth="2" fill="white" />
              <path d="M230 175H270M250 155V195" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
        </div>
      </section>

      <main>
        {/* Section 3. Featured Generators */}
        <Section title={s.featured.title} sub={s.featured.sub}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px]">
            {featuredGenerators.map((gen, i) => (
              <Card key={i} href={`/generators/${gen.slug}`}>
                <div className="flex flex-col h-full gap-2">
                  <h3 className="font-heading font-bold text-brand-hero leading-tight">{gen.name}</h3>
                  <p className="text-[14px] flex-grow">{gen.desc}</p>
                  <div className="mt-2 text-left">
                    <Tag>{gen.cat}</Tag>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Section>

        {/* Section 4. Browse by Category */}
        <Section title={s.browseByCategory.title} className="bg-brand-light/30">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px]">
            {categories.map((cat) => (
              <Card key={cat.id} href={`#${cat.id}`} className="text-center group">
                <div className="text-[32px] mb-[15px]" aria-hidden="true">{cat.icon}</div>
                <h3 className="font-heading font-bold text-brand-hero uppercase mb-[5px]">{cat.name}</h3>
                <p className="text-[14px] mb-[15px]">{cat.desc}</p>
                <div className="flex justify-center text-brand-purple">
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </div>
              </Card>
            ))}
          </div>
        </Section>

        {/* Section 5. All Generators directory */}
        <Section id="all-generators" title={s.allGenerators.title} sub={s.allGenerators.sub}>
          <div className="max-w-[480px] mx-auto mb-[30px]">
            <div className="relative">
              <label htmlFor="search-input" className="sr-only">Search generators</label>
              <Search className="absolute left-[15px] top-1/2 -translate-y-1/2 text-brand-body w-5 h-5 pointer-events-none" />
              <input
                id="search-input"
                type="text"
                placeholder={s.allGenerators.searchPlaceholder}
                aria-label="Search generators"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-[44px] pl-[45px] pr-[15px] border border-brand-border rounded-[3px] focus:border-brand-purple outline-none transition-colors"
              />
            </div>
            {searchQuery && (
              <div className="mt-2 text-[13px] text-center font-bold">
                {s.allGenerators.matchCount.replace('{count}', filteredData.total)}
              </div>
            )}
          </div>

          {searchQuery && filteredData.total === 0 ? (
            <div className="text-center py-[60px]">
              <p className="mb-4 text-[18px]">{s.allGenerators.emptyState}</p>
              <div className="flex flex-col items-center gap-4">
                <Button variant="small" onClick={() => setSearchQuery('')}>{s.allGenerators.clearSearch}</Button>
                <a href="/s/ai_site_builder" className="text-brand-purple underline text-[14px]">Can't find it? Start with our AI builder.</a>
              </div>
            </div>
          ) : (
            <div className="space-y-[60px]">
              {categories.map((cat) => {
                const gens = allGenerators[cat.id] || [];
                const searchMatches = filteredData.sections[cat.id] || [];
                
                // If there's a search query and no matches in this category, hide section
                if (searchQuery && searchMatches.length === 0) return null;

                const isSearching = searchQuery.length > 0;
                const isExpanded = isSearching || expandedSubsections[cat.id] || !isMounted;
                
                // Which items to show based on search or expansion
                const visibleGens = isSearching ? searchMatches : gens;

                return (
                  <div key={cat.id} id={cat.id} className="scroll-mt-[80px]">
                    <div className="mb-[25px] flex flex-col items-center md:items-start text-center md:text-left">
                      <h3 className="text-[20px] font-heading font-bold text-brand-hero uppercase mb-[5px]">{cat.name}</h3>
                      <p className="text-brand-body text-[14px]">{cat.desc}</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px]">
                      {visibleGens.map((gen, index) => {
                        // In non-search mode, hide extras IF we are mounted and NOT expanded
                        const isHidden = !isSearching && isMounted && !isExpanded && index >= 3;
                        return (
                          <div key={gen.slug} className={isHidden ? 'hidden' : ''}>
                            <Card href={`/generators/${gen.slug}`}>
                              <div className="flex flex-col gap-4">
                                <div className="text-[24px] bg-brand-light w-[44px] h-[44px] flex items-center justify-center rounded-[3px]" aria-hidden="true">
                                  {cat.icon}
                                </div>
                                <div>
                                  <h4 className="font-heading font-bold text-brand-hero leading-tight mb-2 uppercase">{gen.name}</h4>
                                  <p className="text-[14px]">{gen.desc}</p>
                                </div>
                              </div>
                            </Card>
                          </div>
                        );
                      })}
                    </div>
                    {!isSearching && gens.length > 3 && (
                      <div className="mt-[25px] text-center">
                        <Button
                          variant="secondary"
                          onClick={() => toggleSubsection(cat.id)}
                          className="bg-white min-w-[200px]"
                          aria-expanded={isExpanded}
                          aria-controls={`sub-${cat.id}`}
                        >
                          {isExpanded ? 'Show less' : `Show all ${gens.length} ${cat.name}`}
                          {isExpanded ? <ChevronUp className="ml-2 w-4 h-4" /> : <ChevronDown className="ml-2 w-4 h-4" />}
                        </Button>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </Section>

        {/* Section 6. How It Works */}
        <Section title={s.howItWorks.title} className="bg-brand-light/20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[40px]">
            {s.howItWorks.steps.map((step, i) => (
              <div key={i} className="text-center">
                <div className="w-[50px] h-[50px] bg-brand-purple text-white rounded-full flex items-center justify-center font-heading font-bold text-[20px] mx-auto mb-[20px]" aria-hidden="true">
                  {i + 1}
                </div>
                <h3 className="font-heading font-bold text-brand-hero uppercase mb-2">{step.title}</h3>
                <p className="text-[14px] leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Section 7. Why Strikingly */}
        <Section title={s.whyStrikingly.title}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[40px]">
            {s.whyStrikingly.claims.map((claim, i) => (
              <div key={i} className="text-center">
                <div className="text-brand-purple mb-[20px] flex justify-center" aria-hidden="true">
                  {i === 0 && <Zap className="w-10 h-10" />}
                  {i === 1 && <Smartphone className="w-10 h-10" />}
                  {i === 2 && <DollarSign className="w-10 h-10" />}
                </div>
                <h3 className="font-heading font-bold text-brand-hero uppercase mb-2">{claim.title}</h3>
                <p className="text-[14px] leading-relaxed">{claim.desc}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Section 8. FAQ */}
        <Section title={s.faq.title} className="max-w-[840px] px-[20px]">
          <div className="space-y-[12px]">
            {s.faq.questions.map((faq, i) => (
              <div key={i} className="border border-brand-border rounded-[3px] bg-white">
                <button
                  onClick={() => toggleFaq(i)}
                  className="w-full py-[18px] px-[20px] flex items-center justify-between font-bold text-[16px] text-brand-hero hover:bg-brand-light transition-colors text-left gap-4"
                  aria-expanded={expandedFaqs[i]}
                  aria-controls={`faq-answer-${i}`}
                >
                  <span>{faq.q}</span>
                  <div className="flex-shrink-0 text-brand-purple">
                    {expandedFaqs[i] ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                </button>
                <div
                  id={`faq-answer-${i}`}
                  className={`transition-all duration-300 ease-in-out ${expandedFaqs[i] ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}
                >
                  <div className="px-[20px] pb-[20px] pt-0 text-[14px] border-t border-brand-divider leading-relaxed text-brand-body whitespace-pre-line">
                    <div className="mt-4">{faq.a}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Section 9. Closing CTA */}
        <section className="py-[100px] px-[20px] text-center border-t border-brand-divider bg-white">
          <div className="max-w-[1200px] mx-auto">
            <h2 className="text-[26px] md:text-[32px] font-heading font-bold text-brand-heading mb-[12px] uppercase">{s.closingCta.title}</h2>
            <p className="text-brand-body mb-[35px] text-[16px]">{s.closingCta.sub}</p>
            <Button as="a" href="/s/ai_site_builder" className="min-w-[260px] h-[44px]">{s.closingCta.cta}</Button>
          </div>
        </section>
      </main>

      {/* Section 10. Footer */}
      <footer className="bg-[#2E2E2F] text-white/60 py-[80px] px-[20px]">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-[40px] mb-[60px]">
            <div className="col-span-2">
              <a href="/" className="flex items-center gap-1 mb-[25px]">
                <span className="font-heading font-bold text-[22px] text-white uppercase group relative">
                  strikingly
                  <span className="absolute -right-[30px] top-0 font-heading font-bold text-[22px] text-brand-purple uppercase">AI</span>
                </span>
              </a>
              <p className="text-[13px] leading-relaxed max-w-[280px]">
                The easiest AI website builder for everyone. Build, customize, and publish your site in minutes.
              </p>
            </div>
            <div>
              <h4 className="text-white font-heading font-bold mb-[25px] text-[14px] uppercase tracking-wider">Product</h4>
              <ul className="space-y-[12px] text-[13px]">
                <li><a href="/about" className="hover:text-white transition-colors">About</a></li>
                <li><a href="/pricing" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="/templates" className="hover:text-white transition-colors">Templates</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-heading font-bold mb-[25px] text-[14px] uppercase tracking-wider">Resources</h4>
              <ul className="space-y-[12px] text-[13px]">
                <li><a href="/support" className="hover:text-white transition-colors">Support</a></li>
                <li><a href="/blog" className="hover:text-white transition-colors">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-heading font-bold mb-[25px] text-[14px] uppercase tracking-wider">Legal</h4>
              <ul className="space-y-[12px] text-[13px]">
                <li><a href="/terms" className="hover:text-white transition-colors">Terms</a></li>
                <li><a href="/privacy" className="hover:text-white transition-colors">Privacy</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-[40px] border-t border-white/10 text-[12px] flex flex-col md:flex-row justify-between items-center gap-4">
            <p>{s.footer.copyright}</p>
            <div className="flex gap-6">
              {/* Fallback to text if path is unknown, as per brief. But I used placeholders as allowed. */}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
