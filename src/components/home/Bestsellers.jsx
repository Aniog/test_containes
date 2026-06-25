import React from 'react'
import { Link } from 'react-router-dom'
import { ProductCard } from '@/components/product/ProductCard'
import { Button } from '@/components/ui/Button'
import { getBestsellers } from '@/data/products'

export function Bestsellers() {
  const products = getBestsellers()
  return (
    <section className="bg-ivory py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mb-12 text-center">
          <p className="text-[11px] uppercase tracking-[0.3em] text-gold">Most Loved</p>
          <h2 className="mt-3 font-serif text-4xl text-ink md:text-5xl">Bestsellers</h2>
          <div className="mx-auto mt-5 h-px w-12 bg-gold" />
        </div>

        <div className="grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-3 lg:grid-cols-5">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>

        <div className="mt-14 text-center">
          <Button as={Link} to="/shop" variant="outline">
            View All Jewelry
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Bestsellers
