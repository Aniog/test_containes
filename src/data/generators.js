export const featuredGenerators = [
  { name: 'AI Website Generator', slug: 'ai-website-generator', description: 'Describe your business, get a full site', category: 'Website' },
  { name: 'Free Portfolio Generator', slug: 'free-portfolio-generator', description: 'For creatives, in minutes, no fee', category: 'Portfolio' },
  { name: 'AI Landing Page Maker', slug: 'ai-landing-page-maker', description: 'One-page sites built to convert', category: 'Landing Page' },
  { name: 'Online Store Builder', slug: 'online-store-builder', description: 'Start selling without writing code', category: 'Store' },
  { name: 'Link-in-Bio Generator', slug: 'link-in-bio-generator', description: 'One link for all your channels', category: 'Link-in-Bio' },
  { name: 'One-Page Website Builder', slug: 'one-page-website-builder', description: 'Simple sites, single scroll', category: 'Website' },
  { name: 'Wedding Website Generator', slug: 'wedding-website-generator', description: 'Share your day with guests', category: 'Website' },
  { name: 'Restaurant Website Builder', slug: 'restaurant-website-builder', description: 'Menu, hours, reservations, done', category: 'Website' },
  { name: 'Blog Generator for Beginners', slug: 'blog-generator-for-beginners', description: 'Publish-ready in minutes', category: 'Blog' },
];

export const categories = [
  { id: 'websites', name: 'Websites', slug: 'websites', description: 'AI-built business and personal sites for any goal.', icon: 'website' },
  { id: 'landing-pages', name: 'Landing Pages', slug: 'landing-pages', description: 'Single-page sites built to convert visitors fast.', icon: 'landing' },
  { id: 'portfolios', name: 'Portfolios', slug: 'portfolios', description: 'Showcase your work with a clean, focused site.', icon: 'portfolio' },
  { id: 'blogs', name: 'Blogs', slug: 'blogs', description: 'Publish-ready blogs with built-in SEO basics.', icon: 'blog' },
  { id: 'stores', name: 'Online Stores', slug: 'stores', description: 'Sell products online with payments built in.', icon: 'store' },
  { id: 'link-in-bio', name: 'Link-in-Bio', slug: 'link-in-bio', description: 'One link, all your places. Made for creators.', icon: 'link' },
];

