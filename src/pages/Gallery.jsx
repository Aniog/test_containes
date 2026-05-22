import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, Microscope } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import Lightbox from '@/components/Lightbox';

const SLIDES = [
  {
    id: 'SL-001',
    specimenId: 'SL-001',
    name: 'Radiolarian Lattice',
    latinName: 'Aulacantha scolymantha',
    domain: 'Protists',
    magnification: '400×',
    stain: 'Unstained',
    method: 'Scanning Electron Microscopy',
    collector: 'Dr. E. Haeckel Archive',
    date: 'March 2024',
    notes: 'Exceptional preservation of the siliceous skeleton. The radial spines exhibit characteristic branching at the distal termini. Collected from deep-sea sediment core at 2,400 m depth.',
    imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Haeckel_Radiolaria.jpg/800px-Haeckel_Radiolaria.jpg',
    imgQuery: 'radiolarian silica skeleton electron microscopy deep sea organism',
    imgCtx: 'protist radiolarian specimen scientific illustration',
    size: 'tall',
  },
  {
    id: 'SL-002',
    specimenId: 'SL-002',
    name: 'Maize Stem Cross-Section',
    latinName: 'Zea mays',
    domain: 'Plant Histology',
    magnification: '100×',
    stain: 'Safranin-O / Fast Green',
    method: 'Bright-Field Light Microscopy',
    collector: 'Laboratory Archive',
    date: 'January 2024',
    notes: 'Vascular bundles clearly delineated by Safranin staining of lignified cell walls. Sclerenchyma sheath visible surrounding each bundle. Parenchyma ground tissue shows typical thin-walled morphology.',
    imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Stem_histology_cross_section.jpg/800px-Stem_histology_cross_section.jpg',
    imgQuery: 'maize corn stem cross section histology vascular bundle xylem phloem',
    imgCtx: 'plant histology botanical microscopy specimen',
    size: 'wide',
  },
  {
    id: 'SL-003',
    specimenId: 'SL-003',
    name: 'Human Blood Smear',
    latinName: 'Homo sapiens',
    domain: 'Human Cytology',
    magnification: '1000×',
    stain: "Wright's Stain",
    method: 'Oil Immersion Light Microscopy',
    collector: 'Clinical Laboratory',
    date: 'February 2024',
    notes: 'Peripheral blood smear showing normal erythrocyte morphology. Biconcave disc shape clearly visible. Occasional neutrophil with characteristic multi-lobed nucleus. Platelet aggregates present.',
    imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Sickle_cell_01.jpg/800px-Sickle_cell_01.jpg',
    imgQuery: 'human blood smear erythrocyte red blood cells microscopy Wright stain',
    imgCtx: 'human cytology hematology specimen',
    size: 'square',
  },
  {
    id: 'SL-004',
    specimenId: 'SL-004',
    name: 'Paramecium Ciliates',
    latinName: 'Paramecium caudatum',
    domain: 'Protists',
    magnification: '200×',
    stain: 'Methyl Green',
    method: 'Phase Contrast Microscopy',
    collector: 'Laboratory Archive',
    date: 'April 2024',
    notes: 'Living culture preparation. Cilia visible along the entire cell periphery. Macronucleus and micronucleus distinguishable. Contractile vacuoles observed in active pulsation cycle.',
    imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Paramecium_caudatum_Ehrenberg%2C_1833.jpg/800px-Paramecium_caudatum_Ehrenberg%2C_1833.jpg',
    imgQuery: 'paramecium ciliate protozoa microscopy phase contrast unicellular',
    imgCtx: 'protist taxonomy specimen biology',
    size: 'square',
  },
  {
    id: 'SL-005',
    specimenId: 'SL-005',
    name: 'Diatom Frustule Array',
    latinName: 'Coscinodiscus radiatus',
    domain: 'Protists',
    magnification: '400×',
    stain: 'Unstained',
    method: 'Differential Interference Contrast',
    collector: 'Marine Biology Station',
    date: 'May 2024',
    notes: 'Cleaned frustule preparation from marine sediment. The radial pore pattern (areolae) is exceptionally regular, with approximately 8 areolae per 10 μm. Hyaline margin clearly defined.',
    imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Diatoms_through_the_microscope.jpg/800px-Diatoms_through_the_microscope.jpg',
    imgQuery: 'diatom frustule silica shell microscopy marine biology radial pattern',
    imgCtx: 'diatom protist specimen scientific',
    size: 'tall',
  },
  {
    id: 'SL-006',
    specimenId: 'SL-006',
    name: 'Skeletal Muscle Fibres',
    latinName: 'Homo sapiens — Biceps brachii',
    domain: 'Human Cytology',
    magnification: '200×',
    stain: 'Haematoxylin & Eosin',
    method: 'Bright-Field Light Microscopy',
    collector: 'Anatomy Department',
    date: 'March 2024',
    notes: 'Longitudinal section showing characteristic cross-striations of sarcomeres. Multiple peripheral nuclei visible. A-bands and I-bands clearly resolved at this magnification.',
    imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Skeletal_muscle_-_cross_section%2C_H%26E_%281%29.jpg/800px-Skeletal_muscle_-_cross_section%2C_H%26E_%281%29.jpg',
    imgQuery: 'skeletal muscle fibre cross section haematoxylin eosin histology sarcomere',
    imgCtx: 'human cytology muscle tissue specimen',
    size: 'wide',
  },
  {
    id: 'SL-007',
    specimenId: 'SL-007',
    name: 'Sunflower Root Section',
    latinName: 'Helianthus annuus',
    domain: 'Plant Histology',
    magnification: '200×',
    stain: 'Toluidine Blue',
    method: 'Bright-Field Light Microscopy',
    collector: 'Botany Laboratory',
    date: 'February 2024',
    notes: 'Primary root cross-section showing endodermis with Casparian strip. Pericycle layer intact. Protoxylem and metaxylem vessels distinguishable by cell wall thickness.',
    imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Stem_histology_cross_section.jpg/800px-Stem_histology_cross_section.jpg',
    imgQuery: 'sunflower root cross section endodermis Casparian strip toluidine blue',
    imgCtx: 'plant histology root anatomy specimen',
    size: 'square',
  },
  {
    id: 'SL-008',
    specimenId: 'SL-008',
    name: 'Spirogyra Conjugation',
    latinName: 'Spirogyra sp.',
    domain: 'Protists',
    magnification: '100×',
    stain: 'Unstained',
    method: 'Bright-Field Light Microscopy',
    collector: 'Freshwater Biology Lab',
    date: 'April 2024',
    notes: 'Ladder-type conjugation observed between adjacent filaments. Zygospores visible at various stages of formation. Characteristic helical chloroplasts clearly resolved.',
    imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Paramecium_caudatum_Ehrenberg%2C_1833.jpg/800px-Paramecium_caudatum_Ehrenberg%2C_1833.jpg',
    imgQuery: 'spirogyra conjugation filamentous algae chloroplast microscopy freshwater',
    imgCtx: 'green algae protist specimen biology',
    size: 'square',
  },
  {
    id: 'SL-009',
    specimenId: 'SL-009',
    name: 'Purkinje Cell Network',
    latinName: 'Homo sapiens — Cerebellum',
    domain: 'Human Cytology',
    magnification: '400×',
    stain: 'Golgi Silver Impregnation',
    method: 'Bright-Field Light Microscopy',
    collector: 'Neuroscience Department',
    date: 'January 2024',
    notes: 'Golgi-stained preparation revealing the elaborate dendritic arborisation of Purkinje cells. The planar fan-like dendritic tree is characteristic of this cell type. Axon hillock visible.',
    imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Sickle_cell_01.jpg/800px-Sickle_cell_01.jpg',
    imgQuery: 'Purkinje cell cerebellum Golgi silver stain neuron dendrite microscopy',
    imgCtx: 'nervous tissue neuroscience cytology specimen',
    size: 'tall',
  },
];

