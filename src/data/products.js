export const productCategories = [
  { id: "all", label: "All Series" },
  { id: "double", label: "Double Folding" },
  { id: "sheet", label: "Sheet Metal Folder" },
  { id: "metal", label: "Metal Folder" },
  { id: "heavy", label: "Heavy Duty" },
]

export const products = [
  {
    id: "atlas-d200",
    series: "ATLAS D Series",
    name: "Atlas D200 Double Folding Machine",
    tagline: "Flagship double folder for production lines",
    category: "double",
    aliases: [
      "double folding machine",
      "double folder",
    ],
    maxThicknessMm: 2.0,
    maxLengthMm: 3200,
    bendAngleDeg: 155,
    automation: "Semi-automatic",
    description:
      "Our flagship double folding machine pairs a rigid mono-block frame with servo-driven beam travel, delivering repeatable ±0.1° folds on steel up to 2 mm.",
    highlights: [
      "Servo-controlled clamping and folding beams",
      "Self-lubricating linear rails across 3.2 m",
      "Foot-pedal cycle start with two-hand safety",
    ],
    specs: {
      power: "7.5 kW",
      weight: "4 200 kg",
      airSupply: "6 bar @ 80 L/min",
      footprint: "3 950 × 1 250 × 1 600 mm",
    },
  },
  {
    id: "atlas-d320",
    series: "ATLAS D Series",
    name: "Atlas D320 Heavy Double Folder",
    tagline: "Extended-reach double folder for architectural panels",
    category: "double",
    aliases: [
      "double folding machine",
      "double folder",
      "metal folding machine",
    ],
    maxThicknessMm: 3.2,
    maxLengthMm: 4000,
    bendAngleDeg: 155,
    automation: "CNC",
    description:
      "Built for long architectural cladding, the D320 folds 3.2 mm mild steel across 4 m with a CNC crowning system that eliminates the centre deflection common on long beds.",
    highlights: [
      "CNC crowning with 9-axis compensation",
      "Hydraulic clamping at 14 t",
      "Quick-change tooling under 90 seconds",
    ],
    specs: {
      power: "15 kW",
      weight: "7 800 kg",
      airSupply: "6 bar @ 120 L/min",
      footprint: "4 900 × 1 600 × 1 800 mm",
    },
  },
  {
    id: "meridian-s160",
    series: "MERIDIAN S Series",
    name: "Meridian S160 Sheet Metal Folding Machine",
    tagline: "Precision sheet metal folder for general fabrication",
    category: "sheet",
    aliases: [
      "sheet metal folder",
      "sheet metal folding machine",
      "metal folder",
    ],
    maxThicknessMm: 1.6,
    maxLengthMm: 2500,
    bendAngleDeg: 150,
    automation: "Manual",
    description:
      "The Meridian S160 is a workshop-proven sheet metal folding machine with a magnetised backgauge and an angle-locking wedge for fast, repeatable folders.",
    highlights: [
      "Magnetised quick-set backgauge",
      "Replaceable segmented blade",
      "Foot-pedal operation with safety gate",
    ],
    specs: {
      power: "4 kW",
      weight: "2 150 kg",
      airSupply: "6 bar @ 60 L/min",
      footprint: "3 100 × 950 × 1 450 mm",
    },
  },
  {
    id: "meridian-s250",
    series: "MERIDIAN S Series",
    name: "Meridian S250 CNC Sheet Folder",
    tagline: "CNC sheet metal folding machine for batch production",
    category: "sheet",
    aliases: [
      "sheet metal folder",
      "sheet metal folding machine",
      "metal folder machine",
    ],
    maxThicknessMm: 2.5,
    maxLengthMm: 3200,
    bendAngleDeg: 155,
    automation: "CNC",
    description:
      "A CNC sheet metal folding machine with a 7-inch HMI, parametric bend library, and offline programming that lets operators import DXF bend tables directly.",
    highlights: [
      "Offline DXF bend programming",
      "7-inch industrial HMI with multi-language UI",
      "Automatic bend sequence optimisation",
    ],
    specs: {
      power: "9 kW",
      weight: "4 600 kg",
      airSupply: "6 bar @ 90 L/min",
      footprint: "3 950 × 1 200 × 1 700 mm",
    },
  },
  {
    id: "forge-m100",
    series: "FORGE M Series",
    name: "Forge M100 Metal Folder",
    tagline: "Compact metal folder machine for tight workshops",
    category: "metal",
    aliases: [
      "metal folder",
      "metal folder machine",
    ],
    maxThicknessMm: 1.0,
    maxLengthMm: 1500,
    bendAngleDeg: 145,
    automation: "Manual",
    description:
      "The Forge M100 is a compact metal folder machine designed for small-batch workshops. It runs on a single-phase supply and folds up to 1 mm galvanised steel.",
    highlights: [
      "Single-phase 230 V operation",
      "Bench-top and floor-stand mounting",
      "Tool-less blade change",
    ],
    specs: {
      power: "1.5 kW",
      weight: "420 kg",
      airSupply: "Not required",
      footprint: "1 800 × 720 × 1 200 mm",
    },
  },
  {
    id: "forge-m200",
    series: "FORGE M Series",
    name: "Forge M200 Metal Folding Machine",
    tagline: "Mid-capacity metal folding machine",
    category: "metal",
    aliases: [
      "metal folder",
      "metal folder machine",
      "metal folding machine",
    ],
    maxThicknessMm: 2.0,
    maxLengthMm: 2500,
    bendAngleDeg: 150,
    automation: "Semi-automatic",
    description:
      "The Forge M200 brings production-grade metal folding to mid-sized fabricators, with a swing-beam geometry that holds ±0.2° accuracy on stainless up to 1.5 mm.",
    highlights: [
      "Swing-beam geometry for tight box profiles",
      "Hardened and ground tool rails",
      "Cycle counter with maintenance alerts",
    ],
    specs: {
      power: "5.5 kW",
      weight: "3 100 kg",
      airSupply: "6 bar @ 60 L/min",
      footprint: "3 200 × 1 100 × 1 550 mm",
    },
  },
  {
    id: "titan-h400",
    series: "TITAN H Series",
    name: "Titan H400 Heavy Duty Folder",
    tagline: "Heavy duty metal folder machine for thick plate",
    category: "heavy",
    aliases: [
      "metal folder machine",
      "metal folding machine",
      "double folder",
    ],
    maxThicknessMm: 4.0,
    maxLengthMm: 4000,
    bendAngleDeg: 160,
    automation: "CNC",
    description:
      "A heavy duty metal folder machine with a 200-tonne hydraulic clamp and a stress-relieved welded frame engineered for 4 mm mild-steel production runs.",
    highlights: [
      "200-tonne hydraulic clamping",
      "Stress-relieved welded frame",
      "Optional 6-axis robotic feeder",
    ],
    specs: {
      power: "22 kW",
      weight: "12 500 kg",
      airSupply: "6 bar @ 150 L/min",
      footprint: "5 200 × 1 800 × 2 100 mm",
    },
  },
  {
    id: "titan-h600",
    series: "TITAN H Series",
    name: "Titan H600 Plate Folder",
    tagline: "Largest heavy duty folding machine in the line",
    category: "heavy",
    aliases: [
      "metal folding machine",
      "double folding machine",
    ],
    maxThicknessMm: 6.0,
    maxLengthMm: 6000,
    bendAngleDeg: 160,
    automation: "CNC",
    description:
      "The Titan H600 handles 6 mm plate across 6 m with a twin-hydraulic-cylinder clamp and a bed-extension table for plate-form workpieces.",
    highlights: [
      "Twin hydraulic clamp cylinders",
      "Hydraulic crowning compensation",
      "Sliding bed extension for large plates",
    ],
    specs: {
      power: "37 kW",
      weight: "21 800 kg",
      airSupply: "6 bar @ 200 L/min",
      footprint: "7 400 × 2 200 × 2 400 mm",
    },
  },
]

export const productById = Object.fromEntries(
  products.map((product) => [product.id, product]),
)
