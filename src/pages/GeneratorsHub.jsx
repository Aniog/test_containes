import { useState, useEffect, useRef, useCallback } from 'react';
import { strings } from '../data/strings';
import { CATEGORIES, FEATURED, GENERATORS_BY_CATEGORY, getSlug, getAllGenerators } from '../data/generators';
import {
  HeroIllustration,
  CategoryIcon,
  GeneratorThumbnail,
  LightningIcon,
  MobileIcon,
  FreeIcon,
  ArrowRight,
  SearchIcon,
  ChevronDown,
  StrikinglyLogo,
} from '../components/Icons';

const s = strings.en;
const BUILDER_URL = '/s/ai_site_builder';
const INITIAL_VISIBLE = 6;
const allGenerators = getAllGenerators();
const totalGeneratorCount = allGenerators.length;

/** Map category id to the icon variant name used in GeneratorThumbnail/CategoryIcon */
const catIconVariant = {
  'websites': 'website',
  'landing-pages': 'landing-page',
  'portfolios': 'portfolio',
  'blogs': 'blog',
  'stores': 'store',
  'link-in-bio': 'link-in-bio',
};

/* ====== Sub-components ====== */

function TopBar() {
  return (
    <header className="bg-white" style={{ borderBottom: '1px solid #E2E4E7' }}>
      <div className="max-w-[1200px] mx-auto px-5 py-3 flex items-center">
        <a href="/" className="inline-flex items-center gap-2 no-underline" style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 20, color: '#8159BB', textTransform: 'uppercase' }}>
          <StrikinglyLogo />
          Strikingly AI
        </a>
      </div>
    </header>
  );
}

function BreadcrumbNav() {
  return (
    <nav aria-label="Breadcrumb" className="max-w-[1200px] mx-auto px-5 py-4">
      <ol className="flex items-center gap-2 list-none p-0 m-0" style={{ fontSize: 14, listStyle: 'none' }}>
        <li style={{ listStyle: 'none' }}>
          <a href="/" className="hover:underline" style={{ color: '#636972' }}>{s.breadcrumb.home}</a>
        </li>
        <li aria-hidden="true" style={{ color: '#8159BB', listStyle: 'none' }}>&gt;</li>
        <li style={{ listStyle: 'none' }}>
          <span style={{ color: '#636972' }} aria-current="page">{s.breadcrumb.current}</span>
        </li>
      </ol>
    </nav>
  );
}

