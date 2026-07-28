import {
  Search,
  ShieldCheck,
  ClipboardCheck,
  Factory,
  PackageCheck,
  ShipWheel,
  Truck,
  FileText,
  Languages,
  Users,
  Clock,
  Banknote,
  Boxes,
  Smartphone,
  Shirt,
  Wrench,
  Home as HomeIcon,
  Dumbbell,
  Baby,
  PawPrint,
  Car,
  Plug,
  Sprout,
} from "lucide-react"

export const services = [
  {
    id: "supplier-sourcing",
    icon: Search,
    title: "Supplier Sourcing",
    desc: "We identify and shortlist manufacturers that match your product specs, MOQ, and target price across China's industrial clusters.",
    points: ["Pre-screened factory database", "Multiple quotes per request", "Price and MOQ benchmarking"],
  },
  {
    id: "factory-verification",
    icon: ShieldCheck,
    title: "Factory Verification",
    desc: "On-site or desk audits confirm a supplier is a real manufacturer with the capacity, certifications, and legal standing they claim.",
    points: ["Business license & credit checks", "On-site factory audits", "Capacity and certification review"],
  },
  {
    id: "quality-inspection",
    icon: ClipboardCheck,
    title: "Quality Inspection",
    desc: "Independent QC inspections at key milestones catch defects before goods ship, against your approved spec and AQL standards.",
    points: ["Pre-production inspection", "During-production inspection", "Pre-shipment inspection (AQL)"],
  },
  {
    id: "production-follow-up",
    icon: Factory,
    title: "Production Follow-up",
    desc: "We track your order from PO to ex-works, flag delays early, and keep you updated with photos and progress reports.",
    points: ["Production schedule tracking", "Weekly progress updates", "Delay risk early warning"],
  },
  {
    id: "shipping-coordination",
    icon: ShipWheel,
    title: "Shipping Coordination",
    desc: "We consolidate goods, arrange freight forwarding, and manage customs documentation for FCL, LCL, air, and express.",
    points: ["Freight rate comparison", "Cargo consolidation", "Customs & documentation"],
  },
  {
    id: "order-management",
    icon: PackageCheck,
    title: "Order Management",
    desc: "A single point of contact handles POs, payments, sampling, and timelines so you don't juggle multiple suppliers.",
    points: ["PO and payment handling", "Sampling coordination", "End-to-end order visibility"],
  },
]

export const processSteps = [
  {
    id: "step-1",
    icon: FileText,
    step: "01",
    title: "Share Your Requirements",
    desc: "Send us product details, target price, quantity, and timeline. We confirm scope and assign a dedicated sourcing specialist.",
  },
  {
    id: "step-2",
    icon: Search,
    step: "02",
    title: "Supplier Search & Shortlist",
    desc: "We identify qualified factories, collect quotes and samples, and present a shortlist with a clear comparison.",
  },
  {
    id: "step-3",
    icon: ShieldCheck,
    step: "03",
    title: "Verify & Audit Factories",
    desc: "We verify business legitimacy and audit the factory on-site for capacity, quality systems, and compliance.",
  },
  {
    id: "step-4",
    icon: ClipboardCheck,
    step: "04",
    title: "Sample & Quality Control",
    desc: "We coordinate sampling, approve specs, and run inspections at production milestones against AQL standards.",
  },
  {
    id: "step-5",
    icon: Factory,
    step: "05",
    title: "Production Follow-up",
    desc: "We track the production schedule, send progress updates with photos, and flag risks before they become delays.",
  },
  {
    id: "step-6",
    icon: ShipWheel,
    step: "06",
    title: "Inspection & Shipping",
    desc: "Final pre-shipment inspection, consolidation, freight booking, and customs paperwork until goods reach your door.",
  },
]

