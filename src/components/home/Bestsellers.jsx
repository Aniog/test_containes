import React from 'react'
import { Link } from 'react-router-dom'
import ProductCard from '@/components/ui/ProductCard'
import { products } from '@/data/products'

const bestsellers = products.filter((p) => p.bestseller)

export default function Bestsellers() {
  return (
    <section className="py-20 md:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <div className="text-center mb-14">
          <h2 className="font-serif text-3xl md:text-4xl font-light tracking-wider uppercase text-truffle-800">
            Bestsellers
          </h2>
          <div className="mt-4 mx-auto w-12 h-px bg-gold" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 lg:gap-8">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-14">
          <Link to="/shop" className="btn-outline text-xs tracking-widest uppercase">
            View All Products
          </Link>
        </div>
      </div>
    </section>
  )
}
