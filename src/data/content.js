// Centralized site content. All copy is intentionally practical, not hype.

export const site = {
  brand: "SSourcing China",
  shortBrand: "SSourcing",
  email: "sourcing@ssourcingchina.com",
  phone: "+86 755 8888 8888",
  offices: ["Shenzhen", "Yiwu", "Ningbo"],
}

export const services = [
  {
    id: "sourcing",
    title: "Supplier Sourcing",
    summary:
      "We find 3–5 qualified suppliers per product, not a list of 30 random Alibaba factories.",
    points: [
      "Shortlist based on capability, capacity, certifications and price",
      "Manufacturers only — no trading companies unless you want them",
      "English-speaking account managers at each recommended factory",
    ],
    icon: "search",
  },
  {
    id: "verification",
    title: "Factory Verification",
    summary:
      "On-site audits covering legal status, production lines, capacity, workforce and quality system.",
    points: [
      "Business license, export records and ownership check",
      "Workshop tour, sample room, machine list, QC process",
      "Written audit report with photos within 48 hours",
    ],
    icon: "building",
  },
  {
    id: "inspection",
    title: "Quality Inspection",
    summary:
      "Pre-shipment inspections, during-production checks and pre-production sample approvals.",
    points: [
      "AQL-based sampling, on-site defect recording",
      "Full report with photos and a clear pass / fail verdict",
      "Re-inspection at no extra fee if issues are fixed",
    ],
    icon: "shield",
  },
  {
    id: "production",
    title: "Production Follow-up",
    summary:
      "We sit between you and the factory for the entire production cycle — not just one email.",
    points: [
      "Weekly production status updates with photos",
      "Trouble-shoot delays, material shortages, capacity issues",
      "Final random inspection before goods leave the factory",
    ],
    icon: "clipboard",
  },
  {
    id: "shipping",
    title: "Shipping & Logistics",
    summary:
      "We coordinate freight forwarding, customs documentation and consolidation across vendors.",
    points: [
      "Sea (FCL/LCL), air, express, rail to Europe",
      "Supplier consolidation in our Shenzhen / Yiwu warehouse",
      "Commercial invoice, packing list, COO, certifications",
    ],
    icon: "truck",
  },
  {
    id: "packaging",
    title: "Custom Packaging & Labelling",
    summary:
      "Private label, retail-ready packaging, barcodes, instruction manuals and Amazon FBA prep.",
    points: [
      "Box, insert, label and manual design with the factory",
      "Barcode, UPC, EAN and Amazon FNSKU labels",
      "FBA carton labels, bubble wrap and palletizing per Amazon rules",
    ],
    icon: "package",
  },
]

export const process = [
  {
    step: "01",
    title: "Tell us what you need",
    desc:
      "Send your product spec, target quantity, quality expectations and any must-have certifications. We confirm understanding within 1 business day.",
  },
  {
    step: "02",
    title: "Supplier shortlist & quotes",
    desc:
      "We identify 3–5 vetted manufacturers, request formal quotes and lead times, and share a comparison sheet with pros and cons for each.",
  },
  {
    step: "03",
    title: "Sampling & factory audit",
    desc:
      "We coordinate paid samples, run an on-site audit if needed, and recommend the strongest 1–2 suppliers based on your priorities.",
  },
  {
    step: "04",
    title: "Negotiation & order placement",
    desc:
      "We help you negotiate price, payment terms (typically 30/70), Incoterms, and put everything in a clear purchase order both sides sign.",
  },
  {
    step: "05",
    title: "Production & QC",
    desc:
      "During-production check at ~30% completion, pre-shipment inspection at ~100%, photo report and approval before any money is released.",
  },
  {
    step: "06",
    title: "Shipping & delivery",
    desc:
      "We book freight (sea / air / rail), prepare export documents, and keep you updated until the goods arrive at your warehouse or port.",
  },
]

