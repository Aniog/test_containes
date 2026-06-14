// Centralized data for services, process steps, products, FAQs, case studies, and blog.
// Keeps copy out of components and makes future i18n easier.

export const SERVICES = [
  {
    id: 'sourcing',
    title: 'Supplier Sourcing',
    summary:
      'We identify 3–5 vetted factories for your product from our pre-screened database of 1,200+ Chinese manufacturers, then shortlist the best matches.',
    bullets: [
      'Search of pre-vetted manufacturers by category and capability',
      'Independent business-license and export-record verification',
      'Quote comparison on the same specification',
      'Initial sample coordination with the most suitable 2–3 suppliers',
    ],
  },
  {
    id: 'verification',
    title: 'Factory Audit & Verification',
    summary:
      'On-site factory audits against a 70-point checklist covering production capacity, quality systems, workforce, and compliance documentation.',
    bullets: [
      'On-site or remote video audit report within 5 business days',
      'Verification of business license, export history, and certifications',
      'Assessment of production lines, machinery, and QC equipment',
      'Workforce, working hours, and social-compliance observations',
    ],
  },
  {
    id: 'qc',
    title: 'Quality Inspection & QC',
    summary:
      'Pre-shipment, during-production (DUPRO), and initial-production inspections by trained QC engineers, following ISO 2859-1 AQL standards.',
    bullets: [
      'AQL-based sampling and on-site inspection report with photos',
      'DUPRO (during production) inspections to catch defects early',
      'Pre-shipment inspection covering workmanship, function, packaging',
      'Container loading supervision with photo record',
    ],
  },
  {
    id: 'production',
    title: 'Production Follow-up',
    summary:
      'Weekly progress updates with photos, milestone tracking, and on-the-ground escalation when issues appear between order and shipment.',
    bullets: [
      'Weekly production status report with photos and percentages',
      'Material and component arrival checks',
      'Inline checks for critical tolerance steps',
      'Escalation path for delays, defects, or scope changes',
    ],
  },
  {
    id: 'sampling',
    title: 'Sampling & Prototyping',
    summary:
      'Sample consolidation across multiple suppliers, free reworks on the first round of sampling, and shipping samples to your door for evaluation.',
    bullets: [
      'Sample requests with clear specifications and timing',
      'Free rework on the first round of samples',
      'Consolidated sample shipping to save on courier costs',
      'Sample photos and measurement reports on request',
    ],
  },
  {
    id: 'shipping',
    title: 'Shipping & Logistics',
    summary:
      'We coordinate sea, air, and rail freight, prepare export documentation, and arrange door-to-door delivery through our logistics partners.',
    bullets: [
      'FOB, EXW, FOB, DDP, and CIF quotations from multiple forwarders',
      'Customs documentation, commercial invoice, packing list, COO',
      'Container booking and consolidation across suppliers',
      'Door-to-door tracking through to final destination',
    ],
  },
  {
    id: 'oem',
    title: 'OEM / Private Label',
    summary:
      'For buyers who want their own brand on the product, we coordinate mold development, custom packaging, and labeling in line with retailer requirements.',
    bullets: [
      'Mold and tooling development with costed quotations',
      'Custom packaging, retail boxes, and barcoded labels',
      'Compliance documentation (CE, FCC, FDA, REACH, Prop 65)',
      'Drop-ship and Amazon FBA prep, including FNSKU labels',
    ],
  },
  {
    id: 'documentation',
    title: 'Trade Documentation',
    summary:
      'We prepare and review the paperwork needed to clear customs in your country without delays: commercial invoice, packing list, COO, and certificates.',
    bullets: [
      'Commercial invoice and packing list review',
      'Certificate of Origin (C/O) and Form A / RCEP applications',
      'Product testing coordination (CE, FCC, FDA, MSDS)',
      'Insurance and inspection certificates on request',
    ],
  },
]

