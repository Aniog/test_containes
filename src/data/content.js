// Central content data for SSourcing China website

export const company = {
  name: 'SSourcing China',
  tagline: 'China Sourcing Agent for Global Buyers',
  email: 'hello@ssourcingchina.com',
  phone: '+86 755 8888 0000',
  whatsapp: '+86 138 0000 0000',
  address: 'Floor 18, Tower B, Kerry Plaza, Futian District, Shenzhen, China',
  hours: 'Mon–Fri, 9:00–18:00 (GMT+8)',
}

export const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'How It Works', to: '/how-it-works' },
  { label: 'Products We Source', to: '/products' },
  { label: 'Case Studies', to: '/case-studies' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contact', to: '/contact' },
]

export const services = [
  {
    id: 'supplier-sourcing',
    title: 'Supplier Sourcing',
    icon: 'Search',
    summary: 'Find qualified manufacturers that match your product, budget, and quality requirements.',
    points: [
      'Shortlist 3–5 vetted factories per product',
      'Compare pricing, MOQ, and lead times',
      'Verify business licenses and export experience',
    ],
    imgId: 'svc-sourcing-a1b2c3',
    titleId: 'svc-sourcing-title',
    descId: 'svc-sourcing-desc',
  },
  {
    id: 'factory-verification',
    title: 'Factory Verification',
    icon: 'Building2',
    summary: 'On-site audits to confirm a factory is real, capable, and reliable before you commit.',
    points: [
      'Physical factory visits and photo/video reports',
      'Capacity, equipment, and workforce checks',
      'Compliance and certification review',
    ],
    imgId: 'svc-verify-d4e5f6',
    titleId: 'svc-verify-title',
    descId: 'svc-verify-desc',
  },
  {
    id: 'quality-inspection',
    title: 'Quality Inspection',
    icon: 'ClipboardCheck',
    summary: 'Independent QC checks during and after production to catch defects before shipping.',
    points: [
      'Pre-production material inspection',
      'In-line and final random inspection (AQL)',
      'Detailed inspection reports with photos',
    ],
    imgId: 'svc-qc-g7h8i9',
    titleId: 'svc-qc-title',
    descId: 'svc-qc-desc',
  },
  {
    id: 'production-follow-up',
    title: 'Production Follow-up',
    icon: 'Factory',
    summary: 'Regular updates on your order status so you know exactly where production stands.',
    points: [
      'Scheduled production milestones',
      'Early warning on delays or issues',
      'Transparent progress reporting',
    ],
    imgId: 'svc-prod-j1k2l3',
    titleId: 'svc-prod-title',
    descId: 'svc-prod-desc',
  },
  {
    id: 'shipping-coordination',
    title: 'Shipping Coordination',
    icon: 'Ship',
    summary: 'Consolidation, freight forwarding, and customs paperwork handled end to end.',
    points: [
      'Sea, air, and express freight options',
      'Multi-supplier consolidation',
      'Export documents and customs support',
    ],
    imgId: 'svc-ship-m4n5o6',
    titleId: 'svc-ship-title',
    descId: 'svc-ship-desc',
  },
  {
    id: 'full-sourcing-service',
    title: 'Full Sourcing Service',
    icon: 'Layers',
    summary: 'A dedicated team managing your entire project from spec to delivery.',
    points: [
      'One point of contact for all suppliers',
      'End-to-end project management',
      'Suitable for ongoing import programs',
    ],
    imgId: 'svc-full-p7q8r9',
    titleId: 'svc-full-title',
    descId: 'svc-full-desc',
  },
]

