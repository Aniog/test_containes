import React from 'react'
import { Link } from 'react-router-dom'
import ProductCard from '../home/ProductCard'
import { products } from '../../data/products'

export default function RelatedProducts({ currentProductId }) {
  const related = products.filter((p) => p.id !== currentProductId).slice(0, 4)

  return (
    <section className="py-16 md:py-20 bg-velmora-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-velmora-gold text-sm tracking-widest mb-2">COMPLETE THE LOOK</p>
          <h2 className="font-serif text-3xl md:text-4xl text-velmora-base">You May Also Like</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {related.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