export const productCategories = [
  {
    id: "electronics",
    title: "Consumer Electronics & Accessories",
    desc: "Phone accessories, audio devices, smart home, small appliances.",
    items: "Phone cases, chargers, cables, earbuds, smart plugs, LED lighting",
  },
  {
    id: "home-kitchen",
    title: "Home & Kitchen Goods",
    desc: "Houseware, kitchen tools, storage, decor, daily-use items.",
    items: "Cookware, glassware, organizers, bedding, candles, stationery",
  },
  {
    id: "apparel",
    title: "Apparel & Textile Products",
    desc: "Garments, bags, shoes, fabric products for retail and brands.",
    items: "T-shirts, hoodies, dresses, backpacks, hats, workwear",
  },
  {
    id: "beauty",
    title: "Beauty & Personal Care",
    desc: "Skincare, haircare, cosmetics, grooming tools and accessories.",
    items: "Bottles, brushes, combs, jade rollers, packaging, OEM formulas",
  },
  {
    id: "industrial",
    title: "Industrial & Hardware",
    desc: "Tools, fasteners, machinery parts, B2B components and OEM.",
    items: "Hand tools, power tool accessories, fittings, sheet metal, plastic parts",
  },
  {
    id: "packaging",
    title: "Packaging & Print",
    desc: "Custom boxes, labels, bags, paper products and retail packaging.",
    items: "Mailer boxes, kraft bags, sleeves, stickers, manuals, inserts",
  },
  {
    id: "outdoor",
    title: "Outdoor & Sports",
    desc: "Camping, fitness, cycling, water sports and pet products.",
    items: "Tents, yoga mats, dumbbells, pet harnesses, water bottles",
  },
  {
    id: "kids",
    title: "Kids & Baby Products",
    desc: "Toys, baby care, kids' room, school and stationery items.",
    items: "Wooden toys, plush, bibs, sippy cups, coloring sets",
  },
]

export const problems = [
  {
    title: "You can't tell a real factory from a trading company online",
    desc:
      "Many Alibaba listings look identical. We verify business licenses, workshop photos, and ownership so you know who is actually making your product.",
  },
  {
    title: "Quoted prices change after the deposit is paid",
    desc:
      "We lock specs, quantities, Incoterms and pricing in a signed PO before any money moves, and we don't allow unilateral changes.",
  },
  {
    title: "Samples look great, mass production doesn't",
    desc:
      "We run during-production checks at ~30% and pre-shipment inspections at 100% against your approved golden sample and AQL standard.",
  },
  {
    title: "Production slips by 2–4 weeks and nobody tells you",
    desc:
      "We send weekly photo-and-status updates, escalate delays early, and only release the final payment after the goods pass inspection.",
  },
  {
    title: "QC reports you receive are vague or self-written",
    desc:
      "Our inspectors are third-party, on-site, AQL-trained, and use standardized digital reports with timestamped photos and clear pass / fail results.",
  },
  {
    title: "Logistics is a separate headache after production",
    desc:
      "We consolidate from multiple suppliers, handle export docs and ship door-to-door — sea, air or rail — so you only deal with one coordinator.",
  },
]

export const trustPoints = [
  {
    stat: "9+",
    label: "Years sourcing from China",
    desc: "On-the-ground team since 2016 across Shenzhen, Yiwu and Ningbo.",
  },
  {
    stat: "1,200+",
    label: "Vetted supplier network",
    desc: "Manufacturers across 8 major product categories, audited and re-checked.",
  },
  {
    stat: "40+",
    label: "Countries we ship to",
    desc: "Buyers in North America, EU, UK, Australia, Middle East, SEA and Africa.",
  },
  {
    stat: "48h",
    label: "Standard quote turnaround",
    desc: "Sourcing shortlist with pricing and lead times within 1–3 business days.",
  },
]

