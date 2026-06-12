import {
  ClipboardCheck,
  Factory,
  FileSearch,
  Globe2,
  PackageCheck,
  Search,
  Ship,
  ShieldCheck,
  TimerReset,
  Truck,
} from 'lucide-react'

export const navLinks = [
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
    icon: Search,
    text: 'Shortlist suitable manufacturers and trading partners based on product needs, export experience, certificates, and MOQ fit.',
  },
  {
    title: 'Factory Verification',
    icon: Factory,
    text: 'Check business licenses, factory capability, product lines, communication quality, and whether the supplier matches your order requirements.',
  },
  {
    title: 'Quality Inspection',
    icon: ClipboardCheck,
    text: 'Arrange pre-production, during-production, and pre-shipment checks with clear reports and practical corrective actions.',
  },
  {
    title: 'Production Follow-up',
    icon: TimerReset,
    text: 'Track schedules, sample approvals, packaging details, and issue resolution so buyers can manage orders with better visibility.',
  },
  {
    title: 'Shipping Coordination',
    icon: Ship,
    text: 'Coordinate cartons, documents, forwarders, consolidation, and export readiness for sea, air, or courier shipments.',
  },
  {
    title: 'Order Risk Control',
    icon: ShieldCheck,
    text: 'Reduce common sourcing risks through structured supplier checks, clear specifications, and milestone-based communication.',
  },
]

export const processSteps = [
  { title: 'Requirement Review', text: 'We clarify product specifications, target price range, quantity, packaging, market standards, and timeline.' },
  { title: 'Supplier Shortlist', text: 'We search and compare suppliers, screen basic credibility, and organize options for your review.' },
  { title: 'Quotation & Sampling', text: 'We coordinate quotations, samples, technical questions, and supplier comparisons before order decisions.' },
  { title: 'Factory & Quality Checks', text: 'We verify production readiness, monitor key milestones, and arrange inspections based on your risk level.' },
  { title: 'Shipping Support', text: 'We coordinate packing lists, export documents, consolidation, and handover with your selected logistics partner.' },
]

export const productCategories = [
  'Consumer electronics accessories',
  'Home and kitchen products',
  'Packaging and printed items',
  'Hardware and tools',
  'Promotional gifts',
  'Pet products',
  'Outdoor and sports goods',
  'Industrial components',
  'Apparel accessories',
  'Private-label products',
]

export const problems = [
  { title: 'Unclear supplier capability', text: 'Understand whether a supplier is a real fit before paying deposits.' },
  { title: 'Inconsistent quality', text: 'Add inspection checkpoints and documented feedback before shipment.' },
  { title: 'Slow communication', text: 'Keep production questions, samples, and changes moving across time zones.' },
  { title: 'Shipping confusion', text: 'Coordinate export documents, packaging details, and forwarder handoff.' },
]

export const trustPoints = [
  { title: 'China-based coordination', icon: Globe2, text: 'Local supplier communication and factory-side follow-up for overseas buyers.' },
  { title: 'Practical reporting', icon: FileSearch, text: 'Clear summaries, photos, findings, and next steps rather than vague updates.' },
  { title: 'Order-focused process', icon: PackageCheck, text: 'Support from sourcing and sampling through production and shipment readiness.' },
  { title: 'Logistics awareness', icon: Truck, text: 'Packaging, labeling, carton, and document checks to reduce handover issues.' },
]

export const caseStudies = [
  {
    title: 'Homeware importer improves supplier comparison',
    industry: 'Home & Kitchen',
    challenge: 'A European buyer needed new bamboo kitchenware suppliers but had limited visibility into factory capability.',
    result: 'SSourcing China compared quotations, checked factory information, coordinated samples, and helped the buyer select two qualified suppliers for trial orders.',
  },
  {
    title: 'Electronics accessory order receives pre-shipment control',
    industry: 'Consumer Accessories',
    challenge: 'A buyer needed better control over packaging, labeling, and defect checks before a seasonal shipment.',
    result: 'Inspection feedback was shared before shipment, allowing the supplier to rework packaging issues and confirm carton details with the forwarder.',
  },
  {
    title: 'Multi-supplier consolidation for promotional products',
    industry: 'Promotional Gifts',
    challenge: 'A distributor was buying small batches from several suppliers and needed clearer delivery coordination.',
    result: 'Production schedules, carton marks, and shipment documents were coordinated to support a smoother consolidated export process.',
  },
]

export const faqItems = [
  { question: 'Do you work with small and medium importers?', answer: 'Yes. We support overseas buyers that need practical supplier search, verification, sampling, inspection, and shipping coordination for new or repeat orders.' },
  { question: 'Can you guarantee the lowest price?', answer: 'No. We focus on suitable suppliers, clear comparisons, and risk control. The lowest quote is not always the most reliable option for quality or delivery.' },
  { question: 'Which parts of China do you cover?', answer: 'We can coordinate with suppliers in major manufacturing regions across China, depending on the product category and supplier location.' },
  { question: 'Can you inspect goods before shipment?', answer: 'Yes. We can arrange quality inspections and provide reports with photos, findings, and practical recommendations before shipment release.' },
  { question: 'How do I start?', answer: 'Send your product details, estimated quantity, market requirements, and timeline through the inquiry form. We will review and suggest the next sourcing steps.' },
]

export const blogPosts = [
  { title: 'How to compare China supplier quotations beyond unit price', excerpt: 'A practical guide to checking MOQ, materials, packaging, payment terms, lead time, and export experience.', category: 'Supplier Search' },
  { title: 'What to include in a pre-shipment inspection checklist', excerpt: 'Key points buyers should define before inspection: quantity, appearance, function, labeling, cartons, and documents.', category: 'Quality Control' },
  { title: 'Common shipping coordination mistakes for first-time importers', excerpt: 'Avoid unclear carton data, late document checks, and missing forwarder communication before goods leave the factory.', category: 'Shipping' },
]
