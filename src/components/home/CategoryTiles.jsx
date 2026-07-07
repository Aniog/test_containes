import React from 'react'
import { Link } from 'react-router-dom'
import { categories } from '../../data/products'

const CategoryTiles = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl mb-3">Shop by Category</h2>
          <div className="hairline w-24 mx-auto" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map(category => (
            <Link
              key={category.id}
              to={`/shop?category=${category.id}`}
              className="group relative aspect-[4/5] overflow-hidden rounded-sm"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-velmora-base/30 group-hover:bg-velmora-base/50 transition-colors duration-500" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <h3 className="font-serif text-2xl md:text-3xl text-velmora-cream tracking-wide-luxury uppercase mb-2">
                    {category.name}
                  </h3>
                  <span className="font-sans text-xs tracking-wide-luxury uppercase text-velmora-cream/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 border-b border-velmora-gold pb-1">
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

export default CategoryTiles
