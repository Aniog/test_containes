export const services = [
  {
    id: "supplier-search",
    title: "Supplier Sourcing & Shortlisting",
    short:
      "We identify qualified Chinese manufacturers for your product and shortlist the ones worth talking to.",
    long:
      "Starting from your product brief, target price, and quality expectations, we search our internal database, industry directories, and factory clusters to find factories that actually produce what you need. We then verify their license, export history, and production capacity before putting them in front of you.",
    deliverables: [
      "3–5 vetted supplier profiles",
      "Factory license and business scope check",
      "Export record and main-market review",
      "Quotation comparison sheet with MOQ and lead time",
    ],
    icon: "Search",
    imgQuery:
      "factory manager showing products to overseas buyer in Chinese factory warehouse",
  },
  {
    id: "factory-audit",
    title: "Factory Verification & Audit",
    short:
      "On-site verification of license, production lines, workforce, and capacity before you commit.",
    long:
      "Before placing an order, we visit the factory in person. We check the business license against government records, walk the production floor, count workers on shift, inspect raw material storage, and assess whether the factory has the equipment to deliver your spec at your volume. You receive a written report with photos and an honest pass / caution / fail rating.",
    deliverables: [
      "On-site factory audit report",
      "Photo record of production lines and workshop",
      "License, HS code, and export history check",
      "Capacity and lead-time assessment",
    ],
    icon: "BadgeCheck",
    imgQuery: "inspector auditing Chinese factory production line with clipboard",
  },
  {
    id: "quality-inspection",
    title: "Quality Control & Pre-Shipment Inspection",
    short:
      "In-process and pre-shipment inspections against AQL standards, with photo and video evidence.",
    long:
      "We run three checkpoints: during production (DUPRO), before shipment (PSI), and during container loading. Inspections follow ANSI/ASQ Z1.4 sampling and cover workmanship, dimensions, function, packaging, and labeling. Every inspection produces a report with timestamps, photos, defect counts, and a clear pass / fail decision.",
    deliverables: [
      "Pre-shipment inspection report (AQL-based)",
      "During-production check (DUPRO)",
      "Container loading supervision",
      "Photos, video, and corrective-action tracking",
    ],
    icon: "ClipboardCheck",
    imgQuery: "quality inspector checking product quality in Chinese factory workshop",
  },
  {
    id: "production-followup",
    title: "Production Follow-up",
    short:
      "Weekly production status updates, milestone tracking, and issue escalation until goods are ready.",
    long:
      "Once an order is placed, we stay on the factory. We track material purchase, cutting / molding / assembly milestones, and surface delays early. You get a written status update every week, with photos, so you always know whether your shipment is on track, at risk, or behind.",
    deliverables: [
      "Weekly production status report",
      "Milestone tracking with photo evidence",
      "Delay and issue escalation",
      "Sample approval and revision management",
    ],
    icon: "LineChart",
    imgQuery: "production line workers assembling products in Chinese manufacturing factory",
  },
  {
    id: "shipping-logistics",
    title: "Shipping, Customs & Logistics",
    short:
      "We handle booking, export documentation, customs clearance, and door delivery on FOB, CIF, or DDP terms.",
    long:
      "We compare freight rates across FCL, LCL, air, and rail, then book the option that matches your timeline and budget. We prepare commercial invoices, packing lists, certificates of origin, and other export documents, and we coordinate with your customs broker or handle DDP end-to-end if you need it.",
    deliverables: [
      "FCL, LCL, air, and rail freight options",
      "Export documentation (invoice, packing list, COO, CIQ)",
      "Customs clearance and DDP support",
      "Door-to-port or door-to-door tracking",
    ],
    icon: "Ship",
    imgQuery: "shipping container being loaded onto cargo ship at Chinese port",
  },
  {
    id: "sampling-development",
    title: "Sampling, OEM & ODM",
    short:
      "We manage pre-production samples, technical drawings, and tooling so production starts on the right foot.",
    long:
      "Need a custom product, a new color, or a modified spec? We coordinate with the factory on samples, refine dimensions and materials, manage tooling, and confirm golden samples before mass production. For OEM and ODM projects, we translate your brief into a workable spec and a realistic cost.",
    deliverables: [
      "Pre-production samples with revision log",
      "Golden sample sign-off",
      "Tooling and mold management",
      "Spec sheet and packaging artwork coordination",
    ],
    icon: "PencilRuler",
    imgQuery: "product designer reviewing samples and technical drawings in Chinese factory",
  },
]

