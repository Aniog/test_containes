// Centralized content for SSourcing China — keeps copy consistent across pages.

export const COMPANY = {
  name: "SSourcing China",
  tagline: "China Sourcing Agent for Global Buyers",
  email: "info@ssourcing-china.com",
  phone: "+86 21 0000 0000",
  whatsapp: "+86 138 0000 0000",
  address: "Shanghai, China",
  hours: "Mon–Fri, 9:00–18:00 CST (UTC+8)",
  languages: ["English", "Spanish", "French", "German", "Arabic"],
};

export const NAV_LINKS = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/services" },
  { label: "How It Works", path: "/how-it-works" },
  { label: "Products We Source", path: "/products" },
  { label: "Case Studies", path: "/case-studies" },
  { label: "Blog", path: "/blog" },
  { label: "Contact", path: "/contact" },
];

export const SERVICES = [
  {
    id: "supplier-sourcing",
    title: "Supplier Sourcing",
    short: "Identify factories that match your product, quantity, and quality needs.",
    description:
      "We research, shortlist, and pre-qualify Chinese manufacturers based on your specifications, target price, and order volume. You receive a curated list of 3–5 vetted suppliers with profiles, capability, and transparent pricing.",
    bullets: [
      "Supplier research and shortlisting",
      "Pre-qualification on capacity, lead time, and certifications",
      "Side-by-side quotations and terms comparison",
      "Sample coordination and evaluation",
    ],
  },
  {
    id: "factory-verification",
    title: "Factory Verification",
    short: "On-site audits to confirm the factory is real, capable, and compliant.",
    description:
      "Our auditors visit the factory in person to verify business license, production lines, workforce, equipment, and quality management. You receive a written report with photos, scoring, and a clear go/no-go recommendation.",
    bullets: [
      "Business license and registration check",
      "Production capacity and equipment review",
      "Quality management system assessment",
      "Photo-documented audit report",
    ],
  },
  {
    id: "quality-control",
    title: "Quality Control & Inspection",
    short: "Pre-production, in-line, and pre-shipment inspections to your standard.",
    description:
      "We run inspections on the production line and the finished goods before they leave China. Every check follows your AQL and specification, with a clear pass/fail report and photos within 24 hours of the visit.",
    bullets: [
      "Pre-production inspection (PPI)",
      "During-production inspection (DPI)",
      "Pre-shipment inspection (PSI)",
      "Container loading supervision (CLS)",
    ],
  },
  {
    id: "production-follow-up",
    title: "Production Follow-Up",
    short: "Weekly progress updates so you always know where your order stands.",
    description:
      "We stay in close contact with the factory throughout production. You receive scheduled status updates with photos and videos, and we flag risks early so they can be addressed before they become delays or defects.",
    bullets: [
      "Weekly production status reports",
      "Photo and video updates from the line",
      "Risk alerts and corrective action follow-up",
      "Sample approval management (gold samples, lab tests)",
    ],
  },
  {
    id: "shipping-coordination",
    title: "Shipping & Logistics Coordination",
    short: "We arrange sea, air, rail, and express shipping with trusted forwarders.",
    description:
      "From your factory to your warehouse or nominated incoterm, we handle booking, export documentation, customs, and tracking. We compare freight rates and transit times so your goods move on the best option for your timeline and budget.",
    bullets: [
      "Sea, air, rail, and express options",
      "Export documentation and customs support",
      "Cargo insurance on request",
      "Door-to-door or port/port (FOB, CIF, DDP)",
    ],
  },
  {
    id: "sourcing-strategy",
    title: "Sourcing Strategy & Consulting",
    short: "Help with product feasibility, supplier mix, and China market entry.",
    description:
      "Beyond individual orders, we advise on category strategy, supplier consolidation, cost engineering, and risk diversification across regions of China. Useful for new importers, brand owners, and procurement teams.",
    bullets: [
      "Product feasibility and BOM review",
      "Supplier diversification across provinces",
      "Cost-down engineering suggestions",
      "Market entry and category roadmap",
    ],
  },
];

export const PROCESS_STEPS = [
  {
    n: "01",
    title: "Tell us what you need",
    body: "Share your product, target specifications, quantity, destination, and timeline. The more detail, the more accurate our shortlist.",
  },
  {
    n: "02",
    title: "We find and verify suppliers",
    body: "We research candidate factories, request quotations, and verify license, capacity, and capability on-site where appropriate.",
  },
  {
    n: "03",
    title: "Samples and terms",
    body: "We coordinate samples, clarify payment terms and lead times, and present a shortlist with transparent pricing and our recommendation.",
  },
  {
    n: "04",
    title: "Production and QC",
    body: "After you confirm the order, we follow production, run inspections, and keep you updated with photos, videos, and weekly reports.",
  },
  {
    n: "05",
    title: "Shipping and delivery",
    body: "We book freight, prepare export documents, supervise loading, and share tracking until your goods reach their destination.",
  },
];

