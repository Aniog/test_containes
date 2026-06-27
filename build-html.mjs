// Assembles the full static index.html for the Strikingly Generators Hub.
// Output: index.html (overwrites). Run: node build-html.mjs
import fs from 'node:fs'
import { strings, categories, featured, directory, VISIBLE_BEFORE_COLLAPSE } from './src/generators/data.js'

const t = strings.en
const BUILDER = '/s/ai_site_builder'
const year = new Date().getFullYear()

const thumbs = {
  websites: `<svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation"><rect x="8" y="10" width="40" height="36" rx="4" stroke="#8159BB" stroke-width="2.5"/><path d="M8 18 H48" stroke="#8159BB" stroke-width="2.5"/><circle cx="13" cy="14" r="1.6" fill="#8159BB"/><circle cx="18" cy="14" r="1.6" fill="#8159BB"/><rect x="14" y="24" width="14" height="10" rx="2" stroke="#8159BB" stroke-width="2.5"/><path d="M34 24 H42 M34 30 H42 M34 36 H40" stroke="#8159BB" stroke-width="2.5" stroke-linecap="round"/></svg>`,
  'landing-pages': `<svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation"><rect x="14" y="8" width="28" height="40" rx="4" stroke="#8159BB" stroke-width="2.5"/><path d="M20 18 H36 M20 26 H36 M24 34 H32" stroke="#8159BB" stroke-width="2.5" stroke-linecap="round"/></svg>`,
  portfolios: `<svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation"><rect x="8" y="10" width="40" height="36" rx="4" stroke="#8159BB" stroke-width="2.5"/><circle cx="20" cy="24" r="5" stroke="#8159BB" stroke-width="2.5"/><path d="M12 42 L24 30 L32 38 L40 28 L46 34" stroke="#8159BB" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  blogs: `<svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation"><rect x="10" y="8" width="36" height="40" rx="4" stroke="#8159BB" stroke-width="2.5"/><path d="M18 18 H38 M18 26 H38 M18 34 H30" stroke="#8159BB" stroke-width="2.5" stroke-linecap="round"/></svg>`,
  stores: `<svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation"><path d="M14 18 H42 L40 44 H16 Z" stroke="#8159BB" stroke-width="2.5" stroke-linejoin="round"/><path d="M20 18 V14 a8 8 0 0 1 16 0 V18" stroke="#8159BB" stroke-width="2.5" stroke-linecap="round"/></svg>`,
  'link-in-bio': `<svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation"><path d="M22 12 H34 a6 6 0 0 1 6 6 V38 a6 6 0 0 1 -6 6 H22 a6 6 0 0 1 -6 -6 V18 a6 6 0 0 1 6 -6 Z" stroke="#8159BB" stroke-width="2.5"/><path d="M20 22 H36 M20 30 H36 M20 38 H30" stroke="#8159BB" stroke-width="2.5" stroke-linecap="round"/></svg>`,
}
const arrow = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M4 10 H15 M10 5 L15 10 L10 15" stroke="#8159BB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`
const searchIcon = `<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><circle cx="8" cy="8" r="6" stroke="#8159BB" stroke-width="2"/><path d="M13 13 L16 16" stroke="#8159BB" stroke-width="2" stroke-linecap="round"/></svg>`
const chevron = `<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M4 7 L9 12 L14 7" stroke="#8159BB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`
const logoMark = `<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><rect x="2" y="2" width="24" height="24" rx="6" fill="#8159BB"/><path d="M9 9 L19 19 M19 9 L9 19" stroke="#fff" stroke-width="3" stroke-linecap="round"/></svg>`