export const processSteps = [
  {
    id: "01",
    title: "Submit your brief",
    description:
      "Tell us the product, target specs, quantity, and destination port. We confirm scope within one business day.",
  },
  {
    id: "02",
    title: "Supplier shortlist",
    description:
      "We identify 3–5 qualified factories and verify their license, capacity, and export history.",
  },
  {
    id: "03",
    title: "Quotes & samples",
    description:
      "You receive a side-by-side quotation comparison, then we arrange pre-production samples for your approval.",
  },
  {
    id: "04",
    title: "Factory audit",
    description:
      "Before you commit, we audit the chosen factory on-site and share a written report with photos.",
  },
  {
    id: "05",
    title: "Production & QC",
    description:
      "We track production weekly and run during-production and pre-shipment inspections against AQL.",
  },
  {
    id: "06",
    title: "Shipping & delivery",
    description:
      "We book freight, prepare export documents, and coordinate customs so your goods arrive on time.",
  },
]

export const productCategories = [
  {
    id: "consumer-goods",
    title: "Consumer Goods",
    description:
      "Household items, kitchenware, personal care, and lifestyle products for retail and e-commerce brands.",
    items: [
      "Kitchenware & tableware",
      "Storage and home organization",
      "Personal care and beauty accessories",
      "Pet products",
    ],
    imgQuery: "assorted consumer goods products on shelf in Chinese wholesale market",
  },
  {
    id: "apparel-textiles",
    title: "Apparel & Textiles",
    description:
      "Garment, fabric, and home-textile sourcing with factory-side quality checks on stitching, color, and sizing.",
    items: [
      "Ready-to-wear apparel",
      "Home textiles (bedding, curtains, towels)",
      "Workwear and uniforms",
      "Custom fabric and trim sourcing",
    ],
    imgQuery: "sewing machines and finished garments in Chinese textile factory",
  },
  {
    id: "electronics",
    title: "Electronics & Accessories",
    description:
      "Consumer electronics, mobile accessories, and small appliances with safety and compliance testing.",
    items: [
      "Consumer electronics",
      "Mobile and computer accessories",
      "Small kitchen appliances",
      "LED lighting and fixtures",
    ],
    imgQuery: "electronics assembly line in Chinese factory with workers in clean room",
  },
  {
    id: "industrial",
    title: "Industrial & Hardware",
    description:
      "Machined parts, fabricated metal, fasteners, and industrial components for B2B and OEM buyers.",
    items: [
      "CNC machining and turned parts",
      "Sheet metal and stamping",
      "Fasteners, brackets, and fittings",
      "Industrial tools and equipment",
    ],
    imgQuery: "metal parts and CNC machined components in Chinese industrial factory",
  },
  {
    id: "packaging",
    title: "Packaging & Print",
    description:
      "Custom packaging, retail boxes, and printed materials with structural and print-quality verification.",
    items: [
      "Folding cartons and rigid boxes",
      "Custom retail and gift packaging",
      "Labels, stickers, and sleeves",
      "Bags, pouches, and paper goods",
    ],
    imgQuery: "printed packaging boxes stacked in Chinese packaging factory",
  },
  {
    id: "furniture",
    title: "Furniture & Home Décor",
    description:
      "Indoor and outdoor furniture, lighting, and décor with container-loading supervision.",
    items: [
      "Indoor and outdoor furniture",
      "Home décor and wall art",
      "Lighting and lamps",
      "Garden and outdoor products",
    ],
    imgQuery: "furniture workshop with finished wooden chairs in Chinese factory",
  },
]

