import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const organisms = [
  {
    id: 'amoeba',
    title: 'Amoeba',
    desc: 'Shape-shifting single-celled organisms that engulf food through pseudopods',
    category: 'Protozoa',
    imgId: 'organism-amoeba-s1t2u3',
    titleId: 'organism-amoeba-title',
    descId: 'organism-amoeba-desc',
  },
  {
    id: 'euglena',
    title: 'Euglena',
    desc: 'Unique organisms that photosynthesize like plants but move like animals',
    category: 'Flagellate',
    imgId: 'organism-euglena-v4w5x6',
    titleId: 'organism-euglena-title',
    descId: 'organism-euglena-desc',
  },
  {
    id: 'volvox',
    title: 'Volvox',
    desc: 'Spherical colonies of green algae cells working together as one organism',
    category: 'Colonial Algae',
    imgId: 'organism-volvox-y7z8a9',
    titleId: 'organism-volvox-title',
    descId: 'organism-volvox-desc',
  },
  {
    id: 'stentor',
    title: 'Stentor',
    desc: 'Trumpet-shaped giant protists that can regenerate from fragments',
    category: 'Ciliate',
    imgId: 'organism-stentor-b1c2d3',
    titleId: 'organism-stentor-title',
    descId: 'organism-stentor-desc',
  },
]

const OrganismsSection = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-20 md:py-28 px-6 md:px-12 bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-3">Featured Organisms</p>
          <h2 id="organisms-section-title" className="text-3xl md:text-5xl font-extrabold text-white mb-4">
            Life at the Microscale
          </h2>
          <p id="organisms-section-subtitle" className="text-lg text-slate-300 max-w-2xl mx-auto">
            Meet the fascinating creatures that inhabit every pond, puddle, and drop of water on our planet.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {organisms.map((org) => (
            <div
              key={org.id}
              className="group bg-slate-900/80 rounded-2xl border border-slate-700/50 overflow-hidden hover:border-cyan-500/40 transition-all duration-500 hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/10"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  alt={org.title}
                  data-strk-img-id={org.imgId}
                  data-strk-img={`[${org.descId}] [${org.titleId}] [organisms-section-title]`}
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="500"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-5">
                <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">{org.category}</span>
                <h3 id={org.titleId} className="text-xl font-bold text-white mt-1 mb-2">{org.title}</h3>
                <p id={org.descId} className="text-sm text-slate-400 leading-relaxed">{org.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OrganismsSection
