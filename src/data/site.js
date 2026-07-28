// Centralized site content for SSourcing China
// All data is static / hardcoded — no backend calls.

export const COMPANY = {
  name: "SSourcing China",
  tagline: "China Sourcing Agent for Global Buyers",
  email: "info@ssourcing.cn",
  phone: "+86 21 5555 0188",
  whatsapp: "+86 138 0000 0000",
  address: "Room 1808, Tower B, Hongqiao World Centre, Shanghai 201103, China",
  hours: "Mon–Fri 09:00–18:00 CST (UTC+8)",
  founded: 2014,
  hqCity: "Shanghai",
};

export const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/how-it-works", label: "How It Works" },
  { to: "/products", label: "Products We Source" },
  { to: "/case-studies", label: "Case Studies" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
];

export const SERVICES = [
  {
    slug: "supplier-sourcing",
    title: "Supplier Sourcing",
    short:
      "We identify and short-list factories that match your product spec, MOQ, and target price.",
    long:
      "Brief in, factories out. We start from your specification, target price, and required certifications, then build a short-list of pre-vetted Chinese manufacturers. You receive a comparison sheet with company profile, capacity, certifications, sample pricing, and our recommendation.",
    icon: "Search",
    points: [
      "RFQ analysis and target price benchmarking",
      "Manufacturer short-list (typically 3–5 candidates)",
      "Side-by-side comparison sheet with sample quotes",
    ],
  },
  {
    slug: "supplier-verification",
    title: "Supplier Verification",
    short:
      "On-site factory audits to confirm a supplier is real, capable, and export-ready.",
    long:
      "Before you place an order, we visit the factory in person. We check business license, production lines, workforce, export history, and key certifications. You receive a written audit report with photos and a pass / conditional / fail recommendation.",
    icon: "ShieldCheck",
    points: [
      "Business license and legal entity check",
      "On-site audit of workshop, warehouse, and QC station",
      "Export history and reference customer check",
    ],
  },
  {
    slug: "quality-inspection",
    title: "Quality Inspection",
    short:
      "DPI, IPC, and PSI inspections carried out by trained QC engineers against your AQL.",
    long:
      "We follow the international AQL sampling standard and your specification. Our QC engineers carry out pre-production inspection (PPI / DUPRO), during-production inspection (DPI), and pre-shipment inspection (PSI). Each inspection is delivered with a written report, photos, and a pass / fail decision.",
    icon: "ClipboardCheck",
    points: [
      "PPI / DUPRO, IPC / DPI, and PSI inspections",
      "AQL-based sampling (commonly 1.0 / 2.5 / 4.0)",
      "Photo-backed report within 24 hours",
    ],
  },
  {
    slug: "production-followup",
    title: "Production Follow-Up",
    short:
      "Weekly progress updates, milestone photos, and on-the-ground issue resolution.",
    long:
      "Once production starts, we keep you informed. Our resident team tracks milestones, attends critical sample reviews, and raises red flags early. You receive a weekly status update with photos, % completion, and any deviations from the original plan.",
    icon: "LineChart",
    points: [
      "Weekly written status updates with photos",
      "Critical process checkpoints attended in person",
      "Escalation path when production slips",
    ],
  },
  {
    slug: "shipping-logistics",
    title: "Shipping & Logistics",
    short:
      "Consolidated cargo, export documentation, and FOB / CIF / DDP freight options.",
    long:
      "We coordinate pickup from the factory, consolidation in our warehouse, export customs clearance, and ocean or air freight to your destination port. We work with neutral freight forwarders and provide transparent, line-item cost breakdowns.",
    icon: "Ship",
    points: [
      "Factory pickup, consolidation, and palletizing",
      "Export customs and documentation",
      "FCL, LCL, and air freight with transparent cost sheets",
    ],
  },
  {
    slug: "sample-management",
    title: "Sample Management",
    short:
      "Sample collection, evaluation, and consolidated international shipping to your desk.",
    long:
      "We collect samples from multiple suppliers, check them against your spec, and ship them together as one consolidated parcel. You receive one tracking number, one invoice, and a written sample comparison.",
    icon: "PackageSearch",
    points: [
      "Sample collection from 3–8 suppliers per round",
      "Spec check and written sample comparison",
      "Consolidated international shipping (DHL / FedEx / UPS)",
    ],
  },
];

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Send your inquiry",
    body:
      "Share a brief, a spec sheet, a target price, and where the goods need to land. We acknowledge within one business day.",
  },
  {
    step: "02",
    title: "Receive a short-list of suppliers",
    body:
      "We benchmark your spec against the Chinese market and return 3–5 qualified factories with sample quotes and our recommendation.",
  },
  {
    step: "03",
    title: "Approve, sample, and verify",
    body:
      "You select one or more suppliers. We collect samples, run a factory audit, and report back with findings.",
  },
  {
    step: "04",
    title: "Place the order",
    body:
      "We confirm the PO, deposit terms, and production schedule with the factory on your behalf. You sign off in writing.",
  },
  {
    step: "05",
    title: "Follow production and inspect",
    body:
      "Weekly progress updates plus in-line and pre-shipment inspections. You receive a pass / fail report before goods leave the factory.",
  },
  {
    step: "06",
    title: "Ship and deliver",
    body:
      "We arrange export customs, consolidation, and freight. You receive a full shipping file: invoice, packing list, B/L, and tracking.",
  },
];

