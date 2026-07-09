import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const organisms = [
  {
    id: 'diatom',
    title: 'Diatoms',
    desc: 'Microscopic algae with intricate glass-like silica shells forming stunning geometric patterns',
    imgId: 'org-diatom-f3c1a2',
  },
  {
    id: 'tardigrade',
    title: 'Tardigrades',
    desc: 'Nearly indestructible micro-animals that survive extreme temperatures, radiation, and the vacuum of space',
    imgId: 'org-tardigrade-b7d4e5',
  },
  {
    id: 'radiolaria',
    title: 'Radiolaria',
    desc: 'Single-celled organisms with elaborate mineral skeletons resembling alien architecture',
    imgId: 'org-radiolaria-a9f2c8',
  },
  {
    id: 'rotifer',
    title: 'Rotifers',
    desc: 'Tiny aquatic animals with spinning wheel-like cilia used for feeding and locomotion',
    imgId: 'org-rotifer-d5e8b1',
  },
  {
    id: 'paramecium',
    title: 'Paramecium',
    desc: 'Slipper-shaped single-celled organisms covered in thousands of hair-like cilia',
    imgId: 'org-paramecium-c4a7f9',
  },
  {
    id: 'volvox',
    title: 'Volvox',
    desc: 'Spherical colonies of green algae that roll through water like living crystal balls',
    imgId: 'org-volvox-e2b6d3',
  },
]

const OrganismsGrid = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section id="explore" ref={containerRef} className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2
            id="organisms-section-title"
            className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cosmos-cyan to-cosmos-teal bg-clip-text text-transparent"
          >
            Microscopic Organisms
          </h2>
          <p
            id="organisms-section-subtitle"
            className="text-lg md:text-xl font-light text-cosmos-muted max-w-2xl mx-auto"
          >
            Discover the incredible diversity of life invisible to the naked eye
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {organisms.map((org) => (
            <article
              key={org.id}
              className="group rounded-2xl border border-white/10 overflow-hidden bg-white/5 backdrop-blur-sm hover:shadow-[0_0_40px_rgba(0,229,255,0.15)] transition-all duration-300 hover:border-cosmos-cyan/30"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  alt={org.title}
                  data-strk-img-id={org.imgId}
                  data-strk-img={`[org-${org.id}-desc] [org-${org.id}-title] [organisms-section-title]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3
                  id={`org-${org.id}-title`}
                  className="text-xl font-semibold text-cosmos-text mb-2"
                >
                  {org.title}
                </h3>
                <p
                  id={`org-${org.id}-desc`}
                  className="text-cosmos-muted text-sm leading-relaxed"
                >
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

export default OrganismsGrid
