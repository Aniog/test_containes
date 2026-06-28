import fs from 'node:fs'
import path from 'node:path'

const strings = {
  en: {
    lang: 'en',
    meta: {
      title: 'AI Website Generators - Build Any Site in Seconds | Strikingly',
      description:
        "Browse Strikingly's AI-powered website generators. Choose one for your industry, goal, or site type and create a website in seconds, no code required.",
      canonical: 'https://www.strikingly.com/generators',
      ogTitle: 'AI Website Generators - Build Any Site in Seconds | Strikingly',
      ogDescription:
        "Browse Strikingly's AI-powered website generators. Choose one for your industry, goal, or site type and create a website in seconds.",
      ogUrl: 'https://www.strikingly.com/generators',
    },
    ui: {
      resultSingle: 'generator matches',
      resultPlural: 'generators match',
      showAllPrefix: 'Show all',
      showAllSuffix: 'generators',
      showFewer: 'Show fewer generators',
      clearSearch: 'Clear search',
      searchPlaceholder: 'Search generators...',
      searchAriaLabel: 'Search generators',
    },
    brand: {
      logoPrefix: 'strikingly',
      logoSuffix: 'AI',
    },
    breadcrumb: {
      home: 'Strikingly',
      current: 'AI Generators',
    },
    hero: {
      eyebrowLineOne: 'BUILD ANY KIND OF SITE',
      eyebrowLineTwo: 'WITH AI, IN AN INSTANT',
      subheadline:
        "Browse the right generator for what you're building, or jump straight into our AI site builder.",
      primaryCta: "START BUILDING - IT'S FREE",
      secondaryCta: 'BROWSE GENERATORS',
    },
    featured: {
      title: 'FEATURED GENERATORS',
      subtitle: 'A few common starting points.',
      items: [
        {
          name: 'AI Website Generator',
          description: 'Describe your business, get a full site',
          category: 'Website',
        },
        {
          name: 'Free Portfolio Generator',
          description: 'For creatives, in minutes, no fee',
          category: 'Portfolio',
        },
        {
          name: 'AI Landing Page Maker',
          description: 'One-page sites built to convert',
          category: 'Landing Page',
        },
        {
          name: 'Online Store Builder',
          description: 'Start selling without writing code',
          category: 'Store',
        },
        {
          name: 'Link-in-Bio Generator',
          description: 'One link for all your channels',
          category: 'Link-in-Bio',
        },
        {
          name: 'One-Page Website Builder',
          description: 'Simple sites, single scroll',
          category: 'Website',
        },
        {
          name: 'Wedding Website Generator',
          description: 'Share your day with guests',
          category: 'Website',
        },
        {
          name: 'Restaurant Website Builder',
          description: 'Menu, hours, reservations, done',
          category: 'Website',
        },
        {
          name: 'Blog Generator for Beginners',
          description: 'Publish-ready in minutes',
          category: 'Blog',
        },
      ],
    },
    browse: {
      title: 'BROWSE BY CATEGORY',
      items: [
        {
          name: 'WEBSITES',
          slug: 'websites',
          description: 'AI-built business and personal sites for any goal.',
        },
        {
          name: 'LANDING PAGES',
          slug: 'landing-pages',
          description: 'Single-page sites built to convert visitors fast.',
        },
        {
          name: 'PORTFOLIOS',
          slug: 'portfolios',
          description: 'Showcase your work with a clean, focused site.',
        },
        {
          name: 'BLOGS',
          slug: 'blogs',
          description: 'Publish-ready blogs with built-in SEO basics.',
        },
        {
          name: 'ONLINE STORES',
          slug: 'stores',
          description: 'Sell products online with payments built in.',
        },
        {
          name: 'LINK-IN-BIO',
          slug: 'link-in-bio',
          description: 'One link, all your places. Made for creators.',
        },
      ],
    },
    directory: {
      title: 'ALL GENERATORS',
      subtitle: 'Sixty-plus generators, organized by what you\'re building.',
      emptyTitle: 'No generators match your search.',
      emptyBody: 'Try a broader term or clear the search to browse every option.',
      emptyLink: "Can't find it? Start with our AI builder.",
      sections: [
        {
          id: 'websites',
          name: 'WEBSITES',
          category: 'Website',
          description: 'AI-built site generators for businesses, services, events, and personal brands.',
          items: [
            {
              name: 'AI Website Generator',
              description: 'Describe your business and get a polished multi-section site fast.',
            },
            {
              name: 'Free Website Builder for Photographers',
              description: 'Launch a visual-first site for bookings, galleries, and contact details.',
            },
            {
              name: 'One-Page Wedding Website Builder',
              description: 'Share your story, schedule, and RSVP details on one elegant page.',
            },
            {
              name: 'Restaurant Website Builder',
              description: 'Put your menu, hours, reservations, and location online in minutes.',
            },
            {
              name: 'Small Business Website Generator',
              description: 'Create a credible business homepage with services, trust, and contact info.',
            },
            {
              name: 'Personal Website Maker with AI',
              description: 'Build a simple online home for your bio, links, and latest work.',
            },
            {
              name: 'Coaching Website Builder',
              description: 'Highlight your offer, testimonials, and booking flow with a clear layout.',
            },
            {
              name: 'Beauty Salon Website Generator',
              description: 'Promote treatments, pricing, and appointments with a clean branded site.',
            },
            {
              name: 'Local Service Website Builder',
              description: 'Get found online with a fast site for quotes, service areas, and reviews.',
            },
            {
              name: 'Freelancer Website Creator',
              description: 'Package your services, proof, and contact options on one streamlined site.',
            },
            {
              name: 'Wedding Website Generator',
              description: 'Share event details, travel notes, and updates with guests in one place.',
            },
          ],
        },
        {
          id: 'landing-pages',
          name: 'LANDING PAGES',
          category: 'Landing Page',
          description: 'Focused one-page generators built to capture attention and drive action.',
          items: [
            {
              name: 'AI Landing Page Maker',
              description: 'Generate a sharp one-page site with a clear offer and next step.',
            },
            {
              name: 'SaaS Landing Page Generator',
              description: 'Explain your product, benefits, and demo flow with modern structure.',
            },
            {
              name: 'Product Launch Landing Page Builder',
              description: 'Build excitement before release with copy, visuals, and a signup CTA.',
            },
            {
              name: 'Event Signup Page Creator',
              description: 'Promote a live event with agenda, timing, and registration details.',
            },
            {
              name: 'Webinar Landing Page Builder',
              description: 'Turn your session details into a clean page designed for signups.',
            },
            {
              name: 'Real Estate Landing Page Generator',
              description: 'Showcase a listing or service area with lead capture built in.',
            },
            {
              name: 'Lead Capture Page Maker',
              description: 'Collect inquiries with a concise page that stays focused on conversion.',
            },
            {
              name: 'Free One-Page Campaign Builder',
              description: 'Launch a campaign page quickly with the essentials above the fold.',
            },
            {
              name: 'App Coming Soon Page Generator',
              description: 'Collect early interest with a waitlist page for your next launch.',
            },
            {
              name: 'Newsletter Signup Landing Page',
              description: 'Give your readers one clear place to subscribe and learn your angle.',
            },
            {
              name: 'AI Service Landing Page Builder',
              description: 'Package a service offer into a clear page with proof and conversion points.',
            },
          ],
        },
        {
          id: 'portfolios',
          name: 'PORTFOLIOS',
          category: 'Portfolio',
          description: 'Showcase work, process, and credibility with focused portfolio generators.',
          items: [
            {
              name: 'Free Portfolio Generator',
              description: 'Create a stylish portfolio homepage without paying upfront.',
            },
            {
              name: 'Portfolio Generator for Designers',
              description: 'Present case studies, visuals, and process in a client-ready format.',
            },
            {
              name: 'Photographer Portfolio Builder',
              description: 'Lead with image grids and inquiry links built for visual storytelling.',
            },
            {
              name: 'Writer Portfolio Website Maker',
              description: 'Highlight clips, niches, and contact details on one clean site.',
            },
            {
              name: 'Architecture Portfolio Generator',
              description: 'Show projects, credentials, and approach with strong visual hierarchy.',
            },
            {
              name: 'UX Portfolio Builder with AI',
              description: 'Organize problem, process, and outcomes in a readable case-study flow.',
            },
            {
              name: 'Art Portfolio Maker',
              description: 'Frame your work with simple navigation and a distraction-free layout.',
            },
            {
              name: 'Copywriter Portfolio Website',
              description: 'Package writing samples, services, and trust signals in one place.',
            },
            {
              name: 'Student Portfolio Generator',
              description: 'Build a polished first portfolio for applications, internships, or freelance work.',
            },
            {
              name: 'Freelancer Showcase Builder',
              description: 'Turn project highlights into a fast site that supports outreach and referrals.',
            },
            {
              name: 'Model Portfolio Generator',
              description: 'Display looks, measurements, and booking details with a clean presentation.',
            },
          ],
        },
        {
          id: 'blogs',
          name: 'BLOGS',
          category: 'Blog',
          description: 'Publishing-ready blog generators with simple structure and SEO-friendly basics.',
          items: [
            {
              name: 'Blog Generator for Beginners',
              description: 'Start a readable, publish-ready blog without figuring out setup first.',
            },
            {
              name: 'AI Blog Website Builder',
              description: 'Get a homepage, article layout, and navigation ready to customize.',
            },
            {
              name: 'Travel Blog Generator',
              description: 'Share places, guides, and photos with a layout built for storytelling.',
            },
            {
              name: 'Food Blog Maker',
              description: 'Publish recipes, notes, and imagery in a clean editorial format.',
            },
            {
              name: 'Fashion Blog Builder',
              description: 'Create a stylish blog with room for lookbooks, posts, and links.',
            },
            {
              name: 'Personal Blog Creator',
              description: 'Write consistently on a simple site that keeps the focus on your posts.',
            },
            {
              name: 'News Blog Website Generator',
              description: 'Launch an article-first site with clear categories and reading flow.',
            },
            {
              name: 'Tutorial Blog Builder',
              description: 'Organize lessons and guides in a format that stays easy to scan.',
            },
            {
              name: 'Parenting Blog Generator',
              description: 'Share stories, advice, and resources in a warm, readable layout.',
            },
            {
              name: 'Creator Blog Starter',
              description: 'Combine updates, behind-the-scenes posts, and brand voice in one place.',
            },
            {
              name: 'Business Blog Generator',
              description: 'Publish educational content that supports your brand and search visibility.',
            },
          ],
        },
        {
          id: 'stores',
          name: 'ONLINE STORES',
          category: 'Store',
          description: 'Storefront generators for products, payments, and a cleaner path to checkout.',
          items: [
            {
              name: 'Online Store Builder',
              description: 'Launch a storefront with products, categories, and checkout-ready pages.',
            },
            {
              name: 'Online Store Builder for Restaurants',
              description: 'Sell pantry goods, meal kits, or merchandise from a restaurant-branded shop.',
            },
            {
              name: 'Boutique Store Website Generator',
              description: 'Create a stylish shop for curated products with a clean browsing flow.',
            },
            {
              name: 'Handmade Shop Builder',
              description: 'Sell crafts, gifts, and limited drops with a warm product-first layout.',
            },
            {
              name: 'Dropshipping Store Creator',
              description: 'Start a store quickly with a structure designed around product discovery.',
            },
            {
              name: 'Digital Product Store Maker',
              description: 'Package downloads, bundles, and offers in a site built for simple sales.',
            },
            {
              name: 'Bakery Online Store Generator',
              description: 'Take seasonal orders and showcase products with a clean local brand feel.',
            },
            {
              name: 'Beauty Brand Store Builder',
              description: 'Sell skincare or cosmetics with sections for ingredients, benefits, and bundles.',
            },
            {
              name: 'Print-on-Demand Shop Builder',
              description: 'Launch a product collection page that feels branded from day one.',
            },
            {
              name: 'Subscription Box Store Generator',
              description: 'Explain your recurring offer and drive signups with simple merchandising.',
            },
            {
              name: 'Jewelry Store Website Builder',
              description: 'Feature collections, gifts, and craftsmanship in a polished ecommerce layout.',
            },
          ],
        },
        {
          id: 'link-in-bio',
          name: 'LINK-IN-BIO',
          category: 'Link-in-Bio',
          description: 'Compact link page generators for creators, brands, and social-first businesses.',
          items: [
            {
              name: 'Link-in-Bio Generator',
              description: 'Create one clean page that sends people to everything that matters.',
            },
            {
              name: 'Creator Link Page Builder',
              description: 'Put videos, products, socials, and offers behind one simple profile link.',
            },
            {
              name: 'Musician Bio Link Generator',
              description: 'Share tracks, tour dates, merch, and sign-up links from one page.',
            },
            {
              name: 'Podcast Link-in-Bio Maker',
              description: 'Route listeners to episodes, platforms, and sponsor-ready contact info.',
            },
            {
              name: 'Influencer Link Page Creator',
              description: 'Group collabs, affiliate links, and socials in a more polished layout.',
            },
            {
              name: 'Artist Bio Link Builder',
              description: 'Connect your gallery, store, updates, and inquiry links in one place.',
            },
            {
              name: 'Author Link-in-Bio Generator',
              description: 'Highlight books, speaking, newsletter, and bio details with one page.',
            },
            {
              name: 'Coach Link Page with AI',
              description: 'Guide visitors to offers, bookings, testimonials, and social channels.',
            },
            {
              name: 'Small Brand Link-in-Bio Site',
              description: 'Direct customers to products, launches, and your best conversion paths.',
            },
            {
              name: 'Free Social Links Page Maker',
              description: 'Build a quick mobile-first page that keeps your key links easy to tap.',
            },
            {
              name: 'Link-in-Bio Page for YouTubers',
              description: 'Point viewers to videos, memberships, sponsors, and your latest projects.',
            },
          ],
        },
      ],
    },
    howItWorks: {
      title: 'HOW IT WORKS',
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
    why: {
      title: 'WHY STRIKINGLY',
      items: [
        {
          title: 'LIVE IN SECONDS',
          description: 'Describe your site, we build it. No setup, no learning curve.',
          icon: 'bolt',
        },
        {
          title: 'MOBILE BY DEFAULT',
          description: 'Every generator produces responsive sites that work on any device.',
          icon: 'phone',
        },
        {
          title: 'FREE TO START',
          description: 'Generate, customize, and publish without a credit card.',
          icon: 'spark',
        },
      ],
    },
    faq: {
      title: 'FREQUENTLY ASKED QUESTIONS',
      items: [
        {
          question: 'What is an AI site generator?',
          answer: [
            'An AI site generator turns a short prompt about your business, project, or goal into a ready-to-edit website structure. Instead of starting from a blank page, you begin with sections, copy direction, and layout ideas already in place.',
            'It is meant to speed up the first draft. You can still edit the design, text, images, and sections after the site is generated.',
          ],
        },
        {
          question: 'How is a generator different from a template?',
          answer: [
            'A template gives you a fixed starting design that you fill in manually. A generator uses your prompt to shape the first version of the site around what you are trying to make.',
            'That means the structure, section emphasis, and starter copy can feel more specific to your use case from the beginning, while still being fully customizable later.',
          ],
        },
        {
          question: 'Are these generators free to use?',
          answer: [
            'Yes. You can start generating and exploring site drafts without a credit card. That makes it easy to test different directions before deciding how far you want to take a site.',
            'If you want to publish or unlock plan-specific features, you can choose the option that fits your needs later on.',
          ],
        },
        {
          question: 'What kinds of sites can I build?',
          answer: [
            'You can build business websites, landing pages, portfolios, blogs, online stores, and link-in-bio pages. The directory is organized to help you jump toward the format that matches your goal fastest.',
            'You can also start with the general AI builder if you are not sure which path is best. It works well for broad ideas and custom combinations.',
          ],
        },
        {
          question: 'Can I customize what the generator produces?',
          answer: [
            'Yes. The generated result is a starting point, not a locked layout. You can change text, reorder sections, swap visuals, and refine the design after the first version is created.',
            'That flexibility is useful when you want the speed of AI without giving up control over the final site.',
          ],
        },
        {
          question: 'Do generated sites work on mobile?',
          answer: [
            'Yes. Strikingly-generated sites are designed to be responsive, so they adapt to phones, tablets, and desktop screens automatically.',
            'You can still review and adjust the content for mobile readability, but the starting layouts are built with mobile use in mind.',
          ],
        },
      ],
    },
    closing: {
      title: 'READY TO BUILD?',
      description: 'Pick a generator above, or jump straight into our AI builder.',
      cta: 'START WITH AI BUILDER',
    },
    footer: {
      columns: [
        {
          title: 'PRODUCT',
          links: [
            { label: 'AI Website Builder', href: '/s/ai_site_builder' },
            { label: 'Pricing', href: '/pricing' },
            { label: 'Templates', href: '/templates' },
          ],
        },
        {
          title: 'RESOURCES',
          links: [
            { label: 'Support', href: '/support' },
            { label: 'Blog', href: '/blog' },
            { label: 'AI Generators', href: '/generators' },
          ],
        },
        {
          title: 'COMPANY',
          links: [
            { label: 'About', href: '/about' },
            { label: 'Templates Directory', href: '/templates' },
            { label: 'Help Center', href: '/support' },
          ],
        },
        {
          title: 'LEGAL',
          links: [
            { label: 'Terms', href: '/terms' },
            { label: 'Privacy', href: '/privacy' },
          ],
        },
      ],
      copyright: '© 2026 Strikingly. All rights reserved.',
    },
  },
}

const locale = strings.en

const escapeHtml = (value) =>
  String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;')

const slugify = (value) =>
  String(value)
    .toLowerCase()
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')

const totalDirectoryCards = locale.directory.sections.reduce(
  (sum, section) => sum + section.items.length,
  0,
)

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: locale.breadcrumb.home,
      item: 'https://www.strikingly.com/',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: locale.breadcrumb.current,
      item: locale.meta.canonical,
    },
  ],
}

