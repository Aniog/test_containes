export const CTA_LABEL = 'Get a Free Sourcing Quote'

export const IMAGE_PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"

export const navigation = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'How It Works', path: '/how-it-works' },
  { label: 'Products We Source', path: '/products-we-source' },
  { label: 'Case Studies', path: '/case-studies' },
  { label: 'Blog', path: '/blog' },
  { label: 'Contact', path: '/contact' },
]

export const heroHighlights = [
  'Supplier search and shortlist building',
  'Factory verification and production follow-up',
  'Quality inspection and shipping coordination',
]

export const services = [
  {
    id: 'supplier-search',
    title: 'Supplier Search & Shortlisting',
    summary:
      'We identify suitable factories based on your product, MOQ, compliance needs, and target market requirements.',
    bullets: [
      'Requirement review before outreach',
      'Shortlist based on capability, pricing logic, and communication quality',
      'Clear comparison notes for decision-making',
    ],
    titleId: 'service-supplier-search-title',
    summaryId: 'service-supplier-search-summary',
    imgId: 'service-supplier-search-71ab4d',
  },
  {
    id: 'supplier-verification',
    title: 'Supplier Verification',
    summary:
      'Before you place orders, we verify business credentials, production capability, and the reality behind the quotation.',
    bullets: [
      'Business and factory background checks',
      'Commercial sanity check on claims and pricing',
      'Risk notes before supplier approval',
    ],
    titleId: 'service-supplier-verification-title',
    summaryId: 'service-supplier-verification-summary',
    imgId: 'service-supplier-verification-8fb53a',
  },
  {
    id: 'factory-audits',
    title: 'Factory Visits & Audits',
    summary:
      'We can visit factories in China to confirm production setup, quality systems, and operational readiness.',
    bullets: [
      'On-site verification of key workshops',
      'Photo and video documentation',
      'Practical audit feedback instead of generic checklists',
    ],
    titleId: 'service-factory-audits-title',
    summaryId: 'service-factory-audits-summary',
    imgId: 'service-factory-audits-b203ef',
  },
  {
    id: 'quality-control',
    title: 'Quality Inspection',
    summary:
      'We inspect quality at the right stage to reduce surprises before shipment leaves the factory.',
    bullets: [
      'Pre-production and inline checkpoints',
      'Pre-shipment inspection with issue reporting',
      'Follow-up with suppliers on corrective actions',
    ],
    titleId: 'service-quality-control-title',
    summaryId: 'service-quality-control-summary',
    imgId: 'service-quality-control-56ca8d',
  },
  {
    id: 'production-follow-up',
    title: 'Production Follow-Up',
    summary:
      'We stay on top of progress, communicate with suppliers, and flag delays or specification issues early.',
    bullets: [
      'Timeline follow-up during production',
      'Issue escalation when specs drift',
      'Concise progress updates for your team',
    ],
    titleId: 'service-production-follow-up-title',
    summaryId: 'service-production-follow-up-summary',
    imgId: 'service-production-follow-up-e718c4',
  },
  {
    id: 'shipping-coordination',
    title: 'Shipping Coordination',
    summary:
      'We coordinate with suppliers and forwarders so your order is prepared correctly for export and handover.',
    bullets: [
      'Packing and shipment readiness checks',
      'Documentation coordination with suppliers',
      'Support through handover to freight partners',
    ],
    titleId: 'service-shipping-coordination-title',
    summaryId: 'service-shipping-coordination-summary',
    imgId: 'service-shipping-coordination-a41ec5',
  },
]

export const processSteps = [
  {
    id: 'brief',
    step: '01',
    title: 'Share your product brief',
    description:
      'Tell us what you need, target price range, expected quantity, destination market, and any must-have standards.',
  },
  {
    id: 'screen',
    step: '02',
    title: 'We screen and verify suppliers',
    description:
      'We compare possible suppliers, validate the fit, and help you avoid wasting time on weak or mismatched factories.',
  },
  {
    id: 'sample',
    step: '03',
    title: 'Sampling and quotation review',
    description:
      'We assist with sample coordination, quotation checks, and supplier communication before you place an order.',
  },
  {
    id: 'production',
    step: '04',
    title: 'Production follow-up and QC',
    description:
      'Once production starts, we track progress, review issues, and arrange inspection checkpoints when needed.',
  },
  {
    id: 'shipping',
    step: '05',
    title: 'Shipping handover',
    description:
      'We help coordinate packing, documents, and supplier communication through shipment readiness and handover.',
  },
]

export const productCategories = [
  {
    id: 'homeware',
    title: 'Homeware & Kitchenware',
    description: 'Cookware, tableware, storage, and everyday household products.',
    titleId: 'product-homeware-title',
    descId: 'product-homeware-desc',
    imgId: 'product-homeware-6a2ec9',
  },
  {
    id: 'packaging',
    title: 'Packaging & Printing',
    description: 'Retail boxes, labels, inserts, and branded packaging components.',
    titleId: 'product-packaging-title',
    descId: 'product-packaging-desc',
    imgId: 'product-packaging-f24ab7',
  },
  {
    id: 'consumer-goods',
    title: 'Consumer Goods',
    description: 'General merchandise with repeat-order sourcing and supplier management needs.',
    titleId: 'product-consumer-goods-title',
    descId: 'product-consumer-goods-desc',
    imgId: 'product-consumer-goods-b15f24',
  },
  {
    id: 'pet-products',
    title: 'Pet Products',
    description: 'Accessories, feeders, travel items, and private-label pet lines.',
    titleId: 'product-pet-products-title',
    descId: 'product-pet-products-desc',
    imgId: 'product-pet-products-2f59dd',
  },
  {
    id: 'promotional',
    title: 'Promotional Products',
    description: 'Custom branded items for campaigns, distributors, and corporate programs.',
    titleId: 'product-promotional-title',
    descId: 'product-promotional-desc',
    imgId: 'product-promotional-9e62fa',
  },
  {
    id: 'hardware',
    title: 'Light Industrial & Hardware',
    description: 'Selected components and industrial products that need practical supplier screening.',
    titleId: 'product-hardware-title',
    descId: 'product-hardware-desc',
    imgId: 'product-hardware-14cab6',
  },
]

export const problemsWeSolve = [
  'You receive quotations but do not know which supplier is actually reliable.',
  'Communication gaps create misunderstandings on specs, quality expectations, or timelines.',
  'You need someone in China to check factory reality before you commit payment.',
  'Production progress becomes unclear after deposit and issues surface too late.',
  'You want quality inspection before shipment instead of discovering problems after arrival.',
  'Shipping preparation and supplier coordination take too much time for your internal team.',
]

export const trustPoints = [
  {
    title: 'China-based execution',
    description:
      'We work close to factories and suppliers, which helps with faster follow-up and on-the-ground verification.',
  },
  {
    title: 'Practical B2B communication',
    description:
      'We focus on concrete product, quality, and shipping details rather than vague sales talk.',
  },
  {
    title: 'Inspection-minded approach',
    description:
      'Quality checkpoints, issue visibility, and supplier accountability are built into the process.',
  },
  {
    title: 'International buyer perspective',
    description:
      'We support overseas buyers who need clear updates, realistic sourcing guidance, and dependable coordination.',
  },
]

export const caseStudies = [
  {
    id: 'homeware-uk',
    client: 'UK Homeware Importer',
    title: 'Reduced supplier risk before switching factories',
    challenge:
      'The buyer needed a new kitchenware supplier after repeated delays and inconsistent finishing from an existing factory.',
    action:
      'We built a shortlist, checked factory capability, compared sample quality, and followed up on production milestones.',
    result:
      'The buyer moved forward with a better-matched supplier and gained more predictable communication through production.',
    titleId: 'case-homeware-uk-title',
    summaryId: 'case-homeware-uk-summary',
    imgId: 'case-homeware-uk-1e92ac',
  },
  {
    id: 'pet-us',
    client: 'US Pet Accessories Brand',
    title: 'Improved pre-shipment visibility on a custom order',
    challenge:
      'A branded pet product order needed closer production follow-up and inspection support before export.',
    action:
      'We coordinated with the supplier, checked packaging readiness, and arranged a quality inspection before shipment.',
    result:
      'The client had clearer visibility on readiness and resolved issues before the order was handed over for export.',
    titleId: 'case-pet-us-title',
    summaryId: 'case-pet-us-summary',
    imgId: 'case-pet-us-a35ce6',
  },
  {
    id: 'hardware-de',
    client: 'German Industrial Distributor',
    title: 'Added local verification for a new Chinese supply line',
    challenge:
      'The distributor needed local support to evaluate a new supplier and manage production communication from China.',
    action:
      'We verified the factory, reviewed production readiness, and coordinated updates with the buyer’s procurement team.',
    result:
      'The sourcing process became easier to manage remotely, with stronger visibility on supplier fit and delivery status.',
    titleId: 'case-hardware-de-title',
    summaryId: 'case-hardware-de-summary',
    imgId: 'case-hardware-de-40bc72',
  },
]

