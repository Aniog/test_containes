export const SPECIMENS = [
  {
    id: 'MC-001',
    name: 'Vascular Bundle',
    latinName: 'Zea mays — Monocot Stem Cross-Section',
    category: 'Plant Histology',
    magnification: '100×',
    imgId: 'spec-vascular-bundle-3a1f9d',
    titleId: 'spec-title-mc001',
    descId: 'spec-desc-mc001',
    description:
      'The vascular bundle of Zea mays presents a closed, scattered arrangement characteristic of monocotyledonous plants. Each bundle is encased in a sclerenchymatous bundle sheath, enclosing both xylem and phloem elements. The absence of a vascular cambium precludes secondary growth, rendering the stem architecture fundamentally distinct from dicotyledonous counterparts.',
    data: [
      { label: 'Tissue Type', value: 'Vascular' },
      { label: 'Stain', value: 'Safranin / Fast Green' },
      { label: 'Section', value: 'Transverse' },
      { label: 'Fixative', value: 'FAA' },
    ],
    terms: [
      { term: 'Sclerenchyma', definition: 'Dead, thick-walled cells providing structural support; includes fibres and sclereids.' },
      { term: 'Phloem', definition: 'Vascular tissue responsible for translocation of photosynthates from source to sink organs.' },
      { term: 'Xylem', definition: 'Water-conducting vascular tissue composed of tracheids and vessel elements.' },
      { term: 'Bundle Sheath', definition: 'A layer of cells surrounding the vascular bundle, often involved in C4 photosynthesis.' },
    ],
  },
  {
    id: 'MC-002',
    name: 'Paramecium caudatum',
    latinName: 'Ciliophora — Oligohymenophorea',
    category: 'Protists',
    magnification: '400×',
    imgId: 'spec-paramecium-8c2e4b',
    titleId: 'spec-title-mc002',
    descId: 'spec-desc-mc002',
    description:
      'Paramecium caudatum is a slipper-shaped ciliate protozoan ubiquitous in freshwater environments. Its pellicle is adorned with thousands of cilia arranged in longitudinal rows, coordinating metachronal waves for locomotion. The organism possesses two nuclei — a macronucleus governing vegetative functions and a micronucleus mediating genetic exchange during conjugation.',
    data: [
      { label: 'Kingdom', value: 'Protista' },
      { label: 'Locomotion', value: 'Cilia' },
      { label: 'Habitat', value: 'Freshwater' },
      { label: 'Length', value: '180–300 µm' },
    ],
    terms: [
      { term: 'Pellicle', definition: 'A flexible but firm outer covering of the cell, composed of the plasma membrane and underlying alveoli.' },
      { term: 'Macronucleus', definition: 'The larger nucleus controlling metabolic and somatic functions of the cell.' },
      { term: 'Conjugation', definition: 'A form of sexual reproduction in ciliates involving temporary fusion and exchange of micronuclei.' },
      { term: 'Contractile Vacuole', definition: 'An organelle that regulates osmotic pressure by expelling excess water.' },
    ],
  },
  {
    id: 'MC-003',
    name: 'Human Erythrocyte',
    latinName: 'Homo sapiens — Peripheral Blood Smear',
    category: 'Human Cytology',
    magnification: '1000×',
    imgId: 'spec-erythrocyte-5d7b3f',
    titleId: 'spec-title-mc003',
    descId: 'spec-desc-mc003',
    description:
      'The mature human erythrocyte is a biconcave, anucleate disc approximately 6–8 µm in diameter. This unique morphology maximises the surface-area-to-volume ratio, facilitating efficient gas exchange. The cell is devoid of organelles, its cytoplasm densely packed with haemoglobin — the iron-containing metalloprotein responsible for oxygen transport throughout the circulatory system.',
    data: [
      { label: 'Diameter', value: '6–8 µm' },
      { label: 'Lifespan', value: '~120 days' },
      { label: 'Stain', value: 'Giemsa / Wright\'s' },
      { label: 'Count', value: '4.5–5.5 × 10⁶/µL' },
    ],
    terms: [
      { term: 'Biconcave', definition: 'A disc shape that is concave on both faces, increasing surface area relative to volume.' },
      { term: 'Haemoglobin', definition: 'An iron-containing protein in erythrocytes that binds and transports oxygen and carbon dioxide.' },
      { term: 'Anucleate', definition: 'Lacking a nucleus; mature mammalian red blood cells eject their nucleus during maturation.' },
      { term: 'Reticulocyte', definition: 'An immature red blood cell that still contains residual ribosomal RNA, visible as a reticular network.' },
    ],
  },
];