export const allGenerators = {
  websites: {
    id: 'websites',
    name: 'Websites',
    description: 'Full multi-page sites for any purpose.',
    generators: [
      { name: 'AI Website Generator', slug: 'ai-website-generator', description: 'Describe your business, get a full site' },
      { name: 'Free Website Builder', slug: 'free-website-builder', description: 'No credit card needed to start building' },
      { name: 'One-Page Website Builder', slug: 'one-page-website-builder', description: 'Simple sites, single scroll' },
      { name: 'Wedding Website Generator', slug: 'wedding-website-generator', description: 'Share your day with guests' },
      { name: 'Restaurant Website Builder', slug: 'restaurant-website-builder', description: 'Menu, hours, reservations, done' },
      { name: 'Small Business Website Maker', slug: 'small-business-website-maker', description: 'Local shops, professional online presence' },
      { name: 'Coaching Website Generator', slug: 'coaching-website-generator', description: 'Attract clients, book sessions' },
      { name: 'Real Estate Website Builder', slug: 'real-estate-website-builder', description: 'Listings, contact forms, maps built in' },
      { name: 'Nonprofit Website Generator', slug: 'nonprofit-website-generator', description: 'Donations, events, volunteer signups' },
      { name: 'Fitness Website Builder', slug: 'fitness-website-builder', description: 'Classes, schedules, membership pages' },
    ],
  },
  'landing-pages': {
    id: 'landing-pages',
    name: 'Landing Pages',
    description: 'Single-page sites built to convert visitors fast.',
    generators: [
      { name: 'AI Landing Page Maker', slug: 'ai-landing-page-maker', description: 'One-page sites built to convert' },
      { name: 'Free Landing Page Builder', slug: 'free-landing-page-builder', description: 'No-code, no cost lead capture pages' },
      { name: 'Product Launch Landing Page', slug: 'product-launch-landing-page', description: 'Announce new products with impact' },
      { name: 'Event Landing Page Generator', slug: 'event-landing-page-generator', description: 'RSVP, schedule, location in one page' },
      { name: 'SaaS Landing Page Builder', slug: 'saas-landing-page-builder', description: 'Features, pricing, signup CTA' },
      { name: 'App Download Landing Page', slug: 'app-download-landing-page', description: 'Drive installs with screenshots and reviews' },
      { name: 'Webinar Landing Page Maker', slug: 'webinar-landing-page-maker', description: 'Registration, countdown, replay' },
      { name: 'Consulting Landing Page', slug: 'consulting-landing-page', description: 'Credentials, case studies, book a call' },
    ],
  },
  portfolios: {
    id: 'portfolios',
    name: 'Portfolios',
    description: 'Showcase your work with a clean, focused site.',
    generators: [
      { name: 'Free Portfolio Generator', slug: 'free-portfolio-generator', description: 'For creatives, in minutes, no fee' },
      { name: 'Photography Portfolio Builder', slug: 'photography-portfolio-builder', description: 'Galleries, client proofing, contact' },
      { name: 'Design Portfolio Generator', slug: 'design-portfolio-generator', description: 'Projects, case studies, about page' },
      { name: 'Writer Portfolio Builder', slug: 'writer-portfolio-builder', description: 'Clips, bylines, bio in one place' },
      { name: 'Artist Portfolio Generator', slug: 'artist-portfolio-generator', description: 'Showcase collections with clean grids' },
      { name: 'Architect Portfolio Builder', slug: 'architect-portfolio-builder', description: 'Projects, drawings, firm details' },
      { name: 'Musician Portfolio Generator', slug: 'musician-portfolio-generator', description: 'Tracks, videos, tour dates, press kit' },
      { name: 'Developer Portfolio Builder', slug: 'developer-portfolio-builder', description: 'Projects, skills, GitHub links, resume' },
      { name: 'Yoga Instructor Portfolio', slug: 'yoga-instructor-portfolio', description: 'Classes, philosophy, booking' },
      { name: 'Makeup Artist Portfolio', slug: 'makeup-artist-portfolio', description: 'Before-and-after galleries, rates' },
    ],
  },
  blogs: {
    id: 'blogs',
    name: 'Blogs',
    description: 'Publish-ready blogs with built-in SEO basics.',
    generators: [
      { name: 'Blog Generator for Beginners', slug: 'blog-generator-for-beginners', description: 'Publish-ready in minutes' },
      { name: 'Food Blog Builder', slug: 'food-blog-builder', description: 'Recipes, photos, categories, comments' },
      { name: 'Travel Blog Generator', slug: 'travel-blog-generator', description: 'Itineraries, maps, photo stories' },
      { name: 'Tech Blog Builder', slug: 'tech-blog-builder', description: 'Tutorials, code blocks, newsletter signup' },
      { name: 'Fashion Blog Generator', slug: 'fashion-blog-generator', description: 'Outfit posts, lookbooks, affiliate links' },
      { name: 'Parenting Blog Builder', slug: 'parenting-blog-builder', description: 'Stories, tips, community' },
      { name: 'Fitness Blog Generator', slug: 'fitness-blog-generator', description: 'Workouts, meal plans, progress logs' },
      { name: 'Finance Blog Builder', slug: 'finance-blog-builder', description: 'Articles, calculators, resources' },
    ],
  },
  stores: {
    id: 'stores',
    name: 'Online Stores',
    description: 'Sell products online with payments built in.',
    generators: [
      { name: 'Online Store Builder', slug: 'online-store-builder', description: 'Start selling without writing code' },
      { name: 'Handmade Shop Generator', slug: 'handmade-shop-generator', description: 'Etsy-style storefront for crafters' },
      { name: 'Restaurant Online Store', slug: 'restaurant-online-store', description: 'Menu items, delivery, pickup orders' },
      { name: 'Clothing Store Builder', slug: 'clothing-store-builder', description: 'Sizes, colors, lookbook, checkout' },
      { name: 'Digital Product Store', slug: 'digital-product-store', description: 'PDFs, courses, downloads with instant delivery' },
      { name: 'Jewelry Store Generator', slug: 'jewelry-store-generator', description: 'Collections, materials, gift wrapping' },
      { name: 'Plant Shop Builder', slug: 'plant-shop-builder', description: 'Care guides, shipping, subscription boxes' },
      { name: 'Subscription Box Store', slug: 'subscription-box-store', description: 'Recurring orders, preview boxes, FAQ' },
      { name: 'Furniture Store Generator', slug: 'furniture-store-generator', description: 'Dimensions, colors, delivery options' },
      { name: 'Beauty Store Builder', slug: 'beauty-store-builder', description: 'Ingredients, reviews, skincare routines' },
      { name: 'Pet Store Generator', slug: 'pet-store-generator', description: 'Pet profiles, supplies, appointment booking' },
      { name: 'Art Print Store Builder', slug: 'art-print-store-builder', description: 'Limited editions, framing, shipping' },
    ],
  },
  'link-in-bio': {
    id: 'link-in-bio',
    name: 'Link-in-Bio',
    description: 'One link, all your places. Made for creators.',
    generators: [
      { name: 'Link-in-Bio Generator', slug: 'link-in-bio-generator', description: 'One link for all your channels' },
      { name: 'Creator Link Page Builder', slug: 'creator-link-page-builder', description: 'TikTok, Instagram, YouTube in one link' },
      { name: 'Influencer Link Generator', slug: 'influencer-link-generator', description: 'Sponsored content, affiliate links, media kit' },
      { name: 'Musician Link Page', slug: 'musician-link-page', description: 'Streaming, merch, tickets, mailing list' },
      { name: 'Podcaster Link Builder', slug: 'podcaster-link-builder', description: 'Episodes, sponsors, subscribe links' },
      { name: 'Coach Link Page Generator', slug: 'coach-link-page-generator', description: 'Booking, testimonials, free resources' },
      { name: 'Photographer Link Page', slug: 'photographer-link-page', description: 'Portfolio, booking, pricing, social' },
      { name: 'Brand Link Hub Builder', slug: 'brand-link-hub-builder', description: 'Products, press, careers, contact' },
    ],
  },
};

