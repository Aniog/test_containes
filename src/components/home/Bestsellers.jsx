import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import ProductCard from '@/components/product/ProductCard'
import Reveal from '@/components/ui/Reveal'
import { PRODUCTS } from '@/data/products'

export default function Bestsellers() {
  return (
    <section className="py-20 md:py-28">
      <div className="velmora-container">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="eyebrow">The Icons</p>
              <h2 className="mt-4 font-display text-4xl font-medium text-velmora-ink md:text-5xl">
                Bestsellers
              </h2>
            </div>
            <Link
              to="/shop"
              className="group flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.28em] text-velmora-gold transition-colors hover:text-velmora-gold-light"
            >
              View All
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={2} />
            </Link>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-x-5 gap-y-12 md:grid-cols-3 md:gap-x-8 lg:grid-cols-5">
          {PRODUCTS.map((product, i) => (
            <Reveal key={product.id} delay={i * 80} className={i >= 4 ? 'hidden md:block' : ''}>
              <ProductCard product={product} index={i} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
