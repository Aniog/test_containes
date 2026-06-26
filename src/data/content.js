// Shared content for the SSourcing China website.
// Tone: professional, clear, practical — no exaggerated claims.

export const SERVICES = [
  {
    id: "sourcing",
    title: "Supplier Sourcing",
    short:
      "Identify factories that actually make your product, not just trading companies that resell it.",
    points: [
      "Category-specific supplier shortlists",
      "Factory vs. trading-company verification",
      "Price, MOQ and lead-time comparison",
    ],
    icon: "search",
  },
  {
    id: "verification",
    title: "Factory Verification",
    short:
      "On-site checks of licenses, capacity, workforce, equipment and export experience before you commit.",
    points: [
      "Business license & export records",
      "Production capacity review",
      "Photo & video audit report",
    ],
    icon: "badgeCheck",
  },
  {
    id: "samples",
    title: "Sample Coordination",
    short:
      "Manage sample requests, technical questions and revisions so you can approve with confidence.",
    points: [
      "Custom sample requests",
      "Pre-production sample approval",
      "Shipping samples to your door",
    ],
    icon: "package",
  },
  {
    id: "quality",
    title: "Quality Inspection",
    short:
      "Independent QC at pre-production, during production (DUPRO) and pre-shipment (PSI) using AQL standards.",
    points: [
      "AQL-based inspections",
      "Detailed photo & defect reports",
      "Corrective action follow-up",
    ],
    icon: "clipboardCheck",
  },
  {
    id: "production",
    title: "Production Follow-up",
    short:
      "Weekly progress updates with photos so you always know where your order stands.",
    points: [
      "Production schedule tracking",
      "Weekly photo updates",
      "Issue escalation & resolution",
    ],
    icon: "gantt",
  },
  {
    id: "shipping",
    title: "Shipping & Logistics",
    short:
      "Compare sea, air and express options and coordinate pickup, customs documents and final delivery.",
    points: [
      "Sea / air / express quotations",
      "Customs & export documents",
      "Door-to-door delivery coordination",
    ],
    icon: "ship",
  },
]

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Tell us what you need",
    body:
      "Share your product specifications, target quantity, timeline and any suppliers you've already spoken with. The more detail, the better.",
  },
  {
    step: "02",
    title: "We shortlist qualified factories",
    body:
      "Within 3–5 business days we send you a shortlist of 3–5 verified factories with prices, MOQs, lead times and our recommendation.",
  },
  {
    step: "03",
    title: "Samples & negotiation",
    body:
      "We coordinate samples, gather your feedback, negotiate terms on your behalf and confirm the supplier you'd like to proceed with.",
  },
  {
    step: "04",
    title: "Production with QC",
    body:
      "After the deposit, we monitor production, schedule inspections at the right milestones and share photo reports with you.",
  },
  {
    step: "05",
    title: "Shipping & delivery",
    body:
      "Once the final inspection passes, we arrange shipping, prepare export documents and coordinate delivery to your warehouse or port.",
  },
]