export const PRODUCT_CATEGORIES = [
  {
    slug: "consumer-electronics",
    title: "Consumer Electronics",
    desc:
      "Bluetooth speakers, smart home devices, power banks, accessories, and audio peripherals.",
    imgQuery: "consumer electronics factory",
  },
  {
    slug: "apparel-textiles",
    title: "Apparel & Textiles",
    desc:
      "Knitwear, sportswear, workwear, uniforms, and home textiles with full size-set and labeling.",
    imgQuery: "garment factory production line",
  },
  {
    slug: "home-kitchenware",
    title: "Home & Kitchenware",
    desc:
      "Cookware, drinkware, storage, organizers, and decor items in stainless steel, glass, and silicone.",
    imgQuery: "kitchenware factory",
  },
  {
    slug: "beauty-personal-care",
    title: "Beauty & Personal Care",
    desc:
      "Skincare, haircare, and cosmetic tools with GMP, ISO 22716, and FDA / EU compliance support.",
    imgQuery: "cosmetics lab production",
  },
  {
    slug: "industrial-machinery",
    title: "Industrial Machinery",
    desc:
      "Light industrial machines, automation parts, and tooling with CE / UL support and FAT testing.",
    imgQuery: "industrial machinery factory",
  },
  {
    slug: "outdoor-sporting",
    title: "Outdoor & Sporting Goods",
    desc:
      "Camping gear, fitness equipment, and sporting accessories with material and load testing.",
    imgQuery: "outdoor gear factory",
  },
  {
    slug: "packaging-printing",
    title: "Packaging & Printing",
    desc:
      "Custom boxes, kraft mailers, labels, and POS displays with print proofing and on-press approval.",
    imgQuery: "printing packaging factory",
  },
  {
    slug: "furniture-furnishing",
    title: "Furniture & Furnishing",
    desc:
      "Flat-pack, ready-to-assemble, and solid wood furniture with drop-test packaging and FBA prep.",
    imgQuery: "furniture factory woodworking",
  },
];

export const PROBLEMS = [
  {
    title: "You can't tell if a supplier is real",
    body:
      "Many factories have polished websites and Alibaba listings but no real workshop. We visit the address, check the business license, and confirm production capacity in person.",
    icon: "Building2",
  },
  {
    title: "Samples and production don't match",
    body:
      "Common issue: the sample is from one line, the order is from another. We lock the production line, take reference samples at order start, and compare every batch.",
    icon: "GitCompare",
  },
  {
    title: "Quality drifts during production",
    body:
      "We run in-line inspections at the 10–20% mark, not only at the end, so we catch defects before the entire batch is produced.",
    icon: "AlertTriangle",
  },
  {
    title: "Hidden costs and surprise fees",
    body:
      "We itemize every cost: factory price, inspection fee, consolidation, freight, duty, and last-mile. You see the landed cost before you wire the deposit.",
    icon: "Receipt",
  },
  {
    title: "Shipping is fragmented and slow",
    body:
      "We consolidate orders from multiple factories in our Shanghai warehouse, file export customs, and book freight as one shipment with one tracking number.",
    icon: "Container",
  },
  {
    title: "Time-zone and language gaps",
    body:
      "Your dedicated account manager replies within one business day in English, and joins calls during your business hours via Zoom, Teams, or WeChat.",
    icon: "MessagesSquare",
  },
];

