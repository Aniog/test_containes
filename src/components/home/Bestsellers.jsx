import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { products } from '@/data/products'
import ProductCard from '@/components/product/ProductCard'
import Reveal from '@/components/Reveal'

export default function Bestsellers() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-28">
      <Reveal className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-widest3 text-gold">
            Most Loved
          </p>
          <h2
            id="bestsellers-title"
            className="mt-4 font-serif text-4xl font-light text-ivory md:text-5xl"
          >
            The <span className="italic text-goldlight">Bestsellers</span>
          </h2>
          <p id="bestsellers-subtitle" className="mt-4 max-w-md text-sm leading-relaxed text-sand">
            The pieces our community returns to — worn daily, gifted often,
            kept forever.
          </p>
        </div>
        <Link
          to="/shop"
          className="group inline-flex items-center gap-2 border-b border-gold/50 pb-1 text-[11px] font-semibold uppercase tracking-widest2 text-gold transition-colors duration-300 hover:border-gold hover:text-goldlight"
        >
          View All Pieces
          <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </Reveal>

      <div className="mt-12 grid grid-cols-2 gap-x-5 gap-y-12 md:gap-x-8 lg:grid-cols-5 lg:gap-x-6">
        {products.map((product, i) => (
          <Reveal key={product.id} delay={i * 90}>
            <ProductCard product={product} ratio="3x4" />
          </Reveal>
        ))}
      </div>
    </section>
  )
}
