// Site configuration and content data
export const siteConfig = {
  name: 'SSourcing China',
  tagline: 'Your Trusted China Sourcing Partner',
  phone: '+86 755 8652 4865',
  email: 'info@ssourcing.com',
  address: 'Room 1205, Building A, Nanshan Science Park, Shenzhen, Guangdong, China 518057',
  wechat: 'SSourcingChina',
  whatsapp: '+8613828888888',
}

export const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/services', label: 'Services' },
  { path: '/how-it-works', label: 'How It Works' },
  { path: '/products', label: 'Products We Source' },
  { path: '/case-studies', label: 'Case Studies' },
  { path: '/blog', label: 'Blog' },
  { path: '/contact', label: 'Contact' },
]

export const stats = [
  { number: '15+', label: 'Years Experience' },
  { number: '50+', label: 'Countries Served' },
  { number: '10,000+', label: 'Orders Completed' },
  { number: '98%', label: 'Client Satisfaction' },
]

export const services = [
  {
    id: 'supplier-verification',
    icon: 'Shield',
    title: 'Supplier Verification',
    shortDesc: 'We verify factory credentials, licenses, and production capabilities before you commit.',
    description: 'Our team conducts thorough on-site factory audits to verify business licenses, production capacity, quality management systems, and export history. We check references from existing clients and assess the factory\'s financial stability to ensure you\'re working with reliable suppliers.',
    features: [
      'Business license verification',
      'On-site factory inspection',
      'Production capacity assessment',
      'Quality management audit',
      'Financial stability check',
      'Export history verification',
    ],
  },
  {
    id: 'quality-control',
    icon: 'CheckCircle',
    title: 'Quality Control',
    shortDesc: 'Rigorous inspection at every stage to ensure products meet your specifications.',
    description: 'We implement comprehensive quality control processes from raw material inspection to pre-shipment checks. Our QC team follows AQL standards and uses professional testing equipment to catch defects early, saving you from costly returns and reputation damage.',
    features: [
      'Pre-production sample review',
      'During production inspection',
      'Pre-shipment inspection',
      'AQL standard compliance',
      'Lab testing coordination',
      'Detailed inspection reports',
    ],
  },
  {
    id: 'sourcing',
    icon: 'Search',
    title: 'Product Sourcing',
    shortDesc: 'Find the right suppliers with competitive pricing and reliable delivery.',
    description: 'Leveraging our extensive network of vetted manufacturers across China, we identify suppliers that match your quality requirements, budget, and timeline. We negotiate pricing, minimum order quantities, and payment terms on your behalf.',
    features: [
      'Supplier identification & shortlisting',
      'Price negotiation',
      'Sample coordination',
      'MOQ negotiation',
      'Payment term arrangement',
      'Contract facilitation',
    ],
  },
  {
    id: 'production-follow',
    icon: 'Factory',
    title: 'Production Follow-up',
    shortDesc: 'Monitor production progress to ensure on-time delivery.',
    description: 'We maintain regular communication with factories, track production schedules, and provide you with updates at every milestone. If issues arise, we address them immediately to keep your orders on track.',
    features: [
      'Production schedule monitoring',
      'Milestone updates',
      'Issue resolution',
      'Timeline management',
      'Progress photography',
      'Weekly status reports',
    ],
  },
  {
    id: 'logistics',
    icon: 'Ship',
    title: 'Shipping & Logistics',
    shortDesc: 'Coordinate end-to-end shipping from factory floor to your door.',
    description: 'We handle all aspects of international shipping including freight forwarding, customs documentation, container loading supervision, and final delivery coordination. Our logistics team optimizes routes and consolidates shipments to reduce your costs.',
    features: [
      'Freight forwarding',
      'Customs documentation',
      'Container loading supervision',
      'Shipment consolidation',
      'Door-to-door delivery',
      'Insurance coordination',
    ],
  },
  {
    id: 'one-stop',
    icon: 'Package',
    title: 'One-Stop Solution',
    shortDesc: 'Complete sourcing management from initial inquiry to final delivery.',
    description: 'Our one-stop service covers every aspect of your China sourcing needs. From initial product research and supplier identification to quality control, production management, and shipping coordination - we handle it all so you can focus on growing your business.',
    features: [
      'End-to-end project management',
      'Single point of contact',
      'Regular progress updates',
      'Risk management',
      'Cost optimization',
      'After-sales support',
    ],
  },
]

