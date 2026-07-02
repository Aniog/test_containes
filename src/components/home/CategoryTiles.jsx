import React from 'react'
import { Link } from 'react-router-dom'
import { categories } from '@/data/products'
import { ArrowRight } from 'lucide-react'

export default function CategoryTiles() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <span className="text-gold text-xs tracking-[0.3em] uppercase font-medium">Browse by</span>
          <h2 className="section-title mt-3">Shop by Category</h2>
          <div className="w-12 h-px bg-gold/40 mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative aspect-[4/5] overflow-hidden rounded-sm block"
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <h3 className="font-serif text-2xl md:text-3xl text-white tracking-wide group-hover:text-gold-light transition-colors">
                  {cat.name}
                </h3>
                <div className="flex items-center gap-2 mt-2 text-white/70 text-xs tracking-[0.2em] uppercase group-hover:text-white transition-colors">
                  <span>Shop Now</span>
                  <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}