export const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/how-it-works', label: 'How It Works' },
  { to: '/products', label: 'Products We Source' },
  { to: '/case-studies', label: 'Case Studies' },
  { to: '/blog', label: 'Blog' },
  { to: '/contact', label: 'Contact' },
]

export const SERVICES = [
  {
    slug: 'supplier-sourcing',
    title: 'Supplier Sourcing & Shortlisting',
    short: 'We identify, screen, and shortlist factories that match your product, volume, and certification requirements.',
    detail:
      'Based on your product specification, target price, and order volume, we search our vetted network and open marketplaces, verify business licenses, and deliver a shortlist of 3–5 qualified factories with comparable quotations.',
    points: [
      'Supplier search across manufacturing clusters',
      'Business license and export record checks',
      'Comparable quotations with cost breakdowns',
      'Sample coordination and evaluation',
    ],
    icon: 'Search',
  },
  {
    slug: 'factory-verification',
    title: 'Factory Verification & Audits',
    short: 'On-site audits that confirm the factory is real, capable, and compliant before you send any deposit.',
    detail:
      'Our auditors visit the facility in person to verify legal registration, production capacity, machinery, workforce, quality management systems, and social compliance. You receive a photo-documented audit report within 48 hours of the visit.',
    points: [
      'On-site factory audits with photo evidence',
      'ISO 9001, BSCI, Sedex verification',
      'Production capacity and equipment assessment',
      'Management and export experience review',
    ],
    icon: 'Building2',
  },
  {
    slug: 'quality-inspection',
    title: 'Quality Control & Inspection',
    short: 'Pre-production, during-production, and pre-shipment inspections to AQL standards, with clear reports.',
    detail:
      'We inspect at the stages that matter: first-article checks before mass production, in-line inspections while goods are being made, and final pre-shipment inspections using AQL sampling. Defects are documented with photos and measurements, and we negotiate rework with the factory on your behalf.',
    points: [
      'Pre-production and first-article checks',
      'During-production (DUPRO) inspections',
      'Pre-shipment inspection to AQL 2.5/4.0',
      'Container loading supervision',
    ],
    icon: 'ClipboardCheck',
  },
  {
    slug: 'production-follow-up',
    title: 'Production Follow-up',
    short: 'Weekly reporting from the factory floor so you always know what is happening with your order.',
    detail:
      'Once production starts, we track milestones against the agreed schedule, visit the factory at critical points, and send you weekly written updates with photos. If delays or quality risks appear, we flag them early and propose corrective actions.',
    points: [
      'Weekly written production reports',
      'Milestone and lead-time tracking',
      'Early warning on delays and material issues',
      'On-site follow-up at critical stages',
    ],
    icon: 'Factory',
  },
  {
    slug: 'shipping-logistics',
    title: 'Shipping & Logistics Coordination',
    short: 'From factory gate to your warehouse: freight booking, consolidation, customs documents, and tracking.',
    detail:
      'We coordinate with your forwarder or ours to book sea, air, or rail freight, consolidate goods from multiple suppliers, prepare export documentation, and supervise container loading. You get one point of contact until the goods arrive.',
    points: [
      'Sea, air, and rail freight coordination',
      'Multi-supplier cargo consolidation',
      'Export documents and customs support',
      'Container loading checks and tracking',
    ],
    icon: 'Ship',
  },
  {
    slug: 'product-development',
    title: 'Product Development & Customization',
    short: 'OEM/ODM support: specification translation, prototyping, packaging, and tooling follow-up.',
    detail:
      'For custom products, we help translate your requirements into factory-ready specifications, coordinate prototypes and revisions, manage packaging artwork with suppliers, and follow tooling and mold production until sign-off.',
    points: [
      'Specification and tech-pack preparation',
      'Prototype and sample revision rounds',
      'Packaging and labeling coordination',
      'Tooling and mold production follow-up',
    ],
    icon: 'Package',
  },
]

