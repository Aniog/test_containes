import React, { useEffect, useMemo, useState } from 'react';
import {
  strings,
  slugify,
  featured,
  categoryCards,
  directory,
  COLLAPSED_VISIBLE_COUNT,
} from '@/data/generators';
import {
  IconSearch,
  IconArrowRight,
  IconChevronDown,
  IconWebsite,
  IconLanding,
  IconPortfolio,
  IconBlog,
  IconStore,
  IconLink,
  IconBolt,
  IconMobile,
  IconFree,
  HeroIllustration,
} from './icons';

const t = strings.en;

const BUILDER_HREF = '/s/ai_site_builder';

const categoryIcons = {
  websites: IconWebsite,
  'landing-pages': IconLanding,
  portfolios: IconPortfolio,
  blogs: IconBlog,
  stores: IconStore,
  'link-in-bio': IconLink,
};

/* ===========================
   Top bar
   =========================== */
function TopBar() {
  return (
    <header className="topbar" role="banner">
      <div className="container topbar-inner">
        <a href="/" className="brand" aria-label="Strikingly home">
          strikingly<span className="ai">AI</span>
        </a>
      </div>
    </header>
  );
}

/* ===========================
   Breadcrumb
   =========================== */
function Breadcrumb() {
  return (
    <nav aria-label="Breadcrumb" className="breadcrumb">
      <div className="container">
        <ol>
          <li>
            <a href="/">{t.breadcrumb.home}</a>
          </li>
          <li className="breadcrumb-sep" aria-hidden="true">
            /
          </li>
          <li aria-current="page">{t.breadcrumb.current}</li>
        </ol>
      </div>
    </nav>
  );
}

/* ===========================
   Hero
   =========================== */
function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-heading">
      <div className="container hero-grid">
        <div className="hero-content">
          <h1 id="hero-heading" className="hero-h1">
            <span>{t.hero.h1Line1}</span>
            <span className="line2">{t.hero.h1Line2}</span>
          </h1>
          <p className="hero-sub">{t.hero.sub}</p>
          <div className="hero-ctas">
            <a className="btn btn-grad btn-lg" href={BUILDER_HREF}>
              {t.hero.ctaPrimary}
            </a>
            <a className="btn btn-ghost btn-lg" href="#all-generators">
              {t.hero.ctaSecondary}
            </a>
          </div>
        </div>
        <div className="hero-illu" aria-hidden="true">
          <HeroIllustration width={480} height={380} />
        </div>
      </div>
    </section>
  );
}

/* ===========================
   Featured Generators
   =========================== */
