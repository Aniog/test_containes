import React from 'react'
import { Link } from 'react-router-dom'
import { categories } from '../../data/products'

export default function CategoryTiles() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="text-center mb-12">
          <h2 className="section-title">Shop by Category</h2>
          <p className="text-sm text-velmora-500 mt-2">Find your perfect piece</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative aspect-[4/5] md:aspect-[3/4] overflow-hidden rounded-sm"
            >
              <img
                src={cat.image}
                alt={cat.label}
                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-velmora-900/0 group-hover:bg-velmora-900/20 transition-all duration-300" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="serif-heading text-2xl md:text-3xl text-white font-semibold tracking-[0.06em] opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  {cat.label}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}