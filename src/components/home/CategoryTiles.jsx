import React from 'react'
import { Link } from 'react-router-dom'
import { categories } from '@/data/products'
import { StockBackground } from '@/components/shared/StockImage'

export default function CategoryTiles() {
  return (
    <section className="py-20 sm:py-28 bg-cream-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="section-label mb-3">Explore</p>
          <h2 className="font-serif text-4xl text-espresso-900 sm:text-5xl">Shop by Category</h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative aspect-[3/4] overflow-hidden bg-cream-200"
            >
              <StockBackground
                query={cat.query}
                ratio="3x4"
                width={800}
                bgId={`category-tile-${cat.id}`}
                className="absolute inset-0 h-full w-full transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-espresso-900/20 transition-colors duration-300 group-hover:bg-espresso-900/30" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <span className="border border-white/80 px-6 py-3 text-sm font-medium uppercase tracking-[0.2em] text-white backdrop-blur-sm">
                    {cat.label}
                  </span>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-5 text-center sm:hidden">
                <span className="text-lg font-serif text-white">{cat.label}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
