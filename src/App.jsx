import { useState, useEffect, useRef } from 'react'
import './App.css'

// i18n strings object - easy to add strings.es, strings.ja later
const strings = {
  en: {
    topBar: {
      logo: 'strikingly AI',
    },
    breadcrumb: {
      home: 'Strikingly',
      current: 'AI Generators',
    },
    hero: {
      h1Line1: 'BUILD ANY KIND OF SITE',
      h1Line2: 'WITH AI, IN AN INSTANT',
      subheadline: 'Browse the right generator for what you\'re building, or jump straight into our AI site builder.',
      primaryCta: 'START BUILDING - IT\'S FREE',
      secondaryCta: 'BROWSE GENERATORS',
    },
    featured: {
      heading: 'FEATURED GENERATORS',
      subheading: 'A few common starting points.',
    },
    browseByCategory: {
      heading: 'BROWSE BY CATEGORY',
    },
    categories: {
      websites: {
        slug: 'websites',
        name: 'Websites',
        description: 'AI-built business and personal sites for any goal.',
      },
      landingPages: {
        slug: 'landing-pages',
        name: 'Landing Pages',
        description: 'Single-page sites built to convert visitors fast.',
      },
      portfolios: {
        slug: 'portfolios',
        name: 'Portfolios',
        description: 'Showcase your work with a clean, focused site.',
      },
      blogs: {
        slug: 'blogs',
        name: 'Blogs',
        description: 'Publish-ready blogs with built-in SEO basics.',
      },
      stores: {
        slug: 'stores',
        name: 'Online Stores',
        description: 'Sell products online with payments built in.',
      },
      linkInBio: {
        slug: 'link-in-bio',
        name: 'Link-in-Bio',
        description: 'One link, all your places. Made for creators.',
      },
    },
    allGenerators: {
      heading: 'ALL GENERATORS',
      subheading: 'Sixty-plus generators, organized by what you\'re building.',
      searchPlaceholder: 'Search generators...',
      searchLabel: 'Search generators',
      resultCount: (count) => `${count} generators match`,
      noResults: 'No generators match your search.',
      clearSearch: 'Clear search',
      cantFind: 'Can\'t find it? Start with our AI builder.',
      showAll: (count) => `Show all ${count} generators`,
      showLess: 'Show less',
    },
    howItWorks: {
      heading: 'HOW IT WORKS',
      steps: [
        {
          title: 'PICK A GENERATOR',
          description: 'Browse by category or search to find one that fits your goal.',
        },
        {
          title: 'DESCRIBE YOUR SITE',
          description: 'Tell our AI builder about your business in a sentence or two.',
        },
        {
          title: 'GENERATE AND PUBLISH',
          description: 'Get a fully built site in seconds. Customize anything, then go live.',
        },
      ],
    },
    whyStrikingly: {
      heading: 'WHY STRIKINGLY',
      features: [
        {
          title: 'LIVE IN SECONDS',
          description: 'Describe your site, we build it. No setup, no learning curve.',
        },
        {
          title: 'MOBILE BY DEFAULT',
          description: 'Every generator produces responsive sites that work on any device.',
        },
        {
          title: 'FREE TO START',
          description: 'Generate, customize, and publish without a credit card.',
        },
      ],
    },
    faq: {
      heading: 'FREQUENTLY ASKED QUESTIONS',
      questions: [
        {
          question: 'What is an AI site generator?',
          answer: 'An AI site generator is a tool that uses artificial intelligence to create a complete website based on a simple description you provide. Instead of choosing from templates and manually filling in content, you tell the AI what kind of site you need, and it generates the layout, copy, images, and structure automatically.\n\nStrikingly\'s AI generators are designed for speed and simplicity. You describe your business or project, and within seconds you have a fully functional site you can customize and publish.',
        },
        {
          question: 'How is a generator different from a template?',
          answer: 'Templates give you a pre-designed layout that you fill in yourself. Generators go further: they create the layout, write starter copy, suggest images, and structure the pages based on your description.\n\nThink of a template as a blank form, and a generator as a first draft that\'s already tailored to your industry and goals. You can still customize everything afterward.',
        },
        {
          question: 'Are these generators free to use?',
          answer: 'Yes. You can generate, customize, and publish a site without entering a credit card. Strikingly offers a free tier that covers most personal and small-business needs.\n\nIf you need advanced features like a custom domain, e-commerce tools, or higher storage limits, paid plans are available. But you can start building and go live at no cost.',
        },
        {
          question: 'What kinds of sites can I build?',
          answer: 'Strikingly offers generators for a wide range of site types: business websites, landing pages, portfolios, blogs, online stores, link-in-bio pages, wedding sites, restaurant sites, and many more.\n\nEach generator is tuned to the conventions and best practices of its category, so you get a site that looks and works the way visitors expect.',
        },
        {
          question: 'Can I customize what the generator produces?',
          answer: 'Absolutely. The generator gives you a strong starting point, but everything is editable. You can change text, swap images, adjust colors, rearrange sections, add or remove pages, and tweak the design to match your brand.\n\nStrikingly\'s editor is visual and drag-and-drop, so you don\'t need to know code to make changes.',
        },
        {
          question: 'Do generated sites work on mobile?',
          answer: 'Yes. Every site generated by Strikingly is fully responsive by default. The AI builds layouts that adapt to phones, tablets, and desktops automatically.\n\nYou can also preview and fine-tune the mobile view in the editor to make sure everything looks exactly right on every screen size.',
        },
      ],
    },
    closingCta: {
      heading: 'READY TO BUILD?',
      sub: 'Pick a generator above, or jump straight into our AI builder.',
      cta: 'START WITH AI BUILDER',
    },
    footer: {
      product: 'Product',
      company: 'Company',
      resources: 'Resources',
      legal: 'Legal',
      links: {
        product: ['AI Site Builder', 'Templates', 'Pricing', 'Features'],
        company: ['About', 'Blog', 'Careers', 'Press'],
        resources: ['Support', 'Help Center', 'Community', 'Tutorials'],
        legal: ['Terms', 'Privacy', 'Cookies', 'GDPR'],
      },
      copyright: '© 2026 Strikingly. All rights reserved.',
    },
  },
}

