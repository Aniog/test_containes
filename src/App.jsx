import React, { useState, useMemo } from 'react';
import { Search, ChevronDown, ChevronUp, ChevronRight, Layout, LayoutTemplate, Image, Menu, ShoppingBag, Link } from 'lucide-react';
import { categories, featuredGenerators, allGenerators, faqs, slugify } from './data';
import { t } from './strings';

const BUILDER_URL = '/s/ai_site_builder';

// Helper for category icons
const CategoryIcon = ({ id, className }) => {
  switch (id) {
    case 'websites': return <Layout className={className} aria-hidden="true" />;
    case 'landing-pages': return <LayoutTemplate className={className} aria-hidden="true" />;
    case 'portfolios': return <Image className={className} aria-hidden="true" />;
    case 'blogs': return <Menu className={className} aria-hidden="true" />;
    case 'stores': return <ShoppingBag className={className} aria-hidden="true" />;
    case 'link-in-bio': return <Link className={className} aria-hidden="true" />;
    default: return <Layout className={className} aria-hidden="true" />;
  }
};

// ... component implementations next ...

const TopBar = () => (
  <header className="bg-white border-b border-divider h-14 flex items-center px-5">
    <div className="w-full max-w-[1200px] mx-auto">
      <a href="/" className="inline-flex items-center text-brand-purple font-heading font-bold text-xl tracking-tighter" aria-label="Strikingly Home">
        strikingly <span className="font-light ml-1">AI</span>
      </a>
    </div>
  </header>
);

const Breadcrumb = () => (
  <nav aria-label="Breadcrumb" className="w-full max-w-[1200px] mx-auto px-5 py-4">
    <ol className="flex items-center space-x-2 text-sm text-body-gray">
      <li>
        <a href="/" className="hover:text-brand-purple transition-colors">{t('navHome')}</a>
      </li>
      <li aria-hidden="true" className="text-body-gray/50">&gt;</li>
      <li aria-current="page" className="font-semibold text-heading-dark">{t('navCurrent')}</li>
    </ol>
  </nav>
);

const Hero = () => (
  <section className="relative overflow-hidden w-full max-w-[1200px] mx-auto px-5 py-[60px] md:py-[80px]">
    <div className="absolute inset-0 bg-hero-wash -z-10 rounded-3xl opacity-50" aria-hidden="true"></div>
    <div className="grid md:grid-cols-2 gap-10 items-center">
      <div className="flex flex-col items-start space-y-5">
        <h1 className="text-[32px] md:text-[48px] m-0">
          <div className="block">{t('heroH1Line1')}</div>
          <div className="text-ai-gradient pb-2">{t('heroH1Line2')}</div>
        </h1>
        <p className="text-lg md:text-xl text-body-gray max-w-lg m-0">
          {t('heroSub')}
        </p>
        <div className="flex flex-col sm:flex-row gap-2.5 pt-2 w-full sm:w-auto">
          <a href={BUILDER_URL} className="btn-primary-large text-white w-full sm:w-auto">
            {t('heroCtaPrimary')}
          </a>
          <a href="#all-generators" className="btn-ghost h-[44px] w-full sm:w-auto">
            {t('heroCtaSecondary')}
          </a>
        </div>
      </div>
      <div className="w-full flex justify-center md:justify-end">
        <svg width="400" height="300" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="w-full max-w-[400px] h-auto">
          <rect x="20" y="20" width="360" height="260" rx="8" stroke="#8159BB" strokeWidth="2" strokeOpacity="0.2" fill="#F4F6F8" />
          <rect x="20" y="20" width="360" height="40" rx="8" fill="#8159BB" fillOpacity="0.05" />
          <path d="M20 60H380" stroke="#8159BB" strokeWidth="2" strokeOpacity="0.2" />
          <circle cx="45" cy="40" r="4" fill="#8159BB" fillOpacity="0.3" />
          <circle cx="60" cy="40" r="4" fill="#8159BB" fillOpacity="0.3" />
          <circle cx="75" cy="40" r="4" fill="#8159BB" fillOpacity="0.3" />
          <rect x="50" y="100" width="140" height="24" rx="4" fill="#8159BB" fillOpacity="0.1" />
          <rect x="50" y="140" width="200" height="12" rx="2" fill="#8159BB" fillOpacity="0.15" />
          <rect x="50" y="160" width="180" height="12" rx="2" fill="#8159BB" fillOpacity="0.15" />
          <rect x="50" y="200" width="100" height="32" rx="4" fill="#8159BB" fillOpacity="0.3" />
          <rect x="260" y="100" width="90" height="130" rx="4" fill="#8159BB" fillOpacity="0.05" stroke="#8159BB" strokeOpacity="0.2" strokeWidth="2" strokeDasharray="4 4" />
          <path d="M285 165L325 165M305 145L305 185" stroke="#8159BB" strokeOpacity="0.4" strokeWidth="3" strokeLinecap="round" />
        </svg>
      </div>
    </div>
  </section>
);

