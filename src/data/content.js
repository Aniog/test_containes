import {
  Search,
  ShieldCheck,
  ClipboardCheck,
  Factory,
  Ship,
  Tag,
  Handshake,
  PackageCheck,
} from 'lucide-react';

export const services = [
  {
    id: 'supplier-sourcing',
    icon: Search,
    title: 'Supplier sourcing',
    summary:
      'We identify suitable manufacturers from our vetted network and from open markets, then shortlist the best matches for your specs and budget.',
    points: [
      'Targeted supplier search by category and region',
      'RFQ management and quotation comparison',
      'Multi-supplier shortlists with pros and cons',
    ],
  },
  {
    id: 'factory-verification',
    icon: ShieldCheck,
    title: 'Factory verification',
    summary:
      'Before you place an order, we visit the factory in person to confirm capacity, equipment, certifications, and trading history.',
    points: [
      'On-site factory audit with photo and video report',
      'Business license, capacity, and certification checks',
      'Trade and customs record verification',
    ],
  },
  {
    id: 'sample-management',
    icon: PackageCheck,
    title: 'Sample management',
    summary:
      'We coordinate sample requests, consolidate from multiple suppliers, and ship them to you so you can compare side by side.',
    points: [
      'Sample requests, payments, and consolidation',
      'Photo and measurement reports before shipping',
      'International courier coordination',
    ],
  },
  {
    id: 'price-negotiation',
    icon: Tag,
    title: 'Price negotiation',
    summary:
      'We negotiate in Mandarin on your behalf to secure fair pricing, payment terms, MOQs, and tooling fees that protect your margin.',
    points: [
      'Cost breakdown analysis (materials, labor, overhead)',
      'MOQ, payment term, and tooling fee negotiation',
      'Bilingual contracts and PI review',
    ],
  },
  {
    id: 'quality-inspection',
    icon: ClipboardCheck,
    title: 'Quality inspection (QC)',
    summary:
      'Independent quality control at the factory, following AQL standards. Detailed reports with photos before goods leave China.',
    points: [
      'Pre-production, during production, and pre-shipment QC',
      'AQL sampling, function tests, and defect classification',
      'Same-day report with photos and recommendations',
    ],
  },
  {
    id: 'production-followup',
    icon: Factory,
    title: 'Production follow-up',
    summary:
      'We track your order day by day, flag delays early, and keep you informed so production stays on schedule.',
    points: [
      'Weekly production status updates',
      'Material and component tracking',
      'Issue escalation and contingency planning',
    ],
  },
  {
    id: 'shipping-logistics',
    icon: Ship,
    title: 'Shipping & logistics',
    summary:
      'From booking to door, we coordinate freight forwarders, consolidate shipments, and handle export documentation.',
    points: [
      'Sea, air, and rail freight options',
      'Cargo consolidation from multiple suppliers',
      'Export docs, customs, and insurance support',
    ],
  },
  {
    id: 'private-labeling',
    icon: Handshake,
    title: 'Private labeling & OEM',
    summary:
      'Custom packaging, logo printing, and OEM product modifications coordinated directly with the manufacturer.',
    points: [
      'Logo, color, and packaging customization',
      'Artwork and dieline review',
      'OEM product adaptation and tooling',
    ],
  },
];

export const processSteps = [
  {
    id: 'step-1',
    number: '01',
    title: 'Tell us your requirements',
    description:
      'Share your product details, target price, quantity, certifications, and timeline. We respond within one business day.',
  },
  {
    id: 'step-2',
    number: '02',
    title: 'Supplier shortlist',
    description:
      'We identify and shortlist 3 to 5 qualified manufacturers, compare quotations, and present a clear recommendation.',
  },
  {
    id: 'step-3',
    number: '03',
    title: 'Verification & samples',
    description:
      'We visit the factory in person, run a verification check, and consolidate samples for your final approval.',
  },
  {
    id: 'step-4',
    number: '04',
    title: 'Order & production',
    description:
      'We help you negotiate, sign a bilingual contract, place the order, and follow production with weekly updates.',
  },
  {
    id: 'step-5',
    number: '05',
    title: 'Quality inspection',
    description:
      'Independent QC at the factory based on AQL. We share a same-day photo report and only release goods you approve.',
  },
  {
    id: 'step-6',
    number: '06',
    title: 'Shipping to your door',
    description:
      'We book freight, consolidate cargo, prepare export documents, and track the shipment until it arrives.',
  },
];

