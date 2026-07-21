import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { categories } from '@/data/products'
import { useScrollReveal } from '@/hooks/useScrollReveal'

const CategoryTile = ({ category }) => {
  const [hovered, setHovered] = useState(false)

  return (
    <Link
      to={`/shop?category=${category.id}`}
      className="relative aspect-[4x5] overflow-hidden group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img
        data-strk-img-id={category.imageId}
        data-strk-img={`[cat-${category.id}-name] [shop-categories-title]`}
        data-strk-img-ratio="4x5"
        data-strk-img-width="600"
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        alt={category.name}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
      />
      <div className="absolute inset-0 bg-charcoal/20 group-hover:bg-charcoal/40 transition-colors duration-300" />
      <div className="absolute inset-0 flex items-center justify-center">
        <span
          id={`cat-${category.id}-name`}
          className={`font-serif text-xl md:text-2xl tracking-product text-cream transition-all duration-300 ${
            hovered ? 'tracking-[0.25em]' : ''
          }`}
        >
          {category.name}
        </span>
      </div>
    </Link>
  )
}

const ShopCategories = () => {
  const containerRef = useRef(null)
  const [revealRef, revealed] = useScrollReveal()

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={revealRef} className={`py-16 md:py-24 transition-all duration-700 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
      <div ref={containerRef} className="max-w-content mx-auto px-4 md:px-8">
        <div className="text-center mb-10 md:mb-14">
          <h2
            id="shop-categories-title"
            className="font-serif text-3xl md:text-4xl tracking-wide text-charcoal"
          >
            Shop by Category
          </h2>
          <div className="w-12 h-px bg-gold mx-auto mt-4" />
        </div>

        {/* Mobile: horizontal scroll, Desktop: 3-column grid */}
        <div className="flex gap-4 overflow-x-auto scrollbar-hide md:overflow-visible md:grid md:grid-cols-3 md:gap-6 -mx-4 px-4 md:mx-0 md:px-0">
          {categories.map(category => (
            <div key={category.id} className="w-64 flex-shrink-0 md:w-auto">
              <CategoryTile category={category} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ShopCategories
