import React, { useMemo, useRef, useState } from 'react';
import { strings } from '../strings';
import { categories, featuredGenerators, allGeneratorsByCategory } from '../generatorsData';

const s = strings.en;

const categoryIcons = {
  websites: (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <rect x="4" y="8" width="32" height="24" rx="3" stroke="#8159BB" strokeWidth="2" />
      <line x1="4" y1="15" x2="36" y2="15" stroke="#8159BB" strokeWidth="2" />
      <circle cx="9" cy="11.5" r="1.5" fill="#8159BB" />
      <circle cx="14" cy="11.5" r="1.5" fill="#8159BB" />
      <circle cx="19" cy="11.5" r="1.5" fill="#8159BB" />
    </svg>
  ),
  'landing-pages': (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <rect x="6" y="4" width="28" height="32" rx="3" stroke="#8159BB" strokeWidth="2" />
      <rect x="10" y="20" width="20" height="12" rx="1" fill="#E9E0F5" />
      <rect x="10" y="8" width="20" height="8" rx="1" fill="#8159BB" opacity="0.2" />
    </svg>
  ),
  portfolios: (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <rect x="4" y="6" width="14" height="14" rx="2" stroke="#8159BB" strokeWidth="2" />
      <rect x="22" y="6" width="14" height="14" rx="2" stroke="#8159BB" strokeWidth="2" />
      <rect x="4" y="24" width="14" height="10" rx="2" stroke="#8159BB" strokeWidth="2" />
      <rect x="22" y="24" width="14" height="10" rx="2" stroke="#8159BB" strokeWidth="2" />
    </svg>
  ),
  blogs: (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <rect x="6" y="4" width="28" height="32" rx="3" stroke="#8159BB" strokeWidth="2" />
      <line x1="12" y1="12" x2="28" y2="12" stroke="#8159BB" strokeWidth="2" />
      <line x1="12" y1="18" x2="24" y2="18" stroke="#8159BB" strokeWidth="2" />
      <line x1="12" y1="24" x2="26" y2="24" stroke="#8159BB" strokeWidth="2" />
    </svg>
  ),
  stores: (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <path d="M6 12L10 4H30L34 12V34C34 35.1 33.1 36 32 36H8C6.9 36 6 35.1 6 34V12Z" stroke="#8159BB" strokeWidth="2" />
      <path d="M6 12H34" stroke="#8159BB" strokeWidth="2" />
      <circle cx="16" cy="22" r="2" stroke="#8159BB" strokeWidth="2" />
      <circle cx="24" cy="22" r="2" stroke="#8159BB" strokeWidth="2" />
    </svg>
  ),
  'link-in-bio': (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <circle cx="20" cy="20" r="16" stroke="#8159BB" strokeWidth="2" />
      <circle cx="20" cy="14" r="4" stroke="#8159BB" strokeWidth="2" />
      <path d="M12 30C12 25.6 15.6 22 20 22C24.4 22 28 25.6 28 30" stroke="#8159BB" strokeWidth="2" />
    </svg>
  ),
};

const stepIcons = [
  <svg key="1" width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
    <circle cx="24" cy="24" r="22" stroke="#8159BB" strokeWidth="2" />
    <text x="24" y="29" textAnchor="middle" fill="#8159BB" fontSize="18" fontWeight="700" fontFamily="Josefin Sans, Poppins, sans-serif">1</text>
  </svg>,
  <svg key="2" width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
    <circle cx="24" cy="24" r="22" stroke="#8159BB" strokeWidth="2" />
    <text x="24" y="29" textAnchor="middle" fill="#8159BB" fontSize="18" fontWeight="700" fontFamily="Josefin Sans, Poppins, sans-serif">2</text>
  </svg>,
  <svg key="3" width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
    <circle cx="24" cy="24" r="22" stroke="#8159BB" strokeWidth="2" />
    <text x="24" y="29" textAnchor="middle" fill="#8159BB" fontSize="18" fontWeight="700" fontFamily="Josefin Sans, Poppins, sans-serif">3</text>
  </svg>,
];

