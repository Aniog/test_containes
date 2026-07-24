import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { categories } from '@/data/products'

export default function CategoryTiles() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-3xl md:text-4xl tracking-wide-15 uppercase text-warm-black">
            Shop by Category
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map(cat => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative aspect-[4/3] md:aspect-[3/2] overflow-hidden"
            >
              <img
                data-strk-img-id={cat.imgId}
                data-strk-img={`[${cat.descId}] [${cat.titleId}]`}
                data-strk-img-ratio="3x2"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={cat.name}
                className="w-full h-full object-cover group-hover:scale-[1.05] transition-transform duration-500"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-warm-black/30 group-hover:bg-warm-black/50 transition-colors duration-300" />
              {/* Label */}
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 id={cat.titleId} className="font-serif text-2xl md:text-3xl tracking-wide-20 uppercase text-warm-cream">
                  {cat.name}
                </h3>
                <p id={cat.descId} className="hidden">{cat.name} jewelry collection</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
