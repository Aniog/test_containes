import { useState } from 'react';
import { motion } from 'framer-motion';
import { Filter } from 'lucide-react';
import SpecimenCard from '../components/SpecimenCard';

const categories = ['All', 'Plant Histology', 'Protists', 'Human Cytology'];

const specimens = [
  // Plant Histology
  {
    id: 'PH-001',
    name: 'Dicot Stem Cross-Section',
    latinName: 'Helianthus annuus',
    classification: 'Plant Histology',
    magnification: '100×',
    stain: 'Safranin & Fast Green',
    image: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=800&q=80&sat=-100',
    description: 'Transverse section revealing the vascular bundle arrangement characteristic of dicotyledonous stems. Xylem and phloem tissues are clearly delineated by differential staining.',
    terms: [
      { word: 'Vascular Bundle', definition: 'A strand of conducting tissue comprising xylem and phloem, responsible for water and nutrient transport.' },
      { word: 'Xylem', definition: 'Water-conducting tissue composed of tracheids and vessel elements with lignified secondary walls.' },
      { word: 'Phloem', definition: 'Food-conducting tissue comprising sieve tubes and companion cells for organic solute transport.' },
    ],
  },
  {
    id: 'PH-002',
    name: 'Leaf Epidermis & Stomata',
    latinName: 'Tradescantia zebrina',
    classification: 'Plant Histology',
    magnification: '400×',
    stain: 'Unstained, Brightfield',
    image: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=800&q=80&sat=-100',
    description: 'Abaxial leaf surface demonstrating guard cell morphology and stomatal aperture regulation. Subsidiary cells and epidermal pavement cells are clearly visible.',
    terms: [
      { word: 'Stomata', definition: 'Microscopic pores in the leaf epidermis flanked by guard cells, regulating gas exchange and transpiration.' },
      { word: 'Guard Cells', definition: 'Specialized epidermal cells that control stomatal opening through turgor pressure changes.' },
      { word: 'Cuticle', definition: 'Waxy, hydrophobic layer secreted by epidermal cells to reduce water loss.' },
    ],
  },
  {
    id: 'PH-003',
    name: 'Root Tip Meristem',
    latinName: 'Allium cepa',
    classification: 'Plant Histology',
    magnification: '400×',
    stain: 'Acetocarmine',
    image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?w=800&q=80&sat=-100',
    description: 'Longitudinal section of onion root tip showing active mitotic figures. Multiple stages of cell division are observable within the apical meristem zone.',
    terms: [
      { word: 'Apical Meristem', definition: 'Region of undifferentiated, actively dividing cells at root and shoot tips responsible for primary growth.' },
      { word: 'Mitosis', definition: 'Somatic cell division producing two genetically identical daughter cells through prophase, metaphase, anaphase, and telophase.' },
      { word: 'Metaphase Plate', definition: 'Equatorial plane where chromosomes align during metaphase of mitosis.' },
    ],
  },
  // Protists
  {
    id: 'PR-001',
    name: 'Paramecium',
    latinName: 'Paramecium caudatum',
    classification: 'Protists',
    magnification: '200×',
    stain: 'Methylene Blue',
    image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&q=80&sat=-100',
    description: 'Ciliated protozoan exhibiting characteristic slipper morphology. Macronucleus, micronucleus, and contractile vacuoles are identifiable under phase contrast illumination.',
    terms: [
      { word: 'Cilia', definition: 'Short, hair-like organelles projecting from the cell surface, used for locomotion and feeding currents.' },
      { word: 'Macronucleus', definition: 'Large, polyploid nucleus controlling metabolic functions in ciliates.' },
      { word: 'Contractile Vacuole', definition: 'Osmoregulatory organelle that expels excess water from the cell by rhythmic contraction.' },
    ],
  },
  {
    id: 'PR-002',
    name: 'Radiolarian Skeleton',
    latinName: 'Acantharia sp.',
    classification: 'Protists',
    magnification: '100×',
    stain: 'Unstained, Darkfield',
    image: 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?w=800&q=80&sat=-100',
    description: 'Siliceous endoskeleton demonstrating radial symmetry and intricate lattice architecture. Spicule arrangement follows Müller\'s Law of geometric regularity.',
    terms: [
      { word: 'Radial Symmetry', definition: 'Arrangement of body parts around a central axis, allowing equal division in multiple planes.' },
      { word: 'Siliceous', definition: 'Composed of silicon dioxide (SiO₂), forming the mineral skeleton of radiolarians and diatoms.' },
      { word: 'Spicule', definition: 'Needle-like structural element forming the skeletal framework of radiolarians and sponges.' },
    ],
  },
  {
    id: 'PR-003',
    name: 'Diatom Frustule',
    latinName: 'Coscinodiscus radiatus',
    classification: 'Protists',
    magnification: '400×',
    stain: 'Unstained, Phase Contrast',
    image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&q=80&sat=-100',
    description: 'Centric diatom exhibiting concentric striae and areolae patterns on the siliceous frustule. Valve morphology is diagnostic for species identification.',
    terms: [
      { word: 'Frustule', definition: 'The rigid, siliceous cell wall of a diatom, composed of two overlapping halves called valves.' },
      { word: 'Striae', definition: 'Fine parallel lines or grooves on the diatom valve surface, formed by rows of pores (areolae).' },
      { word: 'Areolae', definition: 'Pores or chambers in the diatom frustule that facilitate gas and nutrient exchange.' },
    ],
  },
  // Human Cytology
  {
    id: 'HC-001',
    name: 'Blood Smear',
    latinName: 'Homo sapiens',
    classification: 'Human Cytology',
    magnification: '1000×',
    stain: 'Wright-Giemsa',
    image: 'https://images.unsplash.com/photo-1576671081837-49000212a370?w=800&q=80&sat=-100',
    description: 'Peripheral blood film demonstrating erythrocyte morphology, leukocyte differential, and thrombocyte distribution. Biconcave disc morphology of erythrocytes is characteristic.',
    terms: [
      { word: 'Erythrocyte', definition: 'Anucleate, biconcave red blood cell containing hemoglobin for oxygen transport.' },
      { word: 'Leukocyte', definition: 'Nucleated white blood cell involved in immune defense; classified as granulocytes or agranulocytes.' },
      { word: 'Thrombocyte', definition: 'Small, anucleate cell fragment (platelet) essential for hemostasis and blood clotting.' },
    ],
  },
  {
    id: 'HC-002',
    name: 'Stratified Squamous Epithelium',
    latinName: 'Homo sapiens',
    classification: 'Human Cytology',
    magnification: '200×',
    stain: 'Haematoxylin & Eosin',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&q=80&sat=-100',
    description: 'Keratinized stratified squamous epithelium from skin section. Distinct strata from basal layer to cornified surface are clearly delineated.',
    terms: [
      { word: 'Stratified Epithelium', definition: 'Multi-layered epithelial tissue providing mechanical protection against abrasion.' },
      { word: 'Keratinocyte', definition: 'Principal cell of the epidermis, producing keratin protein for structural integrity.' },
      { word: 'Stratum Basale', definition: 'Deepest epidermal layer containing mitotically active stem cells anchored to the basement membrane.' },
    ],
  },
  {
    id: 'HC-003',
    name: 'Neuron — Motor Cell Body',
    latinName: 'Homo sapiens',
    classification: 'Human Cytology',
    magnification: '400×',
    stain: 'Cresyl Violet (Nissl)',
    image: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=800&q=80&sat=-100',
    description: 'Anterior horn motor neuron from spinal cord section. Nissl bodies (rough endoplasmic reticulum) are prominently stained, with axon hillock clearly visible.',
    terms: [
      { word: 'Nissl Bodies', definition: 'Granular masses of rough endoplasmic reticulum in neuronal cell bodies, sites of protein synthesis.' },
      { word: 'Axon Hillock', definition: 'Cone-shaped region of the neuron soma where the axon originates; site of action potential initiation.' },
      { word: 'Dendrite', definition: 'Branched cytoplasmic extensions of a neuron that receive synaptic input from other neurons.' },
    ],
  },
];

