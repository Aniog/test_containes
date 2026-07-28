import {
  Search,
  ShieldCheck,
  ClipboardCheck,
  Factory,
  Ship,
  PackageCheck,
  FileSearch,
  Users,
  Truck,
  Boxes,
} from "lucide-react"

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "How It Works", to: "/how-it-works" },
  { label: "Products We Source", to: "/products" },
  { label: "Case Studies", to: "/case-studies" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" },
]

export const services = [
  {
    icon: Search,
    title: "Supplier Sourcing",
    desc: "We identify and shortlist reliable manufacturers matched to your product specs, MOQ, and target price across China's industrial hubs.",
    points: ["Targeted supplier search", "Price & MOQ benchmarking", "Shortlist of 3-5 vetted factories"],
  },
  {
    icon: ShieldCheck,
    title: "Factory Verification & Audit",
    desc: "On-site factory audits and business-license verification to confirm a supplier is real, capable, and compliant before you commit.",
    points: ["Business license & legal check", "On-site factory audit", "Capacity & system assessment"],
  },
  {
    icon: ClipboardCheck,
    title: "Quality Inspection (QC)",
    desc: "Independent pre-production, in-line, and pre-shipment inspections against your approved samples and AQL standards.",
    points: ["Pre-shipment inspection (PSI)", "AQL-based sampling", "Detailed photo & video report"],
  },
  {
    icon: Factory,
    title: "Production Follow-Up",
    desc: "We track your order through every milestone and keep production on schedule, flagging risks before they become delays.",
    points: ["Milestone tracking", "Weekly status updates", "Early risk detection"],
  },
  {
    icon: Ship,
    title: "Shipping & Logistics",
    desc: "Consolidation, freight forwarding, and customs documentation coordinated door-to-door by sea, air, or express.",
    points: ["Cargo consolidation", "Sea / air / express freight", "Customs & documentation"],
  },
  {
    icon: PackageCheck,
    title: "Order Management",
    desc: "A single point of contact managing your suppliers, payments, inspections, and shipping so you don't have to.",
    points: ["One dedicated coordinator", "Supplier payment control", "End-to-end visibility"],
  },
]

export const processSteps = [
  {
    icon: FileSearch,
    step: "01",
    title: "Share Your Requirements",
    desc: "Send us product specs, target price, quantity, and timeline. We confirm scope and assign a dedicated sourcing coordinator.",
  },
  {
    icon: Search,
    step: "02",
    title: "Supplier Search & Shortlist",
    desc: "We screen manufacturers across the right industrial clusters and present 3-5 vetted options with quotes and factory profiles.",
  },
  {
    icon: ShieldCheck,
    step: "03",
    title: "Verify & Audit Factories",
    desc: "We verify business licenses and run on-site audits to confirm capacity, quality systems, and working conditions.",
  },
  {
    icon: ClipboardCheck,
    step: "04",
    title: "Sample & Quality Plan",
    desc: "We coordinate sampling, lock specifications, and agree on an AQL-based inspection plan before mass production starts.",
  },
  {
    icon: Factory,
    step: "05",
    title: "Production Follow-Up",
    desc: "We track milestones, send weekly updates, and catch issues early so your order stays on schedule and on spec.",
  },
  {
    icon: ClipboardCheck,
    step: "06",
    title: "Pre-Shipment Inspection",
    desc: "Before goods leave the factory, we inspect against your approved sample and issue a detailed report with photos and video.",
  },
  {
    icon: Ship,
    step: "07",
    title: "Consolidate & Ship",
    desc: "We consolidate cargo, arrange freight by sea, air, or express, and handle documentation and customs clearance.",
  },
  {
    icon: PackageCheck,
    step: "08",
    title: "Deliver & Support",
    desc: "Goods arrive at your door. We provide after-sales support and help resolve any post-delivery issues with the supplier.",
  },
]

