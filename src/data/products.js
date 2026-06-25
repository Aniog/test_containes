// Centralized product catalog for ARTITECT MACHINERY.
// All product copy and identifiers live here so pages stay in sync.

export const PRODUCTS = [
  {
    id: 'af-2000d',
    slug: 'af-2000d-double-folding-machine',
    name: 'AF-2000D Double Folding Machine',
    category: 'Double Folding Machine',
    tagline:
      'Twin-beam folder that bends sheet metal up and down without flipping the workpiece.',
    description:
      'Our flagship double folder pairs a precision-ground upper beam and a servo-driven lower beam to deliver positive and negative folds in a single setup. Built for fabricators who value speed, repeatability, and a quiet shop floor.',
    specs: [
      { label: 'Max Folding Length', value: '2,000 mm' },
      { label: 'Max Sheet Thickness', value: '1.5 mm mild steel' },
      { label: 'Folding Angle', value: '0° – 145°' },
      { label: 'Repeatability', value: '± 0.05 mm' },
      { label: 'Control', value: '10″ touch CNC' },
    ],
    highlights: [
      'No-flip up & down folding',
      'Touch CNC with profile memory',
      'Servo-electric beam drive',
    ],
    imgId: 'product-af2000d-7b1d4e',
    titleId: 'product-af2000d-title',
    descId: 'product-af2000d-desc',
  },
  {
    id: 'af-2500d',
    slug: 'af-2500d-double-folder',
    name: 'AF-2500D Double Folder',
    category: 'Double Folder',
    tagline:
      'A wider working envelope for architectural panels and HVAC ductwork.',
    description:
      'The AF-2500D extends the double-folding concept to 2.5 meters, ideal for facade fabricators, ventilation specialists, and roofers who need long, perfectly straight folds with minimal operator effort.',
    specs: [
      { label: 'Max Folding Length', value: '2,500 mm' },
      { label: 'Max Sheet Thickness', value: '1.5 mm mild steel' },
      { label: 'Folding Angle', value: '0° – 145°' },
      { label: 'Backgauge Travel', value: '1,000 mm' },
      { label: 'Control', value: '12″ touch CNC' },
    ],
    highlights: [
      'Long-length precision',
      'Programmable backgauge',
      'Pneumatic sheet support arms',
    ],
    imgId: 'product-af2500d-3c8a91',
    titleId: 'product-af2500d-title',
    descId: 'product-af2500d-desc',
  },
  {
    id: 'sf-1600',
    slug: 'sf-1600-sheet-metal-folder',
    name: 'SF-1600 Sheet Metal Folder',
    category: 'Sheet Metal Folder',
    tagline: 'Compact manual folder for workshops that demand precision without complexity.',
    description:
      'A robust, manually clamped sheet metal folder engineered for prototype shops, signage makers, and trade schools. Hardened folding bar, micro-adjustable angle stops, and a refined cast frame deliver decades of reliable service.',
    specs: [
      { label: 'Max Folding Length', value: '1,600 mm' },
      { label: 'Max Sheet Thickness', value: '1.2 mm mild steel' },
      { label: 'Folding Angle', value: '0° – 135°' },
      { label: 'Weight', value: '420 kg' },
      { label: 'Power', value: 'Manual operation' },
    ],
    highlights: [
      'Hardened folding bar',
      'Micro-adjustable angle stop',
      'No electricity required',
    ],
    imgId: 'product-sf1600-9e2c11',
    titleId: 'product-sf1600-title',
    descId: 'product-sf1600-desc',
  },
  {
    id: 'mf-3200',
    slug: 'mf-3200-metal-folding-machine',
    name: 'MF-3200 Metal Folding Machine',
    category: 'Metal Folding Machine',
    tagline:
      'Heavy-duty motorized folder for industrial fabrication of long architectural panels.',
    description:
      'The MF-3200 is a motor-driven, full-length metal folding machine for fabricators who run long shifts on heavy material. Reinforced steel frame, servo-controlled clamping beam, and an intuitive interface keep production smooth.',
    specs: [
      { label: 'Max Folding Length', value: '3,200 mm' },
      { label: 'Max Sheet Thickness', value: '2.0 mm mild steel' },
      { label: 'Folding Angle', value: '0° – 145°' },
      { label: 'Beam Drive', value: 'Servo-electric' },
      { label: 'Control', value: '15″ touch CNC' },
    ],
    highlights: [
      'Industrial-grade rigidity',
      'Servo-controlled clamping',
      'CNC profile library',
    ],
    imgId: 'product-mf3200-4a7f22',
    titleId: 'product-mf3200-title',
    descId: 'product-mf3200-desc',
  },
  {
    id: 'mf-2050',
    slug: 'mf-2050-metal-folder',
    name: 'MF-2050 Metal Folder',
    category: 'Metal Folder',
    tagline: 'A versatile motorized folder that balances footprint, power, and price.',
    description:
      'The MF-2050 is the everyday workhorse of our line: motorized clamping, programmable angle stops, and a refined control panel that operators learn in under an hour.',
    specs: [
      { label: 'Max Folding Length', value: '2,050 mm' },
      { label: 'Max Sheet Thickness', value: '1.5 mm mild steel' },
      { label: 'Folding Angle', value: '0° – 140°' },
      { label: 'Beam Drive', value: 'Motorized' },
      { label: 'Control', value: '7″ touch panel' },
    ],
    highlights: [
      'Motorized clamping',
      'Operator-friendly UI',
      'Compact footprint',
    ],
    imgId: 'product-mf2050-6d3b08',
    titleId: 'product-mf2050-title',
    descId: 'product-mf2050-desc',
  },
  {
    id: 'mfm-custom',
    slug: 'mfm-custom-solution',
    name: 'MFM Custom Solution',
    category: 'Metal Folder Machine',
    tagline:
      'Custom-engineered metal folder machines for OEM lines and specialty fabrication.',
    description:
      'When standard catalog machines do not fit, our engineering team designs a metal folder machine around your sheet sizes, throughput targets, and integration needs. Talk to us about tooling, automation, and turnkey lines.',
    specs: [
      { label: 'Folding Length', value: 'Up to 6,000 mm' },
      { label: 'Sheet Thickness', value: 'Up to 3.0 mm' },
      { label: 'Automation', value: 'Robot loading optional' },
      { label: 'Integration', value: 'PLC / MES ready' },
      { label: 'Lead Time', value: '12 – 20 weeks' },
    ],
    highlights: [
      'Bespoke engineering',
      'Automation & robot loading',
      'Factory acceptance testing',
    ],
    imgId: 'product-mfm-custom-2f81c4',
    titleId: 'product-mfm-custom-title',
    descId: 'product-mfm-custom-desc',
  },
]

export const PRODUCT_INTEREST_OPTIONS = [
  { value: 'double_folding_machine', label: 'Double Folding Machine' },
  { value: 'sheet_metal_folder', label: 'Sheet Metal Folder' },
  { value: 'metal_folding_machine', label: 'Metal Folding Machine' },
  { value: 'custom_solution', label: 'Custom Solution' },
  { value: 'service_parts', label: 'Service & Spare Parts' },
  { value: 'general_inquiry', label: 'General Inquiry' },
]
