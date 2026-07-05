import React from 'react'
import { Link } from 'react-router-dom'
import { categories } from '@/data/products'

export default function CategoryTiles() {
  return (
    <section className="velmora-section bg-[var(--velmora-cream)]">
      <div className="velmora-container">
        <div className="text-center mb-12">
          <span className="velmora-label text-[var(--velmora-accent)]">Browse</span>
          <h2 className="velmora-heading-md text-[var(--velmora-text)] mt-2">Shop by Category</h2>
          <div className="velmora-divider-thin w-16 mx-auto mt-4" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/shop?category=${category.id}`}
              className="group relative aspect-[4/3] overflow-hidden rounded-sm"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="velmora-heading-md text-white tracking-[0.15em] group-hover:scale-105 transition-transform duration-300">
                  {category.name}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
