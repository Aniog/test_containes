import { useState, useRef, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, ZoomIn, Microscope } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import Lightbox from '@/components/Lightbox';
import slides from '@/data/slides';

const categories = ['All', 'Plant Histology', 'Protists', 'Human Cytology'];

// Masonry column heights — vary card sizes for visual rhythm
const cardSizes = ['aspect-[4/3]', 'aspect-[3/4]', 'aspect-[1/1]', 'aspect-[4/3]', 'aspect-[3/4]', 'aspect-[4/3]', 'aspect-[1/1]', 'aspect-[3/4]'];

export default function Gallery() {
  const containerRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSlide, setSelectedSlide] = useState(null);

  const filtered = slides.filter((s) => {
    const matchCat = activeCategory === 'All' || s.category === activeCategory;
    const q = searchQuery.toLowerCase();
    const matchSearch = !q || s.title.toLowerCase().includes(q) || s.scientificName.toLowerCase().includes(q) || s.specimenId.toLowerCase().includes(q);
    return matchCat && matchSearch;
  });

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, [activeCategory, searchQuery]);

  const handlePrev = useCallback(() => {
    if (!selectedSlide) return;
    const idx = filtered.findIndex((s) => s.id === selectedSlide.id);
    setSelectedSlide(filtered[(idx - 1 + filtered.length) % filtered.length]);
  }, [selectedSlide, filtered]);

  const handleNext = useCallback(() => {
    if (!selectedSlide) return;
    const idx = filtered.findIndex((s) => s.id === selectedSlide.id);
    setSelectedSlide(filtered[(idx + 1) % filtered.length]);
  }, [selectedSlide, filtered]);

  return (
    <div className="min-h-screen bg-parchment pt-24">

      {/* Page Header */}
      <section className="py-16 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="section-label mb-4">Digital Slide Archive</p>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <h1 className="font-playfair text-5xl md:text-6xl font-bold text-ink leading-tight">
              The Slide<br />
              <em className="font-light italic">Gallery</em>
            </h1>
            <p className="font-inter text-charcoal max-w-sm leading-relaxed text-sm">
              {slides.length} curated digital slides. Click any specimen to open
              the full-resolution viewer with metadata and collector's annotations.
            </p>
          </div>

          {/* Search & Filter bar */}
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            {/* Search */}
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-graphite" />
              <input
                type="text"
                placeholder="Search specimens…"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 backdrop-blur-md bg-white/40 border border-white/30
                  rounded-full font-inter text-sm text-ink placeholder:text-silver
                  focus:outline-none focus:bg-white/60 focus:border-white/50 transition-all"
              />
            </div>

            {/* Category filters */}
            <div className="flex items-center gap-2 flex-wrap">
              <Filter className="w-4 h-4 text-graphite flex-shrink-0" />
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-1.5 rounded-full font-inter text-xs font-semibold tracking-widest uppercase
                    transition-all duration-200 border
                    ${activeCategory === cat
                      ? 'bg-ink text-parchment border-ink'
                      : 'bg-white/30 text-charcoal border-white/30 hover:bg-white/50 hover:text-ink backdrop-blur-sm'
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="mt-8 h-px bg-gradient-to-r from-ink/20 via-ink/5 to-transparent" />
      </section>

      {/* Masonry Grid */}
      <section ref={containerRef} className="px-6 md:px-12 lg:px-24 pb-24 max-w-7xl mx-auto">
        {filtered.length === 0 ? (
          <div className="text-center py-24">
            <Microscope className="w-12 h-12 text-ash mx-auto mb-4" strokeWidth={1} />
            <p className="font-playfair text-2xl text-graphite mb-2">No specimens found</p>
            <p className="font-inter text-sm text-silver">Try adjusting your search or filter criteria.</p>
          </div>
        ) : (
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-0">
            {filtered.map((slide, idx) => {
              const sizeClass = cardSizes[idx % cardSizes.length];
              return (
                <motion.div
                  key={slide.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: (idx % 8) * 0.05 }}
                  className="break-inside-avoid mb-4"
                >
                  <button
                    onClick={() => setSelectedSlide(slide)}
                    className="group relative w-full overflow-hidden rounded-2xl border border-ash
                      shadow-md hover:shadow-xl transition-all duration-300 block text-left"
                    aria-label={`Open ${slide.title}`}
                  >
                    {/* Image */}
                    <div className={`${sizeClass} w-full overflow-hidden bg-ash/30`}>
                      <img
                        data-strk-img-id={slide.imgId}
                        data-strk-img={`[${slide.descId}] [${slide.titleId}]`}
                        data-strk-img-ratio={sizeClass.includes('3/4') ? '3x4' : sizeClass.includes('1/1') ? '1x1' : '4x3'}
                        data-strk-img-width="600"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        alt={slide.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        style={{ filter: 'grayscale(100%) contrast(1.08)' }}
                      />
                    </div>

                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/50 transition-all duration-300
                      flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300
                        backdrop-blur-sm bg-white/20 border border-white/30 rounded-full p-3">
                        <ZoomIn className="w-5 h-5 text-white" />
                      </div>
                    </div>

                    {/* Bottom metadata strip */}
                    <div className="absolute bottom-0 left-0 right-0 p-3
                      bg-gradient-to-t from-ink/80 via-ink/40 to-transparent
                      translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <p id={slide.titleId} className="font-playfair text-sm font-semibold text-parchment leading-tight mb-0.5">
                        {slide.title}
                      </p>
                      <p id={slide.descId} className="font-mono text-xs text-parchment/60">
                        {slide.specimenId} · {slide.magnification}
                      </p>
                    </div>

                    {/* Category badge */}
                    <div className="absolute top-3 left-3">
                      <span className="font-inter text-xs font-semibold tracking-widest uppercase
                        backdrop-blur-md bg-white/20 border border-white/20 rounded-full px-2.5 py-1 text-white/80">
                        {slide.category.split(' ')[0]}
                      </span>
                    </div>

                    {/* Magnification badge */}
                    <div className="absolute top-3 right-3">
                      <span className="font-mono text-xs backdrop-blur-md bg-ink/40 border border-white/10
                        rounded-full px-2.5 py-1 text-parchment/80">
                        {slide.magnification}
                      </span>
                    </div>
                  </button>
                </motion.div>
              );
            })}
          </div>
        )}

        {/* Results count */}
        {filtered.length > 0 && (
          <div className="mt-10 text-center">
            <p className="font-inter text-xs text-graphite tracking-widest uppercase">
              Displaying {filtered.length} of {slides.length} specimens
            </p>
          </div>
        )}
      </section>

      {/* Lightbox */}
      {selectedSlide && (
        <Lightbox
          slide={selectedSlide}
          slides={filtered}
          onClose={() => setSelectedSlide(null)}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      )}

      {/* Footer */}
      <footer className="bg-ink py-8 px-6">
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
