import {
  Search,
  ShieldCheck,
  ClipboardCheck,
  Factory,
  Ship,
  PackageSearch,
  FileText,
  Headphones,
  Users,
  Globe2,
  Clock,
  BadgeCheck,
  Truck,
  Boxes,
  Wrench,
  Shirt,
  Cpu,
  Home as HomeIcon,
  Dumbbell,
  Utensils,
  Baby,
  Sparkles,
  Leaf,
} from 'lucide-react'

export const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'How It Works', to: '/how-it-works' },
  { label: 'Products We Source', to: '/products' },
  { label: 'Case Studies', to: '/case-studies' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contact', to: '/contact' },
]

export const SERVICES = [
  {
    id: 'supplier-sourcing',
    icon: Search,
    title: 'Supplier Sourcing',
    summary:
      'We identify and shortlist manufacturers that match your product, budget, and volume requirements.',
    points: [
      'Database of vetted factories across major industries',
      'Multiple quotes compared on price, MOQ, and lead time',
      'Background checks on business licenses and export history',
    ],
  },
  {
    id: 'factory-verification',
    icon: ShieldCheck,
    title: 'Factory Verification',
    summary:
      'On-site audits confirm a factory is real, capable, and compliant before you commit.',
    points: [
      'Physical factory visits and capacity assessment',
      'Audit of quality management systems and certifications',
      'Verified photos, videos, and audit reports delivered',
    ],
  },
  {
    id: 'quality-inspection',
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    summary:
      'Independent QC inspections at every stage catch defects before goods ship.',
    points: [
      'Pre-production, in-line, and pre-shipment inspections',
      'AQL sampling based on international standards',
      'Detailed inspection reports with photos and pass/fail results',
    ],
  },
  {
    id: 'production-follow-up',
    icon: Factory,
    title: 'Production Follow-Up',
    summary:
      'We track your order through production so delays are caught and resolved early.',
    points: [
      'Regular progress updates from the factory floor',
      'Schedule monitoring and risk early warnings',
      'Coordination of revisions and rework when needed',
    ],
  },
  {
    id: 'shipping-coordination',
    icon: Ship,
    title: 'Shipping & Logistics',
    summary:
      'Consolidation, freight booking, and customs paperwork handled end to end.',
    points: [
      'Sea, air, and express freight options compared',
      'Cargo consolidation from multiple suppliers',
      'Customs documents and tracking until delivery',
    ],
  },
  {
    id: 'order-management',
    icon: Headphones,
    title: 'Order Management',
    summary:
      'A single point of contact manages your project from inquiry to delivery.',
    points: [
      'Dedicated sourcing coordinator for your account',
      'Centralized documentation and communication',
      'Transparent reporting at every milestone',
    ],
  },
]

export const PROCESS_STEPS = [
  {
    id: 'step-1',
    icon: FileText,
    step: '01',
    title: 'Share Your Requirements',
    description:
      'Tell us about your product, target price, order quantity, and timeline. The more detail you provide, the more precise our sourcing will be.',
  },
  {
    id: 'step-2',
    icon: Search,
    step: '02',
    title: 'Supplier Search & Shortlist',
    description:
      'We identify suitable manufacturers, compare quotes, and present a shortlist of 2–3 vetted suppliers with transparent pricing and terms.',
  },
  {
    id: 'step-3',
    icon: ShieldCheck,
    step: '03',
    title: 'Factory Verification',
    description:
      'Before you commit, we audit the factory on-site to confirm capacity, quality systems, and compliance, and deliver a full audit report.',
  },
  {
    id: 'step-4',
    icon: ClipboardCheck,
    step: '04',
    title: 'Sample & Quality Plan',
    description:
      'We coordinate samples, agree on specifications and an AQL quality plan, and lock in production standards with the supplier.',
  },
  {
    id: 'step-5',
    icon: Factory,
    step: '05',
    title: 'Production & Inspection',
    description:
      'We follow production progress and run pre-shipment inspection. Goods only ship once they pass your agreed quality criteria.',
  },
  {
    id: 'step-6',
    icon: Ship,
    step: '06',
    title: 'Shipping & Delivery',
    description:
      'We consolidate cargo, book freight, handle customs documents, and track your shipment until it reaches your warehouse.',
  },
]