export const PRODUCT_CATEGORIES = [
  {
    slug: "consumer-electronics",
    title: "Consumer Electronics",
    body:
      "Accessories, smart-home devices, audio gear and small appliances from audited electronics factories.",
    imgId: "sourcingElectronicsLine1f7e",
    imgAlt: "Electronics assembly line in a Chinese factory",
  },
  {
    slug: "textiles-apparel",
    title: "Textiles & Apparel",
    body:
      "Garments, home textiles and technical fabrics — including fabric mills, cutting rooms and finished-goods lines.",
    imgId: "sourcingTextileMill6a2b",
    imgAlt: "Textile mill in China producing fabric rolls",
  },
  {
    slug: "home-goods",
    title: "Home & Kitchen Goods",
    body:
      "Furniture, kitchenware, décor and storage solutions with practical MOQs and consistent quality.",
    imgId: "sourcingFurnitureWorkshop4d8c",
    imgAlt: "Furniture workshop with finished pieces",
  },
  {
    slug: "home-appliances",
    title: "Home Appliances",
    body:
      "Small and large appliances from CE / UL certified factories with mature export documentation experience.",
    imgId: "sourcingHomeAppliances8e3f",
    imgAlt: "Home appliances factory line",
  },
  {
    slug: "packaging",
    title: "Packaging & Print",
    body:
      "Custom boxes, labels, paper bags and rigid packaging — including tooling, sampling and mass production.",
    imgId: "sourcingPackagingLine2c9a",
    imgAlt: "Packaging production line in China",
  },
  {
    slug: "outdoor-sports",
    title: "Outdoor & Sports",
    body:
      "Camping gear, fitness equipment and sports accessories — built to spec and tested for real-world use.",
    imgId: "sourcingOutdoorGear7b1d",
    imgAlt: "Outdoor gear factory floor",
  },
  {
    slug: "beauty-personal-care",
    title: "Beauty & Personal Care",
    body:
      "Skincare, haircare and grooming products from GMP-audited manufacturers, with formula support on request.",
    imgId: "sourcingBeautyProducts5f6e",
    imgAlt: "Beauty products manufacturing facility",
  },
  {
    slug: "industrial-parts",
    title: "Industrial Parts & OEM",
    body:
      "CNC machining, sheet metal, plastic injection moulding and OEM components with engineering support.",
    imgId: "sourcingIndustrialParts3a8b",
    imgAlt: "Industrial parts being machined in a factory",
  },
]

export const PROBLEMS = [
  {
    problem: "Trading companies posing as factories",
    solution:
      "We confirm factory ownership, licenses and on-site production before you commit to a single sample.",
  },
  {
    problem: "Hidden costs that appear after the deposit",
    solution:
      "We collect detailed quotations (tooling, packaging, inspection, certificates) and put them in writing up front.",
  },
  {
    problem: "Inconsistent product quality",
    solution:
      "Pre-shipment inspections using AQL standards catch defects before goods leave the factory.",
  },
  {
    problem: "Production delays with no visibility",
    solution:
      "Weekly photo updates and milestone tracking so you know exactly where your order stands.",
  },
  {
    problem: "Confusing shipping options and documents",
    solution:
      "We compare sea / air / express, prepare export paperwork and coordinate door-to-door delivery.",
  },
  {
    problem: "Communication gaps and time-zone issues",
    solution:
      "A single English-speaking point of contact who responds within one business day, China time.",
  },
]

export const TRUST_POINTS = [
  {
    title: "On the ground in China",
    body:
      "A team based in Yiwu with on-site access to factories across Zhejiang, Guangdong, Fujian and Shandong.",
    icon: "mapPin",
  },
  {
    title: "Independent of any factory",
    body:
      "We work for you, not for suppliers. Our shortlists are based on fit, not commissions.",
    icon: "shieldCheck",
  },
  {
    title: "Transparent reporting",
    body:
      "Inspection reports, photo updates and supplier records you can actually read and keep.",
    icon: "fileText",
  },
  {
    title: "Clear, fixed pricing",
    body:
      "Service fees agreed up front. No surprise mark-ups, no hidden percentages added to factory quotes.",
    icon: "circleDollar",
  },
  {
    title: "English-speaking team",
    body:
      "Native-level English correspondence, contracts and reports — no lost-in-translation issues.",
    icon: "languages",
  },
  {
    title: "1-business-day response",
    body:
      "We reply to every inquiry within one working day, China time, Monday through Friday.",
    icon: "clock",
  },
]

export const STATS = [
  { value: "10+ yrs", label: "Sourcing experience" },
  { value: "500+", label: "Verified factories" },
  { value: "30+", label: "Countries served" },
  { value: "98%", label: "On-time shipment rate" },
]

