export const products = [
  {
    id: "double-folding-machine",
    slug: "double-folding-machine",
    name: "Double Folding Machine",
    tagline: "Two-sided precision in a single pass.",
    description:
      "Our flagship double folding machine folds sheet metal on both sides in one continuous operation, eliminating the manual re-positioning step. Engineered for fabricators who need repeatable accuracy on long production runs.",
    highlights: [
      "Up to 6 m folding length",
      "±0.1° repeatability on both bending beams",
      "Touch-screen CNC control with 200 program memory",
      "Hydraulic clamping with quick-change tooling",
    ],
    specs: {
      capacity: "0.4 – 4.0 mm mild steel",
      length: "2.0 / 3.0 / 4.0 / 6.0 m",
      power: "Hydraulic, 380 V three-phase",
    },
  },
  {
    id: "double-folder",
    slug: "double-folder",
    name: "Double Folder",
    tagline: "Symmetrical folds, twice as fast.",
    description:
      "A double folder designed for high-mix shops that switch frequently between short and long bends. Two independent folding beams work in concert to deliver clean, parallel edges on every panel.",
    highlights: [
      "Independent beam angle control",
      "Auto-crown compensation for long sheets",
      "Foot-pedal and console dual operation",
      "Tool-free setup under 90 seconds",
    ],
    specs: {
      capacity: "0.5 – 3.0 mm mild steel",
      length: "2.0 / 3.0 / 4.0 m",
      power: "Electro-hydraulic",
    },
  },
  {
    id: "sheet-metal-folder",
    slug: "sheet-metal-folder",
    name: "Sheet Metal Folder",
    tagline: "The workhorse for everyday fabrication.",
    description:
      "A versatile sheet metal folder built for HVAC, enclosure, and architectural panel work. Its robust beam and intuitive controls make it the dependable centerpiece of any fabrication shop.",
    highlights: [
      "Heavy-duty welded steel frame",
      "Adjustable beam opening up to 180 mm",
      "Mechanical angle stops for fast setup",
      "Optional backgauge for repeatable folds",
    ],
    specs: {
      capacity: "0.4 – 3.5 mm mild steel",
      length: "1.5 / 2.0 / 3.0 / 4.0 m",
      power: "Manual or motorized",
    },
  },
  {
    id: "sheet-metal-folding-machine",
    slug: "sheet-metal-folding-machine",
    name: "Sheet Metal Folding Machine",
    tagline: "Industrial capacity, refined control.",
    description:
      "Our sheet metal folding machine combines industrial tonnage with a refined digital control system. Program complex multi-bend sequences and let the machine deliver them consistently, shift after shift.",
    highlights: [
      "Multi-axis CNC backgauge",
      "Up to 200 ton pressing force",
      "Offline programming software included",
      "Energy-efficient variable-speed hydraulics",
    ],
    specs: {
      capacity: "0.5 – 6.0 mm mild steel",
      length: "3.0 / 4.0 / 6.0 m",
      power: "Servo-hydraulic",
    },
  },
  {
    id: "metal-folder",
    slug: "metal-folder",
    name: "Metal Folder",
    tagline: "Compact. Capable. Built to last.",
    description:
      "The metal folder is designed for shops where floor space is at a premium. A compact footprint does not mean a compromise — the rigid mono-block frame delivers the same precision as our full-size machines.",
    highlights: [
      "Smallest footprint in its class",
      "Up to 1.2 m folding length",
      "Ideal for stainless and aluminum",
      "Lockable safety guards included",
    ],
    specs: {
      capacity: "0.4 – 2.0 mm mild steel",
      length: "1.0 / 1.2 m",
      power: "Single-phase 220 V",
    },
  },
  {
    id: "metal-folder-machine",
    slug: "metal-folder-machine",
    name: "Metal Folder Machine",
    tagline: "Heavy-gauge bending, day in, day out.",
    description:
      "Built for thick plate and structural steel, the metal folder machine delivers the rigidity and power required for heavy-gauge work without sacrificing the finesse of a precision bend.",
    highlights: [
      "Up to 8 mm mild steel capacity",
      "Reinforced folding beam for thick plate",
      "Industrial-grade hydraulics",
      "24-month warranty and lifetime support",
    ],
    specs: {
      capacity: "0.8 – 8.0 mm mild steel",
      length: "3.0 / 4.0 / 6.0 m",
      power: "Hydraulic, 380 V three-phase",
    },
  },
  {
    id: "metal-folding-machine",
    slug: "metal-folding-machine",
    name: "Metal Folding Machine",
    tagline: "The reference standard for precision.",
    description:
      "Our metal folding machine represents the pinnacle of our engineering: tight tolerances, premium hydraulics, and a control system that anticipates the operator's needs. It is the machine that defines a category.",
    highlights: [
      "±0.05° precision across the full length",
      "Closed-loop force feedback",
      "Smartphone-style HMI with remote diagnostics",
      "Available in custom lengths up to 8 m",
    ],
    specs: {
      capacity: "0.3 – 5.0 mm mild steel",
      length: "2.0 / 3.0 / 4.0 / 6.0 / 8.0 m",
      power: "Servo-hydraulic",
    },
  },
]

export const productBySlug = (slug) =>
  products.find((p) => p.slug === slug) || null

export const productListIntro = {
  eyebrow: "Our Machines",
  title: "A complete family of folding machines.",
  subtitle:
    "From compact metal folders to industrial double folding machines, every product in the ARTITECT lineup is built to the same standard of precision and reliability.",
}
