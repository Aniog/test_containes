import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const organisms = [
  {
    id: 'org1',
    name: 'Tardigrade',
    nickname: 'Water Bear',
    desc: 'The most resilient animal on Earth. Tardigrades can survive extreme radiation, the vacuum of space, and temperatures from -272°C to 150°C.',
    tag: 'Micro-animal',
    color: 'teal',
  },
  {
    id: 'org2',
    name: 'Diatom',
    nickname: 'Glass Algae',
    desc: 'Single-celled algae encased in intricate glass-like shells of silica. Responsible for 20% of all oxygen produced on Earth.',
    tag: 'Algae',
    color: 'cyan',
  },
  {
    id: 'org3',
    name: 'Vorticella',
    nickname: 'Bell Animalcule',
    desc: 'A bell-shaped protozoan that attaches to surfaces via a coiled stalk, contracting rapidly when disturbed.',
    tag: 'Protozoa',
    color: 'emerald',
  },
  {
    id: 'org4',
    name: 'Radiolarian',
    nickname: 'Star of the Sea',
    desc: 'Ancient ocean-dwelling amoebae that build stunning geometric mineral skeletons, forming intricate lattice structures.',
    tag: 'Amoeba',
    color: 'amber',
  },
  {
    id: 'org5',
    name: 'Penicillium',
    nickname: 'Life-Saving Mold',
    desc: 'The fungus that gave us penicillin. Under the microscope, its spore-bearing structures resemble tiny paintbrushes.',
    tag: 'Fungi',
    color: 'teal',
  },
  {
    id: 'org6',
    name: 'Rotifer',
    nickname: 'Wheel Animal',
    desc: 'Named for the crown of cilia that creates a wheel-like motion, rotifers are masters of survival — some can be revived after 24,000 years frozen.',
    tag: 'Micro-animal',
    color: 'cyan',
  },
]

const colorMap = {
  teal: 'text-teal-400 bg-teal-400/10 border-teal-400/30',
  cyan: 'text-cyan-400 bg-cyan-400/10 border-cyan-400/30',
  emerald: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/30',
  amber: 'text-amber-400 bg-amber-400/10 border-amber-400/30',
}

export default function OrganismsSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} id="organisms" className="bg-gray-950 py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-teal-400 text-sm uppercase tracking-widest font-semibold mb-4">
            Meet the Residents
          </p>
          <h2
            id="organisms-title"
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Featured Organisms
          </h2>
          <p id="organisms-subtitle" className="text-gray-400 text-lg max-w-xl mx-auto">
            Six remarkable microorganisms that showcase the astonishing diversity of microscopic life.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {organisms.map((org) => (
            <div
              key={org.id}
              className="group bg-gray-800/40 border border-gray-700/40 rounded-2xl overflow-hidden hover:border-teal-500/40 hover:shadow-xl hover:shadow-teal-500/10 transition-all duration-500"
            >
              {/* Image */}
              <div className="relative overflow-hidden h-52">
                <img
                  alt={org.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  data-strk-img-id={`org-img-mc-${org.id}`}
                  data-strk-img={`[org-desc-${org.id}] [org-name-${org.id}] [organisms-subtitle] [organisms-title]`}
                  data-strk-img-ratio="3x2"
                  data-strk-img-width="500"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
                {/* Tag badge */}
                <span className={`absolute top-4 left-4 text-xs font-semibold px-3 py-1 rounded-full border ${colorMap[org.color]}`}>
                  {org.tag}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <p id={`org-name-${org.id}`} className="text-white font-bold text-xl mb-1">
                  {org.name}
                </p>
                <p className="text-teal-400 text-sm font-medium mb-3 italic">
                  "{org.nickname}"
                </p>
                <p id={`org-desc-${org.id}`} className="text-gray-400 text-sm leading-relaxed">
                  {org.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
