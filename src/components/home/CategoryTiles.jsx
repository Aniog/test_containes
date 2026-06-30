import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import { categories } from '../../data/products'

export default function CategoryTiles() {
  const containerRef = useRef(null)

  return (
    <section ref={containerRef} className="section-padding bg-[#faf8f5]">
      <div className="container-padding">
        <h2 className="font-['Cormorant_Garamond'] text-3xl md:text-4xl text-center mb-12">
          Shop by Category
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative aspect-[4/5] bg-gradient-to-br from-[#d4c5b2] to-[#c9b896] overflow-hidden"
            >
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <h3 className="font-['Cormorant_Garamond'] text-2xl md:text-3xl uppercase tracking-[0.15em] mb-2">
                    {cat.name}
                  </h3>
                  <span className="text-xs uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300 border-b border-white pb-1">
                    Explore
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
