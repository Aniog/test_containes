// All user-visible strings — add strings.es, strings.ja for i18n
export const strings = {
  en: {
    siteTitle: 'AI Website Generators - Build Any Site in Seconds | Strikingly',
    topBar: { logo: 'strikingly AI' },
    breadcrumb: { home: 'Strikingly', current: 'AI Generators' },
    hero: {
      h1Line1: 'BUILD ANY KIND OF SITE',
      h1Line2: 'WITH AI, IN AN INSTANT',
      subheadline: "Browse the right generator for what you're building, or jump straight into our AI site builder.",
      ctaPrimary: "START BUILDING — IT'S FREE",
      ctaSecondary: 'BROWSE GENERATORS',
    },
    featured: {
      heading: 'FEATURED GENERATORS',
      subheading: 'A few common starting points.',
    },
    browseByCategory: {
      heading: 'BROWSE BY CATEGORY',
    },
    allGenerators: {
      heading: 'ALL GENERATORS',
      subheading: "Sixty-plus generators, organized by what you're building.",
      searchPlaceholder: 'Search generators...',
      searchLabel: 'Search generators',
      resultCount: (n) => `${n} generator${n !== 1 ? 's' : ''} match`,
      noResults: 'No generators match your search.',
      noResultsClear: 'Clear search',
      noResultsCta: "Can't find it? Start with our AI builder.",
      showAll: (n) => `Show all ${n} generators`,
      showLess: 'Show less',
    },
    howItWorks: {
      heading: 'HOW IT WORKS',
      steps: [
        { number: '1', title: 'PICK A GENERATOR', body: 'Browse by category or search to find one that fits your goal.' },
        { number: '2', title: 'DESCRIBE YOUR SITE', body: 'Tell our AI builder about your business in a sentence or two.' },
        { number: '3', title: 'GENERATE AND PUBLISH', body: 'Get a fully built site in seconds. Customize anything, then go live.' },
      ],
    },
    whyStrikingly: {
      heading: 'WHY STRIKINGLY',
      items: [
        { title: 'LIVE IN SECONDS', body: 'Describe your site, we build it. No setup, no learning curve.' },
        { title: 'MOBILE BY DEFAULT', body: 'Every generator produces responsive sites that work on any device.' },
        { title: 'FREE TO START', body: 'Generate, customize, and publish without a credit card.' },
      ],
    },
    faq: {
      heading: 'FREQUENTLY ASKED QUESTIONS',
      items: [
        {
          q: 'What is an AI site generator?',
          a: "An AI site generator is a tool that builds a complete website for you based on a short description of your business or goal. Instead of dragging and dropping elements manually, you describe what you need and the AI assembles the layout, copy, and design in seconds.\n\nStrikingly's generators are tuned for specific use cases — portfolios, stores, landing pages, and more — so the output is already shaped for your purpose before you even start customizing.",
        },
        {
          q: 'How is a generator different from a template?',
          a: "A template is a blank starting point you fill in yourself. A generator takes your input — your business name, industry, or a short description — and produces a site with real content already in place.\n\nThe result still looks like a professionally designed template, but the copy, section order, and imagery are chosen to match what you told the AI, so you spend far less time editing from scratch.",
        },
        {
          q: 'Are these generators free to use?',
          a: 'Yes. You can generate, preview, and customize any site without a credit card. Publishing to a Strikingly subdomain is also free. Paid plans unlock a custom domain, additional storage, and advanced features like e-commerce and analytics.',
        },
        {
          q: 'What kinds of sites can I build?',
          a: "The generators on this page cover the most common site types: business websites, personal portfolios, landing pages, online stores, blogs, and link-in-bio pages. Within each category there are generators tuned for specific industries and audiences — photographers, restaurants, wedding couples, yoga instructors, and many more.\n\nIf you don't see a generator that matches your exact need, the AI Site Builder at the top of this page can handle any brief you give it.",
        },
        {
          q: 'Can I customize what the generator produces?',
          a: "Absolutely. Every generated site opens in Strikingly's visual editor, where you can change text, swap images, reorder sections, adjust colors, and add or remove any element. The generator gives you a strong starting point; the editor lets you make it yours.",
        },
        {
          q: 'Do generated sites work on mobile?',
          a: "Yes. Every site Strikingly generates is fully responsive by default. The layout, typography, and images adapt automatically to phones and tablets, so you don't need to build a separate mobile version.",
        },
      ],
    },
    closingCta: {
      heading: 'READY TO BUILD?',
      sub: 'Pick a generator above, or jump straight into our AI builder.',
      cta: 'START WITH AI BUILDER',
    },
    footer: {
      copyright: `© ${new Date().getFullYear()} Strikingly. All rights reserved.`,
      columns: [
        {
          heading: 'Product',
          links: [
            { label: 'Templates', href: '/templates' },
            { label: 'Pricing', href: '/pricing' },
            { label: 'AI Site Builder', href: '/s/ai_site_builder' },
          ],
        },
        {
          heading: 'Resources',
          links: [
            { label: 'Blog', href: '/blog' },
            { label: 'Support', href: '/support' },
          ],
        },
        {
          heading: 'Company',
          links: [
            { label: 'About', href: '/about' },
          ],
        },
        {
          heading: 'Legal',
          links: [
            { label: 'Terms of Service', href: '/terms' },
            { label: 'Privacy Policy', href: '/privacy' },
          ],
        },
      ],
    },
  },
};

