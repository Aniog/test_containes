export const navigationLinks = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/how-it-works', label: 'How It Works' },
  { to: '/products-we-source', label: 'Products We Source' },
  { to: '/case-studies', label: 'Case Studies' },
  { to: '/blog', label: 'Blog' },
  { to: '/contact', label: 'Contact' },
]

export const imagePlaceholder =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"

export const serviceOptions = [
  { value: 'supplier_sourcing', label: 'Supplier sourcing' },
  { value: 'supplier_verification', label: 'Supplier verification' },
  { value: 'factory_audit', label: 'Factory audit' },
  { value: 'quality_inspection', label: 'Quality inspection' },
  { value: 'production_follow_up', label: 'Production follow-up' },
  { value: 'shipping_coordination', label: 'Shipping coordination' },
]

export const serviceCards = [
  {
    title: 'Supplier sourcing',
    summary:
      'Identify factories that match your product requirements, target market, and commercial expectations.',
    points: [
      'Requirement review and RFQ preparation',
      'Supplier shortlisting with comparison notes',
      'Initial capability and pricing checks',
    ],
  },
  {
    title: 'Supplier verification',
    summary:
      'Check whether a supplier is genuine, suitable, and aligned with your order risk profile before commitment.',
    points: [
      'Business registration and ownership review',
      'Factory capability checks and basic compliance review',
      'Photo and document-based verification reports',
    ],
  },
  {
    title: 'Quality inspection',
    summary:
      'Verify quality before shipment with practical inspections based on your specifications and order priorities.',
    points: [
      'Pre-production and during-production checks',
      'Pre-shipment inspection reporting',
      'Sampling notes, defect logs, and corrective follow-up',
    ],
  },
  {
    title: 'Production follow-up',
    summary:
      'Track milestones, clarify issues quickly, and keep communication moving between buyer and factory.',
    points: [
      'Production schedule follow-up',
      'Issue escalation and status updates',
      'Packaging, labeling, and readiness coordination',
    ],
  },
  {
    title: 'Shipping coordination',
    summary:
      'Support document readiness, packing confirmation, and handover coordination with your forwarder or shipping partner.',
    points: [
      'Shipment readiness checks',
      'Packing list and carton mark review',
      'Factory-to-forwarder coordination support',
    ],
  },
]

export const processSteps = [
  {
    step: '01',
    title: 'Share your sourcing brief',
    description:
      'Tell us what product you need, your target quantity, quality standard, destination market, and delivery timeline.',
  },
  {
    step: '02',
    title: 'Market search and supplier screening',
    description:
      'We review the request, identify suitable suppliers, and eliminate weak or unsuitable options early.',
  },
  {
    step: '03',
    title: 'Verification and quotation comparison',
    description:
      'We compare supplier responses, verify business basics, and summarize key differences for buyer review.',
  },
  {
    step: '04',
    title: 'Sampling, order launch, and production follow-up',
    description:
      'After supplier selection, we help coordinate samples, confirm requirements, and follow production milestones.',
  },
  {
    step: '05',
    title: 'Inspection and shipment coordination',
    description:
      'Before shipment, we support inspection planning, final checks, and handover preparation for shipping.',
  },
]

export const productCategories = [
  {
    title: 'Home & kitchen products',
    description:
      'Cookware, storage items, tabletop products, cleaning tools, and everyday household goods.',
    examples: ['Kitchen tools', 'Storage organizers', 'Tableware'],
  },
  {
    title: 'Consumer accessories',
    description:
      'Lifestyle accessories, seasonal items, packaging sets, and private-label support items.',
    examples: ['Travel accessories', 'Gift sets', 'Promotional items'],
  },
  {
    title: 'Packaging & printed materials',
    description:
      'Retail packaging, inserts, labels, boxes, and branded presentation materials.',
    examples: ['Gift boxes', 'Labels', 'Printed inserts'],
  },
  {
    title: 'Light industrial & hardware items',
    description:
      'Practical sourced items for maintenance, workshop, utility, and project-based procurement needs.',
    examples: ['Hand tools', 'Fasteners', 'Utility parts'],
  },
  {
    title: 'Custom OEM / ODM products',
    description:
      'Projects requiring factory matching, sampling, packaging alignment, and production follow-up.',
    examples: ['Custom assemblies', 'Private label products', 'Branded accessories'],
  },
  {
    title: 'E-commerce ready products',
    description:
      'Products that need supplier vetting, packaging control, and shipment readiness for online sellers.',
    examples: ['Small home goods', 'Lifestyle items', 'Bundle-ready products'],
  },
]

export const problemsSolved = [
  'You are not sure whether a supplier is a real factory or a trading company.',
  'Quotations look inconsistent and it is difficult to compare suppliers clearly.',
  'Samples are acceptable, but mass production quality may still be uncertain.',
  'Time zone gaps make factory communication slow and issues stay unresolved too long.',
  'Shipping readiness, carton marks, and documentation are not fully coordinated.',
  'You need China-based follow-up without building your own local sourcing team.',
]

