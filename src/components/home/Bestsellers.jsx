import { Link } from 'react-router-dom'
import { getBestsellers } from '@/data/products'
import ProductCard from '@/components/product/ProductCard'
import { useStrkImages } from '@/hooks/useStrkImages'

export default function Bestsellers() {
  const products = getBestsellers()
  const containerRef = useStrkImages()

  return (
    <section ref={containerRef} className="py-20 md:py-28">
      <div className="mx-auto max-w-8xl px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <p className="text-[11px] uppercase tracking-[0.3em] text-gold mb-3">
              Most Loved
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-ink">Bestsellers</h2>
          </div>
          <Link
            to="/shop"
            className="text-[11px] uppercase tracking-[0.2em] text-charcoal hover:text-gold transition-colors border-b border-charcoal hover:border-gold pb-1 self-start md:self-auto"
          >
            View All
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-5 gap-y-10">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  )
}
