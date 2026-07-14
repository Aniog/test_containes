import { Link } from 'react-router-dom'
import { products } from '@/data/products'
import ProductCard from '@/components/product/ProductCard'
import { useStrkImages } from '@/hooks/useStrkImages'

export default function Bestsellers() {
  const ref = useStrkImages([])

  return (
    <section ref={ref} className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
      <div className="mb-12 text-center">
        <p className="text-xs uppercase tracking-widest2 text-gold">Most Loved</p>
        <h2 className="mt-3 font-serif text-4xl text-ink md:text-5xl">Bestsellers</h2>
        <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-stone">
          The pieces our community reaches for again and again — quietly
          luxurious, made to be worn every day.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-3 lg:grid-cols-5">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            titleId={`best-${product.id}-title`}
            descId={`best-${product.id}-desc`}
          />
        ))}
      </div>

      <div className="mt-14 text-center">
        <Link
          to="/shop"
          className="border border-ink px-10 py-4 text-xs uppercase tracking-widest2 text-ink transition-colors duration-300 hover:bg-ink hover:text-ivory"
        >
          View All
        </Link>
      </div>
    </section>
  )
}
