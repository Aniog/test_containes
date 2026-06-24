// Curated catalogue of micrographs. Image URLs reference Unsplash B&W photography
// suitable for grayscale microscopy aesthetic. The `micrograph` CSS class enforces
// strict B&W rendering, so any color is removed at the presentation layer.

export const specimens = [
  {
    id: 'PH-014',
    plate: 'Plate I',
    kingdom: 'Plantae',
    name: 'Plant Histology',
    binomial: 'Quercus robur — leaf transverse section',
    magnification: '200×',
    summary:
      'Cross-section through the lamina of an English oak reveals palisade and spongy mesophyll, with stomatal apparatus on the abaxial epidermis. Note the lignified xylem vessels in the central vascular bundle.',
    notes:
      'Sample fixed in FAA, embedded in paraffin, sectioned at 10 µm and stained with Toluidine Blue.',
    img: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=1600&q=80',
    accent: 'Foliar parenchyma',
  },
  {
    id: 'PR-027',
    plate: 'Plate II',
    kingdom: 'Protista',
    name: 'Protists',
    binomial: 'Paramecium caudatum — wet mount',
    magnification: '400×',
    summary:
      'A motile ciliate displaying its slipper-shaped pellicle, contractile vacuoles and characteristic oblique cytostome. Cilia beat in metachronal waves, producing the helical swim path observed in vivo.',
    notes:
      'Living specimen drawn from a hay infusion culture. Phase contrast, illumination 6V tungsten with green filter.',
    img: 'https://images.unsplash.com/photo-1530210124550-912dc1381cb8?auto=format&fit=crop&w=1600&q=80',
    accent: 'Single-celled eukaryote',
  },
  {
    id: 'HC-038',
    plate: 'Plate III',
    kingdom: 'Animalia',
    name: 'Human Cytology',
    binomial: 'Homo sapiens — buccal epithelial smear',
    magnification: '1000×',
    summary:
      'Squamous epithelial cells exfoliated from the cheek lining. Each cell exhibits a centrally placed, basophilic nucleus surrounded by abundant cytoplasm, with the polygonal outline characteristic of stratified epithelium.',
    notes:
      'Fixative: 95% ethanol. Stain: methylene blue, 0.5% aqueous, 60 seconds. Oil immersion objective.',
    img: 'https://images.unsplash.com/photo-1559757175-08d6f4c1a18a?auto=format&fit=crop&w=1600&q=80',
    accent: 'Squamous epithelium',
  },
]

export const glossary = {
  mesophyll: 'The internal photosynthetic tissue of a leaf, divided into palisade and spongy layers.',
  stomata:
    'Microscopic apertures, typically on the leaf underside, regulating gaseous exchange via a pair of guard cells.',
  pellicle:
    'The flexible proteinaceous envelope outside the plasma membrane of certain protists, supporting cell shape.',
  cilia:
    'Hair-like microtubular projections that beat rhythmically to produce locomotion or move surrounding fluid.',
  cytostome: 'A specialised oral region in some protists through which food particles are ingested.',
  basophilic:
    'A staining affinity for basic dyes such as methylene blue, indicating acidic cellular components like nucleic acids.',
  squamous: 'Flattened, scale-like cells forming the outermost layer of certain epithelia.',
  fixative: 'A chemical solution used to preserve cellular morphology by halting decomposition and stabilising proteins.',
}