const whyIcons = [
  <svg key="live" width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
    <path d="M20 4L24 16H36L26 24L30 36L20 28L10 36L14 24L4 16H16L20 4Z" stroke="#8159BB" strokeWidth="2" />
  </svg>,
  <svg key="mobile" width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
    <rect x="12" y="2" width="16" height="36" rx="3" stroke="#8159BB" strokeWidth="2" />
    <line x1="16" y1="30" x2="24" y2="30" stroke="#8159BB" strokeWidth="2" />
  </svg>,
  <svg key="free" width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
    <circle cx="20" cy="20" r="16" stroke="#8159BB" strokeWidth="2" />
    <path d="M14 20H26M20 14V26" stroke="#8159BB" strokeWidth="2" />
  </svg>,
];

const heroIllustration = (
  <svg width="420" height="320" viewBox="0 0 420 320" fill="none" aria-hidden="true" role="img">
    <title>Website mockup illustration</title>
    <rect x="20" y="20" width="380" height="280" rx="12" stroke="#CBB8E8" strokeWidth="2" fill="#FAF7FD" />
    <rect x="40" y="40" width="120" height="12" rx="6" fill="#E2D4F3" />
    <rect x="40" y="64" width="80" height="8" rx="4" fill="#E2D4F3" />
    <rect x="40" y="88" width="340" height="160" rx="8" fill="#F0EAF8" />
    <rect x="60" y="108" width="140" height="10" rx="5" fill="#D8C6ED" />
    <rect x="60" y="130" width="100" height="8" rx="4" fill="#D8C6ED" />
    <rect x="60" y="150" width="180" height="8" rx="4" fill="#D8C6ED" />
    <rect x="60" y="170" width="120" height="8" rx="4" fill="#D8C6ED" />
    <rect x="260" y="108" width="100" height="100" rx="8" fill="#E2D4F3" />
    <circle cx="310" cy="158" r="24" stroke="#CBB8E8" strokeWidth="2" fill="none" />
    <path d="M296 158L306 168L326 148" stroke="#CBB8E8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <rect x="40" y="260" width="80" height="24" rx="4" fill="#E2D4F3" />
    <rect x="130" y="260" width="80" height="24" rx="4" fill="#E2D4F3" />
  </svg>
);

function TopBar() {
  return (
    <header className="topbar">
      <div className="topbar-inner">
        <a href="/" className="topbar-logo" aria-label="Strikingly home">
          <span className="topbar-brand">strikingly</span>
          <span className="topbar-ai">AI</span>
        </a>
      </div>
    </header>
  );
}

function Breadcrumb() {
  return (
    <nav aria-label="Breadcrumb" className="breadcrumb">
      <ol className="breadcrumb-list">
        <li className="breadcrumb-item">
          <a href="/" className="breadcrumb-link">{s.breadcrumb.home}</a>
        </li>
        <li className="breadcrumb-separator" aria-hidden="true">&gt;</li>
        <li className="breadcrumb-item">
          <span className="breadcrumb-current" aria-current="page">{s.breadcrumb.current}</span>
        </li>
      </ol>
    </nav>
  );
}

function Hero() {
  return (
    <section className="hero">
      <div className="hero-inner">
        <div className="hero-text">
          <h1 className="hero-h1">
            <span className="hero-h1-line1">{s.hero.h1Line1}</span>
            <span className="hero-h1-line2">{s.hero.h1Line2}</span>
          </h1>
          <p className="hero-sub">{s.hero.subheadline}</p>
          <div className="hero-ctas">
            <a href="/s/ai_site_builder" className="btn btn-primary btn-large">
              {s.hero.ctaPrimary}
            </a>
            <a href="#all-generators" className="btn btn-ghost btn-large">
              {s.hero.ctaSecondary}
            </a>
          </div>
        </div>
        <div className="hero-visual" aria-hidden="true">
          {heroIllustration}
        </div>
      </div>
    </section>
  );
}