function HeroSection() {
  return (
    <section className="relative overflow-hidden" style={{ padding: '60px 0' }}>
      {/* Faint purple-pink wash background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 30% 50%, rgba(118,113,255,0.06) 0%, transparent 60%), radial-gradient(ellipse at 70% 50%, rgba(203,12,159,0.04) 0%, transparent 60%)',
        }}
        aria-hidden="true"
      />
      <div className="relative max-w-[1200px] mx-auto px-5">
        <div className="flex items-center gap-[60px] max-md:flex-col-reverse">
          {/* Left column */}
          <div className="flex-1">
            <h1
              className="m-0 mb-4"
              style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: 700,
                textTransform: 'uppercase',
                lineHeight: 1.1,
                fontSize: 'clamp(28px, 5vw, 48px)',
              }}
            >
              <span className="block" style={{ color: '#2E2E2F' }}>{s.hero.line1}</span>
              <span
                className="block"
                style={{
                  background: 'linear-gradient(135deg, #7671FF, #CB0C9F)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  color: 'transparent',
                }}
              >
                {s.hero.line2}
              </span>
            </h1>
            <p className="mb-6 max-w-[480px]" style={{ color: '#636972', fontSize: 14, lineHeight: 1.5 }}>
              {s.hero.sub}
            </p>
            <div className="flex gap-2.5 flex-wrap max-md:flex-col max-md:items-stretch">
              <a
                href={BUILDER_URL}
                className="inline-flex items-center justify-center no-underline"
                style={{
                  height: 44,
                  padding: '12px 24px',
                  borderRadius: 4,
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 700,
                  fontSize: 14,
                  textTransform: 'uppercase',
                  background: 'linear-gradient(135deg, #7671FF, #CB0C9F)',
                  color: '#FFFFFF',
                  whiteSpace: 'nowrap',
                }}
              >
                {s.hero.ctaPrimary}
              </a>
              <a
                href="#all-generators"
                className="inline-flex items-center justify-center no-underline"
                style={{
                  height: 44,
                  padding: '12px 24px',
                  borderRadius: 4,
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 700,
                  fontSize: 14,
                  textTransform: 'uppercase',
                  background: 'transparent',
                  color: '#8159BB',
                  border: '1px solid #8159BB',
                  whiteSpace: 'nowrap',
                }}
              >
                {s.hero.ctaSecondary}
              </a>
            </div>
          </div>
          {/* Right column */}
          <div className="flex-shrink-0 max-md:mb-6">
            <HeroIllustration />
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturedSection() {
  return (
    <section className="py-10">
      <div className="max-w-[1200px] mx-auto px-5">
        <h2 className="text-center m-0 mb-2" style={{ fontSize: 'clamp(22px, 3.5vw, 32px)', color: '#4B5056' }}>
          {s.featured.heading}
        </h2>
        <p className="text-center mb-10" style={{ color: '#636972', fontSize: 14 }}>
          {s.featured.sub}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {FEATURED.map((gen) => (
            <a
              key={gen.slug}
              href={`/generators/${gen.slug}`}
              className="block no-underline h-full"
              style={{ color: 'inherit' }}
            >
              <article
                className="flex flex-col h-full transition-all duration-200"
                style={{
                  background: '#FFFFFF',
                  border: '1px solid #C6C9CD',
                  borderRadius: 3,
                  padding: 20,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.08)';
                  e.currentTarget.style.borderColor = '#8159BB';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.borderColor = '#C6C9CD';
                }}
              >
                <div className="mb-3">
                  <GeneratorThumbnail variant={catIconVariant[FEATURED_CATEGORY_MAP[gen.slug]] || 'website'} />
                </div>
                <h3 className="m-0 mb-2" style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 16, textTransform: 'uppercase', color: '#4B5056' }}>
                  {gen.name}
                </h3>
                <p className="m-0 mb-3 flex-1" style={{ color: '#636972', fontSize: 14 }}>{gen.desc}</p>
                <span
                  className="inline-block self-start"
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 700,
                    fontSize: 11,
                    textTransform: 'uppercase',
                    padding: '2px 6px',
                    borderRadius: 3,
                    border: '1px solid #8159BB',
                    color: '#8159BB',
                    background: 'transparent',
                  }}
                >
                  {gen.category}
                </span>
              </article>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Map featured slugs back to their category id for thumbnail lookup */
const FEATURED_CATEGORY_MAP = {};
for (const [catId, gens] of Object.entries(GENERATORS_BY_CATEGORY)) {
  for (const gen of gens) {
    FEATURED_CATEGORY_MAP[getSlug(gen.name)] = catId;
  }
}

function BrowseByCategorySection() {
  return (
    <section className="py-10" style={{ background: '#F4F6F8' }}>
      <div className="max-w-[1200px] mx-auto px-5">
        <h2 className="text-center m-0 mb-10" style={{ fontSize: 'clamp(22px, 3.5vw, 32px)', color: '#4B5056' }}>
          {s.categories.heading}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {CATEGORIES.map((cat) => (
            <a
              key={cat.id}
              href={`#${cat.id}`}
              className="block no-underline"
              style={{ color: 'inherit' }}
            >
              <article
                className="flex flex-col transition-all duration-200"
                style={{
                  background: '#FFFFFF',
                  border: '1px solid #C6C9CD',
                  borderRadius: 3,
                  padding: 20,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.08)';
                  e.currentTarget.style.borderColor = '#8159BB';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.borderColor = '#C6C9CD';
                }}
              >
                <div className="mb-3">
                  <CategoryIcon variant={catIconVariant[cat.id]} />
                </div>
                <h3 className="m-0 mb-2" style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 16, textTransform: 'uppercase', color: '#4B5056' }}>
                  {cat.heading}
                </h3>
                <p className="m-0 mb-3 flex-1" style={{ color: '#636972', fontSize: 14 }}>{cat.description}</p>
                <span className="inline-flex items-center gap-1 self-start" style={{ color: '#8159BB', fontSize: 14, fontWeight: 600 }}>
                  Browse <ArrowRight />
                </span>
              </article>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function GeneratorCard({ name, desc, slug, variant }) {
  return (
    <a
      href={`/generators/${slug}`}
      className="block no-underline h-full"
      style={{ color: 'inherit' }}
    >
      <article
        className="flex flex-col h-full transition-all duration-200"
        style={{
          background: '#FFFFFF',
          border: '1px solid #C6C9CD',
          borderRadius: 3,
          padding: 20,
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.08)';
          e.currentTarget.style.borderColor = '#8159BB';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow = 'none';
          e.currentTarget.style.borderColor = '#C6C9CD';
        }}
      >
        <div className="mb-3">
          <GeneratorThumbnail variant={variant} />
        </div>
        <h4 className="m-0 mb-2" style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 16, textTransform: 'uppercase', color: '#4B5056' }}>
          {name}
        </h4>
        <p className="m-0" style={{ color: '#636972', fontSize: 14 }}>{desc}</p>
      </article>
    </a>
  );
}