export const productCategories = [
  { id: "consumer-electronics", icon: Smartphone, title: "Consumer Electronics", desc: "Audio, accessories, smart home devices, and small appliances.", imgId: "prod-electronics-a1b2c3", items: ["Bluetooth audio", "Smart home devices", "Chargers & cables", "Wearables"] },
  { id: "apparel-textiles", icon: Shirt, title: "Apparel & Textiles", desc: "Garments, home textiles, bags, and fashion accessories.", imgId: "prod-apparel-d4e5f6", items: ["Casual garments", "Home textiles", "Bags & wallets", "Fashion accessories"] },
  { id: "hardware-tools", icon: Wrench, title: "Hardware & Tools", desc: "Hand tools, fasteners, fittings, and industrial hardware.", imgId: "prod-hardware-g7h8i9", items: ["Hand tools", "Fasteners & fittings", "Workshop equipment", "Industrial hardware"] },
  { id: "home-goods", icon: HomeIcon, title: "Home & Kitchen", desc: "Kitchenware, decor, storage, and household products.", imgId: "prod-home-j1k2l3", items: ["Kitchenware", "Home decor", "Storage & organization", "Household items"] },
  { id: "sports-fitness", icon: Dumbbell, title: "Sports & Fitness", desc: "Equipment, accessories, and outdoor gear.", imgId: "prod-sports-m4n5o6", items: ["Fitness equipment", "Yoga & training gear", "Outdoor equipment", "Sports accessories"] },
  { id: "baby-products", icon: Baby, title: "Baby & Kids", desc: "Toys, nursery, and children's products with safety compliance.", imgId: "prod-baby-p7q8r9", items: ["Toys & games", "Nursery items", "Feeding accessories", "Children's apparel"] },
  { id: "pet-supplies", icon: PawPrint, title: "Pet Supplies", desc: "Pet food, accessories, toys, and grooming products.", imgId: "prod-pet-s1t2u3", items: ["Pet food & treats", "Toys & accessories", "Grooming products", "Beds & carriers"] },
  { id: "auto-parts", icon: Car, title: "Auto & Parts", desc: "Aftermarket parts, accessories, and motorcycle components.", imgId: "prod-auto-v4w5x6", items: ["Aftermarket parts", "Car accessories", "Motorcycle components", "Tools & gadgets"] },
  { id: "electrical", icon: Plug, title: "Electrical & Lighting", desc: "Lighting, wiring devices, and electrical components.", imgId: "prod-electrical-y7z8a9", items: ["LED lighting", "Wiring devices", "Switches & sockets", "Electrical components"] },
  { id: "eco-products", icon: Sprout, title: "Eco & Sustainable", desc: "Biodegradable, recycled, and reusable sustainable goods.", imgId: "prod-eco-b1c2d3", items: ["Biodegradable goods", "Recycled materials", "Reusable products", "Sustainable packaging"] },
  { id: "general-merchandise", icon: Boxes, title: "General Merchandise", desc: "Promotional items, gifts, and a wide range of consumer goods.", imgId: "prod-general-e4f5g6", items: ["Promotional items", "Gifts & novelties", "Seasonal products", "Everyday consumer goods"] },
]

export const problems = [
  {
    id: "p1",
    icon: ShieldCheck,
    title: "Unverified Suppliers",
    problem: "Trading companies posing as factories, or suppliers that disappear after deposit.",
    solution: "We verify business licenses, audit factories on-site, and only shortlist manufacturers we'd trust with our own orders.",
  },
  {
    id: "p2",
    icon: ClipboardCheck,
    title: "Inconsistent Quality",
    problem: "Samples look great, but mass production arrives with defects or wrong specs.",
    solution: "Approved spec sheets and AQL-based inspections at pre-production, during-production, and pre-shipment milestones.",
  },
  {
    id: "p3",
    icon: Languages,
    title: "Communication Barriers",
    problem: "Time zones, language gaps, and slow responses cause misunderstandings and delays.",
    solution: "Bilingual specialists act as your single point of contact, translating requirements and following up in writing.",
  },
  {
    id: "p4",
    icon: Clock,
    title: "Production Delays",
    problem: "Suppliers go quiet and deadlines slip without warning.",
    solution: "We track production schedules, request weekly photo updates, and flag delay risks early so you can plan.",
  },
  {
    id: "p5",
    icon: Banknote,
    title: "Hidden Costs",
    problem: "Unexpected charges for tooling, packaging, rework, or freight eat into margins.",
    solution: "Transparent cost breakdowns upfront, negotiated terms, and freight rate comparison before you commit.",
  },
  {
    id: "p6",
    icon: Truck,
    title: "Shipping Complexity",
    problem: "Coordinating multiple suppliers, consolidation, and customs paperwork is overwhelming.",
    solution: "We consolidate cargo, book freight (FCL/LCL/air/express), and handle documentation door to door.",
  },
]

