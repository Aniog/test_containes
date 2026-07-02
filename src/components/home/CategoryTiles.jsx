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
    <section className="py-20 md:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-14">
          <p className="font-manrope text-xs uppercase tracking-[0.2em] text-gold mb-3">Explore</p>
          <h2 className="font-cormorant text-4xl md:text-5xl font-light text-obsidian">Shop by Category</h2>
          <div className="w-12 h-px bg-gold mx-auto mt-5" />
        </div>

        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map(cat => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative overflow-hidden aspect-[3/4] md:aspect-[2/3] block"
            >
              <img
                data-strk-img-id={cat.imgId}
                data-strk-img={`[${cat.descId}] [${cat.titleId}] gold jewelry`}
                data-strk-img-ratio="2x3"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={cat.label}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-obsidian/20 group-hover:bg-obsidian/40 transition-colors duration-400" />
              {/* Label */}
              <div className="absolute inset-0 flex flex-col items-center justify-end pb-8 px-6">
                <div className="text-center transform group-hover:-translate-y-2 transition-transform duration-400">
                  <h3 id={cat.titleId} className="font-cormorant text-3xl font-light text-cream uppercase tracking-[0.15em]">
                    {cat.label}
                  </h3>
                  <p id={cat.descId} className="font-manrope text-xs text-cream/80 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                    {cat.description}
                  </p>
                  <div className="w-8 h-px bg-gold mx-auto mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
