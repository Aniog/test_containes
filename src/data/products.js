export const products = [
  {
    id: 'af-2500',
    slug: 'double-folding-machine',
    name: 'Atlas AF-2500',
    tagline: 'Double folding machine',
    summary:
      'A precision double folder for high-volume fabrication. Up-and-down folding beams with a synchronised back gauge for repeatable bends on either side without flipping the sheet.',
    specs: [
      { label: 'Max sheet length', value: '2,500 mm' },
      { label: 'Max thickness (mild steel)', value: '2.0 mm' },
      { label: 'Bending angle', value: '0°–145°' },
      { label: 'Control', value: 'Touch HMI · 6-axis CNC' },
    ],
    bullets: [
      'Up and down folding without manual flipping',
      'Servo-driven back gauge with 0.05 mm repeatability',
      'Quick-change tooling for varied profiles',
    ],
    imgId: 'product-img-af2500-a1b2c3',
    titleId: 'product-af-2500-title',
    descId: 'product-af-2500-desc',
  },
  {
    id: 'af-3200',
    slug: 'sheet-metal-folder',
    name: 'Atlas AF-3200',
    tagline: 'Sheet metal folder',
    summary:
      'A workhorse sheet metal folder built for architectural panels, HVAC, and enclosures. Wide working bed with a polished steel folding beam for clean, witness-mark-free bends.',
    specs: [
      { label: 'Max sheet length', value: '3,200 mm' },
      { label: 'Max thickness (mild steel)', value: '2.5 mm' },
      { label: 'Bending angle', value: '0°–135°' },
      { label: 'Control', value: 'Touch HMI · 4-axis CNC' },
    ],
    bullets: [
      'Hardened, ground folding beam',
      'Foot-pedal and manual override for hand-built work',
      'Modular segmented top tool',
    ],
    imgId: 'product-img-af3200-d4e5f6',
    titleId: 'product-af-3200-title',
    descId: 'product-af-3200-desc',
  },
  {
    id: 'af-4000',
    slug: 'metal-folding-machine',
    name: 'Atlas AF-4000',
    tagline: 'Metal folding machine',
    summary:
      'Heavy-duty metal folding machine for structural and industrial work. Reinforced frame and high-torque drive deliver consistent bends across long, thick sheets.',
    specs: [
      { label: 'Max sheet length', value: '4,000 mm' },
      { label: 'Max thickness (mild steel)', value: '4.0 mm' },
      { label: 'Bending angle', value: '0°–135°' },
      { label: 'Control', value: 'Touch HMI · 6-axis CNC' },
    ],
    bullets: [
      'Welded steel frame, stress-relieved',
      'Hydraulic clamping with adjustable pressure',
      'Integrated sheet support arms',
    ],
    imgId: 'product-img-af4000-g7h8i9',
    titleId: 'product-af-4000-title',
    descId: 'product-af-4000-desc',
  },
  {
    id: 'mf-1600',
    slug: 'metal-folder-machine',
    name: 'Studio MF-1600',
    tagline: 'Compact metal folder',
    summary:
      'A compact metal folder for workshops and prototype studios. Small footprint, fast setup, and an intuitive interface that makes daily folding work effortless.',
    specs: [
      { label: 'Max sheet length', value: '1,600 mm' },
      { label: 'Max thickness (mild steel)', value: '1.5 mm' },
      { label: 'Bending angle', value: '0°–145°' },
      { label: 'Control', value: 'Touch HMI · 2-axis' },
    ],
    bullets: [
      'Single-phase power option',
      'Low noise direct-drive servos',
      'Designed for small-batch architectural work',
    ],
    imgId: 'product-img-mf1600-j0k1l2',
    titleId: 'product-mf-1600-title',
    descId: 'product-mf-1600-desc',
  },
]

export const findProductBySlug = (slug) =>
  products.find((p) => p.slug === slug) || null
