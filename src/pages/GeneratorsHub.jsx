import React, { useState, useMemo, useEffect } from 'react';
import { Search, ArrowRight, ChevronDown, ChevronUp, Globe, Layout, Palette, PenTool, ShoppingCart, Link } from 'lucide-react';
import { generators, featuredGenerators, categories } from '../data/generators';
import strings from '../strings.en.js';

const CategoryIcon = ({ slug, className }) => {
  switch (slug) {
    case 'websites': return <Globe className={className} />;
    case 'landing-pages': return <Layout className={className} />;
    case 'portfolios': return <Palette className={className} />;
    case 'blogs': return <PenTool className={className} />;
    case 'stores': return <ShoppingCart className={className} />;
    case 'link-in-bio': return <Link className={className} />;
    default: return <Globe className={className} />;
  }
};

const Header = () => (
  <header className="sticky top-0 z-50 bg-white border-b border-divider">
    <div className="max-w-[1200px] mx-auto px-5 h-[60px] flex items-center justify-between">
      <div className="flex items-center gap-2">
        <span className="font-josefin font-bold text-xl uppercase tracking-tighter">
          Strikingly <span className="ai-gradient-text">AI</span>
        </span>
      </div>
    </div>
  </header>
);

const Breadcrumb = () => (
  <nav aria-label="Breadcrumb" className="max-w-[1200px] mx-auto px-5 py-4">
    <ol className="flex items-center gap-2 text-[12px] text-body-gray">
      <li>
        <a href="/" className="hover:text-brand-purple">Strikingly</a>
      </li>
      <li aria-hidden="true" className="text-gray-400">/</li>
      <li className="font-medium text-heading-gray">AI Generators</li>
    </ol>
  </nav>
);

const Hero = () => (
  <section className="max-w-[1200px] mx-auto px-5 py-[60px] md:py-[80px] grid md:grid-cols-2 gap-10 items-center">
    <div className="order-2 md:order-1">
      <h1 className="text-[32px] md:text-[48px] font-josefin leading-tight text-dark-gray mb-6">
        {strings.hero.h1Line1}<br />
        <span className="ai-gradient-text">{strings.hero.h1Line2}</span>
      </h1>
      <p className="text-[14px] md:text-[16px] text-body-gray mb-8 max-w-[480px]">
        {strings.hero.subheadline}
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <a 
          href="/s/ai_site_builder" 
          className="h-[44px] px-8 ai-gradient-bg text-white font-josefin font-bold flex items-center justify-center rounded-sm text-[14px]"
        >
          {strings.hero.primaryCTA}
        </a>
        <a 
          href="#all-generators" 
          className="h-[44px] px-8 border border-brand-purple text-brand-purple font-josefin font-bold flex items-center justify-center rounded-sm text-[14px] hover:bg-light-bg"
        >
          {strings.hero.secondaryCTA}
        </a>
      </div>
    </div>
    <div className="order-1 md:order-2">
      <div className="bg-light-bg rounded-lg p-6 aspect-[4/3] flex items-center justify-center border border-divider">
        <svg width="100%" height="100%" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <rect x="50" y="50" width="300" height="200" rx="4" fill="white" stroke="#E2E4E7" strokeWidth="2"/>
          <rect x="50" y="50" width="300" height="40" rx="4" fill="#F4F6F8" stroke="#E2E4E7" strokeWidth="2"/>
          <circle cx="75" cy="70" r="6" fill="#CB0C9F" fillOpacity="0.2"/>
          <circle cx="95" cy="70" r="6" fill="#7671FF" fillOpacity="0.2"/>
          <rect x="70" y="110" width="120" height="12" rx="2" fill="#E2E4E7"/>
          <rect x="70" y="130" width="220" height="8" rx="2" fill="#F4F6F8"/>
          <rect x="70" y="145" width="220" height="8" rx="2" fill="#F4F6F8"/>
          <rect x="70" y="160" width="180" height="8" rx="2" fill="#F4F6F8"/>
          <rect x="220" y="110" width="110" height="80" rx="4" fill="#F4F6F8" stroke="#E2E4E7"/>
        </svg>
      </div>
    </div>
  </section>
);

