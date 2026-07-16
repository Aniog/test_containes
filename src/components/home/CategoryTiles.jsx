import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { categories } from '@/lib/data'

const CategoryTiles = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-16 md:py-24">
      <div className="max-w-container mx-auto px-4 md:px-8">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="font-serif text-3xl md:text-4xl text-warm-cream tracking-wide">Shop by Category</h2>
          <div className="w-12 h-px bg-gold mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative aspect-[4x5] overflow-hidden bg-warm-charcoal"
            >
              <img
                data-strk-img-id={cat.imgId}
                data-strk-img={`[${cat.titleId}]`}
                data-strk-img-ratio={cat.ratio}
                data-strk-img-width={cat.width}
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={cat.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-warm-black/30 group-hover:bg-warm-black/50 transition-all duration-500" />
              {/* Label */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span
                  id={cat.titleId}
                  className="font-serif text-2xl md:text-3xl text-warm-cream tracking-wider uppercase"
                >
                  {cat.name}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CategoryTiles
