import { useState, useEffect, useCallback } from 'react';
import strings from './strings';
import './App.css';

const S = strings.en;

// --- SVG Assets ---
const LogoIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
    <rect width="28" height="28" rx="6" fill="url(#logo-grad)" />
    <path d="M7 14L12 19L21 9" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <defs>
      <linearGradient id="logo-grad" x1="0" y1="0" x2="28" y2="28">
        <stop stopColor="#7671FF" />
        <stop offset="1" stopColor="#CB0C9F" />
      </linearGradient>
    </defs>
  </svg>
);

const HeroIllustration = () => (
  <svg width="520" height="380" viewBox="0 0 520 380" fill="none" aria-hidden="true" className="w-full h-auto">
    <rect x="40" y="20" width="440" height="24" rx="4" fill="#E8E0F0" />
    <circle cx="56" cy="32" r="4" fill="#CB0C9F" opacity="0.3" />
    <circle cx="68" cy="32" r="4" fill="#7671FF" opacity="0.3" />
    <circle cx="80" cy="32" r="4" fill="#8159BB" opacity="0.2" />
    <rect x="40" y="56" width="440" height="280" rx="8" fill="white" stroke="#E2E4E7" strokeWidth="1" />
    <rect x="56" y="72" width="180" height="16" rx="4" fill="#E8E0F0" />
    <rect x="56" y="98" width="300" height="10" rx="3" fill="#F4F6F8" />
    <rect x="56" y="116" width="250" height="10" rx="3" fill="#F4F6F8" />
    <rect x="56" y="142" width="408" height="120" rx="6" fill="url(#hero-img-grad)" />
    <rect x="56" y="276" width="120" height="14" rx="4" fill="#E8E0F0" />
    <rect x="56" y="298" width="200" height="10" rx="3" fill="#F4F6F8" />
    <rect x="320" y="72" width="144" height="180" rx="6" fill="#F4F6F8" stroke="#E2E4E7" strokeWidth="1" />
    <rect x="332" y="84" width="120" height="8" rx="3" fill="#E8E0F0" />
    <rect x="332" y="100" width="80" height="6" rx="3" fill="#F4F6F8" />
    <rect x="332" y="116" width="100" height="6" rx="3" fill="#F4F6F8" />
    <defs>
      <linearGradient id="hero-img-grad" x1="0" y1="0" x2="1" y2="1">
        <stop stopColor="#7671FF" stopOpacity="0.08" />
        <stop offset="1" stopColor="#CB0C9F" stopOpacity="0.12" />
      </linearGradient>
    </defs>
  </svg>
);

const CategoryIllustration = ({ slug }) => {
  const paths = {
    websites: <><rect x="4" y="8" width="40" height="6" rx="3" fill="#E8E0F0" /><rect x="4" y="18" width="28" height="4" rx="2" fill="#F4F6F8" /><rect x="4" y="26" width="32" height="4" rx="2" fill="#F4F6F8" /><circle cx="44" cy="11" r="6" fill="#8159BB" opacity="0.15" /></>,
    'landing-pages': <><rect x="4" y="6" width="40" height="20" rx="3" fill="#E8E0F0" /><rect x="4" y="30" width="40" height="8" rx="3" fill="#F4F6F8" /></>,
    portfolios: <><rect x="8" y="4" width="14" height="14" rx="2" fill="#E8E0F0" /><rect x="26" y="4" width="14" height="14" rx="2" fill="#F4F6F8" /><rect x="8" y="22" width="14" height="14" rx="2" fill="#F4F6F8" /><rect x="26" y="22" width="14" height="14" rx="2" fill="#E8E0F0" /></>,
    blogs: <><rect x="4" y="4" width="40" height="6" rx="3" fill="#E8E0F0" /><rect x="4" y="14" width="36" height="4" rx="2" fill="#F4F6F8" /><rect x="4" y="22" width="30" height="4" rx="2" fill="#F4F6F8" /><rect x="4" y="30" width="34" height="4" rx="2" fill="#F4F6F8" /></>,
    stores: <><rect x="16" y="2" width="16" height="10" rx="3" fill="#E8E0F0" /><rect x="20" y="16" width="8" height="22" rx="2" fill="#F4F6F8" /><circle cx="24" cy="30" r="5" fill="#8159BB" opacity="0.15" /></>,
    'link-in-bio': <><circle cx="24" cy="14" r="10" fill="#E8E0F0" /><rect x="16" y="28" width="16" height="4" rx="2" fill="#F4F6F8" /><rect x="18" y="36" width="12" height="4" rx="2" fill="#F4F6F8" /></>,
  };
  return (
    <svg width="48" height="40" viewBox="0 0 48 40" fill="none" aria-hidden="true">
      {paths[slug] || paths.websites}
    </svg>
  );
};

