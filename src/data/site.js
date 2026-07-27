import {
  Search,
  ShieldCheck,
  ClipboardCheck,
  Factory,
  Ship,
  PackageSearch,
  FileCheck,
  Truck,
  Boxes,
  Handshake,
  BadgeCheck,
  Globe2,
  Clock,
  Languages,
  Banknote,
  Headset,
} from "lucide-react"

export const SITE = {
  name: "SSourcing China",
  legalName: "SSourcing China Co., Ltd.",
  tagline: "China Sourcing Agent for Global Buyers",
  email: "hello@ssourcingchina.com",
  phone: "+86 755 8888 0000",
  whatsapp: "+86 138 0000 0000",
  address: "Room 1208, Tower B, Kerry Plaza, Futian District, Shenzhen, China",
  hours: "Mon–Fri, 9:00–18:00 (GMT+8)",
  founded: 2014,
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
    icon: Search,
    title: "Supplier Sourcing",
    summary:
      "We identify and shortlist manufacturers that match your product, budget, and volume — not just the first result on a B2B directory.",
    points: [
      "Targeted supplier search across verified channels",
      "Shortlist of 3–5 qualified factories per product",
      "Transparent comparison of price, MOQ, and capacity",
    ],
    imgId: "svc-sourcing-7f2a1c",
    titleId: "svc-sourcing-title",
    descId: "svc-sourcing-desc",
  },
  {
    id: "factory-verification",
    icon: ShieldCheck,
    title: "Factory Verification & Audit",
    summary:
      "Before you commit, we verify the factory is real, capable, and legally registered — with an on-site audit when needed.",
    points: [
      "Business license and registration checks",
      "On-site factory audit with photo report",
      "Production capacity and equipment review",
    ],
    imgId: "svc-verify-3b9d0e",
    titleId: "svc-verify-title",
    descId: "svc-verify-desc",
  },
  {
    id: "quality-inspection",
    icon: ClipboardCheck,
    title: "Quality Inspection (QC)",
    summary:
      "Independent inspections at key milestones catch defects before goods ship, so you receive what you approved.",
    points: [
      "Pre-production material and sample checks",
      "During-production (DUPRO) inspections",
      "Pre-shipment (FRI) inspection with AQL sampling",
    ],
    imgId: "svc-qc-5c1f8a",
    titleId: "svc-qc-title",
    descId: "svc-qc-desc",
  },
  {
    id: "production-follow-up",
    icon: Factory,
    title: "Production Follow-Up",
    summary:
      "We track your order from deposit to delivery, flag delays early, and keep you updated in plain language.",
    points: [
      "Weekly production status updates",
      "Early warning on delays or changes",
      "Direct coordination with the factory floor",
    ],
    imgId: "svc-prod-9e4b22",
    titleId: "svc-prod-title",
    descId: "svc-prod-desc",
  },
  {
    id: "shipping-coordination",
    icon: Ship,
    title: "Shipping & Logistics",
    summary:
      "We consolidate, book, and coordinate freight — sea, air, or express — with transparent pricing and documentation.",
    points: [
      "Freight quoting across sea, air, and express",
      "Cargo consolidation and repacking",
      "Customs documents and tracking to your door",
    ],
    imgId: "svc-ship-2d7a55",
    titleId: "svc-ship-title",
    descId: "svc-ship-desc",
  },
  {
    id: "order-management",
    icon: PackageSearch,
    title: "Order & Supplier Management",
    summary:
      "For ongoing buyers, we act as your on-the-ground team — managing repeat orders, payments, and supplier relationships.",
    points: [
      "Repeat order management and scheduling",
      "Payment coordination and record keeping",
      "Long-term supplier performance tracking",
    ],
    imgId: "svc-order-8a3c19",
    titleId: "svc-order-title",
    descId: "svc-order-desc",
  },
]

