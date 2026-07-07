import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { getBestsellers } from '@/data/products'
import { ProductCard } from '@/components/product/ProductCard'

export function BestSellers() {
  const products = getBestsellers(5)
  return (
    <section className="py-20 md:py-28 bg-cream">
      <div className="container-page">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">
          <div>
            <p className="eyebrow text-mocha">Most Loved</p>
            <h2 className="display-2 mt-3 text-deep">Bestsellers</h2>
            <p className="body-base mt-3 max-w-md">
              The pieces our community reaches for again and again. Quietly the most
              worn jewelry in our studio.
            </p>
          </div>
          <Link
            to="/shop"
            className="btn-ghost self-start md:self-end"
          >
            View the Collection
            <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 md:gap-7">
          {products.map((product, i) => (
            <ProductCard key={product.id} product={product} eager={i < 2} />
          ))}
        </div>
      </div>
    </section>
  )
}