export const PROCESS_STEPS = [
  {
    n: '01',
    title: 'Send your inquiry',
    desc: 'Tell us the product, target quantity, and any specifications. We reply within one business day with a sourcing plan and a transparent fee structure.',
  },
  {
    n: '02',
    title: 'We shortlist factories',
    desc: 'We identify 3–5 verified manufacturers that match your category, quantity, and certification needs, with a side-by-side comparison.',
  },
  {
    n: '03',
    title: 'Samples and quotes',
    desc: 'You receive detailed quotes, sample photos, and (on request) physical samples consolidated and shipped to your door for evaluation.',
  },
  {
    n: '04',
    title: 'Order and deposit',
    desc: 'Once you approve a supplier, we review the proforma invoice, confirm payment terms, and arrange the production deposit.',
  },
  {
    n: '05',
    title: 'Production and QC',
    desc: 'We follow production with weekly photo updates, DUPRO and pre-shipment inspections, and full AQL-based reports.',
  },
  {
    n: '06',
    title: 'Shipping and delivery',
    desc: 'We coordinate container loading, export documentation, freight, and customs, and we keep you updated until the goods arrive.',
  },
]

export const PRODUCT_CATEGORIES = [
  {
    id: 'consumer-electronics',
    title: 'Consumer Electronics',
    desc: 'Phone and laptop accessories, smart home devices, audio gear, and small appliances. Suppliers with CE, FCC, RoHS documentation.',
    examples: ['USB-C hubs', 'Bluetooth speakers', 'Robot vacuums', 'Smart plugs'],
  },
  {
    id: 'apparel',
    title: 'Apparel & Textiles',
    desc: 'Custom-cut garments, knit and woven fabrics, OEM activewear, and bags. Factories with social-compliance audits (BSCI, Sedex).',
    examples: ['T-shirts', 'Yoga wear', 'Backpacks', 'Workwear'],
  },
  {
    id: 'home-goods',
    title: 'Home & Kitchen',
    desc: 'Cookware, storage, decor, and small furniture. We verify food-safe materials (LFGB, FDA) where applicable.',
    examples: ['Ceramic dinnerware', 'Glass storage', 'Bamboo boards', 'Linen bedding'],
  },
  {
    id: 'beauty',
    title: 'Beauty & Personal Care',
    desc: 'OEM skincare, haircare, and cosmetics. We verify ISO 22716 / GMP factories, INCI listings, and stability testing.',
    examples: ['Serums', 'Shampoo', 'Lip balms', 'Makeup brushes'],
  },
  {
    id: 'packaging',
    title: 'Packaging & Print',
    desc: 'Custom retail boxes, mailer bags, paper bags, and eco packaging. We coordinate die-lines, plate-making, and Pantone matching.',
    examples: ['Folding cartons', 'Kraft mailers', 'Cosmetic tubes', 'Hang tags'],
  },
  {
    id: 'industrial',
    title: 'Industrial Parts',
    desc: 'CNC machining, injection molding, sheet metal, and casting. We review technical drawings, tolerances, and material certificates.',
    examples: ['Aluminum housings', 'Steel brackets', 'Plastic enclosures', 'Custom fasteners'],
  },
  {
    id: 'sports-outdoor',
    title: 'Sports & Outdoor',
    desc: 'Fitness gear, camping equipment, and outdoor apparel. Suppliers experienced with REACH, CPSIA, and Prop 65.',
    examples: ['Resistance bands', 'Yoga mats', 'Tents', 'Hydration bottles'],
  },
  {
    id: 'auto-parts',
    title: 'Auto Parts & Accessories',
    desc: 'Aftermarket parts, accessories, and tools. We confirm IATF 16949 where required and test samples before shipment.',
    examples: ['LED lights', 'Dash cams', 'Floor mats', 'Diagnostic tools'],
  },
]

