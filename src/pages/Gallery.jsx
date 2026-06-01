import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Search, SlidersHorizontal, Microscope } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import Lightbox from '@/components/Lightbox';

const slides = [
  {
    id: 'SL-001',
    specimenId: 'PH-0012',
    domain: 'Plant Histology',
    title: 'Vascular Bundle — Maize',
    latinName: 'Zea mays',
    magnification: '100×',
    stain: 'Safranin / Fast Green',
    collector: 'Dr. A. Müller',
    date: '14 March 2024',
    imageUrl: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=1200&q=90',
    notes: 'Exceptional clarity of the bundle sheath cells. The lignified secondary walls of the xylem vessels stain intensely with safranin, providing excellent contrast against the green-stained phloem.',
    tags: ['Monocot', 'Vascular', 'Xylem', 'Phloem', 'Transverse Section'],
    size: 'large',
  },
  {
    id: 'SL-002',
    specimenId: 'PH-0031',
    domain: 'Plant Histology',
    title: 'Stomatal Complex',
    latinName: 'Tradescantia sp.',
    magnification: '400×',
    stain: 'Neutral Red',
    collector: 'Prof. L. Chen',
    date: '02 April 2024',
    imageUrl: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=800&q=90',
    notes: 'Guard cell chloroplasts are clearly visible. The subsidiary cells show characteristic shape. Stomatal aperture approximately 8μm at time of preparation.',
    tags: ['Epidermis', 'Stomata', 'Guard Cells', 'Surface Peel'],
    size: 'small',
  },
  {
    id: 'SL-003',
    specimenId: 'PR-0008',
    domain: 'Protists',
    title: 'Paramecium caudatum',
    latinName: 'Ciliophora',
    magnification: '400×',
    stain: 'Wet Mount (Unstained)',
    collector: 'Dr. R. Okafor',
    date: '19 January 2024',
    imageUrl: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?w=800&q=90',
    notes: 'Live specimen exhibiting active ciliary motion. Contractile vacuoles observed pulsating at approximately 6-second intervals. Macronucleus clearly visible as a dense, elongated structure.',
    tags: ['Ciliate', 'Freshwater', 'Protozoa', 'Live Specimen'],
    size: 'small',
  },
  {
    id: 'SL-004',
    specimenId: 'PR-0019',
    domain: 'Protists',
    title: 'Diatom Assemblage',
    latinName: 'Bacillariophyta',
    magnification: '200×',
    stain: 'Acid-cleaned, Unstained',
    collector: 'Dr. S. Patel',
    date: '07 June 2024',
    imageUrl: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=1200&q=90',
    notes: 'Remarkable diversity of frustule morphology. At least 12 distinct species identified. The acid-cleaning process has removed all organic matter, leaving only the siliceous frustules with their intricate ornamentation.',
    tags: ['Diatom', 'Siliceous', 'Frustule', 'Freshwater', 'Diversity'],
    size: 'large',
  },
  {
    id: 'SL-005',
    specimenId: 'HC-0005',
    domain: 'Human Cytology',
    title: 'Peripheral Blood Smear',
    latinName: 'Homo sapiens',
    magnification: '1000×',
    stain: 'Wright-Giemsa',
    collector: 'Dr. M. Torres',
    date: '28 February 2024',
    imageUrl: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=800&q=90',
    notes: 'Normal differential count. Erythrocytes show characteristic central pallor. One neutrophil with 4-lobed nucleus visible. Platelet distribution appears normal. No abnormal cells detected.',
    tags: ['Blood', 'Erythrocyte', 'Neutrophil', 'Haematology', 'Clinical'],
    size: 'medium',
  },
  {
    id: 'SL-006',
    specimenId: 'HC-0022',
    domain: 'Human Cytology',
    title: 'Oesophageal Epithelium',
    latinName: 'Homo sapiens',
    magnification: '200×',
    stain: 'Haematoxylin & Eosin',
    collector: 'Prof. K. Yamamoto',
    date: '11 May 2024',
    imageUrl: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&q=90',
    notes: 'Well-preserved stratified squamous epithelium. The transition from columnar basal cells to flattened superficial squames is clearly delineated. Basement membrane intact throughout.',
    tags: ['Epithelium', 'Stratified', 'Squamous', 'Histopathology'],
    size: 'medium',
  },
  {
    id: 'SL-007',
    specimenId: 'PH-0044',
    domain: 'Plant Histology',
    title: 'Root Cross-Section',
    latinName: 'Ranunculus sp.',
    magnification: '100×',
    stain: 'Safranin / Alcian Blue',
    collector: 'Dr. A. Müller',
    date: '03 September 2024',
    imageUrl: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=800&q=90',
    notes: 'Excellent demonstration of the Casparian strip within the endodermis. The pericycle is clearly visible as a single layer of cells. Primary xylem shows characteristic star-shaped arrangement.',
    tags: ['Root', 'Endodermis', 'Casparian Strip', 'Dicot'],
    size: 'small',
  },
  {
    id: 'SL-008',
    specimenId: 'PR-0033',
    domain: 'Protists',
    title: 'Spirogyra sp.',
    latinName: 'Zygnematophyceae',
    magnification: '100×',
    stain: 'Unstained',
    collector: 'Prof. L. Chen',
    date: '22 July 2024',
    imageUrl: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=1200&q=90',
    notes: 'Characteristic helical chloroplasts with pyrenoids clearly visible. Conjugation tubes observed between adjacent filaments, indicating sexual reproduction. Cell walls show typical cellulosic composition.',
    tags: ['Green Algae', 'Filamentous', 'Chloroplast', 'Conjugation'],
    size: 'large',
  },
  {
    id: 'SL-009',
    specimenId: 'HC-0041',
    domain: 'Human Cytology',
    title: 'Cardiac Muscle',
    latinName: 'Homo sapiens — Myocardium',
    magnification: '400×',
    stain: 'Haematoxylin & Eosin',
    collector: 'Dr. M. Torres',
    date: '16 October 2024',
    imageUrl: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800&q=90',
    notes: 'Intercalated discs clearly visible as dark transverse bands. Branching of cardiomyocytes evident. Central nuclei with prominent nucleoli. Striations well-preserved in this preparation.',
    tags: ['Cardiac', 'Muscle', 'Intercalated Disc', 'Myocardium'],
    size: 'small',
  },
];

