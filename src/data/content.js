export const services = [
  {
    id: "sourcing",
    icon: "Search",
    title: "Supplier Sourcing",
    summary:
      "Shortlist 3–5 qualified factories for your product from our pre-vetted network.",
    points: [
      "Product-specific factory search across China",
      "Pre-screening on licenses, capacity and export history",
      "Side-by-side quotation comparison with cost breakdown",
    ],
  },
  {
    id: "audit",
    icon: "ShieldCheck",
    title: "Factory Audit & Verification",
    summary:
      "On-site audits to confirm the factory is real, capable and compliant.",
    points: [
      "Business license and legal-entity verification",
      "Production capacity, equipment and workforce check",
      "Optional BSCI, SEDEX and ISO 9001 audit coordination",
    ],
  },
  {
    id: "qc",
    icon: "ClipboardCheck",
    title: "Quality Inspection",
    summary:
      "In-line, pre-shipment and container-loading inspections with photo reports.",
    points: [
      "DUPRO and PSI inspections against your AQL",
      "Same-day written report with annotated photos",
      "On-the-spot rework coordination when defects are found",
    ],
  },
  {
    id: "production",
    icon: "Factory",
    title: "Production Follow-up",
    summary:
      "Weekly progress updates so you always know where your order stands.",
    points: [
      "Milestone tracking: sample → PP → mass production → packing",
      "Photo and video updates at each critical step",
      "Escalation handling for delays, material issues or shortages",
    ],
  },
  {
    id: "shipping",
    icon: "Ship",
    title: "Shipping & Logistics",
    summary:
      "End-to-end freight coordination from the factory floor to your door.",
    points: [
      "Sea, air and rail freight with consolidations available",
      "Customs documents, HS codes and export declarations",
      "DDP / DAP options and Amazon FBA delivery on request",
    ],
  },
  {
    id: "sampling",
    icon: "PackageOpen",
    title: "Sampling & Prototyping",
    summary:
      "Get physical samples in your hand before committing to a production order.",
    points: [
      "Coordinate sample making, revisions and re-shipping",
      "International courier (DHL / FedEx / UPS) at cost",
      "Sample cost refundable against future bulk orders",
    ],
  },
];

export const processSteps = [
  {
    n: "01",
    title: "Submit your inquiry",
    body: "Tell us the product, target quantity, specifications and destination. The more detail, the faster we can quote.",
  },
  {
    n: "02",
    title: "Supplier shortlist",
    body: "Within 2–3 business days, we present 3–5 vetted factories with quotations, lead times and our honest recommendation.",
  },
  {
    n: "03",
    title: "Sampling & negotiation",
    body: "We order samples, negotiate price / payment terms / Incoterms on your behalf, and report back with photo evidence.",
  },
  {
    n: "04",
    title: "Place the order",
    body: "Once you approve a supplier and sample, we issue a clear Purchase Order and arrange a deposit payment to the factory.",
  },
  {
    n: "05",
    title: "Production & QC",
    body: "We follow production weekly and run inspections. You receive written reports with photos at every key milestone.",
  },
  {
    n: "06",
    title: "Shipping & delivery",
    body: "After your final approval, we book freight, prepare export documents, and ship to your port, warehouse or Amazon FBA.",
  },
];

export const productCategories = [
  {
    id: "electronics",
    title: "Consumer Electronics",
    desc: "Charging accessories, smart home, audio, wearable and small appliances.",
    hubs: "Shenzhen · Dongguan",
    image: "consumer electronics factory assembly line worker components",
  },
  {
    id: "apparel",
    title: "Apparel & Textiles",
    desc: "Garment manufacturing, technical fabrics, OEM / ODM for fashion brands.",
    hubs: "Hangzhou · Guangzhou · Huzhou",
    image: "textile garment factory sewing machines rolls of fabric",
  },
  {
    id: "home",
    title: "Home & Kitchen",
    desc: "Cookware, tableware, storage, cleaning tools, and home organization.",
    hubs: "Yongkang · Jieyang",
    image: "kitchen cookware stainless steel factory production line",
  },
  {
    id: "furniture",
    title: "Furniture & Decor",
    desc: "Indoor and outdoor furniture, lighting and home decor from real workshops.",
    hubs: "Foshan · Zhongshan",
    image: "furniture workshop woodworking sanding chair production",
  },
  {
    id: "beauty",
    title: "Beauty & Personal Care",
    desc: "Skincare, haircare, cosmetics OEM with formulation and packaging.",
    hubs: "Guangzhou · Shanghai",
    image: "cosmetics laboratory bottles filling line cosmetic factory",
  },
  {
    id: "industrial",
    title: "Industrial & Hardware",
    desc: "Custom CNC, sheet metal, casting, fasteners, and OEM machinery parts.",
    hubs: "Ningbo · Wuxi",
    image: "industrial cnc machining metal parts factory worker",
  },
  {
    id: "outdoor",
    title: "Sports & Outdoors",
    desc: "Camping gear, fitness equipment, cycling, and outdoor lifestyle products.",
    hubs: "Yongkang · Ningbo",
    image: "sports outdoor equipment factory camping gear production",
  },
  {
    id: "packaging",
    title: "Packaging & Printing",
    desc: "Custom boxes, bags, labels, paper tubes, and sustainable packaging.",
    hubs: "Dongguan · Wenzhou",
    image: "packaging boxes printing factory warehouse stacked cartons",
  },
];

