import {
  Search,
  ShieldCheck,
  ClipboardCheck,
  Factory,
  Ship,
  PackageCheck,
} from "lucide-react"

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
    icon: Search,
    title: "Supplier Sourcing",
    summary:
      "We identify and shortlist reliable manufacturers matched to your product, quantity, and quality requirements.",
    points: [
      "Targeted supplier search across verified factory networks",
      "Shortlist of 3–5 qualified candidates with comparison",
      "Initial price and MOQ negotiation on your behalf",
    ],
    whyItMatters:
      "Finding the right factory is the single biggest factor in a successful sourcing project. A poor match leads to quality issues, delays, and disputes. We pre-screen candidates against your spec so you only evaluate manufacturers that can realistically deliver.",
    deliverable: "Shortlist report",
    deliverableNote: "3–5 verified suppliers",
  },
  {
    id: "factory-verification",
    icon: ShieldCheck,
    title: "Factory Verification",
    summary:
      "On-site factory audits to confirm capacity, certifications, and operational legitimacy before you commit.",
    points: [
      "On-site factory visits and audit reports",
      "Business license and certification verification",
      "Production capacity and equipment assessment",
    ],
    whyItMatters:
      "Online supplier profiles and trade platforms do not prove a factory is real or capable. Our auditors visit in person to confirm the business is legitimate, the equipment matches your order, and the certifications are valid — before you place a deposit.",
    deliverable: "Audit report",
    deliverableNote: "On-site, with photos",
  },
  {
    id: "quality-inspection",
    icon: ClipboardCheck,
    title: "Quality Inspection",
    summary:
      "Independent QC inspections at key production stages and before shipment to protect your order.",
    points: [
      "Pre-production, in-line, and pre-shipment inspections",
      "AQL-based sampling and detailed photo reports",
      "Defect identification and corrective action follow-up",
    ],
    whyItMatters:
      "Catching defects at the factory is far cheaper than discovering them after shipping. Our inspectors use AQL sampling standards and send you a pass/fail report with photos, so you decide whether to ship, rework, or reject before goods leave China.",
    deliverable: "QC report",
    deliverableNote: "AQL-based, pass/fail",
  },
  {
    id: "production-follow-up",
    icon: Factory,
    title: "Production Follow-up",
    summary:
      "Regular progress tracking and communication with the factory to keep your order on schedule.",
    points: [
      "Scheduled production milestone updates",
      "Delay risk identification and escalation",
      "Direct communication bridge with the factory",
    ],
    whyItMatters:
      "Factories juggle many orders and rarely proactively flag delays. We track milestones, push for updates, and escalate risks early — so a two-week slip doesn't become a missed launch or empty shelf.",
    deliverable: "Milestone updates",
    deliverableNote: "Scheduled reporting",
  },
  {
    id: "shipping-coordination",
    icon: Ship,
    title: "Shipping Coordination",
    summary:
      "Consolidation, freight booking, and export documentation handled end-to-end to your destination.",
    points: [
      "Freight quote comparison (sea, air, express)",
      "Cargo consolidation and warehouse storage",
      "Customs and export documentation management",
    ],
    whyItMatters:
      "Coordinating freight, consolidation, and export paperwork from abroad is error-prone and costly. We compare carriers, consolidate multiple suppliers into one shipment, and prepare documentation to keep customs clearance smooth.",
    deliverable: "Shipment plan",
    deliverableNote: "Door-to-door options",
  },
  {
    id: "full-sourcing-service",
    icon: PackageCheck,
    title: "Full Sourcing Service",
    summary:
      "An end-to-end managed service covering sourcing, verification, QC, production, and shipping.",
    points: [
      "Single point of contact for the entire project",
      "Transparent reporting at every stage",
      "Suitable for buyers without a local team in China",
    ],
    whyItMatters:
      "Managing five separate vendors across language and time-zone barriers is where most sourcing projects break down. With one accountable team covering the full chain, you get consistent reporting, fewer handoff gaps, and a single contact who owns the outcome.",
    deliverable: "Managed project",
    deliverableNote: "End-to-end",
  },
]

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Requirement Briefing",
    description:
      "Share your product specifications, target price, quantity, and timeline. We confirm scope and assign a dedicated sourcing specialist.",
  },
  {
    step: "02",
    title: "Supplier Sourcing & Shortlist",
    description:
      "We search our verified network and the broader market, then present a shortlist of qualified suppliers with price and capability comparison.",
  },
  {
    step: "03",
    title: "Factory Verification",
    description:
      "We conduct on-site or remote factory audits, verify licenses and certifications, and confirm production capacity before you commit.",
  },
  {
    step: "04",
    title: "Sampling & Negotiation",
    description:
      "We coordinate samples, evaluate quality, and negotiate price, MOQ, and terms on your behalf until you approve the supplier.",
  },
  {
    step: "05",
    title: "Production & QC Follow-up",
    description:
      "During production we track milestones and run inspections at key stages, flagging issues early and driving corrective actions.",
  },
  {
    step: "06",
    title: "Inspection & Shipping",
    description:
      "A pre-shipment inspection confirms quality, then we arrange consolidation, freight, and export documentation to your destination.",
  },
]

