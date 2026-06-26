// Centralized site data: services, process steps, products, problems, trust points, FAQs, case studies, blog posts.

export const services = [
  {
    id: "supplier-sourcing",
    icon: "Search",
    title: "Supplier Sourcing",
    description:
      "We identify and shortlist factories that match your product, MOQ and target price across mainland China.",
    points: [
      "Direct-from-factory sourcing, no middlemen",
      "Cross-checked against Alibaba, 1688 and offline networks",
      "Shortlist of 3–5 vetted candidates per project",
    ],
  },
  {
    id: "supplier-verification",
    icon: "ShieldCheck",
    title: "Supplier Verification",
    description:
      "On-site factory audits and business license checks before you place a deposit.",
    points: [
      "Business license & export rights verification",
      "Factory walkthroughs with photos and video",
      "Production capacity and workforce review",
    ],
  },
  {
    id: "sample-management",
    icon: "Package",
    title: "Sample Management",
    description:
      "We collect, review and consolidate samples from multiple suppliers so you only pay one shipping fee.",
    points: [
      "Sample collection and labeling",
      "Internal pre-check before forwarding",
      "Consolidated international shipping",
    ],
  },
  {
    id: "price-negotiation",
    icon: "Handshake",
    title: "Price Negotiation",
    description:
      "Local negotiation in Chinese, based on real cost structures, MOQ flexibility and payment terms.",
    points: [
      "Quotation comparison across suppliers",
      "MOQ, mold and tooling cost negotiation",
      "Payment terms aligned with your risk profile",
    ],
  },
  {
    id: "quality-inspection",
    icon: "ClipboardCheck",
    title: "Quality Inspection",
    description:
      "Independent QC inspections following AQL standards at every stage of production.",
    points: [
      "Initial Production Check (IPC)",
      "During Production Check (DUPRO)",
      "Pre-Shipment Inspection (PSI) with AQL report",
    ],
  },
  {
    id: "production-follow-up",
    icon: "Factory",
    title: "Production Follow-up",
    description:
      "Weekly production updates with photos, so you know exactly where your order stands.",
    points: [
      "Production schedule tracking",
      "Material and component readiness checks",
      "Escalation when timelines slip",
    ],
  },
  {
    id: "shipping-logistics",
    icon: "Ship",
    title: "Shipping & Logistics",
    description:
      "Freight forwarding by sea, air and rail with consolidation from multiple suppliers when needed.",
    points: [
      "FCL, LCL, air and express options",
      "Cargo consolidation and re-packing",
      "Customs documentation and HS code support",
    ],
  },
  {
    id: "private-label",
    icon: "Tag",
    title: "Private Label & OEM",
    description:
      "Custom packaging, branding and product customization with your specifications.",
    points: [
      "Logo printing, custom colorways, custom packaging",
      "Mold and tooling coordination",
      "Compliance support (CE, FCC, RoHS, FDA)",
    ],
  },
]

export const processSteps = [
  {
    step: "01",
    title: "Tell us what you need",
    description:
      "Send us your product specifications, target price, quantities and timeline. We reply within one business day.",
  },
  {
    step: "02",
    title: "Supplier shortlist & quotations",
    description:
      "We identify 3–5 vetted factories, collect quotations and present a side-by-side comparison.",
  },
  {
    step: "03",
    title: "Samples & supplier verification",
    description:
      "We collect samples, perform on-site factory audits and confirm the best partner with you.",
  },
  {
    step: "04",
    title: "Order placement & production",
    description:
      "We negotiate final terms, place the order on your behalf and monitor production weekly.",
  },
  {
    step: "05",
    title: "Quality inspection",
    description:
      "Independent AQL inspections before shipment, with a written report, photos and video.",
  },
  {
    step: "06",
    title: "Shipping & delivery",
    description:
      "We arrange consolidation, freight forwarding and customs documentation to your destination port.",
  },
]

