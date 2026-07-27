export const services = [
  {
    id: "sourcing",
    title: "Supplier Sourcing",
    summary:
      "Shortlist 3-5 vetted Chinese suppliers for your product, matched to your specs, MOQ, and target price.",
    deliverables: [
      "Matched supplier shortlist (3-5 factories)",
      "Side-by-side capability comparison",
      "Introductory quotations in your currency",
      "Sample coordination and consolidated shipping",
    ],
  },
  {
    id: "verification",
    title: "Factory Verification",
    summary:
      "On-site audits to confirm a factory is real, capable, and compliant — not just a trading company.",
    deliverables: [
      "Business license and export record check",
      "On-site audit report (facility, capacity, workforce)",
      "Quality system and certification review",
      "Photographic evidence and risk flags",
    ],
  },
  {
    id: "samples",
    title: "Sample Coordination",
    summary:
      "We manage sampling rounds so you get production-ready prototypes, not off-the-shelf demos.",
    deliverables: [
      "Sample brief translated to the factory",
      "Sample production tracking",
      "Consolidated international sample shipping",
      "Sample inspection report with feedback",
    ],
  },
  {
    id: "negotiation",
    title: "Price Negotiation",
    summary:
      "Local-market price benchmarking and direct negotiation in Mandarin to land fair, defensible pricing.",
    deliverables: [
      "Market-price benchmark for your product",
      "Direct price negotiation with the factory",
      "MOQ, payment terms, and lead-time review",
      "Written quotation summary for your records",
    ],
  },
  {
    id: "inspection",
    title: "Quality Inspection",
    summary:
      "Pre-shipment inspections against your AQL and spec sheet, with photo and video evidence.",
    deliverables: [
      "Inspection plan and checklist",
      "On-line and pre-shipment inspections",
      "AQL-based sampling and defect reporting",
      "Corrective-action follow-up if issues are found",
    ],
  },
  {
    id: "production",
    title: "Production Follow-Up",
    summary:
      "Weekly progress updates from the factory floor so production delays never surprise you again.",
    deliverables: [
      "Production schedule tracking",
      "Weekly photo and status updates",
      "Issue escalation when timelines slip",
      "Final random inspection before shipment",
    ],
  },
  {
    id: "shipping",
    title: "Shipping & Logistics",
    summary:
      "Sea, air, rail, and express — coordinated with forwarders, customs, and last-mile delivery.",
    deliverables: [
      "Incoterms and route recommendation",
      "Freight booking and documentation",
      "Customs and HS code guidance",
      "Door-to-door tracking to your warehouse",
    ],
  },
  {
    id: "private-label",
    title: "OEM / Private Label",
    summary:
      "Custom packaging, branding, and product modifications handled end-to-end with the factory.",
    deliverables: [
      "Packaging design and material sourcing",
      "Logo printing, labels, and barcodes",
      "Compliance and labeling review for your market",
      "Carton and pallet specification",
    ],
  },
]

export const processSteps = [
  {
    step: "01",
    title: "Share Your Sourcing Brief",
    description:
      "Tell us the product, specs, target price, quantity, and destination market. The more specific you are, the sharper our shortlist.",
  },
  {
    step: "02",
    title: "We Shortlist Vetted Suppliers",
    description:
      "Within 3-5 business days we send you 3-5 pre-vetted Chinese factories, each with capability, pricing, and risk notes.",
  },
  {
    step: "03",
    title: "Sample Development & Approval",
    description:
      "We coordinate sampling rounds, capture your feedback, and ensure the supplier understands your expectations before mass production.",
  },
  {
    step: "04",
    title: "Price & Terms Negotiation",
    description:
      "We benchmark pricing locally and negotiate MOQ, payment terms, and lead time in Mandarin — on your behalf.",
  },
  {
    step: "05",
    title: "Production Follow-Up",
    description:
      "Once you confirm the PO, we monitor production with weekly photo updates and flag any delays before they become problems.",
  },
  {
    step: "06",
    title: "Quality Inspection",
    description:
      "Before shipment, our inspectors visit the factory, check against your AQL, and send you a full report with photos.",
  },
  {
    step: "07",
    title: "Shipping & Delivery",
    description:
      "We book freight, handle export documentation, and track your cargo from the factory floor to your warehouse door.",
  },
]

