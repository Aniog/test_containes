// Central product catalogue for ARTITECT MACHINERY.
// Each product maps to one of the requested product types.

export const products = [
  {
    slug: 'double-folding-machine',
    name: 'Double Folding Machine',
    tagline: 'High-precision dual-blade folding for complex profiles',
    category: 'Folding Machines',
    imgId: 'prod-double-folding-machine-a1b2c3',
    titleId: 'prod-double-folding-machine-title',
    descId: 'prod-double-folding-machine-desc',
    summary:
      'A servo-driven double folding machine engineered for repeatable, high-tolerance bends on sheet metal panels and boxes.',
    description:
      'The ARTITECT Double Folding Machine pairs two synchronized folding beams with a CNC-controlled backgauge to deliver consistent, high-precision folds across long workpieces. Ideal for enclosures, panels, and complex multi-bend profiles, it combines rigid box-frame construction with an intuitive touchscreen interface so operators of any skill level can produce accurate parts from the first run.',
    specs: [
      { label: 'Folding length', value: '3100 mm' },
      { label: 'Material thickness', value: '0.5 – 4.0 mm' },
      { label: 'Folding angle', value: '0° – 145°' },
      { label: 'Backgauge accuracy', value: '±0.05 mm' },
      { label: 'Control', value: 'CNC touchscreen' },
      { label: 'Cycle time', value: '6 s / bend' },
    ],
    features: [
      'Dual synchronized folding beams for balanced force distribution',
      'CNC backgauge with automatic positioning and collision avoidance',
      'Tool-less beam adjustment for fast changeover',
      'Programmable bend sequences stored per part number',
    ],
  },
  {
    slug: 'double-folder',
    name: 'Double Folder',
    tagline: 'Versatile twin-folder for HVAC and ductwork',
    category: 'Folders',
    imgId: 'prod-double-folder-d4e5f6',
    titleId: 'prod-double-folder-title',
    descId: 'prod-double-folder-desc',
    summary:
      'A robust double folder built for high-volume ductwork, flashing, and general sheet metal fabrication.',
    description:
      'The ARTITECT Double Folder is a workhorse for fabrication shops producing ducts, gutters, and flashing. Its twin-folder configuration lets operators form two edges in a single setup, dramatically reducing handling time. Heavy-duty cast iron frames and hardened folding blades keep the machine accurate over years of continuous production.',
    specs: [
      { label: 'Folding length', value: '2500 mm' },
      { label: 'Material thickness', value: '0.4 – 3.0 mm' },
      { label: 'Folding angle', value: '0° – 135°' },
      { label: 'Frame', value: 'Cast iron, stress-relieved' },
      { label: 'Blade material', value: 'Hardened tool steel' },
      { label: 'Operation', value: 'Manual / pneumatic assist' },
    ],
    features: [
      'Twin-folder geometry forms two edges per setup',
      'Stress-relieved cast iron frame for long-term accuracy',
      'Removable beam fingers for boxed and locked seams',
      'Pneumatic clamping option for reduced operator fatigue',
    ],
  },
  {
    slug: 'sheet-metal-folder',
    name: 'Sheet Metal Folder',
    tagline: 'Reliable everyday folding for any fab shop',
    category: 'Folders',
    imgId: 'prod-sheet-metal-folder-g7h8i9',
    titleId: 'prod-sheet-metal-folder-title',
    descId: 'prod-sheet-metal-folder-desc',
    summary:
      'A dependable sheet metal folder for general-purpose bending of brackets, covers, and light enclosures.',
    description:
      'The ARTITECT Sheet Metal Folder is the dependable backbone of any fabrication shop. With a balanced beam action and adjustable stop fingers, it handles everything from one-off brackets to short production runs. Simple mechanical controls and a compact footprint make it easy to integrate into existing workflows.',
    specs: [
      { label: 'Folding length', value: '2000 mm' },
      { label: 'Material thickness', value: '0.4 – 2.5 mm' },
      { label: 'Folding angle', value: '0° – 130°' },
      { label: 'Backgauge', value: 'Adjustable stop fingers' },
      { label: 'Clamping', value: 'Cam-lock' },
      { label: 'Footprint', value: 'Compact' },
    ],
    features: [
      'Balanced beam action for smooth, repeatable folds',
      'Adjustable stop fingers for quick batch setups',
      'Cam-lock clamping secures blanks without marring',
      'Compact footprint fits any shop floor',
    ],
  },
  {
    slug: 'sheet-metal-folding-machine',
    name: 'Sheet Metal Folding Machine',
    tagline: 'CNC-controlled folding for precision production',
    category: 'Folding Machines',
    imgId: 'prod-sheet-metal-folding-machine-j1k2l3',
    titleId: 'prod-sheet-metal-folding-machine-title',
    descId: 'prod-sheet-metal-folding-machine-desc',
    summary:
      'A CNC sheet metal folding machine delivering programmable, repeatable bends for production environments.',
    description:
      'The ARTITECT Sheet Metal Folding Machine brings CNC precision to mid-volume production. A universal folding beam with segmented tools handles a wide range of profiles without tool changes, while the controller stores unlimited bend programs. Automatic angle correction compensates for material springback, ensuring every part meets tolerance.',
    specs: [
      { label: 'Folding length', value: '3100 mm' },
      { label: 'Material thickness', value: '0.5 – 4.0 mm' },
      { label: 'Folding angle', value: '0° – 150°' },
      { label: 'Tooling', value: 'Segmented universal beam' },
      { label: 'Angle correction', value: 'Automatic springback' },
      { label: 'Programs', value: 'Unlimited storage' },
    ],
    features: [
      'Universal segmented folding beam — no tool changes',
      'Automatic springback angle correction',
      'Graphical offline programming and 3D simulation',
      'Network-ready for Industry 4.0 production tracking',
    ],
  },
  {
    slug: 'metal-folder',
    name: 'Metal Folder',
    tagline: 'Heavy-duty folder for thick plate work',
    category: 'Folders',
    imgId: 'prod-metal-folder-m4n5o6',
    titleId: 'prod-metal-folder-title',
    descId: 'prod-metal-folder-desc',
    summary:
      'A heavy-duty metal folder engineered for thicker gauges and demanding structural work.',
    description:
      'The ARTITECT Metal Folder is built for the heavy end of the spectrum. Reinforced beams and a high-torque clamping system handle thicker plate and longer sheets without deflection. It is the folder of choice for structural fabricators, tank builders, and heavy equipment manufacturers who need rugged, dependable performance shift after shift.',
    specs: [
      { label: 'Folding length', value: '4000 mm' },
      { label: 'Material thickness', value: '1.0 – 6.0 mm' },
      { label: 'Folding angle', value: '0° – 140°' },
      { label: 'Clamping force', value: 'High-torque hydraulic' },
      { label: 'Beam', value: 'Reinforced welded steel' },
      { label: 'Duty cycle', value: 'Continuous production' },
    ],
    features: [
      'Reinforced beams resist deflection on long, thick parts',
      'High-torque hydraulic clamping for secure grips',
      'Hardened, replaceable folding blades',
      'Built for continuous three-shift production',
    ],
  },
  {
    slug: 'metal-folder-machine',
    name: 'Metal Folder Machine',
    tagline: 'Automated folder with powered backgauge',
    category: 'Folding Machines',
    imgId: 'prod-metal-folder-machine-p7q8r9',
    titleId: 'prod-metal-folder-machine-title',
    descId: 'prod-metal-folder-machine-desc',
    summary:
      'An automated metal folder machine with a powered, programmable backgauge for hands-off batch folding.',
    description:
      'The ARTITECT Metal Folder Machine adds automation to the folder platform. A powered, programmable backgauge positions each blank to the exact bend line, while powered beam actuation reduces operator effort. The result is faster cycle times, consistent part quality, and lower operator fatigue across long production runs.',
    specs: [
      { label: 'Folding length', value: '3100 mm' },
      { label: 'Material thickness', value: '0.5 – 4.0 mm' },
      { label: 'Folding angle', value: '0° – 145°' },
      { label: 'Backgauge', value: 'Powered, programmable' },
      { label: 'Beam actuation', value: 'Powered' },
      { label: 'Control', value: 'PLC with recipe storage' },
    ],
    features: [
      'Powered programmable backgauge for hands-off positioning',
      'Powered beam actuation reduces operator effort',
      'PLC controller with recipe storage per part',
      'Quick-change tooling for mixed-batch production',
    ],
  },
  {
    slug: 'metal-folding-machine',
    name: 'Metal Folding Machine',
    tagline: 'Flagship CNC folder for complex geometries',
    category: 'Folding Machines',
    imgId: 'prod-metal-folding-machine-s0t1u2',
    titleId: 'prod-metal-folding-machine-title',
    descId: 'prod-metal-folding-machine-desc',
    summary:
      'The flagship ARTITECT metal folding machine for complex, multi-bend geometries and lights-out production.',
    description:
      'The ARTITECT Metal Folding Machine is our flagship folder, designed for the most demanding geometries and lights-out production. A rotating universal beam folds up, down, and around obstacles in a single setup, while adaptive tooling and real-time angle feedback guarantee first-part-correct results. It is the centerpiece of any modern, automated fabrication cell.',
    specs: [
      { label: 'Folding length', value: '4100 mm' },
      { label: 'Material thickness', value: '0.5 – 5.0 mm' },
      { label: 'Folding angle', value: '0° – 155°' },
      { label: 'Beam', value: 'Rotating universal' },
      { label: 'Feedback', value: 'Real-time angle sensing' },
      { label: 'Automation', value: 'Lights-out ready' },
    ],
    features: [
      'Rotating universal beam folds up and down in one setup',
      'Real-time angle feedback for first-part-correct results',
      'Adaptive segmented tooling handles complex geometries',
      'Lights-out production ready with robotic integration',
    ],
  },
]

export const getProductBySlug = (slug) =>
  products.find((p) => p.slug === slug)

export const categories = [
  'All',
  ...Array.from(new Set(products.map((p) => p.category))),
]
