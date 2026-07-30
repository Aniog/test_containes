import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const organisms = [
  {
    id: 'org-bacteria',
    titleId: 'org-title-bacteria',
    descId: 'org-desc-bacteria',
    imgId: 'org-img-mc-bacteria',
    label: 'Prokaryotes',
    title: 'Bacteria',
    desc: 'The most abundant life forms on Earth. Bacteria are single-celled organisms without a nucleus, found in every habitat imaginable — from boiling hot springs to frozen tundra. They are essential decomposers, nitrogen fixers, and the foundation of most food webs.',
    fact: '~10 million bacteria per teaspoon of seawater',
    color: 'teal',
  },
  {
    id: 'org-fungi',
    titleId: 'org-title-fungi',
    descId: 'org-desc-fungi',
    imgId: 'org-img-mc-fungi',
    label: 'Eukaryotes',
    title: 'Fungi & Mold',
    desc: 'Fungi occupy a kingdom of their own. Their microscopic spores and hyphal networks weave through soil and wood, breaking down organic matter and forming symbiotic relationships with plant roots. Under the microscope, their structures reveal astonishing complexity.',
    fact: 'Fungal networks can span thousands of acres',
    color: 'purple',
  },
  {
    id: 'org-protozoa',
    titleId: 'org-title-protozoa',
    descId: 'org-desc-protozoa',
    imgId: 'org-img-mc-protozoa',
    label: 'Protists',
    title: 'Protozoa',
    desc: 'Protozoa are single-celled eukaryotes that move and hunt like miniature animals. Amoebas engulf prey with pseudopods, paramecia sweep food into oral grooves, and vorticella anchor themselves to surfaces with coiled stalks. Each drop of pond water is a battlefield.',
    fact: 'Some protozoa can move 10x their body length per second',
    color: 'cyan',
  },
  {
    id: 'org-algae',
    titleId: 'org-title-algae',
    descId: 'org-desc-algae',
    imgId: 'org-img-mc-algae',
    label: 'Photosynthesizers',
    title: 'Microalgae',
    desc: 'Microscopic algae — including diatoms, dinoflagellates, and cyanobacteria — produce over half of Earth\'s oxygen. Their glass-like silica shells form intricate geometric patterns that have inspired architects and engineers for centuries.',
    fact: 'Responsible for 50% of global oxygen production',
    color: 'green',
  },
]

const colorMap = {
  teal: { badge: 'bg-teal-500/20 text-teal-400', fact: 'text-teal-400', border: 'border-teal-500/30' },
  purple: { badge: 'bg-purple-500/20 text-purple-400', fact: 'text-purple-400', border: 'border-purple-500/30' },
  cyan: { badge: 'bg-cyan-500/20 text-cyan-400', fact: 'text-cyan-400', border: 'border-cyan-500/30' },
  green: { badge: 'bg-green-500/20 text-green-400', fact: 'text-green-400', border: 'border-green-500/30' },
}

export default function OrganismsSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} id="organisms" className="bg-gray-900 py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-teal-400 text-sm uppercase tracking-widest font-semibold mb-3">
            Meet the Inhabitants
          </p>
          <h2 id="organisms-title" className="text-4xl md:text-5xl font-bold text-white mb-4">
            Life at the Micro Scale
          </h2>
          <p id="organisms-subtitle" className="text-gray-400 text-lg max-w-xl mx-auto">
            Discover the diverse kingdoms of microscopic organisms that silently govern our world.
          </p>
        </div>

        <div className="space-y-16">
          {organisms.map((org, index) => {
            const c = colorMap[org.color]
            const isEven = index % 2 === 0
            return (
              <div
                key={org.id}
                className={`grid md:grid-cols-2 gap-10 items-center ${isEven ? '' : 'md:[&>*:first-child]:order-2'}`}
              >
                {/* Image */}
                <div className={`relative rounded-2xl overflow-hidden aspect-video shadow-2xl border ${c.border}`}>
                  <img
                    data-strk-img-id={org.imgId}
                    data-strk-img={`[${org.descId}] [${org.titleId}] [organisms-subtitle] [organisms-title]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={org.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Text */}
                <div>
                  <span className={`inline-block text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4 ${c.badge}`}>
                    {org.label}
                  </span>
                  <h3 id={org.titleId} className="text-3xl md:text-4xl font-bold text-white mb-4">
                    {org.title}
                  </h3>
                  <p id={org.descId} className="text-gray-300 text-base leading-relaxed mb-6">
                    {org.desc}
                  </p>
                  <div className={`flex items-center gap-3 text-sm font-medium ${c.fact}`}>
                    <div className="w-8 h-px bg-current opacity-60" />
                    {org.fact}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
