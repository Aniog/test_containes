import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import ProductCard from './ProductCard'
import { products } from '../../data/products'

export default function Bestsellers() {
  // Use first 5 products as bestsellers
  const bestsellers = products.slice(0, 5)

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="flex items-end justify-between mb-10">
        <div>
          <span className="text-xs tracking-[0.15em] text-velmora-gold">DISCOVER</span>
          <h2 className="serif text-4xl tracking-wide mt-1">Bestsellers</h2>
        </div>
        <Link to="/shop" className="hidden md:block text-sm tracking-wider hover:text-velmora-gold transition-colors">
          VIEW ALL →
        </Link>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-5 gap-y-12">
        {bestsellers.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
          >
            <ProductCard product={product} />
          </motion.div>
        ))}
      </div>

      <div className="mt-10 text-center md:hidden">
        <Link to="/shop" className="text-sm tracking-wider hover:text-velmora-gold transition-colors">
          VIEW ALL →
        </Link>
      </div>
    </section>
  )
}