export const PRODUCT_CATEGORIES = [
  {
    id: "consumer-electronics",
    name: "Consumer Electronics",
    description:
      "Audio devices, accessories, small appliances, and electronic gadgets from audited electronics factories.",
    imgId: "prod-electronics-a1b2c3",
    titleId: "prod-electronics-title",
    descId: "prod-electronics-desc",
  },
  {
    id: "home-living",
    name: "Home & Living",
    description:
      "Kitchenware, home textiles, furniture, and decor from manufacturers with consistent finishing quality.",
    imgId: "prod-home-d4e5f6",
    titleId: "prod-home-title",
    descId: "prod-home-desc",
  },
  {
    id: "apparel-textiles",
    name: "Apparel & Textiles",
    description:
      "Garments, fabrics, and accessories with size-set sampling and AQL pre-shipment inspection.",
    imgId: "prod-apparel-g7h8i9",
    titleId: "prod-apparel-title",
    descId: "prod-apparel-desc",
  },
  {
    id: "promotional-products",
    name: "Promotional Products",
    description:
      "Branded merchandise, gifts, and giveaways sourced with logo printing and packaging coordination.",
    imgId: "prod-promo-j1k2l3",
    titleId: "prod-promo-title",
    descId: "prod-promo-desc",
  },
  {
    id: "industrial-hardware",
    name: "Industrial & Hardware",
    description:
      "Tools, fittings, and components from factories with material certification and tolerance control.",
    imgId: "prod-industrial-m4n5o6",
    titleId: "prod-industrial-title",
    descId: "prod-industrial-desc",
  },
  {
    id: "beauty-personal-care",
    name: "Beauty & Personal Care",
    description:
      "Cosmetics, skincare, and grooming products from GMP-aligned manufacturers with compliant labeling.",
    imgId: "prod-beauty-p7q8r9",
    titleId: "prod-beauty-title",
    descId: "prod-beauty-desc",
  },
]

export const PROBLEMS = [
  {
    title: "Unreliable suppliers",
    description:
      "Factories that overpromise on capacity or quality and underdeliver on the actual order.",
  },
  {
    title: "Quality surprises",
    description:
      "Goods arriving with defects or deviations that could have been caught before shipment.",
  },
  {
    title: "Communication gaps",
    description:
      "Language barriers and time-zone differences causing delays and misunderstandings.",
  },
  {
    title: "Production delays",
    description:
      "No visibility into progress until the order is already late, with no corrective action.",
  },
  {
    title: "Shipping complexity",
    description:
      "Confusing freight options, consolidation needs, and export paperwork slowing delivery.",
  },
  {
    title: "No local presence",
    description:
      "Buying from China without a team on the ground to verify and follow up in person.",
  },
]

export const TRUST_POINTS = [
  {
    stat: "12+",
    label: "Years sourcing from China",
  },
  {
    stat: "2,000+",
    label: "Suppliers screened",
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
    id: "electronics-retailer",
    client: "European Electronics Retailer",
    industry: "Consumer Electronics",
    summary:
      "Private-label audio product line sourced, inspected, and shipped on schedule for a European retailer.",
    challenge:
      "Needed a reliable supplier for a private-label audio product line with strict QC and a tight launch window.",
    approach:
      "Shortlisted 4 factories, audited 2 on-site, ran pre-production and pre-shipment inspections, and coordinated consolidated sea freight.",
    result:
      "Defect rate reduced from 6% to under 1%, launch delivered on schedule, and a long-term supplier relationship established.",
    imgId: "case-electronics-s1t2u3",
    titleId: "case-electronics-title",
    descId: "case-electronics-desc",
  },
  {
    id: "home-brand",
    client: "North American Home Brand",
    industry: "Home & Living",
    summary:
      "Kitchenware range expanded with verified factories and in-line QC for a North American home brand.",
    challenge:
      "Wanted to expand a kitchenware range but lacked a local team to verify factories and control quality.",
    approach:
      "Managed the full sourcing cycle: supplier search, factory verification, sampling, in-line QC, and shipping coordination.",
    result:
      "3 product lines launched in one season, with consistent finishing quality and a 20% landed-cost saving versus the previous vendor.",
    imgId: "case-home-v4w5x6",
    titleId: "case-home-title",
    descId: "case-home-desc",
  },
  {
    id: "promo-campaign",
    client: "Global Marketing Agency",
    industry: "Promotional Products",
    summary:
      "Branded merchandise sourced across multiple factories and consolidated for a multi-market campaign.",
    challenge:
      "Required a large volume of branded merchandise for a multi-market campaign with a fixed deadline.",
    approach:
      "Sourced across multiple factories, consolidated cargo, and ran pre-shipment inspections on every batch.",
    result:
      "All markets delivered on time, with zero rejected batches and full documentation for customs clearance.",
    imgId: "case-promo-y7z8a9",
    titleId: "case-promo-title",
    descId: "case-promo-desc",
  },
]

