import {
  Search,
  ShieldCheck,
  ClipboardCheck,
  Factory,
  Ship,
  PackageSearch,
  FileCheck,
  Truck,
  Boxes,
  Wrench,
  Shirt,
  Cpu,
  Home as HomeIcon,
  Dumbbell,
  Sprout,
  Languages,
  Clock,
  MapPin,
  Users,
  BadgeCheck,
} from "lucide-react"

export const site = {
  name: "SSourcing China",
  shortName: "SSourcing",
  tagline: "China Sourcing Agent for Global Buyers",
  email: "hello@ssourcingchina.com",
  phone: "+86 755 0000 0000",
  whatsapp: "+86 138 0000 0000",
  address: "Floor 18, Tower B, Kerry Plaza, Futian District, Shenzhen, China",
  hours: "Mon–Fri, 9:00–18:00 (GMT+8)",
}

export const nav = [
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
    id: "supplier-sourcing",
    icon: Search,
    title: "Supplier Sourcing",
    desc: "We identify and shortlist manufacturers that match your product, budget, and volume requirements from our verified network across China.",
    points: ["Targeted supplier shortlist", "Price and MOQ benchmarking", "Factory capability matching"],
  },
  {
    id: "factory-verification",
    icon: ShieldCheck,
    title: "Factory Verification",
    desc: "On-site audits confirm a factory is real, legally registered, and actually capable of producing your order to spec.",
    points: ["Business license and legal checks", "On-site factory audit", "Capacity and equipment review"],
  },
  {
    id: "quality-inspection",
    icon: ClipboardCheck,
    title: "Quality Inspection",
    desc: "Independent QC inspections at key production stages catch defects before goods leave the factory floor.",
    points: ["Pre-production inspection", "During-production inspection", "Pre-shipment inspection (AQL)"],
  },
  {
    id: "production-follow-up",
    icon: Factory,
    title: "Production Follow-Up",
    desc: "We track your order from deposit to delivery, keeping you informed of progress and resolving issues early.",
    points: ["Production schedule tracking", "Weekly status updates", "Issue escalation and resolution"],
  },
  {
    id: "shipping-coordination",
    icon: Ship,
    title: "Shipping Coordination",
    desc: "Consolidation, freight booking, customs documents, and door-to-door delivery handled end to end.",
    points: ["Freight forwarding (sea/air/express)", "Cargo consolidation", "Customs and documentation"],
  },
  {
    id: "order-management",
    icon: FileCheck,
    title: "Order Management",
    desc: "A single point of contact manages suppliers, payments, and milestones so you don't have to chase multiple factories.",
    points: ["Supplier communication", "Payment and milestone control", "Consolidated reporting"],
  },
]

export const process = [
  {
    step: 1,
    title: "Share Your Requirements",
    desc: "Tell us about your product, target price, quantity, and timeline. The more detail you share, the faster we can move.",
  },
  {
    step: 2,
    title: "Supplier Sourcing & Shortlist",
    desc: "We search our network and benchmark 3–5 qualified factories, then send you a transparent comparison of price, MOQ, and capability.",
  },
  {
    step: 3,
    title: "Factory Verification",
    desc: "We audit the shortlisted factories on site, checking legal status, equipment, quality systems, and real production capacity.",
  },
  {
    step: 4,
    title: "Sampling & Quotation",
    desc: "We arrange samples and negotiate final terms, then confirm pricing, specifications, and lead times in writing.",
  },
  {
    step: 5,
    title: "Production & QC",
    desc: "During production we track progress and run inspections at key stages, catching and fixing issues before shipment.",
  },
  {
    step: 6,
    title: "Inspection & Shipping",
    desc: "A pre-shipment inspection confirms quality, then we book freight, handle documents, and coordinate delivery to your door.",
  },
]

