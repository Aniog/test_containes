import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const categories = [
  {
    id: 'earrings',
    name: 'EARRINGS',
    image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=800&q=80',
    link: '/collection?category=earrings',
  },
  {
    id: 'necklaces',
    name: 'NECKLACES',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80',
    link: '/collection?category=necklaces',
  },
  {
    id: 'huggies',
    name: 'HUGGIES',
    image: 'https://images.unsplash.com/photo-1635767798638-3e25273a8236?w=800&q=80',
    link: '/collection?category=huggies',
  },
]

export default function CategoryTiles() {
  const [hoveredId, setHoveredId] = useState(null)

  return (
    <section className="py-20 md:py-28 bg-velmora-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-velmora-gold text-xs tracking-super-wide uppercase mb-3">Explore</p>
          <h2 className="font-serif text-4xl md:text-5xl text-velmora-base">Shop by Category</h2>
          <div className="w-12 h-px bg-velmora-gold mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={cat.link}
              className="relative aspect-[4/5] overflow-hidden group"
              onMouseEnter={() => setHoveredId(cat.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <h3 className="font-serif text-3xl md:text-4xl text-white tracking-super-wide mb-4">
                    {cat.name}
                  </h3>
                  <span className={`inline-block px-6 py-2 border border-white text-white text-xs tracking-super-wide uppercase transition-all duration-300 ${
                    hoveredId === cat.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}>
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
