import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function CategoryTiles() {
  const containerRef = useRef(null)

  useEffect(() => {
    if (containerRef.current) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    }
  }, [])

  const categories = [
    { id: 'earrings', name: 'Earrings', path: '/shop?category=earrings' },
    { id: 'necklaces', name: 'Necklaces', path: '/shop?category=necklaces' },
    { id: 'huggies', name: 'Huggies', path: '/shop?category=huggies' },
  ]

  return (
    <section ref={containerRef} className="section-padding bg-background">
      <div className="container-padding">
        <h2 className="serif-heading text-2xl sm:text-3xl md:text-4xl text-center mb-8 md:mb-10">
          Shop by Category
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={category.path}
              className="group relative aspect-[4/5] sm:aspect-[3/4] bg-secondary overflow-hidden"
            >
              <img
                data-strk-img-id={`category-${category.id}-img`}
                data-strk-img={`[${category.id}-category-title] [categories-title]`}
                data-strk-img-ratio="4x5"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />

              {/* Label */}
              <div className="absolute inset-0 flex items-center justify-center">
                <h3
                  id={`${category.id}-category-title`}
                  className="product-name text-white text-xl sm:text-2xl md:text-3xl tracking-widest opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                >
                  {category.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
