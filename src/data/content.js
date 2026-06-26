export const siteConfig = {
  name: 'SSourcing China',
  tagline: 'Your Trusted China Sourcing Agent',
  email: 'info@ssourcingchina.com',
  phone: '+86 755 8888 8888',
  address: 'Shenzhen, Guangdong, China',
};

export const services = [
  {
    id: 'supplier-sourcing',
    title: 'Supplier Sourcing',
    shortTitle: 'Supplier Sourcing',
    icon: 'Search',
    description:
      'We identify and vet reliable suppliers across China for your specific product requirements.',
    details: [
      'Comprehensive supplier database search across major manufacturing hubs',
      'Multi-channel sourcing from Alibaba, 1688, Canton Fair, and industry exhibitions',
      'Supplier capability assessment including production capacity and certifications',
      'Competitive price negotiation on your behalf',
      'Minimum order quantity (MOQ) evaluation',
      'Sample coordination and evaluation',
    ],
    imgId: 'service-sourcing-8a3f2c',
  },
  {
    id: 'factory-verification',
    title: 'Factory Verification',
    shortTitle: 'Factory Verification',
    icon: 'ShieldCheck',
    description:
      'On-the-ground factory audits to verify supplier legitimacy and production capabilities.',
    details: [
      'Physical factory visit and inspection',
      'Business license and certification verification',
      'Production line and equipment assessment',
      'Worker count and shift capacity verification',
      'Factory quality management system review',
      'Comprehensive audit report with photos and video',
    ],
    imgId: 'service-verification-9b4d7e',
  },
  {
    id: 'quality-inspection',
    title: 'Quality Inspection',
    shortTitle: 'Quality Inspection',
    icon: 'ClipboardCheck',
    description:
      'Professional QC inspection services throughout the production process.',
    details: [
      'Pre-production inspection of raw materials and components',
      'During-production (DUPRO) inspection to catch issues early',
      'Pre-shipment inspection with AQL sampling standards',
      'Container loading supervision',
      'Product testing against international standards (CE, RoHS, ASTM, etc.)',
      'Detailed inspection reports with photos and measurements',
    ],
    imgId: 'service-qc-7c5a1b',
  },
  {
    id: 'production-follow-up',
    title: 'Production Follow-Up',
    shortTitle: 'Production Follow-Up',
    icon: 'CalendarCheck',
    description:
      'End-to-end production monitoring to ensure on-time delivery and quality consistency.',
    details: [
      'Regular production status updates and milestone tracking',
      'Production schedule monitoring against agreed timelines',
      'Raw material sourcing and quality verification',
      'Packaging and labeling inspection',
      'Expediting services for delayed orders',
      'Weekly progress reports with photos',
    ],
    imgId: 'service-production-2d8e9f',
  },
  {
    id: 'shipping-coordination',
    title: 'Shipping & Logistics',
    shortTitle: 'Shipping & Logistics',
    icon: 'Ship',
    description:
      'Complete logistics management from factory to your doorstep.',
    details: [
      'Freight forwarding - sea, air, rail, and express courier',
      'Export documentation and customs clearance in China',
      'Consolidation and warehousing services',
      'Cargo insurance arrangements',
      'Real-time shipment tracking',
      'Door-to-door delivery coordination',
    ],
    imgId: 'service-shipping-4f6g2h',
  },
];

export const processSteps = [
  {
    step: 1,
    title: 'Submit Your Requirements',
    description:
      'Tell us about your product, quantities, quality standards, and budget. We will review and confirm how we can help.',
    icon: 'FileText',
  },
  {
    step: 2,
    title: 'Supplier Search & Evaluation',
    description:
      'Our team searches our verified supplier network and identifies 3-5 qualified candidates matching your specifications.',
    icon: 'Search',
  },
  {
    step: 3,
    title: 'Factory Verification',
    description:
      'We visit shortlisted factories in person, verify credentials, assess capabilities, and report back with detailed findings.',
    icon: 'ShieldCheck',
  },
  {
    step: 4,
    title: 'Price & Terms Negotiation',
    description:
      'We negotiate pricing, payment terms, and MOQs on your behalf, ensuring you get competitive rates.',
    icon: 'Handshake',
  },
  {
    step: 5,
    title: 'Sample Approval',
    description:
      'We coordinate sampling, review samples against your specifications, and get your approval before production.',
    icon: 'FlaskConical',
  },
  {
    step: 6,
    title: 'Production & QC',
    description:
      'We monitor production, conduct in-process and pre-shipment inspections, and keep you updated throughout.',
    icon: 'ClipboardCheck',
  },
  {
    step: 7,
    title: 'Shipping & Delivery',
    description:
      'We handle all logistics, documentation, and shipping arrangements to deliver your goods safely and on time.',
    icon: 'Ship',
  },
];

