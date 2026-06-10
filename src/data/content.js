// Centralized content for SSourcing China

export const company = {
  name: 'SSourcing China',
  shortName: 'SSourcing',
  tagline: 'China Sourcing Agent for Global Buyers',
  email: 'info@ssourcing.cn',
  phone: '+86 138 0000 0000',
  address: 'Shenzhen, Guangdong, China',
  hours: 'Mon–Fri, 9:00–18:00 (CST, GMT+8)',
  whatsapp: '+86 138 0000 0000',
  wechat: 'ssourcing_cn',
  yearsInBusiness: 11,
};

export const services = [
  {
    id: 'supplier-sourcing',
    title: 'Supplier Sourcing & Shortlisting',
    summary: 'Find 3–5 vetted Chinese suppliers that match your product, MOQ, and target price.',
    description: 'We research manufacturers across Alibaba, 1688, industry clusters, and our private database, then shortlist suppliers based on capability, certifications, capacity, and export experience. You receive a comparison sheet with pricing, lead times, and a written recommendation.',
    deliverables: ['3–5 qualified supplier profiles', 'Side-by-side capability & price comparison', 'Contact details, certifications, factory photos'],
    deliverable: 'A written supplier shortlist with 3–5 verified options, plus a one-page recommendation note from your project manager.',
    icon: 'search',
    image: 'sourcing agent in front of a multi-monitor setup reviewing Chinese factory profiles and product photos at a Shenzhen office desk',
    imageId: 'svc-sourcing-3a8b4c',
  },
  {
    id: 'factory-verification',
    title: 'Factory Verification & Audit',
    summary: 'On-site factory audit to confirm the supplier is real, licensed, and capable.',
    description: 'Our auditors visit the factory in person to verify the business license, production lines, workforce, equipment, and quality systems. We send you a structured report with photos, video clips, and a pass/needs-improvement/fail rating.',
    deliverables: ['Business license & registration check', 'Production capacity assessment', 'On-site photos and short video', 'Risk flags and recommendations'],
    deliverable: 'A 15–25 page audit report with photos, video, and a clear pass / needs-improvement / fail rating.',
    icon: 'badge-check',
    image: 'quality auditor in a hard hat walking through a Chinese factory production line, taking notes on a clipboard with rows of machinery behind',
    imageId: 'svc-audit-2c1d9e',
  },
  {
    id: 'quality-control',
    title: 'Quality Control & Inspection',
    summary: 'Pre-production, during-production, and pre-shipment inspections to your AQL standard.',
    description: 'Inspectors check raw materials, in-line workmanship, dimensions, function, packaging, and labeling against your specifications. Reports include photos, defect counts, and a pass/reject decision within 24 hours of the inspection.',
    deliverables: ['PSI, DUPRO, and pre-shipment inspections', 'AQL-based sampling (1.5/2.5/4.0)', 'Photo & video evidence', '24-hour report turnaround'],
    deliverable: 'A photo-rich inspection report with AQL sampling data, defect categorization, and a pass / reject / hold decision within 24 hours.',
    icon: 'clipboard-check',
    image: 'inspector in a Chinese electronics factory measuring a circuit board with calipers, with stacked product cartons in the background',
    imageId: 'svc-qc-7f4a2b',
  },
  {
    id: 'production-follow-up',
    title: 'Production Follow-Up',
    summary: 'Weekly status updates on production, lead time, and milestones from PO to ex-works.',
    description: 'After the purchase order is placed, we stay in contact with the factory to track raw material preparation, production progress, and finishing. You receive a weekly status email and immediate alerts if anything risks your delivery date.',
    deliverables: ['Weekly production status report', 'Photo updates at key milestones', 'Escalation if deadlines slip'],
    deliverable: 'A weekly status email with production photos, lead time tracking, and same-day escalation of any risk to your delivery date.',
    icon: 'trending-up',
    image: 'factory floor with rows of partly finished products on a production line, supervisor walking along the line with a tablet in hand',
    imageId: 'svc-production-5e9c1a',
  },
  {
    id: 'shipping-logistics',
    title: 'Shipping & Logistics Coordination',
    summary: 'We compare freight options, book cargo, and handle export documents on your behalf.',
    description: 'Sea (FCL/LCL), air, express, and rail freight from Shenzhen, Ningbo, Shanghai, or Guangzhou to any destination. We prepare commercial invoices, packing lists, certificates of origin, and arrange customs clearance support at origin.',
    deliverables: ['Freight quotes (sea / air / express / rail)', 'Export documentation (CI, PL, COO, fumigation)', 'Container loading supervision', 'Tracking until destination port'],
    deliverable: 'A booked shipment with freight quote, export documents, container-loading photos, and tracking to your destination port.',
    icon: 'ship',
    image: 'stacked shipping containers at a Chinese port at golden hour, with a cargo crane lifting a container onto a vessel in the background',
    imageId: 'svc-shipping-9b3d8e',
  },
  {
    id: 'sample-consolidation',
    title: 'Sample Consolidation & Warehousing',
    summary: 'Combine samples from multiple suppliers into a single shipment to save on courier costs.',
    description: 'Have samples sent to our Shenzhen warehouse. We check the contents, consolidate into one box with your own packaging, and ship via DHL/FedEx/UPS to your office or a 3PL. We also offer short-term free storage for production goods.',
    deliverables: ['Centralized receiving address in Shenzhen', 'Photo check on arrival', 'Consolidated shipping with tracking', 'Short-term free warehousing'],
    deliverable: 'A single consolidated parcel with a packing list, sample photos on arrival, and tracking to your office or 3PL.',
    icon: 'package',
    image: 'open cardboard box filled with product samples from multiple Chinese suppliers, packing list and shipping label on a Shenzhen warehouse bench',
    imageId: 'svc-samples-4c7f2a',
  },
];

