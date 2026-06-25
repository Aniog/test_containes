export const caseStudies = [
  {
    id: "case-kitchenware-d2c",
    slug: "kitchenware-d2c-uk",
    industry: "Home & Kitchenware",
    region: "United Kingdom",
    client: "Independent cookware brand, D2C + Amazon UK",
    title:
      "Cut cookware defect rate from 9% to under 2% on a 40,000-piece re-order",
    summary:
      "A UK cookware brand came to us after two failed production batches. We re-qualified three factories, set up an inline inspection plan and ran a pre-shipment audit that caught a tooling drift before it became a claim.",
    metrics: [
      { label: "Defect rate", value: "9% → 1.8%" },
      { label: "Audit cycles", value: "2 visits" },
      { label: "Lead time", value: "32 days" },
    ],
    body: [
      "The brand had been working with a trading company that subcontracted to a different factory on the second batch. We traced the issue, ran factory verification at the original mill and at two backups, and presented a written comparison with photos and capacity data.",
      "We introduced a three-checkpoint inspection: raw material incoming, mid-line and pre-shipment. The mid-line check caught a stainless-steel thickness deviation before it locked in. The order shipped on schedule with a 1.8% defect rate against a 3% target.",
    ],
    image:
      "stainless steel cookware inspection quality control factory production China",
  },
  {
    id: "case-electronics-amazon",
    slug: "consumer-electronics-amazon-us",
    industry: "Consumer Electronics",
    region: "United States",
    client: "Amazon FBA seller, charging accessories",
    title:
      "Switched two SKUs from trading company to audited factory and saved 14% landed cost",
    summary:
      "An Amazon seller was buying through a Shenzhen trading company at a margin that no longer worked. We located the underlying factory, opened a direct relationship, and coordinated a 5,000-unit trial before scaling.",
    metrics: [
      { label: "Landed cost", value: "−14%" },
      { label: "Trial order", value: "5,000 units" },
      { label: "Repeat orders", value: "Quarterly" },
    ],
    body: [
      "After a factory audit and a sample round that confirmed quality parity, the seller approved a 5,000-unit trial. We ran a pre-shipment inspection on the full lot and shipped consolidated FCL to Long Beach. The seller now orders quarterly, with our QC report attached to every shipment.",
    ],
    image:
      "consumer electronics USB cable accessories factory production line China",
  },
  {
    id: "case-beauty-private-label",
    slug: "beauty-private-label-eu",
    industry: "Beauty & Personal Care",
    region: "European Union",
    client: "EU skincare startup, private label",
    title:
      "Took a private label skincare line from formula to first EU shipment in 14 weeks",
    summary:
      "A Berlin-based startup needed a GMP-compliant contract manufacturer, a CPNP-ready label set and EU-compliant documentation. We coordinated formulation, filling, lab testing and consolidated sea freight to Hamburg.",
    metrics: [
      { label: "Project length", value: "14 weeks" },
      { label: "SKUs", value: "4" },
      { label: "Tests passed", value: "Stability + Micro" },
    ],
    body: [
      "We started with three GMP-audited factories in Guangzhou. After a sample round, the client chose one for serum and one for cream. We coordinated ingredient declarations, label artwork compliance, stability and microbiology testing, and the CPNP notification. Goods left Shenzhen by sea in week 14, six days ahead of plan.",
    ],
    image:
      "skincare cosmetics private label filling line GMP factory clean room China",
  },
  {
    id: "case-industrial-machining",
    slug: "industrial-cnc-australia",
    industry: "Industrial & Hardware",
    region: "Australia",
    client: "Mining services supplier, custom machined parts",
    title:
      "Replaced inconsistent local machining supplier with audited Chinese shop, holding ±0.05 mm tolerance",
    summary:
      "An Australian supplier was paying a premium for locally machined parts with inconsistent tolerances. We qualified two CNC shops in Ningbo, set up a measurement plan with CMM reports, and shipped the first batch in 28 days.",
    metrics: [
      { label: "Tolerance", value: "±0.05 mm" },
      { label: "Cost reduction", value: "−37%" },
      { label: "CMM reports", value: "Every batch" },
    ],
    body: [
      "We started with a sample round across two shops. The Ningbo supplier met tolerance on 95% of features; the second was a backup. For production, we added a CMM measurement plan with the supplier's existing metrology room. Every batch now ships with a CMM summary attached, and the buyer's receiving team accepts parts without re-inspection.",
    ],
    image:
      "CNC machined metal parts inspection metrology factory workshop China",
  },
];