export const PROCESS_STEPS = [
  {
    step: 1,
    title: 'Inquiry & Requirements',
    short: 'You send us your product specifications, target price, quantities, and any certification needs.',
    detail:
      'Everything starts with your product. Send us drawings, photos, links, or samples — whatever you have. We clarify materials, dimensions, tolerances, packaging, compliance requirements, and target pricing so we search for the right kind of factory, not just any factory.',
    duration: '1–2 working days',
  },
  {
    step: 2,
    title: 'Supplier Search & Shortlist',
    short: 'We screen the market and present 3–5 qualified suppliers with quotations you can compare side by side.',
    detail:
      'We tap our audited supplier network and the open market, filter out trading companies posing as factories where direct manufacturing matters, check business licenses and export history, and collect quotations. You receive a structured shortlist comparing price, MOQ, lead time, capacity, and audit status.',
    duration: '5–10 working days',
  },
  {
    step: 3,
    title: 'Sampling & Factory Verification',
    short: 'We order samples, audit the finalist factories on-site, and help you negotiate final terms.',
    detail:
      'Samples are coordinated, checked against your specification, and shipped to you for approval. In parallel, our auditors visit the finalist factories to verify facilities, capacity, and quality systems. We then support price and payment-term negotiation before you commit to a deposit.',
    duration: '1–3 weeks',
  },
  {
    step: 4,
    title: 'Production & Quality Control',
    short: 'We follow production with weekly reports and inspect goods at agreed checkpoints.',
    detail:
      'Your order is tracked from material purchase to packing. We report progress weekly with photos, inspect first articles, run during-production and pre-shipment inspections to AQL standards, and push the factory to correct issues before goods leave the line.',
    duration: 'Production lead time',
  },
  {
    step: 5,
    title: 'Shipping & Ongoing Support',
    short: 'We coordinate freight and documents, supervise loading, and stay involved until goods arrive.',
    detail:
      'We book or coordinate freight, consolidate shipments from multiple suppliers, prepare export documents, and supervise container loading. After arrival we help you resolve any claims with the factory and plan reorders or new products.',
    duration: 'Until delivery',
  },
]

export const PRODUCT_CATEGORIES = [
  {
    id: 'consumer-electronics',
    name: 'Consumer Electronics & Accessories',
    desc: 'Bluetooth audio, chargers and power banks, smart home devices, wearables, cables and small gadgets.',
    examples: ['TWS earbuds', 'GaN chargers', 'Smart plugs', 'Webcams'],
  },
  {
    id: 'home-kitchen',
    name: 'Home & Kitchen Products',
    desc: 'Kitchenware, storage and organization, small home appliances, cookware, and household textiles.',
    examples: ['Stainless steel bottles', 'Food storage', 'Air fryers', 'Bedding sets'],
  },
  {
    id: 'furniture-decor',
    name: 'Furniture & Home Decor',
    desc: 'Indoor and outdoor furniture, lighting, wall decor, mirrors, and seasonal decoration programs.',
    examples: ['Rattan chairs', 'LED floor lamps', 'Framed wall art', 'Patio sets'],
  },
  {
    id: 'apparel-textiles',
    name: 'Apparel & Textiles',
    desc: 'Knit and woven garments, activewear, workwear, socks, and private-label cut-and-sew programs.',
    examples: ['Hoodies', 'Yoga wear', 'Denim', 'Uniforms'],
  },
  {
    id: 'bags-luggage',
    name: 'Bags, Luggage & Accessories',
    desc: 'Backpacks, duffel bags, suitcases, tote bags, wallets, and travel accessories in OEM/ODM programs.',
    examples: ['Laptop backpacks', 'Hard-shell luggage', 'Canvas totes', 'Travel organizers'],
  },
  {
    id: 'beauty-personal-care',
    name: 'Beauty & Personal Care',
    desc: 'Skincare and cosmetics packaging, beauty tools, hair accessories, and personal care devices.',
    examples: ['Jade rollers', 'Makeup brushes', 'Hair dryers', 'Cosmetic jars'],
  },
  {
    id: 'toys-games',
    name: 'Toys & Games',
    desc: 'Educational toys, plush, board games, outdoor toys, and licensed product manufacturing support.',
    examples: ['STEM kits', 'Plush toys', 'Wooden puzzles', 'Inflatable toys'],
  },
  {
    id: 'fitness-outdoor',
    name: 'Fitness & Outdoor Equipment',
    desc: 'Home gym equipment, camping gear, cycling accessories, and outdoor leisure products.',
    examples: ['Resistance bands', 'Camping chairs', 'Bike lights', 'Cooler boxes'],
  },
  {
    id: 'pet-supplies',
    name: 'Pet Supplies',
    desc: 'Pet beds, feeding products, grooming tools, toys, collars, leashes, and smart pet devices.',
    examples: ['Orthopedic pet beds', 'Automatic feeders', 'Cat trees', 'Leashes'],
  },
  {
    id: 'packaging-materials',
    name: 'Packaging & Materials',
    desc: 'Custom retail packaging, mailers, rigid boxes, labels, and sustainable packaging materials.',
    examples: ['Rigid gift boxes', 'Kraft mailers', 'Woven labels', 'Pulp trays'],
  },
  {
    id: 'tools-hardware',
    name: 'Tools & Hardware',
    desc: 'Hand tools, power tool accessories, fasteners, garden tools, and hardware sets for retail and industrial channels.',
    examples: ['Tool sets', 'Garden pruners', 'Measuring tools', 'Hinges & brackets'],
  },
  {
    id: 'led-lighting',
    name: 'LED & Lighting Products',
    desc: 'Commercial and residential LED lighting, solar lighting, strips, and decorative light programs.',
    examples: ['LED panels', 'Solar garden lights', 'Strip lights', 'Desk lamps'],
  },
]

