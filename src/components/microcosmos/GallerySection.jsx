import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const GALLERY_ITEMS = [
  {
    id: 'diatom',
    titleId: 'gallery-diatom-title',
    descId: 'gallery-diatom-desc',
    imgId: 'gallery-img-diatom-a1b2',
    title: 'Diatom Symmetry',
    desc: 'Silica shell of a marine diatom under scanning electron microscope',
    category: 'Algae',
    span: 'md:col-span-2',
    ratio: '16x9',
    width: '1200',
  },
  {
    id: 'pollen',
    titleId: 'gallery-pollen-title',
    descId: 'gallery-pollen-desc',
    imgId: 'gallery-img-pollen-c3d4',
    title: 'Pollen Grain',
    desc: 'Colorized SEM image of flower pollen grain surface texture',
    category: 'Botany',
    span: '',
    ratio: '1x1',
    width: '600',
  },
  {
    id: 'bacteria',
    titleId: 'gallery-bacteria-title',
    descId: 'gallery-bacteria-desc',
    imgId: 'gallery-img-bacteria-e5f6',
    title: 'Bacterial Colony',
    desc: 'Fluorescence microscopy of glowing bacterial biofilm colony',
    category: 'Microbiology',
    span: '',
    ratio: '1x1',
    width: '600',
  },
  {
    id: 'crystal',
    titleId: 'gallery-crystal-title',
    descId: 'gallery-crystal-desc',
    imgId: 'gallery-img-crystal-g7h8',
    title: 'Salt Crystal',
    desc: 'Polarized light microscopy revealing salt crystal geometric patterns',
    category: 'Chemistry',
    span: '',
    ratio: '1x1',
    width: '600',
  },
  {
    id: 'neuron',
    titleId: 'gallery-neuron-title',
    descId: 'gallery-neuron-desc',
    imgId: 'gallery-img-neuron-i9j0',
    title: 'Neuron Network',
    desc: 'Confocal microscopy of fluorescent-labeled neural network connections',
    category: 'Neuroscience',
    span: 'md:col-span-2',
    ratio: '16x9',
    width: '1200',
  },
  {
    id: 'tardigrade',
    titleId: 'gallery-tardigrade-title',
    descId: 'gallery-tardigrade-desc',
    imgId: 'gallery-img-tardigrade-k1l2',
    title: 'Water Bear',
    desc: 'Tardigrade water bear microscopic animal extreme survival',
    category: 'Zoology',
    span: '',
    ratio: '1x1',
    width: '600',
  },
]

export default function GallerySection() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section id="gallery" ref={containerRef} className="py-20 md:py-28 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-14">
          <p className="text-xs font-semibold uppercase tracking-widest text-teal-400 mb-3">Visual Archive</p>
          <h2 id="gallery-section-title" className="text-3xl md:text-4xl font-bold text-white mb-4">
            Microscopy Gallery
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A curated collection of stunning microscopic imagery captured using electron microscopy, fluorescence, and polarized light techniques.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {GALLERY_ITEMS.map((item) => (
            <div
              key={item.id}
              className={`group relative rounded-2xl overflow-hidden bg-gray-800 border border-gray-700 hover:border-teal-500/50 transition-all duration-300 shadow-xl ${item.span}`}
            >
              <img
                alt={item.title}
                data-strk-img-id={item.imgId}
                data-strk-img={`[${item.descId}] [${item.titleId}] [gallery-section-title]`}
                data-strk-img-ratio={item.ratio}
                data-strk-img-width={item.width}
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950/90 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <span className="text-xs font-semibold uppercase tracking-widest text-teal-400 mb-1 block">
                  {item.category}
                </span>
                <h3 id={item.titleId} className="text-white font-bold text-lg leading-tight">
                  {item.title}
                </h3>
                <p id={item.descId} className="text-gray-400 text-sm mt-1 leading-snug">
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
