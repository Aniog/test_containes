import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import SpecimenCard from '@/components/SpecimenCard';

const specimens = [
  {
    id: 'PH-0012',
    domain: 'Plant Histology',
    name: 'Vascular Bundle',
    latinName: 'Zea mays — Monocot Stem',
    description:
      'The vascular bundle of maize exhibits a characteristic scattered arrangement of xylem and phloem, enclosed within a sclerenchymatous bundle sheath. This section reveals the intricate hydraulic architecture responsible for nutrient translocation.',
    imageUrl: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=800&q=80',
    magnification: '100×',
    terms: [
      { label: 'Xylem', definition: 'Water-conducting vascular tissue composed of tracheids and vessel elements, responsible for upward transport of water and dissolved minerals.' },
      { label: 'Phloem', definition: 'Food-conducting vascular tissue consisting of sieve tubes and companion cells, transporting photosynthetic products throughout the plant.' },
      { label: 'Sclerenchyma', definition: 'Supportive plant tissue with thick, lignified secondary cell walls; provides mechanical strength and rigidity to the plant body.' },
    ],
    metadata: [
      { label: 'Stain', value: 'Safranin / Fast Green' },
      { label: 'Section', value: 'Transverse' },
      { label: 'Collector', value: 'Dr. A. Müller' },
    ],
  },
  {
    id: 'PH-0031',
    domain: 'Plant Histology',
    name: 'Stomatal Complex',
    latinName: 'Tradescantia sp. — Leaf Epidermis',
    description:
      'The abaxial epidermis of Tradescantia reveals paired guard cells flanking the stomatal pore, surrounded by subsidiary cells. The chloroplast distribution within guard cells is clearly visible under this preparation.',
    imageUrl: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=800&q=80',
    magnification: '400×',
    terms: [
      { label: 'Guard Cells', definition: 'Specialized epidermal cells that flank the stomatal pore and regulate its opening and closing through changes in turgor pressure.' },
      { label: 'Stomata', definition: 'Microscopic pores in the leaf epidermis through which gas exchange (CO₂, O₂, H₂O) occurs between the plant and atmosphere.' },
      { label: 'Epidermis', definition: 'The outermost single layer of cells covering the primary plant body, providing protection and regulating water loss.' },
    ],
    metadata: [
      { label: 'Stain', value: 'Neutral Red' },
      { label: 'Section', value: 'Surface Peel' },
      { label: 'Collector', value: 'Prof. L. Chen' },
    ],
  },
  {
    id: 'PR-0008',
    domain: 'Protists',
    name: 'Paramecium caudatum',
    latinName: 'Ciliophora — Freshwater Ciliate',
    description:
      'A slipper-shaped ciliate of remarkable complexity, Paramecium caudatum displays a macronucleus, micronucleus, contractile vacuoles, and a dense covering of cilia arranged in precise longitudinal rows. A model organism for cell biology.',
    imageUrl: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?w=800&q=80',
    magnification: '400×',
    terms: [
      { label: 'Macronucleus', definition: 'The larger of two nuclei in ciliates; controls vegetative functions including metabolism, growth, and gene expression.' },
      { label: 'Contractile Vacuole', definition: 'An organelle that regulates osmotic pressure by collecting and expelling excess water from the cell interior.' },
      { label: 'Cilia', definition: 'Short, hair-like projections covering the cell surface, used for locomotion and feeding through coordinated beating motions.' },
    ],
    metadata: [
      { label: 'Habitat', value: 'Freshwater Pond' },
      { label: 'Prep', value: 'Wet Mount' },
      { label: 'Collector', value: 'Dr. R. Okafor' },
    ],
  },
  {
    id: 'PR-0019',
    domain: 'Protists',
    name: 'Diatom Assemblage',
    latinName: 'Bacillariophyta — Mixed Species',
    description:
      'A diverse assemblage of diatoms from a freshwater sample, showcasing the extraordinary geometric diversity of siliceous frustules. Each species exhibits a unique pattern of striae, punctae, and raphe systems etched into their glass-like cell walls.',
    imageUrl: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800&q=80',
    magnification: '200×',
    terms: [
      { label: 'Frustule', definition: 'The rigid, siliceous cell wall of a diatom, composed of two overlapping halves (valves) with intricate geometric ornamentation.' },
      { label: 'Raphe', definition: 'A longitudinal slit or groove in the valve of pennate diatoms, associated with gliding motility through secretion of mucilage.' },
      { label: 'Striae', definition: 'Fine parallel lines or rows of pores (punctae) on the diatom valve surface, used as taxonomic characters for species identification.' },
    ],
    metadata: [
      { label: 'Source', value: 'Lake Constance' },
      { label: 'Prep', value: 'Acid-cleaned' },
      { label: 'Collector', value: 'Dr. S. Patel' },
    ],
  },
  {
    id: 'HC-0005',
    domain: 'Human Cytology',
    name: 'Blood Smear',
    latinName: 'Homo sapiens — Peripheral Blood',
    description:
      'A Wright-Giemsa stained peripheral blood smear revealing the full complement of formed elements: biconcave erythrocytes, polymorphonuclear neutrophils with characteristic multi-lobed nuclei, and the occasional lymphocyte and monocyte.',
    imageUrl: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=800&q=80',
    magnification: '1000×',
    terms: [
      { label: 'Erythrocyte', definition: 'Red blood cell; a biconcave, anucleate disc containing haemoglobin, responsible for oxygen transport throughout the body.' },
      { label: 'Neutrophil', definition: 'The most abundant white blood cell; a phagocytic granulocyte with a multi-lobed nucleus, forming the first line of innate immune defence.' },
      { label: 'Thrombocyte', definition: 'Platelet; a small, anucleate cell fragment derived from megakaryocytes, essential for haemostasis and blood clot formation.' },
    ],
    metadata: [
      { label: 'Stain', value: 'Wright-Giemsa' },
      { label: 'Source', value: 'Peripheral Blood' },
      { label: 'Collector', value: 'Dr. M. Torres' },
    ],
  },
  {
    id: 'HC-0022',
    domain: 'Human Cytology',
    name: 'Stratified Squamous Epithelium',
    latinName: 'Homo sapiens — Oesophageal Mucosa',
    description:
      'The non-keratinised stratified squamous epithelium of the oesophagus demonstrates the characteristic layered organisation from basal columnar cells through to flattened superficial squames, providing a resilient protective lining.',
    imageUrl: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&q=80',
    magnification: '200×',
    terms: [
      { label: 'Stratum Basale', definition: 'The deepest layer of stratified epithelium containing mitotically active stem cells that continuously replenish the overlying layers.' },
      { label: 'Squamous Cell', definition: 'A flattened, scale-like epithelial cell found in the superficial layers of stratified epithelium, providing a smooth surface.' },
      { label: 'Basement Membrane', definition: 'A thin, acellular layer of extracellular matrix separating epithelial cells from the underlying connective tissue stroma.' },
    ],
    metadata: [
      { label: 'Stain', value: 'H&E' },
      { label: 'Section', value: 'Longitudinal' },
      { label: 'Collector', value: 'Prof. K. Yamamoto' },
    ],
  },
];

