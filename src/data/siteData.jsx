// Product catalog and site data for ARTITECT MACHINERY
// Each product image is loaded via the stock image system using data-strk-img
// with text IDs that point to the static text on the page (no hardcoded URLs).

export const products = [
  {
    slug: 'artitect-df-3200',
    name: 'ARTITECT DF-3200',
    category: 'Double Folding Machine',
    tagline: 'Dual-station precision for high-volume production.',
    description:
      'A flagship double folding machine engineered for continuous-duty fabrication. Twin synchronized folders deliver mirror-grade angle consistency across mild steel, stainless, and aluminum up to 3.2 m wide.',
    highlights: [
      'Working length 3200 mm',
      'Folding capacity up to 2.5 mm mild steel',
      'CNC backgauge with 0.05 mm repeatability',
      'Servo-hydraulic clamping beam',
    ],
    specs: {
      model: 'DF-3200',
      type: 'Double Folding Machine',
      length: '3200 mm',
      capacity: '2.5 mm MS / 1.6 mm SS',
      power: '11 kW',
      control: '9-inch HMI, 100 programs',
      weight: '4 850 kg',
    },
    primaryId: 'product-df3200-primary',
    titleId: 'product-df3200-title',
    descId: 'product-df3200-desc',
  },
  {
    slug: 'artitect-df-2500',
    name: 'ARTITECT DF-2500',
    category: 'Double Folder',
    tagline: 'Mid-format double folder with quick-change tooling.',
    description:
      'The DF-2500 is a compact double folder built for workshops that need flexible throughput. Quick-release tooling, electronic angle selection, and a shallow footprint make it ideal for tight production cells.',
    highlights: [
      'Working length 2500 mm',
      'Folding capacity up to 2.0 mm mild steel',
      'Electronic angle preset library',
      'Footprint under 4 m²',
    ],
    specs: {
      model: 'DF-2500',
      type: 'Double Folder',
      length: '2500 mm',
      capacity: '2.0 mm MS / 1.2 mm SS',
      power: '7.5 kW',
      control: '7-inch HMI, 50 programs',
      weight: '3 150 kg',
    },
    primaryId: 'product-df2500-primary',
    titleId: 'product-df2500-title',
    descId: 'product-df2500-desc',
  },
  {
    slug: 'artitect-sf-2000',
    name: 'ARTITECT SF-2000',
    category: 'Sheet Metal Folder',
    tagline: 'A workhorse sheet metal folder for everyday fabrication.',
    description:
      'The SF-2000 sheet metal folder is engineered for reliability in single-shift and double-shift operations. Its rigid mono-block frame keeps deflection near zero, delivering repeatable angles shift after shift.',
    highlights: [
      'Working length 2000 mm',
      'Folding capacity up to 1.6 mm mild steel',
      'Hardened tool steel beam',
      'Mechanical angle stop',
    ],
    specs: {
      model: 'SF-2000',
      type: 'Sheet Metal Folder',
      length: '2000 mm',
      capacity: '1.6 mm MS / 1.0 mm SS',
      power: '4.0 kW',
      control: 'Pendant controller',
      weight: '1 950 kg',
    },
    primaryId: 'product-sf2000-primary',
    titleId: 'product-sf2000-title',
    descId: 'product-sf2000-desc',
  },
  {
    slug: 'artitect-mf-4000',
    name: 'ARTITECT MF-4000',
    category: 'Sheet Metal Folding Machine',
    tagline: 'Wide-format sheet metal folding machine for architectural panels.',
    description:
      'Built for architectural cladding, ductwork, and signage, the MF-4000 sheet metal folding machine handles 4-meter sheets with a heavy-duty clamping beam and crowning system for flawless long bends.',
    highlights: [
      'Working length 4000 mm',
      'Folding capacity up to 2.0 mm mild steel',
      'Hydraulic crowning system',
      'Rear support table included',
    ],
    specs: {
      model: 'MF-4000',
      type: 'Sheet Metal Folding Machine',
      length: '4000 mm',
      capacity: '2.0 mm MS / 1.2 mm SS',
      power: '9.0 kW',
      control: '10-inch HMI, 200 programs',
      weight: '5 600 kg',
    },
    primaryId: 'product-mf4000-primary',
    titleId: 'product-mf4000-title',
    descId: 'product-mf4000-desc',
  },
  {
    slug: 'artitect-mf-1600',
    name: 'ARTITECT MF-1600',
    category: 'Metal Folder',
    tagline: 'Compact metal folder for precision short-run work.',
    description:
      'A precise metal folder that fits on the shop floor of any job shop. Ideal for HVAC, electrical enclosures, and custom fabrication where smaller-format accuracy matters most.',
    highlights: [
      'Working length 1600 mm',
      'Folding capacity up to 1.2 mm mild steel',
      'Manual swing-away beam',
      'Compact 2.5 m footprint',
    ],
    specs: {
      model: 'MF-1600',
      type: 'Metal Folder',
      length: '1600 mm',
      capacity: '1.2 mm MS / 0.8 mm SS',
      power: '2.2 kW',
      control: 'Digital angle display',
      weight: '980 kg',
    },
    primaryId: 'product-mf1600-primary',
    titleId: 'product-mf1600-title',
    descId: 'product-mf1600-desc',
  },
  {
    slug: 'artitect-mfm-3200',
    name: 'ARTITECT MFM-3200',
    category: 'Metal Folder Machine',
    tagline: 'Automated metal folder machine for serial production.',
    description:
      'The MFM-3200 metal folder machine is a fully automated cell for serial bending. Robotic sheet loading, in-line angle measurement, and integrated part sorting deliver lights-out productivity.',
    highlights: [
      'Working length 3200 mm',
      'Folding capacity up to 2.0 mm mild steel',
      'In-line laser angle measurement',
      'Automated stacker option',
    ],
    specs: {
      model: 'MFM-3200',
      type: 'Metal Folder Machine',
      length: '3200 mm',
      capacity: '2.0 mm MS / 1.2 mm SS',
      power: '13 kW',
      control: '15-inch HMI, 500 programs',
      weight: '6 400 kg',
    },
    primaryId: 'product-mfm3200-primary',
    titleId: 'product-mfm3200-title',
    descId: 'product-mfm3200-desc',
  },
  {
    slug: 'artitect-xf-2200',
    name: 'ARTITECT XF-2200',
    category: 'Metal Folding Machine',
    tagline: 'Versatile metal folding machine for mixed-material shops.',
    description:
      'A versatile metal folding machine that adapts to mild steel, stainless, aluminum, and coated stock. Adaptive pressure control protects finish quality on pre-painted and galvanized sheets.',
    highlights: [
      'Working length 2200 mm',
      'Folding capacity up to 1.8 mm mild steel',
      'Adaptive clamping pressure',
      'Tool-less rotation system',
    ],
    specs: {
      model: 'XF-2200',
      type: 'Metal Folding Machine',
      length: '2200 mm',
      capacity: '1.8 mm MS / 1.0 mm SS',
      power: '5.5 kW',
      control: '7-inch HMI, 80 programs',
      weight: '2 700 kg',
    },
    primaryId: 'product-xf2200-primary',
    titleId: 'product-xf2200-title',
    descId: 'product-xf2200-desc',
  },
];