export const productCategories = [
  {
    id: "consumer-electronics",
    title: "Consumer Electronics",
    description:
      "Bluetooth audio, smart home, small appliances, power accessories with FCC/CE support.",
  },
  {
    id: "home-kitchen",
    title: "Home & Kitchen",
    description:
      "Cookware, storage, small kitchen appliances and houseware for retail and e-commerce.",
  },
  {
    id: "apparel-textiles",
    title: "Apparel & Textiles",
    description:
      "Knitwear, woven garments, uniforms, bags and home textiles with custom labels.",
  },
  {
    id: "furniture",
    title: "Furniture",
    description:
      "Indoor and outdoor furniture, office furniture, flat-pack solutions for container loading.",
  },
  {
    id: "industrial-hardware",
    title: "Industrial & Hardware",
    description:
      "Hand tools, fasteners, metal parts, lighting and electrical accessories.",
  },
  {
    id: "beauty-personal-care",
    title: "Beauty & Personal Care",
    description:
      "Skincare packaging, accessories, salon equipment and private-label personal care.",
  },
  {
    id: "sports-outdoor",
    title: "Sports & Outdoor",
    description:
      "Fitness equipment, camping gear, cycling accessories and outdoor textiles.",
  },
  {
    id: "toys-baby",
    title: "Toys & Baby",
    description:
      "Toys, baby accessories and educational products with EN71, ASTM and CPSIA support.",
  },
  {
    id: "promotional-gifts",
    title: "Promotional & Gifts",
    description:
      "Branded merchandise, premium gifts and event giveaways with custom packaging.",
  },
]

export const problems = [
  {
    title: "Suppliers that disappear after deposit",
    description:
      "We verify legal status, export rights and physical premises before you transfer any money.",
  },
  {
    title: "Quality that drops after the first order",
    description:
      "We run AQL inspections on every batch, not only during the sample stage.",
  },
  {
    title: "Hidden price markups from trading companies",
    description:
      "Our fee structure is transparent. You see factory quotations directly.",
  },
  {
    title: "Communication breakdowns and language gaps",
    description:
      "We handle all communication in Chinese on the ground, in English with you.",
  },
  {
    title: "Production delays you only discover at shipment",
    description:
      "Weekly production updates with photos so issues are caught early, not at the port.",
  },
  {
    title: "Shipping and customs complications",
    description:
      "We coordinate consolidation, documentation and HS codes with your freight forwarder.",
  },
]

export const trustPoints = [
  {
    title: "Based in China",
    description:
      "Our team is on the ground in Shenzhen, Guangzhou, Ningbo and Yiwu, close to the factories that matter.",
  },
  {
    title: "Independent of suppliers",
    description:
      "We work for buyers, not for factories. No commissions from suppliers.",
  },
  {
    title: "Transparent reporting",
    description:
      "Inspection reports, factory audits and production updates are shared in writing with photos.",
  },
  {
    title: "Clear, simple fees",
    description:
      "Flat service fee or percentage of order value, agreed up front, no hidden costs.",
  },
]

export const stats = [
  { value: "12+", label: "Years sourcing in China" },
  { value: "500+", label: "Buyers served worldwide" },
  { value: "40+", label: "Product categories" },
  { value: "98%", label: "On-time shipment rate" },
]

export const caseStudies = [
  {
    id: "smart-home-startup",
    client: "Smart Home Startup, Germany",
    industry: "Consumer Electronics",
    challenge:
      "A Berlin-based startup needed an OEM partner for a Wi-Fi enabled smart plug with CE and RoHS compliance.",
    solution:
      "We shortlisted four factories in Shenzhen, ran on-site audits, negotiated the BOM and managed certification testing.",
    result:
      "First production run of 8,000 units delivered FOB Shenzhen in 11 weeks, with 0.6% AQL major defect rate.",
    metrics: [
      { label: "Lead time", value: "11 weeks" },
      { label: "AQL major defects", value: "0.6%" },
      { label: "Unit cost reduction", value: "−18%" },
    ],
  },
  {
    id: "retail-cookware",
    client: "Retail Chain, United States",
    industry: "Home & Kitchen",
    challenge:
      "A US retailer required a stable supplier for a private-label cookware line of 12 SKUs with FDA-compliant coating.",
    solution:
      "We audited three factories in Guangdong, ran lab testing on the non-stick coating, and negotiated tiered MOQ pricing.",
    result:
      "Annual purchasing contract signed with a single primary factory and one backup, with quarterly QC inspections.",
    metrics: [
      { label: "SKUs sourced", value: "12" },
      { label: "Order value / yr", value: "USD 1.2M" },
      { label: "QC pass rate", value: "99.1%" },
    ],
  },
  {
    id: "outdoor-furniture",
    client: "Outdoor Furniture Brand, Australia",
    industry: "Furniture",
    challenge:
      "Brand needed flat-pack outdoor furniture optimized for 40HQ container loading and Australian compliance.",
    solution:
      "We re-engineered packaging with the factory, optimized container fill rate, and arranged DUPRO inspections.",
    result:
      "Container fill rate improved from 71% to 92%, lowering landed cost per unit and reducing shipment frequency.",
    metrics: [
      { label: "Container fill", value: "92%" },
      { label: "Landed cost", value: "−14%" },
      { label: "Inspection visits", value: "4 per run" },
    ],
  },
  {
    id: "promotional-gifts",
    client: "Marketing Agency, United Kingdom",
    industry: "Promotional & Gifts",
    challenge:
      "Agency needed 30,000 branded gift sets for an event in eight weeks, with custom packaging.",
    solution:
      "We split production across two factories in Yiwu, consolidated cargo, and arranged air freight for 20% of the order.",
    result:
      "All 30,000 units arrived in London five days before the event, fully assembled and packaged.",
    metrics: [
      { label: "Units delivered", value: "30,000" },
      { label: "Lead time", value: "8 weeks" },
      { label: "On-time", value: "100%" },
    ],
  },
]

