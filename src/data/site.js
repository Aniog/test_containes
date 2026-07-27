export const NAV_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'How It Works', path: '/how-it-works' },
  { label: 'Products We Source', path: '/products' },
  { label: 'Case Studies', path: '/case-studies' },
  { label: 'Blog', path: '/blog' },
  { label: 'Contact', path: '/contact' },
]

export const SERVICES = [
  {
    id: 'supplier-sourcing',
    icon: 'Search',
    title: 'Supplier Sourcing & Shortlisting',
    short: 'We identify and shortlist qualified factories that match your product, volume, and target price.',
    details: [
      'Market mapping across relevant manufacturing clusters',
      'Shortlist of 3–8 pre-screened suppliers per project',
      'Structured quotation comparison (price, MOQ, lead time, terms)',
      'Sample coordination and initial specification checks',
    ],
  },
  {
    id: 'factory-verification',
    icon: 'BadgeCheck',
    title: 'Factory Verification & Audits',
    short: 'On-site verification of business licenses, production capability, and quality systems before you commit.',
    details: [
      'Business license and legal registration checks',
      'On-site factory audits with photo and video reports',
      'Production capacity and equipment assessment',
      'Social compliance and export history review',
    ],
  },
  {
    id: 'quality-inspection',
    icon: 'ClipboardCheck',
    title: 'Quality Control & Inspection',
    short: 'Independent inspectors check your goods during production and before shipment against your specification.',
    details: [
      'Pre-production and during-production inspections (DUPRO)',
      'Pre-shipment inspection to AQL 2.5 standards',
      'Container loading supervision',
      'Defect reporting with photos within 24 hours',
    ],
  },
  {
    id: 'production-follow-up',
    icon: 'Factory',
    title: 'Production Follow-Up',
    short: 'Weekly production updates so you know exactly where your order stands — without chasing factories yourself.',
    details: [
      'Production schedule confirmation and milestone tracking',
      'Weekly status reports with photos from the factory floor',
      'Early escalation of delays or material issues',
      'Coordination of changes, approvals, and re-work',
    ],
  },
  {
    id: 'shipping-logistics',
    icon: 'Ship',
    title: 'Shipping & Logistics Coordination',
    short: 'We coordinate freight booking, export documents, and consolidation with your forwarder or ours.',
    details: [
      'FOB, EXW, CIF, and DDP shipment coordination',
      'Consolidation of orders from multiple suppliers',
      'Export documentation and customs paperwork checks',
      'Freight forwarder liaison and booking management',
    ],
  },
  {
    id: 'sourcing-management',
    icon: 'Handshake',
    title: 'End-to-End Sourcing Management',
    short: 'One accountable partner managing the full process from product brief to final delivery.',
    details: [
      'Single point of contact for your entire China supply chain',
      'Supplier negotiation and contract support',
      'Payment milestone coordination (deposit, balance, inspection hold)',
      'Ongoing supplier performance management for repeat orders',
    ],
  },
]

export const PROCESS_STEPS = [
  {
    step: 1,
    title: 'Send Your Product Brief',
    duration: 'Day 0',
    short: 'Share your product specifications, target price, quantity, and reference links or drawings.',
    detail: 'The more detail you give us — materials, dimensions, certifications, packaging, target price — the faster and more accurately we can source. Photos, drawings, and competitor links all help.',
  },
  {
    step: 2,
    title: 'Supplier Shortlist & Quotes',
    duration: 'Days 2–7',
    short: 'We identify qualified factories, verify their legitimacy, and present a quotation comparison.',
    detail: 'We search across manufacturing clusters, filter out traders posing as factories, verify business licenses, and collect structured quotes. You receive a side-by-side comparison with our recommendation.',
  },
  {
    step: 3,
    title: 'Samples & Factory Audit',
    duration: 'Weeks 1–3',
    short: 'Order samples and audit the shortlisted factory on-site before you place a deposit.',
    detail: 'We coordinate sample production, arrange an on-site factory audit with photo and video documentation, and verify that what you see in the sample is what the factory can mass-produce.',
  },
  {
    step: 4,
    title: 'Production & Quality Control',
    duration: 'Weeks 3–8',
    short: 'We follow production weekly and inspect goods during production and before shipment.',
    detail: 'You receive weekly production reports. Our inspectors check goods at key stages — during production (DUPRO) and pre-shipment against AQL standards — so defects are caught before goods leave the factory.',
  },
  {
    step: 5,
    title: 'Shipping & Delivery',
    duration: 'Weeks 8–12',
    short: 'We coordinate freight, export documents, and loading — then track your shipment to arrival.',
    detail: 'We supervise container loading, verify export documents, coordinate with your freight forwarder or book with our logistics partners, and keep you updated until the goods arrive at your port or door.',
  },
]

