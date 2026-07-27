// Centralized content for the SSourcing China site.
// Everything is intentionally written in a calm, professional, B2B voice.

export const nav = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "How It Works", to: "/how-it-works" },
  { label: "Products We Source", to: "/products" },
  { label: "Case Studies", to: "/case-studies" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" },
];

export const heroTrust = [
  "Based in Shenzhen & Yiwu",
  "Audited supplier network",
  "On-site QC & pre-shipment inspection",
  "FBA & DDP shipping coordination",
];

export const services = [
  {
    id: "supplier-sourcing",
    title: "Supplier Sourcing",
    eyebrow: "01 — Sourcing",
    summary:
      "We identify and shortlist 3–5 verified manufacturers that match your product spec, target price, and order volume.",
    points: [
      "Supplier search against a 12,000+ audited factory database",
      "Capability check: production lines, equipment, workforce",
      "Side-by-side quotation comparison and negotiation",
    ],
    icon: "Search",
  },
  {
    id: "factory-verification",
    title: "Factory Verification",
    eyebrow: "02 — Verification",
    summary:
      "Independent background checks and on-site audits so you know who is actually making your product before you commit a deposit.",
    points: [
      "Business license, export record, legal-entity check",
      "On-site audit with photo and video report",
      "Verification of trade license, ISO/BSCI where applicable",
    ],
    icon: "ShieldCheck",
  },
  {
    id: "quality-control",
    title: "Quality Control & Inspection",
    eyebrow: "03 — Quality",
    summary:
      "In-line, pre-shipment and during-production inspections against AQL standards, with a written report and photos within 24 hours.",
    points: [
      "DUPRO, pre-shipment and full inspections",
      "AQL 1.0 / 2.5 / 4.0 sampling plans",
      "Defect log, lab tests, corrective-action follow-up",
    ],
    icon: "ClipboardCheck",
  },
  {
    id: "production-follow-up",
    title: "Production Follow-Up",
    eyebrow: "04 — Production",
    summary:
      "We sit between you and the factory. Weekly production updates, milestone photos, and fast escalation when schedules slip.",
    points: [
      "Weekly photo and video updates from the line",
      "Schedule tracking against your PO milestones",
      "Proactive escalation on delays or material issues",
    ],
    icon: "Factory",
  },
  {
    id: "shipping-logistics",
    title: "Shipping & Logistics",
    eyebrow: "05 — Shipping",
    summary:
      "We compare ocean, air, rail and courier rates, handle export documents, and book end-to-end shipping to your warehouse or FBA.",
    points: [
      "FCL, LCL, air, rail and express comparison",
      "Export documents: commercial invoice, packing list, COO",
      "Door-to-door including DDP and Amazon FBA delivery",
    ],
    icon: "Ship",
  },
  {
    id: "sampling-prototyping",
    title: "Sampling & Prototyping",
    eyebrow: "06 — Sampling",
    summary:
      "Pre-production samples shipped to your office for sign-off, with written feedback sent to the factory so tooling and materials lock in correctly.",
    points: [
      "Sample collection, photo and video record",
      "Written sample evaluation for your team",
      "Tooling, color and material sign-off coordination",
    ],
    icon: "PackageOpen",
  },
];

export const processSteps = [
  {
    step: "01",
    title: "Tell us what you need",
    summary:
      "Share a brief, a reference product or a spec sheet. We confirm scope within one business day.",
    deliverable: "Sourcing brief confirmed",
  },
  {
    step: "02",
    title: "Supplier shortlist",
    summary:
      "We identify 3–5 pre-vetted factories that match your requirements and budget.",
    deliverable: "Shortlist with quotes",
  },
  {
    step: "03",
    title: "Sample & verification",
    summary:
      "We arrange samples, run a factory audit, and verify licenses, capacity and trade history.",
    deliverable: "Sample report + audit",
  },
  {
    step: "04",
    title: "Production & QC",
    summary:
      "After deposit and PO, we run in-line and pre-shipment inspections against AQL standards.",
    deliverable: "Inspection reports",
  },
  {
    step: "05",
    title: "Shipping & delivery",
    summary:
      "We book the best route, prepare export documents and deliver to your door, port or FBA.",
    deliverable: "Goods at destination",
  },
];