export const productCategories = [
  {
    id: "consumer-electronics",
    title: "Consumer Electronics",
    items: [
      "Phone and tablet accessories",
      "Audio devices and wearables",
      "Smart home and IoT devices",
      "Chargers, cables, and power banks",
    ],
    imageQuery: "consumer electronics assembly line factory",
  },
  {
    id: "home-goods",
    title: "Home & Kitchen Goods",
    items: [
      "Kitchen tools and utensils",
      "Storage and organization",
      "Bedding, towels, and textiles",
      "Candles, decor, and seasonal items",
    ],
    imageQuery: "home goods factory production",
  },
  {
    id: "apparel",
    title: "Apparel & Textiles",
    items: [
      "Custom-cut garments and uniforms",
      "Performance and activewear",
      "Bags, backpacks, and luggage",
      "Footwear and fashion accessories",
    ],
    imageQuery: "apparel textile factory sewing",
  },
  {
    id: "beauty",
    title: "Beauty & Personal Care",
    items: [
      "Skincare and haircare OEM",
      "Cosmetics packaging and filling",
      "Tools: brushes, combs, sponges",
      "Custom label and box design",
    ],
    imageQuery: "beauty cosmetics packaging factory",
  },
  {
    id: "outdoor-sports",
    title: "Outdoor & Sports",
    items: [
      "Camping and hiking gear",
      "Yoga and fitness equipment",
      "Cycling and water sports",
      "Sports bags and accessories",
    ],
    imageQuery: "outdoor sports equipment factory",
  },
  {
    id: "industrial",
    title: "Industrial & Hardware",
    items: [
      "Custom metal parts and CNC",
      "Injection molding and plastics",
      "Tools and hardware",
      "Pumps, valves, and fittings",
    ],
    imageQuery: "industrial metal parts factory cnc",
  },
  {
    id: "packaging",
    title: "Packaging & Print",
    items: [
      "Custom boxes and folding cartons",
      "Labels, stickers, and sleeves",
      "Paper bags and shopping bags",
      "Protective and void-fill packaging",
    ],
    imageQuery: "packaging boxes factory production",
  },
  {
    id: "kids-pets",
    title: "Kids, Toys & Pet",
    items: [
      "Educational and wooden toys",
      "Plush and soft toys",
      "Pet beds, toys, and accessories",
      "Baby products and nursery items",
    ],
    imageQuery: "toy factory production line",
  },
]

export const problems = [
  {
    title: "I can't tell which supplier is real",
    description:
      "Trading companies pretend to be factories. We audit the actual production floor so you know who is making your product.",
  },
  {
    title: "Quotes vary wildly between suppliers",
    description:
      "We benchmark pricing locally and explain what is included, so you can compare like-for-like and avoid hidden costs.",
  },
  {
    title: "Samples look great, mass production disappoints",
    description:
      "Our inspectors check production runs against your approved sample, not just the spec sheet, and report with photos.",
  },
  {
    title: "Production slips and nobody tells me",
    description:
      "We get weekly photo updates from the factory floor and escalate issues early — before they become missed ship dates.",
  },
  {
    title: "Quality issues discovered too late",
    description:
      "Pre-shipment inspections with AQL sampling catch defects before goods leave China, saving you the return-shipping headache.",
  },
  {
    title: "Shipping quotes and customs are confusing",
    description:
      "We recommend the right Incoterm and route, prepare documents, and coordinate with your forwarder or ours.",
  },
  {
    title: "Communication is slow and gets lost in translation",
    description:
      "Your dedicated account manager speaks fluent English and Chinese, so nothing is lost between you and the factory.",
  },
  {
    title: "I need one partner for the whole chain",
    description:
      "From brief to delivered goods, SSourcing manages sourcing, audit, QC, and shipping under one accountable point of contact.",
  },
]

export const trustPoints = [
  {
    metric: "12+",
    label: "Years sourcing in China",
    description:
      "Founded in Hangzhou, we have worked with factories across all major industrial regions since 2013.",
  },
  {
    metric: "1,800+",
    label: "Suppliers in our network",
    description:
      "Pre-vetted, continuously re-audited, and categorised by capability, certification, and export history.",
  },
  {
    metric: "4,200+",
    label: "Inspections completed",
    description:
      "Pre-shipment, during-production, and container-loading inspections for buyers in 30+ countries.",
  },
  {
    metric: "30+",
    label: "Countries served",
    description:
      "Regular clients in North America, the EU, the UK, Australia, the Middle East, and Southeast Asia.",
  },
  {
    metric: "24h",
    label: "Quote response time",
    description:
      "Submit a brief by 6pm China time and you will have a sourcing plan in your inbox by the next business day.",
  },
  {
    metric: "100%",
    label: "On-site, not outsourced",
    description:
      "Every audit and inspection is performed by our own bilingual team in China — never subcontracted.",
  },
]

