import React, { useState, useCallback, useRef, useEffect } from 'react';
import { strings } from '@/data/strings';
import { categories, featuredGenerators, allGenerators, faqData } from '@/data/generators';
import {
  WebsiteIcon, LandingPageIcon, PortfolioIcon, BlogIcon, StoreIcon, LinkInBioIcon,
  HeroIllustration, ArrowRightIcon, SearchIcon, ChevronDownIcon,
  LiveIcon, MobileIcon, FreeIcon, getCategoryIcon,
} from '@/components/generators/Icons';

const s = strings.en;
const VISIBLE_COUNT = 6;

function slugify(name) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

// ─── Top Bar ────────────────────────────────────────────────────────────────
function TopBar() {
  return (
    <header className="w-full bg-white border-b border-[#E2E4E7]" style={{ position: 'sticky', top: 0, zIndex: 50 }}>
      <div className="section-container flex items-center h-[56px]">
        <a href="/" className="flex items-center gap-2 no-underline" aria-label="Strikingly home">
          <span className="font-heading text-[18px] font-bold text-[#2E2E2F] uppercase tracking-wide" style={{ fontFamily: 'var(--font-heading)' }}>
            strikingly
          </span>
          <span className="ai-gradient-text text-[18px] font-bold uppercase tracking-wide" style={{ fontFamily: 'var(--font-heading)' }}>
            AI
          </span>
        </a>
      </div>
    </header>
  );
}

// ─── Breadcrumb ─────────────────────────────────────────────────────────────
function Breadcrumb() {
  return (
    <nav aria-label="Breadcrumb" className="section-container py-[10px]">
      <ol className="flex items-center gap-2 text-[13px] text-[#636972] list-none p-0 m-0" style={{ fontFamily: 'var(--font-body)' }}>
        <li><a href="/" className="text-[#636972] hover:text-[#8159BB] no-underline transition-colors">{s.breadcrumbHome}</a></li>
        <li aria-hidden="true" className="text-[#8159BB]">&gt;</li>
        <li aria-current="page" className="text-[#636972]">{s.breadcrumbCurrent}</li>
      </ol>
    </nav>
  );
}

// ─── Hero ───────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="relative overflow-hidden" style={{ paddingTop: '60px', paddingBottom: '80px' }}>
      <div className="absolute inset-0 opacity-[0.04]" style={{ background: 'radial-gradient(ellipse at 70% 30%, #7671FF 0%, #CB0C9F 50%, transparent 70%)' }} aria-hidden="true" />
      <div className="section-container relative flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
        <div className="flex-1 text-center lg:text-left">
          <h1 className="m-0 mb-5" style={{ fontFamily: 'var(--font-heading)' }}>
            <span className="block hero-h1-dark text-[28px] md:text-[40px] lg:text-[48px] font-bold uppercase leading-tight">
              {s.heroLine1}
            </span>
            <span className="block ai-gradient-text text-[28px] md:text-[40px] lg:text-[48px] font-bold uppercase leading-tight">
              {s.heroLine2}
            </span>
          </h1>
          <p className="text-[#636972] text-[16px] leading-relaxed max-w-[520px] mx-auto lg:mx-0 mb-8" style={{ fontFamily: 'var(--font-body)' }}>
            {s.heroSub}
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-[10px] justify-center lg:justify-start">
            <a
              href="/s/ai_site_builder"
              className="ai-gradient-fill inline-flex items-center justify-center h-[44px] px-[15px] rounded-[4px] text-[14px] font-bold uppercase no-underline transition-opacity hover:opacity-90"
              style={{ fontFamily: 'var(--font-heading)', minWidth: '220px' }}
            >
              {s.heroPrimaryCta}
            </a>
            <a
              href="#all-generators"
              className="ghost-btn inline-flex items-center justify-center h-[44px] px-[15px] rounded-[4px] text-[14px] font-bold uppercase no-underline transition-colors"
              style={{ fontFamily: 'var(--font-heading)', minWidth: '220px' }}
            >
              {s.heroSecondaryCta}
            </a>
          </div>
        </div>
        <div className="flex-shrink-0 hidden md:block">
          <HeroIllustration />
        </div>
      </div>
    </section>
  );
}