// Slug helper
export function toSlug(name) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

// Category definitions
export const categories = [
  {
    id: 'websites',
    slug: 'websites',
    name: 'WEBSITES',
    description: 'AI-built business and personal sites for any goal.',
  },
  {
    id: 'landing-pages',
    slug: 'landing-pages',
    name: 'LANDING PAGES',
    description: 'Single-page sites built to convert visitors fast.',
  },
  {
    id: 'portfolios',
    slug: 'portfolios',
    name: 'PORTFOLIOS',
    description: 'Showcase your work with a clean, focused site.',
  },
  {
    id: 'blogs',
    slug: 'blogs',
    name: 'BLOGS',
    description: 'Publish-ready blogs with built-in SEO basics.',
  },
  {
    id: 'stores',
    slug: 'stores',
    name: 'ONLINE STORES',
    description: 'Sell products online with payments built in.',
  },
  {
    id: 'link-in-bio',
    slug: 'link-in-bio',
    name: 'LINK-IN-BIO',
    description: 'One link, all your places. Made for creators.',
  },
];

// Featured generators (9 tiles, mixed categories — category tag shown here)
export const featuredGenerators = [
  { name: 'AI Website Generator', description: 'Describe your business, get a full site.', category: 'Website' },
  { name: 'Free Portfolio Generator', description: 'For creatives, in minutes, no fee.', category: 'Portfolio' },
  { name: 'AI Landing Page Maker', description: 'One-page sites built to convert.', category: 'Landing Page' },
  { name: 'Online Store Builder', description: 'Start selling without writing code.', category: 'Store' },
  { name: 'Link-in-Bio Generator', description: 'One link for all your channels.', category: 'Link-in-Bio' },
  { name: 'One-Page Website Builder', description: 'Simple sites, single scroll.', category: 'Website' },
  { name: 'Wedding Website Generator', description: 'Share your day with guests.', category: 'Website' },
  { name: 'Restaurant Website Builder', description: 'Menu, hours, reservations, done.', category: 'Website' },
  { name: 'Blog Generator for Beginners', description: 'Publish-ready in minutes.', category: 'Blog' },
];