function renderLogo() {
  return `
    <a class="brandmark" href="/" aria-label="${escapeHtml(locale.breadcrumb.home)} home">
      <span class="brandmark__icon" aria-hidden="true">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L14.8 9.2L22 12L14.8 14.8L12 22L9.2 14.8L2 12L9.2 9.2L12 2Z" stroke="currentColor" stroke-width="1.5" fill="none"/>
        </svg>
      </span>
      <span class="brandmark__text">
        <span class="brandmark__word">${escapeHtml(locale.brand.logoPrefix)}</span>
        <span class="brandmark__ai">${escapeHtml(locale.brand.logoSuffix)}</span>
      </span>
    </a>
  `
}

function renderArrowIcon() {
  return `
    <svg class="arrow-icon" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M4 9H14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
      <path d="M9.5 4.5L14 9L9.5 13.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `
}

function renderSearchIcon() {
  return `
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="8" cy="8" r="5.25" stroke="currentColor" stroke-width="1.5"/>
      <path d="M11.8 11.8L15 15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
    </svg>
  `
}

function renderHeroIllustration() {
  return `
    <svg class="hero-illustration__svg" width="520" height="360" viewBox="0 0 520 360" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="54" y="34" width="412" height="292" rx="26" fill="#FFFFFF" stroke="#C6C9CD" stroke-width="2"/>
      <rect x="82" y="66" width="356" height="34" rx="12" fill="#F4F6F8" stroke="#E2E4E7"/>
      <rect x="82" y="122" width="138" height="146" rx="18" fill="#FFFFFF" stroke="#D8C8EE" stroke-width="2"/>
      <rect x="242" y="122" width="196" height="68" rx="18" fill="#FFFFFF" stroke="#D8C8EE" stroke-width="2"/>
      <rect x="242" y="208" width="196" height="60" rx="18" fill="#FFFFFF" stroke="#D8C8EE" stroke-width="2"/>
      <path d="M112 178C132 154 160 148 186 164C176 186 150 206 114 220" stroke="#8159BB" stroke-width="3" stroke-linecap="round"/>
      <path d="M270 150H400" stroke="#B9A5D7" stroke-width="3" stroke-linecap="round"/>
      <path d="M270 170H370" stroke="#D1C2E7" stroke-width="3" stroke-linecap="round"/>
      <path d="M270 230H386" stroke="#B9A5D7" stroke-width="3" stroke-linecap="round"/>
      <path d="M270 250H344" stroke="#D1C2E7" stroke-width="3" stroke-linecap="round"/>
      <path d="M58 296C120 238 188 290 240 258C292 226 344 168 460 210" stroke="#E9D5F2" stroke-width="10" stroke-linecap="round"/>
      <circle cx="396" cy="92" r="11" fill="#FFFFFF" stroke="#8159BB" stroke-width="2"/>
      <circle cx="420" cy="92" r="11" fill="#FFFFFF" stroke="#CB0C9F" stroke-width="2"/>
      <circle cx="444" cy="92" r="11" fill="#FFFFFF" stroke="#7671FF" stroke-width="2"/>
    </svg>
  `
}

