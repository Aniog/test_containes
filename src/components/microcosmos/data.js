// Content data for the MicroCosmos single-page site.
// Each item carries explicit titleId / descId so image queries can reference
// the exact DOM ids that will be rendered.

export const worlds = [
  {
    id: 'cells',
    title: 'Living Cells',
    desc: 'The pulsing architecture of life itself — membranes, nuclei and organelles in motion.',
    detail:
      'A single drop of pond water reveals an entire civilization. Cells divide, drift and communicate through shimmering membranes, each one a self-contained city of biochemistry.',
    imgId: 'world-cells-a1b2c3',
    titleId: 'world-cells-title',
    descId: 'world-cells-desc',
    stat: '10,000×',
    statLabel: 'magnification',
  },
  {
    id: 'pollen',
    title: 'Pollen Grains',
    desc: 'Tiny sculpted seeds, each a masterpiece of natural engineering and geometry.',
    detail:
      'Under the electron microscope, pollen grains become alien architecture — spheres studded with spikes and lattice work, evolved to hitch rides on wind and wing.',
    imgId: 'world-pollen-d4e5f6',
    titleId: 'world-pollen-title',
    descId: 'world-pollen-desc',
    stat: '50 µm',
    statLabel: 'average size',
  },
  {
    id: 'insects',
    title: 'Insect Eyes',
    desc: 'Compound lenses that fragment the world into a thousand simultaneous images.',
    detail:
      'The faceted eye of a fly is a mosaic of hexagonal lenses, each capturing its own sliver of reality. Together they weave a flickering, panoramic vision of the world.',
    imgId: 'world-insects-g7h8i9',
    titleId: 'world-insects-title',
    descId: 'world-insects-desc',
    stat: '7,500',
    statLabel: 'facets per eye',
  },
  {
    id: 'water',
    title: 'Water Bears',
    desc: 'Tardigrades — the indestructible voyagers of the microscopic deep.',
    detail:
      'Tardigrades survive freezing, boiling, radiation and the vacuum of space. These plump, eight-legged pioneers are the ultimate extremophiles of the micro world.',
    imgId: 'world-water-j1k2l3',
    titleId: 'world-water-title',
    descId: 'world-water-desc',
    stat: '−273°C',
    statLabel: 'survives near-absolute zero',
  },
];

export const gallery = [
  {
    id: 'diatom',
    title: 'Diatom Shells',
    desc: 'Glass houses built by single-celled algae.',
    imgId: 'gal-diatom-m4n5o6',
    titleId: 'gal-diatom-title',
    descId: 'gal-diatom-desc',
  },
  {
    id: 'snowflake',
    title: 'Snowflake Crystal',
    desc: 'Frozen water forming six-fold symmetry.',
    imgId: 'gal-snowflake-p7q8r9',
    titleId: 'gal-snowflake-title',
    descId: 'gal-snowflake-desc',
  },
  {
    id: 'butterfly-wing',
    title: 'Butterfly Wing Scales',
    desc: 'Structural color from overlapping tiles.',
    imgId: 'gal-wing-s1t2u3',
    titleId: 'gal-wing-title',
    descId: 'gal-wing-desc',
  },
  {
    id: 'spider-silk',
    title: 'Spider Silk',
    desc: 'Stronger than steel, spun from protein.',
    imgId: 'gal-silk-v4w5x6',
    titleId: 'gal-silk-title',
    descId: 'gal-silk-desc',
  },
  {
    id: 'crystal',
    title: 'Vitamin C Crystal',
    desc: 'Organic molecules crystallizing in light.',
    imgId: 'gal-crystal-y7z8a9',
    titleId: 'gal-crystal-title',
    descId: 'gal-crystal-desc',
  },
  {
    id: 'fungi',
    title: 'Fungal Spores',
    desc: 'Drifting seeds of the decomposer kingdom.',
    imgId: 'gal-fungi-b1c2d3',
    titleId: 'gal-fungi-title',
    descId: 'gal-fungi-desc',
  },
  {
    id: 'neuron',
    title: 'Neuron Network',
    desc: 'The branching wiring of thought itself.',
    imgId: 'gal-neuron-e4f5g6',
    titleId: 'gal-neuron-title',
    descId: 'gal-neuron-desc',
  },
  {
    id: 'coral',
    title: 'Coral Polyp',
    desc: 'A tiny animal building reefs of stone.',
    imgId: 'gal-coral-h7i8j9',
    titleId: 'gal-coral-title',
    descId: 'gal-coral-desc',
  },
];

export const stats = [
  { value: '1M+', label: 'species unseen by the naked eye' },
  { value: '0.1mm', label: 'where the micro world begins' },
  { value: '1665', label: 'the year the cell was first seen' },
  { value: '∞', label: 'forms still waiting to be found' },
];
