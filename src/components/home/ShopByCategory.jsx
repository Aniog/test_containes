import React from 'react'
import { Link } from 'react-router-dom'
import { categoryImages } from '@/data/images'

const categories = [
  { id: 'earrings', name: 'Earrings', to: '/shop?category=earrings' },
  { id: 'necklaces', name: 'Necklaces', to: '/shop?category=necklaces' },
  { id: 'huggies', name: 'Huggies', to: '/shop?category=huggies' },
]

export default function ShopByCategory() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-3">Shop by Category</h2>
          <p className="text-muted text-sm">Find your perfect piece.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={cat.to}
              className="group relative aspect-[3/4] md:aspect-[4/5] overflow-hidden"
            >
              <img
                src={categoryImages[cat.id]}
                alt={cat.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/35 transition-colors duration-500" />
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <h3 className="font-serif text-white text-2xl md:text-3xl tracking-[0.15em] mb-3">
                  {cat.name}
                </h3>
                <span className="text-white/80 text-xs tracking-[0.2em] uppercase border-b border-white/50 pb-0.5 group-hover:border-white transition-colors">
                  Explore
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
