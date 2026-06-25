import { useEffect, useRef, useState } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const categories = [
  {
    id: 'cells',
    name: 'Cells & Organelles',
    desc: 'The fundamental units of life, revealed in stunning detail',
    count: '2,400+ images',
    titleId: 'cat-cells-title',
    descId: 'cat-cells-desc',
    imgId: 'cat-img-cells-mc010',
    color: 'cyan',
  },
  {
    id: 'bacteria',
    name: 'Bacteria & Microbes',
    desc: 'Ancient life forms that shaped our planet and our bodies',
    count: '1,800+ images',
    titleId: 'cat-bacteria-title',
    descId: 'cat-bacteria-desc',
    imgId: 'cat-img-bacteria-mc011',
    color: 'teal',
  },
  {
    id: 'crystals',
    name: 'Crystals & Minerals',
    desc: 'Geometric perfection born from the forces of chemistry',
    count: '3,100+ images',
    titleId: 'cat-crystals-title',
    descId: 'cat-crystals-desc',
    imgId: 'cat-img-crystals-mc012',
    color: 'purple',
  },
  {
    id: 'insects',
    name: 'Insects & Arthropods',
    desc: 'Compound eyes, intricate wings, and alien anatomy up close',
    count: '2,900+ images',
    titleId: 'cat-insects-title',
    descId: 'cat-insects-desc',
    imgId: 'cat-img-insects-mc013',
    color: 'emerald',
  },
  {
    id: 'plants',
    name: 'Plant Microstructures',
    desc: 'Pollen, spores, and the hidden architecture of flora',
    count: '2,200+ images',
    titleId: 'cat-plants-title',
    descId: 'cat-plants-desc',
    imgId: 'cat-img-plants-mc014',
    color: 'green',
  },
  {
    id: 'water',
    name: 'Aquatic Microlife',
    desc: 'Diatoms, plankton, and the ocean\'s invisible ecosystem',
    count: '1,600+ images',
    titleId: 'cat-water-title',
    descId: 'cat-water-desc',
    imgId: 'cat-img-water-mc015',
    color: 'blue',
  },
]

const colorMap = {
  cyan: 'border-cyan-500/30 hover:border-cyan-400/60 text-cyan-400',
  teal: 'border-teal-500/30 hover:border-teal-400/60 text-teal-400',
  purple: 'border-purple-500/30 hover:border-purple-400/60 text-purple-400',
  emerald: 'border-emerald-500/30 hover:border-emerald-400/60 text-emerald-400',
  green: 'border-green-500/30 hover:border-green-400/60 text-green-400',
  blue: 'border-blue-500/30 hover:border-blue-400/60 text-blue-400',
}

const CategoriesSection = () => {
  const containerRef = useRef(null)
  const [active, setActive] = useState(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [active])

  return (
    <section id="categories" ref={containerRef} className="bg-[#050810] py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-cyan-400 text-xs font-mono tracking-widest uppercase mb-4">Browse by Category</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Worlds Within Worlds</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Explore our curated collections spanning every domain of the microscopic universe.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className={`group bg-slate-900/60 border rounded-2xl overflow-hidden transition-all duration-300 cursor-pointer hover:shadow-xl hover:-translate-y-1 ${colorMap[cat.color]}`}
              onClick={() => setActive(active === cat.id ? null : cat.id)}
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  alt={cat.name}
                  data-strk-img-id={cat.imgId}
                  data-strk-img={`[${cat.descId}] [${cat.titleId}]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
                <div className={`absolute top-3 right-3 text-xs font-mono px-2 py-1 rounded-full bg-black/50 border ${colorMap[cat.color].split(' ')[0]}`}>
                  <span className={colorMap[cat.color].split(' ')[2]}>{cat.count}</span>
                </div>
              </div>
              <div className="p-5">
                <h3 id={cat.titleId} className="text-white font-semibold text-lg mb-2">{cat.name}</h3>
                <p id={cat.descId} className="text-slate-400 text-sm leading-relaxed">{cat.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CategoriesSection
