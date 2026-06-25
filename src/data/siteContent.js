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
    title: 'Supplier Sourcing',
    description:
      'Shortlist suitable China suppliers based on product requirements, market fit, production capability, and communication quality.',
    icon: SearchCheck,
  },
  {
    title: 'Factory Verification',
    description:
      'Check supplier licenses, production scope, export experience, certificates, and basic factory conditions before you commit.',
    icon: Factory,
  },
  {
    title: 'Sample & Quote Comparison',
    description:
      'Compare pricing, samples, MOQ, lead times, packaging details, and payment terms in a practical decision format.',
    icon: FileSearch,
  },
  {
    title: 'Quality Inspection',
    description:
      'Arrange pre-production, during-production, and pre-shipment checks using clear criteria and photo-based reporting.',
    icon: ClipboardCheck,
  },
  {
    title: 'Production Follow-up',
    description:
      'Track milestones, clarify issues with factories, and keep overseas buyers informed before small delays become bigger risks.',
    icon: Route,
  },
  {
    title: 'Shipping Coordination',
    description:
      'Coordinate cartons, labels, booking details, consolidation, export documents, and handover to your chosen forwarder.',
    icon: Ship,
  },
]

export const processSteps = [
  {
    step: '01',
    title: 'Share your sourcing brief',
    text: 'Tell us the product, target quantity, market, quality standard, packaging needs, and any current supplier concerns.',
  },
  {
    step: '02',
    title: 'Supplier search and screening',
    text: 'We identify potential factories, review fit, check basic credentials, and remove suppliers that do not match the brief.',
  },
  {
    step: '03',
    title: 'Quotes, samples, and comparison',
    text: 'You receive a practical comparison of quotes, sample status, trade terms, risks, and recommended next steps.',
  },
  {
    step: '04',
    title: 'Order follow-up and QC',
    text: 'We follow production timing, confirm key details, and arrange inspection checkpoints before shipment.',
  },
  {
    step: '05',
    title: 'Shipping coordination',
    text: 'We coordinate with the factory and forwarder so goods, labels, documents, and handover details are aligned.',
  },
]

export const productCategories = [
  {
    id: 'consumer-electronics',
    title: 'Consumer Electronics',
    description: 'Accessories, chargers, small devices, smart home products, and electronic components.',
    imgId: 'products-consumer-electronics-91b3c4',
    titleId: 'product-consumer-electronics-title',
    descId: 'product-consumer-electronics-desc',
  },
  {
    id: 'home-kitchen',
    title: 'Home & Kitchen',
    description: 'Kitchen tools, storage, home organization, decor, cleaning items, and household goods.',
    imgId: 'products-home-kitchen-83d7a2',
    titleId: 'product-home-kitchen-title',
    descId: 'product-home-kitchen-desc',
  },
  {
    id: 'packaging-printing',
    title: 'Packaging & Printing',
    description: 'Custom boxes, bags, labels, manuals, retail packaging, and e-commerce packaging.',
    imgId: 'products-packaging-printing-4f8a21',
    titleId: 'product-packaging-printing-title',
    descId: 'product-packaging-printing-desc',
  },
  {
    id: 'industrial-parts',
    title: 'Industrial Parts',
    description: 'Machined components, sheet metal, hardware, molded parts, fasteners, and assemblies.',
    imgId: 'products-industrial-parts-68c2de',
    titleId: 'product-industrial-parts-title',
    descId: 'product-industrial-parts-desc',
  },
  {
    id: 'textiles-bags',
    title: 'Textiles & Bags',
    description: 'Bags, accessories, fabrics, uniforms, promotional textiles, and custom soft goods.',
    imgId: 'products-textiles-bags-b631e0',
    titleId: 'product-textiles-bags-title',
    descId: 'product-textiles-bags-desc',
  },
  {
    id: 'promotional-products',
    title: 'Promotional Products',
    description: 'Branded giveaways, corporate gifts, event merchandise, and custom retail items.',
    imgId: 'products-promotional-products-729ad5',
    titleId: 'product-promotional-products-title',
    descId: 'product-promotional-products-desc',
  },
]

export const problemsSolved = [
  'You receive too many supplier options and need a clearer shortlist.',
  'Quotes look similar, but quality, capacity, and communication differ.',
  'You need factory checks before sending a deposit.',
  'Samples are acceptable, but mass production consistency is uncertain.',
  'Production updates are slow, unclear, or difficult across time zones.',
  'You need packaging, labeling, and shipping details coordinated before export.',
]

export const trustPoints = [
  {
    title: 'China-based team',
    text: 'Local supplier communication, document checks, sample follow-up, and inspection coordination.',
    icon: Globe2,
  },
  {
    title: 'Practical verification',
    text: 'We focus on licenses, production fit, product experience, communication, and visible operational evidence.',
    icon: ShieldCheck,
  },
  {
    title: 'Clear reporting',
    text: 'Shortlists, quote comparisons, QC notes, and progress updates are structured for overseas buyers.',
    icon: BadgeCheck,
  },
  {
    title: 'End-to-end coordination',
    text: 'From supplier search to factory follow-up and shipping handover, one team keeps the details connected.',
    icon: PackageCheck,
  },
]

