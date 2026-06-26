// Central content for SSourcing China. Used across Home and inner pages.

export const company = {
  name: "SSourcing China",
  tagline: "China Sourcing Agent for Global Buyers",
  email: "hello@ssourcingchina.com",
  phone: "+86 755 0000 0000",
  whatsapp: "+86 138 0000 0000",
  address: "Floor 18, Tower B, International Trade Center, Shenzhen, Guangdong, China",
  hours: "Mon–Fri, 9:00–18:00 (GMT+8)",
}

export const services = [
  {
    id: "supplier-sourcing",
    title: "Supplier Sourcing",
    short: "Find the right factory for your product and target price.",
    description:
      "We search our verified supplier network and open markets to shortlist factories that match your product specifications, certifications, and target price — not just whoever shows up first online.",
    points: [
      "Shortlist 3–5 qualified factories per product",
      "Compare pricing, MOQ, lead time, and capacity",
      "Check business licenses and export qualifications",
    ],
    icon: "Search",
    imgId: "svc-sourcing-7a1c",
    titleId: "svc-sourcing-title",
    descId: "svc-sourcing-desc",
  },
  {
    id: "factory-verification",
    title: "Factory Verification & Audit",
    short: "On-site audits so you know who you are really buying from.",
    description:
      "Before you commit, we visit the factory in person to verify it is a real manufacturer, not a trading shell. We document capacity, equipment, workforce, and quality systems with photos and a written report.",
    points: [
      "On-site factory visit and capacity check",
      "Business license and legal status verification",
      "Detailed audit report with photos",
    ],
    icon: "ShieldCheck",
    imgId: "svc-verify-3b9d",
    titleId: "svc-verify-title",
    descId: "svc-verify-desc",
  },
  {
    id: "quality-inspection",
    title: "Quality Control Inspection",
    short: "Independent QC at every stage that matters.",
    description:
      "Our inspectors check your goods during production and before shipment using your checklist and AQL sampling. You receive a clear pass/fail report with defect photos before any container leaves.",
    points: [
      "During-production (DUPRO) and pre-shipment (PSI) inspection",
      "AQL sampling and your custom checklist",
      "Photo-backed pass/fail report within 24 hours",
    ],
    icon: "ClipboardCheck",
    imgId: "svc-qc-5e2f",
    titleId: "svc-qc-title",
    descId: "svc-qc-desc",
  },
  {
    id: "production-follow-up",
    title: "Production Follow-Up",
    short: "We keep your order on schedule and flag delays early.",
    description:
      "We act as your eyes on the ground, tracking production progress, resolving issues with the factory, and sending you regular status updates so there are no surprises near the shipping date.",
    points: [
      "Weekly production status updates",
      "Early warning on delays and capacity issues",
      "Direct coordination with factory management",
    ],
    icon: "Activity",
    imgId: "svc-prod-9c4a",
    titleId: "svc-prod-title",
    descId: "svc-prod-desc",
  },
  {
    id: "shipping-coordination",
    title: "Shipping & Logistics Coordination",
    short: "Consolidated cargo, clear docs, on-time delivery.",
    description:
      "We consolidate goods from multiple suppliers, arrange freight forwarding by sea or air, prepare export documents, and track your shipment to the destination port or warehouse.",
    points: [
      "Cargo consolidation from multiple suppliers",
      "Sea and air freight forwarding",
      "Export documents and shipment tracking",
    ],
    icon: "Ship",
    imgId: "svc-ship-2d8b",
    titleId: "svc-ship-title",
    descId: "svc-ship-desc",
  },
  {
    id: "order-management",
    title: "End-to-End Order Management",
    short: "One team handling your order from quote to delivery.",
    description:
      "From the first inquiry to the final delivery, a dedicated coordinator manages your order, suppliers, inspections, and logistics — so you deal with one accountable contact instead of many.",
    points: [
      "Dedicated order coordinator",
      "Centralized order and document tracking",
      "Single point of contact across suppliers",
    ],
    icon: "ClipboardList",
    imgId: "svc-order-6f1e",
    titleId: "svc-order-title",
    descId: "svc-order-desc",
  },
]

export const processSteps = [
  {
    step: 1,
    title: "Share Your Requirements",
    description:
      "Tell us your product, target price, quantity, and timeline. The more detail you share, the faster we can find the right match.",
    icon: "FileText",
  },
  {
    step: 2,
    title: "Supplier Sourcing & Shortlist",
    description:
      "We search and shortlist qualified factories, then send you a comparison of price, MOQ, lead time, and factory background.",
    icon: "Search",
  },
  {
    step: 3,
    title: "Factory Verification",
    description:
      "We audit the shortlisted factory on-site and send you a verification report with photos before you place any order.",
    icon: "ShieldCheck",
  },
  {
    step: 4,
    title: "Sample & Negotiation",
    description:
      "We arrange samples, negotiate price and terms on your behalf, and confirm the order details and production schedule.",
    icon: "Handshake",
  },
  {
    step: 5,
    title: "Production & QC",
    description:
      "We follow production progress and run independent quality inspections, sending you photo-backed reports at each stage.",
    icon: "ClipboardCheck",
  },
  {
    step: 6,
    title: "Shipping & Delivery",
    description:
      "We consolidate cargo, arrange freight, prepare documents, and track your shipment until it reaches your destination.",
    icon: "Ship",
  },
]

