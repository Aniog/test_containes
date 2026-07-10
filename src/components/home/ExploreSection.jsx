import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const categories = [
  {
    id: 'cells',
    title: 'Living Cells',
    description: 'The fundamental building blocks of all life forms',
    imgId: 'cat-cells-a3f2b1',
    titleId: 'cat-cells-title',
    descId: 'cat-cells-desc',
  },
  {
    id: 'bacteria',
    title: 'Bacteria & Microbes',
    description: 'Invisible organisms that shape our entire world',
    imgId: 'cat-bacteria-d7e4c9',
    titleId: 'cat-bacteria-title',
    descId: 'cat-bacteria-desc',
  },
  {
    id: 'crystals',
    title: 'Micro Crystals',
    description: 'Stunning geometric patterns formed at molecular scale',
    imgId: 'cat-crystals-f1a8e2',
    titleId: 'cat-crystals-title',
    descId: 'cat-crystals-desc',
  },
  {
    id: 'insects',
    title: 'Insect Anatomy',
    description: 'Macro photography revealing alien-like structures',
    imgId: 'cat-insects-b5c3d7',
    titleId: 'cat-insects-title',
    descId: 'cat-insects-desc',
  },
]

const ExploreSection = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section id="explore" ref={containerRef} className="py-20 md:py-28 lg:py-32 bg-deep">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 id="explore-section-title" className="text-4xl md:text-5xl font-bold tracking-tight text-slate-100 mb-4">
            Explore the Micro World
          </h2>
          <p id="explore-section-subtitle" className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto">
            From living cells to crystalline structures, every microscopic view reveals a universe of wonder
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="group relative rounded-2xl overflow-hidden border border-slate-700/50 bg-slate-800/50 hover:border-cyan/30 transition-all duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  alt={cat.title}
                  data-strk-img-id={cat.imgId}
                  data-strk-img={`[${cat.descId}] [${cat.titleId}] [explore-section-subtitle] [explore-section-title]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-[1.05] transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 id={cat.titleId} className="text-xl font-semibold text-slate-100 mb-2">
                  {cat.title}
                </h3>
                <p id={cat.descId} className="text-slate-400">
                  {cat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ExploreSection