export const processSteps = [
  {
    n: 1,
    title: 'Share your requirements',
    body: 'Tell us the product, target price, quantity, and any specifications. The more detail, the better the shortlist.',
    eta: 'Day 0',
  },
  {
    n: 2,
    title: 'We shortlist suppliers',
    body: 'Within 3–5 working days we send you 3–5 pre-vetted factory options with quotes, MOQs, and lead times.',
    eta: '3–5 working days',
  },
  {
    n: 3,
    title: 'Sample development',
    body: 'Approve the factory you prefer; we manage sampling, photos, and shipping of samples to your office.',
    eta: '7–15 days',
  },
  {
    n: 4,
    title: 'Factory audit (optional)',
    body: 'For new suppliers or large orders, we run an on-site audit and share a written report within 5 days.',
    eta: '5 working days',
  },
  {
    n: 5,
    title: 'Place the order',
    body: 'Sign a purchase order. We confirm the deposit, lead time, and inspection plan with the factory.',
    eta: 'Day T+0',
  },
  {
    n: 6,
    title: 'Production & inspection',
    body: 'Weekly production updates, plus pre-shipment inspection against your AQL standard before goods leave.',
    eta: '25–45 days',
  },
  {
    n: 7,
    title: 'Shipping & delivery',
    body: 'We arrange freight, prepare export documents, and track the cargo to your port or warehouse.',
    eta: '18–35 days transit',
  },
];