export const PRODUCT_CATEGORIES = [
  {
    id: 'consumer-electronics',
    icon: Cpu,
    title: 'Consumer Electronics',
    descId: 'desc-consumer-electronics',
    titleId: 'title-consumer-electronics',
    imgId: 'img-consumer-electronics-a1b2',
    description:
      'Audio devices, accessories, smart home products, and small appliances sourced from audited electronics factories.',
  },
  {
    id: 'apparel-textiles',
    icon: Shirt,
    title: 'Apparel & Textiles',
    descId: 'desc-apparel-textiles',
    titleId: 'title-apparel-textiles',
    imgId: 'img-apparel-textiles-c3d4',
    description:
      'Garments, home textiles, and fabric products with fabric testing, size set approval, and inline QC.',
  },
  {
    id: 'home-goods',
    icon: HomeIcon,
    title: 'Home & Furniture',
    descId: 'desc-home-goods',
    titleId: 'title-home-goods',
    imgId: 'img-home-goods-e5f6',
    description:
      'Furniture, kitchenware, decor, and storage products sourced from verified manufacturers and assembly partners.',
  },
  {
    id: 'industrial-hardware',
    icon: Wrench,
    title: 'Industrial & Hardware',
    descId: 'desc-industrial-hardware',
    titleId: 'title-industrial-hardware',
    imgId: 'img-industrial-hardware-g7h8',
    description:
      'Tools, fittings, fasteners, and mechanical components with material and dimensional inspection.',
  },
  {
    id: 'packaging',
    icon: Boxes,
    title: 'Packaging & Printing',
    descId: 'desc-packaging',
    titleId: 'title-packaging',
    imgId: 'img-packaging-i9j0',
    description:
      'Custom packaging, labels, and printed materials with color proofing and material verification.',
  },
  {
    id: 'sports-outdoor',
    icon: Dumbbell,
    title: 'Sports & Outdoor',
    descId: 'desc-sports-outdoor',
    titleId: 'title-sports-outdoor',
    imgId: 'img-sports-outdoor-k1l2',
    description:
      'Fitness gear, outdoor equipment, and accessories sourced with durability and safety testing in mind.',
  },
  {
    id: 'kitchen-dining',
    icon: Utensils,
    title: 'Kitchen & Dining',
    descId: 'desc-kitchen-dining',
    titleId: 'title-kitchen-dining',
    imgId: 'img-kitchen-dining-m3n4',
    description:
      'Cookware, drinkware, and tableware with food-grade material verification and finish inspection.',
  },
  {
    id: 'baby-products',
    icon: Baby,
    title: 'Baby & Kids',
    descId: 'desc-baby-products',
    titleId: 'title-baby-products',
    imgId: 'img-baby-products-o5p6',
    description:
      'Toys, nursery, and children’s products sourced with strict safety and compliance checks.',
  },
  {
    id: 'eco-products',
    icon: Leaf,
    title: 'Eco & Sustainable',
    descId: 'desc-eco-products',
    titleId: 'title-eco-products',
    imgId: 'img-eco-products-q7r8',
    description:
      'Biodegradable, recycled, and reusable products from suppliers with verified sustainability claims.',
  },
]

export const PROBLEMS = [
  {
    id: 'problem-1',
    icon: Users,
    title: 'Unreliable suppliers',
    description:
      'Factories that overpromise on price or capacity and underdeliver on quality and timing.',
  },
  {
    id: 'problem-2',
    icon: ShieldCheck,
    title: 'No way to verify factories',
    description:
      'You cannot travel to China for every order and need someone on the ground to confirm a factory is real.',
  },
  {
    id: 'problem-3',
    icon: ClipboardCheck,
    title: 'Quality surprises at delivery',
    description:
      'Defects discovered only after goods arrive, when rework or returns are expensive and slow.',
  },
  {
    id: 'problem-4',
    icon: Clock,
    title: 'Production delays',
    description:
      'Late deliveries with no early warning, disrupting your sales plan and inventory.',
  },
  {
    id: 'problem-5',
    icon: FileText,
    title: 'Communication & paperwork',
    description:
      'Language gaps, time zones, and complex customs documents that slow every order down.',
  },
  {
    id: 'problem-6',
    icon: Ship,
    title: 'Fragmented shipping',
    description:
      'Multiple suppliers, multiple shipments, and no one consolidating or tracking the cargo.',
  },
]

