import { useState } from 'react'
import { motion } from 'framer-motion'

const Tooltip = ({ term, definition, children }) => {
  const [visible, setVisible] = useState(false)

  return (
    <span
      className="relative inline-block"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      onFocus={() => setVisible(true)}
      onBlur={() => setVisible(false)}
      tabIndex={0}
      role="button"
      aria-describedby={`tooltip-${term}`}
    >
      <span className="border-b border-dashed border-slate cursor-help">
        {children}
      </span>
      {visible && (
        <motion.div
          id={`tooltip-${term}`}
          role="tooltip"
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 4 }}
          className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-56 bg-white/40 backdrop-blur-lg border border-white/30 rounded-xl p-3 shadow-lg z-50"
        >
          <p className="font-mono text-xs text-ink font-semibold mb-1">{term}</p>
          <p className="text-xs text-charcoal leading-relaxed">{definition}</p>
          <div className="absolute top-full left-1/2 -translate-x-1/2 w-2 h-2 bg-white/40 border-r border-b border-white/30 rotate-45 -mt-1" />
        </motion.div>
      )}
    </span>
  )
}

export default Tooltip
