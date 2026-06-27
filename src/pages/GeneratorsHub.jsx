import { useState, useEffect } from 'react';
import { strings } from '@/data/strings';
import { categories, featuredGenerators, allGenerators } from '@/data/generators';

const t = strings.en;
const VISIBLE_COUNT = 6;

function slugify(name) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

/* ─── Section 0: Top Bar ─── */
function TopBar() {
  return (
    <header className="bg-white border-b border-divider sticky top-0 z-50">
      <div className="max-w-[1200px] mx-auto px-[20px] py-[10px] flex items-center">
        <a href="/" aria-label="Strikingly home">
          <svg width="140" height="28" viewBox="0 0 140 28" fill="none" aria-hidden="true">
            <text x="0" y="22" fontFamily="Josefin Sans, sans-serif" fontWeight="700" fontSize="18" fill="#2E2E2F">
              strikingly
            </text>
            <text x="102" y="22" fontFamily="Josefin Sans, sans-serif" fontWeight="700" fontSize="18" fill="#8159BB">
              AI
            </text>
          </svg>
        </a>
      </div>
    </header>
  );
}

/* ─── Section 1: Breadcrumb ─── */
function Breadcrumb() {
  return (
    <nav aria-label="Breadcrumb" className="max-w-[1200px] mx-auto px-[20px] py-[10px]">
      <ol className="flex items-center gap-[5px] list-none m-0 p-0 text-[13px] text-body-text">
        <li><a href="/" className="hover:underline">{t.breadcrumb.home}</a></li>
        <li aria-hidden="true" className="text-brand-purple">&gt;</li>
        <li aria-current="page">{t.breadcrumb.current}</li>
      </ol>
    </nav>
  );
}

/* ─── Section 2: Hero ─── */
function HeroIllustration() {
  return (
    <svg width="480" height="360" viewBox="0 0 480 360" fill="none" aria-hidden="true" className="w-full max-w-[480px] h-auto">
      <rect x="60" y="40" width="360" height="240" rx="12" stroke="#8159BB" strokeWidth="2" fill="none" opacity="0.3" />
      <rect x="80" y="70" width="320" height="30" rx="4" stroke="#8159BB" strokeWidth="1.5" fill="none" opacity="0.2" />
      <rect x="80" y="120" width="140" height="140" rx="6" stroke="#7671FF" strokeWidth="1.5" fill="none" opacity="0.2" />
      <rect x="240" y="120" width="160" height="60" rx="4" stroke="#CB0C9F" strokeWidth="1.5" fill="none" opacity="0.2" />
      <rect x="240" y="200" width="160" height="60" rx="4" stroke="#8159BB" strokeWidth="1.5" fill="none" opacity="0.2" />
      <circle cx="150" cy="190" r="30" stroke="#7671FF" strokeWidth="1.5" fill="none" opacity="0.15" />
      <line x1="100" y1="310" x2="380" y2="310" stroke="#E2E4E7" strokeWidth="1" />
    </svg>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ background: 'radial-gradient(ellipse at 30% 50%, #7671FF, transparent 60%), radial-gradient(ellipse at 70% 50%, #CB0C9F, transparent 60%)' }} aria-hidden="true" />
      <div className="max-w-[1200px] mx-auto px-[20px] py-[60px] md:py-[80px] flex flex-col md:flex-row items-center gap-[40px]">
        <div className="flex-1 text-center md:text-start">
          <h1 className="text-[28px] md:text-[44px] leading-[1.2] mb-[20px]">
            <span className="text-heading-dark block">{t.hero.h1Line1}</span>
            <span className="ai-gradient-text block">{t.hero.h1Line2}</span>
          </h1>
          <p className="text-body-text text-[16px] mb-[30px] max-w-[480px] mx-auto md:mx-0">
            {t.hero.subheadline}
          </p>
          <div className="flex flex-col sm:flex-row gap-[10px] justify-center md:justify-start">
            <a
              href="/s/ai_site_builder"
              className="ai-gradient-bg text-white font-[Josefin_Sans,Poppins,sans-serif] font-bold uppercase text-[14px] h-[44px] px-[20px] rounded-[4px] inline-flex items-center justify-center hover:opacity-90 transition-opacity"
            >
              {t.hero.ctaPrimary}
            </a>
            <a
              href="#all-generators"
              className="border border-brand-purple text-brand-purple font-[Josefin_Sans,Poppins,sans-serif] font-bold uppercase text-[14px] h-[36px] px-[15px] rounded-[4px] inline-flex items-center justify-center hover:bg-brand-purple/5 transition-colors"
            >
              {t.hero.ctaSecondary}
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

