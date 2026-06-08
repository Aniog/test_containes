from html import escape
import json
import re
from pathlib import Path

featured = [
    ("AI Website Generator", "Describe your business, get a full site", "Website"),
    ("Free Portfolio Generator", "For creatives, in minutes, no fee", "Portfolio"),
    ("AI Landing Page Maker", "One-page sites built to convert", "Landing Page"),
    ("Online Store Builder", "Start selling without writing code", "Store"),
    ("Link-in-Bio Generator", "One link for all your channels", "Link-in-Bio"),
    ("One-Page Website Builder", "Simple sites, single scroll", "Website"),
    ("Wedding Website Generator", "Share your day with guests", "Website"),
    ("Restaurant Website Builder", "Menu, hours, reservations, done", "Website"),
    ("Blog Generator for Beginners", "Publish-ready in minutes", "Blog"),
]

categories = [
    ("websites", "Websites", "AI-built business and personal sites for any goal."),
    ("landing-pages", "Landing Pages", "Single-page sites built to convert visitors fast."),
    ("portfolios", "Portfolios", "Showcase your work with a clean, focused site."),
    ("blogs", "Blogs", "Publish-ready blogs with built-in SEO basics."),
    ("stores", "Online Stores", "Sell products online with payments built in."),
    ("link-in-bio", "Link-in-Bio", "One link, all your places. Made for creators."),
]

directory = {
    "websites": [
        ("AI Website Generator", "Describe your business and get a complete site in seconds."),
        ("Free Website Builder for Photographers", "Create a polished photo site without design work."),
        ("One-Page Wedding Website Builder", "Share details, schedules, and RSVP links in one scroll."),
        ("Restaurant Website Builder", "Turn menus, hours, and reservations into a clean site."),
        ("No-Code Business Website Generator", "Launch a professional company site without developers."),
        ("Beautiful Personal Website Maker", "Introduce yourself with a simple, polished online home."),
        ("AI Website Builder for Consultants", "Explain services and book client conversations faster."),
        ("Small Business Website Generator", "Create a clear home for your local business online."),
        ("Church Website Builder", "Share service times, events, and community updates."),
        ("Fitness Coach Website Generator", "Promote programs, pricing, and contact options."),
        ("Event Website Builder", "Publish event details, schedule highlights, and registration links."),
    ],
    "landing-pages": [
        ("AI Landing Page Maker", "Generate a focused page built around one clear action."),
        ("Free Product Landing Page Builder", "Introduce a product with benefits, visuals, and a CTA."),
        ("Startup Landing Page Generator", "Explain your idea and collect interest quickly."),
        ("SaaS Landing Page Builder", "Present features, pricing, and demos in one page."),
        ("Lead Generation Landing Page Maker", "Guide visitors toward booking, calling, or signing up."),
        ("Event Landing Page Generator", "Promote dates, speakers, tickets, and event details."),
        ("App Landing Page Builder", "Showcase your app with a mobile-friendly launch page."),
        ("Course Landing Page Generator", "Sell an online course with modules and outcomes."),
        ("No-Code Landing Page Creator", "Build a conversion page without touching code."),
        ("Beautiful Landing Page Maker", "Start from a polished one-page marketing layout."),
        ("Coming Soon Page Generator", "Announce a launch and collect early interest."),
    ],
    "portfolios": [
        ("Free Portfolio Generator", "For creatives, in minutes, no fee."),
        ("Portfolio Generator for Designers", "Present case studies and visual work with clarity."),
        ("Photography Portfolio Builder", "Show galleries, services, and booking details."),
        ("Artist Portfolio Website Maker", "Display artwork, exhibitions, and contact information."),
        ("Student Portfolio Generator", "Build a clean portfolio for school or internships."),
        ("No-Code Portfolio Builder", "Create a portfolio site without templates or code."),
        ("AI Portfolio Website Generator", "Describe your work and get a tailored portfolio draft."),
        ("Writer Portfolio Builder", "Collect essays, clips, and contact details in one place."),
        ("Resume Portfolio Website Maker", "Turn your resume into a professional personal site."),
        ("Architect Portfolio Generator", "Show projects, process, and studio information."),
        ("Freelancer Portfolio Builder", "Package services, work samples, and inquiry links."),
    ],
    "blogs": [
        ("Blog Generator for Beginners", "Start a publish-ready blog in minutes."),
        ("AI Blog Website Builder", "Create a blog structure with categories and SEO basics."),
        ("Personal Blog Generator", "Share stories, updates, and ideas on a clean site."),
        ("Travel Blog Website Maker", "Publish destinations, guides, and photo-led posts."),
        ("Food Blog Generator", "Create a home for recipes, tips, and cooking stories."),
        ("Business Blog Builder", "Support your brand with articles and company updates."),
        ("No-Code Blog Maker", "Start writing without managing hosting or code."),
        ("Beautiful Blog Website Generator", "Launch a polished editorial-style blog."),
        ("SEO Blog Generator", "Organize posts with search-friendly structure from the start."),
        ("News Blog Website Builder", "Publish timely updates in a simple, readable format."),
        ("Lifestyle Blog Generator", "Create a flexible blog for fashion, wellness, and daily life."),
    ],
    "stores": [
        ("Online Store Builder", "Start selling without writing code."),
        ("Online Store Builder for Restaurants", "Sell meals, gift cards, or local pickup items online."),
        ("AI Ecommerce Website Generator", "Build a storefront with products, pages, and checkout cues."),
        ("Free Online Store Maker", "Open a small shop and test your idea for free."),
        ("Handmade Product Store Builder", "Show craft products with simple buying paths."),
        ("Boutique Store Website Generator", "Create a stylish shop for apparel and accessories."),
        ("Digital Product Store Builder", "Sell downloads, guides, courses, and files online."),
        ("No-Code Ecommerce Builder", "Create a store without plugins or developer setup."),
        ("Beauty Brand Store Generator", "Launch a product-focused store for skincare or cosmetics."),
        ("Bakery Online Store Builder", "Sell treats, preorders, and seasonal specials."),
        ("Subscription Box Store Maker", "Introduce recurring products with clear plan options."),
    ],
    "link-in-bio": [
        ("Link-in-Bio Generator", "One link for all your channels."),
        ("Creator Link Page Builder", "Collect socials, products, videos, and updates in one place."),
        ("Instagram Bio Link Maker", "Build a mobile-first hub for profile visitors."),
        ("TikTok Link-in-Bio Builder", "Send followers to your best content and offers."),
        ("Musician Link Page Generator", "Share music, tour links, merch, and socials."),
        ("Podcast Link-in-Bio Maker", "Guide listeners to episodes, platforms, and newsletters."),
        ("Influencer Link Page Builder", "Show sponsored links, socials, and featured content."),
        ("No-Code Bio Link Generator", "Create a personal link hub without extra tools."),
        ("Beautiful Link Page Maker", "Design a polished single-link destination."),
        ("Coach Link-in-Bio Builder", "Promote sessions, free resources, and contact options."),
        ("Small Business Link Page Generator", "Put your hours, links, menu, and contact options together."),
    ],
}

