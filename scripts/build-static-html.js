import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');

const {
  strings,
  categories,
  featuredGenerators,
  directoryGenerators,
} = await import(path.join(rootDir, 'src', 'generatorData.js'));

const s = strings.en;
const css = fs.readFileSync(path.join(rootDir, 'src', 'generators.css'), 'utf8');

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

const websiteMockupSvg = `<svg class="hero__illustration" width="420" height="320" viewBox="0 0 420 320" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img"><defs><linearGradient id="mockupGrad" x1="0" y1="0" x2="420" y2="320" gradientUnits="userSpaceOnUse"><stop stop-color="#7671FF" stop-opacity="0.25"/><stop offset="1" stop-color="#CB0C9F" stop-opacity="0.18"/></linearGradient><linearGradient id="mockupStroke" x1="0" y1="0" x2="420" y2="320" gradientUnits="userSpaceOnUse"><stop stop-color="#7671FF"/><stop offset="1" stop-color="#CB0C9F"/></linearGradient></defs><rect x="24" y="28" width="372" height="264" rx="8" fill="url(#mockupGrad)" stroke="url(#mockupStroke)" stroke-width="1.5"/><rect x="44" y="52" width="120" height="10" rx="3" fill="#8159BB" fill-opacity="0.35"/><rect x="320" y="52" width="56" height="10" rx="3" fill="#8159BB" fill-opacity="0.25"/><rect x="44" y="86" width="332" height="80" rx="4" fill="#FFFFFF" fill-opacity="0.6" stroke="#8159BB" stroke-width="1" stroke-opacity="0.35"/><rect x="64" y="106" width="180" height="12" rx="3" fill="#8159BB" fill-opacity="0.4"/><rect x="64" y="130" width="120" height="10" rx="3" fill="#8159BB" fill-opacity="0.25"/><rect x="280" y="110" width="76" height="32" rx="4" fill="url(#mockupStroke)" fill-opacity="0.35"/><rect x="44" y="182" width="156" height="90" rx="4" fill="#FFFFFF" fill-opacity="0.5" stroke="#8159BB" stroke-width="1" stroke-opacity="0.3"/><rect x="60" y="200" width="124" height="8" rx="2" fill="#8159BB" fill-opacity="0.3"/><rect x="60" y="218" width="100" height="6" rx="2" fill="#8159BB" fill-opacity="0.2"/><rect x="60" y="234" width="80" height="6" rx="2" fill="#8159BB" fill-opacity="0.2"/><rect x="220" y="182" width="156" height="90" rx="4" fill="#FFFFFF" fill-opacity="0.5" stroke="#8159BB" stroke-width="1" stroke-opacity="0.3"/><rect x="236" y="200" width="124" height="8" rx="2" fill="#8159BB" fill-opacity="0.3"/><rect x="236" y="218" width="100" height="6" rx="2" fill="#8159BB" fill-opacity="0.2"/><rect x="236" y="234" width="80" height="6" rx="2" fill="#8159BB" fill-opacity="0.2"/><circle cx="354" cy="260" r="18" fill="url(#mockupStroke)" fill-opacity="0.2"/><path d="M348 260l6 6 10-12" stroke="#8159BB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

const categoryIcons = {
  websites: `<svg class="category-card__icon" viewBox="0 0 44 44" fill="none" aria-hidden="true"><rect x="6" y="8" width="32" height="28" rx="3" stroke="currentColor" stroke-width="2"/><path d="M6 16h32M14 24h12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`,
  landingPages: `<svg class="category-card__icon" viewBox="0 0 44 44" fill="none" aria-hidden="true"><rect x="8" y="8" width="28" height="28" rx="3" stroke="currentColor" stroke-width="2"/><path d="M14 34l8-10 6 6 8-12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  portfolios: `<svg class="category-card__icon" viewBox="0 0 44 44" fill="none" aria-hidden="true"><rect x="7" y="9" width="30" height="26" rx="3" stroke="currentColor" stroke-width="2"/><circle cx="18" cy="21" r="5" stroke="currentColor" stroke-width="2"/><path d="M9 35l9-11 6 7 11-14" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  blogs: `<svg class="category-card__icon" viewBox="0 0 44 44" fill="none" aria-hidden="true"><path d="M10 8h24a3 3 0 013 3v22a3 3 0 01-3 3H10a3 3 0 01-3-3V11a3 3 0 013-3z" stroke="currentColor" stroke-width="2"/><path d="M15 18h14M15 25h10" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`,
  stores: `<svg class="category-card__icon" viewBox="0 0 44 44" fill="none" aria-hidden="true"><path d="M8 14h28l-3 20H11L8 14z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><path d="M15 14V9h14v5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M17 26h10" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`,
  linkInBio: `<svg class="category-card__icon" viewBox="0 0 44 44" fill="none" aria-hidden="true"><circle cx="16" cy="22" r="6" stroke="currentColor" stroke-width="2"/><circle cx="28" cy="22" r="6" stroke="currentColor" stroke-width="2"/><path d="M20 22h4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`,
};

