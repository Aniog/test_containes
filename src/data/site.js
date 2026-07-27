import {
  Search,
  ShieldCheck,
  ClipboardCheck,
  Factory,
  Ship,
  PackageCheck,
  FileSearch,
  Truck,
  Boxes,
  Users,
  Globe2,
  Clock,
  BadgeCheck,
  Languages,
  Headphones,
  Banknote,
} from 'lucide-react'

export const company = {
  name: 'SSourcing China',
  shortName: 'SSourcing',
  tagline: 'China Sourcing Agent for Global Buyers',
  email: 'hello@ssourcingchina.com',
  phone: '+86 755 0000 0000',
  whatsapp: '+86 138 0000 0000',
  address: 'Floor 18, Tower B, International Trade Center, Shenzhen, Guangdong, China',
  hours: 'Mon–Sat, 9:00–18:00 (GMT+8)',
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
    id: 'supplier-search',
    icon: Search,
    title: 'Supplier Search & Shortlisting',
    desc: 'We identify and shortlist qualified manufacturers across China based on your product specs, target price, and order volume.',
    points: [
      'Multi-supplier comparison',
      'Factory capability matching',
      'Transparent quotation breakdown',
    ],
  },
  {
    id: 'factory-verification',
    icon: ShieldCheck,
    title: 'Factory Verification & Audit',
    desc: 'On-site or desktop audits to confirm a factory is real, legally registered, and capable of producing your order.',
    points: [
      'Business license & legal checks',
      'Production capacity audit',
      'On-site factory visit report',
    ],
  },
  {
    id: 'quality-inspection',
    icon: ClipboardCheck,
    title: 'Quality Inspection (QC)',
    desc: 'Independent pre-production, in-line, and pre-shipment inspections against your approved quality standards.',
    points: [
      'AQL-based sampling',
      'Detailed photo & video report',
      'Pass / hold / fail decision',
    ],
  },
  {
    id: 'production-follow-up',
    icon: Factory,
    title: 'Production Follow-Up',
    desc: 'We monitor your order through every milestone so delays and issues are caught and resolved early.',
    points: [
      'Weekly progress updates',
      'Schedule risk monitoring',
      'Direct communication with factory',
    ],
  },
  {
    id: 'shipping-logistics',
    icon: Ship,
    title: 'Shipping & Logistics',
    desc: 'Consolidation, freight forwarding, and door-to-door coordination by sea, air, or express courier.',
    points: [
      'Cargo consolidation',
      'Sea / air / express options',
      'Customs & documentation support',
    ],
  },
  {
    id: 'order-management',
    icon: PackageCheck,
    title: 'End-to-End Order Management',
    desc: 'A single point of contact managing your project from inquiry to delivery, so you can focus on selling.',
    points: [
      'One dedicated coordinator',
      'Centralized documentation',
      'Full order timeline visibility',
    ],
  },
]

export const processSteps = [
  {
    id: 'step-1',
    icon: FileSearch,
    step: '01',
    title: 'Share Your Requirements',
    desc: 'Send us product specs, target price, quantity, and timeline. We confirm scope and feasibility in 1 business day.',
  },
  {
    id: 'step-2',
    icon: Search,
    step: '02',
    title: 'Supplier Sourcing & Quotation',
    desc: 'We shortlist 2–4 qualified factories and return a transparent quotation with MOQ, lead time, and unit price.',
  },
  {
    id: 'step-3',
    icon: ShieldCheck,
    step: '03',
    title: 'Factory Verification',
    desc: 'We verify the selected supplier through license checks and an on-site audit before any deposit is paid.',
  },
  {
    id: 'step-4',
    icon: Factory,
    step: '04',
    title: 'Production & Follow-Up',
    desc: 'We track milestones, resolve issues with the factory, and keep you updated with weekly progress reports.',
  },
  {
    id: 'step-5',
    icon: ClipboardCheck,
    step: '05',
    title: 'Quality Inspection',
    desc: 'A pre-shipment inspection confirms your order meets approved standards before goods leave the factory.',
  },
  {
    id: 'step-6',
    icon: Ship,
    step: '06',
    title: 'Shipping & Delivery',
    desc: 'We consolidate, book freight, handle documentation, and coordinate delivery to your destination.',
  },
]