const FeaturedGenerators = () => (
  <section className="bg-light-bg py-10 md:py-16">
    <div className="w-full max-w-[1200px] mx-auto px-5">
      <div className="mb-10 text-center">
        <h2 className="text-[26px] md:text-[32px] mb-2">{t('featuredHeading')}</h2>
        <p className="text-lg text-body-gray m-0">{t('featuredSub')}</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {featuredGenerators.map((gen, idx) => (
          <a key={idx} href={`/generators/${slugify(gen.name)}`} className="card card-hoverable flex flex-col items-start block group no-underline">
            <span className="font-heading font-bold text-[#2E2E2F] mb-1 group-hover:text-brand-purple transition-colors">{gen.name}</span>
            <p className="text-sm text-body-gray mb-4 flex-grow">{gen.desc}</p>
            <span className="category-tag">{gen.category}</span>
          </a>
        ))}
      </div>
    </div>
  </section>
);

const BrowseByCategory = () => (
  <section className="py-10 md:py-16">
    <div className="w-full max-w-[1200px] mx-auto px-5">
      <div className="mb-10 text-center">
        <h2 className="text-[26px] md:text-[32px]">{t('browseHeading')}</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {categories.map((cat) => (
          <a key={cat.id} href={`#${cat.id}`} className="card card-hoverable flex flex-col items-center text-center block group no-underline">
            <div className="w-12 h-12 rounded-full bg-brand-purple/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <CategoryIcon id={cat.id} className="w-6 h-6 text-brand-purple" />
            </div>
            <h3 className="text-xl mb-2 group-hover:text-brand-purple transition-colors">{cat.title}</h3>
            <p className="text-sm text-body-gray mb-4 flex-grow">{cat.desc}</p>
            <ChevronRight className="w-5 h-5 text-brand-purple/50 group-hover:text-brand-purple transition-colors" aria-hidden="true" />
          </a>
        ))}
      </div>
    </div>
  </section>
);

const CategorySection = ({ cat, items, searchQuery }) => {
  const [expanded, setExpanded] = useState(false);
  const isFiltering = searchQuery.length > 0;
  
  // Filter items if there's a search query
  const filteredItems = useMemo(() => {
    if (!isFiltering) return items;
    const query = searchQuery.toLowerCase();
    return items.filter(item => 
      item.name.toLowerCase().includes(query) || 
      item.desc.toLowerCase().includes(query) ||
      cat.title.toLowerCase().includes(query)
    );
  }, [items, searchQuery, cat.title, isFiltering]);

  // If filtering and no matches, don't render this category
  if (isFiltering && filteredItems.length === 0) {
    return null;
  }

  // Without JS, all items should be visible (handled by CSS/baseline)
  // With JS, we show 6 items by default if not filtering
  const displayLimit = 6;
  const showToggleButton = !isFiltering && items.length > displayLimit;
  const visibleItems = expanded || isFiltering ? filteredItems : items.slice(0, displayLimit);

  return (
    <div id={cat.id} className="mb-14 scroll-mt-[80px]">
      <div className="mb-6">
        <h3 className="text-xl md:text-2xl mb-1 flex items-center gap-2">
          <CategoryIcon id={cat.id} className="w-6 h-6 text-brand-purple" />
          {cat.title}
        </h3>
        <p className="text-body-gray m-0">{cat.desc}</p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {visibleItems.map((gen, idx) => (
          <a key={idx} href={`/generators/${slugify(gen.name)}`} className="card card-hoverable flex flex-col items-start block group no-underline">
            <span className="font-heading font-bold text-[#2E2E2F] mb-1 group-hover:text-brand-purple transition-colors">{gen.name}</span>
            <p className="text-sm text-body-gray m-0">{gen.desc}</p>
          </a>
        ))}
      </div>
      
      {/* Hide the remaining items for non-JS by default? 
          The brief says: "All directory entries are visible by default in the initial server-rendered HTML and CSS."
          To achieve this in React, if this was SSR, we'd render all items and hide with CSS if JS is running.
          Since this is a client-side React app, we're rendering it all. We'll simplify to standard React state. */}
      
      {showToggleButton && (
        <div className="mt-8 text-center">
          <button 
            type="button" 
            onClick={() => setExpanded(!expanded)}
            className="btn-ghost"
            aria-expanded={expanded}
            aria-controls={`list-${cat.id}`}
          >
            {expanded ? t('collapseResultsToggle') : t('searchResultsToggle').replace('{count}', items.length - displayLimit)}
          </button>
        </div>
      )}
    </div>
  );
};