export default function Specimens() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? specimens
    : specimens.filter((s) => s.classification === activeCategory);

  return (
    <div className="bg-parchment min-h-screen pt-24">
      {/* ── Page Header ── */}
      <section className="py-16 px-6 border-b border-ink-faint/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.25em] text-ink-light mb-4">
              Module II · Systematic Classification
            </p>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <h1 className="font-serif text-5xl md:text-6xl font-bold text-ink-black leading-tight">
                  Specimen
                  <span className="italic font-normal block">Hub</span>
                </h1>
                <p className="font-sans text-base text-ink-mid mt-4 max-w-xl leading-relaxed">
                  A systematic catalogue of microscopic specimens across three primary
                  biological domains. Each entry includes taxonomic classification,
                  preparation methodology, and annotated terminology.
                </p>
              </div>
              <div className="flex items-center gap-2 text-ink-light">
                <Filter className="w-4 h-4" />
                <span className="font-mono text-xs uppercase tracking-widest">
                  {filtered.length} specimens
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Category Filter ── */}
      <section className="sticky top-20 z-30 py-4 px-6 bg-parchment/80 backdrop-blur-md
        border-b border-ink-faint/20">
        <div className="max-w-7xl mx-auto flex gap-2 overflow-x-auto pb-1">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`flex-shrink-0 px-5 py-2 rounded-full font-sans text-sm font-medium
                transition-all duration-300
                ${activeCategory === cat
                  ? 'bg-ink-black text-parchment'
                  : 'bg-white/50 text-ink-mid border border-ink-faint/40 hover:bg-white/80 hover:text-ink-black'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* ── Z-Pattern Grid ── */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto space-y-24">
          {/* Row 1: Large left + small right stack */}
          {filtered.length > 0 && (
            <div className="grid md:grid-cols-5 gap-6">
              <div className="md:col-span-3">
                {filtered[0] && <SpecimenCard specimen={filtered[0]} />}
              </div>
              <div className="md:col-span-2 flex flex-col gap-6">
                {filtered[1] && <SpecimenCard specimen={filtered[1]} />}
              </div>
            </div>
          )}

          {/* Row 2: Small left + large right (Z-pattern reversal) */}
          {filtered.length > 2 && (
            <div className="grid md:grid-cols-5 gap-6">
              <div className="md:col-span-2 flex flex-col gap-6">
                {filtered[2] && <SpecimenCard specimen={filtered[2]} />}
              </div>
              <div className="md:col-span-3">
                {filtered[3] && <SpecimenCard specimen={filtered[3]} />}
              </div>
            </div>
          )}

          {/* Row 3: Equal three-column */}
          {filtered.length > 4 && (
            <div className="grid md:grid-cols-3 gap-6">
              {filtered.slice(4, 7).map((s) => (
                <SpecimenCard key={s.id} specimen={s} />
              ))}
            </div>
          )}

          {/* Row 4: Large left + small right (Z-pattern) */}
          {filtered.length > 7 && (
            <div className="grid md:grid-cols-5 gap-6">
              <div className="md:col-span-3">
                {filtered[7] && <SpecimenCard specimen={filtered[7]} />}
              </div>
              <div className="md:col-span-2">
                {filtered[8] && <SpecimenCard specimen={filtered[8]} />}
              </div>
            </div>
          )}

          {/* Remaining items */}
          {filtered.length > 9 && (
            <div className="grid md:grid-cols-3 gap-6">
              {filtered.slice(9).map((s) => (
                <SpecimenCard key={s.id} specimen={s} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── Methodology Note ── */}
      <section className="py-16 px-6 bg-ink-black">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.25em] text-ink-light mb-4">
              Preparation Standards
            </p>
            <h2 className="font-serif text-3xl font-bold text-parchment mb-5">
              Laboratory Methodology
            </h2>
            <p className="font-sans text-sm text-ink-light leading-relaxed max-w-2xl mx-auto">
              All specimens are prepared according to standard histological protocols.
              Fixation in 10% neutral buffered formalin, paraffin embedding, and
              sectioning at 5–8 μm thickness. Staining procedures follow established
              protocols from the American Society for Clinical Pathology.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
