// Centralized site data. Edit these arrays to update the site content.

export const SITE = {
  name: "SSourcing China",
  tagline: "China Sourcing Agent for Global Buyers",
  shortDescription:
    "A China-based sourcing partner helping overseas buyers find reliable suppliers, verify factories, inspect quality, follow production, and coordinate shipping.",
  email: "info@ssourcingchina.com",
  phone: "+86 21 5555 0188",
  wechat: "ssourcing_china",
  address: "Shanghai, China",
  hours: "Mon–Fri 9:00–18:00 (GMT+8)",
  foundedYear: 2014,
  responseTime: "1 business day",
  englishSupport: "All communication available in English.",
};

export const NAV = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "How It Works", to: "/how-it-works" },
  { label: "Products", to: "/products" },
  { label: "Case Studies", to: "/case-studies" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" },
];

// Six core services offered to overseas buyers
export const SERVICES = [
  {
    id: "supplier-sourcing",
    icon: "Search",
    title: "Supplier Sourcing",
    summary:
      "Identify and shortlist qualified Chinese manufacturers that match your product spec, target price, and order volume.",
    points: [
      "Cross-checked supplier database with verified categories",
      "Sample collection and side-by-side comparison",
      "Bilingual negotiation on price, MOQ, and lead time",
    ],
  },
  {
    id: "factory-verification",
    icon: "Building2",
    title: "Factory Verification",
    summary:
      "On-site audits to confirm a supplier is a real, capable manufacturer — not a trading company or virtual vendor.",
    points: [
      "Business license and ownership review",
      "Workshop, warehouse, and capacity assessment",
      "Photo and video verification report within 3 business days",
    ],
  },
  {
    id: "quality-inspection",
    icon: "ClipboardCheck",
    title: "Quality Inspection",
    summary:
      "Pre-production, during-production, and pre-shipment inspections aligned with AQL standards and your own specs.",
    points: [
      "AQL 1.0 / 2.5 / 4.0 sampling plans",
      "On-site QC report with photos within 24 hours",
      "Defect tracking and corrective action follow-up",
    ],
  },
  {
    id: "production-followup",
    icon: "LineChart",
    title: "Production Follow-up",
    summary:
      "Weekly progress updates so you always know where your order stands, from raw materials to finished goods.",
    points: [
      "Production milestone tracking",
      "Photo and video updates from the workshop floor",
      "Escalation handling for delays or capacity issues",
    ],
  },
  {
    id: "shipping-logistics",
    icon: "Ship",
    title: "Shipping & Logistics",
    summary:
      "Consolidated freight, customs paperwork, and door-to-door delivery coordination with trusted forwarders.",
    points: [
      "Sea (FCL/LCL), air, rail, and express options",
      "Customs documentation and HS code guidance",
      "Optional DDP shipping to USA, EU, UK, AU, and more",
    ],
  },
  {
    id: "sampling-development",
    icon: "FlaskConical",
    title: "Sampling & Development",
    summary:
      "From reference sample to mass production — engineering feedback, tooling coordination, and sample management.",
    points: [
      "CAD / drawing translation with the factory",
      "Material and finish recommendations",
      "Sample round tracking and consolidated feedback",
    ],
  },
];

// The 5-step sourcing process shown on Home and How It Works
export const PROCESS_STEPS = [
  {
    n: "01",
    title: "Send Your Inquiry",
    desc: "Tell us the product, target price, quantity, and any specs. We confirm scope within one business day.",
  },
  {
    n: "02",
    title: "Supplier Shortlist",
    desc: "We identify 3–5 pre-vetted factories, share company profiles, and collect initial quotations for you to compare.",
  },
  {
    n: "03",
    title: "Samples & Verification",
    desc: "We arrange samples, run a factory verification audit if needed, and summarise findings in a clear report.",
  },
  {
    n: "04",
    title: "Production & QC",
    desc: "After order confirmation, we follow production, run inspections at agreed checkpoints, and share reports with photos.",
  },
  {
    n: "05",
    title: "Shipping & Delivery",
    desc: "We book freight, prepare export documents, and coordinate with your forwarder or handle door-to-door shipping.",
  },
];

