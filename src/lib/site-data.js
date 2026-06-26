// Centralised content for the ARTITECT MACHINERY site.
// Keeping copy in one place makes the section components small and the
// messaging easy to tune without hunting through JSX.

export const brand = {
  name: "ARTITECT MACHINERY",
  short: "ARTITECT",
  tagline: "Precision Sheet Metal Folding Machines",
  description:
    "ARTITECT MACHINERY engineers industrial-grade folding systems for sheet metal fabricators who refuse to compromise on tolerance, repeatability and uptime.",
};

export const navLinks = [
  { id: "products", label: "Products" },
  { id: "capabilities", label: "Capabilities" },
  { id: "engineering", label: "Engineering" },
  { id: "process", label: "Process" },
  { id: "contact", label: "Contact" },
];

export const heroStats = [
  { value: "0.01", unit: "mm", label: "Repeatable tolerance" },
  { value: "12", unit: "mm", label: "Mild steel capacity" },
  { value: "320", unit: "t", label: "Maximum folding force" },
  { value: "24/7", unit: "", label: "Production uptime" },
];

// The seven product lines the brand manufactures.
// Each entry has stable ID fields used for the strk-img query references.
export const products = [
  {
    id: "double-folding-machine",
    title: "Double Folding Machine",
    eyebrow: "01 / Flagship",
    summary:
      "Our flagship double-acting folder delivers simultaneous up-and-down beam movement for true mirror-image folds in a single pass.",
    specs: [
      { k: "Folding length", v: "Up to 6 000 mm" },
      { k: "Material thickness", v: "0.4 – 6.0 mm" },
      { k: "Beam force", v: "320 t" },
      { k: "Control", v: "9-axis CNC" },
    ],
    imgId: "product-double-folding-machine-7c1a",
    imgQuery: "industrial double folding machine press brake sheet metal factory floor",
    titleId: "product-double-folding-machine-title",
    descId: "product-double-folding-machine-desc",
  },
  {
    id: "double-folder",
    title: "Double Folder",
    eyebrow: "02 / Production",
    summary:
      "Compact dual-beam folder designed for high-mix workshops where every shift demands a different fold sequence.",
    specs: [
      { k: "Folding length", v: "Up to 4 000 mm" },
      { k: "Material thickness", v: "0.5 – 4.0 mm" },
      { k: "Beam force", v: "180 t" },
      { k: "Control", v: "7-axis CNC" },
    ],
    imgId: "product-double-folder-3b9e",
    imgQuery: "compact double folder metal folding machine workshop operator",
    titleId: "product-double-folder-title",
    descId: "product-double-folder-desc",
  },
  {
    id: "sheet-metal-folder",
    title: "Sheet Metal Folder",
    eyebrow: "03 / Versatile",
    summary:
      "A general-purpose sheet metal folder engineered for fabricators who value quick setup, forgiving tooling and clean geometry.",
    specs: [
      { k: "Folding length", v: "Up to 3 200 mm" },
      { k: "Material thickness", v: "0.4 – 3.0 mm" },
      { k: "Beam force", v: "120 t" },
      { k: "Control", v: "5-axis CNC" },
    ],
    imgId: "product-sheet-metal-folder-91d2",
    imgQuery: "sheet metal folder press brake precision fabrication clean shop",
    titleId: "product-sheet-metal-folder-title",
    descId: "product-sheet-metal-folder-desc",
  },
  {
    id: "sheet-metal-folding-machine",
    title: "Sheet Metal Folding Machine",
    eyebrow: "04 / Industrial",
    summary:
      "Heavy-duty sheet metal folding machine with reinforced welded frame for continuous three-shift production environments.",
    specs: [
      { k: "Folding length", v: "Up to 8 000 mm" },
      { k: "Material thickness", v: "0.5 – 12 mm" },
      { k: "Beam force", v: "500 t" },
      { k: "Control", v: "11-axis CNC" },
    ],
    imgId: "product-sheet-metal-folding-machine-4f08",
    imgQuery: "large industrial sheet metal folding machine heavy duty steel fabrication plant",
    titleId: "product-sheet-metal-folding-machine-title",
    descId: "product-sheet-metal-folding-machine-desc",
  },
  {
    id: "metal-folder",
    title: "Metal Folder",
    eyebrow: "05 / Workshop",
    summary:
      "A precise metal folder built around a single hardened beam — the perfect workhorse for boutique fabrication shops.",
    specs: [
      { k: "Folding length", v: "Up to 2 500 mm" },
      { k: "Material thickness", v: "0.4 – 2.5 mm" },
      { k: "Beam force", v: "80 t" },
      { k: "Control", v: "4-axis CNC" },
    ],
    imgId: "product-metal-folder-2a55",
    imgQuery: "metal folder workshop manual precision small fabrication steel sheet",
    titleId: "product-metal-folder-title",
    descId: "product-metal-folder-desc",
  },
  {
    id: "metal-folder-machine",
    title: "Metal Folder Machine",
    eyebrow: "06 / Automated",
    summary:
      "Automated metal folder machine with robotic loading and unloading — engineered for lights-out batch production.",
    specs: [
      { k: "Folding length", v: "Up to 3 600 mm" },
      { k: "Material thickness", v: "0.5 – 5.0 mm" },
      { k: "Beam force", v: "220 t" },
      { k: "Control", v: "9-axis CNC + robot" },
    ],
    imgId: "product-metal-folder-machine-6e12",
    imgQuery: "automated metal folder machine robotic arm loading sheet metal cell",
    titleId: "product-metal-folder-machine-title",
    descId: "product-metal-folder-machine-desc",
  },
  {
    id: "metal-folding-machine",
    title: "Metal Folding Machine",
    eyebrow: "07 / Premium",
    summary:
      "Our premium metal folding machine — a synthesis of dynamic crowning, hybrid drive and adaptive bending control.",
    specs: [
      { k: "Folding length", v: "Up to 6 000 mm" },
      { k: "Material thickness", v: "0.4 – 10 mm" },
      { k: "Beam force", v: "400 t" },
      { k: "Control", v: "13-axis CNC" },
    ],
    imgId: "product-metal-folding-machine-8d44",
    imgQuery: "premium metal folding machine hybrid drive industrial bending press",
    titleId: "product-metal-folding-machine-title",
    descId: "product-metal-folding-machine-desc",
  },
];

