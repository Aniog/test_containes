import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const galleries = [
  {
    id: 'diatoms',
    title: 'Diatoms',
    desc: 'Microscopic algae with intricate glass-like silica shells',
    imgId: 'gallery-diatoms-4f8b2c',
    titleId: 'gallery-diatoms-title',
    descId: 'gallery-diatoms-desc',
    ratio: '1x1',
    span: 'md:col-span-1 md:row-span-1',
  },
  {
    id: 'neurons',
    title: 'Neural Networks',
    desc: 'Fluorescent neurons forming complex brain connections',
    imgId: 'gallery-neurons-7a3d1e',
    titleId: 'gallery-neurons-title',
    descId: 'gallery-neurons-desc',
    ratio: '16x9',
    span: 'md:col-span-2 md:row-span-1',
  },
  {
    id: 'tardigrade',
    title: 'Tardigrades',
    desc: 'Microscopic water bears surviving extreme environments',
    imgId: 'gallery-tardigrade-9c5e7f',
    titleId: 'gallery-tardigrade-title',
    descId: 'gallery-tardigrade-desc',
    ratio: '3x4',
    span: 'md:col-span-1 md:row-span-2',
  },
  {
    id: 'bacteria',
    title: 'Bacteria Colonies',
    desc: 'Colorful bacterial cultures growing in petri dishes',
    imgId: 'gallery-bacteria-2d6a8b',
    titleId: 'gallery-bacteria-title',
    descId: 'gallery-bacteria-desc',
    ratio: '4x3',
    span: 'md:col-span-1 md:row-span-1',
  },
  {
    id: 'pollen',
    title: 'Pollen Grains',
    desc: 'Electron microscope view of colorful pollen structures',
    imgId: 'gallery-pollen-1e4c9d',
    titleId: 'gallery-pollen-title',
    descId: 'gallery-pollen-desc',
    ratio: '1x1',
    span: 'md:col-span-1 md:row-span-1',
  },
  {
    id: 'crystals',
    title: 'Micro Crystals',
    desc: 'Polarized light microscopy revealing crystal formations',
    imgId: 'gallery-crystals-5b7f3a',
    titleId: 'gallery-crystals-title',
    descId: 'gallery-crystals-desc',
    ratio: '16x9',
    span: 'md:col-span-2 md:row-span-1',
  },
]

const GallerySection = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-20 md:py-28 px-4 md:px-8 bg-midnight">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary font-heading text-sm tracking-widest uppercase mb-3 block">Visual Exploration</span>
          <h2 id="gallery-section-title" className="font-heading text-3xl md:text-5xl font-bold text-text-primary tracking-tight mb-4">
            The Microscopic Gallery
          </h2>
          <p id="gallery-section-subtitle" className="text-text-secondary text-lg max-w-2xl mx-auto">
            A curated collection of stunning imagery from the world invisible to the naked eye
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[280px]">
          {galleries.map((item) => (
            <div
              key={item.id}
              className={`relative group overflow-hidden rounded-2xl ${item.span}`}
            >
              <img
                alt={item.title}
                data-strk-img-id={item.imgId}
                data-strk-img={`[${item.descId}] [${item.titleId}] [gallery-section-title]`}
                data-strk-img-ratio={item.ratio}
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-midnight/90 via-midnight/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 id={item.titleId} className="font-heading text-xl font-semibold text-text-primary mb-1">
                  {item.title}
                </h3>
                <p id={item.descId} className="text-text-secondary text-sm">
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
