import React from 'react'
import { Link } from 'react-router-dom'

const categoryTiles = [
  {
    id: 'earrings',
    name: 'Earrings',
    to: '/collection?category=earrings',
    imgId: 'cat-earrings-tile',
  },
  {
    id: 'necklaces',
    name: 'Necklaces',
    to: '/collection?category=necklaces',
    imgId: 'cat-necklaces-tile',
  },
  {
    id: 'huggies',
    name: 'Huggies',
    to: '/collection?category=huggies',
    imgId: 'cat-huggies-tile',
  },
]

export default function ShopByCategory() {
  return (
    <section className="py-16 md:py-24 bg-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="font-sans text-xs tracking-superwide uppercase text-gold mb-2">Browse By Style</p>
          <h2 className="section-heading">Shop by Category</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categoryTiles.map(cat => (
            <Link
              key={cat.id}
              to={cat.to}
              className="group relative aspect-[4/3] rounded-lg overflow-hidden"
            >
              <img
                data-strk-img-id={cat.imgId}
                data-strk-img={`${cat.name} gold jewelry collection editorial product photo`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 3'/%3E"
                alt={cat.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-charcoal/20 group-hover:bg-charcoal/40 transition-all duration-500" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-serif text-3xl md:text-4xl text-white tracking-wide group-hover:tracking-widest transition-all duration-500">
                  {cat.name}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