export const CASE_STUDIES = [
  {
    slug: "home-furniture-us-importer",
    title: "Helping a US importer cut lead time on home furniture",
    client: "US home goods importer",
    category: "Home & Kitchen Goods",
    summary:
      "We re-routed the buyer's furniture orders from a slow factory to a verified Yiwu workshop with the same spec, cutting production lead time by 28%.",
    imgId: "sourcingCaseStudyFurniture2d5c",
    imgAlt: "Modern furniture showroom with finished pieces",
    results: [
      "28% shorter production lead time",
      "Maintained the same finish and material spec",
      "Saved approx. 11% on FOB price vs. previous supplier",
    ],
  },
  {
    slug: "consumer-electronics-eu-brand",
    title: "Sourcing certified electronics for an EU retail brand",
    client: "European consumer electronics brand",
    category: "Consumer Electronics",
    summary:
      "We sourced a CE / RoHS compliant factory for a wireless earbuds range and managed two rounds of pre-shipment inspections before bulk delivery.",
    imgId: "sourcingCaseStudyElectronics7e9f",
    imgAlt: "Consumer electronics arranged on retail shelves",
    results: [
      "2 production runs delivered defect-free",
      "CE, RoHS and FCC documentation completed",
      "Container shipping coordinated to Rotterdam",
    ],
  },
  {
    slug: "skincare-startup-australia",
    title: "Building a GMP skincare line for an Australian startup",
    client: "Australian skincare startup",
    category: "Beauty & Personal Care",
    summary:
      "We matched the founder with a GMP-certified manufacturer, supported formula fine-tuning, and ran stability and microbiological tests on three SKUs.",
    imgId: "sourcingCaseStudyBeauty3b6a",
    imgAlt: "Skincare products arranged for a product photo",
    results: [
      "3 SKUs launched within 6 months",
      "GMP audit passed on first visit",
      "Microbiological & stability tests completed",
    ],
  },
]

export const FAQS = [
  {
    q: "Where are you based, and where do your suppliers operate?",
    a: "We are based in Yiwu, Zhejiang, with a sourcing network across Zhejiang, Guangdong, Fujian, Shandong and Jiangsu. For most categories we can identify 3–5 verified factories within 3–5 business days.",
  },
  {
    q: "What does it cost to use your sourcing service?",
    a: "It depends on the scope of the project. After your inquiry we share a fixed-fee proposal in writing — there are no hidden mark-ups on factory prices. Sourcing fees are agreed before we start.",
  },
  {
    q: "How do you verify a factory?",
    a: "We confirm the business license, check export history, visit the facility in person to inspect production capacity, equipment, workforce and quality processes, and document everything in a verification report with photos.",
  },
  {
    q: "Can you handle small trial orders?",
    a: "Yes. Many of our clients start with a low-MOQ trial order so they can validate quality and packaging before scaling up. We'll be honest if a particular product requires a higher MOQ than you'd like.",
  },
  {
    q: "Do you only work with English-speaking buyers?",
    a: "Our client communication, contracts and reports are in English. We also work with buyers in other languages using their preferred channels, but our standard deliverables are in English.",
  },
  {
    q: "What if I already have a supplier I want to keep using?",
    a: "That's fine. We regularly support buyers who already have a supplier but want extra QC, production follow-up, or shipping coordination. We'll only suggest a change if we see a clear, practical reason.",
  },
  {
    q: "How long does a typical project take from inquiry to delivery?",
    a: "From inquiry to first sample usually 2–4 weeks. From sample approval to bulk delivery, typically 30–60 days depending on product complexity, quantity and shipping method.",
  },
  {
    q: "Can you sign an NDA or my supplier code of conduct?",
    a: "Yes. We routinely sign NDAs and supplier codes of conduct before sharing product specifications with factories. Send us your documents with your inquiry and we'll countersign them.",
  },
]

export const TESTIMONIAL = {
  quote:
    "We've worked with a number of agents in China and SSourcing is the first team that actually picked up the phone, sent real photo updates from the factory floor and gave us honest feedback when a supplier wasn't a fit.",
  author: "Operations Lead",
  company: "EU home goods importer",
}