export const FAQS = [
  {
    q: "What does a China sourcing agent actually do?",
    a: "A sourcing agent acts as your local team in China. We find and verify suppliers, negotiate terms, coordinate samples, follow production, run quality inspections, and arrange shipping — so you can buy from China without needing your own office or staff on the ground.",
  },
  {
    q: "How do you charge for your services?",
    a: "Our pricing depends on the scope of work. We offer project-based sourcing fees, inspection fees per visit, and a full-service option for end-to-end management. After a short briefing we provide a transparent quote with no hidden costs.",
  },
  {
    q: "Do you work with any product category?",
    a: "We work across most consumer and light-industrial categories, including electronics, home and living, apparel, promotional products, hardware, and beauty. For highly specialized or regulated products, we will confirm feasibility during the briefing stage.",
  },
  {
    q: "Can you inspect goods before they ship?",
    a: "Yes. We run pre-production, in-line, and pre-shipment inspections using AQL sampling. You receive a detailed report with photos and a clear pass or fail result before goods leave the factory.",
  },
  {
    q: "What if a supplier fails verification?",
    a: "If a factory does not pass our audit, we remove it from the shortlist and present alternative qualified suppliers. You are never pushed toward a supplier that does not meet our verification standards.",
  },
  {
    q: "How long does a typical sourcing project take?",
    a: "Timelines vary by product and quantity. Sourcing and shortlisting usually takes 1–2 weeks, sampling 2–4 weeks, and production depends on the factory. We provide a realistic schedule after the briefing and track it throughout.",
  },
]

export const BLOG_POSTS = [
  {
    id: "verify-supplier-china",
    title: "How to Verify a Supplier in China Before You Place an Order",
    excerpt:
      "A practical checklist for confirming a factory is legitimate, capable, and safe to work with — before you commit a deposit.",
    date: "2026-05-18",
    category: "Supplier Verification",
    readTime: "6 min read",
    imgId: "blog-verify-b1c2d3",
    titleId: "blog-verify-title",
    descId: "blog-verify-desc",
  },
  {
    id: "pre-shipment-inspection-guide",
    title: "Pre-Shipment Inspection: What It Covers and Why It Matters",
    excerpt:
      "Understand AQL sampling, what inspectors actually check, and how a pre-shipment report protects your order.",
    date: "2026-05-02",
    category: "Quality Control",
    readTime: "5 min read",
    imgId: "blog-inspection-e4f5g6",
    titleId: "blog-inspection-title",
    descId: "blog-inspection-desc",
  },
  {
    id: "shipping-incoterms-buyers",
    title: "Shipping from China: Incoterms and Freight Options Explained",
    excerpt:
      "A clear overview of FOB, EXW, CIF, and DDP, plus how to choose between sea, air, and express for your order.",
    date: "2026-04-15",
    category: "Shipping & Logistics",
    readTime: "7 min read",
    imgId: "blog-shipping-h7i8j9",
    titleId: "blog-shipping-title",
    descId: "blog-shipping-desc",
  },
  {
    id: "reduce-defect-rate",
    title: "5 Ways to Reduce Defect Rates When Sourcing from China",
    excerpt:
      "Practical steps — from clear specs to in-line inspections — that consistently lower defect rates before shipment.",
    date: "2026-03-28",
    category: "Quality Control",
    readTime: "6 min read",
    imgId: "blog-defects-k1l2m3",
    titleId: "blog-defects-title",
    descId: "blog-defects-desc",
  },
  {
    id: "negotiate-moq-price",
    title: "Negotiating MOQ and Price with Chinese Suppliers",
    excerpt:
      "How to approach minimum order quantity and price discussions without damaging the supplier relationship.",
    date: "2026-03-10",
    category: "Sourcing Strategy",
    readTime: "5 min read",
    imgId: "blog-negotiate-n4o5p6",
    titleId: "blog-negotiate-title",
    descId: "blog-negotiate-desc",
  },
  {
    id: "production-follow-up",
    title: "Production Follow-up: Why Visibility Prevents Delays",
    excerpt:
      "How regular milestone tracking and early escalation keep your order on schedule and reduce costly surprises.",
    date: "2026-02-22",
    category: "Production Management",
    readTime: "6 min read",
    imgId: "blog-production-q7r8s9",
    titleId: "blog-production-title",
    descId: "blog-production-desc",
  },
]
