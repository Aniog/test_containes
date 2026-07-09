import React, { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { categories } from '@/data/products'

const categoryImages = {
  earrings: { id: 'cat-earrings-f1a2b3', query: 'gold earrings jewelry collection' },
  necklaces: { id: 'cat-necklaces-c4d5e6', query: 'gold necklace jewelry chain pendant' },
  huggies: { id: 'cat-huggies-g7h8i9', query: 'gold huggie hoop earrings jewelry' },
}

export default function Categories() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <p className="font-sans text-xs font-medium tracking-widest-3xl uppercase text-gold mb-3">
          Explore
        </p>
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-base font-light">
          Shop by Category
        </h2>
        <div className="w-12 h-px bg-gold mx-auto mt-5" />
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {categories.map((cat) => {
          const img = categoryImages[cat.id]
          return (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative aspect-[4/3] overflow-hidden rounded-sm"
            >
              <img
                data-strk-img-id={`category-${cat.id}-img`}
                data-strk-img={`[${cat.id}-label] ${img.query} fine jewelry`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={cat.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-base/30 group-hover:bg-base/40 transition-colors duration-500" />

              {/* Label */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <h3
                  id={`${cat.id}-label`}
                  className="font-serif text-2xl md:text-3xl text-cream font-light tracking-wider"
                >
                  {cat.name}
                </h3>
                <span className="font-sans text-2xs text-cream/70 tracking-widest-xl uppercase mt-2 group-hover:text-gold transition-colors duration-300">
                  Shop Now
                </span>
              </div>
            </Link>
          )
        })}
      </div>
    </section>
  )
}
