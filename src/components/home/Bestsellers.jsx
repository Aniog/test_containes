import React from 'react'
import { products } from '../../data/products'
import ProductCard from './ProductCard'

export default function Bestsellers() {
  return (
    <section className="py-16 md:py-24 bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-gold-500 text-xs tracking-widest uppercase font-sans mb-3">
            Most Loved
          </p>
          <h2 className="section-title">Bestsellers</h2>
          <p className="section-subtitle mt-3 max-w-md mx-auto">
            Our most treasured pieces, chosen by women like you
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}