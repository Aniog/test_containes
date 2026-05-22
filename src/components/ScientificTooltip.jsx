import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { glossary } from '../data/specimens';

export default function ScientificTooltip({ term, children }) {
  const [visible, setVisible] = useState(false);
  const definition = glossary[term.toLowerCase()];

  if (!definition) return <span>{children || term}</span>;

  return (
    <span className="relative inline-block">
      <button
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
        onFocus={() => setVisible(true)}
        onBlur={() => setVisible(false)}
        className="border-b border-dotted border-graphite text-charcoal cursor-help focus:outline-none"
        aria-describedby={`tooltip-${term}`}
      >
        {children || term}
      </button>
      <AnimatePresence>
        {visible && (
          <motion.div
            id={`tooltip-${term}`}
            role="tooltip"
            initial={{ opacity: 0, y: 4, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 4, scale: 0.97 }}
            transition={{ duration: 0.15 }}
            className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 z-50 w-64 glass-dark rounded-xl px-4 py-3 pointer-events-none"
          >
            <p className="text-xs font-mono text-silver uppercase tracking-widest mb-1">{term}</p>
            <p className="text-xs text-white/90 leading-relaxed">{definition}</p>
            <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-black/60" />
          </motion.div>
        )}
      </AnimatePresence>
    </span>
  );
}
