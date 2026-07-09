import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const galleryItems = [
  {
    id: 'butterfly-wing',
    title: 'Butterfly Wing Scales',
    desc: 'Thousands of tiny overlapping scales create iridescent colors through light diffraction',
    imgId: 'gal-butterfly-n5o6p7',
    ratio: '3x4',
    span: '',
  },
  {
    id: 'pollen-grain',
    title: 'Pollen Grains',
    desc: 'Each species produces uniquely shaped pollen with intricate surface textures',
    imgId: 'gal-pollen-q8r9s1',
    ratio: '4x3',
    span: 'md:col-span-2',
  },
  {
    id: 'snowflake',
    title: 'Snowflake Crystal',
    desc: 'No two snowflakes are alike — each forms a unique hexagonal crystal structure',
    imgId: 'gal-snowflake-t2u3v4',
    ratio: '1x1',
    span: '',
  },
  {
    id: 'blood-cells',
    title: 'Red Blood Cells',
    desc: 'Biconcave discs that carry oxygen through the body, magnified 5000 times',
    imgId: 'gal-blood-w5x6y7',
    ratio: '4x3',
    span: 'md:col-span-2',
  },
  {
    id: 'spider-silk',
    title: 'Spider Silk Fibers',
    desc: 'Stronger than steel by weight, spider silk is one of nature\'s most remarkable materials',
    imgId: 'gal-spider-z8a1b2',
    ratio: '3x4',
    span: '',
  },
  {
    id: 'crystal-growth',
    title: 'Crystal Formation',
    desc: 'Minerals crystallizing under polarized light reveal stunning rainbow interference patterns',
    imgId: 'gal-crystal-c3d4e5',
    ratio: '16x9',
    span: 'md:col-span-3',
  },
  {
    id: 'neuron',
    title: 'Neural Networks',
    desc: 'Neurons forming synaptic connections, the basis of thought and consciousness',
    imgId: 'gal-neuron-f6g7h8',
    ratio: '4x3',
    span: '',
  },
  {
    id: 'virus',
    title: 'Bacteriophage Virus',
    desc: 'Viruses that infect bacteria, with their distinctive geometric head and tail structures',
    imgId: 'gal-virus-i9j1k2',
    ratio: '1x1',
    span: '',
  },
  {
    id: 'moss',
    title: 'Moss Sporangia',
    desc: 'The reproductive structures of moss releasing millions of microscopic spores into the air',
    imgId: 'gal-moss-l3m4n5',
    ratio: '4x3',
    span: '',
  },
]

const Gallery = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2
            id="gallery-section-title"
            className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cosmos-purple to-cosmos-magenta bg-clip-text text-transparent"
          >
            Micro Gallery
          </h2>
          <p
            id="gallery-section-subtitle"
            className="text-lg md:text-xl font-light text-cosmos-muted max-w-2xl mx-auto"
          >
            A curated collection of the most stunning microscopic imagery from around the world
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {galleryItems.map((item) => (
            <article
              key={item.id}
              className={`group relative rounded-xl overflow-hidden border border-white/10 hover:border-cosmos-purple/40 transition-all duration-300 ${item.span}`}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  alt={item.title}
                  data-strk-img-id={item.imgId}
                  data-strk-img={`[gal-${item.id}-desc] [gal-${item.id}-title] [gallery-section-title]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-cosmos-dark/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4 md:p-5">
                  <h3 className="text-lg font-semibold text-cosmos-text mb-1">
                    {item.title}
                  </h3>
                  <p className="text-cosmos-muted text-xs leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
              <span id={`gal-${item.id}-title`} className="sr-only">{item.title}</span>
              <span id={`gal-${item.id}-desc`} className="sr-only">{item.desc}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery
