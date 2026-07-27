// Central content for SSourcing China. Static data used across pages.

export const SITE = {
  name: 'SSourcing China',
  tagline: 'China Sourcing Agent for Global Buyers',
  email: 'hello@ssourcingchina.com',
  phone: '+86 755 0000 0000',
  whatsapp: '+86 138 0000 0000',
  address: 'Shenzhen, Guangdong, China',
  cta: 'Get a Free Sourcing Quote',
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
    title: 'Supplier Sourcing',
    icon: 'Search',
    summary: 'Find reliable suppliers matched to your product, budget, and quality requirements.',
    points: [
      'Shortlist 3-5 vetted factories per product',
      'Compare price, MOQ, lead time, and capacity',
      'Background check on business license and export record',
    ],
  },
  {
    id: 'factory-verification',
    title: 'Factory Verification',
    icon: 'Building2',
    summary: 'On-site factory audits to confirm the supplier is real, capable, and compliant.',
    points: [
      'Physical factory visit and capacity assessment',
      'Verify equipment, workforce, and production lines',
      'Check certifications (ISO, BSCI, SEDEX, etc.)',
    ],
  },
  {
    id: 'quality-inspection',
    title: 'Quality Inspection',
    icon: 'ShieldCheck',
    summary: 'Independent QC inspections at every stage to catch defects before shipment.',
    points: [
      'Pre-production material and sample check',
      'During-production (DUPRO) inspection',
      'Pre-shipment (PSI) AQL-based inspection',
    ],
  },
  {
    id: 'production-follow-up',
    title: 'Production Follow-up',
    icon: 'ClipboardList',
    summary: 'Track production progress and keep your order on schedule.',
    points: [
      'Weekly progress reports with photos',
      'Early warning on delays and issues',
      'Coordinate changes and approvals with the factory',
    ],
  },
  {
    id: 'shipping-coordination',
    title: 'Shipping Coordination',
    icon: 'Ship',
    summary: 'Consolidate goods and arrange cost-effective shipping to your destination.',
    points: [
      'Freight quote comparison (sea, air, express)',
      'Cargo consolidation from multiple suppliers',
      'Customs documents and tracking until delivery',
    ],
  },
  {
    id: 'full-sourcing-service',
    title: 'Full Sourcing Service',
    icon: 'Layers',
    summary: 'End-to-end management from supplier search to delivered goods.',
    points: [
      'One dedicated sourcing coordinator',
      'Sourcing, QC, and logistics in one package',
      'Transparent reporting at every step',
    ],
  },
]

export const PROCESS_STEPS = [
  {
    number: '01',
    title: 'Share Your Requirements',
    description: 'Tell us about your product, target price, quantity, and quality standards. The more detail you provide, the more precise our shortlist.',
  },
  {
    number: '02',
    title: 'Supplier Sourcing & Shortlist',
    description: 'We search our network and open market to find 3-5 suitable factories, then send you a comparison sheet with price, MOQ, and lead time.',
  },
  {
    number: '03',
    title: 'Factory Verification',
    description: 'We visit the shortlisted factories in person, verify their capacity and certifications, and confirm they can meet your order.',
  },
  {
    number: '04',
    title: 'Sample & Quotation',
    description: 'We collect samples, negotiate price and terms, and send you a clear quotation so you can approve before production starts.',
  },
  {
    number: '05',
    title: 'Production & QC',
    description: 'We follow production progress and run inspections at key stages, sending you photo reports so issues are caught early.',
  },
  {
    number: '06',
    title: 'Inspection & Shipping',
    description: 'A final pre-shipment inspection confirms quality, then we consolidate your goods and arrange shipping to your door or port.',
  },
]

export const PRODUCT_CATEGORIES = [
  {
    id: 'consumer-electronics',
    title: 'Consumer Electronics',
    desc: 'Audio devices, accessories, smart home, and small appliances from vetted electronics factories.',
    imgId: 'prod-electronics-a1b2c3',
    titleId: 'prod-electronics-title',
    descId: 'prod-electronics-desc',
  },
  {
    id: 'home-living',
    title: 'Home & Living',
    desc: 'Furniture, kitchenware, home textiles, and decor produced by reliable manufacturers.',
    imgId: 'prod-home-d4e5f6',
    titleId: 'prod-home-title',
    descId: 'prod-home-desc',
  },
  {
    id: 'apparel-textiles',
    title: 'Apparel & Textiles',
    desc: 'Clothing, fabrics, bags, and accessories with quality control on stitching and materials.',
    imgId: 'prod-apparel-g7h8i9',
    titleId: 'prod-apparel-title',
    descId: 'prod-apparel-desc',
  },
  {
    id: 'hardware-tools',
    title: 'Hardware & Tools',
    desc: 'Hand tools, fasteners, fittings, and industrial hardware from audited suppliers.',
    imgId: 'prod-hardware-j1k2l3',
    titleId: 'prod-hardware-title',
    descId: 'prod-hardware-desc',
  },
  {
    id: 'beauty-personal-care',
    title: 'Beauty & Personal Care',
    desc: 'Cosmetics, skincare packaging, and grooming products with compliance support.',
    imgId: 'prod-beauty-m4n5o6',
    titleId: 'prod-beauty-title',
    descId: 'prod-beauty-desc',
  },
  {
    id: 'promotional-products',
    title: 'Promotional Products',
    desc: 'Custom branded merchandise, gifts, and packaging for marketing campaigns.',
    imgId: 'prod-promo-p7q8r9',
    titleId: 'prod-promo-title',
    descId: 'prod-promo-desc',
  },
]

