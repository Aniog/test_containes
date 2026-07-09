import React, { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products, categories } from '@/data/products'

const collections = [
  {
    id: 'earrings',
    name: 'Earrings',
    description: 'From subtle studs to statement drops — earrings that frame your face with quiet confidence.',
    query: 'gold earrings collection display jewelry',
  },
  {
    id: 'necklaces',
    name: 'Necklaces',
    description: 'Delicate chains and bold pendants designed to layer beautifully or shine alone.',
    query: 'gold necklace chain pendant jewelry collection',
  },
  {
    id: 'huggies',
    name: 'Huggies',
    description: 'The perfect everyday earring — sculptural, comfortable, and endlessly wearable.',
    query: 'gold huggie hoop earrings collection jewelry',
  },
]

export default function Collections() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef} className="min-h-screen pt-20 md:pt-24">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 text-center">
        <p className="font-sans text-xs font-medium tracking-widest-3xl uppercase text-gold mb-3">
          Curated
        </p>
        <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-base font-light">
          Our Collections
        </h1>
        <div className="w-12 h-px bg-gold mx-auto mt-5" />
        <p className="font-sans text-sm text-muted max-w-lg mx-auto mt-6 leading-relaxed">
          Explore our curated collections of demi-fine jewelry, 
          each piece designed to complement your personal style.
        </p>
      </div>

      {/* Collection Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-24">
        <div className="space-y-6 md:space-y-8">
          {collections.map((col, index) => {
            const colProducts = products.filter(p => p.category === col.id)
            const isReversed = index % 2 !== 0

            return (
              <Link
                key={col.id}
                to={`/shop?category=${col.id}`}
                className="group block"
              >
                <div className={`grid grid-cols-1 md:grid-cols-2 gap-0 overflow-hidden rounded-sm ${isReversed ? 'md:direction-rtl' : ''}`}>
                  {/* Image */}
                  <div className={`relative aspect-[4/3] md:aspect-auto overflow-hidden ${isReversed ? 'md:order-2' : ''}`}>
                    <img
                      data-strk-img-id={`collection-${col.id}-main`}
                      data-strk-img={`[collection-${col.id}-name] [collection-${col.id}-desc] ${col.query}`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="900"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={col.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>

                  {/* Content */}
                  <div className={`flex flex-col justify-center p-8 md:p-12 lg:p-16 bg-cream-dark ${isReversed ? 'md:order-1' : ''}`}>
                    <p className="font-sans text-xs font-medium tracking-widest-3xl uppercase text-gold mb-3">
                      Collection
                    </p>
                    <h2
                      id={`collection-${col.id}-name`}
                      className="font-serif text-3xl md:text-4xl text-base font-light mb-4"
                    >
                      {col.name}
                    </h2>
                    <p
                      id={`collection-${col.id}-desc`}
                      className="font-sans text-sm text-muted leading-relaxed mb-6 max-w-sm"
                    >
                      {col.description}
                    </p>
                    <span className="font-sans text-xs font-medium tracking-widest-xl uppercase text-base group-hover:text-gold transition-colors duration-300">
                      Explore Collection &rarr;
                    </span>
                    <p className="text-2xs text-muted mt-3">{colProducts.length} pieces</p>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}
