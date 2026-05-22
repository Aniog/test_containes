import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Info, ChevronRight, Layers, Dna, Atom } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut', delay },
  }),
};

const domains = [
  {
    id: 'plant-histology',
    icon: Layers,
    category: 'Domain I',
    title: 'Plant Histology',
    subtitle: 'Structural Botany at the Cellular Scale',
    description:
      'Plant histology examines the microscopic organisation of plant tissues — from the protective epidermis to the vascular bundles that conduct water and nutrients. Cross-sections reveal the elegant geometry of xylem vessels, phloem sieve tubes, and the intercellular air spaces of mesophyll tissue.',
    specimens: [
      { id: 'PH-001', name: 'Zea mays — Stem Cross-Section', mag: '100×', stain: 'Safranin-O / Fast Green' },
      { id: 'PH-002', name: 'Helianthus annuus — Root T.S.', mag: '200×', stain: 'Toluidine Blue' },
      { id: 'PH-003', name: 'Ficus elastica — Leaf Epidermis', mag: '400×', stain: 'Unstained' },
      { id: 'PH-004', name: 'Pinus sylvestris — Wood Section', mag: '40×', stain: 'Phloroglucinol-HCl' },
    ],
    terms: [
      { term: 'Xylem', def: 'Water-conducting vascular tissue composed of tracheids and vessel elements.' },
      { term: 'Phloem', def: 'Sugar-transporting tissue consisting of sieve tubes and companion cells.' },
      { term: 'Mesophyll', def: 'Photosynthetic parenchyma tissue between the upper and lower epidermis.' },
      { term: 'Stomata', def: 'Microscopic pores in the leaf epidermis regulating gas exchange.' },
    ],
    imgId: 'plant-hist-img-4a7c3e',
    imgDesc: 'plant stem cross section histology microscopy xylem phloem vascular bundle',
    imgContext: 'plant histology botanical specimen',
  },
  {
    id: 'protists',
    icon: Atom,
    category: 'Domain II',
    title: 'Protists',
    subtitle: 'The Kingdom of Microscopic Eukaryotes',
    description:
      'Protists represent an extraordinarily diverse assemblage of unicellular eukaryotes. From the silica-armoured frustules of diatoms to the pseudopodal extensions of amoebae, this domain encompasses organisms that defy simple classification — occupying ecological niches as primary producers, decomposers, and parasites.',
    specimens: [
      { id: 'PR-001', name: 'Amoeba proteus — Locomotion Study', mag: '400×', stain: 'Unstained (Phase Contrast)' },
      { id: 'PR-002', name: 'Paramecium caudatum — Ciliates', mag: '200×', stain: 'Methyl Green' },
      { id: 'PR-003', name: 'Euglena gracilis — Flagellate', mag: '400×', stain: 'Lugol\'s Iodine' },
      { id: 'PR-004', name: 'Spirogyra sp. — Conjugation', mag: '100×', stain: 'Unstained' },
    ],
    terms: [
      { term: 'Frustule', def: 'The silica cell wall of diatoms, composed of two interlocking valves.' },
      { term: 'Pseudopod', def: 'Temporary cytoplasmic extensions used for locomotion and phagocytosis.' },
      { term: 'Pellicle', def: 'A flexible protein layer beneath the plasma membrane in euglenoids.' },
      { term: 'Conjugation', def: 'A form of sexual reproduction involving the exchange of genetic material.' },
    ],
    imgId: 'protist-img-8d1b5f',
    imgDesc: 'paramecium amoeba protist unicellular organism microscopy phase contrast',
    imgContext: 'protist taxonomy microscopic eukaryote specimen',
  },
  {
    id: 'human-cytology',
    icon: Dna,
    category: 'Domain III',
    title: 'Human Cytology',
    subtitle: 'The Architecture of Human Cells',
    description:
      'Human cytology investigates the structure, function, and pathology of individual human cells. Prepared smears and tissue sections reveal the characteristic morphology of erythrocytes, leukocytes, and epithelial cells — each adapted with remarkable precision to its physiological role.',
    specimens: [
      { id: 'HC-001', name: 'Homo sapiens — Blood Smear', mag: '1000×', stain: 'Giemsa / Wright\'s' },
      { id: 'HC-002', name: 'Squamous Epithelium — Buccal Smear', mag: '400×', stain: 'Methylene Blue' },
      { id: 'HC-003', name: 'Skeletal Muscle — Longitudinal Section', mag: '200×', stain: 'H&E' },
      { id: 'HC-004', name: 'Nervous Tissue — Purkinje Cells', mag: '400×', stain: 'Golgi Silver' },
    ],
    terms: [
      { term: 'Erythrocyte', def: 'Biconcave, anucleate red blood cells specialised for oxygen transport.' },
      { term: 'Leukocyte', def: 'Nucleated white blood cells constituting the cellular immune response.' },
      { term: 'Sarcomere', def: 'The fundamental contractile unit of striated muscle fibres.' },
      { term: 'Dendrite', def: 'Branched neuronal processes that receive synaptic input signals.' },
    ],
    imgId: 'cytology-img-2c9e7a',
    imgDesc: 'human blood smear erythrocyte leukocyte cytology microscopy Giemsa stain',
    imgContext: 'human cytology cell biology specimen histology',
  },
];

