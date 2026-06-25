import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const showcaseItems = [
  {
    id: 'crystal',
    title: 'Crystal Formations',
    desc: 'Polarized light reveals stunning rainbow colors in microscopic mineral crystals',
    imgId: 'showcase-crystal-e4f5g6',
    titleId: 'showcase-crystal-title',
    descId: 'showcase-crystal-desc',
  },
  {
    id: 'neuron',
    title: 'Neural Networks',
    desc: 'Fluorescent staining illuminates the branching pathways of brain neurons',
    imgId: 'showcase-neuron-h7i8j9',
    titleId: 'showcase-neuron-title',
    descId: 'showcase-neuron-desc',
  },
  {
    id: 'butterfly',
    title: 'Butterfly Wing Scales',
    desc: 'Electron microscopy reveals the nanostructures that create iridescent colors',
    imgId: 'showcase-butterfly-k1l2m3',
    titleId: 'showcase-butterfly-title',
    descId: 'showcase-butterfly-desc',
  },
]

const ShowcaseSection = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-20 md:py-28 px-6 md:px-12 bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-emerald-400 text-sm font-semibold tracking-widest uppercase mb-3">Microscopy Art</p>
          <h2 id="showcase-section-title" className="text-3xl md:text-5xl font-extrabold text-white mb-4">
            Where Science Meets Art
          </h2>
          <p id="showcase-section-subtitle" className="text-lg text-slate-300 max-w-2xl mx-auto">
            The most beautiful images captured through advanced microscopy techniques, revealing nature's hidden artistry.
          </p>
        </div>

        <div className="space-y-16">
          {showcaseItems.map((item, index) => (
            <div
              key={item.id}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-12 items-center`}
            >
              <div className="w-full lg:w-3/5 rounded-2xl overflow-hidden border border-slate-700/50 shadow-lg shadow-emerald-500/5">
                <img
                  alt={item.title}
                  data-strk-img-id={item.imgId}
                  data-strk-img={`[${item.descId}] [${item.titleId}] [showcase-section-title]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="1000"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-auto"
                />
              </div>
              <div className="w-full lg:w-2/5">
                <h3 id={item.titleId} className="text-2xl md:text-3xl font-bold text-white mb-4">{item.title}</h3>
                <p id={item.descId} className="text-base text-slate-300 leading-relaxed mb-6">{item.desc}</p>
                <div className="h-1 w-16 bg-gradient-to-r from-emerald-400 to-violet-400 rounded-full" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ShowcaseSection
