import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import ScientificTooltip from '@/components/ScientificTooltip';
import { Microscope, Layers, Dna, FlaskConical, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const specimens = [
  {
    id: 'plant-histology',
    category: 'Plant Histology',
    icon: Layers,
    classification: 'Kingdom Plantae',
    magnification: '100× — 400×',
    stain: 'Safranin / Fast Green',
    titleId: 'spec-plant-title',
    descId: 'spec-plant-desc',
    imgId: 'spec-plant-img-4a7b2c',
    title: 'Plant Tissue Architecture',
    description: 'Longitudinal and transverse sections of monocot and dicot stems reveal the elegant organisation of vascular bundles, parenchyma, and sclerenchyma fibres.',
    details: [
      { term: 'Vascular Bundle', def: 'A strand of conducting tissue containing xylem and phloem, responsible for water and nutrient transport throughout the plant body.' },
      { term: 'Parenchyma', def: 'The most abundant plant cell type — thin-walled, metabolically active cells that perform photosynthesis, storage, and wound healing.' },
      { term: 'Sclerenchyma', def: 'Thick-walled, lignified support cells that provide mechanical strength. Includes fibres and sclereids.' },
      { term: 'Epidermis', def: 'The outermost protective layer of plant organs, often covered by a waxy cuticle to prevent desiccation.' },
    ],
    keyFindings: ['Casparian strip in root endodermis', 'Collenchyma in petiole corners', 'Guard cell stomatal apparatus'],
  },
  {
    id: 'protists',
    category: 'Protists',
    icon: FlaskConical,
    classification: 'Domain Eukaryota',
    magnification: '200× — 1000×',
    stain: 'Iodine / Methylene Blue',
    titleId: 'spec-protist-title',
    descId: 'spec-protist-desc',
    imgId: 'spec-protist-img-8d3e1f',
    title: 'Protist Diversity',
    description: 'Single-celled eukaryotes of extraordinary morphological diversity — from the radial symmetry of radiolarians to the bilateral precision of diatom frustules.',
    details: [
      { term: 'Frustule', def: 'The ornate siliceous cell wall of a diatom, composed of two interlocking halves (thecae). Its intricate pore patterns are used in species identification.' },
      { term: 'Radiolarian', def: 'Marine amoeboid protists with elaborate mineral skeletons of silica or strontium sulfate, forming geometric lattice structures.' },
      { term: 'Pseudopod', def: 'Temporary cytoplasmic projections used by amoeboid cells for locomotion and phagocytosis of food particles.' },
      { term: 'Pellicle', def: 'A flexible protein layer beneath the plasma membrane of euglenoids, providing structural support while allowing shape changes.' },
    ],
    keyFindings: ['Raphe system in pennate diatoms', 'Axopods in heliozoans', 'Contractile vacuole in Paramecium'],
  },
  {
    id: 'human-cytology',
    category: 'Human Cytology',
    icon: Dna,
    classification: 'Homo sapiens',
    magnification: '400× — 1000×',
    stain: 'H&E / Giemsa',
    titleId: 'spec-human-title',
    descId: 'spec-human-desc',
    imgId: 'spec-human-img-2c9f5a',
    title: 'Human Cell Morphology',
    description: 'Haematoxylin and eosin stained sections of epithelial, connective, muscular, and nervous tissue reveal the cellular basis of human physiology.',
    details: [
      { term: 'Haematoxylin', def: 'A basic dye that stains acidic structures (nuclei, ribosomes) blue-purple. Derived from the logwood tree Haematoxylum campechianum.' },
      { term: 'Eosin', def: 'An acidic dye that stains basic structures (cytoplasm, collagen) pink-red. Used in combination with haematoxylin in the standard H&E protocol.' },
      { term: 'Mitosis', def: 'The process of somatic cell division producing two genetically identical daughter cells, observable in actively dividing tissues such as intestinal crypts.' },
      { term: 'Goblet Cell', def: 'Unicellular mucus-secreting glands interspersed among columnar epithelial cells, particularly abundant in the intestinal and respiratory mucosa.' },
    ],
    keyFindings: ['Stratified squamous epithelium in skin', 'Sarcomere banding in skeletal muscle', 'Nissl bodies in motor neurons'],
  },
];

export default function Specimens() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-parchment pt-24">

      {/* Page Header */}
      <section className="py-16 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="section-label mb-4">Specimen Hub</p>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h1 className="font-playfair text-5xl md:text-6xl font-bold text-ink leading-tight max-w-xl">
              The Catalogue of<br />
              <em className="font-light italic">Living Forms</em>
            </h1>
            <p className="font-inter text-charcoal max-w-sm leading-relaxed text-sm">
              Three domains of biological organisation, documented with precision
              and presented for systematic study.
            </p>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="mt-10 h-px bg-gradient-to-r from-ink/20 via-ink/5 to-transparent" />
      </section>

      {/* Specimens — Z-pattern layout */}
      <section className="px-6 md:px-12 lg:px-24 pb-24 max-w-7xl mx-auto space-y-24">
        {specimens.map((spec, idx) => {
          const Icon = spec.icon;
          const isEven = idx % 2 === 0;

          return (
            <motion.article
              key={spec.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7 }}
              className={`grid md:grid-cols-2 gap-10 lg:gap-16 items-start
                ${isEven ? '' : 'md:[&>*:first-child]:order-2'}`}
            >
              {/* Image column */}
              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-ash shadow-xl">
                  <img
                    data-strk-img-id={spec.imgId}
                    data-strk-img={`[${spec.descId}] [${spec.titleId}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={spec.title}
                    className="w-full h-full object-cover"
                    style={{ filter: 'grayscale(100%) contrast(1.08)' }}
                  />
                </div>

                {/* Metadata badge */}
                <div className="absolute -bottom-5 left-6 backdrop-blur-md bg-white/50 border border-white/30
                  rounded-xl px-4 py-3 shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-ink flex items-center justify-center">
                      <Icon className="w-4 h-4 text-parchment" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="font-mono text-xs text-graphite">{spec.classification}</p>
                      <p className="font-mono text-xs text-ink font-medium">{spec.magnification}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content column */}
              <div className="pt-4 md:pt-0">
                <div className="flex items-center gap-3 mb-5">
                  <span className="section-label">{spec.category}</span>
                  <span className="h-px flex-1 bg-ash" />
                  <span className="font-mono text-xs text-graphite">{spec.stain}</span>
                </div>

                <h2 id={spec.titleId} className="font-playfair text-3xl md:text-4xl font-bold text-ink mb-4">
                  {spec.title}
                </h2>

                <p id={spec.descId} className="font-inter text-charcoal leading-relaxed mb-8 text-sm">
                  {spec.description}
                </p>

                {/* Terminology grid */}
                <div className="mb-8">
                  <p className="section-label mb-4">Key Terminology</p>
                  <div className="grid grid-cols-2 gap-3">
                    {spec.details.map((d) => (
                      <div
                        key={d.term}
                        className="backdrop-blur-sm bg-white/30 border border-white/20 rounded-xl px-3 py-2.5"
                      >
                        <ScientificTooltip term={d.term} definition={d.def}>
                          <span className="font-inter text-xs font-semibold text-ink">{d.term}</span>
                        </ScientificTooltip>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Key findings */}
                <div>
                  <p className="section-label mb-3">Observed Structures</p>
                  <ul className="space-y-2">
                    {spec.keyFindings.map((f) => (
                      <li key={f} className="flex items-center gap-2.5 font-inter text-sm text-charcoal">
                        <span className="w-1.5 h-1.5 rounded-full bg-ink flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.article>
          );
        })}
      </section>

      {/* CTA to Gallery */}
      <section className="py-20 px-6 bg-ink">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <Microscope className="w-10 h-10 text-silver mx-auto mb-6" strokeWidth={1} />
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-parchment mb-4">
            Ready to Examine the Slides?
          </h2>
          <p className="font-inter text-silver text-sm leading-relaxed mb-8">
            Browse the full digital slide collection with high-resolution imagery,
            magnification data, and collector's annotations.
          </p>
          <Link
            to="/gallery"
            className="inline-flex items-center gap-2 px-8 py-3.5
              backdrop-blur-md bg-white/15 border border-white/20 rounded-full
              font-inter font-semibold text-sm tracking-widest uppercase text-parchment
              hover:bg-white/25 transition-all duration-300 group"
          >
            Open Slide Gallery
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-ink border-t border-white/5 py-8 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Microscope className="w-4 h-4 text-silver" strokeWidth={1.5} />
            <span className="font-playfair text-parchment text-sm font-semibold">MicroCosmos</span>
          </div>
          <p className="font-inter text-xs text-silver">
            © 2026 MicroCosmos Educational Platform
          </p>
        </div>
      </footer>
    </div>
  );
}
