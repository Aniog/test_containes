export const products = [
  {
    id: 'ds-3200',
    slug: 'ds-3200',
    name: 'Artitect DS-3200',
    category: 'Double Folding Machine',
    tagline: 'Twin-blade folding for high-volume sheet metal production.',
    description:
      'A flagship double folder built for fabrication shops that demand uninterrupted output. Up-and-down blade movement enables positive and negative bends without flipping the workpiece, reducing handling time by up to 40%.',
    specs: [
      { label: 'Working length', value: '3200 mm' },
      { label: 'Max thickness', value: '2.5 mm mild steel' },
      { label: 'Bend angle', value: '+/-145 deg' },
      { label: 'Repeatability', value: '+/-0.05 mm' },
    ],
    features: [
      'Servo-driven dual folding beams',
      'Touch-screen CNC with 3D simulation',
      'Programmable backgauge, X / R axes',
    ],
    imgId: 'product-ds3200-aef91c',
    titleId: 'product-ds3200-title',
    descId: 'product-ds3200-desc',
  },
  {
    id: 'sf-2500',
    slug: 'sf-2500',
    name: 'Artitect SF-2500',
    category: 'Sheet Metal Folder',
    tagline: 'Compact electric folder for clean, repeatable bends.',
    description:
      'Engineered for cabinet makers, HVAC fabricators, and architectural sheet metal teams. The SF-2500 produces crisp, mark-free bends on stainless and pre-painted panels.',
    specs: [
      { label: 'Working length', value: '2540 mm' },
      { label: 'Max thickness', value: '1.5 mm mild steel' },
      { label: 'Bend angle', value: '0 - 135 deg' },
      { label: 'Footprint', value: '3.4 x 1.6 m' },
    ],
    features: [
      'Polyurethane-faced clamping beam',
      'Quick-release segmented top tool',
      'Laser-aligned material guide',
    ],
    imgId: 'product-sf2500-72ad3d',
    titleId: 'product-sf2500-title',
    descId: 'product-sf2500-desc',
  },
  {
    id: 'mf-4000',
    slug: 'mf-4000',
    name: 'Artitect MF-4000',
    category: 'Metal Folding Machine',
    tagline: 'Heavy-duty single-beam folder for structural panels.',
    description:
      'Built for roofing, cladding, and large architectural panels. A reinforced welded frame and hydraulic clamping make the MF-4000 the workhorse choice for industrial bending up to 4 mm.',
    specs: [
      { label: 'Working length', value: '4050 mm' },
      { label: 'Max thickness', value: '4.0 mm mild steel' },
      { label: 'Bend angle', value: '0 - 135 deg' },
      { label: 'Power', value: '15 kW, 3-phase' },
    ],
    features: [
      'Hydraulic clamp with auto thickness sensing',
      'Heavy welded steel frame, stress-relieved',
      'Optional crowning compensation',
    ],
    imgId: 'product-mf4000-5b9c17',
    titleId: 'product-mf4000-title',
    descId: 'product-mf4000-desc',
  },
  {
    id: 'mf-1600c',
    slug: 'mf-1600c',
    name: 'Artitect MF-1600C',
    category: 'Metal Folder Machine',
    tagline: 'Workshop-grade folder with intuitive manual control.',
    description:
      'A precise manual folder for short-run work and custom fabrication. Smooth, balanced lever action lets a single operator produce tight, repeatable bends with minimal setup.',
    specs: [
      { label: 'Working length', value: '1600 mm' },
      { label: 'Max thickness', value: '1.2 mm mild steel' },
      { label: 'Bend angle', value: '0 - 135 deg' },
      { label: 'Weight', value: '410 kg' },
    ],
    features: [
      'Hardened tool steel folding edge',
      'Magnetic-assist top beam',
      'Adjustable backgauge with digital readout',
    ],
    imgId: 'product-mf1600c-c8e2a4',
    titleId: 'product-mf1600c-title',
    descId: 'product-mf1600c-desc',
  },
]

export const productById = (id) => products.find((p) => p.id === id)