export const caseStudies = [
  {
    id: "us-kitchenware",
    industry: "Home & Kitchen",
    region: "USA",
    title:
      "Replacing an undependable trading company with a direct kitchenware factory",
    summary:
      "A US DTC brand was missing ship dates by 4 weeks. We re-sourced to a direct manufacturer, renegotiated terms, and recovered the Q4 launch.",
    results: [
      { label: "Lead time", value: "−18%" },
      { label: "Unit cost", value: "−11%" },
      { label: "Defect rate", value: "<1.2%" },
    ],
    services: ["Sourcing", "Factory audit", "PSI", "Shipping"],
  },
  {
    id: "eu-beauty",
    industry: "Beauty & Personal Care",
    region: "EU",
    title:
      "GMP-certified OEM skincare line for a European startup brand",
    summary:
      "We audited 6 cosmetics factories, secured a GMP + ISO 22716 partner, and managed 5 SKUs from formula to first container.",
    results: [
      { label: "SKUs launched", value: "5" },
      { label: "Formulas approved", value: "EU compliant" },
      { label: "Time to market", value: "11 weeks" },
    ],
    services: ["Sourcing", "Audit", "Production", "QC"],
  },
  {
    id: "au-pet",
    industry: "Pet Products",
    region: "Australia",
    title:
      "Consolidating 4 vendors into a single 40HQ for an Amazon FBA seller",
    summary:
      "We replaced 4 separate suppliers with 1 reliable partner for harnesses, leashes, bowls and toys — and shipped one consolidated container to Sydney.",
    results: [
      { label: "Vendors simplified", value: "4 → 1" },
      { label: "Container", value: "40HQ" },
      { label: "On-time delivery", value: "100%" },
    ],
    services: ["Sourcing", "Consolidation", "FBA prep", "Sea freight"],
  },
  {
    id: "uk-electronics",
    industry: "Electronics",
    region: "UK",
    title:
      "CE/UKCA compliant consumer electronics for a UK retailer",
    summary:
      "We sourced a CE/UKCA-ready smart lighting factory, coordinated lab testing, and shipped pre-labelled retail-ready cartons by sea.",
    results: [
      { label: "Test pass rate", value: "100%" },
      { label: "Carton", value: "Retail-ready" },
      { label: "Recalls", value: "0" },
    ],
    services: ["Sourcing", "Compliance", "QC", "Shipping"],
  },
  {
    id: "mea-packaging",
    industry: "Packaging & Print",
    region: "Middle East",
    title:
      "Custom mailer boxes and inserts for a Middle East e-commerce brand",
    summary:
      "We coordinated a printer and a corrugator to deliver custom-branded mailers with paper inserts, in 4 SKUs, with consistent color across batches.",
    results: [
      { label: "SKUs", value: "4" },
      { label: "Color match", value: "ΔE < 2" },
      { label: "Reorder cycle", value: "6 weeks" },
    ],
    services: ["Sourcing", "Sampling", "QC", "Consolidation"],
  },
  {
    id: "africa-apparel",
    industry: "Apparel",
    region: "Africa",
    title:
      "Workwear uniform program for a West African distributor",
    summary:
      "We sourced a BSCI-audited workwear factory, ran size-set sampling, and shipped mixed-SKU container loads with consistent sizing.",
    results: [
      { label: "Audit", value: "BSCI" },
      { label: "Containers", value: "12 / year" },
      { label: "Size variance", value: "±1 cm" },
    ],
    services: ["Sourcing", "Audit", "QC", "Sea freight"],
  },
]

export const homeFaqs = [
  {
    q: "What does a China sourcing agent actually do?",
    a: "We act as your local team in China. That includes finding suppliers, checking they are real factories, requesting and comparing quotes, sending samples, negotiating terms, following production, running quality inspections, and coordinating shipping until goods reach you.",
  },
  {
    q: "How is SSourcing China different from a sourcing platform or a trading company?",
    a: "Platforms list factories you can find yourself. Trading companies add a margin. We're a transparent buying office — you sign the purchase order directly with the factory, you pay the factory directly, and we charge a fixed service fee agreed in advance.",
  },
  {
    q: "Do you only work with large order quantities?",
    a: "No. We handle trial orders (a few hundred units) all the way up to ongoing programs of multiple containers per month. For very small custom orders we may suggest starting with an existing product variant to keep MOQ reasonable.",
  },
  {
    q: "How do you verify a factory is real?",
    a: "We check the business license and export records, visit the workshop in person, take photos of production lines, machinery, warehouse, sample room, and confirm the ownership and key contacts. A written audit report is shared with you.",
  },
  {
    q: "What is a pre-shipment inspection and do I need it?",
    a: "It's a final random check on the finished goods, AQL-based, with photos and a pass / fail verdict, done before the goods leave the factory. For any order above a few hundred units we strongly recommend it — it almost always pays for itself.",
  },
  {
    q: "What are your fees?",
    a: "Most engagements have a flat sourcing / project management fee plus optional per-check fees (e.g. factory audit, inspection). We share a clear fee schedule before we start — no hidden commissions from suppliers.",
  },
  {
    q: "Can you handle Amazon FBA prep and labelling?",
    a: "Yes. We can apply FNSKU labels, polybag, bubble wrap, carton labels and palletize to Amazon's FBA requirements in our Shenzhen warehouse before shipping.",
  },
  {
    q: "What if a problem happens after the goods arrive?",
    a: "We help you document the issue, mediate with the factory, and arrange rework, replacement, or credit where appropriate. We keep inspection reports on file for this reason.",
  },
]

