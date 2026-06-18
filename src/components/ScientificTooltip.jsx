import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Info } from 'lucide-react';

export default function ScientificTooltip({ term, definition, children }) {
  const [visible, setVisible] = useState(false);

  return (
    <span className="relative inline-block">
      <span
        className="border-b border-dashed border-ash/60 cursor-help text-ink"
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
            exit={{ opacity: 0, y: 4, scale: 0.97 }}
            transition={{ duration: 0.18 }}
            className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 z-50 w-64 pointer-events-none"
          >
            <div className="glass-card px-4 py-3 shadow-xl">
              <div className="flex items-start gap-2">
                <Info className="w-3.5 h-3.5 text-ash mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                <div>
                  <p className="font-mono text-xs font-medium text-ink mb-1">{term}</p>
                  <p className="font-sans text-xs text-charcoal leading-relaxed">{definition}</p>
                </div>
              </div>
            </div>
            {/* Arrow */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-white/20" />
          </motion.div>
        )}
      </AnimatePresence>
    </span>
  );
}
