import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { categoryTiles } from '@/data/products'

export default function CategoryTiles() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-24">
      <div className="text-center mb-12">
        <h2 className="font-serif text-3xl lg:text-4xl text-charcoal tracking-wide">Shop by Category</h2>
        <div className="mt-4 mx-auto w-12 h-px bg-gold" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
        {categoryTiles.map((tile) => (
          <Link
            key={tile.id}
            to={`/shop?category=${tile.label}`}
            className="group relative aspect-[4/5] rounded-sm overflow-hidden bg-sand"
          >
            <img
              data-strk-img-id={`cat-tile-${tile.id}`}
              data-strk-img={`[cat-label-${tile.id}]`}
              data-strk-img-ratio="4x5"
              data-strk-img-width="600"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'/%3E"
              alt={tile.label}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-espresso/20 group-hover:bg-espresso/35 transition-colors duration-500" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span
                id={`cat-label-${tile.id}`}
                className="font-serif text-2xl lg:text-3xl tracking-[0.15em] text-cream opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:translate-y-0 translate-y-2"
              >
                {tile.label}
              </span>
            </div>
            {/* Always visible small label */}
            <span className="absolute bottom-6 left-6 font-serif text-lg tracking-[0.15em] text-cream group-hover:opacity-0 transition-opacity duration-300">
              {tile.label}
            </span>
          </Link>
        ))}
      </div>
    </section>
  )
}
