import React, { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '../../strk-img-config.json'
import { Link } from 'react-router-dom'

const categoryTiles = [
  {
    id: 'earrings',
    name: 'EARRINGS',
    query: 'gold earrings collection jewelry display',
    link: '/shop?category=earrings',
  },
  {
    id: 'necklaces',
    name: 'NECKLACES',
    query: 'gold necklaces collection jewelry display',
    link: '/shop?category=necklaces',
  },
  {
    id: 'huggies',
    name: 'HUGGIES',
    query: 'gold huggie earrings collection jewelry',
    link: '/shop?category=huggies',
  },
]

export default function CategoryTiles() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="serif-heading text-2xl md:text-3xl tracking-[0.05em] text-center mb-10 md:mb-14">
          Shop by Category
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categoryTiles.map((tile) => (
            <Link
              key={tile.id}
              to={tile.link}
              className="group relative aspect-[4/5] bg-[var(--velmora-bg-alt)] overflow-hidden"
            >
              <img
                alt={tile.name}
                data-strk-img-id={`category-${tile.id}`}
                data-strk-img={`[${tile.name}] [category-${tile.id}-label]`}
                data-strk-img-ratio="4x5"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />

              {/* Label */}
              <div className="absolute inset-0 flex items-center justify-center">
                <h3
                  id={`category-${tile.id}-label`}
                  className="product-name text-white text-xl md:text-2xl tracking-[0.2em] opacity-90 group-hover:opacity-100 transition-opacity"
                >
                  {tile.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
