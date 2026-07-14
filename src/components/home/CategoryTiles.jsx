import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { categories } from '@/data/products'

export default function CategoryTiles() {
  const containerRef = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <section className="py-20 md:py-28 bg-parchment">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        <div className="text-center mb-12">
          <p className="font-sans text-xs tracking-widest uppercase text-gold font-medium mb-2">Browse</p>
          <h2 id="categories-title" className="font-serif text-4xl md:text-5xl font-light text-ink">Shop by Category</h2>
        </div>

        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative overflow-hidden aspect-[3/4] md:aspect-[2/3] bg-cream block"
            >
              {/* Image */}
              <img
                data-strk-img-id={cat.imgId}
                data-strk-img={`[${cat.descId}] [${cat.titleId}] [categories-title]`}
                data-strk-img-ratio="2x3"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={cat.label}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian/70 via-obsidian/20 to-transparent transition-opacity duration-400 group-hover:from-obsidian/80" />

              {/* Label */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <h3
                  id={cat.titleId}
                  className="font-serif text-2xl md:text-3xl font-light text-ivory uppercase tracking-widest"
                >
                  {cat.label}
                </h3>
                <p id={cat.descId} className="font-sans text-xs text-ivory-muted mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                  {cat.description}
                </p>
                <div className="mt-3 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                  <span className="font-sans text-xs tracking-widest uppercase text-gold font-medium">Shop Now</span>
                  <span className="w-6 h-px bg-gold" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
