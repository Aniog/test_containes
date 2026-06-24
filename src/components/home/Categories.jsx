import React from 'react'
import { Link } from 'react-router-dom'
import { categories } from '@/lib/data'

const Categories = () => {
  return (
    <section className="section-padding py-16 md:py-24">
      <div className="text-center mb-12">
        <h2 className="font-serif text-3xl md:text-4xl text-brand-charcoal tracking-wide">Shop by Category</h2>
        <div className="w-12 h-px bg-brand-gold mx-auto mt-4" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {categories.map(cat => (
          <Link
            key={cat.id}
            to={`/shop?category=${cat.id}`}
            className="group relative aspect-[3/4] md:aspect-[2/3] overflow-hidden rounded-sm"
          >
            <img
              src={cat.image}
              alt={cat.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/35 transition-colors duration-500" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-serif text-2xl md:text-3xl text-white tracking-wide">
                {cat.name}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default Categories
