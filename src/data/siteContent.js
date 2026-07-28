export const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'Products We Source', href: '/products-we-source' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
]

export const services = [
  {
    id: 'supplier-search',
    title: 'Supplier Search & Shortlisting',
    description: 'We identify potential China suppliers, compare capabilities, and help you request clear quotations from suitable factories.',
  },
  {
    id: 'factory-verification',
    title: 'Factory Verification',
    description: 'We check business credentials, production capacity, product scope, and on-site conditions before you make a sourcing decision.',
  },
  {
    id: 'price-negotiation',
    title: 'Quotation Review & Negotiation',
    description: 'We help clarify specifications, payment terms, packaging, lead times, and price drivers so quotes are easier to compare.',
  },
  {
    id: 'quality-control',
    title: 'Quality Inspection',
    description: 'We coordinate pre-production, during-production, and pre-shipment checks based on your requirements and inspection checklist.',
  },
  {
    id: 'production-follow-up',
    title: 'Production Follow-up',
    description: 'We track key milestones, keep communication moving, and flag delays or specification questions early.',
  },
  {
    id: 'shipping-coordination',
    title: 'Shipping Coordination',
    description: 'We coordinate packaging, documents, consolidation, and handover to your nominated forwarder or logistics partner.',
  },
]

export const processSteps = [
  {
    id: 'requirements',
    eyebrow: 'Step 01',
    title: 'Share your sourcing requirements',
    description: 'Send drawings, samples, product links, target quantity, quality requirements, destination, and expected timeline.',
  },
  {
    id: 'supplier-mapping',
    eyebrow: 'Step 02',
    title: 'We map suppliers and compare options',
    description: 'Our team screens relevant factories and trading companies, then summarizes pricing, capability, lead time, and risks.',
  },
  {
    id: 'verification-sampling',
    eyebrow: 'Step 03',
    title: 'Verify, sample, and confirm details',
    description: 'We help verify suppliers, coordinate samples, clarify specifications, and prepare a practical purchase plan.',
  },
  {
    id: 'production-qc',
    eyebrow: 'Step 04',
    title: 'Follow production and inspect quality',
    description: 'We monitor progress, arrange inspections, document findings, and coordinate corrective actions when needed.',
  },
  {
    id: 'shipping',
    eyebrow: 'Step 05',
    title: 'Coordinate shipment handover',
    description: 'We align packing, labels, documents, and shipping handover so your goods move from factory to destination smoothly.',
  },
]

export const productCategories = [
  {
    id: 'industrial-parts',
    title: 'Industrial Parts & Components',
    description: 'Machined parts, metal fabrication, plastic components, hardware, fasteners, and assembly parts.',
    imageId: 'product-industrial-parts-31b7a9',
    titleId: 'product-industrial-parts-title',
    descId: 'product-industrial-parts-desc',
  },
  {
    id: 'consumer-goods',
    title: 'Consumer Goods',
    description: 'Home products, small appliances, packaging, gifts, lifestyle goods, and private-label product lines.',
    imageId: 'product-consumer-goods-44d2c8',
    titleId: 'product-consumer-goods-title',
    descId: 'product-consumer-goods-desc',
  },
  {
    id: 'electronics-accessories',
    title: 'Electronics & Accessories',
    description: 'Electronic accessories, cables, LED products, smart devices, chargers, and related components.',
    imageId: 'product-electronics-accessories-72f4d1',
    titleId: 'product-electronics-accessories-title',
    descId: 'product-electronics-accessories-desc',
  },
  {
    id: 'packaging-printing',
    title: 'Packaging & Printing',
    description: 'Retail packaging, cartons, labels, instruction manuals, inserts, and customized printed materials.',
    imageId: 'product-packaging-printing-86c5e2',
    titleId: 'product-packaging-printing-title',
    descId: 'product-packaging-printing-desc',
  },
]

