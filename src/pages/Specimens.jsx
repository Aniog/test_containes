import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import SpecimenCard from '@/components/SpecimenCard';
import ScientificTooltip from '@/components/ScientificTooltip';

const categories = ['All', 'Plant Histology', 'Protists', 'Human Cytology'];

const specimens = [
  {
    id: 'MC-0012',
    imgId: 'spec-img-mc012',
    titleId: 'spec-title-mc012',
    descId: 'spec-desc-mc012',
    category: 'Plant Histology',
    commonName: 'Dicot Stem Cross-Section',
    scientificName: 'Helianthus annuus',
    magnification: '100×',
    description:
      'A transverse section through the stem of the common sunflower reveals the characteristic vascular bundle arrangement of dicotyledonous plants. The distinct epidermis, cortex, and pith regions are clearly delineated following haematoxylin-eosin staining.',
    specs: [
      { label: 'Stain Protocol', value: 'Haematoxylin-Eosin' },
      { label: 'Section Thickness', value: '8 μm' },
      { label: 'Preparation', value: 'Paraffin Embedded' },
      { label: 'Fixative', value: '10% Neutral Formalin' },
    ],
    terminology: [
      { term: 'Vascular Bundle', definition: 'A strand of conducting tissue containing xylem and phloem, responsible for water and nutrient transport.' },
      { term: 'Epidermis', definition: 'The outermost layer of cells forming a protective covering over the plant organ.' },
      { term: 'Collenchyma', definition: 'A type of simple plant tissue providing flexible structural support.' },
      { term: 'Pith', definition: 'The central region of a dicot stem composed of parenchyma cells for storage.' },
    ],
  },
  {
    id: 'MC-0031',
    imgId: 'spec-img-mc031',
    titleId: 'spec-title-mc031',
    descId: 'spec-desc-mc031',
    category: 'Protists',
    commonName: 'Paramecium',
    scientificName: 'Paramecium caudatum',
    magnification: '400×',
    description:
      'One of the most studied ciliate protozoa, Paramecium caudatum exhibits a characteristic slipper-shaped morphology. The oral groove, macronucleus, and contractile vacuoles are visible in well-prepared wet-mount preparations under phase-contrast illumination.',
    specs: [
      { label: 'Preparation', value: 'Wet Mount' },
      { label: 'Illumination', value: 'Phase Contrast' },
      { label: 'Habitat', value: 'Freshwater Pond' },
      { label: 'Classification', value: 'Ciliophora' },
    ],
    terminology: [
      { term: 'Cilia', definition: 'Hair-like organelles used for locomotion and feeding, covering the cell surface.' },
      { term: 'Macronucleus', definition: 'The larger of two nuclei in ciliates, controlling metabolic functions.' },
      { term: 'Contractile Vacuole', definition: 'An organelle that regulates osmotic pressure by expelling excess water.' },
      { term: 'Oral Groove', definition: 'A channel leading to the cytostome (cell mouth) for food particle ingestion.' },
    ],
  },
  {
    id: 'MC-0058',
    imgId: 'spec-img-mc058',
    titleId: 'spec-title-mc058',
    descId: 'spec-desc-mc058',
    category: 'Human Cytology',
    commonName: 'Human Blood Smear',
    scientificName: 'Homo sapiens — Peripheral Blood',
    magnification: '1000×',
    description:
      'A Giemsa-stained peripheral blood smear reveals the full complement of formed elements: biconcave erythrocytes, polymorphonuclear neutrophils, lymphocytes, and thrombocytes. This preparation is the gold standard for haematological assessment.',
    specs: [
      { label: 'Stain Protocol', value: 'Giemsa / Wright\'s' },
      { label: 'Immersion', value: 'Oil Immersion' },
      { label: 'Objective', value: '100× Oil' },
      { label: 'Source', value: 'Peripheral Venous Blood' },
    ],
    terminology: [
      { term: 'Erythrocyte', definition: 'Red blood cell; a biconcave disc lacking a nucleus, responsible for oxygen transport via haemoglobin.' },
      { term: 'Neutrophil', definition: 'The most abundant white blood cell; a phagocyte with a multi-lobed nucleus.' },
      { term: 'Thrombocyte', definition: 'Platelet; a small anucleate cell fragment essential for blood coagulation.' },
      { term: 'Lymphocyte', definition: 'A mononuclear white blood cell central to adaptive immune responses.' },
    ],
  },
  {
    id: 'MC-0074',
    imgId: 'spec-img-mc074',
    titleId: 'spec-title-mc074',
    descId: 'spec-desc-mc074',
    category: 'Plant Histology',
    commonName: 'Leaf Epidermis & Stomata',
    scientificName: 'Tradescantia zebrina',
    magnification: '200×',
    description:
      'The abaxial epidermis of Tradescantia zebrina provides an exceptional view of stomatal complexes. Guard cells flanking each stoma are clearly visible, along with the subsidiary cells and the characteristic paracytic arrangement of this monocot species.',
    specs: [
      { label: 'Preparation', value: 'Epidermal Peel' },
      { label: 'Stain', value: 'Safranin-O' },
      { label: 'Surface', value: 'Abaxial (Lower)' },
      { label: 'Stomatal Type', value: 'Paracytic' },
    ],
    terminology: [
      { term: 'Stoma', definition: 'A microscopic pore in the leaf epidermis flanked by guard cells, regulating gas exchange.' },
      { term: 'Guard Cell', definition: 'Specialised epidermal cells that control the opening and closing of stomata.' },
      { term: 'Cuticle', definition: 'A waxy layer secreted by epidermal cells that reduces water loss.' },
      { term: 'Trichome', definition: 'An epidermal hair or outgrowth that may serve in defence or secretion.' },
    ],
  },
  {
    id: 'MC-0089',
    imgId: 'spec-img-mc089',
    titleId: 'spec-title-mc089',
    descId: 'spec-desc-mc089',
    category: 'Protists',
    commonName: 'Diatom Frustule',
    scientificName: 'Coscinodiscus radiatus',
    magnification: '400×',
    description:
      'The siliceous frustule of Coscinodiscus radiatus displays the radial symmetry and intricate areolae pattern characteristic of centric diatoms. Polarised light microscopy reveals the birefringent properties of the amorphous silica cell wall.',
    specs: [
      { label: 'Illumination', value: 'Polarised Light' },
      { label: 'Habitat', value: 'Marine Planktonic' },
      { label: 'Wall Material', value: 'Amorphous SiO₂' },
      { label: 'Symmetry', value: 'Radial (Centric)' },
    ],
    terminology: [
      { term: 'Frustule', definition: 'The rigid silica cell wall of a diatom, composed of two overlapping halves called valves.' },
      { term: 'Areolae', definition: 'Regular perforations in the diatom frustule that allow exchange of materials with the environment.' },
      { term: 'Raphe', definition: 'A longitudinal slit in the valve of pennate diatoms, associated with motility.' },
      { term: 'Birefringence', definition: 'The optical property of a material having a refractive index that depends on the polarisation of light.' },
    ],
  },
  {
    id: 'MC-0103',
    imgId: 'spec-img-mc103',
    titleId: 'spec-title-mc103',
    descId: 'spec-desc-mc103',
    category: 'Human Cytology',
    commonName: 'Stratified Squamous Epithelium',
    scientificName: 'Homo sapiens — Oesophageal Mucosa',
    magnification: '200×',
    description:
      'A longitudinal section through the oesophageal wall demonstrates the non-keratinised stratified squamous epithelium characteristic of this organ. The distinct basal, spinous, and superficial layers are clearly delineated following Masson\'s trichrome staining.',
    specs: [
      { label: 'Stain Protocol', value: 'Masson\'s Trichrome' },
      { label: 'Section Thickness', value: '5 μm' },
      { label: 'Tissue Source', value: 'Oesophageal Biopsy' },
      { label: 'Fixative', value: 'Bouin\'s Solution' },
    ],
    terminology: [
      { term: 'Stratified Epithelium', definition: 'Epithelium composed of multiple cell layers, providing protection against abrasion.' },
      { term: 'Basal Lamina', definition: 'A thin extracellular matrix layer separating epithelium from underlying connective tissue.' },
      { term: 'Desmosome', definition: 'A cell junction that provides strong adhesion between adjacent epithelial cells.' },
      { term: 'Keratinocyte', definition: 'The predominant cell type of the epidermis, producing the structural protein keratin.' },
    ],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: 'easeOut' },
  }),
};