function CategorySubsection({ catId, heading, description, generators, variant, searchQuery, showAllState, onToggleShowAll, jsReady }) {
  // Filter by search
  const filtered = searchQuery
    ? generators.filter(
        (g) =>
          g.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          g.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          heading.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : generators;

  if (filtered.length === 0) return null;

  const isExpanded = showAllState[catId] || false;
  const needsToggle = filtered.length > INITIAL_VISIBLE;
  // Only collapse after JS has mounted (progressive enhancement)
  const shouldCollapse = jsReady && needsToggle && !isExpanded;
  const visibleGenerators = shouldCollapse ? filtered.slice(0, INITIAL_VISIBLE) : filtered;
  const hiddenGenerators = shouldCollapse ? filtered.slice(INITIAL_VISIBLE) : [];

  return (
    <div id={catId} className="mb-10 scroll-mt-4">
      <h3
        className="m-0 mb-2 pb-2 inline-block"
        style={{
          fontFamily: 'var(--font-heading)',
          fontWeight: 700,
          fontSize: 18,
          textTransform: 'uppercase',
          color: '#4B5056',
          borderBottom: '2px solid #8159BB',
        }}
      >
        {heading}
      </h3>
      <p className="mb-5" style={{ color: '#636972', fontSize: 14 }}>{description}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {/* All cards always rendered in DOM for SEO/no-JS */}
        {filtered.map((gen) => {
          const isHidden = hiddenGenerators.some((h) => h.name === gen.name);
          return (
            <div
              key={gen.name}
              style={isHidden ? { maxHeight: 0, overflow: 'hidden', opacity: 0, transition: 'max-height 0.3s ease, opacity 0.3s ease' } : { transition: 'max-height 0.3s ease, opacity 0.3s ease' }}
            >
              <GeneratorCard
                name={gen.name}
                desc={gen.description}
                slug={getSlug(gen.name)}
                variant={variant}
              />
            </div>
          );
        })}
      </div>
      {needsToggle && (
        <button
          type="button"
          className="mt-2.5 p-0 border-none bg-transparent cursor-pointer"
          style={{
            fontFamily: 'var(--font-heading)',
            fontWeight: 700,
            fontSize: 14,
            textTransform: 'uppercase',
            color: '#8159BB',
          }}
          aria-expanded={isExpanded}
          onClick={() => onToggleShowAll(catId)}
        >
          {isExpanded ? s.directory.showLess : s.directory.showAll(filtered.length)}
        </button>
      )}
    </div>
  );
}

function AllGeneratorsSection({ searchQuery, onSearchChange, showAllState, onToggleShowAll, jsReady }) {
  const filteredAll = searchQuery ? allGenerators.filter(
    (g) =>
      g.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      g.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      g.category.toLowerCase().includes(searchQuery.toLowerCase())
  ) : allGenerators;

  const matchCount = filteredAll.length;
  const noResults = searchQuery && matchCount === 0;

  return (
    <section id="all-generators" className="py-10">
      <div className="max-w-[1200px] mx-auto px-5">
        <h2 className="text-center m-0 mb-2" style={{ fontSize: 'clamp(22px, 3.5vw, 32px)', color: '#4B5056' }}>
          {s.directory.heading}
        </h2>
        <p className="text-center mb-8" style={{ color: '#636972', fontSize: 14 }}>
          {s.directory.sub}
        </p>

        {/* Search */}
        <div className="flex flex-col items-center mb-8">
          <div className="relative w-full max-w-[480px]">
            <div className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: '#636972' }}>
              <SearchIcon />
            </div>
            <input
              type="search"
              aria-label="Search generators"
              placeholder={s.directory.searchPlaceholder}
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full"
              style={{
                padding: '12px 16px 12px 40px',
                border: '1px solid #C6C9CD',
                borderRadius: 4,
                fontFamily: 'var(--font-body)',
                fontSize: 14,
                color: '#636972',
                background: '#FFFFFF',
                outline: 'none',
              }}
              onFocus={(e) => {
                e.target.style.borderColor = '#8159BB';
                e.target.style.boxShadow = '0 0 0 2px rgba(129,89,187,0.2)';
              }}
              onBlur={(e) => {
                e.target.style.borderColor = '#C6C9CD';
                e.target.style.boxShadow = 'none';
              }}
            />
          </div>
          {searchQuery && (
            <p className="mt-2" style={{ fontSize: 14, color: '#636972' }}>
              {matchCount > 0 ? s.directory.resultCount(matchCount) : s.directory.noResults}
            </p>
          )}
        </div>

        {/* Empty state */}
        {noResults && (
          <div className="text-center py-10">
            <p className="mb-4" style={{ color: '#636972', fontSize: 14 }}>{s.directory.cantFind}</p>
            <button
              type="button"
              onClick={() => onSearchChange('')}
              style={{
                background: 'none',
                border: 'none',
                color: '#8159BB',
                fontFamily: 'var(--font-heading)',
                fontWeight: 700,
                fontSize: 14,
                textTransform: 'uppercase',
                cursor: 'pointer',
                padding: 0,
              }}
            >
              {s.directory.clearSearch}
            </button>
            <div className="mt-2">
              <a href={BUILDER_URL} style={{ color: '#8159BB', fontSize: 14 }}>{s.directory.cantFind}</a>
            </div>
          </div>
        )}

        {/* Category subsections */}
        {!noResults && CATEGORIES.map((cat) => (
          <CategorySubsection
            key={cat.id}
            catId={cat.id}
            heading={cat.heading}
            description={cat.description}
            generators={GENERATORS_BY_CATEGORY[cat.id] || []}
            variant={catIconVariant[cat.id]}
            searchQuery={searchQuery}
            showAllState={showAllState}
            onToggleShowAll={onToggleShowAll}
            jsReady={jsReady}
          />
        ))}
      </div>
    </section>
  );
}

