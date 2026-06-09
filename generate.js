import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Very simple static generation
import { strings as allStrings } from './src/strings.js';
import { featuredGenerators, categories, directoryData } from './src/data.js';

const s = allStrings.en;

function renderCard(item, showCategory = false) {
  return `
    <a href="/generators/${item.slug}" class="dir-card border border-strk-border rounded bg-white p-5 block hover:shadow-md hover:border-strk-purple transition-shadow focus:outline-none focus:ring-2 focus:ring-strk-purple focus:border-transparent">
      <div class="flex flex-col h-full items-start">
        ${showCategory ? `
          <div class="text-[11px] font-heading text-strk-purple border border-strk-purple rounded-[3px] px-[6px] py-[2px] mb-3 uppercase">
            ${item.tag || "Generator"}
          </div>
        ` : `
          <div class="mb-3 text-strk-purple" aria-hidden="true">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
          </div>
        `}
        <h4 class="font-bold text-strk-heading mb-1">${item.name || item.name}</h4>
        <p class="text-sm text-strk-body line-clamp-1">${item.desc}</p>
      </div>
    </a>
  `;
}

function renderCategoryCard(cat) {
  return `
    <a href="#${cat.id}" class="border border-strk-border rounded bg-white p-5 block hover:shadow-md hover:border-strk-purple transition-shadow focus:outline-none focus:ring-2 focus:ring-strk-purple focus:border-transparent">
      <div class="flex flex-col items-start">
        <div class="mb-3 text-strk-purple" aria-hidden="true">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path></svg>
        </div>
        <h3 class="font-heading font-bold text-strk-heading mb-1 text-base uppercase">${cat.name}</h3>
        <p class="text-sm text-strk-body line-clamp-1 flex-1">${cat.description}</p>
        <div class="mt-4 text-strk-purple" aria-hidden="true">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
        </div>
      </div>
    </a>
  `;
}

function renderFeaturedSection() {
  return `
    <section class="py-[40px] px-6 max-w-[1200px] mx-auto w-full">
      <h2 class="font-heading font-bold text-strk-heading text-[26px] md:text-[32px] leading-tight mb-2 uppercase">${s.featured.title}</h2>
      <p class="text-strk-body mb-[40px]">${s.featured.subtitle}</p>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        ${featuredGenerators.map(item => renderCard(item, true)).join('\n')}
      </div>
    </section>
  `;
}

function renderBrowseCategorySection() {
  return `
    <section class="py-[40px] px-6 max-w-[1200px] mx-auto w-full">
      <h2 class="font-heading font-bold text-strk-heading text-[26px] md:text-[32px] leading-tight mb-[40px] uppercase">${s.categories.title}</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        ${categories.map(cat => renderCategoryCard(cat)).join('\n')}
      </div>
    </section>
  `;
}

function renderDirectorySection() {
  const htmlParts = [];
  
  htmlParts.push(`
    <section id="all-generators" class="py-[40px] px-6 max-w-[1200px] mx-auto w-full relative">
      <h2 class="font-heading font-bold text-strk-heading text-[26px] md:text-[32px] leading-tight mb-2 uppercase">${s.directory.title}</h2>
      <p class="text-strk-body mb-[30px]">${s.directory.subtitle}</p>
      
      <div class="mb-[40px] max-w-[480px]">
        <div class="relative">
          <span class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-strk-body" aria-hidden="true">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
          </span>
          <input type="search" id="generator-search" aria-label="${s.directory.searchLabel}" placeholder="${s.directory.searchPlaceholder}" class="block w-full pl-10 pr-3 py-2 border border-strk-border rounded focus:outline-none focus:border-strk-purple focus:ring-1 focus:ring-strk-purple">
        </div>
        <div id="search-count" class="text-sm mt-2 text-strk-body text-strk-purple hidden" aria-live="polite"></div>
      </div>
      
      <div id="empty-state" class="hidden py-10 text-center border border-dashed border-strk-border rounded bg-strk-lightBg">
        <p class="text-strk-body mb-4">${s.directory.emptyState}</p>
        <div class="flex items-center justify-center gap-4">
          <button id="clear-search" class="btn btn-ghost">${s.directory.clearSearch}</button>
          <a href="/s/ai_site_builder" class="text-strk-purple font-semibold hover:underline">Start with our AI builder</a>
        </div>
      </div>
  `);

  categories.forEach(cat => {
    const items = directoryData[cat.id] || [];
    if(items.length > 0) {
      htmlParts.push(`
      <div class="dir-subsection mb-[60px]" id="${cat.id}">
        <h3 class="font-heading font-bold text-strk-heading text-[20px] md:text-[24px] uppercase mb-1">${cat.name}</h3>
        <p class="text-strk-body mb-[20px]">${cat.description || cat.desc}</p>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 dir-grid">
          ${items.map(item => renderCard(item, false)).join('\n')}
        </div>
        ${items.length > 6 ? `
        <div class="mt-[20px] text-center show-all-container">
          <button class="btn btn-ghost show-all-btn" aria-expanded="false" aria-controls="${cat.id}">
            Show all ${items.length} ${cat.name.toLowerCase()}
          </button>
        </div>` : ''}
      </div>
      `);
    }
  });

  htmlParts.push('</section>');
  return htmlParts.join('\n');
}

