// Central product catalogue for ARTITECT MACHINERY
// Each product references stable IDs used by the data-strk-img system.

export const products = [
  {
    id: "ax-2000",
    slug: "ax-2000",
    name: "AX-2000 Double Folding Machine",
    category: "Double Folding Machine",
    tagline: "Twin-beam precision for high-volume workshops.",
    description:
      "A heavy-duty double folder engineered for symmetrical up- and down-bends in a single cycle. Built for production floors that cannot stop.",
    specs: [
      { label: "Max sheet width", value: "2,050 mm" },
      { label: "Max thickness (mild steel)", value: "2.0 mm" },
      { label: "Folding angle", value: "± 145°" },
      { label: "Control", value: "Touchscreen CNC" },
    ],
    highlights: [
      "Twin folding beams for up and down bends",
      "Servo-driven backgauge with 0.05 mm repeatability",
      "Tool-free crowning adjustment",
    ],
    imgId: "product-ax2000-9a3b7c",
  },
  {
    id: "ax-2500",
    slug: "ax-2500",
    name: "AX-2500 Heavy Duty Double Folder",
    category: "Double Folder",
    tagline: "When your sheets get wider and your tolerances get tighter.",
    description:
      "Our flagship double folder. Reinforced frame, hardened tooling, and a control system that learns from every fold.",
    specs: [
      { label: "Max sheet width", value: "2,550 mm" },
      { label: "Max thickness (mild steel)", value: "2.5 mm" },
      { label: "Folding angle", value: "± 145°" },
      { label: "Control", value: "15 inch CNC HMI" },
    ],
    highlights: [
      "Reinforced welded steel frame",
      "Auto tool changer (optional)",
      "Programmable batch sequences",
    ],
    imgId: "product-ax2500-2e8f1d",
  },
  {
    id: "sf-1600",
    slug: "sf-1600",
    name: "SF-1600 Sheet Metal Folder",
    category: "Sheet Metal Folder",
    tagline: "The compact workhorse for fabrication shops.",
    description:
      "A versatile single-beam sheet metal folder that handles HVAC, signage, and cladding work with quiet precision.",
    specs: [
      { label: "Max sheet width", value: "1,600 mm" },
      { label: "Max thickness", value: "1.5 mm" },
      { label: "Folding angle", value: "0° to 135°" },
      { label: "Control", value: "Digital readout" },
    ],
    highlights: [
      "Quick-release segmented top beam",
      "Pneumatic clamping option",
      "Footprint under 3 square metres",
    ],
    imgId: "product-sf1600-4c91a2",
  },
  {
    id: "sf-2050",
    slug: "sf-2050",
    name: "SF-2050 Sheet Metal Folding Machine",
    category: "Sheet Metal Folding Machine",
    tagline: "Wide-format folding with workshop-friendly economics.",
    description:
      "A 2 m sheet metal folding machine balancing serious capacity with a setup any operator can master in an afternoon.",
    specs: [
      { label: "Max sheet width", value: "2,050 mm" },
      { label: "Max thickness", value: "1.8 mm" },
      { label: "Folding angle", value: "0° to 140°" },
      { label: "Control", value: "Touchscreen" },
    ],
    highlights: [
      "10 program memory presets",
      "LED-guided fold line",
      "Energy efficient servo drive",
    ],
    imgId: "product-sf2050-7d4e6b",
  },
  {
    id: "mf-1250",
    slug: "mf-1250",
    name: "MF-1250 Metal Folder",
    category: "Metal Folder",
    tagline: "A compact metal folder for benches and bays.",
    description:
      "Designed for small workshops, repair bays and prototype labs. Manual clamping, electric folding, total control.",
    specs: [
      { label: "Max sheet width", value: "1,250 mm" },
      { label: "Max thickness", value: "1.2 mm" },
      { label: "Folding angle", value: "0° to 135°" },
      { label: "Control", value: "Foot pedal and digital angle gauge" },
    ],
    highlights: [
      "Plug-and-play single phase",
      "Sectioned top tooling included",
      "Manual fine-angle adjustment",
    ],
    imgId: "product-mf1250-c5e2f8",
  },
  {
    id: "mfx-3000",
    slug: "mfx-3000",
    name: "MFX-3000 Metal Folder Machine",
    category: "Metal Folder Machine",
    tagline: "Three-metre folding capacity. No compromises.",
    description:
      "A 3 m fully-electric metal folder machine built for architectural panels, long facade trims and bespoke fabrication.",
    specs: [
      { label: "Max sheet width", value: "3,050 mm" },
      { label: "Max thickness", value: "1.6 mm" },
      { label: "Folding angle", value: "± 140°" },
      { label: "Control", value: "CNC with profile library" },
    ],
    highlights: [
      "Long-format crowning system",
      "Integrated material support arms",
      "Profile import via USB",
    ],
    imgId: "product-mfx3000-a1f4d9",
  },
];

export const productCategories = [
  "All",
  "Double Folding Machine",
  "Double Folder",
  "Sheet Metal Folder",
  "Sheet Metal Folding Machine",
  "Metal Folder",
  "Metal Folder Machine",
];

export const getProductBySlug = (slug) =>
  products.find((product) => product.slug === slug) || null;
