// Centralized content for SSourcing China.
// Keep tone professional, clear, practical — no exaggerated claims.

export const COMPANY = {
  name: "SSourcing China",
  tagline: "China Sourcing Agent for Global Buyers",
  location: "Shanghai, China",
  founded: 2014,
};

export const SERVICES = [
  {
    id: "sourcing",
    title: "Supplier Sourcing",
    short:
      "Shortlist qualified Chinese manufacturers matched to your product, quantity, and target price.",
    points: [
      "Cross-checked factory database and industry network",
      "Shortlist of 3–5 vetted suppliers per RFQ",
      "Side-by-side capability and pricing comparison",
    ],
    icon: "search",
  },
  {
    id: "verification",
    title: "Factory Verification",
    short:
      "On-site audits to confirm the factory is real, licensed, and capable of your order.",
    points: [
      "Business license and export record check",
      "Production lines, capacity, and workforce review",
      "Photo and video report within 48 hours",
    ],
    icon: "badge-check",
  },
  {
    id: "qc",
    title: "Quality Inspections",
    short:
      "Pre-production, in-line, and pre-shipment inspections based on AQL standards.",
    points: [
      "Inspections aligned with AQL 1.0 / 2.5 / 4.0",
      "Defect pictures, measurements, and corrective actions",
      "Reports delivered within 24 hours of inspection",
    ],
    icon: "shield",
  },
  {
    id: "production",
    title: "Production Follow-up",
    short:
      "Independent monitoring from raw materials to finished goods, with weekly status updates.",
    points: [
      "Raw material and component checks",
      "Production schedule monitoring and milestone reports",
      "Escalation if deadlines or quality slip",
    ],
    icon: "clipboard",
  },
  {
    id: "shipping",
    title: "Shipping & Logistics",
    short:
      "Door-to-door coordination by sea, air, or rail with customs paperwork handled for you.",
    points: [
      "FCL, LCL, air freight, and China–Europe rail",
      "Customs documents: invoice, packing list, certificate of origin",
      "Freight comparison and consolidation options",
    ],
    icon: "truck",
  },
  {
    id: "private-label",
    title: "Private Label & OEM / ODM",
    short:
      "Help you build your own brand: packaging, labels, molds, and design support.",
    points: [
      "Packaging and label sourcing with compliance review",
      "Mold and sample development for new products",
      "Trademark and design reference guidance",
    ],
    icon: "tag",
  },
];

export const PROCESS = [
  {
    step: "01",
    title: "Send Your Sourcing Request",
    body:
      "Share your product specs, target quantity, and destination port. We confirm scope within one working day.",
  },
  {
    step: "02",
    title: "Supplier Shortlist & Quotes",
    body:
      "We identify 3–5 qualified factories, request formal quotations, and send you a comparison sheet.",
  },
  {
    step: "03",
    title: "Sample Development",
    body:
      "We coordinate samples, gather your feedback, and refine specs before any production order.",
  },
  {
    step: "04",
    title: "Factory Verification & PO",
    body:
      "We audit the chosen factory, finalize the purchase order, and arrange the deposit with the supplier.",
  },
  {
    step: "05",
    title: "Production Follow-up & QC",
    body:
      "We monitor production, run inspections at agreed milestones, and share photo / video reports.",
  },
  {
    step: "06",
    title: "Shipping & Delivery",
    body:
      "We book freight, prepare export documents, and follow the cargo until it arrives at your port.",
  },
];

export const PRODUCTS = [
  {
    category: "Consumer Products",
    items: [
      "Electronics accessories",
      "Beauty and personal care",
      "Pet supplies",
      "Kitchen and dining",
      "Sports and outdoor",
    ],
  },
  {
    category: "Home & Garden",
    items: [
      "Furniture and decor",
      "Lighting",
      "Storage and organization",
      "Garden tools",
      "Bedding and bath",
    ],
  },
  {
    category: "Industrial & Hardware",
    items: [
      "Machinery parts",
      "Fasteners and fittings",
      "Tools and equipment",
      "Electrical components",
      "Auto and motorcycle parts",
    ],
  },
  {
    category: "Apparel & Textiles",
    items: [
      "Custom clothing and uniforms",
      "Bags and backpacks",
      "Shoes and accessories",
      "Home textiles",
      "Fabric and trims",
    ],
  },
  {
    category: "Packaging & Print",
    items: [
      "Custom boxes and mailers",
      "Labels and stickers",
      "Paper bags",
      "Bottles and jars",
      "Retail displays",
    ],
  },
  {
    category: "Custom OEM / ODM",
    items: [
      "Product design and prototyping",
      "Mold development",
      "Private label and branding",
      "Compliance and lab testing",
      "Trademark reference guidance",
    ],
  },
];