export const productCategories = [
  {
    id: "consumer-electronics",
    title: "Consumer Electronics",
    desc: "Audio devices, accessories, smart home gadgets, and small appliances from Shenzhen and Dongguan electronics clusters.",
    imgId: "prod-electronics-3a7c1",
    titleId: "prod-electronics-title",
    descId: "prod-electronics-desc",
  },
  {
    id: "home-living",
    title: "Home & Living",
    desc: "Furniture, kitchenware, home textiles, and decor sourced from Foshan, Shantou, and Ningbo manufacturing bases.",
    imgId: "prod-home-7b2d9",
    titleId: "prod-home-title",
    descId: "prod-home-desc",
  },
  {
    id: "apparel-textiles",
    title: "Apparel & Textiles",
    desc: "Garments, activewear, fabrics, and accessories from Guangzhou, Shaoxing, and Yiwu textile hubs.",
    imgId: "prod-apparel-9f4e2",
    titleId: "prod-apparel-title",
    descId: "prod-apparel-desc",
  },
  {
    id: "promotional-gifts",
    title: "Promotional & Gifts",
    desc: "Custom promotional items, corporate gifts, and branded merchandise from Yiwu and Wenzhou suppliers.",
    imgId: "prod-gifts-2c8a6",
    titleId: "prod-gifts-title",
    descId: "prod-gifts-desc",
  },
  {
    id: "hardware-tools",
    title: "Hardware & Tools",
    desc: "Hand tools, fasteners, fittings, and industrial hardware from Yongkang and Wenzhou hardware clusters.",
    imgId: "prod-hardware-5d1b3",
    titleId: "prod-hardware-title",
    descId: "prod-hardware-desc",
  },
  {
    id: "outdoor-sports",
    title: "Outdoor & Sports",
    desc: "Camping gear, fitness equipment, bicycles, and sporting goods from Zhejiang and Jiangsu manufacturers.",
    imgId: "prod-outdoor-8e6f4",
    titleId: "prod-outdoor-title",
    descId: "prod-outdoor-desc",
  },
]

export const problems = [
  {
    icon: Users,
    title: "Unverified Suppliers",
    desc: "Trading companies posing as factories, fake capacity claims, and inconsistent quality cost buyers time and money.",
  },
  {
    icon: ClipboardCheck,
    title: "Quality Inconsistency",
    desc: "Samples look great, but mass production differs. Without independent inspection, defects ship out unnoticed.",
  },
  {
    icon: Factory,
    title: "Production Delays",
    desc: "No visibility into the factory means missed deadlines and empty shelves. Issues surface only when it's too late.",
  },
  {
    icon: Ship,
    title: "Shipping Complexity",
    desc: "Multiple suppliers, fragmented shipments, confusing documentation, and customs hurdles add cost and risk.",
  },
  {
    icon: Boxes,
    title: "Communication Gaps",
    desc: "Language barriers, time zones, and cultural differences lead to misunderstandings and costly mistakes.",
  },
  {
    icon: Truck,
    title: "Payment Risk",
    desc: "Paying the wrong supplier, the wrong way, or at the wrong time exposes buyers to fraud and non-delivery.",
  },
]

export const trustPoints = [
  { value: "12+", label: "Years sourcing in China" },
  { value: "3,500+", label: "Factories audited" },
  { value: "60+", label: "Countries served" },
  { value: "98%", label: "On-time shipment rate" },
]

export const caseStudies = [
  {
    id: "electronics-retailer",
    client: "European Electronics Retailer",
    industry: "Consumer Electronics",
    challenge:
      "Needed to diversify suppliers for a private-label audio product line but kept encountering trading companies with inconsistent quality.",
    solution:
      "Audited 8 factories in Shenzhen, shortlisted 2 verified manufacturers, and implemented AQL 2.5 pre-shipment inspections.",
    result: "Defect rate cut from 6.2% to 0.8% and lead time reduced by 12 days across the first 4 orders.",
    imgId: "case-electronics-1a2b3",
    titleId: "case-electronics-title",
    descId: "case-electronics-desc",
  },
  {
    id: "home-brand",
    client: "North American Home Brand",
    industry: "Home & Living",
    challenge:
      "Scaling a furniture collection while maintaining quality across multiple suppliers and consolidating shipments.",
    solution:
      "Set up a consolidated shipping program across 5 Foshan suppliers with weekly production tracking and final QC.",
    result: "Landed cost reduced 18% through consolidation and freight optimization with zero rejected shipments.",
    imgId: "case-home-4c5d6",
    titleId: "case-home-title",
    descId: "case-home-desc",
  },
  {
    id: "promo-campaign",
    client: "Global Promotional Agency",
    industry: "Promotional Products",
    challenge:
      "Tight 6-week deadline to source and deliver 50,000 branded corporate gifts for a client event.",
    solution:
      "Split the order across 3 verified Yiwu suppliers, ran parallel production tracking, and air-freighted on schedule.",
    result: "Full order delivered 2 days early with 100% pass rate on pre-shipment inspection.",
    imgId: "case-promo-7e8f9",
    titleId: "case-promo-title",
    descId: "case-promo-desc",
  },
]

