import { useEffect, useMemo, useRef, useState } from 'react';
import {
  strings,
  categories,
  featuredGenerators,
  directoryGenerators,
  allGeneratorsFlat,
} from './generatorData.js';
import {
  WebsiteMockupIllustration,
  CategoryWebsitesIcon,
  CategoryLandingIcon,
  CategoryPortfolioIcon,
  CategoryBlogIcon,
  CategoryStoreIcon,
  CategoryLinkIcon,
  ThumbnailWebsiteIcon,
  ThumbnailLandingIcon,
  ThumbnailPortfolioIcon,
  ThumbnailBlogIcon,
  ThumbnailStoreIcon,
  ThumbnailLinkIcon,
  SearchIcon,
  ChevronDownIcon,
  ArrowRightIcon,
  ZapIcon,
  SmartphoneIcon,
  CreditCardIcon,
} from './illustrations.jsx';
import './generators.css';

const s = strings.en;

const categoryIconMap = {
  websites: CategoryWebsitesIcon,
  landingPages: CategoryLandingIcon,
  portfolios: CategoryPortfolioIcon,
  blogs: CategoryBlogIcon,
  stores: CategoryStoreIcon,
  linkInBio: CategoryLinkIcon,
};

const thumbnailIconMap = {
  websites: ThumbnailWebsiteIcon,
  landingPages: ThumbnailLandingIcon,
  portfolios: ThumbnailPortfolioIcon,
  blogs: ThumbnailBlogIcon,
  stores: ThumbnailStoreIcon,
  linkInBio: ThumbnailLinkIcon,
};

const whyIconMap = [ZapIcon, SmartphoneIcon, CreditCardIcon];

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

function Logo({ className = '' }) {
  return (
    <a href={s.topBar.logoHref} className={className}>
      strikingly <span>AI</span>
    </a>
  );
}

function TopBar() {
  return (
    <header className="top-bar">
      <div className="container">
        <Logo className="top-bar__logo" />
      </div>
    </header>
  );
}

