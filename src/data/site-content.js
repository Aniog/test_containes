import strkImgConfig from '@/strk-img-config.json'

const getPickedImageUrl = (imageId) => {
  const entry = strkImgConfig[imageId]
  const pickedResult = entry?.results?.find((result) => result.id === entry?.picked)

  return pickedResult?.url || entry?.results?.[0]?.url || ''
}

export const homeSideVisualUrl = getPickedImageUrl('home-side-visual-51c12e')

export const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'How It Works', to: '/how-it-works' },
  { label: 'Products We Source', to: '/products-we-source' },
  { label: 'Case Studies', to: '/case-studies' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contact', to: '/contact' },
]

export const heroChecklist = [
  'Find reliable suppliers matched to your brief',
  'Verify factories before you place orders',
  'Inspect quality before shipment',
  'Keep production and logistics coordinated',
]

export const services = [
  {
    id: 'supplier-search',
    title: 'Supplier Search & Shortlisting',
    description:
      'Identify factories that match your product specifications, order volume, compliance needs, and target price range.',
    bullets: [
      'Buyer brief review and market screening',
      'Capability, MOQ, and pricing comparison',
      'Shortlist with practical sourcing notes',
    ],
    titleId: 'service-supplier-search-title',
    descId: 'service-supplier-search-desc',
    imageId: 'service-supplier-search-7d1f8a',
    imageUrl: getPickedImageUrl('service-supplier-search-7d1f8a'),
  },
  {
    id: 'supplier-verification',
    title: 'Supplier Verification',
    description:
      'Reduce supplier risk with business background checks, document review, and on-the-ground verification before commitment.',
    bullets: [
      'Business license and registration review',
      'Operational and communication checks',
      'Red-flag review before sample or PO stage',
    ],
    titleId: 'service-supplier-verification-title',
    descId: 'service-supplier-verification-desc',
    imageId: 'service-supplier-verification-4b2d11',
    imageUrl: getPickedImageUrl('service-supplier-verification-4b2d11'),
  },
  {
    id: 'factory-audit',
    title: 'Factory Audit Coordination',
    description:
      'Arrange and coordinate factory visits or third-party audits to confirm production capability, systems, and process control.',
    bullets: [
      'Audit scope definition',
      'Factory visit coordination in China',
      'Clear audit summary for buyer review',
    ],
    titleId: 'service-factory-audit-title',
    descId: 'service-factory-audit-desc',
    imageId: 'service-factory-audit-55f130',
    imageUrl: getPickedImageUrl('service-factory-audit-55f130'),
  },
  {
    id: 'quality-inspection',
    title: 'Quality Inspection',
    description:
      'Inspect goods before shipment so problems are found while corrective action is still possible.',
    bullets: [
      'Pre-production and in-line checks',
      'Pre-shipment inspection support',
      'Photo-based reporting and issue escalation',
    ],
    titleId: 'service-quality-inspection-title',
    descId: 'service-quality-inspection-desc',
    imageId: 'service-quality-inspection-9c52aa',
    imageUrl: getPickedImageUrl('service-quality-inspection-9c52aa'),
  },
  {
    id: 'production-follow-up',
    title: 'Production Follow-Up',
    description:
      'Stay informed on milestones, delays, and changes through structured production follow-up and supplier communication.',
    bullets: [
      'Milestone tracking from PO to packing',
      'Schedule risk visibility',
      'Issue follow-up in clear English',
    ],
    titleId: 'service-production-follow-up-title',
    descId: 'service-production-follow-up-desc',
    imageId: 'service-production-follow-up-1af6cd',
    imageUrl: getPickedImageUrl('service-production-follow-up-1af6cd'),
  },
  {
    id: 'shipping-coordination',
    title: 'Shipping Coordination',
    description:
      'Coordinate packing, documents, and shipment readiness so your order moves with fewer avoidable handoff problems.',
    bullets: [
      'Shipment readiness checks',
      'Packing and document coordination',
      'Communication support with logistics partners',
    ],
    titleId: 'service-shipping-coordination-title',
    descId: 'service-shipping-coordination-desc',
    imageId: 'service-shipping-coordination-3d8e6b',
    imageUrl: getPickedImageUrl('service-shipping-coordination-3d8e6b'),
  },
]

export const processSteps = [
  {
    step: '01',
    title: 'Share your sourcing brief',
    description:
      'Tell us the product, specifications, quantity, target market, quality expectations, and timeline.',
  },
  {
    step: '02',
    title: 'Market research and supplier screening',
    description:
      'We identify suitable factories, compare options, and filter out weak or unsuitable suppliers early.',
  },
  {
    step: '03',
    title: 'Verification and sampling',
    description:
      'Before moving forward, we coordinate supplier verification, sample review, and key commercial checks.',
  },
  {
    step: '04',
    title: 'Production control and inspection',
    description:
      'We follow production milestones and coordinate inspections so issues are flagged before shipment.',
  },
  {
    step: '05',
    title: 'Shipping readiness and handoff',
    description:
      'Once goods pass checks, we help coordinate packing, documents, and shipment readiness with your logistics plan.',
  },
]

