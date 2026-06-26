export const COMPANY = {
  name: "SSourcing China",
  short: "SSourcing",
  tagline: "China Sourcing Agent for Global Buyers",
  email: "inquiries@ssourcing-china.com",
  phone: "+86 138 0000 0000",
  whatsapp: "+86 138 0000 0000",
  hours: "Mon–Sat, 9:00–18:00 China Standard Time",
  address: "Shenzhen, Guangdong, China",
  yearsInBusiness: 12,
  suppliersVerified: 3800,
  inspectionsPerYear: 2100,
  countriesServed: 47,
  languagesSupported: 6,
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

export const SERVICES = [
  {
    id: "supplier-sourcing",
    title: "Supplier Sourcing",
    icon: "Search",
    summary:
      "We identify and shortlist qualified Chinese manufacturers that match your product, quantity, and quality requirements.",
    bullets: [
      "Requirement analysis and supplier shortlist (typically 3–5 vetted factories)",
      "Capability and capacity check against your order size",
      "Match on certifications, materials, and lead time",
    ],
  },
  {
    id: "factory-verification",
    title: "Factory Verification",
    icon: "ShieldCheck",
    summary:
      "On-site audits confirm that a supplier is a real, licensed, and operational manufacturer — not a trading company.",
    bullets: [
      "Business license, tax record, and export license check",
      "Facility tour with photo and video documentation",
      "Workforce, equipment, and production line assessment",
    ],
  },
  {
    id: "price-negotiation",
    title: "Price Negotiation",
    icon: "BadgeDollarSign",
    summary:
      "We benchmark quotes, consolidate terms, and negotiate pricing, MOQ, payment terms, and tooling costs on your behalf.",
    bullets: [
      "Side-by-side quotation comparison",
      "MOQ, tooling, and packaging cost negotiation",
      "Clear Incoterms (EXW, FOB, CIF, DDP) and payment milestones",
    ],
  },
  {
    id: "quality-inspection",
    title: "Quality Inspection",
    icon: "ClipboardCheck",
    summary:
      "Pre-production, during-production, and pre-shipment inspections carried out by trained QC inspectors on the factory floor.",
    bullets: [
      "AQL-based sampling aligned with your standards",
      "Defect logging with photos and corrective action follow-up",
      "Reports delivered within 24 hours of inspection",
    ],
  },
  {
    id: "production-follow-up",
    title: "Production Follow-up",
    icon: "Activity",
    summary:
      "We monitor production milestones and keep you informed so deadlines, quality, and shipment readiness stay on track.",
    bullets: [
      "Weekly production status updates with photos",
      "Escalation when schedule slips or quality deviates",
      "Final random inspection before goods leave the factory",
    ],
  },
  {
    id: "shipping-logistics",
    title: "Shipping & Logistics",
    icon: "Ship",
    summary:
      "End-to-end coordination of freight, customs paperwork, and last-mile delivery to your warehouse or 3PL.",
    bullets: [
      "Sea, air, rail, and express options with cost comparison",
      "Customs documents, HS codes, and certificate of origin",
      "Door-to-door tracking including DDP where available",
    ],
  },
];

export const PROCESS_STEPS = [
  {
    n: "01",
    title: "Tell us what you need",
    text: "Share your product spec, target quantity, quality standards, and timeline. We confirm scope within one business day.",
  },
  {
    n: "02",
    title: "Supplier shortlist",
    text: "We identify 3–5 pre-screened factories that match your requirements and share their profiles with you.",
  },
  {
    n: "03",
    title: "Quotation & negotiation",
    text: "We collect quotes, normalize terms, and negotiate pricing, MOQ, payment milestones, and lead time.",
  },
  {
    n: "04",
    title: "Sample evaluation",
    text: "Samples are produced, inspected, and shipped to you for approval before bulk production begins.",
  },
  {
    n: "05",
    title: "Production & QC",
    text: "We monitor production and run AQL-based inspections at pre-production, in-line, and pre-shipment stages.",
  },
  {
    n: "06",
    title: "Shipping & delivery",
    text: "We book freight, prepare customs documents, and coordinate delivery to your warehouse or 3PL.",
  },
];

export const PRODUCT_CATEGORIES = [
  {
    id: "consumer-electronics",
    title: "Consumer Electronics",
    image: "factory assembling consumer electronics circuit boards",
    items: ["Accessories", "Smart home devices", "Audio equipment", "Wearables"],
  },
  {
    id: "apparel-textiles",
    title: "Apparel & Textiles",
    image: "garment factory production line sewing",
    items: ["Ready-to-wear", "Technical fabrics", "Workwear", "Knitwear"],
  },
  {
    id: "home-kitchen",
    title: "Home & Kitchen",
    image: "kitchenware products display on table",
    items: ["Cookware", "Storage", "Small appliances", "Tableware"],
  },
  {
    id: "industrial-equipment",
    title: "Industrial Equipment",
    image: "industrial machinery on factory floor",
    items: ["Machinery parts", "Pumps & valves", "Tools", "Bearings"],
  },
  {
    id: "beauty-personal-care",
    title: "Beauty & Personal Care",
    image: "cosmetics and skincare products lined up",
    items: ["Skincare", "Haircare", "Packaging", "OEM / ODM"],
  },
  {
    id: "outdoor-sports",
    title: "Outdoor & Sports",
    image: "outdoor sports gear and equipment",
    items: ["Camping gear", "Fitness equipment", "Cycling", "Water sports"],
  },
  {
    id: "packaging-printing",
    title: "Packaging & Printing",
    image: "printed packaging boxes stack in warehouse",
    items: ["Custom boxes", "Bags", "Labels", "Paper goods"],
  },
  {
    id: "furniture",
    title: "Furniture & Home Goods",
    image: "modern furniture in showroom",
    items: ["Indoor furniture", "Office furniture", "Storage", "Décor"],
  },
];

export const PROBLEMS = [
  {
    title: "Worried about factory legitimacy?",
    text: "We verify business licenses, audit facilities on-site, and confirm export history before you commit.",
  },
  {
    title: "Quality doesn't match the sample?",
    text: "Pre-production, in-line, and pre-shipment inspections catch defects before goods leave the factory.",
  },
  {
    title: "Communication is slow and unclear?",
    text: "Your dedicated sourcing manager is bilingual, replies within one business day, and translates every detail.",
  },
  {
    title: "Hidden costs after the deal?",
    text: "We itemize tooling, packaging, inspection, and freight costs in advance so the final number is predictable.",
  },
  {
    title: "Shipping delays and customs issues?",
    text: "Our logistics team books freight, prepares documents, and tracks shipments door-to-door.",
  },
  {
    title: "MOQ is too high for your order?",
    text: "We negotiate MOQs with factories and, when needed, consolidate orders across multiple buyers.",
  },
];

export const TRUST_POINTS = [
  {
    icon: "BadgeCheck",
    title: "Verified factories only",
    text: "Every supplier is visited in person and re-verified on a 12-month cycle.",
  },
  {
    icon: "Users",
    title: "Bilingual account managers",
    text: "Native Mandarin and fluent English (plus DE, FR, ES, AR) for clear communication.",
  },
  {
    icon: "ClipboardList",
    title: "Standardized QC reports",
    text: "AQL-based inspections with photo evidence, delivered within 24 hours.",
  },
  {
    icon: "Lock",
    title: "Transparent fees",
    text: "Flat sourcing fees with no hidden charges. You pay the factory directly.",
  },
  {
    icon: "Globe2",
    title: "Worldwide delivery",
    text: "We ship to 47+ countries by sea, air, rail, and express with door-to-door tracking.",
  },
  {
    icon: "Headphones",
    title: "One point of contact",
    text: "One dedicated manager owns your project from quote to delivery.",
  },
];

export const CASES = [
  {
    id: "case-de-distributor",
    industry: "Home & Kitchen",
    region: "Germany",
    title: "EU distributor cut landed cost by 18% on stainless cookware line",
    challenge:
      "A Hamburg-based distributor was receiving inconsistent quality and rising prices from their long-time supplier, with limited documentation for compliance.",
    approach:
      "We re-verified 4 candidate factories in Yangjiang and Guangdong, ran a tooling audit, and negotiated revised MOQ and packaging terms.",
    outcome: [
      "18% lower landed cost per unit",
      "AQL 2.5 inspections on every batch",
      "Full EU food-grade documentation (LFGB, REACH)",
    ],
  },
  {
    id: "case-us-brand",
    industry: "Beauty & Personal Care",
    region: "USA",
    title: "US skincare brand sourced 12 SKUs with full FDA documentation",
    challenge:
      "A US DTC skincare brand needed a reliable OEM partner for 12 SKUs with FDA-compliant labeling and small initial runs.",
    approach:
      "We shortlisted 3 GMP-certified factories, coordinated samples for 3 rounds of reformulation, and aligned packaging with FDA labeling rules.",
    outcome: [
      "12 SKUs launched on schedule",
      "GMP and FDA facility registration handled",
      "Ongoing reorder QC at AQL 1.5",
    ],
  },
  {
    id: "case-au-retailer",
    industry: "Outdoor & Sports",
    region: "Australia",
    title: "Australian retailer sourced camping gear with DDP shipping to Sydney",
    challenge:
      "A growing outdoor retailer in Sydney needed a broader product range but had no presence in China and struggled with freight forwarders.",
    approach:
      "We sourced 28 SKUs across 4 factories in Zhejiang, consolidated QC, and managed DDP sea freight including customs clearance.",
    outcome: [
      "28 SKUs ready in one shipment",
      "DDP delivery to Sydney warehouse",
      "Lead time reduced from 70 to 42 days",
    ],
  },
];

export const FAQS = [
  {
    q: "What does SSourcing China actually do?",
    a: "We act as your local sourcing partner in China. We find factories, verify them, negotiate prices and terms, follow production, inspect quality, and coordinate shipping — so you can place orders with confidence without traveling to China.",
  },
  {
    q: "Do you work with small orders or only large buyers?",
    a: "We work with brands, importers, and distributors of all sizes. Some categories have higher MOQs than others; when needed, we negotiate lower MOQs or help consolidate orders across factories.",
  },
  {
    q: "How are your fees structured?",
    a: "We charge a flat sourcing fee per project, plus optional inspection and freight coordination fees. All factory costs are invoiced directly between you and the factory — we don't mark up goods.",
  },
  {
    q: "Can you guarantee product quality?",
    a: "No sourcing agent can guarantee 100% defect-free production, but we run AQL-based inspections at key production stages and require corrective actions before shipment. QC reports are shared with you within 24 hours of each inspection.",
  },
  {
    q: "How long does a typical sourcing project take?",
    a: "Supplier shortlisting usually takes 5–10 business days. Sampling adds 1–3 weeks depending on complexity. Bulk production ranges from 25 to 60 days depending on order size and product category.",
  },
  {
    q: "Do you handle shipping and customs?",
    a: "Yes. We coordinate sea, air, rail, and express freight, prepare customs documents (commercial invoice, packing list, certificate of origin), and offer DDP shipping to many destinations.",
  },
  {
    q: "Will I communicate with the factory directly?",
    a: "By default, we manage all communication in Mandarin and keep you updated in English. Direct factory contact can be arranged once a relationship is established if you prefer.",
  },
  {
    q: "Is my product idea protected?",
    a: "We sign NDAs before sharing product specifications and only send your inquiry to carefully selected factories. We can also arrange tooling exclusivity where appropriate.",
  },
];

export const BLOG_POSTS = [
  {
    id: "verify-china-factory",
    category: "Supplier Verification",
    title: "How to verify a Chinese factory before placing your first order",
    excerpt:
      "A practical checklist of documents, on-site checks, and red flags that every overseas buyer should run before wiring money to a new supplier.",
    minutes: 7,
    date: "2026-05-12",
  },
  {
    id: "aql-quality-inspections",
    category: "Quality Control",
    title: "AQL sampling explained: choosing the right inspection level for your product",
    excerpt:
      "Why AQL 2.5 is standard for most consumer goods, when to tighten to 1.5, and how to read the resulting report.",
    minutes: 9,
    date: "2026-04-22",
  },
  {
    id: "ship-from-china-2026",
    category: "Shipping & Logistics",
    title: "Sea, air, or rail from China in 2026: how to pick the right mode",
    excerpt:
      "Updated lead times, cost ranges, and reliability comparison for shipping from Shenzhen, Ningbo, and Shanghai to major destinations.",
    minutes: 8,
    date: "2026-03-30",
  },
  {
    id: "negotiate-moq",
    category: "Sourcing Strategy",
    title: "How to negotiate MOQ and tooling fees without losing the supplier",
    excerpt:
      "Five negotiation tactics that respect the factory's economics while lowering the barrier to your first order.",
    minutes: 6,
    date: "2026-02-18",
  },
  {
    id: "red-flags-suppliers",
    category: "Supplier Verification",
    title: "7 red flags when sourcing from a new Chinese supplier",
    excerpt:
      "From reluctant video calls to suspiciously low quotes — the warning signs we look for in every new supplier evaluation.",
    minutes: 5,
    date: "2026-01-25",
  },
  {
    id: "fda-labeling-skincare",
    category: "Compliance",
    title: "FDA labeling basics for skincare and cosmetic imports to the US",
    excerpt:
      "What every label needs before your first shipment clears US customs — without delays or relabeling costs.",
    minutes: 10,
    date: "2025-12-14",
  },
];

export const INDUSTRIES = [
  "Consumer Electronics",
  "Apparel & Textiles",
  "Home & Kitchen",
  "Industrial Equipment",
  "Beauty & Personal Care",
  "Outdoor & Sports",
  "Packaging & Printing",
  "Furniture & Home Goods",
  "Other",
];