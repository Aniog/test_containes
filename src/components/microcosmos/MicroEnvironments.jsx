import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const environments = [
  {
    id: 'pond-water',
    title: 'Pond Water Ecosystem',
    desc: 'A single drop of pond water contains thousands of microorganisms forming complex food webs',
    imgId: 'env-pond-j1k2l3',
  },
  {
    id: 'ocean-plankton',
    title: 'Ocean Plankton',
    desc: 'Phytoplankton produce over half of the world\'s oxygen through photosynthesis',
    imgId: 'env-ocean-m4n5o6',
  },
  {
    id: 'soil-microbes',
    title: 'Soil Microbiome',
    desc: 'A teaspoon of healthy soil contains more microorganisms than there are people on Earth',
    imgId: 'env-soil-p7q8r9',
  },
  {
    id: 'hot-springs',
    title: 'Extremophile Habitats',
    desc: 'Thermophilic bacteria thrive in boiling hot springs and volcanic vents at temperatures above 80°C',
    imgId: 'env-hotspring-s1t2u3',
  },
]

const MicroEnvironments = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2
            id="env-section-title"
            className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cosmos-teal to-cosmos-cyan bg-clip-text text-transparent"
          >
            Micro Environments
          </h2>
          <p
            id="env-section-subtitle"
            className="text-lg md:text-xl font-light text-cosmos-muted max-w-2xl mx-auto"
          >
            Every habitat on Earth teems with microscopic life, from boiling springs to frozen tundra
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {environments.map((env, index) => (
            <article
              key={env.id}
              className={`group relative rounded-2xl overflow-hidden border border-white/10 ${
                index === 0 ? 'md:col-span-2 aspect-[16/9]' : 'aspect-[4/3]'
              }`}
            >
              <img
                alt={env.title}
                data-strk-img-id={env.imgId}
                data-strk-img={`[env-${env.id}-desc] [env-${env.id}-title] [env-section-title]`}
                data-strk-img-ratio={index === 0 ? '16x9' : '4x3'}
                data-strk-img-width={index === 0 ? '1200' : '800'}
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cosmos-dark/90 via-cosmos-dark/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <h3
                  id={`env-${env.id}-title`}
                  className="text-xl md:text-2xl font-bold text-cosmos-text mb-2"
                >
                  {env.title}
                </h3>
                <p
                  id={`env-${env.id}-desc`}
                  className="text-cosmos-muted text-sm md:text-base leading-relaxed"
                >
                  {env.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MicroEnvironments