// Sample data for featured generators (9 items for 3x3 grid)
const featuredGenerators = [
  { name: 'AI Website Generator', description: 'Describe your business, get a full site.', category: 'Website', slug: 'ai-website-generator' },
  { name: 'Free Portfolio Generator', description: 'For creatives, in minutes, no fee.', category: 'Portfolio', slug: 'free-portfolio-generator' },
  { name: 'AI Landing Page Maker', description: 'One-page sites built to convert.', category: 'Landing Page', slug: 'ai-landing-page-maker' },
  { name: 'Online Store Builder', description: 'Start selling without writing code.', category: 'Store', slug: 'online-store-builder' },
  { name: 'Link-in-Bio Generator', description: 'One link for all your channels.', category: 'Link-in-Bio', slug: 'link-in-bio-generator' },
  { name: 'One-Page Website Builder', description: 'Simple sites, single scroll.', category: 'Website', slug: 'one-page-website-builder' },
  { name: 'Wedding Website Generator', description: 'Share your day with guests.', category: 'Website', slug: 'wedding-website-generator' },
  { name: 'Restaurant Website Builder', description: 'Menu, hours, reservations, done.', category: 'Website', slug: 'restaurant-website-builder' },
  { name: 'Blog Generator for Beginners', description: 'Publish-ready in minutes.', category: 'Blog', slug: 'blog-generator-for-beginners' },
]

// Category data for browse by category section
const categories = [
  { slug: 'websites', name: 'Websites', description: 'AI-built business and personal sites for any goal.', icon: 'globe' },
  { slug: 'landing-pages', name: 'Landing Pages', description: 'Single-page sites built to convert visitors fast.', icon: 'target' },
  { slug: 'portfolios', name: 'Portfolios', description: 'Showcase your work with a clean, focused site.', icon: 'briefcase' },
  { slug: 'blogs', name: 'Blogs', description: 'Publish-ready blogs with built-in SEO basics.', icon: 'file-text' },
  { slug: 'stores', name: 'Online Stores', description: 'Sell products online with payments built in.', icon: 'shopping-cart' },
  { slug: 'link-in-bio', name: 'Link-in-Bio', description: 'One link, all your places. Made for creators.', icon: 'link' },
]

