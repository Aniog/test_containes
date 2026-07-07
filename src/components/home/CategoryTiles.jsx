import React from 'react'
import { Link } from 'react-router-dom'

const tiles = [
  {
    name: 'Earrings',
    slug: 'earrings',
    src: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="800" height="600" fill="%233B322E"%3E%3Crect width="800" height="600"/%3E%3Ctext x="400" y="320" text-anchor="middle" fill="%23C8A96E" font-size="32" font-family="serif"%3EEarrings%3C/text%3E%3C/svg%3E',
  },
  {
    name: 'Necklaces',
    slug: 'necklaces',
    src: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="800" height="600" fill="%234A403B"%3E%3Crect width="800" height="600"/%3E%3Ctext x="400" y="320" text-anchor="middle" fill="%23D4A99C" font-size="32" font-family="serif"%3ENecklaces%3C/text%3E%3C/svg%3E',
  },
  {
    name: 'Huggies',
    slug: 'huggies',
    src: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="800" height="600" fill="%232C2420"%3E%3Crect width="800" height="600"/%3E%3Ctext x="400" y="320" text-anchor="middle" fill="%23C8A96E" font-size="32" font-family="serif"%3EHuggies%3C/text%3E%3C/svg%3E',
  },
]

export default function CategoryTiles() {
  return (
    <section className="py-20 md:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <div className="text-center mb-14">
          <h2 className="font-serif text-3xl md:text-4xl font-light tracking-wider uppercase text-truffle-800">
            Shop by Category
          </h2>
          <div className="mt-4 mx-auto w-12 h-px bg-gold" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {tiles.map((tile) => (
            <Link
              key={tile.slug}
              to={`/shop?category=${tile.slug}`}
              className="group relative overflow-hidden aspect-[4/3] bg-truffle-100"
            >
              <img
                src={tile.src}
                alt={tile.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-truffle-900/30 group-hover:bg-truffle-900/50 transition-colors duration-500 flex items-end">
                <span className="font-serif text-cream text-2xl md:text-3xl tracking-wider uppercase p-6 md:p-8 transform group-hover:translate-y-0 transition-transform duration-500">
                  {tile.name}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