export const processSteps = [
  {
    step: '01',
    title: 'Share Your Requirements',
    desc: 'Tell us about your product, target price, quantity, and quality standards. The more detail you provide, the more precise our sourcing.',
    icon: 'FileText',
  },
  {
    step: '02',
    title: 'Supplier Search & Shortlist',
    desc: 'We identify and screen manufacturers, then present 3–5 qualified options with pricing, MOQ, and factory profiles for comparison.',
    icon: 'Search',
  },
  {
    step: '03',
    title: 'Factory Verification',
    desc: 'We visit or audit the shortlisted factories to confirm capacity, equipment, and compliance before you place an order.',
    icon: 'Building2',
  },
  {
    step: '04',
    title: 'Sample & Negotiation',
    desc: 'We coordinate samples, negotiate price and terms, and help you confirm the supplier that best fits your needs.',
    icon: 'PackageCheck',
  },
  {
    step: '05',
    title: 'Production & QC',
    desc: 'During production we track milestones and run quality inspections to catch issues early and keep your order on schedule.',
    icon: 'ClipboardCheck',
  },
  {
    step: '06',
    title: 'Inspection & Shipping',
    desc: 'A final inspection confirms quality, then we consolidate goods, arrange freight, and handle export documents to your destination.',
    icon: 'Ship',
  },
]

export const productCategories = [
  {
    id: 'consumer-electronics',
    name: 'Consumer Electronics',
    desc: 'Audio devices, accessories, smart home, and small appliances.',
    imgId: 'prod-electronics-1a2b3c',
    titleId: 'prod-electronics-title',
    descId: 'prod-electronics-desc',
  },
  {
    id: 'home-living',
    name: 'Home & Living',
    desc: 'Kitchenware, home textiles, furniture, and decor items.',
    imgId: 'prod-home-4d5e6f',
    titleId: 'prod-home-title',
    descId: 'prod-home-desc',
  },
  {
    id: 'apparel-textiles',
    name: 'Apparel & Textiles',
    desc: 'Clothing, fabrics, bags, and fashion accessories.',
    imgId: 'prod-apparel-7g8h9i',
    titleId: 'prod-apparel-title',
    descId: 'prod-apparel-desc',
  },
  {
    id: 'outdoor-sports',
    name: 'Outdoor & Sports',
    desc: 'Camping gear, fitness equipment, and sporting goods.',
    imgId: 'prod-outdoor-j1k2l3',
    titleId: 'prod-outdoor-title',
    descId: 'prod-outdoor-desc',
  },
  {
    id: 'beauty-personal-care',
    name: 'Beauty & Personal Care',
    desc: 'Cosmetics tools, grooming, and personal care products.',
    imgId: 'prod-beauty-m4n5o6',
    titleId: 'prod-beauty-title',
    descId: 'prod-beauty-desc',
  },
  {
    id: 'industrial-hardware',
    name: 'Industrial & Hardware',
    desc: 'Tools, fittings, components, and light industrial parts.',
    imgId: 'prod-industrial-p7q8r9',
    titleId: 'prod-industrial-title',
    descId: 'prod-industrial-desc',
  },
  {
    id: 'pet-products',
    name: 'Pet Products',
    desc: 'Pet toys, accessories, beds, and feeding supplies.',
    imgId: 'prod-pet-s1t2u3',
    titleId: 'prod-pet-title',
    descId: 'prod-pet-desc',
  },
  {
    id: 'promotional-gifts',
    name: 'Promotional & Gifts',
    desc: 'Custom branded merchandise and corporate gift items.',
    imgId: 'prod-promo-v4w5x6',
    titleId: 'prod-promo-title',
    descId: 'prod-promo-desc',
  },
]

export const problems = [
  {
    icon: 'AlertTriangle',
    problem: 'Suppliers that look good online but cannot deliver',
    solution: 'We verify factories on-site and confirm real production capacity before you commit.',
  },
  {
    icon: 'BadgeX',
    problem: 'Inconsistent product quality between samples and bulk orders',
    solution: 'Independent QC inspections during and after production catch defects before shipping.',
  },
  {
    icon: 'Languages',
    problem: 'Language barriers and slow communication with factories',
    solution: 'Our bilingual team manages communication so requirements are clearly understood.',
  },
  {
    icon: 'Clock',
    problem: 'Unclear production status and unexpected delays',
    solution: 'Regular production follow-up with milestone updates and early warnings on issues.',
  },
  {
    icon: 'PackageX',
    problem: 'Disorganized shipping and customs paperwork',
    solution: 'We consolidate goods and handle freight, documents, and customs coordination.',
  },
  {
    icon: 'ShieldAlert',
    problem: 'Risk of paying the wrong supplier or losing deposits',
    solution: 'We verify legal entities and guide secure payment terms to protect your funds.',
  },
]