const domains = ['All', 'Plant Histology', 'Protists', 'Human Cytology'];

export default function Specimens() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-parchment pt-24">

      {/* ── Page Header ── */}
      <section className="py-20 px-6 border-b border-ink/8">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-end">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="section-label mb-4">Specimen Repository</p>
              <h1 className="font-serif text-5xl md:text-6xl font-bold text-ink leading-tight">
                The Specimen<br />
                <span className="italic">Hub</span>
              </h1>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="font-sans text-charcoal leading-relaxed mb-4">
                A curated collection of histological preparations spanning three domains
                of biological inquiry. Each specimen is documented with technical precision
                and annotated with key structural terminology.
              </p>
              <div className="flex items-center gap-6">
                <div>
                  <p className="font-serif text-2xl font-bold text-ink">6</p>
                  <p className="font-mono text-[10px] tracking-widest uppercase text-mid-grey">Featured Specimens</p>
                </div>
                <div className="w-px h-10 bg-ink/15" />
                <div>
                  <p className="font-serif text-2xl font-bold text-ink">3</p>
                  <p className="font-mono text-[10px] tracking-widest uppercase text-mid-grey">Biological Domains</p>
                </div>
                <div className="w-px h-10 bg-ink/15" />
                <div>
                  <p className="font-serif text-2xl font-bold text-ink">18</p>
                  <p className="font-mono text-[10px] tracking-widest uppercase text-mid-grey">Annotated Terms</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Domain Filter ── */}
      <section className="py-8 px-6 sticky top-20 z-30 bg-parchment/80 backdrop-blur-md border-b border-ink/8">
        <div className="max-w-5xl mx-auto flex items-center gap-3 overflow-x-auto pb-1">
          <span className="font-mono text-[10px] tracking-widest uppercase text-mid-grey whitespace-nowrap mr-2">
            Filter by Domain:
          </span>
          {domains.map((domain) => (
            <button
              key={domain}
              className="whitespace-nowrap px-4 py-2 rounded-full font-sans text-xs font-medium
                         border border-ink/15 text-charcoal hover:bg-ink hover:text-parchment hover:border-ink
                         transition-all duration-200"
            >
              {domain}
            </button>
          ))}
        </div>
      </section>

      {/* ── Z-Pattern Grid ── */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto space-y-24">

          {/* Row 1: Plant Histology — 2 cards left, 1 large right */}
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-10"
            >
              <div className="w-8 h-px bg-ink/30" />
              <p className="section-label">Plant Histology</p>
              <div className="flex-1 h-px bg-ink/10" />
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <SpecimenCard specimen={specimens[0]} index={0} />
                <SpecimenCard specimen={specimens[1]} index={1} />
              </div>
              {/* Z-pattern: large feature card */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="glass-card rounded-2xl p-8 flex flex-col justify-between"
              >
                <div>
                  <p className="section-label mb-4">Domain Overview</p>
                  <h3 className="font-serif text-2xl font-bold text-ink mb-4 leading-tight">
                    Plant Histology
                  </h3>
                  <p className="font-sans text-sm text-charcoal leading-relaxed mb-6">
                    The microscopic study of plant tissues reveals the elegant engineering
                    of vascular systems, photosynthetic machinery, and structural adaptations
                    refined over 400 million years of evolution.
                  </p>
                </div>
                <div className="space-y-3">
                  {['Vascular Tissue', 'Epidermis', 'Parenchyma', 'Meristems'].map((t) => (
                    <div key={t} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-ink/40" />
                      <span className="font-sans text-sm text-charcoal">{t}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>

          {/* Row 2: Protists — large left, 2 cards right (Z-flip) */}
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-10"
            >
              <div className="w-8 h-px bg-ink/30" />
              <p className="section-label">Protists</p>
              <div className="flex-1 h-px bg-ink/10" />
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Z-pattern: feature card on left */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="glass-card rounded-2xl p-8 flex flex-col justify-between"
              >
                <div>
                  <p className="section-label mb-4">Domain Overview</p>
                  <h3 className="font-serif text-2xl font-bold text-ink mb-4 leading-tight">
                    Protists
                  </h3>
                  <p className="font-sans text-sm text-charcoal leading-relaxed mb-6">
                    The kingdom Protista encompasses an extraordinary diversity of
                    eukaryotic microorganisms — from the geometric perfection of diatom
                    frustules to the behavioural complexity of ciliates.
                  </p>
                </div>
                <div className="space-y-3">
                  {['Ciliates', 'Diatoms', 'Amoebae', 'Flagellates'].map((t) => (
                    <div key={t} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-ink/40" />
                      <span className="font-sans text-sm text-charcoal">{t}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <SpecimenCard specimen={specimens[2]} index={2} />
                <SpecimenCard specimen={specimens[3]} index={3} />
              </div>
            </div>
          </div>

          {/* Row 3: Human Cytology — 2 cards left, 1 large right */}
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-10"
            >
              <div className="w-8 h-px bg-ink/30" />
              <p className="section-label">Human Cytology</p>
              <div className="flex-1 h-px bg-ink/10" />
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <SpecimenCard specimen={specimens[4]} index={4} />
                <SpecimenCard specimen={specimens[5]} index={5} />
              </div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="glass-card rounded-2xl p-8 flex flex-col justify-between"
              >
                <div>
                  <p className="section-label mb-4">Domain Overview</p>
                  <h3 className="font-serif text-2xl font-bold text-ink mb-4 leading-tight">
                    Human Cytology
                  </h3>
                  <p className="font-sans text-sm text-charcoal leading-relaxed mb-6">
                    The study of human cells and tissues at the microscopic level forms
                    the foundation of clinical pathology, revealing the cellular basis
                    of health, disease, and physiological function.
                  </p>
                </div>
                <div className="space-y-3">
                  {['Blood Cells', 'Epithelium', 'Connective Tissue', 'Nerve Tissue'].map((t) => (
                    <div key={t} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-ink/40" />
                      <span className="font-sans text-sm text-charcoal">{t}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-ink border-t border-white/5 py-8 px-6 mt-16">
        <div className="max-w-5xl mx-auto text-center">
          <p className="font-mono text-[10px] text-parchment/20 tracking-widest uppercase">
            MicroCosmos · Specimen Repository · © 2026
          </p>
        </div>
      </footer>
    </div>
  );
}
