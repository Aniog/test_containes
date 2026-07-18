import React from 'react'
import { Link } from 'react-router-dom'
import { products } from '../../data/products'
import ProductCard from './ProductCard'

const Bestsellers = () => {
  // Show first 5 products as bestsellers
  const bestsellers = products.slice(0, 5)

  return (
    <section className="max-w-7xl mx-auto px-6 py-16 md:py-20">
      <div className="flex items-end justify-between mb-10">
        <div>
          <div className="uppercase tracking-[0.15em] text-xs text-vel-gold mb-2">Signature Pieces</div>
          <h2 className="heading-serif text-4xl md:text-5xl tracking-[-0.01em]">Bestsellers</h2>
        </div>
        <Link to="/shop" className="hidden md:block text-sm underline-offset-4 hover:underline">
          View All
        </Link>
      </div>

      <div className="product-grid">
        {bestsellers.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="mt-10 text-center md:hidden">
        <Link to="/shop" className="btn btn-outline text-sm">View All Jewelry</Link>
      </div>
    </section>
  )
}

export default Bestsellers