export const PROCESS_STEPS = [
  {
    id: "step-1",
    icon: Handshake,
    step: "01",
    title: "Share Your Requirements",
    description:
      "Tell us about your product, target price, order quantity, and timeline. The more detail you share, the faster we can find the right fit.",
  },
  {
    id: "step-2",
    icon: Search,
    step: "02",
    title: "Supplier Search & Shortlist",
    description:
      "We search our network and open channels, then deliver a shortlist of 3–5 qualified factories with a transparent comparison.",
  },
  {
    id: "step-3",
    icon: ShieldCheck,
    step: "03",
    title: "Verify & Audit",
    description:
      "We confirm each factory is legitimate and capable — business checks plus an on-site audit when the order justifies it.",
  },
  {
    id: "step-4",
    icon: FileCheck,
    step: "04",
    title: "Sample & Negotiate",
    description:
      "We arrange samples, negotiate price and terms, and help you lock in a clear, written agreement before production starts.",
  },
  {
    id: "step-5",
    icon: Factory,
    step: "05",
    title: "Production & QC",
    description:
      "We follow production and run inspections at key milestones, catching issues early and keeping you informed throughout.",
  },
  {
    id: "step-6",
    icon: Truck,
    step: "06",
    title: "Inspect, Ship & Deliver",
    description:
      "A final pre-shipment inspection, then we coordinate freight and documentation so your goods arrive as expected.",
  },
]

export const PRODUCT_CATEGORIES = [
  {
    id: "consumer-electronics",
    name: "Consumer Electronics",
    description:
      "Audio devices, accessories, small appliances, and smart home products from audited electronics factories.",
    imgId: "prod-electronics-1a2b3c",
    titleId: "prod-electronics-title",
    descId: "prod-electronics-desc",
  },
  {
    id: "home-living",
    name: "Home & Living",
    description:
      "Kitchenware, home textiles, furniture, and decor from manufacturers with consistent finishing quality.",
    imgId: "prod-home-4d5e6f",
    titleId: "prod-home-title",
    descId: "prod-home-desc",
  },
  {
    id: "apparel-textiles",
    name: "Apparel & Textiles",
    description:
      "Fashion, activewear, and fabric products with sample approval and fabric testing before bulk.",
    imgId: "prod-apparel-7g8h9i",
    titleId: "prod-apparel-title",
    descId: "prod-apparel-desc",
  },
  {
    id: "promotional-goods",
    name: "Promotional & Gifts",
    description:
      "Branded merchandise, giveaways, and corporate gifts with logo application and packaging support.",
    imgId: "prod-promo-0j1k2l",
    titleId: "prod-promo-title",
    descId: "prod-promo-desc",
  },
  {
    id: "hardware-tools",
    name: "Hardware & Tools",
    description:
      "Hand tools, fittings, and industrial components from factories with material and tolerance control.",
    imgId: "prod-hardware-3m4n5o",
    titleId: "prod-hardware-title",
    descId: "prod-hardware-desc",
  },
  {
    id: "beauty-personal-care",
    name: "Beauty & Personal Care",
    description:
      "Cosmetics, grooming, and personal care items with compliance documentation and packaging checks.",
    imgId: "prod-beauty-6p7q8r",
    titleId: "prod-beauty-title",
    descId: "prod-beauty-desc",
  },
]

export const PROBLEMS = [
  {
    id: "problem-1",
    icon: ShieldCheck,
    title: "Suppliers that look real but aren't",
    description:
      "Online listings can be misleading. We verify business licenses and audit factories on the ground so you know who you're really paying.",
  },
  {
    id: "problem-2",
    icon: ClipboardCheck,
    title: "Quality that drops after the sample",
    description:
      "The sample is perfect, the bulk order isn't. Our milestone inspections catch deviations before goods leave the factory.",
  },
  {
    id: "problem-3",
    icon: Languages,
    title: "Language and time-zone barriers",
    description:
      "Miscommunication causes costly mistakes. Our bilingual team translates requirements precisely and works your hours.",
  },
  {
    id: "problem-4",
    icon: Clock,
    title: "Silence and unexplained delays",
    description:
      "Factories go quiet when things slip. We follow up in person and report status weekly, flagging risks early.",
  },
  {
    id: "problem-5",
    icon: Banknote,
    title: "Hidden costs and unclear pricing",
    description:
      "Quotes that exclude tooling, packaging, or freight. We break down the full cost so there are no surprises later.",
  },
  {
    id: "problem-6",
    icon: Ship,
    title: "Shipping confusion and paperwork",
    description:
      "Freight, customs, and documents can overwhelm first-time importers. We coordinate it end to end with tracking.",
  },
]

export const TRUST_POINTS = [
  {
    id: "trust-1",
    icon: BadgeCheck,
    stat: "10+",
    label: "Years on the ground in China",
  },
  {
    id: "trust-2",
    icon: Boxes,
    stat: "1,200+",
    label: "Suppliers screened and audited",
  },
  {
    id: "trust-3",
    icon: Globe2,
    stat: "30+",
    label: "Countries shipped to",
  },
  {
    id: "trust-4",
    icon: Headset,
    stat: "1:1",
    label: "Dedicated sourcing coordinator",
  },
]

