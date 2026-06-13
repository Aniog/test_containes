import React, { useState, useCallback, useRef, useEffect } from 'react';
import { strings } from '../../data/strings.en';
import { featuredGenerators, categories, allGenerators } from '../../data/generators';

const VISIBLE_COUNT = 6;

function slugify(text) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

/* ─── Inline SVG Icons ─── */
const SearchIcon = () => (
  <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#636972" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#8159BB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
  </svg>
);

const ChevronDownIcon = ({ open }) => (
  <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#636972" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
    style={{ transition: 'transform 0.2s ease', transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }}>
    <path d="m6 9 6 6 6-6" />
  </svg>
);

const WebsiteIcon = () => (
  <svg aria-hidden="true" width="40" height="40" viewBox="0 0 48 48" fill="none" stroke="#8159BB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="6" y="6" width="36" height="28" rx="3" /><line x1="6" y1="14" x2="42" y2="14" /><line x1="18" y1="14" x2="18" y2="34" /><rect x="22" y="18" width="16" height="12" rx="1" />
  </svg>
);

const LandingPageIcon = () => (
  <svg aria-hidden="true" width="40" height="40" viewBox="0 0 48 48" fill="none" stroke="#8159BB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="8" y="4" width="32" height="40" rx="3" /><line x1="16" y1="14" x2="32" y2="14" /><line x1="16" y1="20" x2="28" y2="20" /><rect x="16" y="26" width="16" height="6" rx="1" />
  </svg>
);

const PortfolioIcon = () => (
  <svg aria-hidden="true" width="40" height="40" viewBox="0 0 48 48" fill="none" stroke="#8159BB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="6" y="10" width="36" height="28" rx="3" /><circle cx="18" cy="22" r="4" /><path d="M6 32l10-8 8 6 8-10 10 12" />
  </svg>
);

const BlogIcon = () => (
  <svg aria-hidden="true" width="40" height="40" viewBox="0 0 48 48" fill="none" stroke="#8159BB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="8" y="4" width="32" height="40" rx="3" /><line x1="16" y1="12" x2="32" y2="12" /><line x1="16" y1="18" x2="32" y2="18" /><line x1="16" y1="24" x2="28" y2="24" /><line x1="16" y1="30" x2="32" y2="30" /><line x1="16" y1="36" x2="24" y2="36" />
  </svg>
);

const StoreIcon = () => (
  <svg aria-hidden="true" width="40" height="40" viewBox="0 0 48 48" fill="none" stroke="#8159BB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M8 20h32v20a3 3 0 0 1-3 3H11a3 3 0 0 1-3-3V20z" /><path d="M6 20l4-12h28l4 12" /><rect x="18" y="26" width="12" height="8" rx="1" />
  </svg>
);

const LinkInBioIcon = () => (
  <svg aria-hidden="true" width="40" height="40" viewBox="0 0 48 48" fill="none" stroke="#8159BB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="24" cy="14" r="6" /><line x1="16" y1="24" x2="32" y2="24" /><line x1="18" y1="30" x2="30" y2="30" /><line x1="20" y1="36" x2="28" y2="36" />
  </svg>
);

const categoryIcons = {
  websites: WebsiteIcon,
  'landing-pages': LandingPageIcon,
  portfolios: PortfolioIcon,
  blogs: BlogIcon,
  stores: StoreIcon,
  'link-in-bio': LinkInBioIcon,
};

const categoryTagMap = {
  websites: 'Website',
  'landing-pages': 'Landing Page',
  portfolios: 'Portfolio',
  blogs: 'Blog',
  stores: 'Store',
  'link-in-bio': 'Link-in-Bio',
};

/* ─── Top Bar ─── */
function TopBar() {
  return (
    <header className="w-full bg-white border-b border-subtle-divider sticky top-0 z-50">
      <div className="max-w-content mx-auto px-5 h-14 flex items-center">
        <a href="/" className="font-heading text-lg text-hero-heading tracking-wide focus-ring rounded" aria-label="Strikingly home">
          {strings.topBar.logoText}
        </a>
      </div>
    </header>
  );
}

