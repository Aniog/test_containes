import { useState, useCallback, useEffect } from 'react';
import { Search, ChevronRight, ArrowRight } from 'lucide-react';
import { strings } from './data/strings';
import { featuredGenerators, allGenerators } from './data/generators';
import WebsiteIllustration from './components/WebsiteIllustration';
import CategoryIcon from './components/CategoryIcon';

const s = strings.en;

function CategoryThumb({ category }) {
  return (
    <div className="w-12 h-12 mb-3 flex items-center justify-center rounded-md bg-[#F4F6F8]">
      <CategoryIcon category={category} className="w-8 h-8" />
    </div>
  );
}

function TopBar() {
  return (
    <header className="w-full bg-white border-b border-[#E2E4E7]">
      <div className="max-w-[1200px] mx-auto px-5 h-14 flex items-center">
        <a href="/" className="font-[Josefin_Sans,Poppins,sans-serif] font-bold text-[#4B5056] text-sm uppercase tracking-wide">
          {s.brandName}
        </a>
      </div>
    </header>
  );
}

function Breadcrumb() {
  return (
    <nav aria-label="Breadcrumb" className="w-full bg-white">
      <div className="max-w-[1200px] mx-auto px-5 py-3">
        <ol className="flex items-center text-sm text-[#636972]">
          <li>
            <a href="/" className="hover:text-[#8159BB]">{s.breadcrumbHome}</a>
          </li>
          <li className="mx-2 text-[#C6C9CD]">/</li>
          <li aria-current="page" className="text-[#636972]">{s.breadcrumbCurrent}</li>
        </ol>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="w-full bg-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(circle at 70% 30%, rgba(118,113,255,0.06) 0%, rgba(203,12,159,0.04) 50%, transparent 70%)' }} />
      <div className="max-w-[1200px] mx-auto px-5 py-16 md:py-20 lg:py-24 relative">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-[28px] md:text-[40px] lg:text-[48px] leading-[1.2] font-[Josefin_Sans,Poppins,sans-serif] font-bold uppercase">
              <span className="block text-[#2E2E2F]">{s.heroH1Line1}</span>
              <span className="block ai-gradient-text">{s.heroH1Line2}</span>
            </h1>
            <p className="mt-4 text-[#636972] text-sm md:text-base max-w-lg mx-auto md:mx-0 leading-relaxed">
              {s.heroSubheadline}
            </p>
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-3">
              <a
                href="/s/ai_site_builder"
                className="inline-flex items-center justify-center h-11 px-6 rounded ai-gradient-fill font-[Josefin_Sans,Poppins,sans-serif] font-bold text-sm uppercase tracking-wide text-white hover:opacity-90 transition-opacity"
              >
                {s.heroCtaPrimary}
              </a>
              <a
                href="#all-generators"
                className="inline-flex items-center justify-center h-11 px-6 rounded border border-[#8159BB] text-[#8159BB] font-[Josefin_Sans,Poppins,sans-serif] font-bold text-sm uppercase tracking-wide hover:bg-[#F4F6F8] transition-colors"
              >
                {s.heroCtaSecondary}
              </a>
            </div>
          </div>
          <div className="flex-shrink-0">
            <WebsiteIllustration className="w-[280px] h-[210px] md:w-[360px] md:h-[270px] lg:w-[400px] lg:h-[300px]" />
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturedGenerators() {
  return (
    <section className="w-full bg-white py-10 md:py-14">
      <div className="max-w-[1200px] mx-auto px-5">
        <h2 className="text-[26px] md:text-[32px] text-[#4B5056] font-[Josefin_Sans,Poppins,sans-serif] font-bold uppercase">{s.featuredHeading}</h2>
        <p className="mt-2 text-[#636972] text-sm">{s.featuredSubheading}</p>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {featuredGenerators.map((g) => (
            <a
              key={g.slug}
              href={`/generators/${g.slug}`}
              className="block bg-white border border-[#C6C9CD] rounded-[3px] p-5 card-hover"
            >
              <span className="inline-block text-[11px] font-[Josefin_Sans,Poppins,sans-serif] font-bold uppercase text-[#8159BB] border border-[#8159BB] rounded-[3px] px-[6px] py-[2px] mb-3">
                {g.category}
              </span>
              <h3 className="text-[15px] font-[Josefin_Sans,Poppins,sans-serif] font-bold uppercase text-[#4B5056]">{g.name}</h3>
              <p className="mt-1 text-sm text-[#636972]">{g.desc}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function BrowseByCategory() {
  const categories = [
    { key: 'websites', slug: '#websites' },
    { key: 'landing-pages', slug: '#landing-pages' },
    { key: 'portfolios', slug: '#portfolios' },
    { key: 'blogs', slug: '#blogs' },
    { key: 'stores', slug: '#stores' },
    { key: 'link-in-bio', slug: '#link-in-bio' },
  ];

  return (
    <section className="w-full bg-[#F4F6F8] py-10 md:py-14">
      <div className="max-w-[1200px] mx-auto px-5">
        <h2 className="text-[26px] md:text-[32px] text-[#4B5056] font-[Josefin_Sans,Poppins,sans-serif] font-bold uppercase">{s.browseByCategoryHeading}</h2>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((cat) => (
            <a
              key={cat.key}
              href={cat.slug}
              className="block bg-white border border-[#C6C9CD] rounded-[3px] p-5 card-hover group"
            >
              <CategoryThumb category={cat.key} />
              <h3 className="text-[15px] font-[Josefin_Sans,Poppins,sans-serif] font-bold uppercase text-[#4B5056]">{s.categories[cat.key].name}</h3>
              <p className="mt-1 text-sm text-[#636972]">{s.categories[cat.key].desc}</p>
              <div className="mt-3 flex items-center text-[#8159BB]">
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function GeneratorCard({ generator, category }) {
  return (
    <a
      href={`/generators/${generator.slug}`}
      className="block bg-white border border-[#C6C9CD] rounded-[3px] p-5 card-hover"
    >
      <CategoryThumb category={category} />
      <h4 className="text-[15px] font-[Josefin_Sans,Poppins,sans-serif] font-bold uppercase text-[#4B5056]">{generator.name}</h4>
      <p className="mt-1 text-sm text-[#636972]">{generator.desc}</p>
    </a>
  );
}

function AllGenerators() {
  const [query, setQuery] = useState('');
  // Default to all expanded for SSR/no-JS; collapse after hydration
  const [collapsed, setCollapsed] = useState(() => {
    const init = {};
    Object.keys(allGenerators).forEach((k) => { init[k] = false; });
    return init;
  });
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
    setCollapsed(() => {
      const init = {};
      Object.keys(allGenerators).forEach((k) => { init[k] = true; });
      return init;
    });
  }, []);

  const categoryKeys = Object.keys(allGenerators);

  const toggleCategory = useCallback((key) => {
    setCollapsed((prev) => ({ ...prev, [key]: !prev[key] }));
  }, []);

  const normalizedQuery = query.trim().toLowerCase();

  const getVisible = (generators, key) => {
    if (!normalizedQuery) return generators;
    const catName = s.categories[key].name.toLowerCase();
    return generators.filter((g) =>
      g.name.toLowerCase().includes(normalizedQuery) ||
      g.desc.toLowerCase().includes(normalizedQuery) ||
      catName.includes(normalizedQuery)
    );
  };

  const totalMatches = categoryKeys.reduce((sum, key) => sum + getVisible(allGenerators[key], key).length, 0);

  return (
    <section id="all-generators" className="w-full bg-white py-10 md:py-14">
      <div className="max-w-[1200px] mx-auto px-5">
        <h2 className="text-[26px] md:text-[32px] text-[#4B5056] font-[Josefin_Sans,Poppins,sans-serif] font-bold uppercase">{s.allGeneratorsHeading}</h2>
        <p className="mt-2 text-[#636972] text-sm">{s.allGeneratorsSubheading}</p>

        <div className="mt-5 relative max-w-[480px]">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#C6C9CD]" aria-hidden="true" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={s.searchPlaceholder}
            aria-label={s.searchLabel}
            className="w-full h-10 pl-9 pr-4 rounded border border-[#C6C9CD] text-sm text-[#4B5056] placeholder:text-[#C6C9CD] focus:outline-none focus:border-[#8159BB]"
          />
        </div>

        {normalizedQuery && (
          <p className="mt-3 text-sm text-[#636972]">{s.searchResults(totalMatches)}</p>
        )}

        {normalizedQuery && totalMatches === 0 && (
          <div className="mt-6 p-6 bg-[#F4F6F8] rounded-[3px] text-center">
            <p className="text-[#4B5056] font-[Josefin_Sans,Poppins,sans-serif] font-bold uppercase text-sm">{s.noResults}</p>
            <button
              onClick={() => setQuery('')}
              className="mt-3 inline-flex items-center justify-center h-9 px-4 rounded border border-[#8159BB] text-[#8159BB] font-[Josefin_Sans,Poppins,sans-serif] font-bold text-xs uppercase tracking-wide hover:bg-[#F4F6F8] transition-colors"
            >
              {s.clearSearch}
            </button>
            <p className="mt-3 text-sm">
              <a href="/s/ai_site_builder" className="text-[#8159BB] underline hover:no-underline">{s.cantFindIt}</a>
            </p>
          </div>
        )}

        <div className="mt-8 space-y-10">
          {categoryKeys.map((key) => {
            const visible = getVisible(allGenerators[key], key);
            const isHidden = normalizedQuery && visible.length === 0;
            if (isHidden) return null;

            const initialCount = 6;
            const isCollapsed = collapsed[key];
            const showToggle = !normalizedQuery && visible.length > initialCount;
            const displayItems = normalizedQuery || !isCollapsed ? visible : visible.slice(0, initialCount);

            return (
              <div key={key} id={key}>
                <h3 className="text-[18px] md:text-[22px] text-[#4B5056] font-[Josefin_Sans,Poppins,sans-serif] font-bold uppercase">{s.categories[key].name}</h3>
                <p className="mt-1 text-sm text-[#636972]">{s.categories[key].desc}</p>
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {displayItems.map((g) => (
                    <GeneratorCard key={g.slug} generator={g} category={key} />
                  ))}
                </div>
                {showToggle && (
                  <button
                    onClick={() => toggleCategory(key)}
                    aria-expanded={!isCollapsed}
                    aria-controls={`category-grid-${key}`}
                    className="mt-4 inline-flex items-center justify-center h-9 px-4 rounded border border-[#8159BB] text-[#8159BB] font-[Josefin_Sans,Poppins,sans-serif] font-bold text-xs uppercase tracking-wide hover:bg-[#F4F6F8] transition-colors"
                  >
                    {isCollapsed ? s.showAll(visible.length) : s.showLess}
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
    <section className="w-full bg-[#F4F6F8] py-10 md:py-14">
      <div className="max-w-[1200px] mx-auto px-5">
        <h2 className="text-[26px] md:text-[32px] text-[#4B5056] font-[Josefin_Sans,Poppins,sans-serif] font-bold uppercase text-center">{s.howItWorksHeading}</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.num} className="text-center">
              <div className="w-10 h-10 mx-auto rounded-full bg-[#8159BB] text-white flex items-center justify-center font-[Josefin_Sans,Poppins,sans-serif] font-bold text-sm">
                {step.num}
              </div>
              <h3 className="mt-4 text-sm font-[Josefin_Sans,Poppins,sans-serif] font-bold uppercase text-[#4B5056]">{step.title}</h3>
              <p className="mt-2 text-sm text-[#636972] max-w-xs mx-auto">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyStrikingly() {
  const reasons = [
    { title: s.why1Title, desc: s.why1Desc },
    { title: s.why2Title, desc: s.why2Desc },
    { title: s.why3Title, desc: s.why3Desc },
  ];

  return (
    <section className="w-full bg-white py-10 md:py-14">
      <div className="max-w-[1200px] mx-auto px-5">
        <h2 className="text-[26px] md:text-[32px] text-[#4B5056] font-[Josefin_Sans,Poppins,sans-serif] font-bold uppercase text-center">{s.whyStrikinglyHeading}</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((r, i) => (
            <div key={i} className="text-center">
              <div className="w-10 h-10 mx-auto flex items-center justify-center">
                <svg viewBox="0 0 40 40" className="w-10 h-10" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="20" cy="20" r="18" fill="none" stroke="#8159BB" strokeWidth="2" />
                  <path d="M12 20 L18 26 L28 14" fill="none" stroke="#8159BB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="mt-4 text-sm font-[Josefin_Sans,Poppins,sans-serif] font-bold uppercase text-[#4B5056]">{r.title}</h3>
              <p className="mt-2 text-sm text-[#636972] max-w-xs mx-auto">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  // Default all open for SSR/no-JS; collapse after hydration
  const [openIndex, setOpenIndex] = useState(-1);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
    setOpenIndex(0);
  }, []);

  const faqs = [
    { q: s.faq1Question, a: s.faq1Answer },
    { q: s.faq2Question, a: s.faq2Answer },
    { q: s.faq3Question, a: s.faq3Answer },
    { q: s.faq4Question, a: s.faq4Answer },
    { q: s.faq5Question, a: s.faq5Answer },
    { q: s.faq6Question, a: s.faq6Answer },
  ];

  return (
    <section className="w-full bg-[#F4F6F8] py-10 md:py-14">
      <div className="max-w-[1200px] mx-auto px-5">
        <h2 className="text-[26px] md:text-[32px] text-[#4B5056] font-[Josefin_Sans,Poppins,sans-serif] font-bold uppercase text-center">{s.faqHeading}</h2>
        <div className="mt-8 max-w-2xl mx-auto space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = hydrated ? openIndex === i : true;
            return (
              <div key={i} className="bg-white border border-[#C6C9CD] rounded-[3px]">
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${i}`}
                  className="w-full flex items-center justify-between px-5 py-4 text-left"
                >
                  <span className="text-sm font-[Josefin_Sans,Poppins,sans-serif] font-bold uppercase text-[#4B5056] pr-4">{faq.q}</span>
                  <ChevronRight className={`w-4 h-4 text-[#8159BB] flex-shrink-0 transition-transform ${isOpen ? 'rotate-90' : ''}`} aria-hidden="true" />
                </button>
                <div
                  id={`faq-answer-${i}`}
                  className={`faq-content ${isOpen ? 'open' : ''}`}
                >
                  <div className="px-5 pb-4">
                    <p className="text-sm text-[#636972] leading-relaxed">{faq.a}</p>
                  </div>
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
    <section className="w-full bg-white py-14 md:py-20">
      <div className="max-w-[1200px] mx-auto px-5 text-center">
        <h2 className="text-[26px] md:text-[32px] text-[#4B5056] font-[Josefin_Sans,Poppins,sans-serif] font-bold uppercase">{s.closingHeading}</h2>
        <p className="mt-3 text-[#636972] text-sm md:text-base">{s.closingSub}</p>
        <a
          href="/s/ai_site_builder"
          className="mt-6 inline-flex items-center justify-center h-11 px-8 rounded ai-gradient-fill font-[Josefin_Sans,Poppins,sans-serif] font-bold text-sm uppercase tracking-wide text-white hover:opacity-90 transition-opacity"
        >
          {s.closingCta}
        </a>
      </div>
    </section>
  );
}

function Footer() {
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
        { label: 'Support', href: '/support' },
      ],
    },
  ];

  return (
    <footer className="w-full bg-[#F4F6F8] border-t border-[#E2E4E7] py-10">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <div>
            <span className="font-[Josefin_Sans,Poppins,sans-serif] font-bold text-sm uppercase text-[#4B5056]">{s.brandName}</span>
          </div>
          {cols.map((col) => (
            <div key={col.title}>
              <h4 className="text-xs font-[Josefin_Sans,Poppins,sans-serif] font-bold uppercase text-[#4B5056] mb-3">{col.title}</h4>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-sm text-[#636972] hover:text-[#8159BB]">{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-8 pt-5 border-t border-[#E2E4E7] text-sm text-[#636972]">
          {s.footerCopyright}
        </div>
      </div>
    </footer>
  );
}

export default function App() {
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
