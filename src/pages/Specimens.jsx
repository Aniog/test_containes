import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import SpecimenCard from '../components/SpecimenCard';

const SPECIMENS = [
  {
    id: 'SPM-001',
    category: 'Plant Histology',
    name: 'Vascular Bundle',
    latinName: 'Zea mays — Monocot Stem',
    imgId: 'spm-001-img-3c8a1f',
    imgQuery: 'vascular bundle plant stem cross section colorful microscopy histology',
    description:
      'The vascular bundle of Zea mays presents a characteristic monocot arrangement — scattered throughout the ground tissue rather than arranged in a ring. Each bundle contains xylem vessels for water transport and phloem sieve tubes for photosynthate distribution, surrounded by a dense bundle sheath of sclerenchyma fibres.',
    metadata: [
      { label: 'Magnification', value: '100×' },
      { label: 'Stain',         value: 'Safranin' },
      { label: 'Section',       value: 'T.S.' },
    ],
    terms: [
      { term: 'Xylem',         definition: 'Water-conducting tissue composed of tracheids and vessel elements, characterised by lignified secondary cell walls.' },
      { term: 'Phloem',        definition: 'Food-conducting tissue comprising sieve tube elements and companion cells, responsible for translocation of photosynthates.' },
      { term: 'Sclerenchyma',  definition: 'Supportive tissue with heavily lignified cell walls; cells are typically dead at functional maturity.' },
      { term: 'Bundle Sheath', definition: 'A layer of cells surrounding the vascular bundle, playing a key role in C4 photosynthesis in maize.' },
    ],
    instructorNote: 'Pay particular attention to the Casparian strip in the endodermis — it is the gatekeeper of selective ion uptake and a critical concept in plant physiology.',
  },
  {
    id: 'SPM-002',
    category: 'Protistology',
    name: 'Paramecium',
    latinName: 'Paramecium caudatum — Ciliophora',
    imgId: 'spm-002-img-7d4b2e',
    imgQuery: 'paramecium ciliophora protozoan colorful microscopy biology science',
    description:
      'Paramecium caudatum is a ciliated protozoan of remarkable complexity for a single-celled organism. Its pellicle — a flexible but firm outer covering — maintains cell shape while permitting locomotion via coordinated metachronal waves of cilia. The organism exhibits primitive sensory behaviour, responding to chemical gradients and physical obstacles.',
    metadata: [
      { label: 'Magnification', value: '400×' },
      { label: 'Stain',         value: 'Methylene Blue' },
      { label: 'Preparation',   value: 'Wet Mount' },
    ],
    terms: [
      { term: 'Pellicle',         definition: 'A complex outer covering beneath the cell membrane, composed of interlocking hexagonal units that provide structural rigidity.' },
      { term: 'Macronucleus',     definition: 'The larger of two nuclei; controls vegetative functions and gene expression during normal cell activity.' },
      { term: 'Micronucleus',     definition: 'The smaller nucleus involved in sexual reproduction (conjugation) and genetic recombination.' },
      { term: 'Contractile Vacuole', definition: 'An osmoregulatory organelle that expels excess water, preventing the cell from bursting in hypotonic environments.' },
    ],
    instructorNote: 'Observe the oral groove and cytostome under high magnification — the feeding apparatus of Paramecium is a masterclass in unicellular complexity.',
  },
  {
    id: 'SPM-003',
    category: 'Human Cytology',
    name: 'Stratified Squamous Epithelium',
    latinName: 'Homo sapiens — Buccal Mucosa',
    imgId: 'spm-003-img-5e9c3a',
    imgQuery: 'stratified squamous epithelium human tissue colorful histology H&E stain',
    description:
      'The stratified squamous epithelium of the buccal mucosa provides a protective lining for the oral cavity. Multiple cell layers — from the proliferative basal stratum to the flattened superficial cells — demonstrate the principle of cellular differentiation in response to mechanical stress. This tissue type is non-keratinised, distinguishing it from the epidermis.',
    metadata: [
      { label: 'Magnification', value: '200×' },
      { label: 'Stain',         value: 'H&E' },
      { label: 'Origin',        value: 'Biopsy' },
    ],
    terms: [
      { term: 'Stratum Basale',      definition: 'The deepest layer of the epithelium, containing mitotically active stem cells that replenish the tissue.' },
      { term: 'Stratum Spinosum',    definition: 'The "prickle cell" layer, characterised by desmosomes that create a spiny appearance under light microscopy.' },
      { term: 'Desmosome',           definition: 'A cell junction that mechanically links adjacent cells via intermediate filaments, providing tensile strength.' },
      { term: 'Keratinocyte',        definition: 'The predominant cell type of stratified squamous epithelium, producing keratin proteins for structural integrity.' },
    ],
    instructorNote: 'The H&E stain reveals the eosinophilic cytoplasm and basophilic nuclei with exceptional clarity. Note how nuclear size decreases as cells migrate toward the surface.',
  },
];

