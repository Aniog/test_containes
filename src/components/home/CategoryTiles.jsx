import React from 'react'
import { Link } from 'react-router-dom'
import { categories } from '@/data/products'

export default function CategoryTiles() {
  return (
    <section className="py-20 md:py-28 bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-xs font-medium tracking-ultra-wide text-gold mb-3 block">
            BROWSE BY CATEGORY
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-espresso-800">
            Find Your Style
          </h2>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((category, index) => (
            <Link
              key={category.id}
              to={`/shop?category=${category.id}`}
              className="group relative aspect-[4/5] rounded-lg overflow-hidden animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Background Image */}
              <img
                src={category.image}
                alt={category.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-espresso-900/30 group-hover:bg-espresso-900/50 transition-colors duration-300" />
              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                <h3 className="font-serif text-2xl md:text-3xl text-cream-50 mb-2 transform transition-transform duration-300 group-hover:-translate-y-2">
                  {category.name}
                </h3>
                <p className="text-sm text-cream-100/80 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  {category.description}
                </p>
                <span className="mt-4 px-6 py-2 border border-cream-50 text-cream-50 text-xs tracking-wide opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-100">
                  SHOP NOW
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