const heroSvg = `<svg class="g-hero-illustration" width="520" height="420" viewBox="0 0 520 420" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation"><defs><linearGradient id="heroGrad" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#7671FF"/><stop offset="100%" stop-color="#CB0C9F"/></linearGradient></defs><rect x="60" y="50" width="400" height="300" rx="14" fill="#FFFFFF" stroke="#C6C9CD" stroke-width="2"/><rect x="60" y="50" width="400" height="44" rx="14" fill="#F4F6F8" stroke="#C6C9CD" stroke-width="2"/><rect x="60" y="80" width="400" height="14" fill="#F4F6F8"/><circle cx="84" cy="72" r="5" fill="#C6C9CD"/><circle cx="102" cy="72" r="5" fill="#C6C9CD"/><circle cx="120" cy="72" r="5" fill="#C6C9CD"/><rect x="92" y="118" width="200" height="20" rx="4" fill="url(#heroGrad)" opacity="0.85"/><rect x="92" y="150" width="150" height="10" rx="3" fill="#E2E4E7"/><rect x="92" y="168" width="120" height="10" rx="3" fill="#E2E4E7"/><rect x="92" y="196" width="90" height="30" rx="6" fill="url(#heroGrad)"/><rect x="320" y="118" width="120" height="108" rx="8" fill="#F4F6F8" stroke="#C6C9CD" stroke-width="2"/><circle cx="380" cy="160" r="20" fill="url(#heroGrad)" opacity="0.5"/><path d="M332 218 L366 184 L386 204 L410 178 L428 218 Z" fill="url(#heroGrad)" opacity="0.45"/><rect x="92" y="252" width="108" height="70" rx="8" fill="#FFFFFF" stroke="#C6C9CD" stroke-width="2"/><rect x="104" y="264" width="20" height="20" rx="4" fill="url(#heroGrad)" opacity="0.7"/><rect x="104" y="292" width="80" height="8" rx="3" fill="#E2E4E7"/><rect x="104" y="306" width="56" height="8" rx="3" fill="#E2E4E7"/><rect x="212" y="252" width="108" height="70" rx="8" fill="#FFFFFF" stroke="#C6C9CD" stroke-width="2"/><rect x="224" y="264" width="20" height="20" rx="4" fill="url(#heroGrad)" opacity="0.7"/><rect x="224" y="292" width="80" height="8" rx="3" fill="#E2E4E7"/><rect x="224" y="306" width="56" height="8" rx="3" fill="#E2E4E7"/><rect x="332" y="252" width="108" height="70" rx="8" fill="#FFFFFF" stroke="#C6C9CD" stroke-width="2"/><rect x="344" y="264" width="20" height="20" rx="4" fill="url(#heroGrad)" opacity="0.7"/><rect x="344" y="292" width="80" height="8" rx="3" fill="#E2E4E7"/><rect x="344" y="306" width="56" height="8" rx="3" fill="#E2E4E7"/><path d="M448 96 L454 110 L468 116 L454 122 L448 136 L442 122 L428 116 L442 110 Z" fill="url(#heroGrad)"/><circle cx="48" cy="150" r="6" fill="#8159BB" opacity="0.5"/><circle cx="472" cy="300" r="8" fill="#8159BB" opacity="0.4"/></svg>`

const whyIcons = {
  live: `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation"><path d="M20 6 L34 12 V22 C34 30 28 35 20 37 C12 35 6 30 6 22 V12 Z" stroke="#8159BB" stroke-width="2.5" stroke-linejoin="round"/><path d="M14 21 L18 25 L27 16" stroke="#8159BB" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  mobile: `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation"><rect x="13" y="6" width="14" height="28" rx="3" stroke="#8159BB" stroke-width="2.5"/><path d="M18 30 H22" stroke="#8159BB" stroke-width="2.5" stroke-linecap="round"/></svg>`,
  free: `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation"><circle cx="20" cy="20" r="14" stroke="#8159BB" stroke-width="2.5"/><path d="M14 20 H26 M20 14 V26" stroke="#8159BB" stroke-width="2.5" stroke-linecap="round"/></svg>`,
}

