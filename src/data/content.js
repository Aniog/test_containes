import {
  Search,
  ShieldCheck,
  ClipboardCheck,
  Factory,
  Ship,
  PackageCheck,
  FileSearch,
  Truck,
  Boxes,
  Users,
  Globe2,
  Clock,
  BadgeCheck,
  Languages,
  Headphones,
} from "lucide-react"

export const SITE = {
  name: "SSourcing China",
  tagline: "China Sourcing Agent for Global Buyers",
  email: "hello@ssourcingchina.com",
  phone: "+86 755 0000 0000",
  whatsapp: "+86 138 0000 0000",
  address: "Shenzhen, Guangdong, China",
  cta: "Get a Free Sourcing Quote",
}

export const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "How It Works", to: "/how-it-works" },
  { label: "Products We Source", to: "/products" },
  { label: "Case Studies", to: "/case-studies" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" },
]

export const SERVICES = [
  {
    id: "supplier-sourcing",
    icon: Search,
    title: "Supplier Sourcing",
    short: "Find reliable, vetted suppliers matched to your product and budget.",
    description:
      "We search China's manufacturing hubs to shortlist suppliers that match your product specifications, target price, and capacity requirements. You receive a transparent comparison, not a single forced option.",
    points: [
      "Multi-supplier shortlist with factory profiles",
      "Price and MOQ benchmarking",
      "Capability and capacity screening",
      "Verified contact to real factories, not trading shells",
    ],
  },
  {
    id: "factory-verification",
    icon: ShieldCheck,
    title: "Factory Verification",
    short: "On-site audits to confirm a factory is real, capable, and compliant.",
    description:
      "Before you commit, we visit the factory in person to verify it exists, owns its production lines, and meets your quality and compliance expectations. We document everything with photos and a written report.",
    points: [
      "On-site factory audit with photo evidence",
      "Business license and ownership verification",
      "Production capacity and equipment check",
      "Social and quality compliance review",
    ],
  },
  {
    id: "quality-inspection",
    icon: ClipboardCheck,
    title: "Quality Inspection",
    short: "Independent QC checks at every key production stage.",
    description:
      "Our inspectors check your goods during production and before shipment using your specifications and AQL sampling. Issues are caught in China, not after delivery.",
    points: [
      "Pre-production material and sample check",
      "During-production (DUPRO) inspection",
      "Pre-shipment (FRI) inspection with AQL",
      "Detailed report with photos and pass/fail verdict",
    ],
  },
  {
    id: "production-follow-up",
    icon: Factory,
    title: "Production Follow-up",
    short: "We track your order so delays and changes surface early.",
    description:
      "We stay in contact with the factory throughout production, monitor progress against your timeline, and flag risks before they become costly delays. You get regular, honest updates.",
    points: [
      "Production schedule tracking",
      "Weekly progress updates with photos",
      "Early warning on delays or changes",
      "Direct communication with factory management",
    ],
  },
  {
    id: "shipping-coordination",
    icon: Ship,
    title: "Shipping Coordination",
    short: "Consolidation, freight, and export paperwork handled end to end.",
    description:
      "We coordinate consolidation, freight forwarding, and export documentation so your goods move from the factory to your destination port or door with fewer surprises.",
    points: [
      "Cargo consolidation from multiple suppliers",
      "Sea, air, and express freight options",
      "Export customs and documentation",
      "Tracking until delivery",
    ],
  },
  {
    id: "full-service",
    icon: PackageCheck,
    title: "Full Sourcing Service",
    short: "One team managing sourcing through shipping.",
    description:
      "For buyers who want a single point of contact, we manage the entire process from supplier search to final delivery, coordinating every step so you can focus on selling.",
    points: [
      "Dedicated sourcing coordinator",
      "End-to-end project management",
      "Consolidated reporting and invoicing",
      "One accountable partner from order to delivery",
    ],
  },
]