const thumbnailIcons = {
  websites: `<svg class="generator-card__thumb" viewBox="0 0 40 40" fill="none" aria-hidden="true"><rect x="5" y="7" width="30" height="26" rx="3" stroke="currentColor" stroke-width="1.8"/><path d="M5 14h30M11 22h12" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>`,
  landingPages: `<svg class="generator-card__thumb" viewBox="0 0 40 40" fill="none" aria-hidden="true"><rect x="7" y="7" width="26" height="26" rx="3" stroke="currentColor" stroke-width="1.8"/><path d="M12 30l7-9 5 5 7-11" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  portfolios: `<svg class="generator-card__thumb" viewBox="0 0 40 40" fill="none" aria-hidden="true"><rect x="6" y="8" width="28" height="24" rx="3" stroke="currentColor" stroke-width="1.8"/><circle cx="16" cy="19" r="4" stroke="currentColor" stroke-width="1.8"/><path d="M7 31l8-10 5 6 9-12" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  blogs: `<svg class="generator-card__thumb" viewBox="0 0 40 40" fill="none" aria-hidden="true"><path d="M9 7h22a3 3 0 013 3v20a3 3 0 01-3 3H9a3 3 0 01-3-3V10a3 3 0 013-3z" stroke="currentColor" stroke-width="1.8"/><path d="M13 17h14M13 23h10" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>`,
  stores: `<svg class="generator-card__thumb" viewBox="0 0 40 40" fill="none" aria-hidden="true"><path d="M7 13h26l-3 19H10L7 13z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="M13 13V9h14v4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><path d="M15 25h10" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>`,
  linkInBio: `<svg class="generator-card__thumb" viewBox="0 0 40 40" fill="none" aria-hidden="true"><circle cx="14" cy="20" r="5" stroke="currentColor" stroke-width="1.8"/><circle cx="26" cy="20" r="5" stroke="currentColor" stroke-width="1.8"/><path d="M18 20h4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>`,
};

const searchIcon = `<svg class="directory__search-icon" viewBox="0 0 18 18" fill="none" aria-hidden="true"><circle cx="8" cy="8" r="6" stroke="currentColor" stroke-width="2"/><path d="M13 13l3 3" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`;
const chevronDownIcon = `<svg class="faq__icon" viewBox="0 0 18 18" fill="none" aria-hidden="true"><path d="M4 7l5 5 5-5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
const arrowRightIcon = `<svg class="category-card__arrow" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M4 10h12M12 6l4 4-4 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

const whyIcons = [
  `<svg class="why-cell__icon" viewBox="0 0 36 36" fill="none" aria-hidden="true"><path d="M20 4l-10 16h8l-2 12 10-16h-8l2-12z" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  `<svg class="why-cell__icon" viewBox="0 0 36 36" fill="none" aria-hidden="true"><rect x="9" y="4" width="18" height="28" rx="3" stroke="currentColor" stroke-width="2.2"/><path d="M14 9h8" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`,
  `<svg class="why-cell__icon" viewBox="0 0 36 36" fill="none" aria-hidden="true"><rect x="4" y="10" width="28" height="16" rx="3" stroke="currentColor" stroke-width="2.2"/><path d="M4 15h28" stroke="currentColor" stroke-width="2"/><path d="M9 23h6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`,
];

const featuredCardsHtml = featuredGenerators.map(item => `
  <a href="/generators/${escapeHtml(item.slug)}" class="generator-card">
    <h3 class="generator-card__title">${escapeHtml(item.name)}</h3>
    <p class="generator-card__desc">${escapeHtml(item.description)}</p>
    <span class="generator-card__tag">${escapeHtml(item.category)}</span>
  </a>
`).join('\n');

const categoryCardsHtml = categories.map(cat => {
  const data = s.categories.items[cat.key];
  return `
  <a href="/generators#${escapeHtml(cat.slug)}" class="category-card">
    ${categoryIcons[cat.key]}
    <h3 class="category-card__title">${escapeHtml(data.name)}</h3>
    <p class="category-card__desc">${escapeHtml(data.description)}</p>
    ${arrowRightIcon}
  </a>
`;
}).join('\n');