export const problems = [
  {
    id: "fake-factories",
    title: "Trading companies posing as factories",
    description:
      "Many listings online are not the actual manufacturer. We confirm who holds the production license, who runs the floor, and who you are really talking to.",
  },
  {
    id: "quality-drift",
    title: "Quality that drifts mid-production",
    description:
      "First samples pass, but mass production drifts. We run in-process checks and AQL-based pre-shipment inspections so issues surface before the container is sealed.",
  },
  {
    id: "missed-deadlines",
    title: "Missed lead times and silent suppliers",
    description:
      "We follow up weekly on every order, escalate delays in writing, and tell you early when a date is at risk — so you can act instead of finding out at the port.",
  },
  {
    id: "shipping-chaos",
    title: "Shipping, customs, and document chaos",
    description:
      "Wrong HS codes, missing certificates, surprise demurrage. We handle the paperwork, choose the right freight option, and keep you informed from book to delivery.",
  },
  {
    id: "language-distance",
    title: "Language, time zone, and cultural distance",
    description:
      "We are your Chinese team — fluent in supplier culture, working in your time zone, and writing status updates in clear English.",
  },
  {
    id: "no-accountability",
    title: "No single point of accountability",
    description:
      "You get one dedicated project manager from brief to delivery. They know your product, your standards, and your buyer — and they own the outcome.",
  },
]

export const trustPoints = [
  {
    id: "on-the-ground",
    title: "On the ground in China",
    description:
      "A bilingual team based in Shanghai with inspectors in Guangdong, Zhejiang, Jiangsu, Fujian, and Shandong.",
  },
  {
    id: "no-commission",
    title: "Transparent, no-hidden-fee pricing",
    description:
      "Service fees quoted upfront. We do not take supplier commissions, so the factory price you see is the factory price.",
  },
  {
    id: "no-supplier-markup",
    title: "Independent of any single factory",
    description:
      "We are not a factory and we do not resell. We work for the buyer, comparing multiple suppliers on each project.",
  },
  {
    id: "aql-reports",
    title: "AQL-based inspection reports",
    description:
      "All inspections follow ANSI/ASQ Z1.4 sampling, with full photo and video evidence and a clear pass / fail decision.",
  },
  {
    id: "english-updates",
    title: "English updates, your time zone",
    description:
      "Weekly written status reports in English. Calls scheduled around your working hours, not Beijing midnight.",
  },
  {
    id: "data-security",
    title: "Supplier and design confidentiality",
    description:
      "NDA available on request. We do not share your buyer information with the factory beyond what is needed for the order.",
  },
]