export const problems = [
  {
    title: "Hard to find a real, capable factory",
    body: "Many online listings are trading companies, not manufacturers. We verify the factory exists, check their license, equipment, and capacity before you waste a deposit.",
  },
  {
    title: "Quality drift between samples and bulk",
    body: "We run in-line and pre-shipment inspections against your reference sample, so the goods that ship match what you approved — not a cheaper copy.",
  },
  {
    title: "Communication gaps and time zones",
    body: "Your dedicated English-speaking project manager works in your time zone window and writes back the same business day, in plain language, no fluff.",
  },
  {
    title: "Unexpected costs and shipping surprises",
    body: "We give you an itemized quotation upfront, including estimated freight and duties for your destination — no surprise charges after the cargo leaves port.",
  },
  {
    title: "Compliance and certification confusion",
    body: "We map the relevant certifications (CE, FCC, RoHS, REACH, FDA, FSC) for your product and target market, and we audit factories against them.",
  },
  {
    title: "No on-the-ground accountability",
    body: "Our auditors and QC inspectors are based in Ningbo and Yiwu. When a problem happens, we are physically there within hours — not on a Zoom call from another country.",
  },
];

export const trustPoints = [
  { value: "12+", label: "Years on the ground in China" },
  { value: "1,200+", label: "Supplier audits completed" },
  { value: "60+", label: "Countries we ship to" },
  { value: "98%", label: "On-time shipment rate" },
];

export const complianceBadges = [
  "BSCI Audit Familiar",
  "SEDEX / SMETA",
  "ISO 9001 Process",
  "CE / FCC / RoHS",
  "FSC / OEKO-TEX",
  "FDA Registration",
];

export const caseStudies = [
  {
    id: "kitchenware",
    industry: "Home & Kitchen",
    location: "Germany",
    title:
      "Helping a German cookware brand cut lead time by 28 days on a 40,000-unit stainless steel order",
    summary:
      "A heritage cookware brand needed to move from a 75-day lead time to 47 days. We pre-qualified two certified stainless steel factories in Yongkang, ran a 3-stage inspection plan, and consolidated sea freight with their next SKU.",
    results: [
      "Lead time reduced from 75 to 47 days",
      "0.6% defect rate (vs 3.1% on their previous order)",
      "Saved €0.42 / unit on combined freight",
    ],
  },
  {
    id: "beauty",
    industry: "Beauty & Personal Care",
    location: "United States",
    title:
      "Sourcing and compliance review for a US skincare startup launching into Target",
    summary:
      "An early-stage skincare brand needed a GMP-certified OEM for a 5-SKU launch, plus FDA cosmetic registration and a Target-ready carton spec. We coordinated formulation, packaging and retail compliance end-to-end.",
    results: [
      "5 SKUs from sample to retail-ready in 11 weeks",
      "FDA cosmetic registration completed before shipment",
      "Onboarded to Target's 4 distribution centers on schedule",
    ],
  },
  {
    id: "furniture",
    industry: "Furniture & Decor",
    location: "Australia",
    title:
      "Replacing an unreliable trading company with a real factory for an outdoor furniture line",
    summary:
      "An Australian retailer was getting hit with 12% defect rates and unpredictable shipments from a trading company. We audited two real factories, transitioned production, and introduced a pre-shipment inspection routine.",
    results: [
      "Defect rate dropped from 12% to 1.4%",
      "Single weekly status email replaced back-and-forth with 4 suppliers",
      "Year 2 order value grew 3.4x on the same product line",
    ],
  },
  {
    id: "electronics",
    industry: "Consumer Electronics",
    location: "United Kingdom",
    title:
      "Verifying capacity and CE compliance for a UK audio brand scaling to 80,000 units",
    summary:
      "A UK audio brand needed to scale from 12k to 80k units but was unsure if their existing factory could deliver. We audited the line, ran a 2-day capacity study, and arranged CE testing at a partner lab.",
    results: [
      "Capacity confirmed at 12,000 units / week",
      "CE test report issued in 18 working days",
      "80,000 units shipped across 2 vessels with 0 hold-ups",
    ],
  },
];

