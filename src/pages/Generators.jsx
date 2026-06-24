import React, { useEffect } from 'react';

const strings = {
  en: {
    breadcrumbHome: 'Strikingly',
    breadcrumbCurrent: 'AI Generators',
    heroLine1: 'BUILD ANY KIND OF SITE',
    heroLine2: 'WITH AI, IN AN INSTANT',
    heroSubtitle: 'Browse the right generator for what you\'re building, or jump straight into our AI site builder.',
    ctaPrimary: 'START BUILDING - IT\'S FREE',
    ctaSecondary: 'BROWSE GENERATORS',
    featuredHeading: 'FEATURED GENERATORS',
    featuredSubtitle: 'A few common starting points.',
    browseHeading: 'BROWSE BY CATEGORY',
    browseSubtitle: 'Jump to the type of site you want to build.',
    allGenHeading: 'ALL GENERATORS',
    allGenSubtitle: 'Sixty-plus generators, organized by what you\'re building.',
    searchPlaceholder: 'Search generators...',
    searchAriaLabel: 'Search generators',
    showAllPrefix: 'Show all ',
    showAllSuffix: ' generators',
    showLess: 'Show less',
    howHeading: 'HOW IT WORKS',
    howSubtitle: 'Three steps from idea to live site.',
    whyHeading: 'WHY STRIKINGLY',
    faqHeading: 'FREQUENTLY ASKED QUESTIONS',
    closingHeading: 'READY TO BUILD?',
    closingSub: 'Pick a generator above, or jump straight into our AI builder.',
    closingCta: 'START WITH AI BUILDER',
    footerBrand: 'Strikingly',
    footerDesc: 'Build a beautiful website in minutes with AI. No coding required.',
    footerProduct: 'Product',
    footerCompany: 'Company',
    footerResources: 'Resources',
    footerLegal: 'Legal',
    copyright: '© 2026 Strikingly. All rights reserved.',
  },
};

function useGeneratorsEffects() {
  useEffect(() => {
    // ===== SEARCH FILTER =====
    const searchInput = document.getElementById('generator-search');
    const searchCount = document.getElementById('search-count');
    const searchEmpty = document.getElementById('search-empty');
    const clearSearchBtn = document.getElementById('clear-search-btn');
    const allSubsections = document.querySelectorAll('.directory-subsection');
    const allCards = document.querySelectorAll('.dir-card');
    const TOTAL_CARDS = allCards.length;

    function updateSearch() {
      const query = searchInput.value.trim().toLowerCase();

      if (!query) {
        allSubsections.forEach(function(sub) {
          sub.classList.remove('search-hidden');
        });
        allCards.forEach(function(card) {
          card.classList.remove('search-hidden');
        });
        searchCount.textContent = TOTAL_CARDS + ' generators';
        searchEmpty.classList.remove('visible');
        return;
      }

      let matchCount = 0;
      const subsectionMatchMap = {};

      allSubsections.forEach(function(sub) {
        subsectionMatchMap[sub.id] = 0;
      });

      allCards.forEach(function(card) {
        const text = card.textContent.toLowerCase();
        const matches = text.includes(query);
        card.classList.toggle('search-hidden', !matches);
        if (matches) {
          matchCount++;
          const sub = card.closest('.directory-subsection');
          if (sub) {
            subsectionMatchMap[sub.id] = (subsectionMatchMap[sub.id] || 0) + 1;
          }
        }
      });

      allSubsections.forEach(function(sub) {
        if (subsectionMatchMap[sub.id] > 0) {
          sub.classList.remove('search-hidden');
        } else {
          sub.classList.add('search-hidden');
        }
      });

      searchCount.textContent = matchCount + ' generator' + (matchCount !== 1 ? 's' : '') + ' match';

      if (matchCount === 0) {
        searchEmpty.classList.add('visible');
      } else {
        searchEmpty.classList.remove('visible');
      }
    }

    if (searchInput) {
      searchInput.addEventListener('input', updateSearch);
      searchCount.textContent = TOTAL_CARDS + ' generators';
    }

    if (clearSearchBtn) {
      clearSearchBtn.addEventListener('click', function() {
        searchInput.value = '';
        updateSearch();
        searchInput.focus();
      });
    }

    // ===== SHOW ALL TOGGLES =====
    const INITIAL_VISIBLE = 6;

    document.querySelectorAll('.show-all-wrapper').forEach(function(wrapper) {
      const btn = wrapper.querySelector('.show-all-btn');
      const category = wrapper.getAttribute('data-show-all');
      const subsection = document.getElementById(category);
      if (!subsection || !btn) return;

      const grid = subsection.querySelector('[data-subsection="' + category + '"]');
      if (!grid) return;

      const cards = grid.querySelectorAll('.dir-card');
      const totalCards = cards.length;

      if (totalCards > INITIAL_VISIBLE) {
        for (let i = INITIAL_VISIBLE; i < cards.length; i++) {
          cards[i].classList.add('extra-card');
        }
        btn.textContent = 'Show all ' + totalCards + ' generators';
      } else {
        wrapper.style.display = 'none';
      }

      btn.addEventListener('click', function() {
        const isExpanded = btn.getAttribute('aria-expanded') === 'true';
        const extraCards = grid.querySelectorAll('.extra-card');

        if (isExpanded) {
          extraCards.forEach(function(c) { c.classList.add('extra-card'); });
          btn.setAttribute('aria-expanded', 'false');
          btn.textContent = 'Show all ' + totalCards + ' generators';
        } else {
          extraCards.forEach(function(c) { c.classList.remove('extra-card'); });
          btn.setAttribute('aria-expanded', 'true');
          btn.textContent = 'Show less';
        }
      });
    });

    // ===== FAQ ACCORDIONS =====
    document.querySelectorAll('.faq-btn').forEach(function(btn) {
      btn.addEventListener('click', function() {
        const expanded = btn.getAttribute('aria-expanded') === 'true';
        const panelId = btn.getAttribute('aria-controls');
        const panel = document.getElementById(panelId);

        if (!panel) return;

        if (expanded) {
          btn.setAttribute('aria-expanded', 'false');
          panel.classList.remove('open');
        } else {
          btn.setAttribute('aria-expanded', 'true');
          panel.classList.add('open');
        }
      });
    });

    // ===== SMOOTH SCROLL FOR HASH ANCHORS =====
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
      anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href').substring(1);
        const target = document.getElementById(targetId);
        if (target) {
          e.preventDefault();
          const topbar = document.querySelector('.topbar');
          const offset = topbar ? topbar.offsetHeight + 10 : 10;
          const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
          window.scrollTo({ top: top, behavior: 'smooth' });
        }
      });
    });
  }, []);
}

