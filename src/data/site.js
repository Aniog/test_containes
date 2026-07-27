// Central content data for SSourcing China

export const company = {
  name: 'SSourcing China',
  tagline: 'China Sourcing Agent for Global Buyers',
  email: 'hello@ssourcingchina.com',
  phone: '+86 755 0000 0000',
  whatsapp: '+86 138 0000 0000',
  address: 'Floor 18, Tower B, International Trade Center, Shenzhen, Guangdong, China',
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
    icon: 'Search',
    title: 'Supplier Sourcing',
    desc: 'We identify and shortlist qualified manufacturers matched to your product specs, MOQ, and target price from verified factory networks across China.',
    points: ['Targeted supplier shortlist', 'Price & MOQ benchmarking', 'Sample coordination'],
  },
  {
    id: 'factory-verification',
    icon: 'ShieldCheck',
    title: 'Factory Verification & Audit',
    desc: 'On-site and desktop audits confirm a factory is real, legally registered, and capable of your order volume before you commit any deposit.',
    points: ['Business license & credit check', 'On-site capacity audit', 'Audit report with photos'],
  },
  {
    id: 'quality-inspection',
    icon: 'ClipboardCheck',
    title: 'Quality Inspection (QC)',
    desc: 'Independent inspectors check your goods at key milestones — during production, pre-shipment, and before container loading — using your checklist.',
    points: ['During-production inspection', 'Pre-shipment inspection (PSI)', 'Container loading supervision'],
  },
  {
    id: 'production-follow-up',
    icon: 'Activity',
    title: 'Production Follow-Up',
    desc: 'We track your order from deposit to delivery, chasing delays early and sending you regular progress updates so there are no surprises.',
    points: ['Weekly progress reports', 'Delay early-warning', 'On-site problem solving'],
  },
  {
    id: 'shipping-coordination',
    icon: 'Ship',
    title: 'Shipping & Logistics',
    desc: 'We consolidate goods from multiple suppliers, arrange sea, air, or rail freight, and handle customs documents door-to-door to your warehouse.',
    points: ['Supplier consolidation', 'Sea / air / rail freight', 'Customs & door-to-door'],
  },
  {
    id: 'order-management',
    icon: 'FileText',
    title: 'Order & Document Management',
    desc: 'One point of contact manages POs, proforma invoices, inspection reports, and shipping docs so your records stay organized and audit-ready.',
    points: ['Single point of contact', 'PO & PI management', 'Centralized document hub'],
  },
]

export const processSteps = [
  {
    id: 'step-1',
    no: '01',
    title: 'Share Your Requirements',
    desc: 'Send us product details, target price, quantity, and timeline. We confirm feasibility and quote a transparent service fee.',
  },
  {
    id: 'step-2',
    no: '02',
    title: 'Supplier Sourcing & Shortlist',
    desc: 'We screen our verified factory network and present 2–4 matched suppliers with price, MOQ, and capacity comparison.',
  },
  {
    id: 'step-3',
    no: '03',
    title: 'Factory Verification',
    desc: 'Before you pay any deposit, we audit the chosen factory on-site and confirm it is real, registered, and capable.',
  },
  {
    id: 'step-4',
    no: '04',
    title: 'Sample & Order Confirmation',
    desc: 'We coordinate samples, negotiate final terms, and issue a clear proforma invoice for your approval.',
  },
  {
    id: 'step-5',
    no: '05',
    title: 'Production Follow-Up & QC',
    desc: 'We track production weekly and run independent inspections during production and before shipment.',
  },
  {
    id: 'step-6',
    no: '06',
    title: 'Shipping & Delivery',
    desc: 'We consolidate, book freight, handle customs, and deliver to your door with full documentation.',
  },
]

export const productCategories = [
  {
    id: 'consumer-electronics',
    title: 'Consumer Electronics',
    desc: 'Audio devices, wearables, accessories, and small home electronics from Shenzhen and Dongguan clusters.',
    imgId: 'prod-electronics-3a7f',
    titleId: 'prod-electronics-title',
    descId: 'prod-electronics-desc',
  },
  {
    id: 'home-living',
    title: 'Home & Living',
    desc: 'Furniture, kitchenware, textiles, and home decor sourced from verified factories in Guangdong and Zhejiang.',
    imgId: 'prod-home-7c2e',
    titleId: 'prod-home-title',
    descId: 'prod-home-desc',
  },
  {
    id: 'apparel-textiles',
    title: 'Apparel & Textiles',
    desc: 'Apparel, bags, and fabric products with material testing and AQL inspections from experienced textile mills.',
    imgId: 'prod-apparel-9b1d',
    titleId: 'prod-apparel-title',
    descId: 'prod-apparel-desc',
  },
  {
    id: 'industrial-hardware',
    title: 'Industrial & Hardware',
    desc: 'Tools, fittings, machinery parts, and building materials from specialized industrial zones.',
    imgId: 'prod-industrial-4f8a',
    titleId: 'prod-industrial-title',
    descId: 'prod-industrial-desc',
  },
  {
    id: 'beauty-personal-care',
    title: 'Beauty & Personal Care',
    desc: 'Cosmetics, skincare packaging, and grooming tools with compliance documentation support.',
    imgId: 'prod-beauty-2d6c',
    titleId: 'prod-beauty-title',
    descId: 'prod-beauty-desc',
  },
  {
    id: 'outdoor-sports',
    title: 'Outdoor & Sports',
    desc: 'Camping gear, fitness equipment, and sporting goods built to international safety standards.',
    imgId: 'prod-outdoor-6e3b',
    titleId: 'prod-outdoor-title',
    descId: 'prod-outdoor-desc',
  },
]

