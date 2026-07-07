import React from 'react'
import { Link } from 'react-router-dom'
import { categories } from '@/data/products'

export function CategoryTiles() {
  return (
    <section className="bg-velmora-ivory py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-velmora-gold">Explore</p>
          <h2 className="mt-3 font-serif text-3xl md:text-4xl">Shop by Category</h2>
        </div>

        <div className="grid gap-4 md:grid-cols-3 md:gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/shop?category=${category.id}`}
              className="group relative aspect-[4/5] overflow-hidden bg-velmora-charcoal"
            >
              <div
                data-strk-bg-id={`category-bg-${category.id}`}
                data-strk-bg={`[category-${category.id}-label]`}
                data-strk-bg-ratio="4x5"
                data-strk-bg-width="800"
                className="absolute inset-0 bg-cover bg-center opacity-80 transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-velmora-charcoal/20 transition-colors duration-300 group-hover:bg-velmora-charcoal/10" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3
                  id={`category-${category.id}-label`}
                  className="border border-velmora-text-light/40 bg-velmora-charcoal/40 px-8 py-4 font-serif text-xl uppercase tracking-extra-wide text-velmora-text-light backdrop-blur-sm transition-all duration-300 group-hover:border-velmora-gold group-hover:bg-velmora-charcoal/60"
                >
                  {category.label}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
