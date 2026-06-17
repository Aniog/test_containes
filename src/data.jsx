import React from 'react'

// Category icons as inline SVGs
const iconWebsite = (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
    <rect x="4" y="6" width="24" height="20" rx="2" stroke="#8159BB" strokeWidth="2" />
    <line x1="4" y1="12" x2="28" y2="12" stroke="#8159BB" strokeWidth="2" />
    <circle cx="8" cy="9" r="1" fill="#8159BB" />
    <circle cx="12" cy="9" r="1" fill="#8159BB" />
    <circle cx="16" cy="9" r="1" fill="#8159BB" />
  </svg>
)

const iconLanding = (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
    <rect x="4" y="4" width="24" height="24" rx="2" stroke="#8159BB" strokeWidth="2" />
    <rect x="8" y="8" width="16" height="6" rx="1" fill="#8159BB" opacity="0.3" />
    <rect x="8" y="18" width="10" height="2" rx="1" fill="#8159BB" opacity="0.2" />
    <rect x="8" y="22" width="16" height="2" rx="1" fill="#8159BB" opacity="0.2" />
  </svg>
)

const iconPortfolio = (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
    <rect x="4" y="4" width="10" height="10" rx="1" stroke="#8159BB" strokeWidth="2" />
    <rect x="18" y="4" width="10" height="10" rx="1" stroke="#8159BB" strokeWidth="2" />
    <rect x="4" y="18" width="10" height="10" rx="1" stroke="#8159BB" strokeWidth="2" />
    <rect x="18" y="18" width="10" height="10" rx="1" stroke="#8159BB" strokeWidth="2" />
  </svg>
)

const iconBlog = (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
    <rect x="6" y="4" width="20" height="24" rx="2" stroke="#8159BB" strokeWidth="2" />
    <line x1="10" y1="10" x2="22" y2="10" stroke="#8159BB" strokeWidth="2" />
    <line x1="10" y1="14" x2="22" y2="14" stroke="#8159BB" strokeWidth="2" />
    <line x1="10" y1="18" x2="18" y2="18" stroke="#8159BB" strokeWidth="2" />
  </svg>
)

const iconStore = (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
    <path d="M6 10L8 26H24L26 10H6Z" stroke="#8159BB" strokeWidth="2" strokeLinejoin="round" />
    <path d="M4 6H28L26 10H6L4 6Z" stroke="#8159BB" strokeWidth="2" strokeLinejoin="round" />
    <circle cx="12" cy="20" r="2" stroke="#8159BB" strokeWidth="2" />
    <circle cx="20" cy="20" r="2" stroke="#8159BB" strokeWidth="2" />
  </svg>
)

const iconLinkBio = (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
    <rect x="10" y="2" width="12" height="28" rx="3" stroke="#8159BB" strokeWidth="2" />
    <line x1="14" y1="10" x2="18" y2="10" stroke="#8159BB" strokeWidth="2" strokeLinecap="round" />
    <rect x="13" y="14" width="6" height="2" rx="1" fill="#8159BB" opacity="0.3" />
    <rect x="13" y="18" width="6" height="2" rx="1" fill="#8159BB" opacity="0.3" />
    <rect x="13" y="22" width="6" height="2" rx="1" fill="#8159BB" opacity="0.3" />
  </svg>
)

export const categories = [
  {
    slug: 'websites',
    name: 'WEBSITES',
    description: 'AI-built business and personal sites for any goal.',
    icon: iconWebsite,
  },
  {
    slug: 'landing-pages',
    name: 'LANDING PAGES',
    description: 'Single-page sites built to convert visitors fast.',
    icon: iconLanding,
  },
  {
    slug: 'portfolios',
    name: 'PORTFOLIOS',
    description: 'Showcase your work with a clean, focused site.',
    icon: iconPortfolio,
  },
  {
    slug: 'blogs',
    name: 'BLOGS',
    description: 'Publish-ready blogs with built-in SEO basics.',
    icon: iconBlog,
  },
  {
    slug: 'stores',
    name: 'ONLINE STORES',
    description: 'Sell products online with payments built in.',
    icon: iconStore,
  },
  {
    slug: 'link-in-bio',
    name: 'LINK-IN-BIO',
    description: 'One link, all your places. Made for creators.',
    icon: iconLinkBio,
  },
]

export const featuredGenerators = [
  { name: 'AI Website Generator', slug: 'ai-website-generator', description: 'Describe your business, get a full site', category: 'Website' },
  { name: 'Free Portfolio Generator', slug: 'free-portfolio-generator', description: 'For creatives, in minutes, no fee', category: 'Portfolio' },
  { name: 'AI Landing Page Maker', slug: 'ai-landing-page-maker', description: 'One-page sites built to convert', category: 'Landing Page' },
  { name: 'Online Store Builder', slug: 'online-store-builder', description: 'Start selling without writing code', category: 'Store' },
  { name: 'Link-in-Bio Generator', slug: 'link-in-bio-generator', description: 'One link for all your channels', category: 'Link-in-Bio' },
  { name: 'One-Page Website Builder', slug: 'one-page-website-builder', description: 'Simple sites, single scroll', category: 'Website' },
  { name: 'Wedding Website Generator', slug: 'wedding-website-generator', description: 'Share your day with guests', category: 'Website' },
  { name: 'Restaurant Website Builder', slug: 'restaurant-website-builder', description: 'Menu, hours, reservations, done', category: 'Website' },
  { name: 'Blog Generator for Beginners', slug: 'blog-generator-beginners', description: 'Publish-ready in minutes', category: 'Blog' },
]