// Product categories we commonly source
export const PRODUCT_CATEGORIES = [
  {
    name: "Consumer Electronics",
    items: ["Phone & laptop accessories", "Audio devices", "Smart home gadgets", "Cables & chargers"],
  },
  {
    name: "Home & Kitchen",
    items: ["Cookware & tableware", "Storage & organization", "Bedding & textiles", "Cleaning tools"],
  },
  {
    name: "Apparel & Accessories",
    items: ["Knitwear & woven garments", "Bags & backpacks", "Footwear", "Fashion accessories"],
  },
  {
    name: "Beauty & Personal Care",
    items: ["Skincare packaging", "Hair tools", "Cosmetic brushes", "OEM/ODM beauty lines"],
  },
  {
    name: "Industrial & Hardware",
    items: ["Fasteners & fittings", "Power tools accessories", "Machined parts", "Custom moulded components"],
  },
  {
    name: "Outdoor & Sports",
    items: ["Camping gear", "Fitness equipment", "Cycling accessories", "Pet products"],
  },
  {
    name: "Packaging & Printing",
    items: ["Custom boxes", "Bags & pouches", "Labels & stickers", "Display & POS materials"],
  },
  {
    name: "Toys & Children Products",
    items: ["Educational toys", "Plush & wooden toys", "Outdoor play", "Compliance testing support"],
  },
];

// Trust points / why choose us
export const TRUST_POINTS = [
  {
    icon: "MapPin",
    title: "Based in China, working in your timezone",
    desc: "Shanghai-based team with bilingual project managers aligned to US, EU, and AU business hours.",
  },
  {
    icon: "FileCheck2",
    title: "Transparent, written quotes",
    desc: "Itemised quotations — no hidden fees, no commissions from suppliers, no surprise charges.",
  },
  {
    icon: "ShieldCheck",
    title: "Independent of any factory",
    desc: "We work for the buyer. Our recommendations are based on your spec, not on factory relationships.",
  },
  {
    icon: "Clock4",
    title: "1 business day response",
    desc: "Inquiries acknowledged within one business day; quotation packages usually within 3–5 days.",
  },
  {
    icon: "BadgeCheck",
    title: "Reports you can actually use",
    desc: "Every inspection and audit comes with timestamped photos, findings, and a clear pass / fail decision.",
  },
  {
    icon: "Globe2",
    title: "Experience across 30+ countries",
    desc: "Shipped to buyers in North America, Europe, Oceania, the Middle East, and Southeast Asia.",
  },
];

// Problems we solve for buyers
export const PROBLEMS = [
  {
    before: "Unsure which factory is real",
    after: "Verified suppliers with audit reports and ownership records",
  },
  {
    before: "Quotations in broken English with hidden costs",
    after: "Itemised English quotes, MOQ, lead time, and payment terms clarified",
  },
  {
    before: "No visibility during production",
    after: "Weekly photo / video updates and milestone tracking",
  },
  {
    before: "Quality defects discovered only at delivery",
    after: "Pre-shipment inspections with AQL sampling and defect photos",
  },
  {
    before: "Confusing shipping and customs paperwork",
    after: "Consolidated freight, HS codes, and export docs handled end-to-end",
  },
  {
    before: "Cultural and language gaps with factories",
    after: "Bilingual PMs who translate requirements and push back on your behalf",
  },
];

// Sample case studies
export const CASE_STUDIES = [
  {
    id: "kitchenware-us",
    industry: "Home & Kitchen",
    region: "USA",
    summary:
      "Helped a US kitchenware importer replace an unreliable supplier and consolidate three SKUs under one audited factory.",
    scope: ["Supplier audit", "Sample comparison", "Pre-shipment QC", "Sea freight booking"],
    result: "25% landed cost reduction and 98% on-time delivery over 6 shipments.",
  },
  {
    id: "beauty-eu",
    industry: "Beauty & Personal Care",
    region: "EU",
    summary:
      "Sourced and developed a private-label skincare line for a European retailer, including packaging and compliance.",
    scope: ["ODM sourcing", "Sample development", "Packaging coordination", "Documentation"],
    result: "3 SKUs launched in 9 months with CE / CPNP paperwork completed.",
  },
  {
    id: "electronics-au",
    industry: "Consumer Electronics",
    region: "Australia",
    summary:
      "Audited four factories for a consumer electronics distributor and managed a 40ft HQ container of mixed SKUs.",
    scope: ["Multi-factory audit", "Production follow-up", "AQL inspection", "FCL shipping"],
    result: "Defect rate below 1.2% and shipment cleared customs without delays.",
  },
  {
    id: "apparel-uk",
    industry: "Apparel",
    region: "UK",
    summary:
      "Coordinated sampling and production for a UK fashion brand working with a new woven-garment supplier.",
    scope: ["Sample rounds", "Lab dips and trims", "Inline QC", "Express air freight"],
    result: "First bulk order shipped 5 days ahead of schedule with no rejected units.",
  },
  {
    id: "packaging-ca",
    industry: "Packaging",
    region: "Canada",
    summary:
      "Consolidated custom packaging (boxes, inserts, sleeves) across three factories into one shipment to Canada.",
    scope: ["Multi-factory sourcing", "Print proof approval", "Mixed-SKU QC", "Consolidated shipping"],
    result: "One PO, one QC report, one customs entry — landed 2 weeks faster than planned.",
  },
  {
    id: "outdoor-nz",
    industry: "Outdoor & Sports",
    region: "New Zealand",
    summary:
      "Sourced a pet-product line for a New Zealand retailer, including product testing coordination.",
    scope: ["Supplier sourcing", "Sample development", "Lab testing", "Sea + courier split"],
    result: "Range of 8 SKUs launched with product liability test certificates in hand.",
  },
];

