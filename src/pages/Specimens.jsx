import { useState } from 'react';
import { motion } from 'framer-motion';
import { Filter, Search } from 'lucide-react';
import SpecimenCard from '@/components/SpecimenCard';

const SPECIMENS = [
  {
    id: 'sp001',
    specimenId: 'SPEC-001',
    name: 'Quercus Leaf Cross-Section',
    latinName: 'Quercus robur',
    domain: 'Plant Histology',
    magnification: '100×',
    stain: 'Safranin / Fast Green',
    preparation: 'Paraffin Section',
    description:
      'A transverse section through the mesophyll of an oak leaf, revealing the palisade and spongy parenchyma layers with exceptional clarity. Vascular bundles are prominently stained.',
    terms: [
      { label: 'Palisade Mesophyll', definition: 'Tightly packed columnar cells beneath the upper epidermis, primary site of photosynthesis due to high chloroplast density.' },
      { label: 'Stomata', definition: 'Microscopic pores in the leaf epidermis flanked by guard cells, regulating gas exchange and transpiration.' },
      { label: 'Vascular Bundle', definition: 'Strand of xylem and phloem tissue forming the leaf vein, responsible for water and nutrient transport.' },
    ],
  },
  {
    id: 'sp002',
    specimenId: 'SPEC-002',
    name: 'Paramecium caudatum',
    latinName: 'Paramecium caudatum',
    domain: 'Protists',
    magnification: '400×',
    stain: 'Methylene Blue',
    preparation: 'Wet Mount',
    description:
      'A ciliated protozoan of the phylum Ciliophora. This specimen demonstrates the characteristic slipper-shaped morphology with visible macronucleus, micronucleus, and oral groove.',
    terms: [
      { label: 'Macronucleus', definition: 'The large, polyploid nucleus controlling vegetative functions including metabolism and growth in ciliates.' },
      { label: 'Cilia', definition: 'Hair-like organelles covering the cell surface, used for locomotion and directing food particles toward the oral groove.' },
      { label: 'Contractile Vacuole', definition: 'Osmoregulatory organelle that expels excess water from the cell to maintain osmotic balance.' },
    ],
  },
  {
    id: 'sp003',
    specimenId: 'SPEC-003',
    name: 'Human Blood Smear',
    latinName: 'Homo sapiens — Peripheral Blood',
    domain: 'Human Cytology',
    magnification: '400×',
    stain: 'Giemsa / Wright\'s',
    preparation: 'Thin Smear',
    description:
      'A peripheral blood smear exhibiting erythrocytes, leukocytes, and thrombocytes. Differential cell counting reveals a normal distribution of neutrophils, lymphocytes, and monocytes.',
    terms: [
      { label: 'Erythrocyte', definition: 'Biconcave, anucleate red blood cell responsible for oxygen transport via haemoglobin. Diameter approximately 6–8 μm.' },
      { label: 'Neutrophil', definition: 'The most abundant leukocyte, characterised by a multi-lobed nucleus and granular cytoplasm. Primary phagocytic cell of innate immunity.' },
      { label: 'Thrombocyte', definition: 'Small, anucleate cell fragment derived from megakaryocytes, essential for haemostasis and clot formation.' },
    ],
  },
  {
    id: 'sp004',
    specimenId: 'SPEC-004',
    name: 'Allium Root Tip',
    latinName: 'Allium cepa',
    domain: 'Plant Histology',
    magnification: '200×',
    stain: 'Acetocarmine',
    preparation: 'Squash Preparation',
    description:
      'The root tip of the common onion, a classical preparation for observing mitotic cell division. Cells in various stages of mitosis — prophase, metaphase, anaphase, and telophase — are clearly visible.',
    terms: [
      { label: 'Apical Meristem', definition: 'Region of actively dividing undifferentiated cells at the root tip, responsible for primary growth and elongation.' },
      { label: 'Metaphase Plate', definition: 'The equatorial plane along which chromosomes align during metaphase of mitosis, prior to chromatid separation.' },
      { label: 'Root Cap', definition: 'Protective thimble-shaped structure covering the apical meristem, secreting mucilage to reduce friction during soil penetration.' },
    ],
  },
  {
    id: 'sp005',
    specimenId: 'SPEC-005',
    name: 'Euglena viridis',
    latinName: 'Euglena viridis',
    domain: 'Protists',
    magnification: '400×',
    stain: 'Unstained (Live)',
    preparation: 'Wet Mount',
    description:
      'A photosynthetic flagellate exhibiting both plant-like and animal-like characteristics. The prominent red eyespot (stigma) and single emergent flagellum are clearly resolved at this magnification.',
    terms: [
      { label: 'Stigma (Eyespot)', definition: 'Photoreceptive organelle containing carotenoid pigments, enabling phototaxis — movement toward or away from light sources.' },
      { label: 'Pellicle', definition: 'Flexible proteinaceous outer covering of the cell, composed of interlocking protein strips allowing euglenoid movement.' },
      { label: 'Paramylon', definition: 'A β-1,3-glucan storage polysaccharide unique to euglenoids, serving as the primary carbohydrate energy reserve.' },
    ],
  },
  {
    id: 'sp006',
    specimenId: 'SPEC-006',
    name: 'Cardiac Muscle Tissue',
    latinName: 'Homo sapiens — Myocardium',
    domain: 'Human Cytology',
    magnification: '200×',
    stain: 'Haematoxylin & Eosin',
    preparation: 'Paraffin Section',
    description:
      'A longitudinal section through ventricular myocardium, demonstrating the characteristic branching cardiomyocytes with centrally placed nuclei and intercalated discs at cell junctions.',
    terms: [
      { label: 'Intercalated Disc', definition: 'Specialised junctions between cardiomyocytes containing gap junctions and desmosomes, enabling electrical coupling and mechanical cohesion.' },
      { label: 'Cardiomyocyte', definition: 'Striated, involuntary muscle cell of the heart, containing abundant mitochondria to sustain continuous aerobic metabolism.' },
      { label: 'Sarcomere', definition: 'The fundamental contractile unit of striated muscle, bounded by Z-lines and containing interdigitating actin and myosin filaments.' },
    ],
  },
];

