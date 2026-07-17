import React from 'react'
import { Link } from 'react-router-dom'

const categories = [
  {
    id: 'cat-earrings',
    name: 'Earrings',
    to: '/shop?category=earrings',
    imgId: 'cat-tile-earrings',
    titleId: 'cat-title-earrings',
  },
  {
    id: 'cat-necklaces',
    name: 'Necklaces',
    to: '/shop?category=necklaces',
    imgId: 'cat-tile-necklaces',
    titleId: 'cat-title-necklaces',
  },
  {
    id: 'cat-huggies',
    name: 'Huggies',
    to: '/shop?category=huggies',
    imgId: 'cat-tile-huggies',
    titleId: 'cat-title-huggies',
  },
]

export default function CategoryTiles() {
  return (
    <section className="py-16 md:py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="section-subtitle mb-3">Browse by Style</p>
          <h2 className="section-title">Shop by Category</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={cat.to}
              className="group relative overflow-hidden aspect-[4/5] bg-brand-espresso"
            >
              <img
                data-strk-img-id={cat.imgId}
                data-strk-img={`[${cat.titleId}] gold jewelry product`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={cat.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />

              {/* Label */}
              <div className="absolute inset-0 flex items-end justify-center pb-10">
                <div className="text-center">
                  <h3
                    id={cat.titleId}
                    className="font-serif text-2xl md:text-3xl text-white tracking-ultra-wide uppercase"
                  >
                    {cat.name}
                  </h3>
                  <span className="inline-block mt-2 text-[10px] tracking-widest uppercase text-white/70 border-b border-white/40 pb-0.5 group-hover:border-brand-gold-pale group-hover:text-brand-gold-pale transition-colors duration-300">
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
