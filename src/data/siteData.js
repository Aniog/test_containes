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
  Users,
  Wrench,
} from 'lucide-react'

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
    title: 'Supplier Search & Shortlisting',
    description: 'Identify factories and trading companies that match your product, MOQ, compliance needs, export experience, and target market.',
    icon: SearchCheck,
  },
  {
    title: 'Supplier Verification',
    description: 'Review business licenses, factory capabilities, certificates, production lines, communication quality, and basic risk signals before you commit.',
    icon: ShieldCheck,
  },
  {
    title: 'Factory Audit Coordination',
    description: 'Arrange on-site checks for facilities, production capacity, quality systems, sample rooms, warehouse conditions, and export documentation.',
    icon: Factory,
  },
  {
    title: 'Quality Control Inspection',
    description: 'Coordinate pre-production, during-production, pre-shipment, and loading checks with practical inspection points for your product category.',
    icon: ClipboardCheck,
  },
  {
    title: 'Production Follow-up',
    description: 'Track order milestones, sample approvals, packaging details, lead times, and issue lists so overseas buyers stay informed.',
    icon: Route,
  },
  {
    title: 'Shipping Coordination',
    description: 'Support carton details, export documents, freight forwarder communication, consolidation, and handover from factory to shipment.',
    icon: Ship,
  },
]

export const processSteps = [
  {
    step: '01',
    title: 'Share your sourcing request',
    description: 'Send product specifications, target price range, order quantity, quality expectations, destination market, and timeline.',
  },
  {
    step: '02',
    title: 'Supplier research and comparison',
    description: 'We compare suitable suppliers by capability, communication, export history, certificate fit, price logic, and potential risks.',
  },
  {
    step: '03',
    title: 'Samples, negotiation, and verification',
    description: 'Shortlisted suppliers are checked further while samples, quotation details, payment terms, packaging, and timelines are clarified.',
  },
  {
    step: '04',
    title: 'Order follow-up and quality checks',
    description: 'After supplier selection, production is tracked and QC checkpoints are coordinated before shipment release.',
  },
  {
    step: '05',
    title: 'Shipping handover and documentation',
    description: 'We help align carton data, booking details, inspection reports, photos, and documents for a smoother export handover.',
  },
]

export const productCategories = [
  {
    id: 'consumer-electronics',
    title: 'Consumer Electronics',
    description: 'Accessories, smart devices, chargers, cables, lighting, and small electronic products requiring supplier screening and safety awareness.',
    imgId: 'product-consumer-electronics-72d1b9',
    titleId: 'product-consumer-electronics-title',
    descId: 'product-consumer-electronics-desc',
  },
  {
    id: 'home-and-kitchen',
    title: 'Home & Kitchen Products',
    description: 'Housewares, storage, cookware, cleaning items, bathroom accessories, and private-label lifestyle products.',
    imgId: 'product-home-kitchen-18f3ac',
    titleId: 'product-home-kitchen-title',
    descId: 'product-home-kitchen-desc',
  },
  {
    id: 'industrial-parts',
    title: 'Industrial Parts & Tools',
    description: 'Machined components, hardware, tools, metal parts, fittings, and industrial supplies where drawings and tolerances matter.',
    imgId: 'product-industrial-parts-b54e8d',
    titleId: 'product-industrial-parts-title',
    descId: 'product-industrial-parts-desc',
  },
  {
    id: 'packaging',
    title: 'Packaging & Print',
    description: 'Custom boxes, bags, labels, inserts, displays, and export cartons with attention to artwork, materials, and packing methods.',
    imgId: 'product-packaging-print-6a91ef',
    titleId: 'product-packaging-print-title',
    descId: 'product-packaging-print-desc',
  },
  {
    id: 'apparel-textiles',
    title: 'Apparel & Textiles',
    description: 'Garments, bags, textiles, promotional wear, and soft goods where samples, materials, workmanship, and sizing need close control.',
    imgId: 'product-apparel-textiles-c83d21',
    titleId: 'product-apparel-textiles-title',
    descId: 'product-apparel-textiles-desc',
  },
  {
    id: 'pet-and-outdoor',
    title: 'Pet, Outdoor & Lifestyle',
    description: 'Pet accessories, sports items, outdoor products, travel goods, and lifestyle products for e-commerce and wholesale buyers.',
    imgId: 'product-pet-outdoor-44a7dc',
    titleId: 'product-pet-outdoor-title',
    descId: 'product-pet-outdoor-desc',
  },
]

export const problems = [
  'Unclear whether a supplier is a real factory, trading company, or broker',
  'Quotations that look attractive but miss key material, packaging, or testing details',
  'Slow communication across time zones and incomplete production updates',
  'Quality issues discovered only after goods arrive overseas',
  'Confusion around cartons, labels, export documents, and shipment handover',
  'Difficulty comparing suppliers beyond price alone',
]