export const productCategories = [
  {
    id: 'home-kitchen',
    title: 'Home & Kitchen',
    description:
      'Cookware, storage, tableware, seasonal household goods, and practical consumer products.',
    titleId: 'product-home-kitchen-title',
    descId: 'product-home-kitchen-desc',
    imageId: 'product-home-kitchen-5be871',
    imageUrl: getPickedImageUrl('product-home-kitchen-5be871'),
  },
  {
    id: 'packaging',
    title: 'Packaging & Printed Items',
    description:
      'Retail packaging, labels, cartons, inserts, and branded printed materials for export orders.',
    titleId: 'product-packaging-title',
    descId: 'product-packaging-desc',
    imageId: 'product-packaging-3c4d90',
    imageUrl: getPickedImageUrl('product-packaging-3c4d90'),
  },
  {
    id: 'consumer-electronics-accessories',
    title: 'Consumer Electronics Accessories',
    description:
      'Cables, chargers, desktop accessories, and practical add-on items with quality-control needs.',
    titleId: 'product-consumer-electronics-accessories-title',
    descId: 'product-consumer-electronics-accessories-desc',
    imageId: 'product-consumer-electronics-accessories-3e7d3f',
    imageUrl: getPickedImageUrl('product-consumer-electronics-accessories-3e7d3f'),
  },
  {
    id: 'promotional-products',
    title: 'Promotional Products',
    description:
      'Corporate gifts, branded merchandise, event items, and custom promotional products.',
    titleId: 'product-promotional-products-title',
    descId: 'product-promotional-products-desc',
    imageId: 'product-promotional-products-48c1a6',
    imageUrl: getPickedImageUrl('product-promotional-products-48c1a6'),
  },
  {
    id: 'hardware-light-industrial',
    title: 'Hardware & Light Industrial',
    description:
      'Tools, fittings, metal components, and practical industrial support products.',
    titleId: 'product-hardware-light-industrial-title',
    descId: 'product-hardware-light-industrial-desc',
    imageId: 'product-hardware-light-industrial-a8d019',
    imageUrl: getPickedImageUrl('product-hardware-light-industrial-a8d019'),
  },
  {
    id: 'custom-oem-items',
    title: 'Custom OEM Items',
    description:
      'Buyer-specified products that need supplier matching, sampling, and production follow-up.',
    titleId: 'product-custom-oem-items-title',
    descId: 'product-custom-oem-items-desc',
    imageId: 'product-custom-oem-items-b1e2d4',
    imageUrl: getPickedImageUrl('product-custom-oem-items-b1e2d4'),
  },
]

export const problemsWeSolve = [
  'Too many supplier options with limited visibility into who is actually reliable',
  'Difficulty confirming whether a factory can meet your specifications and production standards',
  'Quality issues discovered too late, after shipment or after goods reach your warehouse',
  'Communication gaps between buyer, supplier, inspection teams, and freight partners',
]

export const trustPoints = [
  'China-based sourcing support for overseas buyers who need local follow-through',
  'Structured supplier verification before major commitment',
  'Inspection and production follow-up focused on operational clarity',
  'Clear English communication for buyers, sourcing teams, and management stakeholders',
]

export const caseStudies = [
  {
    id: 'kitchen-brand-launch',
    title: 'Kitchen brand launch support',
    summary:
      'A growing importer needed supplier comparison, sample follow-up, packaging coordination, and pre-shipment quality checks for a new cookware line.',
    challenge:
      'The buyer had several quotes but limited confidence in production consistency and packaging control.',
    solution:
      'We screened factories, coordinated sample feedback, followed production checkpoints, and aligned packaging details before inspection.',
    outcome:
      'The buyer moved forward with a clearer supplier decision and a more controlled first shipment.',
    titleId: 'case-kitchen-brand-launch-title',
    descId: 'case-kitchen-brand-launch-desc',
    imageId: 'case-kitchen-brand-launch-c5020d',
    imageUrl: getPickedImageUrl('case-kitchen-brand-launch-c5020d'),
  },
  {
    id: 'retail-display-packaging',
    title: 'Retail packaging consolidation',
    summary:
      'A European buyer needed multiple printed packaging components aligned across different suppliers and shipment windows.',
    challenge:
      'Artwork timing, packaging consistency, and delivery coordination were affecting launch readiness.',
    solution:
      'We coordinated packaging suppliers, tracked milestones, and supported inspection readiness before shipment handoff.',
    outcome:
      'The buyer received better visibility over timelines, packaging status, and shipment preparation.',
    titleId: 'case-retail-display-packaging-title',
    descId: 'case-retail-display-packaging-desc',
    imageId: 'case-retail-display-packaging-6e4ab8',
    imageUrl: getPickedImageUrl('case-retail-display-packaging-6e4ab8'),
  },
  {
    id: 'electronics-accessory-scaling',
    title: 'Accessory sourcing during scale-up',
    summary:
      'An online seller needed a practical sourcing process for repeat accessory orders with tighter inspection control.',
    challenge:
      'Rapid reorders created pressure on supplier communication, production timing, and inspection scheduling.',
    solution:
      'We created a repeatable supplier communication flow, tracked production milestones, and coordinated shipment readiness checks.',
    outcome:
      'The buyer gained a steadier operational rhythm for follow-up, inspection, and shipping coordination.',
    titleId: 'case-electronics-accessory-scaling-title',
    descId: 'case-electronics-accessory-scaling-desc',
    imageId: 'case-electronics-accessory-scaling-f2196c',
    imageUrl: getPickedImageUrl('case-electronics-accessory-scaling-f2196c'),
  },
]

export const faqItems = [
  {
    question: 'What information should I send for a sourcing quote?',
    answer:
      'The most useful starting point is your product description, target quantity, key specifications, destination market, required standards, and target timeline.',
  },
  {
    question: 'Can you help if I already have a supplier in China?',
    answer:
      'Yes. We can focus on verification, factory audit coordination, production follow-up, inspection, or shipping support for an existing supplier relationship.',
  },
  {
    question: 'Do you work with small and medium order volumes?',
    answer:
      'Yes. Order size affects the supplier strategy, but many buyers need the same verification and quality control support regardless of scale.',
  },
  {
    question: 'Can you support custom or OEM products?',
    answer:
      'Yes. Custom products usually need more supplier screening, sample management, specification alignment, and production follow-up.',
  },
  {
    question: 'Do you handle freight directly?',
    answer:
      'We coordinate shipping readiness and supplier-side handoff. Final freight booking can stay with your nominated forwarder or logistics partner.',
  },
]

export const blogPosts = [
  {
    id: 'supplier-verification-checklist',
    category: 'Supplier Verification',
    title: 'A practical supplier verification checklist before you place a PO',
    excerpt:
      'What overseas buyers should review before approving samples, deposits, and production.',
    titleId: 'blog-supplier-verification-checklist-title',
    descId: 'blog-supplier-verification-checklist-desc',
    imageId: 'blog-supplier-verification-checklist-4fd2b7',
    imageUrl: getPickedImageUrl('blog-supplier-verification-checklist-4fd2b7'),
  },
  {
    id: 'pre-shipment-inspection-brief',
    category: 'Quality Control',
    title: 'How to brief a pre-shipment inspection for clearer results',
    excerpt:
      'Simple ways to align inspection criteria, defect thresholds, and reporting expectations.',
    titleId: 'blog-pre-shipment-inspection-brief-title',
    descId: 'blog-pre-shipment-inspection-brief-desc',
    imageId: 'blog-pre-shipment-inspection-brief-2aa17e',
    imageUrl: getPickedImageUrl('blog-pre-shipment-inspection-brief-2aa17e'),
  },
  {
    id: 'sampling-to-production',
    category: 'Production Follow-Up',
    title: 'What often goes wrong between approved sample and mass production',
    excerpt:
      'Common gaps in execution and how sourcing follow-up helps reduce surprises.',
    titleId: 'blog-sampling-to-production-title',
    descId: 'blog-sampling-to-production-desc',
    imageId: 'blog-sampling-to-production-a71bca',
    imageUrl: getPickedImageUrl('blog-sampling-to-production-a71bca'),
  },
  {
    id: 'shipping-handoff-planning',
    category: 'Shipping Coordination',
    title:
      'Shipping handoff planning: what buyers should confirm before cargo leaves the factory',
    excerpt:
      'A buyer-focused checklist covering packing, documents, inspection release, and forwarder coordination.',
    titleId: 'blog-shipping-handoff-planning-title',
    descId: 'blog-shipping-handoff-planning-desc',
    imageId: 'blog-shipping-handoff-planning-9154de',
    imageUrl: getPickedImageUrl('blog-shipping-handoff-planning-9154de'),
  },
]

export const contactHighlights = [
  {
    title: 'Buyer-focused scope review',
    description:
      'We review your brief around product fit, supplier risk, QC priorities, and shipping considerations.',
  },
  {
    title: 'China-based coordination',
    description:
      'Support is designed for overseas buyers who need practical local follow-through in China.',
  },
  {
    title: 'Clear next-step planning',
    description:
      'You receive a practical response focused on sourcing route, verification needs, and operational next steps.',
  },
]

export const serviceOptions = services.map((service) => service.title)
