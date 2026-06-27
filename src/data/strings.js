export const strings = {
  en: {
    brand: "strikingly AI",
    breadcrumb: {
      home: "Strikingly",
      current: "AI Generators",
    },
    hero: {
      h1Line1: "BUILD ANY KIND OF SITE",
      h1Line2: "WITH AI, IN AN INSTANT",
      subheadline:
        "Browse the right generator for what you're building, or jump straight into our AI site builder.",
      ctaPrimary: "START BUILDING \u2013 IT'S FREE",
      ctaSecondary: "BROWSE GENERATORS",
    },
    featured: {
      heading: "FEATURED GENERATORS",
      subheading: "A few common starting points.",
    },
    categories: {
      heading: "BROWSE BY CATEGORY",
      items: [
        {
          name: "Websites",
          slug: "websites",
          description: "AI-built business and personal sites for any goal.",
        },
        {
          name: "Landing Pages",
          slug: "landing-pages",
          description: "Single-page sites built to convert visitors fast.",
        },
        {
          name: "Portfolios",
          slug: "portfolios",
          description: "Showcase your work with a clean, focused site.",
        },
        {
          name: "Blogs",
          slug: "blogs",
          description: "Publish-ready blogs with built-in SEO basics.",
        },
        {
          name: "Online Stores",
          slug: "stores",
          description: "Sell products online with payments built in.",
        },
        {
          name: "Link-in-Bio",
          slug: "link-in-bio",
          description: "One link, all your places. Made for creators.",
        },
      ],
    },
    directory: {
      heading: "ALL GENERATORS",
      subheading:
        "Sixty-plus generators, organized by what you're building.",
      searchPlaceholder: "Search generators...",
      searchLabel: "Search generators",
      resultMatch: (n) => `${n} generator${n !== 1 ? "s" : ""} match`,
      emptyHeading: "No generators found",
      emptySubtext: "Can't find it? Start with our AI builder.",
      emptyCta: "Start with AI Builder",
      showAll: (n) => `Show all ${n} generators`,
      showLess: "Show fewer",
    },
    howItWorks: {
      heading: "HOW IT WORKS",
      steps: [
        {
          number: 1,
          title: "PICK A GENERATOR",
          description:
            "Browse by category or search to find one that fits your goal.",
        },
        {
          number: 2,
          title: "DESCRIBE YOUR SITE",
          description:
            "Tell our AI builder about your business in a sentence or two.",
        },
        {
          number: 3,
          title: "GENERATE AND PUBLISH",
          description:
            "Get a fully built site in seconds. Customize anything, then go live.",
        },
      ],
    },
    whyStrikingly: {
      heading: "WHY STRIKINGLY",
      items: [
        {
          title: "LIVE IN SECONDS",
          description:
            "Describe your site, we build it. No setup, no learning curve.",
        },
        {
          title: "MOBILE BY DEFAULT",
          description:
            "Every generator produces responsive sites that work on any device.",
        },
        {
          title: "FREE TO START",
          description:
            "Generate, customize, and publish without a credit card.",
        },
      ],
    },
    faq: {
      heading: "FREQUENTLY ASKED QUESTIONS",
      items: [
        {
          question: "What is an AI site generator?",
          answer: [
            "An AI site generator is a tool that uses artificial intelligence to build a complete website from a short description of your business or idea. Instead of choosing a template and manually editing every section, you describe what you need and the generator creates pages, layouts, and content tailored to your goal.",
            "Strikingly\u2019s AI generators go a step further by matching you with the right starting point for your industry or use case, so the output is closer to what you actually need from the start.",
          ],
        },
        {
          question: "How is a generator different from a template?",
          answer: [
            "A template is a fixed design you fill in manually. A generator uses AI to build a site around your specific description, adjusting layout, content, and structure to fit your needs. You still get full editing control afterward, but you start much further along than with a blank template.",
          ],
        },
        {
          question: "Are these generators free to use?",
          answer: [
            "Yes. You can generate a site, customize it, and publish it on a free Strikingly subdomain without entering a credit card. Paid plans are available if you need a custom domain, advanced features, or additional storage.",
          ],
        },
        {
          question: "What kinds of sites can I build?",
          answer: [
            "The generators cover a wide range of site types: business websites, landing pages, portfolios, blogs, online stores, link-in-bio pages, wedding sites, restaurant sites, and more. Each generator is tuned for a specific goal or industry, so the output matches what that type of site typically needs.",
          ],
        },
        {
          question: "Can I customize what the generator produces?",
          answer: [
            "Absolutely. After the AI generates your site, you can edit every section, swap images, change colors, adjust fonts, add pages, and rearrange layouts using Strikingly\u2019s visual editor. The generated site is a starting point, not a final product\u2014you have full control.",
          ],
        },
        {
          question: "Do generated sites work on mobile?",
          answer: [
            "Yes. Every site created with a Strikingly generator is fully responsive, meaning it automatically adapts to phones, tablets, and desktops. You do not need to build a separate mobile version.",
          ],
        },
      ],
    },
    closingCta: {
      heading: "READY TO BUILD?",
      sub: "Pick a generator above, or jump straight into our AI builder.",
      button: "START WITH AI BUILDER",
    },
    footer: {
      copyright: `\u00A9 ${new Date().getFullYear()} Strikingly, Inc.`,
      columns: [
        {
          title: "Product",
          links: [
            { label: "Templates", href: "/templates" },
            { label: "Pricing", href: "/pricing" },
            { label: "Features", href: "/about" },
          ],
        },
        {
          title: "Company",
          links: [
            { label: "About", href: "/about" },
            { label: "Blog", href: "/blog" },
            { label: "Careers", href: "/about" },
          ],
        },
        {
          title: "Support",
          links: [
            { label: "Help Center", href: "/support" },
            { label: "Contact Us", href: "/support" },
            { label: "Status", href: "/support" },
          ],
        },
        {
          title: "Legal",
          links: [
            { label: "Terms", href: "/terms" },
            { label: "Privacy", href: "/privacy" },
          ],
        },
      ],
    },
  },
};