const FeaturedSection = () => (
  <section className="bg-light-bg py-[60px] md:py-[80px]">
    <div className="max-w-[1200px] mx-auto px-5">
      <h2 className="text-[26px] md:text-[32px] text-heading-gray mb-2">{strings.featured.title}</h2>
      <p className="text-body-gray mb-8">{strings.featured.subtitle}</p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {featuredGenerators.map((gen, idx) => (
          <a 
            key={idx} 
            href={`/generators/${gen.slug}`}
            className="group bg-white p-5 border border-card-border rounded-sm hover:-translate-y-1 hover:border-brand-purple hover:shadow-md transition-all duration-200"
          >
            <div className="inline-block px-1.5 py-0.5 border border-brand-purple text-brand-purple text-[11px] font-josefin font-bold rounded-sm mb-4 uppercase">
              {gen.category}
            </div>
            <h3 className="text-heading-gray font-josefin font-bold text-[18px] mb-2 group-hover:text-brand-purple">
              {gen.name}
            </h3>
            <p className="text-body-gray text-[13px]">{gen.description}</p>
          </a>
        ))}
      </div>
    </div>
  </section>
);

const BrowseByCategory = () => (
  <section className="py-[60px] md:py-[80px]">
    <div className="max-w-[1200px] mx-auto px-5">
      <h2 className="text-[26px] md:text-[32px] text-heading-gray mb-10 text-center">{strings.browseByCategory.title}</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {categories.map((cat, idx) => (
          <a 
            key={idx} 
            href={`#${cat.slug}`}
            className="group bg-white p-6 border border-card-border rounded-sm flex flex-col items-center text-center hover:border-brand-purple hover:shadow-md transition-all duration-200"
          >
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-light-bg text-brand-purple mb-4 group-hover:bg-brand-purple group-hover:text-white transition-colors">
              <CategoryIcon slug={cat.slug} className="w-6 h-6" />
            </div>
            <h3 className="text-[16px] font-josefin font-bold text-heading-gray group-hover:text-brand-purple mb-2">
              {cat.title}
            </h3>
            <p className="text-body-gray text-[13px] mb-4">{cat.description}</p>
            <ArrowRight className="w-4 h-4 text-brand-purple group-hover:translate-x-1 transition-transform" />
          </a>
        ))}
      </div>
    </div>
  </section>
);

