import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const categories = [
  {
    id: 'earrings',
    name: 'Earrings',
    ratio: '3x4',
  },
  {
    id: 'necklaces',
    name: 'Necklaces',
    ratio: '3x4',
  },
  {
    id: 'huggies',
    name: 'Huggies',
    ratio: '3x4',
  },
]

export default function CategoryTiles() {
  const containerRef = useRef(null)

  useEffect(() => {
    if (!containerRef.current) return
    const frameId = requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => {
      cancelAnimationFrame(frameId)
      ImageHelper.disconnect(containerRef.current)
    }
  }, [])

  return (
    <section ref={containerRef} className="py-20 md:py-28 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-14">
          <p className="text-gold text-xs font-medium tracking-widest uppercase mb-3">
            Explore
          </p>
          <h2 id="category-section-title" className="font-serif text-3xl sm:text-4xl md:text-5xl text-stone-900 font-light">
            Shop by Category
          </h2>
          <div className="w-16 h-[1px] bg-gold mx-auto mt-6" />
        </div>

        {/* Category grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/shop?category=${category.id}`}
              className="group relative aspect-[3/4] overflow-hidden bg-stone-200"
            >
              <img
                data-strk-img-id={`category-tile-${category.id}`}
                data-strk-img={`[category-name-${category.id}] [category-section-title] jewelry collection editorial`}
                data-strk-img-ratio={category.ratio}
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-stone-900/30 group-hover:bg-stone-900/50 transition-colors duration-500" />

              {/* Label */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <h3
                    id={`category-name-${category.id}`}
                    className="font-serif text-2xl md:text-3xl text-white font-light tracking-wide"
                  >
                    {category.name}
                  </h3>
                  <span className="inline-block mt-2 text-xs text-white/80 tracking-widest uppercase opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    Explore
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
