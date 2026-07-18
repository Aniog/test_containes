import React from 'react'
import { Link } from 'react-router-dom'
import { products } from '../../data/products'
import ProductCard from '../shop/ProductCard'

export default function Bestsellers() {
  return (
    <section className="py-16 md:py-24 bg-velmora-surface">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="font-sans text-xs tracking-mega-wide uppercase text-velmora-gold mb-3">
            Curated for You
          </p>
          <h2 id="bestsellers-title" className="section-title">Bestsellers</h2>
          <div className="w-12 h-[1px] bg-velmora-gold mx-auto mt-4" />
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* View all link */}
        <div className="text-center mt-12">
          <Link to="/shop" className="btn-outline text-xs">
            View All Jewelry
          </Link>
        </div>
      </div>
    </section>
  )
}