function Breadcrumb() {
  return (
    <nav aria-label="Breadcrumb" className="breadcrumb">
      <div className="container">
        <ol className="breadcrumb__list">
          <li>
            <a href={s.breadcrumb.homeHref} className="breadcrumb__link">
              {s.breadcrumb.home}
            </a>
          </li>
          <li className="breadcrumb__separator" aria-hidden="true">
            &gt;
          </li>
          <li>
            <span className="breadcrumb__current" aria-current="page">
              {s.breadcrumb.current}
            </span>
          </li>
        </ol>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="hero__h1">
              <span className="hero__h1-line1">{s.hero.h1Line1}</span>
              <span className="ai-gradient-text">{s.hero.h1Line2}</span>
            </h1>
            <p className="hero__subheadline">{s.hero.subheadline}</p>
            <div className="hero__ctas">
              <a
                href={s.hero.primaryCtaHref}
                className="button-base button-large ai-gradient-fill"
              >
                {s.hero.primaryCta}
              </a>
              <a
                href={s.hero.secondaryCtaHref}
                className="button-base button-large ghost-button"
              >
                {s.hero.secondaryCta}
              </a>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <WebsiteMockupIllustration
              className="hero__illustration"
              width={420}
              height={320}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturedGenerators() {
  return (
    <section className="section" aria-labelledby="featured-heading">
      <div className="container">
        <h2 id="featured-heading" className="section__heading">
          {s.featured.heading}
        </h2>
        <p className="section__subheading">{s.featured.subheading}</p>
        <div className="content-grid content-grid--3">
          {featuredGenerators.map((item) => (
            <a
              key={item.slug}
              href={`/generators/${item.slug}`}
              className="generator-card"
            >
              <h3 className="generator-card__title">{item.name}</h3>
              <p className="generator-card__desc">{item.description}</p>
              <span className="generator-card__tag">{item.category}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function BrowseByCategory() {
  return (
    <section
      className="section section--light"
      aria-labelledby="categories-heading"
    >
      <div className="container">
        <h2 id="categories-heading" className="section__heading">
          {s.categories.heading}
        </h2>
        <div className="content-grid content-grid--3">
          {categories.map((cat) => {
            const Icon = categoryIconMap[cat.key];
            const data = s.categories.items[cat.key];
            return (
              <a
                key={cat.slug}
                href={`/generators#${cat.slug}`}
                className="category-card"
              >
                <Icon className="category-card__icon" />
                <h3 className="category-card__title">{data.name}</h3>
                <p className="category-card__desc">{data.description}</p>
                <ArrowRightIcon className="category-card__arrow" />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const INITIAL_VISIBLE_COUNT = 6;

function DirectoryCategory({ categoryKey, category, searchQuery }) {
  const cat = categories.find((c) => c.key === categoryKey);
  const Icon = thumbnailIconMap[categoryKey];
  const sectionId = cat.slug;

  const filteredItems = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return category.items;
    return category.items.filter(
      (item) =>
        item.name.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        cat.name.toLowerCase().includes(q)
    );
  }, [category.items, searchQuery, cat.name]);

  const [expanded, setExpanded] = useState(false);
  const gridRef = useRef(null);
  const collapsedMaxHeight = useRef(null);

  useEffect(() => {
    if (!gridRef.current) return;
    if (expanded) {
      gridRef.current.style.maxHeight = `${gridRef.current.scrollHeight}px`;
    } else {
      const firstCards = gridRef.current.querySelectorAll('.generator-card');
      let height = 0;
      // Sum rows up to INITIAL_VISIBLE_COUNT cards (3-col desktop / 2-col tablet / 1-col mobile)
      const visibleCount = Math.min(INITIAL_VISIBLE_COUNT, firstCards.length);
      for (let i = 0; i < visibleCount; i += 1) {
        height = Math.max(height, firstCards[i].getBoundingClientRect().bottom);
      }
      const gridTop = gridRef.current.getBoundingClientRect().top;
      collapsedMaxHeight.current = Math.max(0, height - gridTop);
      gridRef.current.style.maxHeight = `${collapsedMaxHeight.current}px`;
    }
  }, [expanded, filteredItems]);

  if (searchQuery.trim() && filteredItems.length === 0) {
    return null;
  }

  const total = filteredItems.length;
  const showToggle = total > INITIAL_VISIBLE_COUNT && !searchQuery.trim();
  const visibleItems = showToggle && !expanded
    ? filteredItems.slice(0, INITIAL_VISIBLE_COUNT)
    : filteredItems;

  return (
    <section
      id={sectionId}
      className="directory__category"
      aria-labelledby={`category-heading-${sectionId}`}
    >
      <h3 id={`category-heading-${sectionId}`} className="directory__category-heading">
        {cat.name}
      </h3>
      <p className="directory__category-desc">{category.description}</p>
      <div
        ref={gridRef}
        className="directory__collapsible directory__grid"
        style={{ maxHeight: 'none' }}
      >
        {visibleItems.map((item) => (
          <a
            key={item.slug}
            href={`/generators/${item.slug}`}
            className="generator-card"
          >
            <Icon className="generator-card__thumb" />
            <h4 className="generator-card__title">{item.name}</h4>
            <p className="generator-card__desc">{item.description}</p>
          </a>
        ))}
      </div>
      {showToggle && (
        <button
          type="button"
          className="directory__toggle"
          onClick={() => setExpanded((v) => !v)}
          aria-expanded={expanded}
          aria-controls={`category-grid-${sectionId}`}
        >
          {expanded
            ? s.directory.showLess
            : s.directory.showAll.replace('{{count}}', String(total))}
          <ChevronDownIcon
            className="faq__icon"
            style={{ transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)' }}
          />
        </button>
      )}
    </section>
  );
}

function AllGenerators() {
  const [query, setQuery] = useState('');
  const inputRef = useRef(null);

  const matchCount = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return allGeneratorsFlat.length;
    return allGeneratorsFlat.filter(
      (item) =>
        item.name.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.categoryName.toLowerCase().includes(q)
    ).length;
  }, [query]);

  const hasResults = matchCount > 0;

  return (
    <section
      id={s.directory.id}
      className="section"
      aria-labelledby="directory-heading"
    >
      <div className="container">
        <h2 id="directory-heading" className="section__heading">
          {s.directory.heading}
        </h2>
        <p className="section__subheading">{s.directory.subheading}</p>

        <div className="directory__search-wrap">
          <SearchIcon className="directory__search-icon" />
          <input
            ref={inputRef}
            type="search"
            className="directory__search"
            placeholder={s.directory.searchPlaceholder}
            aria-label={s.directory.searchAriaLabel}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        <p className="directory__results" aria-live="polite">
          {query.trim()
            ? `${matchCount} ${matchCount === 1 ? s.directory.resultsSingular : s.directory.resultsPlural}`
            : ''}
        </p>

        {!hasResults && query.trim() && (
          <div className="directory__empty">
            <h3 className="directory__empty-title">
              {s.directory.noResultsTitle}
            </h3>
            <p className="directory__empty-body">{s.directory.noResultsBody}</p>
            <button
              type="button"
              className="button-base ghost-button"
              onClick={() => {
                setQuery('');
                inputRef.current?.focus();
              }}
            >
              {s.directory.clearSearch}
            </button>{' '}
            <a
              href={s.directory.noResultsCtaHref}
              className="button-base ai-gradient-fill"
            >
              {s.directory.noResultsCta}
            </a>
          </div>
        )}

        {hasResults && (
          <div className="directory__categories">
            {categories.map((cat) => (
              <DirectoryCategory
                key={cat.key}
                categoryKey={cat.key}
                category={directoryGenerators[cat.key]}
                searchQuery={query}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section className="section section--light" aria-labelledby="how-heading">
      <div className="container">
        <h2 id="how-heading" className="section__heading">
          {s.howItWorks.heading}
        </h2>
        <div className="steps">
          {s.howItWorks.steps.map((step, index) => (
            <div key={step.title} className="step">
              <div className="step__number">{index + 1}</div>
              <h3 className="step__title">{step.title}</h3>
              <p className="step__body">{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyStrikingly() {
  return (
    <section className="section" aria-labelledby="why-heading">
      <div className="container">
        <h2 id="why-heading" className="section__heading">
          {s.why.heading}
        </h2>
        <div className="why-grid">
          {s.why.items.map((item, index) => {
            const Icon = whyIconMap[index];
            return (
              <div key={item.title} className="why-cell">
                <Icon className="why-cell__icon" />
                <h3 className="why-cell__title">{item.title}</h3>
                <p className="why-cell__body">{item.body}</p>
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
  const answerRefs = useRef([]);

  useEffect(() => {
    answerRefs.current.forEach((el, idx) => {
      if (!el) return;
      if (idx === openIndex) {
        el.style.maxHeight = `${el.scrollHeight}px`;
        el.style.opacity = '1';
      } else {
        el.style.maxHeight = '0px';
        el.style.opacity = '0';
      }
    });
  }, [openIndex]);

  return (
    <section className="section section--light" aria-labelledby="faq-heading">
      <div className="container">
        <h2 id="faq-heading" className="section__heading">
          {s.faq.heading}
        </h2>
        <div className="faq__list">
          {s.faq.items.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <article
                key={slugify(item.question)}
                className={`faq__item ${isOpen ? 'faq__item--open' : ''}`}
              >
                <button
                  type="button"
                  className="faq__button"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                >
                  {item.question}
                  <ChevronDownIcon className="faq__icon" />
                </button>
                <div
                  id={`faq-answer-${index}`}
                  ref={(el) => { answerRefs.current[index] = el; }}
                  className="faq__answer"
                >
                  <div className="faq__answer-inner">
                    {item.answer.map((paragraph, pIndex) => (
                      <p key={pIndex}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ClosingCTA() {
  return (
    <section className="closing-cta" aria-labelledby="closing-heading">
      <div className="container">
        <h2 id="closing-heading" className="closing-cta__heading">
          {s.closing.heading}
        </h2>
        <p className="closing-cta__sub">{s.closing.subheading}</p>
        <a
          href={s.closing.ctaHref}
          className="button-base button-large ai-gradient-fill"
        >
          {s.closing.cta}
        </a>
      </div>
    </section>
  );
}

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div>
            <Logo className="footer__logo" />
          </div>
          {s.footer.columns.map((col) => (
            <div key={col.title}>
              <h3 className="footer__col-title">{col.title}</h3>
              <ul className="footer__links">
                {col.links.map((link) => (
                  <li key={link.label || link.text}>
                    {link.href ? (
                      <a href={link.href} className="footer__link">
                        {link.label}
                      </a>
                    ) : (
                      <span className="footer__link">{link.text}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="footer__copyright">
          {s.footer.copyright.replace('{{year}}', String(year))}
        </p>
      </div>
    </footer>
  );
}

function JsonLd() {
  const json = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: s.meta.breadcrumbHome,
        item: 'https://www.strikingly.com/',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: s.meta.breadcrumbCurrent,
        item: s.meta.canonical,
      },
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}

export function GeneratorsHead() {
  return (
    <>
      <title>{s.meta.title}</title>
      <meta name="description" content={s.meta.description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="canonical" href={s.meta.canonical} />
      <meta property="og:title" content={s.meta.ogTitle} />
      <meta property="og:description" content={s.meta.ogDescription} />
      <meta property="og:url" content={s.meta.canonical} />
      <JsonLd />
    </>
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