export const faqs = [
  {
    q: "What does a China sourcing agent actually do?",
    a: "A sourcing agent acts as your local team in China. We find and verify suppliers, negotiate price and terms, manage sampling, track production, inspect quality before shipment, and coordinate freight and customs. You get one reliable point of contact instead of managing factories directly.",
  },
  {
    q: "How do you charge for your services?",
    a: "We work on a transparent model that may include a sourcing fee, a percentage of order value, or a fixed project fee depending on scope. After we understand your requirements we provide a clear written quote with no hidden costs before any work begins.",
  },
  {
    q: "Do you work with small orders or only large volumes?",
    a: "We support a range of order sizes. For smaller orders we focus on suppliers with reasonable MOQs and can consolidate multiple products into one shipment to keep logistics efficient. Tell us your target quantity and we will advise on feasibility.",
  },
  {
    q: "How do you verify a supplier is a real factory?",
    a: "We verify the business license and registration, check manufacturing capacity and equipment on-site, review quality management systems, and assess working conditions. We document everything with photos and a written audit report you can keep on file.",
  },
  {
    q: "What happens if a pre-shipment inspection fails?",
    a: "If an inspection fails we issue a detailed defect report, negotiate rework or replacement with the factory, and re-inspect before release. You decide whether to accept, rework, or reject. We do not release goods that fail your agreed AQL standard.",
  },
  {
    q: "Can you handle shipping to my country?",
    a: "Yes. We arrange sea freight (FCL and LCL), air freight, and express courier, handle export documentation, and coordinate with your local customs broker for door-to-door delivery to most countries worldwide.",
  },
]

export const blogPosts = [
  {
    id: "verify-supplier-not-trading-company",
    title: "How to Verify a Chinese Supplier Is a Real Factory, Not a Trading Company",
    excerpt:
      "Trading companies have their place, but if you need factory-direct pricing and control, you need to know how to tell them apart. Here is our audit checklist.",
    date: "2026-06-18",
    category: "Supplier Verification",
    readTime: "7 min read",
    imgId: "blog-verify-3f2a1",
    titleId: "blog-verify-title",
    descId: "blog-verify-desc",
  },
  {
    id: "pre-shipment-inspection-guide",
    title: "Pre-Shipment Inspection: What Buyers Should Check Before Goods Leave China",
    excerpt:
      "A practical guide to AQL sampling, common defect categories, and what a good inspection report should contain.",
    date: "2026-06-02",
    category: "Quality Control",
    readTime: "8 min read",
    imgId: "blog-inspection-9c4b7",
    titleId: "blog-inspection-title",
    descId: "blog-inspection-desc",
  },
  {
    id: "freight-options-2026",
    title: "Sea, Air, or Express? Choosing the Right Freight from China in 2026",
    excerpt:
      "Cost, speed, and reliability trade-offs for each mode, plus when consolidation can save you 15-20% on landed cost.",
    date: "2026-05-20",
    category: "Shipping & Logistics",
    readTime: "6 min read",
    imgId: "blog-freight-2d8e5",
    titleId: "blog-freight-title",
    descId: "blog-freight-desc",
  },
  {
    id: "negotiate-moq",
    title: "How to Negotiate MOQ and Price with Chinese Manufacturers",
    excerpt:
      "Practical tactics for reaching workable minimum order quantities and better pricing without damaging the supplier relationship.",
    date: "2026-05-04",
    category: "Sourcing Strategy",
    readTime: "7 min read",
    imgId: "blog-negotiate-7a1c3",
    titleId: "blog-negotiate-title",
    descId: "blog-negotiate-desc",
  },
  {
    id: "avoid-common-sourcing-mistakes",
    title: "7 Common Sourcing Mistakes First-Time Importers Make (and How to Avoid Them)",
    excerpt:
      "From skipping samples to paying the wrong way, these are the mistakes we see most often and how to prevent them.",
    date: "2026-04-15",
    category: "Sourcing Strategy",
    readTime: "9 min read",
    imgId: "blog-mistakes-5b6d2",
    titleId: "blog-mistakes-title",
    descId: "blog-mistakes-desc",
  },
  {
    id: "production-follow-up",
    title: "Why Production Follow-Up Matters More Than You Think",
    excerpt:
      "Weekly milestone tracking catches problems early. Here is what to monitor and the red flags that signal trouble.",
    date: "2026-03-28",
    category: "Production Management",
    readTime: "6 min read",
    imgId: "blog-production-8e3f1",
    titleId: "blog-production-title",
    descId: "blog-production-desc",
  },
]
