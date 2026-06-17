import { renderToString } from 'react-dom/server';
import React from 'react';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Inline the data and components for SSR rendering
// This is a simplified version that generates the static HTML

function generateStaticHTML() {
  const featuredGenerators = [
    { name: 'AI Website Generator', description: 'Describe your business, get a full site', category: 'Website', categorySlug: 'websites' },
    { name: 'Free Portfolio Generator', description: 'For creatives, in minutes, no fee', category: 'Portfolio', categorySlug: 'portfolios' },
    { name: 'AI Landing Page Maker', description: 'One-page sites built to convert', category: 'Landing Page', categorySlug: 'landing-pages' },
    { name: 'Online Store Builder', description: 'Start selling without writing code', category: 'Store', categorySlug: 'stores' },
    { name: 'Link-in-Bio Generator', description: 'One link for all your channels', category: 'Link-in-Bio', categorySlug: 'link-in-bio' },
    { name: 'One-Page Website Builder', description: 'Simple sites, single scroll', category: 'Website', categorySlug: 'websites' },
    { name: 'Wedding Website Generator', description: 'Share your day with guests', category: 'Website', categorySlug: 'websites' },
    { name: 'Restaurant Website Builder', description: 'Menu, hours, reservations, done', category: 'Website', categorySlug: 'websites' },
    { name: 'Blog Generator for Beginners', description: 'Publish-ready in minutes', category: 'Blog', categorySlug: 'blogs' },
  ];

  const slugify = (name) => name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

  const categoryOrder = ['websites', 'landing-pages', 'portfolios', 'blogs', 'stores', 'link-in-bio'];

  const categories = {
    websites: { name: 'Websites', description: 'AI-built business and personal sites for any goal.' },
    'landing-pages': { name: 'Landing Pages', description: 'Single-page sites built to convert visitors fast.' },
    portfolios: { name: 'Portfolios', description: 'Showcase your work with a clean, focused site.' },
    blogs: { name: 'Blogs', description: 'Publish-ready blogs with built-in SEO basics.' },
    stores: { name: 'Online Stores', description: 'Sell products online with payments built in.' },
    'link-in-bio': { name: 'Link-in-Bio', description: 'One link, all your places. Made for creators.' },
  };

  const allGenerators = {
    websites: {
      items: [
        { name: 'AI Website Generator', description: 'Describe your business, get a full site' },
        { name: 'Free Website Builder', description: 'No cost, no credit card, no catch' },
        { name: 'One-Page Website Builder', description: 'Simple sites, single scroll' },
        { name: 'Wedding Website Generator', description: 'Share your day with guests' },
        { name: 'Restaurant Website Builder', description: 'Menu, hours, reservations, done' },
        { name: 'Free Website Builder for Photographers', description: 'Stunning galleries, zero effort' },
        { name: 'Small Business Website Generator', description: 'Get online fast with a pro look' },
        { name: 'Real Estate Website Builder', description: 'Listings, tours, and contact forms' },
        { name: 'Yoga Studio Website Generator', description: 'Class schedules and booking, built in' },
        { name: 'Nonprofit Website Builder', description: 'Tell your story, accept donations' },
        { name: 'Personal Website Generator', description: 'Your corner of the internet, your way' },
      ],
    },
    'landing-pages': {
      items: [
        { name: 'AI Landing Page Maker', description: 'One-page sites built to convert' },
        { name: 'Free Landing Page Builder', description: 'Launch a campaign page at no cost' },
        { name: 'SaaS Landing Page Generator', description: 'Feature highlights, pricing, and sign-up' },
        { name: 'Event Landing Page Builder', description: 'Countdown, speakers, and registration' },
        { name: 'Product Launch Page Generator', description: 'Build buzz before you ship' },
        { name: 'App Download Landing Page', description: 'QR code, screenshots, and install links' },
        { name: 'Lead Capture Page Builder', description: 'Forms and CTAs that actually convert' },
        { name: 'Webinar Registration Page', description: 'Sign-up form, calendar, and reminders' },
        { name: 'Coming Soon Page Generator', description: 'Collect emails while you build' },
        { name: 'Click-Through Landing Page', description: 'One message, one action, zero friction' },
      ],
    },
    portfolios: {
      items: [
        { name: 'Free Portfolio Generator', description: 'For creatives, in minutes, no fee' },
        { name: 'Portfolio Generator for Designers', description: 'Grid layouts that let your work speak' },
        { name: 'Photography Portfolio Builder', description: 'Full-bleed images, minimal UI' },
        { name: 'Art Portfolio Generator', description: 'Gallery walls, artist statement, contact' },
        { name: 'Freelancer Portfolio Builder', description: 'Services, testimonials, and booking' },
        { name: 'Student Portfolio Generator', description: 'Show projects, skills, and resume' },
        { name: 'Architecture Portfolio Builder', description: 'Renderings, plans, and case studies' },
        { name: 'Model Portfolio Generator', description: 'Headshots, comp cards, and bookings' },
        { name: 'Writer Portfolio Builder', description: 'Clips, bio, and publication history' },
        { name: 'Video Portfolio Generator', description: 'Embedded reels and project pages' },
      ],
    },
    blogs: {
      items: [
        { name: 'Blog Generator for Beginners', description: 'Publish-ready in minutes' },
        { name: 'Free Blog Builder', description: 'Start writing without spending a cent' },
        { name: 'AI Blog Generator', description: 'Describe your niche, get a blog' },
        { name: 'Travel Blog Generator', description: 'Maps, photo essays, and itineraries' },
        { name: 'Food Blog Builder', description: 'Recipes, galleries, and nutrition info' },
        { name: 'Tech Blog Generator', description: 'Code blocks, syntax highlighting, RSS' },
        { name: 'Lifestyle Blog Builder', description: 'Categories, newsletters, and social links' },
        { name: 'Personal Blog Generator', description: 'Journal-style layout, simple and clean' },
        { name: 'Business Blog Builder', description: 'Thought leadership with built-in SEO' },
      ],
    },
    stores: {
      items: [
        { name: 'Online Store Builder', description: 'Start selling without writing code' },
        { name: 'Free Online Store Generator', description: 'Open a shop at zero upfront cost' },
        { name: 'Online Store Builder for Restaurants', description: 'Menus, ordering, and delivery setup' },
        { name: 'Fashion Store Generator', description: 'Lookbooks, size guides, and quick checkout' },
        { name: 'Digital Product Store Builder', description: 'Sell downloads, courses, and memberships' },
        { name: 'Handmade Shop Generator', description: 'Story-driven product pages for makers' },
        { name: 'Subscription Box Store Builder', description: 'Recurring billing and unboxing pages' },
        { name: 'Print-on-Demand Store Generator', description: 'Design preview and fulfillment built in' },
        { name: 'Dropshipping Store Builder', description: 'Product import and inventory sync' },
        { name: 'Local Business Store Generator', description: 'In-store pickup and local delivery' },
      ],
    },
    'link-in-bio': {
      items: [
        { name: 'Link-in-Bio Generator', description: 'One link for all your channels' },
        { name: 'Free Link-in-Bio Builder', description: 'No cost, no code, no hassle' },
        { name: 'Creator Link Page Generator', description: 'Social links, merch, and tip jar' },
        { name: 'Musician Link-in-Bio Builder', description: 'Streaming links, tour dates, and merch' },
        { name: 'Podcast Link Page Generator', description: 'Episode links, subscribe buttons, and clips' },
        { name: 'Influencer Link-in-Bio Builder', description: 'Brand deals, affiliate links, and content' },
        { name: 'Artist Link Page Generator', description: 'Portfolio, shop, and commission info' },
        { name: 'Coach Link-in-Bio Builder', description: 'Booking, testimonials, and free resources' },
      ],
    },
  };

  const faqItems = [
    { question: 'What is an AI site generator?', answer: 'An AI site generator is a tool that uses artificial intelligence to create a complete website based on a short description of your business or project. Instead of choosing a template and filling in content manually, you describe what you need and the generator produces a structured, styled site in seconds.' },
    { question: 'How is a generator different from a template?', answer: 'A template is a fixed design that you customize by replacing placeholder content. A generator creates a unique site tailored to your description, choosing layouts, images, and copy that match your specific business. The result is a starting point that already feels like your site, not a blank canvas.' },
    { question: 'Are these generators free to use?', answer: 'Yes. You can generate, preview, and customize your site without paying anything. When you\'re ready to connect a custom domain or access advanced features, paid plans are available.' },
    { question: 'What kinds of sites can I build?', answer: 'Strikingly\'s generators cover business websites, portfolios, landing pages, blogs, online stores, and link-in-bio pages. Within each category, you\'ll find generators tailored to specific industries and goals, from restaurants and photographers to wedding sites and creator hubs.' },
    { question: 'Can I customize what the generator produces?', answer: 'Absolutely. The generator gives you a complete starting point, and you can change any element — text, images, colors, layout, sections, and more — using Strikingly\'s drag-and-drop editor. Nothing is locked in.' },
    { question: 'Do generated sites work on mobile?', answer: 'Yes. Every site produced by Strikingly\'s generators is responsive by default, meaning it adapts to any screen size. You can also preview and fine-tune the mobile layout in the editor.' },
  ];

  const categoryIcons = {
    websites: '<svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true"><rect x="4" y="6" width="32" height="24" rx="3" stroke="#8159BB" stroke-width="2" fill="none"/><rect x="4" y="6" width="32" height="6" rx="3" fill="#8159BB" opacity="0.15"/><rect x="10" y="16" width="10" height="2" rx="1" fill="#8159BB" opacity="0.4"/><rect x="10" y="20" width="16" height="2" rx="1" fill="#C6C9CD"/><rect x="10" y="24" width="12" height="2" rx="1" fill="#C6C9CD"/><rect x="26" y="16" width="6" height="10" rx="1" fill="#8159BB" opacity="0.1"/></svg>',
    'landing-pages': '<svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true"><rect x="8" y="4" width="24" height="32" rx="3" stroke="#8159BB" stroke-width="2" fill="none"/><rect x="12" y="10" width="16" height="3" rx="1" fill="#8159BB" opacity="0.3"/><rect x="12" y="16" width="16" height="6" rx="1" fill="#8159BB" opacity="0.1"/><rect x="14" y="25" width="12" height="4" rx="2" fill="url(#lpGrad)"/><defs><linearGradient id="lpGrad" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#7671FF"/><stop offset="100%" stop-color="#CB0C9F"/></linearGradient></defs></svg>',
    portfolios: '<svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true"><rect x="4" y="8" width="32" height="24" rx="3" stroke="#8159BB" stroke-width="2" fill="none"/><rect x="8" y="12" width="10" height="8" rx="1" fill="#8159BB" opacity="0.15"/><rect x="22" y="12" width="10" height="3" rx="1" fill="#8159BB" opacity="0.3"/><rect x="22" y="18" width="10" height="2" rx="1" fill="#C6C9CD"/><rect x="8" y="24" width="24" height="2" rx="1" fill="#C6C9CD"/></svg>',
    blogs: '<svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true"><rect x="6" y="4" width="28" height="32" rx="3" stroke="#8159BB" stroke-width="2" fill="none"/><rect x="10" y="10" width="20" height="3" rx="1" fill="#8159BB" opacity="0.3"/><rect x="10" y="16" width="20" height="2" rx="1" fill="#C6C9CD"/><rect x="10" y="20" width="20" height="2" rx="1" fill="#C6C9CD"/><rect x="10" y="24" width="14" height="2" rx="1" fill="#C6C9CD"/><rect x="10" y="28" width="20" height="2" rx="1" fill="#C6C9CD"/></svg>',
    stores: '<svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true"><path d="M8 14h24v18a3 3 0 01-3 3H11a3 3 0 01-3-3V14z" stroke="#8159BB" stroke-width="2" fill="none"/><path d="M6 10l4-6h20l4 6H6z" stroke="#8159BB" stroke-width="2" fill="#8159BB" opacity="0.1"/><rect x="14" y="20" width="12" height="6" rx="1" fill="#8159BB" opacity="0.15"/></svg>',
    'link-in-bio': '<svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true"><circle cx="20" cy="14" r="6" stroke="#8159BB" stroke-width="2" fill="#8159BB" opacity="0.1"/><rect x="12" y="24" width="16" height="3" rx="1.5" fill="#8159BB" opacity="0.3"/><rect x="14" y="30" width="12" height="3" rx="1.5" fill="#C6C9CD"/></svg>',
  };

  const categoryThumbnails = {
    websites: '<svg width="48" height="36" viewBox="0 0 48 36" fill="none" aria-hidden="true" class="w-full h-auto"><rect x="1" y="1" width="46" height="34" rx="3" stroke="#8159BB" stroke-width="1.5" fill="none"/><rect x="1" y="1" width="46" height="6" rx="3" fill="#8159BB" opacity="0.1"/><rect x="6" y="11" width="14" height="2" rx="1" fill="#8159BB" opacity="0.3"/><rect x="6" y="16" width="22" height="2" rx="1" fill="#C6C9CD"/><rect x="6" y="21" width="18" height="2" rx="1" fill="#C6C9CD"/><rect x="6" y="26" width="10" height="4" rx="2" fill="url(#cgw)"/><defs><linearGradient id="cgw" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#7671FF"/><stop offset="100%" stop-color="#CB0C9F"/></linearGradient></defs></svg>',
    'landing-pages': '<svg width="48" height="36" viewBox="0 0 48 36" fill="none" aria-hidden="true" class="w-full h-auto"><rect x="10" y="1" width="28" height="34" rx="3" stroke="#8159BB" stroke-width="1.5" fill="none"/><rect x="14" y="6" width="20" height="3" rx="1" fill="#8159BB" opacity="0.3"/><rect x="14" y="12" width="20" height="6" rx="1" fill="#8159BB" opacity="0.08"/><rect x="16" y="22" width="16" height="4" rx="2" fill="url(#cglp)"/><defs><linearGradient id="cglp" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#7671FF"/><stop offset="100%" stop-color="#CB0C9F"/></linearGradient></defs></svg>',
    portfolios: '<svg width="48" height="36" viewBox="0 0 48 36" fill="none" aria-hidden="true" class="w-full h-auto"><rect x="1" y="1" width="46" height="34" rx="3" stroke="#8159BB" stroke-width="1.5" fill="none"/><rect x="5" y="6" width="16" height="10" rx="1" fill="#8159BB" opacity="0.12"/><rect x="27" y="6" width="16" height="2" rx="1" fill="#8159BB" opacity="0.3"/><rect x="27" y="11" width="16" height="2" rx="1" fill="#C6C9CD"/><rect x="5" y="22" width="38" height="2" rx="1" fill="#C6C9CD"/><rect x="5" y="27" width="28" height="2" rx="1" fill="#C6C9CD"/></svg>',
    blogs: '<svg width="48" height="36" viewBox="0 0 48 36" fill="none" aria-hidden="true" class="w-full h-auto"><rect x="8" y="1" width="32" height="34" rx="3" stroke="#8159BB" stroke-width="1.5" fill="none"/><rect x="12" y="6" width="24" height="3" rx="1" fill="#8159BB" opacity="0.3"/><rect x="12" y="12" width="24" height="2" rx="1" fill="#C6C9CD"/><rect x="12" y="17" width="24" height="2" rx="1" fill="#C6C9CD"/><rect x="12" y="22" width="18" height="2" rx="1" fill="#C6C9CD"/><rect x="12" y="27" width="24" height="2" rx="1" fill="#C6C9CD"/></svg>',
    stores: '<svg width="48" height="36" viewBox="0 0 48 36" fill="none" aria-hidden="true" class="w-full h-auto"><path d="M6 12h36v20a3 3 0 01-3 3H9a3 3 0 01-3-3V12z" stroke="#8159BB" stroke-width="1.5" fill="none"/><path d="M4 8l5-7h30l5 7H4z" stroke="#8159BB" stroke-width="1.5" fill="#8159BB" opacity="0.08"/><rect x="16" y="18" width="16" height="6" rx="1" fill="#8159BB" opacity="0.12"/></svg>',
    'link-in-bio': '<svg width="48" height="36" viewBox="0 0 48 36" fill="none" aria-hidden="true" class="w-full h-auto"><circle cx="24" cy="10" r="6" stroke="#8159BB" stroke-width="1.5" fill="#8159BB" opacity="0.08"/><rect x="14" y="20" width="20" height="3" rx="1.5" fill="#8159BB" opacity="0.25"/><rect x="16" y="26" width="16" height="3" rx="1.5" fill="#C6C9CD"/></svg>',
  };

  // Generate featured cards
  const featuredCards = featuredGenerators.map(gen => `
            <a href="/generators/${slugify(gen.name)}" class="card-base block no-underline group">
              <h3 class="font-heading font-bold text-[15px] text-heading-dark m-0 mb-[8px] uppercase leading-[1.3]">${gen.name.toUpperCase()}</h3>
              <p class="text-body-text text-[13px] m-0 mb-[12px] leading-[1.5]">${gen.description}</p>
              <span class="tag-ghost">${gen.category.toUpperCase()}</span>
            </a>`).join('');

  // Generate browse by category cards
  const browseCards = categoryOrder.map(slug => {
    const cat = categories[slug];
    return `
            <a href="/generators#${slug}" class="card-base flex items-start gap-[15px] no-underline group">
              <div class="flex-shrink-0 pt-[2px]">${categoryIcons[slug]}</div>
              <div class="flex-1 min-w-0">
                <h3 class="font-heading font-bold text-[14px] text-heading-dark m-0 mb-[5px] uppercase leading-[1.3]">${cat.name.toUpperCase()}</h3>
                <p class="text-body-text text-[13px] m-0 leading-[1.5]">${cat.description}</p>
              </div>
              <svg class="flex-shrink-0 mt-[4px] text-brand-purple" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M6 4l4 4-4 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </a>`;
  }).join('');

  // Generate all generators subsections
  const allGenSubsections = categoryOrder.map(slug => {
    const cat = categories[slug];
    const items = allGenerators[slug].items;
    const cards = items.map(item => `
                <a href="/generators/${slugify(item.name)}" class="card-base block no-underline group">
                  <div class="mb-[12px]">${categoryThumbnails[slug]}</div>
                  <h4 class="font-heading font-bold text-[14px] text-heading-dark m-0 mb-[6px] uppercase leading-[1.3]">${item.name.toUpperCase()}</h4>
                  <p class="text-body-text text-[13px] m-0 leading-[1.5]">${item.description}</p>
                </a>`).join('');

    const hiddenCount = items.length - 6;
    // In static HTML, show all items (progressive enhancement: JS will collapse after mount)
    // With JS off, all items remain visible and the toggle button is not needed
    const showAllBtn = hiddenCount > 0
      ? `<button class="btn-ghost mt-[20px]" aria-expanded="true" aria-controls="${slug}-content">SHOW ALL ${items.length} GENERATORS</button>`
      : '';

    return `
          <div id="${slug}" class="scroll-mt-[80px] mb-[40px]">
            <h3 class="font-heading font-bold text-[20px] md:text-[22px] text-heading m-0 mb-[5px] uppercase">${cat.name.toUpperCase()}</h3>
            <p class="text-body-text text-[13px] m-0 mb-[20px]">${cat.description}</p>
            <div id="${slug}-content" class="collapse-wrapper" style="max-height: none">
              <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px]">
                ${cards}
              </div>
            </div>
            ${showAllBtn}
          </div>`;
  }).join('');

  // Generate FAQ - all answers visible in static HTML (progressive enhancement: JS will collapse after mount)
  const faqHTML = faqItems.map((item, i) => {
    return `
          <div class="border-b border-divider last:border-b-0">
            <button class="w-full flex items-center justify-between py-[15px] px-0 bg-transparent border-none text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple focus-visible:ring-offset-2 rounded-[2px]" aria-expanded="true" aria-controls="faq-answer-${i}">
              <span class="font-heading font-bold text-[14px] md:text-[15px] text-heading-dark uppercase pr-[20px] leading-[1.4]">${item.question.toUpperCase()}</span>
              <svg class="flex-shrink-0 text-brand-purple transition-transform duration-200" width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" style="transform: rotate(180deg)"><path d="M5 8l5 5 5-5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </button>
            <div id="faq-answer-${i}" role="region" class="overflow-hidden transition-all duration-200" style="max-height: 500px; opacity: 1">
              <div class="pb-[15px] text-body-text text-[14px] leading-[1.7]">${item.answer}</div>
            </div>
          </div>`;
  }).join('');

  // Generate how it works
  const howItWorksSteps = [
    { title: 'PICK A GENERATOR', description: 'Browse by category or search to find one that fits your goal.' },
    { title: 'DESCRIBE YOUR SITE', description: 'Tell our AI builder about your business in a sentence or two.' },
    { title: 'GENERATE AND PUBLISH', description: 'Get a fully built site in seconds. Customize anything, then go live.' },
  ].map((step, i) => `
            <div class="flex flex-col items-center text-center">
              <div class="w-[48px] h-[48px] rounded-full flex items-center justify-center mb-[15px]" style="background: rgba(129,89,187,0.1)">
                <span class="font-heading font-bold text-[20px] text-brand-purple">${i + 1}</span>
              </div>
              <h3 class="font-heading font-bold text-[15px] text-heading-dark m-0 mb-[8px] uppercase leading-[1.3]">${step.title}</h3>
              <p class="text-body-text text-[14px] m-0 leading-[1.6] max-w-[300px]">${step.description}</p>
            </div>`).join('');

  // Generate why strikingly
  const whyItems = [
    { icon: '<svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true"><circle cx="18" cy="18" r="14" stroke="#8159BB" stroke-width="2" fill="none"/><path d="M14 18l3 3 5-6" stroke="#8159BB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>', title: 'LIVE IN SECONDS', description: 'Describe your site, we build it. No setup, no learning curve.' },
    { icon: '<svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true"><rect x="6" y="10" width="24" height="16" rx="3" stroke="#8159BB" stroke-width="2" fill="none"/><rect x="10" y="14" width="8" height="8" rx="1" fill="#8159BB" opacity="0.15"/><rect x="20" y="14" width="6" height="2" rx="1" fill="#C6C9CD"/><rect x="20" y="18" width="6" height="2" rx="1" fill="#C6C9CD"/></svg>', title: 'MOBILE BY DEFAULT', description: 'Every generator produces responsive sites that work on any device.' },
    { icon: '<svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true"><circle cx="18" cy="18" r="14" stroke="#8159BB" stroke-width="2" fill="none"/><text x="18" y="23" text-anchor="middle" fill="#8159BB" font-size="16" font-weight="bold">$</text></svg>', title: 'FREE TO START', description: 'Generate, customize, and publish without a credit card.' },
  ].map(item => `
            <div class="flex flex-col items-center text-center">
              <div class="mb-[15px]">${item.icon}</div>
              <h3 class="font-heading font-bold text-[15px] text-heading-dark m-0 mb-[8px] uppercase leading-[1.3]">${item.title}</h3>
              <p class="text-body-text text-[14px] m-0 leading-[1.6] max-w-[300px]">${item.description}</p>
            </div>`).join('');

  const year = new Date().getFullYear();

  const html = `
    <header class="w-full bg-white border-b border-divider">
      <div class="section-wrapper flex items-center h-[60px]">
        <a href="/" class="flex items-center gap-2 no-underline" aria-label="Strikingly home">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true"><rect width="28" height="28" rx="6" fill="#8159BB"/><path d="M8 8h12v3H11v2h7v3h-7v4H8V8z" fill="white"/></svg>
          <span class="font-heading font-bold text-[16px] text-heading-dark tracking-wide">STRIKINGLY AI</span>
        </a>
      </div>
    </header>

    <nav aria-label="Breadcrumb" class="w-full bg-white">
      <div class="section-wrapper py-[10px]">
        <ol class="flex items-center gap-2 text-[13px] text-body-text font-body m-0 p-0 list-none">
          <li><a href="/" class="text-body-text hover:text-brand-purple transition-colors no-underline">Strikingly</a></li>
          <li aria-hidden="true" class="text-brand-purple font-bold">&gt;</li>
          <li><span aria-current="page" class="text-body-text">AI Generators</span></li>
        </ol>
      </div>
    </nav>

    <main>
      <section class="relative overflow-hidden" style="background: radial-gradient(ellipse at 70% 30%, rgba(118,113,255,0.06) 0%, rgba(203,12,159,0.04) 40%, transparent 70%)">
        <div class="section-wrapper py-[60px] md:py-[80px]">
          <div class="flex flex-col-reverse md:flex-row items-center gap-[40px]">
            <div class="flex-1 text-center md:text-left">
              <h1 class="m-0 mb-[20px]">
                <span class="block text-[28px] md:text-[40px] lg:text-[48px] text-heading-dark leading-[1.2]">BUILD ANY KIND OF SITE</span>
                <span class="block text-[28px] md:text-[40px] lg:text-[48px] ai-gradient-text leading-[1.2]">WITH AI, IN AN INSTANT</span>
              </h1>
              <p class="text-body-text text-[15px] md:text-[16px] max-w-[520px] mx-auto md:mx-0 mb-[30px] leading-[1.6]">Browse the right generator for what you're building, or jump straight into our AI site builder.</p>
              <div class="flex flex-col sm:flex-row items-center gap-[10px] justify-center md:justify-start">
                <a href="/s/ai_site_builder" class="btn-primary no-underline text-center min-w-[220px]">START BUILDING - IT'S FREE</a>
                <a href="#all-generators" class="btn-ghost no-underline text-center min-w-[220px]">BROWSE GENERATORS</a>
              </div>
            </div>
            <div class="flex-1 flex justify-center" aria-hidden="true">
              <svg width="480" height="360" viewBox="0 0 480 360" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-[480px] h-auto">
                <rect x="40" y="20" width="400" height="280" rx="12" stroke="#8159BB" stroke-width="2" fill="white" opacity="0.9"/>
                <rect x="40" y="20" width="400" height="36" rx="12" fill="#F4F6F8"/>
                <rect x="40" y="44" width="400" height="12" fill="#F4F6F8"/>
                <circle cx="62" cy="38" r="5" fill="#E2E4E7"/><circle cx="80" cy="38" r="5" fill="#E2E4E7"/><circle cx="98" cy="38" r="5" fill="#E2E4E7"/>
                <rect x="120" y="30" width="200" height="16" rx="8" fill="white" stroke="#E2E4E7" stroke-width="1"/>
                <rect x="60" y="70" width="360" height="80" rx="4" fill="url(#heroGrad)" opacity="0.12"/>
                <rect x="80" y="90" width="140" height="10" rx="2" fill="#8159BB" opacity="0.3"/>
                <rect x="80" y="110" width="200" height="8" rx="2" fill="#C6C9CD" opacity="0.5"/>
                <rect x="80" y="124" width="160" height="8" rx="2" fill="#C6C9CD" opacity="0.4"/>
                <rect x="80" y="142" width="100" height="24" rx="4" fill="url(#heroGrad)" opacity="0.7"/>
                <rect x="60" y="170" width="110" height="100" rx="4" fill="white" stroke="#E2E4E7" stroke-width="1"/>
                <rect x="185" y="170" width="110" height="100" rx="4" fill="white" stroke="#E2E4E7" stroke-width="1"/>
                <rect x="310" y="170" width="110" height="100" rx="4" fill="white" stroke="#E2E4E7" stroke-width="1"/>
                <rect x="72" y="182" width="86" height="8" rx="2" fill="#8159BB" opacity="0.2"/>
                <rect x="72" y="198" width="86" height="40" rx="2" fill="#F4F6F8"/>
                <rect x="72" y="246" width="60" height="6" rx="2" fill="#C6C9CD" opacity="0.5"/>
                <rect x="197" y="182" width="86" height="8" rx="2" fill="#8159BB" opacity="0.2"/>
                <rect x="197" y="198" width="86" height="40" rx="2" fill="#F4F6F8"/>
                <rect x="197" y="246" width="60" height="6" rx="2" fill="#C6C9CD" opacity="0.5"/>
                <rect x="322" y="182" width="86" height="8" rx="2" fill="#8159BB" opacity="0.2"/>
                <rect x="322" y="198" width="86" height="40" rx="2" fill="#F4F6F8"/>
                <rect x="322" y="246" width="60" height="6" rx="2" fill="#C6C9CD" opacity="0.5"/>
                <circle cx="420" cy="40" r="3" fill="#7671FF" opacity="0.4"/>
                <circle cx="440" cy="60" r="2" fill="#CB0C9F" opacity="0.3"/>
                <circle cx="30" cy="280" r="2" fill="#7671FF" opacity="0.3"/>
                <circle cx="460" cy="260" r="3" fill="#CB0C9F" opacity="0.2"/>
                <defs><linearGradient id="heroGrad" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#7671FF"/><stop offset="100%" stop-color="#CB0C9F"/></linearGradient></defs>
              </svg>
            </div>
          </div>
        </div>
      </section>

      <section class="py-[40px]">
        <div class="section-wrapper">
          <h2 class="text-[26px] md:text-[32px] text-heading mb-[5px]">FEATURED GENERATORS</h2>
          <p class="text-body-text text-[14px] mb-[30px]">A few common starting points.</p>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px]">${featuredCards}</div>
        </div>
      </section>

      <section class="py-[40px] bg-light-bg">
        <div class="section-wrapper">
          <h2 class="text-[26px] md:text-[32px] text-heading mb-[30px]">BROWSE BY CATEGORY</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px]">${browseCards}</div>
        </div>
      </section>

      <section id="all-generators" class="py-[40px] scroll-mt-[80px]">
        <div class="section-wrapper">
          <h2 class="text-[26px] md:text-[32px] text-heading mb-[5px]">ALL GENERATORS</h2>
          <p class="text-body-text text-[14px] mb-[20px]">Sixty-plus generators, organized by what you're building.</p>
          <div class="mb-[30px]">
            <div class="relative max-w-[480px]">
              <svg class="absolute left-[12px] top-1/2 -translate-y-1/2 text-body-text" width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true"><circle cx="8" cy="8" r="5.5" stroke="currentColor" stroke-width="1.5"/><path d="M12 12l4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
              <input type="text" placeholder="Search generators..." aria-label="Search generators" class="w-full h-[40px] pl-[38px] pr-[12px] border border-card-border rounded-[4px] text-[14px] font-body text-heading-dark bg-white focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple"/>
            </div>
          </div>
          ${allGenSubsections}
        </div>
      </section>

      <section class="py-[40px] bg-light-bg">
        <div class="section-wrapper">
          <h2 class="text-[26px] md:text-[32px] text-heading mb-[30px]">HOW IT WORKS</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-[30px]">${howItWorksSteps}</div>
        </div>
      </section>

      <section class="py-[40px]">
        <div class="section-wrapper">
          <h2 class="text-[26px] md:text-[32px] text-heading mb-[30px]">WHY STRIKINGLY</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-[30px]">${whyItems}</div>
        </div>
      </section>

      <section class="py-[40px] bg-light-bg">
        <div class="section-wrapper">
          <h2 class="text-[26px] md:text-[32px] text-heading mb-[25px]">FREQUENTLY ASKED QUESTIONS</h2>
          <div class="max-w-[720px] border-t border-divider">${faqHTML}</div>
        </div>
      </section>

      <section class="py-[60px] md:py-[80px] bg-white">
        <div class="section-wrapper text-center">
          <h2 class="text-[28px] md:text-[36px] text-heading mb-[10px]">READY TO BUILD?</h2>
          <p class="text-body-text text-[15px] mb-[30px] max-w-[480px] mx-auto">Pick a generator above, or jump straight into our AI builder.</p>
          <a href="/s/ai_site_builder" class="btn-primary no-underline text-[16px] min-w-[260px]" style="height:44px">START WITH AI BUILDER</a>
        </div>
      </section>
    </main>

    <footer class="bg-heading-dark py-[40px]">
      <div class="section-wrapper">
        <div class="flex items-center gap-2 mb-[30px]">
          <svg width="24" height="24" viewBox="0 0 28 28" fill="none" aria-hidden="true"><rect width="28" height="28" rx="6" fill="#8159BB"/><path d="M8 8h12v3H11v2h7v3h-7v4H8V8z" fill="white"/></svg>
          <span class="font-heading font-bold text-[14px] text-white tracking-wide">STRIKINGLY AI</span>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-[20px] mb-[30px]">
          <div><h4 class="font-heading font-bold text-[12px] text-white uppercase mb-[10px]">PRODUCT</h4><ul class="list-none p-0 m-0 space-y-[6px]"><li><a href="/pricing" class="text-[13px] text-gray-400 hover:text-white transition-colors no-underline">Pricing</a></li><li><a href="/templates" class="text-[13px] text-gray-400 hover:text-white transition-colors no-underline">Templates</a></li></ul></div>
          <div><h4 class="font-heading font-bold text-[12px] text-white uppercase mb-[10px]">RESOURCES</h4><ul class="list-none p-0 m-0 space-y-[6px]"><li><a href="/blog" class="text-[13px] text-gray-400 hover:text-white transition-colors no-underline">Blog</a></li><li><a href="/support" class="text-[13px] text-gray-400 hover:text-white transition-colors no-underline">Support</a></li></ul></div>
          <div><h4 class="font-heading font-bold text-[12px] text-white uppercase mb-[10px]">COMPANY</h4><ul class="list-none p-0 m-0 space-y-[6px]"><li><a href="/about" class="text-[13px] text-gray-400 hover:text-white transition-colors no-underline">About</a></li></ul></div>
          <div><h4 class="font-heading font-bold text-[12px] text-white uppercase mb-[10px]">LEGAL</h4><ul class="list-none p-0 m-0 space-y-[6px]"><li><a href="/terms" class="text-[13px] text-gray-400 hover:text-white transition-colors no-underline">Terms of Service</a></li><li><a href="/privacy" class="text-[13px] text-gray-400 hover:text-white transition-colors no-underline">Privacy Policy</a></li></ul></div>
        </div>
        <div class="border-t border-gray-700 pt-[20px]">
          <p class="text-[12px] text-gray-500 m-0">&copy; ${year} Strikingly. All rights reserved.</p>
        </div>
      </div>
    </footer>
  `;

  return html;
}

// Read the index.html template and inject the prerendered content
const templatePath = path.join(__dirname, 'index.html');
let template = fs.readFileSync(templatePath, 'utf-8');

const prerenderedHTML = generateStaticHTML();

// Inject the prerendered HTML into the #root div
// Find the root div and replace everything between its opening and closing tag
const rootStart = template.indexOf('<div id="root">');
const rootEnd = template.indexOf('</body>');
if (rootStart !== -1 && rootEnd !== -1) {
  template = template.substring(0, rootStart) + `<div id="root">${prerenderedHTML}</div>\n  ` + template.substring(rootEnd);
}

// Write the modified index.html
fs.writeFileSync(templatePath, template);
console.log('Prerendered HTML injected into index.html');
