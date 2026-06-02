import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const ORGANISMS = [
  {
    id: 'amoeba',
    titleId: 'org-amoeba-title',
    descId: 'org-amoeba-desc',
    imgId: 'org-img-amoeba-m3n4',
    title: 'Amoeba',
    desc: 'Single-celled organism that moves using pseudopods, engulfing food particles through phagocytosis.',
    kingdom: 'Protista',
    size: '250–750 µm',
  },
  {
    id: 'paramecium',
    titleId: 'org-paramecium-title',
    descId: 'org-paramecium-desc',
    imgId: 'org-img-paramecium-o5p6',
    title: 'Paramecium',
    desc: 'Ciliated protozoan found in freshwater environments, propelled by thousands of tiny hair-like cilia.',
    kingdom: 'Protista',
    size: '50–330 µm',
  },
  {
    id: 'rotifer',
    titleId: 'org-rotifer-title',
    descId: 'org-rotifer-desc',
    imgId: 'org-img-rotifer-q7r8',
    title: 'Rotifer',
    desc: 'Microscopic aquatic animal with a crown of cilia used for locomotion and feeding on bacteria.',
    kingdom: 'Animalia',
    size: '100–500 µm',
  },
  {
    id: 'vorticella',
    titleId: 'org-vorticella-title',
    descId: 'org-vorticella-desc',
    imgId: 'org-img-vorticella-s9t0',
    title: 'Vorticella',
    desc: 'Bell-shaped ciliate that attaches to surfaces via a contractile stalk, creating water currents to capture food.',
    kingdom: 'Protista',
    size: '30–150 µm',
  },
  {
    id: 'euglena',
    titleId: 'org-euglena-title',
    descId: 'org-euglena-desc',
    imgId: 'org-img-euglena-u1v2',
    title: 'Euglena',
    desc: 'Flagellated microorganism that can photosynthesize like a plant or consume food like an animal.',
    kingdom: 'Euglenozoa',
    size: '15–500 µm',
  },
  {
    id: 'daphnia',
    titleId: 'org-daphnia-title',
    descId: 'org-daphnia-desc',
    imgId: 'org-img-daphnia-w3x4',
    title: 'Daphnia',
    desc: 'Tiny crustacean known as water flea, transparent body reveals beating heart and internal organs.',
    kingdom: 'Animalia',
    size: '0.2–5 mm',
  },
]

export default function OrganismsSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section id="organisms" ref={containerRef} className="py-20 md:py-28 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-14">
          <p className="text-xs font-semibold uppercase tracking-widest text-teal-400 mb-3">Field Guide</p>
          <h2 id="organisms-section-title" className="text-3xl md:text-4xl font-bold text-white mb-4">
            Microscopic Organisms
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Meet the remarkable creatures that inhabit every drop of water, every grain of soil, and every breath of air around us.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {ORGANISMS.map((org) => (
            <div
              key={org.id}
              className="bg-gray-900 border border-gray-700 rounded-2xl overflow-hidden shadow-xl hover:border-teal-500/50 transition-all duration-300 group"
            >
              <div className="relative overflow-hidden h-52">
                <img
                  alt={org.title}
                  data-strk-img-id={org.imgId}
                  data-strk-img={`[${org.descId}] [${org.titleId}] [organisms-section-title]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 bg-gray-950/80 backdrop-blur-sm text-teal-400 text-xs font-semibold px-3 py-1 rounded-full border border-teal-500/30">
                  {org.kingdom}
                </div>
              </div>
              <div className="p-6">
                <h3 id={org.titleId} className="text-white font-bold text-xl mb-2">{org.title}</h3>
                <p id={org.descId} className="text-gray-400 text-sm leading-relaxed mb-4">{org.desc}</p>
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <span className="text-emerald-400 font-semibold">Size:</span>
                  <span>{org.size}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
