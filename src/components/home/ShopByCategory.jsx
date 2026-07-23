import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { categories } from '@/data/products'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const CategoryTile = ({ category }) => {
  return (
    <Link
      to={`/shop?category=${category.id}`}
      className="group relative aspect-[4/3] md:aspect-[3/2] overflow-hidden rounded-sm block"
    >
      <img
        data-strk-img-id={category.imgId}
        data-strk-img={`[${category.descId}] [${category.titleId}] gold jewelry`}
        data-strk-img-ratio="3x2"
        data-strk-img-width="800"
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        alt={category.name}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-deepCharcoal/30 group-hover:bg-deepCharcoal/50 transition-all duration-300" />
      {/* Label */}
      <div className="absolute inset-0 flex items-center justify-center">
        <h3 id={category.titleId} className="font-serif text-2xl md:text-3xl tracking-[0.2em] uppercase font-medium text-textLight">
          {category.name}
        </h3>
      </div>
      <p id={category.descId} className="sr-only">{category.name} jewelry collection</p>
    </Link>
  )
}

const ShopByCategory = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-warmCream border-t border-divider">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-textDark">
            Shop by Category
          </h2>
          <p className="font-sans text-sm text-textMuted mt-3">Find your next favorite piece.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {categories.map(category => (
            <CategoryTile key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ShopByCategory
