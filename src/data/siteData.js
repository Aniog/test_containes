import {
  BadgeCheck,
  Boxes,
  ClipboardCheck,
  Factory,
  FileSearch,
  Globe2,
  PackageCheck,
  Route,
  SearchCheck,
  ShieldCheck,
  Ship,
  Truck,
  Users,
  Wrench,
} from 'lucide-react'

export const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'Products We Source', href: '/products-we-source' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
]

export const services = [
  {
    icon: SearchCheck,
    title: 'Supplier Sourcing',
    description: 'Shortlist suitable manufacturers and trading companies based on product requirements, order size, certification needs, and target market.',
  },
  {
    icon: ShieldCheck,
    title: 'Factory Verification',
    description: 'Check business licenses, production scope, factory conditions, certificates, and supplier communication before you commit.',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    description: 'Arrange pre-production, during-production, and pre-shipment inspections with clear reports, photos, and practical next steps.',
  },
  {
    icon: Route,
    title: 'Production Follow-Up',
    description: 'Monitor samples, milestones, packaging, labeling, and shipment readiness so overseas buyers stay informed.',
  },
  {
    icon: Ship,
    title: 'Shipping Coordination',
    description: 'Coordinate with suppliers and freight partners for export documents, consolidation, booking, and delivery planning.',
  },
  {
    icon: Users,
    title: 'Buyer Representation',
    description: 'Support negotiations, factory communication, and China-side coordination when your team cannot be on site.',
  },
]

export const processSteps = [
  {
    step: '01',
    title: 'Share your requirements',
    description: 'Tell us the product, target price, quality standards, destination, and expected order quantity.',
  },
  {
    step: '02',
    title: 'Supplier search and screening',
    description: 'We compare potential suppliers and remove obvious mismatches before presenting a practical shortlist.',
  },
  {
    step: '03',
    title: 'Sampling and quotation review',
    description: 'We help compare pricing, sample quality, tooling terms, packaging details, and lead times.',
  },
  {
    step: '04',
    title: 'Production and QC follow-up',
    description: 'We track production progress and organize inspections before goods leave the factory.',
  },
  {
    step: '05',
    title: 'Shipping coordination',
    description: 'We coordinate export handover, consolidation, documents, and shipment updates with your logistics plan.',
  },
]

export const productCategories = [
  {
    icon: Wrench,
    title: 'Industrial & Hardware',
    description: 'Machined parts, tools, fasteners, metal fabrication, equipment accessories, and OEM components.',
    imgId: 'product-industrial-hardware-9c41e2',
    titleId: 'product-industrial-title',
    descId: 'product-industrial-desc',
  },
  {
    icon: Boxes,
    title: 'Consumer Goods',
    description: 'Home goods, kitchenware, packaging, lifestyle accessories, promotional items, and private label products.',
    imgId: 'product-consumer-goods-b72f6a',
    titleId: 'product-consumer-title',
    descId: 'product-consumer-desc',
  },
  {
    icon: PackageCheck,
    title: 'Packaging & Displays',
    description: 'Printed cartons, retail displays, labels, bags, inserts, and export-ready packaging solutions.',
    imgId: 'product-packaging-displays-a18d34',
    titleId: 'product-packaging-title',
    descId: 'product-packaging-desc',
  },
  {
    icon: Factory,
    title: 'Custom Manufacturing',
    description: 'Supplier matching for custom parts, assembled products, molds, samples, and repeat production runs.',
    imgId: 'product-custom-manufacturing-e06b92',
    titleId: 'product-custom-title',
    descId: 'product-custom-desc',
  },
]

export const problems = [
  'Unclear supplier background or mismatched capabilities',
  'Slow communication across time zones and languages',
  'Samples that look acceptable but mass production varies',
  'Pricing that excludes packaging, testing, or export details',
  'Missed production milestones and weak shipment visibility',
  'Inspection findings that need practical supplier follow-up',
]

export const trustPoints = [
  {
    icon: FileSearch,
    title: 'Documented checks',
    description: 'Supplier details, quotes, samples, inspection notes, and shipment updates are organized for clear decisions.',
  },
  {
    icon: Globe2,
    title: 'International buyer focus',
    description: 'We explain China-side options in plain English for importers, ecommerce sellers, wholesalers, and product teams.',
  },
  {
    icon: BadgeCheck,
    title: 'Practical risk reduction',
    description: 'Our role is to identify issues early, communicate clearly, and help you choose realistic next steps.',
  },
]

export const caseStudies = [
  {
    title: 'Packaging supplier verification for a European brand',
    industry: 'Retail packaging',
    challenge: 'The buyer had several quotes but was unsure which supplier could meet print quality and export packaging requirements.',
    result: 'SSourcing China reviewed supplier documents, compared samples, checked production scope, and helped the buyer select a factory for trial production.',
  },
  {
    title: 'Pre-shipment inspection for hardware components',
    industry: 'Industrial parts',
    challenge: 'A distributor needed third-party eyes on dimensions, finish, labeling, and carton condition before final payment.',
    result: 'Inspection findings were documented with photos and defect notes, allowing the buyer to request rework before shipment.',
  },
  {
    title: 'Production follow-up for private label home goods',
    industry: 'Consumer products',
    challenge: 'The buyer needed updates on samples, packaging changes, production timing, and consolidation across two suppliers.',
    result: 'Milestones were tracked weekly and shipment handover was coordinated with the buyer’s forwarder.',
  },
]

export const faqs = [
  {
    question: 'Do you work with both small and established overseas buyers?',
    answer: 'Yes. We support importers, ecommerce sellers, distributors, wholesalers, and product teams. The best fit is a buyer with clear product requirements and realistic order quantities.',
  },
  {
    question: 'Can you verify a supplier I already found?',
    answer: 'Yes. We can review public registration details, business scope, certificates, online presence, communication quality, and arrange an on-site factory check when needed.',
  },
  {
    question: 'Do you replace freight forwarders?',
    answer: 'No. We coordinate with suppliers and forwarders from the China side, but we can also help compare options if you do not yet have a shipping partner.',
  },
  {
    question: 'What information should I provide for a quote?',
    answer: 'Please share product specifications, photos or drawings, target quantity, destination country, quality standards, packaging needs, and any supplier information you already have.',
  },
]

export const blogPosts = [
  {
    title: 'How to verify a Chinese supplier before paying a deposit',
    excerpt: 'A practical checklist for checking business scope, certificates, communication, samples, and factory capability.',
    category: 'Supplier Verification',
  },
  {
    title: 'What overseas buyers should include in a sourcing brief',
    excerpt: 'Clear requirements reduce supplier confusion and help you compare quotations more accurately.',
    category: 'Sourcing Process',
  },
  {
    title: 'Pre-shipment inspection: what should be checked?',
    excerpt: 'Common inspection points for product appearance, function, packaging, labeling, quantity, and carton condition.',
    category: 'Quality Control',
  },
]
