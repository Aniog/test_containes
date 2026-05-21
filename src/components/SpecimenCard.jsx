import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Info } from 'lucide-react';

export default function SpecimenCard({ specimen }) {
  const [tooltip, setTooltip] = useState(null);

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6 }}
      className="group relative bg-parchment-dark rounded-2xl overflow-hidden
        border border-ink-faint/30 hover:border-ink-faint/60
        transition-all duration-400 hover:shadow-lg hover:shadow-ink-black/8"
    >
      {/* Image */}
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={specimen.image}
          alt={specimen.name}
          className="w-full h-full object-cover img-bw
            group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-black/50 via-transparent to-transparent" />

        {/* Classification badge */}
        <div className="absolute top-3 left-3">
          <span className="font-mono text-[10px] uppercase tracking-widest
            bg-ink-black/60 backdrop-blur-sm text-white/80 px-2.5 py-1 rounded-full">
            {specimen.classification}
          </span>
        </div>

        {/* Magnification */}
        <div className="absolute top-3 right-3">
          <span className="font-mono text-[10px] text-white/70
            bg-white/15 backdrop-blur-sm px-2.5 py-1 rounded-full border border-white/15">
            {specimen.magnification}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-start justify-between gap-2 mb-2">
          <div>
            <h3 className="font-serif text-lg font-semibold text-ink-black leading-tight">
              {specimen.name}
            </h3>
            <p className="font-serif italic text-sm text-ink-mid">{specimen.latinName}</p>
          </div>
          <button
            onMouseEnter={() => setTooltip('id')}
            onMouseLeave={() => setTooltip(null)}
            className="relative flex-shrink-0 w-7 h-7 rounded-full bg-ink-black/8
              flex items-center justify-center hover:bg-ink-black/15 transition-colors"
            aria-label="Specimen information"
          >
            <Info className="w-3.5 h-3.5 text-ink-mid" />
            <AnimatePresence>
              {tooltip === 'id' && (
                <motion.div
                  initial={{ opacity: 0, y: 4, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 4, scale: 0.95 }}
                  transition={{ duration: 0.15 }}
                  className="absolute bottom-full right-0 mb-2 w-48 z-20
                    glass-card rounded-xl p-3 shadow-lg"
                >
                  <p className="font-mono text-[10px] text-ink-light mb-1">Specimen ID</p>
                  <p className="font-mono text-xs text-ink-charcoal font-medium">{specimen.id}</p>
                  <p className="font-mono text-[10px] text-ink-light mt-2 mb-1">Staining Method</p>
                  <p className="font-sans text-xs text-ink-charcoal">{specimen.stain}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>

        <p className="font-sans text-sm text-ink-mid leading-relaxed mb-4 line-clamp-3">
          {specimen.description}
        </p>

        {/* Terminology tags with tooltips */}
        <div className="flex flex-wrap gap-2">
          {specimen.terms.map((term) => (
            <div key={term.word} className="relative group/term">
              <button
                onMouseEnter={() => setTooltip(term.word)}
                onMouseLeave={() => setTooltip(null)}
                className="font-sans text-[11px] font-medium text-ink-charcoal
                  bg-white/60 border border-ink-faint/50 px-2.5 py-1 rounded-full
                  hover:bg-white/90 hover:border-ink-faint transition-all duration-200
                  cursor-help"
              >
                {term.word}
              </button>
              <AnimatePresence>
                {tooltip === term.word && (
                  <motion.div
                    initial={{ opacity: 0, y: 4, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 4, scale: 0.95 }}
                    transition={{ duration: 0.15 }}
                    className="absolute bottom-full left-0 mb-2 w-56 z-20
                      glass-card rounded-xl p-3 shadow-lg"
                  >
                    <p className="font-serif text-xs font-semibold text-ink-black mb-1">{term.word}</p>
                    <p className="font-sans text-xs text-ink-mid leading-relaxed">{term.definition}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </motion.article>
  );
}
