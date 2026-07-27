// Central site data for SSourcing China

export const COMPANY = {
  name: "SSourcing China",
  tagline: "China Sourcing Agent for Global Buyers",
  description:
    "A professional China-based sourcing partner that helps overseas buyers find reliable suppliers, verify factories, inspect quality, follow production, and coordinate shipping.",
  email: "hello@ssourcing-china.com",
  phone: "+86 21 5555 0188",
  whatsapp: "+86 138 0000 0188",
  address: "Room 1808, Tower B, World Financial Plaza, Pudong, Shanghai 200120, China",
  hours: "Mon-Fri 09:00-18:00 (China Standard Time, GMT+8)",
  socials: {
    linkedin: "https://www.linkedin.com",
    youtube: "https://www.youtube.com",
  },
}

export const NAV_LINKS = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/services" },
  { label: "How It Works", path: "/how-it-works" },
  { label: "Products", path: "/products" },
  { label: "Case Studies", path: "/case-studies" },
  { label: "Blog", path: "/blog" },
  { label: "Contact", path: "/contact" },
]

export const STATS = [
  { value: "12+", label: "Years sourcing from China" },
  { value: "1,800+", label: "Verified supplier network" },
  { value: "47", label: "Countries we ship to" },
  { value: "96%", label: "On-time inspection rate" },
]

export const SERVICES = [
  {
    id: "supplier-sourcing",
    icon: "search",
    title: "Supplier Sourcing",
    short: "Find vetted Chinese manufacturers that match your product, quantity and budget.",
    points: [
      "Targeted factory search across industrial clusters",
      "Cross-check of business license, export history and capacity",
      "Shortlist of 3-5 qualified suppliers with written profiles",
    ],
  },
  {
    id: "factory-verification",
    icon: "shield-check",
    title: "Factory Verification",
    short: "On-site checks of the actual production facility before you commit.",
    points: [
      "Photos and video of the factory floor and warehouse",
      "Verification of equipment, headcount and working conditions",
      "Independent review of certifications (ISO, CE, FDA, etc.)",
    ],
  },
  {
    id: "quality-inspection",
    icon: "clipboard-check",
    title: "Quality Inspection",
    short: "Pre-shipment inspections aligned with AQL standards.",
    points: [
      "During Production (DUPRO) and Pre-Shipment (PSI) checks",
      "Detailed inspection report with photos within 24 hours",
      "On-the-spot corrective instructions to the factory",
    ],
  },
  {
    id: "production-followup",
    icon: "package",
    title: "Production Follow-up",
    short: "We monitor your order from PO to packing, so you do not have to chase updates.",
    points: [
      "Weekly production status updates with photos",
      "Trilingual communication in English, Spanish or French",
      "Escalation path for delays, defects or short shipments",
    ],
  },
  {
    id: "shipping-logistics",
    icon: "ship",
    title: "Shipping & Logistics",
    short: "Sea, air and rail freight coordination with transparent costs.",
    points: [
      "FCL, LCL, air freight and China-Europe rail options",
      "Customs documentation, HS codes and commercial invoices",
      "DDP/DDU shipping available to USA, EU, UK, AU, LATAM",
    ],
  },
  {
    id: "sourcing-consulting",
    icon: "headphones",
    title: "Sourcing Consulting",
    short: "Strategic advice for new and growing importers.",
    points: [
      "Market and product feasibility input",
      "Cost breakdown review and margin modeling",
      "Sample evaluation and supplier benchmarking",
    ],
  },
]

export const PROCESS_STEPS = [
  {
    n: "01",
    title: "Send Your Sourcing Request",
    desc: "Tell us the product, target quantity, quality level and destination market. We confirm scope within 1 business day.",
  },
  {
    n: "02",
    title: "Supplier Shortlist",
    desc: "We identify 3-5 qualified factories from our network and share their profiles, sample pricing and lead times.",
  },
  {
    n: "03",
    title: "Sampling & Negotiation",
    desc: "We coordinate samples, evaluate them with you, and negotiate pricing, payment terms and packaging.",
  },
  {
    n: "04",
    title: "Factory Verification",
    desc: "We visit the chosen factory in person, verify the license, capacity and working conditions, and document everything.",
  },
  {
    n: "05",
    title: "Production & QC",
    desc: "We monitor production, run inline and pre-shipment inspections, and share photo and video reports.",
  },
  {
    n: "06",
    title: "Shipping & Delivery",
    desc: "We arrange freight, customs paperwork and final delivery, then close the loop with you for feedback.",
  },
]

