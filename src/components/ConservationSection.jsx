import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const initiatives = [
  {
    icon: '🌿',
    title: 'Habitat Protection',
    description: 'Preserving and restoring natural habitats is the most effective way to protect biodiversity and prevent species extinction.',
  },
  {
    icon: '🔬',
    title: 'Wildlife Research',
    description: 'Scientific research helps us understand animal behavior, migration patterns, and the threats they face in a changing world.',
  },
  {
    icon: '🤝',
    title: 'Community Action',
    description: 'Local communities are the frontline defenders of wildlife. Empowering them with knowledge and resources creates lasting change.',
  },
]

export default function ConservationSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section id="conservation" ref={containerRef} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top split layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Text side */}
          <div>
            <p id="conservation-eyebrow" className="text-red-600 font-semibold tracking-widest uppercase text-sm mb-3">
              Our Responsibility
            </p>
            <h2 id="conservation-title" className="font-display text-gray-900 text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Protecting Wildlife for Future Generations
            </h2>
            <p id="conservation-subtitle" className="text-gray-500 text-lg leading-relaxed mb-8">
              Over one million animal and plant species are currently threatened with extinction — more than at any other time in human history. But there is hope. Conservation efforts around the world are making a real difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://www.worldwildlife.org"
                target="_blank"
                rel="noreferrer"
                className="inline-block bg-green-700 hover:bg-green-600 text-white font-semibold px-7 py-3.5 rounded-full transition-colors no-underline text-sm text-center"
              >
                Support WWF
              </a>
              <a
                href="https://www.iucnredlist.org"
                target="_blank"
                rel="noreferrer"
                className="inline-block border-2 border-green-700 text-green-700 hover:bg-green-50 font-semibold px-7 py-3.5 rounded-full transition-colors no-underline text-sm text-center"
              >
                IUCN Red List
              </a>
            </div>
          </div>

          {/* Image side */}
          <div className="relative rounded-3xl overflow-hidden h-96 shadow-2xl">
            <img
              alt="Wildlife conservation"
              className="w-full h-full object-cover"
              data-strk-img-id="conservation-img-b8x3k"
              data-strk-img="[conservation-subtitle] [conservation-title] [conservation-eyebrow]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
        </div>

        {/* Initiatives */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {initiatives.map((item) => (
            <div key={item.title} className="bg-stone-50 rounded-2xl p-8 border border-stone-100">
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-gray-900 font-bold text-xl mb-3 font-display">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