export const productCategories = [
  {
    id: "consumer-electronics",
    name: "Consumer Electronics",
    description:
      "Audio devices, accessories, small appliances, and electronic gadgets from audited factories with the required safety certifications.",
    imgId: "prod-electronics-1a2b",
    titleId: "prod-electronics-title",
    descId: "prod-electronics-desc",
  },
  {
    id: "home-living",
    name: "Home & Living",
    description:
      "Kitchenware, home textiles, furniture, and decor — sourced from manufacturers with stable capacity and consistent finish quality.",
    imgId: "prod-home-3c4d",
    titleId: "prod-home-title",
    descId: "prod-home-desc",
  },
  {
    id: "apparel-textiles",
    name: "Apparel & Textiles",
    description:
      "Clothing, bags, and textile products with size-set samples, fabric testing, and inline QC to protect your brand standards.",
    imgId: "prod-apparel-5e6f",
    titleId: "prod-apparel-title",
    descId: "prod-apparel-desc",
  },
  {
    id: "promotional-gifts",
    name: "Promotional Products & Gifts",
    description:
      "Custom branded merchandise and giveaways with low MOQs, fast sampling, and consistent print or logo quality.",
    imgId: "prod-promo-7g8h",
    titleId: "prod-promo-title",
    descId: "prod-promo-desc",
  },
  {
    id: "hardware-tools",
    name: "Hardware & Tools",
    description:
      "Hand tools, fittings, and hardware items from factories with material testing and dimensional inspection capabilities.",
    imgId: "prod-hardware-9i0j",
    titleId: "prod-hardware-title",
    descId: "prod-hardware-desc",
  },
  {
    id: "beauty-personal-care",
    name: "Beauty & Personal Care",
    description:
      "Cosmetics, grooming, and personal care products sourced with attention to ingredient compliance and packaging quality.",
    imgId: "prod-beauty-1k2l",
    titleId: "prod-beauty-title",
    descId: "prod-beauty-desc",
  },
]

export const problems = [
  {
    title: "Suppliers that disappear after deposit",
    description:
      "We verify factories on-site before you pay, so you deal with a real, legally registered manufacturer — not an unknown online seller.",
    icon: "UserX",
  },
  {
    title: "Quality that doesn't match the sample",
    description:
      "Independent pre-shipment inspection with your checklist catches defects before goods leave the factory, not after they arrive.",
    icon: "AlertTriangle",
  },
  {
    title: "Hidden costs and surprise charges",
    description:
      "We break down the full cost — product, inspection, freight, and documents — upfront, so your landed cost is clear from the start.",
    icon: "Receipt",
  },
  {
    title: "Production delays with no warning",
    description:
      "Regular production follow-up means you hear about delays early, while there is still time to adjust your timeline.",
    icon: "Clock",
  },
  {
    title: "Communication gaps and language barriers",
    description:
      "Your dedicated coordinator speaks the factory's language and yours, translating requirements precisely and following up in writing.",
    icon: "Languages",
  },
  {
    title: "Shipping confusion and missing documents",
    description:
      "We handle consolidation, freight booking, and export paperwork, and track your shipment so nothing falls through the cracks.",
    icon: "PackageX",
  },
]

export const trustPoints = [
  { value: "12+", label: "Years sourcing from China" },
  { value: "800+", label: "Factories verified on-site" },
  { value: "40+", label: "Countries shipped to" },
  { value: "98%", label: "Inspections passed on first PSI" },
]

export const caseStudies = [
  {
    id: "electronics-retailer",
    client: "European Electronics Retailer",
    industry: "Consumer Electronics",
    challenge:
      "Needed a reliable supplier for a private-label audio product but had been burned by a trading company that delivered inconsistent quality.",
    approach:
      "We audited four factories, shortlisted one with in-house testing equipment, ran a pilot order with DUPRO and pre-shipment inspection, and coordinated air freight for the first batch.",
    result:
      "Defect rate dropped from 11% to under 2% across the first three orders, and lead time stabilized at 35 days.",
    imgId: "case-electronics-4m3n",
    titleId: "case-electronics-title",
    descId: "case-electronics-desc",
  },
  {
    id: "home-brand",
    client: "North American Home Brand",
    industry: "Home & Living",
    challenge:
      "Wanted to launch a kitchenware line across multiple suppliers but struggled to keep quality and packaging consistent.",
    approach:
      "We consolidated orders from three factories, applied a unified QC checklist, and managed consolidation and sea freight from a single warehouse.",
    result:
      "Launched 18 SKUs in one season with consistent packaging, cutting logistics cost by roughly 22% through consolidation.",
    imgId: "case-home-6o5p",
    titleId: "case-home-title",
    descId: "case-home-desc",
  },
  {
    id: "promo-campaign",
    client: "Global Marketing Agency",
    industry: "Promotional Products",
    challenge:
      "Needed 50,000 branded items delivered to three countries within eight weeks for a product launch campaign.",
    approach:
      "We split production across two verified factories, ran inline QC at both sites, and coordinated split shipments to all three destinations.",
    result:
      "All 50,000 units delivered on time across three countries with zero rejected batches at reception.",
    imgId: "case-promo-8q7r",
    titleId: "case-promo-title",
    descId: "case-promo-desc",
  },
]

