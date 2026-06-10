import React, { useState, useEffect, useMemo } from 'react';
import { Search, ArrowRight, X } from 'lucide-react';

// i18n readiness: all user-visible strings in strings.en
export const strings = {
  en: {
    topBar: {
      logo: 'strikingly AI',
    },
    breadcrumb: {
      home: 'Strikingly',
      homeHref: '/',
      current: 'AI Generators',
    },
    hero: {
      h1Line1: 'BUILD ANY KIND OF SITE',
      h1Line2: 'WITH AI, IN AN INSTANT',
      subheadline: "Browse the right generator for what you're building, or jump straight into our AI site builder.",
      ctaPrimary: "START BUILDING - IT'S FREE",
      ctaPrimaryHref: '/s/ai_site_builder',
      ctaSecondary: 'BROWSE GENERATORS',
      ctaSecondaryHref: '#all-generators',
    },
    featured: {
      heading: 'FEATURED GENERATORS',
      subheading: 'A few common starting points.',
    },
    browseByCategory: {
      heading: 'BROWSE BY CATEGORY',
      cards: [
        { key: 'websites', label: 'WEBSITES', desc: 'AI-built business and personal sites for any goal.', anchor: '#websites' },
        { key: 'landing-pages', label: 'LANDING PAGES', desc: 'Single-page sites built to convert visitors fast.', anchor: '#landing-pages' },
        { key: 'portfolios', label: 'PORTFOLIOS', desc: 'Showcase your work with a clean, focused site.', anchor: '#portfolios' },
        { key: 'blogs', label: 'BLOGS', desc: 'Publish-ready blogs with built-in SEO basics.', anchor: '#blogs' },
        { key: 'stores', label: 'ONLINE STORES', desc: 'Sell products online with payments built in.', anchor: '#stores' },
        { key: 'link-in-bio', label: 'LINK-IN-BIO', desc: 'One link, all your places. Made for creators.', anchor: '#link-in-bio' },
      ],
    },
    allGenerators: {
      id: 'all-generators',
      heading: 'ALL GENERATORS',
      subheading: 'Sixty-plus generators, organized by what you\'re building.',
      searchLabel: 'Search generators',
      searchPlaceholder: 'Search generators...',
      resultCount: (n) => `${n} generator${n === 1 ? '' : 's'} match`,
      emptyTitle: 'No generators match your search.',
      emptyCta: "Can't find it? Start with our AI builder.",
      emptyCtaHref: '/s/ai_site_builder',
      clearSearch: 'Clear search',
      showAll: (n, label) => `Show all ${n} ${label.toLowerCase()}`,
      showLess: 'Show less',
    },
    howItWorks: {
      heading: 'HOW IT WORKS',
      steps: [
        { num: '1', title: 'PICK A GENERATOR', body: 'Browse by category or search to find one that fits your goal.' },
        { num: '2', title: 'DESCRIBE YOUR SITE', body: 'Tell our AI builder about your business in a sentence or two.' },
        { num: '3', title: 'GENERATE AND PUBLISH', body: 'Get a fully built site in seconds. Customize anything, then go live.' },
      ],
    },
    whyStrikingly: {
      heading: 'WHY STRIKINGLY',
      items: [
        { icon: 'bolt', title: 'LIVE IN SECONDS', body: 'Describe your site, we build it. No setup, no learning curve.' },
        { icon: 'mobile', title: 'MOBILE BY DEFAULT', body: 'Every generator produces responsive sites that work on any device.' },
        { icon: 'gift', title: 'FREE TO START', body: 'Generate, customize, and publish without a credit card.' },
      ],
    },
    faq: {
      heading: 'FREQUENTLY ASKED QUESTIONS',
      items: [
        {
          q: 'What is an AI site generator?',
          a: 'An AI site generator uses artificial intelligence to create a complete website from a short description of your business or project. You describe your goals in plain language and the AI assembles pages, images, and text that match your needs.',
        },
        {
          q: 'How is a generator different from a template?',
          a: 'A template is a pre-designed layout you fill in manually. A generator builds the structure, content, and layout for you based on your description, giving you a personalized starting point that you can edit.',
        },
        {
          q: 'Are these generators free to use?',
          a: 'Yes. You can generate, customize, and publish a site without a credit card. Paid plans are available for custom domains, advanced features, and removing the Strikingly badge.',
        },
        {
          q: 'What kinds of sites can I build?',
          a: 'You can build business sites, landing pages, portfolios, blogs, online stores, link-in-bio pages, and more. Each generator is tuned for a specific goal or industry.',
        },
        {
          q: 'Can I customize what the generator produces?',
          a: 'Absolutely. After generation you can edit text, swap images, add or remove sections, change colors, and adjust the layout with our visual editor.',
        },
        {
          q: 'Do generated sites work on mobile?',
          a: 'Yes. Every site produced by a generator is responsive by default and looks great on phones, tablets, and desktops without extra work.',
        },
      ],
    },
    closing: {
      heading: 'READY TO BUILD?',
      sub: 'Pick a generator above, or jump straight into our AI builder.',
      cta: 'START WITH AI BUILDER',
      ctaHref: '/s/ai_site_builder',
    },
    footer: {
      columns: [
        {
          title: 'Product',
          links: [
            { label: 'AI Site Builder', href: '/s/ai_site_builder' },
            { label: 'Templates', href: '/templates' },
            { label: 'Pricing', href: '/pricing' },
          ],
        },
        {
          title: 'Company',
          links: [
            { label: 'About', href: '/about' },
            { label: 'Blog', href: '/blog' },
            { label: 'Support', href: '/support' },
          ],
        },
        {
          title: 'Resources',
          links: [
            { label: 'Generators', href: '/generators' },
            { label: 'Help Center', href: '/support' },
            { label: 'Community', href: '/blog' },
          ],
        },
        {
          title: 'Legal',
          links: [
            { label: 'Terms', href: '/terms' },
            { label: 'Privacy', href: '/privacy' },
          ],
        },
      ],
      copyright: '© 2026 Strikingly, Inc. All rights reserved.',
    },
  },
};

