import {
  Search,
  ShieldCheck,
  ClipboardCheck,
  Factory,
  Ship,
  PackageCheck,
  FileSearch,
  Camera,
  Building2,
  Headphones,
  Languages,
  HandCoins,
  AlertTriangle,
  Boxes,
  Hammer,
  Lightbulb,
  Shirt,
  Cpu,
  Sparkles,
  Gamepad2,
  Wrench,
  Gift,
} from 'lucide-react'

export const SERVICES = [
  {
    id: 'supplier-sourcing',
    icon: Search,
    title: 'Supplier Sourcing',
    short: 'Find vetted manufacturers that match your specs, MOQ and target price.',
    points: [
      'Targeted supplier shortlist within 5–7 working days',
      'Direct factory contact, no middlemen markup',
      'RFQ management and comparative quote table',
    ],
  },
  {
    id: 'factory-verification',
    icon: ShieldCheck,
    title: 'Factory Verification',
    short: 'On-site checks to confirm the factory is real, capable and compliant.',
    points: [
      'Business license and export record check',
      'On-site capacity, equipment and workforce audit',
      'Photo and video evidence delivered in 48 hours',
    ],
  },
  {
    id: 'quality-inspection',
    icon: ClipboardCheck,
    title: 'Quality Inspection (QC)',
    short: 'Pre-production, during-production and pre-shipment inspections.',
    points: [
      'AQL 2.5 standard sampling by default',
      'Detailed report with photos, measurements and defects',
      'Available in all major manufacturing provinces',
    ],
  },
  {
    id: 'production-follow-up',
    icon: Factory,
    title: 'Production Follow-up',
    short: 'Weekly progress reports so your timeline never slips silently.',
    points: [
      'Material arrival and production milestone tracking',
      'Issue escalation within 24 hours',
      'Photo updates from the factory floor',
    ],
  },
  {
    id: 'shipping-logistics',
    icon: Ship,
    title: 'Shipping & Logistics',
    short: 'Sea, air and rail freight coordination with trusted forwarders.',
    points: [
      'FOB, CIF and DDP shipping options',
      'Consolidation from multiple suppliers',
      'Customs documentation and HS code support',
    ],
  },
  {
    id: 'private-label',
    icon: PackageCheck,
    title: 'Private Label & Packaging',
    short: 'Custom branding, retail packaging and barcode compliance.',
    points: [
      'Logo printing, hangtags, polybags, master cartons',
      'Amazon FBA-ready prep available',
      'Packaging structural and artwork review',
    ],
  },
]

export const PROCESS = [
  {
    step: '01',
    icon: FileSearch,
    title: 'Brief & Requirement Review',
    desc: 'You send product specs, target price and quantity. We confirm feasibility within 24 hours.',
  },
  {
    step: '02',
    icon: Search,
    title: 'Supplier Shortlist & Quotes',
    desc: 'We identify 3–5 capable factories, collect quotes and present a side-by-side comparison.',
  },
  {
    step: '03',
    icon: ShieldCheck,
    title: 'Factory Verification',
    desc: 'On-site audit of the selected supplier covering licenses, capacity and quality systems.',
  },
  {
    step: '04',
    icon: Camera,
    title: 'Sample Approval',
    desc: 'We order, review and ship samples to you. Revisions handled until you sign off.',
  },
  {
    step: '05',
    icon: Factory,
    title: 'Production Follow-up',
    desc: 'Weekly status updates with photos, plus issue escalation if anything goes off plan.',
  },
  {
    step: '06',
    icon: ClipboardCheck,
    title: 'Pre-shipment Inspection',
    desc: 'AQL inspection at the factory, full report and defect classification before shipment.',
  },
  {
    step: '07',
    icon: Ship,
    title: 'Shipping & Delivery',
    desc: 'Booking, consolidation, customs documents and door-to-door delivery if required.',
  },
]