export const TRUST_POINTS = [
  {
    title: "Based in Shanghai since 2014",
    body:
      "Our office and consolidation warehouse are in the Hongqiao trade area, 20 minutes from the airport and within driving distance of most suppliers in the Yangtze River Delta.",
    icon: "MapPin",
  },
  {
    title: "Bilingual team, one-time-zone-friendly",
    body:
      "Account managers reply in English. We overlap with US, EU, AU, and Middle East business hours and confirm pricing in your currency.",
    icon: "Globe2",
  },
  {
    title: "Independent and not a trading company",
    body:
      "We are a sourcing agent, not a trading company. We charge a service fee, we don't take margin on the factory price, and we show you the factory invoice.",
    icon: "Handshake",
  },
  {
    title: "AQL-aligned inspections",
    body:
      "Inspections follow ISO 2859-1 AQL sampling. You receive a pass / conditional / fail decision, a defect breakdown, and a photo log within 24 hours of the inspection.",
    icon: "ClipboardList",
  },
  {
    title: "Transparent, line-item cost sheets",
    body:
      "Every quote shows the unit price, our service fee, inspection cost, freight, and any duty estimate. No hidden commissions, no surprise invoices.",
    icon: "FileSpreadsheet",
  },
  {
    title: "NDAs and reference customers on file",
    body:
      "We sign NDAs before sharing detailed specs. On request, we connect you with selected reference customers in your industry.",
    icon: "Lock",
  },
];

export const CASE_STUDIES = [
  {
    slug: "us-kitchenware-importer",
    industry: "Home & Kitchenware",
    region: "United States",
    title:
      "A US kitchenware importer consolidates 4 SKUs from 3 factories into one FCL",
    summary:
      "We moved a kitchenware importer from a 4-vendor spreadsheet to one consolidated FCL shipped to Long Beach, with a single freight invoice and a single customs entry.",
    facts: [
      { k: "SKUs", v: "4" },
      { k: "Factories", v: "3" },
      { k: "Container", v: "1× 40'HQ" },
      { k: "Lead time", v: "42 days" },
    ],
    body:
      "The client was managing four SKUs across three factories and one trading company, each on a different incoterm. We re-quoted all four directly with the underlying factories, ran pre-shipment inspections on each, consolidated into our Shanghai warehouse, and shipped as a single 40-foot HQ to Long Beach. Landed cost per unit dropped by 11% on the first shipment.",
    imageQuery: "shipping container yard crane",
  },
  {
    slug: "eu-skincare-brand",
    industry: "Beauty & Personal Care",
    region: "European Union",
    title:
      "An EU skincare brand sources GMP-compliant packaging and formula partners",
    summary:
      "We vetted six contract manufacturers, audited two, and supported the client's regulatory team in filing a CPNP notification for the EU market.",
    facts: [
      { k: "Suppliers vetted", v: "6" },
      { k: "Audits", v: "2" },
      { k: "CPNP filed", v: "Yes" },
      { k: "First PO value", v: "€86,000" },
    ],
    body:
      "The client needed a GMP-certified manufacturer for a new skincare line and a separate packaging supplier. We audited both, validated their ISO 22716 certificates, and coordinated the label artwork with their regulatory team. The first order shipped air-freight to Frankfurt within five weeks of PO confirmation.",
    imageQuery: "cosmetics lab quality control",
  },
  {
    slug: "au-fitness-equipment",
    industry: "Outdoor & Sporting Goods",
    region: "Australia",
    title:
      "An Australian fitness brand sources a load-rated squat rack end-to-end",
    summary:
      "We sourced the steel supplier, the welding shop, and the packaging supplier, then coordinated load-testing at a third-party lab in Shanghai.",
    facts: [
      { k: "Factories", v: "3" },
      { k: "Load test", v: "1,000 kg" },
      { k: "Container", v: "1× 20'GP" },
      { k: "FBA prep", v: "Included" },
    ],
    body:
      "The client wanted a single squat rack SKU shipped Amazon FBA-ready. We sourced a steel tubing mill, a robotic welding shop, and a drop-test packaging supplier. A 1,000 kg static load test was witnessed by our QC team at a third-party lab. The goods were palletized, labeled, and shipped to Sydney in a single 20-foot container.",
    imageQuery: "fitness equipment factory welding",
  },
  {
    slug: "me-electronics-distributor",
    industry: "Consumer Electronics",
    region: "Middle East",
    title:
      "A Middle East electronics distributor sources Bluetooth speakers with FCC and CE",
    summary:
      "We sourced two OEM audio factories, verified FCC and CE documentation, and shipped a recurring monthly LCL to Jebel Ali.",
    facts: [
      { k: "OEM factories", v: "2" },
      { k: "Certs", v: "FCC / CE" },
      { k: "Shipments", v: "Monthly LCL" },
      { k: "Destination", v: "Jebel Ali" },
    ],
    body:
      "The client needed a 6–8 cubic meter monthly LCL of Bluetooth speakers with full FCC and CE documentation. We qualified two OEM factories, locked the test reports, and run a pre-shipment inspection every month. The goods are consolidated in our Shanghai warehouse and shipped to Jebel Ali on a fixed monthly sailing.",
    imageQuery: "bluetooth speaker factory electronics",
  },
];