// All generators data organized by category (10 items each for "Show all" toggle)
const allGeneratorsByCategory = {
  websites: {
    heading: 'Websites',
    description: 'AI-built business and personal sites for any goal.',
    items: [
      { name: 'AI Website Generator', description: 'Describe your business, get a full site.', slug: 'ai-website-generator' },
      { name: 'Free Website Builder for Photographers', description: 'Showcase your portfolio online.', slug: 'free-website-builder-photographers' },
      { name: 'One-Page Wedding Website Builder', description: 'Share your day with guests.', slug: 'one-page-wedding-website-builder' },
      { name: 'Restaurant Website Builder', description: 'Menu, hours, reservations, done.', slug: 'restaurant-website-builder' },
      { name: 'AI Business Website Generator', description: 'Professional sites for any industry.', slug: 'ai-business-website-generator' },
      { name: 'No-Code Website Builder for Coaches', description: 'Book clients with a polished site.', slug: 'no-code-website-builder-coaches' },
      { name: 'Beautiful Portfolio Website Maker', description: 'Clean design for your best work.', slug: 'beautiful-portfolio-website-maker' },
      { name: 'Free AI Website Generator for Artists', description: 'Display your art online, no fee.', slug: 'free-ai-website-generator-artists' },
      { name: 'Yoga Instructor Website Builder', description: 'Class schedules, bookings, and more.', slug: 'yoga-instructor-website-builder' },
      { name: 'Small Business Website Generator', description: 'Get online fast, look professional.', slug: 'small-business-website-generator' },
    ],
  },
  'landing-pages': {
    heading: 'Landing Pages',
    description: 'Single-page sites built to convert visitors fast.',
    items: [
      { name: 'AI Landing Page Maker', description: 'One-page sites built to convert.', slug: 'ai-landing-page-maker' },
      { name: 'Free Landing Page Generator', description: 'High-converting pages at no cost.', slug: 'free-landing-page-generator' },
      { name: 'Product Launch Landing Page Builder', description: 'Launch your next big thing.', slug: 'product-launch-landing-page-builder' },
      { name: 'Lead Capture Landing Page Generator', description: 'Collect emails and grow your list.', slug: 'lead-capture-landing-page-generator' },
      { name: 'Event Landing Page Builder', description: 'Promote your event and sell tickets.', slug: 'event-landing-page-builder' },
      { name: 'App Download Landing Page Maker', description: 'Drive installs with a focused page.', slug: 'app-download-landing-page-maker' },
      { name: 'Webinar Landing Page Generator', description: 'Register attendees in minutes.', slug: 'webinar-landing-page-generator' },
      { name: 'SaaS Landing Page Builder', description: 'Showcase your software, get signups.', slug: 'saas-landing-page-builder' },
      { name: 'AI-Powered Landing Page Creator', description: 'Smart pages that adapt to your goal.', slug: 'ai-powered-landing-page-creator' },
      { name: 'No-Code Landing Page Builder', description: 'Build fast, no developer needed.', slug: 'no-code-landing-page-builder' },
    ],
  },
  portfolios: {
    heading: 'Portfolios',
    description: 'Showcase your work with a clean, focused site.',
    items: [
      { name: 'Free Portfolio Generator', description: 'For creatives, in minutes, no fee.', slug: 'free-portfolio-generator' },
      { name: 'Portfolio Generator for Designers', description: 'Show your best design work.', slug: 'portfolio-generator-designers' },
      { name: 'Photographer Portfolio Builder', description: 'Stunning galleries for your photos.', slug: 'photographer-portfolio-builder' },
      { name: 'AI Portfolio Maker for Developers', description: 'Code projects, beautifully presented.', slug: 'ai-portfolio-maker-developers' },
      { name: 'Artist Portfolio Website Generator', description: 'Display your art online.', slug: 'artist-portfolio-website-generator' },
      { name: 'Freelancer Portfolio Builder', description: 'Win more clients with a pro site.', slug: 'freelancer-portfolio-builder' },
      { name: 'Model Portfolio Generator', description: 'Clean layouts for your lookbook.', slug: 'model-portfolio-generator' },
      { name: 'Architect Portfolio Website Maker', description: 'Showcase your projects and vision.', slug: 'architect-portfolio-website-maker' },
      { name: 'Writer Portfolio Generator', description: 'Publish your clips and bio.', slug: 'writer-portfolio-generator' },
      { name: 'Video Editor Portfolio Builder', description: 'Reel and resume, all in one place.', slug: 'video-editor-portfolio-builder' },
    ],
  },
  blogs: {
    heading: 'Blogs',
    description: 'Publish-ready blogs with built-in SEO basics.',
    items: [
      { name: 'Blog Generator for Beginners', description: 'Publish-ready in minutes.', slug: 'blog-generator-for-beginners' },
      { name: 'AI Blog Generator', description: 'Smart layouts for your content.', slug: 'ai-blog-generator' },
      { name: 'Free Blog Website Builder', description: 'Start writing, no cost.', slug: 'free-blog-website-builder' },
      { name: 'Travel Blog Generator', description: 'Share your adventures with the world.', slug: 'travel-blog-generator' },
      { name: 'Food Blog Website Builder', description: 'Recipes, photos, and stories.', slug: 'food-blog-website-builder' },
      { name: 'Tech Blog Generator', description: 'Code tutorials and industry insights.', slug: 'tech-blog-generator' },
      { name: 'Lifestyle Blog Website Maker', description: 'Fashion, wellness, and daily life.', slug: 'lifestyle-blog-website-maker' },
      { name: 'Personal Blog Generator', description: 'Your thoughts, your space.', slug: 'personal-blog-generator' },
      { name: 'Business Blog Builder', description: 'Content marketing made easy.', slug: 'business-blog-builder' },
      { name: 'No-Code Blog Platform Generator', description: 'Publish without touching code.', slug: 'no-code-blog-platform-generator' },
    ],
  },
  stores: {
    heading: 'Online Stores',
    description: 'Sell products online with payments built in.',
    items: [
      { name: 'Online Store Builder', description: 'Start selling without writing code.', slug: 'online-store-builder' },
      { name: 'Online Store Builder for Restaurants', description: 'Take orders and reservations.', slug: 'online-store-builder-restaurants' },
      { name: 'Free E-commerce Generator', description: 'Open your shop at no cost.', slug: 'free-ecommerce-generator' },
      { name: 'AI Store Builder for Fashion', description: 'Lookbook and checkout in one.', slug: 'ai-store-builder-fashion' },
      { name: 'Digital Product Store Generator', description: 'Sell downloads and courses.', slug: 'digital-product-store-generator' },
      { name: 'Handmade Goods Store Builder', description: 'Crafts, art, and custom orders.', slug: 'handmade-goods-store-builder' },
      { name: 'Subscription Box Store Generator', description: 'Recurring revenue, simplified.', slug: 'subscription-box-store-generator' },
      { name: 'Dropshipping Store Builder', description: 'Source, list, and sell automatically.', slug: 'dropshipping-store-builder' },
      { name: 'AI-Powered E-commerce Creator', description: 'Smart product pages that convert.', slug: 'ai-powered-ecommerce-creator' },
      { name: 'No-Code Online Store Generator', description: 'Launch your shop in minutes.', slug: 'no-code-online-store-generator' },
    ],
  },
  'link-in-bio': {
    heading: 'Link-in-Bio',
    description: 'One link, all your places. Made for creators.',
    items: [
      { name: 'Link-in-Bio Generator', description: 'One link for all your channels.', slug: 'link-in-bio-generator' },
      { name: 'Free Link-in-Bio Page Builder', description: 'All your links, one beautiful page.', slug: 'free-link-in-bio-page-builder' },
      { name: 'Creator Link-in-Bio Generator', description: 'Built for influencers and makers.', slug: 'creator-link-in-bio-generator' },
      { name: 'Musician Link-in-Bio Builder', description: 'Streaming, merch, and tour dates.', slug: 'musician-link-in-bio-builder' },
      { name: 'Podcast Link-in-Bio Generator', description: 'Episodes, sponsors, and subscribe links.', slug: 'podcast-link-in-bio-generator' },
      { name: 'AI Link-in-Bio Page Maker', description: 'Smart layouts for your content.', slug: 'ai-link-in-bio-page-maker' },
      { name: 'Influencer Link Hub Generator', description: 'Brand deals and social links.', slug: 'influencer-link-hub-generator' },
      { name: 'No-Code Link-in-Bio Builder', description: 'Set up in minutes, no tech skills.', slug: 'no-code-link-in-bio-builder' },
      { name: 'TikTok Link-in-Bio Generator', description: 'Drive traffic from your profile.', slug: 'tiktok-link-in-bio-generator' },
      { name: 'Instagram Link-in-Bio Maker', description: 'One link for all your posts.', slug: 'instagram-link-in-bio-maker' },
    ],
  },
}

