// Centralized static content for SSourcing China
// Keep IDs stable so they can be used in data-strk-img queries

export const COMPANY = {
  name: "SSourcing China",
  tagline: "China Sourcing Agent for Global Buyers",
  email: "hello@ssourcing-china.com",
  phone: "+86 21 0000 0000",
  whatsapp: "+86 138 0000 0000",
  address: "Shanghai, China",
  years: 11,
  auditsCompleted: 4200,
  factoriesVetted: 1800,
  shipmentsCoordinated: 3600,
  markets: ["USA", "EU", "UK", "Australia", "Canada", "Middle East"],
  certifications: ["ISO 9001 (internal QA process)", "BSCI audit-capable", "Sedex/SMETA capable"],
}

export const SERVICES = [
  {
    id: "supplier-sourcing",
    title: "Supplier Sourcing",
    desc: "Shortlist of pre-vetted Chinese factories matched to your product, MOQ and target price.",
    bullets: [
      "Targeted factory search in your product category",
      "Manufacturer vs. trading company check",
      "Comparative quotation with cost breakdown",
    ],
    img: "factory production line worker china",
  },
  {
    id: "factory-verification",
    title: "Factory Verification",
    desc: "On-site audits to confirm the supplier is real, capable and stable before you commit.",
    bullets: [
      "Business license & legal entity check",
      "Production capacity & machine list",
      "Workforce, working hours and CSR baseline",
    ],
    img: "industrial factory exterior china",
  },
  {
    id: "quality-inspection",
    title: "Quality Inspection",
    desc: "Pre-shipment and during-production inspections against your AQL and specification.",
    bullets: [
      "DPI, DUPRO and FRI protocols",
      "AQL-based sampling (ISO 2859-1)",
      "Photo & video report within 24 hours",
    ],
    img: "quality control inspector checking product",
  },
  {
    id: "production-follow-up",
    title: "Production Follow-up",
    desc: "We stay in the factory on your behalf so timelines and quality stay on track.",
    bullets: [
      "Weekly production status updates",
      "Milestone checks at 10% / 50% / 100%",
      "Escalation if schedule or quality slips",
    ],
    img: "warehouse production follow up manager",
  },
  {
    id: "shipping-logistics",
    title: "Shipping & Logistics",
    desc: "Consolidation, export documentation and freight forwarding — sea, air or express.",
    bullets: [
      "FCL / LCL ocean, air freight, courier",
      "Export paperwork, customs and HS codes",
      "Door-to-door coordination with your forwarder",
    ],
    img: "shipping container port logistics export",
  },
  {
    id: "oem-odm",
    title: "OEM / ODM Development",
    desc: "From sample to mass production for products that need design, tooling or customization.",
    bullets: [
      "Concept, sketch and 3D review",
      "Sample rounds with written feedback",
      "Tooling, mould and pilot-run management",
    ],
    img: "product prototype oem design development",
  },
]

export const PROCESS_STEPS = [
  {
    id: "inquiry",
    step: "01",
    title: "Submit Your Inquiry",
    desc: "Tell us the product, target quantity, and any specifications. We respond within 1 business day.",
  },
  {
    id: "shortlist",
    step: "02",
    title: "Supplier Shortlist",
    desc: "We identify 3–5 pre-screened factories and send you quotes, profiles and lead times.",
  },
  {
    id: "verify",
    step: "03",
    title: "Factory Verification",
    desc: "On-site audit or video audit with a written report so you can choose with confidence.",
  },
  {
    id: "sample",
    step: "04",
    title: "Samples & Negotiation",
    desc: "We coordinate sample shipments, consolidate feedback and help you finalize terms.",
  },
  {
    id: "produce",
    step: "05",
    title: "Production & QC",
    desc: "Production follow-up with milestone checks and pre-shipment inspection before goods leave.",
  },
  {
    id: "ship",
    step: "06",
    title: "Shipping & Delivery",
    desc: "We book freight, prepare export documents and track the shipment until it reaches you.",
  },
]