export const productCategories = [
  {
    id: "consumer-electronics",
    title: "Consumer electronics",
    description:
      "Accessories, audio devices, smart-home gadgets, charging products, cables and small appliances.",
    examples: ["Bluetooth speakers", "Wireless earbuds", "USB hubs", "LED lighting"],
  },
  {
    id: "home-and-kitchen",
    title: "Home & kitchen",
    description:
      "Cookware, drinkware, storage, organizers, cleaning tools and décor made in ceramic, glass, silicone and stainless steel.",
    examples: ["Glass containers", "Bamboo boards", "Steel cookware", "Ceramic mugs"],
  },
  {
    id: "apparel-and-textiles",
    title: "Apparel & textiles",
    description:
      "Knitwear, woven garments, workwear, home textiles and accessories. We work with audited fabric mills and cut-and-sew workshops.",
    examples: ["T-shirts", "Workwear", "Towels", "Bedding"],
  },
  {
    id: "beauty-and-personal-care",
    title: "Beauty & personal care",
    description:
      "Skincare, haircare, grooming tools and packaging. We verify GMP, ingredient lists and cosmetic notifications before sampling.",
    examples: ["Serums", "Brushes", "Bottles & jars", "Razors"],
  },
  {
    id: "outdoor-and-sports",
    title: "Outdoor & sports",
    description:
      "Camping, fitness, cycling and water-sports products tested for material safety, load ratings and finish durability.",
    examples: ["Camping tents", "Yoga mats", "Bike accessories", "Fishing gear"],
  },
  {
    id: "industrial-and-hardware",
    title: "Industrial & hardware",
    description:
      "Custom machined parts, fasteners, tools, electrical components and OEM/ODM builds for B2B buyers.",
    examples: ["CNC parts", "Hand tools", "Power tools", "Cable assemblies"],
  },
  {
    id: "packaging-and-disposables",
    title: "Packaging & disposables",
    description:
      "Custom boxes, mailers, paper bags, food-grade containers and eco-friendly substitutes with print and tooling support.",
    examples: ["Mailer boxes", "Kraft bags", "PLA cups", "Labels"],
  },
  {
    id: "kids-and-baby",
    title: "Kids & baby",
    description:
      "Toys, nursery products, kids' apparel and baby care items with age-grade testing and CPSIA / EN71 documentation.",
    examples: ["Wooden toys", "Strollers", "Baby bottles", "Plush"],
  },
];

export const problems = [
  {
    title: "You cannot travel to China for every order",
    summary:
      "Most buyers can't be on the factory floor for every PO. We are — and we send you the same evidence you would collect yourself: photos, videos, measurements and a written report.",
    icon: "PlaneTakeoff",
  },
  {
    title: "You don't want to wire 30–50% to a stranger",
    summary:
      "We hold no funds. You pay the factory directly. Our role is to verify who you're paying and what you're getting in return.",
    icon: "Lock",
  },
  {
    title: "You got burned by a middleman last time",
    summary:
      "We insist on factory-direct relationships. Before we recommend a supplier, we confirm legal-entity, export history, real production lines and references you can call.",
    icon: "AlertTriangle",
  },
  {
    title: "You need consistent quality at scale",
    summary:
      "AQL-based inspections, written reports, and a corrective-action loop with the factory mean your second, fifth and twentieth container perform like the first sample you signed off.",
    icon: "BadgeCheck",
  },
  {
    title: "Your broker only quotes the cheapest freight",
    summary:
      "We compare ocean, air, rail and courier by actual transit time and landed cost — not the line that pays us the highest commission.",
    icon: "ShipWheel",
  },
  {
    title: "You speak English; your factory doesn't",
    summary:
      "Our project managers communicate in English, Chinese, Spanish and German. Specifications, complaints and changes are translated, written down, and confirmed in writing.",
    icon: "Languages",
  },
];

export const trustStats = [
  { value: "10+", label: "Years sourcing in China" },
  { value: "1,200+", label: "Audited factories in network" },
  { value: "380+", label: "Active B2B clients globally" },
  { value: "$80M+", label: "Annual FOB value managed" },
];

export const trustLogos = [
  "Northwind Outfitters",
  "Acme Home Goods",
  "Harbor & Stone",
  "Verde Brands",
  "Forge Hardware Co.",
  "Pacific Field Supply",
];

export const caseStudies = [
  {
    id: "kitchenware-oem",
    industry: "Home & kitchen",
    title:
      "Cut 18% off landed cost for a US kitchenware importer without changing the SKU",
    summary:
      "A US importer of stainless steel cookware was buying through a Hong Kong trading company. We verified the real factory, negotiated direct pricing, and reran the pre-shipment inspection. Landed cost per unit dropped 18% with the same AQL 2.5 standard.",
    metrics: [
      { label: "Landed cost reduction", value: "18%" },
      { label: "Lead time", value: "32 days" },
      { label: "Defect rate", value: "0.6%" },
    ],
    imageQuery:
      "[case-kitchenware-desc] [case-kitchenware-title] [cases-section-title]",
  },
  {
    id: "fba-electronics",
    industry: "Consumer electronics",
    title:
      "Took a new Bluetooth speaker from sample to Amazon FBA in 47 days",
    summary:
      "A European consumer-electronics startup needed a US-compliant Bluetooth speaker on FBA within one season. We sourced 4 factories, coordinated CE / FCC documentation, ran pre-shipment inspection, and delivered to three FBA warehouses.",
    metrics: [
      { label: "Sample to FBA", value: "47 days" },
      { label: "Compliance", value: "CE / FCC / RoHS" },
      { label: "Units delivered", value: "8,400" },
    ],
    imageQuery:
      "[case-electronics-desc] [case-electronics-title] [cases-section-title]",
  },
  {
    id: "apparel-workwear",
    industry: "Apparel & workwear",
    title:
      "Stabilized quality for a workwear program at 80,000 pieces per quarter",
    summary:
      "An Australian industrial brand was seeing 4% defect rates on hi-vis workwear. We added inline inspections at cut, sew and packing, switched to a fabric mill with OEKO-TEX certification, and tightened the AQL plan to 1.5.",
    metrics: [
      { label: "Defect rate", value: "0.4%" },
      { label: "Quarterly volume", value: "80k pcs" },
      { label: "Fabric cert.", value: "OEKO-TEX" },
    ],
    imageQuery:
      "[case-apparel-desc] [case-apparel-title] [cases-section-title]",
  },
  {
    id: "beauty-skincare",
    industry: "Beauty & personal care",
    title:
      "Sourced and qualified three GMP skincare factories for a UK private-label brand",
    summary:
      "A UK skincare brand needed three GMP-compliant contract manufacturers for a 12-SKU launch. We audited 8 factories, qualified 3, ran pilot batches, and built a multi-factory backup plan before the public launch.",
    metrics: [
      { label: "Factories qualified", value: "3" },
      { label: "SKUs launched", value: "12" },
      { label: "Audit pass", value: "100%" },
    ],
    imageQuery:
      "[case-beauty-desc] [case-beauty-title] [cases-section-title]",
  },
];