export const CATEGORIES = [
  { id: 'home-kitchen', icon: Boxes, title: 'Home & Kitchen', desc: 'Cookware, kitchen tools, storage, small home appliances.' },
  { id: 'electronics', icon: Cpu, title: 'Consumer Electronics', desc: 'Audio, chargers, smart accessories, wearables, mobile accessories.' },
  { id: 'apparel', icon: Shirt, title: 'Apparel & Textiles', desc: 'Garments, bags, caps, home textiles, custom OEM clothing.' },
  { id: 'beauty', icon: Sparkles, title: 'Beauty & Personal Care', desc: 'Hair tools, skincare devices, packaging, accessories.' },
  { id: 'furniture', icon: Lightbulb, title: 'Furniture & Lighting', desc: 'Office furniture, LED lighting, decorative items, fixtures.' },
  { id: 'sporting', icon: Hammer, title: 'Sporting Goods & Outdoor', desc: 'Fitness equipment, camping gear, bikes, accessories.' },
  { id: 'toys', icon: Gamepad2, title: 'Toys & Baby Products', desc: 'EN71 and ASTM compliant toys, baby gear, plush, educational sets.' },
  { id: 'industrial', icon: Wrench, title: 'Industrial & Hardware', desc: 'Hand tools, fasteners, metal parts, OEM components.' },
  { id: 'promotional', icon: Gift, title: 'Promotional & Packaging', desc: 'Branded gifts, retail packaging, custom boxes, print finishing.' },
]

export const PROBLEMS = [
  {
    icon: AlertTriangle,
    title: 'Trading companies posing as factories',
    desc: 'We verify each supplier on-site so you pay factory prices and deal with the real producer.',
  },
  {
    icon: AlertTriangle,
    title: 'Quality drift after the golden sample',
    desc: 'We inspect during and before shipment to catch defects before containers leave the port.',
  },
  {
    icon: AlertTriangle,
    title: 'Language and time-zone gaps',
    desc: 'Bilingual project managers translate specs, follow up daily and report in your time zone.',
  },
  {
    icon: AlertTriangle,
    title: 'Hidden costs and surprise fees',
    desc: 'Transparent quotes covering unit price, tooling, packaging, inspection and freight.',
  },
  {
    icon: AlertTriangle,
    title: 'Delayed shipments without warning',
    desc: 'Weekly production tracking and 24-hour escalation when milestones slip.',
  },
  {
    icon: AlertTriangle,
    title: 'Compliance and documentation gaps',
    desc: 'Support with CE, FCC, RoHS, FDA and customs paperwork, including HS code review.',
  },
]

export const TRUST_POINTS = [
  { icon: Building2, label: '12+ years', desc: 'Sourcing experience across Guangdong, Zhejiang and Fujian.' },
  { icon: Languages, label: 'EN / DE / ES', desc: 'Multilingual project managers serving 30+ countries.' },
  { icon: HandCoins, label: 'Transparent fees', desc: 'Flat service fee or % of order value — no supplier kickbacks.' },
  { icon: Headphones, label: '24h response', desc: 'Reply to inquiries within one working day, Mon–Sat.' },
]

export const CASE_STUDIES = [
  {
    id: 'kitchenware-eu',
    category: 'Home & Kitchen',
    titleId: 'case-kitchenware-eu-title',
    descId: 'case-kitchenware-eu-desc',
    imgId: 'case-img-kitchenware-eu-9a3f2b',
    title: 'EU retailer launches private-label cookware range',
    desc: 'Sourced 4 SKUs of cast-iron cookware from Guangdong, passed LFGB testing and shipped 18,000 units across two POs.',
    metrics: [
      { label: 'Unit cost saved', value: '21%' },
      { label: 'Defect rate', value: '0.8%' },
      { label: 'Lead time', value: '74 days' },
    ],
  },
  {
    id: 'audio-us',
    category: 'Consumer Electronics',
    titleId: 'case-audio-us-title',
    descId: 'case-audio-us-desc',
    imgId: 'case-img-audio-us-7c1d4e',
    title: 'US D2C brand scales Bluetooth speaker line',
    desc: 'Verified two Shenzhen factories, ran FCC and RoHS testing and managed three production cycles with weekly QC.',
    metrics: [
      { label: 'Annual units', value: '46,000' },
      { label: 'On-time ship', value: '100%' },
      { label: 'Return rate', value: '1.4%' },
    ],
  },
  {
    id: 'apparel-au',
    category: 'Apparel & Textiles',
    titleId: 'case-apparel-au-title',
    descId: 'case-apparel-au-desc',
    imgId: 'case-img-apparel-au-2f8b6d',
    title: 'AU activewear brand consolidates 3 suppliers',
    desc: 'Replaced three underperforming vendors with one verified factory in Zhejiang, restructured QC and FBA prep.',
    metrics: [
      { label: 'Suppliers reduced', value: '3 → 1' },
      { label: 'Cost reduction', value: '14%' },
      { label: 'Lead time', value: '−18 days' },
    ],
  },
  {
    id: 'furniture-uk',
    category: 'Furniture & Lighting',
    titleId: 'case-furniture-uk-title',
    descId: 'case-furniture-uk-desc',
    imgId: 'case-img-furniture-uk-5e9a1c',
    title: 'UK office furniture importer launches 12 SKUs',
    desc: 'Built supplier base in Foshan, managed sample iteration and full-container shipping with DDP delivery to Felixstowe.',
    metrics: [
      { label: 'SKUs launched', value: '12' },
      { label: 'Containers / yr', value: '38' },
      { label: 'NPS', value: '+62' },
    ],
  },
]