export const productCategories = [
  {
    id: 'consumer-electronics',
    title: 'Consumer electronics',
    description:
      'Small electronics, accessories, smart home devices, audio products, chargers, and cables. We help with FCC, CE, and RoHS guidance.',
    examples: ['Wireless earbuds', 'Power banks', 'Smart plugs', 'Cables & chargers'],
  },
  {
    id: 'home-kitchen',
    title: 'Home & kitchen',
    description:
      'Houseware, cookware, small appliances, organizers, and home textiles. Sourced from Yiwu, Ningbo, and Guangdong.',
    examples: ['Cookware sets', 'Storage organizers', 'Small appliances', 'Home decor'],
  },
  {
    id: 'apparel-textiles',
    title: 'Apparel & textiles',
    description:
      'Knit and woven garments, bags, accessories, and home textiles. Tech packs, sampling, and bulk production.',
    examples: ['T-shirts & hoodies', 'Workwear', 'Bags & backpacks', 'Bed linen'],
  },
  {
    id: 'furniture',
    title: 'Furniture',
    description:
      'Indoor and outdoor furniture, KD packaging, custom finishes. Sourced from Foshan, Dongguan, and Suzhou.',
    examples: ['Office furniture', 'Outdoor furniture', 'Hospitality furniture', 'Cabinetry'],
  },
  {
    id: 'industrial-machinery',
    title: 'Industrial & machinery',
    description:
      'Components, tools, hardware, and small machinery. Engineering drawings, materials, and tolerance reviewed before sampling.',
    examples: ['Hand tools', 'Hardware', 'Pumps & motors', 'Custom parts'],
  },
  {
    id: 'auto-parts',
    title: 'Auto parts & accessories',
    description:
      'Aftermarket parts, accessories, and detailing products. We confirm fitment, materials, and compliance before order.',
    examples: ['Car accessories', 'Detailing tools', 'Lighting', 'Replacement parts'],
  },
  {
    id: 'beauty-personal-care',
    title: 'Beauty & personal care',
    description:
      'Tools, accessories, and contract-manufactured personal care items. We support compliant labeling and packaging.',
    examples: ['Beauty tools', 'Brushes & combs', 'Skincare packaging', 'Custom kits'],
  },
  {
    id: 'sports-outdoor',
    title: 'Sports & outdoor',
    description:
      'Fitness gear, camping, cycling, and team sports equipment. Functional testing and durability checks during QC.',
    examples: ['Fitness equipment', 'Camping gear', 'Cycling accessories', 'Yoga & training'],
  },
  {
    id: 'promotional-packaging',
    title: 'Promotional & packaging',
    description:
      'Branded merchandise, gift sets, and custom packaging. Logo printing, color matching, and dieline review included.',
    examples: ['Custom boxes', 'Branded gifts', 'Tote bags', 'POS displays'],
  },
];

export const problemsSolved = [
  {
    id: 'problem-suppliers',
    title: 'Unverified suppliers and trading companies',
    description:
      'Many "factories" online are actually trading companies. We separate real manufacturers from middlemen and confirm capacity in person.',
  },
  {
    id: 'problem-quality',
    title: 'Quality issues found after shipment',
    description:
      'Defects discovered after arrival are expensive to fix. We inspect at the factory before goods are loaded, so issues are corrected early.',
  },
  {
    id: 'problem-language',
    title: 'Language and communication gaps',
    description:
      'Mandarin negotiation, technical drawings, and contract details get lost in translation. We bridge the gap on your behalf.',
  },
  {
    id: 'problem-delays',
    title: 'Unexpected production delays',
    description:
      'Without local follow-up, delays surface only at shipping. We track production weekly and flag risks early.',
  },
  {
    id: 'problem-shipping',
    title: 'Complex export and shipping logistics',
    description:
      'Choosing the right freight option, consolidating cargo, and preparing customs documents requires local know-how.',
  },
  {
    id: 'problem-payments',
    title: 'Payment and contract risks',
    description:
      'Unclear payment terms and informal contracts increase exposure. We help structure bilingual contracts and milestone-based payments.',
  },
];

