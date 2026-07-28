import { ClipboardCheck, Factory, PackageSearch, SearchCheck, ShieldCheck, Ship, Truck, Wrench, Boxes, Lightbulb, Home, Cpu, Utensils, Dumbbell, Leaf, BadgeCheck } from 'lucide-react'

export const services = [
  { title: 'Supplier Search', icon: SearchCheck, text: 'Shortlist capable manufacturers based on your product brief, target market, MOQ, compliance needs, and budget range.' },
  { title: 'Factory Verification', icon: Factory, text: 'Check business licenses, production scope, site photos, export experience, and whether the supplier is a trader or manufacturer.' },
  { title: 'Quality Inspection', icon: ClipboardCheck, text: 'Arrange pre-shipment checks, photo reports, measurements, packaging review, and defect notes before balance payment.' },
  { title: 'Production Follow-up', icon: ShieldCheck, text: 'Track samples, purchase orders, production milestones, packaging details, and shipment readiness with clear updates.' },
  { title: 'Shipping Coordination', icon: Ship, text: 'Coordinate pickup, consolidation, export documents, freight options, and handover to your forwarder or shipping partner.' },
  { title: 'Product Development Support', icon: Wrench, text: 'Help clarify specifications, compare samples, review packaging, and communicate practical changes with factories.' },
]

export const processSteps = [
  ['01', 'Share your sourcing brief', 'Send product details, target price, quantity, market requirements, packaging needs, and any supplier concerns.'],
  ['02', 'Supplier search and screening', 'We compare supplier profiles, capabilities, communication, quotations, and verification information.'],
  ['03', 'Samples and quotation review', 'You receive practical comparisons so you can judge price, quality, lead time, and risk before ordering.'],
  ['04', 'Order follow-up and QC', 'We monitor production progress, arrange inspection when needed, and keep documents organized.'],
  ['05', 'Shipping coordination', 'We coordinate pickup, consolidation, export paperwork, and shipment handover according to your plan.'],
]

export const productCategories = [
  { title: 'Consumer Electronics', icon: Cpu, desc: 'Accessories, small devices, chargers, smart home items, and component-based products.' },
  { title: 'Home & Kitchen', icon: Home, desc: 'Household goods, storage, kitchenware, decor, furniture accessories, and home improvement items.' },
  { title: 'Packaging & Custom Goods', icon: Boxes, desc: 'Branded packaging, paper boxes, pouches, labels, promotional products, and OEM items.' },
  { title: 'Tools & Industrial Parts', icon: Wrench, desc: 'Hardware, metal parts, plastic components, tools, machine accessories, and workshop supplies.' },
  { title: 'Food Service Supplies', icon: Utensils, desc: 'Restaurant supplies, drinkware, disposable packaging, catering items, and commercial kitchen goods.' },
  { title: 'Outdoor & Lifestyle', icon: Dumbbell, desc: 'Sports accessories, outdoor gear, pet products, travel items, and lifestyle consumer goods.' },
]

export const problems = [
  'Unclear supplier identity or trading company concerns',
  'Slow communication across time zones and languages',
  'Quotes that are difficult to compare fairly',
  'Sample quality that does not match bulk production',
  'Production delays discovered too late',
  'Packaging, labeling, and carton details missed before shipment',
]

export const trustPoints = [
  { title: 'China-based coordination', text: 'Local supplier communication, document collection, factory checks, and shipment follow-up.' },
  { title: 'Practical reports', text: 'Clear findings, photos, risk notes, and next steps instead of vague sourcing summaries.' },
  { title: 'Buyer-focused screening', text: 'Suppliers are compared against your product requirements, target market, order size, and timeline.' },
  { title: 'No exaggerated promises', text: 'We help reduce sourcing uncertainty through process, verification, and communication.' },
]

export const caseStudies = [
  { title: 'Kitchenware importer reduced supplier confusion', tag: 'Home goods', result: 'Compared five factories, clarified materials, and arranged sample review before trial order.', imageId: 'case-kitchenware-qc-b73k1' },
  { title: 'Electronics accessory buyer checked packaging quality', tag: 'Electronics', result: 'Reviewed cartons, labeling, product finish, and shipment photos before release.', imageId: 'case-electronics-inspection-a91m4' },
  { title: 'Industrial parts buyer improved production visibility', tag: 'Industrial parts', result: 'Tracked production milestones and consolidated progress updates from two suppliers.', imageId: 'case-industrial-factory-d28x6' },
]

export const faqs = [
  ['What information do you need to start?', 'A product photo or specification, estimated order quantity, target market, packaging needs, and any supplier links you already have are enough to begin a practical review.'],
  ['Can you verify whether a supplier is a factory?', 'We can check documents, business scope, site information, photos, production capability signs, and communication consistency. For higher-risk orders, an onsite check can be arranged.'],
  ['Do you inspect every order?', 'Inspection needs depend on product value, supplier history, complexity, and buyer risk tolerance. We can recommend a suitable inspection plan.'],
  ['Can you handle shipping?', 'We coordinate shipping information, pickup, consolidation, documents, and handover. You can use your own forwarder or ask us to help compare options.'],
]

export const blogPosts = [
  { title: 'How to compare China supplier quotations fairly', category: 'Supplier sourcing', excerpt: 'Price alone is not enough. Compare materials, packaging, MOQ, lead time, payment terms, and inspection readiness.' },
  { title: 'Factory verification checklist for overseas buyers', category: 'Verification', excerpt: 'A practical list of documents, capability signals, and warning signs to check before placing a purchase order.' },
  { title: 'What a pre-shipment inspection should include', category: 'Quality control', excerpt: 'Review appearance, function, dimensions, labeling, packaging, carton marks, quantity, and defect classification.' },
]

export const stats = [
  ['Supplier screening', 'Document and capability checks'],
  ['Quality control', 'Inspection planning and photo reports'],
  ['Production follow-up', 'Milestone updates and issue tracking'],
  ['Shipping support', 'Pickup, consolidation, and documents'],
]

export const productIcons = { PackageSearch, Truck, Lightbulb, Leaf, BadgeCheck }