export const faqs = [
  {
    q: "What does a China sourcing agent actually do?",
    a: "A sourcing agent acts as your local team in China. We find qualified suppliers, verify factories on-site, run quality inspections, follow production, and coordinate shipping — so you can buy from China without needing to travel or manage factories directly.",
  },
  {
    q: "How do you charge for your services?",
    a: "We work on a transparent model that may include a sourcing fee, an inspection fee per visit, and a handling fee on shipments. The exact structure depends on your product and order volume. You receive a clear quote before any work begins, with no hidden commissions from suppliers.",
  },
  {
    q: "Do I need to travel to China to work with you?",
    a: "No. Most of our clients manage their orders remotely. We handle factory visits, inspections, and coordination on the ground and send you photo-backed reports so you can make decisions from anywhere.",
  },
  {
    q: "What is the minimum order quantity (MOQ)?",
    a: "MOQ depends on the product and factory. We help you find factories whose MOQ fits your budget, and where possible we negotiate lower MOQs for first orders or split production across suppliers.",
  },
  {
    q: "How long does the sourcing process take?",
    a: "Sourcing and shortlisting usually takes 5–10 business days. From confirmed order to shipment, a typical first order takes 30–60 days depending on the product, quantity, and factory capacity.",
  },
  {
    q: "What happens if a quality inspection fails?",
    a: "If an inspection fails, we send you the defect report with photos and work with the factory on rework or replacement. We re-inspect before approving shipment, so defective goods do not leave the factory.",
  },
  {
    q: "Can you handle shipping to my country?",
    a: "Yes. We arrange sea and air freight, consolidate cargo from multiple suppliers, prepare export documents, and track the shipment to your destination port or warehouse in over 40 countries.",
  },
  {
    q: "How do I get started?",
    a: "Submit a free sourcing quote request with your product details. We review it and come back to you within one business day with next steps and an estimated quote.",
  },
]

export const blogPosts = [
  {
    id: "verify-supplier-not-trading-company",
    title: "How to Verify a Real Manufacturer vs. a Trading Company in China",
    excerpt:
      "Trading companies aren't always bad, but buying from one when you expected a factory can cost you. Here is how we tell the difference on-site.",
    date: "2026-05-18",
    readTime: "6 min read",
    category: "Supplier Verification",
    imgId: "blog-verify-9s8t",
    titleId: "blog-verify-title",
    descId: "blog-verify-desc",
  },
  {
    id: "pre-shipment-inspection-checklist",
    title: "What a Pre-Shipment Inspection Checklist Should Actually Include",
    excerpt:
      "A good PSI checklist is the difference between catching defects at the factory and discovering them at your warehouse. Here is what we include.",
    date: "2026-05-02",
    readTime: "5 min read",
    category: "Quality Control",
    imgId: "blog-psi-1u0v",
    titleId: "blog-psi-title",
    descId: "blog-psi-desc",
  },
  {
    id: "reduce-landed-cost-consolidation",
    title: "Reducing Landed Cost: When Cargo Consolidation Actually Pays Off",
    excerpt:
      "Consolidation sounds smart, but it only saves money under the right conditions. We break down when it makes sense and when it doesn't.",
    date: "2026-04-15",
    readTime: "7 min read",
    category: "Shipping & Logistics",
    imgId: "blog-consol-2w3x",
    titleId: "blog-consol-title",
    descId: "blog-consol-desc",
  },
  {
    id: "negotiate-moq-first-order",
    title: "Negotiating MOQ on a First Order Without Burning the Relationship",
    excerpt:
      "Factories set MOQs for a reason, but there is room to negotiate. Here is how we approach MOQ conversations that keep both sides happy.",
    date: "2026-03-28",
    readTime: "5 min read",
    category: "Sourcing Strategy",
    imgId: "blog-moq-4y5z",
    titleId: "blog-moq-title",
    descId: "blog-moq-desc",
  },
]

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "How It Works", to: "/how-it-works" },
  { label: "Products We Source", to: "/products" },
  { label: "Case Studies", to: "/case-studies" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" },
]
