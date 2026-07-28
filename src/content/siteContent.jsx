import {
  BadgeCheck,
  Boxes,
  ClipboardCheck,
  Factory,
  FileSearch,
  Globe2,
  MessagesSquare,
  PackageCheck,
  Route,
  Scale,
  Search,
  ShieldCheck,
  Truck,
} from 'lucide-react'

export const navigationItems = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'How It Works', to: '/how-it-works' },
  { label: 'Products We Source', to: '/products-we-source' },
  { label: 'Case Studies', to: '/case-studies' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contact', to: '/contact' },
]

export const pageMeta = {
  '/': {
    title: 'China Sourcing Agent | Supplier Verification, QC & Shipping | SSourcing China',
    description:
      'SSourcing China helps overseas buyers find reliable suppliers, verify factories, inspect quality, follow production, and coordinate shipping from China.',
  },
  '/services': {
    title: 'Sourcing Services | SSourcing China',
    description:
      'Explore supplier search, factory verification, quality inspection, production follow-up, and shipping coordination services from SSourcing China.',
  },
  '/how-it-works': {
    title: 'How It Works | SSourcing China',
    description:
      'See the sourcing process SSourcing China uses to move from inquiry and supplier verification to quality checks and shipment coordination.',
  },
  '/products-we-source': {
    title: 'Products We Source | SSourcing China',
    description:
      'Review the product categories SSourcing China commonly sources for overseas importers, brands, distributors, and project buyers.',
  },
  '/case-studies': {
    title: 'Case Studies | SSourcing China',
    description:
      'Read practical sourcing case studies covering supplier verification, production follow-up, inspection control, and shipment coordination.',
  },
  '/blog': {
    title: 'Blog | SSourcing China',
    description:
      'Practical articles for global buyers about supplier checks, factory verification, quality inspection, quotations, and shipping from China.',
  },
  '/contact': {
    title: 'Contact | SSourcing China',
    description:
      'Contact SSourcing China for a clear sourcing discussion and a free quote for supplier search, quality inspection, and shipping coordination.',
  },
}

export const heroBenefits = [
  'Supplier verification',
  'Quality inspection',
  'Production follow-up',
  'Shipping coordination',
]

export const serviceDetails = [
  {
    id: 'supplier-search',
    icon: Search,
    title: 'Supplier Search & Shortlisting',
    description:
      'We identify manufacturers that fit your product category, target market, MOQ, and quality expectations.',
    bullets: [
      'Targeted factory shortlist based on product specialization',
      'Quote and MOQ comparison in clear English',
      'Initial communication and responsiveness screening',
    ],
  },
  {
    id: 'supplier-verification',
    icon: ShieldCheck,
    title: 'Supplier & Factory Verification',
    description:
      'We verify supplier legitimacy and basic operating capability before you commit time or money.',
    bullets: [
      'Business license and company background review',
      'Factory capability and process checks',
      'Practical risk notes before sample or order stage',
    ],
  },
  {
    id: 'sampling-quotation',
    icon: FileSearch,
    title: 'Sampling & Quotation Review',
    description:
      'We compare offers, clarify specifications, and keep samples aligned with your actual buying requirements.',
    bullets: [
      'Specification and packaging clarification',
      'Quotation comparison with visible trade-offs',
      'Sample coordination and supplier follow-up',
    ],
  },
  {
    id: 'quality-inspection',
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    description:
      'We help reduce surprises by checking goods before they leave the factory or while production is in progress.',
    bullets: [
      'In-process and pre-shipment inspection options',
      'Practical issue reporting with photos and comments',
      'Follow-up communication on corrective actions',
    ],
  },
  {
    id: 'production-follow-up',
    icon: PackageCheck,
    title: 'Production Follow-up',
    description:
      'We stay in touch with suppliers during manufacturing so your timeline, packaging, and specifications stay visible.',
    bullets: [
      'Order status tracking and milestone follow-up',
      'Packaging and labeling confirmation',
      'Progress updates for overseas buying teams',
    ],
  },
  {
    id: 'shipping-coordination',
    icon: Truck,
    title: 'Shipping Coordination',
    description:
      'We coordinate shipment readiness, handover, and document communication so cargo can move with fewer last-minute issues.',
    bullets: [
      'Carton, mark, and packing list confirmation',
      'Shipment readiness coordination with suppliers',
      'Communication support with your forwarder or nominated partner',
    ],
  },
]

