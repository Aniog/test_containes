import { useState, useRef, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Search, X } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import Lightbox from '@/components/Lightbox';

const SLIDES = [
  {
    id: 'sl001', category: 'Plant Histology', title: 'Dicot Root T.S.',
    latinName: 'Ranunculus acris', specimenId: 'PLT-RA-001',
    magnification: '100×', stain: 'Safranin / Fast Green',
    section: 'Transverse', collector: 'Dr. A. Hartmann', date: '14 Mar 1998',
    notes: 'Excellent endodermis with Casparian strips clearly visible. Pericycle intact. Recommend for teaching vascular cylinder architecture.',
    src: 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 4 3\'/%3E',
    tags: ['root', 'dicot', 'vascular'],
  },
  {
    id: 'sl002', category: 'Protists', title: 'Diatom Frustule Array',
    latinName: 'Bacillariophyta spp.', specimenId: 'PRO-DIA-003',
    magnification: '400×', stain: 'Unstained',
    section: 'Whole Mount', collector: 'M. Voss', date: '02 Sep 2001',
    notes: 'Striae count approximately 18 per 10 µm. Raphe system well-preserved. Ideal for demonstrating siliceous frustule symmetry.',
    src: 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 4 3\'/%3E',
    tags: ['diatom', 'silica', 'frustule'],
  },
  {
    id: 'sl003', category: 'Human Cytology', title: 'Cardiac Muscle Fibres',
    latinName: 'Homo sapiens — Myocardium', specimenId: 'HUM-CAR-009',
    magnification: '400×', stain: 'H&E',
    section: 'Longitudinal', collector: 'Prof. L. Brennan', date: '07 Jan 2005',
    notes: 'Intercalated discs clearly resolved at this magnification. Branching pattern of cardiomyocytes well-demonstrated. No pathological changes observed.',
    src: 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 4 3\'/%3E',
    tags: ['cardiac', 'muscle', 'myocardium'],
  },
  {
    id: 'sl004', category: 'Plant Histology', title: 'Leaf Epidermis & Stomata',
    latinName: 'Tradescantia zebrina', specimenId: 'PLT-TZ-004',
    magnification: '200×', stain: 'Neutral Red',
    section: 'Surface Peel', collector: 'Dr. A. Hartmann', date: '22 Jun 2003',
    notes: 'Guard cells with chloroplasts visible. Subsidiary cells clearly defined. Stomatal density approximately 45 per mm². Excellent teaching preparation.',
    src: 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 4 3\'/%3E',
    tags: ['leaf', 'stomata', 'epidermis'],
  },
  {
    id: 'sl005', category: 'Protists', title: 'Paramecium Whole Mount',
    latinName: 'Paramecium caudatum', specimenId: 'PRO-PAR-011',
    magnification: '200×', stain: 'Silver Nitrate',
    section: 'Whole Mount', collector: 'T. Nakamura', date: '15 Nov 2007',
    notes: 'Cilia impregnated with silver. Macronucleus and micronucleus both visible. Oral groove and cytostome clearly delineated.',
    src: 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 4 3\'/%3E',
    tags: ['paramecium', 'cilia', 'protozoa'],
  },
  {
    id: 'sl006', category: 'Human Cytology', title: 'Peripheral Blood Smear',
    latinName: 'Homo sapiens — Erythrocytes & Leucocytes', specimenId: 'HUM-BLD-022',
    magnification: '400×', stain: 'Giemsa',
    section: 'Smear', collector: 'Prof. L. Brennan', date: '30 Apr 2010',
    notes: 'Normal differential count. Neutrophils with characteristic multilobed nuclei. Erythrocytes show central pallor. No abnormal cells detected.',
    src: 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 4 3\'/%3E',
    tags: ['blood', 'erythrocyte', 'leucocyte'],
  },
  {
    id: 'sl007', category: 'Plant Histology', title: 'Pollen Grain Morphology',
    latinName: 'Lilium longiflorum', specimenId: 'PLT-LL-007',
    magnification: '400×', stain: 'Acetocarmine',
    section: 'Whole Mount', collector: 'Dr. A. Hartmann', date: '08 May 2004',
    notes: 'Trinucleate pollen at anthesis. Exine sculpturing (reticulate pattern) clearly visible. Generative nucleus and tube nucleus distinguishable.',
    src: 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 4 3\'/%3E',
    tags: ['pollen', 'lily', 'reproduction'],
  },
  {
    id: 'sl008', category: 'Human Cytology', title: 'Hyaline Cartilage',
    latinName: 'Homo sapiens — Tracheal Ring', specimenId: 'HUM-CAR-031',
    magnification: '200×', stain: 'H&E',
    section: 'Transverse', collector: 'Prof. L. Brennan', date: '19 Aug 2008',
    notes: 'Chondrocytes in lacunae clearly visible. Territorial and interterritorial matrix distinguishable. Perichondrium intact at section margins.',
    src: 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 4 3\'/%3E',
    tags: ['cartilage', 'connective tissue', 'trachea'],
  },
  {
    id: 'sl009', category: 'Protists', title: 'Radiolarian Test Detail',
    latinName: 'Acantharia spp.', specimenId: 'PRO-RAD-019',
    magnification: '400×', stain: 'Unstained',
    section: 'Whole Mount', collector: 'R/V Challenger Archive', date: '1876 (Archive)',
    notes: 'Strontium sulphate spicules arranged in Müller\'s law configuration. Exceptional preservation from deep-sea sediment. Historical archive specimen.',
    src: 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 4 3\'/%3E',
    tags: ['radiolarian', 'spicule', 'marine'],
  },
];

