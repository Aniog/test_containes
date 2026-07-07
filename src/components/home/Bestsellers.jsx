import React from 'react'
import { Link } from 'react-router-dom'
import { products } from '@/data/products'
import ProductCard from '@/components/product/ProductCard'
import { useStrkImages } from '@/hooks/useStrkImages'

export default function Bestsellers() {
  const containerRef = useStrkImages([])

  return (
    <section ref={containerRef} className="bg-ivory py-20 md:py-28">
      <div className="mx-auto max-w-8xl px-5 md:px-8">
        <div className="mb-12 text-center">
          <p className="text-[11px] uppercase tracking-[0.3em] text-gold">
            Most Loved
          </p>
          <h2 className="mt-3 font-serif text-4xl text-ink md:text-5xl">
            Bestsellers
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-stone">
            The pieces our community reaches for again and again — and never takes off.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 lg:grid-cols-5 md:gap-x-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-14 text-center">
          <Link
            to="/shop"
            className="inline-flex items-center justify-center border border-ink px-10 py-4 text-[11px] uppercase tracking-[0.3em] text-ink transition-colors duration-300 hover:bg-ink hover:text-ivory"
          >
            View All Jewelry
          </Link>
        </div>
      </div>
    </section>
  )
}
