import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import ProductCard from '@/components/products/ProductCard'
import { products } from '@/data/products'

export default function Bestsellers() {
  const bestsellers = products.filter(p => p.badge === 'bestseller' || p.rating >= 4.8).slice(0, 5)

  return (
    <section className="py-20 md:py-28 bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-medium tracking-ultra-wide text-gold mb-3 block">
              CUSTOMER FAVORITES
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-espresso-800">
              Our Bestsellers
            </h2>
          </div>
          <Link
            to="/shop"
            className="group inline-flex items-center gap-2 text-sm font-medium text-espresso-800 hover:text-gold transition-colors"
          >
            View All
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {bestsellers.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
