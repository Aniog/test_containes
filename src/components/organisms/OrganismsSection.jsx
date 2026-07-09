import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const organisms = [
  {
    id: 'amoeba',
    title: 'Amoeba',
    desc: 'Shape-shifting single-celled organisms that engulf their food',
    fact: 'Can grow up to 1mm — visible to the naked eye',
    imgId: 'org-amoeba-4c7d2a',
    titleId: 'org-amoeba-title',
    descId: 'org-amoeba-desc',
  },
  {
    id: 'rotifer',
    title: 'Rotifers',
    desc: 'Tiny animals with spinning wheel-like cilia for feeding',
    fact: 'Survived 24,000 years frozen in Siberian permafrost',
    imgId: 'org-rotifer-8e1b5f',
    titleId: 'org-rotifer-title',
    descId: 'org-rotifer-desc',
  },
  {
    id: 'paramecium',
    title: 'Paramecium',
    desc: 'Slipper-shaped protists covered in thousands of tiny hairs',
    fact: 'Moves at speeds up to 12 body lengths per second',
    imgId: 'org-paramecium-3a9f6c',
    titleId: 'org-paramecium-title',
    descId: 'org-paramecium-desc',
  },
  {
    id: 'volvox',
    title: 'Volvox',
    desc: 'Spherical colonies of green algae spinning through water',
    fact: 'Each colony contains up to 50,000 individual cells',
    imgId: 'org-volvox-7d2e8b',
    titleId: 'org-volvox-title',
    descId: 'org-volvox-desc',
  },
  {
    id: 'hydra',
    title: 'Hydra',
    desc: 'Freshwater polyps with remarkable regeneration abilities',
    fact: 'Can regenerate entire body from a small fragment',
    imgId: 'org-hydra-1f5c9a',
    titleId: 'org-hydra-title',
    descId: 'org-hydra-desc',
  },
  {
    id: 'stentor',
    title: 'Stentor',
    desc: 'Trumpet-shaped protists among the largest single-celled organisms',
    fact: 'Can reach 2mm in length — giant for a single cell',
    imgId: 'org-stentor-6b3d7e',
    titleId: 'org-stentor-title',
    descId: 'org-stentor-desc',
  },
]

const OrganismsSection = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-20 md:py-28 px-4 md:px-8 bg-midnight">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-secondary font-heading text-sm tracking-widest uppercase mb-3 block">Life Forms</span>
          <h2 id="organisms-section-title" className="font-heading text-3xl md:text-5xl font-bold text-text-primary tracking-tight mb-4">
            Microscopic Inhabitants
          </h2>
          <p id="organisms-section-subtitle" className="text-text-secondary text-lg max-w-2xl mx-auto">
            Meet the extraordinary creatures that thrive in every drop of pond water
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {organisms.map((org) => (
            <div
              key={org.id}
              className="group bg-surface border border-surface-light rounded-2xl overflow-hidden hover:border-secondary/40 hover:shadow-lg hover:shadow-secondary/10 transition-all duration-300"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  alt={org.title}
                  data-strk-img-id={org.imgId}
                  data-strk-img={`[${org.descId}] [${org.titleId}] [organisms-section-title]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-3 right-3 bg-midnight/80 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-secondary text-xs font-medium">Micro Life</span>
                </div>
              </div>
              <div className="p-6">
                <h3 id={org.titleId} className="font-heading text-xl font-semibold text-text-primary mb-2">
                  {org.title}
                </h3>
                <p id={org.descId} className="text-text-secondary text-sm mb-3 leading-relaxed">
                  {org.desc}
                </p>
                <div className="flex items-center gap-2 pt-3 border-t border-surface-light">
                  <span className="text-accent text-xs font-medium">Fun Fact:</span>
                  <span className="text-text-secondary text-xs">{org.fact}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OrganismsSection
