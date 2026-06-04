import { useState, useRef, useEffect } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Microscope, Ruler, User, Calendar } from 'lucide-react';

const SLIDES = [
  {
    id: 'rad-001',
    title: 'Radiolarian Skeleton',
    category: 'Marine Protist',
    magnification: '400x',
    collector: 'E. Haeckel',
    date: '1887',
    notes:
      'Siliceous skeleton exhibiting exquisite radial symmetry. Collected from deep-sea sediment cores in the Pacific Ocean. The geometric precision of the lattice structure demonstrates nature\'s architectural mastery at microscopic scales.',
    imgId: 'gallery-rad-001-6a1b3c',
    titleId: 'gallery-rad-001-title',
    descId: 'gallery-rad-001-desc',
  },
  {
    id: 'diatom-042',
    title: 'Diatom Frustule',
    category: 'Bacillariophyta',
    magnification: '600x',
    collector: 'C. Darwin',
    date: '1836',
    notes:
      'Bivalve frustule composed of biogenic silica. The intricate nanopore patterning serves as both structural reinforcement and filtration mechanism. Specimen sourced from freshwater lake deposits in Patagonia.',
    imgId: 'gallery-diatom-042-2c4d5e',
    titleId: 'gallery-diatom-042-title',
    descId: 'gallery-diatom-042-desc',
  },
  {
    id: 'neuron-117',
    title: 'Pyramidal Neuron',
    category: 'Human Cytology',
    magnification: '200x',
    collector: 'S. Ramón y Cajal',
    date: '1899',
    notes:
      'Golgi-stained pyramidal neuron from human cerebral cortex. The elaborate dendritic arborisation reveals the complex connectivity underlying cognition. A landmark specimen in the history of neuroscience.',
    imgId: 'gallery-neuron-117-8f9a0b',
    titleId: 'gallery-neuron-117-title',
    descId: 'gallery-neuron-117-desc',
  },
  {
    id: 'stem-203',
    title: 'Dicot Stem Cross-Section',
    category: 'Plant Histology',
    magnification: '100x',
    collector: 'N. Grew',
    date: '1682',
    notes:
      'Transverse section through a young dicotyledonous stem. Vascular bundles arranged in a ring pattern, with clearly visible xylem vessels and cambium layer. One of the earliest documented anatomical preparations.',
    imgId: 'gallery-stem-203-4d6e7f',
    titleId: 'gallery-stem-203-title',
    descId: 'gallery-stem-203-desc',
  },
  {
    id: 'paramecium-089',
    title: 'Paramecium caudatum',
    category: 'Ciliate Protist',
    magnification: '400x',
    collector: 'A. van Leeuwenhoek',
    date: '1677',
    notes:
      'Living ciliate observed in pond water. The coordinated beating of thousands of cilia propels the organism with remarkable precision. Oral groove and contractile vacuoles clearly visible in this preparation.',
    imgId: 'gallery-paramecium-089-1a2b3c',
    titleId: 'gallery-paramecium-089-title',
    descId: 'gallery-paramecium-089-desc',
  },
  {
    id: 'blood-312',
    title: 'Human Erythrocytes',
    category: 'Haematology',
    magnification: '1000x',
    collector: 'P. Ehrlich',
    date: '1891',
    notes:
      'Blood smear showing characteristic biconcave erythrocytes alongside a single neutrophil. The anucleate nature of mammalian red blood cells is clearly demonstrated. Wright\'s stain reveals cytoplasmic granularity.',
    imgId: 'gallery-blood-312-7c8d9e',
    titleId: 'gallery-blood-312-title',
    descId: 'gallery-blood-312-desc',
  },
];