export const productCategories = [
  { id: 'consumer-electronics', name: 'Consumer Electronics', desc: 'Phone accessories, audio devices, smart home gadgets, cables, chargers.', icon: 'cpu', examples: 'TWS earbuds, smart watches, USB hubs, GaN chargers, Bluetooth speakers' },
  { id: 'home-kitchen', name: 'Home & Kitchen', desc: 'Cookware, tableware, small appliances, storage, organizers.', icon: 'chef-hat', examples: 'Stainless steel cookware sets, ceramic dinnerware, air fryers, glass storage' },
  { id: 'apparel-textiles', name: 'Apparel & Textiles', desc: 'Garments, fabrics, bags, footwear, fashion accessories.', icon: 'shirt', examples: 'T-shirts, hoodies, custom bags, sneakers, scarves' },
  { id: 'beauty-personal-care', name: 'Beauty & Personal Care', desc: 'Skincare, haircare, cosmetics, OEM/ODM packaging.', icon: 'sparkles', examples: 'Serum bottles, airless pumps, makeup brushes, private-label skincare' },
  { id: 'sports-outdoor', name: 'Sports & Outdoor', desc: 'Fitness gear, camping, cycling, water sports equipment.', icon: 'bike', examples: 'Yoga mats, resistance bands, camping tents, bicycle lights' },
  { id: 'tools-hardware', name: 'Tools & Hardware', desc: 'Hand tools, power tool accessories, fasteners, industrial parts.', icon: 'wrench', examples: 'Wrench sets, drill bit sets, hex keys, tool cabinets' },
  { id: 'toys-games', name: 'Toys & Games', desc: 'Educational toys, board games, plush, plastic toys with CE/EN71.', icon: 'puzzle', examples: 'Building blocks, plush toys, board games, STEM kits' },
  { id: 'furniture', name: 'Furniture & Home Décor', desc: 'Flat-pack furniture, lighting, wall décor, storage solutions.', icon: 'lamp', examples: 'RTA shelving, LED panel lights, wall art, modular sofas' },
  { id: 'packaging', name: 'Packaging & Print', desc: 'Custom boxes, paper bags, labels, blister packaging, inserts.', icon: 'package-2', examples: 'Mailer boxes, kraft paper bags, blister trays, custom inserts' },
  { id: 'industrial', name: 'Industrial & OEM Parts', desc: 'Custom machined parts, sheet metal, plastic injection, OEM assemblies.', icon: 'factory', examples: 'CNC machined parts, sheet metal brackets, injection molds, OEM assemblies' },
  { id: 'pet-supplies', name: 'Pet Supplies', desc: 'Pet toys, grooming tools, carriers, bowls, apparel.', icon: 'paw-print', examples: 'Dog toys, cat trees, grooming brushes, pet carriers' },
  { id: 'auto-moto', name: 'Auto & Motorcycle Parts', desc: 'Aftermarket parts, accessories, LED lighting, performance parts.', icon: 'car', examples: 'LED headlight bulbs, dash cams, phone mounts, motorcycle grips' },
];

export const problems = [
  {
    problem: 'You can\'t tell if the factory is real.',
    solution: 'We visit the factory in person, verify the business license, and send a structured audit report with photos and video.',
    icon: 'shield-alert',
  },
  {
    problem: 'You get quotes that look fine, but quality is a gamble.',
    solution: 'Pre-shipment inspection against your AQL standard, with a written pass/reject report before the goods leave China.',
    icon: 'scan-search',
  },
  {
    problem: 'Lead times keep slipping.',
    solution: 'Weekly production status updates with photo evidence at each milestone, plus escalation if your delivery date is at risk.',
    icon: 'calendar-clock',
  },
  {
    problem: 'You pay deposits and hear nothing.',
    solution: 'We act as your local eyes and ears — written status updates, photo evidence, and direct contact with the factory manager.',
    icon: 'message-square-warning',
  },
  {
    problem: 'Shipping paperwork is confusing.',
    solution: 'We prepare commercial invoices, packing lists, COO, and fumigation certificates, and arrange FCL/LCL/air/rail freight.',
    icon: 'file-text',
  },
  {
    problem: 'Samples from 5 suppliers = 5 courier fees.',
    solution: 'Send them all to our Shenzhen warehouse; we consolidate into one box and ship as one parcel to your office.',
    icon: 'boxes',
  },
];

export const trustPoints = [
  { title: 'Based in Shenzhen, in the factory clusters', body: 'Our team works inside the Guangdong industrial corridor, an hour from the factories you actually want to visit.', icon: 'map-pin' },
  { title: 'Bilingual project managers', body: 'Every account is handled by a dedicated project manager who writes and speaks fluent English and Mandarin.', icon: 'users' },
  { title: 'No kickbacks, no commissions from factories', body: 'We are paid by you, the buyer. We don\'t accept commissions, gifts, or kickbacks from suppliers.', icon: 'handshake' },
  { title: 'AQL-based inspections, written reports', body: 'Our inspectors use ISO 2859-1 sampling. Every inspection produces a photo report within 24 hours.', icon: 'clipboard-list' },
  { title: 'Transparent fees, no hidden mark-ups', body: 'You see the factory quote, our service fee, and the freight quote as separate line items. No hidden margins.', icon: 'receipt' },
  { title: '11+ years and 1,200+ shipments', body: 'We have handled more than 1,200 production orders for clients in 40+ countries since 2014.', icon: 'globe-2' },
];