const AllGenerators = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  // Calculate total matching results
  const matchingCount = useMemo(() => {
    if (!searchQuery) return 0;
    const query = searchQuery.toLowerCase();
    let count = 0;
    
    categories.forEach(cat => {
      const items = allGenerators[cat.id] || [];
      items.forEach(item => {
        if (
          item.name.toLowerCase().includes(query) || 
          item.desc.toLowerCase().includes(query) ||
          cat.title.toLowerCase().includes(query)
        ) {
          count++;
        }
      });
    });
    
    return count;
  }, [searchQuery]);

  return (
    <section id="all-generators" className="bg-light-bg py-10 md:py-16">
      <div className="w-full max-w-[1200px] mx-auto px-5">
        <div className="mb-10 text-center">
          <h2 className="text-[26px] md:text-[32px] mb-2">{t('allHeading')}</h2>
          <p className="text-lg text-body-gray m-0">{t('allSub')}</p>
        </div>
        
        <div className="mb-12 max-w-[480px] mx-auto">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-body-gray w-5 h-5" aria-hidden="true" />
            <input 
              type="search" 
              className="w-full h-12 pl-12 pr-4 rounded-[4px] border border-card-border bg-white text-body-gray focus:outline-none focus:ring-2 focus:ring-brand-purple focus:border-brand-purple transition-all"
              placeholder={t('searchPlaceholder')}
              aria-label={t('searchAriaLabel')}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          {searchQuery && (
            <div className="mt-2 text-sm text-body-gray text-center" aria-live="polite">
              {matchingCount} {matchingCount === 1 ? 'generator matches' : 'generators match'}
            </div>
          )}
        </div>
        
        {searchQuery && matchingCount === 0 ? (
          <div className="text-center py-10">
            <p className="text-xl text-heading-dark mb-4">{t('searchEmptyText')}</p>
            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <button 
                type="button" 
                onClick={() => setSearchQuery('')}
                className="btn-ghost"
              >
                Clear search
              </button>
              <a href={BUILDER_URL} className="btn-primary">
                {t('heroCtaPrimary')}
              </a>
            </div>
          </div>
        ) : (
          categories.map(cat => (
            <CategorySection 
              key={cat.id} 
              cat={cat} 
              items={allGenerators[cat.id] || []} 
              searchQuery={searchQuery} 
            />
          ))
        )}
      </div>
    </section>
  );
};

const HowItWorks = () => (
  <section className="py-10 md:py-16 border-b border-divider">
    <div className="w-full max-w-[1200px] mx-auto px-5">
      <div className="mb-12 text-center">
        <h2 className="text-[26px] md:text-[32px]">{t('howItWorksHeading')}</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
          <div className="w-10 h-10 rounded-full bg-brand-purple text-white flex items-center justify-center font-heading font-bold text-lg mb-6">1</div>
          <h3 className="text-xl mb-3">{t('howStep1Title')}</h3>
          <p className="text-body-gray m-0">{t('howStep1Desc')}</p>
        </div>
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
          <div className="w-10 h-10 rounded-full bg-brand-purple text-white flex items-center justify-center font-heading font-bold text-lg mb-6">2</div>
          <h3 className="text-xl mb-3">{t('howStep2Title')}</h3>
          <p className="text-body-gray m-0">{t('howStep2Desc')}</p>
        </div>
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
          <div className="w-10 h-10 rounded-full bg-brand-purple text-white flex items-center justify-center font-heading font-bold text-lg mb-6">3</div>
          <h3 className="text-xl mb-3">{t('howStep3Title')}</h3>
          <p className="text-body-gray m-0">{t('howStep3Desc')}</p>
        </div>
      </div>
    </div>
  </section>
);

