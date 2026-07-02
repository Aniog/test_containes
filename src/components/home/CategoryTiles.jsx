import React from 'react'
import { Link } from 'react-router-dom'
import { categories } from '../../data/products'
import { ArrowRight } from 'lucide-react'

export default function CategoryTiles() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="gold-divider" />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl text-[#F5F0EB] font-light">
            Shop by Category
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              to={`/shop?category=${cat.slug}`}
              className="group relative aspect-[4/5] overflow-hidden rounded-sm bg-[#111111]"
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-500" />
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <h3 className="font-serif text-2xl md:text-3xl text-[#F5F0EB] font-light tracking-wider">
                  {cat.name}
                </h3>
                <div className="flex items-center gap-1 mt-3 text-[#C9A96E] text-sm opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  <span className="text-xs tracking-wider uppercase">Shop Now</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}