import { useEffect, useId, useRef, useState } from 'react';
import {
  categoryGenerators,
  featuredGenerators,
  strings,
} from '../data/generators';
import CategoryIcon from './CategoryIcon';
import HeroIllustration from './HeroIllustration';

const s = strings.en;

function TopBar() {
  return (
    <header className="w-full bg-white border-b border-[#E2E4E7]">
      <div className="max-w-[1200px] mx-auto px-5 py-4">
        <a
          href="/"
          className="font-heading font-bold text-[#2E2E2F] text-base tracking-wide inline-block"
        >
          {s.topBar.logo}
        </a>
      </div>
    </header>
  );
}

function Breadcrumb() {
  return (
    <nav aria-label="Breadcrumb" className="w-full bg-white">
      <div className="max-w-[1200px] mx-auto px-5 py-3">
        <ol className="flex items-center gap-2 text-sm text-[#636972]">
          <li>
            <a href="/" className="hover:underline">
              {s.breadcrumb.home}
            </a>
          </li>
          <li aria-hidden="true">{'>'}</li>
          <li aria-current="page" className="text-[#4B5056]">
            {s.breadcrumb.current}
          </li>
        </ol>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="w-full hero-faint-wash">
      <div className="max-w-[1200px] mx-auto px-5 py-16 md:py-20 lg:py-24">
        <div className="flex flex-col-reverse md:flex-row items-center gap-10 md:gap-16">
          <div className="flex-1 text-center md:text-left">
            <h1 className="font-heading font-bold uppercase leading-[1.2] mb-5">
              <span className="block text-[28px] md:text-[40px] lg:text-[48px] text-[#2E2E2F]">
                {s.hero.h1Line1}
              </span>
              <span className="block text-[28px] md:text-[40px] lg:text-[48px] text-gradient-ai">
                {s.hero.h1Line2}
              </span>
            </h1>
            <p className="text-[#636972] text-sm md:text-base leading-relaxed max-w-lg mx-auto md:mx-0 mb-8">
              {s.hero.subheadline}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-3">
              <a
                href="/s/ai_site_builder"
                className="inline-flex items-center justify-center h-11 md:h-[44px] px-6 rounded bg-gradient-ai text-white font-heading font-bold text-sm uppercase tracking-wide hover:opacity-90 transition-opacity"
              >
                {s.hero.ctaPrimary}
              </a>
              <a
                href="#all-generators"
                className="inline-flex items-center justify-center h-11 md:h-[44px] px-6 rounded border border-[#8159BB] text-[#8159BB] font-heading font-bold text-sm uppercase tracking-wide hover:bg-[#F4F6F8] transition-colors"
              >
                {s.hero.ctaSecondary}
              </a>
            </div>
          </div>
          <div className="flex-shrink-0">
            <HeroIllustration className="w-[280px] h-[224px] md:w-[360px] md:h-[288px] lg:w-[400px] lg:h-[320px]" />
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
        <div className="mb-8">
          <h2 className="font-heading font-bold text-[26px] md:text-[32px] text-[#4B5056] uppercase leading-[1.2]">
            {s.featured.heading}
          </h2>
          <p className="text-[#636972] text-sm mt-2">
            {s.featured.subheading}
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {featuredGenerators.map((g) => (
            <a
              key={g.slug}
              href={`/generators/${g.slug}`}
              className="group block bg-white border border-[#C6C9CD] rounded p-5 card-hover transition-all duration-200"
            >
              <span className="inline-block border border-[#8159BB] text-[#8159BB] font-heading font-bold text-[11px] uppercase px-[6px] py-[2px] rounded mb-3">
                {g.category}
              </span>
              <h3 className="font-heading font-bold text-base text-[#4B5056] uppercase mb-1">
                {g.name}
              </h3>
              <p className="text-[#636972] text-sm">{g.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function BrowseByCategory() {
  return (
    <section className="w-full bg-[#F4F6F8] py-10 md:py-14">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="mb-8">
          <h2 className="font-heading font-bold text-[26px] md:text-[32px] text-[#4B5056] uppercase leading-[1.2]">
            {s.browseByCategory.heading}
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {s.browseByCategory.categories.map((cat) => (
            <a
              key={cat.id}
              href={`/generators#${cat.id}`}
              className="group block bg-white border border-[#C6C9CD] rounded p-5 card-hover transition-all duration-200"
            >
              <div className="mb-4">
                <CategoryIcon
                  category={cat.id}
                  className="w-12 h-12"
                />
              </div>
              <h3 className="font-heading font-bold text-base text-[#4B5056] uppercase mb-1 flex items-center gap-2">
                {cat.name}
                <svg
                  className="w-4 h-4 text-[#8159BB] opacity-0 group-hover:opacity-100 transition-opacity"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </h3>
              <p className="text-[#636972] text-sm">{cat.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function DirectoryCard({ g }) {
  return (
    <a
      href={`/generators/${g.slug}`}
      className="group block bg-white border border-[#C6C9CD] rounded p-5 card-hover transition-all duration-200"
    >
      <h4 className="font-heading font-bold text-sm text-[#4B5056] uppercase mb-1">
        {g.name}
      </h4>
      <p className="text-[#636972] text-sm">{g.description}</p>
    </a>
  );
}

function DirectorySubsection({ category, query }) {
  const gridId = useId();
  const [expanded, setExpanded] = useState(false);
  const items = category.items;
  const visibleCount = 6;
  const hasMore = items.length > visibleCount;

  const filteredItems = query
    ? items.filter(
        (g) =>
          g.name.toLowerCase().includes(query) ||
          g.description.toLowerCase().includes(query) ||
          category.name.toLowerCase().includes(query)
      )
    : items;

  if (filteredItems.length === 0) return null;

  const displayItems =
    query || expanded ? filteredItems : filteredItems.slice(0, visibleCount);

  return (
    <div className="mb-10" id={category.id}>
      <h3 className="font-heading font-bold text-xl md:text-[22px] text-[#4B5056] uppercase leading-[1.2] mb-1">
        {category.name}
      </h3>
      <p className="text-[#636972] text-sm mb-5">
        {category.description}
      </p>
      <div
        id={gridId}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
      >
        {displayItems.map((g) => (
          <DirectoryCard key={g.slug} g={g} />
        ))}
      </div>
      {!query && hasMore && (
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          aria-expanded={expanded}
          aria-controls={gridId}
          className="mt-5 inline-flex items-center justify-center h-9 px-4 rounded border border-[#8159BB] text-[#8159BB] font-heading font-bold text-[11px] uppercase tracking-wide hover:bg-[#F4F6F8] transition-colors"
        >
          {expanded
            ? s.directory.showLess
            : s.directory.showAll(items.length, category.name.toLowerCase())}
        </button>
      )}
    </div>
  );
}

function AllGenerators() {
  const [query, setQuery] = useState('');
  const searchId = useId();
  const lowerQuery = query.trim().toLowerCase();

  const categories = Object.values(categoryGenerators);
  const filteredCounts = categories.map((cat) => {
    if (!lowerQuery) return cat.items.length;
    return cat.items.filter(
      (g) =>
        g.name.toLowerCase().includes(lowerQuery) ||
        g.description.toLowerCase().includes(lowerQuery) ||
        cat.name.toLowerCase().includes(lowerQuery)
    ).length;
  });
  const totalMatches = filteredCounts.reduce((a, b) => a + b, 0);

  return (
    <section className="w-full bg-white py-10 md:py-14" id="all-generators">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="mb-8">
          <h2 className="font-heading font-bold text-[26px] md:text-[32px] text-[#4B5056] uppercase leading-[1.2]">
            {s.directory.heading}
          </h2>
          <p className="text-[#636972] text-sm mt-2">
            {s.directory.subheading}
          </p>
        </div>

        <div className="mb-8 max-w-[480px]">
          <div className="relative">
            <svg
              className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#636972]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="M21 21l-4.35-4.35" />
            </svg>
            <input
              id={searchId}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={s.directory.searchPlaceholder}
              aria-label={s.directory.searchLabel}
              className="w-full h-10 pl-9 pr-4 rounded border border-[#C6C9CD] text-sm text-[#4B5056] placeholder:text-[#636972] focus:outline-none focus:border-[#8159BB]"
            />
          </div>
          {lowerQuery && (
            <p className="text-xs text-[#636972] mt-2">
              {s.directory.resultCount(totalMatches)}
            </p>
          )}
        </div>

        {lowerQuery && totalMatches === 0 && (
          <div className="py-10 text-center">
            <p className="text-[#636972] text-sm mb-3">
              {s.directory.noResults}
            </p>
            <button
              type="button"
              onClick={() => setQuery('')}
              className="inline-flex items-center justify-center h-9 px-4 rounded border border-[#8159BB] text-[#8159BB] font-heading font-bold text-[11px] uppercase tracking-wide hover:bg-[#F4F6F8] transition-colors mr-3"
            >
              {s.directory.clearSearch}
            </button>
            <a
              href="/s/ai_site_builder"
              className="inline-flex items-center justify-center h-9 px-4 rounded bg-gradient-ai text-white font-heading font-bold text-[11px] uppercase tracking-wide hover:opacity-90 transition-opacity"
            >
              {s.directory.cantFindIt}
            </a>
          </div>
        )}

        {categories.map((cat) => (
          <DirectorySubsection
            key={cat.id}
            category={cat}
            query={lowerQuery}
          />
        ))}
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section className="w-full bg-[#F4F6F8] py-10 md:py-14">
      <div className="max-w-[1200px] mx-auto px-5">
        <h2 className="font-heading font-bold text-[26px] md:text-[32px] text-[#4B5056] uppercase leading-[1.2] mb-10 text-center">
          {s.howItWorks.heading}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {s.howItWorks.steps.map((step, i) => (
            <div key={i} className="text-center">
              <div className="w-10 h-10 rounded-full bg-[#8159BB] text-white font-heading font-bold text-sm flex items-center justify-center mx-auto mb-4">
                {i + 1}
              </div>
              <h3 className="font-heading font-bold text-sm text-[#4B5056] uppercase mb-2">
                {step.title}
              </h3>
              <p className="text-[#636972] text-sm max-w-xs mx-auto">
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyStrikingly() {
  return (
    <section className="w-full bg-white py-10 md:py-14">
      <div className="max-w-[1200px] mx-auto px-5">
        <h2 className="font-heading font-bold text-[26px] md:text-[32px] text-[#4B5056] uppercase leading-[1.2] mb-10 text-center">
          {s.whyStrikingly.heading}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {s.whyStrikingly.claims.map((claim, i) => (
            <div key={i} className="text-center">
              <div className="w-10 h-10 mx-auto mb-4 text-[#8159BB]">
                {i === 0 && (
                  <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" width="40" height="40">
                    <path d="M20 4v32M4 20l16-12 16 12" />
                  </svg>
                )}
                {i === 1 && (
                  <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" width="40" height="40">
                    <rect x="6" y="14" width="12" height="18" rx="2" />
                    <rect x="22" y="8" width="12" height="24" rx="2" />
                  </svg>
                )}
                {i === 2 && (
                  <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" width="40" height="40">
                    <circle cx="20" cy="20" r="14" />
                    <path d="M14 20l4 4 8-8" />
                  </svg>
                )}
              </div>
              <h3 className="font-heading font-bold text-sm text-[#4B5056] uppercase mb-2">
                {claim.title}
              </h3>
              <p className="text-[#636972] text-sm max-w-xs mx-auto">
                {claim.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);
  const contentRefs = useRef([]);

  return (
    <section className="w-full bg-[#F4F6F8] py-10 md:py-14">
      <div className="max-w-[800px] mx-auto px-5">
        <h2 className="font-heading font-bold text-[26px] md:text-[32px] text-[#4B5056] uppercase leading-[1.2] mb-10 text-center">
          {s.faq.heading}
        </h2>
        <div className="space-y-3">
          {s.faq.questions.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className="bg-white border border-[#C6C9CD] rounded overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${i}`}
                  className="w-full flex items-center justify-between px-5 py-4 text-left focus:outline-none"
                >
                  <span className="font-heading font-bold text-sm text-[#4B5056] uppercase pr-4">
                    {item.q}
                  </span>
                  <svg
                    className={`w-4 h-4 text-[#8159BB] flex-shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </button>
                <div
                  id={`faq-panel-${i}`}
                  ref={(el) => (contentRefs.current[i] = el)}
                  className={`accordion-content ${isOpen ? 'expanded' : 'collapsed'}`}
                  style={{
                    maxHeight: isOpen ? contentRefs.current[i]?.scrollHeight + 'px' : '0px',
                    opacity: isOpen ? 1 : 0,
                  }}
                >
                  <div className="px-5 pb-4 text-[#636972] text-sm leading-relaxed">
                    {item.a}
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
        <h2 className="font-heading font-bold text-[26px] md:text-[32px] text-[#4B5056] uppercase leading-[1.2] mb-3">
          {s.closingCta.heading}
        </h2>
        <p className="text-[#636972] text-sm md:text-base mb-8 max-w-lg mx-auto">
          {s.closingCta.subheading}
        </p>
        <a
          href="/s/ai_site_builder"
          className="inline-flex items-center justify-center h-[44px] px-8 rounded bg-gradient-ai text-white font-heading font-bold text-sm uppercase tracking-wide hover:opacity-90 transition-opacity"
        >
          {s.closingCta.cta}
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="w-full bg-[#F4F6F8] border-t border-[#E2E4E7]">
      <div className="max-w-[1200px] mx-auto px-5 py-10">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-10">
          <div className="col-span-2 md:col-span-1">
            <a
              href="/"
              className="font-heading font-bold text-[#2E2E2F] text-base tracking-wide inline-block mb-4"
            >
              strikingly AI
            </a>
          </div>
          {s.footer.columns.map((col, i) => (
            <div key={i}>
              <h4 className="font-heading font-bold text-xs text-[#4B5056] uppercase mb-3">
                {col.title}
              </h4>
              <ul className="space-y-2">
                {col.links.map((link, j) => (
                  <li key={j}>
                    <a
                      href={link.href}
                      className="text-[#636972] text-sm hover:text-[#4B5056] transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="text-[#636972] text-xs text-center md:text-left">
          {s.footer.copyright}
        </div>
      </div>
    </footer>
  );
}

export default function GeneratorsPage() {
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
        <ClosingCTA />
      </main>
      <Footer />
    </div>
  );
}