export const PROBLEMS = [
  {
    title: 'Is this supplier a real factory?',
    desc: 'Trading companies often present themselves as manufacturers. We verify legal registration, visit the site, and confirm who actually makes your product.',
  },
  {
    title: 'Quality drops after the sample',
    desc: 'A good sample does not guarantee good mass production. First-article, during-production, and pre-shipment inspections keep quality consistent.',
  },
  {
    title: 'Silent delays until it is too late',
    desc: 'Many buyers learn about delays only when the ship date passes. Weekly production reporting surfaces problems while they can still be fixed.',
  },
  {
    title: 'Communication gaps with the factory',
    desc: 'Time zones, language, and technical terminology cause costly misunderstandings. Our bilingual team keeps specifications and changes documented.',
  },
  {
    title: 'Hidden costs in freight and customs',
    desc: 'We quote landed-cost scenarios upfront, consolidate cargo from multiple suppliers, and prepare documents so goods clear customs without surprises.',
  },
  {
    title: 'No one to call when something goes wrong',
    desc: 'When defects or disputes appear after payment, leverage disappears. We are on the ground to negotiate rework, replacements, or claims.',
  },
]

export const CASE_STUDIES = [
  {
    id: 'amazon-seller-kitchen-storage',
    tag: 'E-commerce / Amazon FBA',
    title: 'US Amazon Seller: Kitchen Storage Line, 40,000 Units per Quarter',
    challenge:
      'A US-based FBA brand was buying kitchen storage containers through an online marketplace. Defect rates reached 8% (cracked lids, weak seals), and two late shipments caused stock-outs during Q4.',
    approach:
      'We re-sourced the line to a verified injection-molding factory in Zhejiang, set up first-article and pre-shipment inspections to AQL 2.5, and moved the account to a rolling production schedule with weekly reporting.',
    results: [
      'Defect rate reduced from 8% to under 1.5% within two production runs',
      'Unit cost lowered by 12% through direct factory negotiation',
      'Zero late shipments across the following four quarters',
    ],
    productLabel: 'Kitchen storage containers, airtight plastic food storage production',
  },
  {
    id: 'eu-retailer-outdoor-furniture',
    tag: 'Retail Chain / Private Label',
    title: 'European Retailer: Private-Label Outdoor Furniture Program',
    challenge:
      'A European retail chain needed a private-label outdoor furniture range (12 SKUs) with EN 581 compliance, delivered to four distribution centers on a fixed seasonal deadline.',
    approach:
      'We shortlisted and audited three manufacturers, coordinated testing with an accredited lab, ran during-production inspections on welding and coating, consolidated cargo from two factories, and managed documentation for EU customs.',
    results: [
      'All 12 SKUs passed EN 581 testing on first submission',
      'Program shipped in 14 consolidated containers, 6% under freight budget',
      'Delivered to all four distribution centers ahead of the seasonal deadline',
    ],
    productLabel: 'Outdoor furniture, metal and rattan patio sets production',
  },
  {
    id: 'd2c-brand-pet-accessories',
    tag: 'D2C Brand / Product Development',
    title: 'D2C Startup: Custom Pet Accessories from Sketch to Shelf',
    challenge:
      'A direct-to-consumer startup had design concepts for a custom pet harness and leash line but no manufacturing experience and no idea which materials or factories to use.',
    approach:
      'We translated sketches into factory-ready specifications, sourced webbing and hardware, ran three prototype rounds, verified the finalist factory, and inspected the first production order of 6,000 units before shipment.',
    results: [
      'From first sketch to approved pre-production sample in 9 weeks',
      'First order passed pre-shipment inspection with no critical defects',
      'Second order scaled to 18,000 units with two additional colorways',
    ],
    productLabel: 'Custom pet harness and leash, sewing and webbing production',
  },
  {
    id: 'industrial-buyer-led-lighting',
    tag: 'Industrial / B2B Distribution',
    title: 'Industrial Buyer: LED Lighting Range with Tight Compliance Needs',
    challenge:
      'An industrial distributor sourcing an LED lighting range needed CE, RoHS, and LM-80 documentation, but previous suppliers had delivered incomplete or falsified certificates.',
    approach:
      'We verified certificate authenticity directly with the issuing labs, audited the two finalist factories, checked driver and chip sourcing, and ran pre-shipment inspection including function, safety, and burn-in tests.',
    results: [
      'All certificates verified with issuing laboratories before order placement',
      'One supplier removed from the shortlist due to falsified documents',
      'First container passed inspection and cleared EU customs without holds',
    ],
    productLabel: 'LED high bay and panel lighting, electronics assembly production',
  },
]

