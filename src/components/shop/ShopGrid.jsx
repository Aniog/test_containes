import React from 'react'
import ProductCard from '@/components/home/ProductCard'

export default function ShopGrid({ products }) {
  if (products.length === 0) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center py-20 text-center">
        <p className="font-serif text-2xl text-brand-base mb-3">No results found</p>
        <p className="text-brand-muted text-sm">Try adjusting your filters or search terms.</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}
