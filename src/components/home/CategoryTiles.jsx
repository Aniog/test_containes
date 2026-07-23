import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { categories } from '@/data/products'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function CategoryTiles() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-warm-cream border-t border-warm-sand">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 id="categories-title" className="font-serif text-2xl md:text-3xl uppercase tracking-wider text-warm-black text-center mb-10 md:mb-14">
          Shop by Category
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map(cat => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative aspect-[4x3] bg-warm-ivory overflow-hidden"
            >
              <img
                data-strk-img-id={cat.imgId}
                data-strk-img={`[${cat.titleId}] [categories-title]`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={cat.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Overlay with label */}
              <div className="absolute inset-0 bg-warm-black/30 group-hover:bg-warm-black/50 transition-colors duration-300 flex items-center justify-center">
                <h3 id={cat.titleId} className="font-serif text-xl md:text-2xl uppercase tracking-widest text-warm-cream">{cat.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
