import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const categoryTiles = [
  { id: 'earrings', name: 'Earrings', query: 'gold earrings collection display luxury jewelry', ratio: '3x4' },
  { id: 'necklaces', name: 'Necklaces', query: 'gold necklace collection pendant chain luxury jewelry', ratio: '3x4' },
  { id: 'huggies', name: 'Huggies', query: 'gold huggie hoop earrings collection luxury jewelry', ratio: '3x4' },
]

export default function CategoryTiles() {
  const containerRef = useRef(null)

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current)
    }
  }, [])

  return (
    <section ref={containerRef} className="py-16 sm:py-24">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="text-center mb-10 sm:mb-14">
          <p className="text-[11px] font-medium tracking-widest-2xl uppercase text-gold-dark mb-3">
            Explore
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-stone-900">
            Shop by Category
          </h2>
          <div className="w-12 h-px bg-gold mx-auto mt-5" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          {categoryTiles.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative aspect-[3/4] sm:aspect-[4/5] rounded-sm overflow-hidden"
            >
              <img
                data-strk-img-id={`category-tile-${cat.id}`}
                data-strk-img={`[category-label-${cat.id}] ${cat.query} demi-fine`}
                data-strk-img-ratio={cat.ratio}
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={cat.name}
                className="absolute inset-0 w-full h-full object-cover bg-stone-200 transition-transform duration-700 group-hover:scale-105"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/35 transition-colors duration-500" />
              {/* Label */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span id={`category-label-${cat.id}`} className="font-serif text-2xl sm:text-3xl text-white tracking-wide">
                  {cat.name}
                </span>
                <span className="mt-2 text-[11px] font-medium tracking-widest-xl uppercase text-white/80 group-hover:text-white transition-colors">
                  Shop Now →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