export const PROBLEMS = [
  {
    icon: 'AlertTriangle',
    title: 'Unreliable suppliers',
    description: 'Factories that overpromise on price or capacity and underdeliver on quality and timing.',
  },
  {
    icon: 'EyeOff',
    title: 'No visibility into production',
    description: 'You place an order and hear nothing for weeks, with no way to confirm progress or catch problems.',
  },
  {
    icon: 'BadgeX',
    title: 'Quality surprises at delivery',
    description: 'Goods arrive defective or off-spec, with no recourse once the container has shipped.',
  },
  {
    icon: 'Languages',
    title: 'Language and culture gaps',
    description: 'Miscommunication on specs, materials, and standards that leads to costly rework.',
  },
  {
    icon: 'Truck',
    title: 'Complex shipping and customs',
    description: 'Multiple suppliers, consolidation, documents, and freight that are hard to coordinate alone.',
  },
  {
    icon: 'FileSearch',
    title: 'No way to verify a factory',
    description: 'Online listings look the same, and you cannot tell a real manufacturer from a trading company.',
  },
]

export const TRUST_POINTS = [
  {
    icon: 'MapPin',
    title: 'Based in China',
    description: 'Our team is on the ground in Shenzhen, close to the manufacturing hubs of Guangdong.',
  },
  {
    icon: 'Users',
    title: 'Dedicated coordinator',
    description: 'You work with one English-speaking coordinator who understands your product and goals.',
  },
  {
    icon: 'Camera',
    title: 'Photo-based reporting',
    description: 'Factory visits and inspections are documented with photos so you see what we see.',
  },
  {
    icon: 'FileCheck',
    title: 'Transparent pricing',
    description: 'Clear service fees and factory quotations with no hidden margins on your goods.',
  },
  {
    icon: 'Clock',
    title: 'Responsive communication',
    description: 'We reply within one business day and keep you updated at every milestone.',
  },
  {
    icon: 'Globe',
    title: 'Global shipping experience',
    description: 'We have shipped to North America, Europe, the Middle East, and Australia.',
  },
]

export const CASE_STUDIES = [
  {
    id: 'electronics-startup',
    title: 'Sourcing a New Audio Product for a US Startup',
    industry: 'Consumer Electronics',
    location: 'United States',
    challenge: 'A US startup needed a reliable factory for a new audio accessory but had no experience sourcing in China and no way to verify suppliers online.',
    approach: 'We shortlisted four factories, audited two in person, and ran sample comparisons. After the client approved a supplier, we followed production and inspected the first batch.',
    result: 'The client launched on schedule with a defect rate under 1.5% on the first run and reordered twice within the year.',
    imgId: 'case-electronics-s1t2u3',
    titleId: 'case-electronics-title',
    descId: 'case-electronics-desc',
  },
  {
    id: 'home-brand',
    title: 'Consolidating Home Goods for a European Brand',
    industry: 'Home & Living',
    location: 'Germany',
    challenge: 'A European home brand sourced from five separate factories and struggled with inconsistent quality and fragmented shipping.',
    approach: 'We standardized QC checklists across suppliers, ran pre-shipment inspections on each order, and consolidated all goods into one container.',
    result: 'The brand reduced defective shipments and cut logistics costs by consolidating cargo and comparing freight quotes.',
    imgId: 'case-home-v4w5x6',
    titleId: 'case-home-title',
    descId: 'case-home-desc',
  },
  {
    id: 'promo-campaign',
    title: 'Custom Promotional Products for a Retail Chain',
    industry: 'Promotional Products',
    location: 'Middle East',
    challenge: 'A retail chain needed a large volume of branded merchandise on a tight deadline for a seasonal campaign.',
    approach: 'We identified factories with enough capacity, negotiated a compressed lead time, and ran during-production inspections to keep the schedule on track.',
    result: 'The order was delivered before the campaign launch with quality approved at the pre-shipment inspection.',
    imgId: 'case-promo-y7z8a9',
    titleId: 'case-promo-title',
    descId: 'case-promo-desc',
  },
]

