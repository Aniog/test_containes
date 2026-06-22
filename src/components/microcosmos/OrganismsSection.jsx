import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const organisms = [
  {
    id: 'amoeba',
    title: 'Amoeba',
    desc: 'Shape-shifting single-celled organisms that engulf food with pseudopods',
    category: 'Protozoa',
    imgId: 'organism-amoeba-g1w3x5',
    titleId: 'organism-amoeba-title',
    descId: 'organism-amoeba-desc',
  },
  {
    id: 'euglena',
    title: 'Euglena',
    desc: 'Flagellated protists that photosynthesize like plants and move like animals',
    category: 'Euglenoids',
    imgId: 'organism-euglena-h4y6z8',
    titleId: 'organism-euglena-title',
    descId: 'organism-euglena-desc',
  },
  {
    id: 'stentor',
    title: 'Stentor',
    desc: 'Trumpet-shaped ciliates among the largest single-celled organisms on Earth',
    category: 'Ciliates',
    imgId: 'organism-stentor-i7a9b2',
    titleId: 'organism-stentor-title',
    descId: 'organism-stentor-desc',
  },
  {
    id: 'hydra',
    title: 'Hydra',
    desc: 'Freshwater polyps with regenerative abilities and stinging tentacles',
    category: 'Cnidaria',
    imgId: 'organism-hydra-j0c3d5',
    titleId: 'organism-hydra-title',
    descId: 'organism-hydra-desc',
  },
  {
    id: 'plankton',
    title: 'Plankton',
    desc: 'Drifting marine microorganisms forming the base of ocean food chains',
    category: 'Marine Life',
    imgId: 'organism-plankton-k2e4f6',
    titleId: 'organism-plankton-title',
    descId: 'organism-plankton-desc',
  },
  {
    id: 'spirogyra',
    title: 'Spirogyra',
    desc: 'Filamentous green algae with beautiful spiral chloroplasts',
    category: 'Algae',
    imgId: 'organism-spirogyra-l5g7h9',
    titleId: 'organism-spirogyra-title',
    descId: 'organism-spirogyra-desc',
  },
]

const OrganismsSection = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-violet-400 text-sm font-medium tracking-widest uppercase mb-3">
            Featured Organisms
          </p>
          <h2
            id="organisms-section-title"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4"
          >
            Life at the Microscale
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Meet the remarkable creatures that inhabit every pond, puddle, and ocean drop around us.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {organisms.map((org) => (
            <article
              key={org.id}
              className="group bg-slate-800/50 border border-slate-700/50 rounded-2xl overflow-hidden hover:border-emerald-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/5"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  alt={org.title}
                  data-strk-img-id={org.imgId}
                  data-strk-img={`[${org.descId}] [${org.titleId}] [organisms-section-title]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 3'/%3E"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 text-xs font-medium text-emerald-400 bg-emerald-500/10 rounded-full mb-3">
                  {org.category}
                </span>
                <h3 id={org.titleId} className="text-xl font-semibold text-white mb-2">
                  {org.title}
                </h3>
                <p id={org.descId} className="text-slate-400 text-sm leading-relaxed">
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