function renderCategoryIllustration(kind, compact = false) {
  const size = compact ? 84 : 104
  const stroke = compact ? 1.6 : 1.8

  const paths = {
    websites: `
      <rect x="8" y="14" width="${size - 16}" height="${size - 28}" rx="14" fill="#FFFFFF" stroke="#8159BB" stroke-width="${stroke}"/>
      <path d="M18 28H${size - 18}" stroke="#C6C9CD" stroke-width="${stroke}"/>
      <path d="M24 44H${size - 24}" stroke="#B9A5D7" stroke-width="${stroke}" stroke-linecap="round"/>
      <path d="M24 58H${size - 34}" stroke="#D1C2E7" stroke-width="${stroke}" stroke-linecap="round"/>
      <path d="M24 72H${size - 42}" stroke="#B9A5D7" stroke-width="${stroke}" stroke-linecap="round"/>
    `,
    'landing-pages': `
      <rect x="10" y="12" width="${size - 20}" height="${size - 24}" rx="14" fill="#FFFFFF" stroke="#8159BB" stroke-width="${stroke}"/>
      <path d="M20 28H${size - 20}" stroke="#C6C9CD" stroke-width="${stroke}"/>
      <rect x="24" y="40" width="${size - 48}" height="14" rx="7" fill="#F4F6F8" stroke="#D8C8EE" stroke-width="${stroke}"/>
      <path d="M24 64H${size - 24}" stroke="#B9A5D7" stroke-width="${stroke}" stroke-linecap="round"/>
      <path d="M24 78H${size - 38}" stroke="#D1C2E7" stroke-width="${stroke}" stroke-linecap="round"/>
    `,
    portfolios: `
      <rect x="12" y="14" width="${size - 24}" height="${size - 28}" rx="14" fill="#FFFFFF" stroke="#8159BB" stroke-width="${stroke}"/>
      <rect x="22" y="24" width="${size - 44}" height="${compact ? 20 : 26}" rx="10" fill="#F4F6F8" stroke="#D8C8EE" stroke-width="${stroke}"/>
      <path d="M26 ${compact ? 58 : 66}L${compact ? 42 : 48} ${compact ? 42 : 46}L${compact ? 58 : 68} ${compact ? 56 : 64}L${compact ? 78 : 92} ${compact ? 34 : 38}" stroke="#8159BB" stroke-width="${stroke}" stroke-linecap="round" stroke-linejoin="round"/>
      <circle cx="${compact ? 34 : 38}" cy="${compact ? 36 : 38}" r="${compact ? 4 : 5}" fill="#CB0C9F"/>
    `,
    blogs: `
      <rect x="14" y="10" width="${size - 28}" height="${size - 20}" rx="14" fill="#FFFFFF" stroke="#8159BB" stroke-width="${stroke}"/>
      <path d="M28 26H${size - 28}" stroke="#B9A5D7" stroke-width="${stroke}" stroke-linecap="round"/>
      <path d="M28 40H${size - 46}" stroke="#D1C2E7" stroke-width="${stroke}" stroke-linecap="round"/>
      <path d="M28 56H${size - 28}" stroke="#B9A5D7" stroke-width="${stroke}" stroke-linecap="round"/>
      <path d="M28 70H${size - 40}" stroke="#D1C2E7" stroke-width="${stroke}" stroke-linecap="round"/>
    `,
    stores: `
      <path d="M22 30H${size - 22}L${size - 28} ${compact ? 48 : 56}H28L22 30Z" fill="#FFFFFF" stroke="#8159BB" stroke-width="${stroke}" stroke-linejoin="round"/>
      <path d="M34 30C34 ${compact ? 22 : 20} ${compact ? 42 : 48} ${compact ? 18 : 16} ${size / 2} ${compact ? 18 : 16}C${compact ? 54 : 56} ${compact ? 18 : 16} ${compact ? 62 : 68} ${compact ? 22 : 20} ${compact ? 62 : 68} 30" stroke="#CB0C9F" stroke-width="${stroke}" stroke-linecap="round"/>
      <rect x="30" y="${compact ? 48 : 56}" width="${size - 60}" height="${compact ? 28 : 34}" rx="8" fill="#FFFFFF" stroke="#B9A5D7" stroke-width="${stroke}"/>
      <path d="M40 ${compact ? 62 : 72}H${size - 40}" stroke="#D1C2E7" stroke-width="${stroke}" stroke-linecap="round"/>
    `,
    'link-in-bio': `
      <rect x="26" y="10" width="${size - 52}" height="${size - 20}" rx="18" fill="#FFFFFF" stroke="#8159BB" stroke-width="${stroke}"/>
      <circle cx="${size / 2}" cy="${compact ? 28 : 30}" r="${compact ? 7 : 8}" fill="#F4F6F8" stroke="#CB0C9F" stroke-width="${stroke}"/>
      <rect x="${compact ? 24 : 22}" y="${compact ? 42 : 48}" width="${size - (compact ? 48 : 44)}" height="${compact ? 10 : 12}" rx="6" fill="#FFFFFF" stroke="#B9A5D7" stroke-width="${stroke}"/>
      <rect x="${compact ? 24 : 22}" y="${compact ? 58 : 66}" width="${size - (compact ? 48 : 44)}" height="${compact ? 10 : 12}" rx="6" fill="#FFFFFF" stroke="#B9A5D7" stroke-width="${stroke}"/>
    `,
  }

  return `
    <svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      ${paths[kind]}
    </svg>
  `
}

