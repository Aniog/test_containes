// Central content for SSourcing China. Used across multiple pages.

export const COMPANY = {
  name: 'SSourcing China',
  shortName: 'SSourcing',
  tagline: 'China Sourcing Agent for Global Buyers',
  email: 'hello@ssourcingchina.com',
  phone: '+86 755 0000 0000',
  whatsapp: '+86 138 0000 0000',
  address: 'Floor 18, Tower B, Hi-Tech Plaza, Nanshan District, Shenzhen, China',
  hours: 'Mon–Fri, 9:00–18:00 (GMT+8)',
}

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
    slug: 'supplier_sourcing',
    icon: 'Search',
    title: 'Supplier Sourcing',
    summary:
      'We identify and shortlist reliable manufacturers matched to your product, MOQ, and quality requirements.',
    points: [
      'Database of vetted factories across major manufacturing hubs',
      'Side-by-side comparison of price, MOQ, capacity, and lead time',
      'Direct negotiation on your behalf for better terms',
    ],
  },
  {
    id: 'factory-verification',
    slug: 'factory_verification',
    icon: 'Building2',
    title: 'Factory Verification',
    summary:
      'On-site audits confirm a factory is real, capable, and legally registered before you commit any deposit.',
    points: [
      'Business license and export qualification checks',
      'On-site capacity, equipment, and workforce audit',
      'Detailed verification report with photos and video',
    ],
  },
  {
    id: 'quality-inspection',
    slug: 'quality_inspection',
    icon: 'ClipboardCheck',
    title: 'Quality Inspection',
    summary:
      'Independent QC inspections at every key stage catch defects before goods leave the factory.',
    points: [
      'Pre-production, during-production, and pre-shipment inspection',
      'AQL statistical sampling per your spec sheet',
      'Clear pass / fail report with defect photos',
    ],
  },
  {
    id: 'production-followup',
    slug: 'production_followup',
    icon: 'Factory',
    title: 'Production Follow-Up',
    summary:
      'We track your order from kickoff to completion so delays and issues are caught early, not at shipment.',
    points: [
      'Weekly production status updates with photos',
      'Early warning on material or scheduling risks',
      'On-site checks at critical milestones',
    ],
  },
  {
    id: 'shipping-logistics',
    slug: 'shipping_logistics',
    icon: 'Ship',
    title: 'Shipping & Logistics',
    summary:
      'Consolidated freight, customs paperwork, and door-to-door coordination handled end to end.',
    points: [
      'Sea, air, rail, and express freight comparison',
      'Cargo consolidation from multiple suppliers',
      'Customs clearance and final-mile coordination',
    ],
  },
  {
    id: 'full-service',
    slug: 'full_service',
    icon: 'Layers',
    title: 'Full-Service Sourcing',
    summary:
      'A dedicated team manages the entire process from sourcing to delivery as your on-the-ground partner.',
    points: [
      'One point of contact for the whole project',
      'Transparent pricing and consolidated reporting',
      'Suitable for ongoing import programs',
    ],
  },
]

export const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Share Your Requirements',
    description:
      'Tell us your product, target price, quantity, quality standards, and timeline. The more detail, the better we can match suppliers.',
  },
  {
    step: '02',
    title: 'Supplier Sourcing & Shortlist',
    description:
      'We screen our factory network and market to present 2–4 qualified suppliers with transparent price and capability comparison.',
  },
  {
    step: '03',
    title: 'Factory Verification',
    description:
      'Before you commit, we audit the shortlisted factory on-site and deliver a verification report with photos and video.',
  },
  {
    step: '04',
    title: 'Sampling & Negotiation',
    description:
      'We coordinate samples, confirm specifications, and negotiate price, MOQ, and payment terms on your behalf.',
  },
  {
    step: '05',
    title: 'Production & QC',
    description:
      'During production we track progress and run independent quality inspections at key milestones to catch issues early.',
  },
  {
    step: '06',
    title: 'Inspection & Shipping',
    description:
      'A pre-shipment inspection confirms quality, then we arrange consolidation, freight, and customs to your destination.',
  },
]

