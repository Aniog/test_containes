import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { categories } from '../../data/products'

export default function CategoryTiles() {
  const [hoveredId, setHoveredId] = useState(null)

  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <p className="text-[10px] sm:text-xs tracking-[0.3em] uppercase text-[var(--velmora-text-muted)] mb-2 sm:mb-3">
            Explore
          </p>
          <h2 className="serif-heading text-2xl sm:text-3xl md:text-4xl text-[var(--velmora-text)]">
            Shop by Category
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          {categories.map(category => (
            <Link
              key={category.id}
              to={`/shop?category=${category.id}`}
              className="relative aspect-[4/5] overflow-hidden group min-h-[280px] sm:min-h-[320px]"
              onMouseEnter={() => setHoveredId(category.id)}
              onMouseLeave={() => setHoveredId(null)}
              aria-label={`Shop ${category.name}`}
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className={`absolute inset-0 bg-black/30 transition-opacity duration-300 ${
                hoveredId === category.id ? 'opacity-60' : 'opacity-40'
              }`} />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center px-4">
                  <h3 className="product-name text-white text-lg sm:text-xl md:text-2xl tracking-widest mb-2">
                    {category.name}
                  </h3>
                  <span className={`text-xs tracking-widest uppercase text-white transition-all duration-300 ${
                    hoveredId === category.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                  }`}>
                    Shop Now
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