function renderHowItWorks() {
  return `
    <section class="py-[60px] md:py-[80px] bg-strk-lightBg">
      <div class="max-w-[1200px] mx-auto w-full px-6">
        <h2 class="font-heading font-bold text-strk-heading text-[26px] md:text-[32px] leading-tight mb-[40px] text-center uppercase">${s.howItWorks.title}</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-[40px] md:gap-5">
          ${s.howItWorks.steps.map((step, idx) => `
            <div class="flex flex-col items-center md:items-start text-center md:text-left">
              <div class="w-10 h-10 rounded-full bg-strk-purple text-white flex items-center justify-center font-heading font-bold mb-4">${idx + 1}</div>
              <h3 class="font-heading font-bold text-strk-heading mb-2 uppercase">${step.title}</h3>
              <p class="text-strk-body">${step.desc}</p>
            </div>
          `).join('\n')}
        </div>
      </div>
    </section>
  `;
}

function renderWhyStrikingly() {
  return `
    <section class="py-[60px] md:py-[80px] px-6 max-w-[1200px] mx-auto w-full">
      <h2 class="font-heading font-bold text-strk-heading text-[26px] md:text-[32px] leading-tight mb-[40px] text-center uppercase">${s.why.title}</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-[40px] md:gap-5">
        ${s.why.points.map(benefit => `
          <div class="flex flex-col items-center text-center">
            <div class="mb-4 text-strk-purple" aria-hidden="true">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
            </div>
            <h3 class="font-heading font-bold text-strk-heading mb-2 uppercase">${benefit.title}</h3>
            <p class="text-strk-body">${benefit.desc}</p>
          </div>
        `).join('\n')}
      </div>
    </section>
  `;
}

function renderFAQ() {
  return `
    <section class="py-[60px] md:py-[80px] px-6 max-w-[800px] mx-auto w-full">
      <h2 class="font-heading font-bold text-strk-heading text-[26px] md:text-[32px] leading-tight mb-[40px] text-center uppercase">${s.faq.title}</h2>
      <div class="border-t border-strk-divider">
        ${s.faq.questions.map((q, idx) => `
          <div class="border-b border-strk-divider faq-item">
            <button class="flex items-center justify-between w-full py-4 text-left focus:outline-none focus:ring-2 focus:ring-inset focus:ring-strk-purple" aria-expanded="${idx === 0 ? 'true' : 'false'}" aria-controls="faq-desc-${idx}">
              <span class="font-bold text-strk-heading">${q.q}</span>
              <span class="ml-4 flex-shrink-0 text-strk-purple transition-transform duration-200 transform ${idx === 0 ? 'rotate-180' : ''}" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
              </span>
            </button>
            <div id="faq-desc-${idx}" class="overflow-hidden faq-content" style="${idx === 0 ? '' : 'display: none; '}">
              <div class="pb-4 text-strk-body">
                ${q.a}
              </div>
            </div>
          </div>
        `).join('\n')}
      </div>
    </section>
  `;
}