export const TRUST_POINTS = [
  {
    id: 'trust-1',
    icon: BadgeCheck,
    title: 'On-the-ground team in China',
    description:
      'Local auditors and QC inspectors visit factories directly, so verification is based on what we actually see.',
  },
  {
    id: 'trust-2',
    icon: ShieldCheck,
    title: 'Independent quality control',
    description:
      'Inspections are run by our team, not the supplier, using AQL standards and documented reports.',
  },
  {
    id: 'trust-3',
    icon: Globe2,
    title: 'Experience with global buyers',
    description:
      'We work with importers across North America, Europe, Australia, and the Middle East.',
  },
  {
    id: 'trust-4',
    icon: FileText,
    title: 'Transparent reporting',
    description:
      'You receive quotes, audit reports, inspection results, and shipping updates in writing.',
  },
  {
    id: 'trust-5',
    icon: Truck,
    title: 'End-to-end coordination',
    description:
      'One coordinator manages sourcing, QC, and logistics so nothing falls between the cracks.',
  },
  {
    id: 'trust-6',
    icon: PackageSearch,
    title: 'No obligation to start',
    description:
      'Begin with a free sourcing quote. You decide whether to move forward after reviewing suppliers.',
  },
]

export const STATS = [
  { value: '12+', label: 'Years sourcing in China' },
  { value: '800+', label: 'Factories audited' },
  { value: '40+', label: 'Countries shipped to' },
  { value: '98%', label: 'Inspection pass rate on first ship' },
]

export const CASE_STUDIES = [
  {
    id: 'case-electronics-retailer',
    slug: 'electronics-retailer',
    industry: 'Consumer Electronics',
    title: 'Cutting defect rates for a North American electronics retailer',
    challenge:
      'A retailer importing small appliances faced a 7% defect rate on arrival, causing returns and lost margin.',
    approach:
      'We re-sourced suppliers against tighter specs, ran pre-production and pre-shipment inspections, and introduced an AQL plan with the factory.',
    result:
      'Defect rate on arrival dropped below 1.5% across the next four containers, and rework costs fell sharply.',
    imgId: 'case-electronics-retailer-img-9a1',
    titleId: 'case-electronics-retailer-title',
    descId: 'case-electronics-retailer-desc',
  },
  {
    id: 'case-home-brand',
    slug: 'home-brand',
    industry: 'Home & Furniture',
    title: 'Consolidating shipments for a DTC home brand',
    challenge:
      'A direct-to-consumer home brand ordered from six suppliers and paid high freight with frequent delays.',
    approach:
      'We consolidated cargo at our warehouse, scheduled combined sea shipments, and managed customs documents centrally.',
    result:
      'Freight cost per unit dropped by roughly 22% and average lead time to warehouse shortened by 9 days.',
    imgId: 'case-home-brand-img-7b2',
    titleId: 'case-home-brand-title',
    descId: 'case-home-brand-desc',
  },
  {
    id: 'case-apparel-importer',
    slug: 'apparel-importer',
    industry: 'Apparel & Textiles',
    title: 'Verifying a factory before a large apparel order',
    challenge:
      'An apparel importer was about to place a six-figure order with a factory they had never visited.',
    approach:
      'We audited the factory on-site, reviewed capacity and certifications, and ran a sample and size set approval process.',
    result:
      'The audit revealed capacity gaps; we redirected the order to a verified factory and delivered on schedule.',
    imgId: 'case-apparel-importer-img-5c3',
    titleId: 'case-apparel-importer-title',
    descId: 'case-apparel-importer-desc',
  },
]

export const FAQS = [
  {
    id: 'faq-1',
    question: 'What does a China sourcing agent actually do?',
    answer:
      'A sourcing agent acts as your local team in China. We find suitable suppliers, verify factories, run quality inspections, follow production, and coordinate shipping so you can import with confidence without traveling.',
  },
  {
    id: 'faq-2',
    question: 'How do you charge for your services?',
    answer:
      'Pricing depends on the scope of work. Some services are project-based, such as factory audits and inspections, while ongoing sourcing can be handled through a commission or retainer. You receive a clear quote before any work begins.',
  },
  {
    id: 'faq-3',
    question: 'Do I have to commit after getting a quote?',
    answer:
      'No. The initial sourcing quote is free and carries no obligation. You can review the shortlisted suppliers and decide whether to proceed.',
  },
  {
    id: 'faq-4',
    question: 'Can you work with my existing supplier?',
    answer:
      'Yes. If you already have a supplier, we can provide factory verification, quality inspection, production follow-up, or shipping coordination for that supplier without changing your sourcing.',
  },
  {
    id: 'faq-5',
    question: 'What happens if goods fail inspection?',
    answer:
      'If a pre-shipment inspection fails, we document the defects, notify the factory, and coordinate rework or replacement. Goods are only released for shipping once they pass the agreed quality criteria.',
  },
  {
    id: 'faq-6',
    question: 'Which countries do you ship to?',
    answer:
      'We coordinate shipping to buyers worldwide, including North America, Europe, the United Kingdom, Australia, and the Middle East. Freight options include sea, air, and express.',
  },
  {
    id: 'faq-7',
    question: 'How long does the sourcing process take?',
    answer:
      'Timelines vary by product and order size. A first shortlist of suppliers is typically ready within a few business days, while a full project from sourcing to delivery depends on production and shipping schedules.',
  },
  {
    id: 'faq-8',
    question: 'What information do you need to start?',
    answer:
      'To begin, share your product description, target price, order quantity, and required timeline. Samples, drawings, or reference links help us source more precisely.',
  },
]

