import React from 'react'
import { Link } from 'react-router-dom'
import { categories } from '@/data/products'

export default function CategoryTiles() {
  return (
    <section className="section-padding bg-cream">
      <div className="container-narrow">
        <h2 className="serif-heading text-3xl md:text-4xl text-center mb-2 font-light">
          Shop by Category
        </h2>
        <p className="text-espresso/50 text-center text-sm font-sans mb-12">
          Find the perfect piece for every moment
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              to={`/shop?category=${cat.slug}`}
              className="group relative aspect-[4/3] bg-muted-gold rounded-sm overflow-hidden"
            >
              <img
                src={`https://placehold.co/800x600/C8A45C/3C2415?text=${cat.title}`}
                alt={cat.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-espresso/30 group-hover:bg-espresso/10 transition-colors duration-300" />
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <h3 className="font-serif text-3xl md:text-4xl text-cream font-light tracking-wide">
                  {cat.title}
                </h3>
                <p className="font-sans text-xs uppercase tracking-[0.2em] text-cream/70 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {cat.subtitle}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}