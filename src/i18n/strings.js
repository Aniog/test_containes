// Single source of user-visible strings. Adding a new locale is a one-file change:
// duplicate the object as `strings.es` / `strings.ja` and switch by route.
// Keys are intentionally stable so copy can be refactored without renames.

export const strings = {
  en: {
    brand: {
      logoText: "strikingly",
      logoSuffix: "AI",
    },
    breadcrumb: {
      navLabel: "Breadcrumb",
      home: "Strikingly",
      current: "AI Generators",
      separator: ">",
    },
    hero: {
      h1Line1: "BUILD ANY KIND OF SITE",
      h1Line2: "WITH AI, IN AN INSTANT",
      sub: "Browse the right generator for what you're building, or jump straight into our AI site builder.",
      primaryCta: "START BUILDING - IT'S FREE",
      secondaryCta: "BROWSE GENERATORS",
    },
    featured: {
      heading: "FEATURED GENERATORS",
      subheading: "A few common starting points.",
    },
    browseByCategory: {
      heading: "BROWSE BY CATEGORY",
    },
    allGenerators: {
      heading: "ALL GENERATORS",
      subheading: "Sixty-plus generators, organized by what you're building.",
      searchLabel: "Search generators",
      searchPlaceholder: "Search generators...",
      resultCount: (n) => `${n} generator${n === 1 ? "" : "s"} match`,
      resultCountZero: "0 generators match",
      emptyTitle: "No generators match your search.",
      emptyClear: "Clear search",
      emptyCtaLabel: "Can't find it? Start with our AI builder.",
      emptyCtaText: "Can't find it? Start with our AI builder.",
      showAll: (n) => `Show all ${n} generators`,
      showFewer: "Show fewer",
    },
    howItWorks: {
      heading: "HOW IT WORKS",
      step1Title: "PICK A GENERATOR",
      step1Body: "Browse by category or search to find one that fits your goal.",
      step2Title: "DESCRIBE YOUR SITE",
      step2Body: "Tell our AI builder about your business in a sentence or two.",
      step3Title: "GENERATE AND PUBLISH",
      step3Body: "Get a fully built site in seconds. Customize anything, then go live.",
    },
    why: {
      heading: "WHY STRIKINGLY",
      claim1: "LIVE IN SECONDS",
      body1: "Describe your site, we build it. No setup, no learning curve.",
      claim2: "MOBILE BY DEFAULT",
      body2: "Every generator produces responsive sites that work on any device.",
      claim3: "FREE TO START",
      body3: "Generate, customize, and publish without a credit card.",
    },
    faq: {
      heading: "FREQUENTLY ASKED QUESTIONS",
      items: [
        {
          q: "What is an AI site generator?",
          a: "An AI site generator is a guided tool that builds a complete website from a short description. You pick the type of site you need — a portfolio, an online store, a wedding page — and answer a few questions. Strikingly's generator then assembles layouts, copy, and images into a real, editable website, ready to publish.",
        },
        {
          q: "How is a generator different from a template?",
          a: "A template is a fixed design you fill in yourself. A generator starts from your goal and assembles the structure, content, and pages around it. You can still customize every section afterwards, but you skip the blank-canvas step.",
        },
        {
          q: "Are these generators free to use?",
          a: "Yes. You can generate, customize, and publish a site on Strikingly's free plan. A paid plan is only needed if you want to connect a custom domain, sell products, or unlock advanced features.",
        },
        {
          q: "What kinds of sites can I build?",
          a: "Generators cover the most common site types — business websites, landing pages, portfolios, blogs, online stores, and link-in-bio pages. Each category in the directory above is a different starting point.",
        },
        {
          q: "Can I customize what the generator produces?",
          a: "Absolutely. Every section, color, font, and image is editable after generation. You can swap in your own copy, photos, and brand colors, or rearrange pages without starting over.",
        },
        {
          q: "Do generated sites work on mobile?",
          a: "Yes. Every generator outputs a responsive site that adapts to phones, tablets, and desktops. You don't need a separate mobile build.",
        },
      ],
    },
    closing: {
      heading: "READY TO BUILD?",
      sub: "Pick a generator above, or jump straight into our AI builder.",
      cta: "START WITH AI BUILDER",
    },
    footer: {
      tagline: "The AI website builder for anyone with something to say.",
      product: "Product",
      company: "Company",
      resources: "Resources",
      legal: "Legal",
      copyright: "Strikingly. All rights reserved.",
    },
  },
}

export default strings
