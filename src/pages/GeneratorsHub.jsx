import React, { useState, useMemo } from 'react';
import { strings } from '../locales/strings';
import { Link } from 'react-router-dom';
import { Globe, LayoutTemplate, Briefcase, FileText, ShoppingCart, Link as LinkIcon, ArrowRight, Search, ChevronDown, ChevronUp, Zap, Smartphone, Gift, Plus, Minus } from 'lucide-react';
import { directoryData } from '../data/directoryData';

const categories = [
  { id: 'websites', name: 'Websites', desc: "AI-built business and personal sites for any goal.", icon: Globe },
  { id: 'landing-pages', name: 'Landing Pages', desc: "Single-page sites built to convert visitors fast.", icon: LayoutTemplate },
  { id: 'portfolios', name: 'Portfolios', desc: "Showcase your work with a clean, focused site.", icon: Briefcase },
  { id: 'blogs', name: 'Blogs', desc: "Publish-ready blogs with built-in SEO basics.", icon: FileText },
  { id: 'stores', name: 'Online Stores', desc: "Sell products online with payments built in.", icon: ShoppingCart },
  { id: 'link-in-bio', name: 'Link-in-Bio', desc: "One link, all your places. Made for creators.", icon: LinkIcon },
];

const BrowseByCategory = () => {
  return (
    <section className="bg-[var(--color-bg-light)] py-[60px]">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="text-center mb-[40px]">
          <h2 className="font-heading font-bold text-[26px] md:text-[32px] uppercase text-[var(--color-text-heading)]">{t.categoriesHeading}</h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[20px]">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <a key={cat.id} href={`#${cat.id}`} className="block group bg-white border border-[var(--color-border-card)] rounded-[3px] p-[24px] transition-all hover:shadow-md hover:border-[var(--color-brand-purple)] focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-purple)]">
                <div className="flex flex-col h-full">
                  <div className="mb-[15px] text-[var(--color-brand-purple)]">
                    <Icon size={32} strokeWidth={1.5} aria-hidden="true" />
                  </div>
                  <div className="flex items-center justify-between mb-[8px]">
                    <h3 className="font-heading font-bold uppercase tracking-wide text-[16px] text-[var(--color-text-hero-main)] group-hover:text-[var(--color-brand-purple)] transition-colors">
                      {cat.name}
                    </h3>
                    <ArrowRight size={18} className="text-[var(--color-border-card)] group-hover:text-[var(--color-brand-purple)] transition-colors" aria-hidden="true" />
                  </div>
                  <p className="text-[14px] text-[var(--color-text-body)]">
                    {cat.desc}
                  </p>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const lang = 'en';
const t = strings[lang];

const TopBar = () => {
  return (
    <header className="bg-white border-b border-[var(--color-divider)]">
      <div className="max-w-[1200px] mx-auto px-5 h-16 flex items-center">
        <Link to="/" className="flex items-center gap-1 font-heading text-xl tracking-tight text-[var(--color-text-hero-main)]">
          <span className="lowercase font-bold">strikingly</span>
          <span className="bg-ai-gradient text-white text-[10px] px-1.5 py-0.5 rounded-sm uppercase tracking-wider ml-1 mt-0.5">AI</span>
        </Link>
      </div>
    </header>
  );
};

const Breadcrumb = () => {
  return (
    <nav aria-label="Breadcrumb" className="max-w-[1200px] mx-auto px-5 py-4">
      <ol className="flex items-center gap-2 text-sm text-[var(--color-text-body)]">
        <li>
          <Link to="/" className="hover:text-[var(--color-brand-purple)] transition-colors">
            {t.breadcrumbHome}
          </Link>
        </li>
        <li aria-hidden="true" className="text-[var(--color-brand-purple)] font-bold opacity-60 text-xs">/</li>
        <li aria-current="page">
          {t.breadcrumbCurrent}
        </li>
      </ol>
    </nav>
  );
};