export const problems = [
  {
    id: 'problem-1',
    icon: 'AlertTriangle',
    title: 'Suppliers that disappear after deposit',
    desc: 'We verify every factory on-site before you pay, so you never wire money to a shell company or trading room.',
  },
  {
    id: 'problem-2',
    icon: 'PackageX',
    title: 'Inconsistent product quality',
    desc: 'Independent QC inspections at production and pre-shipment catch defects before goods leave China.',
  },
  {
    id: 'problem-3',
    icon: 'Clock',
    title: 'Unexplained production delays',
    desc: 'Weekly follow-up and early-warning reporting surface delays while there is still time to fix them.',
  },
  {
    id: 'problem-4',
    icon: 'Languages',
    title: 'Language and culture gaps',
    desc: 'Our bilingual team negotiates clearly in your language and the supplier\'s, avoiding costly misunderstandings.',
  },
  {
    id: 'problem-5',
    icon: 'Truck',
    title: 'Messy shipping and customs',
    desc: 'We consolidate multiple suppliers and handle freight, customs, and documents door-to-door.',
  },
  {
    id: 'problem-6',
    icon: 'FileQuestion',
    title: 'No visibility into your order',
    desc: 'You get regular progress reports, photos, and inspection results in one organized place.',
  },
]

export const trustPoints = [
  { id: 'tp-1', icon: 'MapPin', title: 'Based in Shenzhen', desc: 'On the ground in China\'s manufacturing hub, close to the factories we work with.' },
  { id: 'tp-2', icon: 'Users', title: 'Bilingual Team', desc: 'English-speaking project managers who negotiate clearly on your behalf.' },
  { id: 'tp-3', icon: 'Building2', title: 'Verified Factory Network', desc: 'Pre-screened manufacturers across electronics, home, apparel, and industrial goods.' },
  { id: 'tp-4', icon: 'Camera', title: 'Photo & Video Reports', desc: 'Every audit and inspection is documented with real photos from the factory floor.' },
  { id: 'tp-5', icon: 'BadgeCheck', title: 'Independent QC', desc: 'Inspectors work for you, not the supplier, using your acceptance checklist.' },
  { id: 'tp-6', icon: 'Lock', title: 'Transparent Fees', desc: 'Clear service pricing agreed upfront. No hidden commissions from suppliers.' },
]

export const stats = [
  { id: 'stat-1', value: '12+', label: 'Years sourcing in China' },
  { id: 'stat-2', value: '2,000+', label: 'Suppliers screened' },
  { id: 'stat-3', value: '40+', label: 'Countries served' },
  { id: 'stat-4', value: '98%', label: 'Inspection pass rate on rework' },
]

export const caseStudies = [
  {
    id: 'case-electronics',
    client: 'European Audio Brand',
    industry: 'Consumer Electronics',
    title: 'Cut defect rate from 7% to under 1% on Bluetooth speakers',
    summary: 'A European audio brand was losing margin to returns from a supplier with inconsistent soldering. We audited the factory, set an AQL inspection plan, and ran pre-shipment checks on every batch.',
    results: [
      { label: 'Defect rate', value: '7% → 0.8%' },
      { label: 'Returns saved / year', value: '€180K' },
      { label: 'Lead time', value: '−9 days' },
    ],
    imgId: 'case-electronics-1a2b',
    titleId: 'case-electronics-title',
    descId: 'case-electronics-desc',
  },
  {
    id: 'case-home',
    client: 'North American Retailer',
    industry: 'Home & Living',
    title: 'Consolidated 6 suppliers into one monthly shipment',
    summary: 'A home goods retailer was paying high LCL freight across many small orders. We consolidated suppliers, scheduled monthly container loads, and managed QC across all of them.',
    results: [
      { label: 'Freight cost', value: '−34%' },
      { label: 'Suppliers managed', value: '6' },
      { label: 'On-time delivery', value: '96%' },
    ],
    imgId: 'case-home-3c4d',
    titleId: 'case-home-title',
    descId: 'case-home-desc',
  },
  {
    id: 'case-apparel',
    client: 'DTC Apparel Startup',
    industry: 'Apparel & Textiles',
    title: 'Verified a real factory and avoided a $40K scam',
    summary: 'A startup was about to pay a deposit to a "factory" that was actually a trading room with no production capacity. Our on-site audit caught it and we sourced a qualified alternative.',
    results: [
      { label: 'Deposit protected', value: '$40K' },
      { label: 'Qualified factory found', value: '11 days' },
      { label: 'First order shipped', value: 'On time' },
    ],
    imgId: 'case-apparel-5e6f',
    titleId: 'case-apparel-title',
    descId: 'case-apparel-desc',
  },
]