export const BLOG_POSTS = [
  {
    slug: 'how-to-verify-chinese-factory',
    title: 'How to Verify a Chinese Factory Before You Send a Deposit',
    excerpt:
      'Business license checks, on-site audits, export records, and video calls: a practical checklist to confirm a supplier is real and capable before money changes hands.',
    date: '2026-07-08',
    readTime: '8 min read',
    category: 'Supplier Verification',
    body: [
      'Every year, overseas buyers lose deposits to suppliers that turn out to be something other than what they claimed: a trading company posing as a factory, a workshop with three machines claiming industrial capacity, or in the worst cases, a company that does not exist at all. Verification is not paranoia; it is a standard step in a professional sourcing process.',
      'Start with the business license. Every legitimate Chinese company has a unified social credit code, a registered capital amount, a legal representative, and a defined business scope. Check whether manufacturing appears in that scope, and whether the registered address matches where the factory claims to be. A mismatch does not automatically mean fraud, but it requires an explanation.',
      'Next, look at export history and certifications. A factory that regularly exports to your market will understand labeling, documentation, and compliance expectations. Certificates such as ISO 9001, BSCI, or product-specific marks should be verified with the issuing body, not taken at face value from a PDF.',
      'The strongest verification is an on-site audit. An auditor walks the production floor, counts lines and workers, checks machinery against the claimed product range, reviews quality records, and interviews management. A one-day audit with a photo-documented report answers questions that months of email exchanges cannot.',
      'Finally, structure payments to keep leverage. Avoid 100% upfront payments. A common structure is 30% deposit with 70% against a passed pre-shipment inspection. Suppliers with nothing to hide rarely object to inspection-linked payment terms.',
      'If you do not have a team on the ground in China, a sourcing agent or third-party inspection company can run this process for you at a fraction of the cost of a failed order. The goal is not to distrust every supplier, but to build the relationship on verified facts.',
    ],
  },
  {
    slug: 'aql-inspection-explained',
    title: 'AQL Inspections Explained: What Overseas Buyers Need to Know',
    excerpt:
      'What AQL 2.5 actually means, how sampling works, when to inspect, and how to read an inspection report before releasing your balance payment.',
    date: '2026-06-17',
    readTime: '7 min read',
    category: 'Quality Control',
    body: [
      'AQL stands for Acceptable Quality Limit. It is the statistical framework behind almost every pre-shipment inspection in consumer goods. Instead of checking every unit, an inspector checks a random sample and uses the AQL tables to decide whether the batch passes or fails.',
      'In practice, buyers commonly set three defect categories: critical (safety or legal issues, usually AQL 0), major (functional or significant appearance issues, commonly AQL 2.5), and minor (small cosmetic issues, commonly AQL 4.0). For a 5,000-piece order inspected at general level II, the sample size is 200 pieces. At AQL 2.5 major, the batch passes with up to 10 major defects and fails at 11.',
      'Timing matters as much as the standard. A first-article check catches specification misunderstandings before mass production. A during-production inspection, done when 20–60% of goods are finished, catches systemic problems while there is still time to correct them. The pre-shipment inspection, done at 100% finished and at least 80% packed, is your last checkpoint before the balance payment.',
      'Read inspection reports actively. Look beyond the pass/fail verdict at the defect photos, the measurements against your specification, and the sampling location. If a report shows 9 major defects against an allowance of 10, that is a pass on paper but a warning sign for the next order.',
      'An inspection is not a guarantee; it is a decision tool. It gives you evidence to accept the goods, demand rework, or renegotiate. Combined with payment terms that link the balance to a passed inspection, it is one of the most effective quality tools an overseas buyer has.',
    ],
  },
  {
    slug: 'true-cost-of-cheapest-supplier',
    title: 'The True Cost of Choosing the Cheapest Supplier',
    excerpt:
      'A 15% lower quote can turn into a 40% more expensive order. How to compare quotations on landed cost, defect risk, and total cost of ownership.',
    date: '2026-05-26',
    readTime: '6 min read',
    category: 'Sourcing Strategy',
    body: [
      'When three factories quote for the same product and one is 15% cheaper, the temptation is obvious. But the purchase price is only one line in the real cost of an order. The cheapest quote frequently becomes the most expensive order once you count what happens after the deposit.',
      'Start by comparing specifications, not just prices. A lower quote often reflects thinner material, a cheaper component, looser tolerances, or missing finishing steps. Normalize the quotations: ask each factory to confirm the same material grade, the same packaging, and the same Incoterms before comparing numbers.',
      'Then consider defect economics. If a cheaper factory ships 6% defective goods, you pay for replacements, refunds to your customers, removal of bad reviews, and disposal. At scale, a two-point difference in defect rate routinely exceeds a 15% difference in unit price.',
      'Logistics and compliance also belong in the comparison. A factory far from port adds inland freight. Incomplete certificates can hold goods at customs. A supplier without export experience adds documentation delays that cost more than the price gap.',
      'The professional approach is landed-cost comparison: unit price plus tooling amortization, inspection costs, freight to your warehouse, duties, and an allowance for defect handling, divided by the number of sellable units. The factory that wins on landed cost is often not the one that won on quoted price.',
    ],
  },
  {
    slug: 'shipping-from-china-guide',
    title: 'Shipping from China: FOB, EXW, and LCL Explained for Buyers',
    excerpt:
      'Which Incoterm to choose, when consolidation saves money, and the documents you need to clear customs without delays.',
    date: '2026-04-30',
    readTime: '9 min read',
    category: 'Shipping & Logistics',
    body: [
      "Incoterms define where the supplier's responsibility ends and yours begins. The three you will meet most often when buying from China are EXW, FOB, and DDP. Under EXW (Ex Works), you arrange everything from the factory gate. Under FOB (Free On Board), the supplier delivers the goods loaded onto the vessel at the named port, and you take over from there. Under DDP (Delivered Duty Paid), the seller delivers to your door with duties paid.",
      'For most overseas buyers with a freight forwarder, FOB is the practical default: the supplier handles inland transport and export clearance, which they do more efficiently, and you control the ocean freight, insurance, and import side, where your forwarder gives you transparency.',
      'If you buy from several suppliers, consolidation is where real savings appear. Shipping five 3-cubic-meter lots as five separate LCL shipments costs significantly more than consolidating them into one full container at a warehouse near the port. A sourcing agent or consolidator collects goods from each factory, checks quantities, and loads one container.',
      'Documents decide whether customs clearance takes a day or a month. The standard set includes the commercial invoice, packing list, bill of lading, and where required, certificates of origin, test reports, or product-specific declarations. Names, HS codes, and values must match across all documents.',
      'Finally, plan buffer time. Port congestion, rollover, and customs exams are normal events, not exceptions. For seasonal products, build two to three weeks of slack into your schedule, and track the vessel rather than assuming the booking date is the arrival date.',
    ],
  },
  {
    slug: 'five-mistakes-first-time-importers',
    title: '5 Mistakes First-Time Importers Make When Sourcing from China',
    excerpt:
      'Vague specifications, skipped inspections, 100% upfront payments, and two other errors that turn promising products into expensive lessons.',
    date: '2026-03-19',
    readTime: '6 min read',
    category: 'Sourcing Basics',
    body: [
      'First-time importers usually fail in predictable ways. The good news is that all five of the classic mistakes are easy to avoid once you know them.',
      'Mistake one: vague specifications. "Good quality, like the photo" is not a specification. Factories will fill every gap with the cheapest option that still resembles your picture. Write down materials, dimensions, tolerances, colors with Pantone references, packaging, and labeling. Every unclear point becomes a dispute later.',
      'Mistake two: choosing a supplier on price alone. See the landed-cost logic: normalize specifications first, then compare. A quote far below the others is not a bargain; it is a signal to ask what was left out.',
      'Mistake three: paying 100% upfront. Full prepayment removes all leverage over quality and timing. The standard structure is a deposit to start production and a balance released after a passed inspection or against shipping documents.',
      'Mistake four: skipping inspections to save a few hundred dollars. A pre-shipment inspection costs a fraction of one percent of most order values. Skipping it to save money while risking the entire order is the most expensive saving in importing.',
      'Mistake five: no written agreement. A clear purchase contract covering specification, price, lead time, quality standard, inspection rights, and remedies is what turns "the factory promised" into something enforceable. Good factories do not fear written terms.',
    ],
  },
  {
    slug: 'what-sourcing-agent-does',
    title: 'What a Sourcing Agent in China Actually Does (and What It Costs)',
    excerpt:
      'From supplier search to shipping documents: the day-to-day work of a sourcing agent, common fee models, and when hiring one makes sense.',
    date: '2026-02-24',
    readTime: '7 min read',
    category: 'Working with an Agent',
    body: [
      "A sourcing agent is your operational team in China. In practical terms, that means searching and screening suppliers, verifying factories on-site, negotiating prices and terms, following production, arranging inspections, and coordinating shipping and documentation. The agent's value is proximity: being able to stand on the factory floor this week, not next quarter.",
      'The day-to-day work is less glamorous than the title suggests. It is comparing quotations line by line, chasing sample revisions, sitting in a workshop counting machines, arguing about carton drop tests, and checking that the container that left the factory is the one that arrives at the port. It is execution, repeated consistently.',
      'Fee models vary. The most common are a percentage of order value (typically 5–10% depending on order size and service scope), a fixed project fee for sourcing and setup, or per-service pricing such as a fixed rate per audit or inspection. Some agents combine a smaller percentage with per-service fees. What matters is transparency: you should know what you pay, for what, and to whom.',
      'When does an agent make sense? Usually when at least one of these is true: your annual China spend is meaningful but does not justify your own office; you are developing custom products that need frequent factory contact; you buy from several suppliers and need consolidation; or you have been burned before and want verified processes from the start.',
      'Choose an agent the way you choose a supplier: check references, ask for sample reports, confirm who exactly will visit which factory, and put the scope and fees in writing. A good agent will welcome those questions.',
    ],
  },
]