// ─── Featured Generators ────────────────────────────────────────────────────
function FeaturedGenerators() {
  return (
    <section className="py-[40px] bg-white">
      <div className="section-container">
        <h2 className="text-[26px] md:text-[32px] font-bold uppercase text-center mb-2" style={{ fontFamily: 'var(--font-heading)', color: '#4B5056' }}>
          {s.featuredHeading}
        </h2>
        <p className="text-center text-[#636972] text-[14px] mb-8" style={{ fontFamily: 'var(--font-body)' }}>
          {s.featuredSub}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {featuredGenerators.map((gen) => (
            <a
              key={gen.slug}
              href={`/generators/${gen.slug}`}
              className="card-base block no-underline group"
            >
              <h3 className="text-[15px] font-bold uppercase text-[#4B5056] mb-1 group-hover:text-[#8159BB] transition-colors" style={{ fontFamily: 'var(--font-heading)' }}>
                {gen.name}
              </h3>
              <p className="text-[13px] text-[#636972] mb-3" style={{ fontFamily: 'var(--font-body)' }}>
                {gen.description}
              </p>
              <span className="tag-ghost inline-block">{gen.category}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Browse by Category ─────────────────────────────────────────────────────
const categoryIcons = [WebsiteIcon, LandingPageIcon, PortfolioIcon, BlogIcon, StoreIcon, LinkInBioIcon];

function BrowseByCategory() {
  return (
    <section className="py-[40px] bg-[#F4F6F8]">
      <div className="section-container">
        <h2 className="text-[26px] md:text-[32px] font-bold uppercase text-center mb-8" style={{ fontFamily: 'var(--font-heading)', color: '#4B5056' }}>
          {s.browseHeading}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((cat, i) => {
            const Icon = categoryIcons[i];
            return (
              <a
                key={cat.id}
                href={`/generators#${cat.slug}`}
                className="card-base flex flex-col no-underline group"
              >
                <div className="flex items-start justify-between mb-3">
                  <Icon className="w-10 h-10" />
                  <ArrowRightIcon className="w-5 h-5 text-[#8159BB] flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                </div>
                <h3 className="text-[15px] font-bold uppercase text-[#4B5056] mb-1 group-hover:text-[#8159BB] transition-colors" style={{ fontFamily: 'var(--font-heading)' }}>
                  {cat.name}
                </h3>
                <p className="text-[13px] text-[#636972]" style={{ fontFamily: 'var(--font-body)' }}>
                  {cat.description}
                </p>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── Generator Card (for All Generators directory) ──────────────────────────
function GeneratorCard({ gen, categoryId }) {
  const Icon = getCategoryIcon(categoryId);
  return (
    <a
      href={`/generators/${gen.slug}`}
      className="card-base block no-underline group"
    >
      <div className="mb-3">
        <Icon className="w-8 h-8" />
      </div>
      <h4 className="text-[14px] font-bold uppercase text-[#4B5056] mb-1 group-hover:text-[#8159BB] transition-colors" style={{ fontFamily: 'var(--font-heading)' }}>
        {gen.name}
      </h4>
      <p className="text-[13px] text-[#636972]" style={{ fontFamily: 'var(--font-body)' }}>
        {gen.description}
      </p>
    </a>
  );
}

// ─── Category Subsection ────────────────────────────────────────────────────
function CategorySubsection({ cat, generators, searchQuery }) {
  const [expanded, setExpanded] = useState(true); // Start expanded for SSR/no-JS
  const [mounted, setMounted] = useState(false);
  const contentRef = useRef(null);
  const Icon = getCategoryIcon(cat.id);

  const filteredGens = searchQuery
    ? generators.filter((g) => {
        const q = searchQuery.toLowerCase();
        return (
          g.name.toLowerCase().includes(q) ||
          g.description.toLowerCase().includes(q) ||
          cat.name.toLowerCase().includes(q)
        );
      })
    : generators;

  const hasMore = filteredGens.length > VISIBLE_COUNT;
  // After mount, collapse if not expanded; before mount, show all (SSR/no-JS)
  const visibleGens = (expanded || !mounted || searchQuery) ? filteredGens : filteredGens.slice(0, VISIBLE_COUNT);
  const hiddenCount = filteredGens.length - VISIBLE_COUNT;

  useEffect(() => {
    setMounted(true);
    // Collapse after mount for progressive enhancement
    setExpanded(false);
  }, []);

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.style.setProperty('--collapse-max-height', `${contentRef.current.scrollHeight}px`);
    }
  }, [visibleGens.length]);

  if (searchQuery && filteredGens.length === 0) {
    return null;
  }

  const sectionId = cat.slug;

  return (
    <div id={sectionId} className="scroll-mt-[70px]">
      <div className="flex items-center gap-3 mb-2">
        <Icon className="w-6 h-6" />
        <h3 className="text-[20px] md:text-[24px] font-bold uppercase text-[#4B5056] m-0" style={{ fontFamily: 'var(--font-heading)' }}>
          {cat.name}
        </h3>
      </div>
      <p className="text-[13px] text-[#636972] mb-5" style={{ fontFamily: 'var(--font-body)' }}>
        {cat.description}
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {visibleGens.map((gen) => (
          <GeneratorCard key={gen.slug} gen={gen} categoryId={cat.id} />
        ))}
      </div>
      {hasMore && !searchQuery && mounted && (
        <div className="mt-5 text-center">
          <button
            onClick={() => setExpanded(!expanded)}
            aria-expanded={expanded}
            aria-controls={`collapse-${cat.id}`}
            className="ghost-btn inline-flex items-center justify-center h-[36px] px-[15px] rounded-[4px] text-[13px] font-bold uppercase cursor-pointer transition-colors"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            {expanded ? s.showLess : s.showAll.replace('{count}', hiddenCount + VISIBLE_COUNT)}
            <ChevronDownIcon className={`w-4 h-4 ml-2 transition-transform ${expanded ? 'rotate-180' : ''}`} />
          </button>
        </div>
      )}
    </div>
  );
}

// ─── All Generators Directory ───────────────────────────────────────────────
function AllGenerators() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = useCallback((e) => {
    setSearchQuery(e.target.value);
  }, []);

  const clearSearch = useCallback(() => {
    setSearchQuery('');
  }, []);

  const totalMatching = searchQuery
    ? categories.reduce((sum, cat) => {
        const q = searchQuery.toLowerCase();
        return sum + allGenerators[cat.id].filter((g) =>
          g.name.toLowerCase().includes(q) ||
          g.description.toLowerCase().includes(q) ||
          cat.name.toLowerCase().includes(q)
        ).length;
      }, 0)
    : 0;

  const noResults = searchQuery && totalMatching === 0;

  return (
    <section id="all-generators" className="py-[40px] bg-white scroll-mt-[70px]">
      <div className="section-container">
        <h2 className="text-[26px] md:text-[32px] font-bold uppercase text-center mb-2" style={{ fontFamily: 'var(--font-heading)', color: '#4B5056' }}>
          {s.allHeading}
        </h2>
        <p className="text-center text-[#636972] text-[14px] mb-8" style={{ fontFamily: 'var(--font-body)' }}>
          {s.allSub}
        </p>

        <div className="max-w-[480px] mx-auto mb-8">
          <div className="relative">
            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#636972] pointer-events-none" />
            <input
              type="search"
              value={searchQuery}
              onChange={handleSearch}
              placeholder={s.searchPlaceholder}
              aria-label={s.searchAriaLabel}
              className="w-full h-[40px] pl-10 pr-4 border border-[#C6C9CD] rounded-[4px] text-[14px] text-[#4B5056] bg-white focus:border-[#8159BB] focus:outline-none focus:ring-2 focus:ring-[#8159BB]/20"
              style={{ fontFamily: 'var(--font-body)' }}
            />
          </div>
          {searchQuery && !noResults && (
            <p className="text-[13px] text-[#636972] mt-2 text-center" style={{ fontFamily: 'var(--font-body)' }}>
              {s.searchMatchCount.replace('{count}', totalMatching)}
            </p>
          )}
          {noResults && (
            <div className="text-center mt-6 py-8">
              <p className="text-[14px] text-[#636972] mb-3" style={{ fontFamily: 'var(--font-body)' }}>
                {s.searchNoResults}
              </p>
              <button
                onClick={clearSearch}
                className="ghost-btn inline-flex items-center justify-center h-[36px] px-[15px] rounded-[4px] text-[13px] font-bold uppercase cursor-pointer transition-colors mb-3"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                {s.searchClear}
              </button>
              <br />
              <a href="/s/ai_site_builder" className="text-[13px] text-[#8159BB] no-underline hover:underline" style={{ fontFamily: 'var(--font-body)' }}>
                {s.searchCantFind}
              </a>
            </div>
          )}
        </div>

        <div className="flex flex-col gap-[40px]">
          {categories.map((cat) => (
            <CategorySubsection
              key={cat.id}
              cat={cat}
              generators={allGenerators[cat.id]}
              searchQuery={searchQuery}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── How It Works ───────────────────────────────────────────────────────────
function HowItWorks() {
  const steps = [
    { num: 1, title: s.howStep1Title, body: s.howStep1Body },
    { num: 2, title: s.howStep2Title, body: s.howStep2Body },
    { num: 3, title: s.howStep3Title, body: s.howStep3Body },
  ];

  return (
    <section className="py-[40px] bg-[#F4F6F8]">
      <div className="section-container">
        <h2 className="text-[26px] md:text-[32px] font-bold uppercase text-center mb-10" style={{ fontFamily: 'var(--font-heading)', color: '#4B5056' }}>
          {s.howHeading}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.num} className="text-center">
              <div className="inline-flex items-center justify-center w-[48px] h-[48px] rounded-full ai-gradient text-white text-[20px] font-bold mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
                {step.num}
              </div>
              <h3 className="text-[16px] font-bold uppercase text-[#4B5056] mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                {step.title}
              </h3>
              <p className="text-[14px] text-[#636972] max-w-[300px] mx-auto" style={{ fontFamily: 'var(--font-body)' }}>
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Why Strikingly ─────────────────────────────────────────────────────────
function WhyStrikingly() {
  const items = [
    { Icon: LiveIcon, title: s.why1Title, body: s.why1Body },
    { Icon: MobileIcon, title: s.why2Title, body: s.why2Body },
    { Icon: FreeIcon, title: s.why3Title, body: s.why3Body },
  ];

  return (
    <section className="py-[40px] bg-white">
      <div className="section-container">
        <h2 className="text-[26px] md:text-[32px] font-bold uppercase text-center mb-10" style={{ fontFamily: 'var(--font-heading)', color: '#4B5056' }}>
          {s.whyHeading}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map(({ Icon, title, body }) => (
            <div key={title} className="text-center">
              <div className="inline-block mb-4">
                <Icon />
              </div>
              <h3 className="text-[16px] font-bold uppercase text-[#4B5056] mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                {title}
              </h3>
              <p className="text-[14px] text-[#636972] max-w-[300px] mx-auto" style={{ fontFamily: 'var(--font-body)' }}>
                {body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── FAQ Accordion ──────────────────────────────────────────────────────────
function FaqItem({ item, index, isOpen, onToggle, mounted }) {
  const id = `faq-answer-${index}`;
  const btnId = `faq-button-${index}`;

  // Before mount (SSR/no-JS), all answers are visible
  const visible = !mounted || isOpen;

  return (
    <div className="border-b border-[#E2E4E7]">
      <button
        id={btnId}
        onClick={onToggle}
        aria-expanded={mounted ? isOpen : true}
        aria-controls={id}
        className="w-full flex items-center justify-between py-[16px] px-0 bg-transparent border-none cursor-pointer text-left group"
      >
        <span className="text-[15px] font-bold text-[#4B5056] group-hover:text-[#8159BB] transition-colors pr-4" style={{ fontFamily: 'var(--font-heading)' }}>
          {item.question}
        </span>
        <ChevronDownIcon className={`w-5 h-5 text-[#8159BB] flex-shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <div
        id={id}
        role="region"
        aria-labelledby={btnId}
        className="overflow-hidden transition-all duration-300"
        style={{ maxHeight: visible ? '500px' : '0' }}
      >
        <p className="text-[14px] text-[#636972] pb-[16px] leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
          {item.answer}
        </p>
      </div>
    </div>
  );
}

function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="py-[40px] bg-[#F4F6F8]">
      <div className="section-container max-w-[800px]">
        <h2 className="text-[26px] md:text-[32px] font-bold uppercase text-center mb-8" style={{ fontFamily: 'var(--font-heading)', color: '#4B5056' }}>
          {s.faqHeading}
        </h2>
        <div className="bg-white border border-[#C6C9CD] rounded-[3px] px-5">
          {faqData.map((item, i) => (
            <FaqItem
              key={i}
              item={item}
              index={i}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
              mounted={mounted}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Closing CTA ────────────────────────────────────────────────────────────
function ClosingCta() {
  return (
    <section className="py-[60px] bg-white">
      <div className="section-container text-center">
        <h2 className="text-[26px] md:text-[32px] font-bold uppercase text-[#4B5056] mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
          {s.closingHeading}
        </h2>
        <p className="text-[14px] text-[#636972] mb-8 max-w-[480px] mx-auto" style={{ fontFamily: 'var(--font-body)' }}>
          {s.closingSub}
        </p>
        <a
          href="/s/ai_site_builder"
          className="ai-gradient-fill inline-flex items-center justify-center h-[44px] px-[30px] rounded-[4px] text-[14px] font-bold uppercase no-underline transition-opacity hover:opacity-90"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          {s.closingCta}
        </a>
      </div>
    </section>
  );
}

// ─── Footer ─────────────────────────────────────────────────────────────────
function Footer() {
  const year = new Date().getFullYear();

  const columns = [
    {
      title: 'Product',
      links: [
        { label: 'Templates', href: '/templates' },
        { label: 'Pricing', href: '/pricing' },
        { label: 'AI Site Builder', href: '/s/ai_site_builder' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { label: 'Blog', href: '/blog' },
        { label: 'Support', href: '/support' },
        { label: 'Generators', href: '/generators' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About', href: '/about' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { label: 'Terms', href: '/terms' },
        { label: 'Privacy', href: '/privacy' },
      ],
    },
  ];

  return (
    <footer className="bg-[#2E2E2F] py-[40px]">
      <div className="section-container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-[13px] font-bold uppercase text-white mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
                {col.title}
              </h4>
              <ul className="list-none p-0 m-0 flex flex-col gap-2">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-[13px] text-[#C6C9CD] no-underline hover:text-white transition-colors" style={{ fontFamily: 'var(--font-body)' }}>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-[#4B5056] pt-5">
          <p className="text-[12px] text-[#C6C9CD] m-0" style={{ fontFamily: 'var(--font-body)' }}>
            {s.footerCopyright.replace('{year}', year)}
          </p>
        </div>
      </div>
    </footer>
  );
}

// ─── Main Page ──────────────────────────────────────────────────────────────
export default function GeneratorsHub() {
  return (
    <div className="min-h-screen bg-white">
      <TopBar />
      <main>
        <Breadcrumb />
        <Hero />
        <FeaturedGenerators />
        <BrowseByCategory />
        <AllGenerators />
        <HowItWorks />
        <WhyStrikingly />
        <FaqSection />
        <ClosingCta />
      </main>
      <Footer />
    </div>
  );
}
