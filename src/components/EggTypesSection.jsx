import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const eggTypes = [
  {
    id: 'chicken',
    name: 'Chicken Eggs',
    description: 'The most widely consumed egg in the world. Versatile, nutritious, and available in white or brown shells.',
    imgId: 'type-img-c1a2b3',
  },
  {
    id: 'duck',
    name: 'Duck Eggs',
    description: 'Larger than chicken eggs with a richer, creamier yolk. Prized by bakers for their higher fat content.',
    imgId: 'type-img-d4e5f6',
  },
  {
    id: 'quail',
    name: 'Quail Eggs',
    description: 'Tiny and delicate with a speckled shell. A gourmet delicacy often served as appetizers or garnishes.',
    imgId: 'type-img-q7g8h9',
  },
  {
    id: 'goose',
    name: 'Goose Eggs',
    description: 'Much larger than chicken eggs, with a bold flavor. One goose egg equals about three chicken eggs.',
    imgId: 'type-img-g0i1j2',
  },
]

export default function EggTypesSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="bg-amber-50 py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p
            id="types-label"
            className="text-amber-600 uppercase tracking-[0.25em] text-xs mb-4"
            style={{ fontFamily: "'Lato', sans-serif" }}
          >
            Varieties
          </p>
          <h2
            id="types-title"
            className="text-4xl md:text-5xl font-bold text-[#2c1a0e]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Types of Eggs
          </h2>
          <p
            id="types-subtitle"
            className="text-[#5a3e2b] mt-4 text-lg max-w-xl mx-auto"
            style={{ fontFamily: "'Lato', sans-serif", fontWeight: 300 }}
          >
            From the humble chicken egg to exotic varieties, each type brings its own unique flavor and character.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {eggTypes.map((egg) => (
            <div key={egg.id} className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="overflow-hidden h-48">
                <img
                  alt={egg.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  data-strk-img-id={egg.imgId}
                  data-strk-img={`[type-desc-${egg.id}] [type-name-${egg.id}] [types-subtitle] [types-title]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 3'/%3E"
                />
              </div>
              <div className="p-5">
                <h3
                  id={`type-name-${egg.id}`}
                  className="text-xl font-bold text-[#2c1a0e] mb-2"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {egg.name}
                </h3>
                <p
                  id={`type-desc-${egg.id}`}
                  className="text-[#5a3e2b] text-sm leading-relaxed"
                  style={{ fontFamily: "'Lato', sans-serif", fontWeight: 300 }}
                >
                  {egg.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
