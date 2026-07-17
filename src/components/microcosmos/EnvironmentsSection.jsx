import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const environments = [
  {
    id: 'ocean-drop',
    title: 'A Drop of Ocean Water',
    desc: 'Teeming with copepods, diatoms, dinoflagellates, and larvae of countless marine species',
    imgId: 'env-ocean-2a5c8f',
  },
  {
    id: 'soil-grain',
    title: 'A Grain of Soil',
    desc: 'Home to billions of bacteria, fungi, nematodes, and protozoa forming underground ecosystems',
    imgId: 'env-soil-6d9b3e',
  },
  {
    id: 'pond-surface',
    title: 'Pond Surface Film',
    desc: 'A thin layer hosting hydra, amoeba, euglena, and countless other freshwater microorganisms',
    imgId: 'env-pond-4f7a1c',
  },
  {
    id: 'leaf-surface',
    title: 'Leaf Surface',
    desc: 'Stomata, trichomes, and epiphytic microbes creating a miniature landscape on every leaf',
    imgId: 'env-leaf-8c2e5d',
  },
  {
    id: 'coral-polyp',
    title: 'Coral Polyps',
    desc: 'Symbiotic algae living within coral tissue creating the vibrant colors of reef ecosystems',
    imgId: 'env-coral-1b4f9a',
  },
  {
    id: 'hot-spring',
    title: 'Hot Spring Extremophiles',
    desc: 'Thermophilic bacteria thriving in boiling water creating vivid mineral-rich color bands',
    imgId: 'env-hotspring-7e3c8b',
  },
]

const EnvironmentsSection = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-20 md:py-32 bg-deep-dark">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <p className="text-accent-warm font-medium text-sm uppercase tracking-widest mb-3">
            Habitats
          </p>
          <h2 id="env-section-title" className="text-3xl md:text-5xl font-bold tracking-tight text-text-primary mb-4">
            Worlds Within Worlds
          </h2>
          <p id="env-section-subtitle" className="text-lg md:text-xl font-light text-text-secondary max-w-2xl mx-auto">
            Every environment on Earth harbors its own microscopic universe of life
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {environments.map((env) => (
            <div
              key={env.id}
              className="relative rounded-2xl overflow-hidden group cursor-pointer"
            >
              <div className="aspect-[3/4]">
                <img
                  alt={env.title}
                  data-strk-img-id={env.imgId}
                  data-strk-img={`[env-${env.id}-desc] [env-${env.id}-title] [env-section-subtitle] [env-section-title]`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="500"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-deep-dark via-deep-dark/30 to-transparent flex items-end p-6">
                <div>
                  <h3 id={`env-${env.id}-title`} className="text-lg font-bold text-text-primary mb-1">
                    {env.title}
                  </h3>
                  <p id={`env-${env.id}-desc`} className="text-text-secondary text-sm leading-relaxed">
                    {env.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default EnvironmentsSection