export const trustPoints = [
  {
    id: 'trust-onsite',
    title: 'On-site team in China',
    description: 'Based in Yiwu and Guangdong, we visit factories in person across major manufacturing hubs.',
    stat: '15+',
    statLabel: 'cities covered',
  },
  {
    id: 'trust-experience',
    title: '10+ years of B2B sourcing',
    description: 'Our team has handled thousands of orders for buyers from over 30 countries.',
    stat: '30+',
    statLabel: 'countries served',
  },
  {
    id: 'trust-transparent',
    title: 'Transparent pricing',
    description: 'Clear service fees with no hidden margin on supplier prices. You see all quotations directly.',
    stat: '0',
    statLabel: 'hidden markups',
  },
  {
    id: 'trust-aql',
    title: 'AQL-based quality control',
    description: 'Independent inspections following ISO 2859-1 with photo reports before goods are shipped.',
    stat: 'AQL',
    statLabel: 'standard QC',
  },
];

export const caseStudies = [
  {
    id: 'case-electronics',
    titleId: 'case-case-electronics-title',
    descId: 'case-case-electronics-desc',
    imgId: 'case-img-electronics-7a3b1c',
    industry: 'Consumer electronics',
    location: 'Buyer in Germany',
    title: 'Sourcing wireless earbuds with CE compliance',
    summary:
      'A German importer needed a reliable manufacturer for wireless earbuds with CE and RoHS documentation. We shortlisted four factories in Shenzhen, completed audits, and managed CE testing.',
    metrics: [
      { label: 'Suppliers shortlisted', value: '4' },
      { label: 'Lead time saved', value: '3 weeks' },
      { label: 'Defect rate (final QC)', value: '0.6%' },
    ],
  },
  {
    id: 'case-furniture',
    titleId: 'case-case-furniture-title',
    descId: 'case-case-furniture-desc',
    imgId: 'case-img-furniture-9d2e4f',
    industry: 'Furniture',
    location: 'Buyer in the United States',
    title: 'Outdoor furniture program for a US retailer',
    summary:
      'A US retailer needed two SKUs of outdoor furniture from Foshan with strict color, packaging, and load-test requirements. We managed sampling, three QC rounds, and consolidated shipping.',
    metrics: [
      { label: 'Containers shipped', value: '12 x 40HQ' },
      { label: 'On-time delivery', value: '100%' },
      { label: 'Returns after launch', value: '<1%' },
    ],
  },
  {
    id: 'case-apparel',
    titleId: 'case-case-apparel-title',
    descId: 'case-case-apparel-desc',
    imgId: 'case-img-apparel-2b8a6c',
    industry: 'Apparel',
    location: 'Buyer in the United Kingdom',
    title: 'Private-label workwear with custom labels',
    summary:
      'A UK workwear brand wanted a private-label production partner. We sourced two factories in Zhejiang, managed tech packs and sampling, and ran in-line and final QC.',
    metrics: [
      { label: 'SKUs produced', value: '18' },
      { label: 'Sampling cycle', value: '24 days' },
      { label: 'Order accuracy', value: '99.4%' },
    ],
  },
  {
    id: 'case-machinery',
    titleId: 'case-case-machinery-title',
    descId: 'case-case-machinery-desc',
    imgId: 'case-img-machinery-c4d7e9',
    industry: 'Industrial parts',
    location: 'Buyer in Mexico',
    title: 'Custom machined parts to drawing',
    summary:
      'A Mexican distributor needed CNC-machined components to drawing with tight tolerances. We verified two manufacturers, ran first-article inspection, and managed air freight for the urgent first batch.',
    metrics: [
      { label: 'Tolerance achieved', value: '±0.02 mm' },
      { label: 'First-article reject rate', value: '0%' },
      { label: 'Air freight time', value: '6 days' },
    ],
  },
];

