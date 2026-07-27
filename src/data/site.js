export const SERVICES = [
  {
    id: 'supplier-sourcing',
    icon: 'Search',
    title: 'Supplier Sourcing',
    short: 'We identify and shortlist manufacturers that match your product, price, and capacity requirements.',
    points: [
      'Supplier identification across industrial clusters',
      'Price and MOQ comparison from multiple factories',
      'Sample coordination and evaluation',
    ],
  },
  {
    id: 'factory-verification',
    icon: 'ShieldCheck',
    title: 'Factory Verification & Audit',
    short: 'On-site audits to confirm the factory is real, capable, and compliant before you pay anything.',
    points: [
      'Business license and legal status checks',
      'On-site factory audits with photo/video reports',
      'Production capacity and quality system review',
    ],
  },
  {
    id: 'quality-inspection',
    icon: 'ClipboardCheck',
    title: 'Quality Control & Inspection',
    short: 'Independent inspections at every critical stage so defects are caught before shipment.',
    points: [
      'Pre-production and during-production checks',
      'Pre-shipment inspection (AQL standard)',
      'Container loading supervision',
    ],
  },
  {
    id: 'production-follow-up',
    icon: 'Factory',
    title: 'Production Follow-up',
    short: 'We stay on top of your order from deposit to completion and flag delays early.',
    points: [
      'Weekly production status reports',
      'Timeline and milestone tracking',
      'Issue resolution directly with the factory',
    ],
  },
  {
    id: 'shipping-logistics',
    icon: 'Ship',
    title: 'Shipping & Logistics',
    short: 'End-to-end freight coordination from factory floor to your destination port or warehouse.',
    points: [
      'Sea, air, and rail freight coordination',
      'Export documentation and customs support',
      'Consolidation of orders from multiple suppliers',
    ],
  },
  {
    id: 'product-development',
    icon: 'Lightbulb',
    title: 'Product Development & Customization',
    short: 'Support for OEM/ODM projects, from specification sheets to pre-production samples.',
    points: [
      'OEM/ODM manufacturer matching',
      'Packaging and private label coordination',
      'Engineering sample iteration',
    ],
  },
]

export const PROCESS_STEPS = [
  {
    id: 'step-inquiry',
    num: '01',
    title: 'Send Your Inquiry',
    short: 'Tell us what you want to source — product specs, target price, quantities.',
    detail: 'Share your product details, drawings or reference links, target price, and estimated order quantity. The more specific you are, the faster and more accurately we can quote.',
  },
  {
    id: 'step-sourcing',
    num: '02',
    title: 'Supplier Shortlist & Quote',
    short: 'Within days you receive a shortlist of vetted suppliers with comparable quotes.',
    detail: 'We tap our supplier network and industrial cluster contacts to shortlist 3–5 qualified manufacturers. You receive a comparison of pricing, MOQs, lead times, and factory backgrounds.',
  },
  {
    id: 'step-verification',
    num: '03',
    title: 'Verification & Sampling',
    short: 'We verify the factory and coordinate samples before you commit.',
    detail: 'Before any deposit is paid, we verify business registration, audit the facility, and coordinate samples so you can confirm quality and specifications first-hand.',
  },
  {
    id: 'step-production',
    num: '04',
    title: 'Production & Quality Control',
    short: 'We follow production and inspect goods at key stages.',
    detail: 'During production you receive regular status updates. Our inspectors check goods during production and before shipment using AQL standards, with photo and video reports.',
  },
  {
    id: 'step-shipping',
    num: '05',
    title: 'Shipping & Delivery',
    short: 'We coordinate freight, documentation, and delivery to your destination.',
    detail: 'We arrange freight, prepare export documentation, supervise container loading, and track the shipment until it reaches your port or warehouse.',
  },
]

