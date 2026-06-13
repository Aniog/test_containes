import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  strings,
  categories,
  featuredGenerators,
  allGenerators,
  INITIAL_VISIBLE_COUNT,
} from '../data/generators';

const s = strings.en;

// ─── SVG Illustrations ────────────────────────────────────────────

const HeroIllustration = () => (
  <svg
    aria-hidden="true"
    width="520"
    height="380"
    viewBox="0 0 520 380"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ width: '100%', height: 'auto', maxWidth: 520 }}
  >
    {/* Monitor frame */}
    <rect x="40" y="20" width="440" height="280" rx="12" stroke="#C6C9CD" strokeWidth="2" fill="#F4F6F8" />
    <rect x="52" y="32" width="416" height="248" rx="4" fill="#FFFFFF" stroke="#E2E4E7" strokeWidth="1" />
    {/* Top bar */}
    <rect x="52" y="32" width="416" height="36" rx="4" fill="#F4F6F8" />
    <circle cx="70" cy="50" r="5" fill="#CB0C9F" opacity="0.5" />
    <circle cx="86" cy="50" r="5" fill="#7671FF" opacity="0.5" />
    <circle cx="102" cy="50" r="5" fill="#C6C9CD" opacity="0.5" />
    <rect x="200" y="43" width="180" height="14" rx="7" fill="#E2E4E7" />
    {/* Content blocks */}
    <rect x="72" y="88" width="180" height="12" rx="2" fill="#8159BB" opacity="0.3" />
    <rect x="72" y="108" width="376" height="8" rx="2" fill="#E2E4E7" />
    <rect x="72" y="124" width="320" height="8" rx="2" fill="#E2E4E7" />
    <rect x="72" y="140" width="280" height="8" rx="2" fill="#E2E4E7" />
    {/* Image placeholder */}
    <rect x="72" y="164" width="160" height="100" rx="4" fill="#F4F6F8" stroke="#E2E4E7" strokeWidth="1" />
    <path d="M120 210 L136 194 L152 210" stroke="#8159BB" strokeWidth="2" fill="none" opacity="0.4" />
    <circle cx="142" cy="186" r="8" stroke="#8159BB" strokeWidth="2" fill="none" opacity="0.4" />
    {/* Card */}
    <rect x="252" y="164" width="196" height="100" rx="4" fill="#F4F6F8" stroke="#E2E4E7" strokeWidth="1" />
    <rect x="272" y="184" width="100" height="8" rx="2" fill="#C6C9CD" />
    <rect x="272" y="200" width="156" height="6" rx="2" fill="#E2E4E7" />
    <rect x="272" y="214" width="130" height="6" rx="2" fill="#E2E4E7" />
    <rect x="272" y="236" width="60" height="20" rx="3" fill="#8159BB" opacity="0.2" />
    {/* Stand */}
    <rect x="220" y="300" width="80" height="20" rx="2" fill="#C6C9CD" />
    <rect x="190" y="316" width="140" height="8" rx="4" fill="#E2E4E7" />
    {/* Floating elements */}
    <circle cx="490" cy="80" r="16" fill="none" stroke="#7671FF" strokeWidth="2" opacity="0.3" />
    <path d="M484 80 L490 74 L496 80 L490 86 Z" fill="#7671FF" opacity="0.3" />
    <circle cx="30" cy="200" r="12" fill="none" stroke="#CB0C9F" strokeWidth="2" opacity="0.3" />
    <rect x="480" y="240" width="24" height="24" rx="4" fill="none" stroke="#8159BB" strokeWidth="2" opacity="0.3" />
    <circle cx="50" cy="120" r="8" fill="#7671FF" opacity="0.15" />
  </svg>
);

