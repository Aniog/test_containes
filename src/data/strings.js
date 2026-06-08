export const strings = {
  en: {
    breadcrumb: {
      home: "Strikingly",
      current: "AI Generators",
    },
    hero: {
      h1Line1: "BUILD ANY KIND OF SITE",
      h1Line2: "WITH AI, IN AN INSTANT",
      sub: "Browse the right generator for what you\u2019re building, or jump straight into our AI site builder.",
      ctaPrimary: "START BUILDING \u2014 IT\u2019S FREE",
      ctaSecondary: "BROWSE GENERATORS",
    },
    featured: {
      heading: "FEATURED GENERATORS",
      sub: "A few common starting points.",
    },
    browseCategory: {
      heading: "BROWSE BY CATEGORY",
    },
    allGenerators: {
      heading: "ALL GENERATORS",
      sub: "Sixty-plus generators, organized by what you\u2019re building.",
      searchPlaceholder: "Search generators...",
      matchCount: (n) => `${n} generator${n === 1 ? "" : "s"} match`,
      showAll: (n) => `Show all ${n} generators`,
      showLess: "Show less",
      noResults: "No generators match your search.",
      clearSearch: "Clear search",
      cantFind: "Can\u2019t find it?",
      startWithAI: "Start with our AI builder.",
    },
    howItWorks: {
      heading: "HOW IT WORKS",
      steps: [
        { title: "PICK A GENERATOR", desc: "Browse by category or search to find one that fits your goal." },
        { title: "DESCRIBE YOUR SITE", desc: "Tell our AI builder about your business in a sentence or two." },
        { title: "GENERATE AND PUBLISH", desc: "Get a fully built site in seconds. Customize anything, then go live." },
      ],
    },
    whyStrikingly: {
      heading: "WHY STRIKINGLY",
      items: [
        { title: "LIVE IN SECONDS", desc: "Describe your site, we build it. No setup, no learning curve." },
        { title: "MOBILE BY DEFAULT", desc: "Every generator produces responsive sites that work on any device." },
        { title: "FREE TO START", desc: "Generate, customize, and publish without a credit card." },
      ],
    },
    faq: {
      heading: "FREQUENTLY ASKED QUESTIONS",
      items: [
        {
          q: "What is an AI site generator?",
          a: "An AI site generator is a tool that creates a complete website from a short description of your business or project. Instead of choosing a template and filling in content manually, you describe what you need and the AI builds the pages, layout, and copy for you in seconds. You can then customize anything before publishing.",
        },
        {
          q: "How is a generator different from a template?",
          a: "A template is a fixed starting point that you fill in yourself. A generator creates a unique site tailored to your description every time you use it. Templates require you to replace placeholder content; generators produce real content based on what you tell them. The result is a site that feels custom-made rather than cookie-cutter.",
        },
        {
          q: "Are these generators free to use?",
          a: "Yes. You can generate, preview, and customize your site without paying anything or entering a credit card. Strikingly offers free plans that let you publish a live site at no cost. Premium features like custom domains and advanced analytics are available on paid plans if you need them later.",
        },
        {
          q: "What kinds of sites can I build?",
          a: "Anything from a business website or portfolio to a landing page, online store, blog, or link-in-bio page. Our generators cover dozens of industries and use cases. If you don\u2019t see an exact match, the general AI site builder can handle virtually any type of site you describe.",
        },
        {
          q: "Can I customize what the generator produces?",
          a: "Absolutely. The generated site is a starting point, not a final product. You can edit text, swap images, rearrange sections, change colors, add new pages, and connect your own domain. The drag-and-drop editor makes it easy to adjust anything without touching code.",
        },
        {
          q: "Do generated sites work on mobile?",
          a: "Every site produced by our generators is responsive by default. That means it automatically adapts to phones, tablets, and desktops. You don\u2019t need to build a separate mobile version or toggle any settings \u2014 mobile optimization is built into every generated layout.",
        },
      ],
    },
    closingCTA: {
      heading: "READY TO BUILD?",
      sub: "Pick a generator above, or jump straight into our AI builder.",
      cta: "START WITH AI BUILDER",
    },
    footer: {
      copyright: `\u00A9 ${new Date().getFullYear()} Strikingly. All rights reserved.`,
    },
  },
}
