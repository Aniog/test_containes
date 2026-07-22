import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { categories } from '@/data/products'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { useScrollReveal } from '@/hooks/useScrollReveal'

const CategoryTiles = () => {
  const containerRef = useRef(null)
  const { ref: revealRef, revealed } = useScrollReveal(0.1)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-cream">
      <div ref={revealRef} className={`max-w-content mx-auto px-4 md:px-6 transition-all duration-1000 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="text-center mb-12">
          <h2 id="categories-title" className="font-serif text-3xl md:text-4xl text-charcoal tracking-wide">
            Shop by Category
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map(cat => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative aspect-[4/3] overflow-hidden bg-charcoal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 rounded-sm"
            >
              <img
                data-strk-img-id={cat.imgId}
                data-strk-img={`[${cat.descId}] [${cat.titleId}] [categories-title]`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={cat.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-charcoal/30 group-hover:bg-charcoal/50 transition-colors duration-300" />
              {/* Label */}
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 id={cat.titleId} className="font-serif text-2xl md:text-3xl text-white tracking-product uppercase">
                  {cat.name}
                </h3>
                <p id={cat.descId} className="hidden">Demi-fine {cat.name} in 18K gold</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CategoryTiles