export const PROBLEMS = [
  {
    title: 'You are tired of trading companies posing as factories',
    desc: 'Many "manufacturers" on Alibaba are resellers. We trace the actual production line and verify who really makes the product.',
  },
  {
    title: 'You keep finding defects only after the goods arrive',
    desc: 'We run AQL-based inspections during and before shipment, with photo evidence and a clear accept/reject result.',
  },
  {
    title: 'You cannot get honest answers on lead times',
    desc: 'Weekly photo reports, milestone tracking, and escalation when production slips — so you can plan your inventory.',
  },
  {
    title: 'You do not know if your supplier is financially stable',
    desc: 'We pull business records, export history, and litigation checks before recommending a factory.',
  },
  {
    title: 'Customs paperwork keeps causing delays at the destination',
    desc: 'We prepare and review HS codes, COO, certificates, and commercial invoices, and we work with forwarders experienced with your country.',
  },
  {
    title: 'You are paying too much for freight',
    desc: 'We compare quotations from at least three freight forwarders and consolidate containers across suppliers to lower your cost per CBM.',
  },
]

export const TRUST_POINTS = [
  {
    stat: '1,200+',
    label: 'Pre-screened factories',
    desc: 'Across 8 main product categories, with on-site audits updated every 24 months.',
  },
  {
    stat: '12 yrs',
    label: 'Combined QC experience',
    desc: 'Our QC team has inspected more than 4,500 production runs in the last 5 years.',
  },
  {
    stat: '24 h',
    label: 'Reply on every inquiry',
    desc: 'A sourcing manager — not a chatbot — replies to every qualified inquiry within one business day.',
  },
  {
    stat: '3 quotes',
    label: 'Per sourcing request',
    desc: 'You receive at least three comparable quotes from independent manufacturers, never from a single source.',
  },
]

export const FAQS = [
  {
    q: 'What does it cost to use SSourcing China?',
    a: 'Sourcing fees depend on the scope of the project: a one-time supplier search, ongoing production follow-up, or full package. We share a transparent quote after the first call. Our fees are not a percentage of your order value, and we do not take commissions from factories — so the price we negotiate is the price you pay.',
  },
  {
    q: 'Do you act as the importer of record?',
    a: 'No. We act as your local agent in China. You are the buyer of record; we verify suppliers, manage production, and coordinate shipping. We can also introduce DDP options through our logistics partners if you prefer a delivered price.',
  },
  {
    q: 'Can you guarantee a supplier is legitimate?',
    a: 'No one can offer a 100% guarantee. What we do is run a structured verification (business license, export history, factory visit or video audit, and reference checks) and give you a written report. If something is off, we tell you before you commit.',
  },
  {
    q: 'What is the minimum order quantity (MOQ)?',
    a: 'It depends on the product. Most of the categories we source have MOQs of 500–1,000 units, but for simple customization we have worked with orders of 200 units. We will give you an honest read on MOQs when we send quotes.',
  },
  {
    q: 'How long does sampling take?',
    a: 'For most products, custom samples take 7–15 days plus 3–7 days for courier shipping to your country. For complex tooling (plastic molds, die-casting), sampling takes 30–45 days.',
  },
  {
    q: 'Which incoterms do you support?',
    a: 'EXW, FOB, CIF, DDP, and DAP. We can quote on any of these and explain the difference for your specific shipment. The majority of our clients use FOB for sea freight and DDP for first-time orders.',
  },
  {
    q: 'Can you handle small businesses or first-time importers?',
    a: 'Yes. About 40% of our clients are first-time importers. We explain the process in plain English, prepare the paperwork, and walk you through customs requirements in your country.',
  },
  {
    q: 'What if I already have a China supplier but want a second opinion?',
    a: 'That is common. We can run a factory audit on your existing supplier, review their quote against alternatives, or do an independent QC inspection. You can use our services without switching suppliers.',
  },
]

