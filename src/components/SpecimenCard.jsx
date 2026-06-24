import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Info } from 'lucide-react';

export default function SpecimenCard({ specimen, reverse = false }) {
  const [tooltip, setTooltip] = useState(null);

  return (
    <motion.article
      className={`grid md:grid-cols-2 gap-12 items-center ${reverse ? 'md:[direction:rtl]' : ''}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      {/* Image panel */}
      <div className={`relative ${reverse ? 'md:[direction:ltr]' : ''}`}>
        <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-silver/40 shadow-sm">
          <img
            data-strk-img-id={specimen.imgId}
            data-strk-img={`[${specimen.descId}] [${specimen.titleId}]`}
            data-strk-img-ratio="4x3"
            data-strk-img-width="800"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={specimen.name}
            className="w-full h-full object-cover"
            style={{ filter: 'grayscale(1) contrast(1.15) brightness(0.95)' }}
          />
        </div>
        {/* Specimen ID badge */}
        <div className="absolute top-4 left-4 glass-card px-3 py-1.5">
          <span className="specimen-label text-[0.6rem]">Specimen #{specimen.id}</span>
        </div>
        {/* Magnification badge */}
        <div className="absolute bottom-4 right-4 glass-card px-3 py-1.5">
          <span className="specimen-label text-[0.6rem]">{specimen.magnification}</span>
        </div>
      </div>

      {/* Content panel */}
      <div className={`${reverse ? 'md:[direction:ltr]' : ''}`}>
        <p className="specimen-label mb-3">{specimen.category}</p>
        <h3 className="font-playfair text-3xl font-bold text-ink mb-1" id={specimen.titleId}>
          {specimen.name}
        </h3>
        <p className="font-inter text-sm text-graphite italic mb-5">{specimen.latinName}</p>
        <p className="font-inter text-sm text-charcoal leading-relaxed mb-6" id={specimen.descId}>
          {specimen.description}
        </p>

        {/* Technical data grid */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          {specimen.data.map(({ label, value }) => (
            <div key={label} className="bg-fog/60 rounded-xl px-4 py-3 border border-silver/30">
              <p className="specimen-label text-[0.6rem] mb-1">{label}</p>
              <p className="font-courier text-sm text-ink font-bold">{value}</p>
            </div>
          ))}
        </div>

        {/* Terminology with tooltips */}
        <div>
          <p className="specimen-label mb-3">Key Terminology</p>
          <div className="flex flex-wrap gap-2">
            {specimen.terms.map(({ term, definition }) => (
              <div key={term} className="relative">
                <button
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-silver/50 bg-white/30 font-inter text-xs text-charcoal hover:border-ink/30 hover:bg-white/50 transition-all"
                  onMouseEnter={() => setTooltip(term)}
                  onMouseLeave={() => setTooltip(null)}
                  onFocus={() => setTooltip(term)}
                  onBlur={() => setTooltip(null)}
                >
                  <Info className="w-3 h-3 text-graphite" />
                  {term}
                </button>
                <AnimatePresence>
                  {tooltip === term && (
                    <motion.div
                      className="glass-tooltip absolute bottom-full left-0 mb-2 w-56 z-20 rounded-xl px-4 py-3"
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 6 }}
                      transition={{ duration: 0.15 }}
                    >
                      <p className="font-inter text-xs text-ink leading-relaxed">{definition}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.article>
  );
}
