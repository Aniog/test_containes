// Product catalogue for ARTITECT MACHINERY
// Each model maps to one or more of the seven product categories provided.

export const products = [
  {
    slug: "df-2400",
    model: "ARTITECT DF-2400",
    name: "Double Folding Machine",
    category: "Flagship",
    tagline: "Dual-axis precision folding for high-volume production lines.",
    summary:
      "A high-tonnage double folding machine engineered for fabricators who need repeatable accuracy on long, complex bends without slowing the line down.",
    covers: ["Double Folding Machine", "Double Folder"],
    image: {
      query: "industrial sheet metal folding machine in dark factory",
      ratio: "4x3",
      width: 900,
    },
    specs: [
      { label: "Max bending length", value: "2,400 mm" },
      { label: "Bending force", value: "120 ton" },
      { label: "Repeatability", value: "± 0.01 mm" },
      { label: "Control", value: "9-axis CNC" },
    ],
    features: [
      "Synchronised dual-axis ram for symmetric folding",
      "Hydraulic crowning system with auto-compensation",
      "Tool library stores 64 bending profiles",
      "Offline programming & DXF import",
    ],
    bestFor: "HVAC, enclosure fabrication, architectural panels",
  },
  {
    slug: "sf-1500",
    model: "ARTITECT SF-1500",
    name: "Sheet Metal Folding Machine",
    category: "Versatile",
    tagline: "Compact, accurate, and built for job-shop flexibility.",
    summary:
      "The SF-1500 sheet metal folding machine delivers production-grade precision in a footprint sized for boutique workshops and contract manufacturers.",
    covers: ["Sheet Metal Folding Machine", "Sheet Metal Folder"],
    image: {
      query: "compact sheet metal folder press brake machine",
      ratio: "4x3",
      width: 900,
    },
    specs: [
      { label: "Max bending length", value: "1,500 mm" },
      { label: "Bending force", value: "60 ton" },
      { label: "Throat depth", value: "410 mm" },
      { label: "Control", value: "7-inch HMI" },
    ],
    features: [
      "Quick-clamp tool change in under 60 seconds",
      "Built-in angle library with 200 presets",
      "Energy-efficient hybrid drive",
      "Low-noise operation under 68 dB",
    ],
    bestFor: "Custom fabrication, prototyping, low-volume runs",
  },
  {
    slug: "mf-1800",
    model: "ARTITECT MF-1800",
    name: "Metal Folder Machine",
    category: "Workhorse",
    tagline: "Heavy-duty metal folder for thick plate and structural work.",
    summary:
      "A metal folder machine built for steel service centres and structural fabricators folding thick plate, stainless and aluminium day in and day out.",
    covers: ["Metal Folder Machine", "Metal Folder"],
    image: {
      query: "large metal folder machine industrial workshop",
      ratio: "4x3",
      width: 900,
    },
    specs: [
      { label: "Max bending length", value: "1,800 mm" },
      { label: "Bending force", value: "200 ton" },
      { label: "Plate thickness", value: "Up to 6 mm mild steel" },
      { label: "Control", value: "12-axis CNC" },
    ],
    features: [
      "Reinforced welded steel frame, stress-relieved",
      "Heavy-duty backgauge with 4-finger positioning",
      "Adaptive pressure control for plate thickness variation",
      "Optional tandem configuration for 6 m lines",
    ],
    bestFor: "Steel service centres, shipyards, structural fabrication",
  },
  {
    slug: "mfl-3200",
    model: "ARTITECT MFL-3200",
    name: "Metal Folding Machine",
    category: "Production",
    tagline: "Long-bed metal folding machine for architectural and transport panels.",
    summary:
      "The MFL-3200 metal folding machine combines long-bed capacity with the finesse needed for premium architectural cladding, bus body panels and rail interiors.",
    covers: ["Metal Folding Machine"],
    image: {
      query: "long bed metal folding machine architectural panels",
      ratio: "4x3",
      width: 900,
    },
    specs: [
      { label: "Max bending length", value: "3,200 mm" },
      { label: "Bending force", value: "160 ton" },
      { label: "Bend angle range", value: "0° – 180°" },
      { label: "Control", value: "15-inch touchscreen CNC" },
    ],
    features: [
      "Four-cylinder synchronised ram",
      "Vacuum-cup sheet support for thin gauges",
      "Automatic tool length compensation",
      "Network-ready for Industry 4.0 lines",
    ],
    bestFor: "Architectural cladding, bus & coach, railway interiors",
  },
  {
    slug: "dfx-500",
    model: "ARTITECT DFX-500",
    name: "Compact Double Folder",
    category: "Benchtop",
    tagline: "Bench-class double folder for studios, R&D and short runs.",
    summary:
      "A bench-class double folder that brings industrial precision into the studio. Quiet, fast, and intuitive enough to operate after a 20-minute onboarding.",
    covers: ["Double Folder", "Metal Folder"],
    image: {
      query: "small benchtop metal folder machine in workshop",
      ratio: "4x3",
      width: 900,
    },
    specs: [
      { label: "Max bending length", value: "500 mm" },
      { label: "Bending force", value: "8 ton" },
      { label: "Material thickness", value: "Up to 2 mm mild steel" },
      { label: "Control", value: "Manual + digital readout" },
    ],
    features: [
      "Foot-pedal operation, hands-free workflow",
      "Pneumatic clamping, no hydraulics",
      "Tool-free segment changes",
      "Fits through a standard 800 mm doorway",
    ],
    bestFor: "Design studios, signage makers, R&D labs",
  },
]

export const categoryList = [
  "All",
  "Flagship",
  "Versatile",
  "Workhorse",
  "Production",
  "Benchtop",
]
