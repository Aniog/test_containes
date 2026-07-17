export const PRODUCTS = [
  {
    id: 'double-folding-machine',
    imgId: 'product-double-folding-machine-a1f402',
    name: 'Double Folding Machine',
    model: 'AM-DF 3200',
    tagline: 'Our flagship. Bidirectional folding for the highest throughput in its class.',
    description:
      'The AM-DF 3200 double folding machine bends up and down without flipping the workpiece. Twin folding beams and a rigid O-frame deliver flawless hems, profiles and panels at production speed — the heart of a modern sheet metal line.',
    specs: [
      { label: 'Working length', value: '3200 mm' },
      { label: 'Max. capacity', value: '2.5 mm steel' },
      { label: 'Folding direction', value: 'Up & down' },
      { label: 'Backgauge', value: 'CNC, 1000 mm' },
    ],
    applications: ['Facade panels', 'HVAC ductwork', 'Roofing profiles'],
    featured: true,
  },
  {
    id: 'double-folder',
    imgId: 'product-double-folder-b2e513',
    name: 'Double Folder',
    model: 'AM-DFC 2500',
    tagline: 'Compact double folder with servo-driven beams for cell-based production.',
    description:
      'The AM-DFC 2500 double folder packs up/down folding into a compact footprint. Servo-driven folding beams, automatic tool clamping and an intuitive touch control make it the flexible choice for job shops and cell-based manufacturing.',
    specs: [
      { label: 'Working length', value: '2500 mm' },
      { label: 'Max. capacity', value: '2.0 mm steel' },
      { label: 'Folding direction', value: 'Up & down' },
      { label: 'Control', value: '15" touch CNC' },
    ],
    applications: ['Job shop parts', 'Electrical enclosures', 'Kitchen equipment'],
    featured: true,
  },
  {
    id: 'sheet-metal-folder',
    imgId: 'product-sheet-metal-folder-c3d624',
    name: 'Sheet Metal Folder',
    model: 'AM-SF 4100',
    tagline: 'Long-bed precision for architectural panels and oversized sheet work.',
    description:
      'With a 4100 mm working length and crowning-compensated beam, the AM-SF 4100 sheet metal folder keeps long architectural panels perfectly straight. Open ends allow folding parts deeper than the beam itself.',
    specs: [
      { label: 'Working length', value: '4100 mm' },
      { label: 'Max. capacity', value: '1.5 mm steel' },
      { label: 'Crowning', value: 'Automatic' },
      { label: 'Backgauge', value: 'CNC, 1250 mm' },
    ],
    applications: ['Wall cladding', 'Cassettes', 'Long flashings'],
    featured: true,
  },
  {
    id: 'sheet-metal-folding-machine',
    imgId: 'product-sheet-metal-folding-machine-d4c735',
    name: 'Sheet Metal Folding Machine',
    model: 'AM-SFX 6000',
    tagline: 'Six meters of folding power for industrial-scale panel production.',
    description:
      'The AM-SFX 6000 sheet metal folding machine is built for industrial scale. A six-meter bed, hydraulic clamping and synchronized backgauge fingers handle full-length panels in a single setup — no joints, no compromises.',
    specs: [
      { label: 'Working length', value: '6100 mm' },
      { label: 'Max. capacity', value: '1.25 mm steel' },
      { label: 'Clamping', value: 'Hydraulic' },
      { label: 'Backgauge', value: 'CNC, 1500 mm' },
    ],
    applications: ['Industrial panels', 'Silos & tanks', 'Transport bodies'],
    featured: false,
  },
  {
    id: 'metal-folder',
    imgId: 'product-metal-folder-e5b846',
    name: 'Metal Folder',
    model: 'AM-MF 1250',
    tagline: 'The compact workshop classic — precise, tough, and always ready.',
    description:
      'The AM-MF 1250 metal folder is the compact classic for every workshop. Segmented tools, quick manual clamping and a precise backstop turn one-off flashings and trims into a two-minute job.',
    specs: [
      { label: 'Working length', value: '1270 mm' },
      { label: 'Max. capacity', value: '1.5 mm steel' },
      { label: 'Clamping', value: 'Manual quick-lock' },
      { label: 'Tools', value: 'Segmented' },
    ],
    applications: ['Roof flashings', 'Trim work', 'Repair shops'],
    featured: false,
  },
  {
    id: 'metal-folder-machine',
    imgId: 'product-metal-folder-machine-f6a957',
    name: 'Metal Folder Machine',
    model: 'AM-MFP 2040',
    tagline: 'Powered folding for series work — foot pedal control, both hands free.',
    description:
      'The AM-MFP 2040 metal folder machine adds powered clamping and folding to the classic folder format. Foot-pedal operation keeps both hands on the part, ideal for repeatable series production of medium-sized components.',
    specs: [
      { label: 'Working length', value: '2040 mm' },
      { label: 'Max. capacity', value: '2.0 mm steel' },
      { label: 'Clamping', value: 'Pneumatic' },
      { label: 'Operation', value: 'Foot pedal' },
    ],
    applications: ['Series parts', 'Sign blanks', 'Ventilation'],
    featured: false,
  },
  {
    id: 'metal-folding-machine',
    imgId: 'product-metal-folding-machine-g79968',
    name: 'Metal Folding Machine',
    model: 'AM-MFX PRO',
    tagline: 'Fully automated folding cell with robotic handling options.',
    description:
      'The AM-MFX PRO metal folding machine is a fully automated folding cell. Automatic tool setup, programmable angle sequences and optional robotic part handling deliver lights-out production for high-mix manufacturers.',
    specs: [
      { label: 'Working length', value: '3200 mm' },
      { label: 'Max. capacity', value: '3.0 mm steel' },
      { label: 'Tool setup', value: 'Automatic' },
      { label: 'Automation', value: 'Robot-ready' },
    ],
    applications: ['OEM components', 'Appliance panels', 'High-mix production'],
    featured: false,
  },
]

export const PRODUCT_OPTIONS = [
  ...PRODUCTS.map((p) => ({ value: p.id, label: `${p.name} (${p.model})` })),
  { value: 'custom-solution', label: 'Custom / Not sure yet' },
]

export const getProduct = (id) => PRODUCTS.find((p) => p.id === id)