export const CASE_STUDIES = [
  {
    id: 'us-home-goods-defect',
    country: 'United States',
    category: 'Home goods',
    title: 'Reducing a 7.8% defect rate to 1.4% for a US home goods importer',
    summary:
      'A US importer of ceramic dinnerware was receiving shipments with a defect rate near 8%. We audited three factories, recommended a switch, and implemented inline checks at the critical kiln-firing step.',
    metrics: [
      { label: 'Defect rate (before)', value: '7.8%' },
      { label: 'Defect rate (after 3 runs)', value: '1.4%' },
      { label: 'Inspections performed', value: '7' },
      { label: 'Time on project', value: '5 months' },
    ],
    body: [
      'The client had been working with the same supplier for three years and was seeing a steady increase in chipped and cracked dinnerware in retail-ready packaging. We started with a four-hour on-site audit at the existing factory and identified two root causes: insufficient cooling time between kiln cycles, and inconsistent hand-glazing before second firing.',
      'We proposed two alternative factories with automated glazing lines and a strict pre-kiln drying room. After sampling, the client approved one. We placed a DUPRO inspector on the floor for the first three production runs to confirm the new process, and we ran a pre-shipment AQL inspection on every container.',
      'Six months in, the defect rate on retail-ready units sits at 1.4% (AQL 2.5, General Level II). The client now ships quarterly and uses SSourcing China for ongoing QC and consolidation of supplementary SKUs.',
    ],
  },
  {
    id: 'uk-eco-packaging',
    country: 'United Kingdom',
    category: 'Eco packaging',
    title: 'Onboarding an OEM manufacturer for FSC-certified mailer bags in 11 weeks',
    summary:
      'A UK retail brand needed a private-label kraft mailer bag with custom printing and FSC certification. The brand had contacted 12 factories on its own without success. We sourced, sampled, and onboarded a working supplier in 11 weeks.',
    metrics: [
      { label: 'Factories contacted', value: '6' },
      { label: 'Sampling rounds', value: '3' },
      { label: 'Onboarded to first PO', value: '11 weeks' },
      { label: 'First PO volume', value: '120,000 units' },
    ],
    body: [
      'The client needed an FSC-certified kraft mailer with custom Pantone printing and a self-adhesive strip. The initial 12 factories either did not hold FSC chain-of-custody certification or could not meet the print quality on uncoated kraft.',
      'We narrowed the list to 6 factories, requested samples from 3, and ran a side-by-side print and seal-strength test in our Shanghai office. The selected factory held FSC C-coc, used water-based inks, and had a 12-day production lead time at 50,000 units.',
      'The first purchase order of 120,000 units was produced on time, passed AQL inspection, and arrived in Felixstowe on the agreed date. The client has since placed a second PO of 200,000 units and is now using SSourcing China for two additional SKUs (jersey bags and tissue paper).',
    ],
  },
  {
    id: 'au-electronics',
    country: 'Australia',
    category: 'Consumer electronics',
    title: 'Helping an Australian tech startup source custom USB-C hubs',
    summary:
      'An Australian consumer electronics startup needed a USB-C hub with a custom aluminum shell and a 9-month exclusivity agreement. We sourced the factory, negotiated tooling, and oversaw tooling samples to first production.',
    metrics: [
      { label: 'Tooling investment', value: 'USD 28,400' },
      { label: 'Tooling samples', value: '3 rounds' },
      { label: 'Time to first production', value: '5.5 months' },
      { label: 'First PO units', value: '5,000' },
    ],
    body: [
      'The startup had a working prototype but no manufacturing partner. We identified two candidate factories, one in Dongguan and one in Suzhou, both with anodized-aluminum capability. The Suzhou factory had lower tooling cost and better PD engineers.',
      'We negotiated a 9-month exclusivity clause, signed an NDA, and managed the mold flow, sample approval, and CE / FCC pre-compliance. Three tooling rounds were needed to finalize the aluminum extrusion tolerance; we tracked each round with photos and reports.',
      'The first 5,000-unit production run was completed in 5.5 months from the initial agreement, passed AQL inspection, and was shipped to Sydney with a DDP quote that the client could budget against. The hub is now sold in three retailers in Australia and New Zealand.',
    ],
  },
  {
    id: 'de-beauty',
    country: 'Germany',
    category: 'Beauty & personal care',
    title: 'Sourcing GMP-certified skincare manufacturer for a German indie brand',
    summary:
      'A German indie skincare brand needed a GMP-certified manufacturer for a 4-SKU serum line, including regulatory documentation for the EU market.',
    metrics: [
      { label: 'SKUs in first launch', value: '4' },
      { label: 'Formulation rounds', value: '5' },
      { label: 'Stability testing', value: '12 weeks' },
      { label: 'Time to launch', value: '7 months' },
    ],
    body: [
      'The client needed a contract manufacturer with ISO 22716 certification, full INCI disclosure, and a 12-week stability testing program. We shortlisted 4 factories, requested base formulation samples, and arranged a virtual factory tour with the founder.',
      'We coordinated 5 rounds of formulation refinement to hit the viscosity and fragrance profile the brand wanted, ran accelerated and real-time stability tests, and prepared the PIF (Product Information File) for EU submission.',
      'The 4-SKU launch shipped in 7 months from the first call, with full GMP documentation. The brand has since added 6 SKUs and runs quarterly production with us as the local agent.',
    ],
  },
]