export const PRODUCT_CATEGORIES = [
  {
    id: 'consumer-electronics',
    title: 'Consumer Electronics',
    desc: 'Audio devices, accessories, smart home, and small appliances from Shenzhen and Dongguan hubs.',
    imgId: 'prod-electronics-a1b2',
    titleId: 'prod-electronics-title',
    descId: 'prod-electronics-desc',
  },
  {
    id: 'home-lifestyle',
    title: 'Home & Lifestyle',
    desc: 'Kitchenware, home textiles, furniture, and decor sourced from established home-goods clusters.',
    imgId: 'prod-home-c3d4',
    titleId: 'prod-home-title',
    descId: 'prod-home-desc',
  },
  {
    id: 'apparel-textiles',
    title: 'Apparel & Textiles',
    desc: 'Garments, fabrics, bags, and accessories with fabric sourcing and small-batch capability.',
    imgId: 'prod-apparel-e5f6',
    titleId: 'prod-apparel-title',
    descId: 'prod-apparel-desc',
  },
  {
    id: 'hardware-tools',
    title: 'Hardware & Tools',
    desc: 'Hand tools, fasteners, fittings, and industrial hardware from precision manufacturing regions.',
    imgId: 'prod-hardware-g7h8',
    titleId: 'prod-hardware-title',
    descId: 'prod-hardware-desc',
  },
  {
    id: 'beauty-personal-care',
    title: 'Beauty & Personal Care',
    desc: 'Cosmetics, skincare packaging, and grooming products with compliance documentation support.',
    imgId: 'prod-beauty-i9j0',
    titleId: 'prod-beauty-title',
    descId: 'prod-beauty-desc',
  },
  {
    id: 'outdoor-sports',
    title: 'Outdoor & Sports',
    desc: 'Camping gear, fitness equipment, and sporting goods built for durability and export standards.',
    imgId: 'prod-outdoor-k1l2',
    titleId: 'prod-outdoor-title',
    descId: 'prod-outdoor-desc',
  },
]

export const PROBLEMS = [
  {
    icon: 'AlertTriangle',
    title: 'Unverified Suppliers',
    description:
      'Online listings can be trading companies posing as factories, or worse, fraudulent. We verify every supplier on-site before you pay.',
  },
  {
    icon: 'BadgeX',
    title: 'Inconsistent Quality',
    description:
      'Samples look great but bulk orders arrive with defects. Our staged QC inspections catch problems before shipment.',
  },
  {
    icon: 'Languages',
    title: 'Communication Barriers',
    description:
      'Language gaps and time zones cause costly misunderstandings. We bridge the gap as your on-the-ground team.',
  },
  {
    icon: 'Clock',
    title: 'Production Delays',
    description:
      'Without follow-up, orders slip silently. We track production weekly and flag risks early so you are never surprised.',
  },
  {
    icon: 'FileWarning',
    title: 'Hidden Costs & Specs',
    description:
      'Unclear quotes hide extra fees and spec downgrades. We document exact terms and confirm specs in writing.',
  },
  {
    icon: 'PackageX',
    title: 'Shipping Complexity',
    description:
      'Multiple suppliers, customs, and freight are hard to coordinate. We consolidate and manage logistics end to end.',
  },
]

export const TRUST_POINTS = [
  {
    icon: 'ShieldCheck',
    title: 'Vetted Factory Network',
    description:
      'Every supplier we recommend has passed an on-site verification audit covering capacity, qualifications, and quality systems.',
  },
  {
    icon: 'Eye',
    title: 'Independent QC',
    description:
      'Our inspectors work for you, not the factory. Reports are objective, photo-backed, and based on your spec sheet.',
  },
  {
    icon: 'MapPin',
    title: 'On the Ground in China',
    description:
      'Teams based in Shenzhen, Yiwu, and Ningbo cover the major manufacturing hubs so we can be at a factory within hours.',
  },
  {
    icon: 'ReceiptText',
    title: 'Transparent Pricing',
    description:
      'You see real factory prices and a clear service fee. No hidden markups, no commissions taken from suppliers.',
  },
]