const domains = ['All', 'Plant Histology', 'Protists', 'Human Cytology'];

export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [filter, setFilter] = useState('All');
  const [search, setSearch] = useState('');
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const filtered = slides.filter((s) => {
    const matchDomain = filter === 'All' || s.domain === filter;
    const matchSearch = search === '' ||
      s.title.toLowerCase().includes(search.toLowerCase()) ||
      s.latinName.toLowerCase().includes(search.toLowerCase()) ||
      s.tags.some((t) => t.toLowerCase().includes(search.toLowerCase()));
    return matchDomain && matchSearch;
  });

  const openSlide = (index) => setSelectedIndex(index);
  const closeSlide = () => setSelectedIndex(null);
  const prevSlide = () => setSelectedIndex((i) => (i > 0 ? i - 1 : i));
  const nextSlide = () => setSelectedIndex((i) => (i < filtered.length - 1 ? i + 1 : i));

  return (
    <div ref={containerRef} className="min-h-screen bg-parchment pt-24">

      {/* ── Page Header ── */}
      <section className="py-20 px-6 border-b border-ink/8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-2 gap-12 items-end"
          >
            <div>
              <p className="section-label mb-4">Digital Archive</p>
              <h1 className="font-serif text-5xl md:text-6xl font-bold text-ink leading-tight">
                Slide<br />
                <span className="italic">Gallery</span>
              </h1>
            </div>
            <div>
              <p className="font-sans text-charcoal leading-relaxed mb-4">
                A high-density archive of digital microscopy slides. Each preparation
                is catalogued with full metadata, staining protocols, and collector's
                annotations. Click any slide to open the full-screen viewer.
              </p>
              <div className="flex items-center gap-2 text-mid-grey">
                <Microscope className="w-4 h-4" strokeWidth={1.5} />
                <span className="font-mono text-xs tracking-widest uppercase">
                  {slides.length} Slides · 3 Domains · Interactive Viewer
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Search & Filter Bar ── */}
      <section className="py-6 px-6 sticky top-20 z-30 bg-parchment/85 backdrop-blur-md border-b border-ink/8">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
          {/* Search */}
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-mid-grey" strokeWidth={1.5} />
            <input
              type="text"
              placeholder="Search specimens, taxa, tags…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/40 border border-ink/12
                         font-sans text-sm text-ink placeholder-mid-grey
                         focus:outline-none focus:border-ink/30 focus:bg-white/60
                         transition-all duration-200"
            />
          </div>

          {/* Domain filters */}
          <div className="flex items-center gap-2 overflow-x-auto">
            <SlidersHorizontal className="w-4 h-4 text-mid-grey flex-shrink-0" strokeWidth={1.5} />
            {domains.map((domain) => (
              <button
                key={domain}
                onClick={() => setFilter(domain)}
                className={`whitespace-nowrap px-4 py-2 rounded-full font-sans text-xs font-medium
                             transition-all duration-200
                             ${filter === domain
                               ? 'bg-ink text-parchment'
                               : 'border border-ink/15 text-charcoal hover:bg-ink/8'
                             }`}
              >
                {domain}
              </button>
            ))}
          </div>

          <div className="ml-auto flex-shrink-0">
            <span className="font-mono text-xs text-mid-grey">
              {filtered.length} slide{filtered.length !== 1 ? 's' : ''}
            </span>
          </div>
        </div>
      </section>

      {/* ── Masonry Grid ── */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          {filtered.length === 0 ? (
            <div className="text-center py-24">
              <p className="font-serif text-2xl text-mid-grey italic mb-2">No specimens found</p>
              <p className="font-sans text-sm text-mid-grey">Try adjusting your search or filter criteria.</p>
            </div>
          ) : (
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
              {filtered.map((slide, index) => (
                <motion.div
                  key={slide.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (index % 6) * 0.08, duration: 0.6 }}
                  className="break-inside-avoid"
                >
                  <button
                    onClick={() => openSlide(index)}
                    className="group w-full text-left glass-card rounded-2xl overflow-hidden
                               hover:shadow-xl hover:shadow-black/12 hover:-translate-y-1
                               transition-all duration-400 cursor-pointer"
                    aria-label={`Open slide: ${slide.title}`}
                  >
                    {/* Image */}
                    <div className={`relative overflow-hidden bg-pale-grey
                      ${slide.size === 'large' ? 'aspect-[4/3]' : slide.size === 'medium' ? 'aspect-square' : 'aspect-[3/2]'}`}
                    >
                      <img
                        src={slide.imageUrl}
                        alt={slide.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        
                      />

                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/30 transition-all duration-400
                                      flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300
                                        glass-card rounded-xl px-4 py-2 border-white/30">
                          <span className="font-mono text-xs text-ink tracking-widest uppercase">
                            Open Slide
                          </span>
                        </div>
                      </div>

                      {/* Badges */}
                      <div className="absolute top-3 left-3 bg-ink/70 backdrop-blur-sm rounded-lg px-2.5 py-1">
                        <span className="font-mono text-[9px] tracking-widest uppercase text-parchment/80">
                          {slide.domain.split(' ')[0]}
                        </span>
                      </div>
                      <div className="absolute top-3 right-3 glass-card rounded-lg px-2.5 py-1 border-white/30">
                        <span className="font-mono text-xs font-medium text-ink">{slide.magnification}</span>
                      </div>
                    </div>

                    {/* Card info */}
                    <div className="p-4">
                      <p className="font-mono text-[9px] tracking-widest uppercase text-mid-grey mb-1">
                        {slide.specimenId}
                      </p>
                      <h3 className="font-serif text-base font-semibold text-ink leading-tight mb-1">
                        {slide.title}
                      </h3>
                      <p className="font-sans text-xs italic text-mid-grey mb-3">{slide.latinName}</p>
                      <div className="flex flex-wrap gap-1.5">
                        {slide.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 rounded-full bg-ink/5 border border-ink/8
                                       font-mono text-[9px] tracking-wide text-charcoal"
                          >
                            {tag}
                          </span>
                        ))}
                        {slide.tags.length > 3 && (
                          <span className="font-mono text-[9px] text-mid-grey self-center">
                            +{slide.tags.length - 3}
                          </span>
                        )}
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
      {selectedIndex !== null && (
        <Lightbox
          slide={filtered[selectedIndex]}
          onClose={closeSlide}
          onPrev={prevSlide}
          onNext={nextSlide}
          hasPrev={selectedIndex > 0}
          hasNext={selectedIndex < filtered.length - 1}
        />
      )}

      {/* ── Footer ── */}
      <footer className="bg-ink border-t border-white/5 py-8 px-6 mt-8">
        <div className="max-w-6xl mx-auto text-center">
          <p className="font-mono text-[10px] text-parchment/20 tracking-widest uppercase">
            MicroCosmos · Digital Slide Archive · © 2026
          </p>
        </div>
      </footer>
    </div>
  );
}