export const PRODUCT_CATEGORIES = [
  { id: 'consumer-electronics', title: 'Consumer Electronics', desc: 'Accessories, smart devices, small appliances, and audio products.', imgId: 'cat-electronics-a1b2c3' },
  { id: 'home-kitchen', title: 'Home & Kitchen', desc: 'Cookware, storage, home textiles, and household essentials.', imgId: 'cat-home-kitchen-d4e5f6' },
  { id: 'furniture-decor', title: 'Furniture & Decor', desc: 'Indoor and outdoor furniture, lighting, and home decoration.', imgId: 'cat-furniture-g7h8i9' },
  { id: 'apparel-textiles', title: 'Apparel & Textiles', desc: 'Garments, activewear, uniforms, fabrics, and accessories.', imgId: 'cat-apparel-j1k2l3' },
  { id: 'industrial-equipment', title: 'Industrial & Machinery', desc: 'Machinery parts, tools, hardware, and industrial components.', imgId: 'cat-industrial-m4n5o6' },
  { id: 'packaging-printing', title: 'Packaging & Printing', desc: 'Custom boxes, bags, labels, and printed materials.', imgId: 'cat-packaging-p7q8r9' },
  { id: 'beauty-personal-care', title: 'Beauty & Personal Care', desc: 'Cosmetic packaging, beauty tools, and personal care devices.', imgId: 'cat-beauty-s1t2u3' },
  { id: 'sports-outdoor', title: 'Sports & Outdoor', desc: 'Fitness equipment, camping gear, bicycles, and accessories.', imgId: 'cat-sports-v4w5x6' },
  { id: 'toys-games', title: 'Toys & Games', desc: 'Educational toys, plush, board games, and outdoor play.', imgId: 'cat-toys-y7z8a9' },
  { id: 'pet-supplies', title: 'Pet Supplies', desc: 'Pet beds, toys, grooming tools, and feeding accessories.', imgId: 'cat-pets-b1c2d3' },
  { id: 'automotive-accessories', title: 'Automotive Accessories', desc: 'Car accessories, parts, tools, and maintenance products.', imgId: 'cat-auto-e4f5g6' },
  { id: 'building-materials', title: 'Building Materials', desc: 'Tiles, sanitary ware, hardware, and construction supplies.', imgId: 'cat-building-h7i8j9' },
]

export const PROBLEMS = [
  {
    id: 'problem-scams',
    icon: 'AlertTriangle',
    title: 'Unreliable or fake suppliers',
    problem: 'You found a supplier online but cannot tell if they are a real factory, a trading company, or a scam.',
    solution: 'We verify business licenses, visit facilities in person, and confirm real production capability before you commit any money.',
  },
  {
    id: 'problem-quality',
    icon: 'XCircle',
    title: 'Quality that does not match the sample',
    problem: 'The sample was perfect, but the bulk shipment arrives with defects, wrong materials, or inconsistent finishes.',
    solution: 'Independent during-production and pre-shipment inspections catch deviations early, with documented AQL reports before goods leave the factory.',
  },
  {
    id: 'problem-communication',
    icon: 'MessageSquareOff',
    title: 'Communication and language barriers',
    problem: 'Time zones, language gaps, and vague answers make it hard to get straight answers or resolve issues.',
    solution: 'A bilingual account manager on the ground communicates with the factory daily and reports to you in clear English.',
  },
  {
    id: 'problem-delays',
    icon: 'Clock',
    title: 'Production delays you find out about too late',
    problem: 'You only learn about delays when the shipment date has already passed, putting your sales season at risk.',
    solution: 'Weekly production follow-up and milestone tracking flag slippage early so corrective action can be taken in time.',
  },
  {
    id: 'problem-logistics',
    icon: 'Container',
    title: 'Complex shipping and customs',
    problem: 'Freight quotes, Incoterms, export documents, and customs requirements are confusing and costly to get wrong.',
    solution: 'We coordinate freight, prepare export documentation, and supervise loading so your goods move without surprises.',
  },
  {
    id: 'problem-moq',
    icon: 'PackageOpen',
    title: 'High MOQs and hidden costs',
    problem: 'Quoted prices shift, tooling fees appear later, and minimum order quantities do not fit your budget.',
    solution: 'We negotiate transparent pricing across multiple factories and consolidate orders where possible to meet your volume.',
  },
]