export const caseStudies = [
  {
    id: "us-fba-cookware",
    industry: "FBA Cookware · USA",
    title:
      "Helping a US Amazon seller switch cookware suppliers without losing Q4",
    summary:
      "A US Amazon seller needed to replace their existing cookware factory after a 22% defect rate. We sourced three new factories, ran trial orders, and locked in a reliable supplier ahead of peak season.",
    results: [
      { label: "Defect rate", value: "Down from 22% to 3.4%" },
      { label: "Lead time", value: "Reduced from 65 to 42 days" },
      { label: "FOB savings", value: "12% on landed cost" },
    ],
    body: [
      "The buyer's previous factory had produced three acceptable samples but the first mass-production run came in with a 22% defect rate — mostly warping and coating inconsistencies.",
      "We visited four alternative factories in the Yangjiang cookware cluster, audited each one for production capacity, quality systems, and export experience with US-bound cookware (FDA, Prop 65, LFGB).",
      "After sample rounds and a 1,000-unit trial order with on-site inspection, the buyer selected a supplier with a tighter quality system. Their next 40HQ order shipped without a single AQL-level defect.",
    ],
  },
  {
    id: "eu-beauty-brand",
    industry: "Beauty · EU",
    title:
      "Building a private-label skincare line for a Dutch brand, from formula to shelf",
    summary:
      "A new skincare brand in the Netherlands needed a GMP-certified OEM partner for serums and creams, plus compliant labeling for the EU market. We managed the full development cycle.",
    results: [
      { label: "Time to market", value: "6 months from brief to first PO" },
      { label: "SKUs launched", value: "8 SKUs across 2 categories" },
      { label: "Compliance", value: "CPNP-ready EU labeling" },
    ],
    body: [
      "The brand had a finished formula spec but no factory contacts. We shortlisted four GMP-certified contract manufacturers in Guangzhou and Shanghai with EU export experience.",
      "We coordinated sample rounds, managed artwork and translation for the EU compliant label, and ran a pre-shipment inspection covering fill weight, batch coding, and packaging integrity.",
      "The launch PO of 12,000 units across eight SKUs shipped on schedule with full CPNP notification support.",
    ],
  },
  {
    id: "au-outdoor-retailer",
    industry: "Outdoor Retail · Australia",
    title:
      "Sourcing a custom tent line for an Australian outdoor retailer",
    summary:
      "An Australian outdoor retailer wanted a private-label tent range to compete with established brands, without taking on the risk of a full custom tool-up.",
    results: [
      { label: "Sample approval", value: "3 rounds, 11 weeks" },
      { label: "QC pass rate", value: "98.6% on first production run" },
      { label: "Repeat orders", value: "Three seasons in a row" },
    ],
    body: [
      "We identified a Zhejiang-based tent factory with proven OEM experience for European and Australian outdoor brands. The factory already had tooling close to the buyer's spec, which avoided custom mold fees.",
      "Sample rounds focused on fabric hand-feel, seam sealing, and pole strength. We organized an on-site production review during the first 2,000-unit run.",
      "Three seasons later, the buyer has scaled to two new SKUs and consolidated shipping with two other product lines we manage for them.",
    ],
  },
  {
    id: "uk-pet-brand",
    industry: "Pet Products · UK",
    title:
      "Re-engineering a dog bed for a UK subscription brand, cutting cost 18%",
    summary:
      "A UK pet-brand was buying dog beds at a price they could not scale with. We re-engineered the product with a different factory without changing what customers loved.",
    results: [
      { label: "Unit cost", value: "Reduced by 18%" },
      { label: "Quality", value: "Same customer rating (4.7/5)" },
      { label: "Volume", value: "Scaled 4x in 9 months" },
    ],
    body: [
      "We reverse-engineered the existing bed — cover fabric, fill weight, stitching pattern — and produced a bill-of-materials comparison against a Shandong home-textile factory.",
      "Sample rounds preserved the customer-facing feel (zipper pull, fabric softness) while simplifying internal construction to cut cost without visible change.",
      "The first 5,000-unit run passed inspection with zero batch defects. The brand has since scaled to four SKUs in the same range.",
    ],
  },
  {
    id: "mena-electronics",
    industry: "Electronics · MENA",
    title:
      "Helping a Saudi distributor consolidate four suppliers into one",
    summary:
      "A Saudi electronics distributor was juggling four Chinese suppliers for a single product family. We consolidated production to one audited factory.",
    results: [
      { label: "Suppliers", value: "From 4 to 1" },
      { label: "Admin overhead", value: "Down ~30 hours / month" },
      { label: "On-time delivery", value: "From 71% to 96%" },
    ],
    body: [
      "We reviewed the four factories' capabilities, audits, and pricing for the buyer's product family. Two were trading companies, one had no export license, and one had the actual production line.",
      "After sample confirmation and a small trial order, the buyer consolidated the product family to the single factory, with SSourcing managing the rest of the chain.",
      "On-time delivery improved within one quarter and the buyer's team reclaimed roughly 30 hours per month of admin time.",
    ],
  },
  {
    id: "ca-fitness-equipment",
    industry: "Fitness · Canada",
    title:
      "Sourcing commercial-grade gym equipment for a Canadian startup",
    summary:
      "A Canadian fitness-equipment startup needed a manufacturer for a custom rack system, with strict load-testing requirements and North American safety certification.",
    results: [
      { label: "Certifications", value: "ASTM & CSA passed" },
      { label: "First run defect rate", value: "0.8%" },
      { label: "MOQ", value: "Negotiated from 500 to 200" },
    ],
    body: [
      "We shortlisted three fitness-equipment factories with export experience to North America. The selected factory had an in-house metallurgist and weld-testing capability.",
      "We coordinated pre-shipment load testing samples and arranged third-party ASTM and CSA review before the production run.",
      "The first 1,000-unit run shipped with a 0.8% defect rate and the buyer has placed three follow-on orders.",
    ],
  },
]