export const trustPoints = [
  { icon: 'MapPin', title: 'Based in Shenzhen', desc: 'On the ground in one of China’s largest manufacturing hubs.' },
  { icon: 'Users', title: 'Bilingual Team', desc: 'English-speaking project managers who understand factory culture.' },
  { icon: 'Building2', title: 'Factory Audits', desc: 'Physical visits and detailed audit reports, not just online checks.' },
  { icon: 'ClipboardCheck', title: 'Independent QC', desc: 'Inspections based on AQL standards with photo documentation.' },
  { icon: 'Globe', title: 'Global Shipping', desc: 'Experience shipping to North America, Europe, Australia, and beyond.' },
  { icon: 'ShieldCheck', title: 'Transparent Process', desc: 'Clear reporting at every stage with no hidden markups on quotes.' },
]

export const stats = [
  { value: '12+', label: 'Years sourcing experience' },
  { value: '500+', label: 'Factories audited' },
  { value: '40+', label: 'Countries shipped to' },
  { value: '98%', label: 'Inspection pass rate on first final QC' },
]

export const caseStudies = [
  {
    id: 'electronics-brand',
    client: 'North American Electronics Brand',
    industry: 'Consumer Electronics',
    challenge: 'Needed a reliable supplier for a new line of audio accessories with strict quality standards and a tight launch window.',
    approach: 'Shortlisted 5 factories, audited 3 on-site, ran pre-production and final QC inspections, and coordinated consolidated air freight.',
    result: 'Launched on schedule with a 0.8% defect rate on the first 20,000 units and a 14% cost reduction versus the previous supplier.',
    imgId: 'case-electronics-y7z8a9',
    titleId: 'case-electronics-title',
    descId: 'case-electronics-desc',
  },
  {
    id: 'home-retailer',
    client: 'European Home & Living Retailer',
    industry: 'Home Goods',
    challenge: 'Wanted to diversify suppliers across kitchenware and textiles while maintaining consistent quality across categories.',
    approach: 'Built a vetted supplier network across 4 product categories, implemented AQL inspections, and set up multi-supplier consolidation.',
    result: 'Reduced average lead time by 18 days and cut logistics costs by 22% through consolidated sea shipments.',
    imgId: 'case-home-b1c2d3',
    titleId: 'case-home-title',
    descId: 'case-home-desc',
  },
  {
    id: 'apparel-startup',
    client: 'DTC Apparel Startup',
    industry: 'Apparel & Textiles',
    challenge: 'First-time importer with no China experience needed small-batch production and clear guidance through the entire process.',
    approach: 'Provided full sourcing service from supplier search to shipping, including sample coordination and production milestone tracking.',
    result: 'Delivered the first collection on time with full QC documentation, enabling a smooth second production run.',
    imgId: 'case-apparel-e4f5g6',
    titleId: 'case-apparel-title',
    descId: 'case-apparel-desc',
  },
]

