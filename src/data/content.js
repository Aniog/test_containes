// Centralized content for SSourcing China
// All copy for the marketing site lives here so pages stay readable
// and so SEO-relevant text is in one place.

export const COMPANY = {
  name: "SSourcing China",
  tagline: "China Sourcing Agent for Global Buyers",
  shortDescription:
    "A B2B sourcing agent based in China. We help overseas buyers find, verify, inspect, and ship from Chinese factories with clear reporting and predictable costs.",
  foundedYear: 2014,
  headquarters: "Shenzhen, China",
  email: "hello@ssourcing.example.com",
  phone: "+86 755 0000 0000",
  hours: "Mon–Fri, 9:00–18:00 China Standard Time",
  responseTime: "Replies within 24 hours, Mon–Fri",
};

export const NAV = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "How It Works", to: "/how-it-works" },
  { label: "Products We Source", to: "/products" },
  { label: "Case Studies", to: "/case-studies" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" },
];

// ---------- Home page ----------

export const HERO_STATS = [
  { value: "11+", label: "Years sourcing from China" },
  { value: "600+", label: "Verified factory partners" },
  { value: "40+", label: "Countries we ship to" },
  { value: "98%", label: "On-time pre-shipment inspection rate" },
];

export const SERVICES_OVERVIEW = [
  {
    icon: "Search",
    title: "Supplier Sourcing",
    description:
      "We identify qualified Chinese manufacturers for your product, comparing capability, capacity, and commercial terms across 3–5 vetted options.",
    bullets: [
      "RFQ to shortlist in 3–5 working days",
      "Capability & capacity review",
      "Side-by-side quotation comparison",
    ],
  },
  {
    icon: "BadgeCheck",
    title: "Factory Verification",
    description:
      "On-site factory audits covering legal registration, production lines, workforce, quality systems, and export experience.",
    bullets: [
      "Business license & export records",
      "Production line walk-through",
      "Quality management review",
    ],
  },
  {
    icon: "ClipboardCheck",
    title: "Quality Inspection",
    description:
      "Pre-shipment inspections, during-production checks, and pre-production sample approvals aligned to AQL standards.",
    bullets: [
      "DUPRO & pre-shipment inspections",
      "Photographic inspection reports",
      "Defect classification against AQL",
    ],
  },
  {
    icon: "Factory",
    title: "Production Follow-up",
    description:
      "Weekly production updates with photos, milestone tracking, and on-the-ground escalation if schedules slip.",
    bullets: [
      "Weekly status reports",
      "Milestone tracking & escalation",
      "Bilingual communication with factory",
    ],
  },
  {
    icon: "Container",
    title: "Shipping Coordination",
    description:
      "We compare sea, air, and rail freight, book space, arrange export documentation, and coordinate port-to-port or door-to-door.",
    bullets: [
      "FCL, LCL, air & rail options",
      "Customs & export documents",
      "Door-to-door delivery available",
    ],
  },
  {
    icon: "FileSignature",
    title: "Sampling & Negotiation",
    description:
      "Custom sample management, pricing negotiation, payment-term review, and OEM/ODM contract support with the factory.",
    bullets: [
      "Sample consolidation & shipping",
      "Price & MOQ negotiation",
      "OEM / ODM contract review",
    ],
  },
];

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Share your brief",
    description:
      "Send us your product specs, target quantity, destination market, and any compliance requirements. We reply within one business day.",
  },
  {
    step: "02",
    title: "Receive a shortlist",
    description:
      "Within 3–5 working days, we present 3–5 vetted factories with capability notes, indicative pricing, and lead times.",
  },
  {
    step: "03",
    title: "Verify & sample",
    description:
      "We arrange factory audit reports and pre-production samples so you can confirm quality and capacity before committing.",
  },
  {
    step: "04",
    title: "Approve & produce",
    description:
      "Once you approve the factory and sample, we confirm the PO, deposit terms, and a production timeline, then follow up weekly.",
  },
  {
    step: "05",
    title: "Inspect before shipment",
    description:
      "A pre-shipment inspection is run against your quality standard. We share a full photo and video report before release.",
  },
  {
    step: "06",
    title: "Ship & deliver",
    description:
      "We book cargo space, prepare export documents, and coordinate delivery to your port, warehouse, or final address.",
  },
];

