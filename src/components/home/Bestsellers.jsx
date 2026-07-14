import { Link } from 'react-router-dom'
import ProductCard from '@/components/product/ProductCard'
import { products } from '@/data/products'
import { useStrkImages } from '@/lib/strk-image'

export default function Bestsellers() {
  const ref = useStrkImages([])
  const bestsellers = products.slice(0, 5)

  return (
    <section ref={ref} className="py-20 md:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-3">Most Loved</p>
          <h2 className="font-serif text-4xl md:text-5xl text-ink">Bestsellers</h2>
          <p className="text-muted mt-4 max-w-md mx-auto">
            The pieces our community reaches for, again and again.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-5 gap-y-10 md:gap-x-6">
          {bestsellers.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>

        <div className="text-center mt-14">
          <Link
            to="/shop"
            className="inline-block border border-ink text-ink px-10 py-3.5 text-xs uppercase tracking-[0.25em] font-medium hover:bg-ink hover:text-cream transition-colors"
          >
            View All
          </Link>
        </div>
      </div>
    </section>
  )
}
