import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { categories } from '@/data/products'

export default function ShopByCategory() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="bg-charcoal py-16 md:py-24">
      <div className="max-w-8xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-10 md:mb-14">
          <h2 id="category-section-title" className="font-serif text-3xl md:text-4xl tracking-wide text-cream">Shop by Category</h2>
          <div className="h-px w-12 bg-gold mx-auto mt-4" />
        </div>

        {/* Category tiles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map(cat => (
            <Link key={cat.id} to={`/shop?category=${cat.id}`} className="group block">
              <div className="relative aspect-[4x3] overflow-hidden">
                <img
                  data-strk-img-id={cat.imgId}
                  data-strk-img={`[${cat.titleId}] [category-section-title]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={cat.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/40 transition-colors duration-300 flex items-center justify-center">
                  <span id={cat.titleId} className="font-serif text-xl md:text-2xl tracking-product uppercase text-cream opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {cat.name}
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