function makeSlug(name) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
}

const websites = [
  'AI Website Generator',
  'Free Website Builder for Photographers',
  'One-Page Wedding Website Builder',
  'Restaurant Website Builder',
  'Small Business Website Generator',
  'AI Website Builder for Consultants',
  'Free Website Maker for Nonprofits',
  'No-Code Website Builder for Coaches',
  'Beautiful Website Generator for Artists',
  'AI-Powered Website Builder for Startups',
  'Free Website Creator for Musicians',
  'Professional Website Generator for Lawyers',
]

const landingPages = [
  'AI Landing Page Maker',
  'Free Landing Page Builder for SaaS',
  'One-Page Landing Generator for Apps',
  'High-Converting Landing Page Builder',
  'AI Landing Page Creator for Ebooks',
  'Free Landing Page Maker for Webinars',
  'No-Code Landing Page Builder for Courses',
  'Beautiful Landing Page Generator for Events',
  'AI Landing Page Builder for Real Estate',
  'Free Landing Page Creator for Fitness',
  'Quick Landing Page Generator for Product Launches',
  'AI-Powered Landing Page Builder for Agencies',
]

const portfolios = [
  'Free Portfolio Generator',
  'Portfolio Generator for Designers',
  'AI Portfolio Builder for Photographers',
  'Minimal Portfolio Generator for Architects',
  'Free Portfolio Maker for Writers',
  'Creative Portfolio Builder for Illustrators',
  'AI Portfolio Generator for Developers',
  'No-Code Portfolio Builder for Videographers',
  'Beautiful Portfolio Generator for Models',
  'Free Portfolio Creator for Musicians',
  'Professional Portfolio Builder for Consultants',
  'AI-Powered Portfolio Generator for Artists',
]

const blogs = [
  'Blog Generator for Beginners',
  'AI Blog Builder for Travel Writers',
  'Free Blog Creator for Food Bloggers',
  'SEO-Optimized Blog Generator',
  'AI Blog Builder for Tech Reviewers',
  'Free Blog Maker for Lifestyle Writers',
  'No-Code Blog Builder for Journalists',
  'Beautiful Blog Generator for Fashion',
  'AI Blog Creator for Personal Brands',
  'Free Blog Builder for Hobbyists',
  'Quick Blog Generator for News Sites',
  'AI-Powered Blog Builder for Educators',
]

const stores = [
  'Online Store Builder',
  'Online Store Builder for Restaurants',
  'AI E-commerce Generator for Fashion',
  'Free Online Store Creator for Crafts',
  'No-Code Store Builder for Digital Products',
  'AI Store Generator for Handmade Goods',
  'Free E-commerce Builder for Artists',
  'Beautiful Store Generator for Jewelry',
  'AI-Powered Store Builder for Dropshipping',
  'Quick Online Store Creator for Books',
  'Professional Store Generator for Electronics',
  'Free Store Builder for Subscription Boxes',
]

const linkInBio = [
  'Link-in-Bio Generator',
  'Free Link-in-Bio Builder for Instagram',
  'AI Link-in-Bio Creator for TikTok',
  'No-Code Link-in-Bio for YouTubers',
  'Beautiful Link-in-Bio Generator for Podcasters',
  'Free Link-in-Bio Maker for Twitch Streamers',
  'AI Link-in-Bio Builder for Influencers',
  'Quick Link-in-Bio Creator for Musicians',
  'Professional Link-in-Bio Generator for Coaches',
  'Free Link-in-Bio Builder for Photographers',
  'AI-Powered Link-in-Bio for Content Creators',
  'Minimal Link-in-Bio Generator for Writers',
]

export const generatorsData = {
  websites: websites.map((name) => ({ name, slug: makeSlug(name), description: 'AI-built business and personal sites for any goal.', category: 'Website' })),
  'landing-pages': landingPages.map((name) => ({ name, slug: makeSlug(name), description: 'Single-page sites built to convert visitors fast.', category: 'Landing Page' })),
  portfolios: portfolios.map((name) => ({ name, slug: makeSlug(name), description: 'Showcase your work with a clean, focused site.', category: 'Portfolio' })),
  blogs: blogs.map((name) => ({ name, slug: makeSlug(name), description: 'Publish-ready blogs with built-in SEO basics.', category: 'Blog' })),
  stores: stores.map((name) => ({ name, slug: makeSlug(name), description: 'Sell products online with payments built in.', category: 'Store' })),
  'link-in-bio': linkInBio.map((name) => ({ name, slug: makeSlug(name), description: 'One link, all your places. Made for creators.', category: 'Link-in-Bio' })),
}
