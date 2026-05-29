import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const worlds = [
  {
    id: 'w1',
    title: 'Freshwater Ponds',
    subtitle: 'Aquatic Microcosm',
    desc: 'A single drop of pond water contains thousands of organisms — amoebae, ciliates, algae, and rotifers all competing and cooperating in a microscopic ecosystem.',
  },
  {
    id: 'w2',
    title: 'Forest Soil',
    subtitle: 'Underground Network',
    desc: 'One teaspoon of healthy forest soil holds more microorganisms than there are people on Earth. Fungi, bacteria, and nematodes form the invisible web of life.',
  },
  {
    id: 'w3',
    title: 'Ocean Depths',
    subtitle: 'Marine Microbiome',
    desc: 'The ocean\'s microscopic plankton produce half of Earth\'s oxygen. Radiolarians, foraminifera, and cyanobacteria drift in vast invisible clouds.',
  },
  {
    id: 'w4',
    title: 'Human Body',
    subtitle: 'Inner Universe',
    desc: 'Your body hosts trillions of microorganisms — outnumbering your own cells. The gut microbiome alone contains over 1,000 species of bacteria.',
  },
]

export default function WorldsSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} id="worlds" className="bg-gray-900 py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-teal-400 text-sm uppercase tracking-widest font-semibold mb-4">
            Habitats
          </p>
          <h2
            id="worlds-title"
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Microscopic Worlds
          </h2>
          <p id="worlds-subtitle" className="text-gray-400 text-lg max-w-xl mx-auto">
            Every environment on Earth harbors its own unique microscopic universe, each teeming with invisible life.
          </p>
        </div>

        {/* Worlds grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {worlds.map((world) => (
            <div
              key={world.id}
              className="group relative overflow-hidden rounded-2xl border border-gray-700/40 hover:border-teal-500/40 transition-all duration-500 shadow-lg hover:shadow-teal-500/15"
            >
              {/* Background image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                data-strk-bg-id={`world-bg-mc-${world.id}`}
                data-strk-bg={`[world-desc-${world.id}] [world-title-${world.id}] [worlds-subtitle] [worlds-title]`}
                data-strk-bg-ratio="16x9"
                data-strk-bg-width="800"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950/95 via-gray-950/60 to-gray-950/20" />

              {/* Content */}
              <div className="relative z-10 p-8 min-h-[320px] flex flex-col justify-end">
                <span className="text-teal-400 text-xs uppercase tracking-widest font-semibold mb-2">
                  {world.subtitle}
                </span>
                <h3
                  id={`world-title-${world.id}`}
                  className="text-white text-2xl font-bold mb-3"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {world.title}
                </h3>
                <p
                  id={`world-desc-${world.id}`}
                  className="text-gray-300 text-sm leading-relaxed"
                >
                  {world.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Wide feature image */}
        <div className="mt-8 relative overflow-hidden rounded-2xl border border-gray-700/40 shadow-xl">
          <div
            className="absolute inset-0 bg-cover bg-center"
            data-strk-bg-id="worlds-wide-bg-mc001"
            data-strk-bg="[worlds-wide-desc] [worlds-wide-title] [worlds-subtitle] [worlds-title]"
            data-strk-bg-ratio="16x9"
            data-strk-bg-width="1400"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-950/90 via-gray-950/50 to-transparent" />
          <div className="relative z-10 p-12 md:p-16 max-w-2xl">
            <p className="text-teal-400 text-sm uppercase tracking-widest font-semibold mb-4">
              Did You Know?
            </p>
            <h3
              id="worlds-wide-title"
              className="text-3xl md:text-4xl font-bold text-white mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Microbes Predate All Other Life
            </h3>
            <p id="worlds-wide-desc" className="text-gray-300 text-lg leading-relaxed">
              Microorganisms have existed for over 3.5 billion years — long before plants, animals, or fungi. They terraformed Earth's atmosphere, making complex life possible.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
