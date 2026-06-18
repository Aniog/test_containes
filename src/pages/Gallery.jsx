import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Search, SlidersHorizontal, X } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import Lightbox from '@/components/Lightbox';

const allSlides = [
  {
    id: 'MC-0001', imgId: 'gal-thumb-mc001', lightboxImgId: 'gal-lb-mc001',
    titleId: 'gal-title-mc001', notesId: 'gal-notes-mc001',
    title: 'Radiolarian Assemblage', scientificName: 'Polycystinea spp.',
    category: 'Protists', magnification: '200×', collector: 'Dr. E. Haeckel',
    date: '1872', preparation: ['Wet Mount', 'Polarised Light', 'Darkfield'],
    notes: 'Collected during the HMS Challenger expedition at 2,400m depth. Exceptional preservation of siliceous frustules. Radial symmetry clearly visible under polarised illumination.',
    size: 'large',
  },
  {
    id: 'MC-0002', imgId: 'gal-thumb-mc002', lightboxImgId: 'gal-lb-mc002',
    titleId: 'gal-title-mc002', notesId: 'gal-notes-mc002',
    title: 'Onion Root Tip Mitosis', scientificName: 'Allium cepa',
    category: 'Plant Histology', magnification: '400×', collector: 'Prof. M. Schleiden',
    date: '1938', preparation: ['Acetocarmine', 'Squash Prep', 'Brightfield'],
    notes: 'Classic preparation demonstrating all stages of mitotic division. Prophase, metaphase, anaphase, and telophase cells visible in a single field of view.',
    size: 'small',
  },
  {
    id: 'MC-0003', imgId: 'gal-thumb-mc003', lightboxImgId: 'gal-lb-mc003',
    titleId: 'gal-title-mc003', notesId: 'gal-notes-mc003',
    title: 'Cardiac Muscle Fibres', scientificName: 'Homo sapiens — Myocardium',
    category: 'Human Cytology', magnification: '400×', collector: 'Dr. R. Virchow',
    date: '1955', preparation: ['H&E Stain', 'Paraffin Section', '5μm'],
    notes: 'Intercalated discs clearly visible between cardiomyocytes. Branching fibres and central nuclei confirm cardiac muscle identity. Excellent fixation quality.',
    size: 'medium',
  },
  {
    id: 'MC-0004', imgId: 'gal-thumb-mc004', lightboxImgId: 'gal-lb-mc004',
    titleId: 'gal-title-mc004', notesId: 'gal-notes-mc004',
    title: 'Euglena Colony', scientificName: 'Euglena viridis',
    category: 'Protists', magnification: '400×', collector: 'A. van Leeuwenhoek',
    date: '1901', preparation: ['Wet Mount', 'Phase Contrast', 'Lugol\'s Iodine'],
    notes: 'Flagellar movement arrested with Lugol\'s solution. Eyespot (stigma) and chloroplasts clearly visible. Paramylon granules present in cytoplasm.',
    size: 'small',
  },
  {
    id: 'MC-0005', imgId: 'gal-thumb-mc005', lightboxImgId: 'gal-lb-mc005',
    titleId: 'gal-title-mc005', notesId: 'gal-notes-mc005',
    title: 'Pine Leaf Cross-Section', scientificName: 'Pinus sylvestris',
    category: 'Plant Histology', magnification: '100×', collector: 'Prof. N. Grew',
    date: '1947', preparation: ['Safranin-Fast Green', 'Paraffin', '10μm'],
    notes: 'Resin canals, endodermis, and transfusion tissue clearly delineated. Sunken stomata visible in the epidermis. Excellent demonstration of xerophytic adaptations.',
    size: 'large',
  },
  {
    id: 'MC-0006', imgId: 'gal-thumb-mc006', lightboxImgId: 'gal-lb-mc006',
    titleId: 'gal-title-mc006', notesId: 'gal-notes-mc006',
    title: 'Peripheral Blood Smear', scientificName: 'Homo sapiens',
    category: 'Human Cytology', magnification: '1000×', collector: 'Dr. P. Ehrlich',
    date: '1962', preparation: ['Wright\'s Stain', 'Oil Immersion', '100× Obj.'],
    notes: 'Normal differential count. Neutrophils, lymphocytes, monocytes, eosinophils, and basophils all present. Platelet clumping noted at slide edges.',
    size: 'medium',
  },
  {
    id: 'MC-0007', imgId: 'gal-thumb-mc007', lightboxImgId: 'gal-lb-mc007',
    titleId: 'gal-title-mc007', notesId: 'gal-notes-mc007',
    title: 'Diatom Frustule Detail', scientificName: 'Navicula cryptocephala',
    category: 'Protists', magnification: '1000×', collector: 'C.G. Ehrenberg',
    date: '1889', preparation: ['Acid Cleaned', 'Brightfield', 'Oil Immersion'],
    notes: 'Pennate diatom with raphe clearly visible. Striae count approximately 18 per 10μm. Collected from freshwater sediment core, depth 12cm.',
    size: 'small',
  },
  {
    id: 'MC-0008', imgId: 'gal-thumb-mc008', lightboxImgId: 'gal-lb-mc008',
    titleId: 'gal-title-mc008', notesId: 'gal-notes-mc008',
    title: 'Kidney Cortex Section', scientificName: 'Homo sapiens — Renal Cortex',
    category: 'Human Cytology', magnification: '200×', collector: 'Dr. W. Bowman',
    date: '1971', preparation: ['PAS Stain', 'Paraffin', '4μm'],
    notes: 'Glomeruli, Bowman\'s capsule, and proximal convoluted tubules clearly visible. PAS-positive basement membranes highlighted. Excellent tissue architecture preservation.',
    size: 'large',
  },
  {
    id: 'MC-0009', imgId: 'gal-thumb-mc009', lightboxImgId: 'gal-lb-mc009',
    titleId: 'gal-title-mc009', notesId: 'gal-notes-mc009',
    title: 'Moss Leaf Cells', scientificName: 'Mnium hornum',
    category: 'Plant Histology', magnification: '400×', collector: 'Prof. W. Hofmeister',
    date: '1933', preparation: ['Wet Mount', 'Brightfield', 'Unstained'],
    notes: 'Chloroplasts clearly visible in living cells. Cell walls and intercellular spaces well-defined. Midrib costa cells distinguishable from lamina cells.',
    size: 'medium',
  },
  {
    id: 'MC-0010', imgId: 'gal-thumb-mc010', lightboxImgId: 'gal-lb-mc010',
    titleId: 'gal-title-mc010', notesId: 'gal-notes-mc010',
    title: 'Amoeba proteus', scientificName: 'Amoeba proteus',
    category: 'Protists', magnification: '200×', collector: 'A. van Leeuwenhoek',
    date: '1912', preparation: ['Wet Mount', 'Phase Contrast', 'Unstained'],
    notes: 'Pseudopodial extensions clearly visible. Nucleus and food vacuoles identifiable. Specimen collected from freshwater pond sediment. Active locomotion observed prior to fixation.',
    size: 'small',
  },
  {
    id: 'MC-0011', imgId: 'gal-thumb-mc011', lightboxImgId: 'gal-lb-mc011',
    titleId: 'gal-title-mc011', notesId: 'gal-notes-mc011',
    title: 'Compact Bone Osteon', scientificName: 'Homo sapiens — Os Femoris',
    category: 'Human Cytology', magnification: '200×', collector: 'Dr. C. Havers',
    date: '1958', preparation: ['Ground Section', 'Unstained', 'Transmitted Light'],
    notes: 'Haversian canals and concentric lamellae clearly visible. Lacunae containing osteocyte remnants present. Volkmann\'s canals connecting adjacent osteons identifiable.',
    size: 'large',
  },
  {
    id: 'MC-0012', imgId: 'gal-thumb-mc012', lightboxImgId: 'gal-lb-mc012',
    titleId: 'gal-title-mc012', notesId: 'gal-notes-mc012',
    title: 'Spirogyra Filament', scientificName: 'Spirogyra sp.',
    category: 'Plant Histology', magnification: '200×', collector: 'Prof. F. Cohn',
    date: '1926', preparation: ['Wet Mount', 'Brightfield', 'Unstained'],
    notes: 'Characteristic helical chloroplasts clearly visible. Pyrenoids present along chloroplast margins. Conjugation tubes forming between adjacent filaments in this preparation.',
    size: 'medium',
  },
];

