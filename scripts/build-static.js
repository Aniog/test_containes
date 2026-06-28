import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');

const { strings, featuredGenerators, directoryCategories } = await import(
  path.join(root, 'src', 'data', 'generators.js')
);

const t = strings.en;
const INITIAL_VISIBLE = 6;

const iconWebsite = `<svg viewBox="0 0 48 48" fill="none" aria-hidden="true" class="w-10 h-10"><rect x="6" y="10" width="36" height="28" rx="3" stroke="#8159BB" stroke-width="2"/><path d="M6 18H42" stroke="#8159BB" stroke-width="2"/><circle cx="12" cy="14" r="1.5" fill="#8159BB"/><circle cx="17" cy="14" r="1.5" fill="#8159BB"/><circle cx="22" cy="14" r="1.5" fill="#8159BB"/><rect x="10" y="24" width="10" height="10" rx="1" stroke="#CB0C9F" stroke-width="2"/><path d="M26 24H38M26 28H34M26 32H38" stroke="#8159BB" stroke-width="2" stroke-linecap="round"/></svg>`;
const iconLanding = `<svg viewBox="0 0 48 48" fill="none" aria-hidden="true" class="w-10 h-10"><rect x="8" y="8" width="32" height="32" rx="3" stroke="#8159BB" stroke-width="2"/><path d="M8 16H40" stroke="#8159BB" stroke-width="2"/><circle cx="24" cy="28" r="6" stroke="#CB0C9F" stroke-width="2"/><path d="M28 26L24 30L22 28" stroke="#CB0C9F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
const iconPortfolio = `<svg viewBox="0 0 48 48" fill="none" aria-hidden="true" class="w-10 h-10"><rect x="8" y="10" width="14" height="18" rx="1" stroke="#8159BB" stroke-width="2"/><rect x="26" y="10" width="14" height="10" rx="1" stroke="#CB0C9F" stroke-width="2"/><rect x="26" y="24" width="14" height="14" rx="1" stroke="#8159BB" stroke-width="2"/></svg>`;
const iconBlog = `<svg viewBox="0 0 48 48" fill="none" aria-hidden="true" class="w-10 h-10"><rect x="8" y="7" width="32" height="34" rx="3" stroke="#8159BB" stroke-width="2"/><path d="M14 16H34" stroke="#CB0C9F" stroke-width="2" stroke-linecap="round"/><path d="M14 23H30" stroke="#8159BB" stroke-width="2" stroke-linecap="round"/><path d="M14 30H26" stroke="#8159BB" stroke-width="2" stroke-linecap="round"/></svg>`;
const iconStore = `<svg viewBox="0 0 48 48" fill="none" aria-hidden="true" class="w-10 h-10"><path d="M8 14L12 8H36L40 14V40H8V14Z" stroke="#8159BB" stroke-width="2" stroke-linejoin="round"/><path d="M8 18H40" stroke="#8159BB" stroke-width="2"/><circle cx="20" cy="30" r="3" stroke="#CB0C9F" stroke-width="2"/><path d="M31 28H35M31 32H35" stroke="#8159BB" stroke-width="2" stroke-linecap="round"/></svg>`;
const iconLink = `<svg viewBox="0 0 48 48" fill="none" aria-hidden="true" class="w-10 h-10"><circle cx="24" cy="15" r="6" stroke="#8159BB" stroke-width="2"/><path d="M12 40C12 32 16 28 24 28C32 28 36 32 36 40" stroke="#CB0C9F" stroke-width="2" stroke-linecap="round"/><path d="M30 14H38M34 10V18" stroke="#8159BB" stroke-width="2" stroke-linecap="round"/></svg>`;

const categoryIcons = {
  websites: iconWebsite,
  'landing-pages': iconLanding,
  portfolios: iconPortfolio,
  blogs: iconBlog,
  stores: iconStore,
  'link-in-bio': iconLink,
};

const arrowIcon = `<svg class="arrow" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

const escapeHtml = (str) =>
  String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

const renderFeatured = () =>
  featuredGenerators
    .map(
      (g) => `
          <a href="/generators/${g.slug}" class="card">
            <span class="tag">${escapeHtml(g.category)}</span>
            <h3>${escapeHtml(g.name)}</h3>
            <p>${escapeHtml(g.description)}</p>
          </a>`
    )
    .join('');

