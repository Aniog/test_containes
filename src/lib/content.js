export const SITE = {
  name: "SSourcing China",
  shortName: "SSourcing",
  tagline: "China Sourcing Agent for Global Buyers",
  email: "hello@ssourcingchina.com",
  phone: "+86 755 8888 0000",
  whatsapp: "+86 138 0000 0000",
  address: "Floor 18, Tower B, Kerry Plaza, Futian District, Shenzhen, China",
  hours: "Mon–Fri, 9:00–18:00 (GMT+8)",
}

export const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "How It Works", to: "/how-it-works" },
  { label: "Products We Source", to: "/products" },
  { label: "Case Studies", to: "/case-studies" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" },
]

export const SERVICES = [
  {
    id: "supplier-sourcing",
    icon: "Search",
    title: "Supplier Sourcing",
    summary:
      "We identify and shortlist vetted manufacturers matched to your product specs, MOQ, and target price.",
    points: [
      "Multi-supplier comparison with transparent quotes",
      "Factory capability and capacity assessment",
      "Negotiation on price, MOQ, and payment terms",
    ],
  },
  {
    id: "factory-verification",
    icon: "ShieldCheck",
    title: "Factory Verification",
    summary:
      "On-site and documentary audits confirm a factory is real, legal, and capable before you commit.",
    points: [
      "Business license and export qualification checks",
      "On-site factory visits with photo and video reports",
      "Production line and quality system audit",
    ],
  },
  {
    id: "quality-inspection",
    icon: "ClipboardCheck",
    title: "Quality Inspection",
    summary:
      "Independent QC inspections at every key stage catch defects before goods ship.",
    points: [
      "Pre-production material and sample checks",
      "During-production (DUPRO) inspections",
      "Pre-shipment (PSI) AQL-based inspection",
    ],
  },
  {
    id: "production-follow-up",
    icon: "Factory",
    title: "Production Follow-Up",
    summary:
      "We track your order from deposit to delivery and keep you informed of real progress.",
    points: [
      "Weekly production status updates with photos",
      "Schedule monitoring and delay early-warning",
      "Direct coordination with the factory team",
    ],
  },
  {
    id: "shipping-logistics",
    icon: "Ship",
    title: "Shipping & Logistics",
    summary:
      "Consolidation, freight forwarding, and customs paperwork handled end to end.",
    points: [
      "Cargo consolidation from multiple suppliers",
      "Sea, air, and express freight options compared",
      "Customs documents and destination coordination",
    ],
  },
  {
    id: "amazon-fba-prep",
    icon: "Package",
    title: "Amazon FBA Prep",
    summary:
      "Labeling, repackaging, and FNSKU compliance for direct-to-Amazon shipments.",
    points: [
      "FNSKU labeling and poly-bagging",
      "FBA packaging and prep compliance",
      "Direct shipping to Amazon fulfillment centers",
    ],
  },
]

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Share Your Requirements",
    description:
      "Send us product details, target price, quantity, and quality expectations. The more specific, the better the match.",
  },
  {
    step: "02",
    title: "Supplier Sourcing & Shortlist",
    description:
      "We search our verified network and the market, then present 2–4 qualified suppliers with compared quotes.",
  },
  {
    step: "03",
    title: "Factory Verification",
    description:
      "We audit the shortlisted factories on-site and document business legality, capacity, and quality systems.",
  },
  {
    step: "04",
    title: "Sample & Quote Confirmation",
    description:
      "Samples are arranged and evaluated. You confirm the supplier, price, and specifications before production.",
  },
  {
    step: "05",
    title: "Production & QC Follow-Up",
    description:
      "We monitor production progress and run pre-production, during-production, and pre-shipment inspections.",
  },
  {
    step: "06",
    title: "Shipping & Delivery",
    description:
      "Goods are consolidated, freight is booked, customs documents prepared, and your order is delivered.",
  },
]

export const PRODUCT_CATEGORIES = [
  {
    id: "consumer-electronics",
    title: "Consumer Electronics",
    description:
      "Audio devices, smart home gadgets, accessories, and small appliances from certified factories.",
    imgId: "prod-electronics-a1b2",
    titleId: "prod-electronics-title",
    descId: "prod-electronics-desc",
  },
  {
    id: "home-living",
    title: "Home & Living",
    description:
      "Kitchenware, home textiles, furniture, and decor with consistent material and finish quality.",
    imgId: "prod-home-c3d4",
    titleId: "prod-home-title",
    descId: "prod-home-desc",
  },
  {
    id: "apparel-textiles",
    title: "Apparel & Textiles",
    description:
      "Fashion, activewear, and fabrics with size-set, fabric, and stitching inspections.",
    imgId: "prod-apparel-e5f6",
    titleId: "prod-apparel-title",
    descId: "prod-apparel-desc",
  },
  {
    id: "promotional-products",
    title: "Promotional Products",
    description:
      "Branded giveaways, corporate gifts, and event merchandise with logo and print QC.",
    imgId: "prod-promo-g7h8",
    titleId: "prod-promo-title",
    descId: "prod-promo-desc",
  },
  {
    id: "industrial-hardware",
    title: "Industrial & Hardware",
    description:
      "Tools, fittings, and components with material certificates and dimensional checks.",
    imgId: "prod-industrial-i9j0",
    titleId: "prod-industrial-title",
    descId: "prod-industrial-desc",
  },
  {
    id: "beauty-personal-care",
    title: "Beauty & Personal Care",
    description:
      "Cosmetics, skincare, and grooming items with formulation and packaging compliance review.",
    imgId: "prod-beauty-k1l2",
    titleId: "prod-beauty-title",
    descId: "prod-beauty-desc",
  },
]

