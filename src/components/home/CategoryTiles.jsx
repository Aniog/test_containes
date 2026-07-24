import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { categories } from '@/data/products'

export default function CategoryTiles() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section className="py-20 md:py-28 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-14">
          <p className="font-sans text-xs tracking-widest uppercase text-champagne mb-3">
            Browse
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-ink tracking-wide">
            Shop by Category
          </h2>
          <div className="w-12 h-px bg-champagne mx-auto mt-5" />
        </div>

        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map(cat => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative overflow-hidden aspect-[3/4] md:aspect-[2/3] bg-ivory-dark"
            >
              <img
                data-strk-img-id={cat.imgId}
                data-strk-img={`[${cat.descId}] [${cat.titleId}] gold jewelry editorial`}
                data-strk-img-ratio="2x3"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={cat.label}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 via-obsidian/20 to-transparent transition-opacity duration-300 group-hover:opacity-90" />

              {/* Label */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <p id={cat.descId} className="sr-only">{cat.description}</p>
                <h3
                  id={cat.titleId}
                  className="font-serif text-2xl md:text-3xl font-light text-ivory tracking-wide mb-1"
                >
                  {cat.label}
                </h3>
                <p className="font-sans text-xs text-ivory/60 tracking-widest uppercase">
                  {cat.description}
                </p>
                <div className="mt-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0 transition-transform">
                  <span className="font-sans text-xs tracking-widest uppercase text-champagne">
                    Shop Now
                  </span>
                  <div className="w-6 h-px bg-champagne" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
