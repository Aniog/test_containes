import { Link } from 'react-router-dom'
import ProductCard from '@/components/ProductCard'
import { products } from '@/data/products'
import { useImageLoader } from '@/hooks/useImageLoader'

export default function Bestsellers() {
  const containerRef = useImageLoader([])
  const bestsellers = products.slice(0, 5)
  return (
    <section ref={containerRef} className="py-20 md:py-28 bg-ivory">
      <div className="max-w-8xl mx-auto px-6 md:px-10">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs uppercase tracking-widest2 text-gold mb-3">Most Loved</p>
          <h2 className="font-serif text-4xl md:text-5xl text-ink">Bestsellers</h2>
          <p className="text-sm text-muted mt-3 max-w-md mx-auto">
            The pieces our community reaches for, again and again.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-5 gap-y-10 md:gap-x-6">
          {bestsellers.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>

        <div className="text-center mt-14">
          <Link
            to="/shop"
            className="inline-block text-xs uppercase tracking-widest2 border border-ink text-ink px-10 py-4 hover:bg-ink hover:text-ivory transition-colors"
          >
            View All Jewelry
          </Link>
        </div>
      </div>
    </section>
  )
}