// Generator data (all user-visible content lives under strings.en for i18n readiness)
const generatorData = [
  // Websites
  { name: 'AI Website Generator', desc: 'Describe your business, get a full site', category: 'website', slug: 'ai-website-generator' },
  { name: 'One-Page Website Builder', desc: 'Simple sites, single scroll', category: 'website', slug: 'one-page-website-builder' },
  { name: 'Wedding Website Generator', desc: 'Share your day with guests', category: 'website', slug: 'wedding-website-generator' },
  { name: 'Restaurant Website Builder', desc: 'Menu, hours, reservations, done', category: 'website', slug: 'restaurant-website-builder' },
  { name: 'Free Website Builder for Photographers', desc: 'Beautiful galleries, zero cost', category: 'website', slug: 'free-website-builder-for-photographers' },
  { name: 'Small Business Website Maker', desc: 'Professional sites without a team', category: 'website', slug: 'small-business-website-maker' },
  { name: 'Yoga Studio Website Generator', desc: 'Class schedules and online booking', category: 'website', slug: 'yoga-studio-website-generator' },
  { name: 'Real Estate Agent Site Builder', desc: 'Listings, lead capture, contact', category: 'website', slug: 'real-estate-agent-site-builder' },
  { name: 'Consultant Website Generator', desc: 'Services, testimonials, book a call', category: 'website', slug: 'consultant-website-generator' },
  { name: 'Nonprofit Website Builder', desc: 'Mission, donate, get involved', category: 'website', slug: 'nonprofit-website-builder' },
  // Landing Pages
  { name: 'AI Landing Page Maker', desc: 'One-page sites built to convert', category: 'landing', slug: 'ai-landing-page-maker' },
  { name: 'Product Launch Landing Page', desc: 'Announce and sell your new thing', category: 'landing', slug: 'product-launch-landing-page' },
  { name: 'Webinar Registration Page', desc: 'Fill seats with a focused page', category: 'landing', slug: 'webinar-registration-page' },
  { name: 'Lead Magnet Landing Page', desc: 'Trade email for your freebie', category: 'landing', slug: 'lead-magnet-landing-page' },
  { name: 'SaaS Free Trial Page', desc: 'Get users started fast', category: 'landing', slug: 'saas-free-trial-page' },
  { name: 'Event Landing Page Builder', desc: 'Promote and sell tickets', category: 'landing', slug: 'event-landing-page-builder' },
  { name: 'Ebook Download Page', desc: 'Capture leads with your guide', category: 'landing', slug: 'ebook-download-page' },
  { name: 'App Download Landing Page', desc: 'Drive installs from one screen', category: 'landing', slug: 'app-download-landing-page' },
  { name: 'Crowdfunding Campaign Page', desc: 'Tell your story and raise funds', category: 'landing', slug: 'crowdfunding-campaign-page' },
  // Portfolios
  { name: 'Free Portfolio Generator', desc: 'For creatives, in minutes, no fee', category: 'portfolio', slug: 'free-portfolio-generator' },
  { name: 'Portfolio Generator for Designers', desc: 'Case studies that stand out', category: 'portfolio', slug: 'portfolio-generator-for-designers' },
  { name: 'Photographer Portfolio Builder', desc: 'Full-screen galleries that sell', category: 'portfolio', slug: 'photographer-portfolio-builder' },
  { name: 'Developer Portfolio Generator', desc: 'Projects, skills, contact', category: 'portfolio', slug: 'developer-portfolio-generator' },
  { name: 'Artist Portfolio Website', desc: 'Work samples and exhibition history', category: 'portfolio', slug: 'artist-portfolio-website' },
  { name: 'Writer Portfolio Builder', desc: 'Articles, books, press', category: 'portfolio', slug: 'writer-portfolio-builder' },
  { name: 'Architect Portfolio Generator', desc: 'Projects with specs and photos', category: 'portfolio', slug: 'architect-portfolio-generator' },
  { name: 'Fashion Designer Portfolio', desc: 'Collections and lookbooks', category: 'portfolio', slug: 'fashion-designer-portfolio' },
  { name: 'Filmmaker Portfolio Site', desc: 'Reels, credits, contact', category: 'portfolio', slug: 'filmmaker-portfolio-site' },
  // Blogs
  { name: 'Blog Generator for Beginners', desc: 'Publish-ready in minutes', category: 'blog', slug: 'blog-generator-for-beginners' },
  { name: 'AI Blog Builder', desc: 'Topics, outlines, and posts in one flow', category: 'blog', slug: 'ai-blog-builder' },
  { name: 'Personal Blog Generator', desc: 'Your voice, your domain', category: 'blog', slug: 'personal-blog-generator' },
  { name: 'Company Blog Maker', desc: 'Thought leadership without a writer', category: 'blog', slug: 'company-blog-maker' },
  { name: 'Travel Blog Website Builder', desc: 'Itineraries, photos, stories', category: 'blog', slug: 'travel-blog-website-builder' },
  { name: 'Food Blog Generator', desc: 'Recipes, photos, SEO basics', category: 'blog', slug: 'food-blog-generator' },
  { name: 'Tech Blog Builder', desc: 'Tutorials and product reviews', category: 'blog', slug: 'tech-blog-builder' },
  { name: 'Newsletter Blog Hybrid', desc: 'Posts plus email signup', category: 'blog', slug: 'newsletter-blog-hybrid' },
  // Stores
  { name: 'Online Store Builder', desc: 'Start selling without writing code', category: 'store', slug: 'online-store-builder' },
  { name: 'Online Store Builder for Restaurants', desc: 'Takeout, merch, gift cards', category: 'store', slug: 'online-store-builder-for-restaurants' },
  { name: 'Handmade Goods Store Generator', desc: 'Sell your crafts online', category: 'store', slug: 'handmade-goods-store-generator' },
  { name: 'Fashion Boutique Store Builder', desc: 'Collections, sizes, checkout', category: 'store', slug: 'fashion-boutique-store-builder' },
  { name: 'Digital Products Store', desc: 'Ebooks, templates, downloads', category: 'store', slug: 'digital-products-store' },
  { name: 'Jewelry Store Website Builder', desc: 'Product photos and variants', category: 'store', slug: 'jewelry-store-website-builder' },
  { name: 'Coffee Roaster Store Generator', desc: 'Subscriptions and single bags', category: 'store', slug: 'coffee-roaster-store-generator' },
  { name: 'Beauty Brand Store Builder', desc: 'Skincare, makeup, bundles', category: 'store', slug: 'beauty-brand-store-builder' },
  { name: 'Bookstore Online Generator', desc: 'Sell print and ebooks', category: 'store', slug: 'bookstore-online-generator' },
  // Link-in-Bio
  { name: 'Link-in-Bio Generator', desc: 'One link for all your channels', category: 'link', slug: 'link-in-bio-generator' },
  { name: 'Creator Link-in-Bio Builder', desc: 'Instagram, TikTok, shop, email', category: 'link', slug: 'creator-link-in-bio-builder' },
  { name: 'Musician Link Page', desc: 'Streams, tour dates, merch', category: 'link', slug: 'musician-link-page' },
  { name: 'Influencer Bio Link Tool', desc: 'Campaigns, affiliates, contact', category: 'link', slug: 'influencer-bio-link-tool' },
  { name: 'Freelancer Link-in-Bio', desc: 'Services, portfolio, book a call', category: 'link', slug: 'freelancer-link-in-bio' },
  { name: 'Small Business Link Page', desc: 'Location, menu, booking, social', category: 'link', slug: 'small-business-link-page' },
  { name: 'Artist Link-in-Bio', desc: 'Shop, gallery, newsletter', category: 'link', slug: 'artist-link-in-bio' },
  { name: 'Podcaster Link Page', desc: 'Episodes, sponsors, newsletter', category: 'link', slug: 'podcaster-link-page' },
];