// ---- Featured ----
const featuredHtml = featured.map(f => `      <a href="/generators/${f.slug}" class="g-card g-card-featured">
        <span class="g-tag">${f.category}</span>
        <h3 class="g-card-name">${f.name}</h3>
        <p class="g-card-desc">${f.desc}</p>
      </a>`).join('\n')

// ---- Browse by category ----
const browseHtml = categories.map(c => `      <a href="/generators#${c.id}" class="g-card g-card-category">
        <span class="g-card-thumb">${thumbs[c.id]}</span>
        <h3 class="g-card-name g-card-name-upper">${c.name}</h3>
        <p class="g-card-desc">${c.desc}</p>
        <span class="g-card-arrow" aria-hidden="true">${arrow}</span>
      </a>`).join('\n')

// ---- Directory subsections ----
const dirHtml = directory.map(sub => {
  const cat = categories.find(c => c.id === sub.categoryId)
  const showToggle = sub.entries.length > VISIBLE_BEFORE_COLLAPSE
  const panelId = `g-panel-${sub.categoryId}`
  const toggleId = `g-toggle-${sub.categoryId}`
  const cards = sub.entries.map(e => `          <a href="/generators/${e.slug}" class="g-card g-card-directory" data-gname="${e.name.toLowerCase()}" data-gdesc="${e.desc.toLowerCase()}" data-gcat="${sub.categoryId}">
            <span class="g-card-thumb">${thumbs[sub.categoryId]}</span>
            <h4 class="g-card-name">${e.name}</h4>
            <p class="g-card-desc">${e.desc}</p>
          </a>`).join('\n')
  const toggle = showToggle ? `
        <button id="${toggleId}" type="button" class="g-show-toggle" hidden aria-expanded="false" aria-controls="${panelId}">
          <span class="g-show-toggle-label">Show all ${sub.entries.length} generators</span>
        </button>` : ''
  return `      <section id="${sub.categoryId}" class="g-subsection" aria-labelledby="g-subhead-${sub.categoryId}">
        <div class="g-subsection-head">
          <h3 id="g-subhead-${sub.categoryId}" class="g-h3">${cat.name}</h3>
          <p class="g-subsection-desc">${cat.desc}</p>
        </div>
        <div id="${panelId}" class="g-subsection-grid-wrap" data-collapsed="false" data-visible="${VISIBLE_BEFORE_COLLAPSE}" aria-labelledby="${toggleId}">
          <div class="g-grid-3">
${cards}
          </div>
        </div>${toggle}
      </section>`
}).join('\n')

// ---- How it works ----
const howHtml = t.howSteps.map((step, i) => `      <div class="g-step">
          <span class="g-step-num" aria-hidden="true">${i + 1}</span>
          <h3 class="g-step-title">${step.title}</h3>
          <p class="g-step-body">${step.body}</p>
        </div>`).join('\n')

// ---- Why ----
const whyHtml = t.whyPoints.map((p, i) => `      <div class="g-why">
          ${whyIcons[['live','mobile','free'][i]]}
          <h3 class="g-why-title">${p.title}</h3>
          <p class="g-why-body">${p.body}</p>
        </div>`).join('\n')

// ---- FAQ ----
const faqHtml = t.faqs.map((f, i) => {
  const btnId = `g-faq-btn-${i}`
  const panelId = `g-faq-panel-${i}`
  const open = i === 0
  return `        <div class="g-faq-item">
          <h3 class="g-faq-q-wrap">
            <button id="${btnId}" type="button" class="g-faq-btn" aria-expanded="${open}" aria-controls="${panelId}">
              <span>${f.q}</span>
              <span class="g-faq-icon" aria-hidden="true" data-open="${open}">${chevron}</span>
            </button>
          </h3>
          <div id="${panelId}" class="g-faq-panel" role="region" aria-labelledby="${btnId}" data-open="${open}">
            <div class="g-faq-panel-inner">
              <p>${f.a}</p>
            </div>
          </div>
        </div>`
}).join('\n')

