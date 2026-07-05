import React from 'react'
import { Link } from 'react-router-dom'
import { categories } from '@/data/products'

export default function Categories() {
  return (
    <section className="py-16 md:py-24 bg-brand-bg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-brand-gold mb-2">Explore</p>
          <h2 className="section-title">Shop by Category</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/shop?category=${category.id}`}
              className="group relative aspect-[4/5] md:aspect-[3/4] overflow-hidden rounded-2xl"
            >
              <img
                src={category.image}
                alt={category.name}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-serif text-2xl md:text-3xl text-white tracking-widest">{category.name}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}