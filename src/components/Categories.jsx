import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const categories = [
  {
    id: 'cat-bacteria',
    titleId: 'cat-title-bacteria',
    descId: 'cat-desc-bacteria',
    imgId: 'cat-img-mc-bacteria',
    title: 'Bacteria',
    desc: 'Single-celled prokaryotes found in every environment on Earth',
    count: '10,000+ species',
    color: 'from-cyan-500/20 to-transparent',
    accent: 'text-cosmos-cyan',
  },
  {
    id: 'cat-viruses',
    titleId: 'cat-title-viruses',
    descId: 'cat-desc-viruses',
    imgId: 'cat-img-mc-viruses',
    title: 'Viruses',
    desc: 'Nanoscale infectious agents that replicate inside living cells',
    count: '320,000+ types',
    color: 'from-purple-500/20 to-transparent',
    accent: 'text-purple-400',
  },
  {
    id: 'cat-fungi',
    titleId: 'cat-title-fungi',
    descId: 'cat-desc-fungi',
    imgId: 'cat-img-mc-fungi',
    title: 'Fungi & Molds',
    desc: 'Spore-producing organisms including yeasts, molds, and mushrooms',
    count: '5.1M+ species',
    color: 'from-orange-500/20 to-transparent',
    accent: 'text-orange-400',
  },
  {
    id: 'cat-protozoa',
    titleId: 'cat-title-protozoa',
    descId: 'cat-desc-protozoa',
    imgId: 'cat-img-mc-protozoa',
    title: 'Protozoa',
    desc: 'Complex single-celled eukaryotes with sophisticated behaviors',
    count: '50,000+ species',
    color: 'from-green-500/20 to-transparent',
    accent: 'text-cosmos-neon',
  },
  {
    id: 'cat-algae',
    titleId: 'cat-title-algae',
    descId: 'cat-desc-algae',
    imgId: 'cat-img-mc-algae',
    title: 'Algae & Diatoms',
    desc: 'Photosynthetic microorganisms producing half of Earth\'s oxygen',
    count: '72,500+ species',
    color: 'from-teal-500/20 to-transparent',
    accent: 'text-cosmos-teal',
  },
  {
    id: 'cat-cells',
    titleId: 'cat-title-cells',
    descId: 'cat-desc-cells',
    imgId: 'cat-img-mc-cells',
    title: 'Human Cells',
    desc: 'The building blocks of life — from neurons to blood cells',
    count: '200+ cell types',
    color: 'from-red-500/20 to-transparent',
    accent: 'text-red-400',
  },
]

export default function Categories() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section id="categories" ref={containerRef} className="bg-cosmos-bg py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <p className="text-cosmos-cyan text-sm font-semibold tracking-[0.3em] uppercase mb-4">
            Taxonomy
          </p>
          <h2
            id="cat-section-title"
            className="text-4xl md:text-5xl font-bold text-cosmos-text mb-4"
          >
            Kingdoms of the Micro World
          </h2>
          <p
            id="cat-section-desc"
            className="text-cosmos-muted text-lg max-w-2xl mx-auto"
          >
            Discover the diverse kingdoms of microscopic life, each with unique characteristics and roles in our ecosystem.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="group relative overflow-hidden rounded-2xl border border-cosmos-border bg-cosmos-card hover:border-cosmos-cyan/40 transition-all duration-300 hover:shadow-glow-cyan"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  alt={cat.title}
                  data-strk-img-id={cat.imgId}
                  data-strk-img={`[${cat.descId}] [${cat.titleId}] [cat-section-desc]`}
                  data-strk-img-ratio="3x2"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${cat.color} via-transparent`} />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className={`text-xs font-semibold tracking-widest uppercase mb-2 ${cat.accent}`}>
                  {cat.count}
                </div>
                <h3 id={cat.titleId} className="text-cosmos-text text-xl font-bold mb-2">
                  {cat.title}
                </h3>
                <p id={cat.descId} className="text-cosmos-muted text-sm leading-relaxed">
                  {cat.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
