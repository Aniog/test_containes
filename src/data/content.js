// Shared content data for the SSourcing China website.
// Centralized so pages stay consistent and edits are easy.

export const SERVICES = [
  {
    id: 'sourcing',
    icon: 'search',
    title: 'Supplier Sourcing',
    short: 'Find factories that match your product, volume, and quality requirements.',
    description:
      'We research, contact, and shortlist real Chinese factories for your product. You get a clear comparison: capabilities, certifications, MOQ, lead time, and indicative pricing — not just a list of names.',
    bullets: [
      'Product-fit supplier research across multiple cities',
      'Pre-screening on export experience and customer references',
      'Side-by-side quotation comparison with cost breakdown',
    ],
  },
  {
    id: 'verification',
    icon: 'badge-check',
    title: 'Factory Verification',
    short: 'Confirm the factory is real, capable, and legally compliant before you commit.',
    description:
      'On-site visits to verify the factory exists, has the production capacity it claims, and holds the licenses it advertises. We send a written audit with photos and a pass / fail summary.',
    bullets: [
      'Business license and legal-entity check',
      'On-site visit with production line walk-through',
      'Verification of machines, headcount, and capacity',
    ],
  },
  {
    id: 'inspection',
    icon: 'clipboard-check',
    title: 'Quality Inspection',
    short: 'Independent quality checks before, during, and after production.',
    description:
      'Trained inspectors check your order against your specifications. You get a clear report with photos, defect counts, and a pass / fail / rework recommendation — so problems are caught before shipping.',
    bullets: [
      'Pre-production inspection (PPI)',
      'During-production inspection (DPI)',
      'Pre-shipment inspection (PSI)',
    ],
  },
  {
    id: 'production',
    icon: 'line-chart',
    title: 'Production Follow-up',
    short: 'Stay informed about your order without chasing suppliers yourself.',
    description:
      'We track production milestones, share progress photos, and flag delays early. You always know where your order stands, and we step in to resolve issues before they become problems.',
    bullets: [
      'Milestone tracking from PO to ex-factory',
      'Weekly progress updates with photos and notes',
      'Escalation handling for delays and quality deviations',
    ],
  },
  {
    id: 'shipping',
    icon: 'truck',
    title: 'Shipping & Logistics',
    short: 'Get your goods from the factory floor to your destination port.',
    description:
      'We coordinate pickup, export documentation, consolidation, and ocean or air freight. You get transparent shipping options with a clear cost and transit-time comparison.',
    bullets: [
      'Sample consolidation and warehouse handling',
      'FCL, LCL, air, and express options',
      'Export documentation and customs support',
    ],
  },
  {
    id: 'samples',
    icon: 'package',
    title: 'Sample Management',
    short: 'Get the right samples in your hands before committing to bulk production.',
    description:
      'We coordinate sample requests, follow up on production timing, consolidate samples from multiple factories, and ship them to you as one package — saving time and international shipping cost.',
    bullets: [
      'Sample request coordination with factories',
      'Sample consolidation across multiple suppliers',
      'International sample shipping to your office',
    ],
  },
]

export const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Share Your Requirements',
    description:
      'Tell us what you want to source, target quantity, and must-have specs. The more detail you share, the more accurate the shortlist.',
  },
  {
    step: '02',
    title: 'Supplier Shortlist',
    description:
      'We research qualified factories, pre-screen them, and send you 3–5 candidates with quotes, lead times, and a capability comparison.',
  },
  {
    step: '03',
    title: 'Factory Verification',
    description:
      'For your top candidates, we conduct on-site verification: legal status, production capacity, machines, and workforce.',
  },
  {
    step: '04',
    title: 'Sampling',
    description:
      'We coordinate sample production, track delivery, consolidate samples, and ship them to you. You evaluate before committing to bulk.',
  },
  {
    step: '05',
    title: 'Production & QC',
    description:
      'Once you confirm, we manage production milestones and arrange inspections at the right stages of production.',
  },
  {
    step: '06',
    title: 'Shipping & Delivery',
    description:
      'We coordinate export docs, freight, and customs. Your goods arrive at the destination port, ready for your last-mile.',
  },
]