export const FAQS = [
  {
    q: "Where is SSourcing China based?",
    a: "Our team is headquartered in Shanghai, China, with field inspectors and partners across the major manufacturing regions including Guangdong, Zhejiang, Jiangsu, and Shandong.",
  },
  {
    q: "What is the minimum order quantity (MOQ) you work with?",
    a: "We work with orders of all sizes. For most consumer products, a starting MOQ of 500–1,000 units is realistic; for OEM/ODM projects it can be higher. We will tell you the MOQ up front before any commitment.",
  },
  {
    q: "How is your pricing structured?",
    a: "Sourcing fees are usually a fixed service fee or a small percentage of order value, agreed in writing before we start. Inspection and audit work is charged per man-day at a published rate. You will never see a hidden commission added to a factory quote.",
  },
  {
    q: "Can you handle small trial orders?",
    a: "Yes. Many of our clients start with a small trial order to validate quality before scaling up. We can coordinate sample rounds, small-batch production, and consolidated shipping across multiple suppliers.",
  },
  {
    q: "Do you provide product compliance and lab testing?",
    a: "We coordinate with third-party labs for common standards such as CE, FCC, RoHS, REACH, FDA, CPSIA, and Prop 65. We help you choose the right tests based on your target market.",
  },
  {
    q: "How long does a typical project take?",
    a: "From inquiry to samples is usually 7–14 days. From confirmed order to shipment, lead time depends on the product — typically 25–45 days for production plus 15–35 days for sea freight to most destinations.",
  },
  {
    q: "Can I use my own freight forwarder?",
    a: "Absolutely. If you already have a forwarder, we will hand off shipment documents to them. If you do not, we can recommend forwarders and book on your behalf.",
  },
  {
    q: "What information do you need to give me a quote?",
    a: "Product description or reference images, target quantity, target unit price (if you have one), destination country, and any specific requirements such as materials, certifications, or packaging.",
  },
];

// Blog sample posts
export const BLOG_POSTS = [
  {
    slug: "how-to-verify-a-china-supplier",
    title: "How to verify a Chinese supplier before you place an order",
    excerpt:
      "A practical 7-step checklist — from business license checks to on-site audits — that helps overseas buyers avoid the most common supplier scams.",
    category: "Supplier Verification",
    readTime: "6 min read",
    date: "2026-06-12",
  },
  {
    slug: "understanding-aql-inspections",
    title: "AQL inspections explained: choosing the right sampling plan",
    excerpt:
      "What AQL 1.0 vs 2.5 vs 4.0 really means, how inspectors decide pass / fail, and how to set acceptance levels that match your product.",
    category: "Quality Control",
    readTime: "8 min read",
    date: "2026-05-30",
  },
  {
    slug: "fob-vs-exw-vs-ddp",
    title: "FOB vs EXW vs DDP: choosing the right Incoterm for China imports",
    excerpt:
      "A side-by-side look at the most common shipping terms used in China sourcing, including who pays for what and where the risks sit.",
    category: "Logistics",
    readTime: "5 min read",
    date: "2026-05-18",
  },
  {
    slug: "questions-to-ask-a-factory",
    title: "12 questions to ask a Chinese factory on your first call",
    excerpt:
      "The exact questions experienced buyers use to compare factories, plus what to listen for in the answers.",
    category: "Sourcing Tips",
    readTime: "7 min read",
    date: "2026-05-04",
  },
  {
    slug: "first-time-sourcing-china",
    title: "First time sourcing from China? A practical starter guide",
    excerpt:
      "From choosing a product category to placing your first PO — a step-by-step walkthrough for new importers.",
    category: "Sourcing Tips",
    readTime: "9 min read",
    date: "2026-04-22",
  },
  {
    slug: "common-quality-defects",
    title: "The 10 most common quality defects found in pre-shipment inspection",
    excerpt:
      "The defects our QC team flags most often, with photos and the simple fixes buyers can request from their factory.",
    category: "Quality Control",
    readTime: "7 min read",
    date: "2026-04-09",
  },
];

// Stats
export const STATS = [
  { value: "10+", label: "Years sourcing from China" },
  { value: "800+", label: "Verified supplier audits" },
  { value: "30+", label: "Buyer countries served" },
  { value: "12,000+", label: "Inspections completed" },
];
