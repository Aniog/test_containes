import { useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Lightbox from '@/components/Lightbox'

const slides = [
  {
    id: 'SLD-001',
    title: 'Radiolarian Skeleton',
    description: 'Siliceous skeleton of a polycystine radiolarian showing intricate lattice geometry.',
    magnification: '200x',
    stain: 'Unstained (Phase Contrast)',
    notes: 'Collected from deep-sea sediment core, Pacific Ocean. The geometric precision of the silica framework demonstrates evolutionary optimization for buoyancy.',
    category: 'Marine Protists',
    height: 'tall',
    cells: [
      { x: 300, y: 200, r: 60 },
      { x: 280, y: 180, r: 25 },
      { x: 320, y: 220, r: 20 },
      { x: 260, y: 210, r: 15 },
      { x: 340, y: 190, r: 18 },
    ],
  },
  {
    id: 'SLD-002',
    title: 'Diatom Frustule',
    description: 'Pennate diatom showing bilateral symmetry and raphe structure.',
    magnification: '400x',
    stain: 'Unstained (DIC)',
    notes: 'Freshwater sample from Lake Baikal. The silica frustule exhibits nanoscale pore patterns used in species identification.',
    category: 'Algae',
    height: 'medium',
    cells: [
      { x: 300, y: 200, r: 80 },
      { x: 300, y: 160, r: 10 },
      { x: 300, y: 240, r: 10 },
      { x: 260, y: 200, r: 8 },
      { x: 340, y: 200, r: 8 },
    ],
  },
  {
    id: 'SLD-003',
    title: 'Mitotic Spindle',
    description: 'Onion root tip cells in various stages of mitosis.',
    magnification: '1000x Oil',
    stain: 'Aceto-orcein',
    notes: 'Classic preparation showing prophase, metaphase, anaphase, and telophase. Chromosomes clearly visible at metaphase plate.',
    category: 'Plant Cytology',
    height: 'short',
    cells: [
      { x: 280, y: 180, r: 35 },
      { x: 320, y: 220, r: 30 },
      { x: 260, y: 220, r: 28 },
      { x: 340, y: 180, r: 32 },
    ],
  },
  {
    id: 'SLD-004',
    title: 'Spirogyra Conjugation',
    description: 'Filamentous green alga during sexual reproduction via conjugation tubes.',
    magnification: '100x',
    stain: 'Unstained (Brightfield)',
    notes: 'Living specimen showing scalariform conjugation. Spiral chloroplasts clearly visible in vegetative cells.',
    category: 'Algae',
    height: 'tall',
    cells: [
      { x: 250, y: 150, r: 40 },
      { x: 350, y: 150, r: 40 },
      { x: 250, y: 250, r: 40 },
      { x: 350, y: 250, r: 40 },
    ],
  },
  {
    id: 'SLD-005',
    title: 'Purkinje Neurons',
    description: 'Cerebellar cortex showing elaborate dendritic tree of Purkinje cells.',
    magnification: '200x',
    stain: 'Golgi Silver',
    notes: 'The extensive dendritic arborization receives input from parallel fibers. One of the largest neurons in the human brain.',
    category: 'Neuroscience',
    height: 'medium',
    cells: [
      { x: 300, y: 250, r: 25 },
      { x: 280, y: 180, r: 12 },
      { x: 320, y: 160, r: 10 },
      { x: 260, y: 140, r: 8 },
      { x: 340, y: 140, r: 8 },
      { x: 300, y: 120, r: 6 },
    ],
  },
  {
    id: 'SLD-006',
    title: 'Cardiac Muscle',
    description: 'Longitudinal section showing intercalated discs and branching fibers.',
    magnification: '400x',
    stain: 'H&E',
    notes: 'Note the centrally placed nuclei and intercalated discs at cell junctions. Branching pattern distinguishes cardiac from skeletal muscle.',
    category: 'Human Histology',
    height: 'short',
    cells: [
      { x: 200, y: 200, r: 50 },
      { x: 300, y: 180, r: 45 },
      { x: 400, y: 200, r: 50 },
    ],
  },
  {
    id: 'SLD-007',
    title: 'Volvox Colony',
    description: 'Spherical colony of flagellated cells with daughter colonies visible.',
    magnification: '100x',
    stain: 'Unstained (Darkfield)',
    notes: 'A colonial organism at the boundary between unicellular and multicellular life. Daughter colonies develop within the parent sphere.',
    category: 'Protists',
    height: 'tall',
    cells: [
      { x: 300, y: 200, r: 100 },
      { x: 260, y: 220, r: 30 },
      { x: 340, y: 180, r: 25 },
    ],
  },
  {
    id: 'SLD-008',
    title: 'Bone Ground Section',
    description: 'Compact bone showing Haversian systems (osteons) in cross-section.',
    magnification: '100x',
    stain: 'Unstained (Ground Section)',
    notes: 'Concentric lamellae surround central Haversian canals. Lacunae and canaliculi form the osteocyte communication network.',
    category: 'Human Histology',
    height: 'medium',
    cells: [
      { x: 250, y: 180, r: 45 },
      { x: 350, y: 220, r: 40 },
      { x: 300, y: 150, r: 35 },
    ],
  },
  {
    id: 'SLD-009',
    title: 'Pollen Grain',
    description: 'Lily anther cross-section showing mature pollen grains with exine ornamentation.',
    magnification: '400x',
    stain: 'Safranin-Fast Green',
    notes: 'The sculptured exine wall is species-specific and remarkably resistant to degradation. Used extensively in palynology.',
    category: 'Plant Histology',
    height: 'short',
    cells: [
      { x: 280, y: 190, r: 30 },
      { x: 320, y: 210, r: 28 },
      { x: 300, y: 170, r: 25 },
    ],
  },
]

const Gallery = () => {
  const [selectedIndex, setSelectedIndex] = useState(null)

  const openLightbox = useCallback((index) => {
    setSelectedIndex(index)
    document.body.style.overflow = 'hidden'
  }, [])

  const closeLightbox = useCallback(() => {
    setSelectedIndex(null)
    document.body.style.overflow = ''
  }, [])

  const goNext = useCallback(() => {
    setSelectedIndex((prev) => (prev < slides.length - 1 ? prev + 1 : prev))
  }, [])

  const goPrev = useCallback(() => {
    setSelectedIndex((prev) => (prev > 0 ? prev - 1 : prev))
  }, [])

  const heightClasses = {
    tall: 'h-72 md:h-80',
    medium: 'h-56 md:h-64',
    short: 'h-44 md:h-52',
  }

  return (
    <div className="pt-24 pb-20 px-6 lg:px-16 max-w-7xl mx-auto">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-12 max-w-3xl"
      >
        <p className="font-mono text-xs text-slate uppercase tracking-[0.3em] mb-3">
          Digital Slide Archive
        </p>
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-ink mb-6">
          Interactive Slide Gallery
        </h1>
        <p className="text-charcoal text-lg leading-relaxed">
          Select any preparation to examine at full resolution. Each slide includes
          specimen metadata, magnification data, and collector's observations.
        </p>
      </motion.header>

      {/* Masonry Grid */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
        {slides.map((slide, index) => (
          <motion.button
            key={slide.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            onClick={() => openLightbox(index)}
            className={`w-full break-inside-avoid bg-white/30 backdrop-blur-md border border-white/20 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl hover:bg-white/40 transition-all duration-300 text-left cursor-pointer group block`}
            aria-label={`View slide: ${slide.title}`}
          >
            {/* Image area */}
            <div
              className={`relative overflow-hidden bg-mist ${heightClasses[slide.height]}`}
            >
              <svg
                className="absolute inset-0 w-full h-full opacity-20 group-hover:opacity-30 transition-opacity"
                viewBox="0 0 400 300"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="200" cy="150" r="100" stroke="#1A1A1A" strokeWidth="0.5" fill="none" />
                <circle cx="200" cy="150" r="70" stroke="#1A1A1A" strokeWidth="0.3" fill="none" />
                {slide.cells.map((cell, i) => (
                  <circle
                    key={i}
                    cx={cell.x * 0.67}
                    cy={cell.y * 0.75}
                    r={cell.r * 0.7}
                    stroke="#1A1A1A"
                    strokeWidth="0.6"
                    fill="none"
                  />
                ))}
              </svg>
              <div className="absolute bottom-3 left-3 bg-white/30 backdrop-blur-sm border border-white/20 rounded-lg px-2 py-1">
                <span className="font-mono text-xs text-ink">{slide.magnification}</span>
              </div>
              <div className="absolute top-3 right-3 bg-white/30 backdrop-blur-sm border border-white/20 rounded-lg px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="font-mono text-xs text-ink">View</span>
              </div>
            </div>

            {/* Card content */}
            <div className="p-5">
              <span className="font-mono text-xs text-slate uppercase tracking-wider">
                {slide.category}
              </span>
              <h3 className="font-serif text-lg font-semibold text-ink mt-1 mb-1">
                {slide.title}
              </h3>
              <p className="text-sm text-charcoal line-clamp-2">
                {slide.description}
              </p>
            </div>
          </motion.button>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <Lightbox
            slide={slides[selectedIndex]}
            onClose={closeLightbox}
            onPrev={goPrev}
            onNext={goNext}
            hasPrev={selectedIndex > 0}
            hasNext={selectedIndex < slides.length - 1}
          />
        )}
      </AnimatePresence>
    </div>
  )
}

export default Gallery
