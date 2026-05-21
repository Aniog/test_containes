import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Search, SlidersHorizontal } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import Lightbox from '../components/Lightbox';

const SLIDES = [
  {
    id: 'SLD-001',
    title: 'Diatom Frustule',
    latinName: 'Pinnularia viridis',
    imgId: 'sld-001-img-2f8b4c',
    imgQuery: 'diatom frustule pinnularia colorful microscopy algae silica',
    magnification: '400×',
    stain: 'Unstained',
    collector: 'Dr. E. Haeckel',
    date: '1887',
    category: 'Protists',
    notes: 'Exceptional bilateral symmetry. Raphe canal clearly visible along the longitudinal axis. Striae count approximately 10 per 10μm.',
    tags: ['Bacillariophyta', 'Marine', 'Siliceous', 'Planktonic'],
    aspect: 'tall',
  },
  {
    id: 'SLD-002',
    title: 'Onion Root Tip — Mitosis',
    latinName: 'Allium cepa — Meristematic Zone',
    imgId: 'sld-002-img-6a1d9e',
    imgQuery: 'onion root tip mitosis cell division colorful microscopy plant biology',
    magnification: '400×',
    stain: 'Acetocarmine',
    collector: 'Prof. R. Virchow',
    date: '1902',
    category: 'Plant Histology',
    notes: 'Multiple stages of mitosis visible in a single field. Metaphase plate particularly well-defined. Recommended for chromosome counting exercises.',
    tags: ['Mitosis', 'Meristem', 'Chromosomes', 'Cell Division'],
    aspect: 'wide',
  },
  {
    id: 'SLD-003',
    title: 'Cardiac Muscle Fibres',
    latinName: 'Homo sapiens — Myocardium',
    imgId: 'sld-003-img-3c7f2a',
    imgQuery: 'cardiac muscle fibres myocardium colorful H&E histology human tissue',
    magnification: '200×',
    stain: 'H&E',
    collector: 'Dr. W. Harvey',
    date: '1923',
    category: 'Human Cytology',
    notes: 'Intercalated discs clearly visible between cardiomyocytes. Branching pattern of fibres demonstrates the syncytial nature of cardiac muscle.',
    tags: ['Cardiac', 'Muscle', 'Intercalated Discs', 'Myocardium'],
    aspect: 'square',
  },
  {
    id: 'SLD-004',
    title: 'Spirogyra — Conjugation',
    latinName: 'Spirogyra sp. — Sexual Reproduction',
    imgId: 'sld-004-img-8e5b1d',
    imgQuery: 'spirogyra conjugation green algae colorful microscopy freshwater filament',
    magnification: '100×',
    stain: 'Iodine',
    collector: 'Dr. A. Fleming',
    date: '1931',
    category: 'Protists',
    notes: 'Conjugation tubes formed between adjacent filaments. Zygospores visible at various stages of development. Spiral chloroplasts intact.',
    tags: ['Chlorophyta', 'Conjugation', 'Freshwater', 'Algae'],
    aspect: 'tall',
  },
  {
    id: 'SLD-005',
    title: 'Compact Bone — Osteon',
    latinName: 'Homo sapiens — Femur Cross-Section',
    imgId: 'sld-005-img-4d2c9f',
    imgQuery: 'compact bone osteon haversian canal colorful microscopy human anatomy',
    magnification: '100×',
    stain: 'Ground Section',
    collector: 'Prof. J. Hunter',
    date: '1895',
    category: 'Human Cytology',
    notes: 'Haversian canals and Volkmann\'s canals clearly delineated. Lacunae containing osteocyte remnants visible within concentric lamellae.',
    tags: ['Bone', 'Osteon', 'Haversian System', 'Compact Bone'],
    aspect: 'wide',
  },
  {
    id: 'SLD-006',
    title: 'Stomata — Epidermis',
    latinName: 'Tradescantia zebrina — Abaxial Surface',
    imgId: 'sld-006-img-7a3e5b',
    imgQuery: 'stomata guard cells plant epidermis colorful microscopy leaf surface',
    magnification: '200×',
    stain: 'Neutral Red',
    collector: 'Dr. S. Brown',
    date: '1956',
    category: 'Plant Histology',
    notes: 'Guard cells in open configuration. Subsidiary cells clearly differentiated from epidermal pavement cells. Chloroplasts visible within guard cells.',
    tags: ['Stomata', 'Epidermis', 'Guard Cells', 'Gas Exchange'],
    aspect: 'square',
  },
  {
    id: 'SLD-007',
    title: 'Amoeba — Pseudopodia',
    latinName: 'Amoeba proteus — Active Locomotion',
    imgId: 'sld-007-img-1b6f4d',
    imgQuery: 'amoeba pseudopodia protozoan colorful microscopy freshwater biology',
    magnification: '400×',
    stain: 'Phase Contrast',
    collector: 'Dr. C. Darwin',
    date: '1878',
    category: 'Protists',
    notes: 'Multiple pseudopodia extended simultaneously. Cytoplasmic streaming (cyclosis) visible. Food vacuoles containing ingested bacteria present.',
    tags: ['Amoebozoa', 'Pseudopodia', 'Phagocytosis', 'Freshwater'],
    aspect: 'tall',
  },
  {
    id: 'SLD-008',
    title: 'Liver Parenchyma',
    latinName: 'Homo sapiens — Hepatic Lobule',
    imgId: 'sld-008-img-9c2a7e',
    imgQuery: 'liver hepatic lobule parenchyma colorful H&E histology human tissue',
    magnification: '100×',
    stain: 'H&E',
    collector: 'Prof. M. Malpighi',
    date: '1911',
    category: 'Human Cytology',
    notes: 'Classic hexagonal lobule architecture. Central vein and portal triads clearly visible. Hepatocyte cords radiating from central vein.',
    tags: ['Liver', 'Hepatocyte', 'Lobule', 'Portal Triad'],
    aspect: 'wide',
  },
  {
    id: 'SLD-009',
    title: 'Pollen Grains — Apertures',
    latinName: 'Lilium longiflorum — Anther',
    imgId: 'sld-009-img-5f8d3c',
    imgQuery: 'pollen grains lily anther colorful microscopy plant reproduction',
    magnification: '200×',
    stain: 'Fuchsin',
    collector: 'Dr. N. Grew',
    date: '1944',
    category: 'Plant Histology',
    notes: 'Tricolporate pollen with distinctive exine sculpturing. Colpi (germination furrows) clearly visible. Intine and exine layers distinguishable.',
    tags: ['Pollen', 'Anther', 'Exine', 'Reproduction'],
    aspect: 'square',
  },
  {
    id: 'SLD-010',
    title: 'Euglena — Flagellate',
    latinName: 'Euglena viridis — Euglenozoa',
    imgId: 'sld-010-img-3a7c2e',
    imgQuery: 'euglena flagellate green algae colorful microscopy freshwater biology',
    magnification: '400×',
    stain: 'Lugol\'s Iodine',
    collector: 'Dr. O. Müller',
    date: '1913',
    category: 'Protists',
    notes: 'Stigma (eyespot) clearly visible as a reddish-orange granule. Chloroplasts arranged in stellate pattern. Paramylon granules present as energy reserves.',
    tags: ['Euglenozoa', 'Flagellate', 'Photosynthetic', 'Freshwater'],
    aspect: 'tall',
  },
  {
    id: 'SLD-011',
    title: 'Kidney Cortex — Nephron',
    latinName: 'Homo sapiens — Renal Cortex',
    imgId: 'sld-011-img-8d4f1b',
    imgQuery: 'kidney cortex nephron glomerulus colorful H&E histology human tissue',
    magnification: '100×',
    stain: 'PAS',
    collector: 'Prof. W. Bowman',
    date: '1907',
    category: 'Human Cytology',
    notes: 'Bowman\'s capsule and glomerular tuft clearly delineated. Proximal and distal convoluted tubules distinguishable by brush border and nuclear position.',
    tags: ['Kidney', 'Nephron', 'Glomerulus', 'Filtration'],
    aspect: 'wide',
  },
  {
    id: 'SLD-012',
    title: 'Moss Leaf — Chloronemal Cells',
    latinName: 'Mnium hornum — Gametophyte',
    imgId: 'sld-012-img-6e9b5c',
    imgQuery: 'moss leaf chloroplast cells colorful microscopy plant biology green',
    magnification: '200×',
    stain: 'Chlorazol Black',
    collector: 'Dr. W. Hooker',
    date: '1938',
    category: 'Plant Histology',
    notes: 'Single-cell-thick leaf lamina allows direct observation of chloroplast arrangement. Costa (midrib) cells clearly differentiated from laminal cells.',
    tags: ['Bryophyta', 'Chloroplast', 'Gametophyte', 'Non-vascular'],
    aspect: 'square',
  },
];