const CATEGORY_META = {
  website: { label: 'Website', display: 'Websites', anchor: 'websites', sectionDesc: 'AI-built business and personal sites for any goal.' },
  landing: { label: 'Landing Page', display: 'Landing Pages', anchor: 'landing-pages', sectionDesc: 'Single-page sites built to convert visitors fast.' },
  portfolio: { label: 'Portfolio', display: 'Portfolios', anchor: 'portfolios', sectionDesc: 'Showcase your work with a clean, focused site.' },
  blog: { label: 'Blog', display: 'Blogs', anchor: 'blogs', sectionDesc: 'Publish-ready blogs with built-in SEO basics.' },
  store: { label: 'Store', display: 'Online Stores', anchor: 'stores', sectionDesc: 'Sell products online with payments built in.' },
  link: { label: 'Link-in-Bio', display: 'Link-in-Bio', anchor: 'link-in-bio', sectionDesc: 'One link, all your places. Made for creators.' },
};

const CATEGORY_ORDER = ['website', 'landing', 'portfolio', 'blog', 'store', 'link'];

const INITIAL_VISIBLE = 6;

// Simple inline SVG icons for categories (shared thumbnail per subsection)
const CategoryThumb = ({ cat, className = '' }) => {
  const common = 'w-full h-full';
  if (cat === 'website') {
    return (
      <svg viewBox="0 0 64 48" className={className} aria-hidden="true" width="64" height="48">
        <rect x="2" y="2" width="60" height="44" rx="3" fill="none" stroke="#8159BB" strokeWidth="2"/>
        <rect x="6" y="8" width="52" height="6" rx="1" fill="none" stroke="#8159BB" strokeWidth="1.5"/>
        <rect x="6" y="18" width="36" height="4" rx="1" fill="none" stroke="#8159BB" strokeWidth="1.5"/>
        <rect x="6" y="26" width="44" height="4" rx="1" fill="none" stroke="#8159BB" strokeWidth="1.5"/>
        <rect x="6" y="34" width="28" height="4" rx="1" fill="none" stroke="#8159BB" strokeWidth="1.5"/>
      </svg>
    );
  }
  if (cat === 'landing') {
    return (
      <svg viewBox="0 0 64 48" className={className} aria-hidden="true" width="64" height="48">
        <rect x="8" y="4" width="48" height="40" rx="2" fill="none" stroke="#8159BB" strokeWidth="2"/>
        <rect x="12" y="10" width="40" height="5" rx="1" fill="none" stroke="#8159BB" strokeWidth="1.5"/>
        <rect x="12" y="18" width="40" height="3" rx="1" fill="none" stroke="#8159BB" strokeWidth="1.5"/>
        <rect x="12" y="24" width="32" height="3" rx="1" fill="none" stroke="#8159BB" strokeWidth="1.5"/>
        <rect x="12" y="30" width="36" height="3" rx="1" fill="none" stroke="#8159BB" strokeWidth="1.5"/>
        <circle cx="48" cy="36" r="4" fill="none" stroke="#8159BB" strokeWidth="1.5"/>
      </svg>
    );
  }
  if (cat === 'portfolio') {
    return (
      <svg viewBox="0 0 64 48" className={className} aria-hidden="true" width="64" height="48">
        <rect x="4" y="6" width="18" height="14" rx="1" fill="none" stroke="#8159BB" strokeWidth="1.5"/>
        <rect x="26" y="6" width="18" height="14" rx="1" fill="none" stroke="#8159BB" strokeWidth="1.5"/>
        <rect x="48" y="6" width="12" height="14" rx="1" fill="none" stroke="#8159BB" strokeWidth="1.5"/>
        <rect x="4" y="24" width="18" height="18" rx="1" fill="none" stroke="#8159BB" strokeWidth="1.5"/>
        <rect x="26" y="24" width="34" height="18" rx="1" fill="none" stroke="#8159BB" strokeWidth="1.5"/>
      </svg>
    );
  }
  if (cat === 'blog') {
    return (
      <svg viewBox="0 0 64 48" className={className} aria-hidden="true" width="64" height="48">
        <rect x="6" y="4" width="52" height="40" rx="2" fill="none" stroke="#8159BB" strokeWidth="2"/>
        <rect x="12" y="10" width="40" height="3" rx="1" fill="none" stroke="#8159BB" strokeWidth="1.5"/>
        <rect x="12" y="16" width="40" height="3" rx="1" fill="none" stroke="#8159BB" strokeWidth="1.5"/>
        <rect x="12" y="22" width="32" height="3" rx="1" fill="none" stroke="#8159BB" strokeWidth="1.5"/>
        <rect x="12" y="28" width="40" height="3" rx="1" fill="none" stroke="#8159BB" strokeWidth="1.5"/>
        <rect x="12" y="34" width="28" height="3" rx="1" fill="none" stroke="#8159BB" strokeWidth="1.5"/>
      </svg>
    );
  }
  if (cat === 'store') {
    return (
      <svg viewBox="0 0 64 48" className={className} aria-hidden="true" width="64" height="48">
        <path d="M8 12 L12 36 L52 36 L56 12 Z" fill="none" stroke="#8159BB" strokeWidth="2"/>
        <rect x="20" y="20" width="24" height="16" rx="1" fill="none" stroke="#8159BB" strokeWidth="1.5"/>
        <circle cx="26" cy="42" r="3" fill="none" stroke="#8159BB" strokeWidth="1.5"/>
        <circle cx="42" cy="42" r="3" fill="none" stroke="#8159BB" strokeWidth="1.5"/>
      </svg>
    );
  }
  // link-in-bio
  return (
    <svg viewBox="0 0 64 48" className={className} aria-hidden="true" width="64" height="48">
      <rect x="18" y="4" width="28" height="40" rx="3" fill="none" stroke="#8159BB" strokeWidth="2"/>
      <rect x="24" y="12" width="16" height="3" rx="1" fill="none" stroke="#8159BB" strokeWidth="1.5"/>
      <rect x="24" y="18" width="16" height="3" rx="1" fill="none" stroke="#8159BB" strokeWidth="1.5"/>
      <rect x="24" y="24" width="16" height="3" rx="1" fill="none" stroke="#8159BB" strokeWidth="1.5"/>
      <rect x="24" y="30" width="16" height="3" rx="1" fill="none" stroke="#8159BB" strokeWidth="1.5"/>
    </svg>
  );
};

