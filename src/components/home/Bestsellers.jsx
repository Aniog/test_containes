import React from 'react'
import { Link } from 'react-router-dom'
import ProductCard from '@/components/ProductCard'
import { products } from '@/data/products'
import { useStrkImages } from '@/lib/useStrkImages'

export default function Bestsellers() {
  const containerRef = useStrkImages([])
  const bestsellers = products.filter((p) => p.bestseller)

  return (
    <section ref={containerRef} className="py-20 md:py-28">
      <div className="container-editorial">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs uppercase tracking-widest3 text-gold mb-3">Most Loved</p>
          <h2 className="font-serif text-4xl md:text-5xl text-espresso-800">Bestsellers</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-5 gap-y-10 md:gap-x-6">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-14">
          <Link to="/shop" className="btn-outline">
            View All
          </Link>
        </div>
      </div>
    </section>
  )
}