// ---- Footer ----
const footerCols = t.footerCols.map(col => `          <div class="g-footer-col">
            <h3 class="g-footer-col-title">${col.title}</h3>
            <ul class="g-footer-links">
${col.links.map(l => `              <li><a href="${l.href}" class="g-footer-link">${l.label}</a></li>`).join('\n')}
            </ul>
          </div>`).join('\n')

// ---- CSS ----
const css = fs.readFileSync(new URL('./src/generators/generators.css', import.meta.url), 'utf-8')

// ---- JS ----
const js = fs.readFileSync(new URL('./src/generators/hub.js', import.meta.url), 'utf-8')

// ---- Bridge scripts (preserved from original index.html) ----
const bridgeScripts = fs.readFileSync(new URL('./bridge-scripts.txt', import.meta.url), 'utf-8').trim()

const html = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>AI Website Generators - Build Any Site in Seconds | Strikingly</title>
    <meta name="description" content="Browse Strikingly's AI-powered website generators. Choose one for your industry, goal, or site type and create a website in seconds, no code required.">
    <link rel="canonical" href="https://www.strikingly.com/generators">
    <meta property="og:title" content="AI Website Generators - Build Any Site in Seconds | Strikingly">
    <meta property="og:description" content="Browse Strikingly's AI-powered website generators. Choose one for your industry, goal, or site type and create a website in seconds.">
    <meta property="og:url" content="https://www.strikingly.com/generators">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;600;700&family=Open+Sans:wght@400;600;700&display=swap" rel="stylesheet">
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Strikingly", "item": "https://www.strikingly.com/" },
        { "@type": "ListItem", "position": 2, "name": "AI Generators", "item": "https://www.strikingly.com/generators" }
      ]
    }
    </script>
    <style>
${css}
    </style>
  </head>
  <body>
    <div class="g-page">
      <header class="g-topbar">
        <div class="g-container g-topbar-inner">
          <a href="/" class="g-logo" aria-label="Strikingly home">
            <span class="g-logo-mark" aria-hidden="true">${logoMark}</span>
            <span class="g-logo-text">${t.brand}</span>
          </a>
        </div>
      </header>

      <nav class="g-breadcrumb" aria-label="Breadcrumb">
        <div class="g-container">
          <ol class="g-breadcrumb-list">
            <li class="g-breadcrumb-item"><a href="/" class="g-breadcrumb-link">${t.breadcrumbHome}</a></li>
            <li class="g-breadcrumb-sep" aria-hidden="true">&gt;</li>
            <li class="g-breadcrumb-item g-breadcrumb-current" aria-current="page">${t.breadcrumbCurrent}</li>
          </ol>
        </div>
      </nav>

      <main>
        <section class="g-hero" aria-labelledby="hero-heading">
          <div class="g-container g-hero-grid">
            <div class="g-hero-left">
              <h1 id="hero-heading" class="g-hero-h1">
                <span class="g-hero-line1">${t.heroH1Line1}</span>
                <span class="g-hero-line2">${t.heroH1Line2}</span>
              </h1>
              <p class="g-hero-sub">${t.heroSub}</p>
              <div class="g-hero-ctas">
                <a href="${BUILDER}" class="g-btn g-btn-primary g-btn-lg">${t.heroPrimaryCta}</a>
                <a href="#all-generators" class="g-btn g-btn-ghost g-btn-lg">${t.heroSecondaryCta}</a>
              </div>
            </div>
            <div class="g-hero-right">
              ${heroSvg}
            </div>
          </div>
        </section>

        <section class="g-section" aria-labelledby="featured-heading">
          <div class="g-container">
            <div class="g-section-head">
              <h2 id="featured-heading" class="g-h2">${t.featuredHeading}</h2>
              <p class="g-section-sub">${t.featuredSub}</p>
            </div>
            <div class="g-grid-3">
${featuredHtml}
            </div>
          </div>
        </section>

        <section class="g-section g-section-light" aria-labelledby="browse-heading">
          <div class="g-container">
            <div class="g-section-head">
              <h2 id="browse-heading" class="g-h2">${t.browseHeading}</h2>
            </div>
            <div class="g-grid-3">