export const PRODUCT_CATEGORIES = [
  {
    name: 'Consumer Electronics & Accessories',
    description: 'Chargers, cables, earbuds, smart devices, batteries, small appliances.',
    icon: 'cpu',
  },
  {
    name: 'Home & Kitchen',
    description: 'Cookware, storage, tableware, cleaning tools, kitchen gadgets.',
    icon: 'home',
  },
  {
    name: 'Apparel & Textiles',
    description: 'Ready-made garments, fabrics, workwear, bags, fashion accessories.',
    icon: 'shirt',
  },
  {
    name: 'Beauty & Personal Care',
    description: 'Skincare, haircare, cosmetics, grooming tools, OEM / ODM packaging.',
    icon: 'sparkles',
  },
  {
    name: 'Industrial & Hardware',
    description: 'Machined parts, fasteners, tools, fittings, electrical components.',
    icon: 'wrench',
  },
  {
    name: 'Packaging & Print',
    description: 'Custom boxes, labels, bags, paper products, sustainable packaging.',
    icon: 'package-2',
  },
  {
    name: 'Sporting & Outdoor',
    description: 'Fitness gear, camping equipment, cycling accessories, water sports.',
    icon: 'bike',
  },
  {
    name: 'Furniture & Decor',
    description: 'Indoor and outdoor furniture, lighting, home decor, soft furnishings.',
    icon: 'sofa',
  },
  {
    name: 'Toys & Pet Products',
    description: 'Children toys, pet supplies, training gear, plush and novelty items.',
    icon: 'paw-print',
  },
]

export const PROBLEMS = [
  {
    problem: 'You cannot tell which factories are real and which are trading companies.',
    solution: 'We verify business licenses, visit production lines, and confirm what each factory actually manufactures.',
  },
  {
    problem: 'You receive quotes that look good but hide extra costs.',
    solution: 'We break down unit price, tooling, packaging, and shipping so you know the real landed cost.',
  },
  {
    problem: 'You worry about product quality and have no one on the ground to check.',
    solution: 'Independent inspections at PPI, DPI, and PSI stages with photo and defect reports.',
  },
  {
    problem: 'Suppliers go silent after you pay the deposit.',
    solution: 'We follow up weekly, share progress updates, and escalate before small issues become missed deadlines.',
  },
  {
    problem: 'Export paperwork and shipping quotes feel overwhelming.',
    solution: 'We handle documentation, consolidation, and freight comparison with transparent FOB / CIF / DDP options.',
  },
  {
    problem: 'Communication gaps and time-zone headaches slow everything down.',
    solution: 'A dedicated English-speaking project manager who responds within one business day.',
  },
]

export const TRUST_POINTS = [
  {
    title: 'On the Ground in China',
    description: 'Our team is based in Shenzhen with direct access to factory clusters in Guangdong, Zhejiang, Jiangsu, Fujian, and beyond.',
    icon: 'map-pin',
  },
  {
    title: 'Independent Inspections',
    description: 'Our QC team works for you, not the factory. Reports include photos, defect counts, and a clear pass / fail verdict.',
    icon: 'shield-check',
  },
  {
    title: 'English-Speaking Project Managers',
    description: 'You work with a single dedicated contact who speaks fluent English and understands B2B buying cycles.',
    icon: 'user-check',
  },
  {
    title: 'Transparent Cost Breakdown',
    description: 'Every quote is itemized — unit price, tooling, packaging, inspection, freight — so you can compare apples to apples.',
    icon: 'file-text',
  },
  {
    title: 'No Hidden Fees, No Commissions',
    description: 'Our service fees are quoted upfront. We do not take kickbacks from factories, so our advice stays independent.',
    icon: 'scale',
  },
  {
    title: 'NDA & Confidentiality',
    description: 'We sign NDAs as a matter of course and only share your project details with vetted, relevant factories.',
    icon: 'lock',
  },
]

export const CASE_STUDIES = [
  {
    industry: 'Consumer Electronics',
    client: 'US Amazon FBA seller',
    product: 'USB-C charging cables',
    challenge: 'The buyer was receiving inconsistent quality and high defect rates from their current supplier.',
    actions: [
      'Audited three new factories with on-site visits',
      'Coordinated gold-plated connector samples from two finalists',
      'Ran pre-shipment inspection on a 10,000-unit trial order',
    ],
    outcome: 'Defect rate dropped from 6.2% to 1.4%. Unit cost reduced by 11% on the second production run.',
  },
  {
    industry: 'Home & Kitchen',
    client: 'European retail brand',
    product: 'Stainless steel water bottles',
    challenge: 'Buyer needed a factory with both food-grade certification and custom powder-coating capability.',
    actions: [
      'Shortlisted 4 factories across Zhejiang and Guangdong',
      'Verified LFGB and FDA documentation',
      'Coordinated custom color samples and consolidations',
    ],
    outcome: 'First container shipped on time. Buyer now places 4 containers per quarter through us.',
  },
  {
    industry: 'Beauty & Personal Care',
    client: 'DTC skincare startup (Australia)',
    product: 'Private-label serum bottles and boxes',
    challenge: 'Startup needed an OEM partner that could handle small MOQ, custom packaging, and export compliance.',
    actions: [
      'Found OEM factory with low MOQ and in-house filling',
      'Coordinated label design proofs and printing samples',
      'Consolidated samples from 3 component suppliers',
    ],
    outcome: 'Launched on schedule with 3,000-unit first run. Repeat orders every 6 weeks.',
  },
  {
    industry: 'Industrial Hardware',
    client: 'German B2B distributor',
    product: 'Custom CNC machined parts',
    challenge: 'Buyer needed EN 10204 3.1 material certificates and tight tolerance checks.',
    actions: [
      'Verified two factories with 5-axis machining capability',
      'Arranged third-party dimensional inspection',
      'Confirmed mill certificates and traceability documentation',
    ],
    outcome: '20,000-part order completed to spec, with full traceability documentation.',
  },
]

