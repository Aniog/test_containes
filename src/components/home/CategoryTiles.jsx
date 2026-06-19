import React from 'react'
import { Link } from 'react-router-dom'
import { categories } from '../../data/products'

export default function CategoryTiles() {
  return (
    <section className="section-padding">
      <div className="container-padding">
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-[0.3em] text-[hsl(var(--accent))] mb-3">Explore</p>
          <h2 className="serif-heading text-3xl md:text-4xl tracking-[0.15em]">Shop by Category</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {categories.map(cat => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative overflow-hidden rounded-sm aspect-[4/5] block"
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <h3 className="serif-heading text-2xl md:text-3xl tracking-[0.2em] mb-2">{cat.name}</h3>
                  <span className="text-xs uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-opacity duration-300 border-b border-white/60 pb-0.5">
                    Discover
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
