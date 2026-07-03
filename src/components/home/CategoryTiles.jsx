import React from 'react'
import { Link } from 'react-router-dom'
import { categories } from '@/data/products'

export default function CategoryTiles() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="mb-8">
        <h2 className="font-serif text-2xl sm:text-3xl">Shop by Category</h2>
        <p className="mt-2 text-sm text-current/60">Find the perfect piece for every occasion.</p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {categories.map((category) => (
          <Link
            key={category.id}
            to={`/shop?category=${category.id}`}
            className="group relative aspect-[4/5] overflow-hidden rounded-sm bg-[#f5f5f0]"
          >
            <img
              alt={category.name}
              data-strk-img-id={`category-${category.id}`}
              data-strk-img={`[category-name-${category.id}] [category-desc-${category.id}]`}
              data-strk-img-ratio="4x5"
              data-strk-img-width="600"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent transition-opacity duration-300 group-hover:opacity-80" />
            <div className="absolute inset-x-0 bottom-0 p-6">
              <h3
                id={`category-name-${category.id}`}
                className="font-serif text-xl text-white sm:text-2xl"
              >
                {category.name}
              </h3>
              <p
                id={`category-desc-${category.id}`}
                className="mt-1 text-sm text-white/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              >
                {category.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
