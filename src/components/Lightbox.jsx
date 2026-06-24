import { motion } from 'framer-motion'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

const Lightbox = ({ slide, onClose, onPrev, onNext, hasPrev, hasNext }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[100] flex items-center justify-center"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Slide: ${slide.title}`}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-ink/70 backdrop-blur-lg" />

      {/* Content */}
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="relative z-10 w-full max-w-6xl mx-4 flex flex-col lg:flex-row gap-6 max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Image Area */}
        <div className="flex-1 relative bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden flex items-center justify-center min-h-[300px] lg:min-h-[500px]">
          {/* SVG microscopy illustration */}
          <svg
            className="w-full h-full absolute inset-0 opacity-30"
            viewBox="0 0 600 400"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="300" cy="200" r="150" stroke="#F2F0E9" strokeWidth="0.5" fill="none" />
            <circle cx="300" cy="200" r="120" stroke="#F2F0E9" strokeWidth="0.3" fill="none" />
            <circle cx="300" cy="200" r="90" stroke="#F2F0E9" strokeWidth="0.3" fill="none" />
            {slide.cells.map((cell, i) => (
              <circle
                key={i}
                cx={cell.x}
                cy={cell.y}
                r={cell.r}
                stroke="#F2F0E9"
                strokeWidth="0.8"
                fill="none"
              />
            ))}
            <line x1="0" y1="200" x2="600" y2="200" stroke="#F2F0E9" strokeWidth="0.2" strokeDasharray="6 6" />
            <line x1="300" y1="0" x2="300" y2="400" stroke="#F2F0E9" strokeWidth="0.2" strokeDasharray="6 6" />
          </svg>

          {/* Magnification overlay */}
          <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm border border-white/20 rounded-lg px-3 py-1">
            <span className="font-mono text-xs text-parchment">{slide.magnification}</span>
          </div>

          {/* Navigation arrows */}
          {hasPrev && (
            <button
              onClick={onPrev}
              className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm border border-white/20 rounded-full p-2 hover:bg-white/30 transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5 text-parchment" />
            </button>
          )}
          {hasNext && (
            <button
              onClick={onNext}
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm border border-white/20 rounded-full p-2 hover:bg-white/30 transition-colors"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5 text-parchment" />
            </button>
          )}
        </div>

        {/* Metadata Sidebar */}
        <div className="lg:w-80 bg-white/20 backdrop-blur-md border border-white/10 rounded-2xl p-6 overflow-y-auto">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 lg:static lg:mb-6 bg-white/20 backdrop-blur-sm border border-white/20 rounded-full p-2 hover:bg-white/30 transition-colors"
            aria-label="Close lightbox"
          >
            <X className="w-4 h-4 text-parchment" />
          </button>

          <h2 className="font-serif text-2xl font-semibold text-parchment mb-2">
            {slide.title}
          </h2>
          <p className="text-parchment/70 text-sm mb-6">{slide.description}</p>

          <div className="space-y-4">
            <div className="border-t border-white/10 pt-4">
              <p className="font-mono text-xs text-parchment/50 uppercase tracking-wider mb-1">
                Specimen ID
              </p>
              <p className="font-mono text-sm text-parchment">{slide.id}</p>
            </div>
            <div className="border-t border-white/10 pt-4">
              <p className="font-mono text-xs text-parchment/50 uppercase tracking-wider mb-1">
                Magnification
              </p>
              <p className="font-mono text-sm text-parchment">{slide.magnification}</p>
            </div>
            <div className="border-t border-white/10 pt-4">
              <p className="font-mono text-xs text-parchment/50 uppercase tracking-wider mb-1">
                Staining Method
              </p>
              <p className="font-mono text-sm text-parchment">{slide.stain}</p>
            </div>
            <div className="border-t border-white/10 pt-4">
              <p className="font-mono text-xs text-parchment/50 uppercase tracking-wider mb-1">
                Collector's Notes
              </p>
              <p className="text-sm text-parchment/80 leading-relaxed italic">
                {slide.notes}
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default Lightbox