export const howItWorksSteps = [
  { number: '1', title: 'Pick a Generator', description: 'Browse by category or search to find one that fits your goal.' },
  { number: '2', title: 'Describe Your Site', description: 'Tell our AI builder about your business in a sentence or two.' },
  { number: '3', title: 'Generate and Publish', description: 'Get a fully built site in seconds. Customize anything, then go live.' },
];

export const whyStrikinglyFeatures = [
  { title: 'Live in Seconds', description: 'Describe your site, we build it. No setup, no learning curve.', icon: 'zap' },
  { title: 'Mobile by Default', description: 'Every generator produces responsive sites that work on any device.', icon: 'smartphone' },
  { title: 'Free to Start', description: 'Generate, customize, and publish without a credit card.', icon: 'check-circle' },
];

export const faqItems = [
  {
    question: 'What is an AI site generator?',
    answer: 'An AI site generator is a tool that uses artificial intelligence to build a complete website for you from a brief description of your business or goal. Instead of starting from a blank page or picking a template, you describe what you need and the AI creates a tailored, ready-to-publish site in seconds.',
  },
  {
    question: 'How is a generator different from a template?',
    answer: 'A template is a pre-designed layout that you fill in manually. A generator goes further: it asks what you are building, then uses AI to create unique copy, images, and a layout matched to your specific goal. The result is personalized, not one-size-fits-all.',
  },
  {
    question: 'Are these generators free to use?',
    answer: 'Yes. You can generate, customize, and publish a site at no cost. Strikingly offers paid plans for custom domains, advanced features, and higher traffic, but the core AI generator is free to start.',
  },
  {
    question: 'What kinds of sites can I build?',
    answer: 'You can build websites, landing pages, portfolios, blogs, online stores, and link-in-bio pages. Each generator is tuned for a specific type of site, so the layout, copy, and features match what you are trying to achieve.',
  },
  {
    question: 'Can I customize what the generator produces?',
    answer: 'Absolutely. The generator gives you a fully built starting point. After that, you can edit every word, swap images, change colors, add new sections, and adjust the layout using Strikingly\'s visual editor.',
  },
  {
    question: 'Do generated sites work on mobile?',
    answer: 'Yes. Every site produced by our generators is responsive by default. It will look great and function perfectly on phones, tablets, and desktops without any extra effort on your part.',
  },
];