export const FAQS = [
  {
    q: "Where are you based, and who owns the goods?",
    a: "We are based in Shanghai, China. You, the buyer, are the importer of record. The goods are produced by the Chinese factory under your name, paid into the factory's USD or RMB account. We charge a separate service fee, listed on a transparent quote. We never act as the principal.",
  },
  {
    q: "What is your typical fee structure?",
    a: "We charge a sourcing service fee (per project or per PO), a per-day inspection fee for QC, and pass through the freight cost at cost. You see every line item on a single quote before you wire a deposit. We do not take margin on the factory price.",
  },
  {
    q: "What is the minimum order quantity?",
    a: "There is no minimum order quantity for our sourcing service. Many of our clients start with a sample round of 3–8 suppliers, then move to a production order of a few hundred units. The minimum order quantity on the factory side depends on the product and the supplier.",
  },
  {
    q: "Can you sign an NDA?",
    a: "Yes. We sign a mutual NDA before sharing detailed specifications, drawings, or pricing. We can also arrange NDAs between you and the factory.",
  },
  {
    q: "Which inspection standards do you follow?",
    a: "Our QC engineers follow ISO 2859-1 AQL sampling. The most common AQL levels are 1.0 (major), 2.5 (minor), and 4.0 (critical). We can also follow MIL-STD-105E or your custom AQL. Each inspection produces a written report with photos and a pass / conditional / fail decision within 24 hours.",
  },
  {
    q: "Do you handle shipping and customs?",
    a: "Yes. We coordinate pickup, consolidation, export customs in China, and ocean or air freight to your destination port. We work with neutral freight forwarders and provide line-item freight quotes. We do not act as your customs broker in your country; we recommend you appoint a local broker.",
  },
  {
    q: "What payment terms do you support?",
    a: "Most factories accept 30% T/T deposit and 70% balance against a copy of B/L. For established clients, we can negotiate 50/50 or L/C at sight. We always recommend paying the factory directly under your name, with our service fee invoiced separately.",
  },
  {
    q: "How long does a typical project take?",
    a: "From brief to short-list, 5–7 business days. From sample round to first PO, 3–4 weeks. From PO to ex-factory, 30–60 days depending on the product. From ex-factory to your destination port, add 18–35 days for ocean freight or 3–7 days for air freight.",
  },
];

