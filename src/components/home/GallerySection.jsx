import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const galleryItems = [
  {
    id: 'diatom',
    title: 'Diatom Shells',
    description: 'Intricate silica structures of microscopic algae',
    imgId: 'gallery-diatom-x8k2m1',
    titleId: 'gallery-diatom-title',
    descId: 'gallery-diatom-desc',
    ratio: '3x4',
  },
  {
    id: 'neuron',
    title: 'Neural Networks',
    description: 'Fluorescent neurons forming complex brain pathways',
    imgId: 'gallery-neuron-p4n7q3',
    titleId: 'gallery-neuron-title',
    descId: 'gallery-neuron-desc',
    ratio: '4x3',
  },
  {
    id: 'pollen',
    title: 'Pollen Grains',
    description: 'Colorful and textured reproductive particles of flowers',
    imgId: 'gallery-pollen-r9s5t2',
    titleId: 'gallery-pollen-title',
    descId: 'gallery-pollen-desc',
    ratio: '1x1',
  },
  {
    id: 'virus',
    title: 'Virus Structures',
    description: 'Geometric precision of viral capsid architecture',
    imgId: 'gallery-virus-u6v1w8',
    titleId: 'gallery-virus-title',
    descId: 'gallery-virus-desc',
    ratio: '4x3',
  },
  {
    id: 'blood',
    title: 'Blood Cells',
    description: 'Red and white blood cells flowing through vessels',
    imgId: 'gallery-blood-y3z7a4',
    titleId: 'gallery-blood-title',
    descId: 'gallery-blood-desc',
    ratio: '3x4',
  },
  {
    id: 'tardigrade',
    title: 'Tardigrades',
    description: 'Indestructible water bears surviving extreme conditions',
    imgId: 'gallery-tardigrade-b2c6d9',
    titleId: 'gallery-tardigrade-title',
    descId: 'gallery-tardigrade-desc',
    ratio: '1x1',
  },
]

const GallerySection = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-20 md:py-28 lg:py-32 bg-midnight">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 id="gallery-section-title" className="text-4xl md:text-5xl font-bold tracking-tight text-slate-100 mb-4">
            Microscopic Gallery
          </h2>
          <p id="gallery-section-subtitle" className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto">
            A curated collection of the most stunning microscopy images ever captured
          </p>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="break-inside-avoid group rounded-2xl overflow-hidden border border-slate-700/50 bg-slate-800/30 hover:border-violet/40 transition-all duration-300"
            >
              <div className="overflow-hidden">
                <img
                  alt={item.title}
                  data-strk-img-id={item.imgId}
                  data-strk-img={`[${item.descId}] [${item.titleId}] [gallery-section-title]`}
                  data-strk-img-ratio={item.ratio}
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-auto object-cover group-hover:scale-[1.03] transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 id={item.titleId} className="text-lg font-semibold text-slate-100 mb-1">
                  {item.title}
                </h3>
                <p id={item.descId} className="text-sm text-slate-400">
                  {item.description}
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