// Category-specific small SVG illustrations for cards
const categoryIcons = {
  websites: (
    <svg aria-hidden="true" width="40" height="40" viewBox="0 0 40 40" fill="none">
      <rect x="4" y="6" width="32" height="24" rx="3" stroke="#8159BB" strokeWidth="1.5" fill="#F4F6F8" />
      <rect x="4" y="6" width="32" height="6" rx="3" fill="#E2E4E7" />
      <line x1="10" y1="9" x2="22" y2="9" stroke="#8159BB" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
      <rect x="8" y="16" width="10" height="6" rx="1" fill="#8159BB" opacity="0.2" />
      <rect x="22" y="16" width="10" height="6" rx="1" fill="#C6C9CD" />
      <rect x="8" y="25" width="24" height="2" rx="1" fill="#E2E4E7" />
      <rect x="14" y="32" width="12" height="3" rx="1" fill="#C6C9CD" />
      <rect x="10" y="34" width="20" height="2" rx="1" fill="#E2E4E7" />
    </svg>
  ),
  'landing-pages': (
    <svg aria-hidden="true" width="40" height="40" viewBox="0 0 40 40" fill="none">
      <rect x="8" y="4" width="24" height="32" rx="3" stroke="#8159BB" strokeWidth="1.5" fill="#F4F6F8" />
      <rect x="12" y="10" width="16" height="6" rx="1" fill="#8159BB" opacity="0.3" />
      <rect x="12" y="20" width="16" height="3" rx="1" fill="#E2E4E7" />
      <rect x="12" y="25" width="16" height="3" rx="1" fill="#E2E4E7" />
      <rect x="14" y="30" width="12" height="5" rx="2" fill="#8159BB" opacity="0.25" />
    </svg>
  ),
  portfolios: (
    <svg aria-hidden="true" width="40" height="40" viewBox="0 0 40 40" fill="none">
      <rect x="4" y="6" width="14" height="14" rx="2" fill="#8159BB" opacity="0.15" stroke="#8159BB" strokeWidth="1" />
      <rect x="22" y="6" width="14" height="14" rx="2" fill="#E2E4E7" stroke="#C6C9CD" strokeWidth="1" />
      <rect x="4" y="24" width="14" height="14" rx="2" fill="#E2E4E7" stroke="#C6C9CD" strokeWidth="1" />
      <rect x="22" y="24" width="14" height="14" rx="2" fill="#8159BB" opacity="0.15" stroke="#8159BB" strokeWidth="1" />
    </svg>
  ),
  blogs: (
    <svg aria-hidden="true" width="40" height="40" viewBox="0 0 40 40" fill="none">
      <rect x="8" y="4" width="24" height="32" rx="3" stroke="#8159BB" strokeWidth="1.5" fill="#F4F6F8" />
      <rect x="12" y="10" width="16" height="4" rx="1" fill="#8159BB" opacity="0.3" />
      <line x1="12" y1="18" x2="28" y2="18" stroke="#E2E4E7" strokeWidth="1.5" />
      <line x1="12" y1="22" x2="26" y2="22" stroke="#E2E4E7" strokeWidth="1.5" />
      <line x1="12" y1="26" x2="22" y2="26" stroke="#E2E4E7" strokeWidth="1.5" />
    </svg>
  ),
  stores: (
    <svg aria-hidden="true" width="40" height="40" viewBox="0 0 40 40" fill="none">
      <path d="M6 14 L20 6 L34 14 L34 32 L6 32 Z" stroke="#8159BB" strokeWidth="1.5" fill="#F4F6F8" />
      <rect x="16" y="22" width="8" height="10" rx="1" fill="#8159BB" opacity="0.2" stroke="#8159BB" strokeWidth="1" />
      <circle cx="13" cy="18" r="2" fill="#C6C9CD" />
      <circle cx="27" cy="18" r="2" fill="#C6C9CD" />
    </svg>
  ),
  'link-in-bio': (
    <svg aria-hidden="true" width="40" height="40" viewBox="0 0 40 40" fill="none">
      <rect x="10" y="4" width="20" height="32" rx="6" stroke="#8159BB" strokeWidth="1.5" fill="#F4F6F8" />
      <circle cx="20" cy="12" r="4" fill="#8159BB" opacity="0.2" />
      <rect x="14" y="20" width="12" height="3" rx="1.5" fill="#C6C9CD" />
      <rect x="14" y="25" width="12" height="3" rx="1.5" fill="#C6C9CD" />
      <rect x="14" y="30" width="12" height="3" rx="1.5" fill="#C6C9CD" />
    </svg>
  ),
};

// ─── Strikingly Logo ──────────────────────────────────────────────

