// Centralized content for the ARTITECT MACHINERY site.
// All seven product variants are surfaced individually so the catalog
// reads as a true family of machines rather than a single SKU.

export const brand = {
  name: "ARTITECT MACHINERY",
  tagline: "Precision Metal Folding Systems",
  description:
    "We engineer double folding machines, sheet metal folders and high-performance metal folding systems for fabrication shops that refuse to compromise on accuracy.",
  established: 1998,
};

export const navLinks = [
  { id: "products", label: "Products" },
  { id: "capabilities", label: "Capabilities" },
  { id: "industries", label: "Industries" },
  { id: "engineering", label: "Engineering" },
  { id: "contact", label: "Contact" },
];

// Each product is presented as a variant within the same engineering family.
export const products = [
  {
    id: "double-folding-machine",
    name: "Double Folding Machine",
    summary:
      "Our flagship double-action folder engineered for continuous, two-direction bending in a single pass.",
    description:
      "Combines an upper and lower beam to fold in opposite directions without re-positioning the workpiece. Ideal for complex panels, deep channels and high-volume production runs.",
    specs: [
      { label: "Max. working length", value: "6,000 mm" },
      { label: "Bending angle", value: "0° – 180°" },
      { label: "Sheet thickness", value: "0.4 – 3.2 mm" },
      { label: "Cycle time", value: "< 2.4 s / fold" },
    ],
  },
  {
    id: "double-folder",
    name: "Double Folder",
    summary:
      "Compact, double-beam folder designed for fabrication bays where floor space and output both matter.",
    description:
      "A streamlined variant of our double folding machine, optimized for smaller batch runs without sacrificing the precision of our flagship system.",
    specs: [
      { label: "Working length", value: "3,200 mm" },
      { label: "Folding beam", value: "Dual hydraulic" },
      { label: "Control", value: "Touchscreen HMI" },
      { label: "Footprint", value: "2.6 × 1.4 m" },
    ],
  },
  {
    id: "sheet-metal-folder",
    name: "Sheet Metal Folder",
    summary:
      "Heavy-duty folder engineered for consistent results across mild steel, stainless and aluminium sheet.",
    description:
      "An industrial workhorse for general sheet metal workshops. The crowning system ensures uniform pressure across the full length of the bending beam.",
    specs: [
      { label: "Material", value: "Mild / stainless / aluminium" },
      { label: "Pressure", value: "Up to 220 t" },
      { label: "Beam", value: "Hardened crowning" },
      { label: "Repeatability", value: "± 0.02 mm" },
    ],
  },
  {
    id: "sheet-metal-folding-machine",
    name: "Sheet Metal Folding Machine",
    summary:
      "Automated sheet metal folding cell with programmable sequence and inline angle measurement.",
    description:
      "Pairs an industrial-grade folding beam with a fully programmable backgauge and angle-detection system. Set the profile once, repeat it perfectly.",
    specs: [
      { label: "Automation", value: "Multi-axis backgauge" },
      { label: "Angle accuracy", value: "± 0.5°" },
      { label: "Programs", value: "200+ stored" },
      { label: "Interface", value: "10\" industrial HMI" },
    ],
  },
  {
    id: "metal-folder",
    name: "Metal Folder",
    summary:
      "Versatile folder for ferrous and non-ferrous metalwork, from architectural panels to enclosure fabrications.",
    description:
      "A general-purpose metal folder that balances reach, tonnage and control. The first choice for shops that switch between small and large workpieces throughout the day.",
    specs: [
      { label: "Use", value: "Ferrous + non-ferrous" },
      { label: "Beam length", value: "2,000 – 4,000 mm" },
      { label: "Speed", value: "10 mm/s rapid" },
      { label: "Setup time", value: "< 5 min" },
    ],
  },
  {
    id: "metal-folder-machine",
    name: "Metal Folder Machine",
    summary:
      "Precision folder machine for fabricators who need absolute repeatability on tight tolerances.",
    description:
      "Designed for the most demanding tolerances in the metal folder machine category, with servo-driven clamping and a digital angle library.",
    specs: [
      { label: "Clamping", value: "Servo-electric" },
      { label: "Tolerance", value: "± 0.01 mm" },
      { label: "Angle library", value: "Unlimited profiles" },
      { label: "Connectivity", value: "OPC-UA / MQTT" },
    ],
  },
  {
    id: "metal-folding-machine",
    name: "Metal Folding Machine",
    summary:
      "Our most powerful metal folding machine — built for thick plate, structural steel and 24/7 production.",
    description:
      "A heavy-frame folding system for thick plate, structural members and 24/7 production. Designed for fabricators serving shipyards, energy and heavy industry.",
    specs: [
      { label: "Plate thickness", value: "Up to 12 mm" },
      { label: "Tonnage", value: "Up to 800 t" },
      { label: "Frame", value: "Stress-relieved steel" },
      { label: "Duty cycle", value: "24 / 7" },
    ],
  },
];