function Lightbox({ slide, onClose }) {
  return (
    <AnimatePresence>
      {slide && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-ink/70 backdrop-blur-md"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 glass-strong rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden shadow-2xl flex flex-col md:flex-row"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full glass flex items-center justify-center hover:bg-white/50 transition-colors"
              aria-label="Close lightbox"
            >
              <X className="w-4 h-4 text-ink" />
            </button>

            {/* Image */}
            <div className="md:w-3/5 bg-black/5 flex items-center justify-center p-6">
              <img
                data-strk-img-id={`lightbox-${slide.imgId}`}
                data-strk-img={`[lightbox-${slide.descId}] [lightbox-${slide.titleId}]`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="1000"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={slide.title}
                className="max-w-full max-h-[70vh] object-contain rounded-lg"
                style={{ filter: 'grayscale(100%) contrast(1.05)' }}
              />
            </div>

            {/* Metadata Sidebar */}
            <div className="md:w-2/5 p-8 flex flex-col justify-center border-l border-white/20">
              <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-charcoal-muted mb-1">
                Digital Slide
              </p>
              <h2
                id={`lightbox-${slide.titleId}`}
                className="font-serif text-2xl font-semibold text-ink mb-1"
              >
                {slide.title}
              </h2>
              <p className="font-serif italic text-sm text-charcoal mb-6">
                {slide.category}
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2.5 text-sm text-charcoal">
                  <Microscope className="w-4 h-4 text-charcoal-muted" strokeWidth={1.5} />
                  <span className="font-sans">
                    <span className="text-charcoal-muted">Magnification: </span>
                    <span className="font-medium text-ink">{slide.magnification}</span>
                  </span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-charcoal">
                  <User className="w-4 h-4 text-charcoal-muted" strokeWidth={1.5} />
                  <span className="font-sans">
                    <span className="text-charcoal-muted">Collector: </span>
                    <span className="font-medium text-ink">{slide.collector}</span>
                  </span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-charcoal">
                  <Calendar className="w-4 h-4 text-charcoal-muted" strokeWidth={1.5} />
                  <span className="font-sans">
                    <span className="text-charcoal-muted">Date: </span>
                    <span className="font-medium text-ink">{slide.date}</span>
                  </span>
                </div>
              </div>

              <div className="border-t border-charcoal/10 pt-4">
                <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-charcoal-muted mb-2">
                  Collector's Notes
                </p>
                <p
                  id={`lightbox-${slide.descId}`}
                  className="font-sans text-xs text-charcoal leading-relaxed"
                >
                  {slide.notes}
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function Gallery() {
  const containerRef = useRef(null);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [selected]);

  return (
    <div ref={containerRef} className="min-h-screen parchment-texture">
      {/* Page Header */}
      <section className="pt-28 pb-10 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-charcoal-muted mb-3">
            Digital Collection
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-ink mb-4">
            Slide Gallery
          </h1>
          <p className="font-sans text-sm text-charcoal-muted max-w-xl mx-auto leading-relaxed">
            A high-density archive of digitised microscopy slides. Click any
            specimen to view full metadata, magnification data, and original
            collector's notes in an immersive lightbox.
          </p>
        </div>
      </section>

      {/* Masonry Grid */}
      <section className="pb-24 px-4 md:px-6">
        <div className="max-w-6xl mx-auto columns-1 sm:columns-2 lg:columns-3 gap-4">
          {SLIDES.map((slide, index) => (
            <motion.button
              key={slide.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.07 }}
              onClick={() => setSelected(slide)}
              className="block w-full mb-4 break-inside-avoid group cursor-pointer"
            >
              <div className="rounded-xl overflow-hidden border border-black/5 shadow-md shadow-black/5 bg-white/40">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    data-strk-img-id={slide.imgId}
                    data-strk-img={`[${slide.descId}] [${slide.titleId}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={slide.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    style={{ filter: 'grayscale(100%) contrast(1.05)' }}
                  />
                </div>
                <div className="p-4 text-left">
                  <h3
                    id={slide.titleId}
                    className="font-serif text-lg font-semibold text-ink leading-tight"
                  >
                    {slide.title}
                  </h3>
                  <p className="font-sans text-xs text-charcoal-muted mt-1">
                    {slide.magnification} • {slide.collector}
                  </p>
                  <p
                    id={slide.descId}
                    className="sr-only"
                  >
                    {slide.notes}
                  </p>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      <Lightbox slide={selected} onClose={() => setSelected(null)} />
    </div>
  );
}