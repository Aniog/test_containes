import {
  strings,
  categories,
  featuredGenerators,
  getAllGenerators,
  getGeneratorsByCategory,
  getFaqItems,
} from '../src/data/generators.js';

const s = strings.en;

function esc(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function slugify(name) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

/* ─── SVG ─── */
const heroSvg = `<svg viewBox="0 0 400 320" width="400" height="320" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><rect x="60" y="40" width="280" height="220" rx="8" stroke="#C6C9CD" stroke-width="1.5" fill="#FFFFFF"/><rect x="80" y="70" width="120" height="8" rx="4" fill="#E2E4E7"/><rect x="80" y="90" width="80" height="8" rx="4" fill="#E2E4E7"/><rect x="80" y="115" width="240" height="60" rx="4" fill="#F4F6F8"/><rect x="90" y="125" width="100" height="6" rx="3" fill="#C6C9CD"/><rect x="90" y="138" width="160" height="6" rx="3" fill="#C6C9CD"/><rect x="90" y="151" width="120" height="6" rx="3" fill="#C6C9CD"/><rect x="80" y="190" width="70" height="30" rx="4" fill="#F4F6F8"/><rect x="165" y="190" width="70" height="30" rx="4" fill="#F4F6F8"/><rect x="250" y="190" width="70" height="30" rx="4" fill="#F4F6F8"/><circle cx="330" cy="260" r="28" stroke="#8159BB" stroke-width="1.5" fill="#F4F6F8" opacity="0.5"/><path d="M318 260l8 8 16-16" stroke="#8159BB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><circle cx="60" cy="280" r="20" stroke="#7671FF" stroke-width="1.5" fill="#F4F6F8" opacity="0.4"/><circle cx="340" cy="60" r="16" stroke="#CB0C9F" stroke-width="1.5" fill="#F4F6F8" opacity="0.3"/></svg>`;

const catSvg = `<svg viewBox="0 0 48 48" width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><rect x="8" y="10" width="32" height="28" rx="4" stroke="#8159BB" stroke-width="1.5" fill="#F4F6F8"/><line x1="14" y1="20" x2="34" y2="20" stroke="#C6C9CD" stroke-width="1.5"/><line x1="14" y1="26" x2="28" y2="26" stroke="#C6C9CD" stroke-width="1.5"/><line x1="14" y1="32" x2="22" y2="32" stroke="#C6C9CD" stroke-width="1.5"/></svg>`;

const cardThumb = `<svg viewBox="0 0 40 40" width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><rect x="4" y="6" width="32" height="28" rx="3" stroke="#C6C9CD" stroke-width="1" fill="#F4F6F8"/><line x1="10" y1="14" x2="30" y2="14" stroke="#E2E4E7" stroke-width="1.5"/><line x1="10" y1="19" x2="24" y2="19" stroke="#E2E4E7" stroke-width="1.5"/><line x1="10" y1="24" x2="20" y2="24" stroke="#E2E4E7" stroke-width="1.5"/></svg>`;

const arrowRight = `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>`;

const searchIcon = `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#636972" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`;

const chevronDown = `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="6 9 12 15 18 9"/></svg>`;

/* ─── Styles inline for no-JS static render ─── */
const staticStyles = `
.static-page { font-family:"Open Sans",sans-serif; font-size:14px; line-height:1.5; color:#636972; background:#fff; min-height:100vh; overflow-x:hidden; }
.static-page h1,.static-page h2,.static-page h3,.static-page h4,.static-page h5,.static-page h6 { font-family:"Josefin Sans","Poppins",sans-serif; font-weight:700; text-transform:uppercase; line-height:1.2; color:#4B5056; margin:0; }
.static-page a { text-decoration:none; color:inherit; }
.static-page img,.static-page svg { max-width:100%; display:block; }
.static-container { width:100%; max-width:1200px; margin-inline:auto; padding-inline:20px; }
.static-gradient-text { background:linear-gradient(90deg,#7671FF 0%,#CB0C9F 100%); -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text; }
.static-gradient-fill { background:linear-gradient(90deg,#7671FF 0%,#CB0C9F 100%); color:#fff; }
.static-ghost-btn { background:transparent; border:1px solid #8159BB; color:#8159BB; }
.static-card { background:#fff; border:1px solid #C6C9CD; border-radius:3px; padding:20px; transition:box-shadow .2s ease,border-color .2s ease; display:block; }
.static-card:hover { box-shadow:0 4px 12px rgba(0,0,0,.08); border-color:#8159BB; }
.static-tag { display:inline-block; font-family:"Josefin Sans","Poppins",sans-serif; font-weight:700; font-size:11px; text-transform:uppercase; color:#8159BB; border:1px solid #8159BB; border-radius:3px; padding:2px 6px; line-height:1; }
.static-input { width:100%; height:44px; padding:0 16px 0 40px; border-radius:3px; border:1px solid #C6C9CD; font-size:14px; background:#fff; color:#2E2E2F; }
.static-faq-btn { width:100%; display:flex; align-items:center; justify-content:space-between; padding:16px 20px; text-align:left; background:#fff; border:none; cursor:pointer; font-family:"Josefin Sans","Poppins",sans-serif; font-weight:700; text-transform:uppercase; font-size:14px; color:#2E2E2F; }
.static-faq-answer { padding:0 20px 16px; font-size:14px; color:#636972; }
`;

function topBar() {
  return `<header style="position:sticky;top:0;z-index:50;background:#fff;border-bottom:1px solid #E2E4E7;"><div class="static-container" style="height:56px;display:flex;align-items:center;"><a href="/" style="font-family:'Josefin Sans','Poppins',sans-serif;font-weight:700;text-transform:uppercase;font-size:16px;letter-spacing:0.5px;color:#2E2E2F;text-decoration:none;"><span style="color:#8159BB;">strikingly</span> <span style="font-weight:400;">AI</span></a></div></header>`;
}

function breadcrumb() {
  return `<nav aria-label="Breadcrumb" class="static-container" style="padding-top:12px;padding-bottom:12px;"><ol style="display:flex;align-items:center;gap:4px;list-style:none;margin:0;padding:0;font-size:14px;color:#636972;"><li><a href="/" style="color:#636972;text-decoration:none;">${esc(s.breadcrumbHome)}</a></li><li aria-hidden="true" style="padding:0 4px;">&gt;</li><li aria-current="page">${esc(s.breadcrumbCurrent)}</li></ol></nav>`;
}

function hero() {
  return `<section style="position:relative;overflow:hidden;padding:60px 0 80px;"><div style="position:absolute;inset:0;pointer-events:none;background:radial-gradient(circle at 80% 30%,rgba(118,113,255,0.06) 0%,rgba(203,12,159,0.04) 50%,transparent 70%);"></div><div class="static-container" style="position:relative;"><div style="display:flex;flex-direction:column;align-items:center;gap:40px;"><div style="flex:1;text-align:center;"><h1 style="font-size:28px;"><span style="display:block;color:#2E2E2F;">${esc(s.heroH1Line1)}</span><span style="display:block;" class="static-gradient-text">${esc(s.heroH1Line2)}</span></h1><p style="margin-top:20px;font-size:14px;max-width:480px;margin-inline:auto;color:#636972;">${esc(s.heroSubheadline)}</p><div style="margin-top:28px;display:flex;flex-direction:column;align-items:center;gap:10px;"><a href="/s/ai_site_builder" style="display:inline-flex;align-items:center;justify-content:center;border-radius:4px;font-family:'Josefin Sans','Poppins',sans-serif;font-weight:700;text-transform:uppercase;font-size:14px;letter-spacing:0.5px;height:44px;padding:0 24px;text-decoration:none;" class="static-gradient-fill">${esc(s.heroCtaPrimary)}</a><a href="#all-generators" style="display:inline-flex;align-items:center;justify-content:center;border-radius:4px;font-family:'Josefin Sans','Poppins',sans-serif;font-weight:700;text-transform:uppercase;font-size:14px;letter-spacing:0.5px;height:44px;padding:0 24px;text-decoration:none;" class="static-ghost-btn">${esc(s.heroCtaSecondary)}</a></div></div><div style="flex-shrink:0;">${heroSvg}</div></div></div></section>`;
}

function featured() {
  const cards = featuredGenerators.map(g =>
    `<a href="/generators/${esc(g.slug)}" class="static-card">
      <h3 style="font-size:16px;color:#2E2E2F;margin:0;">${esc(g.name)}</h3>
      <p style="margin-top:4px;font-size:12px;color:#636972;">${esc(g.description)}</p>
      <span class="static-tag" style="margin-top:12px;">${esc(g.categoryTag)}</span>
    </a>`
  ).join('');
  return `<section style="background:#F4F6F8;padding:40px 0;"><div class="static-container"><div style="text-align:center;margin-bottom:32px;"><h2 style="font-size:26px;">${esc(s.featuredHeading)}</h2><p style="margin-top:8px;font-size:14px;color:#636972;">${esc(s.featuredSubheading)}</p></div><div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:20px;">${cards}</div></div></section>`;
}

function browseCategory() {
  const cards = categories.map(cat =>
    `<a href="/generators#${esc(cat.id)}" class="static-card" style="display:flex;flex-direction:column;align-items:center;text-align:center;">
      <div style="width:48px;height:48px;margin-bottom:12px;">${catSvg}</div>
      <h3 style="font-size:14px;color:#2E2E2F;">${esc(cat.name.toUpperCase())}</h3>
      <p style="margin-top:4px;font-size:12px;line-height:1.6;color:#636972;">${esc(cat.description)}</p>
      <div style="margin-top:12px;color:#8159BB;">${arrowRight}</div>
    </a>`
  ).join('');
  return `<section style="padding:40px 0;"><div class="static-container"><h2 style="font-size:26px;text-align:center;margin-bottom:32px;">${esc(s.browseByCategoryHeading)}</h2><div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:20px;">${cards}</div></div></section>`;
}

function allGenerators() {
  let subsections = categories.map(cat => {
    const gens = getGeneratorsByCategory(cat.id);
    const cards = gens.map(g =>
      `<a href="/generators/${esc(g.slug)}" class="static-card" style="display:flex;flex-direction:column;">
        <div style="width:40px;height:40px;margin-bottom:12px;">${cardThumb}</div>
        <h4 style="font-size:14px;color:#2E2E2F;margin:0;">${esc(g.name)}</h4>
        <p style="margin-top:4px;font-size:12px;line-height:1.6;color:#636972;">${esc(g.description)}</p>
      </a>`
    ).join('');
    return `<div id="${esc(cat.id)}"><h3 style="font-size:18px;color:#2E2E2F;margin-bottom:4px;">${esc(cat.name.toUpperCase())}</h3><p style="font-size:12px;color:#636972;margin-bottom:16px;">${esc(cat.description)}</p><div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:20px;">${cards}</div></div>`;
  }).join('<div style="height:40px;"></div>');

  return `<section id="all-generators" style="background:#F4F6F8;padding:40px 0;"><div class="static-container"><div style="text-align:center;margin-bottom:24px;"><h2 style="font-size:26px;">${esc(s.allGeneratorsHeading)}</h2><p style="margin-top:8px;font-size:14px;color:#636972;">${esc(s.allGeneratorsSubheading)}</p></div><div style="max-width:480px;margin:0 auto 24px;position:relative;"><div style="position:absolute;left:12px;top:50%;transform:translateY(-50%);pointer-events:none;">${searchIcon}</div><input type="text" placeholder="${esc(s.searchPlaceholder)}" aria-label="${esc(s.searchLabel)}" class="static-input" style="padding-left:40px;" disabled /></div><div style="margin-top:40px;">${subsections}</div></div></section>`;
}

function howItWorks() {
  const steps = [
    { num: '1', title: s.step1Title, desc: s.step1Desc },
    { num: '2', title: s.step2Title, desc: s.step2Desc },
    { num: '3', title: s.step3Title, desc: s.step3Desc },
  ];
  const items = steps.map(step =>
    `<div style="flex:1;display:flex;flex-direction:column;align-items:center;text-align:center;max-width:320px;margin-inline:auto;">
      <div style="width:48px;height:48px;border-radius:50%;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:700;font-size:18px;font-family:'Josefin Sans','Poppins',sans-serif;background:linear-gradient(135deg,#7671FF 0%,#8159BB 100%);">${step.num}</div>
      <h3 style="margin-top:16px;font-size:14px;color:#2E2E2F;">${esc(step.title)}</h3>
      <p style="margin-top:8px;font-size:12px;line-height:1.6;color:#636972;">${esc(step.desc)}</p>
    </div>`
  ).join('<div style="width:40px;flex-shrink:0;"></div>');
  return `<section style="padding:40px 0;"><div class="static-container"><h2 style="font-size:26px;text-align:center;margin-bottom:40px;">${esc(s.howItWorksHeading)}</h2><div style="display:flex;flex-direction:column;align-items:center;gap:32px;">${items}</div></div></section>`;
}

function whyStrikingly() {
  const icons = {
    bolt: `<svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="#8159BB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M13 2L4.09 13.36A1 1 0 004.83 15H11v7l8.91-11.36A1 1 0 0019.17 9H13V2z"/></svg>`,
    mobile: `<svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="#8159BB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/></svg>`,
    gift: `<svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="#8159BB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 8v13m0-13V6a4 4 0 00-4-4 5 5 0 00-5 5c0 2 1 3 3 3h6zm0 0V6a4 4 0 014-4 5 5 0 015 5c0 2-1 3-3 3h-6z"/></svg>`,
  };
  const items = [
    { icon: 'bolt', title: s.why1Title, desc: s.why1Desc },
    { icon: 'mobile', title: s.why2Title, desc: s.why2Desc },
    { icon: 'gift', title: s.why3Title, desc: s.why3Desc },
  ];
  const cells = items.map(item =>
    `<div style="text-align:center;">
      <div style="display:inline-flex;align-items:center;justify-content:center;width:48px;height:48px;border-radius:50%;background:#fff;border:1px solid #C6C9CD;margin-bottom:16px;">${icons[item.icon]}</div>
      <h3 style="font-size:14px;color:#2E2E2F;">${esc(item.title)}</h3>
      <p style="margin-top:8px;font-size:12px;line-height:1.6;color:#636972;max-width:320px;margin-inline:auto;">${esc(item.desc)}</p>
    </div>`
  ).join('');
  return `<section style="background:#F4F6F8;padding:40px 0;"><div class="static-container"><h2 style="font-size:26px;text-align:center;margin-bottom:40px;">${esc(s.whyStrikinglyHeading)}</h2><div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:32px;">${cells}</div></div></section>`;
}

function faq() {
  const items = getFaqItems();
  const panels = items.map((item, i) => {
    const isOpen = true; // all expanded for no-JS baseline
    return `<div style="border:1px solid #C6C9CD;border-radius:3px;background:#fff;overflow:hidden;">
      <button class="static-faq-btn">${esc(item.question)}<span style="color:#8159BB;transition:transform .2s;${isOpen ? 'transform:rotate(180deg);' : ''}">${chevronDown}</span></button>
      <div style="padding:0 20px 16px;max-height:400px;overflow:hidden;transition:max-height .3s ease;"><p style="font-size:12px;line-height:1.6;color:#636972;">${esc(item.answer)}</p></div>
    </div>`;
  }).join('');
  return `<section style="padding:40px 0;"><div class="static-container" style="max-width:800px;"><h2 style="font-size:26px;text-align:center;margin-bottom:40px;">${esc(s.faqHeading)}</h2><div style="display:flex;flex-direction:column;gap:12px;">${panels}</div></div></section>`;
}

function closingCta() {
  return `<section style="padding:64px 0 80px;background:#fff;"><div class="static-container" style="text-align:center;"><h2 style="font-size:28px;color:#2E2E2F;">${esc(s.closingHeading)}</h2><p style="margin-top:12px;font-size:14px;color:#636972;">${esc(s.closingSub)}</p><a href="/s/ai_site_builder" style="display:inline-flex;align-items:center;justify-content:center;border-radius:4px;font-family:'Josefin Sans','Poppins',sans-serif;font-weight:700;text-transform:uppercase;font-size:14px;letter-spacing:0.5px;height:44px;padding:0 32px;text-decoration:none;margin-top:28px;" class="static-gradient-fill">${esc(s.closingCta)}</a></div></section>`;
}

function footer() {
  const year = new Date().getFullYear();
  const cols = [
    { title: 'Product', links: [{l:'Templates',h:'/templates'},{l:'Pricing',h:'/pricing'},{l:'AI Site Builder',h:'/s/ai_site_builder'}] },
    { title: 'Company', links: [{l:'About',h:'/about'},{l:'Blog',h:'/blog'},{l:'Support',h:'/support'}] },
    { title: 'Legal', links: [{l:'Terms',h:'/terms'},{l:'Privacy',h:'/privacy'}] },
    { title: 'Resources', links: [{l:'Generators',h:'/generators'},{l:'Help Center',h:'/support'}] },
  ];
  const colHtml = cols.map(col =>
    `<div><h4 style="font-family:'Josefin Sans','Poppins',sans-serif;font-weight:700;text-transform:uppercase;font-size:12px;color:#2E2E2F;margin-bottom:12px;">${esc(col.title)}</h4><ul style="list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:8px;">${col.links.map(l => `<li><a href="${esc(l.h)}" style="font-size:12px;color:#636972;text-decoration:none;">${esc(l.l)}</a></li>`).join('')}</ul></div>`
  ).join('');
  return `<footer style="border-top:1px solid #E2E4E7;padding:48px 0;background:#fff;"><div class="static-container"><div style="display:flex;flex-direction:column;gap:40px;"><div style="max-width:192px;"><a href="/" style="font-family:'Josefin Sans','Poppins',sans-serif;font-weight:700;text-transform:uppercase;font-size:16px;letter-spacing:0.5px;color:#2E2E2F;text-decoration:none;"><span style="color:#8159BB;">strikingly</span></a><p style="margin-top:8px;font-size:12px;color:#636972;">AI-powered website builder.</p></div><div style="flex:1;display:grid;grid-template-columns:repeat(2,1fr);gap:32px;">${colHtml}</div></div><div style="margin-top:40px;padding-top:24px;border-top:1px solid #E2E4E7;text-align:center;font-size:12px;color:#636972;">${esc(s.footerCopyright.replace('{year}', String(year)))}</div></div></footer>`;
}

function generateStaticPage() {
  return `<style>${staticStyles}</style>
<div class="static-page">
  ${topBar()}
  ${breadcrumb()}
  <main>
    ${hero()}
    ${featured()}
    ${browseCategory()}
    ${allGenerators()}
    ${howItWorks()}
    ${whyStrikingly()}
    ${faq()}
    ${closingCta()}
  </main>
  ${footer()}
</div>`;
}

console.log(generateStaticPage());
