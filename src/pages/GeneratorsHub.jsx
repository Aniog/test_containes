import { useEffect, useId, useRef, useState } from 'react';
import { Search, ChevronDown, ChevronRight, ArrowRight, Zap, Smartphone, CreditCard } from 'lucide-react';
import { strings, featuredGenerators, allGeneratorsByCategory } from '../data/generators.js';

const s = strings.en;

/* ─── SVG Illustrations ─── */

function HeroIllustration() {
  return (
    <svg
      viewBox="0 0 400 280"
      width="400"
      height="280"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="w-full h-auto max-w-[400px]"
    >
      <defs>
        <linearGradient id="heroGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#7671FF" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#CB0C9F" stopOpacity="0.2" />
        </linearGradient>
      </defs>
      {/* Browser window */}
      <rect x="20" y="20" width="360" height="240" rx="8" fill="none" stroke="#8159BB" strokeWidth="1.5" opacity="0.4" />
      {/* Title bar */}
      <rect x="20" y="20" width="360" height="28" rx="8" fill="url(#heroGrad)" opacity="0.5" />
      <circle cx="40" cy="34" r="4" fill="#C6C9CD" />
      <circle cx="54" cy="34" r="4" fill="#C6C9CD" />
      <circle cx="68" cy="34" r="4" fill="#C6C9CD" />
      {/* Content blocks */}
      <rect x="40" y="68" width="120" height="80" rx="4" fill="none" stroke="#8159BB" strokeWidth="1" opacity="0.35" />
      <rect x="180" y="68" width="180" height="12" rx="3" fill="#C6C9CD" opacity="0.5" />
      <rect x="180" y="90" width="140" height="10" rx="3" fill="#C6C9CD" opacity="0.3" />
      <rect x="180" y="108" width="160" height="10" rx="3" fill="#C6C9CD" opacity="0.3" />
      <rect x="180" y="126" width="100" height="10" rx="3" fill="#C6C9CD" opacity="0.3" />
      <rect x="40" y="168" width="100" height="10" rx="3" fill="#C6C9CD" opacity="0.4" />
      <rect x="40" y="188" width="320" height="1" rx="0.5" fill="#C6C9CD" opacity="0.3" />
      <rect x="40" y="200" width="80" height="40" rx="3" fill="none" stroke="#8159BB" strokeWidth="1" opacity="0.25" />
      <rect x="140" y="200" width="80" height="40" rx="3" fill="none" stroke="#8159BB" strokeWidth="1" opacity="0.25" />
      <rect x="240" y="200" width="80" height="40" rx="3" fill="none" stroke="#8159BB" strokeWidth="1" opacity="0.25" />
    </svg>
  );
}

function CategoryIllustration({ category }) {
  const baseStroke = { fill: 'none', stroke: '#8159BB', strokeWidth: 1.2, opacity: 0.35 };
  const contentStroke = { fill: 'none', stroke: '#C6C9CD', strokeWidth: 1, opacity: 0.4 };

  const shapes = {
    websites: (
      <>
        <rect x="14" y="10" width="72" height="52" rx="4" {...baseStroke} />
        <rect x="22" y="18" width="56" height="6" rx="2" {...contentStroke} />
        <rect x="22" y="30" width="28" height="22" rx="2" {...contentStroke} />
        <rect x="54" y="30" width="24" height="6" rx="2" {...contentStroke} />
        <rect x="54" y="40" width="24" height="4" rx="1" {...contentStroke} opacity="0.25" />
        <rect x="54" y="48" width="24" height="4" rx="1" {...contentStroke} opacity="0.25" />
      </>
    ),
    'landing-pages': (
      <>
        <rect x="14" y="10" width="72" height="52" rx="4" {...baseStroke} />
        <rect x="22" y="18" width="56" height="8" rx="2" {...contentStroke} />
        <rect x="22" y="32" width="56" height="4" rx="1" {...contentStroke} opacity="0.3" />
        <rect x="22" y="40" width="56" height="4" rx="1" {...contentStroke} opacity="0.3" />
        <rect x="30" y="50" width="40" height="8" rx="2" {...contentStroke} />
      </>
    ),
    portfolios: (
      <>
        <rect x="14" y="10" width="72" height="52" rx="4" {...baseStroke} />
        <rect x="22" y="18" width="56" height="6" rx="2" {...contentStroke} />
        <rect x="22" y="30" width="18" height="18" rx="2" {...contentStroke} />
        <rect x="44" y="30" width="18" height="18" rx="2" {...contentStroke} />
        <rect x="66" y="30" width="12" height="18" rx="2" {...contentStroke} />
      </>
    ),
    blogs: (
      <>
        <rect x="14" y="10" width="72" height="52" rx="4" {...baseStroke} />
        <rect x="22" y="18" width="56" height="6" rx="2" {...contentStroke} />
        <rect x="22" y="30" width="56" height="4" rx="1" {...contentStroke} opacity="0.3" />
        <rect x="22" y="38" width="40" height="4" rx="1" {...contentStroke} opacity="0.3" />
        <rect x="22" y="46" width="30" height="4" rx="1" {...contentStroke} opacity="0.3" />
        <line x1="22" y1="56" x2="78" y2="56" {...contentStroke} opacity="0.2" />
      </>
    ),
    stores: (
      <>
        <rect x="14" y="10" width="72" height="52" rx="4" {...baseStroke} />
        <rect x="22" y="18" width="56" height="6" rx="2" {...contentStroke} />
        <rect x="22" y="30" width="24" height="24" rx="2" {...contentStroke} />
        <rect x="50" y="30" width="28" height="4" rx="1" {...contentStroke} opacity="0.3" />
        <rect x="50" y="38" width="20" height="4" rx="1" {...contentStroke} opacity="0.3" />
        <rect x="50" y="46" width="24" height="8" rx="2" {...contentStroke} />
      </>
    ),
    'link-in-bio': (
      <>
        <rect x="30" y="10" width="40" height="52" rx="6" {...baseStroke} />
        <circle cx="50" cy="22" r="6" {...contentStroke} />
        <rect x="36" y="34" width="28" height="4" rx="1" {...contentStroke} opacity="0.3" />
        <rect x="36" y="42" width="28" height="4" rx="1" {...contentStroke} opacity="0.3" />
        <rect x="36" y="50" width="28" height="4" rx="1" {...contentStroke} opacity="0.3" />
      </>
    ),
  };

  return (
    <svg viewBox="0 0 100 72" width="100" height="72" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {shapes[category] || shapes.websites}
    </svg>
  );
}

