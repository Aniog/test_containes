import {
  Search,
  ShieldCheck,
  ClipboardCheck,
  Factory,
  ShipWheel,
  PackageCheck,
  FileSearch,
  Truck,
  Boxes,
  Handshake,
  AlertTriangle,
  Languages,
  Banknote,
  Clock,
  PackageX,
  BadgeCheck,
  Users,
  Globe2,
  Building2,
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
    id: 'supplier-search',
    icon: Search,
    title: 'Supplier Search & Shortlisting',
    summary:
      'We identify and shortlist suppliers that match your product, target price, and quality requirements across China\u2019s manufacturing hubs.',
    points: [
      'Multi-supplier comparison based on your spec',
      'Price benchmarking across 3\u20135 factories',
      'Capacity and MOQ pre-screening',
    ],
  },
  {
    id: 'factory-verification',
    icon: ShieldCheck,
    title: 'Factory Verification & Audit',
    summary:
      'On-site or remote factory audits to confirm a supplier is real, capable, and reliable before you commit.',
    points: [
      'Business license and export license checks',
      'On-site factory audit with photos and report',
      'Production capacity and equipment review',
    ],
  },
  {
    id: 'quality-inspection',
    icon: ClipboardCheck,
    title: 'Quality Inspection (QC)',
    summary:
      'Independent pre-shipment and during-production inspections against your approved sample and AQL standard.',
    points: [
      'AQL-based statistical sampling',
      'During-production and pre-shipment checks',
      'Detailed photo and video inspection report',
    ],
  },
  {
    id: 'production-follow-up',
    icon: Factory,
    title: 'Production Follow-Up',
    summary:
      'We track your order from deposit to delivery, catching delays and defects early so they can be fixed in time.',
    points: [
      'Scheduled production progress updates',
      'Early detection of delays and defects',
      'Direct communication with the factory',
    ],
  },
  {
    id: 'shipping-coordination',
    icon: ShipWheel,
    title: 'Shipping & Logistics Coordination',
    summary:
      'Consolidation, freight booking, customs documents, and door-to-door tracking for sea, air, and express.',
    points: [
      'Cargo consolidation from multiple suppliers',
      'Sea, air, and express freight booking',
      'Customs and document preparation',
    ],
  },
  {
    id: 'order-management',
    icon: PackageCheck,
    title: 'Order & Sample Management',
    summary:
      'From sample sourcing and approval to order placement and payment terms, we manage the details end to end.',
    points: [
      'Sample sourcing and approval workflow',
      'Purchase order and contract support',
      'Payment term negotiation and milestone tracking',
    ],
  },
]

export const PROCESS_STEPS = [
  {
    id: 'step-1',
    icon: FileSearch,
    step: '01',
    title: 'Share Your Requirements',
    description:
      'Send us your product spec, target price, quantity, and timeline. The more detail you share, the more precise our shortlist.',
  },
  {
    id: 'step-2',
    icon: Search,
    step: '02',
    title: 'Supplier Sourcing & Shortlist',
    description:
      'We search our network and verified databases to shortlist 3\u20135 suppliers that fit your criteria, with price and capacity comparison.',
  },
  {
    id: 'step-3',
    icon: ShieldCheck,
    step: '03',
    title: 'Factory Verification',
    description:
      'We verify business licenses and audit the factory on-site or remotely, so you know the supplier is real and capable.',
  },
  {
    id: 'step-4',
    icon: ClipboardCheck,
    step: '04',
    title: 'Sample & Quality Control',
    description:
      'We coordinate samples, confirm specs, and run during-production and pre-shipment inspections against your approved sample.',
  },
  {
    id: 'step-5',
    icon: Factory,
    step: '05',
    title: 'Production Follow-Up',
    description:
      'We track production milestones, flag risks early, and keep you updated with photos and progress reports.',
  },
  {
    id: 'step-6',
    icon: Truck,
    step: '06',
    title: 'Shipping & Delivery',
    description:
      'We consolidate cargo, book freight, prepare customs documents, and coordinate delivery to your destination port or warehouse.',
  },
]

