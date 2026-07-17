import React from 'react'
import { Link } from 'react-router-dom'

export default function CategoryTiles({ categories }) {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="velmora-heading text-3xl sm:text-4xl lg:text-5xl">Shop by Category</h2>
          <div className="velmora-divider w-16 mx-auto mt-6" />
        </div>

        {/* Tiles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {categories.map(category => (
            <Link
              key={category.id}
              to={`/shop?category=${category.id}`}
              className="group relative aspect-[4/5] overflow-hidden cursor-pointer"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <h3 className="velmora-product-name text-white text-xl sm:text-2xl tracking-[0.2em] mb-3">
                    {category.name}
                  </h3>
                  <span className="text-white/80 text-xs tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300 border-b border-white/60 pb-0.5">
                    Explore
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