function Tooltip({ term, def }) {
  const [open, setOpen] = useState(false);

  return (
    <span className="relative inline-block">
      <button
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        onFocus={() => setOpen(true)}
        onBlur={() => setOpen(false)}
        className="inline-flex items-center gap-1 font-inter text-sm font-medium text-ink border-b border-dashed border-charcoal/50 hover:border-ink transition-colors cursor-help"
        aria-describedby={`tooltip-${term}`}
      >
        {term}
        <Info className="w-3 h-3 text-graphite" />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            id={`tooltip-${term}`}
            role="tooltip"
            initial={{ opacity: 0, y: 6, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.97 }}
            transition={{ duration: 0.18 }}
            className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 z-30 w-64 bg-white/90 backdrop-blur-md border border-white/60 rounded-xl p-3 shadow-glass-lg pointer-events-none"
          >
            <p className="font-inter text-xs font-semibold text-ink mb-1">{term}</p>
            <p className="font-inter text-xs text-charcoal leading-relaxed">{def}</p>
            <div className="absolute top-full left-1/2 -translate-x-1/2 w-2 h-2 bg-white/90 border-r border-b border-white/60 rotate-45 -mt-1" />
          </motion.div>
        )}
      </AnimatePresence>
    </span>
  );
}

function SpecimenCard({ specimen }) {
  return (
    <div className="flex items-start gap-3 py-3 border-b border-ash last:border-0">
      <div className="w-1.5 h-1.5 rounded-full bg-graphite mt-2 flex-shrink-0" />
      <div className="flex-1 min-w-0">
        <p className="font-inter text-sm font-medium text-ink leading-snug">{specimen.name}</p>
        <div className="flex items-center gap-3 mt-1">
          <span className="font-mono text-xs text-graphite">{specimen.id}</span>
          <span className="font-inter text-xs text-silver">·</span>
          <span className="font-inter text-xs text-graphite">{specimen.mag}</span>
          <span className="font-inter text-xs text-silver">·</span>
          <span className="font-inter text-xs text-graphite truncate">{specimen.stain}</span>
        </div>
      </div>
    </div>
  );
}