export const caseStudies = [
  {
    id: "us-kitchenware",
    slug: "us-kitchenware-brand",
    industry: "Consumer Goods",
    region: "United States",
    title:
      "US kitchenware brand cuts defect rate from 6% to 0.8% on a 40,000-unit order",
    summary:
      "A US DTC kitchenware brand had three consecutive shipments from a Canton fair supplier arrive with cosmetic defects. We replaced the supplier, ran a full audit, and rebuilt the QA process.",
    sections: [
      {
        heading: "The problem",
        body:
          "The buyer's previous shipments had a 6% defect rate, mostly on enamel coating and edge finishing. Their previous agent was not responding to emails and the factory was not acknowledging the issue.",
      },
      {
        heading: "What we did",
        body:
          "We re-sourced three enamelware factories, audited two on-site, ran an in-process inspection at 30% completion, and a pre-shipment inspection using AQL 2.5 General II. We negotiated a written corrective-action plan and held final payment until the PSI passed.",
      },
      {
        heading: "The outcome",
        body:
          "The 40,000-unit order shipped with a 0.8% defect rate, well inside the 2.5% AQL limit. The buyer has continued with the same factory for two subsequent seasons.",
      },
    ],
    stats: [
      { value: "6% → 0.8%", label: "Defect rate" },
      { value: "40,000", label: "Units delivered" },
      { value: "3", label: "Suppliers audited" },
    ],
    imgQuery:
      "stainless steel kitchenware pots pans inspection quality control",
  },
  {
    id: "eu-lighting",
    slug: "eu-led-lighting",
    industry: "Electronics",
    region: "European Union",
    title:
      "EU lighting importer passes CE and RoHS on first attempt for a new LED line",
    summary:
      "A German lighting importer needed a new LED downlight line sourced and tested to CE and RoHS. The buyer had no in-house compliance team.",
    sections: [
      {
        heading: "The problem",
        body:
          "The buyer was new to LED sourcing and was being quoted by factories that could not produce the required CE / RoHS documentation. A previous attempt with another agent had stalled for four months.",
      },
      {
        heading: "What we did",
        body:
          "We shortlisted four factories with verified CE / RoHS test reports, arranged golden samples, and coordinated third-party lab testing through a TÜV partner. We also lined up a CE-marked driver supplier to pair with the LED modules.",
      },
      {
        heading: "The outcome",
        body:
          "Samples passed lab testing on the first attempt. A 25,000-unit production run was completed in 35 days, with one container shipped FOB Ningbo to Hamburg.",
      },
    ],
    stats: [
      { value: "35 days", label: "Production lead time" },
      { value: "25,000", label: "Units" },
      { value: "1st attempt", label: "CE / RoHS pass" },
    ],
    imgQuery:
      "LED ceiling downlight being inspected in Chinese electronics factory",
  },
  {
    id: "au-furniture",
    slug: "au-outdoor-furniture",
    industry: "Furniture",
    region: "Australia",
    title:
      "Australian outdoor furniture retailer sources rattan sets with on-time delivery for peak season",
    summary:
      "An Australian outdoor furniture retailer needed 12 SKUs of rattan outdoor sets delivered to Sydney before Black Friday, with strict packaging requirements for retail-ready pallets.",
    sections: [
      {
        heading: "The problem",
        body:
          "Peak season in Australia starts in October, and the buyer had a hard cutoff. Their previous supplier had delayed a similar order by three weeks the year before, costing them the entire peak window.",
      },
      {
        heading: "What we did",
        body:
          "We sourced a rattan furniture factory in Foshan with proven retail packaging capability, ran a sample evaluation, and agreed on a 50-day production plan with a 5-day buffer. We conducted three inspections: during production, pre-shipment, and container loading. We also negotiated retail-ready palletization and barcode labels.",
      },
      {
        heading: "The outcome",
        body:
          "All 12 SKUs arrived in Sydney 11 days before the retailer's deadline. The buyer confirmed their best peak season to date and continues to add SKUs each year.",
      },
    ],
    stats: [
      { value: "11 days", label: "Early vs. deadline" },
      { value: "12 SKUs", label: "Rattan sets" },
      { value: "0", label: "QC failures" },
    ],
    imgQuery:
      "outdoor rattan furniture sets packed in Chinese furniture factory warehouse",
  },
  {
    id: "uk-packaging",
    slug: "uk-cosmetics-packaging",
    industry: "Packaging",
    region: "United Kingdom",
    title:
      "UK cosmetics brand sources custom packaging with on-press color approval",
    summary:
      "A UK cosmetics start-up needed custom-printed folding cartons for a new skincare line, with brand-accurate Pantone colors on the first production run.",
    sections: [
      {
        heading: "The problem",
        body:
          "Color management was the biggest risk. The buyer had been told by two printers that exact Pantone matching on uncoated paper was not realistic at their budget.",
      },
      {
        heading: "What we did",
        body:
          "We sourced a packaging printer in Shenzhen that runs Heidelberg presses and offered on-press color proofing. We arranged a printed color proof, then flew the buyer to the press for a 3-day color approval. Final production was supervised with AQL 1.5 General II inspection.",
      },
      {
        heading: "The outcome",
        body:
          "Pantone match was within Delta E 2 on the first production run. 200,000 cartons were delivered to a UK 3PL in 28 days, on time and on budget.",
      },
    ],
    stats: [
      { value: "ΔE < 2", label: "Pantone match" },
      { value: "200,000", label: "Cartons delivered" },
      { value: "28 days", label: "Total lead time" },
    ],
    imgQuery:
      "printed cosmetic packaging boxes on production line in Chinese print factory",
  },
  {
    id: "ca-industrial",
    slug: "ca-cnc-parts",
    industry: "Industrial",
    region: "Canada",
    title:
      "Canadian industrial buyer cuts CNC part lead time from 12 weeks to 6 weeks",
    summary:
      "A Canadian industrial OEM was being quoted 12-week lead times on a batch of CNC-machined aluminum brackets. We re-sourced and consolidated tooling.",
    sections: [
      {
        heading: "The problem",
        body:
          "The buyer's previous factory was running at capacity and pushing lead times out. The buyer had a tight slot in their assembly schedule and could not afford a 12-week wait.",
      },
      {
        heading: "What we did",
        body:
          "We located a CNC shop in Dongguan with available capacity, audited it on-site, and confirmed tolerances with a small sample run. We negotiated a dedicated production slot and consolidated tooling across two part numbers to shorten changeover time.",
      },
      {
        heading: "The outcome",
        body:
          "5,000 brackets were delivered in 6 weeks, half the original quoted lead time. Tolerances were within ±0.05 mm on every dimension measured.",
      },
    ],
    stats: [
      { value: "12 → 6 wks", label: "Lead time" },
      { value: "5,000", label: "Brackets" },
      { value: "±0.05 mm", label: "Tolerance held" },
    ],
    imgQuery:
      "CNC machined aluminum metal parts in Chinese industrial manufacturing workshop",
  },
  {
    id: "mena-apparel",
    slug: "mena-apparel",
    industry: "Apparel",
    region: "Middle East",
    title:
      "MENA fashion retailer sources a 30,000-piece woven shirt line with size-set QC",
    summary:
      "A Saudi-based fashion retailer needed a woven shirt line for the back-to-school season, with strict sizing consistency across three size runs.",
    sections: [
      {
        heading: "The problem",
        body:
          "Sizing inconsistency is the most common issue on woven garments. The buyer had received inconsistent measurements from a previous factory in two consecutive seasons.",
      },
      {
        heading: "What we did",
        body:
          "We sourced a woven shirt factory in Shandong with documented size-set QC. We blocked cutting for each size run and ran a measurement check on the first 50 pieces of every size before bulk cutting. We then ran a final pre-shipment inspection with a 12-point measurement table per size.",
      },
      {
        heading: "The outcome",
        body:
          "30,000 pieces shipped across three sizes with a 1.2% measurement deviation rate — well inside the 3% tolerance agreed up front.",
      },
    ],
    stats: [
      { value: "30,000", label: "Pieces" },
      { value: "1.2%", label: "Measurement deviation" },
      { value: "3", label: "Size runs" },
    ],
    imgQuery:
      "sewing line workers producing woven shirts in Chinese garment factory",
  },
]

