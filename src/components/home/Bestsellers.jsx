import React, { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import ProductCard from '@/components/ProductCard'
import { products } from '@/data/products'

export default function Bestsellers() {
  const containerRef = useRef(null)

  useEffect(() => {
    if (!containerRef.current) return
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-20 md:py-28 bg-ivory">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-gold mb-3">Most Loved</p>
          <h2 className="font-serif text-4xl md:text-5xl text-espresso">Bestsellers</h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <Link
            to="/shop"
            className="inline-block border border-espresso text-espresso px-10 py-4 text-xs tracking-[0.3em] uppercase hover:bg-espresso hover:text-cream transition-colors duration-300"
          >
            View All Jewelry
          </Link>
        </div>
      </div>
    </section>
  )
}
