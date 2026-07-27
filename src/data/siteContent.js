export const siteName = 'SSourcing China'
export const primaryCtaLabel = 'Get a Free Sourcing Quote'

export const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'How It Works', to: '/how-it-works' },
  { label: 'Products We Source', to: '/products-we-source' },
  { label: 'Case Studies', to: '/case-studies' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contact', to: '/contact' },
]

export const pageTitles = {
  '/': 'China Sourcing Agent | Supplier Verification, QC & Shipping | SSourcing China',
  '/services': 'Sourcing Services in China | SSourcing China',
  '/how-it-works': 'How Our China Sourcing Process Works | SSourcing China',
  '/products-we-source': 'Products We Source in China | SSourcing China',
  '/case-studies': 'China Sourcing Case Studies | SSourcing China',
  '/blog': 'China Sourcing Insights for Buyers | SSourcing China',
  '/contact': 'Contact SSourcing China | Get a Free Sourcing Quote',
}

export const siteDescription =
  'SSourcing China helps overseas buyers find reliable Chinese suppliers, verify factories, inspect quality, follow production, and coordinate shipping with clear communication and practical support.'

export const serviceOptions = [
  { value: 'supplier_sourcing', label: 'Supplier sourcing' },
  { value: 'supplier_verification', label: 'Supplier verification' },
  { value: 'factory_audit', label: 'Factory audit' },
  { value: 'quality_inspection', label: 'Quality inspection' },
  { value: 'production_follow_up', label: 'Production follow-up' },
  { value: 'shipping_coordination', label: 'Shipping coordination' },
]

export const services = [
  {
    id: 'supplier-sourcing',
    title: 'Supplier Sourcing',
    summary:
      'Identify suitable factories based on product requirements, quantity targets, compliance needs, and communication standards.',
    bullets: [
      'Longlist and shortlist creation',
      'Quote collection and comparison',
      'MOQ, lead time, and capability checks',
    ],
  },
  {
    id: 'supplier-verification',
    title: 'Supplier Verification',
    summary:
      'Check business legitimacy, operating history, export experience, and key risk factors before you move forward.',
    bullets: [
      'Business license review',
      'Basic ownership and registration checks',
      'Verification of core product focus',
    ],
  },
  {
    id: 'factory-audit',
    title: 'Factory Audit',
    summary:
      'Review the actual factory setup, production workflow, quality systems, and team capability before placing larger orders.',
    bullets: [
      'On-site factory assessment',
      'Production equipment review',
      'Process and quality checkpoints',
    ],
  },
  {
    id: 'quality-inspection',
    title: 'Quality Inspection',
    summary:
      'Inspect samples, pre-production setup, in-line output, or final goods before balance payment and shipment.',
    bullets: [
      'AQL-based inspection support',
      'Photo and video reporting',
      'Issue tracking and corrective follow-up',
    ],
  },
  {
    id: 'production-follow-up',
    title: 'Production Follow-Up',
    summary:
      'Keep your order on schedule with progress updates, milestone checks, and early escalation when issues appear.',
    bullets: [
      'Timeline monitoring',
      'Supplier communication in China time zone',
      'Packaging and readiness checks',
    ],
  },
  {
    id: 'shipping-coordination',
    title: 'Shipping Coordination',
    summary:
      'Coordinate packing details, shipment readiness, and handoff with your nominated freight forwarder or logistics partner.',
    bullets: [
      'Shipping document follow-up',
      'Carton and labeling verification',
      'Export readiness coordination',
    ],
  },
]

export const processSteps = [
  {
    step: '01',
    title: 'Receive your sourcing brief',
    description:
      'We review your product details, quantity expectations, target market, and service scope before making recommendations.',
    deliverables: ['Requirement review', 'Clarifying questions', 'Service scope confirmation'],
  },
  {
    step: '02',
    title: 'Search and screen suppliers',
    description:
      'Relevant factories are identified and screened for fit, responsiveness, and basic operational credibility.',
    deliverables: ['Supplier shortlist', 'Capability notes', 'Quote collection'],
  },
  {
    step: '03',
    title: 'Verify and compare options',
    description:
      'We compare pricing, MOQ, lead times, communication quality, and risk signals so you can make a practical decision.',
    deliverables: ['Comparison summary', 'Risk observations', 'Recommended next steps'],
  },
  {
    step: '04',
    title: 'Approve samples and production plan',
    description:
      'Once the target supplier is selected, we align on sample feedback, production timing, and checkpoint expectations.',
    deliverables: ['Sample feedback loop', 'Production milestones', 'QC planning'],
  },
  {
    step: '05',
    title: 'Monitor production and inspect quality',
    description:
      'During production, we track progress, confirm milestone status, and arrange inspections when needed.',
    deliverables: ['Progress updates', 'Inspection reports', 'Issue escalation'],
  },
  {
    step: '06',
    title: 'Coordinate shipment readiness',
    description:
      'Before goods leave the factory, we help verify packing, documents, and final handoff arrangements.',
    deliverables: ['Packing checks', 'Document follow-up', 'Shipment coordination'],
  },
]