export const FAQS = [
  {
    q: 'How do you charge for your services?',
    a: 'We offer three models depending on your situation: a sourcing commission of 5–10% of order value (depending on volume and scope), a fixed project fee for supplier search and setup, and per-service pricing for individual audits or inspections. You always receive a written quote before any engagement starts, and there are no hidden margins added to factory prices.',
  },
  {
    q: 'Is the initial sourcing quote really free?',
    a: 'Yes. Send us your product specifications and we will respond with an initial assessment, a realistic price and MOQ indication, and a proposed plan, free of charge and without obligation. You only pay if you decide to proceed with a defined scope of work.',
  },
  {
    q: 'What is the minimum order quantity you work with?',
    a: 'MOQs depend on the product and the factory. As a guideline, most programs we manage start around USD 5,000–10,000 per order. For product development or complex categories, higher volumes are usually needed. If your volumes are smaller, tell us anyway — we will give you an honest assessment of what is feasible.',
  },
  {
    q: 'How long does the sourcing process take?',
    a: 'A typical supplier search and shortlist takes 5–10 working days. Sampling and verification usually add 1–3 weeks. Production lead times depend on the product, commonly 25–45 days. We give you a project timeline at the start and report against it weekly.',
  },
  {
    q: 'Can you work with our existing suppliers?',
    a: 'Yes. Many clients keep their current factories and use us for verification, production follow-up, inspection, and shipping coordination. We are happy to act as your on-the-ground team for suppliers you already trust.',
  },
  {
    q: 'Do you sign NDAs and protect our product designs?',
    a: 'Yes. We sign NDAs before receiving sensitive information, and we can help you set up NNN agreements with Chinese factories. Design files and customer information are only shared with suppliers after your approval.',
  },
  {
    q: 'How do you handle quality problems found during inspection?',
    a: "The inspection report documents every defect with photos and measurements. Depending on severity, we negotiate rework, sorting at the factory's cost, partial re-production, or a price adjustment — and we hold the balance payment until you decide. Nothing ships without your approval.",
  },
  {
    q: 'Which countries do your clients come from?',
    a: 'Our clients are primarily in North America, Europe, and Australia, across e-commerce, retail, and industrial distribution. We work in English, and all reports and documentation are delivered in English.',
  },
]

export const PRODUCT_OPTIONS = PRODUCT_CATEGORIES.map((c) => c.name)
