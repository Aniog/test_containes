export const PLACEHOLDER_SVG =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "How It Works", to: "/how-it-works" },
  { label: "Products We Source", to: "/products" },
  { label: "Case Studies", to: "/case-studies" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" },
]

export const services = [
  {
    id: "supplier-sourcing",
    title: "Supplier Sourcing",
    titleId: "service-supplier-sourcing-title",
    description:
      "We identify and shortlist manufacturers that match your product specs, budget, and volume requirements.",
    descId: "service-supplier-sourcing-desc",
    icon: "Search",
    imgId: "service-supplier-sourcing-7a3b2c",
  },
  {
    id: "factory-verification",
    title: "Factory Verification",
    titleId: "service-factory-verification-title",
    description:
      "On-site audits and documentation checks to confirm legitimacy, capacity, certifications, and export experience.",
    descId: "service-factory-verification-desc",
    icon: "ClipboardCheck",
    imgId: "service-factory-verification-9c1d4e",
  },
  {
    id: "quality-inspection",
    title: "Quality Inspection",
    titleId: "service-quality-inspection-title",
    description:
      "Pre-shipment, during-production, and pre-production inspections to catch defects before goods leave China.",
    descId: "service-quality-inspection-desc",
    icon: "ShieldCheck",
    imgId: "service-quality-inspection-2f8a1b",
  },
  {
    id: "production-monitoring",
    title: "Production Monitoring",
    titleId: "service-production-monitoring-title",
    description:
      "Weekly updates, milestone tracking, and timeline enforcement so your order stays on schedule.",
    descId: "service-production-monitoring-desc",
    icon: "TrendingUp",
    imgId: "service-production-monitoring-6e5d9a",
  },
  {
    id: "shipping-coordination",
    title: "Shipping Coordination",
    titleId: "service-shipping-coordination-title",
    description:
      "We coordinate freight forwarding, customs docs, and delivery to simplify your supply chain.",
    descId: "service-shipping-coordination-desc",
    icon: "Ship",
    imgId: "service-shipping-coordination-4b7c8d",
  },
  {
    id: "custom-packaging",
    title: "Custom Packaging",
    titleId: "service-custom-packaging-title",
    description:
      "Branded packaging, labeling, and kitting support to make your product retail-ready on arrival.",
    descId: "service-custom-packaging-desc",
    icon: "Package",
    imgId: "service-custom-packaging-1e2f3a",
  },
]

export const sourcingProcess = [
  {
    step: "01",
    title: "Tell us your product",
    description:
      "Share specs, target price, quantity, and destination. We clarify requirements before sourcing begins.",
  },
  {
    step: "02",
    title: "Source & verify suppliers",
    description:
      "We shortlist factories, check licenses, and conduct audits to filter out risky vendors.",
  },
  {
    step: "03",
    title: "Sample & negotiate",
    description:
      "Compare samples, negotiate terms, and lock in pricing, payment, and delivery conditions.",
  },
  {
    step: "04",
    title: "Production & QC",
    description:
      "Monitor manufacturing and perform inspections to keep quality consistent and on schedule.",
  },
  {
    step: "05",
    title: "Shipping & delivery",
    description:
      "Arrange consolidation, documentation, and freight so your goods arrive as expected.",
  },
]

export const productCategories = [
  {
    id: "electronics",
    title: "Electronics & Components",
    description: "Consumer electronics, cables, PCBA, batteries, and accessories.",
    imgId: "products-electronics-8d2e1f",
    titleId: "cat-electronics-title",
    descId: "cat-electronics-desc",
  },
  {
    id: "machinery",
    title: "Machinery & Equipment",
    description: "Industrial machines, tools, spare parts, and automation components.",
    imgId: "products-machinery-3c5b7a",
    titleId: "cat-machinery-title",
    descId: "cat-machinery-desc",
  },
  {
    id: "apparel",
    title: "Apparel & Textiles",
    description: "Garments, fabrics, bags, footwear, and fashion accessories.",
    imgId: "products-apparel-5a9e4d",
    titleId: "cat-apparel-title",
    descId: "cat-apparel-desc",
  },
  {
    id: "home-garden",
    title: "Home & Garden",
    description: "Furniture, lighting, kitchenware, decor, and outdoor products.",
    imgId: "products-home-garden-1b6c9e",
    titleId: "cat-home-garden-title",
    descId: "cat-home-garden-desc",
  },
  {
    id: "industrial",
    title: "Industrial Parts",
    description: "Metal parts, plastics, fasteners, hardware, and OEM components.",
    imgId: "products-industrial-7f4a2b",
    titleId: "cat-industrial-title",
    descId: "cat-industrial-desc",
  },
  {
    id: "consumer-goods",
    title: "Consumer Goods",
    description: "Toys, sports gear, beauty products, promotional items, and more.",
    imgId: "products-consumer-goods-6e3d8c",
    titleId: "cat-consumer-goods-title",
    descId: "cat-consumer-goods-desc",
  },
]

