/**
 * i18n-ready strings object.
 * To add a new locale, duplicate strings.en as strings.es, strings.ja, etc.
 */
export const strings = {
  en: {
    // Top bar
    logoText: 'strikingly AI',

    // Breadcrumb
    breadcrumbHome: 'Strikingly',
    breadcrumbCurrent: 'AI Generators',

    // Hero
    heroH1Line1: 'BUILD ANY KIND OF SITE',
    heroH1Line2: 'WITH AI, IN AN INSTANT',
    heroSubheadline: 'Browse the right generator for what you\'re building, or jump straight into our AI site builder.',
    heroCTAPrimary: 'START BUILDING — IT\'S FREE',
    heroCTASecondary: 'BROWSE GENERATORS',

    // Featured Generators
    featuredHeading: 'FEATURED GENERATORS',
    featuredSubheading: 'A few common starting points.',

    // Browse by Category
    browseHeading: 'BROWSE BY CATEGORY',
    browseSubheading: 'Jump to the section that fits what you\'re building.',

    // All Generators
    allHeading: 'ALL GENERATORS',
    allSubheading: 'Sixty-plus generators, organized by what you\'re building.',
    searchPlaceholder: 'Search generators...',
    searchResultCount: (n) => `${n} generator${n !== 1 ? 's' : ''} match`,
    searchNoResults: 'No generators match your search.',
    searchClear: 'Clear search',
    searchBuilderLink: 'Can\'t find it? Start with our AI builder.',
    showAll: (n) => `Show all ${n} generators`,
    showLess: 'Show less',

    // How It Works
    howHeading: 'HOW IT WORKS',
    howStep1Title: 'PICK A GENERATOR',
    howStep1Body: 'Browse by category or search to find one that fits your goal.',
    howStep2Title: 'DESCRIBE YOUR SITE',
    howStep2Body: 'Tell our AI builder about your business in a sentence or two.',
    howStep3Title: 'GENERATE AND PUBLISH',
    howStep3Body: 'Get a fully built site in seconds. Customize anything, then go live.',

    // Why Strikingly
    whyHeading: 'WHY STRIKINGLY',
    whyClaim1: 'LIVE IN SECONDS',
    whyBody1: 'Describe your site, we build it. No setup, no learning curve.',
    whyClaim2: 'MOBILE BY DEFAULT',
    whyBody2: 'Every generator produces responsive sites that work on any device.',
    whyClaim3: 'FREE TO START',
    whyBody3: 'Generate, customize, and publish without a credit card.',

    // FAQ
    faqHeading: 'FREQUENTLY ASKED QUESTIONS',
    faqItems: [
      {
        question: 'What is an AI site generator?',
        answer: 'An AI site generator is a tool that builds a complete website for you based on a short description of your business, project, or goal. Instead of dragging and dropping elements or writing code, you describe what you need and the AI assembles a ready-to-publish site in seconds.\n\nStrikingly\'s generators go one step further by combining a focused starting point — your industry, site type, or goal — with our AI builder, so the result is tailored from the very first page.',
      },
      {
        question: 'How is a generator different from a template?',
        answer: 'A template is a static design you fill in manually. A generator uses AI to produce a site that already reflects your specific context — your business name, your industry, your content — so you spend less time replacing placeholder text and more time customizing the details that matter.\n\nGenerators also adapt the structure of the site to your goal. A landing page generator produces a single focused page; a portfolio generator produces a multi-section showcase. Templates are one-size-fits-all; generators are purpose-built.',
      },
      {
        question: 'Are these generators free to use?',
        answer: 'Yes. You can generate, preview, and customize your site without entering a credit card. Strikingly offers a free plan that lets you publish a site on a Strikingly subdomain. Paid plans unlock custom domains, additional pages, and advanced features.\n\nEvery generator on this page starts you on the free plan by default.',
      },
      {
        question: 'What kinds of sites can I build?',
        answer: 'You can build almost any kind of site: business websites, personal portfolios, online stores, blogs, landing pages, event pages, restaurant sites, link-in-bio pages, and more. The directory on this page organizes generators by category so you can find the right starting point quickly.\n\nIf you don\'t see a generator that matches your exact need, the AI Site Builder at the top of the page can handle any brief you give it.',
      },
      {
        question: 'Can I customize what the generator produces?',
        answer: 'Absolutely. Every generated site opens directly in Strikingly\'s editor, where you can change colors, fonts, images, text, layout, and more. The generator gives you a strong starting point; the editor gives you full control over the final result.\n\nYou can also add new sections, connect a custom domain, set up a store, and configure SEO settings — all without writing a line of code.',
      },
      {
        question: 'Do generated sites work on mobile?',
        answer: 'Yes. Every site produced by a Strikingly generator is fully responsive by default. The layout, typography, and images automatically adapt to any screen size — phone, tablet, or desktop — without any extra work on your part.\n\nYou can preview the mobile version of your site at any time inside the Strikingly editor before you publish.',
      },
    ],

    // Closing CTA
    closingHeading: 'READY TO BUILD?',
    closingSub: 'Pick a generator above, or jump straight into our AI builder.',
    closingCTA: 'START WITH AI BUILDER',

    // Footer
    footerCopyright: `© ${new Date().getFullYear()} Strikingly. All rights reserved.`,
  },
};

export default strings.en;
