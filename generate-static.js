import { generators, featuredGenerators } from './src/generators-data.js'
import { strings } from './src/strings.js'
import { writeFileSync } from 'fs'

const s = strings.en

function escapeHtml(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
}

function svgIcon(name) {
  const icons = {
    search: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`,
    arrowRight: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>`,
    chevronDown: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" class="faq-chevron"><polyline points="6 9 12 15 18 9"/></svg>`,
    lightning: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#8159BB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
    mobile: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#8159BB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>`,
    dollar: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#8159BB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>`,
  }
  return icons[name] || ''
}

function categoryIcon(type) {
  const icons = {
    websites: `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true"><rect x="4" y="6" width="24" height="18" rx="2" stroke="#8159BB" strokeWidth="2"/><line x1="4" y1="12" x2="28" y2="12" stroke="#8159BB" strokeWidth="2"/><line x1="12" y1="6" x2="12" y2="12" stroke="#8159BB" strokeWidth="2"/></svg>`,
    'landing-pages': `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true"><rect x="6" y="4" width="20" height="24" rx="2" stroke="#8159BB" strokeWidth="2"/><line x1="10" y1="10" x2="22" y2="10" stroke="#8159BB" strokeWidth="2"/><line x1="10" y1="16" x2="18" y2="16" stroke="#8159BB" strokeWidth="2"/><rect x="10" y="20" width="8" height="4" rx="1" stroke="#8159BB" strokeWidth="2"/></svg>`,
    portfolios: `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true"><rect x="4" y="8" width="10" height="10" rx="1" stroke="#8159BB" strokeWidth="2"/><rect x="18" y="8" width="10" height="10" rx="1" stroke="#8159BB" strokeWidth="2"/><rect x="4" y="22" width="10" height="6" rx="1" stroke="#8159BB" strokeWidth="2"/><rect x="18" y="22" width="10" height="6" rx="1" stroke="#8159BB" strokeWidth="2"/></svg>`,
    blogs: `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true"><rect x="6" y="4" width="20" height="24" rx="2" stroke="#8159BB" strokeWidth="2"/><line x1="10" y1="10" x2="22" y2="10" stroke="#8159BB" strokeWidth="2"/><line x1="10" y1="14" x2="22" y2="14" stroke="#8159BB" strokeWidth="2"/><line x1="10" y1="18" x2="16" y2="18" stroke="#8159BB" strokeWidth="2"/></svg>`,
    stores: `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true"><path d="M6 10 L6 24 L26 24 L26 10" stroke="#8159BB" strokeWidth="2"/><path d="M4 10 L28 10" stroke="#8159BB" strokeWidth="2"/><path d="M10 10 L10 6 L22 6 L22 10" stroke="#8159BB" strokeWidth="2"/><line x1="16" y1="16" x2="16" y2="20" stroke="#8159BB" strokeWidth="2"/></svg>`,
    'link-in-bio': `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true"><path d="M12 16 L20 16" stroke="#8159BB" strokeWidth="2"/><path d="M14 14 L18 14 L18 18 L14 18 Z" stroke="#8159BB" strokeWidth="2"/><path d="M8 12 L8 20" stroke="#8159BB" strokeWidth="2"/><path d="M24 12 L24 20" stroke="#8159BB" strokeWidth="2"/><circle cx="8" cy="10" r="2" stroke="#8159BB" strokeWidth="2"/><circle cx="24" cy="22" r="2" stroke="#8159BB" strokeWidth="2"/></svg>`,
  }
  return icons[type] || ''
}