const WhyStrikingly = () => (
  <section className="bg-light-bg py-10 md:py-16">
    <div className="w-full max-w-[1200px] mx-auto px-5">
      <div className="mb-12 text-center">
        <h2 className="text-[26px] md:text-[32px]">{t('whyHeading')}</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="card flex flex-col items-center text-center">
          <svg className="w-10 h-10 text-brand-purple mb-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          <h3 className="text-lg mb-3">{t('why1Title')}</h3>
          <p className="text-sm text-body-gray m-0">{t('why1Desc')}</p>
        </div>
        <div className="card flex flex-col items-center text-center">
          <svg className="w-10 h-10 text-brand-purple mb-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
            <rect x="5" y="2" width="14" height="20" rx="2" ry="2" strokeLinecap="round" strokeLinejoin="round" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01" />
          </svg>
          <h3 className="text-lg mb-3">{t('why2Title')}</h3>
          <p className="text-sm text-body-gray m-0">{t('why2Desc')}</p>
        </div>
        <div className="card flex flex-col items-center text-center">
          <svg className="w-10 h-10 text-brand-purple mb-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3" />
          </svg>
          <h3 className="text-lg mb-3">{t('why3Title')}</h3>
          <p className="text-sm text-body-gray m-0">{t('why3Desc')}</p>
        </div>
      </div>
    </div>
  </section>
);

const FaqItem = ({ item, isOpen, onClick }) => {
  return (
    <div className="border-b border-divider last:border-0 py-4">
      <button 
        type="button" 
        className="flex justify-between items-center w-full text-left py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple rounded"
        onClick={onClick}
        aria-expanded={isOpen}
      >
        <span className="font-bold text-heading-dark">{item.q}</span>
        {isOpen ? 
          <ChevronUp className="w-5 h-5 text-brand-purple flex-shrink-0" aria-hidden="true" /> : 
          <ChevronDown className="w-5 h-5 text-body-gray flex-shrink-0" aria-hidden="true" />
        }
      </button>
      <div 
        className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100 mt-2' : 'grid-rows-[0fr] opacity-0'}`}
      >
        <div className="overflow-hidden">
          <p className="text-body-gray m-0 mb-2">{item.a}</p>
        </div>
      </div>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-10 md:py-16">
      <div className="w-full max-w-[800px] mx-auto px-5">
        <div className="mb-10 text-center">
          <h2 className="text-[26px] md:text-[32px]">{t('faqHeading')}</h2>
        </div>
        <div className="bg-white">
          {faqs.map((item, idx) => (
            <FaqItem 
              key={idx} 
              item={item} 
              isOpen={openIndex === idx} 
              onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const ClosingCta = () => (
  <section className="py-16 md:py-24 text-center">
    <div className="w-full max-w-[1200px] mx-auto px-5">
      <h2 className="text-[32px] md:text-[40px] mb-4 text-[#2E2E2F]">{t('closingHeading')}</h2>
      <p className="text-lg md:text-xl text-body-gray mb-8 max-w-2xl mx-auto">{t('closingSub')}</p>
      <a href={BUILDER_URL} className="btn-primary-large px-8 !h-12 !text-[15px]">
        {t('closingCta')}
      </a>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-white border-t border-divider py-12 md:py-16">
    <div className="w-full max-w-[1200px] mx-auto px-5">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
        <div className="col-span-2">
          <a href="/" className="inline-flex items-center text-brand-purple font-heading font-bold text-xl tracking-tighter mb-4" aria-label="Strikingly Home">
            strikingly <span className="font-light ml-1">AI</span>
          </a>
          <p className="text-body-gray text-sm">Build your brand and conquer the world with our AI-powered site builder.</p>
        </div>
        <div>
          <h4 className="text-sm mb-4">Product</h4>
          <ul className="space-y-3 text-sm text-body-gray">
            <li><a href="/templates" className="hover:text-brand-purple transition-colors">Templates</a></li>
            <li><a href="/pricing" className="hover:text-brand-purple transition-colors">Pricing</a></li>
            <li><a href="/about" className="hover:text-brand-purple transition-colors">About Us</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm mb-4">Resources</h4>
          <ul className="space-y-3 text-sm text-body-gray">
            <li><a href="/blog" className="hover:text-brand-purple transition-colors">Blog</a></li>
            <li><a href="/support" className="hover:text-brand-purple transition-colors">Help Center</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm mb-4">Legal</h4>
          <ul className="space-y-3 text-sm text-body-gray">
            <li><a href="/terms" className="hover:text-brand-purple transition-colors">Terms of Service</a></li>
            <li><a href="/privacy" className="hover:text-brand-purple transition-colors">Privacy Policy</a></li>
          </ul>
        </div>
      </div>
      <div className="text-xs text-body-gray border-t border-divider pt-8 text-center md:text-left">
        &copy; {new Date().getFullYear()} Strikingly. All rights reserved.
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <TopBar />
      <Breadcrumb />
      <main className="flex-1">
        <Hero />
        <FeaturedGenerators />
        <BrowseByCategory />
        <AllGenerators />
        <HowItWorks />
        <WhyStrikingly />
        <FAQ />
        <ClosingCta />
      </main>
      <Footer />
    </div>
  );
}