export default function Specimens() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  return (
    <div className="min-h-screen bg-parchment" ref={containerRef}>
      {/* Page Header */}
      <div className="pt-32 pb-16 px-6 md:px-12 border-b border-ash">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="section-label mb-4">Specimen Hub</p>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <h1 className="font-playfair text-5xl md:text-6xl font-bold text-ink leading-tight max-w-xl">
                The Specimen
                <br />
                <em className="font-light">Archive</em>
              </h1>
              <p className="font-inter text-base text-charcoal max-w-sm leading-relaxed">
                Three taxonomic domains, each documented with histological precision
                and annotated for academic study.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Domain Sections — Z-Pattern Layout */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 space-y-32">
        {domains.map((domain, idx) => {
          const Icon = domain.icon;
          const isEven = idx % 2 === 0;

          return (
            <motion.article
              key={domain.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              variants={fadeUp}
              className={`grid md:grid-cols-2 gap-12 md:gap-20 items-start ${
                isEven ? '' : 'md:[&>*:first-child]:order-2'
              }`}
            >
              {/* Text Column */}
              <div>
                {/* Domain badge */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-ink/8 border border-ink/10 flex items-center justify-center">
                    <Icon className="w-4 h-4 text-ink" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="font-inter text-xs text-graphite tracking-widest uppercase">{domain.category}</p>
                    <p className="font-inter text-xs text-silver">{domain.subtitle}</p>
                  </div>
                </div>

                <h2 className="font-playfair text-4xl md:text-5xl font-bold text-ink mb-5">
                  {domain.title}
                </h2>

                <p className="font-inter text-base text-charcoal leading-relaxed mb-8">
                  {domain.description}
                </p>

                {/* Glossary Terms */}
                <div className="mb-8">
                  <p className="section-label mb-4">Key Terminology</p>
                  <div className="flex flex-wrap gap-3">
                    {domain.terms.map((t) => (
                      <Tooltip key={t.term} term={t.term} def={t.def} />
                    ))}
                  </div>
                </div>

                {/* Specimen List */}
                <div className="bg-white/30 backdrop-blur-sm border border-white/50 rounded-2xl p-6 shadow-glass">
                  <p className="section-label mb-4">Specimen Records</p>
                  {domain.specimens.map((s) => (
                    <SpecimenCard key={s.id} specimen={s} />
                  ))}
                </div>
              </div>

              {/* Image Column */}
              <div className="relative">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-bone border border-ash shadow-glass-lg">
                  <img
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${domain.title} microscopy specimen`}
                    className="w-full h-full object-cover grayscale-img"
                    data-strk-img-id={domain.imgId}
                    data-strk-img={`[${domain.id}-img-desc] [${domain.id}-img-ctx]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="600"
                  />
                  <span id={`${domain.id}-img-desc`} className="sr-only">{domain.imgDesc}</span>
                  <span id={`${domain.id}-img-ctx`} className="sr-only">{domain.imgContext}</span>
                </div>

                {/* Floating metadata card */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? 20 : -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className={`absolute ${isEven ? '-right-4 md:-right-8' : '-left-4 md:-left-8'} bottom-8 bg-white/30 backdrop-blur-lg border border-white/50 rounded-2xl p-5 shadow-glass-lg max-w-[200px]`}
                >
                  <p className="font-mono text-xs text-graphite mb-1">{domain.specimens[0].id}</p>
                  <p className="font-playfair text-sm font-semibold text-ink leading-snug mb-2">
                    {domain.specimens[0].name.split('—')[0].trim()}
                  </p>
                  <div className="flex items-center gap-2">
                    <span className="inline-block px-2 py-0.5 rounded-full bg-ink/8 font-inter text-xs text-ink">
                      {domain.specimens[0].mag}
                    </span>
                  </div>
                </motion.div>

                {/* Decorative corner rule */}
                <div className={`absolute top-4 ${isEven ? 'right-4' : 'left-4'} w-8 h-8 border-t-2 border-r-2 border-ash ${isEven ? '' : 'border-r-0 border-l-2'}`} />
              </div>
            </motion.article>
          );
        })}
      </div>

      {/* Bottom CTA */}
      <section className="py-20 px-6 md:px-12 bg-ink">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-inter text-xs text-silver tracking-widest uppercase mb-4">
              Continue Your Study
            </p>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-parchment mb-6">
              Examine the Digital Slides
            </h2>
            <p className="font-inter text-base text-silver leading-relaxed mb-10 max-w-lg mx-auto">
              Browse our high-resolution slide archive with full magnification metadata
              and collector's annotations.
            </p>
            <a
              href="/gallery"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-parchment text-ink font-inter font-semibold text-sm tracking-wide hover:bg-white transition-colors duration-300"
            >
              Open Slide Gallery
              <ChevronRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
