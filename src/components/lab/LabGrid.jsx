import { useRef, useEffect, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const LAB_SPECIMENS = [
  {
    id: 'dna-fern',
    category: 'Botanical',
    title: 'Fern Spiral',
    subtitle: 'Fibonacci in Nature',
    desc: 'The fern\'s unfurling frond follows the same mathematical sequence found in human DNA coiling.',
    imgDesc: 'fern spiral macro close-up fibonacci botanical green',
    titleId: 'lab-fern-title',
    descId: 'lab-fern-desc',
    imgId: 'lab-img-fern-u1v2',
    ratio: '1x1',
    width: 600,
    tag: 'Pteridophyta',
    magnification: '40×',
  },
  {
    id: 'dna-leaf-vein',
    category: 'Vascular',
    title: 'Leaf Vein Network',
    subtitle: 'Nature\'s Circulatory System',
    desc: 'Leaf venation patterns are structurally identical to the branching of human blood vessels.',
    imgDesc: 'leaf vein macro close-up network pattern botanical',
    titleId: 'lab-leafvein-title',
    descId: 'lab-leafvein-desc',
    imgId: 'lab-img-leafvein-w3x4',
    ratio: '1x1',
    width: 600,
    tag: 'Angiospermae',
    magnification: '20×',
  },
  {
    id: 'dna-crystal',
    category: 'Mineral',
    title: 'Ice Crystal',
    subtitle: 'Hexagonal Symmetry',
    desc: 'Snowflake crystallization follows the same hexagonal geometry as the benzene rings in organic molecules.',
    imgDesc: 'snowflake ice crystal macro close-up symmetry',
    titleId: 'lab-crystal-title',
    descId: 'lab-crystal-desc',
    imgId: 'lab-img-crystal-y5z6',
    ratio: '1x1',
    width: 600,
    tag: 'H₂O Crystalline',
    magnification: '100×',
  },
  {
    id: 'dna-mycelium',
    category: 'Fungal',
    title: 'Mycelium Network',
    subtitle: 'The Wood Wide Web',
    desc: 'Fungal mycelium networks transmit nutrients and chemical signals across forests — mirroring neural networks.',
    imgDesc: 'mycelium fungal network macro close-up white threads',
    titleId: 'lab-mycelium-title',
    descId: 'lab-mycelium-desc',
    imgId: 'lab-img-mycelium-a7b8',
    ratio: '1x1',
    width: 600,
    tag: 'Basidiomycota',
    magnification: '60×',
  },
  {
    id: 'dna-pollen',
    category: 'Reproductive',
    title: 'Pollen Grain',
    subtitle: 'Microscopic Architecture',
    desc: 'Pollen grains exhibit extraordinary geometric complexity — each species has a unique structural fingerprint.',
    imgDesc: 'pollen grain macro close-up microscope botanical',
    titleId: 'lab-pollen-title',
    descId: 'lab-pollen-desc',
    imgId: 'lab-img-pollen-c9d0',
    ratio: '1x1',
    width: 600,
    tag: 'Sporopollenin',
    magnification: '200×',
  },
  {
    id: 'dna-coral',
    category: 'Marine',
    title: 'Coral Polyp',
    subtitle: 'Living Architecture',
    desc: 'Coral polyps build calcium carbonate structures that mirror the trabecular architecture of human bone.',
    imgDesc: 'coral polyp macro close-up underwater marine',
    titleId: 'lab-coral-title',
    descId: 'lab-coral-desc',
    imgId: 'lab-img-coral-e1f2',
    ratio: '1x1',
    width: 600,
    tag: 'Anthozoa',
    magnification: '15×',
  },
];

const CATEGORIES = ['All', 'Botanical', 'Vascular', 'Mineral', 'Fungal', 'Reproductive', 'Marine'];

function SpecimenCard({ specimen, index, onClick }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.08, ease: 'easeOut' }}
      whileHover={{ y: -4 }}
      className="group cursor-pointer"
      onClick={() => onClick(specimen)}
    >
      <div className="relative overflow-hidden rounded-sm bg-[#2C2C2C] aspect-square">
        <img
          data-strk-img-id={specimen.imgId}
          data-strk-img={`[${specimen.descId}] [${specimen.titleId}]`}
          data-strk-img-ratio={specimen.ratio}
          data-strk-img-width={specimen.width}
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={specimen.title}
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 group-hover:saturate-100"
          style={{ filter: 'saturate(0.6) contrast(1.1) brightness(0.9)' }}
        />
        <span id={specimen.descId} className="hidden">{specimen.imgDesc}</span>

        {/* Scan line effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#4A6741]/5 to-[#2C2C2C]/60 group-hover:opacity-80 transition-opacity" />

        {/* Magnification badge */}
        <div className="absolute top-3 right-3 bg-[#2C2C2C]/80 px-2 py-1 rounded-sm">
          <span className="text-[#A8C5A0] text-xs font-mono">{specimen.magnification}</span>
        </div>

        {/* Category */}
        <div className="absolute top-3 left-3 bg-[#4A6741]/80 px-2 py-1 rounded-sm">
          <span className="text-white text-[0.6rem] tracking-widest uppercase">{specimen.category}</span>
        </div>

        {/* Hover info */}
        <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
          <p className="text-[#A8C5A0] text-xs font-mono mb-1">{specimen.tag}</p>
          <p
            id={specimen.titleId}
            className="text-white text-lg leading-tight"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            {specimen.title}
          </p>
        </div>
      </div>

      <div className="mt-3 px-1">
        <p className="text-[#5A5A5A] text-xs">{specimen.subtitle}</p>
      </div>
    </motion.div>
  );
}