export const problemsWeSolve = [
  {
    title: "Unreliable suppliers",
    description:
      "We verify factory credentials, visit facilities, and check export history before you commit.",
  },
  {
    title: "Quality surprises",
    description:
      "Inspections at multiple production stages catch issues before goods ship.",
  },
  {
    title: "Communication gaps",
    description:
      "Bilingual project managers bridge language and time-zone barriers.",
  },
  {
    title: "Hidden costs",
    description:
      "Clear quotes itemize product, packaging, and logistics costs upfront.",
  },
  {
    title: "Shipping delays",
    description:
      "We track production and book freight early to reduce last-minute delays.",
  },
  {
    title: "IP & compliance risks",
    description:
      "Documentation checks and NDA support help protect your product and brand.",
  },
]

export const trustPoints = [
  { value: "12+", label: "Years in sourcing" },
  { value: "800+", label: "Factories audited" },
  { value: "45+", label: "Countries shipped" },
  { value: "30+", label: "On-ground staff" },
]

export const caseStudies = [
  {
    id: "electronics-retailer",
    client: "US Electronics Retailer",
    industry: "Consumer Electronics",
    title: "Cutting defect rates by 60%",
    description:
      "We re-sourced a cable assembly to a vetted factory, introduced inline QC, and reduced defect rates from 8% to under 3%.",
    result: "Defect rate reduced to 2.8%",
    imgId: "case-electronics-retailer-4a7b1c",
    titleId: "case-electronics-title",
    descId: "case-electronics-desc",
  },
  {
    id: "fitness-brand",
    client: "European Fitness Brand",
    industry: "Sports & Fitness",
    title: "Launching a private-label product line",
    description:
      "Sourced custom resistance bands and packaging, coordinated samples, and delivered the first container within 10 weeks.",
    result: "10-week first delivery",
    imgId: "case-fitness-brand-2d9e5f",
    titleId: "case-fitness-title",
    descId: "case-fitness-desc",
  },
  {
    id: "industrial-distributor",
    client: "Industrial Distributor",
    industry: "Machinery Parts",
    title: "Consolidating fragmented suppliers",
    description:
      "Combined purchases across six product families under two audited suppliers, improving pricing and lead time stability.",
    result: "18% cost improvement",
    imgId: "case-industrial-distributor-8c3a6b",
    titleId: "case-industrial-title",
    descId: "case-industrial-desc",
  },
]

export const faqs = [
  {
    id: "what-is-sourcing-agent",
    question: "What does a China sourcing agent do?",
    answer:
      "A sourcing agent helps overseas buyers find suitable Chinese suppliers, verify factories, negotiate terms, manage quality inspections, and coordinate shipping.",
  },
  {
    id: "how-much-cost",
    question: "How much do your services cost?",
    answer:
      "We typically charge a transparent service fee based on project complexity and order value. You receive a clear quote before any work begins.",
  },
  {
    id: "minimum-order",
    question: "Is there a minimum order quantity?",
    answer:
      "No strict MOQ. We support both small test orders and large recurring programs, matching you with factories that fit your volume.",
  },
  {
    id: "factory-verification",
    question: "How do you verify factories?",
    answer:
      "We review business licenses, certifications, and export records, and conduct on-site or virtual audits to assess capacity and quality systems.",
  },
  {
    id: "quality-inspection",
    question: "When do you perform quality inspections?",
    answer:
      "We offer pre-production, during-production, pre-shipment, and container-loading inspections depending on your risk level.",
  },
  {
    id: "shipping",
    question: "Can you handle shipping to my country?",
    answer:
      "Yes. We coordinate sea, air, and rail freight, prepare export documents, and work with forwarders experienced in your destination market.",
  },
]

export const blogPosts = [
  {
    id: "how-to-verify-chinese-supplier",
    title: "How to Verify a Chinese Supplier in 5 Steps",
    excerpt:
      "A practical checklist for checking licenses, certifications, factory capacity, and export history before placing an order.",
    date: "2026-07-15",
    category: "Sourcing Tips",
    imgId: "blog-verify-supplier-1a2b3c",
    titleId: "blog-verify-title",
    descId: "blog-verify-desc",
  },
  {
    id: "incoterms-explained",
    title: "Incoterms Explained for First-Time Importers",
    excerpt:
      "Understand EXW, FOB, CIF, and DDP so you can compare quotes accurately and avoid unexpected logistics costs.",
    date: "2026-07-08",
    category: "Logistics",
    imgId: "blog-incoterms-4d5e6f",
    titleId: "blog-incoterms-title",
    descId: "blog-incoterms-desc",
  },
  {
    id: "qc-checklist",
    title: "A Pre-Shipment QC Checklist That Actually Works",
    excerpt:
      "What to inspect, how to sample, and which standards to reference to reduce defect claims and returns.",
    date: "2026-06-28",
    category: "Quality Control",
    imgId: "blog-qc-checklist-7g8h9i",
    titleId: "blog-qc-title",
    descId: "blog-qc-desc",
  },
]