export const faqs = [
  {
    id: 'faq-1',
    q: 'How do you charge for your sourcing services?',
    a: 'We work on a transparent service-fee model agreed upfront, based on order complexity and volume. We do not take hidden commissions from suppliers, so our incentives stay aligned with yours. For most projects we also offer a free initial quote so you can see the cost structure before committing.',
  },
  {
    id: 'faq-2',
    q: 'Do I need to be in China to work with you?',
    a: 'No. Most of our clients manage their orders remotely. We act as your eyes and ears on the ground, sending photos, inspection reports, and progress updates so you have full visibility without traveling.',
  },
  {
    id: 'faq-3',
    q: 'What is the minimum order quantity (MOQ) you can support?',
    a: 'MOQ depends on the product and factory. We work with factories that accept low MOQs for startups as well as large-volume manufacturers for established brands. Tell us your target quantity and we will match suitable suppliers.',
  },
  {
    id: 'faq-4',
    q: 'Can you inspect goods before they ship?',
    a: 'Yes. We offer during-production inspection, pre-shipment inspection (PSI), and container loading supervision, all using your acceptance checklist. You receive a report with photos before any goods leave China.',
  },
  {
    id: 'faq-5',
    q: 'Which shipping methods do you arrange?',
    a: 'We arrange sea freight (FCL and LCL), air freight, and rail freight depending on your budget and timeline. We also handle supplier consolidation, customs documents, and door-to-door delivery to your warehouse.',
  },
  {
    id: 'faq-6',
    q: 'What happens if a supplier fails an audit?',
    a: 'If a factory fails verification, we report exactly why and present alternative qualified suppliers from our network. You never pay a deposit to a factory we have not verified on-site.',
  },
]

export const blogPosts = [
  {
    id: 'blog-1',
    title: 'How to Verify a Chinese Supplier Before Paying a Deposit',
    excerpt: 'A practical checklist for confirming a factory is real, registered, and capable — before you wire any money.',
    category: 'Supplier Verification',
    date: '2026-06-18',
    readTime: '6 min read',
    imgId: 'blog-verify-7g8h',
    titleId: 'blog-verify-title',
    descId: 'blog-verify-desc',
  },
  {
    id: 'blog-2',
    title: 'Pre-Shipment Inspection: What an AQL Check Really Covers',
    excerpt: 'Understand the AQL sampling standard and what your inspector should be checking before goods leave the factory.',
    category: 'Quality Control',
    date: '2026-05-30',
    readTime: '5 min read',
    imgId: 'blog-aql-9i0j',
    titleId: 'blog-aql-title',
    descId: 'blog-aql-desc',
  },
  {
    id: 'blog-3',
    title: 'Sea vs Air Freight from China: A Cost and Timing Guide',
    excerpt: 'When it makes sense to ship by sea, air, or rail — with realistic cost and lead-time benchmarks for 2026.',
    category: 'Shipping & Logistics',
    date: '2026-05-12',
    readTime: '7 min read',
    imgId: 'blog-freight-1k2l',
    titleId: 'blog-freight-title',
    descId: 'blog-freight-desc',
  },
  {
    id: 'blog-4',
    title: 'Consolidating Multiple Suppliers to Cut LCL Freight Costs',
    excerpt: 'How combining orders from several factories into one container can reduce your landed cost significantly.',
    category: 'Shipping & Logistics',
    date: '2026-04-22',
    readTime: '5 min read',
    imgId: 'blog-consolidate-3m4n',
    titleId: 'blog-consolidate-title',
    descId: 'blog-consolidate-desc',
  },
  {
    id: 'blog-5',
    title: 'Negotiating MOQ with Chinese Factories: What Actually Works',
    excerpt: 'Practical tactics for lowering minimum order quantities without damaging the supplier relationship.',
    category: 'Sourcing Strategy',
    date: '2026-04-05',
    readTime: '6 min read',
    imgId: 'blog-moq-5o6p',
    titleId: 'blog-moq-title',
    descId: 'blog-moq-desc',
  },
  {
    id: 'blog-6',
    title: 'Common Quality Defects in Consumer Electronics and How to Catch Them',
    excerpt: 'The defects we see most often in electronics orders, and the inspection steps that find them early.',
    category: 'Quality Control',
    date: '2026-03-19',
    readTime: '8 min read',
    imgId: 'blog-defects-7q8r',
    titleId: 'blog-defects-title',
    descId: 'blog-defects-desc',
  },
]