// Small illustration for Browse by Category cards
const CategoryIcon = ({ cat, className = '' }) => {
  const base = 'w-9 h-9';
  return (
    <div className={`${base} ${className} flex items-center justify-center rounded-md border border-[#C6C9CD]`} aria-hidden="true">
      <CategoryThumb cat={cat} className="w-8 h-6" />
    </div>
  );
};

const GeneratorCard = ({ gen, showCategoryTag = false, thumbCat = null }) => {
  const href = `/generators/${gen.slug}`;
  const catLabel = CATEGORY_META[gen.category]?.label || '';
  return (
    <a
      href={href}
      className="group block rounded-[3px] border border-[#C6C9CD] bg-white p-5 transition-all hover:border-[#8159BB] hover:shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8159BB] focus-visible:ring-offset-2"
      aria-label={gen.name}
    >
      {thumbCat && (
        <div className="mb-3">
          <CategoryThumb cat={thumbCat} className="w-12 h-9" />
        </div>
      )}
      <div className="font-bold text-[#2E2E2F] text-[15px] leading-tight mb-1.5 group-hover:text-[#8159BB] transition-colors">
        {gen.name}
      </div>
      <div className="text-[#636972] text-[13px] leading-snug mb-2">
        {gen.desc}
      </div>
      {showCategoryTag && catLabel && (
        <span className="inline-block text-[11px] uppercase tracking-[0.5px] border border-[#8159BB] text-[#8159BB] px-[6px] py-[2px] rounded-[3px]">
          {catLabel}
        </span>
      )}
    </a>
  );
};

const BrowseCategoryCard = ({ card }) => {
  // card.key is like 'websites' but we map to internal key
  const internalKey = card.key === 'websites' ? 'website'
    : card.key === 'landing-pages' ? 'landing'
    : card.key === 'portfolios' ? 'portfolio'
    : card.key === 'blogs' ? 'blog'
    : card.key === 'stores' ? 'store'
    : 'link';

  return (
    <a
      href={card.anchor}
      className="group block rounded-[3px] border border-[#C6C9CD] bg-white p-5 transition-all hover:border-[#8159BB] hover:shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8159BB] focus-visible:ring-offset-2"
    >
      <div className="mb-3">
        <CategoryIcon cat={internalKey} />
      </div>
      <div className="flex items-center justify-between">
        <div>
          <div className="uppercase text-[#4B5056] text-sm font-bold tracking-[0.5px] mb-1">{card.label}</div>
          <div className="text-[#636972] text-[13px] leading-snug pr-6">{card.desc}</div>
        </div>
        <ArrowRight className="w-4 h-4 text-[#8159BB] flex-shrink-0 mt-1 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
      </div>
    </a>
  );
};

