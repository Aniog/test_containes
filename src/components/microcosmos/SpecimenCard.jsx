import { motion } from 'framer-motion'

// A single high-contrast B/W micrograph card. Used inside Specimen Hub mosaics.
export default function SpecimenCard({ item, query, ratio = '4x3', size = 'md' }) {
  const ratioClass = {
    '1x1': 'aspect-square',
    '4x3': 'aspect-[4/3]',
    '3x2': 'aspect-[3/2]',
    '3x4': 'aspect-[3/4]',
  }[ratio] || 'aspect-[4/3]'

  const padding = size === 'lg' ? 'p-5' : 'p-4'

  return (
    <motion.figure
      whileHover={{ y: -3 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative bg-parchment-dim ring-1 ring-bone ${padding} rounded-sm`}
    >
      <div className={`relative ${ratioClass} overflow-hidden bg-ink`}>
        <img
          alt={item.name}
          data-strk-img-id={`spec-${item.id}`}
          data-strk-img={query}
          data-strk-img-ratio={ratio}
          data-strk-img-width="800"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          className="w-full h-full object-cover grayscale contrast-110 transition duration-700 group-hover:scale-[1.03]"
        />
        <div className="absolute top-3 left-3 small-caps text-parchment/95 bg-ink/55 backdrop-blur-sm px-2.5 py-1 rounded">
          {item.magnification}
        </div>
      </div>

      <figcaption className="pt-4 flex items-baseline justify-between gap-3">
        <div>
          <h3 className="font-serif text-ink text-xl leading-tight">{item.name}</h3>
          <p className="text-charcoal text-sm mt-1 leading-relaxed max-w-[28ch]">
            {item.note}
          </p>
        </div>
        <span className="font-mono text-xs text-graphite shrink-0">№ {item.id.toUpperCase()}</span>
      </figcaption>
    </motion.figure>
  )
}
