import { useEffect, useRef, useState } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const categories = [
  {
    id: 'cat-bacteria',
    imgId: 'cat-img-mc031',
    titleId: 'cat-bacteria-title',
    descId: 'cat-bacteria-desc',
    label: 'Microbiology',
    title: 'Bacteria & Viruses',
    desc: 'The most abundant life forms on Earth. Bacteria colonize every environment imaginable — from deep ocean vents to the human gut. Under the microscope, their diversity is astonishing.',
    count: '10³⁰ estimated on Earth',
    color: 'from-teal-500/20 to-transparent',
    accent: 'text-teal-400',
  },
  {
    id: 'cat-cells',
    imgId: 'cat-img-mc032',
    titleId: 'cat-cells-title',
    descId: 'cat-cells-desc',
    label: 'Cell Biology',
    title: 'Animal & Plant Cells',
    desc: 'Every living organism is built from cells. Fluorescence microscopy reveals the intricate machinery inside — mitochondria, nuclei, and cytoskeletons glowing in vivid colors.',
    count: '37 trillion in the human body',
    color: 'from-purple-500/20 to-transparent',
    accent: 'text-purple-400',
  },
  {
    id: 'cat-crystals',
    imgId: 'cat-img-mc033',
    titleId: 'cat-crystals-title',
    descId: 'cat-crystals-desc',
    label: 'Mineralogy',
    title: 'Crystals & Minerals',
    desc: 'Polarized light microscopy transforms ordinary minerals into kaleidoscopic masterpieces. Salt, quartz, and vitamin crystals reveal nature\'s geometric perfection.',
    count: '4,000+ known mineral species',
    color: 'from-cyan-500/20 to-transparent',
    accent: 'text-cyan-400',
  },
  {
    id: 'cat-insects',
    imgId: 'cat-img-mc034',
    titleId: 'cat-insects-title',
    descId: 'cat-insects-desc',
    label: 'Entomology',
    title: 'Insects & Arthropods',
    desc: 'The compound eyes of a fly, the scales of a moth wing, the mouthparts of a mosquito — scanning electron microscopy reveals the alien architecture of the insect world.',
    count: '1 million+ described species',
    color: 'from-amber-500/20 to-transparent',
    accent: 'text-amber-400',
  },
  {
    id: 'cat-fungi',
    imgId: 'cat-img-mc035',
    titleId: 'cat-fungi-title',
    descId: 'cat-fungi-desc',
    label: 'Mycology',
    title: 'Fungi & Spores',
    desc: 'Fungal spores are nature\'s most elegant dispersal mechanisms. Their surfaces are sculpted with ridges, spines, and pores that make each species uniquely identifiable.',
    count: '5.1 million estimated species',
    color: 'from-green-500/20 to-transparent',
    accent: 'text-green-400',
  },
  {
    id: 'cat-plankton',
    imgId: 'cat-img-mc036',
    titleId: 'cat-plankton-title',
    descId: 'cat-plankton-desc',
    label: 'Marine Biology',
    title: 'Plankton & Diatoms',
    desc: 'Microscopic ocean drifters that produce half of Earth\'s oxygen. Diatoms build glass houses of extraordinary complexity, while radiolarians create mineral sculptures of breathtaking beauty.',
    count: 'Produce 50% of Earth\'s oxygen',
    color: 'from-blue-500/20 to-transparent',
    accent: 'text-blue-400',
  },
]

export default function CategoriesSection() {
  const containerRef = useRef(null)
  const [active, setActive] = useState(categories[0].id)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [active])

  const activeCategory = categories.find((c) => c.id === active)

  return (
    <section ref={containerRef} id="categories" className="py-24 md:py-32 px-4 md:px-8 bg-[#050a14]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-mono tracking-widest uppercase text-[#00d4aa] mb-4 block">
            — Fields of Study —
          </span>
          <h2
            id="categories-section-title"
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Worlds Within Worlds
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            The microcosmos spans every branch of science. Each category reveals a distinct universe of form, function, and wonder.
          </p>
        </div>

        {/* Tab navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActive(cat.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                active === cat.id
                  ? 'bg-[#00d4aa] text-[#050a14]'
                  : 'border border-slate-700 text-slate-400 hover:border-[#00d4aa]/50 hover:text-[#00d4aa]'
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Active category display */}
        {categories
          .filter((cat) => cat.id === active)
          .map((cat) => (
            <div key={cat.id} className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Image */}
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                <img
                  alt={cat.title}
                  data-strk-img-id={cat.imgId}
                  data-strk-img={`[${cat.descId}] [${cat.titleId}] [categories-section-title]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${cat.color}`} />
                <div className="absolute top-4 left-4">
                  <span className={`text-xs font-mono tracking-widest uppercase ${cat.accent} bg-[#050a14]/70 px-3 py-1 rounded-full`}>
                    {cat.label}
                  </span>
                </div>
              </div>

              {/* Text */}
              <div className="flex flex-col gap-6">
                <div>
                  <h3 id={cat.titleId} className="text-3xl md:text-4xl font-bold text-white mb-4">
                    {cat.title}
                  </h3>
                  <p id={cat.descId} className="text-slate-400 text-lg leading-relaxed">
                    {cat.desc}
                  </p>
                </div>
                <div className="bg-[#0d1a2e] border border-slate-700/50 rounded-xl p-4">
                  <span className="text-xs font-mono tracking-widest uppercase text-slate-500 block mb-1">
                    Did you know?
                  </span>
                  <span className={`text-lg font-semibold ${cat.accent}`}>{cat.count}</span>
                </div>
              </div>
            </div>
          ))}

        {/* Category grid thumbnails */}
        <div className="grid grid-cols-3 md:grid-cols-6 gap-3 mt-12">
          {categories.map((cat) => (
            <button
              key={`thumb-${cat.id}`}
              type="button"
              onClick={() => setActive(cat.id)}
              className={`group relative rounded-xl overflow-hidden aspect-square transition-all duration-200 ${
                active === cat.id ? 'ring-2 ring-[#00d4aa]' : 'opacity-60 hover:opacity-100'
              }`}
            >
              <img
                alt={cat.title}
                data-strk-img-id={`${cat.imgId}-thumb`}
                data-strk-img={`[${cat.titleId}] [categories-section-title]`}
                data-strk-img-ratio="1x1"
                data-strk-img-width="200"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-[#050a14]/40" />
              <span id={cat.titleId} className="sr-only">{cat.title}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
