import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import ProductCard from '@/components/product/ProductCard'
import { products } from '@/data/products'

export default function Bestsellers() {
  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10 sm:mb-14">
          <div>
            <p className="text-overline font-medium tracking-[0.25em] text-gold uppercase mb-2">
              Curated for You
            </p>
            <h2 className="font-serif text-display-sm text-charcoal">
              Bestsellers
            </h2>
          </div>
          <Link
            to="/shop"
            className="hidden sm:flex items-center gap-1.5 text-body-sm font-medium text-warm-gray hover:text-gold transition-colors group"
          >
            View All
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-10 text-center sm:hidden">
          <Link
            to="/shop"
            className="inline-flex items-center gap-1.5 text-body-sm font-medium text-warm-gray hover:text-gold transition-colors"
          >
            View All Products
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
