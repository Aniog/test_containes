import {
  Search,
  ShieldCheck,
  ClipboardCheck,
  Factory,
  PackageCheck,
  ShipWheel,
  FileText,
  Languages,
  Truck,
  Boxes,
  Cpu,
  Shirt,
  Wrench,
  Home as HomeIcon,
  Dumbbell,
  Baby,
  UtensilsCrossed,
  Car,
  Sprout,
} from "lucide-react"

export const services = [
  {
    id: "supplier-sourcing",
    icon: Search,
    title: "Supplier Sourcing & Screening",
    description:
      "We identify and shortlist suppliers that match your product, target price, and order volume, then pre-screen them for legitimacy and capacity before you commit.",
    points: [
      "Database & on-the-ground supplier search",
      "Capability and capacity pre-screening",
      "Side-by-side supplier comparison",
    ],
  },
  {
    id: "factory-verification",
    icon: ShieldCheck,
    title: "Factory Verification & Audit",
    description:
      "On-site factory audits to confirm the supplier is real, capable, and compliant before you place an order or make a payment.",
    points: [
      "Business license & legal status check",
      "On-site factory audit with photos and report",
      "Production capacity and equipment review",
    ],
  },
  {
    id: "quality-inspection",
    icon: ClipboardCheck,
    title: "Quality Inspection (QC)",
    description:
      "Independent quality inspections at key stages so issues are caught before goods ship, not after they arrive.",
    points: [
      "Pre-production inspection (PPI)",
      "During-production inspection (DUPRO)",
      "Pre-shipment inspection (PSI) with AQL sampling",
    ],
  },
  {
    id: "production-follow-up",
    icon: Factory,
    title: "Production Follow-Up",
    description:
      "We track your order through production, flag delays early, and keep you informed with regular status updates.",
    points: [
      "Production schedule monitoring",
      "Early warning on delays or risks",
      "Regular progress reports with photos",
    ],
  },
  {
    id: "shipping-coordination",
    icon: ShipWheel,
    title: "Shipping & Logistics Coordination",
    description:
      "Consolidation, freight booking, and export documentation handled end-to-end so your goods move cleanly from factory to port.",
    points: [
      "Cargo consolidation from multiple suppliers",
      "Sea, air, and express freight booking",
      "Export documentation and customs support",
    ],
  },
  {
    id: "order-management",
    icon: PackageCheck,
    title: "Order & Document Management",
    description:
      "A single point of contact that manages POs, specs, and documents so nothing falls through the cracks.",
    points: [
      "Purchase order and spec management",
      "Centralized document and sample tracking",
      "One bilingual contact for all suppliers",
    ],
  },
]

export const processSteps = [
  {
    id: "step-1",
    step: "01",
    title: "Share Your Requirements",
    description:
      "Tell us what you want to source — product, specs, target price, and order quantity. We review and confirm feasibility.",
  },
  {
    id: "step-2",
    step: "02",
    title: "Supplier Sourcing & Shortlist",
    description:
      "We search our network and screen suppliers, then send you a shortlist with quotes, capabilities, and a comparison.",
  },
  {
    id: "step-3",
    step: "03",
    title: "Factory Verification",
    description:
      "Before you commit, we verify the factory on-site and confirm it can deliver to your quality and timeline.",
  },
  {
    id: "step-4",
    step: "04",
    title: "Sample & Order Confirmation",
    description:
      "We coordinate samples, negotiate terms, and help finalize the purchase order with clear specs and milestones.",
  },
  {
    id: "step-5",
    step: "05",
    title: "Production & Quality Control",
    description:
      "We follow production and run inspections at key stages, catching and resolving issues before shipment.",
  },
  {
    id: "step-6",
    step: "06",
    title: "Inspection, Shipping & Delivery",
    description:
      "Final inspection, consolidation, freight booking, and export documents — coordinated until goods are on the water.",
  },
]

