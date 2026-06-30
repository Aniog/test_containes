import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { products } from '@/lib/products'
import ProductCard from './ProductCard'

export default function Bestsellers() {
  return (
    <section className="py-20 md:py-28 bg-surface">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="font-sans text-[11px] text-accent uppercase tracking-[0.2em] mb-3">
              The Edit
            </p>
            <h2 className="section-title">Bestsellers</h2>
          </div>
          <Link
            to="/shop"
            className="hidden md:flex items-center gap-2 font-sans text-xs text-muted hover:text-accent transition-colors uppercase tracking-[0.08em]"
          >
            View All
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.slice(0, 5).map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Link to="/shop" className="btn-outline text-sm">
            View All Products
          </Link>
        </div>
      </div>
    </section>
  )
}