export const trustPoints = [
  { id: "t1", value: "12+", label: "Years sourcing from China" },
  { id: "t2", value: "3,000+", label: "Suppliers screened" },
  { id: "t3", value: "40+", label: "Countries served" },
  { id: "t4", value: "98%", label: "Inspection pass rate on first run" },
]

export const trustFeatures = [
  { id: "tf1", icon: Users, title: "Dedicated Sourcing Specialist", desc: "One bilingual contact who knows your project from start to finish." },
  { id: "tf2", icon: ShieldCheck, title: "Independent QC", desc: "Inspections done by our team, not the supplier, against your spec." },
  { id: "tf3", icon: FileText, title: "Transparent Reporting", desc: "Written quotes, audit reports, and photo updates you can rely on." },
  { id: "tf4", icon: Banknote, title: "No Hidden Markups", desc: "Clear service fees and factory prices shared openly with you." },
]

export const caseStudies = [
  {
    id: "cs-electronics",
    title: "Electronics Brand Cuts Defect Rate by 70%",
    industry: "Consumer Electronics",
    location: "USA",
    summary: "A DTC electronics brand was losing margin to returns from a supplier with inconsistent soldering quality.",
    challenge: "The buyer sourced directly and had no on-site QC. Defect rates reached 8% on arrival, driving returns and reviews complaints.",
    approach: "We audited two alternative factories, moved production to a verified manufacturer, and introduced AQL 2.5 pre-shipment inspections with photo reports.",
    result: "Defect rate dropped to under 2.5%, returns fell by 70%, and the brand relaunched a key product line on schedule.",
    metrics: [
      { value: "70%", label: "Fewer returns" },
      { value: "2.5%", label: "Final defect rate" },
      { value: "3 wks", label: "Faster re-launch" },
    ],
    imgId: "case-electronics-h7i8j9",
  },
  {
    id: "cs-apparel",
    title: "Apparel Retailer Secures First On-time Season",
    industry: "Apparel & Textiles",
    location: "UK",
    summary: "A mid-size retailer consistently missed seasonal launch windows due to production delays and poor communication.",
    challenge: "Multiple suppliers across regions with no central coordination meant the buyer spent weeks chasing updates and still shipped late.",
    approach: "We consolidated orders under one coordinator, set milestone-based production tracking, and ran during-production inspections to keep factories accountable.",
    result: "The full seasonal collection shipped two weeks early, and the retailer hit their launch date for the first time in three years.",
    metrics: [
      { value: "2 wks", label: "Early delivery" },
      { value: "100%", label: "On-time launch" },
      { value: "1", label: "Single coordinator" },
    ],
    imgId: "case-apparel-k1l2m3",
  },
  {
    id: "cs-hardware",
    title: "Hardware Importer Saves 18% on Landed Cost",
    industry: "Hardware & Tools",
    location: "Germany",
    summary: "An importer of hand tools was paying premium freight and dealing with fragmented shipments from five suppliers.",
    challenge: "Five separate LCL shipments per order cycle meant high freight costs, repeated customs paperwork, and frequent short shipments.",
    approach: "We consolidated all suppliers into one weekly container, negotiated freight rates, and standardized packaging to maximize container utilization.",
    result: "Landed cost dropped 18%, customs clearance simplified to one filing per cycle, and short-shipment complaints stopped.",
    metrics: [
      { value: "18%", label: "Lower landed cost" },
      { value: "5 to 1", label: "Shipments per cycle" },
      { value: "0", label: "Short shipments" },
    ],
    imgId: "case-hardware-n4o5p6",
  },
]