export const faqs = [
  {
    q: "Where are you based, and do you really inspect in person?",
    a: "We are headquartered in Shanghai, with on-site inspectors across Guangdong, Zhejiang, Jiangsu, Fujian, and Shandong. Every factory audit, during-production check, and pre-shipment inspection is done by a member of our team — not a contractor — and you receive a written report with timestamps and photos.",
  },
  {
    q: "Do you take commission from the factory?",
    a: "No. Our service fees are paid by the buyer, quoted up front, and disclosed in writing. We do not take commissions or rebates from the factories we recommend, so the factory price you see is the factory price.",
  },
  {
    q: "What is the typical order size you work with?",
    a: "We work with a wide range — from 500-unit trial orders to 500,000-unit annual programs. For very small MOQs, we will be honest if we think a China-only approach is not the best fit, and we can suggest alternatives.",
  },
  {
    q: "How long does a typical sourcing project take?",
    a: "From brief to first samples usually takes 10–15 business days. From sample approval to mass production is typically 30–60 days depending on product complexity. Shipping adds another 15–40 days depending on mode (air, sea LCL, sea FCL, rail).",
  },
  {
    q: "What inspection standard do you use?",
    a: "We follow ANSI/ASQ Z1.4 (formerly MIL-STD-105E) for sampling, with AQL levels typically 1.0, 1.5, 2.5, or 4.0 depending on product risk. Reports include defect classification (critical / major / minor), defect counts, and a clear pass / fail decision.",
  },
  {
    q: "Can you help with shipping and customs?",
    a: "Yes. We compare FCL, LCL, air, and rail freight rates, handle export documentation (commercial invoice, packing list, certificate of origin, CIQ where required), and can deliver on DDP terms to many destinations.",
  },
  {
    q: "What if the factory makes a mistake after inspection?",
    a: "We track corrective actions in writing and hold final payment or shipment until the issue is resolved. If a problem reaches the buyer, we work with the factory on root cause, replacement, or credit — we do not disappear.",
  },
  {
    q: "Do you sign NDAs?",
    a: "Yes. We are happy to sign a mutual NDA before we start discussing your product, your supplier list, or your design files. We also do not share your buyer information with the factory beyond what is needed for the order.",
  },
  {
    q: "How do you charge?",
    a: "Sourcing and project management is usually a flat fee per project or a retainer. Inspections are charged per man-day with clear inclusions. We send a written quote before any work starts.",
  },
  {
    q: "Can I visit the factory myself?",
    a: "Of course. Many of our buyers come to China once or twice a year. We arrange factory visits, accompany you on the visits, and help you translate on the spot.",
  },
]

