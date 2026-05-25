import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const dogBreeds = [
  {
    id: 'golden-retriever',
    name: 'Golden Retriever',
    trait: 'Friendly & Loyal',
    description: 'Known for their gentle temperament and intelligence, Golden Retrievers are one of the most popular family dogs in the world.',
    tags: ['Family-friendly', 'Trainable', 'Energetic'],
  },
  {
    id: 'french-bulldog',
    name: 'French Bulldog',
    trait: 'Playful & Adaptable',
    description: 'Compact and charming, French Bulldogs thrive in apartments and love being the center of attention with their big personalities.',
    tags: ['Apartment-friendly', 'Low-energy', 'Affectionate'],
  },
  {
    id: 'border-collie',
    name: 'Border Collie',
    trait: 'Intelligent & Athletic',
    description: 'Widely regarded as the most intelligent dog breed, Border Collies excel at agility, herding, and learning new tricks.',
    tags: ['High-energy', 'Smart', 'Working dog'],
  },
]

export default function DogsSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section id="dogs" ref={containerRef} className="py-20 md:py-28 bg-amber-50">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Section header */}
        <div className="text-center mb-14">
          <span className="text-5xl mb-4 block">🐶</span>
          <h2 id="dogs-title" className="text-3xl md:text-5xl font-bold text-stone-800 mb-4">
            All About Dogs
          </h2>
          <p id="dogs-subtitle" className="text-lg text-stone-500 max-w-2xl mx-auto leading-relaxed">
            Loyal, playful, and endlessly loving — dogs have earned their title as man's best friend for thousands of years.
          </p>
        </div>

        {/* Featured dog image */}
        <div className="relative rounded-3xl overflow-hidden mb-14 shadow-xl h-72 md:h-96">
          <img
            alt="Happy dogs playing outdoors"
            className="w-full h-full object-cover"
            data-strk-img-id="dogs-hero-d4e5f6"
            data-strk-img="[dogs-subtitle] [dogs-title]"
            data-strk-img-ratio="16x9"
            data-strk-img-width="1200"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-amber-900/40 to-transparent" />
          <div className="absolute bottom-6 left-6 text-white">
            <p className="text-sm font-medium uppercase tracking-widest text-amber-200">Did you know?</p>
            <p className="text-xl md:text-2xl font-bold max-w-md">Dogs can understand over 150 words and gestures.</p>
          </div>
        </div>

        {/* Breed cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {dogBreeds.map((breed) => (
            <div key={breed.id} className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img
                  alt={breed.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  data-strk-img-id={`dog-breed-${breed.id}-g7h8`}
                  data-strk-img={`[dog-breed-desc-${breed.id}] [dog-breed-name-${breed.id}] [dogs-subtitle] [dogs-title]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              </div>
              <div className="p-6">
                <span className="text-xs font-semibold text-amber-600 uppercase tracking-wider">{breed.trait}</span>
                <h3 id={`dog-breed-name-${breed.id}`} className="text-xl font-bold text-stone-800 mt-1 mb-2">{breed.name}</h3>
                <p id={`dog-breed-desc-${breed.id}`} className="text-stone-500 text-sm leading-relaxed mb-4">{breed.description}</p>
                <div className="flex flex-wrap gap-2">
                  {breed.tags.map((tag) => (
                    <span key={tag} className="bg-amber-100 text-amber-700 text-xs font-medium px-3 py-1 rounded-full">
                      {tag}
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
