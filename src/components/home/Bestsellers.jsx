import React from 'react'
import { products } from '@/data/products'
import ProductCard from '@/components/ui/ProductCard'

export default function Bestsellers() {
  const bestsellers = products.filter(p => p.bestseller)

  return (
    <section className="py-16 md:py-24 bg-surface">
      <div className="max-w-container mx-auto px-6 md:px-10">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl tracking-wide text-foreground">Bestsellers</h2>
          <p className="font-sans text-sm text-foregroundMuted mt-3 tracking-wide">The pieces our customers love most</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {bestsellers.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
