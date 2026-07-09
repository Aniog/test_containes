import React from 'react'
import { products } from '../../data/products'
import ProductCard from './ProductCard'

export default function Bestsellers() {
  const bestsellers = products.slice(0, 5)

  return (
    <section className="py-16 md:py-24 bg-velmora-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-velmora-gold text-sm tracking-widest mb-2">MOST LOVED</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-velmora-base">Bestsellers</h2>
          <div className="w-12 h-px bg-velmora-gold mx-auto mt-4" />
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
