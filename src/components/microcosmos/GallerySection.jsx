import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const galleryItems = [
  {
    id: 'diatom',
    title: 'Diatoms',
    desc: 'Microscopic algae with intricate silica glass shells forming geometric patterns',
    imgId: 'gallery-diatom-a3f9x2',
    titleId: 'gallery-diatom-title',
    descId: 'gallery-diatom-desc',
    span: 'lg:col-span-2 lg:row-span-2',
    ratio: '1x1',
    width: '900',
  },
  {
    id: 'tardigrade',
    title: 'Tardigrades',
    desc: 'Indestructible water bears surviving extreme conditions in microscopic world',
    imgId: 'gallery-tardigrade-b7k2m4',
    titleId: 'gallery-tardigrade-title',
    descId: 'gallery-tardigrade-desc',
    span: '',
    ratio: '4x3',
    width: '600',
  },
  {
    id: 'paramecium',
    title: 'Paramecium',
    desc: 'Single-celled organisms with hair-like cilia swimming through pond water',
    imgId: 'gallery-paramecium-c9n1p6',
    titleId: 'gallery-paramecium-title',
    descId: 'gallery-paramecium-desc',
    span: '',
    ratio: '4x3',
    width: '600',
  },
  {
    id: 'radiolaria',
    title: 'Radiolaria',
    desc: 'Marine protozoa with stunning mineral skeletons resembling alien architecture',
    imgId: 'gallery-radiolaria-d2q8r3',
    titleId: 'gallery-radiolaria-title',
    descId: 'gallery-radiolaria-desc',
    span: '',
    ratio: '4x3',
    width: '600',
  },
  {
    id: 'rotifer',
    title: 'Rotifers',
    desc: 'Tiny multicellular animals with rotating wheel-like crowns of cilia',
    imgId: 'gallery-rotifer-e5s4t7',
    titleId: 'gallery-rotifer-title',
    descId: 'gallery-rotifer-desc',
    span: '',
    ratio: '4x3',
    width: '600',
  },
  {
    id: 'volvox',
    title: 'Volvox',
    desc: 'Spherical colonies of green algae spinning through freshwater like tiny planets',
    imgId: 'gallery-volvox-f8u6v1',
    titleId: 'gallery-volvox-title',
    descId: 'gallery-volvox-desc',
    span: 'lg:col-span-2',
    ratio: '16x9',
    width: '1000',
  },
]

const GallerySection = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section id="gallery" ref={containerRef} className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-emerald-400 text-sm font-medium tracking-widest uppercase mb-3">
            Visual Exploration
          </p>
          <h2
            id="gallery-section-title"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4"
          >
            Microscopic Gallery
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Stunning imagery captured through powerful microscopes, revealing the art hidden in nature's smallest creations.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className={`group relative rounded-2xl overflow-hidden ${item.span}`}
            >
              <img
                alt={item.title}
                data-strk-img-id={item.imgId}
                data-strk-img={`[${item.descId}] [${item.titleId}] [gallery-section-title]`}
                data-strk-img-ratio={item.ratio}
                data-strk-img-width={item.width}
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover aspect-square transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 id={item.titleId} className="text-white font-semibold text-lg">
                  {item.title}
                </h3>
                <p id={item.descId} className="text-slate-300 text-sm mt-1">
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