faq = [
    ("What is an AI site generator?", ["An AI site generator turns a short description of your goal into a working website draft. Instead of starting with a blank page, you start with structure, copy, and sections that fit the kind of site you want to build.", "On Strikingly, the generator hands you into the AI Site Builder so you can refine the result and publish when you're ready."]),
    ("How is a generator different from a template?", ["A template gives you a fixed starting layout. A generator asks what you are building and creates a more specific first draft for your industry, audience, or goal.", "You can still customize the result, but the starting point is guided by your intent instead of a generic design."]),
    ("Are these generators free to use?", ["Yes. You can start with the AI builder for free and create a site draft without a credit card.", "Some advanced publishing, domain, or commerce features may depend on your Strikingly plan, but exploring and generating a starting site is free."]),
    ("What kinds of sites can I build?", ["You can build business websites, landing pages, portfolios, blogs, online stores, event pages, restaurant sites, wedding sites, and link-in-bio pages.", "The directory is organized by site type so you can choose a starting point that matches your goal."]),
    ("Can I customize what the generator produces?", ["Yes. The generated site is only the starting draft. You can edit text, sections, images, colors, pages, and calls to action before publishing.", "You stay in control of the final site while the AI helps you move faster."]),
    ("Do generated sites work on mobile?", ["Yes. Strikingly sites are designed to work on phones, tablets, and desktop screens from the start.", "You can preview and adjust your site before publishing so the experience feels right on every device."]),
]

def e(value):
    return escape(value, quote=True)

def slugify(value):
    return re.sub(r"[^a-z0-9]+", "-", value.lower()).strip("-")

