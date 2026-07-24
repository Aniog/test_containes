import React from 'react'
import { Link } from 'react-router-dom'
import { categories } from '../../data/products'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

export default function CategoryTiles() {
  const [ref, isVisible] = useScrollAnimation(0.1)

  return (
    <section ref={ref} className={`py-16 md:py-24 animate-on-scroll ${isVisible ? 'is-visible' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="section-subtitle">Explore</p>
          <h2 className="section-title mt-2">Shop by Category</h2>
          <div className="w-12 h-px bg-velmora-gold mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/shop?category=${category.id}`}
              className="group relative aspect-[4/5] overflow-hidden"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-velmora-base/30 group-hover:bg-velmora-base/40 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <h3 className="font-serif text-2xl md:text-3xl text-white tracking-wider">
                    {category.name}
                  </h3>
                  <span className="inline-block mt-4 font-sans text-xs tracking-widest uppercase text-velmora-gold-light opacity-0 group-hover:opacity-100 transition-opacity duration-300 border-b border-velmora-gold-light pb-1">
                    Shop Now
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
