// Curated specimen catalogue for the MicroCosmos platform.
// All references describe real microscopy subjects — kept timeless and academic.

export const specimenGroups = [
  {
    id: "plant",
    plate: "Plate I",
    title: "Plant Histology",
    latin: "Phytologia Microscopica",
    summary:
      "Cross-sections through the vascular and dermal tissues of vascular plants, prepared with safranin and fast-green double staining.",
    body:
      "From the rigid pillars of xylem to the luminous architecture of stomata, plant histology reveals a quiet, geometric order. Each section captured here was hand-cut at twelve micrometres and observed under brightfield illumination.",
    items: [
      { id: "p1", name: "Pinus Stem", magnification: "40×", note: "Resin canals visible within secondary xylem." },
      { id: "p2", name: "Helianthus Root", magnification: "100×", note: "Endodermis with prominent Casparian strip." },
      { id: "p3", name: "Zea Mays Leaf", magnification: "200×", note: "C4 Kranz anatomy surrounding bundle sheaths." },
      { id: "p4", name: "Lilium Anther", magnification: "400×", note: "Tetrads of microspores in pre-meiotic phase." },
    ],
  },
  {
    id: "protist",
    plate: "Plate II",
    title: "Protists & Diatoms",
    latin: "Microorganismi Aquatici",
    summary:
      "Single-celled architects of the plankton — silica frustules, calcareous tests and the exquisite radial symmetry of the radiolarians.",
    body:
      "These organisms are the cathedral builders of the microscopic seas. Their mineral skeletons, drifting through the open ocean for millions of years, form the chalk and chert of entire continents.",
    items: [
      { id: "r1", name: "Radiolaria sp.", magnification: "600×", note: "Spheroidal silica skeleton with axial spines." },
      { id: "r2", name: "Diatom Pleurosigma", magnification: "1000×", note: "Sigmoid frustule with hexagonal pore array." },
      { id: "r3", name: "Foraminifera", magnification: "100×", note: "Calcareous test, planispiral chambering." },
      { id: "r4", name: "Paramecium caudatum", magnification: "400×", note: "Ciliated unicell with contractile vacuole." },
    ],
  },
  {
    id: "human",
    plate: "Plate III",
    title: "Human Cytology",
    latin: "Cytologia Humana",
    summary:
      "Tissues drawn from the body and prepared with haematoxylin and eosin — rendered here in the precise grammar of grayscale tonality.",
    body:
      "The human body, observed at four hundred diameters, becomes a landscape of nuclei and cytoplasm — a quiet topography of organisation that underlies every breath, every thought.",
    items: [
      { id: "h1", name: "Erythrocytes", magnification: "1000×", note: "Biconcave discs, peripheral blood smear." },
      { id: "h2", name: "Cardiac Muscle", magnification: "400×", note: "Intercalated discs and centrally placed nuclei." },
      { id: "h3", name: "Neuron, Pyramidal", magnification: "200×", note: "Apical dendrite ascending from cortex layer V." },
      { id: "h4", name: "Hepatocyte", magnification: "400×", note: "Polygonal cells radiating from central vein." },
    ],
  },
];

export const galleryPlates = [
  { id: "g01", title: "Radiolaria, Polar View",          mag: "600×",  collector: "Dr. E. Halden",   year: "1962", aspect: "1x1" },
  { id: "g02", title: "Diatom Frustule",                  mag: "1000×", collector: "Prof. S. Nakamura", year: "1971", aspect: "3x4" },
  { id: "g03", title: "Stomata, Tradescantia",           mag: "400×",  collector: "M. Beaumont",     year: "1958", aspect: "4x3" },
  { id: "g04", title: "Cardiac Muscle Fibre",             mag: "400×",  collector: "Dr. L. Ostrov",   year: "1967", aspect: "3x2" },
  { id: "g05", title: "Pinus Stem, Cross Section",       mag: "40×",   collector: "F. Whitcombe",    year: "1949", aspect: "1x1" },
  { id: "g06", title: "Foraminifera, Calcareous Test",   mag: "100×",  collector: "Dr. E. Halden",   year: "1965", aspect: "4x3" },
  { id: "g07", title: "Paramecium with Cilia",            mag: "400×",  collector: "K. Hoffmann",     year: "1972", aspect: "3x4" },
  { id: "g08", title: "Pollen Grain, Lily",               mag: "1000×", collector: "Prof. S. Nakamura", year: "1969", aspect: "1x1" },
  { id: "g09", title: "Neuron, Pyramidal Cell",           mag: "200×",  collector: "Dr. L. Ostrov",   year: "1968", aspect: "3x2" },
  { id: "g10", title: "Human Erythrocytes",               mag: "1000×", collector: "M. Beaumont",     year: "1955", aspect: "4x3" },
  { id: "g11", title: "Spirogyra Filament",                mag: "200×",  collector: "F. Whitcombe",    year: "1953", aspect: "3x4" },
  { id: "g12", title: "Hydra, Whole Mount",                mag: "100×",  collector: "K. Hoffmann",     year: "1970", aspect: "3x2" },
];

export const glossary = [
  { term: "Frustule", def: "The intricately patterned silica cell wall of a diatom — composed of two valves fitting together like a pillbox." },
  { term: "Endodermis", def: "A single layer of cells in the plant root that regulates the radial passage of water and solutes." },
  { term: "Casparian Strip", def: "A band of suberin within endodermal walls that forces inward flow through cell membranes." },
  { term: "Kranz Anatomy", def: "The wreath-like arrangement of bundle sheath cells diagnostic of C4 photosynthesis." },
  { term: "Radiolarian", def: "A planktonic protozoan with an elaborate, often spherical silica skeleton." },
  { term: "Hepatocyte", def: "The principal parenchymal cell of the liver, responsible for metabolism and detoxification." },
];