const renderCategories = () =>
  t.categories.items
    .map(
      (c) => `
          <a href="/generators#${c.id}" class="card category-card">
            ${categoryIcons[c.id]}
            <div class="cat-header"><h3>${escapeHtml(c.name)}</h3>${arrowIcon}</div>
            <p>${escapeHtml(c.description)}</p>
          </a>`
    )
    .join('');

const renderDirectory = () =>
  directoryCategories
    .map((cat) => {
      const entries = cat.entries
        .map(
          (e) => `
            <a href="/generators/${e.slug}" class="directory-card card">
              ${categoryIcons[cat.id]}
              <h4>${escapeHtml(e.name)}</h4>
              <p>${escapeHtml(e.description)}</p>
            </a>`
        )
        .join('');
      const hiddenCount = cat.entries.length - INITIAL_VISIBLE;
      return `
        <div class="directory-section" id="${cat.id}">
          <h3>${escapeHtml(cat.name)}</h3>
          <p>${escapeHtml(cat.description)}</p>
          <div class="grid-3">
            ${entries}
          </div>
          ${hiddenCount > 0 ? `<button type="button" class="toggle-btn" data-cat="${cat.id}" aria-expanded="false" aria-controls="${cat.id}">Show all ${cat.entries.length} generators</button>` : ''}
        </div>`;
    })
    .join('');

const renderFAQs = () =>
  t.faq.questions
    .map((item, i) => {
      const isOpen = i === 0;
      return `
        <div class="faq-item">
          <h3>
            <button type="button" class="faq-btn" id="faq-btn-${i}" aria-expanded="${isOpen}" aria-controls="faq-panel-${i}">
              <span>${escapeHtml(item.q)}</span>
              <svg class="faq-chevron" viewBox="0 0 20 20" fill="none" aria-hidden="true" style="transform: rotate(${isOpen ? 180 : 0}deg)"><path d="M5 8L10 13L15 8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </button>
          </h3>
          <div class="faq-panel" id="faq-panel-${i}" role="region" aria-labelledby="faq-btn-${i}" aria-hidden="false" data-js-only-hidden="${!isOpen}">
            <div class="faq-panel-inner">
              ${item.a.map((p) => `<p>${escapeHtml(p)}</p>`).join('')}
            </div>
          </div>
        </div>`;
    })
    .join('');

