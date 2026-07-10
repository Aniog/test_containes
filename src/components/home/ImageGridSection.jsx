import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const gridImages = [
  {
    id: 'amoeba',
    title: 'Amoeba in Motion',
    imgId: 'grid-amoeba-c4d8e1',
    titleId: 'grid-amoeba-title',
    span: 'col-span-1 row-span-1',
    ratio: '1x1',
  },
  {
    id: 'coral',
    title: 'Coral Polyps Close-up',
    imgId: 'grid-coral-f2g6h9',
    titleId: 'grid-coral-title',
    span: 'col-span-1 md:col-span-2 row-span-1',
    ratio: '16x9',
  },
  {
    id: 'moss',
    title: 'Moss Spore Capsules',
    imgId: 'grid-moss-i7j3k5',
    titleId: 'grid-moss-title',
    span: 'col-span-1 row-span-1',
    ratio: '1x1',
  },
  {
    id: 'mineral',
    title: 'Mineral Thin Section',
    imgId: 'grid-mineral-l1m8n4',
    titleId: 'grid-mineral-title',
    span: 'col-span-1 row-span-1',
    ratio: '1x1',
  },
  {
    id: 'plankton',
    title: 'Bioluminescent Plankton',
    imgId: 'grid-plankton-o6p2q7',
    titleId: 'grid-plankton-title',
    span: 'col-span-1 row-span-1',
    ratio: '1x1',
  },
  {
    id: 'fungal',
    title: 'Fungal Hyphae Network',
    imgId: 'grid-fungal-r3s9t5',
    titleId: 'grid-fungal-title',
    span: 'col-span-1 md:col-span-2 row-span-1',
    ratio: '16x9',
  },
  {
    id: 'eye',
    title: 'Compound Eye Detail',
    imgId: 'grid-eye-u8v4w1',
    titleId: 'grid-eye-title',
    span: 'col-span-1 row-span-1',
    ratio: '1x1',
  },
  {
    id: 'salt',
    title: 'Salt Crystal Formation',
    imgId: 'grid-salt-x2y6z3',
    titleId: 'grid-salt-title',
    span: 'col-span-1 row-span-1',
    ratio: '1x1',
  },
]

const ImageGridSection = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-20 md:py-28 lg:py-32 bg-midnight">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 id="grid-section-title" className="text-4xl md:text-5xl font-bold tracking-tight text-slate-100 mb-4">
            Micro Mosaics
          </h2>
          <p id="grid-section-subtitle" className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto">
            A visual tapestry of microscopic wonders from across the natural world
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {gridImages.map((item) => (
            <div
              key={item.id}
              className={`${item.span} group relative rounded-2xl overflow-hidden border border-slate-700/50 hover:border-emerald/40 transition-all duration-300`}
            >
              <img
                alt={item.title}
                data-strk-img-id={item.imgId}
                data-strk-img={`[${item.titleId}] [grid-section-title]`}
                data-strk-img-ratio={item.ratio}
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover aspect-square group-hover:scale-[1.05] transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-midnight/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                <span id={item.titleId} className="text-sm font-medium text-slate-100">
                  {item.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ImageGridSection
