// Product catalog used across the site.
// Stable slugs and reference IDs ensure data-strk-img references match the rendered DOM.

export const PRODUCTS = [
  {
    slug: 'a-series-double-folder',
    line: 'A Series',
    name: 'Double Folding Machine A-2500',
    short: 'Up-and-down folding for complex profiles in a single setup.',
    description:
      'The A-2500 double folder is engineered for fabricators who need both upward and downward bends without flipping the workpiece. Servo-driven beams ensure exact, repeatable angles across long sheets.',
    capacity: '2500 mm × 2.0 mm',
    accuracy: '± 0.05°',
    drive: 'Servo electric',
    application: 'HVAC, signage, façade panels',
    imgId: 'product-a-2500-img',
  },
  {
    slug: 'm-series-sheet-metal-folder',
    line: 'M Series',
    name: 'Sheet Metal Folder M-3200',
    short: 'Long-bed folder built for architectural panel work.',
    description:
      'The M-3200 is our flagship sheet metal folding machine. A 3.2 metre bed and reinforced beam structure deliver clean, sharp folds on roofing, cladding, and architectural envelopes.',
    capacity: '3200 mm × 1.5 mm',
    accuracy: '± 0.1°',
    drive: 'Hydro-mechanical',
    application: 'Roofing, cladding, façades',
    imgId: 'product-m-3200-img',
  },
  {
    slug: 'p-series-metal-folder',
    line: 'P Series',
    name: 'Metal Folder P-1600',
    short: 'Compact precision metal folder for the modern workshop.',
    description:
      'A space-efficient metal folder machine built for short runs and prototyping. Quick-change tools and an intuitive HMI let operators move from drawing to finished part in minutes.',
    capacity: '1600 mm × 1.2 mm',
    accuracy: '± 0.05°',
    drive: 'Servo electric',
    application: 'Prototyping, custom fabrication',
    imgId: 'product-p-1600-img',
  },
  {
    slug: 'h-series-metal-folding-machine',
    line: 'H Series',
    name: 'Heavy Metal Folding Machine H-4000',
    short: 'Heavy-gauge folding for industrial production.',
    description:
      'The H-4000 metal folding machine handles thick mild steel and stainless with composed authority. A double-supported beam system minimises deflection on the longest folds.',
    capacity: '4000 mm × 3.0 mm',
    accuracy: '± 0.1°',
    drive: 'Hydraulic',
    application: 'Heavy fabrication, structural',
    imgId: 'product-h-4000-img',
  },
  {
    slug: 'c-series-cnc-double-folder',
    line: 'C Series',
    name: 'CNC Double Folder C-2000',
    short: 'CNC-driven double folder with full programmable cycles.',
    description:
      'A CNC double folder with multi-axis tool control. Store hundreds of folding programs and run unattended cycles for repeatable, lights-out production.',
    capacity: '2000 mm × 2.0 mm',
    accuracy: '± 0.03°',
    drive: 'CNC servo',
    application: 'High-volume production',
    imgId: 'product-c-2000-img',
  },
  {
    slug: 'e-series-elegant-folder',
    line: 'E Series',
    name: 'Studio Folder E-1200',
    short: 'A refined folding machine for design studios and ateliers.',
    description:
      'The Studio E-1200 brings industrial precision to smaller workshops. Clean lines, quiet servo drive, and a polished operator console make it a fixture in design-led metal studios.',
    capacity: '1200 mm × 1.0 mm',
    accuracy: '± 0.05°',
    drive: 'Servo electric',
    application: 'Studios, ateliers, light fabrication',
    imgId: 'product-e-1200-img',
  },
]

export function getProductBySlug(slug) {
  return PRODUCTS.find((p) => p.slug === slug)
}
