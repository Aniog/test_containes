import React from 'react'
import { Link } from 'react-router-dom'
import { categories } from '../../data/products'
import { ArrowRight } from 'lucide-react'

export default function CategoryTiles() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="section-title">Shop by Category</h2>
          <p className="section-subtitle">Find your perfect piece</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative aspect-[4/5] md:aspect-[3/4] overflow-hidden bg-[#F5EFE6]"
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[#1C1814]/0 group-hover:bg-[#1C1814]/40 transition-all duration-500" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                  <h3 className="font-heading text-3xl text-white tracking-wide mb-2">{cat.name}</h3>
                  <span className="inline-flex items-center gap-2 text-[#C9A96E] font-body text-xs uppercase tracking-wider">
                    Shop Now <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
              {/* Mobile fallback label */}
              <div className="md:hidden absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#1C1814]/80 to-transparent p-5">
                <h3 className="font-heading text-xl text-white tracking-wide">{cat.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}