import React from 'react'
import { Link } from 'react-router-dom'
import ProductCard from '@/components/shared/ProductCard'
import { products } from '@/data/products'

export default function Bestsellers() {
  return (
    <section className="bg-cream py-16 md:py-24">
      <div className="max-w-8xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-10 md:mb-14">
          <h2 className="font-serif text-3xl md:text-4xl tracking-wide text-charcoal">Bestsellers</h2>
          <div className="h-px w-12 bg-gold mx-auto mt-4" />
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* View all link */}
        <div className="text-center mt-10 md:mt-14">
          <Link
            to="/shop"
            className="inline-block border border-gold text-gold font-sans text-xs tracking-ui uppercase px-8 py-3 hover:bg-gold hover:text-charcoal transition-colors duration-300"
          >
            View All
          </Link>
        </div>
      </div>
    </section>
  )
}