export const productCategories = [
  {
    id: 'consumer-electronics',
    title: 'Consumer Electronics',
    desc: 'Audio devices, accessories, smart home gadgets, and small appliances from Shenzhen and Dongguan clusters.',
    imgId: 'prod-electronics-a1b2c3',
    titleId: 'prod-electronics-title',
    descId: 'prod-electronics-desc',
  },
  {
    id: 'home-living',
    title: 'Home & Living',
    desc: 'Kitchenware, home textiles, furniture, and decor from established manufacturing hubs in Zhejiang and Fujian.',
    imgId: 'prod-home-d4e5f6',
    titleId: 'prod-home-title',
    descId: 'prod-home-desc',
  },
  {
    id: 'apparel-textiles',
    title: 'Apparel & Textiles',
    desc: 'Garments, activewear, bags, and accessories with fabric sourcing, sample development, and size grading.',
    imgId: 'prod-apparel-g7h8i9',
    titleId: 'prod-apparel-title',
    descId: 'prod-apparel-desc',
  },
  {
    id: 'promotional-gifts',
    title: 'Promotional & Gifts',
    desc: 'Branded merchandise, corporate gifts, and packaging tailored to your campaign and budget.',
    imgId: 'prod-promo-j1k2l3',
    titleId: 'prod-promo-title',
    descId: 'prod-promo-desc',
  },
  {
    id: 'hardware-tools',
    title: 'Hardware & Tools',
    desc: 'Hand tools, fasteners, fittings, and industrial hardware from specialized metalworking regions.',
    imgId: 'prod-hardware-m4n5o6',
    titleId: 'prod-hardware-title',
    descId: 'prod-hardware-desc',
  },
  {
    id: 'beauty-personal-care',
    title: 'Beauty & Personal Care',
    desc: 'Cosmetics, skincare tools, and grooming accessories with formulation and packaging support.',
    imgId: 'prod-beauty-p7q8r9',
    titleId: 'prod-beauty-title',
    descId: 'prod-beauty-desc',
  },
  {
    id: 'outdoor-sports',
    title: 'Outdoor & Sports',
    desc: 'Camping gear, fitness equipment, and sporting goods built for durability and export standards.',
    imgId: 'prod-outdoor-s1t2u3',
    titleId: 'prod-outdoor-title',
    descId: 'prod-outdoor-desc',
  },
  {
    id: 'packaging-printing',
    title: 'Packaging & Printing',
    desc: 'Custom retail packaging, labels, and printed materials with structural and graphic design support.',
    imgId: 'prod-packaging-v4w5x6',
    titleId: 'prod-packaging-title',
    descId: 'prod-packaging-desc',
  },
]

export const problems = [
  {
    id: 'p1',
    icon: Users,
    title: 'Unreliable suppliers',
    desc: 'Factories that overpromise, miss deadlines, or disappear after a deposit. We verify before you commit.',
  },
  {
    id: 'p2',
    icon: ClipboardCheck,
    title: 'Inconsistent quality',
    desc: 'Samples look great, but bulk orders arrive off-spec. Our inspections catch issues before shipment.',
  },
  {
    id: 'p3',
    icon: Languages,
    title: 'Language & culture gaps',
    desc: 'Miscommunication causes costly mistakes. Our bilingual team manages factory dialogue for you.',
  },
  {
    id: 'p4',
    icon: Ship,
    title: 'Complex shipping',
    desc: 'Multiple suppliers, fragmented shipments, unclear documentation. We consolidate and coordinate.',
  },
  {
    id: 'p5',
    icon: Clock,
    title: 'No production visibility',
    desc: 'You only hear from the factory when there is a problem. We provide proactive weekly updates.',
  },
  {
    id: 'p6',
    icon: Banknote,
    title: 'Hidden costs',
    desc: 'Surprise charges for tooling, rework, or freight erode margin. We surface costs upfront.',
  },
]

export const trustPoints = [
  {
    id: 't1',
    icon: Globe2,
    title: 'Based in China',
    desc: 'Offices in Shenzhen with on-the-ground access to major manufacturing clusters across China.',
  },
  {
    id: 't2',
    icon: BadgeCheck,
    title: 'Independent QC',
    desc: 'Our inspectors work for you, not the factory. Reports include photos, video, and clear pass/fail.',
  },
  {
    id: 't3',
    icon: Languages,
    title: 'Bilingual team',
    desc: 'English-speaking coordinators bridge the gap between you and Chinese factories.',
  },
  {
    id: 't4',
    icon: Headphones,
    title: 'Dedicated coordinator',
    desc: 'One point of contact who knows your project from first inquiry to final delivery.',
  },
]

