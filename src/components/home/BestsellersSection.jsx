import React from 'react'
import ProductCard from '@/components/ui/ProductCard'
import { products } from '@/data/products'

export default function BestsellersSection() {
  const bestsellers = products.filter((p) => p.bestseller)

  return (
    <section className="velmora-section bg-[var(--velmora-cream)]">
      <div className="velmora-container">
        <div className="text-center mb-12">
          <span className="velmora-label text-[var(--velmora-accent)]">Most Loved</span>
          <h2 className="velmora-heading-md text-[var(--velmora-text)] mt-2">Bestsellers</h2>
          <div className="velmora-divider-thin w-16 mx-auto mt-4" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 lg:gap-8">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