export const PRODUCT_CATEGORIES = [
  {
    id: "consumer-electronics",
    title: "Consumer Electronics",
    desc: "Audio devices, smart home accessories, charging gear and personal electronics from Shenzhen and Dongguan suppliers.",
    examples: ["Bluetooth speakers", "Wireless earbuds", "Smart plugs", "Phone accessories"],
    imgQuery: "consumer electronics factory assembly line",
  },
  {
    id: "home-kitchen",
    title: "Home & Kitchen",
    desc: "Cookware, tableware, storage and small appliances from Yongkang, Jiangmen and Ningbo factories.",
    examples: ["Stainless steel cookware", "Glass storage", "Knife sets", "Air fryers"],
    imgQuery: "kitchen appliances factory production",
  },
  {
    id: "fashion-apparel",
    title: "Fashion & Apparel",
    desc: "Garment, bag, footwear and accessory sourcing from Guangzhou, Quanzhou and Wenzhou production clusters.",
    examples: ["Custom T-shirts", "Leather bags", "Sports shoes", "Hats & caps"],
    imgQuery: "garment factory clothing production line",
  },
  {
    id: "beauty-personal-care",
    title: "Beauty & Personal Care",
    desc: "Skincare, haircare, cosmetics and OEM/ODM manufacturing from Guangzhou and Shanghai certified facilities.",
    examples: ["Skincare OEM", "Hair tools", "Makeup brushes", "Aromatherapy"],
    imgQuery: "cosmetic skincare factory production",
  },
  {
    id: "industrial-equipment",
    title: "Industrial Equipment",
    desc: "Machinery, tools, hardware and components from Jiangsu, Zhejiang and Shandong industrial suppliers.",
    examples: ["Power tools", "Hand tools", "Pumps & valves", "Bearing & fasteners"],
    imgQuery: "industrial machinery factory floor",
  },
  {
    id: "outdoor-sports",
    title: "Outdoor & Sports",
    desc: "Camping gear, fitness equipment and outdoor apparel from Ningbo, Xiamen and Qingdao manufacturers.",
    examples: ["Camping tents", "Yoga mats", "Fishing gear", "Bicycles"],
    imgQuery: "outdoor sports equipment factory",
  },
  {
    id: "kids-baby",
    title: "Kids & Baby Products",
    desc: "Toys, baby care, children's apparel and educational goods from factories with CE, CPC and EN71 compliance.",
    examples: ["Wooden toys", "Baby strollers", "Kids furniture", "Educational kits"],
    imgQuery: "children toys baby products factory",
  },
  {
    id: "packaging-printing",
    title: "Packaging & Printing",
    desc: "Custom boxes, bags, labels, paper products and eco-friendly packaging from coastal printing hubs.",
    examples: ["Custom boxes", "Paper bags", "Labels & stickers", "Eco packaging"],
    imgQuery: "packaging printing factory warehouse",
  },
]

export const PROBLEMS = [
  {
    icon: "alert-triangle",
    title: "You can't tell which supplier is real",
    desc: "Trading companies posing as factories, fake licenses, photoshopped catalogs. We visit the actual production line and document it.",
  },
  {
    icon: "badge-dollar-sign",
    title: "Pricing is unclear or keeps changing",
    desc: "We lock in itemized quotes with bill of materials, then re-check them against the final invoice before you pay the balance.",
  },
  {
    icon: "message-square-warning",
    title: "Communication breaks down mid-order",
    desc: "We assign a dedicated sourcing specialist who replies within one business day, in your time zone, in your language.",
  },
  {
    icon: "package-x",
    title: "Production delays ruin your launch",
    desc: "We run production follow-ups at agreed milestones and escalate early, so you know about issues before they hit your schedule.",
  },
  {
    icon: "search-x",
    title: "Defects show up after the goods land",
    desc: "Pre-shipment inspections aligned to AQL 2.5 catch visible defects before containers leave the port.",
  },
  {
    icon: "truck",
    title: "Shipping quotes are confusing",
    desc: "We compare sea, air and rail freight from multiple forwarders and present transparent options with full cost breakdown.",
  },
]

