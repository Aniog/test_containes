import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { categories } from '@/data/products'
import { useScrollReveal } from '@/hooks/useScrollReveal'

const CategoryTiles = () => {
  const containerRef = useRef(null)
  const [revealRef, isVisible] = useScrollReveal(containerRef)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className={`text-center mb-12 reveal-hidden ${isVisible ? 'reveal-visible' : ''}`}>
          <h2 className="font-serif text-3xl md:text-4xl font-light tracking-wide text-warm-black">
            Shop by Category
          </h2>
          <div className="w-12 h-px bg-gold mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat, i) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.name}`}
              className={`group relative aspect-[4/5] overflow-hidden reveal-hidden ${isVisible ? 'reveal-visible' : ''} reveal-delay-${i + 1}`}
            >
              <img
                data-strk-img-id={`category-${cat.id}-g7h8i9`}
                data-strk-img={`[category-${cat.id}-label]`}
                data-strk-img-ratio="4x5"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={cat.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span
                  id={`category-${cat.id}-label`}
                  className="font-serif text-2xl md:text-3xl text-white tracking-[0.2em] uppercase"
                >
                  {cat.name}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CategoryTiles