const SectionIcon = ({ type }) => {
  if (type === 'live')
    return <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true"><circle cx="16" cy="16" r="12" stroke="#8159BB" strokeWidth="2" /><path d="M12 10L22 16L12 22V10Z" fill="#8159BB" /></svg>;
  if (type === 'mobile')
    return <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true"><rect x="8" y="3" width="16" height="26" rx="3" stroke="#8159BB" strokeWidth="2" /><rect x="11" y="22" width="10" height="4" rx="1" fill="#E8E0F0" /></svg>;
  if (type === 'free')
    return <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true"><circle cx="16" cy="16" r="12" stroke="#8159BB" strokeWidth="2" /><path d="M12 16L15 19L20 13" stroke="#8159BB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>;
  return null;
};

const ArrowRight = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M6 3L11 8L6 13" stroke="#8159BB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const SearchIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true" className="shrink-0">
    <circle cx="8" cy="8" r="5.5" stroke="#636972" strokeWidth="1.5" />
    <path d="M12 12L16 16" stroke="#636972" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const ChevronDown = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M4 6L8 10L12 6" stroke="#636972" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// --- Sub-components ---

function TopBar() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-subtle-divider">
      <div className="max-w-[1200px] mx-auto px-5 h-[56px] flex items-center">
        <a href="/" className="flex items-center gap-2 no-underline" aria-label="Strikingly AI Home">
          <LogoIcon />
          <span className="font-heading font-bold text-[16px] uppercase tracking-wide text-hero-dark">
            {S.logo}
          </span>
        </a>
      </div>
    </header>
  );
}

function Breadcrumb() {
  return (
    <nav aria-label="Breadcrumb" className="max-w-[1200px] mx-auto px-5 py-[10px]">
      <ol className="flex items-center gap-[6px] list-none m-0 p-0 text-[13px] text-body-gray font-body">
        <li>
          <a href="/" className="text-body-gray hover:text-brand-purple transition-colors no-underline">
            {S.breadcrumbHome}
          </a>
        </li>
        <li aria-hidden="true" className="text-subtle-divider">/</li>
        <li className="text-body-gray" aria-current="page">
          {S.breadcrumbCurrent}
        </li>
      </ol>
    </nav>
  );
}

function Hero() {
  return (
    <section className="hero-wash">
      <div className="max-w-[1200px] mx-auto px-5 py-[60px] md:py-[80px] flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1 text-center md:text-start">
          <h1 className="text-[28px] md:text-[40px] lg:text-[48px] leading-[1.2] font-heading font-bold uppercase m-0">
            <span className="block text-hero-dark">{S.heroLine1}</span>
            <span className="block ai-gradient-text">{S.heroLine2}</span>
          </h1>
          <p className="text-[14px] md:text-[16px] text-body-gray font-body mt-[20px] mb-[30px] max-w-[480px] text-balance leading-[1.5]">
            {S.heroSub}
          </p>
          <div className="flex flex-col sm:flex-row gap-[10px]">
            <a href="/s/ai_site_builder" className="btn-primary btn-primary-lg no-underline" rel="noopener">
              {S.heroPrimaryCTA}
            </a>
            <a href="#all-generators" className="btn-ghost btn-ghost-lg no-underline">
              {S.heroSecondaryCTA}
            </a>
          </div>
        </div>
        <div className="flex-1 flex justify-center">
          <HeroIllustration />
        </div>
      </div>
    </section>
  );
}

