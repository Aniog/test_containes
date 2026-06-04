import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Info } from 'lucide-react';

export default function ScientificTooltip({ term, definition, children }) {
  const [visible, setVisible] = useState(false);

  return (
    <span className="relative inline-block">
      <span
        className="border-b border-dotted border-graphite cursor-help text-ink"
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
        onFocus={() => setVisible(true)}
        onBlur={() => setVisible(false)}
        tabIndex={0}
        aria-describedby={`tooltip-${term}`}
      >
        {children || term}
      </span>

      <AnimatePresence>
        {visible && (
          <motion.div
            id={`tooltip-${term}`}
            role="tooltip"
            initial={{ opacity: 0, y: 6, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.96 }}
            transition={{ duration: 0.18 }}
            className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 z-50
              w-64 backdrop-blur-xl bg-ink/90 border border-white/10 rounded-xl
              px-4 py-3 shadow-2xl pointer-events-none"
          >
            <div className="flex items-start gap-2">
              <Info className="w-3.5 h-3.5 text-silver flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-inter text-xs font-semibold tracking-widest uppercase text-silver mb-1">
                  {term}
                </p>
                <p className="font-inter text-xs text-parchment/90 leading-relaxed">
                  {definition}
                </p>
              </div>
            </div>
            {/* Arrow */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0
              border-l-4 border-r-4 border-t-4
              border-l-transparent border-r-transparent border-t-ink/90" />
          </motion.div>
        )}
      </AnimatePresence>
    </span>
  );
}