export const TRUST_POINTS = [
  {
    id: 'trust-team',
    icon: 'Users',
    title: 'Local team on the ground',
    desc: 'Our sourcing specialists and inspectors work in the manufacturing regions — not behind a desk overseas.',
  },
  {
    id: 'trust-verified',
    icon: 'BadgeCheck',
    title: 'Verified supplier network',
    desc: 'We work with factories we have audited in person, across the major industrial clusters of China.',
  },
  {
    id: 'trust-transparent',
    icon: 'FileText',
    title: 'Transparent reporting',
    desc: 'Every audit, inspection, and production update is documented with photos, videos, and written reports.',
  },
  {
    id: 'trust-independent',
    icon: 'Scale',
    title: 'We work for you, not the factory',
    desc: 'Our fee structure is transparent and agreed upfront. We do not take hidden commissions from suppliers.',
  },
  {
    id: 'trust-bilingual',
    icon: 'Languages',
    title: 'Clear English communication',
    desc: 'You get one dedicated, bilingual point of contact who answers within one business day.',
  },
  {
    id: 'trust-endtoend',
    icon: 'Route',
    title: 'End-to-end accountability',
    desc: 'From first quote to final delivery, one team owns your order instead of handing you off between agents.',
  },
]

export const CASE_STUDIES = [
  {
    id: 'case-kitchenware',
    industry: 'Home & Kitchen',
    title: 'Kitchenware brand cuts defect rate from 8% to under 1%',
    client: 'European kitchenware importer',
    summary: 'A mid-sized importer was receiving inconsistent stainless steel cookware batches from a supplier found online.',
    challenge: 'The client faced an 8% defect rate on deliveries — surface scratches, loose handles, and wrong packaging — with no way to verify production from abroad.',
    approach: 'We audited three alternative factories in Guangdong, moved production to a verified manufacturer, and introduced during-production plus pre-shipment inspections on every order.',
    results: [
      { label: 'Defect rate', value: '< 1%' },
      { label: 'Unit cost reduction', value: '12%' },
      { label: 'Inspection coverage', value: '100% of orders' },
    ],
    imgId: 'case-kitchenware-img-k1l2m3',
  },
  {
    id: 'case-electronics',
    industry: 'Consumer Electronics',
    title: 'Startup launches private-label audio line in 5 months',
    client: 'US e-commerce startup',
    summary: 'A first-time importer needed an OEM partner for a private-label Bluetooth speaker line with custom packaging.',
    challenge: 'With no sourcing experience and a fixed launch date, the founders risked picking an unqualified factory or missing their sales window.',
    approach: 'We shortlisted four OEM factories, coordinated three rounds of samples, negotiated tooling costs, and ran weekly production follow-up through mass production.',
    results: [
      { label: 'Time to market', value: '5 months' },
      { label: 'First order', value: '3,000 units' },
      { label: 'Sample rounds', value: '3 iterations' },
    ],
    imgId: 'case-electronics-img-n4o5p6',
  },
  {
    id: 'case-furniture',
    industry: 'Furniture',
    title: 'Retailer consolidates 6 suppliers into one managed supply chain',
    client: 'Australian furniture retailer',
    summary: 'A retailer buying from six different factories struggled with fragmented communication and missed container deadlines.',
    challenge: 'Six suppliers meant six sets of documents, inconsistent quality, and containers leaving half-empty or late.',
    approach: 'SSourcing China became the single point of contact: we standardized QC across all factories, consolidated orders into shared containers, and coordinated one documentation flow.',
    results: [
      { label: 'Freight cost saving', value: '18%' },
      { label: 'On-time shipments', value: '96%' },
      { label: 'Suppliers managed', value: '6 factories' },
    ],
    imgId: 'case-furniture-img-q7r8s9',
  },
]