export const FAQS = [
  {
    q: 'What information do you need to start a sourcing project?',
    a: 'A product description (materials, key specs, target use), estimated order quantity, target unit price if you have one, and any certifications required (e.g. CE, FDA, LFGB). Photos or reference links help a lot. We will reply with a sourcing plan within one business day.',
  },
  {
    q: 'How is your service priced?',
    a: 'Sourcing and supplier shortlist work is free of charge — we are compensated by a transparent service fee on confirmed orders or by a flat fee on projects like inspections, audits, or sample consolidation. All fees are quoted upfront before we start.',
  },
  {
    q: 'Do you handle small orders or only large ones?',
    a: 'We work with both. Many of our clients start with sample or small-batch orders (a few hundred to a few thousand units) before scaling. The factory MOQ depends on the product, not on us.',
  },
  {
    q: 'How do you verify a factory is real?',
    a: 'We check the business license against the official registry, visit the facility in person, walk the production line, verify machines and headcount, and confirm the factory actually manufactures the product in question. You receive a written audit report with photos.',
  },
  {
    q: 'Can you protect my product idea?',
    a: 'Yes. We sign NDAs as standard practice and only share your project details with factories that are directly relevant and pre-screened. We also avoid sending full design files until a factory is approved and confidentiality is in place.',
  },
  {
    q: 'How do quality inspections work?',
    a: 'You share an inspection checklist and AQL level. Our inspector goes to the factory, samples units from the finished or in-production batch, checks them against your specs, photographs defects, and issues a pass / fail / rework report — usually within 24 hours of the visit.',
  },
  {
    q: 'What shipping options can you arrange?',
    a: 'We can quote FOB, CIF, and DDP for sea (FCL / LCL) and air freight, as well as courier (DHL, FedEx, UPS) for samples. We consolidate samples from multiple factories to save on international shipping cost.',
  },
  {
    q: 'Where is your team based?',
    a: 'Our head office is in Shenzhen, with project managers and inspectors covering Guangdong, Zhejiang, Jiangsu, Fujian, and Shanghai. We work with overseas clients in English, with WhatsApp and email as standard.',
  },
]

export const BLOG_POSTS = [
  {
    slug: 'how-to-verify-china-factory',
    category: 'Supplier Verification',
    title: 'How to verify a Chinese factory is real before you place an order',
    excerpt: 'A practical checklist for separating genuine manufacturers from trading companies — using public records, on-site visits, and the right questions to ask.',
    readTime: '7 min read',
    date: '2026-05-12',
  },
  {
    slug: 'understanding-quality-inspection-reports',
    category: 'Quality Control',
    title: 'Understanding AQL and pre-shipment inspection reports',
    excerpt: 'What an AQL 2.5 inspection really means, how to read the report, and when to accept, rework, or reject a batch.',
    readTime: '6 min read',
    date: '2026-04-28',
  },
  {
    slug: 'fob-cif-ddp-explained',
    category: 'Shipping & Logistics',
    title: 'FOB vs CIF vs DDP: how to choose the right shipping term',
    excerpt: 'Each incoterm shifts cost, risk, and paperwork. Here is a plain-English guide to picking the right one for your first import from China.',
    readTime: '8 min read',
    date: '2026-04-15',
  },
  {
    slug: 'common-sourcing-mistakes',
    category: 'Sourcing Tips',
    title: '7 common mistakes first-time importers make when sourcing from China',
    excerpt: 'From skipping factory audits to chasing the lowest quote, here are the pitfalls we see most often — and how to avoid them.',
    readTime: '9 min read',
    date: '2026-03-30',
  },
  {
    slug: 'sample-consolidation-saves-money',
    category: 'Logistics',
    title: 'How sample consolidation saves overseas buyers 40%+ on shipping',
    excerpt: 'A simple workflow that lets you evaluate five factories in one shipment, instead of paying for five separate international packages.',
    readTime: '5 min read',
    date: '2026-03-12',
  },
  {
    slug: 'nda-with-chinese-suppliers',
    category: 'Legal & IP',
    title: 'Are NDAs with Chinese suppliers actually enforceable?',
    excerpt: 'NDAs are useful as a filter, but they are not a guarantee. Here is how to combine contracts, escrow, and factory selection for real protection.',
    readTime: '10 min read',
    date: '2026-02-25',
  },
]

export const STATS = [
  { value: '12+', label: 'Years sourcing from China' },
  { value: '1,200+', label: 'Suppliers verified' },
  { value: '8,000+', label: 'Inspections completed' },
  { value: '24h', label: 'Average quote turnaround' },
]
