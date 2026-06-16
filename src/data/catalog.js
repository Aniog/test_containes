// Central catalog for ARTITECT MACHINERY products.
// All seven product keywords are surfaced individually, but they belong to
// a single, coherent product family: precision sheet metal folding machines.
// Each entry carries stable ids used by the data-strk-img system to pull
// contextual stock imagery.

export const productFamily = {
  brand: 'ARTITECT MACHINERY',
  tagline: 'Precision sheet metal folding machines, engineered to fold true.',
  description:
    'ARTITECT MACHINERY builds a complete family of double-folding and sheet metal folding machines — from compact shop-floor folders to heavy-gauge production lines. Every machine is engineered for repeatable, burr-free bends, fast setup, and decades of reliable service in fabrication shops, HVAC manufacturers, and architectural metalwork studios worldwide.',
}

export const products = [
  {
    id: 'double-folding-machine',
    name: 'Double Folding Machine',
    shortName: 'Double Folding Machine',
    family: 'Double Folder',
    eyebrow: 'Flagship',
    summary:
      'Our flagship double folding machine. Two synchronized folding beams bend both edges of a sheet in a single pass — perfect for deep pans, cleanroom panels, and architectural cladding.',
    description:
      'The double folding machine is the centerpiece of the ARTITECT line. Two independently controlled folding beams, driven by closed-loop hydraulics and a rigid welded steel frame, fold a sheet from both sides in a single continuous stroke. The result: dramatically shorter cycle times, perfectly symmetrical edges, and no flipping the workpiece for a second operation.',
    capabilities: [
      'Folds both edges of a sheet in one continuous stroke',
      'Closed-loop hydraulic beam control for ±0.1° repeatability',
      'Adjustable folding angle from 0° to 180°',
      'Backgauge positioning accurate to ±0.05 mm',
    ],
    idealFor: [
      'Architectural cladding',
      'HVAC plenum and ductwork',
      'Stainless steel kitchen equipment',
      'Switchgear enclosures',
    ],
    specs: {
      'Max sheet length': '4000 mm',
      'Max sheet thickness (mild steel)': '3.0 mm',
      'Folding angle range': '0° – 180°',
      'Beams': '2 synchronized hydraulic',
      'Repeatability': '± 0.1°',
    },
    imgId: 'product-double-folding-machine-7b3a91',
    titleId: 'product-double-folding-machine-title',
    descId: 'product-double-folding-machine-desc',
    tagId: 'product-double-folding-machine-tag',
  },
  {
    id: 'double-folder',
    name: 'Double Folder',
    shortName: 'Double Folder',
    family: 'Double Folder',
    eyebrow: 'High-speed',
    summary:
      'A compact double folder optimized for high-mix shops. Fast tool changes, intuitive HMI, and a footprint that fits through a standard shop door.',
    description:
      'The Double Folder brings flagship folding precision to a smaller footprint. Its tilting beam and segmented tooling make it ideal for shops running mixed short batches of enclosures, brackets, and panels where every minute of setup matters.',
    capabilities: [
      'Segmented upper and lower tools for partial folds',
      'Quick-change blade system under 60 seconds',
      '15" multi-touch HMI with saved recipes',
      'Compact footprint, fits through 1.0 m doorway',
    ],
    idealFor: [
      'Job shops',
      'Short-batch enclosures',
      'Custom brackets and frames',
      'Prototype fabrication',
    ],
    specs: {
      'Max sheet length': '2500 mm',
      'Max sheet thickness (mild steel)': '2.0 mm',
      'Folding angle range': '0° – 180°',
      'Beams': '2 hydraulic, tilting',
      'Tool change time': '< 60 s',
    },
    imgId: 'product-double-folder-3c8d2e',
    titleId: 'product-double-folder-title',
    descId: 'product-double-folder-desc',
    tagId: 'product-double-folder-tag',
  },
  {
    id: 'sheet-metal-folder',
    name: 'Sheet Metal Folder',
    shortName: 'Sheet Metal Folder',
    family: 'Single Folder',
    eyebrow: 'Versatile',
    summary:
      'A general-purpose sheet metal folder for fabricators who need a robust, daily-driver workhorse that handles a wide range of gauges and lengths.',
    description:
      'The Sheet Metal Folder is the everyday workhorse of the ARTITECT catalog. A single folding beam, generous throat depth, and forgiving tooling make it the right answer for most fab-shop applications — from architectural flashings to industrial guards.',
    capabilities: [
      'Generous 600 mm throat depth for deep draws',
      'Manual or CNC backgauge options',
      'Hardened and ground folding rail',
      'Accepts mild steel, stainless, aluminum, copper',
    ],
    idealFor: [
      'General fabrication',
      'Architectural flashings',
      'Machine guards',
      'Industrial panels',
    ],
    specs: {
      'Max sheet length': '3200 mm',
      'Max sheet thickness (mild steel)': '2.5 mm',
      'Folding angle range': '0° – 180°',
      'Beams': '1 hydraulic clamping, 1 folding',
      'Throat depth': '600 mm',
    },
    imgId: 'product-sheet-metal-folder-9f4c12',
    titleId: 'product-sheet-metal-folder-title',
    descId: 'product-sheet-metal-folder-desc',
    tagId: 'product-sheet-metal-folder-tag',
  },
  {
    id: 'sheet-metal-folding-machine',
    name: 'Sheet Metal Folding Machine',
    shortName: 'Sheet Metal Folding Machine',
    family: 'Single Folder',
    eyebrow: 'Production',
    summary:
      'A heavy-duty sheet metal folding machine built for two-shift production environments. Reinforced frame, automated loading options, and a long-life hydraulic system.',
    description:
      'When the shift ends and the line must keep folding, this is the machine you want on the floor. The Sheet Metal Folding Machine pairs a stress-relieved welded frame with hardened, ground tooling and an oversized hydraulic power pack rated for continuous duty.',
    capabilities: [
      'Stress-relieved welded steel frame',
      'Continuous-duty hydraulic power pack',
      'Optional robotic loading and stacking',
      'Heavy cast beam for full-length bending',
    ],
    idealFor: [
      'Two-shift production',
      'Server rack manufacturing',
      'Electrical enclosures',
      'Automotive sub-assemblies',
    ],
    specs: {
      'Max sheet length': '6000 mm',
      'Max sheet thickness (mild steel)': '4.0 mm',
      'Folding angle range': '0° – 180°',
      'Beams': '1 oversized clamping, 1 folding',
      'Duty cycle': 'Continuous, 2-shift rated',
    },
    imgId: 'product-sheet-metal-folding-machine-2a7e44',
    titleId: 'product-sheet-metal-folding-machine-title',
    descId: 'product-sheet-metal-folding-machine-desc',
    tagId: 'product-sheet-metal-folding-machine-tag',
  },
  {
    id: 'metal-folder',
    name: 'Metal Folder',
    shortName: 'Metal Folder',
    family: 'Single Folder',
    eyebrow: 'Precision',
    summary:
      'A precision metal folder for shops that fold stainless, aluminum, and coated steel where surface quality matters as much as angle accuracy.',
    description:
      'The Metal Folder is designed for fabrics that show every mark. Nylon-faced clamping segments, polished folding rails, and anti-marring inserts protect polished stainless, anodized aluminum, and pre-painted coil — straight from the coil to the customer.',
    capabilities: [
      'Anti-marring nylon-faced clamping segments',
      'Mirror-polished folding rails',
      'Programmable angle sequencing',
      'Laser angle measurement with closed-loop correction',
    ],
    idealFor: [
      'Polished stainless panels',
      'Anodized aluminum trim',
      'Pre-painted architectural coil',
      'Elevator cab panels',
    ],
    specs: {
      'Max sheet length': '3200 mm',
      'Max sheet thickness (mild steel)': '2.0 mm',
      'Folding angle range': '0° – 180°',
      'Surface protection': 'Nylon-faced, full-length',
      'Angle accuracy': '± 0.05°',
    },
    imgId: 'product-metal-folder-5d1b78',
    titleId: 'product-metal-folder-title',
    descId: 'product-metal-folder-desc',
    tagId: 'product-metal-folder-tag',
  },
  {
    id: 'metal-folder-machine',
    name: 'Metal Folder Machine',
    shortName: 'Metal Folder Machine',
    family: 'Single Folder',
    eyebrow: 'Compact',
    summary:
      'A compact metal folder machine sized for small-batch shops, training centers, and satellite workstations where floor space is at a premium.',
    description:
      'The Metal Folder Machine is the smallest member of the family, but it carries the same engineering DNA. A monoblock cast frame, a self-contained hydraulic unit, and an intuitive push-button HMI make it the perfect first machine — or the perfect second machine at a satellite workstation.',
    capabilities: [
      'Self-contained hydraulic power unit',
      'Cast monoblock frame for rigidity',
      'Push-button HMI with fold-angle presets',
      'Rollers for easy material handling',
    ],
    idealFor: [
      'Small-batch shops',
      'Vocational training',
      'Maintenance departments',
      'Architectural studios',
    ],
    specs: {
      'Max sheet length': '2000 mm',
      'Max sheet thickness (mild steel)': '1.5 mm',
      'Folding angle range': '0° – 180°',
      'Frame': 'Cast iron monoblock',
      'Footprint': '1.6 m × 1.2 m',
    },
    imgId: 'product-metal-folder-machine-8a6c25',
    titleId: 'product-metal-folder-machine-title',
    descId: 'product-metal-folder-machine-desc',
    tagId: 'product-metal-folder-machine-tag',
  },
  {
    id: 'metal-folding-machine',
    name: 'Metal Folding Machine',
    shortName: 'Metal Folding Machine',
    family: 'Single Folder',
    eyebrow: 'Heavy gauge',
    summary:
      'A heavy-gauge metal folding machine for thick plate, structural steel, and the toughest jobs in shipyards, heavy equipment, and structural fabrication.',
    description:
      'When the job calls for folding 6 mm mild steel, structural plate, or pre-formed stainless sections, the Metal Folding Machine delivers. Its oversized beams, massive crowning system, and high-tonnage hydraulic cylinders handle the gauges that ordinary folders cannot touch.',
    capabilities: [
      'Oversized clamping and folding beams',
      'Hydraulic crowning system for full-length accuracy',
      'Heavy-duty backgauge with 1000 mm travel',
      'Accepts pre-formed sections and thick plate',
    ],
    idealFor: [
      'Structural fabrication',
      'Shipyards and offshore',
      'Heavy equipment manufacturing',
      'Plate metalwork',
    ],
    specs: {
      'Max sheet length': '8000 mm',
      'Max sheet thickness (mild steel)': '6.0 mm',
      'Folding angle range': '0° – 180°',
      'Clamping force': '250 t',
      'Crowning': 'Hydraulic, programmable',
    },
    imgId: 'product-metal-folding-machine-4f9b63',
    titleId: 'product-metal-folding-machine-title',
    descId: 'product-metal-folding-machine-desc',
    tagId: 'product-metal-folding-machine-tag',
  },
]