def icon(kind, cls):
    paths = {
        "websites": '<rect x="9" y="11" width="46" height="30" rx="3"/><path d="M9 18h46M16 26h14M16 33h25"/><circle cx="16" cy="15" r="1"/><circle cx="21" cy="15" r="1"/>',
        "landing-pages": '<rect x="11" y="10" width="42" height="32" rx="3"/><path d="M18 19h20M18 26h28M18 34h14"/><path d="M40 34h8"/>',
        "portfolios": '<rect x="10" y="13" width="20" height="24" rx="2"/><rect x="34" y="10" width="20" height="28" rx="2"/><path d="M15 30h10M39 29h10M39 23h7"/>',
        "blogs": '<rect x="13" y="10" width="38" height="34" rx="3"/><path d="M20 18h24M20 25h24M20 32h16M20 38h11"/>',
        "stores": '<path d="M13 22h38l-4-10H17l-4 10Z"/><path d="M17 22v22h30V22"/><path d="M25 44V32h14v12"/><path d="M21 28h22"/>',
        "link-in-bio": '<rect x="20" y="8" width="24" height="40" rx="5"/><circle cx="32" cy="18" r="4"/><path d="M25 29h14M25 36h14M28 43h8"/>',
    }
    return f'<svg class="{cls}" width="64" height="54" viewBox="0 0 64 54" fill="none" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg"><g stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">{paths[kind]}</g></svg>'

feature_cards = "\n".join(
    f'<article class="feature-card"><a class="card-link" href="/generators/{slugify(name)}"><span class="feature-name">{e(name)}</span><span class="feature-desc">{e(desc)}</span><span class="tag">{e(cat)}</span></a></article>'
    for name, desc, cat in featured
)
category_cards = "\n".join(
    f'<article class="category-card"><a class="card-link" href="/generators#{cid}">{icon(cid, "category-art")}<span class="category-name">{e(name)}</span><span class="category-desc">{e(desc)}</span><span class="category-arrow" aria-hidden="true">→</span></a></article>'
    for cid, name, desc in categories
)
section_html = []
for cid, name, desc in categories:
    cards = "\n".join(
        f'<article class="generator-card" data-generator-card data-name="{e(gname.lower())}" data-description="{e(gdesc.lower())}" data-category="{e(name.lower())}"><a class="card-link" href="/generators/{slugify(gname)}">{icon(cid, "generator-thumb")}<span class="generator-name">{e(gname)}</span><span class="generator-desc">{e(gdesc)}</span></a></article>'
        for gname, gdesc in directory[cid]
    )
    section_html.append(f'<section class="generator-category" id="{cid}" data-generator-section><h3>{e(name)}</h3><p>{e(desc)}</p><div class="generator-grid-wrap" id="{cid}-grid"><div class="generator-grid">{cards}</div></div><button class="show-toggle" type="button" aria-expanded="false" aria-controls="{cid}-grid" data-show-label="Show all {len(directory[cid])} generators" data-hide-label="Show fewer">Show all {len(directory[cid])} generators</button></section>')
