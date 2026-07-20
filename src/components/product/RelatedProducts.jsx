import React from 'react'
import ProductCard from '../home/ProductCard'
import { getRelatedProducts } from '../../data/products'

export default function RelatedProducts({ currentProductId }) {
  const related = getRelatedProducts(currentProductId, 4)

  if (related.length === 0) return null

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <h3 className="serif text-2xl tracking-wide mb-8">You May Also Like</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-x-5 gap-y-12">
        {related.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}