// Static "compare-and-choose" set shown on every product detail page. The
// build-time data-strk-img plugin can only expand statically-declared arrays,
// so we keep this list literal (and the runtime drops the current product).
export const relatedMachines = [
  products.find((p) => p.id === 'double-folder'),
  products.find((p) => p.id === 'sheet-metal-folder'),
  products.find((p) => p.id === 'metal-folder'),
].filter(Boolean)

export const industries = [
  {
    id: 'architecture',
    name: 'Architecture & Cladding',
    description:
      'Facades, column covers, and decorative panels with consistent angles across thousands of identical parts.',
    icon: 'Building2',
  },
  {
    id: 'hvac',
    name: 'HVAC & Ductwork',
    description:
      'Duct sections, plenums, and transition pieces that need airtight, repeatable folds and fast setup.',
    icon: 'Wind',
  },
  {
    id: 'switchgear',
    name: 'Electrical Enclosures',
    description:
      'Server racks, switchgear cabinets, and control panels where flatness and squareness are non-negotiable.',
    icon: 'Cpu',
  },
  {
    id: 'kitchen',
    name: 'Stainless Kitchen Equipment',
    description:
      'Polished stainless countertops, sinks, and food-service equipment with mirror-finish surfaces.',
    icon: 'Utensils',
  },
  {
    id: 'automotive',
    name: 'Automotive Sub-Assemblies',
    description:
      'Brackets, frames, and structural components for automotive tier-one and tier-two suppliers.',
    icon: 'Car',
  },
  {
    id: 'shipyard',
    name: 'Shipyards & Offshore',
    description:
      'Thick-plate folding for marine outfitting, offshore structures, and heavy industrial fabricators.',
    icon: 'Ship',
  },
]

