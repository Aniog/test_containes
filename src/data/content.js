export const products = [
  {
    id: "double-folding-machine",
    name: "Double Folding Machine",
    tagline: "Dual-axis precision folding for high-volume production",
    description:
      "Our flagship double folding machine folds two opposite edges in a single pass. Engineered for repeatability and tight tolerances on long production runs.",
    specs: [
      { label: "Folding length", value: "Up to 4000 mm" },
      { label: "Sheet thickness", value: "0.4 – 3.2 mm steel" },
      { label: "Cycle time", value: "≤ 6 seconds / fold" },
      { label: "Repeatability", value: "± 0.1 mm" },
    ],
    highlights: [
      "Dual-head synchronized operation",
      "Programmable fold sequences",
      "Servo-driven clamping beam",
      "Safety light curtain integrated",
    ],
    imageQuery: "industrial double folding machine bending sheet metal factory",
  },
  {
    id: "double-folder",
    name: "Double Folder",
    tagline: "Compact double-edge folder for fabrication shops",
    description:
      "The Double Folder delivers the productivity of dual-edge folding in a footprint suited to mid-sized workshops. Quick setup, intuitive HMI, robust frame.",
    specs: [
      { label: "Folding length", value: "Up to 2500 mm" },
      { label: "Sheet thickness", value: "0.5 – 2.5 mm steel" },
      { label: "Control", value: "9\" color touchscreen" },
      { label: "Power", value: "7.5 kW servo drive" },
    ],
    highlights: [
      "Single-operator workflow",
      "Recipe storage for 200+ parts",
      "Quick-change tooling in minutes",
      "Self-diagnostics with alerts",
    ],
    imageQuery: "sheet metal double folder industrial workshop machine",
  },
  {
    id: "sheet-metal-folder",
    name: "Sheet Metal Folder",
    tagline: "Versatile folder for diverse sheet metal tasks",
    description:
      "A general-purpose sheet metal folder built for fabricators who handle a wide variety of parts. Adjustable angle, easy tooling, consistent results.",
    specs: [
      { label: "Folding length", value: "Up to 3200 mm" },
      { label: "Fold angle", value: "0° – 135°" },
      { label: "Min return", value: "8 mm" },
      { label: "Clamping force", value: "12 ton adjustable" },
    ],
    highlights: [
      "Manual + CNC hybrid mode",
      "Universal tooling compatibility",
      "Anti-mark contact surfaces",
      "Foot-pedal hands-free operation",
    ],
    imageQuery: "sheet metal folder bending brake press machine",
  },
  {
    id: "sheet-metal-folding-machine",
    name: "Sheet Metal Folding Machine",
    tagline: "Precision folding machine for heavy-duty fabrication",
    description:
      "Engineered for structural fabrication, this sheet metal folding machine combines rigidity with fine control to deliver clean folds on heavier material.",
    specs: [
      { label: "Folding length", value: "Up to 6000 mm" },
      { label: "Sheet thickness", value: "0.6 – 4.0 mm steel" },
      { label: "Beam deflection", value: "< 0.05 mm at full load" },
      { label: "Backgauge", value: "6-axis CNC backgauge" },
    ],
    highlights: [
      "Heavy-duty welded steel frame",
      "Stress-relieved beam assembly",
      "Crowning system for angle accuracy",
      "Network-ready for Industry 4.0",
    ],
    imageQuery: "large sheet metal folding machine industrial fabrication",
  },
  {
    id: "metal-folder",
    name: "Metal Folder",
    tagline: "Clean, accurate folds for architectural and HVAC work",
    description:
      "The Metal Folder is optimized for thin-gauge stainless, aluminum, and galvanized steel. Perfect for architectural panels, ductwork, and enclosures.",
    specs: [
      { label: "Folding length", value: "Up to 2500 mm" },
      { label: "Sheet thickness", value: "0.4 – 2.0 mm" },
      { label: "Surface finish", value: "Non-mark polyurethane tooling" },
      { label: "Noise level", value: "< 72 dB" },
    ],
    highlights: [
      "Non-marring tooling for finished surfaces",
      "Soft-start clamping protects panels",
      "Compact footprint",
      "Ideal for stainless and aluminum",
    ],
    imageQuery: "metal folder HVAC duct fabrication workshop",
  },
  {
    id: "metal-folder-machine",
    name: "Metal Folder Machine",
    tagline: "Automated metal folder machine for production lines",
    description:
      "Designed for integration into automated lines, this metal folder machine offers robotic interface, conveyor-ready loading, and full recipe control.",
    specs: [
      { label: "Folding length", value: "Up to 3000 mm" },
      { label: "Cycle time", value: "≤ 5 seconds / fold" },
      { label: "Interface", value: "OPC-UA / Modbus TCP" },
      { label: "Loading", value: "Conveyor or robot-ready" },
    ],
    highlights: [
      "Plug-and-play line integration",
      "Automatic tool change support",
      "Production data logging",
      "Predictive maintenance alerts",
    ],
    imageQuery: "automated metal folder machine robotic production line",
  },
  {
    id: "metal-folding-machine",
    name: "Metal Folding Machine",
    tagline: "The complete solution for precision metal folding",
    description:
      "Our most capable metal folding machine — engineered for fabricators who need every fold to be exact, repeatable, and traceable. Built for 24/7 production.",
    specs: [
      { label: "Folding length", value: "Up to 4000 mm" },
      { label: "Sheet thickness", value: "0.4 – 3.5 mm steel" },
      { label: "Repeatability", value: "± 0.05 mm" },
      { label: "Axes", value: "Up to 12 CNC axes" },
    ],
    highlights: [
      "Full CNC multi-axis control",
      "Laser angle measurement feedback",
      "Energy-efficient hybrid drive",
      "5-year structural warranty",
    ],
    imageQuery: "precision metal folding machine CNC control panel",
  },
];