export const FAQS = [
  {
    q: 'How much does your sourcing service cost?',
    a: 'It depends on the scope. Sourcing and supplier shortlisting is typically a fixed fee, while order management and QC are charged either per inspection or as a small percentage of order value. We always quote transparently upfront before any work begins — contact us for a free, no-obligation quote.',
  },
  {
    q: 'What is the minimum order quantity you work with?',
    a: 'There is no fixed minimum on our side. MOQs are set by factories and vary by product — some start at a few hundred units. We help you find factories whose MOQs fit your budget, and we can consolidate orders across products where possible.',
  },
  {
    q: 'How do you verify a factory is legitimate?',
    a: 'We check business registration and export licenses, verify the legal representative, and visit the facility in person. Our audit covers production lines, equipment, workforce, quality systems, and export history. You receive a written report with photos and video.',
  },
  {
    q: 'Can I visit the factory myself?',
    a: 'Absolutely — we encourage it. We arrange factory visits, handle interpretation, and plan the itinerary across one or more cities. Many clients visit for the first order and then let us manage follow-up orders remotely.',
  },
  {
    q: 'How long does the sourcing process take?',
    a: 'A typical supplier shortlist with quotes takes 5–10 working days after we receive your specifications. Sampling usually adds 1–3 weeks depending on the product, and mass production lead times are quoted per order before you commit.',
  },
  {
    q: 'Do you handle shipping to my country?',
    a: 'Yes. We coordinate sea, air, and rail freight to major ports worldwide, prepare export documentation, and can arrange door-to-door delivery through our freight partners. We ship regularly to North America, Europe, Australia, and the Middle East.',
  },
  {
    q: 'What happens if an inspection finds quality problems?',
    a: 'You receive the inspection report and decide how to proceed. We negotiate rework, replacement, or discount with the factory on your behalf, and re-inspect before anything ships. No goods leave the factory without your approval.',
  },
  {
    q: 'Which product categories do you source?',
    a: 'We source across 12+ categories including consumer electronics, home and kitchen, furniture, apparel, packaging, industrial components, and more. See our Products We Source page — if your category is not listed, ask us; unusual products are often the most interesting projects.',
  },
]

export const BLOG_POSTS = [
  {
    id: 'verify-chinese-supplier',
    title: 'How to Verify a Chinese Supplier Before You Pay a Deposit',
    excerpt: 'Business licenses, factory audits, and the red flags that separate real manufacturers from trading companies pretending to be factories.',
    category: 'Supplier Verification',
    date: '2026-07-14',
    readTime: '7 min read',
    imgId: 'blog-verify-t1u2v3',
  },
  {
    id: 'aql-inspection-explained',
    title: 'AQL Inspections Explained: What Overseas Buyers Need to Know',
    excerpt: 'What AQL 2.5 actually means, when to inspect during production versus pre-shipment, and how to read an inspection report.',
    category: 'Quality Control',
    date: '2026-06-28',
    readTime: '6 min read',
    imgId: 'blog-aql-w4x5y6',
  },
  {
    id: 'incoterms-guide',
    title: 'FOB, EXW, or DDP? Choosing the Right Incoterm for Your Shipment',
    excerpt: 'A practical comparison of the Incoterms most commonly used when importing from China, and which costs fall on you under each.',
    category: 'Shipping & Logistics',
    date: '2026-06-10',
    readTime: '8 min read',
    imgId: 'blog-incoterms-z7a8b9',
  },
  {
    id: 'sourcing-agent-vs-alibaba',
    title: 'Sourcing Agent vs. Buying Direct on Alibaba: An Honest Comparison',
    excerpt: 'When buying direct makes sense, when it gets risky, and what a sourcing agent actually does for the fee.',
    category: 'Sourcing Strategy',
    date: '2026-05-22',
    readTime: '9 min read',
    imgId: 'blog-compare-c1d2e3',
  },
  {
    id: 'china-industrial-clusters',
    title: 'Where Products Are Made in China: A Map of Industrial Clusters',
    excerpt: 'Electronics in Shenzhen, furniture in Foshan, textiles in Guangzhou — knowing the clusters helps you source closer to the supply chain.',
    category: 'Sourcing Strategy',
    date: '2026-05-06',
    readTime: '6 min read',
    imgId: 'blog-clusters-f4g5h6',
  },
  {
    id: 'first-order-checklist',
    title: 'The First-Order Checklist: 12 Steps Before You Wire Money to China',
    excerpt: 'From specification sheets and golden samples to payment terms and inspection bookings — a practical checklist for first-time importers.',
    category: 'Getting Started',
    date: '2026-04-18',
    readTime: '10 min read',
    imgId: 'blog-checklist-i7j8k9',
  },
]

export const STATS = [
  { value: '200+', label: 'Verified suppliers in our network' },
  { value: '12', label: 'Product categories covered' },
  { value: '15+', label: 'Countries we ship to regularly' },
  { value: '24h', label: 'Response time on inquiries' },
]