export const capabilities = [
  {
    icon: "Ruler",
    title: "Precision Bending",
    body: "Dynamic crowning systems keep angular tolerance within ±0.1° across the entire bending length, every cycle.",
  },
  {
    icon: "Cpu",
    title: "Adaptive CNC",
    body: "Proprietary controllers read material feedback in real time and adjust beam force for flawless repeatability.",
  },
  {
    icon: "Layers",
    title: "Tooling Library",
    body: "Hundreds of standardised and custom punches and dies, all hardened, ground and serial-traced from a single source.",
  },
  {
    icon: "ShieldCheck",
    title: "Operator Safety",
    body: "Light curtains, dual-hand control and enclosed work zones keep your team protected without slowing production.",
  },
  {
    icon: "Wrench",
    title: "Lifetime Service",
    body: "Every ARTITECT machine ships with a 5-year structural warranty and a global field-service network.",
  },
  {
    icon: "Workflow",
    title: "Workflow Integration",
    body: "Native OPC-UA and MTConnect interfaces drop straight into your MES, ERP or lights-out cell controller.",
  },
];

export const processSteps = [
  {
    n: "01",
    title: "Consult",
    body: "We map your parts, volumes and tolerances to the right ARTITECT platform.",
  },
  {
    n: "02",
    title: "Engineer",
    body: "Our engineers configure tooling, axis layout and automation to match your cell.",
  },
  {
    n: "03",
    title: "Manufacture",
    body: "Welded steel frames are stress-relieved, machined and assembled under one roof.",
  },
  {
    n: "04",
    title: "Commission",
    body: "On-site installation, operator training and production sign-off — anywhere in the world.",
  },
];

export const specSheet = [
  { k: "Folding length", v: "2 500 – 8 000 mm" },
  { k: "Material thickness", v: "0.4 – 12 mm mild steel" },
  { k: "Stainless steel", v: "Up to 8 mm" },
  { k: "Aluminium", v: "Up to 14 mm" },
  { k: "Bending angle", v: "0° – 180°" },
  { k: "Repeatability", v: "± 0.01 mm" },
  { k: "Angular accuracy", v: "± 0.1°" },
  { k: "Controller", v: "ARTITECT A9 / A13 CNC" },
  { k: "Drive", v: "Hybrid electro-hydraulic" },
  { k: "Power supply", v: "400 V / 50 Hz (3-phase)" },
  { k: "Compliance", v: "CE · UL · ISO 9001" },
  { k: "Warranty", v: "5 years structural" },
];

export const contactDetails = {
  email: "sales@artitect-machinery.com",
  phone: "+1 (415) 555-0188",
  address: "1440 Foundry Lane · Bay 7 · Pittsburgh, PA 15222",
  hours: "Mon – Fri · 08:00 – 18:00 (UTC−5)",
};