export const PRODUCT_CATEGORIES = [
  {
    id: "consumer-goods",
    title: "Consumer Goods",
    items: ["Home & kitchen", "Pet products", "Beauty & personal care", "Sports & outdoor", "Stationery"],
    img: "consumer goods retail products warehouse",
  },
  {
    id: "electronics",
    title: "Electronics & Accessories",
    items: ["Consumer electronics", "Phone & PC accessories", "Audio & smart devices", "Cables & chargers", "LED lighting"],
    img: "electronics accessories manufacturing components",
  },
  {
    id: "apparel",
    title: "Apparel & Textiles",
    items: ["Custom apparel", "Workwear & uniforms", "Home textiles", "Bags & luggage", "Footwear"],
    img: "apparel textile factory clothing",
  },
  {
    id: "industrial",
    title: "Industrial & Hardware",
    items: ["Machinery parts", "Fasteners & hardware", "Tools", "Pumps & valves", "Auto parts"],
    img: "industrial machinery parts manufacturing",
  },
  {
    id: "packaging",
    title: "Packaging & Print",
    items: ["Custom boxes", "Paper bags", "Labels & stickers", "Plastic & bioplastic", "Display & POS"],
    img: "custom packaging boxes print manufacturing",
  },
  {
    id: "furniture",
    title: "Furniture & Home",
    items: ["Indoor furniture", "Outdoor & garden", "Storage & organizers", "Bedding", "Décor"],
    img: "furniture home goods showroom",
  },
]

export const PROBLEMS = [
  {
    id: "fake-factory",
    title: "You're not sure the factory is real",
    desc: "Trading companies posing as manufacturers, or factories that don't actually produce your product. We verify on the ground.",
    icon: "ShieldCheck",
  },
  {
    id: "quality-drift",
    title: "Samples were great, mass production is not",
    desc: "Common without strict follow-up. We run milestone inspections and lock specs in writing before production starts.",
    icon: "ClipboardCheck",
  },
  {
    id: "delays",
    title: "Production keeps slipping past the ETD",
    desc: "We track schedule, escalate early, and give you honest revised dates — not last-minute surprises.",
    icon: "Clock4",
  },
  {
    id: "language",
    title: "Communication is slow and unclear",
    desc: "Your dedicated project manager writes in English, replies within one business day, and keeps a single source of truth.",
    icon: "MessageSquare",
  },
  {
    id: "shipping",
    title: "Logistics and paperwork are a headache",
    desc: "Export documents, HS codes, consolidation, FCL/LCL, last-mile — we coordinate end-to-end with your forwarder.",
    icon: "Truck",
  },
  {
    id: "moq-cost",
    title: "MOQ and unit cost don't match your plan",
    desc: "We help you negotiate realistic MOQs, find mid-tier factories, or split production when the economics need it.",
    icon: "LineChart",
  },
]

export const TRUST_POINTS = [
  {
    id: "experienced",
    title: "11+ years on the ground",
    desc: "Our team has worked with Chinese manufacturers since 2014, across consumer goods, industrial and OEM projects.",
  },
  {
    id: "english",
    title: "Native English project managers",
    desc: "Your main point of contact is fluent in English. Replies within one business day. No lost-in-translation issues.",
  },
  {
    id: "no-middleman",
    title: "You deal directly with the factory",
    desc: "We are paid by you, not the factory. No hidden commissions, no inflated quotes, no kickbacks.",
  },
  {
    id: "transparent",
    title: "Transparent costing",
    desc: "Each quote shows factory price, our service fee and shipping estimate. You see exactly what you are paying for.",
  },
  {
    id: "qc",
    title: "Independent QC, AQL-based",
    desc: "Inspections follow ISO 2859-1 AQL sampling. You receive a written report with photos within 24 hours.",
  },
  {
    id: "nda",
    title: "NDA & IP protection available",
    desc: "We can sign your NDA and put IP-protection clauses in writing with the factory before any tooling begins.",
  },
]

export const CASE_STUDIES = [
  {
    id: "case-pet-brand",
    industry: "Pet products",
    country: "United States",
    summary: "A US DTC pet brand needed a reliable manufacturer of silicone bowls and was being quoted 60 days with inconsistent quality.",
    scope: "Supplier sourcing, sample management, production follow-up, pre-shipment QC.",
    outcome: "Qualified two factories, locked 35-day lead time, AQL 1.5 pass rate of 98% over 6 orders.",
    quote: "They tell us the truth even when the news is bad. That is what we needed.",
    author: "Operations Lead, US pet brand",
    img: "silicone pet bowl product on white background",
  },
  {
    id: "case-industrial",
    industry: "Industrial components",
    country: "Germany",
    summary: "A German B2B distributor wanted a backup source for precision-turned parts after quality issues with their existing supplier.",
    scope: "Factory audit, sample qualification, ongoing QC on every batch.",
    outcome: "Replaced supplier within 90 days. Defect rate dropped from 4.2% to 0.6%.",
    quote: "A real on-site audit, not a paper certificate. That is what changed our mind.",
    author: "Procurement Manager, German distributor",
    img: "precision metal turned parts industrial",
  },
  {
    id: "case-packaging",
    industry: "Custom packaging",
    country: "United Kingdom",
    summary: "A UK skincare startup launching a subscription box needed FSC-certified boxes with short print runs and tight launch deadlines.",
    scope: "OEM packaging, sample rounds, mass production, consolidation with a logistics partner.",
    outcome: "From approved artwork to first delivery in 38 days across 3 SKUs.",
    quote: "Practical, responsive, and very organised under a hard launch deadline.",
    author: "Founder, UK skincare startup",
    img: "custom packaging boxes subscription gift",
  },
  {
    id: "case-furniture",
    industry: "Furniture & home",
    country: "Australia",
    summary: "An Australian homeware retailer wanted a wider range of indoor furniture and needed an agent to manage quality and shipping across 12 SKUs.",
    scope: "Supplier shortlist, full AQL inspections, FCL booking and door delivery to Sydney.",
    outcome: "First container delivered on time, 0.4% damage rate, repeat orders across four seasons.",
    quote: "The pre-shipment report saved us a full container of issues. Worth every dollar.",
    author: "Buying Director, AU retailer",
    img: "modern indoor furniture home living room",
  },
]

