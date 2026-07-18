import React from 'react'
import { Link } from 'react-router-dom'

const categoryData = [
  {
    id: 'earrings',
    name: 'Earrings',
    path: '/shop?category=earrings',
    description: 'From studs to statement drops',
    titleId: 'cat-earrings-title',
    descId: 'cat-earrings-desc',
    imgId: 'cat-earrings-img',
  },
  {
    id: 'necklaces',
    name: 'Necklaces',
    path: '/shop?category=necklaces',
    description: 'Layer-ready chains and pendants',
    titleId: 'cat-necklaces-title',
    descId: 'cat-necklaces-desc',
    imgId: 'cat-necklaces-img',
  },
  {
    id: 'huggies',
    name: 'Huggies',
    path: '/shop?category=huggies',
    description: 'Everyday essential hoops',
    titleId: 'cat-huggies-title',
    descId: 'cat-huggies-desc',
    imgId: 'cat-huggies-img',
  },
]

export default function ShopByCategory() {
  return (
    <section className="py-16 md:py-24 bg-velmora-surface">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="font-sans text-xs tracking-mega-wide uppercase text-velmora-gold mb-3">
            Explore
          </p>
          <h2 className="section-title">Shop by Category</h2>
          <div className="w-12 h-[1px] bg-velmora-gold mx-auto mt-4" />
        </div>

        {/* Category tiles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categoryData.map((cat) => (
            <Link
              key={cat.id}
              to={cat.path}
              className="group relative aspect-[4/5] md:aspect-[3/4] overflow-hidden rounded-sm"
            >
              <img
                data-strk-img-id={cat.imgId}
                data-strk-img={`[${cat.descId}] [${cat.titleId}] gold jewelry collection`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={cat.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />

              {/* Label */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                <h3 id={cat.titleId} className="font-serif text-3xl md:text-4xl tracking-wider mb-2">
                  {cat.name}
                </h3>
                <p id={cat.descId} className="font-sans text-xs tracking-wider uppercase text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {cat.description}
                </p>
                <span className="mt-4 font-sans text-[11px] tracking-widest uppercase border-b border-white/50 pb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Shop Now
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