function HowItWorksSection() {
  return (
    <section className="py-10" style={{ background: '#F4F6F8' }}>
      <div className="max-w-[1200px] mx-auto px-5">
        <h2 className="text-center m-0 mb-10" style={{ fontSize: 'clamp(22px, 3.5vw, 32px)', color: '#4B5056' }}>
          {s.howItWorks.heading}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {s.howItWorks.steps.map((step, i) => (
            <div key={i} className="text-center">
              <div
                className="mx-auto mb-3 flex items-center justify-center"
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: '50%',
                  background: '#8159BB',
                  color: '#FFFFFF',
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 700,
                  fontSize: 16,
                }}
              >
                {i + 1}
              </div>
              <h3 className="m-0 mb-2" style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 16, textTransform: 'uppercase', color: '#4B5056' }}>
                {step.title}
              </h3>
              <p style={{ color: '#636972', fontSize: 14 }}>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyStrikinglySection() {
  const icons = [LightningIcon, MobileIcon, FreeIcon];
  return (
    <section className="py-10">
      <div className="max-w-[1200px] mx-auto px-5">
        <h2 className="text-center m-0 mb-10" style={{ fontSize: 'clamp(22px, 3.5vw, 32px)', color: '#4B5056' }}>
          {s.whyStrikingly.heading}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {s.whyStrikingly.items.map((item, i) => {
            const Icon = icons[i];
            return (
              <div key={i} className="text-center">
                <div className="mx-auto mb-3">
                  <Icon />
                </div>
                <h3 className="m-0 mb-2" style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 16, textTransform: 'uppercase', color: '#4B5056' }}>
                  {item.title}
                </h3>
                <p style={{ color: '#636972', fontSize: 14 }}>{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = useCallback((i) => {
    setOpenIndex((prev) => (prev === i ? -1 : i));
  }, []);

  return (
    <section className="py-10" style={{ background: '#F4F6F8' }}>
      <div className="max-w-[800px] mx-auto px-5">
        <h2 className="text-center m-0 mb-10" style={{ fontSize: 'clamp(22px, 3.5vw, 32px)', color: '#4B5056' }}>
          {s.faq.heading}
        </h2>
        <div>
          {s.faq.items.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i} style={{ borderBottom: '1px solid #E2E4E7' }}>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${i}`}
                  id={`faq-btn-${i}`}
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between cursor-pointer bg-transparent border-none text-left py-4"
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 700,
                    fontSize: 16,
                    textTransform: 'uppercase',
                    color: '#4B5056',
                    padding: '16px 0',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                  }}
                >
                  <span>{item.q}</span>
                  <ChevronDown open={isOpen} />
                </button>
                <div
                  id={`faq-panel-${i}`}
                  role="region"
                  aria-labelledby={`faq-btn-${i}`}
                  style={{
                    maxHeight: isOpen ? 500 : 0,
                    overflow: 'hidden',
                    transition: 'max-height 0.3s ease',
                  }}
                >
                  <div className="pb-4" style={{ color: '#636972', fontSize: 14, lineHeight: 1.6 }}>
                    <p className="m-0">{item.a}</p>
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

function ClosingCtaSection() {
  return (
    <section className="py-10">
      <div className="max-w-[1200px] mx-auto px-5 text-center">
        <h2 className="m-0 mb-2" style={{ fontSize: 'clamp(22px, 3.5vw, 32px)', color: '#4B5056' }}>
          {s.closingCta.heading}
        </h2>
        <p className="mb-6" style={{ color: '#636972', fontSize: 14 }}>
          {s.closingCta.sub}
        </p>
        <a
          href={BUILDER_URL}
          className="inline-flex items-center justify-center no-underline"
          style={{
            height: 44,
            padding: '12px 24px',
            borderRadius: 4,
            fontFamily: 'var(--font-heading)',
            fontWeight: 700,
            fontSize: 16,
            textTransform: 'uppercase',
            background: 'linear-gradient(135deg, #7671FF, #CB0C9F)',
            color: '#FFFFFF',
            whiteSpace: 'nowrap',
          }}
        >
          {s.closingCta.button}
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer style={{ background: '#F4F6F8', borderTop: '1px solid #E2E4E7' }}>
      <div className="max-w-[1200px] mx-auto px-5 py-10">
        {/* Logo */}
        <div className="mb-8">
          <a href="/" className="inline-flex items-center gap-2 no-underline" style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 18, color: '#8159BB', textTransform: 'uppercase' }}>
            <StrikinglyLogo />
            Strikingly
          </a>
        </div>
        {/* Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {s.footer.columns.map((col) => (
            <div key={col.heading}>
              <h4 className="m-0 mb-4" style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 13, textTransform: 'uppercase', color: '#4B5056' }}>
                {col.heading}
              </h4>
              <ul className="list-none p-0 m-0 flex flex-col gap-2.5" style={{ listStyle: 'none' }}>
                {col.links.map((link) => (
                  <li key={link.label} style={{ listStyle: 'none' }}>
                    <a href={link.href} style={{ color: '#636972', fontSize: 14 }} className="hover:underline">{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        {/* Copyright */}
        <div style={{ borderTop: '1px solid #E2E4E7', paddingTop: 20 }}>
          <p className="m-0" style={{ color: '#636972', fontSize: 13 }}>{s.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}

/* ====== Main Page ====== */

export default function GeneratorsHub() {
  const [searchQuery, setSearchQuery] = useState('');
  const [showAllState, setShowAllState] = useState({});
  const [jsReady, setJsReady] = useState(false);

  const handleToggleShowAll = useCallback((catId) => {
    setShowAllState((prev) => ({ ...prev, [catId]: !prev[catId] }));
  }, []);

  // Progressive enhancement: mark JS as ready after mount
  useEffect(() => {
    document.body.classList.remove('no-js');
    const raf = requestAnimationFrame(() => setJsReady(true));
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <>
      <TopBar />
      <BreadcrumbNav />
      <main>
        <HeroSection />
        <FeaturedSection />
        <BrowseByCategorySection />
        <AllGeneratorsSection
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          showAllState={showAllState}
          onToggleShowAll={handleToggleShowAll}
          jsReady={jsReady}
        />
        <HowItWorksSection />
        <WhyStrikinglySection />
        <FaqSection />
        <ClosingCtaSection />
      </main>
      <Footer />
    </>
  );
}