// SVG Icon components
const Icons = {
  globe: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  ),
  target: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  ),
  briefcase: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  ),
  'file-text': () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <polyline points="10 9 9 9 8 9" />
    </svg>
  ),
  'shopping-cart': () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="9" cy="21" r="1" />
      <circle cx="20" cy="21" r="1" />
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
    </svg>
  ),
  link: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  ),
  search: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  ),
  arrowRight: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  ),
  chevronDown: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="6 9 12 15 18 9" />
    </svg>
  ),
  check: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  ),
  zap: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  ),
  smartphone: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
      <line x1="12" y1="18" x2="12.01" y2="18" />
    </svg>
  ),
  dollarSign: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="12" y1="1" x2="12" y2="23" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  ),
}

const IconComponent = ({ name }) => {
  const Icon = Icons[name]
  return Icon ? <Icon /> : null
}

// Category thumbnail SVG (same for all cards in a subsection)
const CategoryThumbnail = ({ category }) => {
  const thumbnails = {
    websites: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <rect x="4" y="8" width="40" height="32" rx="4" stroke="#8159BB" strokeWidth="2" />
        <line x1="4" y1="16" x2="44" y2="16" stroke="#8159BB" strokeWidth="2" />
        <circle cx="10" cy="12" r="2" fill="#8159BB" />
        <circle cx="16" cy="12" r="2" fill="#8159BB" />
        <circle cx="22" cy="12" r="2" fill="#8159BB" />
        <rect x="10" y="22" width="12" height="2" fill="#8159BB" />
        <rect x="10" y="28" width="28" height="2" fill="#C6C9CD" />
        <rect x="10" y="34" width="20" height="2" fill="#C6C9CD" />
      </svg>
    ),
    'landing-pages': (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <rect x="8" y="4" width="32" height="40" rx="4" stroke="#8159BB" strokeWidth="2" />
        <rect x="14" y="12" width="20" height="4" fill="#8159BB" />
        <rect x="14" y="20" width="20" height="2" fill="#C6C9CD" />
        <rect x="14" y="26" width="20" height="2" fill="#C6C9CD" />
        <rect x="18" y="34" width="12" height="4" rx="2" fill="#8159BB" />
      </svg>
    ),
    portfolios: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <rect x="4" y="8" width="18" height="18" rx="2" stroke="#8159BB" strokeWidth="2" />
        <rect x="26" y="8" width="18" height="18" rx="2" stroke="#8159BB" strokeWidth="2" />
        <rect x="4" y="30" width="18" height="18" rx="2" stroke="#8159BB" strokeWidth="2" />
        <rect x="26" y="30" width="18" height="18" rx="2" stroke="#8159BB" strokeWidth="2" />
      </svg>
    ),
    blogs: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <rect x="8" y="4" width="32" height="40" rx="2" stroke="#8159BB" strokeWidth="2" />
        <rect x="14" y="12" width="20" height="3" fill="#8159BB" />
        <rect x="14" y="18" width="20" height="2" fill="#C6C9CD" />
        <rect x="14" y="24" width="20" height="2" fill="#C6C9CD" />
        <rect x="14" y="30" width="14" height="2" fill="#C6C9CD" />
      </svg>
    ),
    stores: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <path d="M6 12h36l-4 16H10L6 12z" stroke="#8159BB" strokeWidth="2" />
        <circle cx="16" cy="34" r="3" stroke="#8159BB" strokeWidth="2" />
        <circle cx="32" cy="34" r="3" stroke="#8159BB" strokeWidth="2" />
        <path d="M6 12l2-6h32l2 6" stroke="#8159BB" strokeWidth="2" />
      </svg>
    ),
    'link-in-bio': (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <rect x="12" y="4" width="24" height="40" rx="4" stroke="#8159BB" strokeWidth="2" />
        <rect x="18" y="12" width="12" height="3" fill="#8159BB" />
        <rect x="18" y="18" width="12" height="3" fill="#C6C9CD" />
        <rect x="18" y="24" width="12" height="3" fill="#C6C9CD" />
        <rect x="18" y="30" width="12" height="3" fill="#C6C9CD" />
        <circle cx="24" cy="38" r="2" fill="#8159BB" />
      </svg>
    ),
  }
  return thumbnails[category] || thumbnails.websites
}