export const TRUST_POINTS = [
  {
    icon: "map-pin",
    title: "Based in Shanghai since 2013",
    desc: "12+ years on the ground in China, with our own office in Pudong and field staff across 8 manufacturing provinces.",
  },
  {
    icon: "users",
    title: "Bilingual sourcing team",
    desc: "Account managers in Shanghai plus local QC inspectors in Shenzhen, Ningbo, Guangzhou, Yiwu and Qingdao.",
  },
  {
    icon: "file-check",
    title: "Transparent, written reporting",
    desc: "Every factory visit, inspection and production update is delivered as a written report with photos and timestamps.",
  },
  {
    icon: "shield-check",
    title: "Independent, not a trading company",
    desc: "We do not sell products. We work for you, the buyer, and disclose every commission we receive from suppliers.",
  },
  {
    icon: "banknote",
    title: "Clear fee structure",
    desc: "Flat service fees quoted in advance, with no hidden markups on samples, freight or inspection costs.",
  },
  {
    icon: "scale",
    title: "Buyers of all sizes",
    desc: "From first-time importers placing a 1-pallet trial order to brand owners running 40-foot container programs.",
  },
]

export const CASE_STUDIES = [
  {
    id: "us-kitchenware",
    industry: "Home & Kitchen",
    region: "USA",
    headline: "Helping a US cookware brand qualify a 12-piece set in 6 weeks",
    summary:
      "A US DTC cookware brand needed to qualify a stainless steel set for Amazon FBA. We identified two factories in Yongkang, ran tooling samples, and coordinated a pre-shipment inspection that caught a lid-fit issue before the container left Ningbo.",
    results: [
      { label: "Sample-to-approval", value: "6 weeks" },
      { label: "Defect rate at port", value: "0.4%" },
      { label: "Cost vs. first quote", value: "-11%" },
    ],
    imgQuery: "stainless steel cookware factory production line",
  },
  {
    id: "eu-beauty",
    industry: "Beauty & Personal Care",
    region: "EU",
    headline: "Skincare OEM for a French clean-beauty brand",
    summary:
      "A French clean-beauty startup needed an ISO 22716 certified skincare manufacturer for a 5-SKU serum line. We shortlisted four GMP facilities, coordinated stability testing, and managed the entire first production run plus EU-compliant labeling.",
    results: [
      { label: "SKUs in first run", value: "5" },
      { label: "Audit pass", value: "ISO 22716" },
      { label: "Lead time", value: "11 weeks" },
    ],
    imgQuery: "skincare cosmetics laboratory production",
  },
  {
    id: "au-fitness",
    industry: "Sports & Outdoor",
    region: "Australia",
    headline: "Yoga mat program for an Australian fitness retailer",
    summary:
      "An Australian fitness retailer needed an eco-friendly TPE yoga mat at a specific price point. We sourced from a Ningbo factory, validated REACH compliance, and ran three inline inspections before approving the first 5,000-unit shipment.",
    results: [
      { label: "Units ordered", value: "5,000" },
      { label: "Inline inspections", value: "3" },
      { label: "On-time delivery", value: "100%" },
    ],
    imgQuery: "yoga mat factory production eco friendly",
  },
  {
    id: "latam-tools",
    industry: "Industrial Tools",
    region: "LATAM",
    headline: "Power tool sourcing for a Mexican distributor",
    summary:
      "A Mexican hardware distributor wanted to add a private-label cordless drill line. We benchmarked three OEMs, negotiated mold costs, and set up bilingual English-Spanish communication for the buyer's team.",
    results: [
      { label: "OEMs benchmarked", value: "3" },
      { label: "Annual volume", value: "8,000 units" },
      { label: "Communication", value: "EN / ES" },
    ],
    imgQuery: "power tools cordless drill factory",
  },
]