// All generators by category (8–12 per subsection)
export const allGenerators = {
  websites: [
    { name: 'AI Website Generator', description: 'Describe your business and get a complete site in seconds.' },
    { name: 'Free Website Builder for Photographers', description: 'Showcase your portfolio with a clean, image-first layout.' },
    { name: 'One-Page Wedding Website Builder', description: 'Everything guests need on a single, beautiful page.' },
    { name: 'Restaurant Website Builder', description: 'Menu, hours, location, and reservations — all in one place.' },
    { name: 'Small Business Website Generator', description: 'Professional sites for local and independent businesses.' },
    { name: 'Yoga Instructor Website Builder', description: 'Class schedules, booking, and your teaching philosophy.' },
    { name: 'No-Code Website Builder for Coaches', description: 'Build your coaching practice online without any code.' },
    { name: 'AI Business Website Maker', description: 'Tell the AI your niche and get a site ready to launch.' },
    { name: 'Beautiful Website Generator', description: 'Polished, design-forward sites for any purpose.' },
    { name: 'Nonprofit Website Builder', description: 'Mission-driven sites with donation and volunteer sections.' },
    { name: 'Event Website Generator', description: 'Promote your event with a countdown, agenda, and RSVP.' },
    { name: 'Personal Website Builder', description: 'Your name, your story, your links — all in one place.' },
  ],
  'landing-pages': [
    { name: 'AI Landing Page Maker', description: 'One-page sites built to convert visitors fast.' },
    { name: 'Product Launch Landing Page Generator', description: 'Build hype and capture emails before you ship.' },
    { name: 'Free Landing Page Builder for Startups', description: 'Validate your idea with a polished page, no budget needed.' },
    { name: 'Webinar Registration Page Builder', description: 'Drive sign-ups with a focused, distraction-free page.' },
    { name: 'Lead Generation Landing Page Maker', description: 'Capture leads with a clear offer and a single CTA.' },
    { name: 'App Download Landing Page Generator', description: 'Drive installs with screenshots, features, and store links.' },
    { name: 'Coming Soon Page Builder', description: 'Hold your spot online while you finish building.' },
    { name: 'Sales Page Generator', description: 'Long-form persuasive pages for courses, services, and offers.' },
    { name: 'No-Code Landing Page Builder', description: 'Publish a high-converting page without touching code.' },
    { name: 'AI-Powered Squeeze Page Maker', description: 'Minimal pages focused entirely on one conversion goal.' },
  ],
  portfolios: [
    { name: 'Free Portfolio Generator', description: 'For creatives, in minutes, no fee.' },
    { name: 'Portfolio Generator for Designers', description: 'Grid-first layouts that let your work speak for itself.' },
    { name: 'Photography Portfolio Builder', description: 'Full-bleed galleries and clean typography for photographers.' },
    { name: 'Illustrator Portfolio Website Maker', description: 'Showcase illustrations with a colorful, expressive layout.' },
    { name: 'UX Designer Portfolio Generator', description: 'Case-study-ready pages with project breakdowns.' },
    { name: 'Freelancer Portfolio Builder', description: 'Services, rates, and past work in one professional site.' },
    { name: 'Artist Portfolio Website Generator', description: 'Gallery-style pages for painters, sculptors, and mixed media.' },
    { name: 'Video Producer Portfolio Builder', description: 'Embed reels and project highlights with a cinematic feel.' },
    { name: 'Model Portfolio Website Maker', description: 'Clean, editorial layouts for modeling and acting portfolios.' },
    { name: 'Architect Portfolio Generator', description: 'Project showcases with large imagery and technical detail.' },
  ],
  blogs: [
    { name: 'Blog Generator for Beginners', description: 'Publish-ready in minutes, no experience needed.' },
    { name: 'AI Blog Builder', description: 'Generate a fully structured blog with AI-written starter posts.' },
    { name: 'Personal Blog Website Maker', description: 'Share your thoughts with a clean, readable layout.' },
    { name: 'Travel Blog Generator', description: 'Destination-focused layouts with maps and photo galleries.' },
    { name: 'Food Blog Builder', description: 'Recipe-ready pages with ingredient lists and step-by-step sections.' },
    { name: 'Tech Blog Generator', description: 'Code-friendly layouts with syntax highlighting and dark mode.' },
    { name: 'Lifestyle Blog Website Builder', description: 'Warm, editorial designs for wellness and everyday content.' },
    { name: 'Business Blog Generator', description: 'Thought-leadership layouts with newsletter sign-up built in.' },
    { name: 'Parenting Blog Builder', description: 'Friendly, approachable designs for family and parenting content.' },
    { name: 'SEO Blog Generator', description: 'Structured posts with meta fields and schema markup ready to go.' },
  ],
  stores: [
    { name: 'Online Store Builder', description: 'Start selling without writing a line of code.' },
    { name: 'Online Store Builder for Restaurants', description: 'Take orders and sell merchandise directly from your site.' },
    { name: 'Handmade Goods Store Generator', description: 'Etsy-style storefronts for artisans and makers.' },
    { name: 'Digital Products Store Builder', description: 'Sell ebooks, presets, and downloads with instant delivery.' },
    { name: 'Fashion Boutique Website Generator', description: 'Lookbook-style stores for clothing and accessories.' },
    { name: 'Print-on-Demand Store Builder', description: 'Connect your designs to fulfillment with a few clicks.' },
    { name: 'Subscription Box Store Generator', description: 'Recurring billing and product showcase in one site.' },
    { name: 'Local Bakery Online Store Builder', description: 'Pre-orders, custom cakes, and pickup scheduling.' },
    { name: 'Beauty Products Store Generator', description: 'Clean, editorial layouts for skincare and cosmetics brands.' },
    { name: 'Pet Products Store Builder', description: 'Playful, trust-building layouts for pet owners.' },
  ],
  'link-in-bio': [
    { name: 'Link-in-Bio Generator', description: 'One link for all your channels.' },
    { name: 'Creator Link-in-Bio Builder', description: 'Designed for YouTubers, podcasters, and content creators.' },
    { name: 'Musician Link-in-Bio Page Maker', description: 'Stream links, tour dates, and merch in one place.' },
    { name: 'Influencer Bio Link Generator', description: 'Brand-forward pages that match your aesthetic.' },
    { name: 'Small Business Link-in-Bio Builder', description: 'Menu, booking, and social links for local businesses.' },
    { name: 'Artist Link-in-Bio Page Generator', description: 'Gallery previews and shop links for visual artists.' },
    { name: 'Podcast Link-in-Bio Builder', description: 'Episode links, subscribe buttons, and sponsor slots.' },
    { name: 'Coach Link-in-Bio Page Maker', description: 'Booking, testimonials, and free resource links.' },
    { name: 'Nonprofit Link-in-Bio Generator', description: 'Donation links, volunteer sign-ups, and social proof.' },
    { name: 'Event Organizer Link-in-Bio Builder', description: 'Ticket links, event calendar, and social channels.' },
  ],
};