/* ─── Section 3: Featured Generators ─── */
function FeaturedGenerators() {
  return (
    <section className="bg-bg-light py-[40px]">
      <div className="max-w-[1200px] mx-auto px-[20px]">
        <h2 className="text-heading-section text-[26px] md:text-[32px] mb-[5px]">{t.featured.heading}</h2>
        <p className="text-body-text mb-[30px]">{t.featured.subheading}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px]">
          {featuredGenerators.map((gen) => (
            <a
              key={gen.slug}
              href={`/generators/${gen.slug}`}
              className="block bg-white border border-card-border rounded-[3px] p-[20px] hover:shadow-md hover:border-brand-purple transition-all"
            >
              <span className="font-[Josefin_Sans,Poppins,sans-serif] font-bold text-[15px] text-heading-section uppercase block mb-[5px]">
                {gen.name}
              </span>
              <span className="text-body-text text-[14px] block mb-[10px]">
                {gen.description}
              </span>
              <span className="inline-block text-[11px] font-[Josefin_Sans,Poppins,sans-serif] font-bold uppercase text-brand-purple border border-brand-purple rounded-[3px] px-[6px] py-[2px]">
                {gen.category}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Section 4: Browse by Category ─── */
function CategoryIcon({ id }) {
  const icons = {
    websites: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <rect x="4" y="8" width="32" height="24" rx="3" stroke="#8159BB" strokeWidth="2" fill="none" />
        <line x1="4" y1="16" x2="36" y2="16" stroke="#8159BB" strokeWidth="1.5" />
        <circle cx="8" cy="12" r="1.5" fill="#8159BB" />
        <circle cx="13" cy="12" r="1.5" fill="#8159BB" />
      </svg>
    ),
    'landing-pages': (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <rect x="8" y="4" width="24" height="32" rx="3" stroke="#8159BB" strokeWidth="2" fill="none" />
        <rect x="12" y="10" width="16" height="4" rx="1" stroke="#8159BB" strokeWidth="1.5" fill="none" />
        <rect x="14" y="28" width="12" height="4" rx="2" fill="#8159BB" opacity="0.3" />
      </svg>
    ),
    portfolios: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <rect x="4" y="8" width="14" height="12" rx="2" stroke="#8159BB" strokeWidth="1.5" fill="none" />
        <rect x="22" y="8" width="14" height="12" rx="2" stroke="#8159BB" strokeWidth="1.5" fill="none" />
        <rect x="4" y="24" width="14" height="12" rx="2" stroke="#8159BB" strokeWidth="1.5" fill="none" />
        <rect x="22" y="24" width="14" height="12" rx="2" stroke="#8159BB" strokeWidth="1.5" fill="none" />
      </svg>
    ),
    blogs: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <rect x="6" y="6" width="28" height="28" rx="3" stroke="#8159BB" strokeWidth="2" fill="none" />
        <line x1="12" y1="14" x2="28" y2="14" stroke="#8159BB" strokeWidth="1.5" />
        <line x1="12" y1="20" x2="28" y2="20" stroke="#8159BB" strokeWidth="1.5" />
        <line x1="12" y1="26" x2="22" y2="26" stroke="#8159BB" strokeWidth="1.5" />
      </svg>
    ),
    stores: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <path d="M8 16V32H32V16" stroke="#8159BB" strokeWidth="2" fill="none" />
        <path d="M4 16L8 8H32L36 16" stroke="#8159BB" strokeWidth="2" fill="none" />
        <rect x="16" y="24" width="8" height="8" stroke="#8159BB" strokeWidth="1.5" fill="none" />
      </svg>
    ),
    'link-in-bio': (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <circle cx="20" cy="12" r="6" stroke="#8159BB" strokeWidth="2" fill="none" />
        <rect x="10" y="22" width="20" height="5" rx="2.5" stroke="#8159BB" strokeWidth="1.5" fill="none" />
        <rect x="10" y="30" width="20" height="5" rx="2.5" stroke="#8159BB" strokeWidth="1.5" fill="none" />
      </svg>
    ),
  };
  return icons[id] || null;
}

