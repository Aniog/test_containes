import { useEffect, useRef } from 'react';
import strings from './strings.en';
import { categories, featured, allGenerators } from './generatorData';

const slugify = (name) => name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

function TopBar() {
  return (
    <header className="bg-white border-b border-divider">
      <div className="container-wide flex items-center h-[50px]">
        <a href="/" className="font-heading font-bold text-[18px] text-brand-purple uppercase tracking-wide">
          {strings.logo}
        </a>
      </div>
    </header>
  );
}

function Breadcrumb() {
  return (
    <nav aria-label="Breadcrumb" className="bg-white py-[10px]">
      <div className="container-wide">
        <ol className="flex items-center gap-[5px] text-[12px] text-body-gray list-none p-0 m-0">
          <li>
            <a href="/" className="hover:text-brand-purple transition-colors">{strings.breadcrumbHome}</a>
          </li>
          <li aria-hidden="true">&gt;</li>
          <li className="text-body-gray">{strings.breadcrumbCurrent}</li>
        </ol>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="hero-section relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,rgba(118,113,255,0.06),transparent_60%),radial-gradient(ellipse_at_70%_50%,rgba(203,12,159,0.04),transparent_60%)] pointer-events-none" aria-hidden="true" />
      <div className="container-wide relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[40px] items-center">
          <div>
            <h1 className="text-[28px] md:text-[42px] leading-[1.2] font-heading font-bold uppercase m-0">
              <span className="block text-hero-dark">{strings.heroLine1}</span>
              <span className="block ai-gradient-text">{strings.heroLine2}</span>
            </h1>
            <p className="text-[16px] text-body-gray mt-[20px] max-w-[480px] leading-[1.5]">
              {strings.heroSub}
            </p>
            <div className="flex flex-col sm:flex-row gap-[10px] mt-[30px]">
              <a href="/s/ai_site_builder" className="btn-primary btn-gradient btn-lg no-underline">
                {strings.heroPrimaryCta}
              </a>
              <a href="#all-generators" className="btn-ghost btn-lg no-underline">
                {strings.heroSecondaryCta}
              </a>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end" aria-hidden="true">
            <svg width="480" height="360" viewBox="0 0 480 360" fill="none" xmlns="http://www.w3.org/2000/svg" className="max-w-full h-auto">
              <rect x="80" y="30" width="340" height="260" rx="6" fill="white" stroke="#C6C9CD" strokeWidth="1.5" />
              <rect x="80" y="30" width="340" height="36" rx="6" fill="#F4F6F8" />
              <circle cx="100" cy="48" r="5" fill="#E2E4E7" />
              <circle cx="115" cy="48" r="5" fill="#E2E4E7" />
              <circle cx="130" cy="48" r="5" fill="#E2E4E7" />
              <rect x="80" y="66" width="340" height="1" fill="#E2E4E7" />
              <rect x="100" y="90" width="200" height="12" rx="2" fill="#E2E4E7" />
              <rect x="100" y="110" width="300" height="8" rx="2" fill="#F4F6F8" />
              <rect x="100" y="125" width="260" height="8" rx="2" fill="#F4F6F8" />
              <rect x="100" y="155" width="300" height="100" rx="4" fill="#F4F6F8" />
              <rect x="100" y="270" width="140" height="10" rx="2" fill="#E2E4E7" />
              <rect x="250" y="270" width="150" height="10" rx="2" fill="#F4F6F8" />
              <rect x="60" y="210" width="12" height="80" rx="2" fill="url(#purple-light)" />
              <rect x="428" y="210" width="12" height="80" rx="2" fill="url(#pink-light)" />
              <defs>
                <linearGradient id="purple-light" x1="0" y1="0" x2="0" y2="1">
                  <stop stopColor="#7671FF" stopOpacity="0.3" />
                  <stop offset="1" stopColor="#7671FF" stopOpacity="0.05" />
                </linearGradient>
                <linearGradient id="pink-light" x1="0" y1="0" x2="0" y2="1">
                  <stop stopColor="#CB0C9F" stopOpacity="0.3" />
                  <stop offset="1" stopColor="#CB0C9F" stopOpacity="0.05" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturedGenerators() {
  return (
    <section className="section-py bg-light-bg">
      <div className="container-wide">
        <h2 className="text-[26px] md:text-[30px] text-heading-gray m-0">{strings.featuredHeading}</h2>
        <p className="text-[14px] text-body-gray mt-[5px] mb-[30px]">{strings.featuredSub}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px]">
          {featured.map((gen) => (
            <a
              key={gen.slug}
              href={`/generators/${gen.slug}`}
              className="card no-underline flex flex-col h-full group"
            >
              <span className="tag self-start mb-[10px]">{gen.category}</span>
              <h3 className="font-heading font-bold text-[16px] text-heading-gray uppercase mb-[5px]">{gen.name}</h3>
              <p className="text-[14px] text-body-gray leading-[1.5] m-0">{gen.desc}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function BrowseByCategory() {
  return (
    <section className="section-py bg-white">
      <div className="container-wide">
        <h2 className="text-[26px] md:text-[30px] text-heading-gray m-0 mb-[30px]">{strings.browseHeading}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px]">
          {categories.map((cat) => (
            <a key={cat.slug} href={`/generators#${cat.slug}`} className="card no-underline flex flex-col group">
              <div className="mb-[15px]" aria-hidden="true">
                <CategoryIcon slug={cat.slug} />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-heading font-bold text-[14px] text-heading-gray uppercase m-0">{cat.name}</h3>
                  <p className="text-[13px] text-body-gray mt-[5px] m-0 leading-[1.4]">{cat.desc}</p>
                </div>
                <svg className="w-[16px] h-[16px] text-brand-purple shrink-0 ml-[10px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function CategoryIcon({ slug }) {
  const icons = {
    websites: <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true"><rect x="2" y="4" width="32" height="24" rx="3" stroke="#8159BB" strokeWidth="1.5" fill="white" /><rect x="2" y="4" width="32" height="7" rx="3" fill="#F4F6F8" stroke="#8159BB" strokeWidth="1.5" /><circle cx="7" cy="8" r="1.5" fill="#8159BB" /><circle cx="12" cy="8" r="1.5" fill="#8159BB" /><circle cx="17" cy="8" r="1.5" fill="#8159BB" /></svg>,
    'landing-pages': <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true"><rect x="4" y="3" width="28" height="30" rx="3" stroke="#8159BB" strokeWidth="1.5" fill="white" /><rect x="4" y="3" width="28" height="8" rx="3" fill="#F4F6F8" stroke="#8159BB" strokeWidth="1.5" /><rect x="8" y="15" width="20" height="2" rx="1" fill="#E2E4E7" /><rect x="8" y="20" width="16" height="2" rx="1" fill="#E2E4E7" /><rect x="8" y="25" width="12" height="2" rx="1" fill="#E2E4E7" /></svg>,
    portfolios: <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true"><rect x="2" y="6" width="14" height="12" rx="2" stroke="#8159BB" strokeWidth="1.5" fill="white" /><rect x="20" y="8" width="14" height="18" rx="2" stroke="#8159BB" strokeWidth="1.5" fill="white" /><rect x="20" y="8" width="14" height="6" rx="2" fill="#F4F6F8" stroke="#8159BB" strokeWidth="1.5" /><circle cx="14" cy="14" r="2" fill="#8159BB" opacity="0.3" /></svg>,
    blogs: <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true"><rect x="3" y="5" width="30" height="26" rx="3" stroke="#8159BB" strokeWidth="1.5" fill="white" /><rect x="3" y="5" width="30" height="7" rx="3" fill="#F4F6F8" stroke="#8159BB" strokeWidth="1.5" /><rect x="8" y="16" width="20" height="1.5" rx="0.75" fill="#E2E4E7" /><rect x="8" y="20" width="18" height="1.5" rx="0.75" fill="#E2E4E7" /><rect x="8" y="24" width="15" height="1.5" rx="0.75" fill="#E2E4E7" /></svg>,
    stores: <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true"><circle cx="18" cy="16" r="10" stroke="#8159BB" strokeWidth="1.5" fill="white" /><path d="M14 16l2 2 4-4" stroke="#8159BB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><rect x="10" y="24" width="16" height="2" rx="1" fill="#8159BB" opacity="0.3" /></svg>,
    'link-in-bio': <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true"><circle cx="18" cy="18" r="13" stroke="#8159BB" strokeWidth="1.5" fill="white" /><circle cx="18" cy="18" r="6" stroke="#8159BB" strokeWidth="1.5" fill="#F4F6F8" /><circle cx="18" cy="18" r="2" fill="#8159BB" /></svg>,
  };
  return icons[slug] || icons.websites;
}

function AllGeneratorsSection() {
  const searchInputRef = useRef(null);
  const resultCountRef = useRef(null);
  const noResultsRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const container = sectionRef.current;
    if (!container) return;

    const searchInput = container.querySelector('.js-search-input');
    const allSubsections = container.querySelectorAll('.js-category-subsection');
    const resultCount = container.querySelector('.js-result-count');
    const noResults = container.querySelector('.js-no-results');
    const allCards = container.querySelectorAll('.js-generator-card');

    if (!searchInput) return;

    const handleSearch = () => {
      const query = (searchInput.value || '').toLowerCase().trim();
      let visibleCount = 0;

      allSubsections.forEach((subsection) => {
        const cards = subsection.querySelectorAll('.js-generator-card');
        let subsectionHasMatch = false;

        cards.forEach((card) => {
          const name = (card.getAttribute('data-name') || '').toLowerCase();
          const desc = (card.getAttribute('data-desc') || '').toLowerCase();
          const category = (card.getAttribute('data-category') || '').toLowerCase();
          let matches = true;
          if (query) {
            const terms = query.split(/\s+/);
            const haystack = `${name} ${desc} ${category}`;
            matches = terms.every((term) => haystack.includes(term));
          }
          if (matches) {
            card.style.display = '';
            visibleCount++;
            subsectionHasMatch = true;
          } else {
            card.style.display = 'none';
          }
        });

        subsection.style.display = subsectionHasMatch ? '' : 'none';
      });

      if (resultCount) {
        const text = visibleCount === 1 ? `1${strings.resultCount}` : `${visibleCount}${strings.resultsCount}`;
        resultCount.textContent = text;
        resultCount.style.display = query ? '' : 'none';
      }

      if (noResults) {
        noResults.style.display = query && visibleCount === 0 ? '' : 'none';
      }
    };

    searchInput.addEventListener('input', handleSearch);

    const clearBtn = container.querySelector('.js-clear-search');
    if (clearBtn) {
      clearBtn.addEventListener('click', () => {
        searchInput.value = '';
        handleSearch();
        searchInput.focus();
      });
    }

    return () => {
      searchInput.removeEventListener('input', handleSearch);
    };
  }, []);

  const totalGenerators = Object.values(allGenerators).flat().length;

  return (
    <section className="section-py bg-light-bg" id="all-generators" ref={sectionRef}>
      <div className="container-wide">
        <h2 className="text-[26px] md:text-[30px] text-heading-gray m-0">{strings.allHeading}</h2>
        <p className="text-[14px] text-body-gray mt-[5px] mb-[30px]">{strings.allSub}</p>

        <div className="mb-[20px]">
          <div className="relative max-w-[480px]">
            <svg className="absolute left-[12px] top-[50%] -translate-y-1/2 w-[16px] h-[16px] text-body-gray pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              ref={searchInputRef}
              type="text"
              className="js-search-input w-full h-[40px] pl-[38px] pr-[15px] border border-card-border rounded-[4px] text-[14px] font-body text-body-gray bg-white focus:outline-none focus:border-brand-purple"
              placeholder={strings.searchPlaceholder}
              aria-label={strings.searchLabel}
            />
          </div>
          <p className="js-result-count text-[13px] text-body-gray mt-[8px] hidden" aria-live="polite"></p>
        </div>

        <div className="js-no-results hidden text-center py-[40px]" role="status">
          <p className="text-[16px] text-body-gray mb-[15px]">{strings.noResults}</p>
          <button type="button" className="js-clear-search btn-ghost mb-[15px]">{strings.noResultsClear}</button>
          <p className="text-[14px]">
            <a href="/s/ai_site_builder" className="text-brand-purple hover:underline">{strings.noResultsFallback}</a>
          </p>
        </div>

        {categories.map((cat) => {
          const gens = allGenerators[cat.slug] || [];
          const cardCount = gens.length;
          const subsectionId = `${cat.slug}-subsection`;

          return (
            <div key={cat.slug} id={cat.slug} className="js-category-subsection mb-[40px]">
              <h3 className="font-heading font-bold text-[20px] text-heading-gray uppercase m-0">{cat.name}</h3>
              <p className="text-[14px] text-body-gray mt-[5px] mb-[20px]">{cat.desc}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px] js-card-grid" id={subsectionId}>
                {gens.map((gen, idx) => (
                  <a
                    key={gen.slug}
                    href={`/generators/${slugify(gen.name)}`}
                    className="card no-underline flex flex-col h-full js-generator-card"
                    data-name={gen.name}
                    data-desc={gen.desc}
                    data-category={cat.name}
                    data-index={idx}
                    data-subsection={cat.slug}
                  >
                    <div className="mb-[10px]" aria-hidden="true">
                      <CategoryIcon slug={cat.slug} />
                    </div>
                    <h4 className="font-heading font-bold text-[15px] text-heading-gray uppercase mb-[5px]">{gen.name}</h4>
                    <p className="text-[13px] text-body-gray leading-[1.4] m-0">{gen.desc}</p>
                  </a>
                ))}
              </div>
              {cardCount > 6 && (
                <div className="mt-[15px] text-center">
                  <button
                    type="button"
                    className="js-show-all btn-ghost"
                    data-target={subsectionId}
                    data-show={cardCount}
                    aria-expanded="false"
                    aria-controls={subsectionId}
                  >
                    {strings.showAll} {cardCount} {cat.name.toLowerCase()}
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    { num: '1', title: strings.howStep1Title, desc: strings.howStep1Desc },
    { num: '2', title: strings.howStep2Title, desc: strings.howStep2Desc },
    { num: '3', title: strings.howStep3Title, desc: strings.howStep3Desc },
  ];

  return (
    <section className="section-py bg-white">
      <div className="container-wide">
        <h2 className="text-[26px] md:text-[30px] text-heading-gray text-center m-0 mb-[40px]">{strings.howHeading}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px]">
          {steps.map((step) => (
            <div key={step.num} className="text-center px-[15px]">
              <div className="w-[50px] h-[50px] rounded-full bg-brand-purple text-white font-heading font-bold text-[22px] flex items-center justify-center mx-auto mb-[15px]" aria-hidden="true">
                {step.num}
              </div>
              <h3 className="font-heading font-bold text-[14px] text-heading-gray uppercase mb-[10px]">{step.title}</h3>
              <p className="text-[14px] text-body-gray leading-[1.5] m-0">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyStrikingly() {
  const items = [
    { icon: 'zap', title: strings.why1Title, desc: strings.why1Desc },
    { icon: 'smartphone', title: strings.why2Title, desc: strings.why2Desc },
    { icon: 'gift', title: strings.why3Title, desc: strings.why3Desc },
  ];

  const iconSvgs = {
    zap: <svg className="w-[24px] h-[24px]" fill="none" viewBox="0 0 24 24" stroke="#8159BB" strokeWidth="2" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
    smartphone: <svg className="w-[24px] h-[24px]" fill="none" viewBox="0 0 24 24" stroke="#8159BB" strokeWidth="2" aria-hidden="true"><rect x="5" y="2" width="14" height="20" rx="2" /><path strokeLinecap="round" d="M12 18h.01" /></svg>,
    gift: <svg className="w-[24px] h-[24px]" fill="none" viewBox="0 0 24 24" stroke="#8159BB" strokeWidth="2" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" /></svg>,
  };

  return (
    <section className="section-py bg-light-bg">
      <div className="container-wide">
        <h2 className="text-[26px] md:text-[30px] text-heading-gray text-center m-0 mb-[40px]">{strings.whyHeading}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px]">
          {items.map((item) => (
            <div key={item.title} className="text-center px-[15px]">
              <div className="mb-[15px] flex justify-center">{iconSvgs[item.icon]}</div>
              <h3 className="font-heading font-bold text-[14px] text-heading-gray uppercase mb-[10px]">{item.title}</h3>
              <p className="text-[14px] text-body-gray leading-[1.5] m-0">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const faqs = [
    { q: strings.faq1Q, a: strings.faq1A },
    { q: strings.faq2Q, a: strings.faq2A },
    { q: strings.faq3Q, a: strings.faq3A },
    { q: strings.faq4Q, a: strings.faq4A },
    { q: strings.faq5Q, a: strings.faq5A },
    { q: strings.faq6Q, a: strings.faq6A },
  ];

  const faqContainerRef = useRef(null);

  useEffect(() => {
    const container = faqContainerRef.current;
    if (!container) return;

    const buttons = container.querySelectorAll('.js-faq-toggle');

    const handleClick = (e) => {
      const btn = e.currentTarget;
      const panelId = btn.getAttribute('aria-controls');
      const panel = document.getElementById(panelId);
      const isOpen = btn.getAttribute('aria-expanded') === 'true';

      btn.setAttribute('aria-expanded', String(!isOpen));
      if (panel) {
        if (isOpen) {
          panel.style.maxHeight = '0px';
        } else {
          panel.style.maxHeight = panel.scrollHeight + 'px';
        }
      }
    };

    buttons.forEach((btn) => {
      btn.addEventListener('click', handleClick);
    });

    return () => {
      buttons.forEach((btn) => {
        btn.removeEventListener('click', handleClick);
      });
    };
  }, []);

  return (
    <section className="section-py bg-white" ref={faqContainerRef}>
      <div className="container-wide max-w-[800px]">
        <h2 className="text-[26px] md:text-[30px] text-heading-gray text-center m-0 mb-[40px]">{strings.faqHeading}</h2>
        <div className="space-y-0">
          {faqs.map((faq, idx) => {
            const panelId = `faq-panel-${idx}`;
            const isFirst = idx === 0;
            return (
              <div key={idx} className="border-b border-divider">
                <button
                  type="button"
                  className="js-faq-toggle w-full flex items-center justify-between py-[15px] bg-transparent border-0 cursor-pointer font-heading font-bold text-[14px] text-heading-gray uppercase text-left"
                  aria-expanded={isFirst ? 'true' : 'false'}
                  aria-controls={panelId}
                >
                  <span>{faq.q}</span>
                  <svg className="w-[16px] h-[16px] text-brand-purple shrink-0 ml-[10px] transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={panelId}
                  className="overflow-hidden transition-[max-height] duration-300 ease-in-out"
                  style={{ maxHeight: isFirst ? '500px' : '0px' }}
                >
                  <div className="pb-[15px] text-[14px] text-body-gray leading-[1.6]">
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
    <section className="section-py bg-white text-center">
      <div className="container-wide">
        <h2 className="text-[28px] md:text-[34px] text-heading-gray uppercase m-0">{strings.closingHeading}</h2>
        <p className="text-[16px] text-body-gray mt-[15px] mb-[30px]">{strings.closingSub}</p>
        <a href="/s/ai_site_builder" className="btn-primary btn-gradient btn-lg no-underline inline-flex">
          {strings.closingCta}
        </a>
      </div>
    </section>
  );
}

function Footer() {
  const columns = [
    { heading: 'Product', links: [{ text: 'Pricing', href: '/pricing' }, { text: 'Templates', href: '/templates' }] },
    { heading: 'Company', links: [{ text: 'About', href: '/about' }, { text: 'Blog', href: '/blog' }] },
    { heading: 'Support', links: [{ text: 'Help Center', href: '/support' }] },
    { heading: 'Legal', links: [{ text: 'Terms', href: '/terms' }, { text: 'Privacy', href: '/privacy' }] },
  ];

  return (
    <footer className="bg-white border-t border-divider py-[40px]">
      <div className="container-wide">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-[30px] mb-[30px]">
          {columns.map((col) => (
            <div key={col.heading}>
              <h4 className="font-heading font-bold text-[12px] text-heading-gray uppercase mb-[10px]">{col.heading}</h4>
              <ul className="list-none p-0 m-0 space-y-[5px]">
                {col.links.map((link) => (
                  <li key={link.text}>
                    <a href={link.href} className="text-[13px] text-body-gray hover:text-brand-purple transition-colors">{link.text}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-divider pt-[20px] flex flex-col md:flex-row items-center justify-between gap-[10px]">
          <a href="/" className="font-heading font-bold text-[16px] text-brand-purple uppercase">{strings.logo}</a>
          <p className="text-[12px] text-body-gray m-0">{strings.footerCopyright}</p>
        </div>
      </div>
    </footer>
  );
}

function App() {
  const mainRef = useRef(null);

  useEffect(() => {
    const container = mainRef.current;
    if (!container) return;

    // ---- Show All Toggles ----
    const showAllBtns = container.querySelectorAll('.js-show-all');
    showAllBtns.forEach((btn) => {
      const targetId = btn.getAttribute('data-target');
      const showCount = parseInt(btn.getAttribute('data-show') || '0', 10);
      const grid = document.getElementById(targetId);
      if (!grid || !showCount) return;

      const cards = grid.querySelectorAll('.js-generator-card');
      let expanded = false;

      // Initially collapse cards beyond 6
      cards.forEach((card, idx) => {
        if (idx >= 6) {
          card.style.display = 'none';
        }
      });

      btn.addEventListener('click', () => {
        expanded = !expanded;
        btn.setAttribute('aria-expanded', String(expanded));
        cards.forEach((card, idx) => {
          if (idx >= 6) {
            card.style.display = expanded ? '' : 'none';
          }
        });
        btn.textContent = expanded
          ? `${strings.hideSome}`
          : `${strings.showAll} ${showCount} ${btn.closest('.js-category-subsection')?.querySelector('h3')?.textContent?.toLowerCase() || ''}`;
      });
    });

    // ---- FAQ rotate chevrons ----
    const faqBtns = container.querySelectorAll('.js-faq-toggle');
    faqBtns.forEach((btn) => {
      const chevron = btn.querySelector('svg');
      if (!chevron) return;

      const observer = new MutationObserver(() => {
        const expanded = btn.getAttribute('aria-expanded') === 'true';
        chevron.style.transform = expanded ? 'rotate(180deg)' : 'rotate(0deg)';
        btn.style.color = expanded ? '#8159BB' : '';
      });

      observer.observe(btn, { attributes: true, attributeFilter: ['aria-expanded'] });

      // Set initial state
      const isExpanded = btn.getAttribute('aria-expanded') === 'true';
      chevron.style.transform = isExpanded ? 'rotate(180deg)' : 'rotate(0deg)';
      if (isExpanded) btn.style.color = '#8159BB';
    });
  }, []);

  return (
    <div className="min-h-screen bg-white" ref={mainRef}>
      <TopBar />
      <Breadcrumb />
      <main>
        <Hero />
        <FeaturedGenerators />
        <BrowseByCategory />
        <AllGeneratorsSection />
        <HowItWorks />
        <WhyStrikingly />
        <FAQ />
        <ClosingCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
