import React, { useEffect, useRef, useState } from 'react';
import {
  strings,
  categories,
  featuredGenerators,
  getAllGenerators,
  getGeneratorsByCategory,
  getFaqItems,
} from '../data/generators';

const s = strings.en;

function slugify(name) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

/* ─── SVG Illustrations ─── */

function HeroIllustration({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 400 320"
      width="400"
      height="320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect x="60" y="40" width="280" height="220" rx="8" stroke="#C6C9CD" strokeWidth="1.5" fill="#FFFFFF" />
      <rect x="80" y="70" width="120" height="8" rx="4" fill="#E2E4E7" />
      <rect x="80" y="90" width="80" height="8" rx="4" fill="#E2E4E7" />
      <rect x="80" y="115" width="240" height="60" rx="4" fill="#F4F6F8" />
      <rect x="90" y="125" width="100" height="6" rx="3" fill="#C6C9CD" />
      <rect x="90" y="138" width="160" height="6" rx="3" fill="#C6C9CD" />
      <rect x="90" y="151" width="120" height="6" rx="3" fill="#C6C9CD" />
      <rect x="80" y="190" width="70" height="30" rx="4" fill="#F4F6F8" />
      <rect x="165" y="190" width="70" height="30" rx="4" fill="#F4F6F8" />
      <rect x="250" y="190" width="70" height="30" rx="4" fill="#F4F6F8" />
      <circle cx="330" cy="260" r="28" stroke="#8159BB" strokeWidth="1.5" fill="#F4F6F8" opacity="0.5" />
      <path d="M318 260l8 8 16-16" stroke="#8159BB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="60" cy="280" r="20" stroke="#7671FF" strokeWidth="1.5" fill="#F4F6F8" opacity="0.4" />
      <circle cx="340" cy="60" r="16" stroke="#CB0C9F" strokeWidth="1.5" fill="#F4F6F8" opacity="0.3" />
    </svg>
  );
}

function CategoryIllustration({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 48 48"
      width="48"
      height="48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect x="8" y="10" width="32" height="28" rx="4" stroke="#8159BB" strokeWidth="1.5" fill="#F4F6F8" />
      <line x1="14" y1="20" x2="34" y2="20" stroke="#C6C9CD" strokeWidth="1.5" />
      <line x1="14" y1="26" x2="28" y2="26" stroke="#C6C9CD" strokeWidth="1.5" />
      <line x1="14" y1="32" x2="22" y2="32" stroke="#C6C9CD" strokeWidth="1.5" />
    </svg>
  );
}

function CardThumbnail({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 40 40"
      width="40"
      height="40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect x="4" y="6" width="32" height="28" rx="3" stroke="#C6C9CD" strokeWidth="1" fill="#F4F6F8" />
      <line x1="10" y1="14" x2="30" y2="14" stroke="#E2E4E7" strokeWidth="1.5" />
      <line x1="10" y1="19" x2="24" y2="19" stroke="#E2E4E7" strokeWidth="1.5" />
      <line x1="10" y1="24" x2="20" y2="24" stroke="#E2E4E7" strokeWidth="1.5" />
    </svg>
  );
}

function StepCircle({ number }) {
  return (
    <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg shrink-0"
      style={{ background: 'linear-gradient(135deg, #7671FF 0%, #8159BB 100%)' }}>
      {number}
    </div>
  );
}

function WhyIcon({ type }) {
  const paths = {
    bolt: 'M13 2L4.09 13.36A1 1 0 004.83 15H11v7l8.91-11.36A1 1 0 0019.17 9H13V2z',
    mobile: 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z',
    gift: 'M12 8v13m0-13V6a4 4 0 00-4-4 5 5 0 00-5 5c0 2 1 3 3 3h6zm0 0V6a4 4 0 014-4 5 5 0 015 5c0 2-1 3-3 3h-6z',
  };
  return (
    <svg
      viewBox="0 0 24 24"
      width="32"
      height="32"
      fill="none"
      stroke="#8159BB"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={paths[type]} />
    </svg>
  );
}

