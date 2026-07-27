import {
  Search,
  ShieldCheck,
  ClipboardCheck,
  Factory,
  ShipWheel,
  PackageCheck,
  FileSearch,
  Users,
  Truck,
  Boxes,
  HardHat,
  Wrench,
  Shirt,
  Cpu,
  Sofa,
  Dumbbell,
  Baby,
  Car,
  Sprout,
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
      "We identify and shortlist manufacturers that match your product, budget, and volume requirements.",
    points: [
      "Targeted supplier search across verified factory networks",
      "Shortlist of 3–5 qualified candidates with capability profiles",
      "Initial price and MOQ benchmarking",
    ],
  },
  {
    id: "factory-verification",
    icon: ShieldCheck,
    title: "Factory Verification",
    summary:
      "On-site and documentary checks to confirm a factory is real, capable, and legally registered.",
    points: [
      "Business license and export qualification review",
      "On-site factory audit with photo and video report",
      "Production capacity and equipment assessment",
    ],
  },
  {
    id: "quality-inspection",
    icon: ClipboardCheck,
    title: "Quality Inspection",
    summary:
      "Independent QC checks at key production stages and before shipment to reduce defect risk.",
    points: [
      "Pre-production material and sample inspection",
      "During-production (DUPRO) checks",
      "Pre-shipment inspection (PSI) with AQL sampling",
    ],
  },
  {
    id: "production-follow-up",
    icon: Factory,
    title: "Production Follow-Up",
    summary:
      "We track your order from deposit to delivery and keep you informed of progress and risks.",
    points: [
      "Production schedule monitoring",
      "Weekly progress updates with photos",
      "Early warning on delays and deviations",
    ],
  },
  {
    id: "shipping-coordination",
    icon: ShipWheel,
    title: "Shipping Coordination",
    summary:
      "Consolidation, freight booking, and customs documentation handled end to end.",
    points: [
      "Cargo consolidation from multiple suppliers",
      "Sea, air, and express freight booking",
      "Export customs clearance and documentation",
    ],
  },
  {
    id: "order-management",
    icon: PackageCheck,
    title: "Order Management",
    summary:
      "A single point of contact coordinating suppliers, QC, and logistics so you don't have to.",
    points: [
      "Centralized order tracking dashboard",
      "Supplier communication in your language",
      "Issue resolution and change management",
    ],
  },
]

export const PROCESS_STEPS = [
  {
    id: "step-1",
    number: "01",
    title: "Share Your Requirements",
    description:
      "Tell us about your product, target price, order quantity, and timeline. The more detail you provide, the more precise our sourcing will be.",
  },
  {
    id: "step-2",
    number: "02",
    title: "Supplier Sourcing & Shortlist",
    description:
      "We search our factory network and market channels to shortlist 3–5 suppliers that match your specifications, with capability profiles and indicative pricing.",
  },
  {
    id: "step-3",
    number: "03",
    title: "Factory Verification",
    description:
      "We verify the shortlisted factories through document review and on-site audits, confirming they are legitimate and capable of your order.",
  },
  {
    id: "step-4",
    number: "04",
    title: "Sample & Quotation",
    description:
      "We coordinate sampling and collect transparent, itemized quotations so you can compare options on equal terms before committing.",
  },
  {
    id: "step-5",
    number: "05",
    title: "Production & QC",
    description:
      "After order confirmation, we monitor production progress and conduct quality inspections at key stages to catch issues early.",
  },
  {
    id: "step-6",
    number: "06",
    title: "Inspection & Shipping",
    description:
      "A pre-shipment inspection confirms quality, then we consolidate cargo, book freight, and handle export documentation to your destination port.",
  },
]

