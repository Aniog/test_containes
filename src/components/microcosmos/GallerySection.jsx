import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const organisms = [
  {
    id: 'diatom',
    title: 'Diatoms',
    desc: 'Microscopic algae with intricate glass-like silica shells forming stunning geometric patterns',
    imgId: 'gallery-diatom-4f8b2c',
  },
  {
    id: 'tardigrade',
    title: 'Tardigrades',
    desc: 'Nearly indestructible micro-animals that survive extreme temperatures and the vacuum of space',
    imgId: 'gallery-tardigrade-9a3e7d',
  },
  {
    id: 'radiolaria',
    title: 'Radiolaria',
    desc: 'Single-celled organisms with elaborate mineral skeletons resembling alien architecture',
    imgId: 'gallery-radiolaria-2c5f1a',
  },
  {
    id: 'paramecium',
    title: 'Paramecium',
    desc: 'Slipper-shaped protists covered in thousands of tiny hair-like cilia for movement',
    imgId: 'gallery-paramecium-7d4e9b',
  },
  {
    id: 'rotifer',
    title: 'Rotifers',
    desc: 'Tiny aquatic animals with wheel-like crowns of cilia that create whirlpool currents',
    imgId: 'gallery-rotifer-1b8c3f',
  },
  {
    id: 'volvox',
    title: 'Volvox',
    desc: 'Spherical colonies of green algae that spin gracefully through freshwater like living planets',
    imgId: 'gallery-volvox-5e2a8d',
  },
]

const GallerySection = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section id="gallery" ref={containerRef} className="py-20 md:py-32 bg-deep-dark">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <p className="text-accent font-medium text-sm uppercase tracking-widest mb-3">
            Visual Gallery
          </p>
          <h2 id="gallery-section-title" className="text-3xl md:text-5xl font-bold tracking-tight text-text-primary mb-4">
            Microscopic Marvels
          </h2>
          <p id="gallery-section-subtitle" className="text-lg md:text-xl font-light text-text-secondary max-w-2xl mx-auto">
            Discover the extraordinary organisms that thrive in a world invisible to the naked eye
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {organisms.map((org) => (
            <article
              key={org.id}
              className="group rounded-2xl border border-border-subtle bg-surface overflow-hidden hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  alt={org.title}
                  data-strk-img-id={org.imgId}
                  data-strk-img={`[gallery-${org.id}-desc] [gallery-${org.id}-title] [gallery-section-subtitle] [gallery-section-title]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 id={`gallery-${org.id}-title`} className="text-xl font-semibold text-text-primary mb-2">
                  {org.title}
                </h3>
                <p id={`gallery-${org.id}-desc`} className="text-text-secondary text-sm leading-relaxed">
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

export default GallerySection