export const industries = [
  {
    id: "hvac",
    name: "HVAC & Ductwork",
    description:
      "Rectangular ducts, transitions, and fittings folded cleanly and quickly from galvanized and stainless coil.",
    imageQuery: "HVAC rectangular ductwork fabrication factory",
  },
  {
    id: "architectural",
    name: "Architectural Cladding",
    description:
      "Architectural panels, soffits, and rainscreens folded with non-marring tooling for premium surface finish.",
    imageQuery: "architectural metal cladding panels facade",
  },
  {
    id: "enclosures",
    name: "Cabinets & Enclosures",
    description:
      "Electrical cabinets, server racks, and control enclosures folded with consistent tolerances.",
    imageQuery: "metal electrical cabinet enclosure fabrication",
  },
  {
    id: "automotive",
    name: "Automotive Components",
    description:
      "Body panels, brackets, and chassis components produced at scale with full traceability.",
    imageQuery: "automotive sheet metal parts fabrication",
  },
  {
    id: "appliance",
    name: "Appliances",
    description:
      "Washing machines, refrigerators, and commercial kitchen equipment folded from stainless and coated steel.",
    imageQuery: "appliance stainless steel sheet metal manufacturing",
  },
  {
    id: "energy",
    name: "Energy & Infrastructure",
    description:
      "Solar mounting structures, switchgear enclosures, and battery cabinets built for reliability.",
    imageQuery: "solar energy metal infrastructure fabrication",
  },
];

export const capabilities = [
  {
    id: "engineering",
    title: "Engineered Frames",
    description:
      "Stress-relieved welded steel frames machined to micron-level flatness for years of consistent folding.",
  },
  {
    id: "cnc",
    title: "Multi-Axis CNC",
    description:
      "Up to 12 controlled axes, programmable fold sequences, and recipe storage for any part.",
  },
  {
    id: "tooling",
    title: "Universal Tooling",
    description:
      "Quick-change segmented tooling accepts a wide range of profiles without lengthy setup.",
  },
  {
    id: "control",
    title: "Intuitive HMI",
    description:
      "Touchscreen interface with visual fold programming — your team is productive from day one.",
  },
  {
    id: "safety",
    title: "Safety First",
    description:
      "Light curtains, two-hand controls, and emergency stops to CE / UL standards on every model.",
  },
  {
    id: "support",
    title: "Global Support",
    description:
      "Installation, training, and 24/7 remote service backed by regional spare-parts warehouses.",
  },
];

export const processSteps = [
  {
    step: "01",
    title: "Consult",
    description:
      "We discuss your parts, materials, tolerances, and throughput targets to define the right machine.",
  },
  {
    step: "02",
    title: "Configure",
    description:
      "We configure folding length, axes, tooling, and automation options to fit your production line.",
  },
  {
    step: "03",
    title: "Build & Test",
    description:
      "Every machine is built, calibrated, and sample-tested in our facility before delivery.",
  },
  {
    step: "04",
    title: "Install & Train",
    description:
      "On-site installation, operator training, and process validation to get you folding from day one.",
  },
];

export const stats = [
  { value: "25+", label: "Years of engineering" },
  { value: "40+", label: "Countries served" },
  { value: "3,000+", label: "Machines installed" },
  { value: "98%", label: "Customer retention" },
];