export const PRODUCT_CATEGORIES = [
  {
    id: "industrial-machinery",
    icon: Wrench,
    title: "Industrial Machinery",
    description:
      "Production equipment, packaging machines, and industrial tools sourced from established manufacturers with engineering support.",
    imgId: "prod-machinery-3f2a1c",
    titleId: "prod-machinery-title",
    descId: "prod-machinery-desc",
  },
  {
    id: "consumer-electronics",
    icon: Cpu,
    title: "Consumer Electronics",
    description:
      "Audio devices, accessories, small appliances, and electronic components with certification and compliance support.",
    imgId: "prod-electronics-7b9d04",
    titleId: "prod-electronics-title",
    descId: "prod-electronics-desc",
  },
  {
    id: "home-furniture",
    icon: Sofa,
    title: "Home & Furniture",
    description:
      "Furniture, home textiles, kitchenware, and decor items from factories experienced in export-grade finishing.",
    imgId: "prod-home-2c8e51",
    titleId: "prod-home-title",
    descId: "prod-home-desc",
  },
  {
    id: "apparel-textiles",
    icon: Shirt,
    title: "Apparel & Textiles",
    description:
      "Garments, fabrics, and accessories with sample development, fabric sourcing, and batch quality control.",
    imgId: "prod-apparel-9a1f3d",
    titleId: "prod-apparel-title",
    descId: "prod-apparel-desc",
  },
  {
    id: "sports-outdoor",
    icon: Dumbbell,
    title: "Sports & Outdoor",
    description:
      "Fitness equipment, outdoor gear, and sporting goods sourced for durability and consistent material quality.",
    imgId: "prod-sports-5e7b22",
    titleId: "prod-sports-title",
    descId: "prod-sports-desc",
  },
  {
    id: "baby-products",
    icon: Baby,
    title: "Baby & Kids Products",
    description:
      "Toys, nursery items, and children's products with attention to safety standards and material compliance.",
    imgId: "prod-baby-4d6a90",
    titleId: "prod-baby-title",
    descId: "prod-baby-desc",
  },
  {
    id: "auto-parts",
    icon: Car,
    title: "Auto Parts & Accessories",
    description:
      "Aftermarket parts, accessories, and components from suppliers with machining and quality traceability.",
    imgId: "prod-auto-1c3b77",
    titleId: "prod-auto-title",
    descId: "prod-auto-desc",
  },
  {
    id: "packaging-materials",
    icon: Boxes,
    title: "Packaging & Materials",
    description:
      "Custom packaging, printed materials, and raw components consolidated efficiently for export shipments.",
    imgId: "prod-packaging-8f0e45",
    titleId: "prod-packaging-title",
    descId: "prod-packaging-desc",
  },
]

export const PROBLEMS = [
  {
    id: "problem-1",
    icon: FileSearch,
    title: "Unreliable suppliers online",
    description:
      "Online supplier listings can be misleading. We verify factories on the ground so you work with real, capable manufacturers.",
  },
  {
    id: "problem-2",
    icon: ShieldCheck,
    title: "Quality surprises after delivery",
    description:
      "Defects discovered at destination are costly. Our staged inspections catch issues before goods leave China.",
  },
  {
    id: "problem-3",
    icon: Users,
    title: "Language and time-zone barriers",
    description:
      "Miscommunication causes delays and errors. We act as your local team, communicating clearly in your language.",
  },
  {
    id: "problem-4",
    icon: Truck,
    title: "Fragmented logistics",
    description:
      "Coordinating multiple suppliers and freight is complex. We consolidate and manage shipping end to end.",
  },
]

export const TRUST_POINTS = [
  {
    id: "trust-1",
    icon: HardHat,
    title: "On-the-ground team in China",
    description:
      "Local auditors and QC inspectors visit factories directly, so verification is based on what we see, not what we are told.",
  },
  {
    id: "trust-2",
    icon: ClipboardCheck,
    title: "Independent quality checks",
    description:
      "Inspections follow documented AQL sampling standards, with photo and video evidence in every report.",
  },
  {
    id: "trust-3",
    icon: FileSearch,
    title: "Transparent reporting",
    description:
      "You receive clear, itemized quotations and progress updates, with no hidden margins layered into supplier prices.",
  },
  {
    id: "trust-4",
    icon: ShipWheel,
    title: "End-to-end coordination",
    description:
      "From sourcing to shipping, one accountable team follows your order through every stage of the process.",
  },
]

