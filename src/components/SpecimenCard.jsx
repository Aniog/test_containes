import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Info } from 'lucide-react';

export default function SpecimenCard({ specimen, index }) {
  const [tooltip, setTooltip] = useState(null);

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.7 }}
      className="group glass-card rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-black/10
                 transition-all duration-500 hover:-translate-y-1"
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-pale-grey">
        <img
          src={specimen.imageUrl}
          alt={specimen.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          
        />
        {/* Magnification badge */}
        <div className="absolute top-3 right-3 glass-card rounded-lg px-3 py-1.5 border-white/30">
          <span className="font-mono text-xs font-medium text-ink">{specimen.magnification}</span>
        </div>
        {/* Domain badge */}
        <div className="absolute top-3 left-3 bg-ink/70 backdrop-blur-sm rounded-lg px-3 py-1.5">
          <span className="font-mono text-[10px] tracking-widest uppercase text-parchment/80">
            {specimen.domain}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between gap-3 mb-3">
          <div>
            <p className="font-mono text-[10px] tracking-widest uppercase text-mid-grey mb-1">
              {specimen.id}
            </p>
            <h3 className="font-serif text-xl font-semibold text-ink leading-tight">
              {specimen.name}
            </h3>
            <p className="font-sans text-xs italic text-mid-grey mt-0.5">{specimen.latinName}</p>
          </div>
        </div>

        <p className="font-sans text-sm text-charcoal leading-relaxed mb-5">
          {specimen.description}
        </p>

        {/* Technical Terms with Tooltips */}
        <div className="mb-5">
          <p className="font-mono text-[10px] tracking-widest uppercase text-mid-grey mb-2">
            Key Structures
          </p>
          <div className="flex flex-wrap gap-2">
            {specimen.terms.map((term) => (
              <div key={term.label} className="relative">
                <button
                  onMouseEnter={() => setTooltip(term.label)}
                  onMouseLeave={() => setTooltip(null)}
                  onFocus={() => setTooltip(term.label)}
                  onBlur={() => setTooltip(null)}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full
                             bg-ink/6 border border-ink/10 hover:bg-ink/12 hover:border-ink/20
                             transition-all duration-200 group/term"
                  aria-describedby={`tooltip-${term.label.replace(/\s/g, '-')}`}
                >
                  <span className="font-sans text-xs text-charcoal group-hover/term:text-ink">
                    {term.label}
                  </span>
                  <Info className="w-3 h-3 text-mid-grey group-hover/term:text-charcoal" />
                </button>

                <AnimatePresence>
                  {tooltip === term.label && (
                    <motion.div
                      id={`tooltip-${term.label.replace(/\s/g, '-')}`}
                      role="tooltip"
                      initial={{ opacity: 0, y: 6, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 6, scale: 0.95 }}
                      transition={{ duration: 0.18 }}
                      className="absolute bottom-full left-0 mb-2 z-20 w-56
                                 bg-ink/90 backdrop-blur-md rounded-xl p-3
                                 border border-white/10 shadow-xl shadow-black/20"
                    >
                      <p className="font-mono text-[10px] tracking-widest uppercase text-parchment/50 mb-1">
                        Definition
                      </p>
                      <p className="font-sans text-xs text-parchment/90 leading-relaxed">
                        {term.definition}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>

        {/* Metadata row */}
        <div className="pt-4 border-t border-ink/8 grid grid-cols-3 gap-3">
          {specimen.metadata.map((meta) => (
            <div key={meta.label}>
              <p className="font-mono text-[9px] tracking-widest uppercase text-mid-grey mb-0.5">
                {meta.label}
              </p>
              <p className="font-sans text-xs font-medium text-charcoal">{meta.value}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.article>
  );
}
