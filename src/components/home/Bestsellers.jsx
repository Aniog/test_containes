import { Link } from 'react-router-dom'
import ProductCard from '@/components/ProductCard'
import { PRODUCTS } from '@/data/products'
import { useStrkImages } from '@/components/StrkImage'

export default function Bestsellers() {
  const ref = useStrkImages([])
  const products = PRODUCTS.slice(0, 5)

  return (
    <section ref={ref} className="py-20 md:py-28 bg-ivory">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <p className="text-[11px] uppercase tracking-[0.25em] text-gold mb-3">
              Most Loved
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-ink">Bestsellers</h2>
          </div>
          <Link
            to="/shop"
            className="text-[11px] uppercase tracking-[0.22em] text-ink-soft hover:text-gold transition-colors border-b border-ink-soft hover:border-gold pb-1 self-start md:self-auto"
          >
            View All
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-5 gap-y-10">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