const DOMAINS = ['All', 'Plant Histology', 'Protists', 'Human Cytology'];

export default function Specimens() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = SPECIMENS.filter((s) => {
    const matchesDomain = activeFilter === 'All' || s.domain === activeFilter;
    const matchesSearch =
      !searchQuery ||
      s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.latinName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.domain.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesDomain && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-parchment font-inter pt-24">
      {/* ── Page Header ── */}
      <section className="py-16 px-6 border-b border-ash">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-inter text-xs text-graphite tracking-widest uppercase mb-4">
              Biological Classification Archive
            </p>
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
              <div>
                <h1 className="font-playfair text-5xl md:text-6xl font-bold text-ink leading-tight mb-4">
                  Specimen<br />
                  <em className="font-normal">Hub</em>
                </h1>
                <p className="font-inter text-base text-graphite max-w-xl leading-relaxed">
                  A curated taxonomy of microscopic specimens spanning plant histology,
                  unicellular protists, and human cytological preparations. Each entry
                  includes technical metadata and annotated structural terminology.
                </p>
              </div>

              {/* Search */}
              <div className="relative w-full lg:w-72">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-graphite" />
                <input
                  type="search"
                  placeholder="Search specimens…"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-2xl bg-white/50 backdrop-blur-sm border border-ash text-ink font-inter text-sm placeholder:text-silver focus:outline-none focus:border-graphite/50 focus:bg-white/70 transition-all"
                  aria-label="Search specimens"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Filter Bar ── */}
      <section className="sticky top-20 z-30 py-4 px-6 bg-parchment/80 backdrop-blur-md border-b border-ash/50">
        <div className="max-w-6xl mx-auto flex items-center gap-3 overflow-x-auto pb-1">
          <Filter className="w-4 h-4 text-graphite flex-shrink-0" />
          <span className="font-inter text-xs text-graphite tracking-widest uppercase flex-shrink-0 mr-2">
            Domain:
          </span>
          {DOMAINS.map((domain) => (
            <button
              key={domain}
              onClick={() => setActiveFilter(domain)}
              className={`flex-shrink-0 px-4 py-2 rounded-xl font-inter text-sm font-medium transition-all ${
                activeFilter === domain
                  ? 'bg-ink text-parchment shadow-sm'
                  : 'bg-white/50 text-charcoal border border-ash hover:bg-white/70 hover:text-ink'
              }`}
            >
              {domain}
            </button>
          ))}
          <span className="ml-auto flex-shrink-0 font-inter text-xs text-silver">
            {filtered.length} specimen{filtered.length !== 1 ? 's' : ''}
          </span>
        </div>
      </section>

      {/* ── Specimen Grid (Z-pattern asymmetric) ── */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          {filtered.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-24"
            >
              <p className="font-playfair text-2xl italic text-graphite mb-3">
                No specimens found
              </p>
              <p className="font-inter text-sm text-silver">
                Adjust your search or filter criteria to locate specimens.
              </p>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Z-pattern: first row has 2 cols, second has 3, alternating */}
              {filtered.map((specimen, i) => (
                <div
                  key={specimen.id}
                  className={
                    // Every 5th item (0-indexed: 0, 5, 10…) spans 2 cols on lg
                    i % 5 === 0
                      ? 'lg:col-span-2'
                      : i % 5 === 3
                      ? 'lg:col-span-2'
                      : ''
                  }
                >
                  <SpecimenCard specimen={specimen} index={i} />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── Methodology Note ── */}
      <section className="py-16 px-6 bg-bone/50 border-t border-ash">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 rounded-3xl bg-white/40 backdrop-blur-sm border border-white/50 shadow-glass"
          >
            <h3 className="font-playfair text-2xl font-semibold text-ink mb-4">
              Preparation Methodology
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { step: '01', title: 'Fixation', desc: 'Specimens are fixed in 10% neutral buffered formalin or Bouin\'s solution to preserve cellular architecture.' },
                { step: '02', title: 'Sectioning', desc: 'Paraffin-embedded tissues are sectioned at 5–8 μm using a rotary microtome. Cryostat sections at 10 μm for frozen material.' },
                { step: '03', title: 'Staining', desc: 'Standard H&E, Safranin/Fast Green, or domain-specific staining protocols applied per specimen requirements.' },
              ].map((item) => (
                <div key={item.step}>
                  <div className="font-inter text-xs text-silver tracking-widest uppercase mb-2">
                    Step {item.step}
                  </div>
                  <h4 className="font-playfair text-lg font-semibold text-ink mb-2">
                    {item.title}
                  </h4>
                  <p className="font-inter text-sm text-graphite leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
