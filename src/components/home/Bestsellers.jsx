import React from 'react'
import { Link } from 'react-router-dom'
import { products } from '@/data/products'
import ProductCard from '@/components/product/ProductCard'
import { Button } from '@/components/ui/button'

export default function Bestsellers() {
  const bestsellers = products.filter((p) => p.bestseller).slice(0, 5)

  return (
    <section className="py-16 md:py-24 bg-brand-bg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-xs uppercase tracking-widest text-brand-gold mb-2">Most Loved</p>
            <h2 className="section-title">Bestsellers</h2>
          </div>
          <Link to="/shop" className="hidden md:inline-flex text-xs uppercase tracking-widest text-brand-gold hover:text-brand-goldDark transition-colors">
            View All
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-10 text-center md:hidden">
          <Link to="/shop">
            <Button variant="outline" size="sm">View All</Button>
          </Link>
        </div>
      </div>
    </section>
  )
}