import React from 'react'
import { Link } from 'react-router-dom'
import ProductCard from '@/components/products/ProductCard'
import { products } from '@/data/products'

const Bestsellers = () => {
  const bestsellers = products.slice(0, 5)

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl text-stone-900 mb-4">
            Bestsellers
          </h2>
          <p className="text-stone-600 max-w-2xl mx-auto">
            Our most-loved pieces, chosen by you. Each design embodies the quiet luxury and timeless elegance that defines Velmora.
          </p>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
          {bestsellers.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* View all link */}
        <div className="text-center mt-16">
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 text-stone-900 border-b border-stone-900 pb-1 text-sm tracking-widest uppercase font-medium hover:text-amber-700 hover:border-amber-700 transition-colors"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Bestsellers