export const products = [
  {
    id: "consumer-electronics",
    icon: Cpu,
    title: "Consumer Electronics",
    desc: "Audio devices, accessories, smart home products, and small appliances from Shenzhen and the Pearl River Delta.",
    imgId: "prod-electronics-a1b2c3",
    titleId: "prod-electronics-title",
    descId: "prod-electronics-desc",
  },
  {
    id: "apparel-textiles",
    icon: Shirt,
    title: "Apparel & Textiles",
    desc: "Fashion, activewear, home textiles, and fabrics from established garment clusters in Guangdong and Zhejiang.",
    imgId: "prod-apparel-d4e5f6",
    titleId: "prod-apparel-title",
    descId: "prod-apparel-desc",
  },
  {
    id: "home-goods",
    icon: HomeIcon,
    title: "Home & Kitchen",
    desc: "Kitchenware, homeware, and furniture sourced from specialized manufacturing hubs across China.",
    imgId: "prod-home-g7h8i9",
    titleId: "prod-home-title",
    descId: "prod-home-desc",
  },
  {
    id: "industrial-hardware",
    icon: Wrench,
    title: "Industrial & Hardware",
    desc: "Tools, fittings, fasteners, and mechanical components for B2B and industrial buyers.",
    imgId: "prod-industrial-j1k2l3",
    titleId: "prod-industrial-title",
    descId: "prod-industrial-desc",
  },
  {
    id: "sports-outdoor",
    icon: Dumbbell,
    title: "Sports & Outdoor",
    desc: "Fitness gear, outdoor equipment, and accessories built to buyer specifications and quality standards.",
    imgId: "prod-sports-m4n5o6",
    titleId: "prod-sports-title",
    descId: "prod-sports-desc",
  },
  {
    id: "packaging-printing",
    icon: Boxes,
    title: "Packaging & Printing",
    desc: "Custom packaging, retail displays, and printed materials that meet brand and compliance requirements.",
    imgId: "prod-packaging-p7q8r9",
    titleId: "prod-packaging-title",
    descId: "prod-packaging-desc",
  },
  {
    id: "garden-outdoor",
    icon: Sprout,
    title: "Garden & Outdoor",
    desc: "Garden tools, planters, outdoor decor, and seasonal products from reliable regional suppliers.",
    imgId: "prod-garden-s1t2u3",
    titleId: "prod-garden-title",
    descId: "prod-garden-desc",
  },
  {
    id: "general-merchandise",
    icon: PackageSearch,
    title: "General Merchandise",
    desc: "Promotional products, gifts, and assorted goods sourced and consolidated for global buyers.",
    imgId: "prod-general-v4w5x6",
    titleId: "prod-general-title",
    descId: "prod-general-desc",
  },
]

export const problems = [
  {
    id: "problem-1",
    title: "Suppliers that look real online but aren't",
    desc: "Many listings are trading companies posing as factories, or businesses with no real production capacity. We verify on site before you commit.",
  },
  {
    id: "problem-2",
    title: "Inconsistent product quality",
    desc: "Samples look great, but mass production differs. Our staged inspections catch defects early, when they can still be fixed.",
  },
  {
    id: "problem-3",
    title: "Communication gaps and delays",
    desc: "Time zones, language, and slow replies stall orders. Our bilingual team manages suppliers directly and keeps you updated.",
  },
  {
    id: "problem-4",
    title: "Hidden costs and surprise charges",
    desc: "Unclear quotes lead to cost overruns. We benchmark pricing and lay out all costs up front so there are no surprises.",
  },
  {
    id: "problem-5",
    title: "Shipping and customs complexity",
    desc: "Coordinating freight, documents, and customs across countries is error-prone. We handle consolidation and documentation end to end.",
  },
  {
    id: "problem-6",
    title: "No visibility into production status",
    desc: "You send a deposit and hear nothing for weeks. We track milestones and report progress on a regular schedule.",
  },
]