export const PROBLEMS = [
  {
    title: "Hard to tell if a supplier is real",
    body:
      "Many trading companies pose as factories. We verify licenses, visit sites, and confirm production capability before you commit.",
  },
  {
    title: "Quality drifts between samples and bulk",
    body:
      "We monitor production and run AQL inspections at key milestones so defects are caught before shipment.",
  },
  {
    title: "Communication delays across time zones",
    body:
      "Your dedicated account manager replies within one working day, in English, with clear written records.",
  },
  {
    title: "Logistics and customs feel complicated",
    body:
      "We compare freight options and prepare export documents so your cargo clears customs without surprises.",
  },
  {
    title: "Worried about IP and compliance",
    body:
      "We help you structure NDAs, sign tooling ownership agreements, and run basic compliance checks before production.",
  },
  {
    title: "Small first order, hard to get attention",
    body:
      "We aggregate orders when needed and keep minimum order quantities realistic for new product launches.",
  },
];

export const TRUST = [
  {
    metric: "10+",
    label: "Years sourcing from China",
    detail: "Operating since 2014 with a full-time team on the ground.",
  },
  {
    metric: "1,200+",
    label: "Verified factories in our network",
    detail: "Across consumer, industrial, and OEM product categories.",
  },
  {
    metric: "40+",
    label: "Countries served",
    detail: "Buyers in North America, Europe, Oceania, the Middle East, and Asia.",
  },
  {
    metric: "< 24h",
    label: "Inspection report turnaround",
    detail: "Detailed photo and video QC reports within one working day.",
  },
];

export const CASES = [
  {
    id: "case-homeware",
    title: "Helping a US homeware brand launch a ceramic dinnerware line",
    industry: "Home & Garden",
    region: "USA",
    summary:
      "We sourced a Jingdezhen-area ceramic factory, negotiated mold fees, and ran 3 inspections across a 60-day production cycle.",
    result: "Two container loads delivered on time; defect rate under 1.2%.",
  },
  {
    id: "case-fitness",
    title: "Quality control for a fitness equipment importer",
    industry: "Sports & Outdoor",
    region: "Germany",
    summary:
      "Pre-shipment inspection on a 40ft container of resistance bands and yoga mats, including pull-strength and slip testing.",
    result: "Caught 6% units with weak stitching; supplier reworked the batch before shipment.",
  },
  {
    id: "case-b2b-packaging",
    title: "Reducing lead time for a UK packaging distributor",
    industry: "Packaging & Print",
    region: "United Kingdom",
    summary:
      "Consolidated 4 suppliers into one verified corrugated box factory and arranged weekly consolidation shipments by sea.",
    result: "Lead time cut from 45 days to 28 days; 11% lower freight cost.",
  },
  {
    id: "case-pet",
    title: "Private label development for an Australian pet brand",
    industry: "Pet Supplies",
    region: "Australia",
    summary:
      "Managed OEM development of stainless-steel pet bowls, including tooling, label compliance, and FDA-grade material verification.",
    result: "First PO of 3,000 units delivered in 42 days, ready for retail launch.",
  },
  {
    id: "case-apparel",
    title: "Sourcing custom apparel for a Canadian uniform supplier",
    industry: "Apparel & Textiles",
    region: "Canada",
    summary:
      "Found a mid-sized workwear factory capable of small-batch embroidery runs, with a verified cut-and-sew line and OEKO-TEX certified fabrics.",
    result: "Scaled from a 200-piece pilot to recurring monthly orders within two quarters.",
  },
  {
    id: "case-electronics",
    title: "Verifying an electronics OEM for a Dutch consumer brand",
    industry: "Consumer Electronics",
    region: "Netherlands",
    summary:
      "Conducted a full factory audit including ESD-safe work areas, SMT line capacity, and a working-condition test on a 5% AQL sample of 2,000 units.",
    result: "Audited factory cleared CE/FCC documentation; brand moved to a 12-month supply agreement.",
  },
];

