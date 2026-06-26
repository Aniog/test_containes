// Central product + content data for ARTITECT MACHINERY.
// Image query IDs are referenced by the strk-img plugin via data-strk-img attributes.

export const products = [
  {
    id: 'double-folding-machine',
    name: 'Double Folding Machine',
    tagline: 'High-throughput dual-beam folding for complex profiles',
    description:
      'Our flagship double folding machine pairs two synchronized folding beams for rapid, repeatable bends on sheet metal up to 4 mm. Ideal for high-volume fabrication lines that demand precision and speed.',
    specs: [
      { label: 'Folding length', value: '3100 mm' },
      { label: 'Material thickness', value: '0.5 – 4.0 mm' },
      { label: 'Folding speed', value: '0.5 s/bend' },
      { label: 'Bend angle', value: '0° – 145°' },
    ],
    imgId: 'product-double-folding-machine-a1b2c3',
    titleId: 'product-double-folding-machine-title',
    descId: 'product-double-folding-machine-desc',
  },
  {
    id: 'double-folder',
    name: 'Double Folder',
    tagline: 'Versatile twin-folder for boxes and enclosures',
    description:
      'A robust double folder engineered for boxes, enclosures, and closed profiles. The articulated upper and lower clamps deliver clean, consistent folds across a wide range of gauges.',
    specs: [
      { label: 'Folding length', value: '2050 mm' },
      { label: 'Material thickness', value: '0.4 – 3.0 mm' },
      { label: 'Clamp force', value: '12 t' },
      { label: 'Bend angle', value: '0° – 135°' },
    ],
    imgId: 'product-double-folder-d4e5f6',
    titleId: 'product-double-folder-title',
    descId: 'product-double-folder-desc',
  },
  {
    id: 'sheet-metal-folder',
    name: 'Sheet Metal Folder',
    tagline: 'Reliable everyday folding for the workshop floor',
    description:
      'A dependable sheet metal folder built for daily workshop use. Simple manual or CNC controls, hardened tooling, and a rigid frame keep every bend true, shift after shift.',
    specs: [
      { label: 'Folding length', value: '1250 mm' },
      { label: 'Material thickness', value: '0.3 – 2.0 mm' },
      { label: 'Control', value: 'Manual / CNC' },
      { label: 'Bend angle', value: '0° – 130°' },
    ],
    imgId: 'product-sheet-metal-folder-g7h8i9',
    titleId: 'product-sheet-metal-folder-title',
    descId: 'product-sheet-metal-folder-desc',
  },
  {
    id: 'sheet-metal-folding-machine',
    name: 'Sheet Metal Folding Machine',
    tagline: 'CNC-controlled folding with automatic angle correction',
    description:
      'A fully programmable sheet metal folding machine with automatic angle correction and backgauge positioning. Reduces setup time and scrap while delivering repeatable accuracy on every part.',
    specs: [
      { label: 'Folding length', value: '3100 mm' },
      { label: 'Material thickness', value: '0.5 – 3.5 mm' },
      { label: 'Backgauge', value: 'CNC 4-axis' },
      { label: 'Repeatability', value: '±0.3°' },
    ],
    imgId: 'product-sheet-metal-folding-machine-j1k2l3',
    titleId: 'product-sheet-metal-folding-machine-title',
    descId: 'product-sheet-metal-folding-machine-desc',
  },
  {
    id: 'metal-folder',
    name: 'Metal Folder',
    tagline: 'Compact folder for light-gauge fabrication',
    description:
      'A compact metal folder perfect for light-gauge fabrication, HVAC ducting, and prototype shops. Quick-change tooling and a small footprint make it a flexible addition to any floor.',
    specs: [
      { label: 'Folding length', value: '1020 mm' },
      { label: 'Material thickness', value: '0.3 – 1.5 mm' },
      { label: 'Control', value: 'Manual' },
      { label: 'Bend angle', value: '0° – 120°' },
    ],
    imgId: 'product-metal-folder-m4n5o6',
    titleId: 'product-metal-folder-title',
    descId: 'product-metal-folder-desc',
  },
  {
    id: 'metal-folding-machine',
    name: 'Metal Folding Machine',
    tagline: 'Heavy-duty folding for thick plate and long lengths',
    description:
      'A heavy-duty metal folding machine designed for thick plate and long workpieces. Reinforced beam construction and high-torque servos deliver stable, accurate folds on demanding materials.',
    specs: [
      { label: 'Folding length', value: '4100 mm' },
      { label: 'Material thickness', value: '0.8 – 6.0 mm' },
      { label: 'Clamp force', value: '24 t' },
      { label: 'Bend angle', value: '0° – 150°' },
    ],
    imgId: 'product-metal-folding-machine-p7q8r9',
    titleId: 'product-metal-folding-machine-title',
    descId: 'product-metal-folding-machine-desc',
  },
]

export const features = [
  {
    id: 'precision',
    title: 'Precision Engineering',
    description:
      'Hardened tooling, CNC backgauges, and automatic angle correction deliver repeatable bends to ±0.3° on every machine in our range.',
    icon: 'Target',
  },
  {
    id: 'versatility',
    title: 'Material Versatility',
    description:
      'From 0.3 mm light gauge to 6 mm plate, our folders handle steel, aluminum, stainless, and galvanized sheet with ease.',
    icon: 'Layers',
  },
  {
    id: 'productivity',
    title: 'High Productivity',
    description:
      'Synchronized dual beams and fast cycle times keep your fabrication line moving, with folding speeds as low as 0.5 seconds per bend.',
    icon: 'Gauge',
  },
  {
    id: 'support',
    title: 'Lifetime Support',
    description:
      'Every machine ships with installation, operator training, and access to genuine spare parts and remote technical support for life.',
    icon: 'Headset',
  },
]

export const stats = [
  { value: '25+', label: 'Years of engineering' },
  { value: '40+', label: 'Countries served' },
  { value: '12,000', label: 'Machines in service' },
  { value: '99.2%', label: 'On-time delivery' },
]

export const navLinks = [
  { label: 'Products', href: '#products' },
  { label: 'Capabilities', href: '#capabilities' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]
