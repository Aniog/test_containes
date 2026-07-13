import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const showcaseItems = [
  {
    id: 'pollen',
    title: 'Pollen Grains',
    desc: 'Electron microscopy reveals the extraordinary sculptured surfaces of pollen grains, each species with unique patterns',
    imgId: 'showcase-img-pol3k9',
    titleId: 'showcase-pollen-title',
    descId: 'showcase-pollen-desc',
  },
  {
    id: 'crystal',
    title: 'Vitamin C Crystals',
    desc: 'Polarized light microscopy transforms ordinary vitamin crystals into dazzling abstract art',
    imgId: 'showcase-img-cry7m2',
    titleId: 'showcase-crystal-title',
    descId: 'showcase-crystal-desc',
  },
  {
    id: 'neuron',
    title: 'Neural Networks',
    desc: 'Fluorescent staining illuminates the branching connections of neurons communicating across the brain',
    imgId: 'showcase-img-neu5p4',
    titleId: 'showcase-neuron-title',
    descId: 'showcase-neuron-desc',
  },
  {
    id: 'blood',
    title: 'Blood Cells',
    desc: 'Red and white blood cells flowing through capillaries, the rivers of life within our bodies',
    imgId: 'showcase-img-blo8r6',
    titleId: 'showcase-blood-title',
    descId: 'showcase-blood-desc',
  },
]

const ShowcaseSection = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-20 md:py-32 px-4 md:px-8 bg-cosmos-deeper">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-cosmos-cyan font-medium text-sm uppercase tracking-widest mb-3">
            Microscopy Showcase
          </p>
          <h2
            id="showcase-section-title"
            className="font-heading text-3xl md:text-5xl font-bold text-cosmos-text tracking-tight mb-4"
          >
            Art Through the Lens
          </h2>
          <p
            id="showcase-section-subtitle"
            className="text-cosmos-muted text-base md:text-lg max-w-2xl mx-auto"
          >
            Where science meets art — stunning imagery captured through electron, fluorescence, and polarized light microscopy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {showcaseItems.map((item) => (
            <div
              key={item.id}
              className="group relative h-72 md:h-96 rounded-2xl overflow-hidden border border-cosmos-border hover:border-cosmos-cyan/30 transition-all duration-500"
            >
              <img
                alt={item.title}
                data-strk-img-id={item.imgId}
                data-strk-img={`[${item.descId}] [${item.titleId}] [showcase-section-title]`}
                data-strk-img-ratio="16x9"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cosmos-dark/95 via-cosmos-dark/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <h3 id={item.titleId} className="font-heading text-2xl font-semibold text-cosmos-text mb-2">
                  {item.title}
                </h3>
                <p id={item.descId} className="text-cosmos-muted text-sm md:text-base leading-relaxed">
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