export const processSteps = [
  {
    step: '01',
    title: 'Share your sourcing brief',
    description:
      'Send your product requirements, target quantity, quality expectations, packaging needs, and destination market.',
    deliverables: ['Requirement review', 'Clarification questions', 'Practical next-step plan'],
  },
  {
    step: '02',
    title: 'Search and verify suppliers',
    description:
      'We research suitable suppliers, compare options, and flag obvious risks before sample or order decisions move forward.',
    deliverables: ['Supplier shortlist', 'Verification notes', 'Quote comparison'],
  },
  {
    step: '03',
    title: 'Confirm samples and commercial terms',
    description:
      'We help align product details, packaging, lead time, and order terms so expectations are clear on both sides.',
    deliverables: ['Sample follow-up', 'Specification alignment', 'Order confirmation support'],
  },
  {
    step: '04',
    title: 'Follow production and check quality',
    description:
      'During manufacturing, we track milestones, confirm key points, and arrange inspections where needed.',
    deliverables: ['Progress updates', 'Inspection coordination', 'Issue follow-up'],
  },
  {
    step: '05',
    title: 'Coordinate shipment handover',
    description:
      'We help make sure packing, documents, and readiness details are coordinated before cargo leaves the factory.',
    deliverables: ['Shipment readiness check', 'Packing confirmation', 'Forwarder communication support'],
  },
]

export const productCategories = [
  {
    id: 'home-kitchen',
    title: 'Home & Kitchen Products',
    description:
      'Cookware, drinkware, storage, utensils, and practical household items for retail and distribution.',
    examples: ['Cookware accessories', 'Drinkware', 'Storage solutions'],
    imgId: 'product-home-kitchen-a51c32',
    titleId: 'product-home-kitchen-title',
    descId: 'product-home-kitchen-desc',
  },
  {
    id: 'packaging-printing',
    title: 'Packaging & Printed Materials',
    description:
      'Custom boxes, labels, inserts, manuals, and retail-ready packaging for branded products.',
    examples: ['Gift boxes', 'Labels', 'Instruction leaflets'],
    imgId: 'product-packaging-printing-b62d43',
    titleId: 'product-packaging-printing-title',
    descId: 'product-packaging-printing-desc',
  },
  {
    id: 'consumer-accessories',
    title: 'Consumer Product Accessories',
    description:
      'Everyday accessories and general merchandise that require careful supplier matching and quality follow-up.',
    examples: ['Phone accessories', 'Travel items', 'Daily-use products'],
    imgId: 'product-consumer-accessories-c73e54',
    titleId: 'product-consumer-accessories-title',
    descId: 'product-consumer-accessories-desc',
  },
  {
    id: 'promotional-items',
    title: 'Promotional & Custom Items',
    description:
      'Custom logo products, event merchandise, and branded giveaways with packaging and deadline coordination.',
    examples: ['Corporate gifts', 'Branded merchandise', 'Event giveaways'],
    imgId: 'product-promotional-items-d84f65',
    titleId: 'product-promotional-items-title',
    descId: 'product-promotional-items-desc',
  },
  {
    id: 'furniture-lighting',
    title: 'Furniture & Lighting',
    description:
      'Project-based sourcing for hospitality, office, and commercial environments with close specification checks.',
    examples: ['Loose furniture', 'Decor lighting', 'Project fixtures'],
    imgId: 'product-furniture-lighting-e95g76',
    titleId: 'product-furniture-lighting-title',
    descId: 'product-furniture-lighting-desc',
  },
  {
    id: 'industrial-parts',
    title: 'Industrial Components & Spare Parts',
    description:
      'Factory-made parts and technical items where consistency, documentation, and supplier capability matter.',
    examples: ['Metal parts', 'Rubber components', 'Assembly items'],
    imgId: 'product-industrial-parts-f16h87',
    titleId: 'product-industrial-parts-title',
    descId: 'product-industrial-parts-desc',
  },
]

export const problemList = [
  'Too many supplier options, but limited visibility into who is actually reliable.',
  'Quotations that look similar on paper but hide differences in materials, packaging, or lead time.',
  'Slow supplier follow-up that creates uncertainty for overseas buying teams.',
  'Quality surprises discovered too late, after cargo is packed or shipped.',
  'Production delays without clear updates or practical local follow-up.',
  'Shipment handover issues caused by missing packing details or incomplete coordination.',
]

export const trustPoints = [
  {
    icon: Factory,
    title: 'China-based local follow-up',
    description: 'We work close to suppliers and factories, so communication does not rely only on email chains across time zones.',
  },
  {
    icon: BadgeCheck,
    title: 'Practical verification before commitment',
    description: 'Supplier screening and factory checks help reduce avoidable sourcing mistakes early in the process.',
  },
  {
    icon: MessagesSquare,
    title: 'Clear English communication',
    description: 'Updates, comparisons, and issue notes are presented in a practical way for overseas decision makers.',
  },
  {
    icon: Route,
    title: 'One workflow from sourcing to shipping',
    description: 'Search, sample coordination, inspection follow-up, and shipment readiness are kept connected.',
  },
  {
    icon: Globe2,
    title: 'Built for international buyers',
    description: 'The site content, process, and service scope are designed for importers, brands, distributors, and project teams.',
  },
  {
    icon: Scale,
    title: 'Balanced recommendations',
    description: 'We focus on suitability, consistency, and execution rather than exaggerated promises or lowest-price-only sourcing.',
  },
]