export const blogPosts = [
  {
    id: "aql-guide",
    title: "A practical guide to AQL for buyers sourcing from China",
    excerpt:
      "How AQL sampling works, what levels to choose for different products, and how to read an inspection report without getting lost in jargon.",
    category: "Quality Control",
    readTime: "8 min read",
    date: "2026-06-12",
    imgQuery:
      "quality inspector using caliper to measure manufactured product in factory",
  },
  {
    id: "factory-audit-checklist",
    title: "What a proper factory audit actually looks like",
    excerpt:
      "A factory audit is more than a guided tour and a group photo. Here is what a serious auditor checks, and the red flags that should make you walk away.",
    category: "Supplier Verification",
    readTime: "10 min read",
    date: "2026-05-28",
    imgQuery:
      "auditor walking through Chinese factory production floor with checklist",
  },
  {
    id: "fob-cif-ddp",
    title: "FOB, CIF, DDP: choosing the right Incoterm for your first China order",
    excerpt:
      "Each Incoterm changes who pays for what, who carries the risk, and how much control you keep. Here is a plain-language breakdown for first-time importers.",
    category: "Shipping & Logistics",
    readTime: "7 min read",
    date: "2026-05-14",
    imgQuery:
      "shipping containers stacked at busy Chinese export port with cranes",
  },
  {
    id: "sourcing-agent-vs-trading-company",
    title: "Sourcing agent vs. trading company: what is the actual difference?",
    excerpt:
      "Both can put you in touch with a factory. The difference shows up when something goes wrong. Here is how to think about which one fits your situation.",
    category: "Sourcing Strategy",
    readTime: "6 min read",
    date: "2026-04-30",
    imgQuery:
      "business meeting at desk with supplier quotation sheets and product samples",
  },
  {
    id: "pre-production-samples",
    title: "Why pre-production samples matter more than the golden sample",
    excerpt:
      "The sample you approve is not always the sample you receive. Here is how to run the sampling process so mass production matches the sign-off.",
    category: "Production",
    readTime: "7 min read",
    date: "2026-04-16",
    imgQuery:
      "product samples arranged on table during product development review",
  },
  {
    id: "first-shipment-checklist",
    title: "A first-time importer's checklist for a smooth first shipment from China",
    excerpt:
      "Documents, payment terms, packaging, and the small details that cause big delays. The list we wish every first-time buyer had on day one.",
    category: "Operations",
    readTime: "9 min read",
    date: "2026-04-02",
    imgQuery:
      "close up of shipping container loading supervision at Chinese port",
  },
]

export const trustStats = [
  { value: "12+", label: "Years sourcing from China" },
  { value: "30+", label: "Industries served" },
  { value: "40+", label: "Countries we ship to" },
  { value: "5 in-house", label: "Inspection team members per region" },
]