export const STATS = [
  { id: "stat-1", value: "12+", label: "Years sourcing in China" },
  { id: "stat-2", value: "800+", label: "Factories audited" },
  { id: "stat-3", value: "40+", label: "Export destinations" },
  { id: "stat-4", value: "98%", label: "Inspection report on-time rate" },
]

export const CASE_STUDIES = [
  {
    id: "case-kitchenware",
    slug: "kitchenware-eu-retailer",
    industry: "Home & Kitchenware",
    location: "Germany",
    title: "Scaling a kitchenware line for a European retailer",
    summary:
      "A European retailer needed a reliable supplier for a growing kitchenware line. We sourced and verified a factory, set up staged QC, and coordinated consolidated shipments to Hamburg.",
    challenge:
      "The buyer had experienced inconsistent quality and missed delivery windows with a previous supplier, putting their retail season at risk.",
    approach:
      "We re-sourced from audited factories, ran pre-production and pre-shipment inspections, and introduced a production tracking schedule with weekly photo updates.",
    result:
      "Defect rate at destination dropped noticeably, and the order landed in time for the retail launch window.",
    imgId: "case-kitchenware-img-1a2b3c",
    titleId: "case-kitchenware-title",
    descId: "case-kitchenware-desc",
  },
  {
    id: "case-electronics",
    slug: "consumer-electronics-brand",
    industry: "Consumer Electronics",
    location: "United States",
    title: "Launching an accessories brand with compliance support",
    summary:
      "A US startup launching an electronics accessories brand needed certified suppliers and consistent small-batch production.",
    challenge:
      "The buyer needed compliance documentation and could not afford defective units in early batches that would damage a new brand.",
    approach:
      "We shortlisted factories with relevant certifications, coordinated sampling, and implemented DUPRO and pre-shipment inspections on every batch.",
    result:
      "The brand launched on schedule with documentation in place and a low return rate in its first season.",
    imgId: "case-electronics-img-4d5e6f",
    titleId: "case-electronics-title",
    descId: "case-electronics-desc",
  },
  {
    id: "case-furniture",
    slug: "furniture-wholesale-asia",
    industry: "Furniture",
    location: "Australia",
    title: "Consolidating furniture from multiple suppliers",
    summary:
      "An Australian wholesaler sourced furniture from several factories and needed help consolidating cargo and managing quality across vendors.",
    challenge:
      "Multiple suppliers with different lead times and quality standards created coordination and shipping complexity.",
    approach:
      "We audited each supplier, aligned production schedules, and consolidated cargo into full containers with a final pre-shipment inspection.",
    result:
      "Shipping costs were reduced through consolidation, and the buyer received a single coordinated shipment with consistent quality.",
    imgId: "case-furniture-img-7g8h9i",
    titleId: "case-furniture-title",
    descId: "case-furniture-desc",
  },
]

export const FAQS = [
  {
    id: "faq-1",
    question: "What does a sourcing agent actually do?",
    answer:
      "A sourcing agent acts as your local team in China. We find and verify suppliers, coordinate sampling and quotations, monitor production, inspect quality, and arrange shipping. You get one accountable partner instead of managing multiple factories yourself.",
  },
  {
    id: "faq-2",
    question: "How do you charge for your services?",
    answer:
      "Our pricing depends on the scope of work, such as sourcing only, sourcing plus QC, or full end-to-end management. After understanding your requirements we provide a clear, itemized quote with no hidden margins on supplier prices.",
  },
  {
    id: "faq-3",
    question: "Do you work with small order quantities?",
    answer:
      "Yes. We work with buyers at different stages, from startups placing first orders to established importers. We help you find suppliers whose minimum order quantities match your needs and consolidate shipments where it lowers cost.",
  },
  {
    id: "faq-4",
    question: "Can you inspect goods before they ship?",
    answer:
      "Yes. We conduct pre-production, during-production, and pre-shipment inspections using documented AQL sampling. Each inspection comes with a written report including photos and video so you can make an informed release decision.",
  },
  {
    id: "faq-5",
    question: "Which shipping methods do you coordinate?",
    answer:
      "We coordinate sea freight (FCL and LCL), air freight, and express courier depending on your budget and timeline. We also handle export customs clearance and prepare the documentation your destination requires.",
  },
  {
    id: "faq-6",
    question: "How long does the sourcing process take?",
    answer:
      "It varies by product and requirements. A first shortlist is typically ready within 1–2 weeks. Sampling, verification, and production timelines depend on the product category and order size, which we outline in your quote.",
  },
]