export const PRODUCTS = [
  {
    category: "Consumer Goods",
    items: ["Home & kitchen products", "Personal care and beauty", "Pet supplies", "Sporting goods", "Toys and games"],
  },
  {
    category: "Apparel & Textiles",
    items: ["Workwear and uniforms", "Fashion apparel and accessories", "Bags and backpacks", "Home textiles and bedding", "Shoes and footwear"],
  },
  {
    category: "Industrial & Hardware",
    items: ["Fasteners and fittings", "Tools and hardware", "Pumps and valves", "Bearings and mechanical parts", "Industrial consumables"],
  },
  {
    category: "Electronics & Components",
    items: ["Consumer electronics accessories", "LED lighting", "Cables and connectors", "PCB and small assemblies", "Smart home devices"],
  },
  {
    category: "Furniture & Home Décor",
    items: ["Indoor and outdoor furniture", "Storage and organization", "Wall décor and mirrors", "Kitchen and tableware", "Lighting fixtures"],
  },
  {
    category: "Packaging & Materials",
    items: ["Custom printed boxes", "Paper and pulp products", "Plastic and molded parts", "Glass and ceramics", "Eco-friendly packaging"],
  },
];

export const PROBLEMS = [
  {
    title: "Hard to find the right factory online",
    body: "Alibaba listings look similar, but real capability varies a lot. We shortlist suppliers we have already verified or audited, not just searched.",
  },
  {
    title: "Quality is not what you expected",
    body: "We inspect against your spec, not the factory's. Pre-shipment inspection with a clear pass/fail report keeps surprises off the dock.",
  },
  {
    title: "Production slips and you only find out at the end",
    body: "Weekly progress updates with photos and videos flag delays while there is still time to recover, not after the container is sealed.",
  },
  {
    title: "Communication is slow or unclear",
    body: "Your dedicated account manager works in your timezone and replies in your language. We translate between you and the factory in writing and on calls.",
  },
  {
    title: "Shipping quotes are confusing and changeable",
    body: "We compare freight options on price, transit time, and reliability, and we handle the documents so the goods actually move on time.",
  },
  {
    title: "Compliance and certifications are unclear",
    body: "We help you identify the right certifications (CE, FCC, RoHS, REACH, ISO) and confirm with the factory before production starts.",
  },
];

export const TRUST_POINTS = [
  { label: "Based in China", value: "On the ground" },
  { label: "Audits per year", value: "500+" },
  { label: "Inspections per year", value: "1,500+" },
  { label: "Languages supported", value: "5+" },
  { label: "Average response", value: "< 1 business day" },
  { label: "Reports within", value: "24 hours" },
];

export const CASE_STUDIES = [
  {
    id: "homeware-us",
    industry: "Home & Kitchen",
    region: "United States",
    summary:
      "A US home goods importer needed a private-label silicone kitchenware line and was burned by quality issues with their previous supplier.",
    approach: [
      "Re-sourced three factories in Guangdong, two with audited capacity",
      "Set up gold sample, lab tests (FDA-grade silicone, LFGB), and packaging spec",
      "Ran DPI at 30% completion and PSI at 95% completion",
    ],
    result:
      "Defect rate dropped from 8% to under 1.2%. Lead time stabilized at 35 days. Buyer placed a 12-month contract after the second order.",
  },
  {
    id: "apparel-eu",
    industry: "Apparel",
    region: "European Union",
    summary:
      "A mid-size EU brand needed a more reliable workwear partner and wanted to consolidate two existing suppliers into one audited factory.",
    approach: [
      "Audited four candidate factories, scored against capacity, certifications, and existing customers",
      "Negotiated consolidated MOQ and multi-style production calendar",
      "Implemented quarterly PSI and monthly production reviews",
    ],
    result:
      "Consolidated to one supplier, reducing unit cost by 9% and cutting inbound inspections from 100% random to AQL-based sampling.",
  },
  {
    id: "electronics-australia",
    industry: "Consumer Electronics",
    region: "Australia",
    summary:
      "An Australian retailer launching a private-label cable range needed CE, RCM, and RoHS compliance, plus reliable DDP shipping.",
    approach: [
      "Matched with two cable factories, one audited and one verified by reference",
      "Coordinated lab testing for CE, RCM, and RoHS before production",
      "Arranged DDP sea freight with consolidation across SKUs",
    ],
    result:
      "First order passed customs in 38 days port-to-door with no compliance rejections. Repeat orders running every 60 days.",
  },
];

