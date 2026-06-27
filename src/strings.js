// All user-visible strings for the /generators hub page live here.
// To add a new locale, drop a strings.<code> object below. The page reads
// from strings.en by default; add a locale switcher later if needed.

export const strings = {
  en: {
    brand: {
      logo: "Strikingly",
      logoAi: "AI",
    },
    breadcrumb: {
      home: "Strikingly",
      current: "AI Generators",
    },
    hero: {
      h1Line1: "Build any kind of site",
      h1Line2: "with AI, in an instant",
      sub: "Browse the right generator for what you're building, or jump straight into our AI site builder.",
      primaryCta: "Start building - it's free",
      secondaryCta: "Browse generators",
      artLabel: "Illustration of a website mockup",
    },
    featured: {
      heading: "Featured generators",
      sub: "A few common starting points.",
      cards: [
        { name: "AI Website Generator", desc: "Describe your business, get a full site.", cat: "Website" },
        { name: "Free Portfolio Generator", desc: "For creatives, in minutes, no fee.", cat: "Portfolio" },
        { name: "AI Landing Page Maker", desc: "One-page sites built to convert.", cat: "Landing Page" },
        { name: "Online Store Builder", desc: "Start selling without writing code.", cat: "Store" },
        { name: "Link-in-Bio Generator", desc: "One link for all your channels.", cat: "Link-in-Bio" },
        { name: "One-Page Website Builder", desc: "Simple sites, single scroll.", cat: "Website" },
        { name: "Wedding Website Generator", desc: "Share your day with guests.", cat: "Website" },
        { name: "Restaurant Website Builder", desc: "Menu, hours, reservations, done.", cat: "Website" },
        { name: "Blog Generator for Beginners", desc: "Publish-ready in minutes.", cat: "Blog" },
      ],
    },
    categories: {
      heading: "Browse by category",
      sub: "Pick a starting point. Each category opens its own section below.",
      items: [
        {
          slug: "websites",
          name: "Websites",
          desc: "AI-built business and personal sites for any goal.",
        },
        {
          slug: "landing-pages",
          name: "Landing pages",
          desc: "Single-page sites built to convert visitors fast.",
        },
        {
          slug: "portfolios",
          name: "Portfolios",
          desc: "Showcase your work with a clean, focused site.",
        },
        {
          slug: "blogs",
          name: "Blogs",
          desc: "Publish-ready blogs with built-in SEO basics.",
        },
        {
          slug: "stores",
          name: "Online stores",
          desc: "Sell products online with payments built in.",
        },
        {
          slug: "link-in-bio",
          name: "Link-in-bio",
          desc: "One link, all your places. Made for creators.",
        },
      ],
    },
    directory: {
      heading: "All generators",
      sub: "Sixty-plus generators, organized by what you're building.",
      searchLabel: "Search generators",
      searchPlaceholder: "Search generators...",
      countOne: "{n} generator matches",
      countMany: "{n} generators match",
      showAll: "Show all {n} generators",
      showLess: "Show fewer",
      emptyTitle: "No generators match your search.",
      emptyCta: "Clear search",
      emptyHint: "Can't find it? Start with our AI builder.",
    },
    subsections: [
      {
        id: "websites",
        title: "Websites",
        sub: "Personal and business websites for any goal.",
      },
      {
        id: "landing-pages",
        title: "Landing pages",
        sub: "Single-page sites that convert visitors.",
      },
      {
        id: "portfolios",
        title: "Portfolios",
        sub: "Focused sites that put your work in the spotlight.",
      },
      {
        id: "blogs",
        title: "Blogs",
        sub: "Publish-ready blogs with SEO basics built in.",
      },
      {
        id: "stores",
        title: "Online stores",
        sub: "Sell online with payments and shipping handled.",
      },
      {
        id: "link-in-bio",
        title: "Link-in-bio",
        sub: "A single page that holds every place you show up.",
      },
    ],
    how: {
      heading: "How it works",
      sub: "Three steps from idea to a live site.",
      steps: [
        {
          title: "Pick a generator",
          body: "Browse by category or search to find one that fits your goal.",
        },
        {
          title: "Describe your site",
          body: "Tell our AI builder about your business in a sentence or two.",
        },
        {
          title: "Generate and publish",
          body: "Get a fully built site in seconds. Customize anything, then go live.",
        },
      ],
    },
    why: {
      heading: "Why strikingly",
      sub: "Built to get you from idea to a live site as fast as possible.",
      items: [
        {
          title: "Live in seconds",
          body: "Describe your site, we build it. No setup, no learning curve.",
        },
        {
          title: "Mobile by default",
          body: "Every generator produces responsive sites that work on any device.",
        },
        {
          title: "Free to start",
          body: "Generate, customize, and publish without a credit card.",
        },
      ],
    },
    faq: {
      heading: "Frequently asked questions",
      sub: "Quick answers about how generators work.",
      items: [
        {
          q: "What is an AI site generator?",
          a: [
            "An AI site generator is a guided starting point for a specific kind of website. Each generator pairs a few targeted prompts with a tailored layout, so instead of describing your business from scratch you tell the builder what type of site you want and it scaffolds the rest.",
            "Generators are useful when you know the shape of the site you want - a portfolio, a one-page restaurant site, a wedding page - and you want the AI to start with the right defaults instead of an empty page.",
          ],
        },
        {
          q: "How is a generator different from a template?",
          a: [
            "A template gives you a finished design you fill in by hand. A generator uses AI to build the site from a short description, so the content and structure adapt to what you tell it. The result still uses the same editor, so you can swap layouts, sections, and copy after generation.",
          ],
        },
        {
          q: "Are these generators free to use?",
          a: [
            "Yes. You can run any generator, customize the result, and publish a site on a free plan. If you want a custom domain, advanced analytics, or extra storage, you can upgrade later.",
          ],
        },
        {
          q: "What kinds of sites can I build?",
          a: [
            "Generators cover the most common site types: business websites, landing pages, portfolios, blogs, online stores, and link-in-bio pages. Each category on this page is a jumping-off point with multiple generator variations inside.",
          ],
        },
        {
          q: "Can I customize what the generator produces?",
          a: [
            "Yes. After a generator runs, the result is a normal Strikingly site. You can edit text, swap sections, add new pages, change colors, and adjust layouts using the same tools you would use on any other site.",
          ],
        },
        {
          q: "Do generated sites work on mobile?",
          a: [
            "Every site produced by a generator is responsive by default. Layouts adapt to phone, tablet, and desktop sizes automatically, and you can preview each breakpoint before publishing.",
          ],
        },
      ],
    },
    closing: {
      heading: "Ready to build?",
      sub: "Pick a generator above, or jump straight into our AI builder.",
      cta: "Start with AI builder",
    },
    footer: {
      tagline: "AI-powered websites for anyone with something to say.",
      cols: [
        {
          title: "Product",
          links: [
            { label: "Templates", href: "/templates" },
            { label: "AI Builder", href: "/s/ai_site_builder" },
            { label: "Pricing", href: "/pricing" },
            { label: "Generators", href: "/generators" },
          ],
        },
        {
          title: "Company",
          links: [
            { label: "About", href: "/about" },
            { label: "Blog", href: "/blog" },
            { label: "Careers", href: "/about" },
            { label: "Press", href: "/about" },
          ],
        },
        {
          title: "Support",
          links: [
            { label: "Help center", href: "/support" },
            { label: "Contact", href: "/support" },
            { label: "Status", href: "/support" },
            { label: "Community", href: "/blog" },
          ],
        },
        {
          title: "Legal",
          links: [
            { label: "Terms of service", href: "/terms" },
            { label: "Privacy policy", href: "/privacy" },
            { label: "Cookies", href: "/privacy" },
            { label: "GDPR", href: "/privacy" },
          ],
        },
      ],
      copyright: "\u00A9 Strikingly. All rights reserved.",
    },
  },
};

export function t(path, locale = "en") {
  const segs = path.split(".");
  let cur = strings[locale];
  for (const s of segs) {
    if (cur == null) return path;
    cur = cur[s];
  }
  return cur;
}