export const PROCESS_STEPS = [
  {
    id: "brief",
    icon: FileSearch,
    step: "01",
    title: "Share Your Requirements",
    description:
      "Tell us about your product, target price, quantity, and timeline. The more detail you share, the more precise our search.",
  },
  {
    id: "sourcing",
    icon: Search,
    step: "02",
    title: "Supplier Search & Shortlist",
    description:
      "We identify and screen candidate factories, then present a shortlist with profiles, prices, and pros and cons for each.",
  },
  {
    id: "verify",
    icon: ShieldCheck,
    step: "03",
    title: "Verify & Audit",
    description:
      "We audit the shortlisted factories on-site, verify their credentials, and confirm they can meet your quality and capacity.",
  },
  {
    id: "sample",
    icon: Boxes,
    step: "04",
    title: "Sample & Negotiate",
    description:
      "We coordinate samples, negotiate price and terms, and help you confirm the right supplier before you commit.",
  },
  {
    id: "produce",
    icon: Factory,
    step: "05",
    title: "Production & QC",
    description:
      "During production we track progress and run quality inspections at key stages, catching issues before shipment.",
  },
  {
    id: "ship",
    icon: Truck,
    step: "06",
    title: "Inspect & Ship",
    description:
      "A final pre-shipment inspection confirms quality, then we coordinate consolidation, freight, and export paperwork to your destination.",
  },
]

export const PRODUCT_CATEGORIES = [
  {
    id: "consumer-electronics",
    name: "Consumer Electronics",
    desc: "Audio devices, accessories, smart home, and small appliances.",
    imgId: "prod-electronics-a1b2c3",
    titleId: "prod-electronics-title",
    descId: "prod-electronics-desc",
  },
  {
    id: "home-living",
    name: "Home & Living",
    desc: "Furniture, kitchenware, decor, and household goods.",
    imgId: "prod-home-d4e5f6",
    titleId: "prod-home-title",
    descId: "prod-home-desc",
  },
  {
    id: "apparel-textiles",
    name: "Apparel & Textiles",
    desc: "Clothing, fabrics, bags, and soft goods.",
    imgId: "prod-apparel-g7h8i9",
    titleId: "prod-apparel-title",
    descId: "prod-apparel-desc",
  },
  {
    id: "hardware-tools",
    name: "Hardware & Tools",
    desc: "Hand tools, fittings, and industrial components.",
    imgId: "prod-hardware-j1k2l3",
    titleId: "prod-hardware-title",
    descId: "prod-hardware-desc",
  },
  {
    id: "beauty-personal-care",
    name: "Beauty & Personal Care",
    desc: "Cosmetics packaging, grooming, and care products.",
    imgId: "prod-beauty-m4n5o6",
    titleId: "prod-beauty-title",
    descId: "prod-beauty-desc",
  },
  {
    id: "outdoor-sports",
    name: "Outdoor & Sports",
    desc: "Gear, fitness equipment, and outdoor accessories.",
    imgId: "prod-outdoor-p7q8r9",
    titleId: "prod-outdoor-title",
    descId: "prod-outdoor-desc",
  },
  {
    id: "packaging-printing",
    name: "Packaging & Printing",
    desc: "Custom packaging, labels, and printed materials.",
    imgId: "prod-packaging-s1t2u3",
    titleId: "prod-packaging-title",
    descId: "prod-packaging-desc",
  },
  {
    id: "promotional-gifts",
    name: "Promotional & Gifts",
    desc: "Branded merchandise and corporate gifts.",
    imgId: "prod-promo-v4w5x6",
    titleId: "prod-promo-title",
    descId: "prod-promo-desc",
  },
]

export const PROBLEMS = [
  {
    icon: Users,
    title: "Unreliable suppliers",
    description:
      "Factories that overpromise on price or capacity and underdeliver on quality and timing.",
  },
  {
    icon: ShieldCheck,
    title: "No way to verify factories",
    description:
      "You cannot travel to China to confirm a factory is real, capable, and compliant.",
  },
  {
    icon: ClipboardCheck,
    title: "Quality surprises after delivery",
    description:
      "Defects discovered only when goods arrive, when fixing them is expensive or impossible.",
  },
  {
    icon: Clock,
    title: "Silent production delays",
    description:
      "No visibility into production progress until a deadline is already missed.",
  },
  {
    icon: Ship,
    title: "Shipping and customs complexity",
    description:
      "Consolidation, freight, and export paperwork that are hard to manage from abroad.",
  },
  {
    icon: Languages,
    title: "Language and culture gaps",
    description:
      "Miscommunication with factories that leads to wrong specs, materials, or finishes.",
  },
]