export const FAQS = [
  {
    id: "faq-1",
    question: "Where are you based, and do you work with small orders?",
    answer:
      "We are headquartered in Shanghai with field staff in 8 manufacturing provinces. We work with importers of all sizes, from first-time buyers placing a single pallet trial order to brand owners shipping multiple 40-foot containers per month. The scoping conversation is always free.",
  },
  {
    id: "faq-2",
    question: "How is your service priced?",
    answer:
      "Service fees depend on the scope of work. Supplier sourcing, sample coordination, factory visits, inspections and shipping support are typically quoted as flat fees in advance. We do not add hidden markups on samples, freight or inspection costs, and we disclose any commission paid by suppliers.",
  },
  {
    id: "faq-3",
    question: "Can you visit a factory on my behalf?",
    answer:
      "Yes. Our QC team conducts factory audits, during-production inspections (DUPRO) and pre-shipment inspections (PSI). We issue a written report with photos and a pass/fail recommendation, typically within 24 hours of the visit.",
  },
  {
    id: "faq-4",
    question: "What if I don't know the exact product I want?",
    answer:
      "That's common, especially for first-time importers. Tell us the problem you want the product to solve, your target price and your end market. We can suggest 2-3 product variants, share comparable samples, and help you narrow down before sampling.",
  },
  {
    id: "faq-5",
    question: "How long does the full sourcing process take?",
    answer:
      "For most products, expect 6-10 weeks from initial brief to sample approval, then 30-45 days for production, then 20-40 days for sea freight to the US or EU. Air freight can shorten the final leg to 5-10 days at higher cost.",
  },
  {
    id: "faq-6",
    question: "Do you handle shipping and customs?",
    answer:
      "Yes. We compare rates from multiple freight forwarders for FCL, LCL, air and rail, and we prepare the commercial invoice, packing list, HS codes and other customs documents. We can ship DDP (delivered duties paid) to the US, EU, UK, Canada, Australia and most of LATAM.",
  },
  {
    id: "faq-7",
    question: "Will the factory speak English with me directly?",
    answer:
      "Most Chinese factories have basic English-speaking sales staff, but it is rarely enough for technical or commercial negotiation. We act as your dedicated communication layer, so every email, call and contract clause is reviewed by a native-level English speaker on our team.",
  },
  {
    id: "faq-8",
    question: "What happens if there is a quality issue after delivery?",
    answer:
      "We document any claims with the inspection records, photos and shipping documents, and we work directly with the factory on rework, replacement or credit. Most issues are caught at pre-shipment inspection, but if a defect slips through, we help you negotiate a fair resolution.",
  },
]

export const TESTIMONIALS = [
  {
    quote:
      "SSourcing helped us launch our first Amazon FBA cookware line in under 4 months. The inspection reports were the most detailed I've ever seen from a sourcing agent.",
    name: "Megan W.",
    role: "Founder, US DTC brand",
    industry: "Home & Kitchen",
  },
  {
    quote:
      "We needed a GMP-certified skincare factory and only had 10 weeks. Their team shortlisted four suppliers in 5 days and managed the entire first run end-to-end.",
    name: "Julien R.",
    role: "Operations Director, French beauty brand",
    industry: "Beauty & Personal Care",
  },
  {
    quote:
      "What I appreciate most is that they tell me the truth, including when a factory quote is already good. We trust their numbers and we trust their inspections.",
    name: "Carlos M.",
    role: "Procurement Manager, Mexican distributor",
    industry: "Industrial Tools",
  },
]

export const BLOG_POSTS = [
  {
    id: "post-1",
    category: "Sourcing Strategy",
    title: "How to brief a China sourcing agent (with a free template)",
    excerpt:
      "A good brief saves weeks of back-and-forth. Here is the exact 1-page document we send to our own clients, including the fields that matter most.",
    date: "2026-06-12",
    readTime: "6 min read",
    imgQuery: "sourcing agent factory meeting office",
  },
  {
    id: "post-2",
    category: "Quality Control",
    title: "A practical guide to AQL 2.5 inspections for new importers",
    excerpt:
      "Acceptable Quality Limit (AQL) tables look intimidating, but the logic is simple. We walk through how to choose your sample size and defect tolerance.",
    date: "2026-05-28",
    readTime: "8 min read",
    imgQuery: "quality control inspection factory worker",
  },
  {
    id: "post-3",
    category: "Logistics",
    title: "FCL vs LCL vs air freight: how to pick the right option",
    excerpt:
      "A decision tree for choosing between a full container, a shared container and air freight, based on volume, urgency and product type.",
    date: "2026-05-14",
    readTime: "7 min read",
    imgQuery: "shipping containers port logistics cargo",
  },
  {
    id: "post-4",
    category: "Supplier Verification",
    title: "5 red flags when a Chinese supplier sounds too good",
    excerpt:
      "If the price is 30% below the market, the lead time is impossibly short, and the factory is suspiciously flexible on payment terms, pause.",
    date: "2026-04-30",
    readTime: "5 min read",
    imgQuery: "factory handshake business meeting china",
  },
  {
    id: "post-5",
    category: "Compliance",
    title: "CE, FCC, FDA, CPC: a beginner's map of product compliance",
    excerpt:
      "Which certifications you need depends on the product and the destination market. This guide maps the most common ones for Amazon FBA and retail.",
    date: "2026-04-15",
    readTime: "9 min read",
    imgQuery: "product compliance testing laboratory certificate",
  },
  {
    id: "post-6",
    category: "Cost Optimization",
    title: "What's really in the factory's price (and how to negotiate it)",
    excerpt:
      "We break down a typical ex-works quote into raw materials, labor, overhead, tooling and margin, with practical tips on each line.",
    date: "2026-03-28",
    readTime: "10 min read",
    imgQuery: "factory production cost negotiation meeting",
  },
]
