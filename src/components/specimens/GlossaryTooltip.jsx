import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Info } from 'lucide-react';

export default function GlossaryTooltip({ word, definition }) {
  const [visible, setVisible] = useState(false);

  return (
    <span className="relative inline-block">
      <button
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
        onFocus={() => setVisible(true)}
        onBlur={() => setVisible(false)}
        className="border-b border-dashed border-ash text-ink cursor-help inline-flex items-center gap-0.5 focus:outline-none"
        aria-describedby={`tooltip-${word.replace(/\s/g, '-')}`}
      >
        {word}
        <Info className="w-3 h-3 text-ash inline-block ml-0.5 flex-shrink-0" />
      </button>

      <AnimatePresence>
        {visible && (
          <motion.div
            id={`tooltip-${word.replace(/\s/g, '-')}`}
            role="tooltip"
            initial={{ opacity: 0, y: 4, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 4, scale: 0.97 }}
            transition={{ duration: 0.18 }}
            className="tooltip-glass absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-56 text-center z-50"
          >
            <p className="font-semibold text-ink text-xs mb-1">{word}</p>
            <p className="text-charcoal text-xs leading-relaxed">{definition}</p>
            {/* Arrow */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 w-2 h-2 bg-white/85 border-r border-b border-silver/40 rotate-45 -mt-1" />
          </motion.div>
        )}
      </AnimatePresence>
    </span>
  );
}