function Featured() {
  return (
    <section
      className="section section-light"
      aria-labelledby="featured-heading"
    >
      <div className="container">
        <div className="section-head">
          <div className="eyebrow-rule" aria-hidden="true" />
          <h2 id="featured-heading">{t.featured.heading}</h2>
          <p>{t.featured.sub}</p>
        </div>
        <div className="grid-3">
          {featured.map((item) => (
            <a
              key={item.name}
              className="card featured-card"
              href={`/generators/${slugify(item.name)}`}
            >
              <span className="card-name">{item.name}</span>
              <p className="card-desc">{item.desc}</p>
              <span className="tag">{item.category}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ===========================
   Browse by Category
   =========================== */
function Categories() {
  return (
    <section className="section" aria-labelledby="categories-heading">
      <div className="container">
        <div className="section-head">
          <div className="eyebrow-rule" aria-hidden="true" />
          <h2 id="categories-heading">{t.categories.heading}</h2>
          <p>{t.categories.sub}</p>
        </div>
        <div className="grid-3">
          {categoryCards.map((cat) => {
            const Icon = categoryIcons[cat.id] || IconWebsite;
            return (
              <a
                key={cat.id}
                className="card cat-card"
                href={`#${cat.id}`}
                aria-label={`Jump to ${cat.name} generators`}
              >
                <div className="cat-illu" aria-hidden="true">
                  <Icon size={28} />
                </div>
                <div>
                  <span className="card-name">{cat.name}</span>
                  <p className="card-desc">{cat.desc}</p>
                </div>
                <div className="cat-card-foot">
                  <span>Browse</span>
                  <IconArrowRight size={14} />
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ===========================
   Directory (Section 5)
   =========================== */
function Directory() {
  const [query, setQuery] = useState('');
  const [expanded, setExpanded] = useState(() => {
    const obj = {};
    directory.forEach((s) => (obj[s.id] = false));
    return obj;
  });

  // Compute filtered ids only after JS runs.
  const matches = useMemo(() => {
    const q = query.trim().toLowerCase();
    const result = { total: 0, bySection: {} };
    directory.forEach((sec) => {
      const matchedNames = new Set();
      let secMatchCount = 0;
      sec.items.forEach((item) => {
        if (!q) {
          matchedNames.add(item.name);
          secMatchCount += 1;
          return;
        }
        const haystack = `${item.name} ${item.desc} ${sec.name}`.toLowerCase();
        if (haystack.includes(q)) {
          matchedNames.add(item.name);
          secMatchCount += 1;
        }
      });
      result.bySection[sec.id] = { matchedNames, count: secMatchCount };
      result.total += secMatchCount;
    });
    return result;
  }, [query]);

  const isSearching = query.trim().length > 0;
  const totalCount = directory.reduce((acc, s) => acc + s.items.length, 0);

  const toggle = (id) =>
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));

  const clearSearch = () => setQuery('');

  return (
    <section
      id="all-generators"
      className="section section-light"
      aria-labelledby="directory-heading"
    >
      <div className="container">
        <div className="section-head">
          <div className="eyebrow-rule" aria-hidden="true" />
          <h2 id="directory-heading">{t.directory.heading}</h2>
          <p>{t.directory.sub}</p>
        </div>

        {/* Search */}
        <div className="search-wrap">
          <div className="search-input-wrap">
            <IconSearch size={18} />
            <input
              type="search"
              className="search-input"
              placeholder={t.directory.searchPlaceholder}
              aria-label={t.directory.searchAriaLabel}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
          <div className="search-count" aria-live="polite">
            {isSearching
              ? `${matches.total} generator${matches.total === 1 ? '' : 's'} match`
              : `${totalCount} generators total`}
          </div>
        </div>

        {/* Empty state */}
        {isSearching && matches.total === 0 ? (
          <div className="empty-state" role="status">
            <h3>{t.directory.empty.title}</h3>
            <p>{t.directory.empty.body}</p>
            <div className="empty-actions">
              <button
                type="button"
                className="btn btn-ghost"
                onClick={clearSearch}
              >
                {t.directory.empty.clear}
              </button>
              <a className="text-link" href={BUILDER_HREF}>
                {t.directory.empty.builderLink}
              </a>
            </div>
          </div>
        ) : null}

        {/* Subsections */}
        {directory.map((sec) => {
          const sectionMatch = matches.bySection[sec.id] || {
            matchedNames: new Set(),
            count: 0,
          };
          const Icon = categoryIcons[sec.id] || IconWebsite;
          const isHiddenBySearch = isSearching && sectionMatch.count === 0;
          const isExpanded = !!expanded[sec.id] || isSearching;

          // visibleCount only matters when not searching
          const collapsedThreshold = COLLAPSED_VISIBLE_COUNT;
          const showToggle =
            !isSearching && sec.items.length > collapsedThreshold;

          return (
            <section
              id={sec.id}
              key={sec.id}
              className={`subsection${isHiddenBySearch ? ' is-hidden' : ''}${
                isExpanded ? ' is-expanded' : ''
              }`}
              aria-labelledby={`${sec.id}-heading`}
            >
              <div className="subsection-head">
                <div className="subsection-thumb" aria-hidden="true">
                  <Icon size={22} />
                </div>
                <h3 id={`${sec.id}-heading`}>{sec.name}</h3>
                <p className="subsection-desc">{sec.desc}</p>
              </div>

              <div className="grid-3">
                {sec.items.map((item, idx) => {
                  const isCollapsedExtra =
                    idx >= collapsedThreshold && !isSearching;
                  const isSearchHidden =
                    isSearching && !sectionMatch.matchedNames.has(item.name);
                  const classes = [
                    'card',
                    'dir-card',
                    isCollapsedExtra ? 'is-collapsed-extra' : '',
                    isSearchHidden ? 'is-search-hidden' : '',
                  ]
                    .filter(Boolean)
                    .join(' ');
                  return (
                    <a
                      key={item.name}
                      className={classes}
                      href={`/generators/${slugify(item.name)}`}
                    >
                      <div className="subsection-thumb" aria-hidden="true">
                        <Icon size={20} />
                      </div>
                      <span className="card-name">{item.name}</span>
                      <p className="card-desc">{item.desc}</p>
                    </a>
                  );
                })}
              </div>

              {showToggle ? (
                <div className="show-all-row">
                  <button
                    type="button"
                    className="show-all-btn"
                    aria-expanded={isExpanded}
                    aria-controls={`${sec.id}`}
                    onClick={() => toggle(sec.id)}
                  >
                    {isExpanded
                      ? t.directory.showLess
                      : `${t.directory.showAll} ${sec.items.length} ${sec.name.toLowerCase()}`}
                  </button>
                </div>
              ) : null}
            </section>
          );
        })}
      </div>
    </section>
  );
}

/* ===========================
   How It Works
   =========================== */
function HowItWorks() {
  return (
    <section className="section" aria-labelledby="how-heading">
      <div className="container">
        <div className="section-head">
          <div className="eyebrow-rule" aria-hidden="true" />
          <h2 id="how-heading">{t.how.heading}</h2>
          <p>{t.how.sub}</p>
        </div>
        <div className="steps">
          {t.how.steps.map((step, idx) => (
            <div className="step" key={step.title}>
              <div className="step-num" aria-hidden="true">
                {idx + 1}
              </div>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ===========================
   Why Strikingly
   =========================== */
function WhyStrikingly() {
  const icons = [IconBolt, IconMobile, IconFree];
  return (
    <section className="section section-light" aria-labelledby="why-heading">
      <div className="container">
        <div className="section-head">
          <div className="eyebrow-rule" aria-hidden="true" />
          <h2 id="why-heading">{t.why.heading}</h2>
          <p>{t.why.sub}</p>
        </div>
        <div className="why-grid">
          {t.why.items.map((it, idx) => {
            const Icon = icons[idx] || IconBolt;
            return (
              <div className="why-cell" key={it.title}>
                <div className="why-icon" aria-hidden="true">
                  <Icon size={22} />
                </div>
                <h3>{it.title}</h3>
                <p>{it.body}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ===========================
   FAQ
   =========================== */
function Faq() {
  const [openIdx, setOpenIdx] = useState(0);
  return (
    <section className="section" aria-labelledby="faq-heading">
      <div className="container">
        <div className="section-head">
          <div className="eyebrow-rule" aria-hidden="true" />
          <h2 id="faq-heading">{t.faq.heading}</h2>
        </div>
        <div className="faq-list">
          {t.faq.items.map((item, idx) => {
            const isOpen = openIdx === idx;
            const panelId = `faq-panel-${idx}`;
            const triggerId = `faq-trigger-${idx}`;
            return (
              <div className="faq-item" key={item.q}>
                <h3>
                  <button
                    type="button"
                    className="faq-trigger"
                    id={triggerId}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenIdx(isOpen ? -1 : idx)}
                  >
                    <span>{item.q}</span>
                    <span className="chev" aria-hidden="true">
                      <IconChevronDown size={18} />
                    </span>
                  </button>
                </h3>
                <div
                  className="faq-panel"
                  id={panelId}
                  role="region"
                  aria-labelledby={triggerId}
                  hidden={!isOpen}
                >
                  <p>{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ===========================
   Closing CTA
   =========================== */
function Closing() {
  return (
    <section className="closing" aria-labelledby="closing-heading">
      <div className="container">
        <h2 id="closing-heading">{t.closing.heading}</h2>
        <p>{t.closing.sub}</p>
        <a className="btn btn-grad btn-lg" href={BUILDER_HREF}>
          {t.closing.cta}
        </a>
      </div>
    </section>
  );
}

/* ===========================
   Footer
   =========================== */
function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer-grid">
          <div>
            <a href="/" className="brand" aria-label="Strikingly home">
              strikingly<span className="ai">AI</span>
            </a>
            <p className="footer-tag">{t.footer.tagline}</p>
          </div>
          {t.footer.columns.map((col) => (
            <div key={col.heading}>
              <h4>{col.heading}</h4>
              <ul>
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="footer-bottom">{t.footer.copyright}</div>
      </div>
    </footer>
  );
}

/* ===========================
   Page
   =========================== */
export default function GeneratorsPage() {
  // Add `has-js` to body when React mounts so CSS toggles activate.
  useEffect(() => {
    document.documentElement.classList.add('has-js');
    return () => document.documentElement.classList.remove('has-js');
  }, []);

  return (
    <>
      <TopBar />
      <Breadcrumb />
      <main id="main">
        <Hero />
        <Featured />
        <Categories />
        <Directory />
        <HowItWorks />
        <WhyStrikingly />
        <Faq />
        <Closing />
      </main>
      <Footer />
    </>
  );
}
