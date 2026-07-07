import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '../../strk-img-config.json'

const categoryTiles = [
  {
    id: 'earrings',
    label: 'Earrings',
    description: 'Studs, drops & cuffs',
  },
  {
    id: 'necklaces',
    label: 'Necklaces',
    description: 'Chains & pendants',
  },
  {
    id: 'huggies',
    label: 'Huggies',
    description: 'Everyday essentials',
  },
]

export default function CategoryTiles() {
  const containerRef = useRef(null)

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current)
    }
  }, [])

  return (
    <section ref={containerRef} className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-10 sm:mb-14">
        <h2 className="font-serif text-3xl sm:text-4xl text-velmora-charcoal mb-3">Shop by Category</h2>
        <p className="text-sm text-velmora-stone">
          Find your perfect piece.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
        {categoryTiles.map((cat) => (
          <Link
            key={cat.id}
            to={`/collection?category=${cat.id}`}
            className="group relative aspect-[4/5] sm:aspect-[3/4] bg-velmora-warm overflow-hidden"
          >
            <img
              data-strk-img-id={`category-${cat.id}`}
              data-strk-img={`[cat-name-${cat.id}] [cat-desc-${cat.id}] luxury gold jewelry collection editorial`}
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={cat.label}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
              <h3 id={`cat-name-${cat.id}`} className="font-serif text-2xl sm:text-3xl mb-2 tracking-wide">
                {cat.label}
              </h3>
              <p id={`cat-desc-${cat.id}`} className="text-xs tracking-widest uppercase font-sans opacity-80">
                {cat.description}
              </p>
              <span className="mt-4 text-xs tracking-widest uppercase font-sans border-b border-white/50 pb-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Explore
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