export const faqs = [
  {
    id: "faq-1",
    q: "What does a China sourcing agent actually do?",
    a: "A sourcing agent acts as your local team in China. We find qualified suppliers, verify factories, coordinate samples, run quality inspections, follow production, and arrange shipping. You get a single point of contact instead of managing multiple factories directly.",
  },
  {
    id: "faq-2",
    q: "How do you charge for your services?",
    a: "We work on transparent service fees that depend on the scope of work, such as sourcing only, sourcing plus QC, or full end-to-end management. We share factory prices openly with you and do not add hidden markups. A detailed quote is provided after we understand your requirements.",
  },
  {
    id: "faq-3",
    q: "Do you work with small orders or only large volumes?",
    a: "We work with a range of order sizes. Some suppliers have minimum order quantities (MOQs), and part of our job is finding factories whose MOQ matches your needs. For smaller orders we can also help consolidate multiple products into one shipment.",
  },
  {
    id: "faq-4",
    q: "Can you inspect goods before they ship?",
    a: "Yes. We run independent quality inspections at pre-production, during-production, and pre-shipment stages, using AQL sampling standards. You receive a written report with photos before goods leave the factory.",
  },
  {
    id: "faq-5",
    q: "What happens if a shipment fails inspection?",
    a: "If a pre-shipment inspection finds defects above the agreed AQL limit, we report it to you with details and photos, and work with the factory on rework or replacement. Goods are not released for shipping until they pass inspection or you approve otherwise.",
  },
  {
    id: "faq-6",
    q: "Which shipping methods do you arrange?",
    a: "We coordinate sea freight (FCL and LCL), air freight, and express courier depending on your budget and timeline. We also handle consolidation from multiple suppliers and prepare customs documentation.",
  },
  {
    id: "faq-7",
    q: "How long does the sourcing process take?",
    a: "It depends on the product and complexity. A first round of supplier shortlists and quotes is typically ready within 5-10 business days. Sampling, production, and shipping timelines vary and are confirmed in your project plan.",
  },
  {
    id: "faq-8",
    q: "Do you sign NDAs and protect my product ideas?",
    a: "Yes. We can sign a mutual NDA before you share product details, and we work with suppliers under confidentiality terms to protect your designs and IP.",
  },
]

export const blogPosts = [
  {
    id: "blog-verify-supplier",
    title: "How to Verify a Chinese Supplier Before You Pay a Deposit",
    excerpt: "A practical checklist for confirming a factory is real, capable, and trustworthy before you commit funds.",
    category: "Supplier Verification",
    date: "2026-07-12",
    readTime: "6 min read",
    imgId: "blog-verify-q1r2s3",
  },
  {
    id: "blog-aql-inspection",
    title: "AQL Sampling Explained: What Acceptable Quality Limits Mean for Your Order",
    excerpt: "Understand the inspection standard behind pre-shipment QC and how to set the right tolerance for your products.",
    category: "Quality Control",
    date: "2026-06-28",
    readTime: "5 min read",
    imgId: "blog-aql-t4u5v6",
  },
  {
    id: "blog-fcl-lcl",
    title: "FCL vs LCL: Choosing the Right Sea Freight for Your Shipment",
    excerpt: "When it makes sense to book a full container versus sharing one, and how consolidation affects your landed cost.",
    category: "Shipping",
    date: "2026-06-10",
    readTime: "7 min read",
    imgId: "blog-fcl-w7x8y9",
  },
  {
    id: "blog-avoid-delays",
    title: "Five Common Causes of Production Delays in China (and How to Prevent Them)",
    excerpt: "From raw material shortages to holiday blackouts, here's what slows orders down and what to do about it.",
    category: "Production",
    date: "2026-05-22",
    readTime: "6 min read",
    imgId: "blog-delays-z1a2b3",
  },
  {
    id: "blog-negotiate-price",
    title: "Negotiating Price with Chinese Factories Without Losing the Supplier",
    excerpt: "Tactics for getting to a fair price while keeping the relationship strong enough to deliver quality.",
    category: "Sourcing Strategy",
    date: "2026-05-05",
    readTime: "8 min read",
    imgId: "blog-negotiate-c4d5e6",
  },
  {
    id: "blog-private-label",
    title: "Private Labeling from China: What First-time Importers Should Know",
    excerpt: "From OEM to ODM, packaging to certifications, a starter guide to building your own brand with Chinese manufacturers.",
    category: "Sourcing Strategy",
    date: "2026-04-18",
    readTime: "7 min read",
    imgId: "blog-privatelabel-f7g8h9",
  },
]
