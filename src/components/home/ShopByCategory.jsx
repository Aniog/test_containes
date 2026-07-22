import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { categories } from '@/data/products'

export default function ShopByCategory() {
  const containerRef = useRef(null)

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current)
    }
  }, [])

  return (
    <section ref={containerRef} className="py-16 md:py-24 section-padding bg-cream">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-charcoal mb-3">
            Shop by Category
          </h2>
          <div className="w-12 h-px bg-gold mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat, index) => (
            <Link
              key={cat.id}
              to={`/collection?category=${cat.id}`}
              className="group relative overflow-hidden aspect-[4/5] block"
            >
              <img
                data-strk-img-id={`category-${cat.id}-${index}`}
                data-strk-img={`[${`category-label-${cat.id}`}] gold jewelry collection display editorial`}
                data-strk-img-ratio="4x5"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={cat.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Dark overlay */}
              <div className="absolute inset-0 bg-charcoal/30 group-hover:bg-charcoal/45 transition-colors duration-500" />

              {/* Label */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span
                  id={`category-label-${cat.id}`}
                  className="font-serif text-3xl md:text-4xl text-cream tracking-wide"
                >
                  {cat.name}
                </span>
                <span className="mt-2 text-xs font-sans uppercase tracking-[0.2em] text-cream/70 group-hover:text-gold transition-colors duration-300">
                  Explore
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