function SpecimenModal({ specimen, onClose }) {
  const modalRef = useRef(null);

  useEffect(() => {
    if (modalRef.current) {
      const cleanup = ImageHelper.loadImages(strkImgConfig, modalRef.current);
      return cleanup;
    }
  }, [specimen]);

  if (!specimen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-[#2C2C2C]/90 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        ref={modalRef}
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className="bg-[#F5EDE3] max-w-3xl w-full overflow-hidden rounded-sm shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Image */}
          <div className="relative aspect-square md:aspect-auto bg-[#2C2C2C]">
            <img
              data-strk-img-id={`modal-${specimen.imgId}`}
              data-strk-img={`[modal-desc-${specimen.id}] [modal-title-${specimen.id}]`}
              data-strk-img-ratio="1x1"
              data-strk-img-width="700"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={specimen.title}
              className="w-full h-full object-cover"
              style={{ filter: 'saturate(0.7) contrast(1.15)' }}
            />
            <span id={`modal-desc-${specimen.id}`} className="hidden">{specimen.imgDesc}</span>
            <div className="absolute top-4 left-4 bg-[#4A6741] px-3 py-1">
              <span className="text-white text-xs tracking-widest uppercase">{specimen.category}</span>
            </div>
            <div className="absolute bottom-4 right-4 bg-[#2C2C2C]/80 px-3 py-1">
              <span className="text-[#A8C5A0] text-sm font-mono">{specimen.magnification}</span>
            </div>
          </div>

          {/* Info */}
          <div className="p-8 flex flex-col justify-between">
            <div>
              <p className="section-label mb-2">{specimen.tag}</p>
              <h3
                id={`modal-title-${specimen.id}`}
                className="text-2xl md:text-3xl text-[#2C2C2C] mb-1"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                {specimen.title}
              </h3>
              <p className="text-[#8B6F5E] text-sm mb-6">{specimen.subtitle}</p>
              <p className="text-[#5A5A5A] leading-relaxed">{specimen.desc}</p>
            </div>

            <div className="mt-8 pt-6 border-t border-[#E8D5C4]">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="section-label text-[0.6rem] mb-1">Category</p>
                  <p className="text-[#2C2C2C]">{specimen.category}</p>
                </div>
                <div>
                  <p className="section-label text-[0.6rem] mb-1">Magnification</p>
                  <p className="text-[#2C2C2C] font-mono">{specimen.magnification}</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="mt-6 w-full py-3 border border-[#4A6741] text-[#4A6741] text-sm tracking-widest uppercase hover:bg-[#4A6741] hover:text-white transition-all duration-300"
              >
                Close Specimen
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function LabGrid() {
  const containerRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedSpecimen, setSelectedSpecimen] = useState(null);

  useEffect(() => {
    const cleanup = ImageHelper.loadImages(strkImgConfig, containerRef.current);
    return cleanup;
  }, [activeCategory]);

  const filtered = activeCategory === 'All'
    ? LAB_SPECIMENS
    : LAB_SPECIMENS.filter((s) => s.category === activeCategory);

  return (
    <>
      <section ref={containerRef} className="py-20 px-6 md:px-12 bg-[#F5EDE3]">
        <div className="max-w-7xl mx-auto">
          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2 mb-12">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-xs tracking-widest uppercase transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-[#4A6741] text-white'
                    : 'bg-transparent border border-[#D4B896] text-[#5A5A5A] hover:border-[#4A6741] hover:text-[#4A6741]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <motion.div
            layout
            className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((specimen, i) => (
                <SpecimenCard
                  key={specimen.id}
                  specimen={specimen}
                  index={i}
                  onClick={setSelectedSpecimen}
                />
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedSpecimen && (
          <SpecimenModal
            specimen={selectedSpecimen}
            onClose={() => setSelectedSpecimen(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