export const productCategories = [
  {
    id: 'electronics',
    title: 'Consumer Electronics',
    description: 'Smartphones, accessories, audio devices, wearables, smart home gadgets',
    imgId: 'product-electronics-1a2b3c',
  },
  {
    id: 'apparel',
    title: 'Apparel & Fashion',
    description: 'Clothing, shoes, bags, accessories, textiles, and custom garments',
    imgId: 'product-apparel-4d5e6f',
  },
  {
    id: 'home-garden',
    title: 'Home & Garden',
    description: 'Home decor, kitchenware, furniture, gardening tools, and household items',
    imgId: 'product-home-7g8h9i',
  },
  {
    id: 'industrial',
    title: 'Industrial & Machinery',
    description: 'Manufacturing equipment, tools, industrial parts, and mechanical components',
    imgId: 'product-industrial-0j1k2l',
  },
  {
    id: 'auto-parts',
    title: 'Auto Parts & Accessories',
    description: 'Vehicle parts, automotive electronics, car accessories, and maintenance tools',
    imgId: 'product-auto-3m4n5o',
  },
  {
    id: 'packaging',
    title: 'Packaging & Printing',
    description: 'Custom packaging, labels, boxes, printing services, and display materials',
    imgId: 'product-packaging-6p7q8r',
  },
  {
    id: 'sports',
    title: 'Sports & Outdoor',
    description: 'Fitness equipment, camping gear, sporting goods, and outdoor accessories',
    imgId: 'product-sports-9s0t1u',
  },
  {
    id: 'medical',
    title: 'Medical & Healthcare',
    description: 'Medical devices, health equipment, PPE, and healthcare supplies',
    imgId: 'product-medical-2v3w4x',
  },
];

export const problemsWeSolve = [
  {
    title: 'Scammed by Unreliable Suppliers',
    description:
      'Worried about paying for products that never arrive or do not meet specifications? We verify every supplier before any payment is made.',
    icon: 'ShieldAlert',
  },
  {
    title: 'Poor Product Quality',
    description:
      'Receiving goods that do not match samples or quality standards? Our QC inspections catch issues before shipment, not after.',
    icon: 'ThumbsDown',
  },
  {
    title: 'Language & Cultural Barriers',
    description:
      'Struggling to communicate with Chinese suppliers? Our bilingual team handles all communication, contracts, and negotiations.',
    icon: 'Languages',
  },
  {
    title: 'Missed Deadlines',
    description:
      'Tired of production delays and missed shipping dates? We monitor production schedules and keep your orders on track.',
    icon: 'Clock',
  },
  {
    title: 'Hidden Costs & Fees',
    description:
      'Surprised by unexpected charges? We provide transparent pricing with no hidden fees, and negotiate all costs upfront.',
    icon: 'Receipt',
  },
  {
    title: 'Complex Logistics',
    description:
      'Overwhelmed by shipping documentation, customs clearance, and freight coordination? We handle the entire logistics chain.',
    icon: 'Truck',
  },
];

export const trustPoints = [
  {
    title: 'China-Based Team',
    description: 'Our team is physically located in Shenzhen, giving us direct access to suppliers across all major manufacturing regions.',
    icon: 'MapPin',
  },
  {
    title: '5+ Years Experience',
    description: 'Over five years of sourcing experience across 20+ product categories, serving clients in 30+ countries.',
    icon: 'Award',
  },
  {
    title: 'Factory Verified',
    description: 'We personally visit and verify every factory before onboarding, with detailed audit reports for every supplier.',
    icon: 'Building2',
  },
  {
    title: 'No Win, No Fee',
    description: 'Our risk-free engagement model means you only pay when we deliver qualified results. No upfront commitment required.',
    icon: 'BadgeCheck',
  },
  {
    title: 'Full Transparency',
    description: 'Real-time updates, detailed reports, and open communication. You always know exactly where your order stands.',
    icon: 'Eye',
  },
  {
    title: 'Dedicated Account Manager',
    description: 'Every client gets a dedicated sourcing manager who knows your products, standards, and business requirements.',
    icon: 'UserCheck',
  },
];