${browseHtml}
            </div>
          </div>
        </section>

        <section class="g-section" id="all-generators" aria-labelledby="all-heading">
          <div class="g-container">
            <div class="g-section-head">
              <h2 id="all-heading" class="g-h2">${t.allHeading}</h2>
              <p class="g-section-sub">${t.allSub}</p>
            </div>

            <div class="g-search-wrap">
              <label for="g-search" class="g-sr-only">${t.searchLabel}</label>
              <div class="g-search-input-wrap">
                <span class="g-search-icon" aria-hidden="true">${searchIcon}</span>
                <input id="g-search" type="search" class="g-search-input" placeholder="${t.searchPlaceholder}" aria-label="${t.searchLabel}" autocomplete="off">
              </div>
              <p class="g-search-count" id="g-search-count" role="status" aria-live="polite" hidden></p>
            </div>

            <div class="g-search-empty" id="g-search-empty" hidden>
              <p>${t.searchEmpty}</p>
              <button type="button" class="g-btn g-btn-ghost" id="g-search-clear">${t.searchClear}</button>
              <a href="${BUILDER}" class="g-search-empty-link">${t.searchCantFind}</a>
            </div>

            <div class="g-directory" id="g-directory">
${dirHtml}
            </div>
          </div>
        </section>

        <section class="g-section g-section-light" aria-labelledby="how-heading">
          <div class="g-container">
            <div class="g-section-head">
              <h2 id="how-heading" class="g-h2">${t.howHeading}</h2>
            </div>
            <div class="g-grid-3 g-steps">
${howHtml}
            </div>
          </div>
        </section>

        <section class="g-section" aria-labelledby="why-heading">
          <div class="g-container">
            <div class="g-section-head">
              <h2 id="why-heading" class="g-h2">${t.whyHeading}</h2>
            </div>
            <div class="g-grid-3">
${whyHtml}
            </div>
          </div>
        </section>

        <section class="g-section g-section-light" aria-labelledby="faq-heading">
          <div class="g-container g-faq-container">
            <div class="g-section-head">
              <h2 id="faq-heading" class="g-h2">${t.faqHeading}</h2>
            </div>
            <div class="g-faq-list">
${faqHtml}
            </div>
          </div>
        </section>

        <section class="g-section g-closing" aria-labelledby="closing-heading">
          <div class="g-container g-closing-inner">
            <h2 id="closing-heading" class="g-h2 g-closing-headline">${t.closingHeadline}</h2>
            <p class="g-closing-sub">${t.closingSub}</p>
            <a href="${BUILDER}" class="g-btn g-btn-primary g-btn-lg">${t.closingCta}</a>
          </div>
        </section>
      </main>

      <footer class="g-footer">
        <div class="g-container g-footer-inner">
          <div class="g-footer-brand">
            <a href="/" class="g-logo" aria-label="Strikingly home">
              <span class="g-logo-mark" aria-hidden="true">${logoMark}</span>
              <span class="g-logo-text">${t.brand}</span>
            </a>
          </div>
          <div class="g-footer-cols">
${footerCols}
          </div>
        </div>
        <div class="g-container g-footer-bottom">
          <p class="g-footer-copy">${t.footerCopyright(year)}</p>
        </div>
      </footer>
    </div>

    <script>
${bridgeScripts}
    </script>
    <script>
${js}
    </script>
  </body>
</html>
`

fs.writeFileSync(new URL('./index.html', import.meta.url), html)
console.log('index.html written:', html.length, 'bytes')
console.log('directory cards:', (html.match(/g-card-directory/g) || []).length)
console.log('h1 count:', (html.match(/<h1/g) || []).length)
console.log('h2 count:', (html.match(/<h2/g) || []).length)
console.log('h3 count:', (html.match(/<h3/g) || []).length)