export const FAQS = [
  {
    q: "Where are you based and who are your clients?",
    a: "We are a B2B sourcing agent based in Shanghai, China, working with importers, brand owners, and procurement teams in North America, Europe, Australia, the Middle East, and other regions. Our clients range from small businesses placing their first container to established brands with ongoing production.",
  },
  {
    q: "How do you charge for your services?",
    a: "Our fees depend on the services you need. For one-off sourcing we typically charge a flat sourcing fee per project. For ongoing QC and production follow-up, fees are per inspection or per visit. All fees are quoted up-front and there are no hidden commissions taken from the factory.",
  },
  {
    q: "What is a typical order size you work with?",
    a: "We work with both small and large orders, from sample and pilot runs of a few hundred units to full containers and recurring production. Where the order is too small for a factory to take directly, we can help consolidate across suppliers or arrange shared production slots.",
  },
  {
    q: "How do you verify a factory is legitimate?",
    a: "We confirm the business license and registration, check how long the factory has been operating, review production lines and equipment, talk to existing customers where possible, and document the visit with photos and a written report. We do not consider a factory verified until we have seen it in person or had it independently audited.",
  },
  {
    q: "Can you handle the shipping and customs paperwork?",
    a: "Yes. We coordinate with freight forwarders, prepare export documents, and can arrange FOB, CIF, or DDP depending on your needs. We also help with cargo insurance and the paperwork required for your destination country.",
  },
  {
    q: "How fast can you start?",
    a: "Once you send us the inquiry with product details and quantity, we usually send an initial supplier shortlist within 3–5 business days. Factory visits and full audits are typically scheduled within 7–10 business days, depending on location and availability.",
  },
  {
    q: "Do you take commissions from factories?",
    a: "No. We charge our clients directly and we do not take hidden commissions or rebates from suppliers. This keeps our recommendations focused on your requirements rather than on what the factory is willing to pay us.",
  },
  {
    q: "What if there is a quality issue after delivery?",
    a: "We treat claims seriously. With our inspections in place, issues are caught in China, not at your warehouse. If a problem still surfaces, we work with the factory on corrective action, replacement, or credit, and we document the lessons for the next production run.",
  },
];

export const BLOG_POSTS = [
  {
    id: "how-to-verify-china-supplier",
    title: "How to Verify a China Supplier Before You Place an Order",
    excerpt:
      "Practical steps importers can take to confirm a Chinese factory is real, capable, and the right fit — from license checks to a structured on-site audit.",
    category: "Supplier Verification",
    date: "2026-06-12",
    readTime: "8 min read",
  },
  {
    id: "understanding-qc-inspections",
    title: "Understanding QC Inspections: PPI, DPI, and PSI Explained",
    excerpt:
      "When to use pre-production, during-production, and pre-shipment inspections, what each one covers, and how to read the report.",
    category: "Quality Control",
    date: "2026-05-30",
    readTime: "7 min read",
  },
  {
    id: "fob-vs-cif-vs-ddp",
    title: "FOB vs CIF vs DDP: Choosing the Right Shipping Term",
    excerpt:
      "A clear comparison of the most common Incoterms used when shipping from China, with practical examples for small and large importers.",
    category: "Shipping",
    date: "2026-05-15",
    readTime: "6 min read",
  },
  {
    id: "common-sourcing-mistakes",
    title: "Five Common Mistakes First-Time Importers Make in China",
    excerpt:
      "Price-only decisions, unclear specifications, no inspection plan, weak payment terms, and ignoring compliance. How to avoid each one.",
    category: "Sourcing Strategy",
    date: "2026-04-28",
    readTime: "9 min read",
  },
  {
    id: "reading-a-factory-audit-report",
    title: "How to Read a Factory Audit Report",
    excerpt:
      "What to look for in a written factory audit, the sections that matter most, and the red flags that should make you pause.",
    category: "Supplier Verification",
    date: "2026-04-10",
    readTime: "7 min read",
  },
  {
    id: "preparing-samples-approval",
    title: "Preparing Samples and Approvals That Don't Slow You Down",
    excerpt:
      "Why gold samples, lab tests, and packaging approval done in the right order save weeks of production time later.",
    category: "Production",
    date: "2026-03-22",
    readTime: "6 min read",
  },
];