// High-density gallery — distinct B&W "digital slides".
export const gallery = [
  {
    id: 'SL-001',
    title: 'Diatom Frustule',
    species: 'Triceratium favus',
    magnification: '600×',
    technique: 'Brightfield',
    notes:
      'Silica frustule of a centric diatom. Honeycomb areolae and elevated horns visible. Mounted in Naphrax for high refractive contrast.',
    collector: 'Dr. E. Hartmann',
    date: '14 March, 1962',
    img: 'https://images.unsplash.com/photo-1530021232320-687d8e3dba54?auto=format&fit=crop&w=1400&q=80',
    span: 'tall',
  },
  {
    id: 'SL-002',
    title: 'Radiolarian Skeleton',
    species: 'Heliodiscus asteriscus',
    magnification: '400×',
    technique: 'Darkfield',
    notes:
      'Star-shaped siliceous test recovered from deep ocean sediment, Pacific dredge sample 17-B.',
    collector: 'M. Okabe',
    date: '02 July, 1958',
    img: 'https://images.unsplash.com/photo-1554475901-4538ddfbccc2?auto=format&fit=crop&w=1400&q=80',
    span: 'wide',
  },
  {
    id: 'SL-003',
    title: 'Onion Epidermis',
    species: 'Allium cepa',
    magnification: '100×',
    technique: 'Iodine stain',
    notes:
      'Single layer of rectangular cells, prominent nuclei, plasmolysed in 5% NaCl for osmotic study.',
    collector: 'Student Lab 4',
    date: '21 October, 1971',
    img: 'https://images.unsplash.com/photo-1518707399486-6d702f84bf66?auto=format&fit=crop&w=1400&q=80',
    span: 'square',
  },
  {
    id: 'SL-004',
    title: 'Pollen Grain',
    species: 'Lilium auratum',
    magnification: '1000×',
    technique: 'SEM monochrome',
    notes:
      'Reticulate exine pattern. Tricolpate aperture system; surface ornamentation distinctly mural.',
    collector: 'Dr. P. Nilsson',
    date: '08 May, 1989',
    img: 'https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?auto=format&fit=crop&w=1400&q=80',
    span: 'tall',
  },
  {
    id: 'SL-005',
    title: 'Neuron Network',
    species: 'Mus musculus, cortex',
    magnification: '630×',
    technique: 'Golgi-Cox stain',
    notes:
      'Pyramidal neuron with apical dendritic arbour. Note dendritic spines along secondary branches.',
    collector: 'Dr. R. Cajal Lab',
    date: '17 February, 1994',
    img: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1400&q=80',
    span: 'wide',
  },
  {
    id: 'SL-006',
    title: 'Volvox Colony',
    species: 'Volvox aureus',
    magnification: '200×',
    technique: 'Brightfield',
    notes:
      'Spherical colony of biflagellated cells embedded in a gelatinous matrix; daughter colonies visible internally.',
    collector: 'Pond Survey IV',
    date: '30 June, 1969',
    img: 'https://images.unsplash.com/photo-1517999144091-3d9dca6d1e43?auto=format&fit=crop&w=1400&q=80',
    span: 'square',
  },
  {
    id: 'SL-007',
    title: 'Spirogyra Filament',
    species: 'Spirogyra crassa',
    magnification: '400×',
    technique: 'Brightfield',
    notes:
      'Helical chloroplasts spiralling within elongate cylindrical cells; pyrenoids appear as dense beads.',
    collector: 'Field Site 12',
    date: '11 August, 1975',
    img: 'https://images.unsplash.com/photo-1543362906-acfc16c67564?auto=format&fit=crop&w=1400&q=80',
    span: 'tall',
  },
  {
    id: 'SL-008',
    title: 'Ciliated Epithelium',
    species: 'Trachea, mammalian',
    magnification: '800×',
    technique: 'H&E (monochrome)',
    notes:
      'Pseudostratified columnar epithelium with apical cilia; goblet cells interspersed throughout.',
    collector: 'Histology Dept.',
    date: '04 December, 1981',
    img: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=1400&q=80',
    span: 'square',
  },
  {
    id: 'SL-009',
    title: 'Fern Sorus',
    species: 'Polypodium vulgare',
    magnification: '60×',
    technique: 'Stereomicroscopy',
    notes:
      'Cluster of sporangia on the abaxial frond surface. Annulus mechanism visible on dehiscence-ready capsules.',
    collector: 'Botanical Garden',
    date: '22 September, 1966',
    img: 'https://images.unsplash.com/photo-1502691876148-a84978e59af8?auto=format&fit=crop&w=1400&q=80',
    span: 'wide',
  },
  {
    id: 'SL-010',
    title: 'Yeast Budding',
    species: 'Saccharomyces cerevisiae',
    magnification: '1000×',
    technique: 'Phase contrast',
    notes:
      'Asexual reproduction by budding; mother and daughter cells joined at narrow neck. Living preparation.',
    collector: 'Fermentation Lab',
    date: '15 January, 2003',
    img: 'https://images.unsplash.com/photo-1576086476234-7d18d2bdf941?auto=format&fit=crop&w=1400&q=80',
    span: 'tall',
  },
  {
    id: 'SL-011',
    title: 'Crystals of Quinine',
    species: 'Quinine sulfate',
    magnification: '40×',
    technique: 'Polarised light',
    notes:
      'Acicular crystal habit. Photographed without colour filters; birefringence renders edges luminous.',
    collector: 'Pharmacognosy',
    date: '07 April, 1957',
    img: 'https://images.unsplash.com/photo-1607706189992-eae578626c86?auto=format&fit=crop&w=1400&q=80',
    span: 'square',
  },
  {
    id: 'SL-012',
    title: 'Insect Wing',
    species: 'Drosophila melanogaster',
    magnification: '120×',
    technique: 'Brightfield',
    notes:
      'Wing venation pattern with sensory bristles along the costal margin. Specimen cleared in xylene.',
    collector: 'Genetics Lab B',
    date: '29 May, 1998',
    img: 'https://images.unsplash.com/photo-1535930891776-0c2dfb7fda1a?auto=format&fit=crop&w=1400&q=80',
    span: 'wide',
  },
]
