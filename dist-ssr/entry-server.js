import { useEffect, createElement } from "react";
import { renderToString } from "react-dom/server";
import { jsx, jsxs } from "react/jsx-runtime";
const strings = {
  en: {
    meta: {
      title: "AI Website Generators - Build Any Site in Seconds | Strikingly",
      description: "Browse Strikingly's AI-powered website generators. Choose one for your industry, goal, or site type and create a website in seconds, no code required.",
      ogTitle: "AI Website Generators - Build Any Site in Seconds | Strikingly",
      ogDescription: "Browse Strikingly's AI-powered website generators. Choose one for your industry, goal, or site type and create a website in seconds.",
      ogUrl: "https://www.strikingly.com/generators",
      canonical: "https://www.strikingly.com/generators",
      locale: "en"
    },
    topBar: {
      logo: "strikingly AI"
    },
    breadcrumb: {
      home: "Strikingly",
      current: "AI Generators"
    },
    hero: {
      line1: "BUILD ANY KIND OF SITE",
      line2: "WITH AI, IN AN INSTANT",
      sub: "Browse the right generator for what you're building, or jump straight into our AI site builder.",
      primaryCta: "START BUILDING - IT'S FREE",
      secondaryCta: "BROWSE GENERATORS"
    },
    featured: {
      heading: "FEATURED GENERATORS",
      sub: "A few common starting points."
    },
    browseCategories: {
      heading: "BROWSE BY CATEGORY"
    },
    allGenerators: {
      heading: "ALL GENERATORS",
      sub: "Sixty-plus generators, organized by what you’re building.",
      searchLabel: "Search generators",
      searchPlaceholder: "Search generators...",
      resultCount: (n) => `${n} ${n === 1 ? "generator matches" : "generators match"}`,
      emptyTitle: "No generators match your search.",
      emptyCta: "Clear search",
      emptyLink: "Can't find it? Start with our AI builder.",
      showAll: (n) => `Show all ${n} generators`,
      showLess: "Show fewer"
    },
    howItWorks: {
      heading: "HOW IT WORKS",
      step1Title: "PICK A GENERATOR",
      step1Body: "Browse by category or search to find one that fits your goal.",
      step2Title: "DESCRIBE YOUR SITE",
      step2Body: "Tell our AI builder about your business in a sentence or two.",
      step3Title: "GENERATE AND PUBLISH",
      step3Body: "Get a fully built site in seconds. Customize anything, then go live."
    },
    why: {
      heading: "WHY STRIKINGLY",
      cell1Title: "LIVE IN SECONDS",
      cell1Body: "Describe your site, we build it. No setup, no learning curve.",
      cell2Title: "MOBILE BY DEFAULT",
      cell2Body: "Every generator produces responsive sites that work on any device.",
      cell3Title: "FREE TO START",
      cell3Body: "Generate, customize, and publish without a credit card."
    },
    faq: {
      heading: "FREQUENTLY ASKED QUESTIONS"
    },
    closing: {
      heading: "READY TO BUILD?",
      sub: "Pick a generator above, or jump straight into our AI builder.",
      cta: "START WITH AI BUILDER"
    },
    footer: {
      tagline: "Make a site you’re proud of.",
      product: "Product",
      productLinks: [
        { label: "AI Site Builder", href: "/s/ai_site_builder" },
        { label: "Templates", href: "/templates" },
        { label: "Pricing", href: "/pricing" },
        { label: "Generators", href: "/generators" }
      ],
      company: "Company",
      companyLinks: [
        { label: "About", href: "/about" },
        { label: "Blog", href: "/blog" },
        { label: "Support", href: "/support" }
      ],
      resources: "Resources",
      resourcesLinks: [
        { label: "Help Center", href: "/support" },
        { label: "Community", href: "/blog" },
        { label: "Status", href: "/about" }
      ],
      legal: "Legal",
      legalLinks: [
        { label: "Terms", href: "/terms" },
        { label: "Privacy", href: "/privacy" }
      ],
      copyright: "© Strikingly. All rights reserved."
    }
  }
};
const categorySlugs = {
  websites: "websites",
  "landing-pages": "landing-pages",
  portfolios: "portfolios",
  blogs: "blogs",
  stores: "stores",
  "link-in-bio": "link-in-bio"
};
const categoryLabels = {
  websites: "Websites",
  "landing-pages": "Landing Pages",
  portfolios: "Portfolios",
  blogs: "Blogs",
  stores: "Online Stores",
  "link-in-bio": "Link-in-Bio"
};
const categoryShortDescriptions = {
  websites: "AI-built business and personal sites for any goal.",
  "landing-pages": "Single-page sites built to convert visitors fast.",
  portfolios: "Showcase your work with a clean, focused site.",
  blogs: "Publish-ready blogs with built-in SEO basics.",
  stores: "Sell products online with payments built in.",
  "link-in-bio": "One link, all your places. Made for creators."
};
const generators = [
  // ===== Websites =====
  {
    name: "AI Website Generator",
    slug: "ai-website-generator",
    description: "Describe your business, get a full site.",
    category: "websites",
    featured: true
  },
  {
    name: "One-Page Website Builder",
    slug: "one-page-website-builder",
    description: "Simple sites, single scroll.",
    category: "websites",
    featured: true
  },
  {
    name: "Wedding Website Generator",
    slug: "wedding-website-generator",
    description: "Share your day with guests.",
    category: "websites",
    featured: true
  },
  {
    name: "Restaurant Website Builder",
    slug: "restaurant-website-builder",
    description: "Menu, hours, reservations, done.",
    category: "websites",
    featured: true
  },
  {
    name: "Free Website Builder for Photographers",
    slug: "free-website-builder-for-photographers",
    description: "A portfolio-ready home for your work.",
    category: "websites"
  },
  {
    name: "AI Website Builder for Small Business",
    slug: "ai-website-builder-for-small-business",
    description: "Get online today, no developer needed.",
    category: "websites"
  },
  {
    name: "Beautiful Website Builder for Coaches",
    slug: "beautiful-website-builder-for-coaches",
    description: "Win clients with a site that books calls.",
    category: "websites"
  },
  {
    name: "No-Code Website Builder for Consultants",
    slug: "no-code-website-builder-for-consultants",
    description: "A clean site for your advisory practice.",
    category: "websites"
  },
  {
    name: "Simple Website Builder for Therapists",
    slug: "simple-website-builder-for-therapists",
    description: "Calm, accessible sites for your practice.",
    category: "websites"
  },
  {
    name: "Modern Website Builder for Artists",
    slug: "modern-website-builder-for-artists",
    description: "A gallery-first home for your portfolio.",
    category: "websites"
  },
  {
    name: "AI Website Builder for Real Estate Agents",
    slug: "ai-website-builder-for-real-estate-agents",
    description: "Listings, leads, and a clean agent bio.",
    category: "websites"
  },
  {
    name: "Mobile-First Website Builder for Local Services",
    slug: "mobile-first-website-builder-for-local-services",
    description: "Calls and bookings from any phone.",
    category: "websites"
  },
  // ===== Landing Pages =====
  {
    name: "AI Landing Page Maker",
    slug: "ai-landing-page-maker",
    description: "One-page sites built to convert.",
    category: "landing-pages",
    featured: true
  },
  {
    name: "Free Landing Page Builder for Startups",
    slug: "free-landing-page-builder-for-startups",
    description: "Ship a launch page in an afternoon.",
    category: "landing-pages"
  },
  {
    name: "High-Converting Landing Page Builder",
    slug: "high-converting-landing-page-builder",
    description: "Tested layouts that turn visits into sign-ups.",
    category: "landing-pages"
  },
  {
    name: "AI Landing Page Builder for Lead Generation",
    slug: "ai-landing-page-builder-for-lead-generation",
    description: "Capture leads from day one.",
    category: "landing-pages"
  },
  {
    name: "Simple Landing Page Builder for Apps",
    slug: "simple-landing-page-builder-for-apps",
    description: "Show your app and grow downloads.",
    category: "landing-pages"
  },
  {
    name: "Beautiful Landing Page Builder for Courses",
    slug: "beautiful-landing-page-builder-for-courses",
    description: "Sell your course with a focused sales page.",
    category: "landing-pages"
  },
  {
    name: "One-Page Landing Page Builder",
    slug: "one-page-landing-page-builder",
    description: "Tight storytelling on a single scroll.",
    category: "landing-pages"
  },
  {
    name: "No-Code Landing Page Builder for SaaS",
    slug: "no-code-landing-page-builder-for-saas",
    description: "Pricing, features, and a free trial in minutes.",
    category: "landing-pages"
  },
  {
    name: "AI Sales Page Builder",
    slug: "ai-sales-page-builder",
    description: "Long-form pages built to close.",
    category: "landing-pages"
  },
  {
    name: "Landing Page Builder for Events",
    slug: "landing-page-builder-for-events",
    description: "RSVPs, schedules, and ticket links in one page.",
    category: "landing-pages"
  },
  // ===== Portfolios =====
  {
    name: "Free Portfolio Generator",
    slug: "free-portfolio-generator",
    description: "For creatives, in minutes, no fee.",
    category: "portfolios",
    featured: true
  },
  {
    name: "Portfolio Generator for Designers",
    slug: "portfolio-generator-for-designers",
    description: "Project-first layouts that show your craft.",
    category: "portfolios"
  },
  {
    name: "Portfolio Generator for Photographers",
    slug: "portfolio-generator-for-photographers",
    description: "Full-screen galleries with fast loading.",
    category: "portfolios"
  },
  {
    name: "AI Portfolio Builder for Illustrators",
    slug: "ai-portfolio-builder-for-illustrators",
    description: "Big artwork, clean captions, no clutter.",
    category: "portfolios"
  },
  {
    name: "Minimal Portfolio Builder for Writers",
    slug: "minimal-portfolio-builder-for-writers",
    description: "Let your words lead the page.",
    category: "portfolios"
  },
  {
    name: "Modern Portfolio Builder for Architects",
    slug: "modern-portfolio-builder-for-architects",
    description: "Project grids that match the work.",
    category: "portfolios"
  },
  {
    name: "One-Page Portfolio Builder",
    slug: "one-page-portfolio-builder",
    description: "A single scroll tells the whole story.",
    category: "portfolios"
  },
  {
    name: "Free Portfolio Builder for Freelancers",
    slug: "free-portfolio-builder-for-freelancers",
    description: "Show your work and win your next gig.",
    category: "portfolios"
  },
  {
    name: "Portfolio Builder for Developers",
    slug: "portfolio-builder-for-developers",
    description: "Highlight projects, skills, and contact info.",
    category: "portfolios"
  },
  {
    name: "Beautiful Portfolio Builder for Models",
    slug: "beautiful-portfolio-builder-for-models",
    description: "Polaroids, digitals, and a clean comp card.",
    category: "portfolios"
  },
  // ===== Blogs =====
  {
    name: "Blog Generator for Beginners",
    slug: "blog-generator-for-beginners",
    description: "Publish-ready in minutes.",
    category: "blogs",
    featured: true
  },
  {
    name: "AI Blog Generator",
    slug: "ai-blog-generator",
    description: "Drafts, layouts, and SEO basics in one tool.",
    category: "blogs"
  },
  {
    name: "Free Blog Builder for Writers",
    slug: "free-blog-builder-for-writers",
    description: "A clean reading home for your work.",
    category: "blogs"
  },
  {
    name: "Personal Blog Builder",
    slug: "personal-blog-builder",
    description: "A journal-style site you actually update.",
    category: "blogs"
  },
  {
    name: "Travel Blog Builder",
    slug: "travel-blog-builder",
    description: "Maps, photos, and trip posts that load fast.",
    category: "blogs"
  },
  {
    name: "Food Blog Builder",
    slug: "food-blog-builder",
    description: "Recipe cards, photos, and an index page.",
    category: "blogs"
  },
  {
    name: "No-Code Blog Builder",
    slug: "no-code-blog-builder",
    description: "A writer-friendly site without HTML.",
    category: "blogs"
  },
  {
    name: "AI Blog Builder for Thought Leaders",
    slug: "ai-blog-builder-for-thought-leaders",
    description: "Long-form posts with built-in structure.",
    category: "blogs"
  },
  {
    name: "Minimalist Blog Builder",
    slug: "minimalist-blog-builder",
    description: "Type-first layouts that stay out of the way.",
    category: "blogs"
  },
  {
    name: "Modern Blog Builder for News",
    slug: "modern-blog-builder-for-news",
    description: "Article lists, tags, and a strong front page.",
    category: "blogs"
  },
  // ===== Online Stores =====
  {
    name: "Online Store Builder",
    slug: "online-store-builder",
    description: "Start selling without writing code.",
    category: "stores",
    featured: true
  },
  {
    name: "Online Store Builder for Restaurants",
    slug: "online-store-builder-for-restaurants",
    description: "Menus, pickup, and delivery in one link.",
    category: "stores"
  },
  {
    name: "Free Online Store Builder",
    slug: "free-online-store-builder",
    description: "Open a shop without monthly fees.",
    category: "stores"
  },
  {
    name: "AI Store Builder for Small Business",
    slug: "ai-store-builder-for-small-business",
    description: "List products and start taking orders.",
    category: "stores"
  },
  {
    name: "Simple Online Store Builder for Crafts",
    slug: "simple-online-store-builder-for-crafts",
    description: "A handmade-friendly shop with checkout.",
    category: "stores"
  },
  {
    name: "No-Code Store Builder for Clothing",
    slug: "no-code-store-builder-for-clothing",
    description: "Lookbooks, sizes, and a clean cart.",
    category: "stores"
  },
  {
    name: "Modern Online Store Builder for Artists",
    slug: "modern-online-store-builder-for-artists",
    description: "Prints, originals, and limited drops.",
    category: "stores"
  },
  {
    name: "Online Store Builder for Coffee Shops",
    slug: "online-store-builder-for-coffee-shops",
    description: "Beans, merch, and subscription options.",
    category: "stores"
  },
  {
    name: "One-Product Online Store Builder",
    slug: "one-product-online-store-builder",
    description: "A single hero product, no clutter.",
    category: "stores"
  },
  {
    name: "AI Dropshipping Store Builder",
    slug: "ai-dropshipping-store-builder",
    description: "Launch a dropship shop in a weekend.",
    category: "stores"
  },
  // ===== Link-in-Bio =====
  {
    name: "Link-in-Bio Generator",
    slug: "link-in-bio-generator",
    description: "One link for all your channels.",
    category: "link-in-bio",
    featured: true
  },
  {
    name: "Free Link-in-Bio for Creators",
    slug: "free-link-in-bio-for-creators",
    description: "A mobile-first hub for everything you do.",
    category: "link-in-bio"
  },
  {
    name: "AI Link-in-Bio for Influencers",
    slug: "ai-link-in-bio-for-influencers",
    description: "A polished page that matches your brand.",
    category: "link-in-bio"
  },
  {
    name: "Beautiful Link-in-Bio for Musicians",
    slug: "beautiful-link-in-bio-for-musicians",
    description: "Streams, merch, and tour dates in one tap.",
    category: "link-in-bio"
  },
  {
    name: "No-Code Link-in-Bio for Podcasters",
    slug: "no-code-link-in-bio-for-podcasters",
    description: "Episodes, links, and listening platforms.",
    category: "link-in-bio"
  },
  {
    name: "Modern Link-in-Bio for Coaches",
    slug: "modern-link-in-bio-for-coaches",
    description: "Bookings, programs, and a calm layout.",
    category: "link-in-bio"
  },
  {
    name: "Simple Link-in-Bio for YouTubers",
    slug: "simple-link-in-bio-for-youtubers",
    description: "Latest video, playlists, and sponsors.",
    category: "link-in-bio"
  },
  {
    name: "Link-in-Bio for Small Businesses",
    slug: "link-in-bio-for-small-businesses",
    description: "Shop, hours, and contact in one link.",
    category: "link-in-bio"
  }
];
const featuredGenerators = generators.filter((g) => g.featured);
const categoryGenerators = Object.keys(categorySlugs).reduce(
  (acc, slug) => {
    acc[slug] = generators.filter((g) => g.category === slug);
    return acc;
  },
  {}
);
const browseCategories = [
  {
    slug: "websites",
    name: "Websites",
    description: "AI-built business and personal sites for any goal."
  },
  {
    slug: "landing-pages",
    name: "Landing Pages",
    description: "Single-page sites built to convert visitors fast."
  },
  {
    slug: "portfolios",
    name: "Portfolios",
    description: "Showcase your work with a clean, focused site."
  },
  {
    slug: "blogs",
    name: "Blogs",
    description: "Publish-ready blogs with built-in SEO basics."
  },
  {
    slug: "stores",
    name: "Online Stores",
    description: "Sell products online with payments built in."
  },
  {
    slug: "link-in-bio",
    name: "Link-in-Bio",
    description: "One link, all your places. Made for creators."
  }
];
const faqItems = [
  {
    q: "What is an AI site generator?",
    a: "An AI site generator is a tool that turns a short description of your business or project into a complete website. You answer a few questions or type a sentence, and the generator builds the pages, layout, and copy for you. From there, you can swap in your own photos, change colors, and edit text the way you would in any other site editor. Strikingly is one of the original AI-first website builders, and we host the largest free collection of industry and goal-specific generators."
  },
  {
    q: "How is a generator different from a template?",
    a: "A template is a finished design that you adapt to your content. A generator is the opposite: you give it a goal or an industry, and it builds a site around your answer. With a template, the structure is fixed and you fit your work into it. With a generator, the structure adapts to you, so a wedding site and a portfolio site end up with very different pages, sections, and copy even though they were built from the same tool."
  },
  {
    q: "Are these generators free to use?",
    a: "Yes. Every generator on this page is free to start. You can generate a site, customize it, and publish a Strikingly-hosted version without entering a credit card. Paid plans add a custom domain, more storage, and ecommerce features, but you only need them once your site is growing."
  },
  {
    q: "What kinds of sites can I build?",
    a: "Anything that lives on a single site. The directory covers full multi-page websites, single-page landing pages, portfolios, blogs, online stores, and link-in-bio pages. Pick the generator that matches what you are building, and the result will be tuned for that goal. If you are not sure, the AI Website Generator is a good starting point because it adapts to almost any brief."
  },
  {
    q: "Can I customize what the generator produces?",
    a: "Fully. The generator gives you a starting point, but every section is editable. You can change copy, swap photos, add or remove pages, switch fonts, and adjust colors. The underlying editor is the same Strikingly editor used by millions of creators, so you can keep going long after the generator has done its job."
  },
  {
    q: "Do generated sites work on mobile?",
    a: "Every generator produces responsive sites by default. Layouts are designed mobile-first, which means the site looks right on a phone before it looks right on a desktop. You do not have to do anything extra to make this work. If you want to fine-tune how a section behaves on smaller screens, the editor lets you adjust each block independently."
  }
];
const TopBar = ({ t }) => /* @__PURE__ */ jsx("header", { className: "strk-topbar", role: "banner", children: /* @__PURE__ */ jsxs("div", { className: "strk-container strk-topbar__inner", children: [
  /* @__PURE__ */ jsxs(
    "a",
    {
      className: "strk-logo",
      href: "/",
      "aria-label": `Strikingly home, ${t("topBar.logo")}`,
      children: [
        "strikingly ",
        /* @__PURE__ */ jsx("span", { className: "strk-logo__mark", children: "AI" })
      ]
    }
  ),
  /* @__PURE__ */ jsxs(
    "button",
    {
      type: "button",
      className: "strk-topbar__locale",
      "aria-label": "Change language",
      children: [
        /* @__PURE__ */ jsx("span", { "aria-hidden": "true", children: "EN" }),
        /* @__PURE__ */ jsx("span", { className: "strk-vh", children: "English" })
      ]
    }
  )
] }) });
const Breadcrumb = ({ t }) => /* @__PURE__ */ jsx("nav", { className: "strk-breadcrumb", "aria-label": "Breadcrumb", children: /* @__PURE__ */ jsx("div", { className: "strk-container", children: /* @__PURE__ */ jsxs(
  "ol",
  {
    className: "strk-breadcrumb__list",
    itemScope: true,
    itemType: "https://schema.org/BreadcrumbList",
    children: [
      /* @__PURE__ */ jsxs(
        "li",
        {
          itemProp: "itemListElement",
          itemScope: true,
          itemType: "https://schema.org/ListItem",
          children: [
            /* @__PURE__ */ jsx("a", { className: "strk-breadcrumb__link", href: "/", itemProp: "item", children: /* @__PURE__ */ jsx("span", { itemProp: "name", children: t("breadcrumb.home") }) }),
            /* @__PURE__ */ jsx("meta", { itemProp: "position", content: "1" })
          ]
        }
      ),
      /* @__PURE__ */ jsx(
        "li",
        {
          className: "strk-breadcrumb__sep",
          "aria-hidden": "true",
          children: ">"
        }
      ),
      /* @__PURE__ */ jsxs(
        "li",
        {
          itemProp: "itemListElement",
          itemScope: true,
          itemType: "https://schema.org/ListItem",
          "aria-current": "page",
          children: [
            /* @__PURE__ */ jsx(
              "span",
              {
                className: "strk-breadcrumb__current",
                itemProp: "name",
                children: t("breadcrumb.current")
              }
            ),
            /* @__PURE__ */ jsx("meta", { itemProp: "position", content: "2" })
          ]
        }
      )
    ]
  }
) }) });
const HeroIllustration = ({ className = "" }) => /* @__PURE__ */ jsxs(
  "svg",
  {
    className,
    width: "480",
    height: "360",
    viewBox: "0 0 480 360",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    role: "img",
    "aria-label": "A line-art mockup of a website being generated by AI",
    children: [
      /* @__PURE__ */ jsxs("defs", { children: [
        /* @__PURE__ */ jsxs("linearGradient", { id: "hero-stroke", x1: "0", y1: "0", x2: "1", y2: "1", children: [
          /* @__PURE__ */ jsx("stop", { offset: "0%", stopColor: "#8159BB" }),
          /* @__PURE__ */ jsx("stop", { offset: "100%", stopColor: "#CB0C9F" })
        ] }),
        /* @__PURE__ */ jsxs("linearGradient", { id: "hero-bg", x1: "0", y1: "0", x2: "0", y2: "1", children: [
          /* @__PURE__ */ jsx("stop", { offset: "0%", stopColor: "#F5EFFB", stopOpacity: "0.7" }),
          /* @__PURE__ */ jsx("stop", { offset: "100%", stopColor: "#FBF2F8", stopOpacity: "0.4" })
        ] })
      ] }),
      /* @__PURE__ */ jsx("rect", { x: "40", y: "40", width: "400", height: "280", rx: "14", fill: "url(#hero-bg)" }),
      /* @__PURE__ */ jsx(
        "rect",
        {
          x: "80",
          y: "60",
          width: "320",
          height: "240",
          rx: "10",
          fill: "#FFFFFF",
          stroke: "url(#hero-stroke)",
          strokeWidth: "2"
        }
      ),
      /* @__PURE__ */ jsx(
        "line",
        {
          x1: "80",
          y1: "92",
          x2: "400",
          y2: "92",
          stroke: "#E2E4E7",
          strokeWidth: "1.5"
        }
      ),
      /* @__PURE__ */ jsx("circle", { cx: "96", cy: "76", r: "4", fill: "#E2E4E7" }),
      /* @__PURE__ */ jsx("circle", { cx: "110", cy: "76", r: "4", fill: "#E2E4E7" }),
      /* @__PURE__ */ jsx("circle", { cx: "124", cy: "76", r: "4", fill: "#E2E4E7" }),
      /* @__PURE__ */ jsx(
        "rect",
        {
          x: "100",
          y: "110",
          width: "160",
          height: "14",
          rx: "3",
          fill: "url(#hero-stroke)"
        }
      ),
      /* @__PURE__ */ jsx("rect", { x: "100", y: "134", width: "200", height: "8", rx: "2", fill: "#D6D9DD" }),
      /* @__PURE__ */ jsx("rect", { x: "100", y: "148", width: "180", height: "8", rx: "2", fill: "#D6D9DD" }),
      /* @__PURE__ */ jsx(
        "rect",
        {
          x: "100",
          y: "172",
          width: "80",
          height: "28",
          rx: "4",
          fill: "url(#hero-stroke)"
        }
      ),
      /* @__PURE__ */ jsx(
        "rect",
        {
          x: "320",
          y: "110",
          width: "60",
          height: "60",
          rx: "6",
          fill: "#FFFFFF",
          stroke: "#C6C9CD",
          strokeWidth: "1.2"
        }
      ),
      /* @__PURE__ */ jsx(
        "rect",
        {
          x: "320",
          y: "180",
          width: "60",
          height: "60",
          rx: "6",
          fill: "#FFFFFF",
          stroke: "#C6C9CD",
          strokeWidth: "1.2"
        }
      ),
      /* @__PURE__ */ jsx(
        "rect",
        {
          x: "320",
          y: "250",
          width: "60",
          height: "30",
          rx: "6",
          fill: "#FFFFFF",
          stroke: "#C6C9CD",
          strokeWidth: "1.2"
        }
      ),
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M50 90 53 96l6 3-6 3-3 6-3-6-6-3 6-3 3-6Z",
          fill: "#7671FF"
        }
      ),
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M430 250 432 254l4 2-4 2-2 4-2-4-4-2 4-2 2-4Z",
          fill: "#CB0C9F"
        }
      ),
      /* @__PURE__ */ jsx("circle", { cx: "450", cy: "80", r: "3", fill: "#8159BB" }),
      /* @__PURE__ */ jsx("circle", { cx: "50", cy: "280", r: "2.5", fill: "#8159BB" })
    ]
  }
);
const ICONS = {
  websites: /* @__PURE__ */ jsxs("g", { children: [
    /* @__PURE__ */ jsx(
      "rect",
      {
        x: "34",
        y: "22",
        width: "60",
        height: "40",
        rx: "4",
        fill: "#FFFFFF",
        stroke: "#8159BB",
        strokeWidth: "1.6"
      }
    ),
    /* @__PURE__ */ jsx("line", { x1: "34", y1: "32", x2: "94", y2: "32", stroke: "#8159BB", strokeWidth: "1.6" }),
    /* @__PURE__ */ jsx("circle", { cx: "40", cy: "27", r: "1.2", fill: "#8159BB" }),
    /* @__PURE__ */ jsx("circle", { cx: "44", cy: "27", r: "1.2", fill: "#8159BB" }),
    /* @__PURE__ */ jsx("line", { x1: "40", y1: "40", x2: "68", y2: "40", stroke: "#C6C9CD", strokeWidth: "1.2" }),
    /* @__PURE__ */ jsx("line", { x1: "40", y1: "46", x2: "78", y2: "46", stroke: "#C6C9CD", strokeWidth: "1.2" }),
    /* @__PURE__ */ jsx("line", { x1: "40", y1: "52", x2: "58", y2: "52", stroke: "#C6C9CD", strokeWidth: "1.2" })
  ] }),
  "landing-pages": /* @__PURE__ */ jsxs("g", { children: [
    /* @__PURE__ */ jsx(
      "rect",
      {
        x: "44",
        y: "20",
        width: "40",
        height: "44",
        rx: "3",
        fill: "#FFFFFF",
        stroke: "#8159BB",
        strokeWidth: "1.6"
      }
    ),
    /* @__PURE__ */ jsx("rect", { x: "52", y: "28", width: "24", height: "4", rx: "1", fill: "#8159BB" }),
    /* @__PURE__ */ jsx("rect", { x: "52", y: "36", width: "24", height: "2", rx: "1", fill: "#C6C9CD" }),
    /* @__PURE__ */ jsx("rect", { x: "52", y: "40", width: "18", height: "2", rx: "1", fill: "#C6C9CD" }),
    /* @__PURE__ */ jsx("rect", { x: "56", y: "48", width: "16", height: "6", rx: "1.5", fill: "#8159BB" })
  ] }),
  portfolios: /* @__PURE__ */ jsxs("g", { children: [
    /* @__PURE__ */ jsx(
      "rect",
      {
        x: "30",
        y: "22",
        width: "24",
        height: "40",
        rx: "2",
        fill: "#FFFFFF",
        stroke: "#8159BB",
        strokeWidth: "1.6"
      }
    ),
    /* @__PURE__ */ jsx(
      "rect",
      {
        x: "58",
        y: "22",
        width: "24",
        height: "40",
        rx: "2",
        fill: "#FFFFFF",
        stroke: "#8159BB",
        strokeWidth: "1.6"
      }
    ),
    /* @__PURE__ */ jsx("line", { x1: "34", y1: "30", x2: "50", y2: "30", stroke: "#C6C9CD", strokeWidth: "1.2" }),
    /* @__PURE__ */ jsx("line", { x1: "34", y1: "36", x2: "50", y2: "36", stroke: "#C6C9CD", strokeWidth: "1.2" }),
    /* @__PURE__ */ jsx("line", { x1: "34", y1: "42", x2: "46", y2: "42", stroke: "#C6C9CD", strokeWidth: "1.2" }),
    /* @__PURE__ */ jsx("line", { x1: "34", y1: "48", x2: "50", y2: "48", stroke: "#C6C9CD", strokeWidth: "1.2" }),
    /* @__PURE__ */ jsx("line", { x1: "62", y1: "30", x2: "78", y2: "30", stroke: "#C6C9CD", strokeWidth: "1.2" }),
    /* @__PURE__ */ jsx("line", { x1: "62", y1: "36", x2: "78", y2: "36", stroke: "#C6C9CD", strokeWidth: "1.2" }),
    /* @__PURE__ */ jsx("line", { x1: "62", y1: "42", x2: "74", y2: "42", stroke: "#C6C9CD", strokeWidth: "1.2" }),
    /* @__PURE__ */ jsx("line", { x1: "62", y1: "48", x2: "78", y2: "48", stroke: "#C6C9CD", strokeWidth: "1.2" })
  ] }),
  blogs: /* @__PURE__ */ jsxs("g", { children: [
    /* @__PURE__ */ jsx(
      "rect",
      {
        x: "34",
        y: "20",
        width: "60",
        height: "44",
        rx: "3",
        fill: "#FFFFFF",
        stroke: "#8159BB",
        strokeWidth: "1.6"
      }
    ),
    /* @__PURE__ */ jsx("rect", { x: "40", y: "26", width: "34", height: "3", rx: "1", fill: "#8159BB" }),
    /* @__PURE__ */ jsx("line", { x1: "40", y1: "34", x2: "88", y2: "34", stroke: "#C6C9CD", strokeWidth: "1.2" }),
    /* @__PURE__ */ jsx("line", { x1: "40", y1: "40", x2: "84", y2: "40", stroke: "#C6C9CD", strokeWidth: "1.2" }),
    /* @__PURE__ */ jsx("line", { x1: "40", y1: "46", x2: "78", y2: "46", stroke: "#C6C9CD", strokeWidth: "1.2" }),
    /* @__PURE__ */ jsx("line", { x1: "40", y1: "52", x2: "60", y2: "52", stroke: "#C6C9CD", strokeWidth: "1.2" })
  ] }),
  stores: /* @__PURE__ */ jsxs("g", { children: [
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M32 28h64l-4 32a2 2 0 0 1-2 2H38a2 2 0 0 1-2-2L32 28Z",
        fill: "#FFFFFF",
        stroke: "#8159BB",
        strokeWidth: "1.6",
        strokeLinejoin: "round"
      }
    ),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M44 28v-4a8 8 0 0 1 16 0v4",
        stroke: "#8159BB",
        strokeWidth: "1.6",
        fill: "none"
      }
    )
  ] }),
  "link-in-bio": /* @__PURE__ */ jsxs("g", { children: [
    /* @__PURE__ */ jsx(
      "rect",
      {
        x: "40",
        y: "20",
        width: "48",
        height: "44",
        rx: "6",
        fill: "#FFFFFF",
        stroke: "#8159BB",
        strokeWidth: "1.6"
      }
    ),
    /* @__PURE__ */ jsx("circle", { cx: "64", cy: "30", r: "4", fill: "#8159BB" }),
    /* @__PURE__ */ jsx("line", { x1: "48", y1: "42", x2: "80", y2: "42", stroke: "#C6C9CD", strokeWidth: "1.2" }),
    /* @__PURE__ */ jsx("line", { x1: "48", y1: "48", x2: "74", y2: "48", stroke: "#C6C9CD", strokeWidth: "1.2" }),
    /* @__PURE__ */ jsx("line", { x1: "48", y1: "54", x2: "80", y2: "54", stroke: "#C6C9CD", strokeWidth: "1.2" })
  ] })
};
const CategoryThumb = ({ category, className = "" }) => /* @__PURE__ */ jsxs(
  "svg",
  {
    className,
    width: "128",
    height: "84",
    viewBox: "0 0 128 84",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    children: [
      /* @__PURE__ */ jsx("rect", { width: "128", height: "84", rx: "6", fill: "#F4F6F8" }),
      ICONS[category]
    ]
  }
);
const BROWSE_ICONS = {
  websites: /* @__PURE__ */ jsxs("g", { children: [
    /* @__PURE__ */ jsx(
      "rect",
      {
        x: "20",
        y: "14",
        width: "60",
        height: "42",
        rx: "4",
        fill: "#FFFFFF",
        stroke: "#8159BB",
        strokeWidth: "1.6"
      }
    ),
    /* @__PURE__ */ jsx("line", { x1: "20", y1: "24", x2: "80", y2: "24", stroke: "#8159BB", strokeWidth: "1.6" }),
    /* @__PURE__ */ jsx("circle", { cx: "26", cy: "19", r: "1.2", fill: "#8159BB" }),
    /* @__PURE__ */ jsx("circle", { cx: "30", cy: "19", r: "1.2", fill: "#8159BB" }),
    /* @__PURE__ */ jsx("rect", { x: "26", y: "32", width: "32", height: "6", rx: "1", fill: "#8159BB" }),
    /* @__PURE__ */ jsx("line", { x1: "26", y1: "42", x2: "58", y2: "42", stroke: "#C6C9CD", strokeWidth: "1.2" }),
    /* @__PURE__ */ jsx("line", { x1: "26", y1: "46", x2: "64", y2: "46", stroke: "#C6C9CD", strokeWidth: "1.2" })
  ] }),
  "landing-pages": /* @__PURE__ */ jsxs("g", { children: [
    /* @__PURE__ */ jsx(
      "rect",
      {
        x: "34",
        y: "12",
        width: "32",
        height: "44",
        rx: "3",
        fill: "#FFFFFF",
        stroke: "#8159BB",
        strokeWidth: "1.6"
      }
    ),
    /* @__PURE__ */ jsx("rect", { x: "40", y: "18", width: "20", height: "4", rx: "1", fill: "#8159BB" }),
    /* @__PURE__ */ jsx("rect", { x: "40", y: "26", width: "20", height: "2", rx: "1", fill: "#C6C9CD" }),
    /* @__PURE__ */ jsx("rect", { x: "40", y: "30", width: "16", height: "2", rx: "1", fill: "#C6C9CD" }),
    /* @__PURE__ */ jsx("rect", { x: "42", y: "38", width: "16", height: "6", rx: "1.5", fill: "#8159BB" })
  ] }),
  portfolios: /* @__PURE__ */ jsxs("g", { children: [
    /* @__PURE__ */ jsx(
      "rect",
      {
        x: "16",
        y: "14",
        width: "22",
        height: "42",
        rx: "2",
        fill: "#FFFFFF",
        stroke: "#8159BB",
        strokeWidth: "1.6"
      }
    ),
    /* @__PURE__ */ jsx(
      "rect",
      {
        x: "42",
        y: "14",
        width: "22",
        height: "42",
        rx: "2",
        fill: "#FFFFFF",
        stroke: "#8159BB",
        strokeWidth: "1.6"
      }
    ),
    /* @__PURE__ */ jsx(
      "rect",
      {
        x: "68",
        y: "14",
        width: "22",
        height: "42",
        rx: "2",
        fill: "#FFFFFF",
        stroke: "#8159BB",
        strokeWidth: "1.6"
      }
    ),
    /* @__PURE__ */ jsx("line", { x1: "20", y1: "22", x2: "34", y2: "22", stroke: "#C6C9CD", strokeWidth: "1.2" }),
    /* @__PURE__ */ jsx("line", { x1: "20", y1: "30", x2: "34", y2: "30", stroke: "#C6C9CD", strokeWidth: "1.2" }),
    /* @__PURE__ */ jsx("line", { x1: "20", y1: "38", x2: "30", y2: "38", stroke: "#C6C9CD", strokeWidth: "1.2" }),
    /* @__PURE__ */ jsx("line", { x1: "46", y1: "22", x2: "60", y2: "22", stroke: "#C6C9CD", strokeWidth: "1.2" }),
    /* @__PURE__ */ jsx("line", { x1: "46", y1: "30", x2: "60", y2: "30", stroke: "#C6C9CD", strokeWidth: "1.2" }),
    /* @__PURE__ */ jsx("line", { x1: "46", y1: "38", x2: "56", y2: "38", stroke: "#C6C9CD", strokeWidth: "1.2" }),
    /* @__PURE__ */ jsx("line", { x1: "72", y1: "22", x2: "86", y2: "22", stroke: "#C6C9CD", strokeWidth: "1.2" }),
    /* @__PURE__ */ jsx("line", { x1: "72", y1: "30", x2: "86", y2: "30", stroke: "#C6C9CD", strokeWidth: "1.2" }),
    /* @__PURE__ */ jsx("line", { x1: "72", y1: "38", x2: "82", y2: "38", stroke: "#C6C9CD", strokeWidth: "1.2" })
  ] }),
  blogs: /* @__PURE__ */ jsxs("g", { children: [
    /* @__PURE__ */ jsx(
      "rect",
      {
        x: "20",
        y: "12",
        width: "60",
        height: "44",
        rx: "3",
        fill: "#FFFFFF",
        stroke: "#8159BB",
        strokeWidth: "1.6"
      }
    ),
    /* @__PURE__ */ jsx("rect", { x: "26", y: "18", width: "34", height: "3", rx: "1", fill: "#8159BB" }),
    /* @__PURE__ */ jsx("line", { x1: "26", y1: "26", x2: "74", y2: "26", stroke: "#C6C9CD", strokeWidth: "1.2" }),
    /* @__PURE__ */ jsx("line", { x1: "26", y1: "32", x2: "68", y2: "32", stroke: "#C6C9CD", strokeWidth: "1.2" }),
    /* @__PURE__ */ jsx("line", { x1: "26", y1: "38", x2: "74", y2: "38", stroke: "#C6C9CD", strokeWidth: "1.2" }),
    /* @__PURE__ */ jsx("line", { x1: "26", y1: "44", x2: "56", y2: "44", stroke: "#C6C9CD", strokeWidth: "1.2" })
  ] }),
  stores: /* @__PURE__ */ jsxs("g", { children: [
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M18 22h64l-4 32a2 2 0 0 1-2 2H24a2 2 0 0 1-2-2L18 22Z",
        fill: "#FFFFFF",
        stroke: "#8159BB",
        strokeWidth: "1.6",
        strokeLinejoin: "round"
      }
    ),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M30 22v-4a10 10 0 0 1 20 0v4",
        stroke: "#8159BB",
        strokeWidth: "1.6",
        fill: "none"
      }
    )
  ] }),
  "link-in-bio": /* @__PURE__ */ jsxs("g", { children: [
    /* @__PURE__ */ jsx(
      "rect",
      {
        x: "26",
        y: "12",
        width: "48",
        height: "44",
        rx: "6",
        fill: "#FFFFFF",
        stroke: "#8159BB",
        strokeWidth: "1.6"
      }
    ),
    /* @__PURE__ */ jsx("circle", { cx: "50", cy: "22", r: "4", fill: "#8159BB" }),
    /* @__PURE__ */ jsx("line", { x1: "34", y1: "34", x2: "66", y2: "34", stroke: "#C6C9CD", strokeWidth: "1.2" }),
    /* @__PURE__ */ jsx("line", { x1: "34", y1: "40", x2: "60", y2: "40", stroke: "#C6C9CD", strokeWidth: "1.2" }),
    /* @__PURE__ */ jsx("line", { x1: "34", y1: "46", x2: "66", y2: "46", stroke: "#C6C9CD", strokeWidth: "1.2" })
  ] })
};
const BrowseCategoryIllustration = ({ category, className = "" }) => /* @__PURE__ */ jsxs(
  "svg",
  {
    className,
    width: "100",
    height: "64",
    viewBox: "0 0 100 64",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    children: [
      /* @__PURE__ */ jsx("rect", { width: "100", height: "64", rx: "6", fill: "#F4F6F8" }),
      BROWSE_ICONS[category]
    ]
  }
);
const Hero = ({ t }) => /* @__PURE__ */ jsx(
  "section",
  {
    className: "strk-section strk-section--hero strk-section--hero-bg",
    "aria-labelledby": "hero-title",
    children: /* @__PURE__ */ jsxs("div", { className: "strk-container strk-hero", children: [
      /* @__PURE__ */ jsxs("div", { className: "strk-hero__copy", children: [
        /* @__PURE__ */ jsxs("h1", { className: "strk-hero__title", id: "hero-title", children: [
          /* @__PURE__ */ jsx("span", { className: "strk-hero__title-line", children: t("hero.line1") }),
          /* @__PURE__ */ jsx("span", { className: "strk-hero__title-line strk-hero__title-line--gradient", children: t("hero.line2") })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "strk-hero__sub", children: t("hero.sub") }),
        /* @__PURE__ */ jsxs("div", { className: "strk-hero__ctas", children: [
          /* @__PURE__ */ jsx(
            "a",
            {
              className: "strk-btn strk-btn--gradient strk-btn--lg",
              href: "/s/ai_site_builder",
              children: t("hero.primaryCta")
            }
          ),
          /* @__PURE__ */ jsx(
            "a",
            {
              className: "strk-btn strk-btn--ghost strk-btn--lg",
              href: "#all-generators",
              children: t("hero.secondaryCta")
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "strk-hero__art", children: /* @__PURE__ */ jsx(HeroIllustration, { className: "strk-hero__illustration" }) })
    ] })
  }
);
const FeaturedGenerators = ({ t, featured, generatorUrl: generatorUrl2 }) => /* @__PURE__ */ jsx(
  "section",
  {
    className: "strk-section",
    "aria-labelledby": "featured-heading",
    children: /* @__PURE__ */ jsxs("div", { className: "strk-container", children: [
      /* @__PURE__ */ jsx(
        "h2",
        {
          className: "strk-section__heading",
          id: "featured-heading",
          children: t("featured.heading")
        }
      ),
      /* @__PURE__ */ jsx("p", { className: "strk-section__sub", children: t("featured.sub") }),
      /* @__PURE__ */ jsx("div", { className: "strk-grid strk-grid--3", children: featured.map((g) => /* @__PURE__ */ jsxs(
        "a",
        {
          className: "strk-card strk-card--link",
          href: generatorUrl2(g.slug),
          children: [
            /* @__PURE__ */ jsx("div", { className: "strk-card__thumb", children: /* @__PURE__ */ jsx(CategoryThumb, { category: g.category }) }),
            /* @__PURE__ */ jsx("span", { className: "strk-tag", "aria-label": `Category: ${categoryLabels[g.category]}`, children: categoryLabels[g.category] }),
            /* @__PURE__ */ jsx("h3", { className: "strk-card__name", style: { marginTop: 12 }, children: g.name }),
            /* @__PURE__ */ jsx("p", { className: "strk-card__desc", children: g.description })
          ]
        },
        g.slug
      )) })
    ] })
  }
);
const ArrowRight = ({ className = "", size = 16 }) => /* @__PURE__ */ jsx(
  "svg",
  {
    className,
    width: size,
    height: size,
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    children: /* @__PURE__ */ jsx(
      "path",
      {
        d: "M3 8h9.5M9 4.5 12.5 8 9 11.5",
        stroke: "currentColor",
        strokeWidth: "1.6",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }
    )
  }
);
const SearchIcon = ({ className = "", size = 18 }) => /* @__PURE__ */ jsxs(
  "svg",
  {
    className,
    width: size,
    height: size,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    children: [
      /* @__PURE__ */ jsx(
        "circle",
        {
          cx: "9",
          cy: "9",
          r: "6",
          stroke: "currentColor",
          strokeWidth: "1.8"
        }
      ),
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "m17 17-3.5-3.5",
          stroke: "currentColor",
          strokeWidth: "1.8",
          strokeLinecap: "round"
        }
      )
    ]
  }
);
const ChevronDown = ({ className = "", size = 16 }) => /* @__PURE__ */ jsx(
  "svg",
  {
    className,
    width: size,
    height: size,
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    children: /* @__PURE__ */ jsx(
      "path",
      {
        d: "m4 6 4 4 4-4",
        stroke: "currentColor",
        strokeWidth: "1.8",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }
    )
  }
);
const LightningIcon = ({ className = "", size = 22 }) => /* @__PURE__ */ jsx(
  "svg",
  {
    className,
    width: size,
    height: size,
    viewBox: "0 0 22 22",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    children: /* @__PURE__ */ jsx(
      "path",
      {
        d: "M12 1 4 12h5l-1 9 8-11h-5l1-9Z",
        stroke: "currentColor",
        strokeWidth: "1.6",
        strokeLinejoin: "round"
      }
    )
  }
);
const MobileIcon = ({ className = "", size = 22 }) => /* @__PURE__ */ jsxs(
  "svg",
  {
    className,
    width: size,
    height: size,
    viewBox: "0 0 22 22",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    children: [
      /* @__PURE__ */ jsx(
        "rect",
        {
          x: "6",
          y: "2",
          width: "10",
          height: "18",
          rx: "2",
          stroke: "currentColor",
          strokeWidth: "1.6"
        }
      ),
      /* @__PURE__ */ jsx("path", { d: "M9 17h4", stroke: "currentColor", strokeWidth: "1.6", strokeLinecap: "round" })
    ]
  }
);
const FreeIcon = ({ className = "", size = 22 }) => /* @__PURE__ */ jsxs(
  "svg",
  {
    className,
    width: size,
    height: size,
    viewBox: "0 0 22 22",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    children: [
      /* @__PURE__ */ jsx("circle", { cx: "11", cy: "11", r: "9", stroke: "currentColor", strokeWidth: "1.6" }),
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M13.5 8.5C13 7.5 12 7 11 7c-1.5 0-3 1-3 2.5S9.5 12 11 12.5 14 13.5 14 15s-1.5 2.5-3 2.5c-1.2 0-2.3-.6-2.8-1.5M11 5v2m0 9v2",
          stroke: "currentColor",
          strokeWidth: "1.6",
          strokeLinecap: "round"
        }
      )
    ]
  }
);
const BrowseByCategory = ({ t, categories }) => /* @__PURE__ */ jsx(
  "section",
  {
    className: "strk-section",
    "aria-labelledby": "browse-heading",
    children: /* @__PURE__ */ jsxs("div", { className: "strk-container", children: [
      /* @__PURE__ */ jsx(
        "h2",
        {
          className: "strk-section__heading",
          id: "browse-heading",
          children: t("browseCategories.heading")
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "strk-grid strk-grid--3", style: { marginTop: 30 }, children: categories.map((cat) => /* @__PURE__ */ jsxs(
        "a",
        {
          className: "strk-browse-card",
          href: `/generators#${cat.slug}`,
          children: [
            /* @__PURE__ */ jsx(BrowseCategoryIllustration, { category: cat.slug }),
            /* @__PURE__ */ jsxs("div", { className: "strk-browse-card__body", children: [
              /* @__PURE__ */ jsx("h3", { className: "strk-browse-card__name", children: cat.name }),
              /* @__PURE__ */ jsx("p", { className: "strk-browse-card__desc", children: cat.description })
            ] }),
            /* @__PURE__ */ jsx(ArrowRight, { className: "strk-browse-card__arrow", size: 18 })
          ]
        },
        cat.slug
      )) })
    ] })
  }
);
const INITIAL_VISIBLE = 6;
const AllGenerators = ({ t, generatorUrl: generatorUrl2 }) => {
  const categories = Object.keys(categorySlugs);
  return /* @__PURE__ */ jsx(
    "section",
    {
      className: "strk-section",
      id: "all-generators",
      "aria-labelledby": "all-generators-heading",
      children: /* @__PURE__ */ jsxs("div", { className: "strk-container", children: [
        /* @__PURE__ */ jsx(
          "h2",
          {
            className: "strk-section__heading",
            id: "all-generators-heading",
            children: t("allGenerators.heading")
          }
        ),
        /* @__PURE__ */ jsx("p", { className: "strk-section__sub", children: t("allGenerators.sub") }),
        /* @__PURE__ */ jsxs("div", { className: "strk-search", children: [
          /* @__PURE__ */ jsx(SearchIcon, { className: "strk-search__icon", size: 18 }),
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "search",
              id: "generators-search",
              className: "strk-search__input",
              placeholder: t("allGenerators.searchPlaceholder"),
              "aria-label": t("allGenerators.searchLabel"),
              autoComplete: "off"
            }
          )
        ] }),
        /* @__PURE__ */ jsx(
          "p",
          {
            className: "strk-search__meta",
            id: "generators-search-meta",
            "aria-live": "polite"
          }
        ),
        /* @__PURE__ */ jsxs("div", { id: "all-generators-empty", className: "strk-empty", hidden: true, children: [
          /* @__PURE__ */ jsx("p", { className: "strk-empty__title", children: t("allGenerators.emptyTitle") }),
          /* @__PURE__ */ jsx(
            "button",
            {
              type: "button",
              className: "strk-btn strk-btn--ghost",
              id: "generators-clear-search",
              children: t("allGenerators.emptyCta")
            }
          ),
          /* @__PURE__ */ jsx("br", {}),
          /* @__PURE__ */ jsx("a", { className: "strk-empty__link", href: "/s/ai_site_builder", children: t("allGenerators.emptyLink") })
        ] }),
        categories.map((slug) => {
          const items = categoryGenerators[slug];
          const initialCount = Math.min(INITIAL_VISIBLE, items.length);
          return /* @__PURE__ */ jsxs(
            "section",
            {
              id: slug,
              className: "strk-subsec",
              "data-subsec": slug,
              "aria-labelledby": `subsec-${slug}-title`,
              children: [
                /* @__PURE__ */ jsxs("header", { className: "strk-subsec__head", children: [
                  /* @__PURE__ */ jsx(
                    "h3",
                    {
                      className: "strk-subsec__title",
                      id: `subsec-${slug}-title`,
                      children: categoryLabels[slug]
                    }
                  ),
                  /* @__PURE__ */ jsx("p", { className: "strk-subsec__desc", children: categoryShortDescriptions[slug] })
                ] }),
                /* @__PURE__ */ jsx(
                  "div",
                  {
                    className: "strk-grid strk-grid--3 strk-collapse",
                    "data-collapse": true,
                    "data-initial": initialCount,
                    children: items.map((g) => /* @__PURE__ */ jsxs(
                      "a",
                      {
                        className: "strk-card strk-card--link",
                        href: generatorUrl2(g.slug),
                        "data-card": true,
                        "data-name": g.name.toLowerCase(),
                        "data-description": g.description.toLowerCase(),
                        "data-category": g.category,
                        children: [
                          /* @__PURE__ */ jsx("div", { className: "strk-card__thumb", children: /* @__PURE__ */ jsx(CategoryThumb, { category: g.category }) }),
                          /* @__PURE__ */ jsx(
                            "h4",
                            {
                              className: "strk-card__name",
                              style: { textTransform: "none", letterSpacing: 0 },
                              children: g.name
                            }
                          ),
                          /* @__PURE__ */ jsx("p", { className: "strk-card__desc", children: g.description })
                        ]
                      },
                      g.slug
                    ))
                  }
                ),
                items.length > INITIAL_VISIBLE && /* @__PURE__ */ jsx("div", { className: "strk-toggle-row", children: /* @__PURE__ */ jsxs(
                  "button",
                  {
                    type: "button",
                    className: "strk-toggle-btn",
                    "data-show-all": true,
                    "data-target": slug,
                    "aria-expanded": "false",
                    "aria-controls": `collapse-${slug}`,
                    children: [
                      /* @__PURE__ */ jsx("span", { "data-label": true, children: t("allGenerators.showAll")(items.length) }),
                      /* @__PURE__ */ jsx(ChevronDown, { className: "strk-toggle-btn__icon", size: 14 })
                    ]
                  }
                ) })
              ]
            },
            slug
          );
        })
      ] })
    }
  );
};
const HowItWorks = ({ t }) => /* @__PURE__ */ jsx(
  "section",
  {
    className: "strk-section strk-how",
    "aria-labelledby": "how-heading",
    children: /* @__PURE__ */ jsxs("div", { className: "strk-container", children: [
      /* @__PURE__ */ jsx("h2", { className: "strk-section__heading", id: "how-heading", children: t("howItWorks.heading") }),
      /* @__PURE__ */ jsx("p", { className: "strk-section__sub", children: " " }),
      /* @__PURE__ */ jsxs("div", { className: "strk-how__grid", children: [
        /* @__PURE__ */ jsxs("article", { className: "strk-how__step", children: [
          /* @__PURE__ */ jsx("div", { className: "strk-how__num", "aria-hidden": "true", children: "1" }),
          /* @__PURE__ */ jsx("h3", { className: "strk-how__title", children: t("howItWorks.step1Title") }),
          /* @__PURE__ */ jsx("p", { className: "strk-how__body", children: t("howItWorks.step1Body") })
        ] }),
        /* @__PURE__ */ jsxs("article", { className: "strk-how__step", children: [
          /* @__PURE__ */ jsx("div", { className: "strk-how__num", "aria-hidden": "true", children: "2" }),
          /* @__PURE__ */ jsx("h3", { className: "strk-how__title", children: t("howItWorks.step2Title") }),
          /* @__PURE__ */ jsx("p", { className: "strk-how__body", children: t("howItWorks.step2Body") })
        ] }),
        /* @__PURE__ */ jsxs("article", { className: "strk-how__step", children: [
          /* @__PURE__ */ jsx("div", { className: "strk-how__num", "aria-hidden": "true", children: "3" }),
          /* @__PURE__ */ jsx("h3", { className: "strk-how__title", children: t("howItWorks.step3Title") }),
          /* @__PURE__ */ jsx("p", { className: "strk-how__body", children: t("howItWorks.step3Body") })
        ] })
      ] })
    ] })
  }
);
const WhyStrikingly = ({ t }) => /* @__PURE__ */ jsx(
  "section",
  {
    className: "strk-section",
    "aria-labelledby": "why-heading",
    children: /* @__PURE__ */ jsxs("div", { className: "strk-container", children: [
      /* @__PURE__ */ jsx("h2", { className: "strk-section__heading", id: "why-heading", children: t("why.heading") }),
      /* @__PURE__ */ jsx("p", { className: "strk-section__sub", children: " " }),
      /* @__PURE__ */ jsxs("div", { className: "strk-why__grid", children: [
        /* @__PURE__ */ jsxs("article", { className: "strk-why__cell", children: [
          /* @__PURE__ */ jsx("div", { className: "strk-why__icon", "aria-hidden": "true", children: /* @__PURE__ */ jsx(LightningIcon, { size: 20 }) }),
          /* @__PURE__ */ jsx("h3", { className: "strk-why__title", children: t("why.cell1Title") }),
          /* @__PURE__ */ jsx("p", { className: "strk-why__body", children: t("why.cell1Body") })
        ] }),
        /* @__PURE__ */ jsxs("article", { className: "strk-why__cell", children: [
          /* @__PURE__ */ jsx("div", { className: "strk-why__icon", "aria-hidden": "true", children: /* @__PURE__ */ jsx(MobileIcon, { size: 20 }) }),
          /* @__PURE__ */ jsx("h3", { className: "strk-why__title", children: t("why.cell2Title") }),
          /* @__PURE__ */ jsx("p", { className: "strk-why__body", children: t("why.cell2Body") })
        ] }),
        /* @__PURE__ */ jsxs("article", { className: "strk-why__cell", children: [
          /* @__PURE__ */ jsx("div", { className: "strk-why__icon", "aria-hidden": "true", children: /* @__PURE__ */ jsx(FreeIcon, { size: 20 }) }),
          /* @__PURE__ */ jsx("h3", { className: "strk-why__title", children: t("why.cell3Title") }),
          /* @__PURE__ */ jsx("p", { className: "strk-why__body", children: t("why.cell3Body") })
        ] })
      ] })
    ] })
  }
);
const FAQ = ({ t, faqItems: faqItems2 }) => /* @__PURE__ */ jsx(
  "section",
  {
    className: "strk-section",
    "aria-labelledby": "faq-heading",
    children: /* @__PURE__ */ jsxs("div", { className: "strk-container", children: [
      /* @__PURE__ */ jsx("h2", { className: "strk-section__heading", id: "faq-heading", children: t("faq.heading") }),
      /* @__PURE__ */ jsx("p", { className: "strk-section__sub", children: " " }),
      /* @__PURE__ */ jsx("div", { className: "strk-faq__list", children: faqItems2.map((item, i) => {
        const expanded = i === 0;
        const panelId = `faq-panel-${i}`;
        const btnId = `faq-btn-${i}`;
        return /* @__PURE__ */ jsxs("div", { className: "strk-faq__item", children: [
          /* @__PURE__ */ jsxs(
            "button",
            {
              type: "button",
              className: "strk-faq__btn",
              id: btnId,
              "aria-expanded": expanded ? "true" : "false",
              "aria-controls": panelId,
              children: [
                /* @__PURE__ */ jsx("span", { children: item.q }),
                /* @__PURE__ */ jsx(ChevronDown, { className: "strk-faq__icon", size: 16 })
              ]
            }
          ),
          /* @__PURE__ */ jsx(
            "div",
            {
              className: "strk-faq__panel",
              id: panelId,
              role: "region",
              "aria-labelledby": btnId,
              children: /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("div", { className: "strk-faq__panel-inner", children: item.a }) })
            }
          )
        ] }, item.q);
      }) })
    ] })
  }
);
const ClosingCTA = ({ t }) => /* @__PURE__ */ jsx(
  "section",
  {
    className: "strk-section strk-section--closing strk-closing",
    "aria-labelledby": "closing-heading",
    children: /* @__PURE__ */ jsxs("div", { className: "strk-container", children: [
      /* @__PURE__ */ jsx(
        "h2",
        {
          className: "strk-closing__title",
          id: "closing-heading",
          children: t("closing.heading")
        }
      ),
      /* @__PURE__ */ jsx("p", { className: "strk-closing__sub", children: t("closing.sub") }),
      /* @__PURE__ */ jsx(
        "a",
        {
          className: "strk-btn strk-btn--gradient strk-btn--lg",
          href: "/s/ai_site_builder",
          style: { minWidth: 240 },
          children: t("closing.cta")
        }
      )
    ] })
  }
);
const Footer = ({ t }) => {
  const product = t("footer.productLinks") ?? [];
  const company = t("footer.companyLinks") ?? [];
  const resources = t("footer.resourcesLinks") ?? [];
  const legal = t("footer.legalLinks") ?? [];
  return /* @__PURE__ */ jsx("footer", { className: "strk-footer", role: "contentinfo", children: /* @__PURE__ */ jsxs("div", { className: "strk-container", children: [
    /* @__PURE__ */ jsxs("div", { className: "strk-footer__top", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("div", { className: "strk-footer__logo", children: "strikingly AI" }),
        /* @__PURE__ */ jsx("p", { className: "strk-footer__tagline", children: t("footer.tagline") })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("div", { className: "strk-footer__col-title", children: t("footer.product") }),
        /* @__PURE__ */ jsx("ul", { children: product.map((link) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: link.href, children: link.label }) }, link.href + link.label)) })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("div", { className: "strk-footer__col-title", children: t("footer.company") }),
        /* @__PURE__ */ jsx("ul", { children: company.map((link) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: link.href, children: link.label }) }, link.href + link.label)) })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("div", { className: "strk-footer__col-title", children: t("footer.resources") }),
        /* @__PURE__ */ jsx("ul", { children: resources.map((link) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: link.href, children: link.label }) }, link.href + link.label)) })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("div", { className: "strk-footer__col-title", children: t("footer.legal") }),
        /* @__PURE__ */ jsx("ul", { children: legal.map((link) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: link.href, children: link.label }) }, link.href + link.label)) })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "strk-footer__bottom", children: /* @__PURE__ */ jsx("span", { children: t("footer.copyright") }) })
  ] }) });
};
const generatorUrl = (slug) => `/generators/${slug}`;
const initGeneratorsPage = () => {
  if (typeof window === "undefined" || typeof document === "undefined") return;
  if (document.body && document.body.dataset.strkPageInit === "1") return;
  if (document.body) document.body.dataset.strkPageInit = "1";
  const root = document;
  const searchInput = root.getElementById("generators-search");
  const meta = root.getElementById("generators-search-meta");
  const empty = root.getElementById("all-generators-empty");
  const clearBtn = root.getElementById("generators-clear-search");
  const subsecNodes = Array.from(
    root.querySelectorAll("[data-subsec]")
  );
  const cardsBySubsec = subsecNodes.map((subsec) => ({
    slug: subsec.getAttribute("data-subsec"),
    el: subsec,
    cards: Array.from(subsec.querySelectorAll("[data-card]"))
  }));
  const collapseNodes = Array.from(root.querySelectorAll("[data-collapse]"));
  const toggleButtons = Array.from(
    root.querySelectorAll("[data-show-all]")
  );
  const labels = strings.en;
  const showAllLabelFor = (n) => labels.allGenerators.showAll(n);
  const showLessLabel = labels.allGenerators.showLess;
  const countLabelFor = (n) => labels.allGenerators.resultCount(n);
  const setInitialCollapsed = (el, initial) => {
    const cards = el.querySelectorAll("[data-card]");
    cards.forEach((c, i) => {
      if (i >= initial) c.setAttribute("data-overflow", "");
    });
    requestAnimationFrame(() => {
      const visibleH = Array.from(cards).filter((c) => !c.hasAttribute("data-overflow")).reduce((acc, c) => acc + c.getBoundingClientRect().height + 20, 0);
      el.style.maxHeight = visibleH + "px";
    });
  };
  collapseNodes.forEach((el) => {
    const initial = parseInt(el.getAttribute("data-initial") || "6", 10);
    setInitialCollapsed(el, initial);
  });
  toggleButtons.forEach((btn) => {
    btn.getAttribute("data-target");
    root.querySelector(
      `[data-collapse][data-initial]`
    );
    const subsec = btn.closest(".strk-subsec");
    if (!subsec) return;
    const subCollapse = subsec.querySelector("[data-collapse]");
    if (!subCollapse) return;
    parseInt(subCollapse.getAttribute("data-initial") || "6", 10);
    const cards = Array.from(subCollapse.querySelectorAll("[data-card]"));
    const overflowCards = cards.filter(
      (c) => c.hasAttribute("data-overflow")
    );
    btn.addEventListener("click", () => {
      const expanded = btn.getAttribute("aria-expanded") === "true";
      if (expanded) {
        const visibleH = cards.filter((c) => !c.hasAttribute("data-overflow")).reduce((acc, c) => acc + c.getBoundingClientRect().height + 20, 0);
        subCollapse.style.maxHeight = visibleH + "px";
        overflowCards.forEach((c) => c.setAttribute("data-overflow", ""));
        btn.setAttribute("aria-expanded", "false");
        const label = btn.querySelector("[data-label]");
        if (label) label.textContent = showAllLabelFor(cards.length);
      } else {
        overflowCards.forEach((c) => c.removeAttribute("data-overflow"));
        requestAnimationFrame(() => {
          subCollapse.style.maxHeight = subCollapse.scrollHeight + "px";
        });
        btn.setAttribute("aria-expanded", "true");
        const label = btn.querySelector("[data-label]");
        if (label) label.textContent = showLessLabel;
      }
    });
    window.addEventListener("resize", () => {
      if (btn.getAttribute("aria-expanded") === "true") {
        subCollapse.style.maxHeight = subCollapse.scrollHeight + "px";
      } else {
        const visibleH = cards.filter((c) => !c.hasAttribute("data-overflow")).reduce((acc, c) => acc + c.getBoundingClientRect().height + 20, 0);
        subCollapse.style.maxHeight = visibleH + "px";
      }
    });
  });
  const runSearch = (raw) => {
    const q = (raw || "").trim().toLowerCase();
    let totalMatches = 0;
    cardsBySubsec.forEach(({ el, cards }) => {
      let visible = 0;
      cards.forEach((card) => {
        const name = card.getAttribute("data-name") || "";
        const desc = card.getAttribute("data-description") || "";
        const cat = card.getAttribute("data-category") || "";
        const categoryLabel = (categoryLabels[cat] || "").toLowerCase();
        const matches = !q || name.includes(q) || desc.includes(q) || cat === q || categoryLabel.includes(q);
        if (matches) {
          card.classList.remove("strk-card--hidden");
          visible += 1;
        } else {
          card.classList.add("strk-card--hidden");
        }
      });
      if (q && visible === 0) {
        el.classList.add("strk-subsec--hidden");
      } else {
        el.classList.remove("strk-subsec--hidden");
      }
      totalMatches += visible;
    });
    if (meta) {
      meta.textContent = q ? countLabelFor(totalMatches) : "";
    }
    if (empty) {
      if (q && totalMatches === 0) {
        empty.hidden = false;
      } else {
        empty.hidden = true;
      }
    }
  };
  if (searchInput) {
    searchInput.addEventListener("input", (e) => runSearch(e.target.value));
  }
  if (clearBtn) {
    clearBtn.addEventListener("click", () => {
      if (searchInput) {
        searchInput.value = "";
        runSearch("");
        searchInput.focus();
      }
    });
  }
  root.querySelectorAll(".strk-faq__btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const expanded = btn.getAttribute("aria-expanded") === "true";
      btn.setAttribute("aria-expanded", expanded ? "false" : "true");
    });
  });
};
const GeneratorsHubPage = () => {
  const t = (path) => {
    const segments = path.split(".");
    let value = strings.en;
    for (const s of segments) value = value == null ? void 0 : value[s];
    return value ?? "";
  };
  useEffect(() => {
    initGeneratorsPage();
  }, []);
  return /* @__PURE__ */ jsxs("div", { className: "strk-page", children: [
    /* @__PURE__ */ jsx("a", { className: "strk-vh", href: "#main-content", children: "Skip to content" }),
    /* @__PURE__ */ jsx(TopBar, { t }),
    /* @__PURE__ */ jsx(Breadcrumb, { t }),
    /* @__PURE__ */ jsxs("main", { id: "main-content", children: [
      /* @__PURE__ */ jsx(Hero, { t }),
      /* @__PURE__ */ jsx(
        FeaturedGenerators,
        {
          t,
          featured: featuredGenerators,
          generatorUrl
        }
      ),
      /* @__PURE__ */ jsx(BrowseByCategory, { t, categories: browseCategories }),
      /* @__PURE__ */ jsx(AllGenerators, { t, generatorUrl }),
      /* @__PURE__ */ jsx(HowItWorks, { t }),
      /* @__PURE__ */ jsx(WhyStrikingly, { t }),
      /* @__PURE__ */ jsx(FAQ, { t, faqItems }),
      /* @__PURE__ */ jsx(ClosingCTA, { t })
    ] }),
    /* @__PURE__ */ jsx(Footer, { t })
  ] });
};
function render() {
  return renderToString(createElement(GeneratorsHubPage));
}
export {
  render
};
