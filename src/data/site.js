export const BRAND = {
  name: "ARTITECT MACHINERY",
  shortName: "ARTITECT",
  tagline: "Precision Sheet Metal Folding Machinery",
  description:
    "Engineered for fabricators who measure accuracy in fractions of a degree. ARTITECT MACHINERY builds industrial double folder, sheet metal folder, and metal folding systems for the world's most demanding shops.",
  established: "2008",
  contact: {
    email: "sales@artitect-machinery.com",
    phone: "+1 (415) 555-0142",
    address: "1840 Foundry Avenue, Bay 4, Oakland, CA 94601",
    hours: "Mon – Fri · 8:00 – 18:00 PT",
  },
  social: {
    linkedin: "#",
    youtube: "#",
    x: "#",
  },
  certifications: ["ISO 9001:2015", "CE", "UL 508A", "ANSI B11.19"],
};

export const NAV_LINKS = [
  { label: "Products", href: "#products" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Industries", href: "#industries" },
  { label: "Specifications", href: "#specs" },
  { label: "Contact", href: "#contact" },
];

export const PRODUCTS = [
  {
    id: "double-folding-machine",
    name: "Double Folding Machine",
    short: "Dual-axis folder for high-mix production runs.",
    description:
      "A servo-driven double folding machine that performs two sequential folds in a single pass, eliminating repositioning and doubling throughput on enclosure, cabinet, and panel work.",
    specs: [
      { label: "Working length", value: "1,250 – 4,000 mm" },
      { label: "Bending angle", value: "0° – 155°" },
      { label: "Sheet thickness", value: "0.4 – 3.2 mm mild steel" },
      { label: "Repeatability", value: "± 0.1°" },
    ],
    imgId: "product-double-folding-machine-a1b2",
    titleId: "product-double-folding-machine-title",
    descId: "product-double-folding-machine-desc",
  },
  {
    id: "double-folder",
    name: "Double Folder",
    short: "Symmetric beam folder for long, straight panels.",
    description:
      "A heavy-duty double folder with twin clamping beams and a synchronized lower tool, built for long, flat panels used in elevator cabs, server racks, and architectural cladding.",
    specs: [
      { label: "Beam length", value: "2,500 – 6,200 mm" },
      { label: "Clamping force", value: "Up to 60 t" },
      { label: "Materials", value: "Mild steel · Stainless · Aluminium" },
      { label: "Control", value: "10\" HMI with recipe library" },
    ],
    imgId: "product-double-folder-c3d4",
    titleId: "product-double-folder-title",
    descId: "product-double-folder-desc",
  },
  {
    id: "sheet-metal-folder",
    name: "Sheet Metal Folder",
    short: "The workshop workhorse for everyday folding.",
    description:
      "A compact, manually-assisted sheet metal folder designed for job shops that need clean, repeatable folds without the footprint of a press brake. Magnetic tooling swaps in seconds.",
    specs: [
      { label: "Capacity", value: "1,250 – 2,500 mm" },
      { label: "Thickness", value: "0.5 – 2.0 mm" },
      { label: "Tool change", value: "Magnetic · under 30 s" },
      { label: "Footprint", value: "1.4 × 0.9 m" },
    ],
    imgId: "product-sheet-metal-folder-e5f6",
    titleId: "product-sheet-metal-folder-title",
    descId: "product-sheet-metal-folder-desc",
  },
  {
    id: "sheet-metal-folding-machine",
    name: "Sheet Metal Folding Machine",
    short: "Automated folding cell with robotic loading.",
    description:
      "An automated sheet metal folding machine with an optional six-axis loader. Lights-out production of HVAC transition pieces, switchgear enclosures, and white-goods panels.",
    specs: [
      { label: "Cycle time", value: "Down to 6 s per fold" },
      { label: "Loader", value: "6-axis · 12 kg payload" },
      { label: "Sheet size", value: "Up to 1,500 × 1,000 mm" },
      { label: "Throughput", value: "Up to 480 parts / shift" },
    ],
    imgId: "product-sheet-metal-folding-machine-g7h8",
    titleId: "product-sheet-metal-folding-machine-title",
    descId: "product-sheet-metal-folding-machine-desc",
  },
  {
    id: "metal-folder",
    name: "Metal Folder",
    short: "Industrial-grade folder for thick plate work.",
    description:
      "A rigid, ground-steel metal folder engineered for thick plate and stainless up to 4 mm. The crowning system is hydraulically compensated, so full-length bends stay dead-flat.",
    specs: [
      { label: "Capacity", value: "2,000 – 4,000 mm" },
      { label: "Thickness", value: "Up to 4.0 mm mild steel" },
      { label: "Crowning", value: "Hydraulic · dynamic" },
      { label: "Backgauge", value: "6-axis CNC" },
    ],
    imgId: "product-metal-folder-i9j0",
    titleId: "product-metal-folder-title",
    descId: "product-metal-folder-desc",
  },
  {
    id: "metal-folder-machine",
    name: "Metal Folder Machine",
    short: "All-in-one folder with hemming and safety lockout.",
    description:
      "A turnkey metal folder machine for subcontractors who need one unit to handle pan, hem, and counter-fold work. Integrated light curtain and dual-hand control meet ANSI B11.19.",
    specs: [
      { label: "Configurations", value: "Bench · Floor" },
      { label: "Hemming", value: "Up to 25 mm closed hem" },
      { label: "Safety", value: "Light curtain · dual-hand" },
      { label: "Power", value: "400 V · 3 phase" },
    ],
    imgId: "product-metal-folder-machine-k1l2",
    titleId: "product-metal-folder-machine-title",
    descId: "product-metal-folder-machine-desc",
  },
  {
    id: "metal-folding-machine",
    name: "Metal Folding Machine",
    short: "High-precision folder for aerospace and electronics.",
    description:
      "Our flagship metal folding machine, built around a pre-loaded linear guide system that achieves ± 0.05° repeatability on stainless, aluminium, and coated steels.",
    specs: [
      { label: "Repeatability", value: "± 0.05°" },
      { label: "Surface finish", value: "Ra 0.8 µm on stainless" },
      { label: "Control", value: "15\" HMI · Ethernet/IP" },
      { label: "Materials", value: "Stainless · Al · Coated steel" },
    ],
    imgId: "product-metal-folding-machine-m3n4",
    titleId: "product-metal-folding-machine-title",
    descId: "product-metal-folding-machine-desc",
  },
];

export const CAPABILITIES = [
  {
    title: "Engineered frames",
    description:
      "Stress-relieved steel fabrications, scraped and pinned. Built to hold geometry across a 30-year service life.",
  },
  {
    title: "Servo-electric drives",
    description:
      "Direct-drive servos on every axis — no hydraulics to leak, no pneumatics to bleed. Cleaner shop, lower TCO.",
  },
  {
    title: "Closed-loop control",
    description:
      "Real-time angle feedback at the fold line. The machine knows when the bend is right, not just when it stops moving.",
  },
  {
    title: "Operator-first HMI",
    description:
      "Every parameter a setter needs on one screen. Save a recipe, recall a recipe, hand a job to a new operator in minutes.",
  },
];

export const INDUSTRIES = [
  {
    name: "HVAC & Ductwork",
    description:
      "Rectangular duct, transitions, and plenum boxes produced in a single fixturing.",
  },
  {
    name: "Architectural Cladding",
    description:
      "Long, accurate folds for curtain wall, rainscreen, and decorative panel work.",
  },
  {
    name: "Switchgear & Enclosures",
    description:
      "Tight-tolerance door and side panels for low-voltage switchboards and control cabinets.",
  },
  {
    name: "Automotive & EV",
    description:
      "Battery trays, motor housings, and prototype body panels folded from aluminium and stainless.",
  },
  {
    name: "Elevators & Lifts",
    description:
      "Cab shells and door panels up to 6 m, folded flat and square in one continuous operation.",
  },
  {
    name: "White Goods & Appliances",
    description:
      "Automated cells feeding press lines for washing machine, dryer, and refrigerator cabinets.",
  },
];

export const STATS = [
  { value: "18+", label: "Years of build" },
  { value: "1,200+", label: "Machines installed" },
  { value: "47", label: "Countries served" },
  { value: "99.4%", label: "Uptime, year one" },
];

export const PROCESS = [
  {
    step: "01",
    title: "Application review",
    body: "We map your parts, materials, tolerances, and shift pattern to the right machine class.",
  },
  {
    step: "02",
    title: "Bench test",
    body: "Your sample parts are folded on the exact model in our pilot bay, with bend data captured.",
  },
  {
    step: "03",
    title: "Commissioning",
    body: "Our field engineers install, level, and qualify the machine to spec on your shop floor.",
  },
  {
    step: "04",
    title: "Lifetime support",
    body: "Preventive maintenance, remote diagnostics, and a stocked parts depot on three continents.",
  },
];