export const CASE_STUDIES = [
  {
    id: "case-electronics",
    slug: "us-electronics-brand",
    client: "US Consumer Electronics Brand",
    industry: "Consumer Electronics",
    challenge:
      "Needed a reliable OEM for a new line of Bluetooth speakers at a target landed cost, but had no China presence and had been burned by a supplier that shipped inconsistent quality.",
    approach:
      "We shortlisted four audited factories, ran a side-by-side sample comparison, and selected a partner with strong QC processes. We set AQL-based pre-shipment inspections and weekly production updates.",
    result:
      "First order delivered on schedule with a 0.8% defect rate (vs. 6% previously). Landed cost came in 4% under target, and the client placed three repeat orders within the year.",
    metrics: [
      { label: "Defect rate", value: "0.8%" },
      { label: "Landed cost vs target", value: "-4%" },
      { label: "Repeat orders", value: "3" },
    ],
    imgId: "case-electronics-9f0e1d",
    titleId: "case-electronics-title",
    descId: "case-electronics-desc",
  },
  {
    id: "case-home",
    slug: "eu-home-retailer",
    client: "European Home & Living Retailer",
    industry: "Home & Living",
    challenge:
      "Wanted to consolidate multiple SKUs from different factories into one shipment to cut freight, but struggled to align production timelines and quality across suppliers.",
    approach:
      "We coordinated production schedules across three factories, ran pre-shipment inspections on each SKU, and consolidated cargo at our warehouse before booking a single sea shipment.",
    result:
      "Freight cost per unit dropped 22% versus separate shipments, and all SKUs passed inspection. The client now routes all China orders through our consolidation service.",
    metrics: [
      { label: "Freight cost per unit", value: "-22%" },
      { label: "SKUs consolidated", value: "12" },
      { label: "Inspection pass rate", value: "100%" },
    ],
    imgId: "case-home-2c3b4a",
    titleId: "case-home-title",
    descId: "case-home-desc",
  },
  {
    id: "case-promo",
    slug: "au-promotional-campaign",
    client: "Australian Promotional Products Agency",
    industry: "Promotional & Gifts",
    challenge:
      "Tight 6-week deadline for a branded merchandise campaign across five products, with logo application that had to match brand guidelines exactly.",
    approach:
      "We fast-tracked supplier selection, managed artwork approval and pre-production samples, and inspected each product for logo placement and color accuracy before shipment.",
    result:
      "All five products delivered within the deadline, logo quality approved on first inspection, and the agency expanded the program to two more campaigns.",
    metrics: [
      { label: "Lead time", value: "6 wks" },
      { label: "Products delivered", value: "5" },
      { label: "Logo rework", value: "0" },
    ],
    imgId: "case-promo-5d6e7f",
    titleId: "case-promo-title",
    descId: "case-promo-desc",
  },
]

export const FAQS = [
  {
    id: "faq-1",
    question: "What does a China sourcing agent actually do?",
    answer:
      "A sourcing agent acts as your local team in China. We find and verify suppliers, negotiate price and terms, arrange samples, follow production, inspect quality, and coordinate shipping — so you can buy from China without needing your own office or staff on the ground.",
  },
  {
    id: "faq-2",
    question: "How do you charge for your services?",
    answer:
      "We work on a transparent model that depends on your order size and scope. Common structures include a project fee, a percentage of order value, or a retainer for ongoing buyers. We share a clear quote after understanding your requirements — there are no hidden commissions from suppliers.",
  },
  {
    id: "faq-3",
    question: "Do you work with small or first-time importers?",
    answer:
      "Yes. Many of our clients are importing from China for the first time. We guide you through samples, MOQs, payment terms, and shipping so the process is clear and manageable, even at smaller order volumes.",
  },
  {
    id: "faq-4",
    question: "How do you verify a supplier is legitimate?",
    answer:
      "We check the factory's business license and registration, review their production capacity and equipment, and — for meaningful orders — conduct an on-site audit with a photo report. We also assess their experience with similar products and export markets.",
  },
  {
    id: "faq-5",
    question: "What happens if quality fails inspection?",
    answer:
      "If a pre-shipment inspection finds defects beyond the agreed AQL limit, we hold shipment and work with the factory to rework or replace the affected goods. You approve the corrected batch before it ships. We never ship goods that fail inspection without your written consent.",
  },
  {
    id: "faq-6",
    question: "Can you handle shipping to my country?",
    answer:
      "Yes. We coordinate sea, air, and express freight to destinations worldwide, handle export documents, and provide tracking. For buyers ordering from multiple factories, we also consolidate cargo to reduce freight cost.",
  },
  {
    id: "faq-7",
    question: "How long does the sourcing process take?",
    answer:
      "A typical first project takes 4–8 weeks from requirements to shipment, depending on product complexity, sampling, and production lead time. We give you a realistic timeline up front and update you weekly so there are no surprises.",
  },
  {
    id: "faq-8",
    question: "Do you sign NDAs and protect my product ideas?",
    answer:
      "Yes. We're happy to sign a mutual NDA before you share product details, and we limit which suppliers see sensitive information to those genuinely being considered for your order.",
  },
]