export const caseStudies = [
  {
    id: 'led-strip-us',
    industry: 'LED Lighting — United States',
    client: 'US Amazon seller, FBA-focused',
    headline: 'Cut defective rate from 6.4% to 0.9% on a 12-container LED order',
    summary: 'A US-based Amazon seller had been receiving LED strip lights with a 6.4% defect rate from a single Alibaba supplier, leading to FBA removals and negative reviews. We re-sourced two additional factories, ran a DUPRO inspection at 30% completion, and a full PSI on each container. Defect rate dropped to 0.9% on the next 12-container run, and the client kept both suppliers in rotation.',
    metrics: [
      { label: 'Defect rate', value: '6.4% → 0.9%' },
      { label: 'Containers', value: '12 × 40HQ' },
      { label: 'Lead time', value: '32 days' },
    ],
    timeline: [
      'Day 1–5: requirements intake + shortlist of 3 audited LED factories',
      'Day 6–18: sample round + photometric & soldering inspection at lab',
      'Day 19–22: full factory audit (Guangdong) with 9-page report',
      'Day 23: PO placed, 30% deposit confirmed with manufacturer',
      'Day 24–55: production with weekly photo updates + DUPRO at 30%',
      'Day 56–60: 12 × 40HQ pre-shipment inspections, all passed',
      'Day 61–93: ocean freight Shenzhen → Los Angeles, door-to-door',
    ],
    image: 'modern LED strip lights on a production line in a clean Chinese electronics factory, quality control inspector checking brightness, industrial setting',
    imageId: 'case-led-7a1b3c',
  },
  {
    id: 'kitchenware-eu',
    industry: 'Kitchenware — Germany',
    client: 'German brand owner, retail distribution',
    headline: 'Replaced 2 unreliable suppliers with one audited factory for cookware sets',
    summary: 'A German housewares brand was managing 7 suppliers for a 12-piece cookware set, leading to inconsistent finishes and missed ship dates. We consolidated to one audited factory in Zhejiang, set up inline inspections at the casting and coating stages, and moved the entire range to a single 40HQ monthly run. The brand retired 6 of the 7 suppliers.',
    metrics: [
      { label: 'Suppliers', value: '7 → 1' },
      { label: 'OTIF', value: '94% → 99%' },
      { label: 'MOQ', value: '-35%' },
    ],
    timeline: [
      'Day 1–3: requirements intake for 12-piece cookware set',
      'Day 4–10: shortlist of 3 audited cookware factories in Zhejiang',
      'Day 11–24: tooling review, 3 sample rounds, coating adhesion test',
      'Day 25–30: factory audit covering casting + coating + packaging',
      'Day 31: PO placed; first 40HQ booked on monthly recurring schedule',
      'Day 32–70: production with inline inspection at casting and coating',
      'Day 71–80: PSI per container, container loading supervision',
      'Day 81–115: sea freight Ningbo → Hamburg, monthly run rate',
    ],
    image: 'non-stick cookware set on a stainless steel inspection table, Chinese quality inspector measuring coating thickness with a gauge',
    imageId: 'case-kitchenware-9d4e2f',
  },
  {
    id: 'beauty-uk',
    industry: 'Beauty & Skincare — United Kingdom',
    client: 'UK skincare startup, own brand',
    headline: 'Took a private-label skincare line from 0 to 8 SKUs in 9 months',
    summary: 'A UK startup needed a full private-label skincare line with custom airless bottles, tubes, and cartons, but had no China experience. We sourced 4 OEM factories, organized sample rounds, negotiated tooling, and managed 4 production cycles. The brand launched with 8 SKUs in 9 months, all certified with CPSR and compliant with UK/EU regulations.',
    metrics: [
      { label: 'SKUs launched', value: '8' },
      { label: 'Time to market', value: '9 months' },
      { label: 'Certifications', value: 'CPSR / UKCA' },
    ],
    timeline: [
      'Month 1: concept brief, target cost, packaging references aligned',
      'Month 2: shortlist 4 OEM factories, sample formulas (serum, cream, cleanser)',
      'Month 3: tooling for 3 bottle molds, carton artwork approval',
      'Month 4: factory audit, stability test plan, regulatory scope defined',
      'Month 5–6: first production runs (4 SKUs), stability samples pulled',
      'Month 7–8: full 8-SKU range in production, CPSR filed with UK safety assessor',
      'Month 9: launch — first container lands at UK 3PL, retail-ready',
    ],
    image: 'skincare bottles and tubes lined up on a white inspection table, factory worker checking label alignment in a Chinese cosmetics facility',
    imageId: 'case-beauty-3c8b1a',
  },
  {
    id: 'tools-aus',
    industry: 'Hand Tools — Australia',
    client: 'Australian importer, hardware distribution',
    headline: 'Audited 3 new factories, consolidated 18 hand tools to one supplier',
    summary: 'An Australian hardware importer was sourcing hand tools from 6 different factories, each with its own quality issues. We audited 3 candidate factories, ran trial orders, and consolidated 18 SKUs to a single supplier in Jiangsu with a dedicated production line. Tool reject rate fell below 0.4% in the first year of consolidated production.',
    metrics: [
      { label: 'SKUs consolidated', value: '18' },
      { label: 'Rejection rate', value: '< 0.4%' },
      { label: 'Annual savings', value: 'AUD 90,000' },
    ],
    timeline: [
      'Day 1–2: brief, 18 SKU list with target price ladder',
      'Day 3–10: shortlist 3 audited hand-tool factories in Jiangsu',
      'Day 11–25: sample round on 18 SKUs, drop-test on pliers and wrenches',
      'Day 26–30: trial orders split across the 3 factories',
      'Day 31–45: production audits, decision to consolidate to 1 supplier',
      'Day 46+: dedicated production line reserved for the Australian client',
      'Year 1: 9 × 40HQ consolidated, rejection rate under 0.4%',
    ],
    image: 'hand tools such as wrenches and pliers arranged on a steel inspection bench in a Chinese hardware factory, with safety glasses and a checklist',
    imageId: 'case-tools-5f7a9d',
  },
];

