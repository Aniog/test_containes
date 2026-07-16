import React from 'react'
import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const categories = [
  {
    id: 'earrings',
    name: 'Earrings',
    imgId: 'cat-earrings-tile',
    search: 'gold earrings collection, elegant drop earrings and studs, luxury jewelry photography, warm lighting',
  },
  {
    id: 'necklaces',
    name: 'Necklaces',
    imgId: 'cat-necklaces-tile',
    search: 'gold necklaces collection, crystal pendant necklace, luxury jewelry photography, warm lighting',
  },
  {
    id: 'huggies',
    name: 'Huggies',
    imgId: 'cat-huggies-tile',
    search: 'gold huggie earrings collection, chunky dome huggies, luxury jewelry photography, warm lighting',
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
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-gold-600 text-xs tracking-wide-xl uppercase font-medium mb-3">
            Explore
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal-800">
            Shop by Category
          </h2>
          <div className="w-12 h-px bg-gold-400 mx-auto mt-5" />
        </div>

        {/* Category grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/shop?category=${category.id}`}
              className="group relative aspect-[4/5] overflow-hidden"
            >
              <img
                data-strk-img-id={category.imgId}
                data-strk-img={category.search}
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-700 ease-luxury group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-charcoal-900/30 group-hover:bg-charcoal-900/50 transition-all duration-500" />

              {/* Label */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <h3 className="font-serif text-2xl md:text-3xl text-cream-100 mb-2">
                    {category.name}
                  </h3>
                  <span className="text-xs tracking-nav uppercase text-cream-200 border-b border-cream-200/60 pb-0.5 group-hover:border-cream-200 transition-colors">
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
