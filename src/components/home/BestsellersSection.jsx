import React from 'react'
import { products } from '../../data/products'
import ProductCard from './ProductCard'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

export default function BestsellersSection() {
  const [ref, isVisible] = useScrollAnimation(0.1)

  return (
    <section ref={ref} className={`py-16 md:py-24 animate-on-scroll ${isVisible ? 'is-visible' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="section-subtitle">Most Loved</p>
          <h2 className="section-title mt-2">Bestsellers</h2>
          <div className="w-12 h-px bg-velmora-gold mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 lg:gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