function ArrowRight({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

function SearchIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#636972" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}

function ChevronDown({ className, style }) {
  return (
    <svg className={className} style={style} viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

/* ─── Components ─── */

function TopBar() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b" style={{ borderColor: '#E2E4E7' }}>
      <div className="container-main h-14 flex items-center">
        <a href="/" className="heading-font text-base tracking-wide" style={{ color: '#2E2E2F' }}>
          <span style={{ color: '#8159BB' }}>strikingly</span> <span className="font-normal">AI</span>
        </a>
      </div>
    </header>
  );
}

function Breadcrumb() {
  return (
    <nav aria-label="Breadcrumb" className="container-main py-3">
      <ol className="flex items-center gap-1 text-sm" style={{ color: '#636972' }}>
        <li>
          <a href="/" className="hover:underline">{s.breadcrumbHome}</a>
        </li>
        <li aria-hidden="true" className="px-1">&gt;</li>
        <li aria-current="page">{s.breadcrumbCurrent}</li>
      </ol>
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden" style={{ padding: '60px 0 80px' }}>
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(circle at 80% 30%, rgba(118,113,255,0.06) 0%, rgba(203,12,159,0.04) 50%, transparent 70%)' }} />
      <div className="container-main relative">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-[28px] md:text-[40px] lg:text-[48px] leading-tight">
              <span className="block" style={{ color: '#2E2E2F' }}>{s.heroH1Line1}</span>
              <span className="block gradient-text">{s.heroH1Line2}</span>
            </h1>
            <p className="mt-5 text-sm md:text-base max-w-md mx-auto md:mx-0" style={{ color: '#636972' }}>
              {s.heroSubheadline}
            </p>
            <div className="mt-7 flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
              <a
                href="/s/ai_site_builder"
                className="inline-flex items-center justify-center rounded gradient-fill heading-font text-sm tracking-wide"
                style={{ height: '44px', padding: '0 24px' }}
              >
                {s.heroCtaPrimary}
              </a>
              <a
                href="#all-generators"
                className="inline-flex items-center justify-center rounded ghost-btn heading-font text-sm tracking-wide"
                style={{ height: '44px', padding: '0 24px' }}
              >
                {s.heroCtaSecondary}
              </a>
            </div>
          </div>
          <div className="shrink-0">
            <HeroIllustration className="w-[280px] h-[224px] md:w-[400px] md:h-[320px]" />
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturedGenerators() {
  return (
    <section className="py-10" style={{ background: '#F4F6F8' }}>
      <div className="container-main">
        <div className="text-center mb-8">
          <h2 className="text-[26px] md:text-[32px]">{s.featuredHeading}</h2>
          <p className="mt-2 text-sm" style={{ color: '#636972' }}>{s.featuredSubheading}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {featuredGenerators.map((g) => (
            <a
              key={g.slug}
              href={`/generators/${g.slug}`}
              className="card-base block"
            >
              <h3 className="text-base leading-snug" style={{ color: '#2E2E2F' }}>{g.name}</h3>
              <p className="mt-1 text-xs" style={{ color: '#636972' }}>{g.description}</p>
              <span className="tag-ghost mt-3">{g.categoryTag}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function BrowseByCategory() {
  return (
    <section className="py-10">
      <div className="container-main">
        <h2 className="text-[26px] md:text-[32px] text-center mb-8">{s.browseByCategoryHeading}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((cat) => (
            <a
              key={cat.id}
              href={`/generators#${cat.id}`}
              className="card-base flex flex-col items-center text-center group"
            >
              <CategoryIllustration className="w-12 h-12 mb-3" />
              <h3 className="text-sm" style={{ color: '#2E2E2F' }}>{cat.name.toUpperCase()}</h3>
              <p className="mt-1 text-xs leading-relaxed" style={{ color: '#636972' }}>{cat.description}</p>
              <ArrowRight className="mt-3 text-brand-purple transition-transform group-hover:translate-x-1" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function AllGenerators() {
  const [query, setQuery] = useState('');
  const [expandedSections, setExpandedSections] = useState({});
  const searchRef = useRef(null);
  const jsEnabledRef = useRef(false);

  useEffect(() => {
    jsEnabledRef.current = true;
    // Progressive enhancement: mark grids for JS collapse
    document.querySelectorAll('.generator-grid').forEach((grid) => {
      grid.classList.add('js-enhanced');
    });
  }, []);

  const normalizedQuery = query.trim().toLowerCase();
  const allGenerators = getAllGenerators();

  const filteredByCategory = categories.map((cat) => {
    const gens = getGeneratorsByCategory(cat.id).filter((g) => {
      if (!normalizedQuery) return true;
      const hay = `${g.name} ${g.description} ${g.categoryName}`.toLowerCase();
      return hay.includes(normalizedQuery);
    });
    return { ...cat, generators: gens };
  }).filter((cat) => cat.generators.length > 0);

  const matchCount = filteredByCategory.reduce((sum, cat) => sum + cat.generators.length, 0);

  const toggleSection = (id) => {
    setExpandedSections((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section id="all-generators" className="py-10" style={{ background: '#F4F6F8' }}>
      <div className="container-main">
        <div className="text-center mb-6">
          <h2 className="text-[26px] md:text-[32px]">{s.allGeneratorsHeading}</h2>
          <p className="mt-2 text-sm" style={{ color: '#636972' }}>{s.allGeneratorsSubheading}</p>
        </div>

        <div className="max-w-[480px] mx-auto mb-6 relative">
          <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            ref={searchRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={s.searchPlaceholder}
            aria-label={s.searchLabel}
            className="w-full h-11 pl-10 pr-4 rounded border text-sm bg-white focus:outline-none focus:border-brand-purple"
            style={{ borderColor: '#C6C9CD', color: '#2E2E2F' }}
          />
        </div>

        {normalizedQuery && (
          <p className="text-center text-xs mb-6" style={{ color: '#636972' }}>
            {s.searchResultCount.replace('{count}', String(matchCount))}
          </p>
        )}

        {normalizedQuery && matchCount === 0 && (
          <div className="text-center py-10">
            <p className="text-sm mb-3" style={{ color: '#636972' }}>{s.searchNoResults}</p>
            <button
              onClick={() => setQuery('')}
              className="ghost-btn rounded heading-font text-xs px-4 py-2 mr-3"
            >
              {s.searchClear}
            </button>
            <a href="/s/ai_site_builder" className="text-sm underline" style={{ color: '#8159BB' }}>
              {s.searchCantFind}
            </a>
          </div>
        )}

        <div className="space-y-10">
          {filteredByCategory.map((cat) => {
            const isExpanded = expandedSections[cat.id];
            const hasExtras = cat.generators.length > 6;
            const gridId = `grid-${cat.id}`;
            return (
              <div key={cat.id} id={cat.id}>
                <h3 className="text-lg md:text-xl mb-1" style={{ color: '#2E2E2F' }}>
                  {cat.name.toUpperCase()}
                </h3>
                <p className="text-xs mb-4" style={{ color: '#636972' }}>{cat.description}</p>
                <div
                  id={gridId}
                  className={`generator-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 ${isExpanded ? 'is-expanded' : ''}`}
                >
                  {cat.generators.map((g) => (
                    <a
                      key={g.slug}
                      href={`/generators/${g.slug}`}
                      className="generator-card card-base flex flex-col"
                    >
                      <CardThumbnail className="w-10 h-10 mb-3" />
                      <h4 className="text-sm leading-snug" style={{ color: '#2E2E2F' }}>{g.name}</h4>
                      <p className="mt-1 text-xs leading-relaxed" style={{ color: '#636972' }}>{g.description}</p>
                    </a>
                  ))}
                </div>
                {hasExtras && (
                  <button
                    onClick={() => toggleSection(cat.id)}
                    aria-expanded={isExpanded}
                    aria-controls={gridId}
                    className="mt-4 text-xs heading-font tracking-wide underline underline-offset-2"
                    style={{ color: '#8159BB' }}
                  >
                    {isExpanded
                      ? s.showLess
                      : s.showAll.replace('{count}', String(cat.generators.length))}
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    { num: '1', title: s.step1Title, desc: s.step1Desc },
    { num: '2', title: s.step2Title, desc: s.step2Desc },
    { num: '3', title: s.step3Title, desc: s.step3Desc },
  ];
  return (
    <section className="py-10">
      <div className="container-main">
        <h2 className="text-[26px] md:text-[32px] text-center mb-10">{s.howItWorksHeading}</h2>
        <div className="flex flex-col md:flex-row gap-8 md:gap-10 justify-center items-start">
          {steps.map((step) => (
            <div key={step.num} className="flex-1 flex flex-col items-center text-center max-w-xs mx-auto">
              <StepCircle number={step.num} />
              <h3 className="mt-4 text-sm" style={{ color: '#2E2E2F' }}>{step.title}</h3>
              <p className="mt-2 text-xs leading-relaxed" style={{ color: '#636972' }}>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyStrikingly() {
  const items = [
    { icon: 'bolt', title: s.why1Title, desc: s.why1Desc },
    { icon: 'mobile', title: s.why2Title, desc: s.why2Desc },
    { icon: 'gift', title: s.why3Title, desc: s.why3Desc },
  ];
  return (
    <section className="py-10" style={{ background: '#F4F6F8' }}>
      <div className="container-main">
        <h2 className="text-[26px] md:text-[32px] text-center mb-10">{s.whyStrikinglyHeading}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item) => (
            <div key={item.title} className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white border mb-4" style={{ borderColor: '#C6C9CD' }}>
                <WhyIcon type={item.icon} />
              </div>
              <h3 className="text-sm" style={{ color: '#2E2E2F' }}>{item.title}</h3>
              <p className="mt-2 text-xs leading-relaxed max-w-xs mx-auto" style={{ color: '#636972' }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const items = getFaqItems();
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-10">
      <div className="container-main max-w-[800px]">
        <h2 className="text-[26px] md:text-[32px] text-center mb-10">{s.faqHeading}</h2>
        <div className="space-y-3">
          {items.map((item, i) => {
            const isOpen = openIndex === i;
            const panelId = `faq-panel-${i}`;
            return (
              <div key={i} className="faq-item border rounded bg-white" style={{ borderColor: '#C6C9CD' }}>
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  className="w-full flex items-center justify-between px-5 py-4 text-left focus:outline-none focus:ring-2 focus:ring-brand-purple focus:ring-inset"
                >
                  <span className="heading-font text-sm pr-4" style={{ color: '#2E2E2F' }}>{item.question}</span>
                  <ChevronDown className={`shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} style={{ color: '#8159BB' }} />
                </button>
                <div
                  id={panelId}
                  className={`faq-answer px-5 overflow-hidden transition-all duration-300 ${isOpen ? 'pb-4 max-h-[400px]' : 'max-h-0'}`}
                >
                  <p className="text-xs leading-relaxed" style={{ color: '#636972' }}>{item.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ClosingCTA() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container-main text-center">
        <h2 className="text-[28px] md:text-[36px]" style={{ color: '#2E2E2F' }}>{s.closingHeading}</h2>
        <p className="mt-3 text-sm" style={{ color: '#636972' }}>{s.closingSub}</p>
        <a
          href="/s/ai_site_builder"
          className="inline-flex items-center justify-center rounded gradient-fill heading-font text-sm tracking-wide mt-7"
          style={{ height: '44px', padding: '0 32px' }}
        >
          {s.closingCta}
        </a>
      </div>
    </section>
  );
}

function Footer() {
  const year = new Date().getFullYear();
  const cols = [
    {
      title: 'Product',
      links: [
        { label: 'Templates', href: '/templates' },
        { label: 'Pricing', href: '/pricing' },
        { label: 'AI Site Builder', href: '/s/ai_site_builder' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About', href: '/about' },
        { label: 'Blog', href: '/blog' },
        { label: 'Support', href: '/support' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { label: 'Terms', href: '/terms' },
        { label: 'Privacy', href: '/privacy' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { label: 'Generators', href: '/generators' },
        { label: 'Help Center', href: '/support' },
      ],
    },
  ];

  return (
    <footer className="border-t py-12" style={{ borderColor: '#E2E4E7', background: '#FFFFFF' }}>
      <div className="container-main">
        <div className="flex flex-col md:flex-row gap-10 md:gap-16">
          <div className="md:w-48">
            <a href="/" className="heading-font text-base tracking-wide" style={{ color: '#2E2E2F' }}>
              <span style={{ color: '#8159BB' }}>strikingly</span>
            </a>
            <p className="mt-2 text-xs" style={{ color: '#636972' }}>AI-powered website builder.</p>
          </div>
          <div className="flex-1 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {cols.map((col) => (
              <div key={col.title}>
                <h4 className="heading-font text-xs mb-3" style={{ color: '#2E2E2F' }}>{col.title}</h4>
                <ul className="space-y-2">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a href={link.href} className="text-xs hover:underline" style={{ color: '#636972' }}>{link.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-10 pt-6 border-t text-center text-xs" style={{ borderColor: '#E2E4E7', color: '#636972' }}>
          {s.footerCopyright.replace('{year}', String(year))}
        </div>
      </div>
    </footer>
  );
}

/* ─── Page ─── */

export default function GeneratorsHub() {
  return (
    <div className="min-h-screen bg-white">
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
