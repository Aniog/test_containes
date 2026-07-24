import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import ProductCard from '@/components/product/ProductCard'
import Reveal from '@/components/ui/Reveal'
import { PRODUCTS } from '@/data/products'

export default function Bestsellers() {
  return (
    <section className="py-16 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <Reveal className="mb-12 flex flex-col items-center text-center md:mb-16">
          <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-gold">Most Loved</p>
          <h2 className="mt-4 font-display text-3xl font-light text-espresso md:text-5xl">
            The Bestsellers
          </h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-mocha">
            The pieces our community reaches for again and again — quiet icons in warm gold.
          </p>
        </Reveal>

        <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 md:gap-x-8 lg:grid-cols-5 lg:gap-x-6">
          {PRODUCTS.map((product, i) => (
            <Reveal key={product.id} delay={i * 80}>
              <ProductCard product={product} />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14 flex justify-center">
          <Link
            to="/shop"
            className="group inline-flex items-center gap-3 border border-espresso/25 px-9 py-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-espresso transition-all duration-300 hover:border-espresso hover:bg-espresso hover:text-ivory"
          >
            View All Pieces
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