const heroIllustration = `<svg width="400" height="320" viewBox="0 0 400 320" fill="none" aria-hidden="true" class="hero-illustration"><rect x="40" y="40" width="320" height="240" rx="8" stroke="#8159BB" strokeWidth="1.5" opacity="0.3"/><rect x="60" y="60" width="280" height="20" rx="4" fill="#8159BB" opacity="0.1"/><rect x="60" y="100" width="120" height="80" rx="4" stroke="#8159BB" strokeWidth="1.5" opacity="0.4"/><rect x="200" y="100" width="140" height="30" rx="4" fill="#8159BB" opacity="0.08"/><rect x="200" y="140" width="100" height="10" rx="2" fill="#8159BB" opacity="0.15"/><rect x="200" y="160" width="120" height="10" rx="2" fill="#8159BB" opacity="0.1"/><rect x="60" y="200" width="280" height="60" rx="4" stroke="#8159BB" strokeWidth="1.5" opacity="0.3"/><circle cx="90" cy="230" r="15" stroke="#8159BB" strokeWidth="1.5" opacity="0.4"/><rect x="120" y="220" width="80" height="8" rx="2" fill="#8159BB" opacity="0.15"/><rect x="120" y="235" width="60" height="6" rx="2" fill="#8159BB" opacity="0.1"/><rect x="220" y="220" width="100" height="20" rx="4" stroke="#8159BB" strokeWidth="1.5" opacity="0.3"/><line x1="40" y1="280" x2="360" y2="280" stroke="#8159BB" strokeWidth="1" opacity="0.2"/></svg>`

const year = new Date().getFullYear()

// Build featured cards
const featuredCards = featuredGenerators.map(gen => `
          <a href="/generators/${gen.slug}" class="featured-card">
            <span class="featured-card-name">${escapeHtml(gen.name)}</span>
            <span class="featured-card-desc">${escapeHtml(gen.description)}</span>
            <span class="tag tag-ghost">${escapeHtml(gen.category)}</span>
          </a>`).join('')

// Build category cards
const categoryCards = s.categories.map(cat => `
          <a href="#${cat.id}" class="category-card">
            <div class="category-card-icon">${categoryIcon(cat.id)}</div>
            <span class="category-card-name">${escapeHtml(cat.name)}</span>
            <span class="category-card-desc">${escapeHtml(cat.description)}</span>
            <span class="category-card-arrow">${svgIcon('arrowRight')}</span>
          </a>`).join('')

// Build generator subsections
const INITIAL_VISIBLE = 6
const subsections = s.categories.map(cat => {
  const catGens = generators[cat.id] || []
  if (catGens.length === 0) return ''
  
  const cards = catGens.map(gen => `
                <a href="/generators/${gen.slug}" class="generator-card">
                  <span class="generator-card-name">${escapeHtml(gen.name)}</span>
                  <span class="generator-card-desc">${escapeHtml(gen.description)}</span>
                </a>`).join('')
  
  const showAllBtn = catGens.length > INITIAL_VISIBLE ? `
              <button type="button" class="btn btn-ghost btn-show-all" aria-expanded="false" aria-controls="generators-grid-${cat.id}" data-category="${cat.id}" data-total="${catGens.length}">
                Show all ${catGens.length} generators
              </button>` : ''
  
  return `
            <div id="${cat.id}" class="generators-subsection">
              <h3 class="subsection-heading">${escapeHtml(cat.name)}</h3>
              <p class="subsection-desc">${escapeHtml(cat.description)}</p>
              <div class="generators-grid" id="generators-grid-${cat.id}">${cards}
              </div>${showAllBtn}
            </div>`
}).join('')

// Build FAQ items
const faqItems = s.faqs.map((faq, i) => {
  const isExpanded = i === 0
  return `
          <div class="faq-item">
            <button type="button" class="faq-question" aria-expanded="${isExpanded}" aria-controls="faq-answer-${i}">
              <span>${escapeHtml(faq.question)}</span>
              ${svgIcon('chevronDown')}
            </button>
            <div id="faq-answer-${i}" class="faq-answer" role="region" ${isExpanded ? 'style="max-height:500px;opacity:1;padding:15px 0 20px;"' : ''}>
              <p>${escapeHtml(faq.answer)}</p>
            </div>
          </div>`
}).join('')

