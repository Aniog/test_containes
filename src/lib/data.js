// Navigation data
export const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'How It Works', href: '/how-it-works' },
  { name: 'Products', href: '/products' },
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

// Services data
export const services = [
  {
    id: 'supplier-search',
    title: 'Supplier Search & Verification',
    description: 'We identify and verify reliable manufacturers based on your product requirements, visiting factories in person when needed.',
    icon: 'Search',
  },
  {
    id: 'quality-inspection',
    title: 'Quality Inspection',
    description: 'Our QC team performs detailed inspections at various production stages to ensure your products meet specifications.',
    icon: 'ClipboardCheck',
  },
  {
    id: 'production-follow-up',
    title: 'Production Follow-up',
    description: 'We monitor production进度, coordinate with suppliers, and provide regular updates throughout the manufacturing process.',
    icon: 'Settings',
  },
  {
    id: 'shipping-coordination',
    title: 'Shipping & Logistics',
    description: 'We handle documentation, customs clearance, and coordinate shipping via sea, air, or land transport.',
    icon: 'Truck',
  },
  {
    id: 'sample-management',
    title: 'Sample Management',
    description: 'We request, evaluate, and ship product samples to help you verify quality before mass production.',
    icon: 'Package',
  },
  {
    id: 'negotiation-support',
    title: 'Negotiation Support',
    description: 'We help negotiate pricing and terms with suppliers to secure favorable conditions for your orders.',
    icon: 'Handshake',
  },
];

// Process steps
export const processSteps = [
  {
    step: 1,
    title: 'Submit Your Inquiry',
    description: 'Tell us what products you need, quantities, specifications, and timeline.',
  },
  {
    step: 2,
    title: 'Supplier Matching',
    description: 'We identify 3-5 verified suppliers that match your requirements and budget.',
  },
  {
    step: 3,
    title: 'Sample Evaluation',
    description: 'Order samples to verify quality before committing to bulk production.',
  },
  {
    step: 4,
    title: 'Production & QC',
    description: 'We monitor production, conduct inspections, and ensure on-time delivery.',
  },
  {
    step: 5,
    title: 'Shipping & Delivery',
    description: 'Coordinate logistics and handle all documentation for smooth delivery.',
  },
];

// Products we source
export const products = [
  { id: 'electronics', name: 'Electronics & Components', examples: 'Consumer electronics, PCBs, sensors, LED products' },
  { id: 'machinery', name: 'Machinery & Equipment', examples: 'Industrial equipment, agricultural machinery, parts' },
  { id: 'textiles', name: 'Textiles & Apparel', examples: 'Fabrics, garments, accessories, home textiles' },
  { id: 'home-goods', name: 'Home & Garden', examples: 'Furniture, decor, kitchenware, outdoor equipment' },
  { id: 'packaging', name: 'Packaging Materials', examples: 'Boxes, labels, containers, eco-friendly options' },
  { id: 'promotional', name: 'Promotional Products', examples: 'Branded merchandise, gifts, trade show items' },
  { id: 'toys', name: 'Toys & Games', examples: 'Children toys, board games, educational products' },
  { id: 'sports', name: 'Sports & Fitness', examples: 'Equipment, apparel, outdoor gear, accessories' },
];

// Problems we solve
export const problems = [
  {
    problem: 'Language barriers with Chinese suppliers',
    solution: 'We communicate directly with factories in Mandarin and English, eliminating misunderstandings.',
  },
  {
    problem: 'Quality issues and production delays',
    solution: 'Our on-ground team performs regular inspections and follows up on production schedules.',
  },
  {
    problem: 'Finding trustworthy suppliers',
    solution: 'We verify business licenses, factory facilities, and conduct in-person visits.',
  },
  {
    problem: 'Complex shipping and customs',
    solution: 'We handle all documentation and coordinate with freight forwarders globally.',
  },
];

// Trust points
export const trustPoints = [
  { value: '500+', label: 'Successful Projects' },
  { value: '50+', label: 'Verified Suppliers' },
  { value: '15+', label: 'Years Experience' },
  { value: '30+', label: 'Countries Served' },
];