function FeaturedGenerators() {
  return (
    <section className="max-w-[1200px] mx-auto px-5 py-[40px]">
      <h2 className="section-heading text-center">{S.featuredHeading}</h2>
      <p className="section-subheading text-center">{S.featuredSub}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {S.featuredGenerators.map((gen) => (
          <a
            key={gen.slug}
            href={`/generators/${gen.slug}`}
            className="card no-underline flex flex-col justify-between"
          >
            <div>
              <h3 className="font-heading font-bold text-[16px] uppercase text-hero-dark m-0 mb-[6px] leading-[1.2]">
                {gen.name}
              </h3>
              <p className="text-[14px] text-body-gray font-body m-0 mb-[12px] leading-[1.5]">
                {gen.desc}
              </p>
            </div>
            <div>
              <span className="tag">{gen.category}</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

function BrowseByCategory() {
  return (
    <section className="bg-light-bg py-[40px]">
      <div className="max-w-[1200px] mx-auto px-5">
        <h2 className="section-heading text-center">{S.browseHeading}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-[30px]">
          {S.browseCategories.map((cat) => (
            <a
              key={cat.slug}
              href={`#${cat.slug}`}
              className="card no-underline flex items-start gap-4 group"
            >
              <div className="shrink-0 mt-[2px]">
                <CategoryIllustration slug={cat.slug} />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-heading font-bold text-[16px] uppercase text-hero-dark m-0 mb-[4px] leading-[1.2]">
                  {cat.name}
                </h3>
                <p className="text-[14px] text-body-gray font-body m-0 leading-[1.5]">
                  {cat.desc}
                </p>
              </div>
              <div className="shrink-0 self-center">
                <ArrowRight />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function AllGenerators() {
  const [searchQuery, setSearchQuery] = useState('');
  const [collapsedSections, setCollapsedSections] = useState(null); // null = not yet collapsed (show all for SSR)

  // Progressively collapse sections after mount (for JS users)
  useEffect(() => {
    if (collapsedSections === null) {
      const init = {};
      S.generatorCategories.forEach((cat) => {
        if (cat.generators.length > 6) init[cat.slug] = true;
      });
      setCollapsedSections(init);
    }
  }, [collapsedSections]);

  const handleSearchInput = useCallback((e) => {
    setSearchQuery(e.target.value);
  }, []);

  const clearSearch = useCallback(() => {
    setSearchQuery('');
  }, []);

  const toggleSection = useCallback((slug) => {
    setCollapsedSections((prev) => {
      const next = { ...prev };
      next[slug] = !next[slug];
      return next;
    });
  }, []);

  // Compute filtered results
  const lowerQuery = searchQuery.toLowerCase().trim();
  const filteredCategories = S.generatorCategories.map((cat) => ({
    ...cat,
    generators: lowerQuery
      ? cat.generators.filter(
          (g) =>
            g.name.toLowerCase().includes(lowerQuery) ||
            g.desc.toLowerCase().includes(lowerQuery) ||
            cat.name.toLowerCase().includes(lowerQuery)
        )
      : cat.generators,
  })).filter((cat) => cat.generators.length > 0);

  const totalMatches = filteredCategories.reduce((sum, cat) => sum + cat.generators.length, 0);
  const isCollapsedReady = collapsedSections !== null;

  return (
    <section id="all-generators" className="max-w-[1200px] mx-auto px-5 py-[40px]">
      <h2 className="section-heading text-center">{S.allHeading}</h2>
      <p className="section-subheading text-center">{S.allSub}</p>

      {/* Search */}
      <div className="max-w-[480px] mx-auto mb-[30px]">
        <div className="relative">
          <span className="absolute start-[12px] top-1/2 -translate-y-1/2 text-body-gray">
            <SearchIcon />
          </span>
          <input
            type="search"
            aria-label={S.searchAria}
            placeholder={S.searchPlaceholder}
            value={searchQuery}
            onInput={handleSearchInput}
            className="w-full h-[40px] ps-[40px] pe-[40px] border border-card-border rounded-btn text-[14px] font-body text-hero-dark bg-white outline-none focus:border-brand-purple transition-colors"
          />
        </div>
        {searchQuery && (
          <div className="flex items-center justify-between mt-[10px]">
            <span className="text-[13px] text-body-gray font-body">
              {S.searchResultCount(totalMatches)}
            </span>
            <button
              type="button"
              onClick={clearSearch}
              className="text-[13px] text-brand-purple font-body bg-transparent border-none cursor-pointer hover:underline"
            >
              {S.searchClear}
            </button>
          </div>
        )}
      </div>

      {/* No results */}
      {searchQuery && totalMatches === 0 && (
        <div className="text-center py-[40px]">
          <p className="text-[16px] text-body-gray font-body mb-[16px]">{S.searchEmpty}</p>
          <button
            type="button"
            onClick={clearSearch}
            className="btn-ghost mb-[10px]"
          >
            {S.searchClear}
          </button>
          <p className="text-[14px] text-body-gray font-body m-0">
            {S.searchCantFindLabel}{' '}
            <a href="/s/ai_site_builder" className="text-brand-purple hover:underline font-semibold">
              {S.searchCantFindLink}
            </a>
          </p>
        </div>
      )}

      {/* Category subsections */}
      {filteredCategories.map((cat) => {
        const isCollapsed = isCollapsedReady && collapsedSections[cat.slug];
        const maxVisible = 6;
        const genList = isCollapsed ? cat.generators.slice(0, maxVisible) : cat.generators;
        const hasMore = cat.generators.length > maxVisible;
        const sectionId = `${cat.slug}-cards`;

        return (
          <section key={cat.slug} id={cat.slug} className="mb-[40px]">
            <h3 className="font-heading font-bold text-[20px] uppercase text-heading-gray m-0 mb-[6px] leading-[1.2]">
              {cat.name}
            </h3>
            <p className="text-[14px] text-body-gray font-body m-0 mb-[20px] leading-[1.5]">
              {cat.desc}
            </p>
            <div id={sectionId} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {genList.map((gen) => (
                <a
                  key={gen.slug}
                  href={`/generators/${gen.slug}`}
                  className="card no-underline flex flex-col"
                >
                  <div className="mb-[12px]">
                    <CategoryIllustration slug={cat.slug} />
                  </div>
                  <h4 className="font-heading font-bold text-[14px] uppercase text-hero-dark m-0 mb-[4px] leading-[1.2]">
                    {gen.name}
                  </h4>
                  <p className="text-[13px] text-body-gray font-body m-0 leading-[1.5]">
                    {gen.desc}
                  </p>
                </a>
              ))}
            </div>
            {hasMore && isCollapsedReady && !searchQuery && (
              <div className="mt-[20px] text-center">
                <button
                  type="button"
                  onClick={() => toggleSection(cat.slug)}
                  className="btn-ghost"
                  aria-expanded={!isCollapsed}
                  aria-controls={sectionId}
                >
                  {isCollapsed
                    ? `Show all ${cat.generators.length} ${cat.name.toLowerCase()}`
                    : S.showFewer}
                </button>
              </div>
            )}
          </section>
        );
      })}
    </section>
  );
}

function HowItWorks() {
  return (
    <section className="bg-light-bg py-[40px]">
      <div className="max-w-[1200px] mx-auto px-5">
        <h2 className="section-heading text-center">{S.howHeading}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-[40px]">
          {S.steps.map((step, i) => (
            <div key={i} className="text-center">
              <div className="w-[48px] h-[48px] rounded-full ai-gradient-bg text-white font-heading font-bold text-[20px] flex items-center justify-center mx-auto mb-[15px]">
                {i + 1}
              </div>
              <h3 className="font-heading font-bold text-[16px] uppercase text-heading-gray m-0 mb-[6px] leading-[1.2]">
                {step.title}
              </h3>
              <p className="text-[14px] text-body-gray font-body m-0 leading-[1.5] max-w-[300px] mx-auto">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyStrikingly() {
  const icons = ['live', 'mobile', 'free'];
  return (
    <section className="max-w-[1200px] mx-auto px-5 py-[40px]">
      <h2 className="section-heading text-center">{S.whyHeading}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-[40px]">
        {S.benefits.map((b, i) => (
          <div key={i} className="text-center">
            <div className="mb-[15px] inline-flex">
              <SectionIcon type={icons[i]} />
            </div>
            <h3 className="font-heading font-bold text-[16px] uppercase text-heading-gray m-0 mb-[6px] leading-[1.2]">
              {b.title}
            </h3>
            <p className="text-[14px] text-body-gray font-body m-0 leading-[1.5] max-w-[300px] mx-auto">
              {b.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-light-bg py-[40px]">
      <div className="max-w-[720px] mx-auto px-5">
        <h2 className="section-heading text-center">{S.faqHeading}</h2>
        <div className="mt-[30px] flex flex-col gap-[10px]">
          {S.faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            const btnId = `faq-btn-${i}`;
            const panelId = `faq-panel-${i}`;
            return (
              <div key={i} className="card">
                <h3 className="m-0">
                  <button
                    id={btnId}
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? -1 : i)}
                    className="w-full flex items-center justify-between bg-transparent border-none cursor-pointer text-start p-0 font-heading font-bold text-[15px] uppercase text-hero-dark leading-[1.2]"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                  >
                    <span>{faq.q}</span>
                    <span
                      className={`shrink-0 ms-[10px] transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                      aria-hidden="true"
                    >
                      <ChevronDown />
                    </span>
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={btnId}
                  className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${isOpen ? 'max-h-[600px]' : 'max-h-0'}`}
                >
                  <div className="pt-[10px] text-[14px] text-body-gray font-body leading-[1.6]">
                    {faq.a}
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
    <section className="max-w-[1200px] mx-auto px-5 py-[60px] text-center">
      <h2 className="font-heading font-bold text-[32px] md:text-[40px] uppercase text-heading-gray m-0 mb-[10px] leading-[1.2]">
        {S.closingHeadline}
      </h2>
      <p className="text-[14px] text-body-gray font-body mb-[30px] leading-[1.5]">
        {S.closingSub}
      </p>
      <a href="/s/ai_site_builder" className="btn-primary btn-primary-lg no-underline" rel="noopener">
        {S.closingCTA}
      </a>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-subtle-divider bg-white">
      <div className="max-w-[1200px] mx-auto px-5 py-[40px]">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-[30px]">
          {S.footerColumns.map((col) => (
            <div key={col.heading}>
              <h4 className="font-heading font-bold text-[14px] uppercase text-heading-gray m-0 mb-[12px] leading-[1.2]">
                {col.heading}
              </h4>
              <ul className="list-none m-0 p-0 flex flex-col gap-[8px]">
                {col.links.map((link) => (
                  <li key={link.text}>
                    <a
                      href={link.href}
                      className="text-[13px] text-body-gray font-body hover:text-brand-purple transition-colors no-underline"
                    >
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-subtle-divider pt-[20px] flex flex-col md:flex-row items-center justify-between gap-[10px]">
          <div className="flex items-center gap-2">
            <LogoIcon />
            <span className="font-heading font-bold text-[14px] uppercase text-hero-dark">{S.logo}</span>
          </div>
          <p className="text-[12px] text-body-gray font-body m-0">
            {S.footerCopyright}
          </p>
        </div>
      </div>
    </footer>
  );
}

// --- Main App ---
export default function App() {
  return (
    <div className="min-h-screen bg-white font-body text-body-gray">
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
