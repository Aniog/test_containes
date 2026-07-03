import { Link } from 'react-router-dom'
import { products } from '@/data/products'
import ProductCard from '@/components/ProductCard'
import { useStrkImages } from '@/lib/useStrkImages'

export default function Bestsellers() {
  const ref = useStrkImages([])

  return (
    <section className="bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mb-12 text-center">
          <p className="text-[11px] uppercase tracking-widest2 text-gold-deep">Most Loved</p>
          <h2 className="mt-3 font-serif text-4xl text-ink md:text-5xl">Bestsellers</h2>
          <p className="mx-auto mt-3 max-w-md text-sm text-muted">
            The pieces our community reaches for again and again.
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-3 lg:grid-cols-5">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>

        <div className="mt-14 text-center">
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 border border-ink px-9 py-4 text-xs uppercase tracking-wide2 text-ink transition-all duration-300 hover:bg-ink hover:text-cream"
          >
            View All Jewelry
          </Link>
        </div>
      </div>
    </section>
  )
}