export const BLOG_POSTS = [
  {
    id: 'verify-china-supplier-2026',
    title: 'How to verify a China supplier in 2026: a practical checklist',
    excerpt:
      'A 12-point checklist for buyers on how to check a Chinese manufacturer before sending a deposit: business license, export history, factory visit, sample evaluation, and reference checks.',
    date: '2026-05-12',
    readingTime: '8 min',
    category: 'Supplier Verification',
  },
  {
    id: 'aql-inspection-standards',
    title: 'AQL inspection standards explained for importers',
    excerpt:
      'What AQL 2.5 / 1.5 / 4.0 actually means, how sampling works under ISO 2859-1, and how to choose the right level for your product category.',
    date: '2026-04-29',
    readingTime: '10 min',
    category: 'Quality Control',
  },
  {
    id: 'fob-vs-exw-vs-ddp',
    title: 'FOB vs EXW vs DDP: choosing the right incoterm for your first order',
    excerpt:
      'A side-by-side comparison of the four incoterms most importers use in 2026, with worked examples for sea and air freight.',
    date: '2026-04-15',
    readingTime: '7 min',
    category: 'Shipping & Logistics',
  },
  {
    id: 'common-defects-ceramics',
    title: '7 common quality defects in ceramic dinnerware (and how to catch them)',
    excerpt:
      'Crazing, chipping, glaze pooling, kiln marks — and the inspection steps that catch them before they reach your container.',
    date: '2026-03-30',
    readingTime: '6 min',
    category: 'Quality Control',
  },
  {
    id: 'private-label-packaging',
    title: 'A beginner\'s guide to private label packaging from China',
    excerpt:
      'Mailer bags, folding cartons, retail boxes, and tubes — the materials, the MOQs, the lead times, and what to ask the factory before sampling.',
    date: '2026-03-12',
    readingTime: '9 min',
    category: 'OEM / Private Label',
  },
  {
    id: 'reduce-freight-cost-2026',
    title: '5 ways to lower your freight cost from China in 2026',
    excerpt:
      'Container consolidation, Incoterm selection, port alternatives, and three other levers that can reduce your landed cost per unit.',
    date: '2026-02-28',
    readingTime: '7 min',
    category: 'Shipping & Logistics',
  },
  {
    id: 'bsci-sedex-explained',
    title: 'BSCI, Sedex, SA8000: which social compliance audit do you need?',
    excerpt:
      'For buyers selling to European retailers, the answer is usually BSCI or Sedex. Here is how they differ, what they cost, and what buyers actually ask for.',
    date: '2026-02-12',
    readingTime: '8 min',
    category: 'Compliance',
  },
  {
    id: 'first-time-importer-checklist',
    title: 'First-time importer checklist: 10 things to do before you wire a deposit',
    excerpt:
      'A non-exhaustive, non-scary checklist for first-time importers: paperwork, payment terms, sample evaluation, and the questions to ask.',
    date: '2026-01-30',
    readingTime: '9 min',
    category: 'For First-Time Importers',
  },
]