// Hero illustration SVG
const HeroIllustration = () => (
  <svg width="400" height="320" viewBox="0 0 400 320" fill="none" aria-hidden="true" className="hero-illustration">
    <rect x="40" y="40" width="320" height="240" rx="8" stroke="#8159BB" strokeWidth="2" opacity="0.3" />
    <rect x="60" y="60" width="280" height="200" rx="4" stroke="#8159BB" strokeWidth="1.5" opacity="0.5" />
    <line x1="60" y1="90" x2="340" y2="90" stroke="#8159BB" strokeWidth="1" opacity="0.3" />
    <circle cx="80" cy="75" r="4" fill="#8159BB" opacity="0.4" />
    <circle cx="95" cy="75" r="4" fill="#8159BB" opacity="0.4" />
    <circle cx="110" cy="75" r="4" fill="#8159BB" opacity="0.4" />
    <rect x="80" y="110" width="120" height="8" rx="2" fill="#8159BB" opacity="0.3" />
    <rect x="80" y="130" width="200" height="4" rx="2" fill="#C6C9CD" opacity="0.5" />
    <rect x="80" y="142" width="180" height="4" rx="2" fill="#C6C9CD" opacity="0.5" />
    <rect x="80" y="154" width="160" height="4" rx="2" fill="#C6C9CD" opacity="0.5" />
    <rect x="80" y="180" width="80" height="24" rx="4" fill="#8159BB" opacity="0.2" />
    <rect x="220" y="110" width="100" height="80" rx="4" stroke="#8159BB" strokeWidth="1" opacity="0.3" />
    <rect x="230" y="120" width="80" height="4" rx="2" fill="#C6C9CD" opacity="0.4" />
    <rect x="230" y="132" width="60" height="4" rx="2" fill="#C6C9CD" opacity="0.4" />
    <rect x="230" y="144" width="70" height="4" rx="2" fill="#C6C9CD" opacity="0.4" />
    <rect x="230" y="160" width="40" height="16" rx="3" fill="#8159BB" opacity="0.2" />
  </svg>
)

