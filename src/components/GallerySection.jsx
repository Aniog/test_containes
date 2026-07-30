import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const galleryItems = [
  {
    id: 'gal-01',
    titleId: 'gal-title-01',
    descId: 'gal-desc-01',
    imgId: 'gallery-img-mc-01',
    title: 'Diatom Colony',
    desc: 'Silica-shelled algae forming intricate geometric patterns under polarized light',
    span: 'md:col-span-2 md:row-span-2',
    ratio: '1x1',
    width: '900',
  },
  {
    id: 'gal-02',
    titleId: 'gal-title-02',
    descId: 'gal-desc-02',
    imgId: 'gallery-img-mc-02',
    title: 'Tardigrade',
    desc: 'Water bear microscopic animal surviving extreme conditions',
    span: '',
    ratio: '4x3',
    width: '500',
  },
  {
    id: 'gal-03',
    titleId: 'gal-title-03',
    descId: 'gal-desc-03',
    imgId: 'gallery-img-mc-03',
    title: 'Pollen Grain',
    desc: 'Colorized scanning electron microscope image of flower pollen',
    span: '',
    ratio: '4x3',
    width: '500',
  },
  {
    id: 'gal-04',
    titleId: 'gal-title-04',
    descId: 'gal-desc-04',
    imgId: 'gallery-img-mc-04',
    title: 'Neuron Network',
    desc: 'Fluorescent microscopy of interconnected brain neurons',
    span: '',
    ratio: '4x3',
    width: '500',
  },
  {
    id: 'gal-05',
    titleId: 'gal-title-05',
    descId: 'gal-desc-05',
    imgId: 'gallery-img-mc-05',
    title: 'Bacteria Biofilm',
    desc: 'Colorized SEM of bacterial colony forming a biofilm structure',
    span: '',
    ratio: '4x3',
    width: '500',
  },
  {
    id: 'gal-06',
    titleId: 'gal-title-06',
    descId: 'gal-desc-06',
    imgId: 'gallery-img-mc-06',
    title: 'Red Blood Cells',
    desc: 'Human erythrocytes flowing through a capillary vessel',
    span: '',
    ratio: '4x3',
    width: '500',
  },
  {
    id: 'gal-07',
    titleId: 'gal-title-07',
    descId: 'gal-desc-07',
    imgId: 'gallery-img-mc-07',
    title: 'Radiolarian',
    desc: 'Single-celled protozoa with ornate mineral skeleton',
    span: '',
    ratio: '4x3',
    width: '500',
  },
]

export default function GallerySection() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} id="gallery" className="bg-gray-950 py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-teal-400 text-sm uppercase tracking-widest font-semibold mb-3">
            Visual Gallery
          </p>
          <h2 id="gallery-title" className="text-4xl md:text-5xl font-bold text-white mb-4">
            Microscopic Wonders
          </h2>
          <p id="gallery-subtitle" className="text-gray-400 text-lg max-w-xl mx-auto">
            Stunning imagery captured through electron microscopes, fluorescence microscopy, and advanced imaging techniques.
          </p>
        </div>

        {/* Mosaic grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-4 auto-rows-[220px]">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className={`relative group overflow-hidden rounded-2xl ${item.span}`}
            >
              <img
                data-strk-img-id={item.imgId}
                data-strk-img={`[${item.descId}] [${item.titleId}] [gallery-subtitle] [gallery-title]`}
                data-strk-img-ratio={item.ratio}
                data-strk-img-width={item.width}
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950/90 via-gray-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <h3 id={item.titleId} className="text-white font-bold text-lg leading-tight">
                  {item.title}
                </h3>
                <p id={item.descId} className="text-gray-300 text-sm mt-1 leading-snug">
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