export const processSteps = [
  {
    number: '01',
    title: 'Inquiry & Requirements',
    description: 'Share your product specifications, target price, quantity, and delivery timeline. We review your requirements and provide initial feedback within 24 hours.',
    icon: 'MessageSquare',
  },
  {
    number: '02',
    title: 'Supplier Identification',
    description: 'We search our verified supplier network to find manufacturers that match your requirements. You receive a shortlist with factory profiles, capabilities, and pricing.',
    icon: 'Search',
  },
  {
    number: '03',
    title: 'Sample & Negotiation',
    description: 'We coordinate product samples for your approval. Once satisfied, we negotiate pricing, MOQs, and payment terms to secure the best deal.',
    icon: 'Package',
  },
  {
    number: '04',
    title: 'Production & QC',
    description: 'We monitor production progress and conduct quality inspections at key stages. You receive regular updates and inspection reports throughout.',
    icon: 'Factory',
  },
  {
    number: '05',
    title: 'Shipping & Delivery',
    description: 'We arrange shipping, handle customs documentation, and coordinate door-to-door delivery. Your goods arrive safely and on schedule.',
    icon: 'Truck',
  },
]

export const productCategories = [
  {
    id: 'electronics',
    title: 'Consumer Electronics',
    description: 'Smartphones, tablets, wearables, audio equipment, chargers, and electronic accessories.',
    examples: ['Bluetooth speakers', 'Phone cases', 'LED lights', 'Power banks'],
  },
  {
    id: 'home-garden',
    title: 'Home & Garden',
    description: 'Furniture, kitchenware, home decor, gardening tools, storage solutions, and household appliances.',
    examples: ['Kitchen appliances', 'Storage organizers', 'Garden tools', 'Home decor'],
  },
  {
    id: 'fashion',
    title: 'Apparel & Fashion',
    description: 'Clothing, shoes, bags, jewelry, watches, and fashion accessories for men, women, and children.',
    examples: ['T-shirts', 'Handbags', 'Sunglasses', 'Jewelry'],
  },
  {
    id: 'automotive',
    title: 'Automotive Parts',
    description: 'Car accessories, spare parts, electronics, tools, and maintenance products.',
    examples: ['Car covers', 'LED headlights', 'Floor mats', 'Phone mounts'],
  },
  {
    id: 'toys',
    title: 'Toys & Games',
    description: 'Educational toys, board games, outdoor play equipment, plush toys, and hobby supplies.',
    examples: ['Board games', 'Remote control toys', 'Puzzles', 'STEM kits'],
  },
  {
    id: 'industrial',
    title: 'Industrial Equipment',
    description: 'Manufacturing tools, machinery parts, safety equipment, and industrial supplies.',
    examples: ['Power tools', 'Safety gear', 'Machine parts', 'Packaging equipment'],
  },
  {
    id: 'beauty',
    title: 'Beauty & Personal Care',
    description: 'Cosmetics, skincare products, hair care, beauty tools, and personal hygiene items.',
    examples: ['Makeup brushes', 'Skincare sets', 'Hair accessories', 'Nail tools'],
  },
  {
    id: 'sports',
    title: 'Sports & Outdoor',
    description: 'Fitness equipment, camping gear, sports accessories, and outdoor recreation products.',
    examples: ['Yoga mats', 'Camping tents', 'Fitness bands', 'Water bottles'],
  },
]