const StrikinglyLogo = () => (
  <a href="/" aria-label="Strikingly home" className="inline-flex items-center gap-2">
    <svg aria-hidden="true" width="28" height="28" viewBox="0 0 28 28" fill="none">
      <rect width="28" height="28" rx="6" fill="#8159BB" />
      <text x="6" y="20" fontSize="16" fontWeight="700" fill="#FFFFFF" fontFamily="'Josefin Sans', sans-serif">S</text>
    </svg>
    <span
      className="font-heading text-lg font-bold tracking-tight"
      style={{ color: '#4B5056', textTransform: 'none' }}
    >
      strikingly <span className="ai-gradient-text" style={{ textTransform: 'uppercase', fontSize: '0.7em', letterSpacing: '0.05em' }}>AI</span>
    </span>
  </a>
);

// ─── Icon Components ──────────────────────────────────────────────

const SearchIcon = () => (
  <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

const ArrowRight = () => (
  <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

const ChevronDown = ({ expanded }) => (
  <svg
    aria-hidden="true"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{
      transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)',
      transition: 'transform 0.2s ease',
    }}
  >
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

// ─── How It Works icons ───────────────────────────────────────────

const LightningIcon = () => (
  <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);

const MobileIcon = () => (
  <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
    <line x1="12" y1="18" x2="12.01" y2="18" />
  </svg>
);

const DollarIcon = () => (
  <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="1" x2="12" y2="23" />
    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
  </svg>
);

// ─── Top Bar ──────────────────────────────────────────────────────

const TopBar = () => (
  <header
    className="sticky top-0 z-50 bg-white"
    style={{ borderBottom: '1px solid #E2E4E7' }}
  >
    <div className="mx-auto flex items-center h-14 px-5 md:px-10" style={{ maxWidth: 1200 }}>
      <StrikinglyLogo />
    </div>
  </header>
);

// ─── Breadcrumb ───────────────────────────────────────────────────

const Breadcrumb = () => (
  <nav aria-label="Breadcrumb" className="px-5 md:px-10 py-3" style={{ maxWidth: 1200, marginInline: 'auto' }}>
    <ol className="flex items-center gap-2 text-sm" style={{ color: '#636972', listStyle: 'none', padding: 0, margin: 0 }}>
      <li>
        <a href="/" className="hover:underline" style={{ color: '#636972' }}>{s.breadcrumb.home}</a>
      </li>
      <li aria-hidden="true" style={{ color: '#8159BB' }}>&rsaquo;</li>
      <li aria-current="page" style={{ color: '#4B5056', fontWeight: 600 }}>{s.breadcrumb.current}</li>
    </ol>
  </nav>
);

// ─── Hero Section ─────────────────────────────────────────────────

const Hero = () => (
  <section className="px-5 md:px-10 py-12 md:py-20" style={{ background: 'linear-gradient(135deg, rgba(118,113,255,0.04) 0%, rgba(203,12,159,0.04) 100%)' }}>
    <div className="mx-auto flex flex-col-reverse md:flex-row items-center gap-10 md:gap-16" style={{ maxWidth: 1200 }}>
      {/* Left column */}
      <div className="flex-1 text-center md:text-left">
        <h1 className="font-heading font-bold" style={{ fontSize: 'clamp(28px, 5vw, 48px)', lineHeight: 1.15, letterSpacing: '0.02em' }}>
          <span style={{ color: '#2E2E2F' }}>{s.hero.line1}</span>
          <br />
          <span className="ai-gradient-text">{s.hero.line2}</span>
        </h1>
        <p className="mt-5 text-base md:text-lg leading-relaxed max-w-lg mx-auto md:mx-0" style={{ color: '#636972' }}>
          {s.hero.subheadline}
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center gap-3 justify-center md:justify-start">
          <a
            href="/s/ai_site_builder"
            className="inline-flex items-center justify-center ai-gradient-bg text-white font-heading font-bold uppercase rounded px-5 text-sm"
            style={{ height: 44, minWidth: 200 }}
          >
            {s.hero.ctaPrimary}
          </a>
          <a
            href="#all-generators"
            className="inline-flex items-center justify-center font-heading font-bold uppercase rounded px-5 text-sm"
            style={{ height: 36, minWidth: 180, border: '1px solid #8159BB', color: '#8159BB', background: 'transparent' }}
          >
            {s.hero.ctaSecondary}
          </a>
        </div>
      </div>
      {/* Right column */}
      <div className="flex-1 flex justify-center">
        <HeroIllustration />
      </div>
    </div>
  </section>
);

// ─── Featured Generators ──────────────────────────────────────────

const FeaturedCard = ({ item }) => (
  <a
    href={`/generators/${item.slug}`}
    className="block rounded-card p-5 hover:shadow-md"
    style={{ background: '#FFFFFF', border: '1px solid #C6C9CD', transition: 'box-shadow 0.2s ease, border-color 0.2s ease' }}
    onMouseEnter={e => { e.currentTarget.style.borderColor = '#8159BB'; }}
    onMouseLeave={e => { e.currentTarget.style.borderColor = '#C6C9CD'; }}
  >
    <h3 className="font-heading font-bold text-sm" style={{ color: '#4B5056' }}>{item.name}</h3>
    <p className="mt-2 text-sm" style={{ color: '#636972' }}>{item.description}</p>
    <span
      className="inline-block mt-3 font-heading font-bold uppercase"
      style={{ fontSize: 11, padding: '2px 6px', borderRadius: 3, color: '#8159BB', border: '1px solid #8159BB', background: 'transparent' }}
    >
      {item.category}
    </span>
  </a>
);

const FeaturedGenerators = () => (
  <section className="px-5 md:px-10 py-10" style={{ maxWidth: 1200, marginInline: 'auto' }}>
    <h2 className="font-heading font-bold text-xl md:text-2xl text-center" style={{ color: '#4B5056' }}>{s.featured.heading}</h2>
    <p className="mt-2 text-center text-sm" style={{ color: '#636972' }}>{s.featured.subheading}</p>
    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {featuredGenerators.map(item => (
        <FeaturedCard key={item.slug} item={item} />
      ))}
    </div>
  </section>
);

// ─── Browse by Category ───────────────────────────────────────────

const CategoryCard = ({ cat }) => (
  <a
    href={`#${cat.slug}`}
    className="flex flex-col items-start gap-3 p-5 rounded-card group"
    style={{ background: '#FFFFFF', border: '1px solid #C6C9CD', transition: 'box-shadow 0.2s ease, border-color 0.2s ease' }}
    onMouseEnter={e => { e.currentTarget.style.borderColor = '#8159BB'; e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.06)'; }}
    onMouseLeave={e => { e.currentTarget.style.borderColor = '#C6C9CD'; e.currentTarget.style.boxShadow = 'none'; }}
  >
    <div className="flex items-start justify-between w-full">
      <div style={{ color: '#8159BB' }}>
        {categoryIcons[cat.slug]}
      </div>
      <span className="text-brand-purple" style={{ color: '#8159BB' }}>
        <ArrowRight />
      </span>
    </div>
    <h3 className="font-heading font-bold text-sm" style={{ color: '#4B5056' }}>{cat.name}</h3>
    <p className="text-sm" style={{ color: '#636972' }}>{cat.description}</p>
  </a>
);

const BrowseByCategory = () => (
  <section className="px-5 md:px-10 py-10" style={{ background: '#F4F6F8' }}>
    <div className="mx-auto" style={{ maxWidth: 1200 }}>
      <h2 className="font-heading font-bold text-xl md:text-2xl text-center" style={{ color: '#4B5056' }}>{s.browseByCategory.heading}</h2>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {categories.map(cat => (
          <CategoryCard key={cat.slug} cat={cat} />
        ))}
      </div>
    </div>
  </section>
);

// ─── Generator Card (for directory) ───────────────────────────────

const GeneratorCard = ({ item, categorySlug, hidden }) => (
  <a
    href={`/generators/${item.slug}`}
    className="flex flex-col p-5 rounded-card"
    style={{
      background: '#FFFFFF',
      border: '1px solid #C6C9CD',
      transition: 'box-shadow 0.2s ease, border-color 0.2s ease, max-height 0.4s ease, opacity 0.3s ease, padding 0.3s ease, margin 0.3s ease',
      ...(hidden ? {
        maxHeight: 0,
        opacity: 0,
        overflow: 'hidden',
        padding: 0,
        margin: 0,
        borderWidth: 0,
      } : {
        maxHeight: 500,
        opacity: 1,
      }),
    }}
    onMouseEnter={e => { if (!hidden) { e.currentTarget.style.borderColor = '#8159BB'; e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.06)'; } }}
    onMouseLeave={e => { e.currentTarget.style.borderColor = '#C6C9CD'; e.currentTarget.style.boxShadow = 'none'; }}
    tabIndex={hidden ? -1 : 0}
    aria-hidden={hidden ? 'true' : undefined}
  >
    <div className="mb-3" style={{ color: '#8159BB' }}>
      {categoryIcons[categorySlug]}
    </div>
    <h4 className="font-heading font-bold text-sm" style={{ color: '#4B5056' }}>{item.name}</h4>
    <p className="mt-1 text-sm" style={{ color: '#636972' }}>{item.description}</p>
  </a>
);

// ─── Category Subsection ──────────────────────────────────────────

const CategorySubsection = ({ categorySlug, categoryName, categoryDescription, generators, searchTerm }) => {
  const [expanded, setExpanded] = useState(false);

  // Filter by search
  const matchingGenerators = searchTerm
    ? generators.filter(g =>
        g.name.toLowerCase().includes(searchTerm) ||
        g.description.toLowerCase().includes(searchTerm) ||
        categoryName.toLowerCase().includes(searchTerm)
      )
    : generators;

  // Hide entire section if searching and no matches
  if (searchTerm && matchingGenerators.length === 0) {
    return null;
  }

  const hasMore = matchingGenerators.length > INITIAL_VISIBLE_COUNT;
  const showExpandToggle = hasMore && !searchTerm;

  return (
    <div id={categorySlug} className="mb-10" style={{ scrollMarginTop: 80 }}>
      <h3 className="font-heading font-bold text-base md:text-lg" style={{ color: '#4B5056' }}>{categoryName}</h3>
      <p className="mt-1 text-sm" style={{ color: '#636972' }}>{categoryDescription}</p>
      <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {matchingGenerators.map((g, i) => {
          const isHidden = showExpandToggle && !expanded && i >= INITIAL_VISIBLE_COUNT;
          return (
            <GeneratorCard
              key={g.slug}
              item={g}
              categorySlug={categorySlug}
              hidden={isHidden}
            />
          );
        })}
      </div>
      {showExpandToggle && (
        <button
          type="button"
          onClick={() => setExpanded(!expanded)}
          aria-expanded={expanded}
          aria-controls={`${categorySlug}-grid`}
          className="mt-4 inline-flex items-center gap-2 font-heading font-bold uppercase text-sm"
          style={{ color: '#8159BB', background: 'none', border: 'none', cursor: 'pointer', padding: '6px 0' }}
        >
          {expanded
            ? s.allGenerators.collapseAll(matchingGenerators.length)
            : s.allGenerators.showAll(matchingGenerators.length)
          }
          <ChevronDown expanded={expanded} />
        </button>
      )}
    </div>
  );
};

// ─── All Generators Directory ─────────────────────────────────────

const AllGeneratorsDirectory = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Count matching generators
  const totalMatching = searchTerm
    ? Object.entries(allGenerators).reduce((count, [catSlug, gens]) => {
        const catName = categories.find(c => c.slug === catSlug)?.name || '';
        return count + gens.filter(g =>
          g.name.toLowerCase().includes(searchTerm) ||
          g.description.toLowerCase().includes(searchTerm) ||
          catName.toLowerCase().includes(searchTerm)
        ).length;
      }, 0)
    : Object.values(allGenerators).flat().length;

  return (
    <section id="all-generators" className="px-5 md:px-10 py-10" style={{ maxWidth: 1200, marginInline: 'auto' }}>
      <h2 className="font-heading font-bold text-xl md:text-2xl text-center" style={{ color: '#4B5056' }}>{s.allGenerators.heading}</h2>
      <p className="mt-2 text-center text-sm" style={{ color: '#636972' }}>{s.allGenerators.subheading}</p>

      {/* Search */}
      <div className="mt-8 mx-auto" style={{ maxWidth: 480 }}>
        <div className="relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: '#636972' }}>
            <SearchIcon />
          </span>
          <input
            type="text"
            placeholder={s.allGenerators.searchPlaceholder}
            aria-label={s.allGenerators.searchAriaLabel}
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value.toLowerCase())}
            className="w-full pl-10 pr-4 text-sm"
            style={{
              height: 44,
              border: '1px solid #C6C9CD',
              borderRadius: 3,
              outline: 'none',
              color: '#4B5056',
              background: '#FFFFFF',
            }}
            onFocus={e => { e.target.style.borderColor = '#8159BB'; }}
            onBlur={e => { e.target.style.borderColor = '#C6C9CD'; }}
          />
        </div>
        {searchTerm && (
          <p className="mt-2 text-sm text-center" style={{ color: '#636972' }}>
            {s.allGenerators.matchText(totalMatching)}
          </p>
        )}
      </div>

      {/* Category subsections */}
      <div className="mt-10">
        {categories.map(cat => (
          <CategorySubsection
            key={cat.slug}
            categorySlug={cat.slug}
            categoryName={cat.name}
            categoryDescription={cat.description}
            generators={allGenerators[cat.slug]}
            searchTerm={searchTerm}
          />
        ))}
      </div>

      {/* Empty state */}
      {searchTerm && totalMatching === 0 && (
        <div className="text-center py-10">
          <p className="font-heading font-bold text-base" style={{ color: '#4B5056' }}>{s.allGenerators.emptyHeading}</p>
          <p className="mt-2 text-sm" style={{ color: '#636972' }}>{s.allGenerators.emptySubtext}</p>
          <div className="mt-5 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => setSearchTerm('')}
              className="font-heading font-bold uppercase text-sm"
              style={{ color: '#8159BB', background: 'none', border: 'none', cursor: 'pointer', padding: '8px 12px' }}
            >
              {s.allGenerators.clearSearch}
            </button>
            <a
              href="/s/ai_site_builder"
              className="inline-flex items-center justify-center ai-gradient-bg text-white font-heading font-bold uppercase rounded px-5 text-sm"
              style={{ height: 44 }}
            >
              {s.allGenerators.emptyCta}
            </a>
          </div>
        </div>
      )}
    </section>
  );
};

// ─── How It Works ─────────────────────────────────────────────────

const HowItWorks = () => (
  <section className="px-5 md:px-10 py-10" style={{ background: '#F4F6F8' }}>
    <div className="mx-auto" style={{ maxWidth: 1200 }}>
      <h2 className="font-heading font-bold text-xl md:text-2xl text-center" style={{ color: '#4B5056' }}>{s.howItWorks.heading}</h2>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {s.howItWorks.steps.map(step => (
          <div key={step.num} className="flex flex-col items-center text-center">
            <div
              className="flex items-center justify-center rounded-full text-white font-heading font-bold text-lg"
              style={{ width: 48, height: 48, background: '#8159BB' }}
              aria-hidden="true"
            >
              {step.num}
            </div>
            <h3 className="mt-4 font-heading font-bold text-sm" style={{ color: '#4B5056', letterSpacing: '0.05em' }}>{step.title}</h3>
            <p className="mt-2 text-sm" style={{ color: '#636972', maxWidth: 280 }}>{step.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// ─── Why Strikingly ───────────────────────────────────────────────

const whyIcons = [LightningIcon, MobileIcon, DollarIcon];

const WhyStrikingly = () => (
  <section className="px-5 md:px-10 py-10">
    <div className="mx-auto" style={{ maxWidth: 1200 }}>
      <h2 className="font-heading font-bold text-xl md:text-2xl text-center" style={{ color: '#4B5056' }}>{s.whyStrikingly.heading}</h2>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {s.whyStrikingly.items.map((item, i) => {
          const Icon = whyIcons[i];
          return (
            <div key={item.title} className="flex flex-col items-center text-center">
              <div
                className="flex items-center justify-center rounded-full"
                style={{ width: 48, height: 48, background: '#8159BB' }}
                aria-hidden="true"
              >
                <Icon />
              </div>
              <h3 className="mt-4 font-heading font-bold text-sm" style={{ color: '#4B5056', letterSpacing: '0.05em' }}>{item.title}</h3>
              <p className="mt-2 text-sm" style={{ color: '#636972', maxWidth: 300 }}>{item.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

// ─── FAQ Accordion ────────────────────────────────────────────────

const FaqItem = ({ item, index }) => {
  const [expanded, setExpanded] = useState(index === 0);
  const contentId = `faq-answer-${index}`;

  return (
    <div style={{ borderBottom: '1px solid #E2E4E7' }}>
      <button
        type="button"
        onClick={() => setExpanded(!expanded)}
        aria-expanded={expanded}
        aria-controls={contentId}
        className="flex items-center justify-between w-full py-4 text-left font-heading font-bold text-sm md:text-base"
        style={{ color: '#4B5056', background: 'none', border: 'none', cursor: 'pointer', padding: '16px 0' }}
      >
        {item.question}
        <ChevronDown expanded={expanded} />
      </button>
      <div
        id={contentId}
        role="region"
        style={{
          maxHeight: expanded ? 300 : 0,
          overflow: 'hidden',
          transition: 'max-height 0.3s ease',
        }}
      >
        <p className="pb-4 text-sm leading-relaxed" style={{ color: '#636972' }}>
          {item.answer}
        </p>
      </div>
    </div>
  );
};

const Faq = () => (
  <section className="px-5 md:px-10 py-10" style={{ background: '#F4F6F8' }}>
    <div className="mx-auto" style={{ maxWidth: 800 }}>
      <h2 className="font-heading font-bold text-xl md:text-2xl text-center" style={{ color: '#4B5056' }}>{s.faq.heading}</h2>
      <div className="mt-8">
        {s.faq.items.map((item, i) => (
          <FaqItem key={i} item={item} index={i} />
        ))}
      </div>
    </div>
  </section>
);

// ─── Closing CTA ──────────────────────────────────────────────────

const ClosingCta = () => (
  <section className="px-5 md:px-10 py-12 md:py-16 text-center">
    <div className="mx-auto" style={{ maxWidth: 600 }}>
      <h2 className="font-heading font-bold text-xl md:text-2xl" style={{ color: '#4B5056' }}>{s.closingCta.heading}</h2>
      <p className="mt-3 text-sm" style={{ color: '#636972' }}>{s.closingCta.sub}</p>
      <a
        href="/s/ai_site_builder"
        className="inline-flex items-center justify-center ai-gradient-bg text-white font-heading font-bold uppercase rounded px-6 mt-6"
        style={{ height: 44, fontSize: 14, minWidth: 220 }}
      >
        {s.closingCta.cta}
      </a>
    </div>
  </section>
);

// ─── Footer ───────────────────────────────────────────────────────

const Footer = () => (
  <footer className="px-5 md:px-10 py-10" style={{ background: '#2E2E2F' }}>
    <div className="mx-auto" style={{ maxWidth: 1200 }}>
      <div className="flex flex-col md:flex-row md:justify-between gap-8">
        {/* Logo */}
        <div className="flex-shrink-0">
          <span className="font-heading font-bold text-base" style={{ color: '#FFFFFF', textTransform: 'none' }}>
            strikingly
          </span>
        </div>
        {/* Link columns */}
        <div className="flex flex-wrap gap-10 md:gap-16">
          {s.footer.columns.map(col => (
            <div key={col.heading}>
              <h4 className="font-heading font-bold text-xs uppercase mb-3" style={{ color: '#FFFFFF', letterSpacing: '0.05em' }}>{col.heading}</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {col.links.map(link => (
                  <li key={link.label} className="mb-2">
                    <a href={link.href} className="text-sm hover:underline" style={{ color: '#C6C9CD' }}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-8 pt-6" style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
        <p className="text-xs" style={{ color: '#C6C9CD' }}>{s.footer.copyright(new Date().getFullYear())}</p>
      </div>
    </div>
  </footer>
);

// ─── Main Page Component ──────────────────────────────────────────

const GeneratorsHub = () => {
  return (
    <div style={{ fontFamily: "'Open Sans', sans-serif", color: '#636972', background: '#FFFFFF', minHeight: '100vh' }}>
      <TopBar />
      <Breadcrumb />
      <main>
        <Hero />
        <FeaturedGenerators />
        <BrowseByCategory />
        <AllGeneratorsDirectory />
        <HowItWorks />
        <WhyStrikingly />
        <Faq />
        <ClosingCta />
      </main>
      <Footer />
    </div>
  );
};

export default GeneratorsHub;