export const STATS = [
  { value: '12+', label: 'Years sourcing in China' },
  { value: '800+', label: 'Factories verified' },
  { value: '40+', label: 'Countries served' },
  { value: '98%', label: 'Inspection pass rate on rework' },
]

export const CASE_STUDIES = [
  {
    id: 'electronics-startup',
    title: 'Scaling a Consumer Electronics Startup',
    client: 'D2C audio brand, North America',
    category: 'Consumer Electronics',
    challenge:
      'A fast-growing audio brand needed to move from a small trading-company supplier to a direct factory relationship to cut costs and stabilize quality as volumes grew.',
    approach:
      'We shortlisted three OEM factories in Dongguan, verified capacity and certifications on-site, coordinated golden samples, and ran pre-shipment inspections on every order.',
    result:
      'Unit cost reduced by 18%, defect rate dropped from 6% to under 1%, and lead times stabilized at 35 days.',
    imgId: 'case-electronics-m3n4',
    titleId: 'case-electronics-title',
    descId: 'case-electronics-desc',
  },
  {
    id: 'home-goods-retailer',
    title: 'Consolidating a Multi-Category Home Goods Program',
    client: 'Mid-size home retailer, Europe',
    category: 'Home & Lifestyle',
    challenge:
      'The retailer sourced from eight separate suppliers across China, leading to fragmented shipping, inconsistent QC, and high logistics costs.',
    approach:
      'We consolidated suppliers by region, introduced staged inspections, and set up a single consolidation warehouse with weekly container loading.',
    result:
      'Logistics cost cut by 24%, on-time delivery improved to 95%, and a single point of contact replaced eight vendor relationships.',
    imgId: 'case-home-o5p6',
    titleId: 'case-home-title',
    descId: 'case-home-desc',
  },
  {
    id: 'apparel-brand',
    title: 'Rescuing a Delayed Apparel Order',
    client: 'Apparel brand, Australia',
    category: 'Apparel & Textiles',
    challenge:
      'A seasonal apparel order was six weeks behind schedule with no clear answers from the factory, risking a missed retail launch.',
    approach:
      'Our team visited the factory, identified a material bottleneck, sourced an alternate fabric supplier, and instituted daily production tracking until completion.',
    result:
      'Order delivered three weeks ahead of the revised timeline, launch saved, and the brand switched to ongoing production follow-up.',
    imgId: 'case-apparel-q7r8',
    titleId: 'case-apparel-title',
    descId: 'case-apparel-desc',
  },
]