const staticHtml = `<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${escapeHtml(t.meta.title)}</title>
  <meta name="description" content="${escapeHtml(t.meta.description)}" />
  <link rel="canonical" href="${escapeHtml(t.meta.canonical)}" />
  <meta property="og:title" content="${escapeHtml(t.meta.ogTitle)}" />
  <meta property="og:description" content="${escapeHtml(t.meta.ogDescription)}" />
  <meta property="og:url" content="${escapeHtml(t.meta.ogUrl)}" />
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@700&family=Open+Sans:wght@400;600&family=Poppins:wght@700&display=swap" rel="stylesheet">
  <script>document.documentElement.classList.add('js');</script>
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "${escapeHtml(t.breadcrumb.homeLabel)}", "item": "https://www.strikingly.com/" },
      { "@type": "ListItem", "position": 2, "name": "${escapeHtml(t.breadcrumb.currentLabel)}", "item": "${escapeHtml(t.meta.canonical)}" }
    ]
  }
  </script>
  <style>
    :root {
      --font-heading: 'Brandon Grotesque', 'Josefin Sans', 'Poppins', sans-serif;
      --font-body: 'Open Sans', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      --purple: #8159BB;
      --body: #636972;
      --heading: #4B5056;
      --hero-heading: #2E2E2F;
      --card-border: #C6C9CD;
      --divider: #E2E4E7;
      --light-bg: #F4F6F8;
      --white: #FFFFFF;
      --blue-ai: #7671FF;
      --pink-ai: #CB0C9F;
    }
    * { box-sizing: border-box; }
    html { scroll-behavior: smooth; }
    body {
      margin: 0;
      font-family: var(--font-body);
      font-size: 14px;
      line-height: 1.5;
      color: var(--body);
      background: var(--white);
      overflow-x: hidden;
    }
    .font-heading { font-family: var(--font-heading); }
    a { text-decoration: none; color: inherit; }
    a:focus-visible, button:focus-visible { outline: 2px solid var(--purple); outline-offset: 2px; }
    .container { width: 100%; max-width: 1200px; margin-inline: auto; padding-inline: 20px; }
    .sr-only { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0,0,0,0); white-space: nowrap; border: 0; }
    .topbar { position: sticky; top: 0; z-index: 50; background: var(--white); border-bottom: 1px solid var(--divider); }
    .topbar-inner { display: flex; align-items: center; height: 56px; }
    .logo { font-family: var(--font-heading); font-size: 18px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.02em; color: var(--hero-heading); }
    .breadcrumb { background: var(--white); }
    .breadcrumb ol { display: flex; flex-wrap: wrap; align-items: center; gap: 8px; margin: 0; padding: 12px 0; list-style: none; font-size: 13px; color: var(--body); }
    .breadcrumb a:hover { color: var(--purple); }
    .breadcrumb-sep { color: var(--card-border); }
    .hero { position: relative; background: var(--white); overflow: hidden; padding: 60px 0; }
    .hero-bg { position: absolute; inset: 0; pointer-events: none; opacity: 0.4; background: radial-gradient(circle at 80% 20%, rgba(118,113,255,0.12) 0%, transparent 40%), radial-gradient(circle at 20% 80%, rgba(203,12,159,0.10) 0%, transparent 40%); }
    .hero-row { position: relative; display: flex; flex-direction: column; align-items: center; gap: 40px; }
    .hero-col { max-width: 560px; }
    .hero h1 { margin: 0 0 16px; font-family: var(--font-heading); font-weight: 700; line-height: 1.2; text-transform: uppercase; font-size: 32px; }
    .hero h1 span { display: block; }
    .hero h1 .line1 { color: var(--hero-heading); }
    .hero h1 .line2 { background: linear-gradient(90deg, var(--blue-ai), var(--pink-ai)); -webkit-background-clip: text; background-clip: text; color: transparent; }
    .hero p { margin: 0 0 20px; font-size: 14px; line-height: 1.5; color: var(--body); max-width: 480px; }
    .btn { display: inline-flex; align-items: center; justify-content: center; height: 44px; padding: 0 15px; border-radius: 4px; font-family: var(--font-heading); font-size: 14px; font-weight: 700; text-transform: uppercase; border: 1px solid transparent; cursor: pointer; }
    .btn-primary { background: linear-gradient(90deg, var(--blue-ai), var(--pink-ai)); color: var(--white); text-shadow: 0 1px 2px rgba(0,0,0,0.12); }
    .btn-primary:hover { box-shadow: 0 4px 12px rgba(129,89,187,0.25); }
    .btn-ghost { background: transparent; border-color: var(--purple); color: var(--purple); }
    .btn-ghost:hover { background: var(--light-bg); }
    .hero-cta { display: flex; flex-direction: column; gap: 10px; }
    .hero-illustration { width: 100%; max-width: 360px; height: auto; }
    .section-heading { font-family: var(--font-heading); font-size: 26px; font-weight: 700; line-height: 1.2; text-transform: uppercase; color: var(--heading); margin: 0 0 8px; }
    .section-subheading { margin: 0 0 24px; font-size: 14px; color: var(--body); }
    .card { display: flex; flex-direction: column; gap: 10px; padding: 20px; background: var(--white); border: 1px solid var(--card-border); border-radius: 3px; transition: border-color 200ms ease, box-shadow 200ms ease; }
    .card:hover { border-color: var(--purple); box-shadow: 0 4px 12px rgba(0,0,0,0.06); }
    .card h3, .card h4 { margin: 0; font-family: var(--font-heading); font-weight: 700; text-transform: uppercase; color: var(--heading); transition: color 200ms ease; }
    .card:hover h3, .card:hover h4 { color: var(--purple); }
    .card p { margin: 0; font-size: 14px; line-height: 1.5; color: var(--body); }
    .tag { align-self: flex-start; padding: 2px 6px; border-radius: 3px; border: 1px solid var(--purple); color: var(--purple); font-family: var(--font-heading); font-size: 11px; font-weight: 700; text-transform: uppercase; }
    .grid-3 { display: grid; grid-template-columns: 1fr; gap: 20px; }
    .featured { background: var(--light-bg); padding: 40px 0; }
    .categories { background: var(--white); padding: 40px 0; }
    .category-card { gap: 12px; }
    .category-card .cat-header { display: flex; align-items: center; justify-content: space-between; gap: 12px; }
    .category-card h3 { font-size: 16px; }
    .arrow { width: 20px; height: 20px; color: var(--purple); flex-shrink: 0; }
    .directory { background: var(--light-bg); padding: 40px 0; }
    .search-wrap { position: relative; max-width: 480px; margin-bottom: 8px; }
    .search-icon { position: absolute; inset: 0 auto 0 12px; display: flex; align-items: center; color: var(--body); }
    .search-icon svg { width: 20px; height: 20px; }
    .search-input { width: 100%; height: 44px; padding-inline-start: 40px; padding-inline-end: 16px; font-size: 14px; color: var(--hero-heading); background: var(--white); border: 1px solid var(--card-border); border-radius: 3px; }
    .search-input:focus { outline: none; border-color: var(--purple); box-shadow: 0 0 0 3px rgba(129,89,187,0.15); }
    .result-count { min-height: 20px; font-size: 13px; color: var(--body); margin-bottom: 24px; }
    .empty-state { padding: 24px; background: var(--white); border: 1px solid var(--card-border); border-radius: 3px; margin-bottom: 24px; }
    .empty-state h4 { margin: 0 0 12px; font-family: var(--font-heading); font-size: 16px; font-weight: 700; text-transform: uppercase; color: var(--heading); }
    .empty-actions { display: flex; flex-direction: column; gap: 10px; align-items: flex-start; }
    .directory-section { margin-bottom: 40px; }
    .directory-section h3 { font-family: var(--font-heading); font-size: 20px; font-weight: 700; line-height: 1.2; text-transform: uppercase; color: var(--heading); margin: 0 0 4px; }
    .directory-section > p { margin: 0 0 16px; font-size: 14px; color: var(--body); }
    .directory-card { max-height: 500px; opacity: 1; overflow: hidden; transition: max-height 300ms ease, opacity 300ms ease, padding 300ms ease, margin 300ms ease, border-width 300ms ease; }
    .directory-card.is-collapsed { max-height: 0; opacity: 0; padding-top: 0; padding-bottom: 0; margin-top: 0; margin-bottom: 0; border-width: 0; }
    .directory-section.is-empty { display: none; }
    .directory-card.is-hidden { display: none; }
    .toggle-btn { margin-top: 12px; height: 36px; padding: 0 15px; border-radius: 4px; font-family: var(--font-heading); font-size: 14px; font-weight: 700; text-transform: uppercase; background: transparent; border: 1px solid var(--purple); color: var(--purple); cursor: pointer; }
    .toggle-btn:hover { background: var(--white); }
    .how-it-works { background: var(--white); padding: 40px 0; }
    .step { display: flex; flex-direction: column; gap: 10px; }
    .step-num { display: flex; align-items: center; justify-content: center; width: 40px; height: 40px; border-radius: 50%; background: var(--purple); color: var(--white); font-family: var(--font-heading); font-size: 14px; font-weight: 700; }
    .step h3 { font-size: 15px; margin: 0; }
    .step p { margin: 0; }
    .why { background: var(--light-bg); padding: 40px 0; }
    .why-cell { display: flex; flex-direction: column; gap: 10px; }
    .why-cell h3 { font-size: 15px; margin: 0; }
    .why-cell p { margin: 0; }
    .why-icon { width: 24px; height: 24px; color: var(--purple); }
    .faq { background: var(--white); padding: 40px 0; }
    .faq-item { border-bottom: 1px solid var(--divider); }
    .faq-item:first-child { border-top: 1px solid var(--divider); }
    .faq-btn { width: 100%; display: flex; align-items: center; justify-content: space-between; gap: 16px; padding: 16px 0; background: none; border: none; text-align: left; font-family: var(--font-heading); font-size: 15px; font-weight: 700; text-transform: uppercase; color: var(--heading); }
    .faq-btn:hover { color: var(--purple); }
    .faq-chevron { width: 20px; height: 20px; color: var(--body); transition: transform 200ms ease; flex-shrink: 0; }
    .faq-panel { overflow: hidden; transition: max-height 250ms ease, opacity 250ms ease; }
    .js .faq-panel[data-js-only-hidden="true"] { max-height: 0; opacity: 0; }
    .faq-panel-inner { padding-bottom: 16px; }
    .faq-panel p { margin: 0 0 12px; font-size: 14px; line-height: 1.6; color: var(--body); }
    .faq-panel p:last-child { margin-bottom: 0; }
    .closing-cta { background: var(--white); padding: 60px 0; text-align: center; }
    .closing-cta h2 { margin: 0 0 12px; }
    .closing-cta p { margin: 0 auto 24px; max-width: 480px; }
    .footer { background: var(--light-bg); border-top: 1px solid var(--divider); padding: 40px 0; }
    .footer-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 32px; }
    .footer-col h4 { margin: 0 0 12px; font-family: var(--font-heading); font-size: 13px; font-weight: 700; text-transform: uppercase; color: var(--heading); }
    .footer-col ul { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 8px; }
    .footer-col a { font-size: 13px; color: var(--body); }
    .footer-col a:hover { color: var(--purple); }
    .copyright { margin-top: 32px; padding-top: 16px; border-top: 1px solid var(--divider); font-size: 12px; color: var(--body); }
    @media (min-width: 640px) {
      .grid-3 { grid-template-columns: repeat(2, 1fr); }
      .hero-cta { flex-direction: row; }
      .hero h1 { font-size: 40px; }
      .hero { padding: 70px 0; }
      .hero-illustration { max-width: 400px; }
      .empty-actions { flex-direction: row; align-items: center; }
      .footer-grid { grid-template-columns: repeat(4, 1fr); }
    }
    @media (min-width: 1024px) {
      .grid-3 { grid-template-columns: repeat(3, 1fr); }
      .hero-row { flex-direction: row; justify-content: space-between; gap: 48px; }
      .hero h1 { font-size: 48px; }
      .section-heading { font-size: 32px; }
      .directory-section h3 { font-size: 24px; }
      .hero-illustration { max-width: 460px; }
    }
    @media (prefers-reduced-motion: reduce) {
      *, *::before, *::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
        scroll-behavior: auto !important;
      }
    }
  </style>
</head>
<body>
  <header class="topbar">
    <div class="container topbar-inner">
      <a href="/" class="logo">${escapeHtml(t.topBar.logo)}</a>
    </div>
  </header>

  <nav aria-label="Breadcrumb" class="breadcrumb">
    <div class="container">
      <ol>
        <li><a href="/">${escapeHtml(t.breadcrumb.homeLabel)}</a></li>
        <li class="breadcrumb-sep" aria-hidden="true">&gt;</li>
        <li aria-current="page">${escapeHtml(t.breadcrumb.currentLabel)}</li>
      </ol>
    </div>
  </nav>

  <main>
    <section class="hero">
      <div class="hero-bg"></div>
      <div class="container hero-row">
        <div class="hero-col">
          <h1>
            <span class="line1">${escapeHtml(t.hero.h1Line1)}</span>
            <span class="line2">${escapeHtml(t.hero.h1Line2)}</span>
          </h1>
          <p>${escapeHtml(t.hero.subheadline)}</p>
          <div class="hero-cta">
            <a href="/s/ai_site_builder" class="btn btn-primary">${escapeHtml(t.hero.primaryCta)}</a>
            <a href="#all-generators" class="btn btn-ghost">${escapeHtml(t.hero.secondaryCta)}</a>
          </div>
        </div>
        <svg class="hero-illustration" viewBox="0 0 400 300" fill="none" aria-hidden="true" width="400" height="300">
          <defs>
            <linearGradient id="heroGrad" x1="0" y1="0" x2="400" y2="300" gradientUnits="userSpaceOnUse">
              <stop stop-color="#7671FF" stop-opacity="0.35" />
              <stop offset="1" stop-color="#CB0C9F" stop-opacity="0.25" />
            </linearGradient>
          </defs>
          <rect x="20" y="30" width="360" height="240" rx="8" fill="url(#heroGrad)" />
          <rect x="40" y="50" width="320" height="200" rx="6" stroke="#8159BB" stroke-width="2" fill="#FFFFFF" fill-opacity="0.6" />
          <rect x="60" y="70" width="120" height="12" rx="2" fill="#8159BB" fill-opacity="0.25" />
          <rect x="60" y="92" width="80" height="8" rx="2" fill="#CB0C9F" fill-opacity="0.35" />
          <rect x="60" y="120" width="280" height="80" rx="4" stroke="#8159BB" stroke-width="1.5" fill="#FFFFFF" fill-opacity="0.5" />
          <rect x="80" y="140" width="100" height="40" rx="2" fill="#7671FF" fill-opacity="0.2" />
          <rect x="200" y="140" width="120" height="8" rx="2" fill="#8159BB" fill-opacity="0.25" />
          <rect x="200" y="156" width="100" height="8" rx="2" fill="#8159BB" fill-opacity="0.25" />
          <rect x="200" y="172" width="80" height="8" rx="2" fill="#8159BB" fill-opacity="0.25" />
          <circle cx="320" cy="230" r="16" stroke="#CB0C9F" stroke-width="2" />
          <path d="M314 230H326M320 224V236" stroke="#CB0C9F" stroke-width="2" stroke-linecap="round" />
        </svg>
      </div>
    </section>

    <section class="featured">
      <div class="container">
        <h2 class="section-heading">${escapeHtml(t.featured.heading)}</h2>
        <p class="section-subheading">${escapeHtml(t.featured.subheading)}</p>
        <div class="grid-3">
          ${renderFeatured()}
        </div>
      </div>
    </section>

    <section class="categories">
      <div class="container">
        <h2 class="section-heading">${escapeHtml(t.categories.heading)}</h2>
        <div class="grid-3">
          ${renderCategories()}
        </div>
      </div>
    </section>

    <section class="directory" id="${t.directory.id}">
      <div class="container">
        <h2 class="section-heading">${escapeHtml(t.directory.heading)}</h2>
        <p class="section-subheading">${escapeHtml(t.directory.subheading)}</p>

        <div class="search-wrap">
          <label for="generator-search" class="sr-only">${escapeHtml(t.directory.searchAriaLabel)}</label>
          <span class="search-icon" aria-hidden="true">
            <svg viewBox="0 0 20 20" fill="none"><circle cx="9" cy="9" r="6" stroke="currentColor" stroke-width="2"/><path d="M14 14L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
          </span>
          <input id="generator-search" type="search" class="search-input" placeholder="${escapeHtml(t.directory.searchPlaceholder)}" aria-label="${escapeHtml(t.directory.searchAriaLabel)}" />
        </div>
        <p class="result-count" id="result-count" aria-live="polite" aria-atomic="true">&nbsp;</p>
        <div class="empty-state" id="empty-state" hidden>
          <h4>${escapeHtml(t.directory.noResultsHeading)}</h4>
          <div class="empty-actions">
            <button type="button" class="btn btn-primary" id="clear-search" style="height:36px">${escapeHtml(t.directory.clearSearch)}</button>
            <a href="/s/ai_site_builder">${escapeHtml(t.directory.builderLinkText)}</a>
          </div>
        </div>

        <div id="directory-container">
          ${renderDirectory()}
        </div>
      </div>
    </section>

    <section class="how-it-works">
      <div class="container">
        <h2 class="section-heading">${escapeHtml(t.howItWorks.heading)}</h2>
        <ol class="grid-3">
          ${t.howItWorks.steps.map((step, i) => `<li class="step"><span class="step-num">${i + 1}</span><h3>${escapeHtml(step.title)}</h3><p>${escapeHtml(step.description)}</p></li>`).join('')}
        </ol>
      </div>
    </section>

    <section class="why">
      <div class="container">
        <h2 class="section-heading">${escapeHtml(t.whyStrikingly.heading)}</h2>
        <div class="grid-3">
          ${t.whyStrikingly.items.map((item, i) => {
            const icons = [
              `<svg class="why-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M13 2L4 14H11L10 22L19 10H12L13 2Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg>`,
              `<svg class="why-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="6" y="3" width="12" height="18" rx="2" stroke="currentColor" stroke-width="2"/><path d="M10 18H14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`,
              `<svg class="why-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="2"/><path d="M8 10C8 8 9.5 7 12 7C14.5 7 16 8.5 16 10C16 12.5 12 12.5 12 15" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="17" r="1" fill="currentColor"/></svg>`
            ];
            return `<div class="why-cell">${icons[i]}<h3>${escapeHtml(item.title)}</h3><p>${escapeHtml(item.description)}</p></div>`;
          }).join('')}
        </div>
      </div>
    </section>

    <section class="faq">
      <div class="container">
        <h2 class="section-heading">${escapeHtml(t.faq.heading)}</h2>
        <div>
          ${renderFAQs()}
        </div>
      </div>
    </section>

    <section class="closing-cta">
      <div class="container">
        <h2 class="section-heading">${escapeHtml(t.closingCta.heading)}</h2>
        <p>${escapeHtml(t.closingCta.subheading)}</p>
        <a href="/s/ai_site_builder" class="btn btn-primary">${escapeHtml(t.closingCta.cta)}</a>
      </div>
    </section>
  </main>

  <footer class="footer">
    <div class="container">
      <div class="footer-grid">
        <div><a href="/" class="logo">${escapeHtml(t.topBar.logo)}</a></div>
        ${t.footer.columns.map(col => `
        <div class="footer-col"><h4>${escapeHtml(col.title)}</h4><ul>${col.links.map(l => `<li><a href="${escapeHtml(l.href)}">${escapeHtml(l.label)}</a></li>`).join('')}</ul></div>
        `).join('')}
      </div>
      <div class="copyright">${escapeHtml(t.footer.copyright.replace('{year}', String(new Date().getFullYear())))}</div>
    </div>
  </footer>

  <script>
    (function() {
      'use strict';

      const directory = ${JSON.stringify(directoryCategories.map(cat => ({
        id: cat.id,
        name: cat.name,
        description: cat.description,
        entries: cat.entries.map(e => ({ name: e.name, description: e.description }))
      })))};

      const icons = ${JSON.stringify(categoryIcons)};
      const slugify = name => name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
      const normalize = s => s.toLowerCase().replace(/[^a-z0-9]/g, '');
      const INITIAL = ${INITIAL_VISIBLE};
      const t = ${JSON.stringify({
        resultCountSingular: t.directory.resultCountSingular,
        resultCountPlural: t.directory.resultCountPlural,
        showAll: t.directory.showAll,
        showLess: t.directory.showLess,
      })};

      const dirContainer = document.getElementById('directory-container');
      const searchInput = document.getElementById('generator-search');
      const resultCount = document.getElementById('result-count');
      const emptyState = document.getElementById('empty-state');
      let expanded = {};

      function cardHtml(entry, catId, collapsed) {
        const attrs = collapsed ? ' class="directory-card card is-collapsed" aria-hidden="true" tabindex="-1"' : ' class="directory-card card"';
        return '<a href="/generators/' + slugify(entry.name) + '"' + attrs + '>' + icons[catId] + '<h4>' + entry.name + '</h4><p>' + entry.description + '</p></a>';
      }

      function renderDirectory(filterText) {
        const q = normalize(filterText);
        let totalMatches = 0;
        dirContainer.innerHTML = directory.map(function(cat) {
          const entries = q
            ? cat.entries.filter(function(e) { return normalize(e.name).includes(q) || normalize(e.description).includes(q) || normalize(cat.name).includes(q); })
            : cat.entries;
          totalMatches += entries.length;
          const isExpanded = q || expanded[cat.id];
          const visible = isExpanded ? entries : entries.slice(0, INITIAL);
          const hasToggle = !q && entries.length > INITIAL;
          return '<div class="directory-section ' + (entries.length === 0 ? 'is-empty' : '') + '" id="' + cat.id + '">' +
            '<h3>' + cat.name + '</h3>' +
            '<p>' + cat.description + '</p>' +
            '<div class="grid-3">' + entries.map(function(e, i) { return cardHtml(e, cat.id, i >= visible.length); }).join('') + '</div>' +
            (hasToggle ? '<button type="button" class="toggle-btn" data-cat="' + cat.id + '" aria-expanded="' + isExpanded + '" aria-controls="' + cat.id + '">' + (isExpanded ? t.showLess : t.showAll.replace('{count}', entries.length)) + '</button>' : '') +
            '</div>';
        }).join('');

        dirContainer.querySelectorAll('.toggle-btn').forEach(function(btn) {
          btn.addEventListener('click', function() {
            const catId = btn.getAttribute('data-cat');
            expanded[catId] = !expanded[catId];
            renderDirectory(searchInput.value);
          });
        });

        return totalMatches;
      }

      function updateSearch() {
        const q = searchInput.value;
        const count = renderDirectory(q);
        if (q) {
          resultCount.textContent = count === 1 ? t.resultCountSingular : t.resultCountPlural.replace('{count}', count);
          emptyState.hidden = count !== 0;
        } else {
          resultCount.innerHTML = '&nbsp;';
          emptyState.hidden = true;
        }
      }

      searchInput.addEventListener('input', updateSearch);
      document.getElementById('clear-search').addEventListener('click', function() {
        searchInput.value = '';
        updateSearch();
        searchInput.focus();
      });

      renderDirectory('');

      document.querySelectorAll('.faq-panel[data-js-only-hidden="true"]').forEach(function(panel) {
        panel.setAttribute('aria-hidden', 'true');
      });

      document.querySelectorAll('.faq-btn').forEach(function(btn, idx) {
        btn.addEventListener('click', function() {
          const expandedNow = btn.getAttribute('aria-expanded') === 'true';
          document.querySelectorAll('.faq-btn').forEach(function(b, i) {
            const isTarget = i === idx;
            const newExpanded = isTarget ? !expandedNow : false;
            b.setAttribute('aria-expanded', newExpanded);
            const panel = document.getElementById('faq-panel-' + i);
            const chevron = b.querySelector('.faq-chevron');
            panel.setAttribute('aria-hidden', !newExpanded);
            panel.setAttribute('data-js-only-hidden', !newExpanded);
            panel.style.maxHeight = newExpanded ? '400px' : '0';
            panel.style.opacity = newExpanded ? '1' : '0';
            chevron.style.transform = 'rotate(' + (newExpanded ? 180 : 0) + 'deg)';
          });
        });
      });

      if (window.location.hash) {
        const el = document.getElementById(window.location.hash.slice(1));
        if (el) setTimeout(function() { el.scrollIntoView({ behavior: 'smooth', block: 'start' }); }, 0);
      }
    })();
  </script>
