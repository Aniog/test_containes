// All user-visible copy lives here so adding a locale is a one-file change.
// Add strings.es / strings.ja with the same keys and import via a runtime switch.

export const strings = {
  en: {
    // Top bar
    logoText: "Strikingly",
    logoSuffix: "AI",

    // Breadcrumb
    breadcrumbHome: "Strikingly",
    breadcrumbCurrent: "AI Generators",

    // Hero
    heroH1Line1: "BUILD ANY KIND OF SITE",
    heroH1Line2: "WITH AI, IN AN INSTANT",
    heroSub: "Browse the right generator for what you're building, or jump straight into our AI site builder.",
    heroPrimary: "START BUILDING - IT'S FREE",
    heroSecondary: "BROWSE GENERATORS",

    // Featured
    featuredEyebrow: "FEATURED GENERATORS",
    featuredSub: "A few common starting points.",

    // Browse by Category
    categoriesEyebrow: "BROWSE BY CATEGORY",
    categoriesSub: "Jump straight to the type of site you want to build.",

    // All Generators
    allEyebrow: "ALL GENERATORS",
    allSub: "Sixty-plus generators, organized by what you're building.",
    searchLabel: "Search generators",
    searchPlaceholder: "Search generators...",
    searchCountTpl: (n) => `${n} generator${n === 1 ? "" : "s"} match`,
    searchEmptyTitle: "No generators match your search.",
    searchEmptyClear: "Clear search",
    searchEmptyFallback: "Can't find it? Start with our AI builder.",
    showAllTpl: (n) => `Show all ${n} generators`,
    showLess: "Show fewer",

    // Category names + descriptions (used in subsection headings + browse-by-category cards)
    catWebsites: "Websites",
    catWebsitesDesc: "AI-built business and personal sites for any goal.",
    catLandingPages: "Landing Pages",
    catLandingPagesDesc: "Single-page sites built to convert visitors fast.",
    catPortfolios: "Portfolios",
    catPortfoliosDesc: "Showcase your work with a clean, focused site.",
    catBlogs: "Blogs",
    catBlogsDesc: "Publish-ready blogs with built-in SEO basics.",
    catStores: "Online Stores",
    catStoresDesc: "Sell products online with payments built in.",
    catLinkInBio: "Link-in-Bio",
    catLinkInBioDesc: "One link, all your places. Made for creators.",

    // Featured tile category tag labels (short, ghost-tag form)
    tagWebsite: "Website",
    tagLandingPage: "Landing Page",
    tagPortfolio: "Portfolio",
    tagBlog: "Blog",
    tagStore: "Store",
    tagLinkInBio: "Link-in-Bio",

    // How it works
    howEyebrow: "HOW IT WORKS",
    howStep1Title: "PICK A GENERATOR",
    howStep1Body: "Browse by category or search to find one that fits your goal.",
    howStep2Title: "DESCRIBE YOUR SITE",
    howStep2Body: "Tell our AI builder about your business in a sentence or two.",
    howStep3Title: "GENERATE AND PUBLISH",
    howStep3Body: "Get a fully built site in seconds. Customize anything, then go live.",

    // Why Strikingly
    whyEyebrow: "WHY STRIKINGLY",
    why1Title: "LIVE IN SECONDS",
    why1Body: "Describe your site, we build it. No setup, no learning curve.",
    why2Title: "MOBILE BY DEFAULT",
    why2Body: "Every generator produces responsive sites that work on any device.",
    why3Title: "FREE TO START",
    why3Body: "Generate, customize, and publish without a credit card.",

    // FAQ
    faqEyebrow: "FREQUENTLY ASKED QUESTIONS",
    faqItems: [
      {
        q: "What is an AI site generator?",
        a: [
          "An AI site generator is a guided starting point that asks for a few details about your business, then produces a complete website draft in seconds. Each generator is tuned for a specific kind of site — like a portfolio, an online store, or a landing page — so the structure, layout, and copy already match what you're trying to build.",
          "You can edit anything the generator produces. Treat the draft as a fast first version, then customize the pages, text, and images to fit your brand."
        ],
      },
      {
        q: "How is a generator different from a template?",
        a: [
          "A template gives you a fixed design you fill in yourself. A generator builds the site for you based on what you tell it about your business. You still get a starting layout, but the pages, sections, and copy are written around the details you provide.",
          "If you already know exactly what you want and prefer to drag and drop a finished design, templates are a great option. Generators are best when you want a working draft in under a minute."
        ],
      },
      {
        q: "Are these generators free to use?",
        a: [
          "Yes. You can browse any generator, run it, and publish a site without a credit card. Free sites include a Strikingly-branded footer. Removing the footer or connecting a custom domain is available on a paid plan."
        ],
      },
      {
        q: "What kinds of sites can I build?",
        a: [
          "Anything that runs on the web. The hub groups generators by what you're building — full websites, landing pages, portfolios, blogs, online stores, and link-in-bio pages — and many generators are tuned for specific audiences like photographers, restaurants, and creators.",
          "Pick the one that matches your goal most closely. If nothing fits exactly, you can always start from the AI Site Builder and describe your idea in a sentence."
        ],
      },
      {
        q: "Can I customize what the generator produces?",
        a: [
          "Yes. Every generator hands off to the same editor, where you can change layouts, swap sections, edit text and images, add new pages, and connect a domain. The generator just gets you past the blank-page step."
        ],
      },
      {
        q: "Do generated sites work on mobile?",
        a: [
          "Yes. Every site Strikingly generates is responsive by default. Layouts adapt to phones, tablets, and desktops, and you can preview each breakpoint in the editor before you publish."
        ],
      },
    ],

    // Closing CTA
    closingHeadline: "READY TO BUILD?",
    closingSub: "Pick a generator above, or jump straight into our AI builder.",
    closingCta: "START WITH AI BUILDER",

    // Footer
    footerLogoTagline: "Build a beautiful website in minutes.",
    footerColProducts: "Product",
    footerColResources: "Resources",
    footerColCompany: "Company",
    footerColLegal: "Legal",
    footerLinkAbout: "About",
    footerLinkPricing: "Pricing",
    footerLinkTemplates: "Templates",
    footerLinkSupport: "Support",
    footerLinkBlog: "Blog",
    footerLinkTerms: "Terms",
    footerLinkPrivacy: "Privacy",
    footerCopyright: (year) => `© ${year} Strikingly. All rights reserved.`,
    localeEnglish: "English",
  },
};

export function t(key, locale = "en") {
  const dict = strings[locale] || strings.en;
  const value = dict[key];
  if (value === undefined) {
    if (typeof console !== "undefined") {
      console.warn(`[i18n] missing key "${key}" for locale "${locale}"`);
    }
    return key;
  }
  return value;
}