export const PRODUCT_CATEGORIES = [
  {
    id: 'consumer-electronics',
    title: 'Consumer Electronics & Accessories',
    desc: 'Audio products, chargers, smart home devices, cables, and electronic accessories from Shenzhen and Dongguan clusters.',
    examples: ['Bluetooth audio', 'Chargers & power banks', 'Smart home devices', 'Cables & adapters'],
  },
  {
    id: 'home-kitchen',
    title: 'Home, Kitchen & Furniture',
    desc: 'Kitchenware, storage, small furniture, and home décor from Zhejiang, Guangdong, and Fujian suppliers.',
    examples: ['Cookware & utensils', 'Storage & organization', 'Flat-pack furniture', 'Home textiles'],
  },
  {
    id: 'fitness-outdoor',
    title: 'Fitness & Outdoor Products',
    desc: 'Fitness equipment, camping gear, and outdoor accessories with attention to safety and material standards.',
    examples: ['Resistance & yoga products', 'Camping & hiking gear', 'Bike accessories', 'Sports bags'],
  },
  {
    id: 'pet-products',
    title: 'Pet Products',
    desc: 'Pet toys, beds, feeders, and grooming tools from factories experienced in EU and US pet product requirements.',
    examples: ['Pet toys', 'Beds & carriers', 'Feeders & bowls', 'Grooming tools'],
  },
  {
    id: 'beauty-personal-care',
    title: 'Beauty & Personal Care Tools',
    desc: 'Beauty tools, cosmetic packaging, and personal care accessories from audited, compliant factories.',
    examples: ['Beauty tools & brushes', 'Cosmetic packaging', 'Mirrors & organizers', 'Hair accessories'],
  },
  {
    id: 'tools-hardware',
    title: 'Tools & Hardware',
    desc: 'Hand tools, garden tools, and hardware accessories with material and hardness testing available.',
    examples: ['Hand tools', 'Garden tools', 'Fasteners & fittings', 'Tool storage'],
  },
  {
    id: 'bags-apparel-accessories',
    title: 'Bags & Apparel Accessories',
    desc: 'Backpacks, travel bags, and soft goods with fabric inspection and stitch quality control.',
    examples: ['Backpacks & travel bags', 'Cosmetic bags', 'Hats & caps', 'Belts & wallets'],
  },
  {
    id: 'packaging-printing',
    title: 'Packaging & Printing',
    desc: 'Custom retail packaging, boxes, and printed materials matched to your brand requirements.',
    examples: ['Rigid & folding boxes', 'Pouches & bags', 'Labels & inserts', 'Display packaging'],
  },
  {
    id: 'custom-oem',
    title: 'Custom & OEM Products',
    desc: 'Custom-molded parts, private label products, and OEM manufacturing based on your drawings or samples.',
    examples: ['Injection-molded parts', 'Private label goods', 'Custom metal fabrication', 'OEM assemblies'],
  },
]

