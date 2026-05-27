import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const organisms = [
  {
    id: 'org-01',
    name: 'Tardigrade',
    nickname: 'Water Bear',
    size: '0.1 – 1.5 mm',
    habitat: 'Everywhere on Earth',
    superpower: 'Survives extreme radiation, vacuum of space, and boiling water',
    color: '#00e5ff',
    emoji: '🐻',
  },
  {
    id: 'org-02',
    name: 'Deinococcus radiodurans',
    nickname: 'Conan the Bacterium',
    size: '1.5 – 3.5 μm',
    habitat: 'Radioactive waste sites',
    superpower: 'Withstands 1.5 million rads of radiation — 3000× lethal human dose',
    color: '#e040fb',
    emoji: '☢️',
  },
  {
    id: 'org-03',
    name: 'Naegleria fowleri',
    nickname: 'Brain-Eating Amoeba',
    size: '8 – 15 μm',
    habitat: 'Warm freshwater lakes',
    superpower: 'Can transform between amoeba, flagellate, and cyst forms',
    color: '#00bfa5',
    emoji: '🧠',
  },
  {
    id: 'org-04',
    name: 'Prochlorococcus',
    nickname: 'Ocean\'s Tiny Sun',
    size: '0.5 – 0.8 μm',
    habitat: 'Open ocean',
    superpower: 'Produces 20% of Earth\'s oxygen — the most abundant photosynthesizer',
    color: '#7c3aed',
    emoji: '☀️',
  },
  {
    id: 'org-05',
    name: 'Myxococcus xanthus',
    nickname: 'Predatory Swarm',
    size: '4 – 9 μm',
    habitat: 'Soil worldwide',
    superpower: 'Hunts in coordinated wolf-pack swarms, secreting enzymes to dissolve prey',
    color: '#ff6b35',
    emoji: '🐺',
  },
  {
    id: 'org-06',
    name: 'Caulobacter crescentus',
    nickname: 'The Stalk Cell',
    size: '1 – 2 μm',
    habitat: 'Freshwater environments',
    superpower: 'Produces the strongest biological adhesive known — 70× stronger than superglue',
    color: '#00e5ff',
    emoji: '🔗',
  },
]

export default function OrganismsSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section id="organisms" ref={containerRef} className="py-24 md:py-32 px-4 bg-[#050810]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#00e5ff] text-sm font-semibold tracking-widest uppercase mb-4 block">
            Remarkable Species
          </span>
          <h2
            id="organisms-title"
            className="text-4xl md:text-6xl font-black text-white mb-4"
          >
            Featured
            <span className="text-[#00e5ff]"> Organisms</span>
          </h2>
          <p
            id="organisms-subtitle"
            className="text-lg text-[#8ab4c8] max-w-xl mx-auto"
          >
            Meet the extraordinary creatures that rule the microscopic realm
          </p>
        </div>

        {/* Organisms grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {organisms.map((org) => (
            <div
              key={org.id}
              className="group bg-[#0d1424] border border-[rgba(0,229,255,0.12)] rounded-3xl overflow-hidden hover:border-[rgba(0,229,255,0.35)] hover:shadow-[0_0_50px_rgba(0,229,255,0.1)] transition-all duration-400"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  alt={org.name}
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  data-strk-img-id={`org-img-${org.id}`}
                  data-strk-img={`[org-${org.id}-name] [org-${org.id}-power] [organisms-subtitle] [organisms-title] microscope`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1424] via-[#0d1424]/20 to-transparent" />
                <div className="absolute top-4 left-4 text-4xl">{org.emoji}</div>
                <div
                  className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold text-[#050810]"
                  style={{ backgroundColor: org.color }}
                >
                  {org.size}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="mb-1">
                  <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: org.color }}>
                    {org.nickname}
                  </span>
                </div>
                <h3 id={`org-${org.id}-name`} className="text-xl font-black text-white mb-1 italic">{org.name}</h3>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-[#4a6a7a] text-xs">📍</span>
                  <span className="text-[#8ab4c8] text-xs">{org.habitat}</span>
                </div>
                <div
                  className="rounded-xl p-3 border"
                  style={{ backgroundColor: `${org.color}10`, borderColor: `${org.color}30` }}
                >
                  <p className="text-xs font-semibold mb-1" style={{ color: org.color }}>⚡ Superpower</p>
                  <p id={`org-${org.id}-power`} className="text-[#8ab4c8] text-xs leading-relaxed">{org.superpower}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