export const BLOG_POSTS = [
  {
    id: 'blog-1',
    slug: 'how-to-verify-a-chinese-supplier',
    title: 'How to Verify a Chinese Supplier Before Placing an Order',
    excerpt:
      'A practical checklist for confirming a factory is real, capable, and compliant before you commit your money.',
    date: '2026-06-18',
    readTime: '6 min read',
    category: 'Supplier Verification',
    imgId: 'blog-verify-supplier-img-3d1',
    titleId: 'blog-verify-supplier-title',
    descId: 'blog-verify-supplier-desc',
  },
  {
    id: 'blog-2',
    slug: 'pre-shipment-inspection-guide',
    title: 'Pre-Shipment Inspection: What It Checks and Why It Matters',
    excerpt:
      'Understand AQL sampling, what inspectors look for, and how a pre-shipment inspection protects your order.',
    date: '2026-06-02',
    readTime: '5 min read',
    category: 'Quality Control',
    imgId: 'blog-psi-img-4e2',
    titleId: 'blog-psi-title',
    descId: 'blog-psi-desc',
  },
  {
    id: 'blog-3',
    slug: 'sea-vs-air-freight-from-china',
    title: 'Sea vs. Air Freight from China: How to Choose',
    excerpt:
      'A comparison of cost, speed, and reliability to help you pick the right freight mode for your order.',
    date: '2026-05-20',
    readTime: '7 min read',
    category: 'Shipping & Logistics',
    imgId: 'blog-freight-img-5f3',
    titleId: 'blog-freight-title',
    descId: 'blog-freight-desc',
  },
  {
    id: 'blog-4',
    slug: 'reducing-defect-rates',
    title: 'Reducing Defect Rates: Setting Specs Your Factory Can Follow',
    excerpt:
      'Why clear specifications and an agreed quality plan do more to cut defects than inspections alone.',
    date: '2026-05-04',
    readTime: '6 min read',
    category: 'Quality Control',
    imgId: 'blog-defects-img-6g4',
    titleId: 'blog-defects-title',
    descId: 'blog-defects-desc',
  },
  {
    id: 'blog-5',
    slug: 'cargo-consolidation-explained',
    title: 'Cargo Consolidation Explained: Save on Freight from Multiple Suppliers',
    excerpt:
      'How combining shipments from several factories into one container lowers cost and simplifies logistics.',
    date: '2026-04-15',
    readTime: '5 min read',
    category: 'Shipping & Logistics',
    imgId: 'blog-consolidation-img-7h5',
    titleId: 'blog-consolidation-title',
    descId: 'blog-consolidation-desc',
  },
  {
    id: 'blog-6',
    slug: 'working-with-a-sourcing-agent',
    title: 'Working With a Sourcing Agent: What to Expect in the First 30 Days',
    excerpt:
      'A realistic timeline of what happens after you request a quote, from shortlist to first inspection.',
    date: '2026-03-28',
    readTime: '6 min read',
    category: 'Sourcing Process',
    imgId: 'blog-agent-img-8i6',
    titleId: 'blog-agent-title',
    descId: 'blog-agent-desc',
  },
]

export const COMPANY = {
  name: 'SSourcing China',
  tagline: 'China Sourcing Agent for Global Buyers',
  email: 'hello@ssourcingchina.com',
  phone: '+86 755 0000 0000',
  address: 'Shenzhen, Guangdong, China',
  hours: 'Mon–Fri, 9:00–18:00 (GMT+8)',
}
