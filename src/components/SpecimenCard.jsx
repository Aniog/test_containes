import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Info } from 'lucide-react';

export default function SpecimenCard({ specimen, reverse = false, index = 0 }) {
  const [tooltip, setTooltip] = useState(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} gap-10 md:gap-16 items-center py-16 md:py-20 border-b border-silver/30 last:border-0`}
    >
      {/* Image Panel */}
      <div className="w-full md:w-1/2 flex-shrink-0">
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.4 }}
          className="relative overflow-hidden rounded-2xl border border-silver/30 shadow-lg aspect-[4/3] bg-mist/30"
        >
          <img
            src={specimen.imagePlaceholder}
            alt={specimen.name}
            className="w-full h-full object-cover"
            style={{ filter: 'grayscale(100%) contrast(1.1)' }}
            data-strk-img-id={`specimen-img-${specimen.id}`}
            data-strk-img={`[spec-desc-${specimen.id}] [spec-name-${specimen.id}] microscopy histology`}
            data-strk-img-ratio="4x3"
            data-strk-img-width="800"
          />
          {/* Magnification badge */}
          <div className="absolute top-4 left-4 bg-ink/80 backdrop-blur-sm rounded-full px-3 py-1">
            <span className="font-mono text-xs text-parchment">{specimen.magnification}</span>
          </div>
          {/* Stain badge */}
          <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-3 py-1">
            <span className="font-mono text-xs text-ink">{specimen.stain}</span>
          </div>
        </motion.div>

        {/* Scale bar */}
        <div className="mt-3 flex items-center gap-3">
          <div className="h-px w-16 bg-ink/40" />
          <span className="meta-text">{specimen.scaleBar}</span>
        </div>
      </div>

      {/* Content Panel */}
      <div className="w-full md:w-1/2">
        <p className="label-caps mb-3 text-graphite">{specimen.category}</p>
        <h3
          id={`spec-name-${specimen.id}`}
          className="font-serif text-2xl md:text-3xl font-bold text-ink mb-2"
        >
          {specimen.name}
        </h3>
        <p className="font-serif text-base italic text-graphite mb-6">{specimen.latinName}</p>

        <p
          id={`spec-desc-${specimen.id}`}
          className="body-text text-charcoal/85 mb-8 leading-relaxed"
        >
          {specimen.description}
        </p>

        {/* Terminology with tooltips */}
        <div className="mb-8">
          <p className="label-caps mb-3">Key Structures</p>
          <div className="flex flex-wrap gap-2">
            {specimen.terms.map((term) => (
              <div key={term.word} className="relative">
                <button
                  onMouseEnter={() => setTooltip(term.word)}
                  onMouseLeave={() => setTooltip(null)}
                  onFocus={() => setTooltip(term.word)}
                  onBlur={() => setTooltip(null)}
                  className="flex items-center gap-1.5 bg-white/30 backdrop-blur-sm border border-silver/40 rounded-full px-3 py-1.5 text-xs font-sans text-charcoal hover:bg-white/50 hover:border-ink/30 transition-all cursor-help"
                >
                  <Info className="w-3 h-3 text-graphite" />
                  {term.word}
                </button>

                <AnimatePresence>
                  {tooltip === term.word && (
                    <motion.div
                      initial={{ opacity: 0, y: 4, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 4, scale: 0.95 }}
                      transition={{ duration: 0.15 }}
                      className="absolute bottom-full left-0 mb-2 z-30 w-56 bg-white/90 backdrop-blur-md border border-silver/40 rounded-xl px-4 py-3 shadow-xl pointer-events-none"
                    >
                      <p className="font-sans text-xs font-semibold text-ink mb-1">{term.word}</p>
                      <p className="font-sans text-xs text-charcoal leading-relaxed">{term.definition}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>

        {/* Metadata grid */}
        <div className="grid grid-cols-2 gap-4 pt-6 border-t border-silver/30">
          {specimen.metadata.map((m) => (
            <div key={m.label}>
              <p className="label-caps text-[10px] mb-1">{m.label}</p>
              <p className="font-mono text-sm text-ink">{m.value}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