</body>
</html>
`;

const outPath = path.join(root, 'public', 'generators.html');
fs.writeFileSync(outPath, staticHtml, 'utf8');
console.log('Wrote', outPath);

// Build index.html as a statically-rendered page with React hydration
const indexPath = path.join(root, 'index.html');
const originalIndex = fs.readFileSync(indexPath, 'utf8');

// Extract runtime bridge scripts from original index.html
const bridgeScripts = [];
const scriptRegex = /<script[^>]*>[\s\S]*?<\/script>/gi;
let m;
while ((m = scriptRegex.exec(originalIndex)) !== null) {
  const script = m[0];
  if (script.includes('__STRK_PREVIEW_ROUTE_BRIDGE__') || script.includes('__STRK_RUNTIME_ERROR_BRIDGE__')) {
    bridgeScripts.push(script);
  }
}

// Replace <title> and meta tags in the static head with proper ones, but keep Vite's link rel icon
let staticHead = staticHtml.match(/<head[^>]*>([\s\S]*)<\/head>/i)[1];
staticHead = staticHead.replace(/<title>[^<]*<\/title>/, `<title>${escapeHtml(t.meta.title)}</title>`);
// Add favicon link if not present
if (!staticHead.includes('rel="icon"')) {
  staticHead += '\n  <link rel="icon" type="image/svg+xml" href="/vite.svg" />';
}

// Body content from static file (keep inline scripts for progressive enhancement)
const bodyFull = staticHtml.match(/<body[^>]*>([\s\S]*)<\/body>/i)[1];
const bodyContent = bodyFull.trim();

const newIndex = `<!doctype html>
<html lang="en">
  <head>
${staticHead.split('\n').map(line => line.trim() ? '    ' + line : line).join('\n')}
  </head>
  <body>
    <div id="root">
${bodyContent.split('\n').map(line => '      ' + line).join('\n')}
    </div>
${bridgeScripts.map(s => '    ' + s).join('\n')}
  </body>
</html>
`;

fs.writeFileSync(indexPath, newIndex, 'utf8');
console.log('Wrote index.html as static page');