export const trustPoints = [
  { icon: MapPin, title: "On the ground in China", desc: "Teams in Shenzhen and Yiwu close to the factories and markets that matter." },
  { icon: Languages, title: "Bilingual project managers", desc: "English-speaking PMs manage suppliers so nothing gets lost in translation." },
  { icon: ShieldCheck, title: "Independent QC", desc: "Our inspectors work for you, not the factory, and report what they actually see." },
  { icon: Clock, title: "Regular status updates", desc: "Scheduled progress reports keep you informed from order to delivery." },
  { icon: Users, title: "Verified supplier network", desc: "A pre-screened network of manufacturers built over years of sourcing." },
  { icon: BadgeCheck, title: "Transparent pricing", desc: "Clear quotes with costs broken down, no hidden margins or kickbacks." },
]

export const stats = [
  { value: "12+", label: "Years sourcing in China" },
  { value: "1,200+", label: "Suppliers verified" },
  { value: "40+", label: "Countries shipped to" },
  { value: "98%", label: "Orders pass final QC" },
]

export const caseStudies = [
  {
    id: "case-electronics",
    client: "European Audio Brand",
    industry: "Consumer Electronics",
    challenge: "Needed a reliable OEM for a new line of Bluetooth speakers with strict QC and a tight launch window.",
    solution: "Shortlisted 4 factories, audited 2 on site, ran pre-production and pre-shipment inspections, and coordinated air freight for the first batch.",
    result: "Launch delivered on time with a defect rate under 0.8% across the first 15,000 units.",
    imgId: "case-electronics-img-7y8z9",
    titleId: "case-electronics-title",
    descId: "case-electronics-desc",
    title: "Bluetooth speaker launch delivered on schedule",
    desc: "OEM sourcing, factory audit, and QC for a European audio brand's new product line.",
  },
  {
    id: "case-apparel",
    client: "North American Apparel Retailer",
    industry: "Apparel & Textiles",
    challenge: "Struggled with inconsistent sizing and color matching across multiple garment suppliers.",
    solution: "Consolidated production with one audited factory, set a sealed sample standard, and inspected every shipment against it.",
    result: "Sizing complaints dropped by over 70% and rework costs fell significantly within two seasons.",
    imgId: "case-apparel-img-a1b2c3",
    titleId: "case-apparel-title",
    descId: "case-apparel-desc",
    title: "Consistent sizing across apparel collections",
    desc: "Supplier consolidation and sealed-sample QC for a North American apparel retailer.",
  },
  {
    id: "case-home",
    client: "Middle East Home Goods Distributor",
    industry: "Home & Kitchen",
    challenge: "Wanted to consolidate dozens of SKUs from separate suppliers into single shipments to cut freight cost.",
    solution: "Sourced and consolidated products across regions, managed a consolidation warehouse, and booked consolidated sea freight.",
    result: "Freight cost per unit reduced by roughly a third and lead time stabilized.",
    imgId: "case-home-img-d4e5f6",
    titleId: "case-home-title",
    descId: "case-home-desc",
    title: "Consolidated shipments cut freight cost",
    desc: "Multi-supplier sourcing and cargo consolidation for a home goods distributor.",
  },
]

