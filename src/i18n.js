export const strings = {
  en: {
    nav: {
      brand: "strikingly",
      brandSub: "AI",
      breadcrumb: {
        root: "Strikingly",
        current: "AI Generators"
      }
    },
    hero: {
      line1: "BUILD ANY KIND OF SITE",
      line2: "WITH AI, IN AN INSTANT",
      subheadline: "Browse the right generator for what you're building, or jump straight into our AI site builder.",
      primaryCTA: "START BUILDING - IT'S FREE",
      secondaryCTA: "BROWSE GENERATORS"
    },
    featured: {
      title: "FEATURED GENERATORS",
      subtitle: "A few common starting points.",
      data: [
        { id: '1', name: "AI Website Generator", description: "Describe your business, get a full site", category: "Website", slug: "ai-website-generator" },
        { id: '2', name: "Free Portfolio Generator", description: "For creatives, in minutes, no fee", category: "Portfolio", slug: "free-portfolio-generator" },
        { id: '3', name: "AI Landing Page Maker", description: "One-page sites built to convert", category: "Landing Page", slug: "ai-landing-page-maker" },
        { id: '4', name: "Online Store Builder", description: "Start selling without writing code", category: "Store", slug: "online-store-builder" },
        { id: '5', name: "Link-in-Bio Generator", description: "One link for all your channels", category: "Link-in-Bio", slug: "link-in-bio-generator" },
        { id: '6', name: "One-Page Website Builder", description: "Simple sites, single scroll", category: "Website", slug: "one-page-website-builder" },
        { id: '7', name: "Wedding Website Generator", description: "Share your day with guests", category: "Website", slug: "wedding-website-generator" },
        { id: '8', name: "Restaurant Website Builder", description: "Menu, hours, reservations, done", category: "Website", slug: "restaurant-website-builder" },
        { id: '9', name: "Blog Generator for Beginners", description: "Publish-ready in minutes", category: "Blog", slug: "blog-generator-for-beginners" }
      ]
    },
    categories: {
      title: "BROWSE BY CATEGORY",
      data: [
        { id: "websites", name: "Websites", description: "AI-built business and personal sites for any goal.", slug: "websites" },
        { id: "landing-pages", name: "Landing Pages", description: "Single-page sites built to convert visitors fast.", slug: "landing-pages" },
        { id: "portfolios", name: "Portfolios", description: "Showcase your work with a clean, focused site.", slug: "portfolios" },
        { id: "blogs", name: "Blogs", description: "Publish-ready blogs with built-in SEO basics.", slug: "blogs" },
        { id: "stores", name: "Online Stores", description: "Sell products online with payments built in.", slug: "stores" },
        { id: "link-in-bio", name: "Link-in-Bio", description: "One link, all your places. Made for creators.", slug: "link-in-bio" }
      ]
    },
    allGenerators: {
      title: "ALL GENERATORS",
      subtitle: "Sixty-plus generators, organized by what you're building.",
      searchPlaceholder: "Search generators...",
      searchAriaLabel: "Search generators",
      matchCount: "generators match",
      emptyState: {
        title: "Can't find it?",
        linkText: "Start with our AI builder.",
        clearSearch: "Clear search"
      },
      showAll: "Show all [count] generators",
      sections: {
        websites: {
          title: "Websites",
          description: "Full-featured sites for businesses, NGOs, and personal brands.",
          items: [
            { name: "AI Website Generator", description: "A general purpose website builder for any project.", slug: "ai-website-generator" },
            { name: "Free Website Builder for Photographers", description: "Beautiful galleries for your photography business.", slug: "free-website-builder-for-photographers" },
            { name: "One-Page Wedding Website Builder", description: "Keep guests informed about your big day.", slug: "one-page-wedding-website-builder" },
            { name: "Restaurant Website Builder", description: "Menu, hours, and reservations made easy.", slug: "restaurant-website-builder" },
            { name: "Real Estate Website Maker", description: "Showcase properties and capture leads effectively.", slug: "real-estate-website-maker" },
            { name: "Consulting Service Site", description: "Professional presence for independent consultants.", slug: "consulting-service-site" },
            { name: "Non-Profit Organization Hub", description: "Share your mission and collect donations.", slug: "non-profit-organization-hub" },
            { name: "Dental Clinic Generator", description: "Service listings and appointment scheduling.", slug: "dental-clinic-generator" },
            { name: "Fitness Coach Website", description: "Sell training programs and manage clients.", slug: "fitness-coach-website" },
            { name: "Law Firm Presence Builder", description: "A serious, trusted look for legal professionals.", slug: "law-firm-presence-builder" },
            { name: "Architecture Studio Portfolio", description: "Visual-heavy layouts for design projects.", slug: "architecture-studio-portfolio" },
            { name: "Co-working Space Showcase", description: "Map integration and amenities listings.", slug: "co-working-space-showcase" }
          ]
        },
        "landing-pages": {
          title: "Landing Pages",
          description: "High-converting single pages for apps, products, and events.",
          items: [
            { name: "AI Landing Page Maker", description: "Optimized for conversion and lead capture.", slug: "ai-landing-page-maker" },
            { name: "Mobile App Launch Page", description: "Perfect for showing off your app's top features.", slug: "mobile-app-launch-page" },
            { name: "SaaS Product Showcase", description: "Clear pricing tables and benefit blocks.", slug: "saas-product-showcase" },
            { name: "Ebook Sales Page", description: "Focus on your content and clear buy buttons.", slug: "ebook-sales-page" },
            { name: "Webinar Registration Page", description: "Countdown timers and simple signup forms.", slug: "webinar-registration-page" },
            { name: "Waitlist Generator", description: "Minimalist page to build buzz for your launch.", slug: "waitlist-generator" },
            { name: "Podcast Landing Page", description: "Audio player integration and platform links.", slug: "podcast-landing-page" },
            { name: "Conference Event Site", description: "Schedule, speakers, and ticket information.", slug: "conference-event-site" }
          ]
        },
        portfolios: {
          title: "Portfolios",
          description: "Showcase your work and skills with a professional gallery.",
          items: [
            { name: "Free Portfolio Generator", description: "Clean, focused layouts for creatives.", slug: "free-portfolio-generator" },
            { name: "Graphic Design Portfolio", description: "High-resolution project images and case studies.", slug: "graphic-design-portfolio" },
            { name: "Copywriter Showcase", description: "Text-centric layouts for writing professional.", slug: "copywriter-showcase" },
            { name: "Software Engineer CV", description: "Technical skills and project link integration.", slug: "software-engineer-cv" },
            { name: "Model Portfolio Builder", description: "Large-format imagery and booking contacts.", slug: "model-portfolio-builder" },
            { name: "Illustrator Art Gallery", description: "Whimsical, colorful layouts for digital art.", slug: "illustrator-art-gallery" },
            { name: "Academic Researcher Page", description: "Publication lists and citation management.", slug: "academic-researcher-page" },
            { name: "UX Designer Case Study", description: "Workflow documentation and results focused.", slug: "ux-designer-case-study" }
          ]
        },
        blogs: {
          title: "Blogs",
          description: "Publish your thoughts and build an audience with SEO-ready blogs.",
          items: [
            { name: "Blog Generator for Beginners", description: "Start writing today, no tech setup needed.", slug: "blog-generator-for-beginners" },
            { name: "Food Blogger Presence", description: "Recipe blocks and food photography focus.", slug: "food-blogger-presence" },
            { name: "Travel Journal Builder", description: "Map snippets and multi-day post structures.", slug: "travel-journal-builder" },
            { name: "Tech News Layout", description: "List-heavy homepage for frequent updates.", slug: "tech-news-layout" },
            { name: "Lifestyle Magazine Page", description: "Mixed media and rich category navigation.", slug: "lifestyle-magazine-page" },
            { name: "Personal Newsletter Hub", description: "Focus on email signups and archives.", slug: "personal-newsletter-hub" },
            { name: "Beauty Review Blog", description: "Product rating widgets and comparison grids.", slug: "beauty-review-blog" },
            { name: "Parenting Tip Blog", description: "Community-friendly comments and sharing.", slug: "parenting-tip-blog" }
          ]
        },
        stores: {
          title: "Online Stores",
          description: "Scale your business with powerful e-commerce features built-in.",
          items: [
            { name: "Online Store Builder", description: "Sell physical or digital products instantly.", slug: "online-store-builder" },
            { name: "Fashion Boutique Site", description: "Size variants and clothing category filters.", slug: "fashion-boutique-site" },
            { name: "Digital Download Portal", description: "Automated delivery for PDF and zip files.", slug: "digital-download-portal" },
            { name: "Subscription Box Site", description: "Recurring billing and monthly plan options.", slug: "subscription-box-site" },
            { name: "Handmade Crafts Shop", description: "Tell your story alongside your products.", slug: "handmade-crafts-shop" },
            { name: "Online Grocery Store", description: "Inventory management and delivery zones.", slug: "online-grocery-store" },
            { name: "Dropshipping Hub", description: "Product import and automated fulfillment.", slug: "dropshipping-hub" },
            { name: "Pet Supply Store", description: "Auto-reorder and pet profile management.", slug: "pet-supply-store" }
          ]
        },
        "link-in-bio": {
          title: "Link-in-Bio",
          description: "One link for all your platforms, optimized for social bios.",
          items: [
            { name: "Link-in-Bio Generator", description: "The ultimate hub for your social presence.", slug: "link-in-bio-generator" },
            { name: "Influencer Hub", description: "Featured brand partnerships and latest videos.", slug: "influencer-hub" },
            { name: "Small Business Card", description: "Quick contacts and local business details.", slug: "small-business-card" },
            { name: "Musician Link Hub", description: "Stream links and tour date announcements.", slug: "musician-link-hub" },
            { name: "Creator Portfolio Hub", description: "Links to Patreon, YouTube, and Store.", slug: "creator-portfolio-hub" },
            { name: "Gamer Profile Page", description: "Twitch status and discord community links.", slug: "gamer-profile-page" },
            { name: "Author Bio Page", description: "Links to books and mailing list signup.", slug: "author-bio-page" },
            { name: "Freelancer Quick Link", description: "Portfolio highlights and project inquiries.", slug: "freelancer-quick-link" }
          ]
        }
      }
    },
    howItWorks: {
      title: "HOW IT WORKS",
      steps: [
        { number: 1, title: "PICK A GENERATOR", body: "Browse by category or search to find one that fits your goal." },
        { number: 2, title: "DESCRIBE YOUR SITE", body: "Tell our AI builder about your business in a sentence or two." },
        { number: 3, title: "GENERATE AND PUBLISH", body: "Get a fully built site in seconds. Customize anything, then go live." }
      ]
    },
    whyStrikingly: {
      title: "WHY STRIKINGLY",
      cards: [
        { title: "LIVE IN SECONDS", body: "Describe your site, we build it. No setup, no learning curve." },
        { title: "MOBILE BY DEFAULT", body: "Every generator produces responsive sites that work on any device." },
        { title: "FREE TO START", body: "Generate, customize, and publish without a credit card." }
      ]
    },
    faq: {
      title: "FREQUENTLY ASKED QUESTIONS",
      questions: [
        {
          q: "What is an AI site generator?",
          a: "An AI site generator is a tool that uses artificial intelligence to build a complete website based on your description. Instead of starting with a blank canvas or a generic template, you tell the AI what your site is about, and it automatically handles the layout, color scheme, content generation, and image selection tailored to your specific needs."
        },
        {
          q: "How is a generator different from a template?",
          a: "While templates are fixed starting points that you have to manually adjust, a generator is dynamic. It analyzes your input to create a unique structure that fits your goals. One generator can produce thousands of different site variations, ensuring your site doesn't look like everyone else's while saving you hours of manual editing."
        },
        {
          q: "Are these generators free to use?",
          a: "Yes, you can use our AI generators to build and preview your site for free. Strikingly offers a free tier that allows you to publish your site on a strikingly.com subdomain. We also offer premium plans if you want to connect a custom domain or unlock advanced features like a full online store."
        },
        {
          q: "What kinds of sites can I build?",
          a: "You can build almost anything! From simple personal blogs and portfolios to complex business websites and online stores. Our network of over 60 specialized generators covers industries like restaurants, real estate, design studios, and more, as well as specific goals like event landing pages or social 'link-in-bio' hubs."
        },
        {
          q: "Can I customize what the generator produces?",
          a: "Absolutely. The generator gives you a professional starting point, but you have full control. Once your site is generated, you can use our intuitive drag-and-drop editor to change text, swap images, add new sections, and tweak every detail to match your brand perfectly."
        },
        {
          q: "Do generated sites work on mobile?",
          a: "Yes, every site built with Strikingly is mobile-responsive by default. This means your layout will automatically adjust to look great on smartphones, tablets, and desktops alike, providing a smooth experience for all your visitors regardless of the device they use."
        }
      ]
    },
    closingCTA: {
      title: "READY TO BUILD?",
      subtitle: "Pick a generator above, or jump straight into our AI builder.",
      button: "START WITH AI BUILDER"
    },
    footer: {
      logo: "strikingly",
      copyright: "Strikingly",
      columns: [
        {
          title: "Product",
          links: [
            { text: "About", href: "/about" },
            { text: "Pricing", href: "/pricing" },
            { text: "Templates", href: "/templates" }
          ]
        },
        {
          title: "Support",
          links: [
            { text: "Support", href: "/support" },
            { text: "Blog", href: "/blog" }
          ]
        },
        {
          title: "Legal",
          links: [
            { text: "Terms", href: "/terms" },
            { text: "Privacy", href: "/privacy" }
          ]
        }
      ]
    }
  }
};
