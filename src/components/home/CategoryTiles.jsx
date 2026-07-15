import React from 'react'
import { Link } from 'react-router-dom'
import { categories } from '@/data/products'

export default function CategoryTiles() {
  return (
    <section className="py-16 md:py-24 bg-cream-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="section-heading">Shop by Category</h2>
          <p className="section-subheading">Find your perfect piece</p>
        </div>

        {/* Tiles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/shop?category=${category.id}`}
              className="group relative aspect-[4/5] overflow-hidden"
            >
              {/* Image */}
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent transition-colors duration-300 group-hover:from-black/60" />

              {/* Label */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <h3 className="font-serif text-2xl md:text-3xl text-cream-50 mb-1 tracking-wide">
                  {category.name}
                </h3>
                <p className="font-sans text-xs text-cream-200/60 uppercase tracking-wider">
                  {category.description}
                </p>
                <div className="mt-3 overflow-hidden">
                  <span className="inline-block font-sans text-[10px] uppercase tracking-ultra-wide text-gold-300 border-b border-gold-300/50 pb-0.5 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
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
