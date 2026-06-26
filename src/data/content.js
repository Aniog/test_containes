// Product catalogue for ARTITECT MACHINERY.
// Each product maps to one of the requested product types.

export const products = [
  {
    id: "double-folding-machine",
    name: "Double Folding Machine",
    tagline: "Twin-beam precision for complex profiles",
    description:
      "Our flagship double folding machine uses two synchronized folding beams to form intricate multi-bend profiles in a single setup, dramatically reducing cycle times on high-mix work.",
    features: [
      "Dual synchronized folding beams",
      "0.1 mm bend repeatability",
      "Up to 4 mm mild steel capacity",
      "CNC backgauge with multi-axis control",
    ],
    imgId: "prod-double-folding-machine-a1b2",
    titleId: "prod-double-folding-machine-title",
    descId: "prod-double-folding-machine-desc",
  },
  {
    id: "double-folder",
    name: "Double Folder",
    tagline: "Versatile two-station folding",
    description:
      "A robust double folder built for fabricators who need flexible two-station operation. Quickly switch between box-and-pan and straight folding without retooling.",
    features: [
      "Quick-change finger system",
      "Independent upper and lower clamping",
      "Hardened steel beam edges",
      "Foot-pedal and CNC control modes",
    ],
    imgId: "prod-double-folder-c3d4",
    titleId: "prod-double-folder-title",
    descId: "prod-double-folder-desc",
  },
  {
    id: "sheet-metal-folder",
    name: "Sheet Metal Folder",
    tagline: "Reliable everyday folding",
    description:
      "A dependable sheet metal folder engineered for daily production. Balanced beam geometry and precision-ground fingers deliver clean, consistent bends across a wide range of gauges.",
    features: [
      "Precision-ground folding beam",
      "Adjustable beam stroke",
      "Slotted finger bar for box work",
      "Low-maintenance sealed bearings",
    ],
    imgId: "prod-sheet-metal-folder-e5f6",
    titleId: "prod-sheet-metal-folder-title",
    descId: "prod-sheet-metal-folder-desc",
  },
  {
    id: "sheet-metal-folding-machine",
    name: "Sheet Metal Folding Machine",
    tagline: "CNC-controlled folding power",
    description:
      "A fully programmable sheet metal folding machine that automates angle, backgauge, and beam positioning for repeatable accuracy on every part, from prototypes to production runs.",
    features: [
      "Touchscreen CNC controller",
      "Automatic angle compensation",
      "Servo-driven backgauge",
      "Programmable part library",
    ],
    imgId: "prod-sheet-metal-folding-machine-g7h8",
    titleId: "prod-sheet-metal-folding-machine-title",
    descId: "prod-sheet-metal-folding-machine-desc",
  },
  {
    id: "metal-folder",
    name: "Metal Folder",
    tagline: "Compact strength for the workshop",
    description:
      "A compact metal folder that brings industrial folding capability into smaller workshops. Rigid cast frame and a balanced beam handle heavier gauges with ease.",
    features: [
      "Welded steel monoblock frame",
      "High-torque clamping system",
      "Removable fingers for pans and boxes",
      "Bench or floor mounting options",
    ],
    imgId: "prod-metal-folder-i9j0",
    titleId: "prod-metal-folder-title",
    descId: "prod-metal-folder-desc",
  },
  {
    id: "metal-folder-machine",
    name: "Metal Folder Machine",
    tagline: "Heavy-duty production folding",
    description:
      "Built for continuous production, this metal folder machine pairs a reinforced drive with an extended bed length to handle long panels and high-volume folding schedules.",
    features: [
      "Extended bed up to 3 m",
      "Reinforced folding beam drive",
      "Pneumatic clamping assist",
      "Integrated safety light curtain",
    ],
    imgId: "prod-metal-folder-machine-k1l2",
    titleId: "prod-metal-folder-machine-title",
    descId: "prod-metal-folder-machine-desc",
  },
  {
    id: "metal-folding-machine",
    name: "Metal Folding Machine",
    tagline: "All-electric folding precision",
    description:
      "An all-electric metal folding machine that eliminates hydraulic maintenance while delivering quiet, energy-efficient, and highly repeatable folding for modern fabrication shops.",
    features: [
      "All-electric servo drives",
      "Energy-efficient operation",
      "Whisper-quiet workspace",
      "Real-time angle monitoring",
    ],
    imgId: "prod-metal-folding-machine-m3n4",
    titleId: "prod-metal-folding-machine-title",
    descId: "prod-metal-folding-machine-desc",
  },
]

export const features = [
  {
    title: "0.1 mm Repeatability",
    description:
      "Precision-ground beams and servo-driven backgauges hold bend accuracy to a tenth of a millimeter across long production runs.",
    icon: "Target",
  },
  {
    title: "Heavy-Duty Frames",
    description:
      "Welded steel monoblock frames are stress-relieved and machined to absorb deflection, keeping folds true even at full capacity.",
    icon: "ShieldCheck",
  },
  {
    title: "CNC Automation",
    description:
      "Intuitive touchscreen controllers store part programs, automate angle compensation, and shorten setup from hours to minutes.",
    icon: "Cpu",
  },
  {
    title: "Energy Efficient",
    description:
      "All-electric servo drives cut power consumption and noise while removing hydraulic fluid from your maintenance schedule.",
    icon: "Zap",
  },
  {
    title: "Global Support",
    description:
      "Factory-trained technicians, remote diagnostics, and a worldwide spare-parts network keep your line running with minimal downtime.",
    icon: "Headset",
  },
  {
    title: "Safety First",
    description:
      "Integrated light curtains, two-hand controls, and CE-compliant guarding protect operators without slowing throughput.",
    icon: "HardHat",
  },
]

export const applications = [
  {
    title: "HVAC & Ductwork",
    description:
      "Long, accurate folds for ducts, plenums, and fittings produced at high volume.",
    imgId: "app-hvac-o5p6",
    titleId: "app-hvac-title",
    descId: "app-hvac-desc",
  },
  {
    title: "Enclosures & Cabinets",
    description:
      "Clean, repeatable bends for electrical enclosures and control cabinets.",
    imgId: "app-enclosures-q7r8",
    titleId: "app-enclosures-title",
    descId: "app-enclosures-desc",
  },
  {
    title: "Automotive & Transport",
    description:
      "Precision panels and structural folds for vehicle bodies and trailers.",
    imgId: "app-automotive-s9t0",
    titleId: "app-automotive-title",
    descId: "app-automotive-desc",
  },
  {
    title: "Architecture & Facades",
    description:
      "Crisp architectural metalwork, cladding, and decorative facades.",
    imgId: "app-architecture-u1v2",
    titleId: "app-architecture-title",
    descId: "app-architecture-desc",
  },
]

export const stats = [
  { value: "25+", label: "Years of engineering" },
  { value: "40+", label: "Countries served" },
  { value: "0.1mm", label: "Bend repeatability" },
  { value: "24/7", label: "Technical support" },
]

export const navLinks = [
  { label: "Products", href: "#products" },
  { label: "Why Us", href: "#features" },
  { label: "Applications", href: "#applications" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
]
