export const services = [
  {
    id: "supplier-sourcing",
    slug: "supplier-sourcing",
    title: "Supplier Sourcing",
    short: "Shortlist of vetted Chinese suppliers matched to your product, volume and quality target.",
    description:
      "We start from your specification, target price and order profile, then identify and qualify candidate factories across China. You receive a shortlist of 3–5 suppliers with company profile, capability match, sample pricing and our recommendation.",
    deliverables: [
      "3–5 pre-qualified supplier profiles",
      "Quotation comparison in a single sheet",
      "Sample coordination and consolidated shipment",
      "Written sourcing report with our recommendation",
    ],
    icon: "Search",
    image:
      "supplier verification factory meeting procurement agent in China supplier office",
  },
  {
    id: "factory-verification",
    slug: "factory-verification",
    title: "Factory Verification",
    short: "On-site audits that confirm a factory is real, capable and ready to produce your order.",
    description:
      "Before you commit, we visit the supplier in person. We verify the business license, walk the production floor, check machinery, review export history and interview management. You receive a structured audit report with photos and a pass / conditional / fail recommendation.",
    deliverables: [
      "Business license and ownership check",
      "Production floor walk-through with photos",
      "Capacity, workforce and export record review",
      "Audit report: Pass / Conditional / Fail",
    ],
    icon: "Building2",
    image:
      "factory audit inspector walking through Chinese manufacturing facility checking production line",
  },
  {
    id: "quality-inspection",
    slug: "quality-inspection",
    title: "Quality Inspection",
    short: "Pre-shipment and during-production inspections aligned to AQL standards.",
    description:
      "Independent QC before goods leave the factory. We follow AQL-based sampling, check workmanship, function, dimensions, packaging and labeling, and report findings within 24 hours so you can approve, hold or rework the shipment.",
    deliverables: [
      "DPI during production / PSI before shipment",
      "AQL 1.5 / 2.5 / 4.0 sampling",
      "Photo and video evidence with defect classification",
      "Inspection report within 24 hours",
    ],
    icon: "ClipboardCheck",
    image:
      "quality control inspector inspecting product samples on factory table checklist clipboard",
  },
  {
    id: "production-followup",
    slug: "production-followup",
    title: "Production Follow-up",
    short: "Weekly progress updates with photos so you always know where your order stands.",
    description:
      "From PO confirmation to ex-factory, we stay in the factory on your behalf. You receive a weekly status report covering production schedule, raw material readiness, line output, blockers and ETD. We escalate delays early so you can plan.",
    deliverables: [
      "Weekly written status report",
      "Production photos and milestone tracking",
      "Escalation of delays and recovery plans",
      "Booking and ex-factory confirmation",
    ],
    icon: "TrendingUp",
    image:
      "production manager reviewing manufacturing schedule on tablet at Chinese factory floor",
  },
  {
    id: "shipping-coordination",
    slug: "shipping-coordination",
    title: "Shipping Coordination",
    short: "Sea, air and rail freight, customs paperwork and last-mile delivery, handled end-to-end.",
    description:
      "We compare FCL, LCL, air and rail options, book space with vetted forwarders, prepare commercial invoices, packing lists and certificates of origin, and track the shipment until it reaches your warehouse or nominated 3PL.",
    deliverables: [
      "Freight quote comparison (sea / air / rail)",
      "Booking and documentation",
      "Cargo tracking with milestone updates",
      "Support with customs clearance paperwork",
    ],
    icon: "Ship",
    image:
      "shipping container yard logistics freight forwarder coordinating export cargo from China port",
  },
  {
    id: "sampling-development",
    slug: "sampling-development",
    title: "Sampling & Product Development",
    short: "Sample sourcing, modifications and tooling coordination before you place the bulk order.",
    description:
      "Need a sample before you commit? We arrange reference samples, manage prototype revisions, coordinate tooling and mould adjustments, and consolidate samples from multiple factories so you can evaluate them side by side.",
    deliverables: [
      "Reference and customized samples",
      "Prototype revision rounds",
      "Tooling and mould coordination",
      "Sample consolidation and shipment",
    ],
    icon: "DraftingCompass",
    image:
      "product prototype sample development workshop with engineer reviewing physical sample",
  },
];

export const serviceGroups = [
  {
    title: "Find",
    items: services.filter((s) =>
      ["supplier-sourcing", "sampling-development"].includes(s.id)
    ),
  },
  {
    title: "Verify",
    items: services.filter((s) =>
      ["factory-verification"].includes(s.id)
    ),
  },
  {
    title: "Produce",
    items: services.filter((s) =>
      ["production-followup", "quality-inspection"].includes(s.id)
    ),
  },
  {
    title: "Ship",
    items: services.filter((s) =>
      ["shipping-coordination"].includes(s.id)
    ),
  },
];