function renderWhyIcon(kind) {
  const icons = {
    bolt: `
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M18.6 3L8.8 18.2H15.2L13.4 29L23.2 13.8H16.8L18.6 3Z" stroke="#8159BB" stroke-width="1.8" stroke-linejoin="round"/>
      </svg>
    `,
    phone: `
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect x="9" y="3.8" width="14" height="24.4" rx="4" stroke="#8159BB" stroke-width="1.8"/>
        <path d="M13 8H19" stroke="#CB0C9F" stroke-width="1.8" stroke-linecap="round"/>
        <circle cx="16" cy="24" r="1.6" fill="#8159BB"/>
      </svg>
    `,
    spark: `
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M16 4L18.8 12.2L27 15L18.8 17.8L16 26L13.2 17.8L5 15L13.2 12.2L16 4Z" stroke="#8159BB" stroke-width="1.8" fill="none"/>
        <path d="M24.5 5.5L25.6 8.4L28.5 9.5L25.6 10.6L24.5 13.5L23.4 10.6L20.5 9.5L23.4 8.4L24.5 5.5Z" fill="#CB0C9F"/>
      </svg>
    `,
  }

  return icons[kind]
}

function renderTopBar() {
  return `
    <header class="topbar">
      <div class="container topbar__inner">
        ${renderLogo()}
      </div>
    </header>
  `
}

function renderBreadcrumb() {
  return `
    <nav class="breadcrumb" aria-label="Breadcrumb">
      <div class="container">
        <ol class="breadcrumb__list">
          <li class="breadcrumb__item"><a href="/">${escapeHtml(locale.breadcrumb.home)}</a></li>
          <li class="breadcrumb__item" aria-current="page">${escapeHtml(locale.breadcrumb.current)}</li>
        </ol>
      </div>
    </nav>
  `
}

function renderHero() {
  return `
    <section class="hero section" aria-labelledby="hero-title">
      <div class="container hero__grid">
        <div class="hero__content">
          <h1 id="hero-title" class="hero__title">
            <span class="hero__title-line hero__title-line--dark">${escapeHtml(locale.hero.eyebrowLineOne)}</span>
            <span class="hero__title-line hero__title-line--gradient">${escapeHtml(locale.hero.eyebrowLineTwo)}</span>
          </h1>
          <p class="hero__subtitle">${escapeHtml(locale.hero.subheadline)}</p>
          <div class="hero__actions">
            <a class="button button--primary button--large" href="/s/ai_site_builder">${escapeHtml(locale.hero.primaryCta)}</a>
            <a class="button button--ghost button--large" href="#all-generators">${escapeHtml(locale.hero.secondaryCta)}</a>
          </div>
        </div>
        <div class="hero__visual">
          ${renderHeroIllustration()}
        </div>
      </div>
    </section>
  `
}

function renderFeatured() {
  return `
    <section class="section section--light" aria-labelledby="featured-title">
      <div class="container">
        <div class="section-heading">
          <h2 id="featured-title">${escapeHtml(locale.featured.title)}</h2>
          <p>${escapeHtml(locale.featured.subtitle)}</p>
        </div>
        <div class="card-grid card-grid--featured">
          ${locale.featured.items
            .map((item) => {
              const href = `/generators/${slugify(item.name)}`
              return `
                <article class="card card--generator card--featured">
                  <a class="card__link" href="${href}">
                    <div class="card__body">
                      <h3 class="card__title">${escapeHtml(item.name)}</h3>
                      <p class="card__description">${escapeHtml(item.description)}</p>
                      <span class="tag">${escapeHtml(item.category)}</span>
                    </div>
                  </a>
                </article>
              `
            })
            .join('')}
        </div>
      </div>
    </section>
  `
}

function renderBrowse() {
  return `
    <section class="section" aria-labelledby="browse-title">
      <div class="container">
        <div class="section-heading">
          <h2 id="browse-title">${escapeHtml(locale.browse.title)}</h2>
        </div>
        <div class="card-grid card-grid--browse">
          ${locale.browse.items
            .map((item) => {
              return `
                <article class="card card--category">
                  <a class="card__link card__link--category" href="/generators#${escapeHtml(item.slug)}">
                    <div class="category-illustration category-illustration--browse">
                      ${renderCategoryIllustration(item.slug)}
                    </div>
                    <div class="card__body">
                      <h3 class="card__title">${escapeHtml(item.name)}</h3>
                      <p class="card__description">${escapeHtml(item.description)}</p>
                    </div>
                    <span class="card__arrow" aria-hidden="true">${renderArrowIcon()}</span>
                  </a>
                </article>
              `
            })
            .join('')}
        </div>
      </div>
    </section>
  `
}

