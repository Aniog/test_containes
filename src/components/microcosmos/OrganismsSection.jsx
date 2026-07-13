import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const organisms = [
  {
    id: 'amoeba',
    title: 'Amoeba',
    desc: 'Shape-shifting single-celled organisms that engulf food through pseudopods, constantly changing form as they move through their aquatic environment.',
    imgId: 'org-img-amo5k8',
    titleId: 'org-amoeba-title',
    descId: 'org-amoeba-desc',
    category: 'Protozoa',
  },
  {
    id: 'euglena',
    title: 'Euglena',
    desc: 'Fascinating organisms that blur the line between plant and animal, capable of both photosynthesis and independent movement using a whip-like flagellum.',
    imgId: 'org-img-eug2n4',
    titleId: 'org-euglena-title',
    descId: 'org-euglena-desc',
    category: 'Flagellate',
  },
  {
    id: 'stentor',
    title: 'Stentor',
    desc: 'Trumpet-shaped giants of the microscopic world, these ciliates can grow up to 2mm and display remarkable regenerative abilities when cut into pieces.',
    imgId: 'org-img-ste7r1',
    titleId: 'org-stentor-title',
    descId: 'org-stentor-desc',
    category: 'Ciliate',
  },
  {
    id: 'hydra',
    title: 'Hydra',
    desc: 'Tiny freshwater predators with tentacles armed with stinging cells, named after the mythological serpent for their ability to regenerate lost body parts.',
    imgId: 'org-img-hyd3a6',
    titleId: 'org-hydra-title',
    descId: 'org-hydra-desc',
    category: 'Cnidaria',
  },
  {
    id: 'daphnia',
    title: 'Daphnia',
    desc: 'Transparent water fleas with visible beating hearts, these tiny crustaceans are keystone species in freshwater ecosystems and indicators of water quality.',
    imgId: 'org-img-dap9h2',
    titleId: 'org-daphnia-title',
    descId: 'org-daphnia-desc',
    category: 'Crustacean',
  },
  {
    id: 'spirulina',
    title: 'Spirulina',
    desc: 'Spiral-shaped cyanobacteria that have existed for 3.5 billion years, now cultivated worldwide as a superfood rich in protein and antioxidants.',
    imgId: 'org-img-spi4l7',
    titleId: 'org-spirulina-title',
    descId: 'org-spirulina-desc',
    category: 'Cyanobacteria',
  },
]

const OrganismsSection = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section id="organisms" ref={containerRef} className="py-20 md:py-32 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-cosmos-pink font-medium text-sm uppercase tracking-widest mb-3">
            Featured Organisms
          </p>
          <h2
            id="organisms-section-title"
            className="font-heading text-3xl md:text-5xl font-bold text-cosmos-text tracking-tight mb-4"
          >
            Life at the Microscale
          </h2>
          <p
            id="organisms-section-subtitle"
            className="text-cosmos-muted text-base md:text-lg max-w-2xl mx-auto"
          >
            Meet the remarkable creatures that inhabit the microscopic realm — each one a masterpiece of evolution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {organisms.map((org) => (
            <article
              key={org.id}
              className="group bg-cosmos-card border border-cosmos-border rounded-2xl overflow-hidden hover:border-cosmos-purple/40 hover:shadow-lg hover:shadow-cosmos-purple/5 transition-all duration-500"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  alt={org.title}
                  data-strk-img-id={org.imgId}
                  data-strk-img={`[${org.descId}] [${org.titleId}] [organisms-section-title]`}
                  data-strk-img-ratio="3x2"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-cosmos-dark/80 backdrop-blur-sm text-cosmos-cyan text-xs font-medium rounded-full border border-cosmos-cyan/20">
                    {org.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 id={org.titleId} className="font-heading text-xl font-semibold text-cosmos-text mb-2">
                  {org.title}
                </h3>
                <p id={org.descId} className="text-cosmos-muted text-sm leading-relaxed">
                  {org.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OrganismsSection
