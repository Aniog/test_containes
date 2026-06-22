import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const showcaseItems = [
  {
    id: 'cell-division',
    title: 'Cell Division',
    desc: 'Mitosis captured in stunning detail showing chromosomes separating',
    imgId: 'showcase-celldiv-m8i1j3',
    titleId: 'showcase-cell-division-title',
    descId: 'showcase-cell-division-desc',
  },
  {
    id: 'bacteria-colony',
    title: 'Bacteria Colonies',
    desc: 'Colorful bacterial cultures growing in intricate fractal patterns',
    imgId: 'showcase-bacteria-n0k4l6',
    titleId: 'showcase-bacteria-colony-title',
    descId: 'showcase-bacteria-colony-desc',
  },
  {
    id: 'crystal-formation',
    title: 'Crystal Formation',
    desc: 'Microscopic crystals forming geometric structures under polarized light',
    imgId: 'showcase-crystal-o3m7n9',
    titleId: 'showcase-crystal-formation-title',
    descId: 'showcase-crystal-formation-desc',
  },
  {
    id: 'pollen-grain',
    title: 'Pollen Grains',
    desc: 'Intricate surface textures of pollen grains from various flowering plants',
    imgId: 'showcase-pollen-p6o2q4',
    titleId: 'showcase-pollen-grain-title',
    descId: 'showcase-pollen-grain-desc',
  },
]

const ShowcaseSection = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-cyan-400 text-sm font-medium tracking-widest uppercase mb-3">
            Microscopy Showcase
          </p>
          <h2
            id="showcase-section-title"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4"
          >
            Art Through the Lens
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Where science meets art — stunning visuals captured through electron and optical microscopes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {showcaseItems.map((item) => (
            <div
              key={item.id}
              className="group relative aspect-[16/9] rounded-2xl overflow-hidden"
            >
              <img
                alt={item.title}
                data-strk-img-id={item.imgId}
                data-strk-img={`[${item.descId}] [${item.titleId}] [showcase-section-title]`}
                data-strk-img-ratio="16x9"
                data-strk-img-width="900"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 9'/%3E"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 id={item.titleId} className="text-xl font-semibold text-white mb-1">
                  {item.title}
                </h3>
                <p id={item.descId} className="text-slate-300 text-sm">
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

export default ShowcaseSection