export const blogPosts = [
  {
    id: 'verify-factory',
    title: 'How to verify a factory before placing your first order in China',
    excerpt:
      'A practical checklist for buyers who want to confirm that a supplier is the right operational fit before paying a deposit.',
    tag: 'Supplier Verification',
    titleId: 'blog-verify-factory-title',
    excerptId: 'blog-verify-factory-excerpt',
    imgId: 'blog-verify-factory-cc42a4',
  },
  {
    id: 'inspection-timing',
    title: 'When quality inspection matters most during production',
    excerpt:
      'Why pre-production, inline, and pre-shipment checks solve different problems and when to use each one.',
    tag: 'Quality Control',
    titleId: 'blog-inspection-timing-title',
    excerptId: 'blog-inspection-timing-excerpt',
    imgId: 'blog-inspection-timing-98fe17',
  },
  {
    id: 'sampling-mistakes',
    title: 'Common sampling mistakes overseas buyers make with Chinese suppliers',
    excerpt:
      'Sampling can reveal supplier fit early, but only if requirements, revisions, and decision criteria are handled correctly.',
    tag: 'Sampling',
    titleId: 'blog-sampling-mistakes-title',
    excerptId: 'blog-sampling-mistakes-excerpt',
    imgId: 'blog-sampling-mistakes-f73d19',
  },
  {
    id: 'shipping-handover',
    title: 'What to confirm before your supplier hands cargo to the forwarder',
    excerpt:
      'A straightforward review of packing, documentation, labeling, and handover coordination before export.',
    tag: 'Shipping',
    titleId: 'blog-shipping-handover-title',
    excerptId: 'blog-shipping-handover-excerpt',
    imgId: 'blog-shipping-handover-2f4a1d',
  },
]

export const faqItems = [
  {
    question: 'Do you only help with large-volume buyers?',
    answer:
      'We support established overseas buyers as well as growing importers. The most important factor is whether the inquiry is clear enough for a serious sourcing process.',
  },
  {
    question: 'Can you help if we already have a supplier in China?',
    answer:
      'Yes. Many buyers contact us for supplier verification, production follow-up, quality inspection, or shipping coordination with an existing supplier.',
  },
  {
    question: 'What products do you source?',
    answer:
      'We work across practical B2B product categories such as homeware, packaging, promotional products, pet products, consumer goods, and selected industrial items.',
  },
  {
    question: 'Do you guarantee the lowest price?',
    answer:
      'No. Our focus is helping buyers balance supplier reliability, product fit, quality, and total sourcing risk rather than chasing the lowest quotation only.',
  },
  {
    question: 'How do we start?',
    answer:
      'Send your product brief, quantity estimate, target market, and what support you need. We review the inquiry and come back with the next practical steps.',
  },
]

export const serviceOptions = [
  'Supplier search',
  'Supplier verification',
  'Factory visit or audit',
  'Quality inspection',
  'Production follow-up',
  'Shipping coordination',
]

export const categoryOptions = [
  'Homeware & kitchenware',
  'Packaging & printing',
  'Consumer goods',
  'Pet products',
  'Promotional products',
  'Light industrial & hardware',
  'Other',
]

export const companyDetails = {
  name: 'SSourcing China',
  tagline: 'China-based sourcing support for overseas buyers',
  email: 'hello@ssourcingchina.com',
  location: 'Based in China, serving global buyers',
}