export const BLOG_POSTS = [
  {
    id: "blog-1",
    slug: "how-to-verify-a-china-supplier",
    title: "How to Verify a China Supplier Before You Pay a Deposit",
    excerpt:
      "A practical checklist for checking a factory's legitimacy — from business licenses to on-site audits — so you avoid scams and unreliable partners.",
    date: "2026-06-18",
    readTime: "6 min read",
    category: "Supplier Verification",
    imgId: "blog-verify-1f2e3d",
    titleId: "blog-verify-title",
    descId: "blog-verify-desc",
  },
  {
    id: "blog-2",
    slug: "understanding-aql-inspection",
    title: "Understanding AQL: What Your QC Inspection Report Really Means",
    excerpt:
      "AQL sampling is the standard for pre-shipment inspection. Here's how the levels work and what a pass or fail actually tells you about your order.",
    date: "2026-05-30",
    readTime: "7 min read",
    category: "Quality Control",
    imgId: "blog-aql-4c5b6a",
    titleId: "blog-aql-title",
    descId: "blog-aql-desc",
  },
  {
    id: "blog-3",
    slug: "sea-vs-air-freight-from-china",
    title: "Sea vs Air Freight from China: How to Choose for Your Order",
    excerpt:
      "Cost, speed, and reliability all matter. We break down when each option makes sense and how consolidation can cut your per-unit freight.",
    date: "2026-05-12",
    readTime: "5 min read",
    category: "Shipping & Logistics",
    imgId: "blog-freight-7d8e9f",
    titleId: "blog-freight-title",
    descId: "blog-freight-desc",
  },
  {
    id: "blog-4",
    slug: "negotiating-moq-with-china-factories",
    title: "Negotiating MOQ with China Factories Without Killing the Deal",
    excerpt:
      "Minimum order quantities are often flexible. These practical tactics help you lower MOQ while keeping the factory motivated.",
    date: "2026-04-22",
    readTime: "6 min read",
    category: "Sourcing Strategy",
    imgId: "blog-moq-0a1b2c",
    titleId: "blog-moq-title",
    descId: "blog-moq-desc",
  },
  {
    id: "blog-5",
    slug: "common-import-mistakes-first-time-buyers",
    title: "5 Common Import Mistakes First-Time Buyers Make (and How to Avoid Them)",
    excerpt:
      "From skipping samples to ignoring Incoterms, these are the mistakes that cost new importors the most — and how to prevent them.",
    date: "2026-04-03",
    readTime: "8 min read",
    category: "Sourcing Strategy",
    imgId: "blog-mistakes-3d4e5f",
    titleId: "blog-mistakes-title",
    descId: "blog-mistakes-desc",
  },
  {
    id: "blog-6",
    slug: "what-is-a-pre-shipment-inspection",
    title: "What Is a Pre-Shipment Inspection and Why It Saves You Money",
    excerpt:
      "A pre-shipment inspection is your last line of defense before goods leave China. Here's what's checked and why it pays for itself.",
    date: "2026-03-15",
    readTime: "5 min read",
    category: "Quality Control",
    imgId: "blog-psi-6g7h8i",
    titleId: "blog-psi-title",
    descId: "blog-psi-desc",
  },
]

export const STATS = [
  { id: "stat-1", value: "10+", label: "Years sourcing from China" },
  { id: "stat-2", value: "1,200+", label: "Suppliers audited" },
  { id: "stat-3", value: "30+", label: "Export destinations" },
  { id: "stat-4", value: "98%", label: "Inspection pass rate on first attempt" },
]
