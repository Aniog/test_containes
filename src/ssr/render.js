/**
 * Server-side render function for the GeneratorsHub page.
 * This produces static HTML that gets injected into the page source.
 * React hydrates on top of this HTML for interactivity.
 */
import { strings } from '../data/strings.en.js';
import { featuredGenerators, allGenerators, VISIBLE_COUNT } from '../data/generators.js';

const CATEGORY_KEYS = ['websites', 'landing-pages', 'portfolios', 'blogs', 'stores', 'link-in-bio'];

function esc(str) {
  return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

const categoryIllus = {
  'websites': `<svg aria-hidden="true" width="80" height="60" viewBox="0 0 120 90" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="10" width="100" height="70" rx="4" stroke="#8159BB" stroke-width="1.5" fill="none"/><line x1="10" y1="24" x2="110" y2="24" stroke="#8159BB" stroke-width="1.5"/><circle cx="18" cy="17" r="2.5" stroke="#8159BB" stroke-width="1"/><circle cx="26" cy="17" r="2.5" stroke="#8159BB" stroke-width="1"/><circle cx="34" cy="17" r="2.5" stroke="#8159BB" stroke-width="1"/><rect x="18" y="32" width="40" height="4" rx="1" fill="#E2E4E7"/><rect x="18" y="40" width="84" height="3" rx="1" fill="#E2E4E7"/><rect x="18" y="47" width="70" height="3" rx="1" fill="#E2E4E7"/><rect x="70" y="30" width="32" height="24" rx="2" stroke="#8159BB" stroke-width="1" fill="none"/><rect x="18" y="64" width="30" height="8" rx="2" fill="#8159BB" opacity="0.2"/></svg>`,
  'landing-pages': `<svg aria-hidden="true" width="80" height="60" viewBox="0 0 120 90" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="10" width="100" height="70" rx="4" stroke="#8159BB" stroke-width="1.5" fill="none"/><rect x="20" y="20" width="80" height="16" rx="2" fill="#8159BB" opacity="0.1"/><rect x="30" y="24" width="60" height="3" rx="1" fill="#8159BB" opacity="0.4"/><rect x="40" y="30" width="40" height="3" rx="1" fill="#8159BB" opacity="0.3"/><rect x="18" y="42" width="84" height="3" rx="1" fill="#E2E4E7"/><rect x="18" y="49" width="70" height="3" rx="1" fill="#E2E4E7"/><rect x="18" y="56" width="50" height="3" rx="1" fill="#E2E4E7"/><rect x="35" y="64" width="50" height="10" rx="3" fill="#8159BB" opacity="0.2"/></svg>`,
  'portfolios': `<svg aria-hidden="true" width="80" height="60" viewBox="0 0 120 90" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="10" width="100" height="70" rx="4" stroke="#8159BB" stroke-width="1.5" fill="none"/><rect x="18" y="20" width="36" height="26" rx="2" stroke="#8159BB" stroke-width="1" fill="#8159BB" opacity="0.08"/><rect x="60" y="20" width="42" height="12" rx="2" stroke="#8159BB" stroke-width="1" fill="#8159BB" opacity="0.08"/><rect x="60" y="36" width="42" height="10" rx="2" stroke="#8159BB" stroke-width="1" fill="#8159BB" opacity="0.08"/><rect x="18" y="52" width="84" height="3" rx="1" fill="#E2E4E7"/><rect x="18" y="59" width="60" height="3" rx="1" fill="#E2E4E7"/><rect x="18" y="66" width="40" height="3" rx="1" fill="#E2E4E7"/></svg>`,
  'blogs': `<svg aria-hidden="true" width="80" height="60" viewBox="0 0 120 90" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="10" width="100" height="70" rx="4" stroke="#8159BB" stroke-width="1.5" fill="none"/><rect x="18" y="20" width="50" height="4" rx="1" fill="#8159BB" opacity="0.4"/><rect x="18" y="28" width="84" height="3" rx="1" fill="#E2E4E7"/><rect x="18" y="35" width="70" height="3" rx="1" fill="#E2E4E7"/><rect x="18" y="42" width="80" height="3" rx="1" fill="#E2E4E7"/><line x1="18" y1="50" x2="102" y2="50" stroke="#E2E4E7" stroke-width="1"/><rect x="18" y="56" width="50" height="4" rx="1" fill="#8159BB" opacity="0.4"/><rect x="18" y="64" width="84" height="3" rx="1" fill="#E2E4E7"/><rect x="18" y="71" width="60" height="3" rx="1" fill="#E2E4E7"/></svg>`,
  'stores': `<svg aria-hidden="true" width="80" height="60" viewBox="0 0 120 90" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="10" width="100" height="70" rx="4" stroke="#8159BB" stroke-width="1.5" fill="none"/><path d="M18 24 L30 18 L42 24" stroke="#8159BB" stroke-width="1.5" fill="none"/><rect x="20" y="24" width="20" height="20" rx="2" stroke="#8159BB" stroke-width="1" fill="#8159BB" opacity="0.08"/><rect x="46" y="18" width="20" height="26" rx="2" stroke="#8159BB" stroke-width="1" fill="#8159BB" opacity="0.08"/><rect x="72" y="18" width="30" height="26" rx="2" stroke="#8159BB" stroke-width="1" fill="#8159BB" opacity="0.08"/><rect x="18" y="52" width="84" height="3" rx="1" fill="#E2E4E7"/><rect x="18" y="59" width="60" height="3" rx="1" fill="#E2E4E7"/><rect x="18" y="66" width="30" height="8" rx="2" fill="#8159BB" opacity="0.2"/></svg>`,
  'link-in-bio': `<svg aria-hidden="true" width="80" height="60" viewBox="0 0 120 90" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="10" width="100" height="70" rx="4" stroke="#8159BB" stroke-width="1.5" fill="none"/><circle cx="60" cy="28" r="10" stroke="#8159BB" stroke-width="1.5" fill="#8159BB" opacity="0.08"/><rect x="42" y="42" width="36" height="4" rx="1" fill="#8159BB" opacity="0.3"/><rect x="30" y="52" width="60" height="6" rx="2" stroke="#8159BB" stroke-width="1" fill="#8159BB" opacity="0.06"/><rect x="30" y="62" width="60" height="6" rx="2" stroke="#8159BB" stroke-width="1" fill="#8159BB" opacity="0.06"/></svg>`,
};

const smallIllus = {};
for (const [k, v] of Object.entries(categoryIllus)) {
  smallIllus[k] = v.replace(/width="80" height="60"/, 'width="60" height="45"');
}

const arrowSvg = `<svg class="w-5 h-5 text-[#8159BB] shrink-0 mt-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>`;

const searchSvg = `<svg class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#636972]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>`;

const chevronUp = `<svg class="w-5 h-5 shrink-0 text-[#8159BB]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m18 15-6-6-6 6"/></svg>`;

const chevronDown = `<svg class="w-5 h-5 shrink-0 text-[#636972]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>`;

const heroSvg = `<svg aria-hidden="true" width="480" height="360" viewBox="0 0 480 360" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-[480px] h-auto"><rect x="40" y="30" width="400" height="280" rx="8" stroke="#8159BB" stroke-width="2" fill="none" opacity="0.3"/><rect x="40" y="30" width="400" height="40" rx="8" fill="#8159BB" opacity="0.06"/><circle cx="62" cy="50" r="6" stroke="#8159BB" stroke-width="1.5" fill="none" opacity="0.4"/><circle cx="80" cy="50" r="6" stroke="#8159BB" stroke-width="1.5" fill="none" opacity="0.4"/><circle cx="98" cy="50" r="6" stroke="#8159BB" stroke-width="1.5" fill="none" opacity="0.4"/><rect x="60" y="90" width="160" height="8" rx="2" fill="#8159BB" opacity="0.15"/><rect x="60" y="108" width="360" height="6" rx="2" fill="#E2E4E7"/><rect x="60" y="122" width="300" height="6" rx="2" fill="#E2E4E7"/><rect x="60" y="136" width="220" height="6" rx="2" fill="#E2E4E7"/><rect x="260" y="86" width="160" height="80" rx="4" stroke="#8159BB" stroke-width="1.5" fill="#8159BB" opacity="0.04"/><rect x="60" y="160" width="360" height="1" fill="#E2E4E7"/><rect x="60" y="180" width="100" height="80" rx="4" stroke="#8159BB" stroke-width="1" fill="#8159BB" opacity="0.04"/><rect x="170" y="180" width="100" height="80" rx="4" stroke="#8159BB" stroke-width="1" fill="#8159BB" opacity="0.04"/><rect x="280" y="180" width="140" height="80" rx="4" stroke="#8159BB" stroke-width="1" fill="#8159BB" opacity="0.04"/><rect x="60" y="276" width="80" height="20" rx="4" fill="url(#heroGrad)" opacity="0.3"/><defs><linearGradient id="heroGrad" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#7671FF"/><stop offset="100%" stop-color="#CB0C9F"/></linearGradient></defs></svg>`;

const whyIcons = [
  `<svg aria-hidden="true" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22 4L8 22h10l-2 14 14-18H20l2-14z" stroke="#8159BB" stroke-width="2" fill="none"/></svg>`,
  `<svg aria-hidden="true" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="12" y="4" width="16" height="32" rx="3" stroke="#8159BB" stroke-width="2" fill="none"/><line x1="12" y1="10" x2="28" y2="10" stroke="#8159BB" stroke-width="1.5"/><line x1="12" y1="30" x2="28" y2="30" stroke="#8159BB" stroke-width="1.5"/><circle cx="20" cy="34" r="1.5" fill="#8159BB"/></svg>`,
  `<svg aria-hidden="true" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="20" r="14" stroke="#8159BB" stroke-width="2" fill="none"/><line x1="10" y1="12" x2="30" y2="12" stroke="#8159BB" stroke-width="1.5"/><text x="20" y="25" text-anchor="middle" fill="#8159BB" font-size="14" font-weight="700">$</text></svg>`,
];

export function renderGeneratorsHub() {
  const s = strings;
  const year = new Date().getFullYear();
  let h = '';

  // Section 0: Top Bar
  h += `<header class="w-full border-b border-[#E2E4E7] bg-white"><div class="max-w-[1200px] mx-auto px-5 h-14 flex items-center"><a href="/" class="text-[#4B5056] font-bold text-lg tracking-tight" style="font-family:var(--font-heading)">strikingly AI</a></div></header>`;

  // Section 1: Breadcrumb
  h += `<nav aria-label="Breadcrumb" class="max-w-[1200px] mx-auto px-5 py-3"><ol class="flex items-center gap-2 text-sm text-[#636972] list-none p-0 m-0"><li class="flex items-center gap-2"><a href="/" class="text-[#636972] hover:text-[#8159BB] transition-colors">Strikingly</a><span aria-hidden="true" class="text-[#8159BB]">&gt;</span></li><li aria-current="page" class="text-[#636972]">AI Generators</li></ol></nav>`;

  h += `<main>`;

  // Section 2: Hero
  h += `<section class="relative overflow-hidden"><div class="absolute inset-0 pointer-events-none" style="background:linear-gradient(135deg,rgba(118,113,255,0.03),rgba(203,12,159,0.03))" aria-hidden="true"></div><div class="max-w-[1200px] mx-auto px-5 py-16 md:py-20 relative"><div class="flex flex-col md:flex-row items-center gap-10 md:gap-16"><div class="flex-1 text-center md:text-left"><h1 class="mb-5"><span class="block text-[#2E2E2F] text-3xl md:text-[40px] lg:text-[48px] leading-tight" style="font-family:var(--font-heading);font-weight:700;text-transform:uppercase">BUILD ANY KIND OF SITE</span><span class="block text-3xl md:text-[40px] lg:text-[48px] leading-tight" style="font-family:var(--font-heading);font-weight:700;text-transform:uppercase;background:linear-gradient(135deg,#7671FF,#CB0C9F);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text">WITH AI, IN AN INSTANT</span></h1><p class="text-[#636972] text-base mb-8 max-w-lg mx-auto md:mx-0">${esc(s.hero.subheadline)}</p><div class="flex flex-col sm:flex-row gap-2.5 justify-center md:justify-start"><a href="/s/ai_site_builder" class="text-white text-sm font-bold uppercase px-4 py-3 rounded-[4px] text-center hover:opacity-90 transition-opacity" style="font-family:var(--font-heading);font-weight:700;min-height:44px;display:inline-flex;align-items:center;justify-content:center;background:linear-gradient(135deg,#7671FF,#CB0C9F)">${esc(s.hero.primaryCta)}</a><a href="#all-generators" class="border border-[#8159BB] text-[#8159BB] text-sm font-bold uppercase px-4 py-3 rounded-[4px] text-center hover:bg-[#8159BB]/5 transition-colors" style="font-family:var(--font-heading);font-weight:700;min-height:36px;display:inline-flex;align-items:center;justify-content:center">${esc(s.hero.secondaryCta)}</a></div></div><div class="flex-1 flex justify-center">${heroSvg}</div></div></div></section>`;

  // Section 3: Featured Generators
  h += `<section class="py-10 md:py-12"><div class="max-w-[1200px] mx-auto px-5"><h2 class="text-[#4B5056] text-2xl md:text-[28px] mb-2" style="font-family:var(--font-heading);font-weight:700;text-transform:uppercase">${esc(s.featured.heading)}</h2><p class="text-[#636972] mb-8">${esc(s.featured.subheading)}</p><div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">`;
  for (const gen of featuredGenerators) {
    h += `<a href="/generators/${esc(gen.slug)}" class="gen-card block bg-white border border-[#C6C9CD] rounded-[3px] p-5"><h3 class="text-[#4B5056] text-sm font-bold mb-1.5" style="font-family:var(--font-heading);font-weight:700;text-transform:uppercase">${esc(gen.name)}</h3><p class="text-[#636972] text-sm mb-3">${esc(gen.description)}</p><span class="inline-block text-[11px] uppercase border border-[#8159BB] text-[#8159BB] rounded-[3px] px-1.5 py-0.5" style="font-family:var(--font-heading);font-weight:700">${esc(gen.category)}</span></a>`;
  }
  h += `</div></div></section>`;

  // Section 4: Browse by Category
  h += `<section class="py-10 md:py-12 bg-[#F4F6F8]"><div class="max-w-[1200px] mx-auto px-5"><h2 class="text-[#4B5056] text-2xl md:text-[28px] mb-8" style="font-family:var(--font-heading);font-weight:700;text-transform:uppercase">${esc(s.categories.heading)}</h2><div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">`;
  for (const cat of s.categories.items) {
    h += `<a href="/generators#${esc(cat.slug)}" class="gen-card flex items-start gap-4 bg-white border border-[#C6C9CD] rounded-[3px] p-5 group"><div class="shrink-0">${categoryIllus[cat.slug] || ''}</div><div class="flex-1 min-w-0"><h3 class="text-[#4B5056] text-sm font-bold mb-1" style="font-family:var(--font-heading);font-weight:700;text-transform:uppercase">${esc(cat.name)}</h3><p class="text-[#636972] text-sm">${esc(cat.description)}</p></div>${arrowSvg}</a>`;
  }
  h += `</div></div></section>`;

  // Section 5: All Generators Directory
  h += `<section id="all-generators" class="py-10 md:py-12"><div class="max-w-[1200px] mx-auto px-5"><h2 class="text-[#4B5056] text-2xl md:text-[28px] mb-2" style="font-family:var(--font-heading);font-weight:700;text-transform:uppercase">${esc(s.directory.heading)}</h2><p class="text-[#636972] mb-6">${esc(s.directory.subheading)}</p>`;
  h += `<div class="mb-8 max-w-[480px]"><div class="relative">${searchSvg}<input type="text" id="generator-search" placeholder="${esc(s.directory.searchPlaceholder)}" aria-label="${esc(s.directory.searchAriaLabel)}" class="w-full pl-10 pr-4 py-2.5 border border-[#C6C9CD] rounded-[4px] text-sm text-[#4B5056] bg-white focus:border-[#8159BB] focus:outline-none focus:ring-2 focus:ring-[#8159BB]/20" style="font-family:var(--font-body)"/></div><p id="search-count" class="mt-2 text-sm text-[#636972] hidden"></p></div>`;
  h += `<div id="no-results" class="text-center py-10 hidden"><p class="text-[#636972] mb-4">${esc(s.directory.noResults)}</p><button id="clear-search-btn" class="border border-[#8159BB] text-[#8159BB] text-sm font-bold uppercase px-4 py-2 rounded-[4px] hover:bg-[#8159BB]/5 transition-colors mr-4" style="font-family:var(--font-heading);font-weight:700">${esc(s.directory.clearSearch)}</button><a href="/s/ai_site_builder" class="text-[#8159BB] text-sm underline hover:no-underline">${esc(s.directory.cantFindLink)}</a></div>`;

  for (const key of CATEGORY_KEYS) {
    const sub = s.directory.subsections[key];
    const gens = allGenerators[key] || [];
    const illu = smallIllus[key] || '';

    h += `<div id="${key}" class="mb-10 scroll-mt-20" data-category="${key}">`;
    h += `<h3 class="text-[#4B5056] text-lg md:text-xl mb-1" style="font-family:var(--font-heading);font-weight:700;text-transform:uppercase">${esc(sub.heading)}</h3>`;
    h += `<p class="text-[#636972] text-sm mb-5">${esc(sub.description)}</p>`;
    h += `<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">`;

    const visibleGens = gens.slice(0, VISIBLE_COUNT);
    const extraGens = gens.slice(VISIBLE_COUNT);

    for (const gen of visibleGens) {
      h += `<a href="/generators/${esc(gen.slug)}" class="gen-card block bg-white border border-[#C6C9CD] rounded-[3px] p-5" data-name="${esc(gen.name)}" data-desc="${esc(gen.description)}" data-category="${key}"><div class="mb-3">${illu}</div><h4 class="text-[#4B5056] text-sm font-bold mb-1" style="font-family:var(--font-heading);font-weight:700;text-transform:uppercase">${esc(gen.name)}</h4><p class="text-[#636972] text-sm">${esc(gen.description)}</p></a>`;
    }

    h += `</div>`;

    if (extraGens.length > 0) {
      h += `<div class="extra-cards-wrapper" id="${key}-extra" style="overflow:hidden;transition:max-height 0.3s ease">`;
      h += `<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 pt-5">`;
      for (const gen of extraGens) {
        h += `<a href="/generators/${esc(gen.slug)}" class="gen-card block bg-white border border-[#C6C9CD] rounded-[3px] p-5" data-name="${esc(gen.name)}" data-desc="${esc(gen.description)}" data-category="${key}"><div class="mb-3">${illu}</div><h4 class="text-[#4B5056] text-sm font-bold mb-1" style="font-family:var(--font-heading);font-weight:700;text-transform:uppercase">${esc(gen.name)}</h4><p class="text-[#636972] text-sm">${esc(gen.description)}</p></a>`;
      }
      h += `</div></div>`;
      h += `<button class="show-all-btn mt-4 text-[#8159BB] text-sm font-bold uppercase hover:underline hidden" style="font-family:var(--font-heading);font-weight:700" aria-expanded="false" aria-controls="${key}-extra" data-count="${gens.length}">Show all ${gens.length} generators</button>`;
    }

    h += `</div>`;
  }

  h += `</div></section>`;

  // Section 6: How It Works
  h += `<section class="py-10 md:py-12 bg-[#F4F6F8]"><div class="max-w-[1200px] mx-auto px-5"><h2 class="text-[#4B5056] text-2xl md:text-[28px] mb-8 text-center" style="font-family:var(--font-heading);font-weight:700;text-transform:uppercase">${esc(s.howItWorks.heading)}</h2><div class="grid grid-cols-1 md:grid-cols-3 gap-8">`;
  for (let i = 0; i < s.howItWorks.steps.length; i++) {
    const step = s.howItWorks.steps[i];
    h += `<div class="flex flex-col items-center text-center"><div class="w-10 h-10 rounded-full flex items-center justify-center shrink-0" style="background:linear-gradient(135deg,#7671FF,#CB0C9F)"><span class="text-white font-bold text-sm" style="font-family:var(--font-heading)">${i + 1}</span></div><h3 class="text-[#4B5056] text-sm font-bold mt-4 mb-2" style="font-family:var(--font-heading);font-weight:700;text-transform:uppercase">${esc(step.title)}</h3><p class="text-[#636972] text-sm max-w-xs">${esc(step.description)}</p></div>`;
  }
  h += `</div></div></section>`;

  // Section 7: Why Strikingly
  h += `<section class="py-10 md:py-12"><div class="max-w-[1200px] mx-auto px-5"><h2 class="text-[#4B5056] text-2xl md:text-[28px] mb-8 text-center" style="font-family:var(--font-heading);font-weight:700;text-transform:uppercase">${esc(s.whyStrikingly.heading)}</h2><div class="grid grid-cols-1 md:grid-cols-3 gap-8">`;
  for (let i = 0; i < s.whyStrikingly.items.length; i++) {
    const item = s.whyStrikingly.items[i];
    h += `<div class="flex flex-col items-center text-center">${whyIcons[i]}<h3 class="text-[#4B5056] text-sm font-bold mt-4 mb-2" style="font-family:var(--font-heading);font-weight:700;text-transform:uppercase">${esc(item.title)}</h3><p class="text-[#636972] text-sm max-w-xs">${esc(item.description)}</p></div>`;
  }
  h += `</div></div></section>`;

  // Section 8: FAQ
  h += `<section class="py-10 md:py-12 bg-[#F4F6F8]"><div class="max-w-[800px] mx-auto px-5"><h2 class="text-[#4B5056] text-2xl md:text-[28px] mb-8 text-center" style="font-family:var(--font-heading);font-weight:700;text-transform:uppercase">${esc(s.faq.heading)}</h2><div class="space-y-0">`;
  for (let i = 0; i < s.faq.items.length; i++) {
    const item = s.faq.items[i];
    const isOpen = i === 0;
    h += `<div class="border-b border-[#E2E4E7]"><button id="faq-question-${i}" aria-expanded="${isOpen}" aria-controls="faq-answer-${i}" class="faq-toggle w-full flex items-center justify-between py-4 text-left hover:text-[#8159BB] transition-colors" data-faq="${i}"><span class="text-[#4B5056] text-sm font-bold pr-4" style="font-family:var(--font-heading);font-weight:700;text-transform:uppercase">${esc(item.question)}</span>${isOpen ? chevronUp : chevronDown}</button><div id="faq-answer-${i}" role="region" aria-labelledby="faq-question-${i}" class="overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-4' : 'max-h-0'}"><p class="text-[#636972] text-sm leading-relaxed">${esc(item.answer)}</p></div></div>`;
  }
  h += `</div></div></section>`;

  // Section 9: Closing CTA
  h += `<section class="py-16 md:py-20"><div class="max-w-[1200px] mx-auto px-5 text-center"><h2 class="text-[#4B5056] text-2xl md:text-[32px] mb-3" style="font-family:var(--font-heading);font-weight:700;text-transform:uppercase">${esc(s.closingCta.heading)}</h2><p class="text-[#636972] mb-8 max-w-md mx-auto">${esc(s.closingCta.subheadline)}</p><a href="/s/ai_site_builder" class="text-white text-sm font-bold uppercase px-6 py-3 rounded-[4px] inline-block hover:opacity-90 transition-opacity" style="font-family:var(--font-heading);font-weight:700;min-height:44px;line-height:44px;background:linear-gradient(135deg,#7671FF,#CB0C9F)">${esc(s.closingCta.cta)}</a></div></section>`;

  h += `</main>`;

  // Section 10: Footer
  h += `<footer class="border-t border-[#E2E4E7] py-10 bg-white"><div class="max-w-[1200px] mx-auto px-5"><div class="grid grid-cols-2 md:grid-cols-5 gap-8 mb-8"><div class="col-span-2 md:col-span-1"><span class="text-[#4B5056] font-bold text-lg" style="font-family:var(--font-heading)">strikingly</span></div>`;
  for (const col of s.footer.columns) {
    h += `<div><h4 class="text-[#4B5056] text-xs font-bold mb-3" style="font-family:var(--font-heading);font-weight:700;text-transform:uppercase">${esc(col.title)}</h4><ul class="space-y-2 list-none p-0 m-0">`;
    for (const link of col.links) {
      h += `<li><a href="${esc(link.href)}" class="text-[#636972] text-sm hover:text-[#8159BB] transition-colors">${esc(link.text)}</a></li>`;
    }
    h += `</ul></div>`;
  }
  h += `</div><p class="text-[#636972] text-xs border-t border-[#E2E4E7] pt-6">&copy; ${year} Strikingly. All rights reserved.</p></div></footer>`;

  return h;
}