export const FAQS = [
  {
    id: "fee",
    q: "How is your service priced?",
    a: "We charge a flat sourcing or project-management fee plus optional per-inspection fees. Your quote shows the factory price, our service fee and shipping estimate separately — so you always know what you are paying for.",
  },
  {
    id: "who",
    q: "Who pays you, the factory or me?",
    a: "You pay us. We do not take commissions from factories, which is the only way to give you independent advice on price, quality and lead time.",
  },
  {
    id: "moq",
    q: "Do I need to meet a high MOQ?",
    a: "Not necessarily. Many of our partner factories accept lower MOQs for first orders, especially for OEM or customised products. We will tell you honestly if a project is not realistic at your target quantity.",
  },
  {
    id: "audit",
    q: "Can you audit a factory I already found?",
    a: "Yes. We can run an on-site audit or video audit of an existing supplier, including business license, capacity, workforce and basic CSR review. The audit report is yours, regardless of whether you continue with that factory.",
  },
  {
    id: "samples",
    q: "How long do samples take, and who pays for them?",
    a: "Most samples are ready in 7–15 days after we confirm specifications. Sample costs depend on the product and are quoted in advance. Sample shipping is at cost.",
  },
  {
    id: "shipping",
    q: "Do you handle shipping and customs?",
    a: "Yes. We book FCL / LCL ocean, air freight or courier, and prepare export documents including commercial invoice, packing list, certificate of origin and HS codes. We can hand over to your forwarder or arrange door delivery.",
  },
  {
    id: "ip",
    q: "How do you protect my design or product idea?",
    a: "We can sign your NDA before any factory contact. For OEM products we add IP and tooling-ownership clauses to the factory agreement in writing before tooling is paid.",
  },
  {
    id: "timing",
    q: "How fast can you start?",
    a: "We usually reply to a new inquiry within 1 business day. A first shortlist of suppliers can be ready in 3–7 working days depending on the product.",
  },
]

export const BLOG_POSTS = [
  {
    id: "post-aql",
    title: "What AQL actually means for your shipment",
    excerpt: "Most buyers ask for AQL 2.5 without knowing what it really means. Here is a practical explanation of AQL, sampling and how to write a usable inspection standard.",
    category: "Quality Control",
    minutes: 6,
    date: "2026-05-14",
  },
  {
    id: "post-factory-audit",
    title: "5 things to check before you trust a Chinese factory",
    excerpt: "A short field guide for first-time importers: business license, production line, capacity, workforce and the question that catches most fakes.",
    category: "Supplier Verification",
    minutes: 5,
    date: "2026-04-22",
  },
  {
    id: "post-fcl-vs-lcl",
    title: "FCL vs LCL: when ocean freight actually saves you money",
    excerpt: "LCL looks cheaper on paper, but it has failure modes most buyers only learn after a damaged shipment. Here is a simple decision framework.",
    category: "Shipping",
    minutes: 7,
    date: "2026-03-09",
  },
  {
    id: "post-incoterms",
    title: "Incoterms 2020 in plain English for importers",
    excerpt: "FOB, CIF, DDP, EXW — what each term really means for cost, risk and paperwork when you import from China.",
    category: "Shipping",
    minutes: 8,
    date: "2026-02-18",
  },
  {
    id: "post-nda-china",
    title: "How NDAs and tooling agreements work in China",
    excerpt: "An NDA is not a magic shield. A practical look at what is enforceable, what is not, and the clauses that actually protect your design.",
    category: "OEM / ODM",
    minutes: 6,
    date: "2026-01-27",
  },
  {
    id: "post-dppi",
    title: "DPI vs DUPRO vs PSI: pick the right inspection",
    excerpt: "Three inspection types, three different goals. When to use each one and how to avoid paying for an inspection that catches problems too late.",
    category: "Quality Control",
    minutes: 5,
    date: "2025-12-12",
  },
]