const Step = ({ num, title, body }) => (
  <div className="flex flex-col items-start">
    <div className="w-8 h-8 rounded-full bg-[#8159BB] text-white flex items-center justify-center text-sm font-bold mb-3">{num}</div>
    <div className="uppercase text-[#4B5056] text-sm font-bold tracking-[0.5px] mb-1.5">{title}</div>
    <div className="text-[#636972] text-[13px] leading-relaxed">{body}</div>
  </div>
);

const WhyItem = ({ title, body, icon }) => {
  const IconEl = icon === 'bolt' ? (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#8159BB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z"/></svg>
  ) : icon === 'mobile' ? (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#8159BB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="7" y="2" width="10" height="20" rx="2"/><path d="M12 18h.01"/></svg>
  ) : (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#8159BB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 12v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-7"/><path d="M12 2v14"/><path d="M5 10l7-7 7 7"/></svg>
  );
  return (
    <div className="flex flex-col items-start">
      <div className="mb-3">{IconEl}</div>
      <div className="uppercase text-[#4B5056] text-sm font-bold tracking-[0.5px] mb-1.5">{title}</div>
      <div className="text-[#636972] text-[13px] leading-relaxed">{body}</div>
    </div>
  );
};

const FAQItem = ({ item, isOpen, onToggle, id }) => {
  const panelId = `${id}-panel`;
  return (
    <div className="border-b border-[#E2E4E7] last:border-b-0">
      <button
        type="button"
        className="w-full flex items-center justify-between py-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8159BB] focus-visible:ring-offset-2"
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={onToggle}
      >
        <span className="text-[#2E2E2F] text-[15px] font-semibold pr-4">{item.q}</span>
        <span className="text-[#8159BB] text-xl leading-none select-none" aria-hidden="true">{isOpen ? '−' : '+'}</span>
      </button>
      <div
        id={panelId}
        className={`overflow-hidden transition-all duration-200 ${isOpen ? 'max-h-40 pb-4' : 'max-h-0'}`}
        aria-hidden={!isOpen}
      >
        <p className="text-[#636972] text-[13px] leading-relaxed pr-6">{item.a}</p>
      </div>
    </div>
  );
};