export const trustPoints = [
  { title: 'China-based sourcing support', description: 'Local follow-up with suppliers, factories, inspectors, and freight contacts.', icon: Globe2 },
  { title: 'Practical verification mindset', description: 'Supplier evaluation focuses on capability, fit, documentation, and communication signals.', icon: BadgeCheck },
  { title: 'Transparent order visibility', description: 'Clear milestones, photos, issue lists, and inspection summaries during production.', icon: FileSearch },
  { title: 'Export-oriented coordination', description: 'Support for packing details, loading checks, documents, and shipment handover.', icon: Truck },
]

export const caseStudies = [
  {
    id: 'industrial-hardware',
    title: 'Industrial hardware supplier comparison for an EU distributor',
    summary: 'Compared multiple hardware factories, clarified drawings and surface treatment requirements, then coordinated samples and pre-shipment inspection.',
    result: 'Buyer selected a supplier with stronger process control and clearer export documentation.',
    imgId: 'case-industrial-hardware-8dc214',
    titleId: 'case-industrial-hardware-title',
    descId: 'case-industrial-hardware-desc',
  },
  {
    id: 'packaging-rebrand',
    title: 'Custom packaging sourcing for a North American brand',
    summary: 'Sourced packaging vendors, compared materials and print methods, checked artwork details, and followed pilot production before mass order.',
    result: 'Packaging defects were reduced before shipment through clearer approval samples and inspection points.',
    imgId: 'case-packaging-rebrand-61baf2',
    titleId: 'case-packaging-rebrand-title',
    descId: 'case-packaging-rebrand-desc',
  },
  {
    id: 'homeware-qc',
    title: 'Homeware order follow-up with production delay risk',
    summary: 'Tracked production status, requested updated schedules, arranged random checks, and coordinated loading photos with the forwarder.',
    result: 'The buyer received earlier warning on delays and clearer visibility before final payment.',
    imgId: 'case-homeware-qc-4e9d77',
    titleId: 'case-homeware-qc-title',
    descId: 'case-homeware-qc-desc',
  },
]

export const faqs = [
  {
    question: 'Can SSourcing China help if I already found a supplier?',
    answer: 'Yes. We can help review supplier information, coordinate verification, clarify quotation details, arrange inspection, and follow production after you select a supplier.',
  },
  {
    question: 'Do you work with small businesses and first-time importers?',
    answer: 'Yes, if the product and order size are realistic for factory sourcing. We explain trade-offs clearly so buyers understand MOQ, tooling, packaging, testing, and shipping considerations.',
  },
  {
    question: 'Can you guarantee the lowest price?',
    answer: 'No serious sourcing agent should promise that. We focus on finding suitable suppliers, reducing avoidable risk, clarifying costs, and helping you compare value beyond unit price.',
  },
  {
    question: 'Which product categories do you avoid?',
    answer: 'We avoid products with unclear legality, unsafe specifications, counterfeit branding, or compliance risks that cannot be responsibly managed.',
  },
  {
    question: 'What information should I send for a quote?',
    answer: 'Share product photos or drawings, materials, dimensions, quantity, destination country, target price if available, packaging needs, certification needs, and your buying timeline.',
  },
]

export const blogPosts = [
  {
    title: 'How to compare China suppliers beyond unit price',
    excerpt: 'A practical checklist for reviewing capability, communication, payment terms, samples, lead time, certificates, and hidden cost items.',
    category: 'Supplier Selection',
  },
  {
    title: 'What overseas buyers should prepare before requesting a quote',
    excerpt: 'Better specifications lead to more accurate supplier responses. Here is what to include in your sourcing brief.',
    category: 'Sourcing Briefs',
  },
  {
    title: 'Pre-shipment inspection: what it can and cannot solve',
    excerpt: 'QC inspection is valuable, but it works best when expectations, samples, and checkpoints are defined early.',
    category: 'Quality Control',
  },
]

export const stats = [
  { value: '6+', label: 'Core sourcing services' },
  { value: '5', label: 'Clear process stages' },
  { value: '24h', label: 'Typical initial review' },
]

export const heroMetrics = [
  { label: 'Supplier search', icon: Users },
  { label: 'Factory verification', icon: Factory },
  { label: 'Quality inspection', icon: PackageCheck },
  { label: 'Shipping support', icon: Boxes },
]

export const contactHighlights = [
  { title: 'Product brief review', description: 'We review your request and identify missing details before contacting suppliers.', icon: FileSearch },
  { title: 'Supplier fit discussion', description: 'We clarify whether your quantity, product type, and timeline are realistic for China sourcing.', icon: Users },
  { title: 'Next-step proposal', description: 'You receive a practical recommendation for sourcing, verification, QC, or shipping coordination.', icon: Wrench },
]