const CATEGORIES = ['All', 'Plant Histology', 'Protists', 'Human Cytology'];

const ASPECT_CLASSES = {
  tall:   'row-span-2',
  wide:   'col-span-1',
  square: 'col-span-1',
};

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [search, setSearch]                 = useState('');
  const [lightboxIdx, setLightboxIdx]       = useState(null);
  const pageRef = useRef(null);

  useEffect(() => {
    if (pageRef.current) ImageHelper.loadImages(strkImgConfig, pageRef.current);
  }, []);

  const filtered = SLIDES.filter(s => {
    const matchCat  = activeCategory === 'All' || s.category === activeCategory;
    const matchSearch = s.title.toLowerCase().includes(search.toLowerCase()) ||
                        s.latinName.toLowerCase().includes(search.toLowerCase()) ||
                        s.tags.some(t => t.toLowerCase().includes(search.toLowerCase()));
    return matchCat && matchSearch;
  });

  const openLightbox = (idx) => setLightboxIdx(idx);
  const closeLightbox = () => setLightboxIdx(null);
  const prevSlide = () => setLightboxIdx(i => (i - 1 + filtered.length) % filtered.length);
  const nextSlide = () => setLightboxIdx(i => (i + 1) % filtered.length);

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
            <p className="section-label mb-3">Digital Archive</p>
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-ink leading-tight mb-6">
              Slide<br />
              <span className="italic font-normal text-graphite">Gallery</span>
            </h1>
            <p className="font-sans text-charcoal max-w-xl leading-relaxed">
              {SLIDES.length} prepared slides catalogued with full metadata, staining protocols,
              and collector's annotations. Click any slide to open the full observation record.
            </p>
          </motion.div>
        </div>
        <div className="absolute inset-0 pointer-events-none opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(#1A1A1A 1px, transparent 1px), linear-gradient(90deg, #1A1A1A 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }} />
        </div>
      </section>

      {/* Filters & search */}
      <section className="sticky top-16 z-30 bg-parchment/90 backdrop-blur-md border-b border-mist/40 py-4 px-6 md:px-10">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-4">
          {/* Search */}
          <div className="relative flex-1 max-w-xs">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-graphite" />
            <input
              type="text"
              placeholder="Search specimens…"
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-white/50 border border-mist/80 rounded-full text-sm font-sans text-ink placeholder-graphite focus:outline-none focus:border-ash focus:bg-white/70 transition-all duration-200"
            />
          </div>

          {/* Category filters */}
          <div className="flex items-center gap-2 overflow-x-auto">
            <SlidersHorizontal className="w-4 h-4 text-graphite shrink-0" />
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`shrink-0 px-4 py-1.5 rounded-full text-xs font-sans font-medium border transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-ink text-white border-ink'
                    : 'border-mist/80 text-charcoal hover:bg-ink/8 hover:border-ink/20'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <span className="text-xs font-mono text-graphite ml-auto shrink-0">
            {filtered.length} slides
          </span>
        </div>
      </section>

      {/* Masonry grid */}
      <section className="py-10 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          {filtered.length === 0 ? (
            <div className="text-center py-24">
              <p className="font-serif text-2xl text-graphite italic">No specimens match your query.</p>
              <p className="font-sans text-sm text-ash mt-2">Refine your search or clear the filter.</p>
            </div>
          ) : (
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
              {filtered.map((slide, idx) => (
                <motion.div
                  key={slide.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5, delay: (idx % 3) * 0.08 }}
                  className="break-inside-avoid"
                >
                  <button
                    onClick={() => openLightbox(idx)}
                    className="group w-full text-left block bg-white/30 border border-mist/60 rounded-2xl overflow-hidden hover:border-ash/80 hover:shadow-xl transition-all duration-400 focus:outline-none focus:ring-2 focus:ring-ink/30"
                    aria-label={`Open ${slide.title}`}
                  >
                    {/* Image */}
                    <div className={`relative overflow-hidden ${
                      slide.aspect === 'tall' ? 'aspect-[3/4]' :
                      slide.aspect === 'wide' ? 'aspect-[4/3]' : 'aspect-square'
                    }`}>
                      <img
                        data-strk-img-id={slide.imgId}
                        data-strk-img={slide.imgQuery}
                        data-strk-img-ratio={slide.aspect === 'tall' ? '3x4' : slide.aspect === 'wide' ? '4x3' : '1x1'}
                        data-strk-img-width="800"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        alt={slide.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

                      {/* Hover overlay */}
                      <div className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                        <div className="bg-white/15 backdrop-blur-md border border-white/25 rounded-xl px-4 py-2 w-full">
                          <p className="font-sans text-xs text-white/80 tracking-wide">Click to open record</p>
                        </div>
                      </div>

                      {/* Magnification badge */}
                      <div className="absolute top-3 left-3 bg-ink/65 backdrop-blur-sm text-white text-xs font-mono px-2.5 py-1 rounded-full">
                        {slide.magnification}
                      </div>
                    </div>

                    {/* Card footer */}
                    <div className="p-4">
                      <p className="section-label mb-1">{slide.category}</p>
                      <h3 className="font-serif text-base font-semibold text-ink leading-snug mb-0.5">
                        {slide.title}
                      </h3>
                      <p className="font-serif text-xs italic text-graphite mb-3">{slide.latinName}</p>
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-xs text-graphite">{slide.id}</span>
                        <span className="font-mono text-xs text-graphite">{slide.stain}</span>
                      </div>
                    </div>
                  </button>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIdx !== null && (
        <Lightbox
          slide={filtered[lightboxIdx]}
          onClose={closeLightbox}
          onPrev={prevSlide}
          onNext={nextSlide}
        />
      )}
    </div>
  );
}