// Data for Featured Generators
const featuredGenerators = [
  { id: 1, name: "AI Website Generator", desc: "Describe your business, get a full site", category: "Website", slug: "ai-website-generator" },
  { id: 2, name: "Free Portfolio Generator", desc: "For creatives, in minutes, no fee", category: "Portfolio", slug: "free-portfolio-generator" },
  { id: 3, name: "AI Landing Page Maker", desc: "One-page sites built to convert", category: "Landing Page", slug: "ai-landing-page-maker" },
  { id: 4, name: "Online Store Builder", desc: "Start selling without writing code", category: "Store", slug: "online-store-builder" },
  { id: 5, name: "Link-in-Bio Generator", desc: "One link for all your channels", category: "Link-in-Bio", slug: "link-in-bio-generator" },
  { id: 6, name: "One-Page Website Builder", desc: "Simple sites, single scroll", category: "Website", slug: "one-page-website-builder" },
  { id: 7, name: "Wedding Website Generator", desc: "Share your day with guests", category: "Website", slug: "wedding-website-generator" },
  { id: 8, name: "Restaurant Website Builder", desc: "Menu, hours, reservations, done", category: "Website", slug: "restaurant-website-builder" },
  { id: 9, name: "Blog Generator for Beginners", desc: "Publish-ready in minutes", category: "Blog", slug: "blog-generator-for-beginners" },
];