function renderDirectory() {
  return `
    <section class="section section--light" id="all-generators" aria-labelledby="all-generators-title">
      <div class="container">
        <div class="section-heading section-heading--wide">
          <h2 id="all-generators-title">${escapeHtml(locale.directory.title)}</h2>
          <p>${escapeHtml(locale.directory.subtitle)}</p>
        </div>
        <div class="directory-toolbar">
          <label class="search-box" aria-label="${escapeHtml(locale.ui.searchAriaLabel)}">
            <span class="search-box__icon">${renderSearchIcon()}</span>
            <input
              type="search"
              placeholder="${escapeHtml(locale.ui.searchPlaceholder)}"
              aria-label="${escapeHtml(locale.ui.searchAriaLabel)}"
              data-search-input
            />
          </label>
          <p class="directory-toolbar__count" data-result-count>${totalDirectoryCards} ${escapeHtml(locale.ui.resultPlural)}</p>
        </div>
        <div class="directory-empty" data-empty-state hidden>
          <p class="directory-empty__title">${escapeHtml(locale.directory.emptyTitle)}</p>
          <p class="directory-empty__body">${escapeHtml(locale.directory.emptyBody)}</p>
          <div class="directory-empty__actions">
            <button class="button button--ghost" type="button" data-clear-search>${escapeHtml(locale.ui.clearSearch)}</button>
            <a class="directory-empty__link" href="/s/ai_site_builder">${escapeHtml(locale.directory.emptyLink)}</a>
          </div>
        </div>
        <div class="directory-sections">
          ${locale.directory.sections
            .map((section) => {
              const gridId = `${section.id}-grid`
              return `
                <section
                  class="directory-section"
                  id="${escapeHtml(section.id)}"
                  aria-labelledby="${escapeHtml(section.id)}-title"
                  data-directory-section
                >
                  <div class="directory-section__header">
                    <h3 id="${escapeHtml(section.id)}-title">${escapeHtml(section.name)}</h3>
                    <p>${escapeHtml(section.description)}</p>
                  </div>
                  <div class="directory-section__panel" id="${escapeHtml(gridId)}" data-grid-wrapper>
                    <div class="card-grid card-grid--directory">
                      ${section.items
                        .map((item) => {
                          const searchText = `${item.name} ${item.description} ${section.category}`.toLowerCase()
                          return `
                            <article
                              class="card card--generator card--directory"
                              data-directory-card
                              data-search="${escapeHtml(searchText)}"
                            >
                              <a class="card__link" href="/generators/${slugify(item.name)}">
                                <div class="card__thumbnail category-illustration category-illustration--thumbnail">
                                  ${renderCategoryIllustration(section.id, true)}
                                </div>
                                <div class="card__body">
                                  <h4 class="card__title">${escapeHtml(item.name)}</h4>
                                  <p class="card__description">${escapeHtml(item.description)}</p>
                                </div>
                              </a>
                            </article>
                          `
                        })
                        .join('')}
                    </div>
                  </div>
                  <button
                    class="show-all-button"
                    type="button"
                    aria-expanded="false"
                    aria-controls="${escapeHtml(gridId)}"
                    data-toggle-button
                    hidden
                  >
                    ${escapeHtml(locale.ui.showAllPrefix)} ${section.items.length} ${escapeHtml(locale.ui.showAllSuffix)}
                  </button>
                </section>
              `
            })
            .join('')}
        </div>
      </div>
    </section>
  `
}

function renderHowItWorks() {
  return `
    <section class="section" aria-labelledby="how-it-works-title">
      <div class="container">
        <div class="section-heading">
          <h2 id="how-it-works-title">${escapeHtml(locale.howItWorks.title)}</h2>
        </div>
        <div class="steps-grid">
          ${locale.howItWorks.steps
            .map((step, index) => {
              return `
                <article class="step-card">
                  <div class="step-card__number" aria-hidden="true">${index + 1}</div>
                  <h3 class="step-card__title">${escapeHtml(step.title)}</h3>
                  <p class="step-card__description">${escapeHtml(step.description)}</p>
                </article>
              `
            })
            .join('')}
        </div>
      </div>
    </section>
  `
}

function renderWhy() {
  return `
    <section class="section" aria-labelledby="why-title">
      <div class="container">
        <div class="section-heading">
          <h2 id="why-title">${escapeHtml(locale.why.title)}</h2>
        </div>
        <div class="why-grid">
          ${locale.why.items
            .map((item) => {
              return `
                <article class="why-card">
                  <div class="why-card__icon">${renderWhyIcon(item.icon)}</div>
                  <h3 class="why-card__title">${escapeHtml(item.title)}</h3>
                  <p class="why-card__description">${escapeHtml(item.description)}</p>
                </article>
              `
            })
            .join('')}
        </div>
      </div>
    </section>
  `
}