export const faqs = [
  {
    q: "How does SSourcing charge for its services?",
    a: "Our fees depend on the scope of work. Sourcing and supplier verification are typically flat-fee or shortlist-based. Quality inspections are per-visit. Production follow-up and shipping coordination are quoted based on order size and complexity. You will always receive a written quote before we start.",
  },
  {
    q: "Where are you based, and where do your suppliers operate?",
    a: "We are based in Hangzhou, China, with field teams across the major manufacturing clusters — Guangdong, Zhejiang, Jiangsu, Shandong, Fujian, and Hebei. We work with Chinese-owned factories across all of mainland China.",
  },
  {
    q: "Do you only work with large order volumes?",
    a: "No. We work with buyers placing trial orders of a few hundred units through to multi-container ongoing programs. Pricing and minimum order quantities (MOQs) are negotiated with the factory based on your real needs.",
  },
  {
    q: "Can you protect my product idea or design?",
    a: "Yes. We can sign an NDA with you and the factory, and we recommend using a non-disclosure and tooling-exclusivity clause in your purchase agreement. We will also walk you through the practical limits of IP protection in China.",
  },
  {
    q: "What is your typical lead time for a sourcing shortlist?",
    a: "For most product briefs we return a shortlist of 3-5 pre-vetted factories within 3-5 business days. More complex products (custom tooling, regulated categories) may take a week or two.",
  },
  {
    q: "What happens if a quality issue is found at inspection?",
    a: "We send you the inspection report within 24 hours with photos. If defects are within the agreed AQL, the order can ship. If they exceed AQL, we work with the factory on a corrective action plan and arrange a re-inspection before shipment.",
  },
  {
    q: "Can you handle shipping and customs clearance?",
    a: "Yes. We coordinate with our network of forwarders for sea, air, rail, and express shipments from China. We prepare export documentation and can advise on HS codes, Incoterms, and destination customs requirements. Final customs clearance in your country is usually handled by your broker.",
  },
  {
    q: "Do you only serve English-speaking buyers?",
    a: "No. Our account managers work in English, Mandarin, and Spanish, and we coordinate with translation partners for other languages. Documentation can be delivered in English or Mandarin as needed.",
  },
]

