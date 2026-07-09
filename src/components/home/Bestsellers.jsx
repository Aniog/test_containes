import React, { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '../../strk-img-config.json'
import { products } from '../../data/products'
import ProductCard from '../ui/ProductCard'

export default function Bestsellers() {
  const bestsellers = products.slice(0, 5)
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="serif-heading text-3xl md:text-4xl lg:text-5xl tracking-[0.05em] mb-3">
            Bestsellers
          </h2>
          <p className="text-sm text-[var(--velmora-text-muted)] tracking-wide">
            Our most loved pieces, chosen by you
          </p>
        </div>

        {/* Product grid */}
        <div ref={containerRef} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 lg:gap-8">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* View all link */}
        <div className="text-center mt-12">
          <a href="/shop" className="btn-outline inline-block">
            View All
          </a>
        </div>
      </div>
    </section>
  )
}