export const problemsSolved = [
  {
    problem: 'Unreliable Suppliers',
    solution: 'We verify every supplier through on-site inspections, background checks, and reference verification before introducing them to you.',
    icon: 'AlertTriangle',
  },
  {
    problem: 'Quality Issues',
    solution: 'Our multi-stage QC process catches defects early, with inspection reports and photos so you know exactly what you\'re receiving.',
    icon: 'ShieldAlert',
  },
  {
    problem: 'Communication Barriers',
    solution: 'Our bilingual team eliminates language barriers, ensuring your specifications are clearly understood and followed by factories.',
    icon: 'MessageCircle',
  },
  {
    problem: 'Hidden Costs',
    solution: 'We provide transparent pricing with detailed cost breakdowns. No surprises - you see exactly where your money goes.',
    icon: 'DollarSign',
  },
  {
    problem: 'Production Delays',
    solution: 'We monitor production schedules closely and address delays immediately, keeping you informed with regular progress updates.',
    icon: 'Clock',
  },
  {
    problem: 'Shipping Complexities',
    solution: 'We handle all logistics, customs documentation, and coordination, ensuring smooth delivery from factory to your door.',
    icon: 'Ship',
  },
]

export const caseStudies = [
  {
    id: 'amazon-seller',
    client: 'US Amazon Seller',
    industry: 'Consumer Electronics',
    challenge: 'A growing Amazon seller needed to source Bluetooth speakers from China but had concerns about quality consistency and supplier reliability after a bad experience with a previous supplier.',
    solution: 'We conducted thorough supplier audits, identified three qualified manufacturers, managed sample evaluation, and implemented strict QC protocols with pre-shipment inspections.',
    result: 'The client received their first order of 5,000 units with zero defects. They\'ve now placed 8 repeat orders and grown their product line to 12 SKUs.',
    stats: { defectRate: '0%', costSaving: '22%', delivery: 'On time' },
  },
  {
    id: 'european-retailer',
    client: 'European Home Goods Retailer',
    industry: 'Home & Garden',
    challenge: 'A mid-size European retailer wanted to expand their home goods product line with Chinese manufacturers but lacked experience with international sourcing and quality standards.',
    solution: 'We provided end-to-end sourcing support including supplier identification, factory audits, sample management, production oversight, and logistics coordination.',
    result: 'Successfully launched 25 new products within 6 months. The client reduced sourcing costs by 30% while maintaining European quality standards.',
    stats: { productsLaunched: '25', costSaving: '30%', timeframe: '6 months' },
  },
  {
    id: 'startup-brand',
    client: 'Australian Startup Brand',
    industry: 'Apparel & Fashion',
    challenge: 'A fashion startup needed small MOQs for their initial product line but most Chinese factories required large minimum orders that exceeded their budget.',
    solution: 'We leveraged our network to find flexible manufacturers willing to accept smaller orders, negotiated favorable terms, and managed the entire production process.',
    result: 'The client launched their brand with just 500 units per style. They\'ve since scaled to 3,000 units per style and expanded to 8 product categories.',
    stats: { initialMOQ: '500 units', currentScale: '3,000 units', growth: '6x' },
  },
]

export const testimonials = [
  {
    name: 'Michael Thompson',
    company: 'Thompson Imports, USA',
    text: 'SSourcing China transformed our sourcing process. Their attention to detail in quality control saved us from several potential disasters. We\'ve been working with them for 5 years now.',
    rating: 5,
  },
  {
    name: 'Sarah Mitchell',
    company: 'Mitchell & Co., UK',
    text: 'The team at SSourcing is incredibly professional and responsive. They handle everything from supplier negotiations to shipping logistics. It\'s like having our own office in China.',
    rating: 5,
  },
  {
    name: 'James Wilson',
    company: 'Wilson Trading, Australia',
    text: 'We were skeptical about sourcing from China until we found SSourcing. Their transparent process and regular updates give us complete confidence in every order.',
    rating: 5,
  },
]