const AllGenerators = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedSections, setExpandedSections] = useState({});

  const filteredData = useMemo(() => {
    const query = searchQuery.toLowerCase();
    if (!query) return categories.map(cat => ({
      ...cat,
      items: generators.filter(g => g.categoryId === cat.slug)
    }));

    return categories.map(cat => {
      const items = generators.filter(g => 
        g.categoryId === cat.slug && (
          g.name.toLowerCase().includes(query) || 
          g.description.toLowerCase().includes(query)
        )
      );
      return items.length > 0 ? { ...cat, items } : null;
    }).filter(Boolean);
  }, [searchQuery]);

  const toggleSection = (catSlug) => {
    setExpandedSections(prev => ({ ...prev, [catSlug]: !prev[catSlug] }));
  };

  const totalResults = filteredData.reduce((acc, cat) => acc + cat.items.length, 0);

  return (
    <section id="all-generators" className="py-[60px] md:py-[80px]">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="text-center mb-12">
          <h2 className="text-[26px] md:text-[32px] text-heading-gray mb-2">{strings.allGenerators.title}</h2>
          <p className="text-body-gray">{strings.allGenerators.subtitle}</p>
        </div>

        <div className="mb-12">
          <div className="relative max-w-[480px] mx-auto">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input 
              type="text"
              placeholder={strings.allGenerators.searchPlaceholder}
              className="w-full h-[44px] pl-10 pr-4 border border-card-border rounded-sm focus:outline-none focus:border-brand-purple"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search generators"
            />
            <div className="mt-2 text-[12px] text-body-gray text-center">
              {totalResults} {strings.allGenerators.resultsMatch}
            </div>
          </div>
        </div>

        {filteredData.length > 0 ? (
          <div className="space-y-[60px]">
            {filteredData.map((cat) => {
              const itemsToShow = searchQuery || expandedSections[cat.slug] ? cat.items : cat.items.slice(0, 3);
              const hasMore = cat.items.length > 3 && !searchQuery;

              return (
                <div key={cat.slug} id={cat.slug} className="scroll-mt-[100px]">
                  <div className="mb-6">
                    <h3 className="text-[20px] font-bold text-heading-gray flex items-center gap-2">
                       <CategoryIcon slug={cat.slug} className="w-5 h-5 text-brand-purple" />
                       {cat.title}
                    </h3>
                    <p className="text-[13px] text-body-gray">{cat.description}</p>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {itemsToShow.map((item, idx) => (
                      <a 
                        key={idx} 
                        href={`/generators/${item.slug}`}
                        className="group bg-white p-5 border border-card-border rounded-sm hover:border-brand-purple hover:shadow-md transition-all duration-200"
                      >
                        <div className="aspect-[16/10] bg-light-bg rounded-sm mb-4 overflow-hidden flex items-center justify-center border border-divider">
                          <CategoryIcon slug={cat.slug} className="w-8 h-8 text-gray-300 opacity-50" />
                        </div>
                        <h4 className="text-[16px] font-josefin font-bold text-heading-gray group-hover:text-brand-purple mb-2">
                          {item.name}
                        </h4>
                        <p className="text-body-gray text-[13px]">{item.description}</p>
                      </a>
                    ))}
                  </div>

                  {hasMore && (
                    <div className="mt-8 flex justify-center">
                      <button 
                        onClick={() => toggleSection(cat.slug)}
                        className="flex items-center gap-2 text-brand-purple font-josefin font-bold text-[14px] hover:underline"
                        aria-expanded={expandedSections[cat.slug]}
                        aria-controls={`${cat.slug}-grid`}
                      >
                        {expandedSections[cat.slug] ? 'Show less' : `Show all ${cat.items.length} ${cat.title}`}
                        {expandedSections[cat.slug] ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </button>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-20 bg-light-bg rounded-lg border border-divider border-dashed">
            <p className="text-body-gray mb-4">{strings.allGenerators.noMatch}</p>
            <div className="flex flex-col items-center gap-4">
              <button 
                onClick={() => setSearchQuery('')}
                className="text-brand-purple font-josefin font-bold hover:underline"
              >
                {strings.allGenerators.clearSearch}
              </button>
              <a href="/s/ai_site_builder" className="text-[14px] text-brand-purple hover:underline">
                Can't find it? Start with our AI builder.
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

const HowItWorks = () => (
  <section className="bg-white py-[60px] md:py-[80px] border-t border-divider">
    <div className="max-w-[1200px] mx-auto px-5">
      <h2 className="text-[26px] md:text-[32px] text-heading-gray mb-12 text-center">HOW IT WORKS</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-20">
        {[
          { step: 1, title: 'PICK A GENERATOR', desc: 'Browse by category or search to find one that fits your goal.' },
          { step: 2, title: 'DESCRIBE YOUR SITE', desc: 'Tell our AI builder about your business in a sentence or two.' },
          { step: 3, title: 'GENERATE AND PUBLISH', desc: 'Get a fully built site in seconds. Customize anything, then go live.' }
        ].map((item, idx) => (
          <div key={idx} className="flex flex-col items-center text-center">
            <div className="w-10 h-10 bg-brand-purple text-white font-bold rounded-full flex items-center justify-center mb-6">
              {item.step}
            </div>
            <h3 className="font-josefin font-bold text-heading-gray mb-4">{item.title}</h3>
            <p className="text-body-gray text-[14px]">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const WhyStrikingly = () => (
  <section className="bg-light-bg py-[60px] md:py-[80px]">
    <div className="max-w-[1200px] mx-auto px-5">
      <h2 className="text-[26px] md:text-[32px] text-heading-gray mb-12 text-center">WHY STRIKINGLY</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {[
          { icon: <Globe />, title: 'LIVE IN SECONDS', desc: 'Describe your site, we build it. No setup, no learning curve.' },
          { icon: <Layout />, title: 'MOBILE BY DEFAULT', desc: 'Every generator produces responsive sites that work on any device.' },
          { icon: <ShoppingCart />, title: 'FREE TO START', desc: 'Generate, customize, and publish without a credit card.' }
        ].map((item, idx) => (
          <div key={idx} className="bg-white p-8 border border-divider rounded-sm flex flex-col items-center text-center">
            <div className="text-brand-purple mb-6">{React.cloneElement(item.icon, { className: 'w-8 h-8' })}</div>
            <h3 className="font-josefin font-bold text-heading-gray mb-4">{item.title}</h3>
            <p className="text-body-gray text-[14px]">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const faqs = [
    { q: strings.faq.q1, a: "An AI site generator is a specialized tool that uses large language models and design logic to create a website based on a brief description. Instead of starting from a blank page or a static template, you provide a few sentences about your goal, and the AI handles the layout, copywriting, and image selection automatically." },
    { q: strings.faq.q2, a: "A template is a fixed layout where you manually replace dummy content. A generator is dynamic; it builds a custom structure based on your specific input. While templates offer a starting point, generators eliminate the initial blank-canvas anxiety by doing the first draft for you." },
    { q: strings.faq.q3, a: "Yes! Every generator listed on this page is free to use. You can generate your initial site, customize it in our editor, and even publish on a strikingly.com subdomain without any upfront cost." },
    { q: strings.faq.q4, a: "You can build almost anything! From professional business websites and focused landing pages to creative portfolios, personal blogs, online stores, and link-in-bio pages. If your industry or use case isn't listed, our general AI Builder can still handle it." },
    { q: strings.faq.q5, a: "Absolutely. The generator produces a fully editable version of your site in the Strikingly editor. You can change text, swap images, add new sections, adjust colors, and modify the layout as much as you like before and after publishing." },
    { q: strings.faq.q6, a: "Yes. Every site produced by our generators is fully responsive. We prioritize mobile performance and ensure that your content looks great on smartphones, tablets, and desktops automatically." }
  ];

  return (
    <section className="py-[60px] md:py-[80px]">
      <div className="max-w-[1200px] mx-auto px-5 max-w-[800px]">
        <h2 className="text-[26px] md:text-[32px] text-heading-gray mb-10 text-center">FREQUENTLY ASKED QUESTIONS</h2>
        <div className="border-t border-divider">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border-b border-divider">
              <button 
                onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
                className="w-full py-5 flex items-center justify-between text-left focus:outline-none"
                aria-expanded={openIndex === idx}
                aria-controls={`faq-answer-${idx}`}
              >
                <span className="font-bold text-heading-gray text-[16px]">{faq.q}</span>
                {openIndex === idx ? <ChevronUp className="w-5 h-5 text-brand-purple" /> : <ChevronDown className="w-5 h-5 text-brand-purple" />}
              </button>
              <div 
                id={`faq-answer-${idx}`}
                className={`overflow-hidden transition-all duration-300 ${openIndex === idx ? 'max-h-[500px] pb-5' : 'max-h-0'}`}
              >
                <p className="text-body-gray text-[14px] leading-relaxed italic">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ClosingCTA = () => (
  <section className="py-[80px] text-center bg-white">
    <div className="max-w-[1200px] mx-auto px-5">
      <h2 className="text-[32px] md:text-[40px] text-dark-gray mb-4">READY TO BUILD?</h2>
      <p className="text-body-gray mb-8">Pick a generator above, or jump straight into our AI builder.</p>
      <a 
        href="/s/ai_site_builder" 
        className="inline-flex h-[44px] px-10 ai-gradient-bg text-white font-josefin font-bold items-center justify-center rounded-sm text-[14px] hover:shadow-lg transition-shadow"
      >
        START WITH AI BUILDER
      </a>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-light-bg py-[60px] border-t border-divider">
    <div className="max-w-[1200px] mx-auto px-5">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-10">
        <div className="col-span-2 md:col-span-1">
          <span className="font-josefin font-bold text-xl uppercase tracking-tighter">Strikingly</span>
        </div>
        <div>
          <h5 className="font-bold text-[12px] text-heading-gray mb-4 uppercase">Product</h5>
          <ul className="space-y-2 text-[13px] text-body-gray">
            <li><a href="/templates" className="hover:text-brand-purple">Templates</a></li>
            <li><a href="/pricing" className="hover:text-brand-purple">Pricing</a></li>
            <li><a href="/about" className="hover:text-brand-purple">About</a></li>
          </ul>
        </div>
        <div>
          <h5 className="font-bold text-[12px] text-heading-gray mb-4 uppercase">Resources</h5>
          <ul className="space-y-2 text-[13px] text-body-gray">
            <li><a href="/support" className="hover:text-brand-purple">Support</a></li>
            <li><a href="/blog" className="hover:text-brand-purple">Blog</a></li>
          </ul>
        </div>
        <div>
          <h5 className="font-bold text-[12px] text-heading-gray mb-4 uppercase">Legal</h5>
          <ul className="space-y-2 text-[13px] text-body-gray">
            <li><a href="/terms" className="hover:text-brand-purple">Terms</a></li>
            <li><a href="/privacy" className="hover:text-brand-purple">Privacy</a></li>
          </ul>
        </div>
      </div>
      <div className="pt-8 border-t border-divider flex flex-col md:row items-center justify-between gap-4">
        <p className="text-[12px] text-body-gray">© 2026 Strikingly. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default function GeneratorsHub() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Breadcrumb />
      <Hero />
      <FeaturedSection />
      <BrowseByCategory />
      <AllGenerators />
      <HowItWorks />
      <WhyStrikingly />
      <FAQAccordion />
      <ClosingCTA />
      <Footer />
    </main>
  );
}