export const faqs = [
  {
    q: "What does a China sourcing agent actually do?",
    a: "We act as your local team in China. We find factories, verify them, take and ship samples, run quality inspections, follow production, and coordinate shipping. You keep one point of contact for the whole project.",
  },
  {
    q: "How is SSourcing China different from a trading company?",
    a: "We do not take title to the goods and we do not mark up the factory price. You pay the factory directly. Our fee is a transparent service fee for the work we do — usually a fixed project fee or a percentage of the order.",
  },
  {
    q: "What is a typical minimum order quantity (MOQ)?",
    a: "It depends on the product. Stock items can ship from 50 units, while custom products typically start at 500–1,000 units. We will tell you the realistic MOQ for your category before you commit.",
  },
  {
    q: "How do you verify a factory?",
    a: "We check the business license, export history, legal-entity, production capacity, equipment, workforce, and existing customers. For serious orders we run a full on-site audit with a written report and photo evidence.",
  },
  {
    q: "Can you handle Amazon FBA and DDP shipping?",
    a: "Yes. We deliver to Amazon FBA warehouses in the US, EU, UK, JP and AU, and we can quote DDP (duties paid) for many destinations including DDP to EU with VAT and EORI handled.",
  },
  {
    q: "How long does a typical project take?",
    a: "Samples take 5–10 days, production 25–45 days depending on complexity, plus 12–35 days for shipping by ocean. A typical end-to-end project from inquiry to delivery is 60–90 days.",
  },
  {
    q: "How much do your services cost?",
    a: "Sourcing-only projects start from USD 200 per supplier shortlist. Full-service programs (sourcing + QC + shipping) usually run 3–7% of the order value, with a minimum project fee. You receive a written quote before we start.",
  },
  {
    q: "Do you sign an NDA?",
    a: "Yes. We routinely sign NDAs before reviewing buyer specifications, product designs or supplier lists.",
  },
];

export const blogPosts = [
  {
    id: "aql-101",
    title: "AQL 101: how to choose a sampling plan for your product",
    excerpt:
      "Most importers use AQL 2.5 by default. Here's when to use 1.0, 2.5 or 4.0, and why it matters for your defect rate.",
    category: "Quality control",
    readTime: "7 min read",
    date: "June 12, 2026",
  },
  {
    id: "fcl-vs-lcl",
    title: "FCL vs LCL: which ocean shipping option is right for your order",
    excerpt:
      "When does LCL actually save money? When does it add 12 days of delays and surprise fees? A practical decision tree.",
    category: "Logistics",
    readTime: "6 min read",
    date: "May 28, 2026",
  },
  {
    id: "factory-audit-checklist",
    title: "The 12-point factory audit checklist we use on every new supplier",
    excerpt:
      "From export license to fire exits — the same checklist our project managers run in person before we recommend a factory.",
    category: "Sourcing",
    readTime: "9 min read",
    date: "May 9, 2026",
  },
  {
    id: "fba-prep-mistakes",
    title: "5 Amazon FBA prep mistakes that delay your inventory at the warehouse",
    excerpt:
      "Carton labels, suffocation warnings, poly bag thickness — small things that add days of detention fees at the Amazon dock.",
    category: "Logistics",
    readTime: "5 min read",
    date: "April 22, 2026",
  },
  {
    id: "incoterms-2026",
    title: "Incoterms 2026 in plain English for first-time importers",
    excerpt:
      "EXW, FOB, DDP — what they mean for your budget, your risk, and who books the truck. With worked examples.",
    category: "Logistics",
    readTime: "8 min read",
    date: "April 3, 2026",
  },
  {
    id: "nda-with-factory",
    title: "How to protect your product design when working with a Chinese factory",
    excerpt:
      "NDAs alone rarely stop copycats. The stronger tool is a tooling ownership clause and a 30/70 payment schedule. Here is how we structure it.",
    category: "Sourcing",
    readTime: "6 min read",
    date: "March 18, 2026",
  },
];

export const trustStrip = [
  "10+ years operating",
  "12,000+ audited factories",
  "EN / ES / DE / ZH speaking PMs",
  "AQL-based inspections",
  "NDA on request",
];