export const PRODUCT_CATEGORIES = [
  { id: "consumer-electronics", label: "Consumer Electronics" },
  { id: "home-kitchen", label: "Home & Kitchen" },
  { id: "apparel", label: "Apparel & Textiles" },
  { id: "beauty-personal-care", label: "Beauty & Personal Care" },
  { id: "industrial-equipment", label: "Industrial Equipment" },
  { id: "packaging", label: "Packaging & Print" },
  { id: "sports-outdoor", label: "Sports & Outdoor" },
  { id: "pet-supplies", label: "Pet Supplies" },
  { id: "furniture", label: "Furniture & Storage" },
  { id: "toys-games", label: "Toys & Games" },
  { id: "auto-accessories", label: "Auto Accessories" },
  { id: "stationery", label: "Stationery & Office" },
];

export const PROBLEMS = [
  {
    title: "You cannot tell if the factory is real",
    description:
      "Trading companies often pose as manufacturers. We verify business licenses, visit the production floor, and confirm export history on-site.",
  },
  {
    title: "Quality drifts between samples and bulk",
    description:
      "We lock specifications before production, run in-line checks, and refuse to release shipments that fall outside your approved AQL.",
  },
  {
    title: "Production delays without warning",
    description:
      "Our China-based team tracks milestones weekly and escalates on the ground the moment a deadline is at risk — not after the ship date is missed.",
  },
  {
    title: "Shipping quotes are hard to compare",
    description:
      "We line up sea, air, and rail options with the same origin and destination so you can choose by cost, transit time, and reliability — not guesswork.",
  },
  {
    title: "Communication breaks down in time zones",
    description:
      "You get a single English-speaking account manager who replies within one business day, plus a bilingual coordinator on the factory floor.",
  },
  {
    title: "You are not sure what to put in the contract",
    description:
      "We help structure the purchase order, payment terms, and quality clauses so both sides know exactly what 'acceptable' means before production starts.",
  },
];

export const TRUST_POINTS = [
  {
    icon: "MapPin",
    title: "On the ground in Shenzhen",
    description:
      "Our sourcing team works from Shenzhen, with regional coordinators in Yiwu, Ningbo, and Guangzhou.",
  },
  {
    icon: "FileCheck2",
    title: "Written inspection reports",
    description:
      "Every inspection produces a structured report with photos, defect counts, and pass/fail outcomes you can share with your team.",
  },
  {
    icon: "MessagesSquare",
    title: "One account manager",
    description:
      "You work with a single English-speaking point of contact. No call-center rotation, no hand-offs mid-project.",
  },
  {
    icon: "ShieldCheck",
    title: "Transparent pricing",
    description:
      "Service fees, factory quotes, and freight are itemised. You see the factory price, the inspection cost, and our commission separately.",
  },
];

export const CASE_STUDIES = [
  {
    slug: "us-kitchenware-importer",
    industry: "Home & Kitchen",
    region: "United States",
    headline:
      "Cut defect rate from 7.2% to 1.4% on a stainless-steel cookware line",
    summary:
      "A US-based cookware importer was receiving 7.2% defect rates from their existing supplier. We re-qualified two factories, added a DUPRO check, and rebuilt the inspection checklist around their actual pain points.",
    outcomes: [
      { label: "Defect rate", value: "1.4%" },
      { label: "On-time shipments", value: "98%" },
      { label: "Cost per unit", value: "−6%" },
    ],
  },
  {
    slug: "eu-beauty-brand",
    industry: "Beauty & Personal Care",
    region: "European Union",
    headline:
      "Found a GMP-certified private-label skincare factory in 9 days",
    summary:
      "An EU skincare startup needed a GMP-certified contract manufacturer for a 12-SKU launch. We delivered a shortlist of three audited factories, a sample consolidation, and the first PO within 30 days.",
    outcomes: [
      { label: "Time to shortlist", value: "9 days" },
      { label: "Audited factories", value: "3" },
      { label: "First PO delivered", value: "30 days" },
    ],
  },
  {
    slug: "au-pet-brand",
    industry: "Pet Supplies",
    region: "Australia",
    headline:
      "Reduced LCL freight cost by 22% across four consecutive shipments",
    summary:
      "An Australian pet brand was paying inflated LCL rates through a freight forwarder. We consolidated with a Yiwu-based partner and aligned their PO calendar with sailings, dropping per-shipment costs over four months.",
    outcomes: [
      { label: "Freight cost", value: "−22%" },
      { label: "Sailings aligned", value: "4 of 4" },
      { label: "Lead time", value: "Held flat" },
    ],
  },
];

