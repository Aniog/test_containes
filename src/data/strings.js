export const strings = {
  en: {
    // Top bar
    logo: "strikingly AI",

    // Breadcrumb
    breadcrumbHome: "Strikingly",
    breadcrumbCurrent: "AI Generators",

    // Hero
    heroH1Line1: "BUILD ANY KIND OF SITE",
    heroH1Line2: "WITH AI, IN AN INSTANT",
    heroSubheadline: "Browse the right generator for what you're building, or jump straight into our AI site builder.",
    heroCtaPrimary: "START BUILDING - IT'S FREE",
    heroCtaSecondary: "BROWSE GENERATORS",

    // Featured
    featuredHeading: "FEATURED GENERATORS",
    featuredSubheading: "A few common starting points.",

    // Browse by Category
    browseHeading: "BROWSE BY CATEGORY",
    categories: [
      { id: "websites", name: "WEBSITES", description: "AI-built business and personal sites for any goal.", slug: "#websites" },
      { id: "landing-pages", name: "LANDING PAGES", description: "Single-page sites built to convert visitors fast.", slug: "#landing-pages" },
      { id: "portfolios", name: "PORTFOLIOS", description: "Showcase your work with a clean, focused site.", slug: "#portfolios" },
      { id: "blogs", name: "BLOGS", description: "Publish-ready blogs with built-in SEO basics.", slug: "#blogs" },
      { id: "stores", name: "ONLINE STORES", description: "Sell products online with payments built in.", slug: "#stores" },
      { id: "link-in-bio", name: "LINK-IN-BIO", description: "One link, all your places. Made for creators.", slug: "#link-in-bio" },
    ],

    // All Generators
    allGeneratorsHeading: "ALL GENERATORS",
    allGeneratorsSubheading: "Sixty-plus generators, organized by what you're building.",
    searchPlaceholder: "Search generators...",
    searchLabel: "Search generators",
    searchResultsCount: (count) => `${count} generator${count !== 1 ? "s" : ""} match`,
    noResultsTitle: "No generators found",
    noResultsDescription: "Can't find it? Start with our AI builder.",
    noResultsCta: "Start with AI builder",
    clearSearch: "Clear search",
    showAll: (count) => `Show all ${count} generators`,

    // How It Works
    howItWorksHeading: "HOW IT WORKS",
    steps: [
      { number: 1, title: "PICK A GENERATOR", description: "Browse by category or search to find one that fits your goal." },
      { number: 2, title: "DESCRIBE YOUR SITE", description: "Tell our AI builder about your business in a sentence or two." },
      { number: 3, title: "GENERATE AND PUBLISH", description: "Get a fully built site in seconds. Customize anything, then go live." },
    ],

    // Why Strikingly
    whyHeading: "WHY STRIKINGLY",
    benefits: [
      { title: "LIVE IN SECONDS", description: "Describe your site, we build it. No setup, no learning curve." },
      { title: "MOBILE BY DEFAULT", description: "Every generator produces responsive sites that work on any device." },
      { title: "FREE TO START", description: "Generate, customize, and publish without a credit card." },
    ],

    // FAQ
    faqHeading: "FREQUENTLY ASKED QUESTIONS",
    faqs: [
      {
        question: "What is an AI site generator?",
        answer: "An AI site generator is a tool that uses artificial intelligence to automatically create a complete website based on a short description you provide. Instead of choosing from pre-made templates and manually filling in content, you simply tell the AI what kind of site you need — for example, 'a photography portfolio for wedding shoots' — and it generates a fully structured, designed, and content-ready site in seconds.\n\nStrikingly's AI generators combine natural language understanding with web design best practices to produce sites that look professional, load fast, and work on every device.",
      },
      {
        question: "How is a generator different from a template?",
        answer: "A template is a static design that you customize by replacing placeholder text and images. You still need to decide layout, pick colors, and write all the content yourself. A generator, on the other hand, creates a unique site tailored to your specific description — including relevant copy, images, and structure — so you start with a finished site rather than a blank canvas.\n\nThink of a template as a fill-in-the-blank form and a generator as a first draft written just for you.",
      },
      {
        question: "Are these generators free to use?",
        answer: "Yes. Every generator on this page is free to start. You can generate a site, customize it, and publish it on a Strikingly subdomain without entering a credit card. If you want a custom domain, e-commerce features, or advanced analytics, you can upgrade to a paid plan at any time — but the core generator experience is always free.",
      },
      {
        question: "What kinds of sites can I build?",
        answer: "You can build almost any type of website. Our generators cover business sites, personal portfolios, landing pages, blogs, online stores, event pages, link-in-bio pages, and many more. Each generator is optimized for a specific use case, so the output includes the right sections, calls to action, and design patterns for that type of site.\n\nIf you don't see a generator that exactly matches your need, our general AI Website Builder can handle any request.",
      },
      {
        question: "Can I customize what the generator produces?",
        answer: "Absolutely. The generator gives you a complete first draft, but everything is editable. You can change text, swap images, rearrange sections, adjust colors and fonts, add or remove pages, and integrate third-party tools. The AI gets you to 80% in seconds — the remaining 20% is yours to perfect.",
      },
      {
        question: "Do generated sites work on mobile?",
        answer: "Yes. Every site produced by our generators is fully responsive by default. The AI designs for mobile first, then adapts the layout for tablets and desktops. You don't need to do anything special to make your site look great on a phone — it just works.",
      },
    ],

    // Closing CTA
    closingHeading: "READY TO BUILD?",
    closingSub: "Pick a generator above, or jump straight into our AI builder.",
    closingCta: "START WITH AI BUILDER",

    // Footer
    footerProduct: "Product",
    footerFeatures: "Features",
    footerPricing: "Pricing",
    footerTemplates: "Templates",
    footerCompany: "Company",
    footerAbout: "About",
    footerBlog: "Blog",
    footerCareers: "Careers",
    footerSupport: "Support",
    footerHelp: "Help Center",
    footerContact: "Contact Us",
    footerCommunity: "Community",
    footerLegal: "Legal",
    footerTerms: "Terms of Service",
    footerPrivacy: "Privacy Policy",
    footerCopyright: (year) => `© ${year} Strikingly. All rights reserved.`,
  },
};

export default strings;