export const stats = [
  { value: '12+', label: 'Years sourcing in China' },
  { value: '40+', label: 'Industries served' },
  { value: '1,200+', label: 'Suppliers verified' },
  { value: '60+', label: 'Countries shipped to' },
]

export const caseStudies = [
  {
    id: 'cs-electronics',
    industry: 'Consumer Electronics',
    title: 'Replacing a failed supplier for a US audio brand',
    summary:
      'A US brand lost three months to a supplier that could not meet spec. We re-sourced, verified a new factory, and delivered the first compliant shipment in 11 weeks.',
    challenge:
      'The previous supplier repeatedly shipped units failing the drop test and stopped responding. The brand needed a verified replacement fast to protect a seasonal launch.',
    approach:
      'We shortlisted three factories in the Shenzhen audio cluster, audited production lines and test equipment, ran a pilot batch, and implemented AQL pre-shipment inspection.',
    result:
      'New factory onboarded in 4 weeks. First compliant shipment delivered in 11 weeks. Defect rate reduced from 6.2% to under 0.8% on subsequent orders.',
    metrics: [
      { label: 'Time to first shipment', value: '11 weeks' },
      { label: 'Defect rate', value: '0.8%' },
      { label: 'Suppliers audited', value: '3' },
    ],
    imgId: 'cs-electronics-img-7f2a9c',
    titleId: 'cs-electronics-title',
    descId: 'cs-electronics-desc',
  },
  {
    id: 'cs-home',
    industry: 'Home & Living',
    title: 'Consolidating 9 suppliers into one shipment for a EU retailer',
    summary:
      'A European retailer sourcing from nine separate factories faced high freight costs and delivery chaos. We consolidated orders and coordinated a single container.',
    challenge:
      'Nine suppliers across three provinces, each shipping separately, drove up freight and created customs delays and tracking blind spots.',
    approach:
      'We aligned production schedules, consolidated goods at our warehouse, repacked for export, and booked a single sea freight container with full documentation.',
    result:
      'Freight cost reduced by 34%. Delivery lead time cut by 9 days. One set of customs documents replaced nine.',
    metrics: [
      { label: 'Freight cost saving', value: '34%' },
      { label: 'Lead time reduction', value: '9 days' },
      { label: 'Suppliers consolidated', value: '9' },
    ],
    imgId: 'cs-home-img-3b8d1e',
    titleId: 'cs-home-title',
    descId: 'cs-home-desc',
  },
  {
    id: 'cs-apparel',
    industry: 'Apparel & Textiles',
    title: 'Scaling a DTC apparel brand from sample to bulk',
    summary:
      'A DTC apparel brand needed to move from a single sample to a 5,000-unit bulk order with consistent sizing and fabric quality.',
    challenge:
      'The brand had no production experience and risked inconsistent sizing, color mismatch, and fabric defects across the bulk run.',
    approach:
      'We managed sample development, size grading, fabric sourcing, a pilot run, and in-line inspections, then a full pre-shipment QC before dispatch.',
    result:
      'Bulk order delivered on schedule. Sizing consistency confirmed across all SKUs. Brand placed repeat orders with the same factory.',
    metrics: [
      { label: 'Units delivered', value: '5,000' },
      { label: 'On-time delivery', value: '100%' },
      { label: 'Repeat orders', value: '3' },
    ],
    imgId: 'cs-apparel-img-9c4e2a',
    titleId: 'cs-apparel-title',
    descId: 'cs-apparel-desc',
  },
]