const GeneratorsHub = () => {
  const s = strings.en;

  // All generators with category label for search
  const enrichedGenerators = useMemo(() => generatorData.map(g => ({
    ...g,
    categoryLabel: CATEGORY_META[g.category]?.label || '',
  })), []);

  // Search state
  const [searchTerm, setSearchTerm] = useState('');

  // Expanded state per category (default true so first render shows all; useEffect collapses after mount)
  const [expanded, setExpanded] = useState(() => {
    const init = {};
    CATEGORY_ORDER.forEach((cat) => { init[cat] = true; });
    return init;
  });

  // After mount, collapse long categories (progressive enhancement)
  useEffect(() => {
    const next = {};
    CATEGORY_ORDER.forEach((cat) => {
      const count = generatorData.filter(g => g.category === cat).length;
      next[cat] = count <= INITIAL_VISIBLE;
    });
    setExpanded(next);
  }, []);

  // Group generators by category
  const generatorsByCategory = useMemo(() => {
    const groups = {};
    CATEGORY_ORDER.forEach((cat) => {
      groups[cat] = generatorData.filter(g => g.category === cat);
    });
    return groups;
  }, []);

  // Filtered results for search
  const filteredByCategory = useMemo(() => {
    if (!searchTerm.trim()) {
      return generatorsByCategory;
    }
    const q = searchTerm.toLowerCase();
    const result = {};
    CATEGORY_ORDER.forEach((cat) => {
      result[cat] = generatorsByCategory[cat].filter(g =>
        g.name.toLowerCase().includes(q) ||
        g.desc.toLowerCase().includes(q) ||
        (CATEGORY_META[cat]?.label || '').toLowerCase().includes(q)
      );
    });
    return result;
  }, [searchTerm, generatorsByCategory]);

  // Total matches
  const totalMatches = useMemo(() => {
    return Object.values(filteredByCategory).reduce((sum, arr) => sum + arr.length, 0);
  }, [filteredByCategory]);

  // Is searching
  const isSearching = searchTerm.trim().length > 0;

  // Toggle expanded for a category
  const toggleExpanded = (cat) => {
    setExpanded((prev) => ({ ...prev, [cat]: !prev[cat] }));
  };

  // Clear search
  const clearSearch = () => setSearchTerm('');

  // Render a card (used in both visible and extra)
  const renderCard = (gen, thumbCat) => (
    <GeneratorCard key={gen.slug} gen={gen} showCategoryTag={false} thumbCat={thumbCat} />
  );

  // For a category, compute visible and extra lists (respecting search + collapse)
  const getVisibleAndExtra = (cat) => {
    const all = filteredByCategory[cat] || [];
    if (isSearching) {
      // When searching, show all matches, no collapse
      return { visible: all, extra: [] };
    }
    const isExp = !!expanded[cat];
    const visible = isExp ? all : all.slice(0, INITIAL_VISIBLE);
    const extra = isExp ? [] : all.slice(INITIAL_VISIBLE);
    return { visible, extra };
  };

  // Featured generators (9 mixed)
  const featured = [
    { name: 'AI Website Generator', desc: 'Describe your business, get a full site', category: 'website', slug: 'ai-website-generator' },
    { name: 'Free Portfolio Generator', desc: 'For creatives, in minutes, no fee', category: 'portfolio', slug: 'free-portfolio-generator' },
    { name: 'AI Landing Page Maker', desc: 'One-page sites built to convert', category: 'landing', slug: 'ai-landing-page-maker' },
    { name: 'Online Store Builder', desc: 'Start selling without writing code', category: 'store', slug: 'online-store-builder' },
    { name: 'Link-in-Bio Generator', desc: 'One link for all your channels', category: 'link', slug: 'link-in-bio-generator' },
    { name: 'Blog Generator for Beginners', desc: 'Publish-ready in minutes', category: 'blog', slug: 'blog-generator-for-beginners' },
    { name: 'Wedding Website Generator', desc: 'Share your day with guests', category: 'website', slug: 'wedding-website-generator' },
    { name: 'Restaurant Website Builder', desc: 'Menu, hours, reservations, done', category: 'website', slug: 'restaurant-website-builder' },
    { name: 'One-Page Website Builder', desc: 'Simple sites, single scroll', category: 'website', slug: 'one-page-website-builder' },
  ];

  return (
    <div className="min-h-screen bg-white text-[#2E2E2F] font-sans">
      {/* Section 0: Top bar */}
      <header className="w-full bg-white border-b border-[#E2E4E7]">
        <div className="max-w-[1200px] mx-auto px-5 h-14 flex items-center">
          <a href="/" className="text-[#2E2E2F] font-bold tracking-[0.5px] text-lg" style={{ fontFamily: "'Josefin Sans', 'Poppins', system-ui, sans-serif" }}>
            {s.topBar.logo}
          </a>
        </div>
      </header>

      {/* Section 1: Breadcrumb */}
      <nav aria-label="Breadcrumb" className="max-w-[1200px] mx-auto px-5 pt-3 pb-2">
        <ol className="flex items-center text-sm text-[#636972]">
          <li>
            <a href={s.breadcrumb.homeHref} className="hover:underline">{s.breadcrumb.home}</a>
          </li>
          <li className="mx-2 text-[#8159BB]" aria-hidden="true">›</li>
          <li className="text-[#636972]">{s.breadcrumb.current}</li>
        </ol>
      </nav>

      {/* Section 2: Hero */}
      <section className="max-w-[1200px] mx-auto px-5 pt-8 pb-10 md:pt-12 md:pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center">
          {/* Left: text + CTAs */}
          <div>
            <h1 className="text-[28px] md:text-[40px] lg:text-[44px] leading-[1.15] tracking-[-0.2px] mb-4" style={{ fontFamily: "'Josefin Sans', 'Poppins', system-ui, sans-serif", fontWeight: 700 }}>
              <span className="block text-[#2E2E2F] uppercase">{s.hero.h1Line1}</span>
              <span
                className="block uppercase bg-clip-text text-transparent"
                style={{ backgroundImage: 'linear-gradient(90deg, #7671FF 0%, #CB0C9F 100%)' }}
              >
                {s.hero.h1Line2}
              </span>
            </h1>
            <p className="text-[#636972] text-[14px] leading-relaxed max-w-[42ch] mb-6">
              {s.hero.subheadline}
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={s.hero.ctaPrimaryHref}
                className="inline-flex items-center justify-center h-11 px-5 rounded-[4px] text-white text-sm font-bold uppercase tracking-[0.5px] transition-opacity hover:opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#8159BB]"
                style={{ background: 'linear-gradient(90deg, #7671FF 0%, #CB0C9F 100%)' }}
              >
                {s.hero.ctaPrimary}
              </a>
              <a
                href={s.hero.ctaSecondaryHref}
                className="inline-flex items-center justify-center h-11 px-5 rounded-[4px] text-sm font-bold uppercase tracking-[0.5px] border border-[#8159BB] text-[#8159BB] hover:bg-[#F4F6F8] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#8159BB]"
              >
                {s.hero.ctaSecondary}
              </a>
            </div>
          </div>

          {/* Right: illustration (inline SVG, explicit size) */}
          <div className="flex justify-center md:justify-end">
            <svg
              width="460"
              height="300"
              viewBox="0 0 460 300"
              className="w-full max-w-[460px] h-auto"
              aria-hidden="true"
            >
              {/* faint wash */}
              <defs>
                <radialGradient id="heroWash" cx="50%" cy="40%" r="70%" fx="50%" fy="40%">
                  <stop offset="0%" stopColor="#8159BB" stopOpacity="0.06" />
                  <stop offset="100%" stopColor="#CB0C9F" stopOpacity="0.03" />
                </radialGradient>
              </defs>
              <rect x="0" y="0" width="460" height="300" fill="url(#heroWash)" rx="8" />
              {/* browser frame */}
              <rect x="30" y="20" width="400" height="260" rx="8" fill="#FFFFFF" stroke="#C6C9CD" strokeWidth="2" />
              {/* title bar */}
              <rect x="30" y="20" width="400" height="28" rx="8" fill="#F4F6F8" />
              <rect x="30" y="40" width="400" height="8" fill="#F4F6F8" />
              {/* dots */}
              <circle cx="50" cy="34" r="4" fill="#C6C9CD" />
              <circle cx="66" cy="34" r="4" fill="#C6C9CD" />
              <circle cx="82" cy="34" r="4" fill="#C6C9CD" />
              {/* content mock */}
              <rect x="50" y="70" width="180" height="12" rx="2" fill="#E2E4E7" />
              <rect x="50" y="90" width="120" height="10" rx="2" fill="#E2E4E7" />
              <rect x="50" y="110" width="160" height="10" rx="2" fill="#E2E4E7" />
              <rect x="50" y="140" width="360" height="80" rx="4" fill="#F4F6F8" stroke="#E2E4E7" />
              <rect x="70" y="160" width="80" height="8" rx="2" fill="#C6C9CD" />
              <rect x="70" y="178" width="140" height="8" rx="2" fill="#C6C9CD" />
              <rect x="70" y="196" width="100" height="8" rx="2" fill="#C6C9CD" />
              {/* right column mock */}
              <rect x="260" y="70" width="150" height="150" rx="4" fill="#F4F6F8" stroke="#E2E4E7" />
              <rect x="275" y="90" width="120" height="8" rx="2" fill="#E2E4E7" />
              <rect x="275" y="108" width="90" height="8" rx="2" fill="#E2E4E7" />
              <rect x="275" y="126" width="110" height="8" rx="2" fill="#E2E4E7" />
              <rect x="275" y="150" width="60" height="24" rx="3" fill="#8159BB" />
            </svg>
          </div>
        </div>
      </section>

      {/* Section 3: Featured Generators */}
      <section className="max-w-[1200px] mx-auto px-5 pb-10">
        <div className="mb-5">
          <h2 className="text-[#4B5056] text-[26px] md:text-[28px] font-bold tracking-[0.3px] uppercase mb-1" style={{ fontFamily: "'Josefin Sans', 'Poppins', system-ui, sans-serif" }}>
            {s.featured.heading}
          </h2>
          <p className="text-[#636972] text-[14px]">{s.featured.subheading}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {featured.map((gen) => (
            <GeneratorCard key={gen.slug} gen={gen} showCategoryTag={true} />
          ))}
        </div>
      </section>

      {/* Section 4: Browse by Category */}
      <section className="max-w-[1200px] mx-auto px-5 py-8">
        <h2 className="text-[#4B5056] text-[26px] md:text-[28px] font-bold tracking-[0.3px] uppercase mb-5" style={{ fontFamily: "'Josefin Sans', 'Poppins', system-ui, sans-serif" }}>
          {s.browseByCategory.heading}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {s.browseByCategory.cards.map((card) => (
            <BrowseCategoryCard key={card.key} card={card} />
          ))}
        </div>
      </section>

      {/* Section 5: All Generators (SEO heart) */}
      <section id={s.allGenerators.id} className="max-w-[1200px] mx-auto px-5 pt-6 pb-12">
        <div className="mb-5">
          <h2 className="text-[#4B5056] text-[26px] md:text-[28px] font-bold tracking-[0.3px] uppercase mb-1" style={{ fontFamily: "'Josefin Sans', 'Poppins', system-ui, sans-serif" }}>
            {s.allGenerators.heading}
          </h2>
          <p className="text-[#636972] text-[14px] mb-4">{s.allGenerators.subheading}</p>

          {/* Search */}
          <div className="relative max-w-[480px]">
            <label htmlFor="gen-search" className="sr-only">{s.allGenerators.searchLabel}</label>
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-[#636972]">
              <Search className="w-4 h-4" aria-hidden="true" />
            </div>
            <input
              id="gen-search"
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder={s.allGenerators.searchPlaceholder}
              aria-label={s.allGenerators.searchLabel}
              className="w-full h-10 pl-9 pr-9 rounded-[4px] border border-[#C6C9CD] text-[14px] placeholder:text-[#9AA0A6] focus:outline-none focus:border-[#8159BB] focus:ring-1 focus:ring-[#8159BB]"
            />
            {searchTerm && (
              <button
                type="button"
                onClick={clearSearch}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-[#636972] hover:text-[#2E2E2F] p-1"
                aria-label="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
          <div className="mt-2 text-[13px] text-[#636972]">
            {isSearching ? s.allGenerators.resultCount(totalMatches) : `${generatorData.length} generators`}
          </div>
        </div>

        {/* No results empty state */}
        {isSearching && totalMatches === 0 && (
          <div className="py-8 text-center">
            <p className="text-[#636972] mb-3">{s.allGenerators.emptyTitle}</p>
            <a href={s.allGenerators.emptyCtaHref} className="text-[#8159BB] underline underline-offset-2">
              {s.allGenerators.emptyCta}
            </a>
            <div className="mt-3">
              <button
                type="button"
                onClick={clearSearch}
                className="text-sm text-[#636972] hover:text-[#2E2E2F] underline"
              >
                {s.allGenerators.clearSearch}
              </button>
            </div>
          </div>
        )}

        {/* Categorized subsections */}
        {CATEGORY_ORDER.map((catKey) => {
          const meta = CATEGORY_META[catKey];
          const { visible, extra } = getVisibleAndExtra(catKey);
          const totalInCat = (generatorsByCategory[catKey] || []).length;
          const hasExtra = !isSearching && totalInCat > INITIAL_VISIBLE;
          const isExpanded = !!expanded[catKey];

          // Hide subsection entirely if searching and no matches
          if (isSearching && visible.length === 0) return null;

          return (
            <div key={catKey} id={meta.anchor} className="mb-10">
              <h3 className="text-[#4B5056] text-[15px] font-bold tracking-[0.5px] uppercase mb-1" style={{ fontFamily: "'Josefin Sans', 'Poppins', system-ui, sans-serif" }}>
                {meta.display}
              </h3>
              <p className="text-[#636972] text-[13px] mb-4">{meta.sectionDesc}</p>

              {/* Visible cards grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {visible.map((gen) => renderCard(gen, catKey))}
              </div>

              {/* Collapsible extras with CSS height transition */}
              {extra.length > 0 && (
                <div
                  className={`collapsible mt-5 ${isExpanded ? 'expanded' : ''}`}
                  id={`collapsible-${catKey}`}
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {extra.map((gen) => renderCard(gen, catKey))}
                  </div>
                </div>
              )}

              {/* Show all / Show less toggle */}
              {hasExtra && (
                <button
                  type="button"
                  onClick={() => toggleExpanded(catKey)}
                  className="mt-4 text-sm font-semibold text-[#8159BB] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8159BB] focus-visible:ring-offset-2"
                  aria-expanded={isExpanded}
                  aria-controls={`collapsible-${catKey}`}
                >
                  {isExpanded ? s.allGenerators.showLess : s.allGenerators.showAll(totalInCat, meta.display)}
                </button>
              )}
            </div>
          );
        })}
      </section>

      {/* Section 6: How It Works */}
      <section className="bg-[#F4F6F8] py-10">
        <div className="max-w-[1200px] mx-auto px-5">
          <h2 className="text-[#4B5056] text-[26px] md:text-[28px] font-bold tracking-[0.3px] uppercase mb-6" style={{ fontFamily: "'Josefin Sans', 'Poppins', system-ui, sans-serif" }}>
            {s.howItWorks.heading}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {s.howItWorks.steps.map((step, idx) => (
              <Step key={idx} num={step.num} title={step.title} body={step.body} />
            ))}
          </div>
        </div>
      </section>

      {/* Section 7: Why Strikingly */}
      <section className="max-w-[1200px] mx-auto px-5 py-10">
        <h2 className="text-[#4B5056] text-[26px] md:text-[28px] font-bold tracking-[0.3px] uppercase mb-6" style={{ fontFamily: "'Josefin Sans', 'Poppins', system-ui, sans-serif" }}>
          {s.whyStrikingly.heading}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {s.whyStrikingly.items.map((item, idx) => (
            <WhyItem key={idx} title={item.title} body={item.body} icon={item.icon} />
          ))}
        </div>
      </section>

      {/* Section 8: FAQ */}
      <section className="max-w-[1200px] mx-auto px-5 py-8">
        <h2 className="text-[#4B5056] text-[26px] md:text-[28px] font-bold tracking-[0.3px] uppercase mb-4" style={{ fontFamily: "'Josefin Sans', 'Poppins', system-ui, sans-serif" }}>
          {s.faq.heading}
        </h2>
        <div className="border-t border-[#E2E4E7]">
          {s.faq.items.map((item, idx) => (
            <FAQItem
              key={idx}
              item={item}
              isOpen={idx === 0} // first expanded by default (controlled by local state below)
              onToggle={() => { /* handled by local state in a wrapper */ }}
              id={`faq-${idx}`}
            />
          ))}
        </div>
      </section>

      {/* Controlled FAQ (separate to manage open state properly) */}
      <FAQController items={s.faq.items} />

      {/* Section 9: Closing CTA */}
      <section className="max-w-[1200px] mx-auto px-5 py-12 text-center">
        <h2 className="text-[#2E2E2F] text-[26px] md:text-[28px] font-bold tracking-[0.3px] uppercase mb-2" style={{ fontFamily: "'Josefin Sans', 'Poppins', system-ui, sans-serif" }}>
          {s.closing.heading}
        </h2>
        <p className="text-[#636972] mb-5">{s.closing.sub}</p>
        <a
          href={s.closing.ctaHref}
          className="inline-flex items-center justify-center h-11 px-6 rounded-[4px] text-white text-sm font-bold uppercase tracking-[0.5px] transition-opacity hover:opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#8159BB]"
          style={{ background: 'linear-gradient(90deg, #7671FF 0%, #CB0C9F 100%)' }}
        >
          {s.closing.cta}
        </a>
      </section>

      {/* Section 10: Footer */}
      <footer className="border-t border-[#E2E4E7] bg-white">
        <div className="max-w-[1200px] mx-auto px-5 py-8 text-sm">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
            <div>
              <div className="font-bold tracking-[0.5px] text-[#2E2E2F] mb-1" style={{ fontFamily: "'Josefin Sans', 'Poppins', system-ui, sans-serif" }}>
                strikingly AI
              </div>
              <div className="text-[#636972] text-xs">{s.footer.copyright}</div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-10 gap-y-6 text-[#636972]">
              {s.footer.columns.map((col, i) => (
                <div key={i}>
                  <div className="uppercase text-xs tracking-[0.5px] text-[#4B5056] font-bold mb-2">{col.title}</div>
                  <ul className="space-y-1">
                    {col.links.map((l, j) => (
                      <li key={j}>
                        <a href={l.href} className="hover:underline">{l.label}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Separate controlled component for FAQ to manage open state (first open by default)
const FAQController = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="max-w-[1200px] mx-auto px-5 pb-8 -mt-4">
      <div className="border-t border-[#E2E4E7]">
        {items.map((item, idx) => {
          const isOpen = idx === openIndex;
          const panelId = `faq-ctrl-${idx}-panel`;
          return (
            <div key={idx} className="border-b border-[#E2E4E7] last:border-b-0">
              <button
                type="button"
                className="w-full flex items-center justify-between py-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8159BB] focus-visible:ring-offset-2"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? -1 : idx)}
              >
                <span className="text-[#2E2E2F] text-[15px] font-semibold pr-4">{item.q}</span>
                <span className="text-[#8159BB] text-xl leading-none select-none" aria-hidden="true">{isOpen ? '−' : '+'}</span>
              </button>
              <div
                id={panelId}
                className={`overflow-hidden transition-all duration-200 ${isOpen ? 'max-h-40 pb-4' : 'max-h-0'}`}
                aria-hidden={!isOpen}
              >
                <p className="text-[#636972] text-[13px] leading-relaxed pr-6">{item.a}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GeneratorsHub;