export const blogPosts = [
  {
    id: "how-to-verify-china-factory",
    title: "How to actually verify a Chinese factory before you pay a deposit",
    excerpt:
      "A practical 7-step checklist to confirm a supplier is a real manufacturer with the capacity to deliver your order — not just a polished Alibaba listing.",
    category: "Sourcing",
    readTime: "8 min read",
    date: "2026-06-18",
  },
  {
    id: "psi-explained",
    title: "Pre-shipment inspection explained: AQL, sampling, and what to do with the report",
    excerpt:
      "What a PSI really checks, how AQL sampling works in plain English, and how to use the report to decide whether to ship, rework, or hold the container.",
    category: "Quality",
    readTime: "10 min read",
    date: "2026-05-22",
  },
  {
    id: "fob-vs-exw-vs-ddp",
    title: "FOB vs EXW vs DDP: choosing the right Incoterm when you source from China",
    excerpt:
      "Incoterms determine who pays for what, who owns the risk in transit, and who deals with customs. Here is how to pick the right one for your order.",
    category: "Shipping",
    readTime: "7 min read",
    date: "2026-05-04",
  },
  {
    id: "30-70-payment-terms",
    title: "30/70 payment terms with Chinese factories: how to negotiate them safely",
    excerpt:
      "T/T 30/70 is the standard for a reason. Here is when to use it, when to push for 20/80 or L/C, and how to structure the first order to limit risk.",
    category: "Sourcing",
    readTime: "6 min read",
    date: "2026-04-11",
  },
  {
    id: "amazon-fba-prep-china",
    title: "Amazon FBA prep in China: FNSKU, polybag, carton labels and pallet rules",
    excerpt:
      "The most common reasons FBA shipments get rejected at the warehouse, and how to prep your cartons correctly before they leave the factory.",
    category: "Logistics",
    readTime: "9 min read",
    date: "2026-03-20",
  },
  {
    id: "moq-strategies",
    title: "How to handle MOQ when the factory's minimum is too high for you",
    excerpt:
      "Six practical tactics — from color/SKU negotiation to shared production runs — that bring MOQ down without damaging the relationship.",
    category: "Sourcing",
    readTime: "7 min read",
    date: "2026-02-27",
  },
  {
    id: "red-flags-china-supplier",
    title: "7 red flags in your first conversation with a Chinese supplier",
    excerpt:
      "From vague capacity claims to refusal of a video call — the warning signs we look for in the first 30 minutes of talking to a new factory.",
    category: "Sourcing",
    readTime: "6 min read",
    date: "2026-02-08",
  },
  {
    id: "sea-vs-air-when",
    title: "Sea vs air vs rail from China: when each one actually makes sense",
    excerpt:
      "A simple decision framework for choosing the right mode based on volume, urgency, product type and destination — with rough 2026 cost ranges.",
    category: "Logistics",
    readTime: "8 min read",
    date: "2026-01-15",
  },
  {
    id: "bsci-bsci-audit",
    title: "BSCI, SEDEX and SA8000: which social compliance audit do you actually need?",
    excerpt:
      "If you sell to EU retailers you will be asked for one of these. Here is the difference, the cost, and how to prepare your supplier for it.",
    category: "Compliance",
    readTime: "7 min read",
    date: "2025-12-19",
  },
]
