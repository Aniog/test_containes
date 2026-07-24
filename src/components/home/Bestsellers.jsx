import { Link } from 'react-router-dom'
import { products } from '@/data/products'
import ProductCard from '@/components/product/ProductCard'
import { useImageLoader } from '@/lib/useImageLoader'

export default function Bestsellers() {
  const ref = useImageLoader([])
  const bestsellers = products.filter((p) => p.bestseller).slice(0, 5)

  return (
    <section ref={ref} className="py-20 md:py-28 bg-ivory">
      <div className="mx-auto max-w-8xl px-6 md:px-10">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-3">Most Loved</p>
          <h2 className="font-serif text-4xl md:text-5xl text-charcoal">Bestsellers</h2>
          <p className="mt-4 text-sm text-stone max-w-md mx-auto">
            The pieces our community reaches for, again and again.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-5 gap-y-10">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-14">
          <Link
            to="/shop"
            className="inline-block border border-ink text-ink px-10 py-3.5 text-xs uppercase tracking-[0.25em] font-medium hover:bg-ink hover:text-ivory transition-colors"
          >
            View All Jewelry
          </Link>
        </div>
      </div>
    </section>
  )
}
