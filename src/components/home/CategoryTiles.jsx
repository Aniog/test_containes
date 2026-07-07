import React from 'react'
import { Link } from 'react-router-dom'
import { categories } from '../../data/products'

function CategoryTile({ category }) {
  return (
    <Link
      to={`/shop?category=${category.slug}`}
      className="group relative aspect-[4/5] overflow-hidden bg-ivory block"
    >
      <img
        src={category.image}
        alt={category.name}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/35 transition-colors duration-300" />
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="font-serif text-2xl md:text-3xl text-white font-semibold tracking-wider opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
          {category.name}
        </span>
      </div>
    </Link>
  )
}

export default function CategoryTiles() {
  return (
    <section className="py-16 md:py-20 border-t border-warm-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="font-serif text-2xl md:text-3xl text-[#1a1a1a] font-semibold">
            Shop by Category
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat) => (
            <CategoryTile key={cat.slug} category={cat} />
          ))}
        </div>
      </div>
    </section>
  )
}