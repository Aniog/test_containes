import React from 'react'
import { Link } from 'react-router-dom'
import { products } from '@/data/products'
import ProductCard from '@/components/shared/ProductCard'

export default function BestsellersSection() {
  const bestsellers = products.filter((p) => p.tags.includes('bestseller'))

  return (
    <section className="py-20 sm:py-28 bg-cream-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col items-center text-center">
          <p className="section-label mb-3">Most Loved</p>
          <h2 className="font-serif text-4xl text-espresso-900 sm:text-5xl">Bestsellers</h2>
          <p className="mt-4 max-w-md text-warmgray-600">
            The pieces our customers reach for again and again.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-3 lg:grid-cols-5">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-14 text-center">
          <Link to="/shop" className="btn-outline inline-flex">Shop All</Link>
        </div>
      </div>
    </section>
  )
}