const directoryCategoriesHtml = categories.map(cat => {
  const category = directoryGenerators[cat.key];
  return `
  <section id="${escapeHtml(cat.slug)}" class="directory__category" aria-labelledby="category-heading-${escapeHtml(cat.slug)}">
    <h3 id="category-heading-${escapeHtml(cat.slug)}" class="directory__category-heading">${escapeHtml(cat.name)}</h3>
    <p class="directory__category-desc">${escapeHtml(category.description)}</p>
    <div class="directory__collapsible directory__grid" id="category-grid-${escapeHtml(cat.slug)}" data-category="${escapeHtml(cat.key)}" style="max-height:none">
      ${category.items.map(item => `
        <a href="/generators/${escapeHtml(item.slug)}" class="generator-card" data-search="${escapeHtml((item.name + ' ' + item.description + ' ' + cat.name).toLowerCase())}">
          ${thumbnailIcons[cat.key]}
          <h4 class="generator-card__title">${escapeHtml(item.name)}</h4>
          <p class="generator-card__desc">${escapeHtml(item.description)}</p>
        </a>
      `).join('\n')}
    </div>
    ${category.items.length > 6 ? `<button type="button" class="directory__toggle" data-toggle="${escapeHtml(cat.slug)}" aria-expanded="false" aria-controls="category-grid-${escapeHtml(cat.slug)}" hidden>${s.directory.showAll.replace('{{count}}', String(category.items.length))} ${chevronDownIcon}</button>` : ''}
  </section>
`;
}).join('\n');

const stepsHtml = s.howItWorks.steps.map((step, idx) => `
  <div class="step">
    <div class="step__number">${idx + 1}</div>
    <h3 class="step__title">${escapeHtml(step.title)}</h3>
    <p class="step__body">${escapeHtml(step.body)}</p>
  </div>
`).join('\n');

const whyHtml = s.why.items.map((item, idx) => `
  <div class="why-cell">
    ${whyIcons[idx]}
    <h3 class="why-cell__title">${escapeHtml(item.title)}</h3>
    <p class="why-cell__body">${escapeHtml(item.body)}</p>
  </div>
`).join('\n');

const faqHtml = s.faq.items.map((item, idx) => `
  <article class="faq__item ${idx === 0 ? 'faq__item--open' : ''}" data-faq="${idx}">
    <button type="button" class="faq__button" aria-expanded="${idx === 0 ? 'true' : 'false'}" aria-controls="faq-answer-${idx}">
      ${escapeHtml(item.question)}
      ${chevronDownIcon}
    </button>
    <div id="faq-answer-${idx}" class="faq__answer" ${idx === 0 ? '' : 'style="max-height:0;opacity:0"'}>
      <div class="faq__answer-inner">
        ${item.answer.map(p => `<p>${escapeHtml(p)}</p>`).join('\n')}
      </div>
    </div>
  </article>
`).join('\n');

const footerColumnsHtml = s.footer.columns.map(col => `
  <div>
    <h3 class="footer__col-title">${escapeHtml(col.title)}</h3>
    <ul class="footer__links">
      ${col.links.map(link => `
        <li>${link.href ? `<a href="${escapeHtml(link.href)}" class="footer__link">${escapeHtml(link.label)}</a>` : `<span class="footer__link">${escapeHtml(link.text)}</span>`}</li>
      `).join('\n')}
    </ul>
  </div>
`).join('\n');

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: s.meta.breadcrumbHome, item: 'https://www.strikingly.com/' },
    { '@type': 'ListItem', position: 2, name: s.meta.breadcrumbCurrent, item: s.meta.canonical },
  ],
};