export const faqs = [
  {
    q: "What is a China sourcing agent and what do you actually do?",
    a: "A sourcing agent acts as your local team in China. We find qualified suppliers, verify factories, inspect quality, follow production, and coordinate shipping so you can buy from China without setting up your own office or relying on a single factory's word.",
  },
  {
    q: "How do you charge for your services?",
    a: "We work on a transparent project or commission basis depending on the scope. After a short briefing we send a clear proposal with all costs laid out, with no hidden margins or supplier kickbacks.",
  },
  {
    q: "Do you work with small orders or only large volumes?",
    a: "We support a range of order sizes. For smaller orders we focus on suppliers with realistic minimums and consolidation to keep freight efficient. Tell us your target quantity and we will advise what is feasible.",
  },
  {
    q: "Can you inspect goods before they ship?",
    a: "Yes. We run pre-production, during-production, and pre-shipment inspections using AQL sampling. You receive a detailed report with photos before any goods leave the factory.",
  },
  {
    q: "Which product categories do you source?",
    a: "Consumer electronics, apparel and textiles, home and kitchen, industrial hardware, sports and outdoor, packaging and printing, garden products, and general merchandise. If your category is not listed, ask us.",
  },
  {
    q: "How long does a typical sourcing project take?",
    a: "Sourcing and shortlisting usually takes 1–2 weeks, sampling 2–4 weeks, and production depends on the product and quantity. We give you a realistic timeline up front and track it throughout.",
  },
  {
    q: "Do you handle shipping and customs?",
    a: "Yes. We coordinate sea, air, and express freight, prepare shipping and customs documents, and can arrange door-to-door delivery to most countries.",
  },
  {
    q: "How do we get started?",
    a: "Send us your product requirements through the inquiry form. We will review them and come back with a short plan and next steps, usually within one business day.",
  },
]

export const blogPosts = [
  {
    id: "blog-verify-supplier",
    title: "How to Verify a Chinese Supplier Before You Pay a Deposit",
    excerpt: "A practical checklist for confirming a factory is real, registered, and capable of producing your order before you commit money.",
    date: "2026-06-18",
    category: "Supplier Verification",
    readTime: "6 min read",
    imgId: "blog-verify-img-e7f8g9",
    titleId: "blog-verify-title",
    descId: "blog-verify-desc",
  },
  {
    id: "blog-qc-inspections",
    title: "Pre-shipment Inspection: What It Checks and Why It Matters",
    excerpt: "Understand what an AQL pre-shipment inspection covers, when to schedule it, and how it protects your order.",
    date: "2026-05-30",
    category: "Quality Control",
    readTime: "5 min read",
    imgId: "blog-qc-img-h1i2j3",
    titleId: "blog-qc-title",
    descId: "blog-qc-desc",
  },
  {
    id: "blog-freight-incoterms",
    title: "Sea vs Air Freight from China: Choosing What Fits Your Order",
    excerpt: "A practical comparison of cost, speed, and reliability for shipping goods from China, with guidance on common Incoterms.",
    date: "2026-05-12",
    category: "Shipping & Logistics",
    readTime: "7 min read",
    imgId: "blog-freight-img-k4l5m6",
    titleId: "blog-freight-title",
    descId: "blog-freight-desc",
  },
  {
    id: "blog-sample-to-mass",
    title: "From Sample to Mass Production: Avoiding the Quality Gap",
    excerpt: "Why mass production often differs from samples, and the controls that keep quality consistent at scale.",
    date: "2026-04-22",
    category: "Quality Control",
    readTime: "6 min read",
    imgId: "blog-sample-img-n7o8p9",
    titleId: "blog-sample-title",
    descId: "blog-sample-desc",
  },
  {
    id: "blog-negotiate-price",
    title: "Negotiating Price with Chinese Factories Without Losing Trust",
    excerpt: "How to push for better pricing while keeping the supplier relationship healthy and the quality intact.",
    date: "2026-04-05",
    category: "Sourcing Strategy",
    readTime: "5 min read",
    imgId: "blog-negotiate-img-q1r2s3",
    titleId: "blog-negotiate-title",
    descId: "blog-negotiate-desc",
  },
  {
    id: "blog-consolidation",
    title: "Cargo Consolidation: Cutting Freight Cost on Multi-Supplier Orders",
    excerpt: "How combining shipments from several factories into one container reduces cost and simplifies logistics.",
    date: "2026-03-19",
    category: "Shipping & Logistics",
    readTime: "6 min read",
    imgId: "blog-consolidation-img-t4u5v6",
    titleId: "blog-consolidation-title",
    descId: "blog-consolidation-desc",
  },
]
