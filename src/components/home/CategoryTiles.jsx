import React from 'react'
import { Link } from 'react-router-dom'

const tiles = [
  {
    name: 'Earrings',
    slug: 'earrings',
    imgId: 'cat-earrings-tile',
    query: 'elegant gold earrings jewelry collection on dark background',
  },
  {
    name: 'Necklaces',
    slug: 'necklaces',
    imgId: 'cat-necklaces-tile',
    query: 'elegant gold necklace jewelry collection on dark background',
  },
  {
    name: 'Huggies',
    slug: 'huggies',
    imgId: 'cat-huggies-tile',
    query: 'gold huggie hoop earrings jewelry collection on dark background',
  },
]

export default function CategoryTiles() {
  return (
    <section className="py-16 md:py-24 bg-velmora-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="font-sans text-xs tracking-widest-3xl uppercase text-velmora-gold mb-3">
            Browse
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-velmora-black">
            Shop by Category
          </h2>
          <div className="w-12 h-px bg-velmora-gold mx-auto mt-5" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {tiles.map((tile) => (
            <Link
              key={tile.name}
              to={`/shop?category=${tile.slug}`}
              className="group relative aspect-[4/3] overflow-hidden"
            >
              <img
                data-strk-img-id={tile.imgId}
                data-strk-img={tile.query}
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={tile.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-500" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <h3 className="font-serif text-2xl md:text-3xl text-white tracking-wider mb-2">
                    {tile.name}
                  </h3>
                  <span className="inline-block font-sans text-[11px] tracking-widest-xl uppercase text-white/80 border-b border-white/60 pb-0.5 group-hover:text-velmora-gold-light group-hover:border-velmora-gold-light transition-colors duration-300">
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
