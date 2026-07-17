import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { products } from '@/data/products'
import ProductCard from '@/components/ui/ProductCard'
import { Reveal } from '@/hooks/useReveal'

export default function Bestsellers() {
  return (
    <section className="bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="flex flex-col items-center text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-gold-deep">Most Loved</p>
          <h2 className="mt-4 font-serif text-3xl font-medium tracking-wide text-ink md:text-5xl">
            The Bestsellers
          </h2>
          <p className="mt-4 max-w-lg text-sm leading-relaxed text-taupe-dark md:text-base">
            The pieces our community reaches for every day — layered, gifted, and never taken off.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-x-4 gap-y-10 md:gap-x-6 lg:grid-cols-3 xl:grid-cols-5">
          {products.map((product, i) => (
            <Reveal key={product.id} delay={i * 80}>
              <ProductCard product={product} />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14 flex justify-center">
          <Link
            to="/shop"
            className="group inline-flex items-center gap-3 border border-ink/20 px-10 py-4 text-xs font-semibold uppercase tracking-[0.22em] text-ink transition-colors hover:border-gold-deep hover:text-gold-deep"
          >
            View All Jewelry
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={1.5} />
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
