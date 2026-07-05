import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { categories } from '../../data/products'

export default function CategoryTiles() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        <div className="text-center mb-12">
          <p className="text-gold text-xs uppercase tracking-[0.15em] font-medium mb-3">Browse by</p>
          <h2 className="font-serif text-3xl md:text-4xl text-velvet-900 font-light">
            Shop by Category
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative aspect-[4/5] md:aspect-[3/4] overflow-hidden bg-velvet-200"
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-[1.05]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <h3 className="font-serif text-2xl md:text-3xl text-white font-light">
                  {cat.name}
                </h3>
                <div className="flex items-center gap-2 mt-2 text-gold-light text-xs uppercase tracking-[0.12em] opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  <span>Shop Now</span>
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