export const caseStudies = [
  {
    id: 'kitchenware-brand',
    industry: 'Home & Kitchen',
    title: 'Kitchenware brand needed a more reliable production partner',
    challenge:
      'A European importer had unstable communication with a trading company and needed factory-level visibility for stainless steel kitchen tools.',
    solution:
      'SSourcing China screened factories, compared samples, verified production scope, and arranged pre-shipment inspection criteria.',
    outcome:
      'The buyer selected a factory with clearer capability, improved packaging details, and a more transparent production schedule.',
    imgId: 'case-kitchenware-brand-19ad4e',
    titleId: 'case-kitchenware-title',
    descId: 'case-kitchenware-desc',
  },
  {
    id: 'electronics-accessories',
    industry: 'Consumer Electronics',
    title: 'Electronics accessory buyer needed quote and compliance clarity',
    challenge:
      'A distributor received low quotes but inconsistent answers on components, testing, packaging, and certification documents.',
    solution:
      'We organized supplier questions, checked documents, compared sample feedback, and highlighted risk points before order placement.',
    outcome:
      'The buyer avoided unclear offers and continued with suppliers who provided stronger technical and export documentation.',
    imgId: 'case-electronics-accessories-a38f0b',
    titleId: 'case-electronics-title',
    descId: 'case-electronics-desc',
  },
  {
    id: 'custom-packaging',
    industry: 'Packaging',
    title: 'Retail packaging project required print and shipment coordination',
    challenge:
      'A startup needed custom printed boxes with tight artwork, carton, labeling, and delivery requirements for launch inventory.',
    solution:
      'We followed sampling, confirmed artwork and carton marks, checked production progress, and coordinated shipping handover.',
    outcome:
      'The launch inventory moved with fewer packaging misunderstandings and clearer communication between factory and forwarder.',
    imgId: 'case-custom-packaging-55c9fa',
    titleId: 'case-packaging-title',
    descId: 'case-packaging-desc',
  },
]

export const faqs = [
  {
    question: 'Do you work with small and mid-sized buyers?',
    answer:
      'Yes. We help importers, e-commerce sellers, distributors, and growing brands that need practical sourcing support in China.',
  },
  {
    question: 'Can you verify whether a supplier is a real factory?',
    answer:
      'We can check business information, production scope, product experience, documents, photos, videos, and arrange on-site verification where needed.',
  },
  {
    question: 'Do you replace freight forwarders?',
    answer:
      'No. We coordinate with factories and your forwarder, or help prepare shipment details, cartons, labels, and handover information.',
  },
  {
    question: 'What product information should I prepare?',
    answer:
      'Provide specifications, drawings or reference photos, estimated quantity, target market, packaging needs, quality standards, and target timeline.',
  },
  {
    question: 'Can you inspect goods before shipment?',
    answer:
      'Yes. We can arrange inspection based on agreed criteria and provide practical reporting with photos and issue notes.',
  },
]

export const blogPosts = [
  {
    title: 'How to prepare a sourcing brief for China suppliers',
    excerpt:
      'A clear sourcing brief helps suppliers quote accurately and helps you compare options without losing time.',
    category: 'Sourcing basics',
    date: 'June 2026',
  },
  {
    title: 'Factory verification: what overseas buyers should check first',
    excerpt:
      'Licenses, production scope, certificates, product fit, and communication quality all matter before you pay a deposit.',
    category: 'Supplier verification',
    date: 'May 2026',
  },
  {
    title: 'Pre-shipment inspection: practical checkpoints for importers',
    excerpt:
      'Define product, packaging, labeling, quantity, and workmanship requirements before inspection day.',
    category: 'Quality control',
    date: 'April 2026',
  },
]

export const stats = [
  { value: '6+', label: 'Core sourcing services' },
  { value: '5-step', label: 'Practical sourcing process' },
  { value: 'B2B', label: 'Importer-focused support' },
]

export const heroHighlights = [
  { label: 'Supplier search', icon: SearchCheck },
  { label: 'Factory checks', icon: Factory },
  { label: 'QC inspection', icon: ClipboardCheck },
  { label: 'Shipping coordination', icon: Truck },
]

export const qualificationOptions = [
  'New supplier search',
  'Factory verification',
  'Quality inspection',
  'Production follow-up',
  'Shipping coordination',
  'Other sourcing support',
]

export const productStageOptions = [
  'Idea or early research',
  'Have product specifications',
  'Have supplier quotes',
  'Samples received',
  'Order in production',
  'Ready for inspection or shipping',
]

export const productIcons = [Boxes, PackageCheck, Factory]
