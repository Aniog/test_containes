import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { categories } from '@/data/products'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function ShopByCategory() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-20 md:py-28 bg-velmora-light">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="font-serif text-3xl md:text-4xl text-velmora-dark tracking-wide">Shop by Category</h2>
          <div className="mt-3 w-12 h-px bg-velmora-gold mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map(cat => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.slug}`}
              className="group relative aspect-[4x3] overflow-hidden bg-velmora-cream"
            >
              <img
                data-strk-img-id={cat.imgId}
                data-strk-img={`[${cat.titleId}]`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={cat.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-velmora-dark/0 group-hover:bg-velmora-dark/40 transition-colors duration-300 flex items-center justify-center">
                <span
                  id={cat.titleId}
                  className="font-serif text-xl md:text-2xl tracking-[0.15em] uppercase text-velmora-light opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  {cat.name}
                </span>
              </div>
              {/* Always-visible label on mobile */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-velmora-dark/60 to-transparent p-4 md:hidden">
                <span className="font-serif text-base tracking-[0.1em] uppercase text-velmora-light">{cat.name}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
