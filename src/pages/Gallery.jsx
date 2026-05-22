import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Grid3X3, Microscope, SlidersHorizontal } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import Lightbox from '../components/Lightbox';
import { gallerySlides } from '../data/specimens';

const techniques = ['All', 'Brightfield', 'Differential Interference Contrast', 'Scanning Electron Microscopy', 'Golgi Stain', 'Reflected Light'];

export default function Gallery() {
  const [selectedSlide, setSelectedSlide] = useState(null);
  const [activeTechnique, setActiveTechnique] = useState('All');
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, [activeTechnique]);

  const filtered = gallerySlides.filter(
    (s) => activeTechnique === 'All' || s.technique === activeTechnique
  );

  return (
    <div ref={containerRef} className="bg-parchment min-h-screen">
      {/* ── Page Header ── */}
      <section className="pt-32 pb-16 border-b border-ash">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-mono text-graphite tracking-[0.25em] uppercase mb-4 flex items-center gap-2">
              <Grid3X3 className="w-3.5 h-3.5" />
              Digital Archive
            </p>
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-ink leading-tight mb-6">
              Slide Gallery
            </h1>
            <p className="text-charcoal max-w-2xl leading-relaxed text-lg">
              A high-density archive of digital microscopy slides. Select any specimen to open
              the full-resolution viewer with complete metadata and collector's annotations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Technique Filter ── */}
      <section className="sticky top-16 md:top-20 z-30 glass-nav border-b border-ash/50">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-4">
          <div className="flex items-center gap-3 overflow-x-auto pb-1 scrollbar-hide">
            <SlidersHorizontal className="w-3.5 h-3.5 text-graphite flex-shrink-0" />
            {techniques.map((tech) => (
              <button
                key={tech}
                onClick={() => setActiveTechnique(tech)}
                className={`text-xs font-mono tracking-wide px-3 py-1.5 rounded-full border whitespace-nowrap transition-all duration-200 flex-shrink-0 ${
                  activeTechnique === tech
                    ? 'bg-ink text-parchment border-ink'
                    : 'bg-transparent text-graphite border-ash hover:border-charcoal hover:text-charcoal'
                }`}
              >
                {tech}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Masonry Grid ── */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTechnique}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5"
            >
              {filtered.map((slide, i) => (
                <SlideCard
                  key={slide.id}
                  slide={slide}
                  index={i}
                  onClick={() => setSelectedSlide(slide)}
                />
              ))}
            </motion.div>
          </AnimatePresence>

          {filtered.length === 0 && (
            <div className="text-center py-24">
              <Microscope className="w-12 h-12 text-ash mx-auto mb-4" />
              <p className="font-serif text-xl text-graphite">No slides for this technique</p>
            </div>
          )}

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xs font-mono text-graphite tracking-widest uppercase text-center mt-12"
          >
            {filtered.length} digital slide{filtered.length !== 1 ? 's' : ''} in archive
          </motion.p>
        </div>
      </section>

      {/* ── Archive Note ── */}
      <section className="py-16 bg-bone border-t border-ash">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[10px] font-mono text-graphite tracking-widest uppercase mb-3">
                Archive Standards
              </p>
              <h2 className="font-serif text-3xl font-bold text-ink mb-4">
                Curated with scientific rigour
              </h2>
              <p className="text-sm text-charcoal leading-relaxed">
                Every digital slide in this archive has been reviewed and annotated by qualified
                microscopists. Metadata includes specimen identification, preparation technique,
                magnification, and collector's observational notes — providing a complete
                scientific record for each image.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '9', label: 'Slides in Archive' },
                { value: '5', label: 'Imaging Techniques' },
                { value: '4', label: 'Collectors' },
                { value: '2024', label: 'Collection Year' },
              ].map((stat) => (
                <div key={stat.label} className="bg-parchment border border-ash rounded-xl p-4 text-center">
                  <p className="font-serif text-2xl font-bold text-ink">{stat.value}</p>
                  <p className="text-[10px] font-mono text-graphite tracking-widest uppercase mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedSlide && (
          <Lightbox slide={selectedSlide} onClose={() => setSelectedSlide(null)} />
        )}
      </AnimatePresence>
    </div>
  );
}

function SlideCard({ slide, index, onClick }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.45, delay: (index % 6) * 0.06 }}
      className="break-inside-avoid mb-5"
    >
      <button
        onClick={onClick}
        className="group w-full text-left bg-bone border border-ash rounded-2xl overflow-hidden hover:shadow-xl hover:border-charcoal/20 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-ink/20"
        aria-label={`Open slide: ${slide.title}`}
      >
        {/* Image */}
        <div className="relative overflow-hidden bg-charcoal/10">
          <img
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={slide.title}
            data-strk-img-id={slide.imageId}
            data-strk-img={`[gal-title-${slide.id}] [gal-tech-${slide.id}]`}
            data-strk-img-ratio={slide.aspectRatio}
            data-strk-img-width={slide.width}
            className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
            style={{ filter: 'grayscale(100%) contrast(1.1)' }}
          />
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/30 transition-all duration-300 flex items-center justify-center">
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 glass-card rounded-full px-4 py-2">
              <span className="text-xs font-mono text-white tracking-widest uppercase">View Slide</span>
            </div>
          </div>
          {/* Badges */}
          <div className="absolute top-3 left-3">
            <span className="font-mono text-[9px] tracking-widest text-white/90 glass-dark px-2 py-1 rounded-md">
              {slide.specimenId}
            </span>
          </div>
          <div className="absolute top-3 right-3">
            <span className="font-mono text-[9px] tracking-widest text-white/90 glass-dark px-2 py-1 rounded-md">
              {slide.magnification}
            </span>
          </div>
        </div>

        {/* Card content */}
        <div className="p-4">
          <h3
            id={`gal-title-${slide.id}`}
            className="font-serif text-base font-semibold text-ink leading-tight mb-1"
          >
            {slide.title}
          </h3>
          <p
            id={`gal-tech-${slide.id}`}
            className="text-[10px] font-mono text-graphite tracking-wide uppercase"
          >
            {slide.technique}
          </p>
          <div className="mt-3 pt-3 border-t border-ash flex items-center justify-between">
            <span className="text-[10px] font-mono text-silver">{slide.stain}</span>
            <span className="text-[10px] font-mono text-silver">{slide.collector}</span>
          </div>
        </div>
      </button>
    </motion.div>
  );
}
