// Central product catalog for ARTITECT MACHINERY.
// Each product maps to one of the requested machine types / keywords.

export const products = [
  {
    id: 'double-folding-machine',
    name: 'Double Folding Machine',
    tagline: 'High-speed dual-action folding for complex profiles',
    description:
      'A heavy-duty double folding machine engineered for high-volume production. Dual upper and lower beam action delivers crisp, repeatable folds on both sides of the workpiece in a single cycle.',
    specs: [
      { label: 'Folding length', value: 'Up to 4000 mm' },
      { label: 'Material thickness', value: '0.5 – 4.0 mm' },
      { label: 'Folding speed', value: 'Up to 18 m/min' },
    ],
    imgId: 'prod-double-folding-machine-a1b2c3',
    titleId: 'prod-double-folding-machine-title',
    descId: 'prod-double-folding-machine-desc',
  },
  {
    id: 'double-folder',
    name: 'Double Folder',
    tagline: 'Versatile twin-beam folder for box and pan work',
    description:
      'The double folder pairs two independently controlled beams to handle boxes, pans, and closed profiles with minimal repositioning. Quick-change tooling keeps changeover times short.',
    specs: [
      { label: 'Folding length', value: 'Up to 3100 mm' },
      { label: 'Material thickness', value: '0.4 – 3.0 mm' },
      { label: 'Beam control', value: 'Independent CNC' },
    ],
    imgId: 'prod-double-folder-d4e5f6',
    titleId: 'prod-double-folder-title',
    descId: 'prod-double-folder-desc',
  },
  {
    id: 'sheet-metal-folder',
    name: 'Sheet Metal Folder',
    tagline: 'Reliable everyday folding for fabrication shops',
    description:
      'A robust sheet metal folder built for daily shop use. Manual or CNC backgauge options and a hardened beam give clean bends across mild steel, aluminum, and stainless.',
    specs: [
      { label: 'Folding length', value: 'Up to 2500 mm' },
      { label: 'Material thickness', value: '0.3 – 2.5 mm' },
      { label: 'Backgauge', value: 'Manual / CNC' },
    ],
    imgId: 'prod-sheet-metal-folder-g7h8i9',
    titleId: 'prod-sheet-metal-folder-title',
    descId: 'prod-sheet-metal-folder-desc',
  },
  {
    id: 'sheet-metal-folding-machine',
    name: 'Sheet Metal Folding Machine',
    tagline: 'CNC-controlled folding with angle programming',
    description:
      'A fully programmable sheet metal folding machine with automatic angle correction and crowning. Store hundreds of programs and recall them instantly for repeat jobs.',
    specs: [
      { label: 'Folding length', value: 'Up to 4000 mm' },
      { label: 'Material thickness', value: '0.5 – 4.0 mm' },
      { label: 'Control', value: 'CNC, 200+ programs' },
    ],
    imgId: 'prod-sheet-metal-folding-machine-j1k2l3',
    titleId: 'prod-sheet-metal-folding-machine-title',
    descId: 'prod-sheet-metal-folding-machine-desc',
  },
  {
    id: 'metal-folder',
    name: 'Metal Folder',
    tagline: 'Compact folder for light-gauge metalwork',
    description:
      'A space-saving metal folder ideal for HVAC, signage, and light fabrication. Simple lever or powered operation with a precision-ground bed for consistent results.',
    specs: [
      { label: 'Folding length', value: 'Up to 2000 mm' },
      { label: 'Material thickness', value: '0.3 – 2.0 mm' },
      { label: 'Operation', value: 'Lever / powered' },
    ],
    imgId: 'prod-metal-folder-m4n5o6',
    titleId: 'prod-metal-folder-title',
    descId: 'prod-metal-folder-desc',
  },
  {
    id: 'metal-folding-machine',
    name: 'Metal Folding Machine',
    tagline: 'Heavy-gauge powered folding for structural work',
    description:
      'A powered metal folding machine built for thicker plate and longer beds. Hydraulic beam drive and a heavy frame deliver stable, high-tonnage folds without distortion.',
    specs: [
      { label: 'Folding length', value: 'Up to 6000 mm' },
      { label: 'Material thickness', value: '1.0 – 6.0 mm' },
      { label: 'Drive', value: 'Hydraulic' },
    ],
    imgId: 'prod-metal-folding-machine-p7q8r9',
    titleId: 'prod-metal-folding-machine-title',
    descId: 'prod-metal-folding-machine-desc',
  },
]

export const features = [
  {
    id: 'precision',
    title: 'Precision Engineering',
    description:
      'Hardened beams, ground beds, and CNC angle correction hold tolerances within ±0.5° across the full folding length.',
    icon: 'Target',
  },
  {
    id: 'durability',
    title: 'Built to Last',
    description:
      'Welded steel frames and industrial-grade hydraulics are designed for decades of continuous three-shift operation.',
    icon: 'ShieldCheck',
  },
  {
    id: 'versatility',
    title: 'Material Versatility',
    description:
      'Fold mild steel, stainless, and aluminum from 0.3 mm light gauge up to 6 mm structural plate on one machine.',
    icon: 'Layers',
  },
  {
    id: 'support',
    title: 'Global Service & Support',
    description:
      'Installation, training, spare parts, and remote diagnostics keep your line running wherever you operate.',
    icon: 'Headset',
  },
]

export const stats = [
  { id: 'years', value: '25+', label: 'Years of manufacturing' },
  { id: 'countries', value: '40+', label: 'Countries served' },
  { id: 'installed', value: '3,200', label: 'Machines installed' },
  { id: 'uptime', value: '99.5%', label: 'Average uptime' },
]