// Build steps
const steps = s.steps.map((step, i) => `
          <div class="step-card">
            <div class="step-number">${i + 1}</div>
            <h3 class="step-title">${escapeHtml(step.title)}</h3>
            <p class="step-desc">${escapeHtml(step.description)}</p>
          </div>`).join('')

// Build benefits
const benefits = s.benefits.map((benefit, i) => {
  const icon = [svgIcon('lightning'), svgIcon('mobile'), svgIcon('dollar')][i]
  return `
          <div class="benefit-card">
            <div class="benefit-icon">${icon}</div>
            <h3 class="benefit-title">${escapeHtml(benefit.title)}</h3>
            <p class="benefit-desc">${escapeHtml(benefit.description)}</p>
          </div>`
}).join('')

const html = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>AI Website Generators - Build Any Site in Seconds | Strikingly</title>
    <meta name="description" content="Browse Strikingly's AI-powered website generators. Choose one for your industry, goal, or site type and create a website in seconds, no code required." />
    <link rel="canonical" href="https://www.strikingly.com/generators" />
    <meta property="og:title" content="AI Website Generators - Build Any Site in Seconds | Strikingly" />
    <meta property="og:description" content="Browse Strikingly's AI-powered website generators. Choose one for your industry, goal, or site type and create a website in seconds." />
    <meta property="og:url" content="https://www.strikingly.com/generators" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@700&family=Open+Sans:wght@400;600&display=swap" rel="stylesheet" />
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Strikingly",
          "item": "https://www.strikingly.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "AI Generators",
          "item": "https://www.strikingly.com/generators"
        }
      ]
    }
    </script>
    <style>
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth}
body{font-family:'Open Sans',-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;font-size:14px;line-height:1.5;color:#636972;background-color:#FFFFFF;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}
h1,h2,h3,h4,h5,h6{font-family:'Josefin Sans','Poppins',sans-serif;font-weight:700;text-transform:uppercase;line-height:1.2;color:#4B5056}
a{color:inherit;text-decoration:none}
ul,ol{list-style:none}
button{font-family:inherit;cursor:pointer;border:none;background:none}
input{font-family:inherit}
.container{max-width:1200px;margin:0 auto;padding:0 20px}
.section{padding:40px 0}
.section-heading{font-size:28px;margin-bottom:10px;color:#4B5056}
.section-subheading{font-size:14px;color:#636972;margin-bottom:30px}
.btn{display:inline-flex;align-items:center;justify-content:center;height:36px;padding:9px 15px;border-radius:4px;font-family:'Josefin Sans','Poppins',sans-serif;font-weight:700;font-size:14px;text-transform:uppercase;text-decoration:none;transition:all .15s ease;white-space:nowrap}
.btn:focus-visible{outline:2px solid #8159BB;outline-offset:2px}
.btn-primary{background:linear-gradient(135deg,#7671FF,#CB0C9F);color:#FFFFFF;border:none}
.btn-primary:hover{opacity:.9;box-shadow:0 2px 8px rgba(118,113,255,.3)}
.btn-ghost{background:transparent;color:#8159BB;border:1px solid #8159BB}
.btn-ghost:hover{background:rgba(129,89,187,.05)}
.btn-large{height:44px;padding:12px 24px;font-size:14px}
.btn-small{height:32px;padding:6px 12px;font-size:12px}
.btn-show-all{margin-top:20px}
.tag{display:inline-block;padding:2px 6px;border-radius:3px;font-family:'Josefin Sans','Poppins',sans-serif;font-size:11px;font-weight:700;text-transform:uppercase}
.tag-ghost{color:#8159BB;border:1px solid #8159BB;background:transparent}
.top-bar{background:#FFFFFF;border-bottom:1px solid #E2E4E7;height:48px;display:flex;align-items:center}
.top-bar-logo{font-family:'Josefin Sans','Poppins',sans-serif;font-weight:700;font-size:16px;color:#2E2E2F;text-transform:lowercase;letter-spacing:.5px}
.top-bar-logo:hover{color:#8159BB}
.breadcrumb{padding:15px 20px}
.breadcrumb ol{display:flex;align-items:center;gap:8px;font-size:13px;color:#636972}
.breadcrumb ol li+li::before{content:'>';margin-inline-start:8px;color:#8159BB}
.breadcrumb ol li a{color:#8159BB}
.breadcrumb ol li a:hover{text-decoration:underline}
.breadcrumb ol li[aria-current='page']{color:#636972}
.hero{padding:60px 0 80px;background:linear-gradient(180deg,rgba(129,89,187,.04) 0%,#FFFFFF 100%)}
.hero-grid{display:grid;grid-template-columns:1fr 1fr;gap:40px;align-items:center}
.hero-content{order:1}
.hero-visual{order:2;display:flex;justify-content:center;align-items:center}
.hero-illustration{max-width:100%;height:auto}
.hero h1{margin-bottom:15px}
.hero-h1-line1{display:block;font-size:44px;color:#2E2E2F}
.hero-h1-line2{display:block;font-size:44px;background:linear-gradient(135deg,#7671FF,#CB0C9F);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}
.hero-subheadline{font-size:16px;color:#636972;margin-bottom:25px;max-width:480px;line-height:1.6}
.hero-ctas{display:flex;gap:10px;flex-wrap:wrap}
.featured-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px}
.featured-card{display:flex;flex-direction:column;gap:8px;padding:20px;background:#FFFFFF;border:1px solid #C6C9CD;border-radius:3px;transition:all .15s ease}
.featured-card:hover{box-shadow:0 2px 8px rgba(0,0,0,.08);border-color:#8159BB}
.featured-card:focus-visible{outline:2px solid #8159BB;outline-offset:2px}
.featured-card-name{font-family:'Josefin Sans','Poppins',sans-serif;font-weight:700;font-size:15px;color:#2E2E2F;text-transform:uppercase}
.featured-card-desc{font-size:13px;color:#636972;line-height:1.4}
.category-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px}
.category-card{display:flex;flex-direction:column;align-items:flex-start;gap:8px;padding:25px 20px;background:#FFFFFF;border:1px solid #C6C9CD;border-radius:3px;transition:all .15s ease;position:relative}
.category-card:hover{box-shadow:0 2px 8px rgba(0,0,0,.08);border-color:#8159BB}
.category-card:focus-visible{outline:2px solid #8159BB;outline-offset:2px}
.category-card-icon{margin-bottom:5px}
.category-card-name{font-family:'Josefin Sans','Poppins',sans-serif;font-weight:700;font-size:16px;color:#2E2E2F}
.category-card-desc{font-size:13px;color:#636972;line-height:1.4}
.category-card-arrow{position:absolute;top:20px;right:20px;color:#8159BB;transition:transform .15s ease}
.category-card:hover .category-card-arrow{transform:translateX(3px)}
.all-generators{background:#F4F6F8}
.search-wrapper{margin-bottom:30px}
.search-input-wrapper{position:relative;max-width:480px}
.search-icon{position:absolute;left:12px;top:50%;transform:translateY(-50%);color:#636972;pointer-events:none}
.search-input{width:100%;height:44px;padding:0 12px 0 40px;border:1px solid #C6C9CD;border-radius:4px;font-size:14px;color:#2E2E2F;background:#FFFFFF}
.search-input:focus{outline:none;border-color:#8159BB;box-shadow:0 0 0 2px rgba(129,89,187,.15)}
.search-input::placeholder{color:#9CA3AF}
.search-results-info{margin-top:10px;font-size:13px;color:#636972}
.search-empty-state{margin-top:15px;padding:20px;background:#FFFFFF;border:1px solid #C6C9CD;border-radius:3px}
.search-empty-title{font-family:'Josefin Sans','Poppins',sans-serif;font-weight:700;font-size:16px;color:#2E2E2F;margin-bottom:5px}
.search-empty-desc{font-size:13px;color:#636972;margin-bottom:15px}
.search-empty-state .btn{margin-inline-end:10px;margin-bottom:5px}
.generators-subsection{margin-bottom:30px}
.subsection-heading{font-size:20px;margin-bottom:5px;color:#4B5056}
.subsection-desc{font-size:13px;color:#636972;margin-bottom:15px}
.generators-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:15px}
.generator-card{display:flex;flex-direction:column;gap:5px;padding:15px;background:#FFFFFF;border:1px solid #C6C9CD;border-radius:3px;transition:all .15s ease}
.generator-card:hover{box-shadow:0 2px 8px rgba(0,0,0,.08);border-color:#8159BB}
.generator-card:focus-visible{outline:2px solid #8159BB;outline-offset:2px}
.generator-card-name{font-family:'Josefin Sans','Poppins',sans-serif;font-weight:700;font-size:14px;color:#2E2E2F}
.generator-card-desc{font-size:12px;color:#636972;line-height:1.4}
.how-it-works{background:#FFFFFF}
.steps-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:30px}
.step-card{text-align:center}
.step-number{width:40px;height:40px;border-radius:50%;background:linear-gradient(135deg,#7671FF,#CB0C9F);color:#FFFFFF;font-family:'Josefin Sans','Poppins',sans-serif;font-weight:700;font-size:18px;display:flex;align-items:center;justify-content:center;margin:0 auto 15px}
.step-title{font-size:16px;margin-bottom:8px;color:#2E2E2F}
.step-desc{font-size:13px;color:#636972;line-height:1.5}
.why-strikingly{background:#F4F6F8}
.benefits-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:30px}
.benefit-card{text-align:center}
.benefit-icon{margin-bottom:15px;display:flex;justify-content:center}
.benefit-title{font-size:16px;margin-bottom:8px;color:#2E2E2F}
.benefit-desc{font-size:13px;color:#636972;line-height:1.5}
.faq{background:#FFFFFF}
.faq-list{max-width:800px}
.faq-item{border-bottom:1px solid #E2E4E7}
.faq-item:last-child{border-bottom:none}
.faq-question{display:flex;align-items:center;justify-content:space-between;width:100%;padding:18px 0;font-family:'Josefin Sans','Poppins',sans-serif;font-weight:700;font-size:15px;color:#2E2E2F;text-align:left;text-transform:uppercase}
.faq-question:hover{color:#8159BB}
.faq-question:focus-visible{outline:2px solid #8159BB;outline-offset:2px;border-radius:4px}
.faq-answer{overflow:hidden;transition:max-height .3s ease,opacity .2s ease,padding .3s ease}
.faq-answer p{font-size:14px;color:#636972;line-height:1.6}
.closing-cta{background:#FFFFFF;text-align:center;padding:60px 0}
.closing-cta-container{display:flex;flex-direction:column;align-items:center;gap:15px}
.closing-heading{font-size:32px;color:#2E2E2F}
.closing-sub{font-size:16px;color:#636972;max-width:480px}
.footer{background:#F4F6F8;border-top:1px solid #E2E4E7;padding:40px 0 20px}
.footer-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:30px;margin-bottom:30px}
.footer-col h4{font-size:13px;margin-bottom:15px;color:#4B5056}
.footer-col ul li{margin-bottom:8px}
.footer-col ul li a{font-size:13px;color:#636972}
.footer-col ul li a:hover{color:#8159BB;text-decoration:underline}
.footer-bottom{padding-top:20px;border-top:1px solid #E2E4E7;text-align:center}
.footer-bottom p{font-size:12px;color:#9CA3AF}
@media(max-width:1024px){.hero-h1-line1,.hero-h1-line2{font-size:36px}.featured-grid{grid-template-columns:repeat(2,1fr)}.category-grid{grid-template-columns:repeat(2,1fr)}.generators-grid{grid-template-columns:repeat(2,1fr)}.footer-grid{grid-template-columns:repeat(2,1fr)}}
@media(max-width:768px){.section{padding:30px 0}.section-heading{font-size:24px}.hero{padding:40px 0 50px}.hero-grid{grid-template-columns:1fr;gap:30px}.hero-h1-line1,.hero-h1-line2{font-size:28px}.hero-subheadline{font-size:14px}.hero-ctas{flex-direction:column}.hero-ctas .btn{width:100%}.featured-grid{grid-template-columns:1fr}.category-grid{grid-template-columns:1fr}.generators-grid{grid-template-columns:1fr}.steps-grid{grid-template-columns:1fr;gap:25px}.benefits-grid{grid-template-columns:1fr;gap:25px}.footer-grid{grid-template-columns:1fr;gap:20px}.closing-heading{font-size:24px}.closing-sub{font-size:14px}}
a:focus-visible,button:focus-visible,input:focus-visible{outline:2px solid #8159BB;outline-offset:2px}
@media(prefers-reduced-motion:reduce){html{scroll-behavior:auto}.faq-answer{transition:none}.category-card-arrow{transition:none}.btn,.featured-card,.category-card,.generator-card{transition:none}}
.faq-chevron{transition:transform .2s ease}
.faq-question[aria-expanded="true"] .faq-chevron{transform:rotate(180deg)}
    </style>
  </head>
  <body>
    <header class="top-bar" role="banner">
      <div class="container">
        <a href="/" class="top-bar-logo" aria-label="Strikingly Home">${escapeHtml(s.logo)}</a>
      </div>
    </header>

    <nav class="breadcrumb container" aria-label="Breadcrumb">
      <ol>
        <li><a href="/">${escapeHtml(s.breadcrumbHome)}</a></li>
        <li aria-current="page">${escapeHtml(s.breadcrumbCurrent)}</li>
      </ol>
    </nav>

    <main>
      <section class="hero">
        <div class="container hero-grid">
          <div class="hero-content">
            <h1>
              <span class="hero-h1-line1">${escapeHtml(s.heroH1Line1)}</span>
              <span class="hero-h1-line2">${escapeHtml(s.heroH1Line2)}</span>
            </h1>
            <p class="hero-subheadline">${escapeHtml(s.heroSubheadline)}</p>
            <div class="hero-ctas">
              <a href="/s/ai_site_builder" class="btn btn-primary btn-large">${escapeHtml(s.heroCtaPrimary)}</a>
              <a href="#all-generators" class="btn btn-ghost">${escapeHtml(s.heroCtaSecondary)}</a>
            </div>
          </div>
          <div class="hero-visual">${heroIllustration}</div>
        </div>
      </section>

      <section class="section featured">
        <div class="container">
          <h2 class="section-heading">${escapeHtml(s.featuredHeading)}</h2>
          <p class="section-subheading">${escapeHtml(s.featuredSubheading)}</p>
          <div class="featured-grid">${featuredCards}
          </div>
        </div>
      </section>

      <section class="section browse-categories">
        <div class="container">
          <h2 class="section-heading">${escapeHtml(s.browseHeading)}</h2>
          <div class="category-grid">${categoryCards}
          </div>
        </div>
      </section>

      <section class="section all-generators" id="all-generators">
        <div class="container">
          <h2 class="section-heading">${escapeHtml(s.allGeneratorsHeading)}</h2>
          <p class="section-subheading">${escapeHtml(s.allGeneratorsSubheading)}</p>
          <div class="search-wrapper">
            <div class="search-input-wrapper">
              <span class="search-icon" aria-hidden="true">${svgIcon('search')}</span>
              <input type="search" class="search-input" id="generator-search" placeholder="${escapeHtml(s.searchPlaceholder)}" aria-label="${escapeHtml(s.searchLabel)}" />
            </div>
            <div class="search-results-info" id="search-results-info" aria-live="polite"></div>
          </div>${subsections}
        </div>
      </section>

      <section class="section how-it-works">
        <div class="container">
          <h2 class="section-heading">${escapeHtml(s.howItWorksHeading)}</h2>
          <div class="steps-grid">${steps}
          </div>
        </div>
      </section>

      <section class="section why-strikingly">
        <div class="container">
          <h2 class="section-heading">${escapeHtml(s.whyStrikinglyHeading)}</h2>
          <div class="benefits-grid">${benefits}
          </div>
        </div>
      </section>

      <section class="section faq">
        <div class="container">
          <h2 class="section-heading">${escapeHtml(s.faqHeading)}</h2>
          <div class="faq-list">${faqItems}
          </div>
        </div>
      </section>

      <section class="section closing-cta">
        <div class="container closing-cta-container">
          <h2 class="closing-heading">${escapeHtml(s.closingHeading)}</h2>
          <p class="closing-sub">${escapeHtml(s.closingSub)}</p>
          <a href="/s/ai_site_builder" class="btn btn-primary btn-large">${escapeHtml(s.closingCta)}</a>
        </div>
      </section>
    </main>

    <footer class="footer" role="contentinfo">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-col">
            <h4>${escapeHtml(s.footerProduct)}</h4>
            <ul>
              <li><a href="/pricing">${escapeHtml(s.footerPricing)}</a></li>
              <li><a href="/templates">${escapeHtml(s.footerTemplates)}</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>${escapeHtml(s.footerCompany)}</h4>
            <ul>
              <li><a href="/about">${escapeHtml(s.footerAbout)}</a></li>
              <li><a href="/blog">${escapeHtml(s.footerBlog)}</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>${escapeHtml(s.footerSupport)}</h4>
            <ul>
              <li><a href="/support">${escapeHtml(s.footerHelpCenter)}</a></li>
              <li><a href="/support">${escapeHtml(s.footerContact)}</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>${escapeHtml(s.footerLegal)}</h4>
            <ul>
              <li><a href="/terms">${escapeHtml(s.footerTerms)}</a></li>
              <li><a href="/privacy">${escapeHtml(s.footerPrivacy)}</a></li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <p>${escapeHtml(s.footerCopyright(year))}</p>
        </div>
      </div>
    </footer>

    <script>
(function() {
  'use strict';

  // FAQ Accordion
  document.querySelectorAll('.faq-question').forEach(function(btn) {
    btn.addEventListener('click', function() {
      var expanded = this.getAttribute('aria-expanded') === 'true';
      var answerId = this.getAttribute('aria-controls');
      var answer = document.getElementById(answerId);
      this.setAttribute('aria-expanded', String(!expanded));
      if (!expanded) {
        answer.style.maxHeight = '500px';
        answer.style.opacity = '1';
        answer.style.padding = '15px 0 20px';
      } else {
        answer.style.maxHeight = '0';
        answer.style.opacity = '0';
        answer.style.padding = '0';
      }
    });
  });

  // Show All / Show Less toggles
  document.querySelectorAll('.btn-show-all').forEach(function(btn) {
    btn.addEventListener('click', function() {
      var categoryId = this.getAttribute('data-category');
      var total = parseInt(this.getAttribute('data-total'), 10);
      var grid = document.getElementById('generators-grid-' + categoryId);
      var cards = grid.querySelectorAll('.generator-card');
      var isExpanded = this.getAttribute('aria-expanded') === 'true';
      var initialVisible = 6;

      if (!isExpanded) {
        cards.forEach(function(card) { card.style.display = ''; });
        this.setAttribute('aria-expanded', 'true');
        this.textContent = 'Show less';
      } else {
        cards.forEach(function(card, i) {
          card.style.display = i < initialVisible ? '' : 'none';
        });
        this.setAttribute('aria-expanded', 'false');
        this.textContent = 'Show all ' + total + ' generators';
      }
    });
  });

  // Progressive collapse on load (hide extras after page renders)
  document.querySelectorAll('.btn-show-all').forEach(function(btn) {
    var categoryId = btn.getAttribute('data-category');
    var grid = document.getElementById('generators-grid-' + categoryId);
    var cards = grid.querySelectorAll('.generator-card');
    var initialVisible = 6;
    if (cards.length > initialVisible) {
      cards.forEach(function(card, i) {
        if (i >= initialVisible) {
          card.style.display = 'none';
        }
      });
    }
  });

  // Search filter
  var searchInput = document.getElementById('generator-search');
  var resultsInfo = document.getElementById('search-results-info');
  var allSubsections = document.querySelectorAll('.generators-subsection');

  // Build search index
  var searchIndex = [];
  allSubsections.forEach(function(subsection) {
    var cards = subsection.querySelectorAll('.generator-card');
    cards.forEach(function(card) {
      var name = card.querySelector('.generator-card-name').textContent.toLowerCase();
      var desc = card.querySelector('.generator-card-desc').textContent.toLowerCase();
      var heading = subsection.querySelector('.subsection-heading').textContent.toLowerCase();
      searchIndex.push({ card: card, name: name, desc: desc, category: heading, subsection: subsection });
    });
  });

  searchInput.addEventListener('input', function() {
    var query = this.value.toLowerCase().trim();

    if (!query) {
      resultsInfo.innerHTML = '';
      allSubsections.forEach(function(subsection) {
        subsection.style.display = '';
        var cards = subsection.querySelectorAll('.generator-card');
        cards.forEach(function(card) { card.style.display = ''; });
        var showAllBtn = subsection.querySelector('.btn-show-all');
        if (showAllBtn) {
          var total = parseInt(showAllBtn.getAttribute('data-total'), 10);
          var initialVisible = 6;
          cards.forEach(function(card, i) {
            card.style.display = i < initialVisible ? '' : 'none';
          });
          showAllBtn.setAttribute('aria-expanded', 'false');
          showAllBtn.textContent = 'Show all ' + total + ' generators';
        }
      });
      return;
    }

    var matchCount = 0;
    var matchesBySubsection = {};

    searchIndex.forEach(function(item) {
      var isMatch = item.name.indexOf(query) !== -1 || item.desc.indexOf(query) !== -1 || item.category.indexOf(query) !== -1;
      if (isMatch) {
        matchCount++;
        var subId = item.subsection.id;
        if (!matchesBySubsection[subId]) matchesBySubsection[subId] = [];
        matchesBySubsection[subId].push(item.card);
      }
    });

    resultsInfo.innerHTML = '<span>' + matchCount + ' generator' + (matchCount !== 1 ? 's' : '') + ' match</span>';

    allSubsections.forEach(function(subsection) {
      var subId = subsection.id;
      var matches = matchesBySubsection[subId] || [];
      var cards = subsection.querySelectorAll('.generator-card');
      var showAllBtn = subsection.querySelector('.btn-show-all');

      if (matches.length === 0) {
        subsection.style.display = 'none';
      } else {
        subsection.style.display = '';
        cards.forEach(function(card) {
          card.style.display = matches.indexOf(card) !== -1 ? '' : 'none';
        });
        if (showAllBtn) {
          showAllBtn.style.display = 'none';
        }
      }
    });

    if (matchCount === 0) {
      resultsInfo.innerHTML += '<div class="search-empty-state"><p class="search-empty-title">No generators found</p><p class="search-empty-desc">Can\\'t find it? Start with our AI builder.</p><a href="/s/ai_site_builder" class="btn btn-primary btn-small">Start with AI builder</a><button type="button" class="btn btn-ghost btn-small" id="clear-search-btn">Clear search</button></div>';
      document.getElementById('clear-search-btn').addEventListener('click', function() {
        searchInput.value = '';
        searchInput.dispatchEvent(new Event('input'));
        searchInput.focus();
      });
    } else {
      allSubsections.forEach(function(subsection) {
        var showAllBtn = subsection.querySelector('.btn-show-all');
        if (showAllBtn) showAllBtn.style.display = '';
      });
    }
  });
})();
    </script>
  </body>
</html>`

writeFileSync('/workspace/my-app/dist/index.html', html)
console.log('Static HTML generated successfully')