export const BLOG_POSTS = [
  {
    slug: "how-to-verify-a-chinese-supplier",
    title: "How to verify a Chinese supplier before you wire a deposit",
    excerpt:
      "A practical, step-by-step checklist for separating real factories from trading companies and brokers — including the documents to ask for and the red flags to watch out for.",
    category: "Supplier Verification",
    readTime: "7 min read",
    date: "2026-07-12",
    body: [
      "The fastest way to lose money in China is to wire a deposit to a company that does not actually manufacture the product. The trading company may have a website, an Alibaba listing, and even a booth at the Canton Fair — and still not own a single production line.",
      "Here is the verification process we run on every new supplier before we recommend them to a client.",
      "1. Ask for the business license. Any Chinese company has a unified social credit code that you can verify on the National Enterprise Credit Information Publicity System. Cross-check the registered address, the legal representative, and the paid-in capital.",
      "2. Visit the address. A real factory has a workshop with machinery, raw material inventory, and workers. A trading company has an office with desks, sample shelves, and meeting rooms. Both can be legitimate — the question is which one you are paying for.",
      "3. Check the export history. Ask for a list of the last twelve months' export shipments with destination countries and approximate volumes. Cross-check the HS codes and the bill of lading numbers if you can.",
      "4. Ask for a reference customer. A real factory will give you a reference. Email the reference, ask about lead time, quality consistency, and what happens when something goes wrong.",
      "5. Run a third-party audit. If the order value justifies it, pay for a SMETA, BSCI, or our internal audit. The audit is paid by you and reported to you; the factory should not see the report before it is filed.",
      "Red flags: a registered address that is a residential apartment, a paid-in capital of less than RMB 100,000, an export history that is all re-exports, a refusal to share reference customers, and a price that is materially below the rest of the market.",
    ],
  },
  {
    slug: "understanding-aql-inspections",
    title: "Understanding AQL inspections: a guide for overseas buyers",
    excerpt:
      "What AQL really means, how to choose the right sampling level, and how to use the inspection report to decide whether to ship.",
    category: "Quality Control",
    readTime: "9 min read",
    date: "2026-06-28",
    body: [
      "AQL stands for Acceptable Quality Level. It is a statistical sampling system defined in ISO 2859-1 (and the older MIL-STD-105E). It is the most widely used sampling standard in consumer goods inspection.",
      "An AQL inspection does not tell you the quality of the entire production lot. It tells you, with a defined statistical confidence, whether the sample you inspect is likely to represent a lot that meets your quality bar.",
      "The three AQL levels you will see most often are: 1.0 for major defects, 2.5 for minor defects, and 0 (or 4.0) for critical defects. A critical defect is one that is unsafe, illegal, or would cause a recall — and any single critical defect in the sample means the lot fails.",
      "Choosing the right AQL is a business decision. A 1.0 AQL means a stricter inspection and a higher chance of a lot failing. A 2.5 AQL is the consumer goods default. A 4.0 AQL is reasonable for low-cost, low-risk items.",
      "When you receive an inspection report, look at three numbers: the lot size, the sample size, and the accept / reject number. The accept number is the maximum number of defects allowed in the sample for the lot to pass. If the inspector finds more, the lot fails and you have a decision to make: rework, sort, re-inspect, or accept with a discount.",
    ],
  },
  {
    slug: "fob-vs-cif-vs-ddp",
    title: "FOB vs CIF vs DDP: choosing the right incoterm for your first PO",
    excerpt:
      "How to think about the three most common incoterms for buyers new to China, and which one is the right starting point for a first purchase order.",
    category: "Shipping & Logistics",
    readTime: "6 min read",
    date: "2026-06-10",
    body: [
      "An incoterm defines who is responsible for the goods at each stage of the journey, and who pays for what. For a buyer new to China, the three incoterms you will see most often are FOB, CIF, and DDP.",
      "FOB Shanghai means the seller is responsible for the goods until they are loaded onto the vessel at the port of Shanghai. From that point, the buyer takes over: ocean freight, insurance, import customs, and last-mile delivery.",
      "CIF Your Port means the seller pays for ocean freight and insurance to your destination port. The buyer is still responsible for import customs and last-mile delivery.",
      "DDP Your Warehouse means the seller pays for everything, including import customs and duty. The seller is effectively acting as the importer of record in your country, which is rarely a good idea for a new buyer.",
      "For a first PO, we recommend FOB Shanghai. It gives you control over the freight, the carrier, and the customs broker in your country. It also makes the cost line items transparent: factory price, service fee, inspection fee, freight, duty, and last-mile.",
    ],
  },
  {
    slug: "preparing-spec-sheets",
    title: "How to prepare a specification sheet a Chinese factory can actually build to",
    excerpt:
      "Most first-time sourcing failures start with a vague brief. Here is what to include in your spec sheet so the supplier can quote accurately the first time.",
    category: "Sourcing Process",
    readTime: "8 min read",
    date: "2026-05-22",
    body: [
      "The most common reason a first PO comes back wrong is not a bad factory — it is a vague brief. A Chinese factory will quote against exactly what you wrote, not against what you meant. If the spec is silent on a detail, the factory will fill in the most economical option.",
      "A good spec sheet has four sections: product, materials, packaging, and quality.",
      "Product: include reference photos, a dimensioned drawing (even a hand sketch is fine), and the expected unit weight. Call out any feature that is non-negotiable: a logo placement, a custom color, a particular finish.",
      "Materials: name the material, the grade, and the standard. 'Stainless steel' is not enough. 'SUS 304, 1.2 mm thickness, food-grade' is enough. If the material must meet a regulation (FDA, REACH, RoHS, Prop 65), say so explicitly.",
      "Packaging: define the inner pack, the master carton, the labeling, and the barcode. If the goods are going to Amazon FBA, say so upfront — FBA prep changes the labeling and the palletization rules.",
      "Quality: define the AQL level, the inspection stages (PPI, DPI, PSI), and any third-party test you require. List the certificates you need: CE, FCC, UL, BSCI, SMETA.",
    ],
  },
  {
    slug: "common-quality-defects",
    title: "Five quality defects we see most often in consumer goods",
    excerpt:
      "Color shade, surface finish, dimensional tolerance, packaging integrity, and labeling accuracy. Why they happen, and what to do about them.",
    category: "Quality Control",
    readTime: "5 min read",
    date: "2026-05-05",
    body: [
      "After more than a decade of running pre-shipment inspections in China, we see the same five categories of defect over and over. None of them are exotic — they are the boring, recurring issues that quietly cost you margin.",
      "1. Color shade variation. A red box on order 1 is not the same red on order 2 unless the factory uses a Pantone code, a sealed reference sample, and a controlled batch of masterbatch or dye.",
      "2. Surface finish. A matte black plastic part is rarely the same finish from batch to batch. Lock the finish with a reference sample, a finish code, and a photo under standardized lighting.",
      "3. Dimensional tolerance. A ±2 mm tolerance on a 100 mm part is reasonable. A ±2 mm tolerance on a 10 mm part is not. Specify the tolerance per dimension, not as a blanket percentage.",
      "4. Packaging integrity. A master carton that survives a 1.2 m drop test in the lab rarely survives a 1.2 m drop test in the warehouse. Run a drop test on the actual production run, not on a prototype.",
      "5. Labeling accuracy. Wrong barcode, wrong country of origin, missing regulatory mark. These are the defects that get caught at customs, not at inspection — and they are the most expensive to fix.",
    ],
  },
  {
    slug: "consolidation-warehousing",
    title: "Why consolidation matters when you source from multiple factories",
    excerpt:
      "Three factories, three freight quotes, three customs entries. Here is how consolidation turns that into one shipment, one cost line, and one tracking number.",
    category: "Shipping & Logistics",
    readTime: "6 min read",
    date: "2026-04-18",
    body: [
      "Most overseas buyers start by sourcing from one factory, then quickly end up sourcing from three or more: a manufacturer for the main product, a separate supplier for the packaging, and a third for the printed inserts or the gift box.",
      "Without consolidation, that means three separate factory deliveries, three separate freight quotes, three separate export customs declarations, and three separate bill of ladings. The freight cost alone can be 30–50% higher than it needs to be, because each shipment is below the FCL threshold.",
      "Consolidation solves this. We collect the goods from each factory into our Shanghai warehouse, palletize them under a single master packing list, file one export customs declaration, and book one FCL or LCL with a single bill of lading.",
      "The buyer receives one tracking number, one freight invoice, and one customs entry. And because the goods are loaded together, the freight cost per cubic meter is materially lower.",
      "The catch is that consolidation requires a slightly longer lead time: 7–10 days of warehouse buffer to collect, inspect, and palletize. For most buyers, the savings far outweigh the extra week.",
    ],
  },
];

export const STATS = [
  { v: "2014", k: "Operating since" },
  { v: "1,200+", k: "Sourcing projects delivered" },
  { v: "320+", k: "Factories in active network" },
  { v: "98%", k: "On-time inspection report rate" },
];
