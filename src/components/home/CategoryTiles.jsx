import React from 'react'
import { Link } from 'react-router-dom'
import { categories } from '../../data/products'

export default function CategoryTiles() {
  return (
    <section className="velmora-section">
      <div className="velmora-container mx-auto">
        <div className="text-center mb-12">
          <p className="velmora-body-xs text-[var(--velmora-text-light)] tracking-[0.2em] mb-3">
            Browse by
          </p>
          <h2 className="velmora-heading velmora-heading-md">Shop by Category</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/shop?category=${category.id}`}
              className="group relative aspect-[4/5] overflow-hidden bg-[var(--velmora-bg-alt)]"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <h3 className="velmora-product-name text-xl md:text-2xl tracking-[0.2em] mb-2">
                    {category.name}
                  </h3>
                  <span className="velmora-body-xs tracking-[0.15em] opacity-0 group-hover:opacity-100 transition-opacity duration-300 border-b border-white pb-1">
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
