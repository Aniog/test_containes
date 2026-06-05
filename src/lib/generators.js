import { slugify } from './utils'

// Featured generators (9 items, mixed categories)
export const featuredGenerators = [
  { name: 'AI Website Generator', description: 'Describe your business, get a full site', category: 'Website', categorySlug: 'websites' },
  { name: 'Free Portfolio Generator', description: 'For creatives, in minutes, no fee', category: 'Portfolio', categorySlug: 'portfolios' },
  { name: 'AI Landing Page Maker', description: 'One-page sites built to convert', category: 'Landing Page', categorySlug: 'landing-pages' },
  { name: 'Online Store Builder', description: 'Start selling without writing code', category: 'Store', categorySlug: 'stores' },
  { name: 'Link-in-Bio Generator', description: 'One link for all your channels', category: 'Link-in-Bio', categorySlug: 'link-in-bio' },
  { name: 'One-Page Website Builder', description: 'Simple sites, single scroll', category: 'Website', categorySlug: 'websites' },
  { name: 'Wedding Website Generator', description: 'Share your day with guests', category: 'Website', categorySlug: 'websites' },
  { name: 'Restaurant Website Builder', description: 'Menu, hours, reservations, done', category: 'Website', categorySlug: 'websites' },
  { name: 'Blog Generator for Beginners', description: 'Publish-ready in minutes', category: 'Blog', categorySlug: 'blogs' },
]

// All generators organized by category
export const allGenerators = {
  websites: [
    { name: 'AI Website Generator', description: 'Describe your business, get a full site' },
    { name: 'One-Page Website Builder', description: 'Simple sites, single scroll' },
    { name: 'Wedding Website Generator', description: 'Share your day with guests' },
    { name: 'Restaurant Website Builder', description: 'Menu, hours, reservations, done' },
    { name: 'Free Website Builder for Photographers', description: 'Stunning photo sites, zero cost' },
    { name: 'Small Business Website Generator', description: 'Professional sites for local businesses' },
    { name: 'Personal Website Builder', description: 'Your online presence, your way' },
    { name: 'Real Estate Website Generator', description: 'Listings, galleries, and contact forms' },
    { name: 'Nonprofit Website Builder', description: 'Mission-driven sites that inspire action' },
    { name: 'Fitness Website Generator', description: 'Class schedules, bookings, and trainer bios' },
    { name: 'Yoga Instructor Website Builder', description: 'Calm design for mindful businesses' },
  ],
  'landing-pages': [
    { name: 'AI Landing Page Maker', description: 'One-page sites built to convert' },
    { name: 'SaaS Landing Page Generator', description: 'Feature showcases and signup forms' },
    { name: 'Event Landing Page Builder', description: 'Countdowns, speakers, and registration' },
    { name: 'Product Launch Page Generator', description: 'Build buzz before you ship' },
    { name: 'Lead Capture Landing Page', description: 'Forms and CTAs optimized for signups' },
    { name: 'App Download Page Builder', description: 'Get installs with a focused download page' },
    { name: 'Webinar Registration Page', description: 'Dates, details, and one-click signup' },
    { name: 'Coming Soon Page Generator', description: 'Collect interest before you launch' },
    { name: 'Free Landing Page Builder', description: 'No-cost pages that still look premium' },
    { name: 'Click-Through Landing Page', description: 'One clear offer, one clear button' },
  ],
  portfolios: [
    { name: 'Free Portfolio Generator', description: 'For creatives, in minutes, no fee' },
    { name: 'Photography Portfolio Builder', description: 'Image-first layouts for photographers' },
    { name: 'Design Portfolio Generator', description: 'Showcase your best work elegantly' },
    { name: 'Artist Portfolio Website', description: 'Galleries and statements for artists' },
    { name: 'Writer Portfolio Builder', description: 'Clips, bios, and publication lists' },
    { name: 'Architecture Portfolio Generator', description: 'Project showcases with clean layouts' },
    { name: 'Student Portfolio Builder', description: 'Academic and project work, polished' },
    { name: 'Model Portfolio Website', description: 'High-impact visuals and comp cards' },
    { name: 'Freelancer Portfolio Generator', description: 'Services, testimonials, and case studies' },
  ],
  blogs: [
    { name: 'Blog Generator for Beginners', description: 'Publish-ready in minutes' },
    { name: 'Personal Blog Builder', description: 'Share your thoughts with the world' },
    { name: 'Travel Blog Generator', description: 'Stories, maps, and destination guides' },
    { name: 'Food Blog Website Builder', description: 'Recipes, reviews, and mouth-watering photos' },
    { name: 'Tech Blog Generator', description: 'Code snippets, tutorials, and reviews' },
    { name: 'Lifestyle Blog Builder', description: 'Topics you love, beautifully presented' },
    { name: 'News Blog Generator', description: 'Timely posts with clean readability' },
    { name: 'Free Blog Builder', description: 'Start writing without spending a cent' },
    { name: 'Niche Blog Generator', description: 'Focused content for focused audiences' },
  ],
  stores: [
    { name: 'Online Store Builder', description: 'Start selling without writing code' },
    { name: 'E-commerce Website Generator', description: 'Full shops with cart and checkout' },
    { name: 'Clothing Store Builder', description: 'Fashion-forward shops with size guides' },
    { name: 'Handmade Shop Generator', description: 'Artisan goods, beautifully presented' },
    { name: 'Digital Product Store', description: 'Sell downloads, courses, and memberships' },
    { name: 'Subscription Box Website', description: 'Recurring revenue with style' },
    { name: 'Food and Beverage Store', description: 'Menus, ordering, and delivery info' },
    { name: 'Print-on-Demand Store Builder', description: 'Custom designs, no inventory needed' },
    { name: 'Free Online Store Generator', description: 'Open a shop at no cost' },
    { name: 'Dropshipping Website Builder', description: 'Sell without stocking, ship without touching' },
  ],
  'link-in-bio': [
    { name: 'Link-in-Bio Generator', description: 'One link for all your channels' },
    { name: 'Instagram Bio Link Builder', description: 'Multiple links from one Instagram URL' },
    { name: 'TikTok Link Page Generator', description: 'All your TikTok links in one place' },
    { name: 'Creator Link-in-Bio', description: 'Monetize and organize your links' },
    { name: 'Musician Link Page Builder', description: 'Streaming links, tour dates, and merch' },
    { name: 'Podcast Link-in-Bio', description: 'Episodes, platforms, and subscribe CTAs' },
    { name: 'Influencer Bio Link Generator', description: 'Sponsorships, content, and contact' },
    { name: 'Free Link-in-Bio Builder', description: 'No cost, no code, just links' },
  ],
}

// Helper to get slug from generator name
export function generatorSlug(name) {
  return slugify(name)
}

// Helper to get generator URL
export function generatorUrl(name) {
  return `/generators/${generatorSlug(name)}`
}

// Total count
export function totalGeneratorCount() {
  return Object.values(allGenerators).reduce((sum, list) => sum + list.length, 0)
}
