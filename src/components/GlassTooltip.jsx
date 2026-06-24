import { useState, useId } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

/**
 * GlassTooltip — wraps a term with a dotted underline.
 * On hover/focus it reveals a frosted-glass definition card.
 */
export default function GlassTooltip({ term, definition, children, side = 'top' }) {
  const [open, setOpen] = useState(false)
  const id = useId()

  const placement = {
    top: 'bottom-full left-1/2 -translate-x-1/2 mb-3',
    bottom: 'top-full left-1/2 -translate-x-1/2 mt-3',
  }[side] || 'bottom-full left-1/2 -translate-x-1/2 mb-3'

  return (
    <span className="relative inline-block">
      <button
        type="button"
        aria-describedby={open ? id : undefined}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        onFocus={() => setOpen(true)}
        onBlur={() => setOpen(false)}
        className="font-medium text-ink underline decoration-dotted decoration-ink/40 underline-offset-[5px] hover:decoration-ink focus-visible:outline-none focus-visible:decoration-ink"
      >
        {children || term}
      </button>
      <AnimatePresence>
        {open && (
          <motion.span
            id={id}
            role="tooltip"
            initial={{ opacity: 0, y: 6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.98 }}
            transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className={`absolute ${placement} z-30 w-72 rounded-xl bg-white/55 backdrop-blur-xl border border-white/60 shadow-[0_18px_40px_-18px_rgba(26,26,26,0.45)] p-4 text-left`}
          >
            <span className="block font-mono text-[10px] uppercase tracking-[0.28em] text-graphite">
              Glossary
            </span>
            <span className="block font-serif text-lg text-ink mt-1 leading-tight">{term}</span>
            <span className="block text-sm text-charcoal/90 mt-2 leading-relaxed">{definition}</span>
          </motion.span>
        )}
      </AnimatePresence>
    </span>
  )
}