const CATEGORY_FILTERS = ['All', 'Plant Histology', 'Protistology', 'Human Cytology'];

export default function Specimens() {
  const pageRef = useRef(null);
  useEffect(() => {
    if (pageRef.current) ImageHelper.loadImages(strkImgConfig, pageRef.current);
  }, []);

  return (
    <div className="min-h-screen bg-parchment pt-16" ref={pageRef}>

      {/* Page header */}
      <section className="relative overflow-hidden py-20 px-6 md:px-10 border-b border-mist/60">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="section-label mb-3">Scientific Archive</p>
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-ink leading-tight mb-6">
              Specimen<br />
              <span className="italic font-normal text-graphite">Hub</span>
            </h1>
            <p className="font-sans text-charcoal max-w-xl leading-relaxed">
              A systematic catalogue of prepared microscopy specimens, each accompanied by
              annotated structural analyses, staining protocols, and instructor commentary.
            </p>
          </motion.div>
        </div>

        {/* Decorative grid lines */}
        <div className="absolute inset-0 pointer-events-none opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(#1A1A1A 1px, transparent 1px), linear-gradient(90deg, #1A1A1A 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }} />
        </div>
      </section>

      {/* Category pills */}
      <section className="sticky top-16 z-30 bg-parchment/90 backdrop-blur-md border-b border-mist/40 py-4 px-6 md:px-10">
        <div className="max-w-7xl mx-auto flex items-center gap-3 overflow-x-auto pb-1">
          <span className="section-label shrink-0 mr-2">Filter:</span>
          {CATEGORY_FILTERS.map((cat) => (
            <button
              key={cat}
              className="shrink-0 px-4 py-1.5 rounded-full text-xs font-sans font-medium border border-mist/80 text-charcoal hover:bg-ink/8 hover:border-ink/20 transition-all duration-200 first:bg-ink first:text-white first:border-ink"
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Specimens — Z-pattern layout */}
      <section className="py-20 px-6 md:px-10">
        <div className="max-w-7xl mx-auto flex flex-col gap-24 md:gap-32">
          {SPECIMENS.map((specimen, i) => (
            <SpecimenCard key={specimen.id} specimen={specimen} reverse={i % 2 !== 0} />
          ))}
        </div>
      </section>

      {/* Taxonomy reference footer */}
      <section className="py-16 px-6 md:px-10 bg-ink/4 border-t border-mist/60">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="section-label mb-6">Taxonomic Reference</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { kingdom: 'Plantae',   count: '124 slides', desc: 'Vascular & non-vascular plants' },
                { kingdom: 'Protista',  count: '87 slides',  desc: 'Unicellular eukaryotes' },
                { kingdom: 'Animalia',  count: '96 slides',  desc: 'Human & animal histology' },
                { kingdom: 'Fungi',     count: '33 slides',  desc: 'Mycelial & reproductive structures' },
              ].map(({ kingdom, count, desc }) => (
                <div key={kingdom} className="bg-white/30 border border-mist/60 rounded-xl p-5">
                  <div className="font-serif text-lg font-semibold text-ink mb-1">{kingdom}</div>
                  <div className="font-mono text-xs text-graphite mb-2">{count}</div>
                  <div className="font-sans text-xs text-charcoal">{desc}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
