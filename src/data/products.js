export const productCategories = [
  {
    id: "double-folding",
    title: "Double Folding Machines",
    name: "Double Folding Machine",
    short:
      "Symmetric upper-and-lower beam folding for perfect, repeatable double folds in a single pass.",
    description:
      "Our flagship double folding machines deliver simultaneous top and bottom beam action, eliminating workpiece flipping and producing flawless symmetrical folds. Ideal for HVAC, enclosure, and architectural panels where consistency is non-negotiable.",
    features: [
      "Dual-beam synchronized folding up to 6 m",
      "±0.05° repeatability across full length",
      "CNC angle control with 200-program memory",
      "Hydraulic clamping with soft-touch die",
    ],
    specs: [
      { label: "Max sheet length", value: "6,000 mm" },
      { label: "Mild steel capacity", value: "3.0 mm" },
      { label: "Stainless capacity", value: "1.5 mm" },
      { label: "Fold angle range", value: "0° – 180°" },
      { label: "Bending power", value: "120 ton" },
    ],
    industries: ["HVAC", "Architectural cladding", "Switchgear", "Signage"],
    accent: "copper",
  },
  {
    id: "sheet-metal-folder",
    title: "Sheet Metal Folders",
    name: "Sheet Metal Folder",
    short:
      "Versatile folder engineered for high-mix fabrication shops producing cabinets, panels, and bespoke enclosures.",
    description:
      "The sheet metal folder series combines the precision of press-brake technology with the speed of a folder. Tool-free setup, intuitive HMI, and consistent results across shifts.",
    features: [
      "Automatic tool-less setup under 60 seconds",
      "15.6″ multi-touch HMI with recipe library",
      "Adaptive crowning system for full-length accuracy",
      "Energy-saving hybrid drive",
    ],
    specs: [
      { label: "Max sheet length", value: "4,000 mm" },
      { label: "Mild steel capacity", value: "2.5 mm" },
      { label: "Aluminum capacity", value: "3.5 mm" },
      { label: "Fold angle range", value: "0° – 180°" },
      { label: "Drive", value: "Hybrid servo-hydraulic" },
    ],
    industries: ["Cabinetry", "Industrial enclosures", "Furniture", "Automotive"],
    accent: "copper",
  },
  {
    id: "metal-folding-machine",
    title: "Metal Folding Machines",
    name: "Metal Folding Machine",
    short:
      "Heavy-duty CNC folders built for 24/7 production of thick plate components and structural fabrications.",
    description:
      "Engineered for thick gauge steel and high-tonnage operations, our metal folding machines feature rigid welded frames, oversized bearings, and adaptive controllers that simplify even the most demanding folds.",
    features: [
      "Welded mono-block frame, stress-relieved",
      "Up to 320 ton ram force",
      "Dynamic crowning with closed-loop feedback",
      "Offline programming with 3D simulation",
    ],
    specs: [
      { label: "Max sheet length", value: "8,000 mm" },
      { label: "Mild steel capacity", value: "8.0 mm" },
      { label: "Stainless capacity", value: "5.0 mm" },
      { label: "Ram force", value: "320 ton" },
      { label: "Repeatability", value: "±0.02 mm" },
    ],
    industries: ["Shipbuilding", "Energy", "Heavy fabrication", "Rail"],
    accent: "copper",
  },
  {
    id: "metal-folder",
    title: "Metal Folder",
    name: "Metal Folder",
    short:
      "Compact floor-standing folder with all the rigidity of larger systems — perfect for tight workshops.",
    description:
      "A space-conscious metal folder that doesn't compromise on accuracy. Its vertically-folding beam design gives fabricators access to a complete bending center without the floor footprint.",
    features: [
      "Vertical beam design reduces floor area 30%",
      "Pneumatic clamping with safety guard",
      "Digital angle read-out with memory presets",
      "Optional rear gauging for box sections",
    ],
    specs: [
      { label: "Max sheet length", value: "2,500 mm" },
      { label: "Mild steel capacity", value: "1.6 mm" },
      { label: "Footprint", value: "1.8 × 1.2 m" },
      { label: "Fold angle range", value: "0° – 135°" },
      { label: "Operator level", value: "Single-person" },
    ],
    industries: ["Job shops", "Prototyping", "Lighting", "Educational labs"],
    accent: "copper",
  },
  {
    id: "metal-folder-machine",
    title: "Metal Folder Machines",
    name: "Metal Folder Machine",
    short:
      "Production-grade folder machines with automated loading and inline part handling for lights-out manufacturing.",
    description:
      "Built for fabricators who want true lights-out production. Integrated conveyors, automated loaders, and SCADA-ready controllers make our metal folder machines the centerpiece of any Industry 4.0 cell.",
    features: [
      "Inline robotic loading and stacking",
      "OPC-UA / MQTT for factory integration",
      "Predictive maintenance with sensor telemetry",
      "Multi-shift uptime verified over 95%",
    ],
    specs: [
      { label: "Cycle time", value: "≤ 4.2 s per fold" },
      { label: "Uptime", value: "≥ 95% over 24 h" },
      { label: "Max sheet length", value: "3,200 mm" },
      { label: "Mild steel capacity", value: "2.0 mm" },
      { label: "Controller", value: "ARTITECT A7 CNC" },
    ],
    industries: ["Contract manufacturing", "Aerospace Tier 2", "White goods"],
    accent: "copper",
  },
  {
    id: "sheet-metal-folding",
    title: "Sheet Metal Folding Machines",
    name: "Sheet Metal Folding Machine",
    short:
      "Mid-format folding machine that bridges the gap between compact folders and full press-brake cells.",
    description:
      "A perfect balance of reach, accuracy, and value. Our sheet metal folding machines bring press-brake-grade results to mid-volume fabricators without the press-brake footprint.",
    features: [
      "3-stage adjustable bending beam",
      "Quick-change segmented tools",
      "Laser angle measurement with closed-loop correction",
      "CE / UL / CSA compliant safety architecture",
    ],
    specs: [
      { label: "Max sheet length", value: "3,200 mm" },
      { label: "Mild steel capacity", value: "2.0 mm" },
      { label: "Stainless capacity", value: "1.2 mm" },
      { label: "Fold angle range", value: "0° – 180°" },
      { label: "Safety", value: "Cat. 4 / PL e" },
    ],
    industries: ["HVAC", "Server racks", "Medical devices", "Display"],
    accent: "copper",
  },
  {
    id: "double-folder",
    title: "Double Folder",
    name: "Double Folder",
    short:
      "Compact double folder optimized for short runs of symmetrical parts and edge-hemming operations.",
    description:
      "Our double folder is the smallest member of the family, designed for workshops that need consistent hem and edge folds in small batches without the overhead of a full press brake.",
    features: [
      "Compact footprint fits through standard doors",
      "Pneumatic beam assist for thin-gauge materials",
      "Foot-pedal control with two-hand safety",
      "Plug-and-play single-phase power",
    ],
    specs: [
      { label: "Max sheet length", value: "1,250 mm" },
      { label: "Mild steel capacity", value: "1.0 mm" },
      { label: "Power", value: "230 V single phase" },
      { label: "Fold angle range", value: "0° – 135°" },
      { label: "Weight", value: "480 kg" },
    ],
    industries: ["Small batch metalwork", "Workshops", "Restoration"],
    accent: "copper",
  },
];

export const findProductBySlug = (slug) =>
  productCategories.find((product) => product.id === slug);