function renderFaq() {
  return `
    <section class="section section--light" aria-labelledby="faq-title">
      <div class="container container--narrow">
        <div class="section-heading">
          <h2 id="faq-title">${escapeHtml(locale.faq.title)}</h2>
        </div>
        <div class="faq-list" data-faq-list>
          ${locale.faq.items
            .map((item, index) => {
              const panelId = `faq-panel-${index + 1}`
              const buttonId = `faq-button-${index + 1}`
              return `
                <article class="faq-item" data-faq-item>
                  <h3 class="faq-item__heading">
                    <button
                      id="${buttonId}"
                      class="faq-item__button"
                      type="button"
                      aria-expanded="${index === 0 ? 'true' : 'false'}"
                      aria-controls="${panelId}"
                      data-faq-button
                    >
                      <span>${escapeHtml(item.question)}</span>
                      <span class="faq-item__icon" aria-hidden="true">+</span>
                    </button>
                  </h3>
                  <div
                    class="faq-item__panel"
                    id="${panelId}"
                    role="region"
                    aria-labelledby="${buttonId}"
                    data-faq-panel
                  >
                    ${item.answer
                      .map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`)
                      .join('')}
                  </div>
                </article>
              `
            })
            .join('')}
        </div>
      </div>
    </section>
  `
}

function renderClosingCta() {
  return `
    <section class="section closing-cta" aria-labelledby="closing-cta-title">
      <div class="container container--narrow closing-cta__inner">
        <h2 id="closing-cta-title">${escapeHtml(locale.closing.title)}</h2>
        <p>${escapeHtml(locale.closing.description)}</p>
        <a class="button button--primary button--large" href="/s/ai_site_builder">${escapeHtml(locale.closing.cta)}</a>
      </div>
    </section>
  `
}

function renderFooter() {
  return `
    <footer class="site-footer">
      <div class="container site-footer__inner">
        <div class="site-footer__brand">
          ${renderLogo()}
          <p class="site-footer__tagline">AI-powered website building for creators, businesses, and every next idea.</p>
        </div>
        <div class="site-footer__columns">
          ${locale.footer.columns
            .map((column) => {
              return `
                <div class="site-footer__column">
                  <p class="site-footer__column-title">${escapeHtml(column.title)}</p>
                  <ul class="site-footer__links">
                    ${column.links
                      .map(
                        (link) => `<li><a href="${escapeHtml(link.href)}">${escapeHtml(link.label)}</a></li>`,
                      )
                      .join('')}
                  </ul>
                </div>
              `
            })
            .join('')}
        </div>
      </div>
      <div class="container site-footer__bottom">
        <p>${escapeHtml(locale.footer.copyright)}</p>
      </div>
    </footer>
  `
}

function renderStyles() {
  return `
    :root {
      --color-brand-purple: #8159BB;
      --color-gradient-start: #7671FF;
      --color-gradient-end: #CB0C9F;
      --color-body: #636972;
      --color-heading: #4B5056;
      --color-hero-heading: #2E2E2F;
      --color-border: #C6C9CD;
      --color-divider: #E2E4E7;
      --color-light: #F4F6F8;
      --color-white: #FFFFFF;
      --color-focus: rgba(129, 89, 187, 0.28);
      --shadow-card: 0 10px 30px rgba(77, 89, 102, 0.08);
      --shadow-soft: 0 16px 40px rgba(129, 89, 187, 0.08);
      --radius-card: 3px;
      --radius-button: 4px;
      --container-width: 1200px;
      --space-5: 5px;
      --space-10: 10px;
      --space-20: 20px;
      --space-30: 30px;
      --space-40: 40px;
      --space-60: 60px;
      --space-80: 80px;
      --font-heading: "Brandon Grotesque", "Josefin Sans", "Poppins", sans-serif;
      --font-body: "Open Sans", sans-serif;
      --transition-fast: 180ms ease;
      --transition-medium: 260ms ease;
      color-scheme: light;
    }

    * {
      box-sizing: border-box;
    }

    html {
      scroll-behavior: smooth;
    }

    body {
      margin: 0;
      min-inline-size: 320px;
      background: var(--color-white);
      color: var(--color-body);
      font-family: var(--font-body);
      font-size: 14px;
      line-height: 1.5;
      text-rendering: optimizeLegibility;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    img,
    svg {
      display: block;
      max-inline-size: 100%;
    }

    a,
    button,
    input {
      font: inherit;
    }

    a {
      color: inherit;
      text-decoration: none;
    }

    button {
      border: 0;
      background: transparent;
      padding: 0;
      color: inherit;
      cursor: pointer;
    }

    a:focus-visible,
    button:focus-visible,
    input:focus-visible {
      outline: 3px solid var(--color-focus);
      outline-offset: 3px;
    }

    .sr-only {
      position: absolute;
      inline-size: 1px;
      block-size: 1px;
      margin: -1px;
      padding: 0;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      white-space: nowrap;
      border: 0;
    }

    .container {
      inline-size: min(100% - 40px, var(--container-width));
      margin-inline: auto;
    }

    .container--narrow {
      inline-size: min(100% - 40px, 900px);
    }

    .section {
      padding-block: var(--space-40);
      scroll-margin-top: 120px;
    }

    .section--light {
      background: var(--color-light);
    }

    .section-heading {
      margin-block-end: var(--space-30);
    }

    .section-heading--wide {
      margin-block-end: var(--space-20);
    }

    .section-heading h2,
    .directory-section__header h3,
    .card__title,
    .step-card__title,
    .why-card__title,
    .site-footer__column-title,
    .faq-item__heading,
    .closing-cta h2 {
      margin: 0;
      font-family: var(--font-heading);
      font-weight: 700;
      letter-spacing: 0.06em;
      line-height: 1.2;
      text-transform: uppercase;
      color: var(--color-heading);
    }

    .section-heading h2,
    .closing-cta h2 {
      font-size: clamp(26px, 3vw, 32px);
    }

    .section-heading p,
    .directory-section__header p,
    .card__description,
    .why-card__description,
    .step-card__description,
    .hero__subtitle,
    .closing-cta p,
    .site-footer__tagline,
    .faq-item__panel p,
    .directory-empty__body,
    .directory-toolbar__count,
    .breadcrumb,
    .site-footer__bottom {
      margin: 10px 0 0;
      color: var(--color-body);
    }

    .topbar {
      background: var(--color-white);
      border-block-end: 1px solid var(--color-divider);
    }

    .topbar__inner {
      display: flex;
      align-items: center;
      min-block-size: 68px;
    }

    .brandmark {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      color: var(--color-heading);
      font-family: var(--font-heading);
      font-size: 18px;
      font-weight: 700;
      letter-spacing: 0.05em;
      line-height: 1;
      text-transform: none;
    }

    .brandmark__icon {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      color: var(--color-brand-purple);
    }

    .brandmark__text {
      display: inline-flex;
      align-items: baseline;
      gap: 6px;
      flex-wrap: wrap;
    }

    .brandmark__word {
      color: var(--color-heading);
    }

    .brandmark__ai {
      color: var(--color-brand-purple);
    }

    .breadcrumb {
      border-block-end: 1px solid var(--color-divider);
      padding-block: 14px;
      font-size: 13px;
    }

    .breadcrumb__list {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      align-items: center;
      list-style: none;
      margin: 0;
      padding: 0;
    }

    .breadcrumb__item {
      display: inline-flex;
      align-items: center;
      gap: 10px;
    }

    .breadcrumb__item + .breadcrumb__item::before {
      content: ">";
      color: var(--color-brand-purple);
    }

    .hero {
      position: relative;
      overflow: clip;
      padding-block: clamp(60px, 8vw, 80px);
    }

    .hero::before {
      content: "";
      position: absolute;
      inset: 0;
      background:
        radial-gradient(circle at 80% 30%, rgba(203, 12, 159, 0.08), transparent 36%),
        radial-gradient(circle at 20% 20%, rgba(118, 113, 255, 0.08), transparent 34%);
      pointer-events: none;
    }

    .hero__grid {
      position: relative;
      display: grid;
      grid-template-columns: minmax(0, 1.05fr) minmax(320px, 0.95fr);
      gap: var(--space-40);
      align-items: center;
    }

    .hero__content {
      max-inline-size: 560px;
    }

    .hero__title {
      margin: 0;
      font-family: var(--font-heading);
      font-size: clamp(30px, 5vw, 48px);
      font-weight: 700;
      letter-spacing: 0.05em;
      line-height: 1.1;
      text-transform: uppercase;
    }

    .hero__title-line {
      display: block;
    }

    .hero__title-line--dark {
      color: var(--color-hero-heading);
    }

    .hero__title-line--gradient {
      background: linear-gradient(90deg, var(--color-gradient-start), var(--color-gradient-end));
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
    }

    .hero__subtitle {
      max-inline-size: 520px;
      font-size: 16px;
    }

    .hero__actions {
      display: flex;
      flex-wrap: wrap;
      gap: var(--space-10);
      margin-block-start: var(--space-20);
    }

    .button {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-block-size: 36px;
      padding-block: 9px;
      padding-inline: 15px;
      border-radius: var(--radius-button);
      border: 1px solid transparent;
      font-family: var(--font-heading);
      font-size: 14px;
      font-weight: 700;
      letter-spacing: 0.06em;
      line-height: 1;
      text-transform: uppercase;
      transition:
        border-color var(--transition-fast),
        box-shadow var(--transition-fast),
        background-color var(--transition-fast),
        color var(--transition-fast);
    }

    .button--large {
      min-block-size: 44px;
      padding-inline: 20px;
    }

    .button--primary {
      background: linear-gradient(90deg, var(--color-gradient-start), var(--color-gradient-end));
      color: var(--color-white);
      box-shadow: 0 12px 26px rgba(118, 113, 255, 0.22);
    }

    .button--primary:hover {
      box-shadow: 0 16px 28px rgba(118, 113, 255, 0.28);
    }

    .button--ghost {
      border-color: var(--color-brand-purple);
      color: var(--color-brand-purple);
      background: transparent;
    }

    .button--ghost:hover {
      background: rgba(129, 89, 187, 0.06);
    }

    .hero__visual {
      display: flex;
      justify-content: center;
    }

    .hero-illustration__svg {
      inline-size: min(100%, 520px);
      block-size: auto;
      filter: drop-shadow(0 24px 40px rgba(129, 89, 187, 0.08));
    }

    .card-grid {
      display: grid;
      gap: var(--space-20);
    }

    .card-grid--featured,
    .card-grid--directory,
    .why-grid {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }

    .card-grid--browse,
    .steps-grid {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }

    .card,
    .step-card,
    .why-card,
    .faq-item {
      background: var(--color-white);
      border: 1px solid var(--color-border);
      border-radius: var(--radius-card);
      transition:
        border-color var(--transition-fast),
        box-shadow var(--transition-fast),
        transform var(--transition-fast);
    }

    .card:hover,
    .card:focus-within,
    .why-card:hover,
    .why-card:focus-within,
    .step-card:hover,
    .faq-item:focus-within {
      border-color: var(--color-brand-purple);
      box-shadow: var(--shadow-card);
    }

    .card__link {
      display: block;
      block-size: 100%;
      padding: 20px;
    }

    .card__link--category {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: var(--space-20);
      min-block-size: 100%;
    }

    .card__body {
      display: grid;
      gap: 10px;
      color: var(--color-body);
    }

    .card__title {
      font-size: 20px;
      color: var(--color-heading);
    }

    .card--directory .card__title,
    .card--featured .card__title,
    .card--category .card__title {
      font-size: 18px;
    }

    .card__description {
      margin: 0;
    }

    .tag {
      display: inline-flex;
      inline-size: fit-content;
      align-items: center;
      justify-content: center;
      padding-block: 2px;
      padding-inline: 6px;
      border: 1px solid var(--color-brand-purple);
      border-radius: 3px;
      color: var(--color-brand-purple);
      font-family: var(--font-heading);
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 0.06em;
      line-height: 1.2;
      text-transform: uppercase;
    }

    .category-illustration {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border-radius: 12px;
      background: linear-gradient(180deg, rgba(129, 89, 187, 0.08), rgba(129, 89, 187, 0.02));
      color: var(--color-brand-purple);
    }

    .category-illustration--browse {
      inline-size: 104px;
      block-size: 104px;
    }

    .card__thumbnail {
      inline-size: 84px;
      block-size: 84px;
      margin-block-end: 20px;
    }

    .card__arrow {
      margin-block-start: auto;
      color: var(--color-brand-purple);
    }

    .directory-toolbar {
      display: flex;
      flex-wrap: wrap;
      gap: var(--space-20);
      justify-content: space-between;
      align-items: center;
      margin-block-end: var(--space-20);
    }

    .search-box {
      display: flex;
      align-items: center;
      gap: 10px;
      inline-size: min(100%, 480px);
      min-block-size: 46px;
      border: 1px solid var(--color-border);
      border-radius: 4px;
      background: var(--color-white);
      padding-inline: 15px;
      color: var(--color-body);
      transition: border-color var(--transition-fast), box-shadow var(--transition-fast);
    }

    .search-box:focus-within {
      border-color: var(--color-brand-purple);
      box-shadow: 0 0 0 4px rgba(129, 89, 187, 0.08);
    }

    .search-box input {
      inline-size: 100%;
      min-inline-size: 0;
      border: 0;
      background: transparent;
      color: var(--color-heading);
      outline: 0;
    }

    .search-box input::placeholder {
      color: var(--color-body);
      opacity: 1;
    }

    .directory-empty {
      margin-block-end: var(--space-20);
      padding: 20px;
      border: 1px dashed var(--color-border);
      border-radius: var(--radius-card);
      background: rgba(255, 255, 255, 0.92);
    }

    .directory-empty__title {
      margin: 0;
      font-family: var(--font-heading);
      font-size: 20px;
      font-weight: 700;
      letter-spacing: 0.06em;
      line-height: 1.2;
      text-transform: uppercase;
      color: var(--color-heading);
    }

    .directory-empty__actions {
      display: flex;
      flex-wrap: wrap;
      gap: var(--space-10);
      margin-block-start: 20px;
    }

    .directory-empty__link {
      display: inline-flex;
      align-items: center;
      color: var(--color-brand-purple);
      font-weight: 600;
      text-decoration: underline;
      text-underline-offset: 3px;
    }

    .directory-sections {
      display: grid;
      gap: var(--space-30);
    }

    .directory-section {
      scroll-margin-top: 120px;
    }

    .directory-section__header {
      margin-block-end: var(--space-20);
    }

    .directory-section__header h3 {
      font-size: 22px;
    }

    .directory-section__panel {
      overflow: visible;
      transition: max-height var(--transition-medium);
    }

    [data-js="true"] .directory-section__panel[data-collapsible="true"] {
      overflow: hidden;
    }

    .show-all-button {
      display: none;
      align-items: center;
      justify-content: center;
      margin-block-start: 20px;
      min-block-size: 36px;
      padding-inline: 15px;
      border: 1px solid var(--color-brand-purple);
      border-radius: 4px;
      color: var(--color-brand-purple);
      font-family: var(--font-heading);
      font-size: 13px;
      font-weight: 700;
      letter-spacing: 0.06em;
      line-height: 1;
      text-transform: uppercase;
      background: var(--color-white);
    }

    [data-js="true"] .show-all-button.is-visible {
      display: inline-flex;
    }

    .steps-grid,
    .why-grid {
      display: grid;
      gap: var(--space-20);
    }

    .step-card,
    .why-card {
      padding: 20px;
    }

    .step-card__number {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      inline-size: 36px;
      block-size: 36px;
      border-radius: 999px;
      background: rgba(129, 89, 187, 0.12);
      color: var(--color-brand-purple);
      font-family: var(--font-heading);
      font-size: 16px;
      font-weight: 700;
      margin-block-end: 20px;
    }

    .step-card__title,
    .why-card__title {
      font-size: 18px;
    }

    .why-card__icon {
      margin-block-end: 20px;
      color: var(--color-brand-purple);
    }

    .faq-list {
      display: grid;
      gap: 10px;
    }

    .faq-item {
      overflow: hidden;
    }

    .faq-item__button {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 20px;
      inline-size: 100%;
      padding: 20px;
      text-align: start;
      font-family: var(--font-heading);
      font-size: 18px;
      font-weight: 700;
      letter-spacing: 0.05em;
      line-height: 1.2;
      text-transform: uppercase;
      color: var(--color-heading);
    }

    .faq-item__icon {
      color: var(--color-brand-purple);
      font-size: 22px;
      line-height: 1;
      flex: none;
      transition: transform var(--transition-fast);
    }

    .faq-item__panel {
      padding-inline: 20px;
      padding-block-end: 20px;
    }

    .faq-item__panel p:first-child {
      margin-block-start: 0;
    }

    [data-js="true"] .faq-item__panel {
      overflow: hidden;
      padding-block-end: 0;
      transition: max-height var(--transition-medium), padding var(--transition-medium);
    }

    [data-js="true"] .faq-item[data-open="true"] .faq-item__panel {
      padding-block-end: 20px;
    }

    [data-js="true"] .faq-item[data-open="true"] .faq-item__icon {
      transform: rotate(45deg);
    }

    .closing-cta {
      background: var(--color-white);
    }

    .closing-cta__inner {
      display: grid;
      justify-items: center;
      gap: 10px;
      text-align: center;
      padding-block: 10px;
    }

    .site-footer {
      border-block-start: 1px solid var(--color-divider);
      background: var(--color-light);
      padding-block-start: var(--space-40);
    }

    .site-footer__inner {
      display: grid;
      grid-template-columns: minmax(220px, 0.9fr) minmax(0, 1.1fr);
      gap: var(--space-40);
      align-items: start;
    }

    .site-footer__columns {
      display: grid;
      grid-template-columns: repeat(4, minmax(0, 1fr));
      gap: var(--space-20);
    }

    .site-footer__column-title {
      font-size: 14px;
      margin-block-end: 10px;
    }

    .site-footer__links {
      list-style: none;
      margin: 0;
      padding: 0;
      display: grid;
      gap: 10px;
    }

    .site-footer__links a {
      color: var(--color-body);
    }

    .site-footer__bottom {
      border-block-start: 1px solid var(--color-divider);
      margin-block-start: var(--space-30);
      padding-block: 20px;
    }

    @media (max-width: 1080px) {
      .card-grid--featured,
      .card-grid--directory,
      .card-grid--browse,
      .steps-grid,
      .why-grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }

      .site-footer__inner {
        grid-template-columns: 1fr;
      }
    }

    @media (max-width: 820px) {
      .hero__grid {
        grid-template-columns: 1fr;
      }

      .hero__content {
        max-inline-size: none;
      }

      .hero__visual {
        order: 2;
      }

      .hero__content {
        order: 1;
      }

      .site-footer__columns {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }
    }

    @media (max-width: 640px) {
      .container,
      .container--narrow {
        inline-size: min(100% - 30px, var(--container-width));
      }

      .section {
        padding-block: var(--space-30);
      }

      .hero__actions,
      .directory-toolbar,
      .directory-empty__actions {
        flex-direction: column;
        align-items: stretch;
      }

      .button,
      .show-all-button {
        inline-size: 100%;
      }

      .card-grid--featured,
      .card-grid--directory,
      .card-grid--browse,
      .steps-grid,
      .why-grid,
      .site-footer__columns {
        grid-template-columns: 1fr;
      }

      .card__link--category {
        min-block-size: auto;
      }

      .faq-item__button {
        font-size: 16px;
      }

      .hero__subtitle {
        font-size: 14px;
      }
    }
  `
}

function renderEnhancementScript() {
  const clientStrings = JSON.stringify(locale.ui)

  return `
    (() => {
      const ui = ${clientStrings};
      const html = document.documentElement;
      html.setAttribute('data-js', 'true');

      const resultCount = document.querySelector('[data-result-count]');
      const searchInput = document.querySelector('[data-search-input]');
      const emptyState = document.querySelector('[data-empty-state]');
      const clearButtons = Array.from(document.querySelectorAll('[data-clear-search]'));
      const sections = Array.from(document.querySelectorAll('[data-directory-section]')).map((section) => ({
        section,
        wrapper: section.querySelector('[data-grid-wrapper]'),
        button: section.querySelector('[data-toggle-button]'),
        cards: Array.from(section.querySelectorAll('[data-directory-card]')),
      }));

      const formatResultCount = (count) => {
        const suffix = count === 1 ? ui.resultSingle : ui.resultPlural;
        return count + ' ' + suffix;
      };

      const getVisibleCards = (cards) => cards.filter((card) => !card.hidden);

      const getCollapsedHeight = (visibleCards) => {
        if (!visibleCards.length) {
          return 0;
        }
        const cutOffCard = visibleCards[Math.min(5, visibleCards.length - 1)];
        return cutOffCard.offsetTop + cutOffCard.offsetHeight;
      };

      const updateSectionLayout = (forceExpandAll = false) => {
        sections.forEach((item) => {
          const visibleCards = getVisibleCards(item.cards);
          const isSearching = Boolean(searchInput.value.trim());
          const isCollapsible = item.cards.length > 6;

          item.section.hidden = isSearching && visibleCards.length === 0;
          item.wrapper.dataset.collapsible = String(isCollapsible && !isSearching);

          if (!isCollapsible) {
            item.button.hidden = true;
            item.button.classList.remove('is-visible');
            item.wrapper.style.maxHeight = visibleCards.length ? item.wrapper.scrollHeight + 'px' : '0px';
            return;
          }

          const expanded = forceExpandAll || isSearching || item.section.dataset.expanded === 'true';
          const collapsedHeight = getCollapsedHeight(visibleCards);
          const targetHeight = expanded ? item.wrapper.scrollHeight : collapsedHeight;

          item.wrapper.style.maxHeight = Math.max(targetHeight, 0) + 'px';
          item.button.hidden = isSearching || visibleCards.length <= 6;
          item.button.classList.toggle('is-visible', !item.button.hidden);
          item.button.setAttribute('aria-expanded', String(expanded));
          item.button.textContent = expanded
            ? ui.showFewer
            : ui.showAllPrefix + ' ' + visibleCards.length + ' ' + ui.showAllSuffix;
        });
      };

      sections.forEach((item) => {
        if (item.cards.length <= 6) {
          item.section.dataset.expanded = 'true';
          return;
        }

        item.section.dataset.expanded = 'false';
        item.button.addEventListener('click', () => {
          const nextState = item.section.dataset.expanded !== 'true';
          item.section.dataset.expanded = String(nextState);
          updateSectionLayout();
        });
      });

      const applySearch = () => {
        const query = searchInput.value.trim().toLowerCase();
        let matches = 0;

        sections.forEach((item) => {
          item.cards.forEach((card) => {
            const haystack = card.dataset.search || '';
            const isMatch = !query || haystack.includes(query);
            card.hidden = !isMatch;
            if (isMatch) {
              matches += 1;
            }
          });
        });

        resultCount.textContent = formatResultCount(query ? matches : totalCards());
        emptyState.hidden = !query || matches > 0;
        updateSectionLayout(Boolean(query));
      };

      const totalCards = () => sections.reduce((sum, item) => sum + item.cards.length, 0);

      searchInput.addEventListener('input', applySearch);
      clearButtons.forEach((button) => {
        button.addEventListener('click', () => {
          searchInput.value = '';
          applySearch();
          searchInput.focus();
        });
      });

      const faqItems = Array.from(document.querySelectorAll('[data-faq-item]')).map((item, index) => ({
        item,
        button: item.querySelector('[data-faq-button]'),
        panel: item.querySelector('[data-faq-panel]'),
        index,
      }));

      faqItems.forEach((faq) => {
        faq.item.dataset.open = String(faq.index === 0);
      });

      const setFaqState = (activeIndex) => {
        faqItems.forEach((faq) => {
          const open = faq.index === activeIndex;
          faq.item.dataset.open = String(open);
          faq.button.setAttribute('aria-expanded', String(open));
          faq.panel.style.maxHeight = open ? faq.panel.scrollHeight + 'px' : '0px';
        });
      };

      faqItems.forEach((faq) => {
        faq.button.addEventListener('click', () => {
          const isOpen = faq.item.dataset.open === 'true';
          setFaqState(isOpen ? -1 : faq.index);
        });
      });

      setFaqState(0);
      updateSectionLayout();

      let resizeFrame = null;
      window.addEventListener('resize', () => {
        window.cancelAnimationFrame(resizeFrame);
        resizeFrame = window.requestAnimationFrame(() => {
          updateSectionLayout(Boolean(searchInput.value.trim()));
          const openIndex = faqItems.findIndex((faq) => faq.item.dataset.open === 'true');
          setFaqState(openIndex);
        });
      });
    })();
  `
}

function renderPage() {
  return `<!doctype html>
