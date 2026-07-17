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
    <section className="py-20 lg:py-28 bg-ivory">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="font-sans text-xs tracking-widest3 uppercase text-gold mb-3">Explore</p>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-velvet">Shop by Category</h2>
        </div>

        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
          {categories.map(cat => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative overflow-hidden aspect-[3/4] md:aspect-[2/3] block bg-cream"
            >
              {/* Image */}
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                data-strk-img-id={cat.imgId}
                data-strk-img={`[${cat.titleId}] gold jewelry`}
                data-strk-img-ratio="2x3"
                data-strk-img-width="600"
                alt={cat.label}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-velvet/20 group-hover:bg-velvet/40 transition-colors duration-400" />

              {/* Label */}
              <div className="absolute inset-0 flex flex-col items-center justify-end pb-10">
                <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <h3
                    id={cat.titleId}
                    className="font-serif text-2xl md:text-3xl font-light text-ivory uppercase tracking-widest2 text-center"
                  >
                    {cat.label}
                  </h3>
                  <div className="flex justify-center mt-3">
                    <span className="font-sans text-[11px] tracking-widest uppercase text-champagne/0 group-hover:text-champagne/90 transition-colors duration-300 border-b border-champagne/0 group-hover:border-champagne/60 pb-0.5">
                      Shop Now
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