// Case studies
export const caseStudies = [
  {
    id: 'cs-001',
    client: 'European Retailer',
    industry: 'Home Decor',
    challenge: 'Needed to source 20,000 ceramic vases within a tight budget and 3-month timeline.',
    solution: 'Identified 3 factories in Jingdezhen, coordinated production scheduling, and conducted 3 inspection rounds.',
    result: 'Delivered 20,500 units at 12% below target cost, with 99.2% pass rate on final inspection.',
    products: ['Ceramic Vases', 'Home Decor'],
    image: 'ceramic',
  },
  {
    id: 'cs-002',
    client: 'US Electronics Brand',
    industry: 'Consumer Electronics',
    challenge: 'Required a reliable OEM partner for wireless earbuds with strict quality standards.',
    solution: 'Verified 8 factories, organized factory audits, and implemented a comprehensive QC checklist.',
    result: 'Partnered with a certified factory, reduced defect rate from 8% to 1.5% within 6 months.',
    products: ['Wireless Earbuds', 'Charging Cases'],
    image: 'electronics',
  },
  {
    id: 'cs-003',
    client: 'Australian Sports Brand',
    industry: 'Sportswear',
    challenge: 'Sourcing sustainable activewear with competitive pricing for a new product line.',
    solution: 'Found suppliers with GOTS certification, negotiated MOQs, and established quality benchmarks.',
    result: 'Launched 15-product line on schedule, 25% lower cost than previous supplier.',
    products: ['Activewear', 'Sports Accessories'],
    image: 'sportswear',
  },
];

// FAQ data
export const faqs = [
  {
    question: 'What is the minimum order quantity you work with?',
    answer: 'MOQs vary by product and supplier. We work with clients ordering from 500 pieces per SKU upward. For some products, we can arrange group purchasing to reduce MOQs.',
  },
  {
    question: 'How do you verify supplier reliability?',
    answer: 'We verify business licenses, conduct factory visits, check production capabilities, review financial stability, and check references. Our team has visited over 200 factories in person.',
  },
  {
    question: 'What are your service fees?',
    answer: 'Our fees are typically 5-10% of the order value, depending on service complexity and order size. We provide transparent quotes before starting any engagement.',
  },
  {
    question: 'How do you handle quality control?',
    answer: 'We perform inspections at key production stages: pre-production, during production, and pre-shipment. We use internationally recognized inspection standards (AQL) and provide detailed reports.',
  },
  {
    question: 'What shipping methods do you support?',
    answer: 'We coordinate sea freight (FCL/LCL), air freight, and express courier. We work with established freight forwarders and handle all documentation including customs clearance.',
  },
  {
    question: 'How long does typical sourcing take?',
    answer: 'Supplier identification takes 1-2 weeks. Sample production and evaluation takes 2-4 weeks. Bulk production varies by product, typically 3-8 weeks after sample approval.',
  },
];

// Blog posts
export const blogPosts = [
  {
    id: 'bp-001',
    title: '10 Questions to Ask Before Hiring a China Sourcing Agent',
    excerpt: 'Due diligence is essential when selecting a sourcing partner. Here are the key questions that will help you evaluate potential agents.',
    category: 'Sourcing Guide',
    date: '2026-07-15',
    readTime: '8 min read',
    slug: '10-questions-sourcing-agent',
  },
  {
    id: 'bp-002',
    title: 'Understanding AQL: A Practical Guide to Quality Inspection',
    excerpt: 'Acceptable Quality Limit (AQL) is fundamental to quality control. Learn how to set appropriate sampling plans for your products.',
    category: 'Quality Control',
    date: '2026-07-10',
    readTime: '6 min read',
    slug: 'understanding-aql-quality-inspection',
  },
  {
    id: 'bp-003',
    title: 'Sea Freight vs Air Freight: Making the Right Choice',
    excerpt: 'Shipping method affects both cost and delivery time. Compare the pros and cons of each option for your specific needs.',
    category: 'Logistics',
    date: '2026-07-05',
    readTime: '5 min read',
    slug: 'sea-freight-vs-air-freight',
  },
  {
    id: 'bp-004',
    title: 'How to Read a Chinese Factory Audit Report',
    excerpt: 'Factory audits reveal critical information. Learn what to look for in audit reports to make informed sourcing decisions.',
    category: 'Factory Verification',
    date: '2026-06-28',
    readTime: '7 min read',
    slug: 'read-chinese-factory-audit-report',
  },
];
