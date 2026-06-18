import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const categories = [
  {
    id: 'cat-bacteria',
    titleId: 'cat-title-bacteria',
    descId: 'cat-desc-bacteria',
    imgId: 'cat-img-mc-bacteria',
    name: 'Bacteria',
    count: '10,000+ species',
    desc: 'Single-celled prokaryotes that are the most abundant life forms on Earth, found in every habitat imaginable.',
    color: '#00d4aa',
  },
  {
    id: 'cat-cells',
    titleId: 'cat-title-cells',
    descId: 'cat-desc-cells',
    imgId: 'cat-img-mc-cells',
    name: 'Eukaryotic Cells',
    count: '200+ cell types',
    desc: 'Complex cells with a nucleus and organelles, forming the building blocks of all plants, animals, and fungi.',
    color: '#a855f7',
  },
  {
    id: 'cat-fungi',
    titleId: 'cat-title-fungi',
    descId: 'cat-desc-fungi',
    imgId: 'cat-img-mc-fungi',
    name: 'Fungi & Molds',
    count: '5M+ species',
    desc: 'Decomposers and recyclers of the natural world, with intricate spore structures and hyphal networks.',
    color: '#f59e0b',
  },
  {
    id: 'cat-algae',
    titleId: 'cat-title-algae',
    descId: 'cat-desc-algae',
    imgId: 'cat-img-mc-algae',
    name: 'Algae & Diatoms',
    count: '72,500+ species',
    desc: 'Photosynthetic microorganisms that produce over half of Earth\'s oxygen, with stunning geometric shells.',
    color: '#39ff14',
  },
  {
    id: 'cat-viruses',
    titleId: 'cat-title-viruses',
    descId: 'cat-desc-viruses',
    imgId: 'cat-img-mc-viruses',
    name: 'Viruses',
    count: '10³¹ particles',
    desc: 'The smallest biological entities, existing at the boundary of life, with remarkable geometric protein structures.',
    color: '#ef4444',
  },
  {
    id: 'cat-protozoa',
    titleId: 'cat-title-protozoa',
    descId: 'cat-desc-protozoa',
    imgId: 'cat-img-mc-protozoa',
    name: 'Protozoa',
    count: '50,000+ species',
    desc: 'Diverse single-celled eukaryotes that hunt, swim, and thrive in aquatic environments worldwide.',
    color: '#06b6d4',
  },
]

export default function CategoriesSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section id="categories" ref={containerRef} className="py-24 px-6 md:px-12 bg-[#050a0e]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-sm font-medium tracking-widest uppercase text-[#00d4aa] mb-4">
            Kingdoms of the Small
          </p>
          <h2
            id="categories-section-title"
            className="text-4xl md:text-5xl font-bold text-sky-50 mb-4"
          >
            Explore by Category
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Dive into the diverse kingdoms of microscopic life, each with its own unique biology and beauty.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="group relative overflow-hidden rounded-2xl border border-white/5 hover:border-white/20 transition-all duration-300 bg-[#0d1f2d] cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  alt={cat.name}
                  data-strk-img-id={cat.imgId}
                  data-strk-img={`[${cat.descId}] [${cat.titleId}] [categories-section-title]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1f2d] via-[#0d1f2d]/30 to-transparent" />
                {/* Count badge */}
                <div
                  className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold text-[#050a0e]"
                  style={{ backgroundColor: cat.color }}
                >
                  {cat.count}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div
                  className="w-1 h-6 rounded-full mb-3"
                  style={{ backgroundColor: cat.color }}
                />
                <h3 id={cat.titleId} className="text-sky-50 font-bold text-xl mb-2">
                  {cat.name}
                </h3>
                <p id={cat.descId} className="text-slate-400 text-sm leading-relaxed">
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