export const capabilities = [
  {
    id: "precision-engineering",
    title: "Precision engineering",
    description:
      "Closed-loop angle measurement and crowning compensation deliver consistent folds within ± 0.5°, batch after batch.",
    icon: "Cog",
  },
  {
    id: "robust-construction",
    title: "Robust construction",
    description:
      "Stress-relieved steel frames, hardened tooling and oversized linear bearings built to outlast a decade of two-shift production.",
    icon: "ShieldCheck",
  },
  {
    id: "intuitive-control",
    title: "Intuitive control",
    description:
      "Operator-friendly HMI with multi-language interface, stored programs and one-touch recall of your most common profiles.",
    icon: "Monitor",
  },
  {
    id: "global-support",
    title: "Global support",
    description:
      "Twenty-seven service partners across four continents with 48-hour on-site response for any critical-stop event.",
    icon: "Globe2",
  },
  {
    id: "safety-first",
    title: "Safety first",
    description:
      "Light curtains, dual-channel safety circuits and CE / UL / CSA certification as standard on every machine we ship.",
    icon: "Lock",
  },
  {
    id: "energy-efficient",
    title: "Energy efficient",
    description:
      "Variable-frequency hydraulics and standby modes cut power consumption by up to 38% versus legacy folders.",
    icon: "Leaf",
  },
];

export const industries = [
  {
    id: "architecture",
    name: "Architecture & façades",
    description:
      "Architectural cladding, decorative panels and façade elements produced with consistent folds and invisible tooling marks.",
  },
  {
    id: "enclosures",
    name: "Electrical enclosures",
    description:
      "Server cabinets, control panels and IP-rated enclosures where repeatable, gasket-friendly seams are non-negotiable.",
  },
  {
    id: "automotive",
    name: "Automotive & mobility",
    description:
      "Chassis components, EV battery enclosures and tier-1 sub-assemblies produced to the automotive sector's tight tolerances.",
  },
  {
    id: "hvac",
    name: "HVAC & ductwork",
    description:
      "Galvanized and stainless ductwork, fittings and transitions for commercial and industrial ventilation projects.",
  },
  {
    id: "energy",
    name: "Energy & utilities",
    description:
      "Switchgear housings, transformer tanks and structural components for power generation and distribution.",
  },
  {
    id: "heavy-industry",
    name: "Heavy industry",
    description:
      "Thick-plate fabrication for shipbuilding, mining and rail — built to keep running through the toughest duty cycles.",
  },
];

export const stats = [
  { value: "27+", label: "Years engineering folders" },
  { value: "1,400", label: "Installations worldwide" },
  { value: "48h", label: "Critical-stop response" },
  { value: "27", label: "Service partners" },
];

export const process = [
  {
    step: "01",
    title: "Consult",
    description:
      "We learn about your parts, materials, tolerances and throughput to recommend the right machine family.",
  },
  {
    step: "02",
    title: "Configure",
    description:
      "Working length, tonnage, automation level and tooling are specified to match your production line.",
  },
  {
    step: "03",
    title: "Build",
    description:
      "Frames are stress-relieved, components are precision-ground and assemblies are run-in before shipment.",
  },
  {
    step: "04",
    title: "Support",
    description:
      "On-site commissioning, operator training and lifetime remote diagnostics keep your line productive.",
  },
];
