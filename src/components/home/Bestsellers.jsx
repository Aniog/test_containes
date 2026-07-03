import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import ProductCard from '@/components/products/ProductCard'
import { products } from '@/data/products'

export default function Bestsellers() {
  const bestsellers = products.filter((p) => p.bestseller).slice(0, 5)

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="flex items-end justify-between">
        <div>
          <h2 className="font-serif text-2xl sm:text-3xl">Bestsellers</h2>
          <p className="mt-2 text-sm text-current/60">Our most-loved pieces, chosen by you.</p>
        </div>
        <Link
          to="/shop"
          className="hidden items-center gap-1 text-xs font-semibold uppercase tracking-widest text-current/70 hover:text-current transition-colors sm:flex"
        >
          View All
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>

      <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 lg:grid-cols-5">
        {bestsellers.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="mt-10 text-center sm:hidden">
        <Link
          to="/shop"
          className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-widest text-current/70 hover:text-current transition-colors"
        >
          View All
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </section>
  )
}
