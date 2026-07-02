import React from 'react'
import { products } from '@/data/products'
import { ProductCard } from '@/components/product/ProductCard'
import { useImageLoader } from '@/hooks/useImageLoader'

export function Bestsellers() {
  const ref = useImageLoader()

  return (
    <section ref={ref} className="bg-cream-50 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="font-sans text-[11px] font-medium uppercase tracking-[0.22em] text-gold">
            Curated Favorites
          </p>
          <h2 className="mt-3 font-serif text-4xl text-espresso-900 md:text-5xl">
            Bestsellers
          </h2>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-3 lg:grid-cols-5">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
