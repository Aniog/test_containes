import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Info } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function SpecimenCard({ specimen, index }) {
  const [tooltipVisible, setTooltipVisible] = useState(null);
  const cardRef = useRef(null);

  useEffect(() => {
    if (cardRef.current) {
      ImageHelper.loadImages(strkImgConfig, cardRef.current);
    }
  }, []);

  return (
    <motion.article
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group rounded-3xl overflow-hidden bg-white/35 backdrop-blur-sm border border-white/40 shadow-glass hover:shadow-glass-lg transition-all duration-400"
    >
      {/* Image */}
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={specimen.name}
          className="w-full h-full object-cover img-bw group-hover:scale-105 transition-transform duration-700"
          data-strk-img-id={`specimen-img-${specimen.id}`}
          data-strk-img={`[spec-desc-${specimen.id}] [spec-name-${specimen.id}] [spec-domain-${specimen.id}]`}
          data-strk-img-ratio="4x3"
          data-strk-img-width="600"
        />
        {/* Hidden text refs */}
        <span id={`spec-name-${specimen.id}`} className="sr-only">{specimen.name}</span>
        <span id={`spec-desc-${specimen.id}`} className="sr-only">{specimen.description}</span>
        <span id={`spec-domain-${specimen.id}`} className="sr-only">{specimen.domain} microscopy specimen</span>

        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Magnification badge */}
        <div className="absolute top-3 right-3 px-2.5 py-1 rounded-lg bg-ink/70 backdrop-blur-sm border border-white/10">
          <span className="font-inter text-xs font-medium text-parchment/90 tracking-wide">
            {specimen.magnification}
          </span>
        </div>

        {/* Domain badge */}
        <div className="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-white/30 backdrop-blur-sm border border-white/30">
          <span className="font-inter text-xs font-medium text-ink tracking-wide">
            {specimen.domain}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Specimen ID */}
        <p className="font-inter text-xs text-silver tracking-widest uppercase mb-2">
          {specimen.specimenId}
        </p>

        {/* Name */}
        <h3 className="font-playfair text-xl font-semibold text-ink mb-1 leading-tight">
          {specimen.name}
        </h3>
        <p className="font-inter text-xs italic text-graphite mb-4">
          {specimen.latinName}
        </p>

        {/* Description */}
        <p className="font-inter text-sm text-charcoal leading-relaxed mb-5">
          {specimen.description}
        </p>

        {/* Technical Terms with Tooltips */}
        <div className="border-t border-ash/60 pt-4">
          <p className="font-inter text-xs text-silver tracking-widest uppercase mb-3">
            Key Structures
          </p>
          <div className="flex flex-wrap gap-2">
            {specimen.terms.map((term) => (
              <div key={term.label} className="relative">
                <button
                  onMouseEnter={() => setTooltipVisible(term.label)}
                  onMouseLeave={() => setTooltipVisible(null)}
                  onFocus={() => setTooltipVisible(term.label)}
                  onBlur={() => setTooltipVisible(null)}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-bone border border-ash text-charcoal font-inter text-xs font-medium hover:bg-white/70 hover:border-graphite/30 transition-all"
                  aria-describedby={`tooltip-${term.label}`}
                >
                  <Info className="w-3 h-3 text-graphite" />
                  {term.label}
                </button>

                <AnimatePresence>
                  {tooltipVisible === term.label && (
                    <motion.div
                      id={`tooltip-${term.label}`}
                      role="tooltip"
                      initial={{ opacity: 0, y: 6, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 6, scale: 0.95 }}
                      transition={{ duration: 0.15 }}
                      className="absolute bottom-full left-0 mb-2 z-30 w-56 p-3 rounded-xl bg-white/70 backdrop-blur-md border border-white/40 shadow-glass-lg"
                    >
                      <p className="font-inter text-xs font-semibold text-ink mb-1">
                        {term.label}
                      </p>
                      <p className="font-inter text-xs text-charcoal leading-relaxed">
                        {term.definition}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>

        {/* Staining method */}
        <div className="mt-4 flex items-center justify-between">
          <div>
            <span className="font-inter text-xs text-silver tracking-widest uppercase">Stain: </span>
            <span className="font-inter text-xs text-charcoal">{specimen.stain}</span>
          </div>
          <div>
            <span className="font-inter text-xs text-silver tracking-widest uppercase">Prep: </span>
            <span className="font-inter text-xs text-charcoal">{specimen.preparation}</span>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
