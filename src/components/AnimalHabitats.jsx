import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const habitats = [
  {
    id: 'savanna',
    name: 'African Savanna',
    description: 'Vast grasslands stretching across Africa, home to lions, elephants, giraffes, and wildebeest in one of nature\'s greatest ecosystems.',
    animals: ['Lion', 'Elephant', 'Giraffe', 'Zebra', 'Cheetah'],
    color: 'from-amber-900/70 to-amber-700/50',
  },
  {
    id: 'ocean',
    name: 'Deep Ocean',
    description: 'Covering over 70% of Earth\'s surface, the ocean teems with life from playful dolphins to mysterious deep-sea creatures.',
    animals: ['Dolphin', 'Blue Whale', 'Octopus', 'Sea Turtle', 'Shark'],
    color: 'from-blue-900/70 to-blue-700/50',
  },
  {
    id: 'rainforest',
    name: 'Tropical Rainforest',
    description: 'The most biodiverse ecosystems on Earth, rainforests are home to more than half of the world\'s plant and animal species.',
    animals: ['Jaguar', 'Toucan', 'Poison Dart Frog', 'Gorilla', 'Sloth'],
    color: 'from-green-900/70 to-green-700/50',
  },
  {
    id: 'arctic',
    name: 'Arctic Tundra',
    description: 'A frozen wilderness where resilient animals have adapted to extreme cold, from polar bears to arctic foxes and snowy owls.',
    animals: ['Polar Bear', 'Arctic Fox', 'Snowy Owl', 'Walrus', 'Reindeer'],
    color: 'from-slate-800/70 to-slate-600/50',
  },
]

export default function AnimalHabitats() {
  const containerRef = useRef(null)

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section id="habitats" ref={containerRef} className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <p id="habitats-eyebrow" className="text-green-700 font-semibold tracking-widest uppercase text-sm mb-3">
            Where They Live
          </p>
          <h2 id="habitats-title" className="font-display text-gray-900 text-4xl md:text-5xl font-bold mb-4">
            Animal Habitats
          </h2>
          <p id="habitats-subtitle" className="text-gray-500 text-lg max-w-2xl mx-auto">
            From scorching savannas to frozen tundras, animals have conquered every corner of our planet.
          </p>
        </div>

        {/* Habitats grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {habitats.map((habitat) => (
            <div
              key={habitat.id}
              className="group relative rounded-3xl overflow-hidden h-80 cursor-pointer"
            >
              {/* Background image */}
              <div
                className="absolute inset-0"
                data-strk-bg-id={`habitat-bg-${habitat.id}-9p4r`}
                data-strk-bg={`[habitat-desc-${habitat.id}] [habitat-name-${habitat.id}] [habitats-subtitle] [habitats-title]`}
                data-strk-bg-ratio="4x3"
                data-strk-bg-width="800"
              />

              {/* Gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-t ${habitat.color} group-hover:opacity-90 transition-opacity duration-300`} />

              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <h3
                  id={`habitat-name-${habitat.id}`}
                  className="text-white text-2xl font-bold font-display mb-2"
                >
                  {habitat.name}
                </h3>
                <p
                  id={`habitat-desc-${habitat.id}`}
                  className="text-white/80 text-sm leading-relaxed mb-4 max-w-sm"
                >
                  {habitat.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {habitat.animals.map((animal) => (
                    <span
                      key={animal}
                      className="text-xs bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full border border-white/20"
                    >
                      {animal}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