export const faqs = [
  {
    q: 'What does a China sourcing agent actually do?',
    a: 'A sourcing agent acts as your local representative in China. We find and verify suppliers, negotiate terms, coordinate samples, track production, run quality inspections, and arrange shipping. The goal is to reduce your risk and save you time when buying from China.',
  },
  {
    q: 'How do you charge for your services?',
    a: 'We offer flexible pricing depending on the scope of work, including project-based fees, service packages, and commission models. After understanding your requirements we provide a clear quote with no hidden markups on factory prices.',
  },
  {
    q: 'Do I need a large order quantity to work with you?',
    a: 'Not necessarily. We work with both small and large buyers. Some services, such as factory audits and QC inspections, are available as standalone options even for smaller orders.',
  },
  {
    q: 'Can you inspect products before they ship?',
    a: 'Yes. We conduct pre-production, in-line, and final random inspections based on AQL standards. You receive a detailed report with photos and a pass/fail result before goods leave the factory.',
  },
  {
    q: 'Which product categories do you source?',
    a: 'We source across consumer electronics, home and living, apparel and textiles, outdoor and sports, beauty and personal care, industrial hardware, pet products, and promotional items. If your category is not listed, contact us to check.',
  },
  {
    q: 'How long does the sourcing process take?',
    a: 'It depends on the product and requirements. Supplier shortlisting typically takes 5–10 business days, while a full project from sourcing to shipping can take several weeks to a few months. We provide a timeline estimate after the initial consultation.',
  },
  {
    q: 'Do you handle shipping and customs?',
    a: 'We coordinate freight forwarding (sea, air, and express), consolidate goods from multiple suppliers, and prepare export documents. Customs clearance at your destination is usually handled by your local broker, which we can help coordinate.',
  },
  {
    q: 'How do you protect my payments?',
    a: 'We verify the legal entity of each supplier, recommend secure payment terms, and advise on trade assurance or escrow options where available. We never ask you to pay an unverified factory directly without verification.',
  },
]

export const blogPosts = [
  {
    id: 'how-to-verify-china-supplier',
    title: 'How to Verify a China Supplier Before Placing an Order',
    excerpt: 'Online supplier directories are a starting point, not proof. Here is a practical checklist for confirming a factory is real and capable.',
    date: '2026-07-10',
    readTime: '6 min read',
    category: 'Supplier Verification',
    imgId: 'blog-verify-h1i2j3',
    titleId: 'blog-verify-title',
    descId: 'blog-verify-desc',
  },
  {
    id: 'understanding-aql-inspection',
    title: 'Understanding AQL Quality Inspection Levels',
    excerpt: 'AQL is the standard behind most pre-shipment inspections. Learn what the levels mean and how to set the right tolerance for your product.',
    date: '2026-06-22',
    readTime: '5 min read',
    category: 'Quality Control',
    imgId: 'blog-aql-k4l5m6',
    titleId: 'blog-aql-title',
    descId: 'blog-aql-desc',
  },
  {
    id: 'sea-vs-air-freight-china',
    title: 'Sea vs. Air Freight from China: How to Choose',
    excerpt: 'Cost, speed, and product type all affect the right freight choice. A practical comparison to help you plan your next shipment.',
    date: '2026-05-30',
    readTime: '4 min read',
    category: 'Shipping',
    imgId: 'blog-freight-n7o8p9',
    titleId: 'blog-freight-title',
    descId: 'blog-freight-desc',
  },
  {
    id: 'negotiating-moq-with-factories',
    title: 'Negotiating MOQ with Chinese Factories',
    excerpt: 'Minimum order quantities are often flexible. These negotiation approaches can help smaller buyers get started without overcommitting.',
    date: '2026-05-12',
    readTime: '5 min read',
    category: 'Sourcing Tips',
    imgId: 'blog-moq-q1r2s3',
    titleId: 'blog-moq-title',
    descId: 'blog-moq-desc',
  },
  {
    id: 'common-importing-mistakes',
    title: 'Common Mistakes First-Time Importers Make',
    excerpt: 'From skipping samples to ignoring compliance, these are the avoidable errors that cost new buyers time and money.',
    date: '2026-04-20',
    readTime: '6 min read',
    category: 'Sourcing Tips',
    imgId: 'blog-mistakes-t4u5v6',
    titleId: 'blog-mistakes-title',
    descId: 'blog-mistakes-desc',
  },
  {
    id: 'production-follow-up-guide',
    title: 'Why Production Follow-up Matters',
    excerpt: 'Placing an order is only the beginning. Regular follow-up is what keeps your shipment on schedule and your quality consistent.',
    date: '2026-03-28',
    readTime: '4 min read',
    category: 'Production',
    imgId: 'blog-followup-w7x8y9',
    titleId: 'blog-followup-title',
    descId: 'blog-followup-desc',
  },
]