export const FAQ = [
  {
    q: "Where is SSourcing China based?",
    a: "Our operations team is based in Shanghai, with inspectors located across the major manufacturing regions of China including Guangdong, Zhejiang, Jiangsu, Fujian, and Shandong.",
  },
  {
    q: "What is your minimum order quantity requirement?",
    a: "We don't set a minimum order quantity ourselves. The minimum depends on each supplier and product. Where possible, we help negotiate trial orders that are realistic for new buyers and new products.",
  },
  {
    q: "How much does it cost to use your sourcing service?",
    a: "Initial sourcing consultation and supplier shortlists are free. Once you confirm an order, we charge a transparent service fee based on order complexity, plus inspection fees per visit. You receive a written quote before any cost is incurred.",
  },
  {
    q: "How do you verify a factory?",
    a: "We verify business licenses and export history, visit the facility in person, photograph production lines, and confirm workforce size and equipment. Verification reports include photos, videos, and a written checklist.",
  },
  {
    q: "What inspection standards do you use?",
    a: "We follow AQL standards (commonly AQL 1.0, 2.5, or 4.0 depending on your product risk profile). Inspection reports include defect photos, measurements, and corrective action recommendations within 24 hours.",
  },
  {
    q: "Can you handle shipping to my country?",
    a: "Yes. We coordinate FCL and LCL sea freight, air freight, and China–Europe rail. We prepare commercial invoices, packing lists, certificates of origin, and any other documents your customs broker needs.",
  },
  {
    q: "Do you sign NDAs and protect my intellectual property?",
    a: "Yes. We routinely work under NDAs, structure tooling ownership agreements, and advise on trademark and design protection before production begins.",
  },
  {
    q: "How long does a typical sourcing project take?",
    a: "From initial shortlist to first sample, expect 2 to 4 weeks. Full production and shipping usually takes 30 to 60 days depending on product complexity and order size.",
  },
];

export const BLOG_POSTS = [
  {
    id: "post-1",
    title: "How to verify a Chinese factory before placing an order",
    excerpt:
      "A practical checklist for first-time buyers: licenses, export history, production capacity, and on-site verification.",
    date: "2026-05-12",
    readTime: "7 min read",
    tag: "Supplier Verification",
  },
  {
    id: "post-2",
    title: "AQL 1.0 vs 2.5 vs 4.0: choosing the right inspection level",
    excerpt:
      "What the numbers actually mean, when to use each level, and how to write it into your purchase order.",
    date: "2026-04-28",
    readTime: "6 min read",
    tag: "Quality Control",
  },
  {
    id: "post-3",
    title: "Sea, air, or rail from China: how to pick the right mode",
    excerpt:
      "Cost, transit time, reliability, and carbon footprint compared for typical B2B orders between 500 kg and 20 tonnes.",
    date: "2026-04-09",
    readTime: "8 min read",
    tag: "Shipping",
  },
  {
    id: "post-4",
    title: "Five common quality issues with imported consumer electronics",
    excerpt:
      "From cable strain relief to plug certification — what to check before your container leaves the port.",
    date: "2026-03-22",
    readTime: "5 min read",
    tag: "Quality Control",
  },
  {
    id: "post-5",
    title: "Private label from China: what to prepare before you start",
    excerpt:
      "Trademark searches, packaging compliance, and the documents your supplier should send you for sign-off.",
    date: "2026-03-04",
    readTime: "6 min read",
    tag: "OEM / ODM",
  },
  {
    id: "post-6",
    title: "Reading a Chinese factory quotation the right way",
    excerpt:
      "Unit price is only one number. Here's what to look for in tooling, packaging, payment terms, and Incoterms.",
    date: "2026-02-18",
    readTime: "7 min read",
    tag: "Sourcing Basics",
  },
];

export const QUOTE_INTERESTS = [
  "Consumer products",
  "Home & garden",
  "Industrial & hardware",
  "Apparel & textiles",
  "Packaging & print",
  "Custom OEM / ODM",
  "Other",
];