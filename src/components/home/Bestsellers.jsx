import { Link } from 'react-router-dom'
import ProductCard from '@/components/product/ProductCard'
import { products } from '@/data/products'
import { useStrkImages } from '@/hooks/useStrkImages'

export default function Bestsellers() {
  const ref = useStrkImages([])

  return (
    <section ref={ref} className="mx-auto max-w-content px-6 py-20 md:px-10 md:py-28 lg:px-16">
      <div className="mb-12 flex flex-col items-center text-center">
        <p className="text-[11px] uppercase tracking-widest3 text-gold">Most Loved</p>
        <h2 className="mt-3 font-serif text-4xl text-ink md:text-5xl">Bestsellers</h2>
        <p className="mt-4 max-w-md text-sm text-ink-muted">
          The pieces our community reaches for again and again.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-3 lg:grid-cols-5 lg:gap-x-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="mt-14 flex justify-center">
        <Link
          to="/shop"
          className="border border-ink px-10 py-3.5 text-[11px] uppercase tracking-widest2 text-ink transition-colors duration-300 hover:bg-ink hover:text-cream-soft"
        >
          View All
        </Link>
      </div>
    </section>
  )
}
