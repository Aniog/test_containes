import React from 'react'
import { Link } from 'react-router-dom'
import { categories } from '@/data/products'

export default function CategoryTiles() {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-28">
      <div className="text-center mb-14">
        <h2 className="font-serif text-3xl lg:text-4xl font-light tracking-wide text-charcoal">
          Shop by Category
        </h2>
        <div className="w-10 h-px bg-gold/40 mx-auto mt-4" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
        {categories.map((cat) => (
          <Link
            key={cat.id}
            to={`/shop?category=${cat.slug}`}
            className="group relative aspect-[4/5] bg-stone overflow-hidden rounded-sm"
          >
            <div
              className="w-full h-full transition-transform duration-600 group-hover:scale-105"
              data-strk-img={`[cat-label-${cat.id}] velmora jewelry`}
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              data-strk-img-id={cat.imgId}
            />
            <div className="absolute inset-0 bg-charcoal/20 group-hover:bg-charcoal/35 transition-colors duration-300" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span
                className="font-serif text-2xl lg:text-3xl text-white tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                id={`cat-label-${cat.id}`}
              >
                {cat.name}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}