export const faqs = [
  {
    id: 'faq-1',
    q: 'What is a China sourcing agent and what do you actually do?',
    a: 'A sourcing agent acts as your local team in China. We find qualified suppliers, verify factories, inspect quality, follow production, and coordinate shipping so you can buy from China without the operational risk of doing it alone.',
  },
  {
    id: 'faq-2',
    q: 'How do you charge for your services?',
    a: 'We work on a transparent model that may include a sourcing fee, an inspection fee per visit, and a logistics fee per shipment. The exact structure depends on your project scope. We share a clear quote before any work begins.',
  },
  {
    id: 'faq-3',
    q: 'Do I pay the factory directly or through you?',
    a: 'Both options are available. You can pay the factory directly and pay us only for services, or we can manage payments on your behalf with full documentation. We recommend the approach that best fits your risk and cash flow.',
  },
  {
    id: 'faq-4',
    q: 'What is the minimum order quantity (MOQ) you can support?',
    a: 'MOQ depends on the product and factory. We work with factories that accept lower MOQs for new buyers and can negotiate MOQ down in many cases. Share your product and target quantity and we will confirm what is feasible.',
  },
  {
    id: 'faq-5',
    q: 'Can you inspect goods before they are shipped?',
    a: 'Yes. We offer pre-production, in-line, and pre-shipment inspections using AQL sampling. You receive a detailed report with photos and video, and a clear pass, hold, or fail decision before goods leave the factory.',
  },
  {
    id: 'faq-6',
    q: 'Which shipping methods do you support?',
    a: 'We coordinate sea freight (FCL and LCL), air freight, and express courier. We also handle consolidation when you buy from multiple suppliers, plus export documentation and customs support.',
  },
  {
    id: 'faq-7',
    q: 'How long does a typical sourcing project take?',
    a: 'From sharing requirements to first quotation usually takes 3–7 business days. Factory verification adds 5–10 days. Production lead time depends on the product, typically 25–45 days, plus shipping. We give you a realistic timeline upfront.',
  },
  {
    id: 'faq-8',
    q: 'What information do you need to give me a quote?',
    a: 'Product description or specs, target price, order quantity, destination country, and any required certifications. The more detail you share, the more accurate and faster our quotation will be.',
  },
]

export const blogPosts = [
  {
    id: 'blog-verify-supplier',
    title: 'How to Verify a Chinese Supplier Before You Pay a Deposit',
    excerpt:
      'A practical checklist for confirming a factory is real, registered, and capable of producing your order before you commit any money.',
    category: 'Supplier Verification',
    date: '2026-06-18',
    readTime: '6 min read',
    imgId: 'blog-verify-img-1a2b3c',
    titleId: 'blog-verify-title',
    descId: 'blog-verify-desc',
  },
  {
    id: 'blog-pre-shipment-inspection',
    title: 'Pre-Shipment Inspection: What It Covers and Why It Matters',
    excerpt:
      'Understand the AQL inspection process, what inspectors actually check, and how a pre-shipment report protects your order.',
    category: 'Quality Control',
    date: '2026-06-02',
    readTime: '5 min read',
    imgId: 'blog-inspection-img-4d5e6f',
    titleId: 'blog-inspection-title',
    descId: 'blog-inspection-desc',
  },
  {
    id: 'blog-consolidation',
    title: 'Cargo Consolidation: Cutting Freight Cost When Buying From Multiple Suppliers',
    excerpt:
      'How consolidating shipments from several factories into one container reduces cost, risk, and customs complexity.',
    category: 'Shipping & Logistics',
    date: '2026-05-20',
    readTime: '7 min read',
    imgId: 'blog-consolidation-img-7g8h9i',
    titleId: 'blog-consolidation-title',
    descId: 'blog-consolidation-desc',
  },
  {
    id: 'blog-negotiate-moq',
    title: 'Negotiating MOQ With Chinese Factories: A Practical Approach',
    excerpt:
      'Why factories set MOQs, what they really mean, and how to negotiate lower quantities without damaging the relationship.',
    category: 'Sourcing Strategy',
    date: '2026-05-04',
    readTime: '6 min read',
    imgId: 'blog-moq-img-0j1k2l',
    titleId: 'blog-moq-title',
    descId: 'blog-moq-desc',
  },
  {
    id: 'blog-incoterms',
    title: 'FOB, EXW, CIF: Choosing the Right Incoterm for Your Shipment',
    excerpt:
      'A clear comparison of common Incoterms when buying from China, and which one fits your risk and logistics setup.',
    category: 'Shipping & Logistics',
    date: '2026-04-15',
    readTime: '5 min read',
    imgId: 'blog-incoterms-img-3m4n5o',
    titleId: 'blog-incoterms-title',
    descId: 'blog-incoterms-desc',
  },
  {
    id: 'blog-sample-to-bulk',
    title: 'From Sample to Bulk Order: Avoiding the Quality Gap',
    excerpt:
      'Why bulk production often differs from samples, and the controls that keep your mass order consistent with what you approved.',
    category: 'Quality Control',
    date: '2026-03-28',
    readTime: '6 min read',
    imgId: 'blog-sample-img-6p7q8r',
    titleId: 'blog-sample-title',
    descId: 'blog-sample-desc',
  },
]

export const heroStats = stats