export const PRODUCT_CATEGORIES = [
  {
    id: 'consumer-electronics',
    name: 'Consumer Electronics',
    description:
      'Audio devices, accessories, small appliances, and electronic gadgets from Shenzhen and Dongguan hubs.',
    imgId: 'prod-electronics-a1b2',
    titleId: 'prod-electronics-title',
    descId: 'prod-electronics-desc',
  },
  {
    id: 'home-living',
    name: 'Home & Living',
    description:
      'Furniture, kitchenware, home textiles, and decor from Foshan, Shantou, and Ningbo clusters.',
    imgId: 'prod-home-c3d4',
    titleId: 'prod-home-title',
    descId: 'prod-home-desc',
  },
  {
    id: 'apparel-textiles',
    name: 'Apparel & Textiles',
    description:
      'Garments, fabrics, bags, and accessories from Guangzhou, Shaoxing, and Quanzhou textile regions.',
    imgId: 'prod-apparel-e5f6',
    titleId: 'prod-apparel-title',
    descId: 'prod-apparel-desc',
  },
  {
    id: 'hardware-tools',
    name: 'Hardware & Tools',
    description:
      'Hand tools, fasteners, fittings, and industrial hardware from Yongkang and Wenzhou manufacturing bases.',
    imgId: 'prod-hardware-g7h8',
    titleId: 'prod-hardware-title',
    descId: 'prod-hardware-desc',
  },
  {
    id: 'beauty-personal-care',
    name: 'Beauty & Personal Care',
    description:
      'Cosmetics, skincare packaging, and personal care products from Guangdong beauty supply chains.',
    imgId: 'prod-beauty-i9j0',
    titleId: 'prod-beauty-title',
    descId: 'prod-beauty-desc',
  },
  {
    id: 'outdoor-sports',
    name: 'Outdoor & Sports',
    description:
      'Camping gear, fitness equipment, and sporting goods from Zhejiang and Fujian outdoor manufacturers.',
    imgId: 'prod-outdoor-k1l2',
    titleId: 'prod-outdoor-title',
    descId: 'prod-outdoor-desc',
  },
]

export const PROBLEMS = [
  {
    icon: AlertTriangle,
    title: 'Unverified Suppliers',
    description:
      'Online supplier listings can be misleading. We verify factories on the ground so you avoid scams and middlemen posing as manufacturers.',
  },
  {
    icon: Languages,
    title: 'Language & Culture Barriers',
    description:
      'Miscommunication causes spec errors and delays. Our bilingual team bridges the gap between you and the factory.',
  },
  {
    icon: Banknote,
    title: 'Hidden Costs & Overpricing',
    description:
      'Without local price benchmarks, buyers overpay. We benchmark quotes across multiple suppliers for fair pricing.',
  },
  {
    icon: Clock,
    title: 'Production Delays',
    description:
      'Factories often miss deadlines silently. We follow up on milestones and flag delays early so you can plan.',
  },
  {
    icon: PackageX,
    title: 'Quality Inconsistency',
    description:
      'Samples look great but bulk differs. We inspect against your approved sample using AQL standards before shipment.',
  },
  {
    icon: Boxes,
    title: 'Logistics Complexity',
    description:
      'Multiple suppliers, consolidation, and customs paperwork are hard to manage remotely. We coordinate it end to end.',
  },
]

export const TRUST_POINTS = [
  {
    icon: BadgeCheck,
    title: 'On-the-Ground Team in China',
    description:
      'Local inspectors and auditors in major manufacturing hubs including Shenzhen, Guangzhou, Yiwu, and Ningbo.',
  },
  {
    icon: Users,
    title: 'Bilingual Project Managers',
    description:
      'English-speaking project managers keep communication clear and keep you updated at every milestone.',
  },
  {
    icon: FileSearch,
    title: 'Transparent Reporting',
    description:
      'Detailed audit, inspection, and production reports with photos and videos \u2014 no black-box updates.',
  },
  {
    icon: Globe2,
    title: 'Experience with Global Buyers',
    description:
      'We work with importers, brands, and Amazon sellers across North America, Europe, Australia, and the Middle East.',
  },
  {
    icon: Building2,
    title: 'No Conflict of Interest',
    description:
      'We work for you, not the factory. We do not take commissions from suppliers, so our recommendations stay independent.',
  },
  {
    icon: Handshake,
    title: 'Flexible Engagement',
    description:
      'Use us for a single inspection or full end-to-end sourcing \u2014 no long-term contract required to start.',
  },
]