export const problemsSolved = [
  'Unclear supplier capability or trading company identity',
  'Difficult price comparison because specifications are not aligned',
  'Delayed production updates and slow factory communication',
  'Quality issues discovered too late before shipment',
  'Packaging, labeling, or documentation gaps before export',
  'Need to consolidate multiple suppliers in one shipment',
]

export const trustPoints = [
  {
    value: 'Local China execution',
    label: 'Factory visits, supplier communication, and production follow-up handled close to the source.',
  },
  {
    value: 'Clear reporting',
    label: 'Practical summaries, photos, inspection notes, and next-step recommendations for overseas buyers.',
  },
  {
    value: 'Buyer-focused process',
    label: 'Support designed around your specifications, timeline, and risk tolerance, not generic supplier lists.',
  },
]

export const caseStudies = [
  {
    id: 'industrial-assembly',
    title: 'Industrial assembly parts for an EU equipment brand',
    challenge: 'The buyer needed comparable quotes from factories that could meet tolerances and packaging requirements.',
    outcome: 'SSourcing China shortlisted qualified suppliers, coordinated samples, and helped prepare an inspection checklist before production.',
    metric: '3 supplier options compared',
    imageId: 'case-industrial-assembly-54a8e1',
    titleId: 'case-industrial-assembly-title',
    descId: 'case-industrial-assembly-desc',
  },
  {
    id: 'retail-packaging',
    title: 'Custom retail packaging for a North American importer',
    challenge: 'Artwork, paper material, color consistency, and carton strength needed careful confirmation before mass production.',
    outcome: 'We coordinated print proofing, pre-production confirmation, and pre-shipment checks with clear photo reporting.',
    metric: 'Packaging issues found before shipment',
    imageId: 'case-retail-packaging-65c9f2',
    titleId: 'case-retail-packaging-title',
    descId: 'case-retail-packaging-desc',
  },
  {
    id: 'multi-supplier-shipment',
    title: 'Multi-supplier shipment for an online retailer',
    challenge: 'The buyer ordered from several factories and needed one coordinated export handover.',
    outcome: 'We followed order status, checked labels and cartons, and coordinated consolidation with the forwarder.',
    metric: '4 factories coordinated',
    imageId: 'case-multi-supplier-shipment-18d3b6',
    titleId: 'case-multi-supplier-shipment-title',
    descId: 'case-multi-supplier-shipment-desc',
  },
]

export const faqs = [
  {
    question: 'Can you help if I only have a product idea or link?',
    answer: 'Yes. A product link, sketch, sample photos, or basic specification is enough to start a sourcing discussion. More detail helps us compare suppliers more accurately.',
  },
  {
    question: 'Do you work with small orders?',
    answer: 'We can review small orders, trial orders, and regular production orders. The best approach depends on product type, minimum order quantity, customization, and inspection needs.',
  },
  {
    question: 'Can you inspect goods before shipment?',
    answer: 'Yes. We can coordinate quality checks using your checklist, product specifications, approved sample, and packaging requirements.',
  },
  {
    question: 'Do you replace my freight forwarder?',
    answer: 'Not necessarily. We can coordinate with your nominated forwarder or help prepare goods and documents for export handover.',
  },
]

export const blogPosts = [
  {
    id: 'verify-china-factory',
    title: 'How to Verify a China Factory Before Placing an Order',
    excerpt: 'A practical checklist for overseas buyers reviewing licenses, capacity, product scope, and on-site conditions.',
    category: 'Supplier Verification',
    readTime: '6 min read',
  },
  {
    id: 'qc-before-shipment',
    title: 'What to Check During a Pre-shipment Inspection',
    excerpt: 'Key points for product appearance, dimensions, packaging, labeling, quantity, and export carton condition.',
    category: 'Quality Control',
    readTime: '5 min read',
  },
  {
    id: 'compare-supplier-quotes',
    title: 'Why China Supplier Quotes Can Be Hard to Compare',
    excerpt: 'Specifications, materials, packaging, testing standards, payment terms, and lead times all affect the final quote.',
    category: 'Sourcing Strategy',
    readTime: '4 min read',
  },
]