export const faqItems = [
  {
    question: 'What types of products can you source?',
    answer: 'We source a wide range of products including consumer electronics, home goods, apparel, automotive parts, toys, industrial equipment, and more. Our extensive supplier network covers virtually every product category manufactured in China.',
  },
  {
    question: 'What are your minimum order quantities (MOQs)?',
    answer: 'MOQs vary by product and supplier. We work with manufacturers that accept orders ranging from 100 to 10,000+ units. We always negotiate the best possible MOQs for our clients and can often find suppliers willing to accept smaller trial orders.',
  },
  {
    question: 'How do you ensure product quality?',
    answer: 'We implement a multi-stage quality control process: pre-production sample approval, during-production inspection, and pre-shipment inspection using AQL standards. We also coordinate lab testing when required and provide detailed inspection reports with photos.',
  },
  {
    question: 'What are your fees?',
    answer: 'We typically charge a commission of 5-10% on the order value, depending on the complexity of the project. This covers supplier verification, QC, production monitoring, and basic logistics coordination. We provide transparent quotes upfront with no hidden fees.',
  },
  {
    question: 'How long does the sourcing process take?',
    answer: 'Initial supplier identification takes 3-5 business days. Sample production and shipping takes 7-15 days depending on the product. Mass production typically takes 15-45 days depending on quantity and complexity. Shipping takes 15-35 days by sea or 5-10 days by air.',
  },
  {
    question: 'Do you handle shipping and customs?',
    answer: 'Yes, we provide complete logistics support including freight forwarding, customs documentation, container loading supervision, and door-to-door delivery. We work with reliable shipping partners to ensure your goods arrive safely and on schedule.',
  },
  {
    question: 'Can you help with product customization?',
    answer: 'Absolutely. We work with factories to customize products to your specifications including colors, materials, sizes, packaging, and branding. We coordinate sample development to ensure the final product matches your requirements.',
  },
  {
    question: 'What happens if there are quality issues?',
    answer: 'If quality issues are found during inspection, we work with the factory to rectify them before shipment. For issues discovered after delivery, we assist with negotiations for replacements, refunds, or credits depending on the severity and circumstances.',
  },
]

export const blogPosts = [
  {
    id: 'sourcing-china-guide-2024',
    title: 'The Complete Guide to Sourcing from China in 2024',
    excerpt: 'Everything you need to know about finding reliable suppliers, negotiating prices, and managing quality when sourcing products from China.',
    category: 'Sourcing Guide',
    date: '2024-01-15',
    readTime: '12 min read',
  },
  {
    id: 'quality-control-tips',
    title: '10 Quality Control Tips for Importers',
    excerpt: 'Learn the essential QC practices that successful importers use to ensure consistent product quality from Chinese manufacturers.',
    category: 'Quality Control',
    date: '2024-01-08',
    readTime: '8 min read',
  },
  {
    id: 'supplier-verification-checklist',
    title: 'Supplier Verification Checklist: What to Look For',
    excerpt: 'A comprehensive checklist for verifying Chinese suppliers, including documents to request, red flags to watch for, and verification methods.',
    category: 'Supplier Verification',
    date: '2024-01-02',
    readTime: '10 min read',
  },
  {
    id: 'shipping-options-comparison',
    title: 'Sea vs Air vs Rail: Choosing the Right Shipping Method',
    excerpt: 'Compare the costs, transit times, and best use cases for different shipping methods when importing from China.',
    category: 'Logistics',
    date: '2023-12-28',
    readTime: '7 min read',
  },
]

export const trustPoints = [
  {
    icon: 'MapPin',
    title: 'Local Presence',
    description: 'Our team is based in Shenzhen, the manufacturing hub of China, giving us direct access to suppliers and factories.',
  },
  {
    icon: 'Users',
    title: 'Bilingual Team',
    description: 'Our English and Chinese speaking staff ensures clear communication between you and Chinese manufacturers.',
  },
  {
    icon: 'Award',
    title: 'Industry Experience',
    description: 'Over 15 years of experience in international trade and China sourcing across diverse product categories.',
  },
  {
    icon: 'FileCheck',
    title: 'Transparent Process',
    description: 'We provide detailed reports, photos, and updates at every stage so you always know the status of your orders.',
  },
  {
    icon: 'Handshake',
    title: 'Long-term Partnerships',
    description: 'We focus on building lasting relationships, not one-time transactions. 85% of our clients are repeat customers.',
  },
  {
    icon: 'Globe',
    title: 'Global Client Base',
    description: 'We serve clients across 50+ countries including the US, Europe, Australia, and the Middle East.',
  },
]
