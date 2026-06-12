import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const organisms = [
  {
    id: 'org-tardigrade',
    imgId: 'org-img-mc020',
    title: 'Tardigrade',
    subtitle: 'Water Bear',
    desc: 'Nearly indestructible micro-animals that can survive in outer space, extreme radiation, and complete dehydration.',
    facts: ['0.1–1.5 mm long', 'Survives -272°C', '600M years old lineage'],
    tag: 'Extremophile',
  },
  {
    id: 'org-diatom',
    imgId: 'org-img-mc021',
    title: 'Diatom',
    subtitle: 'Glass Algae',
    desc: 'Single-celled algae encased in intricate silica shells called frustules, producing 20% of Earth\'s oxygen.',
    facts: ['100,000+ species', 'Silica cell walls', 'Produces 20% O₂'],
    tag: 'Algae',
  },
  {
    id: 'org-vorticella',
    imgId: 'org-img-mc022',
    title: 'Vorticella',
    subtitle: 'Bell Animalcule',
    desc: 'A stalked ciliate protozoan that contracts its stalk like a spring when disturbed, creating a mesmerizing motion.',
    facts: ['Bell-shaped body', 'Contractile stalk', 'Filter feeder'],
    tag: 'Protozoa',
  },
  {
    id: 'org-rotifer',
    imgId: 'org-img-mc023',
    title: 'Rotifer',
    subtitle: 'Wheel Animal',
    desc: 'Microscopic aquatic animals with a crown of cilia that spin like a wheel to draw food particles into their mouths.',
    facts: ['0.1–0.5 mm', 'Freshwater habitat', 'Asexual reproduction'],
    tag: 'Invertebrate',
  },
]

export default function OrganismsSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section id="organisms" ref={containerRef} className="py-20 md:py-28 bg-[#050d1a]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-widest text-cyan-400 font-semibold">Tiny Life Forms</span>
          <h2 id="organisms-title" className="mt-3 text-3xl md:text-5xl font-bold text-white">
            Meet the Inhabitants
          </h2>
          <p id="organisms-subtitle" className="mt-4 text-slate-400 max-w-xl mx-auto text-base leading-relaxed">
            Extraordinary creatures that share our world, invisible to the naked eye yet vital to all life on Earth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {organisms.map((org) => (
            <div
              key={org.id}
              className="group flex flex-col sm:flex-row gap-0 bg-[#0a1628] border border-cyan-900/30 rounded-2xl overflow-hidden hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="relative sm:w-48 md:w-56 flex-shrink-0 overflow-hidden">
                <img
                  data-strk-img-id={org.imgId}
                  data-strk-img={`[${org.id}-desc] [${org.id}-title] [organisms-subtitle] [organisms-title]`}
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={org.title}
                  className="w-full h-48 sm:h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-widest text-violet-400 bg-violet-500/10 border border-violet-400/20 px-3 py-1 rounded-full">
                    {org.tag}
                  </span>
                  <h3 id={`${org.id}-title`} className="mt-3 text-xl font-bold text-white">{org.title}</h3>
                  <p className="text-cyan-400 text-sm font-medium mb-2">{org.subtitle}</p>
                  <p id={`${org.id}-desc`} className="text-slate-400 text-sm leading-relaxed">{org.desc}</p>
                </div>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {org.facts.map((fact) => (
                    <li key={fact} className="text-xs text-slate-300 bg-[#0f1f38] border border-slate-700/50 px-3 py-1 rounded-full">
                      {fact}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
