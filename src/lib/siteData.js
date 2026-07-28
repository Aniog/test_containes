export const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'How It Works', path: '/how-it-works' },
  { label: 'Products We Source', path: '/products' },
  { label: 'Case Studies', path: '/case-studies' },
  { label: 'Blog', path: '/blog' },
  { label: 'Contact', path: '/contact' },
]

export const services = [
  {
    title: 'Supplier Search',
    description: 'Shortlist manufacturers that match your product, compliance needs, target price, and order quantity.',
  },
  {
    title: 'Factory Verification',
    description: 'Check business licenses, production capability, export experience, certifications, and factory conditions.',
  },
  {
    title: 'Price & Sample Coordination',
    description: 'Compare quotations, clarify specifications, arrange samples, and help buyers make practical sourcing decisions.',
  },
  {
    title: 'Quality Inspection',
    description: 'Arrange pre-production, during-production, and pre-shipment inspections with clear reporting.',
  },
  {
    title: 'Production Follow-up',
    description: 'Monitor timelines, packaging, labeling, and key milestones to reduce surprises before shipment.',
  },
  {
    title: 'Shipping Coordination',
    description: 'Coordinate export documents, consolidation, forwarder communication, and delivery schedules.',
  },
]

export const processSteps = [
  { step: '01', title: 'Send your inquiry', text: 'Share product details, photos, drawings, target market, quantity, and expected delivery timeline.' },
  { step: '02', title: 'Clarify requirements', text: 'We confirm specifications, quality standards, packaging needs, compliance points, and sourcing priorities.' },
  { step: '03', title: 'Find and screen suppliers', text: 'Potential suppliers are compared by capability, communication, pricing structure, and operational fit.' },
  { step: '04', title: 'Samples and negotiation', text: 'We coordinate samples, compare quotes, and support practical negotiation based on real production factors.' },
  { step: '05', title: 'Production and QC', text: 'After order placement, we follow production progress and arrange inspection before goods leave the factory.' },
  { step: '06', title: 'Shipment handover', text: 'We coordinate packing, documents, consolidation, and communication with your freight partner or our network.' },
]

export const productCategories = [
  {
    id: 'industrial-components',
    title: 'Industrial Components',
    description: 'Metal parts, plastic components, tooling, CNC items, and custom assemblies for business buyers.',
    titleId: 'product-industrial-components-title',
    descId: 'product-industrial-components-desc',
    imgId: 'product-industrial-components-8b41f2',
  },
  {
    id: 'consumer-goods',
    title: 'Consumer Goods',
    description: 'Home goods, gifts, kitchen items, packaging, and retail-ready products with practical QC checkpoints.',
    titleId: 'product-consumer-goods-title',
    descId: 'product-consumer-goods-desc',
    imgId: 'product-consumer-goods-31ac59',
  },
  {
    id: 'electronics-accessories',
    title: 'Electronics & Accessories',
    description: 'Accessories, cables, chargers, smart device add-ons, and supplier checks for export-ready production.',
    titleId: 'product-electronics-accessories-title',
    descId: 'product-electronics-accessories-desc',
    imgId: 'product-electronics-accessories-c7d260',
  },
  {
    id: 'packaging-private-label',
    title: 'Packaging & Private Label',
    description: 'Boxes, labels, inserts, branded packaging, and supplier coordination for market-ready presentation.',
    titleId: 'product-packaging-private-label-title',
    descId: 'product-packaging-private-label-desc',
    imgId: 'product-packaging-private-label-5f904e',
  },
]

export const problems = [
  'Unclear supplier identity or trading company risk',
  'Poor communication across time zones and languages',
  'Samples that differ from mass production',
  'Late production updates and missed shipping windows',
  'Inconsistent packaging, labeling, or documentation',
  'Difficulty comparing quotes with different assumptions',
]

export const trustPoints = [
  'China-based team with supplier communication experience',
  'Factory checks before buyers commit significant budget',
  'Structured QC reporting for practical decisions',
  'Transparent milestones from inquiry to shipment',
  'Suitable for importers, Amazon sellers, wholesalers, and brands',
]

export const caseStudies = [
  {
    id: 'custom-packaging',
    title: 'Packaging supplier verification for a European brand',
    result: 'Shortlisted three factories, checked export documents, and arranged pre-shipment inspection before launch stock shipped.',
    detail: 'The buyer needed consistent color, barcode placement, and retail packaging quality across multiple SKUs.',
    titleId: 'case-custom-packaging-title',
    descId: 'case-custom-packaging-desc',
    imgId: 'case-custom-packaging-42fe1a',
  },
  {
    id: 'metal-components',
    title: 'Industrial component sourcing for a North American importer',
    result: 'Compared machining capability, sample tolerance feedback, and production lead times before order confirmation.',
    detail: 'The project required careful drawing review, sample coordination, and realistic production scheduling.',
    titleId: 'case-metal-components-title',
    descId: 'case-metal-components-desc',
    imgId: 'case-metal-components-771b3c',
  },
  {
    id: 'home-goods',
    title: 'Home goods production follow-up for an online retailer',
    result: 'Monitored packaging revisions, carton marks, production photos, and final inspection timing before consolidation.',
    detail: 'The buyer needed better visibility during production and fewer surprises close to shipment.',
    titleId: 'case-home-goods-title',
    descId: 'case-home-goods-desc',
    imgId: 'case-home-goods-91d84b',
  },
]

export const faqs = [
  {
    question: 'Do you only work with factories?',
    answer: 'We can work with factories, qualified trading companies, or specialist suppliers when they are the right fit. The key is transparency about who is producing or controlling the goods.',
  },
  {
    question: 'Can you help if I already have a supplier?',
    answer: 'Yes. We can verify an existing supplier, follow production, arrange inspection, or help clarify specifications before a new order.',
  },
  {
    question: 'What information should I send for a quote?',
    answer: 'Product photos, drawings, materials, dimensions, target quantity, packaging needs, destination country, and any required certifications are helpful.',
  },
  {
    question: 'Do you guarantee the lowest price?',
    answer: 'No. We focus on reliable supplier fit, realistic pricing, and reducing sourcing risks. Very low pricing can create quality or delivery problems.',
  },
]

export const blogPosts = [
  {
    title: 'How to verify a Chinese supplier before placing an order',
    summary: 'A practical checklist covering business licenses, factory capability, references, samples, and red flags.',
    category: 'Supplier Verification',
  },
  {
    title: 'When should you arrange a pre-shipment inspection?',
    summary: 'Understand inspection timing, sample approval, AQL checks, packaging review, and decision points.',
    category: 'Quality Control',
  },
  {
    title: 'Why quotations from different factories are hard to compare',
    summary: 'Learn how materials, packaging, tooling, payment terms, and quality standards affect quoted prices.',
    category: 'Sourcing Strategy',
  },
]