directory_sections = "\n".join(section_html)
faq_html = "\n".join(
    f'<article class="faq-item"><h3 class="faq-question-heading"><button type="button" class="faq-question" aria-expanded="true" aria-controls="faq-answer-{i}" id="faq-question-{i}"><span>{e(q)}</span><span class="faq-icon" aria-hidden="true">+</span></button></h3><div class="faq-answer" id="faq-answer-{i}" role="region" aria-labelledby="faq-question-{i}">{"".join(f"<p>{e(p)}</p>" for p in ps)}</div></article>'
    for i, (q, ps) in enumerate(faq, 1)
)
strings = {"en": {"hero": {"line1": "BUILD ANY KIND OF SITE", "line2": "WITH AI, IN AN INSTANT"}, "featured": featured, "categories": categories, "directory": directory, "faq": faq}}
json_ld = {"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Strikingly","item":"https://www.strikingly.com/"},{"@type":"ListItem","position":2,"name":"AI Generators","item":"https://www.strikingly.com/generators"}]}
total = sum(len(v) for v in directory.values())
css = r'''
:root{--brand-purple:#8159BB;--ai-blue:#7671FF;--ai-pink:#CB0C9F;--body-text:#636972;--section-heading:#4B5056;--hero-heading:#2E2E2F;--card-border:#C6C9CD;--divider:#E2E4E7;--light-bg:#F4F6F8;--white:#FFFFFF;--heading-font:"Brandon Grotesque","Josefin Sans","Poppins",sans-serif;--body-font:"Open Sans",Arial,sans-serif;--gradient-ai:linear-gradient(90deg,var(--ai-blue),var(--ai-pink))}*{box-sizing:border-box}html{scroll-behavior:smooth;scroll-padding-top:90px}body{margin:0;background:var(--white);color:var(--body-text);font-family:var(--body-font);font-size:14px;line-height:1.5;-webkit-font-smoothing:antialiased}a{color:inherit;text-decoration:none}a:focus-visible,button:focus-visible,input:focus-visible{outline:3px solid var(--brand-purple);outline-offset:3px}button,input{font:inherit}button{cursor:pointer}.container{width:min(1200px,calc(100% - 40px));margin-inline:auto}.top-bar{background:var(--white);border-bottom:1px solid var(--divider)}.top-bar .container{min-height:60px;display:flex;align-items:center}.brand-logo{display:inline-flex;align-items:baseline;gap:5px;color:var(--hero-heading);font-family:var(--heading-font);font-size:20px;font-weight:700;letter-spacing:.04em;text-transform:lowercase}.brand-logo span{color:var(--brand-purple);text-transform:uppercase;font-size:13px;letter-spacing:.08em}.breadcrumb{padding-block:12px;color:var(--body-text);font-size:13px}.breadcrumb ol{display:flex;flex-wrap:wrap;align-items:center;gap:8px;list-style:none;margin:0;padding:0}.breadcrumb a:hover{color:var(--brand-purple)}.breadcrumb-separator{color:var(--brand-purple)}.hero{position:relative;overflow:hidden;padding-block:70px;border-bottom:1px solid var(--divider)}.hero:before{content:"";position:absolute;inset-block-start:0;inset-inline-end:0;width:70%;height:100%;background:radial-gradient(circle at 70% 30%,rgba(203,12,159,.10),transparent 35%),radial-gradient(circle at 80% 65%,rgba(118,113,255,.10),transparent 38%);pointer-events:none}.hero-grid{position:relative;display:grid;grid-template-columns:minmax(0,1fr) minmax(360px,520px);align-items:center;gap:60px}h1,h2,h3,.button,.category-name,.feature-name,.generator-name,.tag,.claim-title,.step-title,.footer-title{font-family:var(--heading-font);font-weight:700;text-transform:uppercase;line-height:1.2}h1,h2,h3,p{margin-block-start:0}h1{margin-block-end:20px;color:var(--hero-heading);font-size:clamp(31px,4vw,46px);letter-spacing:.02em}.hero-gradient-line{display:block;background:var(--gradient-ai);-webkit-background-clip:text;background-clip:text;color:transparent}.hero-subheadline{max-width:560px;margin-block-end:30px;color:var(--body-text);font-size:16px}.button-row{display:flex;flex-wrap:wrap;gap:10px}.button{min-height:36px;display:inline-flex;align-items:center;justify-content:center;border-radius:4px;border:1px solid transparent;padding:9px 15px;font-size:14px;letter-spacing:.04em;transition:border-color .16s,box-shadow .16s,transform .16s}.button-large{min-height:44px}.button-primary{background:var(--gradient-ai);color:var(--white);box-shadow:0 10px 22px rgba(129,89,187,.22)}.button-primary:hover{box-shadow:0 14px 26px rgba(129,89,187,.28);transform:translateY(-1px)}.button-ghost{background:transparent;border-color:var(--brand-purple);color:var(--brand-purple)}.button-ghost:hover{box-shadow:0 8px 18px rgba(129,89,187,.12)}.hero-illustration{width:100%;height:auto;color:var(--brand-purple)}.section{padding-block:40px}.section-header{margin-block-end:30px}h2{margin-block-end:10px;color:var(--section-heading);font-size:clamp(26px,3vw,32px);letter-spacing:.04em}.section-header p{margin-block-end:0;color:var(--body-text)}.feature-grid,.category-grid,.generator-grid,.why-grid,.footer-grid{display:grid;gap:20px}.feature-grid,.generator-grid,.category-grid,.why-grid{grid-template-columns:repeat(3,minmax(0,1fr))}.feature-card,.category-card,.generator-card,.why-card,.faq-item{background:var(--white);border:1px solid var(--card-border);border-radius:3px}.card-link{min-height:100%;display:flex;flex-direction:column;gap:10px;padding:20px;color:var(--body-text)}.feature-card,.category-card,.generator-card{transition:border-color .16s,box-shadow .16s,transform .16s}.feature-card:hover,.category-card:hover,.generator-card:hover,.feature-card:focus-within,.category-card:focus-within,.generator-card:focus-within{border-color:var(--brand-purple);box-shadow:0 10px 24px rgba(46,46,47,.08);transform:translateY(-2px)}.feature-name,.generator-name,.category-name{color:var(--section-heading);font-size:16px;letter-spacing:.03em}.feature-desc,.generator-desc,.category-desc{color:var(--body-text)}.tag{align-self:flex-start;margin-block-start:auto;border:1px solid var(--brand-purple);border-radius:3px;padding:2px 6px;color:var(--brand-purple);font-size:11px;letter-spacing:.05em}.category-art,.generator-thumb{color:var(--brand-purple);flex:0 0 auto}.category-arrow{margin-block-start:auto;color:var(--brand-purple);font-size:22px;line-height:1}.light-section{background:var(--light-bg);border-block:1px solid var(--divider)}.search-row{display:flex;flex-wrap:wrap;align-items:center;gap:15px 20px;margin-block-end:30px}.search-wrap{position:relative;width:min(480px,100%)}.search-icon{position:absolute;inset-block-start:50%;inset-inline-start:15px;color:var(--brand-purple);transform:translateY(-50%);pointer-events:none}.search-input{width:100%;min-height:44px;border:1px solid var(--card-border);border-radius:4px;background:var(--white);color:var(--section-heading);padding-block:9px;padding-inline:42px 15px}.search-input::placeholder{color:#757B83}.result-count{color:var(--body-text)}.empty-state{display:none;margin-block-end:30px;border:1px solid var(--card-border);border-radius:3px;background:var(--white);padding:20px;color:var(--body-text)}.empty-state.is-visible{display:block}.empty-state p{margin-block-end:10px}.text-button{border:0;background:transparent;color:var(--brand-purple);padding:0;text-decoration:underline}.builder-link{color:var(--brand-purple);text-decoration:underline}.generator-category{padding-block:30px;border-top:1px solid var(--divider)}.generator-category:first-of-type{border-top:0;padding-block-start:0}.generator-category h3{margin-block-end:5px;color:var(--section-heading);font-size:22px;letter-spacing:.04em}.generator-category p{margin-block-end:20px}.generator-grid-wrap{max-height:5000px;overflow:hidden;transition:max-height .26s ease}.js-enabled .generator-category.is-collapsed .generator-grid-wrap{max-height:var(--collapsed-height,520px)}.generator-card.is-search-hidden,.generator-category.is-section-hidden{display:none}.show-toggle{display:none;margin-block-start:20px;min-height:36px;border:1px solid var(--brand-purple);border-radius:4px;background:transparent;color:var(--brand-purple);padding:9px 15px;font-family:var(--heading-font);font-size:14px;font-weight:700;letter-spacing:.04em;text-transform:uppercase}.js-enabled .show-toggle{display:inline-flex;align-items:center;justify-content:center}.js-enabled.search-active .show-toggle{display:none}.steps{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:20px}.step{display:grid;grid-template-columns:50px 1fr;gap:15px;align-items:start}.step-number{width:44px;height:44px;display:inline-flex;align-items:center;justify-content:center;border-radius:999px;background:var(--brand-purple);color:var(--white);font-family:var(--heading-font);font-size:18px;font-weight:700}.step-title,.claim-title{display:block;margin-block-end:8px;color:var(--section-heading);font-size:15px;letter-spacing:.04em}.step p,.why-card p{margin-block-end:0}.why-card{padding:20px}.why-icon{margin-block-end:15px;color:var(--brand-purple)}.faq-list{display:grid;gap:10px}.faq-question-heading{margin:0}.faq-question{width:100%;display:flex;align-items:center;justify-content:space-between;gap:20px;border:0;background:var(--white);color:var(--section-heading);padding:20px;font-family:var(--heading-font);font-size:16px;font-weight:700;letter-spacing:.03em;text-align:start;text-transform:uppercase}.faq-icon{color:var(--brand-purple);font-size:22px}.faq-answer{padding:0 20px 20px;color:var(--body-text)}.faq-answer p:last-child{margin-block-end:0}.js-enabled .faq-answer[hidden]{display:none}.closing-cta{text-align:center}.closing-cta p{margin-block-end:20px}.site-footer{padding-block:40px 30px;border-top:1px solid var(--divider);background:var(--light-bg)}.footer-grid{grid-template-columns:1.2fr repeat(4,1fr);align-items:start}.footer-title{display:block;margin-block-end:10px;color:var(--section-heading);font-size:14px;letter-spacing:.04em}.footer-list{list-style:none;margin:0;padding:0}.footer-list li+li{margin-block-start:8px}.footer-list a:hover{color:var(--brand-purple)}.copyright{margin-block:30px 0;color:var(--body-text);font-size:13px}@media(max-width:900px){.hero-grid{grid-template-columns:1fr;gap:40px}.hero-copy{order:1}.hero-art{order:2}.feature-grid,.category-grid,.generator-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.steps,.why-grid{grid-template-columns:1fr}.footer-grid{grid-template-columns:repeat(2,minmax(0,1fr))}}@media(max-width:560px){.container{width:min(100% - 30px,1200px)}.hero{padding-block:60px}.hero-grid{gap:30px}.button-row,.button-row .button{width:100%}.feature-grid,.category-grid,.generator-grid,.footer-grid{grid-template-columns:1fr}.step{grid-template-columns:44px 1fr}}
'''
js = r'''
const strings = STRINGS_PLACEHOLDER;
(() => {
  document.documentElement.classList.add('js-enabled');
  const searchInput = document.getElementById('generator-search');
  const resultCount = document.getElementById('generator-result-count');
  const emptyState = document.getElementById('generator-empty-state');
  const clearSearch = document.getElementById('clear-search');
  const sections = Array.from(document.querySelectorAll('[data-generator-section]'));
  const collapseLimit = 6;
  const pluralize = (count) => `${count} generator${count === 1 ? '' : 's'} match`;
  const updateCollapsedHeights = () => {
    sections.forEach((section) => {
      const wrap = section.querySelector('.generator-grid-wrap');
      const cards = Array.from(section.querySelectorAll('[data-generator-card]'));
      if (!wrap || cards.length <= collapseLimit) return;
      const wrapTop = wrap.getBoundingClientRect().top;
      const target = cards[collapseLimit - 1];
      const height = Math.ceil(target.getBoundingClientRect().bottom - wrapTop + 2);
      wrap.style.setProperty('--collapsed-height', `${height}px`);
    });
  };
  const resetCollapsedState = () => {
    sections.forEach((section) => {
      const cards = section.querySelectorAll('[data-generator-card]');
      const toggle = section.querySelector('.show-toggle');
      section.classList.toggle('is-collapsed', cards.length > collapseLimit);
      if (toggle) {
        toggle.setAttribute('aria-expanded', 'false');
        toggle.textContent = toggle.dataset.showLabel;
      }
    });
    updateCollapsedHeights();
  };
  const handleSearch = () => {
    const query = searchInput.value.trim().toLowerCase();
    const isSearching = query.length > 0;
    document.documentElement.classList.toggle('search-active', isSearching);
    let totalMatches = 0;
    sections.forEach((section) => {
      let sectionMatches = 0;
      section.classList.toggle('is-collapsed', !isSearching && section.querySelectorAll('[data-generator-card]').length > collapseLimit);
      section.querySelectorAll('[data-generator-card]').forEach((card) => {
        const searchable = `${card.dataset.name} ${card.dataset.description} ${card.dataset.category}`;
        const matches = !isSearching || searchable.includes(query);
        card.classList.toggle('is-search-hidden', !matches);
        if (matches) sectionMatches += 1;
      });
      section.classList.toggle('is-section-hidden', isSearching && sectionMatches === 0);
      totalMatches += sectionMatches;
    });
    resultCount.textContent = pluralize(totalMatches);
    emptyState.classList.toggle('is-visible', isSearching && totalMatches === 0);
    if (!isSearching) resetCollapsedState();
  };
  document.querySelectorAll('.show-toggle').forEach((toggle) => {
    toggle.addEventListener('click', () => {
      const section = toggle.closest('[data-generator-section]');
      const isCollapsed = section.classList.toggle('is-collapsed');
      toggle.setAttribute('aria-expanded', String(!isCollapsed));
      toggle.textContent = isCollapsed ? toggle.dataset.showLabel : toggle.dataset.hideLabel;
      updateCollapsedHeights();
    });
  });
  searchInput.addEventListener('input', handleSearch);
  clearSearch.addEventListener('click', () => { searchInput.value = ''; handleSearch(); searchInput.focus(); });
  document.querySelectorAll('.faq-question').forEach((button, index) => {
    const answer = document.getElementById(button.getAttribute('aria-controls'));
    const expanded = index === 0;
    button.setAttribute('aria-expanded', String(expanded));
    if (answer) answer.hidden = !expanded;
    const icon = button.querySelector('.faq-icon');
    if (icon) icon.textContent = expanded ? '−' : '+';
    button.addEventListener('click', () => {
      const currentlyExpanded = button.getAttribute('aria-expanded') === 'true';
      button.setAttribute('aria-expanded', String(!currentlyExpanded));
      if (answer) answer.hidden = currentlyExpanded;
      if (icon) icon.textContent = currentlyExpanded ? '+' : '−';
    });
  });
  window.addEventListener('resize', updateCollapsedHeights);
  window.addEventListener('load', updateCollapsedHeights);
  resetCollapsedState();
})();
'''.replace('STRINGS_PLACEHOLDER', json.dumps(strings, ensure_ascii=False))
html = f'''<!doctype html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>AI Website Generators - Build Any Site in Seconds | Strikingly</title>
<meta name="description" content="Browse Strikingly's AI-powered website generators. Choose one for your industry, goal, or site type and create a website in seconds, no code required.">
<link rel="canonical" href="https://www.strikingly.com/generators">
<meta property="og:title" content="AI Website Generators - Build Any Site in Seconds | Strikingly">
<meta property="og:description" content="Browse Strikingly's AI-powered website generators. Choose one for your industry, goal, or site type and create a website in seconds.">
<meta property="og:url" content="https://www.strikingly.com/generators">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@700&family=Open+Sans:wght@400;600;700&display=swap" rel="stylesheet">
<script type="application/ld+json">{json.dumps(json_ld, ensure_ascii=False)}</script>
<style>{css}</style>
</head>
<body>
<header class="top-bar"><div class="container"><a class="brand-logo" href="/" aria-label="Strikingly AI home">strikingly <span>AI</span></a></div></header>
<nav class="breadcrumb" aria-label="Breadcrumb"><div class="container"><ol><li><a href="/">Strikingly</a></li><li class="breadcrumb-separator" aria-hidden="true">&gt;</li><li aria-current="page">AI Generators</li></ol></div></nav>
<main>
<section class="hero" aria-labelledby="page-title"><div class="container hero-grid"><div class="hero-copy"><h1 id="page-title">BUILD ANY KIND OF SITE <span class="hero-gradient-line">WITH AI, IN AN INSTANT</span></h1><p class="hero-subheadline">Browse the right generator for what you're building, or jump straight into our AI site builder.</p><div class="button-row"><a class="button button-large button-primary" href="/s/ai_site_builder">START BUILDING - IT'S FREE</a><a class="button button-large button-ghost" href="#all-generators">BROWSE GENERATORS</a></div></div><div class="hero-art" aria-hidden="true"><svg class="hero-illustration" width="520" height="360" viewBox="0 0 520 360" fill="none" focusable="false" xmlns="http://www.w3.org/2000/svg"><rect x="45" y="42" width="430" height="276" rx="18" fill="#FFFFFF" stroke="currentColor" stroke-width="3" opacity="0.72"/><path d="M45 94H475" stroke="currentColor" stroke-width="3" opacity="0.45"/><circle cx="76" cy="68" r="6" fill="currentColor" opacity="0.40"/><circle cx="100" cy="68" r="6" fill="currentColor" opacity="0.28"/><circle cx="124" cy="68" r="6" fill="currentColor" opacity="0.20"/><rect x="78" y="126" width="172" height="20" rx="10" fill="currentColor" opacity="0.16"/><rect x="78" y="164" width="230" height="12" rx="6" fill="currentColor" opacity="0.12"/><rect x="78" y="188" width="190" height="12" rx="6" fill="currentColor" opacity="0.12"/><rect x="78" y="226" width="106" height="38" rx="4" fill="url(#heroGradient)" opacity="0.88"/><rect x="330" y="126" width="98" height="138" rx="12" stroke="currentColor" stroke-width="3" opacity="0.38"/><path d="M350 158h58M350 184h58M350 210h38" stroke="currentColor" stroke-width="8" stroke-linecap="round" opacity="0.16"/><defs><linearGradient id="heroGradient" x1="78" y1="245" x2="184" y2="245" gradientUnits="userSpaceOnUse"><stop stop-color="#7671FF"/><stop offset="1" stop-color="#CB0C9F"/></linearGradient></defs></svg></div></div></section>
<section class="section" aria-labelledby="featured-heading"><div class="container"><div class="section-header"><h2 id="featured-heading">FEATURED GENERATORS</h2><p>A few common starting points.</p></div><div class="feature-grid">{feature_cards}</div></div></section>
<section class="section light-section" aria-labelledby="category-heading"><div class="container"><div class="section-header"><h2 id="category-heading">BROWSE BY CATEGORY</h2></div><div class="category-grid">{category_cards}</div></div></section>
<section class="section" id="all-generators" aria-labelledby="all-generators-heading"><div class="container"><div class="section-header"><h2 id="all-generators-heading">ALL GENERATORS</h2><p>Sixty-plus generators, organized by what you're building.</p></div><div class="search-row"><div class="search-wrap"><svg class="search-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.3-4.3M10.8 18a7.2 7.2 0 1 1 0-14.4 7.2 7.2 0 0 1 0 14.4Z" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg><input class="search-input" id="generator-search" type="search" aria-label="Search generators" placeholder="Search generators..." autocomplete="off"></div><span class="result-count" id="generator-result-count" aria-live="polite">{total} generators match</span></div><div class="empty-state" id="generator-empty-state" aria-live="polite"><p>No generators match your search.</p><button class="text-button" id="clear-search" type="button">Clear search</button><p><a class="builder-link" href="/s/ai_site_builder">Can't find it? Start with our AI builder.</a></p></div>{directory_sections}</div></section>
<section class="section light-section" aria-labelledby="how-heading"><div class="container"><div class="section-header"><h2 id="how-heading">HOW IT WORKS</h2></div><div class="steps"><article class="step"><span class="step-number" aria-hidden="true">1</span><div><span class="step-title">PICK A GENERATOR</span><p>Browse by category or search to find one that fits your goal.</p></div></article><article class="step"><span class="step-number" aria-hidden="true">2</span><div><span class="step-title">DESCRIBE YOUR SITE</span><p>Tell our AI builder about your business in a sentence or two.</p></div></article><article class="step"><span class="step-number" aria-hidden="true">3</span><div><span class="step-title">GENERATE AND PUBLISH</span><p>Get a fully built site in seconds. Customize anything, then go live.</p></div></article></div></div></section>
<section class="section" aria-labelledby="why-heading"><div class="container"><div class="section-header"><h2 id="why-heading">WHY STRIKINGLY</h2></div><div class="why-grid"><article class="why-card"><svg class="why-icon" width="38" height="38" viewBox="0 0 48 48" fill="none" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg"><path d="M25 4 10 27h12l-2 17 18-25H26l-1-15Z" stroke="currentColor" stroke-width="3" stroke-linejoin="round"/></svg><span class="claim-title">LIVE IN SECONDS</span><p>Describe your site, we build it. No setup, no learning curve.</p></article><article class="why-card"><svg class="why-icon" width="38" height="38" viewBox="0 0 48 48" fill="none" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg"><rect x="15" y="5" width="18" height="38" rx="4" stroke="currentColor" stroke-width="3"/><path d="M21 37h6" stroke="currentColor" stroke-width="3" stroke-linecap="round"/></svg><span class="claim-title">MOBILE BY DEFAULT</span><p>Every generator produces responsive sites that work on any device.</p></article><article class="why-card"><svg class="why-icon" width="38" height="38" viewBox="0 0 48 48" fill="none" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg"><path d="M8 24h32M24 8v32" stroke="currentColor" stroke-width="3" stroke-linecap="round"/><circle cx="24" cy="24" r="17" stroke="currentColor" stroke-width="3"/></svg><span class="claim-title">FREE TO START</span><p>Generate, customize, and publish without a credit card.</p></article></div></div></section>
<section class="section light-section" aria-labelledby="faq-heading"><div class="container"><div class="section-header"><h2 id="faq-heading">FREQUENTLY ASKED QUESTIONS</h2></div><div class="faq-list">{faq_html}</div></div></section>
<section class="section closing-cta" aria-labelledby="closing-heading"><div class="container"><h2 id="closing-heading">READY TO BUILD?</h2><p>Pick a generator above, or jump straight into our AI builder.</p><a class="button button-large button-primary" href="/s/ai_site_builder">START WITH AI BUILDER</a></div></section>
</main>
<footer class="site-footer"><div class="container"><div class="footer-grid"><div><a class="brand-logo" href="/" aria-label="Strikingly AI home">strikingly <span>AI</span></a></div><div><span class="footer-title">Product</span><ul class="footer-list"><li><a href="/pricing">Pricing</a></li><li><a href="/templates">Templates</a></li><li><a href="/s/ai_site_builder">AI Builder</a></li></ul></div><div><span class="footer-title">Company</span><ul class="footer-list"><li><a href="/about">About</a></li><li><a href="/blog">Blog</a></li></ul></div><div><span class="footer-title">Support</span><ul class="footer-list"><li><a href="/support">Support Center</a></li><li><a href="/terms">Terms</a></li></ul></div><div><span class="footer-title">Legal</span><ul class="footer-list"><li><a href="/privacy">Privacy</a></li></ul></div></div><p class="copyright">© 2026 Strikingly. All rights reserved.</p></div></footer>
<script>{js}</script>
</body>
</html>
'''
Path('/workspace/my-app/index.html').write_text(html, encoding='utf-8')
print(f'wrote {len(html)} bytes to index.html')
