import { Link } from 'react-router-dom'
import { products } from '@/data/products'
import ProductCard from '@/components/ProductCard'
import { useStrkImages } from '@/components/StrkImage'

export default function Bestsellers() {
  const ref = useStrkImages([])
  const bestsellers = products.filter((p) => p.bestseller).slice(0, 5)

  return (
    <section ref={ref} className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-[11px] uppercase tracking-widest2 text-gold mb-3">Most Loved</p>
          <h2 className="font-serif text-4xl md:text-5xl text-ink">Bestsellers</h2>
          <p className="mt-4 text-sm text-sand max-w-md mx-auto">
            The pieces our community reaches for again and again.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-5 gap-y-10 md:gap-x-6">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-14">
          <Link
            to="/shop"
            className="inline-block border border-ink text-ink text-[11px] uppercase tracking-widest2 font-medium px-10 py-4 hover:bg-ink hover:text-ivory transition-colors"
          >
            View All
          </Link>
        </div>
      </div>
    </section>
  )
}
