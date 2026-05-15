import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Info } from 'lucide-react';

export default function SpecimenCard({ specimen, reverse = false }) {
  const [tooltip, setTooltip] = useState(null);

  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 md:gap-14 items-center`}
    >
      {/* Image */}
      <div className="w-full md:w-1/2 relative overflow-hidden rounded-2xl group">
        <img
          src={specimen.image}
          alt={specimen.name}
          className="w-full h-72 md:h-96 object-cover transition-transform duration-700 group-hover:scale-105"
          style={{ filter: 'contrast(1.08) brightness(0.92)' }}
        />
        {/* Magnification badge */}
        <div
          className="absolute bottom-4 left-4 glass-dark rounded-full px-3 py-1 text-white text-xs tracking-widest uppercase"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          {specimen.magnification}
        </div>
        {/* Specimen ID */}
        <div
          className="absolute top-4 right-4 glass-dark rounded-full px-3 py-1 text-[#C8C6BF] text-xs"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          #{specimen.id}
        </div>
      </div>

      {/* Content */}
      <div className="w-full md:w-1/2">
        <p
          className="text-[#9E9E9E] text-xs tracking-[0.3em] uppercase mb-2"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          {specimen.category}
        </p>
        <h2
          className="text-[#1A1A1A] text-3xl font-bold mb-1"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          {specimen.name}
        </h2>
        <p
          className="text-[#9E9E9E] text-sm italic mb-5"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          {specimen.latinName}
        </p>

        <p
          className="text-[#3D3D3D] text-sm leading-relaxed mb-6"
          style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
        >
          {specimen.description}
        </p>

        {/* Technical data grid */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          {specimen.data.map(({ label, value }) => (
            <div key={label} className="border-l-2 border-[#1A1A1A] pl-3">
              <p
                className="text-[#9E9E9E] text-[10px] tracking-widest uppercase"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {label}
              </p>
              <p
                className="text-[#1A1A1A] text-sm font-medium"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {value}
              </p>
            </div>
          ))}
        </div>

        {/* Terminology with tooltips */}
        <div className="flex flex-wrap gap-2">
          {specimen.terms.map(({ term, definition }) => (
            <div key={term} className="relative">
              <button
                className="flex items-center gap-1 glass rounded-full px-3 py-1 text-xs text-[#3D3D3D] hover:bg-black/5 transition-colors"
                style={{ fontFamily: "'Inter', sans-serif" }}
                onMouseEnter={() => setTooltip(term)}
                onMouseLeave={() => setTooltip(null)}
                onFocus={() => setTooltip(term)}
                onBlur={() => setTooltip(null)}
                aria-describedby={tooltip === term ? `tooltip-${term}` : undefined}
              >
                <Info className="w-3 h-3 text-[#9E9E9E]" />
                {term}
              </button>

              <AnimatePresence>
                {tooltip === term && (
                  <motion.div
                    id={`tooltip-${term}`}
                    role="tooltip"
                    initial={{ opacity: 0, y: 6, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.96 }}
                    transition={{ duration: 0.18 }}
                    className="tooltip-glass absolute bottom-full left-0 mb-2 z-20 w-56"
                  >
                    <span className="font-semibold block mb-1">{term}</span>
                    {definition}
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