export const blogPosts = [
  {
    id: 'post-verify',
    titleId: 'post-post-verify-title',
    descId: 'post-post-verify-desc',
    imgId: 'post-img-verify-3a8c1d',
    title: 'How to verify a Chinese supplier before placing your first order',
    excerpt:
      'A practical checklist covering business license, factory address, capacity, certifications, and trade history that buyers can apply before signing a contract.',
    category: 'Supplier verification',
    readTime: '7 min read',
    date: 'May 12, 2026',
  },
  {
    id: 'post-aql',
    titleId: 'post-post-aql-title',
    descId: 'post-post-aql-desc',
    imgId: 'post-img-aql-7e2f4b',
    title: 'AQL inspection levels explained for B2B importers',
    excerpt:
      'Understand AQL 1.0, 1.5, 2.5, and 4.0, and how to choose the right inspection level based on your product, market, and risk profile.',
    category: 'Quality control',
    readTime: '6 min read',
    date: 'April 28, 2026',
  },
  {
    id: 'post-shipping',
    titleId: 'post-post-shipping-title',
    descId: 'post-post-shipping-desc',
    imgId: 'post-img-shipping-9b3c5d',
    title: 'Sea, air or rail: choosing the right freight from China',
    excerpt:
      'A side-by-side comparison of cost, transit time, and reliability for the three main freight modes from China to Europe and North America.',
    category: 'Logistics',
    readTime: '5 min read',
    date: 'April 14, 2026',
  },
  {
    id: 'post-yiwu',
    titleId: 'post-post-yiwu-title',
    descId: 'post-post-yiwu-desc',
    imgId: 'post-img-yiwu-1d6e8f',
    title: 'Yiwu vs Guangzhou: where to source which products',
    excerpt:
      'A guide to the strengths of major Chinese manufacturing hubs and how to pick the right city for your category.',
    category: 'Sourcing strategy',
    readTime: '8 min read',
    date: 'March 30, 2026',
  },
  {
    id: 'post-mock',
    titleId: 'post-post-mock-title',
    descId: 'post-post-mock-desc',
    imgId: 'post-img-mock-4f9a2c',
    title: 'Five red flags that signal a trading company, not a factory',
    excerpt:
      'How to spot middlemen disguised as manufacturers and what questions to ask during a video call or factory visit.',
    category: 'Supplier verification',
    readTime: '6 min read',
    date: 'March 16, 2026',
  },
  {
    id: 'post-incoterm',
    titleId: 'post-post-incoterm-title',
    descId: 'post-post-incoterm-desc',
    imgId: 'post-img-incoterm-8c2b6e',
    title: 'EXW, FOB, CIF, DDP: Incoterms cheat sheet for buyers',
    excerpt:
      'A short, plain-language reference for the most common Incoterms used in China-export contracts.',
    category: 'Logistics',
    readTime: '4 min read',
    date: 'March 02, 2026',
  },
];

export const faqs = [
  {
    q: 'How do you charge for sourcing services?',
    a: 'We typically charge a fixed service fee or a percentage of the order value, agreed upfront. We do not add hidden margin on top of supplier quotations, and you always see the original supplier prices.',
  },
  {
    q: 'Do I have to sign a long-term contract?',
    a: 'No. We can start with a single project, a one-off factory verification, or a single inspection. Many buyers move to ongoing programs after the first successful order.',
  },
  {
    q: 'Can you handle small or trial orders?',
    a: 'Yes. We work with new buyers and trial orders, although fees may be slightly higher in proportion to the order. We also help you find suppliers with reasonable MOQs.',
  },
  {
    q: 'Do you have quality inspectors in different cities?',
    a: 'Yes. Our QC team and partner inspectors cover Guangdong, Zhejiang, Jiangsu, Fujian, and Shandong. We can usually be on-site within 1 to 3 business days.',
  },
  {
    q: 'Will I communicate directly with the factory?',
    a: 'You can, and we recommend it for technical alignment. We sit on the same calls and emails, translate, and protect your commercial interests during negotiation.',
  },
  {
    q: 'Can you handle shipping to my country?',
    a: 'Yes. We work with established freight forwarders and can arrange sea, air, and rail freight to most countries, including consolidation from multiple suppliers.',
  },
];
