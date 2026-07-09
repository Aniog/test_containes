import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Dna, Droplets, Bug, Zap, Flower2, Gem } from 'lucide-react'

const categories = [
  {
    id: 'microorganisms',
    title: 'Microorganisms',
    desc: 'Tiny life forms — bacteria, protozoa, and archaea — that shape our world.',
    titleId: 'cat-microorganisms-title',
    descId: 'cat-microorganisms-desc',
    imgId: 'cat-microorganisms-img-8f2a9c',
    icon: Bug,
  },
  {
    id: 'cells',
    title: 'Cellular World',
    desc: 'The building blocks of life — organelles, membranes, and nuclei.',
    titleId: 'cat-cells-title',
    descId: 'cat-cells-desc',
    imgId: 'cat-cells-img-6d34fa',
    icon: Dna,
  },
  {
    id: 'crystals',
    title: 'Crystal Structures',
    desc: 'Nature\'s geometry — minerals and molecules in perfect atomic order.',
    titleId: 'cat-crystals-title',
    descId: 'cat-crystals-desc',
    imgId: 'cat-crystals-img-b1e2c3',
    icon: Gem,
  },
  {
    id: 'insects',
    title: 'Insect Anatomy',
    desc: 'The detailed architecture of the most diverse creatures on Earth.',
    titleId: 'cat-insects-title',
    descId: 'cat-insects-desc',
    imgId: 'cat-insects-img-d4f5a6',
    icon: Zap,
  },
  {
    id: 'aquatic',
    title: 'Aquatic Micro-life',
    desc: 'Plankton, algae, and microscopic ecosystems thriving in water.',
    titleId: 'cat-aquatic-title',
    descId: 'cat-aquatic-desc',
    imgId: 'cat-aquatic-img-e7g8h9',
    icon: Droplets,
  },
  {
    id: 'botanical',
    title: 'Botanical Micro',
    desc: 'Plant cells, stomata, and pollen — the hidden side of flora.',
    titleId: 'cat-botanical-title',
    descId: 'cat-botanical-desc',
    imgId: 'cat-botanical-img-i0j1k2',
    icon: Flower2,
  },
]

export default function CategoriesSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section id="categories" ref={containerRef} className="py-20 md:py-28 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 id="categories-section-title" className="text-3xl md:text-4xl font-bold mb-4">
            Explore the{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
              MicroCosmos
            </span>
          </h2>
          <p id="categories-section-desc" className="text-slate-400 max-w-xl mx-auto text-lg">
            Journey through the diverse realms of the microscopic universe.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {categories.map((cat) => {
            const Icon = cat.icon
            return (
              <article
                key={cat.id}
                className="group relative bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 hover:border-cyan-400/30 transition-all duration-500"
              >
                <div className="relative overflow-hidden aspect-[16/9]">
                  <img
                    alt={cat.title}
                    data-strk-img-id={cat.imgId}
                    data-strk-img={`[${cat.descId}] [${cat.titleId}] [categories-section-desc] [categories-section-title]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
                  <div className="absolute top-4 left-4 bg-cyan-400/10 backdrop-blur-sm border border-cyan-400/20 rounded-full p-2.5">
                    <Icon className="w-5 h-5 text-cyan-400" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 id={cat.titleId} className="text-xl font-semibold text-white mb-2">
                    {cat.title}
                  </h3>
                  <p id={cat.descId} className="text-sm text-slate-400 leading-relaxed">
                    {cat.desc}
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-cyan-400 text-sm font-medium group-hover:gap-3 transition-all duration-300">
                    <span>Explore</span>
                    <span className="transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}