export const PROBLEMS = [
  {
    icon: "AlertTriangle",
    problem: "Suppliers that disappear after deposit",
    solution:
      "We verify business licenses and visit factories on-site before any payment, so you only deal with real, accountable manufacturers.",
  },
  {
    icon: "PackageX",
    problem: "Inconsistent product quality between orders",
    solution:
      "AQL-based pre-shipment inspections and approved golden samples lock in quality on every batch, not just the first.",
  },
  {
    icon: "Languages",
    problem: "Language barriers and miscommunication",
    solution:
      "Our bilingual team translates specs into precise Chinese instructions and confirms understanding with the factory in writing.",
  },
  {
    icon: "Clock",
    problem: "Unexplained production delays",
    solution:
      "Weekly progress reports with photos and an early-warning system flag delays while there is still time to act.",
  },
  {
    icon: "FileWarning",
    problem: "Customs and documentation errors",
    solution:
      "We prepare and double-check all shipping and customs documents to reduce holds and surprise fees at destination.",
  },
  {
    icon: "ShieldAlert",
    problem: "No recourse when something goes wrong",
    solution:
      "Contracts, inspection reports, and a local team on the ground give you leverage to resolve issues directly in China.",
  },
]

export const TRUST_POINTS = [
  {
    stat: "12+",
    label: "Years sourcing from China",
  },
  {
    stat: "3,000+",
    label: "Suppliers in verified network",
  },
  {
    stat: "40+",
    label: "Countries served",
  },
  {
    stat: "98%",
    label: "Pre-shipment inspection pass rate",
  },
]

export const CASE_STUDIES = [
  {
    id: "electronics-startup",
    client: "North American audio brand",
    industry: "Consumer Electronics",
    challenge:
      "A startup needed a reliable Bluetooth speaker manufacturer but had no China presence and kept finding trading companies posing as factories.",
    approach:
      "We audited 6 candidate factories, verified 2 true manufacturers, ran sample evaluation, and set up a pre-shipment AQL inspection plan.",
    result:
      "First production run passed inspection at 99.2% yield, delivered 3 weeks ahead of the client's launch window.",
    metrics: [
      { label: "Defect rate", value: "0.8%" },
      { label: "Time to first order", value: "5 weeks" },
      { label: "Cost saving vs. trading co.", value: "22%" },
    ],
    imgId: "case-electronics-m3n4",
    titleId: "case-electronics-title",
    descId: "case-electronics-desc",
  },
  {
    id: "home-brand",
    client: "European home goods retailer",
    industry: "Home & Living",
    challenge:
      "A retailer struggled with inconsistent ceramic finish quality across batches and rising defect returns.",
    approach:
      "We established a golden sample, added during-production inspections, and worked with the factory to tighten its kiln process controls.",
    result:
      "Return rate dropped by 73% over two seasons and the retailer expanded the line from 8 to 24 SKUs.",
    metrics: [
      { label: "Return rate reduction", value: "73%" },
      { label: "SKU expansion", value: "8 → 24" },
      { label: "Inspection pass rate", value: "99.5%" },
    ],
    imgId: "case-home-o5p6",
    titleId: "case-home-title",
    descId: "case-home-desc",
  },
  {
    id: "promo-campaign",
    client: "Global marketing agency",
    industry: "Promotional Products",
    challenge:
      "An agency needed 50,000 branded items for a campaign with a fixed deadline and multiple suppliers involved.",
    approach:
      "We consolidated production across 3 factories, ran pre-shipment inspections on each, and coordinated a single consolidated shipment.",
    result:
      "All 50,000 units delivered on time, fully inspected, with consolidated freight saving 31% versus separate shipments.",
    metrics: [
      { label: "Units delivered", value: "50,000" },
      { label: "On-time delivery", value: "100%" },
      { label: "Freight saving", value: "31%" },
    ],
    imgId: "case-promo-q7r8",
    titleId: "case-promo-title",
    descId: "case-promo-desc",
  },
]

