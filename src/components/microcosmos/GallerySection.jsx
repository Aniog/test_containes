import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const galleryItems = [
  {
    id: 'tardigrade',
    title: 'Tardigrade',
    desc: 'Water bear micro-animal surviving extreme conditions',
    imgId: 'gallery-img-tar8k2',
    titleId: 'gallery-tardigrade-title',
    descId: 'gallery-tardigrade-desc',
    ratio: '4x3',
    span: 'col-span-1 md:col-span-2 row-span-1 md:row-span-2',
  },
  {
    id: 'diatom',
    title: 'Diatom',
    desc: 'Silica-shelled algae with intricate geometric patterns',
    imgId: 'gallery-img-dia4m7',
    titleId: 'gallery-diatom-title',
    descId: 'gallery-diatom-desc',
    ratio: '1x1',
    span: 'col-span-1',
  },
  {
    id: 'paramecium',
    title: 'Paramecium',
    desc: 'Single-celled organism with hair-like cilia for movement',
    imgId: 'gallery-img-par2c9',
    titleId: 'gallery-paramecium-title',
    descId: 'gallery-paramecium-desc',
    ratio: '1x1',
    span: 'col-span-1',
  },
  {
    id: 'radiolaria',
    title: 'Radiolaria',
    desc: 'Protozoa with elaborate mineral skeletons floating in ocean',
    imgId: 'gallery-img-rad6k1',
    titleId: 'gallery-radiolaria-title',
    descId: 'gallery-radiolaria-desc',
    ratio: '3x2',
    span: 'col-span-1',
  },
  {
    id: 'rotifer',
    title: 'Rotifer',
    desc: 'Microscopic animal with rotating wheel-like crown of cilia',
    imgId: 'gallery-img-rot3w5',
    titleId: 'gallery-rotifer-title',
    descId: 'gallery-rotifer-desc',
    ratio: '3x2',
    span: 'col-span-1',
  },
  {
    id: 'volvox',
    title: 'Volvox',
    desc: 'Spherical colony of green algae cells working together',
    imgId: 'gallery-img-vol9p3',
    titleId: 'gallery-volvox-title',
    descId: 'gallery-volvox-desc',
    ratio: '1x1',
    span: 'col-span-1 md:col-span-2',
  },
]

const GallerySection = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section id="gallery" ref={containerRef} className="py-20 md:py-32 px-4 md:px-8 bg-cosmos-deeper">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-cosmos-purple font-medium text-sm uppercase tracking-widest mb-3">
            Visual Exploration
          </p>
          <h2
            id="gallery-section-title"
            className="font-heading text-3xl md:text-5xl font-bold text-cosmos-text tracking-tight mb-4"
          >
            Microscopic Gallery
          </h2>
          <p
            id="gallery-section-subtitle"
            className="text-cosmos-muted text-base md:text-lg max-w-2xl mx-auto"
          >
            Stunning imagery captured through advanced microscopy, revealing the hidden beauty of organisms invisible to the naked eye.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[250px] md:auto-rows-[280px]">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className={`${item.span} relative group rounded-2xl overflow-hidden border border-cosmos-border hover:border-cosmos-cyan/30 transition-all duration-500`}
            >
              <img
                alt={item.title}
                data-strk-img-id={item.imgId}
                data-strk-img={`[${item.descId}] [${item.titleId}] [gallery-section-subtitle] [gallery-section-title]`}
                data-strk-img-ratio={item.ratio}
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cosmos-dark/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <h3 id={item.titleId} className="font-heading text-xl font-semibold text-cosmos-text mb-1">
                  {item.title}
                </h3>
                <p id={item.descId} className="text-cosmos-muted text-sm">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default GallerySection
