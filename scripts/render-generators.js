import fs from "fs"
import path from "path"
import { fileURLToPath } from "url"
import {
  generatorCategories,
  generatorsByCategory,
  featuredGenerators,
} from "../src/data/generators.js"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, "..")

const catDescription = {
  websites: "Full websites for businesses, events, and personal brands.",
  landingPages: "High-converting single-page sites for campaigns and launches.",
  portfolios: "Visual portfolios for creatives, freelancers, and agencies.",
  blogs: "Clean, readable blogs ready for publishing.",
  stores: "E-commerce sites with products, cart, and checkout.",
  linkInBio: "Compact link hubs for creators and small businesses.",
}

const browseDescription = {
  websites: "AI-built business and personal sites for any goal.",
  landingPages: "Single-page sites built to convert visitors fast.",
  portfolios: "Showcase your work with a clean, focused site.",
  blogs: "Publish-ready blogs with built-in SEO basics.",
  stores: "Sell products online with payments built in.",
  linkInBio: "One link, all your places. Made for creators.",
}

const svgs = {
  websites: `<svg width="64" height="48" viewBox="0 0 64 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><rect x="4" y="4" width="56" height="40" rx="3" stroke="#8159BB" stroke-width="2" fill="none"/><rect x="10" y="10" width="44" height="6" rx="1" fill="#8159BB" fill-opacity="0.2"/><rect x="10" y="20" width="20" height="18" rx="1" fill="#8159BB" fill-opacity="0.15"/><rect x="34" y="20" width="20" height="8" rx="1" fill="#8159BB" fill-opacity="0.15"/><rect x="34" y="32" width="20" height="6" rx="1" fill="#8159BB" fill-opacity="0.15"/></svg>`,
  landingPages: `<svg width="64" height="48" viewBox="0 0 64 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><rect x="4" y="4" width="56" height="40" rx="3" stroke="#8159BB" stroke-width="2" fill="none"/><rect x="10" y="10" width="44" height="6" rx="1" fill="#8159BB" fill-opacity="0.2"/><rect x="10" y="20" width="44" height="8" rx="1" fill="#8159BB" fill-opacity="0.2"/><rect x="10" y="32" width="20" height="8" rx="1" fill="#8159BB" fill-opacity="0.15"/></svg>`,
  portfolios: `<svg width="64" height="48" viewBox="0 0 64 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><rect x="4" y="4" width="56" height="40" rx="3" stroke="#8159BB" stroke-width="2" fill="none"/><circle cx="18" cy="18" r="6" fill="#8159BB" fill-opacity="0.2"/><rect x="28" y="12" width="26" height="4" rx="1" fill="#8159BB" fill-opacity="0.2"/><rect x="28" y="20" width="20" height="4" rx="1" fill="#8159BB" fill-opacity="0.15"/><rect x="10" y="32" width="44" height="8" rx="1" fill="#8159BB" fill-opacity="0.15"/></svg>`,
  blogs: `<svg width="64" height="48" viewBox="0 0 64 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><rect x="4" y="4" width="56" height="40" rx="3" stroke="#8159BB" stroke-width="2" fill="none"/><rect x="10" y="10" width="44" height="8" rx="1" fill="#8159BB" fill-opacity="0.2"/><rect x="10" y="22" width="44" height="4" rx="1" fill="#8159BB" fill-opacity="0.15"/><rect x="10" y="30" width="30" height="4" rx="1" fill="#8159BB" fill-opacity="0.15"/></svg>`,
  stores: `<svg width="64" height="48" viewBox="0 0 64 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><rect x="4" y="4" width="56" height="40" rx="3" stroke="#8159BB" stroke-width="2" fill="none"/><rect x="10" y="10" width="16" height="16" rx="1" fill="#8159BB" fill-opacity="0.2"/><rect x="30" y="10" width="16" height="16" rx="1" fill="#8159BB" fill-opacity="0.2"/><rect x="10" y="30" width="36" height="6" rx="1" fill="#8159BB" fill-opacity="0.15"/></svg>`,
  linkInBio: `<svg width="64" height="48" viewBox="0 0 64 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><rect x="20" y="4" width="24" height="40" rx="3" stroke="#8159BB" stroke-width="2" fill="none"/><circle cx="32" cy="14" r="4" fill="#8159BB" fill-opacity="0.2"/><rect x="24" y="22" width="16" height="4" rx="1" fill="#8159BB" fill-opacity="0.2"/><rect x="24" y="30" width="16" height="4" rx="1" fill="#8159BB" fill-opacity="0.15"/></svg>`,
}