export const blogPosts = [
  {
    id: "factory-vs-trading",
    category: "Sourcing Basics",
    date: "Jul 18, 2026",
    title: "Factory vs. trading company: 7 signals to tell them apart in 5 minutes",
    excerpt:
      "A practical checklist for distinguishing the actual manufacturer from a middleman — based on what we see in audits every week.",
  },
  {
    id: "inspection-aql",
    category: "Quality Control",
    date: "Jul 04, 2026",
    title: "AQL inspection tables explained: which standard should you use?",
    excerpt:
      "AQL 1.0, 2.5 or 4.0? General Inspection Level I, II, or III? We walk through the choices that actually matter for your order.",
  },
  {
    id: "fob-vs-exw",
    category: "Shipping & Logistics",
    date: "Jun 22, 2026",
    title: "FOB vs. EXW vs. DDP: choosing the right Incoterm for your first order",
    excerpt:
      "Each Incoterm moves risk and cost across a different line. Here's how to pick the right one based on your experience and order size.",
  },
  {
    id: "amazon-fba",
    category: "Shipping & Logistics",
    date: "Jun 09, 2026",
    title: "Shipping to Amazon FBA from China: the documents you actually need",
    excerpt:
      "A clean checklist of commercial invoices, packing lists, FBA box labels, and the customs details Amazon will check first.",
  },
  {
    id: "moq-negotiation",
    category: "Sourcing Basics",
    date: "May 27, 2026",
    title: "How to negotiate MOQ on your first order without losing the factory",
    excerpt:
      "Yes, MOQ is negotiable — but the way you ask matters. A short playbook based on 200+ first orders we have supported.",
  },
  {
    id: "compliance",
    category: "Compliance",
    date: "May 12, 2026",
    title: "CE, FCC, RoHS, REACH: which certifications does my product need?",
    excerpt:
      "A product-by-product map of the most common certification requirements for the US, EU, UK and Australian markets.",
  },
];

export const faqItems = [
  {
    q: "Where are you based in China, and can I visit?",
    a: "Our head office is in Ningbo, Zhejiang, with a sourcing team in Yiwu. You are welcome to visit — many of our clients do a 3–4 day trip and we arrange factory visits, market tours and translation. We can also do video calls and live-streamed factory walk-throughs if travel is not an option.",
  },
  {
    q: "What is the minimum order quantity (MOQ) you handle?",
    a: "There is no fixed minimum. We routinely work with first orders from 200 units and scaling orders into the hundreds of thousands. For very small quantities we will discuss whether the project is commercially viable for both sides before we begin.",
  },
  {
    q: "How do you charge — a percentage of the order, or a flat fee?",
    a: "Sourcing is billed as a flat project fee (quoted after the inquiry, before we start work). Quality inspections are a flat per-man-day rate with all travel costs included. We never mark up factory pricing — you pay the factory directly and we invoice our service fee separately, so you can see every line.",
  },
  {
    q: "Can I use my own factory or one I already found?",
    a: "Yes. We regularly run inspections, production follow-up and shipping for clients who have already chosen a factory. We can also do a quick verification audit on a factory you have found to make sure it is legitimate before you wire a deposit.",
  },
  {
    q: "How long does a typical first order take?",
    a: "From inquiry to a sample in your hands is usually 10–18 days. Sample to bulk production is typically 25–45 days, depending on the product and customization. Sea freight adds 18–35 days to your destination port. We will give you a realistic timeline at the quotation stage — never a sales-pitch number.",
  },
  {
    q: "Do you handle customs clearance in my country?",
    a: "We prepare all export documents in China and can coordinate with your local broker. For the US, UK, EU, Canada and Australia we also offer DDP (delivered duty paid) shipping through our logistics partners, so the cargo arrives at your door with no surprise duties.",
  },
  {
    q: "What happens if the goods fail inspection?",
    a: "We issue a written inspection report on the same day. If the result is 'failed' we coordinate rework with the factory at no extra service fee, and re-inspect before allowing shipment. If rework is not possible, you can choose to reduce the order, change specifications, or cancel — and we help you recover your deposit.",
  },
  {
    q: "How do you protect my product design and information?",
    a: "We are happy to sign an NDA before you share sensitive details. We only disclose product specifications to shortlisted, vetted factories, and we can also register trademarks in China through a partner agent if you are concerned about IP protection.",
  },
];