export const STATS = [
  { value: '12+', label: 'Years sourcing from China' },
  { value: '2,000+', label: 'Suppliers screened' },
  { value: '40+', label: 'Countries shipped to' },
  { value: '98%', label: 'Inspection report on-time rate' },
]

export const CASE_STUDIES = [
  {
    id: 'case-electronics-brand',
    slug: 'electronics-brand-quality-recovery',
    client: 'North American Electronics Brand',
    industry: 'Consumer Electronics',
    challenge:
      'A DTC electronics brand faced a 12% defect rate on Bluetooth speaker shipments, causing returns and negative reviews.',
    approach:
      'We audited the factory, identified the root cause in the assembly line, and implemented a during-production inspection plus tightened AQL pre-shipment checks.',
    result:
      'Defect rate dropped to under 2% within two production cycles, and returns fell by over 70%.',
    imgId: 'case-electronics-m3n4',
    titleId: 'case-electronics-title',
    descId: 'case-electronics-desc',
    tags: ['Quality Inspection', 'Factory Audit', 'Electronics'],
  },
  {
    id: 'case-home-decor',
    slug: 'home-decor-supplier-switch',
    client: 'European Home Decor Retailer',
    industry: 'Home & Living',
    challenge:
      'A retailer\u2019s original supplier raised prices and slipped deadlines. They needed a reliable alternative fast.',
    approach:
      'We shortlisted four factories in Foshan, audited the top two on-site, and coordinated sample approval before transferring production.',
    result:
      'New supplier onboarded in 5 weeks with a 9% lower unit cost and on-time delivery for the first three orders.',
    imgId: 'case-home-o5p6',
    titleId: 'case-home-title',
    descId: 'case-home-desc',
    tags: ['Supplier Search', 'Factory Audit', 'Home & Living'],
  },
  {
    id: 'case-apparel-consolidation',
    slug: 'apparel-multi-supplier-consolidation',
    client: 'Australian Apparel Importer',
    industry: 'Apparel & Textiles',
    challenge:
      'An importer sourced from five separate garment factories, leading to high freight costs and complex coordination.',
    approach:
      'We consolidated all five suppliers\u2019 goods into one warehouse, repacked into mixed containers, and booked consolidated sea freight.',
    result:
      'Shipping cost per unit reduced by 23% and lead time to warehouse cut by 10 days.',
    imgId: 'case-apparel-q7r8',
    titleId: 'case-apparel-title',
    descId: 'case-apparel-desc',
    tags: ['Consolidation', 'Shipping', 'Apparel'],
  },
]

export const FAQS = [
  {
    q: 'What does a China sourcing agent actually do?',
    a: 'A sourcing agent helps you find suitable suppliers, verify they are real and capable, manage samples and orders, inspect quality, follow up on production, and coordinate shipping. We act as your local team in China so you can source confidently without traveling.',
  },
  {
    q: 'How do you charge for your services?',
    a: 'We offer flexible engagement models: project-based fees, service packages (audit, inspection, sourcing), or a percentage on order value for full end-to-end management. The right model depends on your order size and scope. Share your requirements and we will send a transparent quote.',
  },
  {
    q: 'Do you take commissions from suppliers?',
    a: 'No. We work for you, the buyer, and do not accept commissions from factories. This keeps our supplier recommendations independent and aligned with your interests.',
  },
  {
    q: 'Can you work with my existing supplier?',
    a: 'Yes. Many clients use us only for factory audits, quality inspections, or production follow-up with suppliers they already work with. You do not need to switch suppliers to use our services.',
  },
  {
    q: 'What is the typical minimum order quantity (MOQ)?',
    a: 'MOQ depends on the product and factory. We help negotiate MOQs based on your needs and can find factories willing to accept lower starting quantities, especially for new buyers building a relationship.',
  },
  {
    q: 'How long does the sourcing process take?',
    a: 'A typical shortlist takes 5\u201310 business days. Factory audits take 3\u20137 days depending on location. Sample approval and first production usually take 4\u20138 weeks depending on the product and quantity.',
  },
  {
    q: 'Which shipping methods do you coordinate?',
    a: 'We coordinate sea freight (FCL and LCL), air freight, and express courier. We also handle consolidation from multiple suppliers, customs documents, and door-to-door tracking to your destination.',
  },
  {
    q: 'Do you sign NDAs?',
    a: 'Yes. We are happy to sign a mutual non-disclosure agreement before you share product designs, specs, or supplier details with us.',
  },
]

