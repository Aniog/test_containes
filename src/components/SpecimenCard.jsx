import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Info } from 'lucide-react';

export default function SpecimenCard({ specimen }) {
  const [tooltip, setTooltip] = useState(null);

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6 }}
      className="glass-card overflow-hidden group"
    >
      {/* Image */}
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={specimen.imageSrc}
          alt={specimen.name}
          className="w-full h-full object-cover specimen-img group-hover:scale-105 transition-transform duration-700"
        />
        {/* Magnification badge */}
        <div className="absolute top-3 right-3">
          <span className="font-mono text-xs text-white bg-ink/70 backdrop-blur-sm
                           border border-white/20 rounded-full px-3 py-1">
            {specimen.magnification}
          </span>
        </div>
        {/* Category badge */}
        <div className="absolute top-3 left-3">
          <span className="font-mono text-xs text-white/80 bg-white/15 backdrop-blur-sm
                           border border-white/20 rounded-full px-3 py-1">
            {specimen.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Specimen ID */}
        <p className="font-mono text-ash text-xs tracking-widest uppercase mb-2">
          {specimen.id}
        </p>

        {/* Name */}
        <h3 className="font-serif font-bold text-ink text-xl mb-1">
          {specimen.name}
        </h3>
        <p className="font-serif italic text-ash text-sm mb-4">
          {specimen.latinName}
        </p>

        {/* Description */}
        <p className="font-sans text-charcoal text-sm leading-relaxed mb-5">
          {specimen.description}
        </p>

        {/* Technical Terms with Tooltips */}
        {specimen.terms && specimen.terms.length > 0 && (
          <div className="border-t border-fog pt-4">
            <p className="font-mono text-ash text-xs tracking-widest uppercase mb-3">
              Key Terminology
            </p>
            <div className="flex flex-wrap gap-2">
              {specimen.terms.map((term) => (
                <div key={term.word} className="relative">
                  <button
                    onMouseEnter={() => setTooltip(term.word)}
                    onMouseLeave={() => setTooltip(null)}
                    onFocus={() => setTooltip(term.word)}
                    onBlur={() => setTooltip(null)}
                    className="flex items-center gap-1 px-3 py-1.5 rounded-full
                               bg-ink/8 border border-ink/15 hover:bg-ink/15
                               font-sans text-xs text-charcoal transition-all duration-200
                               cursor-help"
                    aria-describedby={`tooltip-${term.word}`}
                  >
                    <Info className="w-3 h-3 text-ash" />
                    {term.word}
                  </button>

                  <AnimatePresence>
                    {tooltip === term.word && (
                      <motion.div
                        id={`tooltip-${term.word}`}
                        role="tooltip"
                        initial={{ opacity: 0, y: 6, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 6, scale: 0.95 }}
                        transition={{ duration: 0.18 }}
                        className="absolute bottom-full left-0 mb-2 z-50 w-56
                                   backdrop-blur-xl bg-ink/90 border border-white/10
                                   rounded-xl px-4 py-3 shadow-2xl pointer-events-none"
                      >
                        <p className="font-sans text-white/90 text-xs leading-relaxed">
                          {term.definition}
                        </p>
                        {/* Arrow */}
                        <div className="absolute top-full left-4 w-0 h-0
                                        border-l-4 border-r-4 border-t-4
                                        border-l-transparent border-r-transparent border-t-ink/90" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Metadata row */}
        <div className="flex items-center gap-4 mt-5 pt-4 border-t border-fog">
          <div>
            <div className="font-mono text-ash text-xs tracking-widest uppercase">Stain</div>
            <div className="font-sans text-charcoal text-xs font-medium mt-0.5">{specimen.stain}</div>
          </div>
          <div className="w-px h-8 bg-fog" />
          <div>
            <div className="font-mono text-ash text-xs tracking-widest uppercase">Tissue</div>
            <div className="font-sans text-charcoal text-xs font-medium mt-0.5">{specimen.tissue}</div>
          </div>
          <div className="w-px h-8 bg-fog" />
          <div>
            <div className="font-mono text-ash text-xs tracking-widest uppercase">Section</div>
            <div className="font-sans text-charcoal text-xs font-medium mt-0.5">{specimen.section}</div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