export const TRUST_POINTS = [
  {
    icon: Globe2,
    stat: "12+",
    label: "Years sourcing from China",
  },
  {
    icon: Factory,
    stat: "1,500+",
    label: "Factories screened",
  },
  {
    icon: PackageCheck,
    stat: "3,000+",
    label: "Inspections completed",
  },
  {
    icon: Users,
    stat: "400+",
    label: "Buyers served worldwide",
  },
]

export const TRUST_FEATURES = [
  {
    icon: BadgeCheck,
    title: "On-the-ground in China",
    description:
      "Our team is based in Shenzhen and visits factories in person across major manufacturing hubs.",
  },
  {
    icon: ShieldCheck,
    title: "Independent and transparent",
    description:
      "We work for you, not the factory. We report what we actually see, with photos and written records.",
  },
  {
    icon: Headphones,
    title: "Clear, responsive communication",
    description:
      "You get a dedicated coordinator who replies in your time zone and keeps you informed at every step.",
  },
  {
    icon: FileSearch,
    title: "Documented every step",
    description:
      "Audit reports, inspection reports, and progress updates are delivered in writing with evidence.",
  },
]

export const CASE_STUDIES = [
  {
    id: "electronics-startup",
    slug: "consumer-electronics-startup",
    client: "Consumer Electronics Startup",
    location: "United States",
    category: "Consumer Electronics",
    challenge:
      "A US startup needed a reliable factory for a new audio accessory but had no way to verify suppliers found online and had been burned by a trading company posing as a manufacturer.",
    approach:
      "We shortlisted four factories, audited each on-site, and confirmed only two were genuine manufacturers with the right equipment. We coordinated samples, negotiated MOQ, and ran pre-shipment inspection.",
    result:
      "The buyer placed a first order with a verified factory, reduced defect rate to under 1.5%, and launched on schedule.",
    imgId: "case-electronics-y7z8a9",
    titleId: "case-electronics-title",
    descId: "case-electronics-desc",
  },
  {
    id: "home-brand",
    slug: "home-goods-brand-expansion",
    client: "Home Goods Brand",
    location: "Germany",
    category: "Home & Living",
    challenge:
      "A German home brand wanted to expand its kitchenware line but struggled with inconsistent quality across shipments and silent production delays.",
    approach:
      "We introduced during-production and pre-shipment inspections, set clear AQL standards with the factory, and provided weekly progress updates with photos.",
    result:
      "Defect complaints dropped significantly, delivery predictability improved, and the brand expanded to two additional product lines with the same factory.",
    imgId: "case-home-b1c2d3",
    titleId: "case-home-title",
    descId: "case-home-desc",
  },
  {
    id: "promo-importer",
    slug: "promotional-products-importer",
    client: "Promotional Products Importer",
    location: "United Kingdom",
    category: "Promotional & Gifts",
    challenge:
      "A UK importer sourced branded merchandise from multiple factories and faced high consolidation and shipping costs plus customs paperwork errors.",
    approach:
      "We consolidated cargo from five suppliers, coordinated sea freight, and managed export documentation and labeling.",
    result:
      "The importer cut logistics costs through consolidation and cleared customs without delays on three consecutive orders.",
    imgId: "case-promo-e4f5g6",
    titleId: "case-promo-title",
    descId: "case-promo-desc",
  },
]

