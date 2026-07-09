import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const facts = [
  {
    id: 'bacteria-count',
    stat: '39 Trillion',
    label: 'Bacteria in your body',
    desc: 'More bacterial cells than human cells inhabit your body at any given time',
  },
  {
    id: 'species-unknown',
    stat: '99%',
    label: 'Species undiscovered',
    desc: 'Scientists estimate we have identified less than 1% of all microbial species',
  },
  {
    id: 'ocean-oxygen',
    stat: '50-80%',
    label: 'Oxygen from microbes',
    desc: 'Marine phytoplankton produce the majority of Earth\'s atmospheric oxygen',
  },
  {
    id: 'soil-diversity',
    stat: '1 Billion',
    label: 'Microbes per gram of soil',
    desc: 'Healthy topsoil is one of the most biodiverse habitats on the planet',
  },
]

const FactsSection = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-20 md:py-32 relative overflow-hidden">
      <div
        className="absolute inset-0 z-0 opacity-30"
        data-strk-bg-id="facts-bg-o6p7q8"
        data-strk-bg="[facts-section-title] [facts-section-subtitle]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 z-10 bg-cosmos-dark/85" />

      <div className="relative z-20 max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2
            id="facts-section-title"
            className="text-3xl md:text-5xl font-bold mb-4 text-cosmos-text"
          >
            Mind-Blowing Facts
          </h2>
          <p
            id="facts-section-subtitle"
            className="text-lg md:text-xl font-light text-cosmos-muted max-w-2xl mx-auto"
          >
            The microscopic world is full of astonishing numbers and discoveries
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {facts.map((fact) => (
            <div
              key={fact.id}
              className="text-center p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm"
            >
              <div className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-cosmos-cyan to-cosmos-teal bg-clip-text text-transparent mb-2">
                {fact.stat}
              </div>
              <div className="text-cosmos-text font-semibold mb-2">{fact.label}</div>
              <p className="text-cosmos-muted text-sm">{fact.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FactsSection
