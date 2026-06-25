import {
  ClipboardCheck,
  Factory,
  FileSearch,
  Globe2,
  PackageCheck,
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
    icon: SearchCheck,
    title: 'Supplier Search',
    text: 'Shortlist suitable manufacturers and trading partners based on product fit, export experience, MOQ, lead time, and communication quality.',
  },
  {
    icon: FileSearch,
    title: 'Factory Verification',
    text: 'Check business licenses, production capability, basic compliance documents, workshop conditions, and supplier background before you place an order.',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    text: 'Arrange pre-shipment, during-production, and container-loading checks with clear reports, photos, and practical defect feedback.',
  },
  {
    icon: Factory,
    title: 'Production Follow-up',
    text: 'Track samples, deposits, materials, production milestones, packaging, and shipment readiness so buyers are not left waiting for updates.',
  },
  {
    icon: Ship,
    title: 'Shipping Coordination',
    text: 'Coordinate with suppliers, forwarders, and buyers on cartons, documents, booking schedules, consolidation, and export handover.',
  },
  {
    icon: PackageCheck,
    title: 'Sample & Order Support',
    text: 'Support product samples, price comparison, specification confirmation, packaging checks, and repeat-order communication.',
  },
]

export const processSteps = [
  { step: '01', title: 'Share your product brief', text: 'Send drawings, reference photos, target quantity, market requirements, and any supplier information you already have.' },
  { step: '02', title: 'Supplier research and screening', text: 'We compare supplier options, ask practical questions, and check whether each candidate is suitable for the project.' },
  { step: '03', title: 'Quotation and sample coordination', text: 'We help clarify specifications, compare quotations, organize samples, and reduce misunderstandings before mass production.' },
  { step: '04', title: 'Factory check and production follow-up', text: 'When needed, we verify factories, follow key dates, check packaging details, and keep you informed during production.' },
  { step: '05', title: 'Quality inspection and shipping handover', text: 'We coordinate inspection, report findings, and support export documents and shipment arrangements with your forwarder or ours.' },
]

export const productCategories = [
  'Consumer goods and retail products',
  'Packaging, bags, and custom boxes',
  'Hardware, tools, and industrial parts',
  'Home, kitchen, and lifestyle products',
  'Electronics accessories and components',
  'Textiles, apparel, and promotional items',
  'Machinery, spare parts, and equipment',
  'Custom OEM and private-label products',
]

export const problems = [
  'Unclear supplier capability or trading-company confusion',
  'Slow replies, vague pricing, and changing specifications',
  'Quality issues found only after goods arrive overseas',
  'Production delays without reliable milestone updates',
  'Packaging, labeling, and carton details missed before shipment',
  'Difficult coordination across factories, forwarders, and time zones',
]

export const trustPoints = [
  { icon: ShieldCheck, title: 'Practical verification', text: 'We focus on evidence: documents, workshop checks, production capability, photos, and supplier communication behavior.' },
  { icon: Globe2, title: 'International buyer mindset', text: 'Communication is structured for overseas buyers who need clear updates, not long back-and-forth messages.' },
  { icon: Users, title: 'On-the-ground coordination', text: 'China-based support helps bridge factory operations, QC timing, export paperwork, and shipment handover.' },
  { icon: Truck, title: 'End-to-end visibility', text: 'From supplier search to loading checks, we keep the process organized so decisions are based on timely information.' },
]

export const caseStudies = [
  {
    title: 'Private-label kitchenware for a European retailer',
    challenge: 'The buyer needed a factory that could handle stainless-steel finishing, retail packaging, and a moderate first order.',
    approach: 'SSourcing China screened suppliers, compared samples, checked packaging details, and arranged a pre-shipment inspection.',
    result: 'The buyer selected a supplier with clearer communication and received inspection findings before final balance payment.',
  },
  {
    title: 'Industrial parts supplier verification for an importer',
    challenge: 'The importer had a promising quotation but needed confirmation that the supplier could produce consistently.',
    approach: 'We reviewed documents, checked workshop capability, asked technical questions, and summarized risks in a practical report.',
    result: 'The buyer adjusted specifications and negotiated production terms before placing the first purchase order.',
  },
  {
    title: 'Multi-supplier shipment coordination for seasonal goods',
    challenge: 'Several factories were producing related products with different completion dates and carton requirements.',
    approach: 'We followed production milestones, checked packaging information, and coordinated loading timing with the forwarder.',
    result: 'The buyer received better visibility on readiness dates and reduced last-minute shipment confusion.',
  },
]

export const faqs = [
  { question: 'Do you work with small or first-time importers?', answer: 'Yes. We can help buyers clarify product requirements, understand supplier communication, and decide whether a sourcing project is realistic before committing to larger orders.' },
  { question: 'Can you verify a supplier I already found?', answer: 'Yes. We can check available company documents, business background, workshop information, communication quality, and arrange on-site verification when appropriate.' },
  { question: 'Do you guarantee the lowest price?', answer: 'No. Our focus is reliable sourcing, clear comparison, supplier suitability, quality control, and reducing avoidable risk. Lowest price is not always the safest option.' },
  { question: 'Can you inspect goods before shipment?', answer: 'Yes. We can coordinate quality inspections, packaging checks, and container-loading checks depending on your order stage and product requirements.' },
  { question: 'What information should I send for a quote?', answer: 'Product photos or drawings, target quantity, destination country, quality expectations, packaging needs, target price if available, and the service you need most.' },
]

export const blogPosts = [
  { title: 'How to Screen a China Supplier Before Paying a Deposit', excerpt: 'A practical checklist for reviewing documents, communication, production capability, and early warning signs.' },
  { title: 'Factory Verification vs. Product Inspection: What Buyers Need to Know', excerpt: 'Understand when to verify a supplier, when to inspect goods, and why both can matter in a sourcing project.' },
  { title: 'Preparing a Clear Product Brief for China Sourcing', excerpt: 'Better product briefs lead to better supplier replies, more accurate quotations, and fewer specification problems.' },
]

export const stats = [
  { value: 'Supplier', label: 'screening and comparison' },
  { value: 'QC', label: 'reports with photos and findings' },
  { value: 'Shipping', label: 'coordination through export handover' },
]
