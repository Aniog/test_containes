import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { categories } from '@/data/products'

const CategoryTiles = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-8xl mx-auto px-4 md:px-8">
        <h2 className="text-center font-serif text-2xl md:text-3xl tracking-ultra-wide uppercase text-base font-light mb-10 md:mb-14">
          Shop by Category
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat) => (
            <CategoryTile key={cat.id} category={cat} />
          ))}
        </div>
      </div>
    </section>
  )
}

const CategoryTile = ({ category }) => {
  const [hovered, setHovered] = useState(false)

  return (
    <Link
      to={`/shop?category=${category.id}`}
      className="relative aspect-[4/3] overflow-hidden group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img
        alt={category.name}
        data-strk-img-id={`cat-${category.id}-img`}
        data-strk-img={`[cat-${category.id}-name] gold jewelry`}
        data-strk-img-ratio="4x3"
        data-strk-img-width="800"
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 ${hovered ? 'scale-105' : 'scale-100'}`}
      />
      <div className={`absolute inset-0 bg-base/30 transition-all duration-500 ${hovered ? 'bg-base/50' : ''}`} />
      <div className="absolute inset-0 flex items-center justify-center">
        <h3
          id={`cat-${category.id}-name`}
          className={`font-serif text-2xl md:text-3xl tracking-ultra-wide uppercase text-cream transition-all duration-500 ${hovered ? 'tracking-[0.3em]' : ''}`}
        >
          {category.name}
        </h3>
      </div>
    </Link>
  )
}

export default CategoryTiles
