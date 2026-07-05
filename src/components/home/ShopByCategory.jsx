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
      className="relative aspect-[3/4] md:aspect-[2/3] overflow-hidden rounded group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img
        data-strk-img-id={category.imgId}
        data-strk-img={`[${category.titleId}] gold jewelry`}
        data-strk-img-ratio="2x3"
        data-strk-img-width="600"
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        alt={category.name}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
      <div className="absolute inset-0 flex items-center justify-center">
        <h3
          id={category.titleId}
          className={`font-serif text-xl md:text-2xl tracking-product uppercase text-white transition-all duration-300 ${
            hovered ? 'tracking-[0.25em]' : ''
          }`}
        >
          {category.name}
        </h3>
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
    <section ref={containerRef} className="py-16 md:py-24">
      <div className="max-w-content mx-auto px-5 md:px-8">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="font-serif text-2xl md:text-3xl tracking-wide text-warm-900">
            Shop by Category
          </h2>
          <div className="w-12 h-px bg-gold mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-3 gap-3 md:gap-6">
          {categories.map(category => (
            <CategoryTile key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ShopByCategory
