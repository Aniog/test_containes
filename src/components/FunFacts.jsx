import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const facts = [
  {
    emoji: '🐋',
    titleId: 'fact-title-whale',
    descId: 'fact-desc-whale',
    title: 'Blue Whale Heart',
    description: "A blue whale's heart is so large that a human could crawl through its arteries. It beats only 5–6 times per minute.",
  },
  {
    emoji: '🦅',
    titleId: 'fact-title-peregrine',
    descId: 'fact-desc-peregrine',
    title: 'Fastest Animal',
    description: 'The peregrine falcon is the fastest animal on Earth, reaching speeds over 240 mph (386 km/h) in a dive.',
  },
  {
    emoji: '🐘',
    titleId: 'fact-title-elephant-memory',
    descId: 'fact-desc-elephant-memory',
    title: 'Elephant Memory',
    description: 'Elephants can remember the locations of water sources and recognize hundreds of individual elephants across decades.',
  },
  {
    emoji: '🦑',
    titleId: 'fact-title-octopus',
    descId: 'fact-desc-octopus',
    title: 'Octopus Intelligence',
    description: 'Octopuses have three hearts, blue blood, and can solve complex puzzles. Each arm has its own mini-brain.',
  },
]

export default function FunFacts() {
  const containerRef = useRef(null)

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <p id="facts-eyebrow" className="text-amber-600 font-semibold tracking-widest uppercase text-sm mb-3">
            Did You Know?
          </p>
          <h2
            id="facts-heading"
            className="text-gray-900 text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Amazing Animal Facts
          </h2>
          <p id="facts-subheading" className="text-gray-500 text-lg max-w-xl mx-auto">
            Nature never ceases to amaze — here are some of the most extraordinary facts about animals
          </p>
        </div>

        {/* Facts grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {facts.map((fact) => (
            <div
              key={fact.titleId}
              className="flex gap-5 p-6 bg-amber-50 rounded-2xl border border-amber-100 hover:border-amber-300 transition-colors duration-200"
            >
              <div className="text-4xl flex-shrink-0 mt-1">{fact.emoji}</div>
              <div>
                <h3
                  id={fact.titleId}
                  className="text-gray-900 text-lg font-bold mb-2"
                >
                  {fact.title}
                </h3>
                <p id={fact.descId} className="text-gray-600 text-sm leading-relaxed">
                  {fact.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Wide banner image */}
        <div className="relative rounded-3xl overflow-hidden">
          <img
            alt="Wildlife in nature"
            data-strk-img-id="facts-banner-img-8e2f4c"
            data-strk-img="[facts-subheading] [facts-heading] wildlife nature animals"
            data-strk-img-ratio="16x9"
            data-strk-img-width="1200"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 9'/%3E"
            className="w-full object-cover h-64 md:h-96 bg-gray-100"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center">
            <div className="p-8 md:p-14 max-w-lg">
              <h3
                id="banner-title"
                className="text-white text-3xl md:text-4xl font-bold mb-3"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Every Species Matters
              </h3>
              <p id="banner-desc" className="text-white/80 text-base leading-relaxed">
                Over 8 million species share our planet. Each one plays a vital role in the web of life that sustains us all.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
