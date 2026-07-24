import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { categories } from '@/data/products'

const CategoryTile = ({ category }) => {
  return (
    <Link
      to={`/shop?category=${category.id}`}
      className="group relative aspect-[3/4] md:aspect-[4/3] overflow-hidden block"
    >
      <img
        alt={category.name}
        data-strk-img-id={category.imgId}
        data-strk-img={`[${category.descId}] [${category.titleId}] gold jewelry collection`}
        data-strk-img-ratio="3x4"
        data-strk-img-width="800"
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-warm-black/30 group-hover:bg-warm-black/50 transition-colors duration-300" />
      {/* Label */}
      <div className="absolute inset-0 flex items-center justify-center">
        <h3
          id={category.titleId}
          className="font-serif text-xl md:text-2xl tracking-product uppercase text-cream"
        >
          {category.name}
        </h3>
        <p
          id={category.descId}
          className="hidden"
        >
          {category.name} collection of fine gold jewelry
        </p>
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
    <section ref={containerRef} className="py-16 md:py-24 bg-warm-white">
      <div className="max-w-content mx-auto px-6 md:px-8">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="font-serif text-2xl md:text-3xl tracking-heading uppercase text-warm-black">
            Shop by Category
          </h2>
          <div className="mt-3 w-12 h-px bg-gold mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map(cat => (
            <CategoryTile key={cat.id} category={cat} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ShopByCategory
