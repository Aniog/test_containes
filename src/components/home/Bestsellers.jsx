import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { products } from '@/data/products'
import ProductCard from '@/components/products/ProductCard'

export default function Bestsellers() {
  return (
    <section className="py-16 lg:py-24 bg-ivory-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-end justify-between mb-10 lg:mb-14">
          <div>
            <p className="text-caption tracking-ultra-wide uppercase text-gold mb-2 font-sans">
              Most Loved
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-surface-900">
              Bestsellers
            </h2>
          </div>
          <Link
            to="/shop"
            className="hidden sm:flex items-center gap-1.5 text-caption tracking-wider uppercase text-surface-600 hover:text-gold transition-colors duration-300 group"
          >
            View All
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {products.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>

        {/* Mobile "View All" link */}
        <div className="sm:hidden mt-8 text-center">
          <Link
            to="/shop"
            className="inline-flex items-center gap-1.5 text-caption tracking-wider uppercase text-surface-600 hover:text-gold transition-colors"
          >
            View All Products
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
