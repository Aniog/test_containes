import {
  Search,
  ShieldCheck,
  ClipboardCheck,
  Factory,
  PackageCheck,
  ShipWheel,
  FileSearch,
  Users,
  Truck,
} from "lucide-react"

export const services = [
  {
    id: "supplier-sourcing",
    icon: Search,
    title: "Supplier Sourcing & Screening",
    desc: "We identify and shortlist suppliers matched to your product, MOQ, and target price from verified factory networks across China.",
    points: [
      "Targeted supplier search by product category",
      "Price benchmarking across multiple factories",
      "Shortlist of 3–5 qualified candidates",
    ],
  },
  {
    id: "factory-verification",
    icon: ShieldCheck,
    title: "Factory Verification & Audits",
    desc: "On-site or desktop audits confirm a factory is real, capable, and compliant before you commit to an order.",
    points: [
      "Business license & legal entity verification",
      "On-site factory audits with photo report",
      "Production capacity and compliance checks",
    ],
  },
  {
    id: "quality-control",
    icon: ClipboardCheck,
    title: "Quality Control & Inspection",
    desc: "Independent inspections at key production stages catch defects before goods ship, not after they arrive.",
    points: [
      "Pre-production material checks",
      "During-production (DUPRO) inspections",
      "Pre-shipment AQL inspections with report",
    ],
  },
  {
    id: "production-follow-up",
    icon: Factory,
    title: "Production Follow-Up",
    desc: "We track your order from PO to ex-works, keeping schedules on track and surfacing risks early.",
    points: [
      "Production schedule monitoring",
      "Weekly progress updates with photos",
      "Early warning on delays or issues",
    ],
  },
  {
    id: "shipping-coordination",
    icon: ShipWheel,
    title: "Shipping & Logistics Coordination",
    desc: "Consolidation, freight booking, and export documentation handled end-to-end for FOB, CIF, or door-to-door terms.",
    points: [
      "Freight quoting (sea, air, express)",
      "Cargo consolidation from multiple suppliers",
      "Export customs & documentation handling",
    ],
  },
  {
    id: "order-management",
    icon: PackageCheck,
    title: "Order & Supplier Management",
    desc: "A single point of contact across suppliers, so you don't juggle factories, languages, and time zones alone.",
    points: [
      "PO and spec management",
      "Supplier communication in local language",
      "Consolidated reporting across orders",
    ],
  },
]

export const processSteps = [
  {
    id: "step-1",
    no: "01",
    title: "Share Your Sourcing Request",
    desc: "Send product details, specs, target price, and quantity. We review scope and confirm how we can help within one business day.",
  },
  {
    id: "step-2",
    no: "02",
    title: "Supplier Search & Shortlist",
    desc: "We screen our verified network and the broader market to present 3–5 qualified suppliers with quotes and capability notes.",
  },
  {
    id: "step-3",
    no: "03",
    title: "Factory Verification",
    desc: "Selected suppliers are audited on-site or remotely. You receive an audit report with photos and a clear go/no-go recommendation.",
  },
  {
    id: "step-4",
    no: "04",
    title: "Sample & Price Negotiation",
    desc: "We coordinate samples, negotiate price and terms, and lock specifications into a clear purchase order before production.",
  },
  {
    id: "step-5",
    no: "05",
    title: "Production & QC Follow-Up",
    desc: "We monitor the schedule and run inspections at key stages, sending you progress updates with photos throughout production.",
  },
  {
    id: "step-6",
    no: "06",
    title: "Inspection & Shipping",
    desc: "A pre-shipment AQL inspection confirms quality, then we book freight, consolidate cargo, and handle export documentation.",
  },
]

export const productCategories = [
  {
    id: "consumer-electronics",
    title: "Consumer Electronics",
    desc: "Audio devices, accessories, small appliances, and smart home products from vetted electronics hubs in Shenzhen and Dongguan.",
    imgId: "cat-electronics-3f2a1b",
  },
  {
    id: "home-lifestyle",
    title: "Home & Lifestyle",
    desc: "Kitchenware, home textiles, decor, and furniture sourced from established manufacturing clusters in Zhejiang and Fujian.",
    imgId: "cat-home-7c9d2e",
  },
  {
    id: "apparel-textiles",
    title: "Apparel & Textiles",
    desc: "Garments, fabrics, and accessories from mills in Guangdong and Jiangsu with attention to fabric specs and labeling compliance.",
    imgId: "cat-apparel-4b8f1a",
  },
  {
    id: "promotional-products",
    title: "Promotional & Gifts",
    desc: "Branded merchandise, packaging, and giveaways with logo application, sampling, and tight delivery windows.",
    imgId: "cat-promo-9e2c5d",
  },
  {
    id: "hardware-tools",
    title: "Hardware & Tools",
    desc: "Hand tools, fittings, and industrial components from metalworking regions, with material and finish verification.",
    imgId: "cat-hardware-1a6b3c",
  },
  {
    id: "outdoor-sports",
    title: "Outdoor & Sports",
    desc: "Camping gear, fitness equipment, and sporting goods built to spec with durability and safety checks.",
    imgId: "cat-outdoor-5d7e9f",
  },
]

export const problems = [
  {
    id: "p1",
    icon: FileSearch,
    title: "Can't tell real factories from trading companies",
    desc: "Online listings blur the line. We verify business licenses and visit factories so you know exactly who you are buying from.",
  },
  {
    id: "p2",
    icon: ShieldCheck,
    title: "Quality varies batch to batch",
    desc: "Without on-site inspection, defects surface after delivery. Our staged inspections catch issues before goods leave China.",
  },
  {
    id: "p3",
    icon: Users,
    title: "Language and time-zone barriers",
    desc: "Miscommunication causes spec drift. We act as your local team, translating requirements and confirming details in writing.",
  },
  {
    id: "p4",
    icon: Truck,
    title: "Shipping and customs are a black box",
    desc: "Multiple suppliers, unclear Incoterms, and missing documents cause delays. We consolidate and document everything end-to-end.",
  },
]

