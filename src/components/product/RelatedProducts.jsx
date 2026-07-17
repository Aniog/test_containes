import React from 'react'
import ProductCard from '@/components/home/ProductCard'
import products from '@/data/products'

export default function RelatedProducts({ currentId, category }) {
  const related = products
    .filter((p) => p.id !== currentId && p.category === category)
    .slice(0, 4)

  if (related.length === 0) return null

  return (
    <section className="section-padding py-20 md:py-28 bg-white">
      <div className="text-center mb-14">
        <p className="font-sans text-xs tracking-widest uppercase text-brand-gold mb-4">
          Complete Your Look
        </p>
        <h2 className="heading-serif text-3xl md:text-4xl text-brand-base">
          You May Also Like
        </h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-6 max-w-6xl mx-auto">
        {related.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}
