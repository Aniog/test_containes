import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const showcaseItems = [
  {
    id: 'pollen',
    title: 'Pollen Grains',
    desc: 'Sculptured surfaces of pollen grains under scanning electron microscope',
    imgId: 'showcase-pollen-6d3b8a',
    ratio: '3x2',
    span: 'md:col-span-2',
  },
  {
    id: 'crystal',
    title: 'Vitamin C Crystals',
    desc: 'Polarized light reveals rainbow colors in crystallized ascorbic acid',
    imgId: 'showcase-crystal-2f9c4e',
    ratio: '1x1',
    span: '',
  },
  {
    id: 'neuron',
    title: 'Neural Networks',
    desc: 'Fluorescent-labeled neurons forming intricate branching connections in brain tissue',
    imgId: 'showcase-neuron-8a1d5c',
    ratio: '1x1',
    span: '',
  },
  {
    id: 'butterfly',
    title: 'Butterfly Wing Scales',
    desc: 'Nano-structured scales creating iridescent colors through light interference',
    imgId: 'showcase-butterfly-4c7e2a',
    ratio: '3x2',
    span: 'md:col-span-2',
  },
  {
    id: 'blood',
    title: 'Red Blood Cells',
    desc: 'Biconcave discs flowing through capillaries carrying oxygen to every tissue',
    imgId: 'showcase-blood-9b3f7d',
    ratio: '4x3',
    span: '',
  },
  {
    id: 'snowflake',
    title: 'Snowflake Crystals',
    desc: 'Hexagonal ice crystals with unique fractal branching patterns',
    imgId: 'showcase-snowflake-1e5a8c',
    ratio: '4x3',
    span: '',
  },
  {
    id: 'moss',
    title: 'Moss Sporangia',
    desc: 'Delicate spore capsules of moss plants releasing microscopic reproductive cells',
    imgId: 'showcase-moss-7c2d9f',
    ratio: '4x3',
    span: '',
  },
]

const ShowcaseSection = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-20 md:py-32 bg-deep-dark">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <p className="text-primary font-medium text-sm uppercase tracking-widest mb-3">
            Showcase
          </p>
          <h2 id="showcase-section-title" className="text-3xl md:text-5xl font-bold tracking-tight text-text-primary mb-4">
            Nature's Hidden Masterpieces
          </h2>
          <p id="showcase-section-subtitle" className="text-lg md:text-xl font-light text-text-secondary max-w-2xl mx-auto">
            From crystalline structures to living cells, every microscopic detail is a work of art
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {showcaseItems.map((item) => (
            <div
              key={item.id}
              className={`relative group rounded-2xl overflow-hidden ${item.span}`}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  alt={item.title}
                  data-strk-img-id={item.imgId}
                  data-strk-img={`[showcase-${item.id}-desc] [showcase-${item.id}-title] [showcase-section-subtitle] [showcase-section-title]`}
                  data-strk-img-ratio={item.ratio}
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-deep-dark/90 via-deep-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div>
                  <h3 id={`showcase-${item.id}-title`} className="text-lg font-semibold text-text-primary mb-1">
                    {item.title}
                  </h3>
                  <p id={`showcase-${item.id}-desc`} className="text-text-secondary text-sm">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ShowcaseSection
