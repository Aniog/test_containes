import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Search, SlidersHorizontal, Microscope } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import Lightbox from '@/components/Lightbox';
import { SLIDES, SLIDE_CATEGORIES } from '@/data/slides';

function SlideThumb({ slide, onClick }) {
  return (
    <motion.div
      className="masonry-item cursor-pointer group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      whileHover={{ y: -3 }}
      transition={{ duration: 0.3 }}
      onClick={() => onClick(slide)}
    >
      <div className="rounded-xl overflow-hidden border border-silver/40 shadow-sm relative">
        <img
          data-strk-img-id={slide.imgId}
          data-strk-img={`[${slide.descId}] [${slide.titleId}]`}
          data-strk-img-ratio="4x3"
          data-strk-img-width="500"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={slide.title}
          className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
          style={{ filter: 'grayscale(1) contrast(1.15)' }}
        />
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/30 transition-colors duration-300 flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-10 h-10 rounded-full glass-card flex items-center justify-center">
            <Search className="w-4 h-4 text-parchment" />
          </div>
        </div>
      </div>
      {/* Slide info */}
      <div className="px-1 pt-2.5 pb-1">
        <p className="font-playfair text-sm font-semibold text-ink leading-snug" id={slide.titleId}>
          {slide.title}
        </p>
        <p className="font-inter text-xs text-graphite mt-0.5 italic" id={slide.descId}>
          {slide.specimen}
        </p>
        <div className="flex items-center justify-between mt-1.5">
          <span className="specimen-label text-[0.58rem]">{slide.id}</span>
          <span className="specimen-label text-[0.58rem]">{slide.magnification}</span>
        </div>
      </div>
    </motion.div>
  );
}

export default function Gallery() {
  const containerRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState('All');
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState(null);

  const filtered = SLIDES.filter((s) => {
    const matchCat = activeCategory === 'All' || s.category === activeCategory;
    const matchQ = !query || s.title.toLowerCase().includes(query.toLowerCase()) || s.specimen.toLowerCase().includes(query.toLowerCase());
    return matchCat && matchQ;
  });

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [activeCategory, query]);

  return (
    <div className="min-h-screen bg-parchment pt-16">

      {/* ── Page header ──────────────────────────────────────── */}
      <section className="border-b border-silver/40 py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="specimen-label mb-4">Digital Archive — {SLIDES.length} Preparations</p>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <h1 className="font-playfair text-5xl md:text-6xl font-bold text-ink leading-tight">
                Slide<br />
                <span className="italic font-normal">Gallery</span>
              </h1>
              <p className="font-inter text-sm text-charcoal max-w-md leading-relaxed">
                A high-density archive of digital microscopy preparations. Select any slide
                to examine its full-resolution image alongside specimen metadata and
                collector's field notes.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Filters ──────────────────────────────────────────── */}
      <section className="sticky top-16 z-30 border-b border-silver/30 bg-parchment/90 backdrop-blur-md py-4 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          {/* Category pills */}
          <div className="flex flex-wrap gap-2">
            {SLIDE_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="px-4 py-1.5 rounded-full font-inter text-xs font-medium transition-all"
                style={{
                  background: activeCategory === cat ? '#1A1A1A' : 'rgba(255,255,255,0.40)',
                  color: activeCategory === cat ? '#F2F0E9' : '#6B6B6B',
                  border: activeCategory === cat ? '1px solid #1A1A1A' : '1px solid rgba(200,200,200,0.50)',
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-graphite" />
            <input
              type="text"
              placeholder="Search slides…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="pl-9 pr-4 py-2 rounded-full border border-silver/50 bg-white/40 font-inter text-xs text-ink placeholder:text-ash focus:outline-none focus:border-ink/30 transition-colors w-48"
            />
          </div>
        </div>
      </section>

      {/* ── Masonry grid ─────────────────────────────────────── */}
      <section ref={containerRef} className="max-w-7xl mx-auto px-6 md:px-12 py-12">
        {filtered.length === 0 ? (
          <div className="text-center py-24">
            <SlidersHorizontal className="w-8 h-8 text-ash mx-auto mb-4" strokeWidth={1} />
            <p className="font-playfair text-xl text-graphite">No slides match your criteria.</p>
            <p className="font-inter text-sm text-ash mt-2">Try adjusting the category filter or search query.</p>
          </div>
        ) : (
          <div className="masonry-grid">
            {filtered.map((slide) => (
              <SlideThumb key={slide.id} slide={slide} onClick={setSelected} />
            ))}
          </div>
        )}
      </section>

      {/* ── Lightbox ─────────────────────────────────────────── */}
      {selected && <Lightbox slide={selected} onClose={() => setSelected(null)} />}

      {/* ── Footer ───────────────────────────────────────────── */}
      <footer className="border-t border-silver/40 py-10 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Microscope className="w-4 h-4 text-graphite" strokeWidth={1.5} />
            <span className="font-playfair text-sm font-semibold text-ink">MicroCosmos</span>
          </div>
          <p className="font-inter text-xs text-graphite">
            {SLIDES.length} preparations archived. For educational use only.
          </p>
        </div>
      </footer>
    </div>
  );
}
