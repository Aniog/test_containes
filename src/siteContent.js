import {
  BadgeCheck,
  Boxes,
  ClipboardCheck,
  Container,
  Factory,
  FileSearch,
  Globe2,
  Handshake,
  PackageSearch,
  ScanSearch,
  SearchCheck,
  ShieldCheck,
  ShipWheel,
  TimerReset,
  Wrench,
} from 'lucide-react'

export const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'How It Works', path: '/how-it-works' },
  { label: 'Products We Source', path: '/products-we-source' },
  { label: 'Case Studies', path: '/case-studies' },
  { label: 'Blog', path: '/blog' },
  { label: 'Contact', path: '/contact' },
]

export const routeMeta = {
  '/': 'China Sourcing Agent | Supplier Verification, QC & Shipping | SSourcing China',
  '/services': 'China Sourcing Services | Supplier Verification, QC & Shipping | SSourcing China',
  '/how-it-works': 'How Our China Sourcing Process Works | SSourcing China',
  '/products-we-source': 'Products We Source in China | SSourcing China',
  '/case-studies': 'China Sourcing Case Studies | SSourcing China',
  '/blog': 'China Sourcing Blog | SSourcing China',
  '/contact': 'Contact a China Sourcing Agent | SSourcing China',
}

export const homeStats = [
  { value: 'China-based', label: 'Local follow-up with suppliers, factories, and inspection teams.' },
  { value: 'Buyer-focused', label: 'Structured communication for importers, brands, and wholesalers.' },
  { value: 'End-to-end', label: 'Support from supplier search to production tracking and shipping.' },
]

export const services = [
  {
    title: 'Supplier Search & Shortlisting',
    description:
      'We identify factories and trading partners that match your product category, order profile, compliance needs, and communication standards.',
    points: ['Supplier outreach and comparison', 'RFQ screening and shortlist reports', 'Capability and export-readiness review'],
    icon: SearchCheck,
  },
  {
    title: 'Supplier Verification',
    description:
      'Before you place an order, we verify the supplier’s business background, production setup, and operational credibility to reduce avoidable risk.',
    points: ['Business license and registration checks', 'Basic facility and process verification', 'Risk flags explained in plain language'],
    icon: ShieldCheck,
  },
  {
    title: 'Factory Audits & Visits',
    description:
      'When deeper validation is needed, we coordinate on-site checks to review equipment, team structure, quality systems, and factory conditions.',
    points: ['On-site factory checks', 'Photo-based reporting', 'Follow-up questions with suppliers'],
    icon: Factory,
  },
  {
    title: 'Quality Inspection',
    description:
      'We help confirm that products match the agreed standard before they leave the factory, helping buyers spot issues earlier.',
    points: ['Pre-production and pre-shipment checks', 'Inspection issue tracking', 'Clear defect and action summaries'],
    icon: ClipboardCheck,
  },
  {
    title: 'Production Follow-up',
    description:
      'We stay close to timelines, samples, approvals, and production milestones so you can see progress and react before delays grow.',
    points: ['Milestone follow-up with suppliers', 'Sampling and schedule updates', 'Issue escalation when timing slips'],
    icon: TimerReset,
  },
  {
    title: 'Shipping Coordination',
    description:
      'We support shipment preparation and coordination so your handover to freight partners is clearer, smoother, and better documented.',
    points: ['Packing and shipment readiness follow-up', 'Document coordination support', 'Export and logistics communication'],
    icon: ShipWheel,
  },
]

export const processSteps = [
  {
    step: '01',
    title: 'Share your sourcing brief',
    description:
      'Tell us what you need, your target market, quality expectations, order size, and preferred timeline.',
  },
  {
    step: '02',
    title: 'We assess and shortlist suppliers',
    description:
      'We review the requirement, identify suitable suppliers, and explain strengths, limitations, and next actions.',
  },
  {
    step: '03',
    title: 'Verify and sample before commitment',
    description:
      'We help validate the supplier and coordinate sampling or early checks before production moves forward.',
  },
  {
    step: '04',
    title: 'Track production and inspect quality',
    description:
      'During production, we follow up on milestones, quality checkpoints, and changes that may affect delivery.',
  },
  {
    step: '05',
    title: 'Prepare shipment and close the loop',
    description:
      'We support shipment coordination and keep you informed until the order is ready for handover.',
  },
]

export const productCategories = [
  {
    title: 'Home, Kitchen & Daily Use Products',
    description: 'Cookware, storage, tableware, cleaning accessories, and practical household lines for importers and retailers.',
    icon: Boxes,
  },
  {
    title: 'Packaging & Promotional Items',
    description: 'Custom packaging, gift sets, point-of-sale accessories, and branded merchandise for market launches and campaigns.',
    icon: PackageSearch,
  },
  {
    title: 'Industrial & Utility Products',
    description: 'Selected tools, components, workshop items, and utility products where supplier consistency matters as much as price.',
    icon: Wrench,
  },
  {
    title: 'Furniture, Fixtures & Project Items',
    description: 'Selected furniture, fit-out goods, and project-based sourcing where supplier coordination and inspection are critical.',
    icon: Container,
  },
]