export const blogPosts = [
  {
    slug: "supplier-vetting-checklist",
    title: "A practical 12-point supplier vetting checklist for China sourcing",
    excerpt:
      "Skip the marketing claims. Here is the 12-point checklist our team uses before we put a factory on a buyer's shortlist.",
    category: "Sourcing",
    readTime: "8 min read",
    date: "2026-07-12",
    body: [
      "Most supplier 'verification' in China happens by email, phone, and a glossy Alibaba profile. That is not enough. Our team uses a 12-point checklist that focuses on three things: can the factory actually make your product, will they still be in business in 12 months, and can they ship it correctly.",
      "The checklist covers business-license verification, export history, on-site facility review, capacity check, workforce, quality system, certifications, sample process, payment terms, communication quality, references, and an on-site photo audit. We publish the full version for our buyers in our sourcing brief template.",
    ],
  },
  {
    slug: "pre-shipment-inspection-guide",
    title: "Pre-shipment inspection: when to book it, what AQL to use, and what to expect",
    excerpt:
      "A practical guide to pre-shipment inspection in China — timing, AQL levels, sampling, and what to do when defects are found.",
    category: "Quality",
    readTime: "10 min read",
    date: "2026-06-28",
    body: [
      "Pre-shipment inspection (PSI) is the most cost-effective QC step in your China-sourcing chain. It is run when at least 80% of the order is packed and ready, with random samples pulled from the batch using an AQL (Acceptable Quality Limit) table.",
      "We recommend General Inspection Level II for most consumer products, with a 1.0 AQL for major defects, 2.5 for minor, and 4.0 for critical. The inspector pulls samples, checks them against your approved sample and spec sheet, and produces a pass / fail / pending report with photos.",
    ],
  },
  {
    slug: "incoterms-2020-explained",
    title: "Incoterms 2020 explained for first-time importers from China",
    excerpt:
      "EXW, FOB, CIF, DDP — what the terms actually mean, who pays for what, and which to use when you are just starting out.",
    category: "Shipping",
    readTime: "7 min read",
    date: "2026-06-15",
    body: [
      "Incoterms define who is responsible for the goods at each step of the journey from the factory to your warehouse. EXW (Ex Works) means the buyer's responsibility starts at the factory gate. FOB (Free On Board) means the seller delivers to the port and loads the goods; the buyer takes over from there.",
      "For first-time importers, FOB is usually the right balance — the seller handles export and loading, the buyer (or their forwarder) handles sea freight, insurance, and destination costs. DDP (Delivered Duty Paid) is convenient but the seller is in control of the freight, which can be costly.",
    ],
  },
  {
    slug: "fba-amazon-prep-china",
    title: "FBA and Amazon prep: how to spec cartons and labels when sourcing from China",
    excerpt:
      "Avoid the most common Amazon FBA prep errors when sourcing from China — carton specs, FNSKU labels, suffocation warnings, and palletization.",
    category: "Logistics",
    readTime: "9 min read",
    date: "2026-05-30",
    body: [
      "Amazon FBA has very specific carton, labeling, and palletization requirements. If you source from China without telling the factory, you will end up re-packing in a US prep house — at $1-3 per unit. That cost is avoidable.",
      "We work with buyers to build an FBA prep specification into the purchase order from day one. That includes carton dimensions and weight limits, FNSKU labels, suffocation warnings for poly bags, and pallet configuration for the chosen Amazon fulfillment center.",
    ],
  },
  {
    slug: "fda-prop65-lfgb",
    title: "FDA, Prop 65, LFGB: which compliance tests do you actually need?",
    excerpt:
      "If you sell consumer products in the US or EU, you need product-safety testing. Here is how to decide which tests are required.",
    category: "Compliance",
    readTime: "11 min read",
    date: "2026-05-10",
    body: [
      "FDA regulates food-contact products in the US. Prop 65 (California) lists chemicals that require warning labels. LFGB is the German / EU food-safety standard. CPSIA covers children's products in the US. CE and UKCA marks apply in the EU and UK.",
      "Our role is to flag the tests you need based on your product category and target market, and to ensure the factory has recent test reports from a recognized third-party lab. We do not perform the tests ourselves; we help you avoid buying products that will be rejected at customs.",
    ],
  },
  {
    slug: "china-sourcing-agent-fees",
    title: "How China sourcing agent fees actually work (and what to watch out for)",
    excerpt:
      "Sourcing agent fees come in three main shapes. Here is how each works, and the trade-offs to consider for your first project.",
    category: "Sourcing",
    readTime: "6 min read",
    date: "2026-04-22",
    body: [
      "Most sourcing agents charge one of three ways: a flat fee per project, a percentage of the order value, or a combination. Flat-fee is the most transparent and is best for short-term projects. Percentage-based fees can work for ongoing programs but be careful — the agent's incentive is to grow the order, not to keep your costs low.",
      "We publish our fee structure clearly in every proposal. You will always know what you are paying before we start, and our fees are quoted separately from supplier pricing.",
    ],
  },
]