const html = `
   <header class="border-b border-strk-divider bg-white py-3 px-6 sticky top-0 z-50">
     <div class="max-w-[1200px] mx-auto w-full flex items-center">
        <a href="/" aria-label="Strikingly Home">
          <svg width="120" height="28" viewBox="0 0 200 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <text x="0" y="32" font-family="'Josefin Sans', sans-serif" font-weight="700" font-size="28" fill="#4B5056">strikingly</text>
            <text x="135" y="32" font-family="'Josefin Sans', sans-serif" font-weight="700" font-size="28" fill="#8159BB">AI</text>
          </svg>
        </a>
     </div>
   </header>

   <nav aria-label="Breadcrumb" class="px-6 py-2 bg-white max-w-[1200px] mx-auto w-full text-xs text-strk-body">
     <ol class="flex items-center space-x-2">
       <li><a href="/" class="hover:underline focus:outline-none focus:ring-1 focus:ring-strk-purple rounded">Strikingly</a></li>
       <li><span aria-hidden="true">/</span></li>
       <li aria-current="page">AI Generators</li>
     </ol>
   </nav>

   <main>
     <section class="py-[60px] md:py-[80px] px-6 max-w-[1200px] mx-auto w-full hero-bg relative">
       <div class="flex flex-col md:flex-row gap-[40px] md:gap-[60px] items-center relative z-10">
         <div class="flex-1 text-center md:text-left">
           <h1 class="font-heading font-bold text-[32px] md:text-[48px] leading-tight mb-4 uppercase">
             <span class="block text-[#2E2E2F]">${s.hero.h1_1}</span>
             <span class="block gradient-text">${s.hero.h1_2}</span>
           </h1>
           <p class="text-strk-body text-base md:text-lg mb-[40px] max-w-[600px] mx-auto md:mx-0">
             ${s.hero.sub}
           </p>
           <div class="flex flex-col sm:flex-row gap-[10px] justify-center md:justify-start">
             <a href="/s/ai_site_builder" class="btn btn-lg btn-primary shadow-md hover:shadow-lg">${s.hero.primaryCta}</a>
             <a href="#all-generators" class="btn btn-lg btn-ghost">${s.hero.secondaryCta}</a>
           </div>
         </div>
         <div class="flex-1 flex justify-center md:justify-end w-full max-w-[500px]">
           <svg width="400" height="300" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
             <rect x="20" y="40" width="360" height="240" rx="8" stroke="#8159BB" stroke-width="2" stroke-opacity="0.3"/>
             <rect x="20" y="40" width="360" height="40" rx="8" fill="#8159BB" fill-opacity="0.1"/>
             <circle cx="45" cy="60" r="5" fill="#8159BB" fill-opacity="0.3"/>
             <circle cx="65" cy="60" r="5" fill="#8159BB" fill-opacity="0.3"/>
             <circle cx="85" cy="60" r="5" fill="#8159BB" fill-opacity="0.3"/>
             <rect x="40" y="100" width="120" height="20" rx="4" fill="#E2E4E7"/>
             <rect x="40" y="140" width="200" height="12" rx="4" fill="#F4F6F8"/>
             <rect x="40" y="160" width="160" height="12" rx="4" fill="#F4F6F8"/>
             <rect x="40" y="200" width="80" height="24" rx="4" fill="#8159BB" fill-opacity="0.6"/>
             <rect x="220" y="100" width="140" height="140" rx="4" fill="#E2E4E7"/>
             <circle cx="290" cy="170" r="40" stroke="#8159BB" stroke-width="2" stroke-opacity="0.3"/>
           </svg>
         </div>
       </div>
     </section>

     ${renderFeaturedSection()}
     ${renderBrowseCategorySection()}
     ${renderDirectorySection()}
     ${renderHowItWorks()}
     ${renderWhyStrikingly()}
     ${renderFAQ()}

     <section class="py-[60px] md:py-[80px] px-6 text-center max-w-[800px] mx-auto w-full">
       <h2 class="font-heading font-bold text-strk-heading text-[26px] md:text-[32px] leading-tight mb-2 uppercase">${s.closing.title}</h2>
       <p class="text-strk-body mb-[40px]">${s.closing.sub}</p>
       <a href="/s/ai_site_builder" class="btn btn-lg btn-primary shadow-md hover:shadow-lg inline-flex">${s.closing.cta}</a>
     </section>
   </main>

   <footer class="bg-strk-lightBg border-t border-strk-divider py-[60px] px-6 text-sm text-strk-body">
     <div class="max-w-[1200px] mx-auto w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 mb-8">
       <div class="md:col-span-1">
         <svg width="100" height="24" viewBox="0 0 200 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Strikingly">
           <text x="0" y="32" font-family="'Josefin Sans', sans-serif" font-weight="700" font-size="28" fill="#4B5056">strikingly</text>
         </svg>
       </div>
       <div>
         <h4 class="font-bold text-strk-heading mb-4 uppercase">Product</h4>
         <ul class="space-y-2">
           <li><a href="/templates" class="hover:text-strk-purple focus:outline-none focus:underline">Templates</a></li>
           <li><a href="/pricing" class="hover:text-strk-purple focus:outline-none focus:underline">Pricing</a></li>
         </ul>
       </div>
       <div>
         <h4 class="font-bold text-strk-heading mb-4 uppercase">Company</h4>
         <ul class="space-y-2">
           <li><a href="/about" class="hover:text-strk-purple focus:outline-none focus:underline">About</a></li>
           <li><a href="/blog" class="hover:text-strk-purple focus:outline-none focus:underline">Blog</a></li>
         </ul>
       </div>
       <div>
         <h4 class="font-bold text-strk-heading mb-4 uppercase">Support</h4>
         <ul class="space-y-2">
           <li><a href="/support" class="hover:text-strk-purple focus:outline-none focus:underline">Help Center</a></li>
           <li><a href="/support" class="hover:text-strk-purple focus:outline-none focus:underline">Contact Us</a></li>
         </ul>
       </div>
       <div>
         <h4 class="font-bold text-strk-heading mb-4 uppercase">Legal</h4>
         <ul class="space-y-2">
           <li><a href="/terms" class="hover:text-strk-purple focus:outline-none focus:underline">Terms of Service</a></li>
           <li><a href="/privacy" class="hover:text-strk-purple focus:outline-none focus:underline">Privacy Policy</a></li>
         </ul>
       </div>
     </div>
     <div class="max-w-[1200px] mx-auto w-full border-t border-strk-divider pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
       <p>&copy; ${new Date().getFullYear()} Strikingly. All rights reserved.</p>
       <div class="flex items-center gap-4">
         <span class="text-xs">English</span>
       </div>
     </div>
   </footer>
`;