export const CASE_STUDIES = [
  {
    id: 'us-kitchenware-brand',
    industry: 'Home & Kitchen',
    region: 'United States',
    title: 'US Kitchenware Brand Cut Landed Costs by 18% with Factory-Direct Sourcing',
    summary: 'A growing kitchenware brand was buying through a trading company at a 25% markup. We identified the actual manufacturer, verified the factory, and renegotiated direct terms.',
    challenge: 'The client suspected their "factory" was actually a trading company adding margin, but had no way to verify. Prices had risen 12% year over year with no quality improvement.',
    approach: 'We traced the supply chain, located the actual manufacturer in Yangjiang, verified their business registration and production capability on-site, and negotiated direct pricing with QC checkpoints built in.',
    results: [
      { metric: '18%', label: 'reduction in landed cost' },
      { metric: '14 days', label: 'from brief to confirmed factory' },
      { metric: '0.8%', label: 'defect rate after QC program' },
    ],
    quote: 'We now know exactly who makes our products and what happens at each stage. The transparency alone was worth it.',
    quoteAuthor: 'Operations Director, US kitchenware brand',
  },
  {
    id: 'eu-pet-accessories-retailer',
    industry: 'Pet Products',
    region: 'Germany',
    title: 'German Retailer Avoided a Failed Shipment with Pre-Shipment Inspection',
    summary: 'A German pet accessories retailer needed reliable QC before their first container order of 8,000 units. Our pre-shipment inspection caught a critical stitching defect before loading.',
    challenge: 'First-time importer with no China presence, ordering a full container of pet beds and carriers. A quality failure on the first order would have damaged their retail launch.',
    approach: 'We audited the factory before deposit, ran a during-production check at 30% completion, and a full AQL 2.5 pre-shipment inspection that found seam failures on 6% of units — rejected and reworked before loading.',
    results: [
      { metric: '6%', label: 'defective units caught before shipment' },
      { metric: '100%', label: 'on-time retail launch' },
      { metric: '3', label: 'repeat orders since launch' },
    ],
    quote: 'The inspection report paid for itself many times over. We would have shipped a faulty container without knowing.',
    quoteAuthor: 'Founder, German pet products retailer',
  },
  {
    id: 'au-fitness-equipment-startup',
    industry: 'Fitness & Outdoor',
    region: 'Australia',
    title: 'Australian Fitness Startup Consolidated 5 Suppliers into One Managed Supply Chain',
    summary: 'A fitness startup was juggling five suppliers, three freight forwarders, and constant delays. We consolidated sourcing, QC, and shipping under one managed process.',
    challenge: 'Managing five suppliers across three provinces meant inconsistent quality, missed production windows, and partial shipments arriving at different times — tying up cash and warehouse space.',
    approach: 'We re-qualified all five suppliers, standardized QC checkpoints, synchronized production schedules, and consolidated shipments into planned monthly containers with a single document set.',
    results: [
      { metric: '22%', label: 'freight cost savings via consolidation' },
      { metric: '5 → 1', label: 'suppliers managed through one contact' },
      { metric: '92%', label: 'on-time shipment rate' },
    ],
    quote: 'One weekly update replaced twenty supplier chats. We finally have a supply chain instead of a spreadsheet of problems.',
    quoteAuthor: 'Co-founder, Australian fitness equipment startup',
  },
]