const FILTERS = ['All', 'Plant Histology', 'Protists', 'Human Cytology'];

const sizeClasses = {
  tall: 'row-span-2',
  wide: 'col-span-2 md:col-span-1',
  square: '',
};

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSlide, setSelectedSlide] = useState(null);
  const containerRef = useRef(null);

  const filtered = SLIDES.filter((s) => {
    const matchesDomain = activeFilter === 'All' || s.domain === activeFilter;
    const matchesSearch =
      !searchQuery ||
      s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.latinName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.domain.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesDomain && matchesSearch;
  });

  useEffect(() => {
    if (containerRef.current) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  return (
    <div className="min-h-screen bg-parchment" ref={containerRef}>
      {/* Page Header */}
      <div className="pt-32 pb-12 px-6 md:px-12 border-b border-ash">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="section-label mb-4">Digital Archive</p>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
              <h1 className="font-playfair text-5xl md:text-6xl font-bold text-ink leading-tight">
                Slide
                <br />
                <em className="font-light">Gallery</em>
              </h1>
              <p className="font-inter text-base text-charcoal max-w-sm leading-relaxed">
                {SLIDES.length} curated digital slides. Click any specimen to open
                the full-resolution viewer with metadata.
              </p>
            </div>

            {/* Search + Filter Bar */}
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Search */}
              <div className="relative flex-1 max-w-sm">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-graphite" />
                <input
                  type="text"
                  placeholder="Search specimens…"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 bg-white/40 backdrop-blur-sm border border-ash rounded-full font-inter text-sm text-ink placeholder:text-silver focus:outline-none focus:border-charcoal focus:bg-white/60 transition-all"
                />
              </div>

              {/* Filter Pills */}
              <div className="flex items-center gap-2 flex-wrap">
                <Filter className="w-4 h-4 text-graphite flex-shrink-0" />
                {FILTERS.map((f) => (
                  <button
                    key={f}
                    onClick={() => setActiveFilter(f)}
                    className={`px-4 py-2 rounded-full font-inter text-xs font-medium tracking-wide transition-all duration-200 ${
                      activeFilter === f
                        ? 'bg-ink text-parchment'
                        : 'bg-white/40 text-charcoal border border-ash hover:bg-white/60 hover:text-ink'
                    }`}
                  >
                    {f}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Masonry Grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
        {filtered.length === 0 ? (
          <div className="text-center py-24">
            <Microscope className="w-12 h-12 text-ash mx-auto mb-4" strokeWidth={1} />
            <p className="font-playfair text-2xl text-graphite mb-2">No specimens found</p>
            <p className="font-inter text-sm text-silver">Try adjusting your search or filter criteria.</p>
          </div>
        ) : (
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
            {filtered.map((slide, i) => (
              <SlideCard
                key={slide.id}
                slide={slide}
                index={i}
                onClick={() => setSelectedSlide(slide)}
              />
            ))}
          </div>
        )}
      </div>

      {/* Lightbox */}
      {selectedSlide && (
        <Lightbox
          slide={selectedSlide}
          slides={filtered}
          onClose={() => setSelectedSlide(null)}
          onNavigate={setSelectedSlide}
        />
      )}
    </div>
  );
}

function SlideCard({ slide, index, onClick }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      className="break-inside-avoid mb-5"
    >
      <button
        onClick={onClick}
        className="w-full text-left group cursor-pointer"
        aria-label={`Open ${slide.name}`}
      >
        <div className="relative overflow-hidden rounded-2xl bg-bone border border-ash shadow-glass hover:shadow-glass-lg transition-all duration-300">
          {/* Image */}
          <div
            className={`relative overflow-hidden ${
              slide.size === 'tall' ? 'aspect-[3/4]' : slide.size === 'wide' ? 'aspect-[16/9]' : 'aspect-square'
            }`}
          >
            <img
              src={slide.imgSrc}
              alt={slide.name}
              className="w-full h-full object-cover grayscale-img group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center">
                <Microscope className="w-4 h-4 text-white" strokeWidth={1.5} />
              </div>
            </div>
          </div>

          {/* Metadata footer */}
          <div className="p-4">
            <div className="flex items-start justify-between gap-2 mb-1">
              <h3 className="font-playfair text-base font-semibold text-ink leading-snug">
                {slide.name}
              </h3>
              <span className="flex-shrink-0 px-2 py-0.5 rounded-full bg-ink/8 font-mono text-xs text-graphite">
                {slide.magnification}
              </span>
            </div>
            <p className="font-playfair text-xs italic text-graphite mb-2">{slide.latinName}</p>
            <div className="flex items-center gap-2">
              <span className="font-inter text-xs text-silver">{slide.specimenId}</span>
              <span className="text-ash">·</span>
              <span className="font-inter text-xs text-silver">{slide.domain}</span>
            </div>
          </div>
        </div>
      </button>
    </motion.div>
  );
}