export const caseStudies = [
  {
    id: 'electronics-wholesale',
    title: 'Electronics Wholesale',
    client: 'US-based electronics distributor',
    category: 'Consumer Electronics',
    challenge:
      'A US distributor needed reliable Bluetooth headphone suppliers in Shenzhen after multiple failed attempts with unknown online suppliers.',
    solution:
      'We identified and verified 5 factory candidates, conducted onsite audits, negotiated pricing, and managed the entire QC process.',
    result: 'Client secured 3 verified suppliers with 40% cost reduction compared to previous sourcing channels. 98% on-time delivery rate.',
    imgId: 'casestudy-electronics-5h6i7j',
  },
  {
    id: 'apparel-brand',
    title: 'Private Label Apparel',
    client: 'European fashion startup',
    category: 'Apparel & Fashion',
    challenge:
      'A fashion startup needed a manufacturer for their sustainable clothing line but struggled to find factories meeting their ethical and quality standards.',
    solution:
      'We sourced factories with relevant certifications (OEKO-TEX, GOTS), conducted sustainability audits, and coordinated sample development.',
    result: 'Client launched 2 collections successfully. Factory maintains ongoing partnership with 95% quality pass rate on inspections.',
    imgId: 'casestudy-apparel-8k9l0m',
  },
  {
    id: 'industrial-parts',
    title: 'Industrial Component Supply',
    client: 'German manufacturing company',
    category: 'Industrial & Machinery',
    challenge:
      'A German manufacturer needed precision metal parts from China but required strict adherence to ISO standards and tight tolerances.',
    solution:
      'We identified specialized precision engineering factories, verified ISO certifications, and implemented a rigorous QC protocol.',
    result: 'Client reduced component costs by 55% while maintaining European quality standards. Ongoing monthly container shipments.',
    imgId: 'casestudy-industrial-1n2o3p',
  },
];

export const faqItems = [
  {
    question: 'How does SSourcing China charge for its services?',
    answer:
      'We offer flexible pricing models including commission-based (percentage of order value), fixed project fees, and retainer packages for ongoing sourcing needs. We will recommend the best structure based on your specific requirements.',
  },
  {
    question: 'What is the minimum order quantity (MOQ)?',
    answer:
      'MOQs vary by product category and supplier. Consumer electronics and accessories often have lower MOQs (500-1000 units), while custom manufacturing may require higher quantities. We always negotiate the best MOQ terms for you.',
  },
  {
    question: 'How do you verify suppliers?',
    answer:
      'We conduct physical factory visits, verify business licenses, check certifications, assess production capacity, review past export records, and interview quality control teams. Every verification is documented with photos and video evidence.',
  },
  {
    question: 'Can you source any product from China?',
    answer:
      'We specialize in consumer electronics, apparel, home goods, industrial equipment, auto parts, packaging, and medical supplies. If your product falls outside these categories, contact us and we will assess feasibility.',
  },
  {
    question: 'How long does the sourcing process take?',
    answer:
      'Initial supplier identification typically takes 1-2 weeks. Factory verification and samples add 2-4 weeks. Production timelines depend on order complexity but we manage the entire process to meet your deadlines.',
  },
  {
    question: 'What payment methods do you support?',
    answer:
      'We accept bank transfers (T/T), PayPal, and credit cards for service fees. Supplier payments are managed according to agreed terms, typically 30% deposit with 70% balance before shipment.',
  },
  {
    question: 'Do you offer sample sourcing and delivery?',
    answer:
      'Yes, we coordinate sample requests from suppliers, track delivery, and evaluate samples against your specifications before forwarding them to you.',
  },
  {
    question: 'What if I am not satisfied with a supplier?',
    answer:
      'We maintain a network of vetted suppliers. If issues arise, we mediate disputes, and if necessary, help transition production to an alternative qualified supplier from our network.',
  },
];

export const blogPosts = [
  {
    id: 'china-sourcing-guide-2024',
    title: 'The Complete Guide to Sourcing from China in 2024',
    excerpt: 'Everything you need to know about finding reliable suppliers, negotiating terms, and managing quality control when sourcing products from China.',
    author: 'SSourcing Team',
    date: '2024-03-15',
    category: 'Sourcing Guide',
    imageId: 'blog-guide-2a3b4c',
  },
  {
    id: 'factory-audit-checklist',
    title: 'Factory Audit Checklist: What to Look For',
    excerpt: 'A comprehensive checklist for conducting factory audits, from verifying business licenses to assessing production capacity and quality systems.',
    author: 'SSourcing Team',
    date: '2024-02-28',
    category: 'Quality Control',
    imageId: 'blog-audit-5d6e7f',
  },
  {
    id: 'avoid-supplier-scams',
    title: 'How to Avoid Supplier Scams When Sourcing from China',
    excerpt: 'Learn about common red flags, verification techniques, and best practices to protect your business from fraudulent suppliers.',
    author: 'SSourcing Team',
    date: '2024-02-10',
    category: 'Tips',
    imageId: 'blog-scams-8g9h0i',
  },
  {
    id: 'quality-inspection-standards',
    title: 'Understanding AQL Quality Inspection Standards',
    excerpt: 'A practical explanation of Acceptable Quality Limit (AQL) standards and how they apply to pre-shipment inspections for your products.',
    author: 'SSourcing Team',
    date: '2024-01-20',
    category: 'Quality Control',
    imageId: 'blog-aql-1j2k3l',
  },
  {
    id: 'shipping-from-china',
    title: 'Shipping from China: Sea, Air, or Express?',
    excerpt: 'Compare shipping methods, costs, and transit times to choose the best logistics solution for your China imports.',
    author: 'SSourcing Team',
    date: '2024-01-05',
    category: 'Logistics',
    imageId: 'blog-shipping-4m5n6o',
  },
];