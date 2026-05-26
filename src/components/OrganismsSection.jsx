import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const organisms = [
  {
    id: 'org-bacteria',
    name: 'Bacteria',
    latin: 'Prokaryota',
    desc: 'Single-celled organisms without a nucleus, found in every environment on Earth. Some are essential for life; others cause disease.',
    imgId: 'org-img-mc010',
    imgQuery: 'bacteria colorful scanning electron microscope',
    color: '#00e5c8',
  },
  {
    id: 'org-diatom',
    name: 'Diatoms',
    latin: 'Bacillariophyta',
    desc: 'Microscopic algae encased in intricate glass-like silica shells called frustules. They produce 20% of Earth\'s oxygen.',
    imgId: 'org-img-mc011',
    imgQuery: 'diatom silica shell microscope colorful',
    color: '#22d3ee',
  },
  {
    id: 'org-tardigrade',
    name: 'Tardigrades',
    latin: 'Tardigrada',
    desc: 'Known as "water bears," these microscopic animals can survive extreme conditions including the vacuum of space.',
    imgId: 'org-img-mc012',
    imgQuery: 'tardigrade water bear microscope close up',
    color: '#a78bfa',
  },
  {
    id: 'org-amoeba',
    name: 'Amoeba',
    latin: 'Amoebozoa',
    desc: 'Shape-shifting single-celled organisms that move and engulf food using pseudopods — temporary extensions of their cell body.',
    imgId: 'org-img-mc013',
    imgQuery: 'amoeba microscope pseudopod single cell',
    color: '#34d399',
  },
  {
    id: 'org-virus',
    name: 'Viruses',
    latin: 'Viridae',
    desc: 'Nanoscale entities that exist at the boundary of life. They hijack host cells to replicate, shaping evolution for billions of years.',
    imgId: 'org-img-mc014',
    imgQuery: 'virus electron microscope colorful 3d render',
    color: '#f472b6',
  },
  {
    id: 'org-plankton',
    name: 'Plankton',
    latin: 'Plankton',
    desc: 'Microscopic drifters of the ocean — phytoplankton and zooplankton form the base of marine food webs and regulate Earth\'s climate.',
    imgId: 'org-img-mc015',
    imgQuery: 'plankton ocean microscope colorful bioluminescent',
    color: '#38bdf8',
  },
]

export default function OrganismsSection() {
  const containerRef = useRef(null)
  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-24 px-6 bg-[#0a1628]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#00e5c8] mb-4 block">
            Inhabitants
          </span>
          <h2 id="org-section-title" className="text-4xl md:text-5xl font-bold text-sky-50 mb-4">
            Meet the Microorganisms
          </h2>
          <p id="org-section-desc" className="text-slate-400 text-lg max-w-2xl mx-auto">
            From ancient bacteria to alien-like tardigrades, the microbial world is home to an astonishing diversity of life forms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {organisms.map((org) => (
            <div
              key={org.id}
              className="bg-[#0f1f38] border border-[#1e3a5f] rounded-2xl overflow-hidden hover:border-[#00e5c8]/50 transition-all duration-300 group"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  id={org.imgId}
                  alt={org.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  data-strk-img-id={org.imgId}
                  data-strk-img={`${org.imgQuery} [org-section-title]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span
                    className="text-xs font-semibold px-3 py-1 rounded-full"
                    style={{ backgroundColor: `${org.color}18`, color: org.color }}
                  >
                    {org.latin}
                  </span>
                </div>
                <h3 id={org.id} className="text-xl font-bold text-sky-50 mb-2">{org.name}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{org.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
