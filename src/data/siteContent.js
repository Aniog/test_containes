import {
  BadgeCheck,
  ClipboardCheck,
  Factory,
  FileSearch,
  Globe2,
  PackageCheck,
  SearchCheck,
  ShieldCheck,
  Ship,
  Timer,
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
  { icon: SearchCheck, title: 'Supplier Search', text: 'Shortlist suitable China suppliers based on product requirements, MOQ, certifications, export experience, and responsiveness.' },
  { icon: ShieldCheck, title: 'Supplier Verification', text: 'Check business registration, factory profile, product scope, communication quality, and basic risk indicators before you commit.' },
  { icon: Factory, title: 'Factory Audit Support', text: 'Coordinate factory visits and structured audit checks covering production capability, equipment, capacity, and quality systems.' },
  { icon: ClipboardCheck, title: 'Quality Inspection', text: 'Arrange pre-production, during-production, and final random inspections with clear photo-based reports and practical findings.' },
  { icon: Timer, title: 'Production Follow-up', text: 'Track samples, materials, production milestones, packaging details, and supplier updates so issues are found earlier.' },
  { icon: Ship, title: 'Shipping Coordination', text: 'Coordinate with suppliers and freight partners for carton data, export documents, consolidation, and shipment handover.' },
]

export const processSteps = [
  { step: '01', title: 'Send product requirements', text: 'Share product details, target market, quantity, budget, packaging needs, and timeline.' },
  { step: '02', title: 'Supplier research and screening', text: 'We compare factories and trading companies, request quotations, and check fit against your priorities.' },
  { step: '03', title: 'Samples and negotiation', text: 'We help clarify specifications, compare samples, and coordinate practical commercial terms.' },
  { step: '04', title: 'Factory checks and order follow-up', text: 'Verification, production tracking, and inspection points are planned around your order risk.' },
  { step: '05', title: 'Inspection and shipping handover', text: 'Quality findings, packing status, and shipping documents are organized before goods leave China.' },
]

export const products = [
  'Consumer electronics accessories',
  'Home and kitchen products',
  'Packaging and printed items',
  'Tools, hardware, and industrial parts',
  'Outdoor, sports, and travel goods',
  'Beauty, wellness, and personal care packaging',
  'Promotional and branded merchandise',
  'Pet products and household supplies',
]

export const problems = [
  'Too many supplier options and unclear factory capability',
  'Difficult communication across time zones and languages',
  'Unclear product specifications before sampling or production',
  'Quality surprises found only after goods arrive overseas',
  'Weak production updates and missed delivery milestones',
  'Scattered suppliers, documents, packing lists, and freight details',
]

export const trustPoints = [
  { icon: Globe2, title: 'International buyer focus', text: 'Clear English communication and practical reporting for importers, ecommerce brands, wholesalers, and distributors.' },
  { icon: FileSearch, title: 'Documented checks', text: 'Supplier profiles, inspection photos, carton details, and issue summaries are organized for buyer decisions.' },
  { icon: BadgeCheck, title: 'Risk-aware process', text: 'Recommendations are based on order value, product complexity, compliance needs, and shipping timeline.' },
  { icon: Users, title: 'On-the-ground coordination', text: 'A China-based team helps bridge supplier communication, factory follow-up, and logistics preparation.' },
]

export const caseStudies = [
  { category: 'Homeware importer', title: 'Comparing three factories for a kitchen storage line', result: 'The buyer received comparable quotations, sample feedback, and a recommended supplier based on finish quality and export experience.', details: 'SSourcing China clarified material thickness, packaging requirements, and carton dimensions before sample approval.' },
  { category: 'Ecommerce brand', title: 'Production follow-up for a custom accessory order', result: 'The team identified a packaging mismatch during production and coordinated a correction before final inspection.', details: 'Weekly progress updates, label checks, and photo documentation helped the buyer avoid delayed rework after shipment.' },
  { category: 'Industrial distributor', title: 'Supplier verification before first tooling payment', result: 'Verification reduced uncertainty around factory scope, equipment, and communication reliability before payment planning.', details: 'The buyer received structured notes on business registration, production area, product references, and tooling timeline.' },
]

export const faqs = [
  { question: 'Do you work with small and mid-sized buyers?', answer: 'Yes. We regularly help buyers who need practical sourcing support but do not have their own China office. MOQ and supplier fit depend on the product category.' },
  { question: 'Can you verify if a supplier is a real factory?', answer: 'We can coordinate supplier verification and factory audit checks. The scope can include registration review, site photos, production capability, quality process, and export experience.' },
  { question: 'Do you inspect every shipment?', answer: 'Inspection scope depends on product risk, order value, and buyer preference. We commonly support pre-shipment inspections and can also arrange during-production checks.' },
  { question: 'Can you manage shipping?', answer: 'We coordinate shipment preparation, carton information, supplier handover, consolidation details, and communication with freight partners. Freight service scope is confirmed case by case.' },
  { question: 'What information should I send for a quote?', answer: 'Please share product photos or links, specifications, target quantity, destination, packaging needs, and any certifications required by your market.' },
]

export const blogPosts = [
  { title: 'How to brief a China sourcing agent effectively', excerpt: 'A practical checklist for product requirements, samples, target price, packaging, and compliance notes.', icon: PackageCheck },
  { title: 'Supplier verification: what overseas buyers should check', excerpt: 'Key documents, factory signals, communication patterns, and risk indicators to review before payment.', icon: FileSearch },
  { title: 'Final inspection reports: how to read the findings', excerpt: 'Understand AQL basics, defect photos, carton checks, and how to decide on shipment release.', icon: ClipboardCheck },
  { title: 'Planning production follow-up before peak season', excerpt: 'Timeline buffers, material checks, packaging approvals, and freight coordination steps for seasonal orders.', icon: Truck },
]

export const serviceOptions = [
  { label: 'Supplier search', value: 'supplier_search' },
  { label: 'Supplier verification', value: 'supplier_verification' },
  { label: 'Factory audit', value: 'factory_audit' },
  { label: 'Quality inspection', value: 'quality_inspection' },
  { label: 'Production follow-up', value: 'production_follow_up' },
  { label: 'Shipping coordination', value: 'shipping_coordination' },
  { label: 'Other', value: 'other' },
]

export const supportAreas = [
  { icon: Wrench, title: 'Specification clarification', text: 'Turn rough product ideas into supplier-ready requirements.' },
  { icon: Factory, title: 'Factory capability review', text: 'Understand whether a supplier fits your order type and scale.' },
  { icon: Ship, title: 'Export preparation', text: 'Coordinate packing details, documents, and handover information.' },
]