export const FAQ = [
  {
    q: "What does a China sourcing agent actually do?",
    a: "We act as your local buying office in China. We find suppliers for the products you want, verify their capability in person, manage samples, follow production, run quality inspections, and coordinate shipping to your country. You communicate with one English-speaking account manager; we handle the bilingual work on the ground.",
  },
  {
    q: "How are your fees structured?",
    a: "Most engagements are a flat sourcing fee per project plus optional inspection fees billed per visit. Factory prices and freight are charged at cost and itemised separately. There are no hidden mark-ups on goods or shipping — you see the factory price, the inspection cost, and our service fee as three line items.",
  },
  {
    q: "What is the minimum order quantity (MOQ)?",
    a: "It depends entirely on the product and factory. Many of our consumer-goods partners will start at 300–500 units per SKU, while industrial or custom-tooled products often start higher. We confirm MOQ up front during the shortlist stage so you can decide before sampling.",
  },
  {
    q: "Can you handle OEM or ODM projects?",
    a: "Yes. We regularly run OEM projects where you provide a finished design and ODM projects where the factory's in-house R&D team develops the product to your brief. We help review NDA, mould cost, IP clauses, and sample milestones before any tooling begins.",
  },
  {
    q: "How do you verify a factory is real and not a trading company?",
    a: "We verify the business license on-site, confirm the factory address matches government records, walk the production floor, take dated photos, and check export shipment history. A factory that refuses on-site visits or cannot show its own production line is removed from the shortlist.",
  },
  {
    q: "What quality inspection standard do you use?",
    a: "We follow ISO 2859-1 (AQL) by default, and we align the sampling plan and defect classification to the level you require — usually General II for consumer goods. We can also work to your own inspection checklist if you have one.",
  },
  {
    q: "Do you handle shipping and customs?",
    a: "Yes. We compare sea, air, and rail freight from your factory's city to your destination port, prepare export documents (commercial invoice, packing list, certificate of origin where required), and can coordinate door-to-door delivery including customs clearance.",
  },
  {
    q: "How long does the first order take?",
    a: "A typical first order runs 45–75 days from sample approval to ex-factory, plus 15–40 days of transit depending on your destination and shipping mode. We confirm the production schedule and a realistic ship date in writing before deposit.",
  },
];

// ---------- Services page ----------

