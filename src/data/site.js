// Centralized content for the ARTITECT MACHINERY site.
// Keep marketing copy here so the page components stay focused on layout.

export const BRAND = {
  name: 'ARTITECT MACHINERY',
  tagline: 'Precision folding, engineered for fabricators.',
  description:
    'For three decades we have built folding machinery that fabricators rely on — robust frames, repeatable accuracy, and controls that feel as considered as the parts they shape.',
  contactEmail: 'sales@artitect-machinery.com',
  contactPhone: '+1 (415) 555-0188',
  address: '1180 Foundry Park Boulevard · Bay 14 · Pittsburgh, PA 15222',
}

// Seven product lines — each card on the Products section maps to one entry here.
export const PRODUCTS = [
  {
    id: 'double-folding-machine',
    title: 'Double Folding Machine',
    eyebrow: 'Dual-axis forming',
    summary:
      'A high-rigidity double folding machine built for two-sided bends in a single clamping — ideal for deep channels, server enclosures and HVAC housings.',
    capabilities: [
      'Up to 6 m folding length',
      'Plus or minus 0.1 degree repeatability',
      'Programmable bend sequence',
    ],
    imgQuery: 'sheet metal folding machine factory floor operator',
  },
  {
    id: 'double-folder',
    title: 'Double Folder',
    eyebrow: 'Symmetrical bending',
    summary:
      'Our double folder synchronises two folding beams so symmetrical bends land in one pass — no flipping, no re-fixturing, no rework.',
    capabilities: [
      'Twin-beam synchronized drive',
      'Quick-change tooling',
      'Tool-free material setup',
    ],
    imgQuery: 'industrial double folder bending steel panels',
  },
  {
    id: 'sheet-metal-folder',
    title: 'Sheet Metal Folder',
    eyebrow: 'Production workhorse',
    summary:
      'A workhorse sheet metal folder tuned for high-mix shops. Air-bend crowning, fast backgauge, and a control surface that operators actually enjoy.',
    capabilities: [
      'Wide throat depth',
      'Pneumatic crowning system',
      'Color HMI with job library',
    ],
    imgQuery: 'sheet metal folder industrial press brake operator',
  },
  {
    id: 'sheet-metal-folding-machine',
    title: 'Sheet Metal Folding Machine',
    eyebrow: 'Precision CNC',
    summary:
      'A CNC sheet metal folding machine that pairs a stiff welded frame with closed-loop hydraulics for micron-true angle consistency across shifts.',
    capabilities: [
      'Closed-loop angle control',
      'Multi-axis backgauge',
      'Offline programming',
    ],
    imgQuery: 'precision CNC sheet metal folding machine control panel',
  },
  {
    id: 'metal-folder',
    title: 'Metal Folder',
    eyebrow: 'Versatile forming',
    summary:
      'Compact, precise, and easy to relocate — the metal folder that fits a prototype shop on Monday and a tier-one line on Friday.',
    capabilities: [
      'Small footprint',
      'Single-phase power option',
      'Manual and semi-auto modes',
    ],
    imgQuery: 'compact metal folder workshop fabrication cell',
  },
  {
    id: 'metal-folder-machine',
    title: 'Metal Folder Machine',
    eyebrow: 'Heavy-duty frame',
    summary:
      'A heavy-gauge metal folder machine engineered for thick plate and stainless. Stress-relieved bridge, oversized bearings, real capacity to spare.',
    capabilities: [
      'Up to 6 mm mild steel',
      'Stress-relieved bridge',
      'Oversized ram bearings',
    ],
    imgQuery: 'heavy duty metal folder machine thick steel plate forming',
  },
  {
    id: 'metal-folding-machine',
    title: 'Metal Folding Machine',
    eyebrow: 'Premium flagship',
    summary:
      'Our flagship metal folding machine — servo-electric, quiet, and accurate enough for architectural facades and clean-room enclosures alike.',
    capabilities: [
      'Servo-electric drive',
      'Whisper-quiet operation',
      'Energy-recovery cycle',
    ],
    imgQuery: 'servo electric metal folding machine architectural facade',
  },
]

export const PILLARS = [
  {
    id: 'precision',
    title: 'Engineered precision',
    body:
      'Every ARTITECT machine is built on a stress-relived steel bridge, ground ways, and closed-loop feedback. The result is the same bend you programmed — at 8 a.m. and again at 4 p.m.',
  },
  {
    id: 'controls',
    title: 'Controls operators trust',
    body:
      'Our HMI is a fabricator-first control surface. Job libraries, offline programming, and a physical pendant that does exactly what it says it will.',
  },
  {
    id: 'support',
    title: 'Global service network',
    body:
      'Round-the-clock phone support, regional spare parts depots, and certified field engineers across North America, Europe, and the Asia-Pacific region.',
  },
  {
    id: 'uptime',
    title: 'Built for uptime',
    body:
      'Industrial-grade hydraulics, oversized bearings, and a maintenance schedule that respects production. Uptime is the feature we design around.',
  },
]

export const CAPABILITIES = [
  { label: 'Folding length', value: 'Up to 6 m' },
  { label: 'Tonnage range', value: '40 – 800 t' },
  { label: 'Bend accuracy', value: 'Plus or minus 0.1 degrees' },
  { label: 'Control axes', value: 'Up to 12' },
  { label: 'Frame construction', value: 'Stress-relieved steel' },
  { label: 'Compliance', value: 'CE · UL · ISO 9001' },
]

export const INDUSTRIES = [
  {
    id: 'hvac',
    title: 'HVAC & ventilation',
    body: 'Ductwork, plenums and architectural panels — produced in one clamping cycle.',
  },
  {
    id: 'enclosures',
    title: 'Electrical enclosures',
    body: 'Server racks, switchboards and clean-room cabinets that need cosmetic seams to disappear.',
  },
  {
    id: 'architectural',
    title: 'Architectural metalwork',
    body: 'Facade panels, soffits and decorative cladding with mirror-finish tolerances.',
  },
  {
    id: 'automotive',
    title: 'Automotive & mobility',
    body: 'Chassis components, battery enclosures and EV structural panels at production cadence.',
  },
  {
    id: 'aerospace',
    title: 'Aerospace & defense',
    body: 'Traceable bends for thin-gauge stainless and high-nickel alloys.',
  },
  {
    id: 'furniture',
    title: 'Furniture & lighting',
    body: 'Bespoke metal furniture and lighting hardware with repeatable, showroom-grade edges.',
  },
]