export const FAQS = [
  {
    q: 'How do you charge for sourcing services?',
    a: 'We use either a flat service fee per project or a small percentage of the order value, agreed upfront. We do not take commissions or kickbacks from suppliers.',
  },
  {
    q: 'What is the minimum order quantity (MOQ) you can support?',
    a: 'Typical MOQs range from 500 to 5,000 units depending on the product category. For private-label products requiring tooling, MOQs may be higher. We can also help with trial orders.',
  },
  {
    q: 'How fast can you find suppliers?',
    a: 'For most categories we deliver a shortlist of 3–5 verified suppliers with quotes within 5 to 7 working days after we receive your brief.',
  },
  {
    q: 'Can you handle products that need certification?',
    a: 'Yes. We work with accredited third-party labs (SGS, Intertek, BV, TÜV) for CE, FCC, RoHS, LFGB, EN71, FDA, CPC and other certifications.',
  },
  {
    q: 'Do you ship directly to Amazon FBA warehouses?',
    a: 'Yes. We handle FBA-ready packaging, FNSKU labels, carton labeling and shipment booking to FBA centers in the US, EU, UK, JP and AU.',
  },
  {
    q: 'What happens if a quality issue is found?',
    a: 'We classify defects by AQL standards, negotiate rework or replacement with the factory, and only release shipment after issues are resolved or you sign off on a concession.',
  },
]

export const BLOG_POSTS = [
  {
    id: 'verify-supplier',
    titleId: 'post-verify-supplier-title',
    descId: 'post-verify-supplier-desc',
    imgId: 'post-img-verify-supplier-4a2c9b',
    title: 'How to verify a Chinese supplier in 7 practical steps',
    excerpt: 'Business license, export record, factory audit, video walk-through and red flags to watch for.',
    date: '2026-05-18',
    readTime: '8 min',
    category: 'Supplier Verification',
  },
  {
    id: 'aql-explained',
    titleId: 'post-aql-explained-title',
    descId: 'post-aql-explained-desc',
    imgId: 'post-img-aql-explained-1e7f3d',
    title: 'AQL inspection levels explained for first-time importers',
    excerpt: 'What AQL 2.5 actually means, how sample sizes are calculated and when to tighten the standard.',
    date: '2026-04-30',
    readTime: '6 min',
    category: 'Quality Control',
  },
  {
    id: 'fob-vs-ddp',
    titleId: 'post-fob-vs-ddp-title',
    descId: 'post-fob-vs-ddp-desc',
    imgId: 'post-img-fob-vs-ddp-6b8d2f',
    title: 'FOB vs CIF vs DDP: choosing the right shipping incoterm',
    excerpt: 'A practical breakdown of cost, risk and control for buyers importing from China.',
    date: '2026-04-12',
    readTime: '7 min',
    category: 'Shipping & Logistics',
  },
  {
    id: 'private-label',
    titleId: 'post-private-label-title',
    descId: 'post-private-label-desc',
    imgId: 'post-img-private-label-3c5a9e',
    title: 'Private label from China: a step-by-step guide for D2C brands',
    excerpt: 'From product spec to packaging, tooling, samples and Amazon FBA-ready shipments.',
    date: '2026-03-28',
    readTime: '10 min',
    category: 'Private Label',
  },
  {
    id: 'tariffs-2026',
    titleId: 'post-tariffs-title',
    descId: 'post-tariffs-desc',
    imgId: 'post-img-tariffs-8d4c1a',
    title: 'Tariffs in 2026: what overseas buyers should know',
    excerpt: 'How tariff changes affect landed cost, HS code classification and supplier negotiations.',
    date: '2026-03-10',
    readTime: '9 min',
    category: 'Industry Insights',
  },
  {
    id: 'factory-tour',
    titleId: 'post-factory-tour-title',
    descId: 'post-factory-tour-desc',
    imgId: 'post-img-factory-tour-2a6e5b',
    title: 'What to look for during a remote factory video tour',
    excerpt: 'A checklist of machines, workers, materials and storage that signal a credible factory.',
    date: '2026-02-22',
    readTime: '5 min',
    category: 'Supplier Verification',
  },
]