export const trustPoints = [
  {
    id: "t1",
    stat: "12+",
    label: "Years sourcing from China",
  },
  {
    id: "t2",
    stat: "1,200+",
    label: "Suppliers screened",
  },
  {
    id: "t3",
    stat: "40+",
    label: "Countries shipped to",
  },
  {
    id: "t4",
    stat: "98%",
    label: "Inspection pass rate on first final check",
  },
]

export const caseStudies = [
  {
    id: "cs-electronics",
    title: "Cutting defect rates for a US electronics brand",
    industry: "Consumer Electronics",
    location: "USA",
    summary:
      "A D2C electronics brand was receiving 6–8% defect rates on Bluetooth speakers. We audited two candidate factories, locked a tighter spec sheet, and introduced DUPRO and pre-shipment inspections.",
    result: "Defect rate reduced to under 1.5% across the next four orders.",
    imgId: "cs-electronics-2a4b6c",
  },
  {
    id: "cs-home",
    title: "Consolidating 9 suppliers into one shipment for a EU retailer",
    industry: "Home & Lifestyle",
    location: "Germany",
    summary:
      "A home goods retailer was paying for nine separate LCL shipments. We coordinated staggered production, consolidated cargo at our warehouse, and booked a single FCL.",
    result: "Landed freight cost reduced by 34% with faster overall transit.",
    imgId: "cs-home-8c1d3e",
  },
  {
    id: "cs-apparel",
    title: "Replacing a failed supplier mid-season",
    industry: "Apparel & Textiles",
    location: "UK",
    summary:
      "A fashion label's original supplier missed deadlines and shipped off-spec fabric. Within two weeks we re-sourced a verified mill, re-cut samples, and recovered the season.",
    result: "Order delivered 18 days ahead of the revised deadline.",
    imgId: "cs-apparel-5f9a2b",
  },
]

export const faqs = [
  {
    id: "faq-1",
    q: "Do you work with buyers outside China?",
    a: "Yes. The majority of our clients are overseas buyers in North America, Europe, the UK, Australia, and the Middle East. We act as your on-the-ground team in China.",
  },
  {
    id: "faq-2",
    q: "What is your pricing model?",
    a: "We typically work on a transparent service-fee or commission model depending on scope. After reviewing your request we provide a clear written quote with no hidden charges before any work begins.",
  },
  {
    id: "faq-3",
    q: "Can you inspect goods before they ship?",
    a: "Yes. We offer pre-production, during-production (DUPRO), and pre-shipment AQL inspections. You receive a detailed report with photos and a pass/fail result before goods leave the factory.",
  },
  {
    id: "faq-4",
    q: "Do you handle shipping and customs?",
    a: "We coordinate freight booking, cargo consolidation, and export documentation from China. Import customs and duties in your destination country are handled by your nominated forwarder or broker.",
  },
  {
    id: "faq-5",
    q: "What product categories do you source?",
    a: "We cover consumer electronics, home and lifestyle, apparel and textiles, promotional products, hardware, and outdoor goods. For categories outside these, send us your request and we will confirm feasibility.",
  },
  {
    id: "faq-6",
    q: "How quickly can you start?",
    a: "After you submit a sourcing request we typically respond within one business day with next steps and a timeline for the first supplier shortlist.",
  },
]

export const blogPosts = [
  {
    id: "blog-factory-vs-trading",
    title: "How to Tell a Real Factory from a Trading Company in China",
    excerpt:
      "Online listings make factories and trading companies look identical. Here are the practical checks we run before a supplier ever makes a shortlist.",
    date: "2026-06-18",
    category: "Supplier Verification",
    imgId: "blog-factory-1a2b3c",
  },
  {
    id: "blog-aql-inspection",
    title: "AQL Inspections Explained: What Pass and Fail Really Mean",
    excerpt:
      "AQL is the standard behind pre-shipment inspection. We break down how levels and sample sizes translate into a real pass/fail decision.",
    date: "2026-05-30",
    category: "Quality Control",
    imgId: "blog-aql-4d5e6f",
  },
  {
    id: "blog-incoterms",
    title: "FOB, CIF, and DDP: Choosing the Right Incoterms for Your Order",
    excerpt:
      "The wrong Incoterms can quietly inflate landed cost. A practical guide to picking terms that match your logistics setup.",
    date: "2026-05-12",
    category: "Shipping",
    imgId: "blog-incoterms-7g8h9i",
  },
  {
    id: "blog-consolidation",
    title: "Cargo Consolidation: When It Saves Money and When It Doesn't",
    excerpt:
      "Combining multiple suppliers into one shipment sounds simple, but timing and packaging decide whether it actually pays off.",
    date: "2026-04-22",
    category: "Shipping",
    imgId: "blog-consolidation-2j3k4l",
  },
  {
    id: "blog-spec-sheet",
    title: "Writing a Spec Sheet That Prevents Production Disputes",
    excerpt:
      "Most sourcing problems start with an ambiguous spec. Here is the structure we use to lock requirements before a PO is signed.",
    date: "2026-04-05",
    category: "Order Management",
    imgId: "blog-spec-5m6n7o",
  },
  {
    id: "blog-sample-stage",
    title: "The Sample Stage: Why It's the Cheapest Place to Fix Problems",
    excerpt:
      "Catching a spec issue at the sample stage costs a fraction of fixing it in mass production. How to get the most out of sampling.",
    date: "2026-03-19",
    category: "Quality Control",
    imgId: "blog-sample-8p9q0r",
  },
]