export default function Generators() {
  const s = strings.en;
  useGeneratorsEffects();

  return (
    <>
      {/* ===== SECTION 0: TOP BAR ===== */}
      <header className="topbar" role="banner">
        <div className="container">
          <div className="topbar-inner">
            <a href="/" className="topbar-logo" aria-label="Strikingly AI Home">
              Strikingly<span className="topbar-logo-dot" aria-hidden="true"></span> AI
            </a>
          </div>
        </div>
      </header>

      {/* ===== SECTION 1: BREADCRUMB ===== */}
      <nav className="breadcrumb" aria-label="Breadcrumb">
        <div className="container">
          <ol className="breadcrumb-list" itemscope itemType="https://schema.org/BreadcrumbList">
            <li itemprop="itemListElement" itemscope itemType="https://schema.org/ListItem">
              <a href="/" itemprop="item"><span itemprop="name">{s.breadcrumbHome}</span></a>
              <meta itemprop="position" content="1" />
            </li>
            <li itemprop="itemListElement" itemscope itemType="https://schema.org/ListItem">
              <span className="breadcrumb-current" itemprop="name">{s.breadcrumbCurrent}</span>
              <meta itemprop="position" content="2" />
            </li>
          </ol>
        </div>
      </nav>

      <main id="main-content">
        {/* ===== SECTION 2: HERO ===== */}
        <section className="hero section-hero" aria-labelledby="hero-heading">
          <div className="container">
            <div className="hero-grid">
              <div className="hero-content">
                <h1 className="hero-title" id="hero-heading">
                  <span>{s.heroLine1}</span><br />
                  <span className="ai-gradient">{s.heroLine2}</span>
                </h1>
                <p className="hero-subtitle">{s.heroSubtitle}</p>
                <div className="hero-buttons">
                  <a href="/s/ai_site_builder" className="btn btn-primary btn-lg">{s.ctaPrimary}</a>
                  <a href="#all-generators" className="btn btn-ghost btn-lg">{s.ctaSecondary}</a>
                </div>
              </div>
              <div className="hero-illustration" aria-hidden="true">
                <svg viewBox="0 0 480 360" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="40" y="30" width="400" height="280" rx="8" fill="#F4F6F8" stroke="#C6C9CD" strokeWidth="1.5" />
                  <rect x="60" y="55" width="120" height="8" rx="4" fill="#E2E4E7" />
                  <rect x="60" y="75" width="80" height="6" rx="3" fill="#E2E4E7" />
                  <rect x="60" y="100" width="360" height="180" rx="4" fill="#FFFFFF" stroke="#E2E4E7" strokeWidth="1" />
                  <rect x="75" y="115" width="100" height="60" rx="3" fill="#F4F6F8" />
                  <rect x="185" y="115" width="100" height="60" rx="3" fill="#F4F6F8" />
                  <rect x="295" y="115" width="100" height="60" rx="3" fill="#F4F6F8" />
                  <rect x="75" y="190" width="320" height="6" rx="3" fill="#E2E4E7" />
                  <rect x="75" y="210" width="280" height="6" rx="3" fill="#E2E4E7" />
                  <rect x="75" y="230" width="240" height="6" rx="3" fill="#E2E4E7" />
                  <circle cx="420" cy="50" r="14" fill="url(#hero-grad)" opacity="0.9" />
                  <path d="M414 50L418 54L426 46" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <defs>
                    <linearGradient id="hero-grad" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#7671FF" />
                      <stop offset="100%" stopColor="#CB0C9F" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </section>

        {/* ===== SECTION 3: FEATURED GENERATORS ===== */}
        <section className="section" aria-labelledby="featured-heading">
          <div className="container">
            <div className="section-header">
              <h2 id="featured-heading">{s.featuredHeading}</h2>
              <p className="section-subtitle">{s.featuredSubtitle}</p>
            </div>
            <div className="grid-3">
              {[
                { name: 'AI Website Generator', desc: 'Describe your business, get a full site.', tag: 'Website', slug: 'ai-website-generator' },
                { name: 'Free Portfolio Generator', desc: 'For creatives, in minutes, no fee.', tag: 'Portfolio', slug: 'free-portfolio-generator' },
                { name: 'AI Landing Page Maker', desc: 'One-page sites built to convert.', tag: 'Landing Page', slug: 'ai-landing-page-maker' },
                { name: 'Online Store Builder', desc: 'Start selling without writing code.', tag: 'Store', slug: 'online-store-builder' },
                { name: 'Link-in-Bio Generator', desc: 'One link for all your channels.', tag: 'Link-in-Bio', slug: 'link-in-bio-generator' },
                { name: 'One-Page Website Builder', desc: 'Simple sites, single scroll.', tag: 'Website', slug: 'one-page-website-builder' },
                { name: 'Wedding Website Generator', desc: 'Share your day with guests.', tag: 'Website', slug: 'wedding-website-generator' },
                { name: 'Restaurant Website Builder', desc: 'Menu, hours, reservations, done.', tag: 'Website', slug: 'restaurant-website-builder' },
                { name: 'Blog Generator for Beginners', desc: 'Publish-ready in minutes.', tag: 'Blog', slug: 'blog-generator-for-beginners' },
              ].map((item) => (
                <a key={item.slug} href={`/generators/${item.slug}`} className="card-link featured-card">
                  <div className="card">
                    <div className="card-name">{item.name}</div>
                    <div className="card-desc">{item.desc}</div>
                    <span className="tag">{item.tag}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ===== SECTION 4: BROWSE BY CATEGORY ===== */}
        <section className="section" style={{ background: '#F4F6F8' }} aria-labelledby="browse-heading">
          <div className="container">
            <div className="section-header">
              <h2 id="browse-heading">{s.browseHeading}</h2>
              <p className="section-subtitle">{s.browseSubtitle}</p>
            </div>
            <div className="grid-3">
              {[
                { name: 'Websites', desc: 'AI-built business and personal sites for any goal.', href: '#websites', icon: 'website' },
                { name: 'Landing Pages', desc: 'Single-page sites built to convert visitors fast.', href: '#landing-pages', icon: 'landing' },
                { name: 'Portfolios', desc: 'Showcase your work with a clean, focused site.', href: '#portfolios', icon: 'portfolio' },
                { name: 'Blogs', desc: 'Publish-ready blogs with built-in SEO basics.', href: '#blogs', icon: 'blog' },
                { name: 'Online Stores', desc: 'Sell products online with payments built in.', href: '#stores', icon: 'store' },
                { name: 'Link-in-Bio', desc: 'One link, all your places. Made for creators.', href: '#link-in-bio', icon: 'linkinbio' },
              ].map((cat) => (
                <a key={cat.href} href={cat.href} className="card-link category-card">
                  <div className="card">
                    <div className="cat-icon" aria-hidden="true">
                      <CategoryIcon type={cat.icon} />
                    </div>
                    <div className="cat-name">{cat.name}</div>
                    <div className="cat-desc">{cat.desc}</div>
                    <div className="cat-arrow" aria-hidden="true">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M7 4l6 6-6 6" />
                      </svg>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ===== SECTION 5: ALL GENERATORS ===== */}
        <section className="section" id="all-generators" aria-labelledby="all-gen-heading">
          <div className="container">
            <div className="section-header">
              <h2 id="all-gen-heading">{s.allGenHeading}</h2>
              <p className="section-subtitle">{s.allGenSubtitle}</p>
            </div>

            {/* Search */}
            <div className="search-wrapper">
              <SearchIcon />
              <input
                type="search"
                id="generator-search"
                className="search-input"
                placeholder={s.searchPlaceholder}
                aria-label={s.searchAriaLabel}
                autoComplete="off"
              />
            </div>
            <p id="search-count" className="search-count" aria-live="polite"></p>
            <div id="search-empty" className="search-empty" role="status">
              <p>No generators match your search.</p>
              <button type="button" className="btn btn-ghost" id="clear-search-btn">Clear search</button>
              <p style={{ marginBlockStart: '12px', fontSize: '13px' }}>
                Can't find it? <a href="/s/ai_site_builder" style={{ color: '#8159BB', textDecoration: 'underline' }}>Start with our AI builder.</a>
              </p>
            </div>

            {/* Subsections rendered by data */}
            <GeneratorDirectory />
          </div>
        </section>

        {/* ===== SECTION 6: HOW IT WORKS ===== */}
        <section className="section" style={{ background: '#F4F6F8' }} aria-labelledby="how-heading">
          <div className="container">
            <div className="section-header" style={{ textAlign: 'center' }}>
              <h2 id="how-heading">{s.howHeading}</h2>
              <p className="section-subtitle">{s.howSubtitle}</p>
            </div>
            <div className="steps-grid">
              {[
                { num: '1', title: 'PICK A GENERATOR', desc: 'Browse by category or search to find one that fits your goal.' },
                { num: '2', title: 'DESCRIBE YOUR SITE', desc: 'Tell our AI builder about your business in a sentence or two.' },
                { num: '3', title: 'GENERATE AND PUBLISH', desc: 'Get a fully built site in seconds. Customize anything, then go live.' },
              ].map((step) => (
                <div key={step.num} className="step-item">
                  <div className="step-number" aria-hidden="true">{step.num}</div>
                  <div className="step-title">{step.title}</div>
                  <p className="step-desc">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== SECTION 7: WHY STRIKINGLY ===== */}
        <section className="section" aria-labelledby="why-heading">
          <div className="container">
            <div className="section-header" style={{ textAlign: 'center' }}>
              <h2 id="why-heading">{s.whyHeading}</h2>
            </div>
            <div className="why-grid">
              {[
                { title: 'LIVE IN SECONDS', desc: 'Describe your site, we build it. No setup, no learning curve.', icon: 'check' },
                { title: 'MOBILE BY DEFAULT', desc: 'Every generator produces responsive sites that work on any device.', icon: 'phone' },
                { title: 'FREE TO START', desc: 'Generate, customize, and publish without a credit card.', icon: 'free' },
              ].map((item) => (
                <div key={item.title} className="why-item">
                  <div className="why-icon" aria-hidden="true"><WhyIcon type={item.icon} /></div>
                  <div className="why-title">{item.title}</div>
                  <p className="why-desc">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== SECTION 8: FAQ ===== */}
        <section className="section" style={{ background: '#F4F6F8' }} aria-labelledby="faq-heading">
          <div className="container">
            <div className="section-header" style={{ textAlign: 'center', maxWidth: '600px', marginInline: 'auto', marginBlockEnd: '32px' }}>
              <h2 id="faq-heading">{s.faqHeading}</h2>
            </div>
            <div className="faq-list" style={{ maxWidth: '800px', marginInline: 'auto' }}>
              <FaqItem
                id="faq-panel-1"
                question="What is an AI site generator?"
                expanded={true}
                answer={[
                  'An AI site generator is a tool that uses artificial intelligence to build a complete website based on a short description of your business, project, or idea. Instead of choosing a template and filling in every section manually, you tell the AI what you need and it generates a tailored site in seconds.',
                  'Strikingly\'s generators are designed to produce clean, modern sites that are ready to customize and publish immediately.',
                ]}
              />
              <FaqItem
                id="faq-panel-2"
                question="How is a generator different from a template?"
                expanded={false}
                answer={[
                  'A template is a pre-built layout that you customize by swapping in your own text, images, and colors. A generator goes further: it uses AI to create the layout, write the copy, and arrange the content based on your specific description.',
                  'Think of a template as a blank canvas and a generator as an assistant that starts the painting for you.',
                ]}
              />
              <FaqItem
                id="faq-panel-3"
                question="Are these generators free to use?"
                expanded={false}
                answer={[
                  'Yes. You can generate, customize, and publish a site without entering a credit card. Strikingly offers a free tier that is fully functional for personal projects, portfolios, and small business sites.',
                  'Paid plans unlock custom domains, advanced features, and higher storage if you need them.',
                ]}
              />
              <FaqItem
                id="faq-panel-4"
                question="What kinds of sites can I build?"
                expanded={false}
                answer={[
                  'Strikingly\'s generators cover a wide range of site types: business websites, landing pages, portfolios, blogs, online stores, and link-in-bio pages. Whether you are a photographer, a restaurant owner, a startup founder, or a content creator, there is a generator tailored to your goal.',
                ]}
              />
              <FaqItem
                id="faq-panel-5"
                question="Can I customize what the generator produces?"
                expanded={false}
                answer={[
                  'Absolutely. The AI gives you a strong starting point, but every element is fully editable. Change colors, fonts, images, and layout blocks. Add or remove sections. Make it yours.',
                  'Strikingly\'s editor is designed to be intuitive, so you do not need design or coding experience to refine the result.',
                ]}
              />
              <FaqItem
                id="faq-panel-6"
                question="Do generated sites work on mobile?"
                expanded={false}
                answer={[
                  'Yes. Every site generated by Strikingly is responsive by default. It automatically adapts to phones, tablets, and desktops so your visitors get a great experience on any device.',
                  'You can preview and fine-tune the mobile layout directly in the editor before publishing.',
                ]}
              />
            </div>
          </div>
        </section>

        {/* ===== SECTION 9: CLOSING CTA ===== */}
        <section className="closing-cta" aria-labelledby="closing-heading">
          <div className="container">
            <h2 id="closing-heading">{s.closingHeading}</h2>
            <p>{s.closingSub}</p>
            <a href="/s/ai_site_builder" className="btn btn-primary btn-lg" style={{ fontSize: '15px', padding: '11px 28px' }}>{s.closingCta}</a>
          </div>
        </section>
      </main>

      {/* ===== SECTION 10: FOOTER ===== */}
      <footer className="site-footer" role="contentinfo">
        <div className="container">
          <div className="footer-grid">
            <div>
              <div className="footer-brand">{s.footerBrand}</div>
              <p style={{ fontSize: '13px', color: '#636972', maxWidth: '240px' }}>{s.footerDesc}</p>
            </div>
            <div className="footer-col">
              <h4>{s.footerProduct}</h4>
              <ul>
                <li><a href="/pricing">Pricing</a></li>
                <li><a href="/templates">Templates</a></li>
                <li><a href="/s/ai_site_builder">AI Builder</a></li>
                <li><a href="/generators">Generators</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>{s.footerCompany}</h4>
              <ul>
                <li><a href="/about">About</a></li>
                <li><a href="/blog">Blog</a></li>
                <li><a href="/support">Support</a></li>
                <li><a href="/careers">Careers</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>{s.footerResources}</h4>
              <ul>
                <li><a href="/help">Help Center</a></li>
                <li><a href="/guides">Guides</a></li>
                <li><a href="/community">Community</a></li>
                <li><a href="/api">API</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>{s.footerLegal}</h4>
              <ul>
                <li><a href="/terms">Terms of Service</a></li>
                <li><a href="/privacy">Privacy Policy</a></li>
                <li><a href="/cookies">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>{s.copyright}</p>
          </div>
        </div>
      </footer>
    </>
  );
}

function SearchIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', width: '18px', height: '18px', color: '#9CA3AF', pointerEvents: 'none' }}>
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}

function CategoryIcon({ type }) {
  const commonProps = { viewBox: '0 0 48 48', fill: 'none', stroke: 'currentColor', strokeWidth: '2', strokeLinecap: 'round', strokeLinejoin: 'round' };
  const icons = {
    website: (
      <svg {...commonProps}><rect x="4" y="6" width="40" height="32" rx="3" /><line x1="4" y1="12" x2="44" y2="12" /><circle cx="8" cy="9" r="1.5" fill="currentColor" /><circle cx="13" cy="9" r="1.5" fill="currentColor" /><circle cx="18" cy="9" r="1.5" fill="currentColor" /><rect x="10" y="18" width="12" height="4" rx="1" fill="currentColor" opacity="0.3" /><rect x="10" y="26" width="28" height="3" rx="1" fill="currentColor" opacity="0.2" /><rect x="10" y="32" width="20" height="3" rx="1" fill="currentColor" opacity="0.2" /></svg>
    ),
    landing: (
      <svg {...commonProps}><rect x="4" y="6" width="40" height="36" rx="3" /><line x1="4" y1="12" x2="44" y2="12" /><circle cx="8" cy="9" r="1.5" fill="currentColor" /><circle cx="13" cy="9" r="1.5" fill="currentColor" /><circle cx="18" cy="9" r="1.5" fill="currentColor" /><rect x="10" y="18" width="28" height="6" rx="2" fill="currentColor" opacity="0.3" /><rect x="10" y="28" width="28" height="3" rx="1" fill="currentColor" opacity="0.2" /><rect x="10" y="34" width="20" height="3" rx="1" fill="currentColor" opacity="0.2" /></svg>
    ),
    portfolio: (
      <svg {...commonProps}><rect x="4" y="6" width="40" height="36" rx="3" /><line x1="4" y1="12" x2="44" y2="12" /><circle cx="8" cy="9" r="1.5" fill="currentColor" /><circle cx="13" cy="9" r="1.5" fill="currentColor" /><circle cx="18" cy="9" r="1.5" fill="currentColor" /><rect x="10" y="18" width="13" height="13" rx="2" fill="currentColor" opacity="0.3" /><rect x="25" y="18" width="13" height="13" rx="2" fill="currentColor" opacity="0.2" /><rect x="10" y="34" width="28" height="3" rx="1" fill="currentColor" opacity="0.2" /></svg>
    ),
    blog: (
      <svg {...commonProps}><rect x="4" y="6" width="40" height="36" rx="3" /><line x1="4" y1="12" x2="44" y2="12" /><circle cx="8" cy="9" r="1.5" fill="currentColor" /><circle cx="13" cy="9" r="1.5" fill="currentColor" /><circle cx="18" cy="9" r="1.5" fill="currentColor" /><rect x="10" y="18" width="28" height="3" rx="1" fill="currentColor" opacity="0.3" /><rect x="10" y="26" width="28" height="3" rx="1" fill="currentColor" opacity="0.2" /><rect x="10" y="34" width="20" height="3" rx="1" fill="currentColor" opacity="0.2" /></svg>
    ),
    store: (
      <svg {...commonProps}><rect x="4" y="6" width="40" height="36" rx="3" /><line x1="4" y1="12" x2="44" y2="12" /><circle cx="8" cy="9" r="1.5" fill="currentColor" /><circle cx="13" cy="9" r="1.5" fill="currentColor" /><circle cx="18" cy="9" r="1.5" fill="currentColor" /><rect x="14" y="20" width="8" height="10" rx="1" fill="currentColor" opacity="0.3" /><rect x="26" y="20" width="8" height="10" rx="1" fill="currentColor" opacity="0.2" /><rect x="10" y="34" width="28" height="3" rx="1" fill="currentColor" opacity="0.2" /></svg>
    ),
    linkinbio: (
      <svg {...commonProps}><rect x="4" y="6" width="40" height="36" rx="3" /><line x1="4" y1="12" x2="44" y2="12" /><circle cx="8" cy="9" r="1.5" fill="currentColor" /><circle cx="13" cy="9" r="1.5" fill="currentColor" /><circle cx="18" cy="9" r="1.5" fill="currentColor" /><circle cx="24" cy="24" r="6" fill="currentColor" opacity="0.3" /><line x1="34" y1="20" x2="42" y2="20" strokeWidth="2.5" /><line x1="34" y1="28" x2="42" y2="28" strokeWidth="2.5" /><line x1="38" y1="16" x2="38" y2="32" strokeWidth="2.5" /></svg>
    ),
  };
  return icons[type] || null;
}

function WhyIcon({ type }) {
  const common = { viewBox: '0 0 40 40', fill: 'none', stroke: 'currentColor', strokeWidth: '2', strokeLinecap: 'round', strokeLinejoin: 'round' };
  if (type === 'check') {
    return <svg {...common}><circle cx="20" cy="20" r="16" /><polyline points="12,20 18,26 28,14" /></svg>;
  }
  if (type === 'phone') {
    return <svg {...common}><rect x="6" y="4" width="28" height="32" rx="3" /><line x1="6" y1="10" x2="34" y2="10" /><line x1="14" y1="4" x2="14" y2="10" /><line x1="26" y1="4" x2="26" y2="10" /></svg>;
  }
  return <svg {...common}><circle cx="20" cy="20" r="16" /><path d="M14 20l4 4 8-8" /></svg>;
}

function FaqItem({ id, question, expanded, answer }) {
  const [isOpen, setIsOpen] = React.useState(expanded);

  return (
    <div className="faq-item">
      <button
        type="button"
        className="faq-btn"
        aria-expanded={isOpen}
        aria-controls={id}
        onClick={() => setIsOpen(!isOpen)}
      >
        {question}
        <span className="faq-icon" aria-hidden="true">
          <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="10" y1="4" x2="10" y2="16" />
            <line x1="4" y1="10" x2="16" y2="10" />
          </svg>
        </span>
      </button>
      <div id={id} className={`faq-panel${isOpen ? ' open' : ''}`} role="region">
        <div className="faq-panel-inner">
          {answer.map((p, i) => <p key={i}>{p}</p>)}
        </div>
      </div>
    </div>
  );
}

function GeneratorDirectory() {
  const categories = [
    {
      id: 'websites',
      name: 'Websites',
      desc: 'AI-built business and personal sites for any goal.',
      icon: 'website',
      items: [
        { name: 'AI Website Generator', desc: 'Describe your business, get a full site.', slug: 'ai-website-generator' },
        { name: 'Free Website Builder for Photographers', desc: 'Showcase your portfolio in minutes.', slug: 'free-website-builder-for-photographers' },
        { name: 'One-Page Wedding Website Builder', desc: 'Share your day with guests beautifully.', slug: 'one-page-wedding-website-builder' },
        { name: 'Beautiful Website Generator', desc: 'Stunning designs, zero design skills needed.', slug: 'beautiful-website-generator' },
        { name: 'No-Code Website Builder', desc: 'Build a site without touching a single line of code.', slug: 'no-code-website-builder' },
        { name: 'AI Website Builder for Restaurants', desc: 'Menu, hours, reservations, done.', slug: 'ai-website-builder-for-restaurants' },
        { name: 'AI Website Builder for Yoga Instructors', desc: 'Attract students and share your schedule.', slug: 'ai-website-builder-for-yoga-instructors' },
        { name: 'Free AI Website Generator', desc: 'Generate a complete site at no cost.', slug: 'free-ai-website-generator' },
        { name: 'AI Website Builder for Small Business', desc: 'Launch a professional site in minutes.', slug: 'ai-website-builder-for-small-business' },
        { name: 'AI Website Builder for Wedding Couples', desc: 'Create a beautiful wedding site together.', slug: 'ai-website-builder-for-wedding-couples' },
      ],
    },
    {
      id: 'landing-pages',
      name: 'Landing Pages',
      desc: 'Single-page sites built to convert visitors fast.',
      icon: 'landing',
      items: [
        { name: 'AI Landing Page Maker', desc: 'One-page sites built to convert.', slug: 'ai-landing-page-maker' },
        { name: 'Free Landing Page Generator', desc: 'High-converting pages, no cost to start.', slug: 'free-landing-page-generator' },
        { name: 'AI Landing Page Builder for Startups', desc: 'Launch fast, iterate faster.', slug: 'ai-landing-page-builder-for-startups' },
        { name: 'One-Page Landing Page Builder', desc: 'Simple, focused, conversion-ready.', slug: 'one-page-landing-page-builder' },
        { name: 'AI Landing Page Generator for Products', desc: 'Showcase features that sell.', slug: 'ai-landing-page-generator-for-products' },
        { name: 'Beautiful Landing Page Generator', desc: 'Eye-catching pages that convert.', slug: 'beautiful-landing-page-generator' },
        { name: 'AI Landing Page Builder for SaaS', desc: 'Built for software product launches.', slug: 'ai-landing-page-builder-for-saas' },
        { name: 'No-Code Landing Page Builder', desc: 'Design and publish without code.', slug: 'no-code-landing-page-builder' },
        { name: 'AI Landing Page Builder for Events', desc: 'Promote and sell tickets effortlessly.', slug: 'ai-landing-page-builder-for-events' },
      ],
    },
    {
      id: 'portfolios',
      name: 'Portfolios',
      desc: 'Showcase your work with a clean, focused site.',
      icon: 'portfolio',
      items: [
        { name: 'Portfolio Generator for Designers', desc: 'Showcase your best work beautifully.', slug: 'portfolio-generator-for-designers' },
        { name: 'Free Portfolio Generator', desc: 'For creatives, in minutes, no fee.', slug: 'free-portfolio-generator' },
        { name: 'AI Portfolio Builder for Photographers', desc: 'Display your photos in a stunning gallery.', slug: 'ai-portfolio-builder-for-photographers' },
        { name: 'Portfolio Generator for Artists', desc: 'Let your art speak for itself.', slug: 'portfolio-generator-for-artists' },
        { name: 'AI Portfolio Generator', desc: 'Smart layouts for any creative field.', slug: 'ai-portfolio-generator' },
        { name: 'Beautiful Portfolio Generator', desc: 'Elegant templates for visual storytellers.', slug: 'beautiful-portfolio-generator' },
        { name: 'Portfolio Generator for Writers', desc: 'A clean home for your published work.', slug: 'portfolio-generator-for-writers' },
        { name: 'AI Portfolio Builder for Models', desc: 'Professional comp cards and galleries.', slug: 'ai-portfolio-builder-for-models' },
        { name: 'Portfolio Generator for Musicians', desc: 'Share tracks, tours, and your story.', slug: 'portfolio-generator-for-musicians' },
      ],
    },
    {
      id: 'blogs',
      name: 'Blogs',
      desc: 'Publish-ready blogs with built-in SEO basics.',
      icon: 'blog',
      items: [
        { name: 'Blog Generator for Beginners', desc: 'Publish-ready in minutes.', slug: 'blog-generator-for-beginners' },
        { name: 'AI Blog Generator', desc: 'Write and publish with AI assistance.', slug: 'ai-blog-generator' },
        { name: 'Free Blog Generator', desc: 'Start blogging without spending a dime.', slug: 'free-blog-generator' },
        { name: 'Blog Generator for Business', desc: 'Grow traffic with a company blog.', slug: 'blog-generator-for-business' },
        { name: 'AI Blog Generator for SEO', desc: 'Rank higher with optimized content.', slug: 'ai-blog-generator-for-seo' },
        { name: 'One-Page Blog Generator', desc: 'Minimal blogs for focused writing.', slug: 'one-page-blog-generator' },
        { name: 'Blog Generator for Personal Use', desc: 'Your own space to share thoughts.', slug: 'blog-generator-for-personal-use' },
        { name: 'AI Blog Generator for Journalists', desc: 'Publish articles with AI-powered drafting.', slug: 'ai-blog-generator-for-journalists' },
        { name: 'Blog Generator for Nonprofits', desc: 'Share your mission and impact stories.', slug: 'blog-generator-for-nonprofits' },
      ],
    },
    {
      id: 'stores',
      name: 'Online Stores',
      desc: 'Sell products online with payments built in.',
      icon: 'store',
      items: [
        { name: 'Online Store Builder', desc: 'Start selling without writing code.', slug: 'online-store-builder' },
        { name: 'AI Store Builder', desc: 'Launch a smart store in seconds.', slug: 'ai-store-builder' },
        { name: 'Free Online Store Builder', desc: 'Sell products with zero upfront cost.', slug: 'free-online-store-builder' },
        { name: 'Online Store Builder for Restaurants', desc: 'Take orders online with ease.', slug: 'online-store-builder-for-restaurants' },
        { name: 'Online Store Builder for Boutiques', desc: 'Curated shops with style.', slug: 'online-store-builder-for-boutiques' },
        { name: 'AI Online Store Generator', desc: 'Intelligent product pages and checkout.', slug: 'ai-online-store-generator' },
        { name: 'No-Code Store Builder', desc: 'Design your shop without code.', slug: 'no-code-store-builder' },
        { name: 'Online Store Builder for Crafters', desc: 'Sell handmade goods with pride.', slug: 'online-store-builder-for-crafters' },
        { name: 'Online Store Builder for Fitness Brands', desc: 'Gear, apparel, and supplements.', slug: 'online-store-builder-for-fitness-brands' },
      ],
    },
    {
      id: 'link-in-bio',
      name: 'Link-in-Bio',
      desc: 'One link, all your places. Made for creators.',
      icon: 'linkinbio',
      items: [
        { name: 'Link-in-Bio Generator', desc: 'One link for all your channels.', slug: 'link-in-bio-generator' },
        { name: 'Free Link-in-Bio Generator', desc: 'Create your link page at no cost.', slug: 'free-link-in-bio-generator' },
        { name: 'AI Link-in-Bio Generator', desc: 'Smart links that adapt to your audience.', slug: 'ai-link-in-bio-generator' },
        { name: 'Link-in-Bio Generator for Instagram', desc: 'Optimized for your Instagram profile.', slug: 'link-in-bio-generator-for-instagram' },
        { name: 'Link-in-Bio Generator for TikTok', desc: 'Connect all your TikTok links.', slug: 'link-in-bio-generator-for-tiktok' },
        { name: 'Link-in-Bio Generator for Creators', desc: 'One page, every platform, your brand.', slug: 'link-in-bio-generator-for-creators' },
        { name: 'Beautiful Link-in-Bio Generator', desc: 'Design a page that matches your style.', slug: 'beautiful-link-in-bio-generator' },
        { name: 'Link-in-Bio Generator for Small Business', desc: 'Drive traffic to your storefront.', slug: 'link-in-bio-generator-for-small-business' },
        { name: 'Link-in-Bio Generator for Influencers', desc: 'Monetize your following with ease.', slug: 'link-in-bio-generator-for-influencers' },
      ],
    },
  ];

  return (
    <>
      {categories.map((cat) => (
        <div key={cat.id} className="directory-subsection" id={cat.id} data-category={cat.id}>
          <h3>{cat.name}</h3>
          <p className="subsection-desc">{cat.desc}</p>
          <div className="grid-3" data-subsection={cat.id}>
            {cat.items.map((item, idx) => (
              <a key={item.slug} href={`/generators/${item.slug}`} className={`card-link dir-card${idx >= 6 ? ' extra-card' : ''}`}>
                <div className="card">
                  <div className="card-thumb" aria-hidden="true">
                    <CategoryIcon type={cat.icon} />
                  </div>
                  <div className="card-name">{item.name}</div>
                  <div className="card-desc">{item.desc}</div>
                </div>
              </a>
            ))}
          </div>
          <div className="show-all-wrapper" data-show-all={cat.id}>
            <button type="button" className="show-all-btn" aria-expanded="false" aria-controls={`subsection-${cat.id}`}>
              {s.showAllPrefix}{cat.items.length}{s.showAllSuffix}
            </button>
          </div>
        </div>
      ))}
    </>
  );
}