function FeaturedGenerators() {
  return (
    <section className="section featured" aria-labelledby="featured-heading">
      <div className="section-inner">
        <h2 id="featured-heading" className="section-heading">{s.featured.heading}</h2>
        <p className="section-subheading">{s.featured.subheading}</p>
        <div className="featured-grid">
          {featuredGenerators.map((g) => (
            <a
              key={g.slug}
              href={`/generators/${g.slug}`}
              className="card featured-card"
            >
              <span className="tag">{g.category}</span>
              <h3 className="featured-name">{g.name}</h3>
              <p className="featured-desc">{g.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function BrowseByCategory() {
  return (
    <section className="section categories" aria-labelledby="categories-heading">
      <div className="section-inner">
        <h2 id="categories-heading" className="section-heading">{s.categories.heading}</h2>
        <div className="categories-grid">
          {categories.map((cat) => (
            <a
              key={cat.slug}
              href={`/generators#${cat.slug}`}
              className="card category-card"
            >
              <div className="category-icon">{categoryIcons[cat.slug]}</div>
              <h3 className="category-name">{s.categories[cat.nameKey].name}</h3>
              <p className="category-desc">{s.categories[cat.nameKey].description}</p>
              <span className="category-arrow" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="#8159BB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function AllGenerators() {
  const [query, setQuery] = useState('');
  const [expanded, setExpanded] = useState(() => {
    const init = {};
    categories.forEach((c) => { init[c.slug] = false; });
    return init;
  });
  const searchRef = useRef(null);

  const normalizedQuery = query.trim().toLowerCase();

  const results = useMemo(() => {
    const out = {};
    categories.forEach((cat) => {
      const list = allGeneratorsByCategory[cat.slug] || [];
      if (!normalizedQuery) {
        out[cat.slug] = list;
        return;
      }
      out[cat.slug] = list.filter((g) => {
        const hay = `${g.name} ${g.description} ${cat.slug}`.toLowerCase();
        return hay.includes(normalizedQuery);
      });
    });
    return out;
  }, [normalizedQuery]);

  const totalMatches = useMemo(
    () => Object.values(results).reduce((sum, list) => sum + list.length, 0),
    [results]
  );

  const toggleSection = (slug) => {
    setExpanded((prev) => ({ ...prev, [slug]: !prev[slug] }));
  };

  const handleClear = () => {
    setQuery('');
    if (searchRef.current) searchRef.current.focus();
  };

  return (
    <section id="all-generators" className="section all-generators" aria-labelledby="all-generators-heading">
      <div className="section-inner">
        <h2 id="all-generators-heading" className="section-heading">{s.allGenerators.heading}</h2>
        <p className="section-subheading">{s.allGenerators.subheading}</p>

        <div className="search-wrap">
          <div className="search-field">
            <span className="search-icon" aria-hidden="true">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <circle cx="7.5" cy="7.5" r="5.5" stroke="#636972" strokeWidth="2" />
                <path d="M11.5 11.5L16 16" stroke="#636972" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </span>
            <input
              ref={searchRef}
              type="text"
              className="search-input"
              placeholder={s.allGenerators.searchPlaceholder}
              aria-label={s.allGenerators.searchAriaLabel}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
          {normalizedQuery && (
            <p className="search-count" aria-live="polite">
              {totalMatches} {s.allGenerators.resultCount}
            </p>
          )}
        </div>

        {normalizedQuery && totalMatches === 0 && (
          <div className="empty-state">
            <p className="empty-text">{s.allGenerators.noResults}</p>
            <button type="button" className="btn btn-ghost" onClick={handleClear}>
              {s.allGenerators.clearSearch}
            </button>
            <p className="empty-hint">
              <a href="/s/ai_site_builder">{s.allGenerators.cantFind}</a>
            </p>
          </div>
        )}

        {categories.map((cat) => {
          const list = results[cat.slug] || [];
          const hasMatch = list.length > 0;
          if (!hasMatch && normalizedQuery) return null;

          const isExpanded = expanded[cat.slug];
          const showToggle = list.length > 6;
          const visibleList = !showToggle || isExpanded ? list : list.slice(0, 6);
          const remaining = list.length - 6;

          return (
            <div key={cat.slug} id={cat.slug} className="generator-subsection">
              <h3 className="subsection-heading">{s.categories[cat.nameKey].name}</h3>
              <p className="subsection-desc">{cat.sectionDescription}</p>
              <div className="generator-grid">
                {visibleList.map((g) => (
                  <a
                    key={g.slug}
                    href={`/generators/${g.slug}`}
                    className="card generator-card"
                  >
                    <div className="generator-thumb" aria-hidden="true">
                      {categoryIcons[cat.slug]}
                    </div>
                    <h4 className="generator-name">{g.name}</h4>
                    <p className="generator-desc">{g.description}</p>
                  </a>
                ))}
              </div>
              {showToggle && (
                <button
                  type="button"
                  className="show-all-btn"
                  onClick={() => toggleSection(cat.slug)}
                  aria-expanded={isExpanded}
                  aria-controls={`${cat.slug}-grid`}
                >
                  {isExpanded
                    ? s.allGenerators.showLess
                    : `${s.allGenerators.showAll} ${remaining} ${s.allGenerators.generators}`}
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
    <section className="section how-it-works" aria-labelledby="how-heading">
      <div className="section-inner">
        <h2 id="how-heading" className="section-heading">{s.howItWorks.heading}</h2>
        <div className="steps">
          {[s.howItWorks.step1, s.howItWorks.step2, s.howItWorks.step3].map((step, i) => (
            <div key={i} className="step">
              <div className="step-circle">{stepIcons[i]}</div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-body">{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyStrikingly() {
  const items = [
    { title: s.whyStrikingly.liveInSeconds.title, body: s.whyStrikingly.liveInSeconds.body, icon: whyIcons[0] },
    { title: s.whyStrikingly.mobileByDefault.title, body: s.whyStrikingly.mobileByDefault.body, icon: whyIcons[1] },
    { title: s.whyStrikingly.freeToStart.title, body: s.whyStrikingly.freeToStart.body, icon: whyIcons[2] },
  ];

  return (
    <section className="section why" aria-labelledby="why-heading">
      <div className="section-inner">
        <h2 id="why-heading" className="section-heading">{s.whyStrikingly.heading}</h2>
        <div className="why-grid">
          {items.map((item, i) => (
            <div key={i} className="why-cell">
              <div className="why-icon">{item.icon}</div>
              <h3 className="why-title">{item.title}</h3>
              <p className="why-body">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);
  const ids = s.faq.questions.map((_, i) => `faq-panel-${i}`);

  return (
    <section className="section faq" aria-labelledby="faq-heading">
      <div className="section-inner">
        <h2 id="faq-heading" className="section-heading">{s.faq.heading}</h2>
        <div className="faq-list">
          {s.faq.questions.map((q, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i} className="faq-item">
                <button
                  type="button"
                  className="faq-button"
                  aria-expanded={isOpen}
                  aria-controls={ids[i]}
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                >
                  <span className="faq-q">{q.q}</span>
                  <span className="faq-chevron" aria-hidden="true">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className={isOpen ? 'chevron-open' : ''}>
                      <path d="M4 6L8 10L12 6" stroke="#636972" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </button>
                <div
                  id={ids[i]}
                  className={`faq-panel ${isOpen ? 'faq-panel-open' : ''}`}
                >
                  <div className="faq-a">
                    {q.a.split('\n').map((para, pIdx) => (
                      <p key={pIdx}>{para}</p>
                    ))}
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
    <section className="section closing-cta" aria-labelledby="closing-heading">
      <div className="section-inner center">
        <h2 id="closing-heading" className="section-heading">{s.closingCta.headline}</h2>
        <p className="closing-sub">{s.closingCta.sub}</p>
        <a href="/s/ai_site_builder" className="btn btn-primary btn-large">
          {s.closingCta.cta}
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-top">
          <a href="/" className="footer-logo">
            <span className="topbar-brand">strikingly</span>
            <span className="topbar-ai">AI</span>
          </a>
        </div>
        <div className="footer-columns">
          {s.footer.columns.map((col, i) => (
            <div key={i} className="footer-col">
              <h3 className="footer-col-title">{col.title}</h3>
              <ul className="footer-col-list">
                {col.links.map((link, j) => (
                  <li key={j}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="footer-copy">{s.footer.copyright}</p>
      </div>
    </footer>
  );
}

export default function GeneratorsPage() {
  return (
    <div className="generators-page">
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
