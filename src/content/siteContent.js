export const navigationItems = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'How It Works', to: '/how-it-works' },
  { label: 'Products We Source', to: '/products' },
  { label: 'Case Studies', to: '/case-studies' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contact', to: '/contact' },
]

export const stats = [
  { value: '3–5', label: 'working days for a typical supplier shortlist' },
  { value: '1', label: 'local team coordinating suppliers, QC, and shipping' },
  { value: '100%', label: 'focus on practical sourcing execution in China' },
]

export const services = [
  {
    slug: 'supplier-search',
    title: 'Supplier Search & Shortlisting',
    summary:
      'We identify suitable factories and trading partners based on product, order volume, target market, and compliance needs.',
    points: ['RFQ support', 'supplier comparison', 'capacity and specialization review'],
  },
  {
    slug: 'verification',
    title: 'Supplier Verification',
    summary:
      'We verify business registration, manufacturing capability, communication reliability, and risk signals before you move forward.',
    points: ['license checks', 'background screening', 'factory capability review'],
  },
  {
    slug: 'factory-audit',
    title: 'Factory Audit Coordination',
    summary:
      'We help confirm whether a supplier is the right operational fit before sample approval or deposit payment.',
    points: ['on-site validation', 'process review', 'finding summary report'],
  },
  {
    slug: 'quality-control',
    title: 'Quality Inspection',
    summary:
      'We coordinate pre-production, inline, and pre-shipment inspections to reduce defects and prevent avoidable surprises.',
    points: ['inspection booking', 'AQL-based checks', 'photo and issue reporting'],
  },
  {
    slug: 'production-follow-up',
    title: 'Production Follow-Up',
    summary:
      'We stay in touch with suppliers during production to monitor timelines, sample revisions, and packaging readiness.',
    points: ['milestone tracking', 'delay escalation', 'packaging review'],
  },
  {
    slug: 'shipping-support',
    title: 'Shipping Coordination',
    summary:
      'We support booking readiness, carton data checks, shipping document coordination, and handoff to your freight workflow.',
    points: ['shipment planning', 'carton and label checks', 'document coordination'],
  },
]

export const processSteps = [
  {
    step: '01',
    title: 'Share Your Product Brief',
    summary:
      'Tell us what you need, your target market, quantity expectations, quality requirements, and delivery destination.',
    deliverable: 'A clear sourcing brief and qualification call or email follow-up.',
  },
  {
    step: '02',
    title: 'Supplier Search & Screening',
    summary:
      'We identify suitable suppliers and screen them against your product category, communication quality, and production fit.',
    deliverable: 'A practical shortlist with sourcing notes and next-step recommendation.',
  },
  {
    step: '03',
    title: 'Verification, Sampling & Negotiation Support',
    summary:
      'We coordinate due diligence, clarify specifications, and support sample communication before production starts.',
    deliverable: 'Verified supplier progress, sample feedback loop, and clearer commercial alignment.',
  },
  {
    step: '04',
    title: 'Production & Quality Control',
    summary:
      'We follow production milestones and coordinate inspection checkpoints before goods are released.',
    deliverable: 'Inspection reporting and earlier visibility into issues or delays.',
  },
  {
    step: '05',
    title: 'Shipment Readiness',
    summary:
      'We help confirm packing, documents, and readiness for shipping handoff.',
    deliverable: 'Shipment coordination support aligned with your freight or warehouse plan.',
  },
]

export const productCategories = [
  {
    slug: 'home-garden',
    title: 'Home & Garden',
    summary:
      'Housewares, storage items, kitchen tools, seasonal accessories, and practical consumer goods.',
    bullets: ['packaging checks', 'material confirmation', 'retail-ready presentation'],
  },
  {
    slug: 'hardware-tools',
    title: 'Hardware & Tools',
    summary:
      'Hand tools, fittings, workshop items, and industrial-use accessories that require stable production control.',
    bullets: ['spec comparison', 'function checks', 'carton durability review'],
  },
  {
    slug: 'bags-accessories',
    title: 'Bags & Accessories',
    summary:
      'Soft goods, travel accessories, sewn products, and private-label accessories with branding requirements.',
    bullets: ['sample revisions', 'logo placement review', 'workmanship control'],
  },
  {
    slug: 'packaging-display',
    title: 'Packaging & Display Items',
    summary:
      'Boxes, inserts, labels, and display components that need color, print, and transit consistency.',
    bullets: ['print matching', 'assembly checks', 'drop-risk reduction'],
  },
  {
    slug: 'pet-products',
    title: 'Pet Products',
    summary:
      'Pet accessories and practical pet care items where material safety and finish consistency matter.',
    bullets: ['material review', 'fit and finish checks', 'packout review'],
  },
  {
    slug: 'custom-oem',
    title: 'Custom OEM / ODM Projects',
    summary:
      'Projects that need sourcing support around drawings, samples, vendor coordination, and production follow-up.',
    bullets: ['supplier matching', 'sampling coordination', 'change tracking'],
  },
]