export const productCategories = [
  {
    id: 'home-lifestyle',
    title: 'Home & Lifestyle',
    description:
      'Kitchenware, storage products, decor accessories, and private-label home items for retail and e-commerce brands.',
    fit: 'Suitable for importers, Amazon sellers, and homeware distributors.',
  },
  {
    id: 'packaging',
    title: 'Packaging & Printed Materials',
    description:
      'Boxes, inserts, labels, hang tags, mailers, and branded packaging that require detail control before shipment.',
    fit: 'Useful for brands that need packaging to match product launches.',
  },
  {
    id: 'promotional',
    title: 'Promotional Products',
    description:
      'Corporate gifts, event merchandise, branded giveaways, and custom accessories with repeat order potential.',
    fit: 'Common for agencies, distributors, and promotional buyers.',
  },
  {
    id: 'hardware-components',
    title: 'Hardware & Components',
    description:
      'Metal parts, simple assemblies, fittings, and industrial support items requiring supplier capability checks.',
    fit: 'Relevant for wholesalers and sourcing teams buying technical parts.',
  },
  {
    id: 'furniture-accessories',
    title: 'Furniture & Interior Accessories',
    description:
      'Furniture components, home accessories, and interior products where consistency and packaging matter.',
    fit: 'Good for buyers with volume shipments and mixed SKUs.',
  },
  {
    id: 'consumer-accessories',
    title: 'Consumer Accessories',
    description:
      'Everyday accessories, non-complex electronics accessories, and general merchandise requiring supplier vetting and QC.',
    fit: 'Suitable for volume-driven categories with multiple supplier options.',
  },
]

export const problemsWeSolve = [
  {
    title: 'Too many supplier options, not enough clarity',
    description:
      'We turn scattered supplier outreach into a structured shortlist with clearer comparisons.',
  },
  {
    title: 'Uncertain factory reliability',
    description:
      'Verification and on-site checks help you understand whether the supplier is credible and operationally suitable.',
  },
  {
    title: 'Quality risk before shipment',
    description:
      'Inspection checkpoints reduce surprises after goods leave China or arrive at destination.',
  },
  {
    title: 'Slow follow-up and production blind spots',
    description:
      'We communicate locally, follow key milestones, and surface delays or issues earlier.',
  },
]

export const trustPoints = [
  'China-based support for supplier communication and on-the-ground coordination',
  'Practical factory screening focused on fit, not just lowest price',
  'Clear written updates, photos, and inspection reporting in English',
  'Flexible support from sourcing stage through shipment readiness',
  'Approach designed for overseas buyers who need reliable local follow-up',
  'Professional tone with realistic recommendations and no inflated promises',
]

export const caseStudies = [
  {
    id: 'eu-homeware-brand',
    client: 'EU Homeware Brand',
    sector: 'Kitchen accessories',
    challenge:
      'The buyer needed a new supplier after inconsistent lead times and carton damage from an existing factory.',
    solution:
      'SSourcing China screened alternative factories, verified packaging capability, and coordinated a pre-shipment inspection before peak season.',
    outcome:
      'The buyer moved from a 23-supplier search list to a 3-factory shortlist and placed production with clearer packaging controls and a more predictable timeline.',
  },
  {
    id: 'us-promotional-distributor',
    client: 'US Promotional Distributor',
    sector: 'Custom giveaways',
    challenge:
      'A distributor needed dependable repeat orders across several SKUs while keeping communication and sample approval organized.',
    solution:
      'We consolidated supplier communication, compared quotes and sampling, and followed production updates before shipment handoff.',
    outcome:
      'The team gained a repeatable sourcing workflow and reduced time spent chasing supplier responses across multiple factories.',
  },
  {
    id: 'middle-east-importer',
    client: 'Middle East Importer',
    sector: 'Home storage products',
    challenge:
      'The importer required factory verification and product inspection before releasing balance payment on a container order.',
    solution:
      'A local verification visit and final inspection were arranged, with documented findings and action points shared in English.',
    outcome:
      'The buyer received clearer evidence before shipment and resolved several packing and finishing issues ahead of loading.',
  },
]

export const blogPosts = [
  {
    id: 'supplier-verification-checklist',
    title: 'What to Check Before Trusting a New Supplier in China',
    excerpt:
      'A practical checklist covering business registration, communication quality, production fit, and risk signals before you place an order.',
    tag: 'Supplier Verification',
  },
  {
    id: 'inspection-timing',
    title: 'When to Schedule Product Inspection During a China Order',
    excerpt:
      'Understand the role of pre-production, in-line, and final inspections so issues can be addressed before shipment.',
    tag: 'Quality Control',
  },
  {
    id: 'shipping-handoff',
    title: 'How Buyers Can Prepare for a Smoother Shipping Handoff',
    excerpt:
      'Packaging, labeling, shipping documents, and coordination points that help reduce last-minute export delays.',
    tag: 'Shipping Coordination',
  },
]

export const faqs = [
  {
    question: 'What types of buyers do you work with?',
    answer:
      'We support overseas importers, brand owners, procurement teams, wholesalers, and e-commerce businesses that source products from China.',
  },
  {
    question: 'Can you help even if we already have a supplier?',
    answer:
      'Yes. Many buyers ask us to verify an existing supplier, inspect quality, or follow production without changing factories.',
  },
  {
    question: 'Do you work across all product categories?',
    answer:
      'We focus on practical sourcing support across common B2B product categories. If your product is specialized, share the details and we will confirm fit first.',
  },
  {
    question: 'What do you need in order to prepare a quote?',
    answer:
      'The most helpful details are your product type, quantity target, destination market, target timeline, and which services you need.',
  },
  {
    question: 'Can you inspect goods before shipment?',
    answer:
      'Yes. We can help arrange quality inspection before shipment and share findings with photos, notes, and follow-up points.',
  },
  {
    question: 'Do you handle freight forwarding directly?',
    answer:
      'We mainly coordinate shipment readiness and handoff. We can work with your forwarder or align with a nominated logistics partner.',
  },
]

export const footerServices = [
  'Supplier sourcing',
  'Factory verification',
  'Quality inspection',
  'Production follow-up',
  'Shipping coordination',
]
