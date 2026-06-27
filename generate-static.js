// Standalone script to generate a fully static index.html
// Run: node generate-static.js
// This produces dist/index.html with all content in the source.

import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const distDir = resolve(__dirname, 'dist');
if (!existsSync(distDir)) mkdirSync(distDir, { recursive: true });

// Always read from the pristine template (never modified by this script)
const templatePath = resolve(__dirname, 'index.template.html');
if (!existsSync(templatePath)) {
  // On first run, save the original index.html as the template
  const originalHtml = readFileSync(resolve(__dirname, 'index.html'), 'utf-8');
  writeFileSync(templatePath, originalHtml, 'utf-8');
  console.log('Saved pristine template to index.template.html');
}
const template = readFileSync(templatePath, 'utf-8');

// Instead of SSR, we inject the full pre-rendered HTML content.
// This static content mirrors exactly what React would render.
import strings from './src/strings.js';
import { featuredGenerators, categoryKeys, directoryEntries } from './src/data.js';

const t = strings.en;

function esc(str) {
  return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

const catIllusSvgs = {
  websites: `<svg aria-hidden="true" width="48" height="32" viewBox="0 0 48 32" fill="none"><rect x="2" y="2" width="44" height="28" rx="3" stroke="#8159BB" stroke-width="1"/><line x1="2" y1="10" x2="46" y2="10" stroke="#8159BB" stroke-width="0.8"/><circle cx="8" cy="6" r="1.5" fill="#8159BB"/><circle cx="12" cy="6" r="1.5" fill="#8159BB"/><circle cx="16" cy="6" r="1.5" fill="#8159BB"/></svg>`,
  'landing-pages': `<svg aria-hidden="true" width="48" height="32" viewBox="0 0 48 32" fill="none"><rect x="8" y="1" width="32" height="30" rx="3" stroke="#8159BB" stroke-width="1"/><rect x="12" y="5" width="24" height="10" rx="2" fill="#F4F6F8" stroke="#E2E4E7" stroke-width="0.8"/><rect x="12" y="18" width="24" height="2.5" rx="1.25" fill="#E2E4E7"/><rect x="12" y="22.5" width="16" height="2.5" rx="1.25" fill="#E2E4E7"/></svg>`,
  portfolios: `<svg aria-hidden="true" width="48" height="32" viewBox="0 0 48 32" fill="none"><rect x="2" y="4" width="14" height="10" rx="2" stroke="#8159BB" stroke-width="1"/><rect x="18" y="4" width="14" height="10" rx="2" stroke="#8159BB" stroke-width="1"/><rect x="34" y="4" width="12" height="10" rx="2" stroke="#8159BB" stroke-width="1"/><rect x="2" y="18" width="14" height="10" rx="2" stroke="#8159BB" stroke-width="1"/><rect x="18" y="18" width="14" height="10" rx="2" stroke="#8159BB" stroke-width="1"/><rect x="34" y="18" width="12" height="10" rx="2" stroke="#8159BB" stroke-width="1"/></svg>`,
  blogs: `<svg aria-hidden="true" width="48" height="32" viewBox="0 0 48 32" fill="none"><rect x="3" y="2" width="42" height="28" rx="2" stroke="#8159BB" stroke-width="1"/><line x1="8" y1="8" x2="40" y2="8" stroke="#E2E4E7" stroke-width="1.5"/><line x1="8" y1="13" x2="35" y2="13" stroke="#E2E4E7" stroke-width="1.5"/><line x1="8" y1="18" x2="38" y2="18" stroke="#E2E4E7" stroke-width="1.5"/><line x1="8" y1="23" x2="28" y2="23" stroke="#E2E4E7" stroke-width="1.5"/></svg>`,
  stores: `<svg aria-hidden="true" width="48" height="32" viewBox="0 0 48 32" fill="none"><path d="M5 8h38l-3 20H8L5 8z" stroke="#8159BB" stroke-width="1"/><circle cx="14" cy="14" r="3" stroke="#8159BB" stroke-width="1"/><path d="M24 18h14" stroke="#E2E4E7" stroke-width="1.5"/><path d="M24 22h10" stroke="#E2E4E7" stroke-width="1.5"/></svg>`,
  'link-in-bio': `<svg aria-hidden="true" width="48" height="32" viewBox="0 0 48 32" fill="none"><circle cx="24" cy="10" r="4" stroke="#8159BB" stroke-width="1"/><path d="M14 28c0-5.523 4.477-10 10-10s10 4.477 10 10" stroke="#8159BB" stroke-width="1"/><circle cx="24" cy="17" r="9" stroke="#E2E4E7" stroke-width="0.8" stroke-dasharray="3 2"/></svg>`,
};

const browseIconSvgs = {
  websites: `<svg aria-hidden="true" width="40" height="40" viewBox="0 0 40 40" fill="none"><rect x="3" y="6" width="34" height="28" rx="3" stroke="#8159BB" stroke-width="1.5"/><line x1="3" y1="14" x2="37" y2="14" stroke="#8159BB" stroke-width="1"/><circle cx="8" cy="10" r="1.5" fill="#8159BB"/><circle cx="12" cy="10" r="1.5" fill="#8159BB"/><circle cx="16" cy="10" r="1.5" fill="#8159BB"/></svg>`,
  'landing-pages': `<svg aria-hidden="true" width="40" height="40" viewBox="0 0 40 40" fill="none"><rect x="6" y="4" width="28" height="32" rx="3" stroke="#8159BB" stroke-width="1.5"/><rect x="10" y="10" width="20" height="10" rx="2" fill="#F4F6F8" stroke="#E2E4E7" stroke-width="1"/><rect x="10" y="24" width="20" height="3" rx="1.5" fill="#E2E4E7"/><rect x="10" y="29" width="14" height="3" rx="1.5" fill="#E2E4E7"/></svg>`,
  portfolios: `<svg aria-hidden="true" width="40" height="40" viewBox="0 0 40 40" fill="none"><rect x="4" y="8" width="14" height="12" rx="2" stroke="#8159BB" stroke-width="1.5"/><rect x="22" y="8" width="14" height="12" rx="2" stroke="#8159BB" stroke-width="1.5"/><rect x="4" y="24" width="14" height="12" rx="2" stroke="#8159BB" stroke-width="1.5"/><rect x="22" y="24" width="14" height="12" rx="2" stroke="#8159BB" stroke-width="1.5"/></svg>`,
  blogs: `<svg aria-hidden="true" width="40" height="40" viewBox="0 0 40 40" fill="none"><rect x="5" y="4" width="30" height="32" rx="2" stroke="#8159BB" stroke-width="1.5"/><line x1="10" y1="12" x2="30" y2="12" stroke="#E2E4E7" stroke-width="1.5"/><line x1="10" y1="17" x2="25" y2="17" stroke="#E2E4E7" stroke-width="1.5"/><line x1="10" y1="22" x2="28" y2="22" stroke="#E2E4E7" stroke-width="1.5"/><line x1="10" y1="27" x2="20" y2="27" stroke="#E2E4E7" stroke-width="1.5"/></svg>`,
  stores: `<svg aria-hidden="true" width="40" height="40" viewBox="0 0 40 40" fill="none"><path d="M5 10h30l-2 20H7L5 10z" stroke="#8159BB" stroke-width="1.5"/><circle cx="14" cy="16" r="3" stroke="#8159BB" stroke-width="1.5"/><path d="M22 20.5h8" stroke="#E2E4E7" stroke-width="1.5"/><path d="M22 24.5h6" stroke="#E2E4E7" stroke-width="1.5"/></svg>`,
  'link-in-bio': `<svg aria-hidden="true" width="40" height="40" viewBox="0 0 40 40" fill="none"><circle cx="20" cy="13" r="4" stroke="#8159BB" stroke-width="1.5"/><path d="M12 30c0-4.418 3.582-8 8-8s8 3.582 8 8" stroke="#8159BB" stroke-width="1.5"/><circle cx="20" cy="20" r="8" stroke="#E2E4E7" stroke-width="1" stroke-dasharray="3 2"/></svg>`,
};

// Build static HTML mirroring React components
function buildStaticHtml() {
  return `<!-- STATIC PRE-RENDER: all content visible without JavaScript -->

<!-- TopBar -->
<header class="bg-white border-b border-[#E2E4E7] sticky top-0 z-50">
  <div class="max-w-[1200px] mx-auto px-5 h-[50px] flex items-center">
    <a href="/" class="font-heading font-bold text-sm uppercase tracking-wide text-[#2E2E2F] no-underline hover:text-brand-purple transition-colors">${esc(t.logo)}</a>
  </div>
</header>

<main>
  <!-- Breadcrumb -->
  <nav aria-label="Breadcrumb" class="max-w-[1200px] mx-auto px-5 py-[10px]">
    <ol class="flex items-center gap-1 m-0 p-0 list-none text-[13px] font-body text-[#636972]">
      <li><a href="/" class="text-[#636972] no-underline hover:text-brand-purple transition-colors">${esc(t.breadcrumbHome)}</a></li>
      <li aria-hidden="true" class="select-none">&gt;</li>
      <li class="text-[#636972]">${esc(t.breadcrumbGenerators)}</li>
    </ol>
  </nav>

  <!-- Hero -->
  <section class="relative overflow-hidden" style="background: radial-gradient(ellipse 70% 60% at 30% 40%, rgba(118,113,255,0.06), rgba(203,12,159,0.03) 50%, transparent 70%)">
    <div class="max-w-[1200px] mx-auto px-5 py-[60px] md:py-[80px] flex flex-col md:flex-row items-center gap-10">
      <div class="flex-1 text-center md:text-start">
        <h1 class="m-0 mb-5">
          <span class="block text-[32px] md:text-[48px] font-heading font-bold uppercase leading-[1.2] text-[#2E2E2F]">${esc(t.heroLine1)}</span>
          <span class="block text-[32px] md:text-[48px] font-heading font-bold uppercase leading-[1.2] ai-gradient-text">${esc(t.heroLine2)}</span>
        </h1>
        <p class="text-[14px] md:text-[16px] leading-[1.5] text-[#636972] max-w-[480px] mb-[30px]">${esc(t.heroSub)}</p>
        <div class="flex flex-col sm:flex-row gap-[10px] justify-center md:justify-start">
          <a href="/s/ai_site_builder" class="btn-primary btn-lg">${esc(t.heroPrimaryCta)}</a>
          <a href="#all-generators" class="btn-ghost btn-lg">${esc(t.heroSecondaryCta)}</a>
        </div>
      </div>
      <div class="flex-1 flex justify-center">
        <svg aria-hidden="true" width="420" height="300" viewBox="0 0 420 300" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-[420px] h-auto">
          <rect x="40" y="20" width="340" height="240" rx="6" stroke="#8159BB" stroke-width="1.5" fill="white"/>
          <rect x="40" y="20" width="340" height="40" rx="6" fill="url(#heroGrad)"/>
          <rect x="40" y="40" width="340" height="20" fill="url(#heroGrad)"/>
          <circle cx="65" cy="40" r="5" fill="white" opacity="0.8"/>
          <circle cx="80" cy="40" r="5" fill="white" opacity="0.5"/>
          <circle cx="95" cy="40" r="5" fill="white" opacity="0.3"/>
          <rect x="60" y="80" width="140" height="8" rx="4" fill="#E2E4E7"/>
          <rect x="60" y="96" width="200" height="8" rx="4" fill="#E2E4E7"/>
          <rect x="60" y="112" width="100" height="8" rx="4" fill="#E2E4E7"/>
          <rect x="60" y="140" width="300" height="90" rx="4" fill="#F4F6F8"/>
          <rect x="80" y="155" width="120" height="6" rx="3" fill="#C6C9CD"/>
          <rect x="80" y="170" width="260" height="6" rx="3" fill="#E2E4E7"/>
          <rect x="80" y="185" width="200" height="6" rx="3" fill="#E2E4E7"/>
          <rect x="80" y="200" width="160" height="6" rx="3" fill="#E2E4E7"/>
          <rect x="280" y="155" width="60" height="16" rx="8" fill="#8159BB" opacity="0.2"/>
          <defs><linearGradient id="heroGrad" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#7671FF"/><stop offset="1" stop-color="#CB0C9F"/></linearGradient></defs>
        </svg>
      </div>
    </div>
  </section>

  <!-- Featured Generators -->
  <section class="max-w-[1200px] mx-auto px-5 py-10">
    <h2 class="text-[26px] md:text-[32px] font-heading font-bold text-[#4B5056] mb-[5px]">${esc(t.featuredHeading)}</h2>
    <p class="text-[14px] text-[#636972] mb-[30px]">${esc(t.featuredSub)}</p>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      ${featuredGenerators.map(g => `
      <a href="/generators/${esc(g.slug)}" class="card flex flex-col gap-[10px]">
        <span class="tag self-start">${esc(g.category)}</span>
        <span class="font-heading font-bold text-[16px] text-[#2E2E2F] leading-[1.2]">${esc(g.name)}</span>
        <span class="text-[14px] text-[#636972] leading-[1.5]">${esc(g.desc)}</span>
      </a>`).join('')}
    </div>
  </section>

  <!-- Browse by Category -->
  <section class="max-w-[1200px] mx-auto px-5 py-10">
    <h2 class="text-[26px] md:text-[32px] font-heading font-bold text-[#4B5056] mb-[30px]">${esc(t.browseHeading)}</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      ${categoryKeys.map(catKey => {
        const cat = t.categories[catKey];
        return `
      <a href="/generators#${esc(catKey)}" class="card flex items-center gap-4 group">
        <div class="flex-shrink-0">${browseIconSvgs[catKey]}</div>
        <div class="flex-1 min-w-0">
          <span class="font-heading font-bold text-[14px] text-[#2E2E2F] block mb-[2px]">${esc(cat.name)}</span>
          <span class="text-[13px] text-[#636972] leading-[1.5]">${esc(cat.desc)}</span>
        </div>
        <svg aria-hidden="true" width="20" height="20" viewBox="0 0 20 20" fill="none" class="flex-shrink-0 text-[#C6C9CD] group-hover:text-brand-purple transition-colors">
          <path d="M7 4l6 6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </a>`;
      }).join('')}
    </div>
  </section>

  <!-- All Generators -->
  <section id="all-generators" class="max-w-[1200px] mx-auto px-5 py-10">
    <h2 class="text-[26px] md:text-[32px] font-heading font-bold text-[#4B5056] mb-[5px]">${esc(t.allHeading)}</h2>
    <p class="text-[14px] text-[#636972] mb-[30px]">${esc(t.allSub)}</p>
    <div class="flex flex-wrap items-center gap-[10px] mb-[30px]">
      <div class="search-input-wrap">
        <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
          <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
        </svg>
        <input type="search" class="search-input" placeholder="${esc(t.searchPlaceholder)}" aria-label="${esc(t.searchLabel)}">
      </div>
    </div>

    ${categoryKeys.map(catKey => {
      const cat = t.categories[catKey];
      const entries = directoryEntries[catKey] || [];
      return `
    <section id="${esc(catKey)}" class="mb-10">
      <h3 class="text-[20px] md:text-[24px] font-heading font-bold text-[#4B5056] mb-[2px]">${esc(cat.name)}</h3>
      <p class="text-[14px] text-[#636972] mb-[20px]">${esc(cat.subdesc)}</p>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        ${entries.map(entry => `
        <a href="/generators/${esc(entry.slug)}" class="card flex flex-col gap-[8px]">
          <div class="mb-[4px]">${catIllusSvgs[catKey]}</div>
          <span class="font-heading font-bold text-[15px] text-[#2E2E2F] leading-[1.2]">${esc(entry.name)}</span>
          <span class="text-[13px] text-[#636972] leading-[1.5]">${esc(entry.name)} — ${esc(cat.desc)}</span>
        </a>`).join('')}
      </div>
    </section>`;
    }).join('')}
  </section>

  <!-- How It Works -->
  <section class="bg-[#F4F6F8] py-[60px]">
    <div class="max-w-[1200px] mx-auto px-5">
      <h2 class="text-[26px] md:text-[32px] font-heading font-bold text-[#4B5056] mb-[40px] text-center">${esc(t.howHeading)}</h2>
      <div class="flex flex-col md:flex-row gap-[30px]">
        ${[
          { title: t.howStep1Title, desc: t.howStep1Desc },
          { title: t.howStep2Title, desc: t.howStep2Desc },
          { title: t.howStep3Title, desc: t.howStep3Desc },
        ].map((step, i) => `
        <div class="flex-1 flex flex-col items-center text-center gap-[15px]">
          <div class="w-[48px] h-[48px] rounded-full flex items-center justify-center flex-shrink-0" style="background: linear-gradient(135deg, #7671FF, #CB0C9F)">
            <span class="font-heading font-bold text-[18px] text-white">${i + 1}</span>
          </div>
          <div>
            <span class="font-heading font-bold text-[14px] text-[#2E2E2F] block mb-[5px]">${esc(step.title)}</span>
            <p class="text-[14px] text-[#636972] leading-[1.5] m-0 max-w-[280px] mx-auto">${esc(step.desc)}</p>
          </div>
        </div>`).join('')}
      </div>
    </div>
  </section>

  <!-- Why Strikingly -->
  <section class="max-w-[1200px] mx-auto px-5 py-[60px]">
    <h2 class="text-[26px] md:text-[32px] font-heading font-bold text-[#4B5056] mb-[40px] text-center">${esc(t.whyHeading)}</h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-[30px]">
      ${[
        { icon: 'lightning', title: t.why1Title, desc: t.why1Desc },
        { icon: 'mobile', title: t.why2Title, desc: t.why2Desc },
        { icon: 'free', title: t.why3Title, desc: t.why3Desc },
      ].map(item => {
        const iconSvg = item.icon === 'lightning'
          ? `<svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M13 2L3 14h9l-2 8 10-12h-9l2-8z" stroke="#8159BB" stroke-width="1.5" stroke-linejoin="round"/></svg>`
          : item.icon === 'mobile'
          ? `<svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none"><rect x="5" y="2" width="14" height="20" rx="3" stroke="#8159BB" stroke-width="1.5"/><line x1="12" y1="18" x2="12" y2="18.01" stroke="#8159BB" stroke-width="2" stroke-linecap="round"/></svg>`
          : `<svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="#8159BB" stroke-width="1.5"/><path d="M8 12l3 3 5-6" stroke="#8159BB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
        return `
        <div class="flex flex-col items-center text-center gap-[15px]">
          <div class="w-[48px] h-[48px] flex items-center justify-center flex-shrink-0">${iconSvg}</div>
          <div>
            <span class="font-heading font-bold text-[14px] text-[#2E2E2F] block mb-[5px]">${esc(item.title)}</span>
            <p class="text-[14px] text-[#636972] leading-[1.5] m-0 max-w-[280px] mx-auto">${esc(item.desc)}</p>
          </div>
        </div>`;
      }).join('')}
    </div>
  </section>

  <!-- FAQ -->
  <section class="max-w-[760px] mx-auto px-5 py-[60px]">
    <h2 class="text-[26px] md:text-[32px] font-heading font-bold text-[#4B5056] mb-[30px]">${esc(t.faqHeading)}</h2>
    ${[
      { q: t.faqQ1, a: t.faqA1 },
      { q: t.faqQ2, a: t.faqA2 },
      { q: t.faqQ3, a: t.faqA3 },
      { q: t.faqQ4, a: t.faqA4 },
      { q: t.faqQ5, a: t.faqA5 },
      { q: t.faqQ6, a: t.faqA6 },
    ].map((faq, i) => `
    <div class="faq-item">
      <button type="button" class="faq-button" aria-expanded="${i === 0 ? 'true' : 'false'}" aria-controls="faq-panel-${i}">
        <span>${esc(faq.q)}</span>
        <span class="faq-icon"><svg aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 3v10M3 8h10" stroke="#8159BB" stroke-width="1.5" stroke-linecap="round"/></svg></span>
      </button>
      <div id="faq-panel-${i}" class="faq-panel${i === 0 ? ' open' : ''}" role="region">
        <div class="faq-panel-inner">${esc(faq.a)}</div>
      </div>
    </div>`).join('')}
  </section>

  <!-- Closing CTA -->
  <section class="text-center py-[60px] max-w-[1200px] mx-auto px-5">
    <h2 class="text-[26px] md:text-[32px] font-heading font-bold text-[#4B5056] mb-[10px]">${esc(t.closingHeading)}</h2>
    <p class="text-[14px] md:text-[16px] text-[#636972] mb-[30px] max-w-[500px] mx-auto">${esc(t.closingSub)}</p>
    <a href="/s/ai_site_builder" class="btn-primary btn-lg">${esc(t.closingCta)}</a>
  </section>
</main>

<!-- Footer -->
<footer class="bg-[#F4F6F8] py-[40px]">
  <div class="max-w-[1200px] mx-auto px-5">
    <div class="grid grid-cols-2 md:grid-cols-4 gap-[30px] mb-[30px]">
      <div><span class="font-heading font-bold text-[14px] text-[#2E2E2F] block mb-[15px]">${esc(t.logo)}</span></div>
      ${[
        { title: 'Product', links: [{ label: 'AI Site Builder', href: '/s/ai_site_builder' }, { label: 'Templates', href: '/templates' }, { label: 'Pricing', href: '/pricing' }] },
        { title: 'Company', links: [{ label: 'About', href: '/about' }, { label: 'Blog', href: '/blog' }] },
        { title: 'Support', links: [{ label: 'Help Center', href: '/support' }, { label: 'Contact', href: '/support' }] },
        { title: 'Legal', links: [{ label: 'Terms', href: '/terms' }, { label: 'Privacy', href: '/privacy' }] },
      ].map(col => `
      <div>
        <span class="font-heading font-bold text-[12px] text-[#2E2E2F] block mb-[12px]">${esc(col.title.toUpperCase())}</span>
        <ul class="list-none m-0 p-0 flex flex-col gap-[8px]">
          ${col.links.map(link => `<li><a href="${esc(link.href)}" class="text-[13px] text-[#636972] no-underline hover:text-brand-purple transition-colors">${esc(link.label)}</a></li>`).join('')}
        </ul>
      </div>`).join('')}
    </div>
    <div class="border-t border-[#E2E4E7] pt-[20px] text-center text-[12px] text-[#636972]">${esc(t.footerCopyright)}</div>
  </div>
</footer>`;
}

const staticHtml = buildStaticHtml();

// Inject into the template, replacing the root div
const finalHtml = template.replace(
  '<div id="root"></div>',
  `<div id="root">${staticHtml}</div>`
);

// Write to both dist/ and project root index.html
writeFileSync(resolve(distDir, 'index.html'), finalHtml);
writeFileSync(resolve(__dirname, 'index.html'), finalHtml);
console.log('Generated dist/index.html and index.html with full static content');