function BrowseByCategory() {
  return (
    <section className="py-[40px]">
      <div className="max-w-[1200px] mx-auto px-[20px]">
        <h2 className="text-heading-section text-[26px] md:text-[32px] mb-[30px]">{t.browseByCategory.heading}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px]">
          {categories.map((cat) => (
            <a
              key={cat.id}
              href={`/generators#${cat.id}`}
              className="flex items-start gap-[15px] bg-white border border-card-border rounded-[3px] p-[20px] hover:shadow-md hover:border-brand-purple transition-all group"
            >
              <div className="shrink-0">
                <CategoryIcon id={cat.id} />
              </div>
              <div className="flex-1 min-w-0">
                <span className="font-[Josefin_Sans,Poppins,sans-serif] font-bold text-[14px] text-heading-section uppercase block mb-[5px]">
                  {cat.name}
                </span>
                <span className="text-body-text text-[14px] block">
                  {cat.description}
                </span>
              </div>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" className="shrink-0 mt-[2px] text-body-text group-hover:text-brand-purple transition-colors">
                <path d="M7 4L13 10L7 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Section 5: All Generators Directory ─── */
function GeneratorCard({ generator, categoryId }) {
  return (
    <a
      href={`/generators/${generator.slug}`}
      className="block bg-white border border-card-border rounded-[3px] p-[20px] hover:shadow-md hover:border-brand-purple transition-all"
    >
      <div className="mb-[10px]">
        <CategoryIcon id={categoryId} />
      </div>
      <span className="font-[Josefin_Sans,Poppins,sans-serif] font-bold text-[14px] text-heading-section uppercase block mb-[5px]">
        {generator.name}
      </span>
      <span className="text-body-text text-[14px] block">
        {generator.description}
      </span>
    </a>
  );
}

function AllGeneratorsDirectory() {
  const [searchQuery, setSearchQuery] = useState('');
  const [collapsedSections, setCollapsedSections] = useState({});
  const [jsReady, setJsReady] = useState(false);

  useEffect(() => {
    setJsReady(true);
    const initialCollapsed = {};
    categories.forEach((cat) => {
      const items = allGenerators[cat.id] || [];
      if (items.length > VISIBLE_COUNT) {
        initialCollapsed[cat.id] = true;
      }
    });
    setCollapsedSections(initialCollapsed);
  }, []);

  const query = searchQuery.toLowerCase().trim();

  const getFilteredGenerators = (categoryId) => {
    const items = allGenerators[categoryId] || [];
    if (!query) return items;
    const catName = categories.find(c => c.id === categoryId)?.name || '';
    return items.filter(
      (gen) =>
        gen.name.toLowerCase().includes(query) ||
        gen.description.toLowerCase().includes(query) ||
        catName.toLowerCase().includes(query)
    );
  };

  const totalMatches = query
    ? categories.reduce((sum, cat) => sum + getFilteredGenerators(cat.id).length, 0)
    : null;

  const toggleSection = (catId) => {
    setCollapsedSections((prev) => ({ ...prev, [catId]: !prev[catId] }));
  };

  return (
    <section id="all-generators" className="py-[40px] bg-bg-light">
      <div className="max-w-[1200px] mx-auto px-[20px]">
        <h2 className="text-heading-section text-[26px] md:text-[32px] mb-[5px]">{t.allGenerators.heading}</h2>
        <p className="text-body-text mb-[30px]">{t.allGenerators.subheading}</p>

        {/* Search */}
        <div className="mb-[30px] max-w-[480px]">
          <div className="relative">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true" className="absolute left-[12px] top-1/2 -translate-y-1/2 text-body-text">
              <circle cx="7.5" cy="7.5" r="5.5" stroke="currentColor" strokeWidth="1.5" />
              <line x1="11.5" y1="11.5" x2="16" y2="16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <input
              type="search"
              aria-label="Search generators"
              placeholder={t.allGenerators.searchPlaceholder}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-[40px] pl-[40px] pr-[12px] border border-card-border rounded-[3px] text-[14px] text-heading-section bg-white placeholder:text-body-text/60 focus:border-brand-purple focus:outline-none"
            />
          </div>
          {totalMatches !== null && totalMatches > 0 && (
            <p className="text-[13px] text-body-text mt-[10px]">{t.allGenerators.matchCount(totalMatches)}</p>
          )}
          {totalMatches === 0 && (
            <div className="mt-[20px] text-center p-[20px] bg-white border border-card-border rounded-[3px]">
              <p className="text-body-text mb-[10px]">{t.allGenerators.noResults}</p>
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="text-brand-purple font-[Josefin_Sans,Poppins,sans-serif] font-bold uppercase text-[12px] border border-brand-purple rounded-[3px] px-[10px] py-[5px] hover:bg-brand-purple/5 transition-colors"
              >
                {t.allGenerators.clearSearch}
              </button>
              <p className="text-[13px] text-body-text mt-[10px]">
                <a href="/s/ai_site_builder" className="text-brand-purple hover:underline">{t.allGenerators.cantFind}</a>
              </p>
            </div>
          )}
        </div>

        {/* Category subsections */}
        {categories.map((cat) => {
          const filtered = getFilteredGenerators(cat.id);
          if (query && filtered.length === 0) return null;

          const items = allGenerators[cat.id] || [];
          const isCollapsed = !query && jsReady && collapsedSections[cat.id];
          const hasOverflow = items.length > VISIBLE_COUNT;
          const controlId = `section-overflow-${cat.id}`;

          const visibleItems = hasOverflow ? items.slice(0, VISIBLE_COUNT) : items;
          const overflowItems = hasOverflow ? items.slice(VISIBLE_COUNT) : [];

          return (
            <div key={cat.id} id={cat.id} className="mb-[40px] scroll-mt-[60px]">
              <h3 className="text-heading-section text-[18px] md:text-[22px] mb-[5px]">{cat.name}</h3>
              <p className="text-body-text mb-[20px]">{cat.description}</p>

              {/* Always-visible cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px]">
                {visibleItems.map((gen) => (
                  <div key={gen.slug} className={query && !filtered.includes(gen) ? 'card-search-hidden' : ''}>
                    <GeneratorCard generator={gen} categoryId={cat.id} />
                  </div>
                ))}
              </div>

              {/* Overflow cards with height transition */}
              {overflowItems.length > 0 && (
                <div
                  id={controlId}
                  className={`cards-overflow ${isCollapsed ? 'collapsed' : ''}`}
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px] mt-[20px]">
                    {overflowItems.map((gen) => (
                      <div key={gen.slug} className={query && !filtered.includes(gen) ? 'card-search-hidden' : ''}>
                        <GeneratorCard generator={gen} categoryId={cat.id} />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {!query && hasOverflow && jsReady && (
                <button
                  type="button"
                  aria-expanded={!isCollapsed}
                  aria-controls={controlId}
                  onClick={() => toggleSection(cat.id)}
                  className="mt-[15px] text-brand-purple font-[Josefin_Sans,Poppins,sans-serif] font-bold uppercase text-[12px] border border-brand-purple rounded-[3px] px-[10px] py-[5px] hover:bg-brand-purple/5 transition-colors"
                >
                  {isCollapsed ? t.allGenerators.showAll(items.length) : t.allGenerators.showLess}
                </button>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

/* ─── Section 6: How It Works ─── */
function HowItWorks() {
  return (
    <section className="py-[40px]">
      <div className="max-w-[1200px] mx-auto px-[20px]">
        <h2 className="text-heading-section text-[26px] md:text-[32px] mb-[30px] text-center">{t.howItWorks.heading}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px]">
          {t.howItWorks.steps.map((step, i) => (
            <div key={i} className="text-center">
              <div className="w-[50px] h-[50px] rounded-full bg-brand-purple text-white font-[Josefin_Sans,Poppins,sans-serif] font-bold text-[20px] flex items-center justify-center mx-auto mb-[15px]">
                {i + 1}
              </div>
              <h3 className="text-heading-section text-[15px] mb-[10px]">{step.title}</h3>
              <p className="text-body-text text-[14px]">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Section 7: Why Strikingly ─── */
function WhyStrikinglyIcon({ index }) {
  const icons = [
    <svg key="0" width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
      <circle cx="18" cy="18" r="14" stroke="#8159BB" strokeWidth="2" fill="none" />
      <path d="M12 18L16 22L24 14" stroke="#8159BB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>,
    <svg key="1" width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
      <rect x="10" y="4" width="16" height="28" rx="3" stroke="#8159BB" strokeWidth="2" fill="none" />
      <line x1="14" y1="28" x2="22" y2="28" stroke="#8159BB" strokeWidth="1.5" strokeLinecap="round" />
    </svg>,
    <svg key="2" width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
      <circle cx="18" cy="18" r="14" stroke="#8159BB" strokeWidth="2" fill="none" />
      <text x="11" y="23" fontFamily="Josefin Sans, sans-serif" fontWeight="700" fontSize="14" fill="#8159BB">$0</text>
    </svg>,
  ];
  return icons[index] || null;
}

function WhyStrikingly() {
  return (
    <section className="py-[40px] bg-bg-light">
      <div className="max-w-[1200px] mx-auto px-[20px]">
        <h2 className="text-heading-section text-[26px] md:text-[32px] mb-[30px] text-center">{t.whyStrikingly.heading}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px]">
          {t.whyStrikingly.items.map((item, i) => (
            <div key={i} className="text-center">
              <div className="flex justify-center mb-[15px]">
                <WhyStrikinglyIcon index={i} />
              </div>
              <h3 className="text-heading-section text-[15px] mb-[10px]">{item.title}</h3>
              <p className="text-body-text text-[14px]">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Section 8: FAQ ─── */
function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-[40px]">
      <div className="max-w-[800px] mx-auto px-[20px]">
        <h2 className="text-heading-section text-[26px] md:text-[32px] mb-[30px] text-center">{t.faq.heading}</h2>
        <div className="space-y-[10px]">
          {t.faq.items.map((item, i) => {
            const isOpen = openIndex === i;
            const panelId = `faq-panel-${i}`;
            const buttonId = `faq-button-${i}`;
            return (
              <div key={i} className="border border-card-border rounded-[3px] bg-white">
                <h3 className="text-[14px]">
                  <button
                    type="button"
                    id={buttonId}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(isOpen ? -1 : i)}
                    className="w-full text-start p-[20px] flex items-center justify-between gap-[10px] font-[Josefin_Sans,Poppins,sans-serif] font-bold text-[14px] text-heading-section uppercase hover:text-brand-purple transition-colors"
                  >
                    <span>{item.question}</span>
                    <svg
                      width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"
                      className={`shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                    >
                      <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={`overflow-hidden transition-all ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <div className="px-[20px] pb-[20px] text-body-text text-[14px] leading-relaxed">
                    {item.answer}
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

/* ─── Section 9: Closing CTA ─── */
function ClosingCTA() {
  return (
    <section className="py-[60px] text-center">
      <div className="max-w-[1200px] mx-auto px-[20px]">
        <h2 className="text-heading-section text-[26px] md:text-[32px] mb-[10px]">{t.closingCta.heading}</h2>
        <p className="text-body-text text-[16px] mb-[30px]">{t.closingCta.subheading}</p>
        <a
          href="/s/ai_site_builder"
          className="ai-gradient-bg text-white font-[Josefin_Sans,Poppins,sans-serif] font-bold uppercase text-[14px] h-[44px] px-[20px] rounded-[4px] inline-flex items-center justify-center hover:opacity-90 transition-opacity"
        >
          {t.closingCta.cta}
        </a>
      </div>
    </section>
  );
}

/* ─── Section 10: Footer ─── */
function Footer() {
  const columns = [
    {
      title: 'Product',
      links: [
        { text: 'Templates', href: '/templates' },
        { text: 'Pricing', href: '/pricing' },
        { text: 'AI Site Builder', href: '/s/ai_site_builder' },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: '/about' },
        { text: 'Blog', href: '/blog' },
        { text: 'Support', href: '/support' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { text: 'Help Center', href: '/support' },
        { text: 'Blog', href: '/blog' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { text: 'Terms of Service', href: '/terms' },
        { text: 'Privacy Policy', href: '/privacy' },
      ],
    },
  ];

  return (
    <footer className="border-t border-divider py-[40px]">
      <div className="max-w-[1200px] mx-auto px-[20px]">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-[30px] mb-[30px]">
          {columns.map((col) => (
            <div key={col.title}>
              <span className="font-[Josefin_Sans,Poppins,sans-serif] font-bold text-[12px] text-heading-section uppercase block mb-[10px]">
                {col.title}
              </span>
              <ul className="list-none m-0 p-0 space-y-[8px]">
                {col.links.map((link) => (
                  <li key={link.text}>
                    <a href={link.href} className="text-body-text text-[13px] hover:text-brand-purple transition-colors">
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-divider pt-[20px] flex flex-col sm:flex-row items-center justify-between gap-[10px]">
          <a href="/" aria-label="Strikingly home">
            <svg width="120" height="24" viewBox="0 0 120 24" fill="none" aria-hidden="true">
              <text x="0" y="18" fontFamily="Josefin Sans, sans-serif" fontWeight="700" fontSize="15" fill="#4B5056">
                strikingly
              </text>
            </svg>
          </a>
          <span className="text-body-text text-[12px]">{t.footer.copyright}</span>
        </div>
      </div>
    </footer>
  );
}

/* ─── Main Page ─── */
export default function GeneratorsHub() {
  return (
    <>
      <TopBar />
      <Breadcrumb />
      <main>
        <Hero />
        <FeaturedGenerators />
        <BrowseByCategory />
        <AllGeneratorsDirectory />
        <HowItWorks />
        <WhyStrikingly />
        <FAQ />
        <ClosingCTA />
      </main>
      <Footer />
    </>
  );
}
