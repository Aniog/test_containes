import React, { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Eye } from 'lucide-react'

const organisms = [
  {
    id: 'tardigrade',
    title: 'Tardigrade',
    subtitle: 'The Water Bear',
    description:
      'One of the most resilient creatures on Earth, capable of surviving extreme temperatures, radiation, and even the vacuum of space.',
    imgId: 'gallery-tardigrade-a1b2c3',
    titleId: 'gallery-tardigrade-title',
    descId: 'gallery-tardigrade-desc',
  },
  {
    id: 'diatom',
    title: 'Diatom',
    subtitle: 'The Glass Algae',
    description:
      'Single-celled algae with intricate silica shells. These microscopic artists produce 20-50% of the oxygen we breathe.',
    imgId: 'gallery-diatom-d4e5f6',
    titleId: 'gallery-diatom-title',
    descId: 'gallery-diatom-desc',
  },
  {
    id: 'rotifer',
    title: 'Rotifer',
    subtitle: 'The Wheel Animal',
    description:
      'Tiny aquatic animals with rotating cilia that look like spinning wheels. Masters of filtration and regeneration.',
    imgId: 'gallery-rotifer-g7h8i9',
    titleId: 'gallery-rotifer-title',
    descId: 'gallery-rotifer-desc',
  },
  {
    id: 'paramecium',
    title: 'Paramecium',
    subtitle: 'The Slipper Organism',
    description:
      'A single-celled ciliate covered in tiny hairs that propel it through freshwater habitats with surprising grace.',
    imgId: 'gallery-paramecium-j0k1l2',
    titleId: 'gallery-paramecium-title',
    descId: 'gallery-paramecium-desc',
  },
  {
    id: 'amoeba',
    title: 'Amoeba',
    subtitle: 'The Shape Shifter',
    description:
      'A single-celled organism that moves by extending pseudopods — temporary projections of its own body. A true master of adaptation.',
    imgId: 'gallery-amoeba-m3n4o5',
    titleId: 'gallery-amoeba-title',
    descId: 'gallery-amoeba-desc',
  },
  {
    id: 'stentor',
    title: 'Stentor',
    subtitle: 'The Trumpet Animalcule',
    description:
      'One of the largest single-celled organisms, shaped like a trumpet. Known for its remarkable ability to regenerate.',
    imgId: 'gallery-stentor-p6q7r8',
    titleId: 'gallery-stentor-title',
    descId: 'gallery-stentor-desc',
  },
]

export default function HomeGallery() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section id="gallery" ref={containerRef} className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Eye className="w-6 h-6 text-teal-400" />
            <span className="text-sm font-semibold tracking-[0.2em] uppercase text-teal-400">
              Gallery
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-100 mb-4">
            Meet the Microbes
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-lg">
            Each of these organisms tells a story of survival, beauty, and the extraordinary diversity of microscopic life.
          </p>
        </div>

        {/* Organism Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {organisms.map((org) => (
            <article
              key={org.id}
              className="card-hover bg-[#111827]/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-800/50"
            >
              <div className="relative overflow-hidden">
                <img
                  alt={org.title}
                  data-strk-img-id={org.imgId}
                  data-strk-img={`[${org.descId}] [${org.titleId}]`}
                  data-strk-img-ratio="3x2"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-56 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-transparent to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 text-xs font-semibold bg-teal-500/20 text-teal-300 rounded-full border border-teal-500/30">
                    {org.subtitle}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 id={org.titleId} className="text-xl font-bold text-slate-100 mb-3">
                  {org.title}
                </h3>
                <p id={org.descId} className="text-slate-400 leading-relaxed text-sm">
                  {org.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