/* ─── Section Components ─── */

function TopBar() {
  return (
    <header className="bg-white border-b" style={{ borderColor: 'var(--subtle-divider)' }}>
      <div className="max-w-[1200px] mx-auto px-5 py-3">
        <a href="/" className="font-heading text-lg" style={{ color: 'var(--heading-color)' }}>
          {s.topBar.logo}
        </a>
      </div>
    </header>
  );
}

function Breadcrumb() {
  return (
    <nav aria-label="Breadcrumb" className="max-w-[1200px] mx-auto px-5 py-3">
      <ol className="flex items-center gap-2 text-sm" style={{ color: 'var(--body-text)' }}>
        <li>
          <a href="/" className="hover:underline">{s.breadcrumb.home}</a>
        </li>
        <li aria-hidden="true" className="text-xs">{'>'}</li>
        <li aria-current="page" style={{ color: 'var(--heading-color)' }}>
          {s.breadcrumb.current}
        </li>
      </ol>
    </nav>
  );
}

function Hero() {
  return (
    <section className="hero-wash">
      <div className="max-w-[1200px] mx-auto px-5 py-16 md:py-20">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          <div className="flex-1 text-center md:text-left">
            <h1 className="font-heading mb-4">
              <span className="block text-[28px] md:text-[40px] lg:text-[48px]" style={{ color: 'var(--hero-h1-color)' }}>
                {s.hero.h1Line1}
              </span>
              <span className="block text-[28px] md:text-[40px] lg:text-[48px] ai-gradient-text">
                {s.hero.h1Line2}
              </span>
            </h1>
            <p className="text-base md:text-lg mb-8 max-w-lg mx-auto md:mx-0" style={{ color: 'var(--body-text)' }}>
              {s.hero.subheadline}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
              <a href="/s/ai_site_builder" className="btn btn-large ai-gradient-fill">
                {s.hero.primaryCta}
              </a>
              <a href="#all-generators" className="btn btn-large btn-ghost">
                {s.hero.secondaryCta}
              </a>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <HeroIllustration />
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturedGenerators() {
  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--light-bg)' }}>
      <div className="max-w-[1200px] mx-auto">
        <h2 className="font-heading text-[22px] md:text-[28px] mb-2 text-center" style={{ color: 'var(--heading-color)' }}>
          {s.featured.heading}
        </h2>
        <p className="text-center mb-8" style={{ color: 'var(--body-text)' }}>
          {s.featured.subheading}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {featuredGenerators.map((g) => (
            <a
              key={g.slug}
              href={`/generators/${g.slug}`}
              className="generator-card block group"
            >
              <h3 className="font-heading text-sm mb-2" style={{ color: 'var(--heading-color)' }}>
                {g.name}
              </h3>
              <p className="text-sm mb-3" style={{ color: 'var(--body-text)' }}>
                {g.description}
              </p>
              <span className="category-tag">{g.category}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function BrowseByCategory() {
  return (
    <section className="section-padding">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="font-heading text-[22px] md:text-[28px] mb-8 text-center" style={{ color: 'var(--heading-color)' }}>
          {s.browseByCategory.heading}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {s.browseByCategory.categories.map((cat) => (
            <a
              key={cat.slug}
              href={`/generators#${cat.slug}`}
              className="generator-card block group"
            >
              <div className="mb-4">
                <CategoryIllustration category={cat.slug} />
              </div>
              <h3 className="font-heading text-sm mb-2 flex items-center gap-2" style={{ color: 'var(--heading-color)' }}>
                {cat.name}
                <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: 'var(--brand-purple)' }} />
              </h3>
              <p className="text-sm" style={{ color: 'var(--body-text)' }}>
                {cat.description}
              </p>
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
  const sectionRefs = useRef({});

  const toggleSection = (id) => {
    setExpandedSections((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const filtered = allGeneratorsByCategory.map((cat) => {
    if (!query.trim()) return { ...cat, visibleGenerators: cat.generators, hasMatch: true };
    const q = query.toLowerCase();
    const visible = cat.generators.filter(
      (g) =>
        g.name.toLowerCase().includes(q) ||
        g.description.toLowerCase().includes(q) ||
        cat.name.toLowerCase().includes(q)
    );
    return { ...cat, visibleGenerators: visible, hasMatch: visible.length > 0 };
  });

  const totalMatches = filtered.reduce((sum, cat) => sum + cat.visibleGenerators.length, 0);
  const isSearching = query.trim().length > 0;

  return (
    <section id="all-generators" className="section-padding" style={{ backgroundColor: 'var(--light-bg)' }}>
      <div className="max-w-[1200px] mx-auto">
        <h2 className="font-heading text-[22px] md:text-[28px] mb-2 text-center" style={{ color: 'var(--heading-color)' }}>
          {s.allGenerators.heading}
        </h2>
        <p className="text-center mb-6" style={{ color: 'var(--body-text)' }}>
          {s.allGenerators.subheading}
        </p>

        {/* Search */}
        <div className="relative max-w-[480px] mx-auto mb-4">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5" style={{ color: 'var(--card-border)' }} aria-hidden="true" />
          <input
            type="search"
            aria-label={s.allGenerators.searchLabel}
            placeholder={s.allGenerators.searchPlaceholder}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="search-input"
          />
        </div>

        {isSearching && (
          <p className="text-center text-sm mb-6" style={{ color: 'var(--body-text)' }}>
            {totalMatches === 0 ? s.allGenerators.noResults : s.allGenerators.resultCount.replace('{count}', totalMatches)}
          </p>
        )}

        {isSearching && totalMatches === 0 && (
          <div className="text-center mb-10">
            <button
              type="button"
              onClick={() => setQuery('')}
              className="btn btn-ghost mb-3"
            >
              {s.allGenerators.clearSearch}
            </button>
            <p className="text-sm">
              <a href="/s/ai_site_builder" className="underline" style={{ color: 'var(--brand-purple)' }}>
                {s.allGenerators.cantFindIt}
              </a>
            </p>
          </div>
        )}

        {/* Category subsections */}
        {filtered.map((cat) => {
          if (!cat.hasMatch) return null;
          const isExpanded = !!expandedSections[cat.id];
          const displayCount = isSearching ? cat.visibleGenerators.length : 6;
          const hasMore = !isSearching && cat.visibleGenerators.length > displayCount;
          const shown = isSearching ? cat.visibleGenerators : cat.visibleGenerators.slice(0, isExpanded ? cat.visibleGenerators.length : displayCount);

          return (
            <div key={cat.id} id={cat.id} className="mb-10 scroll-mt-20">
              <h3 className="font-heading text-lg mb-1" style={{ color: 'var(--heading-color)' }}>
                {cat.name}
              </h3>
              <p className="text-sm mb-4" style={{ color: 'var(--body-text)' }}>
                {cat.description}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {shown.map((g) => (
                  <a
                    key={g.slug}
                    href={`/generators/${g.slug}`}
                    className="generator-card block"
                    data-generator-name={g.name.toLowerCase()}
                    data-generator-desc={g.description.toLowerCase()}
                    data-generator-cat={cat.name.toLowerCase()}
                  >
                    <div className="mb-3">
                      <CategoryIllustration category={cat.id} />
                    </div>
                    <h4 className="font-heading text-sm mb-1" style={{ color: 'var(--heading-color)' }}>
                      {g.name}
                    </h4>
                    <p className="text-sm" style={{ color: 'var(--body-text)' }}>
                      {g.description}
                    </p>
                  </a>
                ))}
              </div>
              {hasMore && (
                <button
                  type="button"
                  onClick={() => toggleSection(cat.id)}
                  className="btn btn-ghost mt-4 mx-auto block"
                  aria-expanded={isExpanded}
                  aria-controls={`grid-${cat.id}`}
                >
                  {isExpanded
                    ? s.allGenerators.showLess
                    : s.allGenerators.showAll.replace('{count}', cat.visibleGenerators.length)}
                </button>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section className="section-padding">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="font-heading text-[22px] md:text-[28px] mb-10 text-center" style={{ color: 'var(--heading-color)' }}>
          {s.howItWorks.heading}
        </h2>
        <div className="flex flex-col md:flex-row gap-8 md:gap-10 justify-center">
          {s.howItWorks.steps.map((step) => (
            <div key={step.number} className="flex md:flex-col items-start md:items-center gap-4 md:gap-5 flex-1 max-w-xs">
              <div className="step-circle">{step.number}</div>
              <div>
                <h3 className="font-heading text-sm mb-2" style={{ color: 'var(--heading-color)' }}>
                  {step.title}
                </h3>
                <p className="text-sm" style={{ color: 'var(--body-text)' }}>
                  {step.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyStrikingly() {
  const icons = {
    'LIVE IN SECONDS': Zap,
    'MOBILE BY DEFAULT': Smartphone,
    'FREE TO START': CreditCard,
  };

  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--light-bg)' }}>
      <div className="max-w-[1200px] mx-auto">
        <h2 className="font-heading text-[22px] md:text-[28px] mb-10 text-center" style={{ color: 'var(--heading-color)' }}>
          {s.whyStrikingly.heading}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {s.whyStrikingly.claims.map((claim) => {
            const Icon = icons[claim.title];
            return (
              <div key={claim.title} className="text-center">
                <div className="flex justify-center mb-4">
                  <Icon className="w-8 h-8" style={{ color: 'var(--brand-purple)' }} aria-hidden="true" />
                </div>
                <h3 className="font-heading text-sm mb-2" style={{ color: 'var(--heading-color)' }}>
                  {claim.title}
                </h3>
                <p className="text-sm" style={{ color: 'var(--body-text)' }}>
                  {claim.body}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="section-padding">
      <div className="max-w-[800px] mx-auto">
        <h2 className="font-heading text-[22px] md:text-[28px] mb-8 text-center" style={{ color: 'var(--heading-color)' }}>
          {s.faq.heading}
        </h2>
        <div>
          {s.faq.questions.map((item, i) => (
            <details
              key={i}
              className="faq-details"
              open={openIndex === i}
              onToggle={(e) => {
                if (e.target.open) setOpenIndex(i);
              }}
            >
              <summary
                aria-expanded={openIndex === i}
                aria-controls={`faq-answer-${i}`}
              >
                <span>{item.q}</span>
                <ChevronDown
                  className={`w-5 h-5 flex-shrink-0 transition-transform duration-200 ${openIndex === i ? 'rotate-180' : ''}`}
                  style={{ color: 'var(--brand-purple)' }}
                  aria-hidden="true"
                />
              </summary>
              <div id={`faq-answer-${i}`} className="faq-answer">
                {item.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function ClosingCTA() {
  return (
    <section className="section-padding text-center">
      <div className="max-w-[600px] mx-auto">
        <h2 className="font-heading text-[22px] md:text-[32px] mb-3" style={{ color: 'var(--heading-color)' }}>
          {s.closingCta.headline}
        </h2>
        <p className="text-base mb-6" style={{ color: 'var(--body-text)' }}>
          {s.closingCta.sub}
        </p>
        <a href="/s/ai_site_builder" className="btn btn-large ai-gradient-fill">
          {s.closingCta.cta}
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t" style={{ borderColor: 'var(--subtle-divider)', backgroundColor: 'var(--light-bg)' }}>
      <div className="max-w-[1200px] mx-auto px-5 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {s.footer.columns.map((col) => (
            <div key={col.title}>
              <h4 className="font-heading text-xs mb-4" style={{ color: 'var(--heading-color)' }}>
                {col.title}
              </h4>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm hover:underline"
                      style={{ color: 'var(--body-text)' }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t pt-6 text-center text-sm" style={{ borderColor: 'var(--subtle-divider)', color: 'var(--body-text)' }}>
          {s.footer.copyright}
        </div>
      </div>
    </footer>
  );
}

/* ─── Main Page ─── */

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