export const productCategories = [
  {
    id: "consumer-electronics",
    icon: Cpu,
    title: "Consumer Electronics",
    description:
      "Audio, accessories, small appliances, and electronic gadgets from audited factories.",
    imgId: "prod-electronics-3a7c1",
    titleId: "prod-electronics-title",
    descId: "prod-electronics-desc",
  },
  {
    id: "apparel-textiles",
    icon: Shirt,
    title: "Apparel & Textiles",
    description:
      "Garments, home textiles, and fabric products with material and stitching QC.",
    imgId: "prod-apparel-7b2d9",
    titleId: "prod-apparel-title",
    descId: "prod-apparel-desc",
  },
  {
    id: "home-goods",
    icon: HomeIcon,
    title: "Home & Kitchen",
    description:
      "Kitchenware, home decor, and household items sourced from reliable manufacturers.",
    imgId: "prod-home-9c4e2",
    titleId: "prod-home-title",
    descId: "prod-home-desc",
  },
  {
    id: "hardware-tools",
    icon: Wrench,
    title: "Hardware & Tools",
    description:
      "Hand tools, fittings, and industrial hardware with material and spec verification.",
    imgId: "prod-hardware-1f8a6",
    titleId: "prod-hardware-title",
    descId: "prod-hardware-desc",
  },
  {
    id: "sports-outdoor",
    icon: Dumbbell,
    title: "Sports & Outdoor",
    description:
      "Fitness gear, outdoor equipment, and accessories built to spec and inspected.",
    imgId: "prod-sports-5d3b8",
    titleId: "prod-sports-title",
    descId: "prod-sports-desc",
  },
  {
    id: "baby-products",
    icon: Baby,
    title: "Baby & Kids Products",
    description:
      "Toys and juvenile products with safety and compliance checks prioritized.",
    imgId: "prod-baby-2e9f4",
    titleId: "prod-baby-title",
    descId: "prod-baby-desc",
  },
  {
    id: "kitchenware",
    icon: UtensilsCrossed,
    title: "Kitchenware & Drinkware",
    description:
      "Stainless steel, ceramic, and drinkware items with food-grade verification.",
    imgId: "prod-kitchen-8a1c7",
    titleId: "prod-kitchen-title",
    descId: "prod-kitchen-desc",
  },
  {
    id: "auto-parts",
    icon: Car,
    title: "Auto Parts & Accessories",
    description:
      "Aftermarket parts and accessories with dimensional and material inspection.",
    imgId: "prod-auto-6f4d3",
    titleId: "prod-auto-title",
    descId: "prod-auto-desc",
  },
  {
    id: "packaging",
    icon: Boxes,
    title: "Packaging & Printing",
    description:
      "Custom packaging, labels, and print materials with color and proof checks.",
    imgId: "prod-packaging-4b7e1",
    titleId: "prod-packaging-title",
    descId: "prod-packaging-desc",
  },
  {
    id: "garden-outdoor",
    icon: Sprout,
    title: "Garden & Outdoor",
    description:
      "Garden tools, planters, and outdoor living products sourced and inspected.",
    imgId: "prod-garden-3c6f9",
    titleId: "prod-garden-title",
    descId: "prod-garden-desc",
  },
]

export const problems = [
  {
    id: "problem-1",
    title: "Suppliers that look real but aren't",
    description:
      "Online supplier listings can be misleading. We verify factories on the ground before you pay.",
  },
  {
    id: "problem-2",
    title: "Quality that drops after the sample",
    description:
      "Samples pass, mass production fails. Our staged inspections catch issues before shipment.",
  },
  {
    id: "problem-3",
    title: "Delays you only hear about late",
    description:
      "We follow production closely and flag delays early, so you can plan instead of react.",
  },
  {
    id: "problem-4",
    title: "Communication gaps & language barriers",
    description:
      "A bilingual team manages suppliers in their language and reports to you in yours.",
  },
  {
    id: "problem-5",
    title: "Messy shipping & documentation",
    description:
      "Consolidation, freight, and export paperwork handled so goods move without surprises.",
  },
  {
    id: "problem-6",
    title: "No visibility into your order",
    description:
      "Regular updates with photos and reports keep you informed at every stage.",
  },
]

export const trustPoints = [
  {
    id: "trust-1",
    icon: ShieldCheck,
    title: "On-site factory verification",
    description:
      "We visit and audit factories in person, not just over chat.",
  },
  {
    id: "trust-2",
    icon: ClipboardCheck,
    title: "Independent QC inspections",
    description:
      "Inspections based on AQL sampling, reported with photos and findings.",
  },
  {
    id: "trust-3",
    icon: Languages,
    title: "Bilingual project management",
    description:
      "One contact who speaks your suppliers' language and yours.",
  },
  {
    id: "trust-4",
    icon: FileText,
    title: "Transparent reporting",
    description:
      "Written reports and photos at every milestone, no hidden steps.",
  },
]

export const stats = [
  { id: "stat-1", value: "12+", label: "Years sourcing in China" },
  { id: "stat-2", value: "1,500+", label: "Suppliers screened" },
  { id: "stat-3", value: "40+", label: "Countries shipped to" },
  { id: "stat-4", value: "98%", label: "Inspection pass rate on first PSI" },
]

export const caseStudies = [
  {
    id: "case-electronics",
    industry: "Consumer Electronics",
    title: "Replacing a failed supplier for a US audio brand",
    summary:
      "A US brand's existing supplier repeatedly missed quality targets. We re-sourced an audited factory, ran staged inspections, and stabilized on-time delivery.",
    imgId: "case-electronics-7d2a1",
    titleId: "case-electronics-title",
    descId: "case-electronics-desc",
    results: [
      "New audited supplier onboarded in 6 weeks",
      "PSI defect rate reduced from 7% to under 1.5%",
      "On-time shipment rate improved to 95%",
    ],
  },
  {
    id: "case-home",
    industry: "Home & Kitchen",
    title: "Consolidating 8 suppliers into one shipment for an EU retailer",
    summary:
      "A European retailer sourced from multiple factories across regions. We consolidated cargo, coordinated inspections, and booked a single consolidated container.",
    imgId: "case-home-3f8c5",
    titleId: "case-home-title",
    descId: "case-home-desc",
    results: [
      "8 suppliers consolidated into 1 container",
      "Freight cost reduced by ~22%",
      "Single customs document set for the whole order",
    ],
  },
  {
    id: "case-apparel",
    industry: "Apparel & Textiles",
    title: "Catching a fabric substitution before shipment",
    summary:
      "During a DUPRO inspection we found the factory had substituted a cheaper fabric. We halted production, resolved it with the supplier, and protected the buyer's spec.",
    imgId: "case-apparel-9b4e2",
    titleId: "case-apparel-title",
    descId: "case-apparel-desc",
    results: [
      "Fabric substitution caught mid-production",
      "Re-work completed before shipment window",
      "Buyer spec protected without re-sourcing",
    ],
  },
]