<html lang="${locale.lang}">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${escapeHtml(locale.meta.title)}</title>
    <meta name="description" content="${escapeHtml(locale.meta.description)}" />
    <link rel="canonical" href="${escapeHtml(locale.meta.canonical)}" />
    <meta property="og:title" content="${escapeHtml(locale.meta.ogTitle)}" />
    <meta property="og:description" content="${escapeHtml(locale.meta.ogDescription)}" />
    <meta property="og:url" content="${escapeHtml(locale.meta.ogUrl)}" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@700&family=Open+Sans:wght@400;600&family=Poppins:wght@700&display=swap" rel="stylesheet" />
    <style>${renderStyles()}</style>
    <script type="application/ld+json">${JSON.stringify(breadcrumbJsonLd)}</script>
  </head>
  <body>
    ${renderTopBar()}
    ${renderBreadcrumb()}
    <main>
      ${renderHero()}
      ${renderFeatured()}
      ${renderBrowse()}
      ${renderDirectory()}
      ${renderHowItWorks()}
      ${renderWhy()}
      ${renderFaq()}
      ${renderClosingCta()}
    </main>
    ${renderFooter()}
    <script>${renderEnhancementScript()}</script>
  </body>
</html>`
}

const outputPath = path.join(process.cwd(), 'generators', 'index.html')
fs.mkdirSync(path.dirname(outputPath), { recursive: true })
fs.writeFileSync(outputPath, renderPage(), 'utf8')
console.log(`Generated ${outputPath}`)