const CATEGORIES = ['All', 'Plant Histology', 'Protists', 'Human Cytology'];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [loadedSrcs, setLoadedSrcs] = useState({});
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  // Capture the resolved image src from the DOM after ImageHelper runs
  const captureLoadedSrc = useCallback((id, src) => {
    setLoadedSrcs((prev) => (prev[id] === src ? prev : { ...prev, [id]: src }));
  }, []);

  const filtered = SLIDES.filter((s) => {
    const matchCat = activeCategory === 'All' || s.category === activeCategory;
    const q = searchQuery.toLowerCase();
    const matchSearch =
      !q ||
      s.title.toLowerCase().includes(q) ||
      s.latinName.toLowerCase().includes(q) ||
      s.tags.some((t) => t.includes(q));
    return matchCat && matchSearch;
  });

  const openSlide = (slide) => {
    const idx = filtered.findIndex((s) => s.id === slide.id);
    setSelectedIndex(idx);
  };

  // Merge loaded srcs into the slide data for the lightbox
  const filteredWithSrcs = filtered.map((s) => ({
    ...s,
    src: loadedSrcs[s.id] || s.src,
  }));

  return (
    <div className="bg-parchment min-h-screen" ref={containerRef}>
      {/* Page Header */}
      <section className="pt-32 pb-12 px-6 md:px-10 border-b border-silver/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="label-caps mb-4">Digital Archive · {SLIDES.length} Slides</p>
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-ink leading-tight mb-4">
              Slide<br />
              <span className="italic">Gallery</span>
            </h1>
            <p className="body-text max-w-xl text-charcoal/80">
              High-resolution grayscale micrographs from the MicroCosmos permanent collection.
              Click any slide to open the full-screen viewer with complete metadata.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="sticky top-16 z-30 bg-parchment/85 backdrop-blur-md border-b border-silver/30">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-4 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          {/* Category pills */}
          <div className="flex gap-2 flex-wrap">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-sans font-medium tracking-wide transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-ink text-parchment'
                    : 'bg-white/30 border border-silver/40 text-charcoal hover:bg-white/50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-graphite" />
            <input
              type="text"
              placeholder="Search specimens…"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-8 py-2 bg-white/30 backdrop-blur-sm border border-silver/40 rounded-full text-xs font-sans text-ink placeholder-graphite/70 focus:outline-none focus:border-ink/40 transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-graphite hover:text-ink"
              >
                <X className="w-3 h-3" />
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Masonry Grid */}
      <section className="py-10 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          {filtered.length === 0 ? (
            <div className="text-center py-24">
              <p className="font-serif text-2xl text-graphite italic">No specimens found.</p>
              <p className="label-caps mt-2 text-silver">Try adjusting your search or filter</p>
            </div>
          ) : (
            <motion.div
              layout
              className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5"
            >
              {filteredWithSrcs.map((slide, i) => (
                <SlideCard
                  key={slide.id}
                  slide={slide}
                  index={i}
                  onClick={() => openSlide(slide)}
                  onImageLoad={captureLoadedSrc}
                />
              ))}
            </motion.div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {selectedIndex !== null && (
        <Lightbox
          slide={filteredWithSrcs[selectedIndex]}
          onClose={() => setSelectedIndex(null)}
          onPrev={() => setSelectedIndex((i) => Math.max(0, i - 1))}
          onNext={() => setSelectedIndex((i) => Math.min(filteredWithSrcs.length - 1, i + 1))}
          hasPrev={selectedIndex > 0}
          hasNext={selectedIndex < filteredWithSrcs.length - 1}
        />
      )}
    </div>
  );
}

