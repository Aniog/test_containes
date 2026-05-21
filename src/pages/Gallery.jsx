import { useState } from 'react';
import { motion } from 'framer-motion';
import { Filter } from 'lucide-react';
import SlideCard from '../components/gallery/SlideCard';
import Lightbox from '../components/gallery/Lightbox';
import { GALLERY_SLIDES } from '../data/specimens';

const CATEGORIES = ['All', 'Plant Histology', 'Protists', 'Human Cytology'];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filtered = activeCategory === 'All'
    ? GALLERY_SLIDES
    : GALLERY_SLIDES.filter((s) => s.category === activeCategory);

  const openLightbox = (slide) => {
    const idx = filtered.findIndex((s) => s.id === slide.id);
    setLightboxIndex(idx);
  };

  const closeLightbox = () => setLightboxIndex(null);

  const goPrev = () => setLightboxIndex((i) => Math.max(0, i - 1));
  const goNext = () => setLightboxIndex((i) => Math.min(filtered.length - 1, i + 1));

  const activeSlide = lightboxIndex !== null ? filtered[lightboxIndex] : null;

  return (
    <div className="min-h-screen bg-parchment pt-16">
      {/* ── Page header ── */}
      <section className="py-24 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8"
          >
            <div>
              <p className="font-mono-data text-ash mb-4">Digital Archive · {GALLERY_SLIDES.length} Slides</p>
              <h1 className="font-playfair text-5xl lg:text-7xl font-bold text-ink leading-tight">
                Slide<br />
                <span className="italic font-normal">Gallery</span>
              </h1>
            </div>
            <p className="text-charcoal text-sm leading-relaxed max-w-sm lg:text-right">
              A curated archive of high-resolution digital slides. Click any specimen
              to open the full-screen viewer with complete metadata and collector's notes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Filter bar ── */}
      <div className="sticky top-16 z-30 bg-parchment/80 backdrop-blur-md border-b border-silver/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-4 flex items-center gap-3 overflow-x-auto">
          <Filter className="w-4 h-4 text-ash flex-shrink-0" strokeWidth={1.5} />
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`flex-shrink-0 px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-ink text-parchment'
                  : 'bg-white/30 text-charcoal hover:bg-ink/10 hover:text-ink border border-silver/40'
              }`}
            >
              {cat}
            </button>
          ))}
          <span className="ml-auto font-mono-data text-ash text-xs flex-shrink-0">
            {filtered.length} slide{filtered.length !== 1 ? 's' : ''}
          </span>
        </div>
      </div>

      {/* ── Masonry grid ── */}
      <section className="py-12 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            key={activeCategory}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5"
          >
            {filtered.map((slide) => (
              <div key={slide.id} className="break-inside-avoid mb-5">
                <SlideCard slide={slide} onClick={openLightbox} />
              </div>
            ))}
          </motion.div>

          {filtered.length === 0 && (
            <div className="text-center py-24">
              <p className="font-playfair text-2xl text-ash italic">No slides in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* ── Lightbox ── */}
      {activeSlide && (
        <Lightbox
          slide={activeSlide}
          onClose={closeLightbox}
          onPrev={goPrev}
          onNext={goNext}
          hasPrev={lightboxIndex > 0}
          hasNext={lightboxIndex < filtered.length - 1}
        />
      )}
    </div>
  );
}