export const capabilities = [
  {
    id: 'precision',
    title: '±0.1° repeatability',
    description:
      'Closed-loop hydraulic beam control and laser angle measurement hold every fold within a tenth of a degree — part after part, shift after shift.',
    icon: 'Crosshair',
  },
  {
    id: 'rigidity',
    title: 'Rigid welded steel frames',
    description:
      'Stress-relieved, oven-aged, and machined in a single setup. Our frames do not deflect when you push them, and they do not drift over years of service.',
    icon: 'Shield',
  },
  {
    id: 'control',
    title: 'Intuitive HMI control',
    description:
      'A 15-inch multi-touch panel with saved recipes, graphical bend sequencing, and one-touch recall. New operators are productive in a single shift.',
    icon: 'Monitor',
  },
  {
    id: 'service',
    title: '24/7 global service',
    description:
      'A worldwide network of field service engineers, regional spare-parts depots, and remote diagnostics keep your line folding.',
    icon: 'LifeBuoy',
  },
  {
    id: 'materials',
    title: 'Folds any material',
    description:
      'Mild steel, stainless, aluminum, copper, pre-painted coil, galvanneal, and high-strength alloys — calibrated tooling for every alloy you handle.',
    icon: 'Layers',
  },
  {
    id: 'safety',
    title: 'Operator-first safety',
    description:
      'Light curtains, dual-channel E-stops, and category-3 safety PLCs meet CE, UL, and ISO 12100 — without slowing your cycle.',
    icon: 'ShieldCheck',
  },
]

