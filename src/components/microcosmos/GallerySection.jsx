import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const galleryItems = [
  {
    id: 'diatom',
    title: 'Diatoms',
    desc: 'Microscopic algae with intricate glass-like silica shells forming geometric patterns',
    imgId: 'gallery-diatom-a1b2c3',
    titleId: 'gallery-diatom-title',
    descId: 'gallery-diatom-desc',
    ratio: '3x2',
    span: 'col-span-1 md:col-span-2 row-span-1 md:row-span-2',
  },
  {
    id: 'tardigrade',
    title: 'Tardigrades',
    desc: 'Microscopic water bears that survive extreme conditions in space and deep ocean',
    imgId: 'gallery-tardigrade-d4e5f6',
    titleId: 'gallery-tardigrade-title',
    descId: 'gallery-tardigrade-desc',
    ratio: '4x3',
    span: 'col-span-1',
  },
  {
    id: 'paramecium',
    title: 'Paramecium',
    desc: 'Single-celled organisms with hair-like cilia used for movement and feeding',
    imgId: 'gallery-paramecium-g7h8i9',
    titleId: 'gallery-paramecium-title',
    descId: 'gallery-paramecium-desc',
    ratio: '4x3',
    span: 'col-span-1',
  },
  {
    id: 'pollen',
    title: 'Pollen Grains',
    desc: 'Colorful microscopic plant reproductive cells with unique surface textures',
    imgId: 'gallery-pollen-j1k2l3',
    titleId: 'gallery-pollen-title',
    descId: 'gallery-pollen-desc',
    ratio: '1x1',
    span: 'col-span-1',
  },
  {
    id: 'radiolaria',
    title: 'Radiolaria',
    desc: 'Marine protozoa with elaborate mineral skeletons resembling crystal structures',
    imgId: 'gallery-radiolaria-m4n5o6',
    titleId: 'gallery-radiolaria-title',
    descId: 'gallery-radiolaria-desc',
    ratio: '3x2',
    span: 'col-span-1 md:col-span-2',
  },
  {
    id: 'rotifer',
    title: 'Rotifers',
    desc: 'Tiny aquatic animals with rotating wheel-like structures for capturing food',
    imgId: 'gallery-rotifer-p7q8r9',
    titleId: 'gallery-rotifer-title',
    descId: 'gallery-rotifer-desc',
    ratio: '4x3',
    span: 'col-span-1',
  },
]

const GallerySection = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section id="gallery" ref={containerRef} className="py-20 md:py-28 px-6 md:px-12 bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-violet-400 text-sm font-semibold tracking-widest uppercase mb-3">Visual Exploration</p>
          <h2 id="gallery-section-title" className="text-3xl md:text-5xl font-extrabold text-white mb-4">
            Gallery of the Microscopic
          </h2>
          <p id="gallery-section-subtitle" className="text-lg text-slate-300 max-w-2xl mx-auto">
            Stunning imagery captured through electron microscopes and advanced macro photography, revealing nature's hidden masterpieces.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className={`${item.span} group relative rounded-2xl overflow-hidden border border-slate-700/50 hover:border-emerald-500/40 transition-all duration-500`}
            >
              <img
                alt={item.title}
                data-strk-img-id={item.imgId}
                data-strk-img={`[${item.descId}] [${item.titleId}] [gallery-section-title]`}
                data-strk-img-ratio={item.ratio}
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <h3 id={item.titleId} className="text-lg font-bold text-white mb-1">{item.title}</h3>
                <p id={item.descId} className="text-sm text-slate-300">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default GallerySection
