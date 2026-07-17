import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '../../strk-img-config.json'

const categoryTiles = [
  {
    id: 'cat-earrings',
    name: 'Earrings',
    query: 'gold earrings elegant jewelry collection display',
    link: '/shop?category=earrings',
  },
  {
    id: 'cat-necklaces',
    name: 'Necklaces',
    query: 'gold necklace elegant jewelry collection display',
    link: '/shop?category=necklaces',
  },
  {
    id: 'cat-huggies',
    name: 'Huggies',
    query: 'gold huggie earrings elegant jewelry collection display',
    link: '/shop?category=huggies',
  },
]

export default function CategoryTilesSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-[var(--velmora-bg)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="velmora-label text-[var(--velmora-accent)] mb-3">Explore</p>
          <h2 className="velmora-heading text-3xl md:text-4xl">Shop by Category</h2>
          <div className="velmora-divider-thin w-24 mx-auto mt-6" />
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categoryTiles.map((cat) => (
            <Link
              key={cat.id}
              to={cat.link}
              className="group relative aspect-[4/5] bg-[var(--velmora-bg-alt)] overflow-hidden cursor-pointer"
            >
              <img
                data-strk-img-id={cat.id}
                data-strk-img={cat.query}
                data-strk-img-ratio="4x5"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={cat.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />

              {/* Label */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <h3 className="velmora-product-name text-white text-xl md:text-2xl tracking-[0.2em] opacity-90 group-hover:opacity-100 transition-opacity">
                    {cat.name}
                  </h3>
                  <div className="w-12 h-px bg-white/60 mx-auto mt-4 group-hover:w-16 transition-all duration-300" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