export const BLOG_POSTS = [
  {
    id: 'blog-verify-supplier',
    slug: 'how-to-verify-a-china-supplier',
    title: 'How to Verify a China Supplier Before Placing an Order',
    excerpt:
      'A practical checklist for checking business licenses, factory capacity, and export qualifications before you commit to a supplier.',
    date: '2026-06-18',
    readTime: '6 min read',
    category: 'Supplier Verification',
    imgId: 'blog-verify-s9t0',
    titleId: 'blog-verify-title',
    descId: 'blog-verify-desc',
  },
  {
    id: 'blog-aql-inspection',
    slug: 'understanding-aql-quality-inspection',
    title: 'Understanding AQL: A Buyer\u2019s Guide to Quality Inspection',
    excerpt:
      'What AQL levels mean, how sampling works, and why pre-shipment inspection prevents costly bulk defects.',
    date: '2026-06-02',
    readTime: '7 min read',
    category: 'Quality Control',
    imgId: 'blog-aql-u1v2',
    titleId: 'blog-aql-title',
    descId: 'blog-aql-desc',
  },
  {
    id: 'blog-fcl-lcl',
    slug: 'fcl-vs-lcl-shipping-from-china',
    title: 'FCL vs LCL: Choosing the Right Sea Freight from China',
    excerpt:
      'When full container load makes sense, when less-than-container load is better, and how consolidation cuts costs.',
    date: '2026-05-20',
    readTime: '5 min read',
    category: 'Shipping & Logistics',
    imgId: 'blog-fcl-w3x4',
    titleId: 'blog-fcl-title',
    descId: 'blog-fcl-desc',
  },
  {
    id: 'blog-negotiate-moq',
    slug: 'how-to-negotiate-moq-with-factories',
    title: 'How to Negotiate MOQ with Chinese Factories',
    excerpt:
      'Practical tactics to lower minimum order quantities without damaging the supplier relationship.',
    date: '2026-05-04',
    readTime: '6 min read',
    category: 'Sourcing Strategy',
    imgId: 'blog-moq-y5z6',
    titleId: 'blog-moq-title',
    descId: 'blog-moq-desc',
  },
  {
    id: 'blog-production-delays',
    slug: 'preventing-production-delays-china',
    title: 'Preventing Production Delays When Sourcing from China',
    excerpt:
      'Common causes of delays and how milestone-based production follow-up keeps your order on schedule.',
    date: '2026-04-15',
    readTime: '7 min read',
    category: 'Production Management',
    imgId: 'blog-delays-a7b8',
    titleId: 'blog-delays-title',
    descId: 'blog-delays-desc',
  },
  {
    id: 'blog-sourcing-hubs',
    slug: 'china-manufacturing-hubs-guide',
    title: 'China Manufacturing Hubs: Where to Source What',
    excerpt:
      'A region-by-region guide to China\u2019s manufacturing clusters, from Shenzhen electronics to Yiwu small goods.',
    date: '2026-03-28',
    readTime: '8 min read',
    category: 'Sourcing Strategy',
    imgId: 'blog-hubs-c9d0',
    titleId: 'blog-hubs-title',
    descId: 'blog-hubs-desc',
  },
]

export const CONTACT_INFO = {
  email: 'hello@ssourcingchina.com',
  phone: '+86 755 0000 0000',
  whatsapp: '+86 138 0000 0000',
  address: 'Shenzhen, Guangdong, China',
  hours: 'Mon\u2013Fri, 9:00\u201318:00 (GMT+8)',
}