export const problemsWeSolve = [
  {
    title: 'Too many suppliers, not enough clarity',
    description: 'We help buyers move from a long supplier list to a practical shortlist with clearer comparison points.',
    icon: FileSearch,
  },
  {
    title: 'Uncertainty about who is really manufacturing',
    description: 'We help verify who you are dealing with and whether the operation matches the promise.',
    icon: ScanSearch,
  },
  {
    title: 'Slow communication across time zones',
    description: 'We bridge day-to-day follow-up so questions, updates, and issues do not stay stuck in email loops.',
    icon: Globe2,
  },
  {
    title: 'Limited visibility during production',
    description: 'We give buyers clearer checkpoints during sampling, production, inspection, and shipment preparation.',
    icon: BadgeCheck,
  },
]

export const trustPoints = [
  {
    title: 'Practical reporting',
    description: 'Updates are written for overseas buyers who need clear facts, not vague status messages.',
    icon: Handshake,
  },
  {
    title: 'Quality and risk awareness',
    description: 'We focus on supplier fit, manufacturing signals, inspection readiness, and preventable sourcing issues.',
    icon: ShieldCheck,
  },
  {
    title: 'International B2B mindset',
    description: 'The site and workflow are built for importers, brands, wholesalers, and procurement teams buying across borders.',
    icon: Globe2,
  },
]

export const caseStudies = [
  {
    title: 'EU homeware importer needed a safer supplier shortlist',
    sector: 'Homeware sourcing',
    challenge: 'The buyer had multiple quotations but limited confidence in which suppliers were equipped for repeat export orders.',
    solution: 'SSourcing China compared supplier profiles, checked business basics, reviewed responsiveness, and helped narrow the list to realistic candidates.',
    result: 'The importer moved forward with a shorter, more credible supplier group and clearer next-step sampling decisions.',
  },
  {
    title: 'US brand wanted stronger production visibility on a packaging order',
    sector: 'Custom packaging',
    challenge: 'Approvals were moving slowly and the buyer needed more visibility on production timing and final packing readiness.',
    solution: 'We followed milestone updates, clarified pending approvals, and coordinated pre-shipment quality checks before dispatch.',
    result: 'The brand gained a more predictable communication flow and better confidence before releasing shipment.',
  },
  {
    title: 'Middle East distributor required inspection support before shipment',
    sector: 'Consumer goods distribution',
    challenge: 'The buyer needed an extra layer of product verification before goods were handed to freight partners.',
    solution: 'We coordinated inspection preparation, documented key findings, and pushed corrective follow-up with the supplier before shipment release.',
    result: 'The distributor was able to review issues earlier and make shipment decisions with better information.',
  },
]

export const blogPosts = [
  {
    title: 'How to compare Chinese suppliers beyond price',
    category: 'Supplier verification',
    readTime: '4 min read',
    excerpt: 'A practical framework for comparing supplier fit, communication quality, production capability, and export readiness.',
  },
  {
    title: 'What a factory verification should tell an overseas buyer',
    category: 'Factory checks',
    readTime: '5 min read',
    excerpt: 'The key signals buyers should look for before placing orders with a new China supplier.',
  },
  {
    title: 'When to inspect goods before shipment',
    category: 'Quality control',
    readTime: '4 min read',
    excerpt: 'A simple guide to deciding when a pre-shipment inspection makes commercial sense.',
  },
  {
    title: 'How to reduce sourcing delays during production',
    category: 'Production follow-up',
    readTime: '4 min read',
    excerpt: 'Small follow-up disciplines that help prevent late surprises during busy production periods.',
  },
  {
    title: 'Common mistakes buyers make when requesting quotations',
    category: 'RFQ process',
    readTime: '3 min read',
    excerpt: 'Why clearer specifications, timing, and volume signals lead to better supplier responses.',
  },
  {
    title: 'Shipping handover basics for first-time importers',
    category: 'Shipping coordination',
    readTime: '5 min read',
    excerpt: 'What buyers should confirm before goods leave the factory and move to freight handling.',
  },
]

export const faqItems = [
  {
    question: 'Do you work only with large importers?',
    answer: 'No. We support brands, wholesalers, distributors, and other buyers who need practical sourcing support in China.',
  },
  {
    question: 'Can you help if we already have a supplier?',
    answer: 'Yes. We can support verification, factory checks, quality inspection, production follow-up, or shipping coordination even when a supplier is already selected.',
  },
  {
    question: 'Do you guarantee the cheapest supplier?',
    answer: 'No. Our focus is helping buyers make more informed sourcing decisions based on fit, credibility, quality, and operational clarity.',
  },
  {
    question: 'What information should we send in the inquiry form?',
    answer: 'The most useful briefs include the product type, target market, expected order volume, timing, quality expectations, and the services you need.',
  },
]

export const contactHighlights = [
  'China-based support for supplier search, verification, quality checks, production follow-up, and shipping coordination.',
  'Clear English communication designed for overseas buyers and procurement teams.',
  'A practical first discussion focused on your sourcing requirement, not exaggerated promises.',
]
