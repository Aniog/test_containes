import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// Glassmorphism tooltip used to reveal scientific term definitions on hover/focus.
export default function GlassTooltip({ term, definition, children }) {
  const [open, setOpen] = useState(false)

  return (
    <span className="relative inline-block">
      <button
        type="button"
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        onFocus={() => setOpen(true)}
        onBlur={() => setOpen(false)}
        className="font-medium text-ink underline decoration-dotted decoration-pencil underline-offset-4 cursor-help focus:outline-none focus-visible:ring-1 focus-visible:ring-ink rounded"
        aria-describedby={`tip-${term}`}
      >
        {children || term}
      </button>

      <AnimatePresence>
        {open && (
          <motion.span
            id={`tip-${term}`}
            role="tooltip"
            initial={{ opacity: 0, y: 6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.98 }}
            transition={{ duration: 0.18 }}
            className="absolute left-1/2 -translate-x-1/2 top-full mt-3 z-30 w-72 max-w-[80vw]
                       rounded-2xl border border-white/40 bg-white/55 backdrop-blur-md
                       shadow-[0_14px_44px_rgba(26,26,26,0.18)] p-4 text-left"
          >
            <span className="block small-caps text-graphite mb-1">{term}</span>
            <span className="block text-charcoal text-sm leading-relaxed">
              {definition}
            </span>
          </motion.span>
        )}
      </AnimatePresence>
    </span>
  )
}