function SlideCard({ slide, index, onClick, onImageLoad }) {
  const heights = ['aspect-[4/3]', 'aspect-[3/4]', 'aspect-[1/1]', 'aspect-[4/3]', 'aspect-[3/4]'];
  const aspectClass = heights[index % heights.length];

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: (index % 6) * 0.07 }}
      whileHover={{ y: -3 }}
      className="break-inside-avoid mb-5 cursor-pointer group"
      onClick={onClick}
    >
      <div className="relative overflow-hidden rounded-xl border border-silver/30 shadow-sm hover:shadow-md transition-shadow duration-300 bg-mist/20">
        {/* Image */}
        <div className={`${aspectClass} relative overflow-hidden`}>
          <img
            src={slide.src}
            alt={slide.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            style={{ filter: 'grayscale(100%) contrast(1.1)' }}
            data-strk-img-id={`gallery-img-${slide.id}`}
            data-strk-img={`[gallery-title-${slide.id}] [gallery-cat-${slide.id}] microscopy biology`}
            data-strk-img-ratio="4x3"
            data-strk-img-width="600"
            onLoad={(e) => {
              const src = e.currentTarget.src;
              if (src && !src.startsWith('data:')) onImageLoad?.(slide.id, src);
            }}
          />

          {/* Hover overlay */}
          <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/30 transition-colors duration-300 flex items-center justify-center">
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-4 py-2">
              <span className="font-sans text-xs text-parchment font-medium tracking-wide">View Slide</span>
            </div>
          </div>

          {/* Magnification badge */}
          <div className="absolute top-3 left-3 bg-ink/70 backdrop-blur-sm rounded-full px-2.5 py-1">
            <span className="font-mono text-[10px] text-parchment">{slide.magnification}</span>
          </div>
        </div>

        {/* Card footer */}
        <div className="p-4">
          <p
            id={`gallery-cat-${slide.id}`}
            className="label-caps text-[10px] text-graphite mb-1"
          >
            {slide.category}
          </p>
          <h3
            id={`gallery-title-${slide.id}`}
            className="font-serif text-sm font-semibold text-ink leading-tight mb-1"
          >
            {slide.title}
          </h3>
          <p className="font-serif text-xs italic text-graphite">{slide.latinName}</p>

          <div className="mt-3 pt-3 border-t border-silver/30 flex items-center justify-between">
            <span className="meta-text">{slide.specimenId}</span>
            <span className="meta-text">{slide.stain}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
