import { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import strings from '@/data/strings.en';
import { featuredGenerators, allGenerators } from '@/data/generators';

const CATEGORY_SLUGS = ['websites', 'landing-pages', 'portfolios', 'blogs', 'stores', 'link-in-bio'];
const AI_GRADIENT = 'linear-gradient(135deg, #7671FF, #CB0C9F)';
const BUILDER_URL = '/s/ai_site_builder';

function slugify(text) {
  return text.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
}

export default function GeneratorsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedFaqs, setExpandedFaqs] = useState({ 0: true });
  const [showAll, setShowAll] = useState({});

  const toggleFaq = (idx) => {
    setExpandedFaqs((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  const toggleShowAll = (slug) => {
    setShowAll((prev) => ({ ...prev, [slug]: !prev[slug] }));
  };

  const flattenedForSearch = useMemo(() => {
    const flat = [];
    CATEGORY_SLUGS.forEach((slug) => {
      const cat = strings.categories.find((c) => c.slug === slug);
      const catName = cat ? cat.name : slug;
      (allGenerators[slug] || []).forEach((g) => {
        flat.push({ ...g, categorySlug: slug, categoryName: catName });
      });
    });
    return flat;
  }, []);

  const searchFiltered = useMemo(() => {
    if (!searchQuery.trim()) return flattenedForSearch;
    const q = searchQuery.toLowerCase();
    return flattenedForSearch.filter(
      (g) =>
        g.name.toLowerCase().includes(q) ||
        g.desc.toLowerCase().includes(q) ||
        g.categoryName.toLowerCase().includes(q)
    );
  }, [searchQuery, flattenedForSearch]);

  const matchingCategories = useMemo(() => {
    const cats = new Set(searchFiltered.map((g) => g.categorySlug));
    return CATEGORY_SLUGS.filter((s) => cats.has(s));
  }, [searchFiltered]);

  const INITIAL_VISIBLE = 6;

  return (
    <div className="min-h-screen bg-white font-body">
      {/* Section 0: Top Bar */}
      <TopBar />

      {/* Section 1: Breadcrumb */}
      <Breadcrumb />

      {/* Section 2: Hero */}
      <Hero />

      {/* Section 3: Featured Generators */}
      <FeaturedGenerators />

      {/* Section 4: Browse by Category */}
      <BrowseByCategory />

      {/* Section 5: All Generators */}
      <section id="all-generators" className="max-w-content mx-auto px-5 py-10 md:py-[40px]">
        <h2 className="font-heading text-[26px] md:text-[32px] text-heading-gray mb-[5px] text-center">
          {strings.allHeading}
        </h2>
        <p className="text-body-gray text-[14px] text-center mb-[20px]">{strings.allSub}</p>

        {/* Search */}
        <div className="max-w-[480px] mx-auto mb-[20px]">
          <div className="relative">
            <svg
              className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-body-gray"
              fill="none" stroke="currentColor" viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              className="w-full pl-10 pr-4 py-[10px] rounded-[3px] border border-card-border text-[14px] text-body-gray bg-white focus:outline-none focus:border-brand-purple font-body"
              placeholder={strings.searchPlaceholder}
              aria-label={strings.searchAriaLabel}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          {searchQuery.trim() && (
            <p className="text-[12px] text-body-gray mt-[5px] text-center">
              {searchFiltered.length} {strings.searchResultCount}
            </p>
          )}
        </div>

        {/* Empty state */}
        {searchQuery.trim() && searchFiltered.length === 0 && (
          <div className="text-center py-[40px]">
            <p className="text-body-gray mb-[15px]">{strings.searchEmpty}</p>
            <button
              className="text-[13px] text-brand-purple border border-brand-purple rounded-[4px] px-[15px] py-[9px] font-heading uppercase bg-transparent cursor-pointer"
              onClick={() => setSearchQuery('')}
            >
              {strings.clearSearch}
            </button>
            <p className="mt-[15px]">
              <a href={BUILDER_URL} className="text-brand-purple text-[14px] underline">
                {strings.searchEmptyCta}
              </a>
            </p>
          </div>
        )}

        {/* Category subsections */}
        {CATEGORY_SLUGS.map((slug) => {
          const cat = strings.categories.find((c) => c.slug === slug);
          const allItems = allGenerators[slug] || [];
          const filteredItems = searchQuery.trim()
            ? allItems.filter((g) => searchFiltered.some((f) => f.slug === g.slug && f.categorySlug === slug))
            : allItems;

          if (searchQuery.trim() && filteredItems.length === 0) return null;

          const expanded = showAll[slug] || false;
          const displayItems = expanded ? filteredItems : filteredItems.slice(0, INITIAL_VISIBLE);
          const hasMore = filteredItems.length > INITIAL_VISIBLE;

          return (
            <section key={slug} id={slug} className="mt-[40px]">
              <h3 className="font-heading text-[20px] md:text-[22px] text-heading-gray mb-[5px]">
                {cat ? cat.name : slug}
              </h3>
              <p className="text-body-gray text-[14px] mb-[20px]">{cat ? cat.desc : ''}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px]">
                {displayItems.map((gen) => (
                  <GeneratorCard key={gen.slug} gen={gen} />
                ))}
              </div>

              {hasMore && !searchQuery.trim() && (
                <div className="mt-[20px] text-center">
                  <button
                    className="text-[13px] text-brand-purple border border-brand-purple rounded-[4px] px-[15px] py-[9px] font-heading uppercase bg-transparent cursor-pointer"
                    onClick={() => toggleShowAll(slug)}
                    aria-expanded={expanded}
                    aria-controls={`${slug}-grid`}
                  >
                    {expanded
                      ? `${strings.showLess}`
                      : `${strings.showAll} ${filteredItems.length} ${strings.allHeading.toLowerCase()}`}
                  </button>
                </div>
              )}
            </section>
          );
        })}
      </section>

      {/* Section 6: How It Works */}
      <HowItWorks />

      {/* Section 7: Why Strikingly */}
      <WhyStrikingly />

      {/* Section 8: FAQ */}
      <FAQ expandedFaqs={expandedFaqs} toggleFaq={toggleFaq} />

      {/* Section 9: Closing CTA */}
      <ClosingCTA />

      {/* Section 10: Footer */}
      <Footer />
    </div>
  );
}

function TopBar() {
  return (
    <header className="bg-white border-b border-divider sticky top-0 z-50">
      <div className="max-w-content mx-auto px-5 h-[56px] flex items-center">
        <a href="/" className="font-heading text-[18px] text-hero-dark uppercase tracking-wide">
          {strings.logo}
        </a>
      </div>
    </header>
  );
}

function Breadcrumb() {
  return (
    <nav aria-label="Breadcrumb" className="max-w-content mx-auto px-5 py-[10px]">
      <ol className="flex items-center gap-[8px] text-[12px] text-body-gray list-none p-0 m-0">
        <li>
          <a href="/" className="text-body-gray no-underline hover:text-brand-purple">{strings.breadcrumbHome}</a>
        </li>
        <li aria-hidden="true" className="text-divider">&gt;</li>
        <li className="text-body-gray">{strings.breadcrumbCurrent}</li>
      </ol>
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 20%, #CB0C9F 0%, transparent 60%), radial-gradient(ellipse 60% 50% at 80% 50%, #7671FF 0%, transparent 60%)' }}
      />
      <div className="max-w-content mx-auto px-5 py-[60px] md:py-[80px] relative">
        <div className="flex flex-col md:flex-row items-center gap-[40px]">
          <div className="flex-1 text-center md:text-start">
            <h1 className="font-heading font-bold uppercase leading-[1.2] mb-[15px]">
              <span className="block text-[28px] md:text-[40px] lg:text-[48px] text-hero-dark">
                {strings.heroLine1}
              </span>
              <span
                className="block text-[28px] md:text-[40px] lg:text-[48px]"
                style={{
                  background: AI_GRADIENT,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                {strings.heroLine2}
              </span>
            </h1>
            <p className="text-body-gray text-[14px] leading-[1.5] max-w-[520px] mb-[20px] mx-auto md:mx-0">
              {strings.heroSub}
            </p>
            <div className="flex flex-col sm:flex-row gap-[10px] justify-center md:justify-start">
              <a
                href={BUILDER_URL}
                className="inline-flex items-center justify-center h-[44px] px-[18px] rounded-[4px] text-[14px] font-heading font-bold uppercase text-white no-underline"
                style={{ background: AI_GRADIENT }}
              >
                {strings.heroPrimaryCta}
              </a>
              <a
                href="#all-generators"
                className="inline-flex items-center justify-center h-[44px] px-[18px] rounded-[4px] text-[14px] font-heading font-bold uppercase text-brand-purple border border-brand-purple bg-transparent no-underline"
              >
                {strings.heroSecondaryCta}
              </a>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <svg width="480" height="360" viewBox="0 0 480 360" fill="none" aria-hidden="true" className="w-full max-w-[480px] h-auto">
              <rect x="60" y="20" width="360" height="260" rx="8" fill="white" stroke="#C6C9CD" strokeWidth="1.5" />
              <rect x="60" y="20" width="360" height="32" rx="8" fill="#F4F6F8" />
              <rect x="60" y="28" width="360" height="24" rx="0" fill="#F4F6F8" />
              <circle cx="76" cy="36" r="4" fill="#8159BB" />
              <circle cx="88" cy="36" r="4" fill="#7671FF" />
              <circle cx="100" cy="36" r="4" fill="#CB0C9F" />
              <rect x="80" y="68" width="140" height="12" rx="4" fill="#E2E4E7" />
              <rect x="80" y="90" width="320" height="8" rx="4" fill="#F4F6F8" />
              <rect x="80" y="106" width="280" height="8" rx="4" fill="#F4F6F8" />
              <rect x="80" y="126" width="200" height="8" rx="4" fill="#F4F6F8" />
              <rect x="80" y="150" width="160" height="32" rx="4" fill="#7671FF" opacity="0.7" />
              <rect x="80" y="200" width="320" height="6" rx="3" fill="#E2E4E7" />
              <rect x="80" y="214" width="280" height="6" rx="3" fill="#E2E4E7" />
              <rect x="80" y="228" width="240" height="6" rx="3" fill="#E2E4E7" />
              <rect x="80" y="250" width="160" height="20" rx="4" fill="#CB0C9F" opacity="0.6" />
              <rect x="60" y="288" width="360" height="1" rx="0" fill="#E2E4E7" />
              <rect x="80" y="300" width="100" height="8" rx="4" fill="#C6C9CD" />
              <rect x="80" y="316" width="200" height="8" rx="4" fill="#E2E4E7" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturedGenerators() {
  return (
    <section className="max-w-content mx-auto px-5 py-[40px]">
      <h2 className="font-heading text-[26px] md:text-[32px] text-heading-gray mb-[5px] text-center">
        {strings.featuredHeading}
      </h2>
      <p className="text-body-gray text-[14px] text-center mb-[30px]">{strings.featuredSub}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px]">
        {featuredGenerators.map((gen) => (
          <a
            key={gen.slug}
            href={`/generators/${gen.slug}`}
            className="block bg-white border border-card-border rounded-[3px] p-[20px] no-underline transition-shadow hover:border-brand-purple hover:shadow-md group"
          >
            <span className="inline-block text-[11px] font-heading uppercase text-brand-purple border border-brand-purple rounded-[3px] px-[6px] py-[2px] mb-[10px]">
              {gen.category}
            </span>
            <h3 className="font-heading text-[16px] text-hero-dark uppercase mb-[5px] group-hover:text-brand-purple transition-colors">
              {gen.name}
            </h3>
            <p className="text-body-gray text-[13px] leading-[1.5] m-0">{gen.desc}</p>
          </a>
        ))}
      </div>
    </section>
  );
}

function BrowseByCategory() {
  return (
    <section className="bg-light-bg py-[40px]">
      <div className="max-w-content mx-auto px-5">
        <h2 className="font-heading text-[26px] md:text-[32px] text-heading-gray mb-[30px] text-center">
          {strings.browseHeading}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px]">
          {strings.categories.map((cat) => (
            <a
              key={cat.slug}
              href={`#${cat.slug}`}
              className="block bg-white border border-card-border rounded-[3px] p-[20px] no-underline transition-shadow hover:border-brand-purple hover:shadow-md group"
            >
              <CategoryThumbnail slug={cat.slug} />
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-heading text-[15px] text-hero-dark uppercase mb-[5px] group-hover:text-brand-purple transition-colors">
                    {cat.name}
                  </h3>
                  <p className="text-body-gray text-[13px] leading-[1.5] m-0">{cat.desc}</p>
                </div>
                <svg className="w-5 h-5 text-brand-purple shrink-0 ml-[10px]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function CategoryThumbnail({ slug }) {
  const colors = {
    websites: { bg: '#F4F0FA', accent: '#8159BB' },
    'landing-pages': { bg: '#F0F0FF', accent: '#7671FF' },
    portfolios: { bg: '#FFF0F7', accent: '#CB0C9F' },
    blogs: { bg: '#F0F7F4', accent: '#7BC89C' },
    stores: { bg: '#FFF8F0', accent: '#F0A050' },
    'link-in-bio': { bg: '#F0F4FF', accent: '#6080D0' },
  };
  const c = colors[slug] || { bg: '#F4F6F8', accent: '#8159BB' };

  return (
    <div className="mb-[12px] rounded-[3px] h-[60px] flex items-center justify-center" style={{ backgroundColor: c.bg }} aria-hidden="true">
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <rect x="8" y="6" width="24" height="20" rx="2" stroke={c.accent} strokeWidth="1.5" fill="none" />
        <rect x="8" y="6" width="24" height="5" rx="2" fill={c.accent} opacity="0.3" />
        <rect x="12" y="15" width="10" height="2" rx="1" fill={c.accent} opacity="0.5" />
        <rect x="12" y="19" width="16" height="2" rx="1" fill={c.accent} opacity="0.3" />
        <rect x="12" y="14" width="8" height="2" rx="1" fill={c.accent} opacity="0.6" />
        <rect x="16" y="30" width="8" height="4" rx="2" fill={c.accent} opacity="0.4" />
      </svg>
    </div>
  );
}

function GeneratorCard({ gen }) {
  return (
    <article>
      <a
        href={`/generators/${gen.slug}`}
        className="block bg-white border border-card-border rounded-[3px] p-[20px] no-underline transition-shadow hover:border-brand-purple hover:shadow-md h-full group"
      >
        <h3 className="font-heading text-[15px] text-hero-dark uppercase mb-[5px] group-hover:text-brand-purple transition-colors">
          {gen.name}
        </h3>
        <p className="text-body-gray text-[13px] leading-[1.5] m-0">{gen.desc}</p>
      </a>
    </article>
  );
}

function HowItWorks() {
  return (
    <section className="max-w-content mx-auto px-5 py-[40px]">
      <h2 className="font-heading text-[26px] md:text-[32px] text-heading-gray mb-[30px] text-center">
        {strings.howHeading}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px]">
        {strings.howSteps.map((step, idx) => (
          <div key={idx} className="text-center">
            <div className="w-[48px] h-[48px] rounded-full bg-brand-purple text-white flex items-center justify-center mx-auto mb-[15px] font-heading text-[20px]">
              {idx + 1}
            </div>
            <h3 className="font-heading text-[15px] text-hero-dark mb-[8px]">{step.title}</h3>
            <p className="text-body-gray text-[13px] leading-[1.5] max-w-[280px] mx-auto">{step.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function WhyStrikingly() {
  const icons = [
    <svg key="0" className="w-8 h-8 text-brand-purple mb-[15px]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
    <svg key="1" className="w-8 h-8 text-brand-purple mb-[15px]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><rect x="5" y="2" width="14" height="20" rx="2" strokeWidth={1.5} /><path strokeLinecap="round" strokeWidth={1.5} d="M12 18h.01" /></svg>,
    <svg key="2" className="w-8 h-8 text-brand-purple mb-[15px]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10" strokeWidth={1.5} /><path strokeLinecap="round" strokeWidth={1.5} d="M8 12l3 3 5-5" /></svg>,
  ];

  return (
    <section className="bg-light-bg py-[40px]">
      <div className="max-w-content mx-auto px-5">
        <h2 className="font-heading text-[26px] md:text-[32px] text-heading-gray mb-[30px] text-center">
          {strings.whyHeading}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px]">
          {strings.whyItems.map((item, idx) => (
            <div key={idx} className="text-center">
              <div className="flex justify-center">{icons[idx]}</div>
              <h3 className="font-heading text-[15px] text-hero-dark mb-[8px]">{item.title}</h3>
              <p className="text-body-gray text-[13px] leading-[1.5] max-w-[280px] mx-auto">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ({ expandedFaqs, toggleFaq }) {
  return (
    <section className="max-w-content mx-auto px-5 py-[40px]">
      <h2 className="font-heading text-[26px] md:text-[32px] text-heading-gray mb-[30px] text-center">
        {strings.faqHeading}
      </h2>
      <div className="max-w-[780px] mx-auto divide-y divide-divider">
        {strings.faqs.map((faq, idx) => {
          const isOpen = !!expandedFaqs[idx];
          return (
            <div key={idx} className="py-[15px]">
              <button
                className="w-full flex items-center justify-between text-left bg-transparent border-none p-0 cursor-pointer font-body"
                onClick={() => toggleFaq(idx)}
                aria-expanded={isOpen}
                aria-controls={`faq-panel-${idx}`}
              >
                <span className="font-heading text-[15px] text-hero-dark uppercase pr-[15px]">{faq.q}</span>
                <svg
                  className={`w-5 h-5 text-brand-purple shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                id={`faq-panel-${idx}`}
                className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[500px] mt-[12px]' : 'max-h-0'}`}
                role="region"
                aria-hidden={!isOpen}
              >
                <p className="text-body-gray text-[13px] leading-[1.6] m-0">{faq.a}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function ClosingCTA() {
  return (
    <section className="py-[60px] md:py-[80px] text-center">
      <div className="max-w-content mx-auto px-5">
        <h2 className="font-heading text-[28px] md:text-[36px] text-hero-dark mb-[10px]">
          {strings.closingHeading}
        </h2>
        <p className="text-body-gray text-[14px] mb-[25px]">{strings.closingSub}</p>
        <a
          href={BUILDER_URL}
          className="inline-flex items-center justify-center h-[44px] px-[20px] rounded-[4px] text-[14px] font-heading font-bold uppercase text-white no-underline"
          style={{ background: AI_GRADIENT }}
        >
          {strings.closingCta}
        </a>
      </div>
    </section>
  );
}

function Footer() {
  const columns = [
    { title: 'Product', links: [{ label: 'Pricing', href: '/pricing' }, { label: 'Templates', href: '/templates' }, { label: 'Features' }] },
    { title: 'Company', links: [{ label: 'About', href: '/about' }, { label: 'Blog', href: '/blog' }, { label: 'Careers' }] },
    { title: 'Support', links: [{ label: 'Help Center', href: '/support' }, { label: 'Contact' }, { label: 'Community' }] },
    { title: 'Legal', links: [{ label: 'Terms', href: '/terms' }, { label: 'Privacy', href: '/privacy' }, { label: 'Cookies' }] },
  ];

  return (
    <footer className="border-t border-divider bg-white py-[40px]">
      <div className="max-w-content mx-auto px-5">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-[30px] mb-[40px]">
          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="font-heading text-[13px] text-heading-gray uppercase mb-[15px]">{col.title}</h3>
              <ul className="list-none p-0 m-0 space-y-[8px]">
                {col.links.map((link) => (
                  <li key={link.label}>
                    {link.href ? (
                      <a href={link.href} className="text-body-gray text-[13px] no-underline hover:text-brand-purple">
                        {link.label}
                      </a>
                    ) : (
                      <span className="text-body-gray text-[13px]">{link.label}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-divider pt-[20px] text-center">
          <p className="text-body-gray text-[12px] m-0">{strings.footerCopyright}</p>
        </div>
      </div>
    </footer>
  );
}