function App() {
  const s = strings.en
  const [searchQuery, setSearchQuery] = useState('')
  const [expandedFaqs, setExpandedFaqs] = useState([0])
  const [expandedSections, setExpandedSections] = useState({})
  const [visibleCounts, setVisibleCounts] = useState({})
  const searchInputRef = useRef(null)

  // Initialize visible counts (show 6 by default, rest behind "Show all")
  useEffect(() => {
    const initial = {}
    Object.keys(allGeneratorsByCategory).forEach((key) => {
      initial[key] = 6
    })
    setVisibleCounts(initial)
  }, [])

  // Search filtering
  const filteredCategories = Object.entries(allGeneratorsByCategory).map(([key, category]) => {
    const query = searchQuery.toLowerCase().trim()
    if (!query) return { key, ...category, items: category.items, visibleCount: visibleCounts[key] || 6 }

    const filteredItems = category.items.filter((item) =>
      item.name.toLowerCase().includes(query) ||
      item.description.toLowerCase().includes(query) ||
      category.heading.toLowerCase().includes(query)
    )

    return { key, ...category, items: filteredItems, visibleCount: filteredItems.length }
  }).filter((cat) => cat.items.length > 0)

  const totalMatchCount = filteredCategories.reduce((sum, cat) => sum + cat.items.length, 0)

  const toggleFaq = (index) => {
    setExpandedFaqs((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    )
  }

  const toggleSection = (key) => {
    const totalItems = allGeneratorsByCategory[key].items.length
    setExpandedSections((prev) => ({
      ...prev,
      [key]: !prev[key],
    }))
    setVisibleCounts((prev) => ({
      ...prev,
      [key]: prev[key] === totalItems ? 6 : totalItems,
    }))
  }

  return (
    <div className="generators-page">
      {/* Section 0: Top bar */}
      <header className="top-bar">
        <div className="container">
          <a href="/" className="logo" aria-label="Strikingly Home">
            {s.topBar.logo}
          </a>
        </div>
      </header>

      {/* Section 1: Breadcrumb */}
      <nav className="breadcrumb-nav" aria-label="Breadcrumb">
        <div className="container">
          <ol className="breadcrumb-list">
            <li className="breadcrumb-item">
              <a href="/">{s.breadcrumb.home}</a>
            </li>
            <li className="breadcrumb-separator" aria-hidden="true">&gt;</li>
            <li className="breadcrumb-item breadcrumb-current" aria-current="page">
              {s.breadcrumb.current}
            </li>
          </ol>
        </div>
      </nav>

      <main>
        {/* Section 2: Hero */}
        <section className="hero-section">
          <div className="container hero-container">
            <div className="hero-content">
              <h1 className="hero-h1">
                <span className="hero-h1-line1">{s.hero.h1Line1}</span>
                <span className="hero-h1-line2 ai-gradient-text">{s.hero.h1Line2}</span>
              </h1>
              <p className="hero-subheadline">{s.hero.subheadline}</p>
              <div className="hero-ctas">
                <a href="/s/ai_site_builder" className="btn btn-primary btn-large">
                  {s.hero.primaryCta}
                </a>
                <a href="#all-generators" className="btn btn-ghost">
                  {s.hero.secondaryCta}
                </a>
              </div>
            </div>
            <div className="hero-illustration-wrapper">
              <HeroIllustration />
            </div>
          </div>
        </section>

        {/* Section 3: Featured Generators */}
        <section className="featured-section">
          <div className="container">
            <h2 className="section-heading">{s.featured.heading}</h2>
            <p className="section-subheading">{s.featured.subheading}</p>
            <div className="featured-grid">
              {featuredGenerators.map((gen) => (
                <a
                  key={gen.slug}
                  href={`/generators/${gen.slug}`}
                  className="featured-card card-hover"
                >
                  <h3 className="featured-card-name">{gen.name}</h3>
                  <p className="featured-card-desc">{gen.description}</p>
                  <span className="category-tag">{gen.category}</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Section 4: Browse by Category */}
        <section className="browse-section">
          <div className="container">
            <h2 className="section-heading">{s.browseByCategory.heading}</h2>
            <div className="category-grid">
              {categories.map((cat) => (
                <a
                  key={cat.slug}
                  href={`#all-generators`}
                  className="category-card card-hover"
                >
                  <div className="category-card-icon">
                    <IconComponent name={cat.icon} />
                  </div>
                  <h3 className="category-card-name">{cat.name}</h3>
                  <p className="category-card-desc">{cat.description}</p>
                  <div className="category-card-arrow">
                    <Icons.arrowRight />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Section 5: All Generators */}
        <section className="all-generators-section" id="all-generators">
          <div className="container">
            <h2 className="section-heading">{s.allGenerators.heading}</h2>
            <p className="section-subheading">{s.allGenerators.subheading}</p>

            {/* Search */}
            <div className="search-container">
              <div className="search-input-wrapper">
                <span className="search-icon" aria-hidden="true">
                  <Icons.search />
                </span>
                <input
                  ref={searchInputRef}
                  type="search"
                  className="search-input"
                  placeholder={s.allGenerators.searchPlaceholder}
                  aria-label={s.allGenerators.searchLabel}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              {searchQuery && (
                <p className="search-result-count">
                  {s.allGenerators.resultCount(totalMatchCount)}
                </p>
              )}
            </div>

            {/* No results */}
            {searchQuery && totalMatchCount === 0 && (
              <div className="search-empty-state">
                <p>{s.allGenerators.noResults}</p>
                <button
                  className="btn btn-ghost btn-small"
                  onClick={() => {
                    setSearchQuery('')
                    searchInputRef.current?.focus()
                  }}
                >
                  {s.allGenerators.clearSearch}
                </button>
                <p className="search-empty-cta">
                  {s.allGenerators.cantFind}{' '}
                  <a href="/s/ai_site_builder">Start with our AI builder</a>
                </p>
              </div>
            )}

            {/* Category subsections */}
            {filteredCategories.map((category) => {
              const isExpanded = expandedSections[category.key]
              const visibleCount = visibleCounts[category.key] || 6
              const totalItems = allGeneratorsByCategory[category.key].items.length
              const visibleItems = searchQuery
                ? category.items
                : category.items.slice(0, visibleCount)
              const hasMore = !searchQuery && visibleCount < totalItems

              return (
                <div key={category.key} id={category.slug} className="category-subsection">
                  <h3 className="category-subsection-heading">{category.heading}</h3>
                  <p className="category-subsection-desc">{category.description}</p>
                  <div className="generators-grid">
                    {visibleItems.map((item) => (
                      <a
                        key={item.slug}
                        href={`/generators/${item.slug}`}
                        className="generator-card card-hover"
                      >
                        <div className="generator-card-thumbnail">
                          <CategoryThumbnail category={category.key} />
                        </div>
                        <h4 className="generator-card-name">{item.name}</h4>
                        <p className="generator-card-desc">{item.description}</p>
                      </a>
                    ))}
                  </div>
                  {hasMore && (
                    <button
                      className="btn btn-ghost btn-show-all"
                      onClick={() => toggleSection(category.key)}
                      aria-expanded={isExpanded}
                      aria-controls={`${category.key}-grid`}
                    >
                      {isExpanded ? s.allGenerators.showLess : s.allGenerators.showAll(totalItems)}
                    </button>
                  )}
                </div>
              )
            })}
          </div>
        </section>

        {/* Section 6: How It Works */}
        <section className="how-it-works-section">
          <div className="container">
            <h2 className="section-heading">{s.howItWorks.heading}</h2>
            <div className="steps-grid">
              {s.howItWorks.steps.map((step, index) => (
                <div key={index} className="step-card">
                  <div className="step-number">{index + 1}</div>
                  <h3 className="step-title">{step.title}</h3>
                  <p className="step-desc">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 7: Why Strikingly */}
        <section className="why-section">
          <div className="container">
            <h2 className="section-heading">{s.whyStrikingly.heading}</h2>
            <div className="why-grid">
              {s.whyStrikingly.features.map((feature, index) => {
                const icons = ['zap', 'smartphone', 'dollarSign']
                return (
                  <div key={index} className="why-card">
                    <div className="why-card-icon">
                      <IconComponent name={icons[index]} />
                    </div>
                    <h3 className="why-card-title">{feature.title}</h3>
                    <p className="why-card-desc">{feature.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Section 8: FAQ */}
        <section className="faq-section">
          <div className="container">
            <h2 className="section-heading">{s.faq.heading}</h2>
            <div className="faq-list">
              {s.faq.questions.map((faq, index) => (
                <div key={index} className="faq-item">
                  <button
                    className="faq-question"
                    onClick={() => toggleFaq(index)}
                    aria-expanded={expandedFaqs.includes(index)}
                    aria-controls={`faq-answer-${index}`}
                  >
                    <span className="faq-question-text">{faq.question}</span>
                    <span className="faq-chevron" aria-hidden="true">
                      <Icons.chevronDown />
                    </span>
                  </button>
                  <div
                    id={`faq-answer-${index}`}
                    className={`faq-answer ${expandedFaqs.includes(index) ? 'expanded' : ''}`}
                    role="region"
                  >
                    {faq.answer.split('\n\n').map((paragraph, pIndex) => (
                      <p key={pIndex}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 9: Closing CTA */}
        <section className="closing-cta-section">
          <div className="container">
            <h2 className="closing-cta-heading">{s.closingCta.heading}</h2>
            <p className="closing-cta-sub">{s.closingCta.sub}</p>
            <a href="/s/ai_site_builder" className="btn btn-primary btn-large">
              {s.closingCta.cta}
            </a>
          </div>
        </section>
      </main>

      {/* Section 10: Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <a href="/" className="footer-logo">{s.topBar.logo}</a>
            </div>
            <div className="footer-links">
              <div className="footer-column">
                <h4>{s.footer.product}</h4>
                <ul>
                  {s.footer.links.product.map((link) => (
                    <li key={link}><a href={`/${link.toLowerCase().replace(/\s+/g, '-')}`}>{link}</a></li>
                  ))}
                </ul>
              </div>
              <div className="footer-column">
                <h4>{s.footer.company}</h4>
                <ul>
                  {s.footer.links.company.map((link) => (
                    <li key={link}><a href={`/${link.toLowerCase()}`}>{link}</a></li>
                  ))}
                </ul>
              </div>
              <div className="footer-column">
                <h4>{s.footer.resources}</h4>
                <ul>
                  {s.footer.links.resources.map((link) => (
                    <li key={link}><a href={`/${link.toLowerCase().replace(/\s+/g, '-')}`}>{link}</a></li>
                  ))}
                </ul>
              </div>
              <div className="footer-column">
                <h4>{s.footer.legal}</h4>
                <ul>
                  {s.footer.links.legal.map((link) => (
                    <li key={link}><a href={`/${link.toLowerCase()}`}>{link}</a></li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>{s.footer.copyright}</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