export const faqs = [
  {
    id: "faq-1",
    question: "What does a China sourcing agent actually do?",
    answer:
      "A sourcing agent acts as your local team in China: finding and screening suppliers, verifying factories, coordinating samples, following production, running quality inspections, and arranging shipping and export documents. You stay in control of decisions while we handle the on-the-ground work.",
  },
  {
    id: "faq-2",
    question: "How do you charge for your services?",
    answer:
      "We work on a transparent project or service-based model depending on scope. After a short review of your requirements we send a clear quote with no hidden fees. The initial sourcing quote is free.",
  },
  {
    id: "faq-3",
    question: "Do you work with small order quantities?",
    answer:
      "Yes. We work with buyers across a range of order sizes. Where minimum order quantities (MOQs) are a concern, we help identify suppliers whose MOQ fits your stage and negotiate where possible.",
  },
  {
    id: "faq-4",
    question: "Can you inspect goods before they ship?",
    answer:
      "Yes. We offer pre-production (PPI), during-production (DUPRO), and pre-shipment (PSI) inspections using AQL sampling. Each inspection comes with a written report and photos.",
  },
  {
    id: "faq-5",
    question: "Which industries do you source for?",
    answer:
      "We source across consumer electronics, apparel and textiles, home and kitchen, hardware and tools, sports and outdoor, baby and kids products, packaging, and more. See Products We Source for examples.",
  },
  {
    id: "faq-6",
    question: "Do you handle shipping and customs?",
    answer:
      "We coordinate freight booking (sea, air, express), cargo consolidation, and export documentation on the China side. For destination customs and duties we work with your forwarder or recommend one.",
  },
  {
    id: "faq-7",
    question: "How will I stay updated on my order?",
    answer:
      "You get a single bilingual contact and regular progress updates with photos and reports at each milestone — sourcing, verification, production, inspection, and shipping.",
  },
]

export const blogPosts = [
  {
    id: "blog-verify-supplier",
    title: "How to Verify a Chinese Supplier Before You Pay",
    excerpt:
      "A practical checklist for confirming a supplier is real and capable, from business license checks to on-site audits.",
    category: "Supplier Verification",
    date: "2026-06-12",
    readTime: "6 min read",
    imgId: "blog-verify-1a2b3",
    titleId: "blog-verify-title",
    descId: "blog-verify-desc",
  },
  {
    id: "blog-aql-inspection",
    title: "Understanding AQL Sampling for Pre-Shipment Inspection",
    excerpt:
      "What AQL levels mean, how inspectors use them, and why they matter for your acceptance decisions.",
    category: "Quality Control",
    date: "2026-05-28",
    readTime: "5 min read",
    imgId: "blog-aql-4c5d6",
    titleId: "blog-aql-title",
    descId: "blog-aql-desc",
  },
  {
    id: "blog-consolidation",
    title: "Cargo Consolidation: Cutting Freight Cost from Multiple Suppliers",
    excerpt:
      "How combining orders from several factories into one shipment reduces cost and simplifies logistics.",
    category: "Shipping & Logistics",
    date: "2026-05-10",
    readTime: "7 min read",
    imgId: "blog-consol-7e8f9",
    titleId: "blog-consol-title",
    descId: "blog-consol-desc",
  },
  {
    id: "blog-moq",
    title: "Negotiating MOQ When You're Starting Small",
    excerpt:
      "Practical ways to work with minimum order quantities when your business is still scaling.",
    category: "Sourcing Strategy",
    date: "2026-04-22",
    readTime: "5 min read",
    imgId: "blog-moq-2g3h4",
    titleId: "blog-moq-title",
    descId: "blog-moq-desc",
  },
  {
    id: "blog-dupro",
    title: "Why During-Production Inspection Saves Orders",
    excerpt:
      "Catching problems mid-production is cheaper and faster than finding them at pre-shipment.",
    category: "Quality Control",
    date: "2026-04-05",
    readTime: "6 min read",
    imgId: "blog-dupro-5i6j7",
    titleId: "blog-dupro-title",
    descId: "blog-dupro-desc",
  },
  {
    id: "blog-documents",
    title: "Export Documents You Need When Sourcing from China",
    excerpt:
      "A plain-English overview of the key documents involved in shipping goods out of China.",
    category: "Shipping & Logistics",
    date: "2026-03-18",
    readTime: "8 min read",
    imgId: "blog-docs-8k9l0",
    titleId: "blog-docs-title",
    descId: "blog-docs-desc",
  },
]