export const trustPoints = [
  {
    title: 'China-based execution support',
    description:
      'On-the-ground sourcing support for supplier communication, verification, and production follow-up.',
  },
  {
    title: 'Clear English reporting',
    description:
      'Practical updates that help overseas buyers make supplier and shipment decisions with less ambiguity.',
  },
  {
    title: 'Risk-focused sourcing process',
    description:
      'Structured checks built around supplier credibility, production visibility, and shipment readiness.',
  },
  {
    title: 'Flexible support by project stage',
    description:
      'Use help only where you need it: search, verification, inspection, production follow-up, or shipping support.',
  },
]

export const caseStudies = [
  {
    title: 'Private-label kitchen accessories for a European importer',
    challenge:
      'The buyer needed backup supplier options in China after quality drift and slow communication from an existing vendor.',
    solution:
      'SSourcing China shortlisted alternative factories, reviewed quotations, coordinated samples, and followed packaging details before order confirmation.',
    result:
      'The buyer moved forward with a verified supplier shortlist and clearer quality checkpoints for pilot production.',
  },
  {
    title: 'Inspection support for a promotional products distributor',
    challenge:
      'A repeat order was approaching shipment, but the buyer wanted independent quality visibility before release.',
    solution:
      'We coordinated a pre-shipment inspection, documented defects and carton issues, and pushed corrective actions before handover.',
    result:
      'The buyer released goods with clearer acceptance notes and reduced uncertainty around shipment quality.',
  },
  {
    title: 'Supplier verification for a new hardware sourcing project',
    challenge:
      'An overseas buyer received competitive pricing but had limited confidence in the supplier’s actual production capability.',
    solution:
      'We reviewed supplier credentials, checked factory information, summarized production scope, and highlighted risk areas before sample commitment.',
    result:
      'The buyer avoided blind ordering and moved ahead with better visibility on supplier fit and next-step decisions.',
  },
]

export const faqItems = [
  {
    question: 'What kinds of buyers do you work with?',
    answer:
      'We support importers, distributors, e-commerce sellers, brand owners, and project buyers who need sourcing and factory support in China.',
  },
  {
    question: 'Do you only help with large orders?',
    answer:
      'Not necessarily. The best approach depends on the product category, factory expectations, and how much sourcing work is required.',
  },
  {
    question: 'Can you verify a supplier I already found?',
    answer:
      'Yes. We can support targeted supplier verification, basic factory checks, and quality-related follow-up even if the supplier was sourced by you.',
  },
  {
    question: 'Do you handle shipping directly?',
    answer:
      'We coordinate shipment readiness and factory communication. If needed, we can also work alongside your nominated freight forwarder.',
  },
  {
    question: 'What should I include in my inquiry?',
    answer:
      'Share the product type, quantity or MOQ target, specification details, destination market, timeline, and the support you need.',
  },
]

export const blogPosts = [
  {
    title: 'How to verify a China supplier before your first purchase order',
    category: 'Supplier Verification',
    date: 'June 2026',
    excerpt:
      'A practical checklist covering company identity, production fit, quotation review, and early warning signs before commitment.',
  },
  {
    title: 'What a pre-shipment inspection should confirm before goods leave China',
    category: 'Quality Control',
    date: 'May 2026',
    excerpt:
      'Key inspection points buyers should align on before final payment and shipping release.',
  },
  {
    title: 'How to reduce sourcing delays caused by unclear factory communication',
    category: 'Production Follow-up',
    date: 'April 2026',
    excerpt:
      'Simple ways to tighten communication, reporting, and milestone tracking during production.',
  },
  {
    title: 'Comparing supplier quotations without missing hidden cost risks',
    category: 'Sourcing Strategy',
    date: 'March 2026',
    excerpt:
      'Why buyers should compare more than unit price when evaluating Chinese suppliers.',
  },
]

export const seoByPath = {
  '/': {
    title:
      'China Sourcing Agent | Supplier Verification, QC & Shipping | SSourcing China',
    description:
      'SSourcing China helps overseas buyers source products in China, verify suppliers, inspect quality, follow production, and coordinate shipping.',
  },
  '/services': {
    title: 'Services | SSourcing China',
    description:
      'Explore sourcing, supplier verification, factory audit, quality inspection, production follow-up, and shipping coordination services.',
  },
  '/how-it-works': {
    title: 'How It Works | SSourcing China',
    description:
      'See the sourcing workflow SSourcing China uses to help overseas buyers reduce supplier and quality risk in China.',
  },
  '/products-we-source': {
    title: 'Products We Source | SSourcing China',
    description:
      'Review the product categories and sourcing support SSourcing China provides for overseas buyers.',
  },
  '/case-studies': {
    title: 'Case Studies | SSourcing China',
    description:
      'See practical sourcing examples covering supplier verification, inspections, and production support in China.',
  },
  '/blog': {
    title: 'Blog | SSourcing China',
    description:
      'Read practical sourcing articles for buyers working with suppliers and factories in China.',
  },
  '/contact': {
    title: 'Contact | SSourcing China',
    description:
      'Send your sourcing brief to SSourcing China and request a free sourcing quote.',
  },
}
