const strings = {
  en: {
    brand: "strikingly",
    brandSuffix: "AI",
    // SEO
    pageTitle: "AI Website Generators - Build Any Site in Seconds | Strikingly",
    metaDescription: "Browse Strikingly's AI-powered website generators. Choose one for your industry, goal, or site type and create a website in seconds, no code required.",
    ogTitle: "AI Website Generators - Build Any Site in Seconds | Strikingly",
    ogDescription: "Browse Strikingly's AI-powered website generators. Choose one for your industry, goal, or site type and create a website in seconds.",
    canonicalUrl: "https://www.strikingly.com/generators",
    // Breadcrumb
    breadcrumbHome: "Strikingly",
    breadcrumbCurrent: "AI Generators",
    // Hero
    heroH1Line1: "BUILD ANY KIND OF SITE",
    heroH1Line2: "WITH AI, IN AN INSTANT",
    heroSubheadline: "Browse the right generator for what you're building, or jump straight into our AI site builder.",
    heroCtaPrimary: "START BUILDING — IT'S FREE",
    heroCtaSecondary: "BROWSE GENERATORS",
    // Featured
    featuredTitle: "FEATURED GENERATORS",
    featuredSubtitle: "A few common starting points.",
    // Browse by Category
    browseTitle: "BROWSE BY CATEGORY",
    browseSubtitle: "Jump to a category in the directory below.",
    // All Generators
    allTitle: "ALL GENERATORS",
    allSubtitle: "Sixty-plus generators, organized by what you're building.",
    searchPlaceholder: "Search generators...",
    searchLabel: "Search generators",
    searchMatch: (n) => `${n} generator${n !== 1 ? 's' : ''} match`,
    noResults: "No generators match your search.",
    clearSearch: "Clear search",
    cantFind: "Can't find it? Start with our AI builder.",
    showAll: (count) => `Show all ${count} generators`,
    showLess: "Show fewer",
    // How It Works
    howTitle: "HOW IT WORKS",
    step1Title: "PICK A GENERATOR",
    step1Desc: "Browse by category or search to find one that fits your goal.",
    step2Title: "DESCRIBE YOUR SITE",
    step2Desc: "Tell our AI builder about your business in a sentence or two.",
    step3Title: "GENERATE AND PUBLISH",
    step3Desc: "Get a fully built site in seconds. Customize anything, then go live.",
    // Why Strikingly
    whyTitle: "WHY STRIKINGLY",
    why1Title: "LIVE IN SECONDS",
    why1Desc: "Describe your site, we build it. No setup, no learning curve.",
    why2Title: "MOBILE BY DEFAULT",
    why2Desc: "Every generator produces responsive sites that work on any device.",
    why3Title: "FREE TO START",
    why3Desc: "Generate, customize, and publish without a credit card.",
    // FAQ
    faqTitle: "FREQUENTLY ASKED QUESTIONS",
    faqItems: [
      {
        q: "What is an AI site generator?",
        a: "An AI site generator is a tool that uses artificial intelligence to create a complete website from a short description of your business, project, or idea. Instead of starting with a blank canvas or a rigid template, you describe what you need and the generator produces a ready-to-customize site in seconds, complete with layout, copy, and imagery.\n\nStrikingly's generators combine this AI-powered creation workflow with an easy-to-use editor, so you can refine anything the generator produces before publishing."
      },
      {
        q: "How is a generator different from a template?",
        a: "A template gives you a fixed layout that you fill in manually. You choose the design first and then add your own content, section by section.\n\nA generator works in the opposite direction. You describe your site and the AI builds it for you, choosing the right layout, writing draft copy, and arranging sections based on your input. The result feels more like a custom site than a template you happened to pick."
      },
      {
        q: "Are these generators free to use?",
        a: "Yes. You can generate a site, customize it, and publish it to a free Strikingly subdomain at no cost. Paid plans are available if you want a custom domain, advanced features, or additional storage, but they are not required to get started."
      },
      {
        q: "What kinds of sites can I build?",
        a: "Our generators cover a wide range of use cases including business sites, portfolios, landing pages, online stores, blogs, link-in-bio pages, wedding sites, restaurant sites, and more. Each generator is tuned for its specific goal, so the AI knows which sections and features to include.\n\nIf you do not see a generator that matches your exact need, start with the AI Website Generator. It handles any type of site."
      },
      {
        q: "Can I customize what the generator produces?",
        a: "Absolutely. The generator gives you a fully built starting point, but every section, image, color, and line of text is editable in Strikingly's drag-and-drop editor. You can add or remove sections, change fonts and colors, upload your own images, and connect your own domain.\n\nThink of the generator as a fast first draft. You keep full control over the final result."
      },
      {
        q: "Do generated sites work on mobile?",
        a: "Yes. Every site created with a Strikingly generator is fully responsive by default. The layout, images, and navigation automatically adapt to phones, tablets, and desktops. You do not need to build a separate mobile version."
      }
    ],
    // Closing CTA
    closingTitle: "READY TO BUILD?",
    closingSub: "Pick a generator above, or jump straight into our AI builder.",
    closingCta: "START WITH AI BUILDER",
    // Footer
    footerDesc: "Strikingly is the easiest way to create a beautiful website.",
    footerProduct: "Product",
    footerCompany: "Company",
    footerResources: "Resources",
    footerLegal: "Legal",
    copyright: `© ${new Date().getFullYear()} Strikingly, Inc.`,
    builderPath: "/s/ai_site_builder",
  }
};

export default strings;
