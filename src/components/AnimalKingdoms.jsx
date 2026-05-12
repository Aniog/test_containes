import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const kingdoms = [
  {
    id: 'mammals',
    titleId: 'kingdom-title-mammals',
    descId: 'kingdom-desc-mammals',
    title: 'Mammals',
    description: 'Warm-blooded vertebrates that nurse their young with milk. From tiny shrews to massive blue whales.',
    count: '5,500+ species',
    color: 'from-amber-500 to-orange-600',
    bgId: 'kingdom-bg-mammals-4f2a9b',
  },
  {
    id: 'birds',
    titleId: 'kingdom-title-birds',
    descId: 'kingdom-desc-birds',
    title: 'Birds',
    description: 'Feathered, winged creatures found on every continent, from tropical parrots to Arctic owls.',
    count: '10,000+ species',
    color: 'from-sky-500 to-blue-600',
    bgId: 'kingdom-bg-birds-7c3e1d',
  },
  {
    id: 'reptiles',
    titleId: 'kingdom-title-reptiles',
    descId: 'kingdom-desc-reptiles',
    title: 'Reptiles',
    description: 'Cold-blooded scaly animals including crocodiles, snakes, lizards, and ancient sea turtles.',
    count: '10,000+ species',
    color: 'from-green-600 to-emerald-700',
    bgId: 'kingdom-bg-reptiles-2b8f5a',
  },
  {
    id: 'ocean',
    titleId: 'kingdom-title-ocean',
    descId: 'kingdom-desc-ocean',
    title: 'Ocean Life',
    description: 'The vast underwater world teems with life — from microscopic plankton to the great white shark.',
    count: '230,000+ species',
    color: 'from-teal-500 to-cyan-700',
    bgId: 'kingdom-bg-ocean-9d1c6e',
  },
]

export default function AnimalKingdoms() {
  const containerRef = useRef(null)

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <p id="kingdoms-eyebrow" className="text-amber-600 font-semibold tracking-widest uppercase text-sm mb-3">
            Explore by Category
          </p>
          <h2
            id="kingdoms-heading"
            className="text-gray-900 text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Animal Kingdoms
          </h2>
          <p id="kingdoms-subheading" className="text-gray-500 text-lg max-w-xl mx-auto">
            Life on Earth is astonishingly diverse — explore the major groups that share our planet
          </p>
        </div>

        {/* Kingdoms grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {kingdoms.map((kingdom) => (
            <div
              key={kingdom.id}
              className="relative rounded-2xl overflow-hidden min-h-[280px] flex items-end group cursor-pointer"
            >
              {/* Background image */}
              <div
                className="absolute inset-0 z-0 transition-transform duration-500 group-hover:scale-105"
                data-strk-bg-id={kingdom.bgId}
                data-strk-bg={`[${kingdom.descId}] [${kingdom.titleId}] [kingdoms-subheading] [kingdoms-heading]`}
                data-strk-bg-ratio="16x9"
                data-strk-bg-width="800"
              />
              {/* Gradient overlay */}
              <div className={`absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-black/30 to-transparent`} />

              {/* Content */}
              <div className="relative z-20 p-8 w-full">
                <span className={`inline-block text-xs font-bold text-white bg-gradient-to-r ${kingdom.color} px-3 py-1 rounded-full mb-3`}>
                  {kingdom.count}
                </span>
                <h3
                  id={kingdom.titleId}
                  className="text-white text-2xl md:text-3xl font-bold mb-2"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  {kingdom.title}
                </h3>
                <p id={kingdom.descId} className="text-white/75 text-sm leading-relaxed max-w-sm">
                  {kingdom.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