export const problemsWeSolve = [
  {
    title: 'Too many suppliers, not enough clarity',
    description:
      'We narrow options to the suppliers that are most relevant to your product and buying stage.',
  },
  {
    title: 'Uncertainty about whether a factory is real or reliable',
    description:
      'We verify registration, capability, and communication quality before you commit more time or money.',
  },
  {
    title: 'Quality surprises close to shipment',
    description:
      'We coordinate inspections and raise issues earlier so problems can be addressed before goods leave the factory.',
  },
  {
    title: 'Slow follow-up during production',
    description:
      'We keep communication moving and track milestones so you get clearer visibility on progress and delays.',
  },
]

export const trustPoints = [
  {
    title: 'China-based execution support',
    description:
      'Local follow-up helps close the communication gap between overseas buyers and Chinese suppliers.',
  },
  {
    title: 'Operational sourcing focus',
    description:
      'The work centers on verification, inspection, production follow-up, and shipment readiness — not generic consulting.',
  },
  {
    title: 'Practical communication',
    description:
      'We keep recommendations clear, useful, and aligned with your buying decisions.',
  },
  {
    title: 'Built for overseas buyers',
    description:
      'The process is designed for importers, brands, wholesalers, and procurement teams buying from China remotely.',
  },
]

export const caseStudies = [
  {
    slug: 'kitchenware-range',
    sector: 'Kitchenware Brand',
    title: 'From unclear supplier options to a workable shortlist and smoother pre-shipment release',
    challenge:
      'An overseas buyer needed alternative kitchenware suppliers after communication problems with their existing source.',
    solution:
      'We screened suppliers, compared production fit, supported sample follow-up, and coordinated a pre-shipment inspection.',
    outcome:
      'The buyer moved forward with a more suitable supplier and gained clearer quality visibility before shipment.',
  },
  {
    slug: 'retail-display',
    sector: 'Retail Packaging Project',
    title: 'Improving packaging consistency for a seasonal retail program',
    challenge:
      'A buyer needed better control of print quality, carton labeling, and delivery timing across multiple SKUs.',
    solution:
      'We tracked packaging details, clarified requirements with the supplier, and checked readiness before release.',
    outcome:
      'The client received a more organized shipment process and fewer late-stage packaging issues.',
  },
  {
    slug: 'pet-accessories',
    sector: 'Pet Products Importer',
    title: 'Reducing risk on a new category launch with verification and QC support',
    challenge:
      'The importer was launching a new pet accessory line and needed help validating supplier capability.',
    solution:
      'We supported supplier screening, sample coordination, and inspection planning before shipment.',
    outcome:
      'The launch moved ahead with stronger confidence in supplier fit and product consistency.',
  },
]

export const faqItems = [
  {
    question: 'What kinds of buyers do you usually support?',
    answer:
      'We work with overseas brands, importers, wholesalers, retailers, and procurement teams that buy from China and want clearer execution support.',
  },
  {
    question: 'Do you only work with large orders?',
    answer:
      'Not necessarily. The right fit depends on product type, customization, sourcing complexity, and whether the project justifies active sourcing support.',
  },
  {
    question: 'Can you help if I already have a supplier?',
    answer:
      'Yes. Many clients ask us to verify an existing supplier, inspect quality, or follow production rather than start from zero.',
  },
  {
    question: 'Do you handle shipping directly?',
    answer:
      'We focus on shipment readiness and coordination support. We can work alongside your freight forwarder or existing logistics arrangement.',
  },
  {
    question: 'What should I include in my inquiry?',
    answer:
      'The most useful inquiries include product details, target quantity, destination market, timing, and the sourcing support you need.',
  },
]

export const blogPosts = [
  {
    category: 'Supplier Verification',
    title: 'How to check whether a China supplier is a real factory or only a trading company',
    excerpt:
      'A practical checklist for reviewing supplier background, specialization, responsiveness, and operational fit before ordering samples.',
    readTime: '5 min read',
  },
  {
    category: 'Quality Control',
    title: 'When to use pre-production, inline, and pre-shipment inspections',
    excerpt:
      'Understand the purpose of each inspection stage and where it helps reduce risk for overseas buyers.',
    readTime: '4 min read',
  },
  {
    category: 'Production Follow-Up',
    title: 'What to monitor after sample approval and before goods are packed',
    excerpt:
      'Key checkpoints for materials, packaging, timelines, and communication during manufacturing.',
    readTime: '6 min read',
  },
  {
    category: 'Shipping Coordination',
    title: 'Shipment readiness mistakes that often create last-minute delays',
    excerpt:
      'Carton details, labels, packing lists, and documentation issues that buyers should confirm before cargo handoff.',
    readTime: '5 min read',
  },
]

export const serviceNeedOptions = [
  'Supplier search',
  'Supplier verification',
  'Factory audit',
  'Quality inspection',
  'Production follow-up',
  'Shipping coordination',
]