const faq = [
  {
    question: "What is an AI site generator?",
    answer: [
      "An AI site generator is a tool that asks you a few questions about your business, goal, or style, then produces a complete website automatically. Instead of starting from a blank canvas, you start with a tailored first draft.",
      "Strikingly's generators are tuned for specific site types, industries, and use cases, so the layout, copy, and images you receive match what you're trying to build.",
    ],
  },
  {
    question: "How is a generator different from a template?",
    answer: [
      "A template is a pre-made design you customize by hand. A generator uses AI to write copy, choose sections, and assemble a site based on the description you provide.",
      "The result still starts from a polished layout, but the content is generated for you and can be edited in the same editor.",
    ],
  },
  {
    question: "Are these generators free to use?",
    answer: [
      "You can generate a site and start customizing it for free. Publishing and some advanced features require a paid plan, but there is no credit card needed to try the generator or explore your draft.",
    ],
  },
  {
    question: "What kinds of sites can I build?",
    answer: [
      "The generators cover business sites, landing pages, portfolios, blogs, online stores, and link-in-bio pages. Within those categories you'll find options tailored to specific industries and audiences.",
    ],
  },
  {
    question: "Can I customize what the generator produces?",
    answer: [
      "Yes. Every generated site opens in Strikingly's editor, where you can change text, images, colors, fonts, sections, and layout. You keep full control over the final result.",
    ],
  },
  {
    question: "Do generated sites work on mobile?",
    answer: [
      "Yes. Every generator produces a responsive site that adjusts automatically for phones, tablets, and desktops. You can also preview and tweak the mobile view before publishing.",
    ],
  },
]