export default function Specimens() {
  const [activeCategory, setActiveCategory] = useState('All');
  const containerRef = useRef(null);

  const filtered = activeCategory === 'All'
    ? specimens
    : specimens.filter(s => s.category === activeCategory);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [activeCategory]);

  return (
    <div ref={containerRef} className="bg-parchment min-h-screen">
      {/* Page Header */}
      <section className="pt-32 pb-16 px-6 md:px-12 border-b border-fog/40">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            <p className="section-label mb-4">Specimen Collection · {specimens.length} Entries</p>
            <h1 className="display-heading text-5xl md:text-6xl font-bold mb-6">
              The Specimen <span className="italic font-light">Hub</span>
            </h1>
            <p className="font-sans text-charcoal max-w-2xl leading-relaxed">
              A systematic catalogue of prepared microscopy specimens spanning{' '}
              <ScientificTooltip
                term="Plant Histology"
                definition="The microscopic study of plant tissue structure, organisation, and function."
              />,{' '}
              <ScientificTooltip
                term="Protistology"
                definition="The branch of biology concerned with the study of protists — eukaryotic organisms that are not animals, plants, or fungi."
              />, and{' '}
              <ScientificTooltip
                term="Human Cytology"
                definition="The study of human cells, their structure, function, and pathological changes."
              />.
              Each entry includes preparation protocols, staining methodology, and annotated terminology.
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            className="flex flex-wrap gap-3 mt-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`font-sans text-sm px-5 py-2 rounded-full border transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-ink text-parchment border-ink'
                    : 'border-ink/25 text-ash hover:border-ink/50 hover:text-ink'
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Specimens Z-Pattern Grid */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto space-y-24 md:space-y-32">
          {filtered.map((specimen, i) => (
            <SpecimenCard key={specimen.id} specimen={specimen} index={i} />
          ))}
        </div>
      </section>

      {/* Taxonomy Reference */}
      <section className="py-16 px-6 md:px-12 border-t border-fog/40 bg-white/15">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-12"
          >
            <p className="section-label mb-3">Taxonomic Reference</p>
            <h2 className="display-heading text-3xl font-bold">
              Classification <span className="italic font-light">Framework</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                kingdom: 'Plantae',
                phyla: ['Magnoliophyta', 'Pteridophyta', 'Bryophyta'],
                desc: 'Multicellular photosynthetic eukaryotes with cell walls of cellulose.',
                count: 2,
              },
              {
                kingdom: 'Protista',
                phyla: ['Ciliophora', 'Bacillariophyta', 'Euglenozoa'],
                desc: 'A paraphyletic grouping of eukaryotes not classified as animals, plants, or fungi.',
                count: 2,
              },
              {
                kingdom: 'Animalia',
                phyla: ['Chordata — Homo sapiens'],
                desc: 'Human tissue specimens prepared from clinical and research biopsy material.',
                count: 2,
              },
            ].map(({ kingdom, phyla, desc, count }, i) => (
              <motion.div
                key={kingdom}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="glass-card p-6"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <p className="section-label mb-1">Kingdom</p>
                    <h3 className="font-serif text-xl font-bold text-ink">{kingdom}</h3>
                  </div>
                  <span className="font-mono text-xs text-silver bg-fog/40 px-2 py-1 rounded-full">
                    {count} specimens
                  </span>
                </div>
                <p className="font-sans text-sm text-charcoal leading-relaxed mb-4">{desc}</p>
                <div className="space-y-1.5">
                  {phyla.map((p) => (
                    <div key={p} className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-ash flex-shrink-0" />
                      <span className="font-mono text-xs text-ash italic">{p}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