export const faqs = [
  {
    q: 'Where are you based, and do you visit factories yourself?',
    a: 'We are based in Shenzhen, Guangdong, with field auditors across Guangdong, Zhejiang, Jiangsu, Fujian, and Shandong. Every factory audit and inspection is carried out by our own employees — not outsourced agents. We do not work with trading companies pretending to be factories.',
  },
  {
    q: 'What does it cost to use SSourcing?',
    a: 'Sourcing and shortlisting is free for most projects — we are paid by the supplier introduction fee, which is fully disclosed to you. Audits, inspections, and production follow-up are quoted per visit. There are no hidden margins on freight: you see the carrier quote and our service fee as separate line items.',
  },
  {
    q: 'How do you make sure a factory is legitimate?',
    a: 'Our audits include business license verification (you can cross-check with the Chinese State Administration for Market Regulation), production line walk-through, workforce count, equipment list, quality system review, and a 10-minute video of the facility. We also check export history and any litigation records.',
  },
  {
    q: 'What inspection standards do you use?',
    a: 'We follow ISO 2859-1 (AQL) sampling. Most clients use AQL 2.5 for general consumer goods and AQL 1.5 for higher-end or safety-critical products. The sampling level (I, II, or III) and AQL are agreed with you in advance and stated in the inspection report.',
  },
  {
    q: 'Can you handle small orders or only large ones?',
    a: 'We work with both. Many of our clients start with samples and 100–500 unit trial orders before scaling to containers. For sample-only projects we charge a small handling fee; production orders follow our standard service fee structure.',
  },
  {
    q: 'Do you take commissions from factories?',
    a: 'No. We are paid only by you, the buyer. We do not accept referral fees, kickbacks, gifts, or trips from suppliers. This policy is in our service agreement and is the reason our clients trust our supplier recommendations.',
  },
  {
    q: 'Which freight options do you support?',
    a: 'Sea freight (FCL and LCL), air freight, express courier (DHL, FedEx, UPS), and China-Europe rail. We compare at least 3 carriers per shipment and recommend the best balance of cost and lead time for your order.',
  },
  {
    q: 'How long does a typical sourcing project take?',
    a: 'From requirements to supplier shortlist: 3–5 working days. Sampling: 7–15 days depending on the product. Production: typically 25–45 days after deposit. Pre-shipment inspection: 1 day on site. Sea freight to the US/EU: 18–35 days depending on port pair.',
  },
  {
    q: 'What if a factory refuses an inspection?',
    a: 'A factory that refuses a third-party inspection is a red flag. We would either negotiate access (most factories comply once the buyer insists) or recommend replacing the supplier. We document refusals in the audit report and your account manager will discuss next steps with you.',
  },
  {
    q: 'How is the price I pay to the factory determined?',
    a: 'We negotiate pricing in writing with the factory, then send you the factory quote and our service fee as separate items. You pay the factory directly (or through our China escrow account). We never take a margin on top of the factory price.',
  },
];

