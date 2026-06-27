import React from 'react'
import { Link } from 'react-router-dom'
import { categories } from '@/data/products'

export default function CategoryTiles() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-gold text-xs uppercase tracking-[0.2em] font-medium mb-3">Shop by Category</p>
          <h2 className="text-3xl md:text-4xl font-serif font-medium">Find Your Piece</h2>
          <div className="w-12 h-0.5 bg-gold mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              to={`/shop?category=${cat.slug}`}
              className="group relative aspect-[4/5] md:aspect-[3/4] overflow-hidden rounded-sm"
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center transform transition-transform duration-300 group-hover:scale-105">
                  <h3 className="text-white text-xl md:text-2xl font-serif font-medium tracking-wide">
                    {cat.name}
                  </h3>
                  <div className="w-8 h-px bg-gold mx-auto mt-3 mb-2" />
                  <span className="text-white/70 text-xs uppercase tracking-[0.15em] font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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