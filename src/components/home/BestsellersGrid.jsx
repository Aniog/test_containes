import React from 'react'
import { Link } from 'react-router-dom'
import ProductCard from './ProductCard'
import products from '@/data/products'

const bestsellers = products.filter((p) => p.tags.includes('bestseller'))

export default function BestsellersGrid() {
  return (
    <section className="section-padding py-20 md:py-28">
      <div className="text-center mb-14">
        <p className="font-sans text-xs tracking-widest uppercase text-brand-gold mb-4">
          Most Loved
        </p>
        <h2 className="heading-serif text-3xl md:text-4xl lg:text-5xl text-brand-base mb-4">
          Bestsellers
        </h2>
        <p className="text-brand-muted max-w-md mx-auto text-sm">
          The pieces our customers reach for every day — and keep coming back to gift.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 md:gap-6">
        {bestsellers.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="text-center mt-12">
        <Link to="/shop" className="btn-outline">
          Shop All Products
        </Link>
      </div>
    </section>
  )
}