export const process = [
  {
    id: 'consult',
    step: '01',
    title: 'Consult',
    description:
      'A short call with an applications engineer to map your parts, materials, and throughput goals. We respond within one business day.',
  },
  {
    id: 'engineer',
    step: '02',
    title: 'Engineer',
    description:
      'We configure the right machine, tooling, and automation package for your shop, and we prove it on your parts in our demo lab.',
  },
  {
    id: 'build',
    step: '03',
    title: 'Build',
    description:
      'Production in our ISO 9001 facility with full traceability. Every machine is acceptance-tested with your parts before shipment.',
  },
  {
    id: 'install',
    step: '04',
    title: 'Install & train',
    description:
      'A factory-trained engineer commissions the line on your floor and trains your operators until first-article parts pass inspection.',
  },
  {
    id: 'support',
    step: '05',
    title: 'Support for life',
    description:
      'Remote diagnostics, scheduled preventive maintenance, and a guaranteed 48-hour spare-parts shipment anywhere in the world.',
  },
]

export const testimonials = [
  {
    id: 't1',
    quote:
      'The Double Folding Machine cut our pan-fabrication time in half. The first part off the line was within tolerance — we did not even have to touch the backgauge.',
    name: 'Lars Andersen',
    role: 'Production Manager',
    company: 'Nordhaven Stainless, Denmark',
  },
  {
    id: 't2',
    quote:
      'We run two shifts a day, five days a week, on the Metal Folding Machine. Three years in, and the angle accuracy has not drifted.',
    name: 'Maria Rossi',
    role: 'Operations Director',
    company: 'Arclinea Facciate, Italy',
  },
  {
    id: 't3',
    quote:
      'ARTITECT engineers flew to our shop, proved the machine on our toughest parts, and stayed for installation. The level of support is rare in our industry.',
    name: 'Daniel Cho',
    role: 'Founder',
    company: 'Cho Metalcraft, Canada',
  },
]

export const stats = [
  { value: '25+', label: 'Years engineering folding machines' },
  { value: '4,800', label: 'Machines installed worldwide' },
  { value: '52', label: 'Countries with field service' },
  { value: '99.4%', label: 'First-pass acceptance rate' },
]