const categories = ['All', 'Plant Histology', 'Protists', 'Human Cytology'];

const sizeClasses = {
  small: 'row-span-1',
  medium: 'row-span-2',
  large: 'row-span-2',
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, delay: i * 0.06, ease: 'easeOut' },
  }),
};

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [search, setSearch] = useState('');
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const containerRef = useRef(null);

  const filtered = allSlides.filter((s) => {
    const matchCat = activeCategory === 'All' || s.category === activeCategory;
    const matchSearch = !search || s.title.toLowerCase().includes(search.toLowerCase()) ||
      s.scientificName.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [activeCategory, search]);

  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const prevSlide = () => setLightboxIndex((i) => (i - 1 + filtered.length) % filtered.length);
  const nextSlide = () => setLightboxIndex((i) => (i + 1) % filtered.length);

  return (
    <div className="bg-parchment min-h-screen">
      {/* Page Header */}
      <section className="pt-32 pb-12 px-6 md:px-12 border-b border-fog/40">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="section-label mb-4">Digital Archive · {allSlides.length} Slides</p>
            <h1 className="display-heading text-5xl md:text-6xl font-bold mb-4">
              Slide <span className="italic font-light">Gallery</span>
            </h1>
            <p className="font-sans text-charcoal max-w-xl leading-relaxed">
              A high-density archive of digitised microscopy slides. Click any specimen
              to open the full-resolution viewer with metadata and collector's notes.
            </p>
          </motion.div>

          {/* Controls */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            {/* Search */}
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-silver" strokeWidth={1.5} />
              <input
                type="text"
                placeholder="Search specimens..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 rounded-full border border-fog/60 bg-white/30 backdrop-blur-sm font-sans text-sm text-ink placeholder:text-silver focus:outline-none focus:border-ink/40 transition-colors"
              />
              {search && (
                <button onClick={() => setSearch('')} className="absolute right-3 top-1/2 -translate-y-1/2">
                  <X className="w-3.5 h-3.5 text-silver hover:text-ink transition-colors" />
                </button>
              )}
            </div>

            {/* Category Filter */}
            <div className="flex items-center gap-2 flex-wrap">
              <SlidersHorizontal className="w-4 h-4 text-silver flex-shrink-0" strokeWidth={1.5} />
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`font-sans text-xs px-4 py-2 rounded-full border transition-all duration-200 ${
                    activeCategory === cat
                      ? 'bg-ink text-parchment border-ink'
                      : 'border-ink/25 text-ash hover:border-ink/50 hover:text-ink'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Masonry Grid */}
      <section ref={containerRef} className="py-12 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          {filtered.length === 0 ? (
            <div className="text-center py-24">
              <p className="font-serif text-2xl text-ash italic">No specimens found.</p>
              <p className="font-sans text-sm text-silver mt-2">Try adjusting your search or filter.</p>
            </div>
          ) : (
            <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-0">
              {filtered.map((slide, i) => (
                <motion.div
                  key={slide.id}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-40px' }}
                  variants={fadeUp}
                  className="break-inside-avoid mb-4"
                >
                  <button
                    onClick={() => openLightbox(i)}
                    className="w-full text-left group relative rounded-2xl overflow-hidden border border-fog/40 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 block"
                    aria-label={`Open ${slide.title}`}
                  >
                    {/* Image */}
                    <div className={`relative overflow-hidden bg-fog/20 ${
                      slide.size === 'large' ? 'aspect-[3/4]' :
                      slide.size === 'medium' ? 'aspect-[4/3]' : 'aspect-square'
                    }`}>
                      <img
                        data-strk-img-id={slide.imgId}
                        data-strk-img={`[${slide.notesId}] [${slide.titleId}]`}
                        data-strk-img-ratio={slide.size === 'large' ? '3x4' : slide.size === 'medium' ? '4x3' : '1x1'}
                        data-strk-img-width="500"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        alt={slide.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        style={{ filter: 'grayscale(100%) contrast(1.1)' }}
                      />
                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/30 transition-colors duration-300" />
                    </div>

                    {/* Metadata overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-ink/70 via-ink/20 to-transparent translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <p className="font-mono text-xs text-white/70 mb-0.5">{slide.id} · {slide.magnification}</p>
                      <p id={slide.titleId} className="font-serif text-sm font-semibold text-white leading-tight">{slide.title}</p>
                    </div>

                    {/* Hidden text for image query */}
                    <span id={slide.notesId} className="sr-only">{slide.notes}</span>

                    {/* Category badge */}
                    <div className="absolute top-3 left-3">
                      <span className="font-mono text-xs px-2.5 py-1 rounded-full bg-parchment/80 backdrop-blur-sm text-ash border border-fog/40">
                        {slide.category}
                      </span>
                    </div>
                  </button>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          slide={filtered[lightboxIndex]}
          onClose={closeLightbox}
          onPrev={prevSlide}
          onNext={nextSlide}
          total={filtered.length}
          currentIndex={lightboxIndex}
        />
      )}
    </div>
  );
}