const FeaturedGenerators = () => {
  return (
    <section className="max-w-[1200px] mx-auto px-5 py-[40px]">
      <div className="text-center mb-[40px]">
        <h2 className="font-heading font-bold text-[26px] md:text-[32px] uppercase text-[var(--color-text-heading)] mb-[10px]">{t.featuredHeading}</h2>
        <p className="text-[16px] text-[var(--color-text-body)]">{t.featuredSub}</p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[20px]">
        {featuredGenerators.map((gen) => (
          <Link key={gen.id} to={`/generators/${gen.slug}`} className="block group bg-white border border-[var(--color-border-card)] rounded-[3px] p-[20px] transition-all hover:shadow-md hover:border-[var(--color-brand-purple)] focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-purple)]">
            <div className="flex flex-col h-full">
              <div className="mb-[10px]">
                <span className="inline-block border border-[var(--color-brand-purple)] text-[var(--color-brand-purple)] font-heading uppercase text-[11px] px-[6px] py-[2px] rounded-[3px] mb-[10px]">
                  {gen.category}
                </span>
                <h3 className="font-bold text-[18px] text-[var(--color-text-hero-main)] leading-tight mb-[5px] group-hover:text-[var(--color-brand-purple)] transition-colors">
                  {gen.name}
                </h3>
              </div>
              <p className="text-[14px] text-[var(--color-text-body)]">
                {gen.desc}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#F9F6FF] to-[var(--color-bg-light)]">
      {/* Decorative very faint wash in background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1200px] h-full pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[var(--color-brand-purple)] opacity-5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-[1200px] mx-auto px-5 py-[60px] md:py-[80px] grid grid-cols-1 md:grid-cols-2 gap-[40px] items-center relative z-10">
        <div className="flex flex-col">
          <h1 className="font-heading font-bold text-[32px] md:text-[44px] leading-[1.2] uppercase tracking-tight mb-[20px]">
            <span className="block text-[var(--color-text-hero-main)]">{t.heroH1Line1}</span>
            <span className="block text-ai-gradient">{t.heroH1Line2}</span>
          </h1>
          <p className="text-[16px] md:text-[18px] text-[var(--color-text-body)] max-w-[500px] mb-[30px] leading-relaxed">
            {t.heroSub}
          </p>
          <div className="flex flex-col sm:flex-row gap-[10px]">
            <Link to="/s/ai_site_builder" className="inline-flex items-center justify-center font-heading font-bold uppercase text-[14px] h-[44px] px-[24px] rounded-[4px] bg-ai-gradient text-white hover:opacity-90 transition-opacity min-w-[200px]">
              {t.heroCtaPrimary}
            </Link>
            <a href="#all-generators" className="inline-flex items-center justify-center font-heading font-bold uppercase text-[14px] h-[44px] px-[24px] rounded-[4px] border border-[var(--color-brand-purple)] text-[var(--color-brand-purple)] hover:bg-[var(--color-brand-purple)] hover:text-white transition-colors bg-transparent min-w-[200px]">
              {t.heroCtaSecondary}
            </a>
          </div>
        </div>
        
        <div className="flex justify-center md:justify-end">
          <svg width="400" height="300" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="w-full max-w-[400px] h-auto">
            <rect x="25" y="25" width="350" height="250" rx="8" fill="white" stroke="#E2E4E7" strokeWidth="2"/>
            <circle cx="45" cy="45" r="5" fill="#C6C9CD"/>
            <circle cx="65" cy="45" r="5" fill="#C6C9CD"/>
            <circle cx="85" cy="45" r="5" fill="#C6C9CD"/>
            <path d="M25 65H375" stroke="#E2E4E7" strokeWidth="2"/>
            
            <rect x="50" y="90" width="120" height="15" rx="4" fill="#8159BB" fillOpacity="0.2"/>
            <rect x="50" y="120" width="300" height="8" rx="4" fill="#E2E4E7"/>
            <rect x="50" y="135" width="250" height="8" rx="4" fill="#E2E4E7"/>
            <rect x="50" y="150" width="280" height="8" rx="4" fill="#E2E4E7"/>
            
            <rect x="50" y="180" width="80" height="24" rx="4" fill="#8159BB"/>
            <rect x="140" y="180" width="80" height="24" rx="4" fill="white" stroke="#8159BB" strokeWidth="1"/>
            
            <rect x="260" y="90" width="90" height="60" rx="4" fill="#8159BB" fillOpacity="0.1"/>
            <path d="M280 110L290 130H270L280 110Z" fill="#8159BB" fillOpacity="0.3"/>
            <path d="M310 115L320 130H300L310 115Z" fill="#8159BB" fillOpacity="0.2"/>
          </svg>
        </div>
      </div>
    </section>
  );
};

const AllGenerators = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (id) => {
    setExpandedSections(prev => ({...prev, [id]: !prev[id]}));
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const clearSearch = () => setSearchQuery('');

  const trimmedQuery = searchQuery.trim().toLowerCase();

  const sectionsWithMatchState = useMemo(() => {
    let matchCount = 0;
    const computed = directoryData.map(section => {
      const sectionMatch = section.name.toLowerCase().includes(trimmedQuery) || section.desc.toLowerCase().includes(trimmedQuery);
      let activeItemsCount = 0;
      
      const items = section.items.map(item => {
        const itemMatch = item.name.toLowerCase().includes(trimmedQuery) || item.desc.toLowerCase().includes(trimmedQuery);
        const isMatched = trimmedQuery === '' || sectionMatch || itemMatch;
        if (isMatched) {
          activeItemsCount++;
          matchCount++;
        }
        return { ...item, isMatched };
      });
      return { ...section, items, activeItemsCount };
    });
    return { sections: computed, totalMatches: matchCount };
  }, [trimmedQuery]);

  const { sections, totalMatches } = sectionsWithMatchState;

  return (
    <section id="all-generators" className="max-w-[1200px] mx-auto px-5 py-[60px] scroll-mt-[60px]">
      <div className="text-center mb-[40px]">
        <h2 className="font-heading font-bold text-[26px] md:text-[32px] uppercase text-[var(--color-text-heading)] mb-[10px]">{t.allGeneratorsHeading}</h2>
        <p className="text-[16px] text-[var(--color-text-body)]">{t.allGeneratorsSub}</p>
      </div>

      <div className="max-w-[480px] mx-auto mb-[60px]">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[var(--color-text-body)]">
            <Search size={20} aria-hidden="true" />
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-3 border border-[var(--color-border-card)] rounded-[4px] leading-5 bg-white placeholder-[var(--color-text-body)] focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-purple)] focus:border-[var(--color-brand-purple)] sm:text-[16px] transition-shadow disabled:bg-gray-100 disabled:opacity-50"
            placeholder={t.searchPlaceholder}
            aria-label={t.searchLabel}
            value={searchQuery}
            onChange={handleSearch}
          />
        </div>
        {trimmedQuery && (
          <div className="mt-2 text-sm text-[var(--color-text-body)] text-center">
            {totalMatches} matching generator{totalMatches !== 1 && 's'}
          </div>
        )}
      </div>

      {trimmedQuery !== '' && totalMatches === 0 ? (
        <div className="text-center py-[40px] px-[20px] bg-white border border-[var(--color-divider)] rounded-[4px] max-w-[600px] mx-auto">
          <p className="mb-[20px] text-[16px] text-[var(--color-text-body)]">No generators found matching "{searchQuery}".</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button onClick={clearSearch} className="inline-flex justify-center items-center h-[40px] px-[20px] rounded-[4px] border border-[var(--color-border-card)] text-[var(--color-text-heading)] font-bold font-heading uppercase text-sm hover:bg-gray-50 transition-colors">
              Clear search
            </button>
            <Link to="/s/ai_site_builder" className="inline-flex justify-center items-center h-[40px] px-[20px] rounded-[4px] bg-ai-gradient text-white font-bold font-heading uppercase text-sm hover:opacity-90 transition-opacity">
              {t.searchEmptyCta}
            </Link>
          </div>
        </div>
      ) : (
        <div className="space-y-[60px]">
          {sections.map(section => {
            const isSearching = trimmedQuery !== '';
            
            // If searching and this section has no matches, visually hide it
            if (isSearching && section.activeItemsCount === 0) {
              return (
                <div key={section.id} id={section.id} className="hidden"></div>
              );
            }

            const catConfig = categories.find(c => c.id === section.id);
            const Icon = catConfig ? catConfig.icon : Globe;
            const isExpanded = isSearching || expandedSections[section.id];
            const hasMore = section.items.length > 6; // Assume > 6 rows need expanding

            return (
              <div key={section.id} id={section.id} className="scroll-mt-[80px]">
                <div className="mb-[20px]">
                  <h3 className="font-heading font-bold text-[22px] md:text-[26px] uppercase text-[var(--color-text-heading)] mb-[5px]">{section.name}</h3>
                  <p className="text-[16px] text-[var(--color-text-body)]">{section.desc}</p>
                </div>

                <div className={`generator-grid-container ${!isExpanded ? 'generator-grid-collapsed' : ''}`}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[20px]">
                    {section.items.map(item => (
                      <Link key={item.id} to={`/generators/${item.slug}`} className={`block group bg-white border border-[var(--color-border-card)] rounded-[3px] p-[20px] transition-all hover:shadow-md hover:border-[var(--color-brand-purple)] focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-purple)] ${!item.isMatched ? 'hidden' : ''}`}>
                        <div className="flex flex-col h-full">
                          <div className="mb-[15px] text-[var(--color-brand-purple)] opacity-80 group-hover:opacity-100 transition-opacity">
                            <Icon size={24} strokeWidth={1.5} aria-hidden="true" />
                          </div>
                          <h4 className="font-bold text-[16px] text-[var(--color-text-hero-main)] leading-tight mb-[5px] group-hover:text-[var(--color-brand-purple)] transition-colors">
                            {item.name}
                          </h4>
                          <p className="text-[14px] text-[var(--color-text-body)]">
                            {item.desc}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                {!isSearching && hasMore && (
                  <div className="mt-[20px] flex justify-center">
                    <button 
                      onClick={() => toggleSection(section.id)}
                      className="inline-flex items-center gap-2 font-heading font-bold uppercase text-[12px] h-[36px] px-[16px] rounded-[4px] border border-[var(--color-brand-purple)] text-[var(--color-brand-purple)] hover:bg-[var(--color-brand-purple)] hover:text-white transition-colors bg-transparent"
                      aria-expanded={isExpanded}
                      aria-controls={`grid-${section.id}`}
                    >
                      {isExpanded ? t.showLess : `${t.showAllPrefix} ${section.items.length} ${t.showAllSuffix}`}
                      {isExpanded ? <ChevronUp size={16} aria-hidden="true" /> : <ChevronDown size={16} aria-hidden="true" />}
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
};

const HowItWorks = () => {
  return (
    <section className="bg-[var(--color-bg-light)] py-[80px]">
      <div className="max-w-[1200px] mx-auto px-5 text-center">
        <h2 className="font-heading font-bold text-[26px] md:text-[32px] uppercase text-[var(--color-text-heading)] mb-[40px]">{t.howItWorksHeading}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[40px] text-center max-w-[900px] mx-auto">
          <div className="flex flex-col items-center">
            <div className="w-[48px] h-[48px] rounded-full bg-[var(--color-brand-purple)] text-white flex items-center justify-center font-heading font-bold text-[20px] mb-[20px]">
              1
            </div>
            <h3 className="font-heading font-bold text-[18px] uppercase text-[var(--color-text-hero-main)] mb-[10px]">{t.howItWorksStep1Title}</h3>
            <p className="text-[14px] text-[var(--color-text-body)]">{t.howItWorksStep1Desc}</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-[48px] h-[48px] rounded-full bg-[var(--color-brand-purple)] text-white flex items-center justify-center font-heading font-bold text-[20px] mb-[20px]">
              2
            </div>
            <h3 className="font-heading font-bold text-[18px] uppercase text-[var(--color-text-hero-main)] mb-[10px]">{t.howItWorksStep2Title}</h3>
            <p className="text-[14px] text-[var(--color-text-body)]">{t.howItWorksStep2Desc}</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-[48px] h-[48px] rounded-full bg-[var(--color-brand-purple)] text-white flex items-center justify-center font-heading font-bold text-[20px] mb-[20px]">
              3
            </div>
            <h3 className="font-heading font-bold text-[18px] uppercase text-[var(--color-text-hero-main)] mb-[10px]">{t.howItWorksStep3Title}</h3>
            <p className="text-[14px] text-[var(--color-text-body)]">{t.howItWorksStep3Desc}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const WhyStrikingly = () => {
  return (
    <section className="py-[80px]">
      <div className="max-w-[1200px] mx-auto px-5 text-center">
        <h2 className="font-heading font-bold text-[26px] md:text-[32px] uppercase text-[var(--color-text-heading)] mb-[40px]">{t.whyHeading}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-[40px] max-w-[1000px] mx-auto">
          <div className="flex flex-col items-center text-center">
            <div className="mb-[20px] text-[var(--color-brand-purple)]">
              <Zap size={40} strokeWidth={1.5} aria-hidden="true" />
            </div>
            <h3 className="font-heading font-bold text-[16px] uppercase text-[var(--color-text-hero-main)] mb-[10px]">{t.why1Title}</h3>
            <p className="text-[14px] text-[var(--color-text-body)]">{t.why1Desc}</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="mb-[20px] text-[var(--color-brand-purple)]">
              <Smartphone size={40} strokeWidth={1.5} aria-hidden="true" />
            </div>
            <h3 className="font-heading font-bold text-[16px] uppercase text-[var(--color-text-hero-main)] mb-[10px]">{t.why2Title}</h3>
            <p className="text-[14px] text-[var(--color-text-body)]">{t.why2Desc}</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="mb-[20px] text-[var(--color-brand-purple)]">
              <Gift size={40} strokeWidth={1.5} aria-hidden="true" />
            </div>
            <h3 className="font-heading font-bold text-[16px] uppercase text-[var(--color-text-hero-main)] mb-[10px]">{t.why3Title}</h3>
            <p className="text-[14px] text-[var(--color-text-body)]">{t.why3Desc}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    { q: t.faqQ1, a: t.faqA1 },
    { q: t.faqQ2, a: t.faqA2 },
    { q: t.faqQ3, a: t.faqA3 },
    { q: t.faqQ4, a: t.faqA4 },
    { q: t.faqQ5, a: t.faqA5 },
    { q: t.faqQ6, a: t.faqA6 },
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="bg-[var(--color-bg-light)] py-[80px]">
      <div className="max-w-[800px] mx-auto px-5">
        <div className="text-center mb-[40px]">
          <h2 className="font-heading font-bold text-[26px] md:text-[32px] uppercase text-[var(--color-text-heading)]">{t.faqHeading}</h2>
        </div>
        <div className="space-y-[10px]">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="bg-white border border-[var(--color-border-card)] rounded-[4px] overflow-hidden">
                <button
                  className="w-full px-[20px] py-[15px] flex items-center justify-between text-left focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-purple)]"
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span className="font-bold text-[16px] text-[var(--color-text-hero-main)]">{faq.q}</span>
                  <span className="text-[var(--color-brand-purple)] ml-4 flex-shrink-0">
                    {isOpen ? <Minus size={20} aria-hidden="true" /> : <Plus size={20} aria-hidden="true" />}
                  </span>
                </button>
                <div 
                  id={`faq-answer-${index}`} 
                  className={`px-[20px] pb-[15px] text-[14px] text-[var(--color-text-body)] ${isOpen ? 'block' : 'hidden'}`}
                >
                  <p>{faq.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const ClosingCTA = () => {
  return (
    <section className="py-[80px] bg-white text-center">
      <div className="max-w-[800px] mx-auto px-5 flex flex-col items-center">
        <h2 className="font-heading font-bold text-[26px] md:text-[32px] uppercase text-[var(--color-text-heading)] mb-[10px]">{t.closingHeading}</h2>
        <p className="text-[16px] text-[var(--color-text-body)] mb-[30px]">{t.closingSub}</p>
        <Link to="/s/ai_site_builder" className="inline-flex items-center justify-center font-heading font-bold uppercase text-[14px] h-[44px] px-[24px] rounded-[4px] bg-ai-gradient text-white hover:opacity-90 transition-opacity min-w-[240px]">
          {t.closingCta}
        </Link>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-[#1A1A1A] text-white py-[60px]">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-[40px] mb-[60px]">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-1 font-heading text-xl tracking-tight text-white mb-4">
              <span className="lowercase font-bold">strikingly</span>
            </Link>
          </div>
          <div>
            <h4 className="font-bold text-[14px] mb-[20px] uppercase tracking-wider text-gray-400">Product</h4>
            <ul className="space-y-[10px] text-[14px] text-gray-300">
              <li><Link to="/templates" className="hover:text-white transition-colors">Templates</Link></li>
              <li><Link to="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-[14px] mb-[20px] uppercase tracking-wider text-gray-400">Company</h4>
            <ul className="space-y-[10px] text-[14px] text-gray-300">
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/blog" className="hover:text-white transition-colors">Blog</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-[14px] mb-[20px] uppercase tracking-wider text-gray-400">Support</h4>
            <ul className="space-y-[10px] text-[14px] text-gray-300">
              <li><Link to="/support" className="hover:text-white transition-colors">Help Center</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-[14px] mb-[20px] uppercase tracking-wider text-gray-400">Legal</h4>
            <ul className="space-y-[10px] text-[14px] text-gray-300">
              <li><Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-[20px] text-center text-[12px] text-gray-500">
          <p>© {new Date().getFullYear()} Strikingly. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

const GeneratorsHub = () => {
  return (
    <div className="font-body text-[var(--color-text-body)] bg-white min-h-screen">
      <TopBar />
      <Breadcrumb />
      
      <main>
        <HeroSection />
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
};

export default GeneratorsHub;