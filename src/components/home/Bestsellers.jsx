import React from 'react'
import { Link } from 'react-router-dom'
import ProductCard from './ProductCard'
import { products } from '../../data/products'

const Bestsellers = () => {
  // Show first 5 products as bestsellers
  const bestsellers = products.slice(0, 5)

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="flex items-end justify-between mb-10">
        <div>
          <span className="text-xs tracking-[0.15em] uppercase text-velmora-gold">Curated for You</span>
          <h2 className="serif text-4xl mt-2">Bestsellers</h2>
        </div>
        <Link 
          to="/shop" 
          className="hidden md:block text-sm tracking-[0.08em] uppercase text-velmora-text-muted hover:text-velmora-gold transition-colors"
        >
          View All →
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {bestsellers.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="mt-8 text-center md:hidden">
        <Link 
          to="/shop" 
          className="text-sm tracking-[0.08em] uppercase text-velmora-text-muted hover:text-velmora-gold"
        >
          View All →
        </Link>
      </div>
    </section>
  )
}

export default Bestsellers
