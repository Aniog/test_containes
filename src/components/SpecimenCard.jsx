import { motion } from 'framer-motion'

const SpecimenCard = ({ specimen, index, isLarge = false }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`group bg-white/30 backdrop-blur-md border border-white/20 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 ${
        isLarge ? 'md:col-span-2 md:row-span-2' : ''
      }`}
    >
      {/* Image placeholder with grayscale */}
      <div
        className={`relative overflow-hidden bg-mist ${
          isLarge ? 'h-64 md:h-80' : 'h-48'
        }`}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-ink/20" />
        {/* SVG microscopy pattern */}
        <svg
          className="absolute inset-0 w-full h-full opacity-20"
          viewBox="0 0 400 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="200" cy="150" r="80" stroke="#1A1A1A" strokeWidth="0.5" fill="none" />
          <circle cx="200" cy="150" r="60" stroke="#1A1A1A" strokeWidth="0.3" fill="none" />
          <circle cx="200" cy="150" r="40" stroke="#1A1A1A" strokeWidth="0.3" fill="none" />
          <circle cx="180" cy="130" r="15" stroke="#1A1A1A" strokeWidth="0.5" fill="none" />
          <circle cx="220" cy="160" r="12" stroke="#1A1A1A" strokeWidth="0.5" fill="none" />
          <circle cx="190" cy="170" r="8" stroke="#1A1A1A" strokeWidth="0.5" fill="none" />
          <line x1="0" y1="150" x2="400" y2="150" stroke="#1A1A1A" strokeWidth="0.2" strokeDasharray="4 4" />
          <line x1="200" y1="0" x2="200" y2="300" stroke="#1A1A1A" strokeWidth="0.2" strokeDasharray="4 4" />
        </svg>
        <div className="absolute bottom-3 left-3 bg-white/30 backdrop-blur-sm border border-white/20 rounded-lg px-2 py-1">
          <span className="font-mono text-xs text-ink">{specimen.magnification}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center gap-2 mb-2">
          <span className="font-mono text-xs text-slate uppercase tracking-wider">
            {specimen.category}
          </span>
        </div>
        <h3 className="font-serif text-xl font-semibold text-ink mb-2">
          {specimen.title}
        </h3>
        <p className="text-sm text-charcoal leading-relaxed mb-4">
          {specimen.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {specimen.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-mono text-slate bg-mist/50 px-2 py-1 rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  )
}

export default SpecimenCard