export const FAQS = [
  {
    q: "What does a sourcing agent actually do?",
    a: "A sourcing agent acts as your local team in China. We find qualified suppliers, verify they are real and capable, negotiate terms, inspect quality, follow production, and coordinate shipping — so you can buy from China without setting up your own office or traveling for every order.",
  },
  {
    q: "How do you charge for your services?",
    a: "We work on a transparent model that may include a sourcing fee, an inspection fee per visit, and a handling fee on shipments. The exact structure depends on your product and order volume. We share a clear quote before any work begins — no hidden commissions from suppliers.",
  },
  {
    q: "Do you take commissions from factories?",
    a: "We are transparent about our compensation. Our primary loyalty is to you, the buyer. Any factory-side rebates are disclosed, and our recommendations are based on your requirements, not on which factory pays us most.",
  },
  {
    q: "What is the minimum order quantity (MOQ) you can support?",
    a: "MOQ depends entirely on the product and the factory. We help you find factories whose MOQ matches your needs, and we can often negotiate lower MOQs for first orders, especially when you commit to a production schedule.",
  },
  {
    q: "Can you inspect goods before they ship?",
    a: "Yes. We offer pre-production, during-production (DUPRO), and pre-shipment (PSI) inspections using internationally recognized AQL sampling. You receive a detailed report with photos and a pass/fail result before goods leave China.",
  },
  {
    q: "Which shipping methods do you arrange?",
    a: "We arrange sea freight (FCL and LCL), air freight, and express courier depending on your budget and timeline. We also consolidate goods from multiple suppliers into one shipment to reduce cost and simplify customs.",
  },
  {
    q: "What happens if a shipment fails inspection?",
    a: "If a pre-shipment inspection fails, we hold the shipment, document the defects, and work with the factory on rework or replacement. We re-inspect after corrections. You decide whether to accept, rework, or reject — we never ship failed goods without your approval.",
  },
  {
    q: "Which countries do you ship to?",
    a: "We have shipped to buyers in over 40 countries across North America, Europe, the Middle East, Asia-Pacific, and Latin America. If your country has a functioning customs process, we can usually arrange delivery.",
  },
]

export const BLOG_POSTS = [
  {
    id: "verify-real-factory",
    title: "How to Verify a Real Factory in China (Not a Trading Company)",
    excerpt:
      "Trading companies often present themselves as manufacturers. Here is a practical checklist our auditors use to tell the difference on-site.",
    category: "Supplier Verification",
    date: "2026-05-18",
    readTime: "7 min read",
    imgId: "blog-verify-s9t0",
    titleId: "blog-verify-title",
    descId: "blog-verify-desc",
  },
  {
    id: "understanding-aql",
    title: "Understanding AQL: Reading a Pre-Shipment Inspection Report",
    excerpt:
      "AQL sampling is the backbone of professional QC. We break down what the numbers mean and how to act on them.",
    category: "Quality Control",
    date: "2026-05-04",
    readTime: "6 min read",
    imgId: "blog-aql-u1v2",
    titleId: "blog-aql-title",
    descId: "blog-aql-desc",
  },
  {
    id: "sea-vs-air-freight",
    title: "Sea vs. Air Freight from China: A Practical Cost and Time Guide",
    excerpt:
      "When does air freight actually make sense? A framework for choosing the right mode based on value, weight, and deadline.",
    category: "Shipping & Logistics",
    date: "2026-04-21",
    readTime: "8 min read",
    imgId: "blog-freight-w3x4",
    titleId: "blog-freight-title",
    descId: "blog-freight-desc",
  },
  {
    id: "negotiate-moq",
    title: "How to Negotiate MOQ with Chinese Suppliers Without Losing Trust",
    excerpt:
      "Lower MOQs are possible, but the way you ask matters. Strategies that get flexibility while keeping the relationship healthy.",
    category: "Sourcing Strategy",
    date: "2026-04-07",
    readTime: "5 min read",
    imgId: "blog-moq-y5z6",
    titleId: "blog-moq-title",
    descId: "blog-moq-desc",
  },
  {
    id: "golden-sample",
    title: "The Golden Sample: Why It Saves More Money Than It Costs",
    excerpt:
      "An approved golden sample is the single most effective tool for consistent quality. Here is how to create and use one.",
    category: "Quality Control",
    date: "2026-03-24",
    readTime: "6 min read",
    imgId: "blog-golden-a7b8",
    titleId: "blog-golden-title",
    descId: "blog-golden-desc",
  },
  {
    id: "consolidation-savings",
    title: "Cargo Consolidation: Cutting Freight Cost on Multi-Supplier Orders",
    excerpt:
      "Buying from several factories? Consolidation can cut your landed cost significantly. How it works and what to watch for.",
    category: "Shipping & Logistics",
    date: "2026-03-10",
    readTime: "7 min read",
    imgId: "blog-consol-c9d0",
    titleId: "blog-consol-title",
    descId: "blog-consol-desc",
  },
]
