import React from 'react'
import { products } from '../../data/products'
import ProductCard from '../ui/ProductCard'

export default function BestsellersSection() {
  const featuredProducts = products.filter((p) => p.featured)

  return (
    <section className="py-16 md:py-24 bg-[var(--velmora-bg)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="velmora-label text-[var(--velmora-accent)] mb-3">Curated for You</p>
          <h2 className="velmora-heading text-3xl md:text-4xl lg:text-5xl">Bestsellers</h2>
          <div className="velmora-divider-thin w-24 mx-auto mt-6" />
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 lg:gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-12">
          <a href="/shop" className="velmora-btn-outline">
            View All Products
          </a>
        </div>
      </div>
    </section>
  )
}
