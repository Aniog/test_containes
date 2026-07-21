import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { categories } from '@/data/products'

const CategoryTile = ({ category }) => {
  const [hovered, setHovered] = useState(false)

  return (
    <Link
      to={`/shop?category=${category.id}`}
      className="relative aspect-[3x4] md:aspect-[4x5] overflow-hidden group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img
        data-strk-img-id={category.imgId}
        data-strk-img={`[cat-title-${category.id}] gold jewelry`}
        data-strk-img-ratio="3x4"
        data-strk-img-width="600"
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        alt={category.name}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className={`absolute inset-0 bg-base/30 transition-opacity duration-300 ${hovered ? 'opacity-100' : 'opacity-0'}`} />
      <div className="absolute inset-0 flex items-center justify-center">
        <span
          id={`cat-title-${category.id}`}
          className={`font-serif text-2xl md:text-3xl font-medium tracking-product uppercase text-cream transition-all duration-300 ${
            hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          {category.name}
        </span>
      </div>
      {/* Always-visible label on mobile */}
      <div className="absolute bottom-4 left-4 md:hidden">
        <span className="font-serif text-lg font-medium tracking-product uppercase text-cream">
          {category.name}
        </span>
      </div>
    </Link>
  )
}

const ShopByCategory = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-16 md:py-24 lg:py-28">
      <div className="max-w-content mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-sans text-xs font-semibold tracking-section uppercase text-muted mb-3">
            Explore
          </h2>
          <p className="font-serif text-3xl md:text-4xl font-medium text-base">Shop by Category</p>
        </div>

        <div className="grid grid-cols-3 gap-3 md:gap-6">
          {categories.map((category) => (
            <CategoryTile key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ShopByCategory
