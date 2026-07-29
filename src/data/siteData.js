import {
  BadgeCheck,
  Boxes,
  ClipboardCheck,
  Factory,
  FileSearch,
  Globe2,
  PackageCheck,
  Route,
  SearchCheck,
  ShieldCheck,
  Ship,
  Truck,
} from 'lucide-react'

export const navigation = [
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
    icon: SearchCheck,
    title: 'Supplier Sourcing',
    text: 'Shortlist suitable manufacturers, trading companies, or specialist workshops based on your product requirements, market, and order volume.',
  },
  {
    icon: FileSearch,
    title: 'Supplier Verification',
    text: 'Check business licenses, factory capabilities, export experience, certificates, and key risks before you commit to samples or deposits.',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    text: 'Arrange pre-production checks, during-production inspections, and pre-shipment inspections with practical reporting and photo evidence.',
  },
  {
    icon: Factory,
    title: 'Production Follow-Up',
    text: 'Track production schedules, sample approvals, packaging details, and corrective actions so issues are handled earlier.',
  },
  {
    icon: Ship,
    title: 'Shipping Coordination',
    text: 'Coordinate cartons, labels, documents, freight partners, and shipment handover for sea, air, courier, or Amazon FBA delivery.',
  },
  {
    icon: PackageCheck,
    title: 'Sample & Order Support',
    text: 'Manage samples, compare quotations, clarify specifications, and keep supplier communication organized from RFQ to delivery.',
  },
]

export const processSteps = [
  {
    number: '01',
    title: 'Share requirements',
    text: 'Tell us the product, specifications, target market, quantity, budget range, and destination. Clear input helps us filter suppliers faster.',
  },
  {
    number: '02',
    title: 'Supplier search and screening',
    text: 'We research suitable suppliers, compare capabilities, ask practical questions, and identify options worth deeper verification.',
  },
  {
    number: '03',
    title: 'Quotation and sample follow-up',
    text: 'We coordinate quotations, technical details, sample production, packaging, and comments so you can make a clear buying decision.',
  },
  {
    number: '04',
    title: 'Production and QC control',
    text: 'After order confirmation, we follow key milestones and arrange inspections to reduce quality, timing, and communication risks.',
  },
  {
    number: '05',
    title: 'Shipping handover',
    text: 'We help coordinate cartons, marks, documents, booking details, and shipment handover with your forwarder or our logistics contacts.',
  },
]

export const productCategories = [
  'Consumer electronics accessories',
  'Home and kitchen products',
  'Packaging and printing',
  'Tools, hardware, and industrial parts',
  'Beauty, wellness, and personal care',
  'Pet products and outdoor goods',
  'Promotional products and gifts',
  'Textiles, bags, and apparel accessories',
  'Custom plastic, metal, and silicone products',
]

export const problems = [
  'Unclear supplier ownership or trading company confusion',
  'Different quotations with unclear specifications',
  'Factory communication delays and missing details',
  'Samples that look different from mass production',
  'Late production updates and shipment pressure',
  'Packaging, labels, and documentation mistakes',
]

export const trustPoints = [
  { icon: ShieldCheck, title: 'Risk-first sourcing', text: 'We look beyond price and focus on capability, communication, quality control, and realistic lead times.' },
  { icon: Globe2, title: 'Built for overseas buyers', text: 'Clear English communication, structured updates, and practical explanations for remote buying decisions.' },
  { icon: BadgeCheck, title: 'Transparent workflow', text: 'You receive supplier comparisons, checklists, inspection notes, and next-step recommendations.' },
  { icon: Truck, title: 'Order-to-shipment support', text: 'Support continues after supplier selection, covering production follow-up, QC, and logistics coordination.' },
]

export const caseStudies = [
  {
    title: 'Homeware importer needed alternate suppliers',
    industry: 'Home & Kitchen',
    challenge: 'A buyer needed replacement suppliers after unstable pricing and inconsistent packaging quality.',
    solution: 'We screened factories in two regions, checked export experience, compared packaging samples, and arranged a pre-shipment inspection.',
    result: 'The buyer selected a more suitable factory and reduced packaging defects before shipment.',
  },
  {
    title: 'Electronics accessory brand required QC support',
    industry: 'Consumer Accessories',
    challenge: 'The client had approved samples but needed confidence that bulk production matched the agreed specifications.',
    solution: 'We confirmed key checkpoints, followed production timing, and organized inspection against appearance, function, labeling, and carton requirements.',
    result: 'Several issues were corrected before final packing, avoiding rework after arrival.',
  },
  {
    title: 'Amazon seller needed FBA shipment coordination',
    industry: 'E-commerce',
    challenge: 'The buyer sourced products from multiple suppliers but needed carton marks, labels, and shipment timing aligned.',
    solution: 'We collected packing data, coordinated label requirements, checked cartons, and worked with the forwarder on handover timing.',
    result: 'The shipment moved with fewer document and labeling questions from the forwarder.',
  },
]

export const faqs = [
  { q: 'Do you work with small and medium-size buyers?', a: 'Yes. We can support smaller trial orders as well as recurring orders, as long as the product and expected quantity are realistic for factory sourcing.' },
  { q: 'Can you verify whether a supplier is a real factory?', a: 'We can check business information, factory photos, certificates, product scope, communication details, and arrange on-site verification when needed.' },
  { q: 'Do you handle quality inspections?', a: 'Yes. We can coordinate inspection before production, during production, or before shipment depending on the risk level and order status.' },
  { q: 'Can you source custom products?', a: 'Yes. For custom products, clear drawings, materials, target price, sample references, and order volume help us identify suitable factories.' },
  { q: 'Do you replace my freight forwarder?', a: 'Not necessarily. We can work with your appointed forwarder or help coordinate with freight partners when you need shipping options.' },
]

export const blogPosts = [
  {
    title: 'How to verify a Chinese supplier before placing an order',
    excerpt: 'A practical checklist covering licenses, product scope, certificates, samples, factory capacity, and warning signs.',
    tag: 'Supplier Verification',
  },
  {
    title: 'What to include in a sourcing RFQ',
    excerpt: 'Clear RFQs help factories quote accurately. Include specifications, packaging, quantities, target market, and compliance needs.',
    tag: 'Sourcing Basics',
  },
  {
    title: 'Why pre-shipment inspection matters for overseas buyers',
    excerpt: 'Inspection cannot solve every issue, but it helps catch visible defects, packing errors, quantity problems, and labeling mistakes.',
    tag: 'Quality Control',
  },
]

export const heroStats = [
  { value: 'Supplier', label: 'screening and comparison' },
  { value: 'Factory', label: 'verification support' },
  { value: 'QC', label: 'inspection coordination' },
]

export const serviceOptions = [
  { value: 'supplier_sourcing', label: 'Supplier sourcing' },
  { value: 'factory_verification', label: 'Factory verification' },
  { value: 'sample_follow_up', label: 'Sample follow-up' },
  { value: 'price_negotiation', label: 'Price negotiation' },
  { value: 'quality_inspection', label: 'Quality inspection' },
  { value: 'production_tracking', label: 'Production tracking' },
  { value: 'shipping_coordination', label: 'Shipping coordination' },
]

export const iconMap = { Boxes, Route }