export const BLOG_POSTS = [
  {
    id: "blog-1",
    slug: "how-to-verify-a-chinese-supplier",
    title: "How to Verify a Chinese Supplier Before Placing an Order",
    excerpt:
      "A practical checklist for confirming a factory is real, capable, and export-ready, from business license checks to on-site audits.",
    category: "Supplier Verification",
    date: "2026-06-18",
    readTime: "6 min read",
    imgId: "blog-verify-img-2b3c4d",
    titleId: "blog-verify-title",
    descId: "blog-verify-desc",
  },
  {
    id: "blog-2",
    slug: "understanding-aql-quality-inspection",
    title: "Understanding AQL Sampling in Pre-Shipment Inspection",
    excerpt:
      "What AQL levels mean, how inspectors use them, and why sampling matters for making confident release decisions.",
    category: "Quality Control",
    date: "2026-05-30",
    readTime: "5 min read",
    imgId: "blog-aql-img-5e6f7g",
    titleId: "blog-aql-title",
    descId: "blog-aql-desc",
  },
  {
    id: "blog-3",
    slug: "fcl-vs-lcl-shipping-from-china",
    title: "FCL vs LCL: Choosing the Right Sea Freight from China",
    excerpt:
      "A comparison of full and less-than-container shipping, when consolidation makes sense, and how to avoid common pitfalls.",
    category: "Shipping & Logistics",
    date: "2026-05-12",
    readTime: "7 min read",
    imgId: "blog-fcl-img-8h9i0j",
    titleId: "blog-fcl-title",
    descId: "blog-fcl-desc",
  },
  {
    id: "blog-4",
    slug: "reducing-defects-with-staged-inspections",
    title: "Reducing Defects with Staged Quality Inspections",
    excerpt:
      "Why inspecting only at the end is risky, and how pre-production, DUPRO, and PSI checks work together to protect your order.",
    category: "Quality Control",
    date: "2026-04-22",
    readTime: "6 min read",
    imgId: "blog-defects-img-1k2l3m",
    titleId: "blog-defects-title",
    descId: "blog-defects-desc",
  },
  {
    id: "blog-5",
    slug: "negotiating-with-chinese-factories",
    title: "Practical Tips for Negotiating with Chinese Factories",
    excerpt:
      "How to approach price, MOQ, and payment terms constructively, and what to put in writing before production starts.",
    category: "Sourcing Strategy",
    date: "2026-04-05",
    readTime: "5 min read",
    imgId: "blog-negotiate-img-4n5o6p",
    titleId: "blog-negotiate-title",
    descId: "blog-negotiate-desc",
  },
  {
    id: "blog-6",
    slug: "preparing-for-a-factory-audit",
    title: "What to Expect During a Factory Audit in China",
    excerpt:
      "A walkthrough of what an on-site audit covers, the evidence you should receive, and how to read an audit report.",
    category: "Supplier Verification",
    date: "2026-03-19",
    readTime: "6 min read",
    imgId: "blog-audit-img-7q8r9s",
    titleId: "blog-audit-title",
    descId: "blog-audit-desc",
  },
]

export const CONTACT_INFO = [
  { id: "ci-1", icon: Users, label: "Office", value: "Yiwu, Zhejiang, China" },
  { id: "ci-2", icon: ShipWheel, label: "Service hours", value: "Mon–Sat, 9:00–18:00 (GMT+8)" },
  { id: "ci-3", icon: FileSearch, label: "Email", value: "inquiries@ssourcingchina.com" },
]