const html = `<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <link rel="icon" type="image/svg+xml" href="/vite.svg" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${escapeHtml(s.meta.title)}</title>
  <meta name="description" content="${escapeHtml(s.meta.description)}" />
  <link rel="canonical" href="${escapeHtml(s.meta.canonical)}" />
  <meta property="og:title" content="${escapeHtml(s.meta.ogTitle)}" />
  <meta property="og:description" content="${escapeHtml(s.meta.ogDescription)}" />
  <meta property="og:url" content="${escapeHtml(s.meta.canonical)}" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@700&family=Open+Sans:wght@400;600&family=Poppins:wght@700&display=swap" rel="stylesheet" />
  <script type="application/ld+json">${JSON.stringify(jsonLd)}</script>
  <style>
${css}
  </style>
</head>
<body>
  <header class="top-bar">
    <div class="container">
      <a href="${escapeHtml(s.topBar.logoHref)}" class="top-bar__logo">strikingly <span>AI</span></a>
    </div>
  </header>

  <nav aria-label="Breadcrumb" class="breadcrumb">
    <div class="container">
      <ol class="breadcrumb__list">
        <li><a href="${escapeHtml(s.breadcrumb.homeHref)}" class="breadcrumb__link">${escapeHtml(s.breadcrumb.home)}</a></li>
        <li class="breadcrumb__separator" aria-hidden="true">&gt;</li>
        <li><span class="breadcrumb__current" aria-current="page">${escapeHtml(s.breadcrumb.current)}</span></li>
      </ol>
    </div>
  </nav>

  <main>
    <section class="hero">
      <div class="container">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 class="hero__h1">
              <span class="hero__h1-line1">${escapeHtml(s.hero.h1Line1)}</span>
              <span class="ai-gradient-text">${escapeHtml(s.hero.h1Line2)}</span>
            </h1>
            <p class="hero__subheadline">${escapeHtml(s.hero.subheadline)}</p>
            <div class="hero__ctas">
              <a href="${escapeHtml(s.hero.primaryCtaHref)}" class="button-base button-large ai-gradient-fill">${escapeHtml(s.hero.primaryCta)}</a>
              <a href="${escapeHtml(s.hero.secondaryCtaHref)}" class="button-base button-large ghost-button">${escapeHtml(s.hero.secondaryCta)}</a>
            </div>
          </div>
          <div class="flex justify-center lg:justify-end">
            ${websiteMockupSvg}
          </div>
        </div>
      </div>
    </section>

    <section class="section" aria-labelledby="featured-heading">
      <div class="container">
        <h2 id="featured-heading" class="section__heading">${escapeHtml(s.featured.heading)}</h2>
        <p class="section__subheading">${escapeHtml(s.featured.subheading)}</p>
        <div class="content-grid content-grid--3">
          ${featuredCardsHtml}
        </div>
      </div>
    </section>

    <section class="section section--light" aria-labelledby="categories-heading">
      <div class="container">
        <h2 id="categories-heading" class="section__heading">${escapeHtml(s.categories.heading)}</h2>
        <div class="content-grid content-grid--3">
          ${categoryCardsHtml}
        </div>
      </div>
    </section>

    <section id="${escapeHtml(s.directory.id)}" class="section" aria-labelledby="directory-heading">
      <div class="container">
        <h2 id="directory-heading" class="section__heading">${escapeHtml(s.directory.heading)}</h2>
        <p class="section__subheading">${escapeHtml(s.directory.subheading)}</p>

        <div class="directory__search-wrap">
          ${searchIcon}
          <input type="search" class="directory__search" id="generator-search" placeholder="${escapeHtml(s.directory.searchPlaceholder)}" aria-label="${escapeHtml(s.directory.searchAriaLabel)}" />
        </div>
        <p class="directory__results" id="search-results" aria-live="polite"></p>

        <div class="directory__empty" id="no-results" hidden>
          <h3 class="directory__empty-title">${escapeHtml(s.directory.noResultsTitle)}</h3>
          <p class="directory__empty-body">${escapeHtml(s.directory.noResultsBody)}</p>
          <button type="button" class="button-base ghost-button" id="clear-search">${escapeHtml(s.directory.clearSearch)}</button>
          <a href="${escapeHtml(s.directory.noResultsCtaHref)}" class="button-base ai-gradient-fill">${escapeHtml(s.directory.noResultsCta)}</a>
        </div>

        <div class="directory__categories" id="directory-categories">
          ${directoryCategoriesHtml}
        </div>
      </div>
    </section>

    <section class="section section--light" aria-labelledby="how-heading">
      <div class="container">
        <h2 id="how-heading" class="section__heading">${escapeHtml(s.howItWorks.heading)}</h2>
        <div class="steps">
          ${stepsHtml}
        </div>
      </div>
    </section>

    <section class="section" aria-labelledby="why-heading">
      <div class="container">
        <h2 id="why-heading" class="section__heading">${escapeHtml(s.why.heading)}</h2>
        <div class="why-grid">
          ${whyHtml}
        </div>
      </div>
    </section>

    <section class="section section--light" aria-labelledby="faq-heading">
      <div class="container">
        <h2 id="faq-heading" class="section__heading">${escapeHtml(s.faq.heading)}</h2>
        <div class="faq__list">
          ${faqHtml}
        </div>
      </div>
    </section>

    <section class="closing-cta" aria-labelledby="closing-heading">
      <div class="container">
        <h2 id="closing-heading" class="closing-cta__heading">${escapeHtml(s.closing.heading)}</h2>
        <p class="closing-cta__sub">${escapeHtml(s.closing.subheading)}</p>
        <a href="${escapeHtml(s.closing.ctaHref)}" class="button-base button-large ai-gradient-fill">${escapeHtml(s.closing.cta)}</a>
      </div>
    </section>
  </main>

  <footer class="footer">
    <div class="container">
      <div class="footer__grid">
        <div>
          <a href="${escapeHtml(s.topBar.logoHref)}" class="footer__logo">strikingly <span>AI</span></a>
        </div>
        ${footerColumnsHtml}
      </div>
      <p class="footer__copyright">${escapeHtml(s.footer.copyright.replace('{{year}}', String(new Date().getFullYear())))}</p>
    </div>
  </footer>

  <script>
    (function () {
      var INITIAL = 6;
      var toggles = document.querySelectorAll('[data-toggle]');
      toggles.forEach(function (btn) {
        btn.removeAttribute('hidden');
        var slug = btn.getAttribute('data-toggle');
        var grid = document.getElementById('category-grid-' + slug);
        if (!grid) return;
        var cards = Array.prototype.slice.call(grid.querySelectorAll('.generator-card'));
        var expanded = false;

        function setMaxHeight() {
          if (expanded) {
            grid.style.maxHeight = grid.scrollHeight + 'px';
          } else {
            var visibleCount = Math.min(INITIAL, cards.length);
            var maxBottom = 0;
            var gridRect = grid.getBoundingClientRect();
            for (var i = 0; i < visibleCount; i++) {
              var rect = cards[i].getBoundingClientRect();
              maxBottom = Math.max(maxBottom, rect.bottom - gridRect.top);
            }
            grid.style.maxHeight = Math.max(0, maxBottom) + 'px';
          }
        }

        function collapse() {
          expanded = false;
          cards.forEach(function (card, idx) {
            if (idx >= INITIAL) card.classList.add('is-hidden');
            else card.classList.remove('is-hidden');
          });
          setMaxHeight();
          btn.setAttribute('aria-expanded', 'false');
          btn.innerHTML = '${escapeHtml(s.directory.showAll).replace(/'/g, "\\'")}'.replace('{{count}}', cards.length) + '${chevronDownIcon}';
        }

        collapse();
        window.addEventListener('resize', setMaxHeight);

        btn.addEventListener('click', function () {
          if (expanded) {
            collapse();
          } else {
            expanded = true;
            cards.forEach(function (card) { card.classList.remove('is-hidden'); });
            grid.style.maxHeight = grid.scrollHeight + 'px';
            btn.setAttribute('aria-expanded', 'true');
            btn.innerHTML = '${escapeHtml(s.directory.showLess).replace(/'/g, "\\'")}' + '${chevronDownIcon}';
            var icon = btn.querySelector('svg');
            if (icon) icon.style.transform = 'rotate(180deg)';
          }
        });
      });

      var faqItems = document.querySelectorAll('[data-faq]');
      faqItems.forEach(function (item) {
        var btn = item.querySelector('.faq__button');
        var answer = item.querySelector('.faq__answer');
        if (!btn || !answer) return;
        btn.addEventListener('click', function () {
          var isOpen = item.classList.contains('faq__item--open');
          faqItems.forEach(function (other) {
            other.classList.remove('faq__item--open');
            var ob = other.querySelector('.faq__button');
            var oa = other.querySelector('.faq__answer');
            if (ob) ob.setAttribute('aria-expanded', 'false');
            if (oa) { oa.style.maxHeight = '0px'; oa.style.opacity = '0'; }
          });
          if (!isOpen) {
            item.classList.add('faq__item--open');
            btn.setAttribute('aria-expanded', 'true');
            answer.style.maxHeight = answer.scrollHeight + 'px';
            answer.style.opacity = '1';
          }
        });
      });

      var searchInput = document.getElementById('generator-search');
      var resultsText = document.getElementById('search-results');
      var noResults = document.getElementById('no-results');
      var directoryCategories = document.getElementById('directory-categories');
      var clearBtn = document.getElementById('clear-search');

      if (searchInput && directoryCategories) {
        var allCards = Array.prototype.slice.call(directoryCategories.querySelectorAll('.generator-card'));
        var allSections = Array.prototype.slice.call(directoryCategories.querySelectorAll('.directory__category'));

        function updateSearch() {
          var q = searchInput.value.trim().toLowerCase();
          var matchCount = 0;

          allSections.forEach(function (section) {
            var sectionMatches = false;
            var sectionCards = Array.prototype.slice.call(section.querySelectorAll('.generator-card'));
            sectionCards.forEach(function (card) {
              var matches = !q || card.getAttribute('data-search').indexOf(q) !== -1;
              if (matches) {
                card.classList.remove('is-hidden');
                sectionMatches = true;
                matchCount++;
              } else {
                card.classList.add('is-hidden');
              }
            });
            if (sectionMatches || !q) {
              section.classList.remove('is-hidden');
            } else {
              section.classList.add('is-hidden');
            }
          });

          if (q) {
            resultsText.textContent = matchCount + ' ' + (matchCount === 1 ? '${escapeHtml(s.directory.resultsSingular).replace(/'/g, "\\'")}' : '${escapeHtml(s.directory.resultsPlural).replace(/'/g, "\\'")}');
            noResults.hidden = matchCount > 0;
            toggles.forEach(function (btn) { btn.classList.add('is-hidden'); });
          } else {
            resultsText.textContent = '';
            noResults.hidden = true;
            toggles.forEach(function (btn) { btn.classList.remove('is-hidden'); });
          }
        }

        searchInput.addEventListener('input', updateSearch);
        if (clearBtn) {
          clearBtn.addEventListener('click', function () {
            searchInput.value = '';
            searchInput.focus();
            updateSearch();
          });
        }
      }
    })();
  </script>

  <script>
    (() => {
      if (window.__STRK_PREVIEW_ROUTE_BRIDGE__) return;
      window.__STRK_PREVIEW_ROUTE_BRIDGE__ = true;
      const CHANNEL = "strikingly-preview";
      const VERSION = 1;
      const getRoutePayload = (source) => ({
        url: window.location.href,
        origin: window.location.origin,
        path: window.location.pathname + window.location.search + window.location.hash,
        pathname: window.location.pathname,
        search: window.location.search,
        hash: window.location.hash,
        title: document.title,
        source,
        timestamp: Date.now(),
      });
      const postRoute = (type, source) => {
        if (!window.parent || window.parent === window) return;
        try {
          window.parent.postMessage({ channel: CHANNEL, version: VERSION, type, payload: getRoutePayload(source) }, "*");
        } catch {}
      };
      const notifyRouteChanged = (source) => window.requestAnimationFrame(() => postRoute("route:changed", source));
      const patchHistoryMethod = (methodName) => {
        const originalMethod = window.history[methodName];
        if (typeof originalMethod !== "function") return;
        window.history[methodName] = function patchedHistoryMethod(...args) {
          const result = originalMethod.apply(this, args);
          notifyRouteChanged(methodName);
          return result;
        };
      };
      patchHistoryMethod("pushState");
      patchHistoryMethod("replaceState");
      window.addEventListener("popstate", () => notifyRouteChanged("popstate"));
      window.addEventListener("hashchange", () => notifyRouteChanged("hashchange"));
      window.addEventListener("load", () => { postRoute("route:ready", "load"); postRoute("route:changed", "load"); });
      window.addEventListener("message", (event) => {
        const data = event.data;
        if (!data || typeof data !== "object" || data.channel !== CHANNEL || data.version !== VERSION) return;
        if (data.type === "route:request") { postRoute("route:changed", "load"); return; }
        if (data.type !== "route:navigate") return;
        const path = data.payload?.path;
        if (typeof path !== "string" || !path) return;
        const replace = Boolean(data.payload?.replace);
        const navigate = window.__STRIKINGLY_PREVIEW_NAVIGATE__;
        if (typeof navigate === "function") { navigate(path, { replace }); notifyRouteChanged("navigate-command"); return; }
        if (replace) window.history.replaceState({}, "", path); else window.history.pushState({}, "", path);
        window.dispatchEvent(new PopStateEvent("popstate", { state: {} }));
        notifyRouteChanged("navigate-command");
      });
    })();
  </script>

  <script>
    (() => {
      if (window.__STRK_RUNTIME_ERROR_BRIDGE__) return;
      window.__STRK_RUNTIME_ERROR_BRIDGE__ = true;
      const BRIDGE_FLAG = "__strkRuntimeErrorBridge";
      const HEALTH_CHECK_COMMAND = "runtime-error:check-health";
      const MAX_STRING_LENGTH = 2000;
      const MAX_RECENT_CONSOLE_ERRORS = 5;
      const FIRST_PARTY_PATH_PATTERN = /(?:^|[\\/])(?:src|app)(?:[\\/]|$)/i;
      const IGNORED_PROMISE_PATTERN = /(?:aborterror|aborted|cancel(?:led|ed)?|failed to fetch|load failed|networkerror|network request failed|resizeobserver loop)/i;
      const recentConsoleErrors = [];
      const truncate = (value) => value.length > MAX_STRING_LENGTH ? value.slice(0, MAX_STRING_LENGTH) + "..." : value;
      const stringifyValue = (value) => {
        if (value instanceof Error) return truncate(value.stack || value.name + ": " + value.message);
        if (typeof value === "string") return truncate(value);
        if (typeof value === "number" || typeof value === "boolean" || value == null) return String(value);
        if (typeof value === "function") return "[Function " + (value.name || "anonymous") + "]";
        const seen = new WeakSet();
        try {
          return truncate(JSON.stringify(value, (_, innerValue) => {
            if (innerValue instanceof Error) return { name: innerValue.name, message: innerValue.message, stack: innerValue.stack };
            if (typeof innerValue === "object" && innerValue !== null) { if (seen.has(innerValue)) return "[Circular]"; seen.add(innerValue); }
            if (typeof innerValue === "function") return "[Function " + (innerValue.name || "anonymous") + "]";
            return innerValue;
          }));
        } catch { return Object.prototype.toString.call(value); }
      };
      const normalizeErrorLike = (value) => {
        if (value instanceof Error) return { name: value.name || "Error", message: value.message || "Unknown runtime error", stack: value.stack || "", source: value.fileName || value.filename || "", lineno: value.lineNumber || value.lineno || null, colno: value.columnNumber || value.colno || null };
        if (typeof value === "string") return { name: "", message: value, stack: "", source: "", lineno: null, colno: null };
        if (value && typeof value === "object") return { name: typeof value.name === "string" ? value.name : "", message: typeof value.message === "string" ? value.message : stringifyValue(value), stack: typeof value.stack === "string" ? value.stack : "", source: typeof value.fileName === "string" ? value.fileName : typeof value.filename === "string" ? value.filename : "", lineno: typeof value.lineNumber === "number" ? value.lineNumber : typeof value.lineno === "number" ? value.lineno : null, colno: typeof value.columnNumber === "number" ? value.columnNumber : typeof value.colno === "number" ? value.colno : null };
        return { name: "", message: stringifyValue(value) || "Unknown runtime error", stack: "", source: "", lineno: null, colno: null };
      };
      const isFirstPartySource = (value) => {
        if (!value) return false;
        if (!/^[a-z][a-z\d+.-]*:/i.test(value) && FIRST_PARTY_PATH_PATTERN.test(value)) return true;
        try {
          const sourceUrl = new URL(value, window.location.href);
          if (sourceUrl.origin !== window.location.origin) return false;
          return FIRST_PARTY_PATH_PATTERN.test(sourceUrl.pathname) || sourceUrl.pathname === window.location.pathname || sourceUrl.pathname.startsWith("/assets/");
        } catch { return false; }
      };
      const stackHasFirstPartySource = (stack) => String(stack || "").split("\n").some((line) => { const urlMatch = line.match(/https?:\/\/[^\s)]+/i); if (urlMatch) return isFirstPartySource(urlMatch[0]); return FIRST_PARTY_PATH_PATTERN.test(line); });
      const hasFirstPartyEvidence = (normalized) => isFirstPartySource(normalized.source) || stackHasFirstPartySource(normalized.stack);
      const rememberConsoleError = (args) => { const summary = truncate(args.map((arg) => stringifyValue(arg)).join(" ")); if (!summary) return; recentConsoleErrors.push(summary); if (recentConsoleErrors.length > MAX_RECENT_CONSOLE_ERRORS) recentConsoleErrors.shift(); };
      const getRecentDiagnostics = () => recentConsoleErrors.slice();
      const postToParent = (payload) => {
        if (!window.parent || window.parent === window) return;
        try { window.parent.postMessage({ [BRIDGE_FLAG]: true, href: window.location.href, timestamp: Date.now(), ...payload }, "*"); } catch {}
      };
      let viteOverlayReported = false;
      let blankPageReported = false;
      let consecutiveBlankChecks = 0;
      let healthCheckSequence = 0;
      const getViteOverlayText = (overlay) => { try { return truncate(String((overlay.shadowRoot && overlay.shadowRoot.textContent) || overlay.textContent || "Vite error overlay is visible.").trim()); } catch { return "Vite error overlay is visible."; } };
      const reportViteOverlay = () => { const overlay = document.querySelector("vite-error-overlay"); if (!overlay || viteOverlayReported) return Boolean(overlay); viteOverlayReported = true; postToParent({ type: "runtime-error", kind: "vite-overlay-error", name: "ViteError", message: getViteOverlayText(overlay), args: getRecentDiagnostics() }); return true; };
      const hasVisiblePageContent = () => {
        const root = document.querySelector("#root") || document.body;
        const nodes = [root, ...root.querySelectorAll("*")];
        return nodes.some((element) => {
          if (!(element instanceof HTMLElement) && !(element instanceof SVGElement)) return false;
          const tagName = element.tagName.toLowerCase();
          if (["script", "style", "link", "meta", "noscript"].includes(tagName)) return false;
          const style = window.getComputedStyle(element);
          const rect = element.getBoundingClientRect();
          if (style.display === "none" || style.visibility === "hidden" || Number(style.opacity) === 0 || rect.width < 2 || rect.height < 2) return false;
          const isVisualElement = ["img", "svg", "canvas", "video", "iframe", "input", "button"].includes(tagName);
          const hasText = String(element.textContent || "").trim().length > 0;
          const hasBackgroundImage = style.backgroundImage !== "none";
          return isVisualElement || hasText || hasBackgroundImage;
        });
      };
      const checkPageHealth = () => {
        if (reportViteOverlay()) return;
        if (hasVisiblePageContent()) { consecutiveBlankChecks = 0; return; }
        consecutiveBlankChecks += 1;
        if (consecutiveBlankChecks < 2 || blankPageReported) return;
        blankPageReported = true;
        postToParent({ type: "runtime-error", kind: "blank-page", name: "BlankPageError", message: "The preview rendered no visible page content.", args: getRecentDiagnostics() });
      };
      const schedulePageHealthChecks = (firstDelay = 1500, secondDelay = 3000) => {
        healthCheckSequence += 1;
        const sequence = healthCheckSequence;
        consecutiveBlankChecks = 0;
        blankPageReported = false;
        const runCurrentHealthCheck = () => { if (sequence === healthCheckSequence) checkPageHealth(); };
        window.setTimeout(runCurrentHealthCheck, firstDelay);
        window.setTimeout(runCurrentHealthCheck, secondDelay);
      };
      if (document.readyState === "complete") schedulePageHealthChecks(); else window.addEventListener("load", () => schedulePageHealthChecks(), { once: true });
      window.addEventListener("message", (event) => { if (event.source === window.parent && event.data && event.data.type === HEALTH_CHECK_COMMAND) schedulePageHealthChecks(100, 1600); });
      const viteOverlayObserver = new MutationObserver((records) => { const overlayAdded = records.some((record) => Array.from(record.addedNodes).some((node) => node instanceof Element && (node.matches("vite-error-overlay") || Boolean(node.querySelector("vite-error-overlay"))))); if (overlayAdded && reportViteOverlay()) viteOverlayObserver.disconnect(); });
      viteOverlayObserver.observe(document.documentElement, { childList: true, subtree: true });
      window.addEventListener("error", (event) => {
        const target = event.target;
        const isResourceError = target && target !== window && target !== document;
        if (isResourceError) {
          const tagName = target.tagName || "resource";
          const resourceUrl = target.currentSrc || target.src || target.href || "";
          const normalizedTagName = tagName.toLowerCase();
          const isCriticalResource = normalizedTagName === "script" || (normalizedTagName === "link" && target.rel === "stylesheet" && /\.css(?:$|[?#])/i.test(resourceUrl));
          if (isCriticalResource && isFirstPartySource(resourceUrl)) postToParent({ type: "runtime-error", kind: "resource-error", message: "Failed to load " + normalizedTagName + " resource.", source: resourceUrl, resourceTagName: normalizedTagName, resourceUrl, args: getRecentDiagnostics() });
          return;
        }
        const normalized = normalizeErrorLike(event.error || event.message);
        const source = event.filename || normalized.source;
        if (!isFirstPartySource(source) && !stackHasFirstPartySource(normalized.stack)) return;
        postToParent({ type: "runtime-error", kind: "error", name: normalized.name, message: normalized.message || event.message, stack: normalized.stack, source, lineno: event.lineno || normalized.lineno, colno: event.colno || normalized.colno, args: getRecentDiagnostics() });
      }, true);
      window.addEventListener("unhandledrejection", (event) => {
        const normalized = normalizeErrorLike(event.reason);
        const combinedMessage = normalized.name + " " + normalized.message;
        if (IGNORED_PROMISE_PATTERN.test(combinedMessage) || !hasFirstPartyEvidence(normalized)) return;
        postToParent({ type: "unhandled-rejection", kind: "promise-rejection", name: normalized.name, message: normalized.message || "Unhandled promise rejection", stack: normalized.stack, source: normalized.source, lineno: normalized.lineno, colno: normalized.colno, reason: stringifyValue(event.reason), args: getRecentDiagnostics() });
      });
      const originalConsoleError = console.error.bind(console);
      console.error = (...args) => { rememberConsoleError(args); originalConsoleError(...args); };
    })();
  </script>
</body>
</html>
`;

fs.writeFileSync(path.join(rootDir, 'index.html'), html, 'utf8');
console.log('Generated static index.html at', path.join(rootDir, 'index.html'));
