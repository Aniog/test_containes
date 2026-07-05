import React from 'react'
import { Link } from 'react-router-dom'
import { categories } from '../../data/products'

export default function ShopByCategory() {
  return (
    <section className="py-16 md:py-24 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="font-serif text-2xl md:text-3xl tracking-ultra-wide uppercase text-text-primary">
            Shop by Category
          </h2>
          <div className="w-12 h-px bg-muted-gold mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              to={`/shop?category=${cat.slug}`}
              className="group relative aspect-4x3 overflow-hidden rounded-sm"
            >
              <img
                data-strk-img-id={cat.imgId}
                data-strk-img={`[cat-${cat.slug}-label] gold jewelry`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={cat.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-warm-black/30 group-hover:bg-warm-black/40 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span
                  id={`cat-${cat.slug}-label`}
                  className="font-serif text-2xl md:text-3xl tracking-ultra-wide uppercase text-text-light"
                >
                  {cat.name}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
