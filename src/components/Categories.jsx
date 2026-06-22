import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const categories = [
  {
    id: 'cat-bacteria',
    titleId: 'cat-title-bacteria',
    descId: 'cat-desc-bacteria',
    imgId: 'cat-img-bacteria-a1b2c3',
    name: 'Bacteria',
    count: '10,000+',
    desc: 'Single-celled prokaryotes found in every environment on Earth, from deep ocean vents to the human gut.',
    color: '#00d4ff',
    icon: '🦠',
  },
  {
    id: 'cat-cells',
    titleId: 'cat-title-cells',
    descId: 'cat-desc-cells',
    imgId: 'cat-img-cells-d4e5f6',
    name: 'Animal Cells',
    count: '37 Trillion',
    desc: 'The fundamental units of life in animals, each containing a nucleus and complex organelles.',
    color: '#f59e0b',
    icon: '🔴',
  },
  {
    id: 'cat-crystals',
    titleId: 'cat-title-crystals',
    descId: 'cat-desc-crystals',
    imgId: 'cat-img-crystals-g7h8i9',
    name: 'Crystals',
    count: '4,000+',
    desc: 'Minerals and compounds that form stunning geometric lattice structures at the atomic scale.',
    color: '#7c3aed',
    icon: '💎',
  },
  {
    id: 'cat-pollen',
    titleId: 'cat-title-pollen',
    descId: 'cat-desc-pollen',
    imgId: 'cat-img-pollen-j0k1l2',
    name: 'Pollen',
    count: '400,000+',
    desc: 'Microscopic grains produced by flowering plants, each species with a unique sculptural form.',
    color: '#f97316',
    icon: '🌸',
  },
  {
    id: 'cat-fungi',
    titleId: 'cat-title-fungi',
    descId: 'cat-desc-fungi',
    imgId: 'cat-img-fungi-m3n4o5',
    name: 'Fungi & Mold',
    count: '144,000+',
    desc: 'Spore-producing organisms that form intricate networks of hyphae and fruiting bodies.',
    color: '#10b981',
    icon: '🍄',
  },
  {
    id: 'cat-insects',
    titleId: 'cat-title-insects',
    descId: 'cat-desc-insects',
    imgId: 'cat-img-insects-p6q7r8',
    name: 'Micro-insects',
    count: '1,000,000+',
    desc: 'Tiny arthropods and their intricate body structures revealed in extraordinary detail.',
    color: '#ec4899',
    icon: '🦟',
  },
]

export default function Categories() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section id="categories" ref={containerRef} className="py-24 px-6 bg-[#0a1628]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#00d4ff] text-sm font-semibold uppercase tracking-widest mb-3 block">
            Explore by Type
          </span>
          <h2
            id="categories-section-title"
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Worlds Within Worlds
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#00d4ff] to-[#7c3aed] mx-auto mb-6 rounded-full" />
          <p
            id="categories-section-desc"
            className="text-slate-300 text-lg max-w-2xl mx-auto"
          >
            The microcosmos is divided into countless kingdoms, each with its own rules, forms, and extraordinary beauty.
          </p>
        </div>

        {/* Categories grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="group relative rounded-2xl overflow-hidden border border-[#1e3a5f] hover:border-opacity-60 transition-all duration-300 cursor-pointer"
              style={{ '--cat-color': cat.color }}
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  alt={cat.name}
                  data-strk-img-id={cat.imgId}
                  data-strk-img={`[${cat.descId}] [${cat.titleId}] [categories-section-title]`}
                  data-strk-img-ratio="3x2"
                  data-strk-img-width="700"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div
                  className="absolute inset-0 opacity-60 group-hover:opacity-40 transition-opacity duration-300"
                  style={{ background: `linear-gradient(to bottom, transparent 30%, #0a1628)` }}
                />
                {/* Count badge */}
                <div
                  className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold"
                  style={{ backgroundColor: `${cat.color}25`, border: `1px solid ${cat.color}60`, color: cat.color }}
                >
                  {cat.count} species
                </div>
              </div>

              {/* Content */}
              <div className="p-6 bg-[#0f1f3d]">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">{cat.icon}</span>
                  <h3
                    id={cat.titleId}
                    className="text-xl font-bold text-white"
                  >
                    {cat.name}
                  </h3>
                </div>
                <p
                  id={cat.descId}
                  className="text-slate-400 text-sm leading-relaxed mb-4"
                >
                  {cat.desc}
                </p>
                <div
                  className="flex items-center gap-2 text-sm font-medium transition-colors duration-200"
                  style={{ color: cat.color }}
                >
                  <span>Explore {cat.name}</span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>

              {/* Bottom accent line */}
              <div
                className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `linear-gradient(to right, transparent, ${cat.color}, transparent)` }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
