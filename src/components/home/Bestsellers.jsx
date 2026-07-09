import React, { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import { products } from '@/data/products'
import ProductCard from '@/components/home/ProductCard'
import strkImgConfig from '@/strk-img-config.json'

export default function Bestsellers() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12 md:mb-16">
        <p className="font-sans text-xs font-medium tracking-widest-3xl uppercase text-gold mb-3">
          Most loved
        </p>
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-base font-light">
          Bestsellers
        </h2>
        <div className="w-12 h-px bg-gold mx-auto mt-5" />
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* CTA */}
      <div className="text-center mt-12">
        <Link
          to="/shop"
          className="inline-flex items-center justify-center px-10 py-3.5 border border-base text-base text-xs font-medium tracking-widest-xl uppercase hover:bg-base hover:text-cream transition-all duration-300"
        >
          View All Jewelry
        </Link>
      </div>
    </section>
  )
}
