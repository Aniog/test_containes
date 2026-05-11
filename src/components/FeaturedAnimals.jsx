import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const animals = [
  {
    id: 'lion',
    name: 'African Lion',
    tagline: 'The King of the Savanna',
    description: 'Lions are the only truly social big cats, living in groups called prides. A male\'s roar can be heard up to 8 km away.',
    badge: 'Vulnerable',
    badgeColor: 'bg-amber-100 text-amber-800',
    emoji: '🦁',
  },
  {
    id: 'elephant',
    name: 'African Elephant',
    tagline: 'The Gentle Giant',
    description: 'The largest land animal on Earth, elephants display remarkable intelligence, empathy, and complex social bonds within their herds.',
    badge: 'Endangered',
    badgeColor: 'bg-red-100 text-red-800',
    emoji: '🐘',
  },
  {
    id: 'dolphin',
    name: 'Bottlenose Dolphin',
    tagline: 'Ocean\'s Playful Genius',
    description: 'Dolphins are among the most intelligent animals, using echolocation to navigate and communicate with sophisticated vocalizations.',
    badge: 'Least Concern',
    badgeColor: 'bg-blue-100 text-blue-800',
    emoji: '🐬',
  },
  {
    id: 'eagle',
    name: 'Bald Eagle',
    tagline: 'Ruler of the Skies',
    description: 'With a wingspan of up to 2.4 meters, bald eagles soar at great heights and can spot prey from over 3 km away.',
    badge: 'Least Concern',
    badgeColor: 'bg-green-100 text-green-800',
    emoji: '🦅',
  },
  {
    id: 'panda',
    name: 'Giant Panda',
    tagline: 'Symbol of Conservation',
    description: 'Giant pandas spend up to 16 hours a day eating bamboo. Their distinctive black-and-white markings make them one of the world\'s most recognizable animals.',
    badge: 'Vulnerable',
    badgeColor: 'bg-amber-100 text-amber-800',
    emoji: '🐼',
  },
  {
    id: 'cheetah',
    name: 'Cheetah',
    tagline: 'The World\'s Fastest Land Animal',
    description: 'Cheetahs can accelerate from 0 to 100 km/h in just 3 seconds. Unlike other big cats, they purr instead of roar.',
    badge: 'Vulnerable',
    badgeColor: 'bg-amber-100 text-amber-800',
    emoji: '🐆',
  },
]

export default function FeaturedAnimals() {
  const containerRef = useRef(null)

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section id="featured" ref={containerRef} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <p id="featured-eyebrow" className="text-amber-600 font-semibold tracking-widest uppercase text-sm mb-3">
            Wildlife Spotlight
          </p>
          <h2 id="featured-title" className="font-display text-gray-900 text-4xl md:text-5xl font-bold mb-4">
            Featured Animals
          </h2>
          <p id="featured-subtitle" className="text-gray-500 text-lg max-w-2xl mx-auto">
            Meet some of the most fascinating creatures that share our planet — each one a marvel of evolution and adaptation.
          </p>
        </div>

        {/* Animal grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {animals.map((animal) => (
            <div
              key={animal.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative overflow-hidden h-56">
                <img
                  alt={animal.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  data-strk-img-id={`animal-img-${animal.id}-7k2m`}
                  data-strk-img={`[animal-desc-${animal.id}] [animal-name-${animal.id}] [featured-subtitle] [featured-title]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <span className="absolute top-4 left-4 text-3xl">{animal.emoji}</span>
                <span className={`absolute top-4 right-4 text-xs font-semibold px-3 py-1 rounded-full ${animal.badgeColor}`}>
                  {animal.badge}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-amber-600 text-xs font-semibold uppercase tracking-wider mb-1">
                  {animal.tagline}
                </p>
                <h3
                  id={`animal-name-${animal.id}`}
                  className="text-gray-900 text-xl font-bold mb-2 font-display"
                >
                  {animal.name}
                </h3>
                <p
                  id={`animal-desc-${animal.id}`}
                  className="text-gray-500 text-sm leading-relaxed"
                >
                  {animal.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