const indexPath = path.join(__dirname, 'index.html');
const template = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>AI Website Generators - Build Any Site in Seconds | Strikingly</title>
    <meta name="description" content="Browse Strikingly's AI-powered website generators. Choose one for your industry, goal, or site type and create a website in seconds, no code required.">
    <link rel="canonical" href="https://www.strikingly.com/generators">
    
    <meta property="og:title" content="AI Website Generators - Build Any Site in Seconds | Strikingly">
    <meta property="og:description" content="Browse Strikingly's AI-powered website generators. Choose one for your industry, goal, or site type and create a website in seconds.">
    <meta property="og:url" content="https://www.strikingly.com/generators">

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@700&family=Open+Sans:wght@400;600&display=swap" rel="stylesheet">
    
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [{
        "@type": "ListItem",
        "position": 1,
        "name": "Strikingly",
        "item": "https://www.strikingly.com/"
      },{
        "@type": "ListItem",
        "position": 2,
        "name": "AI Generators"
      }]
    }
    </script>
    <link rel="stylesheet" href="/src/style.css">
  </head>
  <body class="bg-white font-body text-strk-body antialiased">
    <noscript>
      <style>
        .dir-card.hidden { display: block !important; }
        .show-all-container { display: none !important; }
      </style>
    </noscript>
    
    <!-- GENERATED_CONTENT -->
    
    <script type="module" src="/src/main.js"></script>
  </body>
</html>`;

const finalHtml = template.replace('<!-- GENERATED_CONTENT -->', html);
fs.writeFileSync(indexPath, finalHtml);
console.log("HTML Generation complete!");