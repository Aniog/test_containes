import React from 'react'
import { Link } from 'react-router-dom'

const categories = [
  {
    id: 'earrings',
    name: 'Earrings',
    query: 'gold earrings collection editorial luxury product',
    link: '/shop?category=earrings',
  },
  {
    id: 'necklaces',
    name: 'Necklaces',
    query: 'gold necklaces collection editorial luxury product',
    link: '/shop?category=necklaces',
  },
  {
    id: 'huggies',
    name: 'Huggies',
    query: 'gold huggie hoop earrings collection luxury product',
    link: '/shop?category=huggies',
  },
]

export default function CategoryTiles() {
  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="font-sans text-xs tracking-mega-wide uppercase text-gold-600 mb-3">
            Explore
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-onyx-900">
            Shop by Category
          </h2>
          <div className="w-12 h-px bg-gold-400 mx-auto mt-5" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={cat.link}
              className="group relative aspect-[4/5] sm:aspect-[3/4] overflow-hidden"
            >
              <img
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                data-strk-img-id={`category-tile-${cat.id}`}
                data-strk-img={cat.query}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={cat.name}
              />
              <div className="absolute inset-0 bg-onyx-950/30 group-hover:bg-onyx-950/50 transition-colors duration-500" />
              <div className="absolute inset-0 flex items-end justify-center pb-10">
                <div className="text-center">
                  <h3 className="font-serif text-2xl sm:text-3xl text-ivory-50 tracking-wide">
                    {cat.name}
                  </h3>
                  <span className="inline-block mt-2 font-sans text-xs tracking-ultra-wide uppercase text-gold-300 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
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