export const faqs = [
  {
    q: "How do you charge for your services?",
    a: "Most projects use either a flat service fee or a percentage of the order value, agreed in writing before work starts. Inspection visits and freight are billed at cost with documentation. There are no commissions from suppliers.",
  },
  {
    q: "Do you work with small orders or only large ones?",
    a: "We work with orders from a few thousand US dollars up to multi-container shipments. For very small trial orders we focus on getting you a verified supplier and consolidated samples first.",
  },
  {
    q: "How long does sourcing usually take?",
    a: "A typical sourcing cycle is 1–2 weeks for shortlisting suppliers, 2–4 weeks for samples, and 4–10 weeks for production depending on complexity and category.",
  },
  {
    q: "Can you sign an NDA before we share product details?",
    a: "Yes. We sign mutual NDAs before reviewing sensitive specifications, drawings or product designs. Supplier-side NDAs are negotiated case by case.",
  },
  {
    q: "Do you handle certification and compliance?",
    a: "We coordinate certification testing for CE, FCC, RoHS, FDA, EN71, CPSIA and other standards through accredited third-party labs. We do not issue certificates ourselves.",
  },
  {
    q: "Which payment methods do you support?",
    a: "We use T/T bank transfers for supplier payments. For service fees we accept T/T, Wise and PayPal. Escrow can be arranged for first-time orders.",
  },
  {
    q: "Do you only source from Alibaba?",
    a: "No. Alibaba is one of many channels. We also use 1688, offline factory networks, trade fairs and our own database of audited suppliers built over years.",
  },
  {
    q: "What if a shipment has quality problems?",
    a: "If issues are detected during AQL inspection we negotiate rework or replacement with the supplier before shipment. For issues found after shipment we help you document and claim with the supplier.",
  },
]

export const blogPosts = [
  {
    id: "supplier-verification-checklist",
    title: "Supplier verification: a practical checklist for first orders",
    excerpt:
      "Eight checks to run before paying a deposit to a new Chinese supplier — beyond a quick look at their Alibaba page.",
    date: "2026-05-22",
    readTime: "7 min read",
    category: "Sourcing",
  },
  {
    id: "aql-inspections-explained",
    title: "AQL inspections explained for non-technical buyers",
    excerpt:
      "What AQL 2.5 actually means, how sample sizes are chosen and what to look for in an inspection report.",
    date: "2026-04-30",
    readTime: "9 min read",
    category: "Quality Control",
  },
  {
    id: "container-loading-optimization",
    title: "How to lower landed cost with better container loading",
    excerpt:
      "Packaging redesign and pallet layout changes can recover 10–20% of container volume — here is how.",
    date: "2026-04-12",
    readTime: "6 min read",
    category: "Logistics",
  },
  {
    id: "moq-negotiation",
    title: "Negotiating MOQ without losing the supplier",
    excerpt:
      "Tactics that work with Chinese factories when your order quantity is below their preferred minimum.",
    date: "2026-03-28",
    readTime: "5 min read",
    category: "Negotiation",
  },
  {
    id: "trade-fair-vs-online",
    title: "Trade fairs vs online sourcing in 2026",
    excerpt:
      "When it still makes sense to visit Canton Fair or Yiwu in person, and when remote sourcing is enough.",
    date: "2026-03-10",
    readTime: "8 min read",
    category: "Sourcing",
  },
  {
    id: "incoterms-quick-guide",
    title: "Incoterms for new importers: EXW, FOB, CIF, DDP",
    excerpt:
      "A short, practical guide to the four Incoterms that cover most China-to-overseas shipments.",
    date: "2026-02-18",
    readTime: "6 min read",
    category: "Logistics",
  },
]