export const FAQS = [
  {
    q: 'How does SSourcing China charge for sourcing services?',
    a: 'We work on transparent, agreed fees depending on the service scope — typically a fixed project fee for sourcing and verification, and per-inspection fees for QC work. There are no hidden markups on factory prices: you see the factory\'s actual quotation. Contact us with your product brief and we will provide a clear fee proposal before any work starts.',
  },
  {
    q: 'What is the minimum order quantity you work with?',
    a: 'MOQs depend on the product and factory. Many products can be sourced from a few hundred units; custom or OEM products usually require higher volumes. During sourcing we collect MOQ information from every shortlisted factory so you can decide with full visibility.',
  },
  {
    q: 'How do you verify that a factory is legitimate?',
    a: 'We check business licenses and legal registration, confirm export history, and visit the factory on-site. Our audit reports include photos, video, production equipment lists, and capacity assessments — so you know whether you are dealing with a real manufacturer or a trading intermediary.',
  },
  {
    q: 'What inspection standards do you use?',
    a: 'We inspect against your product specification and internationally recognized AQL sampling standards (typically AQL 2.5 for general consumer goods). Inspection reports with photos and measurements are delivered within 24 hours of each inspection.',
  },
  {
    q: 'Can you work with suppliers I have already found?',
    a: 'Yes. Many clients come to us with existing suppliers. We can verify the factory on-site, audit their quality systems, run inspections on your orders, and manage production follow-up — without changing your commercial relationship.',
  },
  {
    q: 'Do you handle shipping and customs?',
    a: 'We coordinate shipping end-to-end: freight booking, consolidation from multiple suppliers, export documentation, and container loading supervision. We work with your nominated forwarder or our logistics partners. Import customs clearance at destination is handled by your customs broker, with our document support.',
  },
  {
    q: 'How long does the sourcing process take?',
    a: 'A typical sourcing project takes 2–3 weeks from product brief to confirmed, verified supplier. Sampling adds 1–3 weeks, and mass production typically runs 4–8 weeks depending on the product. We give you a realistic timeline upfront and report against it weekly.',
  },
  {
    q: 'Which product categories do you specialize in?',
    a: 'We source across consumer electronics, home and kitchen, fitness and outdoor, pet products, beauty tools, hardware, bags, packaging, and custom OEM products. If your product is not listed, ask us — we will tell you honestly whether we are the right partner for it.',
  },
]

export const BLOG_POSTS = [
  {
    id: 'verify-chinese-factory-guide',
    category: 'Supplier Verification',
    title: 'How to Verify a Chinese Factory Before You Pay a Deposit',
    excerpt: 'Business licenses, audit checklists, and the red flags that reveal a trading company posing as a manufacturer.',
    date: '2026-07-15',
    readTime: '8 min read',
  },
  {
    id: 'aql-inspection-explained',
    category: 'Quality Control',
    title: 'AQL Inspection Explained: What AQL 2.5 Actually Means for Your Order',
    excerpt: 'A practical guide to sampling sizes, acceptance levels, and when to tighten your inspection standard.',
    date: '2026-07-02',
    readTime: '6 min read',
  },
  {
    id: 'sourcing-agent-vs-alibaba',
    category: 'Sourcing Strategy',
    title: 'Sourcing Agent vs. Buying Direct on Alibaba: An Honest Comparison',
    excerpt: 'Cost, risk, time, and control — when each approach makes sense for importers at different stages.',
    date: '2026-06-18',
    readTime: '7 min read',
  },
  {
    id: 'china-shipping-incoterms',
    category: 'Shipping & Logistics',
    title: 'FOB vs. EXW vs. DDP: Choosing the Right Incoterm for China Imports',
    excerpt: 'What each term really costs, who controls the freight, and the common mistakes first-time importers make.',
    date: '2026-06-05',
    readTime: '9 min read',
  },
  {
    id: 'golden-week-production-planning',
    category: 'Production Management',
    title: 'Planning Production Around Chinese Holidays: 2026–2027 Calendar',
    excerpt: 'Golden Week, Chinese New Year, and factory shutdowns — how to keep your supply chain moving.',
    date: '2026-05-22',
    readTime: '5 min read',
  },
  {
    id: 'product-sample-checklist',
    category: 'Quality Control',
    title: 'The 12-Point Checklist for Approving a Pre-Production Sample',
    excerpt: 'What to test, measure, and document before you authorize mass production of your product.',
    date: '2026-05-08',
    readTime: '6 min read',
  },
]

export const TRUST_POINTS = [
  { value: '2016', label: 'Operating since', note: 'A decade of on-the-ground sourcing experience' },
  { value: '500+', label: 'Factory audits completed', note: 'Verified on-site across 12 provinces' },
  { value: '30+', label: 'Countries served', note: 'Buyers in North America, Europe, and Oceania' },
  { value: '24h', label: 'Report turnaround', note: 'Inspection and audit reports with photos' },
]