export const FAQS = [
  {
    q: 'What does a China sourcing agent actually do?',
    a: 'A sourcing agent acts as your on-the-ground team in China. We find qualified suppliers, verify factories, negotiate terms, track production, inspect quality, and coordinate shipping so you can import reliably without traveling or speaking the language.',
  },
  {
    q: 'How do you charge for your services?',
    a: 'We work on a transparent service-fee model. You see the real factory price and pay a clearly defined agency fee. We do not take hidden commissions from suppliers. For ongoing programs we also offer monthly retainer arrangements.',
  },
  {
    q: 'Do I need a large order quantity to work with you?',
    a: 'No. We support both first-time small orders and large ongoing import programs. During the initial quote we match suppliers to your realistic MOQ so you are not pushed into ordering more than you need.',
  },
  {
    q: 'Can you inspect goods before they ship?',
    a: 'Yes. We offer pre-production, during-production, and pre-shipment inspections using AQL statistical sampling against your spec sheet. You receive a detailed pass/fail report with photos before any goods leave the factory.',
  },
  {
    q: 'Which product categories do you source?',
    a: 'We cover consumer electronics, home and lifestyle, apparel and textiles, hardware and tools, beauty and personal care, outdoor and sports, and more. If it is made in China, we can usually source it.',
  },
  {
    q: 'How long does the sourcing process take?',
    a: 'A typical first project takes 4–8 weeks from requirements to shipment, depending on sampling, production lead time, and shipping method. We provide a realistic timeline upfront and update you weekly.',
  },
  {
    q: 'Do you handle shipping and customs?',
    a: 'Yes. We arrange sea, air, rail, and express freight, consolidate cargo from multiple suppliers, handle export paperwork, and coordinate with your destination customs broker for door-to-door delivery.',
  },
  {
    q: 'What happens if quality fails inspection?',
    a: 'If a pre-shipment inspection fails, we issue a defect report and work with the factory on rework or replacement. Goods only ship once a re-inspection passes. You stay in control of the release decision.',
  },
]

export const BLOG_POSTS = [
  {
    id: 'verify-supplier',
    title: 'How to Verify a Chinese Supplier Before Paying a Deposit',
    excerpt:
      'A practical checklist for confirming a factory is real, capable, and trustworthy before you commit funds.',
    date: '2026-05-18',
    readTime: '6 min read',
    category: 'Supplier Verification',
    imgId: 'blog-verify-s9t0',
    titleId: 'blog-verify-title',
    descId: 'blog-verify-desc',
  },
  {
    id: 'pre-shipment-inspection',
    title: 'Pre-Shipment Inspection: What It Covers and Why It Matters',
    excerpt:
      'Understand the AQL sampling process and how a final inspection protects you from costly defective shipments.',
    date: '2026-05-02',
    readTime: '5 min read',
    category: 'Quality Control',
    imgId: 'blog-inspection-u1v2',
    titleId: 'blog-inspection-title',
    descId: 'blog-inspection-desc',
  },
  {
    id: 'freight-options',
    title: 'Sea, Air, or Express? Choosing the Right Freight from China',
    excerpt:
      'A cost-vs-speed comparison of the main shipping methods, and when consolidation makes sense for your order.',
    date: '2026-04-15',
    readTime: '7 min read',
    category: 'Shipping & Logistics',
    imgId: 'blog-freight-w3x4',
    titleId: 'blog-freight-title',
    descId: 'blog-freight-desc',
  },
  {
    id: 'negotiate-price',
    title: 'Negotiating with Chinese Factories Without Damaging the Relationship',
    excerpt:
      'Practical tactics for getting better prices and terms while keeping the supplier motivated to deliver quality.',
    date: '2026-03-28',
    readTime: '6 min read',
    category: 'Sourcing Strategy',
    imgId: 'blog-negotiate-y5z6',
    titleId: 'blog-negotiate-title',
    descId: 'blog-negotiate-desc',
  },
  {
    id: 'moq-explained',
    title: 'MOQ Explained: Minimum Order Quantities and How to Work Around Them',
    excerpt:
      'What MOQ really means, why factories set it, and legitimate ways to start small without overcommitting.',
    date: '2026-03-10',
    readTime: '5 min read',
    category: 'Sourcing Strategy',
    imgId: 'blog-moq-a7b8',
    titleId: 'blog-moq-title',
    descId: 'blog-moq-desc',
  },
  {
    id: 'production-followup',
    title: 'Why Production Follow-Up Prevents Most Import Disasters',
    excerpt:
      'Silent delays are the most common cause of missed launches. Here is how weekly tracking keeps orders on schedule.',
    date: '2026-02-22',
    readTime: '6 min read',
    category: 'Production Management',
    imgId: 'blog-followup-c9d0',
    titleId: 'blog-followup-title',
    descId: 'blog-followup-desc',
  },
]