function escapeHtml(str) {
  return str.replace(/[&<>"']/g, (m) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[m]))
}

function cardHref(slug) {
  return `/generators/${slug}`
}

function renderCard(item, showTag = false) {
  const tag = showTag ? `<span class="tag">${escapeHtml(item.categoryLabel || "")}</span>` : ""
  return `<a href="${cardHref(item.slug)}" class="card">${svgs[item.categoryKey]}<h4 class="font-heading">${escapeHtml(item.name)}</h4><p>${escapeHtml(item.description)}</p>${tag}</a>`
}

function categoryHeading(cat) {
  const map = {
    Websites: "WEBSITES",
    "Landing Page": "LANDING PAGES",
    Portfolio: "PORTFOLIOS",
    Blog: "BLOGS",
    Store: "STORES",
    "Link-in-Bio": "LINK-IN-BIO",
  }
  return map[cat.title] || cat.title.toUpperCase()
}

function renderCategoryBrowseCard(cat) {
  return `<a href="/generators#${cat.slug}" class="card category-card">${svgs[cat.key]}<h3 class="font-heading">${categoryHeading(cat)}</h3><p>${browseDescription[cat.key]}</p><span class="arrow">Browse <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg></span></a>`
}

function renderDirectoryCategory(cat, items) {
  const total = items.length
  const visible = items.slice(0, 6)
  const hidden = items.slice(6)
  return `<div class="category-subsection" id="${cat.slug}" data-category="${cat.key}">
  <h3 class="font-heading">${categoryHeading(cat)}</h3>
  <p class="cat-desc">${catDescription[cat.key]}</p>
  <div class="generator-grid grid-3">
    ${visible.map((item) => renderCard(item)).join("\n    ")}
  </div>
  ${hidden.length ? `<div class="collapsible" id="grid-${cat.slug}"><div class="collapsible-inner"><div class="generator-grid grid-3">
    ${hidden.map((item) => renderCard(item)).join("\n    ")}
  </div></div></div>
  <button type="button" class="btn btn-ghost show-all-btn" data-show-all="Show all ${total} generators" aria-expanded="false" aria-controls="grid-${cat.slug}">Show all ${total} generators</button>` : ""}
</div>`
}

function renderFAQItem(item, index) {
  return `<div class="faq-item">
  <h3>
    <button type="button" class="faq-question" aria-expanded="true" aria-controls="faq-panel-${index}" id="faq-button-${index}">
      ${escapeHtml(item.question)}
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>
    </button>
  </h3>
  <div class="faq-panel" id="faq-panel-${index}" role="region" aria-labelledby="faq-button-${index}">
    <div class="faq-panel-inner"><div>${item.answer.map((p) => `<p>${escapeHtml(p)}</p>`).join("")}</div></div>
  </div>
</div>`
}

function renderPage() {
  const featuredHtml = featuredGenerators.map((item) => renderCard(item, true)).join("\n    ")
  const categoryHtml = generatorCategories.map(renderCategoryBrowseCard).join("\n    ")
  const directoryHtml = generatorCategories
    .map((cat) => renderDirectoryCategory(cat, generatorsByCategory[cat.key]))
    .join("\n    ")
  const faqHtml = faq.map(renderFAQItem).join("\n    ")

  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>AI Website Generators - Build Any Site in Seconds | Strikingly</title>
  <meta name="description" content="Browse Strikingly's AI-powered website generators. Choose one for your industry, goal, or site type and create a website in seconds, no code required." />
  <link rel="canonical" href="https://www.strikingly.com/generators" />
  <meta property="og:title" content="AI Website Generators - Build Any Site in Seconds | Strikingly" />
  <meta property="og:description" content="Browse Strikingly's AI-powered website generators. Choose one for your industry, goal, or site type and create a website in seconds." />
  <meta property="og:url" content="https://www.strikingly.com/generators" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@700&family=Open+Sans:wght@400;600&display=swap" rel="stylesheet" />
  <script type="application/ld+json" id="generators-breadcrumb-jsonld">
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
    :root {
      --brand-purple: #8159BB;
      --ai-blue: #7671FF;
      --ai-pink: #CB0C9F;
      --body-text: #636972;
      --heading: #4B5056;
      --hero-heading: #2E2E2F;
      --card-border: #C6C9CD;
      --divider: #E2E4E7;
      --light-bg: #F4F6F8;
      --white: #FFFFFF;
      --max-width: 1200px;
      --radius-sm: 3px;
      --radius-md: 4px;
      --space-xs: 5px;
      --space-sm: 10px;
      --space-md: 20px;
      --space-lg: 40px;
      --space-xl: 60px;
    }

    *, *::before, *::after { box-sizing: border-box; }

    html { scroll-behavior: smooth; }

    body {
      margin: 0;
      font-family: "Open Sans", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
      font-size: 14px;
      line-height: 1.5;
      color: var(--body-text);
      background: var(--white);
      overflow-x: hidden;
    }

    h1, h2, h3, h4, h5, h6, p { margin: 0; }

    a { color: inherit; text-decoration: none; }

    img, svg { display: block; max-width: 100%; }

    .font-heading {
      font-family: "Josefin Sans", "Poppins", sans-serif;
      font-weight: 700;
      text-transform: uppercase;
      line-height: 1.2;
    }

    .container {
      width: 100%;
      max-width: var(--max-width);
      margin-inline: auto;
      padding-inline: var(--space-md);
    }

    .top-bar {
      position: sticky;
      top: 0;
      z-index: 40;
      background: var(--white);
      border-bottom: 1px solid var(--divider);
    }

    .top-bar-inner {
      display: flex;
      align-items: center;
      height: 56px;
    }

    .logo {
      display: inline-flex;
      align-items: center;
      font-family: "Josefin Sans", "Poppins", sans-serif;
      font-weight: 700;
      font-size: 18px;
      color: var(--hero-heading);
    }

    .logo span.ai {
      margin-inline-start: 6px;
      background: linear-gradient(90deg, var(--ai-blue), var(--ai-pink));
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .breadcrumb {
      background: var(--white);
      border-bottom: 1px solid var(--divider);
      padding-block: 12px;
    }

    .breadcrumb ol {
      display: flex;
      align-items: center;
      gap: 8px;
      list-style: none;
      margin: 0;
      padding: 0;
      font-size: 14px;
      color: var(--body-text);
    }

    .breadcrumb a:hover { color: var(--brand-purple); }

    .breadcrumb [aria-current] { color: var(--heading); }

    a:focus-visible, button:focus-visible, input:focus-visible {
      outline: none;
      box-shadow: 0 0 0 2px var(--white), 0 0 0 4px var(--brand-purple);
      border-radius: var(--radius-sm);
    }

    .btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      height: 36px;
      padding-inline: 15px;
      border-radius: var(--radius-md);
      font-family: "Josefin Sans", "Poppins", sans-serif;
      font-weight: 700;
      font-size: 14px;
      text-transform: uppercase;
      border: 1px solid transparent;
      cursor: pointer;
      transition: box-shadow 0.2s ease, background-color 0.2s ease, border-color 0.2s ease;
    }

    .btn-primary {
      background: linear-gradient(90deg, var(--ai-blue), var(--ai-pink));
      color: var(--white);
      box-shadow: 0 1px 3px rgba(0,0,0,0.08);
    }

    .btn-primary:hover { box-shadow: 0 4px 10px rgba(118,113,255,0.25); }

    .btn-ghost {
      background: transparent;
      border-color: var(--brand-purple);
      color: var(--brand-purple);
    }

    .btn-ghost:hover { background: var(--light-bg); }

    .btn-lg { height: 44px; }

    .hero {
      position: relative;
      overflow: hidden;
      background: var(--white);
      padding-block: 60px;
    }

    @media (min-width: 768px) { .hero { padding-block: 80px; } }

    .hero::before {
      content: "";
      position: absolute;
      inset: 0;
      pointer-events: none;
      background:
        radial-gradient(ellipse at 80% 20%, rgba(118,113,255,0.10) 0%, transparent 50%),
        radial-gradient(ellipse at 20% 80%, rgba(203,12,159,0.06) 0%, transparent 50%);
    }

    .hero-inner {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: var(--space-lg);
    }

    @media (min-width: 768px) {
      .hero-inner { flex-direction: row; justify-content: space-between; }
    }

    .hero-content { max-width: 560px; text-align: start; }

    .hero h1 {
      font-size: 32px;
      color: var(--hero-heading);
    }

    @media (min-width: 768px) { .hero h1 { font-size: 44px; } }
    @media (min-width: 1024px) { .hero h1 { font-size: 48px; } }

    .hero h1 .gradient {
      background: linear-gradient(90deg, var(--ai-blue), var(--ai-pink));
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .hero p {
      margin-block-start: var(--space-md);
      max-width: 480px;
      line-height: 1.6;
    }

    .hero-actions {
      display: flex;
      flex-direction: column;
      gap: var(--space-sm);
      margin-block-start: var(--space-lg);
    }

    @media (min-width: 640px) { .hero-actions { flex-direction: row; } }

    .hero-visual { display: flex; justify-content: center; width: 100%; }
    @media (min-width: 768px) { .hero-visual { width: auto; justify-content: flex-end; } }

    .section { padding-block: 40px; }
    @media (min-width: 768px) { .section { padding-block: 48px; } }
    @media (min-width: 1024px) { .section { padding-block: 64px; } }

    .section-heading {
      font-size: 26px;
      color: var(--heading);
      margin-block-end: var(--space-sm);
    }

    @media (min-width: 768px) { .section-heading { font-size: 30px; } }

    .section-subheading { margin-block-end: var(--space-lg); }

    .bg-light { background: var(--light-bg); }

    .card {
      display: block;
      background: var(--white);
      border: 1px solid var(--card-border);
      border-radius: var(--radius-sm);
      padding: var(--space-md);
      transition: border-color 0.2s ease, box-shadow 0.2s ease;
    }

    .card:hover {
      border-color: var(--brand-purple);
      box-shadow: 0 4px 12px rgba(129,89,187,0.12);
    }

    .card h3, .card h4 {
      font-size: 16px;
      color: var(--heading);
      margin-block-start: 0;
    }

    .card > svg { margin-block-end: var(--space-md); }

    .card p {
      margin-block-start: var(--space-sm);
      font-size: 14px;
      line-height: 1.5;
    }

    .tag {
      display: inline-block;
      margin-block-start: var(--space-sm);
      padding: 2px 6px;
      border: 1px solid var(--brand-purple);
      border-radius: var(--radius-sm);
      font-family: "Josefin Sans", "Poppins", sans-serif;
      font-size: 11px;
      font-weight: 700;
      text-transform: uppercase;
      color: var(--brand-purple);
    }

    .grid-3 {
      display: grid;
      gap: var(--space-md);
    }

    @media (min-width: 640px) { .grid-3 { grid-template-columns: repeat(2, 1fr); } }
    @media (min-width: 1024px) { .grid-3 { grid-template-columns: repeat(3, 1fr); } }

    .featured-grid { display: grid; gap: var(--space-md); }
    @media (min-width: 640px) { .featured-grid { grid-template-columns: repeat(2, 1fr); } }
    @media (min-width: 1024px) { .featured-grid { grid-template-columns: repeat(3, 1fr); } }

    .category-card .arrow {
      display: inline-flex;
      align-items: center;
      gap: 4px;
      margin-block-start: var(--space-sm);
      font-size: 14px;
      font-weight: 600;
      color: var(--brand-purple);
    }

    .category-card .arrow svg {
      width: 16px;
      height: 16px;
      transition: transform 0.2s ease;
    }

    .category-card:hover .arrow svg { transform: translateX(4px); }

    .search-wrap {
      position: relative;
      max-width: 480px;
      margin-block-end: var(--space-md);
    }

    .search-wrap svg {
      position: absolute;
      left: 12px;
      top: 50%;
      transform: translateY(-50%);
      width: 16px;
      height: 16px;
      color: var(--body-text);
      pointer-events: none;
    }

    .search-input {
      width: 100%;
      height: 40px;
      padding-inline: 36px 12px;
      border: 1px solid var(--card-border);
      border-radius: var(--radius-md);
      background: var(--white);
      font-family: inherit;
      font-size: 14px;
      color: var(--hero-heading);
    }

    .search-input::placeholder { color: rgba(99,105,114,0.6); }

    .search-input:focus { border-color: var(--brand-purple); }

    .result-count {
      font-size: 14px;
      margin-block-end: var(--space-md);
      outline: none;
    }

    .empty-state {
      background: var(--white);
      border: 1px solid var(--card-border);
      border-radius: var(--radius-sm);
      padding: 32px;
      text-align: center;
    }

    .empty-state p { color: var(--heading); }

    .empty-actions {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: var(--space-sm);
      margin-block-start: var(--space-md);
    }

    @media (min-width: 640px) { .empty-actions { flex-direction: row; } }

    .category-subsection { margin-block-start: var(--space-lg); }
    .category-subsection:first-of-type { margin-block-start: 0; }

    .category-subsection h3 {
      font-size: 18px;
      color: var(--heading);
    }

    .category-subsection .cat-desc {
      margin-block-start: 4px;
      margin-block-end: var(--space-md);
    }

    .collapsible {
      display: grid;
      grid-template-rows: 1fr;
      transition: grid-template-rows 0.3s ease;
    }

    .collapsible { transition: grid-template-rows 0.35s ease; }

    .collapsible.collapsed { grid-template-rows: 0fr; }

    .collapsible.collapsed .collapsible-inner { visibility: hidden; }

    .collapsible-inner { overflow: hidden; min-height: 0; }

    .show-all-btn { margin-block-start: var(--space-md); }

    .steps {
      display: grid;
      gap: var(--space-lg);
    }

    @media (min-width: 768px) { .steps { grid-template-columns: repeat(3, 1fr); } }

    .step-number {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      border-radius: 999px;
      background: var(--brand-purple);
      color: var(--white);
      font-weight: 700;
      font-size: 14px;
    }

    .step h3 {
      margin-block-start: var(--space-md);
      font-size: 14px;
      color: var(--heading);
    }

    .step p { margin-block-start: var(--space-sm); }

    .why-grid {
      display: grid;
      gap: var(--space-lg);
    }

    @media (min-width: 768px) { .why-grid { grid-template-columns: repeat(3, 1fr); } }

    .why-cell .icon {
      width: 32px;
      height: 32px;
      border: 2px solid var(--brand-purple);
      border-radius: 999px;
      margin-block-end: var(--space-md);
    }

    .why-cell h3 {
      font-size: 14px;
      color: var(--heading);
    }

    .why-cell p { margin-block-start: var(--space-sm); }

    .faq-item {
      background: var(--white);
      border: 1px solid var(--card-border);
      border-radius: var(--radius-sm);
      margin-block-start: 12px;
    }

    .faq-item:first-of-type { margin-block-start: 0; }

    .faq-question {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 16px 20px;
      background: transparent;
      border: none;
      font-family: "Josefin Sans", "Poppins", sans-serif;
      font-size: 14px;
      font-weight: 700;
      text-transform: uppercase;
      text-align: start;
      color: var(--heading);
      cursor: pointer;
    }

    .faq-question:hover { background: var(--light-bg); }

    .faq-question svg {
      width: 16px;
      height: 16px;
      color: var(--brand-purple);
      flex-shrink: 0;
      margin-inline-start: 12px;
      transition: transform 0.2s ease;
    }

    .faq-question[aria-expanded="true"] svg { transform: rotate(180deg); }

    .faq-panel {
      display: grid;
      grid-template-rows: 1fr;
      transition: grid-template-rows 0.25s ease;
    }

    .faq-panel[hidden] { grid-template-rows: 0fr; }

    .faq-panel[hidden] .faq-panel-inner { visibility: hidden; }

    .faq-panel-inner { overflow: hidden; min-height: 0; }

    .faq-panel-inner > div {
      padding: 0 20px 20px;
    }

    .faq-panel p {
      margin-block-start: 12px;
      line-height: 1.6;
    }

    .faq-panel p:first-of-type { margin-block-start: 0; }

    .closing-cta {
      text-align: center;
      padding-block: 56px;
    }

    @media (min-width: 768px) { .closing-cta { padding-block: 80px; } }

    .closing-cta h2 { font-size: 26px; }
    @media (min-width: 768px) { .closing-cta h2 { font-size: 32px; } }

    .closing-cta p {
      max-width: 520px;
      margin-inline: auto;
      margin-block-start: var(--space-sm);
      margin-block-end: var(--space-lg);
    }

    footer {
      background: var(--white);
      border-top: 1px solid var(--divider);
      padding-block: 40px;
    }

    .footer-grid {
      display: grid;
      gap: var(--space-lg);
      grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: 768px) { .footer-grid { grid-template-columns: repeat(5, 1fr); } }

    .footer-col h4 {
      font-size: 12px;
      color: var(--heading);
      margin-block-end: var(--space-sm);
    }

    .footer-col ul {
      list-style: none;
      margin: 0;
      padding: 0;
    }

    .footer-col li + li { margin-block-start: 8px; }

    .footer-col a {
      font-size: 14px;
      color: var(--body-text);
    }

    .footer-col a:hover { color: var(--brand-purple); }

    .copyright {
      margin-block-start: var(--space-lg);
      font-size: 12px;
      color: var(--body-text);
    }

    .visually-hidden {
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0,0,0,0);
      border: 0;
    }

    [data-hidden="true"] { display: none !important; }

    @media (prefers-reduced-motion: reduce) {
      html { scroll-behavior: auto; }
      *, *::before, *::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
      }
    }
  </style>
</head>
<body>
  <header class="top-bar">
    <div class="container top-bar-inner">
      <a href="/" class="logo" aria-label="Strikingly AI home">
        strikingly<span class="ai">AI</span>
      </a>
    </div>
  </header>

  <nav aria-label="Breadcrumb" class="breadcrumb">
    <div class="container">
      <ol>
        <li><a href="/">Strikingly</a></li>
        <li aria-hidden="true">&gt;</li>
        <li aria-current="page">AI Generators</li>
      </ol>
    </div>
  </nav>

  <main>
    <section class="hero">
      <div class="container hero-inner">
        <div class="hero-content">
          <h1 class="font-heading">
            <span>BUILD ANY KIND OF SITE</span>
            <span class="gradient">WITH AI, IN AN INSTANT</span>
          </h1>
          <p>Browse the right generator for what you're building, or jump straight into our AI site builder.</p>
          <div class="hero-actions">
            <a href="/s/ai_site_builder" class="btn btn-primary btn-lg">START BUILDING - IT'S FREE</a>
            <a href="#all-generators" class="btn btn-ghost btn-lg">BROWSE GENERATORS</a>
          </div>
        </div>
        <div class="hero-visual">
          <svg width="440" height="352" viewBox="0 0 400 320" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <defs>
              <linearGradient id="heroGrad" x1="0" y1="0" x2="400" y2="320" gradientUnits="userSpaceOnUse">
                <stop stop-color="#7671FF" stop-opacity="0.35" />
                <stop offset="1" stop-color="#CB0C9F" stop-opacity="0.25" />
              </linearGradient>
            </defs>
            <rect x="40" y="30" width="320" height="260" rx="8" fill="url(#heroGrad)" />
            <rect x="60" y="50" width="280" height="40" rx="4" stroke="#8159BB" stroke-width="2" fill="none" />
            <rect x="75" y="65" width="80" height="10" rx="2" fill="#8159BB" fill-opacity="0.4" />
            <rect x="60" y="105" width="130" height="160" rx="4" stroke="#8159BB" stroke-width="2" fill="none" />
            <rect x="75" y="125" width="100" height="60" rx="2" fill="#8159BB" fill-opacity="0.25" />
            <rect x="75" y="200" width="100" height="8" rx="2" fill="#8159BB" fill-opacity="0.3" />
            <rect x="75" y="215" width="70" height="8" rx="2" fill="#8159BB" fill-opacity="0.2" />
            <rect x="205" y="105" width="135" height="75" rx="4" stroke="#8159BB" stroke-width="2" fill="none" />
            <rect x="220" y="125" width="50" height="8" rx="2" fill="#8159BB" fill-opacity="0.3" />
            <rect x="220" y="140" width="90" height="6" rx="2" fill="#8159BB" fill-opacity="0.2" />
            <rect x="220" y="152" width="70" height="6" rx="2" fill="#8159BB" fill-opacity="0.15" />
            <rect x="205" y="195" width="135" height="70" rx="4" stroke="#8159BB" stroke-width="2" fill="none" />
            <rect x="220" y="215" width="50" height="8" rx="2" fill="#8159BB" fill-opacity="0.3" />
            <rect x="220" y="230" width="90" height="6" rx="2" fill="#8159BB" fill-opacity="0.2" />
            <rect x="220" y="242" width="70" height="6" rx="2" fill="#8159BB" fill-opacity="0.15" />
            <circle cx="340" cy="270" r="22" stroke="#8159BB" stroke-width="2" fill="none" />
            <path d="M330 270L338 278L354 262" stroke="#8159BB" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </div>
      </div>
    </section>

    <section class="section bg-light" aria-labelledby="featured-heading">
      <div class="container">
        <h2 id="featured-heading" class="font-heading section-heading">FEATURED GENERATORS</h2>
        <p class="section-subheading">A few common starting points.</p>
        <div class="featured-grid">
          ${featuredHtml}
        </div>
      </div>
    </section>

    <section class="section" aria-labelledby="categories-heading">
      <div class="container">
        <h2 id="categories-heading" class="font-heading section-heading">BROWSE BY CATEGORY</h2>
        <div class="grid-3">
          ${categoryHtml}
        </div>
      </div>
    </section>

    <section id="all-generators" class="section bg-light" aria-labelledby="directory-heading">
      <div class="container">
        <h2 id="directory-heading" class="font-heading section-heading">ALL GENERATORS</h2>
        <p class="section-subheading">Sixty-plus generators, organized by what you're building.</p>

        <label for="generator-search" class="visually-hidden">Search generators</label>
        <div class="search-wrap">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
          <input id="generator-search" type="search" class="search-input" placeholder="Search generators..." aria-label="Search generators" autocomplete="off" />
        </div>
        <p class="result-count" id="result-count" aria-live="polite" tabindex="-1"></p>

        <div class="empty-state" id="empty-state" data-hidden="true">
          <p>No generators match your search.</p>
          <div class="empty-actions">
            <button type="button" class="btn btn-ghost" id="clear-search">Clear search</button>
            <a href="/s/ai_site_builder">Can't find it? Start with our AI builder.</a>
          </div>
        </div>

        <div id="directory-root">
          ${directoryHtml}
        </div>
      </div>
    </section>

    <section class="section" aria-labelledby="how-heading">
      <div class="container">
        <h2 id="how-heading" class="font-heading section-heading">HOW IT WORKS</h2>
        <div class="steps">
          <article class="step">
            <div class="step-number">1</div>
            <h3 class="font-heading">PICK A GENERATOR</h3>
            <p>Browse by category or search to find one that fits your goal.</p>
          </article>
          <article class="step">
            <div class="step-number">2</div>
            <h3 class="font-heading">DESCRIBE YOUR SITE</h3>
            <p>Tell our AI builder about your business in a sentence or two.</p>
          </article>
          <article class="step">
            <div class="step-number">3</div>
            <h3 class="font-heading">GENERATE AND PUBLISH</h3>
            <p>Get a fully built site in seconds. Customize anything, then go live.</p>
          </article>
        </div>
      </div>
    </section>

    <section class="section bg-light" aria-labelledby="why-heading">
      <div class="container">
        <h2 id="why-heading" class="font-heading section-heading">WHY STRIKINGLY</h2>
        <div class="why-grid">
          <article class="why-cell">
            <div class="icon" aria-hidden="true"></div>
            <h3 class="font-heading">LIVE IN SECONDS</h3>
            <p>Describe your site, we build it. No setup, no learning curve.</p>
          </article>
          <article class="why-cell">
            <div class="icon" aria-hidden="true"></div>
            <h3 class="font-heading">MOBILE BY DEFAULT</h3>
            <p>Every generator produces responsive sites that work on any device.</p>
          </article>
          <article class="why-cell">
            <div class="icon" aria-hidden="true"></div>
            <h3 class="font-heading">FREE TO START</h3>
            <p>Generate, customize, and publish without a credit card.</p>
          </article>
        </div>
      </div>
    </section>

    <section class="section" aria-labelledby="faq-heading">
      <div class="container">
        <h2 id="faq-heading" class="font-heading section-heading">FREQUENTLY ASKED QUESTIONS</h2>
        <div id="faq-root">
          ${faqHtml}
        </div>
      </div>
    </section>

    <section class="closing-cta" id="closing-cta" aria-labelledby="closing-heading">
      <div class="container">
        <h2 id="closing-heading" class="font-heading">READY TO BUILD?</h2>
        <p>Pick a generator above, or jump straight into our AI builder.</p>
        <a href="/s/ai_site_builder" class="btn btn-primary btn-lg">START WITH AI BUILDER</a>
      </div>
    </section>
  </main>

  <footer>
    <div class="container">
      <div class="footer-grid">
        <div class="footer-col">
          <a href="/" class="logo" aria-label="Strikingly AI home">strikingly<span class="ai">AI</span></a>
        </div>
        <div class="footer-col">
          <h4 class="font-heading">PRODUCT</h4>
          <ul>
            <li><a href="/templates">Templates</a></li>
            <li><a href="/pricing">Pricing</a></li>
            <li><a href="/s/ai_site_builder">AI Builder</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4 class="font-heading">COMPANY</h4>
          <ul>
            <li><a href="/about">About</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/careers">Careers</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4 class="font-heading">SUPPORT</h4>
          <ul>
            <li><a href="/support">Help Center</a></li>
            <li><a href="/support">Contact Us</a></li>
            <li><a href="/status">Status</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4 class="font-heading">LEGAL</h4>
          <ul>
            <li><a href="/terms">Terms</a></li>
            <li><a href="/privacy">Privacy</a></li>
          </ul>
        </div>
      </div>
      <p class="copyright">&copy; 2026 Strikingly, Inc. All rights reserved.</p>
    </div>
  </footer>

  <script>
    (function() {
      "use strict";

      const INITIAL_VISIBLE = 6;

      // Collapse directory extras on load
      document.querySelectorAll(".collapsible").forEach(function(wrapper) {
        wrapper.classList.add("collapsed");
        const section = wrapper.closest(".category-subsection");
        const btn = section.querySelector(".show-all-btn");
        if (!btn) return;
        btn.addEventListener("click", function() {
          const expanded = wrapper.classList.toggle("collapsed") === false;
          btn.setAttribute("aria-expanded", String(expanded));
          btn.textContent = expanded ? "Show less" : btn.dataset.showAll;
        });
      });

      // FAQ accordion
      document.querySelectorAll(".faq-item").forEach(function(item, index) {
        const btn = item.querySelector(".faq-question");
        const panel = item.querySelector(".faq-panel");
        if (index !== 0) {
          btn.setAttribute("aria-expanded", "false");
          panel.setAttribute("hidden", "");
        }
        btn.addEventListener("click", function() {
          const expanded = btn.getAttribute("aria-expanded") === "true";
          btn.setAttribute("aria-expanded", String(!expanded));
          if (expanded) {
            panel.setAttribute("hidden", "");
          } else {
            panel.removeAttribute("hidden");
          }
        });
      });

      // Search
      const searchInput = document.getElementById("generator-search");
      const resultCount = document.getElementById("result-count");
      const emptyState = document.getElementById("empty-state");
      const clearBtn = document.getElementById("clear-search");

      function countText(n) {
        return n + " generator" + (n === 1 ? "" : "s") + " match";
      }

      function reset() {
        document.querySelectorAll(".card").forEach(function(c) { c.style.display = ""; });
        document.querySelectorAll(".category-subsection").forEach(function(s) { s.style.display = ""; });
        document.querySelectorAll(".collapsible").forEach(function(w) { w.classList.add("collapsed"); });
        document.querySelectorAll(".show-all-btn").forEach(function(b) {
          b.setAttribute("aria-expanded", "false");
          b.textContent = b.dataset.showAll;
        });
        emptyState.setAttribute("data-hidden", "true");
        resultCount.textContent = "";
      }

      function doSearch() {
        const q = searchInput.value.trim().toLowerCase();
        if (!q) {
          reset();
          return;
        }

        let total = 0;
        document.querySelectorAll(".category-subsection").forEach(function(section) {
          const catLabel = section.querySelector("h3").textContent.toLowerCase();
          const cards = section.querySelectorAll(".card");
          let matches = 0;
          cards.forEach(function(card) {
            const text = (card.textContent + " " + catLabel).toLowerCase();
            if (text.indexOf(q) !== -1) {
              card.style.display = "";
              matches++;
            } else {
              card.style.display = "none";
            }
          });
          total += matches;
          section.style.display = matches ? "" : "none";

          if (matches) {
            const wrapper = section.querySelector(".collapsible");
            if (wrapper) {
              wrapper.classList.remove("collapsed");
              const btn = section.querySelector(".show-all-btn");
              if (btn) {
                btn.setAttribute("aria-expanded", "true");
                btn.textContent = "Show less";
              }
            }
          }
        });

        resultCount.textContent = countText(total);
        if (total === 0) {
          emptyState.removeAttribute("data-hidden");
        } else {
          emptyState.setAttribute("data-hidden", "true");
        }
      }

      searchInput.addEventListener("input", doSearch);
      clearBtn.addEventListener("click", function() {
        searchInput.value = "";
        reset();
        searchInput.focus();
      });
    })();
  </script>
</body>
</html>`
}

const html = renderPage()
fs.writeFileSync(path.join(root, "index.html"), html, "utf8")
fs.writeFileSync(path.join(root, "public", "generators", "index.html"), html, "utf8")
console.log("Generated index.html and public/generators/index.html")
