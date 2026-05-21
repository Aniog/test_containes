import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Info } from "lucide-react";

export default function SpecimenCard({ specimen, reverse = false }) {
  const [tooltip, setTooltip] = useState(null);

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`grid md:grid-cols-2 gap-8 lg:gap-16 items-center ${
        reverse ? "md:[&>*:first-child]:order-2" : ""
      }`}
    >
      {/* Image panel */}
      <div className="relative group">
        <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-ink/10 border border-lightgray/40">
          <img
            src={specimen.imageSvg}
            alt={specimen.imageAlt}
            className="w-full h-full object-cover grayscale contrast-125 group-hover:scale-105 transition-transform duration-700"
            loading="lazy"
          />
          {/* Overlay metadata */}
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-ink/80 to-transparent">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs text-parchment/70">
                {specimen.specimenId}
              </span>
              <span className="font-mono text-xs text-parchment/70">
                {specimen.magnification}
              </span>
            </div>
          </div>
        </div>
        {/* Stain badge */}
        <div className="absolute top-3 right-3 glass-card px-3 py-1.5 rounded-lg">
          <span className="font-mono text-xs text-ink">{specimen.stain}</span>
        </div>
      </div>

      {/* Content panel */}
      <div className="space-y-5">
        <div>
          <p className="section-label mb-2">{specimen.category}</p>
          <h2 className="font-serif font-bold text-2xl md:text-3xl text-ink mb-1">
            {specimen.name}
          </h2>
          <p className="font-serif italic text-midgray text-base">
            {specimen.latinName}
          </p>
        </div>

        <div className="w-12 h-px bg-lightgray" aria-hidden="true" />

        <p className="font-sans text-charcoal text-sm leading-relaxed">
          {specimen.description}
        </p>

        {/* Terminology with tooltips */}
        <div>
          <p className="section-label mb-3">Key Structures</p>
          <div className="flex flex-wrap gap-2">
            {specimen.terms.map((term) => (
              <div key={term.word} className="relative">
                <button
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 glass-dark rounded-lg text-xs font-sans font-medium text-ink hover:bg-black/10 transition-colors"
                  onMouseEnter={() => setTooltip(term.word)}
                  onMouseLeave={() => setTooltip(null)}
                  onFocus={() => setTooltip(term.word)}
                  onBlur={() => setTooltip(null)}
                  aria-describedby={tooltip === term.word ? `tooltip-${term.word}` : undefined}
                >
                  <Info className="w-3 h-3 text-midgray" />
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
                      transition={{ duration: 0.15 }}
                      className="absolute bottom-full left-0 mb-2 z-20 w-56 glass-card p-3 shadow-xl shadow-black/15"
                    >
                      <p className="font-sans text-xs text-charcoal leading-relaxed">
                        {term.definition}
                      </p>
                      <div className="absolute top-full left-4 w-2 h-2 bg-white/30 rotate-45 border-r border-b border-white/20" aria-hidden="true" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>

        {/* Technical data */}
        <div className="grid grid-cols-2 gap-3 pt-2">
          {specimen.technicalData.map((item) => (
            <div key={item.label} className="glass-dark p-3 rounded-xl">
              <p className="section-label text-[10px] mb-1">{item.label}</p>
              <p className="font-mono text-xs text-ink font-medium">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.article>
  );
}