/* ─── Breadcrumb ─── */
function Breadcrumb() {
  return (
    <nav aria-label="Breadcrumb" className="max-w-content mx-auto px-5 py-3">
      <ol className="flex items-center gap-2 text-sm text-body-text font-body">
        <li><a href="/" className="hover:text-brand-purple focus-ring rounded">Strikingly</a></li>
        <li aria-hidden="true" className="text-brand-purple">&gt;</li>
        <li aria-current="page">{strings.breadcrumb.currentPage}</li>
      </ol>
    </nav>
  );
}

/* ─── Hero ─── */
function Hero() {
  return (
    <section className="relative overflow-hidden" style={{ background: 'radial-gradient(ellipse at 70% 30%, rgba(118,113,255,0.06) 0%, rgba(203,12,159,0.04) 40%, transparent 70%)' }}>
      <div className="max-w-content mx-auto px-5 py-16 md:py-20 flex flex-col md:flex-row items-center gap-10 md:gap-16">
        <div className="flex-1 text-center md:text-left">
          <h1 className="font-heading text-[28px] md:text-[40px] lg:text-[48px] leading-tight mb-5">
            <span className="block text-hero-heading">{strings.hero.h1Line1}</span>
            <span className="block ai-gradient-text">{strings.hero.h1Line2}</span>
          </h1>
          <p className="font-body text-body-text text-base md:text-lg mb-8 max-w-lg mx-auto md:mx-0">
            {strings.hero.subheadline}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
            <a
              href="/s/ai_site_builder"
              className="ai-gradient-bg inline-flex items-center justify-center h-11 px-6 rounded font-heading text-sm text-white uppercase tracking-wide focus-ring transition-all hover:opacity-90"
            >
              {strings.hero.primaryCta}
            </a>
            <a
              href="#all-generators"
              className="inline-flex items-center justify-center h-11 px-6 rounded font-heading text-sm text-brand-purple uppercase tracking-wide border border-brand-purple focus-ring transition-colors hover:bg-brand-purple hover:text-white"
            >
              {strings.hero.secondaryCta}
            </a>
          </div>
        </div>
        <div className="flex-shrink-0 w-full max-w-md md:max-w-lg" aria-hidden="true">
          <svg width="480" height="340" viewBox="0 0 480 340" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            <rect x="40" y="20" width="400" height="280" rx="12" stroke="#8159BB" strokeWidth="1.5" fill="white" fillOpacity="0.5"/>
            <rect x="40" y="20" width="400" height="40" rx="12" stroke="#8159BB" strokeWidth="1.5" fill="none"/>
            <line x1="40" y1="60" x2="440" y2="60" stroke="#8159BB" strokeWidth="1"/>
            <circle cx="62" cy="40" r="6" stroke="#8159BB" strokeWidth="1.5"/>
            <circle cx="82" cy="40" r="6" stroke="#8159BB" strokeWidth="1.5"/>
            <circle cx="102" cy="40" r="6" stroke="#8159BB" strokeWidth="1.5"/>
            <rect x="70" y="80" width="160" height="12" rx="2" fill="#E2E4E7"/>
            <rect x="70" y="100" width="120" height="8" rx="2" fill="#E2E4E7"/>
            <rect x="70" y="120" width="340" height="60" rx="4" stroke="#8159BB" strokeWidth="1" fill="none"/>
            <rect x="86" y="136" width="80" height="8" rx="2" fill="#7671FF" fillOpacity="0.3"/>
            <rect x="86" y="152" width="140" height="6" rx="2" fill="#E2E4E7"/>
            <rect x="70" y="200" width="160" height="70" rx="4" stroke="#8159BB" strokeWidth="1" fill="none"/>
            <rect x="86" y="216" width="60" height="6" rx="2" fill="#E2E4E7"/>
            <rect x="86" y="230" width="120" height="6" rx="2" fill="#E2E4E7"/>
            <rect x="86" y="244" width="90" height="6" rx="2" fill="#E2E4E7"/>
            <rect x="250" y="200" width="160" height="70" rx="4" stroke="#8159BB" strokeWidth="1" fill="none"/>
            <rect x="266" y="216" width="60" height="6" rx="2" fill="#E2E4E7"/>
            <rect x="266" y="230" width="120" height="6" rx="2" fill="#E2E4E7"/>
            <rect x="266" y="244" width="90" height="6" rx="2" fill="#E2E4E7"/>
            <rect x="160" y="290" width="160" height="8" rx="4" fill="url(#heroGrad)"/>
            <defs>
              <linearGradient id="heroGrad" x1="160" y1="294" x2="320" y2="294" gradientUnits="userSpaceOnUse">
                <stop stopColor="#7671FF"/>
                <stop offset="1" stopColor="#CB0C9F"/>
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </section>
  );
}

