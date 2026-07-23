import React from 'react'
import { Link } from 'react-router-dom'
import { categories } from '@/data/products'

export default function ShopByCategory() {
  return (
    <section className="py-16 lg:py-24 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 lg:mb-14">
          <p className="text-caption tracking-ultra-wide uppercase text-gold mb-2 font-sans">
            Explore
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-surface-900">
            Shop by Category
          </h2>
        </div>

        {/* Category tiles */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          {categories.map((cat, i) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative aspect-[4/5] sm:aspect-[3/4] rounded-xl overflow-hidden"
            >
              <img
                data-strk-img-id={`category-${cat.id}`}
                data-strk-img={`[${cat.id}-desc] [${cat.id}-title] shop by category jewelry`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={cat.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-surface-950/30 group-hover:bg-surface-950/50 transition-colors duration-300" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
                <h3
                  id={`${cat.id}-title`}
                  className="font-serif text-3xl sm:text-4xl text-ivory mb-2 drop-shadow-lg"
                >
                  {cat.name}
                </h3>
                <p
                  id={`${cat.id}-desc`}
                  className="text-body-sm text-ivory/80 tracking-wide"
                >
                  {cat.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