export const FAQS = [
  {
    q: 'What does a China sourcing agent actually do?',
    a: 'A sourcing agent acts as your local team in China. We find suitable suppliers, verify they are real and capable, negotiate price and terms, follow production, inspect quality, and coordinate shipping so you receive the right goods on time.',
  },
  {
    q: 'How do you charge for your services?',
    a: 'We work on transparent service fees that depend on the scope of work, such as sourcing only, inspection only, or a full end-to-end package. We do not add hidden margins to your product price. You receive a clear quotation before any work begins.',
  },
  {
    q: 'Do I need to travel to China?',
    a: 'No. We handle factory visits, audits, and inspections on your behalf and send you photo reports. Most of our clients manage their entire order remotely while staying fully informed.',
  },
  {
    q: 'What is the minimum order quantity (MOQ) you can work with?',
    a: 'MOQ depends on the product and factory. We help you find suppliers whose MOQ matches your needs, and we can often negotiate lower MOQs for initial trial orders.',
  },
  {
    q: 'Can you inspect goods before they ship?',
    a: 'Yes. We offer pre-production, during-production, and pre-shipment inspections based on AQL sampling standards, so defects are caught before your goods leave China.',
  },
  {
    q: 'Which countries do you ship to?',
    a: 'We have coordinated shipping to North America, Europe, the Middle East, Australia, and other regions by sea, air, and express. We compare freight options and handle the shipping documents.',
  },
  {
    q: 'How long does the sourcing process take?',
    a: 'Sourcing and shortlisting usually takes 1-2 weeks. The full timeline depends on sampling, production, and shipping, which we outline in a schedule after understanding your requirements.',
  },
  {
    q: 'How do I get started?',
    a: 'Submit a free sourcing quote request with your product details. We will review it and get back to you within one business day with the next steps.',
  },
]

export const BLOG_POSTS = [
  {
    id: 'how-to-verify-china-supplier',
    title: 'How to Verify a China Supplier Before Placing an Order',
    excerpt: 'Online listings can be misleading. Here is a practical checklist for confirming a factory is real, capable, and trustworthy before you commit.',
    date: '2026-06-18',
    category: 'Supplier Verification',
    readTime: '6 min read',
    imgId: 'blog-verify-b1c2d3',
    titleId: 'blog-verify-title',
    descId: 'blog-verify-desc',
  },
  {
    id: 'pre-shipment-inspection-guide',
    title: 'A Practical Guide to Pre-Shipment Inspection (PSI)',
    excerpt: 'What a pre-shipment inspection covers, how AQL sampling works, and why it saves money compared to discovering defects after delivery.',
    date: '2026-06-04',
    category: 'Quality Control',
    readTime: '7 min read',
    imgId: 'blog-psi-e4f5g6',
    titleId: 'blog-psi-title',
    descId: 'blog-psi-desc',
  },
  {
    id: 'sea-vs-air-freight',
    title: 'Sea Freight vs. Air Freight: Choosing the Right Option',
    excerpt: 'A comparison of cost, speed, and reliability for shipping from China, with guidance on when consolidation makes sense.',
    date: '2026-05-20',
    category: 'Shipping',
    readTime: '5 min read',
    imgId: 'blog-freight-h7i8j9',
    titleId: 'blog-freight-title',
    descId: 'blog-freight-desc',
  },
  {
    id: 'reduce-defect-rate',
    title: '5 Ways to Reduce Defect Rates in Manufacturing',
    excerpt: 'Practical steps to improve product quality from the sourcing stage through final inspection, based on real factory experience.',
    date: '2026-05-06',
    category: 'Quality Control',
    readTime: '6 min read',
    imgId: 'blog-defects-k1l2m3',
    titleId: 'blog-defects-title',
    descId: 'blog-defects-desc',
  },
  {
    id: 'trading-company-vs-factory',
    title: 'Trading Company vs. Factory: Which Should You Choose?',
    excerpt: 'The differences between trading companies and direct factories, and how to decide which fits your order and goals.',
    date: '2026-04-22',
    category: 'Supplier Verification',
    readTime: '5 min read',
    imgId: 'blog-trading-n4o5p6',
    titleId: 'blog-trading-title',
    descId: 'blog-trading-desc',
  },
  {
    id: 'negotiate-price-china-factory',
    title: 'How to Negotiate Price with a China Factory',
    excerpt: 'A grounded approach to price negotiation that protects quality instead of pushing the factory to cut corners.',
    date: '2026-04-08',
    category: 'Sourcing',
    readTime: '6 min read',
    imgId: 'blog-negotiate-q7r8s9',
    titleId: 'blog-negotiate-title',
    descId: 'blog-negotiate-desc',
  },
]