/* ─── Featured Generators ─── */
function FeaturedGenerators() {
  return (
    <section className="py-10 md:py-16">
      <div className="max-w-content mx-auto px-5">
        <h2 className="font-heading text-[22px] md:text-[28px] text-heading mb-2 text-center">{strings.featured.heading}</h2>
        <p className="font-body text-body-text text-center mb-10">{strings.featured.subheading}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {featuredGenerators.map((gen) => (
            <a
              key={gen.slug}
              href={`/generators/${gen.slug}`}
              className="block bg-white border border-card-border rounded-[3px] p-5 card-hover focus-ring"
            >
              <h3 className="font-heading text-sm text-heading mb-1">{gen.name}</h3>
              <p className="font-body text-sm text-body-text mb-3">{gen.description}</p>
              <span className="inline-block font-heading text-[11px] text-brand-purple uppercase border border-brand-purple rounded-[3px] px-1.5 py-0.5">
                {gen.category}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Browse by Category ─── */
function BrowseByCategory() {
  return (
    <section className="py-10 md:py-16 bg-light-bg">
      <div className="max-w-content mx-auto px-5">
        <h2 className="font-heading text-[22px] md:text-[28px] text-heading mb-10 text-center">{strings.browseByCategory.heading}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((cat) => {
            const Icon = categoryIcons[cat.id];
            const catStrings = strings.categories[cat.id];
            return (
              <a
                key={cat.id}
                href={cat.href}
                className="block bg-white border border-card-border rounded-[3px] p-5 card-hover focus-ring text-center"
              >
                <div className="flex justify-center mb-3" aria-hidden="true">
                  <Icon />
                </div>
                <h3 className="font-heading text-sm text-heading mb-1">{catStrings.name}</h3>
                <p className="font-body text-sm text-body-text mb-3">{catStrings.description}</p>
                <span className="inline-block text-brand-purple" aria-hidden="true">
                  <ArrowRightIcon />
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─── Generator Card (for directory subsections) ─── */
function GeneratorCard({ gen, categoryIcon: CategoryIcon }) {
  return (
    <a
      href={`/generators/${gen.slug}`}
      className="block bg-white border border-card-border rounded-[3px] p-5 card-hover focus-ring"
    >
      {CategoryIcon && (
        <div className="mb-3" aria-hidden="true">
          <CategoryIcon />
        </div>
      )}
      <h4 className="font-heading text-sm text-heading mb-1">{gen.name}</h4>
      <p className="font-body text-sm text-body-text">{gen.description}</p>
    </a>
  );
}

/* ─── Category Subsection ─── */
function CategorySubsection({ catKey, searchQuery }) {
  const cat = allGenerators[catKey];
  const catStrings = strings.categories[catKey];
  const Icon = categoryIcons[catKey];
  const [expanded, setExpanded] = useState(false);
  const [jsReady, setJsReady] = useState(false);
  const collapsibleRef = useRef(null);

  useEffect(() => {
    setJsReady(true);
  }, []);

  const filtered = searchQuery
    ? cat.generators.filter((g) => {
        const q = searchQuery.toLowerCase();
        return (
          g.name.toLowerCase().includes(q) ||
          g.description.toLowerCase().includes(q) ||
          catStrings.name.toLowerCase().includes(q)
        );
      })
    : cat.generators;

  const hasMore = filtered.length > VISIBLE_COUNT;
  const visible = filtered.slice(0, VISIBLE_COUNT);
  const hidden = filtered.slice(VISIBLE_COUNT);
  const sectionId = `subsection-${catKey}`;

  const showToggle = hasMore && !searchQuery;
  const isCollapsed = jsReady && !expanded;

  if (searchQuery && filtered.length === 0) return null;

  return (
    <div id={cat.id} className="scroll-mt-20">
      <h3 className="font-heading text-lg md:text-xl text-heading mb-1">{catStrings.name}</h3>
      <p className="font-body text-sm text-body-text mb-5">{cat.description}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {visible.map((gen) => (
          <GeneratorCard key={gen.slug} gen={gen} categoryIcon={Icon} />
        ))}
      </div>
      {hasMore && hidden.length > 0 && (
        <div
          id={sectionId}
          ref={collapsibleRef}
          className={jsReady ? 'generator-grid-collapsible' : ''}
          data-collapsed={jsReady ? String(!expanded) : undefined}
          aria-hidden={jsReady && !expanded ? 'true' : undefined}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 pt-5">
            {hidden.map((gen) => (
              <GeneratorCard key={gen.slug} gen={gen} categoryIcon={Icon} />
            ))}
          </div>
        </div>
      )}
      {showToggle && (
        <div className="mt-5 text-center">
          <button
            onClick={() => setExpanded(!expanded)}
            aria-expanded={expanded}
            aria-controls={sectionId}
            className="font-heading text-sm text-brand-purple uppercase border border-brand-purple rounded-[3px] px-4 py-2 bg-transparent hover:bg-brand-purple hover:text-white transition-colors focus-ring"
          >
            {expanded
              ? strings.allGenerators.showLess
              : strings.allGenerators.showAll.replace('{count}', filtered.length)
            }
          </button>
        </div>
      )}
    </div>
  );
}

/* ─── All Generators Directory ─── */
function AllGeneratorsDirectory() {
  const [searchQuery, setSearchQuery] = useState('');
  const inputRef = useRef(null);

  const allGens = Object.values(allGenerators).flatMap((cat) =>
    cat.generators.map((g) => ({ ...g, category: cat.name }))
  );

  const matchCount = searchQuery
    ? allGens.filter((g) => {
        const q = searchQuery.toLowerCase();
        return (
          g.name.toLowerCase().includes(q) ||
          g.description.toLowerCase().includes(q) ||
          g.category.toLowerCase().includes(q)
        );
      }).length
    : allGens.length;

  const handleClear = useCallback(() => {
    setSearchQuery('');
    if (inputRef.current) inputRef.current.focus();
  }, []);

  return (
    <section id="all-generators" className="py-10 md:py-16">
      <div className="max-w-content mx-auto px-5">
        <h2 className="font-heading text-[22px] md:text-[28px] text-heading mb-2 text-center">{strings.allGenerators.heading}</h2>
        <p className="font-body text-body-text text-center mb-8">{strings.allGenerators.subheading}</p>

        <div className="max-w-lg mx-auto mb-8">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none" aria-hidden="true">
              <SearchIcon />
            </div>
            <input
              ref={inputRef}
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search generators"
              placeholder={strings.allGenerators.searchPlaceholder}
              className="w-full h-10 pl-10 pr-4 border border-card-border rounded-[3px] font-body text-sm text-heading bg-white focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple"
            />
          </div>
          {searchQuery && (
            <p className="mt-2 text-sm text-body-text font-body">
              {matchCount > 0
                ? strings.allGenerators.matchCount.replace('{count}', matchCount)
                : strings.allGenerators.noResults
              }
            </p>
          )}
          {searchQuery && matchCount === 0 && (
            <div className="mt-4 text-center">
              <button
                onClick={handleClear}
                className="font-heading text-sm text-brand-purple uppercase border border-brand-purple rounded-[3px] px-4 py-2 bg-transparent hover:bg-brand-purple hover:text-white transition-colors focus-ring mb-3"
              >
                {strings.allGenerators.clearSearch}
              </button>
              <p className="font-body text-sm text-body-text">
                <a href="/s/ai_site_builder" className="text-brand-purple hover:underline focus-ring rounded">
                  {strings.allGenerators.cantFindIt}
                </a>
              </p>
            </div>
          )}
        </div>

        <div className="flex flex-col gap-12">
          {Object.keys(allGenerators).map((catKey) => (
            <CategorySubsection key={catKey} catKey={catKey} searchQuery={searchQuery} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── How It Works ─── */
function HowItWorks() {
  return (
    <section className="py-10 md:py-16 bg-light-bg">
      <div className="max-w-content mx-auto px-5">
        <h2 className="font-heading text-[22px] md:text-[28px] text-heading mb-10 text-center">{strings.howItWorks.heading}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {strings.howItWorks.steps.map((step, i) => (
            <div key={i} className="text-center">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-full ai-gradient-bg text-white font-heading text-sm mb-4" aria-hidden="true">
                {i + 1}
              </div>
              <h3 className="font-heading text-sm text-heading mb-2">{step.title}</h3>
              <p className="font-body text-sm text-body-text">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Why Strikingly ─── */
function WhyStrikingly() {
  const icons = [
    () => (
      <svg aria-hidden="true" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#8159BB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    () => (
      <svg aria-hidden="true" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#8159BB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" /><line x1="12" y1="18" x2="12" y2="18.01" />
      </svg>
    ),
    () => (
      <svg aria-hidden="true" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#8159BB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" /><path d="M12 18V6" />
      </svg>
    ),
  ];

  return (
    <section className="py-10 md:py-16">
      <div className="max-w-content mx-auto px-5">
        <h2 className="font-heading text-[22px] md:text-[28px] text-heading mb-10 text-center">{strings.whyStrikingly.heading}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {strings.whyStrikingly.items.map((item, i) => {
            const Icon = icons[i];
            return (
              <div key={i} className="text-center">
                <div className="flex justify-center mb-4" aria-hidden="true">
                  <Icon />
                </div>
                <h3 className="font-heading text-sm text-heading mb-2">{item.title}</h3>
                <p className="font-body text-sm text-body-text">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─── FAQ Accordion ─── */
function FaqItem({ item, index, isOpen, onToggle }) {
  const contentId = `faq-content-${index}`;
  const buttonId = `faq-button-${index}`;

  return (
    <div className="border-b border-subtle-divider">
      <button
        id={buttonId}
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={contentId}
        className="w-full flex items-center justify-between py-4 text-left focus-ring rounded font-heading text-sm text-heading uppercase"
      >
        <span className="pr-4">{item.question}</span>
        <ChevronDownIcon open={isOpen} />
      </button>
      <div
        id={contentId}
        role="region"
        aria-labelledby={buttonId}
        className={isOpen ? 'faq-content-open' : 'faq-content'}
      >
        <p className="font-body text-sm text-body-text pb-4">{item.answer}</p>
      </div>
    </div>
  );
}

function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-10 md:py-16 bg-light-bg">
      <div className="max-w-content mx-auto px-5">
        <h2 className="font-heading text-[22px] md:text-[28px] text-heading mb-8 text-center">{strings.faq.heading}</h2>
        <div className="max-w-2xl mx-auto">
          {strings.faq.items.map((item, i) => (
            <FaqItem
              key={i}
              item={item}
              index={i}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Closing CTA ─── */
function ClosingCta() {
  return (
    <section className="py-16 md:py-20">
      <div className="max-w-content mx-auto px-5 text-center">
        <h2 className="font-heading text-[22px] md:text-[28px] text-heading mb-3">{strings.closingCta.headline}</h2>
        <p className="font-body text-body-text mb-8">{strings.closingCta.sub}</p>
        <a
          href="/s/ai_site_builder"
          className="ai-gradient-bg inline-flex items-center justify-center h-11 px-8 rounded font-heading text-sm text-white uppercase tracking-wide focus-ring transition-all hover:opacity-90"
        >
          {strings.closingCta.cta}
        </a>
      </div>
    </section>
  );
}

/* ─── Footer ─── */
function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-light-bg border-t border-subtle-divider py-10">
      <div className="max-w-content mx-auto px-5">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-8">
          <div className="col-span-2 md:col-span-1">
            <a href="/" className="font-heading text-base text-hero-heading tracking-wide">strikingly AI</a>
          </div>
          {strings.footer.columns.map((col) => (
            <div key={col.title}>
              <h4 className="font-heading text-xs text-heading uppercase mb-3">{col.title}</h4>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link.text}>
                    <a href={link.href} className="font-body text-sm text-body-text hover:text-brand-purple focus-ring rounded transition-colors">
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="font-body text-xs text-body-text border-t border-subtle-divider pt-5">
          {strings.footer.copyright.replace('{year}', year)}
        </p>
      </div>
    </footer>
  );
}

/* ─── Main Page ─── */
export default function GeneratorsPage() {
  return (
    <div className="min-h-screen bg-white">
      <TopBar />
      <main>
        <Breadcrumb />
        <Hero />
        <FeaturedGenerators />
        <BrowseByCategory />
        <AllGeneratorsDirectory />
        <HowItWorks />
        <WhyStrikingly />
        <FaqSection />
        <ClosingCta />
      </main>
      <Footer />
    </div>
  );
}