export const blogPosts = [
  {
    id: 'factory-audit-checklist',
    category: 'Supplier Verification',
    title: 'A Practical Factory Audit Checklist for China Sourcing',
    excerpt: 'A 47-point checklist our auditors use on every visit, grouped into licensing, production capacity, quality systems, and social compliance.',
    date: 'May 28, 2026',
    readTime: '8 min read',
    image: 'quality control inspector with a checklist walking through a Chinese factory production floor, hard hat and clipboard',
    imageId: 'blog-audit-2b8c1d',
  },
  {
    id: 'aql-explained',
    category: 'Quality Control',
    title: 'AQL 1.5 vs 2.5 vs 4.0: How to Choose the Right Sampling Level',
    excerpt: 'Most buyers accept AQL 2.5 by default, but the right number depends on your product risk, defect cost, and customer expectations.',
    date: 'May 12, 2026',
    readTime: '6 min read',
    image: 'statistical quality control sampling chart on a clipboard, with sample products on a table',
    imageId: 'blog-aql-4e9f0a',
  },
  {
    id: 'incoterms-2026',
    category: 'Shipping & Logistics',
    title: 'Incoterms 2026 in Practice: EXW, FOB, CIF, and DDP for China Buyers',
    excerpt: 'A side-by-side comparison of who pays for what — from factory pickup to your warehouse — and when to use each term.',
    date: 'Apr 30, 2026',
    readTime: '10 min read',
    image: 'stacked shipping containers at a Chinese port, with cargo crane in the background, daylight',
    imageId: 'blog-incoterms-7c2d3e',
  },
  {
    id: 'trading-company-vs-factory',
    category: 'Supplier Verification',
    title: 'Trading Company vs Factory: How to Tell Who You Are Really Talking To',
    excerpt: 'Six questions to ask, three documents to request, and one test that reveals almost every trading-company-on-Alibaba situation.',
    date: 'Apr 18, 2026',
    readTime: '7 min read',
    image: 'business card and product samples on a desk, with a Chinese business license in the background',
    imageId: 'blog-trading-8a1b4c',
  },
  {
    id: 'sample-consolidation-savings',
    category: 'Cost Optimization',
    title: 'How Sample Consolidation Can Cut Your Sampling Costs by 60%',
    excerpt: 'When you are evaluating 5 suppliers, you can pay 5 international courier fees — or you can consolidate them into one box.',
    date: 'Apr 04, 2026',
    readTime: '5 min read',
    image: 'open cardboard box filled with product samples from multiple suppliers, packing tape and shipping label on a Shenzhen warehouse bench',
    imageId: 'blog-samples-3f7a8b',
  },
  {
    id: 'pre-shipment-inspection-guide',
    category: 'Quality Control',
    title: 'When to Book a Pre-Shipment Inspection (and When to Skip It)',
    excerpt: 'PSI is not a one-size-fits-all decision. A practical guide to deciding whether the inspection fee is worth it for your order.',
    date: 'Mar 22, 2026',
    readTime: '6 min read',
    image: 'inspector measuring a product with calipers at a Chinese factory loading dock, with stacked cartons in the background',
    imageId: 'blog-psi-5d6e9f',
  },
];

export const stats = [
  { value: '11+', label: 'Years in business' },
  { value: '1,200+', label: 'Production orders handled' },
  { value: '40+', label: 'Countries served' },
  { value: '98%', label: 'On-time inspection report rate' },
];