export const SERVICES_DETAIL = [
  {
    id: "supplier-sourcing",
    title: "Supplier Sourcing",
    summary:
      "Identify and shortlist qualified Chinese manufacturers for your product category, volumes, and compliance needs.",
    deliverables: [
      "3–5 vetted factory options with capability notes",
      "Side-by-side quotation comparison",
      "Indicative lead times and MOQ per option",
    ],
    icon: "Search",
  },
  {
    id: "factory-verification",
    title: "Factory Verification",
    summary:
      "On-site audit covering legal status, production capacity, workforce, quality systems, and export track record.",
    deliverables: [
      "Business license and export record check",
      "Production line walk-through with photos",
      "Quality management system review",
      "Risk flags and overall recommendation",
    ],
    icon: "BadgeCheck",
  },
  {
    id: "sampling",
    title: "Sampling & Prototyping",
    summary:
      "Custom sample management for OEM and ODM projects, including revision tracking and freight of finished samples to you.",
    deliverables: [
      "Sample specification and revision log",
      "Pre-production sample approval",
      "Consolidated sample shipment to you",
    ],
    icon: "FlaskConical",
  },
  {
    id: "production-followup",
    title: "Production Follow-up",
    summary:
      "Weekly status updates with photos, milestone tracking, and escalation on the ground when deadlines slip.",
    deliverables: [
      "Weekly written status report",
      "Milestone tracking with photos",
      "Direct escalation to factory management",
    ],
    icon: "Factory",
  },
  {
    id: "quality-inspection",
    title: "Quality Inspection",
    summary:
      "Pre-production, during-production (DUPRO), and pre-shipment inspections (PSI) with photographic reports and AQL scoring.",
    deliverables: [
      "Inspection aligned to ISO 2859-1 (AQL)",
      "Photographic and written report",
      "Pass / fail decision before deposit release",
    ],
    icon: "ClipboardCheck",
  },
  {
    id: "shipping",
    title: "Shipping & Logistics",
    summary:
      "Sea, air, and rail freight comparison, booking, export documentation, and optional door-to-door delivery.",
    deliverables: [
      "Mode-by-mode freight comparison",
      "Booking, customs, and export documents",
      "Door-to-door delivery coordination",
    ],
    icon: "Container",
  },
  {
    id: "negotiation",
    title: "Pricing & Contract Negotiation",
    summary:
      "Bilingual support on quotation, payment terms, MOQ, and OEM/ODM contracts with your chosen factory.",
    deliverables: [
      "Bilingual quotation review",
      "Payment term and MOQ negotiation",
      "PO and contract review",
    ],
    icon: "FileSignature",
  },
  {
    id: "compliance",
    title: "Compliance & Lab Testing",
    summary:
      "We coordinate product testing against CE, FCC, FDA, REACH, and other destination-market requirements.",
    deliverables: [
      "Test plan by destination market",
      "Lab booking and report collection",
      "Remediation guidance on failure",
    ],
    icon: "ShieldCheck",
  },
];

// ---------- Blog ----------

export const BLOG_POSTS = [
  {
    slug: "how-to-verify-a-china-factory",
    category: "Supplier Verification",
    title: "How to verify a Chinese factory in 7 steps (and what to ask)",
    excerpt:
      "A practical checklist for importers: business license, export records, production line walk, workforce, and the three questions that expose most trading companies.",
    readTime: "8 min read",
  },
  {
    slug: "understanding-aql-inspections",
    category: "Quality Control",
    title: "AQL 2.5 vs 1.5 vs 4.0: which inspection level fits your product?",
    excerpt:
      "Choosing the right AQL level is not about being strict — it is about matching the cost of a defect to the cost of rejecting a batch. Here is how we think about it.",
    readTime: "6 min read",
  },
  {
    slug: "shipping-from-china-2026",
    category: "Logistics",
    title: "Sea vs air vs rail from China in 2026: cost, time, and reliability",
    excerpt:
      "Freight rates have stabilised, but reliability varies widely by lane. We compare 2026 indicative numbers for FCL, LCL, air freight, and China–Europe rail.",
    readTime: "10 min read",
  },
  {
    slug: "first-order-payment-terms",
    category: "Commercial",
    title: "Safe payment terms for your first China order",
    excerpt:
      "T/T, L/C, OA, D/P — when each makes sense, the deposit splits most factories will accept, and the one clause that protects you if quality is off-spec.",
    readTime: "7 min read",
  },
  {
    slug: "oem-vs-odm-explained",
    category: "Product Development",
    title: "OEM vs ODM from China: which fits your business?",
    excerpt:
      "If you have a finished design, you need OEM. If you need a partner to develop the product, ODM is faster and cheaper — but the IP terms matter.",
    readTime: "6 min read",
  },
  {
    slug: "common-china-sourcing-mistakes",
    category: "Sourcing",
    title: "Six common mistakes first-time importers make in China",
    excerpt:
      "Choosing on price alone, skipping the sample, trusting Alibaba photos, ignoring Incoterms — the recurring patterns we see in failed first orders.",
    readTime: "9 min read",
  },
];
