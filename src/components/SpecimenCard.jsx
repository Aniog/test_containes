import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Info } from 'lucide-react';

export default function SpecimenCard({ specimen, reverse = false }) {
  const [tooltip, setTooltip] = useState(null);

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7 }}
      className={`grid md:grid-cols-2 gap-10 md:gap-16 items-center ${reverse ? 'md:[&>*:first-child]:order-2' : ''}`}
    >
      {/* Image panel */}
      <div className="relative rounded-2xl overflow-hidden border border-mist/60 shadow-xl aspect-[4/3] group">
        <img
          data-strk-img-id={specimen.imgId}
          data-strk-img={specimen.imgQuery}
          data-strk-img-ratio="4x3"
          data-strk-img-width="900"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={specimen.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent" />

        {/* Metadata overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <div className="bg-white/12 backdrop-blur-md border border-white/20 rounded-xl p-4">
            <div className="grid grid-cols-3 gap-3 text-center">
              {specimen.metadata.map(({ label, value }) => (
                <div key={label}>
                  <div className="font-mono text-xs font-medium text-white">{value}</div>
                  <div className="text-xs font-sans text-white/55 mt-0.5">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Specimen ID badge */}
        <div className="absolute top-4 left-4 bg-ink/75 backdrop-blur-sm text-white text-xs font-mono px-3 py-1.5 rounded-full border border-white/15">
          {specimen.id}
        </div>
      </div>

      {/* Text panel */}
      <div>
        <p className="section-label mb-2">{specimen.category}</p>
        <h3 className="font-serif text-3xl md:text-4xl font-bold text-ink leading-tight mb-2">
          {specimen.name}
        </h3>
        <p className="font-serif text-lg italic text-graphite mb-6">{specimen.latinName}</p>

        <p className="font-sans text-charcoal leading-relaxed mb-6">{specimen.description}</p>

        {/* Annotated terms */}
        <div className="mb-6">
          <p className="section-label mb-3">Key Structures</p>
          <div className="flex flex-wrap gap-2">
            {specimen.terms.map(({ term, definition }) => (
              <div key={term} className="relative">
                <button
                  onMouseEnter={() => setTooltip(term)}
                  onMouseLeave={() => setTooltip(null)}
                  onFocus={() => setTooltip(term)}
                  onBlur={() => setTooltip(null)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-ink/8 border border-ink/12 text-xs font-sans font-medium text-charcoal hover:bg-ink/15 hover:border-ink/25 transition-all duration-200"
                >
                  {term}
                  <Info className="w-3 h-3 text-graphite" />
                </button>

                <AnimatePresence>
                  {tooltip === term && (
                    <motion.div
                      initial={{ opacity: 0, y: 6, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 6, scale: 0.95 }}
                      transition={{ duration: 0.15 }}
                      className="absolute bottom-full left-0 mb-2 z-30 w-56 bg-ink/90 backdrop-blur-sm text-white text-xs font-sans leading-relaxed rounded-xl px-4 py-3 border border-white/10 shadow-xl pointer-events-none"
                    >
                      <div className="font-medium mb-1">{term}</div>
                      <div className="text-white/75">{definition}</div>
                      <div className="absolute top-full left-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-ink/90" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>

        {/* Observation notes */}
        <div className="bg-ink/4 border-l-2 border-ink/20 rounded-r-xl pl-5 pr-4 py-4">
          <p className="section-label mb-2">Instructor's Note</p>
          <p className="font-sans text-sm text-charcoal leading-relaxed italic">
            "{specimen.instructorNote}"
          </p>
        </div>
      </div>
    </motion.article>
  );
}
