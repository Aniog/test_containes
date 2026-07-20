import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { categories } from '@/data/products'

export default function ShopByCategory() {
  const containerRef = useRef(null)

  useEffect(() => {
    const raf = requestAnimationFrame(() => {
      if (containerRef.current) {
        ImageHelper.loadImages(strkImgConfig, containerRef.current)
      }
    })
    return () => cancelAnimationFrame(raf)
  }, [])

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-stone-50">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-16 xl:px-24">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="font-sans text-xs tracking-super-wide uppercase text-gold-500 mb-3">
            Browse
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-charcoal-800">
            Shop by Category
          </h2>
          <div className="w-12 h-px bg-gold-500 mx-auto mt-5" />
        </div>

        {/* Category tiles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat, i) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative block animate-fade-in"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="relative aspect-[4/5] md:aspect-[3/4] overflow-hidden bg-stone-200">
                <img
                  data-strk-img-id={`category-${cat.id}`}
                  data-strk-img={`[category-name-${cat.id}] [category-desc-${cat.id}] gold jewelry elegant dark background`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                  alt={cat.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-charcoal-900/30 group-hover:bg-charcoal-900/50 transition-all duration-500" />

                {/* Label */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                  <h3
                    id={`category-name-${cat.id}`}
                    className="font-serif text-2xl md:text-3xl text-cream-50 mb-2 tracking-wide"
                  >
                    {cat.name}
                  </h3>
                  <p
                    id={`category-desc-${cat.id}`}
                    className="font-sans text-xs tracking-widest uppercase text-cream-200 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  >
                    {cat.description}
                  </p>
                  <div className="w-8 h-px bg-gold-400 mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