export const categories = [
  'Double Folding Machine',
  'Double Folder',
  'Sheet Metal Folder',
  'Sheet Metal Folding Machine',
  'Metal Folder',
  'Metal Folder Machine',
  'Metal Folding Machine',
];

export const capabilities = [
  {
    title: 'Precision Engineering',
    description:
      'Every ARTITECT machine is built around a stress-relieved mono-block frame, hand-scraped bearing surfaces, and pre-loaded linear rails for angles that hold their tolerance shift after shift.',
    icon: 'Crosshair',
  },
  {
    title: 'Operator-First Controls',
    description:
      'Our HMI was designed alongside the people who run the line. Clear program libraries, on-screen bend simulation, and one-touch recall keep setup time under 90 seconds.',
    icon: 'Monitor',
  },
  {
    title: 'Heavy-Duty Build',
    description:
      'Welded steel plate frames, hardened tool steel beams, and oversized hydraulic power packs give ARTITECT machines a service life measured in decades, not years.',
    icon: 'ShieldCheck',
  },
  {
    title: 'Global Service Network',
    description:
      '24/7 remote diagnostics, 48-hour spare parts dispatch, and certified field engineers across 32 countries keep your production running — wherever your shop is.',
    icon: 'Globe2',
  },
];

export const industries = [
  {
    title: 'HVAC & Ductwork',
    body: 'Tight seams and clean folds for rectangular duct, fittings, and architectural metalwork.',
  },
  {
    title: 'Architectural Cladding',
    body: 'Long, perfectly flat panels for building envelopes, facades, and roofing systems.',
  },
  {
    title: 'Enclosures & Cabinets',
    body: 'Repeatable accuracy for electrical cabinets, server racks, and industrial enclosures.',
  },
  {
    title: 'Automotive & Transport',
    body: 'Robust folding for chassis components, brackets, and structural body panels.',
  },
  {
    title: 'Signage & Display',
    body: 'Pristine folds on pre-painted and brushed stock without finish damage.',
  },
  {
    title: 'Custom Fabrication',
    body: 'Flexible job-shop folding for one-offs, prototypes, and short production runs.',
  },
];

export const stats = [
  { value: '32+', label: 'Countries served' },
  { value: '4 200+', label: 'Machines installed' },
  { value: '23 yrs', label: 'Of engineering heritage' },
  { value: '98.6%', label: 'Customer retention' },
];

export const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Products', to: '/products' },
  { label: 'Industries', to: '/industries' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
];