export const FAQS = [
  {
    q: "Do you charge buyers for sourcing?",
    a: "We offer a free initial consultation and sourcing quote. Depending on the scope, services are billed as a project fee, a retainer, or an inspection fee per visit. We agree on the structure before any work starts, so there are no surprises.",
  },
  {
    q: "Which products can you source?",
    a: "We work across consumer electronics, home and living, apparel and textiles, hardware, beauty and personal care, outdoor and sports, packaging, and promotional goods. If your product is made in China, we can usually help find and verify a supplier.",
  },
  {
    q: "Can you visit the factory in person?",
    a: "Yes. Our team is based in China and conducts on-site factory audits with photo evidence. This is one of the most effective ways to confirm a supplier is real and capable before you commit.",
  },
  {
    q: "How do you handle quality control?",
    a: "We offer pre-production, during-production (DUPRO), and pre-shipment (FRI) inspections using AQL sampling against your specifications. You receive a detailed report with photos and a clear pass or fail verdict before goods ship.",
  },
  {
    q: "Do you manage shipping and customs?",
    a: "We coordinate consolidation, freight forwarding (sea, air, express), and export documentation from China. Import customs in your country is typically handled by your local forwarder, but we work with them to keep things smooth.",
  },
  {
    q: "How long does the sourcing process take?",
    a: "A typical supplier shortlist takes one to two weeks. Factory audits and samples add another two to four weeks depending on the product and factory responsiveness. Production and shipping timelines depend on your order.",
  },
  {
    q: "Will I communicate directly with the factory?",
    a: "You can. We can introduce you to verified factories directly, or we can act as your coordinator to bridge language and time-zone gaps. Most buyers use a mix of both.",
  },
  {
    q: "What information do you need to start?",
    a: "Product description, target price, estimated quantity, required certifications, and your timeline. The more detail you provide, the faster and more accurate our search will be.",
  },
]

export const BLOG_POSTS = [
  {
    id: "verify-supplier-online",
    slug: "how-to-verify-a-china-supplier-online",
    title: "How to Verify a China Supplier Online Before You Pay",
    excerpt:
      "Online directories are full of trading companies posing as factories. Here is a practical checklist to screen suppliers before you commit.",
    date: "2026-06-18",
    readTime: "6 min read",
    category: "Supplier Verification",
    imgId: "blog-verify-h7i8j9",
    titleId: "blog-verify-title",
    descId: "blog-verify-desc",
  },
  {
    id: "pre-shipment-inspection",
    slug: "what-happens-during-a-pre-shipment-inspection",
    title: "What Actually Happens During a Pre-Shipment Inspection",
    excerpt:
      "A look behind the scenes of an AQL-based final random inspection and why it saves money compared to catching defects after delivery.",
    date: "2026-06-02",
    readTime: "5 min read",
    category: "Quality Control",
    imgId: "blog-inspect-k1l2m3",
    titleId: "blog-inspect-title",
    descId: "blog-inspect-desc",
  },
  {
    id: "consolidate-shipments",
    slug: "why-consolidating-shipments-saves-money",
    title: "Why Consolidating Shipments from Multiple Suppliers Saves Money",
    excerpt:
      "Buying from several factories? Consolidation can cut your per-unit logistics cost significantly. Here is how it works.",
    date: "2026-05-20",
    readTime: "4 min read",
    category: "Shipping",
    imgId: "blog-ship-n4o5p6",
    titleId: "blog-ship-title",
    descId: "blog-ship-desc",
  },
  {
    id: "negotiate-moq",
    slug: "negotiating-moq-with-china-factories",
    title: "Negotiating MOQ with China Factories: A Practical Approach",
    excerpt:
      "Minimum order quantities are often flexible. Here is how to approach the conversation without damaging the relationship.",
    date: "2026-05-05",
    readTime: "5 min read",
    category: "Sourcing",
    imgId: "blog-moq-q7r8s9",
    titleId: "blog-moq-title",
    descId: "blog-moq-desc",
  },
  {
    id: "avoid-quality-surprises",
    slug: "avoiding-quality-surprises-when-importing-from-china",
    title: "Avoiding Quality Surprises When Importing from China",
    excerpt:
      "Most quality disasters are preventable. The key is catching issues during production, not after the container arrives.",
    date: "2026-04-15",
    readTime: "6 min read",
    category: "Quality Control",
    imgId: "blog-quality-t1u2v3",
    titleId: "blog-quality-title",
    descId: "blog-quality-desc",
  },
  {
    id: "choose-sourcing-agent",
    slug: "how-to-choose-a-china-sourcing-agent",
    title: "How to Choose a China Sourcing Agent You Can Trust",
    excerpt:
      "Not all sourcing agents are the same. Here are the questions to ask and the red flags to watch for.",
    date: "2026-03-28",
    readTime: "5 min read",
    category: "Sourcing",
    imgId: "blog-agent-w4x5y6",
    titleId: "blog-agent-title",
    descId: "blog-agent-desc",
  },
]