export const caseStudies = [
  {
    title: 'Kitchenware importer needed a more dependable supplier shortlist',
    sector: 'Retail importer',
    challenge:
      'An overseas buyer had multiple quotations for kitchen accessories but limited confidence in which supplier could meet packaging, finish, and lead-time requirements.',
    solution:
      'SSourcing China compared factories, clarified specifications, coordinated samples, and kept packaging details visible during final supplier selection.',
    result:
      'The buyer moved forward with a clearer supplier choice, better quote comparison, and fewer unknowns before order placement.',
  },
  {
    title: 'Hospitality project required production follow-up across several items',
    sector: 'Project procurement',
    challenge:
      'A hotel supply buyer needed help coordinating different factories for furniture, lighting, and packaging details on a fixed project schedule.',
    solution:
      'We followed production milestones, confirmed packaging and labeling points, and maintained local communication with suppliers before shipment handover.',
    result:
      'The procurement team received clearer status updates and better coordination across multiple purchase lines.',
  },
  {
    title: 'Industrial parts distributor wanted tighter pre-shipment control',
    sector: 'Technical distribution',
    challenge:
      'The buyer had recurring concerns about product consistency and wanted an extra quality checkpoint before cargo release.',
    solution:
      'SSourcing China arranged inspection follow-up, consolidated issue notes, and coordinated practical feedback with the factory before shipment readiness.',
    result:
      'The distributor gained more confidence in shipment release decisions and internal quality reporting.',
  },
]

export const faqItems = [
  {
    question: 'Do you only work with large buyers?',
    answer:
      'No. We work with different buyer profiles, including importers, brands, distributors, and project teams. The best fit depends more on product clarity and buying seriousness than company size alone.',
  },
  {
    question: 'Can you verify a supplier I already found?',
    answer:
      'Yes. If you already have a supplier or factory candidate, we can focus on verification, communication support, sampling, inspection, or shipment coordination around that supplier.',
  },
  {
    question: 'What if I need both sourcing and inspection support?',
    answer:
      'That is common. Many buyers use one workflow that starts with supplier search or verification and continues through production follow-up, inspection, and shipping coordination.',
  },
  {
    question: 'What information helps you source accurately?',
    answer:
      'Helpful details include product specifications, reference photos, target quantity, packaging needs, quality expectations, destination market, and target timing.',
  },
  {
    question: 'Do you coordinate with my freight forwarder?',
    answer:
      'Yes. We can help align shipment readiness details and communicate with your nominated forwarder or logistics contact when cargo is ready to move.',
  },
  {
    question: 'Can you help with custom packaging and labeling?',
    answer:
      'Yes. We can keep packaging, private label, inserts, barcodes, and carton marks visible during sampling, production follow-up, and pre-shipment checks.',
  },
]

export const blogPosts = [
  {
    category: 'Supplier Verification',
    title: 'How to check whether a China supplier is a good fit before sampling',
    summary:
      'A practical checklist for reviewing capability, communication quality, documentation, and product focus before spending time on samples.',
    date: 'July 2026',
  },
  {
    category: 'Quality Control',
    title: 'What a pre-shipment inspection should actually help you confirm',
    summary:
      'A clear look at quantity checks, workmanship review, packaging confirmation, and issue reporting before cargo release.',
    date: 'July 2026',
  },
  {
    category: 'Quotations',
    title: 'Why China supplier quotations can differ even when the product looks similar',
    summary:
      'Understand how materials, tolerances, packaging, MOQ, and lead-time assumptions affect supplier comparisons.',
    date: 'June 2026',
  },
  {
    category: 'Shipping',
    title: 'How to reduce last-minute shipment problems when buying from China',
    summary:
      'See the checkpoints that help avoid packing mistakes, missing marks, and delayed cargo handover.',
    date: 'June 2026',
  },
]

export const contactDetails = [
  {
    title: 'Office focus',
    value: 'China-based sourcing support for overseas buyers',
  },
  {
    title: 'Typical support',
    value: 'Supplier search, verification, quality inspection, production follow-up, shipping coordination',
  },
  {
    title: 'Buyer profile',
    value: 'Importers, brands, distributors, procurement teams, project buyers',
  },
  {
    title: 'Communication',
    value: 'Clear English updates designed for international business discussions',
  },
]

export const inquiryChecklist = [
  'Product name or reference photos',
  'Target quantity or estimated order size',
  'Required specifications or quality level',
  'Packaging, labeling, or private label needs',
  'Destination market and target shipping timing',
]

export const sourcingFitPoints = [
  'New supplier search for an existing product line',
  'Backup supplier development for current items',
  'Factory verification before first order payment',
  'Production and inspection follow-up for important shipments',
  'Multi-supplier coordination for project or assortment buying',
]

export const serviceSupportAreas = [
  {
    title: 'Brands & private label buyers',
    description: 'Useful when packaging, labeling, and product consistency need close follow-up from sampling to shipment.',
    icon: Boxes,
  },
  {
    title: 'Importers & distributors',
    description: 'Useful when supplier comparison, inspection checkpoints, and shipment readiness are central to buying decisions.',
    icon: Truck,
  },
  {
    title: 'Project procurement teams',
    description: 'Useful when multiple suppliers, timelines, and specification details need one clear local coordination workflow.',
    icon: PackageCheck,
  },
]
