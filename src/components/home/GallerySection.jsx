import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const galleryItems = [
  {
    id: 'tardigrade',
    title: 'Tardigrade',
    desc: 'The indestructible water bear — a microscopic marvel of resilience.',
    titleId: 'gallery-tardigrade-title',
    descId: 'gallery-tardigrade-desc',
    imgId: 'gallery-tardigrade-img-8f2a9c',
  },
  {
    id: 'diatom',
    title: 'Diatom Shell',
    desc: 'Intricate glass-like silica shells sculpted by single-celled algae.',
    titleId: 'gallery-diatom-title',
    descId: 'gallery-diatom-desc',
    imgId: 'gallery-diatom-img-6d34fa',
  },
  {
    id: 'neuron',
    title: 'Neuron Network',
    desc: 'The electric tapestry of brain cells communicating in cosmic patterns.',
    titleId: 'gallery-neuron-title',
    descId: 'gallery-neuron-desc',
    imgId: 'gallery-neuron-img-b1e2c3',
  },
  {
    id: 'pollen',
    title: 'Pollen Grain',
    desc: 'Nature\'s tiny messengers — each grain a unique sculptural masterpiece.',
    titleId: 'gallery-pollen-title',
    descId: 'gallery-pollen-desc',
    imgId: 'gallery-pollen-img-d4f5a6',
  },
  {
    id: 'snowflake',
    title: 'Snowflake Crystal',
    desc: 'Hexagonal ice crystals forming infinite patterns of frozen symmetry.',
    titleId: 'gallery-snowflake-title',
    descId: 'gallery-snowflake-desc',
    imgId: 'gallery-snowflake-img-e7g8h9',
  },
  {
    id: 'bacteria',
    title: 'Bacteria Colony',
    desc: 'Microscopic cities of single-celled organisms thriving in hidden worlds.',
    titleId: 'gallery-bacteria-title',
    descId: 'gallery-bacteria-desc',
    imgId: 'gallery-bacteria-img-i0j1k2',
  },
  {
    id: 'butterfly-wing',
    title: 'Butterfly Wing Scale',
    desc: 'Iridescent scales creating nature\'s most vibrant microscopic mosaics.',
    titleId: 'gallery-butterfly-wing-title',
    descId: 'gallery-butterfly-wing-desc',
    imgId: 'gallery-butterfly-wing-img-l3m4n5',
  },
  {
    id: 'mitosis',
    title: 'Cell Division',
    desc: 'The dance of chromosomes during mitosis — life replicating itself.',
    titleId: 'gallery-mitosis-title',
    descId: 'gallery-mitosis-desc',
    imgId: 'gallery-mitosis-img-o6p7q8',
  },
  {
    id: 'mold',
    title: 'Mold Spores',
    desc: 'Delicate fruiting bodies reaching upward like tiny alien forests.',
    titleId: 'gallery-mold-title',
    descId: 'gallery-mold-desc',
    imgId: 'gallery-mold-img-r9s0t1',
  },
  {
    id: 'blood-cell',
    title: 'Red Blood Cells',
    desc: 'The flowing river of life — billions of disc-shaped oxygen carriers.',
    titleId: 'gallery-blood-cell-title',
    descId: 'gallery-blood-cell-desc',
    imgId: 'gallery-blood-cell-img-u2v3w4',
  },
  {
    id: 'radiolarian',
    title: 'Radiolarian Skeleton',
    desc: 'Exquisite mineral skeletons of marine protozoa — nature\'s glass art.',
    titleId: 'gallery-radiolarian-title',
    descId: 'gallery-radiolarian-desc',
    imgId: 'gallery-radiolarian-img-x5y6z7',
  },
  {
    id: 'eye-fly',
    title: 'Fly Eye',
    desc: 'Thousands of hexagonal lenses composing a compound eye masterpiece.',
    titleId: 'gallery-eye-fly-title',
    descId: 'gallery-eye-fly-desc',
    imgId: 'gallery-eye-fly-img-a8b9c0',
  },
]

export default function GallerySection() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section id="gallery" ref={containerRef} className="py-20 md:py-28 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 id="gallery-section-title" className="text-3xl md:text-4xl font-bold mb-4">
            Microscopic{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
              Gallery
            </span>
          </h2>
          <p id="gallery-section-desc" className="text-slate-400 max-w-xl mx-auto text-lg">
            Each image reveals a hidden universe — worlds within worlds, invisible to the naked eye.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {galleryItems.map((item) => (
            <article
              key={item.id}
              className="group bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 hover:border-cyan-400/30 transition-all duration-500 hover:shadow-lg hover:shadow-cyan-500/5"
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  alt={item.title}
                  data-strk-img-id={item.imgId}
                  data-strk-img={`[${item.descId}] [${item.titleId}] [gallery-section-desc] [gallery-section-title]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="p-5">
                <h3 id={item.titleId} className="text-lg font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p id={item.descId} className="text-sm text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}